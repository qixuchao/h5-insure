import{d as a,u as e,r as s,cP as o,Z as l,B as r,a3 as n,bs as t,b as d,g as u,w as c,e as i,i as m,j as p,E as v,f as y,c as f,h,aC as g,a0 as w,a7 as N,$ as b,D as x,T as C,a4 as P,aB as k}from"./index-8e603827.js";import{g as B,P as W,u as j,a as _,l as A}from"./core-8259a07f.js";import{u as I}from"./theme-65292714.js";const T={class:"pay-amount"},U={class:"amount"},V={class:"order-info"},S={class:"order-name"},q={class:"order-no"},z={key:0},D={class:"pay-wrapper"},E=["src"],J=a({name:"Cashier"}),O=a({...J,setup(a){var J;const O=I(),X=e().query,Y=B(X.payWay||W.WXPAY);console.log(X.payWay,"-----",Y);const Z=s(),$=s(!1),F=s(null==(J=Y[0])?void 0:J.name);s("h5");const G=()=>{_({...Z.value,payWay:F.value,code:X.code,extraInfo:JSON.stringify({wxCode:X.code})}).then((a=>{x.confirm({message:"请确认是否已完成支付",showCancelButton:!0,confirmButtonText:"支付成功",cancelButtonText:"遇到问题",theme:"round-button",className:"custom-dialog",teleport:".page-cashier-pay"}).then((()=>{Z.value&&(window.location.href=Z.value.redirectUrl),console.log("订单信息",Z.value)})).catch((()=>{Z.value&&(window.location.href=Z.value.redirectUrl)}))}))},{copy:H,copied:K,isSupported:L}=o({source:""}),M=()=>{var a;H(null==(a=Z.value)?void 0:a.orderNo),C("复制成功")};return j(),l((()=>{$.value=!0,A({orderNo:X.orderNo||"P2211220947519991000001750022183",tenantId:X.tenantId||"9991000001"}).then((a=>{console.log("获取订单信息",a),"10000"===a.code&&(Z.value=a.data)})).finally((()=>{$.value=!1}))})),(a,e)=>{const s=P,o=r,l=n("ProPageWrap"),x=t;return d(),u(x,{"theme-vars":y(O)},{default:c((()=>[i(l,{title:"收银台","main-class":"page-cashier-pay"},{default:c((()=>{var a,l,r;return[m("div",T,[p(" ￥"),m("span",U,v(null==(a=y(Z))?void 0:a.orderAmt),1)]),m("div",V,[m("div",S,v(null==(l=y(Z))?void 0:l.orderName),1),m("div",q,[p(" 订单号： "+v((null==(r=y(Z))?void 0:r.orderNo)+" ")+" ",1),y(L)?(d(),f("span",z,[i(s,{name:"copy",onClick:M})])):h("",!0)])]),m("div",D,[i(y(g),{modelValue:y(F),"onUpdate:modelValue":e[0]||(e[0]=a=>w(F)?F.value=a:null)},{default:c((()=>[(d(!0),f(b,null,N(y(Y),(a=>(d(),f("div",{key:a.name,class:"pay-item"},[m("span",null,[m("img",{src:a.img},null,8,E),p(v(a.title),1)]),i(y(k),{name:a.name},null,8,["name"])])))),128))])),_:1},8,["modelValue"])]),i(o,{type:"primary",disabled:!y(F),round:"",size:"large",block:"",onClick:G},{default:c((()=>{var a;return[p("确认付款 ￥"+v(null==(a=y(Z))?void 0:a.orderAmt),1)]})),_:1},8,["disabled"])]})),_:1})])),_:1},8,["theme-vars"])}}});export{O as default};
