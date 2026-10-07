// Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('done'), 500);
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
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

// Header background on scroll (slightly denser blend for readability)
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) header.style.mixBlendMode = 'difference';
}, { passive: true });
