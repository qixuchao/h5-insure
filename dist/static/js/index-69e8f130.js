var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var M=(n,c,a)=>c in n?Z(n,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[c]=a,m=(n,c)=>{for(var a in c||(c={}))oe.call(c,a)&&M(n,a,c[a]);if($)for(var a of $(c))ae.call(c,a)&&M(n,a,c[a]);return n},B=(n,c)=>ee(n,te(c));import{a as re,g as se,E as g,M as ie,a6 as q,y as ne,_ as V,o as ue,r as P,j as D,n as J,p as h,m as I,z as R,A as l,k as w,t as F,a4 as ce,a5 as de,C as le}from"./vendor-c3c577f2.js";import{P as K,a as pe}from"./index-64e812cf.js";import{i as fe,p as me}from"./trial-8e435cda.js";import{_ as ke,F as ge}from"./index-53abd92d.js";const we=re({id:"createProposal",state:()=>({proposalInfo:{},trialData:[],excludeProduct:[],proposalId:0}),actions:{setProposalInfo(n){this.$state.proposalInfo=n},setTrialData(n){this.$state.trialData=n},setExcludeProduct(n){this.$state.excludeProduct=n}}});const he=n=>(ce("data-v-65cbf84c"),n=n(),de(),n),_e={class:"com-product-risk-wrapper"},Ve={class:"popup-container"},Ie=he(()=>R("div",{class:"popup-title"},"\u8BF7\u9009\u62E9\u4FDD\u969C\u65B9\u6848",-1)),ve={class:"risk-trial-wrapper"},ye={class:"risk-content"},Le={key:0,class:"risk"},Oe={class:"footer-bar"},Pe=le("\u786E\u5B9A"),De=se({props:{isShow:{type:Boolean,default:!1},type:{default:"add"},productId:{default:0},riskType:{default:1},formInfo:{default:{}},productData:{default:()=>({})},holder:{default:()=>({})},insured:{default:()=>({})},riderRisk:{default:()=>[]},currentRisk:{default:()=>[]}},emits:["close","finished"],setup(n,{emit:c}){var T,N;const a=n,v=g({personVO:m({occupationCodeList:[]},a.holder)}),y=g({insuredCode:"",personVO:m({occupationCodeList:((N=(((T=a.insured)==null?void 0:T.proposalInsuredProductList)||[]).find(t=>t.productId===a.productData.productBasicInfoVO.id))==null?void 0:N.occupationCodeList)||[]},a.insured)}),L=g({}),A=g({}),_=g({}),x=g({}),S=g({}),e=ie({currentPlan:"0",isShow:a.isShow,riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],type:a.type});q("premium",S.value),q("source",{type:e.type,origin:"proposal",showRiskList:a.currentRisk});const E=ne(()=>{var r;let t="";if((r=e.riskData)==null?void 0:r[0]){const o=e.riskData[0],i=((o==null?void 0:o.requiredRiderRiskVOList)||[]).map(u=>u.riskName);i.length&&(t=`\u7279\u6B8A\u63D0\u793A: ${o.riskName}\u548C${i.join("\u3001")}\u5FC5\u987B\u540C\u65F6\u6295\u4FDD`)}return t}),U=(t,r)=>{var u,p,d,s,f,C,k,O,j;const o=(t.insuredVOList[0].productPlanVOList[0].riskVOList||[]).map(b=>B(m({},b),{premium:r[b.riskCode].premium,amount:r[b.riskCode].amount}));return{proposalHolder:m({},(u=t.holder)==null?void 0:u.personVO),proposalInsuredList:[B(m({},t.insuredVOList[0].personVO),{dateRange:{min:(d=(p=_.value)==null?void 0:p.ageRangeObj)==null?void 0:d.minAge,max:(f=(s=_.value)==null?void 0:s.ageRangeObj)==null?void 0:f.maxAge},proposalInsuredProductList:[{productId:e.riskBaseInfo.id,productName:e.riskBaseInfo.productName,dateRange:{min:(k=(C=_.value)==null?void 0:C.ageRangeObj)==null?void 0:k.minAge,max:(j=(O=_.value)==null?void 0:O.ageRangeObj)==null?void 0:j.maxAge},occupationCodeList:t.insuredVOList[0].personVO.occupationCodeList,proposalProductRiskList:o}]})]}},Y=(t,r)=>{var i,u,p,d;const o=t;if(o.chargePeriod==="3"){const s=(r.chargePeriod||"").split("_");if(s[1]-=1,o.exemptFlag===1){if(s[0]==="to"){let f=0;o.exemptType===1?((i=v.value.personVO)==null?void 0:i.birthday)&&(f=parseInt(`${(+new Date-new Date((u=v.value.personVO)==null?void 0:u.birthday))/(1e3*60*60*24*365)}`,10)):o.exemptType===2&&((p=y.value.personVO)==null?void 0:p.birthday)&&(f=parseInt(`${(+new Date-new Date((d=y.value.personVO)==null?void 0:d.birthday))/(1e3*60*60*24*365)}`,10)),s[1]=s[1]-f}s[0]="year",o.coveragePeriod=s.join("_")}o.chargePeriod=s.join("_")}},z=()=>{var u;const t=JSON.parse(JSON.stringify(L.value[e.currentPlan])),r=Object.values(t).find(p=>p.riskType===1),o=Object.values(t).map(p=>{const d=p;return Y(d,r),d.liabilityVOList=(d.liabilityVOList||[]).filter(s=>s.optionalFlag===1||s.liabilityAttributeValue&&s.liabilityAttributeValue!=="-1").map(s=>{const f=s;return f.liabilityAttributeValue==="0"&&(f.liabilityAttributeValue=""),f}),d}),i={holder:v.value,productCode:e.riskBaseInfo.productCode,insuredVOList:[B(m({},y.value),{productPlanVOList:[{planCode:e.currentPlan||"",insurerCode:(u=e.riskBaseInfo)==null?void 0:u.insurerCode,riskVOList:o}]})]};me(m({},i)).then(({code:p,data:d})=>{if(p==="10000"){e.retrialTip=!1,e.trialResult=d,e.canTrial=!1;const s={},f=(C=[])=>{(C||[]).forEach(k=>{var O;s[k.riskCode]=k,((O=k.riskPremiumDetailVOList)==null?void 0:O.length)&&f(k.riskPremiumDetailVOList)})};f(d.riskPremiumDetailVOList),Object.assign(S.value,s),c("finished",U(i,s))}else e.retrialTip=!0})},H=()=>{var t,r,o,i,u;Promise.all([(r=(t=A.value)==null?void 0:t.validateForm)==null?void 0:r.call(t),(i=(o=_.value)==null?void 0:o.validateForm)==null?void 0:i.call(o),(u=x.value)==null?void 0:u.validate()]).then(()=>{z()})},G=()=>{c("close")},Q=()=>{ge({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then(({code:r,data:o})=>{if(r==="10000"){const i={};o.forEach(u=>{i[u.dictCode]=u.dictItemList}),e.enumList=i}})},W=()=>{fe({productId:a.productId,source:2}).then(({code:t,data:r})=>{t==="10000"&&(e.riskBaseInfo=r.productBasicInfoVO,(r.productRiskVoList[0].riskDetailVOList||[]).forEach((o,i)=>{i===0&&(e.currentPlan=o.planCode||"0"),Object.assign(L.value,{[o.planCode||i]:{}})}),e.riskData=r.productRiskVoList[0].riskDetailVOList||[],e.riskPlanData=r.productRelationPlanVOList||[])}).finally(()=>{})},X=t=>{e.holderFactor=t.holderFactorList,e.insuredFactor=t.insuredFactorList,e.ageRange=t.ageRange};return V([()=>L.value,()=>v.value,()=>y.value],t=>{t&&!e.canTrial&&(e.canTrial=!0,e.retrialTip=!0)},{deep:!0}),V(()=>a.isShow,t=>{e.isShow=t},{immediate:!0}),V(()=>a.productId,t=>{t&&W()},{immediate:!0}),V(()=>a.formInfo,(t={})=>{if(!(a.type==="add"||a.type==="repeatAdd")){const r={};t.proposalProductRiskList.forEach(o=>{r[o.riskId]=o}),Object.assign(L.value,{0:r})}},{deep:!0,immediate:!0}),V(()=>a.productData,t=>{var r;a.type==="add"||a.type==="repeatAdd"||(e.riskBaseInfo=t.productBasicInfoVO,e.riskData=((r=t.productRiskVoList)==null?void 0:r[0].riskDetailVOList)||[])},{deep:!0,immediate:!0}),V(()=>a.type,t=>{e.type=t}),ue(()=>{Q()}),(t,r)=>{const o=P("ProMessage"),i=P("ProCard"),u=P("VanForm"),p=P("VanButton"),d=P("VanPopup");return D(),J("div",_e,[h(d,{show:l(e).isShow,"onUpdate:show":r[0]||(r[0]=s=>l(e).isShow=s),round:"",position:"bottom",closeable:"",style:{height:"80%"},onClose:G},{default:I(()=>[R("div",Ve,[Ie,l(E)?(D(),w(o,{key:0,content:l(E)},null,8,["content"])):F("",!0),R("div",ve,[l(e).holderFactor.length?(D(),w(i,{key:0,title:"\u6295\u4FDD\u4EBA",class:"part-card"},{default:I(()=>{var s;return[h(K,{ref_key:"holderRef",ref:A,"insured-code":(s=l(e).riskBaseInfo)==null?void 0:s.insurerCode,"form-info":v.value.personVO,"factor-list":l(e).holderFactor,"age-range":l(e).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])]}),_:1})):F("",!0),l(e).insuredFactor.length?(D(),w(i,{key:1,title:"\u88AB\u4FDD\u4EBA",class:"part-card"},{default:I(()=>{var s;return[h(K,{ref_key:"insuredRef",ref:_,"insured-code":(s=l(e).riskBaseInfo)==null?void 0:s.insurerCode,"form-info":y.value.personVO,"factor-list":l(e).insuredFactor,"age-range":l(e).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])]}),_:1})):F("",!0),R("div",ye,[h(i,{title:"\u6295\u4FDD\u65B9\u6848",class:"part-card"},{default:I(()=>[l(e).riskData.length?(D(),J("div",Le,[h(u,{ref_key:"riskFormRef",ref:x,"input-align":"right","error-message-align":"right"},{default:I(()=>[h(pe,{"risk-info":L.value[0],enums:l(e).enumList,"origin-data":l(e).riskData,"pick-factor":X},null,8,["risk-info","enums","origin-data"])]),_:1},512)])):F("",!0)]),_:1})])]),R("div",Oe,[h(p,{block:"",type:"primary",onClick:H},{default:I(()=>[Pe]),_:1})])])]),_:1},8,["show"])])}}});var Ae=ke(De,[["__scopeId","data-v-65cbf84c"]]);export{Ae as P,we as u};
