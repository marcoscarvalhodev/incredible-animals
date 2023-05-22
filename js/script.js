import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion-list.js';
import Tab from './modules/alternate-tab.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import fetchAnimais from './modules/fetch-animais.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import initFunctionamento from './modules/funcionamento.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import ScrollAnima from './modules/scroll-anima.js';




const scrollSuave = new ScrollSuave('[data-menu="menu"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-accordion='list'] dt");
accordion.init();

const nav = new Tab('[data-tab="menu"] li', '[data-tab="content"] div');
nav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();


const scrollAnima = new ScrollAnima('[data-scroll="scroll"]');
scrollAnima.init();

const dropdown = new DropdownMenu('[data-dropdown]');
dropdown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

initFunctionamento();



fetchBitcoin('https://www.blockchain.com/ticker', '.btc-preco');
fetchAnimais('../../animaisapi.json', '.numeros-grid');

