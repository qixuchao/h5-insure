import{T as e,d as l,j as a,k as s,E as n,cR as u,cS as t,o as i,c as o,a as r,g as v,u as c,f as d,b as g,w as p,v as m,e as f,F as h,s as S,p as y,cT as b,q as w,_,cU as k,ar as V,cq as C}from"./index-308a6130.js";import{c as T}from"./cloneDeep-e32c65b9.js";var U=e;const A={class:"sign-wrap"},R=["src"],j={class:"popup-body"},x={class:"sign-container-wrap"},E={class:"operate-bar"},q=l({name:"sign"});var D=_(l({...q,props:{option:{default:{}},modelValue:{default:()=>[]},signString:{default:"房间卡贺卡和大伙副书记环境发好"},signAccount:{default:3}},emits:["update:modelValue","submitSign"],setup(e,{expose:l,emit:_}){const q=e,D=a(!1),I=a(),N=a([]),z=a([]),F=a(0),L=s((()=>{if(q.signString&&q.signString.length>=q.signAccount){const e=[];let l=0;for(let a=0;a<=q.signString.length;a++)!a||a%q.signAccount||(l+=1),q.signString[a]&&(e[l]?e[l]+=q.signString[a]:e[l]=q.signString[a]);return e}return[q.signString||""]})),$=s((()=>{var e;const l=N.value.filter((e=>e));return(null==(e=L.value)?void 0:e.length)>(null==l?void 0:l.length)})),B=a(!0),G=a(),H=()=>{0!==F.value&&G.value&&(F.value-=1,G.value.swipeTo(F.value))},J=e=>{D.value=!0,setTimeout((()=>{var l;I.value&&((I.value||[]).forEach(((l,a)=>{var s,n,u;e?null==(s=l.clear)||s.call(l):null==(u=l.setDataURL)||u.call(l,(null==(n=N.value)?void 0:n[a])||"")})),(null==(l=q.modelValue)?void 0:l.length)&&!e?B.value=!1:B.value=!0)}),200)},K=()=>{k({images:N.value,className:"customer-sign-preview"})},M=()=>{N.value=T(z.value),D.value=!1},O=()=>{if(F.value===L.value.length-1)return;F.value,q.signAccount;L.value[F.value].length,G.value&&(F.value+=1,G.value.swipeTo(F.value))},P=()=>{(I.value||[]).forEach(((e,l)=>{var a;l===F.value&&(null==(a=e.clear)||a.call(e))}))},Q=()=>{var e,l;(null==(e=N.value)?void 0:e.length)<(null==(l=L.value)?void 0:l.length)?U({message:"请完成签名",className:"toast-vertical"}):(_("update:modelValue",N.value),_("submitSign",N.value),D.value=!1)};return n([()=>q.modelValue,()=>L.value],(()=>{N.value=(q.modelValue||[]).slice(0,L.value.length),z.value=(q.modelValue||[]).slice(0,L.value.length)}),{immediate:!0,deep:!0}),l({rewrite:P,openSign:J}),(e,l)=>{var a,s;const n=V,_=u,k=t,T=C;return i(),o(h,null,[r("div",A,[v(e.$slots,"signImg",{data:(null==(a=c(z))?void 0:a[0])||(null==(s=c(N))?void 0:s[0])},(()=>{var l,a;return[c(N).length?(i(),o("img",{key:0,class:"preview-sign",src:(null==(l=c(z))?void 0:l[0])||(null==(a=c(N))?void 0:a[0]),alt:"",onClick:K},null,8,R)):d("",!0),g(n,{type:"primary",round:"",size:"small",onClick:J},{default:p((()=>[m(f(e.signString?"重新签名":"点击签字"),1)])),_:1})]}),!0)]),g(T,{show:c(D),"onUpdate:show":l[1]||(l[1]=e=>w(D)?D.value=e:null),position:"bottom",style:{height:"100%",overflow:"hidden"}},{default:p((()=>[r("div",j,[r("div",x,[g(k,{ref_key:"swipeRef",ref:G,vertical:"",loop:!1,"show-indicators":!1,touchable:!1},{default:p((()=>[(i(!0),o(h,null,S(c(L),((e,a)=>(i(),y(_,{key:a},{default:p((()=>[g(b,{ref_for:!0,ref_key:"signRef",ref:I,modelValue:c(N)[a],"onUpdate:modelValue":e=>c(N)[a]=e,placeholder:e,onStroke:l[0]||(l[0]=e=>B.value=!1),onSignSuccess:O},null,8,["modelValue","onUpdate:modelValue","placeholder"])])),_:2},1024)))),128))])),_:1},512),r("div",E,[g(n,{type:"primary",class:"btn",disabled:c($),onClick:Q},{default:p((()=>[m("确定")])),_:1},8,["disabled"]),g(n,{type:"primary",plain:"",class:"btn",onClick:H},{default:p((()=>[m("上一页")])),_:1}),g(n,{type:"primary",plain:"",class:"btn",onClick:P},{default:p((()=>[m("重签")])),_:1}),g(n,{type:"default",class:"btn",onClick:M},{default:p((()=>[m("取消")])),_:1})])])])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-841501e8"]]);export{D as S};
