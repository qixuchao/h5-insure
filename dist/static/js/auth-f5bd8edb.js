import{c as e,v as a,u as l,H as t}from"./check-detail-fc12290b.js";import{_ as o,e as s,i as n,a as r,a7 as i,I as d,V as u,S as c}from"./index-823b7915.js";import{m as v,t as m,C as p,F as f,E as h,N as y,r as b,a0 as g,e as I,S as k,s as w,ah as C,U as P,x as _,I as V,J as D,O as S,z as N,v as O,H as x,L as U,a6 as F,a7 as L,_ as A,P as H,T,ax as j,o as R,d as M}from"./vendor-fd650291.js";import{C as q,h as B,i as E,R as $,I as Y,a as z,j as J,S as K,g as W}from"./infoCollection-15d1d038.js";import{P as X}from"./index-2715c7bd.js";import{t as G}from"./theme-3c294048.js";import{A as Q}from"./bankCard-da82df23.js";import{c as Z,n as ee,i as ae,m as le,d as te,e as oe,f as se,h as ne}from"./utils-19038c4d.js";import{s as re,c as ie}from"./phoneVerify-7c2a1f6d.js";import{_ as de}from"./index-8434b110.js";import{L as ue}from"./loading-1c9c1d7b.js";import{c as ce}from"./close-bad1ffb4.js";import{i as ve,g as me,e as pe}from"./trial-46e5d06e.js";import{p as fe}from"./product-9ad33e98.js";const he=["src"],ye=["src"];var be=o(v({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""}},setup(a){const l=a;return(a,t)=>l.isCheck?(m(),p("img",{key:0,src:f(e),class:"banner"},null,8,he)):(m(),p("img",{key:1,src:l.url,class:"banner"},null,8,ye))}}),[["__scopeId","data-v-574c4075"]]);const ge={class:"product-desc"},Ie={class:"title"},ke={class:"desc"};var we=o(v({props:{productName:{type:String,default:""},productDesc:{type:String,default:""}},setup:e=>(a,l)=>(m(),p("div",ge,[h("div",Ie,y(e.productName),1),h("div",ke,y(e.productDesc),1)]))}),[["__scopeId","data-v-4bd6106c"]]);const Ce={class:"guarantee-list"},Pe={key:0,class:"plan-list"},_e=["onClick"],Ve={class:"basic"},De={class:"feerate-view"},Se=(e=>(F("data-v-5150e01d"),e=e(),L(),e))((()=>h("span",null,"查看保费",-1))),Ne={class:"guarantee-detail"},Oe={key:0,class:"plan-list"},xe=["onClick"],Ue={key:1},Fe={class:"extinfo-info-list"},Le={class:"title"},Ae={class:"content"};var He=o(v({props:{dataSource:{type:Object,default:()=>{}},showConfig:{type:Object,default:()=>{}},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:10},activePlanCode:{type:String,default:""},isMultiplePlan:{type:Boolean,default:!1}},emits:["update-active-plan"],setup(e,{emit:a}){var l;const t=e,o=b(null==(l=t.dataSource)?void 0:l.planList),r=b(t.activePlanCode);g((()=>t.dataSource),(()=>{var e;t.isMultiplePlan&&(o.value=null==(e=t.dataSource)?void 0:e.planList)}),{immediate:!0});const i=b([]),d=b([]);g([()=>t.dataSource,()=>t.activePlanCode],(()=>{var e,a;if(r.value=t.activePlanCode,t.isMultiplePlan){if(o.value&&o.value.length>0){let e=0;const a=o.value.findIndex((e=>e.planCode===r.value));a>-1&&(e=a),i.value=o.value[e].guaranteeItemVOS,d.value=o.value[e].extInfoVOList}}else i.value=null==(e=t.dataSource)?void 0:e.planInsureVO.guaranteeItemVOS,d.value=null==(a=t.dataSource)?void 0:a.planInsureVO.extInfoVOList}),{immediate:!0,deep:!0}),I((()=>{var e;return(null==(e=t.dataSource)?void 0:e.rateUri)||""}));const[u,c]=k(!1),v=I((()=>{var e;return!(!i.value||!(null==(e=i.value)?void 0:e.length))&&(i.value.length>t.count&&(!!t.isShowClose||!u.value))})),F=()=>{c()},L=I((()=>{var e;return i.value&&(null==(e=i.value)?void 0:e.length)?i.value.length<=t.count||u.value?i.value:i.value.slice(0,t.count):[]})),A=e=>{r.value=e,a("update-active-plan",e)},H=b(!1),T=()=>{H.value=!0};return(a,l)=>{const c=w("ProCell"),b=w("ProCard"),g=w("ProPopup"),I=C("dompurify-html");return m(),p(V,null,[h("div",Ce,[P(b,{title:"保障计划",link:"查看详情","show-divider":!0,"show-icon":!0,onLinkClick:T},{default:_((()=>{var a;return[e.isMultiplePlan?(m(),p("div",Pe,[(m(!0),p(V,null,D(o.value,((e,a)=>(m(),p("div",{key:`${e.planCode}_${a}`,class:S("plan-list-item "+(e.planCode===r.value?"plan-list-item-active":"")),onClick:a=>A(e.planCode)},[h("span",null,y(e.planName),1)],10,_e)))),128))])):N("",!0),h("div",Ve,[(m(!0),p(V,null,D(f(L),((e,a)=>(m(),O(c,{key:a,class:"guarantee-item",title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128))]),f(v)?(m(),p("div",{key:1,class:"show-more",onClick:F},[x(y(f(u)?"收起":"查看更多")+" ",1),P(s,{name:"down",class:S(["icon",{showMore:f(u)}])},null,8,["class"])])):N("",!0),h("div",De,[h("span",null,y(null==(a=t.showConfig)?void 0:a.price),1),Se])]})),_:1})]),P(g,{show:H.value,"onUpdate:show":l[0]||(l[0]=e=>H.value=e),title:"保障详情",class:"guarantee-popup"},{default:_((()=>[h("div",Ne,[e.isMultiplePlan?(m(),p("div",Oe,[(m(!0),p(V,null,D(o.value,((e,a)=>(m(),p("div",{key:`${e.planCode}_${a}`,class:S("plan-list-item "+(e.planCode===r.value?"plan-list-item-active":"")),onClick:a=>A(e.planCode)},[h("span",null,y(e.planName),1)],10,xe)))),128))])):N("",!0),d.value&&d.value.length>0?(m(),p("div",Ue,[h("div",Fe,[(m(!0),p(V,null,D(d.value,((e,a)=>(m(),p("div",{key:a,class:"extinfo-info-list-item"},[h("span",null,y(e.name),1),h("span",null,y(e.description),1)])))),128))]),P(n)])):N("",!0),(m(!0),p(V,null,D(i.value,((e,a)=>(m(),p("div",{key:a,class:"guarantee-item"},[h("div",Le,[h("span",null,y(e.title),1),h("span",null,y(e.desc),1)]),U(h("div",Ae,null,512),[[I,e.content]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-5150e01d"]]);const Te={class:"question"},je=(e=>(F("data-v-32c878ed"),e=e(),L(),e))((()=>h("div",{class:"icon"},y("?"),-1))),Re={class:"title"};var Me=o(v({props:{name:{type:String,default:""},question:{type:String,default:""},answer:{type:String,default:""}},setup:e=>(a,l)=>{const t=w("van-collapse-item");return m(),O(t,{name:e.name,class:"com-question-item"},{title:_((()=>[h("div",Te,[je,h("div",Re,y(e.question),1)])])),default:_((()=>[x(" "+y(e.answer),1)])),_:1},8,["name"])}}),[["__scopeId","data-v-32c878ed"]]);const qe={class:"com-question"};var Be=o(v({props:{list:{type:Array,default:()=>[]}},setup(e){const a=e,[l,t]=k(!1),o=b([]),n=()=>{t()},r=I((()=>a.list.length<=4||l.value?a.list:a.list.slice(0,4)));return(a,t)=>{const i=w("van-collapse");return m(),p("div",qe,[P(i,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e)},{default:_((()=>[(m(!0),p(V,null,D(f(r),((e,a)=>(m(),O(Me,{key:a,name:a.toString(),question:e.title,answer:e.desc},null,8,["name","question","answer"])))),128))])),_:1},8,["modelValue"]),e.list.length>4?(m(),p("div",{key:0,class:"show-more",onClick:n},[x(y(f(l)?"收起":"展开")+" ",1),P(s,{name:"down",class:S(["icon",{showMore:f(l)}])},null,8,["class"])])):N("",!0)])}}}),[["__scopeId","data-v-3476d8ba"]]);const Ee={class:"spec"},$e=["src"],Ye={key:1,class:"spec"},ze=["src"];var Je=o(v({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""},detail:{type:Object,default:()=>{}}},setup(e,{expose:a}){const l=e,t=b(),o=b([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]);return a({handleClickTab:()=>{var e;return null==(e=t.value)?void 0:e.handleClickTab}}),(e,a)=>(m(),O(i,{ref_key:"scrollRef",ref:t,class:"tabs",list:o.value,sticky:"",scrollspy:""},{tab1:_((()=>{var e,a;return[h("div",Ee,[(m(!0),p(V,null,D((null==(a=null==(e=l.detail)?void 0:e.tenantProductInsureVO)?void 0:a.spec)||[],((e,a)=>(m(),p("img",{key:a,src:e,class:"detail-img"},null,8,$e)))),128)),P(n)])]})),tab2:_((()=>[P(r,{title:"理赔流程"},{default:_((()=>{var e,a,t,o,s,r,i,d;return[(null==(a=null==(e=l.detail)?void 0:e.tenantProductInsureVO)?void 0:a.settlementProcessVO.settlementProcessType)===f(q).WORD?(m(),O(X,{key:0,list:null==(s=null==(o=null==(t=l.detail)?void 0:t.tenantProductInsureVO)?void 0:o.settlementProcessVO)?void 0:s.settlementProcessList},null,8,["list"])):(m(),p("div",Ye,[(m(!0),p(V,null,D((null==(d=null==(i=null==(r=l.detail)?void 0:r.tenantProductInsureVO)?void 0:i.settlementProcessVO)?void 0:d.settlementProcessPicList)||[],((e,a)=>(m(),p("img",{key:a,src:e,class:"detail-img"},null,8,ze)))),128)),P(n)]))]})),_:1}),P(r,{title:"常见问题"},{default:_((()=>{var e,a;return[P(Be,{list:null==(a=null==(e=l.detail)?void 0:e.tenantProductInsureVO)?void 0:a.questionList},null,8,["list"])]})),_:1})])),tab3:_((()=>[A(e.$slots,"form",{},void 0,!0)])),_:3},8,["list"]))}}),[["__scopeId","data-v-2d02091d"]]);const Ke={class:"refueling-package-com"},We=(e=>(F("data-v-7cc672ae"),e=e(),L(),e))((()=>h("div",{class:"title"},"加油包",-1)));var Xe=o(v({props:{packageProductList:{type:Array,default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:3}},setup(e){const a=e,[l,t]=k(!1),o=I((()=>a.packageProductList.length>a.count&&(!!a.isShowClose||!l.value))),n=()=>{t()},r=I((()=>a.packageProductList.length<=a.count||l.value?a.packageProductList:a.packageProductList.slice(0,a.count)));return(e,a)=>{const t=w("ProRadioButton"),i=w("ProField"),d=w("ProForm");return m(),p("div",Ke,[We,P(d,{ref:"formRef"},{default:_((()=>[(m(!0),p(V,null,D(f(r),((e,a)=>(m(),O(i,{key:`${e.value}_${a}`,modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,label:e.packageName,required:"",placeholder:"请选择"},{input:_((()=>[P(t,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,options:f(B),disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","options","disabled"])])),_:2},1032,["modelValue","onUpdate:modelValue","label"])))),128)),f(o)?(m(),p("div",{key:0,class:"show-more",onClick:n},[x(y(f(l)?"收起":"查看更多")+" ",1),P(s,{name:"down",class:S(["icon",{showMore:f(l)}])},null,8,["class"])])):N("",!0)])),_:1},512)])}}}),[["__scopeId","data-v-7cc672ae"]]);const Ge=e=>(F("data-v-5b5f3948"),e=e(),L(),e),Qe={class:"holder container"},Ze=Ge((()=>h("div",{class:"title"},"投保人信息",-1))),ea={class:"insured-relation container"},aa=Ge((()=>h("div",{class:"title"},"为谁投保",-1))),la={class:"insured container"},ta=Ge((()=>h("div",{class:"title"},"被保人信息",-1))),oa={key:0,class:"container"},sa=Ge((()=>h("div",{class:"payment container"},null,-1)));var na=o(v({props:{disable:{type:Boolean,default:!1},formAuth:{type:Object,default:()=>{}},formInfo:{type:Object,default:()=>{}},payments:{type:Array,default:()=>[0,1]},paymentMethod:{type:Array,default:()=>[0,1]},productDetail:{type:Object,default:()=>{}},isShowPackage:{type:Boolean,default:!1}},emits:["onReset","onUpdate","onVerify"],setup(e,{expose:l,emit:t}){const o=e,s=b({}),r=H({formInfo:o.formInfo}),i=b(!1),c=b(0),v=b(!1),k=b(0),C=b("获取验证码"),V=b(!1),D=e=>!!a(e)||"请输入正确的姓名";I((()=>E.filter(((e,a)=>o.payments.includes(a))))),I((()=>Q.filter(((e,a)=>o.paymentMethod.includes(a)))));const U=I((()=>r.formInfo.insured.relationToHolder===$.SELF)),F=I((()=>{var e,a;return((null==(a=null==(e=o.productDetail)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList)||[]).filter((e=>"费率表"===e.attachmentName))})),L=I((()=>{var e,a;return((null==(a=null==(e=o.productDetail)?void 0:e.tenantProductInsureVO)?void 0:a.attachmentVOList)||[]).filter((e=>!["健康告知","费率表"].includes(e.attachmentName)))||[]})),A=I((()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(r.formInfo.holder.mobile))),j=()=>(v.value=!0,v),R=async()=>{k.value>0||null==s||s.value.validate("mobile").then((async()=>{const e=await re(r.formInfo.holder.mobile),{code:a,data:l}=e;"10000"===a&&(V.value=!0,T({message:"短信发送成功，请查收"}),(()=>{if(k.value>0)return;k.value=60;const e=()=>{C.value=`${k.value}s`,k.value-=1};e();const a=setInterval((()=>{0===k.value?(C.value="获取验证码",k.value=0,clearInterval(a)):e()}),1e3)})())}))},M=()=>{const{relationToHolder:e}=r.formInfo.insured;e===$.SELF?(r.formInfo.insured={certNo:r.formInfo.holder.certNo,name:r.formInfo.holder.name,socialFlag:r.formInfo.holder.socialFlag,relationToHolder:e},t("onReset")):(r.formInfo.insured={certNo:"",name:"",socialFlag:K.HAS,relationToHolder:e},t("onUpdate"))},q=e=>new Promise(((a,l)=>{e&&te(e)&&r.formInfo.holder.mobile?ie(r.formInfo.holder.mobile,r.formInfo.holder.mobileSmsCode).then((e=>{const{data:l}=e;a(!!l)})):a(!1)}));return g([()=>r.formInfo.holder.certNo,()=>r.formInfo.insured.certNo],(()=>{var e,a;r.formInfo.holder.certNo=null==(e=r.formInfo.holder.certNo)?void 0:e.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,""),r.formInfo.insured.certNo=null==(a=r.formInfo.insured.certNo)?void 0:a.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),g((()=>r.formInfo.holder),(()=>{r.formInfo.insured.relationToHolder===$.SELF&&Object.assign(r.formInfo.insured,r.formInfo.holder)}),{deep:!0,immediate:!0}),g((()=>r.formInfo.insured.certNo),(()=>{var e,a;let l=!1;d(r.formInfo.insured.certNo)&&(l=!0),null==(a=null==(e=r.formInfo)?void 0:e.packageProductList)||a.forEach((e=>{if(l){Z(e,r.formInfo.insured.certNo)||(e.disabled=!0,e.value=Y.UN_INSURE)}else e.disabled=!1}))})),l({validateForm:()=>new Promise(((e,a)=>{null==s||s.value.validate().then((()=>{e("")}),(()=>{a()}))})),previewFile:e=>{c.value=e,i.value=!0},reEditForm:()=>{v.value=!1},isAgreeFile:v,onSubmit:j}),(a,l)=>{const t=w("ProField"),d=w("van-button"),v=w("ProRadioButton"),b=w("ProForm"),g=w("van-config-provider");return m(),O(g,{"theme-vars":f(G)},{default:_((()=>[P(b,{ref_key:"formRef",ref:s},{default:_((()=>{var a,s,b,g,I,w,V,H,T,B,E,$;return[h("div",Qe,[Ze,(null==(a=o.formAuth)?void 0:a.holderNameDisable)?(m(),O(t,{key:0,label:"姓名",class:"pro-field","is-view":!0},{input:_((()=>[x(y(f(ee)(f(r).formInfo.holder.name)),1)])),_:1})):(m(),O(t,{key:1,modelValue:f(r).formInfo.holder.name,"onUpdate:modelValue":l[0]||(l[0]=e=>f(r).formInfo.holder.name=e),label:"姓名",name:"name",required:"",placeholder:"请输入姓名",maxlength:"50",rules:[{validator:D}]},null,8,["modelValue","rules"])),(null==(s=o.formAuth)?void 0:s.holderCertDisable)?(m(),O(t,{key:2,label:"证件号码",class:"pro-field","is-view":!0},{input:_((()=>[x(y(f(ae)(f(r).formInfo.holder.certNo)),1)])),_:1})):(m(),O(t,{key:3,modelValue:f(r).formInfo.holder.certNo,"onUpdate:modelValue":l[1]||(l[1]=e=>f(r).formInfo.holder.certNo=e),label:"证件号码",name:"certNo",required:"",placeholder:"请输入身份证号",maxlength:"18","validate-type":[f(u).ID_CARD]},null,8,["modelValue","validate-type"])),(null==(b=o.formAuth)?void 0:b.holderMobileDisable)?(m(),O(t,{key:4,label:"手机号",class:"pro-field","is-view":!0},{input:_((()=>[x(y(f(le)(f(r).formInfo.holder.mobile)),1)])),_:1})):(m(),O(t,{key:5,modelValue:f(r).formInfo.holder.mobile,"onUpdate:modelValue":l[2]||(l[2]=e=>f(r).formInfo.holder.mobile=e),label:"手机号",name:"mobile",required:"",placeholder:"请输入手机号",type:"digit",maxlength:"11","validate-type":[f(u).PHONE]},null,8,["modelValue","validate-type"])),(null==(g=o.formAuth)?void 0:g.holderMobileDisable)?N("",!0):(m(),O(t,{key:6,modelValue:f(r).formInfo.holder.mobileSmsCode,"onUpdate:modelValue":l[3]||(l[3]=e=>f(r).formInfo.holder.mobileSmsCode=e),label:"验证码",name:"mobileSmsCode",type:"digit",required:"",rules:[{validator:q,message:"请输入正确的验证码"}],"input-align":"left",placeholder:"请输入验证码","error-message-align":"left",maxlength:"6","validate-type":[f(u).SMS_CODE]},{extra:_((()=>[P(d,{class:S(["sms-code",{"count-down":k.value>0}]),size:"small",type:"primary",disabled:!f(A),onClick:R},{default:_((()=>[x(y(C.value),1)])),_:1},8,["class","disabled"])])),_:1},8,["modelValue","rules","validate-type"]))]),P(n),h("div",ea,[aa,P(t,{modelValue:f(r).formInfo.insured.relationToHolder,"onUpdate:modelValue":l[5]||(l[5]=e=>f(r).formInfo.insured.relationToHolder=e),class:"relation-to-Holder",label:"",name:"relationToHolder",placeholder:"请选择",onClick:M},{input:_((()=>{var e;return[P(v,{modelValue:f(r).formInfo.insured.relationToHolder,"onUpdate:modelValue":l[4]||(l[4]=e=>f(r).formInfo.insured.relationToHolder=e),disabled:null==(e=o.formAuth)?void 0:e.relationToHolderDisable,options:f(z)},null,8,["modelValue","disabled","options"])]})),_:1},8,["modelValue"])]),P(n),h("div",la,[ta,(null==(I=o.formAuth)?void 0:I.insuredNameDisable)?(m(),O(t,{key:0,label:"姓名",class:"pro-field","is-view":!0},{input:_((()=>[x(y(f(ee)(f(r).formInfo.insured.name)),1)])),_:1})):N("",!0),(null==(w=o.formAuth)?void 0:w.insuredNameDisable)||f(U)?N("",!0):(m(),O(t,{key:1,modelValue:f(r).formInfo.insured.name,"onUpdate:modelValue":l[6]||(l[6]=e=>f(r).formInfo.insured.name=e),label:"姓名",name:"name",required:"",maxlength:"50",rules:[{validator:D}]},null,8,["modelValue","rules"])),(null==(V=o.formAuth)?void 0:V.insuredCertDisable)?(m(),O(t,{key:2,label:"证件号码",class:"pro-field","is-view":!0},{input:_((()=>[x(y(f(ae)(f(r).formInfo.insured.certNo)),1)])),_:1})):N("",!0),(null==(H=o.formAuth)?void 0:H.insuredCertDisable)||f(U)?N("",!0):(m(),O(t,{key:3,modelValue:f(r).formInfo.insured.certNo,"onUpdate:modelValue":l[7]||(l[7]=e=>f(r).formInfo.insured.certNo=e),label:"证件号码",name:"certNo",required:"",placeholder:"请输入身份证号",maxlength:"20","validate-type":[f(u).ID_CARD]},null,8,["modelValue","validate-type"])),P(t,{modelValue:f(r).formInfo.insured.socialFlag,"onUpdate:modelValue":l[9]||(l[9]=e=>f(r).formInfo.insured.socialFlag=e),label:"有无社保",name:"name",required:"",placeholder:"请选择"},{input:_((()=>{var e;return[P(v,{modelValue:f(r).formInfo.insured.socialFlag,"onUpdate:modelValue":l[8]||(l[8]=e=>f(r).formInfo.insured.socialFlag=e),disabled:null==(e=o.formAuth)?void 0:e.insuredSocialDisable,options:f(J)},null,8,["modelValue","disabled","options"])]})),_:1},8,["modelValue"])]),e.isShowPackage&&Array.isArray(null==(T=e.formInfo)?void 0:T.packageProductList)&&(null==(E=null==(B=e.formInfo)?void 0:B.packageProductList)?void 0:E.length)>0?(m(),p("div",oa,[P(n),P(Xe,{"package-product-list":null==($=e.formInfo)?void 0:$.packageProductList},null,8,["package-product-list"])])):N("",!0),sa,P(de,{show:i.value,"onUpdate:show":l[10]||(l[10]=e=>i.value=e),"content-list":f(L).concat(f(F)),"active-index":c.value,text:"我已逐页阅读并确认告知内容",onSubmit:j},null,8,["show","content-list","active-index"])]})),_:1},512)])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-5b5f3948"]]);const ra={key:0,class:"page-waiting"},ia=["src"],da=(e=>(F("data-v-f8de4658"),e=e(),L(),e))((()=>h("div",{class:"tips"},[h("p",null,"支付成功，承保中...")],-1)));var ua=o(v({props:{isShow:{type:Boolean,default:()=>{}}},setup(e){const a=e;return g((()=>a.isShow),(e=>{document.body.style.overflow=e?"hidden":"inherit"})),(e,l)=>a.isShow?(m(),p("div",ra,[h("img",{class:"loading",src:f(ue)},null,8,ia),da])):N("",!0)}}),[["__scopeId","data-v-f8de4658"]]);const ca=e=>(F("data-v-6e6a8f5e"),e=e(),L(),e),va={key:0,class:"pro-modal"},ma=ca((()=>h("div",{class:"pro-overlay"},null,-1))),pa={class:"pro-modal-wrapper"},fa=["src"],ha={class:"pro-modal-body"},ya={class:"pro-modal-content"},ba=ca((()=>h("p",{class:"tips"},"升级后的保障将于第二期保费扣费/缴费成功后生效",-1))),ga={class:"pro-modal-content"},Ia={class:"product-attachment-list"},ka=x(" 请您重点阅读并知晓 "),wa={key:0,class:"dun-hao"},Ca={class:"pro-modal-close"},Pa=["src"];var _a=o(v({props:{orderNo:{type:String,default:""},tenantId:{type:String,default:""},isShow:{type:Boolean,default:()=>{}},upgradeCode:{type:String,default:""}},emits:["on-confirm","on-close"],setup(e,{emit:a}){const t=e,o=b(),s=b(),n=b(),r=b(),i=b([]),d=b(t.upgradeCode),u=()=>{a("on-close")},c=()=>{a("on-confirm")},v=()=>{const e=fe({productCode:d.value,withInsureInfo:!0,tenantId:t.tenantId}),a=ve({productCode:d.value}),l=me({orderNo:t.orderNo,tenantId:t.tenantId});Promise.all([e,a,l]).then((([e,a,l])=>{"10000"===e.code&&(o.value=e.data,i.value=e.data.tenantProductInsureVO.attachmentVOList),"10000"===a.code&&(s.value=a.data),"10000"===l.code&&(n.value=l.data),(async()=>{try{const e=se({tenantId:t.tenantId,premium:r.value,orderDetail:n.value,productDetail:o.value,insureDetail:s.value,successJumpUrl:"",iseeBizNo:""},ne),a=await pe(e),{code:l,data:i}=a;"10000"===l&&(r.value=i.installmentPremium)}catch(e){}})()}))};return g((()=>t.isShow),(e=>{d.value=t.upgradeCode,e?(document.body.style.overflow="hidden",v()):document.body.style.overflow="inherit"})),(e,a)=>{const o=w("ProPDFviewer");return t.isShow?(m(),p("div",va,[ma,h("div",pa,[h("img",{class:"cover",src:f(l)},null,8,fa),h("div",ha,[h("div",ya,[h("p",null,"每月保费仅需"+y(f(oe)(r.value||0))+"元，无需重复投保",1),ba]),h("div",{class:"pro-modal-btn",onClick:c},"一键升级"),h("div",ga,[h("div",Ia,[ka,(m(!0),p(V,null,D(i.value,((e,a)=>(m(),O(o,{key:a,class:"file-name",title:`《${e.attachmentName}》`,content:e.attachmentUri,type:"pdf"},{default:_((()=>[a!==(i.value||[]).length-1?(m(),p("span",wa,"、")):N("",!0)])),_:2},1032,["title","content"])))),128))])])]),h("div",Ca,[h("img",{src:f(ce),onClick:u},null,8,Pa)])])])):N("",!0)}}}),[["__scopeId","data-v-6e6a8f5e"]]);const Va={class:"header"},Da=["src"],Sa={class:"content"},Na=(e=>(F("data-v-b5fc84b4"),e=e(),L(),e))((()=>h("h4",null,"温馨提示，您已进入投保流程：",-1))),Oa=x(" 请仔细阅读免责条款、投保须知等信息，请您重点阅读并知晓 "),xa=["onClick"],Ua=x(" ，为维护您的合法权益，您的操作轨迹将被记录。 "),Fa={class:"footer"},La=x(" 好的 "),Aa={key:0};var Ha=o(v({props:{productDetail:{type:Object,default:()=>{}}},setup(e){const a=e,l=new c({source:"sessionStorage"}),o=b(!1),s=b(!1),n=j({time:4e3,onFinish:()=>{l.set("PRENOTICE-isShow","1"),o.value=!1}}),r=b(),i=I((()=>{var e,l;return((null==(l=null==(e=a.productDetail)?void 0:e.tenantProductInsureVO)?void 0:l.attachmentVOList)||[]).filter((e=>"个人信息保护政策"===e.attachmentName))})),d=I((()=>n.current.value.seconds));return R((()=>{o.value=!0,n.start()})),(e,a)=>{const l=w("VanButton"),n=w("ProPopup"),u=w("ProFilePreview");return m(),p(V,null,[P(n,{class:"pre-notice-wrap",show:o.value,closeable:!1,height:45},{default:_((()=>[h("div",Va,[h("img",{src:f(t)},null,8,Da)]),h("div",Sa,[Na,h("p",null,[Oa,(m(!0),p(V,null,D(f(i),((e,a)=>(m(),p("span",{key:a,class:"file-name",onClick:a=>{return l=e.attachmentUri,s.value=!s.value,void(r.value=l);var l}}," 《"+y(e.attachmentName)+"》 ",9,xa)))),128)),Ua])]),h("div",Fa,[P(l,{type:"primary",block:"",round:""},{default:_((()=>[La,f(d)?(m(),p("span",Aa,y(f(d))+"s",1)):N("",!0)])),_:1})])])),_:1},8,["show"]),P(n,{show:s.value,"onUpdate:show":a[0]||(a[0]=e=>s.value=e),class:"pre-notice-wrap","close-icon":"close",position:"bottom",style:{height:"600px",paddingTop:"40px"}},{default:_((()=>[P(u,{content:r.value,type:"pdf"},null,8,["content"])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-b5fc84b4"]]);const Ta={class:"item"},ja={class:"footer"},Ra=v({props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0}},emits:["update:show","submit","onCloseFilePreview"],setup(e,{emit:a}){const l=e,t=b(l.show),o=b(l.contentList.map(((e,a)=>({...e,disabled:!0,readDisabled:!0})))),s=b(l.activeIndex),n=b(0),r=b(null),i=I((()=>{var e,a;return null==(a=null==(e=o.value)?void 0:e[s.value])?void 0:a.attachmentUri})),d=I((()=>{var e;return null==(e=o.value[s.value])?void 0:e.readDisabled})),u=I((()=>!(s.value>=l.forceReadCound-1)&&(!(n.value>=l.forceReadCound)&&(n.value<l.forceReadCound&&s.value!==l.forceReadCound-1)))),c=()=>{s.value+=1},v=()=>{a("update:show",!1),a("submit")};g((()=>l),(()=>{t.value=l.show,s.value=l.activeIndex}),{deep:!0,immediate:!0});const p=e=>{e&&Math.floor(e.target.scrollHeight-e.target.scrollTop)===e.target.clientHeight&&o.value[s.value].readDisabled&&(o.value[s.value].disabled=!1,o.value[s.value].readDisabled=!1,o.value[s.value+1].disabled=!1,n.value+=1)};return g((()=>s.value),(()=>{l.show&&(n.value>=l.forceReadCound&&o.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),r.value&&(r.value.scrollTop=0))}),{immediate:!0}),(n,b)=>{const g=w("ProTab"),I=w("ProFilePreview"),k=w("VanButton"),C=w("van-config-provider"),V=w("ProPopup");return m(),O(V,{show:t.value,"onUpdate:show":b[1]||(b[1]=e=>t.value=e),class:"file-preview-popup-wrap",closeable:!1,onClose:b[2]||(b[2]=e=>a("onCloseFilePreview"))},{default:_((()=>[P(C,{"theme-vars":f(G),class:"custom-provider"},{default:_((()=>[t.value?(m(),O(g,{key:0,active:s.value,"onUpdate:active":b[0]||(b[0]=e=>s.value=e),list:o.value.map(((e,a)=>({title:e.attachmentName,disabled:a!=s.value&&(e.disabled||!1),slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):N("",!0),h("div",{ref_key:"previewRef",ref:r,class:"list",onScroll:p},[h("div",Ta,[(m(),O(I,{key:f(i),content:f(i),type:"pdf","forbid-click":!0},null,8,["content"]))])],544),h("div",ja,[f(u)?(m(),O(k,{key:0,disabled:f(d),type:"primary",block:"",round:"",onClick:c},{default:_((()=>[x(y(`${e.beforeReadOverText}(${s.value+1}/${e.forceReadCound})`),1)])),_:1},8,["disabled"])):(m(),O(k,{key:1,disabled:f(d),type:"primary",block:"",round:"",onClick:v},{default:_((()=>[x(y(l.text),1)])),_:1},8,["disabled"]))])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}});const Ma={class:"list"},qa={class:"item"},Ba={class:"footer"},Ea=x("部分为是"),$a=x("全部为否"),Ya=v({props:{show:{type:Boolean,default:!0},activeIndex:{default:0},contentList:{default:()=>[]}},emits:["update:show","onConfirmHealth","onCloseHealth"],setup(e,{emit:a}){const l=e,t=b(l.show),o=b(l.activeIndex),s=I((()=>{var e;return null==(e=l.contentList[o.value])?void 0:e.attachmentUri})),n=b(!0),r=e=>{n.value=!1,a("update:show",!1),a("onConfirmHealth",e)};return g((()=>l),(()=>{t.value=l.show,o.value=l.activeIndex}),{deep:!0,immediate:!0}),(l,i)=>{const d=w("ProTab"),u=w("ProFilePreview"),c=w("VanButton"),v=w("van-config-provider"),p=w("ProPopup");return m(),O(p,{show:t.value,"onUpdate:show":i[3]||(i[3]=e=>t.value=e),height:80,class:"health-notice-preview-popup-wrap",closeable:!1,onClose:i[4]||(i[4]=e=>{n.value&&a("onCloseHealth")})},{default:_((()=>[P(v,{"theme-vars":f(G),class:"custom-provider"},{default:_((()=>[t.value?(m(),O(d,{key:0,active:o.value,"onUpdate:active":i[0]||(i[0]=e=>o.value=e),list:e.contentList.map(((e,a)=>({title:e.attachmentName,slotName:`guarantee-${a}`}))),class:"tab"},null,8,["active","list"])):N("",!0),h("div",Ma,[h("div",qa,[(m(),O(u,{key:f(s),content:f(s),type:"pdf"},null,8,["content"]))])]),h("div",Ba,[P(c,{type:"primary",block:"",round:"",onClick:i[1]||(i[1]=e=>r("N"))},{default:_((()=>[Ea])),_:1}),P(c,{type:"primary",plain:"",block:"",round:"",onClick:i[2]||(i[2]=e=>r("allFalse"))},{default:_((()=>[$a])),_:1})])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}});const za=e=>(F("data-v-654d2e2c"),e=e(),L(),e),Ja={class:"com-payment-type"},Ka=za((()=>h("div",{class:"title"},"交费方式",-1))),Wa={class:"content"},Xa=[za((()=>h("div",{class:"pay-method"},[h("span",{class:"method"},y("按月交费")),h("span",{class:"acount"},y("共12期"))],-1)))],Ga=[za((()=>h("div",{class:"tip"},[h("span",null,y("比按月支付最高省")),x(),h("span",null,"16%")],-1))),za((()=>h("div",{class:"triangle"},null,-1))),za((()=>h("div",{class:"pay-method"},[h("span",{class:"method"},y("一次交清")),h("span",{class:"acount"},y("比月交保费省最高2014元"))],-1)))],Qa={class:"guarantee-date"},Za=za((()=>h("span",null,"保障期限",-1))),el={class:"guarantee-date"},al=za((()=>h("span",null,"实付保费",-1))),ll={class:"fee-text"};var tl=o(v({props:{showConfig:{type:Object,default:()=>{}},formInfo:{type:Object,default:()=>{}},productDetail:{type:Object,default:()=>{}}},emits:["onReset","onUpdate","onVerify"],setup(e,{expose:a,emit:l}){const t=e;b({}),b(!0);const o=H({formInfo:t.formInfo}),s=I((()=>M(new Date).add(1,"day").format("YYYY.MM.DD"))),n=I((()=>M(new Date).add(1,"year").format("YYYY.MM.DD"))),r=e=>{o.formInfo.paymentFrequency=e};return a({}),(e,a)=>{const l=w("ProDivider"),i=w("van-config-provider");return m(),O(i,{"theme-vars":f(G)},{default:_((()=>{var e;return[h("div",Ja,[Ka,h("div",Wa,[h("div",{class:S("com-payment-type-item "+(f(o).formInfo.paymentFrequency===f(W).MONTH?"active":"")),onClick:a[0]||(a[0]=e=>r(f(W).MONTH))},Xa,2),h("div",{class:S("com-payment-type-item "+(f(o).formInfo.paymentFrequency===f(W).YEAR?"active":"")),onClick:a[1]||(a[1]=e=>r(f(W).YEAR))},Ga,2)]),h("div",Qa,[Za,h("span",null,y(f(s))+" - "+y(f(n)),1)]),h("div",el,[al,h("span",ll,y(null==(e=t.showConfig)?void 0:e.price),1)])]),P(l)]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-654d2e2c"]]);const ol={holderNameDisable:!0,holderCertDisable:!0,holderMobileDisable:!0,holderSocialDisable:!0,relationToHolderDisable:!0,insuredNameDisable:!0,insuredCertDisable:!0,insuredSocialDisable:!0,paymentDisable:!0,renewalDKDisable:!0,paymentFrequencyDisable:!0},sl={...ol,holderNameDisable:!1,holderCertDisable:!1,holderMobileDisable:!1,holderSocialDisable:!1,relationToHolderDisable:!1,insuredNameDisable:!1,insuredCertDisable:!1,insuredSocialDisable:!1,paymentDisable:!1,paymentFrequencyDisable:!1,renewalDKDisable:!1};export{be as B,we as D,He as G,na as H,tl as P,Je as S,_a as U,ua as W,Ya as _,Ha as a,Ra as b,sl as c,ol as d};
