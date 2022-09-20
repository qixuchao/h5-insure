var X=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var $=(i,u,o)=>u in i?X(i,u,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[u]=o,m=(i,u)=>{for(var o in u||(u={}))te.call(u,o)&&$(i,o,u[o]);if(M)for(var o of M(u))oe.call(u,o)&&$(i,o,u[o]);return i},y=(i,u)=>Z(i,ee(u));import{a as se,g as re,E as g,M as ae,a6 as q,y as ie,_ as I,o as ne,r as v,j as R,n as J,p as h,m as L,z as O,A as d,k as A,t as C,a4 as ue,a5 as ce,C as de}from"./vendor-06835924.js";import{P as K,a as le}from"./index-2c6fc5d5.js";import{i as pe,p as fe}from"./trial-470b4483.js";import{_ as me,E as ke}from"./index-57758e93.js";const be=se({id:"createProposal",state:()=>({proposalInfo:{},trialData:[],excludeProduct:[],proposalId:0}),actions:{setProposalInfo(i){this.$state.proposalInfo=i},setTrialData(i){this.$state.trialData=i},setExcludeProduct(i){this.$state.excludeProduct=i}}});const ge=i=>(ue("data-v-2ed1ccdc"),i=i(),ce(),i),he={class:"com-product-risk-wrapper"},_e={class:"popup-container"},Ie=ge(()=>O("div",{class:"popup-title"},"\u8BF7\u9009\u62E9\u4FDD\u969C\u65B9\u6848",-1)),Le={class:"risk-trial-wrapper"},Ve={class:"risk-content"},Pe={key:0,class:"risk"},ve={class:"footer-bar"},Re=de("\u786E\u5B9A"),Oe=re({props:{isShow:{type:Boolean,default:!1},type:{default:"add"},productId:{default:0},riskType:{default:1},formInfo:{default:{}},productData:{default:()=>({})},holder:{default:()=>({})},insured:{default:()=>({})},riderRisk:{default:()=>[]},currentRisk:{default:()=>[]}},emits:["close","finished"],setup(i,{emit:u}){var T,x;const o=i,B=g({personVO:m({occupationCodeList:[]},o.holder)}),F=g({insuredCode:"",personVO:m({occupationCodeList:((x=(((T=o.insured)==null?void 0:T.proposalInsuredProductList)||[]).find(t=>t.productId===o.productData.productBasicInfoVO.id))==null?void 0:x.occupationCodeList)||[]},o.insured)}),V=g({}),S=g({}),_=g({}),E=g({}),w=g({}),e=ae({currentPlan:"0",isShow:o.isShow,riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],type:o.type});q("premium",w.value),q("source",{type:e.type,origin:"proposal",showRiskList:o.currentRisk});const N=ie(()=>{var s;let t="";if((s=e.riskData)==null?void 0:s[0]){const a=e.riskData[0],n=((a==null?void 0:a.requiredRiderRiskVOList)||[]).map(c=>c.riskName);n.length&&(t=`\u7279\u6B8A\u63D0\u793A: ${a.riskName}\u548C${n.join("\u3001")}\u5FC5\u987B\u540C\u65F6\u6295\u4FDD`)}return t}),U=(t,s)=>{var c,p,l,r,f,D,k,P,j;const a=(t.insuredVOList[0].productPlanVOList[0].riskVOList||[]).map(b=>y(m({},b),{premium:s[b.riskCode].premium,amount:s[b.riskCode].amount}));return{proposalHolder:m({},(c=t.holder)==null?void 0:c.personVO),proposalInsuredList:[y(m({},t.insuredVOList[0].personVO),{dateRange:{min:(l=(p=_.value)==null?void 0:p.ageRangeObj)==null?void 0:l.minAge,max:(f=(r=_.value)==null?void 0:r.ageRangeObj)==null?void 0:f.maxAge},proposalInsuredProductList:[{productId:e.riskBaseInfo.id,productName:e.riskBaseInfo.productName,dateRange:{min:(k=(D=_.value)==null?void 0:D.ageRangeObj)==null?void 0:k.minAge,max:(j=(P=_.value)==null?void 0:P.ageRangeObj)==null?void 0:j.maxAge},occupationCodeList:t.insuredVOList[0].personVO.occupationCodeList,proposalProductRiskList:a}]})]}},Y=()=>{var c;const t=JSON.parse(JSON.stringify(V.value[e.currentPlan])),s=Object.values(t).find(p=>p.riskType===1),a=Object.values(t).map(p=>{const l=p;if(l.chargePeriod==="3"){const r=(s.chargePeriod||"").split("_");r[1]&&(r[1]-=1),l.chargePeriod=r.join("_")}return l.liabilityVOList=(l.liabilityVOList||[]).filter(r=>r.optionalFlag===1||r.liabilityAttributeValue&&r.liabilityAttributeValue!=="-1").map(r=>{const f=r;return f.liabilityAttributeValue==="0"&&(f.liabilityAttributeValue=""),f}),l}),n={holder:B.value,productCode:e.riskBaseInfo.productCode,insuredVOList:[y(m({},F.value),{productPlanVOList:[{planCode:e.currentPlan||"",insurerCode:(c=e.riskBaseInfo)==null?void 0:c.insurerCode,riskVOList:a}]})]};fe(m({},n)).then(({code:p,data:l})=>{if(p==="10000"){e.retrialTip=!1,e.trialResult=l,e.canTrial=!1;const r={},f=(D=[])=>{(D||[]).forEach(k=>{var P;r[k.riskCode]=k,((P=k.riskPremiumDetailVOList)==null?void 0:P.length)&&f(k.riskPremiumDetailVOList)})};f(l.riskPremiumDetailVOList),Object.assign(w.value,r),u("finished",U(n,r))}else e.retrialTip=!0})},z=()=>{var t,s,a,n,c;Promise.all([(s=(t=S.value)==null?void 0:t.validateForm)==null?void 0:s.call(t),(n=(a=_.value)==null?void 0:a.validateForm)==null?void 0:n.call(a),(c=E.value)==null?void 0:c.validate()]).then(()=>{Y()})},H=()=>{u("close")},G=()=>{ke({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then(({code:s,data:a})=>{if(s==="10000"){const n={};a.forEach(c=>{n[c.dictCode]=c.dictItemList}),e.enumList=n}})},Q=()=>{pe({productId:o.productId,source:2}).then(({code:t,data:s})=>{t==="10000"&&(e.riskBaseInfo=s.productBasicInfoVO,(s.productRiskVoList[0].riskDetailVOList||[]).forEach((a,n)=>{n===0&&(e.currentPlan=a.planCode||"0"),Object.assign(V.value,{[a.planCode||n]:{}})}),e.riskData=s.productRiskVoList[0].riskDetailVOList||[],e.riskPlanData=s.productRelationPlanVOList||[])}).finally(()=>{})},W=t=>{e.holderFactor=t.holderFactorList,e.insuredFactor=t.insuredFactorList,e.ageRange=t.ageRange};return I([()=>V.value,()=>B.value,()=>F.value],t=>{t&&!e.canTrial&&(e.canTrial=!0,e.retrialTip=!0)},{deep:!0}),I(()=>o.isShow,t=>{e.isShow=t},{immediate:!0}),I(()=>o.productId,t=>{t&&Q()},{immediate:!0}),I(()=>o.formInfo,(t={})=>{if(!(o.type==="add"||o.type==="repeatAdd")){const s={};t.proposalProductRiskList.forEach(a=>{s[a.riskId]=a}),Object.assign(V.value,{0:s})}},{deep:!0,immediate:!0}),I(()=>o.productData,t=>{var s;o.type==="add"||o.type==="repeatAdd"||(e.riskBaseInfo=t.productBasicInfoVO,e.riskData=((s=t.productRiskVoList)==null?void 0:s[0].riskDetailVOList)||[])},{deep:!0,immediate:!0}),I(()=>o.type,t=>{e.type=t}),ne(()=>{G()}),(t,s)=>{const a=v("ProMessage"),n=v("ProCard"),c=v("VanForm"),p=v("VanButton"),l=v("VanPopup");return R(),J("div",he,[h(l,{show:d(e).isShow,"onUpdate:show":s[0]||(s[0]=r=>d(e).isShow=r),round:"",position:"bottom",closeable:"",style:{height:"80%"},onClose:H},{default:L(()=>[O("div",_e,[Ie,d(N)?(R(),A(a,{key:0,content:d(N)},null,8,["content"])):C("",!0),O("div",Le,[d(e).holderFactor.length?(R(),A(n,{key:0,title:"\u6295\u4FDD\u4EBA",class:"part-card"},{default:L(()=>{var r;return[h(K,{ref_key:"holderRef",ref:S,"insured-code":(r=d(e).riskBaseInfo)==null?void 0:r.insurerCode,"form-info":B.value.personVO,"factor-list":d(e).holderFactor,"age-range":d(e).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])]}),_:1})):C("",!0),d(e).insuredFactor.length?(R(),A(n,{key:1,title:"\u88AB\u4FDD\u4EBA",class:"part-card"},{default:L(()=>{var r;return[h(K,{ref_key:"insuredRef",ref:_,"insured-code":(r=d(e).riskBaseInfo)==null?void 0:r.insurerCode,"form-info":F.value.personVO,"factor-list":d(e).insuredFactor,"age-range":d(e).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])]}),_:1})):C("",!0),O("div",Ve,[h(n,{title:"\u6295\u4FDD\u65B9\u6848",class:"part-card"},{default:L(()=>[d(e).riskData.length?(R(),J("div",Pe,[h(c,{ref_key:"riskFormRef",ref:E,"input-align":"right","error-message-align":"right"},{default:L(()=>[h(le,{"risk-info":V.value[0],enums:d(e).enumList,"origin-data":d(e).riskData,"pick-factor":W},null,8,["risk-info","enums","origin-data"])]),_:1},512)])):C("",!0)]),_:1})])]),O("div",ve,[h(p,{block:"",type:"primary",onClick:z},{default:L(()=>[Re]),_:1})])])]),_:1},8,["show"])])}}});var Ae=me(Oe,[["__scopeId","data-v-2ed1ccdc"]]);export{Ae as P,be as u};
