parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"B9rA":[function(require,module,exports) {
var define;
var t;!function(e,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof t&&t.amd?t("scrollMonitor",[],i):"object"==typeof exports?exports.scrollMonitor=i():e.scrollMonitor=i()}(this,function(){return function(t){function e(o){if(i[o])return i[o].exports;var s=i[o]={exports:{},id:o,loaded:!1};return t[o].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";var o=i(1).isInBrowser,s=new(i(2))(o?document.body:null);s.setStateFromDOM(null),s.listenToDOM(),o&&(window.scrollMonitor=s),t.exports=s},function(t,e){"use strict";e.VISIBILITYCHANGE="visibilityChange",e.ENTERVIEWPORT="enterViewport",e.FULLYENTERVIEWPORT="fullyEnterViewport",e.EXITVIEWPORT="exitViewport",e.PARTIALLYEXITVIEWPORT="partiallyExitViewport",e.LOCATIONCHANGE="locationChange",e.STATECHANGE="stateChange",e.eventTypes=[e.VISIBILITYCHANGE,e.ENTERVIEWPORT,e.FULLYENTERVIEWPORT,e.EXITVIEWPORT,e.PARTIALLYEXITVIEWPORT,e.LOCATIONCHANGE,e.STATECHANGE],e.isOnServer="undefined"==typeof window,e.isInBrowser=!e.isOnServer,e.defaultOffsets={top:0,bottom:0}},function(t,e,i){"use strict";function o(t){return h?0:t===document.body?window.innerHeight||document.documentElement.clientHeight:t.clientHeight}function s(t){return h?0:t===document.body?Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight):t.scrollHeight}function n(t){return h?0:t===document.body?window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop}var r=i(1),h=r.isOnServer,c=r.isInBrowser,a=r.eventTypes,l=i(3),p=!1;if(c)try{var u=Object.defineProperty({},"passive",{get:function(){p=!0}});window.addEventListener("test",null,u)}catch(t){}var w=!!p&&{capture:!1,passive:!0},d=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var r,h,c,l=this;this.item=e,this.watchers=[],this.viewportTop=null,this.viewportBottom=null,this.documentHeight=s(e),this.viewportHeight=o(e),this.DOMListener=function(){t.prototype.DOMListener.apply(l,arguments)},this.eventTypes=a,i&&(this.containerWatcher=i.create(e)),this.update=function(){(function(){if(l.viewportTop=n(e),l.viewportBottom=l.viewportTop+l.viewportHeight,l.documentHeight=s(e),l.documentHeight!==r){for(h=l.watchers.length;h--;)l.watchers[h].recalculateLocation();r=l.documentHeight}})(),function(){for(c=l.watchers.length;c--;)l.watchers[c].update();for(c=l.watchers.length;c--;)l.watchers[c].triggerCallbacks()}()},this.recalculateLocations=function(){this.documentHeight=0,this.update()}}return t.prototype.listenToDOM=function(){c&&(window.addEventListener?(this.item===document.body?window.addEventListener("scroll",this.DOMListener,w):this.item.addEventListener("scroll",this.DOMListener,w),window.addEventListener("resize",this.DOMListener)):(this.item===document.body?window.attachEvent("onscroll",this.DOMListener):this.item.attachEvent("onscroll",this.DOMListener),window.attachEvent("onresize",this.DOMListener)),this.destroy=function(){window.addEventListener?(this.item===document.body?(window.removeEventListener("scroll",this.DOMListener,w),this.containerWatcher.destroy()):this.item.removeEventListener("scroll",this.DOMListener,w),window.removeEventListener("resize",this.DOMListener)):(this.item===document.body?(window.detachEvent("onscroll",this.DOMListener),this.containerWatcher.destroy()):this.item.detachEvent("onscroll",this.DOMListener),window.detachEvent("onresize",this.DOMListener))})},t.prototype.destroy=function(){},t.prototype.DOMListener=function(t){this.setStateFromDOM(t)},t.prototype.setStateFromDOM=function(t){var e=n(this.item),i=o(this.item),r=s(this.item);this.setState(e,i,r,t)},t.prototype.setState=function(t,e,i,o){var s=e!==this.viewportHeight||i!==this.contentHeight;if(this.latestEvent=o,this.viewportTop=t,this.viewportHeight=e,this.viewportBottom=t+e,this.contentHeight=i,s)for(var n=this.watchers.length;n--;)this.watchers[n].recalculateLocation();this.updateAndTriggerWatchers(o)},t.prototype.updateAndTriggerWatchers=function(t){for(var e=this.watchers.length;e--;)this.watchers[e].update();for(e=this.watchers.length;e--;)this.watchers[e].triggerCallbacks(t)},t.prototype.createCustomContainer=function(){return new t},t.prototype.createContainer=function(e){"string"==typeof e?e=document.querySelector(e):e&&e.length>0&&(e=e[0]);var i=new t(e,this);return i.setStateFromDOM(),i.listenToDOM(),i},t.prototype.create=function(t,e){"string"==typeof t?t=document.querySelector(t):t&&t.length>0&&(t=t[0]);var i=new l(this,t,e);return this.watchers.push(i),i},t.prototype.beget=function(t,e){return this.create(t,e)},t}();t.exports=d},function(t,e,i){"use strict";function o(t,e,i){function o(t,e){if(0!==t.length)for(v=t.length;v--;)(b=t[v]).callback.call(I,e,I),b.isOne&&t.splice(v,1)}var s,d,f,m,v,b,I=this;this.watchItem=e,this.container=t,this.offsets=i?i===+i?{top:i,bottom:i}:{top:i.top||w.top,bottom:i.bottom||w.bottom}:w,this.callbacks={};for(var E=0,y=u.length;E<y;E++)I.callbacks[u[E]]=[];this.locked=!1,this.triggerCallbacks=function(t){switch(this.isInViewport&&!s&&o(this.callbacks[r],t),this.isFullyInViewport&&!d&&o(this.callbacks[h],t),this.isAboveViewport!==f&&this.isBelowViewport!==m&&(o(this.callbacks[n],t),d||this.isFullyInViewport||(o(this.callbacks[h],t),o(this.callbacks[a],t)),s||this.isInViewport||(o(this.callbacks[r],t),o(this.callbacks[c],t))),!this.isFullyInViewport&&d&&o(this.callbacks[a],t),!this.isInViewport&&s&&o(this.callbacks[c],t),this.isInViewport!==s&&o(this.callbacks[n],t),!0){case s!==this.isInViewport:case d!==this.isFullyInViewport:case f!==this.isAboveViewport:case m!==this.isBelowViewport:o(this.callbacks[p],t)}s=this.isInViewport,d=this.isFullyInViewport,f=this.isAboveViewport,m=this.isBelowViewport},this.recalculateLocation=function(){if(!this.locked){var t=this.top,e=this.bottom;if(this.watchItem.nodeName){var i=this.watchItem.style.display;"none"===i&&(this.watchItem.style.display="");for(var s=0,n=this.container;n.containerWatcher;)s+=n.containerWatcher.top-n.containerWatcher.container.viewportTop,n=n.containerWatcher.container;var r=this.watchItem.getBoundingClientRect();this.top=r.top+this.container.viewportTop-s,this.bottom=r.bottom+this.container.viewportTop-s,"none"===i&&(this.watchItem.style.display=i)}else this.watchItem===+this.watchItem?this.watchItem>0?this.top=this.bottom=this.watchItem:this.top=this.bottom=this.container.documentHeight-this.watchItem:(this.top=this.watchItem.top,this.bottom=this.watchItem.bottom);this.top-=this.offsets.top,this.bottom+=this.offsets.bottom,this.height=this.bottom-this.top,void 0===t&&void 0===e||this.top===t&&this.bottom===e||o(this.callbacks[l],null)}},this.recalculateLocation(),this.update(),s=this.isInViewport,d=this.isFullyInViewport,f=this.isAboveViewport,m=this.isBelowViewport}var s=i(1),n=s.VISIBILITYCHANGE,r=s.ENTERVIEWPORT,h=s.FULLYENTERVIEWPORT,c=s.EXITVIEWPORT,a=s.PARTIALLYEXITVIEWPORT,l=s.LOCATIONCHANGE,p=s.STATECHANGE,u=s.eventTypes,w=s.defaultOffsets;o.prototype={on:function(t,e,i){switch(!0){case t===n&&!this.isInViewport&&this.isAboveViewport:case t===r&&this.isInViewport:case t===h&&this.isFullyInViewport:case t===c&&this.isAboveViewport&&!this.isInViewport:case t===a&&this.isInViewport&&this.isAboveViewport:if(e.call(this,this.container.latestEvent,this),i)return}if(!this.callbacks[t])throw new Error("Tried to add a scroll monitor listener of type "+t+". Your options are: "+u.join(", "));this.callbacks[t].push({callback:e,isOne:i||!1})},off:function(t,e){if(!this.callbacks[t])throw new Error("Tried to remove a scroll monitor listener of type "+t+". Your options are: "+u.join(", "));for(var i,o=0;i=this.callbacks[t][o];o++)if(i.callback===e){this.callbacks[t].splice(o,1);break}},one:function(t,e){this.on(t,e,!0)},recalculateSize:function(){this.height=this.watchItem.offsetHeight+this.offsets.top+this.offsets.bottom,this.bottom=this.top+this.height},update:function(){this.isAboveViewport=this.top<this.container.viewportTop,this.isBelowViewport=this.bottom>this.container.viewportBottom,this.isInViewport=this.top<this.container.viewportBottom&&this.bottom>this.container.viewportTop,this.isFullyInViewport=this.top>=this.container.viewportTop&&this.bottom<=this.container.viewportBottom||this.isAboveViewport&&this.isBelowViewport},destroy:function(){var t=this.container.watchers.indexOf(this);this.container.watchers.splice(t,1);for(var e=0,i=u.length;e<i;e++)this.callbacks[u[e]].length=0},lock:function(){this.locked=!0},unlock:function(){this.locked=!1}};for(var d=function(t){return function(e,i){this.on.call(this,t,e,i)}},f=0,m=u.length;f<m;f++){var v=u[f];o.prototype[v]=d(v)}t.exports=o}])});
},{}],"u7YK":[function(require,module,exports) {
"use strict";function e(e){return new Promise(function(t){return setTimeout(t,e)})}function t(e,t,n){return new Promise(function(r){var o=0,u=setInterval(function(){var t=e[o];n(t,o),o>=e.length-1?(clearInterval(u),r()):o++},t)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.sleep=e,exports.loopWithDelay=t;
},{}],"Mo3O":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function u(e){try{c(r.next(e))}catch(t){o(t)}}function a(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(u,a)}c((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r=this;Object.defineProperty(exports,"__esModule",{value:!0});var i=n(require("scrollmonitor")),o=require("./utils"),u=document.querySelector("#typin-effect h2"),a=u.innerText,c=a.split(", ").map(function(e){return e.split("")});u.innerHTML="";var l=document.createElement("span");l.className="cursor",u.append(l);var s=document.createElement("span");u.prepend(s);var f=i.default.create(u);f.enterViewport(function(){return e(r,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:return[4,o.sleep(500)];case 1:return e.sent(),[4,o.loopWithDelay(c[0],60,function(e){s.innerText+=e})];case 2:return e.sent(),s.innerHTML+=", <br/>",l.classList.add("blink"),[4,o.sleep(1500)];case 3:return e.sent(),l.classList.remove("blink"),[4,o.loopWithDelay(c[1],60,function(e){s.innerText+=e})];case 4:return e.sent(),l.classList.add("blink"),[2]}})})}),f.exitViewport(function(){return e(r,void 0,void 0,function(){return t(this,function(e){return s.innerHTML="",[2]})})});
},{"scrollmonitor":"B9rA","./utils":"u7YK"}]},{},["Mo3O"], null)
//# sourceMappingURL=https://iagobruno.github.io/ideas-for-title-animation/typin-effect.ce6b26c0.js.map