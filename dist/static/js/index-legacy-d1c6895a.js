!function(){var e=document.createElement("style");e.innerHTML=".com-za-share-overlay .wrapper{position:relative}.com-za-share-overlay .wrapper .block{color:#fff;right:1.73333rem;position:absolute;top:5.33333rem}.com-za-share-overlay .wrapper img{position:absolute;width:2.4rem;height:4.66667rem;right:.66667rem;top:.26667rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-5d3b395b.js","./index-legacy-753fdf1e.js"],(function(e){"use strict";var t,a,i,s,n,o,p,c,r,h,l,d,m,g,w,u,y,A;return{setters:[function(e){t=e.l,a=e.g,i=e.r,s=e.j,n=e.n,o=e.p,p=e.m,c=e.z,r=e.J,h=e.A,l=e.am,d=e.E,m=e.h,g=e.Y,w=e.F,u=e.w},function(e){y=e.G,A=e.H}],execute:function(){const R=(e,t)=>{window.AppJSInterface?window.AppJSInterface[e](JSON.stringify(t)):window.webkit.messageHandlers&&window.webkit.messageHandlers[e].postMessage(JSON.stringify(t))};const b={appReady:()=>new Promise(((e,t)=>{const a=setInterval((()=>{window.AppJSInterface||window.webkit&&window.webkit.messageHandlers?(clearInterval(a),e("success")):t("Jsbridge初始化失败：找不到window.AppJSInterface或者window.webkit.messageHandlers")}),100)})),showNavMask(e){return this.appReady().then((()=>{R("showNavShadow",{visible:e})})).catch((e=>{}))},getNativeCookies(e){return this.appReady().then((()=>{R("getCookies",{cbname:e})})).catch((e=>new Error("调用失败")))},shareConfig(e){this.appReady().then((()=>{let t;t="image"===e.type?{type:"image",link:e.link,cbname:e.cbname}:{img:e.img,title:e.title,desc:e.desc,link:e.link,cbname:e.cbname},R("configWXShare",t)})).catch((e=>{}))},callLogout(e){return this.appReady().then((()=>{R("logout",{cbname:e})})).catch((e=>{}))},importCustomersFromNative(e){return this.appReady().then((()=>{R("importCustomers",{cbname:e})})).catch((e=>{}))},callImage(e){this.appReady().then((()=>{R("choosePhoto",{cbname:e,limit:"30M"})})).catch((e=>{}))},openPDFWithUrl(e,t){this.appReady().then((()=>{R("openPDFDoc",{title:e,link:t})})).catch((e=>{}))},openWebView(e,t,a="true"){this.appReady().then((()=>{R("openWebView",{title:e,link:t,showProgress:a})})).catch((e=>{}))},openNewWebForShare({link:e,title:t,desc:a,img:i}){this.appReady().then((()=>{R("openNewWebForShare",{link:e,title:t,desc:a,img:i})})).catch((e=>{}))},goback(){this.appReady().then((()=>{R("goback","")})).catch((e=>{}))},closeWebView(e){let a={cbname:""};t.exports.isEmpty(a)||(a={...a,...e}),this.appReady().then((()=>{R("closeWebview",a)})).catch((e=>{}))},downloadImg(e){this.appReady().then((()=>{R("downloadImg",e)})).catch((e=>{}))},jumpProduct(e){this.appReady().then((()=>{R("jumpProduct",e)})).catch((e=>{}))},jumpSignResult(){this.appReady().then((()=>{R("jumpSignResult","")})).catch((e=>{}))},downloadVideo(e){this.appReady().then((()=>{R("downloadVideo",e)})).catch((e=>{}))},downloadImgs(e){this.appReady().then((()=>{R("downloadImgs",e)})).catch((e=>{}))},openWeiXin(){this.appReady().then((()=>{R("openWeiXin","")})).catch((e=>{}))},previewImgs(e){this.appReady().then((()=>{R("previewImgs",e)})).catch((e=>{}))},copyToClipboard(e){this.appReady().then((()=>{R("copyToClipboard",e)})).catch((e=>{}))},shareWXForMoments(e){this.appReady().then((()=>{R("shareWXForMoments",e)})).catch((e=>{}))},previewVideo(e){this.appReady().then((()=>{R("previewVideo",e)})).catch((e=>{}))},getContacts(e){return this.appReady().then((()=>{R("na_getContacts",{cbname:e})})).catch((e=>{}))},getLocation(e){this.appReady().then((()=>R("na_startLocation",{param:e}))).catch((e=>{}))}};const k={class:"com-za-share-overlay"},C={class:"block"},v=["src"],S=a({props:{show:{type:Boolean,default:!1},text:{type:String,default:"点击左上角···转发分享~"}},emits:["on-close"],setup(e,{emit:t}){const a=()=>{t("on-close",!1)};return(t,d)=>{const m=i("van-overlay");return s(),n("div",k,[o(m,{show:e.show,"z-index":"999999999",onClick:a},{default:p((()=>[c("div",{class:"wrapper",onClick:d[0]||(d[0]=l((()=>{}),["stop"]))},[c("div",C,r(e.text),1),c("img",{src:h("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAADqCAMAAABUZB2/AAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMAA0IJ+AYTHPIkINCmF4IN/Hx1SCgLw2OhmzUrGdZVOatMD8q2lnDs5t2xjIhaUC/iaZExvGxePgkCneYAAAXCSURBVHja7dzZdtowEAbgX17wim1sY/Z93wkQmPd/stKmaWkCwT3H8vgi3yVXOkiWRqORwO5lB3Zr6oGZ7hIp4OWfiCgCK8Ohqy04tfb00waMFJN+qYHPRqM3r2AT0rsQTMSB/qiAh7qkvzywKCV0YwUOdoduTcCgOad/NJC/yKR/uchdLaAP+sibR5+MkS9Rp89OyJU/pjsS5Knt0D0OchTv6a4O8nOZ0X0L5Kar0QNz5GUa0CMz5GRFj2nIhd6nryAPpYS+pEM+u0NfG0K63ZyeKEO2yKRnbEh21uipGHJVKIUjZBINSqMHiapjSkWBPOURpRNBGmtBKW0hS29GaW0gyVaj1GqQ4zWg9F4gxZpSkJsb0F1KQXJuQG12w8PSMSklDxKVjtvptTEzemKFHPitweuqv6AbXLmBC93gyg2IGb0bnxYBU26gf7sDFrZS89xknndu4ExvZmX8pV7Hyxn5KdMVe0J9RD8dwMqjK0cHqyYRmTF4iRlRDdzq1Ae7zb4EdqULvn379u1b8dWcM9i59AJ2ulIGN1+A32rWBbsxfwHRlcXfH3EBYjokgQJuYmz64KeD3aYABX6qRm1wK02W+HalNwZgF5EDdkaFPxlQCMqpAKv4hDyw888WuFVRAPUF/yqODvH3BkQT7Hoq2A21Gf/IbI1OKAD+7rCn/DtQVKgOdsqyADOVTDrQ2vl46rBqQwofcAIDCSmYHo74iq+RDRlczUASHDFxLCQ0gGLhseYU2es10Q+2KOv4pVlRsQgueKQECbo0gt3GrWrDEaiJ+03WDsiaAbXjCXwk8ELug0rUNTL2oikQuEfp7HCXXUbG1lTBAwLxyPjcNgsZU4ALHnM/94jYUxOZCp+E7UNP/fRTw0G2zloX/0rx7wtkqSxQxhNTauDWsb5DlsQoKeMZa1/5MEpWyFI83/v4X8bKQKaGLTznd2sSZ+zVWSCFHS1u2mAuBTIUB5qBFITr4Y+BuUSWxCbE/yvbyJBAWkqtjd82TWRq6kRIJ6HLnxFBMbKU0BbphPUW3vjrPjKlD3T2PZeK1LaKjl/qSYxM1fcKUtKoip/8uWYjUw4dkY5aH+ONP8A7rgO0KPMmCIG0jpcqrqp7ipCtSHORkks1XInXEzK2odSNqDgtAIZA9lQV/0N3HBuZEzrS6TZ6AOxFR0XWzqkzLUuqAQJVC5kbBGkb0aq0Uep0IYEQQHohJZBCRyr1cQvASxsyjIMWUtBNMmoTATlcbYs0St2SSQPIYVSRhg2BXghpjDKeatGo04Y8r8EET3VNjULIE2srPDMcVOMXyNTGM9V90INkamOCL1iGmNMWkjU108BD3aCveiMB2bY9WEPcE0/RNhsCuah25hY+UoU+ox1K0biHPBhJRxihgb8E1qaC9cQGxhQiHwY8mqDpXRDXmgjnNXjvec1hpYq8KG6ECnmY0gohHdA28MsOOVM8BVFjc5t9iIpwylUzp+BXYj/41OsFOI5/pQ7YDdcRuBWgPAOWtuSvvN2aDfArs9f/6m4BPs9pEYoLq2v+soQilMVvi7B6bsxX8Cuzz1PN0RHslrQGu2qFPZSJ+wbYjWkCdu3GEMysAsyVIgn467CFt2fvjFIBKizF6MRfYRnPFwW4x1Riv0OknviDKYRFCCtFpQVm5Sl7HAOMixBERB32e20W+5YPUDt79kGJcuKwrxk+BPuAsGch2L0U4YkbKOyBzGDJ/3mKRRFeTDD4L/dVChDiK2QWYESs2LMhahFu3jboAHaDOfvaGZf4XyooLRY2uLVHI/Y/og2dfd8ZaQVYMTyqgJkO8O873T7/tVvbZH+78cpiP/C0R+yTdUHej1TX7MF1WIBJygqIPTkGbNi3fMMD/yQFl1ywsxL2OKZbgEO+nWay/w/QG+yHW+oGYE+X9vlDKaA7Zw8hFJ//XKmpOfxHOnaH/cOoHvlfsBRLjf8tNNGYFaGMrgC1CAXwA5uZT4G1yHw0AAAAAElFTkSuQmCC"),alt:""},null,8,v)])])),_:1},8,["show"])])}}});e("_",a({props:{title:{type:String,default:""},desc:{type:String,default:""},link:{type:String,default:""},img:{type:String,default:""},imgUrl:{type:String,default:""}},setup(e){const t=e,a=d(!1),i=()=>{a.value=!1},p=()=>{y()?a.value=!0:A()&&b.shareConfig({img:t.img,title:t.title,desc:t.desc,link:t.link})};return m((()=>{y()&&u.ready((()=>{const e={...t,success:()=>{}};u.updateAppMessageShareData(e),u.updateTimelineShareData(e)}))})),(e,t)=>(s(),n(w,null,[c("span",{class:"com-share",onClick:p},[g(e.$slots,"default")]),o(S,{show:a.value,onOnClose:i},null,8,["show"])],64))}}))}}}))}();
