import{_ as e}from"./index-823b7915.js";import{m as a,s as t,t as l,v as s,z as o,u as i,r as n,P as r,o as u,C as d,U as c,x as v,E as p,F as m,N as h,I as f,H as y,J as b,O as w,e as g,a0 as C}from"./vendor-fd650291.js";import{q as k}from"./product-9ad33e98.js";import{P as x}from"./index-3728ac2a.js";import{u as P}from"./theme-467ed2f7.js";import{o as _}from"./utils-c8bf37a8.js";var N=e(a({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""}},setup(e){const a=e;return(e,i)=>{const n=t("van-image");return a.url?(l(),s(n,{key:0,width:"100%",class:"banner","lazy-load":"",src:a.url},null,8,["src"])):o("",!0)}}}),[["__scopeId","data-v-21e86b68"]]);const T={class:"pre-body"},R={class:"header"},I=["src"],j={class:"company-name"},B={class:"content"},D=y(" 为了更好地保护您的个人信息，请在使用前点击阅读、充分理解"),O=y("相关内容，我们对您使用过程中可能出现的个人信息收集、使用、共享和保护等情况进行了详细说明。 您已进入投保流程，请仔细阅读"),U=y("、投保须知、保险条款等信息，为维护您的合法权益，您的操作轨迹将被记录。 "),S={class:"footer"};var F=e(a({props:{productDetail:{type:Object,default:()=>{}}},setup(e){const a=e,s=i(),{tenantId:o=""}=s.query,y=n(!1),b=n(!1),w=r({insureConfig:{insureName:"",tenantName:""}}),g=n({title:"",link:""}),C=(e,a)=>{var t;b.value=!b.value,g.value.link=null==(t=w.insureConfig)?void 0:t[a].link,g.value.title=e.target.innerText};return u((()=>{(async()=>{const{code:e,data:t}=await k({insureCode:a.productDetail.insurerCode,tenantId:o});"10000"===e&&(w.insureConfig=t),y.value=!0})()})),(e,a)=>{var s;const o=t("ProPopup"),i=t("ProFilePreview");return l(),d(f,null,[c(o,{class:"pre-notice-wrap","close-on-click-overlay":!1,show:y.value,closeable:!1,height:"395px"},{default:v((()=>[p("div",T,[p("div",R,[p("img",{src:m("/static/assets/logo.65e1895e.png")},null,8,I),p("div",j," 由"+h(m(w).insureConfig.tenantName)+"提供保险经纪服务，"+h(m(w).insureConfig.insureName)+"承保 ",1)]),p("div",B,[D,p("span",{onClick:a[0]||(a[0]=e=>C(e,"privacyAgreement"))},"《用户隐私协议》"),O,p("span",{onClick:a[1]||(a[1]=e=>C(e,"notification"))},"《客户告知书》"),U]),p("div",S,[c(x,{shadow:!1,text:"我知道了",onClick:a[2]||(a[2]=e=>y.value=!1)})])])])),_:1},8,["show"]),c(o,{show:b.value,"onUpdate:show":a[3]||(a[3]=e=>b.value=e),class:"pre-notice-wrap",title:null==(s=g.value)?void 0:s.title,position:"bottom",style:{height:"600px"}},{default:v((()=>{var e;return[c(i,{content:null==(e=g.value)?void 0:e.link,type:"link"},null,8,["content"])]})),_:1},8,["show","title"])],64)}}}),[["__scopeId","data-v-79a863b0"]]);const L=["onClick"];var $=e(a({props:{preText:{type:String,default:""},hasBgColor:{type:Boolean,default:!0},attachementList:{type:Object,default:()=>{}}},emits:["preview-file"],setup:(e,{emit:a})=>(t,s)=>(l(),d("div",{class:w({"com-attachment-list":!0,"has-bg":e.hasBgColor})},[p("span",null,h(e.preText),1),(l(!0),d(f,null,b(e.attachementList||[],((e,t)=>(l(),d("span",{key:t,class:"attachment-item",onClick:e=>(e=>{a("preview-file",e)})(t)}," 《"+h(e.attachmentName)+"》 ",9,L)))),128))],2))}),[["__scopeId","data-v-4c895668"]]);const A={key:0,class:"item"},H={key:1,class:"attachment-list"},q=["onClick"],z={class:"attachment-list-item-name"},E={class:"attachment-list-item-icon"},V={class:"footer"},J=a({props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0},isOnlyView:{type:Boolean,default:!1}},emits:["update:show","submit","onCloseFilePreview"],setup(e,{emit:a}){const i=e,r=P(),u=n(i.show),y=n(i.contentList.map(((e,a)=>({...e,disabled:!0,readDisabled:!0})))),w=n(i.activeIndex),k=n(0),N=n(null),T=g((()=>{var e,a;return null==(a=null==(e=y.value)?void 0:e[w.value])?void 0:a.attachmentList})),R=g((()=>{var e;return null==(e=y.value[w.value])?void 0:e.readDisabled})),I=g((()=>!(w.value>=i.forceReadCound-1)&&(!(k.value>=i.forceReadCound)&&(k.value<i.forceReadCound&&w.value!==i.forceReadCound-1)))),j=()=>{w.value+=1},B=()=>{i.isOnlyView?a("update:show",!1):(a("update:show",!1),a("submit"))};C((()=>i),(()=>{u.value=i.show,w.value=i.activeIndex}),{deep:!0,immediate:!0});const D=e=>{e&&Math.floor(e.target.scrollHeight-e.target.scrollTop)===e.target.clientHeight&&y.value[w.value].readDisabled&&(y.value[w.value].disabled=!1,y.value[w.value].readDisabled=!1,y.value[w.value+1].disabled=!1,k.value+=1)};return C((()=>w.value),(()=>{i.show&&(k.value>=i.forceReadCound&&y.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),N.value&&(N.value.scrollTop=0))}),{immediate:!0}),(n,g)=>{const C=t("ProTab"),k=t("ProFilePreview"),P=t("ProSvg"),O=t("van-config-provider"),U=t("ProPopup");return l(),s(U,{show:u.value,"onUpdate:show":g[1]||(g[1]=e=>u.value=e),class:"file-preview-popup-wrap",closeable:!1,onClose:g[2]||(g[2]=e=>a("onCloseFilePreview"))},{default:v((()=>[c(O,{"theme-vars":m(r),class:"custom-provider"},{default:v((()=>[u.value?(l(),s(C,{key:0,active:w.value,"onUpdate:active":g[0]||(g[0]=e=>w.value=e),list:y.value.map(((e,a)=>({title:e.attachmentName,disabled:a!=w.value&&(e.disabled||!1),slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):o("",!0),p("div",{ref_key:"previewRef",ref:N,class:"list",onScroll:D},[1===m(T).length?(l(),d("div",A,[(l(),s(k,{key:m(T)[0].attachmentName,content:m(T)[0].attachmentUri,type:m(T)[0].attachmentType,"forbid-click":!0},null,8,["content","type"]))])):(l(),d("div",H,[(l(!0),d(f,null,b(m(T),((e,a)=>(l(),d("div",{key:a,class:"attachment-list-item",onClick:a=>(e=>{const a={fileType:e.attachmentType,fileUri:e.attachmentUri};_(a)})(e)},[p("div",z,h(e.attachmentName),1),p("div",E,[c(P,{name:"arrow-right"})])],8,q)))),128))]))],544),p("div",V,[m(I)?(l(),s(x,{key:0,shadow:!1,"theme-vars":m(r),disabled:m(R),class:"right",text:`${e.beforeReadOverText}(${w.value+1}/${e.forceReadCound})`,onClick:j},null,8,["theme-vars","disabled","text"])):(l(),s(x,{key:1,disabled:m(R),shadow:!1,"theme-vars":m(r),text:i.text,onClick:B},null,8,["disabled","theme-vars","text"]))])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}});export{$ as A,N as B,F as P,J as _};
