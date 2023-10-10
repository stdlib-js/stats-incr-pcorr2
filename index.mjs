// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-pcorr@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(n,s){var i;if(arguments.length){if(!r(n))throw new TypeError(t("invalid argument. First argument must be a number. Value: `%s`.",n));if(!r(s))throw new TypeError(t("invalid argument. Second argument must be a number. Value: `%s`.",s));i=e(n,s)}else i=e();return m;function m(r,e){var t;return 0===arguments.length?null===(t=i())?t:t*t:(t=i(r,e))*t}}export{n as default};
//# sourceMappingURL=index.mjs.map
