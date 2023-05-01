// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,u=r.__defineSetter__,a=r.__lookupGetter__,i=r.__lookupSetter__;var l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,l){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(a.call(t,e)||i.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=l.value,t.__proto__=c):t[e]=l.value),p="get"in l,y="set"in l,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,l.get),y&&u&&u.call(t,e,l.set),t};function c(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var _=y()?function(t){var e,r,n,o,u;if(null==t)return b.call(t);r=t[m],u=m,e=null!=(o=t)&&v.call(o,u);try{t[m]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[m]=r:delete t[m],n}:function(t){return b.call(t)},g=Number,s=g.prototype.toString;var d=y();function h(t){return"object"==typeof t&&(t instanceof g||(d?function(t){try{return s.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function w(t){return f(t)||h(t)}function j(t){return t!=t}c(w,"isPrimitive",f),c(w,"isObject",h);var S=Math.sqrt;function O(t,e){var r,n,o,u,a,i,l,c,p,y,b,v;if(r=0,n=0,b=0,v=0,arguments.length){if(!f(t))throw new TypeError("invalid argument. First argument must be a number primitive. Value: `"+t+"`.");if(!f(e))throw new TypeError("invalid argument. Second argument must be a number primitive. Value: `"+e+"`.");return l=t,c=e,_}return l=0,c=0,m;function m(t,e){var a;return 0===arguments.length?0===v?null:1===v?j(r)||j(n)?NaN:0:b/(v-1)/(p*y):(r+=(i=t-l)*(t-(l+=i/(v+=1))),n+=(u=e-(c+=(o=e-c)/v))*o,b+=i*u,v<2?j(r)||j(n)?NaN:0:(p=S(r/(a=v-1)),y=S(n/a),b/a/(p*y)))}function _(t,e){return 0===arguments.length?0===v?null:b/v/(p*y):(n+=(a=e-c)*a,b+=(i=t-l)*a,p=S((r+=i*i)/(v+=1)),y=S(n/v),b/v/(p*y))}}function T(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}function E(t,e){var r;if(arguments.length){if(!f(t))throw new TypeError(T("0eg4M",t));if(!f(e))throw new TypeError(T("0eg4N",e));r=O(t,e)}else r=O();return n;function n(t,e){var n;return 0===arguments.length?null===(n=r())?n:n*n:(n=r(t,e))*n}}export{E as default};
//# sourceMappingURL=mod.js.map
