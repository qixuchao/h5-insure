import{h as p,R as w,z as g,k as e,p as t,A as r,F as d,H as u,M as i,L as h,B as _,E as v,s as S,v as k}from"./vendor-b80b3531.js";import{_ as x,d as C}from"./index-2059c76e.js";const E={class:"com-table"},B={class:"table-wrapper"},M={class:"scroll-table"},N={class:"table-header"},V={class:"table-row"},$={class:"table-body"},A=p({props:{columns:{type:Array,default:()=>[]},dataSource:{type:Array,default:()=>[]}},setup(a){const c=a,[n,f]=w(!1),y=()=>{f()},m=g(()=>c.dataSource.length<=4||n.value?c.dataSource:c.dataSource.slice(0,4));return(D,F)=>(e(),t("div",E,[r("div",B,[r("table",M,[r("thead",N,[r("tr",V,[(e(!0),t(d,null,u(a.columns,(s,l)=>(e(),t("th",{key:l,class:i(["table-cell",`table-cell-width-${s.width}`,`table-cell-${l}`,{fixed:s.fixed||a.columns.length>4&&l===0}])},h(s.title),3))),128))])]),r("tbody",$,[(e(!0),t(d,null,u(_(m),(s,l)=>(e(),t("tr",{key:l,class:"table-row"},[(e(!0),t(d,null,u(a.columns,(o,b)=>(e(),t("td",{key:b,class:i(["table-cell",`table-cell-width-${o.width}`,{fixed:o.fixed||a.columns.length>4&&b===0}])},[r("span",null,h(o.render?o.render(s,l):s[o.dataIndex]),1)],2))),128))]))),128))])])]),a.dataSource.length>4?(e(),t("div",{key:0,class:"show-more",onClick:y},[v(h(_(n)?"\u6536\u8D77\u660E\u7EC6":"\u5C55\u5F00\u660E\u7EC6")+" ",1),S(C,{name:"down",class:i(["icon",{showMore:_(n)}])},null,8,["class"])])):k("",!0)]))}});var L=x(A,[["__scopeId","data-v-e69ad8e4"]]);export{L as P};
