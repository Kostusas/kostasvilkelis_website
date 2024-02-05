---
layout: page
title: Photo Gallery
permalink: /photo-gallery/
---

Your time in the group has been amazing, 
with many jumbo basket sized brain ideas aplenty, 
as a little look back, 
click on the basket for history!

---- Or the ChatGPT version ---
In the realm of wisdom, your presence bright,
A journey shared, a collaborative light.
Amidst the halls of ideas, jumbo-sized and grand,
Basketful of brilliance, a treasure trove so grand.

A click, a glance, a moment to explore,
History unfolds, memories to adore.
With each basket tapped, a tale unfurls,
In the tapestry of camaraderie, laughter swirls.

Oh, cherished member, in this PhD rhyme,
Together we've soared, an incredible climb.
To the basket we return, a nod to our jest,
A poetic pause, a shared joy, the very best.
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Gallery</title>
  <style>
    #main-image {
      position: relative;
      cursor: pointer;
    }

    #main-image:hover::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }

    #base-image {
      display: block;
      width: 100%;
    }
  </style>
</head>
<body>

<div id="main-image" onclick="openRandomImage()">
  <img src="https://iarayad.github.io/kostasvilkelis_website/images/big_jumbo.jpeg" alt="Main Image" id="base-image">
</div>

<script>
  function openRandomImage() {
    // Array of image filenames in the 'images' folder
    var imageArray = [
      {% assign sorted = site.static_files | sort: 'date' | reverse %}
      {% for file in sorted %}
        {% if file.path contains "images" and file.extname == '.png' %}
          "{{ file.name }}",
        {% endif %}
      {% endfor %}
    ];

    // Remove the trailing comma from the last element in the array
    imageArray[imageArray.length - 1] = imageArray[imageArray.length - 1].replace(/,\s*$/, "");

    // Get a random image filename from the array
    var randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];

    window.open('https://iarayad.github.io/kostasvilkelis_website/images/' + randomImage, '_blank');


  }
</script>

</body>
</html>

