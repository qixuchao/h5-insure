import{as as t,at as r,au as n}from"./vendor-8ce3e007.js";var i=function(){return t.Date.now()},e=/\s/;var u=/^\s+/;function o(t){return t?t.slice(0,function(t){for(var r=t.length;r--&&e.test(t.charAt(r)););return r}(t)+1).replace(u,""):t}var a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,v=parseInt;function s(t){if("number"==typeof t)return t;if(r(t))return NaN;if(n(t)){var i="function"==typeof t.valueOf?t.valueOf():t;t=n(i)?i+"":i}if("string"!=typeof t)return 0===t?t:+t;t=o(t);var e=f.test(t);return e||c.test(t)?v(t.slice(2),e?2:8):a.test(t)?NaN:+t}var l=Math.max,d=Math.min;function m(t,r,e){var u,o,a,f,c,v,m=0,p=!1,h=!1,T=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function x(r){var n=u,i=o;return u=o=void 0,m=r,f=t.apply(i,n)}function y(t){return m=t,c=setTimeout(N,r),p?x(t):f}function g(t){var n=t-v;return void 0===v||n>=r||n<0||h&&t-m>=a}function N(){var t=i();if(g(t))return w(t);c=setTimeout(N,function(t){var n=r-(t-v);return h?d(n,a-(t-m)):n}(t))}function w(t){return c=void 0,T&&u?x(t):(u=o=void 0,f)}function $(){var t=i(),n=g(t);if(u=arguments,o=this,v=t,n){if(void 0===c)return y(v);if(h)return clearTimeout(c),c=setTimeout(N,r),x(v)}return void 0===c&&(c=setTimeout(N,r)),f}return r=s(r)||0,n(e)&&(p=!!e.leading,a=(h="maxWait"in e)?l(s(e.maxWait)||0,r):a,T="trailing"in e?!!e.trailing:T),$.cancel=function(){void 0!==c&&clearTimeout(c),m=0,u=v=o=c=void 0},$.flush=function(){return void 0===c?f:w(i())},$}export{m as d};
