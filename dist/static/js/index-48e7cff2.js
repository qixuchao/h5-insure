import{d as a,i as e,j as o,e3 as s,l,m as r,br as n,o as t,p as d,w as c,b as u,a as i,v as m,e as p,u as v,c as f,f as y,cd as h,q as g,s as w,cc as N,F as b,aN as x,T as k,ao as C,ar as P}from"./index-a9c82976.js";import{g as W,P as j,u as _,a as A,l as B}from"./core-de55cff9.js";import{u as I}from"./theme-94cf7d00.js";const T={class:"pay-amount"},U={class:"amount"},V={class:"order-info"},q={class:"order-name"},S={class:"order-no"},z={key:0},F={class:"pay-wrapper"},J=["src"],O=a({name:"Cashier"}),X=a({...O,setup(a){var O;const X=I(),Y=e().query,D=W(Y.payWay||j.WXPAY);console.log(Y.payWay,"-----",D);const E=o(),G=o(!1),H=o(null==(O=D[0])?void 0:O.name);o("h5");const K=()=>{A({...E.value,payWay:H.value,code:Y.code,extraInfo:JSON.stringify({wxCode:Y.code})}).then((a=>{x.confirm({message:"请确认是否已完成支付",showCancelButton:!0,confirmButtonText:"支付成功",cancelButtonText:"遇到问题",theme:"round-button",className:"custom-dialog",teleport:".page-cashier-pay"}).then((()=>{E.value&&(window.location.href=E.value.redirectUrl),console.log("订单信息",E.value)})).catch((()=>{E.value&&(window.location.href=E.value.redirectUrl)}))}))},{copy:L,copied:M,isSupported:Q}=s({source:""}),R=()=>{var a;L(null==(a=E.value)?void 0:a.orderNo),k("复制成功")};return _(),l((()=>{G.value=!0,B({orderNo:Y.orderNo||"P2211220947519991000001750022183",tenantId:Y.tenantId||"9991000001"}).then((a=>{console.log("获取订单信息",a),"10000"===a.code&&(E.value=a.data)})).finally((()=>{G.value=!1}))})),(a,e)=>{const o=C,s=P,l=r("ProPageWrap"),x=n;return t(),d(x,{"theme-vars":v(X)},{default:c((()=>[u(l,{title:"收银台","main-class":"page-cashier-pay"},{default:c((()=>{var a,l,r;return[i("div",T,[m(" ￥"),i("span",U,p(null==(a=v(E))?void 0:a.orderAmt),1)]),i("div",V,[i("div",q,p(null==(l=v(E))?void 0:l.orderName),1),i("div",S,[m(" 订单号： "+p((null==(r=v(E))?void 0:r.orderNo)+" ")+" ",1),v(Q)?(t(),f("span",z,[u(o,{name:"copy",onClick:R})])):y("",!0)])]),i("div",F,[u(v(h),{modelValue:v(H),"onUpdate:modelValue":e[0]||(e[0]=a=>g(H)?H.value=a:null)},{default:c((()=>[(t(!0),f(b,null,w(v(D),(a=>(t(),f("div",{key:a.name,class:"pay-item"},[i("span",null,[i("img",{src:a.img},null,8,J),m(p(a.title),1)]),u(v(N),{name:a.name},null,8,["name"])])))),128))])),_:1},8,["modelValue"])]),u(s,{type:"primary",disabled:!v(H),round:"",size:"large",block:"",onClick:K},{default:c((()=>{var a;return[m("确认付款 ￥"+p(null==(a=v(E))?void 0:a.orderAmt),1)]})),_:1},8,["disabled"])]})),_:1})])),_:1},8,["theme-vars"])}}});export{X as default};
