import{a_ as e,bq as t,a$ as a,bE as s,d as o,bl as n,e as r,b1 as i,cN as c,b3 as l,bz as u,cO as d,by as p,cP as g,G as f,cQ as b,a6 as m,cR as v,aj as h,cS as x,an as y,B as P,Z as k,b as S,g as _,w as q,j as B,c as z,a4 as C,f as j,cT as T,U as N,c5 as R,$ as w}from"./index-4a5b2d76.js";const[F,I]=e("grid"),L={square:Boolean,center:t,border:t,gutter:a,reverse:Boolean,iconSize:a,direction:String,clickable:Boolean,columnNum:s(4)},M=Symbol(F);const O=l(o({name:F,props:L,setup(e,{slots:t}){const{linkChildren:a}=n(M);return a({props:e}),()=>{var a;return r("div",{style:{paddingLeft:i(e.gutter)},class:[I(),{[c]:e.border&&!e.gutter}]},[null==(a=t.default)?void 0:a.call(t)])}}})),[$,E]=e("grid-item");const G=l(o({name:$,props:u({},d,{dot:Boolean,text:String,icon:String,badge:a,iconColor:String,iconPrefix:String,badgeProps:Object}),setup(e,{slots:t}){const{parent:a,index:s}=p(M),o=g();if(!a)return;const n=f((()=>{const{square:e,gutter:t,columnNum:o}=a.props,n=100/+o+"%",r={flexBasis:n};if(e)r.paddingTop=n;else if(t){const e=i(t);r.paddingRight=e,s.value>=o&&(r.marginTop=e)}return r})),c=f((()=>{const{square:e,gutter:t}=a.props;if(e&&t){const e=i(t);return{right:e,bottom:e,height:"auto"}}}));return()=>{const{center:s,border:i,square:l,gutter:u,reverse:d,direction:p,clickable:g}=a.props,f=[E("content",[p,{center:s,square:l,reverse:d,clickable:g,surround:i&&u}]),{[b]:i}];return r("div",{class:[E({square:l})],style:n.value},[r("div",{role:g?"button":void 0,class:f,style:c.value,tabindex:g?0:void 0,onClick:o},[t.default?t.default():[t.icon?r(v,m({dot:e.dot,content:e.badge},e.badgeProps),{default:t.icon}):e.icon?r(h,{dot:e.dot,name:e.icon,size:a.props.iconSize,badge:e.badge,class:E("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null):void 0,t.text?t.text():e.text?r("span",{class:E("text")},[e.text]):void 0]])])}}}));const Q=o({__name:"menu",setup(e){const t=x(),{themeVars:a}=y(t),s=["#ff00ff","#ff0000","#0edd05","#FF6600","#0d6efe"],o=()=>{const e=s[function(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(t-e+1)+e,10);default:return 0}}(0,s.length-1)];console.log("color",e),a.value=R(e)};return(e,t)=>{const a=P,s=k("RouterLink"),n=G,i=O,c=k("ProPageWrap");return S(),_(c,{"main-class":"page-home"},{default:q((()=>[r(a,{type:"primary",onClick:o},{default:q((()=>[B("变化主题")])),_:1}),r(i,{"column-num":3},{default:q((()=>[(S(!0),z(N,null,C(j(T),(e=>(S(),_(n,{key:e.path,"link-type":"navigateTo"},{default:q((()=>[r(s,{to:e.path},{default:q((()=>[r(a,{size:"mini",type:"primary"},{default:q((()=>[B(w((null==e?void 0:e.meta.title)||e.name),1)])),_:2},1024)])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1})])),_:1})}}});export{Q as default};
