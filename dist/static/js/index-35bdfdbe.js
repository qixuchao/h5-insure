import{T as e,d as a,j as l,k as s,B as n,cx as t,cy as u,o as i,c as o,a as r,g as v,u as d,f as c,b as g,w as p,a8 as m,e as f,F as h,q as y,m as S,cz as b,p as w,_,cA as k,ag as V,cB as C}from"./index-5f40fbf2.js";var A=e;const x={class:"sign-wrap"},T=["src"],U={class:"popup-body"},R={class:"sign-container-wrap"},j={class:"operate-bar"},z=a({name:"sign"});var B=_(a({...z,props:{option:{default:{}},modelValue:{default:()=>[]},signString:{default:"房间卡贺卡和大伙副书记环境发好"},signAccount:{default:3}},emits:["update:modelValue","submitSign"],setup(e,{expose:a,emit:_}){const z=e,B=l(!1),E=l(),I=l([]),N=l(0),q=s((()=>{if(z.signString&&z.signString.length>=z.signAccount){const e=[];let a=0;for(let l=0;l<=z.signString.length;l++)!l||l%z.signAccount||(a+=1),z.signString[l]&&(e[a]?e[a]+=z.signString[l]:e[a]=z.signString[l]);return e}return[z.signString||""]})),D=s((()=>{var e;const a=I.value.filter((e=>e));return(null==(e=q.value)?void 0:e.length)>(null==a?void 0:a.length)})),F=l(!0),L=l(),$=()=>{0!==N.value&&L.value&&(N.value-=1,L.value.swipeTo(N.value))},G=()=>{B.value=!0,setTimeout((()=>{var e;E.value&&((E.value||[]).forEach(((e,a)=>{var l,s;null==(s=e.setDataURL)||s.call(e,(null==(l=I.value)?void 0:l[a])||"")})),(null==(e=z.modelValue)?void 0:e.length)?F.value=!1:F.value=!0)}),200)},H=()=>{k({images:I.value,className:"customer-sign-preview"})},J=()=>{B.value=!1},K=()=>{if(N.value===q.value.length-1)return;N.value,z.signAccount;q.value[N.value].length,L.value&&(N.value+=1,L.value.swipeTo(N.value))},M=()=>{(E.value||[]).forEach(((e,a)=>{var l;a===N.value&&(null==(l=e.clear)||l.call(e))}))},O=()=>{var e,a;(null==(e=I.value)?void 0:e.length)<(null==(a=q.value)?void 0:a.length)?A({message:"请完成签名",className:"toast-vertical"}):(_("update:modelValue",I.value),_("submitSign",I.value),B.value=!1)};return n([()=>z.modelValue,()=>q.value],(()=>{I.value=(z.modelValue||[]).slice(0,q.value.length)}),{immediate:!0,deep:!0}),a({rewrite:M,openSign:G}),(e,a)=>{var l;const s=V,n=t,_=u,k=C;return i(),o(h,null,[r("div",x,[v(e.$slots,"signImg",{data:null==(l=d(I))?void 0:l[0]},(()=>{var a;return[d(I).length?(i(),o("img",{key:0,class:"preview-sign",src:null==(a=d(I))?void 0:a[0],alt:"",onClick:H},null,8,T)):c("",!0),g(s,{type:"primary",round:"",size:"small",onClick:G},{default:p((()=>[m(f(e.signString?"重新签名":"点击签字"),1)])),_:1})]}),!0)]),g(k,{show:d(B),"onUpdate:show":a[1]||(a[1]=e=>w(B)?B.value=e:null),position:"bottom",style:{height:"100%",overflow:"hidden"}},{default:p((()=>[r("div",U,[r("div",R,[g(_,{ref_key:"swipeRef",ref:L,vertical:"",loop:!1,"show-indicators":!1,touchable:!1},{default:p((()=>[(i(!0),o(h,null,y(d(q),((e,l)=>(i(),S(n,{key:l},{default:p((()=>[g(b,{ref_for:!0,ref_key:"signRef",ref:E,modelValue:d(I)[l],"onUpdate:modelValue":e=>d(I)[l]=e,placeholder:e,onStroke:a[0]||(a[0]=e=>F.value=!1),onSignSuccess:K},null,8,["modelValue","onUpdate:modelValue","placeholder"])])),_:2},1024)))),128))])),_:1},512),r("div",j,[g(s,{type:"primary",class:"btn",disabled:d(D),onClick:O},{default:p((()=>[m("确定")])),_:1},8,["disabled"]),g(s,{type:"primary",plain:"",class:"btn",onClick:$},{default:p((()=>[m("上一页")])),_:1}),g(s,{type:"primary",plain:"",class:"btn",onClick:M},{default:p((()=>[m("重签")])),_:1}),g(s,{type:"default",class:"btn",onClick:J},{default:p((()=>[m("取消")])),_:1})])])])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-d45e62ea"]]);export{B as S};
