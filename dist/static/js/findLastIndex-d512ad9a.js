import{bt as n,aS as r,bu as t,aM as u,ay as e,bv as a,bw as i,aN as f,bx as o,by as l}from"./index-23113fce.js";import{c,t as v,i as s,g as b,b as h}from"./index-80694008.js";function g(r){var t=function(r){return r?1/0===(r=n(r))||-1/0===r?17976931348623157e292*(r<0?-1:1):r==r?r:0:0===r?r:0}(r),u=t%1;return t==t?u?t-u:t:0}function d(n,r,t,u){for(var e=n.length,a=t+(u?1:-1);u?a--:++a<e;)if(r(n[a],a,n))return a;return-1}function m(n){return n==n&&!u(n)}function j(n,r){return function(t){return null!=t&&(t[n]===r&&(void 0!==r||n in Object(t)))}}function x(n){var u=function(n){for(var r=e(n),t=r.length;t--;){var u=r[t],a=n[u];r[t]=[u,a,m(a)]}return r}(n);return 1==u.length&&u[0][2]?j(u[0][0],u[0][1]):function(e){return e===n||function(n,u,e,a){var i=e.length,f=i,o=!a;if(null==n)return!f;for(n=Object(n);i--;){var l=e[i];if(o&&l[2]?l[1]!==n[l[0]]:!(l[0]in n))return!1}for(;++i<f;){var c=(l=e[i])[0],v=n[c],s=l[1];if(o&&l[2]){if(void 0===v&&!(c in n))return!1}else{var b=new r;if(a)var h=a(v,s,c,n,u,b);if(!(void 0===h?t(s,v,3,a,b):h))return!1}}return!0}(e,n,u)}}function p(n,r){return null!=n&&r in Object(n)}function y(n,r){return null!=n&&function(n,r,t){for(var u=-1,e=(r=c(r,n)).length,l=!1;++u<e;){var s=v(r[u]);if(!(l=null!=n&&t(n,s)))break;n=n[s]}return l||++u!=e?l:!!(e=null==n?0:n.length)&&a(e)&&i(s,e)&&(f(n)||o(n))}(n,r,p)}function M(n){return s(n)?(r=v(n),function(n){return null==n?void 0:n[r]}):function(n){return function(r){return h(r,n)}}(n);var r}function O(n){return"function"==typeof n?n:null==n?l:"object"==typeof n?f(n)?(r=n[0],u=n[1],s(r)&&m(u)?j(v(r),u):function(n){var e=b(n,r);return void 0===e&&e===u?y(n,r):t(u,e,3)}):x(n):M(n);var r,u}var w=Math.max;function k(n,r,t){var u=null==n?0:n.length;if(!u)return-1;var e=null==t?0:g(t);return e<0&&(e=w(u+e,0)),d(n,O(r),e)}var N=Math.max,S=Math.min;function q(n,r,t){var u=null==n?0:n.length;if(!u)return-1;var e=u-1;return void 0!==t&&(e=g(t),e=t<0?N(u+e,0):S(e,u-1)),d(n,O(r),e,!0)}export{q as a,k as f};
