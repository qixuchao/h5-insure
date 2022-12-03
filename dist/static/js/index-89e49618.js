import{h as e,a8 as t,N as a,r as n,x as o,Z as r,j as l,k as d,l as i,m as u,n as s,Q as c,z as v,I as p,A as m,s as f,d as I,D as O,a3 as L,a4 as C}from"./vendor-ec956704.js";import{d as V}from"./debounce-1118622c.js";import{r as b,t as j}from"./utils-4fc39ab4.js";import{p as h}from"./product-f631271f.js";import{i as y,b as P,p as w}from"./trial-8e3986c2.js";import{_ as D,n as R}from"./nextStep-e46e7af5.js";import{u as N}from"./theme-1f207c56.js";import{P as x}from"./index-0a7aab2a.js";import{_ as Y}from"./index-47bb3bde.js";import"./useStorage-9bcf0b63.js";import"./infoCollection-321e3d68.js";import"./trial-883c8d49.js";import"./relativeTime-2d3aa0ec.js";import"./useDicData-ce5bbb3c.js";import"./core-9473afea.js";import"./index-1f943c9d.js";const g=e=>(L("data-v-ca4802a2"),e=e(),C(),e),B={class:"net-sale-wrap"},k={class:"part product-name"},E=g((()=>v("span",null,null,-1))),T=g((()=>v("span",null,null,-1))),_={class:"part"},$={class:"footer-button"};var H=Y(e({setup(e){const L=N();t();const C=a(),{productCode:Y="HTEJBX",tenantId:g="9991000001",orderNo:H,agentCode:M="",saleChannelId:A,extraInfo:F,from:S}=C.query,U=n(),z=n(),q=n(),J=n(),W=n(),G=n({});let Q={};try{Q=JSON.parse(decodeURIComponent(F))}catch(re){}const X=n({agentCode:M,commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_underWrite",pageCode:"infoCollection",templateId:null==Q?void 0:Q.templateId,iseeBizNo:"",extraInfo:Q},orderCategory:1,saleUserId:A,saleChannelId:A,tenantId:g,venderCode:"",tenantOrderHolder:{extInfo:{},mobile:"13262279090"},tenantOrderInsuredList:[{relationToHolder:"1",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"xinao",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",tenantId:g}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),Z=o((()=>{var e,t;return!!(null==(t=null==(e=q.value)?void 0:e.productRelationPlanVOList)?void 0:t.length)})),K=o((()=>{var e,t;const{premium:a}=W.value||{};if(!a){const{tenantProductInsureVO:a}=J.value||{};let n={};n=(null==(e=null==a?void 0:a.planList)?void 0:e.length)?null==a?void 0:a.planList.find((e=>e.plaCode===z.value)):null==a?void 0:a.planInsureVO;const{paymentFrequencyValue:o,premiumUnit:r}=(null==(t=null==n?void 0:n.productPremiumVOList)?void 0:t[0])||{};return o&&`${o}${r}`}return""})),ee=o((()=>{var e,t,a;let n=[];return n=Z.value?(null==(t=null==(e=q.value)?void 0:e.productRelationPlanVOList.find((e=>e.planCode===z.value)))?void 0:t.productRiskVoList)||[]:(null==(a=q.value)?void 0:a.productRiskVoList)||[],n})),te=o((()=>{var e,t,a;const n=ee.value||[];return 1===((null==(a=null==(t=null==(e=null==n?void 0:n[0])?void 0:e.riskDetailVOList)?void 0:t[0])?void 0:a.insuranceStartType)||1)?`${I(new Date).format("YYYY-MM-DD")} 00:00:00`:`${I(new Date).add(1,"day").format("YYYY-MM-DD")} 00:00:00`})),ae=o((()=>{var e,t;const a=ee.value||[],{insuranceEndType:n,riskInsureLimitVO:o}=(null==(t=null==(e=null==a?void 0:a[0])?void 0:e.riskDetailVOList)?void 0:t[0])||{},{insurancePeriodValueList:r}=o||{},[l,d]=((null==r?void 0:r[0])||"").split("_");return 1===n?`${I(new Date).add(d||0,l).format("YYYY-MM-DD")} 23:59:59`:`${I(new Date).add(d,l).format("YYYY-MM-DD")} 00:00:00`})),ne=async()=>{var e,t,a;X.value.venderCode=null==(e=q.value)?void 0:e.productBasicInfoVO.insurerCode,X.value.orderAmount=W.value.premium,X.value.orderRealAmount=W.value.premium,X.value.commencementTime=te.value,X.value.expiryDate=ae.value,X.value.tenantOrderInsuredList[0].planCode=z.value,X.value.tenantOrderInsuredList[0].planName=null==(a=null==(t=q.value)?void 0:t.productRelationPlanVOList.find((e=>e.planCode===z.value)))?void 0:a.planName,R(((e={},t={},a={})=>{var n;const o={...a},r={tenantId:g,riskList:(null==(n=o.tenantOrderInsuredList[0])?void 0:n.tenantOrderProductList[0].riskVOList)||[],riskPremium:t,productId:null==e?void 0:e.productBasicInfoVO.id};return o.tenantOrderInsuredList[0].tenantOrderProductList[0]={premium:W.value.premium,productCode:e.productBasicInfoVO.productCode,productName:e.productBasicInfoVO.productName,tenantOrderRiskList:j(r)},o})(q.value,W.value,X.value),(()=>{}))},oe=async()=>{var e;null==(e=U.value)||e.validateForm().then((()=>{O.confirm({title:"分享",message:`即将向客户【${X.value.tenantOrderHolder.name}】发送投保确认信息,请确认是否继续？`}).then((()=>{ne()}))}))};r([()=>{var e;return null==(e=X.value.tenantOrderInsuredList)?void 0:e[0].gender},()=>{var e;return null==(e=X.value.tenantOrderInsuredList)?void 0:e[0].birthday},()=>z.value],V((([e,t])=>{e&&t&&(async(e,t,a)=>{var n;const o={holder:{personVO:e.tenantOrderHolder},insuredVOList:e.tenantOrderInsuredList.map((e=>({insuredCode:"",personVO:e,productPlanVOList:[{insurerCode:t.productBasicInfoVO.insurerCode,planCode:z.value||0,riskVOList:b(a)}]}))),productCode:t.productBasicInfoVO.productCode,tenantId:g},{code:r}=await P(o);if("10000"===r){const{code:e,data:t}=await w(o);W.value="10000"===e?t:null}X.value.tenantOrderInsuredList[0].tenantOrderProductList=null==(n=o.insuredVOList[0])?void 0:n.productPlanVOList})(X.value,q.value,ee.value)}),500));return l((()=>{(async()=>{var e;const{code:t,data:a}=await h({productCode:Y,withInsureInfo:!0,tenantId:g});"10000"===t&&(J.value=a,document.title=a.productFullName||"");const{code:n,data:o}=await y({productCode:Y});"10000"===n&&(q.value=o,G.value=o.productFactor,(null==(e=null==o?void 0:o.productRelationPlanVOList)?void 0:e.length)&&(z.value=o.productRelationPlanVOList[0].planCode))})(),setTimeout((async()=>{window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const a=d("ProRadioButton"),n=d("ProCard"),o=d("ProCell"),r=d("ProPageWrap"),l=d("van-config-provider");return i(),u(l,{"theme-vars":m(L)},{default:s((()=>[c(r,null,{default:s((()=>{var e,r;return[v("div",B,[v("div",k,p(null==(r=null==(e=q.value)?void 0:e.productBasicInfoVO)?void 0:r.productFullName),1),m(Z)?(i(),u(n,{key:0,"show-line":!1,title:"保障年期"},{default:s((()=>{var e;return[c(a,{modelValue:z.value,"onUpdate:modelValue":t[0]||(t[0]=e=>z.value=e),class:"radio-group",prop:{label:"planName",value:"planCode"},options:null==(e=q.value)?void 0:e.productRelationPlanVOList},null,8,["modelValue","options"])]})),_:1})):f("",!0),c(D,{ref_key:"formRef",ref:U,"title-collection":{HOLDER:"投保人",INSURER:"被保人",BENEFICIARY:"收益人"},"need-desensitize":"","form-info":X.value,"send-sms-code":()=>{},"input-align":"left","factor-object":G.value},{holderName:s((()=>[E])),insurerName:s((()=>[T])),_:1},8,["form-info","send-sms-code","factor-object"]),v("div",_,[c(o,{title:"保费",content:m(K)},null,8,["content"]),c(o,{title:"保障期间",content:`${m(te).split(" ")[0]}~${m(ae).split(" ")[0]}`},null,8,["content"])]),v("div",$,[c(x,{text:"分享用户确认投保",onClick:oe})])])]})),_:1})])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-ca4802a2"]]);export{H as default};
