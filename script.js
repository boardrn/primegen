const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const year = document.querySelector('[data-year]');
const quoteForm = document.querySelector('#quoteForm');

if (year) year.textContent = new Date().getFullYear();

function updateHeader(){
  if(header) header.classList.toggle('is-scrolled', window.scrollY > 10);
}
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

if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    const recipient = quoteForm.dataset.recipient || 'Prime-gen@outlook.com';
    const subject = 'PrimeGen Electric quote request';
    const body = [
      'New quote request from primegen.ca',
      '',
      `Name: ${data.get('name') || ''}`,
      `Phone: ${data.get('phone') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `City / Area: ${data.get('city') || ''}`,
      `Service Needed: ${data.get('service') || ''}`,
      '',
      'Message:',
      `${data.get('message') || ''}`,
      '',
      'Sent from the PrimeGen Electric website contact form.'
    ].join('\n');

    window.location.href = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
