import{d as a,i as e,dh as s,j as t,bi as o,l as r,m as n,bC as c,o as d,p as l,w as i,b as u,u as m,c as p,f as v,a as f,aa as h}from"./index-577e8a70.js";import{u as w,c as b,e as g}from"./core-417d2426.js";import{u as y}from"./useThread-637a02aa.js";const x={key:0,class:"wait-loading"},_={key:1,class:"result-view"},k={class:"content-box"},I=f("div",{class:"content"},"开通成功，正在为您生成保单...",-1),j=f("div",{class:"tip"},"请勿返回或退出",-1),C=a({__name:"payCheck",setup(a){const C=e().query,N=s(),T=t(!1),$=t(!1),P=t(""),q=t(!0);let B;const D=()=>{b({tenantId:C.tenantId,orderNo:C.orderNo}).then((a=>{const{code:e,data:s}=a;"10000"===e&&(q.value=!1);const t=s.redirectUrl||`/baseInsurance/orderDetail?orderNo=${C.businessTradeNo}&tenantId=${C.tenantId}&productCode=${C.productCode}`;1==+s.status?($.value=!0,B.stop(),window.location.href=t):1==+C.from_wxpay?T.value=!0:g(C)})).catch()};return B=y({start:()=>{console.log("开始轮询"),D()},stop:()=>{console.log("结束轮询"),$.value||o.alert({title:"提示",message:"未查到支付成功状态，请检查是否已支付完成",confirmButtonText:"好的，我知道了"}).then((()=>{window.location.href=P.value}))},time:2e3,number:5}),w(),r((()=>{1==+C.from_wxpay?(T.value=!0,B.run()):D()})),(a,e)=>{const s=h,t=n("ProPageWrap"),o=c;return d(),l(o,{"theme-vars":m(N)},{default:i((()=>[u(t,{"main-class":"page-pay-check"},{default:i((()=>[m(q)&&!m(T)?(d(),p("div",x,"加载中，请稍候...")):v("",!0),!m(q)&&m(T)?(d(),p("div",_,[f("div",k,[u(s,{name:"checked",class:"large-icon"}),I,j])])):v("",!0)])),_:1})])),_:1},8,["theme-vars"])}}});export{C as default};
