import{g as Be,a0 as be,Q as _e,C as J,L as Ie,v as Ne,x as Se,M as Te,a4 as Me,m as L,y as _,I as x,z as I,B as j,n as O,s as F,J as vt,A as Pe,j as z,F as Ot,E as Yt,T as lt,U as Re,r as q,k as P,h as ot}from"./vendor-e9263418.js";import{_ as Ue}from"./arrow-br-759c9d16.js";import{h as De,s as ke,r as Le}from"./saveImage-b6480d9e.js";import{h as Fe}from"./article-20e0fb3d.js";import{e as ze,S as He,O as Ve}from"./index-b8742a0a.js";import{f as Je,s as Ke,a as xe}from"./poster-34ef176f.js";import"./plugin-vue_export-helper-46f75680.js";import"./jsbridge-7ca0f033.js";import"./oss-8e49e2fb.js";var Oe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAfCAYAAAD0ma06AAAAAXNSR0IArs4c6QAAAwJJREFUSEvtll9IU1Ecx7+/e2eCqVQElRCkRA/Zg+iDUJCagTk3fdofKgxMkqDETSMhyAW9RLllL1FgGJW6CUHbTaIcuocIg8AexJIKkpJ6CEeoKHrvL7bdLd0f3Qb2EB7uyz3n9/t9zu+c7znnR1invbAbdiyRUM3APgJr1rMPjxNjlkVhLHvmh6/CNrIc6V8rgLvT1ETENwHKSRYUbUfApEDcoLW4XgfGKFEgyW48w6CedEGr/XhRJFQGoHGBg3eqM+Xl3G8AdqqOEwCegXgh2QkwUx4BRgDb1Mwmt/7+WRgX6HGYy8E8rAafmpG3HKy/9GguWVjYTnKcLGCW34WhEOl4DFDqMpSwIpwF43xwZoQxKHiYCMaEwOfnDHFUf7HvQ7Sd2266R8C5UJbcFgE+dxiKFBa6ARSnmklEgUSvlEW5sbZ9YCrc53EYO8BkC/4T24JAt8NUTAwfgOx0YRE/xrS4vFSqvfw0oAHEANlmE6ScifcgHArNAvPEJIF4Ohk4c1DpBQC0AMTQNpBbZ+mviwt02w1lBGFEDT6XsUUoPXGhbzwZ2Eob6baxihUaBCAAzADv1VsHvsdk6LabLQS2q9Lt1lmdjanC/qrS5GPG0cC/wNDXtDqlGGB0h97iupYu0NNpegzCKXVrTustziebQNvmkq4lqE3RBO/S/+4cSg7TdWZcCey9wnx1QzOczvrkypvf/waMkuB1BzRsGJCAIQb2ACgMKpuxIMhK/oYBo48PCdSua+m/8S+AsyB06C3O0Isk2Y2tDLoVyhr3a63OprRfC4fZC+Zj6iN8V1EUb46Q5a2w9PgjZYiny1wJmYfUDj+RWKKz9H5JFSp1mQ+zrPgA0lCgsJLF/Jq23q8xSztsK9fM5e4aZ+BAGMqAi5IsMaCAQFQAsBGgTDXGS73VWRVv0sEiatBhPCIzvCscUk0wYs/gXxoNlWqbnZ8TAsNQhenBikzTgNJbRZDr61oGPiZyXlUIB5Z3dvvuMpKVIqYUSkYmv6jBqLbZORrSXuL2B2zM5JY20aheAAAAAElFTkSuQmCC",it={},Ye=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},$t={},R={};let Pt;const qe=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];R.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};R.getSymbolTotalCodewords=function(t){return qe[t]};R.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};R.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');Pt=t};R.isKanjiModeEnabled=function(){return typeof Pt!="undefined"};R.toSJIS=function(t){return Pt(t)};var ht={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(s){if(typeof s!="string")throw new Error("Param is not a string");switch(s.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+s)}}e.isValid=function(r){return r&&typeof r.bit!="undefined"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}})(ht);function jt(){this.buffer=[],this.length=0}jt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let s=0;s<t;s++)this.putBit((e>>>t-s-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Ge=jt;function at(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}at.prototype.set=function(e,t,s,r){const o=e*this.size+t;this.data[o]=s,r&&(this.reservedBit[o]=!0)};at.prototype.get=function(e,t){return this.data[e*this.size+t]};at.prototype.xor=function(e,t,s){this.data[e*this.size+t]^=s};at.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Qe=at,Zt={};(function(e){const t=R.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,n=t(r),i=n===145?26:Math.ceil((n-13)/(2*o-2))*2,u=[n-7];for(let a=1;a<o-1;a++)u[a]=u[a-1]-i;return u.push(6),u.reverse()},e.getPositions=function(r){const o=[],n=e.getRowColCoords(r),i=n.length;for(let u=0;u<i;u++)for(let a=0;a<i;a++)u===0&&a===0||u===0&&a===i-1||u===i-1&&a===0||o.push([n[u],n[a]]);return o}})(Zt);var Xt={};const $e=R.getSymbolSize,qt=7;Xt.getPositions=function(t){const s=$e(t);return[[0,0],[s-qt,0],[0,s-qt]]};var Wt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const n=o.size;let i=0,u=0,a=0,l=null,c=null;for(let A=0;A<n;A++){u=a=0,l=c=null;for(let p=0;p<n;p++){let d=o.get(A,p);d===l?u++:(u>=5&&(i+=t.N1+(u-5)),l=d,u=1),d=o.get(p,A),d===c?a++:(a>=5&&(i+=t.N1+(a-5)),c=d,a=1)}u>=5&&(i+=t.N1+(u-5)),a>=5&&(i+=t.N1+(a-5))}return i},e.getPenaltyN2=function(o){const n=o.size;let i=0;for(let u=0;u<n-1;u++)for(let a=0;a<n-1;a++){const l=o.get(u,a)+o.get(u,a+1)+o.get(u+1,a)+o.get(u+1,a+1);(l===4||l===0)&&i++}return i*t.N2},e.getPenaltyN3=function(o){const n=o.size;let i=0,u=0,a=0;for(let l=0;l<n;l++){u=a=0;for(let c=0;c<n;c++)u=u<<1&2047|o.get(l,c),c>=10&&(u===1488||u===93)&&i++,a=a<<1&2047|o.get(c,l),c>=10&&(a===1488||a===93)&&i++}return i*t.N3},e.getPenaltyN4=function(o){let n=0;const i=o.data.length;for(let a=0;a<i;a++)n+=o.data[a];return Math.abs(Math.ceil(n*100/i/5)-10)*t.N4};function s(r,o,n){switch(r){case e.Patterns.PATTERN000:return(o+n)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(o+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return o*n%2+o*n%3===0;case e.Patterns.PATTERN110:return(o*n%2+o*n%3)%2===0;case e.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,n){const i=n.size;for(let u=0;u<i;u++)for(let a=0;a<i;a++)n.isReserved(a,u)||n.xor(a,u,s(o,a,u))},e.getBestMask=function(o,n){const i=Object.keys(e.Patterns).length;let u=0,a=1/0;for(let l=0;l<i;l++){n(l),e.applyMask(l,o);const c=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(l,o),c<a&&(a=c,u=l)}return u}})(Wt);var mt={};const Q=ht,ct=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],ft=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];mt.getBlocksCount=function(t,s){switch(s){case Q.L:return ct[(t-1)*4+0];case Q.M:return ct[(t-1)*4+1];case Q.Q:return ct[(t-1)*4+2];case Q.H:return ct[(t-1)*4+3];default:return}};mt.getTotalCodewordsCount=function(t,s){switch(s){case Q.L:return ft[(t-1)*4+0];case Q.M:return ft[(t-1)*4+1];case Q.Q:return ft[(t-1)*4+2];case Q.H:return ft[(t-1)*4+3];default:return}};var te={},pt={};const rt=new Uint8Array(512),dt=new Uint8Array(256);(function(){let t=1;for(let s=0;s<255;s++)rt[s]=t,dt[t]=s,t<<=1,t&256&&(t^=285);for(let s=255;s<512;s++)rt[s]=rt[s-255]})();pt.log=function(t){if(t<1)throw new Error("log("+t+")");return dt[t]};pt.exp=function(t){return rt[t]};pt.mul=function(t,s){return t===0||s===0?0:rt[dt[t]+dt[s]]};(function(e){const t=pt;e.mul=function(r,o){const n=new Uint8Array(r.length+o.length-1);for(let i=0;i<r.length;i++)for(let u=0;u<o.length;u++)n[i+u]^=t.mul(r[i],o[u]);return n},e.mod=function(r,o){let n=new Uint8Array(r);for(;n.length-o.length>=0;){const i=n[0];for(let a=0;a<o.length;a++)n[a]^=t.mul(o[a],i);let u=0;for(;u<n.length&&n[u]===0;)u++;n=n.slice(u)}return n},e.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let n=0;n<r;n++)o=e.mul(o,new Uint8Array([1,t.exp(n)]));return o}})(te);const ee=te;function Rt(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}Rt.prototype.initialize=function(t){this.degree=t,this.genPoly=ee.generateECPolynomial(this.degree)};Rt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const s=new Uint8Array(t.length+this.degree);s.set(t);const r=ee.mod(s,this.genPoly),o=this.degree-r.length;if(o>0){const n=new Uint8Array(this.degree);return n.set(r,o),n}return r};var je=Rt,ne={},$={},Ut={};Ut.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var Y={};const oe="[0-9]+",Ze="[A-Z $%*+\\-./:]+";let st="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";st=st.replace(/u/g,"\\u");const Xe="(?:(?![A-Z0-9 $%*+\\-./:]|"+st+`)(?:.|[\r
]))+`;Y.KANJI=new RegExp(st,"g");Y.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Y.BYTE=new RegExp(Xe,"g");Y.NUMERIC=new RegExp(oe,"g");Y.ALPHANUMERIC=new RegExp(Ze,"g");const We=new RegExp("^"+st+"$"),tn=new RegExp("^"+oe+"$"),en=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Y.testKanji=function(t){return We.test(t)};Y.testNumeric=function(t){return tn.test(t)};Y.testAlphanumeric=function(t){return en.test(t)};(function(e){const t=Ut,s=Y;e.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,i){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(i))throw new Error("Invalid version: "+i);return i>=1&&i<10?n.ccBits[0]:i<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return s.testNumeric(n)?e.NUMERIC:s.testAlphanumeric(n)?e.ALPHANUMERIC:s.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(n,i){if(e.isValid(n))return n;try{return r(n)}catch{return i}}})($);(function(e){const t=R,s=mt,r=ht,o=$,n=Ut,i=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,u=t.getBCHDigit(i);function a(p,d,y){for(let v=1;v<=40;v++)if(d<=e.getCapacity(v,y,p))return v}function l(p,d){return o.getCharCountIndicator(p,d)+4}function c(p,d){let y=0;return p.forEach(function(v){y+=l(v.mode,d)+v.getBitsLength()}),y}function A(p,d){for(let y=1;y<=40;y++)if(c(p,y)<=e.getCapacity(y,d,o.MIXED))return y}e.from=function(d,y){return n.isValid(d)?parseInt(d,10):y},e.getCapacity=function(d,y,v){if(!n.isValid(d))throw new Error("Invalid QR Code version");typeof v=="undefined"&&(v=o.BYTE);const T=t.getSymbolTotalCodewords(d),m=s.getTotalCodewordsCount(d,y),C=(T-m)*8;if(v===o.MIXED)return C;const g=C-l(v,d);switch(v){case o.NUMERIC:return Math.floor(g/10*3);case o.ALPHANUMERIC:return Math.floor(g/11*2);case o.KANJI:return Math.floor(g/13);case o.BYTE:default:return Math.floor(g/8)}},e.getBestVersionForData=function(d,y){let v;const T=r.from(y,r.M);if(Array.isArray(d)){if(d.length>1)return A(d,T);if(d.length===0)return 1;v=d[0]}else v=d;return a(v.mode,v.getLength(),T)},e.getEncodedBits=function(d){if(!n.isValid(d)||d<7)throw new Error("Invalid QR Code version");let y=d<<12;for(;t.getBCHDigit(y)-u>=0;)y^=i<<t.getBCHDigit(y)-u;return d<<12|y}})(ne);var re={};const Nt=R,se=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,nn=1<<14|1<<12|1<<10|1<<4|1<<1,Gt=Nt.getBCHDigit(se);re.getEncodedBits=function(t,s){const r=t.bit<<3|s;let o=r<<10;for(;Nt.getBCHDigit(o)-Gt>=0;)o^=se<<Nt.getBCHDigit(o)-Gt;return(r<<10|o)^nn};var ie={};const on=$;function Z(e){this.mode=on.NUMERIC,this.data=e.toString()}Z.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};Z.prototype.getLength=function(){return this.data.length};Z.prototype.getBitsLength=function(){return Z.getBitsLength(this.data.length)};Z.prototype.write=function(t){let s,r,o;for(s=0;s+3<=this.data.length;s+=3)r=this.data.substr(s,3),o=parseInt(r,10),t.put(o,10);const n=this.data.length-s;n>0&&(r=this.data.substr(s),o=parseInt(r,10),t.put(o,n*3+1))};var rn=Z;const sn=$,At=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function X(e){this.mode=sn.ALPHANUMERIC,this.data=e}X.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};X.prototype.getLength=function(){return this.data.length};X.prototype.getBitsLength=function(){return X.getBitsLength(this.data.length)};X.prototype.write=function(t){let s;for(s=0;s+2<=this.data.length;s+=2){let r=At.indexOf(this.data[s])*45;r+=At.indexOf(this.data[s+1]),t.put(r,11)}this.data.length%2&&t.put(At.indexOf(this.data[s]),6)};var an=X,un=function(t){for(var s=[],r=t.length,o=0;o<r;o++){var n=t.charCodeAt(o);if(n>=55296&&n<=56319&&r>o+1){var i=t.charCodeAt(o+1);i>=56320&&i<=57343&&(n=(n-55296)*1024+i-56320+65536,o+=1)}if(n<128){s.push(n);continue}if(n<2048){s.push(n>>6|192),s.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){s.push(n>>12|224),s.push(n>>6&63|128),s.push(n&63|128);continue}if(n>=65536&&n<=1114111){s.push(n>>18|240),s.push(n>>12&63|128),s.push(n>>6&63|128),s.push(n&63|128);continue}s.push(239,191,189)}return new Uint8Array(s).buffer};const ln=un,cn=$;function W(e){this.mode=cn.BYTE,this.data=new Uint8Array(ln(e))}W.getBitsLength=function(t){return t*8};W.prototype.getLength=function(){return this.data.length};W.prototype.getBitsLength=function(){return W.getBitsLength(this.data.length)};W.prototype.write=function(e){for(let t=0,s=this.data.length;t<s;t++)e.put(this.data[t],8)};var fn=W;const dn=$,gn=R;function tt(e){this.mode=dn.KANJI,this.data=e}tt.getBitsLength=function(t){return t*13};tt.prototype.getLength=function(){return this.data.length};tt.prototype.getBitsLength=function(){return tt.getBitsLength(this.data.length)};tt.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let s=gn.toSJIS(this.data[t]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),e.put(s,13)}};var hn=tt,ae={exports:{}};(function(e){var t={single_source_shortest_paths:function(s,r,o){var n={},i={};i[r]=0;var u=t.PriorityQueue.make();u.push(r,0);for(var a,l,c,A,p,d,y,v,T;!u.empty();){a=u.pop(),l=a.value,A=a.cost,p=s[l]||{};for(c in p)p.hasOwnProperty(c)&&(d=p[c],y=A+d,v=i[c],T=typeof i[c]=="undefined",(T||v>y)&&(i[c]=y,u.push(c,y),n[c]=l))}if(typeof o!="undefined"&&typeof i[o]=="undefined"){var m=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(m)}return n},extract_shortest_path_from_predecessor_list:function(s,r){for(var o=[],n=r;n;)o.push(n),n=s[n];return o.reverse(),o},find_path:function(s,r,o){var n=t.single_source_shortest_paths(s,r,o);return t.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(s){var r=t.PriorityQueue,o={},n;s=s||{};for(n in r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=s.sorter||r.default_sorter,o},default_sorter:function(s,r){return s.cost-r.cost},push:function(s,r){var o={value:s,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(ae);(function(e){const t=$,s=rn,r=an,o=fn,n=hn,i=Y,u=R,a=ae.exports;function l(m){return unescape(encodeURIComponent(m)).length}function c(m,C,g){const h=[];let B;for(;(B=m.exec(g))!==null;)h.push({data:B[0],index:B.index,mode:C,length:B[0].length});return h}function A(m){const C=c(i.NUMERIC,t.NUMERIC,m),g=c(i.ALPHANUMERIC,t.ALPHANUMERIC,m);let h,B;return u.isKanjiModeEnabled()?(h=c(i.BYTE,t.BYTE,m),B=c(i.KANJI,t.KANJI,m)):(h=c(i.BYTE_KANJI,t.BYTE,m),B=[]),C.concat(g,h,B).sort(function(w,S){return w.index-S.index}).map(function(w){return{data:w.data,mode:w.mode,length:w.length}})}function p(m,C){switch(C){case t.NUMERIC:return s.getBitsLength(m);case t.ALPHANUMERIC:return r.getBitsLength(m);case t.KANJI:return n.getBitsLength(m);case t.BYTE:return o.getBitsLength(m)}}function d(m){return m.reduce(function(C,g){const h=C.length-1>=0?C[C.length-1]:null;return h&&h.mode===g.mode?(C[C.length-1].data+=g.data,C):(C.push(g),C)},[])}function y(m){const C=[];for(let g=0;g<m.length;g++){const h=m[g];switch(h.mode){case t.NUMERIC:C.push([h,{data:h.data,mode:t.ALPHANUMERIC,length:h.length},{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.ALPHANUMERIC:C.push([h,{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.KANJI:C.push([h,{data:h.data,mode:t.BYTE,length:l(h.data)}]);break;case t.BYTE:C.push([{data:h.data,mode:t.BYTE,length:l(h.data)}])}}return C}function v(m,C){const g={},h={start:{}};let B=["start"];for(let b=0;b<m.length;b++){const w=m[b],S=[];for(let N=0;N<w.length;N++){const M=w[N],U=""+b+N;S.push(U),g[U]={node:M,lastCount:0},h[U]={};for(let et=0;et<B.length;et++){const H=B[et];g[H]&&g[H].node.mode===M.mode?(h[H][U]=p(g[H].lastCount+M.length,M.mode)-p(g[H].lastCount,M.mode),g[H].lastCount+=M.length):(g[H]&&(g[H].lastCount=M.length),h[H][U]=p(M.length,M.mode)+4+t.getCharCountIndicator(M.mode,C))}}B=S}for(let b=0;b<B.length;b++)h[B[b]].end=0;return{map:h,table:g}}function T(m,C){let g;const h=t.getBestModeForData(m);if(g=t.from(C,h),g!==t.BYTE&&g.bit<h.bit)throw new Error('"'+m+'" cannot be encoded with mode '+t.toString(g)+`.
 Suggested mode is: `+t.toString(h));switch(g===t.KANJI&&!u.isKanjiModeEnabled()&&(g=t.BYTE),g){case t.NUMERIC:return new s(m);case t.ALPHANUMERIC:return new r(m);case t.KANJI:return new n(m);case t.BYTE:return new o(m)}}e.fromArray=function(C){return C.reduce(function(g,h){return typeof h=="string"?g.push(T(h,null)):h.data&&g.push(T(h.data,h.mode)),g},[])},e.fromString=function(C,g){const h=A(C,u.isKanjiModeEnabled()),B=y(h),b=v(B,g),w=a.find_path(b.map,"start","end"),S=[];for(let N=1;N<w.length-1;N++)S.push(b.table[w[N]].node);return e.fromArray(d(S))},e.rawSplit=function(C){return e.fromArray(A(C,u.isKanjiModeEnabled()))}})(ie);const Ct=R,Bt=ht,mn=Ge,pn=Qe,Cn=Zt,wn=Xt,St=Wt,Tt=mt,yn=je,gt=ne,En=re,vn=$,bt=ie;function An(e,t){const s=e.size,r=wn.getPositions(t);for(let o=0;o<r.length;o++){const n=r[o][0],i=r[o][1];for(let u=-1;u<=7;u++)if(!(n+u<=-1||s<=n+u))for(let a=-1;a<=7;a++)i+a<=-1||s<=i+a||(u>=0&&u<=6&&(a===0||a===6)||a>=0&&a<=6&&(u===0||u===6)||u>=2&&u<=4&&a>=2&&a<=4?e.set(n+u,i+a,!0,!0):e.set(n+u,i+a,!1,!0))}}function Bn(e){const t=e.size;for(let s=8;s<t-8;s++){const r=s%2===0;e.set(s,6,r,!0),e.set(6,s,r,!0)}}function bn(e,t){const s=Cn.getPositions(t);for(let r=0;r<s.length;r++){const o=s[r][0],n=s[r][1];for(let i=-2;i<=2;i++)for(let u=-2;u<=2;u++)i===-2||i===2||u===-2||u===2||i===0&&u===0?e.set(o+i,n+u,!0,!0):e.set(o+i,n+u,!1,!0)}}function _n(e,t){const s=e.size,r=gt.getEncodedBits(t);let o,n,i;for(let u=0;u<18;u++)o=Math.floor(u/3),n=u%3+s-8-3,i=(r>>u&1)===1,e.set(o,n,i,!0),e.set(n,o,i,!0)}function _t(e,t,s){const r=e.size,o=En.getEncodedBits(t,s);let n,i;for(n=0;n<15;n++)i=(o>>n&1)===1,n<6?e.set(n,8,i,!0):n<8?e.set(n+1,8,i,!0):e.set(r-15+n,8,i,!0),n<8?e.set(8,r-n-1,i,!0):n<9?e.set(8,15-n-1+1,i,!0):e.set(8,15-n-1,i,!0);e.set(r-8,8,1,!0)}function In(e,t){const s=e.size;let r=-1,o=s-1,n=7,i=0;for(let u=s-1;u>0;u-=2)for(u===6&&u--;;){for(let a=0;a<2;a++)if(!e.isReserved(o,u-a)){let l=!1;i<t.length&&(l=(t[i]>>>n&1)===1),e.set(o,u-a,l),n--,n===-1&&(i++,n=7)}if(o+=r,o<0||s<=o){o-=r,r=-r;break}}}function Nn(e,t,s){const r=new mn;s.forEach(function(a){r.put(a.mode.bit,4),r.put(a.getLength(),vn.getCharCountIndicator(a.mode,e)),a.write(r)});const o=Ct.getSymbolTotalCodewords(e),n=Tt.getTotalCodewordsCount(e,t),i=(o-n)*8;for(r.getLengthInBits()+4<=i&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const u=(i-r.getLengthInBits())/8;for(let a=0;a<u;a++)r.put(a%2?17:236,8);return Sn(r,e,t)}function Sn(e,t,s){const r=Ct.getSymbolTotalCodewords(t),o=Tt.getTotalCodewordsCount(t,s),n=r-o,i=Tt.getBlocksCount(t,s),u=r%i,a=i-u,l=Math.floor(r/i),c=Math.floor(n/i),A=c+1,p=l-c,d=new yn(p);let y=0;const v=new Array(i),T=new Array(i);let m=0;const C=new Uint8Array(e.buffer);for(let w=0;w<i;w++){const S=w<a?c:A;v[w]=C.slice(y,y+S),T[w]=d.encode(v[w]),y+=S,m=Math.max(m,S)}const g=new Uint8Array(r);let h=0,B,b;for(B=0;B<m;B++)for(b=0;b<i;b++)B<v[b].length&&(g[h++]=v[b][B]);for(B=0;B<p;B++)for(b=0;b<i;b++)g[h++]=T[b][B];return g}function Tn(e,t,s,r){let o;if(Array.isArray(e))o=bt.fromArray(e);else if(typeof e=="string"){let l=t;if(!l){const c=bt.rawSplit(e);l=gt.getBestVersionForData(c,s)}o=bt.fromString(e,l||40)}else throw new Error("Invalid data");const n=gt.getBestVersionForData(o,s);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const i=Nn(t,s,o),u=Ct.getSymbolSize(t),a=new pn(u);return An(a,t),Bn(a),bn(a,t),_t(a,s,0),t>=7&&_n(a,t),In(a,i),isNaN(r)&&(r=St.getBestMask(a,_t.bind(null,a,s))),St.applyMask(r,a),_t(a,s,r),{modules:a,version:t,errorCorrectionLevel:s,maskPattern:r,segments:o}}$t.create=function(t,s){if(typeof t=="undefined"||t==="")throw new Error("No input text");let r=Bt.M,o,n;return typeof s!="undefined"&&(r=Bt.from(s.errorCorrectionLevel,Bt.M),o=gt.from(s.version),n=St.from(s.maskPattern),s.toSJISFunc&&Ct.setToSJISFunction(s.toSJISFunc)),Tn(t,o,r,n)};var ue={},Dt={};(function(e){function t(s){if(typeof s=="number"&&(s=s.toString()),typeof s!="string")throw new Error("Color should be defined as hex string");let r=s.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+s);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(n){return[n,n]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin=="undefined"||r.margin===null||r.margin<0?4:r.margin,n=r.width&&r.width>=21?r.width:void 0,i=r.scale||4;return{width:n,scale:n?4:i,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){const n=e.getScale(r,o);return Math.floor((r+o.margin*2)*n)},e.qrToImageData=function(r,o,n){const i=o.modules.size,u=o.modules.data,a=e.getScale(i,n),l=Math.floor((i+n.margin*2)*a),c=n.margin*a,A=[n.color.light,n.color.dark];for(let p=0;p<l;p++)for(let d=0;d<l;d++){let y=(p*l+d)*4,v=n.color.light;if(p>=c&&d>=c&&p<l-c&&d<l-c){const T=Math.floor((p-c)/a),m=Math.floor((d-c)/a);v=A[u[T*i+m]?1:0]}r[y++]=v.r,r[y++]=v.g,r[y++]=v.b,r[y]=v.a}}})(Dt);(function(e){const t=Dt;function s(o,n,i){o.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=i,n.width=i,n.style.height=i+"px",n.style.width=i+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,i,u){let a=u,l=i;typeof a=="undefined"&&(!i||!i.getContext)&&(a=i,i=void 0),i||(l=r()),a=t.getOptions(a);const c=t.getImageWidth(n.modules.size,a),A=l.getContext("2d"),p=A.createImageData(c,c);return t.qrToImageData(p.data,n,a),s(A,l,c),A.putImageData(p,0,0),l},e.renderToDataURL=function(n,i,u){let a=u;typeof a=="undefined"&&(!i||!i.getContext)&&(a=i,i=void 0),a||(a={});const l=e.render(n,i,a),c=a.type||"image/png",A=a.rendererOpts||{};return l.toDataURL(c,A.quality)}})(ue);var le={};const Mn=Dt;function Qt(e,t){const s=e.a/255,r=t+'="'+e.hex+'"';return s<1?r+" "+t+'-opacity="'+s.toFixed(2).slice(1)+'"':r}function It(e,t,s){let r=e+t;return typeof s!="undefined"&&(r+=" "+s),r}function Pn(e,t,s){let r="",o=0,n=!1,i=0;for(let u=0;u<e.length;u++){const a=Math.floor(u%t),l=Math.floor(u/t);!a&&!n&&(n=!0),e[u]?(i++,u>0&&a>0&&e[u-1]||(r+=n?It("M",a+s,.5+l+s):It("m",o,0),o=0,n=!1),a+1<t&&e[u+1]||(r+=It("h",i),i=0)):o++}return r}le.render=function(t,s,r){const o=Mn.getOptions(s),n=t.modules.size,i=t.modules.data,u=n+o.margin*2,a=o.color.light.a?"<path "+Qt(o.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",l="<path "+Qt(o.color.dark,"stroke")+' d="'+Pn(i,n,o.margin)+'"/>',c='viewBox="0 0 '+u+" "+u+'"',A=o.width?'width="'+o.width+'" height="'+o.width+'" ':"",p='<svg xmlns="http://www.w3.org/2000/svg" '+A+c+' shape-rendering="crispEdges">'+a+l+`</svg>
