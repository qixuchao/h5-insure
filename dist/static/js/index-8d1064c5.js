import{E as a,d as e,a6 as l,K as s,c as t,y as c,f as d,R as o,U as r,A as n,z as u,g as i,j as b,i as h,a9 as p,h as m}from"./index-000b7445.js";const y={class:"com-pro-table"},w={class:"table-wrapper"},f={class:"scroll-table"},x={class:"table-header"},v={class:"table-row"},g={class:"table-body"};var k=a(e({__name:"index",props:{columns:{type:Array,default:()=>[]},dataSource:{type:Array,default:()=>[]}},setup(a){const e=a,[k,S]=l(!1),_=()=>{S()},A=s((()=>e.dataSource.length<=4||k.value?e.dataSource:e.dataSource.slice(0,4)));return(e,l)=>(t(),c("div",y,[d("div",w,[d("table",f,[d("thead",x,[d("tr",v,[(t(!0),c(o,null,r(a.columns,((e,l)=>(t(),c("th",{key:l,class:n(["table-cell",`table-cell-width-${e.width}`,`table-cell-${l}`,{fixed:e.fixed||a.columns.length>4&&0===l}])},u(e.title),3)))),128))])]),d("tbody",g,[(t(!0),c(o,null,r(i(A),((e,l)=>(t(),c("tr",{key:l,class:"table-row"},[(t(!0),c(o,null,r(a.columns,((s,o)=>(t(),c("td",{key:o,class:n(["table-cell",`table-cell-width-${s.width}`,{fixed:s.fixed||a.columns.length>4&&0===o}])},[d("span",null,u(s.render?s.render(e,l):e[s.dataIndex]),1)],2)))),128))])))),128))])])]),a.dataSource.length>4?(t(),c("div",{key:0,class:"show-more",onClick:_},[b(u(i(k)?"收起明细":"展开明细")+" ",1),h(p,{name:"down",class:n(["icon",{showMore:i(k)}])},null,8,["class"])])):m("",!0)]))}}),[["__scopeId","data-v-377781ce"]]);export{k as P};
