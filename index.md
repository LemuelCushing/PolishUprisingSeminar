---
layout: default
---

<h1 class="headline">{{site.title}}</h1>
{% for post in site.posts %}
<h3><a href="{{post.url | prepend: site.baseurl}}">{{post.title}}</a></h3>
{% endfor %}


[Notes](./Notes.html)

[Tutorials](./Tutorials.html)

[Books](./Books.html)

[Chronicling America Tutorials](./ChronAmericaTutorials.html)

[Environment](./Env.html)

[Link Dump](./LinkDump.html)

[Presentation ToC](./Presentation-TableOfContent.html)

[Primary Sources](./PrimarySources.html)

[ToDo](./ToDo.html)

[To Sort](./ToSort.html)
