import{_ as s,d as a,G as e,x as l,c as t,h as i,F as c,i as n,B as d,g as o,j as m,f as r,I as p,t as v,n as u,k as h}from"./index-e3df8bbc.js";import"./pdfh5-008ca364.js";const f={class:"com-time-line"},g={class:"left"},x={class:"num"},_={class:"num-text"},k={class:"right"},y={class:"title"},j={class:"desc"};var w=s(a({__name:"index",props:{list:{type:Array,default:()=>[]}},setup(s){const a=s,[w,b]=e(!1),I=()=>{b()},A=l((()=>a.list.length<=4||w.value?a.list:a.list.slice(0,4)));return(a,e)=>(t(),i("div",f,[(t(!0),i(c,null,n(o(A),((s,a)=>(t(),i("div",{key:a,class:d(["item",{last:a===o(A).length-1}])},[m("div",g,[m("div",x,[r(p,{name:"time-step"}),m("span",_,v(a+1),1)])]),m("div",k,[m("div",y,v(s.title),1),m("div",j,v(s.desc),1)])],2)))),128)),s.list.length>4?(t(),i("div",{key:0,class:"show-more",onClick:I},[u(v(o(w)?"收起":"展开")+" ",1),r(p,{name:"down",class:d(["icon",{showMore:o(w)}])},null,8,["class"])])):h("",!0)]))}}),[["__scopeId","data-v-ae1aa418"]]);export{w as default};
