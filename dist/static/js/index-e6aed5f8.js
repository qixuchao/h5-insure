import{T as e,d as a,j as l,k as s,z as n,cF as t,cG as u,o as i,c as o,a as r,g as v,u as d,f as c,b as g,w as p,a8 as m,e as f,F as h,q as S,m as y,cH as b,p as w,_,cI as k,ai as V,cJ as C}from"./index-7ae335cb.js";var A=e;const T={class:"sign-wrap"},U=["src"],x={class:"popup-body"},I={class:"sign-container-wrap"},R={class:"operate-bar"},j=a({name:"sign"});var z=_(a({...j,props:{option:{default:{}},modelValue:{default:()=>[]},signString:{default:"房间卡贺卡和大伙副书记环境发好"},signAccount:{default:3}},emits:["update:modelValue","submitSign"],setup(e,{expose:a,emit:_}){const j=e,z=l(!1),E=l(),F=l([]),N=l(0),q=s((()=>{if(j.signString&&j.signString.length>=j.signAccount){const e=[];let a=0;for(let l=0;l<=j.signString.length;l++)!l||l%j.signAccount||(a+=1),j.signString[l]&&(e[a]?e[a]+=j.signString[l]:e[a]=j.signString[l]);return e}return[j.signString||""]})),D=s((()=>{var e;const a=F.value.filter((e=>e));return(null==(e=q.value)?void 0:e.length)>(null==a?void 0:a.length)})),G=l(!0),H=l(),J=()=>{0!==N.value&&H.value&&(N.value-=1,H.value.swipeTo(N.value))},L=()=>{z.value=!0,setTimeout((()=>{var e;E.value&&((E.value||[]).forEach(((e,a)=>{var l,s;null==(s=e.setDataURL)||s.call(e,(null==(l=F.value)?void 0:l[a])||"")})),(null==(e=j.modelValue)?void 0:e.length)?G.value=!1:G.value=!0)}),200)},$=()=>{k({images:F.value,className:"customer-sign-preview"})},B=()=>{z.value=!1},K=()=>{if(N.value===q.value.length-1)return;N.value,j.signAccount;q.value[N.value].length,H.value&&(N.value+=1,H.value.swipeTo(N.value))},M=()=>{(E.value||[]).forEach(((e,a)=>{var l;a===N.value&&(null==(l=e.clear)||l.call(e))}))},O=()=>{var e,a;(null==(e=F.value)?void 0:e.length)<(null==(a=q.value)?void 0:a.length)?A({message:"请完成签名",className:"toast-vertical"}):(_("update:modelValue",F.value),_("submitSign",F.value),z.value=!1)};return n([()=>j.modelValue,()=>q.value],(()=>{F.value=(j.modelValue||[]).slice(0,q.value.length)}),{immediate:!0,deep:!0}),a({rewrite:M,openSign:L}),(e,a)=>{var l;const s=V,n=t,_=u,k=C;return i(),o(h,null,[r("div",T,[v(e.$slots,"signImg",{data:null==(l=d(F))?void 0:l[0]},(()=>{var a;return[d(F).length?(i(),o("img",{key:0,class:"preview-sign",src:null==(a=d(F))?void 0:a[0],alt:"",onClick:$},null,8,U)):c("",!0),g(s,{type:"primary",round:"",size:"small",onClick:L},{default:p((()=>[m(f(e.signString?"重新签名":"点击签字"),1)])),_:1})]}),!0)]),g(k,{show:d(z),"onUpdate:show":a[1]||(a[1]=e=>w(z)?z.value=e:null),position:"bottom",style:{height:"100%",overflow:"hidden"}},{default:p((()=>[r("div",x,[r("div",I,[g(_,{ref_key:"swipeRef",ref:H,vertical:"",loop:!1,"show-indicators":!1,touchable:!1},{default:p((()=>[(i(!0),o(h,null,S(d(q),((e,l)=>(i(),y(n,{key:l},{default:p((()=>[g(b,{ref_for:!0,ref_key:"signRef",ref:E,modelValue:d(F)[l],"onUpdate:modelValue":e=>d(F)[l]=e,placeholder:e,onStroke:a[0]||(a[0]=e=>G.value=!1),onSignSuccess:K},null,8,["modelValue","onUpdate:modelValue","placeholder"])])),_:2},1024)))),128))])),_:1},512),r("div",R,[g(s,{type:"primary",class:"btn",disabled:d(D),onClick:O},{default:p((()=>[m("确定")])),_:1},8,["disabled"]),g(s,{type:"primary",plain:"",class:"btn",onClick:J},{default:p((()=>[m("上一页")])),_:1}),g(s,{type:"primary",plain:"",class:"btn",onClick:M},{default:p((()=>[m("重签")])),_:1}),g(s,{type:"default",class:"btn",onClick:B},{default:p((()=>[m("取消")])),_:1})])])])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-d45e62ea"]]);export{z as S};
