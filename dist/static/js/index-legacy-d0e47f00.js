!function(){var e=document.createElement("style");e.innerHTML=".file-preview-popup-wrap .custom-provider{height:100%}.file-preview-popup-wrap .custom-provider .attachment-list{margin:.13333rem .42667rem .77333rem}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item{border-bottom:1px solid #eeeeee;line-height:.6rem;padding:.42667rem 0px;display:flex;justify-content:space-between;align-items:center}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-name{font-size:.42667rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-icon{min-width:1.14667rem;text-align:right}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-icon .svg-icon{display:inline-block;width:.42667rem;height:.42667rem;font-size:.42667rem}.file-preview-popup-wrap .tab{height:1.41333rem;width:100%}.file-preview-popup-wrap .tab .van-tab{padding:.13333rem var(--zaui-card-border, .4rem) 0px}.file-preview-popup-wrap .tab .van-tab__text{font-size:.4rem!important;font-family:PingFangSC-Medium,PingFang SC!important;font-weight:500}.file-preview-popup-wrap .tab .van-tab--active .van-tab__text{color:var(--van-primary-color)!important}.file-preview-popup-wrap .tab .van-tabs__line{background:var(--van-primary-color)!important}.file-preview-popup-wrap .list{width:100%;height:calc(100% - 3.04rem);overflow-y:scroll}.file-preview-popup-wrap .list .item,.file-preview-popup-wrap .list .item .com-file-preview .pdf-wapper,.file-preview-popup-wrap .list .item .com-file-preview .pdf-wapper .viewerContainer{height:100%}.file-preview-popup-wrap .footer{display:flex;align-items:center;justify-content:center;padding:0 var(--zaui-card-border, .4rem);position:absolute;width:100%;bottom:0;background-color:#fff;z-index:1;padding:.21333rem .26667rem}.file-preview-popup-wrap .footer .pro-shadow-button{width:100%;height:1.17333rem}.file-preview-popup-wrap .footer .van-button{font-size:.45333rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff;line-height:.64rem}\n",document.head.appendChild(e),System.register(["./index-legacy-b3b7dca5.js","./theme-legacy-14f266cb.js","./index-legacy-634e0100.js","./utils-legacy-0742b968.js","./pdfh5-legacy-9f98dc45.js","./infoCollection-legacy-b66aa230.js","./trial-legacy-5750c4bf.js"],(function(e,t){"use strict";var i,a,l,o,r,n,p,s,c,d,u,m,v,f,h,w,g,b,y,C,x,k,S,j,R;return{setters:[function(e){i=e.d,a=e.bY,l=e.bZ,o=e.r,r=e.E,n=e.an,p=e.b6,s=e.c,c=e.e,d=e.w,u=e.g,m=e.a7,v=e.k,f=e.j,h=e.h,w=e.F,g=e.i,b=e.t,y=e.f,C=e.a5,x=e.V,k=e.a8},function(e){S=e.u},function(e){j=e.P},function(e){R=e.o},function(){},function(){},function(){}],execute:function(){const _={key:0,class:"item"},F={key:1,class:"attachment-list"},P=["onClick"],T={class:"attachment-list-item-name"},z={class:"attachment-list-item-icon"},D={class:"footer"};e("default",i({__name:"index",props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0},isOnlyView:{type:Boolean,default:!1}},emits:["update:show","submit","onCloseFilePreviewByMask"],setup(e,{emit:i}){const L=e,M=a((()=>l((()=>t.import("./index-legacy-b3b7dca5.js").then((function(e){return e.cG}))),void 0))),E=S(),H=o(!0),B=o(L.show),N=o(L.contentList.map(((e,t)=>({...e,disabled:!0,readDisabled:!0})))),O=o(L.activeIndex),$=o(0),I=o(null),U=r((()=>{var e,t;return null===(e=N.value)||void 0===e||null===(t=e[O.value])||void 0===t?void 0:t.attachmentList})),V=r((()=>{var e;return null===(e=N.value[O.value])||void 0===e?void 0:e.readDisabled})),q=r((()=>!(O.value>=L.forceReadCound-1)&&(!($.value>=L.forceReadCound)&&($.value<L.forceReadCound&&O.value!==L.forceReadCound-1)))),A=()=>{O.value+=1},G=()=>{L.isOnlyView?i("update:show",!1):(i("update:show",!1),i("submit"))};n((()=>L),(()=>{B.value=L.show,O.value=L.activeIndex}),{deep:!0,immediate:!0});const Y=e=>{if(console.log("el",e),e){var t,i,a;const l=(null===(t=e.target)||void 0===t?void 0:t.scrollHeight)||e.scrollHeight,o=(null===(i=e.target)||void 0===i?void 0:i.scrollTop)||e.scrollTop,r=(null===(a=e.target)||void 0===a?void 0:a.clientHeight)||e.clientHeight;Math.floor(l-o-15)<=r&&H.value&&N.value[O.value].readDisabled&&(N.value[O.value].disabled=!1,N.value[O.value].readDisabled=!1,N.value[O.value+1].disabled=!1,$.value+=1)}};return n((()=>O.value),(()=>{H.value=!1,L.show&&($.value>=L.forceReadCound&&N.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),setTimeout((()=>{H.value=!0}),800)),p((()=>{setTimeout((()=>{const e=document.querySelector(".viewerContainer");e&&(e.removeEventListener("scroll",Y),Y(e),e.addEventListener("scroll",Y))}),2e3)}))}),{immediate:!0}),(t,a)=>{const l=C,o=x,r=k;return s(),c(r,{show:u(B),"onUpdate:show":a[1]||(a[1]=e=>m(B)?B.value=e:null),class:"file-preview-popup-wrap",closeable:!1,onClose:a[2]||(a[2]=e=>i("onCloseFilePreviewByMask"))},{default:d((()=>[u(B)?(s(),c(l,{key:0,active:u(O),"onUpdate:active":a[0]||(a[0]=e=>m(O)?O.value=e:null),list:u(N).map(((e,t)=>({title:e.attachmentName,disabled:t!=u(O)&&(e.disabled||!1),slotName:`guarantee-${t}`}))),class:"tab"},null,8,["active","list"])):v("",!0),f("div",{ref_key:"previewRef",ref:I,class:"list"},[1===u(U).length?(s(),h("div",_,[(s(),c(u(M),{key:u(U)[0].materialSourceDesc,content:u(U)[0].materialContent,type:u(U)[0].materialSource,"forbid-click":!0},null,8,["content","type"]))])):(s(),h("div",F,[(s(!0),h(w,null,g(u(U),((e,t)=>(s(),h("div",{key:t,class:"attachment-list-item",onClick:t=>(e=>{const t={fileType:e.materialSource,fileUri:e.materialContent};R(t)})(e)},[f("div",T,b(e.materialSourceDesc),1),f("div",z,[y(o,{name:"arrow-right"})])],8,P)))),128))]))],512),f("div",D,[u(q)?(s(),c(j,{key:0,shadow:!1,"theme-vars":u(E),disabled:u(V),class:"right",text:`${e.beforeReadOverText}(${u(O)+1}/${e.forceReadCound})`,onClick:A},null,8,["theme-vars","disabled","text"])):(s(),c(j,{key:1,disabled:u(V),shadow:!1,"theme-vars":u(E),text:L.text,onClick:G},null,8,["disabled","theme-vars","text"]))])])),_:1},8,["show"])}}}))}}}))}();
