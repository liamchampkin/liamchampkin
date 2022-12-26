---
title: 12 column grid ends at 13
type: post
id: 'grid'
date: 2022-12-15
category: notes
tags: css
color: hsl(181deg 44% 38%)
---

A 12 column CSS grid starts at 1 and ends at 13 and this has always tripped me up when writing CSS until I searched online to try and understand why.

So a 12 column grid has 13 lines starting at one.

e.g. To make an element span across all 12 grid columns you'd have to specify the start line and end very last line...

  ```css
    grid-column: 1 / 13;
  ```
But this has always tripped me up as I'd write...

  ```css
    grid-column: 0 / 12;
  ```

And then...

  ```css
    grid-column: 1 / 12;
  ```

And wonder why it didn't work.

JavaScript and a lot of other programming languages start at 0 so it only felt right to me that CSS grid started there too. Writing 13 instead of 12 felt like a hack that somehow worked.

But come to think of it, CSS psuedo classes start at 1, e.g...

  ```css
  /* Target the first paragraph */
    p:nth-of-type(1) {
      font-weight: bold;
    }
  ```

And that makes sense so maybe it's just a CSS convention. To think of columns as tracks with edges also helps me form a mental model of the grid. The twelth column starts at 12 and ends at 13 for example.