---
title: All Resources
narrow: true
permalink: list/resources.html
show_profile: true
---

{% for resource in site.resources %}
- [{{ resource.title }}]({{ site.baseurl }}{{ resource.url }})
{% endfor %}
