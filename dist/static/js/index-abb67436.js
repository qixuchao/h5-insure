import{T as e,d as a,j as l,k as s,z as n,cK as t,cL as u,o as i,c as o,a as r,g as v,u as d,f as c,b as g,w as p,a8 as m,e as f,F as h,q as S,m as y,cM as w,p as _,_ as b,cN as k,aj as V,cO as C}from"./index-da20c37e.js";var A=e;const T={class:"sign-wrap"},U=["src"],j={class:"popup-body"},x={class:"sign-container-wrap"},N={class:"operate-bar"},R=a({name:"sign"});var z=b(a({...R,props:{option:{default:{}},modelValue:{default:()=>[]},signString:{default:"房间卡贺卡和大伙副书记环境发好"},signAccount:{default:3}},emits:["update:modelValue","submitSign"],setup(e,{expose:a,emit:b}){const R=e,z=l(!1),E=l(),I=l([]),L=l(0),q=s((()=>{if(R.signString&&R.signString.length>=R.signAccount){const e=[];let a=0;for(let l=0;l<=R.signString.length;l++)!l||l%R.signAccount||(a+=1),R.signString[l]&&(e[a]?e[a]+=R.signString[l]:e[a]=R.signString[l]);return e}return[R.signString||""]})),D=s((()=>{var e;const a=I.value.filter((e=>e));return(null==(e=q.value)?void 0:e.length)>(null==a?void 0:a.length)})),F=l(!0),K=l(),M=()=>{0!==L.value&&K.value&&(L.value-=1,K.value.swipeTo(L.value))},O=e=>{z.value=!0,e||setTimeout((()=>{var e;E.value&&((E.value||[]).forEach(((e,a)=>{var l,s;null==(s=e.setDataURL)||s.call(e,(null==(l=I.value)?void 0:l[a])||"")})),(null==(e=R.modelValue)?void 0:e.length)?F.value=!1:F.value=!0)}),200)},$=()=>{k({images:I.value,className:"customer-sign-preview"})},B=()=>{z.value=!1},G=()=>{if(L.value===q.value.length-1)return;L.value,R.signAccount;q.value[L.value].length,K.value&&(L.value+=1,K.value.swipeTo(L.value))},H=()=>{(E.value||[]).forEach(((e,a)=>{var l;a===L.value&&(null==(l=e.clear)||l.call(e))}))},J=()=>{var e,a;(null==(e=I.value)?void 0:e.length)<(null==(a=q.value)?void 0:a.length)?A({message:"请完成签名",className:"toast-vertical"}):(b("update:modelValue",I.value),b("submitSign",I.value),z.value=!1)};return n([()=>R.modelValue,()=>q.value],(()=>{I.value=(R.modelValue||[]).slice(0,q.value.length)}),{immediate:!0,deep:!0}),a({rewrite:H,openSign:O}),(e,a)=>{var l;const s=V,n=t,b=u,k=C;return i(),o(h,null,[r("div",T,[v(e.$slots,"signImg",{data:null==(l=d(I))?void 0:l[0]},(()=>{var a;return[d(I).length?(i(),o("img",{key:0,class:"preview-sign",src:null==(a=d(I))?void 0:a[0],alt:"",onClick:$},null,8,U)):c("",!0),g(s,{type:"primary",round:"",size:"small",onClick:O},{default:p((()=>[m(f(e.signString?"重新签名":"点击签字"),1)])),_:1})]}),!0)]),g(k,{show:d(z),"onUpdate:show":a[1]||(a[1]=e=>_(z)?z.value=e:null),position:"bottom",style:{height:"100%",overflow:"hidden"}},{default:p((()=>[r("div",j,[r("div",x,[g(b,{ref_key:"swipeRef",ref:K,vertical:"",loop:!1,"show-indicators":!1,touchable:!1},{default:p((()=>[(i(!0),o(h,null,S(d(q),((e,l)=>(i(),y(n,{key:l},{default:p((()=>[g(w,{ref_for:!0,ref_key:"signRef",ref:E,modelValue:d(I)[l],"onUpdate:modelValue":e=>d(I)[l]=e,placeholder:e,onStroke:a[0]||(a[0]=e=>F.value=!1),onSignSuccess:G},null,8,["modelValue","onUpdate:modelValue","placeholder"])])),_:2},1024)))),128))])),_:1},512),r("div",N,[g(s,{type:"primary",class:"btn",disabled:d(D),onClick:J},{default:p((()=>[m("确定")])),_:1},8,["disabled"]),g(s,{type:"primary",plain:"",class:"btn",onClick:M},{default:p((()=>[m("上一页")])),_:1}),g(s,{type:"primary",plain:"",class:"btn",onClick:H},{default:p((()=>[m("重签")])),_:1}),g(s,{type:"default",class:"btn",onClick:B},{default:p((()=>[m("取消")])),_:1})])])])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-5dfa327d"]]);export{z as S};
