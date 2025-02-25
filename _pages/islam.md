---
layout: page
title: "Islamic Studies"
permalink: "/islam"
---

<section class="category-filter" >
  <h3>Categories</h3>
  <ul class="category-list">
  <li><a href="#" data-category="all" class="category-link active">All</a></li>
    {% assign categories = site.posts | map: 'islam_category' | uniq | compact %}
    {% for category in categories %}
      <li>
        <a href="#" data-category="{{ category | slugify }}" class="category-link">
          {{ category }}
        </a>
      </li>
    {% endfor %}
  </ul>
</section>

<section class="posts archive" style="margin-top: 1rem">
  <ul class="article-list">
    {% for post in site.posts %}
      {% if post.content_type == "islam" %}
        <li data-categories="{{ post.islam_category | slugify }}">
          <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
</section>

<style>
 .category-filter {
  margin-bottom: 3rem;
  display: contents;
} 

.category-list {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.category-link {
  padding: 0.3rem 1rem;
  background: #f0f0f0;
  border-radius: 4px;
  text-decoration: none;
  color: #333;
}

.category-link:hover {
  background: #e0e0e0;
}

.category-link.active {
  background:rgb(0, 144, 0);
  color: #fff;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  try {
    const categoryLinks = document.querySelectorAll('.category-link');
    const articleItems = document.querySelectorAll('.article-list li');
    
    articleItems.forEach(item => item.style.display = 'flex');

    categoryLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const selectedCategory = this.getAttribute('data-category');

        categoryLinks.forEach(link => link.classList.remove('active'));
        

        this.classList.add('active');

        articleItems.forEach(item => {
          const itemCategories = item.getAttribute('data-categories');
          if (selectedCategory === 'all' || itemCategories.includes(selectedCategory)) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

  } catch (error) {
    console.error('Error in category filtering:', error);
  }
});
</script>
