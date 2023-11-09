import{d as a,a4 as e,a5 as t,j as i,i as s,h as r,r as l,aA as o,az as n,O as u,z as d,o as c,c as m,n as p,b as f,w as h,a8 as k,u as v,f as y,m as I,a as g,e as P,g as D,dk as R,dl as S,F as O,aB as L,T as C,bt as V,au as b}from"./index-48eb641c.js";import{c as w}from"./cloneDeep-715563e2.js";import{_ as T}from"./TrialButton-496706c4.js";import{u as F,c as x,h as _}from"./trial-79905202.js";import{P as j}from"./config-98e8d477.js";import{i as A}from"./isNaN-463a2be8.js";import{u as B}from"./useOrder-0f6f8ad2.js";import"./index-1d5b315e.js";import"./format-31cde443.js";const M=(a,e,t)=>{const i=a,{holder:s}=t,r=t.insuredList[0],l=(e||"").split("_");if(l.length<2)return e;if(A(Number(l[1])))return e;if(l[1]-=1,1===i.exemptFlag){if("to"===l[0]){let a=0;1===i.exemptType?(null==s?void 0:s.birthday)&&(a=parseInt(""+((new Date).getTime()-new Date(s.birthday).getTime())/31536e6,10)):2===i.exemptType&&(null==r?void 0:r.birthday)&&(a=parseInt(""+(+(new Date).getTime()-new Date(r.birthday).getTime())/31536e6,10)),l[1]=+l[1]-a}l[0]="year"}return l.join("_")};const q={class:"trial-wrap"},K={class:"pop-header"},E={class:"header-title"},$=a({name:"TrialPop"}),N=a({...$,props:{dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:"",planList:[]})},shareInfo:{default:()=>({})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null},currentOrderDetail:{default:null},updateRiskCode:{default:""}},setup(a,{expose:A}){const $=a,N=e((()=>t((()=>import("./index-3e5bc638.js")),["static/js/index-3e5bc638.js","static/css/index-4530d2b6.css","static/js/index-48eb641c.js","static/css/index-f1c5cfcb.css","static/js/cloneDeep-715563e2.js","static/js/InsureInfos-85959135.js","static/css/InsureInfos-c3ca3782.css","static/js/index-de590a0b.js","static/js/createProposal-5262977b.js","static/css/createProposal-16f25494.css","static/js/infoCollection-f097cf48.js","static/js/index-328fc7de.js","static/css/index-3af9da40.css","static/js/PolicyInfo-d21052e6.js","static/js/questionnaire-42dcb602.js","static/js/util-49243115.js","static/js/trial-79905202.js","static/js/product-7bbf9c44.js","static/js/trial-b2fc3328.js","static/js/constants-fd74ddbc.js","static/css/constants-f61ff7a3.css","static/js/config-98e8d477.js","static/js/useOrder-0f6f8ad2.js","static/js/utils-44b3d51a.js","static/js/nextStep-ee84a898.js","static/js/core-9d090d05.js","static/js/format-31cde443.js"]))),H="试算中...",z=i(null),U=s();r(),U.query;const G=l({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskVOList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{initialPremium:0,initialAmount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1}),J=i(),Q=B();i();const W=i(),X=i(),Y=()=>{console.log("---close"),G.show=!1,G.loading=!1},Z=i({}),aa=()=>{var a,e;G.riskIsInsure={},null==(e=null==(a=null==$?void 0:$.dataSource)?void 0:a.insureProductRiskVOList)||e.forEach((a=>{var e;const t=null==(e=$.dataSource.productRiskRelationVOList)?void 0:e.find((e=>e.collocationRiskId===a.riskId));t&&(G.riskIsInsure[a.riskCode]={selected:"2",data:null,relation:t})}))};o((async()=>{if(console.log(">>>>>调用试算<<<<<"),G.ifPersonalInfoSuccess){if(G.submitData.productCode=$.productInfo.productCode,G.submitData.tenantId=$.productInfo.tenantId,G.riskVOList=G.riskVOList.map((a=>(a=>{var e,t,i,s;const r=null==(e=$.dataSource.insureProductRiskVOList)?void 0:e.find((e=>a.riskId===e.riskId));if(r&&1!==r.mainRiskFlag){const e=null==(i=null==(t=$.dataSource)?void 0:t.productRiskRelationVOList)?void 0:i.find((a=>a.collocationRiskId===r.riskId));if(e){const t=null==(s=G.riskVOList)?void 0:s.find((a=>a.riskId===e.riskId));j.forEach((e=>{e.ruleKey&&r.productRiskInsureLimitVO&&t&&(1===r.productRiskInsureLimitVO[e.ruleKey]&&(a[e.valueKey]=t[e.valueKey]),3===r.productRiskInsureLimitVO[e.ruleKey]&&(1!==r.exemptFlag?a[e.valueKey]=M(r,t[e.valueKey],G.submitData):a[e.valueKey]=M(r,t[e.ruleValueKey],G.submitData)))}))}}return a})(a))),G.submitData.insuredVOList&&G.submitData.insuredVOList.forEach((a=>{a.productPlanVOList=[{insurerCode:$.productInfo.insurerCode,planCode:$.dataSource.planCode,riskVOList:G.riskVOList}]})),G.isSkipFirstTrial&&!G.hadSkipFirstTrial)return void(G.hadSkipFirstTrial=!0);console.log(">>>数据构建<<<",G.submitData);const a=w(G.submitData);await(async(a,e=!0)=>{G.trialMsg=H,G.trialResultPremium=0,G.loading=!0;let t=!1;if(e){const{code:e}=await F(a);t="10000"===e}!t&&e||($.hideBenefit||x(a).then((a=>{a.data&&a.code===L&&(Z.value=a.data)})).finally((()=>{G.loading=!1})),_(a).then((a=>{var e,t;if(a.data&&a.code===L){(null==(e=null==a?void 0:a.data)?void 0:e.errorInfo)&&C(`${null==(t=null==a?void 0:a.data)?void 0:t.errorInfo}`),G.trialMsg="",G.trialResultPremium=a.data.initialPremium,G.trialResult=a.data;const i={};a.data.riskPremiumDetailVOList&&a.data.riskPremiumDetailVOList.length&&a.data.riskPremiumDetailVOList.forEach((a=>{i[a.riskCode]={initialPremium:a.initialPremium,initialAmount:a.initialAmount}})),X.value=i}})).finally((()=>{G.loading=!1})))})(a)}}),300);const ea=()=>{G.isAniShow=!1},ta=()=>{G.trialMsg=H,G.trialResultPremium=0,G.loading=!0},ia=a=>{G.trialMsg="",G.trialResultPremium=a.initialPremium,G.trialResult=a,G.loading=!1};n((()=>{aa()})),u((()=>{G.loading=!0})),d((()=>$.currentOrderDetail),(a=>{J.value=a||Q.value}),{deep:!0,immediate:!0});const sa=i();d((()=>$.tenantProductDetail),(()=>{var a,e,t;const i=((null==(a=null==$?void 0:$.tenantProductDetail)?void 0:a.PREMIUM)||[]).find((a=>{var e;return!a.planCode||a.planCode===(null==(e=null==$?void 0:$.dataSource)?void 0:e.planCode)}))||{};sa.value=null==(t=null==(e=(i.data||[]).sort(((a,e)=>+e.paymentFrequency-+a.paymentFrequency)))?void 0:e[0])?void 0:t.paymentFrequency}),{deep:!0,immediate:!0}),d((()=>G.show),(a=>{a&&(G.select={},G.list=[],G.userData={},G.riskIsInsure={},G.submitData={},G.riskVOList=[{}],G.mainRiskVO={},G.ifPersonalInfoSuccess=!1,G.trialMsg="",G.trialResultPremium=0,aa())}));const ra=()=>{G.show=!0,G.isAniShow=!0,G.isSkipFirstTrial=!0,G.hadSkipFirstTrial=!1};return A({open:ra,close:Y,getTrialSuccessFlag:()=>G.trialResultPremium>0}),d((()=>$.shareInfo),(()=>{W.value=$.shareInfo}),{deep:!0,immediate:!0}),(a,e)=>{const t=V,i=b;return c(),m(O,null,[a.hidePopupButton?y("",!0):(c(),m("div",{key:0,class:p(`trial-button ${a.$attrs.class}`)},[f(T,{"is-share":W.value.isShare,premium:v(G).trialResultPremium,"share-info":W.value,"loading-text":"","plan-code":$.dataSource.planCode,"payment-frequency":sa.value,"tenant-product-detail":a.tenantProductDetail,onHandleClick:ra},{default:h((()=>[k("立即投保")])),_:1},8,["is-share","premium","share-info","plan-code","payment-frequency","tenant-product-detail"])],2)),v(G).isAniShow||v(G).show?(c(),I(i,{key:1,class:p(`com-trial-wrap ${a.$attrs.class}`),show:v(G).show,closeable:!1,onClose:Y,onClosed:ea},{default:h((()=>[g("div",q,[f(v(N),{ref_key:"insureInfosRef",ref:z,"product-collection":a.dataSource,"default-data":a.defaultData,"product-factor":[],"product-risk-code-map":a.productRiskCodeMap,"hide-benefit":"","update-risk-code":a.updateRiskCode,onTrialStart:ta,onTrialEnd:ia},{trialHead:h((()=>[g("div",K,[g("span",E,P(a.title),1),f(t,{name:"cross",onClick:e[0]||(e[0]=a=>v(G).show=!1)})])])),trialBtn:h((e=>[D(a.$slots,"trialBtn",R(S(e)),(()=>{var t,i,s,r,l,o;return[f(T,{"is-share":W.value.isShare,premium:null==(t=e.riskPremium)?void 0:t.initialPremium,"share-info":W.value,"loading-text":v(G).trialMsg,"plan-code":$.dataSource.planCode,"payment-frequency":(null==(o=null==(l=null==(r=null==(s=null==(i=e.trialData)?void 0:i.insuredList)?void 0:s[0].productList)?void 0:r[0].riskList)?void 0:l[0])?void 0:o.paymentFrequency)+"","tenant-product-detail":a.tenantProductDetail,"handle-share":a=>((a,e)=>{z.value.onShare(a)})(a,e.trialData),onHandleClick:a=>(e.trialData,void z.value.onNext())},{default:h((()=>[k("立即投保")])),_:2},1032,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail","handle-share","onHandleClick"])]}))])),_:3},8,["product-collection","default-data","product-risk-code-map","update-risk-code"])])])),_:3},8,["class","show"])):y("",!0)],64)}}});export{N as default};
