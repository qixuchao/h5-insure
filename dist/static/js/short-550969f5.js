import{d as e,dR as a,j as l,k as t,E as s,ag as n,c9 as i,cr as o,dz as r,o as d,c as u,a as c,u as p,F as v,s as m,n as f,e as g,f as h,p as y,v as A,b as I,ao as b,aR as k,w as _,q as C,aL as x,_ as w,dS as E,M as L,d2 as S,dT as O,aC as T,aD as N,aE as B,bp as P,bo as R,dK as D,ae as V,af as j,dd as F,h as U,i as M,r as q,aI as H,dE as $,aH as z,l as G,ch as Q,aN as J,aJ as W,T as Y,aO as Z,dG as K,ah as X,al as ee,bz as ae,aQ as le}from"./index-37300aa0.js";import{c as te}from"./cloneDeep-f7aad4e1.js";import{i as se,g as ne,u as ie,h as oe}from"./trial-1c96b0cb.js";import{a as re,c as de}from"./product-08527cd4.js";import{n as ue}from"./nextStep-d8548693.js";import{I as ce,c as pe,S as ve}from"./infoCollection-eec445e0.js";import{a as me}from"./index-bd6406e8.js";import{o as fe,r as ge,g as he}from"./utils-3ca3fb13.js";import ye from"./index-d08712e7.js";import Ae from"./Video-dcc4ad73.js";import{a as Ie}from"./jsbridgePromise-1a7f0ae2.js";import be from"./index-d8feb0a2.js";import ke from"./index-f7aab928.js";import{u as _e}from"./useOrder-7e53bcf0.js";import{_ as Ce}from"./TrialButton-7ca2e8b3.js";import{u as xe}from"./useAttachment-f40f68fb.js";import{p as we,t as Ee}from"./utils-b6165ec6.js";import"./PolicyInfo-92dea00f.js";import"./core-131f2992.js";import"./index-22e00799.js";import"./index-32940979.js";import"./gender-bdd67324.js";import"./product-7bbf9c44.js";import"./trial-2e8cac5d.js";import"./useThread-637a02aa.js";import"./index-b2a40670.js";import"./format-31cde443.js";import"./createProposal-6e8e9996.js";const Le={class:"guarantee-list"},Se=(e=>(N("data-v-72bcb63c"),e=e(),B(),e))((()=>c("span",null,"保障计划",-1))),Oe={key:0,class:"plan-list"},Te=["onClick"],Ne={key:2,class:"feerate-view"},Be={key:0},Pe={class:"extinfo-info-list"},Re={class:"guarantee-detail"},De={class:"content"},Ve=e({name:"guarantee"});var je=w(e({...Ve,props:{dataSource:{default:()=>({})},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{default:5},planList:{default:()=>[]}},emits:["updateActivePlan"],setup(e,{emit:w}){var N,B;const P=e;a((e=>({"47c8f96c":p(R)})));const R=l(""),D=l((null==(B=null==(N=P.planList)?void 0:N[0])?void 0:B.planCode)||void 0),V=l(),j=l([]),F=l([]),U=l(),M=t((()=>!!P.planList.length));s([()=>P.dataSource,()=>D.value],(()=>{var e,a;j.value=((null==(a=((null==(e=P.dataSource)?void 0:e.GUARANTEE)||[]).find((e=>e.planCode===D.value)))?void 0:a.data)||[]).filter((e=>e.isShowOn===`${n.YES}`))}),{immediate:!0,deep:!0});const q=t((()=>{var e;return(null==(e=P.dataSource)?void 0:e.rateUri)||""})),H=t((()=>!!(U.value&&U.value.paymentFrequencyValue&&U.value.premiumUnit&&q))),[$,z]=i(!1),G=t((()=>{var e;return!(!j.value||!(null==(e=j.value)?void 0:e.length))&&(j.value.length>P.count&&(!!P.isShowClose||!$.value))})),Q=()=>{z()},J=t((()=>{var e;return j.value&&(null==(e=j.value)?void 0:e.length)?j.value.length<=P.count||$.value?j.value:j.value.slice(0,P.count):[]})),W=l(!1),Y=e=>{const a=e||window.event;a.preventDefault?a.preventDefault():a.returnValue=!1,a.stopPropagation?a.stopPropagation():a.cancelBubble=!0,"A"===a.target.tagName&&a.target.href&&(E()?Ie("",a.target.href):window.open(a.target.href))},Z=()=>{W.value=!0,L((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.addEventListener("click",Y,!1)}))};o((()=>{var e,a;null==(a=null==(e=document.getElementsByClassName("guarantee-detail"))?void 0:e[0])||a.removeEventListener("click",Y,!1)}));const K=()=>{fe({fileType:"pdf",fileUri:q.value})},X=e=>{D.value=P.planList[e.name].planCode};return(e,a)=>{var l,t;const s=S,n=O,i=T,o=r("dompurify-html");return d(),u(v,null,[c("div",Le,[c("div",{class:"header"},[Se,c("span",{onClick:Z},"查看详情")]),p(M)?(d(),u("div",Oe,[(d(!0),u(v,null,m(e.planList,((e,a)=>(d(),u("div",{key:`${e.planCode}_${a}`,class:f("plan-list-item "+(e.planCode===p(D)?"plan-list-item-active":"")),onClick:a=>{return l=e.planCode,D.value=l,V.value=P.planList.findIndex((e=>e.planCode===l)),void w("updateActivePlan",l);var l}},[c("span",null,g(e.planName),1)],10,Te)))),128))])):h("",!0),(d(!0),u(v,null,m(p(J),((e,a)=>(d(),y(s,{key:a,class:"guarantee-item",title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128)),p(G)?(d(),u("div",{key:1,class:"show-more",onClick:Q},[A(g(p($)?"收起":"查看更多")+" ",1),I(b,{name:"arrow-down-dobule",class:f(["icon",{showMore:p($)}])},null,8,["class"])])):h("",!0),p(H)?(d(),u("div",Ne,[c("span",null,g(`${(null==(l=p(U))?void 0:l.paymentFrequencyValue)||""}${(null==(t=p(U))?void 0:t.premiumUnit)||""}`),1),p(q)?(d(),u("span",{key:0,onClick:K},"查看保费")):h("",!0)])):h("",!0)]),I(k),I(i,{show:p(W),"onUpdate:show":a[1]||(a[1]=e=>C(W)?W.value=e:null),title:"保障详情",class:"guarantee-popup"},{default:_((()=>[p(F)&&p(F).length>0?(d(),u("div",Be,[c("div",Pe,[(d(!0),u(v,null,m(p(F),((e,a)=>(d(),y(s,{key:a,title:e.name,content:e.description,border:!1,size:"small"},null,8,["title","content"])))),128))]),I(k)])):h("",!0),p(M)?(d(),y(n,{key:1,active:p(V),"onUpdate:active":a[0]||(a[0]=e=>C(V)?V.value=e:null),list:e.planList.map(((e,a)=>({title:e.planName}))),class:"custom-plan-tab",onClickTab:X},null,8,["active","list"])):h("",!0),c("div",Re,[(d(!0),u(v,null,m(p(j),((e,a)=>(d(),u("div",{key:a,class:"guarantee-item"},[I(s,{title:e.title,content:e.desc,border:!1,size:"small"},null,8,["title","content"]),x(c("div",De,null,512),[[o,e.tips]])])))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-72bcb63c"]]);const Fe={class:"refueling-package-com"},Ue=c("div",{class:"title"},"加油包",-1),Me=e({name:"package"}),qe=e({...Me,props:{packageProductList:{default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{default:3}},setup(e){const a=e,[l,s]=i(!1),n=t((()=>a.packageProductList.length>a.count&&(!!a.isShowClose||!l.value))),o=()=>{s()},r=t((()=>a.packageProductList.length<=a.count||l.value?a.packageProductList:a.packageProductList.slice(0,a.count)));return(e,a)=>{const t=P,s=R,i=D;return d(),u("div",Fe,[Ue,I(i,{ref:"formRef"},{default:_((()=>[(d(!0),u(v,null,m(p(r),((e,a)=>(d(),y(s,{key:`${e.value}_${a}`,modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,label:e.packageName,required:"",placeholder:"请选择"},{input:_((()=>[I(t,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,options:p(ce),disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","options","disabled"])])),_:2},1032,["modelValue","onUpdate:modelValue","label"])))),128)),p(n)?(d(),u("div",{key:0,class:"show-more",onClick:o},[A(g(p(l)?"收起":"查看更多")+" ",1),I(b,{name:"down",class:f(["icon",{showMore:p(l)}])},null,8,["class"])])):h("",!0)])),_:1},512)])}}});const He={key:0},$e=[c("div",{class:"__skeleton_short_content__"},[c("div",{class:"van-config-provider sk",style:{"--van-primary-color":"#0d6efe","--van-primary-color-light8":"#0d6efe80","--van-primary-color-light1":"#0d6efe10","--van-primary-color-light2":"#0d6efe20","--van-danger-color":"#FF3C10","--van-primary-background-color":"#0d6efe20","--van-button-primary-background-color":"#0d6efe","--van-button-primary-border-color":"#0d6efe","--van-checkbox-checked-bg-color":"#0d6efe10","--van-switch-on-background-color":"#0d6efe","--van-toast-default-padding":"14px","--van-linear-bg":"linear-gradient(to right, #0d6efe, rgba(13,150,254,1))","--van-popup-close-icon-margin":"20px","--van-popup-round-border-radius":"20px","--van-card-title":"#0d6efe","--van-card-cell-color":"#0d6efe80","--van-radio-checked-icon-color":"#0d6efe","--van-pro-check-radius":"40px"}},[c("div",{class:"page-internet-product-detail"},[c("div",{class:"info"},[c("div",{class:"van-image banner",style:{width:"100%",height:"223px"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},[c("img",{class:"van-image__img","data-src":"https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/common/20221222/e3719801cf6546449e18e06f3bbe8416/%E5%B0%8A%E4%BA%ABe%E7%94%9F.png?Expires=1676527379&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=tkscLe6oOZYjnRIA%2B7AiMS3bOs0%3D",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",lazy:"loaded",style:{background:"rgb(238, 238, 238)"}})]),c("div")]),c("div",{class:"guarantee-list"},[c("div",{class:"header"},[c("span",null,[c("span",{class:"sk-text",style:{"--fp":"14.86%","--sp":"85.14%","--lh":"18.4999px"}},"保障计划")]),c("span",null,[c("span",{class:"sk-text",style:{"--fp":"14.86%","--sp":"85.14%","--lh":"18.4999px"}},"查看详情")])]),c("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[c("div",{class:"cell-container"},[c("div",{class:"left-part large"},[c("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"一般医疗保险金")]),c("div",{class:"divider"}),c("div",{class:"right-part"},[c("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高300万")])])]),c("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[c("div",{class:"cell-container"},[c("div",{class:"left-part large"},[c("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"重大疾病医疗保险金")]),c("div",{class:"divider"}),c("div",{class:"right-part"},[c("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高600万")])])]),c("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[c("div",{class:"cell-container"},[c("div",{class:"left-part large"},[c("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"恶性肿瘤质子重离子医疗")]),c("div",{class:"divider"}),c("div",{class:"right-part"},[c("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高600万")])])]),c("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[c("div",{class:"cell-container"},[c("div",{class:"left-part large"},[c("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"恶性肿瘤院外特定药品费用医疗")]),c("div",{class:"divider"}),c("div",{class:"right-part"},[c("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高600万")])])]),c("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[c("div",{class:"cell-container"},[c("div",{class:"left-part large"},[c("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"恶性肿瘤特定器械耗材费用医疗责任 （适用于女性被保险人）")]),c("div",{class:"divider"}),c("div",{class:"right-part"},[c("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高100万")])])]),c("div",{class:"show-more"},[c("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"16.799999999999997px"}},"查看更多 "),c("svg",{class:"svg-icon icon-arrow-down-dobule icon icon"},[c("use",{"xlink:href":"#icon-arrow-down-dobule"})])]),c("div",{class:"feerate-view sk-border"},[c("span",null,[c("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"142.00元/年起")])])]),c("div",{class:"com-divider"}),c("div",{class:"tabs",sticky:"",scrollspy:""},[c("div",null,[c("div",{class:"van-sticky"},[c("div",{class:"van-tabs"},[c("div",{id:"tab-list",class:"tab-list"},[c("a",{class:"tab-title active",title:"产品亮点"},[c("span",{class:"sk-text",style:{"--fp":"31.82%","--sp":"68.18%","--lh":"43.9999px"}},"产品亮点")]),c("a",{class:"tab-title",title:"理赔说明"},[c("span",{class:"sk-text",style:{"--fp":"31.82%","--sp":"68.18%","--lh":"43.9999px"}},"理赔说明")]),c("a",{class:"tab-title",title:"我要投保"},[c("span",{class:"sk-text",style:{"--fp":"31.82%","--sp":"68.18%","--lh":"43.9999px"}},"我要投保")])])])])]),c("div",{class:"tab-content"},[c("div",{id:"tab1"},[c("div",{class:"spec"},[c("div",{class:"van-image detail-img",style:{width:"100%"}},[c("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",class:"van-image__img",style:{background:"rgb(238, 238, 238)"}})])])])])])])])],-1)],ze=["theme-vars"],Ge={class:"info"},Qe={class:"custom-page-form"},Je=c("div",{id:"xinaoDialog"},null,-1),We=e({name:"InsuranceShort"}),Ye=e({...We,setup(e){const a=V((()=>j((()=>import("./index-1a633874.js")),["static/js/index-1a633874.js","static/css/index-fa4edf2a.css","static/js/index-37300aa0.js","static/css/index-f7829d26.css","static/js/theme-94cf7d00.js","static/js/index-b2a40670.js","static/css/index-bbfdd7ec.css","static/js/utils-3ca3fb13.js","static/js/infoCollection-eec445e0.js","static/js/trial-2e8cac5d.js"]))),i=V((()=>j((()=>import("./index-c37b0f44.js")),["static/js/index-c37b0f44.js","static/css/index-c1e75aab.css","static/js/index-37300aa0.js","static/css/index-f7829d26.css"]))),r=V((()=>j((()=>import("./index-bdd3b426.js")),["static/js/index-bdd3b426.js","static/css/index-c029ae5d.css","static/js/index-37300aa0.js","static/css/index-f7829d26.css","static/js/infoCollection-eec445e0.js","static/js/trial-2e8cac5d.js"]))),m=V((()=>j((()=>import("./index-bebf694e.js")),["static/js/index-bebf694e.js","static/css/index-eabeb59f.css","static/js/index-37300aa0.js","static/css/index-f7829d26.css"]))),f=V((()=>j((()=>import("./index-1283693c.js")),["static/js/index-1283693c.js","static/css/index-bf024e9b.css","static/js/index-37300aa0.js","static/css/index-f7829d26.css"]))),g=V((()=>j((()=>import("./index-ea92df01.js")),["static/js/index-ea92df01.js","static/css/index-90a5175b.css","static/js/index-37300aa0.js","static/css/index-f7829d26.css","static/js/validator-6eb2e74e.js"]))),{VITE_BASE:b}={VITE_BASE:"/h5insure/",VITE_API_BASEURL:"/",VITE_APP_TITLE:"投保流程",VITE_THEME_COLOR:"#C41E21",VITE_APP_DESCRIPTION:"一种互联网投保的快速落地实现方案",BASE_URL:"/h5insure/",MODE:"production",DEV:!1,PROD:!0},k=F();U();const x=M(),{productCode:w="",orderNo:E,proposalId:S,tenantId:O,extraInfo:T,insurerCode:N,preview:B}=x.query;let P={};console.log("route.query",x.query);try{console.log("extInfo",decodeURIComponent(T)),P=JSON.parse(decodeURIComponent(T))}catch(Sa){}const{saTenantId:R,proposalInsuredId:D=""}=P,ce=l(),fe=l(),Ie=l(),Le=l(),Se=l(!1),Oe=l({}),Te=l({}),Ne=l(!1),Be=l(!1),Pe=l(0),Re=l(!1);l({});const De=l(!0),Ve=l(!0),Fe=l(""),Ue=l([]),Me=l({}),We=l({}),Ye=l([]),Ze=l(),Ke=q({submitData:{},riskVOList:[{}],userData:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResult:{},isFirst:!0}),Xe=l({imgUrl:"",desc:"",title:"",link:`${window.location.href}&isShare=true`}),ea=_e({extInfo:{buttonCode:"EVENT_SHORT_saveOrder",pageCode:"productInfo",extraInfo:P,templateId:(null==P?void 0:P.templateId)||"1",iseeBizNo:""}}),aa=l({}),la=t((()=>!!B)),ta=l([]),sa=l(),na=l(!0),ia=l(!1),oa=async()=>{re({productCode:w,tenantId:O}).then((({data:e,code:a})=>{if("10000"===a){Oe.value=e,document.title=e.BASIC_INFO.title||"",Oe.BASIC_INFO=e.BASIC_INFO;const{title:a,desc:t,image:s}=(null==e?void 0:e.PRODUCT_LIST.wxShareConfig)||{};l={title:a,desc:t,image:s},Xe.value={desc:l.desc||"你好，这里是描述",imgUrl:l.image,title:l.title,link:`${window.location.href}&isShare=true`},console.log("shareInfo",Xe.value),e.BASIC_INFO&&e.BASIC_INFO.themeType&&Q(e.BASIC_INFO.themeType)}var l})),await se({productCode:w,isTenant:!B}).then((({data:e,code:a})=>{var l;"10000"===a&&(Re.value=!0,Te.value=e,Me.value=null==(l=e.productPlanInsureVOList)?void 0:l[0],Ye.value=(e.productPlanInsureVOList||[]).filter((e=>e.planCode)).map((e=>({planName:e.planName,planCode:e.planCode}))))})),E||P.orderNo?ne({orderNo:E||P.orderNo,tenantId:O}).then((({code:e,data:a})=>{var l,t,s,n,i;if("10000"===e){ea.value=a,ia.value=!0;const e=(null==(t=null==(l=ea.value.insuredList)?void 0:l[0])?void 0:t.planCode)||"";e&&(Me.value=(null==(s=Te.value.productPlanInsureVOList)?void 0:s.find((a=>a.planCode===e)))||(null==(i=null==(n=Me.value)?void 0:n.productPlanInsureVOList)?void 0:i[0])),Object.assign(Ke.userData,{...a,holder:{...a.holder,config:{verificationCode:{isView:!1,isHidden:!1,visible:!0}}}}),na.value=!1}})):S?we({proposalId:S,productCode:w,tenantId:R||O,proposalInsuredId:D},(e=>{ae("计划书查询参数"),Ke.userData=e,na.value=!1})):na.value=!1,Ve.value=!1,de({productCode:w}).then((({code:e,data:a})=>{var l,t,s,n;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:i}=a;sa.value=e||[];const{basicInfo:{questionnaireType:o},questions:r,questionnaireName:d}=(null==(l=null==i?void 0:i[0])?void 0:l.questionnaireDetailResponseVO)||{basicInfo:{}};o&&(ta.value=2===o?[{attachmentName:d,attachmentUri:r,attachmentType:"question"}]:[{attachmentName:d,attachmentUri:null==(t=null==r?void 0:r[0])?void 0:t.content,attachmentType:he(String(null==(s=null==r?void 0:r[0])?void 0:s.textType),null==(n=null==r?void 0:r[0])?void 0:n.content)}])}L((()=>{Ke.isFirst=!1}))}))},ra=l([]);s((()=>aa.value.planCode),(e=>{Me.value=(Te.value.productPlanInsureVOList||[]).find((a=>a.planCode===e))}));const da=()=>{Le.value.handleClickTab()("tab3")},ua=l(""),ca=l(0),pa=l(),va=async()=>{if(la.value)window.location.href=`${window.location.origin}${b}baseInsurance/orderDetail?orderNo=mockOrderNo&tenantId=${O}&ISEE_BIZ=${Fe}&productCode=${w}&preview=true&templateView=${null==P?void 0:P.templateId}`;else try{const e=Ee(pa.value,Ke.trialResult,{...ea.value,extInfo:{...ea.value.extInfo,buttonCode:"EVENT_SHORT_saveOrder",iseeBizNo:Fe.value,autoRenewalInfo:Ze.value},operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}});ue(e,(async(e,a)=>{a===le.JUMP_PAGE&&(null==e?void 0:e.orderNo)&&await(async e=>{try{const{code:a,data:l}=await ne({orderNo:e,tenantId:O});"10000"===a&&(l.extInfo={...l.extInfo,buttonCode:"EVENT_SHORT_underWrite"},await ue(l))}catch(Sa){}})(null==e?void 0:e.orderNo)}))}catch(Sa){console.log(Sa)}},{fileList:ma,mustReadFileCount:fa,popupFileList:ga}=xe(Me,sa),ha=e=>{Pe.value=e,Be.value=!0},ya=()=>{const e=[];return Ue.value.filter((e=>e.value===pe.INSURE)).forEach((a=>{e.push(...a.productRiskVoList)})),e},Aa=e=>{"allFalse"===e?(Ne.value=!1,va()):J.confirm({className:"xinao-custom-dialog",title:"提示",teleport:"#xinaoDialog",message:"被保人不符合健康要求，很抱歉暂时无法投保该产品",confirmButtonText:"选错了",cancelButtonText:"为其他人投保"}).then((()=>{})).catch((()=>{Ne.value=!1}))},Ia=()=>{Be.value=!1,De.value=!0,ta.value.length<1?va():Ne.value=!0},ba=()=>{Ne.value=!1,Be.value=!1,De.value=!0},ka=(e,a)=>{if(e){const l=["birthday","age","gender","id"];a.includes("occupationCodeList")&&l.push("occupationClass"),Object.keys(e).forEach((t=>{[...a,...l].includes(t)||(e[t]=null)}))}},_a=(e,a=(e=>!0))=>Z(e)?e.filter(a).map((e=>e.code)):[],Ca=H((async(e=!1)=>{var a;if(console.log(">>>>>调用试算<<<<<"),Ke.ifPersonalInfoSuccess||Ie.value.canTrail()){const{insuranceEndDate:l,insuranceStartDate:t}=aa.value;Object.assign(Ke.submitData,{...Ke.userData,tenantId:O,productCode:w,productName:Te.value.productName,commencementTime:t,expiryDate:l}),Ke.riskList=(()=>{const{chargePeriod:e,coveragePeriod:a,paymentFrequency:l,insuranceEndDate:t,insuranceStartDate:s}=aa.value;return ge([...ra.value,...ya()]).map((t=>({...t,paymentFrequency:l,chargePeriod:e,coveragePeriod:a})))})();const s=Ke.submitData;(null==(a=s.insuredList)?void 0:a.length)&&(s.insuredList=s.insuredList.map((e=>({...e,planCode:Me.value.planCode,productList:[{insurerCode:N,productName:Te.value.productName,productCode:w,riskList:Ke.riskList}]})))),console.log(">>>数据构建<<<",Ke.submitData),await(async(e,a=!1)=>{Ke.trialMsg="试算中...",Ke.trialResult={};let l=!1;const{code:t}=await ie(e);l="10000"===t,l&&oe(e).then((l=>{var t,s;l.data&&l.code===W?((null==(t=null==l?void 0:l.data)?void 0:t.errorInfo)&&Y(`${null==(s=null==l?void 0:l.data)?void 0:s.errorInfo}`),pa.value=e,Ke.trialMsg="",Ke.trialResult=l.data,a&&(ga.value.length>0?(De.value=!1,ha(0)):ta.value.length>0?Ne.value=!0:va())):Ke.trialMsg=""})).finally((()=>{Ke.isFirst=!1}))})(s,e)}}),300),xa=async(e,a=!1)=>{(e=>{const{holder:a,insuredList:l}=e||{};a&&(Ke.submitData.holder=a),l&&l.length>0&&l.forEach(((e,a)=>{var l;Ke.submitData.insuredList&&Ke.submitData.insuredList.length>a?Ke.submitData.insuredList[a]=e:((null==(l=Ke.submitData)?void 0:l.insuredList)||(Ke.submitData.insuredList=[]),Ke.submitData.insuredList.push(e))}))})(e),Ke.ifPersonalInfoSuccess=!0,console.log("投被保人的信息回传 ",e),Ca()},wa=async()=>{Ne.value=!1,Be.value=!1,Ke.isFirst=!1,la.value?ga.value.length>0?(De.value=!1,ha(0)):ta.value.length>0?Ne.value=!0:va():(Ze.value=await fe.value.validate(),Ie.value.validate().then((async e=>{const{mobile:a,verificationCode:l=""}=Ke.userData.holder||{},{code:t,data:s}=await K(a,l);"10000"===t&&Ca(!0)})).catch((e=>{console.log(e,"表单验证失败");const a=document.querySelector(".custom-page-form");a&&a.scrollIntoView()})))},Ea=H((()=>{console.log("----监听事件变化，重新触发试算------",Ie.value.validateTrialFields()),Ie.value.validateTrialFields()&&xa(Ke.userData)}),400);s((()=>ea.value.insuredList[0].relationToHolder),((e,a)=>{e!==a&&Ue.value&&Ue.value.forEach((e=>{e.value=pe.UN_INSURE})),L((()=>{const{certType:e,extInfo:a}=ea.value.insuredList[0];a&&!a.hasSocialInsurance&&(ea.value.insuredList[0].extInfo.hasSocialInsurance=ve.HAS)}))}),{deep:!0,immediate:!0}),s([()=>Me.value,()=>aa.value,()=>Ue.value],(()=>{Ke.isFirst||Ea()}),{deep:!0,immediate:!0}),s((()=>Me.value),((e,a)=>{const{oilPackageProductVOList:l,planCode:t,insureProductRiskVOList:s}=e||{};aa.value.planCode=t,ra.value=s,We.value=(s||[]).find((e=>e.mainRiskFlag===n.YES)),Ue.value=(l||[]).map((e=>({...e,value:pe.UN_INSURE}))),t!==(null==a?void 0:a.planCode)&&(null==a?void 0:a.planCode)&&Object.assign(Ke.userData,(()=>{console.log("--current plan = ",Me.value),console.log("---current submit = ",Ke.submitData);const e=te(Ke.userData),{1:a,2:l,3:t}=Me.value.productFactor||{};if(e.holder&&ka(e.holder,_a(a)),e.insuredList){const a=["productList","beneficiaryList"],s=_a(l,(e=>"2"!==String(e.subModuleType))),n=_a(l,(e=>"2"===String(e.subModuleType))),i=Z(n),o=_a(t),r=Z(o);e.insuredList.forEach(((e,l)=>{var t;ka(e,[...l>=1&&i?n:s,...a,...r?["insuredBeneficiaryType"]:[]]),(null==(t=e.beneficiaryList)?void 0:t.length)>0&&(r?e.beneficiaryList.forEach((e=>ka(e,o))):e.beneficiaryList.length=0),e.planCode=Me.value.planCode}))}return e})())}),{deep:!0,immediate:!0});const La=$(ce);return L((()=>{X(ce,(([{isIntersecting:e}])=>{(e=>{La.bottom.value<0||La.top.value<0?Se.value=!e:Se.value=!1})(e)}))})),z((()=>{})),G((()=>{Ve.value=!0,oa(),setTimeout((async()=>{Fe.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),o((()=>{})),(e,l)=>{var t,s,n,o,b,x,w,E,L,S,O,T,N,B,P,R,D,V,j,F;const U=ee;return d(),u(v,null,[p(Ve)?(d(),u("div",He,$e)):(d(),u("div",{key:1,"data-skeleton-root":"SHORT","theme-vars":p(k),class:"page-internet-product-detail"},[c("div",Ge,[1==(null==(s=null==(t=p(Oe))?void 0:t.BASIC_INFO)?void 0:s.bannerType)&&(null==(o=null==(n=p(Oe))?void 0:n.BASIC_INFO)?void 0:o.banner.length)?(d(),y(ye,{key:0,"data-skeleton-type":"img","indicator-color":"#ddd",images:null==(b=p(Oe))?void 0:b.BASIC_INFO.banner},null,8,["images"])):h("",!0),2==(null==(w=null==(x=p(Oe))?void 0:x.BASIC_INFO)?void 0:w.bannerType)&&(null==(L=null==(E=p(Oe))?void 0:E.BASIC_INFO)?void 0:L.video.length)?(d(),y(Ae,{key:1,"data-skeleton-type":"img",src:null==(S=p(Oe))?void 0:S.BASIC_INFO.video[0]},null,8,["src"])):h("",!0),(null==(N=null==(T=null==(O=p(Oe))?void 0:O.BASIC_INFO)?void 0:T.bannerMove)?void 0:N.length)?(d(),y(ye,{key:2,url:null==(R=null==(P=null==(B=p(Oe))?void 0:B.BASIC_INFO)?void 0:P.bannerMove)?void 0:R[0],onClick:da},null,8,["url"])):h("",!0),c("div",{ref_key:"root",ref:ce},null,512)]),(null==(D=p(Oe))?void 0:D.GUARANTEE)?(d(),y(je,{key:0,"show-service-config":"","data-source":p(Oe),"plan-list":p(Ye)},null,8,["data-source","plan-list"])):h("",!0),I(ke,{ref_key:"detailScrollRef",ref:Le,"order-detail":p(ea),"data-source":p(Oe)},{form:_((()=>{var e,a,t,s;return[c("div",Qe,[(null==(e=p(Me))?void 0:e.productFactor)&&!p(na)?(d(),y(p(me),{key:p(Me).planCode,ref_key:"personalInfoRef",ref:Ie,modelValue:p(Ke).userData,"onUpdate:modelValue":l[0]||(l[0]=e=>p(Ke).userData=e),"is-view":p(ia),"product-factor":null==(a=p(Me))?void 0:a.productFactor,"multi-insured-config":null==(t=p(Me))?void 0:t.multiInsuredConfigVO},null,8,["modelValue","is-view","product-factor","multi-insured-config"])):h("",!0)]),I(p(r),{"form-info":p(aa),"risk-info":p(We),"tenant-product-detail":p(Oe).PREMIUM,"plan-list":p(Ye),"premium-info":{premium:p(ca),premiumLoadingText:p(ua)}},null,8,["form-info","risk-info","tenant-product-detail","plan-list","premium-info"]),p(Ue).length>0?(d(),y(qe,{key:0,"package-product-list":p(Ue)},null,8,["package-product-list"])):h("",!0),I(p(g),{ref_key:"autoRenewRef",ref:fe,"ext-info":p(ea).extInfo,"product-factor":null==(s=p(Me))?void 0:s.productFactor},null,8,["ext-info","product-factor"])]})),_:1},8,["order-detail","data-source"]),I(U,null,{default:_((()=>{var e,a,l;return[(null==(e=p(Oe).SIGNATURE)?void 0:e.inscribedContent)?(d(),y(p(m),{key:0,"inscribed-content":null==(l=null==(a=p(Oe))?void 0:a.SIGNATURE)?void 0:l.inscribedContent},null,8,["inscribed-content"])):h("",!0)]})),_:1}),I(U,null,{default:_((()=>{var e;return[(null==(e=p(ma))?void 0:e.length)?(d(),y(p(f),{key:0,"attachment-list":p(ma),"pre-text":"请阅读",onPreviewFile:l[1]||(l[1]=e=>ha(e))},null,8,["attachment-list"])):h("",!0)]})),_:1}),p(Se)?(d(),y(Ce,{key:1,"is-share":null==(j=null==(V=p(Oe))?void 0:V.PRODUCT_LIST)?void 0:j.showWXShare,premium:null==(F=p(Ke).trialResult)?void 0:F.initialPremium,"share-info":p(Xe),"loading-text":p(Ke).trialMsg,"plan-code":p(aa).planCode,"payment-frequency":p(aa).paymentFrequency,"tenant-product-detail":p(Oe),onHandleClick:wa},{default:_((()=>[A("立即投保")])),_:1},8,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail"])):h("",!0)],8,ze)),p(Re)?(d(),y(be,{key:2,"product-detail":p(Oe)},null,8,["product-detail"])):h("",!0),Je,I(p(i),{show:p(Ne),"onUpdate:show":l[2]||(l[2]=e=>C(Ne)?Ne.value=e:null),"content-list":p(ta),"active-index":0,onOnConfirmHealth:Aa,onOnCloseHealthByMask:ba},null,8,["show","content-list"]),p(Be)?(d(),y(p(a),{key:3,show:p(Be),"onUpdate:show":l[3]||(l[3]=e=>C(Be)?Be.value=e:null),"content-list":p(De)?p(ma):p(ga),"is-only-view":p(De),"active-index":p(Pe),text:p(De)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":p(De)?0:p(fa),onSubmit:Ia,onOnCloseFilePreviewByMask:ba},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):h("",!0)],64)}}});export{Ye as default};
