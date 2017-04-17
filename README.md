Automage
========

What is Automage?
-----------------
Automage is a lightweight alternative to lightbox.
The goal is to keep it free from configuration, while providing a tasty way of showing images on a website.

![demo](http://erickhoury.com/automage.gif)

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


````
<div class="am-target-container">
    <img class="am-target" src="cat.png" alt="cat" />
</div>

````

Per default, it will display the same image file as the thumbnail, via it's 'src' attribute. If you want to show, say, a large version of the thumbnail image, you can achieve this by adding the data attribute 'large' to the img tag.

Ex:


````
<div class="am-target-container">
    <img class="am-target" src="cat.png" data-large("cat-large.png") alt="cat" />
</div>

````

####Slider

Activating sliding ability between images is done by adding the `am-slider` class to the `am-target-container` element.

Ex:

````
<div class="am-target-container am-slider">
    <img class="am-target" src="cat1.png" data-large("cat1-large.png") alt="cat" />
    <img class="am-target" src="cat2.png" data-large("cat2-large.png") alt="cat" />
    <img class="am-target" src="cat3.png" data-large("cat3-large.png") alt="cat" />
</div>

````

Todo
--------------------------
- slider: clicking visual arrows instead of actually clicking the arrows? (wat)
