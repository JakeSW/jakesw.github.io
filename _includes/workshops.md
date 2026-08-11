<h2 id="workshops" style="margin: 2px 0px -15px;">Workshops</h2>

<div class="publications workshops">
<ol class="bibliography">

{% for link in site.data.publications.workshops %}

<li>
<div class="pub-row">
  <div style="position: relative;">
      <div class="title"><a href="{% if link.page and link.page != './' %}{{ link.page }}{% else %}{{ link.pdf }}{% endif %}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.pdf and link.pdf != './' %}
      <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
      {% endif %}
      {% if link.code and link.code != './' %}
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.page and link.page != './' %}
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Webpage</a>
      {% endif %}
      {% if link.bibtex and link.bibtex != './' %}
      <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a>
      {% endif %}
      {% if link.notes %}
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %}
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>

{% endfor %}

</ol>
</div>
