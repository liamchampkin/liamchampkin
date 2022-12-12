---
title: A use case for :has() CSS selector
card_image: jess-outside-two.jpg
card_image_alt: People sitting in the sun outside a coffee shop
type: post
id: 'zwift'
date: 2022-12-10
category: notes
tags: fitness
color: hsl(326deg 44% 38%)
---

Styling images in blog posts within Wordpress and other content management systems such as Nuxt can be a bit of a pain when the images are automatically wrapped around a `<p>`{lang="html"} tag.

For example, you want to control the max width of a paragraph to limit the line length. When you add an image to your blog post, the CMS will more than likely wrap the image with a `<p>`{lang="html"} tag so your image will have the same max-width as the paragraph. This can be frustrating if you want the image to span the full width of the article.

You originally wanted...


```html
<img src="images/myimage.png">
```


but the CMS forces you to have...


```html
<p><img src="images/myimage.png"></p>
```

## This is where the new CSS psuedo selector :has can be super useful...

  ```css
  p:has(img) {
    max-width: 100%;
  }
  ```
This allows you to target any paragraphs that have an image.

`:has()`{lang="css"} looks like it has relatively good browser support at the time of writing. Firefox does appear to be behind a flag so use with caution.