`;return typeof r=="function"&&r(null,p),p};const Rn=Ye,Mt=$t,ce=ue,Un=le;function kt(e,t,s,r,o){const n=[].slice.call(arguments,1),i=n.length,u=typeof n[i-1]=="function";if(!u&&!Rn())throw new Error("Callback required as last argument");if(u){if(i<2)throw new Error("Too few arguments provided");i===2?(o=s,s=t,t=r=void 0):i===3&&(t.getContext&&typeof o=="undefined"?(o=r,r=void 0):(o=r,r=s,s=t,t=void 0))}else{if(i<1)throw new Error("Too few arguments provided");return i===1?(s=t,t=r=void 0):i===2&&!t.getContext&&(r=s,s=t,t=void 0),new Promise(function(a,l){try{const c=Mt.create(s,r);a(e(c,t,r))}catch(c){l(c)}})}try{const a=Mt.create(s,r);o(null,e(a,t,r))}catch(a){o(a)}}it.create=Mt.create;it.toCanvas=kt.bind(null,ce.render);it.toDataURL=kt.bind(null,ce.renderToDataURL);it.toString=kt.bind(null,function(e,t,s){return Un.render(e,s)});const Dn={class:"post-detail"},kn={class:"detail-container"},Ln={class:"container"},Fn={class:"num"},zn=["src"],Hn={class:"cm"},Vn={class:"name"},Jn=_("span",{class:"line"},"/",-1),Kn={class:"st-font"},xn={class:"st-font1"},On={class:"spt"},Yn=["src"],qn={class:"bottom"},Gn={key:1},Qn={key:0,src:Ue,class:"bottom-arr-rigth"},$n={key:0,class:"bottom-textarea"},jn={id:"summaryContent"},Zn=j(" \u5C55\u5F00 "),Xn=j(" \u6536\u8D77 "),Wn={class:"post-img-prw"},to={class:"post-im"},eo=["src"],no=_("div",{class:"post-text"},"\u957F\u6309\u4FDD\u5B58\u56FE\u7247",-1),oo={class:"footer"},ro=j(" \u4FDD\u5B58\u6D77\u62A5 "),mo=Be({setup(e){const t="/client",s=ze(),r=new He({source:"localStorage"}),o=be(),n=_e(),i=J(0),u=J(!1),a=J(!0),l=J(!1),c=J(""),A=J([]),p=J(""),d=J(""),y=J({});p.value=`${Ve}/shareCard?isInnerEntry=N&flag=N`;const v=J(!1),T=Ie({useInfo:{},qrCode:"",posterData:{},postArr:[],current:0,productInfo:{name:"",url:"",code:""}}),{productName:m,productUrl:C,productCode:g,qrCodeType:h}=n.query,{useInfo:B,qrCode:b,posterData:w,postArr:S,current:N,productInfo:M}=Ne(T),U=f=>{it.toDataURL(f).then(E=>{b.value=E}).catch(E=>{console.error(E)})},et=Se(()=>t.indexOf("?")>-1?w.value.posterUrl:`${w.value.posterUrl}?time=1`),H=async()=>{const{data:f}=await Je({});B.value=f.data||{}},ut=f=>{if(f){const E=r.get("userInfo")||{};U(f.replace(/{{agentCode}}/g,E.userId).replace(/{{agentCode}}/g,""))}},wt=f=>{switch(A.value=[],f.qrCodeType){case"01":A.value=[{label:"\u4EA7\u54C1\u4E8C\u7EF4\u7801",value:0},{label:"\u540D\u7247\u4E8C\u7EF4\u7801",value:1}],i.value=4;break;case"02":A.value=[{label:"\u540D\u7247\u4E8C\u7EF4\u7801",value:1}],i.value=1,console.log(11,d.value),U(d.value);break;case"03":A.value=[{label:"\u4EA7\u54C1\u4E8C\u7EF4\u7801",value:0}],i.value=0,ut(f.productUrl),M.value={name:f.productName,url:f.productUrl,code:f.productCode};break;case"04":A.value=[{label:"\u5176\u4ED6\u4E8C\u7EF4\u7801",value:2}],i.value=2,f.extendUrl&&f.extendUrl.indexOf("?")>-1?U(`${f.extendUrl}&agentCode=${y.value.userId}`):f.extendUrl&&f.extendUrl.indexOf("?")===-1&&U(`${f.extendUrl}?agentCode=${y.value.userId}`),i.value=2;break;default:i.value=4;break}},fe=async()=>{var f,E;if(n.query.isAppHomePage==="Y"){const D=await Ke({pageNum:1,pageSize:12,queryBean:{posterCategory:"01"}});S.value=((E=(f=D==null?void 0:D.data)==null?void 0:f.data)==null?void 0:E.list)||[],N.value=0,w.value=S.value[Number(N.value)]}else S.value=JSON.parse(sessionStorage.getItem("p_list")||"")||[],N.value=Number(sessionStorage.getItem("p_index")),w.value=S.value[Number(N.value)];wt(w.value)};Te(async()=>{const f=await Fe({pageUrl:p.value}),{data:E}=f.data;d.value=E,fe(),H(),h==="01"&&(i.value=0,M.value={name:m,url:C,code:g},ut(C))});const Lt=()=>{u.value=!u.value},de=f=>{if(w.value.qrCodeType==="01"){if(i.value===f){i.value="-1",b.value="";return}i.value=f,f===0?ut(C):f===1&&U(d.value)}else i.value=f,f===0?ut(C):f===1&&U(d.value)},ge=()=>{w.value.qrCodeType==="01"&&o.push({name:"productList",query:{qrCodeType:"01",productCode:g,productName:m,productUrl:C}})},Ft=f=>{const E=document.createElement("input");document.body.appendChild(E),E.setAttribute("value",f),E.select(),document.execCommand("copy")&&(document.execCommand("copy"),lt("\u6587\u6848\u5185\u5BB9\u5DF2\u590D\u5236")),document.body.removeChild(E)},zt=()=>{N.value===S.value.length-1?lt("\u6CA1\u6709\u4E86"):(M.value={name:"",url:"",code:""},b.value="",N.value+=1,w.value=S.value[N.value],wt(w.value),sessionStorage.setItem("p_index",JSON.stringify(N.value)))},Ht=()=>{N.value===0?lt("\u6CA1\u6709\u4E86"):(M.value={name:"",url:"",code:""},b.value="",N.value-=1,w.value=S.value[N.value],wt(w.value),sessionStorage.setItem("p_index",JSON.stringify(N.value)))},K={touching:!1,trace:[]},he=f=>{const E=f[0],D=f[f.length-1];D.x-E.x>50&&Math.abs(D.y-E.y)<20?Ht():E.x-D.x>50&&zt()},me=f=>{if(f.touches.length!==1){K.touching=!1,K.trace=[];return}K.touching=!0,K.trace=[{x:f.touches[0].screenX,y:f.touches[0].screenY}]},pe=f=>{!K.touching||K.trace.push({x:f.touches[0].screenX,y:f.touches[0].screenY})},Ce=()=>{if(!K.touching)return;const{trace:f}=K;K.touching=!1,K.trace=[],he(f)},yt=J(!1),Vt=f=>{if(f==="save"){if(!yt.value){yt.value=!0,s&&lt.loading("\u4E0B\u8F7D\u4E2D");const E=document.getElementById("img");De(E,{useCORS:!0,dpi:400}).then(D=>{const Et=D.toDataURL("image/png",.8);ke(Et),xe({posterId:w.value.id}),yt.value=!1})}}else Le(w.value.posterUrl)};return Me(w,()=>{Re(()=>{const f=document.querySelector("#summaryContent");f&&f.parentElement?(console.log("summaryContent.scrollHeight",f.scrollHeight),console.log("summaryContent.parentElement.clientHeight",f.parentElement.clientHeight),v.value=f.scrollHeight>f.parentElement.clientHeight):v.value=!1})}),(f,E)=>{var Kt,xt;const D=q("ZaSvg"),Et=q("van-switch"),nt=q("van-cell"),we=q("van-col"),ye=q("van-row"),Ee=q("van-cell-group"),Jt=q("van-icon"),ve=q("van-overlay"),Ae=q("van-button");return P(),L("div",Dn,[_("div",kn,[_("div",Ln,[_("p",Fn,[_("span",null,x(I(N)+1),1),j("/"+x(I(S).length),1)]),I(N)>0?(P(),L("span",{key:0,class:"prev",onClick:Ht},[O(D,{name:"left_arrow",class:"arrow-white"})])):F("",!0),_("div",{id:"img",class:"post",onClick:E[3]||(E[3]=k=>Vt("review"))},[_("img",{src:I(et),alt:"",class:"post-img",crossOrigin:"anonymous",onTouchmove:E[0]||(E[0]=k=>pe(k)),onTouchstart:E[1]||(E[1]=k=>me(k)),onTouchend:E[2]||(E[2]=k=>Ce())},null,40,zn),_("div",Hn,[_("div",{class:vt(["card",{"card-none":!a.value}])},[_("div",{style:Pe({visibility:a.value?"visible":"hidden"})},[_("p",null,[_("span",Vn,x(I(B).name),1),Jn,_("span",Kn,x(I(B).mobile),1)]),_("p",xn,x(I(B).agentCertNo),1),_("p",On,x(I(B).agencyName),1)],4),_("div",null,[I(b)?(P(),L("img",{key:0,src:I(b),alt:"",class:"img"},null,8,Yn)):F("",!0)])],2)])]),I(N)<I(S).length-1?(P(),L("span",{key:1,class:"next",onClick:zt},[O(D,{name:"right_arrow",class:"arrow-white"})])):F("",!0)]),_("div",qn,[O(Ee,{class:"bottom-cell-group"},{default:z(()=>{var k;return[O(nt,{title:"\u5206\u4EAB\u5C55\u793A\u8054\u7CFB\u65B9\u5F0F",value:"\u5185\u5BB9","title-class":"label"},{value:z(()=>{var V;return[O(Et,{modelValue:a.value,"onUpdate:modelValue":E[4]||(E[4]=G=>a.value=G),disabled:((V=I(w))==null?void 0:V.internetQualification)==="Y","active-color":"$primary-color",size:"24px"},null,8,["modelValue","disabled"])]}),_:1}),I(A).length?(P(),ot(nt,{key:0,title:"\u5206\u4EAB\u4E8C\u7EF4\u7801",value:"\u5185\u5BB9","title-class":"label"},{value:z(()=>[O(ye,{class:"select-btn",justify:"end"},{default:z(()=>[(P(!0),L(Ot,null,Yt(I(A),V=>(P(),ot(we,{key:V.value,class:vt(["btn",{checked:i.value===V.value}]),onClick:G=>de(V.value)},{default:z(()=>[j(x(V.label),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})):F("",!0),I(A).length?(P(),L("div",Gn,[i.value==0?(P(),ot(nt,{key:0,title:"\u4EA7\u54C1\u540D\u79F0","title-class":"label","value-class":"bottom-value",onClick:ge},{value:z(()=>[j(x(I(M).name?I(M).name:"\u9009\u62E9"),1)]),"right-icon":z(()=>[I(w).qrCodeType!=="03"?(P(),L("img",Qn)):F("",!0)]),_:1})):F("",!0)])):F("",!0),i.value===2?(P(),ot(nt,{key:2,title:"\u5176\u4ED6","title-class":"label","value-class":"bottom-value"},{value:z(()=>[j(x(I(w).extendName),1)]),_:1})):F("",!0),((k=I(w))==null?void 0:k.summary)?(P(),ot(nt,{key:3,title:"\u5206\u4EAB\u6458\u8981",value:"\u5185\u5BB9","title-class":"label","value-class":"bottom-value"},{value:z(()=>[_("span",{onClick:E[5]||(E[5]=V=>{var G;return Ft((G=I(w))==null?void 0:G.summary)})},"\u590D\u5236\u6587\u6848")]),"right-icon":z(()=>[_("img",{src:Oe,class:"bottom-arr",onClick:E[6]||(E[6]=V=>{var G;return Ft((G=I(w))==null?void 0:G.summary)})})]),_:1})):F("",!0)]}),_:1}),((Kt=I(w))==null?void 0:Kt.summary)?(P(),L("div",$n,[_("div",{class:vt([u.value?"exp":"hep"])},[_("div",jn,[(P(!0),L(Ot,null,Yt((xt=I(w))==null?void 0:xt.summary.split(`
`),(k,V)=>(P(),L("p",{key:V},x(k),1))),128))]),!u.value&&v.value?(P(),L("span",{key:0,onClick:Lt},[Zn,O(Jt,{name:"arrow-down",color:"#999999",size:"16"})])):F("",!0),u.value?(P(),L("span",{key:1,onClick:Lt},[Xn,O(Jt,{name:"arrow-up",color:"#999999",size:"16"})])):F("",!0)],2)])):F("",!0)])]),O(ve,{show:l.value,onClick:E[7]||(E[7]=k=>l.value=!1)},{default:z(()=>[_("div",Wn,[_("div",null,[_("div",to,[_("img",{src:c.value,style:{width:"100%"}},null,8,eo)]),no])])]),_:1},8,["show"]),_("div",oo,[O(Ae,{type:"primary",class:"btn",onClick:E[8]||(E[8]=k=>Vt("save"))},{default:z(()=>[ro]),_:1})])])}}});export{mo as default};
