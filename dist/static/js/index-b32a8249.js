import{T as e,d as l,j as a,k as s,A as n,cL as u,cM as t,o as i,c as o,a as r,g as v,u as c,f as d,b as g,w as p,a8 as m,e as f,F as h,s as S,p as y,cN as w,q as _,_ as b,cO as k,aj as V,cf as C}from"./index-37af9da6.js";import{c as A}from"./cloneDeep-ce4dc7ec.js";var j=e;const T={class:"sign-wrap"},U=["src"],x={class:"popup-body"},N={class:"sign-container-wrap"},R={class:"operate-bar"},D=l({name:"sign"});var E=b(l({...D,props:{option:{default:{}},modelValue:{default:()=>[]},signString:{default:"房间卡贺卡和大伙副书记环境发好"},signAccount:{default:3}},emits:["update:modelValue","submitSign"],setup(e,{expose:l,emit:b}){const D=e,E=a(!1),I=a(),L=a([]),q=a([]),z=a(0),F=s((()=>{if(D.signString&&D.signString.length>=D.signAccount){const e=[];let l=0;for(let a=0;a<=D.signString.length;a++)!a||a%D.signAccount||(l+=1),D.signString[a]&&(e[l]?e[l]+=D.signString[a]:e[l]=D.signString[a]);return e}return[D.signString||""]})),M=s((()=>{var e;const l=L.value.filter((e=>e));return(null==(e=F.value)?void 0:e.length)>(null==l?void 0:l.length)})),O=a(!0),$=a(),B=()=>{0!==z.value&&$.value&&(z.value-=1,$.value.swipeTo(z.value))},G=e=>{E.value=!0,setTimeout((()=>{var l;I.value&&((I.value||[]).forEach(((l,a)=>{var s,n,u;e?null==(s=l.clear)||s.call(l):null==(u=l.setDataURL)||u.call(l,(null==(n=L.value)?void 0:n[a])||"")})),(null==(l=D.modelValue)?void 0:l.length)&&!e?O.value=!1:O.value=!0)}),200)},H=()=>{k({images:L.value,className:"customer-sign-preview"})},J=()=>{L.value=A(q.value),E.value=!1},K=()=>{if(z.value===F.value.length-1)return;z.value,D.signAccount;F.value[z.value].length,$.value&&(z.value+=1,$.value.swipeTo(z.value))},P=()=>{(I.value||[]).forEach(((e,l)=>{var a;l===z.value&&(null==(a=e.clear)||a.call(e))}))},Q=()=>{var e,l;(null==(e=L.value)?void 0:e.length)<(null==(l=F.value)?void 0:l.length)?j({message:"请完成签名",className:"toast-vertical"}):(b("update:modelValue",L.value),b("submitSign",L.value),E.value=!1)};return n([()=>D.modelValue,()=>F.value],(()=>{L.value=(D.modelValue||[]).slice(0,F.value.length),q.value=(D.modelValue||[]).slice(0,F.value.length)}),{immediate:!0,deep:!0}),l({rewrite:P,openSign:G}),(e,l)=>{var a,s;const n=V,b=u,k=t,A=C;return i(),o(h,null,[r("div",T,[v(e.$slots,"signImg",{data:(null==(a=c(q))?void 0:a[0])||(null==(s=c(L))?void 0:s[0])},(()=>{var l,a;return[c(L).length?(i(),o("img",{key:0,class:"preview-sign",src:(null==(l=c(q))?void 0:l[0])||(null==(a=c(L))?void 0:a[0]),alt:"",onClick:H},null,8,U)):d("",!0),g(n,{type:"primary",round:"",size:"small",onClick:G},{default:p((()=>[m(f(e.signString?"重新签名":"点击签字"),1)])),_:1})]}),!0)]),g(A,{show:c(E),"onUpdate:show":l[1]||(l[1]=e=>_(E)?E.value=e:null),position:"bottom",style:{height:"100%",overflow:"hidden"}},{default:p((()=>[r("div",x,[r("div",N,[g(k,{ref_key:"swipeRef",ref:$,vertical:"",loop:!1,"show-indicators":!1,touchable:!1},{default:p((()=>[(i(!0),o(h,null,S(c(F),((e,a)=>(i(),y(b,{key:a},{default:p((()=>[g(w,{ref_for:!0,ref_key:"signRef",ref:I,modelValue:c(L)[a],"onUpdate:modelValue":e=>c(L)[a]=e,placeholder:e,onStroke:l[0]||(l[0]=e=>O.value=!1),onSignSuccess:K},null,8,["modelValue","onUpdate:modelValue","placeholder"])])),_:2},1024)))),128))])),_:1},512),r("div",R,[g(n,{type:"primary",class:"btn",disabled:c(M),onClick:Q},{default:p((()=>[m("确定")])),_:1},8,["disabled"]),g(n,{type:"primary",plain:"",class:"btn",onClick:B},{default:p((()=>[m("上一页")])),_:1}),g(n,{type:"primary",plain:"",class:"btn",onClick:P},{default:p((()=>[m("重签")])),_:1}),g(n,{type:"default",class:"btn",onClick:J},{default:p((()=>[m("取消")])),_:1})])])])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-841501e8"]]);export{E as S};
