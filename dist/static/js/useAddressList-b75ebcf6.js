import{_ as e,d as a,b as t,c as s,e as n,j as l,a as o,r as i,A as r,y as c,z as u,g as d,f as p,w as v,i as f,l as m,t as h,F as y,n as C,h as g,C as k,a8 as b,q as w,s as _,ao as x}from"./index-3f4e11a7.js";import{q as I,a as j}from"./product-864a8146.js";import{P}from"./index-7cfcd13f.js";var B=e(a({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""}},setup(e){const a=e;return(e,o)=>{const i=t("van-image");return a.url?(s(),n(i,{key:0,width:"100%",class:"banner","lazy-load":"",src:a.url},null,8,["src"])):l("",!0)}}}),[["__scopeId","data-v-34cbd784"]]);const N={class:"pre-body"},A={class:"header"},q=["src"],O={class:"company-name"},S={class:"content"},T=C(" 为了更好地保护您的个人信息，请在使用前点击阅读、充分理解"),z=C("相关内容，我们对您使用过程中可能出现的个人信息收集、使用、共享和保护等情况进行了详细说明。 您已进入投保流程，请仔细阅读"),D=C("、投保须知、保险条款等信息，为维护您的合法权益，您的操作轨迹将被记录。 "),F={class:"footer"};var L=e(a({props:{productDetail:{type:Object,default:()=>{}}},setup(e){const a=e,n=o(),{tenantId:l=""}=n.query,C=i(!1),g=i(!1),k=r({insureConfig:{insureName:"",tenantName:""}}),b=i({title:"",link:""}),w=c((()=>{if(b.value.link){const e=(b.value.link||"").split("?");return"pdf"===(e[0]||"").substr(e[0].lastIndexOf(".")+1)?"pdf":"picture"}return"link"})),_=(e,a)=>{var t;g.value=!g.value,b.value.link=null==(t=k.insureConfig)?void 0:t[a].link,b.value.title=e.target.innerText};return u((()=>{(async()=>{const{code:e,data:t}=await I({insureCode:a.productDetail.insurerCode,tenantId:l});"10000"===e&&(k.insureConfig=t),C.value=!0})()})),(e,a)=>{var n;const l=t("ProPopup"),o=t("ProFilePreview");return s(),d(y,null,[p(l,{class:"pre-notice-wrap","close-on-click-overlay":!1,show:C.value,closeable:!1,height:"395px"},{default:v((()=>[f("div",N,[f("div",A,[f("img",{src:m("/h5-cloud-insure/static/assets/logo.65e1895e.png")},null,8,q),f("div",O," 由"+h(m(k).insureConfig.tenantName)+"提供保险经纪服务，"+h(m(k).insureConfig.insureName)+"承保 ",1)]),f("div",S,[T,f("span",{onClick:a[0]||(a[0]=e=>_(e,"privacyAgreement"))},"《用户隐私协议》"),z,f("span",{onClick:a[1]||(a[1]=e=>_(e,"notification"))},"《客户告知书》"),D]),f("div",F,[p(P,{shadow:!1,text:"我知道了",onClick:a[2]||(a[2]=e=>C.value=!1)})])])])),_:1},8,["show"]),p(l,{show:g.value,"onUpdate:show":a[3]||(a[3]=e=>g.value=e),class:"pre-notice-wrap",title:null==(n=b.value)?void 0:n.title,position:"bottom",style:{height:"600px"}},{default:v((()=>{var e;return[p(o,{content:null==(e=b.value)?void 0:e.link,type:m(w)},null,8,["content","type"])]})),_:1},8,["show","title"])],64)}}}),[["__scopeId","data-v-963e3fd4"]]);const E=["onClick"];var U=e(a({props:{preText:{type:String,default:""},hasBgColor:{type:Boolean,default:!0},attachementList:{type:Object,default:()=>{}}},emits:["preview-file"],setup:(e,{emit:a})=>(t,n)=>(s(),d("div",{class:k({"com-attachment-list":!0,"has-bg":e.hasBgColor})},[f("span",null,h(e.preText),1),(s(!0),d(y,null,g(e.attachementList||[],((e,t)=>(s(),d("span",{key:t,class:"attachment-item",onClick:e=>(e=>{a("preview-file",e)})(t)}," 《"+h(e.attachmentName)+"》 ",9,E)))),128))],2))}),[["__scopeId","data-v-5cafe498"]]);const G={class:"inscribedContent-content"},H={class:"content"};var J=e(a({props:{inscribedContent:{type:String,default:""}},setup(e){const a=e,t=i();return b((()=>a.inscribedContent),(e=>{t.value=e?e.replaceAll("\n","<br />"):""}),{immediate:!0,deep:!0}),(e,a)=>{const n=w("dompurify-html");return s(),d("div",G,[_(f("div",H,null,512),[[n,t.value]])])}}}),[["__scopeId","data-v-702b2de2"]]);const K=(e,a,t)=>{x((()=>{(async()=>{try{const{code:t,data:s}=await j(e);if("10000"===t){const e={};s.forEach((a=>{e[a.relationCode]||(e[a.relationCode]=[]),e[a.relationCode].push(a)})),null==a||a(e)}}catch(s){null==t||t(!1)}})()}))};export{U as A,B,J as I,L as P,K as u};
