import{d as a,aF as e,L as l,b as s,c as t,i as c,$ as d,a7 as o,f as r,j as n,E as u,e as i,F as b,a4 as h,h as p,G as m}from"./index-69623b55.js";const w={class:"com-pro-table"},y={class:"table-wrapper"},f={class:"scroll-table"},x={class:"table-header"},v={class:"table-row"},k={class:"table-body"};var S=m(a({__name:"index",props:{columns:{type:Array,default:()=>[]},dataSource:{type:Array,default:()=>[]}},setup(a){const m=a,[S,g]=e(!1),$=()=>{g()},_=l((()=>m.dataSource.length<=4||S.value?m.dataSource:m.dataSource.slice(0,4)));return(e,l)=>(s(),t("div",w,[c("div",y,[c("table",f,[c("thead",x,[c("tr",v,[(s(!0),t(d,null,o(a.columns,((e,l)=>(s(),t("th",{key:l,class:b(["table-cell",`table-cell-width-${e.width}`,`table-cell-${l}`,{fixed:e.fixed||a.columns.length>4&&0===l}])},u(e.title),3)))),128))])]),c("tbody",k,[(s(!0),t(d,null,o(r(_),((e,l)=>(s(),t("tr",{key:l,class:"table-row"},[(s(!0),t(d,null,o(a.columns,((d,o)=>(s(),t("td",{key:o,class:b(["table-cell",`table-cell-width-${d.width}`,{fixed:d.fixed||a.columns.length>4&&0===o}])},[c("span",null,u(d.render?d.render(e,l):e[d.dataIndex]),1)],2)))),128))])))),128))])])]),a.dataSource.length>4?(s(),t("div",{key:0,class:"show-more",onClick:$},[n(u(r(S)?"收起明细":"展开明细")+" ",1),i(h,{name:"down",class:b(["icon",{showMore:r(S)}])},null,8,["class"])])):p("",!0)]))}}),[["__scopeId","data-v-377781ce"]]);export{S as P};
