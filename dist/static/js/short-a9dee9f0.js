import{d as e,aI as a,G as t,b as l,c as s,e as o,w as i,U as n,a4 as r,f as d,g as c,j as u,$ as p,a1 as v,a0 as m,h as f,i as g,b9 as h,b8 as A,cx as I,L as y,M as b,c5 as x,a as _,u as k,r as w,as as C,N as E,O as L,Y as O,cr as S,o as T,R as D,bT as N,V as P,W as R,D as j,bh as B,T as V,ap as F,Q as U,X as M,P as q}from"./index-273f0f7e.js";import{d as H}from"./debounce-592a0672.js";import{c as $}from"./cloneDeep-5a292984.js";import{i as G,g as z,u as Q,p as W}from"./trial-91766954.js";import{a as Y,q as Z}from"./product-d8164f6e.js";import{n as J}from"./nextStep-64365c93.js";import{I as X,b as K,S as ee}from"./infoCollection-c597aaa2.js";import{P as ae}from"./index-5b18b917.js";import{r as te,g as le}from"./utils-85c45cdb.js";import se from"./index-0c108f4c.js";import oe from"./Video-ec40e5c4.js";import ie from"./index-0f62518d.js";import ne from"./index-5e2a7b90.js";import re from"./index-423e8c8a.js";import{c as de}from"./phoneVerify-cad5d4d1.js";import{u as ce}from"./useOrder-2340a0f6.js";import{_ as ue}from"./TrialButton-8653d4b8.js";import{u as pe}from"./useAttachment-5fed1120.js";import{p as ve,t as me}from"./utils-e2232202.js";import{c as fe}from"./PayInfo-04a62416.js";import"./isObjectLike-a9798079.js";import"./keysIn-193626ca.js";import"./_getTag-0acae921.js";import"./core-1a1c25b7.js";import"./constant-8927d485.js";import"./index-6d3b75c3.js";import"./merge-12f1f658.js";import"./config-98e8d477.js";import"./index-0c1d013d.js";import"./product-585b0e6f.js";import"./trial-72a5ed12.js";import"./useThread-637a02aa.js";import"./index-a65c549c.js";import"./createProposal-fe2e7ad9.js";import"./useDicData-45da3d9a.js";import"./bankCard-4ff4a2bb.js";const ge={class:"refueling-package-com"},he=g("div",{class:"title"},"加油包",-1),Ae=e({name:"package"}),Ie=e({...Ae,props:{packageProductList:{default:()=>[]},isShowClose:{type:Boolean,default:!1},count:{default:3}},setup(e){const g=e,[y,b]=a(!1),x=t((()=>g.packageProductList.length>g.count&&(!!g.isShowClose||!y.value))),_=()=>{b()},k=t((()=>g.packageProductList.length<=g.count||y.value?g.packageProductList:g.packageProductList.slice(0,g.count)));return(e,a)=>{const t=h,g=A,b=I;return l(),s("div",ge,[he,o(b,{ref:"formRef"},{default:i((()=>[(l(!0),s(n,null,r(d(k),((e,a)=>(l(),c(g,{key:`${e.value}_${a}`,modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,label:e.packageName,required:"",placeholder:"请选择"},{input:i((()=>[o(t,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,options:d(X),disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","options","disabled"])])),_:2},1032,["modelValue","onUpdate:modelValue","label"])))),128)),d(x)?(l(),s("div",{key:0,class:"show-more",onClick:_},[u(p(d(y)?"收起":"查看更多")+" ",1),o(v,{name:"down",class:m(["icon",{showMore:d(y)}])},null,8,["class"])])):f("",!0)])),_:1},512)])}}});const ye={key:0},be=[g("div",{class:"__skeleton_short_content__"},[g("div",{class:"van-config-provider sk",style:{"--van-primary-color":"#0d6efe","--van-primary-color-light8":"#0d6efe80","--van-primary-color-light1":"#0d6efe10","--van-primary-color-light2":"#0d6efe20","--van-danger-color":"#FF3C10","--van-primary-background-color":"#0d6efe20","--van-button-primary-background-color":"#0d6efe","--van-button-primary-border-color":"#0d6efe","--van-checkbox-checked-bg-color":"#0d6efe10","--van-switch-on-background-color":"#0d6efe","--van-toast-default-padding":"14px","--van-linear-bg":"linear-gradient(to right, #0d6efe, rgba(13,150,254,1))","--van-popup-close-icon-margin":"20px","--van-popup-round-border-radius":"20px","--van-card-title":"#0d6efe","--van-card-cell-color":"#0d6efe80","--van-radio-checked-icon-color":"#0d6efe","--van-pro-check-radius":"40px"}},[g("div",{class:"page-internet-product-detail"},[g("div",{class:"info"},[g("div",{class:"van-image banner",style:{width:"100%",height:"223px"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},[g("img",{class:"van-image__img","data-src":"https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/common/20221222/e3719801cf6546449e18e06f3bbe8416/%E5%B0%8A%E4%BA%ABe%E7%94%9F.png?Expires=1676527379&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=tkscLe6oOZYjnRIA%2B7AiMS3bOs0%3D",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",lazy:"loaded",style:{background:"rgb(238, 238, 238)"}})]),g("div")]),g("div",{class:"guarantee-list"},[g("div",{class:"header"},[g("span",null,[g("span",{class:"sk-text",style:{"--fp":"14.86%","--sp":"85.14%","--lh":"18.4999px"}},"保障计划")]),g("span",null,[g("span",{class:"sk-text",style:{"--fp":"14.86%","--sp":"85.14%","--lh":"18.4999px"}},"查看详情")])]),g("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[g("div",{class:"cell-container"},[g("div",{class:"left-part large"},[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"一般医疗保险金")]),g("div",{class:"divider"}),g("div",{class:"right-part"},[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高300万")])])]),g("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[g("div",{class:"cell-container"},[g("div",{class:"left-part large"},[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"重大疾病医疗保险金")]),g("div",{class:"divider"}),g("div",{class:"right-part"},[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高600万")])])]),g("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[g("div",{class:"cell-container"},[g("div",{class:"left-part large"},[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"恶性肿瘤质子重离子医疗")]),g("div",{class:"divider"}),g("div",{class:"right-part"},[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高600万")])])]),g("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[g("div",{class:"cell-container"},[g("div",{class:"left-part large"},[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"恶性肿瘤院外特定药品费用医疗")]),g("div",{class:"divider"}),g("div",{class:"right-part"},[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高600万")])])]),g("div",{class:"common-cell-wrapper com-cell-wrapper guarantee-item"},[g("div",{class:"cell-container"},[g("div",{class:"left-part large"},[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"恶性肿瘤特定器械耗材费用医疗责任 （适用于女性被保险人）")]),g("div",{class:"divider"}),g("div",{class:"right-part"},[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"最高100万")])])]),g("div",{class:"show-more"},[g("span",{class:"sk-text",style:{"--fp":"14.29%","--sp":"85.71%","--lh":"16.799999999999997px"}},"查看更多 "),g("svg",{class:"svg-icon icon-arrow-down-dobule icon icon"},[g("use",{"xlink:href":"#icon-arrow-down-dobule"})])]),g("div",{class:"feerate-view sk-border"},[g("span",null,[g("span",{class:"sk-text",style:{"--fp":"15.00%","--sp":"85.00%","--lh":"19.9999px"}},"142.00元/年起")])])]),g("div",{class:"com-divider"}),g("div",{class:"tabs",sticky:"",scrollspy:""},[g("div",null,[g("div",{class:"van-sticky"},[g("div",{class:"van-tabs"},[g("div",{id:"tab-list",class:"tab-list"},[g("a",{class:"tab-title active",title:"产品亮点"},[g("span",{class:"sk-text",style:{"--fp":"31.82%","--sp":"68.18%","--lh":"43.9999px"}},"产品亮点")]),g("a",{class:"tab-title",title:"理赔说明"},[g("span",{class:"sk-text",style:{"--fp":"31.82%","--sp":"68.18%","--lh":"43.9999px"}},"理赔说明")]),g("a",{class:"tab-title",title:"我要投保"},[g("span",{class:"sk-text",style:{"--fp":"31.82%","--sp":"68.18%","--lh":"43.9999px"}},"我要投保")])])])])]),g("div",{class:"tab-content"},[g("div",{id:"tab1"},[g("div",{class:"spec"},[g("div",{class:"van-image detail-img",style:{width:"100%"}},[g("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",class:"van-image__img",style:{background:"rgb(238, 238, 238)"}})])])])])])])])],-1)],xe=["theme-vars"],_e={class:"info"},ke={class:"custom-page-form"},we=g("div",{id:"xinaoDialog"},null,-1),Ce=e({name:"InsuranceShort"}),Ee=e({...Ce,setup(e){const a=y((()=>b((()=>import("./index-2f63bdfb.js")),["static/js/index-2f63bdfb.js","static/css/index-fa4edf2a.css","static/js/index-273f0f7e.js","static/css/index-ba15a975.css","static/js/theme-94cf7d00.js","static/js/index-a65c549c.js","static/css/index-bbfdd7ec.css","static/js/utils-85c45cdb.js","static/js/infoCollection-c597aaa2.js","static/js/trial-72a5ed12.js"]))),r=y((()=>b((()=>import("./index-da8d0f81.js")),["static/js/index-da8d0f81.js","static/css/index-c1e75aab.css","static/js/index-273f0f7e.js","static/css/index-ba15a975.css"]))),p=y((()=>b((()=>import("./index-a749040c.js")),["static/js/index-a749040c.js","static/css/index-9fd3e1d1.css","static/js/index-273f0f7e.js","static/css/index-ba15a975.css","static/js/infoCollection-c597aaa2.js","static/js/trial-72a5ed12.js"]))),v=y((()=>b((()=>import("./index-4ed79c24.js")),["static/js/index-4ed79c24.js","static/css/index-eabeb59f.css","static/js/index-273f0f7e.js","static/css/index-ba15a975.css"]))),m=y((()=>b((()=>import("./index-dc182dfa.js")),["static/js/index-dc182dfa.js","static/css/index-cb73c937.css","static/js/index-273f0f7e.js","static/css/index-ba15a975.css"]))),h=y((()=>b((()=>import("./index-dd79ca3c.js")),["static/js/index-dd79ca3c.js","static/css/index-85e132db.css","static/js/index-273f0f7e.js","static/css/index-ba15a975.css","static/js/_getTag-0acae921.js","static/js/keysIn-193626ca.js","static/js/isObjectLike-a9798079.js","static/js/useDicData-45da3d9a.js","static/js/validator-6eb2e74e.js"]))),{VITE_BASE:A}={VITE_BASE:"/",VITE_API_BASEURL:"/",VITE_APP_TITLE:"投保流程",VITE_THEME_COLOR:"#0d6efe",VITE_APP_DESCRIPTION:"一种互联网投保的快速落地实现方案",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},I=x();_();const X=k(),{productCode:ge="",orderNo:he,proposalId:Ae,tenantId:Ce,extraInfo:Ee,insurerCode:Le,preview:Oe}=X.query;let Se={};console.log("route.query",X.query);try{console.log("extInfo",decodeURIComponent(Ee)),Se=JSON.parse(decodeURIComponent(Ee))}catch(Oa){}const{saTenantId:Te,proposalInsuredId:De=""}=Se,Ne=w(),Pe=w(),Re=w(),je=w(),Be=w(!1),Ve=w({}),Fe=w({}),Ue=w(!1),Me=w(!1),qe=w(0),He=w(!1);w({});const $e=w(!0),Ge=w(!0),ze=w(""),Qe=w([]),We=w({}),Ye=w({}),Ze=w([]),Je=w(),Xe=C({submitData:{},riskVOList:[{}],userData:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResult:{},isFirst:!0}),Ke=w({imgUrl:"",desc:"",title:"",link:`${window.location.href}&isShare=true`}),ea=ce({extInfo:{buttonCode:"EVENT_SHORT_saveOrder",pageCode:"productInfo",extraInfo:Se,templateId:(null==Se?void 0:Se.templateId)||"1",iseeBizNo:""}}),aa=w({}),ta=t((()=>!!Oe)),la=w([]),sa=w(),oa=w(!0),ia=w(!1),na=async()=>{Y({productCode:ge,tenantId:Ce}).then((({data:e,code:a})=>{if("10000"===a){Ve.value=e,document.title=e.BASIC_INFO.title||"",Ve.BASIC_INFO=e.BASIC_INFO;const{title:a,desc:l,image:s}=(null==e?void 0:e.PRODUCT_LIST.wxShareConfig)||{};t={title:a,desc:l,image:s},Ke.value={desc:t.desc||"你好，这里是描述",imgUrl:t.image,title:t.title,link:`${window.location.href}&isShare=true`},console.log("shareInfo",Ke.value),e.BASIC_INFO&&e.BASIC_INFO.themeType&&R(e.BASIC_INFO.themeType)}var t})),await G({productCode:ge,isTenant:!Oe}).then((({data:e,code:a})=>{var t;"10000"===a&&(He.value=!0,Fe.value=e,We.value=null==(t=e.productPlanInsureVOList)?void 0:t[0],Ze.value=(e.productPlanInsureVOList||[]).filter((e=>e.planCode)).map((e=>({planName:e.planName,planCode:e.planCode}))))})),he||Se.orderNo?z({orderNo:he||Se.orderNo,tenantId:Ce}).then((({code:e,data:a})=>{var t,l,s,o,i;if("10000"===e){ea.value=a,ia.value=!0;const e=(null==(l=null==(t=ea.value.insuredList)?void 0:t[0])?void 0:l.planCode)||"";e&&(We.value=(null==(s=Fe.value.productPlanInsureVOList)?void 0:s.find((a=>a.planCode===e)))||(null==(i=null==(o=We.value)?void 0:o.productPlanInsureVOList)?void 0:i[0])),Object.assign(Xe.userData,{...a,holder:{...a.holder,config:{verificationCode:{isView:!1,isHidden:!1,visible:!0}}}}),oa.value=!1}})):Ae?ve({proposalId:Ae,productCode:ge,tenantId:Te||Ce,proposalInsuredId:De},(e=>{fe("计划书查询参数"),Xe.userData=e,oa.value=!1})):oa.value=!1,Ge.value=!1,Z({productCode:ge}).then((({code:e,data:a})=>{var t,l,s,o;if("10000"===e){const{productMaterialPlanVOList:e,productQuestionnaireVOList:i}=a;sa.value=e||[];const{basicInfo:{questionnaireType:n},questions:r,questionnaireName:d}=(null==(t=null==i?void 0:i[0])?void 0:t.questionnaireDetailResponseVO)||{basicInfo:{}};n&&(la.value=2===n?[{attachmentName:d,attachmentUri:r,attachmentType:"question"}]:[{attachmentName:d,attachmentUri:null==(l=null==r?void 0:r[0])?void 0:l.content,attachmentType:le(String(null==(s=null==r?void 0:r[0])?void 0:s.textType),null==(o=null==r?void 0:r[0])?void 0:o.content)}])}L((()=>{Xe.isFirst=!1}))}))},ra=w([]);E((()=>aa.value.planCode),(e=>{We.value=(Fe.value.productPlanInsureVOList||[]).find((a=>a.planCode===e))}));const da=()=>{je.value.handleClickTab()("tab3")},ca=w(""),ua=w(0),pa=w(),va=async()=>{if(ta.value)window.location.href=`${window.location.origin}${A}baseInsurance/orderDetail?orderNo=mockOrderNo&tenantId=${Ce}&ISEE_BIZ=${ze}&productCode=${ge}&preview=true&templateView=${null==Se?void 0:Se.templateId}`;else try{const e=me(pa.value,Xe.trialResult,{...ea.value,extInfo:{...ea.value.extInfo,buttonCode:"EVENT_SHORT_saveOrder",iseeBizNo:ze.value,autoRenewalInfo:Je.value},operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}});J(e,(async(e,a)=>{a===q.JUMP_PAGE&&(null==e?void 0:e.orderNo)&&await(async e=>{try{const{code:a,data:t}=await z({orderNo:e,tenantId:Ce});"10000"===a&&(t.extInfo={...t.extInfo,buttonCode:"EVENT_SHORT_underWrite"},await J(t))}catch(Oa){}})(null==e?void 0:e.orderNo)}))}catch(Oa){console.log(Oa)}},{fileList:ma,mustReadFileCount:fa,popupFileList:ga}=pe(We,sa),ha=e=>{qe.value=e,Me.value=!0},Aa=()=>{const e=[];return Qe.value.filter((e=>e.value===K.INSURE)).forEach((a=>{e.push(...a.productRiskVoList)})),e},Ia=e=>{"allFalse"===e?(Ue.value=!1,va()):j.confirm({className:"xinao-custom-dialog",title:"提示",teleport:"#xinaoDialog",message:"被保人不符合健康要求，很抱歉暂时无法投保该产品",confirmButtonText:"选错了",cancelButtonText:"为其他人投保"}).then((()=>{})).catch((()=>{Ue.value=!1}))},ya=()=>{Me.value=!1,$e.value=!0,la.value.length<1?va():Ue.value=!0},ba=()=>{Ue.value=!1,Me.value=!1,$e.value=!0},xa=(e,a)=>{if(e){const t=["birthday","age","gender","id"];a.includes("occupationCodeList")&&t.push("occupationClass"),Object.keys(e).forEach((l=>{[...a,...t].includes(l)||(e[l]=null)}))}},_a=(e,a=(e=>!0))=>F(e)?e.filter(a).map((e=>e.code)):[],ka=H((async(e=!1)=>{var a;if(console.log(">>>>>调用试算<<<<<"),Xe.ifPersonalInfoSuccess||Re.value.canTrail()){const{insuranceEndDate:t,insuranceStartDate:l}=aa.value;Object.assign(Xe.submitData,{...Xe.userData,tenantId:Ce,productCode:ge,productName:Fe.value.productName,commencementTime:l,expiryDate:t}),Xe.riskList=(()=>{const{chargePeriod:e,coveragePeriod:a,paymentFrequency:t,insuranceEndDate:l,insuranceStartDate:s}=aa.value;return te([...ra.value,...Aa()]).map((l=>({...l,paymentFrequency:t,chargePeriod:e,coveragePeriod:a})))})();const s=Xe.submitData;(null==(a=s.insuredList)?void 0:a.length)&&(s.insuredList=s.insuredList.map((e=>({...e,planCode:We.value.planCode,productList:[{insurerCode:Le,productName:Fe.value.productName,productCode:ge,riskList:Xe.riskList}]})))),console.log(">>>数据构建<<<",Xe.submitData),await(async(e,a=!1)=>{Xe.trialMsg="试算中...",Xe.trialResult={};let t=!1;const{code:l}=await Q(e);t="10000"===l,t&&W(e).then((t=>{var l,s;t.data&&t.code===B?((null==(l=null==t?void 0:t.data)?void 0:l.errorInfo)&&V(`${null==(s=null==t?void 0:t.data)?void 0:s.errorInfo}`),pa.value=e,Xe.trialMsg="",Xe.trialResult=t.data,a&&(ga.value.length>0?($e.value=!1,ha(0)):la.value.length>0?Ue.value=!0:va())):Xe.trialMsg=""})).finally((()=>{Xe.isFirst=!1}))})(s,e)}}),300),wa=async(e,a=!1)=>{(e=>{const{holder:a,insuredList:t}=e||{};a&&(Xe.submitData.holder=a),t&&t.length>0&&t.forEach(((e,a)=>{var t;Xe.submitData.insuredList&&Xe.submitData.insuredList.length>a?Xe.submitData.insuredList[a]=e:((null==(t=Xe.submitData)?void 0:t.insuredList)||(Xe.submitData.insuredList=[]),Xe.submitData.insuredList.push(e))}))})(e),Xe.ifPersonalInfoSuccess=!0,console.log("投被保人的信息回传 ",e),ka()},Ca=async()=>{Ue.value=!1,Me.value=!1,Xe.isFirst=!1,ta.value?ga.value.length>0?($e.value=!1,ha(0)):la.value.length>0?Ue.value=!0:va():(Je.value=await Pe.value.validate(),Re.value.validate().then((async e=>{const{mobile:a,verificationCode:t=""}=Xe.userData.holder||{},{code:l,data:s}=await de(a,t);"10000"===l&&ka(!0)})).catch((e=>{console.log(e,"表单验证失败");const a=document.querySelector(".custom-page-form");a&&a.scrollIntoView()})))},Ea=H((()=>{console.log("----监听事件变化，重新触发试算------",Re.value.validateTrialFields()),Re.value.validateTrialFields()&&wa(Xe.userData)}),400);E((()=>ea.value.insuredList[0].relationToHolder),((e,a)=>{e!==a&&Qe.value&&Qe.value.forEach((e=>{e.value=K.UN_INSURE})),L((()=>{const{certType:e,extInfo:a}=ea.value.insuredList[0];a&&!a.hasSocialInsurance&&(ea.value.insuredList[0].extInfo.hasSocialInsurance=ee.HAS)}))}),{deep:!0,immediate:!0}),E([()=>We.value,()=>aa.value,()=>Qe.value],(()=>{Xe.isFirst||Ea()}),{deep:!0,immediate:!0}),E((()=>We.value),((e,a)=>{const{oilPackageProductVOList:t,planCode:l,insureProductRiskVOList:s}=e||{};aa.value.planCode=l,ra.value=s,Ye.value=(s||[]).find((e=>e.mainRiskFlag===O.YES)),Qe.value=(t||[]).map((e=>({...e,value:K.UN_INSURE}))),l!==(null==a?void 0:a.planCode)&&(null==a?void 0:a.planCode)&&Object.assign(Xe.userData,(()=>{console.log("--current plan = ",We.value),console.log("---current submit = ",Xe.submitData);const e=$(Xe.userData),{1:a,2:t,3:l}=We.value.productFactor||{};if(e.holder&&xa(e.holder,_a(a)),e.insuredList){const a=["productList","beneficiaryList"],s=_a(t,(e=>"2"!==String(e.subModuleType))),o=_a(t,(e=>"2"===String(e.subModuleType))),i=F(o),n=_a(l),r=F(n);e.insuredList.forEach(((e,t)=>{var l;xa(e,[...t>=1&&i?o:s,...a,...r?["insuredBeneficiaryType"]:[]]),(null==(l=e.beneficiaryList)?void 0:l.length)>0&&(r?e.beneficiaryList.forEach((e=>xa(e,n))):e.beneficiaryList.length=0),e.planCode=We.value.planCode}))}return e})())}),{deep:!0,immediate:!0});const La=S(Ne);return L((()=>{U(Ne,(([{isIntersecting:e}])=>{(e=>{La.bottom.value<0||La.top.value<0?Be.value=!e:Be.value=!1})(e)}))})),T((()=>{})),D((()=>{Ge.value=!0,na(),setTimeout((async()=>{ze.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),N((()=>{})),(e,t)=>{var A,y,b,x,_,k,w,C,E,L,O,S,T,D,N,R,j,B,V,F;const U=M;return l(),s(n,null,[d(Ge)?(l(),s("div",ye,be)):(l(),s("div",{key:1,"data-skeleton-root":"SHORT","theme-vars":d(I),class:"page-internet-product-detail"},[g("div",_e,[1==(null==(y=null==(A=d(Ve))?void 0:A.BASIC_INFO)?void 0:y.bannerType)&&(null==(x=null==(b=d(Ve))?void 0:b.BASIC_INFO)?void 0:x.banner.length)?(l(),c(se,{key:0,"data-skeleton-type":"img","indicator-color":"#ddd",images:null==(_=d(Ve))?void 0:_.BASIC_INFO.banner},null,8,["images"])):f("",!0),2==(null==(w=null==(k=d(Ve))?void 0:k.BASIC_INFO)?void 0:w.bannerType)&&(null==(E=null==(C=d(Ve))?void 0:C.BASIC_INFO)?void 0:E.video.length)?(l(),c(oe,{key:1,"data-skeleton-type":"img",src:null==(L=d(Ve))?void 0:L.BASIC_INFO.video[0]},null,8,["src"])):f("",!0),(null==(T=null==(S=null==(O=d(Ve))?void 0:O.BASIC_INFO)?void 0:S.bannerMove)?void 0:T.length)?(l(),c(se,{key:2,url:null==(R=null==(N=null==(D=d(Ve))?void 0:D.BASIC_INFO)?void 0:N.bannerMove)?void 0:R[0],onClick:da},null,8,["url"])):f("",!0),g("div",{ref_key:"root",ref:Ne},null,512)]),(null==(j=d(Ve))?void 0:j.GUARANTEE)?(l(),c(ie,{key:0,"show-service-config":"","data-source":d(Ve),"plan-list":d(Ze)},null,8,["data-source","plan-list"])):f("",!0),o(re,{ref_key:"detailScrollRef",ref:je,"order-detail":d(ea),"data-source":d(Ve)},{form:i((()=>{var e,a,s,i;return[g("div",ke,[(null==(e=d(We))?void 0:e.productFactor)&&!d(oa)?(l(),c(d(ae),{key:d(We).planCode,ref_key:"personalInfoRef",ref:Re,modelValue:d(Xe).userData,"onUpdate:modelValue":t[0]||(t[0]=e=>d(Xe).userData=e),"is-view":d(ia),"product-factor":null==(a=d(We))?void 0:a.productFactor,"multi-insured-config":null==(s=d(We))?void 0:s.multiInsuredConfigVO},null,8,["modelValue","is-view","product-factor","multi-insured-config"])):f("",!0)]),o(d(p),{"form-info":d(aa),"risk-info":d(Ye),"tenant-product-detail":d(Ve).PREMIUM,"plan-list":d(Ze),"premium-info":{premium:d(ua),premiumLoadingText:d(ca)}},null,8,["form-info","risk-info","tenant-product-detail","plan-list","premium-info"]),d(Qe).length>0?(l(),c(Ie,{key:0,"package-product-list":d(Qe)},null,8,["package-product-list"])):f("",!0),o(d(h),{ref_key:"autoRenewRef",ref:Pe,"ext-info":d(ea).extInfo,"product-factor":null==(i=d(We))?void 0:i.productFactor},null,8,["ext-info","product-factor"])]})),_:1},8,["order-detail","data-source"]),o(U,null,{default:i((()=>{var e,a,t;return[(null==(e=d(Ve).SIGNATURE)?void 0:e.inscribedContent)?(l(),c(d(v),{key:0,"inscribed-content":null==(t=null==(a=d(Ve))?void 0:a.SIGNATURE)?void 0:t.inscribedContent},null,8,["inscribed-content"])):f("",!0)]})),_:1}),o(U,null,{default:i((()=>{var e;return[(null==(e=d(ma))?void 0:e.length)?(l(),c(d(m),{key:0,"attachment-list":d(ma),"pre-text":"请阅读",onPreviewFile:t[1]||(t[1]=e=>ha(e))},null,8,["attachment-list"])):f("",!0)]})),_:1}),d(Be)?(l(),c(ue,{key:1,"is-share":null==(V=null==(B=d(Ve))?void 0:B.PRODUCT_LIST)?void 0:V.showWXShare,premium:null==(F=d(Xe).trialResult)?void 0:F.initialPremium,"share-info":d(Ke),"loading-text":d(Xe).trialMsg,"plan-code":d(aa).planCode,"payment-frequency":d(aa).paymentFrequency,"tenant-product-detail":d(Ve),onHandleClick:Ca},{default:i((()=>[u("立即投保")])),_:1},8,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail"])):f("",!0)],8,xe)),d(He)?(l(),c(ne,{key:2,"product-detail":d(Ve)},null,8,["product-detail"])):f("",!0),we,o(d(r),{show:d(Ue),"onUpdate:show":t[2]||(t[2]=e=>P(Ue)?Ue.value=e:null),"content-list":d(la),"active-index":0,onOnConfirmHealth:Ia,onOnCloseHealthByMask:ba},null,8,["show","content-list"]),d(Me)?(l(),c(d(a),{key:3,show:d(Me),"onUpdate:show":t[3]||(t[3]=e=>P(Me)?Me.value=e:null),"content-list":d($e)?d(ma):d(ga),"is-only-view":d($e),"active-index":d(qe),text:d($e)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":d($e)?0:d(fa),onSubmit:ya,onOnCloseFilePreviewByMask:ba},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):f("",!0)],64)}}});export{Ee as default};
