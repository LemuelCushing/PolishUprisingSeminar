---
layout: home
permalink: /:path/
---

<div style="background-color: #E8E8E8; border-radius:10px;">
<h3 class="headline">{{site.title}}</h3>
<ol>
{% assign sorted_pages = (site.sections | sort ) %}
{% for pg in sorted_pages %}
<LI class="sections"><a class="subsection" href="{{pg.url | prepend: site.baseurl}}">{{pg.title}}</a></LI>
{% endfor %}
</ol>
<br>
<h3 style="margin-left:20px;">Lists</h3>
<ol class="lists">
{% for list in site.lists %}
<li class="lists"><a class="subsection" href="{{list.url | prepend: site.baseurl}}">{{list.title}}</a></li>
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
