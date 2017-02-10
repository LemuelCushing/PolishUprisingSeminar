---
layout: home
permalink: /:path/
---

<h3 class="headline">{{site.title}}</h3>
<div style="background-color: #E8E8E8">
<ol>
{% assign sorted_pages = (site.sections | sort ) %}
{% for pg in sorted_pages %}
<LI class="sections"><a class="subsection" href="{{pg.url | prepend: site.baseurl}}">{{pg.title}}</a></LI>
{% endfor %}
</ol>
</div>

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
