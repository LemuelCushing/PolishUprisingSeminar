---
layout: list
title: Bibliography
---


<ul>
{% for entry in site.data.bib  %}
  <li>
{{ entry.author[0].family  | capitalize }},
{{ entry.author[0].given  | capitalize }},
<i> {{ entry.title  | capitalize }} </i>,
{{ entry.container-title  }},
{{ entry.issue  }},
{{ entry.volume  }},
{{ entry.page  }},
<a href="{{ entry.URL  }}">LINK</a>,
{{ entry.issued.date-parts[0][0] }},

</li>
{% endfor %}
</ul>
