var oe=Object.defineProperty,se=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var w=(f,l,u)=>l in f?oe(f,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):f[l]=u,D=(f,l)=>{for(var u in l||(l={}))le.call(l,u)&&w(f,u,l[u]);if(Y)for(var u of Y(l))ue.call(l,u)&&w(f,u,l[u]);return f},N=(f,l)=>se(f,ne(l));import{g as ce,aj as de,Q as pe,C as v,L as me,a3 as _e,X as fe,o as ge,r as g,h as m,j as C,k as _,z as a,m as h,n as p,s as y,y as R,F as ke,E as Pe,I as ve,B as O}from"./vendor-8e0cf49f.js";import{P as J,R as K,i as he,p as ye}from"./trial-665b6766.js";import{n as Re,g as Ve}from"./index-d492de98.js";import{u as Ce}from"./useStorage-4fa5bc11.js";import{_ as Le,P as De}from"./index-6f552213.js";import{P as Oe,I as Te}from"./trial-c8760a84.js";const Be={key:0,class:"part-card"},Fe={key:1,class:"part-card"},Ie={class:"risk-content"},Ne={key:0,class:"risk"},Ee={key:1,class:"plan-risk"},be={class:"footer-bar"},Ae={class:"trial-result"},Se={class:"result-num"},xe=O(" \u5143\u8D77 "),Ue={class:"trial-operate"},Me={key:0,class:"retrial-tip"},je=O(" \u6761\u4EF6\u66F4\u6539\u540E\uFF0C\u9700\u8981\u91CD\u65B0\u8BD5\u7B97 "),qe=O("\u53BB\u8BD5\u7B97"),Ye=O("\u7ACB\u5373\u6295\u4FDD"),we=ce({setup(f){const l=de(),u=pe(),{productCode:W="MMBBSF",templateId:X=1,agentCode:z="test",agencyCode:G="",tenantId:H=9991000007,venderCode:Q="99"}=u.query,T=v({personVO:{}}),B=v({insuredCode:"",personVO:{}}),V=v({}),E=v({}),b=v({}),F=v({}),A=v({}),e=me({currentPlan:"",riskBaseInfo:{},holderFactor:[],insuredFactor:[],riskData:[],riskPlanData:[],trialResult:{},canTrial:!0,retrialTip:!1,enumList:{},ageRange:[],collapseName:["1"],insuredRiskList:[],currentRiskList:[]});_e("premium",A.value),Ce().get("userInfo");const S="premiumTrial",Z=()=>{e.retrialTip=!1},$=(i,r)=>{e.insuredRiskList=i.map(t=>{var o,c;return{initialAmount:(o=r[t.riskCode])==null?void 0:o.amount,paymentFrequency:t.paymentFrequency,paymentPeriod:t.chargePeriod.split("_")[1],paymentPeriodType:Oe[t.chargePeriod.split("_")[0]],insurancePeriodType:Te[t.coveragePeriod.split("_")[0]],insurancePeriodValue:Number.isNaN(+t.coveragePeriod.split("_")[1])?void 0:t.coveragePeriod.split("_")[1],riskCode:t.riskCode,riskType:t.riskType,initialPremium:(c=r[t.riskCode])==null?void 0:c.premium}})},ee=()=>{Re({agencyId:G,saleUserId:z,tenantId:H,venderCode:Q,orderDataSource:1,pageCode:S,extInfo:{templateId:+(X||1),pageCode:S},tenantOrderHolder:{},tenantOrderInsuredList:[{tenantOrderProductList:[{productCode:e.riskBaseInfo.productCode||"",productName:e.riskBaseInfo.productName||"",premium:e.trialResult.premium||0,tenantOrderRiskList:e.insuredRiskList}]}]}).then(({code:i,data:r})=>{i==="10000"&&r.pageAction.pageAction==="jumpToPage"&&l.push({path:De[r.pageAction.data.nextPageCode],query:N(D({},u.query),{orderNo:r.pageAction.data.orderNo})})})},te=()=>{const i=JSON.parse(JSON.stringify(V.value[e.currentPlan])),r=Object.values(i).find(o=>o.riskType===1),t=Object.values(i).map(o=>{const c=o;if(c.chargePeriod==="3"){const n=(r.chargePeriod||"").split("_");n[1]&&(n[1]-=1),c.chargePeriod=n.join("_")}return c.liabilityVOList=(c.liabilityVOList||[]).filter(n=>n.optionalFlag===1||n.liabilityAttributeValue&&n.liabilityAttributeValue!=="-1").map(n=>{const k=n;return k.liabilityAttributeValue==="0"&&(k.liabilityAttributeValue=""),k}),c}),s={holder:T.value,productCode:e.riskBaseInfo.productCode,insuredVOList:[N(D({},B.value),{productPlanVOList:[{planCode:e.currentPlan||"",riskVOList:t}]})]};ye(D({},s)).then(({code:o,data:c})=>{if(o==="10000"){e.retrialTip=!1,e.trialResult=c,e.canTrial=!1;const n={},k=(I=[])=>{(I||[]).forEach(P=>{var L;n[P.riskCode]=P,((L=P.riskPremiumDetailVOList)==null?void 0:L.length)&&k(P.riskPremiumDetailVOList)})};k(c.riskPremiumDetailVOList),$(s.insuredVOList[0].productPlanVOList[0].riskVOList,n),Object.assign(A.value,n)}})},re=()=>{var i,r,t,s,o;Promise.all([(r=(i=E.value)==null?void 0:i.validateForm)==null?void 0:r.call(i),(s=(t=b.value)==null?void 0:t.validateForm)==null?void 0:s.call(t),(o=F.value)==null?void 0:o.validate()]).then(()=>{te()})},ae=()=>{Ve({dictCodeList:["RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"]}).then(({code:r,data:t})=>{if(r==="10000"){const s={};t.forEach(o=>{s[o.dictCode]=o.dictItemList}),e.enumList=s}})},ie=()=>{he({productCode:W,source:1}).then(({code:i,data:r})=>{var t;i==="10000"&&(e.riskBaseInfo=r.productBasicInfoVO,(r.productRelationPlanVOList.length?r.productRelationPlanVOList:r.productRiskVoList[0].riskDetailVOList||[]).forEach((s,o)=>{o===0&&(e.currentPlan=s.planCode||"0"),Object.assign(V.value,{[s.planCode||"0"]:{}})}),e.riskData=((t=r.productRiskVoList[0])==null?void 0:t.riskDetailVOList)||[],e.riskPlanData=r.productRelationPlanVOList||[])}).finally(()=>{})},x=i=>{e.holderFactor=i.holderFactorList,e.insuredFactor=i.insuredFactorList,e.ageRange=i.ageRange};return fe([()=>V.value,()=>T.value,()=>B.value],i=>{i&&!e.canTrial&&(e.canTrial=!0,e.retrialTip=!0)},{deep:!0}),ge(()=>{ie(),ae()}),(i,r)=>{const t=g("ProTitle"),s=g("VanForm"),o=g("ProTabButton"),c=g("VanTab"),n=g("VanTabs"),k=g("van-collapse-item"),I=g("van-collapse"),P=g("VanButton"),L=g("ProPageWrap");return m(),C(L,{class:"page-trial-wrapper"},{default:_(()=>{var U,M,j;return[a(e).holderFactor.length?(m(),h("div",Be,[p(t,{title:"\u6295\u4FDD\u4EBA"}),p(J,{ref_key:"holderRef",ref:E,"insured-code":(U=a(e).riskBaseInfo)==null?void 0:U.insurerCode,"form-info":T.value.personVO,"factor-list":a(e).holderFactor,"age-range":a(e).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):y("",!0),a(e).insuredFactor.length?(m(),h("div",Fe,[p(t,{title:"\u88AB\u4FDD\u4EBA"}),p(J,{ref_key:"insuredRef",ref:b,"insured-code":(M=a(e).riskBaseInfo)==null?void 0:M.insurerCode,"form-info":B.value.personVO,"factor-list":a(e).insuredFactor,"age-range":a(e).ageRange},null,8,["insured-code","form-info","factor-list","age-range"])])):y("",!0),R("div",Ie,[p(I,{modelValue:a(e).collapseName,"onUpdate:modelValue":r[1]||(r[1]=d=>a(e).collapseName=d)},{default:_(()=>[p(k,{name:"1"},{title:_(()=>[p(t,{title:"\u6295\u4FDD\u65B9\u6848"})]),default:_(()=>[a(e).riskData.length?(m(),h("div",Ne,[p(s,{ref_key:"riskFormRef",ref:F,"input-align":"right","error-message-align":"right"},{default:_(()=>[p(K,{"risk-info":V.value[0],enums:a(e).enumList,"origin-data":a(e).riskData,"pick-factor":x},null,8,["risk-info","enums","origin-data"])]),_:1},512)])):y("",!0),a(e).riskPlanData.length?(m(),h("div",Ee,[p(s,{ref_key:"riskFormRef",ref:F,"input-align":"right","error-message-align":"right"},{default:_(()=>[p(n,{active:a(e).currentPlan,"onUpdate:active":r[0]||(r[0]=d=>a(e).currentPlan=d)},{default:_(()=>[(m(!0),h(ke,null,Pe(a(e).riskPlanData,d=>(m(),C(c,{key:d.planCode,name:d.planCode,title:d.planName},{title:_(()=>[p(o,{title:d.planName,active:a(e).currentPlan===d.planCode},null,8,["title","active"])]),default:_(()=>{var q;return[d.planCode===a(e).currentPlan?(m(),C(K,{key:0,"risk-info":V.value[d.planCode],enums:a(e).enumList,"origin-data":(q=d.productRiskVoList)==null?void 0:q[0].riskDetailVOList,"pick-factor":x},null,8,["risk-info","enums","origin-data"])):y("",!0)]}),_:2},1032,["name","title"]))),128))]),_:1},8,["active"])]),_:1},512)])):y("",!0)]),_:1})]),_:1},8,["modelValue"])]),R("div",be,[R("span",Ae,[R("span",Se,ve((a(e).retrialTip?"0":((j=a(e).trialResult)==null?void 0:j.premium)||"0").toLocaleString()),1),xe]),R("div",Ue,[a(e).retrialTip?(m(),h("div",Me,[je,R("span",{class:"close-icon",onClick:Z},"X")])):y("",!0),a(e).canTrial?(m(),C(P,{key:1,type:"primary",onClick:re},{default:_(()=>[qe]),_:1})):(m(),C(P,{key:2,type:"primary",onClick:ee},{default:_(()=>[Ye]),_:1}))])])]}),_:1})}}});var Qe=Le(we,[["__scopeId","data-v-280977c9"]]);export{Qe as default};
