import{d as e,r as a,G as t,b as l,c as s,i as n,U as i,a4 as r,a0 as o,$ as c,e as u,w as d,f as p,g as v,a6 as b,j as g,ag as m,T as f,bX as h,af as x,bY as y,bZ as k,B as _,a as w,u as C}from"./index-6b3583c5.js";import{S}from"./index-0dc2bbf8.js";import{s as A}from"./scribing-70b22184.js";const V={class:"com-handle-scribing"},j={class:"sign-container-wrap"},T={class:"scribing-text"},q={class:"sign-wrap"},E={class:"sign-list"},I={class:"operate-bar"},P={class:"btns"},U=e({name:"handleScribing"});var $=m(e({...U,props:{text:{default:""},modelValue:{default:()=>[]},signAccount:{default:2}},emits:["onSubmit","onCancel"],setup(e,{emit:m}){const w=e,C=a(0),A=a(),U=t((()=>{if(w.text&&w.text.length>=w.signAccount){const e=[];let a=0;for(let t=0;t<=w.text.length;t++)!t||t%w.signAccount||(a+=1),w.text[t]&&(e[a]?e[a]+=w.text[t]:e[a]=w.text[t]);return e}return[""]})),$=a([]);a("");const N=()=>{if(C.value===U.value.length-1)return;C.value,w.signAccount;U.value[C.value].length;let e="";U.value.forEach(((a,t)=>{t===C.value&&a.split("").forEach(((a,l)=>{$.value[t+l+t]||(e="请抄录当前页面文字")}))})),e?f({message:e,teleport:".com-handle-scribing"}):A.value&&(C.value+=1,A.value.swipeTo(C.value))},O=()=>{0!==C.value&&A.value&&(C.value-=1,A.value.swipeTo(C.value))},R=()=>{m("onCancel")},B=()=>{var e;if((null==(e=$.value)?void 0:e.length)!==w.text.length)return void f({message:"请完成抄录",teleport:".com-handle-scribing"});const a=[];$.value.forEach((async(e,t)=>{a.push(h(e,270))})),Promise.all(a).then((e=>{const a=e.map(((e,a)=>({position:a+1,content:w.text[a],image:e})));console.log("params",a),m("onSubmit",a)}))};return(e,a)=>{const t=x,m=y,f=k,h=_,w=S;return l(),s("div",V,[n("div",j,[n("p",T,[(l(!0),s(i,null,r(e.text,((a,t)=>(l(),s("span",{key:t,class:o(`text-item ${C.value*e.signAccount>t?"activity":""} `)},c(a),3)))),128))]),n("div",q,[u(f,{ref_key:"swipeRef",ref:A,loop:!1,"initial-swipe":0,"show-indicators":!1,vertical:"",touchable:!1},{default:d((()=>[(l(!0),s(i,null,r(p(U),((a,o)=>(l(),v(m,{key:o},{default:d((()=>[n("div",E,[(l(!0),s(i,null,r(a,((a,n)=>(l(),s("div",{key:n+o+o,class:"sign-item"},[(l(),v(t,b({ref_for:!0,ref:"signRef",key:o+o+n,modelValue:$.value[o+o+n],"onUpdate:modelValue":e=>$.value[o+o+n]=e,placeholder:a},e.$attrs),null,16,["modelValue","onUpdate:modelValue","placeholder"]))])))),128))])])),_:2},1024)))),128))])),_:1},512)]),n("div",I,[n("div",P,[u(w,null,{default:d((()=>[u(h,{plain:"",hairline:"",type:"primary",disabled:0===C.value,class:"btn",onClick:O},{default:d((()=>[g("上一页")])),_:1},8,["disabled"]),u(h,{plain:"",hairline:"",type:"primary",disabled:C.value===p(U).length-1,class:"btn",onClick:N},{default:d((()=>[g("下一页")])),_:1},8,["disabled"]),u(h,{plain:"",hairline:"",type:"primary",class:"btn",onClick:R},{default:d((()=>[g("取消")])),_:1}),u(h,{type:"primary",class:"btn",onClick:B},{default:d((()=>[g("保存")])),_:1})])),_:1})])])])])}}}),[["__scopeId","data-v-90d2ee54"]]);const N={class:"handle-scribing-wrap"},O=e({name:"handleScribingPage"}),R=e({...O,setup(e){const a=w(),t=C(),{orderNo:n,text:i,tenantId:r}=t.query,o=()=>{a.back()},c=e=>{A({orderNo:n,tenantId:r,riskTranscriptionList:e}).then((({code:e,data:l})=>{"10000"===e&&a.replace({path:"scribingPreview",query:t.query})}))};return(e,a)=>(l(),s("div",N,[u($,{text:p(i),closeable:"","has-bg":"",onOnCancel:o,onOnSubmit:c},null,8,["text"])]))}});export{R as default};
