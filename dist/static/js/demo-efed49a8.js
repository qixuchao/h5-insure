import{_ as a,j as e,bt as n,o as t,m as i,w as o,c as s,q as l,F as d}from"./index-4705aaa0.js";import{L as u}from"./index-c15901f2.js";var r=a({setup(){const a=e([]),n=e(!1),t=e(!1);return{list:a,onLoad:()=>{setTimeout((()=>{for(let e=0;e<10;e++)a.value.push(a.value.length+1);n.value=!1,a.value.length>=40&&(t.value=!0)}),1e3)},loading:n,finished:t}}},[["render",function(a,e,r,f,h,g){const p=n,m=u;return t(),i(m,{loading:f.loading,"onUpdate:loading":e[0]||(e[0]=a=>f.loading=a),finished:f.finished,"finished-text":"没有更多了",onLoad:f.onLoad},{default:o((()=>[(t(!0),s(d,null,l(f.list,(a=>(t(),i(p,{key:a,style:{height:"200px"},title:a},null,8,["title"])))),128))])),_:1},8,["loading","finished","onLoad"])}]]);export{r as default};
