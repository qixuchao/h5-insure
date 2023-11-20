import{d as e,i as o,j as a,k as t,O as s,o as i,m as l,w as r,a as d,e as u,b as c,u as n,p,c as v,F as m,q as f,a8 as k,_ as R,T as C,as as L,at as I,au as y,av as h,aw as j,h as g,ax as b,ay as _,az as q,f as w,s as T}from"./index-1f881fdc.js";import P from"./index-5cd61f64.js";import{a as S,b as x,g as N,s as V,i as M,m as A}from"./trial-1e919085.js";import{_ as K}from"./index-e2dc1186.js";import{S as D}from"./index-724ca227.js";import{R as O}from"./trial-c7c75039.js";import{_ as E}from"./TrialButton-99e52a49.js";import{u as F}from"./useOrder-864fdcb4.js";import{p as U,a as B}from"./utils-776c56f4.js";import{q as $}from"./createProposal-66c2bf16.js";import{f as H,a as z}from"./findLastIndex-04727e74.js";import{c as G}from"./cloneDeep-c7575caa.js";import"./InsureInfos-8bda45db.js";import"./index-de590a0b.js";import"./index-d3a767d8.js";import"./infoCollection-fa42f38a.js";import"./index-530a03cb.js";import"./PolicyInfo-693ce5f0.js";import"./questionnaire-42dcb602.js";import"./util-166e457c.js";import"./product-7bbf9c44.js";import"./constants-0b04418e.js";import"./utils-36cf70de.js";import"./nextStep-36e358ef.js";import"./core-9f23fd2f.js";import"./format-31cde443.js";import"./empty-ae586b6c.js";import"./index-0dc50bbb.js";import"./utils-dbc0c828.js";const J={class:"popup-container"},Q={class:"popup-header"},W={class:"title"},X=(e=>(h("data-v-0a46ec37"),e=e(),j(),e))((()=>d("p",{class:"tip"},"已为您挑选出以下险种",-1))),Y={class:"search"},Z={key:0,class:"risk-list"},ee=e({name:"riskSelect"});var oe=R(e({...ee,props:{type:{default:2},show:{type:Boolean,default:!1},title:{},insuredList:{default:()=>[]},mainRiskCode:{default:""},selectList:{default:()=>[]},currentProductCode:{default:""}},emits:["cancel","confirm"],setup(e,{emit:R}){const h=e,j=o(),{insurerCode:g}=j.query,b=a([]),_=a([]),q=a([]),w=a(),T=t((()=>h.show)),P=()=>{R("cancel")},N=()=>{var e;if(!(null==(e=b.value)?void 0:e.length))return void C(`暂未添加任何${h.type===O.MAIN_RISK?"主":"附加"}险`);let o=[];o=h.type===O.RIDER_RISK?b.value:_.value.filter((e=>b.value.includes(e.productCode))).map((e=>({productCode:e.productCode,mergeRiskReqList:(e.mainRiskCollocationList||[]).map((e=>({riskCode:e.collocationRiskCode,riskType:e.mainRiskCode?2:1,mainRiskCode:e.mainRiskCode})))}))),R("confirm",o)},V=async()=>{var e;const o={insuredList:h.insuredList,mainRiskCode:h.mainRiskCode,insurerCode:g,productCategory:"",keyword:w.value,selectProductCodes:[],selectRiskCodes:[],filterFlag:(null==(e=h.selectList)?void 0:e.length)?1:2};if(o.selectProductCodes=h.selectList.map((e=>(e.productCode===h.currentProductCode&&o.selectRiskCodes.push(...e.mergeRiskReqList.map((e=>e.riskCode))),e.productCode))),h.type===O.MAIN_RISK){const{code:e,data:a}=await S(o);"10000"===e&&(_.value=a)}else{const{code:e,data:a}=await x(o);"10000"===e&&(_.value=a.riskInfoList,q.value=a.collocationInfoResList)}};return s((()=>{V()})),(e,o)=>{const a=D,t=L,s=I,R=K,C=y;return i(),l(C,{show:n(T),"onUpdate:show":o[2]||(o[2]=e=>p(T)?T.value=e:null),class:"popup-risk-select",closeable:!1},{default:r((()=>{var C;return[d("div",J,[d("div",Q,[d("span",{class:"clear-all",onClick:P}," 取消 "),d("span",W,u(e.title),1),d("span",{class:"close",onClick:N},"确认")]),X,d("div",Y,[c(a,{modelValue:n(w),"onUpdate:modelValue":o[0]||(o[0]=e=>p(w)?w.value=e:null),shape:"round",placeholder:"请输入产品名称进行搜索","clear-trigger":"always","show-action":"",clearable:"",onSearch:V},null,8,["modelValue"])]),(null==(C=n(_))?void 0:C.length)?(i(),v("div",Z,[c(s,{modelValue:n(b),"onUpdate:modelValue":o[1]||(o[1]=e=>p(b)?b.value=e:null)},{default:r((()=>[(i(!0),v(m,null,f(n(_),(e=>(i(),l(t,{key:e.riskCode||e.productCode,name:e.riskCode||e.productCode,onClick:()=>{return o=e.riskCode,h.type===O.RIDER_RISK&&(q.value||[]).forEach((e=>{b.value.includes(o)?o===e.relatedRiskCode?(2===e.collocationType&&b.value.push(e.collocationRiskCode),3===e.collocationType&&(b.value.push(o),b.value=b.value.filter((o=>o!==e.collocationRiskCode)))):o===e.collocationRiskCode&&(2===e.collocationType&&b.value.push(e.relatedRiskCode),3===e.collocationType&&(b.value=b.value.filter((o=>o!==e.relatedRiskCode)))):o===e.relatedRiskCode?(2===e.collocationType&&(b.value=b.value.filter((o=>o!==e.collocationRiskCode))),3===e.collocationType&&(b.value.push(o),b.value=b.value.filter((o=>o!==e.collocationRiskCode)))):o===e.collocationRiskCode&&(2===e.collocationType&&(b.value=b.value.filter((o=>o!==e.relatedRiskCode))),3===e.collocationType&&(b.value=b.value.filter((o=>o!==e.relatedRiskCode))))})),void(b.value=[...new Set(b.value)]);var o}},{default:r((()=>[k(u(e.riskName||e.productName),1)])),_:2},1032,["name","onClick"])))),128))])),_:1},8,["modelValue"])])):(i(),l(R,{key:1,title:`暂无关联${e.type===n(O).MAIN_RISK?"主":"附加"}险、请选择其他险种`},null,8,["title"]))])]})),_:1},8,["show"])}}}),[["__scopeId","data-v-0a46ec37"]]);const ae={class:"page-trial-wrap"},te=e({name:"trial"}),se=e({...te,setup(e){const s=o(),d=g(),{productCode:u,orderNo:p,tenantId:m,proposalId:f,proposalInsuredId:k}=s.query,R=a({}),C=a({productList:[]}),L=a([]),I=a({}),y=a(),h=a(),j=F({extInfo:{templateId:201,buttonCode:b.TRIAL_PREMIUM,pageCode:_.TRIAL_PREMIUM}}),S=a(),x=a(),K=a(1),D=t((()=>K.value===O.MAIN_RISK?"添加主险":"添加附加险")),J=a(!1),Q=()=>{A(C.value).then((({code:e,data:o})=>{if("10000"===e){const{productDetailResList:e,productFactor:a}=o;x.value=a,C.value=B(e);const t={};e.forEach((e=>{t[e.productCode]=e})),R.value=t}}))},W=()=>{J.value=!1},X=e=>{if(K.value===O.MAIN_RISK){C.value.productList.push(...e);const o=e.map((e=>e.productCode));y.value.getProductDefaultValue(o)}else{const o=C.value.productList.find((e=>e.productCode===h.value)),a=e.map((e=>({riskCode:e,riskType:O.RIDER_RISK,mainRiskCode:I.value.riskCode}))),t=H(o.mergeRiskReqList,(e=>e.riskCode===I.value.riskCode)),s=z(o.mergeRiskReqList,(e=>e.mainRiskCode===I.value.riskCode));let i=t;-1!==s&&(i=s),o.mergeRiskReqList=[...o.mergeRiskReqList.slice(0,i+1),...a,...o.mergeRiskReqList.slice(i+1,o.mergeRiskReqList.length)],y.value.getRiderRiskDefaultValue(h.value,e,I.value.riskCode,o.mergeRiskReqList)}Q(),J.value=!1},Y=(e,o,a)=>{J.value=!0,K.value=O.RIDER_RISK,L.value=a,I.value=o,h.value=e},Z=e=>{J.value=!0,K.value=O.MAIN_RISK,L.value=e},ee=(e,o,a)=>{R.value[e],a?(R.value[e].productPlanInsureVOList[0].insureProductRiskVOList=R.value[e].productPlanInsureVOList[0].insureProductRiskVOList.filter((e=>e.riskCode!==o)),C.value.productList=C.value.productList.map((a=>(a.productCode===e&&(a.mergeRiskReqList=a.mergeRiskReqList.filter((e=>e.riskCode!==o))),a)))):(C.value.productList=C.value.productList.filter((o=>o.productCode!==e)),Q())},te=()=>{y.value.onNext((async e=>{var o;const a=G(e),t=["id","relationToHolder","beneficiaryList","guardian","insuredBeneficiaryType"];p||Object.keys(null==(o=a.insuredList)?void 0:o[0]).reduce(((e,o)=>{var s,i,l,r;return!t.includes(o)&&(null==(i=null==(s=a.insuredList)?void 0:s[0])?void 0:i[o])&&(e[o]=null==(r=null==(l=a.insuredList)?void 0:l[0])?void 0:r[o]),e}),a.holder);const{code:i,data:l}=await V(a);"10000"===i&&d.push({path:T.questionNotice,query:{...s.query,orderNo:l}})}))};return q((()=>{p?N({orderNo:p,tenantId:m}).then((({code:e,data:o})=>{"10000"===e&&(S.value=o,j.value=o,C.value=U(o.insuredList[0].productList),Q())})):f?$({id:f,tenantId:m}).then((({code:e,data:o})=>{if("10000"===e){const{holder:e,insuredList:a}=o,t=(u||"").split(",");let s=[];const i=(a||[]).filter((e=>e.id===+k)).map((e=>({...e,productList:e.productList.filter((e=>!!t.includes(e.productCode)&&(s=e.occupationCodeList,!0)))})));i[0].occupationCodeList=s,Object.assign(j.value,{renewFlag:"",holder:e,tenantId:m,proposalId:f,insuredList:i}),S.value=j.value,C.value=U(j.value.insuredList[0].productList),Q()}})):M({productCode:u,isTenant:!1}).then((({data:e,code:o})=>{var a,t;"10000"===o&&(R.value[`${u}`]=e,x.value=null==(t=null==(a=null==e?void 0:e.productPlanInsureVOList)?void 0:a[0])?void 0:t.productFactor,C.value=B([e]))}))})),(e,o)=>(i(),v("div",ae,[c(P,{ref_key:"trialRef",ref:y,"product-collection":n(R),"default-data":n(S),"product-factor":n(x),"product-risk-code-map":n(C),"is-trial":"","hide-benefit":"",onAddRisk:Y,onAddMainRisk:Z,onDeleteRisk:ee},{trialBtn:r((({riskPremium:e})=>[c(E,{premium:null==e?void 0:e.initialPremium,onHandleClick:te},null,8,["premium"])])),_:1},8,["product-collection","default-data","product-factor","product-risk-code-map"]),n(J)?(i(),l(oe,{key:0,type:n(K),show:n(J),"insured-list":n(L),title:n(D),"current-product-code":n(h),"main-risk-code":n(I).riskCode,"select-list":n(C).productList,onCancel:W,onConfirm:X},null,8,["type","show","insured-list","title","current-product-code","main-risk-code","select-list"])):w("",!0)]))}});export{se as default};
