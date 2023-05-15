export default class Tab {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  activeTab(index) {
    this.tabContent.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
    const aparecer = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, aparecer);
  }

  iniciarActive() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.iniciarActive();
      this.activeTab(0);
    }
    return this;
  }
}
