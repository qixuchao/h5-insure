import{T as e,d as a,j as l,k as s,z as n,cq as t,cr as u,o as i,c as o,a as r,g as v,u as d,f as c,b as g,w as p,a8 as m,e as f,F as h,q as S,m as y,cs as b,p as w,_,ct as k,ag as V,cu as C}from"./index-4bfdf329.js";var A=e;const T={class:"sign-wrap"},U=["src"],x={class:"popup-body"},R={class:"sign-container-wrap"},j={class:"operate-bar"},q=a({name:"sign"});var z=_(a({...q,props:{option:{default:{}},modelValue:{default:()=>[]},signString:{default:"房间卡贺卡和大伙副书记环境发好"},signAccount:{default:3}},emits:["update:modelValue","submitSign"],setup(e,{expose:a,emit:_}){const q=e,z=l(!1),E=l(),I=l([]),N=l(0),D=s((()=>{if(q.signString&&q.signString.length>=q.signAccount){const e=[];let a=0;for(let l=0;l<=q.signString.length;l++)!l||l%q.signAccount||(a+=1),q.signString[l]&&(e[a]?e[a]+=q.signString[l]:e[a]=q.signString[l]);return e}return[q.signString||""]})),F=s((()=>{var e;const a=I.value.filter((e=>e));return(null==(e=D.value)?void 0:e.length)>(null==a?void 0:a.length)})),L=l(!0),$=l(),B=()=>{0!==N.value&&$.value&&(N.value-=1,$.value.swipeTo(N.value))},G=()=>{z.value=!0,setTimeout((()=>{var e;E.value&&((E.value||[]).forEach(((e,a)=>{var l,s;null==(s=e.setDataURL)||s.call(e,(null==(l=I.value)?void 0:l[a])||"")})),(null==(e=q.modelValue)?void 0:e.length)?L.value=!1:L.value=!0)}),200)},H=()=>{k({images:I.value,className:"customer-sign-preview"})},J=()=>{z.value=!1},K=()=>{if(N.value===D.value.length-1)return;N.value,q.signAccount;D.value[N.value].length,$.value&&(N.value+=1,$.value.swipeTo(N.value))},M=()=>{(E.value||[]).forEach(((e,a)=>{var l;a===N.value&&(null==(l=e.clear)||l.call(e))}))},O=()=>{var e,a;(null==(e=I.value)?void 0:e.length)<(null==(a=D.value)?void 0:a.length)?A({message:"请完成签名",className:"toast-vertical"}):(_("update:modelValue",I.value),_("submitSign",I.value),z.value=!1)};return n([()=>q.modelValue,()=>D.value],(()=>{I.value=(q.modelValue||[]).slice(0,D.value.length)}),{immediate:!0,deep:!0}),a({rewrite:M,openSign:G}),(e,a)=>{var l;const s=V,n=t,_=u,k=C;return i(),o(h,null,[r("div",T,[v(e.$slots,"signImg",{data:null==(l=d(I))?void 0:l[0]},(()=>{var a;return[d(I).length?(i(),o("img",{key:0,class:"preview-sign",src:null==(a=d(I))?void 0:a[0],alt:"",onClick:H},null,8,U)):c("",!0),g(s,{type:"primary",round:"",size:"small",onClick:G},{default:p((()=>[m(f(e.signString?"重新签名":"点击签字"),1)])),_:1})]}),!0)]),g(k,{show:d(z),"onUpdate:show":a[1]||(a[1]=e=>w(z)?z.value=e:null),position:"bottom",style:{height:"100%",overflow:"hidden"}},{default:p((()=>[r("div",x,[r("div",R,[g(_,{ref_key:"swipeRef",ref:$,vertical:"",loop:!1,"show-indicators":!1,touchable:!1},{default:p((()=>[(i(!0),o(h,null,S(d(D),((e,l)=>(i(),y(n,{key:l},{default:p((()=>[g(b,{ref_for:!0,ref_key:"signRef",ref:E,modelValue:d(I)[l],"onUpdate:modelValue":e=>d(I)[l]=e,placeholder:e,onStroke:a[0]||(a[0]=e=>L.value=!1),onSignSuccess:K},null,8,["modelValue","onUpdate:modelValue","placeholder"])])),_:2},1024)))),128))])),_:1},512),r("div",j,[g(s,{type:"primary",class:"btn",disabled:d(F),onClick:O},{default:p((()=>[m("确定")])),_:1},8,["disabled"]),g(s,{type:"primary",plain:"",class:"btn",onClick:B},{default:p((()=>[m("上一页")])),_:1}),g(s,{type:"primary",plain:"",class:"btn",onClick:M},{default:p((()=>[m("重签")])),_:1}),g(s,{type:"default",class:"btn",onClick:J},{default:p((()=>[m("取消")])),_:1})])])])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-d45e62ea"]]);export{z as S};
