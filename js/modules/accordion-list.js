export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  ativarProximo(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.ativarProximo(item));
    });
  }

  init() {
    if (this.accordionList.length) {
      this.ativarProximo(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
