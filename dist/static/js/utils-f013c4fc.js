import{d as e,r as a,ay as n,R as t,c as r,A as i,f as o,g as s,i as l,h as d,E as u,U as c,w as p,k as m,j as y,a9 as f,az as h,ae as v,C}from"./index-180b6c5e.js";import{P as k}from"./index-aa53d723.js";import{b as T,c as I}from"./trial-4e94ef5e.js";const O={class:"trial-button-wrap"},D={class:"footer-area"},x=o("span",null,"分享",-1),P={class:"price"},g={key:0},E=e({name:"trialButton"}),S=e({...E,props:{premium:{default:0},tenantProductDetail:{default:()=>({})},planCode:{default:void 0},loadingText:{default:""},paymentFrequency:{default:""},shareInfo:{default:()=>({})},isShare:{type:Boolean,default:!1},handleShare:null},emits:["handleClick"],setup(e,{emit:C}){const T=e,I=a(""),E=a(""),S=n(),L=a(),R=()=>{T.handleShare?T.handleShare((()=>L.value.handleShare())):L.value.handleShare()};return t([()=>T.premium,()=>T.tenantProductDetail,()=>T.paymentFrequency,()=>T.planCode],(([e])=>{const{PREMIUM:a=[]}=T.tenantProductDetail||{};let n={};if(null==a?void 0:a.length){n=(a||[]).find((e=>e.planCode===T.planCode||!e.planCode))||{};const t=((null==n?void 0:n.data)||[]).find((e=>e.paymentFrequency===T.paymentFrequency)),{premium:r,minActualUnit:i}=t||{};e?(E.value=i,I.value=e&&`${e}`):(E.value=r,I.value="")}else e&&(E.value="",I.value=e&&`${e}`)}),{deep:!0,immediate:!0}),(a,n)=>{const t=v;return r(),i("div",O,[o("div",D,[e.isShare&&s(S)?(r(),i("div",{key:0,class:"com-share",onClick:R},[l(t,{name:"share-icon","font-size":"24px",color:"#AEAEAE"}),x])):d("",!0),o("div",P,[e.loadingText?(r(),i("span",g,u(e.loadingText),1)):(r(),i(c,{key:1},[o("span",null,u(s(I)),1),o("span",null,u(s(E)),1)],64))]),l(k,{shadow:!1,class:"right",onClick:n[0]||(n[0]=e=>C("handleClick"))},{default:p((()=>[m(a.$slots,"default",{},(()=>[y("立即投保")]))])),_:3})]),l(h,f({ref_key:"shareRef",ref:L},e.shareInfo),null,16)])}}}),L=(e,a)=>{const n=[];return e.forEach((e=>{var t;null==(t=e.tenantOrderRiskList)||t.forEach((e=>{const{currentAmount:t,paymentPeriod:r,paymentPeriodType:i,liabilityDetails:o,extInfo:s,insurancePeriodValue:l,insurancePeriodType:d,paymentFrequency:u,riskType:c,riskCode:p,initialPremium:m,initialAmount:y,annuityDrawFrequency:f,annuityDrawDate:h}=e;let v=`${T[i]}_${r}`;1===i&&(v="single");let C=`${I[d]}_${l}`;5===d&&(C="to_life"),n.push({amount:y,annuityDrawDate:h,annuityDrawFrequency:f,chargePeriod:v,copy:(null==s?void 0:s.copy)||"",coveragePeriod:C,insuredCode:a,liabilityVOList:o,mainRisk:"",mainRiskCode:"",mainRiskId:"",paymentFrequency:u,premium:m,riskType:c,riskCode:p,riskId:(null==s?void 0:s.riskId)||"",riderRisk:"",riderRiskVOList:[]})}))})),n},R=({holder:e,insuredList:a=[]})=>{const n=["birthday","certEndDate","certEndType","certNo","certStartDate","verificationCode","certType","email","gender","mobile","name","id","insuredBeneficiaryType","relationToHolder","relationToMainInsured","tenantOrderBeneficiaryList","extInfo"],t=e=>{const a={extInfo:{}};return"[object Object]"==={}.toString.call(e)&&Object.keys(e).forEach((t=>{n.includes(t)?a[t]=e[t]:a.extInfo[t]=e[t]})),a};return{tenantOrderHolder:t(e),tenantOrderInsuredList:(a||[]).map((e=>t(e)))}},b=(e,a,n)=>{var t;const{tenantId:r,commencementTime:i,expiryDate:o,venderCode:s,tenantOrderHolder:l,tenantOrderInsuredList:d}=e;return{tenantId:r,productCode:null==a?void 0:a.productCode,insuranceStartDate:i,insuranceEndDate:o,holder:{personVO:{...l,socialFlag:null==(t=l.extInfo)?void 0:t.hasSocialInsurance,certType:l.certType||C.CERT}},insuredVOList:d.map((a=>({insuredCode:"",relationToHolder:a.relationToHolder,personVO:{...a,socialFlag:a.extInfo.hasSocialInsurance,certType:a.certType||C.CERT},productPlanVOList:[{insurerCode:s,planCode:n||"",riskVOList:L(a.tenantOrderProductList||[],e.venderCode)}]})))}};export{S as _,R as f,b as o};
