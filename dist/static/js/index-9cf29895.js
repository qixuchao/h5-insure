import{_ as a,d as e,S as l,E as s,c as t,h as c,j as d,F as o,i as r,L as n,t as u,g as i,n as b,f as h,V as p,k as m}from"./index-4edd55c0.js";const w={class:"com-pro-table"},y={class:"table-wrapper"},f={class:"scroll-table"},x={class:"table-header"},k={class:"table-row"},v={class:"table-body"};var S=a(e({__name:"index",props:{columns:{type:Array,default:()=>[]},dataSource:{type:Array,default:()=>[]}},setup(a){const e=a,[S,g]=l(!1),_=()=>{g()},$=s((()=>e.dataSource.length<=4||S.value?e.dataSource:e.dataSource.slice(0,4)));return(e,l)=>(t(),c("div",w,[d("div",y,[d("table",f,[d("thead",x,[d("tr",k,[(t(!0),c(o,null,r(a.columns,((e,l)=>(t(),c("th",{key:l,class:n(["table-cell",`table-cell-width-${e.width}`,`table-cell-${l}`,{fixed:e.fixed||a.columns.length>4&&0===l}])},u(e.title),3)))),128))])]),d("tbody",v,[(t(!0),c(o,null,r(i($),((e,l)=>(t(),c("tr",{key:l,class:"table-row"},[(t(!0),c(o,null,r(a.columns,((s,o)=>(t(),c("td",{key:o,class:n(["table-cell",`table-cell-width-${s.width}`,{fixed:s.fixed||a.columns.length>4&&0===o}])},[d("span",null,u(s.render?s.render(e,l):e[s.dataIndex]),1)],2)))),128))])))),128))])])]),a.dataSource.length>4?(t(),c("div",{key:0,class:"show-more",onClick:_},[b(u(i(S)?"收起明细":"展开明细")+" ",1),h(p,{name:"down",class:n(["icon",{showMore:i(S)}])},null,8,["class"])])):m("",!0)]))}}),[["__scopeId","data-v-377781ce"]]);export{S as P};
