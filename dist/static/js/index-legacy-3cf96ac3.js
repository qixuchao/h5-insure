!function(){var e=document.createElement("style");e.innerHTML=".file-preview-popup-wrap .custom-provider{height:100%}.file-preview-popup-wrap .custom-provider .attachment-list{margin:.13333rem .42667rem .77333rem}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item{border-bottom:1px solid #eeeeee;line-height:.6rem;padding:.42667rem 0px;display:flex;justify-content:space-between;align-items:center}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-name{font-size:.42667rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-icon{min-width:1.14667rem;text-align:right}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-icon .svg-icon{display:inline-block;width:.42667rem;height:.42667rem;font-size:.42667rem}.file-preview-popup-wrap .tab{height:1.41333rem;width:100%}.file-preview-popup-wrap .tab .van-tab{padding:.13333rem var(--zaui-card-border, .4rem) 0px}.file-preview-popup-wrap .tab .van-tab__text{font-size:.4rem!important;font-family:PingFangSC-Medium,PingFang SC!important;font-weight:500}.file-preview-popup-wrap .tab .van-tab--active .van-tab__text{color:var(--van-primary-color)!important}.file-preview-popup-wrap .tab .van-tabs__line{background:var(--van-primary-color)!important}.file-preview-popup-wrap .list{width:100%;height:calc(100% - 3.04rem);overflow-y:scroll}.file-preview-popup-wrap .list .item,.file-preview-popup-wrap .list .item .com-file-preview .pdf-wapper,.file-preview-popup-wrap .list .item .com-file-preview .pdf-wapper .viewerContainer{height:100%}.file-preview-popup-wrap .footer{display:flex;align-items:center;justify-content:center;padding:0 var(--zaui-card-border, .4rem);position:absolute;width:100%;bottom:0;background-color:#fff;z-index:1;padding:.21333rem .26667rem}.file-preview-popup-wrap .footer .pro-shadow-button{width:100%;height:1.17333rem}.file-preview-popup-wrap .footer .van-button{font-size:.45333rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff;line-height:.64rem}\n",document.head.appendChild(e),System.register(["./index-legacy-d8170a83.js","./theme-legacy-14f266cb.js","./index-legacy-b0e4fde3.js","./utils-legacy-1a72731a.js","./pdfh5-legacy-9f98dc45.js","./infoCollection-legacy-8b42d852.js","./trial-legacy-bfe5372b.js"],(function(e,t){"use strict";var a,i,l,o,r,n,s,p,c,d,u,m,v,f,h,w,g,b,y,x,C,k,S,j,R,T;return{setters:[function(e){a=e.d,i=e.bY,l=e.bZ,o=e.r,r=e.E,n=e.an,s=e.b3,p=e.c,c=e.e,d=e.w,u=e.f,m=e.g,v=e.a7,f=e.k,h=e.j,w=e.h,g=e.F,b=e.i,y=e.t,x=e.a5,C=e.V,k=e.bT,S=e.a8},function(e){j=e.u},function(e){R=e.P},function(e){T=e.o},function(){},function(){},function(){}],execute:function(){const _={key:0,class:"item"},F={key:1,class:"attachment-list"},P=["onClick"],z={class:"attachment-list-item-name"},H={class:"attachment-list-item-icon"},D={class:"footer"};e("default",a({__name:"index",props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0},isOnlyView:{type:Boolean,default:!1}},emits:["update:show","submit","onCloseFilePreviewByMask"],setup(e,{emit:a}){const E=e,L=i((()=>l((()=>t.import("./index-legacy-d8170a83.js").then((function(e){return e.cE}))),void 0))),M=j(),N=o(!0),B=o(E.show),O=o(E.contentList.map(((e,t)=>({...e,disabled:!0,readDisabled:!0})))),U=o(E.activeIndex),$=o(0),I=o(null),V=r((()=>{var e,t;return null===(e=O.value)||void 0===e||null===(t=e[U.value])||void 0===t?void 0:t.attachmentList})),q=r((()=>{var e;return null===(e=O.value[U.value])||void 0===e?void 0:e.readDisabled})),A=r((()=>!(U.value>=E.forceReadCound-1)&&(!($.value>=E.forceReadCound)&&($.value<E.forceReadCound&&U.value!==E.forceReadCound-1)))),Y=()=>{U.value+=1},Z=()=>{E.isOnlyView?a("update:show",!1):(a("update:show",!1),a("submit"))};n((()=>E),(()=>{B.value=E.show,U.value=E.activeIndex}),{deep:!0,immediate:!0});const G=e=>{if(console.log("el",e),e){var t,a,i;const l=(null===(t=e.target)||void 0===t?void 0:t.scrollHeight)||e.scrollHeight,o=(null===(a=e.target)||void 0===a?void 0:a.scrollTop)||e.scrollTop,r=(null===(i=e.target)||void 0===i?void 0:i.clientHeight)||e.clientHeight;console.log("scrollHeight",l),console.log("scrollTop",o),console.log("clientHeight",r),Math.floor(l-o-15)<=r&&N.value&&O.value[U.value].readDisabled&&(O.value[U.value].disabled=!1,O.value[U.value].readDisabled=!1,O.value[U.value+1].disabled=!1,$.value+=1)}};return n((()=>U.value),(()=>{N.value=!1,E.show&&($.value>=E.forceReadCound&&O.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),setTimeout((()=>{N.value=!0}),800)),s((()=>{setTimeout((()=>{const e=document.querySelector(".viewerContainer");e&&(e.removeEventListener("scroll",G),G(e),e.addEventListener("scroll",G))}),2e3)}))}),{immediate:!0}),(t,i)=>{const l=x,o=C,r=k,n=S;return p(),c(n,{show:m(B),"onUpdate:show":i[1]||(i[1]=e=>v(B)?B.value=e:null),class:"file-preview-popup-wrap",closeable:!1,onClose:i[2]||(i[2]=e=>a("onCloseFilePreviewByMask"))},{default:d((()=>[u(r,{"theme-vars":m(M),class:"custom-provider"},{default:d((()=>[m(B)?(p(),c(l,{key:0,active:m(U),"onUpdate:active":i[0]||(i[0]=e=>v(U)?U.value=e:null),list:m(O).map(((e,t)=>({title:e.attachmentName,disabled:t!=m(U)&&(e.disabled||!1),slotName:`guarantee-${t}`}))),class:"tab"},null,8,["active","list"])):f("",!0),h("div",{ref_key:"previewRef",ref:I,class:"list"},[1===m(V).length?(p(),w("div",_,[(p(),c(m(L),{key:m(V)[0].materialSourceDesc,content:m(V)[0].materialContent,type:m(V)[0].materialSource,"forbid-click":!0},null,8,["content","type"]))])):(p(),w("div",F,[(p(!0),w(g,null,b(m(V),((e,t)=>(p(),w("div",{key:t,class:"attachment-list-item",onClick:t=>(e=>{const t={fileType:e.attachmentType,fileUri:e.attachmentUri};T(t)})(e)},[h("div",z,y(e.attachmentName),1),h("div",H,[u(o,{name:"arrow-right"})])],8,P)))),128))]))],512),h("div",D,[m(A)?(p(),c(R,{key:0,shadow:!1,"theme-vars":m(M),disabled:m(q),class:"right",text:`${e.beforeReadOverText}(${m(U)+1}/${e.forceReadCound})`,onClick:Y},null,8,["theme-vars","disabled","text"])):(p(),c(R,{key:1,disabled:m(q),shadow:!1,"theme-vars":m(M),text:E.text,onClick:Z},null,8,["disabled","theme-vars","text"]))])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}}))}}}))}();
