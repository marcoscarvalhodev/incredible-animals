/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={61:(t,e,n)=>{var i=n(698).default;function r(){"use strict";t.exports=r=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,n){return t[e]=n}}function d(t,e,n,i){var r=e&&e.prototype instanceof p?e:p,o=Object.create(r.prototype),s=new A(i||[]);return a(o,"_invoke",{value:L(t,n,s)}),o}function v(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var f={};function p(){}function y(){}function m(){}var g={};h(g,c,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(O([])));w&&w!==n&&o.call(w,c)&&(g=w);var k=m.prototype=p.prototype=Object.create(g);function E(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(r,a,s,c){var u=v(t[r],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==i(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}var r;a(this,"_invoke",{value:function(t,i){function o(){return new e((function(e,r){n(t,i,e,r)}))}return r=r?r.then(o,o):o()}})}function L(t,e,n){var i="suspendedStart";return function(r,o){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===r)throw o;return{value:void 0,done:!0}}for(n.method=r,n.arg=o;;){var a=n.delegate;if(a){var s=S(a,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var c=v(t,e,n);if("normal"===c.type){if(i=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i="completed",n.method="throw",n.arg=c.arg)}}}function S(t,e){var n=e.method,i=t.iterator[n];if(void 0===i)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var r=v(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function O(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:void 0,done:!0}}return y.prototype=m,a(k,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:y,configurable:!0}),y.displayName=h(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,h(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},E(x.prototype),h(x.prototype,u,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,i,r,o){void 0===o&&(o=Promise);var a=new x(d(t,n,i,r),o);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(k),h(k,l,"Generator"),h(k,c,(function(){return this})),h(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var i in e)n.push(i);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},e.values=O,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return a.type="throw",a.arg=t,e.next=n,i&&(e.method="next",e.arg=void 0),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],a=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var s=o.call(r,"catchLoc"),c=o.call(r,"finallyLoc");if(s&&c){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&o.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;C(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,n)=>{var i=n(61)();t.exports=i;try{regeneratorRuntime=i}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function i(t,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(o=r.key,a=void 0,a=function(t,n){if("object"!==e(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),"symbol"===e(a)?a:String(a)),r)}var o,a}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var o=function(){function e(n,i){t(this,e),this.linksInternos=document.querySelectorAll(n),this.options=void 0===i?{behavior:"smooth",block:"start"}:i,this.callbackLink=this.callbackLink.bind(this)}return r(e,[{key:"callbackLink",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.callbackLink)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinkEvent(),this}}]),e}(),a=function(){function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.activeClass="ativo"}return r(e,[{key:"ativarProximo",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){return t.ativarProximo(e)}))}))}},{key:"init",value:function(){return this.accordionList.length&&(this.ativarProximo(this.accordionList[0]),this.addAccordionEvent()),this}}]),e}(),s=function(){function e(n,i){t(this,e),this.tabMenu=document.querySelectorAll(n),this.tabContent=document.querySelectorAll(i),this.activeClass="ativo"}return r(e,[{key:"activeTab",value:function(t){var e=this;this.tabContent.forEach((function(t){t.classList.remove(e.activeClass)}));var n=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,n)}},{key:"iniciarActive",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){t.activeTab(n)}))}))}},{key:"init",value:function(){return this.tabMenu.length&&this.tabContent.length&&(this.iniciarActive(),this.activeTab(0)),this}}]),e}(),c=function(){function e(n,i,r){t(this,e),this.botaoAbrir=document.querySelector(n),this.botaoFechar=document.querySelector(i),this.containerModal=document.querySelector(r),this.toggleModal=this.toggleModal.bind(this),this.cliqueForaModal=this.cliqueForaModal.bind(this)}return r(e,[{key:"toggleModal",value:function(t){t.preventDefault(),this.containerModal.classList.toggle("ativo")}},{key:"cliqueForaModal",value:function(t){t.target===this.containerModal&&this.toggleModal()}},{key:"clickStorage",value:function(){this.botaoAbrir.addEventListener("click",this.toggleModal),this.botaoFechar.addEventListener("click",this.toggleModal),this.containerModal.addEventListener("click",this.cliqueForaModal)}},{key:"init",value:function(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.clickStorage(),this}}]),e}(),u=function(){function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}return r(e,[{key:"onMouseMove",value:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),t.pageX+240>window.innerWidth?this.tooltipBox.style.left="".concat(t.pageX-190,"px"):this.tooltipBox.style.left="".concat(t.pageX+20,"px")}},{key:"onMouseLeave",value:function(t){var e=t.currentTarget;this.tooltipBox.remove(),e.removeEventListener("mouseleave",this.onMouseLeave),e.removeEventListener("mousemove",this.onMouseMove)}},{key:"criarTooltipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),this.tooltipBox=e}},{key:"onMouseOver",value:function(t){var e=t.currentTarget;this.criarTooltipBox(e),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("mouseleave",this.onMouseLeave)}},{key:"addTooltipsEvent",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.tooltips.length&&this.addTooltipsEvent(),this}}]),e}();function l(t,e,n,i,r,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(i,r)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function a(t){l(o,i,r,a,s,"next",t)}function s(t){l(o,i,r,a,s,"throw",t)}a(void 0)}))}}var d=n(687),v=n.n(d),f=function(){function e(n,i,r){t(this,e),this.numeros=document.querySelectorAll(n),this.observerClass=r,this.observerTarget=document.querySelector(i),this.handleMutation=this.handleMutation.bind(this)}return r(e,[{key:"animaNumeros",value:function(){var t=this;this.numeros.forEach((function(e){return t.constructor.incrementarNumero(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}],[{key:"incrementarNumero",value:function(t){var e=+t.innerText,n=Math.floor(e/100),i=0,r=setInterval((function(){i+=n,t.innerText=i,i>e&&(t.innerText=e,clearInterval(r))}),40*Math.random())}}]),e}();function p(t,e,n){var i=document.documentElement,r="data-outside";function o(a){t.contains(a.target)||(t.removeAttribute(r),e.forEach((function(t){i.removeEventListener(t,o)})),n())}t.hasAttribute(r)||(e.forEach((function(t){setTimeout((function(){return i.addEventListener(t,o)}))})),t.setAttribute(r,""))}var y=function(){function e(n,i){t(this,e),this.dropdown=document.querySelectorAll(n),this.activeClass="active",this.handleClick=this.handleClick.bind(this),this.events=void 0===i?["click"]:i}return r(e,[{key:"handleClick",value:function(t){var e=this;t.preventDefault();var n=t.currentTarget;n.classList.add(this.activeClass),p(n,this.events,(function(){n.classList.remove(e.activeClass)}))}},{key:"dropdownTrigger",value:function(){var t=this;this.dropdown.forEach((function(e){t.events.forEach((function(n){e.addEventListener(n,t.handleClick)}))}))}},{key:"init",value:function(){return this.dropdown.length&&this.dropdownTrigger(),this}}]),e}(),m=function(){function e(n,i,r){t(this,e),this.menuButton=document.querySelector(n),this.menuList=document.querySelector(i),this.events=void 0===r?["touchstart","click"]:r,this.activeClass="active",this.openMenu=this.openMenu.bind(this)}return r(e,[{key:"openMenu",value:function(t){var e=this;t.preventDefault(),this.menuList.classList.add(this.activeClass),this.menuButton.classList.add(this.activeClass),p(this.menuList,this.events,(function(){e.menuList.classList.remove(e.activeClass),e.menuButton.classList.remove(e.activeClass)}))}},{key:"eventTrigger",value:function(){var t=this;this.events.forEach((function(e){t.menuButton.addEventListener(e,t.openMenu)}))}},{key:"init",value:function(){return this.menuButton&&this.menuList&&this.eventTrigger(),this}}]),e}(),g=function(){function e(n,i){t(this,e),this.selectFunc=document.querySelector(n),this.activeClass=i}return r(e,[{key:"buscarDados",value:function(){this.diasSemana=this.selectFunc.dataset.semana.split(",").map(Number),this.horarioSemana=this.selectFunc.dataset.horario.split(",").map(Number)}},{key:"dadosAgora",value:function(){this.dataAgora=new Date,this.diaAgora=this.dataAgora.getDay(),this.horarioAgora=this.dataAgora.getUTCHours()-3}},{key:"estaAberto",value:function(){var t=-1!==this.diasSemana.indexOf(this.diaAgora),e=this.horarioAgora>=this.horarioSemana[0]&&this.horarioAgora<this.horarioSemana[1];return t&&e}},{key:"ativaAberto",value:function(){this.estaAberto()&&this.selectFunc.classList.add(this.activeClass)}},{key:"init",value:function(){return this.selectFunc&&(this.buscarDados(),this.dadosAgora(),this.ativaAberto()),this}}]),e}();function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function w(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){var n;return function(){for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];n&&clearTimeout(n),n=setTimeout((function(){t.apply(void 0,r),n=null}),e)}}var E=function(){function e(n){t(this,e),this.sections=document.querySelectorAll(n),this.windowMetade=.7*window.innerHeight,this.checkDistance=k(this.checkDistance.bind(this),20)}return r(e,[{key:"getDistance",value:function(){var t=this;this.distance=w(this.sections).map((function(e){var n=e.getBoundingClientRect().top;return{element:e,offset:Math.floor(n-t.windowMetade)}}))}},{key:"checkDistance",value:function(){this.getDistance(),this.distance.forEach((function(t){t.offset<0?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}},{key:"stop",value:function(){window.removeEventListener("scroll",this.checkDistance)}}]),e}();function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}function S(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,r=L(t);if(n){var o=L(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return function(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,i)}}var M=function(){function e(n,i){t(this,e),this.slide=document.querySelector(n),this.wrapper=document.querySelector(i),this.dist={finalPosition:0,startX:0,movement:0},this.activeClass="active",this.changeEvent=new Event("changeEvent")}return r(e,[{key:"transition",value:function(t){this.slide.style.transition=t?"transform .9s":""}},{key:"moveSlide",value:function(t){this.dist.movePosition=t,this.slide.style.transform="translate3d(".concat(t,"px, 0, 0)")}},{key:"updatePosition",value:function(t){return this.dist.movement=1.6*(this.dist.startX-t),this.dist.finalPosition-this.dist.movement}},{key:"onStart",value:function(t){var e;"mousedown"===t.type?(t.preventDefault(),this.dist.startX=t.clientX,e="mousemove"):(this.dist.startX=t.changedTouches[0].clientX,e="touchmove"),this.wrapper.addEventListener(e,this.onMove),this.transition(!1)}},{key:"onMove",value:function(t){var e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,n=this.updatePosition(e);this.moveSlide(n)}},{key:"onEnd",value:function(t){var e="mouseup"===t.type?"mousemove":"touchmove";this.wrapper.removeEventListener(e,this.onMove),this.dist.finalPosition=this.dist.movePosition,this.transition(!0),this.changeSlideOnEnd()}},{key:"changeSlideOnEnd",value:function(){this.dist.movement>120&&void 0!==this.index.next?this.activeNextSlide():this.dist.movement<-120&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}},{key:"addSlideEvents",value:function(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd)}},{key:"slidePosition",value:function(t){var e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}},{key:"slidesConfig",value:function(){var t=this;this.slideArray=w(this.slide.children).map((function(e){return{position:t.slidePosition(e),element:e}}))}},{key:"slidesIndexNav",value:function(t){var e=this.slideArray.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}},{key:"changeSlide",value:function(t){var e=this.slideArray[t];this.moveSlide(e.position),this.slidesIndexNav(t),this.dist.finalPosition=e.position,this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}},{key:"activePrevSlide",value:function(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}},{key:"activeNextSlide",value:function(){void 0!==this.index.next&&this.changeSlide(this.index.next)}},{key:"changeActiveClass",value:function(){var t=this;this.slideArray.forEach((function(e){e.element.classList.remove(t.activeClass)})),this.slideArray[this.index.active].element.classList.add(this.activeClass)}},{key:"onResize",value:function(){var t=this;console.log("teste"),setTimeout((function(){t.slidesConfig(),t.changeSlide(t.index.active)}),1e3)}},{key:"addResizeEvent",value:function(){window.addEventListener("resize",this.onResize)}},{key:"bindEvents",value:function(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.onResize=k(this.onResize.bind(this),100),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this)}},{key:"init",value:function(){return this.bindEvents(),this.transition(!0),this.addSlideEvents(),this.slidesConfig(),this.addResizeEvent(),this.changeSlide(2),this}}]),e}(),C=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(i,e);var n=S(i);function i(e,r){var o;return t(this,i),(o=n.call(this,e,r)).bindControlEvents(),o}return r(i,[{key:"addArrow",value:function(t,e){this.prevElement=document.querySelector(t),this.nextElement=document.querySelector(e),this.addArrowEvent()}},{key:"addArrowEvent",value:function(){this.prevElement.addEventListener("click",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide)}},{key:"createControl",value:function(){var t=document.createElement("ul");return t.dataset.control="slide",this.slideArray.forEach((function(e,n){t.innerHTML+='<li><a href="#slide'.concat(n+1,'">').concat(n+1,"</a></li>")})),this.wrapper.appendChild(t),t}},{key:"eventControl",value:function(t,e){var n=this;t.addEventListener("click",(function(t){t.preventDefault(),n.changeSlide(e),n.activeControlItem()})),this.wrapper.addEventListener("changeEvent",this.activeControlItem)}},{key:"activeControlItem",value:function(){var t=this;this.controlArray.forEach((function(e){e.classList.remove(t.activeClass)})),this.controlArray[this.index.active].classList.add(this.activeClass)}},{key:"addControl",value:function(t){this.control=document.querySelector(t)||this.createControl(),this.controlArray=w(this.control.children),this.controlArray.forEach(this.eventControl),this.activeControlItem()}},{key:"bindControlEvents",value:function(){this.eventControl=this.eventControl.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}}]),i}(M);new o('[data-menu="menu"] a[href^="#"]').init(),new a("[data-accordion='list'] dt").init(),new s('[data-tab="menu"] li','[data-tab="content"] div').init(),new c('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new u("[data-tooltip]").init(),new E('[data-scroll="scroll"]').init(),new y("[data-dropdown]").init(),new m('[data-menu="button"]','[data-menu="list"]').init(),new g("[data-semana]","aberto").init(),function(t,e){function n(){return(n=h(v().mark((function t(){var e,n;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.blockchain.com/ticker");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,document.querySelector(".btc-preco").innerText=(1e3/n.BRL.sell).toFixed(4),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}(),function(t,e){var n=document.querySelector(".numeros-grid");function i(t){var e=function(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.specie,"</h3><span data-numero>").concat(t.total,"</span>"),e}(t);n.appendChild(e)}function r(){return(r=h(v().mark((function t(){var e;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("../../animaisapi.json");case 2:return e=t.sent,t.next=5,e.json();case 5:t.sent.forEach((function(t){return i(t)})),new f("[data-numero]",".numeros","ativo").init();case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}();var A=new C(".slide",".slide-wrapper");A.init(),A.addControl(".custom-controls")})()})();