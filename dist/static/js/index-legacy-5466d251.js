!function(){var e=document.createElement("style");e.innerHTML=".file-preview-popup-wrap .custom-provider{height:100%}.file-preview-popup-wrap .custom-provider .attachment-list{margin:.13333rem .42667rem .77333rem}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item{border-bottom:1px solid #eeeeee;line-height:.6rem;padding:.42667rem 0px;display:flex;justify-content:space-between;align-items:center}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-name{font-size:.42667rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-icon{min-width:1.14667rem;text-align:right}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-icon .svg-icon{display:inline-block;width:.42667rem;height:.42667rem;font-size:.42667rem}.file-preview-popup-wrap .tab{height:1.41333rem;width:100%}.file-preview-popup-wrap .tab .van-tab{padding:0 var(--zaui-card-border, .4rem)}.file-preview-popup-wrap .tab .van-tabs__line{background:var(--van-primary-color)}.file-preview-popup-wrap .list{height:calc(100% - 2.82667rem);overflow-y:scroll}.file-preview-popup-wrap .footer{display:flex;align-items:center;justify-content:center;padding:0 var(--zaui-card-border, .4rem);position:absolute;width:100%;bottom:0;background-color:#fff;z-index:1;padding:.26667rem}.file-preview-popup-wrap .footer .pro-shadow-button{width:100%}.file-preview-popup-wrap .footer .van-button{font-size:.45333rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff;line-height:.64rem}.health-notice-preview-popup-wrap .custom-provider{height:100%}.health-notice-preview-popup-wrap .tab{height:1.41333rem;width:100%}.health-notice-preview-popup-wrap .tab .van-tab{padding:0 var(--zaui-card-border, .4rem)}.health-notice-preview-popup-wrap .tab .van-tabs__line{background:var(--van-primary-color)}.health-notice-preview-popup-wrap .list{height:calc(100% - 2.82667rem);overflow-y:scroll}.health-notice-preview-popup-wrap .footer{display:flex;align-items:center;justify-content:center;padding:0 var(--zaui-card-border, .4rem);position:absolute;width:100%;bottom:0;background-color:#fff;z-index:1;padding:.26667rem}.health-notice-preview-popup-wrap .footer .van-button--primary{background:var(--van-primary-color);border-color:var(--van-primary-color);font-size:.32rem}.health-notice-preview-popup-wrap .footer .van-button--plain.van-button--primary{color:var(--van-primary-color);background-color:#fff;margin-left:.4rem}\n",document.head.appendChild(e),System.register(["./theme-legacy-83ec434c.js","./index-legacy-4e5fafe5.js","./utils-legacy-3a470151.js","./vendor-legacy-7a787c2a.js"],(function(e){"use strict";var t,a,i,o,r,l,n,p,s,c,u,d,v,m,h,f,w,b,g,y,k;return{setters:[function(e){t=e.u,a=e.t},function(e){i=e.P},function(e){o=e.o},function(e){r=e.h,l=e.r,n=e.A,p=e.$,s=e.k,c=e.m,u=e.n,d=e.p,v=e.t,m=e.x,h=e.B,f=e.C,w=e.s,b=e.F,g=e.H,y=e.L,k=e.G}],execute:function(){const C={key:0,class:"item"},x={key:1,class:"attachment-list"},P=["onClick"],_={class:"attachment-list-item-name"},R={class:"attachment-list-item-icon"},z={class:"footer"};e("a",r({props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0},isOnlyView:{type:Boolean,default:!1}},emits:["update:show","submit","onCloseFilePreview"],setup(e,{emit:a}){const r=e,k=t(),F=l(r.show),T=l(r.contentList.map(((e,t)=>({...e,disabled:!0,readDisabled:!0})))),N=l(r.activeIndex),S=l(0),H=l(null),L=n((()=>T.value?.[N.value]?.attachmentList)),U=n((()=>T.value[N.value]?.readDisabled)),j=n((()=>!(N.value>=r.forceReadCound-1)&&(!(S.value>=r.forceReadCound)&&(S.value<r.forceReadCound&&N.value!==r.forceReadCound-1)))),I=()=>{N.value+=1},$=()=>{r.isOnlyView?a("update:show",!1):(a("update:show",!1),a("submit"))};p((()=>r),(()=>{F.value=r.show,N.value=r.activeIndex}),{deep:!0,immediate:!0});const B=e=>{e&&Math.floor(e.target.scrollHeight-e.target.scrollTop)===e.target.clientHeight&&T.value[N.value].readDisabled&&(T.value[N.value].disabled=!1,T.value[N.value].readDisabled=!1,T.value[N.value+1].disabled=!1,S.value+=1)};return p((()=>N.value),(()=>{r.show&&(S.value>=r.forceReadCound&&T.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),H.value&&(H.value.scrollTop=0))}),{immediate:!0}),(t,l)=>{const n=s("ProTab"),p=s("ProFilePreview"),S=s("ProSvg"),D=s("van-config-provider"),O=s("ProPopup");return c(),u(O,{show:F.value,"onUpdate:show":l[1]||(l[1]=e=>F.value=e),class:"file-preview-popup-wrap",closeable:!1,onClose:l[2]||(l[2]=e=>a("onCloseFilePreview"))},{default:d((()=>[v(D,{"theme-vars":f(k),class:"custom-provider"},{default:d((()=>[F.value?(c(),u(n,{key:0,active:N.value,"onUpdate:active":l[0]||(l[0]=e=>N.value=e),list:T.value.map(((e,t)=>({title:e.attachmentName,disabled:t!=N.value&&(e.disabled||!1),slotName:`guarantee-${t}`}))),class:"tab"},null,8,["active","list"])):m("",!0),h("div",{ref_key:"previewRef",ref:H,class:"list",onScroll:B},[1===f(L).length?(c(),w("div",C,[(c(),u(p,{key:f(L)[0].attachmentName,content:f(L)[0].attachmentUri,type:f(L)[0].attachmentType,"forbid-click":!0},null,8,["content","type"]))])):(c(),w("div",x,[(c(!0),w(b,null,g(f(L),((e,t)=>(c(),w("div",{key:t,class:"attachment-list-item",onClick:t=>(e=>{const t={fileType:e.attachmentType,fileUri:e.attachmentUri};o(t)})(e)},[h("div",_,y(e.attachmentName),1),h("div",R,[v(S,{name:"arrow-right"})])],8,P)))),128))]))],544),h("div",z,[f(j)?(c(),u(i,{key:0,shadow:!1,"theme-vars":f(k),disabled:f(U),class:"right",text:`${e.beforeReadOverText}(${N.value+1}/${e.forceReadCound})`,onClick:I},null,8,["theme-vars","disabled","text"])):(c(),u(i,{key:1,disabled:f(U),shadow:!1,"theme-vars":f(k),text:r.text,onClick:$},null,8,["disabled","theme-vars","text"]))])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}}));const F={class:"list"},T={class:"item"},N={class:"footer"},S=k("部分为是"),H=k("全部为否");e("_",r({props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealth"],setup(e,{emit:t}){const i=e,o=l(i.show),r=l(i.activeIndex),w=n((()=>i.contentList[r.value]?.attachmentUri)),b=l(!0),g=e=>{b.value=!1,t("update:show",!1),t("onConfirmHealth",e)};return p((()=>i),(()=>{o.value=i.show,r.value=i.activeIndex}),{deep:!0,immediate:!0}),(i,l)=>{const n=s("ProTab"),p=s("ProFilePreview"),y=s("VanButton"),k=s("van-config-provider"),C=s("ProPopup");return c(),u(C,{show:o.value,"onUpdate:show":l[3]||(l[3]=e=>o.value=e),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:l[4]||(l[4]=e=>{b.value&&t("onCloseHealth")})},{default:d((()=>[v(k,{"theme-vars":f(a),class:"custom-provider"},{default:d((()=>[o.value?(c(),u(n,{key:0,active:r.value,"onUpdate:active":l[0]||(l[0]=e=>r.value=e),list:e.contentList.map(((e,t)=>({title:e.attachmentName,slotName:`guarantee-${t}`}))),class:"tab"},null,8,["active","list"])):m("",!0),h("div",F,[h("div",T,[(c(),u(p,{key:f(w),content:f(w),type:"pdf"},null,8,["content"]))])]),h("div",N,[v(y,{type:"primary",block:"",round:"",onClick:l[1]||(l[1]=e=>g("N"))},{default:d((()=>[S])),_:1}),v(y,{type:"primary",plain:"",block:"",round:"",onClick:l[2]||(l[2]=e=>g("allFalse"))},{default:d((()=>[H])),_:1})])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}}))}}}))}();
