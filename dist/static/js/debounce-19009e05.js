import{aS as t,aT as n,aU as r}from"./index-cbac7319.js";var i=function(){return t.Date.now()},e=/\s/;var a=/^\s+/;function u(t){return t?t.slice(0,function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}(t)+1).replace(a,""):t}var o=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,v=parseInt;function s(t){if("number"==typeof t)return t;if(n(t))return NaN;if(r(t)){var i="function"==typeof t.valueOf?t.valueOf():t;t=r(i)?i+"":i}if("string"!=typeof t)return 0===t?t:+t;t=u(t);var e=f.test(t);return e||c.test(t)?v(t.slice(2),e?2:8):o.test(t)?NaN:+t}var l=Math.max,d=Math.min;function m(t,n,e){var a,u,o,f,c,v,m=0,p=!1,T=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function x(n){var r=a,i=u;return a=u=void 0,m=n,f=t.apply(i,r)}function y(t){return m=t,c=setTimeout(N,n),p?x(t):f}function g(t){var r=t-v;return void 0===v||r>=n||r<0||T&&t-m>=o}function N(){var t=i();if(g(t))return b(t);c=setTimeout(N,function(t){var r=n-(t-v);return T?d(r,o-(t-m)):r}(t))}function b(t){return c=void 0,h&&a?x(t):(a=u=void 0,f)}function w(){var t=i(),r=g(t);if(a=arguments,u=this,v=t,r){if(void 0===c)return y(v);if(T)return clearTimeout(c),c=setTimeout(N,n),x(v)}return void 0===c&&(c=setTimeout(N,n)),f}return n=s(n)||0,r(e)&&(p=!!e.leading,o=(T="maxWait"in e)?l(s(e.maxWait)||0,n):o,h="trailing"in e?!!e.trailing:h),w.cancel=function(){void 0!==c&&clearTimeout(c),m=0,a=v=u=c=void 0},w.flush=function(){return void 0===c?f:b(i())},w}export{m as d};
