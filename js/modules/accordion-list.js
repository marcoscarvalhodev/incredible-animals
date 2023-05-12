export default function initAccordion() {
  const activeClass = 'ativo';
  const tituloFaq = document.querySelectorAll("[data-accordion='list'] dt");
  const conteudoFaq = document.querySelectorAll("[data-accordion='list'] dd");

  function ativarProximo() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);//aqui poderia ser usado this ou eventCurrentTarget
  }

  if (tituloFaq.length) {
    conteudoFaq[0].classList.add(activeClass);
    tituloFaq[0].classList.add(activeClass);

    tituloFaq.forEach((item) => {
      item.addEventListener('click', ativarProximo);
    });
  }
}
