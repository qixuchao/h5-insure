import{_ as e,d as a,c as l,g as t,m as o,i as s,t as n,S as r,E as i,r as d,z as u,f as c,w as m,F as p,h as f,e as v,n as h,V as y,L as b,j as g,A as I,a3 as w,P as V,a7 as k,X as _,Y as D,bk as C,a2 as N,bV as S,a9 as U,l as F,ao as L,at as A,J as P,am as q,aI as x,aH as O,T as H,B as j,bT as T,ab as E,bW as M,G as B,aP as R,a5 as $}from"./index-9effc651.js";import K from"./index-0398240f.js";import{C as W}from"./index-1bfdf8ca.js";import{C as z}from"./index-60cc44b5.js";import{S as X}from"./index-605b31ce.js";import{t as Y}from"./theme-ea709837.js";import{g as G,h as J,R as Z,I as Q,a as ee,i as ae,S as le}from"./infoCollection-d7c085e7.js";import{A as te}from"./bankCard-0619f499.js";import{c as oe,n as se,i as ne,m as re,d as ie,e as de,f as ue,h as ce}from"./utils-5145af97.js";import{v as me}from"./validator-5a13dc82.js";import{s as pe,c as fe}from"./phoneVerify-6401d697.js";import{_ as ve,c as he}from"./close-30dd1e4c.js";import{i as ye,g as be,e as ge}from"./trial-190aded3.js";import{p as Ie}from"./product-2ff0d785.js";const we=["src"],Ve=["src"];var ke=e(a({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""}},setup(e){const a=e;return(e,s)=>a.isCheck?(l(),t("img",{key:0,src:o("/static/assets/check-detail.24065a01.png"),class:"banner"},null,8,we)):(l(),t("img",{key:1,src:a.url,class:"banner"},null,8,Ve))}}),[["__scopeId","data-v-584aabfc"]]);const _e={class:"product-desc"},De={class:"title"},Ce={class:"desc"};var Ne=e(a({props:{productName:{type:String,default:""},productDesc:{type:String,default:""}},setup:e=>(a,o)=>(l(),t("div",_e,[s("div",De,n(e.productName),1),s("div",Ce,n(e.productDesc),1)]))}),[["__scopeId","data-v-2e75305e"]]),Se="/static/assets/serviceConfig.ffc50dbe.png";const Ue={class:"guarantee-list"},Fe={class:"basic"},Le=["src"],Ae={class:"guarantee-detail"},Pe={class:"title"},qe={class:"content"};var xe=e(a({props:{guaranteeList:{type:Array,default:()=>[]},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:10},imgType:{type:String,default:"ZYE"}},setup(e){const a=e,[_,D]=r(!1),C=i((()=>a.guaranteeList.length>a.count&&(!!a.isShowClose||!_.value))),N=i((()=>{const e={BW:"/static/assets/serviceConfigBW.2f5aa9e8.png",ZYE:Se};return(null==e?void 0:e[a.imgType])||Se})),S=()=>{D()},U=i((()=>a.guaranteeList.length<=a.count||_.value?a.guaranteeList:a.guaranteeList.slice(0,a.count))),F=i((()=>a.guaranteeList.filter((e=>!(null==e?void 0:e.noDetail))))),L=d(!1),A=()=>{L.value=!0};return(e,a)=>{const r=w,i=V,d=k,D=u("dompurify-html");return l(),t(p,null,[s("div",Ue,[c(i,{title:"保障内容",link:"查看详情","show-divider":!0,"show-icon":!0,onLinkClick:A},{default:m((()=>[s("div",Fe,[(l(!0),t(p,null,f(o(U),((e,a)=>(l(),v(r,{key:a,class:"guarantee-item",title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128))]),o(C)?(l(),t("div",{key:0,class:"show-more",onClick:S},[h(n(o(_)?"收起":"查看更多")+" ",1),c(y,{name:"down",class:b(["icon",{showMore:o(_)}])},null,8,["class"])])):g("",!0),s("div",{class:"service-config",onClick:a[0]||(a[0]=(...a)=>e.onClose&&e.onClose(...a))},[s("img",{src:o(N)},null,8,Le)])])),_:1})]),c(d,{show:L.value,"onUpdate:show":a[1]||(a[1]=e=>L.value=e),title:"保障详情",class:"guarantee-popup"},{default:m((()=>[s("div",Ae,[(l(!0),t(p,null,f(o(F),((e,a)=>(l(),t("div",{key:a,class:"guarantee-item"},[s("div",Pe,n(e.title),1),I(s("div",qe,null,512),[[D,e.content]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-afeafb6a"]]);const Oe={class:"question"},He=(e=>(_("data-v-1d81ec06"),e=e(),D(),e))((()=>s("div",{class:"icon"},n("?"),-1))),je={class:"title"};var Te=e(a({props:{name:{type:String,default:""},question:{type:String,default:""},answer:{type:String,default:""}},setup:e=>(a,t)=>{const o=W;return l(),v(o,{name:e.name,class:"com-question-item"},{title:m((()=>[s("div",Oe,[He,s("div",je,n(e.question),1)])])),default:m((()=>[h(" "+n(e.answer),1)])),_:1},8,["name"])}}),[["__scopeId","data-v-1d81ec06"]]);const Ee={class:"com-question"};var Me=e(a({props:{list:{type:Array,default:()=>[]}},setup(e){const a=e,[s,u]=r(!1),I=d([]),w=()=>{u()},V=i((()=>a.list.length<=4||s.value?a.list:a.list.slice(0,4)));return(a,r)=>{const i=z;return l(),t("div",Ee,[c(i,{modelValue:I.value,"onUpdate:modelValue":r[0]||(r[0]=e=>I.value=e)},{default:m((()=>[(l(!0),t(p,null,f(o(V),((e,a)=>(l(),v(Te,{key:a,name:a.toString(),question:e.title,answer:e.desc},null,8,["name","question","answer"])))),128))])),_:1},8,["modelValue"]),e.list.length>4?(l(),t("div",{key:0,class:"show-more",onClick:w},[h(n(o(s)?"收起":"展开")+" ",1),c(y,{name:"down",class:b(["icon",{showMore:o(s)}])},null,8,["class"])])):g("",!0)])}}}),[["__scopeId","data-v-5359d801"]]);const Be={class:"spec"},Re=["src"],$e=(e=>(_("data-v-df0725a6"),e=e(),D(),e))((()=>s("div",{class:"sub-title"},"产品资料文件详情可手动放大，以便您更清晰查阅内容。",-1))),Ke={class:"tab-1-content"},We=h(" 请查看 "),ze=h(" > "),Xe={key:0,class:"dun-hao"};var Ye=e(a({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""},detail:{type:Object,default:()=>{}}},setup(e){const a=e,o=d([{title:"我要投保",slotName:"tab1"},{title:"产品特色",slotName:"tab2"},{title:"理赔流程",slotName:"tab3"},{title:"常见问题",slotName:"tab4"}]),n=e=>{const a=e.split("?")[0],l=a.lastIndexOf(".");return a.substring(l+1)},r=e=>{if(!e)return"";let a=e;return-1===a.indexOf("《")&&(a=`《${a}`),-1===a.indexOf("》")&&(a=`${a}》`),a};return(i,d)=>{const u=U;return l(),v(S,{class:"tabs",list:o.value,sticky:"",scrollspy:""},{tab1:m((()=>[C(i.$slots,"form",{},void 0,!0)])),tab2:m((()=>{var o,i;return[s("div",Be,[(l(!0),t(p,null,f((null==(i=null==(o=a.detail)?void 0:o.tenantProductInsureVO)?void 0:i.spec)||[],((e,a)=>(l(),t("img",{key:a,src:e,class:"detail-img"},null,8,Re)))),128)),c(N)]),c(V,{title:"产品资料"},{subTitle:m((()=>[$e])),default:m((()=>{var a,o;return[s("div",Ke,[We,(l(!0),t(p,null,f((null==(o=null==(a=e.detail)?void 0:a.tenantProductInsureVO)?void 0:o.attachmentVOList)||[],((a,o)=>(l(),v(u,{key:o,type:n(a.attachmentUri),class:"file-name",title:r(a.attachmentName),content:a.attachmentUri},{default:m((()=>{var a,s;return[ze,o!==((null==(s=null==(a=e.detail)?void 0:a.tenantProductInsureVO)?void 0:s.attachmentVOList)||[]).length-1?(l(),t("span",Xe,"、")):g("",!0)]})),_:2},1032,["type","title","content"])))),128))])]})),_:1})]})),tab3:m((()=>[c(V,{title:"理赔流程"},{default:m((()=>{var e,l;return[c(K,{list:null==(l=null==(e=a.detail)?void 0:e.tenantProductInsureVO)?void 0:l.settlementProcessList},null,8,["list"])]})),_:1})])),tab4:m((()=>[c(V,{title:"常见问题"},{default:m((()=>{var e,l;return[c(Me,{list:null==(l=null==(e=a.detail)?void 0:e.tenantProductInsureVO)?void 0:l.questionList},null,8,["list"])]})),_:1})])),_:3},8,["list"])}}}),[["__scopeId","data-v-df0725a6"]]);const Ge={class:"refueling-package-com"},Je=(e=>(_("data-v-0dce64f2"),e=e(),D(),e))((()=>s("div",{class:"title"},"加油包",-1)));var Ze=e(a({props:{packageProductList:{type:Array,default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:3}},setup(e){const a=e,[s,d]=r(!1),u=i((()=>a.packageProductList.length>a.count&&(!!a.isShowClose||!s.value))),I=()=>{d()},w=i((()=>a.packageProductList.length<=a.count||s.value?a.packageProductList:a.packageProductList.slice(0,a.count)));return(e,a)=>{const r=F,i=L,d=A;return l(),t("div",Ge,[Je,c(d,{ref:"formRef"},{default:m((()=>[(l(!0),t(p,null,f(o(w),((e,a)=>(l(),v(i,{key:`${e.value}_${a}`,modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,label:e.packageName,required:"",placeholder:"请选择"},{input:m((()=>[c(r,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,options:o(G),disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","options","disabled"])])),_:2},1032,["modelValue","onUpdate:modelValue","label"])))),128)),o(u)?(l(),t("div",{key:0,class:"show-more",onClick:I},[h(n(o(s)?"收起":"查看更多")+" ",1),c(y,{name:"down",class:b(["icon",{showMore:o(s)}])},null,8,["class"])])):g("",!0)])),_:1},512)])}}}),[["__scopeId","data-v-0dce64f2"]]);const Qe=e=>(_("data-v-4a86f472"),e=e(),D(),e),ea={class:"holder container"},aa=Qe((()=>s("div",{class:"title"},"投保人信息",-1))),la={class:"insured-relation container"},ta=Qe((()=>s("div",{class:"title"},"为谁投保",-1))),oa={class:"insured container"},sa=Qe((()=>s("div",{class:"title"},"被保人信息",-1))),na={key:0,class:"container"},ra={class:"payment container"},ia={class:"renewal-wrapper"},da=Qe((()=>s("div",{class:"desc"},[s("p",null,"保单到期自动重新投保，享受保障不间断"),s("p",null,"自主重新投保开启后，中途可随时取消")],-1)));var ua=e(a({props:{disable:{type:Boolean,default:!1},formAuth:{type:Object,default:()=>{}},formInfo:{type:Object,default:()=>{}},payments:{type:Array,default:()=>[0,1]},paymentMethod:{type:Array,default:()=>[0,1]},productDetail:{type:Object,default:()=>{}},isShowPackage:{type:Boolean,default:!1}},emits:["onReset","onUpdate","onVerify"],setup(e,{expose:a,emit:r}){const u=e,p=d({}),f=P({formInfo:u.formInfo}),y=d(!1),I=d(0),w=d(!1),V=d(0),k=d("获取验证码"),_=d(!1),D=e=>!!me(e)||"请输入正确的姓名",C=i((()=>J.filter(((e,a)=>u.payments.includes(a))))),S=i((()=>te.filter(((e,a)=>u.paymentMethod.includes(a))))),U=i((()=>f.formInfo.insured.relationToHolder===Z.SELF)),E=i((()=>{var e,a;return null==(a=null==(e=u.productDetail)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"费率表"===e.attachmentName))})),M=i((()=>{var e,a;return(null==(a=null==(e=u.productDetail)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>!["健康告知","费率表"].includes(e.attachmentName))))||[]})),B=i((()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(f.formInfo.holder.mobile))),R=()=>(w.value=!0,w),$=async()=>{V.value>0||null==p||p.value.validate("mobile").then((async()=>{const e=await pe(f.formInfo.holder.mobile),{code:a,data:l}=e;"10000"===a&&(_.value=!0,H({message:"短信发送成功，请查收"}),(()=>{if(V.value>0)return;V.value=60;const e=()=>{k.value=`${V.value}s`,V.value-=1};e();const a=setInterval((()=>{0===V.value?(k.value="获取验证码",V.value=0,clearInterval(a)):e()}),1e3)})())}))},K=()=>{const{relationToHolder:e}=f.formInfo.insured;e===Z.SELF?(f.formInfo.insured={certNo:f.formInfo.holder.certNo,name:f.formInfo.holder.name,socialFlag:f.formInfo.holder.socialFlag,relationToHolder:e},r("onReset")):(f.formInfo.insured={certNo:"",name:"",socialFlag:le.HAS,relationToHolder:e},r("onUpdate"))},W=e=>new Promise(((a,l)=>{e&&ie(e)&&f.formInfo.holder.mobile?fe(f.formInfo.holder.mobile,f.formInfo.holder.mobileSmsCode).then((e=>{const{data:l}=e;a(!!l)})):a(!1)}));return q((()=>f.formInfo.insured.socialFlag),(()=>{f.formInfo.insured.relationToHolder===Z.SELF&&(f.formInfo.holder.socialFlag=f.formInfo.insured.socialFlag)})),q([()=>f.formInfo.holder.certNo,()=>f.formInfo.insured.certNo],(()=>{var e,a;f.formInfo.holder.certNo=null==(e=f.formInfo.holder.certNo)?void 0:e.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,""),f.formInfo.insured.certNo=null==(a=f.formInfo.insured.certNo)?void 0:a.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),q((()=>f.formInfo.holder),(()=>{f.formInfo.insured.relationToHolder===Z.SELF&&Object.assign(f.formInfo.insured,f.formInfo.holder)}),{deep:!0,immediate:!0}),q((()=>f.formInfo.insured.certNo),(()=>{var e,a;let l=!1;x(f.formInfo.insured.certNo)&&(l=!0),null==(a=null==(e=f.formInfo)?void 0:e.packageProductList)||a.forEach((e=>{if(l){oe(e,f.formInfo.insured.certNo)||(e.disabled=!0,e.value=Q.UN_INSURE)}else e.disabled=!1}))})),a({validateForm:()=>new Promise(((e,a)=>{null==p||p.value.validate().then((()=>{e("")}),(e=>{a(e)}))})),previewFile:e=>{I.value=e,y.value=!0},reEditForm:()=>{w.value=!1},isAgreeFile:w,onSubmit:R}),(a,r)=>{const i=L,d=j,w=F,_=X,P=A,q=T;return l(),v(q,{"theme-vars":o(Y)},{default:m((()=>[c(P,{ref_key:"formRef",ref:p},{default:m((()=>{var a,p,F,L,A,P,q,x,H,j;return[c(N),s("div",ea,[aa,(null==(a=u.formAuth)?void 0:a.holderNameDisable)?(l(),v(i,{key:0,label:"姓名",class:"pro-field","is-view":!0},{input:m((()=>[h(n(o(se)(o(f).formInfo.holder.name)),1)])),_:1})):(l(),v(i,{key:1,modelValue:o(f).formInfo.holder.name,"onUpdate:modelValue":r[0]||(r[0]=e=>o(f).formInfo.holder.name=e),label:"姓名",name:"name",required:"",placeholder:"请输入姓名",maxlength:"50",rules:[{validator:D}],"custom-class":"custom-class-name"},null,8,["modelValue","rules"])),(null==(p=u.formAuth)?void 0:p.holderCertDisable)?(l(),v(i,{key:2,label:"证件号码",class:"pro-field","is-view":!0},{input:m((()=>[h(n(o(ne)(o(f).formInfo.holder.certNo)),1)])),_:1})):(l(),v(i,{key:3,modelValue:o(f).formInfo.holder.certNo,"onUpdate:modelValue":r[1]||(r[1]=e=>o(f).formInfo.holder.certNo=e),label:"证件号码",name:"certNo",required:"",placeholder:"请输入身份证号",maxlength:"18","validate-type":[o(O).ID_CARD],"custom-class":"custom-class-certNo"},null,8,["modelValue","validate-type"])),(null==(F=u.formAuth)?void 0:F.holderMobileDisable)?(l(),v(i,{key:4,label:"手机号",class:"pro-field","is-view":!0},{input:m((()=>[h(n(o(re)(o(f).formInfo.holder.mobile)),1)])),_:1})):(l(),v(i,{key:5,modelValue:o(f).formInfo.holder.mobile,"onUpdate:modelValue":r[2]||(r[2]=e=>o(f).formInfo.holder.mobile=e),label:"手机号",name:"mobile",required:"",placeholder:"请输入手机号",type:"digit",maxlength:"11","validate-type":[o(O).PHONE],"custom-class":"custom-class-mobile"},null,8,["modelValue","validate-type"])),(null==(L=u.formAuth)?void 0:L.holderMobileDisable)?g("",!0):(l(),v(i,{key:6,modelValue:o(f).formInfo.holder.mobileSmsCode,"onUpdate:modelValue":r[3]||(r[3]=e=>o(f).formInfo.holder.mobileSmsCode=e),label:"验证码",name:"mobileSmsCode",type:"digit",required:"",rules:[{validator:W,message:"请输入正确的验证码"}],"input-align":"left",placeholder:"请输入验证码","error-message-align":"left",maxlength:"6","validate-type":[o(O).SMS_CODE],"custom-class":"custom-class-mobileSmsCode"},{extra:m((()=>[c(d,{class:b(["sms-code",{"count-down":V.value>0}]),size:"small",type:"primary",disabled:!o(B),onClick:$},{default:m((()=>[h(n(k.value),1)])),_:1},8,["class","disabled"])])),_:1},8,["modelValue","rules","validate-type"]))]),c(N),s("div",la,[ta,c(i,{modelValue:o(f).formInfo.insured.relationToHolder,"onUpdate:modelValue":r[5]||(r[5]=e=>o(f).formInfo.insured.relationToHolder=e),class:"relation-to-Holder",label:"",name:"relationToHolder",placeholder:"请选择",onClick:K},{input:m((()=>{var e;return[c(w,{modelValue:o(f).formInfo.insured.relationToHolder,"onUpdate:modelValue":r[4]||(r[4]=e=>o(f).formInfo.insured.relationToHolder=e),disabled:null==(e=u.formAuth)?void 0:e.relationToHolderDisable,options:o(ee)},null,8,["modelValue","disabled","options"])]})),_:1},8,["modelValue"])]),c(N),s("div",oa,[sa,(null==(A=u.formAuth)?void 0:A.insuredNameDisable)?(l(),v(i,{key:0,label:"姓名",class:"pro-field","is-view":!0},{input:m((()=>[h(n(o(se)(o(f).formInfo.insured.name)),1)])),_:1})):g("",!0),(null==(P=u.formAuth)?void 0:P.insuredNameDisable)||o(U)?g("",!0):(l(),v(i,{key:1,modelValue:o(f).formInfo.insured.name,"onUpdate:modelValue":r[6]||(r[6]=e=>o(f).formInfo.insured.name=e),label:"姓名",name:"name",required:"",maxlength:"50",rules:[{validator:D}]},null,8,["modelValue","rules"])),(null==(q=u.formAuth)?void 0:q.insuredCertDisable)?(l(),v(i,{key:2,label:"证件号码",class:"pro-field","is-view":!0},{input:m((()=>[h(n(o(ne)(o(f).formInfo.insured.certNo)),1)])),_:1})):g("",!0),(null==(x=u.formAuth)?void 0:x.insuredCertDisable)||o(U)?g("",!0):(l(),v(i,{key:3,modelValue:o(f).formInfo.insured.certNo,"onUpdate:modelValue":r[7]||(r[7]=e=>o(f).formInfo.insured.certNo=e),label:"证件号码",name:"certNo",required:"",placeholder:"请输入身份证号",maxlength:"20","validate-type":[o(O).ID_CARD]},null,8,["modelValue","validate-type"])),c(i,{modelValue:o(f).formInfo.insured.socialFlag,"onUpdate:modelValue":r[9]||(r[9]=e=>o(f).formInfo.insured.socialFlag=e),label:"有无社保",name:"name",required:"",placeholder:"请选择"},{input:m((()=>{var e;return[c(w,{modelValue:o(f).formInfo.insured.socialFlag,"onUpdate:modelValue":r[8]||(r[8]=e=>o(f).formInfo.insured.socialFlag=e),disabled:null==(e=u.formAuth)?void 0:e.insuredSocialDisable,options:o(ae)},null,8,["modelValue","disabled","options"])]})),_:1},8,["modelValue"])]),c(N),e.isShowPackage?(l(),t("div",na,[c(Ze,{"package-product-list":null==(H=e.formInfo)?void 0:H.packageProductList},null,8,["package-product-list"])])):g("",!0),c(N),s("div",ra,[(null==(j=u.formAuth)?void 0:j.paymentFrequencyDisable)?g("",!0):(l(),v(i,{key:0,modelValue:o(f).formInfo.paymentFrequency,"onUpdate:modelValue":r[11]||(r[11]=e=>o(f).formInfo.paymentFrequency=e),label:"交费方式",name:"paymentFrequency",required:"",placeholder:"请选择","error-message":"请选择交费方式"},{input:m((()=>{var e;return[c(w,{modelValue:o(f).formInfo.paymentFrequency,"onUpdate:modelValue":r[10]||(r[10]=e=>o(f).formInfo.paymentFrequency=e),disabled:null==(e=u.formAuth)?void 0:e.paymentFrequencyDisable,options:o(C)},null,8,["modelValue","disabled","options"])]})),_:1},8,["modelValue"])),c(N),c(i,{modelValue:o(f).formInfo.paymentMethod,"onUpdate:modelValue":r[13]||(r[13]=e=>o(f).formInfo.paymentMethod=e),label:"支付方式",name:"paymentMethod",required:"",placeholder:"请选择","custom-class":"custom-class-paymentMethod","error-message":"请选择支付方式"},{input:m((()=>{var e;return[c(w,{modelValue:o(f).formInfo.paymentMethod,"onUpdate:modelValue":r[12]||(r[12]=e=>o(f).formInfo.paymentMethod=e),disabled:null==(e=u.formAuth)?void 0:e.paymentDisable,options:o(S)},null,8,["modelValue","disabled","options"])]})),_:1},8,["modelValue"]),c(N),s("div",ia,[c(i,{label:"开通自主重新投保",class:"pro-field",name:"renewalDK",placeholder:"请选择",border:!1},{input:m((()=>{var e;return[c(_,{modelValue:o(f).formInfo.renewalDK,"onUpdate:modelValue":r[14]||(r[14]=e=>o(f).formInfo.renewalDK=e),disabled:null==(e=u.formAuth)?void 0:e.renewalDKDisable},null,8,["modelValue","disabled"])]})),_:1}),da])]),c(N),c(ve,{show:y.value,"onUpdate:show":r[15]||(r[15]=e=>y.value=e),"content-list":o(M).concat(o(E)),"active-index":I.value,text:"我已逐页阅读并确认告知内容",onSubmit:R},null,8,["show","content-list","active-index"])]})),_:1},512)])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-4a86f472"]]);const ca={key:0,class:"page-waiting"},ma=["src"],pa=(e=>(_("data-v-812ee74a"),e=e(),D(),e))((()=>s("div",{class:"tips"},[s("p",null,"支付成功，承保中...")],-1)));var fa=e(a({props:{isShow:{type:Boolean,default:()=>{}}},setup(e){const a=e;return q((()=>a.isShow),(e=>{document.body.style.overflow=e?"hidden":"inherit"})),(e,n)=>a.isShow?(l(),t("div",ca,[s("img",{class:"loading",src:o("/static/assets/loading.df8f340b.gif")},null,8,ma),pa])):g("",!0)}}),[["__scopeId","data-v-812ee74a"]]);const va=e=>(_("data-v-171c7312"),e=e(),D(),e),ha={key:0,class:"pro-modal"},ya=va((()=>s("div",{class:"pro-overlay"},null,-1))),ba={class:"pro-modal-wrapper"},ga=["src"],Ia={class:"pro-modal-body"},wa={class:"pro-modal-content"},Va=va((()=>s("p",{class:"tips"},"升级后的保障将于第二期保费扣费/缴费成功后生效",-1))),ka={class:"pro-modal-content"},_a={class:"product-attachment-list"},Da=h(" 请您重点阅读并知晓 "),Ca={key:0,class:"dun-hao"},Na={class:"pro-modal-close"},Sa=["src"];var Ua=e(a({props:{orderNo:{type:String,default:""},tenantId:{type:String,default:""},isShow:{type:Boolean,default:()=>{}},upgradeCode:{type:String,default:""}},emits:["on-confirm","on-close"],setup(e,{emit:a}){const r=e,i=d(),u=d(),c=d(),h=d(),y=d([]),b=d(r.upgradeCode),I=()=>{a("on-close")},w=()=>{a("on-confirm")},V=()=>{const e=Ie({productCode:b.value,withInsureInfo:!0,tenantId:r.tenantId}),a=ye({productCode:b.value}),l=be({orderNo:r.orderNo,tenantId:r.tenantId});Promise.all([e,a,l]).then((([e,a,l])=>{"10000"===e.code&&(i.value=e.data,y.value=e.data.tenantProductInsureVO.attachmentVOList),"10000"===a.code&&(u.value=a.data),"10000"===l.code&&(c.value=l.data),(async()=>{try{const e=ue({tenantId:r.tenantId,premium:h.value,orderDetail:c.value,productDetail:i.value,insureDetail:u.value,successJumpUrl:"",iseeBizNo:""},ce),a=await ge(e),{code:l,data:t}=a;"10000"===l&&(h.value=t.installmentPremium)}catch(e){console.log(e)}})()}))};return q((()=>r.isShow),(e=>{b.value=r.upgradeCode,e?(document.body.style.overflow="hidden",V()):document.body.style.overflow="inherit"})),(e,a)=>{const i=U;return r.isShow?(l(),t("div",ha,[ya,s("div",ba,[s("img",{class:"cover",src:o("/static/assets/upgrade_bg.b65c44d4.png")},null,8,ga),s("div",Ia,[s("div",wa,[s("p",null,"每月保费仅需"+n(o(de)(h.value||0))+"元，无需重复投保",1),Va]),s("div",{class:"pro-modal-btn",onClick:w},"一键升级"),s("div",ka,[s("div",_a,[Da,(l(!0),t(p,null,f(y.value,((e,a)=>(l(),v(i,{key:a,class:"file-name",title:`《${e.attachmentName}》`,content:e.attachmentUri,type:"pdf"},{default:m((()=>[a!==(y.value||[]).length-1?(l(),t("span",Ca,"、")):g("",!0)])),_:2},1032,["title","content"])))),128))])])]),s("div",Na,[s("img",{src:o(he),onClick:I},null,8,Sa)])])])):g("",!0)}}}),[["__scopeId","data-v-171c7312"]]);const Fa={class:"header"},La=["src"],Aa={class:"content"},Pa=(e=>(_("data-v-043963d8"),e=e(),D(),e))((()=>s("h4",null,"温馨提示，您已进入投保流程：",-1))),qa=h(" 请仔细阅读免责条款、投保须知等信息，请您重点阅读并知晓 "),xa=["onClick"],Oa=h(" ，为维护您的合法权益，您的操作轨迹将被记录。 "),Ha={class:"footer"},ja=h(" 好的 "),Ta={key:0};var Ea=e(a({props:{productDetail:{type:Object,default:()=>{}}},setup(e){const a=e,r=new E({source:"sessionStorage"}),u=d(!1),v=d(!1),h=M({time:4e3,onFinish:()=>{r.set("PRENOTICE-isShow","1"),u.value=!1}}),y=d(),b=i((()=>{var e,l;return null==(l=null==(e=a.productDetail)?void 0:e.tenantProductInsureVO)?void 0:l.attachmentVOList.filter((e=>"个人信息保护政策"===e.attachmentName))})),I=i((()=>h.current.value.seconds));return B((()=>{u.value=!0,h.start()})),(e,a)=>{const r=j,i=k,d=R;return l(),t(p,null,[c(i,{class:"pre-notice-wrap",show:u.value,closeable:!1,height:45},{default:m((()=>[s("div",Fa,[s("img",{src:o("/static/assets/header-logo.fadf5dcd.png")},null,8,La)]),s("div",Aa,[Pa,s("p",null,[qa,(l(!0),t(p,null,f(o(b),((e,a)=>(l(),t("span",{key:a,class:"file-name",onClick:a=>{return l=e.attachmentUri,v.value=!v.value,void(y.value=l);var l}}," 《"+n(e.attachmentName)+"》 ",9,xa)))),128)),Oa])]),s("div",Ha,[c(r,{type:"primary",block:"",round:""},{default:m((()=>[ja,o(I)?(l(),t("span",Ta,n(o(I))+"s",1)):g("",!0)])),_:1})])])),_:1},8,["show"]),c(i,{show:v.value,"onUpdate:show":a[0]||(a[0]=e=>v.value=e),class:"pre-notice-wrap","close-icon":"close",position:"bottom",style:{height:"600px",paddingTop:"40px"}},{default:m((()=>[c(d,{content:y.value,type:"pdf"},null,8,["content"])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-043963d8"]]);const Ma={class:"list"},Ba={class:"item"},Ra={class:"footer"},$a=h("部分为是"),Ka=h("全部为否"),Wa=a({props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealth"],setup(e,{emit:a}){const t=e,n=d(t.show),r=d(t.activeIndex),u=i((()=>{var e;return null==(e=t.contentList[r.value])?void 0:e.attachmentUri})),p=d(!0),f=e=>{p.value=!1,a("update:show",!1),a("onConfirmHealth",e)};return q((()=>t),(()=>{n.value=t.show,r.value=t.activeIndex}),{deep:!0,immediate:!0}),(t,i)=>{const d=$,h=R,y=j,b=T,I=k;return l(),v(I,{show:n.value,"onUpdate:show":i[3]||(i[3]=e=>n.value=e),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:i[4]||(i[4]=e=>{p.value&&a("onCloseHealth")})},{default:m((()=>[c(b,{"theme-vars":o(Y),class:"custom-provider"},{default:m((()=>[n.value?(l(),v(d,{key:0,active:r.value,"onUpdate:active":i[0]||(i[0]=e=>r.value=e),list:e.contentList.map(((e,a)=>({title:e.attachmentName,slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):g("",!0),s("div",Ma,[s("div",Ba,[(l(),v(h,{key:o(u),content:o(u),type:"pdf"},null,8,["content"]))])]),s("div",Ra,[c(y,{type:"primary",block:"",round:"",onClick:i[1]||(i[1]=e=>f("N"))},{default:m((()=>[$a])),_:1}),c(y,{type:"primary",plain:"",block:"",round:"",onClick:i[2]||(i[2]=e=>f("allFalse"))},{default:m((()=>[Ka])),_:1})])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}}),za={holderNameDisable:!0,holderCertDisable:!0,holderMobileDisable:!0,holderSocialDisable:!0,relationToHolderDisable:!0,insuredNameDisable:!0,insuredCertDisable:!0,insuredSocialDisable:!0,paymentDisable:!0,renewalDKDisable:!0,paymentFrequencyDisable:!0},Xa={...za,holderNameDisable:!1,holderCertDisable:!1,holderMobileDisable:!1,holderSocialDisable:!1,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1},Ya={...za};export{ke as B,Ne as D,xe as G,ua as H,Ea as P,Ye as S,Ua as U,fa as W,Wa as _,Xa as a,za as d,Ya as p};
