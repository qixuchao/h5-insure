var Se=Object.defineProperty,Ve=Object.defineProperties;var ke=Object.getOwnPropertyDescriptors;var fe=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var _e=(o,a,l)=>a in o?Se(o,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[a]=l,q=(o,a)=>{for(var l in a||(a={}))Ne.call(a,l)&&_e(o,l,a[l]);if(fe)for(var l of fe(a))xe.call(a,l)&&_e(o,l,a[l]);return o},H=(o,a)=>Ve(o,ke(a));import{_ as L,e as te,i as O,a as Z,a7 as Le,I as Te,V as X,S as Ue}from"./index-89512e8f.js";import{g as x,j as n,n as b,A as t,z as u,J as $,Q as oe,y as N,E as w,r as I,af as qe,p as i,m as c,F as T,G as R,k as E,C as P,L as J,t as V,H as Oe,a4 as j,a5 as G,Y as Me,M as He,_ as z,T as Re,ar as Ke,h as Ye}from"./vendor-17026bfd.js";import{P as je}from"./index-8e0889bf.js";import{t as De}from"./theme-ea709837.js";import{g as Ge,h as ze,R as ee,I as Qe,a as Xe,i as Je,S as We}from"./infoCollection-360def27.js";import{A as Ze}from"./bankCard-72ee7644.js";import{c as et,n as ve,i as he,m as tt,d as ot,e as at,f as st,h as lt}from"./utils-d21e5fd4.js";import{s as ut,c as nt}from"./phoneVerify-6ce838fe.js";import{_ as rt,c as it}from"./index-25d55b40.js";import{i as dt,g as ct,e as mt}from"./trial-9a84775d.js";import{p as pt}from"./product-3093cc1e.js";const ft=o=>/^[\u4E00-\u9FA5．·]{2,50}$/.test(o);var _t="/static/assets/upgrade_bg.4a771537.png",vt="/static/assets/header-logo.fcc5844b.png",ht="/static/assets/loading.bb5f54fd.gif",Dt="/static/assets/check-detail.9716a221.png";const yt=["src"],Ft=["src"],bt=x({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""}},setup(o){const a=o;return(l,d)=>a.isCheck?(n(),b("img",{key:0,src:t(Dt),class:"banner"},null,8,yt)):(n(),b("img",{key:1,src:a.url,class:"banner"},null,8,Ft))}});var ia=L(bt,[["__scopeId","data-v-584aabfc"]]);const gt={class:"product-desc"},Ct={class:"title"},It={class:"desc"},Et=x({props:{productName:{type:String,default:""},productDesc:{type:String,default:""}},setup(o){return(a,l)=>(n(),b("div",gt,[u("div",Ct,$(o.productName),1),u("div",It,$(o.productDesc),1)]))}});var da=L(Et,[["__scopeId","data-v-2e75305e"]]),wt="/static/assets/serviceConfig.df5f765f.png";const Bt={class:"guarantee-list"},At={class:"basic"},$t=["src"],Pt={class:"guarantee-detail"},St={class:"title"},Vt={class:"content"},kt=x({props:{guaranteeList:{type:Array,default:()=>[]},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:10}},setup(o){const a=o,[l,d]=oe(!1),h=N(()=>a.guaranteeList.length>a.count?a.isShowClose?!0:!l.value:!1),e=()=>{d()},_=N(()=>a.guaranteeList.length<=a.count||l.value?a.guaranteeList:a.guaranteeList.slice(0,a.count)),B=N(()=>a.guaranteeList.filter(r=>!(r==null?void 0:r.noDetail))),v=w(!1),y=()=>{v.value=!0};return(r,D)=>{const g=I("ProCell"),C=I("ProCard"),A=I("ProPopup"),S=qe("dompurify-html");return n(),b(T,null,[u("div",Bt,[i(C,{title:"\u4FDD\u969C\u5185\u5BB9",link:"\u67E5\u770B\u8BE6\u60C5","show-divider":!0,"show-icon":!0,onLinkClick:y},{default:c(()=>[u("div",At,[(n(!0),b(T,null,R(t(_),(p,k)=>(n(),E(g,{key:k,class:"guarantee-item",title:p.title,content:p.desc,border:!1},null,8,["title","content"]))),128))]),t(h)?(n(),b("div",{key:0,class:"show-more",onClick:e},[P($(t(l)?"\u6536\u8D77":"\u67E5\u770B\u66F4\u591A")+" ",1),i(te,{name:"down",class:J(["icon",{showMore:t(l)}])},null,8,["class"])])):V("",!0),u("div",{class:"service-config",onClick:D[0]||(D[0]=(...p)=>r.onClose&&r.onClose(...p))},[u("img",{src:t(wt)},null,8,$t)])]),_:1})]),i(A,{show:v.value,"onUpdate:show":D[1]||(D[1]=p=>v.value=p),title:"\u4FDD\u969C\u8BE6\u60C5",class:"guarantee-popup"},{default:c(()=>[u("div",Pt,[(n(!0),b(T,null,R(t(B),(p,k)=>(n(),b("div",{key:k,class:"guarantee-item"},[u("div",St,$(p.title),1),Oe(u("div",Vt,null,512),[[S,p.content]])]))),128))])]),_:1},8,["show"])],64)}}});var ca=L(kt,[["__scopeId","data-v-e6de1ac4"]]);const Nt=o=>(j("data-v-1d81ec06"),o=o(),G(),o),xt={class:"question"},Lt=Nt(()=>u("div",{class:"icon"},$("?"),-1)),Tt={class:"title"},Ut=x({props:{name:{type:String,default:""},question:{type:String,default:""},answer:{type:String,default:""}},setup(o){return(a,l)=>{const d=I("van-collapse-item");return n(),E(d,{name:o.name,class:"com-question-item"},{title:c(()=>[u("div",xt,[Lt,u("div",Tt,$(o.question),1)])]),default:c(()=>[P(" "+$(o.answer),1)]),_:1},8,["name"])}}});var qt=L(Ut,[["__scopeId","data-v-1d81ec06"]]);const Ot={class:"com-question"},Mt=x({props:{list:{type:Array,default:()=>[]}},setup(o){const a=o,[l,d]=oe(!1),h=w([]),e=()=>{d()},_=N(()=>a.list.length<=4||l.value?a.list:a.list.slice(0,4));return(B,v)=>{const y=I("van-collapse");return n(),b("div",Ot,[i(y,{modelValue:h.value,"onUpdate:modelValue":v[0]||(v[0]=r=>h.value=r)},{default:c(()=>[(n(!0),b(T,null,R(t(_),(r,D)=>(n(),E(qt,{key:D,name:D.toString(),question:r.title,answer:r.desc},null,8,["name","question","answer"]))),128))]),_:1},8,["modelValue"]),o.list.length>4?(n(),b("div",{key:0,class:"show-more",onClick:e},[P($(t(l)?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),i(te,{name:"down",class:J(["icon",{showMore:t(l)}])},null,8,["class"])])):V("",!0)])}}});var Ht=L(Mt,[["__scopeId","data-v-5359d801"]]);const Rt=o=>(j("data-v-df0725a6"),o=o(),G(),o),Kt={class:"spec"},Yt=["src"],jt=Rt(()=>u("div",{class:"sub-title"},"\u4EA7\u54C1\u8D44\u6599\u6587\u4EF6\u8BE6\u60C5\u53EF\u624B\u52A8\u653E\u5927\uFF0C\u4EE5\u4FBF\u60A8\u66F4\u6E05\u6670\u67E5\u9605\u5185\u5BB9\u3002",-1)),Gt={class:"tab-1-content"},zt=P(" \u8BF7\u67E5\u770B "),Qt=P(" > "),Xt={key:0,class:"dun-hao"},Jt=x({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""},detail:{type:Object,default:()=>{}}},setup(o){const a=o,l=w([{title:"\u6211\u8981\u6295\u4FDD",slotName:"tab1"},{title:"\u4EA7\u54C1\u7279\u8272",slotName:"tab2"},{title:"\u7406\u8D54\u6D41\u7A0B",slotName:"tab3"},{title:"\u5E38\u89C1\u95EE\u9898",slotName:"tab4"}]),d=e=>{const _=e.split("?")[0],B=_.lastIndexOf(".");return _.substring(B+1)},h=e=>{if(!e)return"";let _=e;return _.indexOf("\u300A")===-1&&(_=`\u300A${_}`),_.indexOf("\u300B")===-1&&(_=`${_}\u300B`),_};return(e,_)=>{const B=I("ProPDFviewer");return n(),E(Le,{class:"tabs",list:l.value,sticky:"",scrollspy:""},{tab1:c(()=>[Me(e.$slots,"form",{},void 0,!0)]),tab2:c(()=>{var v,y;return[u("div",Kt,[(n(!0),b(T,null,R(((y=(v=a.detail)==null?void 0:v.tenantProductInsureVO)==null?void 0:y.spec)||[],(r,D)=>(n(),b("img",{key:D,src:r,class:"detail-img"},null,8,Yt))),128)),i(O)]),i(Z,{title:"\u4EA7\u54C1\u8D44\u6599"},{subTitle:c(()=>[jt]),default:c(()=>{var r,D;return[u("div",Gt,[zt,(n(!0),b(T,null,R(((D=(r=o.detail)==null?void 0:r.tenantProductInsureVO)==null?void 0:D.attachmentVOList)||[],(g,C)=>(n(),E(B,{key:C,type:d(g.attachmentUri),class:"file-name",title:h(g.attachmentName),content:g.attachmentUri},{default:c(()=>{var A,S;return[Qt,C!==(((S=(A=o.detail)==null?void 0:A.tenantProductInsureVO)==null?void 0:S.attachmentVOList)||[]).length-1?(n(),b("span",Xt,"\u3001")):V("",!0)]}),_:2},1032,["type","title","content"]))),128))])]}),_:1})]}),tab3:c(()=>[i(Z,{title:"\u7406\u8D54\u6D41\u7A0B"},{default:c(()=>{var v,y;return[i(je,{list:(y=(v=a.detail)==null?void 0:v.tenantProductInsureVO)==null?void 0:y.settlementProcessList},null,8,["list"])]}),_:1})]),tab4:c(()=>[i(Z,{title:"\u5E38\u89C1\u95EE\u9898"},{default:c(()=>{var v,y;return[i(Ht,{list:(y=(v=a.detail)==null?void 0:v.tenantProductInsureVO)==null?void 0:y.questionList},null,8,["list"])]}),_:1})]),_:3},8,["list"])}}});var ma=L(Jt,[["__scopeId","data-v-df0725a6"]]);const Wt=o=>(j("data-v-0dce64f2"),o=o(),G(),o),Zt={class:"refueling-package-com"},eo=Wt(()=>u("div",{class:"title"},"\u52A0\u6CB9\u5305",-1)),to=x({props:{packageProductList:{type:Array,default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:3}},setup(o){const a=o,[l,d]=oe(!1),h=N(()=>a.packageProductList.length>a.count?a.isShowClose?!0:!l.value:!1),e=()=>{d()},_=N(()=>a.packageProductList.length<=a.count||l.value?a.packageProductList:a.packageProductList.slice(0,a.count));return(B,v)=>{const y=I("ProRadioButton"),r=I("ProField"),D=I("ProForm");return n(),b("div",Zt,[eo,i(D,{ref:"formRef"},{default:c(()=>[(n(!0),b(T,null,R(t(_),(g,C)=>(n(),E(r,{key:`${g.value}_${C}`,modelValue:g.value,"onUpdate:modelValue":A=>g.value=A,label:g.packageName,required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:c(()=>[i(y,{modelValue:g.value,"onUpdate:modelValue":A=>g.value=A,options:t(Ge),disabled:g.disabled},null,8,["modelValue","onUpdate:modelValue","options","disabled"])]),_:2},1032,["modelValue","onUpdate:modelValue","label"]))),128)),t(h)?(n(),b("div",{key:0,class:"show-more",onClick:e},[P($(t(l)?"\u6536\u8D77":"\u67E5\u770B\u66F4\u591A")+" ",1),i(te,{name:"down",class:J(["icon",{showMore:t(l)}])},null,8,["class"])])):V("",!0)]),_:1},512)])}}});var oo=L(to,[["__scopeId","data-v-0dce64f2"]]);const W=o=>(j("data-v-0d6fe968"),o=o(),G(),o),ao={class:"holder container"},so=W(()=>u("div",{class:"title"},"\u6295\u4FDD\u4EBA\u4FE1\u606F",-1)),lo={class:"insured-relation container"},uo=W(()=>u("div",{class:"title"},"\u4E3A\u8C01\u6295\u4FDD",-1)),no={class:"insured container"},ro=W(()=>u("div",{class:"title"},"\u88AB\u4FDD\u4EBA\u4FE1\u606F",-1)),io={key:0,class:"container"},co={class:"payment container"},mo={class:"renewal-wrapper"},po=W(()=>u("div",{class:"desc"},[u("p",null,"\u4FDD\u5355\u5230\u671F\u81EA\u52A8\u91CD\u65B0\u6295\u4FDD\uFF0C\u4EAB\u53D7\u4FDD\u969C\u4E0D\u95F4\u65AD"),u("p",null,"\u81EA\u4ECE\u91CD\u65B0\u6295\u4FDD\u5F00\u542F\u540E\uFF0C\u4E2D\u9014\u53EF\u968F\u65F6\u53D6\u6D88")],-1)),fo=x({props:{disable:{type:Boolean,default:!1},formAuth:{type:Object,default:()=>{}},formInfo:{type:Object,default:()=>{}},payments:{type:Array,default:()=>[0,1]},paymentMethod:{type:Array,default:()=>[0,1]},productDetail:{type:Object,default:()=>{}},isShowPackage:{type:Boolean,default:!1}},emits:["onReset","onUpdate","onVerify"],setup(o,{expose:a,emit:l}){const d=o,h=w({}),e=He({formInfo:d.formInfo}),_=w(!1),B=w(0),v=w(!1),y=60,r=w(0),D=w("\u83B7\u53D6\u9A8C\u8BC1\u7801"),g=w(!1),C=f=>ft(f)?!0:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u59D3\u540D",A=N(()=>ze.filter((f,s)=>d.payments.includes(s))),S=N(()=>Ze.filter((f,s)=>d.paymentMethod.includes(s))),p=N(()=>e.formInfo.insured.relationToHolder===ee.SELF),k=N(()=>{var f,s;return(s=(f=d.productDetail)==null?void 0:f.tenantProductInsureVO)==null?void 0:s.attachmentVOList.filter(F=>F.attachmentName==="\u8D39\u7387\u8868")}),Q=N(()=>{var f,s;return((s=(f=d.productDetail)==null?void 0:f.tenantProductInsureVO)==null?void 0:s.attachmentVOList.filter(F=>!["\u5065\u5EB7\u544A\u77E5","\u8D39\u7387\u8868"].includes(F.attachmentName)))||[]}),Fe=N(()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(e.formInfo.holder.mobile)),ae=()=>(v.value=!0,v),be=f=>{B.value=f,_.value=!0},ge=()=>{v.value=!1},Ce=()=>new Promise((f,s)=>{h==null||h.value.validate().then(()=>{f("")},F=>{s(F)})}),Ie=()=>{if(r.value>0)return;r.value=y;const f=()=>{D.value=`${r.value}s`,r.value-=1};f();const s=setInterval(()=>{r.value===0?(D.value="\u83B7\u53D6\u9A8C\u8BC1\u7801",r.value=0,clearInterval(s)):f()},1e3)},Ee=async()=>{r.value>0||h==null||h.value.validate("mobile").then(async()=>{const f=await ut(e.formInfo.holder.mobile),{code:s,data:F}=f;s==="10000"&&(g.value=!0,Re({message:"\u77ED\u4FE1\u53D1\u9001\u6210\u529F\uFF0C\u8BF7\u67E5\u6536"}),Ie())})},we=()=>{const{relationToHolder:f}=e.formInfo.insured;f===ee.SELF?(e.formInfo.insured={certNo:e.formInfo.holder.certNo,name:e.formInfo.holder.name,socialFlag:e.formInfo.holder.socialFlag,relationToHolder:f},l("onReset")):(e.formInfo.insured={certNo:"",name:"",socialFlag:We.HAS,relationToHolder:f},l("onUpdate"))},Be=f=>new Promise((s,F)=>{if(!f||!ot(f)||!e.formInfo.holder.mobile){s(!1);return}nt(e.formInfo.holder.mobile,e.formInfo.holder.mobileSmsCode).then(M=>{const{data:Y}=M;s(!!Y)})});return z([()=>e.formInfo.holder.certNo,()=>e.formInfo.insured.certNo],()=>{var f,s;e.formInfo.holder.certNo=(f=e.formInfo.holder.certNo)==null?void 0:f.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,""),e.formInfo.insured.certNo=(s=e.formInfo.insured.certNo)==null?void 0:s.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,"")},{deep:!0,immediate:!0}),z(()=>e.formInfo.holder,()=>{e.formInfo.insured.relationToHolder===ee.SELF&&Object.assign(e.formInfo.insured,e.formInfo.holder)},{deep:!0,immediate:!0}),z(()=>e.formInfo.insured.certNo,()=>{var s,F;let f=!1;Te(e.formInfo.insured.certNo)&&(f=!0),(F=(s=e.formInfo)==null?void 0:s.packageProductList)==null||F.forEach(M=>{f?et(M,e.formInfo.insured.certNo)||(M.disabled=!0,M.value=Qe.UN_INSURE):M.disabled=!1})}),a({validateForm:Ce,previewFile:be,reEditForm:ge,isAgreeFile:v,onSubmit:ae}),(f,s)=>{const F=I("ProField"),M=I("van-button"),Y=I("ProRadioButton"),Ae=I("van-switch"),$e=I("ProForm"),Pe=I("van-config-provider");return n(),E(Pe,{"theme-vars":t(De)},{default:c(()=>[i($e,{ref_key:"formRef",ref:h},{default:c(()=>{var se,le,ue,ne,re,ie,de,ce,me,pe;return[i(O),u("div",ao,[so,((se=d.formAuth)==null?void 0:se.holderNameDisable)?(n(),E(F,{key:0,label:"\u59D3\u540D",class:"pro-field","is-view":!0},{input:c(()=>[P($(t(ve)(t(e).formInfo.holder.name)),1)]),_:1})):(n(),E(F,{key:1,modelValue:t(e).formInfo.holder.name,"onUpdate:modelValue":s[0]||(s[0]=m=>t(e).formInfo.holder.name=m),label:"\u59D3\u540D",name:"name",required:"",placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",maxlength:"50",rules:[{validator:C}],"custom-class":"custom-class-name"},null,8,["modelValue","rules"])),((le=d.formAuth)==null?void 0:le.holderCertDisable)?(n(),E(F,{key:2,label:"\u8BC1\u4EF6\u53F7\u7801",class:"pro-field","is-view":!0},{input:c(()=>[P($(t(he)(t(e).formInfo.holder.certNo)),1)]),_:1})):(n(),E(F,{key:3,modelValue:t(e).formInfo.holder.certNo,"onUpdate:modelValue":s[1]||(s[1]=m=>t(e).formInfo.holder.certNo=m),label:"\u8BC1\u4EF6\u53F7\u7801",name:"certNo",required:"",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",maxlength:"18","validate-type":[t(X).ID_CARD],"custom-class":"custom-class-certNo"},null,8,["modelValue","validate-type"])),((ue=d.formAuth)==null?void 0:ue.holderMobileDisable)?(n(),E(F,{key:4,label:"\u624B\u673A\u53F7",class:"pro-field","is-view":!0},{input:c(()=>[P($(t(tt)(t(e).formInfo.holder.mobile)),1)]),_:1})):(n(),E(F,{key:5,modelValue:t(e).formInfo.holder.mobile,"onUpdate:modelValue":s[2]||(s[2]=m=>t(e).formInfo.holder.mobile=m),label:"\u624B\u673A\u53F7",name:"mobile",required:"",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",type:"digit",maxlength:"11","validate-type":[t(X).PHONE],"custom-class":"custom-class-mobile"},null,8,["modelValue","validate-type"])),((ne=d.formAuth)==null?void 0:ne.holderMobileDisable)?V("",!0):(n(),E(F,{key:6,modelValue:t(e).formInfo.holder.mobileSmsCode,"onUpdate:modelValue":s[3]||(s[3]=m=>t(e).formInfo.holder.mobileSmsCode=m),label:"\u9A8C\u8BC1\u7801",name:"mobileSmsCode",type:"digit",required:"",rules:[{validator:Be,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u9A8C\u8BC1\u7801"}],"input-align":"left",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801","error-message-align":"left",maxlength:"6","validate-type":[t(X).SMS_CODE],"custom-class":"custom-class-mobileSmsCode"},{extra:c(()=>[i(M,{class:J(["sms-code",{"count-down":r.value>0}]),size:"small",type:"primary",disabled:!t(Fe),onClick:Ee},{default:c(()=>[P($(D.value),1)]),_:1},8,["class","disabled"])]),_:1},8,["modelValue","rules","validate-type"]))]),i(O),u("div",lo,[uo,i(F,{modelValue:t(e).formInfo.insured.relationToHolder,"onUpdate:modelValue":s[5]||(s[5]=m=>t(e).formInfo.insured.relationToHolder=m),class:"relation-to-Holder",label:"",name:"relationToHolder",placeholder:"\u8BF7\u9009\u62E9",onClick:we},{input:c(()=>{var m;return[i(Y,{modelValue:t(e).formInfo.insured.relationToHolder,"onUpdate:modelValue":s[4]||(s[4]=U=>t(e).formInfo.insured.relationToHolder=U),disabled:(m=d.formAuth)==null?void 0:m.relationToHolderDisable,options:t(Xe)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"])]),i(O),u("div",no,[ro,((re=d.formAuth)==null?void 0:re.insuredNameDisable)?(n(),E(F,{key:0,label:"\u59D3\u540D",class:"pro-field","is-view":!0},{input:c(()=>[P($(t(ve)(t(e).formInfo.insured.name)),1)]),_:1})):V("",!0),!((ie=d.formAuth)==null?void 0:ie.insuredNameDisable)&&!t(p)?(n(),E(F,{key:1,modelValue:t(e).formInfo.insured.name,"onUpdate:modelValue":s[6]||(s[6]=m=>t(e).formInfo.insured.name=m),label:"\u59D3\u540D",name:"name",required:"",maxlength:"50",rules:[{validator:C}]},null,8,["modelValue","rules"])):V("",!0),((de=d.formAuth)==null?void 0:de.insuredCertDisable)?(n(),E(F,{key:2,label:"\u8BC1\u4EF6\u53F7\u7801",class:"pro-field","is-view":!0},{input:c(()=>[P($(t(he)(t(e).formInfo.insured.certNo)),1)]),_:1})):V("",!0),!((ce=d.formAuth)==null?void 0:ce.insuredCertDisable)&&!t(p)?(n(),E(F,{key:3,modelValue:t(e).formInfo.insured.certNo,"onUpdate:modelValue":s[7]||(s[7]=m=>t(e).formInfo.insured.certNo=m),label:"\u8BC1\u4EF6\u53F7\u7801",name:"certNo",required:"",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",maxlength:"20","validate-type":[t(X).ID_CARD]},null,8,["modelValue","validate-type"])):V("",!0),i(F,{modelValue:t(e).formInfo.insured.socialFlag,"onUpdate:modelValue":s[9]||(s[9]=m=>t(e).formInfo.insured.socialFlag=m),label:"\u6709\u65E0\u793E\u4FDD",name:"name",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:c(()=>{var m;return[i(Y,{modelValue:t(e).formInfo.insured.socialFlag,"onUpdate:modelValue":s[8]||(s[8]=U=>t(e).formInfo.insured.socialFlag=U),disabled:(m=d.formAuth)==null?void 0:m.insuredSocialDisable,options:t(Je)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"])]),i(O),o.isShowPackage?(n(),b("div",io,[i(oo,{"package-product-list":(me=o.formInfo)==null?void 0:me.packageProductList},null,8,["package-product-list"])])):V("",!0),i(O),u("div",co,[((pe=d.formAuth)==null?void 0:pe.paymentFrequencyDisable)?V("",!0):(n(),E(F,{key:0,modelValue:t(e).formInfo.paymentFrequency,"onUpdate:modelValue":s[11]||(s[11]=m=>t(e).formInfo.paymentFrequency=m),label:"\u4EA4\u8D39\u65B9\u5F0F",name:"paymentFrequency",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:c(()=>{var m;return[i(Y,{modelValue:t(e).formInfo.paymentFrequency,"onUpdate:modelValue":s[10]||(s[10]=U=>t(e).formInfo.paymentFrequency=U),disabled:(m=d.formAuth)==null?void 0:m.paymentFrequencyDisable,options:t(A)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"])),i(O),i(F,{modelValue:t(e).formInfo.paymentMethod,"onUpdate:modelValue":s[13]||(s[13]=m=>t(e).formInfo.paymentMethod=m),label:"\u652F\u4ED8\u65B9\u5F0F",name:"paymentMethod",required:"",placeholder:"\u8BF7\u9009\u62E9","custom-class":"custom-class-paymentMethod"},{input:c(()=>{var m;return[i(Y,{modelValue:t(e).formInfo.paymentMethod,"onUpdate:modelValue":s[12]||(s[12]=U=>t(e).formInfo.paymentMethod=U),disabled:(m=d.formAuth)==null?void 0:m.paymentDisable,options:t(S)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"]),i(O),u("div",mo,[i(F,{label:"\u5F00\u901A\u81EA\u4E3B\u91CD\u65B0\u6295\u4FDD",class:"pro-field",name:"renewalDK",placeholder:"\u8BF7\u9009\u62E9",border:!1},{input:c(()=>{var m;return[i(Ae,{modelValue:t(e).formInfo.renewalDK,"onUpdate:modelValue":s[14]||(s[14]=U=>t(e).formInfo.renewalDK=U),disabled:(m=d.formAuth)==null?void 0:m.renewalDKDisable},null,8,["modelValue","disabled"])]}),_:1}),po])]),i(O),i(rt,{show:_.value,"onUpdate:show":s[15]||(s[15]=m=>_.value=m),"content-list":t(Q).concat(t(k)),"active-index":B.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9",onSubmit:ae},null,8,["show","content-list","active-index"])]}),_:1},512)]),_:1},8,["theme-vars"])}}});var pa=L(fo,[["__scopeId","data-v-0d6fe968"]]);const _o=o=>(j("data-v-812ee74a"),o=o(),G(),o),vo={key:0,class:"page-waiting"},ho=["src"],Do=_o(()=>u("div",{class:"tips"},[u("p",null,"\u652F\u4ED8\u6210\u529F\uFF0C\u627F\u4FDD\u4E2D...")],-1)),yo=x({props:{isShow:{type:Boolean,default:()=>{}}},setup(o){const a=o;return z(()=>a.isShow,l=>{l?document.body.style.overflow="hidden":document.body.style.overflow="inherit"}),(l,d)=>a.isShow?(n(),b("div",vo,[u("img",{class:"loading",src:t(ht)},null,8,ho),Do])):V("",!0)}});var fa=L(yo,[["__scopeId","data-v-812ee74a"]]);const ye=o=>(j("data-v-171c7312"),o=o(),G(),o),Fo={key:0,class:"pro-modal"},bo=ye(()=>u("div",{class:"pro-overlay"},null,-1)),go={class:"pro-modal-wrapper"},Co=["src"],Io={class:"pro-modal-body"},Eo={class:"pro-modal-content"},wo=ye(()=>u("p",{class:"tips"},"\u5347\u7EA7\u540E\u7684\u4FDD\u969C\u5C06\u4E8E\u7B2C\u4E8C\u671F\u4FDD\u8D39\u6263\u8D39/\u7F34\u8D39\u6210\u529F\u540E\u751F\u6548",-1)),Bo={class:"pro-modal-content"},Ao={class:"product-attachment-list"},$o=P(" \u8BF7\u60A8\u91CD\u70B9\u9605\u8BFB\u5E76\u77E5\u6653 "),Po={key:0,class:"dun-hao"},So={class:"pro-modal-close"},Vo=["src"],ko=x({props:{orderNo:{type:String,default:""},tenantId:{type:String,default:""},isShow:{type:Boolean,default:()=>{}},upgradeCode:{type:String,default:""}},emits:["on-confirm","on-close"],setup(o,{emit:a}){const l=o,d=w(),h=w(),e=w(),_=w(),B=w([]),v=w(l.upgradeCode),y=()=>{a("on-close")},r=()=>{a("on-confirm")},D=async()=>{try{const C=st({tenantId:l.tenantId,premium:_.value,orderDetail:e.value,productDetail:d.value,insureDetail:h.value,successJumpUrl:"",iseeBizNo:""},lt),A=await mt(C),{code:S,data:p}=A;S==="10000"&&(_.value=p.installmentPremium)}catch(C){console.log(C)}},g=()=>{const C=pt({productCode:v.value,withInsureInfo:!0,tenantId:l.tenantId}),A=dt({productCode:v.value}),S=ct({orderNo:l.orderNo,tenantId:l.tenantId});Promise.all([C,A,S]).then(([p,k,Q])=>{p.code==="10000"&&(d.value=p.data,B.value=p.data.tenantProductInsureVO.attachmentVOList),k.code==="10000"&&(h.value=k.data),Q.code==="10000"&&(e.value=Q.data),D()})};return z(()=>l.isShow,C=>{v.value=l.upgradeCode,C?(document.body.style.overflow="hidden",g()):document.body.style.overflow="inherit"}),(C,A)=>{const S=I("ProPDFviewer");return l.isShow?(n(),b("div",Fo,[bo,u("div",go,[u("img",{class:"cover",src:t(_t)},null,8,Co),u("div",Io,[u("div",Eo,[u("p",null,"\u6BCF\u6708\u4FDD\u8D39\u4EC5\u9700"+$(t(at)(_.value||0))+"\u5143\uFF0C\u65E0\u9700\u91CD\u590D\u6295\u4FDD",1),wo]),u("div",{class:"pro-modal-btn",onClick:r},"\u4E00\u952E\u5347\u7EA7"),u("div",Bo,[u("div",Ao,[$o,(n(!0),b(T,null,R(B.value,(p,k)=>(n(),E(S,{key:k,class:"file-name",title:`\u300A${p.attachmentName}\u300B`,content:p.attachmentUri,type:"pdf"},{default:c(()=>[k!==(B.value||[]).length-1?(n(),b("span",Po,"\u3001")):V("",!0)]),_:2},1032,["title","content"]))),128))])])]),u("div",So,[u("img",{src:t(it),onClick:y},null,8,Vo)])])])):V("",!0)}}});var _a=L(ko,[["__scopeId","data-v-171c7312"]]);const No=o=>(j("data-v-043963d8"),o=o(),G(),o),xo={class:"header"},Lo=["src"],To={class:"content"},Uo=No(()=>u("h4",null,"\u6E29\u99A8\u63D0\u793A\uFF0C\u60A8\u5DF2\u8FDB\u5165\u6295\u4FDD\u6D41\u7A0B\uFF1A",-1)),qo=P(" \u8BF7\u4ED4\u7EC6\u9605\u8BFB\u514D\u8D23\u6761\u6B3E\u3001\u6295\u4FDD\u987B\u77E5\u7B49\u4FE1\u606F\uFF0C\u8BF7\u60A8\u91CD\u70B9\u9605\u8BFB\u5E76\u77E5\u6653 "),Oo=["onClick"],Mo=P(" \uFF0C\u4E3A\u7EF4\u62A4\u60A8\u7684\u5408\u6CD5\u6743\u76CA\uFF0C\u60A8\u7684\u64CD\u4F5C\u8F68\u8FF9\u5C06\u88AB\u8BB0\u5F55\u3002 "),Ho={class:"footer"},Ro=P(" \u597D\u7684 "),Ko={key:0},Yo=x({props:{productDetail:{type:Object,default:()=>{}}},setup(o){const a=o,l="PRENOTICE",d=new Ue({source:"sessionStorage"}),h=w(!1),e=w(!1),_=Ke({time:4e3,onFinish:()=>{d.set(`${l}-isShow`,"1"),h.value=!1}}),B=w(),v=N(()=>{var D,g;return(g=(D=a.productDetail)==null?void 0:D.tenantProductInsureVO)==null?void 0:g.attachmentVOList.filter(C=>C.attachmentName==="\u4E2A\u4EBA\u4FE1\u606F\u4FDD\u62A4\u653F\u7B56")}),y=N(()=>_.current.value.seconds),r=D=>{e.value=!e.value,B.value=D};return Ye(()=>{h.value=!0,_.start()}),(D,g)=>{const C=I("VanButton"),A=I("ProPopup"),S=I("ProFilePreview");return n(),b(T,null,[i(A,{class:"pre-notice-wrap",show:h.value,closeable:!1,height:45},{default:c(()=>[u("div",xo,[u("img",{src:t(vt)},null,8,Lo)]),u("div",To,[Uo,u("p",null,[qo,(n(!0),b(T,null,R(t(v),(p,k)=>(n(),b("span",{key:k,class:"file-name",onClick:Q=>r(p.attachmentUri)}," \u300A"+$(p.attachmentName)+"\u300B ",9,Oo))),128)),Mo])]),u("div",Ho,[i(C,{type:"primary",block:"",round:""},{default:c(()=>[Ro,t(y)?(n(),b("span",Ko,$(t(y))+"s",1)):V("",!0)]),_:1})])]),_:1},8,["show"]),i(A,{show:e.value,"onUpdate:show":g[0]||(g[0]=p=>e.value=p),class:"pre-notice-wrap","close-icon":"close",position:"bottom",style:{height:"600px",paddingTop:"40px"}},{default:c(()=>[i(S,{content:B.value,type:"pdf"},null,8,["content"])]),_:1},8,["show"])],64)}}});var va=L(Yo,[["__scopeId","data-v-043963d8"]]);const jo={class:"list"},Go={class:"item"},zo={class:"footer"},Qo=P("\u90E8\u5206\u4E3A\u662F"),Xo=P("\u5168\u90E8\u4E3A\u5426"),ha=x({props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealth"],setup(o,{emit:a}){const l=o,d=w(l.show),h=w(l.activeIndex),e=N(()=>{var y;return(y=l.contentList[h.value])==null?void 0:y.attachmentUri}),_=w(!0),B=y=>{_.value=!1,a("update:show",!1),a("onConfirmHealth",y)},v=()=>{_.value&&a("onCloseHealth")};return z(()=>l,()=>{d.value=l.show,h.value=l.activeIndex},{deep:!0,immediate:!0}),(y,r)=>{const D=I("ProTab"),g=I("ProFilePreview"),C=I("VanButton"),A=I("van-config-provider"),S=I("ProPopup");return n(),E(S,{show:d.value,"onUpdate:show":r[3]||(r[3]=p=>d.value=p),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:r[4]||(r[4]=p=>v())},{default:c(()=>[i(A,{"theme-vars":t(De),class:"custom-provider"},{default:c(()=>[d.value?(n(),E(D,{key:0,active:h.value,"onUpdate:active":r[0]||(r[0]=p=>h.value=p),list:o.contentList.map((p,k)=>({title:p.attachmentName,slotName:`guarantee-${k}`})),class:"tab"},null,8,["active","list"])):V("",!0),u("div",jo,[u("div",Go,[(n(),E(g,{key:t(e),content:t(e),type:"pdf"},null,8,["content"]))])]),u("div",zo,[i(C,{type:"primary",block:"",round:"",onClick:r[1]||(r[1]=p=>B("N"))},{default:c(()=>[Qo]),_:1}),i(C,{type:"primary",plain:"",block:"",round:"",onClick:r[2]||(r[2]=p=>B("allFalse"))},{default:c(()=>[Xo]),_:1})])]),_:1},8,["theme-vars"])]),_:1},8,["show"])}}}),K={holderNameDisable:!0,holderCertDisable:!0,holderMobileDisable:!0,holderSocialDisable:!0,relationToHolderDisable:!0,insuredNameDisable:!0,insuredCertDisable:!0,insuredSocialDisable:!0,paymentDisable:!0,renewalDKDisable:!0,paymentFrequencyDisable:!0};H(q({},K),{holderSocialDisable:!1,relationToHolderDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});H(q({},K),{holderNameDisable:!1,holderCertDisable:!1,holderSocialDisable:!1,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});H(q({},K),{holderNameDisable:!1,holderCertDisable:!1,holderMobileDisable:!1,holderSocialDisable:!1,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});H(q({},K),{holderSocialDisable:!1,relationToHolderDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});H(q({},K),{paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});const Da=H(q({},K),{holderNameDisable:!1,holderCertDisable:!1,holderMobileDisable:!1,holderSocialDisable:!1,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});H(q({},K),{relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});const ya=q({},K);export{ia as B,da as D,ca as G,pa as H,va as P,ma as S,_a as U,fa as W,ha as _,Da as a,K as d,ya as p};
