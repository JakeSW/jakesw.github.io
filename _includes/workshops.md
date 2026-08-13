{% comment %} nomarkdown: kramdown would otherwise rewrite void elements with a trailing slash. {% endcomment %}
{::nomarkdown}
<h2 id="workshops" style="margin: 2px 0px -15px;">Short Papers and Workshops</h2>

<div class="publications workshops">

{% assign current_year = "" %}
{% for link in site.data.publications.workshops %}

{% if link.year != current_year %}
{% unless forloop.first %}</ol>{% endunless %}
<h3 class="year">{{ link.year }}</h3>
<ol class="bibliography">
{% assign current_year = link.year %}
{% endif %}

<li>
<div class="pub-row">
  <div style="position: relative;">
      {% comment %} Fall back to plain text when there is no real target yet ('./' placeholder). {% endcomment %}
      {% assign target = "" %}
      {% if link.page and link.page != './' %}{% assign target = link.page %}{% elsif link.pdf and link.pdf != './' %}{% assign target = link.pdf %}{% endif %}
      <div class="title">{% if target != "" %}<a href="{{ target }}">{{ link.title }}</a>{% else %}{{ link.title }}{% endif %}</div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.pdf and link.pdf != './' %}
      <a href="{{ link.pdf }}" class="btn btn-sm" role="button" target="_blank" rel="noopener" style="font-size:12px;">PDF</a>
      {% endif %}
      {% if link.code and link.code != './' %}
      <a href="{{ link.code }}" class="btn btn-sm" role="button" target="_blank" rel="noopener" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.page and link.page != './' %}
      <a href="{{ link.page }}" class="btn btn-sm" role="button" target="_blank" rel="noopener" style="font-size:12px;">Webpage</a>
      {% endif %}
      {% if link.bibtex and link.bibtex != './' %}
      <a href="{{ link.bibtex }}" class="btn btn-sm" role="button" target="_blank" rel="noopener" style="font-size:12px;">BibTex</a>
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
{:/nomarkdown}
