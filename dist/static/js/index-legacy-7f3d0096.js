System.register([],(function(r){"use strict";return{execute:function(){var e=r("q",{}),t=r=>encodeURIComponent(r).replace(/[!'()*]/g,(r=>`%${r.charCodeAt(0).toString(16).toUpperCase()}`)),n="%[a-f0-9]{2}",o=new RegExp(n,"gi"),a=new RegExp("("+n+")+","gi");function c(r,e){try{return decodeURIComponent(r.join(""))}catch(o){}if(1===r.length)return r;e=e||1;var t=r.slice(0,e),n=r.slice(e);return Array.prototype.concat.call([],c(t),c(n))}function i(r){try{return decodeURIComponent(r)}catch(n){for(var e=r.match(o),t=1;t<e.length;t++)e=(r=c(e,t).join("")).match(o);return r}}var s=function(r){if("string"!=typeof r)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(e){return function(r){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=a.exec(r);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var o=i(n[0]);o!==n[0]&&(t[n[0]]=o)}n=a.exec(r)}t["%C2"]="�";for(var c=Object.keys(t),s=0;s<c.length;s++){var l=c[s];r=r.replace(new RegExp(l,"g"),t[l])}return r}(r)}},l=(r,e)=>{if("string"!=typeof r||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[r];const t=r.indexOf(e);return-1===t?[r]:[r.slice(0,t),r.slice(t+e.length)]},u=function(r,e){for(var t={},n=Object.keys(r),o=Array.isArray(e),a=0;a<n.length;a++){var c=n[a],i=r[c];(o?-1!==e.indexOf(c):e(c,i,r))&&(t[c]=i)}return t};!function(r){const e=t,n=s,o=l,a=u,c=Symbol("encodeFragmentIdentifier");function i(r){if("string"!=typeof r||1!==r.length)throw new TypeError("arrayFormatSeparator must be single character string")}function p(r,t){return t.encode?t.strict?e(r):encodeURIComponent(r):r}function f(r,e){return e.decode?n(r):r}function y(r){return Array.isArray(r)?r.sort():"object"==typeof r?y(Object.keys(r)).sort(((r,e)=>Number(r)-Number(e))).map((e=>r[e])):r}function d(r){const e=r.indexOf("#");return-1!==e&&(r=r.slice(0,e)),r}function m(r){const e=(r=d(r)).indexOf("?");return-1===e?"":r.slice(e+1)}function g(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&"string"==typeof r&&""!==r.trim()?r=Number(r):!e.parseBooleans||null===r||"true"!==r.toLowerCase()&&"false"!==r.toLowerCase()||(r="true"===r.toLowerCase()),r}function b(r,e){i((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);const t=function(r){let e;switch(r.arrayFormat){case"index":return(r,t,n)=>{e=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),e?(void 0===n[r]&&(n[r]={}),n[r][e[1]]=t):n[r]=t};case"bracket":return(r,t,n)=>{e=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),e?void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=[t]:n[r]=t};case"colon-list-separator":return(r,t,n)=>{e=/(:list)$/.exec(r),r=r.replace(/:list$/,""),e?void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=[t]:n[r]=t};case"comma":case"separator":return(e,t,n)=>{const o="string"==typeof t&&t.includes(r.arrayFormatSeparator),a="string"==typeof t&&!o&&f(t,r).includes(r.arrayFormatSeparator);t=a?f(t,r):t;const c=o||a?t.split(r.arrayFormatSeparator).map((e=>f(e,r))):null===t?t:f(t,r);n[e]=c};case"bracket-separator":return(e,t,n)=>{const o=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),!o)return void(n[e]=t?f(t,r):t);const a=null===t?[]:t.split(r.arrayFormatSeparator).map((e=>f(e,r)));void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=a};default:return(r,e,t)=>{void 0!==t[r]?t[r]=[].concat(t[r],e):t[r]=e}}}(e),n=Object.create(null);if("string"!=typeof r)return n;if(!(r=r.trim().replace(/^[?#&]/,"")))return n;for(const a of r.split("&")){if(""===a)continue;let[r,c]=o(e.decode?a.replace(/\+/g," "):a,"=");c=void 0===c?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?c:f(c,e),t(f(r,e),c,n)}for(const o of Object.keys(n)){const r=n[o];if("object"==typeof r&&null!==r)for(const t of Object.keys(r))r[t]=g(r[t],e);else n[o]=g(r,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce(((r,e)=>{const t=n[e];return Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?r[e]=y(t):r[e]=t,r}),Object.create(null))}r.extract=m,r.parse=b,r.stringify=(r,e)=>{if(!r)return"";i((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);const t=t=>e.skipNull&&null==r[t]||e.skipEmptyString&&""===r[t],n=function(r){switch(r.arrayFormat){case"index":return e=>(t,n)=>{const o=t.length;return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:null===n?[...t,[p(e,r),"[",o,"]"].join("")]:[...t,[p(e,r),"[",p(o,r),"]=",p(n,r)].join("")]};case"bracket":return e=>(t,n)=>void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:null===n?[...t,[p(e,r),"[]"].join("")]:[...t,[p(e,r),"[]=",p(n,r)].join("")];case"colon-list-separator":return e=>(t,n)=>void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:null===n?[...t,[p(e,r),":list="].join("")]:[...t,[p(e,r),":list=",p(n,r)].join("")];case"comma":case"separator":case"bracket-separator":{const e="bracket-separator"===r.arrayFormat?"[]=":"=";return t=>(n,o)=>void 0===o||r.skipNull&&null===o||r.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[p(t,r),e,p(o,r)].join("")]:[[n,p(o,r)].join(r.arrayFormatSeparator)])}default:return e=>(t,n)=>void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:null===n?[...t,p(e,r)]:[...t,[p(e,r),"=",p(n,r)].join("")]}}(e),o={};for(const c of Object.keys(r))t(c)||(o[c]=r[c]);const a=Object.keys(o);return!1!==e.sort&&a.sort(e.sort),a.map((t=>{const o=r[t];return void 0===o?"":null===o?p(t,e):Array.isArray(o)?0===o.length&&"bracket-separator"===e.arrayFormat?p(t,e)+"[]":o.reduce(n(t),[]).join("&"):p(t,e)+"="+p(o,e)})).filter((r=>r.length>0)).join("&")},r.parseUrl=(r,e)=>{e=Object.assign({decode:!0},e);const[t,n]=o(r,"#");return Object.assign({url:t.split("?")[0]||"",query:b(m(r),e)},e&&e.parseFragmentIdentifier&&n?{fragmentIdentifier:f(n,e)}:{})},r.stringifyUrl=(e,t)=>{t=Object.assign({encode:!0,strict:!0,[c]:!0},t);const n=d(e.url).split("?")[0]||"",o=r.extract(e.url),a=r.parse(o,{sort:!1}),i=Object.assign(a,e.query);let s=r.stringify(i,t);s&&(s=`?${s}`);let l=function(r){let e="";const t=r.indexOf("#");return-1!==t&&(e=r.slice(t)),e}(e.url);return e.fragmentIdentifier&&(l=`#${t[c]?p(e.fragmentIdentifier,t):e.fragmentIdentifier}`),`${n}${s}${l}`},r.pick=(e,t,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[c]:!1},n);const{url:o,query:i,fragmentIdentifier:s}=r.parseUrl(e,n);return r.stringifyUrl({url:o,query:a(i,t),fragmentIdentifier:s},n)},r.exclude=(e,t,n)=>{const o=Array.isArray(t)?r=>!t.includes(r):(r,e)=>!t(r,e);return r.pick(e,o,n)}}(e)}}}));
