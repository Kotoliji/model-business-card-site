// Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('done'), 500);
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
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// Header becomes solid after leaving the hero
const header = document.getElementById('siteHeader');
const onScroll = () => {
  if (window.scrollY > window.innerHeight * 0.7) header.classList.add('solid');
  else header.classList.remove('solid');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

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
