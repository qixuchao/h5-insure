import{d as a,bV as e,j as l,o as s,c as t,a as c,F as d,n as o,p as r,e as n,u,a8 as i,b,ae as h,q as p,_ as m}from"./index-13a0c8c7.js";const w={class:"com-pro-table"},y={class:"table-wrapper"},x={class:"scroll-table"},f={class:"table-header"},v={class:"table-row"},_={class:"table-body"};var k=m(a({__name:"index",props:{columns:{type:Array,default:()=>[]},dataSource:{type:Array,default:()=>[]}},setup(a){const m=a,[k,S]=e(!1),g=()=>{S()},$=l((()=>m.dataSource.length<=4||k.value?m.dataSource:m.dataSource.slice(0,4)));return(e,l)=>(s(),t("div",w,[c("div",y,[c("table",x,[c("thead",f,[c("tr",v,[(s(!0),t(d,null,o(a.columns,((e,l)=>(s(),t("th",{key:l,class:r(["table-cell",`table-cell-width-${e.width}`,`table-cell-${l}`,{fixed:e.fixed||a.columns.length>4&&0===l}])},n(e.title),3)))),128))])]),c("tbody",_,[(s(!0),t(d,null,o(u($),((e,l)=>(s(),t("tr",{key:l,class:"table-row"},[(s(!0),t(d,null,o(a.columns,((d,o)=>(s(),t("td",{key:o,class:r(["table-cell",`table-cell-width-${d.width}`,{fixed:d.fixed||a.columns.length>4&&0===o}])},[c("span",null,n(d.render?d.render(e,l):e[d.dataIndex]),1)],2)))),128))])))),128))])])]),a.dataSource.length>4?(s(),t("div",{key:0,class:"show-more",onClick:g},[i(n(u(k)?"收起明细":"展开明细")+" ",1),b(h,{name:"down",class:r(["icon",{showMore:u(k)}])},null,8,["class"])])):p("",!0)]))}}),[["__scopeId","data-v-721ea276"]]);export{k as _};
