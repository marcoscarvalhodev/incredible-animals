import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/animacao-scroll.js';
import initAccordion from './modules/accordion-list.js';
import initTab from './modules/alternate-tab.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFunctionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="menu"] a[href^="#"');
scrollSuave.init();


initAnimacaoScroll();
initAccordion();
initTab();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFunctionamento();
initFetchAnimais();
initFetchBitcoin();


