import{d as a,a4 as e,a5 as t,i,h as s,g as r,r as l,aw as n,av as o,O as u,z as d,o as c,c as m,p,b as f,w as h,a8 as v,u as k,q as y,l as I,a as g,e as P,f as D,cK as S,cL as R,F as L,ax as O,T as b,bg as V,ab as w,as as C}from"./index-5f0b7c0f.js";import{c as T}from"./cloneDeep-e8318d68.js";import{_ as F}from"./TrialButton-cc877efd.js";import{u as x,c as _,j}from"./trial-702131ae.js";import{P as q}from"./config-98e8d477.js";import{i as B}from"./isNaN-ef3a2bc4.js";import{u as K}from"./useOrder-737dc359.js";import"./index-546b109a.js";const A=(a,e,t)=>{const i=a,{holder:s}=t,r=t.insuredList[0],l=(e||"").split("_");if(l.length<2)return e;if(B(Number(l[1])))return e;if(l[1]-=1,1===i.exemptFlag){if("to"===l[0]){let a=0;1===i.exemptType?(null==s?void 0:s.birthday)&&(a=parseInt(""+((new Date).getTime()-new Date(s.birthday).getTime())/31536e6,10)):2===i.exemptType&&(null==r?void 0:r.birthday)&&(a=parseInt(""+(+(new Date).getTime()-new Date(r.birthday).getTime())/31536e6,10)),l[1]=+l[1]-a}l[0]="year"}return l.join("_")};const M={class:"trial-wrap"},E={class:"pop-header"},$={class:"header-title"},N=a({name:"TrialPop"}),H=a({...N,props:{dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:"",planList:[]})},shareInfo:{default:()=>({})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null},currentOrderDetail:{default:null}},setup(a,{expose:B}){const N=a,H=e((()=>t((()=>import("./index-315fc944.js")),["static/js/index-315fc944.js","static/css/index-161c448c.css","static/js/index-5f0b7c0f.js","static/css/index-858bf1e3.css","static/js/cloneDeep-e8318d68.js","static/js/index-a0ea2194.js","static/css/index-30776b7a.css","static/js/get-e18a3932.js","static/css/get-539f9e39.css","static/js/infoCollection-cc9e8fc9.js","static/js/index-bd431ee4.js","static/css/index-f7532773.css","static/js/empth-c0adfdba.js","static/js/PolicyInfo-4903e88c.js","static/js/trial-702131ae.js","static/js/search-48b44400.js","static/css/search-bc6440c8.css","static/js/config-98e8d477.js","static/js/product-585b0e6f.js","static/js/index-de590a0b.js","static/js/index-c2b2d0a9.js","static/css/index-f3b4b476.css","static/js/empty-ae586b6c.js","static/js/box-title-17b950d1.js","static/css/box-title-54f6fe95.css","static/js/index-da34b0b5.js","static/js/trial-51ade33a.js","static/js/constants-000448b3.js","static/css/constants-f61ff7a3.css","static/js/isNaN-ef3a2bc4.js","static/js/useOrder-737dc359.js","static/js/utils-c95d9f16.js","static/js/createProposal-972a6fea.js","static/js/nextStep-10f5de0a.js","static/js/core-3af9d072.js","static/js/constants-fe95ef6f.js"]))),z="试算中...",U=i(null),G=s();r(),G.query;const J=l({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskVOList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{initialPremium:0,initialAmount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1}),Q=i(),W=K();i();const X=i(),Y=i(),Z=()=>{console.log("---close"),J.show=!1,J.loading=!1},aa=i({}),ea=()=>{var a,e;J.riskIsInsure={},null==(e=null==(a=null==N?void 0:N.dataSource)?void 0:a.insureProductRiskVOList)||e.forEach((a=>{var e;const t=null==(e=N.dataSource.productRiskRelationVOList)?void 0:e.find((e=>e.collocationRiskId===a.riskId));t&&(J.riskIsInsure[a.riskCode]={selected:"2",data:null,relation:t})}))};n((async()=>{if(console.log(">>>>>调用试算<<<<<"),J.ifPersonalInfoSuccess){if(J.submitData.productCode=N.productInfo.productCode,J.submitData.tenantId=N.productInfo.tenantId,J.riskVOList=J.riskVOList.map((a=>(a=>{var e,t,i,s;const r=null==(e=N.dataSource.insureProductRiskVOList)?void 0:e.find((e=>a.riskId===e.riskId));if(r&&1!==r.mainRiskFlag){const e=null==(i=null==(t=N.dataSource)?void 0:t.productRiskRelationVOList)?void 0:i.find((a=>a.collocationRiskId===r.riskId));if(e){const t=null==(s=J.riskVOList)?void 0:s.find((a=>a.riskId===e.riskId));q.forEach((e=>{e.ruleKey&&r.productRiskInsureLimitVO&&t&&(1===r.productRiskInsureLimitVO[e.ruleKey]&&(a[e.valueKey]=t[e.valueKey]),3===r.productRiskInsureLimitVO[e.ruleKey]&&(1!==r.exemptFlag?a[e.valueKey]=A(r,t[e.valueKey],J.submitData):a[e.valueKey]=A(r,t[e.ruleValueKey],J.submitData)))}))}}return a})(a))),J.submitData.insuredVOList&&J.submitData.insuredVOList.forEach((a=>{a.productPlanVOList=[{insurerCode:N.productInfo.insurerCode,planCode:N.dataSource.planCode,riskVOList:J.riskVOList}]})),J.isSkipFirstTrial&&!J.hadSkipFirstTrial)return void(J.hadSkipFirstTrial=!0);console.log(">>>数据构建<<<",J.submitData);const a=T(J.submitData);await(async(a,e=!0)=>{J.trialMsg=z,J.trialResultPremium=0,J.loading=!0;let t=!1;if(e){const{code:e}=await x(a);t="10000"===e}!t&&e||(N.hideBenefit||_(a).then((a=>{a.data&&a.code===O&&(aa.value=a.data)})).finally((()=>{J.loading=!1})),j(a).then((a=>{var e,t;if(a.data&&a.code===O){(null==(e=null==a?void 0:a.data)?void 0:e.errorInfo)&&b(`${null==(t=null==a?void 0:a.data)?void 0:t.errorInfo}`),J.trialMsg="",J.trialResultPremium=a.data.initialPremium,J.trialResult=a.data;const i={};a.data.riskPremiumDetailVOList&&a.data.riskPremiumDetailVOList.length&&a.data.riskPremiumDetailVOList.forEach((a=>{i[a.riskCode]={initialPremium:a.initialPremium,initialAmount:a.initialAmount}})),Y.value=i}})).finally((()=>{J.loading=!1})))})(a)}}),300);const ta=()=>{J.isAniShow=!1},ia=()=>{J.trialMsg=z,J.trialResultPremium=0,J.loading=!0},sa=a=>{J.trialMsg="",J.trialResultPremium=a.initialPremium,J.trialResult=a,J.loading=!1};o((()=>{ea()})),u((()=>{J.loading=!0})),d((()=>N.currentOrderDetail),(a=>{Q.value=a||W.value}),{deep:!0,immediate:!0});const ra=i();d((()=>N.tenantProductDetail),(()=>{var a,e,t;const i=((null==(a=null==N?void 0:N.tenantProductDetail)?void 0:a.PREMIUM)||[]).find((a=>{var e;return!a.planCode||a.planCode===(null==(e=null==N?void 0:N.dataSource)?void 0:e.planCode)}))||{};ra.value=null==(t=null==(e=(i.data||[]).sort(((a,e)=>+e.paymentFrequency-+a.paymentFrequency)))?void 0:e[0])?void 0:t.paymentFrequency}),{deep:!0,immediate:!0}),d((()=>J.show),(a=>{a&&(J.select={},J.list=[],J.userData={},J.riskIsInsure={},J.submitData={},J.riskVOList=[{}],J.mainRiskVO={},J.ifPersonalInfoSuccess=!1,J.trialMsg="",J.trialResultPremium=0,ea())}));const la=()=>{J.show=!0,J.isAniShow=!0,J.isSkipFirstTrial=!0,J.hadSkipFirstTrial=!1};return B({open:la,close:Z,getTrialSuccessFlag:()=>J.trialResultPremium>0}),d((()=>N.shareInfo),(()=>{X.value=N.shareInfo}),{deep:!0,immediate:!0}),(a,e)=>{const t=V,i=w,s=C;return c(),m(L,null,[a.hidePopupButton?y("",!0):(c(),m("div",{key:0,class:p(`trial-button ${a.$attrs.class}`)},[f(F,{"is-share":X.value.isShare,premium:k(J).trialResultPremium,"share-info":X.value,"loading-text":"","plan-code":N.dataSource.planCode,"payment-frequency":ra.value,"tenant-product-detail":a.tenantProductDetail,onHandleClick:la},{default:h((()=>[v("立即投保")])),_:1},8,["is-share","premium","share-info","plan-code","payment-frequency","tenant-product-detail"])],2)),k(J).isAniShow||k(J).show?(c(),I(s,{key:1,class:p(`com-trial-wrap ${a.$attrs.class}`),show:k(J).show,closeable:!1,onClose:Z,onClosed:ta},{default:h((()=>[f(i,null,{default:h((()=>[g("div",M,[f(k(H),{ref_key:"insureInfosRef",ref:U,"data-source":a.dataSource,"share-info":a.shareInfo,"is-trial":"","product-info":a.productInfo,"tenant-product-detail":a.tenantProductDetail,"hide-benefit":a.hideBenefit,"default-data":a.defaultData,"default-order":Q.value,onTrialStart:ia,onTrialEnd:sa},{trialHead:h((()=>[g("div",E,[g("span",$,P(a.title),1),f(t,{name:"cross",onClick:e[0]||(e[0]=a=>k(J).show=!1)})])])),trialBtn:h((e=>[D(a.$slots,"trialBtn",S(R(e)),(()=>{var t,i,s,r,l,n;return[f(F,{"is-share":X.value.isShare,premium:null==(t=e.riskPremium)?void 0:t.initialPremium,"share-info":X.value,"loading-text":k(J).trialMsg,"plan-code":N.dataSource.planCode,"payment-frequency":(null==(n=null==(l=null==(r=null==(s=null==(i=e.trialData)?void 0:i.insuredList)?void 0:s[0].productList)?void 0:r[0].riskList)?void 0:l[0])?void 0:n.paymentFrequency)+"","tenant-product-detail":a.tenantProductDetail,"handle-share":a=>((a,e)=>{U.value.onShare(a)})(a,e.trialData),onHandleClick:a=>(e.trialData,void U.value.onNext())},{default:h((()=>[v("立即投保")])),_:2},1032,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail","handle-share","onHandleClick"])]}))])),_:3},8,["data-source","share-info","product-info","tenant-product-detail","hide-benefit","default-data","default-order"])])])),_:3})])),_:3},8,["class","show"])):y("",!0)],64)}}});export{H as default};
