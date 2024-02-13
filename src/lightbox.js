// src/lightbox.js
import SimpleLightbox from "simple-lightbox";

document.addEventListener('DOMContentLoaded', (event) => {
  new SimpleLightbox({
    elements: '.gallery a'
  });
});