import{i as t,b as r,a as n,r as i}from"./isObjectLike-a9798079.js";function e(n){return"symbol"==typeof n||t(n)&&"[object Symbol]"==r(n)}var o=/\s/;var u=/^\s+/;function a(t){return t?t.slice(0,function(t){for(var r=t.length;r--&&o.test(t.charAt(r)););return r}(t)+1).replace(u,""):t}var f=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,v=parseInt;function l(t){if("number"==typeof t)return t;if(e(t))return NaN;if(n(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=n(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=a(t);var i=c.test(t);return i||s.test(t)?v(t.slice(2),i?2:8):f.test(t)?NaN:+t}var m=function(){return i.Date.now()},p=Math.max,d=Math.min;function y(t,r,i){var e,o,u,a,f,c,s=0,v=!1,y=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(r){var n=e,i=o;return e=o=void 0,s=r,a=t.apply(i,n)}function T(t){return s=t,f=setTimeout(g,r),v?h(t):a}function x(t){var n=t-c;return void 0===c||n>=r||n<0||y&&t-s>=u}function g(){var t=m();if(x(t))return N(t);f=setTimeout(g,function(t){var n=r-(t-c);return y?d(n,u-(t-s)):n}(t))}function N(t){return f=void 0,b&&e?h(t):(e=o=void 0,a)}function j(){var t=m(),n=x(t);if(e=arguments,o=this,c=t,n){if(void 0===f)return T(c);if(y)return clearTimeout(f),f=setTimeout(g,r),h(c)}return void 0===f&&(f=setTimeout(g,r)),a}return r=l(r)||0,n(i)&&(v=!!i.leading,u=(y="maxWait"in i)?p(l(i.maxWait)||0,r):u,b="trailing"in i?!!i.trailing:b),j.cancel=function(){void 0!==f&&clearTimeout(f),s=0,e=c=o=f=void 0},j.flush=function(){return void 0===f?a:N(m())},j}export{y as d,e as i};
