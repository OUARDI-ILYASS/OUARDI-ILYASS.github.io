(function () {
  let searchIndex = null;
  let selectedIndex = -1;

  const modal = document.getElementById('search-modal');
  const input = document.getElementById('modal-search-input');
  const resultsContainer = document.getElementById('modal-search-results');

  if (!modal || !input || !resultsContainer) return;

  function loadIndex() {
    if (searchIndex !== null) return Promise.resolve(searchIndex);
    return fetch('/search.json')
      .then(res => res.json())
      .then(data => {
        searchIndex = data;
        return searchIndex;
      })
      .catch(err => {
        console.error('Failed to load search index', err);
        return [];
      });
  }

  function openModal() {
    modal.classList.add('active');
    modal.style.display = 'flex';
    input.value = '';
    selectedIndex = -1;
    resultsContainer.innerHTML = '<div class="no-results">Type to search research, articles, notes...</div>';
    loadIndex();
    setTimeout(() => input.focus(), 50);
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.style.display = 'none';
    input.blur();
  }

  // Keyboard shortcut listener
  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modal.classList.contains('active')) {
        closeModal();
      } else {
        openModal();
      }
    } else if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Close on backdrop click
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Wire up any search link or button in navigation
  document.querySelectorAll('a[href="/search"], [data-open-search]').forEach(el => {
    el.addEventListener('click', function (e) {
      // If user clicks without Cmd/Ctrl, open modal directly
      if (!e.metaKey && !e.ctrlKey && !e.shiftKey) {
        e.preventDefault();
        openModal();
      }
    });
  });

  // Filter and display results
  input.addEventListener('input', function () {
    const query = input.value.trim().toLowerCase();
    selectedIndex = -1;

    if (!query) {
      resultsContainer.innerHTML = '<div class="no-results">Type to search research, articles, notes...</div>';
      return;
    }

    loadIndex().then(items => {
      const qTerms = query.split(/\s+/).filter(Boolean);
      
      const filtered = items.filter(item => {
        const text = ((item.title || '') + ' ' + (item.description || '') + ' ' + (item.tags || '') + ' ' + (item.category || '')).toLowerCase();
        return qTerms.every(term => text.includes(term));
      });

      // Score items: title match has highest priority
      filtered.sort((a, b) => {
        const aTitle = (a.title || '').toLowerCase().includes(query);
        const bTitle = (b.title || '').toLowerCase().includes(query);
        if (aTitle && !bTitle) return -1;
        if (!aTitle && bTitle) return 1;
        return 0;
      });

      if (filtered.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">No results found for "' + escapeHtml(query) + '"</div>';
        return;
      }

      let html = '';
      filtered.slice(0, 15).forEach((item, index) => {
        const badge = item.category ? `<span class="tag" style="float: right; font-size: 0.72rem; text-transform: uppercase;">${escapeHtml(item.category)}</span>` : '';
        html += `
          <a href="${item.url}" class="search-result-item" data-index="${index}">
            <div class="result-title">${badge}${escapeHtml(item.title)}</div>
            ${item.description ? `<div class="result-snippet">${escapeHtml(item.description)}</div>` : ''}
          </a>
        `;
      });

      resultsContainer.innerHTML = html;
      updateSelection();
    });
  });

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function (m) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m];
    });
  }

  function updateSelection() {
    const items = resultsContainer.querySelectorAll('.search-result-item');
    items.forEach((item, idx) => {
      if (idx === selectedIndex) {
        item.classList.add('selected');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('selected');
      }
    });
  }

  // Arrow key and Enter handling
  input.addEventListener('keydown', function (e) {
    const items = resultsContainer.querySelectorAll('.search-result-item');
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % items.length;
      updateSelection();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + items.length) % items.length;
      updateSelection();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && items[selectedIndex]) {
        items[selectedIndex].click();
      } else if (items[0]) {
        items[0].click();
      }
    }
  });
})();
