Automage
========

What is Automage?
-----------------
Automage is a lightweight alternative to lightbox.
The goal is to keep it free from configuration, while providing a tasty way of showing images on a website.

Are there any dependencies?
---------------------------
Yesh. It's built with jQuery 1.7.1. You'll need that for it to work.

So how do I use it?
-------------------
Just include it.
`<script src="automage.js"></script>`

So how does it work?
--------------------------
It will look for an element with a class "am-target-container" and then for an image with the class "am-target", which it will display as a layer above everything else.

Ex:

`<div class="am-target-container">`<br />
    `<img class="am-target" src="cat.png" alt="cat" />`<br />
`</div>`

Activating sliding ability between images is done by adding the `am-slider` class to the `am-target-container` element.

Ex:

`<div class="am-target-container am-slider">`<br />
    `<img class="am-target" src="cat1.png" alt="cat" />`<br />
    `<img class="am-target" src="cat2.png" alt="cat" />`<br />
    `<img class="am-target" src="cat3.png" alt="cat" />`<br />
`</div>`

Todo
--------------------------
- Ability to have seperate src from thumbnail to large image, ie. clicking image1-small.png displays image1-large.png
- Debug and fix the image slider
