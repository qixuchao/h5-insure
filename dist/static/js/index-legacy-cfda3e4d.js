!function(){var e=document.createElement("style");e.innerHTML=".file-preview-popup-wrap .custom-provider{height:100%}.file-preview-popup-wrap .custom-provider .attachment-list{margin:.13333rem .42667rem .77333rem}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item{border-bottom:1px solid #eeeeee;line-height:.6rem;padding:.42667rem 0px;display:flex;justify-content:space-between;align-items:center}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-name{font-size:.42667rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-icon{min-width:1.14667rem;text-align:right}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-icon .svg-icon{display:inline-block;width:.42667rem;height:.42667rem;font-size:.42667rem}.file-preview-popup-wrap .tab{height:1.41333rem;width:100%}.file-preview-popup-wrap .tab .van-tab{padding:.13333rem var(--zaui-card-border, .4rem) 0px}.file-preview-popup-wrap .tab .van-tab__text{font-size:.4rem!important;font-family:PingFangSC-Medium,PingFang SC!important;font-weight:500}.file-preview-popup-wrap .tab .van-tab--active .van-tab__text{color:var(--van-primary-color)!important}.file-preview-popup-wrap .tab .van-tabs__line{background:var(--van-primary-color)!important}.file-preview-popup-wrap .list{width:100%;height:calc(100% - 3.04rem);overflow-y:scroll}.file-preview-popup-wrap .list .item,.file-preview-popup-wrap .list .item .com-file-preview .pdf-wapper,.file-preview-popup-wrap .list .item .com-file-preview .pdf-wapper .viewerContainer{height:100%}.file-preview-popup-wrap .footer{display:flex;align-items:center;justify-content:center;padding:0 var(--zaui-card-border, .4rem);position:absolute;width:100%;bottom:0;background-color:#fff;z-index:1;padding:.21333rem .26667rem}.file-preview-popup-wrap .footer .pro-shadow-button{width:100%;height:1.17333rem}.file-preview-popup-wrap .footer .van-button{font-size:.45333rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff;line-height:.64rem}\n",document.head.appendChild(e),System.register(["./index-legacy-991c023d.js","./theme-legacy-14f266cb.js","./index-legacy-85e50019.js","./utils-legacy-c9dd1ba8.js","./pdfh5-legacy-9f98dc45.js","./infoCollection-legacy-aa24b621.js","./trial-legacy-bb2044a0.js"],(function(e,t){"use strict";var a,i,l,o,r,n,p,s,c,d,u,v,m,f,h,w,g,b,y,x,C,k,T,j,R;return{setters:[function(e){a=e.d,i=e.bY,l=e.c0,o=e.r,r=e.E,n=e.am,p=e.b2,s=e.c,c=e.e,d=e.w,u=e.f,v=e.j,m=e.i,f=e.m,h=e.g,w=e.F,g=e.h,b=e.t,y=e.a5,x=e.V,C=e.bT,k=e.a7},function(e){T=e.u},function(e){j=e.default},function(e){R=e.o},function(){},function(){},function(){}],execute:function(){const F={key:0,class:"item"},S={key:1,class:"attachment-list"},_=["onClick"],P={class:"attachment-list-item-name"},z={class:"attachment-list-item-icon"},H={class:"footer"};e("default",a({props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0},isOnlyView:{type:Boolean,default:!1}},emits:["update:show","submit","onCloseFilePreviewByMask"],setup(e,{emit:a}){const L=e,M=i((()=>l((()=>t.import("./index-legacy-991c023d.js").then((function(e){return e.cF}))),void 0))),N=T(),D=o(!0),E=o(L.show),U=o(L.contentList.map(((e,t)=>({...e,disabled:!0,readDisabled:!0})))),B=o(L.activeIndex),O=o(0),$=o(null),I=r((()=>{var e,t;return null===(e=U.value)||void 0===e||null===(t=e[B.value])||void 0===t?void 0:t.attachmentList})),V=r((()=>{var e;return null===(e=U.value[B.value])||void 0===e?void 0:e.readDisabled})),q=r((()=>!(B.value>=L.forceReadCound-1)&&(!(O.value>=L.forceReadCound)&&(O.value<L.forceReadCound&&B.value!==L.forceReadCound-1)))),A=()=>{B.value+=1},Y=()=>{L.isOnlyView?a("update:show",!1):(a("update:show",!1),a("submit"))};n((()=>L),(()=>{E.value=L.show,B.value=L.activeIndex}),{deep:!0,immediate:!0});const G=e=>{if(console.log("el",e),e){var t,a,i;const l=(null===(t=e.target)||void 0===t?void 0:t.scrollHeight)||e.scrollHeight,o=(null===(a=e.target)||void 0===a?void 0:a.scrollTop)||e.scrollTop,r=(null===(i=e.target)||void 0===i?void 0:i.clientHeight)||e.clientHeight;console.log("scrollHeight",l),console.log("scrollTop",o),console.log("clientHeight",r),Math.floor(l-o-15)<=r&&D.value&&U.value[B.value].readDisabled&&(U.value[B.value].disabled=!1,U.value[B.value].readDisabled=!1,U.value[B.value+1].disabled=!1,O.value+=1)}};return n((()=>B.value),(()=>{D.value=!1,L.show&&(O.value>=L.forceReadCound&&U.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),setTimeout((()=>{D.value=!0}),800)),p((()=>{setTimeout((()=>{const e=document.querySelector(".viewerContainer");e&&(e.removeEventListener("scroll",G),G(e),e.addEventListener("scroll",G))}),2e3)}))}),{immediate:!0}),(t,i)=>{const l=y,o=x,r=C,n=k;return s(),c(n,{show:E.value,"onUpdate:show":i[1]||(i[1]=e=>E.value=e),class:"file-preview-popup-wrap",closeable:!1,onClose:i[2]||(i[2]=e=>a("onCloseFilePreviewByMask"))},{default:d((()=>[u(r,{"theme-vars":f(N),class:"custom-provider"},{default:d((()=>[E.value?(s(),c(l,{key:0,active:B.value,"onUpdate:active":i[0]||(i[0]=e=>B.value=e),list:U.value.map(((e,t)=>({title:e.attachmentName,disabled:t!=B.value&&(e.disabled||!1),slotName:`guarantee-${t}`}))),class:"tab"},null,8,["active","list"])):v("",!0),m("div",{ref_key:"previewRef",ref:$,class:"list"},[1===f(I).length?(s(),h("div",F,[(s(),c(f(M),{key:f(I)[0].attachmentName,content:f(I)[0].attachmentUri,type:f(I)[0].attachmentType,"forbid-click":!0},null,8,["content","type"]))])):(s(),h("div",S,[(s(!0),h(w,null,g(f(I),((e,t)=>(s(),h("div",{key:t,class:"attachment-list-item",onClick:t=>(e=>{const t={fileType:e.attachmentType,fileUri:e.attachmentUri};R(t)})(e)},[m("div",P,b(e.attachmentName),1),m("div",z,[u(o,{name:"arrow-right"})])],8,_)))),128))]))],512),m("div",H,[f(q)?(s(),c(j,{key:0,shadow:!1,"theme-vars":f(N),disabled:f(V),class:"right",text:`${e.beforeReadOverText}(${B.value+1}/${e.forceReadCound})`,onClick:A},null,8,["theme-vars","disabled","text"])):(s(),c(j,{key:1,disabled:f(V),shadow:!1,"theme-vars":f(N),text:L.text,onClick:Y},null,8,["disabled","theme-vars","text"]))])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}}))}}}))}();
