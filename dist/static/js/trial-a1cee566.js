import{ap as e,aq as t,ar as a,as as r,at as o,au as s,av as i,aw as u,ax as l,ay as n,d,i as c,j as p,k as f,O as m,o as v,m as k,w as R,a as C,e as h,b as j,u as L,p as g,c as I,F as b,q as y,a8 as _,_ as q,T as w,az as P,aA as x,aB as M,aC as N,aD as S,h as V,aE as A,f as O,s as D}from"./index-f312854e.js";import{T as K}from"./index-1c1b789a.js";import{a as T,b as E,g as B,s as U,i as F,m as $}from"./trial-3de94e4e.js";import{_ as z}from"./index-9ce7013a.js";import{S as H}from"./index-3fc142ef.js";import{R as G}from"./trial-283da3e3.js";import{_ as J}from"./TrialButton-18ada99e.js";import{u as Q}from"./useOrder-504137da.js";import{B as W,a as X}from"./constants-fe95ef6f.js";import{a as Y}from"./utils-95189603.js";import{c as Z,t as ee,i as te,g as ae,b as re}from"./index-49e400d6.js";import"./cloneDeep-60bcdbd7.js";import"./InsureInfos-ee19ce81.js";import"./index-de590a0b.js";import"./infoCollection-030d1ab5.js";import"./index-cf19b27f.js";import"./PolicyInfo-378020f0.js";import"./lodash-18265462.js";import"./questionnaire-62331097.js";import"./util-0d61b3cb.js";import"./product-7bbf9c44.js";import"./constants-eb24f7a1.js";import"./config-98e8d477.js";import"./utils-22c6cea6.js";import"./createProposal-9881c85a.js";import"./nextStep-fc39f019.js";import"./core-f012154e.js";import"./empty-ae586b6c.js";import"./index-d30a1a9b.js";import"./utils-7f13c114.js";function oe(t){var a=function(t){return t?1/0===(t=e(t))||-1/0===t?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}(t),r=a%1;return a==a?r?a-r:a:0}function se(e,t,a,r){for(var o=e.length,s=a+(r?1:-1);r?s--:++s<o;)if(t(e[s],s,e))return s;return-1}function ie(e){return e==e&&!r(e)}function ue(e,t){return function(a){return null!=a&&(a[e]===t&&(void 0!==t||e in Object(a)))}}function le(e){var r=function(e){for(var t=o(e),a=t.length;a--;){var r=t[a],s=e[r];t[a]=[r,s,ie(s)]}return t}(e);return 1==r.length&&r[0][2]?ue(r[0][0],r[0][1]):function(o){return o===e||function(e,r,o,s){var i=o.length,u=i,l=!s;if(null==e)return!u;for(e=Object(e);i--;){var n=o[i];if(l&&n[2]?n[1]!==e[n[0]]:!(n[0]in e))return!1}for(;++i<u;){var d=(n=o[i])[0],c=e[d],p=n[1];if(l&&n[2]){if(void 0===c&&!(d in e))return!1}else{var f=new t;if(s)var m=s(c,p,d,e,r,f);if(!(void 0===m?a(p,c,3,s,f):m))return!1}}return!0}(o,e,r)}}function ne(e,t){return null!=e&&t in Object(e)}function de(e,t){return null!=e&&function(e,t,a){for(var r=-1,o=(t=Z(t,e)).length,n=!1;++r<o;){var d=ee(t[r]);if(!(n=null!=e&&a(e,d)))break;e=e[d]}return n||++r!=o?n:!!(o=null==e?0:e.length)&&s(o)&&i(d,o)&&(u(e)||l(e))}(e,t,ne)}function ce(e){return te(e)?(t=ee(e),function(e){return null==e?void 0:e[t]}):function(e){return function(t){return re(t,e)}}(e);var t}function pe(e){return"function"==typeof e?e:null==e?n:"object"==typeof e?u(e)?(t=e[0],r=e[1],te(t)&&ie(r)?ue(ee(t),r):function(e){var o=ae(e,t);return void 0===o&&o===r?de(e,t):a(r,o,3)}):le(e):ce(e);var t,r}var fe=Math.max;var me=Math.max,ve=Math.min;const ke={class:"popup-container"},Re={class:"popup-header"},Ce={class:"title"},he=(e=>(N("data-v-b24d0db0"),e=e(),S(),e))((()=>C("p",{class:"tip"},"已为您挑选出以下险种",-1))),je={class:"search"},Le={key:0,class:"risk-list"},ge=d({name:"riskSelect"});var Ie=q(d({...ge,props:{type:{default:2},show:{type:Boolean,default:!1},title:{},insuredList:{default:()=>[]},mainRiskCode:{default:""},selectList:{default:()=>[]},currentProductCode:{default:""}},emits:["cancel","confirm"],setup(e,{emit:t}){const a=e,r=c(),{insurerCode:o}=r.query,s=p([]),i=p([]),u=p(),l=f((()=>a.show)),n=()=>{t("cancel")},d=()=>{var e;if(!(null==(e=s.value)?void 0:e.length))return void w(`暂未添加任何${a.type===G.MAIN_RISK?"主":"附加"}险`);let r=[];r=a.type===G.RIDER_RISK?s.value:i.value.filter((e=>s.value.includes(e.productCode))).map((e=>({productCode:e.productCode,mergeRiskReqList:(e.mainRiskCollocationList||[]).map((e=>({riskCode:e.collocationRiskCode,riskType:e.mainRiskCode?2:1,mainRiskCode:e.mainRiskCode})))}))),t("confirm",r)},q=async()=>{var e;const t={insuredList:a.insuredList,mainRiskCode:a.mainRiskCode,insurerCode:o,productCategory:"",keyword:u.value,selectProductCodes:[],selectRiskCodes:[],filterFlag:(null==(e=a.selectList)?void 0:e.length)?1:2};if(t.selectProductCodes=a.selectList.map((e=>(e.productCode===a.currentProductCode&&t.selectRiskCodes.push(...e.mergeRiskReqList.map((e=>e.riskCode))),e.productCode))),a.type===G.MAIN_RISK){const{code:e,data:a}=await T(t);"10000"===e&&(i.value=a)}else{const{code:e,data:a}=await E(t);"10000"===e&&(i.value=a.riskInfoList)}};return m((()=>{q()})),(e,t)=>{const a=H,r=P,o=x,c=z,p=M;return v(),k(p,{show:L(l),"onUpdate:show":t[2]||(t[2]=e=>g(l)?l.value=e:null),class:"popup-risk-select",closeable:!1},{default:R((()=>{var l;return[C("div",ke,[C("div",Re,[C("span",{class:"clear-all",onClick:n}," 取消 "),C("span",Ce,h(e.title),1),C("span",{class:"close",onClick:d},"确认")]),he,C("div",je,[j(a,{modelValue:L(u),"onUpdate:modelValue":t[0]||(t[0]=e=>g(u)?u.value=e:null),shape:"round",placeholder:"请输入产品名称进行搜索","clear-trigger":"always","show-action":"",clearable:"",onSearch:q},null,8,["modelValue"])]),(null==(l=L(i))?void 0:l.length)?(v(),I("div",Le,[j(o,{modelValue:L(s),"onUpdate:modelValue":t[1]||(t[1]=e=>g(s)?s.value=e:null)},{default:R((()=>[(v(!0),I(b,null,y(L(i),(e=>(v(),k(r,{key:e.riskCode||e.productCode,name:e.riskCode||e.productCode},{default:R((()=>[_(h(e.riskName||e.productName),1)])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])):(v(),k(c,{key:1,title:`暂无关联${e.type===L(G).MAIN_RISK?"主":"附加"}险、请选择其他险种`},null,8,["title"]))])]})),_:1},8,["show"])}}}),[["__scopeId","data-v-b24d0db0"]]);const be={class:"page-trial-wrap"},ye=d({name:"trial"}),_e=d({...ye,setup(e){const t=c(),a=V(),{productCode:r,orderNo:o,tenantId:s}=t.query,i=p({}),u=p({productList:[]}),l=p([]),n=p({}),d=p(),m=p(),C=Q({extInfo:{templateId:201,buttonCode:W.TRIAL_PREMIUM,pageCode:X.TRIAL_PREMIUM}}),h=p(),g=p(1),b=f((()=>g.value===G.MAIN_RISK?"添加主险":"添加附加险")),y=p(!1),_=()=>{y.value=!1},q=e=>{if(g.value===G.MAIN_RISK){u.value.productList.push(...e),console.log("selectCodeList",e);const t=e.map((e=>e.productCode));d.value.getProductDefaultValue(t)}else{const t=u.value.productList.find((e=>e.productCode===m.value)),a=e.map((e=>({riskCode:e,riskType:G.RIDER_RISK,mainRiskCode:n.value.riskCode}))),r=function(e,t,a){var r=null==e?0:e.length;if(!r)return-1;var o=null==a?0:oe(a);return o<0&&(o=fe(r+o,0)),se(e,pe(t),o)}(t.mergeRiskReqList,(e=>e.riskCode===n.value.riskCode)),o=function(e,t,a){var r=null==e?0:e.length;if(!r)return-1;var o=r-1;return void 0!==a&&(o=oe(a),o=a<0?me(r+o,0):ve(o,r-1)),se(e,pe(t),o,!0)}(t.mergeRiskReqList,(e=>e.mainRiskCode===n.value.riskCode));let s=r;-1!==o&&(s=o),t.mergeRiskReqList=[...t.mergeRiskReqList.slice(0,s+1),...a,...t.mergeRiskReqList.slice(s+1,t.mergeRiskReqList.length)],d.value.getRiderRiskDefaultValue(m.value,e,n.value.riskCode)}$(u.value).then((({code:e,data:t})=>{if("10000"===e){const{productDetailResList:e,productFactor:a}=t;h.value=a,u.value=Y(e);const r={};e.forEach((e=>{r[e.productCode]=e})),i.value=r}})),y.value=!1},w=(e,t,a)=>{y.value=!0,g.value=G.RIDER_RISK,l.value=a,n.value=t,m.value=e},P=e=>{y.value=!0,g.value=G.MAIN_RISK,l.value=e},x=(e,t,a)=>{i.value[e],a?(i.value[e].productPlanInsureVOList[0].insureProductRiskVOList=i.value[e].productPlanInsureVOList[0].insureProductRiskVOList.filter((e=>e.riskCode!==t)),u.value.productList=u.value.productList.map((a=>(a.productCode===e&&(a.mergeRiskReqList=a.mergeRiskReqList.filter((e=>e.riskCode!==t))),a)))):(delete i.value[e],u.value.productList=u.value.productList.filter((t=>t.productCode!==e)))},M=()=>{d.value.onNext((async e=>{const{code:r,data:o}=await U(e);"10000"===r&&a.push({path:D.questionNotice,query:{...t.query,orderNo:o}})}))};return A((()=>{F({productCode:r,isTenant:!1}).then((({data:e,code:t})=>{var a,o;"10000"===t&&(i.value[`${r}`]=e,h.value=null==(o=null==(a=null==e?void 0:e.productPlanInsureVOList)?void 0:a[0])?void 0:o.productFactor,u.value=Y([e]))})),o&&B({orderNo:o,tenantId:s}).then((({code:e,data:t})=>{"10000"===e&&(C.value=t)}))})),(e,t)=>(v(),I("div",be,[j(K,{ref_key:"trialRef",ref:d,"product-collection":L(i),"default-value":L(C),"product-factor":L(h),"product-risk-code-map":L(u),"is-trial":"","hide-benefit":"",onAddRisk:w,onAddMainRisk:P,onDeleteRisk:x},{trialBtn:R((({riskPremium:e})=>[j(J,{premium:e.initialPremium,onHandleClick:M},null,8,["premium"])])),_:1},8,["product-collection","default-value","product-factor","product-risk-code-map"]),L(y)?(v(),k(Ie,{key:0,type:L(g),show:L(y),"insured-list":L(l),title:L(b),"current-product-code":L(m),"main-risk-code":L(n).riskCode,"select-list":L(u).productList,onCancel:_,onConfirm:q},null,8,["type","show","insured-list","title","current-product-code","main-risk-code","select-list"])):O("",!0)]))}});export{_e as default};
