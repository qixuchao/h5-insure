import{c as e,v as a,u as l,H as o}from"./check-detail-fc12290b.js";import{_ as t,e as s,i as n,a as r,a7 as i,I as d,V as u,S as c}from"./index-823b7915.js";import{m,t as p,C as f,F as v,E as h,N as b,S as y,e as I,r as g,s as w,ah as V,U as k,x as _,I as D,J as C,v as N,H as P,O as S,z as U,L as F,a6 as L,a7 as O,_ as q,P as x,a0 as A,T as H,ax as j,o as T}from"./vendor-fd650291.js";import{P as B}from"./index-2715c7bd.js";import{t as M}from"./theme-ea709837.js";import{h as E,i as R,R as $,I as K,a as z,j as J,S as X}from"./infoCollection-15d1d038.js";import{A as G}from"./bankCard-da82df23.js";import{c as W,n as Q,i as Y,m as Z,d as ee,e as ae,f as le,h as oe}from"./utils-edb4675e.js";import{s as te,c as se}from"./phoneVerify-7c2a1f6d.js";import{_ as ne}from"./index-5173abeb.js";import{L as re}from"./loading-1c9c1d7b.js";import{c as ie}from"./close-bad1ffb4.js";import{i as de,g as ue,e as ce}from"./trial-46e5d06e.js";import{p as me}from"./product-9ad33e98.js";const pe=["src"],fe=["src"];var ve=t(m({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""}},setup(a){const l=a;return(a,o)=>l.isCheck?(p(),f("img",{key:0,src:v(e),class:"banner"},null,8,pe)):(p(),f("img",{key:1,src:l.url,class:"banner"},null,8,fe))}}),[["__scopeId","data-v-584aabfc"]]);const he={class:"product-desc"},be={class:"title"},ye={class:"desc"};var Ie=t(m({props:{productName:{type:String,default:""},productDesc:{type:String,default:""}},setup:e=>(a,l)=>(p(),f("div",he,[h("div",be,b(e.productName),1),h("div",ye,b(e.productDesc),1)]))}),[["__scopeId","data-v-2e75305e"]]);const ge={class:"guarantee-list"},we={class:"basic"},Ve=["src"],ke={class:"guarantee-detail"},_e={class:"title"},De={class:"content"};var Ce=t(m({props:{guaranteeList:{type:Array,default:()=>[]},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:10}},setup(e){const a=e,[l,o]=y(!1),t=I((()=>a.guaranteeList.length>a.count&&(!!a.isShowClose||!l.value))),n=()=>{o()},r=I((()=>a.guaranteeList.length<=a.count||l.value?a.guaranteeList:a.guaranteeList.slice(0,a.count))),i=I((()=>a.guaranteeList.filter((e=>!(null==e?void 0:e.noDetail))))),d=g(!1),u=()=>{d.value=!0};return(e,a)=>{const o=w("ProCell"),c=w("ProCard"),m=w("ProPopup"),y=V("dompurify-html");return p(),f(D,null,[h("div",ge,[k(c,{title:"保障内容",link:"查看详情","show-divider":!0,"show-icon":!0,onLinkClick:u},{default:_((()=>[h("div",we,[(p(!0),f(D,null,C(v(r),((e,a)=>(p(),N(o,{key:a,class:"guarantee-item",title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128))]),v(t)?(p(),f("div",{key:0,class:"show-more",onClick:n},[P(b(v(l)?"收起":"查看更多")+" ",1),k(s,{name:"down",class:S(["icon",{showMore:v(l)}])},null,8,["class"])])):U("",!0),h("div",{class:"service-config",onClick:a[0]||(a[0]=(...a)=>e.onClose&&e.onClose(...a))},[h("img",{src:v("/static/assets/serviceConfig.3b6c945c.png")},null,8,Ve)])])),_:1})]),k(m,{show:d.value,"onUpdate:show":a[1]||(a[1]=e=>d.value=e),title:"保障详情",class:"guarantee-popup"},{default:_((()=>[h("div",ke,[(p(!0),f(D,null,C(v(i),((e,a)=>(p(),f("div",{key:a,class:"guarantee-item"},[h("div",_e,b(e.title),1),F(h("div",De,null,512),[[y,e.content]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-e6de1ac4"]]);const Ne={class:"question"},Pe=(e=>(L("data-v-1d81ec06"),e=e(),O(),e))((()=>h("div",{class:"icon"},b("?"),-1))),Se={class:"title"};var Ue=t(m({props:{name:{type:String,default:""},question:{type:String,default:""},answer:{type:String,default:""}},setup:e=>(a,l)=>{const o=w("van-collapse-item");return p(),N(o,{name:e.name,class:"com-question-item"},{title:_((()=>[h("div",Ne,[Pe,h("div",Se,b(e.question),1)])])),default:_((()=>[P(" "+b(e.answer),1)])),_:1},8,["name"])}}),[["__scopeId","data-v-1d81ec06"]]);const Fe={class:"com-question"};var Le=t(m({props:{list:{type:Array,default:()=>[]}},setup(e){const a=e,[l,o]=y(!1),t=g([]),n=()=>{o()},r=I((()=>a.list.length<=4||l.value?a.list:a.list.slice(0,4)));return(a,o)=>{const i=w("van-collapse");return p(),f("div",Fe,[k(i,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e)},{default:_((()=>[(p(!0),f(D,null,C(v(r),((e,a)=>(p(),N(Ue,{key:a,name:a.toString(),question:e.title,answer:e.desc},null,8,["name","question","answer"])))),128))])),_:1},8,["modelValue"]),e.list.length>4?(p(),f("div",{key:0,class:"show-more",onClick:n},[P(b(v(l)?"收起":"展开")+" ",1),k(s,{name:"down",class:S(["icon",{showMore:v(l)}])},null,8,["class"])])):U("",!0)])}}}),[["__scopeId","data-v-5359d801"]]);const Oe={class:"spec"},qe=["src"],xe=(e=>(L("data-v-df0725a6"),e=e(),O(),e))((()=>h("div",{class:"sub-title"},"产品资料文件详情可手动放大，以便您更清晰查阅内容。",-1))),Ae={class:"tab-1-content"},He=P(" 请查看 "),je=P(" > "),Te={key:0,class:"dun-hao"};var Be=t(m({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""},detail:{type:Object,default:()=>{}}},setup(e){const a=e,l=g([{title:"我要投保",slotName:"tab1"},{title:"产品特色",slotName:"tab2"},{title:"理赔流程",slotName:"tab3"},{title:"常见问题",slotName:"tab4"}]),o=e=>{const a=e.split("?")[0],l=a.lastIndexOf(".");return a.substring(l+1)},t=e=>{if(!e)return"";let a=e;return-1===a.indexOf("《")&&(a=`《${a}`),-1===a.indexOf("》")&&(a=`${a}》`),a};return(s,d)=>{const u=w("ProPDFviewer");return p(),N(i,{class:"tabs",list:l.value,sticky:"",scrollspy:""},{tab1:_((()=>[q(s.$slots,"form",{},void 0,!0)])),tab2:_((()=>{var l,s;return[h("div",Oe,[(p(!0),f(D,null,C((null==(s=null==(l=a.detail)?void 0:l.tenantProductInsureVO)?void 0:s.spec)||[],((e,a)=>(p(),f("img",{key:a,src:e,class:"detail-img"},null,8,qe)))),128)),k(n)]),k(r,{title:"产品资料"},{subTitle:_((()=>[xe])),default:_((()=>{var a,l;return[h("div",Ae,[He,(p(!0),f(D,null,C((null==(l=null==(a=e.detail)?void 0:a.tenantProductInsureVO)?void 0:l.attachmentVOList)||[],((a,l)=>(p(),N(u,{key:l,type:o(a.attachmentUri),class:"file-name",title:t(a.attachmentName),content:a.attachmentUri},{default:_((()=>{var a,o;return[je,l!==((null==(o=null==(a=e.detail)?void 0:a.tenantProductInsureVO)?void 0:o.attachmentVOList)||[]).length-1?(p(),f("span",Te,"、")):U("",!0)]})),_:2},1032,["type","title","content"])))),128))])]})),_:1})]})),tab3:_((()=>[k(r,{title:"理赔流程"},{default:_((()=>{var e,l;return[k(B,{list:null==(l=null==(e=a.detail)?void 0:e.tenantProductInsureVO)?void 0:l.settlementProcessList},null,8,["list"])]})),_:1})])),tab4:_((()=>[k(r,{title:"常见问题"},{default:_((()=>{var e,l;return[k(Le,{list:null==(l=null==(e=a.detail)?void 0:e.tenantProductInsureVO)?void 0:l.questionList},null,8,["list"])]})),_:1})])),_:3},8,["list"])}}}),[["__scopeId","data-v-df0725a6"]]);const Me={class:"refueling-package-com"},Ee=(e=>(L("data-v-0dce64f2"),e=e(),O(),e))((()=>h("div",{class:"title"},"加油包",-1)));var Re=t(m({props:{packageProductList:{type:Array,default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:3}},setup(e){const a=e,[l,o]=y(!1),t=I((()=>a.packageProductList.length>a.count&&(!!a.isShowClose||!l.value))),n=()=>{o()},r=I((()=>a.packageProductList.length<=a.count||l.value?a.packageProductList:a.packageProductList.slice(0,a.count)));return(e,a)=>{const o=w("ProRadioButton"),i=w("ProField"),d=w("ProForm");return p(),f("div",Me,[Ee,k(d,{ref:"formRef"},{default:_((()=>[(p(!0),f(D,null,C(v(r),((e,a)=>(p(),N(i,{key:`${e.value}_${a}`,modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,label:e.packageName,required:"",placeholder:"请选择"},{input:_((()=>[k(o,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,options:v(E),disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","options","disabled"])])),_:2},1032,["modelValue","onUpdate:modelValue","label"])))),128)),v(t)?(p(),f("div",{key:0,class:"show-more",onClick:n},[P(b(v(l)?"收起":"查看更多")+" ",1),k(s,{name:"down",class:S(["icon",{showMore:v(l)}])},null,8,["class"])])):U("",!0)])),_:1},512)])}}}),[["__scopeId","data-v-0dce64f2"]]);const $e=e=>(L("data-v-55da10e0"),e=e(),O(),e),Ke={class:"holder container"},ze=$e((()=>h("div",{class:"title"},"投保人信息",-1))),Je={class:"insured-relation container"},Xe=$e((()=>h("div",{class:"title"},"为谁投保",-1))),Ge={class:"insured container"},We=$e((()=>h("div",{class:"title"},"被保人信息",-1))),Qe={key:0,class:"container"},Ye={class:"payment container"},Ze={class:"renewal-wrapper"},ea=$e((()=>h("div",{class:"desc"},[h("p",null,"保单到期自动重新投保，享受保障不间断"),h("p",null,"自从重新投保开启后，中途可随时取消")],-1)));var aa=t(m({props:{disable:{type:Boolean,default:!1},formAuth:{type:Object,default:()=>{}},formInfo:{type:Object,default:()=>{}},payments:{type:Array,default:()=>[0,1]},paymentMethod:{type:Array,default:()=>[0,1]},productDetail:{type:Object,default:()=>{}},isShowPackage:{type:Boolean,default:!1}},emits:["onReset","onUpdate","onVerify"],setup(e,{expose:l,emit:o}){const t=e,s=g({}),r=x({formInfo:t.formInfo}),i=g(!1),c=g(0),m=g(!1),y=g(0),V=g("获取验证码"),D=g(!1),C=e=>!!a(e)||"请输入正确的姓名",F=I((()=>R.filter(((e,a)=>t.payments.includes(a))))),L=I((()=>G.filter(((e,a)=>t.paymentMethod.includes(a))))),O=I((()=>r.formInfo.insured.relationToHolder===$.SELF)),q=I((()=>{var e,a;return null==(a=null==(e=t.productDetail)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>"费率表"===e.attachmentName))})),j=I((()=>{var e,a;return(null==(a=null==(e=t.productDetail)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList.filter((e=>!["健康告知","费率表"].includes(e.attachmentName))))||[]})),T=I((()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(r.formInfo.holder.mobile))),B=()=>(m.value=!0,m),E=async()=>{y.value>0||null==s||s.value.validate("mobile").then((async()=>{const e=await te(r.formInfo.holder.mobile),{code:a,data:l}=e;"10000"===a&&(D.value=!0,H({message:"短信发送成功，请查收"}),(()=>{if(y.value>0)return;y.value=60;const e=()=>{V.value=`${y.value}s`,y.value-=1};e();const a=setInterval((()=>{0===y.value?(V.value="获取验证码",y.value=0,clearInterval(a)):e()}),1e3)})())}))},ae=()=>{const{relationToHolder:e}=r.formInfo.insured;e===$.SELF?(r.formInfo.insured={certNo:r.formInfo.holder.certNo,name:r.formInfo.holder.name,socialFlag:r.formInfo.holder.socialFlag,relationToHolder:e},o("onReset")):(r.formInfo.insured={certNo:"",name:"",socialFlag:X.HAS,relationToHolder:e},o("onUpdate"))},le=e=>new Promise(((a,l)=>{e&&ee(e)&&r.formInfo.holder.mobile?se(r.formInfo.holder.mobile,r.formInfo.holder.mobileSmsCode).then((e=>{const{data:l}=e;a(!!l)})):a(!1)}));return A([()=>r.formInfo.holder.certNo,()=>r.formInfo.insured.certNo],(()=>{var e,a;r.formInfo.holder.certNo=null==(e=r.formInfo.holder.certNo)?void 0:e.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,""),r.formInfo.insured.certNo=null==(a=r.formInfo.insured.certNo)?void 0:a.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),A((()=>r.formInfo.holder),(()=>{r.formInfo.insured.relationToHolder===$.SELF&&Object.assign(r.formInfo.insured,r.formInfo.holder)}),{deep:!0,immediate:!0}),A((()=>r.formInfo.insured.certNo),(()=>{var e,a;let l=!1;d(r.formInfo.insured.certNo)&&(l=!0),null==(a=null==(e=r.formInfo)?void 0:e.packageProductList)||a.forEach((e=>{if(l){W(e,r.formInfo.insured.certNo)||(e.disabled=!0,e.value=K.UN_INSURE)}else e.disabled=!1}))})),l({validateForm:()=>new Promise(((e,a)=>{null==s||s.value.validate().then((()=>{e("")}),(e=>{a(e)}))})),previewFile:e=>{c.value=e,i.value=!0},reEditForm:()=>{m.value=!1},isAgreeFile:m,onSubmit:B}),(a,l)=>{const o=w("ProField"),d=w("van-button"),m=w("ProRadioButton"),I=w("van-switch"),g=w("ProForm"),D=w("van-config-provider");return p(),N(D,{"theme-vars":v(M)},{default:_((()=>[k(g,{ref_key:"formRef",ref:s},{default:_((()=>{var a,s,g,w,D,x,A,H,M,R;return[k(n),h("div",Ke,[ze,(null==(a=t.formAuth)?void 0:a.holderNameDisable)?(p(),N(o,{key:0,label:"姓名",class:"pro-field","is-view":!0},{input:_((()=>[P(b(v(Q)(v(r).formInfo.holder.name)),1)])),_:1})):(p(),N(o,{key:1,modelValue:v(r).formInfo.holder.name,"onUpdate:modelValue":l[0]||(l[0]=e=>v(r).formInfo.holder.name=e),label:"姓名",name:"name",required:"",placeholder:"请输入姓名",maxlength:"50",rules:[{validator:C}],"custom-class":"custom-class-name"},null,8,["modelValue","rules"])),(null==(s=t.formAuth)?void 0:s.holderCertDisable)?(p(),N(o,{key:2,label:"证件号码",class:"pro-field","is-view":!0},{input:_((()=>[P(b(v(Y)(v(r).formInfo.holder.certNo)),1)])),_:1})):(p(),N(o,{key:3,modelValue:v(r).formInfo.holder.certNo,"onUpdate:modelValue":l[1]||(l[1]=e=>v(r).formInfo.holder.certNo=e),label:"证件号码",name:"certNo",required:"",placeholder:"请输入身份证号",maxlength:"18","validate-type":[v(u).ID_CARD],"custom-class":"custom-class-certNo"},null,8,["modelValue","validate-type"])),(null==(g=t.formAuth)?void 0:g.holderMobileDisable)?(p(),N(o,{key:4,label:"手机号",class:"pro-field","is-view":!0},{input:_((()=>[P(b(v(Z)(v(r).formInfo.holder.mobile)),1)])),_:1})):(p(),N(o,{key:5,modelValue:v(r).formInfo.holder.mobile,"onUpdate:modelValue":l[2]||(l[2]=e=>v(r).formInfo.holder.mobile=e),label:"手机号",name:"mobile",required:"",placeholder:"请输入手机号",type:"digit",maxlength:"11","validate-type":[v(u).PHONE],"custom-class":"custom-class-mobile"},null,8,["modelValue","validate-type"])),(null==(w=t.formAuth)?void 0:w.holderMobileDisable)?U("",!0):(p(),N(o,{key:6,modelValue:v(r).formInfo.holder.mobileSmsCode,"onUpdate:modelValue":l[3]||(l[3]=e=>v(r).formInfo.holder.mobileSmsCode=e),label:"验证码",name:"mobileSmsCode",type:"digit",required:"",rules:[{validator:le,message:"请输入正确的验证码"}],"input-align":"left",placeholder:"请输入验证码","error-message-align":"left",maxlength:"6","validate-type":[v(u).SMS_CODE],"custom-class":"custom-class-mobileSmsCode"},{extra:_((()=>[k(d,{class:S(["sms-code",{"count-down":y.value>0}]),size:"small",type:"primary",disabled:!v(T),onClick:E},{default:_((()=>[P(b(V.value),1)])),_:1},8,["class","disabled"])])),_:1},8,["modelValue","rules","validate-type"]))]),k(n),h("div",Je,[Xe,k(o,{modelValue:v(r).formInfo.insured.relationToHolder,"onUpdate:modelValue":l[5]||(l[5]=e=>v(r).formInfo.insured.relationToHolder=e),class:"relation-to-Holder",label:"",name:"relationToHolder",placeholder:"请选择",onClick:ae},{input:_((()=>{var e;return[k(m,{modelValue:v(r).formInfo.insured.relationToHolder,"onUpdate:modelValue":l[4]||(l[4]=e=>v(r).formInfo.insured.relationToHolder=e),disabled:null==(e=t.formAuth)?void 0:e.relationToHolderDisable,options:v(z)},null,8,["modelValue","disabled","options"])]})),_:1},8,["modelValue"])]),k(n),h("div",Ge,[We,(null==(D=t.formAuth)?void 0:D.insuredNameDisable)?(p(),N(o,{key:0,label:"姓名",class:"pro-field","is-view":!0},{input:_((()=>[P(b(v(Q)(v(r).formInfo.insured.name)),1)])),_:1})):U("",!0),(null==(x=t.formAuth)?void 0:x.insuredNameDisable)||v(O)?U("",!0):(p(),N(o,{key:1,modelValue:v(r).formInfo.insured.name,"onUpdate:modelValue":l[6]||(l[6]=e=>v(r).formInfo.insured.name=e),label:"姓名",name:"name",required:"",maxlength:"50",rules:[{validator:C}]},null,8,["modelValue","rules"])),(null==(A=t.formAuth)?void 0:A.insuredCertDisable)?(p(),N(o,{key:2,label:"证件号码",class:"pro-field","is-view":!0},{input:_((()=>[P(b(v(Y)(v(r).formInfo.insured.certNo)),1)])),_:1})):U("",!0),(null==(H=t.formAuth)?void 0:H.insuredCertDisable)||v(O)?U("",!0):(p(),N(o,{key:3,modelValue:v(r).formInfo.insured.certNo,"onUpdate:modelValue":l[7]||(l[7]=e=>v(r).formInfo.insured.certNo=e),label:"证件号码",name:"certNo",required:"",placeholder:"请输入身份证号",maxlength:"20","validate-type":[v(u).ID_CARD]},null,8,["modelValue","validate-type"])),k(o,{modelValue:v(r).formInfo.insured.socialFlag,"onUpdate:modelValue":l[9]||(l[9]=e=>v(r).formInfo.insured.socialFlag=e),label:"有无社保",name:"name",required:"",placeholder:"请选择"},{input:_((()=>{var e;return[k(m,{modelValue:v(r).formInfo.insured.socialFlag,"onUpdate:modelValue":l[8]||(l[8]=e=>v(r).formInfo.insured.socialFlag=e),disabled:null==(e=t.formAuth)?void 0:e.insuredSocialDisable,options:v(J)},null,8,["modelValue","disabled","options"])]})),_:1},8,["modelValue"])]),k(n),e.isShowPackage?(p(),f("div",Qe,[k(Re,{"package-product-list":null==(M=e.formInfo)?void 0:M.packageProductList},null,8,["package-product-list"])])):U("",!0),k(n),h("div",Ye,[(null==(R=t.formAuth)?void 0:R.paymentFrequencyDisable)?U("",!0):(p(),N(o,{key:0,modelValue:v(r).formInfo.paymentFrequency,"onUpdate:modelValue":l[11]||(l[11]=e=>v(r).formInfo.paymentFrequency=e),label:"交费方式",name:"paymentFrequency",required:"",placeholder:"请选择","error-message":"请选择交费方式"},{input:_((()=>{var e;return[k(m,{modelValue:v(r).formInfo.paymentFrequency,"onUpdate:modelValue":l[10]||(l[10]=e=>v(r).formInfo.paymentFrequency=e),disabled:null==(e=t.formAuth)?void 0:e.paymentFrequencyDisable,options:v(F)},null,8,["modelValue","disabled","options"])]})),_:1},8,["modelValue"])),k(n),k(o,{modelValue:v(r).formInfo.paymentMethod,"onUpdate:modelValue":l[13]||(l[13]=e=>v(r).formInfo.paymentMethod=e),label:"支付方式",name:"paymentMethod",required:"",placeholder:"请选择","custom-class":"custom-class-paymentMethod","error-message":"请选择支付方式"},{input:_((()=>{var e;return[k(m,{modelValue:v(r).formInfo.paymentMethod,"onUpdate:modelValue":l[12]||(l[12]=e=>v(r).formInfo.paymentMethod=e),disabled:null==(e=t.formAuth)?void 0:e.paymentDisable,options:v(L)},null,8,["modelValue","disabled","options"])]})),_:1},8,["modelValue"]),k(n),h("div",Ze,[k(o,{label:"开通自主重新投保",class:"pro-field",name:"renewalDK",placeholder:"请选择",border:!1},{input:_((()=>{var e;return[k(I,{modelValue:v(r).formInfo.renewalDK,"onUpdate:modelValue":l[14]||(l[14]=e=>v(r).formInfo.renewalDK=e),disabled:null==(e=t.formAuth)?void 0:e.renewalDKDisable},null,8,["modelValue","disabled"])]})),_:1}),ea])]),k(n),k(ne,{show:i.value,"onUpdate:show":l[15]||(l[15]=e=>i.value=e),"content-list":v(j).concat(v(q)),"active-index":c.value,text:"我已逐页阅读并确认告知内容",onSubmit:B},null,8,["show","content-list","active-index"])]})),_:1},512)])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-55da10e0"]]);const la={key:0,class:"page-waiting"},oa=["src"],ta=(e=>(L("data-v-812ee74a"),e=e(),O(),e))((()=>h("div",{class:"tips"},[h("p",null,"支付成功，承保中...")],-1)));var sa=t(m({props:{isShow:{type:Boolean,default:()=>{}}},setup(e){const a=e;return A((()=>a.isShow),(e=>{document.body.style.overflow=e?"hidden":"inherit"})),(e,l)=>a.isShow?(p(),f("div",la,[h("img",{class:"loading",src:v(re)},null,8,oa),ta])):U("",!0)}}),[["__scopeId","data-v-812ee74a"]]);const na=e=>(L("data-v-171c7312"),e=e(),O(),e),ra={key:0,class:"pro-modal"},ia=na((()=>h("div",{class:"pro-overlay"},null,-1))),da={class:"pro-modal-wrapper"},ua=["src"],ca={class:"pro-modal-body"},ma={class:"pro-modal-content"},pa=na((()=>h("p",{class:"tips"},"升级后的保障将于第二期保费扣费/缴费成功后生效",-1))),fa={class:"pro-modal-content"},va={class:"product-attachment-list"},ha=P(" 请您重点阅读并知晓 "),ba={key:0,class:"dun-hao"},ya={class:"pro-modal-close"},Ia=["src"];var ga=t(m({props:{orderNo:{type:String,default:""},tenantId:{type:String,default:""},isShow:{type:Boolean,default:()=>{}},upgradeCode:{type:String,default:""}},emits:["on-confirm","on-close"],setup(e,{emit:a}){const o=e,t=g(),s=g(),n=g(),r=g(),i=g([]),d=g(o.upgradeCode),u=()=>{a("on-close")},c=()=>{a("on-confirm")},m=()=>{const e=me({productCode:d.value,withInsureInfo:!0,tenantId:o.tenantId}),a=de({productCode:d.value}),l=ue({orderNo:o.orderNo,tenantId:o.tenantId});Promise.all([e,a,l]).then((([e,a,l])=>{"10000"===e.code&&(t.value=e.data,i.value=e.data.tenantProductInsureVO.attachmentVOList),"10000"===a.code&&(s.value=a.data),"10000"===l.code&&(n.value=l.data),(async()=>{try{const e=le({tenantId:o.tenantId,premium:r.value,orderDetail:n.value,productDetail:t.value,insureDetail:s.value,successJumpUrl:"",iseeBizNo:""},oe),a=await ce(e),{code:l,data:i}=a;"10000"===l&&(r.value=i.installmentPremium)}catch(e){}})()}))};return A((()=>o.isShow),(e=>{d.value=o.upgradeCode,e?(document.body.style.overflow="hidden",m()):document.body.style.overflow="inherit"})),(e,a)=>{const t=w("ProPDFviewer");return o.isShow?(p(),f("div",ra,[ia,h("div",da,[h("img",{class:"cover",src:v(l)},null,8,ua),h("div",ca,[h("div",ma,[h("p",null,"每月保费仅需"+b(v(ae)(r.value||0))+"元，无需重复投保",1),pa]),h("div",{class:"pro-modal-btn",onClick:c},"一键升级"),h("div",fa,[h("div",va,[ha,(p(!0),f(D,null,C(i.value,((e,a)=>(p(),N(t,{key:a,class:"file-name",title:`《${e.attachmentName}》`,content:e.attachmentUri,type:"pdf"},{default:_((()=>[a!==(i.value||[]).length-1?(p(),f("span",ba,"、")):U("",!0)])),_:2},1032,["title","content"])))),128))])])]),h("div",ya,[h("img",{src:v(ie),onClick:u},null,8,Ia)])])])):U("",!0)}}}),[["__scopeId","data-v-171c7312"]]);const wa={class:"header"},Va=["src"],ka={class:"content"},_a=(e=>(L("data-v-043963d8"),e=e(),O(),e))((()=>h("h4",null,"温馨提示，您已进入投保流程：",-1))),Da=P(" 请仔细阅读免责条款、投保须知等信息，请您重点阅读并知晓 "),Ca=["onClick"],Na=P(" ，为维护您的合法权益，您的操作轨迹将被记录。 "),Pa={class:"footer"},Sa=P(" 好的 "),Ua={key:0};var Fa=t(m({props:{productDetail:{type:Object,default:()=>{}}},setup(e){const a=e,l=new c({source:"sessionStorage"}),t=g(!1),s=g(!1),n=j({time:4e3,onFinish:()=>{l.set("PRENOTICE-isShow","1"),t.value=!1}}),r=g(),i=I((()=>{var e,l;return null==(l=null==(e=a.productDetail)?void 0:e.tenantProductInsureVO)?void 0:l.attachmentVOList.filter((e=>"个人信息保护政策"===e.attachmentName))})),d=I((()=>n.current.value.seconds));return T((()=>{t.value=!0,n.start()})),(e,a)=>{const l=w("VanButton"),n=w("ProPopup"),u=w("ProFilePreview");return p(),f(D,null,[k(n,{class:"pre-notice-wrap",show:t.value,closeable:!1,height:45},{default:_((()=>[h("div",wa,[h("img",{src:v(o)},null,8,Va)]),h("div",ka,[_a,h("p",null,[Da,(p(!0),f(D,null,C(v(i),((e,a)=>(p(),f("span",{key:a,class:"file-name",onClick:a=>{return l=e.attachmentUri,s.value=!s.value,void(r.value=l);var l}}," 《"+b(e.attachmentName)+"》 ",9,Ca)))),128)),Na])]),h("div",Pa,[k(l,{type:"primary",block:"",round:""},{default:_((()=>[Sa,v(d)?(p(),f("span",Ua,b(v(d))+"s",1)):U("",!0)])),_:1})])])),_:1},8,["show"]),k(n,{show:s.value,"onUpdate:show":a[0]||(a[0]=e=>s.value=e),class:"pre-notice-wrap","close-icon":"close",position:"bottom",style:{height:"600px",paddingTop:"40px"}},{default:_((()=>[k(u,{content:r.value,type:"pdf"},null,8,["content"])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-043963d8"]]);const La={class:"list"},Oa={class:"item"},qa={class:"footer"},xa=P("部分为是"),Aa=P("全部为否"),Ha=m({props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealth"],setup(e,{emit:a}){const l=e,o=g(l.show),t=g(l.activeIndex),s=I((()=>{var e;return null==(e=l.contentList[t.value])?void 0:e.attachmentUri})),n=g(!0),r=e=>{n.value=!1,a("update:show",!1),a("onConfirmHealth",e)};return A((()=>l),(()=>{o.value=l.show,t.value=l.activeIndex}),{deep:!0,immediate:!0}),(l,i)=>{const d=w("ProTab"),u=w("ProFilePreview"),c=w("VanButton"),m=w("van-config-provider"),f=w("ProPopup");return p(),N(f,{show:o.value,"onUpdate:show":i[3]||(i[3]=e=>o.value=e),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:i[4]||(i[4]=e=>{n.value&&a("onCloseHealth")})},{default:_((()=>[k(m,{"theme-vars":v(M),class:"custom-provider"},{default:_((()=>[o.value?(p(),N(d,{key:0,active:t.value,"onUpdate:active":i[0]||(i[0]=e=>t.value=e),list:e.contentList.map(((e,a)=>({title:e.attachmentName,slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):U("",!0),h("div",La,[h("div",Oa,[(p(),N(u,{key:v(s),content:v(s),type:"pdf"},null,8,["content"]))])]),h("div",qa,[k(c,{type:"primary",block:"",round:"",onClick:i[1]||(i[1]=e=>r("N"))},{default:_((()=>[xa])),_:1}),k(c,{type:"primary",plain:"",block:"",round:"",onClick:i[2]||(i[2]=e=>r("allFalse"))},{default:_((()=>[Aa])),_:1})])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}}),ja={holderNameDisable:!0,holderCertDisable:!0,holderMobileDisable:!0,holderSocialDisable:!0,relationToHolderDisable:!0,insuredNameDisable:!0,insuredCertDisable:!0,insuredSocialDisable:!0,paymentDisable:!0,renewalDKDisable:!0,paymentFrequencyDisable:!0},Ta={...ja,holderNameDisable:!1,holderCertDisable:!1,holderMobileDisable:!1,holderSocialDisable:!1,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1},Ba={...ja};export{ve as B,Ie as D,Ce as G,aa as H,Fa as P,Be as S,ga as U,sa as W,Ha as _,Ta as a,ja as d,Ba as p};
