import{d as e,i as a,j as o,k as t,O as s,o as i,m as l,w as r,a as d,e as u,b as c,u as n,p,c as v,F as m,q as f,a8 as k,_ as R,T as C,as as L,at as I,au as y,av as h,aw as j,h as g,ax as b,ay as _,az as q,f as w,s as T}from"./index-29312576.js";import P from"./index-9e2283cc.js";import{a as S,b as x,g as N,s as V,i as M,m as A}from"./trial-7802a527.js";import{_ as K}from"./index-a2f996f6.js";import{S as D}from"./index-de25e814.js";import{R as O}from"./trial-539554b9.js";import{_ as E}from"./TrialButton-1b36a929.js";import{u as F}from"./useOrder-d57e6e21.js";import{p as U,a as B}from"./utils-6ffca964.js";import{q as $}from"./createProposal-3a2a0ada.js";import{f as H,a as z}from"./findLastIndex-920d0554.js";import{c as G}from"./cloneDeep-f160fc21.js";import"./InsureInfos-c9b8adb1.js";import"./index-85b786dc.js";import"./index-f7ad38c7.js";import"./infoCollection-d9103528.js";import"./index-33ddd6e1.js";import"./PolicyInfo-37bc4d83.js";import"./questionnaire-42dcb602.js";import"./util-316601c3.js";import"./product-7bbf9c44.js";import"./constants-a6e313ae.js";import"./config-98e8d477.js";import"./utils-7b7ab32d.js";import"./nextStep-1a3a30cd.js";import"./core-d9e743a3.js";import"./format-31cde443.js";import"./empty-ae586b6c.js";import"./index-f8880f35.js";import"./utils-6db2721f.js";const J={class:"popup-container"},Q={class:"popup-header"},W={class:"title"},X=(e=>(h("data-v-0a46ec37"),e=e(),j(),e))((()=>d("p",{class:"tip"},"已为您挑选出以下险种",-1))),Y={class:"search"},Z={key:0,class:"risk-list"},ee=e({name:"riskSelect"});var ae=R(e({...ee,props:{type:{default:2},show:{type:Boolean,default:!1},title:null,insuredList:{default:()=>[]},mainRiskCode:{default:""},selectList:{default:()=>[]},currentProductCode:{default:""}},emits:["cancel","confirm"],setup(e,{emit:R}){const h=e,j=a(),{insurerCode:g}=j.query,b=o([]),_=o([]),q=o([]),w=o(),T=t((()=>h.show)),P=()=>{R("cancel")},N=()=>{var e;if(!(null==(e=b.value)?void 0:e.length))return void C(`暂未添加任何${h.type===O.MAIN_RISK?"主":"附加"}险`);let a=[];a=h.type===O.RIDER_RISK?b.value:_.value.filter((e=>b.value.includes(e.productCode))).map((e=>({productCode:e.productCode,mergeRiskReqList:(e.mainRiskCollocationList||[]).map((e=>({riskCode:e.collocationRiskCode,riskType:e.mainRiskCode?2:1,mainRiskCode:e.mainRiskCode})))}))),R("confirm",a)},V=async()=>{var e;const a={insuredList:h.insuredList,mainRiskCode:h.mainRiskCode,insurerCode:g,productCategory:"",keyword:w.value,selectProductCodes:[],selectRiskCodes:[],filterFlag:(null==(e=h.selectList)?void 0:e.length)?1:2};if(a.selectProductCodes=h.selectList.map((e=>(e.productCode===h.currentProductCode&&a.selectRiskCodes.push(...e.mergeRiskReqList.map((e=>e.riskCode))),e.productCode))),h.type===O.MAIN_RISK){const{code:e,data:o}=await S(a);"10000"===e&&(_.value=o)}else{const{code:e,data:o}=await x(a);"10000"===e&&(_.value=o.riskInfoList,q.value=o.collocationInfoResList)}};return s((()=>{V()})),(a,o)=>{const t=D,s=L,R=I,C=K,j=y;return i(),l(j,{show:n(T),"onUpdate:show":o[2]||(o[2]=e=>p(T)?T.value=e:null),class:"popup-risk-select",closeable:!1},{default:r((()=>{var a;return[d("div",J,[d("div",Q,[d("span",{class:"clear-all",onClick:P}," 取消 "),d("span",W,u(e.title),1),d("span",{class:"close",onClick:N},"确认")]),X,d("div",Y,[c(t,{modelValue:n(w),"onUpdate:modelValue":o[0]||(o[0]=e=>p(w)?w.value=e:null),shape:"round",placeholder:"请输入产品名称进行搜索","clear-trigger":"always","show-action":"",clearable:"",onSearch:V},null,8,["modelValue"])]),(null==(a=n(_))?void 0:a.length)?(i(),v("div",Z,[c(R,{modelValue:n(b),"onUpdate:modelValue":o[1]||(o[1]=e=>p(b)?b.value=e:null)},{default:r((()=>[(i(!0),v(m,null,f(n(_),(e=>(i(),l(s,{key:e.riskCode||e.productCode,name:e.riskCode||e.productCode,onClick:()=>{return a=e.riskCode,h.type===O.RIDER_RISK&&(q.value||[]).forEach((e=>{b.value.includes(a)?a===e.relatedRiskCode?(2===e.collocationType&&b.value.push(e.collocationRiskCode),3===e.collocationType&&(b.value.push(a),b.value=b.value.filter((a=>a!==e.collocationRiskCode)))):a===e.collocationRiskCode&&(2===e.collocationType&&b.value.push(e.relatedRiskCode),3===e.collocationType&&(b.value=b.value.filter((a=>a!==e.relatedRiskCode)))):a===e.relatedRiskCode?(2===e.collocationType&&(b.value=b.value.filter((a=>a!==e.collocationRiskCode))),3===e.collocationType&&(b.value.push(a),b.value=b.value.filter((a=>a!==e.collocationRiskCode)))):a===e.collocationRiskCode&&(2===e.collocationType&&(b.value=b.value.filter((a=>a!==e.relatedRiskCode))),3===e.collocationType&&(b.value=b.value.filter((a=>a!==e.relatedRiskCode))))})),void(b.value=[...new Set(b.value)]);var a}},{default:r((()=>[k(u(e.riskName||e.productName),1)])),_:2},1032,["name","onClick"])))),128))])),_:1},8,["modelValue"])])):(i(),l(C,{key:1,title:`暂无关联${e.type===n(O).MAIN_RISK?"主":"附加"}险、请选择其他险种`},null,8,["title"]))])]})),_:1},8,["show"])}}}),[["__scopeId","data-v-0a46ec37"]]);const oe={class:"page-trial-wrap"},te=e({name:"trial"}),se=e({...te,setup(e){const s=a(),d=g(),{productCode:u,orderNo:p,tenantId:m,proposalId:f,proposalInsuredId:k}=s.query,R=o({}),C=o({productList:[]}),L=o([]),I=o({}),y=o(),h=o(),j=F({extInfo:{templateId:201,buttonCode:b.TRIAL_PREMIUM,pageCode:_.TRIAL_PREMIUM}}),S=o(),x=o(),K=o(1),D=t((()=>K.value===O.MAIN_RISK?"添加主险":"添加附加险")),J=o(!1),Q=()=>{A(C.value).then((({code:e,data:a})=>{if("10000"===e){const{productDetailResList:e,productFactor:o}=a;x.value=o,C.value=B(e);const t={};e.forEach((e=>{t[e.productCode]=e})),R.value=t}}))},W=()=>{J.value=!1},X=e=>{if(K.value===O.MAIN_RISK){C.value.productList.push(...e);const a=e.map((e=>e.productCode));y.value.getProductDefaultValue(a)}else{const a=C.value.productList.find((e=>e.productCode===h.value)),o=e.map((e=>({riskCode:e,riskType:O.RIDER_RISK,mainRiskCode:I.value.riskCode}))),t=H(a.mergeRiskReqList,(e=>e.riskCode===I.value.riskCode)),s=z(a.mergeRiskReqList,(e=>e.mainRiskCode===I.value.riskCode));let i=t;-1!==s&&(i=s),a.mergeRiskReqList=[...a.mergeRiskReqList.slice(0,i+1),...o,...a.mergeRiskReqList.slice(i+1,a.mergeRiskReqList.length)],y.value.getRiderRiskDefaultValue(h.value,e,I.value.riskCode)}Q(),J.value=!1},Y=(e,a,o)=>{J.value=!0,K.value=O.RIDER_RISK,L.value=o,I.value=a,h.value=e},Z=e=>{J.value=!0,K.value=O.MAIN_RISK,L.value=e},ee=(e,a,o)=>{R.value[e],o?(R.value[e].productPlanInsureVOList[0].insureProductRiskVOList=R.value[e].productPlanInsureVOList[0].insureProductRiskVOList.filter((e=>e.riskCode!==a)),C.value.productList=C.value.productList.map((o=>(o.productCode===e&&(o.mergeRiskReqList=o.mergeRiskReqList.filter((e=>e.riskCode!==a))),o)))):(C.value.productList=C.value.productList.filter((a=>a.productCode!==e)),Q())},te=()=>{y.value.onNext((async e=>{var a;const o=G(e),t=["id","relationToHolder","beneficiaryList","guardian","insuredBeneficiaryType"];p||Object.keys(null==(a=o.insuredList)?void 0:a[0]).reduce(((e,a)=>{var s,i,l,r;return!t.includes(a)&&(null==(i=null==(s=o.insuredList)?void 0:s[0])?void 0:i[a])&&(e[a]=null==(r=null==(l=o.insuredList)?void 0:l[0])?void 0:r[a]),e}),o.holder);const{code:i,data:l}=await V(o);"10000"===i&&d.push({path:T.questionNotice,query:{...s.query,orderNo:l}})}))};return q((()=>{p?N({orderNo:p,tenantId:m}).then((({code:e,data:a})=>{"10000"===e&&(S.value=a,j.value=a,C.value=U(a.insuredList[0].productList),Q())})):f?$({id:f,tenantId:m}).then((({code:e,data:a})=>{if("10000"===e){const{holder:e,insuredList:o}=a,t=(u||"").split(",");let s=[];const i=(o||[]).filter((e=>e.id===+k)).map((e=>({...e,productList:e.productList.filter((e=>!!t.includes(e.productCode)&&(s=e.occupationCodeList,!0)))})));i[0].occupationCodeList=s,Object.assign(j.value,{renewFlag:"",holder:e,tenantId:m,proposalId:f,insuredList:i}),S.value=j.value,C.value=U(j.value.insuredList[0].productList),Q()}})):M({productCode:u,isTenant:!1}).then((({data:e,code:a})=>{var o,t;"10000"===a&&(R.value[`${u}`]=e,x.value=null==(t=null==(o=null==e?void 0:e.productPlanInsureVOList)?void 0:o[0])?void 0:t.productFactor,C.value=B([e]))}))})),(e,a)=>(i(),v("div",oe,[c(P,{ref_key:"trialRef",ref:y,"product-collection":n(R),"default-data":n(S),"product-factor":n(x),"product-risk-code-map":n(C),"is-trial":"","hide-benefit":"",onAddRisk:Y,onAddMainRisk:Z,onDeleteRisk:ee},{trialBtn:r((({riskPremium:e})=>[c(E,{premium:null==e?void 0:e.initialPremium,onHandleClick:te},null,8,["premium"])])),_:1},8,["product-collection","default-data","product-factor","product-risk-code-map"]),n(J)?(i(),l(ae,{key:0,type:n(K),show:n(J),"insured-list":n(L),title:n(D),"current-product-code":n(h),"main-risk-code":n(I).riskCode,"select-list":n(C).productList,onCancel:W,onConfirm:X},null,8,["type","show","insured-list","title","current-product-code","main-risk-code","select-list"])):w("",!0)]))}});export{se as default};
