import{d as a,u as e,r as s,cS as o,R as l,B as r,Z as n,bs as t,b as d,g as u,w as c,e as i,i as m,j as p,$ as v,f as y,c as f,h,aC as g,V as w,a4 as b,U as N,D as x,T as C,a1 as k,aB as B}from"./index-70bfd36e.js";import{g as P,P as W,u as j,a as U,l as V}from"./core-5c38699d.js";import{u as _}from"./theme-94cf7d00.js";const A={class:"pay-amount"},I={class:"amount"},S={class:"order-info"},T={class:"order-name"},q={class:"order-no"},z={key:0},D={class:"pay-wrapper"},J=["src"],O=a({name:"Cashier"}),R=a({...O,setup(a){var O;const R=_(),X=e().query,Y=P(X.payWay||W.WXPAY);console.log(X.payWay,"-----",Y);const Z=s(),$=s(!1),E=s(null==(O=Y[0])?void 0:O.name);s("h5");const F=()=>{U({...Z.value,payWay:E.value,code:X.code,extraInfo:JSON.stringify({wxCode:X.code})}).then((a=>{x.confirm({message:"请确认是否已完成支付",showCancelButton:!0,confirmButtonText:"支付成功",cancelButtonText:"遇到问题",theme:"round-button",className:"custom-dialog",teleport:".page-cashier-pay"}).then((()=>{Z.value&&(window.location.href=Z.value.redirectUrl),console.log("订单信息",Z.value)})).catch((()=>{Z.value&&(window.location.href=Z.value.redirectUrl)}))}))},{copy:G,copied:H,isSupported:K}=o({source:""}),L=()=>{var a;G(null==(a=Z.value)?void 0:a.orderNo),C("复制成功")};return j(),l((()=>{$.value=!0,V({orderNo:X.orderNo||"P2211220947519991000001750022183",tenantId:X.tenantId||"9991000001"}).then((a=>{console.log("获取订单信息",a),"10000"===a.code&&(Z.value=a.data)})).finally((()=>{$.value=!1}))})),(a,e)=>{const s=k,o=r,l=n("ProPageWrap"),x=t;return d(),u(x,{"theme-vars":y(R)},{default:c((()=>[i(l,{title:"收银台","main-class":"page-cashier-pay"},{default:c((()=>{var a,l,r;return[m("div",A,[p(" ￥"),m("span",I,v(null==(a=y(Z))?void 0:a.orderAmt),1)]),m("div",S,[m("div",T,v(null==(l=y(Z))?void 0:l.orderName),1),m("div",q,[p(" 订单号： "+v((null==(r=y(Z))?void 0:r.orderNo)+" ")+" ",1),y(K)?(d(),f("span",z,[i(s,{name:"copy",onClick:L})])):h("",!0)])]),m("div",D,[i(y(g),{modelValue:y(E),"onUpdate:modelValue":e[0]||(e[0]=a=>w(E)?E.value=a:null)},{default:c((()=>[(d(!0),f(N,null,b(y(Y),(a=>(d(),f("div",{key:a.name,class:"pay-item"},[m("span",null,[m("img",{src:a.img},null,8,J),p(v(a.title),1)]),i(y(B),{name:a.name},null,8,["name"])])))),128))])),_:1},8,["modelValue"])]),i(o,{type:"primary",disabled:!y(E),round:"",size:"large",block:"",onClick:F},{default:c((()=>{var a;return[p("确认付款 ￥"+v(null==(a=y(Z))?void 0:a.orderAmt),1)]})),_:1},8,["disabled"])]})),_:1})])),_:1},8,["theme-vars"])}}});export{R as default};
