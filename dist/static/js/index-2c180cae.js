import{d as e,r as a,u as t,a as i,z as s,o as l,a1 as r,R as n,c as o,A as u,F as d,i as c,w as m,j as p,g as f,h,e as v,f as I,E as k,k as P,at as y,au as g,U as R,n as D,av as S,T as b,aw as L,al as w,P as C,p as O}from"./index-bcc62a26.js";import{l as T,P as V}from"./index-c72f23d0.js";import{_ as x}from"./TrialButton-0606e926.js";import{u as M,b as A,p as F}from"./trial-366c4247.js";import{u as _}from"./useOrder-b7700527.js";import{t as E}from"./utils-64e2ab2b.js";import{P as j,B as q}from"./constants-7afb7c3d.js";import{n as B}from"./nextStep-55473503.js";import{T as K}from"./index-616a84cd.js";const U=(e,a,t)=>{const i=e,{holder:s}=t,l=t.insuredList[0],r=(a||"").split("_");if(r.length<2)return a;if(T.exports.isNaN(Number(r[1])))return a;if(r[1]-=1,1===i.exemptFlag){if("to"===r[0]){let e=0;1===i.exemptType?(null==s?void 0:s.birthday)&&(e=parseInt(""+((new Date).getTime()-new Date(s.birthday).getTime())/31536e6,10)):2===i.exemptType&&(null==l?void 0:l.birthday)&&(e=parseInt(""+(+(new Date).getTime()-new Date(l.birthday).getTime())/31536e6,10)),r[1]=+r[1]-e}r[0]="year"}return r.join("_")};const N={class:"header"},$={class:"header-title"},H=e({name:"TrialPop"}),G=e({...H,props:{dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:""})},shareInfo:{default:()=>({})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null},currentOrderDetail:{default:null}},setup(e,{expose:H}){const G=e,J="试算中...",z=a(null),Q=t();i();const{tenantId:W,templateId:X,preview:Y}=Q.query,Z=s({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskVOList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{initialPremium:0,initialAmount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1}),ee=a(),ae=_();a();const te=a(),ie=a(),se=()=>{console.log("---close"),Z.show=!1,Z.loading=!1},le=a({}),re=()=>{var e,a;Z.riskIsInsure={},null==(a=null==(e=null==G?void 0:G.dataSource)?void 0:e.insureProductRiskVOList)||a.forEach((e=>{var a;const t=null==(a=G.dataSource.productRiskRelationVOList)?void 0:a.find((a=>a.collocationRiskId===e.riskId));t&&(Z.riskIsInsure[e.riskCode]={selected:"2",data:null,relation:t})}))};T.exports.debounce((async()=>{if(console.log(">>>>>调用试算<<<<<"),Z.ifPersonalInfoSuccess){if(Z.submitData.productCode=G.productInfo.productCode,Z.submitData.tenantId=G.productInfo.tenantId,Z.riskVOList=Z.riskVOList.map((e=>(e=>{var a,t,i,s;const l=null==(a=G.dataSource.insureProductRiskVOList)?void 0:a.find((a=>e.riskId===a.riskId));if(l&&1!==l.mainRiskFlag){const a=null==(i=null==(t=G.dataSource)?void 0:t.productRiskRelationVOList)?void 0:i.find((e=>e.collocationRiskId===l.riskId));if(a){const t=null==(s=Z.riskVOList)?void 0:s.find((e=>e.riskId===a.riskId));V.forEach((a=>{a.ruleKey&&l.productRiskInsureLimitVO&&t&&(1===l.productRiskInsureLimitVO[a.ruleKey]&&(e[a.valueKey]=t[a.valueKey]),3===l.productRiskInsureLimitVO[a.ruleKey]&&(1!==l.exemptFlag?e[a.valueKey]=U(l,t[a.valueKey],Z.submitData):e[a.valueKey]=U(l,t[a.ruleValueKey],Z.submitData)))}))}}return e})(e))),Z.submitData.insuredVOList&&Z.submitData.insuredVOList.forEach((e=>{e.productPlanVOList=[{insurerCode:G.productInfo.insurerCode,planCode:G.dataSource.planCode,riskVOList:Z.riskVOList}]})),Z.isSkipFirstTrial&&!Z.hadSkipFirstTrial)return void(Z.hadSkipFirstTrial=!0);console.log(">>>数据构建<<<",Z.submitData);const e=T.exports.cloneDeep(Z.submitData);await(async(e,a=!0)=>{Z.trialMsg=J,Z.trialResultPremium=0,Z.loading=!0;let t=!1;if(a){const{code:a}=await M(e);t="10000"===a}!t&&a||(G.hideBenefit||A(e).then((e=>{e.data&&e.code===S&&(le.value=e.data)})).finally((()=>{Z.loading=!1})),F(e).then((e=>{var a,t;if(e.data&&e.code===S){(null==(a=null==e?void 0:e.data)?void 0:a.errorInfo)&&b(`${null==(t=null==e?void 0:e.data)?void 0:t.errorInfo}`),Z.trialMsg="",Z.trialResultPremium=e.data.initialPremium,Z.trialResult=e.data;const i={};e.data.riskPremiumDetailVOList&&e.data.riskPremiumDetailVOList.length&&e.data.riskPremiumDetailVOList.forEach((e=>{i[e.riskCode]={initialPremium:e.initialPremium,initialAmount:e.initialAmount}})),ie.value=i}})).finally((()=>{Z.loading=!1})))})(e)}}),300);const ne=()=>{Z.isAniShow=!1},oe=()=>{Z.trialMsg=J,Z.trialResultPremium=0,Z.loading=!0},ue=e=>{Z.trialMsg="",Z.trialResultPremium=e.initialPremium,Z.trialResult=e,Z.loading=!1};l((()=>{re()})),r((()=>{Z.loading=!0})),n((()=>G.currentOrderDetail),(e=>{ee.value=e||ae.value}),{deep:!0,immediate:!0});const de=a();n((()=>G.tenantProductDetail),(()=>{var e,a,t;const i=((null==(e=null==G?void 0:G.tenantProductDetail)?void 0:e.PREMIUM)||[]).find((e=>{var a;return!e.planCode||e.planCode===(null==(a=null==G?void 0:G.dataSource)?void 0:a.planCode)}))||{};de.value=null==(t=null==(a=(i.data||[]).sort(((e,a)=>+a.paymentFrequency-+e.paymentFrequency)))?void 0:a[0])?void 0:t.paymentFrequency}),{deep:!0,immediate:!0}),n((()=>Z.show),(e=>{e&&(Z.select={},Z.list=[],Z.userData={},Z.riskIsInsure={},Z.submitData={},Z.riskVOList=[{}],Z.mainRiskVO={},Z.ifPersonalInfoSuccess=!1,Z.trialMsg="",Z.trialResultPremium=0,re())}));const ce=()=>{Z.show=!0,Z.isAniShow=!0,Z.isSkipFirstTrial=!0,Z.hadSkipFirstTrial=!1};return H({open:ce,close:se,getTrialSuccessFlag:()=>Z.trialResultPremium>0}),n((()=>G.shareInfo),(()=>{te.value=G.shareInfo}),{deep:!0,immediate:!0}),(a,t)=>{const i=L,s=w;return o(),u(R,null,[e.hidePopupButton?h("",!0):(o(),u("div",{key:0,class:d(`trial-button ${a.$attrs.class}`)},[c(x,{"is-share":te.value.isShare,premium:f(Z).trialResultPremium,"share-info":te.value,"loading-text":"","plan-code":G.dataSource.planCode,"payment-frequency":de.value,"tenant-product-detail":e.tenantProductDetail,onHandleClick:ce},{default:m((()=>[p("立即投保")])),_:1},8,["is-share","premium","share-info","plan-code","payment-frequency","tenant-product-detail"])],2)),f(Z).isAniShow||f(Z).show?(o(),v(s,{key:1,class:d(`com-trial-wrap ${a.$attrs.class}`),show:f(Z).show,closeable:!1,onClose:se,onClosed:ne},{default:m((()=>[c(K,{ref_key:"insureInfosRef",ref:z,"data-source":e.dataSource,"share-info":e.shareInfo,"is-trial":"","product-info":e.productInfo,"tenant-product-detail":e.tenantProductDetail,"hide-benefit":e.hideBenefit,"default-data":e.defaultData,onTrialStart:oe,onTrialEnd:ue},{trialHead:m((()=>[I("div",N,[I("span",$,k(e.title),1),c(i,{name:"cross",onClick:t[0]||(t[0]=e=>f(Z).show=!1)})])])),trialBtn:m((t=>[P(a.$slots,"trialBtn",y(g(t)),(()=>{var a,i,s,l,r,n;return[c(x,{"is-share":te.value.isShare,premium:null==(a=t.riskPremium)?void 0:a.initialPremium,"share-info":te.value,"loading-text":f(Z).trialMsg,"plan-code":G.dataSource.planCode,"payment-frequency":(null==(n=null==(r=null==(l=null==(s=null==(i=t.trialData)?void 0:i.insuredList)?void 0:s[0].productList)?void 0:l[0].riskList)?void 0:r[0])?void 0:n.paymentFrequency)+"","tenant-product-detail":e.tenantProductDetail,"handle-share":e=>((e,a)=>{var t;Z.trialResultPremium&&(null==(t=z.value)||t.validate().then((()=>{Object.assign(ee.value,{extInfo:{...ee.value.extInfo,buttonCode:q.TRIAL_PREMIUM,pageCode:j.TRIAL_PREMIUM,templateId:X}});const t=E(a,Z.trialResult,ee.value);B(t,((a,t)=>{t===C.JUMP_PAGE&&(te.value.link=`${window.location.href}&isShare=1&orderNo=${a.orderNo}`,e())})),console.log("---- validate success ----")})))})(e,t.trialData),onHandleClick:e=>(e=>{if(Y)D(j.TRIAL_PREMIUM,Q.query);else if(Z.trialResult.initialPremium){Object.assign(ee.value,{extInfo:{...ee.value.extInfo,buttonCode:q.TRIAL_PREMIUM,pageCode:j.TRIAL_PREMIUM,templateId:X}});const a=E(e,Z.trialResult,ee.value);B(a,((e,a)=>{a===C.JUMP_PAGE&&O(e.nextPageCode,{...Q.query,orderNo:e.orderNo})})),console.log("---- validate success ----"),Z.loading=!1,Z.show=!0,Z.isAniShow=!0}})(t.trialData)},{default:m((()=>[p("立即投保")])),_:2},1032,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail","handle-share","onHandleClick"])]}))])),_:3},8,["data-source","share-info","product-info","tenant-product-detail","hide-benefit","default-data"])])),_:3},8,["class","show"])):h("",!0)],64)}}});export{G as _};
