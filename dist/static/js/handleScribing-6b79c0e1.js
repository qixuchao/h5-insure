import{d as e,i as a,j as s,o as t,c as l,a as n,F as i,n as c,e as r,p as o,b as u,w as d,u as v,l as p,a0 as g,a8 as m,T as f,cp as h,cf as b,cq as x,cr as y,an as k,g as w,h as C,cl as S}from"./index-498c0d29.js";import{s as _,c as N}from"./scribing-a488d79c.js";const T={class:"com-handle-scribing"},A={class:"sign-container-wrap"},V={class:"scribing-text"},j={class:"sign-wrap"},E={class:"sign-preview"},I={class:"scribing-text"},q={class:"sign-result"},L=["onClick"],O=["src"],P={class:"sign-list"},R={class:"sign-item"},U={class:"operate-bar"},$=e({name:"handleScribing"}),D=e({...$,props:{text:{default:""},modelValue:{default:()=>[]},signAccount:{default:1}},emits:["onSubmit","onCancel"],setup(e,{emit:w}){const C=e,S=a(0),_=a(),N=s((()=>{if(C.text&&C.text.length>=C.signAccount){const e=[];let a=0;for(let s=0;s<=C.text.length;s++)!s||s%C.signAccount||(a+=1),C.text[s]&&(e[a]?e[a]+=C.text[s]:e[a]=C.text[s]);return e}return[""]})),$=a([]);a("");const D=()=>{if(S.value===N.value.length-1)return;S.value,C.signAccount;N.value[S.value].length;let e="";N.value.forEach(((a,s)=>{s===S.value&&($.value[s]||(e="请抄录当前页面文字"))})),e?f({message:e,className:"toast-vertical"}):_.value&&(S.value+=1,_.value.swipeTo(S.value))},F=()=>{0!==S.value&&_.value&&(S.value-=1,_.value.swipeTo(S.value))},H=()=>{w("onCancel")},z=()=>{var e;if((null==(e=$.value)?void 0:e.length)!==C.text.length)return void f({message:"请完成抄录",className:"toast-vertical"});const a=[];$.value.forEach((async(e,s)=>{a.push(h(e,270))})),Promise.all(a).then((e=>{const a=e.map(((e,a)=>({position:a+1,content:C.text[a],image:e})));w("onSubmit",a)}))};return(e,a)=>{const s=b,f=x,h=y,w=k;return t(),l("div",T,[n("div",A,[n("p",V,[(t(),l(i,null,c("请投保人抄录并确保内容清晰完整",((e,a)=>n("span",{key:a,class:"text-item"},r(e),1))),64))]),n("div",j,[n("div",E,[n("p",I,[(t(!0),l(i,null,c(e.text,((e,a)=>(t(),l("span",{key:a,class:o(`text-item ${S.value===a?"activity":""} `)},r(e),3)))),128))]),n("div",q,[(t(!0),l(i,null,c($.value,((e,a)=>(t(),l("div",{key:a,class:"scribing-item",onClick:e=>(e=>{S.value=e,_.value.swipeTo(S.value)})(a)},[n("img",{src:e,alt:""},null,8,O)],8,L)))),128))])]),u(h,{ref_key:"swipeRef",ref:_,loop:!1,"initial-swipe":0,"show-indicators":!1,vertical:"",touchable:!1},{default:d((()=>[(t(!0),l(i,null,c(v(N),((a,l)=>(t(),p(f,{key:l},{default:d((()=>[n("div",P,[n("div",R,[(t(),p(s,g({ref_for:!0,ref:"signRef",key:l,modelValue:$.value[l],"onUpdate:modelValue":e=>$.value[l]=e,placeholder:a},e.$attrs,{onSignSuccess:D}),null,16,["modelValue","onUpdate:modelValue","placeholder"]))])])])),_:2},1024)))),128))])),_:1},512)]),n("div",U,[u(w,{plain:"",hairline:"",type:"primary",disabled:0===S.value,class:"btn",onClick:F},{default:d((()=>[m("后退")])),_:1},8,["disabled"]),u(w,{plain:"",hairline:"",type:"primary",class:"btn",onClick:H},{default:d((()=>[m("取消")])),_:1}),u(w,{type:"primary",class:"btn",onClick:z},{default:d((()=>[m("保存")])),_:1})])])])}}}),F={class:"handle-scribing-wrap"},H=e({name:"handleScribingPage"}),z=e({...H,setup(e){const a=w(),s=C(),{orderNo:n,text:i,tenantId:c}=s.query,r=()=>{a.back()},o=e=>{_({orderNo:n,tenantId:c,riskTranscriptionList:e}).then((({code:e,data:s})=>{"10000"===e&&N({content:i,image:"",orderNo:n,tenantId:c,transcriptionType:S.HANDLE}).then((({code:e})=>{"10000"===e&&a.back()}))}))};return(e,a)=>(t(),l("div",F,[u(D,{text:v(i),closeable:"","has-bg":"",onOnCancel:r,onOnSubmit:o},null,8,["text"])]))}});export{z as default};
