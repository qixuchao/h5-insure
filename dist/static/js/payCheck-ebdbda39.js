import{d as a,i as e,df as s,j as t,aW as o,l as r,aa as n,m as c,bC as d,o as l,p as i,w as u,b as m,u as p,c as f,f as v,a as h}from"./index-b2da35c9.js";import{u as w,c as b,e as g}from"./core-a65d39f9.js";import{u as y}from"./useThread-637a02aa.js";const x={key:0,class:"wait-loading"},_={key:1,class:"result-view"},k={class:"content-box"},I=h("div",{class:"content"},"开通成功，正在为您生成保单...",-1),j=h("div",{class:"tip"},"请勿返回或退出",-1),C=a({__name:"payCheck",setup(a){const C=e().query,N=s(),T=t(!1),$=t(!1),P=t(""),W=t(!0);let q;const B=()=>{b({tenantId:C.tenantId,orderNo:C.orderNo}).then((a=>{const{code:e,data:s}=a;"10000"===e&&(W.value=!1);const t=s.redirectUrl||`/baseInsurance/orderDetail?orderNo=${C.businessTradeNo}&tenantId=${C.tenantId}&productCode=${C.productCode}`;1==+s.status?($.value=!0,q.stop(),window.location.href=t):1==+C.from_wxpay?T.value=!0:g(C)})).catch()};return q=y({start:()=>{console.log("开始轮询"),B()},stop:()=>{console.log("结束轮询"),$.value||o.alert({title:"提示",message:"未查到支付成功状态，请检查是否已支付完成",confirmButtonText:"好的，我知道了"}).then((()=>{window.location.href=P.value}))},time:2e3,number:5}),w(),r((()=>{1==+C.from_wxpay?(T.value=!0,q.run()):B()})),(a,e)=>{const s=n,t=c("ProPageWrap"),o=d;return l(),i(o,{"theme-vars":p(N)},{default:u((()=>[m(t,{"main-class":"page-pay-check"},{default:u((()=>[p(W)&&!p(T)?(l(),f("div",x,"加载中，请稍候...")):v("",!0),!p(W)&&p(T)?(l(),f("div",_,[h("div",k,[m(s,{name:"checked",class:"large-icon"}),I,j])])):v("",!0)])),_:1})])),_:1},8,["theme-vars"])}}});export{C as default};
