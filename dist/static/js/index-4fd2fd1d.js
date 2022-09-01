var R=Object.defineProperty,f=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var d=(e,t,a)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,r=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&d(e,a,t[a]);if(u)for(var a of u(t))k.call(t,a)&&d(e,a,t[a]);return e},g=(e,t)=>f(e,B(t));import{l as S,g as A,r as v,j as y,n as m,p as C,m as D,z as l,J as F,A as E,am as O,E as W,h as I,Y as M,F as K,w as h}from"./vendor-e057bbeb.js";import{I as w,J as x}from"./index-f2834090.js";const s=(e,t)=>{window.AppJSInterface?window.AppJSInterface[e](JSON.stringify(t)):window.webkit.messageHandlers&&window.webkit.messageHandlers[e].postMessage(JSON.stringify(t))};function o(e){console.log(e)}const H={appReady(){return new Promise((e,t)=>{const a=setInterval(()=>{window.AppJSInterface||window.webkit&&window.webkit.messageHandlers?(clearInterval(a),e("success")):t("Jsbridge\u521D\u59CB\u5316\u5931\u8D25\uFF1A\u627E\u4E0D\u5230window.AppJSInterface\u6216\u8005window.webkit.messageHandlers")},100)})},showNavMask(e){return this.appReady().then(()=>{s("showNavShadow",{visible:e})}).catch(t=>{})},getNativeCookies(e){return this.appReady().then(()=>{s("getCookies",{cbname:e})}).catch(t=>new Error("\u8C03\u7528\u5931\u8D25"))},shareConfig(e){this.appReady().then(()=>{let t;e.type==="image"?t={type:"image",link:e.link,cbname:e.cbname}:t={img:e.img,title:e.title,desc:e.desc,link:e.link,cbname:e.cbname},s("configWXShare",t)}).catch(t=>{o(t)})},callLogout(e){return this.appReady().then(()=>{s("logout",{cbname:e})}).catch(t=>{o(t)})},importCustomersFromNative(e){return this.appReady().then(()=>{s("importCustomers",{cbname:e})}).catch(t=>{o(t)})},callImage(e){this.appReady().then(()=>{s("choosePhoto",{cbname:e,limit:"30M"})}).catch(t=>{o(t)})},openPDFWithUrl(e,t){this.appReady().then(()=>{s("openPDFDoc",{title:e,link:t})}).catch(a=>{o(a)})},openWebView(e,t,a="true"){this.appReady().then(()=>{s("openWebView",{title:e,link:t,showProgress:a})}).catch(i=>{o(i)})},openNewWebForShare({link:e,title:t,desc:a,img:i}){this.appReady().then(()=>{s("openNewWebForShare",{link:e,title:t,desc:a,img:i})}).catch(c=>{o(c)})},goback(){this.appReady().then(()=>{s("goback","")}).catch(e=>{o(e)})},closeWebView(e){let t={cbname:""};S.exports.isEmpty(t)||(t=r(r({},t),e)),this.appReady().then(()=>{s("closeWebview",t)}).catch(a=>{o(a)})},downloadImg(e){this.appReady().then(()=>{s("downloadImg",e)}).catch(t=>{o(t)})},jumpProduct(e){this.appReady().then(()=>{s("jumpProduct",e)}).catch(t=>{o(t)})},jumpSignResult(){this.appReady().then(()=>{s("jumpSignResult","")}).catch(e=>{o(e)})},downloadVideo(e){this.appReady().then(()=>{s("downloadVideo",e)}).catch(t=>{o(t)})},downloadImgs(e){this.appReady().then(()=>{s("downloadImgs",e)}).catch(t=>{o(t)})},openWeiXin(){this.appReady().then(()=>{s("openWeiXin","")}).catch(e=>{o(e)})},previewImgs(e){this.appReady().then(()=>{s("previewImgs",e)}).catch(t=>{o(t)})},copyToClipboard(e){this.appReady().then(()=>{s("copyToClipboard",e)}).catch(t=>{o(t)})},shareWXForMoments(e){this.appReady().then(()=>{s("shareWXForMoments",e)}).catch(t=>{o(t)})},previewVideo(e){this.appReady().then(()=>{s("previewVideo",e)}).catch(t=>{o(t)})},getContacts(e){return this.appReady().then(()=>{s("na_getContacts",{cbname:e})}).catch(t=>{o(t)})},getLocation(e){this.appReady().then(()=>s("na_startLocation",{param:e})).catch(t=>{o(t)})}};var U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAADqCAMAAABUZB2/AAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMAA0IJ+AYTHPIkINCmF4IN/Hx1SCgLw2OhmzUrGdZVOatMD8q2lnDs5t2xjIhaUC/iaZExvGxePgkCneYAAAXCSURBVHja7dzZdtowEAbgX17wim1sY/Z93wkQmPd/stKmaWkCwT3H8vgi3yVXOkiWRqORwO5lB3Zr6oGZ7hIp4OWfiCgCK8Ohqy04tfb00waMFJN+qYHPRqM3r2AT0rsQTMSB/qiAh7qkvzywKCV0YwUOdoduTcCgOad/NJC/yKR/uchdLaAP+sibR5+MkS9Rp89OyJU/pjsS5Knt0D0OchTv6a4O8nOZ0X0L5Kar0QNz5GUa0CMz5GRFj2nIhd6nryAPpYS+pEM+u0NfG0K63ZyeKEO2yKRnbEh21uipGHJVKIUjZBINSqMHiapjSkWBPOURpRNBGmtBKW0hS29GaW0gyVaj1GqQ4zWg9F4gxZpSkJsb0F1KQXJuQG12w8PSMSklDxKVjtvptTEzemKFHPitweuqv6AbXLmBC93gyg2IGb0bnxYBU26gf7sDFrZS89xknndu4ExvZmX8pV7Hyxn5KdMVe0J9RD8dwMqjK0cHqyYRmTF4iRlRDdzq1Ae7zb4EdqULvn379u1b8dWcM9i59AJ2ulIGN1+A32rWBbsxfwHRlcXfH3EBYjokgQJuYmz64KeD3aYABX6qRm1wK02W+HalNwZgF5EDdkaFPxlQCMqpAKv4hDyw888WuFVRAPUF/yqODvH3BkQT7Hoq2A21Gf/IbI1OKAD+7rCn/DtQVKgOdsqyADOVTDrQ2vl46rBqQwofcAIDCSmYHo74iq+RDRlczUASHDFxLCQ0gGLhseYU2es10Q+2KOv4pVlRsQgueKQECbo0gt3GrWrDEaiJ+03WDsiaAbXjCXwk8ELug0rUNTL2oikQuEfp7HCXXUbG1lTBAwLxyPjcNgsZU4ALHnM/94jYUxOZCp+E7UNP/fRTw0G2zloX/0rx7wtkqSxQxhNTauDWsb5DlsQoKeMZa1/5MEpWyFI83/v4X8bKQKaGLTznd2sSZ+zVWSCFHS1u2mAuBTIUB5qBFITr4Y+BuUSWxCbE/yvbyJBAWkqtjd82TWRq6kRIJ6HLnxFBMbKU0BbphPUW3vjrPjKlD3T2PZeK1LaKjl/qSYxM1fcKUtKoip/8uWYjUw4dkY5aH+ONP8A7rgO0KPMmCIG0jpcqrqp7ipCtSHORkks1XInXEzK2odSNqDgtAIZA9lQV/0N3HBuZEzrS6TZ6AOxFR0XWzqkzLUuqAQJVC5kbBGkb0aq0Uep0IYEQQHohJZBCRyr1cQvASxsyjIMWUtBNMmoTATlcbYs0St2SSQPIYVSRhg2BXghpjDKeatGo04Y8r8EET3VNjULIE2srPDMcVOMXyNTGM9V90INkamOCL1iGmNMWkjU108BD3aCveiMB2bY9WEPcE0/RNhsCuah25hY+UoU+ox1K0biHPBhJRxihgb8E1qaC9cQGxhQiHwY8mqDpXRDXmgjnNXjvec1hpYq8KG6ECnmY0gohHdA28MsOOVM8BVFjc5t9iIpwylUzp+BXYj/41OsFOI5/pQ7YDdcRuBWgPAOWtuSvvN2aDfArs9f/6m4BPs9pEYoLq2v+soQilMVvi7B6bsxX8Cuzz1PN0RHslrQGu2qFPZSJ+wbYjWkCdu3GEMysAsyVIgn467CFt2fvjFIBKizF6MRfYRnPFwW4x1Riv0OknviDKYRFCCtFpQVm5Sl7HAOMixBERB32e20W+5YPUDt79kGJcuKwrxk+BPuAsGch2L0U4YkbKOyBzGDJ/3mKRRFeTDD4L/dVChDiK2QWYESs2LMhahFu3jboAHaDOfvaGZf4XyooLRY2uLVHI/Y/og2dfd8ZaQVYMTyqgJkO8O873T7/tVvbZH+78cpiP/C0R+yTdUHej1TX7MF1WIBJygqIPTkGbNi3fMMD/yQFl1ywsxL2OKZbgEO+nWay/w/QG+yHW+oGYE+X9vlDKaA7Zw8hFJ//XKmpOfxHOnaH/cOoHvlfsBRLjf8tNNGYFaGMrgC1CAXwA5uZT4G1yHw0AAAAAElFTkSuQmCC";const Y={class:"com-za-share-overlay"},j={class:"block"},q=["src"],V=A({props:{show:{type:Boolean,default:!1},text:{type:String,default:"\u70B9\u51FB\u5DE6\u4E0A\u89D2\xB7\xB7\xB7\u8F6C\u53D1\u5206\u4EAB~"}},emits:["on-close"],setup(e,{emit:t}){const a=()=>{t("on-close",!1)};return(i,c)=>{const p=v("van-overlay");return y(),m("div",Y,[C(p,{show:e.show,"z-index":"999999999",onClick:a},{default:D(()=>[l("div",{class:"wrapper",onClick:c[0]||(c[0]=O(()=>{},["stop"]))},[l("div",j,F(e.text),1),l("img",{src:E(U),alt:""},null,8,q)])]),_:1},8,["show"])])}}}),T=A({props:{title:{type:String,default:""},desc:{type:String,default:""},link:{type:String,default:""},imgUrl:{type:String,default:""}},setup(e){const t=e,a=W(!1),i=()=>{a.value=!1},c=()=>{if(console.log("\u5206\u4EABurl",t.link),w()){console.log("\u5728\u5FAE\u4FE1\u5185\uFF0C\u5F39\u8D77\u906E\u7F69"),a.value=!0;return}if(x()){console.log("\u5728app\u5185");const n={img:t.imgUrl,title:t.title,desc:t.desc,link:t.link};console.log("\u53C2\u6570\uFF1A",n),H.shareConfig(n)}},p=()=>{w()&&h.ready(()=>{const n=g(r({},t),{success:()=>{console.log("\u5206\u4EAB\u6210\u529F")}});console.log("setWechatConfig\u5206\u4EAB\u53C2\u6570: ",n),h.updateAppMessageShareData(n),h.updateTimelineShareData(n)})};return I(()=>{p()}),(n,N)=>(y(),m(K,null,[l("span",{class:"com-share",onClick:c},[M(n.$slots,"default")]),C(V,{show:a.value,onOnClose:i},null,8,["show"])],64))}});export{T as _};
