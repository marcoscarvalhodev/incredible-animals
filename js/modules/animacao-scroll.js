export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-scroll="scroll"]');
  const windowMetade = window.innerHeight * 0.7;

  if (sections.length) {
    const animaScroll = () => {
      sections.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top;
        const sectionVisible = (sectionTop - windowMetade) < 0; //console.log(sectionTop)
        if (sectionVisible) item.classList.add('ativo');
        else if (item.classList.contains('ativo')) {
          item.classList.remove('ativo');
        }
      });
    };
    animaScroll();//site animado previamente para não ficar com tela branca
    window.addEventListener('scroll', animaScroll);
  }
}
