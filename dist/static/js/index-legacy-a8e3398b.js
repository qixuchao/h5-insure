!function(){var e=document.createElement("style");e.innerHTML=".file-preview-popup-wrap .custom-provider{height:100%}.file-preview-popup-wrap .custom-provider .attachment-list{margin:.13333rem .42667rem .77333rem}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item{border-bottom:1px solid #eeeeee;line-height:.6rem;padding:.42667rem 0px;display:flex;justify-content:space-between;align-items:center}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-name{font-size:.42667rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-icon{min-width:1.14667rem;text-align:right}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-icon .svg-icon{display:inline-block;width:.42667rem;height:.42667rem;font-size:.42667rem}.file-preview-popup-wrap .tab{height:1.41333rem;width:100%}.file-preview-popup-wrap .tab .van-tab{padding:0 var(--zaui-card-border, .4rem)}.file-preview-popup-wrap .tab .van-tabs__line{background:var(--van-primary-color)}.file-preview-popup-wrap .list{height:calc(100% - 2.82667rem);overflow-y:scroll}.file-preview-popup-wrap .footer{display:flex;align-items:center;justify-content:center;padding:0 var(--zaui-card-border, .4rem);position:absolute;width:100%;bottom:0;background-color:#fff;z-index:1;padding:.26667rem}.file-preview-popup-wrap .footer .pro-shadow-button{width:100%}.file-preview-popup-wrap .footer .van-button{font-size:.45333rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff;line-height:.64rem}\n",document.head.appendChild(e),System.register(["./theme-legacy-28dda1ed.js","./index-legacy-accbc641.js","./utils-legacy-d370bdf5.js","./vendor-legacy-67cad4db.js"],(function(e){"use strict";var t,a,i,l,r,o,n,s,d,p,c,u,m,v,h,f,w,g,b;return{setters:[function(e){t=e.u},function(e){a=e.P},function(e){i=e.o},function(e){l=e.h,r=e.r,o=e.x,n=e.Z,s=e.k,d=e.l,p=e.m,c=e.n,u=e.Q,m=e.s,v=e.z,h=e.A,f=e.y,w=e.F,g=e.E,b=e.I}],execute:function(){const y={key:0,class:"item"},x={key:1,class:"attachment-list"},k=["onClick"],C={class:"attachment-list-item-name"},P={class:"attachment-list-item-icon"},R={class:"footer"};e("_",l({props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0},isOnlyView:{type:Boolean,default:!1}},emits:["update:show","submit","onCloseFilePreviewByMask"],setup(e,{emit:l}){const S=e,T=t(),F=r(S.show),z=r(S.contentList.map(((e,t)=>({...e,disabled:!0,readDisabled:!0})))),j=r(S.activeIndex),N=r(0),_=r(null),D=o((()=>z.value?.[j.value]?.attachmentList)),M=o((()=>z.value[j.value]?.readDisabled)),U=o((()=>!(j.value>=S.forceReadCound-1)&&(!(N.value>=S.forceReadCound)&&(N.value<S.forceReadCound&&j.value!==S.forceReadCound-1)))),B=()=>{j.value+=1},I=()=>{S.isOnlyView?l("update:show",!1):(l("update:show",!1),l("submit"))};n((()=>S),(()=>{F.value=S.show,j.value=S.activeIndex}),{deep:!0,immediate:!0});const L=e=>{e&&Math.floor(e.target.scrollHeight-e.target.scrollTop)===e.target.clientHeight&&z.value[j.value].readDisabled&&(z.value[j.value].disabled=!1,z.value[j.value].readDisabled=!1,z.value[j.value+1].disabled=!1,N.value+=1)};return n((()=>j.value),(()=>{S.show&&(N.value>=S.forceReadCound&&z.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),_.value&&(_.value.scrollTop=0))}),{immediate:!0}),(t,r)=>{const o=s("ProTab"),n=s("ProFilePreview"),N=s("ProSvg"),O=s("van-config-provider"),$=s("ProPopup");return d(),p($,{show:F.value,"onUpdate:show":r[1]||(r[1]=e=>F.value=e),class:"file-preview-popup-wrap",closeable:!1,onClose:r[2]||(r[2]=e=>l("onCloseFilePreviewByMask"))},{default:c((()=>[u(O,{"theme-vars":h(T),class:"custom-provider"},{default:c((()=>[F.value?(d(),p(o,{key:0,active:j.value,"onUpdate:active":r[0]||(r[0]=e=>j.value=e),list:z.value.map(((e,t)=>({title:e.attachmentName,disabled:t!=j.value&&(e.disabled||!1),slotName:`guarantee-${t}`}))),class:"tab"},null,8,["active","list"])):m("",!0),v("div",{ref_key:"previewRef",ref:_,class:"list",onScroll:L},[1===h(D).length?(d(),f("div",y,[(d(),p(n,{key:h(D)[0].attachmentName,content:h(D)[0].attachmentUri,type:h(D)[0].attachmentType,"forbid-click":!0},null,8,["content","type"]))])):(d(),f("div",x,[(d(!0),f(w,null,g(h(D),((e,t)=>(d(),f("div",{key:t,class:"attachment-list-item",onClick:t=>(e=>{const t={fileType:e.attachmentType,fileUri:e.attachmentUri};i(t)})(e)},[v("div",C,b(e.attachmentName),1),v("div",P,[u(N,{name:"arrow-right"})])],8,k)))),128))]))],544),v("div",R,[h(U)?(d(),p(a,{key:0,shadow:!1,"theme-vars":h(T),disabled:h(M),class:"right",text:`${e.beforeReadOverText}(${j.value+1}/${e.forceReadCound})`,onClick:B},null,8,["theme-vars","disabled","text"])):(d(),p(a,{key:1,disabled:h(M),shadow:!1,"theme-vars":h(T),text:S.text,onClick:I},null,8,["disabled","theme-vars","text"]))])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}}))}}}))}();
