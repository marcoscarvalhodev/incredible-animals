import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const dropdown = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

  dropdown.forEach((item) => {
    ['click'].forEach((userEvent) => {
      item.addEventListener(userEvent, handleClick);
    });
  });
}

/////////////////////////////////////////////////////////////////////////////////////

// clickoutside

