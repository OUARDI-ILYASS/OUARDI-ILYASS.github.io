---
layout: page
title: Articles
permalink: "/articles"
---

<section class="posts archive">
<ul>
{% for post in site.posts %}
    <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time></li>
{% endfor %}
</ul>
</section>