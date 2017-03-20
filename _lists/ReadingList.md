---
layout: list
title: Reading List

completed:
    - kieniewicz_polish_1967-1
    - kutolowski_effect_1965
    - blinn_seward_1940
    - podraza_polish_1982
    - orlowski_henryk_1945
    - lerski_united_1973-1
    - uminski_two_1966-1
    
---

## Reading List


1. [Presidential Address: Roots and Links: Another Look at America's "Pre-Ethnic" Polish Exile Immigrants on JSTOR](https://www.jstor.org/stable/20148026?Search=yes&resultItemClick=true&searchText=1863&searchUri=%2Ftopic%2Fexile%2F%3FQuery%3D1863%26page%3D2%26amp%3D%26amp%3D%26topic%3Dexile&seq=1#page_scan_tab_contents)

2. [The Bilateral Effect of the Visit of the Russian Fleet in 1863](http://www.loyno.edu/~history/journal/1983-4/delehaye.htm)

# Complete

* [~~1863 Uprising - Russia's Periphery~~](http://russiasperiphery.blogs.wm.edu/western-borderlands/poland/general/1863-uprising/)

* [~~1863: the pochvenniki want Polish independence for the empire’s sake - XIX век~~](https://xixvek.wordpress.com/2012/04/09/1863-the-pochvenniki-want-polish-independence-for-the-empires-sake/)

{% for curItem in page.completed %}

{% assign entry = site.data.bib | where:"id", curItem  | first %}


* ~~{{ entry.author[0].family  | capitalize }},
{{ entry.author[0].given  | capitalize }},
<i> {{ entry.title  | capitalize }} </i>,
{{ entry.container-title  }},
{{ entry.issue  }},
{{ entry.volume  }},
{{ entry.page  }},
<a href="{{ entry.URL  }}">LINK</a>,
{{ entry.issued.date-parts[0][0] }}~~


{% endfor %}

<br>