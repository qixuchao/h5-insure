import{_ as a,d as e,ci as l,j as s,o as t,c,a as d,F as o,n as r,p as n,e as u,u as i,a8 as b,b as h,ae as p,q as m}from"./index-d5e08f40.js";const w={class:"com-pro-table"},y={class:"table-wrapper"},f={class:"scroll-table"},x={class:"table-header"},v={class:"table-row"},_={class:"table-body"};var k=a(e({__name:"index",props:{columns:{type:Array,default:()=>[]},dataSource:{type:Array,default:()=>[]}},setup(a){const e=a,[k,S]=l(!1),g=()=>{S()},$=s((()=>e.dataSource.length<=4||k.value?e.dataSource:e.dataSource.slice(0,4)));return(e,l)=>(t(),c("div",w,[d("div",y,[d("table",f,[d("thead",x,[d("tr",v,[(t(!0),c(o,null,r(a.columns,((e,l)=>(t(),c("th",{key:l,class:n(["table-cell",`table-cell-width-${e.width}`,`table-cell-${l}`,{fixed:e.fixed||a.columns.length>4&&0===l}])},u(e.title),3)))),128))])]),d("tbody",_,[(t(!0),c(o,null,r(i($),((e,l)=>(t(),c("tr",{key:l,class:"table-row"},[(t(!0),c(o,null,r(a.columns,((s,o)=>(t(),c("td",{key:o,class:n(["table-cell",`table-cell-width-${s.width}`,{fixed:s.fixed||a.columns.length>4&&0===o}])},[d("span",null,u(s.render?s.render(e,l):e[s.dataIndex]),1)],2)))),128))])))),128))])])]),a.dataSource.length>4?(t(),c("div",{key:0,class:"show-more",onClick:g},[b(u(i(k)?"收起明细":"展开明细")+" ",1),h(p,{name:"down",class:n(["icon",{showMore:i(k)}])},null,8,["class"])])):m("",!0)]))}}),[["__scopeId","data-v-721ea276"]]);export{k as _};
