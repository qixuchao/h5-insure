import{d as a,a as e,r as o,cE as l,G as s,B as r,bT as n,c as t,e as d,w as u,f as c,i,t as m,n as v,m as p,g as f,j as y,s as h,h as g,F as w,bX as b,ai as N,T as x,V as j,b as k,R as C}from"./index-8dcf7554.js";import{g as P,P as W,u as B,a as T,l as V}from"./core-860d1fa4.js";import{u as _}from"./theme-65292714.js";import"./pdfh5-008ca364.js";const A={class:"pay-amount"},I=v(" ￥"),U={class:"amount"},S={class:"order-info"},X={class:"order-name"},q={class:"order-no"},z={key:0},E={class:"pay-wrapper"},F=["src"],G=a({setup(a){var G;b((a=>({"147cd89f":p(J).primaryColor})));const J=_(),O=e().query,R=P(O.payWay||W.WXPAY);console.log(O.payWay,"-----",R);const Y=o(),D=o(!1),H=o(null==(G=R[0])?void 0:G.name);o("h5");const K=()=>{T({...Y.value,payWay:H.value,code:O.code,extraInfo:JSON.stringify({wxCode:O.code})}).then((a=>{N.confirm({message:"请确认是否已完成支付",showCancelButton:!0,confirmButtonText:"支付成功",cancelButtonText:"遇到问题",theme:"round-button",className:"custom-dialog",teleport:".page-cashier-pay"}).then((()=>{Y.value&&(window.location.href=Y.value.redirectUrl),console.log("订单信息",Y.value)})).catch((()=>{Y.value&&(window.location.href=Y.value.redirectUrl)}))}))},{copy:L,copied:M,isSupported:Q}=l({source:""}),Z=()=>{var a;L(null==(a=Y.value)?void 0:a.orderNo),x("复制成功")};return B(),s((()=>{D.value=!0,V({orderNo:O.orderNo||"P2211220947519991000001750022183",tenantId:O.tenantId||"9991000001"}).then((a=>{console.log("获取订单信息",a),"10000"===a.code&&(Y.value=a.data)})).finally((()=>{D.value=!1}))})),(a,e)=>{const o=j,l=r,s=k("ProPageWrap"),b=n;return t(),d(b,{"theme-vars":p(J)},{default:u((()=>[c(s,{title:"收银台","main-class":"page-cashier-pay"},{default:u((()=>{var a,s,r;return[i("div",A,[I,i("span",U,m(null==(a=Y.value)?void 0:a.orderAmt),1)]),i("div",S,[i("div",X,m(null==(s=Y.value)?void 0:s.orderName),1),i("div",q,[v(" 订单号： "+m((null==(r=Y.value)?void 0:r.orderNo)+" ")+" ",1),p(Q)?(t(),f("span",z,[c(o,{name:"copy",onClick:Z})])):y("",!0)])]),i("div",E,[c(p(h),{modelValue:H.value,"onUpdate:modelValue":e[0]||(e[0]=a=>H.value=a)},{default:u((()=>[(t(!0),f(w,null,g(p(R),(a=>(t(),f("div",{key:a.name,class:"pay-item"},[i("span",null,[i("img",{src:a.img},null,8,F),v(m(a.title),1)]),c(p(C),{name:a.name},null,8,["name"])])))),128))])),_:1},8,["modelValue"])]),c(l,{type:"primary",disabled:!H.value,round:"",size:"large",block:"",onClick:K},{default:u((()=>{var a;return[v("确认付款 ￥"+m(null==(a=Y.value)?void 0:a.orderAmt),1)]})),_:1},8,["disabled"])]})),_:1})])),_:1},8,["theme-vars"])}}});export{G as default};
