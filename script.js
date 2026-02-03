const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const yearEl = document.querySelector('#year');

const setHeaderState = () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

const toggleNav = () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
};

toggle.addEventListener('click', toggleNav);
nav.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

window.addEventListener('scroll', setHeaderState);
window.addEventListener('load', setHeaderState);

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
