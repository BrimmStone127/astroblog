---
layout: ../../layouts/MarkdownPostLayout.astro
title: Dev Log
author: Clay
description: ""
image:
    url: ../../assets/images/4.jpg
    alt: "Harbor .jpg"
pubDate: 2024-02-11
lastUpdate: 2024-03-13
tags: ["programming", "blog", "web dev"]
---

<!-- git log --pretty=format:"%h - %an, %ad : %s" --date=short > "C:\Users\clayb\Dev\astro-blog\src\pages\posts\gitlog.txt"-->

<!-- James and the Giant Peach [eng]
Emperors New Groove
Sailor Moon
You've got mail
The last unicorn
101 Dalmations
Crazy Rich Asians
Princess Bride
Wizards - Bashki
-->

### ToDo
- Add lightbox and slideshow to gallery
- Expand blog tags to apply to gallery images
- Move tag page to gallery?
- Fix load issues with Netlify app

### Bug Log
    - 2.14.2024 Blog and Gallery nav links display in different color when deployed
    - 2.14.2024 Gallery image focus and blog posts have no back button

### Project Structure

```plaintext
.astro/
.gitignore
.vscode/
    extensions.json
    launch.json
assets/
    images/
        pixel art/
astro.config.mjs
package.json
public/
README.md
src/
    assets/
        images/
    components/
        BlogPost.astro
        Footer.astro
        Greeting.jsx
        Hamburger.astro
        Header.astro
        Navigation.astro
        Social.astro
        ThemeIcon.astro
    env.d.ts
    layouts/
        BaseLayout.astro
        MarkdownPostLayout.astro
    pages/
        about.astro
        blog.astro
        gallery.astro
        index.astro
        posts/
        tags/
    scripts/
        menus.js
    styles/
tsconfig.json
```

### Git Log

```plaintext
d4f8a9b - Brimmstone127, 2024-03-13 : added moon phase feature
756e920 - Brimmstone127, 2024-03-13 : Deleted unnecessary blog posts, updated gamedev log
40d9435 - Brimmstone127, 2024-03-13 : Updated gamedev-log
db1a9d6 - Brimmstone127, 2024-02-25 : updated blogs
59208af - Brimmstone127, 2024-02-17 : Added to gamedev log
ee16088 - Brimmstone127, 2024-02-16 : Update gamedev-log.md with new content
d4b74d0 - Brimmstone127, 2024-02-14 : Delete pixel art assets
506ba34 - Brimmstone127, 2024-02-14 : Added blog post
635d143 - Brimmstone127, 2024-02-14 : Update image source in gallery.astro
d266173 - Brimmstone127, 2024-02-14 : Refactor gallery page and lazy load videos
78cb04e - Brimmstone127, 2024-02-14 : Added ability to display .mp4 videos in gallery
c663c98 - Brimmstone127, 2024-02-14 : Add typing dinosaur image to about and gallery pages
47bdbf0 - Brimmstone127, 2024-02-13 : Add big-spencer.gif to gallery
1f2a9ac - Brimmstone127, 2024-02-13 : Add content and image to about page
e7f9723 - Brimmstone127, 2024-02-12 : Update dependencies and add simple-lightbox to gallery page
6d57e40 - Brimmstone127, 2024-02-11 : Updated theme icons
aa49424 - Brimmstone127, 2024-02-11 : Update tag pages layout and styling. Added Dev Log
2f76217 - Brimmstone127, 2024-02-11 : Animated header and footer experiment
4c70c17 - Brimmstone127, 2024-02-11 : Refactor layout and styles
7f48d33 - Brimmstone127, 2024-02-09 : Refactor layout and styles***
bc830c6 - Brimmstone127, 2024-02-09 : Update BaseLayout and gallery page
d78591b - Brimmstone127, 2024-02-09 : Delete unused images and update navigation styling
be29456 - Brimmstone127, 2024-02-08 : Refactor theme toggle and add transitions
2569c58 - Brimmstone127, 2024-02-08 : Add ThemeIcon component and update global CSS for dark mode
0a2c96c - Brimmstone127, 2024-02-08 : Update dependencies and add new features
395fbee - Brimmstone127, 2024-02-08 : Add "Tags" link to navigation
21d2e9b - Brimmstone127, 2024-02-08 : Update
cad850b - Brimmstone127, 2024-02-08 : Delete unused images from the gallery
616ce93 - Brimmstone127, 2024-02-08 : Refactor page layouts and components
59b1253 - Brimmstone127, 2024-02-08 : Add Header component and update script import
d88f904 - Brimmstone127, 2024-02-08 : Add Footer component and import menu script
f31b451 - Brimmstone127, 2024-02-08 : Add navigation component to pages
30dbb2d - Brimmstone127, 2024-02-08 : Added global styles
eac1d2a - Brimmstone127, 2024-02-08 : Navigation fix
5ab1b38 - Brimmstone127, 2024-02-08 : Add gallery link to navigation
6f7396c - Brimmstone127, 2024-02-08 : Assets and gallery
855adde - Brimmstone127, 2024-01-27 : Added assets
1c24a99 - Brimmstone127, 2024-01-04 : working through astro tutorial
2d4b07e - Brimmstone127, 2024-01-04 : Added starter code for blog
64ec6e5 - Brimmstone127, 2024-01-04 : Merge branch 'master'
2f19d4a - Brimmstone127, 2024-01-03 : init
4224d54 - Brimmstone127, 2024-01-03 : Init
bfe8d89 - Clayton Brimm, 2024-01-03 : Initial commit
```