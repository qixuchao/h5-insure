var $e=Object.defineProperty,Se=Object.defineProperties;var Ve=Object.getOwnPropertyDescriptors;var me=Object.getOwnPropertySymbols;var Pe=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var pe=(t,a,s)=>a in t?$e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,O=(t,a)=>{for(var s in a||(a={}))Pe.call(a,s)&&pe(t,s,a[s]);if(me)for(var s of me(a))ke.call(a,s)&&pe(t,s,a[s]);return t},H=(t,a)=>Se(t,Ve(a));import{_ as L,d as ee,h as q,a as X,a2 as Ne,V as Q,S as xe}from"./index-52478e3d.js";import{g as N,j as n,n as D,A as e,z as l,J as S,Q as te,y as k,E as B,r as C,af as Le,p as r,m as c,F as T,G as M,k as I,C as V,L as W,t as P,H as Te,a4 as R,a5 as K,Y as Ue,M as qe,_ as z,T as Oe,ar as Me,h as He}from"./vendor-505c98f2.js";import{P as Re}from"./index-229b5f6e.js";import{t as ve}from"./theme-ea709837.js";import{I as Ke,g as Ye,R as Z,h as fe,a as je,S as Ge}from"./infoCollection-3dff23c4.js";import{A as ze}from"./bankCard-b9d5732e.js";import{n as _e,i as he,m as Qe,_ as We,v as Je,b as Xe,c as Ze,d as et}from"./index-a68cb009.js";import{c as tt,s as ot}from"./phoneVerify-a41da179.js";import{i as at,g as ut,e as st}from"./trial-bc264902.js";import{p as lt}from"./product-461203cc.js";const Zo=t=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(t),nt=t=>/^[\u4e00-\u9fa5·•]+$/.test(t);var rt="/static/assets/upgrade_bg.4a771537.png",it="/static/assets/header-logo.fcc5844b.png",dt="/static/assets/loading.bb5f54fd.gif",ct="/static/assets/check-detail.9716a221.png";const mt=["src"],pt=["src"],ft=N({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""}},setup(t){const a=t;return(s,i)=>a.isCheck?(n(),D("img",{key:0,src:e(ct),class:"banner"},null,8,mt)):(n(),D("img",{key:1,src:a.url,class:"banner"},null,8,pt))}});var ea=L(ft,[["__scopeId","data-v-584aabfc"]]);const _t={class:"product-desc"},ht={class:"title"},vt={class:"desc"},Dt=N({props:{productName:{type:String,default:""},productDesc:{type:String,default:""}},setup(t){return(a,s)=>(n(),D("div",_t,[l("div",ht,S(t.productName),1),l("div",vt,S(t.productDesc),1)]))}});var ta=L(Dt,[["__scopeId","data-v-2e75305e"]]);const Ft={class:"guarantee-list"},yt={class:"basic"},bt={class:"guarantee-detail"},gt={class:"title"},Ct={class:"content"},Et=N({props:{guaranteeList:{type:Array,default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:7}},setup(t){const a=t,[s,i]=te(!1),_=k(()=>a.guaranteeList.length>a.count?a.isShowClose?!0:!s.value:!1),o=()=>{i()},h=k(()=>a.guaranteeList.length<=a.count||s.value?a.guaranteeList:a.guaranteeList.slice(0,a.count)),m=B(!1),p=()=>{m.value=!0};return($,v)=>{const F=C("ProCell"),y=C("ProCard"),b=C("ProPopup"),g=Le("dompurify-html");return n(),D(T,null,[l("div",Ft,[r(y,{title:"\u4FDD\u969C\u5185\u5BB9",link:"\u67E5\u770B\u8BE6\u60C5","show-divider":!0,"show-icon":!0,onLinkClick:p},{default:c(()=>[l("div",yt,[(n(!0),D(T,null,M(e(h),(A,w)=>(n(),I(F,{key:w,class:"guarantee-item",title:A.title,content:A.desc,border:!1},null,8,["title","content"]))),128))]),e(_)?(n(),D("div",{key:0,class:"show-more",onClick:o},[V(S(e(s)?"\u6536\u8D77":"\u67E5\u770B\u66F4\u591A")+" ",1),r(ee,{name:"down",class:W(["icon",{showMore:e(s)}])},null,8,["class"])])):P("",!0)]),_:1})]),r(b,{show:m.value,"onUpdate:show":v[0]||(v[0]=A=>m.value=A),title:"\u4FDD\u969C\u8BE6\u60C5",class:"guarantee-popup"},{default:c(()=>[l("div",bt,[(n(!0),D(T,null,M(t.guaranteeList,(A,w)=>(n(),D("div",{key:w,class:"guarantee-item"},[l("div",gt,S(A.title),1),Te(l("div",Ct,null,512),[[g,A.content]])]))),128))])]),_:1},8,["show"])],64)}}});var oa=L(Et,[["__scopeId","data-v-a26e6700"]]);const It=t=>(R("data-v-1d81ec06"),t=t(),K(),t),wt={class:"question"},Bt=It(()=>l("div",{class:"icon"},S("?"),-1)),At={class:"title"},$t=N({props:{name:{type:String,default:""},question:{type:String,default:""},answer:{type:String,default:""}},setup(t){return(a,s)=>{const i=C("van-collapse-item");return n(),I(i,{name:t.name,class:"com-question-item"},{title:c(()=>[l("div",wt,[Bt,l("div",At,S(t.question),1)])]),default:c(()=>[V(" "+S(t.answer),1)]),_:1},8,["name"])}}});var St=L($t,[["__scopeId","data-v-1d81ec06"]]);const Vt={class:"com-question"},Pt=N({props:{list:{type:Array,default:()=>[]}},setup(t){const a=t,[s,i]=te(!1),_=B([]),o=()=>{i()},h=k(()=>a.list.length<=4||s.value?a.list:a.list.slice(0,4));return(m,p)=>{const $=C("van-collapse");return n(),D("div",Vt,[r($,{modelValue:_.value,"onUpdate:modelValue":p[0]||(p[0]=v=>_.value=v)},{default:c(()=>[(n(!0),D(T,null,M(e(h),(v,F)=>(n(),I(St,{key:F,name:F.toString(),question:v.title,answer:v.desc},null,8,["name","question","answer"]))),128))]),_:1},8,["modelValue"]),t.list.length>4?(n(),D("div",{key:0,class:"show-more",onClick:o},[V(S(e(s)?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),r(ee,{name:"down",class:W(["icon",{showMore:e(s)}])},null,8,["class"])])):P("",!0)])}}});var kt=L(Pt,[["__scopeId","data-v-5359d801"]]);const Nt=t=>(R("data-v-6e42cf30"),t=t(),K(),t),xt={class:"spec"},Lt=["src"],Tt=Nt(()=>l("div",{class:"sub-title"},"\u4EA7\u54C1\u8D44\u6599\u6587\u4EF6\u8BE6\u60C5\u53EF\u624B\u52A8\u653E\u5927\uFF0C\u4EE5\u4FBF\u60A8\u66F4\u6E05\u6670\u67E5\u9605\u5185\u5BB9\u3002",-1)),Ut={class:"tab-1-content"},qt=V(" \u8BF7\u67E5\u770B "),Ot=V(" > "),Mt={key:0,class:"dun-hao"},Ht=N({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""},detail:{type:Object,default:()=>{}}},setup(t){const a=t,s=B([{title:"\u6211\u8981\u6295\u4FDD",slotName:"tab1"},{title:"\u4EA7\u54C1\u7279\u8272",slotName:"tab2"},{title:"\u7406\u8D54\u6D41\u7A0B",slotName:"tab3"},{title:"\u5E38\u89C1\u95EE\u9898",slotName:"tab4"}]);return(i,_)=>{const o=C("ProPDFviewer");return n(),I(Ne,{class:"tabs",list:s.value,sticky:"",scrollspy:""},{tab1:c(()=>[Ue(i.$slots,"form",{},void 0,!0)]),tab2:c(()=>{var h,m;return[l("div",xt,[(n(!0),D(T,null,M(((m=(h=a.detail)==null?void 0:h.tenantProductInsureVO)==null?void 0:m.spec)||[],(p,$)=>(n(),D("img",{key:$,src:p,class:"detail-img"},null,8,Lt))),128)),r(q)]),r(X,{title:"\u4EA7\u54C1\u8D44\u6599"},{subTitle:c(()=>[Tt]),default:c(()=>{var p,$;return[l("div",Ut,[qt,(n(!0),D(T,null,M((($=(p=t.detail)==null?void 0:p.tenantProductInsureVO)==null?void 0:$.attachmentVOList)||[],(v,F)=>(n(),I(o,{key:F,class:"file-name",title:`\u300A${v.attachmentName}\u300B`,content:v.attachmentUri},{default:c(()=>{var y,b;return[Ot,F!==(((b=(y=t.detail)==null?void 0:y.tenantProductInsureVO)==null?void 0:b.attachmentVOList)||[]).length-1?(n(),D("span",Mt,"\u3001")):P("",!0)]}),_:2},1032,["title","content"]))),128))])]}),_:1})]}),tab3:c(()=>[r(X,{title:"\u7406\u8D54\u6D41\u7A0B"},{default:c(()=>{var h,m;return[r(Re,{list:(m=(h=a.detail)==null?void 0:h.tenantProductInsureVO)==null?void 0:m.settlementProcessList},null,8,["list"])]}),_:1})]),tab4:c(()=>[r(X,{title:"\u5E38\u89C1\u95EE\u9898"},{default:c(()=>{var h,m;return[r(kt,{list:(m=(h=a.detail)==null?void 0:h.tenantProductInsureVO)==null?void 0:m.questionList},null,8,["list"])]}),_:1})]),_:3},8,["list"])}}});var aa=L(Ht,[["__scopeId","data-v-6e42cf30"]]);const Rt=t=>(R("data-v-dcbc7804"),t=t(),K(),t),Kt={class:"refueling-package-com"},Yt=Rt(()=>l("div",{class:"title"},"\u52A0\u6CB9\u5305",-1)),jt=N({props:{packageProductList:{type:Array,default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:3}},setup(t){const a=t,[s,i]=te(!1),_=k(()=>a.packageProductList.length>a.count?a.isShowClose?!0:!s.value:!1),o=()=>{i()},h=k(()=>a.packageProductList.length<=a.count||s.value?a.packageProductList:a.packageProductList.slice(0,a.count));return(m,p)=>{const $=C("ProRadioButton"),v=C("ProField"),F=C("ProForm");return n(),D("div",Kt,[Yt,r(F,{ref:"formRef"},{default:c(()=>[(n(!0),D(T,null,M(e(h),(y,b)=>(n(),I(v,{key:`${y.value}_${b}`,modelValue:y.value,"onUpdate:modelValue":g=>y.value=g,label:y.packageName,required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:c(()=>[r($,{modelValue:y.value,"onUpdate:modelValue":g=>y.value=g,options:e(Ke),onChange:m.onChange},null,8,["modelValue","onUpdate:modelValue","options","onChange"])]),_:2},1032,["modelValue","onUpdate:modelValue","label"]))),128)),e(_)?(n(),D("div",{key:0,class:"show-more",onClick:o},[V(S(e(s)?"\u6536\u8D77":"\u67E5\u770B\u66F4\u591A")+" ",1),r(ee,{name:"down",class:W(["icon",{showMore:e(s)}])},null,8,["class"])])):P("",!0)]),_:1},512)])}}});var Gt=L(jt,[["__scopeId","data-v-dcbc7804"]]);const J=t=>(R("data-v-22822961"),t=t(),K(),t),zt={class:"holder container"},Qt=J(()=>l("div",{class:"title"},"\u6295\u4FDD\u4EBA\u4FE1\u606F",-1)),Wt={class:"insured-relation container"},Jt=J(()=>l("div",{class:"title"},"\u4E3A\u8C01\u6295\u4FDD",-1)),Xt={class:"insured container"},Zt=J(()=>l("div",{class:"title"},"\u88AB\u4FDD\u4EBA\u4FE1\u606F",-1)),eo={key:0,class:"container"},to={class:"payment container"},oo={class:"renewal-wrapper"},ao=J(()=>l("div",{class:"desc"},[l("p",null,"\u4FDD\u5355\u5230\u671F\u81EA\u52A8\u91CD\u65B0\u6295\u4FDD\uFF0C\u4EAB\u53D7\u4FDD\u969C\u4E0D\u95F4\u65AD"),l("p",null,"\u81EA\u4ECE\u91CD\u65B0\u6295\u4FDD\u5F00\u542F\u540E\uFF0C\u4E2D\u9014\u53EF\u968F\u65F6\u53D6\u6D88")],-1)),uo=N({props:{disable:{type:Boolean,default:!1},formAuth:{type:Object,default:()=>{}},formInfo:{type:Object,default:()=>{}},premium:{type:Number,default:0},payments:{type:Array,default:()=>[0,1]},paymentMethod:{type:Array,default:()=>[0,1]},productDetail:{type:Object,default:()=>{}},isShowPackage:{type:Boolean,default:!1}},emits:["onReset","onUpdate","onVerify"],setup(t,{expose:a,emit:s}){const i=t,_=B({}),o=qe({formInfo:i.formInfo}),h=B(!1),m=B(0),p=B(!1),$=60,v=B(0),F=B("\u83B7\u53D6\u9A8C\u8BC1\u7801"),y=B(!1),b=f=>nt(f)?!0:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u59D3\u540D",g=k(()=>Ye.filter((f,u)=>i.payments.includes(u))),A=k(()=>ze.filter((f,u)=>i.paymentMethod.includes(u))),w=k(()=>o.formInfo.insured.relationToHolder===Z.SELF),U=k(()=>{var f,u;return(u=(f=i.productDetail)==null?void 0:f.tenantProductInsureVO)==null?void 0:u.attachmentVOList.filter(E=>E.attachmentName==="\u8D39\u7387\u8868")}),j=k(()=>{var f,u;return((u=(f=i.productDetail)==null?void 0:f.tenantProductInsureVO)==null?void 0:u.attachmentVOList.filter(E=>!["\u5065\u5EB7\u544A\u77E5","\u8D39\u7387\u8868"].includes(E.attachmentName)))||[]}),oe=()=>(p.value=!0,p),Fe=f=>{m.value=f,h.value=!0},ye=()=>new Promise((f,u)=>{_==null||_.value.validate().then(()=>{f("")},()=>{u()})}),be=()=>{if(v.value>0)return;v.value=$;const f=()=>{F.value=`${v.value}s`,v.value-=1};f();const u=setInterval(()=>{v.value===0?(F.value="\u83B7\u53D6\u9A8C\u8BC1\u7801",v.value=0,clearInterval(u)):f()},1e3)},ge=async()=>{const f=await tt(o.formInfo.holder.mobile,o.formInfo.holder.mobileSmsCode),{data:u}=f;s("onVerify",!!u)},Ce=async()=>{v.value>0||_==null||_.value.validate("mobile").then(async()=>{const f=await ot(o.formInfo.holder.mobile),{code:u,data:E}=f;u==="10000"&&(y.value=!0,Oe({message:"\u77ED\u4FE1\u53D1\u9001\u6210\u529F\uFF0C\u8BF7\u67E5\u6536"}),be())})},Ee=()=>{const{relationToHolder:f}=o.formInfo.insured;f===Z.SELF?(o.formInfo.insured={certNo:o.formInfo.holder.certNo,name:o.formInfo.holder.name,socialFlag:o.formInfo.holder.socialFlag,relationToHolder:f},s("onReset")):(o.formInfo.insured={certNo:"",name:"",socialFlag:Ge.HAS,relationToHolder:f},s("onUpdate"))},Ie=f=>Je(f)?!0:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u9A8C\u8BC1\u7801";return z(()=>o.formInfo.holder.mobileSmsCode,()=>{var f;(f=_.value)==null||f.validate(["mobile","mobileSmsCode"]).then(async()=>{y.value&&ge()})},{deep:!0}),z(()=>o.formInfo.holder,()=>{o.formInfo.insured.relationToHolder===Z.SELF&&Object.assign(o.formInfo.insured,o.formInfo.holder)},{deep:!0,immediate:!0}),a({validateForm:ye,previewFile:Fe,isAgreeFile:p,onSubmit:oe}),(f,u)=>{const E=C("ProField"),G=C("ProRadioButton"),we=C("van-switch"),Be=C("ProForm"),Ae=C("van-config-provider");return n(),I(Ae,{"theme-vars":e(ve)},{default:c(()=>[r(Be,{ref_key:"formRef",ref:_},{default:c(()=>{var ae,ue,se,le,ne,re,ie,de,ce;return[r(q),l("div",zt,[Qt,((ae=i.formAuth)==null?void 0:ae.holderNameDisable)?(n(),I(E,{key:0,label:"\u59D3\u540D",class:"pro-field","is-view":!0},{input:c(()=>[V(S(e(_e)(e(o).formInfo.holder.name)),1)]),_:1})):(n(),I(E,{key:1,modelValue:e(o).formInfo.holder.name,"onUpdate:modelValue":u[0]||(u[0]=d=>e(o).formInfo.holder.name=d),label:"\u59D3\u540D",name:"name",required:"",placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",maxlength:"10",rules:[{validator:b}]},null,8,["modelValue","rules"])),((ue=i.formAuth)==null?void 0:ue.holderCertDisable)?(n(),I(E,{key:2,label:"\u8BC1\u4EF6\u53F7\u7801",class:"pro-field","is-view":!0},{input:c(()=>[V(S(e(he)(e(o).formInfo.holder.certNo)),1)]),_:1})):(n(),I(E,{key:3,modelValue:e(o).formInfo.holder.certNo,"onUpdate:modelValue":u[1]||(u[1]=d=>e(o).formInfo.holder.certNo=d),label:"\u8BC1\u4EF6\u53F7\u7801",name:"certNo",required:"",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",maxlength:"20","validate-type":[e(Q).ID_CARD]},null,8,["modelValue","validate-type"])),((se=i.formAuth)==null?void 0:se.holderMobileDisable)?(n(),I(E,{key:4,label:"\u624B\u673A\u53F7",class:"pro-field","is-view":!0},{input:c(()=>[V(S(e(Qe)(e(o).formInfo.holder.mobile)),1)]),_:1})):(n(),I(E,{key:5,modelValue:e(o).formInfo.holder.mobile,"onUpdate:modelValue":u[2]||(u[2]=d=>e(o).formInfo.holder.mobile=d),label:"\u624B\u673A\u53F7",name:"mobile",required:"",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",maxlength:"11","validate-type":[e(Q).PHONE]},null,8,["modelValue","validate-type"])),((le=i.formAuth)==null?void 0:le.holderMobileDisable)?P("",!0):(n(),I(E,{key:6,modelValue:e(o).formInfo.holder.mobileSmsCode,"onUpdate:modelValue":u[3]||(u[3]=d=>e(o).formInfo.holder.mobileSmsCode=d),label:"\u9A8C\u8BC1\u7801",name:"mobileSmsCode",required:"",rules:[{validator:Ie}],"input-align":"left",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801","error-message-align":"left",maxlength:"6","validate-type":[e(Q).SMS_CODE]},{extra:c(()=>[l("div",{class:W(["sms-code",{"count-down":v.value>0}]),onClick:Ce},S(F.value),3)]),_:1},8,["modelValue","rules","validate-type"])),r(E,{modelValue:e(o).formInfo.holder.socialFlag,"onUpdate:modelValue":u[5]||(u[5]=d=>e(o).formInfo.holder.socialFlag=d),label:"\u6709\u65E0\u793E\u4FDD",name:"socialFlag",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:c(()=>{var d;return[r(G,{modelValue:e(o).formInfo.holder.socialFlag,"onUpdate:modelValue":u[4]||(u[4]=x=>e(o).formInfo.holder.socialFlag=x),disabled:(d=i.formAuth)==null?void 0:d.holderSocialDisable,options:e(fe)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"])]),r(q),l("div",Wt,[Jt,r(E,{modelValue:e(o).formInfo.insured.relationToHolder,"onUpdate:modelValue":u[7]||(u[7]=d=>e(o).formInfo.insured.relationToHolder=d),class:"relation-to-Holder",label:"",name:"relationToHolder",placeholder:"\u8BF7\u9009\u62E9",onClick:Ee},{input:c(()=>{var d;return[r(G,{modelValue:e(o).formInfo.insured.relationToHolder,"onUpdate:modelValue":u[6]||(u[6]=x=>e(o).formInfo.insured.relationToHolder=x),disabled:(d=i.formAuth)==null?void 0:d.relationToHolderDisable,options:e(je)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"])]),r(q),l("div",Xt,[Zt,((ne=i.formAuth)==null?void 0:ne.insuredNameDisable)?(n(),I(E,{key:0,label:"\u59D3\u540D",class:"pro-field","is-view":!0},{input:c(()=>[V(S(e(_e)(e(o).formInfo.insured.name)),1)]),_:1})):P("",!0),!((re=i.formAuth)==null?void 0:re.insuredNameDisable)&&!e(w)?(n(),I(E,{key:1,modelValue:e(o).formInfo.insured.name,"onUpdate:modelValue":u[8]||(u[8]=d=>e(o).formInfo.insured.name=d),label:"\u59D3\u540D",name:"name",required:"",maxlength:"10",rules:[{validator:b}]},null,8,["modelValue","rules"])):P("",!0),((ie=i.formAuth)==null?void 0:ie.insuredCertDisable)?(n(),I(E,{key:2,label:"\u8BC1\u4EF6\u53F7\u7801",class:"pro-field","is-view":!0},{input:c(()=>[V(S(e(he)(e(o).formInfo.insured.certNo)),1)]),_:1})):P("",!0),!((de=i.formAuth)==null?void 0:de.insuredCertDisable)&&!e(w)?(n(),I(E,{key:3,modelValue:e(o).formInfo.insured.certNo,"onUpdate:modelValue":u[9]||(u[9]=d=>e(o).formInfo.insured.certNo=d),label:"\u8BC1\u4EF6\u53F7\u7801",name:"certNo",required:"",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",maxlength:"20","validate-type":[e(Q).ID_CARD]},null,8,["modelValue","validate-type"])):P("",!0),r(E,{modelValue:e(o).formInfo.insured.socialFlag,"onUpdate:modelValue":u[11]||(u[11]=d=>e(o).formInfo.insured.socialFlag=d),label:"\u6709\u65E0\u793E\u4FDD",name:"name",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:c(()=>{var d;return[r(G,{modelValue:e(o).formInfo.insured.socialFlag,"onUpdate:modelValue":u[10]||(u[10]=x=>e(o).formInfo.insured.socialFlag=x),disabled:((d=i.formAuth)==null?void 0:d.insuredSocialDisable)||e(w),options:e(fe)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"])]),r(q),t.isShowPackage?(n(),D("div",eo,[r(Gt,{"package-product-list":(ce=t.formInfo)==null?void 0:ce.packageProductList},null,8,["package-product-list"])])):P("",!0),r(q),l("div",to,[r(E,{modelValue:e(o).formInfo.paymentFrequency,"onUpdate:modelValue":u[13]||(u[13]=d=>e(o).formInfo.paymentFrequency=d),label:"\u4EA4\u8D39\u65B9\u5F0F",name:"paymentFrequency",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:c(()=>{var d;return[r(G,{modelValue:e(o).formInfo.paymentFrequency,"onUpdate:modelValue":u[12]||(u[12]=x=>e(o).formInfo.paymentFrequency=x),disabled:(d=i.formAuth)==null?void 0:d.paymentFrequencyDisable,options:e(g)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"]),r(q),r(E,{modelValue:e(o).formInfo.paymentMethod,"onUpdate:modelValue":u[15]||(u[15]=d=>e(o).formInfo.paymentMethod=d),label:"\u652F\u4ED8\u65B9\u5F0F",name:"paymentMethod",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:c(()=>{var d;return[r(G,{modelValue:e(o).formInfo.paymentMethod,"onUpdate:modelValue":u[14]||(u[14]=x=>e(o).formInfo.paymentMethod=x),disabled:(d=i.formAuth)==null?void 0:d.paymentDisable,options:e(A)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"]),r(q),l("div",oo,[r(E,{label:"\u5F00\u901A\u81EA\u4E3B\u91CD\u65B0\u6295\u4FDD",class:"pro-field",name:"renewalDK",placeholder:"\u8BF7\u9009\u62E9",border:!1},{input:c(()=>{var d;return[r(we,{modelValue:e(o).formInfo.renewalDK,"onUpdate:modelValue":u[16]||(u[16]=x=>e(o).formInfo.renewalDK=x),disabled:(d=i.formAuth)==null?void 0:d.renewalDKDisable},null,8,["modelValue","disabled"])]}),_:1}),ao])]),r(q),r(We,{show:h.value,"onUpdate:show":u[17]||(u[17]=d=>h.value=d),"content-list":e(j).concat(e(U)),"active-index":m.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9",onSubmit:oe},null,8,["show","content-list","active-index"])]}),_:1},512)]),_:1},8,["theme-vars"])}}});var ua=L(uo,[["__scopeId","data-v-22822961"]]);const so=t=>(R("data-v-812ee74a"),t=t(),K(),t),lo={key:0,class:"page-waiting"},no=["src"],ro=so(()=>l("div",{class:"tips"},[l("p",null,"\u652F\u4ED8\u6210\u529F\uFF0C\u627F\u4FDD\u4E2D...")],-1)),io=N({props:{isShow:{type:Boolean,default:()=>{}}},setup(t){const a=t;return z(()=>a.isShow,s=>{s?document.body.style.overflow="hidden":document.body.style.overflow="inherit"}),(s,i)=>a.isShow?(n(),D("div",lo,[l("img",{class:"loading",src:e(dt)},null,8,no),ro])):P("",!0)}});var sa=L(io,[["__scopeId","data-v-812ee74a"]]);const De=t=>(R("data-v-2f424508"),t=t(),K(),t),co={key:0,class:"pro-modal"},mo=De(()=>l("div",{class:"pro-overlay"},null,-1)),po={class:"pro-modal-wrapper"},fo=["src"],_o={class:"pro-modal-body"},ho={class:"pro-modal-content"},vo=De(()=>l("p",{class:"tips"},"\u5347\u7EA7\u540E\u7684\u4FDD\u969C\u5C06\u4E8E\u7B2C\u4E8C\u671F\u4FDD\u8D39\u6263\u8D39/\u7F34\u8D39\u6210\u529F\u540E\u751F\u6548",-1)),Do={class:"pro-modal-content"},Fo={class:"product-attachment-list"},yo=V(" \u8BF7\u60A8\u91CD\u70B9\u9605\u8BFB\u5E76\u77E5\u6653 "),bo={key:0,class:"dun-hao"},go={class:"pro-modal-close"},Co=["src"],Eo=N({props:{orderNo:{type:String,default:""},tenantId:{type:String,default:""},isShow:{type:Boolean,default:()=>{}}},emits:["on-confirm","on-close"],setup(t,{emit:a}){const s=t,i=B(),_=B(),o=B(),h=B(),m=B([]),p="BWYL2022",$=()=>{a("on-close")},v=()=>{a("on-confirm")},F=async()=>{try{const b=et({tenantId:s.tenantId,premium:h.value,orderDetail:o.value,productDetail:i.value,insureDetail:_.value,successJumpUrl:"",iseeBizNo:""}),g=await st(b),{code:A,data:w}=g;A==="10000"&&(h.value=w.installmentPremium)}catch(b){console.log(b)}},y=()=>{const b=lt({productCode:p,withInsureInfo:!0,tenantId:s.tenantId}),g=at({productCode:p}),A=ut({orderNo:s.orderNo,tenantId:s.tenantId});Promise.all([b,g,A]).then(([w,U,j])=>{w.code==="10000"&&(i.value=w.data,m.value=w.data.tenantProductInsureVO.attachmentVOList),U.code==="10000"&&(_.value=U.data),j.code==="10000"&&(o.value=j.data),F()})};return z(()=>s.isShow,b=>{b?(document.body.style.overflow="hidden",y()):document.body.style.overflow="inherit"}),(b,g)=>{const A=C("ProPDFviewer");return s.isShow?(n(),D("div",co,[mo,l("div",po,[l("img",{class:"cover",src:e(rt)},null,8,fo),l("div",_o,[l("div",ho,[l("p",null,"\u6BCF\u6708\u4FDD\u8D39\u4EC5\u9700"+S(e(Xe)(h.value||0))+"\u5143\uFF0C\u65E0\u9700\u91CD\u590D\u6295\u4FDD",1),vo]),l("div",{class:"pro-modal-btn",onClick:v},"\u4E00\u952E\u5347\u7EA7"),l("div",Do,[l("div",Fo,[yo,(n(!0),D(T,null,M(m.value,(w,U)=>(n(),I(A,{key:U,class:"file-name",title:`\u300A${w.attachmentName}\u300B`,content:w.attachmentUri,type:"pdf"},{default:c(()=>[U!==(m.value||[]).length-1?(n(),D("span",bo,"\u3001")):P("",!0)]),_:2},1032,["title","content"]))),128))])])]),l("div",go,[l("img",{src:e(Ze),onClick:$},null,8,Co)])])])):P("",!0)}}});var la=L(Eo,[["__scopeId","data-v-2f424508"]]);const Io=t=>(R("data-v-47cc5215"),t=t(),K(),t),wo={class:"header"},Bo=["src"],Ao={class:"content"},$o=Io(()=>l("h4",null,"\u6E29\u99A8\u63D0\u793A\uFF0C\u60A8\u5DF2\u8FDB\u5165\u6295\u4FDD\u6D41\u7A0B\uFF1A",-1)),So=V(" \u8BF7\u4ED4\u7EC6\u9605\u8BFB\u514D\u8D23\u6761\u6B3E\u3001\u6295\u4FDD\u987B\u77E5\u7B49\u4FE1\u606F\uFF0C\u8BF7\u60A8\u91CD\u70B9\u9605\u8BFB\u5E76\u77E5\u6653 "),Vo=["onClick"],Po=V(" \uFF0C\u4E3A\u7EF4\u62A4\u60A8\u7684\u5408\u6CD5\u6743\u76CA\uFF0C\u60A8\u7684\u64CD\u4F5C\u8F68\u8FF9\u5C06\u88AB\u8BB0\u5F55\u3002 "),ko={class:"footer"},No=V(" \u597D\u7684 "),xo={key:0},Lo=N({props:{productDetail:{type:Object,default:()=>{}}},setup(t){const a=t,s="PRENOTICE",i=new xe({source:"sessionStorage"}),_=B(!1),o=B(!1),h=Me({time:4e3,onFinish:()=>{i.set(`${s}-isShow`,"1"),_.value=!1}}),m=B(),p=k(()=>{var F,y;return(y=(F=a.productDetail)==null?void 0:F.tenantProductInsureVO)==null?void 0:y.attachmentVOList.filter(b=>b.attachmentName==="\u4E2A\u4EBA\u4FE1\u606F\u4FDD\u62A4\u653F\u7B56")}),$=k(()=>h.current.value.seconds),v=F=>{o.value=!o.value,m.value=F};return He(()=>{i.get(`${s}-isShow`)||(_.value=!0,h.start())}),(F,y)=>{const b=C("VanButton"),g=C("ProPopup"),A=C("ProFilePreview");return n(),D(T,null,[r(g,{class:"pre-notice-wrap",show:_.value,closeable:!1,height:45},{default:c(()=>[l("div",wo,[l("img",{src:e(it)},null,8,Bo)]),l("div",Ao,[$o,l("p",null,[So,(n(!0),D(T,null,M(e(p),(w,U)=>(n(),D("span",{key:U,class:"file-name",onClick:j=>v(w.attachmentUri)}," \u300A"+S(w.attachmentName)+"\u300B ",9,Vo))),128)),Po])]),l("div",ko,[r(b,{type:"primary",block:"",round:""},{default:c(()=>[No,e($)?(n(),D("span",xo,S(e($))+"s",1)):P("",!0)]),_:1})])]),_:1},8,["show"]),r(g,{show:o.value,"onUpdate:show":y[0]||(y[0]=w=>o.value=w),class:"pre-notice-wrap","close-icon":"close",position:"bottom",style:{height:"600px",paddingTop:"40px"}},{default:c(()=>[r(A,{content:m.value,type:"pdf"},null,8,["content"])]),_:1},8,["show"])],64)}}});var na=L(Lo,[["__scopeId","data-v-47cc5215"]]);const To={class:"list"},Uo={class:"item"},qo={class:"footer"},Oo=V("\u90E8\u5206\u4E3A\u662F"),Mo=V("\u5168\u90E8\u4E3A\u5426"),ra=N({props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth"],setup(t,{emit:a}){const s=t,i=B(s.show),_=B(s.activeIndex),o=k(()=>{var m;return(m=s.contentList[_.value])==null?void 0:m.attachmentUri}),h=m=>{a("update:show",!1),a("onConfirmHealth",m)};return z(()=>s,()=>{i.value=s.show,_.value=s.activeIndex},{deep:!0,immediate:!0}),(m,p)=>{const $=C("ProTab"),v=C("ProFilePreview"),F=C("VanButton"),y=C("van-config-provider"),b=C("ProPopup");return n(),I(b,{show:i.value,"onUpdate:show":p[3]||(p[3]=g=>i.value=g),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:p[4]||(p[4]=g=>a("update:show",!1))},{default:c(()=>[r(y,{"theme-vars":e(ve)},{default:c(()=>[i.value?(n(),I($,{key:0,active:_.value,"onUpdate:active":p[0]||(p[0]=g=>_.value=g),list:t.contentList.map((g,A)=>({title:g.attachmentName,slotName:`guarantee-${A}`})),class:"tab"},null,8,["active","list"])):P("",!0),l("div",To,[l("div",Uo,[(n(),I(v,{key:e(o),content:e(o),type:"pdf"},null,8,["content"]))])]),l("div",qo,[r(F,{type:"primary",block:"",round:"",onClick:p[1]||(p[1]=g=>h("N"))},{default:c(()=>[Oo]),_:1}),r(F,{type:"primary",plain:"",block:"",round:"",onClick:p[2]||(p[2]=g=>h("allFalse"))},{default:c(()=>[Mo]),_:1})])]),_:1},8,["theme-vars"])]),_:1},8,["show"])}}}),Y={holderNameDisable:!0,holderCertDisable:!0,holderMobileDisable:!0,holderSocialDisable:!0,relationToHolderDisable:!0,insuredNameDisable:!0,insuredCertDisable:!0,insuredSocialDisable:!0,paymentDisable:!0,renewalDKDisable:!0,paymentFrequencyDisable:!0},ia=H(O({},Y),{holderSocialDisable:!1,relationToHolderDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1}),da=H(O({},Y),{holderNameDisable:!1,holderCertDisable:!1,holderSocialDisable:!1,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1}),ca=O({},Y),ma=H(O({},Y),{holderSocialDisable:!1,relationToHolderDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});H(O({},Y),{paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});const pa=H(O({},Y),{holderNameDisable:!1,holderCertDisable:!1,holderMobileDisable:!1,holderSocialDisable:!1,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1}),fa=H(O({},Y),{relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});export{ea as B,ta as D,oa as G,ua as H,na as P,aa as S,la as U,sa as W,ra as _,nt as a,pa as b,da as c,Y as d,ia as f,fa as h,ma as n,ca as o,Zo as v};
