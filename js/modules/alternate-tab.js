export default function initTab() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] div');
  tabContent[0].classList.add('ativo');
  //isolado para adicionar classe ao primeiro item e mostrá-lo por padrão ao abrir o site

  function activeTab(index) {
    tabContent.forEach((item) => {
      item.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo', tabContent[index].dataset.anime);
  } //create a function to add a class active when the item is selected

  if (tabMenu.length && tabContent.length) {
    tabMenu.forEach((item, item2/*esse index não tem relação com o index da activeTab*/) => {
      item.addEventListener('click', () => {
        activeTab(item2); //somente porque ativamos o index aqui como argumento agora ele tem relação
      });
    });
  }
}
