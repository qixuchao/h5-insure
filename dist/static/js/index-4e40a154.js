import{dj as e,d as s,o as a,c as t,b as o,a8 as r,e as c,f as d,_ as l,bt as n,k as i,a0 as u,u as p,p as h,g as P}from"./index-8ccea0ec.js";import{S as m}from"./index-158d5796.js";const f=e({id:"createProposal",state:()=>({proposalInfo:{},trialData:[],excludeProduct:[],excludeMainRisk:[],selectedProduct:[],selectedProductList:[],proposalId:0,insuredPersonVO:{}}),actions:{setProposalInfo(e){this.$state.proposalInfo=e},setTrialData(e){this.$state.trialData=e},setExcludeProduct(e){this.$state.excludeProduct=e},setExcludeMainRiskCode(e){this.$state.excludeMainRisk=e},setSelectedProduct(e){this.$state.selectedProduct=e},setSelectedProductList(e){this.$state.selectedProductList=e},setInsuredPersonVO(e){this.$state.insuredPersonVO=e}}});const g={key:0,class:"error-msg"};var x=l(s({__name:"ProductTips",props:{errorMsg:{default:""}},setup:e=>(e,s)=>{const l=n;return Boolean(e.errorMsg)?(a(),t("div",g,[o(l,{class:"warning-icon",name:"warning-o"}),r(c(e.errorMsg),1)])):d("",!0)}}),[["__scopeId","data-v-1d29b304"]]);const $={class:"search-wrap"},v=s({name:"search"});var V=l(s({...v,props:{shape:{},modelValue:{default:""}},emits:["search"],setup(e,{emit:s}){const r=e,c=i((()=>r.modelValue)),d=()=>{s("search",c)};return(e,s)=>{const r=m;return a(),t("div",$,[o(r,u({modelValue:p(c),"onUpdate:modelValue":s[0]||(s[0]=e=>h(c)?c.value=e:null),placeholder:"请输入",shape:"round",class:"search","clear-trigger":"always",clearable:""},e.$attrs,{"show-action":!!p(c),onSearch:d,onCancel:d}),null,16,["modelValue","show-action"]),P(e.$slots,"default",{},void 0,!0)])}}}),[["__scopeId","data-v-6c9fbfc0"]]);export{x as P,V as _,f as u};
