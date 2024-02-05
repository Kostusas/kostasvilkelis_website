---
layout: page
title: Photo Gallery
permalink: /photo-gallery/
---

Photos

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
  <img src="path/to/bouldering.png" alt="Main Image" id="base-image">
</div>

<script>
  function openRandomImage() {
    // Array of image filenames in the 'images' folder
    var imageArray = ['Photo_Paris.png', 'Group_picture.png', 'Peace_at_veldhoven.png
', 'Kostas_spot.png'];

    // Get a random image filename from the array
    var randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];

    // Open the random image in a new browser window or tab
    window.open('path/to/images/' + randomImage, '_blank');
  }
</script>

</body>
</html>

