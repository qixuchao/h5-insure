import{ap as e,aq as t,ar as a,as as o,at as r,au as i,av as s,aw as l,ax as u,ay as n,d as c,i as d,j as p,k as v,O as f,o as m,m as k,w as R,a as C,e as h,b as y,u as I,p as L,c as j,F as g,q as b,a8 as _,_ as q,T as w,az as P,aA as T,aB as x,aC as S,aD as M,h as N,aE as V,f as A,s as D}from"./index-e11600e6.js";import{T as K}from"./index-a0de9b19.js";import{a as O,b as E,g as B,s as U,i as F,m as $}from"./trial-3a916284.js";import{_ as z}from"./index-91b31799.js";import{S as H}from"./index-294ddeeb.js";import{R as G}from"./trial-3fff3e7b.js";import{_ as J}from"./TrialButton-a8bd746c.js";import{u as Q}from"./useOrder-fab59a9b.js";import{B as W,a as X}from"./constants-62d1c4af.js";import{a as Y}from"./utils-3b0f6fec.js";import{c as Z,t as ee,i as te,g as ae,b as oe}from"./index-3eb28c75.js";import"./cloneDeep-e067f4d7.js";import"./InsureInfos-6c7148a3.js";import"./index-de590a0b.js";import"./infoCollection-35c63756.js";import"./index-d11d1337.js";import"./PolicyInfo-ccb8cd97.js";import"./lodash-feab9bf5.js";import"./questionnaire-62331097.js";import"./util-7a6c56d1.js";import"./product-7bbf9c44.js";import"./constants-a4bc0aae.js";import"./config-98e8d477.js";import"./utils-accc34ec.js";import"./createProposal-844ad7ad.js";import"./nextStep-8058bfd6.js";import"./core-334f9115.js";import"./empty-ae586b6c.js";import"./index-795c5afd.js";import"./utils-2e89dca3.js";function re(t){var a=function(t){return t?1/0===(t=e(t))||-1/0===t?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}(t),o=a%1;return a==a?o?a-o:a:0}function ie(e,t,a,o){for(var r=e.length,i=a+(o?1:-1);o?i--:++i<r;)if(t(e[i],i,e))return i;return-1}function se(e){return e==e&&!o(e)}function le(e,t){return function(a){return null!=a&&(a[e]===t&&(void 0!==t||e in Object(a)))}}function ue(e){var o=function(e){for(var t=r(e),a=t.length;a--;){var o=t[a],i=e[o];t[a]=[o,i,se(i)]}return t}(e);return 1==o.length&&o[0][2]?le(o[0][0],o[0][1]):function(r){return r===e||function(e,o,r,i){var s=r.length,l=s,u=!i;if(null==e)return!l;for(e=Object(e);s--;){var n=r[s];if(u&&n[2]?n[1]!==e[n[0]]:!(n[0]in e))return!1}for(;++s<l;){var c=(n=r[s])[0],d=e[c],p=n[1];if(u&&n[2]){if(void 0===d&&!(c in e))return!1}else{var v=new t;if(i)var f=i(d,p,c,e,o,v);if(!(void 0===f?a(p,d,3,i,v):f))return!1}}return!0}(r,e,o)}}function ne(e,t){return null!=e&&t in Object(e)}function ce(e,t){return null!=e&&function(e,t,a){for(var o=-1,r=(t=Z(t,e)).length,n=!1;++o<r;){var c=ee(t[o]);if(!(n=null!=e&&a(e,c)))break;e=e[c]}return n||++o!=r?n:!!(r=null==e?0:e.length)&&i(r)&&s(c,r)&&(l(e)||u(e))}(e,t,ne)}function de(e){return te(e)?(t=ee(e),function(e){return null==e?void 0:e[t]}):function(e){return function(t){return oe(t,e)}}(e);var t}function pe(e){return"function"==typeof e?e:null==e?n:"object"==typeof e?l(e)?(t=e[0],o=e[1],te(t)&&se(o)?le(ee(t),o):function(e){var r=ae(e,t);return void 0===r&&r===o?ce(e,t):a(o,r,3)}):ue(e):de(e);var t,o}var ve=Math.max;var fe=Math.max,me=Math.min;const ke={class:"popup-container"},Re={class:"popup-header"},Ce={class:"title"},he=(e=>(S("data-v-0e97ccde"),e=e(),M(),e))((()=>C("p",{class:"tip"},"已为您挑选出以下险种",-1))),ye={class:"search"},Ie={key:0,class:"risk-list"},Le=c({name:"riskSelect"});var je=q(c({...Le,props:{type:{default:2},show:{type:Boolean,default:!1},title:{},insuredList:{default:()=>[]},mainRiskCode:{default:""},selectList:{default:()=>[]},currentProductCode:{default:""}},emits:["cancel","confirm"],setup(e,{emit:t}){const a=e,o=d(),{insurerCode:r}=o.query,i=p([]),s=p([]),l=p([]),u=p(),n=v((()=>a.show)),c=()=>{t("cancel")},q=()=>{var e;if(!(null==(e=i.value)?void 0:e.length))return void w(`暂未添加任何${a.type===G.MAIN_RISK?"主":"附加"}险`);let o=[];o=a.type===G.RIDER_RISK?i.value:s.value.filter((e=>i.value.includes(e.productCode))).map((e=>({productCode:e.productCode,mergeRiskReqList:(e.mainRiskCollocationList||[]).map((e=>({riskCode:e.collocationRiskCode,riskType:e.mainRiskCode?2:1,mainRiskCode:e.mainRiskCode})))}))),t("confirm",o)},S=async()=>{var e;const t={insuredList:a.insuredList,mainRiskCode:a.mainRiskCode,insurerCode:r,productCategory:"",keyword:u.value,selectProductCodes:[],selectRiskCodes:[],filterFlag:(null==(e=a.selectList)?void 0:e.length)?1:2};if(t.selectProductCodes=a.selectList.map((e=>(e.productCode===a.currentProductCode&&t.selectRiskCodes.push(...e.mergeRiskReqList.map((e=>e.riskCode))),e.productCode))),a.type===G.MAIN_RISK){const{code:e,data:a}=await O(t);"10000"===e&&(s.value=a)}else{const{code:e,data:a}=await E(t);"10000"===e&&(s.value=a.riskInfoList,l.value=a.collocationInfoResList)}};return f((()=>{S()})),(e,t)=>{const o=H,r=P,d=T,p=z,v=x;return m(),k(v,{show:I(n),"onUpdate:show":t[2]||(t[2]=e=>L(n)?n.value=e:null),class:"popup-risk-select",closeable:!1},{default:R((()=>{var n;return[C("div",ke,[C("div",Re,[C("span",{class:"clear-all",onClick:c}," 取消 "),C("span",Ce,h(e.title),1),C("span",{class:"close",onClick:q},"确认")]),he,C("div",ye,[y(o,{modelValue:I(u),"onUpdate:modelValue":t[0]||(t[0]=e=>L(u)?u.value=e:null),shape:"round",placeholder:"请输入产品名称进行搜索","clear-trigger":"always","show-action":"",clearable:"",onSearch:S},null,8,["modelValue"])]),(null==(n=I(s))?void 0:n.length)?(m(),j("div",Ie,[y(d,{modelValue:I(i),"onUpdate:modelValue":t[1]||(t[1]=e=>L(i)?i.value=e:null)},{default:R((()=>[(m(!0),j(g,null,b(I(s),(e=>(m(),k(r,{key:e.riskCode||e.productCode,name:e.riskCode||e.productCode,onClick:()=>{return t=e.riskCode,a.type===G.RIDER_RISK&&l.value.forEach((e=>{i.value.includes(t)?t===e.relatedRiskCode?(2===e.collocationType&&i.value.push(e.collocationRiskCode),3===e.collocationType&&(i.value.push(t),i.value=i.value.filter((t=>t!==e.collocationRiskCode)))):t===e.collocationRiskCode&&(2===e.collocationType&&i.value.push(e.relatedRiskCode),3===e.collocationType&&(i.value=i.value.filter((t=>t!==e.relatedRiskCode)))):t===e.relatedRiskCode?(2===e.collocationType&&(i.value=i.value.filter((t=>t!==e.collocationRiskCode))),3===e.collocationType&&(i.value.push(t),i.value=i.value.filter((t=>t!==e.collocationRiskCode)))):t===e.collocationRiskCode&&(2===e.collocationType&&(i.value=i.value.filter((t=>t!==e.relatedRiskCode))),3===e.collocationType&&(i.value=i.value.filter((t=>t!==e.relatedRiskCode))))})),void(i.value=[...new Set(i.value)]);var t}},{default:R((()=>[_(h(e.riskName||e.productName),1)])),_:2},1032,["name","onClick"])))),128))])),_:1},8,["modelValue"])])):(m(),k(p,{key:1,title:`暂无关联${e.type===I(G).MAIN_RISK?"主":"附加"}险、请选择其他险种`},null,8,["title"]))])]})),_:1},8,["show"])}}}),[["__scopeId","data-v-0e97ccde"]]);const ge={class:"page-trial-wrap"},be=c({name:"trial"}),_e=c({...be,setup(e){const t=d(),a=N(),{productCode:o,orderNo:r,tenantId:i}=t.query,s=p({}),l=p({productList:[]}),u=p([]),n=p({}),c=p(),f=p(),C=Q({extInfo:{templateId:201,buttonCode:W.TRIAL_PREMIUM,pageCode:X.TRIAL_PREMIUM}}),h=p(),L=p(1),g=v((()=>L.value===G.MAIN_RISK?"添加主险":"添加附加险")),b=p(!1),_=()=>{b.value=!1},q=e=>{if(L.value===G.MAIN_RISK){l.value.productList.push(...e),console.log("selectCodeList",e);const t=e.map((e=>e.productCode));c.value.getProductDefaultValue(t)}else{const t=l.value.productList.find((e=>e.productCode===f.value)),a=e.map((e=>({riskCode:e,riskType:G.RIDER_RISK,mainRiskCode:n.value.riskCode}))),o=function(e,t,a){var o=null==e?0:e.length;if(!o)return-1;var r=null==a?0:re(a);return r<0&&(r=ve(o+r,0)),ie(e,pe(t),r)}(t.mergeRiskReqList,(e=>e.riskCode===n.value.riskCode)),r=function(e,t,a){var o=null==e?0:e.length;if(!o)return-1;var r=o-1;return void 0!==a&&(r=re(a),r=a<0?fe(o+r,0):me(r,o-1)),ie(e,pe(t),r,!0)}(t.mergeRiskReqList,(e=>e.mainRiskCode===n.value.riskCode));let i=o;-1!==r&&(i=r),t.mergeRiskReqList=[...t.mergeRiskReqList.slice(0,i+1),...a,...t.mergeRiskReqList.slice(i+1,t.mergeRiskReqList.length)],c.value.getRiderRiskDefaultValue(f.value,e,n.value.riskCode)}$(l.value).then((({code:e,data:t})=>{if("10000"===e){const{productDetailResList:e,productFactor:a}=t;h.value=a,l.value=Y(e);const o={};e.forEach((e=>{o[e.productCode]=e})),s.value=o}})),b.value=!1},w=(e,t,a)=>{b.value=!0,L.value=G.RIDER_RISK,u.value=a,n.value=t,f.value=e},P=e=>{b.value=!0,L.value=G.MAIN_RISK,u.value=e},T=(e,t,a)=>{s.value[e],a?(s.value[e].productPlanInsureVOList[0].insureProductRiskVOList=s.value[e].productPlanInsureVOList[0].insureProductRiskVOList.filter((e=>e.riskCode!==t)),l.value.productList=l.value.productList.map((a=>(a.productCode===e&&(a.mergeRiskReqList=a.mergeRiskReqList.filter((e=>e.riskCode!==t))),a)))):(delete s.value[e],l.value.productList=l.value.productList.filter((t=>t.productCode!==e)))},x=()=>{c.value.onNext((async e=>{const{code:o,data:r}=await U(e);"10000"===o&&a.push({path:D.questionNotice,query:{...t.query,orderNo:r}})}))};return V((()=>{F({productCode:o,isTenant:!1}).then((({data:e,code:t})=>{var a,r;"10000"===t&&(s.value[`${o}`]=e,h.value=null==(r=null==(a=null==e?void 0:e.productPlanInsureVOList)?void 0:a[0])?void 0:r.productFactor,l.value=Y([e]))})),r&&B({orderNo:r,tenantId:i}).then((({code:e,data:t})=>{"10000"===e&&(C.value=t)}))})),(e,t)=>(m(),j("div",ge,[y(K,{ref_key:"trialRef",ref:c,"product-collection":I(s),"default-value":I(C),"product-factor":I(h),"product-risk-code-map":I(l),"is-trial":"","hide-benefit":"",onAddRisk:w,onAddMainRisk:P,onDeleteRisk:T},{trialBtn:R((({riskPremium:e})=>[y(J,{premium:e.initialPremium,onHandleClick:x},null,8,["premium"])])),_:1},8,["product-collection","default-value","product-factor","product-risk-code-map"]),I(b)?(m(),k(je,{key:0,type:I(L),show:I(b),"insured-list":I(u),title:I(g),"current-product-code":I(f),"main-risk-code":I(n).riskCode,"select-list":I(l).productList,onCancel:_,onConfirm:q},null,8,["type","show","insured-list","title","current-product-code","main-risk-code","select-list"])):A("",!0)]))}});export{_e as default};
