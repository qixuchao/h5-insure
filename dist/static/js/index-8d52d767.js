var me=Object.defineProperty,fe=Object.defineProperties;var _e=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var K=(d,p,c)=>p in d?me(d,p,{enumerable:!0,configurable:!0,writable:!0,value:c}):d[p]=c,F=(d,p)=>{for(var c in p||(p={}))W.call(p,c)&&K(d,c,p[c]);if(N)for(var c of N(p))$.call(p,c)&&K(d,c,p[c]);return d},x=(d,p)=>fe(d,_e(p));var X=(d,p)=>{var c={};for(var g in d)W.call(d,g)&&p.indexOf(g)<0&&(c[g]=d[g]);if(d!=null&&N)for(var g of N(d))p.indexOf(g)<0&&$.call(d,g)&&(c[g]=d[g]);return c};import{g as ge,a9 as ye,O as ke,E as I,M as Ce,a6 as Pe,_ as ve,o as he,r as P,j as y,k as R,m as k,A as s,n as L,p as _,t as T,z as B,F as Ie,G as Ve,J as De,C as E}from"./vendor-c3c577f2.js";import{P as Q,a as Z}from"./index-64e812cf.js";import{i as Oe,p as Le}from"./trial-8e435cda.js";import{c as Te}from"./createProposal-a8326254.js";import{_ as Be,n as Re,N as be,b as Ne,F as Fe,f as Ee}from"./index-53abd92d.js";import{u as Ae}from"./useStorage-1a10a156.js";import{b as xe,a as Se}from"./trial-e4e77b8e.js";import"./useDicData-b8e94b4f.js";const we={key:0,class:"part-card"},Ue={key:1,class:"part-card"},je={class:"risk-content"},qe={key:0,class:"risk"},Me={key:1,class:"plan-risk"},Ye={class:"footer-bar van-safe-area-bottom"},ze={class:"trial-result"},Je=E("\u603B\u4FDD\u8D39"),Ge={class:"result-num"},He={class:"trial-operate"},Ke={key:0,class:"retrial-tip"},We=E(" \u6761\u4EF6\u66F4\u6539\u540E\uFF0C\u9700\u8981\u91CD\u65B0\u8BD5\u7B97 "),$e=E("\u53BB\u8BD5\u7B97"),Xe=E("\u7ACB\u5373\u6295\u4FDD"),Qe=ge({setup(d){var Y;const p=ye(),c=ke(),{agentCode:g="test",agencyCode:ee="",tenantId:S=9991000007,insurerCode:Ze="99",proposalId:v,saleChannelId:te}=c.query;let{productCode:w="MMBBSF",templateId:A=1}=c.query;const V=I({personVO:{occupationCodeList:[]}}),D=I({insuredCode:"",personVO:{occupationCodeList:[]}}),h=I({}),U=I({}),j=I({}),O=I(null),q=I({}),e=Ce({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[]});v&&(w=(Y=c.query||{})==null?void 0:Y.productCenterCode),Pe("premium",q.value),Ae().get("userInfo");const ae="premiumTrial",ie=()=>{e.retrialTip=!1},oe=(i,a)=>{e.insuredRiskList=i.map(t=>{var o,u;return{initialAmount:(o=a[t.riskCode])==null?void 0:o.amount,amountUnit:1,annuityDrawFrequency:t.annuityDrawDate,annuityDrawType:t.annuityDrawType,paymentFrequency:t.paymentFrequency,paymentPeriod:t.chargePeriod.split("_")[1],paymentPeriodType:xe[t.chargePeriod.split("_")[0]],insurancePeriodType:Se[t.coveragePeriod==="to_life"?"to_life":t.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+t.coveragePeriod.split("_")[1])?0:t.coveragePeriod.split("_")[1],riskCode:t.riskCode,riskType:t.riskType,riskName:t.riskName,extInfo:{riskId:t.riskId,copy:t.copy},initialPremium:(u=a[t.riskCode])==null?void 0:u.premium,liabilityDetails:t.liabilityVOList.map(n=>({liabilityCode:n.liabilityCode,liabilityName:n.liabilityName,refundMethod:n.liabilityAttributeValue})),productId:e.riskBaseInfo.id}})},re=()=>{Re({agencyId:ee,saleUserId:g,saleChannelId:te,tenantId:S,venderCode:e.riskBaseInfo.insurerCode,orderDataSource:1,proposalId:v,extInfo:{templateId:+(A||1),pageCode:ae,iseeBizNo:window.iseeBiz,buttonCode:be.premiumTrial},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{extInfo:{},tenantOrderProductList:[{productCode:e.riskBaseInfo.productCode||"",productName:e.riskBaseInfo.productName||"",premium:e.trialResult.premium||0,tenantOrderRiskList:e.insuredRiskList}]}]}).then(({code:i,data:a})=>{i==="10000"&&a.pageAction.pageAction==="jumpToPage"&&p.push({path:Ne[a.pageAction.data.nextPageCode],query:x(F({insurerCode:e.riskBaseInfo.insurerCode,templateId:A},c.query),{productCategory:e.riskBaseInfo.productCategory,orderNo:a.pageAction.data.orderNo})})})},se=(i,a)=>{Ee({productCategory:i,venderCode:a}).then(t=>{var r;t.code==="10000"&&(A=(r=t.data)==null?void 0:r.id)})},ne=(i,a)=>{var r,o,u,n;const t=i;if(t.chargePeriod==="3"){const l=(a.chargePeriod||"").split("_");if(l[1]-=1,t.exemptFlag===1){if(l[0]==="to"){let C=0;t.exemptType===1?((r=V.value.personVO)==null?void 0:r.birthday)&&(C=parseInt(`${(+new Date-new Date((o=V.value.personVO)==null?void 0:o.birthday))/(1e3*60*60*24*365)}`,10)):t.exemptType===2&&((u=D.value.personVO)==null?void 0:u.birthday)&&(C=parseInt(`${(+new Date-new Date((n=D.value.personVO)==null?void 0:n.birthday))/(1e3*60*60*24*365)}`,10)),l[1]=l[1]-C}l[0]="year",t.coveragePeriod=l.join("_")}t.chargePeriod=l.join("_")}},le=()=>{const i=JSON.parse(JSON.stringify(h.value[e.currentPlan])),a=Object.values(i).find(o=>o.riskType===1),t=Object.values(i).map(o=>{const u=o;return ne(u,a),u.liabilityVOList=(u.liabilityVOList||[]).filter(n=>n.optionalFlag===1||n.liabilityAttributeValue&&n.liabilityAttributeValue!=="-1").map(n=>{const l=n;return l.liabilityAttributeValue==="0"&&(l.liabilityAttributeValue=""),l}),u}),r={holder:V.value,productCode:e.riskBaseInfo.productCode,insuredVOList:[x(F({},D.value),{productPlanVOList:[{planCode:e.currentPlan||"",insurerCode:e.riskBaseInfo.insurerCode,riskVOList:t}]})]};Le(F({},r)).then(({code:o,data:u})=>{if(o==="10000"){e.retrialTip=!1,e.trialResult=u,e.canTrial=!1;const n={},l=(C=[])=>{(C||[]).forEach(m=>{var b;n[m.riskCode]=m,((b=m.riskPremiumDetailVOList)==null?void 0:b.length)&&l(m.riskPremiumDetailVOList)})};l(u.riskPremiumDetailVOList),oe(r.insuredVOList[0].productPlanVOList[0].riskVOList,n),Object.assign(q.value,n)}})},ue=()=>{var i,a,t,r,o;Promise.all([(a=(i=U.value)==null?void 0:i.validateForm)==null?void 0:a.call(i),(r=(t=j.value)==null?void 0:t.validateForm)==null?void 0:r.call(t),(o=O.value)==null?void 0:o.validate()]).then(()=>{le()},u=>{var n;(u==null?void 0:u.length)&&((n=O==null?void 0:O.value)==null||n.scrollToField(u[0].name))})},ce=()=>{Fe({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then(({code:a,data:t})=>{if(a==="10000"){const r={};t.forEach(o=>{r[o.dictCode]=o.dictItemList}),e.enumList=r}})},de=i=>{Te({id:v,tenantId:S}).then(({code:a,data:t})=>{var r;if(a==="10000"){const o=((r=t.proposalInsuredList)==null?void 0:r[0])||{},{proposalInsuredProductList:u=[]}=o,n=X(o,["proposalInsuredProductList"]);Object.assign(V.value.personVO,t.proposalHolder);const l=u.find(m=>m.productId===i);Object.assign(D.value.personVO,n,{occupationCodeList:(l==null?void 0:l.occupationCodeList)||[]});const C={};((l==null?void 0:l.proposalProductRiskList)||[]).forEach(m=>{C[m.riskId]=m}),Object.assign(h.value,{0:C})}})},pe=()=>{Oe({productCode:w,source:v?2:1}).then(({code:i,data:a})=>{var t;i==="10000"&&(e.riskBaseInfo=a.productBasicInfoVO,(a.productRelationPlanVOList.length?a.productRelationPlanVOList:a.productRiskVoList[0].riskDetailVOList||[]).forEach((r,o)=>{o===0&&(e.currentPlan=r.planCode||"0"),v||Object.assign(h.value,{[r.planCode||o]:{}})}),v&&se(e.riskBaseInfo.productCategory,e.riskBaseInfo.insurerCode),e.riskData=((t=a.productRiskVoList[0])==null?void 0:t.riskDetailVOList)||[],e.riskPlanData=a.productRelationPlanVOList||[],v&&de(a.productBasicInfoVO.id))}).finally(()=>{})},M=i=>{e.holderFactor=i.holderFactorList,e.insuredFactor=i.insuredFactorList,e.ageRange=i.ageRange};return ve([()=>h.value,()=>V.value,()=>D.value],i=>{i&&!e.canTrial&&(e.canTrial=!0,e.retrialTip=!0)},{deep:!0}),he(()=>{pe(),ce()}),(i,a)=>{const t=P("ProTitle"),r=P("VanForm"),o=P("ProTabButton"),u=P("VanTab"),n=P("VanTabs"),l=P("van-collapse-item"),C=P("van-collapse"),m=P("VanButton"),b=P("ProPageWrap");return y(),R(b,{class:"page-trial-wrapper"},{default:k(()=>{var z,J,G;return[s(e).holderFactor.length?(y(),L("div",we,[_(t,{title:"\u6295\u4FDD\u4EBA"}),_(Q,{ref_key:"holderRef",ref:U,"insured-code":(z=s(e).riskBaseInfo)==null?void 0:z.insurerCode,"form-info":V.value.personVO,"factor-list":s(e).holderFactor,"age-range":s(e).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):T("",!0),s(e).insuredFactor.length?(y(),L("div",Ue,[_(t,{title:"\u88AB\u4FDD\u4EBA"}),_(Q,{ref_key:"insuredRef",ref:j,"insured-code":(J=s(e).riskBaseInfo)==null?void 0:J.insurerCode,"form-info":D.value.personVO,"factor-list":s(e).insuredFactor,"age-range":s(e).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):T("",!0),B("div",je,[_(C,{modelValue:s(e).collapseName,"onUpdate:modelValue":a[1]||(a[1]=f=>s(e).collapseName=f)},{default:k(()=>[_(l,{name:"1"},{title:k(()=>[_(t,{title:"\u6295\u4FDD\u65B9\u6848"})]),default:k(()=>[s(e).riskData.length&&h.value[0]?(y(),L("div",qe,[_(r,{ref_key:"riskFormRef",ref:O,"input-align":"right","error-message-align":"right"},{default:k(()=>[_(Z,{"risk-info":h.value[0],enums:s(e).enumList,"origin-data":s(e).riskData,"pick-factor":M},null,8,["risk-info","enums","origin-data"])]),_:1},512)])):T("",!0),s(e).riskPlanData.length?(y(),L("div",Me,[_(r,{ref_key:"riskFormRef",ref:O,"input-align":"right","error-message-align":"right"},{default:k(()=>[_(n,{active:s(e).currentPlan,"onUpdate:active":a[0]||(a[0]=f=>s(e).currentPlan=f)},{default:k(()=>[(y(!0),L(Ie,null,Ve(s(e).riskPlanData,f=>(y(),R(u,{key:f.planCode,name:f.planCode,title:f.planName},{title:k(()=>[_(o,{title:f.planName,active:s(e).currentPlan===f.planCode},null,8,["title","active"])]),default:k(()=>{var H;return[f.planCode===s(e).currentPlan?(y(),R(Z,{key:0,"risk-info":h.value[f.planCode],enums:s(e).enumList,"origin-data":(H=f.productRiskVoList)==null?void 0:H[0].riskDetailVOList,"pick-factor":M},null,8,["risk-info","enums","origin-data"])):T("",!0)]}),_:2},1032,["name","title"]))),128))]),_:1},8,["active"])]),_:1},512)])):T("",!0)]),_:1})]),_:1},8,["modelValue"])]),B("div",Ye,[B("span",ze,[Je,B("span",Ge,De((s(e).retrialTip?0:((G=s(e).trialResult)==null?void 0:G.premium)||0).toLocaleString("hanidec",{style:"currency",currency:"CNY"})),1)]),B("div",He,[s(e).retrialTip?(y(),L("div",Ke,[We,B("span",{class:"close-icon",onClick:ie})])):T("",!0),s(e).canTrial?(y(),R(m,{key:1,type:"primary",onClick:ue},{default:k(()=>[$e]),_:1})):(y(),R(m,{key:2,type:"primary",onClick:re},{default:k(()=>[Xe]),_:1}))])])]}),_:1})}}});var ut=Be(Qe,[["__scopeId","data-v-08f1cdf9"]]);export{ut as default};
