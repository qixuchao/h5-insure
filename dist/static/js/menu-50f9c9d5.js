import{B as e,R as t,J as a,H as s,d as o,Y as r,b as n,bX as i,e5 as l,O as c,a2 as u,a3 as d,a6 as p,a4 as g,k as f,e6 as m,a8 as b,a7 as v,aa as h,e7 as x,e8 as k,m as y,o as P,p as S,w as _,v as q,c as B,s as C,e as z,u as F,e9 as R,F as T,dd as j,ar as w}from"./index-7925b1ec.js";const[I,L]=e("grid"),M={square:Boolean,center:t,border:t,gutter:a,reverse:Boolean,iconSize:a,direction:String,clickable:Boolean,columnNum:s(4)},N=Symbol(I);const O=c(o({name:I,props:M,setup(e,{slots:t}){const{linkChildren:a}=r(N);return a({props:e}),()=>{var a;return n("div",{style:{paddingLeft:i(e.gutter)},class:[L(),{[l]:e.border&&!e.gutter}]},[null==(a=t.default)?void 0:a.call(t)])}}})),[H,J]=e("grid-item");const V=c(o({name:H,props:u({},d,{dot:Boolean,text:String,icon:String,badge:a,iconColor:String,iconPrefix:String,badgeProps:Object}),setup(e,{slots:t}){const{parent:a,index:s}=p(N),o=g();if(!a)return;const r=f((()=>{const{square:e,gutter:t,columnNum:o}=a.props,r=100/+o+"%",n={flexBasis:r};if(e)n.paddingTop=r;else if(t){const e=i(t);n.paddingRight=e,s.value>=o&&(n.marginTop=e)}return n})),l=f((()=>{const{square:e,gutter:t}=a.props;if(e&&t){const e=i(t);return{right:e,bottom:e,height:"auto"}}}));return()=>{const{center:s,border:i,square:c,gutter:u,reverse:d,direction:p,clickable:g}=a.props,f=[J("content",[p,{center:s,square:c,reverse:d,clickable:g,surround:i&&u}]),{[m]:i}];return n("div",{class:[J({square:c})],style:r.value},[n("div",{role:g?"button":void 0,class:f,style:l.value,tabindex:g?0:void 0,onClick:o},[t.default?t.default():[t.icon?n(v,b({dot:e.dot,content:e.badge},e.badgeProps),{default:t.icon}):e.icon?n(h,{dot:e.dot,name:e.icon,size:a.props.iconSize,badge:e.badge,class:J("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null):void 0,t.text?t.text():e.text?n("span",{class:J("text")},[e.text]):void 0]])])}}}));const W=o({__name:"menu",setup(e){const t=x(),{themeVars:a}=k(t),s=["#ff00ff","#ff0000","#0edd05","#FF6600","#0d6efe"],o=()=>{const e=s[function(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(t-e+1)+e,10);default:return 0}}(0,s.length-1)];console.log("color",e),a.value=j(e)};return(e,t)=>{const a=w,s=y("RouterLink"),r=V,i=O,l=y("ProPageWrap");return P(),S(l,{"main-class":"page-home"},{default:_((()=>[n(a,{type:"primary",onClick:o},{default:_((()=>[q("变化主题")])),_:1}),n(i,{"column-num":3},{default:_((()=>[(P(!0),B(T,null,C(F(R),(e=>(P(),S(r,{key:e.path,"link-type":"navigateTo"},{default:_((()=>[n(s,{to:e.path},{default:_((()=>[n(a,{size:"mini",type:"primary"},{default:_((()=>[q(z((null==e?void 0:e.meta.title)||e.name),1)])),_:2},1024)])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1})])),_:1})}}});export{W as default};
