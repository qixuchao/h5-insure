import{h as e,a8 as t,N as a,r as n,x as r,Z as o,j as l,k as d,l as i,m as u,n as s,Q as c,z as v,I as p,A as m,s as f,d as I,D as O,a3 as L,a4 as C,T as V}from"./vendor-0381d15c.js";import{d as b}from"./debounce-924a6220.js";import{r as h,t as j}from"./utils-a8e11e1f.js";import{p as P}from"./product-4a9db71e.js";import{i as y,b as D,p as w}from"./trial-da1ab050.js";import{_ as g,n as R}from"./nextStep-fa939f0b.js";import{u as N}from"./theme-bc16780d.js";import{P as k}from"./index-139685bc.js";import{_ as x}from"./index-bf9f8d67.js";import"./useStorage-aecebdbd.js";import"./infoCollection-7c952fce.js";import"./trial-5fe0227a.js";import"./relativeTime-71db0de4.js";import"./useDicData-022bc401.js";import"./core-a64ed2d4.js";import"./index-38a8c5cf.js";const Y=e=>(L("data-v-1dd27b92"),e=e(),C(),e),B={class:"net-sale-wrap"},E={class:"part product-name"},T=Y((()=>v("span",null,null,-1))),_=Y((()=>v("span",null,null,-1))),H={class:"part"},$={class:"footer"};var M=x(e({setup(e){const L=N();t();const C=a(),{productCode:x="HTEJBX",tenantId:Y="9991000001",orderNo:M,agentCode:A="",agencyCode:F,saleChannelId:S,extraInfo:z,from:U}=C.query,q=n(),J=n(),W=n(),G=n(),Q=n(),X=n({});let Z={};try{Z=JSON.parse(decodeURIComponent(z))}catch(de){}const K=n({agencyId:F,agentCode:A,commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_underWrite",pageCode:"infoCollection",templateId:null==Z?void 0:Z.templateId,iseeBizNo:"",extraInfo:Z},orderCategory:1,saleChannelId:S,tenantId:Y,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"1",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"xinao",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",tenantId:Y}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),ee=r((()=>{var e,t;return!!(null==(t=null==(e=W.value)?void 0:e.productRelationPlanVOList)?void 0:t.length)})),te=n();o([()=>Q.value,()=>G.value,()=>J.value],(()=>{var e,t;const{premium:a}=Q.value||{};if(a)te.value=a&&`￥${a}元`;else{const{tenantProductInsureVO:a}=G.value||{};let n={};n=(null==(e=null==a?void 0:a.planList)?void 0:e.length)?((null==a?void 0:a.planList)||[]).find((e=>e.planCode===J.value)):null==a?void 0:a.planInsureVO;const{paymentFrequencyValue:r,premiumUnit:o}=(null==(t=null==n?void 0:n.productPremiumVOList)?void 0:t[0])||{};te.value=r&&`￥${r}${o||"元"}`}}),{deep:!0,immediate:!0});const ae=r((()=>{var e,t,a;let n=[];return n=ee.value?(null==(t=null==(e=W.value)?void 0:e.productRelationPlanVOList.find((e=>e.planCode===J.value)))?void 0:t.productRiskVoList)||[]:(null==(a=W.value)?void 0:a.productRiskVoList)||[],n})),ne=r((()=>{var e,t,a;const n=ae.value||[];return 1===((null==(a=null==(t=null==(e=null==n?void 0:n[0])?void 0:e.riskDetailVOList)?void 0:t[0])?void 0:a.insuranceStartType)||1)?`${I(new Date).format("YYYY-MM-DD")} 00:00:00`:`${I(new Date).add(1,"day").format("YYYY-MM-DD")} 00:00:00`})),re=r((()=>{var e,t;const a=ae.value||[],{insuranceEndType:n,riskInsureLimitVO:r}=(null==(t=null==(e=null==a?void 0:a[0])?void 0:e.riskDetailVOList)?void 0:t[0])||{},{insurancePeriodValueList:o}=r||{},[l,d]=((null==o?void 0:o[0])||"").split("_");return 1===n?`${I(new Date).add(d||0,l).format("YYYY-MM-DD")} 23:59:59`:n?`${I(new Date).add(d,l).format("YYYY-MM-DD")} 00:00:00`:""})),oe=async()=>{var e,t,a;K.value.venderCode=null==(e=W.value)?void 0:e.productBasicInfoVO.insurerCode,K.value.orderAmount=Q.value.premium,K.value.orderRealAmount=Q.value.premium,K.value.commencementTime=ne.value,K.value.expiryDate=re.value,K.value.tenantOrderInsuredList[0].planCode=J.value,K.value.tenantOrderInsuredList[0].planName=null==(a=null==(t=W.value)?void 0:t.productRelationPlanVOList.find((e=>e.planCode===J.value)))?void 0:a.planName,R(((e={},t={},a={})=>{var n;const r={},o=(e=[])=>{(e||[]).forEach((e=>{var t;r[e.riskCode]=e,(null==(t=e.riskPremiumDetailVOList)?void 0:t.length)&&o(e.riskPremiumDetailVOList)}))};o(t.riskPremiumDetailVOList);const l={...a},d={tenantId:Y,riskList:(null==(n=l.tenantOrderInsuredList[0])?void 0:n.tenantOrderProductList[0].riskVOList)||[],riskPremium:r,productId:null==e?void 0:e.productBasicInfoVO.id};return l.tenantOrderInsuredList[0].tenantOrderProductList[0]={premium:Q.value.premium,productCode:e.productBasicInfoVO.productCode,productName:e.productBasicInfoVO.productName,tenantOrderRiskList:j(d)},l})(W.value,Q.value,K.value),((e,t)=>{"jumpToPage"===t&&V("提交成功")}))},le=async()=>{var e;null==(e=q.value)||e.validateForm().then((()=>{O.confirm({title:"分享",message:`即将向客户【${K.value.tenantOrderHolder.name}】发送投保确认信息,请确认是否继续？`}).then((()=>{oe()}))}))};o([()=>K.value.tenantOrderHolder.gender,()=>K.value.tenantOrderHolder.birthday,()=>{var e;return null==(e=K.value.tenantOrderInsuredList)?void 0:e[0].gender},()=>{var e;return null==(e=K.value.tenantOrderInsuredList)?void 0:e[0].birthday},()=>J.value],b((([e,t])=>{e&&t&&(async(e,t,a)=>{var n;const r={holder:{personVO:e.tenantOrderHolder},insuredVOList:e.tenantOrderInsuredList.map((e=>({insuredCode:"",personVO:e,productPlanVOList:[{insurerCode:t.productBasicInfoVO.insurerCode,planCode:J.value||0,riskVOList:h(a)}]}))),productCode:t.productBasicInfoVO.productCode,tenantId:Y},{code:o}=await D(r);if("10000"===o){const{code:e,data:t}=await w(r);Q.value="10000"===e?t:null}K.value.tenantOrderInsuredList[0].tenantOrderProductList=null==(n=r.insuredVOList[0])?void 0:n.productPlanVOList})(K.value,W.value,ae.value)}),500));return l((()=>{(async()=>{var e;const{code:t,data:a}=await P({productCode:x,withInsureInfo:!0,tenantId:Y});"10000"===t&&(G.value=a,document.title=a.productFullName||"");const{code:n,data:r}=await y({productCode:x});"10000"===n&&(W.value=r,X.value=r.productFactor,(null==(e=null==r?void 0:r.productRelationPlanVOList)?void 0:e.length)&&(J.value=r.productRelationPlanVOList[0].planCode))})(),setTimeout((async()=>{window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const a=d("ProRadioButton"),n=d("ProCard"),r=d("ProCell"),o=d("ProPageWrap"),l=d("van-config-provider");return i(),u(l,{"theme-vars":m(L)},{default:s((()=>[c(o,null,{default:s((()=>{var e,o;return[v("div",B,[v("div",E,p(null==(o=null==(e=W.value)?void 0:e.productBasicInfoVO)?void 0:o.productFullName),1),m(ee)?(i(),u(n,{key:0,"show-line":!1,title:"保障年期"},{default:s((()=>{var e;return[c(a,{modelValue:J.value,"onUpdate:modelValue":t[0]||(t[0]=e=>J.value=e),class:"radio-group",prop:{label:"planName",value:"planCode"},options:null==(e=W.value)?void 0:e.productRelationPlanVOList},null,8,["modelValue","options"])]})),_:1})):f("",!0),c(g,{ref_key:"formRef",ref:q,"title-collection":{HOLDER:"投保人",INSURER:"被保人",BENEFICIARY:"收益人"},"need-desensitize":"","form-info":K.value,"send-sms-code":()=>{},"input-align":"left","factor-object":X.value},{holderName:s((()=>[T])),insurerName:s((()=>[_])),_:1},8,["form-info","send-sms-code","factor-object"]),v("div",H,[c(r,{title:"保费",content:te.value},null,8,["content"]),c(r,{title:"保障期间",content:`${m(ne).split(" ")[0]}~${m(re).split(" ")[0]}`},null,8,["content"])]),v("div",$,[c(k,{shadow:!1,text:"分享用户确认投保",onClick:le})])])]})),_:1})])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-1dd27b92"]]);export{M as default};
