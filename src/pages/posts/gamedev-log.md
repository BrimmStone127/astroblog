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
        f498dfc - Brimmstone127, 2024-05-07 : Update time scale adjustment in main.gd
        226f4e6 - Brimmstone127, 2024-05-01 : Update map generation code to adjust noise threshold and check if objects are within map bounds
        f2f8ad1 - Brimmstone127, 2024-04-28 : Add debug data for current season in main.gd
        18075dd - Brimmstone127, 2024-04-22 : Update speed variable in Camera2D.gd and adjust zoom in main.tscn
        5186f83 - BrimmStone127, 2024-04-14 : Update sky_day_night-Sheet.png and horizon1.png textures
        35bec88 - Brimmstone127, 2024-04-08 : Add new sprite sheets for didelphis_virginiana, fire1, and upanddown
        543a93a - Brimmstone127, 2024-04-08 : Update tree textures
        2a51872 - Brimmstone127, 2024-04-07 : Add new tree images and update tree sprite texture
        e278a97 - Brimmstone127, 2024-04-07 : Refactor map generation code to check if objects are within map bounds
        84bd62c - Brimmstone127, 2024-04-05 : Updated times for sunrise and sunset
        1d2d211 - Brimmstone127, 2024-04-05 : Add time of day change functionality
        63f400f - Brimmstone127, 2024-04-04 : Update fire sprite and bonfire scene
        0034df8 - Brimmstone127, 2024-04-02 : Add bonfire and adjust z-index for bonfire and tree sprites
        ea271da - Brimmstone127, 2024-04-02 : Add random frame progress in fire_sprite.gd and update load_steps in main.tscn
        b2fffac - Brimmstone127, 2024-04-02 : Add bonfire to TileMap scene
        a934620 - Brimmstone127, 2024-04-02 : Add tree objects to the TileMap scene
        2682a2a - Brimmstone127, 2024-04-02 : Add vegetative blocks to TileMap generation
        b10becf - Brimmstone127, 2024-03-31 : Refactor tile generation logic and add tree objects
        f9e39dc - Brimmstone127, 2024-03-31 : Update iso_tileset.png
        b59bd87 - Brimmstone127, 2024-03-28 : Update PointLight2D energy and texture scale
        90d734f - Brimmstone127, 2024-03-27 : Add bonfire_1.tscn with fire sprite and point light
        6a14451 - Brimmstone127, 2024-03-27 : Update frame progress and point light properties
        bf94a45 - Brimmstone127, 2024-03-27 : Update main.tscn with frame progress and add PointLight2D
        2eae851 - Brimmstone127, 2024-03-27 : Update main.tscn with new fire sprite and frame progress
        246425d - Brimmstone127, 2024-03-26 : Update TileMap and main.tscn files
        1698064 - Brimmstone127, 2024-03-24 : Add noise-based terrain generation to TileMap
        af9e1ae - Brimmstone127, 2024-03-24 : Update UI node references and color settings for day and night
        b14a4d9 - Brimmstone127, 2024-03-24 : Update tile data in main.tscn
        6e7489f - Brimmstone127, 2024-03-24 : Update TileMap and main.tscn files
        281f845 - Brimmstone127, 2024-03-23 : Update TileMap with new dirt atlas position
        b9d148a - Brimmstone127, 2024-03-23 : Update tile map size and texture origins
        0f41bb1 - Brimmstone127, 2024-03-23 : Moved UI elements into a canvas layer to be drawn above everything and stay static regardless of camera
        1688f7f - Brimmstone127, 2024-03-23 : Update TileMap constants for grass blocks and wind directions
        574498c - Brimmstone127, 2024-03-23 : Update iso_tileset.png
        12da00d - Brimmstone127, 2024-03-23 : Updated assets with better grass and light and dark grids
        7942e19 - Brimmstone127, 2024-03-22 : Attempting tree generation
        e72f36a - Brimmstone127, 2024-03-19 : Add camera zoom functionality
        fa019a5 - Brimmstone127, 2024-03-19 : Added ability to move camera
        e607353 - Brimmstone127, 2024-03-18 : Expanded TileMap and add new tile layers
        f6ba8e2 - Brimmstone127, 2024-03-18 : Setup basic TileMap that covers screen with grass tiles
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