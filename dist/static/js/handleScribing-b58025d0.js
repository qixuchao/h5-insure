import{d as e,j as a,k as s,o as t,c as l,a as n,F as i,q as c,e as o,n as r,b as u,w as d,u as v,m as p,a0 as m,a8 as g,T as b,d5 as f,cN as h,cL as x,cM as y,aj as k,h as w,i as C,cU as N}from"./index-081cd25a.js";import{s as S,c as _}from"./scribing-0911b4cc.js";const T={class:"com-handle-scribing"},A={class:"sign-container-wrap"},V={class:"scribing-text"},j={class:"sign-wrap"},E={class:"sign-preview"},I={class:"scribing-text"},L={class:"sign-result"},U=["onClick"],q=["src"],O={class:"sign-list"},P={class:"sign-item"},R={class:"operate-bar"},$=e({name:"handleScribing"}),D=e({...$,props:{text:{default:""},modelValue:{default:()=>[]},signAccount:{default:1}},emits:["onSubmit","onCancel"],setup(e,{emit:w}){const C=e,N=a(0),S=a(),_=s((()=>{if(C.text&&C.text.length>=C.signAccount){const e=[];let a=0;for(let s=0;s<=C.text.length;s++)!s||s%C.signAccount||(a+=1),C.text[s]&&(e[a]?e[a]+=C.text[s]:e[a]=C.text[s]);return e}return[""]})),$=a([]);a("");const D=()=>{if(N.value===_.value.length-1)return;N.value,C.signAccount;_.value[N.value].length;let e="";_.value.forEach(((a,s)=>{s===N.value&&($.value[s]||(e="请抄录当前页面文字"))})),e?b({message:e,className:"toast-vertical"}):S.value&&(N.value+=1,S.value.swipeTo(N.value))},F=()=>{0!==N.value&&S.value&&(N.value-=1,S.value.swipeTo(N.value))},H=()=>{w("onCancel")},M=()=>{var e;if((null==(e=$.value)?void 0:e.length)!==C.text.length)return void b({message:"请完成抄录",className:"toast-vertical"});const a=[];$.value.forEach((async(e,s)=>{a.push(f(e,270))})),Promise.all(a).then((e=>{const a=e.map(((e,a)=>({position:a+1,content:C.text[a],image:e})));w("onSubmit",a)}))};return(e,a)=>{const s=h,b=x,f=y,w=k;return t(),l("div",T,[n("div",A,[n("p",V,[(t(),l(i,null,c("请投保人抄录并确保内容清晰完整",((e,a)=>n("span",{key:a,class:"text-item"},o(e),1))),64))]),n("div",j,[n("div",E,[n("p",I,[(t(!0),l(i,null,c(e.text,((e,a)=>(t(),l("span",{key:a,class:r(`text-item ${N.value===a?"activity":""} `)},o(e),3)))),128))]),n("div",L,[(t(!0),l(i,null,c($.value,((e,a)=>(t(),l("div",{key:a,class:"scribing-item",onClick:e=>(e=>{N.value=e,S.value.swipeTo(N.value)})(a)},[n("img",{src:e,alt:""},null,8,q)],8,U)))),128))])]),u(f,{ref_key:"swipeRef",ref:S,loop:!1,"initial-swipe":0,"show-indicators":!1,vertical:"",touchable:!1},{default:d((()=>[(t(!0),l(i,null,c(v(_),((a,l)=>(t(),p(b,{key:l},{default:d((()=>[n("div",O,[n("div",P,[(t(),p(s,m({ref_for:!0,ref:"signRef",key:l,modelValue:$.value[l],"onUpdate:modelValue":e=>$.value[l]=e,placeholder:a},e.$attrs,{onSignSuccess:D}),null,16,["modelValue","onUpdate:modelValue","placeholder"]))])])])),_:2},1024)))),128))])),_:1},512)]),n("div",R,[u(w,{plain:"",hairline:"",type:"primary",disabled:0===N.value,class:"btn",onClick:F},{default:d((()=>[g("后退")])),_:1},8,["disabled"]),u(w,{plain:"",hairline:"",type:"primary",class:"btn",onClick:H},{default:d((()=>[g("取消")])),_:1}),u(w,{type:"primary",class:"btn",onClick:M},{default:d((()=>[g("保存")])),_:1})])])])}}}),F={class:"handle-scribing-wrap"},H=e({name:"handleScribingPage"}),M=e({...H,setup(e){const a=w(),s=C(),{orderNo:n,text:i,tenantId:c}=s.query,o=()=>{a.back()},r=e=>{S({orderNo:n,tenantId:c,riskTranscriptionList:e}).then((({code:e,data:s})=>{"10000"===e&&_({content:i,image:"",orderNo:n,tenantId:c,transcriptionType:N.HANDLE}).then((({code:e})=>{"10000"===e&&a.back()}))}))};return(e,a)=>(t(),l("div",F,[u(D,{text:v(i),closeable:"","has-bg":"",onOnCancel:o,onOnSubmit:r},null,8,["text"])]))}});export{M as default};
