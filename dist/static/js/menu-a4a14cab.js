import{aG as e,aM as t,aN as a,aL as s,d as o,cc as r,i as n,aH as i,cu as c,aU as l,bP as u,cv as d,c8 as p,cw as g,L as f,cx as m,a9 as b,cy as v,ax as x,cz as h,b1 as y,B as P,b as k,c as S,e as _,w as q,j as B,A as z,V as C,g as j,cA as L,U as w,cf as M,E as N}from"./index-9598ace6.js";import"./pdfh5-008ca364.js";const[T,A]=e("grid"),F={square:Boolean,center:t,border:t,gutter:a,reverse:Boolean,iconSize:a,direction:String,clickable:Boolean,columnNum:s(4)},I=Symbol(T);const R=l(o({name:T,props:F,setup(e,{slots:t}){const{linkChildren:a}=r(I);return a({props:e}),()=>{var a;return n("div",{style:{paddingLeft:i(e.gutter)},class:[A(),{[c]:e.border&&!e.gutter}]},[null==(a=t.default)?void 0:a.call(t)])}}})),[U,V]=e("grid-item");const E=l(o({name:U,props:u({},d,{dot:Boolean,text:String,icon:String,badge:a,iconColor:String,iconPrefix:String,badgeProps:Object}),setup(e,{slots:t}){const{parent:a,index:s}=p(I),o=g();if(!a)return;const r=f((()=>{const{square:e,gutter:t,columnNum:o}=a.props,r=100/+o+"%",n={flexBasis:r};if(e)n.paddingTop=r;else if(t){const e=i(t);n.paddingRight=e,s.value>=o&&(n.marginTop=e)}return n})),c=f((()=>{const{square:e,gutter:t}=a.props;if(e&&t){const e=i(t);return{right:e,bottom:e,height:"auto"}}}));return()=>{const{center:s,border:i,square:l,gutter:u,reverse:d,direction:p,clickable:g}=a.props,f=[V("content",[p,{center:s,square:l,reverse:d,clickable:g,surround:i&&u}]),{[m]:i}];return n("div",{class:[V({square:l})],style:r.value},[n("div",{role:g?"button":void 0,class:f,style:c.value,tabindex:g?0:void 0,onClick:o},[t.default?t.default():[t.icon?n(v,b({dot:e.dot,content:e.badge},e.badgeProps),{default:t.icon}):e.icon?n(x,{dot:e.dot,name:e.icon,size:a.props.iconSize,badge:e.badge,class:V("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null):void 0,t.text?t.text():e.text?n("span",{class:V("text")},[e.text]):void 0]])])}}}));const G=o({__name:"menu",setup(e){const t=h(),{themeVars:a}=y(t),s=["#ff00ff","#ff0000","#0edd05","#FF6600","#0d6efe"],o=()=>{const e=s[function(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(t-e+1)+e,10);default:return 0}}(0,s.length-1)];console.log("color",e),a.value=M(e)};return(e,t)=>{const a=P,s=k("RouterLink"),r=E,i=R,c=k("ProPageWrap");return S(),_(c,{"main-class":"page-home"},{default:q((()=>[n(a,{type:"primary",onClick:o},{default:q((()=>[B("变化主题")])),_:1}),n(i,{"column-num":3},{default:q((()=>[(S(!0),z(w,null,C(j(L),(e=>(S(),_(r,{key:e.path,"link-type":"navigateTo"},{default:q((()=>[n(s,{to:e.path},{default:q((()=>[n(a,{size:"mini",type:"primary"},{default:q((()=>[B(N((null==e?void 0:e.meta.title)||e.name),1)])),_:2},1024)])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1})])),_:1})}}});export{G as default};
