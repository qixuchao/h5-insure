import{b6 as n,b7 as r,b8 as t,b9 as u,ba as e,bb as i,bc as a,bd as f,be as o,bf as l}from"./index-6a9cf46c.js";import{c,t as v,i as s,g as b,b as h}from"./index-d68eb918.js";function d(r){var t=function(r){return r?1/0===(r=n(r))||-1/0===r?17976931348623157e292*(r<0?-1:1):r==r?r:0:0===r?r:0}(r),u=t%1;return t==t?u?t-u:t:0}function g(n,r,t,u){for(var e=n.length,i=t+(u?1:-1);u?i--:++i<e;)if(r(n[i],i,n))return i;return-1}function m(n){return n==n&&!u(n)}function j(n,r){return function(t){return null!=t&&(t[n]===r&&(void 0!==r||n in Object(t)))}}function p(n){var u=function(n){for(var r=e(n),t=r.length;t--;){var u=r[t],i=n[u];r[t]=[u,i,m(i)]}return r}(n);return 1==u.length&&u[0][2]?j(u[0][0],u[0][1]):function(e){return e===n||function(n,u,e,i){var a=e.length,f=a,o=!i;if(null==n)return!f;for(n=Object(n);a--;){var l=e[a];if(o&&l[2]?l[1]!==n[l[0]]:!(l[0]in n))return!1}for(;++a<f;){var c=(l=e[a])[0],v=n[c],s=l[1];if(o&&l[2]){if(void 0===v&&!(c in n))return!1}else{var b=new r;if(i)var h=i(v,s,c,n,u,b);if(!(void 0===h?t(s,v,3,i,b):h))return!1}}return!0}(e,n,u)}}function x(n,r){return null!=n&&r in Object(n)}function M(n,r){return null!=n&&function(n,r,t){for(var u=-1,e=(r=c(r,n)).length,l=!1;++u<e;){var s=v(r[u]);if(!(l=null!=n&&t(n,s)))break;n=n[s]}return l||++u!=e?l:!!(e=null==n?0:n.length)&&i(e)&&a(s,e)&&(f(n)||o(n))}(n,r,x)}function O(n){return s(n)?(r=v(n),function(n){return null==n?void 0:n[r]}):function(n){return function(r){return h(r,n)}}(n);var r}function y(n){return"function"==typeof n?n:null==n?l:"object"==typeof n?f(n)?(r=n[0],u=n[1],s(r)&&m(u)?j(v(r),u):function(n){var e=b(n,r);return void 0===e&&e===u?M(n,r):t(u,e,3)}):p(n):O(n);var r,u}var k=Math.max;function w(n,r,t){var u=null==n?0:n.length;if(!u)return-1;var e=null==t?0:d(t);return e<0&&(e=k(u+e,0)),g(n,y(r),e)}var q=Math.max,z=Math.min;function A(n,r,t){var u=null==n?0:n.length;if(!u)return-1;var e=u-1;return void 0!==t&&(e=d(t),e=t<0?q(u+e,0):z(e,u-1)),g(n,y(r),e,!0)}export{A as a,w as f};
