export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();//essa é só uma outra forma de fazer com que o código funcione, mas também poderíamos color dentro de handleOutsideClick
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));//will explain menu-mobile
    });

    element.setAttribute(outside, '');
  }
}
