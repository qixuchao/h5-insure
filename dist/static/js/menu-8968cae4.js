import{ax as e,aE as a,aF as t,aD as s,d as o,ce as r,i as n,ay as i,cw as c,aM as l,bT as d,cx as u,ca as p,cy as g,L as f,cz as m,aa as b,cA as v,aw as h,cB as x,b8 as y,B as k,b as P,c as S,e as _,w as B,j as q,A as C,V as z,g as j,cC as w,U as T,ch as F,E as L}from"./index-5a246d92.js";import"./pdfh5-008ca364.js";const[M,A]=e("grid"),E={square:Boolean,center:a,border:a,gutter:t,reverse:Boolean,iconSize:t,direction:String,clickable:Boolean,columnNum:s(4)},I=Symbol(M);const N=l(o({name:M,props:E,setup(e,{slots:a}){const{linkChildren:t}=r(I);return t({props:e}),()=>{var t;return n("div",{style:{paddingLeft:i(e.gutter)},class:[A(),{[c]:e.border&&!e.gutter}]},[null==(t=a.default)?void 0:t.call(a)])}}})),[R,V]=e("grid-item");const D=l(o({name:R,props:d({},u,{dot:Boolean,text:String,icon:String,badge:t,iconColor:String,iconPrefix:String,badgeProps:Object}),setup(e,{slots:a}){const{parent:t,index:s}=p(I),o=g();if(!t)return;const r=f((()=>{const{square:e,gutter:a,columnNum:o}=t.props,r=100/+o+"%",n={flexBasis:r};if(e)n.paddingTop=r;else if(a){const e=i(a);n.paddingRight=e,s.value>=o&&(n.marginTop=e)}return n})),c=f((()=>{const{square:e,gutter:a}=t.props;if(e&&a){const e=i(a);return{right:e,bottom:e,height:"auto"}}}));return()=>{const{center:s,border:i,square:l,gutter:d,reverse:u,direction:p,clickable:g}=t.props,f=[V("content",[p,{center:s,square:l,reverse:u,clickable:g,surround:i&&d}]),{[m]:i}];return n("div",{class:[V({square:l})],style:r.value},[n("div",{role:g?"button":void 0,class:f,style:c.value,tabindex:g?0:void 0,onClick:o},[a.default?a.default():[a.icon?n(v,b({dot:e.dot,content:e.badge},e.badgeProps),{default:a.icon}):e.icon?n(h,{dot:e.dot,name:e.icon,size:t.props.iconSize,badge:e.badge,class:V("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null):void 0,a.text?a.text():e.text?n("span",{class:V("text")},[e.text]):void 0]])])}}}));const O=o({__name:"menu",setup(e){const a=x(),{themeVars:t}=y(a),s=["#ff00ff","#ff0000","#0edd05","#FF6600","#0d6efe"],o=()=>{const e=s[function(e,a){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(a-e+1)+e,10);default:return 0}}(0,s.length-1)];console.log("color",e),t.value=F(e)};return(e,a)=>{const t=k,s=P("RouterLink"),r=D,i=N,c=P("ProPageWrap");return S(),_(c,{"main-class":"page-home"},{default:B((()=>[n(t,{type:"primary",onClick:o},{default:B((()=>[q("变化主题")])),_:1}),n(i,{"column-num":3},{default:B((()=>[(S(!0),C(T,null,z(j(w),(e=>(S(),_(r,{key:e.path,"link-type":"navigateTo"},{default:B((()=>[n(s,{to:e.path},{default:B((()=>[n(t,{size:"mini",type:"primary"},{default:B((()=>[q(L((null==e?void 0:e.meta.title)||e.name),1)])),_:2},1024)])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1})])),_:1})}}});export{O as default};
