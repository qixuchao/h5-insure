import{_ as n}from"./index-a7234636.js";import{h as c,G as a,z as p,r as d,k as o,p as s,s as i,n as f,E as h,L as m,M as y,B as l}from"./vendor-4d9de129.js";import{c as v}from"./check-detail-60b0cbde.js";const g={class:"pro-shadow-button"},x=c({props:{colors:{type:Array,default:()=>[]},text:{type:String,default:()=>"\u7ACB\u5373\u9886\u53D6"},shadow:{type:Boolean,default:!0}},setup(t){const e=t;a(!1),a(!1);const r=p(()=>e.colors.length===0?null:e.colors.length===1?e.colors[0]:`linear-gradient(to right,${e.colors[0]},${e.colors[1]})`);return(_,C)=>{const u=d("van-button");return o(),s("div",g,[i(u,{class:y({"shadow-button":!0,shadow:e.shadow}),type:"primary",color:l(r),round:"",block:""},{default:f(()=>[h(m(t.text),1)]),_:1},8,["class","color"])])}}});var I=n(x,[["__scopeId","data-v-9f9f444e"]]);const k=["src"],B=["src"],b=c({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""}},setup(t){const e=t;return(r,_)=>e.isCheck?(o(),s("img",{key:0,src:l(v),class:"banner"},null,8,k)):(o(),s("img",{key:1,src:e.url,class:"banner"},null,8,B))}});var z=n(b,[["__scopeId","data-v-019fa86c"]]);export{z as B,I as P};
