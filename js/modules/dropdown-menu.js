import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdown, events) {
    this.dropdown = document.querySelectorAll(dropdown);
    this.activeClass = 'active';
    this.handleClick = this.handleClick.bind(this);

    if (events === undefined) this.events = ['click'];
    else this.events = events;
  }

  handleClick(event) {
    event.preventDefault();
    const target = event.currentTarget;
    target.classList.add(this.activeClass);
    outsideClick(target, this.events, () => {
      target.classList.remove(this.activeClass);
    });
  }

  dropdownTrigger() {
    this.dropdown.forEach((item) => {
      this.events.forEach((userEvent) => {
        item.addEventListener(userEvent, this.handleClick);
      });
    });
  }


  init() {
    if (this.dropdown.length) {
      this.dropdownTrigger();
    }
    return this;
  }
}

