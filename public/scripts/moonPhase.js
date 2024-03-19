const moonPhases = [
  { name: "New Moon", image: "/assets/moon/new-moon.png" },
  { name: "Waxing Crescent", image: "/assets/moon/waxing-crescent-moon.png" },
  { name: "First Quarter", image: "/assets/moon/first-quarter-moon.png" },
  { name: "Waxing Gibbous", image: "/assets/moon/waxing-gibbous-moon.png" },
  { name: "Full Moon", image: "/assets/moon/full-moon.png" },
  { name: "Waning Gibbous", image: "/assets/moon/waning-gibbous-moon.png" },
  { name: "Third Quarter", image: "/assets/moon/third-quarter-moon.png" },
  { name: "Waning Crescent", image: "/assets/moon/waning-crescent-moon.png" },
];

function getMoonPhase() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  const ages = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28];
  const offsets = [-1, 1, 0, 1, 2, 3, 4, 5, 7, 7, 9, 9];
  const months = [0, 2, 0, 2, 2, 4, 5, 6, 7, 8, 9, 10];

  if (day < 32 && day > 0) {
    let ip = (ages[(year + 1) % 19] +
        ((day + offsets[month]) % 30) +
        (year < 1900 ? 1 : 0)) % 30;
    ip = Math.floor(ip);

    if (ip === 29) {
      ip = 1;
    }
    if (ip === 28) {
      ip = 0;
    }

    return ip;
  }
}

function initMoonPhase() {
  const phase = getMoonPhase();
  const currentMoon = moonPhases[Math.floor(phase / (30 / moonPhases.length))];

  document.getElementById('moon-phase-name').textContent = currentMoon.name;
  document.getElementById('moon-phase-image').src = currentMoon.image;
  document.getElementById('moon-phase-image').alt = currentMoon.name;
}

window.addEventListener('DOMContentLoaded', initMoonPhase);