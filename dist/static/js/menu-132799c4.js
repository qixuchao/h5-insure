import{v as e,K as t,C as a,B as s,d as o,bs as n,b as r,bH as i,dl as l,H as d,X as c,dm as u,bx as p,dn as g,j as f,dp as m,a0 as b,dq as v,bg as x,dr as h,ds as k,an as y,k as P,o as S,l as _,w as q,a8 as B,c as C,n as z,e as j,u as F,dt as T,F as w,cA as H}from"./index-5f0b7c0f.js";const[I,L]=e("grid"),M={square:Boolean,center:t,border:t,gutter:a,reverse:Boolean,iconSize:a,direction:String,clickable:Boolean,columnNum:s(4)},N=Symbol(I);const R=d(o({name:I,props:M,setup(e,{slots:t}){const{linkChildren:a}=n(N);return a({props:e}),()=>{var a;return r("div",{style:{paddingLeft:i(e.gutter)},class:[L(),{[l]:e.border&&!e.gutter}]},[null==(a=t.default)?void 0:a.call(t)])}}})),[A,K]=e("grid-item");const O=d(o({name:A,props:c({},u,{dot:Boolean,text:String,icon:String,badge:a,iconColor:String,iconPrefix:String,badgeProps:Object}),setup(e,{slots:t}){const{parent:a,index:s}=p(N),o=g();if(!a)return;const n=f((()=>{const{square:e,gutter:t,columnNum:o}=a.props,n=100/+o+"%",r={flexBasis:n};if(e)r.paddingTop=n;else if(t){const e=i(t);r.paddingRight=e,s.value>=o&&(r.marginTop=e)}return r})),l=f((()=>{const{square:e,gutter:t}=a.props;if(e&&t){const e=i(t);return{right:e,bottom:e,height:"auto"}}}));return()=>{const{center:s,border:i,square:d,gutter:c,reverse:u,direction:p,clickable:g}=a.props,f=[K("content",[p,{center:s,square:d,reverse:u,clickable:g,surround:i&&c}]),{[m]:i}];return r("div",{class:[K({square:d})],style:n.value},[r("div",{role:g?"button":void 0,class:f,style:l.value,tabindex:g?0:void 0,onClick:o},[t.default?t.default():[t.icon?r(v,b({dot:e.dot,content:e.badge},e.badgeProps),{default:t.icon}):e.icon?r(x,{dot:e.dot,name:e.icon,size:a.props.iconSize,badge:e.badge,class:K("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null):void 0,t.text?t.text():e.text?r("span",{class:K("text")},[e.text]):void 0]])])}}}));const V=o({__name:"menu",setup(e){const t=h(),{themeVars:a}=k(t),s=["#ff00ff","#ff0000","#0edd05","#FF6600","#0d6efe"],o=()=>{const e=s[function(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(t-e+1)+e,10);default:return 0}}(0,s.length-1)];console.log("color",e),a.value=H(e)};return(e,t)=>{const a=y,s=P("RouterLink"),n=O,i=R,l=P("ProPageWrap");return S(),_(l,{"main-class":"page-home"},{default:q((()=>[r(a,{type:"primary",onClick:o},{default:q((()=>[B("变化主题")])),_:1}),r(i,{"column-num":3},{default:q((()=>[(S(!0),C(w,null,z(F(T),(e=>(S(),_(n,{key:e.path,"link-type":"navigateTo"},{default:q((()=>[r(s,{to:e.path},{default:q((()=>[r(a,{size:"mini",type:"primary"},{default:q((()=>[B(j((null==e?void 0:e.meta.title)||e.name),1)])),_:2},1024)])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1})])),_:1})}}});export{V as default};
