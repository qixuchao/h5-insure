import{m as a,u as e,r as s,aE as l,o as r,s as o,t as d,v as n,x as u,z as t,G as i,O as v,J as m,H as c,y as p,B as y,aF as f,L as g,F as h,T as k,aG as N}from"./vendor-ec128989.js";import{ak as x,al as P,a9 as V,am as W}from"./index-851d6f85.js";import{u as _}from"./theme-467ed2f7.js";const b={class:"pay-amount"},j=m(" ￥"),A={class:"amount"},C={class:"order-info"},I={class:"order-name"},S={class:"order-no"},w={key:0},z={class:"pay-wrapper"},B=["src"],F=a({setup(a){var F;const G=_(),J=e().query,O=x(J.payWay||P.WXPAY),q=s(),E=s(!1),H=s(null==(F=O[0])?void 0:F.name);s("h5");const L=()=>{V({...q.value,payWay:H.value,code:J.code,extraInfo:JSON.stringify({wxCode:J.code})})},{copy:T,copied:U,isSupported:X}=l({source:""}),Y=()=>{var a;T(null==(a=q.value)?void 0:a.orderNo),k("复制成功")};return r((()=>{E.value=!0,W({orderNo:J.orderNo||"P2211220947519991000001750022183",tenantId:J.tenantId||"9991000001"}).then((a=>{"10000"===a.code&&(q.value=a.data)})).finally((()=>{E.value=!1}))})),(a,e)=>{const s=o("ProSvg"),l=o("VanButton"),r=o("van-config-provider"),k=o("ProPageWrap");return d(),n(k,{title:"收银台","main-class":"page-cashier"},{default:u((()=>[t(r,{"theme-vars":c(G)},{default:u((()=>{var a,r,o;return[i("div",b,[j,i("span",A,v(null==(a=q.value)?void 0:a.orderAmt),1)]),i("div",C,[i("div",I,v(null==(r=q.value)?void 0:r.orderName),1),i("div",S,[m(" 订单号： "+v((null==(o=q.value)?void 0:o.orderNo)+" ")+" ",1),c(X)?(d(),p("span",w,[t(s,{name:"copy",onClick:Y})])):y("",!0)])]),i("div",z,[t(c(f),{modelValue:H.value,"onUpdate:modelValue":e[0]||(e[0]=a=>H.value=a)},{default:u((()=>[(d(!0),p(h,null,g(c(O),(a=>(d(),p("div",{key:a.name,class:"pay-item"},[i("span",null,[i("img",{src:a.img},null,8,B),m(v(a.title),1)]),t(c(N),{name:a.name},null,8,["name"])])))),128))])),_:1},8,["modelValue"])]),t(l,{type:"primary",disabled:!H.value,round:"",size:"large",block:"",onClick:L},{default:u((()=>{var a;return[m("确认付款 ￥"+v(null==(a=q.value)?void 0:a.orderAmt),1)]})),_:1},8,["disabled"])]})),_:1},8,["theme-vars"])])),_:1})}}});export{F as default};
