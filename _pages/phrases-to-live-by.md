---
layout: page
title: Phrases to Live By
seo_title: "Phrases to Live By & Commonplace | Ilyass Ouardi"
description: "A personal archive of timeless quotes, poems, and aphorisms collected over time that guide my thinking and life."
author_profile: true
permalink: "/phrases-to-live-by"
---

<div class="research-intro" style="margin-bottom: 2rem;">
  <p>
    A living collection of lines, poems, and aphorisms gathered over time. Some offer clarity during moments of decision, others capture the humility of the scientific pursuit, and some simply remind me of where I came from and who I strive to be.
  </p>
</div>

<div class="phrase-list">
  {% assign sorted_phrases = site.phrases | sort: 'date' | reverse %}
  {% for item in sorted_phrases %}
  <article class="phrase-card">
    <div class="phrase-meta-top">
      {% if item.category %}
      <span class="phrase-category">{{ item.category }}</span>
      {% else %}
      <span></span>
      {% endif %}
      {% if item.date %}
      <time class="phrase-date">{{ item.date | date: "%B %Y" }}</time>
      {% endif %}
    </div>

    <blockquote class="phrase-body is-truncated {% if item.is_poem %}is-poem{% endif %}">
      {{ item.content | strip_html | strip | newline_to_br }}
    </blockquote>

    <div class="phrase-attribution">
      &mdash; <span class="phrase-author">{{ item.author }}</span>{% if item.source %}, <span class="phrase-source">{% if item.source_url %}<a href="{{ item.source_url }}" target="_blank" rel="noopener noreferrer">{{ item.source }}</a>{% else %}{{ item.source }}{% endif %}</span>{% endif %}
    </div>

    <div class="phrase-card-footer">
      <a href="{{ item.url | relative_url }}" class="phrase-read-more">
        Read full piece &rarr;
      </a>
    </div>
  </article>
  {% endfor %}
</div>
