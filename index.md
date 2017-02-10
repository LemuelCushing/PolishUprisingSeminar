---
layout: default
---

<h3 class="headline">{{site.title}}</h3>
<OL>
<!-- {% assign sorted_pages = (site.pages | sort: 'title') %} -->
{% for pg in site.sections %}
<LI><a href="{{pg.url | prepend: site.baseurl}}">{{pg.title}}</a></LI>
{% endfor %}
</ol>

<!--
[Notes](./Notes.html)

[Tutorials](./Tutorials.html)

[Books](./Books.html)

[Chronicling America Tutorials](./ChronAmericaTutorials.html)

[Environment](./Env.html)

[Link Dump](./LinkDump.html)

[Presentation ToC](./Presentation-TableOfContent.html)

[Primary Sources](./PrimarySources.html)

[ToDo](./ToDo.html)

[To Sort](./ToSort.html) -->
