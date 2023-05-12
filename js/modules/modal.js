export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function cliqueForaModal(event) {
    if (event.target === this) {
      toggleModal(event);//esse event só tem que estar aqui para ele reconhecer o preventDefault(), para não dar erro ao clicar fora do modal, nada mais que isso
    }

  /*const modal = document.querySelector('.modal')
    if(!modal.contains(event.target)){
    toggleModal(event)//esse event só tem que estar aqui para ele reconhecer o preventDefault(), para não dar erro ao clicar fora do modal, nada mais que isso
  }*///também funcionaria assim
  }

  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    //cliqueForaModal() {toggleModal()} é como se fosse um novo eventListener criado que também usa o toggle('ativo')
    containerModal.addEventListener('click', cliqueForaModal);
  }
}

