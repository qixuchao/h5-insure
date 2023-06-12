import{d as a,R as e,U as t,r as i,u as s,a as r,A as l,o as n,Z as o,V as u,b as d,c,F as m,e as p,w as f,j as h,f as v,h as k,g as y,i as I,E as g,k as P,ar as D,as as b,$ as R,ah as S,a2 as L,a$ as O,aQ as V,T as C}from"./index-2aa81fa9.js";import{d as w}from"./debounce-6981b306.js";import{c as T}from"./cloneDeep-f5e28e96.js";import{_ as j}from"./TrialButton-04572fed.js";import{u as F,b as _,p as x}from"./trial-1825ece8.js";import{P as A}from"./config-98e8d477.js";import{i as B}from"./isNaN-beb28144.js";import{u as M}from"./useOrder-de3a303c.js";import"./isObjectLike-a9798079.js";import"./keysIn-b1e7a5ec.js";import"./_getTag-5c78de73.js";import"./index-5857444c.js";import"./merge-84cb998c.js";const q=(a,e,t)=>{const i=a,{holder:s}=t,r=t.insuredList[0],l=(e||"").split("_");if(l.length<2)return e;if(B(Number(l[1])))return e;if(l[1]-=1,1===i.exemptFlag){if("to"===l[0]){let a=0;1===i.exemptType?(null==s?void 0:s.birthday)&&(a=parseInt(""+((new Date).getTime()-new Date(s.birthday).getTime())/31536e6,10)):2===i.exemptType&&(null==r?void 0:r.birthday)&&(a=parseInt(""+(+(new Date).getTime()-new Date(r.birthday).getTime())/31536e6,10)),l[1]=+l[1]-a}l[0]="year"}return l.join("_")};const E={class:"pop-header"},K={class:"header-title"},$=a({name:"TrialPop"}),N=a({...$,props:{dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:"",planList:[]})},shareInfo:{default:()=>({})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null},currentOrderDetail:{default:null}},setup(a,{expose:B}){const $=a,N=e((()=>t((()=>import("./index-873ca565.js")),["static/js/index-873ca565.js","static/css/index-2d7806da.css","static/css/index-c3fdf902.css","static/js/debounce-6981b306.js","static/js/isObjectLike-a9798079.js","static/js/cloneDeep-f5e28e96.js","static/js/keysIn-b1e7a5ec.js","static/js/_getTag-5c78de73.js","static/js/index-2aa81fa9.js","static/css/index-9494d932.css","static/js/index-47f38545.js","static/css/index-ebe0e3b1.css","static/js/infoCollection-0494b326.js","static/js/merge-84cb998c.js","static/js/index-505a8d1f.js","static/js/ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-ad122051.js","static/css/ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-d312631d.css","static/js/phoneVerify-a52a73bf.js","static/js/index-a5665dff.js","static/js/useDicData-355b9409.js","static/js/bankCard-c302b73e.js","static/js/config-98e8d477.js","static/js/trial-1825ece8.js","static/js/index-8a7279a4.js","static/css/index-afa6e8d1.css","static/js/index-91379169.js","static/css/index-37223bfb.css","static/js/empty-ae586b6c.js","static/js/box-title-efb165d8.js","static/css/box-title-54f6fe95.css","static/js/index-fc2b4304.js","static/js/trial-ec1f7710.js","static/js/isNaN-beb28144.js","static/js/useOrder-de3a303c.js","static/js/utils-6f154169.js","static/js/createProposal-960b649b.js","static/js/constants-7afb7c3d.js","static/js/nextStep-d0bb8f2d.js","static/js/core-c229d9d5.js","static/js/constant-8927d485.js"]))),H="试算中...",U=i(null),Q=s();r(),Q.query;const Z=l({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskVOList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{initialPremium:0,initialAmount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1}),z=i(),G=M();i();const J=i(),W=i(),X=()=>{console.log("---close"),Z.show=!1,Z.loading=!1},Y=i({}),aa=()=>{var a,e;Z.riskIsInsure={},null==(e=null==(a=null==$?void 0:$.dataSource)?void 0:a.insureProductRiskVOList)||e.forEach((a=>{var e;const t=null==(e=$.dataSource.productRiskRelationVOList)?void 0:e.find((e=>e.collocationRiskId===a.riskId));t&&(Z.riskIsInsure[a.riskCode]={selected:"2",data:null,relation:t})}))};w((async()=>{if(console.log(">>>>>调用试算<<<<<"),Z.ifPersonalInfoSuccess){if(Z.submitData.productCode=$.productInfo.productCode,Z.submitData.tenantId=$.productInfo.tenantId,Z.riskVOList=Z.riskVOList.map((a=>(a=>{var e,t,i,s;const r=null==(e=$.dataSource.insureProductRiskVOList)?void 0:e.find((e=>a.riskId===e.riskId));if(r&&1!==r.mainRiskFlag){const e=null==(i=null==(t=$.dataSource)?void 0:t.productRiskRelationVOList)?void 0:i.find((a=>a.collocationRiskId===r.riskId));if(e){const t=null==(s=Z.riskVOList)?void 0:s.find((a=>a.riskId===e.riskId));A.forEach((e=>{e.ruleKey&&r.productRiskInsureLimitVO&&t&&(1===r.productRiskInsureLimitVO[e.ruleKey]&&(a[e.valueKey]=t[e.valueKey]),3===r.productRiskInsureLimitVO[e.ruleKey]&&(1!==r.exemptFlag?a[e.valueKey]=q(r,t[e.valueKey],Z.submitData):a[e.valueKey]=q(r,t[e.ruleValueKey],Z.submitData)))}))}}return a})(a))),Z.submitData.insuredVOList&&Z.submitData.insuredVOList.forEach((a=>{a.productPlanVOList=[{insurerCode:$.productInfo.insurerCode,planCode:$.dataSource.planCode,riskVOList:Z.riskVOList}]})),Z.isSkipFirstTrial&&!Z.hadSkipFirstTrial)return void(Z.hadSkipFirstTrial=!0);console.log(">>>数据构建<<<",Z.submitData);const a=T(Z.submitData);await(async(a,e=!0)=>{Z.trialMsg=H,Z.trialResultPremium=0,Z.loading=!0;let t=!1;if(e){const{code:e}=await F(a);t="10000"===e}!t&&e||($.hideBenefit||_(a).then((a=>{a.data&&a.code===V&&(Y.value=a.data)})).finally((()=>{Z.loading=!1})),x(a).then((a=>{var e,t;if(a.data&&a.code===V){(null==(e=null==a?void 0:a.data)?void 0:e.errorInfo)&&C(`${null==(t=null==a?void 0:a.data)?void 0:t.errorInfo}`),Z.trialMsg="",Z.trialResultPremium=a.data.initialPremium,Z.trialResult=a.data;const i={};a.data.riskPremiumDetailVOList&&a.data.riskPremiumDetailVOList.length&&a.data.riskPremiumDetailVOList.forEach((a=>{i[a.riskCode]={initialPremium:a.initialPremium,initialAmount:a.initialAmount}})),W.value=i}})).finally((()=>{Z.loading=!1})))})(a)}}),300);const ea=()=>{Z.isAniShow=!1},ta=()=>{Z.trialMsg=H,Z.trialResultPremium=0,Z.loading=!0},ia=a=>{Z.trialMsg="",Z.trialResultPremium=a.initialPremium,Z.trialResult=a,Z.loading=!1};n((()=>{aa()})),o((()=>{Z.loading=!0})),u((()=>$.currentOrderDetail),(a=>{z.value=a||G.value}),{deep:!0,immediate:!0});const sa=i();u((()=>$.tenantProductDetail),(()=>{var a,e,t;const i=((null==(a=null==$?void 0:$.tenantProductDetail)?void 0:a.PREMIUM)||[]).find((a=>{var e;return!a.planCode||a.planCode===(null==(e=null==$?void 0:$.dataSource)?void 0:e.planCode)}))||{};sa.value=null==(t=null==(e=(i.data||[]).sort(((a,e)=>+e.paymentFrequency-+a.paymentFrequency)))?void 0:e[0])?void 0:t.paymentFrequency}),{deep:!0,immediate:!0}),u((()=>Z.show),(a=>{a&&(Z.select={},Z.list=[],Z.userData={},Z.riskIsInsure={},Z.submitData={},Z.riskVOList=[{}],Z.mainRiskVO={},Z.ifPersonalInfoSuccess=!1,Z.trialMsg="",Z.trialResultPremium=0,aa())}));const ra=()=>{Z.show=!0,Z.isAniShow=!0,Z.isSkipFirstTrial=!0,Z.hadSkipFirstTrial=!1};return B({open:ra,close:X,getTrialSuccessFlag:()=>Z.trialResultPremium>0}),u((()=>$.shareInfo),(()=>{J.value=$.shareInfo}),{deep:!0,immediate:!0}),(e,t)=>{const i=S,s=L,r=O;return d(),c(R,null,[a.hidePopupButton?k("",!0):(d(),c("div",{key:0,class:m(`trial-button ${e.$attrs.class}`)},[p(j,{"is-share":J.value.isShare,premium:v(Z).trialResultPremium,"share-info":J.value,"loading-text":"","plan-code":$.dataSource.planCode,"payment-frequency":sa.value,"tenant-product-detail":a.tenantProductDetail,onHandleClick:ra},{default:f((()=>[h("立即投保")])),_:1},8,["is-share","premium","share-info","plan-code","payment-frequency","tenant-product-detail"])],2)),v(Z).isAniShow||v(Z).show?(d(),y(r,{key:1,class:m(`com-trial-wrap ${e.$attrs.class}`),show:v(Z).show,closeable:!1,onClose:X,onClosed:ea},{default:f((()=>[p(s,null,{default:f((()=>[p(v(N),{ref_key:"insureInfosRef",ref:U,"data-source":a.dataSource,"share-info":a.shareInfo,"is-trial":"","product-info":a.productInfo,"tenant-product-detail":a.tenantProductDetail,"hide-benefit":a.hideBenefit,"default-data":a.defaultData,"default-order":z.value,onTrialStart:ta,onTrialEnd:ia},{trialHead:f((()=>[I("div",E,[I("span",K,g(a.title),1),p(i,{name:"cross",onClick:t[0]||(t[0]=a=>v(Z).show=!1)})])])),trialBtn:f((t=>[P(e.$slots,"trialBtn",D(b(t)),(()=>{var e,i,s,r,l,n;return[p(j,{"is-share":J.value.isShare,premium:null==(e=t.riskPremium)?void 0:e.initialPremium,"share-info":J.value,"loading-text":v(Z).trialMsg,"plan-code":$.dataSource.planCode,"payment-frequency":(null==(n=null==(l=null==(r=null==(s=null==(i=t.trialData)?void 0:i.insuredList)?void 0:s[0].productList)?void 0:r[0].riskList)?void 0:l[0])?void 0:n.paymentFrequency)+"","tenant-product-detail":a.tenantProductDetail,"handle-share":a=>((a,e)=>{U.value.onShare(a)})(a,t.trialData),disabled:!!v(Z).trialMsg,onHandleClick:a=>(t.trialData,void U.value.onNext())},{default:f((()=>[h("立即投保")])),_:2},1032,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail","handle-share","disabled","onHandleClick"])]}))])),_:3},8,["data-source","share-info","product-info","tenant-product-detail","hide-benefit","default-data","default-order"])])),_:3})])),_:3},8,["class","show"])):k("",!0)],64)}}});export{N as default};
