export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };//tinha que ser em relação a pagina pois o evento é referenciado através do posicionamento na tela, e o elemento foi criado com appendChild no body

  const onMouseLeave = {
    tooltipBox: '',
    element: '',
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };//isso deveria ficar dentro da função mas transformando em objeto conseguimos fazer functionar como se fosse uma função

  //////////////////////////////////////////////////////////////////////////

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this);//tive que colocar em uma const pois dessa forma posso referenciar o tooltipBox pelo return que está em tooltipBox e faz referência ao item criado
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });//1 - essa é uma função pai que ao passar o mouse por cima do mapa que é [data-tooltip] ativará onMouseOver
}

/*Objetivos dessa função passo a passo*/

//ao passar o mouse sobre o mapa criar um novo elemento fora do HTML com seu conteudo sendo a aria-label

//quando o mouse se mover sobre esse mapa, o elemento criado deve acompanhar o mouse

//quando o mouse sair do foco do mapa, então o elemento criado deve desaparecer



