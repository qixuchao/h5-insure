import{d as a,bW as e,k as l,o as s,c as t,a as c,F as d,q as o,n as r,e as n,u,a8 as b,b as i,ae as h,f as p,_ as m}from"./index-f3f205b3.js";const f={class:"com-pro-table"},w={class:"table-wrapper"},y={class:"scroll-table"},x={class:"table-header"},k={class:"table-row"},v={class:"table-body"};var _=m(a({__name:"index",props:{columns:{type:Array,default:()=>[]},dataSource:{type:Array,default:()=>[]}},setup(a){const m=a,[_,S]=e(!1),g=()=>{S()},$=l((()=>m.dataSource.length<=4||_.value?m.dataSource:m.dataSource.slice(0,4)));return(e,l)=>(s(),t("div",f,[c("div",w,[c("table",y,[c("thead",x,[c("tr",k,[(s(!0),t(d,null,o(a.columns,((e,l)=>(s(),t("th",{key:l,class:r(["table-cell",`table-cell-width-${e.width}`,`table-cell-${l}`,{fixed:e.fixed||a.columns.length>4&&0===l}])},n(e.title),3)))),128))])]),c("tbody",v,[(s(!0),t(d,null,o(u($),((e,l)=>(s(),t("tr",{key:l,class:"table-row"},[(s(!0),t(d,null,o(a.columns,((d,o)=>(s(),t("td",{key:o,class:r(["table-cell",`table-cell-width-${d.width}`,{fixed:d.fixed||a.columns.length>4&&0===o}])},[c("span",null,n(d.render?d.render(e,l):e[d.dataIndex]),1)],2)))),128))])))),128))])])]),a.dataSource.length>4?(s(),t("div",{key:0,class:"show-more",onClick:g},[b(n(u(_)?"收起明细":"展开明细")+" ",1),i(h,{name:"down",class:r(["icon",{showMore:u(_)}])},null,8,["class"])])):p("",!0)]))}}),[["__scopeId","data-v-721ea276"]]);export{_};
