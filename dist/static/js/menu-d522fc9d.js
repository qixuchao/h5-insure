import{B as e,R as a,J as t,H as s,d as o,Y as r,b as n,bV as i,e5 as l,O as c,a2 as u,a3 as d,a6 as p,a4 as g,k as f,e6 as m,a8 as b,a7 as v,aa as h,e7 as x,e8 as k,m as y,o as P,p as S,w as _,v as q,c as B,s as C,e as z,u as F,e9 as R,F as T,de as j,ar as w}from"./index-6aa081c8.js";const[I,L]=e("grid"),M={square:Boolean,center:a,border:a,gutter:t,reverse:Boolean,iconSize:t,direction:String,clickable:Boolean,columnNum:s(4)},N=Symbol(I);const O=c(o({name:I,props:M,setup(e,{slots:a}){const{linkChildren:t}=r(N);return t({props:e}),()=>{var t;return n("div",{style:{paddingLeft:i(e.gutter)},class:[L(),{[l]:e.border&&!e.gutter}]},[null==(t=a.default)?void 0:t.call(a)])}}})),[V,H]=e("grid-item");const J=c(o({name:V,props:u({},d,{dot:Boolean,text:String,icon:String,badge:t,iconColor:String,iconPrefix:String,badgeProps:Object}),setup(e,{slots:a}){const{parent:t,index:s}=p(N),o=g();if(!t)return;const r=f((()=>{const{square:e,gutter:a,columnNum:o}=t.props,r=100/+o+"%",n={flexBasis:r};if(e)n.paddingTop=r;else if(a){const e=i(a);n.paddingRight=e,s.value>=o&&(n.marginTop=e)}return n})),l=f((()=>{const{square:e,gutter:a}=t.props;if(e&&a){const e=i(a);return{right:e,bottom:e,height:"auto"}}}));return()=>{const{center:s,border:i,square:c,gutter:u,reverse:d,direction:p,clickable:g}=t.props,f=[H("content",[p,{center:s,square:c,reverse:d,clickable:g,surround:i&&u}]),{[m]:i}];return n("div",{class:[H({square:c})],style:r.value},[n("div",{role:g?"button":void 0,class:f,style:l.value,tabindex:g?0:void 0,onClick:o},[a.default?a.default():[a.icon?n(v,b({dot:e.dot,content:e.badge},e.badgeProps),{default:a.icon}):e.icon?n(h,{dot:e.dot,name:e.icon,size:t.props.iconSize,badge:e.badge,class:H("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null):void 0,a.text?a.text():e.text?n("span",{class:H("text")},[e.text]):void 0]])])}}}));const W=o({__name:"menu",setup(e){const a=x(),{themeVars:t}=k(a),s=["#ff00ff","#ff0000","#0edd05","#FF6600","#0d6efe"],o=()=>{const e=s[function(e,a){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(a-e+1)+e,10);default:return 0}}(0,s.length-1)];console.log("color",e),t.value=j(e)};return(e,a)=>{const t=w,s=y("RouterLink"),r=J,i=O,l=y("ProPageWrap");return P(),S(l,{"main-class":"page-home"},{default:_((()=>[n(t,{type:"primary",onClick:o},{default:_((()=>[q("变化主题")])),_:1}),n(i,{"column-num":3},{default:_((()=>[(P(!0),B(T,null,C(F(R),(e=>(P(),S(r,{key:e.path,"link-type":"navigateTo"},{default:_((()=>[n(s,{to:e.path},{default:_((()=>[n(t,{size:"mini",type:"primary"},{default:_((()=>[q(z((null==e?void 0:e.meta.title)||e.name),1)])),_:2},1024)])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1})])),_:1})}}});export{W as default};
