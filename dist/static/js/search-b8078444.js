import{v as t,d as e,j as s,A as o,z as a,c6 as i,k as n,bK as l,C as c,O as r,B as d,Q as f,b as p,c7 as g,K as u,y as h,c8 as v,S as w,E as A,R as m,D as x,c9 as C,ca as y,G as k,r as b,cb as z,X as N,cc as S,cd as I,H as M,ce as L,x as R,cf as V,bM as E}from"./index-7c0189e6.js";const[G,K]=t("index-bar"),O={sticky:u,zIndex:h,teleport:[String,Object],highlightColor:String,stickyOffsetTop:v(0),indexList:{type:Array,default:function(){const t="A".charCodeAt(0);return Array(26).fill("").map(((e,s)=>String.fromCharCode(t+s)))}}},P=Symbol(G);var B=e({name:G,props:O,emits:["select","change"],setup(t,{emit:e,slots:u}){const h=s(),v=s(),b=s(""),z=o(),N=a(h),{children:S,linkChildren:I}=i(P);let M;I({props:t});const L=n((()=>{if(l(t.zIndex))return{zIndex:+t.zIndex+1}})),R=n((()=>{if(t.highlightColor)return{color:t.highlightColor}})),V=(e,s)=>{for(let o=S.length-1;o>=0;o--){const a=o>0?s[o-1].height:0;if(e+(t.sticky?a+t.stickyOffsetTop:0)>=s[o].top)return o}return-1},E=t=>S.find((e=>String(e.index)===t)),G=()=>{if(w(h))return;const{sticky:e,indexList:s}=t,o=A(N.value),a=m(N),i=S.map((t=>t.getRect(N.value,a)));let n=-1;if(M){const t=E(M);if(t){const e=t.getRect(N.value,a);n=V(e.top,i)}}else n=V(o,i);b.value=s[n],e&&S.forEach(((e,s)=>{const{state:l,$el:c}=e;if(s===n||s===n-1){const t=c.getBoundingClientRect();l.left=t.left,l.width=t.width}else l.left=null,l.width=null;if(s===n)l.active=!0,l.top=Math.max(t.stickyOffsetTop,i[s].top-o)+a.top;else if(s===n-1&&""===M){const t=i[n].top-o;l.active=t>0,l.top=t+a.top-i[s].height}else l.active=!1})),M=""},O=()=>{x(G)};c("scroll",G,{target:N,passive:!0}),r(O),d((()=>t.indexList),O),d(b,(t=>{t&&e("change",t)}));const B=s=>{M=String(s);const o=E(M);if(o){const s=A(N.value),a=m(N),{offsetHeight:i}=document.documentElement;if(o.$el.scrollIntoView(),s===i-a.height)return void G();t.sticky&&t.stickyOffsetTop&&C(y()-t.stickyOffsetTop),e("select",o.index)}},T=t=>{const{index:e}=t.dataset;e&&B(e)},U=t=>{T(t.target)};let D;const j=()=>p("div",{ref:v,class:K("sidebar"),style:L.value,onClick:U,onTouchstartPassive:z.start},[t.indexList.map((t=>{const e=t===b.value;return p("span",{class:K("index",{active:e}),style:e?R.value:void 0,"data-index":t},[t])}))]);return f({scrollTo:B}),c("touchmove",(t=>{if(z.move(t),z.isVertical()){k(t);const{clientX:e,clientY:s}=t.touches[0],o=document.elementFromPoint(e,s);if(o){const{index:t}=o.dataset;t&&D!==t&&(D=t,T(o))}}}),{target:v}),()=>{var e;return p("div",{ref:h,class:K()},[t.teleport?p(g,{to:t.teleport},{default:()=>[j()]}):j(),null==(e=u.default)?void 0:e.call(u)])}}});const[T,U]=t("index-anchor");const D=M(e({name:T,props:{index:h},setup(t,{slots:e}){const o=b({top:0,left:null,rect:{top:0,height:0},width:null,active:!1}),a=s(),{parent:i}=z(P);if(!i)return;const l=()=>o.active&&i.props.sticky,c=n((()=>{const{zIndex:t,highlightColor:e}=i.props;if(l())return N(S(t),{left:o.left?`${o.left}px`:void 0,width:o.width?`${o.width}px`:void 0,transform:o.top?`translate3d(0, ${o.top}px, 0)`:void 0,color:e})}));return f({state:o,getRect:(t,e)=>{const s=m(a);return o.rect.height=s.height,t===window||t===document.body?o.rect.top=s.top+y():o.rect.top=s.top+A(t)-e.top,o.rect}}),()=>{const s=l();return p("div",{ref:a,style:{height:s?`${o.rect.height}px`:void 0}},[p("div",{style:c.value,class:[U({sticky:s}),{[I]:s}]},[e.default?e.default():t.index])])}}})),j=M(B),[Q,W]=t("swipe-cell");const X=M(e({name:Q,props:{name:R(""),disabled:Boolean,leftWidth:h,rightWidth:h,beforeClose:Function,stopPropagation:Boolean},emits:["open","close","click"],setup(t,{emit:e,slots:a}){let i,r,d;const g=s(),u=s(),h=s(),v=b({offset:0,dragging:!1}),w=o(),A=t=>t.value?m(t).width:0,x=n((()=>l(t.leftWidth)?+t.leftWidth:A(u))),C=n((()=>l(t.rightWidth)?+t.rightWidth:A(h))),y=s=>{v.offset="left"===s?x.value:-C.value,i||(i=!0,e("open",{name:t.name,position:s}))},z=s=>{v.offset=0,i&&(i=!1,e("close",{name:t.name,position:s}))},N=e=>{t.disabled||(d=v.offset,w.start(e))},S=()=>{v.dragging&&(v.dragging=!1,(t=>{const e=Math.abs(v.offset),s=i?.85:.15,o="left"===t?x.value:C.value;o&&e>o*s?y(t):z(t)})(v.offset>0?"left":"right"),setTimeout((()=>{r=!1}),0))},I=(s="outside")=>{e("click",s),i&&!r&&E(t.beforeClose,{args:[{name:t.name,position:s}],done:()=>z(s)})},M=(t,e)=>s=>{e&&s.stopPropagation(),I(t)},R=(t,e)=>{const s=a[t];if(s)return p("div",{ref:e,class:W(t),onClick:M(t,!0)},[s()])};return f({open:y,close:z}),L(g,(()=>I("outside")),{eventName:"touchstart"}),c("touchmove",(e=>{if(t.disabled)return;const{deltaX:s}=w;if(w.move(e),w.isHorizontal()){r=!0,v.dragging=!0;(!i||s.value*d<0)&&k(e,t.stopPropagation),v.offset=V(s.value+d,-C.value,x.value)}}),{target:g}),()=>{var t;const e={transform:`translate3d(${v.offset}px, 0, 0)`,transitionDuration:v.dragging?"0s":".6s"};return p("div",{ref:g,class:W(),onClick:M("cell",r),onTouchstartPassive:N,onTouchend:S,onTouchcancel:S},[p("div",{class:W("wrapper"),style:e},[R("left",u),null==(t=a.default)?void 0:t.call(a),R("right",h)])])}}}));var H="/static/png/female-321a465f.png",Y="/static/png/male-4ddd4d22.png",Z="/static/png/gender-76f48c97.png",J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAZlBMVEUAAAC0wNC1wdO/v/+zwNC0v9C0wM+0wNG2wdLCydm0wNC0wNC1wdCzwNC0wNC0wNC1wNC1v9G2wdS0wM+0wNC0wNCzwdG0wdCzwc+1wNK4wta6xtO1wdGzwNC0wc+1v9WzwdCzv89PygQeAAAAIXRSTlMA/DQE896qhEQLjvjX0cC5iUwk7Oamb2ZbKxkVf8d7GIfl18UPAAABK0lEQVRIx+1V25aDIAwkiEVUvNXe7G3z/z+5pKeHs2fJyqav7byIwwxJBKL64DUUi9ZL8V+1ti1gALRWqzwqjwBIoKevMvJ7j6SOAOzvq9nM8NQFPIezXkmngYewrA/jeKhLfLw2f6Y1GSB5p2PADokxE693LdB6x5/csSGudazhgrSa/lUVRcULpz8bMlRJXWQwZ8Yw0IxNeUvrDIyhDPzWMaVtAbFM+RMtZBUDS6FPCb3HAM3uJs3sE7oGRKNYGESoE3YXM2Wr2yVsHwxX3nANhl4cQVyD+CuJ90G407PwLOGX+LQK74MV3jjvRHcaYZJ0DcKmkPSldceSdL4yxsj2VpL7sdhER7Z7+5rKj47c/2FyNEoceUTHTckc0CmRA3BQEsetG5x6Z3wDxtkpoVPsMuQAAAAASUVORK5CYII=";export{D as I,X as S,j as a,J as b,H as f,Z as g,Y as m};
