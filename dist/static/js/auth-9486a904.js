var Se=Object.defineProperty,Ve=Object.defineProperties;var ke=Object.getOwnPropertyDescriptors;var fe=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var _e=(o,a,l)=>a in o?Se(o,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[a]=l,q=(o,a)=>{for(var l in a||(a={}))Ne.call(a,l)&&_e(o,l,a[l]);if(fe)for(var l of fe(a))xe.call(a,l)&&_e(o,l,a[l]);return o},M=(o,a)=>Ve(o,ke(a));import{c as Le,s as Te,v as Ue,L as qe,u as Oe,H as He}from"./serviceConfig-bad6525b.js";import{_ as L,e as te,i as O,a as Z,a5 as Me,H as Re,V as X,S as Ke}from"./index-53abd92d.js";import{g as N,j as n,n as y,A as t,z as u,J as $,Q as oe,y as k,E as A,r as E,af as Ye,p as r,m as c,F as T,G as R,k as w,C as S,L as J,t as V,H as je,a4 as j,a5 as G,Y as Ge,M as ze,_ as z,T as Qe,ar as Xe,h as Je}from"./vendor-c3c577f2.js";import{P as We}from"./index-a904a068.js";import{t as De}from"./theme-725d52fb.js";import{g as Ze,h as et,R as ee,I as tt,a as ot,i as at,S as st}from"./infoCollection-192ba138.js";import{A as lt}from"./bankCard-0e4ce564.js";import{c as ut,n as ve,i as he,m as nt,v as rt,d as it,e as dt,f as ct}from"./utils-00ebb31d.js";import{s as mt,c as pt}from"./phoneVerify-f897be74.js";import{_ as ft}from"./index-258787d6.js";import{c as _t}from"./close-df102554.js";import{i as vt,g as ht,e as Dt}from"./trial-8e435cda.js";import{p as yt}from"./product-6eabc29f.js";const Ft=["src"],bt=["src"],Ct=N({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""}},setup(o){const a=o;return(l,i)=>a.isCheck?(n(),y("img",{key:0,src:t(Le),class:"banner"},null,8,Ft)):(n(),y("img",{key:1,src:a.url,class:"banner"},null,8,bt))}});var ca=L(Ct,[["__scopeId","data-v-58004b02"]]);const gt={class:"product-desc"},It={class:"title"},Et={class:"desc"},wt=N({props:{productName:{type:String,default:""},productDesc:{type:String,default:""}},setup(o){return(a,l)=>(n(),y("div",gt,[u("div",It,$(o.productName),1),u("div",Et,$(o.productDesc),1)]))}});var ma=L(wt,[["__scopeId","data-v-e7495852"]]);const Bt={class:"guarantee-list"},At={class:"basic"},Pt=["src"],$t={class:"guarantee-detail"},St={class:"title"},Vt={class:"content"},kt=N({props:{guaranteeList:{type:Array,default:()=>[]},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:10}},setup(o){const a=o,[l,i]=oe(!1),v=k(()=>a.guaranteeList.length>a.count?a.isShowClose?!0:!l.value:!1),e=()=>{i()},f=k(()=>a.guaranteeList.length<=a.count||l.value?a.guaranteeList:a.guaranteeList.slice(0,a.count)),B=A(!1),D=()=>{B.value=!0};return(h,d)=>{const F=E("ProCell"),b=E("ProCard"),C=E("ProPopup"),P=Ye("dompurify-html");return n(),y(T,null,[u("div",Bt,[r(b,{title:"\u4FDD\u969C\u5185\u5BB9",link:"\u67E5\u770B\u8BE6\u60C5","show-divider":!0,"show-icon":!0,onLinkClick:D},{default:c(()=>[u("div",At,[(n(!0),y(T,null,R(t(f),(I,_)=>(n(),w(F,{key:_,class:"guarantee-item",title:I.title,content:I.desc,border:!1},null,8,["title","content"]))),128))]),t(v)?(n(),y("div",{key:0,class:"show-more",onClick:e},[S($(t(l)?"\u6536\u8D77":"\u67E5\u770B\u66F4\u591A")+" ",1),r(te,{name:"down",class:J(["icon",{showMore:t(l)}])},null,8,["class"])])):V("",!0),u("div",{class:"service-config",onClick:d[0]||(d[0]=(...I)=>h.onClose&&h.onClose(...I))},[u("img",{src:t(Te)},null,8,Pt)])]),_:1})]),r(C,{show:B.value,"onUpdate:show":d[1]||(d[1]=I=>B.value=I),title:"\u4FDD\u969C\u8BE6\u60C5",class:"guarantee-popup"},{default:c(()=>[u("div",$t,[(n(!0),y(T,null,R(o.guaranteeList,(I,_)=>(n(),y("div",{key:_,class:"guarantee-item"},[u("div",St,$(I.title),1),je(u("div",Vt,null,512),[[P,I.content]])]))),128))])]),_:1},8,["show"])],64)}}});var pa=L(kt,[["__scopeId","data-v-112ac429"]]);const Nt=o=>(j("data-v-0ca33180"),o=o(),G(),o),xt={class:"question"},Lt=Nt(()=>u("div",{class:"icon"},$("?"),-1)),Tt={class:"title"},Ut=N({props:{name:{type:String,default:""},question:{type:String,default:""},answer:{type:String,default:""}},setup(o){return(a,l)=>{const i=E("van-collapse-item");return n(),w(i,{name:o.name,class:"com-question-item"},{title:c(()=>[u("div",xt,[Lt,u("div",Tt,$(o.question),1)])]),default:c(()=>[S(" "+$(o.answer),1)]),_:1},8,["name"])}}});var qt=L(Ut,[["__scopeId","data-v-0ca33180"]]);const Ot={class:"com-question"},Ht=N({props:{list:{type:Array,default:()=>[]}},setup(o){const a=o,[l,i]=oe(!1),v=A([]),e=()=>{i()},f=k(()=>a.list.length<=4||l.value?a.list:a.list.slice(0,4));return(B,D)=>{const h=E("van-collapse");return n(),y("div",Ot,[r(h,{modelValue:v.value,"onUpdate:modelValue":D[0]||(D[0]=d=>v.value=d)},{default:c(()=>[(n(!0),y(T,null,R(t(f),(d,F)=>(n(),w(qt,{key:F,name:F.toString(),question:d.title,answer:d.desc},null,8,["name","question","answer"]))),128))]),_:1},8,["modelValue"]),o.list.length>4?(n(),y("div",{key:0,class:"show-more",onClick:e},[S($(t(l)?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),r(te,{name:"down",class:J(["icon",{showMore:t(l)}])},null,8,["class"])])):V("",!0)])}}});var Mt=L(Ht,[["__scopeId","data-v-ad9ea6f2"]]);const Rt=o=>(j("data-v-53860a32"),o=o(),G(),o),Kt={class:"spec"},Yt=["src"],jt=Rt(()=>u("div",{class:"sub-title"},"\u4EA7\u54C1\u8D44\u6599\u6587\u4EF6\u8BE6\u60C5\u53EF\u624B\u52A8\u653E\u5927\uFF0C\u4EE5\u4FBF\u60A8\u66F4\u6E05\u6670\u67E5\u9605\u5185\u5BB9\u3002",-1)),Gt={class:"tab-1-content"},zt=S(" \u8BF7\u67E5\u770B "),Qt=S(" > "),Xt={key:0,class:"dun-hao"},Jt=N({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""},detail:{type:Object,default:()=>{}}},setup(o){const a=o,l=A([{title:"\u6211\u8981\u6295\u4FDD",slotName:"tab1"},{title:"\u4EA7\u54C1\u7279\u8272",slotName:"tab2"},{title:"\u7406\u8D54\u6D41\u7A0B",slotName:"tab3"},{title:"\u5E38\u89C1\u95EE\u9898",slotName:"tab4"}]),i=e=>{const f=e.split("?")[0],B=f.lastIndexOf(".");return f.substring(B+1)},v=e=>{if(!e)return"";let f=e;return f.indexOf("\u300A")===-1&&(f=`\u300A${f}`),f.indexOf("\u300B")===-1&&(f=`${f}\u300B`),f};return(e,f)=>{const B=E("ProPDFviewer");return n(),w(Me,{class:"tabs",list:l.value,sticky:"",scrollspy:""},{tab1:c(()=>[Ge(e.$slots,"form",{},void 0,!0)]),tab2:c(()=>{var D,h;return[u("div",Kt,[(n(!0),y(T,null,R(((h=(D=a.detail)==null?void 0:D.tenantProductInsureVO)==null?void 0:h.spec)||[],(d,F)=>(n(),y("img",{key:F,src:d,class:"detail-img"},null,8,Yt))),128)),r(O)]),r(Z,{title:"\u4EA7\u54C1\u8D44\u6599"},{subTitle:c(()=>[jt]),default:c(()=>{var d,F;return[u("div",Gt,[zt,(n(!0),y(T,null,R(((F=(d=o.detail)==null?void 0:d.tenantProductInsureVO)==null?void 0:F.attachmentVOList)||[],(b,C)=>(n(),w(B,{key:C,type:i(b.attachmentUri),class:"file-name",title:v(b.attachmentName),content:b.attachmentUri},{default:c(()=>{var P,I;return[Qt,C!==(((I=(P=o.detail)==null?void 0:P.tenantProductInsureVO)==null?void 0:I.attachmentVOList)||[]).length-1?(n(),y("span",Xt,"\u3001")):V("",!0)]}),_:2},1032,["type","title","content"]))),128))])]}),_:1})]}),tab3:c(()=>[r(Z,{title:"\u7406\u8D54\u6D41\u7A0B"},{default:c(()=>{var D,h;return[r(We,{list:(h=(D=a.detail)==null?void 0:D.tenantProductInsureVO)==null?void 0:h.settlementProcessList},null,8,["list"])]}),_:1})]),tab4:c(()=>[r(Z,{title:"\u5E38\u89C1\u95EE\u9898"},{default:c(()=>{var D,h;return[r(Mt,{list:(h=(D=a.detail)==null?void 0:D.tenantProductInsureVO)==null?void 0:h.questionList},null,8,["list"])]}),_:1})]),_:3},8,["list"])}}});var fa=L(Jt,[["__scopeId","data-v-53860a32"]]);const Wt=o=>(j("data-v-5002737e"),o=o(),G(),o),Zt={class:"refueling-package-com"},eo=Wt(()=>u("div",{class:"title"},"\u52A0\u6CB9\u5305",-1)),to=N({props:{packageProductList:{type:Array,default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:3}},setup(o){const a=o,[l,i]=oe(!1),v=k(()=>a.packageProductList.length>a.count?a.isShowClose?!0:!l.value:!1),e=()=>{i()},f=k(()=>a.packageProductList.length<=a.count||l.value?a.packageProductList:a.packageProductList.slice(0,a.count));return(B,D)=>{const h=E("ProRadioButton"),d=E("ProField"),F=E("ProForm");return n(),y("div",Zt,[eo,r(F,{ref:"formRef"},{default:c(()=>[(n(!0),y(T,null,R(t(f),(b,C)=>(n(),w(d,{key:`${b.value}_${C}`,modelValue:b.value,"onUpdate:modelValue":P=>b.value=P,label:b.packageName,required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:c(()=>[r(h,{modelValue:b.value,"onUpdate:modelValue":P=>b.value=P,options:t(Ze),disabled:b.disabled},null,8,["modelValue","onUpdate:modelValue","options","disabled"])]),_:2},1032,["modelValue","onUpdate:modelValue","label"]))),128)),t(v)?(n(),y("div",{key:0,class:"show-more",onClick:e},[S($(t(l)?"\u6536\u8D77":"\u67E5\u770B\u66F4\u591A")+" ",1),r(te,{name:"down",class:J(["icon",{showMore:t(l)}])},null,8,["class"])])):V("",!0)]),_:1},512)])}}});var oo=L(to,[["__scopeId","data-v-5002737e"]]);const W=o=>(j("data-v-7b348fc9"),o=o(),G(),o),ao={class:"holder container"},so=W(()=>u("div",{class:"title"},"\u6295\u4FDD\u4EBA\u4FE1\u606F",-1)),lo={class:"insured-relation container"},uo=W(()=>u("div",{class:"title"},"\u4E3A\u8C01\u6295\u4FDD",-1)),no={class:"insured container"},ro=W(()=>u("div",{class:"title"},"\u88AB\u4FDD\u4EBA\u4FE1\u606F",-1)),io={key:0,class:"container"},co={class:"payment container"},mo={class:"renewal-wrapper"},po=W(()=>u("div",{class:"desc"},[u("p",null,"\u4FDD\u5355\u5230\u671F\u81EA\u52A8\u91CD\u65B0\u6295\u4FDD\uFF0C\u4EAB\u53D7\u4FDD\u969C\u4E0D\u95F4\u65AD"),u("p",null,"\u81EA\u4ECE\u91CD\u65B0\u6295\u4FDD\u5F00\u542F\u540E\uFF0C\u4E2D\u9014\u53EF\u968F\u65F6\u53D6\u6D88")],-1)),fo=N({props:{disable:{type:Boolean,default:!1},formAuth:{type:Object,default:()=>{}},formInfo:{type:Object,default:()=>{}},payments:{type:Array,default:()=>[0,1]},paymentMethod:{type:Array,default:()=>[0,1]},productDetail:{type:Object,default:()=>{}},isShowPackage:{type:Boolean,default:!1}},emits:["onReset","onUpdate","onVerify"],setup(o,{expose:a,emit:l}){const i=o,v=A({}),e=ze({formInfo:i.formInfo}),f=A(!1),B=A(0),D=A(!1),h=60,d=A(0),F=A("\u83B7\u53D6\u9A8C\u8BC1\u7801"),b=A(!1),C=p=>Ue(p)?!0:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u59D3\u540D",P=k(()=>et.filter((p,s)=>i.payments.includes(s))),I=k(()=>lt.filter((p,s)=>i.paymentMethod.includes(s))),_=k(()=>e.formInfo.insured.relationToHolder===ee.SELF),x=k(()=>{var p,s;return(s=(p=i.productDetail)==null?void 0:p.tenantProductInsureVO)==null?void 0:s.attachmentVOList.filter(g=>g.attachmentName==="\u8D39\u7387\u8868")}),Q=k(()=>{var p,s;return((s=(p=i.productDetail)==null?void 0:p.tenantProductInsureVO)==null?void 0:s.attachmentVOList.filter(g=>!["\u5065\u5EB7\u544A\u77E5","\u8D39\u7387\u8868"].includes(g.attachmentName)))||[]}),Fe=k(()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(e.formInfo.holder.mobile)),ae=()=>(D.value=!0,D),be=p=>{B.value=p,f.value=!0},Ce=()=>{D.value=!1},ge=()=>new Promise((p,s)=>{v==null||v.value.validate().then(()=>{p("")},()=>{s()})}),Ie=()=>{if(d.value>0)return;d.value=h;const p=()=>{F.value=`${d.value}s`,d.value-=1};p();const s=setInterval(()=>{d.value===0?(F.value="\u83B7\u53D6\u9A8C\u8BC1\u7801",d.value=0,clearInterval(s)):p()},1e3)},Ee=async()=>{d.value>0||v==null||v.value.validate("mobile").then(async()=>{const p=await mt(e.formInfo.holder.mobile),{code:s,data:g}=p;s==="10000"&&(b.value=!0,Qe({message:"\u77ED\u4FE1\u53D1\u9001\u6210\u529F\uFF0C\u8BF7\u67E5\u6536"}),Ie())})},we=()=>{const{relationToHolder:p}=e.formInfo.insured;p===ee.SELF?(e.formInfo.insured={certNo:e.formInfo.holder.certNo,name:e.formInfo.holder.name,socialFlag:e.formInfo.holder.socialFlag,relationToHolder:p},l("onReset")):(e.formInfo.insured={certNo:"",name:"",socialFlag:st.HAS,relationToHolder:p},l("onUpdate"))},Be=p=>new Promise((s,g)=>{if(!p||!rt(p)||!e.formInfo.holder.mobile){s(!1);return}pt(e.formInfo.holder.mobile,e.formInfo.holder.mobileSmsCode).then(H=>{const{data:Y}=H;s(!!Y)})});return z([()=>e.formInfo.holder.certNo,()=>e.formInfo.insured.certNo],()=>{var p,s;e.formInfo.holder.certNo=(p=e.formInfo.holder.certNo)==null?void 0:p.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,""),e.formInfo.insured.certNo=(s=e.formInfo.insured.certNo)==null?void 0:s.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,"")},{deep:!0,immediate:!0}),z(()=>e.formInfo.holder,()=>{e.formInfo.insured.relationToHolder===ee.SELF&&Object.assign(e.formInfo.insured,e.formInfo.holder)},{deep:!0,immediate:!0}),z(()=>e.formInfo.insured.certNo,()=>{var s,g;let p=!1;Re(e.formInfo.insured.certNo)&&(p=!0),(g=(s=e.formInfo)==null?void 0:s.packageProductList)==null||g.forEach(H=>{p?ut(H,e.formInfo.insured.certNo)||(H.disabled=!0,H.value=tt.UN_INSURE):H.disabled=!1})}),a({validateForm:ge,previewFile:be,reEditForm:Ce,isAgreeFile:D,onSubmit:ae}),(p,s)=>{const g=E("ProField"),H=E("van-button"),Y=E("ProRadioButton"),Ae=E("van-switch"),Pe=E("ProForm"),$e=E("van-config-provider");return n(),w($e,{"theme-vars":t(De)},{default:c(()=>[r(Pe,{ref_key:"formRef",ref:v},{default:c(()=>{var se,le,ue,ne,re,ie,de,ce,me,pe;return[r(O),u("div",ao,[so,((se=i.formAuth)==null?void 0:se.holderNameDisable)?(n(),w(g,{key:0,label:"\u59D3\u540D",class:"pro-field","is-view":!0},{input:c(()=>[S($(t(ve)(t(e).formInfo.holder.name)),1)]),_:1})):(n(),w(g,{key:1,modelValue:t(e).formInfo.holder.name,"onUpdate:modelValue":s[0]||(s[0]=m=>t(e).formInfo.holder.name=m),label:"\u59D3\u540D",name:"name",required:"",placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",maxlength:"50",rules:[{validator:C}]},null,8,["modelValue","rules"])),((le=i.formAuth)==null?void 0:le.holderCertDisable)?(n(),w(g,{key:2,label:"\u8BC1\u4EF6\u53F7\u7801",class:"pro-field","is-view":!0},{input:c(()=>[S($(t(he)(t(e).formInfo.holder.certNo)),1)]),_:1})):(n(),w(g,{key:3,modelValue:t(e).formInfo.holder.certNo,"onUpdate:modelValue":s[1]||(s[1]=m=>t(e).formInfo.holder.certNo=m),label:"\u8BC1\u4EF6\u53F7\u7801",name:"certNo",required:"",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",maxlength:"18","validate-type":[t(X).ID_CARD]},null,8,["modelValue","validate-type"])),((ue=i.formAuth)==null?void 0:ue.holderMobileDisable)?(n(),w(g,{key:4,label:"\u624B\u673A\u53F7",class:"pro-field","is-view":!0},{input:c(()=>[S($(t(nt)(t(e).formInfo.holder.mobile)),1)]),_:1})):(n(),w(g,{key:5,modelValue:t(e).formInfo.holder.mobile,"onUpdate:modelValue":s[2]||(s[2]=m=>t(e).formInfo.holder.mobile=m),label:"\u624B\u673A\u53F7",name:"mobile",required:"",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",type:"digit",maxlength:"11","validate-type":[t(X).PHONE]},null,8,["modelValue","validate-type"])),((ne=i.formAuth)==null?void 0:ne.holderMobileDisable)?V("",!0):(n(),w(g,{key:6,modelValue:t(e).formInfo.holder.mobileSmsCode,"onUpdate:modelValue":s[3]||(s[3]=m=>t(e).formInfo.holder.mobileSmsCode=m),label:"\u9A8C\u8BC1\u7801",name:"mobileSmsCode",type:"digit",required:"",rules:[{validator:Be,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u9A8C\u8BC1\u7801"}],"input-align":"left",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801","error-message-align":"left",maxlength:"6","validate-type":[t(X).SMS_CODE]},{extra:c(()=>[r(H,{class:J(["sms-code",{"count-down":d.value>0}]),size:"small",type:"primary",disabled:!t(Fe),onClick:Ee},{default:c(()=>[S($(F.value),1)]),_:1},8,["class","disabled"])]),_:1},8,["modelValue","rules","validate-type"]))]),r(O),u("div",lo,[uo,r(g,{modelValue:t(e).formInfo.insured.relationToHolder,"onUpdate:modelValue":s[5]||(s[5]=m=>t(e).formInfo.insured.relationToHolder=m),class:"relation-to-Holder",label:"",name:"relationToHolder",placeholder:"\u8BF7\u9009\u62E9",onClick:we},{input:c(()=>{var m;return[r(Y,{modelValue:t(e).formInfo.insured.relationToHolder,"onUpdate:modelValue":s[4]||(s[4]=U=>t(e).formInfo.insured.relationToHolder=U),disabled:(m=i.formAuth)==null?void 0:m.relationToHolderDisable,options:t(ot)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"])]),r(O),u("div",no,[ro,((re=i.formAuth)==null?void 0:re.insuredNameDisable)?(n(),w(g,{key:0,label:"\u59D3\u540D",class:"pro-field","is-view":!0},{input:c(()=>[S($(t(ve)(t(e).formInfo.insured.name)),1)]),_:1})):V("",!0),!((ie=i.formAuth)==null?void 0:ie.insuredNameDisable)&&!t(_)?(n(),w(g,{key:1,modelValue:t(e).formInfo.insured.name,"onUpdate:modelValue":s[6]||(s[6]=m=>t(e).formInfo.insured.name=m),label:"\u59D3\u540D",name:"name",required:"",maxlength:"50",rules:[{validator:C}]},null,8,["modelValue","rules"])):V("",!0),((de=i.formAuth)==null?void 0:de.insuredCertDisable)?(n(),w(g,{key:2,label:"\u8BC1\u4EF6\u53F7\u7801",class:"pro-field","is-view":!0},{input:c(()=>[S($(t(he)(t(e).formInfo.insured.certNo)),1)]),_:1})):V("",!0),!((ce=i.formAuth)==null?void 0:ce.insuredCertDisable)&&!t(_)?(n(),w(g,{key:3,modelValue:t(e).formInfo.insured.certNo,"onUpdate:modelValue":s[7]||(s[7]=m=>t(e).formInfo.insured.certNo=m),label:"\u8BC1\u4EF6\u53F7\u7801",name:"certNo",required:"",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",maxlength:"20","validate-type":[t(X).ID_CARD]},null,8,["modelValue","validate-type"])):V("",!0),r(g,{modelValue:t(e).formInfo.insured.socialFlag,"onUpdate:modelValue":s[9]||(s[9]=m=>t(e).formInfo.insured.socialFlag=m),label:"\u6709\u65E0\u793E\u4FDD",name:"name",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:c(()=>{var m;return[r(Y,{modelValue:t(e).formInfo.insured.socialFlag,"onUpdate:modelValue":s[8]||(s[8]=U=>t(e).formInfo.insured.socialFlag=U),disabled:(m=i.formAuth)==null?void 0:m.insuredSocialDisable,options:t(at)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"])]),r(O),o.isShowPackage?(n(),y("div",io,[r(oo,{"package-product-list":(me=o.formInfo)==null?void 0:me.packageProductList},null,8,["package-product-list"])])):V("",!0),r(O),u("div",co,[((pe=i.formAuth)==null?void 0:pe.paymentFrequencyDisable)?V("",!0):(n(),w(g,{key:0,modelValue:t(e).formInfo.paymentFrequency,"onUpdate:modelValue":s[11]||(s[11]=m=>t(e).formInfo.paymentFrequency=m),label:"\u4EA4\u8D39\u65B9\u5F0F",name:"paymentFrequency",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:c(()=>{var m;return[r(Y,{modelValue:t(e).formInfo.paymentFrequency,"onUpdate:modelValue":s[10]||(s[10]=U=>t(e).formInfo.paymentFrequency=U),disabled:(m=i.formAuth)==null?void 0:m.paymentFrequencyDisable,options:t(P)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"])),r(O),r(g,{modelValue:t(e).formInfo.paymentMethod,"onUpdate:modelValue":s[13]||(s[13]=m=>t(e).formInfo.paymentMethod=m),label:"\u652F\u4ED8\u65B9\u5F0F",name:"paymentMethod",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:c(()=>{var m;return[r(Y,{modelValue:t(e).formInfo.paymentMethod,"onUpdate:modelValue":s[12]||(s[12]=U=>t(e).formInfo.paymentMethod=U),disabled:(m=i.formAuth)==null?void 0:m.paymentDisable,options:t(I)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"]),r(O),u("div",mo,[r(g,{label:"\u5F00\u901A\u81EA\u4E3B\u91CD\u65B0\u6295\u4FDD",class:"pro-field",name:"renewalDK",placeholder:"\u8BF7\u9009\u62E9",border:!1},{input:c(()=>{var m;return[r(Ae,{modelValue:t(e).formInfo.renewalDK,"onUpdate:modelValue":s[14]||(s[14]=U=>t(e).formInfo.renewalDK=U),disabled:(m=i.formAuth)==null?void 0:m.renewalDKDisable},null,8,["modelValue","disabled"])]}),_:1}),po])]),r(O),r(ft,{show:f.value,"onUpdate:show":s[15]||(s[15]=m=>f.value=m),"content-list":t(Q).concat(t(x)),"active-index":B.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9",onSubmit:ae},null,8,["show","content-list","active-index"])]}),_:1},512)]),_:1},8,["theme-vars"])}}});var _a=L(fo,[["__scopeId","data-v-7b348fc9"]]);const _o=o=>(j("data-v-fff8593e"),o=o(),G(),o),vo={key:0,class:"page-waiting"},ho=["src"],Do=_o(()=>u("div",{class:"tips"},[u("p",null,"\u652F\u4ED8\u6210\u529F\uFF0C\u627F\u4FDD\u4E2D...")],-1)),yo=N({props:{isShow:{type:Boolean,default:()=>{}}},setup(o){const a=o;return z(()=>a.isShow,l=>{l?document.body.style.overflow="hidden":document.body.style.overflow="inherit"}),(l,i)=>a.isShow?(n(),y("div",vo,[u("img",{class:"loading",src:t(qe)},null,8,ho),Do])):V("",!0)}});var va=L(yo,[["__scopeId","data-v-fff8593e"]]);const ye=o=>(j("data-v-7e30e9b1"),o=o(),G(),o),Fo={key:0,class:"pro-modal"},bo=ye(()=>u("div",{class:"pro-overlay"},null,-1)),Co={class:"pro-modal-wrapper"},go=["src"],Io={class:"pro-modal-body"},Eo={class:"pro-modal-content"},wo=ye(()=>u("p",{class:"tips"},"\u5347\u7EA7\u540E\u7684\u4FDD\u969C\u5C06\u4E8E\u7B2C\u4E8C\u671F\u4FDD\u8D39\u6263\u8D39/\u7F34\u8D39\u6210\u529F\u540E\u751F\u6548",-1)),Bo={class:"pro-modal-content"},Ao={class:"product-attachment-list"},Po=S(" \u8BF7\u60A8\u91CD\u70B9\u9605\u8BFB\u5E76\u77E5\u6653 "),$o={key:0,class:"dun-hao"},So={class:"pro-modal-close"},Vo=["src"],ko=N({props:{orderNo:{type:String,default:""},tenantId:{type:String,default:""},isShow:{type:Boolean,default:()=>{}},upgradeCode:{type:String,default:""}},emits:["on-confirm","on-close"],setup(o,{emit:a}){const l=o,i=A(),v=A(),e=A(),f=A(),B=A([]),D=A(l.upgradeCode),h=()=>{a("on-close")},d=()=>{a("on-confirm")},F=async()=>{try{const C=dt({tenantId:l.tenantId,premium:f.value,orderDetail:e.value,productDetail:i.value,insureDetail:v.value,successJumpUrl:"",iseeBizNo:""},ct),P=await Dt(C),{code:I,data:_}=P;I==="10000"&&(f.value=_.installmentPremium)}catch(C){console.log(C)}},b=()=>{const C=yt({productCode:D.value,withInsureInfo:!0,tenantId:l.tenantId}),P=vt({productCode:D.value}),I=ht({orderNo:l.orderNo,tenantId:l.tenantId});Promise.all([C,P,I]).then(([_,x,Q])=>{_.code==="10000"&&(i.value=_.data,B.value=_.data.tenantProductInsureVO.attachmentVOList),x.code==="10000"&&(v.value=x.data),Q.code==="10000"&&(e.value=Q.data),F()})};return z(()=>l.isShow,C=>{D.value=l.upgradeCode,C?(document.body.style.overflow="hidden",b()):document.body.style.overflow="inherit"}),(C,P)=>{const I=E("ProPDFviewer");return l.isShow?(n(),y("div",Fo,[bo,u("div",Co,[u("img",{class:"cover",src:t(Oe)},null,8,go),u("div",Io,[u("div",Eo,[u("p",null,"\u6BCF\u6708\u4FDD\u8D39\u4EC5\u9700"+$(t(it)(f.value||0))+"\u5143\uFF0C\u65E0\u9700\u91CD\u590D\u6295\u4FDD",1),wo]),u("div",{class:"pro-modal-btn",onClick:d},"\u4E00\u952E\u5347\u7EA7"),u("div",Bo,[u("div",Ao,[Po,(n(!0),y(T,null,R(B.value,(_,x)=>(n(),w(I,{key:x,class:"file-name",title:`\u300A${_.attachmentName}\u300B`,content:_.attachmentUri,type:"pdf"},{default:c(()=>[x!==(B.value||[]).length-1?(n(),y("span",$o,"\u3001")):V("",!0)]),_:2},1032,["title","content"]))),128))])])]),u("div",So,[u("img",{src:t(_t),onClick:h},null,8,Vo)])])])):V("",!0)}}});var ha=L(ko,[["__scopeId","data-v-7e30e9b1"]]);const No=o=>(j("data-v-2e748764"),o=o(),G(),o),xo={class:"header"},Lo=["src"],To={class:"content"},Uo=No(()=>u("h4",null,"\u6E29\u99A8\u63D0\u793A\uFF0C\u60A8\u5DF2\u8FDB\u5165\u6295\u4FDD\u6D41\u7A0B\uFF1A",-1)),qo=S(" \u8BF7\u4ED4\u7EC6\u9605\u8BFB\u514D\u8D23\u6761\u6B3E\u3001\u6295\u4FDD\u987B\u77E5\u7B49\u4FE1\u606F\uFF0C\u8BF7\u60A8\u91CD\u70B9\u9605\u8BFB\u5E76\u77E5\u6653 "),Oo=["onClick"],Ho=S(" \uFF0C\u4E3A\u7EF4\u62A4\u60A8\u7684\u5408\u6CD5\u6743\u76CA\uFF0C\u60A8\u7684\u64CD\u4F5C\u8F68\u8FF9\u5C06\u88AB\u8BB0\u5F55\u3002 "),Mo={class:"footer"},Ro=S(" \u597D\u7684 "),Ko={key:0},Yo=N({props:{productDetail:{type:Object,default:()=>{}}},setup(o){const a=o,l="PRENOTICE",i=new Ke({source:"sessionStorage"}),v=A(!1),e=A(!1),f=Xe({time:4e3,onFinish:()=>{i.set(`${l}-isShow`,"1"),v.value=!1}}),B=A(),D=k(()=>{var F,b;return(b=(F=a.productDetail)==null?void 0:F.tenantProductInsureVO)==null?void 0:b.attachmentVOList.filter(C=>C.attachmentName==="\u4E2A\u4EBA\u4FE1\u606F\u4FDD\u62A4\u653F\u7B56")}),h=k(()=>f.current.value.seconds),d=F=>{e.value=!e.value,B.value=F};return Je(()=>{v.value=!0,f.start()}),(F,b)=>{const C=E("VanButton"),P=E("ProPopup"),I=E("ProFilePreview");return n(),y(T,null,[r(P,{class:"pre-notice-wrap",show:v.value,closeable:!1,height:45},{default:c(()=>[u("div",xo,[u("img",{src:t(He)},null,8,Lo)]),u("div",To,[Uo,u("p",null,[qo,(n(!0),y(T,null,R(t(D),(_,x)=>(n(),y("span",{key:x,class:"file-name",onClick:Q=>d(_.attachmentUri)}," \u300A"+$(_.attachmentName)+"\u300B ",9,Oo))),128)),Ho])]),u("div",Mo,[r(C,{type:"primary",block:"",round:""},{default:c(()=>[Ro,t(h)?(n(),y("span",Ko,$(t(h))+"s",1)):V("",!0)]),_:1})])]),_:1},8,["show"]),r(P,{show:e.value,"onUpdate:show":b[0]||(b[0]=_=>e.value=_),class:"pre-notice-wrap","close-icon":"close",position:"bottom",style:{height:"600px",paddingTop:"40px"}},{default:c(()=>[r(I,{content:B.value,type:"pdf"},null,8,["content"])]),_:1},8,["show"])],64)}}});var Da=L(Yo,[["__scopeId","data-v-2e748764"]]);const jo={class:"list"},Go={class:"item"},zo={class:"footer"},Qo=S("\u90E8\u5206\u4E3A\u662F"),Xo=S("\u5168\u90E8\u4E3A\u5426"),ya=N({props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealth"],setup(o,{emit:a}){const l=o,i=A(l.show),v=A(l.activeIndex),e=k(()=>{var h;return(h=l.contentList[v.value])==null?void 0:h.attachmentUri}),f=A(!0),B=h=>{f.value=!1,a("update:show",!1),a("onConfirmHealth",h)},D=()=>{f.value&&a("onCloseHealth")};return z(()=>l,()=>{i.value=l.show,v.value=l.activeIndex},{deep:!0,immediate:!0}),(h,d)=>{const F=E("ProTab"),b=E("ProFilePreview"),C=E("VanButton"),P=E("van-config-provider"),I=E("ProPopup");return n(),w(I,{show:i.value,"onUpdate:show":d[3]||(d[3]=_=>i.value=_),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:d[4]||(d[4]=_=>D())},{default:c(()=>[r(P,{"theme-vars":t(De),class:"custom-provider"},{default:c(()=>[i.value?(n(),w(F,{key:0,active:v.value,"onUpdate:active":d[0]||(d[0]=_=>v.value=_),list:o.contentList.map((_,x)=>({title:_.attachmentName,slotName:`guarantee-${x}`})),class:"tab"},null,8,["active","list"])):V("",!0),u("div",jo,[u("div",Go,[(n(),w(b,{key:t(e),content:t(e),type:"pdf"},null,8,["content"]))])]),u("div",zo,[r(C,{type:"primary",block:"",round:"",onClick:d[1]||(d[1]=_=>B("N"))},{default:c(()=>[Qo]),_:1}),r(C,{type:"primary",plain:"",block:"",round:"",onClick:d[2]||(d[2]=_=>B("allFalse"))},{default:c(()=>[Xo]),_:1})])]),_:1},8,["theme-vars"])]),_:1},8,["show"])}}}),K={holderNameDisable:!0,holderCertDisable:!0,holderMobileDisable:!0,holderSocialDisable:!0,relationToHolderDisable:!0,insuredNameDisable:!0,insuredCertDisable:!0,insuredSocialDisable:!0,paymentDisable:!0,renewalDKDisable:!0,paymentFrequencyDisable:!0};M(q({},K),{holderSocialDisable:!1,relationToHolderDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});M(q({},K),{holderNameDisable:!1,holderCertDisable:!1,holderSocialDisable:!1,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});M(q({},K),{holderNameDisable:!1,holderCertDisable:!1,holderMobileDisable:!1,holderSocialDisable:!1,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});M(q({},K),{holderSocialDisable:!1,relationToHolderDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});M(q({},K),{paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});const Fa=M(q({},K),{holderNameDisable:!1,holderCertDisable:!1,holderMobileDisable:!1,holderSocialDisable:!1,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});M(q({},K),{relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1});const ba=q({},K);export{ca as B,ma as D,pa as G,_a as H,Da as P,fa as S,ha as U,va as W,ya as _,Fa as a,K as d,ba as p};
