!function(){var e=document.createElement("style");e.innerHTML=".file-preview-popup-wrap .custom-provider{height:100%}.file-preview-popup-wrap .custom-provider .attachment-list{margin:.13333rem .42667rem .77333rem}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item{border-bottom:1px solid #eeeeee;line-height:.6rem;padding:.42667rem 0px;display:flex;justify-content:space-between;align-items:center}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-name{font-size:.42667rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-icon{min-width:1.14667rem;text-align:right}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-icon .svg-icon{display:inline-block;width:.42667rem;height:.42667rem;font-size:.42667rem}.file-preview-popup-wrap .tab{height:1.41333rem;width:100%}.file-preview-popup-wrap .tab .van-tab{padding:.13333rem var(--zaui-card-border, .4rem) 0px}.file-preview-popup-wrap .tab .van-tab__text{font-size:.4rem!important;font-family:PingFangSC-Medium,PingFang SC!important;font-weight:500}.file-preview-popup-wrap .tab .van-tab--active .van-tab__text{color:var(--van-primary-color)!important}.file-preview-popup-wrap .tab .van-tabs__line{background:var(--van-primary-color)!important}.file-preview-popup-wrap .list{width:100%;height:calc(100% - 3.04rem);overflow-y:scroll}.file-preview-popup-wrap .list .item .com-file-preview .pdf-wapper .viewerContainer{min-height:calc(100vh - 3.04rem)}.file-preview-popup-wrap .footer{display:flex;align-items:center;justify-content:center;padding:0 var(--zaui-card-border, .4rem);position:absolute;width:100%;bottom:0;background-color:#fff;z-index:1;padding:.21333rem .26667rem}.file-preview-popup-wrap .footer .pro-shadow-button{width:100%;height:1.17333rem}.file-preview-popup-wrap .footer .van-button{font-size:.45333rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff;line-height:.64rem}\n",document.head.appendChild(e),System.register(["./index-legacy-75e9f289.js","./theme-legacy-14f266cb.js","./index-legacy-e1109605.js","./utils-legacy-1fcf2866.js","./pdfh5-legacy-783b46b8.js","./infoCollection-legacy-b5bcfcd4.js","./useStorage-legacy-3d98f9f5.js","./trial-legacy-7e9b43f4.js"],(function(e,t){"use strict";var a,i,l,o,r,n,s,p,c,u,d,m,v,f,h,w,g,b,y,x,C,k;return{setters:[function(e){a=e.d,i=e.aW,l=e.aZ,o=e.r,r=e.x,n=e.a8,s=e.aO,p=e.b,c=e.c,u=e.e,d=e.w,m=e.f,v=e.j,f=e.i,h=e.l,w=e.g,g=e.F,b=e.h,y=e.t},function(e){x=e.u},function(e){C=e.default},function(e){k=e.o},function(){},function(){},function(){},function(){}],execute:function(){const j={key:0,class:"item"},P={key:1,class:"attachment-list"},S=["onClick"],R={class:"attachment-list-item-name"},T={class:"attachment-list-item-icon"},F={class:"footer"};e("default",a({props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0},isOnlyView:{type:Boolean,default:!1}},emits:["update:show","submit","onCloseFilePreviewByMask"],setup(e,{emit:a}){const _=e,z=i((()=>l((()=>t.import("./index-legacy-75e9f289.js").then((function(e){return e.bm}))),void 0))),M=x(),N=o(!0),D=o(_.show),H=o(_.contentList.map(((e,t)=>({...e,disabled:!0,readDisabled:!0})))),O=o(_.activeIndex),U=o(0),B=o(null),L=r((()=>H.value?.[O.value]?.attachmentList)),$=r((()=>H.value[O.value]?.readDisabled)),I=r((()=>!(O.value>=_.forceReadCound-1)&&(!(U.value>=_.forceReadCound)&&(U.value<_.forceReadCound&&O.value!==_.forceReadCound-1)))),E=()=>{O.value+=1},V=()=>{_.isOnlyView?a("update:show",!1):(a("update:show",!1),a("submit"))};n((()=>_),(()=>{D.value=_.show,O.value=_.activeIndex}),{deep:!0,immediate:!0});const A=e=>{if(e){const t=e.target?.scrollHeight||e.scrollHeight,a=e.target?.scrollTop||e.scrollTop,i=e.target?.clientHeight||e.clientHeight;Math.floor(t-a-15)<=i&&N.value&&H.value[O.value].readDisabled&&(H.value[O.value].disabled=!1,H.value[O.value].readDisabled=!1,H.value[O.value+1].disabled=!1,U.value+=1)}};return n((()=>O.value),(()=>{N.value=!1,_.show&&(U.value>=_.forceReadCound&&H.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),setTimeout((()=>{N.value=!0}),800)),s((()=>{setTimeout((()=>{A(B.value)}),2e3)}))}),{immediate:!0}),(t,i)=>{const l=p("ProTab"),o=p("ProSvg"),r=p("van-config-provider"),n=p("ProPopup");return c(),u(n,{show:D.value,"onUpdate:show":i[1]||(i[1]=e=>D.value=e),class:"file-preview-popup-wrap",closeable:!1,onClose:i[2]||(i[2]=e=>a("onCloseFilePreviewByMask"))},{default:d((()=>[m(r,{"theme-vars":h(M),class:"custom-provider"},{default:d((()=>[D.value?(c(),u(l,{key:0,active:O.value,"onUpdate:active":i[0]||(i[0]=e=>O.value=e),list:H.value.map(((e,t)=>({title:e.attachmentName,disabled:t!=O.value&&(e.disabled||!1),slotName:`guarantee-${t}`}))),class:"tab"},null,8,["active","list"])):v("",!0),f("div",{ref_key:"previewRef",ref:B,class:"list",onScroll:A},[1===h(L).length?(c(),w("div",j,[(c(),u(h(z),{key:h(L)[0].attachmentName,content:h(L)[0].attachmentUri,type:h(L)[0].attachmentType,"forbid-click":!0},null,8,["content","type"]))])):(c(),w("div",P,[(c(!0),w(g,null,b(h(L),((e,t)=>(c(),w("div",{key:t,class:"attachment-list-item",onClick:t=>(e=>{const t={fileType:e.attachmentType,fileUri:e.attachmentUri};k(t)})(e)},[f("div",R,y(e.attachmentName),1),f("div",T,[m(o,{name:"arrow-right"})])],8,S)))),128))]))],544),f("div",F,[h(I)?(c(),u(C,{key:0,shadow:!1,"theme-vars":h(M),disabled:h($),class:"right",text:`${e.beforeReadOverText}(${O.value+1}/${e.forceReadCound})`,onClick:E},null,8,["theme-vars","disabled","text"])):(c(),u(C,{key:1,disabled:h($),shadow:!1,"theme-vars":h(M),text:_.text,onClick:V},null,8,["disabled","theme-vars","text"]))])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}}))}}}))}();
