import{a as e,u as o}from"./index-d66a20d8.js";import{T as t}from"./infoCollection-e6a8a0ee.js";import"./pdfh5-e588f83d.js";import"vue";const r={class:"page-middle-wrapper"},n=[vue.createElementVNode("h4",null,null,-1)],a=vue.defineComponent({__name:"preview",setup(a){const l=e(),u=o(),{extraInfo:p}=u.query;console.log("route.query-------",u.query);let s={};try{s=JSON.parse(decodeURIComponent(p))}catch(d){}console.log("extraInfo",s);const{templateId:c}=s;return vue.onBeforeMount((()=>{(()=>{const e=`/baseInsurance/${t[c]}`;l.replace({path:e,query:{...u.query,preview:"1"}})})()})),(e,o)=>(vue.openBlock(),vue.createElementBlock("div",r,n))}});export{a as default};
