import{d as a,g as e,h as s,i as t,b1 as i,O as o,o as l,c as n,a as r,b as d,w as c,F as p,n as u,u as m,p as b,a6 as f,f as v,a8 as g,bP as h,am as w,as as k,bU as y}from"./index-8adcf781.js";import{S as C}from"./index-d5fd5f91.js";import{P as I}from"./index-34b05f2f.js";import{q as N,s as _,c as x}from"./scribing-a3ec8e8e.js";const j={class:"page-scribing-preview-wrap"},L=r("div",{class:"header-tip"},"点击文字框可进行修改",-1),T={class:"scribing-list"},E=["onClick"],P=["src"],V={class:"footer-btn"},q={class:"popup-body"},A={class:"popup-footer"},D=a({name:"scribingPreview"}),H=a({...D,setup(a){const D=e(),H=s(),O=t([{content:"想"}]),{orderNo:S,text:U,tenantId:F,orderId:R}=H.query,Y=t({}),[$,z]=i(!1),B=t(),G=t(),J=async()=>{const{code:a,data:e}=await N({orderId:R,tenantId:F,contentType:y.HANDLE});"10000"===a&&(O.value=e.riskTranscriptionList,B.value=e.status)},K=()=>{G.value.clear(),z(!1)},M=()=>{Y.value.image&&_({orderNo:S,tenantId:F,riskTranscriptionList:[{...Y.value,status:2}]}).then((({code:a,data:e})=>{"10000"===a&&(z(!1),J())}))},Q=()=>{x({content:U,image:"",orderNo:S,tenantId:F,transcriptionType:y.HANDLE}).then((({code:a})=>{"10000"===a&&D.back()}))},W=t(!1);return o((()=>{W.value=!0,J()})),(a,e)=>{const s=C,t=w,i=k;return l(),n(p,null,[r("div",j,[L,r("div",T,[d(s,{wrap:""},{default:c((()=>[(l(!0),n(p,null,u(m(O),((a,e)=>(l(),n("div",{key:e,class:b("scribing-item "+(+a.status!==m(f).YES?"activity":"")),onClick:e=>{return s=a,Y.value={...s,image:""},void z(!0);var s}},[r("img",{src:a.thumbnail,alt:""},null,8,P)],10,E)))),128))])),_:1})]),r("div",V,[d(I,{shadow:!1,disabled:m(B)===m(f).NO,onClick:Q},{default:c((()=>[v(a.$slots,"default",{},(()=>[g("确认")]))])),_:3},8,["disabled"])])]),d(i,{show:m($),teleport:".page-scribing-preview-wrap",class:"sign-popup",title:m(Y).content,closeable:!1,position:"center",onClose:K},{default:c((()=>[r("div",q,[d(h,{ref_key:"signRef",ref:G,modelValue:m(Y).image,"onUpdate:modelValue":e[0]||(e[0]=a=>m(Y).image=a),"has-bg":"",placeholder:m(Y).content,closeable:""},null,8,["modelValue","placeholder"])]),r("div",A,[d(t,{onClick:K},{default:c((()=>[g("取消")])),_:1}),d(t,{type:"primary",plain:"",disabled:!m(Y).image,onClick:M},{default:c((()=>[g("确定")])),_:1},8,["disabled"])])])),_:1},8,["show","title"])],64)}}});export{H as default};
