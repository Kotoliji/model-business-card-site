// Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('done'), 450);
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

// Chapter index scroll-spy
const chapterLinks = document.querySelectorAll('.chapter-index a');
const chapterSections = document.querySelectorAll('[data-chapter-section]');
if (chapterLinks.length && chapterSections.length) {
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const name = entry.target.getAttribute('data-chapter-section');
        chapterLinks.forEach(a => a.classList.toggle('active', a.getAttribute('data-chapter') === name));
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
  chapterSections.forEach(sec => spy.observe(sec));
}
