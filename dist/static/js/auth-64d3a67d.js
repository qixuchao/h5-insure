import{_ as e,d as a,c as l,h as t,g as o,j as s,t as n,S as r,E as i,r as d,z as u,f as c,w as m,F as p,i as f,e as v,n as h,V as b,L as y,k as g,A as I,a7 as _,a3 as w,P as V,a8 as k,X as D,Y as C,bk as N,a2 as S,bV as x,aa as U,m as F,ap as L,au as A,J as q,an as O,aJ as P,aI as H,T as j,B as T,bT as E,ac as M,bW as B,G as R,aQ as $,a5 as K}from"./index-f03140d4.js";import W from"./index-71768f0f.js";import{C as z}from"./index-6b08a88b.js";import{C as J}from"./index-48824806.js";import{S as X}from"./index-df8fc635.js";import{t as Y}from"./theme-ea709837.js";import{g as G,h as Z,R as Q,I as ee,a as ae,i as le,S as te}from"./infoCollection-494ff537.js";import{A as oe}from"./bankCard-10f3d159.js";import{c as se,n as ne,i as re,m as ie,d as de,e as ue,f as ce,h as me}from"./utils-3347e263.js";import{v as pe}from"./validator-5a13dc82.js";import{s as fe,c as ve}from"./phoneVerify-07a196ce.js";import{_ as he,c as be}from"./close-fb8d1d54.js";import{i as ye,g as ge,e as Ie}from"./trial-4c132c87.js";import{p as _e}from"./product-48bec35b.js";const we=["src"],Ve=["src"];var ke=e(a({__name:"index",props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""}},setup(e){const a=e;return(e,s)=>a.isCheck?(l(),t("img",{key:0,src:o("/static/assets/check-detail.24065a01.png"),class:"banner"},null,8,we)):(l(),t("img",{key:1,src:a.url,class:"banner"},null,8,Ve))}}),[["__scopeId","data-v-584aabfc"]]);const De={class:"product-desc"},Ce={class:"title"},Ne={class:"desc"};var Se=e(a({__name:"index",props:{productName:{type:String,default:""},productDesc:{type:String,default:""}},setup:e=>(a,o)=>(l(),t("div",De,[s("div",Ce,n(e.productName),1),s("div",Ne,n(e.productDesc),1)]))}),[["__scopeId","data-v-2e75305e"]]),xe="/static/assets/serviceConfig.ffc50dbe.png";const Ue={class:"guarantee-list"},Fe={class:"basic"},Le=["src"],Ae={class:"guarantee-detail"},qe={class:"title"},Oe={class:"content"};var Pe=e(a({__name:"index",props:{guaranteeList:{type:Array,default:()=>[]},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:10},imgType:{type:String,default:"ZYE"}},setup(e){const a=e,[D,C]=r(!1),N=i((()=>a.guaranteeList.length>a.count&&(!!a.isShowClose||!D.value))),S=i((()=>{const e={BW:"/static/assets/serviceConfigBW.2f5aa9e8.png",ZYE:xe};return(null==e?void 0:e[a.imgType])||xe})),x=()=>{C()},U=i((()=>a.guaranteeList.length<=a.count||D.value?a.guaranteeList:a.guaranteeList.slice(0,a.count))),F=i((()=>a.guaranteeList.filter((e=>!(null==e?void 0:e.noDetail))))),L=d(!1),A=()=>{L.value=!0};return(e,a)=>{const r=w,i=V,d=k,C=u("dompurify-html");return l(),t(p,null,[s("div",Ue,[c(i,{title:"保障内容",link:"查看详情","show-divider":!0,"show-icon":!0,onLinkClick:A},{default:m((()=>[s("div",Fe,[(l(!0),t(p,null,f(o(U),((e,a)=>(l(),v(r,{key:a,class:"guarantee-item",title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128))]),o(N)?(l(),t("div",{key:0,class:"show-more",onClick:x},[h(n(o(D)?"收起":"查看更多")+" ",1),c(b,{name:"down",class:y(["icon",{showMore:o(D)}])},null,8,["class"])])):g("",!0),s("div",{class:"service-config",onClick:a[0]||(a[0]=(...a)=>e.onClose&&e.onClose(...a))},[s("img",{src:o(S)},null,8,Le)])])),_:1})]),c(d,{show:o(L),"onUpdate:show":a[1]||(a[1]=e=>_(L)?L.value=e:null),title:"保障详情",class:"guarantee-popup"},{default:m((()=>[s("div",Ae,[(l(!0),t(p,null,f(o(F),((e,a)=>(l(),t("div",{key:a,class:"guarantee-item"},[s("div",qe,n(e.title),1),I(s("div",Oe,null,512),[[C,e.content]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-afeafb6a"]]);const He={class:"question"},je=(e=>(D("data-v-1d81ec06"),e=e(),C(),e))((()=>s("div",{class:"icon"},n("?"),-1))),Te={class:"title"};var Ee=e(a({__name:"item",props:{name:{type:String,default:""},question:{type:String,default:""},answer:{type:String,default:""}},setup:e=>(a,t)=>{const o=z;return l(),v(o,{name:e.name,class:"com-question-item"},{title:m((()=>[s("div",He,[je,s("div",Te,n(e.question),1)])])),default:m((()=>[h(" "+n(e.answer),1)])),_:1},8,["name"])}}),[["__scopeId","data-v-1d81ec06"]]);const Me={class:"com-question"};var Be=e(a({__name:"index",props:{list:{type:Array,default:()=>[]}},setup(e){const a=e,[s,u]=r(!1),I=d([]),w=()=>{u()},V=i((()=>a.list.length<=4||s.value?a.list:a.list.slice(0,4)));return(a,r)=>{const i=J;return l(),t("div",Me,[c(i,{modelValue:o(I),"onUpdate:modelValue":r[0]||(r[0]=e=>_(I)?I.value=e:null)},{default:m((()=>[(l(!0),t(p,null,f(o(V),((e,a)=>(l(),v(Ee,{key:a,name:a.toString(),question:e.title,answer:e.desc},null,8,["name","question","answer"])))),128))])),_:1},8,["modelValue"]),e.list.length>4?(l(),t("div",{key:0,class:"show-more",onClick:w},[h(n(o(s)?"收起":"展开")+" ",1),c(b,{name:"down",class:y(["icon",{showMore:o(s)}])},null,8,["class"])])):g("",!0)])}}}),[["__scopeId","data-v-5359d801"]]);const Re={class:"spec"},$e=["src"],Ke=(e=>(D("data-v-df0725a6"),e=e(),C(),e))((()=>s("div",{class:"sub-title"},"产品资料文件详情可手动放大，以便您更清晰查阅内容。",-1))),We={class:"tab-1-content"},ze={key:0,class:"dun-hao"};var Je=e(a({__name:"index",props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""},detail:{type:Object,default:()=>{}}},setup(e){const a=e,n=d([{title:"我要投保",slotName:"tab1"},{title:"产品特色",slotName:"tab2"},{title:"理赔流程",slotName:"tab3"},{title:"常见问题",slotName:"tab4"}]),r=e=>{const a=e.split("?")[0],l=a.lastIndexOf(".");return a.substring(l+1)},i=e=>{if(!e)return"";let a=e;return-1===a.indexOf("《")&&(a=`《${a}`),-1===a.indexOf("》")&&(a=`${a}》`),a};return(d,u)=>{const b=U;return l(),v(x,{class:"tabs",list:o(n),sticky:"",scrollspy:""},{tab1:m((()=>[N(d.$slots,"form",{},void 0,!0)])),tab2:m((()=>{var o,n;return[s("div",Re,[(l(!0),t(p,null,f((null==(n=null==(o=a.detail)?void 0:o.tenantProductInsureVO)?void 0:n.spec)||[],((e,a)=>(l(),t("img",{key:a,src:e,class:"detail-img"},null,8,$e)))),128)),c(S)]),c(V,{title:"产品资料"},{subTitle:m((()=>[Ke])),default:m((()=>{var a,o;return[s("div",We,[h(" 请查看 "),(l(!0),t(p,null,f((null==(o=null==(a=e.detail)?void 0:a.tenantProductInsureVO)?void 0:o.attachmentVOList)||[],((a,o)=>(l(),v(b,{key:o,type:r(a.attachmentUri),class:"file-name",title:i(a.attachmentName),content:a.attachmentUri},{default:m((()=>{var a,s;return[h(" > "),o!==((null==(s=null==(a=e.detail)?void 0:a.tenantProductInsureVO)?void 0:s.attachmentVOList)||[]).length-1?(l(),t("span",ze,"、")):g("",!0)]})),_:2},1032,["type","title","content"])))),128))])]})),_:1})]})),tab3:m((()=>[c(V,{title:"理赔流程"},{default:m((()=>{var e,l;return[c(W,{list:null==(l=null==(e=a.detail)?void 0:e.tenantProductInsureVO)?void 0:l.settlementProcessList},null,8,["list"])]})),_:1})])),tab4:m((()=>[c(V,{title:"常见问题"},{default:m((()=>{var e,l;return[c(Be,{list:null==(l=null==(e=a.detail)?void 0:e.tenantProductInsureVO)?void 0:l.questionList},null,8,["list"])]})),_:1})])),_:3},8,["list"])}}}),[["__scopeId","data-v-df0725a6"]]);const Xe={class:"refueling-package-com"},Ye=(e=>(D("data-v-0dce64f2"),e=e(),C(),e))((()=>s("div",{class:"title"},"加油包",-1)));var Ge=e(a({__name:"index",props:{packageProductList:{type:Array,default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:3}},setup(e){const a=e,[s,d]=r(!1),u=i((()=>a.packageProductList.length>a.count&&(!!a.isShowClose||!s.value))),I=()=>{d()},_=i((()=>a.packageProductList.length<=a.count||s.value?a.packageProductList:a.packageProductList.slice(0,a.count)));return(e,a)=>{const r=F,i=L,d=A;return l(),t("div",Xe,[Ye,c(d,{ref:"formRef"},{default:m((()=>[(l(!0),t(p,null,f(o(_),((e,a)=>(l(),v(i,{key:`${e.value}_${a}`,modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,label:e.packageName,required:"",placeholder:"请选择"},{input:m((()=>[c(r,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,options:o(G),disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","options","disabled"])])),_:2},1032,["modelValue","onUpdate:modelValue","label"])))),128)),o(u)?(l(),t("div",{key:0,class:"show-more",onClick:I},[h(n(o(s)?"收起":"查看更多")+" ",1),c(b,{name:"down",class:y(["icon",{showMore:o(s)}])},null,8,["class"])])):g("",!0)])),_:1},512)])}}}),[["__scopeId","data-v-0dce64f2"]]);const Ze=e=>(D("data-v-4a86f472"),e=e(),C(),e),Qe={class:"holder container"},ea=Ze((()=>s("div",{class:"title"},"投保人信息",-1))),aa={class:"insured-relation container"},la=Ze((()=>s("div",{class:"title"},"为谁投保",-1))),ta={class:"insured container"},oa=Ze((()=>s("div",{class:"title"},"被保人信息",-1))),sa={key:0,class:"container"},na={class:"payment container"},ra={class:"renewal-wrapper"},ia=Ze((()=>s("div",{class:"desc"},[s("p",null,"保单到期自动重新投保，享受保障不间断"),s("p",null,"自主重新投保开启后，中途可随时取消")],-1)));var da=e(a({__name:"index",props:{disable:{type:Boolean,default:!1},formAuth:{type:Object,default:()=>{}},formInfo:{type:Object,default:()=>{}},payments:{type:Array,default:()=>[0,1]},paymentMethod:{type:Array,default:()=>[0,1]},productDetail:{type:Object,default:()=>{}},isShowPackage:{type:Boolean,default:!1}},emits:["onReset","onUpdate","onVerify"],setup(e,{expose:a,emit:r}){const u=e,p=d({}),f=q({formInfo:u.formInfo}),b=d(!1),I=d(0),w=d(!1),V=d(0),k=d("获取验证码"),D=d(!1),C=e=>!!pe(e)||"请输入正确的姓名",N=i((()=>Z.filter(((e,a)=>u.payments.includes(a))))),x=i((()=>oe.filter(((e,a)=>u.paymentMethod.includes(a))))),U=i((()=>f.formInfo.insured.relationToHolder===Q.SELF)),M=i((()=>{var e,a;return null==(a=null==(e=u.productDetail)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"费率表"===e.attachmentName))})),B=i((()=>{var e,a;return(null==(a=null==(e=u.productDetail)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>!["健康告知","费率表"].includes(e.attachmentName))))||[]})),R=i((()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(f.formInfo.holder.mobile))),$=()=>(w.value=!0,w),K=async()=>{V.value>0||null==p||p.value.validate("mobile").then((async()=>{const e=await fe(f.formInfo.holder.mobile),{code:a,data:l}=e;"10000"===a&&(D.value=!0,j({message:"短信发送成功，请查收"}),(()=>{if(V.value>0)return;V.value=60;const e=()=>{k.value=`${V.value}s`,V.value-=1};e();const a=setInterval((()=>{0===V.value?(k.value="获取验证码",V.value=0,clearInterval(a)):e()}),1e3)})())}))},W=()=>{const{relationToHolder:e}=f.formInfo.insured;e===Q.SELF?(f.formInfo.insured={certNo:f.formInfo.holder.certNo,name:f.formInfo.holder.name,socialFlag:f.formInfo.holder.socialFlag,relationToHolder:e},r("onReset")):(f.formInfo.insured={certNo:"",name:"",socialFlag:te.HAS,relationToHolder:e},r("onUpdate"))},z=e=>new Promise(((a,l)=>{e&&de(e)&&f.formInfo.holder.mobile?ve(f.formInfo.holder.mobile,f.formInfo.holder.mobileSmsCode).then((e=>{const{data:l}=e;a(!!l)})):a(!1)}));return O((()=>f.formInfo.insured.socialFlag),(()=>{f.formInfo.insured.relationToHolder===Q.SELF&&(f.formInfo.holder.socialFlag=f.formInfo.insured.socialFlag)})),O([()=>f.formInfo.holder.certNo,()=>f.formInfo.insured.certNo],(()=>{var e,a;f.formInfo.holder.certNo=null==(e=f.formInfo.holder.certNo)?void 0:e.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,""),f.formInfo.insured.certNo=null==(a=f.formInfo.insured.certNo)?void 0:a.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),O((()=>f.formInfo.holder),(()=>{f.formInfo.insured.relationToHolder===Q.SELF&&Object.assign(f.formInfo.insured,f.formInfo.holder)}),{deep:!0,immediate:!0}),O((()=>f.formInfo.insured.certNo),(()=>{var e,a;let l=!1;P(f.formInfo.insured.certNo)&&(l=!0),null==(a=null==(e=f.formInfo)?void 0:e.packageProductList)||a.forEach((e=>{if(l){se(e,f.formInfo.insured.certNo)||(e.disabled=!0,e.value=ee.UN_INSURE)}else e.disabled=!1}))})),a({validateForm:()=>new Promise(((e,a)=>{null==p||p.value.validate().then((()=>{e("")}),(e=>{a(e)}))})),previewFile:e=>{I.value=e,b.value=!0},reEditForm:()=>{w.value=!1},isAgreeFile:w,onSubmit:$}),(a,r)=>{const i=L,d=T,w=F,D=X,q=A,O=E;return l(),v(O,{"theme-vars":o(Y)},{default:m((()=>[c(q,{ref_key:"formRef",ref:p},{default:m((()=>{var a,p,F,L,A,q,O,P,j,T;return[c(S),s("div",Qe,[ea,(null==(a=u.formAuth)?void 0:a.holderNameDisable)?(l(),v(i,{key:0,label:"姓名",class:"pro-field","is-view":!0},{input:m((()=>[h(n(o(ne)(o(f).formInfo.holder.name)),1)])),_:1})):(l(),v(i,{key:1,modelValue:o(f).formInfo.holder.name,"onUpdate:modelValue":r[0]||(r[0]=e=>o(f).formInfo.holder.name=e),label:"姓名",name:"name",required:"",placeholder:"请输入姓名",maxlength:"50",rules:[{validator:C}],"custom-class":"custom-class-name"},null,8,["modelValue","rules"])),(null==(p=u.formAuth)?void 0:p.holderCertDisable)?(l(),v(i,{key:2,label:"证件号码",class:"pro-field","is-view":!0},{input:m((()=>[h(n(o(re)(o(f).formInfo.holder.certNo)),1)])),_:1})):(l(),v(i,{key:3,modelValue:o(f).formInfo.holder.certNo,"onUpdate:modelValue":r[1]||(r[1]=e=>o(f).formInfo.holder.certNo=e),label:"证件号码",name:"certNo",required:"",placeholder:"请输入身份证号",maxlength:"18","validate-type":[o(H).ID_CARD],"custom-class":"custom-class-certNo"},null,8,["modelValue","validate-type"])),(null==(F=u.formAuth)?void 0:F.holderMobileDisable)?(l(),v(i,{key:4,label:"手机号",class:"pro-field","is-view":!0},{input:m((()=>[h(n(o(ie)(o(f).formInfo.holder.mobile)),1)])),_:1})):(l(),v(i,{key:5,modelValue:o(f).formInfo.holder.mobile,"onUpdate:modelValue":r[2]||(r[2]=e=>o(f).formInfo.holder.mobile=e),label:"手机号",name:"mobile",required:"",placeholder:"请输入手机号",type:"digit",maxlength:"11","validate-type":[o(H).PHONE],"custom-class":"custom-class-mobile"},null,8,["modelValue","validate-type"])),(null==(L=u.formAuth)?void 0:L.holderMobileDisable)?g("",!0):(l(),v(i,{key:6,modelValue:o(f).formInfo.holder.mobileSmsCode,"onUpdate:modelValue":r[3]||(r[3]=e=>o(f).formInfo.holder.mobileSmsCode=e),label:"验证码",name:"mobileSmsCode",type:"digit",required:"",rules:[{validator:z,message:"请输入正确的验证码"}],"input-align":"left",placeholder:"请输入验证码","error-message-align":"left",maxlength:"6","validate-type":[o(H).SMS_CODE],"custom-class":"custom-class-mobileSmsCode"},{extra:m((()=>[c(d,{class:y(["sms-code",{"count-down":o(V)>0}]),size:"small",type:"primary",disabled:!o(R),onClick:K},{default:m((()=>[h(n(o(k)),1)])),_:1},8,["class","disabled"])])),_:1},8,["modelValue","rules","validate-type"]))]),c(S),s("div",aa,[la,c(i,{modelValue:o(f).formInfo.insured.relationToHolder,"onUpdate:modelValue":r[5]||(r[5]=e=>o(f).formInfo.insured.relationToHolder=e),class:"relation-to-Holder",label:"",name:"relationToHolder",placeholder:"请选择",onClick:W},{input:m((()=>{var e;return[c(w,{modelValue:o(f).formInfo.insured.relationToHolder,"onUpdate:modelValue":r[4]||(r[4]=e=>o(f).formInfo.insured.relationToHolder=e),disabled:null==(e=u.formAuth)?void 0:e.relationToHolderDisable,options:o(ae)},null,8,["modelValue","disabled","options"])]})),_:1},8,["modelValue"])]),c(S),s("div",ta,[oa,(null==(A=u.formAuth)?void 0:A.insuredNameDisable)?(l(),v(i,{key:0,label:"姓名",class:"pro-field","is-view":!0},{input:m((()=>[h(n(o(ne)(o(f).formInfo.insured.name)),1)])),_:1})):g("",!0),(null==(q=u.formAuth)?void 0:q.insuredNameDisable)||o(U)?g("",!0):(l(),v(i,{key:1,modelValue:o(f).formInfo.insured.name,"onUpdate:modelValue":r[6]||(r[6]=e=>o(f).formInfo.insured.name=e),label:"姓名",name:"name",required:"",maxlength:"50",rules:[{validator:C}]},null,8,["modelValue","rules"])),(null==(O=u.formAuth)?void 0:O.insuredCertDisable)?(l(),v(i,{key:2,label:"证件号码",class:"pro-field","is-view":!0},{input:m((()=>[h(n(o(re)(o(f).formInfo.insured.certNo)),1)])),_:1})):g("",!0),(null==(P=u.formAuth)?void 0:P.insuredCertDisable)||o(U)?g("",!0):(l(),v(i,{key:3,modelValue:o(f).formInfo.insured.certNo,"onUpdate:modelValue":r[7]||(r[7]=e=>o(f).formInfo.insured.certNo=e),label:"证件号码",name:"certNo",required:"",placeholder:"请输入身份证号",maxlength:"20","validate-type":[o(H).ID_CARD]},null,8,["modelValue","validate-type"])),c(i,{modelValue:o(f).formInfo.insured.socialFlag,"onUpdate:modelValue":r[9]||(r[9]=e=>o(f).formInfo.insured.socialFlag=e),label:"有无社保",name:"name",required:"",placeholder:"请选择"},{input:m((()=>{var e;return[c(w,{modelValue:o(f).formInfo.insured.socialFlag,"onUpdate:modelValue":r[8]||(r[8]=e=>o(f).formInfo.insured.socialFlag=e),disabled:null==(e=u.formAuth)?void 0:e.insuredSocialDisable,options:o(le)},null,8,["modelValue","disabled","options"])]})),_:1},8,["modelValue"])]),c(S),e.isShowPackage?(l(),t("div",sa,[c(Ge,{"package-product-list":null==(j=e.formInfo)?void 0:j.packageProductList},null,8,["package-product-list"])])):g("",!0),c(S),s("div",na,[(null==(T=u.formAuth)?void 0:T.paymentFrequencyDisable)?g("",!0):(l(),v(i,{key:0,modelValue:o(f).formInfo.paymentFrequency,"onUpdate:modelValue":r[11]||(r[11]=e=>o(f).formInfo.paymentFrequency=e),label:"交费方式",name:"paymentFrequency",required:"",placeholder:"请选择","error-message":"请选择交费方式"},{input:m((()=>{var e;return[c(w,{modelValue:o(f).formInfo.paymentFrequency,"onUpdate:modelValue":r[10]||(r[10]=e=>o(f).formInfo.paymentFrequency=e),disabled:null==(e=u.formAuth)?void 0:e.paymentFrequencyDisable,options:o(N)},null,8,["modelValue","disabled","options"])]})),_:1},8,["modelValue"])),c(S),c(i,{modelValue:o(f).formInfo.paymentMethod,"onUpdate:modelValue":r[13]||(r[13]=e=>o(f).formInfo.paymentMethod=e),label:"支付方式",name:"paymentMethod",required:"",placeholder:"请选择","custom-class":"custom-class-paymentMethod","error-message":"请选择支付方式"},{input:m((()=>{var e;return[c(w,{modelValue:o(f).formInfo.paymentMethod,"onUpdate:modelValue":r[12]||(r[12]=e=>o(f).formInfo.paymentMethod=e),disabled:null==(e=u.formAuth)?void 0:e.paymentDisable,options:o(x)},null,8,["modelValue","disabled","options"])]})),_:1},8,["modelValue"]),c(S),s("div",ra,[c(i,{label:"开通自主重新投保",class:"pro-field",name:"renewalDK",placeholder:"请选择",border:!1},{input:m((()=>{var e;return[c(D,{modelValue:o(f).formInfo.renewalDK,"onUpdate:modelValue":r[14]||(r[14]=e=>o(f).formInfo.renewalDK=e),disabled:null==(e=u.formAuth)?void 0:e.renewalDKDisable},null,8,["modelValue","disabled"])]})),_:1}),ia])]),c(S),c(he,{show:o(b),"onUpdate:show":r[15]||(r[15]=e=>_(b)?b.value=e:null),"content-list":o(B).concat(o(M)),"active-index":o(I),text:"我已逐页阅读并确认告知内容",onSubmit:$},null,8,["show","content-list","active-index"])]})),_:1},512)])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-4a86f472"]]);const ua={key:0,class:"page-waiting"},ca=["src"],ma=(e=>(D("data-v-812ee74a"),e=e(),C(),e))((()=>s("div",{class:"tips"},[s("p",null,"支付成功，承保中...")],-1)));var pa=e(a({__name:"index",props:{isShow:{type:Boolean,default:()=>{}}},setup(e){const a=e;return O((()=>a.isShow),(e=>{document.body.style.overflow=e?"hidden":"inherit"})),(e,n)=>a.isShow?(l(),t("div",ua,[s("img",{class:"loading",src:o("/static/assets/loading.df8f340b.gif")},null,8,ca),ma])):g("",!0)}}),[["__scopeId","data-v-812ee74a"]]);const fa=e=>(D("data-v-171c7312"),e=e(),C(),e),va={key:0,class:"pro-modal"},ha=fa((()=>s("div",{class:"pro-overlay"},null,-1))),ba={class:"pro-modal-wrapper"},ya=["src"],ga={class:"pro-modal-body"},Ia={class:"pro-modal-content"},_a=fa((()=>s("p",{class:"tips"},"升级后的保障将于第二期保费扣费/缴费成功后生效",-1))),wa={class:"pro-modal-content"},Va={class:"product-attachment-list"},ka={key:0,class:"dun-hao"},Da={class:"pro-modal-close"},Ca=["src"];var Na=e(a({__name:"index",props:{orderNo:{type:String,default:""},tenantId:{type:String,default:""},isShow:{type:Boolean,default:()=>{}},upgradeCode:{type:String,default:""}},emits:["on-confirm","on-close"],setup(e,{emit:a}){const r=e,i=d(),u=d(),c=d(),b=d(),y=d([]),I=d(r.upgradeCode),_=()=>{a("on-close")},w=()=>{a("on-confirm")},V=()=>{const e=_e({productCode:I.value,withInsureInfo:!0,tenantId:r.tenantId}),a=ye({productCode:I.value}),l=ge({orderNo:r.orderNo,tenantId:r.tenantId});Promise.all([e,a,l]).then((([e,a,l])=>{"10000"===e.code&&(i.value=e.data,y.value=e.data.tenantProductInsureVO.attachmentVOList),"10000"===a.code&&(u.value=a.data),"10000"===l.code&&(c.value=l.data),(async()=>{try{const e=ce({tenantId:r.tenantId,premium:b.value,orderDetail:c.value,productDetail:i.value,insureDetail:u.value,successJumpUrl:"",iseeBizNo:""},me),a=await Ie(e),{code:l,data:t}=a;"10000"===l&&(b.value=t.installmentPremium)}catch(e){}})()}))};return O((()=>r.isShow),(e=>{I.value=r.upgradeCode,e?(document.body.style.overflow="hidden",V()):document.body.style.overflow="inherit"})),(e,a)=>{const i=U;return r.isShow?(l(),t("div",va,[ha,s("div",ba,[s("img",{class:"cover",src:o("/static/assets/upgrade_bg.b65c44d4.png")},null,8,ya),s("div",ga,[s("div",Ia,[s("p",null,"每月保费仅需"+n(o(ue)(o(b)||0))+"元，无需重复投保",1),_a]),s("div",{class:"pro-modal-btn",onClick:w},"一键升级"),s("div",wa,[s("div",Va,[h(" 请您重点阅读并知晓 "),(l(!0),t(p,null,f(o(y),((e,a)=>(l(),v(i,{key:a,class:"file-name",title:`《${e.attachmentName}》`,content:e.attachmentUri,type:"pdf"},{default:m((()=>[a!==(o(y)||[]).length-1?(l(),t("span",ka,"、")):g("",!0)])),_:2},1032,["title","content"])))),128))])])]),s("div",Da,[s("img",{src:o(be),onClick:_},null,8,Ca)])])])):g("",!0)}}}),[["__scopeId","data-v-171c7312"]]);const Sa={class:"header"},xa=["src"],Ua={class:"content"},Fa=(e=>(D("data-v-043963d8"),e=e(),C(),e))((()=>s("h4",null,"温馨提示，您已进入投保流程：",-1))),La=["onClick"],Aa={class:"footer"},qa={key:0};var Oa=e(a({__name:"index",props:{productDetail:{type:Object,default:()=>{}}},setup(e){const a=e,r=new M({source:"sessionStorage"}),u=d(!1),v=d(!1),b=B({time:4e3,onFinish:()=>{r.set("PRENOTICE-isShow","1"),u.value=!1}}),y=d(),I=i((()=>{var e,l;return null==(l=null==(e=a.productDetail)?void 0:e.tenantProductInsureVO)?void 0:l.attachmentVOList.filter((e=>"个人信息保护政策"===e.attachmentName))})),w=i((()=>b.current.value.seconds));return R((()=>{u.value=!0,b.start()})),(e,a)=>{const r=T,i=k,d=$;return l(),t(p,null,[c(i,{class:"pre-notice-wrap",show:o(u),closeable:!1,height:45},{default:m((()=>[s("div",Sa,[s("img",{src:o("/static/assets/header-logo.fadf5dcd.png")},null,8,xa)]),s("div",Ua,[Fa,s("p",null,[h(" 请仔细阅读免责条款、投保须知等信息，请您重点阅读并知晓 "),(l(!0),t(p,null,f(o(I),((e,a)=>(l(),t("span",{key:a,class:"file-name",onClick:a=>{return l=e.attachmentUri,v.value=!v.value,void(y.value=l);var l}}," 《"+n(e.attachmentName)+"》 ",9,La)))),128)),h(" ，为维护您的合法权益，您的操作轨迹将被记录。 ")])]),s("div",Aa,[c(r,{type:"primary",block:"",round:""},{default:m((()=>[h(" 好的 "),o(w)?(l(),t("span",qa,n(o(w))+"s",1)):g("",!0)])),_:1})])])),_:1},8,["show"]),c(i,{show:o(v),"onUpdate:show":a[0]||(a[0]=e=>_(v)?v.value=e:null),class:"pre-notice-wrap","close-icon":"close",position:"bottom",style:{height:"600px",paddingTop:"40px"}},{default:m((()=>[c(d,{content:o(y),type:"pdf"},null,8,["content"])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-043963d8"]]);const Pa={class:"list"},Ha={class:"item"},ja={class:"footer"},Ta=a({__name:"index",props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealth"],setup(e,{emit:a}){const t=e,n=d(t.show),r=d(t.activeIndex),u=i((()=>{var e;return null==(e=t.contentList[r.value])?void 0:e.attachmentUri})),p=d(!0),f=e=>{p.value=!1,a("update:show",!1),a("onConfirmHealth",e)};return O((()=>t),(()=>{n.value=t.show,r.value=t.activeIndex}),{deep:!0,immediate:!0}),(t,i)=>{const d=K,b=$,y=T,I=E,w=k;return l(),v(w,{show:o(n),"onUpdate:show":i[3]||(i[3]=e=>_(n)?n.value=e:null),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:i[4]||(i[4]=e=>{p.value&&a("onCloseHealth")})},{default:m((()=>[c(I,{"theme-vars":o(Y),class:"custom-provider"},{default:m((()=>[o(n)?(l(),v(d,{key:0,active:o(r),"onUpdate:active":i[0]||(i[0]=e=>_(r)?r.value=e:null),list:e.contentList.map(((e,a)=>({title:e.attachmentName,slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):g("",!0),s("div",Pa,[s("div",Ha,[(l(),v(b,{key:o(u),content:o(u),type:"pdf"},null,8,["content"]))])]),s("div",ja,[c(y,{type:"primary",block:"",round:"",onClick:i[1]||(i[1]=e=>f("N"))},{default:m((()=>[h("部分为是")])),_:1}),c(y,{type:"primary",plain:"",block:"",round:"",onClick:i[2]||(i[2]=e=>f("allFalse"))},{default:m((()=>[h("全部为否")])),_:1})])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}}),Ea={holderNameDisable:!0,holderCertDisable:!0,holderMobileDisable:!0,holderSocialDisable:!0,relationToHolderDisable:!0,insuredNameDisable:!0,insuredCertDisable:!0,insuredSocialDisable:!0,paymentDisable:!0,renewalDKDisable:!0,paymentFrequencyDisable:!0},Ma={...Ea,holderNameDisable:!1,holderCertDisable:!1,holderMobileDisable:!1,holderSocialDisable:!1,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1},Ba={...Ea};export{ke as B,Se as D,Pe as G,da as H,Oa as P,Je as S,Na as U,pa as W,Ta as _,Ma as a,Ea as d,Ba as p};
