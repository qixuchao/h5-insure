import{d as a,a4 as e,a5 as t,j as i,i as s,h as r,r as l,aH as n,aG as o,O as u,z as d,o as c,c as m,n as p,b as f,w as h,a8 as v,u as k,f as y,m as I,a as g,e as P,g as D,dc as b,dd as R,F as S,aI as O,T as L,bp as V,ab as C,aD as w}from"./index-8120d8cf.js";import{c as T}from"./cloneDeep-091bb47a.js";import{_ as F}from"./TrialButton-e6e7c20f.js";import{u as x,c as _,h as j}from"./trial-7cb4d685.js";import{P as M}from"./config-98e8d477.js";import{i as q}from"./isNaN-b05b9d5d.js";import{u as A}from"./useOrder-1196bf19.js";import"./index-4e7f9bd3.js";import"./format-31cde443.js";const B=(a,e,t)=>{const i=a,{holder:s}=t,r=t.insuredList[0],l=(e||"").split("_");if(l.length<2)return e;if(q(Number(l[1])))return e;if(l[1]-=1,1===i.exemptFlag){if("to"===l[0]){let a=0;1===i.exemptType?(null==s?void 0:s.birthday)&&(a=parseInt(""+((new Date).getTime()-new Date(s.birthday).getTime())/31536e6,10)):2===i.exemptType&&(null==r?void 0:r.birthday)&&(a=parseInt(""+(+(new Date).getTime()-new Date(r.birthday).getTime())/31536e6,10)),l[1]=+l[1]-a}l[0]="year"}return l.join("_")};const K={class:"trial-wrap"},E={class:"pop-header"},$={class:"header-title"},H=a({name:"TrialPop"}),N=a({...H,props:{dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:"",planList:[]})},shareInfo:{default:()=>({})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null},currentOrderDetail:{default:null}},setup(a,{expose:q}){const H=a,N=e((()=>t((()=>import("./index-1beaf9ef.js")),["static/js/index-1beaf9ef.js","static/css/index-9abeaa46.css","static/js/index-8120d8cf.js","static/css/index-f1c5cfcb.css","static/js/cloneDeep-091bb47a.js","static/js/InsureInfos-74261df6.js","static/css/InsureInfos-c3ca3782.css","static/js/index-85b786dc.js","static/js/index-994d15f6.js","static/css/index-ea4f829a.css","static/js/infoCollection-d8c37848.js","static/js/index-5f86c60b.js","static/css/index-3af9da40.css","static/js/PolicyInfo-0f1bf9fa.js","static/js/lodash-de1f22ef.js","static/js/questionnaire-42dcb602.js","static/js/util-1af60b82.js","static/js/trial-7cb4d685.js","static/js/product-7bbf9c44.js","static/js/trial-656dc3ab.js","static/js/constants-c56c3ae1.js","static/css/constants-f61ff7a3.css","static/js/config-98e8d477.js","static/js/useOrder-1196bf19.js","static/js/utils-281f28ac.js","static/js/createProposal-97cf563a.js","static/js/nextStep-b87d8da7.js","static/js/core-a5abff49.js","static/js/constants-4b08cf92.js","static/js/format-31cde443.js"]))),z="试算中...",G=i(null),U=s();r(),U.query;const J=l({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskVOList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{initialPremium:0,initialAmount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1}),Q=i(),W=A();i();const X=i(),Y=i(),Z=()=>{console.log("---close"),J.show=!1,J.loading=!1},aa=i({}),ea=()=>{var a,e;J.riskIsInsure={},null==(e=null==(a=null==H?void 0:H.dataSource)?void 0:a.insureProductRiskVOList)||e.forEach((a=>{var e;const t=null==(e=H.dataSource.productRiskRelationVOList)?void 0:e.find((e=>e.collocationRiskId===a.riskId));t&&(J.riskIsInsure[a.riskCode]={selected:"2",data:null,relation:t})}))};n((async()=>{if(console.log(">>>>>调用试算<<<<<"),J.ifPersonalInfoSuccess){if(J.submitData.productCode=H.productInfo.productCode,J.submitData.tenantId=H.productInfo.tenantId,J.riskVOList=J.riskVOList.map((a=>(a=>{var e,t,i,s;const r=null==(e=H.dataSource.insureProductRiskVOList)?void 0:e.find((e=>a.riskId===e.riskId));if(r&&1!==r.mainRiskFlag){const e=null==(i=null==(t=H.dataSource)?void 0:t.productRiskRelationVOList)?void 0:i.find((a=>a.collocationRiskId===r.riskId));if(e){const t=null==(s=J.riskVOList)?void 0:s.find((a=>a.riskId===e.riskId));M.forEach((e=>{e.ruleKey&&r.productRiskInsureLimitVO&&t&&(1===r.productRiskInsureLimitVO[e.ruleKey]&&(a[e.valueKey]=t[e.valueKey]),3===r.productRiskInsureLimitVO[e.ruleKey]&&(1!==r.exemptFlag?a[e.valueKey]=B(r,t[e.valueKey],J.submitData):a[e.valueKey]=B(r,t[e.ruleValueKey],J.submitData)))}))}}return a})(a))),J.submitData.insuredVOList&&J.submitData.insuredVOList.forEach((a=>{a.productPlanVOList=[{insurerCode:H.productInfo.insurerCode,planCode:H.dataSource.planCode,riskVOList:J.riskVOList}]})),J.isSkipFirstTrial&&!J.hadSkipFirstTrial)return void(J.hadSkipFirstTrial=!0);console.log(">>>数据构建<<<",J.submitData);const a=T(J.submitData);await(async(a,e=!0)=>{J.trialMsg=z,J.trialResultPremium=0,J.loading=!0;let t=!1;if(e){const{code:e}=await x(a);t="10000"===e}!t&&e||(H.hideBenefit||_(a).then((a=>{a.data&&a.code===O&&(aa.value=a.data)})).finally((()=>{J.loading=!1})),j(a).then((a=>{var e,t;if(a.data&&a.code===O){(null==(e=null==a?void 0:a.data)?void 0:e.errorInfo)&&L(`${null==(t=null==a?void 0:a.data)?void 0:t.errorInfo}`),J.trialMsg="",J.trialResultPremium=a.data.initialPremium,J.trialResult=a.data;const i={};a.data.riskPremiumDetailVOList&&a.data.riskPremiumDetailVOList.length&&a.data.riskPremiumDetailVOList.forEach((a=>{i[a.riskCode]={initialPremium:a.initialPremium,initialAmount:a.initialAmount}})),Y.value=i}})).finally((()=>{J.loading=!1})))})(a)}}),300);const ta=()=>{J.isAniShow=!1},ia=()=>{J.trialMsg=z,J.trialResultPremium=0,J.loading=!0},sa=a=>{J.trialMsg="",J.trialResultPremium=a.initialPremium,J.trialResult=a,J.loading=!1};o((()=>{ea()})),u((()=>{J.loading=!0})),d((()=>H.currentOrderDetail),(a=>{Q.value=a||W.value}),{deep:!0,immediate:!0});const ra=i();d((()=>H.tenantProductDetail),(()=>{var a,e,t;const i=((null==(a=null==H?void 0:H.tenantProductDetail)?void 0:a.PREMIUM)||[]).find((a=>{var e;return!a.planCode||a.planCode===(null==(e=null==H?void 0:H.dataSource)?void 0:e.planCode)}))||{};ra.value=null==(t=null==(e=(i.data||[]).sort(((a,e)=>+e.paymentFrequency-+a.paymentFrequency)))?void 0:e[0])?void 0:t.paymentFrequency}),{deep:!0,immediate:!0}),d((()=>J.show),(a=>{a&&(J.select={},J.list=[],J.userData={},J.riskIsInsure={},J.submitData={},J.riskVOList=[{}],J.mainRiskVO={},J.ifPersonalInfoSuccess=!1,J.trialMsg="",J.trialResultPremium=0,ea())}));const la=()=>{J.show=!0,J.isAniShow=!0,J.isSkipFirstTrial=!0,J.hadSkipFirstTrial=!1};return q({open:la,close:Z,getTrialSuccessFlag:()=>J.trialResultPremium>0}),d((()=>H.shareInfo),(()=>{X.value=H.shareInfo}),{deep:!0,immediate:!0}),(e,t)=>{const i=V,s=C,r=w;return c(),m(S,null,[a.hidePopupButton?y("",!0):(c(),m("div",{key:0,class:p(`trial-button ${e.$attrs.class}`)},[f(F,{"is-share":X.value.isShare,premium:k(J).trialResultPremium,"share-info":X.value,"loading-text":"","plan-code":H.dataSource.planCode,"payment-frequency":ra.value,"tenant-product-detail":a.tenantProductDetail,onHandleClick:la},{default:h((()=>[v("立即投保")])),_:1},8,["is-share","premium","share-info","plan-code","payment-frequency","tenant-product-detail"])],2)),k(J).isAniShow||k(J).show?(c(),I(r,{key:1,class:p(`com-trial-wrap ${e.$attrs.class}`),show:k(J).show,closeable:!1,onClose:Z,onClosed:ta},{default:h((()=>[f(s,null,{default:h((()=>[g("div",K,[f(k(N),{ref_key:"insureInfosRef",ref:G,"product-collection":a.dataSource,"default-data":a.defaultData,"product-factor":[],"product-risk-code-map":e.productRiskCodeMap,"hide-benefit":"",onTrialStart:ia,onTrialEnd:sa},{trialHead:h((()=>[g("div",E,[g("span",$,P(a.title),1),f(i,{name:"cross",onClick:t[0]||(t[0]=a=>k(J).show=!1)})])])),trialBtn:h((t=>[D(e.$slots,"trialBtn",b(R(t)),(()=>{var e,i,s,r,l,n;return[f(F,{"is-share":X.value.isShare,premium:null==(e=t.riskPremium)?void 0:e.initialPremium,"share-info":X.value,"loading-text":k(J).trialMsg,"plan-code":H.dataSource.planCode,"payment-frequency":(null==(n=null==(l=null==(r=null==(s=null==(i=t.trialData)?void 0:i.insuredList)?void 0:s[0].productList)?void 0:r[0].riskList)?void 0:l[0])?void 0:n.paymentFrequency)+"","tenant-product-detail":a.tenantProductDetail,"handle-share":a=>((a,e)=>{G.value.onShare(a)})(a,t.trialData),onHandleClick:a=>(t.trialData,void G.value.onNext())},{default:h((()=>[v("立即投保")])),_:2},1032,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail","handle-share","onHandleClick"])]}))])),_:3},8,["product-collection","default-data","product-risk-code-map"])])])),_:3})])),_:3},8,["class","show"])):y("",!0)],64)}}});export{N as default};
