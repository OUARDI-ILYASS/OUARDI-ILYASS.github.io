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
  {% for item in site.data.phrases %}
  <article class="phrase-card">
    <div class="phrase-meta-top">
      {% if item.category %}
      <span class="phrase-category">{{ item.category }}</span>
      {% else %}
      <span></span>
      {% endif %}
      {% if item.date %}
      <time class="phrase-date">{{ item.date }}</time>
      {% endif %}
    </div>

    <blockquote class="phrase-body {% if item.is_poem %}is-poem{% endif %}">
      {{ item.quote | strip | newline_to_br }}
    </blockquote>

    <div class="phrase-attribution">
      &mdash; <span class="phrase-author">{{ item.author }}</span>{% if item.source %}, <span class="phrase-source">{% if item.url %}<a href="{{ item.url }}" target="_blank" rel="noopener noreferrer">{{ item.source }}</a>{% else %}{{ item.source }}{% endif %}</span>{% endif %}
    </div>

    {% if item.note %}
    <div class="phrase-reflection">
      <strong>Note:</strong> {{ item.note }}
    </div>
    {% endif %}
  </article>
  {% endfor %}
</div>
