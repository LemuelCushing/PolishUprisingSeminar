---
layout: list
title: Bibliography
---

<ul>

{% assign sorted_bib = site.data.bib | sort: "id" %}

{% for entry in sorted_bib %}
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
  <button 
  id= "{{ entry.id }}" 
  class="copy-button" 
  data-clipboard-target="#{{ entry.id }}" 
  style="
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;"
    >
    {% octicon clippy %}</button>

</li>
{% endfor %}
</ul>
<script type="text/javascript">

var clipboard = new Clipboard('.copy-button', {
    text: function(trigger) {
        return trigger.getAttribute('id');
    }
});


// clipboard.on('success', function(e) {
//     console.info('Action:', e.action);
//     console.info('Text:', e.text);
//     console.info('Trigger:', e.trigger);

//     e.clearSelection();
// });

// clipboard.on('error', function(e) {
//     console.error('Action:', e.action);
//     console.error('Trigger:', e.trigger);
// });

</script>