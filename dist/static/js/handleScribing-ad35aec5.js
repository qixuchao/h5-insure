import{d as e,j as a,k as s,o as t,c as l,a as n,F as i,s as c,e as o,n as r,b as u,w as d,u as v,p,a0 as g,a8 as m,T as f,d5 as b,cN as h,cL as x,cM as y,aj as w,h as k,i as C,l as N,cU as S}from"./index-37af9da6.js";import{s as T,c as _}from"./scribing-fcb76bf0.js";const A={class:"com-handle-scribing"},I={class:"sign-container-wrap"},V={class:"scribing-text"},j={class:"sign-wrap"},E={class:"sign-preview"},L={class:"scribing-text"},U={class:"sign-result"},z=["onClick"],B=["src"],O={class:"sign-list"},P={class:"sign-item"},R={class:"operate-bar"},$=e({name:"handleScribing"}),q=e({...$,props:{text:{default:""},modelValue:{default:()=>[]},signAccount:{default:1}},emits:["onSubmit","onCancel"],setup(e,{emit:k}){const C=e,N=a(0),S=a(),T=s((()=>{if(C.text&&C.text.length>=C.signAccount){const e=[];let a=0;for(let s=0;s<=C.text.length;s++)!s||s%C.signAccount||(a+=1),C.text[s]&&(e[a]?e[a]+=C.text[s]:e[a]=C.text[s]);return e}return[""]})),_=a([]);a("");const $=()=>{if(N.value===T.value.length-1)return;N.value,C.signAccount;T.value[N.value].length;let e="";T.value.forEach(((a,s)=>{s===N.value&&(_.value[s]||(e="请抄录当前页面文字"))})),e?f({message:e,className:"toast-vertical"}):S.value&&(N.value+=1,S.value.swipeTo(N.value))},q=()=>{0!==N.value&&S.value&&(N.value-=1,S.value.swipeTo(N.value))},D=()=>{k("onCancel")},F=()=>{var e;if((null==(e=_.value)?void 0:e.length)!==C.text.length)return void f({message:"请完成抄录",className:"toast-vertical"});const a=[];_.value.forEach((async(e,s)=>{a.push(b(e,270))})),Promise.all(a).then((e=>{const a=e.map(((e,a)=>({position:a+1,content:C.text[a],image:e})));k("onSubmit",a)}))};return(e,a)=>{const s=h,f=x,b=y,k=w;return t(),l("div",A,[n("div",I,[n("p",V,[(t(),l(i,null,c("请投保人抄录并确保内容清晰完整",((e,a)=>n("span",{key:a,class:"text-item"},o(e),1))),64))]),n("div",j,[n("div",E,[n("p",L,[(t(!0),l(i,null,c(e.text,((e,a)=>(t(),l("span",{key:a,class:r(`text-item ${N.value===a?"activity":""} `)},o(e),3)))),128))]),n("div",U,[(t(!0),l(i,null,c(_.value,((e,a)=>(t(),l("div",{key:a,class:"scribing-item",onClick:e=>(e=>{N.value=e,S.value.swipeTo(N.value)})(a)},[n("img",{src:e,alt:""},null,8,B)],8,z)))),128))])]),u(b,{ref_key:"swipeRef",ref:S,loop:!1,"initial-swipe":0,"show-indicators":!1,vertical:"",touchable:!1},{default:d((()=>[(t(!0),l(i,null,c(v(T),((a,l)=>(t(),p(f,{key:l},{default:d((()=>[n("div",O,[n("div",P,[(t(),p(s,g({ref_for:!0,ref:"signRef",key:l,modelValue:_.value[l],"onUpdate:modelValue":e=>_.value[l]=e,placeholder:a},e.$attrs,{onSignSuccess:$}),null,16,["modelValue","onUpdate:modelValue","placeholder"]))])])])),_:2},1024)))),128))])),_:1},512)]),n("div",R,[u(k,{plain:"",hairline:"",type:"primary",disabled:0===N.value,class:"btn",onClick:q},{default:d((()=>[m("后退")])),_:1},8,["disabled"]),u(k,{plain:"",hairline:"",type:"primary",class:"btn",onClick:D},{default:d((()=>[m("取消")])),_:1}),u(k,{type:"primary",class:"btn",onClick:F},{default:d((()=>[m("保存")])),_:1})])])])}}}),D={class:"handle-scribing-wrap"},F=e({name:"handleScribingPage"}),H=e({...F,setup(e){const s=k(),n=C(),{orderNo:i,text:c,tenantId:o}=n.query,r=()=>{s.back()},d=e=>{T({orderNo:i,tenantId:o,riskTranscriptionList:e}).then((({code:e,data:a})=>{"10000"===e&&_({content:c,image:"",orderNo:i,tenantId:o,transcriptionType:S.HANDLE}).then((({code:e})=>{"10000"===e&&s.back()}))}))},p=a();return N((()=>{setTimeout((async()=>{p.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>(t(),l("div",D,[u(q,{text:v(c),closeable:"","has-bg":"",onOnCancel:r,onOnSubmit:d},null,8,["text"])]))}});export{H as default};
