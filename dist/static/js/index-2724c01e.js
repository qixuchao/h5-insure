var fe=Object.defineProperty,_e=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var W=(c,d,u)=>d in c?fe(c,d,{enumerable:!0,configurable:!0,writable:!0,value:u}):c[d]=u,F=(c,d)=>{for(var u in d||(d={}))Q.call(d,u)&&W(c,u,d[u]);if(N)for(var u of N(d))X.call(d,u)&&W(c,u,d[u]);return c},x=(c,d)=>_e(c,ge(d));var Z=(c,d)=>{var u={};for(var g in c)Q.call(c,g)&&d.indexOf(g)<0&&(u[g]=c[g]);if(c!=null&&N)for(var g of N(c))d.indexOf(g)<0&&X.call(c,g)&&(u[g]=c[g]);return u};import{g as ye,a9 as ke,O as Pe,E as h,M as Ce,a6 as ve,_ as he,o as Ie,r as P,j as y,k as R,m as k,A as n,n as L,p as _,t as O,z as B,F as Ve,G as De,J as Le,C as E}from"./vendor-9d7eb2ed.js";import{P as $,a as ee}from"./index-27ef480d.js";import{i as Oe,p as Be}from"./trial-2b9ca0ae.js";import{c as Re}from"./createProposal-f7160459.js";import{_ as Te,n as be,b as Ne,E as Fe,e as Ee}from"./index-29d69285.js";import{u as Ae}from"./useStorage-5abf0b4c.js";import{b as xe,a as Se}from"./trial-d28c5640.js";import"./useDicData-383c23a4.js";const je={key:0,class:"part-card"},qe={key:1,class:"part-card"},we={class:"risk-content"},Me={key:0,class:"risk"},Ue={key:1,class:"plan-risk"},Ye={class:"footer-bar van-safe-area-bottom"},Je={class:"trial-result"},ze=E("\u603B\u4FDD\u8D39"),Ge={class:"result-num"},He={class:"trial-operate"},Ke={key:0,class:"retrial-tip"},We=E(" \u6761\u4EF6\u66F4\u6539\u540E\uFF0C\u9700\u8981\u91CD\u65B0\u8BD5\u7B97 "),Qe=E("\u53BB\u8BD5\u7B97"),Xe=E("\u7ACB\u5373\u6295\u4FDD"),Ze=ye({setup(c){var Y,J;const d=ke(),u=Pe(),{agentCode:g="test",agencyCode:te="",tenantId:S=9991000007,insurerCode:$e="99",proposalId:C,saleChannelId:ae}=u.query;let{productCode:j="MMBBSF",templateId:A=1}=u.query;const T=h({personVO:{occupationCodeList:[]}}),I=h({insuredCode:"",personVO:{occupationCodeList:[]}}),v=h({}),q=h({}),w=h({}),V=h(null),M=h({}),e=Ce({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[]});if(C)try{j=(J=JSON.parse(((Y=u.query)==null?void 0:Y.extInfo)||"{}"))==null?void 0:J.productCenterCode}catch(i){console.log(i)}ve("premium",M.value),Ae().get("userInfo");const ie="premiumTrial",oe=()=>{e.retrialTip=!1},re=(i,a)=>{e.insuredRiskList=i.map(t=>{var r,o;return{initialAmount:(r=a[t.riskCode])==null?void 0:r.amount,amountUnit:1,annuityDrawFrequency:t.annuityDrawDate,annuityDrawType:t.annuityDrawType,paymentFrequency:t.paymentFrequency,paymentPeriod:t.chargePeriod.split("_")[1],paymentPeriodType:xe[t.chargePeriod.split("_")[0]],insurancePeriodType:Se[t.coveragePeriod==="to_life"?"to_life":t.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+t.coveragePeriod.split("_")[1])?0:t.coveragePeriod.split("_")[1],riskCode:t.riskCode,riskType:t.riskType,riskName:t.riskName,extInfo:{riskId:t.riskId,copy:t.copy},initialPremium:(o=a[t.riskCode])==null?void 0:o.premium,liabilityDetails:t.liabilityVOList.map(l=>({liabilityCode:l.liabilityCode,liabilityName:l.liabilityName,refundMethod:l.liabilityAttributeValue})),productId:e.riskBaseInfo.id}})},se=()=>{be({agencyId:te,saleUserId:g,saleChannelId:ae,tenantId:S,venderCode:e.riskBaseInfo.insurerCode,orderDataSource:1,proposalId:C,extInfo:{templateId:+(A||1),pageCode:ie,iseeBizNo:window.iseeBiz},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{extInfo:{},tenantOrderProductList:[{productCode:e.riskBaseInfo.productCode||"",productName:e.riskBaseInfo.productName||"",premium:e.trialResult.premium||0,tenantOrderRiskList:e.insuredRiskList}]}]}).then(({code:i,data:a})=>{i==="10000"&&a.pageAction.pageAction==="jumpToPage"&&d.push({path:Ne[a.pageAction.data.nextPageCode],query:x(F({insurerCode:e.riskBaseInfo.insurerCode,templateId:A},u.query),{productCategory:e.riskBaseInfo.productCategory,orderNo:a.pageAction.data.orderNo})})})},ne=(i,a)=>{Ee({productCategory:i,venderCode:a}).then(t=>{var s;t.code==="10000"&&(A=(s=t.data)==null?void 0:s.id)})},le=(i,a)=>{var s,r;const t=i;if(t.chargePeriod==="3"){const o=(a.chargePeriod||"").split("_");if(t.exemptFlag===1){if(o[0]==="year")o[1]-=1;else{let l=0;((s=I.value.personVO)==null?void 0:s.birthday)&&(l=+new Date-+new Date((r=I.value.personVO)==null?void 0:r.birthday)/(1e3*60*60*24*365)),o[1]-=l+1}o[0]="year",t.coveragePeriod=o.join("_")}else o[1]&&(o[1]-=1);t.chargePeriod=o.join("_")}},ue=()=>{const i=JSON.parse(JSON.stringify(v.value[e.currentPlan])),a=Object.values(i).find(r=>r.riskType===1),t=Object.values(i).map(r=>{const o=r;return le(o,a),o.liabilityVOList=(o.liabilityVOList||[]).filter(l=>l.optionalFlag===1||l.liabilityAttributeValue&&l.liabilityAttributeValue!=="-1").map(l=>{const p=l;return p.liabilityAttributeValue==="0"&&(p.liabilityAttributeValue=""),p}),o}),s={holder:T.value,productCode:e.riskBaseInfo.productCode,insuredVOList:[x(F({},I.value),{productPlanVOList:[{planCode:e.currentPlan||"",insurerCode:e.riskBaseInfo.insurerCode,riskVOList:t}]})]};Be(F({},s)).then(({code:r,data:o})=>{if(r==="10000"){e.retrialTip=!1,e.trialResult=o,e.canTrial=!1;const l={},p=(D=[])=>{(D||[]).forEach(m=>{var b;l[m.riskCode]=m,((b=m.riskPremiumDetailVOList)==null?void 0:b.length)&&p(m.riskPremiumDetailVOList)})};p(o.riskPremiumDetailVOList),re(s.insuredVOList[0].productPlanVOList[0].riskVOList,l),Object.assign(M.value,l)}})},ce=()=>{var i,a,t,s,r;Promise.all([(a=(i=q.value)==null?void 0:i.validateForm)==null?void 0:a.call(i),(s=(t=w.value)==null?void 0:t.validateForm)==null?void 0:s.call(t),(r=V.value)==null?void 0:r.validate()]).then(()=>{ue()},o=>{var l;(o==null?void 0:o.length)&&((l=V==null?void 0:V.value)==null||l.scrollToField(o[0].name))})},de=()=>{Fe({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then(({code:a,data:t})=>{if(a==="10000"){const s={};t.forEach(r=>{s[r.dictCode]=r.dictItemList}),e.enumList=s}})},pe=i=>{Re({id:C,tenantId:S}).then(({code:a,data:t})=>{var s;if(a==="10000"){const r=((s=t.proposalInsuredList)==null?void 0:s[0])||{},{proposalInsuredProductList:o=[]}=r,l=Z(r,["proposalInsuredProductList"]);Object.assign(T.value.personVO,t.proposalHolder);const p=o.find(m=>m.productId===i);Object.assign(I.value.personVO,l,{occupationCodeList:(p==null?void 0:p.occupationCodeList)||[]});const D={};((p==null?void 0:p.proposalProductRiskList)||[]).forEach(m=>{D[m.riskId]=m}),Object.assign(v.value,{0:D})}})},me=()=>{Oe({productCode:j,source:C?2:1}).then(({code:i,data:a})=>{var t;i==="10000"&&(e.riskBaseInfo=a.productBasicInfoVO,(a.productRelationPlanVOList.length?a.productRelationPlanVOList:a.productRiskVoList[0].riskDetailVOList||[]).forEach((s,r)=>{r===0&&(e.currentPlan=s.planCode||"0"),C||Object.assign(v.value,{[s.planCode||r]:{}})}),C&&ne(e.riskBaseInfo.productCategory,e.riskBaseInfo.insurerCode),e.riskData=((t=a.productRiskVoList[0])==null?void 0:t.riskDetailVOList)||[],e.riskPlanData=a.productRelationPlanVOList||[],C&&pe(a.productBasicInfoVO.id))}).finally(()=>{})},U=i=>{e.holderFactor=i.holderFactorList,e.insuredFactor=i.insuredFactorList,e.ageRange=i.ageRange};return he([()=>v.value,()=>T.value,()=>I.value],i=>{i&&!e.canTrial&&(e.canTrial=!0,e.retrialTip=!0)},{deep:!0}),Ie(()=>{me(),de()}),(i,a)=>{const t=P("ProTitle"),s=P("VanForm"),r=P("ProTabButton"),o=P("VanTab"),l=P("VanTabs"),p=P("van-collapse-item"),D=P("van-collapse"),m=P("VanButton"),b=P("ProPageWrap");return y(),R(b,{class:"page-trial-wrapper"},{default:k(()=>{var z,G,H;return[n(e).holderFactor.length?(y(),L("div",je,[_(t,{title:"\u6295\u4FDD\u4EBA"}),_($,{ref_key:"holderRef",ref:q,"insured-code":(z=n(e).riskBaseInfo)==null?void 0:z.insurerCode,"form-info":T.value.personVO,"factor-list":n(e).holderFactor,"age-range":n(e).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):O("",!0),n(e).insuredFactor.length?(y(),L("div",qe,[_(t,{title:"\u88AB\u4FDD\u4EBA"}),_($,{ref_key:"insuredRef",ref:w,"insured-code":(G=n(e).riskBaseInfo)==null?void 0:G.insurerCode,"form-info":I.value.personVO,"factor-list":n(e).insuredFactor,"age-range":n(e).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):O("",!0),B("div",we,[_(D,{modelValue:n(e).collapseName,"onUpdate:modelValue":a[1]||(a[1]=f=>n(e).collapseName=f)},{default:k(()=>[_(p,{name:"1"},{title:k(()=>[_(t,{title:"\u6295\u4FDD\u65B9\u6848"})]),default:k(()=>[n(e).riskData.length&&v.value[0]?(y(),L("div",Me,[_(s,{ref_key:"riskFormRef",ref:V,"input-align":"right","error-message-align":"right"},{default:k(()=>[_(ee,{"risk-info":v.value[0],enums:n(e).enumList,"origin-data":n(e).riskData,"pick-factor":U},null,8,["risk-info","enums","origin-data"])]),_:1},512)])):O("",!0),n(e).riskPlanData.length?(y(),L("div",Ue,[_(s,{ref_key:"riskFormRef",ref:V,"input-align":"right","error-message-align":"right"},{default:k(()=>[_(l,{active:n(e).currentPlan,"onUpdate:active":a[0]||(a[0]=f=>n(e).currentPlan=f)},{default:k(()=>[(y(!0),L(Ve,null,De(n(e).riskPlanData,f=>(y(),R(o,{key:f.planCode,name:f.planCode,title:f.planName},{title:k(()=>[_(r,{title:f.planName,active:n(e).currentPlan===f.planCode},null,8,["title","active"])]),default:k(()=>{var K;return[f.planCode===n(e).currentPlan?(y(),R(ee,{key:0,"risk-info":v.value[f.planCode],enums:n(e).enumList,"origin-data":(K=f.productRiskVoList)==null?void 0:K[0].riskDetailVOList,"pick-factor":U},null,8,["risk-info","enums","origin-data"])):O("",!0)]}),_:2},1032,["name","title"]))),128))]),_:1},8,["active"])]),_:1},512)])):O("",!0)]),_:1})]),_:1},8,["modelValue"])]),B("div",Ye,[B("span",Je,[ze,B("span",Ge,Le((n(e).retrialTip?0:((H=n(e).trialResult)==null?void 0:H.premium)||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})),1)]),B("div",He,[n(e).retrialTip?(y(),L("div",Ke,[We,B("span",{class:"close-icon",onClick:oe})])):O("",!0),n(e).canTrial?(y(),R(m,{key:1,type:"primary",onClick:ce},{default:k(()=>[Qe]),_:1})):(y(),R(m,{key:2,type:"primary",onClick:se},{default:k(()=>[Xe]),_:1}))])])]}),_:1})}}});var ut=Te(Ze,[["__scopeId","data-v-96fed9f4"]]);export{ut as default};
