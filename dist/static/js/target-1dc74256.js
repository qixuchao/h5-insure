import{g as m,k as t,m as a,y as o,F as u,E as g,A as i,J as b,I as h}from"./vendor-e9263418.js";import{a as s}from"./index-b8742a0a.js";const f={class:"com-za-table"},y={class:"scroll-table"},k={class:"table-header"},T={class:"table-row"},x={class:"table-body"},P=m({props:{columns:{type:Object,default:()=>{}},dataSource:{type:Object,default:()=>{}},backgroundColor:{type:Array,default:()=>{}}},setup(e){return(S,$)=>(t(),a("div",f,[o("table",y,[o("thead",k,[o("tr",T,[(t(!0),a(u,null,g(e.columns,(l,r)=>(t(),a("th",{key:r,style:i({background:e.backgroundColor&&e.backgroundColor[0]||""}),class:b(["table-cell",`table-cell-${r}`,{fixed:l.fixed||e.columns.length>4&&r===0,fixedwidth:e.columns.length>4||l.fixed}])},h(l.title),7))),128))])]),o("tbody",x,[(t(!0),a(u,null,g(e.dataSource,(l,r)=>(t(),a("tr",{key:r,class:"table-row"},[(t(!0),a(u,null,g(e.columns,(n,d)=>(t(),a("td",{key:d,style:i({background:r%2!==0?e.backgroundColor&&(e.backgroundColor[1]||e.backgroundColor[0]):""}),class:b(["table-cell",`table-cell-${d}`,{fixed:n.fixed||e.columns.length>4&&d===0,fixedwidth:e.columns.length>4||l.fixed}])},[o("span",null,h(`${l[n.dataIndex]||n.default||0}
                     ${n.unit||""}`),1)],6))),128))]))),128))])])]))}}),c="/activity",v=e=>s({url:`${c}/goal/home`,method:"POST",data:e}),w=e=>s({url:`${c}/goal/resetGoal`,method:"POST",data:e}),D=e=>s({url:`${c}/goal/saveGoal`,method:"POST",data:e}),G=e=>s({url:`${c}/goal/searchGoalDetail`,method:"POST",data:e}),z=e=>s({url:`${c}/goal/teamGoal`,method:"POST",data:e});export{P as _,z as a,D as b,v as g,w as r,G as s};
