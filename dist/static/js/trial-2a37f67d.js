import{d as e,i as o,j as t,k as a,l as s,o as i,p as l,w as r,a as d,e as u,b as c,u as n,q as p,c as v,F as m,s as f,v as k,_ as R,T as C,z as L,aA as I,aB as y,A as h,aC as j,aD as g,aE as _,h as w,aF as b,aG as q,aH as T,f as P,y as N}from"./index-7832f651.js";import S from"./index-2c5e8514.js";import{a as x,b as V,g as A,s as M,i as D,m as K}from"./trial-80b69ed6.js";import{R as E}from"./trial-6a85e674.js";import{_ as B}from"./TrialButton-7cf5dd94.js";import{u as O}from"./useOrder-047e876f.js";import{p as F,a as U}from"./utils-23f04528.js";import{q as z}from"./createProposal-f4bd248d.js";import{g as H}from"./util-ac26b1a2.js";import{f as $,a as G}from"./findLastIndex-dbcfed59.js";import{c as J}from"./cloneDeep-f3d068f9.js";import"./InsureInfos-736b76a4.js";import"./index-de590a0b.js";import"./index-c240cde6.js";import"./infoCollection-7e7ce9cd.js";import"./index-263e742d.js";import"./PolicyInfo-a93eca30.js";import"./questionnaire-42dcb602.js";import"./product-7bbf9c44.js";import"./utils-00ac850b.js";import"./constants-7afb7c3d.js";import"./nextStep-2ee74159.js";import"./core-95e64c27.js";import"./format-31cde443.js";import"./index-3988156f.js";import"./utils-6f9f2879.js";const Q={class:"popup-container"},W={class:"popup-header"},X={class:"title"},Y=(e=>(g("data-v-9f30e43a"),e=e(),_(),e))((()=>d("p",{class:"tip"},"已为您挑选出以下险种",-1))),Z={class:"search"},ee={key:0,class:"risk-list"},oe=e({name:"riskSelect"});var te=R(e({...oe,props:{type:{default:2},show:{type:Boolean,default:!1},title:{},insuredList:{default:()=>[]},mainRiskCode:{default:""},selectList:{default:()=>[]},currentProductCode:{default:""}},emits:["cancel","confirm"],setup(e,{emit:R}){const g=e,_=o(),{insurerCode:w}=_.query,b=t([]),q=t([]),T=t([]),P=t(),N=a((()=>g.show)),S=()=>{R("cancel")},A=()=>{var e;if(!(null==(e=b.value)?void 0:e.length))return void C(`暂未添加任何${g.type===E.MAIN_RISK?"主":"附加"}险`);let o=[];o=g.type===E.RIDER_RISK?b.value:q.value.filter((e=>b.value.includes(e.productCode))).map((e=>({productCode:e.productCode,mergeRiskReqList:(e.mainRiskCollocationList||[]).map((e=>({riskCode:e.collocationRiskCode,riskType:e.mainRiskCode?2:1,mainRiskCode:e.mainRiskCode})))}))),R("confirm",o)},M=async()=>{var e;const o={insuredList:g.insuredList,mainRiskCode:g.mainRiskCode,insurerCode:w,productCategory:"",keyword:P.value,selectProductCodes:[],selectRiskCodes:[],filterFlag:(null==(e=g.selectList)?void 0:e.length)?1:2};if(o.selectProductCodes=g.selectList.map((e=>(e.productCode===g.currentProductCode&&o.selectRiskCodes.push(...e.mergeRiskReqList.map((e=>e.riskCode))),e.productCode))),g.type===E.MAIN_RISK){const{code:e,data:t}=await x(o);"10000"===e&&(q.value=t)}else{const{code:e,data:t}=await V(o);"10000"===e&&(q.value=t.riskInfoList,T.value=t.collocationInfoResList)}};return s((()=>{M()})),(e,o)=>{const t=L,a=I,s=y,R=h,C=j;return i(),l(C,{show:n(N),"onUpdate:show":o[2]||(o[2]=e=>p(N)?N.value=e:null),class:"popup-risk-select",closeable:!1},{default:r((()=>{var C;return[d("div",Q,[d("div",W,[d("span",{class:"clear-all",onClick:S}," 取消 "),d("span",X,u(e.title),1),d("span",{class:"close",onClick:A},"确认")]),Y,d("div",Z,[c(t,{modelValue:n(P),"onUpdate:modelValue":o[0]||(o[0]=e=>p(P)?P.value=e:null),placeholder:"请输入产品名称进行搜索",onSearch:M},null,8,["modelValue"])]),(null==(C=n(q))?void 0:C.length)?(i(),v("div",ee,[c(s,{modelValue:n(b),"onUpdate:modelValue":o[1]||(o[1]=e=>p(b)?b.value=e:null)},{default:r((()=>[(i(!0),v(m,null,f(n(q),(e=>(i(),l(a,{key:e.riskCode||e.productCode,name:e.riskCode||e.productCode,onClick:()=>{return o=e.riskCode,g.type===E.RIDER_RISK&&(T.value||[]).forEach((e=>{b.value.includes(o)?o===e.relatedRiskCode?(2===e.collocationType&&b.value.push(e.collocationRiskCode),3===e.collocationType&&(b.value.push(o),b.value=b.value.filter((o=>o!==e.collocationRiskCode)))):o===e.collocationRiskCode&&(2===e.collocationType&&b.value.push(e.relatedRiskCode),3===e.collocationType&&(b.value=b.value.filter((o=>o!==e.relatedRiskCode)))):o===e.relatedRiskCode?(2===e.collocationType&&(b.value=b.value.filter((o=>o!==e.collocationRiskCode))),3===e.collocationType&&(b.value.push(o),b.value=b.value.filter((o=>o!==e.collocationRiskCode)))):o===e.collocationRiskCode&&(2===e.collocationType&&(b.value=b.value.filter((o=>o!==e.relatedRiskCode))),3===e.collocationType&&(b.value=b.value.filter((o=>o!==e.relatedRiskCode))))})),void(b.value=[...new Set(b.value)]);var o}},{default:r((()=>[k(u(e.riskName||e.productName),1)])),_:2},1032,["name","onClick"])))),128))])),_:1},8,["modelValue"])])):(i(),l(R,{key:1,title:`暂无关联${e.type===n(E).MAIN_RISK?"主":"附加"}险、请选择其他险种`},null,8,["title"]))])]})),_:1},8,["show"])}}}),[["__scopeId","data-v-9f30e43a"]]);const ae={class:"page-trial-wrap"},se=e({name:"trial"}),ie=e({...se,setup(e){const d=o(),u=w(),{productCode:p,orderNo:m,tenantId:f,proposalId:k,proposalInsuredId:R}=d.query,C=t({}),L=t({productList:[]}),I=t([]),y=t({}),h=t(),j=t(),g=t(),_=O({extInfo:{buttonCode:b.TRIAL_PREMIUM,pageCode:q.TRIAL_PREMIUM}});H();const x=t(),V=t(),Q=t(1),W=a((()=>Q.value===E.MAIN_RISK?"添加主险":"添加附加险")),X=t(!1),Y=()=>{K(L.value).then((({code:e,data:o})=>{if("10000"===e){const{productDetailResList:e,productFactor:t}=o;V.value=t,L.value=U(e);const a={};e.forEach((e=>{a[e.productCode]=e})),C.value=a}}))},Z=()=>{X.value=!1},ee=e=>{if(Q.value===E.MAIN_RISK){L.value.productList.push(...e);const o=e.map((e=>e.productCode));h.value.getProductDefaultValue(o)}else{const o=L.value.productList.find((e=>e.productCode===j.value)),t=e.map((e=>({riskCode:e,riskType:E.RIDER_RISK,mainRiskCode:y.value.riskCode}))),a=$(o.mergeRiskReqList,(e=>e.riskCode===y.value.riskCode)),s=G(o.mergeRiskReqList,(e=>e.mainRiskCode===y.value.riskCode));let i=a;-1!==s&&(i=s),o.mergeRiskReqList=[...o.mergeRiskReqList.slice(0,i+1),...t,...o.mergeRiskReqList.slice(i+1,o.mergeRiskReqList.length)],h.value.getRiderRiskDefaultValue(j.value,e,y.value.riskCode,o.mergeRiskReqList)}Y(),X.value=!1},oe=(e,o,t)=>{X.value=!0,Q.value=E.RIDER_RISK,I.value=t,y.value=o,j.value=e},se=e=>{X.value=!0,Q.value=E.MAIN_RISK,I.value=e},ie=(e,o,t)=>{C.value[e],t?(C.value[e].productPlanInsureVOList[0].insureProductRiskVOList=C.value[e].productPlanInsureVOList[0].insureProductRiskVOList.filter((e=>e.riskCode!==o)),L.value.productList=L.value.productList.map((t=>(t.productCode===e&&(t.mergeRiskReqList=t.mergeRiskReqList.filter((e=>e.riskCode!==o))),t)))):(L.value.productList=L.value.productList.filter((o=>o.productCode!==e)),Y())},le=()=>{h.value.onNext((async e=>{var o;const t=J(e),a=["id","relationToHolder","beneficiaryList","guardian","insuredBeneficiaryType"];m||Object.keys(null==(o=t.insuredList)?void 0:o[0]).reduce(((e,o)=>{var s,i,l,r;return!a.includes(o)&&(null==(i=null==(s=t.insuredList)?void 0:s[0])?void 0:i[o])&&(e[o]=null==(r=null==(l=t.insuredList)?void 0:l[0])?void 0:r[o]),e}),t.holder),t.extInfo&&(t.extInfo.iseeBizNo=g.value);const{code:s,data:i}=await M(t);"10000"===s&&u.push({path:N.questionNotice,query:{...d.query,orderNo:i}})}))};return T((()=>{m?A({orderNo:m,tenantId:f}).then((({code:e,data:o})=>{"10000"===e&&(x.value=o,_.value=o,L.value=F(o.insuredList[0].productList),Y())})):k?z({id:k,tenantId:f}).then((({code:e,data:o})=>{if("10000"===e){const{holder:e,insuredList:t}=o,a=(p||"").split(",");let s=[];const i=(t||[]).filter((e=>e.id===+R)).map((e=>({...e,relationToHolder:null,productList:e.productList.filter((e=>!!a.includes(e.productCode)&&(s=e.occupationCodeList,!0)))})));i[0].occupationCodeList=s,Object.assign(_.value,{renewFlag:"",holder:e,tenantId:f,proposalId:k,insuredList:i}),x.value=_.value,L.value=F(_.value.insuredList[0].productList),Y()}})):D({productCode:p,isTenant:!1}).then((({data:e,code:o})=>{var t,a;"10000"===o&&(C.value[`${p}`]=e,V.value=null==(a=null==(t=null==e?void 0:e.productPlanInsureVOList)?void 0:t[0])?void 0:a.productFactor,L.value=U([e]))}))})),s((()=>{setTimeout((async()=>{g.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,o)=>(i(),v("div",ae,[c(S,{ref_key:"trialRef",ref:h,"product-collection":n(C),"default-data":n(x),"product-factor":n(V),"product-risk-code-map":n(L),"is-trial":"","hide-benefit":"",onAddRisk:oe,onAddMainRisk:se,onDeleteRisk:ie},{trialBtn:r((({riskPremium:e})=>[c(B,{premium:null==e?void 0:e.initialPremium,onHandleClick:le},null,8,["premium"])])),_:1},8,["product-collection","default-data","product-factor","product-risk-code-map"]),n(X)?(i(),l(te,{key:0,type:n(Q),show:n(X),"insured-list":n(I),title:n(W),"current-product-code":n(j),"main-risk-code":n(y).riskCode,"select-list":n(L).productList,onCancel:Z,onConfirm:ee},null,8,["type","show","insured-list","title","current-product-code","main-risk-code","select-list"])):P("",!0)]))}});export{ie as default};
