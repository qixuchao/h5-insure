import{_ as e,j as a,bu as n,o as i,m as t,w as o,c as s,q as l,F as d}from"./index-8120d8cf.js";import{L as u}from"./index-f42fe4a0.js";var f=e({setup(){const e=a([]),n=a(!1),i=a(!1);return{list:e,onLoad:()=>{setTimeout((()=>{for(let a=0;a<10;a++)e.value.push(e.value.length+1);n.value=!1,e.value.length>=40&&(i.value=!0)}),1e3)},loading:n,finished:i}}},[["render",function(e,a,f,r,h,g){const p=n,m=u;return i(),t(m,{loading:r.loading,"onUpdate:loading":a[0]||(a[0]=e=>r.loading=e),finished:r.finished,"finished-text":"没有更多了",onLoad:r.onLoad},{default:o((()=>[(i(!0),s(d,null,l(r.list,(e=>(i(),t(p,{key:e,style:{height:"200px"},title:e},null,8,["title"])))),128))])),_:1},8,["loading","finished","onLoad"])}]]);export{f as default};
