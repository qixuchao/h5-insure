import{_ as e,d as a,S as t,E as l,c as n,g as r,f as s,w as o,F as i,h as d,e as c,m as u,n as p,t as v,V as m,L as f,j as h,l as g,ao as y,at as A,X as I,Y as _,i as C,bY as b,c0 as L,bp as O,r as k,z as x,bt as E,c7 as T,A as P,bk as R,I as S,a as w,am as D,c8 as j,bZ as N,u as F,J as V,b2 as H,a8 as B,b$ as U,aD as M,H as q,ag as W,G as z,bR as G,T as Q,ai as $,c9 as J,bT as Y,c1 as Z}from"./index-9effc651.js";import{d as K}from"./debounce-910624d9.js";import{i as X,b as ee,p as ae,g as te}from"./trial-190aded3.js";import{b as le,c as ne}from"./product-2ff0d785.js";import{n as re}from"./nextStep-f90a0760.js";import{g as se,C as oe,I as ie,S as de,O as ce,l as ue}from"./infoCollection-d7c085e7.js";import{u as pe,P as ve}from"./index-0f3c6ca1.js";import{v as me,g as fe,r as he,t as ge}from"./utils-0e5f27ff.js";import{v as ye}from"./validator-5a13dc82.js";import{_ as Ae}from"./index-d113338f.js";import{s as Ie,c as _e}from"./phoneVerify-6401d697.js";import Ce from"./index-9a9c573a.js";import{c as be,t as Le,_ as Oe}from"./index-b186ef65.js";import"./trial-c6e14b52.js";import"./pdfh5-008ca364.js";import"./isObject-cd478a85.js";import"./isObjectLike-f858f31d.js";import"./core-82f38c5d.js";import"./constant-c3f28a3b.js";import"./_nodeUtil-ef4cea77.js";const ke={class:"refueling-package-com"},xe=(e=>(I("data-v-7e34c868"),e=e(),_(),e))((()=>C("div",{class:"title"},"加油包",-1)));var Ee=e(a({props:{packageProductList:{type:Array,default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{type:Number,default:3}},setup(e){const a=e,[I,_]=t(!1),C=l((()=>a.packageProductList.length>a.count&&(!!a.isShowClose||!I.value))),b=()=>{_()},L=l((()=>a.packageProductList.length<=a.count||I.value?a.packageProductList:a.packageProductList.slice(0,a.count)));return(e,a)=>{const t=g,l=y,_=A;return n(),r("div",ke,[xe,s(_,{ref:"formRef"},{default:o((()=>[(n(!0),r(i,null,d(u(L),((e,a)=>(n(),c(l,{key:`${e.value}_${a}`,modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,label:e.packageName,required:"",placeholder:"请选择"},{input:o((()=>[s(t,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,options:u(se),disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","options","disabled"])])),_:2},1032,["modelValue","onUpdate:modelValue","label"])))),128)),u(C)?(n(),r("div",{key:0,class:"show-more",onClick:b},[p(v(u(I)?"收起":"查看更多")+" ",1),s(m,{name:"down",class:f(["icon",{showMore:u(I)}])},null,8,["class"])])):h("",!0)])),_:1},512)])}}}),[["__scopeId","data-v-7e34c868"]]);const Te={class:"spec"},Pe={class:"rich-text"},Re={key:1,class:"spec"},Se={class:"rich-text"},we={key:1,class:"spec"},De={class:"rich-text"},je=a({props:{dataSource:{default:()=>({SPECIAL_FEATURE:[],CLAIM_CASE:{},CLAIM_FLOW:[],ISSUE_NOTICE:[],FAQ:[]})}},setup(e,{expose:a}){const t=e,p=b((()=>L((()=>import("./index-9effc651.js").then((function(e){return e.cG}))),["static/js/index-9effc651.js","static/css/index-b48bd80e.css","static/js/pdfh5-008ca364.js"])));b((()=>L((()=>import("./index-0398240f.js")),["static/js/index-0398240f.js","static/css/index-f22f2764.css","static/js/index-9effc651.js","static/css/index-b48bd80e.css","static/js/pdfh5-008ca364.js"])));const v=b((()=>L((()=>import("./index-9effc651.js").then((function(e){return e.cE}))),["static/js/index-9effc651.js","static/css/index-b48bd80e.css","static/js/pdfh5-008ca364.js"]))),f=b((()=>L((()=>import("./index-97c4f856.js")),["static/js/index-97c4f856.js","static/css/index-7b3feb06.css","static/js/index-9effc651.js","static/css/index-b48bd80e.css","static/js/pdfh5-008ca364.js"]))),g=b((()=>L((()=>import("./index-c228a26c.js")),["static/js/index-c228a26c.js","static/css/index-88dda73f.css","static/js/index-9effc651.js","static/css/index-b48bd80e.css","static/js/pdfh5-008ca364.js","static/js/index-60cc44b5.js"]))),{dataSource:y}=O(t),A=k(),I=k([{title:"产品亮点",slotName:"tab1"},{title:"理赔说明",slotName:"tab2"},{title:"我要投保",slotName:"tab3"}]),_=l((()=>{var e,a;return null==(a=null==(e=y.value.SPECIAL_FEATURE)?void 0:e.spec)?void 0:a.length})),w=l((()=>{var e,a,t,l;const n=null==(e=y.value.CLAIM_FLOW)?void 0:e.processCaseType;return!!(n===oe.WORD&&(null==(a=y.value.CLAIM_FLOW)?void 0:a.processContent)||n===oe.IMAGE&&(null==(l=null==(t=y.value.CLAIM_FLOW)?void 0:t.processPicList)?void 0:l.length))})),D=l((()=>{var e,a,t,l,n;const r=null==(a=null==(e=y.value)?void 0:e.CLAIM_CASE)?void 0:a.claimCaseType;return!!(r===oe.WORD&&(null==(t=y.value.CLAIM_CASE)?void 0:t.claimContent)||r===oe.IMAGE&&(null==(n=null==(l=y.value.CLAIM_CASE)?void 0:l.claimCasePicList)?void 0:n.length))})),j=l((()=>{var e,a;return null==(a=null==(e=y.value)?void 0:e.FAQ)?void 0:a.length})),N=l((()=>{var e,a;return null==(a=null==(e=y.value)?void 0:e.FAQ)?void 0:a.length})),F=l((()=>{let e=[...I.value];return _.value||(e=e.filter((e=>"tab1"!==e.slotName))),w.value||D.value||(e=e.filter((e=>"tab2"!==e.slotName))),e}));return a({handleClickTab:()=>{var e;return null==(e=A.value)?void 0:e.handleClickTab}}),(e,a)=>{const t=S,l=m,I=x("dompurify-html");return n(),c(u(p),{ref_key:"scrollRef",ref:A,class:"tabs",list:u(F),sticky:"",scrollspy:""},E({tab3:o((()=>[R(e.$slots,"form")])),_:2},[u(_)?{name:"tab1",fn:o((()=>{var e;return[C("div",Te,[(n(!0),r(i,null,d((null==(e=u(y).SPECIAL_FEATURE)?void 0:e.spec)||[],((e,a)=>(n(),c(T,{key:a},{fallback:o((()=>[s(l,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:o((()=>[(n(),c(t,{key:a,class:"detail-img",width:"100%",src:e},null,8,["src"]))])),_:2},1024)))),128)),s(u(v))])]}))}:void 0,u(w)||u(D)||u(j)||u(N)?{name:"tab2",fn:o((()=>{var e,a;return[u(w)?(n(),r(i,{key:0},[(null==(e=u(y).CLAIM_FLOW)?void 0:e.processCaseType)===u(oe).WORD?(n(),c(u(f),{key:0,class:"tab-card",title:"理赔说明"},{default:o((()=>{var e;return[P(C("div",Pe,null,512),[[I,null==(e=u(y).CLAIM_FLOW)?void 0:e.processContent]])]})),_:1})):(n(),r("div",Re,[(n(),c(T,null,{fallback:o((()=>[s(l,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:o((()=>{var e;return[(n(!0),r(i,null,d((null==(e=u(y).CLAIM_FLOW)?void 0:e.processCasePicList)||[],((e,a)=>(n(),c(t,{key:a,width:"100%",src:e,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),s(u(v))],64)):h("",!0),u(D)?(n(),r(i,{key:1},[(null==(a=u(y).CLAIM_CASE)?void 0:a.claimCaseType)===u(oe).WORD?(n(),c(u(f),{key:0,class:"tab-card",title:"理赔案例"},{default:o((()=>{var e;return[P(C("div",Se,null,512),[[I,null==(e=u(y).CLAIM_CASE)?void 0:e.claimContent]])]})),_:1})):(n(),r("div",we,[(n(),c(T,null,{fallback:o((()=>[s(l,{name:"img",style:{"font-size":"40px",margin:"10px auto",display:"block"}})])),default:o((()=>{var e;return[(n(!0),r(i,null,d((null==(e=u(y).CLAIM_CASE)?void 0:e.claimCasePicList)||[],((e,a)=>(n(),c(t,{key:a,width:"100%",src:e,class:"detail-img"},null,8,["src"])))),128))]})),_:1}))])),s(u(v))],64)):h("",!0),u(j)?(n(),r(i,{key:2},[s(u(f),{class:"tab-card",title:"投保须知"},{default:o((()=>{var e;return[P(C("div",De,null,512),[[I,null==(e=u(y).ISSUE_NOTICE)?void 0:e.noticeContent]])]})),_:1}),s(u(v))],64)):h("",!0),u(N)?(n(),r(i,{key:3},[s(u(f),{title:"常见问题"},{default:o((()=>[s(u(g),{list:u(y).FAQ},null,8,["list"])])),_:1}),s(u(v))],64)):h("",!0)]}))}:void 0]),1032,["list"])}}});const Ne={class:"trial-button-wrap"},Fe={class:"footer-area"},Ve={class:"price"},He={key:0},Be=p("立即投保"),Ue=a({props:{premium:{default:0},tenantProductDetail:{default:()=>({})},planCode:{default:""},loadingText:{default:""},paymentFrequency:{default:""}},emits:["onClick"],setup(e,{emit:a}){const t=e,l=k(""),d=k("");return D([()=>t.premium,()=>t.tenantProductDetail,()=>t.planCode],(([e])=>{const{PREMIUM:a}=t.tenantProductDetail||{};let n={};(null==a?void 0:a.length)&&(n=(a||[]).find((e=>e.planCode===t.planCode))||{});const r=(n.data||[]).map((e=>e.paymentFrequency===t.paymentFrequency)),{premium:s,minActualUnit:o}=r||{};console.log("unit",r),e?(d.value=o,l.value=e&&`${e}`):d.value=s}),{deep:!0,immediate:!0}),(t,c)=>(n(),r("div",Ne,[C("div",Fe,[C("div",Ve,[e.loadingText?(n(),r("span",He,v(e.loadingText),1)):(n(),r(i,{key:1},[C("span",null,v(l.value),1),C("span",null,v(d.value),1)],64))]),s(Ce,{shadow:!1,class:"right",onClick:c[0]||(c[0]=e=>a("onClick"))},{default:o((()=>[R(t.$slots,"default",{},(()=>[Be]))])),_:3})])]))}});const Me=e=>(I("data-v-58c02e92"),e=e(),_(),e),qe={key:0},We=[Me((()=>C("div",{class:"__skeleton_short_content__"},[C("div",{class:"van-config-provider sk",style:{"--van-primary-color":"#0d6efe","--van-primary-color-light8":"#0d6efe80","--van-primary-color-light1":"#0d6efe10","--van-primary-color-light2":"#0d6efe20","--van-danger-color":"#FF3C10","--van-primary-background-color":"#0d6efe20","--van-button-primary-background-color":"#0d6efe","--van-button-primary-border-color":"#0d6efe","--van-checkbox-checked-bg-color":"#0d6efe10","--van-switch-on-background-color":"#0d6efe","--van-toast-default-padding":"14px","--van-linear-bg":"linear-gradient(to right, #0d6efe, rgba(13,150,254,1))","--van-popup-close-icon-margin":"20px","--van-popup-round-border-radius":"20px","--van-card-title":"#0d6efe","--van-card-cell-color":"#0d6efe80","--van-radio-checked-icon-color":"#0d6efe","--van-pro-check-radius":"40px"}},[C("div",{class:"page-internet-product-detail"},[C("div",{class:"info"},[C("div",{class:"van-image banner",style:{width:"100%",height:"223px"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},[C("img",{class:"van-image__img","data-src":"https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/common/20221222/e3719801cf6546449e18e06f3bbe8416/%E5%B0%8A%E4%BA%ABe%E7%94%9F.png?Expires=1676527379&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=tkscLe6oOZYjnRIA%2B7AiMS3bOs0%3D",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",lazy:"loaded",style:{background:"rgb(238, 238, 238)"}})]),C("div")]),C("div",{class:"guarantee-list"},[C("div",{class:"header"},[C("span",null,[C("span",{class:"sk-text",style:{"--fp":"14.86%","--sp":"85.14%","--lh":"18.4999px"}},"保障计划")]),C("span",null,[C("span",{class:"sk-text",style:{"--fp":"14.86%","--sp":"85.14%","--lh":"18.4999px"}},"查看详情")])]),C("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[C("div",{class:"cell-container"},[C("div",{class:"left-part large"},[C("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"一般医疗保险金")]),C("div",{class:"divider"}),C("div",{class:"right-part"},[C("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高300万")])])]),C("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[C("div",{class:"cell-container"},[C("div",{class:"left-part large"},[C("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"重大疾病医疗保险金")]),C("div",{class:"divider"}),C("div",{class:"right-part"},[C("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高600万")])])]),C("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[C("div",{class:"cell-container"},[C("div",{class:"left-part large"},[C("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"恶性肿瘤质子重离子医疗")]),C("div",{class:"divider"}),C("div",{class:"right-part"},[C("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高600万")])])]),C("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[C("div",{class:"cell-container"},[C("div",{class:"left-part large"},[C("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"恶性肿瘤院外特定药品费用医疗")]),C("div",{class:"divider"}),C("div",{class:"right-part"},[C("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高600万")])])]),C("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[C("div",{class:"cell-container"},[C("div",{class:"left-part large"},[C("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"恶性肿瘤特定器械耗材费用医疗责任 （适用于女性被保险人）")]),C("div",{class:"divider"}),C("div",{class:"right-part"},[C("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高100万")])])]),C("div",{class:"show-more"},[C("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"16.799999999999997px"}},"查看更多 "),C("svg",{class:"svg-icon icon-arrow-down-dobule icon icon"},[C("use",{"xlink:href":"#icon-arrow-down-dobule"})])]),C("div",{class:"feerate-view sk-border"},[C("span",null,[C("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"142.00元/年起")])])]),C("div",{class:"com-divider"}),C("div",{class:"tabs",sticky:"",scrollspy:""},[C("div",null,[C("div",{class:"van-sticky"},[C("div",{class:"van-tabs"},[C("div",{id:"tab-list",class:"tab-list"},[C("a",{class:"tab-title active",title:"产品亮点"},[C("span",{class:"sk-text",style:{"--fp":"31.82%","--sp":"68.18%","--lh":"43.9999px"}},"产品亮点")]),C("a",{class:"tab-title",title:"理赔说明"},[C("span",{class:"sk-text",style:{"--fp":"31.82%","--sp":"68.18%","--lh":"43.9999px"}},"理赔说明")]),C("a",{class:"tab-title",title:"我要投保"},[C("span",{class:"sk-text",style:{"--fp":"31.82%","--sp":"68.18%","--lh":"43.9999px"}},"我要投保")])])])])]),C("div",{class:"tab-content"},[C("div",{id:"tab1"},[C("div",{class:"spec"},[C("div",{class:"van-image detail-img",style:{width:"100%"}},[C("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",class:"van-image__img",style:{background:"rgb(238, 238, 238)"}})])])])])])])])],-1)))],ze={class:"page-internet-product-detail"},Ge={class:"info"},Qe={class:"custom-page-form"},$e=Me((()=>C("div",{class:"form-title"},"请填写投保信息",-1))),Je=p("立即投保"),Ye=Me((()=>C("div",{id:"xinaoDialog"},null,-1)));var Ze=e(a({setup(e){j(),b((()=>L((()=>import("./index-e636aaa6.js")),["static/js/index-e636aaa6.js","static/css/index-ea588f10.css","static/js/index-9effc651.js","static/css/index-b48bd80e.css","static/js/pdfh5-008ca364.js","static/js/theme-65292714.js","static/js/index-9a9c573a.js","static/css/index-19d9cc6b.css","static/js/utils-0e5f27ff.js","static/js/infoCollection-d7c085e7.js","static/js/trial-c6e14b52.js"])));const a=b((()=>L((()=>import("./index-70422b58.js")),["static/js/index-70422b58.js","static/css/index-c743ae40.css","static/js/index-9effc651.js","static/css/index-b48bd80e.css","static/js/pdfh5-008ca364.js","static/js/theme-65292714.js"]))),t=b((()=>L((()=>import("./index-4bce8178.js")),["static/js/index-4bce8178.js","static/css/index-eb476e97.css","static/js/index-9effc651.js","static/css/index-b48bd80e.css","static/js/pdfh5-008ca364.js","static/js/infoCollection-d7c085e7.js","static/js/trial-c6e14b52.js"])));b((()=>L((()=>import("./index-9a9c573a.js")),["static/js/index-9a9c573a.js","static/css/index-19d9cc6b.css","static/js/index-9effc651.js","static/css/index-b48bd80e.css","static/js/pdfh5-008ca364.js"]))),b((()=>L((()=>import("./index-de10d155.js")),["static/js/index-de10d155.js","static/css/index-6733e696.css","static/js/index-9effc651.js","static/css/index-b48bd80e.css","static/js/pdfh5-008ca364.js","static/js/infoCollection-d7c085e7.js","static/js/relativeTime-fde2a46e.js","static/js/validator-5a13dc82.js","static/js/useDicData-8bc6a182.js"]))),b((()=>L((()=>import("./index-372c41ae.js")),["static/js/index-372c41ae.js","static/css/index-a14d73ae.css","static/js/index-9effc651.js","static/css/index-b48bd80e.css","static/js/pdfh5-008ca364.js"])));const p=b((()=>L((()=>import("./index-88151cd4.js")),["static/js/index-88151cd4.js","static/css/index-607986ff.css","static/js/index-9effc651.js","static/css/index-b48bd80e.css","static/js/pdfh5-008ca364.js"]))),v=b((()=>L((()=>import("./index-f8b43a92.js")),["static/js/index-f8b43a92.js","static/css/index-b9ba3011.css","static/js/index-9effc651.js","static/css/index-b48bd80e.css","static/js/pdfh5-008ca364.js"]))),m=N();F();const f=w(),{productCode:g="",tenantId:y,agentCode:A="",agencyCode:I,saleChannelId:_,extraInfo:O,insurerCode:x,preview:E}=f.query;let T={};try{console.log("extInfo",decodeURIComponent(O)),T=JSON.parse(decodeURIComponent(O))}catch(ba){}const{openId:P}=T;k();const R=k(),S=k(),se=k(!1),oe=k({}),Ce=k({}),ke=k(!1),xe=k(!1),Te=k(0),Pe=k(!1),Re=k({}),Se=k({}),we=k(!0),De=k(!0),Ne=k(!0),Fe=k(""),Ve=k([]);k({});const He=k({}),Be=k({}),Me=k([]),Ze=k(),Ke=k(),Xe=V({holder:{formData:{},schema:[],trialFactorCodes:[],config:{name:{},verificationCode:{sendSMSCode:async({mobile:e},a)=>{const t=await Ie(e),{code:l}=t;"10000"===l&&"function"==typeof a&&a()}},certType:{},certNo:{label:"身份证号"},occupation:{dictCode:be(x)}}},insuredList:[{formData:{},schema:[],trialFactorCodes:[],config:{relationToHolder:{label:""},certNo:{label:"身份证号"}}}]});P&&pe({openId:P},(e=>{Se.value=e}));const ea=k({imgUrl:"",desc:"",title:"",link:window.location.href}),aa=(e=>{const{tenantId:a,agentCode:t="",agencyCode:l,saleChannelId:n,extraInfo:r,insurerCode:s}=w().query;let o={};try{o=JSON.parse(decodeURIComponent(r))}catch(ba){}const i=k({agencyId:l,commencementTime:"",expiryDate:"",extInfo:{buttonCode:"",pageCode:"",iseeBizNo:"",extraInfo:{}},orderCategory:1,saleUserId:t,saleChannelId:n,tenantId:a,venderCode:s,tenantOrderHolder:{extInfo:{occupationCodeList:[]}},tenantOrderInsuredList:[{relationToHolder:"1",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{extInfo:{}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",subjectNo:"",tenantId:a}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}});return"[object Object]"==={}.toString.call(e)&&Object.assign(i.value,e),i})({extInfo:{buttonCode:"EVENT_SHORT_saveOrder",pageCode:"productInfo",extraInfo:T,templateId:(null==T?void 0:T.templateId)||"1",iseeBizNo:""}}),ta=k({}),la=l((()=>!!E)),na=k([]),ra=async()=>{le({productCode:g,tenantId:y}).then((({data:e,code:a})=>{if("10000"===a){oe.value=e,document.title=e.BASIC_INFO.title||"";const{title:a,desc:l,image:n}=(null==e?void 0:e.showConfigVO)||{};t={title:a,desc:l,image:n},ea.value={desc:t.desc||"你好，这里是描述",imgUrl:t.image,title:t.title,link:window.location.href}}var t})),await X({productCode:g}).then((({data:e,code:a})=>{var t;"10000"===a&&(Pe.value=!0,Ce.value=e,He.value=null==(t=e.productPlanInsureVOList)?void 0:t[0],Me.value=(e.productPlanInsureVOList||[]).filter((e=>e.planCode)).map((e=>({planName:e.planName,planCode:e.planCode}))))})),Ne.value=!1,ne({productCode:g}).then((({code:e,data:a})=>{var t,l,n,r;if("10000"===e){const{productInsureMaterialVOList:e,productQuestionnaireVOList:s}=a,{basicInfo:{questionnaireType:o},questions:i,questionnaireName:d}=(null==(t=null==s?void 0:s[0])?void 0:t.questionnaireDetailResponseVO)||{basicInfo:{}};2===o&&(na.value=[{attachmentName:d,attachmentUri:i,attachmentType:"question"}]),na.value=[{attachmentName:d,attachmentUri:null==(l=null==i?void 0:i[0])?void 0:l.content,attachmentType:fe(String(null==(n=null==i?void 0:i[0])?void 0:n.textType),null==(r=null==i?void 0:i[0])?void 0:r.content)}]}}))},sa=l((()=>{if(Se.value){const e=[];return Object.keys(Se.value).forEach((a=>{e.push(...Se.value[a])})),e}return[]})),oa=l((()=>sa.value.length>0)),ia=k([]),da=e=>{console.log("currentPlanObj.value",e,He.value)};D((()=>ta.value.planCode),(e=>{He.value=(Ce.value.productPlanInsureVOList||[]).find((a=>a.planCode===e))}));const ca=()=>{R.value.handleClickTab()("tab3")};k([]);const ua=k([]),pa=e=>{Te.value=e,xe.value=!0},va=async()=>{try{await re(((e={},a={},t={})=>{var l;const n={...t},r={tenantId:y,riskList:(null==(l=n.tenantOrderInsuredList[0])?void 0:l.tenantOrderProductList[0].riskVOList)||[],riskPremium:a,productId:e.id};return n.extInfo.iseeBizNo=Fe.value,n.productCode=e.productCode,n.commencementTime=n.insuranceStartDate,n.expiryDate=n.insuranceEndDate,n.tenantOrderHolder={...n.tenantOrderHolder,certType:n.tenantOrderHolder.certType||W.CERT,certNo:(n.tenantOrderHolder.certNo||"").toLocaleUpperCase(),extInfo:{...n.tenantOrderHolder.extInfo}},n.tenantOrderInsuredList=n.tenantOrderInsuredList.map((e=>({...e,certType:e.certType||W.CERT,certNo:(e.certNo||"").toLocaleUpperCase(),planCode:He.value.planCode,extInfo:{...e.extInfo}}))),n.tenantOrderInsuredList[0].tenantOrderProductList[0]={productCode:e.productCode,productName:e.productName,planCode:He.value.planCode,tenantOrderRiskList:ge(r)},n})(Ce.value,Re.value,aa.value),(async(e,a)=>{a===Z.JUMP_PAGE&&(null==e?void 0:e.orderNo)&&await(async e=>{try{const{code:a,data:t}=await te({orderNo:e,tenantId:y});"10000"===a&&(t.extInfo={...t.extInfo,buttonCode:"EVENT_SHORT_underWrite"},await re(t))}catch(ba){}})(null==e?void 0:e.orderNo)}))}catch(ba){}},ma=k(""),fa=k(0),ha=async(e,a,t,l=!0)=>{var n;const{chargePeriod:r,coveragePeriod:s,paymentFrequency:o,insuranceEndDate:i,insuranceStartDate:d}=ta.value;ma.value="保费试算中...";const c=he(t).map((e=>({...e,paymentFrequency:o,chargePeriod:r,coveragePeriod:s}))),u={tenantId:y,productCode:a.productCode,insuranceStartDate:d,insuranceEndDate:i,holder:{personVO:{...e.tenantOrderHolder,socialFlag:null==(n=e.tenantOrderHolder.extInfo)?void 0:n.hasSocialInsurance,certType:e.tenantOrderHolder.certType||W.CERT}},insuredVOList:e.tenantOrderInsuredList.map((e=>({insuredCode:"",relationToHolder:e.relationToHolder,personVO:{...e,socialFlag:e.extInfo.hasSocialInsurance,certType:e.certType||W.CERT},productPlanVOList:[{insurerCode:x,planCode:He.value.planCode,riskVOList:c}]})))},{code:p,message:v}=await ee(u);if("10000"===p){const{code:e,data:a}=await ae(u);if("10000"===e){if(ma.value="",aa.value.tenantOrderInsuredList[0].tenantOrderProductList=u.insuredVOList[0].productPlanVOList,fa.value=null==a?void 0:a.premium,aa.value.premium=a.premium,aa.value.orderAmount=a.premium,aa.value.orderRealAmount=a.premium,!l){const e={};a.riskPremiumDetailVOList&&a.riskPremiumDetailVOList.length&&a.riskPremiumDetailVOList.forEach((a=>{e[a.riskCode]={premium:a.premium,amount:a.amount}})),Re.value=e,ua.value.length>0?(we.value=!1,pa(0)):na.value.length>0?ke.value=!0:await va()}}else ma.value=""}else ma.value="",Q(v)},ga=()=>{const e=[];return Ve.value.filter((e=>e.value===ie.INSURE)).forEach((a=>{e.push(...a.productRiskVoList)})),e},ya=async()=>{if(console.log("insuredFormRef",Ke),fa.value)va();else try{ke.value=!1,xe.value=!1,Ze.value&&Ze.value.validate().then((async()=>{var e;if(oa.value)await ha(aa.value,Ce.value,[...ia.value,...ga()],!1);else{const a=null==(e=aa.value.tenantOrderHolder)?void 0:e.verificationCode;if(!me(a))return void Q({message:"请输入正确的验证码"});const{code:t,data:l}=await _e(aa.value.tenantOrderHolder.mobile,a);"10000"===t&&await ha(aa.value,Ce.value,[...ia.value,...ga()],!1)}})).catch((()=>{const e=document.querySelector(".form-title");e&&e.scrollIntoView()}))}catch(e){}},Aa=e=>{"allFalse"===e?(ke.value=!1,va()):$.confirm({className:"xinao-custom-dialog",title:"提示",teleport:"#xinaoDialog",message:"被保人不符合健康要求，很抱歉暂时无法投保该产品",confirmButtonText:"选错了",cancelButtonText:"为其他人投保"}).then((()=>{})).catch((()=>{ke.value=!1}))},Ia=()=>{ke.value=!1,xe.value=!1,we.value=!0};D((()=>aa.value.tenantOrderInsuredList[0].relationToHolder),(()=>{Ve.value&&Ve.value.forEach((e=>{e.value=ie.UN_INSURE})),De.value=!1,H((()=>{const{certType:e,extInfo:a}=aa.value.tenantOrderInsuredList[0];a&&!a.hasSocialInsurance&&(aa.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance=de.HAS),De.value=!0}))}),{deep:!0,immediate:!0}),D([()=>Xe.holder.formData,()=>Xe.insuredList],(([e,a])=>{Object.assign(aa.value,(({holder:e,insuredList:a=[]})=>{const t=["birthday","certEndDate","certEndType","certNo","certStartDate","verificationCode","certType","email","gender","mobile","name","id","insuredBeneficiaryType","relationToHolder","relationToMainInsured"],l=e=>{const a={extInfo:{}};return"[object Object]"==={}.toString.call(e)&&Object.keys(e).forEach((l=>{t.includes(l)?a[l]=e[l]:a.extInfo[l]=e[l]})),a};return{tenantOrderHolder:l(e),tenantOrderInsuredList:(a||[]).map((e=>l(e)))}})({holder:e,insuredList:a.map((e=>e.formData))}))}),{deep:!0});const _a=()=>{const{name:e,birthday:a,gender:t,certType:l,extInfo:{hasSocialInsurance:n}}=aa.value.tenantOrderInsuredList[0];return!!(a&&t&&aa.value.paymentFrequency&&e&&ye(e)&&n)},Ca=()=>{_a()&&(ma.value="保费试算中...")};return D([()=>He.value,()=>ta.value.paymentFrequency],(()=>{Ca()}),{deep:!0,immediate:!0}),D((()=>[...Xe.holder.trialFactorCodes.map((e=>Xe.holder.formData[e])),...Xe.insuredList.reduce(((e,a,t)=>(e.push(...a.trialFactorCodes.map((e=>Xe.insuredList[t].formData[e]))),e)),[])]),((...e)=>{console.log(999999,e),console.log("%c🔥 试算因子变动了","color:#1989fa;background:#5e4;padding:3px 5px;")}),{deep:!0,immediate:!0}),D([()=>aa.value.tenantOrderInsuredList[0].birthday,()=>aa.value.tenantOrderInsuredList[0].name,()=>aa.value.tenantOrderInsuredList[0].gender,()=>aa.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance,()=>aa.value.activePlanCode,()=>aa.value.paymentFrequency,()=>aa.value.insurancePeriodValue,()=>Ve.value],K((()=>{if(_a()){if(la.value)return;ha(aa.value,Ce.value,[...ia.value,...ga()])}else Ca()}),500),{deep:!0}),D((()=>Xe.holder.formData),((...e)=>{console.log("%c🔥 投保人信息变动了","color:#1989fa;background:#5e4;padding:3px 5px;"),Xe.insuredList.forEach(((e,a)=>{const{formData:t,schema:l}=e||{};"1"===t.relationToHolder&&Object.assign(e.formData,Xe.holder.formData)}))}),{deep:!0,immediate:!0}),D((()=>He.value),(()=>{let{productFactor:e}=He.value;const{oilPackageProductVOList:a,planCode:t,insureProductRiskVOList:l}=He.value;oa.value&&e[1]&&(e=e[1].filter((e=>"verificationCode"!==e.code))),ta.value.planCode=t,ia.value=l,Be.value=(l||[]).find((e=>e.mainRiskFlag===B.YES)),console.log("mainRiskInfo.value",Be.value),Ve.value=(a||[]).map((e=>({...e,value:ie.UN_INSURE})));const[n,r,s]=Le(e);Xe.holder={...Xe.holder,...n},Xe.insuredList[0]={...Xe.insuredList[0],...r}}),{deep:!0,immediate:!0}),D((()=>Xe.insuredList.map(((e,a)=>Xe.insuredList[a].formData.relationToHolder))),((e,a)=>{console.log("%c🔥 与投保人关系变动了","color:#1989fa;background:#5e4;padding:3px 5px;"),Xe.insuredList.forEach(((e,a)=>{const{formData:t,schema:l,config:n}=e||{},r="1"===t.relationToHolder,s="3"===t.relationToHolder;n.certNo.label="身份证号"+(s?"(户口簿)":""),e.schema.forEach((e=>{e.relationToHolder=t.relationToHolder,e.hidden=!e.isSelfInsuredNeed&&r})),r?Object.assign(e.formData,{...Xe.insuredList[a].formData,...Xe.holder.formData}):Object.assign(e.formData,{...Object.keys(e.formData).reduce(((e,a)=>(e[a]="",e)),{}),relationToHolder:t.relationToHolder})}))}),{immediate:!0,deep:!0}),H((()=>{U(S,(([{isIntersecting:e}],a)=>{se.value=!e}))})),M((()=>{var e;const a=q.get(ce);if(a){const{tenantOrderHolder:t,tenantOrderInsuredList:l}=a;if(t&&(aa.value.tenantOrderHolder={...t,certType:t.certType||W.CERT}),Array(l)&&l[0]){const a=l[0]||{};if(aa.value.activePlanCode=a.planCode,a.tenantOrderProductListtenantOrderProductList&&a.tenantOrderProductList[0]&&a.tenantOrderProductList[0].tenantOrderRiskList){const t=null==(e=a.tenantOrderProductList[0].tenantOrderRiskList)?void 0:e.find((e=>"1"===String(e.riskType)));t&&(aa.value.paymentFrequency=(null==t?void 0:t.paymentFrequency)?String(null==t?void 0:t.paymentFrequency):ue.SINGLE)}}}})),z((()=>{Ne.value=!0,ra(),setTimeout((async()=>{Fe.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),G((()=>{q.remove(ce)})),(e,l)=>{const f=J,g=Y;return n(),r(i,null,[Ne.value?(n(),r("div",qe,We)):(n(),c(g,{key:1,"data-skeleton-root":"SHORT","theme-vars":u(m)},{default:o((()=>{var a,m,g,y,A,I,_,b,L;return[C("div",ze,[C("div",Ge,[(null==(m=null==(a=oe.value)?void 0:a.BASIC_INFO)?void 0:m.banner.length)?(n(),c(Ae,{key:0,"data-skeleton-type":"img",url:null==(g=oe.value)?void 0:g.BASIC_INFO.banner[0]},null,8,["url"])):h("",!0),(null==(I=null==(A=null==(y=oe.value)?void 0:y.BASIC_INFO)?void 0:A.bannerMove)?void 0:I.length)?(n(),c(Ae,{key:1,url:null==(L=null==(b=null==(_=oe.value)?void 0:_.BASIC_INFO)?void 0:b.bannerMove)?void 0:L[0],onClick:ca},null,8,["url"])):h("",!0),C("div",{ref_key:"observeRef",ref:S},null,512)]),s(je,{ref:"tenantProductDetailScrollRef","data-source":oe.value},{form:o((()=>[C("div",Qe,[$e,s(u(Oe),{ref_key:"holderFormRef",ref:Ze,title:"本人信息（投保人）",model:u(Xe).holder.formData,schema:u(Xe).holder.schema,config:u(Xe).holder.config},null,8,["model","schema","config"]),(n(!0),r(i,null,d(u(Xe).insuredList,((e,a)=>(n(),c(u(Oe),{ref_for:!0,ref_key:"insuredFormRef",ref:Ke,key:a,title:"为谁投保（被保人）",model:u(Xe).insuredList[a].formData,schema:e.schema,config:e.config},null,8,["model","schema","config"])))),128))]),s(u(t),{"form-info":ta.value,"risk-info":Be.value,"tenant-product-detail":oe.value.PREMIUM,"plan-list":Me.value,"premium-info":{premium:fa.value,premiumLoadingText:ma.value},onUpdateActivePlan:da},null,8,["form-info","risk-info","tenant-product-detail","plan-list","premium-info"]),Ve.value.length>0?(n(),c(Ee,{key:0,"package-product-list":Ve.value},null,8,["package-product-list"])):h("",!0)])),_:1},8,["data-source"]),s(f,null,{default:o((()=>{var e,a,t;return[(null==(e=oe.value.SIGNATURE)?void 0:e.inscribedContent)?(n(),c(u(p),{key:0,"inscribed-content":null==(t=null==(a=oe.value)?void 0:a.SIGNATURE)?void 0:t.inscribedContent},null,8,["inscribed-content"])):h("",!0)]})),_:1}),s(f,null,{default:o((()=>[e.filterHealthAttachmentList&&e.filterHealthAttachmentList.length>0?(n(),c(u(v),{key:0,"attachement-list":e.filterHealthAttachmentList,"pre-text":"请阅读",onPreviewFile:l[0]||(l[0]=e=>pa(e))},null,8,["attachement-list"])):h("",!0)])),_:1}),se.value?(n(),c(Ue,{key:0,premium:fa.value,"loading-text":ma.value,"plan-code":ta.value.planCode,"payment-frequency":ta.value.paymentFrequency,"tenant-product-detail":oe.value,onClick:ya},{default:o((()=>[Je])),_:1},8,["premium","loading-text","plan-code","payment-frequency","tenant-product-detail"])):h("",!0)]),Pe.value?(n(),c(ve,{key:0,"product-detail":oe.value},null,8,["product-detail"])):h("",!0),Ye]})),_:1},8,["theme-vars"])),s(u(a),{show:ke.value,"onUpdate:show":l[1]||(l[1]=e=>ke.value=e),"content-list":na.value,"active-index":0,onOnConfirmHealth:Aa,onOnCloseHealthByMask:Ia},null,8,["show","content-list"])],64)}}}),[["__scopeId","data-v-58c02e92"]]);export{Ze as default};
