var Je=Object.defineProperty,Ze=Object.defineProperties;var $e=Object.getOwnPropertyDescriptors;var Ne=Object.getOwnPropertySymbols;var et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var Se=(e,t,u)=>t in e?Je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,K=(e,t)=>{for(var u in t||(t={}))et.call(t,u)&&Se(e,u,t[u]);if(Ne)for(var u of Ne(t))tt.call(t,u)&&Se(e,u,t[u]);return e},J=(e,t)=>Ze(e,$e(t));import{l as st,g as Ue,r as k,h as c,m as h,n as w,k as p,y as s,I as r,z as q,ah as at,Q as ot,af as nt,C as b,X as Me,M as ut,j as O,s as N,d as it,E as U,F as W,B as v,a1 as lt,a2 as ct,w as Z,T as L}from"./vendor-b27da062.js";import{a as rt,b as dt,g as vt}from"./proposalList-f3643a8a.js";import{_ as At,S as ht,y as Ve,z as Ke,A as pt,O as gt}from"./index-1d6c7814.js";import{P as ft}from"./index-90a02423.js";import{_ as bt}from"./index-760b30ce.js";var mt="/static/assets/male.099176e3.png",_t="/static/assets/female.d4f701ab.png",Pt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAsCAMAAACjdTNyAAAAM1BMVEUAAAAHe/8JfP8HfP8ghf8IfP8Jfv8SgP8Lff8Iev8Kf/8Nf/8Ie/8KfP8Mff8Iff8Ke/9WxKgsAAAAEXRSTlMATTpGCEIdDS0kGBI+NCogMWRIF20AAADeSURBVDjL3ZOxDgMhDENdCOGAg+P/v7aI4oalQ3VT+6YoAaPYAkB2PtQII9bgXcagPSYKoq9GA/JjEXmLjQzHsq1ZY8PBWzmxwx6BZV2zykZAZ5nWLLHRIe9ThEoC5PniGW29c742FxQ9mmJH26GCf0HHrq7AKG54MTfutJMk2gn9mK1aXMeaHbezNYlrzS57RJboCXIuSQHKVHWWl7ip+No4p1SwU1LK+DFEPjWSH5vu++QwXEmb7w2kMRezttAUM/92tn3N+hfZmqSJeuE3rVu2dfvI5dKInahXAfAESeEGZRES0sEAAAAASUVORK5CYII=",H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAtCAMAAADBXShDAAACJVBMVEUAAADr+P/g///////V///d7v/y+//i8v/L6f/K4//c7f/s9//H5P/0+v/u9v/L4/+42v/w9//e7v/0+v/L4/+72//K4/+93P/1+f/p8//b7P/v9/+/3f/S6f/2+//d7f/Q5//0/P/h8f/G4/+/4//k8v/R6P/k9v////++3f+72v/i8f/1+v/b7f/Q5//g7//P5v+32f/y+f/i8P+42v+32//w+P/d7f/A3v/J5P+93f+73f+63v/I4v/v9//i8f/b7f/P5f+42v/1+v/t9//k8P/d7f/1+//b7f/e7//b7P/g7v+32f/w9//2+v/f7v/O5P+52v+93f+72//u9v/j8P/Q5v/M5f/k8P/s9v/l8v/2+//w+P/b7f/R5v/e7v/P5v+52v/w9//P5v+32f/w9//h8f/k8f/g8f/I4f/M4/+62//M5P/p9P/S5/+12P/P5/+52f/3/P/k8f/b7P/q9P/L4/+93P/W7P/p9P+12v/V5//N6f/I5//2+//1+v/K4//I4v+/3f+93f/I4v+22f/w9//u9f/2+//b6/+/3f/I4f/t9v/J4//1+v/e7//Q5/+22v/0+//c7v/R6P+22P/3/P/w9v+31/+42/+52f/N5P/u9v/f7v/d7f/L4/+82/+22P/O5f/y+P+62v+42f/v9//b7P/J4v/0+f/h7/+93P/x9//g7//1+v/j8P/c7P/H4f/z+P/Q5v+32f/P5v++3f/+uQMOAAAAm3RSTlMAEQQCBiMjGQz1tD0y6ubJxLu5tqKimZmIiId9eGhHRzkuLiASDgsHAffz5+Pg4N+/v7Krp2pdXVlAOyoj/fn5+fj49fX19e/v6urm4uHb1tHRy8fExMTEu7Kyq6urp5eUlI+OjoSEfX15d3NybWFhX19eXldOSUk7ODcrKBX5+ffr6+no29rTwMC2tammnIqIiHV1cHBkVkAyKOPy81wAAAM+SURBVEjH7Zb3UxNREMdfEkKT3qsCoffeLaAIioIFbKgUBQtgBQUEe++95RLuUglBCBD8+9x3t+8uMTOOM/zEDPtT5vt2831lP5sQQrZGhx48nU6UyKgo2Re1zUPIOncoKPyyWhHUKUfzD58PJBAJDofZxu2oltdu7vxlMBrtSbKgLTbp9bNz4YFMCDzCW6xW64FG8F50mBdsHLfHH9f8W+YNBiPUM3/NMZNYPhfHyuOdPNS73REaEg3l4M5xibiWuDQvutuDUUhbFctn57ZnS0L2b57nrRa3IEyRUIdjZcEG9ZGYfWIJ3A1Gl30/CqlQbqLly2mSUO90Oi2we0GoIoWLK+AO5Scx+9Q8uBtcRnsRCldW1/Ri9XKIJISAO5QLgnCV9ODZuWTMvgDu4ubPoHCHbT7ITxL88qSzC0IDSb8HZ1/guDAVZqsKxLO7dmUQjLNYfokJKU5wtwhCJXy+sXsFNh+2hbDY0k7d99bIgqpUT28+Ri0/eyzPw8OVZYovlRBZngzeSvrF4KgkrYeQey3meNwt4hG34yNir+eSzdjAsa53h66jPe/ZdQU+XWfy7Troedp16Xcp7749b/9XzyPv0PM9yLtCHPLuRZzJmzjGe8N6eQ9F3pVpg7x7TRu997RhvFeRaAfl3XfWuZRZZ/KZdci7MEUnLeVdmbTaFnT3mLT6vyYtL/IuwKQlCeBu/o85P+s153k4O8z59f3KbMYGjqzqgcFxtYegHh96V5PlmRIy0peq9RQaq/qHf0jToYPy3uWvNFk37bqiCVnw66PI3R9RqofzgHdrPwAc0Crx/iwHl3I6Jd7bAljye+S9lgm1yPsHQt4y3kdxbZTx3ouCbg15f6BBhh4y3nWkg/H+GrMrGO+dKIzJvE9LQoPMey1pZbx3YXY3470Nhc8mVl4nCXVOxvsX8hx55wYwu5e5vyCYvYq8L2dKQqYTeRe+k6/U3Qzuk5g9yf5ZpbK7LF6T3F8RjJdQT8/+BK67HM4O7oOExZB088GyMNEkXvxj+SkCHtGrczfX03v8WGi2Pf1GlBgrMRjbP2kUYbq0SR/0ZkYRZirzLc1lP9m3qYh3qNBI6RydxlvQ6MSh/wcEiQ5vBU6rowAAAABJRU5ErkJggg==",yt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAZlBMVEUAAAAnhP8Nb/8Nbv8Nbv8OcP8Ob/8Ob/8Ob/8Nb/8PcP8Obv8Obv8Nb/8NcP8Pb/8PcP8TdP8Nb/8NcP8Obv8Nbv8Nb/8Obv8Ob/8OcP8Rb/8Ocf8Ncv8Pcf8Wb/8VgP8QcP8Nbv+quNhCAAAAIXRSTlMABvixlIDwb92IMezNnnNURBvRY/Hn0rm1Wzw2JiIXDFCHpR0hAAAB8UlEQVRYw6TU567CMAwF4JNxO+mibDrw+7/kbdxIVHSn3w+CKkiOrTpYEpWhOgexlHFwVmEZwUXhK49+eMovsIt43mnG/SmwVZteacE1bbelSWP6Ch6JDkOdPAL6ilOBVa8bWRflR2JwQOSrC1m311ocTT2pMoERkSlJPb0Yqj7ZbXSBGYW2W51qzMo9e1qDBY1N7eWYkcn+qDdWvPvgMsOkklgisEokxMrJPMR8bOITm8iUy6m61/opR7+v+XlQYbMq4JPrn6JP/LTCDhWffRIY0mTk2CUnQ2PgNerzjo6/BoXxfCXYLeG5+xaX2mL3sq1NYbV8b7zh4M23SjsMpOFEDyIJcx/KBk4aae5MAeNpAx2I9IRxN4EKOCpMpDt/o46CM0WdAvatyuAs43fZ7ngRcCYutiLProdq84BoNGVOExeh7BdnNkqJ0CwCBwjqhFxhgEMC7vK5+3zgkAcRnXm7BIckXFQ8HrTP34rPeNxiSO7UUEirxn+Q/63YsQ0AMAgDwY6Ckv2HZQCQ3NwCliAB7H+EKgvVFXpKmyw0t7Sn2T1Rp2+z2fOzD8lGhA0tWyNqsbFVy5Y/O0fqQLKTzUyEsjXMaCnrx8yossfKsLMIoUKNilkq+KkoqsKxiusKICikgSCLwj4KRHk05mEdw4cLrMGD5S1fn3UAAAAASUVORK5CYII=",Ct="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAZlBMVEUAAAAQcP8vgP8Nb/8Nbv8Ob/8Obv8Vc/8Ob/8Obv8Nbv8Nb/8Obv8Nb/8NcP8OcP8Pb/8PcP8Ocf8chf8Ob/8Obv8Ob/8Obv8OcP8NcP8Nbv8NcP8NcP8Pcf8Ocf8Scv8Pb/8Nbv90LxprAAAAIXRSTlMAPwX5svCSF27s5tLNmnFbVDEkCdzx37mgiYZ0YkY2HWWKqbLAAAACF0lEQVRYw6SU17LDIAxERXF3XOLe4uj/f/LGgjtDEldyHswMHpYVWoA98rGTUR0IEdSR7MYcbPB86eAHjvQ9uESRNrhBkxbnZYYQdwiHc1I8CYxVpWzdvndbWRqTQcLhEBahppJ+bizguS8r1ETsyI6LCiEzvvI7kwIV7q6pe6xl3Bk2mF0tFd93ytINv3m7wbjpMGyWlwm11QMOeCjjIoNVntoOh0O4NvVc9YNEAqdIkFjxxATVPcFJJoeqY1/9ovnyDqe5l7Tzxwoe69nz6L1jDiYqhxNcYlLJBAOGCz5cxMcFZhQWUd/hMpSCiJu9pGLXScMw3cpT/JaYgt6NrTx7AlF4WxmnV6UAxbBbGKNz2C1u0IZCpD1thMgvhspSqppoJaSDo86wWQzNtkLzYqkhc/hCgq0QyOW/95+qzF4ooyxrxYrbC/FKV+TQaC9EThyAnJzZC+mzyWGkwV5IWxmhWwb+ixDHFx1VWIKtEFHSKUf0/UWIvERQI2ILb3jMJKGXgpl48EaLiDUEXxctFXiASL+uWwDLqh5MQjwkBJN+0f5rxc5tAABhIAhiIkJaoP8mSRw5O2koAInH9u2yjdjR2GWz52cfkpUIK1rWRlRjY62WNX82jtSAZCObhQgVa1jQUtHPh9FVE0MSICkV2BlCKKjhmDXB7yQY8q5CUQXHCteVQFBKQ0kWr328iPJqzMu6XjvRhx8qv5Pz8gaE6wAAAABJRU5ErkJggg==";const i=(e,t)=>{window.AppJSInterface?window.AppJSInterface[e](JSON.stringify(t)):window.webkit.messageHandlers&&window.webkit.messageHandlers[e].postMessage(JSON.stringify(t))};function l(e){console.log(e)}const Et={appReady(){return new Promise((e,t)=>{const u=setInterval(()=>{window.AppJSInterface||window.webkit&&window.webkit.messageHandlers?(clearInterval(u),e("success")):t("Jsbridge\u521D\u59CB\u5316\u5931\u8D25\uFF1A\u627E\u4E0D\u5230window.AppJSInterface\u6216\u8005window.webkit.messageHandlers")},100)})},showNavMask(e){return this.appReady().then(()=>{i("showNavShadow",{visible:e})}).catch(t=>{})},getNativeCookies(e){return this.appReady().then(()=>{i("getCookies",{cbname:e})}).catch(t=>new Error("\u8C03\u7528\u5931\u8D25"))},shareConfig(e){this.appReady().then(()=>{let t;e.type==="image"?t={type:"image",link:e.link,cbname:e.cbname}:t={img:e.img,title:e.title,desc:e.desc,link:e.link,cbname:e.cbname},i("configWXShare",t)}).catch(t=>{l(t)})},callLogout(e){return this.appReady().then(()=>{i("logout",{cbname:e})}).catch(t=>{l(t)})},importCustomersFromNative(e){return this.appReady().then(()=>{i("importCustomers",{cbname:e})}).catch(t=>{l(t)})},callImage(e){this.appReady().then(()=>{i("choosePhoto",{cbname:e,limit:"30M"})}).catch(t=>{l(t)})},openPDFWithUrl(e,t){this.appReady().then(()=>{i("openPDFDoc",{title:e,link:t})}).catch(u=>{l(u)})},openWebView(e,t,u="true"){this.appReady().then(()=>{i("openWebView",{title:e,link:t,showProgress:u})}).catch(B=>{l(B)})},openNewWebForShare({link:e,title:t,desc:u,img:B}){this.appReady().then(()=>{i("openNewWebForShare",{link:e,title:t,desc:u,img:B})}).catch(y=>{l(y)})},goback(){this.appReady().then(()=>{i("goback","")}).catch(e=>{l(e)})},closeWebView(e){let t={cbname:""};st.exports.isEmpty(t)||(t=K(K({},t),e)),this.appReady().then(()=>{i("closeWebview",t)}).catch(u=>{l(u)})},downloadImg(e){this.appReady().then(()=>{i("downloadImg",e)}).catch(t=>{l(t)})},jumpProduct(e){this.appReady().then(()=>{i("jumpProduct",e)}).catch(t=>{l(t)})},jumpSignResult(){this.appReady().then(()=>{i("jumpSignResult","")}).catch(e=>{l(e)})},downloadVideo(e){this.appReady().then(()=>{i("downloadVideo",e)}).catch(t=>{l(t)})},downloadImgs(e){this.appReady().then(()=>{i("downloadImgs",e)}).catch(t=>{l(t)})},openWeiXin(){this.appReady().then(()=>{i("openWeiXin","")}).catch(e=>{l(e)})},previewImgs(e){this.appReady().then(()=>{i("previewImgs",e)}).catch(t=>{l(t)})},copyToClipboard(e){this.appReady().then(()=>{i("copyToClipboard",e)}).catch(t=>{l(t)})},shareWXForMoments(e){this.appReady().then(()=>{i("shareWXForMoments",e)}).catch(t=>{l(t)})},previewVideo(e){this.appReady().then(()=>{i("previewVideo",e)}).catch(t=>{l(t)})},getContacts(e){return this.appReady().then(()=>{i("na_getContacts",{cbname:e})}).catch(t=>{l(t)})},getLocation(e){this.appReady().then(()=>i("na_startLocation",{param:e})).catch(t=>{l(t)})}};var wt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAADqCAMAAABUZB2/AAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMAA0IJ+AYTHPIkINCmF4IN/Hx1SCgLw2OhmzUrGdZVOatMD8q2lnDs5t2xjIhaUC/iaZExvGxePgkCneYAAAXCSURBVHja7dzZdtowEAbgX17wim1sY/Z93wkQmPd/stKmaWkCwT3H8vgi3yVXOkiWRqORwO5lB3Zr6oGZ7hIp4OWfiCgCK8Ohqy04tfb00waMFJN+qYHPRqM3r2AT0rsQTMSB/qiAh7qkvzywKCV0YwUOdoduTcCgOad/NJC/yKR/uchdLaAP+sibR5+MkS9Rp89OyJU/pjsS5Knt0D0OchTv6a4O8nOZ0X0L5Kar0QNz5GUa0CMz5GRFj2nIhd6nryAPpYS+pEM+u0NfG0K63ZyeKEO2yKRnbEh21uipGHJVKIUjZBINSqMHiapjSkWBPOURpRNBGmtBKW0hS29GaW0gyVaj1GqQ4zWg9F4gxZpSkJsb0F1KQXJuQG12w8PSMSklDxKVjtvptTEzemKFHPitweuqv6AbXLmBC93gyg2IGb0bnxYBU26gf7sDFrZS89xknndu4ExvZmX8pV7Hyxn5KdMVe0J9RD8dwMqjK0cHqyYRmTF4iRlRDdzq1Ae7zb4EdqULvn379u1b8dWcM9i59AJ2ulIGN1+A32rWBbsxfwHRlcXfH3EBYjokgQJuYmz64KeD3aYABX6qRm1wK02W+HalNwZgF5EDdkaFPxlQCMqpAKv4hDyw888WuFVRAPUF/yqODvH3BkQT7Hoq2A21Gf/IbI1OKAD+7rCn/DtQVKgOdsqyADOVTDrQ2vl46rBqQwofcAIDCSmYHo74iq+RDRlczUASHDFxLCQ0gGLhseYU2es10Q+2KOv4pVlRsQgueKQECbo0gt3GrWrDEaiJ+03WDsiaAbXjCXwk8ELug0rUNTL2oikQuEfp7HCXXUbG1lTBAwLxyPjcNgsZU4ALHnM/94jYUxOZCp+E7UNP/fRTw0G2zloX/0rx7wtkqSxQxhNTauDWsb5DlsQoKeMZa1/5MEpWyFI83/v4X8bKQKaGLTznd2sSZ+zVWSCFHS1u2mAuBTIUB5qBFITr4Y+BuUSWxCbE/yvbyJBAWkqtjd82TWRq6kRIJ6HLnxFBMbKU0BbphPUW3vjrPjKlD3T2PZeK1LaKjl/qSYxM1fcKUtKoip/8uWYjUw4dkY5aH+ONP8A7rgO0KPMmCIG0jpcqrqp7ipCtSHORkks1XInXEzK2odSNqDgtAIZA9lQV/0N3HBuZEzrS6TZ6AOxFR0XWzqkzLUuqAQJVC5kbBGkb0aq0Uep0IYEQQHohJZBCRyr1cQvASxsyjIMWUtBNMmoTATlcbYs0St2SSQPIYVSRhg2BXghpjDKeatGo04Y8r8EET3VNjULIE2srPDMcVOMXyNTGM9V90INkamOCL1iGmNMWkjU108BD3aCveiMB2bY9WEPcE0/RNhsCuah25hY+UoU+ox1K0biHPBhJRxihgb8E1qaC9cQGxhQiHwY8mqDpXRDXmgjnNXjvec1hpYq8KG6ECnmY0gohHdA28MsOOVM8BVFjc5t9iIpwylUzp+BXYj/41OsFOI5/pQ7YDdcRuBWgPAOWtuSvvN2aDfArs9f/6m4BPs9pEYoLq2v+soQilMVvi7B6bsxX8Cuzz1PN0RHslrQGu2qFPZSJ+wbYjWkCdu3GEMysAsyVIgn467CFt2fvjFIBKizF6MRfYRnPFwW4x1Riv0OknviDKYRFCCtFpQVm5Sl7HAOMixBERB32e20W+5YPUDt79kGJcuKwrxk+BPuAsGch2L0U4YkbKOyBzGDJ/3mKRRFeTDD4L/dVChDiK2QWYESs2LMhahFu3jboAHaDOfvaGZf4XyooLRY2uLVHI/Y/og2dfd8ZaQVYMTyqgJkO8O873T7/tVvbZH+78cpiP/C0R+yTdUHej1TX7MF1WIBJygqIPTkGbNi3fMMD/yQFl1ywsxL2OKZbgEO+nWay/w/QG+yHW+oGYE+X9vlDKaA7Zw8hFJ//XKmpOfxHOnaH/cOoHvlfsBRLjf8tNNGYFaGMrgC1CAXwA5uZT4G1yHw0AAAAAElFTkSuQmCC";const Rt={class:"com-za-share-overlay"},kt={class:"block"},Bt=["src"],Dt=Ue({props:{show:{type:Boolean,default:!1},text:{type:String,default:"\u70B9\u51FB\u5DE6\u4E0A\u89D2\xB7\xB7\xB7\u8F6C\u53D1\u5206\u4EAB~"}},emits:["on-close"],setup(e,{emit:t}){const u=()=>{t("on-close",!1)};return(B,y)=>{const j=k("van-overlay");return c(),h("div",Rt,[w(j,{show:e.show,"z-index":"999999999",onClick:u},{default:p(()=>[s("div",{class:"wrapper",onClick:y[0]||(y[0]=at(()=>{},["stop"]))},[s("div",kt,r(e.text),1),s("img",{src:q(wt),alt:""},null,8,Bt)])]),_:1},8,["show"])])}}});const g=e=>(lt("data-v-48681db2"),e=e(),ct(),e),It={class:"page-composition-proposal"},Ft={class:"head-bg"},xt={class:"container head-cover"},Ot={class:"info-detail"},Nt={class:"name"},St={class:"img"},Mt={key:0,src:mt},Vt={key:1,src:_t},Kt={clase:"p1"},Ut={class:"p2"},Wt={class:"fe"},qt=v(" \u9996\u5E74\u4FDD\u8D39\uFF1A "),Qt=g(()=>s("div",{class:"line"},null,-1)),Yt={class:"tp"},Lt={class:"container"},Ht={class:"common-title"},jt={class:"title"},Tt=g(()=>s("img",{src:Pt,class:"ig"},null,-1)),Gt={class:"product-detail"},Xt=g(()=>s("div",{class:"line2"},null,-1)),zt={class:"container"},Jt=g(()=>s("div",{class:"common-title"},"\u5229\u76CA\u6F14\u793A",-1)),Zt={class:"benefit"},$t={class:"benefit-title"},es=g(()=>s("div",{class:"line"},null,-1)),ts={key:0,class:"box-title box-title-chart"},ss=g(()=>s("img",{src:H,alt:""},null,-1)),as=v(" \u4FDD\u5355\u5E74\u5EA6"),os=v("\u5E74\u5EA6\uFF0C\u88AB\u4FDD\u4EBA"),ns=v("\u5C81\u65F6 "),us=g(()=>s("img",{src:H,alt:""},null,-1)),is={key:1},ls={class:"box"},cs={class:"box-title"},rs=g(()=>s("img",{src:H,alt:""},null,-1)),ds=v(" \u4FDD\u5355\u5E74\u5EA6"),vs=v("\u5E74\u5EA6\uFF0C\u88AB\u4FDD\u4EBA"),As=v("\u5C81\u65F6 "),hs=g(()=>s("img",{src:H,alt:""},null,-1)),ps={class:"box-price"},gs={class:"text1"},fs={class:"text2"},bs={key:2,style:{width:"100%"}},ms={class:"slider"},_s=g(()=>s("img",{src:yt,alt:""},null,-1)),Ps=[_s],ys={style:{flex:"1",margin:"0px 5px"}},Cs={class:"custom-button"},Es=g(()=>s("img",{src:Ct,alt:""},null,-1)),ws=[Es],Rs=g(()=>s("p",{class:"slider-dec"},"\u62D6\u52A8\u6309\u94AE\u67E5\u770B\u4E0D\u540C\u5E74\u9F84\u4FDD\u969C",-1)),ks={class:"btn-two"},Bs=v("\u56FE\u8868\u5C55\u793A"),Ds=v("\u8D8B\u52BF\u5C55\u793A"),Is={class:"container"},Fs=g(()=>s("div",{class:"common-title"},"\u4FDD\u9669\u516C\u53F8\u7B80\u4ECB",-1)),xs=g(()=>s("span",{class:"poiner"},null,-1)),Os={key:0,class:"footer-btn"},Ns=v("\u751F\u6210PDF"),Ss=v("\u5206\u4EAB\u8BA1\u5212\u4E66"),Ms=Ue({setup(e){const t=ot(),u=nt(),{isShare:B,id:y}=t.query,j=[{title:"\u9669\u79CD\u540D\u79F0",dataIndex:"riskName",width:180},{title:"\u4FDD\u989D",dataIndex:"amount"},{title:"\u4FDD\u969C\u671F\u95F4",dataIndex:"coveragePeriod",width:110},{title:"\u7F34\u8D39\u671F\u95F4",dataIndex:"chargePeriod",width:110},{title:"\u4FDD\u8D39",dataIndex:"premium",width:120}],T=b([]),Q=b(0),A=b();b(0);const D=b(0),S=b(0),$=b(""),ee=b(""),Y=b(""),G=b(!1),f=b(),P=b(0),I=b(!0),We={1:"\u7537",2:"\u5973"},X=o=>o===1;Me(()=>A.value,o=>{const{gender:a,name:n}=o;X(a)?Y.value=`${n||""}\u5148\u751F\u7684\u8BA1\u5212\u4E66`:Y.value=`${n||""}\u5973\u58EB\u7684\u8BA1\u5212\u4E66`});const qe=(o,a)=>{const n=[],d=[];for(let C=o,m=0;C<=a;C++,m++)n.push(C.toString()),d.push(m+1);return{a:n,year:d}},F=()=>{var C,m,x;const o=(m=(C=A.value)==null?void 0:C.benefitRiskResultVOList)==null?void 0:m[Q.value],{a,year:n}=qe(D.value,S.value),d={index:a.indexOf(P.value.toString()),age:a,year:n,result:(x=o.benefitRiskItemResultVOList)==null?void 0:x[0]};f.value=d},Qe=o=>{const a=o.split("_");if(o==="to_life")return"\u4FDD\u7EC8\u751F";switch(a[0]){case"year":return`${a[1]}\u5E74`;case"month":return`${a[1]}\u6708`;case"day":return`${a[1]}\u5929`;case"to":return`\u4FDD\u81F3${a[1]}\u5C81`;default:return""}},Ye=o=>{const a=o.split("_");switch(a[0]){case"year":return`${a[1]}\u5E74\u4EA4`;case"month":return`${a[1]}\u6708\u4EA4`;case"to":return`\u4EA4\u81F3${a[1]}\u5C81`;case"single":return"\u8DB8\u7F34";default:return""}},te=()=>{var a;const o=`${gt}/compositionProposal?id=${y}&isShare=1&tenantId=${$.value}`;return{title:`${(a=A.value)==null?void 0:a.name}\u7684\u8BA1\u5212\u4E66`,desc:"\u60A8\u7684\u8D34\u5FC3\u4FDD\u9669\u7BA1\u5BB6",link:o}},se=()=>{const o=te();Ke()&&(console.log("\u5728\u5FAE\u4FE1\u5185, \u9ED8\u8BA4\u8BBE\u7F6E\u5206\u4EAB\u4FE1\u606F"),console.log(o),Z.ready(()=>{const a=J(K({},o),{imgUrl:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg",success:()=>{console.log("\u5206\u4EAB\u6210\u529F\u56DE\u8C03")}});console.log("ready"),Z.updateAppMessageShareData(a),Z.updateTimelineShareData(a)}))},ae=o=>{const a=[];o==null||o.forEach(n=>{const{riskName:d,amount:C,coveragePeriod:m,chargePeriod:x,premium:z}=n;a.push({riskName:d,amount:C,coveragePeriod:Qe(m),chargePeriod:Ye(x),premium:z})}),T.value=a},oe=o=>{const a=o.benefitRiskResultVOList[Q.value];D.value=a.ageBegin+1,P.value=a.ageBegin+1,S.value=a.ageEnd};ut(()=>{t.query.token&&new ht({source:"localStorage"}).set("token",t.query.token),B?rt(`${y}?tenantId=${t.query.tenantId}`).then(o=>{const{code:a,data:n}=o;if(a==="10000"){const d=(n==null?void 0:n.proposalInsuredVOList[0])||{};A.value=d,ae(d.proposalProductRiskVOList),oe(d),F()}se()}):dt(y).then(o=>{const{code:a,data:n}=o;if(a==="10000"){const d=(n==null?void 0:n.proposalInsuredVOList[0])||{};A.value=d,$.value=n==null?void 0:n.tenantId,ae(d.proposalProductRiskVOList),oe(d),F()}se()})});const Le=()=>{P.value>S.value-1||(P.value+=1,F())},He=()=>{P.value>D.value&&(P.value-=1,F())},je=o=>{Q.value=o.name,F()},ne=o=>{o==="1"?I.value=!0:I.value=!1},Te=o=>{const a=te();if(console.log("\u70B9\u51FB\u4E86\u5206\u4EAB\u6309\u94AE"),Ke()){console.log("\u5728\u5FAE\u4FE1\u5185\uFF0C\u5F39\u8D77\u906E\u7F69"),G.value=!0;return}pt()&&(console.log("\u5728app\u5185"),Et.shareConfig(J(K({},a),{img:"https://aquarius-v100-test.oss-cn-hangzhou.aliyuncs.com/4e9f65f5-1bfc-4062-959b-c3101cb9e763.jpg"})))},Ge=()=>{G.value=!1},Xe=()=>{if(!y){L("PDF\u751F\u6210\u5931\u8D25");return}L.loading({message:"PDF\u751F\u6210\u4E2D...",forbidClick:!0}),vt(y.toString()).then(o=>{const{code:a,message:n}=o;a==="10000"&&(L.clear(),console.log(n),n?u.push(`/openPdf?url=${encodeURIComponent(n)}&title=${Y.value}`):L("\u8BA1\u5212\u4E66\u4E3A\u7A7A"))})};return Me(P,()=>{F()}),(o,a)=>{const n=k("van-collapse-item"),d=k("van-collapse"),C=k("van-slider"),m=k("van-button"),x=k("van-tab"),z=k("van-tabs"),ze=k("ProPageWrap");return c(),O(ze,null,{default:p(()=>{var ue,ie,le,ce,re,de,ve;return[s("div",It,[s("div",Ft,r(Y.value),1),s("div",xt,[s("div",Ot,[s("div",Nt,[s("div",St,[X((ue=A.value)==null?void 0:ue.gender)?(c(),h("img",Mt)):N("",!0),X((ie=A.value)==null?void 0:ie.gender)?N("",!0):(c(),h("img",Vt))]),s("div",null,[s("p",Kt,r((le=A.value)==null?void 0:le.name),1),s("p",Ut,r(We[(ce=A.value)==null?void 0:ce.gender])+"\uFF0C"+r(q(it)().diff((re=A.value)==null?void 0:re.birthday,"y"))+"\u5C81",1)])]),s("div",Wt,[qt,s("span",null,"\xA5"+r(q(Ve)((de=A.value)==null?void 0:de.totalPremium)),1)])]),Qt,s("div",Yt,[T.value.length>0?(c(),O(ft,{key:0,columns:j,class:"table","data-source":T.value},null,8,["data-source"])):N("",!0)])]),s("div",Lt,[(c(!0),h(W,null,U((ve=A.value)==null?void 0:ve.liabilityByRiskVOList,(_,R)=>(c(),h("div",{key:R},[s("div",Ht,[s("div",jt,[Tt,v(" "+r(_.riskName),1)])]),s("div",Gt,[w(d,{modelValue:_.riskName1,"onUpdate:modelValue":E=>_.riskName1=E,accordion:"","is-link":!1,border:!1,size:"middle"},{default:p(()=>[(c(!0),h(W,null,U(_.proposalRiskLiabilityVOList,(E,M)=>(c(),O(n,{key:M,title:E.liabilityName,name:M,"value-class":"price",value:E.liabilityIndemnityContent},{default:p(()=>[v(r(E.liabilityDesc),1)]),_:2},1032,["title","name","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),Xt]))),128))]),s("div",zt,[Jt,w(z,{active:Q.value,"title-active-color":"#0D6EFE","title-inactive-color":"#393D46",shrink:"",onClickTab:je},{default:p(()=>{var _;return[(c(!0),h(W,null,U((_=A.value)==null?void 0:_.benefitRiskResultVOList,(R,E)=>(c(),O(x,{key:E,name:E,title:R.riskName},{default:p(()=>{var M,Ae,he,pe,ge,fe,be,me,_e,Pe,ye,Ce,Ee,we,Re,ke;return[s("div",Zt,[s("div",$t,r(R==null?void 0:R.riskName),1),es,I.value?N("",!0):(c(),h("p",ts,[ss,as,s("span",null,r((he=(M=f.value)==null?void 0:M.year)==null?void 0:he[(Ae=f.value)==null?void 0:Ae.index]),1),os,s("span",null,r((fe=(pe=f.value)==null?void 0:pe.age)==null?void 0:fe[(ge=f.value)==null?void 0:ge.index]),1),ns,us])),I.value?(c(),h("div",is,[s("div",ls,[s("p",cs,[rs,ds,s("span",null,r((_e=(be=f.value)==null?void 0:be.year)==null?void 0:_e[(me=f.value)==null?void 0:me.index]),1),vs,s("span",null,r((Ce=(Pe=f.value)==null?void 0:Pe.age)==null?void 0:Ce[(ye=f.value)==null?void 0:ye.index]),1),As,hs]),s("div",ps,[(c(!0),h(W,null,U((we=(Ee=f.value)==null?void 0:Ee.result)==null?void 0:we.headers,(V,Be)=>{var De,Ie,Fe,xe,Oe;return c(),h("div",{key:Be,style:{width:"33%"}},[s("p",gs,r(q(Ve)(Number((Oe=(xe=(Ie=(De=f.value)==null?void 0:De.result)==null?void 0:Ie.dataList)==null?void 0:xe[(Fe=f.value)==null?void 0:Fe.index])==null?void 0:Oe[Be]))),1),s("p",fs,r(V)+"(\u5143\uFF09",1)])}),128))])])])):(c(),h("div",bs,[w(bt,{min:D.value,max:S.value,current:P.value,data:(ke=(Re=f.value)==null?void 0:Re.result)==null?void 0:ke.benefitRiskItemList},null,8,["min","max","current","data"])])),s("div",ms,[s("div",{class:"add lf",onClick:He},Ps),s("div",ys,[D.value?(c(),O(C,{key:0,modelValue:P.value,"onUpdate:modelValue":a[0]||(a[0]=V=>P.value=V),min:D.value,max:S.value,"bar-height":"8px"},{button:p(()=>[s("div",Cs,r(P.value)+" \u5C81",1)]),_:1},8,["modelValue","min","max"])):N("",!0)]),s("div",{class:"add rg",onClick:Le},ws)]),Rs,s("div",ks,[w(m,{round:"",plain:!I.value,type:"primary",class:"btn",onClick:a[1]||(a[1]=V=>ne("1"))},{default:p(()=>[Bs]),_:1},8,["plain"]),w(m,{round:"",plain:I.value,type:"primary",class:"btn",onClick:a[2]||(a[2]=V=>ne("2"))},{default:p(()=>[Ds]),_:1},8,["plain"])])])]}),_:2},1032,["name","title"]))),128))]}),_:1},8,["active"])]),s("div",Is,[Fs,w(d,{modelValue:ee.value,"onUpdate:modelValue":a[3]||(a[3]=_=>ee.value=_),accordion:"","is-link":!1,border:!1,size:"middle"},{default:p(()=>{var _;return[(c(!0),h(W,null,U((_=A.value)==null?void 0:_.insurerInfoVOList,(R,E)=>(c(),O(n,{key:E,name:"1","value-class":"price"},{title:p(()=>[s("div",null,[xs,v(" "+r(R.insurerName),1)])]),default:p(()=>[v(" "+r(R.insurerDesc),1)]),_:2},1024))),128))]}),_:1},8,["modelValue"])]),q(B)?N("",!0):(c(),h("div",Os,[w(m,{plain:"",type:"primary",class:"btn",onClick:Xe},{default:p(()=>[Ns]),_:1}),w(m,{type:"primary",class:"btn",onClick:Te},{default:p(()=>[Ss]),_:1})])),w(Dt,{show:G.value,onOnClose:Ge},null,8,["show"])])]}),_:1})}}});var Ys=At(Ms,[["__scopeId","data-v-48681db2"]]);export{Ys as default};
