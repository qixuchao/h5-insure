import{v as e,d as a,k as t,b as s,F as i,H as r,h as n,i as l,j as o,b_ as c,O as d,o as p,c as u,a as m,w as g,q as v,u as f,n as y,a6 as h,g as b,a8 as w,cM as k,aj as z,au as A,cT as C}from"./index-8ccea0ec.js";import{P as N}from"./index-26608712.js";import{q as _,s as x,c as I}from"./scribing-0383b9ec.js";const[T,$]=e("space"),j={align:String,direction:{type:String,default:"horizontal"},size:{type:[Number,String,Array],default:8},wrap:Boolean,fill:Boolean};function B(e=[]){const a=[];return e.forEach((e=>{Array.isArray(e)?a.push(...e):e.type===i?a.push(...B(e.children)):a.push(e)})),a.filter((e=>{var a;return!(e&&("undefined"!=typeof Comment&&e.type===Comment||e.type===i&&0===(null==(a=e.children)?void 0:a.length)||e.type===Text&&""===e.children.trim()))}))}const E=r(a({name:T,props:j,setup(e,{slots:a}){const i=t((()=>{var a;return null!=(a=e.align)?a:"horizontal"===e.direction?"center":""})),r=e=>"number"==typeof e?e+"px":e,n=a=>{const t={},s=`${r(Array.isArray(e.size)?e.size[0]:e.size)}`,i=`${r(Array.isArray(e.size)?e.size[1]:e.size)}`;return a?e.wrap?{marginBottom:i}:{}:("horizontal"===e.direction&&(t.marginRight=s),("vertical"===e.direction||e.wrap)&&(t.marginBottom=i),t)};return()=>{var t;const r=B(null==(t=a.default)?void 0:t.call(a));return s("div",{class:[$({[e.direction]:e.direction,[`align-${i.value}`]:i.value,wrap:e.wrap,fill:e.fill})]},[r.map(((e,a)=>s("div",{key:`item-${a}`,class:`${T}-item`,style:n(a===r.length-1)},[e])))])}}}));const L={class:"page-scribing-preview-wrap"},S=m("div",{class:"header-tip"},"点击文字框可进行修改",-1),q={class:"scribing-list"},H=["onClick"],V=["src"],D={class:"footer-btn"},O={class:"popup-body"},P={class:"popup-footer"},R=a({name:"scribingPreview"}),F=a({...R,setup(e){const a=n(),t=l(),r=o([{content:"想"}]),{orderNo:T,text:$,tenantId:j,orderId:B}=t.query,R=o({}),[F,M]=c(!1),U=o(),Y=o(),G=async()=>{const{code:e,data:a}=await _({orderId:B,tenantId:j,contentType:C.HANDLE});"10000"===e&&(r.value=a.riskTranscriptionList,U.value=a.status)},J=()=>{Y.value.clear(),M(!1)},K=()=>{R.value.image&&x({orderNo:T,tenantId:j,riskTranscriptionList:[{...R.value,status:2}]}).then((({code:e,data:a})=>{"10000"===e&&(M(!1),G())}))},Q=()=>{I({content:$,image:"",orderNo:T,tenantId:j,transcriptionType:C.HANDLE}).then((({code:e})=>{"10000"===e&&a.back()}))},W=o(!1);return d((()=>{W.value=!0,G()})),(e,a)=>{const t=E,n=z,l=A;return p(),u(i,null,[m("div",L,[S,m("div",q,[s(t,{wrap:""},{default:g((()=>[(p(!0),u(i,null,v(f(r),((e,a)=>(p(),u("div",{key:a,class:y("scribing-item "+(+e.status!==f(h).YES?"activity":"")),onClick:a=>{return t=e,R.value={...t,image:""},void M(!0);var t}},[m("img",{src:e.thumbnail,alt:""},null,8,V)],10,H)))),128))])),_:1})]),m("div",D,[s(N,{shadow:!1,disabled:f(U)===f(h).NO,onClick:Q},{default:g((()=>[b(e.$slots,"default",{},(()=>[w("确认")]))])),_:3},8,["disabled"])])]),s(l,{show:f(F),teleport:".page-scribing-preview-wrap",class:"sign-popup",title:f(R).content,closeable:!1,position:"center",onClose:J},{default:g((()=>[m("div",O,[s(k,{ref_key:"signRef",ref:Y,modelValue:f(R).image,"onUpdate:modelValue":a[0]||(a[0]=e=>f(R).image=e),"has-bg":"",placeholder:f(R).content,closeable:""},null,8,["modelValue","placeholder"])]),m("div",P,[s(n,{onClick:J},{default:g((()=>[w("取消")])),_:1}),s(n,{type:"primary",plain:"",disabled:!f(R).image,onClick:K},{default:g((()=>[w("确定")])),_:1},8,["disabled"])])])),_:1},8,["show","title"])],64)}}});export{F as default};
