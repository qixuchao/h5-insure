import{_ as e,j as a,bR as n,o as i,p as s,w as t,c as o,s as l,F as d}from"./index-1028b15c.js";import{L as u}from"./index-221f2a9b.js";var r=e({setup(){const e=a([]),n=a(!1),i=a(!1);return{list:e,onLoad:()=>{setTimeout((()=>{for(let a=0;a<10;a++)e.value.push(e.value.length+1);n.value=!1,e.value.length>=40&&(i.value=!0)}),1e3)},loading:n,finished:i}}},[["render",function(e,a,r,f,h,g){const p=n,v=u;return i(),s(v,{loading:f.loading,"onUpdate:loading":a[0]||(a[0]=e=>f.loading=e),finished:f.finished,"finished-text":"没有更多了",onLoad:f.onLoad},{default:t((()=>[(i(!0),o(d,null,l(f.list,(e=>(i(),s(p,{key:e,style:{height:"200px"},title:e},null,8,["title"])))),128))])),_:1},8,["loading","finished","onLoad"])}]]);export{r as default};
