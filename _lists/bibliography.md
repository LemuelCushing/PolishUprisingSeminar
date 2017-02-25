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
    <svg class="octicon octicon-clippy octicon octicon-clippy" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg>
    
    </button>

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