import{B as e,R as t,J as a,H as s,d as o,Y as r,b as n,bC as i,dS as l,O as d,a2 as c,a3 as u,a6 as p,a4 as g,k as f,dT as m,a8 as b,a7 as v,aa as h,dU as x,dV as k,m as y,o as P,p as S,w as _,v as q,c as B,s as C,e as z,u as T,dW as F,F as I,d3 as R,aI as j}from"./index-6005e057.js";const[w,L]=e("grid"),M={square:Boolean,center:t,border:t,gutter:a,reverse:Boolean,iconSize:a,direction:String,clickable:Boolean,columnNum:s(4)},N=Symbol(w);const O=d(o({name:w,props:M,setup(e,{slots:t}){const{linkChildren:a}=r(N);return a({props:e}),()=>{var a;return n("div",{style:{paddingLeft:i(e.gutter)},class:[L(),{[l]:e.border&&!e.gutter}]},[null==(a=t.default)?void 0:a.call(t)])}}})),[V,W]=e("grid-item");const H=d(o({name:V,props:c({},u,{dot:Boolean,text:String,icon:String,badge:a,iconColor:String,iconPrefix:String,badgeProps:Object}),setup(e,{slots:t}){const{parent:a,index:s}=p(N),o=g();if(!a)return;const r=f((()=>{const{square:e,gutter:t,columnNum:o}=a.props,r=100/+o+"%",n={flexBasis:r};if(e)n.paddingTop=r;else if(t){const e=i(t);n.paddingRight=e,s.value>=o&&(n.marginTop=e)}return n})),l=f((()=>{const{square:e,gutter:t}=a.props;if(e&&t){const e=i(t);return{right:e,bottom:e,height:"auto"}}}));return()=>{const{center:s,border:i,square:d,gutter:c,reverse:u,direction:p,clickable:g}=a.props,f=[W("content",[p,{center:s,square:d,reverse:u,clickable:g,surround:i&&c}]),{[m]:i}];return n("div",{class:[W({square:d})],style:r.value},[n("div",{role:g?"button":void 0,class:f,style:l.value,tabindex:g?0:void 0,onClick:o},[t.default?t.default():[t.icon?n(v,b({dot:e.dot,content:e.badge},e.badgeProps),{default:t.icon}):e.icon?n(h,{dot:e.dot,name:e.icon,size:a.props.iconSize,badge:e.badge,class:W("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null):void 0,t.text?t.text():e.text?n("span",{class:W("text")},[e.text]):void 0]])])}}}));const J=o({__name:"menu",setup(e){const t=x(),{themeVars:a}=k(t),s=["#ff00ff","#ff0000","#0edd05","#FF6600","#0d6efe"],o=()=>{const e=s[function(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(t-e+1)+e,10);default:return 0}}(0,s.length-1)];console.log("color",e),a.value=R(e)};return(e,t)=>{const a=j,s=y("RouterLink"),r=H,i=O,l=y("ProPageWrap");return P(),S(l,{"main-class":"page-home"},{default:_((()=>[n(a,{type:"primary",onClick:o},{default:_((()=>[q("变化主题")])),_:1}),n(i,{"column-num":3},{default:_((()=>[(P(!0),B(I,null,C(T(F),(e=>(P(),S(r,{key:e.path,"link-type":"navigateTo"},{default:_((()=>[n(s,{to:e.path},{default:_((()=>[n(a,{size:"mini",type:"primary"},{default:_((()=>[q(z((null==e?void 0:e.meta.title)||e.name),1)])),_:2},1024)])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1})])),_:1})}}});export{J as default};
