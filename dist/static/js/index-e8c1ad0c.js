import{d as a,b_ as e,k as l,o as s,c as t,a as c,F as d,q as o,n as r,e as n,u,a8 as b,b as i,af as h,f,_ as p}from"./index-09fafbfe.js";const m={class:"com-pro-table"},w={class:"table-wrapper"},y={class:"scroll-table"},x={class:"table-header"},_={class:"table-row"},k={class:"table-body"};var v=p(a({__name:"index",props:{columns:{type:Array,default:()=>[]},dataSource:{type:Array,default:()=>[]}},setup(a){const p=a,[v,S]=e(!1),g=()=>{S()},$=l((()=>p.dataSource.length<=4||v.value?p.dataSource:p.dataSource.slice(0,4)));return(e,l)=>(s(),t("div",m,[c("div",w,[c("table",y,[c("thead",x,[c("tr",_,[(s(!0),t(d,null,o(a.columns,((e,l)=>(s(),t("th",{key:l,class:r(["table-cell",`table-cell-width-${e.width}`,`table-cell-${l}`,{fixed:e.fixed||a.columns.length>4&&0===l}])},n(e.title),3)))),128))])]),c("tbody",k,[(s(!0),t(d,null,o(u($),((e,l)=>(s(),t("tr",{key:l,class:"table-row"},[(s(!0),t(d,null,o(a.columns,((d,o)=>(s(),t("td",{key:o,class:r(["table-cell",`table-cell-width-${d.width}`,{fixed:d.fixed||a.columns.length>4&&0===o}])},[c("span",null,n(d.render?d.render(e,l):e[d.dataIndex]),1)],2)))),128))])))),128))])])]),a.dataSource.length>4?(s(),t("div",{key:0,class:"show-more",onClick:g},[b(n(u(v)?"收起明细":"展开明细")+" ",1),i(h,{name:"down",class:r(["icon",{showMore:u(v)}])},null,8,["class"])])):f("",!0)]))}}),[["__scopeId","data-v-721ea276"]]);export{v as _};
