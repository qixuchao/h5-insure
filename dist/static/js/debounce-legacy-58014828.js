System.register(["./vendor-legacy-0b144948.js"],(function(t){"use strict";var n,r,e;return{setters:[function(t){n=t.av,r=t.aw,e=t.ax}],execute:function(){t("d",(function(t,n,r){var u,o,a,f,c,v,s=0,p=!1,y=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(n){var r=u,e=o;return u=o=void 0,s=n,f=t.apply(e,r)}function x(t){return s=t,c=setTimeout(w,n),p?h(t):f}function T(t){var r=t-v;return void 0===v||r>=n||r<0||y&&t-s>=a}function w(){var t=i();if(T(t))return N(t);c=setTimeout(w,function(t){var r=n-(t-v);return y?m(r,a-(t-s)):r}(t))}function N(t){return c=void 0,g&&u?h(t):(u=o=void 0,f)}function b(){var t=i(),r=T(t);if(u=arguments,o=this,v=t,r){if(void 0===c)return x(v);if(y)return clearTimeout(c),c=setTimeout(w,n),h(v)}return void 0===c&&(c=setTimeout(w,n)),f}return n=l(n)||0,e(r)&&(p=!!r.leading,a=(y="maxWait"in r)?d(l(r.maxWait)||0,n):a,g="trailing"in r?!!r.trailing:g),b.cancel=function(){void 0!==c&&clearTimeout(c),s=0,u=v=o=c=void 0},b.flush=function(){return void 0===c?f:N(i())},b}));var i=function(){return n.Date.now()},u=/\s/,o=/^\s+/;function a(t){return t?t.slice(0,function(t){for(var n=t.length;n--&&u.test(t.charAt(n)););return n}(t)+1).replace(o,""):t}var f=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,v=/^0o[0-7]+$/i,s=parseInt;function l(t){if("number"==typeof t)return t;if(r(t))return NaN;if(e(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=e(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=a(t);var i=c.test(t);return i||v.test(t)?s(t.slice(2),i?2:8):f.test(t)?NaN:+t}var d=Math.max,m=Math.min}}}));
