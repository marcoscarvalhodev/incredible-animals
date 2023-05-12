export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="menu"] a[href^="#"]');
  function callbackLink(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    /*forma alternativa de scroll para onde eu clicar
    const top = section.offsetTop;
    window.scrollTo({
      top: top,
      behavior: 'smooth',
    })*/
  }
  linksInternos.forEach((link) => {
    link.addEventListener('click', callbackLink);
  });
}
