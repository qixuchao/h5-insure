import{E as e,d as a,c as l,y as t,g as o,f as n,z as s,a6 as r,K as i,r as d,a8 as u,i as c,w as m,R as p,U as f,e as v,j as h,a9 as y,A as b,h as g,ab as I,a1 as _,V as w,bf as V,af as k,ag as D,ah as C,k as N,aa as S,ca as x,cb as U,ay as F,az as L,cc as A,x as q,Q as O,c9 as P,cd as j,T as H,B as T,ax as E,al as M,am as B,a0 as R,_ as $,ae as K}from"./index-3d1ea118.js";import z from"./index-4b39fed9.js";import{C as W}from"./index-7678762b.js";import{C as X}from"./index-47649aec.js";/* empty css              */import{t as Y}from"./theme-ea709837.js";import{c as Z,d as G,R as J,I as Q,e as ee,f as ae,S as le}from"./infoCollection-74fdccb4.js";import{A as te}from"./bankCard-2e687559.js";import{c as oe,n as ne,i as se,m as re,d as ie,e as de,f as ue,h as ce}from"./utils-e0a7c29d.js";import{v as me}from"./validator-5a13dc82.js";import{s as pe,c as fe}from"./phoneVerify-8f53679e.js";import{_ as ve,c as he}from"./close-974751df.js";import{S as ye}from"./index-e2b6668f.js";import{i as be,c as ge,f as Ie}from"./trial-449a094c.js";import{p as _e}from"./product-593f6959.js";const we=["src"],Ve=["src"];var ke=e(a({__name:"index",props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""}},setup(e){const a=e;return(e,n)=>a.isCheck?(l(),t("img",{key:0,src:o("/static/png/check-detail-24065a01.png"),class:"banner"},null,8,we)):(l(),t("img",{key:1,src:a.url,class:"banner"},null,8,Ve))}}),[["__scopeId","data-v-584aabfc"]]);const De={class:"product-desc"},Ce={class:"title"},Ne={class:"desc"};var Se=e(a({__name:"index",props:{productName:{type:String,default:""},productDesc:{type:String,default:""}},setup:e=>(a,o)=>(l(),t("div",De,[n("div",Ce,s(e.productName),1),n("div",Ne,s(e.productDesc),1)]))}),[["__scopeId","data-v-2e75305e"]]);const xe={class:"guarantee-list"},Ue={class:"basic"},Fe=["src"],Le={class:"guarantee-detail"},Ae={class:"title"},qe={class:"content"};var Oe=e(a({__name:"index",props:{guaranteeList:{type:Array,default:()=>[]},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:10},imgType:{type:String,default:"ZYE"}},setup(e){const a=e,[D,C]=r(!1),N=i((()=>a.guaranteeList.length>a.count&&(!!a.isShowClose||!D.value))),S=i((()=>{const e={BW:"/static/png/serviceConfigBW-2f5aa9e8.png",ZYE:"/static/png/serviceConfig-ffc50dbe.png"};return(null==e?void 0:e[a.imgType])||"/static/png/serviceConfig-ffc50dbe.png"})),x=()=>{C()},U=i((()=>a.guaranteeList.length<=a.count||D.value?a.guaranteeList:a.guaranteeList.slice(0,a.count))),F=i((()=>a.guaranteeList.filter((e=>!(null==e?void 0:e.noDetail))))),L=d(!1),A=()=>{L.value=!0};return(e,a)=>{const r=w,i=V,d=k,C=u("dompurify-html");return l(),t(p,null,[n("div",xe,[c(i,{title:"保障内容",link:"查看详情","show-divider":!0,"show-icon":!0,onLinkClick:A},{default:m((()=>[n("div",Ue,[(l(!0),t(p,null,f(o(U),((e,a)=>(l(),v(r,{key:a,class:"guarantee-item",title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128))]),o(N)?(l(),t("div",{key:0,class:"show-more",onClick:x},[h(s(o(D)?"收起":"查看更多")+" ",1),c(y,{name:"down",class:b(["icon",{showMore:o(D)}])},null,8,["class"])])):g("",!0),n("div",{class:"service-config",onClick:a[0]||(a[0]=(...a)=>e.onClose&&e.onClose(...a))},[n("img",{src:o(S)},null,8,Fe)])])),_:1})]),c(d,{show:o(L),"onUpdate:show":a[1]||(a[1]=e=>_(L)?L.value=e:null),title:"保障详情",class:"guarantee-popup"},{default:m((()=>[n("div",Le,[(l(!0),t(p,null,f(o(F),((e,a)=>(l(),t("div",{key:a,class:"guarantee-item"},[n("div",Ae,s(e.title),1),I(n("div",qe,null,512),[[C,e.content]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-afeafb6a"]]);const Pe={class:"question"},je=(e=>(D("data-v-1d81ec06"),e=e(),C(),e))((()=>n("div",{class:"icon"},s("?"),-1))),He={class:"title"};var Te=e(a({__name:"item",props:{name:{type:String,default:""},question:{type:String,default:""},answer:{type:String,default:""}},setup:e=>(a,t)=>{const o=W;return l(),v(o,{name:e.name,class:"com-question-item"},{title:m((()=>[n("div",Pe,[je,n("div",He,s(e.question),1)])])),default:m((()=>[h(" "+s(e.answer),1)])),_:1},8,["name"])}}),[["__scopeId","data-v-1d81ec06"]]);const Ee={class:"com-question"};var Me=e(a({__name:"index",props:{list:{type:Array,default:()=>[]}},setup(e){const a=e,[n,u]=r(!1),I=d([]),w=()=>{u()},V=i((()=>a.list.length<=4||n.value?a.list:a.list.slice(0,4)));return(a,r)=>{const i=X;return l(),t("div",Ee,[c(i,{modelValue:o(I),"onUpdate:modelValue":r[0]||(r[0]=e=>_(I)?I.value=e:null)},{default:m((()=>[(l(!0),t(p,null,f(o(V),((e,a)=>(l(),v(Te,{key:a,name:a.toString(),question:e.title,answer:e.desc},null,8,["name","question","answer"])))),128))])),_:1},8,["modelValue"]),e.list.length>4?(l(),t("div",{key:0,class:"show-more",onClick:w},[h(s(o(n)?"收起":"展开")+" ",1),c(y,{name:"down",class:b(["icon",{showMore:o(n)}])},null,8,["class"])])):g("",!0)])}}}),[["__scopeId","data-v-5359d801"]]);const Be={class:"spec"},Re=["src"],$e=(e=>(D("data-v-df0725a6"),e=e(),C(),e))((()=>n("div",{class:"sub-title"},"产品资料文件详情可手动放大，以便您更清晰查阅内容。",-1))),Ke={class:"tab-1-content"},ze={key:0,class:"dun-hao"};var We=e(a({__name:"index",props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""},detail:{type:Object,default:()=>{}}},setup(e){const a=e,s=d([{title:"我要投保",slotName:"tab1"},{title:"产品特色",slotName:"tab2"},{title:"理赔流程",slotName:"tab3"},{title:"常见问题",slotName:"tab4"}]),r=e=>{const a=e.split("?")[0],l=a.lastIndexOf(".");return a.substring(l+1)},i=e=>{if(!e)return"";let a=e;return-1===a.indexOf("《")&&(a=`《${a}`),-1===a.indexOf("》")&&(a=`${a}》`),a};return(d,u)=>{const y=U;return l(),v(x,{class:"tabs",list:o(s),sticky:"",scrollspy:""},{tab1:m((()=>[N(d.$slots,"form",{},void 0,!0)])),tab2:m((()=>{var o,s;return[n("div",Be,[(l(!0),t(p,null,f((null==(s=null==(o=a.detail)?void 0:o.tenantProductInsureVO)?void 0:s.spec)||[],((e,a)=>(l(),t("img",{key:a,src:e,class:"detail-img"},null,8,Re)))),128)),c(S)]),c(V,{title:"产品资料"},{subTitle:m((()=>[$e])),default:m((()=>{var a,o;return[n("div",Ke,[h(" 请查看 "),(l(!0),t(p,null,f((null==(o=null==(a=e.detail)?void 0:a.tenantProductInsureVO)?void 0:o.attachmentVOList)||[],((a,o)=>(l(),v(y,{key:o,type:r(a.attachmentUri),class:"file-name",title:i(a.attachmentName),content:a.attachmentUri},{default:m((()=>{var a,n;return[h(" > "),o!==((null==(n=null==(a=e.detail)?void 0:a.tenantProductInsureVO)?void 0:n.attachmentVOList)||[]).length-1?(l(),t("span",ze,"、")):g("",!0)]})),_:2},1032,["type","title","content"])))),128))])]})),_:1})]})),tab3:m((()=>[c(V,{title:"理赔流程"},{default:m((()=>{var e,l;return[c(z,{list:null==(l=null==(e=a.detail)?void 0:e.tenantProductInsureVO)?void 0:l.settlementProcessList},null,8,["list"])]})),_:1})])),tab4:m((()=>[c(V,{title:"常见问题"},{default:m((()=>{var e,l;return[c(Me,{list:null==(l=null==(e=a.detail)?void 0:e.tenantProductInsureVO)?void 0:l.questionList},null,8,["list"])]})),_:1})])),_:3},8,["list"])}}}),[["__scopeId","data-v-df0725a6"]]);const Xe={class:"refueling-package-com"},Ye=(e=>(D("data-v-0dce64f2"),e=e(),C(),e))((()=>n("div",{class:"title"},"加油包",-1)));var Ze=e(a({__name:"index",props:{packageProductList:{type:Array,default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:3}},setup(e){const a=e,[n,d]=r(!1),u=i((()=>a.packageProductList.length>a.count&&(!!a.isShowClose||!n.value))),I=()=>{d()},_=i((()=>a.packageProductList.length<=a.count||n.value?a.packageProductList:a.packageProductList.slice(0,a.count)));return(e,a)=>{const r=F,i=L,d=A;return l(),t("div",Xe,[Ye,c(d,{ref:"formRef"},{default:m((()=>[(l(!0),t(p,null,f(o(_),((e,a)=>(l(),v(i,{key:`${e.value}_${a}`,modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,label:e.packageName,required:"",placeholder:"请选择"},{input:m((()=>[c(r,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,options:o(Z),disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","options","disabled"])])),_:2},1032,["modelValue","onUpdate:modelValue","label"])))),128)),o(u)?(l(),t("div",{key:0,class:"show-more",onClick:I},[h(s(o(n)?"收起":"查看更多")+" ",1),c(y,{name:"down",class:b(["icon",{showMore:o(n)}])},null,8,["class"])])):g("",!0)])),_:1},512)])}}}),[["__scopeId","data-v-0dce64f2"]]);const Ge=e=>(D("data-v-4a86f472"),e=e(),C(),e),Je={class:"holder container"},Qe=Ge((()=>n("div",{class:"title"},"投保人信息",-1))),ea={class:"insured-relation container"},aa=Ge((()=>n("div",{class:"title"},"为谁投保",-1))),la={class:"insured container"},ta=Ge((()=>n("div",{class:"title"},"被保人信息",-1))),oa={key:0,class:"container"},na={class:"payment container"},sa={class:"renewal-wrapper"},ra=Ge((()=>n("div",{class:"desc"},[n("p",null,"保单到期自动重新投保，享受保障不间断"),n("p",null,"自主重新投保开启后，中途可随时取消")],-1)));var ia=e(a({__name:"index",props:{disable:{type:Boolean,default:!1},formAuth:{type:Object,default:()=>{}},formInfo:{type:Object,default:()=>{}},payments:{type:Array,default:()=>[0,1]},paymentMethod:{type:Array,default:()=>[0,1]},productDetail:{type:Object,default:()=>{}},isShowPackage:{type:Boolean,default:!1}},emits:["onReset","onUpdate","onVerify"],setup(e,{expose:a,emit:r}){const u=e,p=d({}),f=q({formInfo:u.formInfo}),y=d(!1),I=d(0),w=d(!1),V=d(0),k=d("获取验证码"),D=d(!1),C=e=>!!me(e)||"请输入正确的姓名",N=i((()=>G.filter(((e,a)=>u.payments.includes(a))))),x=i((()=>te.filter(((e,a)=>u.paymentMethod.includes(a))))),U=i((()=>f.formInfo.insured.relationToHolder===J.SELF)),M=i((()=>{var e,a;return null==(a=null==(e=u.productDetail)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"费率表"===e.attachmentName))})),B=i((()=>{var e,a;return(null==(a=null==(e=u.productDetail)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>!["健康告知","费率表"].includes(e.attachmentName))))||[]})),R=i((()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(f.formInfo.holder.mobile))),$=()=>(w.value=!0,w),K=async()=>{V.value>0||null==p||p.value.validate("mobile").then((async()=>{const e=await pe(f.formInfo.holder.mobile),{code:a,data:l}=e;"10000"===a&&(D.value=!0,H({message:"短信发送成功，请查收"}),(()=>{if(V.value>0)return;V.value=60;const e=()=>{k.value=`${V.value}s`,V.value-=1};e();const a=setInterval((()=>{0===V.value?(k.value="获取验证码",V.value=0,clearInterval(a)):e()}),1e3)})())}))},z=()=>{const{relationToHolder:e}=f.formInfo.insured;e===J.SELF?(f.formInfo.insured={certNo:f.formInfo.holder.certNo,name:f.formInfo.holder.name,socialFlag:f.formInfo.holder.socialFlag,relationToHolder:e},r("onReset")):(f.formInfo.insured={certNo:"",name:"",socialFlag:le.HAS,relationToHolder:e},r("onUpdate"))},W=e=>new Promise(((a,l)=>{e&&ie(e)&&f.formInfo.holder.mobile?fe(f.formInfo.holder.mobile,f.formInfo.holder.mobileSmsCode).then((e=>{const{data:l}=e;a(!!l)})):a(!1)}));return O((()=>f.formInfo.insured.socialFlag),(()=>{f.formInfo.insured.relationToHolder===J.SELF&&(f.formInfo.holder.socialFlag=f.formInfo.insured.socialFlag)})),O([()=>f.formInfo.holder.certNo,()=>f.formInfo.insured.certNo],(()=>{var e,a;f.formInfo.holder.certNo=null==(e=f.formInfo.holder.certNo)?void 0:e.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,""),f.formInfo.insured.certNo=null==(a=f.formInfo.insured.certNo)?void 0:a.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),O((()=>f.formInfo.holder),(()=>{f.formInfo.insured.relationToHolder===J.SELF&&Object.assign(f.formInfo.insured,f.formInfo.holder)}),{deep:!0,immediate:!0}),O((()=>f.formInfo.insured.certNo),(()=>{var e,a;let l=!1;P(f.formInfo.insured.certNo)&&(l=!0),null==(a=null==(e=f.formInfo)?void 0:e.packageProductList)||a.forEach((e=>{if(l){oe(e,f.formInfo.insured.certNo)||(e.disabled=!0,e.value=Q.UN_INSURE)}else e.disabled=!1}))})),a({validateForm:()=>new Promise(((e,a)=>{null==p||p.value.validate().then((()=>{e("")}),(e=>{a(e)}))})),previewFile:e=>{I.value=e,y.value=!0},reEditForm:()=>{w.value=!1},isAgreeFile:w,onSubmit:$}),(a,r)=>{const i=L,d=T,w=F,D=ye,q=A,O=E;return l(),v(O,{"theme-vars":o(Y)},{default:m((()=>[c(q,{ref_key:"formRef",ref:p},{default:m((()=>{var a,p,F,L,A,q,O,P,H,T;return[c(S),n("div",Je,[Qe,(null==(a=u.formAuth)?void 0:a.holderNameDisable)?(l(),v(i,{key:0,label:"姓名",class:"pro-field","is-view":!0},{input:m((()=>[h(s(o(ne)(o(f).formInfo.holder.name)),1)])),_:1})):(l(),v(i,{key:1,modelValue:o(f).formInfo.holder.name,"onUpdate:modelValue":r[0]||(r[0]=e=>o(f).formInfo.holder.name=e),label:"姓名",name:"name",required:"",placeholder:"请输入姓名",maxlength:"50",rules:[{validator:C}],"custom-class":"custom-class-name"},null,8,["modelValue","rules"])),(null==(p=u.formAuth)?void 0:p.holderCertDisable)?(l(),v(i,{key:2,label:"证件号码",class:"pro-field","is-view":!0},{input:m((()=>[h(s(o(se)(o(f).formInfo.holder.certNo)),1)])),_:1})):(l(),v(i,{key:3,modelValue:o(f).formInfo.holder.certNo,"onUpdate:modelValue":r[1]||(r[1]=e=>o(f).formInfo.holder.certNo=e),label:"证件号码",name:"certNo",required:"",placeholder:"请输入身份证号",maxlength:"18","validate-type":[o(j).ID_CARD],"custom-class":"custom-class-certNo"},null,8,["modelValue","validate-type"])),(null==(F=u.formAuth)?void 0:F.holderMobileDisable)?(l(),v(i,{key:4,label:"手机号",class:"pro-field","is-view":!0},{input:m((()=>[h(s(o(re)(o(f).formInfo.holder.mobile)),1)])),_:1})):(l(),v(i,{key:5,modelValue:o(f).formInfo.holder.mobile,"onUpdate:modelValue":r[2]||(r[2]=e=>o(f).formInfo.holder.mobile=e),label:"手机号",name:"mobile",required:"",placeholder:"请输入手机号",type:"digit",maxlength:"11","validate-type":[o(j).PHONE],"custom-class":"custom-class-mobile"},null,8,["modelValue","validate-type"])),(null==(L=u.formAuth)?void 0:L.holderMobileDisable)?g("",!0):(l(),v(i,{key:6,modelValue:o(f).formInfo.holder.mobileSmsCode,"onUpdate:modelValue":r[3]||(r[3]=e=>o(f).formInfo.holder.mobileSmsCode=e),label:"验证码",name:"mobileSmsCode",type:"digit",required:"",rules:[{validator:W,message:"请输入正确的验证码"}],"input-align":"left",placeholder:"请输入验证码","error-message-align":"left",maxlength:"6","validate-type":[o(j).SMS_CODE],"custom-class":"custom-class-mobileSmsCode"},{extra:m((()=>[c(d,{class:b(["sms-code",{"count-down":o(V)>0}]),size:"small",type:"primary",disabled:!o(R),onClick:K},{default:m((()=>[h(s(o(k)),1)])),_:1},8,["class","disabled"])])),_:1},8,["modelValue","rules","validate-type"]))]),c(S),n("div",ea,[aa,c(i,{modelValue:o(f).formInfo.insured.relationToHolder,"onUpdate:modelValue":r[5]||(r[5]=e=>o(f).formInfo.insured.relationToHolder=e),class:"relation-to-Holder",label:"",name:"relationToHolder",placeholder:"请选择",onClick:z},{input:m((()=>{var e;return[c(w,{modelValue:o(f).formInfo.insured.relationToHolder,"onUpdate:modelValue":r[4]||(r[4]=e=>o(f).formInfo.insured.relationToHolder=e),disabled:null==(e=u.formAuth)?void 0:e.relationToHolderDisable,options:o(ee)},null,8,["modelValue","disabled","options"])]})),_:1},8,["modelValue"])]),c(S),n("div",la,[ta,(null==(A=u.formAuth)?void 0:A.insuredNameDisable)?(l(),v(i,{key:0,label:"姓名",class:"pro-field","is-view":!0},{input:m((()=>[h(s(o(ne)(o(f).formInfo.insured.name)),1)])),_:1})):g("",!0),(null==(q=u.formAuth)?void 0:q.insuredNameDisable)||o(U)?g("",!0):(l(),v(i,{key:1,modelValue:o(f).formInfo.insured.name,"onUpdate:modelValue":r[6]||(r[6]=e=>o(f).formInfo.insured.name=e),label:"姓名",name:"name",required:"",maxlength:"50",rules:[{validator:C}]},null,8,["modelValue","rules"])),(null==(O=u.formAuth)?void 0:O.insuredCertDisable)?(l(),v(i,{key:2,label:"证件号码",class:"pro-field","is-view":!0},{input:m((()=>[h(s(o(se)(o(f).formInfo.insured.certNo)),1)])),_:1})):g("",!0),(null==(P=u.formAuth)?void 0:P.insuredCertDisable)||o(U)?g("",!0):(l(),v(i,{key:3,modelValue:o(f).formInfo.insured.certNo,"onUpdate:modelValue":r[7]||(r[7]=e=>o(f).formInfo.insured.certNo=e),label:"证件号码",name:"certNo",required:"",placeholder:"请输入身份证号",maxlength:"20","validate-type":[o(j).ID_CARD]},null,8,["modelValue","validate-type"])),c(i,{modelValue:o(f).formInfo.insured.socialFlag,"onUpdate:modelValue":r[9]||(r[9]=e=>o(f).formInfo.insured.socialFlag=e),label:"有无社保",name:"name",required:"",placeholder:"请选择"},{input:m((()=>{var e;return[c(w,{modelValue:o(f).formInfo.insured.socialFlag,"onUpdate:modelValue":r[8]||(r[8]=e=>o(f).formInfo.insured.socialFlag=e),disabled:null==(e=u.formAuth)?void 0:e.insuredSocialDisable,options:o(ae)},null,8,["modelValue","disabled","options"])]})),_:1},8,["modelValue"])]),c(S),e.isShowPackage?(l(),t("div",oa,[c(Ze,{"package-product-list":null==(H=e.formInfo)?void 0:H.packageProductList},null,8,["package-product-list"])])):g("",!0),c(S),n("div",na,[(null==(T=u.formAuth)?void 0:T.paymentFrequencyDisable)?g("",!0):(l(),v(i,{key:0,modelValue:o(f).formInfo.paymentFrequency,"onUpdate:modelValue":r[11]||(r[11]=e=>o(f).formInfo.paymentFrequency=e),label:"交费方式",name:"paymentFrequency",required:"",placeholder:"请选择","error-message":"请选择交费方式"},{input:m((()=>{var e;return[c(w,{modelValue:o(f).formInfo.paymentFrequency,"onUpdate:modelValue":r[10]||(r[10]=e=>o(f).formInfo.paymentFrequency=e),disabled:null==(e=u.formAuth)?void 0:e.paymentFrequencyDisable,options:o(N)},null,8,["modelValue","disabled","options"])]})),_:1},8,["modelValue"])),c(S),c(i,{modelValue:o(f).formInfo.paymentMethod,"onUpdate:modelValue":r[13]||(r[13]=e=>o(f).formInfo.paymentMethod=e),label:"支付方式",name:"paymentMethod",required:"",placeholder:"请选择","custom-class":"custom-class-paymentMethod","error-message":"请选择支付方式"},{input:m((()=>{var e;return[c(w,{modelValue:o(f).formInfo.paymentMethod,"onUpdate:modelValue":r[12]||(r[12]=e=>o(f).formInfo.paymentMethod=e),disabled:null==(e=u.formAuth)?void 0:e.paymentDisable,options:o(x)},null,8,["modelValue","disabled","options"])]})),_:1},8,["modelValue"]),c(S),n("div",sa,[c(i,{label:"开通自主重新投保",class:"pro-field",name:"renewalDK",placeholder:"请选择",border:!1},{input:m((()=>{var e;return[c(D,{modelValue:o(f).formInfo.renewalDK,"onUpdate:modelValue":r[14]||(r[14]=e=>o(f).formInfo.renewalDK=e),disabled:null==(e=u.formAuth)?void 0:e.renewalDKDisable},null,8,["modelValue","disabled"])]})),_:1}),ra])]),c(S),c(ve,{show:o(y),"onUpdate:show":r[15]||(r[15]=e=>_(y)?y.value=e:null),"content-list":o(B).concat(o(M)),"active-index":o(I),text:"我已逐页阅读并确认告知内容",onSubmit:$},null,8,["show","content-list","active-index"])]})),_:1},512)])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-4a86f472"]]);const da={key:0,class:"page-waiting"},ua=["src"],ca=(e=>(D("data-v-812ee74a"),e=e(),C(),e))((()=>n("div",{class:"tips"},[n("p",null,"支付成功，承保中...")],-1)));var ma=e(a({__name:"index",props:{isShow:{type:Boolean,default:()=>{}}},setup(e){const a=e;return O((()=>a.isShow),(e=>{document.body.style.overflow=e?"hidden":"inherit"})),(e,s)=>a.isShow?(l(),t("div",da,[n("img",{class:"loading",src:o("/static/gif/loading-df8f340b.gif")},null,8,ua),ca])):g("",!0)}}),[["__scopeId","data-v-812ee74a"]]);const pa=e=>(D("data-v-171c7312"),e=e(),C(),e),fa={key:0,class:"pro-modal"},va=pa((()=>n("div",{class:"pro-overlay"},null,-1))),ha={class:"pro-modal-wrapper"},ya=["src"],ba={class:"pro-modal-body"},ga={class:"pro-modal-content"},Ia=pa((()=>n("p",{class:"tips"},"升级后的保障将于第二期保费扣费/缴费成功后生效",-1))),_a={class:"pro-modal-content"},wa={class:"product-attachment-list"},Va={key:0,class:"dun-hao"},ka={class:"pro-modal-close"},Da=["src"];var Ca=e(a({__name:"index",props:{orderNo:{type:String,default:""},tenantId:{type:String,default:""},isShow:{type:Boolean,default:()=>{}},upgradeCode:{type:String,default:""}},emits:["on-confirm","on-close"],setup(e,{emit:a}){const r=e,i=d(),u=d(),c=d(),y=d(),b=d([]),I=d(r.upgradeCode),_=()=>{a("on-close")},w=()=>{a("on-confirm")},V=()=>{const e=_e({productCode:I.value,withInsureInfo:!0,tenantId:r.tenantId}),a=be({productCode:I.value}),l=ge({orderNo:r.orderNo,tenantId:r.tenantId});Promise.all([e,a,l]).then((([e,a,l])=>{"10000"===e.code&&(i.value=e.data,b.value=e.data.tenantProductInsureVO.attachmentVOList),"10000"===a.code&&(u.value=a.data),"10000"===l.code&&(c.value=l.data),(async()=>{try{const e=ue({tenantId:r.tenantId,premium:y.value,orderDetail:c.value,productDetail:i.value,insureDetail:u.value,successJumpUrl:"",iseeBizNo:""},ce),a=await Ie(e),{code:l,data:t}=a;"10000"===l&&(y.value=t.installmentPremium)}catch(e){console.log(e)}})()}))};return O((()=>r.isShow),(e=>{I.value=r.upgradeCode,e?(document.body.style.overflow="hidden",V()):document.body.style.overflow="inherit"})),(e,a)=>{const i=U;return r.isShow?(l(),t("div",fa,[va,n("div",ha,[n("img",{class:"cover",src:o("/static/png/upgrade_bg-b65c44d4.png")},null,8,ya),n("div",ba,[n("div",ga,[n("p",null,"每月保费仅需"+s(o(de)(o(y)||0))+"元，无需重复投保",1),Ia]),n("div",{class:"pro-modal-btn",onClick:w},"一键升级"),n("div",_a,[n("div",wa,[h(" 请您重点阅读并知晓 "),(l(!0),t(p,null,f(o(b),((e,a)=>(l(),v(i,{key:a,class:"file-name",title:`《${e.attachmentName}》`,content:e.attachmentUri,type:"pdf"},{default:m((()=>[a!==(o(b)||[]).length-1?(l(),t("span",Va,"、")):g("",!0)])),_:2},1032,["title","content"])))),128))])])]),n("div",ka,[n("img",{src:o(he),onClick:_},null,8,Da)])])])):g("",!0)}}}),[["__scopeId","data-v-171c7312"]]);const Na={class:"header"},Sa=["src"],xa={class:"content"},Ua=(e=>(D("data-v-52695742"),e=e(),C(),e))((()=>n("h4",null,"温馨提示，您已进入投保流程：",-1))),Fa=["onClick"],La={class:"footer"},Aa={key:0},qa=a({name:"preNotice"});var Oa=e(a({...qa,props:{productDetail:{type:Object,default:()=>{}}},setup(e){const a=e,r=new M({source:"sessionStorage"}),u=d(!1),v=d(!1),y=B({time:4e3,onFinish:()=>{r.set("PRENOTICE-isShow","1"),u.value=!1}}),b=d(),I=i((()=>{var e,l;return null==(l=null==(e=a.productDetail)?void 0:e.tenantProductInsureVO)?void 0:l.attachmentVOList.filter((e=>"个人信息保护政策"===e.attachmentName))})),w=i((()=>y.current.value.seconds));return R((()=>{u.value=!0,y.start()})),(e,a)=>{const r=T,i=k,d=$;return l(),t(p,null,[c(i,{class:"pre-notice-wrap",show:o(u),closeable:!1,height:45},{default:m((()=>[n("div",Na,[n("img",{src:o("/static/png/header-logo-fadf5dcd.png")},null,8,Sa)]),n("div",xa,[Ua,n("p",null,[h(" 请仔细阅读免责条款、投保须知等信息，请您重点阅读并知晓 "),(l(!0),t(p,null,f(o(I),((e,a)=>(l(),t("span",{key:a,class:"file-name",onClick:a=>{return l=e.attachmentUri,v.value=!v.value,void(b.value=l);var l}}," 《"+s(e.attachmentName)+"》 ",9,Fa)))),128)),h(" ，为维护您的合法权益，您的操作轨迹将被记录。 ")])]),n("div",La,[c(r,{type:"primary",block:"",round:""},{default:m((()=>[h(" 好的 "),o(w)?(l(),t("span",Aa,s(o(w))+"s",1)):g("",!0)])),_:1})])])),_:1},8,["show"]),c(i,{show:o(v),"onUpdate:show":a[0]||(a[0]=e=>_(v)?v.value=e:null),class:"pre-notice-wrap","close-icon":"close",position:"bottom",style:{height:"600px",paddingTop:"40px"}},{default:m((()=>[c(d,{content:o(b),type:"pdf"},null,8,["content"])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-52695742"]]);const Pa={class:"list"},ja={class:"item"},Ha={class:"footer"},Ta=a({name:"filePreview"}),Ea=a({...Ta,props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealth"],setup(e,{emit:a}){const t=e,s=d(t.show),r=d(t.activeIndex),u=i((()=>{var e;return null==(e=t.contentList[r.value])?void 0:e.attachmentUri})),p=d(!0),f=e=>{p.value=!1,a("update:show",!1),a("onConfirmHealth",e)};return O((()=>t),(()=>{s.value=t.show,r.value=t.activeIndex}),{deep:!0,immediate:!0}),(t,i)=>{const d=K,y=$,b=T,I=E,w=k;return l(),v(w,{show:o(s),"onUpdate:show":i[3]||(i[3]=e=>_(s)?s.value=e:null),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:i[4]||(i[4]=e=>{p.value&&a("onCloseHealth")})},{default:m((()=>[c(I,{"theme-vars":o(Y),class:"custom-provider"},{default:m((()=>[o(s)?(l(),v(d,{key:0,active:o(r),"onUpdate:active":i[0]||(i[0]=e=>_(r)?r.value=e:null),list:e.contentList.map(((e,a)=>({title:e.attachmentName,slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):g("",!0),n("div",Pa,[n("div",ja,[(l(),v(y,{key:o(u),content:o(u),type:"pdf"},null,8,["content"]))])]),n("div",Ha,[c(b,{type:"primary",block:"",round:"",onClick:i[1]||(i[1]=e=>f("N"))},{default:m((()=>[h("部分为是")])),_:1}),c(b,{type:"primary",plain:"",block:"",round:"",onClick:i[2]||(i[2]=e=>f("allFalse"))},{default:m((()=>[h("全部为否")])),_:1})])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}}),Ma={holderNameDisable:!0,holderCertDisable:!0,holderMobileDisable:!0,holderSocialDisable:!0,relationToHolderDisable:!0,insuredNameDisable:!0,insuredCertDisable:!0,insuredSocialDisable:!0,paymentDisable:!0,renewalDKDisable:!0,paymentFrequencyDisable:!0},Ba={...Ma,holderNameDisable:!1,holderCertDisable:!1,holderMobileDisable:!1,holderSocialDisable:!1,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1},Ra={...Ma};export{ke as B,Se as D,Oe as G,ia as H,Oa as P,We as S,Ca as U,ma as W,Ea as _,Ba as a,Ma as d,Ra as p};
