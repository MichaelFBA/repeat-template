!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}return"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,void(window.CustomEvent=e))}();var i=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.template=e.querySelector("template"),e}return o(t,e),a(t,[{key:"attributeChangedCallback",value:function(e,t,n){if("repeat"==e&&n){var r=this.parseJson(n);r&&this.render(r)}}},{key:"parseJson",value:function(e){var t=null;try{t=JSON.parse(e)}catch(e){throw new Error("Invalid JSON string provided.")}return t}},{key:"callCustomEvent",value:function(e,t,n){var r=new CustomEvent("repeatTemplateEvent",{detail:{data:e,element:t}});n.dispatchEvent(r)}},{key:"render",value:function(e){var t=this,n=this.template,r=this.callCustomEvent;t.innerHTML="",e.forEach(function(e){var o=document.importNode(n,!0);r(e,o.content,t),t.appendChild(o.content)})}}],[{key:"observedAttributes",get:function(){return["repeat"]}}]),t}(HTMLElement);customElements.define("repeat-template",i)}]);