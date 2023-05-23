import{d as a,r as e,u as t,a as i,z as s,o as l,a1 as r,R as n,c as o,A as u,F as d,i as c,w as m,j as p,g as f,h,e as v,f as I,E as k,k as P,at as y,au as g,U as R,n as D,av as S,T as L,aw as w,al as C,P as b,p as O}from"./index-23662367.js";import{l as T,P as V}from"./index-65f73c33.js";import{_ as x}from"./TrialButton-3dc96831.js";import{u as M,b as A,p as F}from"./trial-93a105c5.js";import{u as _}from"./useOrder-d02a4756.js";import{t as E}from"./utils-114d8315.js";import{P as j,B as q}from"./constants-7afb7c3d.js";import{n as B}from"./nextStep-290d937d.js";import{T as K}from"./index-ae0f2820.js";const U=(a,e,t)=>{const i=a,{holder:s}=t,l=t.insuredList[0],r=(e||"").split("_");if(r.length<2)return e;if(T.exports.isNaN(Number(r[1])))return e;if(r[1]-=1,1===i.exemptFlag){if("to"===r[0]){let a=0;1===i.exemptType?(null==s?void 0:s.birthday)&&(a=parseInt(""+((new Date).getTime()-new Date(s.birthday).getTime())/31536e6,10)):2===i.exemptType&&(null==l?void 0:l.birthday)&&(a=parseInt(""+(+(new Date).getTime()-new Date(l.birthday).getTime())/31536e6,10)),r[1]=+r[1]-a}r[0]="year"}return r.join("_")};const N={class:"pop-header"},$={class:"header-title"},H=a({name:"TrialPop"}),G=a({...H,props:{dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:"",planList:[]})},shareInfo:{default:()=>({})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null}},setup(a,{expose:H}){const G=a,J="试算中...",z=e(null),Q=t();i();const{tenantId:W,templateId:X,preview:Y}=Q.query,Z=s({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskVOList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{initialPremium:0,initialAmount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1}),aa=_();e();const ea=e(),ta=e(),ia=()=>{console.log("---close"),Z.show=!1,Z.loading=!1},sa=e({}),la=()=>{var a,e;Z.riskIsInsure={},null==(e=null==(a=null==G?void 0:G.dataSource)?void 0:a.insureProductRiskVOList)||e.forEach((a=>{var e;const t=null==(e=G.dataSource.productRiskRelationVOList)?void 0:e.find((e=>e.collocationRiskId===a.riskId));t&&(Z.riskIsInsure[a.riskCode]={selected:"2",data:null,relation:t})}))};T.exports.debounce((async()=>{if(console.log(">>>>>调用试算<<<<<"),Z.ifPersonalInfoSuccess){if(Z.submitData.productCode=G.productInfo.productCode,Z.submitData.tenantId=G.productInfo.tenantId,Z.riskVOList=Z.riskVOList.map((a=>(a=>{var e,t,i,s;const l=null==(e=G.dataSource.insureProductRiskVOList)?void 0:e.find((e=>a.riskId===e.riskId));if(l&&1!==l.mainRiskFlag){const e=null==(i=null==(t=G.dataSource)?void 0:t.productRiskRelationVOList)?void 0:i.find((a=>a.collocationRiskId===l.riskId));if(e){const t=null==(s=Z.riskVOList)?void 0:s.find((a=>a.riskId===e.riskId));V.forEach((e=>{e.ruleKey&&l.productRiskInsureLimitVO&&t&&(1===l.productRiskInsureLimitVO[e.ruleKey]&&(a[e.valueKey]=t[e.valueKey]),3===l.productRiskInsureLimitVO[e.ruleKey]&&(1!==l.exemptFlag?a[e.valueKey]=U(l,t[e.valueKey],Z.submitData):a[e.valueKey]=U(l,t[e.ruleValueKey],Z.submitData)))}))}}return a})(a))),Z.submitData.insuredVOList&&Z.submitData.insuredVOList.forEach((a=>{a.productPlanVOList=[{insurerCode:G.productInfo.insurerCode,planCode:G.dataSource.planCode,riskVOList:Z.riskVOList}]})),Z.isSkipFirstTrial&&!Z.hadSkipFirstTrial)return void(Z.hadSkipFirstTrial=!0);console.log(">>>数据构建<<<",Z.submitData);const a=T.exports.cloneDeep(Z.submitData);await(async(a,e=!0)=>{Z.trialMsg=J,Z.trialResultPremium=0,Z.loading=!0;let t=!1;if(e){const{code:e}=await M(a);t="10000"===e}!t&&e||(G.hideBenefit||A(a).then((a=>{a.data&&a.code===S&&(sa.value=a.data)})).finally((()=>{Z.loading=!1})),F(a).then((a=>{var e,t;if(a.data&&a.code===S){(null==(e=null==a?void 0:a.data)?void 0:e.errorInfo)&&L(`${null==(t=null==a?void 0:a.data)?void 0:t.errorInfo}`),Z.trialMsg="",Z.trialResultPremium=a.data.initialPremium,Z.trialResult=a.data;const i={};a.data.riskPremiumDetailVOList&&a.data.riskPremiumDetailVOList.length&&a.data.riskPremiumDetailVOList.forEach((a=>{i[a.riskCode]={initialPremium:a.initialPremium,initialAmount:a.initialAmount}})),ta.value=i}})).finally((()=>{Z.loading=!1})))})(a)}}),300);const ra=()=>{Z.isAniShow=!1},na=()=>{Z.trialMsg=J,Z.trialResultPremium=0,Z.loading=!0},oa=a=>{Z.trialMsg="",Z.trialResultPremium=a.initialPremium,Z.trialResult=a,Z.loading=!1};l((()=>{la()})),r((()=>{Z.loading=!0}));const ua=e();n((()=>G.tenantProductDetail),(()=>{var a,e,t;const i=((null==(a=null==G?void 0:G.tenantProductDetail)?void 0:a.PREMIUM)||[]).find((a=>{var e;return!a.planCode||a.planCode===(null==(e=null==G?void 0:G.dataSource)?void 0:e.planCode)}))||{};ua.value=null==(t=null==(e=(i.data||[]).sort(((a,e)=>+e.paymentFrequency-+a.paymentFrequency)))?void 0:e[0])?void 0:t.paymentFrequency}),{deep:!0,immediate:!0}),n((()=>Z.show),(a=>{a&&(Z.select={},Z.list=[],Z.userData={},Z.riskIsInsure={},Z.submitData={},Z.riskVOList=[{}],Z.mainRiskVO={},Z.ifPersonalInfoSuccess=!1,Z.trialMsg="",Z.trialResultPremium=0,la())}));const da=()=>{Z.show=!0,Z.isAniShow=!0,Z.isSkipFirstTrial=!0,Z.hadSkipFirstTrial=!1};return H({open:da,close:ia,getTrialSuccessFlag:()=>Z.trialResultPremium>0}),n((()=>G.shareInfo),(()=>{ea.value=G.shareInfo}),{deep:!0,immediate:!0}),(e,t)=>{const i=w,s=C;return o(),u(R,null,[a.hidePopupButton?h("",!0):(o(),u("div",{key:0,class:d(`trial-button ${e.$attrs.class}`)},[c(x,{"is-share":ea.value.isShare,premium:f(Z).trialResultPremium,"share-info":ea.value,"loading-text":"","plan-code":G.dataSource.planCode,"payment-frequency":ua.value,"tenant-product-detail":a.tenantProductDetail,onHandleClick:da},{default:m((()=>[p("立即投保")])),_:1},8,["is-share","premium","share-info","plan-code","payment-frequency","tenant-product-detail"])],2)),f(Z).isAniShow||f(Z).show?(o(),v(s,{key:1,class:d(`com-trial-wrap ${e.$attrs.class}`),show:f(Z).show,closeable:!1,onClose:ia,onClosed:ra},{default:m((()=>[c(K,{ref_key:"insureInfosRef",ref:z,"data-source":a.dataSource,"share-info":a.shareInfo,"is-trial":"","product-info":a.productInfo,"tenant-product-detail":a.tenantProductDetail,"hide-benefit":a.hideBenefit,"default-data":a.defaultData,onTrialStart:na,onTrialEnd:oa},{trialHead:m((()=>[I("div",N,[I("span",$,k(a.title),1),c(i,{name:"cross",onClick:t[0]||(t[0]=a=>f(Z).show=!1)})])])),trialBtn:m((t=>[P(e.$slots,"trialBtn",y(g(t)),(()=>{var e,i,s,l,r,n;return[c(x,{"is-share":ea.value.isShare,premium:null==(e=t.riskPremium)?void 0:e.initialPremium,"share-info":ea.value,"loading-text":f(Z).trialMsg,"plan-code":G.dataSource.planCode,"payment-frequency":(null==(n=null==(r=null==(l=null==(s=null==(i=t.trialData)?void 0:i.insuredList)?void 0:s[0].productList)?void 0:l[0].riskList)?void 0:r[0])?void 0:n.paymentFrequency)+"","tenant-product-detail":a.tenantProductDetail,"handle-share":a=>((a,e)=>{var t;Z.trialResultPremium&&(null==(t=z.value)||t.validate().then((()=>{Object.assign(aa.value,{extInfo:{...aa.value.extInfo,buttonCode:q.TRIAL_PREMIUM,pageCode:j.TRIAL_PREMIUM,templateId:X}});const t=E(e,Z.trialResult,aa.value);B(t,((e,t)=>{t===b.JUMP_PAGE&&(ea.value.link=`${window.location.href}&isShare=1&orderNo=${e.orderNo}`,a())})),console.log("---- validate success ----")})))})(a,t.trialData),onHandleClick:a=>(a=>{if(Y)D(j.TRIAL_PREMIUM,Q.query);else if(Z.trialResult.initialPremium){Object.assign(aa.value,{extInfo:{...aa.value.extInfo,buttonCode:q.TRIAL_PREMIUM,pageCode:j.TRIAL_PREMIUM,templateId:X}});const e=E(a,Z.trialResult,aa.value);B(e,((a,e)=>{e===b.JUMP_PAGE&&O(a.nextPageCode,{...Q.query,orderNo:a.orderNo})})),console.log("---- validate success ----"),Z.loading=!1,Z.show=!0,Z.isAniShow=!0}})(t.trialData)},{default:m((()=>[p("立即投保")])),_:2},1032,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail","handle-share","onHandleClick"])]}))])),_:3},8,["data-source","share-info","product-info","tenant-product-detail","hide-benefit","default-data"])])),_:3},8,["class","show"])):h("",!0)],64)}}});export{G as _};
