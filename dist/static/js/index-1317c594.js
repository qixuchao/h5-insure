import{G as s,d as a,aZ as e,L as l,b as t,c as i,$ as c,a7 as d,F as n,f as o,i as m,e as r,a4 as p,E as v,j as u,h}from"./index-27c99c5f.js";import"./pdfh5-65d2a17a.js";const f={class:"com-time-line"},g={class:"left"},x={class:"num"},y={class:"num-text"},_={class:"right"},j={class:"title"},k={class:"desc"};var w=s(a({__name:"index",props:{list:{type:Array,default:()=>[]}},setup(s){const a=s,[w,b]=e(!1),A=()=>{b()},C=l((()=>a.list.length<=4||w.value?a.list:a.list.slice(0,4)));return(a,e)=>(t(),i("div",f,[(t(!0),i(c,null,d(o(C),((s,a)=>(t(),i("div",{key:a,class:n(["item",{last:a===o(C).length-1}])},[m("div",g,[m("div",x,[r(p,{name:"time-step"}),m("span",y,v(a+1),1)])]),m("div",_,[m("div",j,v(s.title),1),m("div",k,v(s.desc),1)])],2)))),128)),s.list.length>4?(t(),i("div",{key:0,class:"show-more",onClick:A},[u(v(o(w)?"收起":"展开")+" ",1),r(p,{name:"down",class:n(["icon",{showMore:o(w)}])},null,8,["class"])])):h("",!0)]))}}),[["__scopeId","data-v-ae1aa418"]]);export{w as default};
