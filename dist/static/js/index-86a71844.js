import{T as e,d as a,j as l,k as s,z as n,cy as t,cz as u,o as i,c as o,a as r,g as v,u as d,f as c,b as g,w as p,a8 as m,e as f,F as h,q as y,m as S,cA as w,p as _,_ as b,cB as k,ai as V,cC as C}from"./index-06e040e6.js";var A=e;const T={class:"sign-wrap"},U=["src"],x={class:"popup-body"},z={class:"sign-container-wrap"},R={class:"operate-bar"},j=a({name:"sign"});var E=b(a({...j,props:{option:{default:{}},modelValue:{default:()=>[]},signString:{default:"房间卡贺卡和大伙副书记环境发好"},signAccount:{default:3}},emits:["update:modelValue","submitSign"],setup(e,{expose:a,emit:b}){const j=e,E=l(!1),I=l(),N=l([]),q=l(0),B=s((()=>{if(j.signString&&j.signString.length>=j.signAccount){const e=[];let a=0;for(let l=0;l<=j.signString.length;l++)!l||l%j.signAccount||(a+=1),j.signString[l]&&(e[a]?e[a]+=j.signString[l]:e[a]=j.signString[l]);return e}return[j.signString||""]})),D=s((()=>{var e;const a=N.value.filter((e=>e));return(null==(e=B.value)?void 0:e.length)>(null==a?void 0:a.length)})),F=l(!0),L=l(),$=()=>{0!==q.value&&L.value&&(q.value-=1,L.value.swipeTo(q.value))},G=()=>{E.value=!0,setTimeout((()=>{var e;I.value&&((I.value||[]).forEach(((e,a)=>{var l,s;null==(s=e.setDataURL)||s.call(e,(null==(l=N.value)?void 0:l[a])||"")})),(null==(e=j.modelValue)?void 0:e.length)?F.value=!1:F.value=!0)}),200)},H=()=>{k({images:N.value,className:"customer-sign-preview"})},J=()=>{E.value=!1},K=()=>{if(q.value===B.value.length-1)return;q.value,j.signAccount;B.value[q.value].length,L.value&&(q.value+=1,L.value.swipeTo(q.value))},M=()=>{(I.value||[]).forEach(((e,a)=>{var l;a===q.value&&(null==(l=e.clear)||l.call(e))}))},O=()=>{var e,a;(null==(e=N.value)?void 0:e.length)<(null==(a=B.value)?void 0:a.length)?A({message:"请完成签名",className:"toast-vertical"}):(b("update:modelValue",N.value),b("submitSign",N.value),E.value=!1)};return n([()=>j.modelValue,()=>B.value],(()=>{N.value=(j.modelValue||[]).slice(0,B.value.length)}),{immediate:!0,deep:!0}),a({rewrite:M,openSign:G}),(e,a)=>{var l;const s=V,n=t,b=u,k=C;return i(),o(h,null,[r("div",T,[v(e.$slots,"signImg",{data:null==(l=d(N))?void 0:l[0]},(()=>{var a;return[d(N).length?(i(),o("img",{key:0,class:"preview-sign",src:null==(a=d(N))?void 0:a[0],alt:"",onClick:H},null,8,U)):c("",!0),g(s,{type:"primary",round:"",size:"small",onClick:G},{default:p((()=>[m(f(e.signString?"重新签名":"点击签字"),1)])),_:1})]}),!0)]),g(k,{show:d(E),"onUpdate:show":a[1]||(a[1]=e=>_(E)?E.value=e:null),position:"bottom",style:{height:"100%",overflow:"hidden"}},{default:p((()=>[r("div",x,[r("div",z,[g(b,{ref_key:"swipeRef",ref:L,vertical:"",loop:!1,"show-indicators":!1,touchable:!1},{default:p((()=>[(i(!0),o(h,null,y(d(B),((e,l)=>(i(),S(n,{key:l},{default:p((()=>[g(w,{ref_for:!0,ref_key:"signRef",ref:I,modelValue:d(N)[l],"onUpdate:modelValue":e=>d(N)[l]=e,placeholder:e,onStroke:a[0]||(a[0]=e=>F.value=!1),onSignSuccess:K},null,8,["modelValue","onUpdate:modelValue","placeholder"])])),_:2},1024)))),128))])),_:1},512),r("div",R,[g(s,{type:"primary",class:"btn",disabled:d(D),onClick:O},{default:p((()=>[m("确定")])),_:1},8,["disabled"]),g(s,{type:"primary",plain:"",class:"btn",onClick:$},{default:p((()=>[m("上一页")])),_:1}),g(s,{type:"primary",plain:"",class:"btn",onClick:M},{default:p((()=>[m("重签")])),_:1}),g(s,{type:"default",class:"btn",onClick:J},{default:p((()=>[m("取消")])),_:1})])])])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-d45e62ea"]]);export{E as S};
