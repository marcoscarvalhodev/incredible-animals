import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion-list.js';
import Tab from './modules/alternate-tab.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFunctionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initAnimacaoScroll from './modules/animacao-scroll.js';

const scrollSuave = new ScrollSuave('[data-menu="menu"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-accordion='list'] dt");
accordion.init();

const nav = new Tab('[data-tab="menu"] li', '[data-tab="content"] div');
nav.init();

initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFunctionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();

