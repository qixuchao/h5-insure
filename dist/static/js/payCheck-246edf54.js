import{d as a,i as e,cP as s,j as t,aI as o,O as r,bl as n,l as c,bb as d,o as l,m as i,w as u,b as m,u as p,c as f,f as v,a as h}from"./index-bfdeed22.js";import{u as b,b as w,c as g}from"./core-fdf5e9c8.js";import{u as y}from"./useThread-637a02aa.js";const x={key:0,class:"wait-loading"},I={key:1,class:"result-view"},_={class:"content-box"},k=h("div",{class:"content"},"开通成功，正在为您生成保单...",-1),j=h("div",{class:"tip"},"请勿返回或退出",-1),N=a({__name:"payCheck",setup(a){const N=e().query,C=s(),P=t(!1),T=t(!1),$=t(""),q=t(!0);let B;const D=()=>{w({tenantId:N.tenantId,orderNo:N.orderNo}).then((a=>{const{code:e,data:s}=a;"10000"===e&&(q.value=!1);const t=s.redirectUrl||`/baseInsurance/orderDetail?orderNo=${N.businessTradeNo}&tenantId=${N.tenantId}&productCode=${N.productCode}`;1==+s.status?(T.value=!0,B.stop(),window.location.href=t):1==+N.from_wxpay?P.value=!0:g(N)})).catch()};return B=y({start:()=>{console.log("开始轮询"),D()},stop:()=>{console.log("结束轮询"),T.value||o.alert({title:"提示",message:"未查到支付成功状态，请检查是否已支付完成",confirmButtonText:"好的，我知道了"}).then((()=>{window.location.href=$.value}))},time:2e3,number:5}),b(),r((()=>{1==+N.from_wxpay?(P.value=!0,B.run()):D()})),(a,e)=>{const s=n,t=c("ProPageWrap"),o=d;return l(),i(o,{"theme-vars":p(C)},{default:u((()=>[m(t,{"main-class":"page-pay-check"},{default:u((()=>[p(q)&&!p(P)?(l(),f("div",x,"加载中，请稍候...")):v("",!0),!p(q)&&p(P)?(l(),f("div",I,[h("div",_,[m(s,{name:"checked",class:"large-icon"}),k,j])])):v("",!0)])),_:1})])),_:1},8,["theme-vars"])}}});export{N as default};
