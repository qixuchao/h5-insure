import{aP as t,aQ as n,aR as r}from"./index-6a3950c5.js";var i=function(){return t.Date.now()},e=/\s/;var a=/^\s+/;function u(t){return t?t.slice(0,function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}(t)+1).replace(a,""):t}var o=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,v=parseInt;function s(t){if("number"==typeof t)return t;if(n(t))return NaN;if(r(t)){var i="function"==typeof t.valueOf?t.valueOf():t;t=r(i)?i+"":i}if("string"!=typeof t)return 0===t?t:+t;t=u(t);var e=f.test(t);return e||c.test(t)?v(t.slice(2),e?2:8):o.test(t)?NaN:+t}var l=Math.max,d=Math.min;function m(t,n,e){var a,u,o,f,c,v,m=0,p=!1,h=!1,x=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function T(n){var r=a,i=u;return a=u=void 0,m=n,f=t.apply(i,r)}function y(t){return m=t,c=setTimeout(N,n),p?T(t):f}function g(t){var r=t-v;return void 0===v||r>=n||r<0||h&&t-m>=o}function N(){var t=i();if(g(t))return w(t);c=setTimeout(N,function(t){var r=n-(t-v);return h?d(r,o-(t-m)):r}(t))}function w(t){return c=void 0,x&&a?T(t):(a=u=void 0,f)}function $(){var t=i(),r=g(t);if(a=arguments,u=this,v=t,r){if(void 0===c)return y(v);if(h)return clearTimeout(c),c=setTimeout(N,n),T(v)}return void 0===c&&(c=setTimeout(N,n)),f}return n=s(n)||0,r(e)&&(p=!!e.leading,o=(h="maxWait"in e)?l(s(e.maxWait)||0,n):o,x="trailing"in e?!!e.trailing:x),$.cancel=function(){void 0!==c&&clearTimeout(c),m=0,a=v=u=c=void 0},$.flush=function(){return void 0===c?f:w(i())},$}export{m as d};
