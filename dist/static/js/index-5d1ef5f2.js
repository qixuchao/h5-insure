import{d as a,a as e,r as o,cE as s,G as l,B as r,bT as n,c as t,e as d,w as c,f as u,j as i,n as m,t as p,g as v,h as y,k as f,s as h,a7 as g,i as b,F as w,bX as x,aj as N,T as j,V as k,b as _,R as C}from"./index-b8ef7d55.js";import{g as P,P as W,u as B,a as T,l as V}from"./core-b5348c72.js";import{u as A}from"./theme-65292714.js";import"./pdfh5-008ca364.js";const I={class:"pay-amount"},U={class:"amount"},S={class:"order-info"},X={class:"order-name"},q={class:"order-no"},z={key:0},E={class:"pay-wrapper"},F=["src"],G=a({__name:"index",setup(a){var G;x((a=>({"147cd89f":v(J).primaryColor})));const J=A(),O=e().query,R=P(O.payWay||W.WXPAY);console.log(O.payWay,"-----",R);const Y=o(),D=o(!1),H=o(null==(G=R[0])?void 0:G.name);o("h5");const K=()=>{T({...Y.value,payWay:H.value,code:O.code,extraInfo:JSON.stringify({wxCode:O.code})}).then((a=>{N.confirm({message:"请确认是否已完成支付",showCancelButton:!0,confirmButtonText:"支付成功",cancelButtonText:"遇到问题",theme:"round-button",className:"custom-dialog",teleport:".page-cashier-pay"}).then((()=>{Y.value&&(window.location.href=Y.value.redirectUrl),console.log("订单信息",Y.value)})).catch((()=>{Y.value&&(window.location.href=Y.value.redirectUrl)}))}))},{copy:L,copied:M,isSupported:Q}=s({source:""}),Z=()=>{var a;L(null==(a=Y.value)?void 0:a.orderNo),j("复制成功")};return B(),l((()=>{D.value=!0,V({orderNo:O.orderNo||"P2211220947519991000001750022183",tenantId:O.tenantId||"9991000001"}).then((a=>{console.log("获取订单信息",a),"10000"===a.code&&(Y.value=a.data)})).finally((()=>{D.value=!1}))})),(a,e)=>{const o=k,s=r,l=_("ProPageWrap"),x=n;return t(),d(x,{"theme-vars":v(J)},{default:c((()=>[u(l,{title:"收银台","main-class":"page-cashier-pay"},{default:c((()=>{var a,l,r;return[i("div",I,[m(" ￥"),i("span",U,p(null==(a=v(Y))?void 0:a.orderAmt),1)]),i("div",S,[i("div",X,p(null==(l=v(Y))?void 0:l.orderName),1),i("div",q,[m(" 订单号： "+p((null==(r=v(Y))?void 0:r.orderNo)+" ")+" ",1),v(Q)?(t(),y("span",z,[u(o,{name:"copy",onClick:Z})])):f("",!0)])]),i("div",E,[u(v(h),{modelValue:v(H),"onUpdate:modelValue":e[0]||(e[0]=a=>g(H)?H.value=a:null)},{default:c((()=>[(t(!0),y(w,null,b(v(R),(a=>(t(),y("div",{key:a.name,class:"pay-item"},[i("span",null,[i("img",{src:a.img},null,8,F),m(p(a.title),1)]),u(v(C),{name:a.name},null,8,["name"])])))),128))])),_:1},8,["modelValue"])]),u(s,{type:"primary",disabled:!v(H),round:"",size:"large",block:"",onClick:K},{default:c((()=>{var a;return[m("确认付款 ￥"+p(null==(a=v(Y))?void 0:a.orderAmt),1)]})),_:1},8,["disabled"])]})),_:1})])),_:1},8,["theme-vars"])}}});export{G as default};
