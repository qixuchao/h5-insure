import{d as a,i as e,j as o,dz as s,O as l,ag as r,l as n,bb as t,o as d,m as u,w as c,b as i,a as m,a8 as p,e as v,u as f,c as y,f as h,bY as g,p as b,q as w,bX as N,F as x,aI as k,T as C,ae as P}from"./index-7c0189e6.js";import{g as W,P as j,u as I,a as _,l as A}from"./core-ef1afbeb.js";import{u as B}from"./theme-94cf7d00.js";const T={class:"pay-amount"},U={class:"amount"},V={class:"order-info"},q={class:"order-name"},z={class:"order-no"},O={key:0},S={class:"pay-wrapper"},X=["src"],Y=a({name:"Cashier"}),F=a({...Y,setup(a){var Y;const F=B(),J=e().query,D=W(J.payWay||j.WXPAY);console.log(J.payWay,"-----",D);const E=o(),G=o(!1),H=o(null==(Y=D[0])?void 0:Y.name);o("h5");const K=()=>{_({...E.value,payWay:H.value,code:J.code,extraInfo:JSON.stringify({wxCode:J.code})}).then((a=>{k.confirm({message:"请确认是否已完成支付",showCancelButton:!0,confirmButtonText:"支付成功",cancelButtonText:"遇到问题",theme:"round-button",className:"custom-dialog",teleport:".page-cashier-pay"}).then((()=>{E.value&&(window.location.href=E.value.redirectUrl),console.log("订单信息",E.value)})).catch((()=>{E.value&&(window.location.href=E.value.redirectUrl)}))}))},{copy:L,copied:M,isSupported:Q}=s({source:""}),R=()=>{var a;L(null==(a=E.value)?void 0:a.orderNo),C("复制成功")};return I(),l((()=>{G.value=!0,A({orderNo:J.orderNo||"P2211220947519991000001750022183",tenantId:J.tenantId||"9991000001"}).then((a=>{console.log("获取订单信息",a),"10000"===a.code&&(E.value=a.data)})).finally((()=>{G.value=!1}))})),(a,e)=>{const o=P,s=r,l=n("ProPageWrap"),k=t;return d(),u(k,{"theme-vars":f(F)},{default:c((()=>[i(l,{title:"收银台","main-class":"page-cashier-pay"},{default:c((()=>{var a,l,r;return[m("div",T,[p(" ￥"),m("span",U,v(null==(a=f(E))?void 0:a.orderAmt),1)]),m("div",V,[m("div",q,v(null==(l=f(E))?void 0:l.orderName),1),m("div",z,[p(" 订单号： "+v((null==(r=f(E))?void 0:r.orderNo)+" ")+" ",1),f(Q)?(d(),y("span",O,[i(o,{name:"copy",onClick:R})])):h("",!0)])]),m("div",S,[i(f(g),{modelValue:f(H),"onUpdate:modelValue":e[0]||(e[0]=a=>b(H)?H.value=a:null)},{default:c((()=>[(d(!0),y(x,null,w(f(D),(a=>(d(),y("div",{key:a.name,class:"pay-item"},[m("span",null,[m("img",{src:a.img},null,8,X),p(v(a.title),1)]),i(f(N),{name:a.name},null,8,["name"])])))),128))])),_:1},8,["modelValue"])]),i(s,{type:"primary",disabled:!f(H),round:"",size:"large",block:"",onClick:K},{default:c((()=>{var a;return[p("确认付款 ￥"+v(null==(a=f(E))?void 0:a.orderAmt),1)]})),_:1},8,["disabled"])]})),_:1})])),_:1},8,["theme-vars"])}}});export{F as default};
