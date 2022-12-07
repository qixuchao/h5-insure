import{h as e,a8 as t,N as a,r as n,x as o,Z as r,j as l,k as i,l as u,m as d,n as s,Q as c,z as v,I as p,A as m,s as f,d as I,D as O,a3 as L,a4 as V,T as C}from"./vendor-0381d15c.js";import{d as b}from"./debounce-924a6220.js";import{r as j,t as h}from"./utils-b39cb526.js";import{p as y}from"./product-723199b0.js";import{i as P,b as D,p as w}from"./trial-1b0d60bf.js";import{_ as g,n as R}from"./nextStep-a8b19651.js";import{u as k}from"./theme-126054aa.js";import{P as x}from"./index-1b260647.js";import{_ as N}from"./index-7313e6a7.js";import"./infoCollection-cef9706f.js";import"./useStorage-3bf82adc.js";import"./trial-a86978bf.js";import"./relativeTime-71db0de4.js";import"./validator-5a13dc82.js";import"./useDicData-ec7c9b21.js";import"./core-4d3ee21b.js";import"./index-38a8c5cf.js";const Y=e=>(L("data-v-2eee1961"),e=e(),V(),e),B={class:"net-sale-wrap"},E={class:"part product-name"},T=Y((()=>v("span",null,null,-1))),_=Y((()=>v("span",null,null,-1))),H={class:"part"},F={class:"footer"};var $=N(e({setup(e){const L=k();t();const V=a(),{productCode:N="HTEJBX",tenantId:Y="9991000001",orderNo:$,agentCode:M="",agencyCode:A,saleChannelId:S,extraInfo:z,from:U}=V.query,q=n(),J=n(),W=n(),G=n(),Q=n(),X=n({}),Z=n({}),K=n({}),ee=n();let te={};try{te=JSON.parse(decodeURIComponent(z))}catch(se){}const ae=n({agencyId:A,agentCode:M,commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_underWrite",pageCode:"infoCollection",templateId:null==te?void 0:te.templateId,iseeBizNo:ee,extraInfo:te},orderCategory:1,saleChannelId:S,tenantId:Y,venderCode:"",tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"1",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"xinao",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",tenantId:Y}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),ne=o((()=>{var e,t;return!!(null==(t=null==(e=W.value)?void 0:e.productRelationPlanVOList)?void 0:t.length)})),oe=n();r([()=>Q.value,()=>G.value,()=>J.value],(()=>{var e,t;const{premium:a}=Q.value||{};if(a)oe.value=a&&`￥${a}元`;else{const{tenantProductInsureVO:a}=G.value||{};let n={};n=(null==(e=null==a?void 0:a.planList)?void 0:e.length)?((null==a?void 0:a.planList)||[]).find((e=>e.planCode===J.value)):null==a?void 0:a.planInsureVO;const{paymentFrequencyValue:o,premiumUnit:r}=(null==(t=null==n?void 0:n.productPremiumVOList)?void 0:t[0])||{};oe.value=o&&`￥${o}${r||"元"}`}}),{deep:!0,immediate:!0});const re=o((()=>{var e,t,a;let n=[];return n=ne.value?(null==(t=null==(e=W.value)?void 0:e.productRelationPlanVOList.find((e=>e.planCode===J.value)))?void 0:t.productRiskVoList)||[]:(null==(a=W.value)?void 0:a.productRiskVoList)||[],n})),le=o((()=>{var e,t,a;const n=re.value||[];return 1===((null==(a=null==(t=null==(e=null==n?void 0:n[0])?void 0:e.riskDetailVOList)?void 0:t[0])?void 0:a.insuranceStartType)||1)?`${I(new Date).format("YYYY-MM-DD")} 00:00:00`:`${I(new Date).add(1,"day").format("YYYY-MM-DD")} 00:00:00`})),ie=o((()=>{var e,t;const a=re.value||[],{insuranceEndType:n,riskInsureLimitVO:o}=(null==(t=null==(e=null==a?void 0:a[0])?void 0:e.riskDetailVOList)?void 0:t[0])||{},{insurancePeriodValueList:r}=o||{},[l,i]=((null==r?void 0:r[0])||"").split("_");return 1===n?`${I(new Date).add(i||0,l).format("YYYY-MM-DD")} 23:59:59`:n?`${I(new Date).add(i,l).format("YYYY-MM-DD")} 00:00:00`:""})),ue=async()=>{var e;ae.value.venderCode=null==(e=W.value)?void 0:e.productBasicInfoVO.insurerCode,ae.value.orderAmount=Q.value.premium,ae.value.orderRealAmount=Q.value.premium,ae.value.commencementTime=le.value,ae.value.expiryDate=ie.value,ae.value.extInfo.iseeBizNo=ee.value,ae.value.tenantOrderInsuredList[0].planCode=J.value,R(((e={},t={},a={})=>{var n;const o={},r=(e=[])=>{(e||[]).forEach((e=>{var t;o[e.riskCode]=e,(null==(t=e.riskPremiumDetailVOList)?void 0:t.length)&&r(e.riskPremiumDetailVOList)}))};r(t.riskPremiumDetailVOList);const l={...a},i={tenantId:Y,riskList:(null==(n=Z.value)?void 0:n[0].riskVOList)||[],riskPremium:o,productId:null==e?void 0:e.productBasicInfoVO.id};return l.tenantOrderInsuredList[0].tenantOrderProductList=[{premium:Q.value.premium,productCode:e.productBasicInfoVO.productCode,productName:e.productBasicInfoVO.productName,tenantOrderRiskList:h(i)}],l})(W.value,Q.value,ae.value),((e,t)=>{"jumpToPage"===t&&C("提交成功")}))},de=async()=>{var e;null==(e=q.value)||e.validateForm().then((()=>{O.confirm({title:"分享",message:`即将向客户【${ae.value.tenantOrderHolder.name}】发送投保确认信息,请确认是否继续？`}).then((()=>{ue()}))}))};r([()=>ae.value.tenantOrderHolder.gender,()=>ae.value.tenantOrderHolder.name,()=>ae.value.tenantOrderHolder.birthday,()=>{var e;return null==(e=ae.value.tenantOrderInsuredList)?void 0:e[0].name},()=>{var e;return null==(e=ae.value.tenantOrderInsuredList)?void 0:e[0].gender},()=>{var e;return null==(e=ae.value.tenantOrderInsuredList)?void 0:e[0].birthday},()=>J.value],b((([e,t,a,n,o,r])=>{t&&n&&o&&r&&(async(e,t,a)=>{var n;const o={holder:{personVO:e.tenantOrderHolder},insuredVOList:e.tenantOrderInsuredList.map((e=>({insuredCode:"",personVO:e,productPlanVOList:[{insurerCode:t.productBasicInfoVO.insurerCode,planCode:J.value||0,riskVOList:j(a)}]}))),productCode:t.productBasicInfoVO.productCode,tenantId:Y},{code:r}=await D(o);if("10000"===r){const{code:e,data:t}=await w(o);"10000"===e?(Q.value=t,Z.value=null==(n=o.insuredVOList[0])?void 0:n.productPlanVOList):Q.value=null}})(ae.value,W.value,re.value)}),500));return r((()=>J.value),(()=>{X.value&&(K.value=X.value[J.value])})),l((()=>{(async()=>{var e,t;const{code:a,data:n}=await y({productCode:N,withInsureInfo:!0,tenantId:Y});"10000"===a&&(G.value=n,document.title=(null==(e=n.tenantProductInsureVO)?void 0:e.productNam)||"");const{code:o,data:r}=await P({productCode:N});"10000"===o&&(W.value=r,X.value=r.planFactor,(null==(t=null==r?void 0:r.productRelationPlanVOList)?void 0:t.length)&&(J.value=r.productRelationPlanVOList[0].planCode),r.productFactor?K.value=r.productFactor:r.planFactor&&(K.value=r.planFactor[J.value]))})(),setTimeout((async()=>{ee.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,t)=>{const a=i("ProRadioButton"),n=i("ProCard"),o=i("ProCell"),r=i("ProPageWrap"),l=i("van-config-provider");return u(),d(l,{"theme-vars":m(L)},{default:s((()=>[c(r,null,{default:s((()=>{var e,r;return[v("div",B,[v("div",E,p(null==(r=null==(e=W.value)?void 0:e.productBasicInfoVO)?void 0:r.productFullName),1),m(ne)?(u(),d(n,{key:0,"show-line":!1,title:"保障年期"},{default:s((()=>{var e;return[c(a,{modelValue:J.value,"onUpdate:modelValue":t[0]||(t[0]=e=>J.value=e),class:"radio-group",prop:{label:"planName",value:"planCode"},options:null==(e=W.value)?void 0:e.productRelationPlanVOList},null,8,["modelValue","options"])]})),_:1})):f("",!0),c(g,{ref_key:"formRef",ref:q,"title-collection":{HOLDER:"投保人",INSURER:"被保人",BENEFICIARY:"收益人"},"need-desensitize":"","form-info":ae.value,"send-sms-code":()=>{},"input-align":"left","factor-object":K.value},{holderName:s((()=>[T])),insurerName:s((()=>[_])),_:1},8,["form-info","send-sms-code","factor-object"]),v("div",H,[c(o,{title:"保费",content:oe.value},null,8,["content"]),c(o,{title:"保障期间",content:`${m(le).split(" ")[0]}~${m(ie).split(" ")[0]}`},null,8,["content"])]),v("div",F,[c(x,{shadow:!1,text:"分享用户确认投保",onClick:de})])])]})),_:1})])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-2eee1961"]]);export{$ as default};
