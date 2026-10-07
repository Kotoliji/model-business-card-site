// Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('done'), 450);
});

// Fan-out hero
const fanHero = document.getElementById('fanHero');
window.addEventListener('load', () => {
  setTimeout(() => fanHero.classList.add('fanned'), 650);
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => io.observe(el));

// Mobile nav drawer
const menuBtn = document.getElementById('menuBtn');
const navDrawer = document.getElementById('navDrawer');
if (menuBtn && navDrawer) {
  menuBtn.addEventListener('click', () => {
    const open = navDrawer.classList.toggle('open');
    menuBtn.textContent = open ? 'Close' : 'Menu';
  });
  navDrawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navDrawer.classList.remove('open');
      menuBtn.textContent = 'Menu';
    });
  });
}

// Randomize scattered city photos: random slot order, random rotation, random stacking
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
document.querySelectorAll('[data-scatter]').forEach(field => {
  const items = shuffle(Array.from(field.children));
  const slots = JSON.parse(field.dataset.slots);
  items.forEach((item, i) => {
    const slot = slots[i % slots.length];
    item.style.top = slot.t;
    item.style.left = slot.l;
    item.style.setProperty('--r', (Math.random() * 26 - 13).toFixed(1) + 'deg');
    item.style.zIndex = String(1 + Math.floor(Math.random() * 10));
  });
});

// Cities horizontal carousel
const citiesSection = document.getElementById('cities');
const track = document.getElementById('citiesTrack');
const dots = document.querySelectorAll('#cityDots button');
const prevBtn = document.getElementById('cityPrev');
const nextBtn = document.getElementById('cityNext');
const swipeHint = document.getElementById('swipeHint');
const cityCount = track.children.length;

function goToCity(i) {
  i = Math.max(0, Math.min(cityCount - 1, i));
  track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });
}

function currentIndex() {
  return Math.round(track.scrollLeft / track.clientWidth);
}

function updateActive() {
  const i = currentIndex();
  dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
  citiesSection.setAttribute('data-active', String(i));
}

dots.forEach(d => d.addEventListener('click', () => goToCity(Number(d.dataset.idx))));
prevBtn.addEventListener('click', () => goToCity(currentIndex() - 1));
nextBtn.addEventListener('click', () => goToCity(currentIndex() + 1));

let scrollTimer;
track.addEventListener('scroll', () => {
  if (swipeHint) swipeHint.classList.add('hide');
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(updateActive, 80);
}, { passive: true });

window.addEventListener('resize', updateActive);
