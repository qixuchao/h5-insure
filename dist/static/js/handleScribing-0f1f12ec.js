import{d as e,j as a,k as s,o as t,c as l,a as n,F as i,q as c,e as o,n as r,b as u,w as d,u as v,m as p,a0 as m,a8 as g,T as f,d0 as h,cI as b,cG as x,cH as y,ai as k,h as w,i as C,cP as S}from"./index-8120d8cf.js";import{s as _,c as N}from"./scribing-9dc95c02.js";const T={class:"com-handle-scribing"},A={class:"sign-container-wrap"},V={class:"scribing-text"},I={class:"sign-wrap"},j={class:"sign-preview"},E={class:"scribing-text"},P={class:"sign-result"},q=["onClick"],H=["src"],L={class:"sign-list"},O={class:"sign-item"},R={class:"operate-bar"},U=e({name:"handleScribing"}),$=e({...U,props:{text:{default:""},modelValue:{default:()=>[]},signAccount:{default:1}},emits:["onSubmit","onCancel"],setup(e,{emit:w}){const C=e,S=a(0),_=a(),N=s((()=>{if(C.text&&C.text.length>=C.signAccount){const e=[];let a=0;for(let s=0;s<=C.text.length;s++)!s||s%C.signAccount||(a+=1),C.text[s]&&(e[a]?e[a]+=C.text[s]:e[a]=C.text[s]);return e}return[""]})),U=a([]);a("");const $=()=>{if(S.value===N.value.length-1)return;S.value,C.signAccount;N.value[S.value].length;let e="";N.value.forEach(((a,s)=>{s===S.value&&(U.value[s]||(e="请抄录当前页面文字"))})),e?f({message:e,className:"toast-vertical"}):_.value&&(S.value+=1,_.value.swipeTo(S.value))},D=()=>{0!==S.value&&_.value&&(S.value-=1,_.value.swipeTo(S.value))},F=()=>{w("onCancel")},G=()=>{var e;if((null==(e=U.value)?void 0:e.length)!==C.text.length)return void f({message:"请完成抄录",className:"toast-vertical"});const a=[];U.value.forEach((async(e,s)=>{a.push(h(e,270))})),Promise.all(a).then((e=>{const a=e.map(((e,a)=>({position:a+1,content:C.text[a],image:e})));w("onSubmit",a)}))};return(a,s)=>{const f=b,h=x,w=y,C=k;return t(),l("div",T,[n("div",A,[n("p",V,[(t(),l(i,null,c("请投保人抄录并确保内容清晰完整",((e,a)=>n("span",{key:a,class:"text-item"},o(e),1))),64))]),n("div",I,[n("div",j,[n("p",E,[(t(!0),l(i,null,c(e.text,((e,a)=>(t(),l("span",{key:a,class:r(`text-item ${S.value===a?"activity":""} `)},o(e),3)))),128))]),n("div",P,[(t(!0),l(i,null,c(U.value,((e,a)=>(t(),l("div",{key:a,class:"scribing-item",onClick:e=>(e=>{S.value=e,_.value.swipeTo(S.value)})(a)},[n("img",{src:e,alt:""},null,8,H)],8,q)))),128))])]),u(w,{ref_key:"swipeRef",ref:_,loop:!1,"initial-swipe":0,"show-indicators":!1,vertical:"",touchable:!1},{default:d((()=>[(t(!0),l(i,null,c(v(N),((e,s)=>(t(),p(h,{key:s},{default:d((()=>[n("div",L,[n("div",O,[(t(),p(f,m({ref_for:!0,ref:"signRef",key:s,modelValue:U.value[s],"onUpdate:modelValue":e=>U.value[s]=e,placeholder:e},a.$attrs,{onSignSuccess:$}),null,16,["modelValue","onUpdate:modelValue","placeholder"]))])])])),_:2},1024)))),128))])),_:1},512)]),n("div",R,[u(C,{plain:"",hairline:"",type:"primary",disabled:0===S.value,class:"btn",onClick:D},{default:d((()=>[g("后退")])),_:1},8,["disabled"]),u(C,{plain:"",hairline:"",type:"primary",class:"btn",onClick:F},{default:d((()=>[g("取消")])),_:1}),u(C,{type:"primary",class:"btn",onClick:G},{default:d((()=>[g("保存")])),_:1})])])])}}}),D={class:"handle-scribing-wrap"},F=e({name:"handleScribingPage"}),G=e({...F,setup(e){const a=w(),s=C(),{orderNo:n,text:i,tenantId:c}=s.query,o=()=>{a.back()},r=e=>{_({orderNo:n,tenantId:c,riskTranscriptionList:e}).then((({code:e,data:s})=>{"10000"===e&&N({content:i,image:"",orderNo:n,tenantId:c,transcriptionType:S.HANDLE}).then((({code:e})=>{"10000"===e&&a.back()}))}))};return(e,a)=>(t(),l("div",D,[u($,{text:v(i),closeable:"","has-bg":"",onOnCancel:o,onOnSubmit:r},null,8,["text"])]))}});export{G as default};
