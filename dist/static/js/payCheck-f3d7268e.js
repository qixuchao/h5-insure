import{d as a,i as e,cI as s,j as t,aI as o,O as r,bl as n,l as c,bb as d,o as l,m as i,w as u,b as m,u as p,c as v,f,a as h}from"./index-867889f2.js";import{u as b,b as w,c as g}from"./core-9641d1a1.js";import{u as y}from"./useThread-637a02aa.js";const I={key:0,class:"wait-loading"},x={key:1,class:"result-view"},_={class:"content-box"},k=h("div",{class:"content"},"开通成功，正在为您生成保单...",-1),j=h("div",{class:"tip"},"请勿返回或退出",-1),N=a({__name:"payCheck",setup(a){const N=e().query,C=s(),T=t(!1),$=t(!1),P=t(""),q=t(!0);let B;const D=()=>{w({tenantId:N.tenantId,orderNo:N.orderNo}).then((a=>{const{code:e,data:s}=a;"10000"===e&&(q.value=!1);const t=s.redirectUrl||`/baseInsurance/orderDetail?orderNo=${N.businessTradeNo}&tenantId=${N.tenantId}&productCode=${N.productCode}`;1==+s.status?($.value=!0,B.stop(),window.location.href=t):1==+N.from_wxpay?T.value=!0:g(N)})).catch()};return B=y({start:()=>{console.log("开始轮询"),D()},stop:()=>{console.log("结束轮询"),$.value||o.alert({title:"提示",message:"未查到支付成功状态，请检查是否已支付完成",confirmButtonText:"好的，我知道了"}).then((()=>{window.location.href=P.value}))},time:2e3,number:5}),b(),r((()=>{1==+N.from_wxpay?(T.value=!0,B.run()):D()})),(a,e)=>{const s=n,t=c("ProPageWrap"),o=d;return l(),i(o,{"theme-vars":p(C)},{default:u((()=>[m(t,{"main-class":"page-pay-check"},{default:u((()=>[p(q)&&!p(T)?(l(),v("div",I,"加载中，请稍候...")):f("",!0),!p(q)&&p(T)?(l(),v("div",x,[h("div",_,[m(s,{name:"checked",class:"large-icon"}),k,j])])):f("",!0)])),_:1})])),_:1},8,["theme-vars"])}}});export{N as default};
