import{av as e,aC as t,aD as a,aB as s,d as o,cf as r,e as n,aw as i,cw as c,aK as l,bT as u,cx as d,cb as p,cy as f,L as g,cz as m,a9 as b,cA as v,au as h,cB as x,b4 as y,B as k,bz as P,b as B,g as S,w as _,j as C,c as q,V as z,f as j,cC as w,U as T,bQ as L,E as F}from"./index-6e6fc42f.js";import"./pdfh5-008ca364.js";const[I,M]=e("grid"),N={square:Boolean,center:t,border:t,gutter:a,reverse:Boolean,iconSize:a,direction:String,clickable:Boolean,columnNum:s(4)},R=Symbol(I);const V=l(o({name:I,props:N,setup(e,{slots:t}){const{linkChildren:a}=r(R);return a({props:e}),()=>{var a;return n("div",{style:{paddingLeft:i(e.gutter)},class:[M(),{[c]:e.border&&!e.gutter}]},[null==(a=t.default)?void 0:a.call(t)])}}})),[A,D]=e("grid-item");const E=l(o({name:A,props:u({},d,{dot:Boolean,text:String,icon:String,badge:a,iconColor:String,iconPrefix:String,badgeProps:Object}),setup(e,{slots:t}){const{parent:a,index:s}=p(R),o=f();if(!a)return;const r=g((()=>{const{square:e,gutter:t,columnNum:o}=a.props,r=100/+o+"%",n={flexBasis:r};if(e)n.paddingTop=r;else if(t){const e=i(t);n.paddingRight=e,s.value>=o&&(n.marginTop=e)}return n})),c=g((()=>{const{square:e,gutter:t}=a.props;if(e&&t){const e=i(t);return{right:e,bottom:e,height:"auto"}}}));return()=>{const{center:s,border:i,square:l,gutter:u,reverse:d,direction:p,clickable:f}=a.props,g=[D("content",[p,{center:s,square:l,reverse:d,clickable:f,surround:i&&u}]),{[m]:i}];return n("div",{class:[D({square:l})],style:r.value},[n("div",{role:f?"button":void 0,class:g,style:c.value,tabindex:f?0:void 0,onClick:o},[t.default?t.default():[t.icon?n(v,b({dot:e.dot,content:e.badge},e.badgeProps),{default:t.icon}):e.icon?n(h,{dot:e.dot,name:e.icon,size:a.props.iconSize,badge:e.badge,class:D("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null):void 0,t.text?t.text():e.text?n("span",{class:D("text")},[e.text]):void 0]])])}}}));const K=o({__name:"menu",setup(e){const t=x(),{themeVars:a}=y(t),s=["#ff00ff","#ff0000","#0edd05","#FF6600","#0d6efe"],o=()=>{const e=s[function(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(t-e+1)+e,10);default:return 0}}(0,s.length-1)];console.log("color",e),a.value=L(e)};return(e,t)=>{const a=k,s=P("RouterLink"),r=E,i=V,c=P("ProPageWrap");return B(),S(c,{"main-class":"page-home"},{default:_((()=>[n(a,{type:"primary",onClick:o},{default:_((()=>[C("变化主题")])),_:1}),n(i,{"column-num":3},{default:_((()=>[(B(!0),q(T,null,z(j(w),(e=>(B(),S(r,{key:e.path,"link-type":"navigateTo"},{default:_((()=>[n(s,{to:e.path},{default:_((()=>[n(a,{size:"mini",type:"primary"},{default:_((()=>[C(F((null==e?void 0:e.meta.title)||e.name),1)])),_:2},1024)])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1})])),_:1})}}});export{K as default};
