import{_ as e,j as a,br as n,o as i,m as t,w as o,c as s,q as l,F as d}from"./index-7a7e662a.js";import{L as u}from"./index-45b2609d.js";var r=e({setup(){const e=a([]),n=a(!1),i=a(!1);return{list:e,onLoad:()=>{setTimeout((()=>{for(let a=0;a<10;a++)e.value.push(e.value.length+1);n.value=!1,e.value.length>=40&&(i.value=!0)}),1e3)},loading:n,finished:i}}},[["render",function(e,a,r,f,h,g){const p=n,m=u;return i(),t(m,{loading:f.loading,"onUpdate:loading":a[0]||(a[0]=e=>f.loading=e),finished:f.finished,"finished-text":"没有更多了",onLoad:f.onLoad},{default:o((()=>[(i(!0),s(d,null,l(f.list,(e=>(i(),t(p,{key:e,style:{height:"200px"},title:e},null,8,["title"])))),128))])),_:1},8,["loading","finished","onLoad"])}]]);export{r as default};
