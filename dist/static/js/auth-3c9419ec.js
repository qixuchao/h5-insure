var Se=Object.defineProperty,Ve=Object.defineProperties;var ke=Object.getOwnPropertyDescriptors;var fe=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var _e=(o,a,u)=>a in o?Se(o,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[a]=u,q=(o,a)=>{for(var u in a||(a={}))Ne.call(a,u)&&_e(o,u,a[u]);if(fe)for(var u of fe(a))xe.call(a,u)&&_e(o,u,a[u]);return o},H=(o,a)=>Ve(o,ke(a));import{_ as x,e as te,i as O,a as Z,a5 as Le,H as Te,V as X,S as Ue}from"./index-a5b54414.js";import{g as N,j as n,n as D,A as t,z as l,J as P,Q as oe,y as k,E as A,r as w,af as qe,p as r,m as d,F as L,G as R,k as B,C as S,L as J,t as V,H as Oe,a4 as j,a5 as G,Y as Me,M as He,_ as z,T as Re,ar as Ke,h as Ye}from"./vendor-ec22d003.js";import{P as je}from"./index-c5e84e88.js";import{t as De}from"./theme-ea709837.js";import{g as Ge,h as ze,R as ee,I as Qe,a as Xe,i as Je,S as We}from"./infoCollection-192ba138.js";import{A as Ze}from"./bankCard-0e4ce564.js";import{c as et,n as ve,i as he,m as tt,v as ot,d as at,e as st,f as ut}from"./utils-d046687d.js";import{s as lt,c as nt}from"./phoneVerify-2f735385.js";import{_ as rt,c as it}from"./index-91f95db1.js";import{i as dt,g as ct,e as mt}from"./trial-abc6ba8c.js";import{p as pt}from"./product-9e18532a.js";const ft=o=>/^[\u4E00-\u9FA5．·]{2,50}$/.test(o);var _t="/static/assets/upgrade_bg.4a771537.png",vt="/static/assets/header-logo.fcc5844b.png",ht="/static/assets/loading.bb5f54fd.gif",Dt="/static/assets/check-detail.9716a221.png";const yt=["src"],Ft=["src"],bt=N({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""}},setup(o){const a=o;return(u,i)=>a.isCheck?(n(),D("img",{key:0,src:t(Dt),class:"banner"},null,8,yt)):(n(),D("img",{key:1,src:a.url,class:"banner"},null,8,Ft))}});var ia=x(bt,[["__scopeId","data-v-584aabfc"]]);const gt={class:"product-desc"},Ct={class:"title"},It={class:"desc"},Et=N({props:{productName:{type:String,default:""},productDesc:{type:String,default:""}},setup(o){return(a,u)=>(n(),D("div",gt,[l("div",Ct,P(o.productName),1),l("div",It,P(o.productDesc),1)]))}});var da=x(Et,[["__scopeId","data-v-2e75305e"]]),wt="/static/assets/serviceConfig.df5f765f.png";const Bt={class:"guarantee-list"},At={class:"basic"},$t=["src"],Pt={class:"guarantee-detail"},St={class:"title"},Vt={class:"content"},kt=N({props:{guaranteeList:{type:Array,default:()=>[]},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:10}},setup(o){const a=o,[u,i]=oe(!1),v=k(()=>a.guaranteeList.length>a.count?a.isShowClose?!0:!u.value:!1),e=()=>{i()},f=k(()=>a.guaranteeList.length<=a.count||u.value?a.guaranteeList:a.guaranteeList.slice(0,a.count)),F=A(!1),c=()=>{F.value=!0};return(C,_)=>{const y=w("ProCell"),b=w("ProCard"),I=w("ProPopup"),h=qe("dompurify-html");return n(),D(L,null,[l("div",Bt,[r(b,{title:"\u4FDD\u969C\u5185\u5BB9",link:"\u67E5\u770B\u8BE6\u60C5","show-divider":!0,"show-icon":!0,onLinkClick:c},{default:d(()=>[l("div",At,[(n(!0),D(L,null,R(t(f),(E,$)=>(n(),B(y,{key:$,class:"guarantee-item",title:E.title,content:E.desc,border:!1},null,8,["title","content"]))),128))]),t(v)?(n(),D("div",{key:0,class:"show-more",onClick:e},[S(P(t(u)?"\u6536\u8D77":"\u67E5\u770B\u66F4\u591A")+" ",1),r(te,{name:"down",class:J(["icon",{showMore:t(u)}])},null,8,["class"])])):V("",!0),l("div",{class:"service-config",onClick:_[0]||(_[0]=(...E)=>C.onClose&&C.onClose(...E))},[l("img",{src:t(wt)},null,8,$t)])]),_:1})]),r(I,{show:F.value,"onUpdate:show":_[1]||(_[1]=E=>F.value=E),title:"\u4FDD\u969C\u8BE6\u60C5",class:"guarantee-popup"},{default:d(()=>[l("div",Pt,[(n(!0),D(L,null,R(o.guaranteeList,(E,$)=>(n(),D("div",{key:$,class:"guarantee-item"},[l("div",St,P(E.title),1),Oe(l("div",Vt,null,512),[[h,E.content]])]))),128))])]),_:1},8,["show"])],64)}}});var ca=x(kt,[["__scopeId","data-v-74c6d5ba"]]);const Nt=o=>(j("data-v-1d81ec06"),o=o(),G(),o),xt={class:"question"},Lt=Nt(()=>l("div",{class:"icon"},P("?"),-1)),Tt={class:"title"},Ut=N({props:{name:{type:String,default:""},question:{type:String,default:""},answer:{type:String,default:""}},setup(o){return(a,u)=>{const i=w("van-collapse-item");return n(),B(i,{name:o.name,class:"com-question-item"},{title:d(()=>[l("div",xt,[Lt,l("div",Tt,P(o.question),1)])]),default:d(()=>[S(" "+P(o.answer),1)]),_:1},8,["name"])}}});var qt=x(Ut,[["__scopeId","data-v-1d81ec06"]]);const Ot={class:"com-question"},Mt=N({props:{list:{type:Array,default:()=>[]}},setup(o){const a=o,[u,i]=oe(!1),v=A([]),e=()=>{i()},f=k(()=>a.list.length<=4||u.value?a.list:a.list.slice(0,4));return(F,c)=>{const C=w("van-collapse");return n(),D("div",Ot,[r(C,{modelValue:v.value,"onUpdate:modelValue":c[0]||(c[0]=_=>v.value=_)},{default:d(()=>[(n(!0),D(L,null,R(t(f),(_,y)=>(n(),B(qt,{key:y,name:y.toString(),question:_.title,answer:_.desc},null,8,["name","question","answer"]))),128))]),_:1},8,["modelValue"]),o.list.length>4?(n(),D("div",{key:0,class:"show-more",onClick:e},[S(P(t(u)?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),r(te,{name:"down",class:J(["icon",{showMore:t(u)}])},null,8,["class"])])):V("",!0)])}}});var Ht=x(Mt,[["__scopeId","data-v-5359d801"]]);const Rt=o=>(j("data-v-df0725a6"),o=o(),G(),o),Kt={class:"spec"},Yt=["src"],jt=Rt(()=>l("div",{class:"sub-title"},"\u4EA7\u54C1\u8D44\u6599\u6587\u4EF6\u8BE6\u60C5\u53EF\u624B\u52A8\u653E\u5927\uFF0C\u4EE5\u4FBF\u60A8\u66F4\u6E05\u6670\u67E5\u9605\u5185\u5BB9\u3002",-1)),Gt={class:"tab-1-content"},zt=S(" \u8BF7\u67E5\u770B "),Qt=S(" > "),Xt={key:0,class:"dun-hao"},Jt=N({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""},detail:{type:Object,default:()=>{}}},setup(o){const a=o,u=A([{title:"\u6211\u8981\u6295\u4FDD",slotName:"tab1"},{title:"\u4EA7\u54C1\u7279\u8272",slotName:"tab2"},{title:"\u7406\u8D54\u6D41\u7A0B",slotName:"tab3"},{title:"\u5E38\u89C1\u95EE\u9898",slotName:"tab4"}]),i=e=>{const f=e.split("?")[0],F=f.lastIndexOf(".");return f.substring(F+1)},v=e=>{if(!e)return"";let f=e;return f.indexOf("\u300A")===-1&&(f=`\u300A${f}`),f.indexOf("\u300B")===-1&&(f=`${f}\u300B`),f};return(e,f)=>{const F=w("ProPDFviewer");return n(),B(Le,{class:"tabs",list:u.value,sticky:"",scrollspy:""},{tab1:d(()=>[Me(e.$slots,"form",{},void 0,!0)]),tab2:d(()=>{var c,C;return[l("div",Kt,[(n(!0),D(L,null,R(((C=(c=a.detail)==null?void 0:c.tenantProductInsureVO)==null?void 0:C.spec)||[],(_,y)=>(n(),D("img",{key:y,src:_,class:"detail-img"},null,8,Yt))),128)),r(O)]),r(Z,{title:"\u4EA7\u54C1\u8D44\u6599"},{subTitle:d(()=>[jt]),default:d(()=>{var _,y;return[l("div",Gt,[zt,(n(!0),D(L,null,R(((y=(_=o.detail)==null?void 0:_.tenantProductInsureVO)==null?void 0:y.attachmentVOList)||[],(b,I)=>(n(),B(F,{key:I,type:i(b.attachmentUri),class:"file-name",title:v(b.attachmentName),content:b.attachmentUri},{default:d(()=>{var h,E;return[Qt,I!==(((E=(h=o.detail)==null?void 0:h.tenantProductInsureVO)==null?void 0:E.attachmentVOList)||[]).length-1?(n(),D("span",Xt,"\u3001")):V("",!0)]}),_:2},1032,["type","title","content"]))),128))])]}),_:1})]}),tab3:d(()=>[r(Z,{title:"\u7406\u8D54\u6D41\u7A0B"},{default:d(()=>{var c,C;return[r(je,{list:(C=(c=a.detail)==null?void 0:c.tenantProductInsureVO)==null?void 0:C.settlementProcessList},null,8,["list"])]}),_:1})]),tab4:d(()=>[r(Z,{title:"\u5E38\u89C1\u95EE\u9898"},{default:d(()=>{var c,C;return[r(Ht,{list:(C=(c=a.detail)==null?void 0:c.tenantProductInsureVO)==null?void 0:C.questionList},null,8,["list"])]}),_:1})]),_:3},8,["list"])}}});var ma=x(Jt,[["__scopeId","data-v-df0725a6"]]);const Wt=o=>(j("data-v-0dce64f2"),o=o(),G(),o),Zt={class:"refueling-package-com"},eo=Wt(()=>l("div",{class:"title"},"\u52A0\u6CB9\u5305",-1)),to=N({props:{packageProductList:{type:Array,default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:3}},setup(o){const a=o,[u,i]=oe(!1),v=k(()=>a.packageProductList.length>a.count?a.isShowClose?!0:!u.value:!1),e=()=>{i()},f=k(()=>a.packageProductList.length<=a.count||u.value?a.packageProductList:a.packageProductList.slice(0,a.count));return(F,c)=>{const C=w("ProRadioButton"),_=w("ProField"),y=w("ProForm");return n(),D("div",Zt,[eo,r(y,{ref:"formRef"},{default:d(()=>[(n(!0),D(L,null,R(t(f),(b,I)=>(n(),B(_,{key:`${b.value}_${I}`,modelValue:b.value,"onUpdate:modelValue":h=>b.value=h,label:b.packageName,required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:d(()=>[r(C,{modelValue:b.value,"onUpdate:modelValue":h=>b.value=h,options:t(Ge),disabled:b.disabled},null,8,["modelValue","onUpdate:modelValue","options","disabled"])]),_:2},1032,["modelValue","onUpdate:modelValue","label"]))),128)),t(v)?(n(),D("div",{key:0,class:"show-more",onClick:e},[S(P(t(u)?"\u6536\u8D77":"\u67E5\u770B\u66F4\u591A")+" ",1),r(te,{name:"down",class:J(["icon",{showMore:t(u)}])},null,8,["class"])])):V("",!0)]),_:1},512)])}}});var oo=x(to,[["__scopeId","data-v-0dce64f2"]]);const W=o=>(j("data-v-7f561fce"),o=o(),G(),o),ao={class:"holder container"},so=W(()=>l("div",{class:"title"},"\u6295\u4FDD\u4EBA\u4FE1\u606F",-1)),uo={class:"insured-relation container"},lo=W(()=>l("div",{class:"title"},"\u4E3A\u8C01\u6295\u4FDD",-1)),no={class:"insured container"},ro=W(()=>l("div",{class:"title"},"\u88AB\u4FDD\u4EBA\u4FE1\u606F",-1)),io={key:0,class:"container"},co={class:"payment container"},mo={class:"renewal-wrapper"},po=W(()=>l("div",{class:"desc"},[l("p",null,"\u4FDD\u5355\u5230\u671F\u81EA\u52A8\u91CD\u65B0\u6295\u4FDD\uFF0C\u4EAB\u53D7\u4FDD\u969C\u4E0D\u95F4\u65AD"),l("p",null,"\u81EA\u4ECE\u91CD\u65B0\u6295\u4FDD\u5F00\u542F\u540E\uFF0C\u4E2D\u9014\u53EF\u968F\u65F6\u53D6\u6D88")],-1)),fo=N({props:{disable:{type:Boolean,default:!1},formAuth:{type:Object,default:()=>{}},formInfo:{type:Object,default:()=>{}},premium:{type:Number,default:0},payments:{type:Array,default:()=>[0,1]},paymentMethod:{type:Array,default:()=>[0,1]},productDetail:{type:Object,default:()=>{}},isShowPackage:{type:Boolean,default:!1}},emits:["onReset","onUpdate","onVerify"],setup(o,{expose:a,emit:u}){const i=o,v=A({}),e=He({formInfo:i.formInfo}),f=A(!1),F=A(0),c=A(!1),C=60,_=A(0),y=A("\u83B7\u53D6\u9A8C\u8BC1\u7801"),b=A(!1),I=p=>ft(p)?!0:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u59D3\u540D",h=k(()=>ze.filter((p,s)=>i.payments.includes(s))),E=k(()=>Ze.filter((p,s)=>i.paymentMethod.includes(s))),$=k(()=>e.formInfo.insured.relationToHolder===ee.SELF),T=k(()=>{var p,s;return(s=(p=i.productDetail)==null?void 0:p.tenantProductInsureVO)==null?void 0:s.attachmentVOList.filter(g=>g.attachmentName==="\u8D39\u7387\u8868")}),Q=k(()=>{var p,s;return((s=(p=i.productDetail)==null?void 0:p.tenantProductInsureVO)==null?void 0:s.attachmentVOList.filter(g=>!["\u5065\u5EB7\u544A\u77E5","\u8D39\u7387\u8868"].includes(g.attachmentName)))||[]}),Fe=k(()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(e.formInfo.holder.mobile)),ae=()=>(c.value=!0,c),be=p=>{F.value=p,f.value=!0},ge=()=>{c.value=!1},Ce=()=>new Promise((p,s)=>{v==null||v.value.validate().then(()=>{p("")},()=>{s()})}),Ie=()=>{if(_.value>0)return;_.value=C;const p=()=>{y.value=`${_.value}s`,_.value-=1};p();const s=setInterval(()=>{_.value===0?(y.value="\u83B7\u53D6\u9A8C\u8BC1\u7801",_.value=0,clearInterval(s)):p()},1e3)},Ee=async()=>{_.value>0||v==null||v.value.validate("mobile").then(async()=>{const p=await lt(e.formInfo.holder.mobile),{code:s,data:g}=p;s==="10000"&&(b.value=!0,Re({message:"\u77ED\u4FE1\u53D1\u9001\u6210\u529F\uFF0C\u8BF7\u67E5\u6536"}),Ie())})},we=()=>{const{relationToHolder:p}=e.formInfo.insured;p===ee.SELF?(e.formInfo.insured={certNo:e.formInfo.holder.certNo,name:e.formInfo.holder.name,socialFlag:e.formInfo.holder.socialFlag,relationToHolder:p},u("onReset")):(e.formInfo.insured={certNo:"",name:"",socialFlag:We.HAS,relationToHolder:p},u("onUpdate"))},Be=p=>new Promise((s,g)=>{if(!p||!ot(p)||!e.formInfo.holder.mobile){s(!1);return}nt(e.formInfo.holder.mobile,e.formInfo.holder.mobileSmsCode).then(M=>{const{data:Y}=M;s(!!Y)})});return z([()=>e.formInfo.holder.certNo,()=>e.formInfo.insured.certNo],()=>{var p,s;e.formInfo.holder.certNo=(p=e.formInfo.holder.certNo)==null?void 0:p.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,""),e.formInfo.insured.certNo=(s=e.formInfo.insured.certNo)==null?void 0:s.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,"")},{deep:!0,immediate:!0}),z(()=>e.formInfo.holder,()=>{e.formInfo.insured.relationToHolder===ee.SELF&&Object.assign(e.formInfo.insured,e.formInfo.holder)},{deep:!0,immediate:!0}),z(()=>e.formInfo.insured.certNo,()=>{var s,g;let p=!1;Te(e.formInfo.insured.certNo)&&(p=!0),(g=(s=e.formInfo)==null?void 0:s.packageProductList)==null||g.forEach(M=>{p?et(M,e.formInfo.insured.certNo)||(M.disabled=!0,M.value=Qe.UN_INSURE):M.disabled=!1})}),a({validateForm:Ce,previewFile:be,reEditForm:ge,isAgreeFile:c,onSubmit:ae}),(p,s)=>{const g=w("ProField"),M=w("van-button"),Y=w("ProRadioButton"),Ae=w("van-switch"),$e=w("ProForm"),Pe=w("van-config-provider");return n(),B(Pe,{"theme-vars":t(De)},{default:d(()=>[r($e,{ref_key:"formRef",ref:v},{default:d(()=>{var se,ue,le,ne,re,ie,de,ce,me,pe;return[r(O),l("div",ao,[so,((se=i.formAuth)==null?void 0:se.holderNameDisable)?(n(),B(g,{key:0,label:"\u59D3\u540D",class:"pro-field","is-view":!0},{input:d(()=>[S(P(t(ve)(t(e).formInfo.holder.name)),1)]),_:1})):(n(),B(g,{key:1,modelValue:t(e).formInfo.holder.name,"onUpdate:modelValue":s[0]||(s[0]=m=>t(e).formInfo.holder.name=m),label:"\u59D3\u540D",name:"name",required:"",placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",maxlength:"50",rules:[{validator:I}]},null,8,["modelValue","rules"])),((ue=i.formAuth)==null?void 0:ue.holderCertDisable)?(n(),B(g,{key:2,label:"\u8BC1\u4EF6\u53F7\u7801",class:"pro-field","is-view":!0},{input:d(()=>[S(P(t(he)(t(e).formInfo.holder.certNo)),1)]),_:1})):(n(),B(g,{key:3,modelValue:t(e).formInfo.holder.certNo,"onUpdate:modelValue":s[1]||(s[1]=m=>t(e).formInfo.holder.certNo=m),label:"\u8BC1\u4EF6\u53F7\u7801",name:"certNo",required:"",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",maxlength:"18","validate-type":[t(X).ID_CARD]},null,8,["modelValue","validate-type"])),((le=i.formAuth)==null?void 0:le.holderMobileDisable)?(n(),B(g,{key:4,label:"\u624B\u673A\u53F7",class:"pro-field","is-view":!0},{input:d(()=>[S(P(t(tt)(t(e).formInfo.holder.mobile)),1)]),_:1})):(n(),B(g,{key:5,modelValue:t(e).formInfo.holder.mobile,"onUpdate:modelValue":s[2]||(s[2]=m=>t(e).formInfo.holder.mobile=m),label:"\u624B\u673A\u53F7",name:"mobile",required:"",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",type:"digit",maxlength:"11","validate-type":[t(X).PHONE]},null,8,["modelValue","validate-type"])),((ne=i.formAuth)==null?void 0:ne.holderMobileDisable)?V("",!0):(n(),B(g,{key:6,modelValue:t(e).formInfo.holder.mobileSmsCode,"onUpdate:modelValue":s[3]||(s[3]=m=>t(e).formInfo.holder.mobileSmsCode=m),label:"\u9A8C\u8BC1\u7801",name:"mobileSmsCode",type:"digit",required:"",rules:[{validator:Be,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u5185\u5BB9"}],"input-align":"left",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801","error-message-align":"left",maxlength:"6","validate-type":[t(X).SMS_CODE]},{extra:d(()=>[r(M,{class:J(["sms-code",{"count-down":_.value>0}]),size:"small",type:"primary",disabled:!t(Fe),onClick:Ee},{default:d(()=>[S(P(y.value),1)]),_:1},8,["class","disabled"])]),_:1},8,["modelValue","rules","validate-type"]))]),r(O),l("div",uo,[lo,r(g,{modelValue:t(e).formInfo.insured.relationToHolder,"onUpdate:modelValue":s[5]||(s[5]=m=>t(e).formInfo.insured.relationToHolder=m),class:"relation-to-Holder",label:"",name:"relationToHolder",placeholder:"\u8BF7\u9009\u62E9",onClick:we},{input:d(()=>{var m;return[r(Y,{modelValue:t(e).formInfo.insured.relationToHolder,"onUpdate:modelValue":s[4]||(s[4]=U=>t(e).formInfo.insured.relationToHolder=U),disabled:(m=i.formAuth)==null?void 0:m.relationToHolderDisable,options:t(Xe)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"])]),r(O),l("div",no,[ro,((re=i.formAuth)==null?void 0:re.insuredNameDisable)?(n(),B(g,{key:0,label:"\u59D3\u540D",class:"pro-field","is-view":!0},{input:d(()=>[S(P(t(ve)(t(e).formInfo.insured.name)),1)]),_:1})):V("",!0),!((ie=i.formAuth)==null?void 0:ie.insuredNameDisable)&&!t($)?(n(),B(g,{key:1,modelValue:t(e).formInfo.insured.name,"onUpdate:modelValue":s[6]||(s[6]=m=>t(e).formInfo.insured.name=m),label:"\u59D3\u540D",name:"name",required:"",maxlength:"50",rules:[{validator:I}]},null,8,["modelValue","rules"])):V("",!0),((de=i.formAuth)==null?void 0:de.insuredCertDisable)?(n(),B(g,{key:2,label:"\u8BC1\u4EF6\u53F7\u7801",class:"pro-field","is-view":!0},{input:d(()=>[S(P(t(he)(t(e).formInfo.insured.certNo)),1)]),_:1})):V("",!0),!((ce=i.formAuth)==null?void 0:ce.insuredCertDisable)&&!t($)?(n(),B(g,{key:3,modelValue:t(e).formInfo.insured.certNo,"onUpdate:modelValue":s[7]||(s[7]=m=>t(e).formInfo.insured.certNo=m),label:"\u8BC1\u4EF6\u53F7\u7801",name:"certNo",required:"",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",maxlength:"20","validate-type":[t(X).ID_CARD]},null,8,["modelValue","validate-type"])):V("",!0),r(g,{modelValue:t(e).formInfo.insured.socialFlag,"onUpdate:modelValue":s[9]||(s[9]=m=>t(e).formInfo.insured.socialFlag=m),label:"\u6709\u65E0\u793E\u4FDD",name:"name",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:d(()=>{var m;return[r(Y,{modelValue:t(e).formInfo.insured.socialFlag,"onUpdate:modelValue":s[8]||(s[8]=U=>t(e).formInfo.insured.socialFlag=U),disabled:(m=i.formAuth)==null?void 0:m.insuredSocialDisable,options:t(Je)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"])]),r(O),o.isShowPackage?(n(),D("div",io,[r(oo,{"package-product-list":(me=o.formInfo)==null?void 0:me.packageProductList},null,8,["package-product-list"])])):V("",!0),r(O),l("div",co,[((pe=i.formAuth)==null?void 0:pe.paymentFrequencyDisable)?V("",!0):(n(),B(g,{key:0,modelValue:t(e).formInfo.paymentFrequency,"onUpdate:modelValue":s[11]||(s[11]=m=>t(e).formInfo.paymentFrequency=m),label:"\u4EA4\u8D39\u65B9\u5F0F",name:"paymentFrequency",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:d(()=>{var m;return[r(Y,{modelValue:t(e).formInfo.paymentFrequency,"onUpdate:modelValue":s[10]||(s[10]=U=>t(e).formInfo.paymentFrequency=U),disabled:(m=i.formAuth)==null?void 0:m.paymentFrequencyDisable,options:t(h)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"])),r(O),r(g,{modelValue:t(e).formInfo.paymentMethod,"onUpdate:modelValue":s[13]||(s[13]=m=>t(e).formInfo.paymentMethod=m),label:"\u652F\u4ED8\u65B9\u5F0F",name:"paymentMethod",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:d(()=>{var m;return[r(Y,{modelValue:t(e).formInfo.paymentMethod,"onUpdate:modelValue":s[12]||(s[12]=U=>t(e).formInfo.paymentMethod=U),disabled:(m=i.formAuth)==null?void 0:m.paymentDisable,options:t(E)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"]),r(O),l("div",mo,[r(g,{label:"\u5F00\u901A\u81EA\u4E3B\u91CD\u65B0\u6295\u4FDD",class:"pro-field",name:"renewalDK",placeholder:"\u8BF7\u9009\u62E9",border:!1},{input:d(()=>{var m;return[r(Ae,{modelValue:t(e).formInfo.renewalDK,"onUpdate:modelValue":s[14]||(s[14]=U=>t(e).formInfo.renewalDK=U),disabled:(m=i.formAuth)==null?void 0:m.renewalDKDisable},null,8,["modelValue","disabled"])]}),_:1}),po])]),r(O),r(rt,{show:f.value,"onUpdate:show":s[15]||(s[15]=m=>f.value=m),"content-list":t(Q).concat(t(T)),"active-index":F.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9",onSubmit:ae},null,8,["show","content-list","active-index"])]}),_:1},512)]),_:1},8,["theme-vars"])}}});var pa=x(fo,[["__scopeId","data-v-7f561fce"]]);const _o=o=>(j("data-v-812ee74a"),o=o(),G(),o),vo={key:0,class:"page-waiting"},ho=["src"],Do=_o(()=>l("div",{class:"tips"},[l("p",null,"\u652F\u4ED8\u6210\u529F\uFF0C\u627F\u4FDD\u4E2D...")],-1)),yo=N({props:{isShow:{type:Boolean,default:()=>{}}},setup(o){const a=o;return z(()=>a.isShow,u=>{u?document.body.style.overflow="hidden":document.body.style.overflow="inherit"}),(u,i)=>a.isShow?(n(),D("div",vo,[l("img",{class:"loading",src:t(ht)},null,8,ho),Do])):V("",!0)}});var fa=x(yo,[["__scopeId","data-v-812ee74a"]]);const ye=o=>(j("data-v-171c7312"),o=o(),G(),o),Fo={key:0,class:"pro-modal"},bo=ye(()=>l("div",{class:"pro-overlay"},null,-1)),go={class:"pro-modal-wrapper"},Co=["src"],Io={class:"pro-modal-body"},Eo={class:"pro-modal-content"},wo=ye(()=>l("p",{class:"tips"},"\u5347\u7EA7\u540E\u7684\u4FDD\u969C\u5C06\u4E8E\u7B2C\u4E8C\u671F\u4FDD\u8D39\u6263\u8D39/\u7F34\u8D39\u6210\u529F\u540E\u751F\u6548",-1)),Bo={class:"pro-modal-content"},Ao={class:"product-attachment-list"},$o=S(" \u8BF7\u60A8\u91CD\u70B9\u9605\u8BFB\u5E76\u77E5\u6653 "),Po={key:0,class:"dun-hao"},So={class:"pro-modal-close"},Vo=["src"],ko=N({props:{orderNo:{type:String,default:""},tenantId:{type:String,default:""},isShow:{type:Boolean,default:()=>{}},upgradeCode:{type:String,default:""}},emits:["on-confirm","on-close"],setup(o,{emit:a}){const u=o,i=A(),v=A(),e=A(),f=A(),F=A([]),c=A(u.upgradeCode),C=()=>{a("on-close")},_=()=>{a("on-confirm")},y=async()=>{try{const I=st({tenantId:u.tenantId,premium:f.value,orderDetail:e.value,productDetail:i.value,insureDetail:v.value,successJumpUrl:"",iseeBizNo:""},ut),h=await mt(I),{code:E,data:$}=h;E==="10000"&&(f.value=$.installmentPremium)}catch(I){console.log(I)}},b=()=>{const I=pt({productCode:c.value,withInsureInfo:!0,tenantId:u.tenantId}),h=dt({productCode:c.value}),E=ct({orderNo:u.orderNo,tenantId:u.tenantId});Promise.all([I,h,E]).then(([$,T,Q])=>{$.code==="10000"&&(i.value=$.data,F.value=$.data.tenantProductInsureVO.attachmentVOList),T.code==="10000"&&(v.value=T.data),Q.code==="10000"&&(e.value=Q.data),y()})};return z(()=>u.isShow,I=>{c.value=u.upgradeCode,I?(document.body.style.overflow="hidden",b()):document.body.style.overflow="inherit"}),(I,h)=>{const E=w("ProPDFviewer");return u.isShow?(n(),D("div",Fo,[bo,l("div",go,[l("img",{class:"cover",src:t(_t)},null,8,Co),l("div",Io,[l("div",Eo,[l("p",null,"\u6BCF\u6708\u4FDD\u8D39\u4EC5\u9700"+P(t(at)(f.value||0))+"\u5143\uFF0C\u65E0\u9700\u91CD\u590D\u6295\u4FDD",1),wo]),l("div",{class:"pro-modal-btn",onClick:_},"\u4E00\u952E\u5347\u7EA7"),l("div",Bo,[l("div",Ao,[$o,(n(!0),D(L,null,R(F.value,($,T)=>(n(),B(E,{key:T,class:"file-name",title:`\u300A${$.attachmentName}\u300B`,content:$.attachmentUri,type:"pdf"},{default:d(()=>[T!==(F.value||[]).length-1?(n(),D("span",Po,"\u3001")):V("",!0)]),_:2},1032,["title","content"]))),128))])])]),l("div",So,[l("img",{src:t(it),onClick:C},null,8,Vo)])])])):V("",!0)}}});var _a=x(ko,[["__scopeId","data-v-171c7312"]]);const No=o=>(j("data-v-043963d8"),o=o(),G(),o),xo={class:"header"},Lo=["src"],To={class:"content"},Uo=No(()=>l("h4",null,"\u6E29\u99A8\u63D0\u793A\uFF0C\u60A8\u5DF2\u8FDB\u5165\u6295\u4FDD\u6D41\u7A0B\uFF1A",-1)),qo=S(" \u8BF7\u4ED4\u7EC6\u9605\u8BFB\u514D\u8D23\u6761\u6B3E\u3001\u6295\u4FDD\u987B\u77E5\u7B49\u4FE1\u606F\uFF0C\u8BF7\u60A8\u91CD\u70B9\u9605\u8BFB\u5E76\u77E5\u6653 "),Oo=["onClick"],Mo=S(" \uFF0C\u4E3A\u7EF4\u62A4\u60A8\u7684\u5408\u6CD5\u6743\u76CA\uFF0C\u60A8\u7684\u64CD\u4F5C\u8F68\u8FF9\u5C06\u88AB\u8BB0\u5F55\u3002 "),Ho={class:"footer"},Ro=S(" \u597D\u7684 "),Ko={key:0},Yo=N({props:{productDetail:{type:Object,default:()=>{}}},setup(o){const a=o,u="PRENOTICE",i=new Ue({source:"sessionStorage"}),v=A(!1),e=A(!1),f=Ke({time:4e3,onFinish:()=>{i.set(`${u}-isShow`,"1"),v.value=!1}}),F=A(),c=k(()=>{var y,b;return(b=(y=a.productDetail)==null?void 0:y.tenantProductInsureVO)==null?void 0:b.attachmentVOList.filter(I=>I.attachmentName==="\u4E2A\u4EBA\u4FE1\u606F\u4FDD\u62A4\u653F\u7B56")}),C=k(()=>f.current.value.seconds),_=y=>{e.value=!e.value,F.value=y};return Ye(()=>{v.value=!0,f.start()}),(y,b)=>{const I=w("VanButton"),h=w("ProPopup"),E=w("ProFilePreview");return n(),D(L,null,[r(h,{class:"pre-notice-wrap",show:v.value,closeable:!1,height:45},{default:d(()=>[l("div",xo,[l("img",{src:t(vt)},null,8,Lo)]),l("div",To,[Uo,l("p",null,[qo,(n(!0),D(L,null,R(t(c),($,T)=>(n(),D("span",{key:T,class:"file-name",onClick:Q=>_($.attachmentUri)}," \u300A"+P($.attachmentName)+"\u300B ",9,Oo))),128)),Mo])]),l("div",Ho,[r(I,{type:"primary",block:"",round:""},{default:d(()=>[Ro,t(C)?(n(),D("span",Ko,P(t(C))+"s",1)):V("",!0)]),_:1})])]),_:1},8,["show"]),r(h,{show:e.value,"onUpdate:show":b[0]||(b[0]=$=>e.value=$),class:"pre-notice-wrap","close-icon":"close",position:"bottom",style:{height:"600px",paddingTop:"40px"}},{default:d(()=>[r(E,{content:F.value,type:"pdf"},null,8,["content"])]),_:1},8,["show"])],64)}}});var va=x(Yo,[["__scopeId","data-v-043963d8"]]);const jo={class:"list"},Go={class:"item"},zo={class:"footer"},Qo=S("\u90E8\u5206\u4E3A\u662F"),Xo=S("\u5168\u90E8\u4E3A\u5426"),ha=N({props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth"],setup(o,{emit:a}){const u=o,i=A(u.show),v=A(u.activeIndex),e=k(()=>{var F;return(F=u.contentList[v.value])==null?void 0:F.attachmentUri}),f=F=>{a("update:show",!1),a("onConfirmHealth",F)};return z(()=>u,()=>{i.value=u.show,v.value=u.activeIndex},{deep:!0,immediate:!0}),(F,c)=>{const C=w("ProTab"),_=w("ProFilePreview"),y=w("VanButton"),b=w("van-config-provider"),I=w("ProPopup");return n(),B(I,{show:i.value,"onUpdate:show":c[3]||(c[3]=h=>i.value=h),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:c[4]||(c[4]=h=>a("update:show",!1))},{default:d(()=>[r(b,{"theme-vars":t(De)},{default:d(()=>[i.value?(n(),B(C,{key:0,active:v.value,"onUpdate:active":c[0]||(c[0]=h=>v.value=h),list:o.contentList.map((h,E)=>({title:h.attachmentName,slotName:`guarantee-${E}`})),class:"tab"},null,8,["active","list"])):V("",!0),l("div",jo,[l("div",Go,[(n(),B(_,{key:t(e),content:t(e),type:"pdf"},null,8,["content"]))])]),l("div",zo,[r(y,{type:"primary",block:"",round:"",onClick:c[1]||(c[1]=h=>f("N"))},{default:d(()=>[Qo]),_:1}),r(y,{type:"primary",plain:"",block:"",round:"",onClick:c[2]||(c[2]=h=>f("allFalse"))},{default:d(()=>[Xo]),_:1})])]),_:1},8,["theme-vars"])]),_:1},8,["show"])}}}),K={holderNameDisable:!0,holderCertDisable:!0,holderMobileDisable:!0,holderSocialDisable:!0,relationToHolderDisable:!0,insuredNameDisable:!0,insuredCertDisable:!0,insuredSocialDisable:!0,paymentDisable:!0,renewalDKDisable:!0,paymentFrequencyDisable:!0};H(q({},K),{holderSocialDisable:!1,relationToHolderDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});H(q({},K),{holderNameDisable:!1,holderCertDisable:!1,holderSocialDisable:!1,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});H(q({},K),{holderNameDisable:!1,holderCertDisable:!1,holderMobileDisable:!1,holderSocialDisable:!1,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});H(q({},K),{holderSocialDisable:!1,relationToHolderDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});H(q({},K),{paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});const Da=H(q({},K),{holderNameDisable:!1,holderCertDisable:!1,holderMobileDisable:!1,holderSocialDisable:!1,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});H(q({},K),{relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});const ya=q({},K);export{ia as B,da as D,ca as G,pa as H,va as P,ma as S,_a as U,fa as W,ha as _,Da as a,K as d,ya as p};
