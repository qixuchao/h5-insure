import{i as a,P as e,r as s,aE as r,k as l,l as o,m as n,n as d,p as t,t as u,B as i,L as v,G as m,C as p,s as c,x as f,aF as y,H as g,F as P,T as h,aG as k}from"./vendor-6e9e6128.js";import{g as x,P as N,u as b,s as j,l as C}from"./core-ef4459e8.js";import{u as V}from"./theme-467ed2f7.js";import"./index-28eeef29.js";import"./index-6908eebb.js";const W={class:"pay-amount"},_=m(" ￥"),A={class:"amount"},I={class:"order-info"},S={class:"order-name"},w={class:"order-no"},B={key:0},F={class:"pay-wrapper"},G=["src"],q=a({setup(a){var q;const z=V(),E=e().query,H=x(E.payWay||N.WXPAY),J=s(),L=s(!1),O=s(null==(q=H[0])?void 0:q.name);s("h5");const T=()=>{j({...J.value,payWay:O.value,code:E.code,extraInfo:JSON.stringify({wxCode:E.code})})},{copy:U,copied:X,isSupported:Y}=r({source:""}),D=()=>{var a;U(null==(a=J.value)?void 0:a.orderNo),h("复制成功")};return b(),l((()=>{L.value=!0,C({orderNo:E.orderNo||"P2211220947519991000001750022183",tenantId:E.tenantId||"9991000001"}).then((a=>{"10000"===a.code&&(J.value=a.data)})).finally((()=>{L.value=!1}))})),(a,e)=>{const s=o("ProSvg"),r=o("VanButton"),l=o("van-config-provider"),h=o("ProPageWrap");return n(),d(h,{title:"收银台","main-class":"page-cashier"},{default:t((()=>[u(l,{"theme-vars":p(z)},{default:t((()=>{var a,l,o;return[i("div",W,[_,i("span",A,v(null==(a=J.value)?void 0:a.orderAmt),1)]),i("div",I,[i("div",S,v(null==(l=J.value)?void 0:l.orderName),1),i("div",w,[m(" 订单号： "+v((null==(o=J.value)?void 0:o.orderNo)+" ")+" ",1),p(Y)?(n(),c("span",B,[u(s,{name:"copy",onClick:D})])):f("",!0)])]),i("div",F,[u(p(y),{modelValue:O.value,"onUpdate:modelValue":e[0]||(e[0]=a=>O.value=a)},{default:t((()=>[(n(!0),c(P,null,g(p(H),(a=>(n(),c("div",{key:a.name,class:"pay-item"},[i("span",null,[i("img",{src:a.img},null,8,G),m(v(a.title),1)]),u(p(k),{name:a.name},null,8,["name"])])))),128))])),_:1},8,["modelValue"])]),u(r,{type:"primary",disabled:!O.value,round:"",size:"large",block:"",onClick:T},{default:t((()=>{var a;return[m("确认付款 ￥"+v(null==(a=J.value)?void 0:a.orderAmt),1)]})),_:1},8,["disabled"])]})),_:1},8,["theme-vars"])])),_:1})}}});export{q as default};
