import{d as a,L as e,M as t,r as i,u as s,a as r,ao as l,o as n,R as o,N as u,b as d,c,a0 as m,e as p,w as f,j as h,f as v,h as k,g as y,i as I,$ as g,ac as P,av as b,aw as D,U as R,be as S,T as L,af as O,X as V,aH as w}from"./index-4382c767.js";import{d as C}from"./debounce-6981b306.js";import{c as T}from"./cloneDeep-96676b66.js";import{_ as j}from"./TrialButton-49356731.js";import{u as F,b as _,p as x}from"./trial-b54ac692.js";import{P as M}from"./config-98e8d477.js";import{i as B}from"./isNaN-beb28144.js";import{u as q}from"./useOrder-71483b96.js";import"./isObjectLike-a9798079.js";import"./keysIn-a287568b.js";import"./_getTag-7f09858e.js";import"./index-9c4c7b58.js";import"./merge-c5599fa4.js";const A=(a,e,t)=>{const i=a,{holder:s}=t,r=t.insuredList[0],l=(e||"").split("_");if(l.length<2)return e;if(B(Number(l[1])))return e;if(l[1]-=1,1===i.exemptFlag){if("to"===l[0]){let a=0;1===i.exemptType?(null==s?void 0:s.birthday)&&(a=parseInt(""+((new Date).getTime()-new Date(s.birthday).getTime())/31536e6,10)):2===i.exemptType&&(null==r?void 0:r.birthday)&&(a=parseInt(""+(+(new Date).getTime()-new Date(r.birthday).getTime())/31536e6,10)),l[1]=+l[1]-a}l[0]="year"}return l.join("_")};const K={class:"trial-wrap"},E={class:"pop-header"},$={class:"header-title"},N=a({name:"TrialPop"}),H=a({...N,props:{dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:"",planList:[]})},shareInfo:{default:()=>({})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null},currentOrderDetail:{default:null}},setup(a,{expose:B}){const N=a,H=e((()=>t((()=>import("./index-af40a812.js")),["static/js/index-af40a812.js","static/css/index-87a0a6cf.css","static/js/index-4382c767.js","static/css/index-22fe1589.css","static/js/debounce-6981b306.js","static/js/isObjectLike-a9798079.js","static/js/cloneDeep-96676b66.js","static/js/keysIn-a287568b.js","static/js/_getTag-7f09858e.js","static/js/index-efccd5a2.js","static/css/index-33ff390a.css","static/js/infoCollection-c4d7de4d.js","static/js/merge-c5599fa4.js","static/js/PayInfo-d5982c5c.js","static/css/PayInfo-6e8174b5.css","static/js/phoneVerify-a8649f31.js","static/js/index-01b43373.js","static/css/index-c3fdf902.css","static/js/useDicData-2e128b38.js","static/js/bankCard-7de5614c.js","static/js/config-98e8d477.js","static/js/trial-b54ac692.js","static/js/product-585b0e6f.js","static/js/index-0e67ee17.js","static/css/index-5ba46c84.css","static/js/index-108ac920.js","static/css/index-37223bfb.css","static/js/empty-ae586b6c.js","static/js/box-title-418a9f69.js","static/css/box-title-54f6fe95.css","static/js/index-cb451efc.js","static/js/trial-e0280792.js","static/js/isNaN-beb28144.js","static/js/useOrder-71483b96.js","static/js/utils-fe89742a.js","static/js/createProposal-0f792bad.js","static/js/constants-7afb7c3d.js","static/js/nextStep-05628c9c.js","static/js/core-51bf953f.js","static/js/constant-8927d485.js"]))),U="试算中...",X=i(null),z=s();r(),z.query;const G=l({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskVOList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{initialPremium:0,initialAmount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1}),J=i(),Q=q();i();const W=i(),Y=i(),Z=()=>{console.log("---close"),G.show=!1,G.loading=!1},aa=i({}),ea=()=>{var a,e;G.riskIsInsure={},null==(e=null==(a=null==N?void 0:N.dataSource)?void 0:a.insureProductRiskVOList)||e.forEach((a=>{var e;const t=null==(e=N.dataSource.productRiskRelationVOList)?void 0:e.find((e=>e.collocationRiskId===a.riskId));t&&(G.riskIsInsure[a.riskCode]={selected:"2",data:null,relation:t})}))};C((async()=>{if(console.log(">>>>>调用试算<<<<<"),G.ifPersonalInfoSuccess){if(G.submitData.productCode=N.productInfo.productCode,G.submitData.tenantId=N.productInfo.tenantId,G.riskVOList=G.riskVOList.map((a=>(a=>{var e,t,i,s;const r=null==(e=N.dataSource.insureProductRiskVOList)?void 0:e.find((e=>a.riskId===e.riskId));if(r&&1!==r.mainRiskFlag){const e=null==(i=null==(t=N.dataSource)?void 0:t.productRiskRelationVOList)?void 0:i.find((a=>a.collocationRiskId===r.riskId));if(e){const t=null==(s=G.riskVOList)?void 0:s.find((a=>a.riskId===e.riskId));M.forEach((e=>{e.ruleKey&&r.productRiskInsureLimitVO&&t&&(1===r.productRiskInsureLimitVO[e.ruleKey]&&(a[e.valueKey]=t[e.valueKey]),3===r.productRiskInsureLimitVO[e.ruleKey]&&(1!==r.exemptFlag?a[e.valueKey]=A(r,t[e.valueKey],G.submitData):a[e.valueKey]=A(r,t[e.ruleValueKey],G.submitData)))}))}}return a})(a))),G.submitData.insuredVOList&&G.submitData.insuredVOList.forEach((a=>{a.productPlanVOList=[{insurerCode:N.productInfo.insurerCode,planCode:N.dataSource.planCode,riskVOList:G.riskVOList}]})),G.isSkipFirstTrial&&!G.hadSkipFirstTrial)return void(G.hadSkipFirstTrial=!0);console.log(">>>数据构建<<<",G.submitData);const a=T(G.submitData);await(async(a,e=!0)=>{G.trialMsg=U,G.trialResultPremium=0,G.loading=!0;let t=!1;if(e){const{code:e}=await F(a);t="10000"===e}!t&&e||(N.hideBenefit||_(a).then((a=>{a.data&&a.code===S&&(aa.value=a.data)})).finally((()=>{G.loading=!1})),x(a).then((a=>{var e,t;if(a.data&&a.code===S){(null==(e=null==a?void 0:a.data)?void 0:e.errorInfo)&&L(`${null==(t=null==a?void 0:a.data)?void 0:t.errorInfo}`),G.trialMsg="",G.trialResultPremium=a.data.initialPremium,G.trialResult=a.data;const i={};a.data.riskPremiumDetailVOList&&a.data.riskPremiumDetailVOList.length&&a.data.riskPremiumDetailVOList.forEach((a=>{i[a.riskCode]={initialPremium:a.initialPremium,initialAmount:a.initialAmount}})),Y.value=i}})).finally((()=>{G.loading=!1})))})(a)}}),300);const ta=()=>{G.isAniShow=!1},ia=()=>{G.trialMsg=U,G.trialResultPremium=0,G.loading=!0},sa=a=>{G.trialMsg="",G.trialResultPremium=a.initialPremium,G.trialResult=a,G.loading=!1};n((()=>{ea()})),o((()=>{G.loading=!0})),u((()=>N.currentOrderDetail),(a=>{J.value=a||Q.value}),{deep:!0,immediate:!0});const ra=i();u((()=>N.tenantProductDetail),(()=>{var a,e,t;const i=((null==(a=null==N?void 0:N.tenantProductDetail)?void 0:a.PREMIUM)||[]).find((a=>{var e;return!a.planCode||a.planCode===(null==(e=null==N?void 0:N.dataSource)?void 0:e.planCode)}))||{};ra.value=null==(t=null==(e=(i.data||[]).sort(((a,e)=>+e.paymentFrequency-+a.paymentFrequency)))?void 0:e[0])?void 0:t.paymentFrequency}),{deep:!0,immediate:!0}),u((()=>G.show),(a=>{a&&(G.select={},G.list=[],G.userData={},G.riskIsInsure={},G.submitData={},G.riskVOList=[{}],G.mainRiskVO={},G.ifPersonalInfoSuccess=!1,G.trialMsg="",G.trialResultPremium=0,ea())}));const la=()=>{G.show=!0,G.isAniShow=!0,G.isSkipFirstTrial=!0,G.hadSkipFirstTrial=!1};return B({open:la,close:Z,getTrialSuccessFlag:()=>G.trialResultPremium>0}),u((()=>N.shareInfo),(()=>{W.value=N.shareInfo}),{deep:!0,immediate:!0}),(a,e)=>{const t=O,i=V,s=w;return d(),c(R,null,[a.hidePopupButton?k("",!0):(d(),c("div",{key:0,class:m(`trial-button ${a.$attrs.class}`)},[p(j,{"is-share":W.value.isShare,premium:v(G).trialResultPremium,"share-info":W.value,"loading-text":"","plan-code":N.dataSource.planCode,"payment-frequency":ra.value,"tenant-product-detail":a.tenantProductDetail,onHandleClick:la},{default:f((()=>[h("立即投保")])),_:1},8,["is-share","premium","share-info","plan-code","payment-frequency","tenant-product-detail"])],2)),v(G).isAniShow||v(G).show?(d(),y(s,{key:1,class:m(`com-trial-wrap ${a.$attrs.class}`),show:v(G).show,closeable:!1,onClose:Z,onClosed:ta},{default:f((()=>[p(i,null,{default:f((()=>[I("div",K,[p(v(H),{ref_key:"insureInfosRef",ref:X,"data-source":a.dataSource,"share-info":a.shareInfo,"is-trial":"","product-info":a.productInfo,"tenant-product-detail":a.tenantProductDetail,"hide-benefit":a.hideBenefit,"default-data":a.defaultData,"default-order":J.value,onTrialStart:ia,onTrialEnd:sa},{trialHead:f((()=>[I("div",E,[I("span",$,g(a.title),1),p(t,{name:"cross",onClick:e[0]||(e[0]=a=>v(G).show=!1)})])])),trialBtn:f((e=>[P(a.$slots,"trialBtn",b(D(e)),(()=>{var t,i,s,r,l,n;return[p(j,{"is-share":W.value.isShare,premium:null==(t=e.riskPremium)?void 0:t.initialPremium,"share-info":W.value,"loading-text":v(G).trialMsg,"plan-code":N.dataSource.planCode,"payment-frequency":(null==(n=null==(l=null==(r=null==(s=null==(i=e.trialData)?void 0:i.insuredList)?void 0:s[0].productList)?void 0:r[0].riskList)?void 0:l[0])?void 0:n.paymentFrequency)+"","tenant-product-detail":a.tenantProductDetail,"handle-share":a=>((a,e)=>{X.value.onShare(a)})(a,e.trialData),disabled:!!v(G).trialMsg,onHandleClick:a=>(e.trialData,void X.value.onNext())},{default:f((()=>[h("立即投保")])),_:2},1032,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail","handle-share","disabled","onHandleClick"])]}))])),_:3},8,["data-source","share-info","product-info","tenant-product-detail","hide-benefit","default-data","default-order"])])])),_:3})])),_:3},8,["class","show"])):k("",!0)],64)}}});export{H as default};
