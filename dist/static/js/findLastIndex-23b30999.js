import{aV as n,aW as r,aX as t,aY as u,aZ as a,a_ as e,a$ as i,b0 as f,b1 as o,b2 as l}from"./index-fc8ebf20.js";import{c,t as v,i as s,g as h,b}from"./index-48936201.js";function g(r){var t=function(r){return r?1/0===(r=n(r))||-1/0===r?17976931348623157e292*(r<0?-1:1):r==r?r:0:0===r?r:0}(r),u=t%1;return t==t?u?t-u:t:0}function d(n,r,t,u){for(var a=n.length,e=t+(u?1:-1);u?e--:++e<a;)if(r(n[e],e,n))return e;return-1}function m(n){return n==n&&!u(n)}function j(n,r){return function(t){return null!=t&&(t[n]===r&&(void 0!==r||n in Object(t)))}}function p(n){var u=function(n){for(var r=a(n),t=r.length;t--;){var u=r[t],e=n[u];r[t]=[u,e,m(e)]}return r}(n);return 1==u.length&&u[0][2]?j(u[0][0],u[0][1]):function(a){return a===n||function(n,u,a,e){var i=a.length,f=i,o=!e;if(null==n)return!f;for(n=Object(n);i--;){var l=a[i];if(o&&l[2]?l[1]!==n[l[0]]:!(l[0]in n))return!1}for(;++i<f;){var c=(l=a[i])[0],v=n[c],s=l[1];if(o&&l[2]){if(void 0===v&&!(c in n))return!1}else{var h=new r;if(e)var b=e(v,s,c,n,u,h);if(!(void 0===b?t(s,v,3,e,h):b))return!1}}return!0}(a,n,u)}}function x(n,r){return null!=n&&r in Object(n)}function M(n,r){return null!=n&&function(n,r,t){for(var u=-1,a=(r=c(r,n)).length,l=!1;++u<a;){var s=v(r[u]);if(!(l=null!=n&&t(n,s)))break;n=n[s]}return l||++u!=a?l:!!(a=null==n?0:n.length)&&e(a)&&i(s,a)&&(f(n)||o(n))}(n,r,x)}function O(n){return s(n)?(r=v(n),function(n){return null==n?void 0:n[r]}):function(n){return function(r){return b(r,n)}}(n);var r}function y(n){return"function"==typeof n?n:null==n?l:"object"==typeof n?f(n)?(r=n[0],u=n[1],s(r)&&m(u)?j(v(r),u):function(n){var a=h(n,r);return void 0===a&&a===u?M(n,r):t(u,a,3)}):p(n):O(n);var r,u}var k=Math.max;function w(n,r,t){var u=null==n?0:n.length;if(!u)return-1;var a=null==t?0:g(t);return a<0&&(a=k(u+a,0)),d(n,y(r),a)}var V=Math.max,W=Math.min;function X(n,r,t){var u=null==n?0:n.length;if(!u)return-1;var a=u-1;return void 0!==t&&(a=g(t),a=t<0?V(u+a,0):W(a,u-1)),d(n,y(r),a,!0)}export{X as a,w as f};
