import{_ as a,j as e,br as n,o as i,m as t,w as o,c as s,q as l,F as d}from"./index-9a4aba42.js";import{L as u}from"./index-45f8a7f6.js";var r=a({setup(){const a=e([]),n=e(!1),i=e(!1);return{list:a,onLoad:()=>{setTimeout((()=>{for(let e=0;e<10;e++)a.value.push(a.value.length+1);n.value=!1,a.value.length>=40&&(i.value=!0)}),1e3)},loading:n,finished:i}}},[["render",function(a,e,r,f,h,g){const p=n,m=u;return i(),t(m,{loading:f.loading,"onUpdate:loading":e[0]||(e[0]=a=>f.loading=a),finished:f.finished,"finished-text":"没有更多了",onLoad:f.onLoad},{default:o((()=>[(i(!0),s(d,null,l(f.list,(a=>(i(),t(p,{key:a,style:{height:"200px"},title:a},null,8,["title"])))),128))])),_:1},8,["loading","finished","onLoad"])}]]);export{r as default};
