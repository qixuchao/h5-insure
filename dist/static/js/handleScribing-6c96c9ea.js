import{d as e,j as a,k as s,o as t,c as l,a as n,F as i,q as c,e as o,n as r,b as u,w as d,u as v,m as p,a0 as m,a8 as g,T as b,d4 as f,cL as h,cJ as x,cK as y,aj as k,h as w,i as C,cT as S}from"./index-33bf4ed5.js";import{s as T,c as _}from"./scribing-4c40cb11.js";const N={class:"com-handle-scribing"},A={class:"sign-container-wrap"},V={class:"scribing-text"},j={class:"sign-wrap"},E={class:"sign-preview"},I={class:"scribing-text"},L={class:"sign-result"},q=["onClick"],O=["src"],P={class:"sign-list"},R={class:"sign-item"},U={class:"operate-bar"},$=e({name:"handleScribing"}),D=e({...$,props:{text:{default:""},modelValue:{default:()=>[]},signAccount:{default:1}},emits:["onSubmit","onCancel"],setup(e,{emit:w}){const C=e,S=a(0),T=a(),_=s((()=>{if(C.text&&C.text.length>=C.signAccount){const e=[];let a=0;for(let s=0;s<=C.text.length;s++)!s||s%C.signAccount||(a+=1),C.text[s]&&(e[a]?e[a]+=C.text[s]:e[a]=C.text[s]);return e}return[""]})),$=a([]);a("");const D=()=>{if(S.value===_.value.length-1)return;S.value,C.signAccount;_.value[S.value].length;let e="";_.value.forEach(((a,s)=>{s===S.value&&($.value[s]||(e="请抄录当前页面文字"))})),e?b({message:e,className:"toast-vertical"}):T.value&&(S.value+=1,T.value.swipeTo(S.value))},F=()=>{0!==S.value&&T.value&&(S.value-=1,T.value.swipeTo(S.value))},H=()=>{w("onCancel")},J=()=>{var e;if((null==(e=$.value)?void 0:e.length)!==C.text.length)return void b({message:"请完成抄录",className:"toast-vertical"});const a=[];$.value.forEach((async(e,s)=>{a.push(f(e,270))})),Promise.all(a).then((e=>{const a=e.map(((e,a)=>({position:a+1,content:C.text[a],image:e})));w("onSubmit",a)}))};return(e,a)=>{const s=h,b=x,f=y,w=k;return t(),l("div",N,[n("div",A,[n("p",V,[(t(),l(i,null,c("请投保人抄录并确保内容清晰完整",((e,a)=>n("span",{key:a,class:"text-item"},o(e),1))),64))]),n("div",j,[n("div",E,[n("p",I,[(t(!0),l(i,null,c(e.text,((e,a)=>(t(),l("span",{key:a,class:r(`text-item ${S.value===a?"activity":""} `)},o(e),3)))),128))]),n("div",L,[(t(!0),l(i,null,c($.value,((e,a)=>(t(),l("div",{key:a,class:"scribing-item",onClick:e=>(e=>{S.value=e,T.value.swipeTo(S.value)})(a)},[n("img",{src:e,alt:""},null,8,O)],8,q)))),128))])]),u(f,{ref_key:"swipeRef",ref:T,loop:!1,"initial-swipe":0,"show-indicators":!1,vertical:"",touchable:!1},{default:d((()=>[(t(!0),l(i,null,c(v(_),((a,l)=>(t(),p(b,{key:l},{default:d((()=>[n("div",P,[n("div",R,[(t(),p(s,m({ref_for:!0,ref:"signRef",key:l,modelValue:$.value[l],"onUpdate:modelValue":e=>$.value[l]=e,placeholder:a},e.$attrs,{onSignSuccess:D}),null,16,["modelValue","onUpdate:modelValue","placeholder"]))])])])),_:2},1024)))),128))])),_:1},512)]),n("div",U,[u(w,{plain:"",hairline:"",type:"primary",disabled:0===S.value,class:"btn",onClick:F},{default:d((()=>[g("后退")])),_:1},8,["disabled"]),u(w,{plain:"",hairline:"",type:"primary",class:"btn",onClick:H},{default:d((()=>[g("取消")])),_:1}),u(w,{type:"primary",class:"btn",onClick:J},{default:d((()=>[g("保存")])),_:1})])])])}}}),F={class:"handle-scribing-wrap"},H=e({name:"handleScribingPage"}),J=e({...H,setup(e){const a=w(),s=C(),{orderNo:n,text:i,tenantId:c}=s.query,o=()=>{a.back()},r=e=>{T({orderNo:n,tenantId:c,riskTranscriptionList:e}).then((({code:e,data:s})=>{"10000"===e&&_({content:i,image:"",orderNo:n,tenantId:c,transcriptionType:S.HANDLE}).then((({code:e})=>{"10000"===e&&a.back()}))}))};return(e,a)=>(t(),l("div",F,[u(D,{text:v(i),closeable:"","has-bg":"",onOnCancel:o,onOnSubmit:r},null,8,["text"])]))}});export{J as default};
