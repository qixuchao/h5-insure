import{d as a,u as e,r as o,cN as s,X as l,B as r,bz as n,aU as t,b as d,g as u,w as c,e as i,i as m,j as p,Q as v,f,c as y,h,bb as g,Z as b,N,M as w,D as x,T as j,a7 as k,b9 as C}from"./index-0f8b4bae.js";import{g as P,P as W,u as B,a as U,l as _}from"./core-bf935c66.js";import{u as A}from"./theme-94cf7d00.js";import"./pdfh5-008ca364.js";const I={class:"pay-amount"},T={class:"amount"},V={class:"order-info"},z={class:"order-name"},S={class:"order-no"},X={key:0},q={class:"pay-wrapper"},D=["src"],J=a({name:"Cashier"}),M=a({...J,setup(a){var J;const M=A(),O=e().query,Q=P(O.payWay||W.WXPAY);console.log(O.payWay,"-----",Q);const Y=o(),Z=o(!1),E=o(null==(J=Q[0])?void 0:J.name);o("h5");const F=()=>{U({...Y.value,payWay:E.value,code:O.code,extraInfo:JSON.stringify({wxCode:O.code})}).then((a=>{x.confirm({message:"请确认是否已完成支付",showCancelButton:!0,confirmButtonText:"支付成功",cancelButtonText:"遇到问题",theme:"round-button",className:"custom-dialog",teleport:".page-cashier-pay"}).then((()=>{Y.value&&(window.location.href=Y.value.redirectUrl),console.log("订单信息",Y.value)})).catch((()=>{Y.value&&(window.location.href=Y.value.redirectUrl)}))}))},{copy:G,copied:H,isSupported:K}=s({source:""}),L=()=>{var a;G(null==(a=Y.value)?void 0:a.orderNo),j("复制成功")};return B(),l((()=>{Z.value=!0,_({orderNo:O.orderNo||"P2211220947519991000001750022183",tenantId:O.tenantId||"9991000001"}).then((a=>{console.log("获取订单信息",a),"10000"===a.code&&(Y.value=a.data)})).finally((()=>{Z.value=!1}))})),(a,e)=>{const o=k,s=r,l=n("ProPageWrap"),x=t;return d(),u(x,{"theme-vars":f(M)},{default:c((()=>[i(l,{title:"收银台","main-class":"page-cashier-pay"},{default:c((()=>{var a,l,r;return[m("div",I,[p(" ￥"),m("span",T,v(null==(a=f(Y))?void 0:a.orderAmt),1)]),m("div",V,[m("div",z,v(null==(l=f(Y))?void 0:l.orderName),1),m("div",S,[p(" 订单号： "+v((null==(r=f(Y))?void 0:r.orderNo)+" ")+" ",1),f(K)?(d(),y("span",X,[i(o,{name:"copy",onClick:L})])):h("",!0)])]),m("div",q,[i(f(g),{modelValue:f(E),"onUpdate:modelValue":e[0]||(e[0]=a=>b(E)?E.value=a:null)},{default:c((()=>[(d(!0),y(w,null,N(f(Q),(a=>(d(),y("div",{key:a.name,class:"pay-item"},[m("span",null,[m("img",{src:a.img},null,8,D),p(v(a.title),1)]),i(f(C),{name:a.name},null,8,["name"])])))),128))])),_:1},8,["modelValue"])]),i(s,{type:"primary",disabled:!f(E),round:"",size:"large",block:"",onClick:F},{default:c((()=>{var a;return[p("确认付款 ￥"+v(null==(a=f(Y))?void 0:a.orderAmt),1)]})),_:1},8,["disabled"])]})),_:1})])),_:1},8,["theme-vars"])}}});export{M as default};
