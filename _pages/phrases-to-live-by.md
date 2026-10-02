---
layout: page
title: Phrases to Live By
seo_title: "Phrases to Live By & Commonplace | Ilyass Ouardi"
description: "A personal archive of timeless quotes, poems, and aphorisms collected over time that guide my thinking and life."
author_profile: true
permalink: "/phrases-to-live-by"
---

<p>
  A living collection of lines, poems, and aphorisms gathered over time. Some offer clarity during moments of decision, others capture the humility of the scientific pursuit, and some simply remind me of where I came from and who I strive to be.
</p>

<section class="posts archive">
  <ul>
    {% assign sorted_phrases = site.phrases | sort: 'date' | reverse %}
    {% for item in sorted_phrases %}
      <li>
        <a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}{% if item.author %} &mdash; {{ item.author }}{% endif %}</a>
        {% if item.date %}
        <time datetime="{{ item.date | date_to_xmlschema }}">{{ item.date | date: "%Y-%m-%d" }}</time>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</section>
