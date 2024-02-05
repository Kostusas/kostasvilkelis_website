---
layout: page
title: Photo Gallery
permalink: /photo-gallery/
---

Photos

<style>
  .image-gallery {
    display: flex; /* Use flexbox to display images in a row */
    flex-wrap: wrap; /* Allow images to wrap to the next line if there's not enough space */
    justify-content: space-between; /* Add space between images */
  }

  .box {
    /* Optional: Add styling for each image container */
    margin-bottom: 10px; /* Adjust margin between image containers */
  }
</style>

<div class="image-gallery">
    {% assign sorted = site.static_files | sort: 'date' | reverse %}
    {% for file in sorted %}
        {% if file.path contains "images" %}
            {% if file.extname == '.png' %}
                {% assign filenameparts = file.path | split: "/" %}
                {% assign filename = filenameparts | last | replace: file.extname,"" %}
                <div class="box"><a href="{{ file.path | relative_url }}" title="{{ filename }}">
                    <img src="{{ site.thumbsurl }}thumb.{{file.name }} " alt="{{ filename }}" class="img-gallery" />
                </a></div>
            {% endif %}
        {% endif %}
    {% endfor %}
</div>
