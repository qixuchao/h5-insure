import{_ as e,d as t,a,r as n,x as o,a8 as r,y as l,b as i,c as d,e as u,w as s,f as c,i as v,t as p,l as m,j as f,$ as I,a5 as O,K as L,L as C,a3 as V,T as y}from"./index-8f47c774.js";import{d as j}from"./debounce-ece52d3b.js";import{r as h,t as b}from"./utils-3a8c57b9.js";import{p as P}from"./product-c9124e2e.js";import{i as R,b as T,p as w}from"./trial-3ef3f449.js";import D from"./index-2270b663.js";import{u as g}from"./theme-65292714.js";import{n as x}from"./nextStep-d3de5f58.js";import E from"./index-6100b7cf.js";import"./pdfh5-e5c0db2a.js";import"./infoCollection-4a054aed.js";import"./useStorage-17f91234.js";import"./trial-c33602bf.js";import"./relativeTime-190c9ccf.js";import"./validator-5a13dc82.js";import"./useDicData-e5c11b2b.js";import"./core-478e3021.js";import"./index-c6b2b786.js";const k=e=>(L("data-v-7aafae48"),e=e(),C(),e),B={class:"net-sale-wrap"},N={class:"part product-name"},Y=k((()=>v("span",null,null,-1))),H=k((()=>v("span",null,null,-1))),$={class:"part"},_={class:"footer"};var F=e(t({setup(e){const t=g(),L=a(),{productCode:C="HTEJBX",tenantId:k="9991000001",agentCode:F="",agencyCode:M,saleChannelId:S,extraInfo:A,preview:U}=L.query,z=n(),q=n("0"),J=n(),W=n(),G=n(),K=n([{}]),X=n([]),Q=n({}),Z=n("");let ee={};try{ee=JSON.parse(decodeURIComponent(A))}catch(ue){}const te=n({agencyId:M,agentCode:F,commencementTime:"",expiryDate:"",extInfo:{buttonCode:"EVENT_NETSALE_underWrite",pageCode:"infoCollection",templateId:ee.templateId,iseeBizNo:Z.value,extraInfo:ee},orderCategory:1,saleUserId:F,saleChannelId:S,tenantId:k,venderCode:"",tenantOrderHolder:{extInfo:{occupationCodeList:[]}},tenantOrderInsuredList:[{relationToHolder:"1",extInfo:{occupationCodeList:[]},tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}],tenantOrderProductList:[{}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"xinao",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",subjectNo:"",tenantId:k}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),ae=o((()=>{var e,t;return((null==(t=null==(e=J.value)?void 0:e.productRelationPlanVOList)?void 0:t.length)||0)>1})),ne=n();r([()=>G.value,()=>W.value,()=>q.value],(()=>{var e,t;const{premium:a}=G.value||{};if(a)ne.value=a&&`￥${a}元`;else{const{tenantProductInsureVO:a}=W.value||{};let n={};n=(null==(e=null==a?void 0:a.planList)?void 0:e.length)?((null==a?void 0:a.planList)||[]).find((e=>e.planCode===q.value)):null==a?void 0:a.planInsureVO;const{paymentFrequencyValue:o,premiumUnit:r}=(null==(t=null==n?void 0:n.productPremiumVOList)?void 0:t[0])||{};ne.value=o&&`￥${o}${r||"元"}`}}),{deep:!0,immediate:!0});const oe=o((()=>{var e,t,a,n,o;let r=[];return r=(null==(t=null==(e=J.value)?void 0:e.productRelationPlanVOList)?void 0:t.length)?(null==(n=null==(a=J.value)?void 0:a.productRelationPlanVOList.find((e=>e.planCode===q.value)))?void 0:n.productRiskVoList)||[]:(null==(o=J.value)?void 0:o.productRiskVoList)||[],r})),re=o((()=>{var e,t,a;const n=oe.value||[];return 1===((null==(a=null==(t=null==(e=null==n?void 0:n[0])?void 0:e.riskDetailVOList)?void 0:t[0])?void 0:a.insuranceStartType)||1)?`${I(new Date).format("YYYY-MM-DD")} 00:00:00`:`${I(new Date).add(1,"day").format("YYYY-MM-DD")} 00:00:00`})),le=o((()=>{var e,t;const a=oe.value||[],{insuranceEndType:n,riskInsureLimitVO:o}=(null==(t=null==(e=null==a?void 0:a[0])?void 0:e.riskDetailVOList)?void 0:t[0])||{},{insurancePeriodValueList:r}=o||{},[l,i]=((null==r?void 0:r[0])||"").split("_");return 1===n?`${I(new Date).add(i||0,l).format("YYYY-MM-DD")} 23:59:59`:n?`${I(new Date).add(i,l).format("YYYY-MM-DD")} 00:00:00`:""})),ie=async()=>{var e,t,a;te.value.venderCode=null==(e=J.value)?void 0:e.productBasicInfoVO.insurerCode,te.value.orderAmount=null==(t=G.value)?void 0:t.premium,te.value.orderRealAmount=null==(a=G.value)?void 0:a.premium,te.value.commencementTime=re.value,te.value.expiryDate=le.value,te.value.extInfo&&(te.value.extInfo.iseeBizNo=Z.value),te.value.tenantOrderInsuredList&&(te.value.tenantOrderInsuredList[0].planCode=q.value),x(((e,t,a)=>{var n,o;const r={},l=(e=[])=>{(e||[]).forEach((e=>{var t;r[e.riskCode]=e,(null==(t=e.riskPremiumDetailVOList)?void 0:t.length)&&l(e.riskPremiumDetailVOList)}))};l(null==t?void 0:t.riskPremiumDetailVOList);const i={...a},d={tenantId:k,riskList:(null==(n=X.value)?void 0:n[0].riskVOList)||[],riskPremium:r,productId:(null==e?void 0:e.productBasicInfoVO.id)||0};return i.tenantOrderHolder&&(i.tenantOrderHolder.certType=i.tenantOrderHolder.certType||V.CERT),i.tenantOrderInsuredList&&(i.tenantOrderInsuredList[0].certType=i.tenantOrderInsuredList[0].certType||V.CERT,i.tenantOrderInsuredList[0].tenantOrderProductList=[{premium:null==(o=G.value)?void 0:o.premium,productCode:null==e?void 0:e.productBasicInfoVO.productCode,productName:null==e?void 0:e.productBasicInfoVO.productName,tenantOrderRiskList:b(d)}]),i})(J.value,G.value,te.value),((e,t)=>{"jumpToPage"===t&&y("提交成功")}))},de=async()=>{var e;null==(e=z.value)||e.validateForm().then((()=>{var e,t;O.confirm({title:"分享",message:`即将向客户【${null==(t=null==(e=te.value)?void 0:e.tenantOrderHolder)?void 0:t.name}】发送投保确认信息,请确认是否继续？`}).then((()=>{U||ie()}))}))};r([()=>{var e;return null==(e=te.value.tenantOrderInsuredList)?void 0:e[0].name},()=>{var e;return null==(e=te.value.tenantOrderInsuredList)?void 0:e[0].birthday},()=>q.value],j((([e,t])=>{e&&t&&(U||(async(e,t,a)=>{var n,o;const r={holder:{personVO:{certType:V.CERT,...e.tenantOrderHolder}},insuredVOList:((null==e?void 0:e.tenantOrderInsuredList)||[]).map((e=>({insuredCode:"",personVO:{...e,certType:V.CERT},productPlanVOList:[{insurerCode:null==t?void 0:t.productBasicInfoVO.insurerCode,planCode:q.value||"0",riskVOList:h(a)}]}))),productCode:null==t?void 0:t.productBasicInfoVO.productCode,productId:null==t?void 0:t.productBasicInfoVO.id,tenantId:k},{code:l}=await T(r);if("10000"===l){const{code:e,data:t}=await w(r);"10000"===e?(G.value=t,X.value=(null==(o=null==(n=null==r?void 0:r.insuredVOList)?void 0:n[0])?void 0:o.productPlanVOList)||[]):G.value=void 0}})(te.value,J.value,oe.value))}),500));return r((()=>q.value),(()=>{K.value&&(Q.value=K.value[q.value])})),l((()=>{(async()=>{await P({productCode:C,withInsureInfo:!0,tenantId:k}).then((({code:e,data:t})=>{var a;"10000"===e&&(W.value=t,document.title=(null==(a=t.tenantProductInsureVO)?void 0:a.productName)||"")})),R({productCode:C}).then((({code:e,data:t})=>{var a;"10000"===e&&(J.value=t,K.value=t.planFactor,(null==(a=t.productRelationPlanVOList)?void 0:a.length)&&(q.value=t.productRelationPlanVOList[0].planCode||""),t.productFactor?Q.value=t.productFactor:t.planFactor&&(Q.value=t.planFactor[q.value]))}))})(),setTimeout((async()=>{Z.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const n=i("ProRadioButton"),o=i("ProCard"),r=i("ProCell"),l=i("ProPageWrap"),I=i("van-config-provider");return d(),u(I,{"theme-vars":m(t)},{default:s((()=>[c(l,null,{default:s((()=>{var e,t;return[v("div",B,[v("div",N,p(null==(t=null==(e=J.value)?void 0:e.productBasicInfoVO)?void 0:t.productFullName),1),m(ae)?(d(),u(o,{key:0,"show-line":!1,title:"保障年期"},{default:s((()=>{var e;return[c(n,{modelValue:q.value,"onUpdate:modelValue":a[0]||(a[0]=e=>q.value=e),class:"radio-group",prop:{label:"planName",value:"planCode"},options:null==(e=J.value)?void 0:e.productRelationPlanVOList},null,8,["modelValue","options"])]})),_:1})):f("",!0),c(D,{ref_key:"formRef",ref:z,"title-collection":{HOLDER:"投保人",INSURER:"被保人",BENEFICIARY:"收益人"},"form-info":te.value,"send-sms-code":()=>{},"input-align":"left","factor-object":Q.value},{holderName:s((()=>[Y])),insurerName:s((()=>[H])),_:1},8,["form-info","send-sms-code","factor-object"]),v("div",$,[c(r,{title:"保费",content:ne.value},null,8,["content"]),c(r,{title:"保障期间",content:`${m(re).split(" ")[0]}~${m(le).split(" ")[0]}`},null,8,["content"])]),v("div",_,[c(E,{shadow:!1,text:"分享用户确认投保",onClick:de})])])]})),_:1})])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-7aafae48"]]);export{F as default};
