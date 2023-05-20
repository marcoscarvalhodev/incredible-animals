export default class ScrollAnima {
  constructor(sections, valor) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * valor;

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;
      const sectionVisible = (sectionTop - this.windowMetade) < 0; //console.log(sectionTop)
      if (sectionVisible) item.classList.add('ativo');
      else if (item.classList.contains('ativo')) {
        item.classList.remove('ativo');
      }
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll);
  }
}
