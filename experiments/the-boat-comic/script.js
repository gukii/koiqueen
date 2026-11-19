document.documentElement.classList.add('js');

const progress = document.getElementById('reading-progress');
const chapterLinks = [...document.querySelectorAll('.chapter-nav a')];
const chapters = chapterLinks.map(link => document.getElementById(link.dataset.chapter));
const scenes = [...document.querySelectorAll('[data-scene]')];
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let ticking = false;

function updateScroll() {
  const length = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${length > 0 ? Math.min(100, Math.max(0, scrollY / length * 100)) : 0}%`;

  let active = null;
  chapters.forEach(chapter => {
    if (chapter.getBoundingClientRect().top <= innerHeight * .55) active = chapter.id;
  });
  chapterLinks.forEach(link => {
    const current = link.dataset.chapter === active;
    link.classList.toggle('active', current);
    if (current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });

  if (!reducedMotion.matches && innerWidth > 700) {
    scenes.forEach(scene => {
      const bounds = scene.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > innerHeight) return;
      const fraction = (innerHeight - bounds.top) / (innerHeight + bounds.height);
      scene.style.setProperty('--drift', `${Math.round((fraction - .5) * 44)}px`);
    });
  }
  ticking = false;
}

addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateScroll);
    ticking = true;
  }
}, {passive: true});
addEventListener('resize', updateScroll);
updateScroll();

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: .12, rootMargin: '0px 0px 45px 0px'});
  reveals.forEach(element => observer.observe(element));
} else {
  reveals.forEach(element => element.classList.add('visible'));
}
