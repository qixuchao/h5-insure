import{v as e,K as t,C as a,B as s,d as o,c2 as r,b as n,bE as i,dx as l,H as d,X as c,dy as u,c7 as p,dz as g,k as f,dA as m,a0 as b,dB as v,bl as x,dC as h,dD as y,ag as k,l as P,o as S,m as _,w as q,a8 as B,c as C,q as z,e as F,u as T,dE as j,F as w,cK as E}from"./index-412561aa.js";const[I,K]=e("grid"),L={square:Boolean,center:t,border:t,gutter:a,reverse:Boolean,iconSize:a,direction:String,clickable:Boolean,columnNum:s(4)},M=Symbol(I);const N=d(o({name:I,props:L,setup(e,{slots:t}){const{linkChildren:a}=r(M);return a({props:e}),()=>{var a;return n("div",{style:{paddingLeft:i(e.gutter)},class:[K(),{[l]:e.border&&!e.gutter}]},[null==(a=t.default)?void 0:a.call(t)])}}})),[R,A]=e("grid-item");const D=d(o({name:R,props:c({},u,{dot:Boolean,text:String,icon:String,badge:a,iconColor:String,iconPrefix:String,badgeProps:Object}),setup(e,{slots:t}){const{parent:a,index:s}=p(M),o=g();if(!a)return;const r=f((()=>{const{square:e,gutter:t,columnNum:o}=a.props,r=100/+o+"%",n={flexBasis:r};if(e)n.paddingTop=r;else if(t){const e=i(t);n.paddingRight=e,s.value>=o&&(n.marginTop=e)}return n})),l=f((()=>{const{square:e,gutter:t}=a.props;if(e&&t){const e=i(t);return{right:e,bottom:e,height:"auto"}}}));return()=>{const{center:s,border:i,square:d,gutter:c,reverse:u,direction:p,clickable:g}=a.props,f=[A("content",[p,{center:s,square:d,reverse:u,clickable:g,surround:i&&c}]),{[m]:i}];return n("div",{class:[A({square:d})],style:r.value},[n("div",{role:g?"button":void 0,class:f,style:l.value,tabindex:g?0:void 0,onClick:o},[t.default?t.default():[t.icon?n(v,b({dot:e.dot,content:e.badge},e.badgeProps),{default:t.icon}):e.icon?n(x,{dot:e.dot,name:e.icon,size:a.props.iconSize,badge:e.badge,class:A("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null):void 0,t.text?t.text():e.text?n("span",{class:A("text")},[e.text]):void 0]])])}}}));const H=o({__name:"menu",setup(e){const t=h(),{themeVars:a}=y(t),s=["#ff00ff","#ff0000","#0edd05","#FF6600","#0d6efe"],o=()=>{const e=s[function(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(t-e+1)+e,10);default:return 0}}(0,s.length-1)];console.log("color",e),a.value=E(e)};return(e,t)=>{const a=k,s=P("RouterLink"),r=D,i=N,l=P("ProPageWrap");return S(),_(l,{"main-class":"page-home"},{default:q((()=>[n(a,{type:"primary",onClick:o},{default:q((()=>[B("变化主题")])),_:1}),n(i,{"column-num":3},{default:q((()=>[(S(!0),C(w,null,z(T(j),(e=>(S(),_(r,{key:e.path,"link-type":"navigateTo"},{default:q((()=>[n(s,{to:e.path},{default:q((()=>[n(a,{size:"mini",type:"primary"},{default:q((()=>[B(F((null==e?void 0:e.meta.title)||e.name),1)])),_:2},1024)])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1})])),_:1})}}});export{H as default};
