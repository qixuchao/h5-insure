import{T as e,d as l,j as a,k as s,E as n,cS as u,cT as t,o as i,c as o,a as r,g as v,u as d,f as c,b as g,w as p,v as m,e as f,F as h,s as S,p as y,cU as w,q as _,_ as b,cV as k,ar as V,cs as C}from"./index-ea829f03.js";import{c as T}from"./cloneDeep-ad1af6ea.js";var U=e;const A={class:"sign-wrap"},j=["src"],x={class:"popup-body"},E={class:"sign-container-wrap"},R={class:"operate-bar"},D=l({name:"sign"});var I=b(l({...D,props:{option:{default:{}},modelValue:{default:()=>[]},signString:{default:"房间卡贺卡和大伙副书记环境发好"},signAccount:{default:3}},emits:["update:modelValue","submitSign"],setup(e,{expose:l,emit:b}){const D=e,I=a(!1),N=a(),q=a([]),z=a([]),F=a(0),L=s((()=>{if(D.signString&&D.signString.length>=D.signAccount){const e=[];let l=0;for(let a=0;a<=D.signString.length;a++)!a||a%D.signAccount||(l+=1),D.signString[a]&&(e[l]?e[l]+=D.signString[a]:e[l]=D.signString[a]);return e}return[D.signString||""]})),$=s((()=>{var e;const l=q.value.filter((e=>e));return(null==(e=L.value)?void 0:e.length)>(null==l?void 0:l.length)})),B=a(!0),G=a(),H=()=>{0!==F.value&&G.value&&(F.value-=1,G.value.swipeTo(F.value))},J=e=>{I.value=!0,setTimeout((()=>{var l;N.value&&((N.value||[]).forEach(((l,a)=>{var s,n,u;e?null==(s=l.clear)||s.call(l):null==(u=l.setDataURL)||u.call(l,(null==(n=q.value)?void 0:n[a])||"")})),(null==(l=D.modelValue)?void 0:l.length)&&!e?B.value=!1:B.value=!0)}),200)},K=()=>{k({images:q.value,className:"customer-sign-preview"})},M=()=>{q.value=T(z.value),I.value=!1},O=()=>{if(F.value===L.value.length-1)return;F.value,D.signAccount;L.value[F.value].length,G.value&&(F.value+=1,G.value.swipeTo(F.value))},P=()=>{(N.value||[]).forEach(((e,l)=>{var a;l===F.value&&(null==(a=e.clear)||a.call(e))}))},Q=()=>{var e,l;(null==(e=q.value)?void 0:e.length)<(null==(l=L.value)?void 0:l.length)?U({message:"请完成签名",className:"toast-vertical"}):(b("update:modelValue",q.value),b("submitSign",q.value),I.value=!1)};return n([()=>D.modelValue,()=>L.value],(()=>{q.value=(D.modelValue||[]).slice(0,L.value.length),z.value=(D.modelValue||[]).slice(0,L.value.length)}),{immediate:!0,deep:!0}),l({rewrite:P,openSign:J}),(e,l)=>{var a,s;const n=V,b=u,k=t,T=C;return i(),o(h,null,[r("div",A,[v(e.$slots,"signImg",{data:(null==(a=d(z))?void 0:a[0])||(null==(s=d(q))?void 0:s[0])},(()=>{var l,a;return[d(q).length?(i(),o("img",{key:0,class:"preview-sign",src:(null==(l=d(z))?void 0:l[0])||(null==(a=d(q))?void 0:a[0]),alt:"",onClick:K},null,8,j)):c("",!0),g(n,{type:"primary",round:"",size:"small",onClick:J},{default:p((()=>[m(f(e.signString?"重新签名":"点击签字"),1)])),_:1})]}),!0)]),g(T,{show:d(I),"onUpdate:show":l[1]||(l[1]=e=>_(I)?I.value=e:null),position:"bottom",style:{height:"100%",overflow:"hidden"}},{default:p((()=>[r("div",x,[r("div",E,[g(k,{ref_key:"swipeRef",ref:G,vertical:"",loop:!1,"show-indicators":!1,touchable:!1},{default:p((()=>[(i(!0),o(h,null,S(d(L),((e,a)=>(i(),y(b,{key:a},{default:p((()=>[g(w,{ref_for:!0,ref_key:"signRef",ref:N,modelValue:d(q)[a],"onUpdate:modelValue":e=>d(q)[a]=e,placeholder:e,onStroke:l[0]||(l[0]=e=>B.value=!1),onSignSuccess:O},null,8,["modelValue","onUpdate:modelValue","placeholder"])])),_:2},1024)))),128))])),_:1},512),r("div",R,[g(n,{type:"primary",class:"btn",disabled:d($),onClick:Q},{default:p((()=>[m("确定")])),_:1},8,["disabled"]),g(n,{type:"primary",plain:"",class:"btn",onClick:H},{default:p((()=>[m("上一页")])),_:1}),g(n,{type:"primary",plain:"",class:"btn",onClick:P},{default:p((()=>[m("重签")])),_:1}),g(n,{type:"default",class:"btn",onClick:M},{default:p((()=>[m("取消")])),_:1})])])])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-841501e8"]]);export{I as S};
