---
layout: ../../layouts/MarkdownPostLayout.astro
title: Dev Log
author: Clay
description: ""
image:
    url: ../../assets/images/4.jpg
    alt: "Harbor .jpg"
pubDate: 2024-02-11
tags: ["programming", "blog", "web dev"]
---

<!-- git log --pretty=format:"%h - %an, %ad : %s" --date=short > "C:\Users\clayb\Dev\astro-blog\src\pages\posts\gitlog.txt"-->

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