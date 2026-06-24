const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
function updateHeader(){ if(header) header.classList.toggle('is-scrolled', window.scrollY > 10); }
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
if(navToggle && nav){
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}
