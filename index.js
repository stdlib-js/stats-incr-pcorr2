// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,i){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=i?e+t(n):t(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):n.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function y(e){var r,t,a=parseFloat(e.arg);if(!isFinite(a)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);a=e.arg}switch(e.specifier){case"e":case"E":t=a.toExponential(e.precision);break;case"f":case"F":t=a.toFixed(e.precision);break;case"g":case"G":p(a)<1e-4?((r=e.precision)>0&&(r-=1),t=a.toExponential(r)):t=a.toPrecision(e.precision),e.alternate||(t=f.call(t,m,"$1e"),t=f.call(t,v,"e"),t=f.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),a>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var k=String.fromCharCode,S=isNaN,V=Array.isArray;function $(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,i,t,n,o,p,l,u,f;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(c(t=e[u]))p+=t;else{if(r=void 0!==t.precision,!(t=$(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,S(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=y(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=a(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var _=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,i,t,a;for(i=[],a=0,t=_.exec(e);t;)(r=e.slice(a,_.lastIndex-t[0].length)).length&&i.push(r),i.push(F(t)),a=_.lastIndex,t=_.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function C(e){return"string"==typeof e}function A(e){var r,i;if(!C(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return T.apply(null,r)}var R=Object.prototype,j=R.toString,Z=R.__defineGetter__,N=R.__defineSetter__,W=R.__lookupGetter__,O=R.__lookupSetter__,L=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===j.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===j.call(i))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(W.call(e,r)||O.call(e,r)?(t=e.__proto__,e.__proto__=R,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&Z&&Z.call(e,r,i.get),o&&N&&N.call(e,r,i.set),e};function P(e,r,i){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function G(e){return"number"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,z=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"",D=X()?function(e){var r,i,t,a,n;if(null==e)return M.call(e);i=e[B],n=B,r=null!=(a=e)&&z.call(a,n);try{e[B]=void 0}catch(r){return M.call(e)}return t=M.call(e),r?e[B]=i:delete e[B],t}:function(e){return M.call(e)},H=Number,J=H.prototype.toString,K=X();function Q(e){return"object"==typeof e&&(e instanceof H||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Number]"===D(e)))}function Y(e){return G(e)||Q(e)}function ee(e){return e!=e}P(Y,"isPrimitive",G),P(Y,"isObject",Q);var re=Math.sqrt;function ie(e){return"number"==typeof e}function te(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ae(e,r,i){var t=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+te(a):te(a)+e,t&&(e="-"+e)),e}var ne=String.prototype.toLowerCase,oe=String.prototype.toUpperCase;function se(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ie(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ae(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ae(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===oe.call(e.specifier)?oe.call(i):ne.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function ce(e){return"string"==typeof e}var pe=Math.abs,le=String.prototype.toLowerCase,ue=String.prototype.toUpperCase,fe=String.prototype.replace,ge=/e\+(\d)$/,de=/e-(\d)$/,he=/^(\d+)$/,we=/^(\d+)e/,be=/\.0$/,ve=/\.0*e/,me=/(\..*[^0])0*e/;function ye(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ie(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":pe(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=fe.call(i,me,"$1e"),i=fe.call(i,ve,"e"),i=fe.call(i,be,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=fe.call(i,ge,"e+0$1"),i=fe.call(i,de,"e-0$1"),e.alternate&&(i=fe.call(i,he,"$1."),i=fe.call(i,we,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ue.call(e.specifier)?ue.call(i):le.call(i)}function Ee(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function xe(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Ee(t):Ee(t)+e}var ke=String.fromCharCode,Se=isNaN,Ve=Array.isArray;function $e(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Te(e){var r,i,t,a,n,o,s,c,p;if(!Ve(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(ce(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=$e(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(a=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Se(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Se(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=se(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Se(t.arg)){if((n=parseInt(t.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Se(n)?String(t.arg):ke(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=ye(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ae(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=xe(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var _e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Fe(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ie(e){var r,i,t,a;for(i=[],a=0,t=_e.exec(e);t;)(r=e.slice(a,_e.lastIndex-t[0].length)).length&&i.push(r),i.push(Fe(t)),a=_e.lastIndex,t=_e.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function Ce(e){return"string"==typeof e}function Ae(e){var r,i;if(!Ce(e))throw new TypeError(Ae("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Ie(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Te.apply(null,r)}function Re(e,r){var i,t,a,n,o,s,c,p,l,u,f,g;if(i=0,t=0,f=0,g=0,arguments.length){if(!G(e))throw new TypeError(Ae("invalid argument. First argument must be a number. Value: `%s`.",e));if(!G(r))throw new TypeError(Ae("invalid argument. Second argument must be a number. Value: `%s`.",r));return c=e,p=r,h}return c=0,p=0,d;function d(e,r){var o;return 0===arguments.length?0===g?null:1===g?ee(i)||ee(t)?NaN:0:f/(g-1)/(l*u):(i+=(s=e-c)*(e-(c+=s/(g+=1))),t+=(n=r-(p+=(a=r-p)/g))*a,f+=s*n,g<2?ee(i)||ee(t)?NaN:0:(l=re(i/(o=g-1)),u=re(t/o),f/o/(l*u)))}function h(e,r){return 0===arguments.length?0===g?null:f/g/(l*u):(t+=(o=r-p)*o,f+=(s=e-c)*o,l=re((i+=s*s)/(g+=1)),u=re(t/g),f/g/(l*u))}}function je(e){return"number"==typeof e}function Ze(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Ne(e,r,i){var t=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Ze(a):Ze(a)+e,t&&(e="-"+e)),e}var We=String.prototype.toLowerCase,Oe=String.prototype.toUpperCase;function Le(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!je(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Ne(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Ne(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Oe.call(e.specifier)?Oe.call(i):We.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Pe(e){return"string"==typeof e}var Ge=Math.abs,Ue=String.prototype.toLowerCase,Xe=String.prototype.toUpperCase,Me=String.prototype.replace,ze=/e\+(\d)$/,qe=/e-(\d)$/,Be=/^(\d+)$/,De=/^(\d+)e/,He=/\.0$/,Je=/\.0*e/,Ke=/(\..*[^0])0*e/;function Qe(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!je(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Ge(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Me.call(i,Ke,"$1e"),i=Me.call(i,Je,"e"),i=Me.call(i,He,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Me.call(i,ze,"e+0$1"),i=Me.call(i,qe,"e-0$1"),e.alternate&&(i=Me.call(i,Be,"$1."),i=Me.call(i,De,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Xe.call(e.specifier)?Xe.call(i):Ue.call(i)}function Ye(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function er(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Ye(t):Ye(t)+e}var rr=String.fromCharCode,ir=isNaN,tr=Array.isArray;function ar(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function nr(e){var r,i,t,a,n,o,s,c,p;if(!tr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Pe(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=ar(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(a=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,ir(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,ir(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Le(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!ir(t.arg)){if((n=parseInt(t.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=ir(n)?String(t.arg):rr(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Qe(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Ne(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=er(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var or=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function sr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function cr(e){var r,i,t,a;for(i=[],a=0,t=or.exec(e);t;)(r=e.slice(a,or.lastIndex-t[0].length)).length&&i.push(r),i.push(sr(t)),a=or.lastIndex,t=or.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function pr(e){return"string"==typeof e}function lr(e){var r,i,t;if(!pr(e))throw new TypeError(lr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=cr(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return nr.apply(null,i)}return function(e,r){var i;if(arguments.length){if(!G(e))throw new TypeError(lr("invalid argument. First argument must be a number. Value: `%s`.",e));if(!G(r))throw new TypeError(lr("invalid argument. Second argument must be a number. Value: `%s`.",r));i=Re(e,r)}else i=Re();return t;function t(e,r){var t;return 0===arguments.length?null===(t=i())?t:t*t:(t=i(e,r))*t}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).incrpcorr2=r();
//# sourceMappingURL=index.js.map
