// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-pcorr@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function s(s,n){var i;if(arguments.length){if(!r(s))throw new TypeError(e("1JZ49,Hq",s));if(!r(n))throw new TypeError(e("1JZ4A,Hr",n));i=t(s,n)}else i=t();return o;function o(r,t){var e;return 0===arguments.length?null===(e=i())?e:e*e:(e=i(r,t))*e}}export{s as default};
//# sourceMappingURL=index.mjs.map
