!function(){var e=document.createElement("style");e.innerHTML=".file-preview-popup-wrap .custom-provider{height:100%}.file-preview-popup-wrap .custom-provider .attachment-list{margin:.13333rem .42667rem .77333rem}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item{border-bottom:1px solid #eeeeee;line-height:.6rem;padding:.42667rem 0px;display:flex;justify-content:space-between;align-items:center}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-name{font-size:.42667rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-icon{min-width:1.14667rem;text-align:right}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-icon .svg-icon{display:inline-block;width:.42667rem;height:.42667rem;font-size:.42667rem}.file-preview-popup-wrap .tab{height:1.41333rem;width:100%}.file-preview-popup-wrap .tab .van-tab{padding:.13333rem var(--zaui-card-border, .4rem) 0px}.file-preview-popup-wrap .tab .van-tab__text{font-size:.4rem!important;font-family:PingFangSC-Medium,PingFang SC!important;font-weight:500}.file-preview-popup-wrap .tab .van-tab--active .van-tab__text{color:var(--van-primary-color)!important}.file-preview-popup-wrap .tab .van-tabs__line{background:var(--van-primary-color)!important}.file-preview-popup-wrap .list{width:100%;height:calc(100% - 3.04rem);overflow-y:scroll}.file-preview-popup-wrap .list .item,.file-preview-popup-wrap .list .item .com-file-preview .pdf-wapper,.file-preview-popup-wrap .list .item .com-file-preview .pdf-wapper .viewerContainer{height:100%}.file-preview-popup-wrap .footer{display:flex;align-items:center;justify-content:center;padding:0 var(--zaui-card-border, .4rem);position:absolute;width:100%;bottom:0;background-color:#fff;z-index:1;padding:.21333rem .26667rem}.file-preview-popup-wrap .footer .pro-shadow-button{width:100%;height:1.17333rem}.file-preview-popup-wrap .footer .van-button{font-size:.45333rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff;line-height:.64rem}\n",document.head.appendChild(e),System.register(["./theme-legacy-691dfb9a.js","./index-legacy-a1d31871.js","./utils-legacy-95d049ef.js","./index-legacy-a9759f65.js"],(function(e){"use strict";var t,a,i,l,r,o,n,p,s,d,c,u,m,v,f,h,w,g,b;return{setters:[function(e){t=e.u},function(e){a=e.P},function(e){i=e.o},function(e){l=e.d,r=e.r,o=e.y,n=e.a8,p=e.b,s=e.c,d=e.e,c=e.w,u=e.f,m=e.j,v=e.i,f=e.l,h=e.g,w=e.F,g=e.h,b=e.t}],execute:function(){const y={key:0,class:"item"},x={key:1,class:"attachment-list"},C=["onClick"],k={class:"attachment-list-item-name"},P={class:"attachment-list-item-icon"},R={class:"footer"};e("_",l({props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0},isOnlyView:{type:Boolean,default:!1}},emits:["update:show","submit","onCloseFilePreviewByMask"],setup(e,{emit:l}){const S=e,F=t(),_=r(S.show),T=r(S.contentList.map(((e,t)=>({...e,disabled:!0,readDisabled:!0})))),j=r(S.activeIndex),z=r(0),M=r(null),N=o((()=>T.value?.[j.value]?.attachmentList)),D=o((()=>T.value[j.value]?.readDisabled)),U=o((()=>!(j.value>=S.forceReadCound-1)&&(!(z.value>=S.forceReadCound)&&(z.value<S.forceReadCound&&j.value!==S.forceReadCound-1)))),B=()=>{j.value+=1},L=()=>{S.isOnlyView?l("update:show",!1):(l("update:show",!1),l("submit"))};n((()=>S),(()=>{_.value=S.show,j.value=S.activeIndex}),{deep:!0,immediate:!0});const O=e=>{e&&Math.floor(e.target.scrollHeight-e.target.scrollTop)===e.target.clientHeight&&T.value[j.value].readDisabled&&(T.value[j.value].disabled=!1,T.value[j.value].readDisabled=!1,T.value[j.value+1].disabled=!1,z.value+=1)};return n((()=>j.value),(()=>{S.show&&(z.value>=S.forceReadCound&&T.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),M.value&&(M.value.scrollTop=0))}),{immediate:!0}),(t,r)=>{const o=p("ProTab"),n=p("ProFilePreview"),z=p("ProSvg"),$=p("van-config-provider"),H=p("ProPopup");return s(),d(H,{show:_.value,"onUpdate:show":r[1]||(r[1]=e=>_.value=e),class:"file-preview-popup-wrap",closeable:!1,onClose:r[2]||(r[2]=e=>l("onCloseFilePreviewByMask"))},{default:c((()=>[u($,{"theme-vars":f(F),class:"custom-provider"},{default:c((()=>[_.value?(s(),d(o,{key:0,active:j.value,"onUpdate:active":r[0]||(r[0]=e=>j.value=e),list:T.value.map(((e,t)=>({title:e.attachmentName,disabled:t!=j.value&&(e.disabled||!1),slotName:`guarantee-${t}`}))),class:"tab"},null,8,["active","list"])):m("",!0),v("div",{ref_key:"previewRef",ref:M,class:"list",onScroll:O},[1===f(N).length?(s(),h("div",y,[(s(),d(n,{key:f(N)[0].attachmentName,content:f(N)[0].attachmentUri,type:f(N)[0].attachmentType,"forbid-click":!0},null,8,["content","type"]))])):(s(),h("div",x,[(s(!0),h(w,null,g(f(N),((e,t)=>(s(),h("div",{key:t,class:"attachment-list-item",onClick:t=>(e=>{const t={fileType:e.attachmentType,fileUri:e.attachmentUri};i(t)})(e)},[v("div",k,b(e.attachmentName),1),v("div",P,[u(z,{name:"arrow-right"})])],8,C)))),128))]))],544),v("div",R,[f(U)?(s(),d(a,{key:0,shadow:!1,"theme-vars":f(F),disabled:f(D),class:"right",text:`${e.beforeReadOverText}(${j.value+1}/${e.forceReadCound})`,onClick:B},null,8,["theme-vars","disabled","text"])):(s(),d(a,{key:1,disabled:f(D),shadow:!1,"theme-vars":f(F),text:S.text,onClick:L},null,8,["disabled","theme-vars","text"]))])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}}))}}}))}();
