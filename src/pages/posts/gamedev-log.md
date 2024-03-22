---
layout: ../../layouts/MarkdownPostLayout.astro
title: GameDev-log
author: Clay
description: ""
image:
    url: src\assets\gifs\big-spencer.gif
    alt: "A Big Opossum"
pubDate: 2024-02-13
lastUpdate: 2024-03-13
tags: ["programming", "blog", "game dev", "godot"]
---
<!-- cd ./gamedev/king_minos -->
<!-- git log --pretty=format:"%h - %an, %ad : %s" --date=short > "C:\Users\clayb\Dev\astro-blog\src\pages\posts\gamedev-gitlog.txt"-->

# Godot Game Dev


## Dev Log

---

#### 2024-03-19
##### King Minos
Added a movable and zoomable camera.

---

#### 2024-03-18
##### King Minos
Setup a basic isometric tilemap using some simple assets. 

---

#### 2024-03-07
##### King Minos
Added an animated sun and moon to match the passage of time. Animated the moon sprites based on the moon phase cycle defined in Chronos/Time manager. 

---

#### 2024-03-02
##### King Minos
Added a animated day and night view that animates the time from the Chronos module.

---

#### 2024-02-25
##### Godot 2D tutorial
https://docs.godotengine.org/en/stable/getting_started/first_2d_game

---

#### 2024-02-16
##### King Minos
Chronos - Time mangement module

---

#### 2024-01-19
Day night animation - godot

## Projects
- ### King Minos
    King Minos is the name of my godot project that's end goal is a city / civilization type game. Where a colony is simulated and the player can help build up the city, its named after the Greek mythological king who colonized the Aegean Sea, the game theme is not neccessarily ancient Greece. So far the project is my opportunity to learn about the Godot game engine and I currently am working on a time management system (chronos) and some basic game asset creations. 

    ```plaintext
        42732b4 - Brimmstone127, 2024-03-12 : Update icon and tileset in project
        85c6bbd - Brimmstone127, 2024-03-09 : Update DebugPanel layout and window size
        d8567ea - Brimmstone127, 2024-03-07 : Add moon phase update and fix time scale bug
        56af910 - Brimmstone127, 2024-03-07 : Added animated sun and moon and animated lunar phases
        c9a79ec - Brimmstone127, 2024-03-07 : Update main.tscn with moon sprites
        e5366ea - Brimmstone127, 2024-03-05 : Add new art assets
        ca51a65 - Brimmstone127, 2024-03-03 : Update main.tscn with new Horizon1 sprite
        33e98bd - Brimmstone127, 2024-03-03 : Added day night transition animations
        3897461 - Brimmstone127, 2024-03-02 : Add skyline animation and update current hour
        109e2ed - Brimmstone127, 2024-03-02 : Refactor debug panel layout and references
        5bd3842 - Brimmstone127, 2024-03-02 : Delete unused files and update main scene
        c4f84ec - Brimmstone127, 2024-02-15 : Added olympus
        c0d937d - Brimmstone127, 2024-02-15 : Add new time of day: Dawn and Dusk
        932d17a - Brimmstone127, 2024-02-15 : Update node.tscn layout
        bc8df45 - Brimmstone127, 2024-02-15 : Add get_time_of_day function to Calendar.gd and update debug label in main.gd
        13b1eb2 - Brimmstone127, 2024-02-05 : Added lunar time
        866890a - Brimmstone127, 2024-02-05 : added gitignore
        2a58637 - Brimmstone127, 2024-02-05 : Updated chronos debug
        7b42a5c - Brimmstone127, 2024-02-03 : first commit
    ```