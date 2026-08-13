{% comment %}
  Wrapped in nomarkdown so kramdown passes this block through verbatim.
  Without it kramdown rewrites void elements as <img ... />, which the W3C
  validator flags as a pointless trailing slash.
{% endcomment %}
{::nomarkdown}
<h2 id="publications" style="margin: 2px 0px -15px;">Main Publications</h2>

<div class="publications">

{% assign current_year = "" %}
{% for link in site.data.publications.main %}

{% if link.year != current_year %}
{% unless forloop.first %}</ol>{% endunless %}
<h3 class="year">{{ link.year }}</h3>
<ol class="bibliography">
{% assign current_year = link.year %}
{% endif %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image and link.image != './' %} 
    <img src="{{ link.image }}" class="teaser" alt="{{ link.title }} teaser figure" loading="lazy">
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      {% comment %} Fall back to plain text when there is no real target yet ('./' placeholder). {% endcomment %}
      {% assign target = "" %}
      {% if link.pdf and link.pdf != './' %}{% assign target = link.pdf %}{% elsif link.page and link.page != './' %}{% assign target = link.page %}{% endif %}
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
{% comment %} Inside the <li>, not between list items: an <ol> may only contain <li>. Same empty line box, so spacing is unchanged. {% endcomment %}
<br>
</li>

{% endfor %}

</ol>
</div>
{:/nomarkdown}
