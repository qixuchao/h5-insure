import{a9 as e,aa as r,ab as t}from"./index-e3df8bbc.js";var i=e,a=Object.prototype.hasOwnProperty,o=Array.isArray,n={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:i.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(e){return e.replace(/&#(\d+);/g,(function(e,r){return String.fromCharCode(parseInt(r,10))}))},s=function(e,r){return e&&"string"==typeof e&&r.comma&&e.indexOf(",")>-1?e.split(","):e},c=function(e,r,t,i){if(e){var o=t.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/g,l=t.depth>0&&/(\[[^[\]]*])/.exec(o),c=l?o.slice(0,l.index):o,p=[];if(c){if(!t.plainObjects&&a.call(Object.prototype,c)&&!t.allowPrototypes)return;p.push(c)}for(var d=0;t.depth>0&&null!==(l=n.exec(o))&&d<t.depth;){if(d+=1,!t.plainObjects&&a.call(Object.prototype,l[1].slice(1,-1))&&!t.allowPrototypes)return;p.push(l[1])}return l&&p.push("["+o.slice(l.index)+"]"),function(e,r,t,i){for(var a=i?r:s(r,t),o=e.length-1;o>=0;--o){var n,l=e[o];if("[]"===l&&t.parseArrays)n=[].concat(a);else{n=t.plainObjects?Object.create(null):{};var c="["===l.charAt(0)&&"]"===l.charAt(l.length-1)?l.slice(1,-1):l,p=parseInt(c,10);t.parseArrays||""!==c?!isNaN(p)&&l!==c&&String(p)===c&&p>=0&&t.parseArrays&&p<=t.arrayLimit?(n=[])[p]=a:"__proto__"!==c&&(n[c]=a):n={0:a}}a=n}return a}(p,r,t,i)}},p={formats:t,parse:function(e,r){var t=function(e){if(!e)return n;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=void 0===e.charset?n.charset:e.charset;return{allowDots:void 0===e.allowDots?n.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:n.allowPrototypes,allowSparse:"boolean"==typeof e.allowSparse?e.allowSparse:n.allowSparse,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:n.arrayLimit,charset:r,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:n.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:n.comma,decoder:"function"==typeof e.decoder?e.decoder:n.decoder,delimiter:"string"==typeof e.delimiter||i.isRegExp(e.delimiter)?e.delimiter:n.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:n.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:n.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:n.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:n.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:n.strictNullHandling}}(r);if(""===e||null==e)return t.plainObjects?Object.create(null):{};for(var p="string"==typeof e?function(e,r){var t,c={},p=r.ignoreQueryPrefix?e.replace(/^\?/,""):e,d=r.parameterLimit===1/0?void 0:r.parameterLimit,f=p.split(r.delimiter,d),u=-1,m=r.charset;if(r.charsetSentinel)for(t=0;t<f.length;++t)0===f[t].indexOf("utf8=")&&("utf8=%E2%9C%93"===f[t]?m="utf-8":"utf8=%26%2310003%3B"===f[t]&&(m="iso-8859-1"),u=t,t=f.length);for(t=0;t<f.length;++t)if(t!==u){var y,h,b=f[t],g=b.indexOf("]="),w=-1===g?b.indexOf("="):g+1;-1===w?(y=r.decoder(b,n.decoder,m,"key"),h=r.strictNullHandling?null:""):(y=r.decoder(b.slice(0,w),n.decoder,m,"key"),h=i.maybeMap(s(b.slice(w+1),r),(function(e){return r.decoder(e,n.decoder,m,"value")}))),h&&r.interpretNumericEntities&&"iso-8859-1"===m&&(h=l(h)),b.indexOf("[]=")>-1&&(h=o(h)?[h]:h),a.call(c,y)?c[y]=i.combine(c[y],h):c[y]=h}return c}(e,t):e,d=t.plainObjects?Object.create(null):{},f=Object.keys(p),u=0;u<f.length;++u){var m=f[u],y=c(m,p[m],t,"string"==typeof e);d=i.merge(d,y,t)}return!0===t.allowSparse?d:i.compact(d)},stringify:r};export{p as l};
