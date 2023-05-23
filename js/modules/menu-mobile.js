import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    if (events === undefined) this.events = ['click'];
    else this.events = events;

    this.activeClass = 'active';
    this.openMenu = this.openMenu.bind(this);
  }


  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  eventTrigger() {
    this.events.forEach((item) => {
      this.menuButton.addEventListener(item, this.openMenu);
    });
  }


  init() {
    if (this.menuButton && this.menuList) {
      this.eventTrigger();
    }
    return this;
  }
}



