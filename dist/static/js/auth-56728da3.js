import{c as Be}from"./check-detail-60b0cbde.js";import{_ as L,e as Z,i as q,a as W,a7 as Ae,I as $e,V as z,S as Pe}from"./index-cf71facf.js";import{h as x,k as u,p as b,B as t,A as s,L as $,R as ee,z as N,G as w,r as I,ag as Se,s as i,n as c,F as T,H as M,m as E,E as P,M as X,v as V,I as Ve,a5 as K,a6 as j,Z as ke,N as Ne,$ as Y,T as xe,as as Le,j as Te}from"./vendor-3a8faf02.js";import{P as Ue}from"./index-b25caa32.js";import{t as fe}from"./theme-ea709837.js";import{h as qe,i as Oe,R as J,I as Me,a as He,j as Re,S as Ke}from"./infoCollection-ca550ae8.js";import{A as je}from"./bankCard-4efc3256.js";import{c as Ye,n as me,i as pe,m as Ge,d as ze,e as Xe,f as Qe,h as We}from"./utils-7026600a.js";import{v as Je,L as Ze,H as et}from"./loading-a17c6789.js";import{s as tt,c as ot}from"./phoneVerify-799964f9.js";import{_ as at}from"./index-02381bf2.js";import{c as st}from"./close-df102554.js";import{i as ut,g as lt,e as nt}from"./trial-73b847aa.js";import{p as rt}from"./product-274054df.js";import{u as it}from"./upgrade_bg-e5aa6c29.js";const dt=["src"],ct=["src"],mt=x({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""}},setup(o){const l=o;return(n,d)=>l.isCheck?(u(),b("img",{key:0,src:t(Be),class:"banner"},null,8,dt)):(u(),b("img",{key:1,src:l.url,class:"banner"},null,8,ct))}});var aa=L(mt,[["__scopeId","data-v-584aabfc"]]);const pt={class:"product-desc"},ft={class:"title"},_t={class:"desc"},vt=x({props:{productName:{type:String,default:""},productDesc:{type:String,default:""}},setup(o){return(l,n)=>(u(),b("div",pt,[s("div",ft,$(o.productName),1),s("div",_t,$(o.productDesc),1)]))}});var sa=L(vt,[["__scopeId","data-v-2e75305e"]]),ht="/static/assets/serviceConfig.df5f765f.png";const Dt={class:"guarantee-list"},Ft={class:"basic"},yt=["src"],bt={class:"guarantee-detail"},Ct={class:"title"},gt={class:"content"},It=x({props:{guaranteeList:{type:Array,default:()=>[]},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:10}},setup(o){const l=o,[n,d]=ee(!1),h=N(()=>l.guaranteeList.length>l.count?l.isShowClose?!0:!n.value:!1),e=()=>{d()},_=N(()=>l.guaranteeList.length<=l.count||n.value?l.guaranteeList:l.guaranteeList.slice(0,l.count)),B=N(()=>l.guaranteeList.filter(r=>!(r!=null&&r.noDetail))),v=w(!1),F=()=>{v.value=!0};return(r,D)=>{const C=I("ProCell"),g=I("ProCard"),A=I("ProPopup"),S=Se("dompurify-html");return u(),b(T,null,[s("div",Dt,[i(g,{title:"\u4FDD\u969C\u5185\u5BB9",link:"\u67E5\u770B\u8BE6\u60C5","show-divider":!0,"show-icon":!0,onLinkClick:F},{default:c(()=>[s("div",Ft,[(u(!0),b(T,null,M(t(_),(p,k)=>(u(),E(C,{key:k,class:"guarantee-item",title:p.title,content:p.desc,border:!1},null,8,["title","content"]))),128))]),t(h)?(u(),b("div",{key:0,class:"show-more",onClick:e},[P($(t(n)?"\u6536\u8D77":"\u67E5\u770B\u66F4\u591A")+" ",1),i(Z,{name:"down",class:X(["icon",{showMore:t(n)}])},null,8,["class"])])):V("",!0),s("div",{class:"service-config",onClick:D[0]||(D[0]=(...p)=>r.onClose&&r.onClose(...p))},[s("img",{src:t(ht)},null,8,yt)])]),_:1})]),i(A,{show:v.value,"onUpdate:show":D[1]||(D[1]=p=>v.value=p),title:"\u4FDD\u969C\u8BE6\u60C5",class:"guarantee-popup"},{default:c(()=>[s("div",bt,[(u(!0),b(T,null,M(t(B),(p,k)=>(u(),b("div",{key:k,class:"guarantee-item"},[s("div",Ct,$(p.title),1),Ve(s("div",gt,null,512),[[S,p.content]])]))),128))])]),_:1},8,["show"])],64)}}});var ua=L(It,[["__scopeId","data-v-e6de1ac4"]]);const Et=o=>(K("data-v-1d81ec06"),o=o(),j(),o),wt={class:"question"},Bt=Et(()=>s("div",{class:"icon"},$("?"),-1)),At={class:"title"},$t=x({props:{name:{type:String,default:""},question:{type:String,default:""},answer:{type:String,default:""}},setup(o){return(l,n)=>{const d=I("van-collapse-item");return u(),E(d,{name:o.name,class:"com-question-item"},{title:c(()=>[s("div",wt,[Bt,s("div",At,$(o.question),1)])]),default:c(()=>[P(" "+$(o.answer),1)]),_:1},8,["name"])}}});var Pt=L($t,[["__scopeId","data-v-1d81ec06"]]);const St={class:"com-question"},Vt=x({props:{list:{type:Array,default:()=>[]}},setup(o){const l=o,[n,d]=ee(!1),h=w([]),e=()=>{d()},_=N(()=>l.list.length<=4||n.value?l.list:l.list.slice(0,4));return(B,v)=>{const F=I("van-collapse");return u(),b("div",St,[i(F,{modelValue:h.value,"onUpdate:modelValue":v[0]||(v[0]=r=>h.value=r)},{default:c(()=>[(u(!0),b(T,null,M(t(_),(r,D)=>(u(),E(Pt,{key:D,name:D.toString(),question:r.title,answer:r.desc},null,8,["name","question","answer"]))),128))]),_:1},8,["modelValue"]),o.list.length>4?(u(),b("div",{key:0,class:"show-more",onClick:e},[P($(t(n)?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),i(Z,{name:"down",class:X(["icon",{showMore:t(n)}])},null,8,["class"])])):V("",!0)])}}});var kt=L(Vt,[["__scopeId","data-v-5359d801"]]);const Nt=o=>(K("data-v-df0725a6"),o=o(),j(),o),xt={class:"spec"},Lt=["src"],Tt=Nt(()=>s("div",{class:"sub-title"},"\u4EA7\u54C1\u8D44\u6599\u6587\u4EF6\u8BE6\u60C5\u53EF\u624B\u52A8\u653E\u5927\uFF0C\u4EE5\u4FBF\u60A8\u66F4\u6E05\u6670\u67E5\u9605\u5185\u5BB9\u3002",-1)),Ut={class:"tab-1-content"},qt=P(" \u8BF7\u67E5\u770B "),Ot=P(" > "),Mt={key:0,class:"dun-hao"},Ht=x({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""},detail:{type:Object,default:()=>{}}},setup(o){const l=o,n=w([{title:"\u6211\u8981\u6295\u4FDD",slotName:"tab1"},{title:"\u4EA7\u54C1\u7279\u8272",slotName:"tab2"},{title:"\u7406\u8D54\u6D41\u7A0B",slotName:"tab3"},{title:"\u5E38\u89C1\u95EE\u9898",slotName:"tab4"}]),d=e=>{const _=e.split("?")[0],B=_.lastIndexOf(".");return _.substring(B+1)},h=e=>{if(!e)return"";let _=e;return _.indexOf("\u300A")===-1&&(_=`\u300A${_}`),_.indexOf("\u300B")===-1&&(_=`${_}\u300B`),_};return(e,_)=>{const B=I("ProPDFviewer");return u(),E(Ae,{class:"tabs",list:n.value,sticky:"",scrollspy:""},{tab1:c(()=>[ke(e.$slots,"form",{},void 0,!0)]),tab2:c(()=>{var v,F;return[s("div",xt,[(u(!0),b(T,null,M(((F=(v=l.detail)==null?void 0:v.tenantProductInsureVO)==null?void 0:F.spec)||[],(r,D)=>(u(),b("img",{key:D,src:r,class:"detail-img"},null,8,Lt))),128)),i(q)]),i(W,{title:"\u4EA7\u54C1\u8D44\u6599"},{subTitle:c(()=>[Tt]),default:c(()=>{var r,D;return[s("div",Ut,[qt,(u(!0),b(T,null,M(((D=(r=o.detail)==null?void 0:r.tenantProductInsureVO)==null?void 0:D.attachmentVOList)||[],(C,g)=>(u(),E(B,{key:g,type:d(C.attachmentUri),class:"file-name",title:h(C.attachmentName),content:C.attachmentUri},{default:c(()=>{var A,S;return[Ot,g!==(((S=(A=o.detail)==null?void 0:A.tenantProductInsureVO)==null?void 0:S.attachmentVOList)||[]).length-1?(u(),b("span",Mt,"\u3001")):V("",!0)]}),_:2},1032,["type","title","content"]))),128))])]}),_:1})]}),tab3:c(()=>[i(W,{title:"\u7406\u8D54\u6D41\u7A0B"},{default:c(()=>{var v,F;return[i(Ue,{list:(F=(v=l.detail)==null?void 0:v.tenantProductInsureVO)==null?void 0:F.settlementProcessList},null,8,["list"])]}),_:1})]),tab4:c(()=>[i(W,{title:"\u5E38\u89C1\u95EE\u9898"},{default:c(()=>{var v,F;return[i(kt,{list:(F=(v=l.detail)==null?void 0:v.tenantProductInsureVO)==null?void 0:F.questionList},null,8,["list"])]}),_:1})]),_:3},8,["list"])}}});var la=L(Ht,[["__scopeId","data-v-df0725a6"]]);const Rt=o=>(K("data-v-0dce64f2"),o=o(),j(),o),Kt={class:"refueling-package-com"},jt=Rt(()=>s("div",{class:"title"},"\u52A0\u6CB9\u5305",-1)),Yt=x({props:{packageProductList:{type:Array,default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:3}},setup(o){const l=o,[n,d]=ee(!1),h=N(()=>l.packageProductList.length>l.count?l.isShowClose?!0:!n.value:!1),e=()=>{d()},_=N(()=>l.packageProductList.length<=l.count||n.value?l.packageProductList:l.packageProductList.slice(0,l.count));return(B,v)=>{const F=I("ProRadioButton"),r=I("ProField"),D=I("ProForm");return u(),b("div",Kt,[jt,i(D,{ref:"formRef"},{default:c(()=>[(u(!0),b(T,null,M(t(_),(C,g)=>(u(),E(r,{key:`${C.value}_${g}`,modelValue:C.value,"onUpdate:modelValue":A=>C.value=A,label:C.packageName,required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:c(()=>[i(F,{modelValue:C.value,"onUpdate:modelValue":A=>C.value=A,options:t(qe),disabled:C.disabled},null,8,["modelValue","onUpdate:modelValue","options","disabled"])]),_:2},1032,["modelValue","onUpdate:modelValue","label"]))),128)),t(h)?(u(),b("div",{key:0,class:"show-more",onClick:e},[P($(t(n)?"\u6536\u8D77":"\u67E5\u770B\u66F4\u591A")+" ",1),i(Z,{name:"down",class:X(["icon",{showMore:t(n)}])},null,8,["class"])])):V("",!0)]),_:1},512)])}}});var Gt=L(Yt,[["__scopeId","data-v-0dce64f2"]]);const Q=o=>(K("data-v-55da10e0"),o=o(),j(),o),zt={class:"holder container"},Xt=Q(()=>s("div",{class:"title"},"\u6295\u4FDD\u4EBA\u4FE1\u606F",-1)),Qt={class:"insured-relation container"},Wt=Q(()=>s("div",{class:"title"},"\u4E3A\u8C01\u6295\u4FDD",-1)),Jt={class:"insured container"},Zt=Q(()=>s("div",{class:"title"},"\u88AB\u4FDD\u4EBA\u4FE1\u606F",-1)),eo={key:0,class:"container"},to={class:"payment container"},oo={class:"renewal-wrapper"},ao=Q(()=>s("div",{class:"desc"},[s("p",null,"\u4FDD\u5355\u5230\u671F\u81EA\u52A8\u91CD\u65B0\u6295\u4FDD\uFF0C\u4EAB\u53D7\u4FDD\u969C\u4E0D\u95F4\u65AD"),s("p",null,"\u81EA\u4ECE\u91CD\u65B0\u6295\u4FDD\u5F00\u542F\u540E\uFF0C\u4E2D\u9014\u53EF\u968F\u65F6\u53D6\u6D88")],-1)),so=x({props:{disable:{type:Boolean,default:!1},formAuth:{type:Object,default:()=>{}},formInfo:{type:Object,default:()=>{}},payments:{type:Array,default:()=>[0,1]},paymentMethod:{type:Array,default:()=>[0,1]},productDetail:{type:Object,default:()=>{}},isShowPackage:{type:Boolean,default:!1}},emits:["onReset","onUpdate","onVerify"],setup(o,{expose:l,emit:n}){const d=o,h=w({}),e=Ne({formInfo:d.formInfo}),_=w(!1),B=w(0),v=w(!1),F=60,r=w(0),D=w("\u83B7\u53D6\u9A8C\u8BC1\u7801"),C=w(!1),g=f=>Je(f)?!0:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u59D3\u540D",A=N(()=>Oe.filter((f,a)=>d.payments.includes(a))),S=N(()=>je.filter((f,a)=>d.paymentMethod.includes(a))),p=N(()=>e.formInfo.insured.relationToHolder===J.SELF),k=N(()=>{var f,a;return(a=(f=d.productDetail)==null?void 0:f.tenantProductInsureVO)==null?void 0:a.attachmentVOList.filter(y=>y.attachmentName==="\u8D39\u7387\u8868")}),G=N(()=>{var f,a;return((a=(f=d.productDetail)==null?void 0:f.tenantProductInsureVO)==null?void 0:a.attachmentVOList.filter(y=>!["\u5065\u5EB7\u544A\u77E5","\u8D39\u7387\u8868"].includes(y.attachmentName)))||[]}),ve=N(()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(e.formInfo.holder.mobile)),te=()=>(v.value=!0,v),he=f=>{B.value=f,_.value=!0},De=()=>{v.value=!1},Fe=()=>new Promise((f,a)=>{h==null||h.value.validate().then(()=>{f("")},y=>{a(y)})}),ye=()=>{if(r.value>0)return;r.value=F;const f=()=>{D.value=`${r.value}s`,r.value-=1};f();const a=setInterval(()=>{r.value===0?(D.value="\u83B7\u53D6\u9A8C\u8BC1\u7801",r.value=0,clearInterval(a)):f()},1e3)},be=async()=>{r.value>0||h==null||h.value.validate("mobile").then(async()=>{const f=await tt(e.formInfo.holder.mobile),{code:a,data:y}=f;a==="10000"&&(C.value=!0,xe({message:"\u77ED\u4FE1\u53D1\u9001\u6210\u529F\uFF0C\u8BF7\u67E5\u6536"}),ye())})},Ce=()=>{const{relationToHolder:f}=e.formInfo.insured;f===J.SELF?(e.formInfo.insured={certNo:e.formInfo.holder.certNo,name:e.formInfo.holder.name,socialFlag:e.formInfo.holder.socialFlag,relationToHolder:f},n("onReset")):(e.formInfo.insured={certNo:"",name:"",socialFlag:Ke.HAS,relationToHolder:f},n("onUpdate"))},ge=f=>new Promise((a,y)=>{if(!f||!ze(f)||!e.formInfo.holder.mobile){a(!1);return}ot(e.formInfo.holder.mobile,e.formInfo.holder.mobileSmsCode).then(O=>{const{data:R}=O;a(!!R)})});return Y([()=>e.formInfo.holder.certNo,()=>e.formInfo.insured.certNo],()=>{var f,a;e.formInfo.holder.certNo=(f=e.formInfo.holder.certNo)==null?void 0:f.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,""),e.formInfo.insured.certNo=(a=e.formInfo.insured.certNo)==null?void 0:a.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,"")},{deep:!0,immediate:!0}),Y(()=>e.formInfo.holder,()=>{e.formInfo.insured.relationToHolder===J.SELF&&Object.assign(e.formInfo.insured,e.formInfo.holder)},{deep:!0,immediate:!0}),Y(()=>e.formInfo.insured.certNo,()=>{var a,y;let f=!1;$e(e.formInfo.insured.certNo)&&(f=!0),(y=(a=e.formInfo)==null?void 0:a.packageProductList)==null||y.forEach(O=>{f?Ye(O,e.formInfo.insured.certNo)||(O.disabled=!0,O.value=Me.UN_INSURE):O.disabled=!1})}),l({validateForm:Fe,previewFile:he,reEditForm:De,isAgreeFile:v,onSubmit:te}),(f,a)=>{const y=I("ProField"),O=I("van-button"),R=I("ProRadioButton"),Ie=I("van-switch"),Ee=I("ProForm"),we=I("van-config-provider");return u(),E(we,{"theme-vars":t(fe)},{default:c(()=>[i(Ee,{ref_key:"formRef",ref:h},{default:c(()=>{var oe,ae,se,ue,le,ne,re,ie,de,ce;return[i(q),s("div",zt,[Xt,(oe=d.formAuth)!=null&&oe.holderNameDisable?(u(),E(y,{key:0,label:"\u59D3\u540D",class:"pro-field","is-view":!0},{input:c(()=>[P($(t(me)(t(e).formInfo.holder.name)),1)]),_:1})):(u(),E(y,{key:1,modelValue:t(e).formInfo.holder.name,"onUpdate:modelValue":a[0]||(a[0]=m=>t(e).formInfo.holder.name=m),label:"\u59D3\u540D",name:"name",required:"",placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",maxlength:"50",rules:[{validator:g}],"custom-class":"custom-class-name"},null,8,["modelValue","rules"])),(ae=d.formAuth)!=null&&ae.holderCertDisable?(u(),E(y,{key:2,label:"\u8BC1\u4EF6\u53F7\u7801",class:"pro-field","is-view":!0},{input:c(()=>[P($(t(pe)(t(e).formInfo.holder.certNo)),1)]),_:1})):(u(),E(y,{key:3,modelValue:t(e).formInfo.holder.certNo,"onUpdate:modelValue":a[1]||(a[1]=m=>t(e).formInfo.holder.certNo=m),label:"\u8BC1\u4EF6\u53F7\u7801",name:"certNo",required:"",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",maxlength:"18","validate-type":[t(z).ID_CARD],"custom-class":"custom-class-certNo"},null,8,["modelValue","validate-type"])),(se=d.formAuth)!=null&&se.holderMobileDisable?(u(),E(y,{key:4,label:"\u624B\u673A\u53F7",class:"pro-field","is-view":!0},{input:c(()=>[P($(t(Ge)(t(e).formInfo.holder.mobile)),1)]),_:1})):(u(),E(y,{key:5,modelValue:t(e).formInfo.holder.mobile,"onUpdate:modelValue":a[2]||(a[2]=m=>t(e).formInfo.holder.mobile=m),label:"\u624B\u673A\u53F7",name:"mobile",required:"",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",type:"digit",maxlength:"11","validate-type":[t(z).PHONE],"custom-class":"custom-class-mobile"},null,8,["modelValue","validate-type"])),(ue=d.formAuth)!=null&&ue.holderMobileDisable?V("",!0):(u(),E(y,{key:6,modelValue:t(e).formInfo.holder.mobileSmsCode,"onUpdate:modelValue":a[3]||(a[3]=m=>t(e).formInfo.holder.mobileSmsCode=m),label:"\u9A8C\u8BC1\u7801",name:"mobileSmsCode",type:"digit",required:"",rules:[{validator:ge,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u9A8C\u8BC1\u7801"}],"input-align":"left",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801","error-message-align":"left",maxlength:"6","validate-type":[t(z).SMS_CODE],"custom-class":"custom-class-mobileSmsCode"},{extra:c(()=>[i(O,{class:X(["sms-code",{"count-down":r.value>0}]),size:"small",type:"primary",disabled:!t(ve),onClick:be},{default:c(()=>[P($(D.value),1)]),_:1},8,["class","disabled"])]),_:1},8,["modelValue","rules","validate-type"]))]),i(q),s("div",Qt,[Wt,i(y,{modelValue:t(e).formInfo.insured.relationToHolder,"onUpdate:modelValue":a[5]||(a[5]=m=>t(e).formInfo.insured.relationToHolder=m),class:"relation-to-Holder",label:"",name:"relationToHolder",placeholder:"\u8BF7\u9009\u62E9",onClick:Ce},{input:c(()=>{var m;return[i(R,{modelValue:t(e).formInfo.insured.relationToHolder,"onUpdate:modelValue":a[4]||(a[4]=U=>t(e).formInfo.insured.relationToHolder=U),disabled:(m=d.formAuth)==null?void 0:m.relationToHolderDisable,options:t(He)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"])]),i(q),s("div",Jt,[Zt,(le=d.formAuth)!=null&&le.insuredNameDisable?(u(),E(y,{key:0,label:"\u59D3\u540D",class:"pro-field","is-view":!0},{input:c(()=>[P($(t(me)(t(e).formInfo.insured.name)),1)]),_:1})):V("",!0),!((ne=d.formAuth)!=null&&ne.insuredNameDisable)&&!t(p)?(u(),E(y,{key:1,modelValue:t(e).formInfo.insured.name,"onUpdate:modelValue":a[6]||(a[6]=m=>t(e).formInfo.insured.name=m),label:"\u59D3\u540D",name:"name",required:"",maxlength:"50",rules:[{validator:g}]},null,8,["modelValue","rules"])):V("",!0),(re=d.formAuth)!=null&&re.insuredCertDisable?(u(),E(y,{key:2,label:"\u8BC1\u4EF6\u53F7\u7801",class:"pro-field","is-view":!0},{input:c(()=>[P($(t(pe)(t(e).formInfo.insured.certNo)),1)]),_:1})):V("",!0),!((ie=d.formAuth)!=null&&ie.insuredCertDisable)&&!t(p)?(u(),E(y,{key:3,modelValue:t(e).formInfo.insured.certNo,"onUpdate:modelValue":a[7]||(a[7]=m=>t(e).formInfo.insured.certNo=m),label:"\u8BC1\u4EF6\u53F7\u7801",name:"certNo",required:"",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",maxlength:"20","validate-type":[t(z).ID_CARD]},null,8,["modelValue","validate-type"])):V("",!0),i(y,{modelValue:t(e).formInfo.insured.socialFlag,"onUpdate:modelValue":a[9]||(a[9]=m=>t(e).formInfo.insured.socialFlag=m),label:"\u6709\u65E0\u793E\u4FDD",name:"name",required:"",placeholder:"\u8BF7\u9009\u62E9"},{input:c(()=>{var m;return[i(R,{modelValue:t(e).formInfo.insured.socialFlag,"onUpdate:modelValue":a[8]||(a[8]=U=>t(e).formInfo.insured.socialFlag=U),disabled:(m=d.formAuth)==null?void 0:m.insuredSocialDisable,options:t(Re)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"])]),i(q),o.isShowPackage?(u(),b("div",eo,[i(Gt,{"package-product-list":(de=o.formInfo)==null?void 0:de.packageProductList},null,8,["package-product-list"])])):V("",!0),i(q),s("div",to,[(ce=d.formAuth)!=null&&ce.paymentFrequencyDisable?V("",!0):(u(),E(y,{key:0,modelValue:t(e).formInfo.paymentFrequency,"onUpdate:modelValue":a[11]||(a[11]=m=>t(e).formInfo.paymentFrequency=m),label:"\u4EA4\u8D39\u65B9\u5F0F",name:"paymentFrequency",required:"",placeholder:"\u8BF7\u9009\u62E9","error-message":"\u8BF7\u9009\u62E9\u4EA4\u8D39\u65B9\u5F0F"},{input:c(()=>{var m;return[i(R,{modelValue:t(e).formInfo.paymentFrequency,"onUpdate:modelValue":a[10]||(a[10]=U=>t(e).formInfo.paymentFrequency=U),disabled:(m=d.formAuth)==null?void 0:m.paymentFrequencyDisable,options:t(A)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"])),i(q),i(y,{modelValue:t(e).formInfo.paymentMethod,"onUpdate:modelValue":a[13]||(a[13]=m=>t(e).formInfo.paymentMethod=m),label:"\u652F\u4ED8\u65B9\u5F0F",name:"paymentMethod",required:"",placeholder:"\u8BF7\u9009\u62E9","custom-class":"custom-class-paymentMethod","error-message":"\u8BF7\u9009\u62E9\u652F\u4ED8\u65B9\u5F0F"},{input:c(()=>{var m;return[i(R,{modelValue:t(e).formInfo.paymentMethod,"onUpdate:modelValue":a[12]||(a[12]=U=>t(e).formInfo.paymentMethod=U),disabled:(m=d.formAuth)==null?void 0:m.paymentDisable,options:t(S)},null,8,["modelValue","disabled","options"])]}),_:1},8,["modelValue"]),i(q),s("div",oo,[i(y,{label:"\u5F00\u901A\u81EA\u4E3B\u91CD\u65B0\u6295\u4FDD",class:"pro-field",name:"renewalDK",placeholder:"\u8BF7\u9009\u62E9",border:!1},{input:c(()=>{var m;return[i(Ie,{modelValue:t(e).formInfo.renewalDK,"onUpdate:modelValue":a[14]||(a[14]=U=>t(e).formInfo.renewalDK=U),disabled:(m=d.formAuth)==null?void 0:m.renewalDKDisable},null,8,["modelValue","disabled"])]}),_:1}),ao])]),i(q),i(at,{show:_.value,"onUpdate:show":a[15]||(a[15]=m=>_.value=m),"content-list":t(G).concat(t(k)),"active-index":B.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9",onSubmit:te},null,8,["show","content-list","active-index"])]}),_:1},512)]),_:1},8,["theme-vars"])}}});var na=L(so,[["__scopeId","data-v-55da10e0"]]);const uo=o=>(K("data-v-812ee74a"),o=o(),j(),o),lo={key:0,class:"page-waiting"},no=["src"],ro=uo(()=>s("div",{class:"tips"},[s("p",null,"\u652F\u4ED8\u6210\u529F\uFF0C\u627F\u4FDD\u4E2D...")],-1)),io=x({props:{isShow:{type:Boolean,default:()=>{}}},setup(o){const l=o;return Y(()=>l.isShow,n=>{n?document.body.style.overflow="hidden":document.body.style.overflow="inherit"}),(n,d)=>l.isShow?(u(),b("div",lo,[s("img",{class:"loading",src:t(Ze)},null,8,no),ro])):V("",!0)}});var ra=L(io,[["__scopeId","data-v-812ee74a"]]);const _e=o=>(K("data-v-171c7312"),o=o(),j(),o),co={key:0,class:"pro-modal"},mo=_e(()=>s("div",{class:"pro-overlay"},null,-1)),po={class:"pro-modal-wrapper"},fo=["src"],_o={class:"pro-modal-body"},vo={class:"pro-modal-content"},ho=_e(()=>s("p",{class:"tips"},"\u5347\u7EA7\u540E\u7684\u4FDD\u969C\u5C06\u4E8E\u7B2C\u4E8C\u671F\u4FDD\u8D39\u6263\u8D39/\u7F34\u8D39\u6210\u529F\u540E\u751F\u6548",-1)),Do={class:"pro-modal-content"},Fo={class:"product-attachment-list"},yo=P(" \u8BF7\u60A8\u91CD\u70B9\u9605\u8BFB\u5E76\u77E5\u6653 "),bo={key:0,class:"dun-hao"},Co={class:"pro-modal-close"},go=["src"],Io=x({props:{orderNo:{type:String,default:""},tenantId:{type:String,default:""},isShow:{type:Boolean,default:()=>{}},upgradeCode:{type:String,default:""}},emits:["on-confirm","on-close"],setup(o,{emit:l}){const n=o,d=w(),h=w(),e=w(),_=w(),B=w([]),v=w(n.upgradeCode),F=()=>{l("on-close")},r=()=>{l("on-confirm")},D=async()=>{try{const g=Qe({tenantId:n.tenantId,premium:_.value,orderDetail:e.value,productDetail:d.value,insureDetail:h.value,successJumpUrl:"",iseeBizNo:""},We),A=await nt(g),{code:S,data:p}=A;S==="10000"&&(_.value=p.installmentPremium)}catch(g){console.log(g)}},C=()=>{const g=rt({productCode:v.value,withInsureInfo:!0,tenantId:n.tenantId}),A=ut({productCode:v.value}),S=lt({orderNo:n.orderNo,tenantId:n.tenantId});Promise.all([g,A,S]).then(([p,k,G])=>{p.code==="10000"&&(d.value=p.data,B.value=p.data.tenantProductInsureVO.attachmentVOList),k.code==="10000"&&(h.value=k.data),G.code==="10000"&&(e.value=G.data),D()})};return Y(()=>n.isShow,g=>{v.value=n.upgradeCode,g?(document.body.style.overflow="hidden",C()):document.body.style.overflow="inherit"}),(g,A)=>{const S=I("ProPDFviewer");return n.isShow?(u(),b("div",co,[mo,s("div",po,[s("img",{class:"cover",src:t(it)},null,8,fo),s("div",_o,[s("div",vo,[s("p",null,"\u6BCF\u6708\u4FDD\u8D39\u4EC5\u9700"+$(t(Xe)(_.value||0))+"\u5143\uFF0C\u65E0\u9700\u91CD\u590D\u6295\u4FDD",1),ho]),s("div",{class:"pro-modal-btn",onClick:r},"\u4E00\u952E\u5347\u7EA7"),s("div",Do,[s("div",Fo,[yo,(u(!0),b(T,null,M(B.value,(p,k)=>(u(),E(S,{key:k,class:"file-name",title:`\u300A${p.attachmentName}\u300B`,content:p.attachmentUri,type:"pdf"},{default:c(()=>[k!==(B.value||[]).length-1?(u(),b("span",bo,"\u3001")):V("",!0)]),_:2},1032,["title","content"]))),128))])])]),s("div",Co,[s("img",{src:t(st),onClick:F},null,8,go)])])])):V("",!0)}}});var ia=L(Io,[["__scopeId","data-v-171c7312"]]);const Eo=o=>(K("data-v-043963d8"),o=o(),j(),o),wo={class:"header"},Bo=["src"],Ao={class:"content"},$o=Eo(()=>s("h4",null,"\u6E29\u99A8\u63D0\u793A\uFF0C\u60A8\u5DF2\u8FDB\u5165\u6295\u4FDD\u6D41\u7A0B\uFF1A",-1)),Po=P(" \u8BF7\u4ED4\u7EC6\u9605\u8BFB\u514D\u8D23\u6761\u6B3E\u3001\u6295\u4FDD\u987B\u77E5\u7B49\u4FE1\u606F\uFF0C\u8BF7\u60A8\u91CD\u70B9\u9605\u8BFB\u5E76\u77E5\u6653 "),So=["onClick"],Vo=P(" \uFF0C\u4E3A\u7EF4\u62A4\u60A8\u7684\u5408\u6CD5\u6743\u76CA\uFF0C\u60A8\u7684\u64CD\u4F5C\u8F68\u8FF9\u5C06\u88AB\u8BB0\u5F55\u3002 "),ko={class:"footer"},No=P(" \u597D\u7684 "),xo={key:0},Lo=x({props:{productDetail:{type:Object,default:()=>{}}},setup(o){const l=o,n="PRENOTICE",d=new Pe({source:"sessionStorage"}),h=w(!1),e=w(!1),_=Le({time:4e3,onFinish:()=>{d.set(`${n}-isShow`,"1"),h.value=!1}}),B=w(),v=N(()=>{var D,C;return(C=(D=l.productDetail)==null?void 0:D.tenantProductInsureVO)==null?void 0:C.attachmentVOList.filter(g=>g.attachmentName==="\u4E2A\u4EBA\u4FE1\u606F\u4FDD\u62A4\u653F\u7B56")}),F=N(()=>_.current.value.seconds),r=D=>{e.value=!e.value,B.value=D};return Te(()=>{h.value=!0,_.start()}),(D,C)=>{const g=I("VanButton"),A=I("ProPopup"),S=I("ProFilePreview");return u(),b(T,null,[i(A,{class:"pre-notice-wrap",show:h.value,closeable:!1,height:45},{default:c(()=>[s("div",wo,[s("img",{src:t(et)},null,8,Bo)]),s("div",Ao,[$o,s("p",null,[Po,(u(!0),b(T,null,M(t(v),(p,k)=>(u(),b("span",{key:k,class:"file-name",onClick:G=>r(p.attachmentUri)}," \u300A"+$(p.attachmentName)+"\u300B ",9,So))),128)),Vo])]),s("div",ko,[i(g,{type:"primary",block:"",round:""},{default:c(()=>[No,t(F)?(u(),b("span",xo,$(t(F))+"s",1)):V("",!0)]),_:1})])]),_:1},8,["show"]),i(A,{show:e.value,"onUpdate:show":C[0]||(C[0]=p=>e.value=p),class:"pre-notice-wrap","close-icon":"close",position:"bottom",style:{height:"600px",paddingTop:"40px"}},{default:c(()=>[i(S,{content:B.value,type:"pdf"},null,8,["content"])]),_:1},8,["show"])],64)}}});var da=L(Lo,[["__scopeId","data-v-043963d8"]]);const To={class:"list"},Uo={class:"item"},qo={class:"footer"},Oo=P("\u90E8\u5206\u4E3A\u662F"),Mo=P("\u5168\u90E8\u4E3A\u5426"),ca=x({props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealth"],setup(o,{emit:l}){const n=o,d=w(n.show),h=w(n.activeIndex),e=N(()=>{var F;return(F=n.contentList[h.value])==null?void 0:F.attachmentUri}),_=w(!0),B=F=>{_.value=!1,l("update:show",!1),l("onConfirmHealth",F)},v=()=>{_.value&&l("onCloseHealth")};return Y(()=>n,()=>{d.value=n.show,h.value=n.activeIndex},{deep:!0,immediate:!0}),(F,r)=>{const D=I("ProTab"),C=I("ProFilePreview"),g=I("VanButton"),A=I("van-config-provider"),S=I("ProPopup");return u(),E(S,{show:d.value,"onUpdate:show":r[3]||(r[3]=p=>d.value=p),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:r[4]||(r[4]=p=>v())},{default:c(()=>[i(A,{"theme-vars":t(fe),class:"custom-provider"},{default:c(()=>[d.value?(u(),E(D,{key:0,active:h.value,"onUpdate:active":r[0]||(r[0]=p=>h.value=p),list:o.contentList.map((p,k)=>({title:p.attachmentName,slotName:`guarantee-${k}`})),class:"tab"},null,8,["active","list"])):V("",!0),s("div",To,[s("div",Uo,[(u(),E(C,{key:t(e),content:t(e),type:"pdf"},null,8,["content"]))])]),s("div",qo,[i(g,{type:"primary",block:"",round:"",onClick:r[1]||(r[1]=p=>B("N"))},{default:c(()=>[Oo]),_:1}),i(g,{type:"primary",plain:"",block:"",round:"",onClick:r[2]||(r[2]=p=>B("allFalse"))},{default:c(()=>[Mo]),_:1})])]),_:1},8,["theme-vars"])]),_:1},8,["show"])}}}),H={holderNameDisable:!0,holderCertDisable:!0,holderMobileDisable:!0,holderSocialDisable:!0,relationToHolderDisable:!0,insuredNameDisable:!0,insuredCertDisable:!0,insuredSocialDisable:!0,paymentDisable:!0,renewalDKDisable:!0,paymentFrequencyDisable:!0};({...H});({...H});({...H});({...H});({...H});const ma={...H,holderNameDisable:!1,holderCertDisable:!1,holderMobileDisable:!1,holderSocialDisable:!1,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1};({...H});const pa={...H};export{aa as B,sa as D,ua as G,na as H,da as P,la as S,ia as U,ra as W,ca as _,ma as a,H as d,pa as p};
