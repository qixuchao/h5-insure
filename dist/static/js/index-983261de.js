var W=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var R=(n,t,o)=>t in n?W(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,M=(n,t)=>{for(var o in t||(t={}))Q.call(t,o)&&R(n,o,t[o]);if(H)for(var o of H(t))Z.call(t,o)&&R(n,o,t[o]);return n},U=(n,t)=>X(n,Y(t));import{g as L,E as f,M as $,_ as ee,r as h,j as F,k,m as E,p as I,A as s,z as a,J as te,L as j,T as O,n as z,t as oe,a4 as ae,a5 as ne,O as se,a9 as ue,h as le,G as re,F as ce,C as ie}from"./vendor-06835924.js";import{R as de}from"./infoCollection-b0426750.js";import{s as me,c as pe}from"./phoneVerify-ec519af5.js";import{v as G,a as _e,b as ve}from"./validator-ebd71d12.js";import{F as A,g as fe}from"./utils-77466b12.js";import{G as he,_ as Ce}from"./index-57758e93.js";import{g as be,m as ge,i as ye}from"./trial-470b4483.js";import{p as Fe}from"./product-5c517b64.js";import{t as Ie}from"./theme-eeb93d73.js";import{c as Be}from"./close-df102554.js";import"./trial-427a53c4.js";const De=L({props:{isCheck:{type:Boolean,default:!1},userInfo:{type:Object,default:()=>{}}},emits:["on-verify"],setup(n,{emit:t}){var x;const o=n,u=f({}),r=f(!1),V=30,i=f(0),C=f("\u83B7\u53D6\u9A8C\u8BC1\u7801"),l=$({mobile:(x=o.userInfo)==null?void 0:x.mobile,smsCode:""}),b=c=>G(c)?!0:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7",B=()=>{if(i.value>0)return;i.value=V;const c=()=>{C.value=`${i.value}s`,i.value-=1};c();const d=setInterval(()=>{i.value===0?(C.value="\u83B7\u53D6\u9A8C\u8BC1\u7801",i.value=0,clearInterval(d)):c()},1e3)},N=async()=>{i.value>0||u==null||u.value.validate("mobile").then(async()=>{const c=await me(l.mobile),{code:d,data:w}=c;d==="10000"&&(r.value=!0,O({message:"\u77ED\u4FE1\u53D1\u9001\u6210\u529F\uFF0C\u8BF7\u67E5\u6536"}),B())})},e=async()=>{const c=await pe(l.mobile,l.smsCode),{data:d}=c;d&&t("on-verify",l)},p=async()=>{u==null||u.value.validate().then(async()=>{e()})};return ee(()=>l,()=>{G(l.mobile)&&_e(l.smsCode)&&r.value&&e()},{deep:!0,immediate:!0}),(c,d)=>{const w=h("van-field"),P=h("van-cell-group"),T=h("VanForm");return F(),k(T,{ref_key:"formRef",ref:u,"label-width":"80"},{default:E(()=>[I(P,null,{default:E(()=>[I(w,{modelValue:s(l).mobile,"onUpdate:modelValue":d[0]||(d[0]=m=>s(l).mobile=m),name:"mobile",label:"\u624B\u673A\u53F7",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",maxlength:s(A).MOBILE,rules:[{validator:b}]},null,8,["modelValue","maxlength","rules"]),I(w,{modelValue:s(l).smsCode,"onUpdate:modelValue":d[1]||(d[1]=m=>s(l).smsCode=m),type:"digit",name:"smsCode",label:"\u9A8C\u8BC1\u7801",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",maxlength:s(A).SMS_CODE},{button:E(()=>[a("div",{class:j(["sms-code",{"count-down":i.value>0}]),onClick:N},te(C.value),3)]),_:1},8,["modelValue","maxlength"])]),_:1}),a("div",{class:j([{"check-submit":o.isCheck},{submit:!o.isCheck}]),onClick:p},null,2)]),_:1},512)}}}),Ve=L({props:{userInfo:{type:Object,default:()=>{}}},emits:["on-submit"],setup(n,{emit:t}){const o=n,u=f({}),r=$({name:o.userInfo.name,certNo:o.userInfo.certNo}),V=l=>he(r.certNo)?!0:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u8BC1\u4EF6\u53F7",i=l=>ve(l)?!0:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u59D3\u540D",C=()=>{u==null||u.value.validate().then(async l=>{t("on-submit",r)})};return(l,b)=>{const B=h("van-field"),N=h("van-cell-group"),e=h("VanForm");return F(),k(e,{ref_key:"formRef",ref:u,"label-width":"80"},{default:E(()=>[I(N,null,{default:E(()=>[I(B,{modelValue:s(r).name,"onUpdate:modelValue":b[0]||(b[0]=p=>s(r).name=p),name:"name",label:"\u59D3\u540D",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",maxlength:s(A).NAME,rules:[{validator:i}]},null,8,["modelValue","maxlength","rules"]),I(B,{modelValue:s(r).certNo,"onUpdate:modelValue":b[1]||(b[1]=p=>s(r).certNo=p),name:"certNo",label:"\u8EAB\u4EFD\u8BC1",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",maxlength:s(A).ID_CARD,rules:[{validator:V}]},null,8,["modelValue","maxlength","rules"])]),_:1}),a("div",{class:"submit",onClick:C})]),_:1},512)}}});var ke="/static/assets/title-step1.97cb9efa.png",Ee="/static/assets/title-step2.258af5e9.png";const J=n=>(ae("data-v-a6bc1804"),n=n(),ne(),n),Ne={key:0,class:"pro-modal"},xe=J(()=>a("div",{class:"pro-overlay"},null,-1)),we={class:"pro-modal-wrapper"},Se=J(()=>a("div",{class:"pro-modal-content"},[a("p",null,"\u606D\u559C\u60A8"),a("p",null,"\u9886\u53D6\u6210\u529F")],-1)),Oe=["src"],Ae=L({props:{bg:{type:String,default:""},btn:{type:String,default:""},isShow:{type:Boolean,default:()=>{}}},emits:["on-confirm","on-close"],setup(n,{emit:t}){const o=n,u=()=>{t("on-close")};return(r,V)=>o.isShow?(F(),z("div",Ne,[xe,a("div",we,[a("div",{class:"pro-modal-body"},[Se,a("div",{class:"pro-modal-btn",onClick:u},"\u6211\u77E5\u9053\u4E86")]),a("div",{class:"pro-modal-close",onClick:u},[a("img",{src:s(Be)},null,8,Oe)])])])):oe("",!0)}});var Le=Ce(Ae,[["__scopeId","data-v-a6bc1804"]]);const Pe={class:"page-activity-invite"},Te=["src"],Me={class:"container"},Ue={class:"main-form"},$e={class:"title"},qe=["src"],He={class:"agree"},Re={class:"check-wrap"},je=ie(" \u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F "),at=L({setup(n){const t=se(),o=ue(),{productCode:u="7X9",tenantId:r="",phoneNo:V,saleChannelId:i,agentCode:C="",paymentMethod:l,from:b}=t.query,B=f(!0),N=b==="check",e=$({title:ke,attachmentList:[{attachmentName:"",attachmentUri:""}],userInfo:{mobile:V,certNo:"",name:""},agree:!1}),p=f(),x=f(),c=f(!1),d=async m=>{var D,y;e.userInfo.mobile=m.mobile;const _=await be({holderPhone:e.userInfo.mobile,productCode:u,tenantId:r}),{code:g,data:v}=_;g==="10000"&&(e.userInfo.name=(D=v.tenantOrderHolder)==null?void 0:D.name,e.userInfo.certNo=(y=v.tenantOrderHolder)==null?void 0:y.certNo),e.title=Ee,B.value=!1},w=async m=>{if(!e.agree){O("\u8BF7\u52FE\u9009\u534F\u8BAE");return}try{O({message:"\u9886\u53D6\u4E2D...",forbidClick:!0,loadingType:"spinner"}),e.userInfo.certNo=m.certNo,e.userInfo.name=m.name;const _=fe({tenantId:r,detail:p.value,insureDetail:x.value,saleChannelId:i,saleUserId:C,holder:e.userInfo,insured:U(M({},e.userInfo),{relationToHolder:de.SELF}),paymentMethod:l,renewalDK:"",successJumpUrl:"",premium:0,orderStatus:"",orderTopStatus:"",tenantOrderRiskList:[]}),g=await ge(_),{code:v}=g;if(v==="10000"){if(N){c.value=!0;return}o.push({path:"/chuangxin/baigebao/productDetail",query:U(M({},t.query),{tenantId:r,phoneNo:e.userInfo.mobile,certNo:e.userInfo.certNo,name:e.userInfo.name,productCode:"BWYL2021",agentCode:C})})}}catch(_){console.log(_),O.clear()}},P=()=>{c.value=!1},T=async()=>{const m=Fe({productCode:u,withInsureInfo:!0,tenantId:r}),_=ye({productCode:u});Promise.all([m,_]).then(([g,v])=>{var D,y;g.code==="10000"&&(p.value=g.data,e.attachmentList=((y=(D=p.value)==null?void 0:D.tenantProductInsureVO)==null?void 0:y.attachmentVOList)||[]),v.code==="10000"&&(x.value=v.data)})};return le(()=>{T()}),(m,_)=>{const g=h("van-checkbox"),v=h("ProPDFviewer"),D=h("van-config-provider");return F(),k(D,{"theme-vars":s(Ie)},{default:E(()=>{var y,q;return[a("div",Pe,[a("img",{src:(q=(y=p.value)==null?void 0:y.tenantProductInsureVO)==null?void 0:q.banner[0],class:"banner"},null,8,Te),a("div",Me,[a("div",Ue,[a("div",$e,[a("img",{src:s(e).title},null,8,qe)]),B.value?(F(),k(De,{key:0,"user-info":s(e).userInfo,onOnVerify:d},null,8,["user-info"])):(F(),k(Ve,{key:1,"user-info":s(e).userInfo,onOnSubmit:w},null,8,["user-info"])),a("div",He,[a("div",Re,[I(g,{modelValue:s(e).agree,"onUpdate:modelValue":_[0]||(_[0]=S=>s(e).agree=S),name:"agree",shape:"square"},null,8,["modelValue"])]),a("div",null,[je,(F(!0),z(ce,null,re(s(e).attachmentList||[],(S,K)=>(F(),k(v,{key:K,class:"file-name",title:`\u300A${S.attachmentName}\u300B`,content:S.attachmentUri,type:"pdf"},null,8,["title","content"]))),128))])])])])]),I(Le,{"is-show":c.value,onOnClose:P},null,8,["is-show"])]}),_:1},8,["theme-vars"])}}});export{at as default};
