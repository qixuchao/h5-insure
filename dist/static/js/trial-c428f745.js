import{ar as e,as as t,at as a,au as o,av as i,aw as r,ax as s,ay as l,az as u,aA as n,d,i as c,j as p,k as v,O as f,o as m,m as k,w as R,a as C,e as h,b as y,u as L,p as j,c as I,F as b,q as g,a8 as _,_ as w,T,aB as q,aC as P,aD as x,aE as S,aF as M,h as N,aG as V,f as A,s as O}from"./index-249cbd63.js";import{T as D}from"./index-f62a27f9.js";import{a as K,b as E,g as B,s as F,i as U,m as $}from"./trial-784b8cc5.js";import{_ as H}from"./index-bd39e722.js";import{S as z}from"./index-5a3a7ca4.js";import{R as G}from"./trial-372b2ffd.js";import{_ as J}from"./TrialButton-f870aec2.js";import{u as Q}from"./useOrder-b73fb8e3.js";import{B as W,a as X}from"./constants-4b08cf92.js";import{p as Y,a as Z}from"./utils-29baf450.js";import{c as ee,t as te,i as ae,g as oe,b as ie}from"./index-253aff1b.js";import{c as re}from"./cloneDeep-86ca90e6.js";import"./InsureInfos-05b62438.js";import"./index-de590a0b.js";import"./infoCollection-53f3b925.js";import"./index-2d77958b.js";import"./PolicyInfo-cecf9999.js";import"./lodash-300eb068.js";import"./questionnaire-42dcb602.js";import"./util-a5f2a746.js";import"./product-7bbf9c44.js";import"./constants-1cb62b73.js";import"./config-98e8d477.js";import"./utils-056f0425.js";import"./createProposal-e22ec3ee.js";import"./nextStep-90fa22cd.js";import"./core-aaca569f.js";import"./format-31cde443.js";import"./empty-ae586b6c.js";import"./index-e351b633.js";import"./utils-94226c32.js";function se(t){var a=function(t){return t?1/0===(t=e(t))||-1/0===t?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}(t),o=a%1;return a==a?o?a-o:a:0}function le(e,t,a,o){for(var i=e.length,r=a+(o?1:-1);o?r--:++r<i;)if(t(e[r],r,e))return r;return-1}function ue(e){return e==e&&!o(e)}function ne(e,t){return function(a){return null!=a&&(a[e]===t&&(void 0!==t||e in Object(a)))}}function de(e){var o=function(e){for(var t=i(e),a=t.length;a--;){var o=t[a],r=e[o];t[a]=[o,r,ue(r)]}return t}(e);return 1==o.length&&o[0][2]?ne(o[0][0],o[0][1]):function(i){return i===e||function(e,o,i,r){var s=i.length,l=s,u=!r;if(null==e)return!l;for(e=Object(e);s--;){var n=i[s];if(u&&n[2]?n[1]!==e[n[0]]:!(n[0]in e))return!1}for(;++s<l;){var d=(n=i[s])[0],c=e[d],p=n[1];if(u&&n[2]){if(void 0===c&&!(d in e))return!1}else{var v=new t;if(r)var f=r(c,p,d,e,o,v);if(!(void 0===f?a(p,c,3,r,v):f))return!1}}return!0}(i,e,o)}}function ce(e,t){return null!=e&&t in Object(e)}function pe(e,t){return null!=e&&function(e,t,a){for(var o=-1,i=(t=ee(t,e)).length,n=!1;++o<i;){var d=te(t[o]);if(!(n=null!=e&&a(e,d)))break;e=e[d]}return n||++o!=i?n:!!(i=null==e?0:e.length)&&r(i)&&s(d,i)&&(l(e)||u(e))}(e,t,ce)}function ve(e){return ae(e)?(t=te(e),function(e){return null==e?void 0:e[t]}):function(e){return function(t){return ie(t,e)}}(e);var t}function fe(e){return"function"==typeof e?e:null==e?n:"object"==typeof e?l(e)?(t=e[0],o=e[1],ae(t)&&ue(o)?ne(te(t),o):function(e){var i=oe(e,t);return void 0===i&&i===o?pe(e,t):a(o,i,3)}):de(e):ve(e);var t,o}var me=Math.max;var ke=Math.max,Re=Math.min;const Ce={class:"popup-container"},he={class:"popup-header"},ye={class:"title"},Le=(e=>(S("data-v-0a46ec37"),e=e(),M(),e))((()=>C("p",{class:"tip"},"已为您挑选出以下险种",-1))),je={class:"search"},Ie={key:0,class:"risk-list"},be=d({name:"riskSelect"});var ge=w(d({...be,props:{type:{default:2},show:{type:Boolean,default:!1},title:{},insuredList:{default:()=>[]},mainRiskCode:{default:""},selectList:{default:()=>[]},currentProductCode:{default:""}},emits:["cancel","confirm"],setup(e,{emit:t}){const a=e,o=c(),{insurerCode:i}=o.query,r=p([]),s=p([]),l=p([]),u=p(),n=v((()=>a.show)),d=()=>{t("cancel")},w=()=>{var e;if(!(null==(e=r.value)?void 0:e.length))return void T(`暂未添加任何${a.type===G.MAIN_RISK?"主":"附加"}险`);let o=[];o=a.type===G.RIDER_RISK?r.value:s.value.filter((e=>r.value.includes(e.productCode))).map((e=>({productCode:e.productCode,mergeRiskReqList:(e.mainRiskCollocationList||[]).map((e=>({riskCode:e.collocationRiskCode,riskType:e.mainRiskCode?2:1,mainRiskCode:e.mainRiskCode})))}))),t("confirm",o)},S=async()=>{var e;const t={insuredList:a.insuredList,mainRiskCode:a.mainRiskCode,insurerCode:i,productCategory:"",keyword:u.value,selectProductCodes:[],selectRiskCodes:[],filterFlag:(null==(e=a.selectList)?void 0:e.length)?1:2};if(t.selectProductCodes=a.selectList.map((e=>(e.productCode===a.currentProductCode&&t.selectRiskCodes.push(...e.mergeRiskReqList.map((e=>e.riskCode))),e.productCode))),a.type===G.MAIN_RISK){const{code:e,data:a}=await K(t);"10000"===e&&(s.value=a)}else{const{code:e,data:a}=await E(t);"10000"===e&&(s.value=a.riskInfoList,l.value=a.collocationInfoResList)}};return f((()=>{S()})),(e,t)=>{const o=z,i=q,c=P,p=H,v=x;return m(),k(v,{show:L(n),"onUpdate:show":t[2]||(t[2]=e=>j(n)?n.value=e:null),class:"popup-risk-select",closeable:!1},{default:R((()=>{var n;return[C("div",Ce,[C("div",he,[C("span",{class:"clear-all",onClick:d}," 取消 "),C("span",ye,h(e.title),1),C("span",{class:"close",onClick:w},"确认")]),Le,C("div",je,[y(o,{modelValue:L(u),"onUpdate:modelValue":t[0]||(t[0]=e=>j(u)?u.value=e:null),shape:"round",placeholder:"请输入产品名称进行搜索","clear-trigger":"always","show-action":"",clearable:"",onSearch:S},null,8,["modelValue"])]),(null==(n=L(s))?void 0:n.length)?(m(),I("div",Ie,[y(c,{modelValue:L(r),"onUpdate:modelValue":t[1]||(t[1]=e=>j(r)?r.value=e:null)},{default:R((()=>[(m(!0),I(b,null,g(L(s),(e=>(m(),k(i,{key:e.riskCode||e.productCode,name:e.riskCode||e.productCode,onClick:()=>{return t=e.riskCode,a.type===G.RIDER_RISK&&(l.value||[]).forEach((e=>{r.value.includes(t)?t===e.relatedRiskCode?(2===e.collocationType&&r.value.push(e.collocationRiskCode),3===e.collocationType&&(r.value.push(t),r.value=r.value.filter((t=>t!==e.collocationRiskCode)))):t===e.collocationRiskCode&&(2===e.collocationType&&r.value.push(e.relatedRiskCode),3===e.collocationType&&(r.value=r.value.filter((t=>t!==e.relatedRiskCode)))):t===e.relatedRiskCode?(2===e.collocationType&&(r.value=r.value.filter((t=>t!==e.collocationRiskCode))),3===e.collocationType&&(r.value.push(t),r.value=r.value.filter((t=>t!==e.collocationRiskCode)))):t===e.collocationRiskCode&&(2===e.collocationType&&(r.value=r.value.filter((t=>t!==e.relatedRiskCode))),3===e.collocationType&&(r.value=r.value.filter((t=>t!==e.relatedRiskCode))))})),void(r.value=[...new Set(r.value)]);var t}},{default:R((()=>[_(h(e.riskName||e.productName),1)])),_:2},1032,["name","onClick"])))),128))])),_:1},8,["modelValue"])])):(m(),k(p,{key:1,title:`暂无关联${e.type===L(G).MAIN_RISK?"主":"附加"}险、请选择其他险种`},null,8,["title"]))])]})),_:1},8,["show"])}}}),[["__scopeId","data-v-0a46ec37"]]);const _e={class:"page-trial-wrap"},we=d({name:"trial"}),Te=d({...we,setup(e){const t=c(),a=N(),{productCode:o,orderNo:i,tenantId:r}=t.query,s=p({}),l=p({productList:[]}),u=p([]),n=p({}),d=p(),f=p(),C=Q({extInfo:{templateId:201,buttonCode:W.TRIAL_PREMIUM,pageCode:X.TRIAL_PREMIUM}}),h=p(),j=p(),b=p(1),g=v((()=>b.value===G.MAIN_RISK?"添加主险":"添加附加险")),_=p(!1),w=()=>{$(l.value).then((({code:e,data:t})=>{if("10000"===e){const{productDetailResList:e,productFactor:a}=t;j.value=a,l.value=Z(e);const o={};e.forEach((e=>{o[e.productCode]=e})),s.value=o}}))},T=()=>{_.value=!1},q=e=>{if(b.value===G.MAIN_RISK){l.value.productList.push(...e),console.log("selectCodeList",e);const t=e.map((e=>e.productCode));d.value.getProductDefaultValue(t)}else{const t=l.value.productList.find((e=>e.productCode===f.value)),a=e.map((e=>({riskCode:e,riskType:G.RIDER_RISK,mainRiskCode:n.value.riskCode}))),o=function(e,t,a){var o=null==e?0:e.length;if(!o)return-1;var i=null==a?0:se(a);return i<0&&(i=me(o+i,0)),le(e,fe(t),i)}(t.mergeRiskReqList,(e=>e.riskCode===n.value.riskCode)),i=function(e,t,a){var o=null==e?0:e.length;if(!o)return-1;var i=o-1;return void 0!==a&&(i=se(a),i=a<0?ke(o+i,0):Re(i,o-1)),le(e,fe(t),i,!0)}(t.mergeRiskReqList,(e=>e.mainRiskCode===n.value.riskCode));let r=o;-1!==i&&(r=i),t.mergeRiskReqList=[...t.mergeRiskReqList.slice(0,r+1),...a,...t.mergeRiskReqList.slice(r+1,t.mergeRiskReqList.length)],d.value.getRiderRiskDefaultValue(f.value,e,n.value.riskCode)}w(),_.value=!1},P=(e,t,a)=>{_.value=!0,b.value=G.RIDER_RISK,u.value=a,n.value=t,f.value=e},x=e=>{_.value=!0,b.value=G.MAIN_RISK,u.value=e},S=(e,t,a)=>{s.value[e],a?(s.value[e].productPlanInsureVOList[0].insureProductRiskVOList=s.value[e].productPlanInsureVOList[0].insureProductRiskVOList.filter((e=>e.riskCode!==t)),l.value.productList=l.value.productList.map((a=>(a.productCode===e&&(a.mergeRiskReqList=a.mergeRiskReqList.filter((e=>e.riskCode!==t))),a)))):(l.value.productList=l.value.productList.filter((t=>t.productCode!==e)),w())},M=()=>{d.value.onNext((async e=>{var o;const r=re(e),s=["id","relationToHolder","beneficiaryList","guardian","insuredBeneficiaryType"];i||Object.keys(null==(o=r.insuredList)?void 0:o[0]).reduce(((e,t)=>{var a,o,i,l;return!s.includes(t)&&(null==(o=null==(a=r.insuredList)?void 0:a[0])?void 0:o[t])&&(e[t]=null==(l=null==(i=r.insuredList)?void 0:i[0])?void 0:l[t]),e}),r.holder);const{code:l,data:u}=await F(r);"10000"===l&&a.push({path:O.questionNotice,query:{...t.query,orderNo:u}})}))};return V((()=>{i?B({orderNo:i,tenantId:r}).then((({code:e,data:t})=>{"10000"===e&&(h.value=t,C.value=t,l.value=Y(t.insuredList[0].productList),w())})):U({productCode:o,isTenant:!1}).then((({data:e,code:t})=>{var a,i;"10000"===t&&(s.value[`${o}`]=e,j.value=null==(i=null==(a=null==e?void 0:e.productPlanInsureVOList)?void 0:a[0])?void 0:i.productFactor,l.value=Z([e]))}))})),(e,t)=>(m(),I("div",_e,[y(D,{ref_key:"trialRef",ref:d,"product-collection":L(s),"default-data":L(h),"product-factor":L(j),"product-risk-code-map":L(l),"is-trial":"","hide-benefit":"",onAddRisk:P,onAddMainRisk:x,onDeleteRisk:S},{trialBtn:R((({riskPremium:e})=>[y(J,{premium:null==e?void 0:e.initialPremium,onHandleClick:M},null,8,["premium"])])),_:1},8,["product-collection","default-data","product-factor","product-risk-code-map"]),L(_)?(m(),k(ge,{key:0,type:L(b),show:L(_),"insured-list":L(u),title:L(g),"current-product-code":L(f),"main-risk-code":L(n).riskCode,"select-list":L(l).productList,onCancel:T,onConfirm:q},null,8,["type","show","insured-list","title","current-product-code","main-risk-code","select-list"])):A("",!0)]))}});export{Te as default};
