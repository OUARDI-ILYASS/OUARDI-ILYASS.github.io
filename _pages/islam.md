---
layout: page
title: "Islamic Studies"
permalink: "/islam"
---

<section class="posts archive">
<ul>
<!-- {% for post in site.posts %}
    <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time></li>
{% endfor %} -->
    {% for post in site.posts %}
      {% if post.content_type == "islam" %}
        <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time></li>
      {% endif %}
    {% endfor %}
</ul>
</section>

