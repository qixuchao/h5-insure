import{c as Be,s as Ae,v as Pe,L as $e,u as Se,H as Ve}from"./serviceConfig-bad6525b.js";import{_ as L,e as Z,i as q,a as J,a5 as ke,H as Ne,V as z,S as xe}from"./index-adc8d77f.js";import{g as N,j as l,n as y,A as t,z as s,J as $,Q as ee,y as k,E as A,r as E,af as Le,p as r,m as c,F as T,G as H,k as w,C as S,L as Q,t as V,H as Te,a4 as K,a5 as Y,Y as Ue,M as qe,_ as j,T as Oe,ar as He,h as Me}from"./vendor-f5ae78f6.js";import{P as Re}from"./index-5bbd1f17.js";import{t as fe}from"./theme-725d52fb.js";import{g as Ke,h as Ye,R as W,I as je,a as Ge,i as ze,S as Qe}from"./infoCollection-192ba138.js";import{A as Xe}from"./bankCard-0e4ce564.js";import{c as Je,n as me,i as pe,m as We,v as Ze,d as et,e as tt,f as ot}from"./utils-cdbe4955.js";import{s as at,c as st}from"./phoneVerify-6f39f34f.js";import{_ as lt}from"./index-cc940a5d.js";import{c as ut}from"./close-df102554.js";import{i as nt,g as rt,e as it}from"./trial-28c6568e.js";import{p as dt}from"./product-dda87332.js";const ct=["src"],mt=["src"],pt=N({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""}},setup(o){const u=o;return(n,i)=>u.isCheck?(l(),y("img",{key:0,src:t(Be),class:"banner"},null,8,ct)):(l(),y("img",{key:1,src:u.url,class:"banner"},null,8,mt))}});var ta=L(pt,[["__scopeId","data-v-58004b02"]]);const ft={class:"product-desc"},_t={class:"title"},vt={class:"desc"},ht=N({props:{productName:{type:String,default:""},productDesc:{type:String,default:""}},setup(o){return(u,n)=>(l(),y("div",ft,[s("div",_t,$(o.productName),1),s("div",vt,$(o.productDesc),1)]))}});var oa=L(ht,[["__scopeId","data-v-e7495852"]]);const Dt={class:"guarantee-list"},yt={class:"basic"},Ft=["src"],bt={class:"guarantee-detail"},Ct={class:"title"},gt={class:"content"},It=N({props:{guaranteeList:{type:Array,default:()=>[]},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:10}},setup(o){const u=o,[n,i]=ee(!1),v=k(()=>u.guaranteeList.length>u.count?u.isShowClose?!0:!n.value:!1),e=()=>{i()},f=k(()=>u.guaranteeList.length<=u.count||n.value?u.guaranteeList:u.guaranteeList.slice(0,u.count)),B=A(!1),D=()=>{B.value=!0};return(h,d)=>{const F=E("ProCell"),b=E("ProCard"),C=E("ProPopup"),P=Le("dompurify-html");return l(),y(T,null,[s("div",Dt,[r(b,{title:"\u4FDD\u969C\u5185\u5BB9",link:"\u67E5\u770B\u8BE6\u60C5","show-divider":!0,"show-icon":!0,onLinkClick:D},{default:c(()=>[s("div",yt,[(l(!0),y(T,null,H(t(f),(I,_)=>(l(),w(F,{key:_,class:"guarantee-item",title:I.title,content:I.desc,border:!1},null,8,["title","content"]))),128))]),t(v)?(l(),y("div",{key:0,class:"show-more",onClick:e},[S($(t(n)?"\u6536\u8D77":"\u67E5\u770B\u66F4\u591A")+" ",1),r(Z,{name:"down",class:Q(["icon",{showMore:t(n)}])},null,8,["class"])])):V("",!0),s("div",{class:"service-config",onClick:d[0]||(d[0]=(...I)=>h.onClose&&h.onClose(...I))},[s("img",{src:t(Ae)},null,8,Ft)])]),_:1})]),r(C,{show:B.value,"onUpdate:show":d[1]||(d[1]=I=>B.value=I),title:"\u4FDD\u969C\u8BE6\u60C5",class:"guarantee-popup"},{default:c(()=>[s("div",bt,[(l(!0),y(T,null,H(o.guaranteeList,(I,_)=>(l(),y("div",{key:_,class:"guarantee-item"},[s("div",Ct,$(I.title),1),Te(s("div",gt,null,512),[[P,I.content]])]))),128))])]),_:1},8,["show"])],64)}}});var aa=L(It,[["__scopeId","data-v-112ac429"]]);const Et=o=>(K("data-v-0ca33180"),o=o(),Y(),o),wt={class:"question"},Bt=Et(()=>s("div",{class:"icon"},$("?"),-1)),At={class:"title"},Pt=N({props:{name:{type:String,default:""},question:{type:String,default:""},answer:{type:String,default:""}},setup(o){return(u,n)=>{const i=E("van-collapse-item");return l(),w(i,{name:o.name,class:"com-question-item"},{title:c(()=>[s("div",wt,[Bt,s("div",At,$(o.question),1)])]),default:c(()=>[S(" "+$(o.answer),1)]),_:1},8,["name"])}}});var $t=L(Pt,[["__scopeId","data-v-0ca33180"]]);const St={class:"com-question"},Vt=N({props:{list:{type:Array,default:()=>[]}},setup(o){const u=o,[n,i]=ee(!1),v=A([]),e=()=>{i()},f=k(()=>u.list.length<=4||n.value?u.list:u.list.slice(0,4));return(B,D)=>{const h=E("van-collapse");return l(),y("div",St,[r(h,{modelValue:v.value,"onUpdate:modelValue":D[0]||(D[0]=d=>v.value=d)},{default:c(()=>[(l(!0),y(T,null,H(t(f),(d,F)=>(l(),w($t,{key:F,name:F.toString(),question:d.title,answer:d.desc},null,8,["name","question","answer"]))),128))]),_:1},8,["modelValue"]),o.list.length>4?(l(),y("div",{key:0,class:"show-more",onClick:e},[S($(t(n)?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),r(Z,{name:"down",class:Q(["icon",{showMore:t(n)}])},null,8,["class"])])):V("",!0)])}}});var kt=L(Vt,[["__scopeId","data-v-ad9ea6f2"]]);const Nt=o=>(K("data-v-53860a32"),o=o(),Y(),o),xt={class:"spec"},Lt=["src"],Tt=Nt(()=>s("div",{class:"sub-title"},"\u4EA7\u54C1\u8D44\u6599\u6587\u4EF6\u8BE6\u60C5\u53EF\u624B\u52A8\u653E\u5927\uFF0C\u4EE5\u4FBF\u60A8\u66F4\u6E05\u6670\u67E5\u9605\u5185\u5BB9\u3002",-1)),Ut={class:"tab-1-content"},qt=S(" \u8BF7\u67E5\u770B "),Ot=S(" > "),Ht={key:0,class:"dun-hao"},Mt=N({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""},detail:{type:Object,default:()=>{}}},setup(o){const u=o,n=A([{title:"\u6211\u8981\u6295\u4FDD",slotName:"tab1"},{title:"\u4EA7\u54C1\u7279\u8272",slotName:"tab2"},{title:"\u7406\u8D54\u6D41\u7A0B",slotName:"tab3"},{title:"\u5E38\u89C1\u95EE\u9898",slotName:"tab4"}]),i=e=>{const f=e.split("?")[0],B=f.lastIndexOf(".");return f.substring(B+1)},v=e=>{if(!e)return"";let f=e;return f.indexOf("\u300A")===-1&&(f=`\u300A${f}`),f.indexOf("\u300B")===-1&&(f=`${f}\u300B`),f};return(e,f)=>{const B=E("ProPDFviewer");return l(),w(ke,{class:"tabs",list:n.value,sticky:"",scrollspy:""},{tab1:c(()=>[Ue(e.$slots,"form",{},void 0,!0)]),tab2:c(()=>{var D,h;return[s("div",xt,[(l(!0),y(T,null,H(((h=(D=u.detail)==null?void 0:D.tenantProductInsureVO)==null?void 0:h.spec)||[],(d,F)=>(l(),y("img",{key:F,src:d,class:"detail-img"},null,8,Lt))),128)),r(q)]),r(J,{title:"\u4EA7\u54C1\u8D44\u6599"},{subTitle:c(()=>[Tt]),default:c(()=>{var d,F;return[s("div",Ut,[qt,(l(!0),y(T,null,H(((F=(d=o.detail)==null?void 0:d.tenantProductInsureVO)==null?void 0:F.attachmentVOList)||[],(b,C)=>(l(),w(B,{key:C,type:i(b.attachmentUri),class:"file-name",title:v(b.attachmentName),content:b.attachmentUri},{default:c(()=>{var P,I;return[Ot,C!==(((I=(P=o.detail)==null?void 0:P.tenantProductInsureVO)==null?void 0:I.attachmentVOList)||[]).length-1?(l(),y("span",Ht,"\u3001")):V("",!0)]}),_:2},1032,["type","title","content"]))),128))])]}),_:1})]}),tab3:c(()=>[r(J,{title:"\u7406\u8D54\u6D41\u7A0B"},{default:c(()=>{var D,h;return[r(Re,{list:(h=(D=u.detail)==null?void 0:D.tenantProductInsureVO)==null?void 0:h.settlementProcessList},null,8,["list"])]}),_:1})]),tab4:c(()=>[r(J,{title:"\u5E38\u89C1\u95EE\u9898"},{default:c(()=>{var D,h;return[r(kt,{list:(h=(D=u.detail)==null?void 0:D.tenantProductInsureVO)==null?void 0:h.questionList},null,8,["list"])]}),_:1})]),_:3},8,["list"])}}});var sa=L(Mt,[["__scopeId","data-v-53860a32"]]);const Rt=o=>(K("data-v-5002737e"),o=o(),Y(),o),Kt={class:"refueling-package-com"},Yt=Rt(()=>s("div",{class:"title"},"\u52A0\u6CB9\u5305",-1)),jt=N({props:{packageProductList:{type:Array,default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:3}},setup(o){const u=o,[n,i]=ee(!1),v=k(()=>u.packageProductList.length>u.count?u.isShowClose?!0:!n.value:!1),e=()=>{i()},f=k(()=>u.packageProductList.length<=u.count||n.value?u.packageProductList:u.packageProductList.slice(0,u.count));return(B,D)=>{const h=E("ProRadioButton"),d=E("ProField"),F=E("ProForm");return l(),y("div",Kt,[Yt,r(F,{ref:"formRef"},{default:c(()=>[(l(!0),y(T,null,H(t(f),(b,C)=>(l(),w(d,{key:`${b.value}_${C}`,modelValue:b.value,"onUpdate:modelValue":P=>b.value=P,label:b.packageName,required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:c(()=>[r(h,{modelValue:b.value,"onUpdate:modelValue":P=>b.value=P,options:t(Ke),disabled:b.disabled},null,8,["modelValue","onUpdate:modelValue","options","disabled"])]),_:2},1032,["modelValue","onUpdate:modelValue","label"]))),128)),t(v)?(l(),y("div",{key:0,class:"show-more",onClick:e},[S($(t(n)?"\u6536\u8D77":"\u67E5\u770B\u66F4\u591A")+" ",1),r(Z,{name:"down",class:Q(["icon",{showMore:t(n)}])},null,8,["class"])])):V("",!0)]),_:1},512)])}}});var Gt=L(jt,[["__scopeId","data-v-5002737e"]]);const X=o=>(K("data-v-7b348fc9"),o=o(),Y(),o),zt={class:"holder container"},Qt=X(()=>s("div",{class:"title"},"\u6295\u4FDD\u4EBA\u4FE1\u606F",-1)),Xt={class:"insured-relation container"},Jt=X(()=>s("div",{class:"title"},"\u4E3A\u8C01\u6295\u4FDD",-1)),Wt={class:"insured container"},Zt=X(()=>s("div",{class:"title"},"\u88AB\u4FDD\u4EBA\u4FE1\u606F",-1)),eo={key:0,class:"container"},to={class:"payment container"},oo={class:"renewal-wrapper"},ao=X(()=>s("div",{class:"desc"},[s("p",null,"\u4FDD\u5355\u5230\u671F\u81EA\u52A8\u91CD\u65B0\u6295\u4FDD\uFF0C\u4EAB\u53D7\u4FDD\u969C\u4E0D\u95F4\u65AD"),s("p",null,"\u81EA\u4ECE\u91CD\u65B0\u6295\u4FDD\u5F00\u542F\u540E\uFF0C\u4E2D\u9014\u53EF\u968F\u65F6\u53D6\u6D88")],-1)),so=N({props:{disable:{type:Boolean,default:!1},formAuth:{type:Object,default:()=>{}},formInfo:{type:Object,default:()=>{}},payments:{type:Array,default:()=>[0,1]},paymentMethod:{type:Array,default:()=>[0,1]},productDetail:{type:Object,default:()=>{}},isShowPackage:{type:Boolean,default:!1}},emits:["onReset","onUpdate","onVerify"],setup(o,{expose:u,emit:n}){const i=o,v=A({}),e=qe({formInfo:i.formInfo}),f=A(!1),B=A(0),D=A(!1),h=60,d=A(0),F=A("\u83B7\u53D6\u9A8C\u8BC1\u7801"),b=A(!1),C=p=>Pe(p)?!0:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u59D3\u540D",P=k(()=>Ye.filter((p,a)=>i.payments.includes(a))),I=k(()=>Xe.filter((p,a)=>i.paymentMethod.includes(a))),_=k(()=>e.formInfo.insured.relationToHolder===W.SELF),x=k(()=>{var p,a;return(a=(p=i.productDetail)==null?void 0:p.tenantProductInsureVO)==null?void 0:a.attachmentVOList.filter(g=>g.attachmentName==="\u8D39\u7387\u8868")}),G=k(()=>{var p,a;return((a=(p=i.productDetail)==null?void 0:p.tenantProductInsureVO)==null?void 0:a.attachmentVOList.filter(g=>!["\u5065\u5EB7\u544A\u77E5","\u8D39\u7387\u8868"].includes(g.attachmentName)))||[]}),ve=k(()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(e.formInfo.holder.mobile)),te=()=>(D.value=!0,D),he=p=>{B.value=p,f.value=!0},De=()=>{D.value=!1},ye=()=>new Promise((p,a)=>{v==null||v.value.validate().then(()=>{p("")},()=>{a()})}),Fe=()=>{if(d.value>0)return;d.value=h;const p=()=>{F.value=`${d.value}s`,d.value-=1};p();const a=setInterval(()=>{d.value===0?(F.value="\u83B7\u53D6\u9A8C\u8BC1\u7801",d.value=0,clearInterval(a)):p()},1e3)},be=async()=>{d.value>0||v==null||v.value.validate("mobile").then(async()=>{const p=await at(e.formInfo.holder.mobile),{code:a,data:g}=p;a==="10000"&&(b.value=!0,Oe({message:"\u77ED\u4FE1\u53D1\u9001\u6210\u529F\uFF0C\u8BF7\u67E5\u6536"}),Fe())})},Ce=()=>{const{relationToHolder:p}=e.formInfo.insured;p===W.SELF?(e.formInfo.insured={certNo:e.formInfo.holder.certNo,name:e.formInfo.holder.name,socialFlag:e.formInfo.holder.socialFlag,relationToHolder:p},n("onReset")):(e.formInfo.insured={certNo:"",name:"",socialFlag:Qe.HAS,relationToHolder:p},n("onUpdate"))},ge=p=>new Promise((a,g)=>{if(!p||!Ze(p)||!e.formInfo.holder.mobile){a(!1);return}st(e.formInfo.holder.mobile,e.formInfo.holder.mobileSmsCode).then(O=>{const{data:R}=O;a(!!R)})});return j([()=>e.formInfo.holder.certNo,()=>e.formInfo.insured.certNo],()=>{var p,a;e.formInfo.holder.certNo=(p=e.formInfo.holder.certNo)==null?void 0:p.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,""),e.formInfo.insured.certNo=(a=e.formInfo.insured.certNo)==null?void 0:a.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,"")},{deep:!0,immediate:!0}),j(()=>e.formInfo.holder,()=>{e.formInfo.insured.relationToHolder===W.SELF&&Object.assign(e.formInfo.insured,e.formInfo.holder)},{deep:!0,immediate:!0}),j(()=>e.formInfo.insured.certNo,()=>{var a,g;let p=!1;Ne(e.formInfo.insured.certNo)&&(p=!0),(g=(a=e.formInfo)==null?void 0:a.packageProductList)==null||g.forEach(O=>{p?Je(O,e.formInfo.insured.certNo)||(O.disabled=!0,O.value=je.UN_INSURE):O.disabled=!1})}),u({validateForm:ye,previewFile:he,reEditForm:De,isAgreeFile:D,onSubmit:te}),(p,a)=>{const g=E("ProField"),O=E("van-button"),R=E("ProRadioButton"),Ie=E("van-switch"),Ee=E("ProForm"),we=E("van-config-provider");return l(),w(we,{"theme-vars":t(fe)},{default:c(()=>[r(Ee,{ref_key:"formRef",ref:v},{default:c(()=>{var oe,ae,se,le,ue,ne,re,ie,de,ce;return[r(q),s("div",zt,[Qt,(oe=i.formAuth)!=null&&oe.holderNameDisable?(l(),w(g,{key:0,label:"\u59D3\u540D",class:"pro-field","is-view":!0},{input:c(()=>[S($(t(me)(t(e).formInfo.holder.name)),1)]),_:1})):(l(),w(g,{key:1,modelValue:t(e).formInfo.holder.name,"onUpdate:modelValue":a[0]||(a[0]=m=>t(e).formInfo.holder.name=m),label:"\u59D3\u540D",name:"name",required:"",placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",maxlength:"50",rules:[{validator:C}]},null,8,["modelValue","rules"])),(ae=i.formAuth)!=null&&ae.holderCertDisable?(l(),w(g,{key:2,label:"\u8BC1\u4EF6\u53F7\u7801",class:"pro-field","is-view":!0},{input:c(()=>[S($(t(pe)(t(e).formInfo.holder.certNo)),1)]),_:1})):(l(),w(g,{key:3,modelValue:t(e).formInfo.holder.certNo,"onUpdate:modelValue":a[1]||(a[1]=m=>t(e).formInfo.holder.certNo=m),label:"\u8BC1\u4EF6\u53F7\u7801",name:"certNo",required:"",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",maxlength:"18","validate-type":[t(z).ID_CARD]},null,8,["modelValue","validate-type"])),(se=i.formAuth)!=null&&se.holderMobileDisable?(l(),w(g,{key:4,label:"\u624B\u673A\u53F7",class:"pro-field","is-view":!0},{input:c(()=>[S($(t(We)(t(e).formInfo.holder.mobile)),1)]),_:1})):(l(),w(g,{key:5,modelValue:t(e).formInfo.holder.mobile,"onUpdate:modelValue":a[2]||(a[2]=m=>t(e).formInfo.holder.mobile=m),label:"\u624B\u673A\u53F7",name:"mobile",required:"",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",type:"digit",maxlength:"11","validate-type":[t(z).PHONE]},null,8,["modelValue","validate-type"])),(le=i.formAuth)!=null&&le.holderMobileDisable?V("",!0):(l(),w(g,{key:6,modelValue:t(e).formInfo.holder.mobileSmsCode,"onUpdate:modelValue":a[3]||(a[3]=m=>t(e).formInfo.holder.mobileSmsCode=m),label:"\u9A8C\u8BC1\u7801",name:"mobileSmsCode",type:"digit",required:"",rules:[{validator:ge,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u9A8C\u8BC1\u7801"}],"input-align":"left",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801","error-message-align":"left",maxlength:"6","validate-type":[t(z).SMS_CODE]},{extra:c(()=>[r(O,{class:Q(["sms-code",{"count-down":d.value>0}]),size:"small",type:"primary",disabled:!t(ve),onClick:be},{default:c(()=>[S($(F.value),1)]),_:1},8,["class","disabled"])]),_:1},8,["modelValue","rules","validate-type"]))]),r(q),s("div",Xt,[Jt,r(g,{modelValue:t(e).formInfo.insured.relationToHolder,"onUpdate:modelValue":a[5]||(a[5]=m=>t(e).formInfo.insured.relationToHolder=m),class:"relation-to-Holder",label:"",name:"relationToHolder",placeholder:"\u8BF7\u9009\u62E9",onClick:Ce},{input:c(()=>{var m;return[r(R,{modelValue:t(e).formInfo.insured.relationToHolder,"onUpdate:modelValue":a[4]||(a[4]=U=>t(e).formInfo.insured.relationToHolder=U),disabled:(m=i.formAuth)==null?void 0:m.relationToHolderDisable,options:t(Ge)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"])]),r(q),s("div",Wt,[Zt,(ue=i.formAuth)!=null&&ue.insuredNameDisable?(l(),w(g,{key:0,label:"\u59D3\u540D",class:"pro-field","is-view":!0},{input:c(()=>[S($(t(me)(t(e).formInfo.insured.name)),1)]),_:1})):V("",!0),!((ne=i.formAuth)!=null&&ne.insuredNameDisable)&&!t(_)?(l(),w(g,{key:1,modelValue:t(e).formInfo.insured.name,"onUpdate:modelValue":a[6]||(a[6]=m=>t(e).formInfo.insured.name=m),label:"\u59D3\u540D",name:"name",required:"",maxlength:"50",rules:[{validator:C}]},null,8,["modelValue","rules"])):V("",!0),(re=i.formAuth)!=null&&re.insuredCertDisable?(l(),w(g,{key:2,label:"\u8BC1\u4EF6\u53F7\u7801",class:"pro-field","is-view":!0},{input:c(()=>[S($(t(pe)(t(e).formInfo.insured.certNo)),1)]),_:1})):V("",!0),!((ie=i.formAuth)!=null&&ie.insuredCertDisable)&&!t(_)?(l(),w(g,{key:3,modelValue:t(e).formInfo.insured.certNo,"onUpdate:modelValue":a[7]||(a[7]=m=>t(e).formInfo.insured.certNo=m),label:"\u8BC1\u4EF6\u53F7\u7801",name:"certNo",required:"",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",maxlength:"20","validate-type":[t(z).ID_CARD]},null,8,["modelValue","validate-type"])):V("",!0),r(g,{modelValue:t(e).formInfo.insured.socialFlag,"onUpdate:modelValue":a[9]||(a[9]=m=>t(e).formInfo.insured.socialFlag=m),label:"\u6709\u65E0\u793E\u4FDD",name:"name",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:c(()=>{var m;return[r(R,{modelValue:t(e).formInfo.insured.socialFlag,"onUpdate:modelValue":a[8]||(a[8]=U=>t(e).formInfo.insured.socialFlag=U),disabled:(m=i.formAuth)==null?void 0:m.insuredSocialDisable,options:t(ze)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"])]),r(q),o.isShowPackage?(l(),y("div",eo,[r(Gt,{"package-product-list":(de=o.formInfo)==null?void 0:de.packageProductList},null,8,["package-product-list"])])):V("",!0),r(q),s("div",to,[(ce=i.formAuth)!=null&&ce.paymentFrequencyDisable?V("",!0):(l(),w(g,{key:0,modelValue:t(e).formInfo.paymentFrequency,"onUpdate:modelValue":a[11]||(a[11]=m=>t(e).formInfo.paymentFrequency=m),label:"\u4EA4\u8D39\u65B9\u5F0F",name:"paymentFrequency",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:c(()=>{var m;return[r(R,{modelValue:t(e).formInfo.paymentFrequency,"onUpdate:modelValue":a[10]||(a[10]=U=>t(e).formInfo.paymentFrequency=U),disabled:(m=i.formAuth)==null?void 0:m.paymentFrequencyDisable,options:t(P)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"])),r(q),r(g,{modelValue:t(e).formInfo.paymentMethod,"onUpdate:modelValue":a[13]||(a[13]=m=>t(e).formInfo.paymentMethod=m),label:"\u652F\u4ED8\u65B9\u5F0F",name:"paymentMethod",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:c(()=>{var m;return[r(R,{modelValue:t(e).formInfo.paymentMethod,"onUpdate:modelValue":a[12]||(a[12]=U=>t(e).formInfo.paymentMethod=U),disabled:(m=i.formAuth)==null?void 0:m.paymentDisable,options:t(I)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"]),r(q),s("div",oo,[r(g,{label:"\u5F00\u901A\u81EA\u4E3B\u91CD\u65B0\u6295\u4FDD",class:"pro-field",name:"renewalDK",placeholder:"\u8BF7\u9009\u62E9",border:!1},{input:c(()=>{var m;return[r(Ie,{modelValue:t(e).formInfo.renewalDK,"onUpdate:modelValue":a[14]||(a[14]=U=>t(e).formInfo.renewalDK=U),disabled:(m=i.formAuth)==null?void 0:m.renewalDKDisable},null,8,["modelValue","disabled"])]}),_:1}),ao])]),r(q),r(lt,{show:f.value,"onUpdate:show":a[15]||(a[15]=m=>f.value=m),"content-list":t(G).concat(t(x)),"active-index":B.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9",onSubmit:te},null,8,["show","content-list","active-index"])]}),_:1},512)]),_:1},8,["theme-vars"])}}});var la=L(so,[["__scopeId","data-v-7b348fc9"]]);const lo=o=>(K("data-v-fff8593e"),o=o(),Y(),o),uo={key:0,class:"page-waiting"},no=["src"],ro=lo(()=>s("div",{class:"tips"},[s("p",null,"\u652F\u4ED8\u6210\u529F\uFF0C\u627F\u4FDD\u4E2D...")],-1)),io=N({props:{isShow:{type:Boolean,default:()=>{}}},setup(o){const u=o;return j(()=>u.isShow,n=>{n?document.body.style.overflow="hidden":document.body.style.overflow="inherit"}),(n,i)=>u.isShow?(l(),y("div",uo,[s("img",{class:"loading",src:t($e)},null,8,no),ro])):V("",!0)}});var ua=L(io,[["__scopeId","data-v-fff8593e"]]);const _e=o=>(K("data-v-7e30e9b1"),o=o(),Y(),o),co={key:0,class:"pro-modal"},mo=_e(()=>s("div",{class:"pro-overlay"},null,-1)),po={class:"pro-modal-wrapper"},fo=["src"],_o={class:"pro-modal-body"},vo={class:"pro-modal-content"},ho=_e(()=>s("p",{class:"tips"},"\u5347\u7EA7\u540E\u7684\u4FDD\u969C\u5C06\u4E8E\u7B2C\u4E8C\u671F\u4FDD\u8D39\u6263\u8D39/\u7F34\u8D39\u6210\u529F\u540E\u751F\u6548",-1)),Do={class:"pro-modal-content"},yo={class:"product-attachment-list"},Fo=S(" \u8BF7\u60A8\u91CD\u70B9\u9605\u8BFB\u5E76\u77E5\u6653 "),bo={key:0,class:"dun-hao"},Co={class:"pro-modal-close"},go=["src"],Io=N({props:{orderNo:{type:String,default:""},tenantId:{type:String,default:""},isShow:{type:Boolean,default:()=>{}},upgradeCode:{type:String,default:""}},emits:["on-confirm","on-close"],setup(o,{emit:u}){const n=o,i=A(),v=A(),e=A(),f=A(),B=A([]),D=A(n.upgradeCode),h=()=>{u("on-close")},d=()=>{u("on-confirm")},F=async()=>{try{const C=tt({tenantId:n.tenantId,premium:f.value,orderDetail:e.value,productDetail:i.value,insureDetail:v.value,successJumpUrl:"",iseeBizNo:""},ot),P=await it(C),{code:I,data:_}=P;I==="10000"&&(f.value=_.installmentPremium)}catch(C){console.log(C)}},b=()=>{const C=dt({productCode:D.value,withInsureInfo:!0,tenantId:n.tenantId}),P=nt({productCode:D.value}),I=rt({orderNo:n.orderNo,tenantId:n.tenantId});Promise.all([C,P,I]).then(([_,x,G])=>{_.code==="10000"&&(i.value=_.data,B.value=_.data.tenantProductInsureVO.attachmentVOList),x.code==="10000"&&(v.value=x.data),G.code==="10000"&&(e.value=G.data),F()})};return j(()=>n.isShow,C=>{D.value=n.upgradeCode,C?(document.body.style.overflow="hidden",b()):document.body.style.overflow="inherit"}),(C,P)=>{const I=E("ProPDFviewer");return n.isShow?(l(),y("div",co,[mo,s("div",po,[s("img",{class:"cover",src:t(Se)},null,8,fo),s("div",_o,[s("div",vo,[s("p",null,"\u6BCF\u6708\u4FDD\u8D39\u4EC5\u9700"+$(t(et)(f.value||0))+"\u5143\uFF0C\u65E0\u9700\u91CD\u590D\u6295\u4FDD",1),ho]),s("div",{class:"pro-modal-btn",onClick:d},"\u4E00\u952E\u5347\u7EA7"),s("div",Do,[s("div",yo,[Fo,(l(!0),y(T,null,H(B.value,(_,x)=>(l(),w(I,{key:x,class:"file-name",title:`\u300A${_.attachmentName}\u300B`,content:_.attachmentUri,type:"pdf"},{default:c(()=>[x!==(B.value||[]).length-1?(l(),y("span",bo,"\u3001")):V("",!0)]),_:2},1032,["title","content"]))),128))])])]),s("div",Co,[s("img",{src:t(ut),onClick:h},null,8,go)])])])):V("",!0)}}});var na=L(Io,[["__scopeId","data-v-7e30e9b1"]]);const Eo=o=>(K("data-v-2e748764"),o=o(),Y(),o),wo={class:"header"},Bo=["src"],Ao={class:"content"},Po=Eo(()=>s("h4",null,"\u6E29\u99A8\u63D0\u793A\uFF0C\u60A8\u5DF2\u8FDB\u5165\u6295\u4FDD\u6D41\u7A0B\uFF1A",-1)),$o=S(" \u8BF7\u4ED4\u7EC6\u9605\u8BFB\u514D\u8D23\u6761\u6B3E\u3001\u6295\u4FDD\u987B\u77E5\u7B49\u4FE1\u606F\uFF0C\u8BF7\u60A8\u91CD\u70B9\u9605\u8BFB\u5E76\u77E5\u6653 "),So=["onClick"],Vo=S(" \uFF0C\u4E3A\u7EF4\u62A4\u60A8\u7684\u5408\u6CD5\u6743\u76CA\uFF0C\u60A8\u7684\u64CD\u4F5C\u8F68\u8FF9\u5C06\u88AB\u8BB0\u5F55\u3002 "),ko={class:"footer"},No=S(" \u597D\u7684 "),xo={key:0},Lo=N({props:{productDetail:{type:Object,default:()=>{}}},setup(o){const u=o,n="PRENOTICE",i=new xe({source:"sessionStorage"}),v=A(!1),e=A(!1),f=He({time:4e3,onFinish:()=>{i.set(`${n}-isShow`,"1"),v.value=!1}}),B=A(),D=k(()=>{var F,b;return(b=(F=u.productDetail)==null?void 0:F.tenantProductInsureVO)==null?void 0:b.attachmentVOList.filter(C=>C.attachmentName==="\u4E2A\u4EBA\u4FE1\u606F\u4FDD\u62A4\u653F\u7B56")}),h=k(()=>f.current.value.seconds),d=F=>{e.value=!e.value,B.value=F};return Me(()=>{v.value=!0,f.start()}),(F,b)=>{const C=E("VanButton"),P=E("ProPopup"),I=E("ProFilePreview");return l(),y(T,null,[r(P,{class:"pre-notice-wrap",show:v.value,closeable:!1,height:45},{default:c(()=>[s("div",wo,[s("img",{src:t(Ve)},null,8,Bo)]),s("div",Ao,[Po,s("p",null,[$o,(l(!0),y(T,null,H(t(D),(_,x)=>(l(),y("span",{key:x,class:"file-name",onClick:G=>d(_.attachmentUri)}," \u300A"+$(_.attachmentName)+"\u300B ",9,So))),128)),Vo])]),s("div",ko,[r(C,{type:"primary",block:"",round:""},{default:c(()=>[No,t(h)?(l(),y("span",xo,$(t(h))+"s",1)):V("",!0)]),_:1})])]),_:1},8,["show"]),r(P,{show:e.value,"onUpdate:show":b[0]||(b[0]=_=>e.value=_),class:"pre-notice-wrap","close-icon":"close",position:"bottom",style:{height:"600px",paddingTop:"40px"}},{default:c(()=>[r(I,{content:B.value,type:"pdf"},null,8,["content"])]),_:1},8,["show"])],64)}}});var ra=L(Lo,[["__scopeId","data-v-2e748764"]]);const To={class:"list"},Uo={class:"item"},qo={class:"footer"},Oo=S("\u90E8\u5206\u4E3A\u662F"),Ho=S("\u5168\u90E8\u4E3A\u5426"),ia=N({props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealth"],setup(o,{emit:u}){const n=o,i=A(n.show),v=A(n.activeIndex),e=k(()=>{var h;return(h=n.contentList[v.value])==null?void 0:h.attachmentUri}),f=A(!0),B=h=>{f.value=!1,u("update:show",!1),u("onConfirmHealth",h)},D=()=>{f.value&&u("onCloseHealth")};return j(()=>n,()=>{i.value=n.show,v.value=n.activeIndex},{deep:!0,immediate:!0}),(h,d)=>{const F=E("ProTab"),b=E("ProFilePreview"),C=E("VanButton"),P=E("van-config-provider"),I=E("ProPopup");return l(),w(I,{show:i.value,"onUpdate:show":d[3]||(d[3]=_=>i.value=_),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:d[4]||(d[4]=_=>D())},{default:c(()=>[r(P,{"theme-vars":t(fe),class:"custom-provider"},{default:c(()=>[i.value?(l(),w(F,{key:0,active:v.value,"onUpdate:active":d[0]||(d[0]=_=>v.value=_),list:o.contentList.map((_,x)=>({title:_.attachmentName,slotName:`guarantee-${x}`})),class:"tab"},null,8,["active","list"])):V("",!0),s("div",To,[s("div",Uo,[(l(),w(b,{key:t(e),content:t(e),type:"pdf"},null,8,["content"]))])]),s("div",qo,[r(C,{type:"primary",block:"",round:"",onClick:d[1]||(d[1]=_=>B("N"))},{default:c(()=>[Oo]),_:1}),r(C,{type:"primary",plain:"",block:"",round:"",onClick:d[2]||(d[2]=_=>B("allFalse"))},{default:c(()=>[Ho]),_:1})])]),_:1},8,["theme-vars"])]),_:1},8,["show"])}}}),M={holderNameDisable:!0,holderCertDisable:!0,holderMobileDisable:!0,holderSocialDisable:!0,relationToHolderDisable:!0,insuredNameDisable:!0,insuredCertDisable:!0,insuredSocialDisable:!0,paymentDisable:!0,renewalDKDisable:!0,paymentFrequencyDisable:!0};({...M});({...M});({...M});({...M});({...M});const da={...M,holderNameDisable:!1,holderCertDisable:!1,holderMobileDisable:!1,holderSocialDisable:!1,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1};({...M});const ca={...M};export{ta as B,oa as D,aa as G,la as H,ra as P,sa as S,na as U,ua as W,ia as _,da as a,M as d,ca as p};
