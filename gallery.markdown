---
layout: page
title: Photo Gallery
permalink: /photo-gallery/
---

Photos

<style>
  .image-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .box {
    border: 2px solid #ddd; /* Add a border to each image container */
    margin-bottom: 20px;
    padding: 10px; /* Add padding for spacing within the container */
    box-sizing: border-box; /* Include padding and border in the box's total width and height */
  }

  .box a {
    display: block; /* Make the link fill the entire box */
  }

  .img-gallery {
    width: 100%; /* Make the image fill its container */
    height: auto; /* Maintain the aspect ratio */
    border-radius: 8px; /* Add rounded corners to the images */
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
