!function(){var e=document.createElement("style");e.innerHTML=".file-preview-popup-wrap .custom-provider{height:100%}.file-preview-popup-wrap .tab{height:1.41333rem;width:100%}.file-preview-popup-wrap .tab .van-tab{padding:0 var(--zaui-card-border, .4rem)}.file-preview-popup-wrap .tab .van-tabs__line{background:var(--van-primary-color)}.file-preview-popup-wrap .list{height:calc(100% - 2.82667rem);overflow-y:scroll}.file-preview-popup-wrap .footer{display:flex;align-items:center;justify-content:center;padding:0 var(--zaui-card-border, .4rem);position:absolute;width:100%;bottom:0;background-color:#fff;z-index:1;padding:.26667rem}.file-preview-popup-wrap .footer .van-button{background:var(--van-primary-color);border-color:var(--van-primary-color);font-size:.32rem}\n",document.head.appendChild(e),System.register(["./theme-legacy-7ef84ea9.js","./vendor-legacy-5ea3e76d.js"],(function(e){"use strict";var a,t,r,l,o,i,d,u,n,p,s,v,c,f,b;return{setters:[function(e){a=e.t},function(e){t=e.k,r=e.r,l=e.b,o=e.$,i=e.p,d=e.s,u=e.t,n=e.v,p=e.S,s=e.y,v=e.C,c=e.E,f=e.G,b=e.M}],execute:function(){const m={class:"item"},w={class:"footer"};e("_",t({props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0}},emits:["update:show","submit","onCloseFilePreview"],setup(e,{emit:t}){const h=e,y=r(h.show),g=r(h.contentList.map(((e,a)=>({...e,disabled:!0,readDisabled:!0})))),k=r(h.activeIndex),C=r(0),x=r(null),R=l((()=>g.value?.[k.value]?.attachmentUri)),_=l((()=>g.value[k.value]?.readDisabled)),P=l((()=>!(k.value>=h.forceReadCound-1)&&(!(C.value>=h.forceReadCound)&&(C.value<h.forceReadCound&&k.value!==h.forceReadCound-1)))),T=()=>{k.value+=1},D=()=>{t("update:show",!1),t("submit")};o((()=>h),(()=>{y.value=h.show,k.value=h.activeIndex}),{deep:!0,immediate:!0});const S=e=>{e&&Math.floor(e.target.scrollHeight-e.target.scrollTop)===e.target.clientHeight&&g.value[k.value].readDisabled&&(g.value[k.value].disabled=!1,g.value[k.value].readDisabled=!1,g.value[k.value+1].disabled=!1,C.value+=1)};return o((()=>k.value),(()=>{h.show&&(C.value>=h.forceReadCound&&g.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),x.value&&(x.value.scrollTop=0))}),{immediate:!0}),(r,l)=>{const o=i("ProTab"),C=i("ProFilePreview"),$=i("VanButton"),z=i("van-config-provider"),N=i("ProPopup");return d(),u(N,{show:y.value,"onUpdate:show":l[1]||(l[1]=e=>y.value=e),class:"file-preview-popup-wrap",closeable:!1,onClose:l[2]||(l[2]=e=>t("onCloseFilePreview"))},{default:n((()=>[p(z,{"theme-vars":c(a),class:"custom-provider"},{default:n((()=>[y.value?(d(),u(o,{key:0,active:k.value,"onUpdate:active":l[0]||(l[0]=e=>k.value=e),list:g.value.map(((e,a)=>({title:e.attachmentName,disabled:a!=k.value&&(e.disabled||!1),slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):s("",!0),v("div",{ref_key:"previewRef",ref:x,class:"list",onScroll:S},[v("div",m,[(d(),u(C,{key:c(R),content:c(R),type:"pdf","forbid-click":!0},null,8,["content"]))])],544),v("div",w,[c(P)?(d(),u($,{key:0,disabled:c(_),type:"primary",block:"",round:"",onClick:T},{default:n((()=>[f(b(`${e.beforeReadOverText}(${k.value+1}/${e.forceReadCound})`),1)])),_:1},8,["disabled"])):(d(),u($,{key:1,disabled:c(_),type:"primary",block:"",round:"",onClick:D},{default:n((()=>[f(b(h.text),1)])),_:1},8,["disabled"]))])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}}))}}}))}();
