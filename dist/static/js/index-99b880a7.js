import{d as a,a4 as e,a5 as t,i,h as s,g as r,r as l,ax as n,av as o,O as u,z as d,o as c,c as m,p,b as f,w as h,a8 as v,u as k,q as y,l as I,a as P,e as g,f as D,cI as S,cJ as R,F as b,ay as O,T as L,bh as V,ab as w,as as C}from"./index-f532db20.js";import{c as T}from"./cloneDeep-7be160ee.js";import{_ as F}from"./TrialButton-341f3e05.js";import{u as x,b as _,j}from"./trial-90f2cd38.js";import{P as q}from"./config-98e8d477.js";import{i as B}from"./isNaN-c58c1936.js";import{u as A}from"./useOrder-b0c04caa.js";import"./index-50999645.js";const K=(a,e,t)=>{const i=a,{holder:s}=t,r=t.insuredList[0],l=(e||"").split("_");if(l.length<2)return e;if(B(Number(l[1])))return e;if(l[1]-=1,1===i.exemptFlag){if("to"===l[0]){let a=0;1===i.exemptType?(null==s?void 0:s.birthday)&&(a=parseInt(""+((new Date).getTime()-new Date(s.birthday).getTime())/31536e6,10)):2===i.exemptType&&(null==r?void 0:r.birthday)&&(a=parseInt(""+(+(new Date).getTime()-new Date(r.birthday).getTime())/31536e6,10)),l[1]=+l[1]-a}l[0]="year"}return l.join("_")};const M={class:"trial-wrap"},E={class:"pop-header"},$={class:"header-title"},N=a({name:"TrialPop"}),H=a({...N,props:{dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:"",planList:[]})},shareInfo:{default:()=>({})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null},currentOrderDetail:{default:null}},setup(a,{expose:B}){const N=a,H=e((()=>t((()=>import("./index-cb15242d.js")),["static/js/index-cb15242d.js","static/css/index-161c448c.css","static/js/index-f532db20.js","static/css/index-2d8e0b82.css","static/js/cloneDeep-7be160ee.js","static/js/index-75871eb8.js","static/css/index-30776b7a.css","static/js/get-3c32b476.js","static/css/get-539f9e39.css","static/js/infoCollection-07eb5a4d.js","static/js/index-97b93ce9.js","static/css/index-f7532773.css","static/js/empth-c0adfdba.js","static/js/PolicyInfo-b798c202.js","static/js/trial-90f2cd38.js","static/js/search-71699e0a.js","static/css/search-bc6440c8.css","static/js/config-98e8d477.js","static/js/product-585b0e6f.js","static/js/index-de590a0b.js","static/js/index-70e41bc7.js","static/css/index-f3b4b476.css","static/js/empty-ae586b6c.js","static/js/box-title-fae9935e.js","static/css/box-title-54f6fe95.css","static/js/index-cc214828.js","static/js/trial-c35f920c.js","static/js/constants-cc5c786d.js","static/css/constants-f61ff7a3.css","static/js/isNaN-c58c1936.js","static/js/useOrder-b0c04caa.js","static/js/utils-2b99d023.js","static/js/createProposal-3a462568.js","static/js/nextStep-299a2767.js","static/js/core-eb4b5e4c.js","static/js/constant-8927d485.js"]))),z="试算中...",J=i(null),U=s();r(),U.query;const G=l({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskVOList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{initialPremium:0,initialAmount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1}),Q=i(),W=A();i();const X=i(),Y=i(),Z=()=>{console.log("---close"),G.show=!1,G.loading=!1},aa=i({}),ea=()=>{var a,e;G.riskIsInsure={},null==(e=null==(a=null==N?void 0:N.dataSource)?void 0:a.insureProductRiskVOList)||e.forEach((a=>{var e;const t=null==(e=N.dataSource.productRiskRelationVOList)?void 0:e.find((e=>e.collocationRiskId===a.riskId));t&&(G.riskIsInsure[a.riskCode]={selected:"2",data:null,relation:t})}))};n((async()=>{if(console.log(">>>>>调用试算<<<<<"),G.ifPersonalInfoSuccess){if(G.submitData.productCode=N.productInfo.productCode,G.submitData.tenantId=N.productInfo.tenantId,G.riskVOList=G.riskVOList.map((a=>(a=>{var e,t,i,s;const r=null==(e=N.dataSource.insureProductRiskVOList)?void 0:e.find((e=>a.riskId===e.riskId));if(r&&1!==r.mainRiskFlag){const e=null==(i=null==(t=N.dataSource)?void 0:t.productRiskRelationVOList)?void 0:i.find((a=>a.collocationRiskId===r.riskId));if(e){const t=null==(s=G.riskVOList)?void 0:s.find((a=>a.riskId===e.riskId));q.forEach((e=>{e.ruleKey&&r.productRiskInsureLimitVO&&t&&(1===r.productRiskInsureLimitVO[e.ruleKey]&&(a[e.valueKey]=t[e.valueKey]),3===r.productRiskInsureLimitVO[e.ruleKey]&&(1!==r.exemptFlag?a[e.valueKey]=K(r,t[e.valueKey],G.submitData):a[e.valueKey]=K(r,t[e.ruleValueKey],G.submitData)))}))}}return a})(a))),G.submitData.insuredVOList&&G.submitData.insuredVOList.forEach((a=>{a.productPlanVOList=[{insurerCode:N.productInfo.insurerCode,planCode:N.dataSource.planCode,riskVOList:G.riskVOList}]})),G.isSkipFirstTrial&&!G.hadSkipFirstTrial)return void(G.hadSkipFirstTrial=!0);console.log(">>>数据构建<<<",G.submitData);const a=T(G.submitData);await(async(a,e=!0)=>{G.trialMsg=z,G.trialResultPremium=0,G.loading=!0;let t=!1;if(e){const{code:e}=await x(a);t="10000"===e}!t&&e||(N.hideBenefit||_(a).then((a=>{a.data&&a.code===O&&(aa.value=a.data)})).finally((()=>{G.loading=!1})),j(a).then((a=>{var e,t;if(a.data&&a.code===O){(null==(e=null==a?void 0:a.data)?void 0:e.errorInfo)&&L(`${null==(t=null==a?void 0:a.data)?void 0:t.errorInfo}`),G.trialMsg="",G.trialResultPremium=a.data.initialPremium,G.trialResult=a.data;const i={};a.data.riskPremiumDetailVOList&&a.data.riskPremiumDetailVOList.length&&a.data.riskPremiumDetailVOList.forEach((a=>{i[a.riskCode]={initialPremium:a.initialPremium,initialAmount:a.initialAmount}})),Y.value=i}})).finally((()=>{G.loading=!1})))})(a)}}),300);const ta=()=>{G.isAniShow=!1},ia=()=>{G.trialMsg=z,G.trialResultPremium=0,G.loading=!0},sa=a=>{G.trialMsg="",G.trialResultPremium=a.initialPremium,G.trialResult=a,G.loading=!1};o((()=>{ea()})),u((()=>{G.loading=!0})),d((()=>N.currentOrderDetail),(a=>{Q.value=a||W.value}),{deep:!0,immediate:!0});const ra=i();d((()=>N.tenantProductDetail),(()=>{var a,e,t;const i=((null==(a=null==N?void 0:N.tenantProductDetail)?void 0:a.PREMIUM)||[]).find((a=>{var e;return!a.planCode||a.planCode===(null==(e=null==N?void 0:N.dataSource)?void 0:e.planCode)}))||{};ra.value=null==(t=null==(e=(i.data||[]).sort(((a,e)=>+e.paymentFrequency-+a.paymentFrequency)))?void 0:e[0])?void 0:t.paymentFrequency}),{deep:!0,immediate:!0}),d((()=>G.show),(a=>{a&&(G.select={},G.list=[],G.userData={},G.riskIsInsure={},G.submitData={},G.riskVOList=[{}],G.mainRiskVO={},G.ifPersonalInfoSuccess=!1,G.trialMsg="",G.trialResultPremium=0,ea())}));const la=()=>{G.show=!0,G.isAniShow=!0,G.isSkipFirstTrial=!0,G.hadSkipFirstTrial=!1};return B({open:la,close:Z,getTrialSuccessFlag:()=>G.trialResultPremium>0}),d((()=>N.shareInfo),(()=>{X.value=N.shareInfo}),{deep:!0,immediate:!0}),(a,e)=>{const t=V,i=w,s=C;return c(),m(b,null,[a.hidePopupButton?y("",!0):(c(),m("div",{key:0,class:p(`trial-button ${a.$attrs.class}`)},[f(F,{"is-share":X.value.isShare,premium:k(G).trialResultPremium,"share-info":X.value,"loading-text":"","plan-code":N.dataSource.planCode,"payment-frequency":ra.value,"tenant-product-detail":a.tenantProductDetail,onHandleClick:la},{default:h((()=>[v("立即投保")])),_:1},8,["is-share","premium","share-info","plan-code","payment-frequency","tenant-product-detail"])],2)),k(G).isAniShow||k(G).show?(c(),I(s,{key:1,class:p(`com-trial-wrap ${a.$attrs.class}`),show:k(G).show,closeable:!1,onClose:Z,onClosed:ta},{default:h((()=>[f(i,null,{default:h((()=>[P("div",M,[f(k(H),{ref_key:"insureInfosRef",ref:J,"data-source":a.dataSource,"share-info":a.shareInfo,"is-trial":"","product-info":a.productInfo,"tenant-product-detail":a.tenantProductDetail,"hide-benefit":a.hideBenefit,"default-data":a.defaultData,"default-order":Q.value,onTrialStart:ia,onTrialEnd:sa},{trialHead:h((()=>[P("div",E,[P("span",$,g(a.title),1),f(t,{name:"cross",onClick:e[0]||(e[0]=a=>k(G).show=!1)})])])),trialBtn:h((e=>[D(a.$slots,"trialBtn",S(R(e)),(()=>{var t,i,s,r,l,n;return[f(F,{"is-share":X.value.isShare,premium:null==(t=e.riskPremium)?void 0:t.initialPremium,"share-info":X.value,"loading-text":k(G).trialMsg,"plan-code":N.dataSource.planCode,"payment-frequency":(null==(n=null==(l=null==(r=null==(s=null==(i=e.trialData)?void 0:i.insuredList)?void 0:s[0].productList)?void 0:r[0].riskList)?void 0:l[0])?void 0:n.paymentFrequency)+"","tenant-product-detail":a.tenantProductDetail,"handle-share":a=>((a,e)=>{J.value.onShare(a)})(a,e.trialData),onHandleClick:a=>(e.trialData,void J.value.onNext())},{default:h((()=>[v("立即投保")])),_:2},1032,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail","handle-share","onHandleClick"])]}))])),_:3},8,["data-source","share-info","product-info","tenant-product-detail","hide-benefit","default-data","default-order"])])])),_:3})])),_:3},8,["class","show"])):y("",!0)],64)}}});export{H as default};
