import{d as a,i as e,d7 as s,j as t,aD as o,l as r,bt as n,m as c,bh as d,o as l,p as i,w as u,b as m,u as p,c as f,f as v,a as h}from"./index-86787787.js";import{u as w,b,c as g}from"./core-ff1aecec.js";import{u as y}from"./useThread-637a02aa.js";const x={key:0,class:"wait-loading"},_={key:1,class:"result-view"},k={class:"content-box"},I=h("div",{class:"content"},"开通成功，正在为您生成保单...",-1),j=h("div",{class:"tip"},"请勿返回或退出",-1),N=a({__name:"payCheck",setup(a){const N=e().query,C=s(),T=t(!1),$=t(!1),D=t(""),P=t(!0);let q;const B=()=>{b({tenantId:N.tenantId,orderNo:N.orderNo}).then((a=>{const{code:e,data:s}=a;"10000"===e&&(P.value=!1);const t=s.redirectUrl||`/baseInsurance/orderDetail?orderNo=${N.businessTradeNo}&tenantId=${N.tenantId}&productCode=${N.productCode}`;1==+s.status?($.value=!0,q.stop(),window.location.href=t):1==+N.from_wxpay?T.value=!0:g(N)})).catch()};return q=y({start:()=>{console.log("开始轮询"),B()},stop:()=>{console.log("结束轮询"),$.value||o.alert({title:"提示",message:"未查到支付成功状态，请检查是否已支付完成",confirmButtonText:"好的，我知道了"}).then((()=>{window.location.href=D.value}))},time:2e3,number:5}),w(),r((()=>{1==+N.from_wxpay?(T.value=!0,q.run()):B()})),(a,e)=>{const s=n,t=c("ProPageWrap"),o=d;return l(),i(o,{"theme-vars":p(C)},{default:u((()=>[m(t,{"main-class":"page-pay-check"},{default:u((()=>[p(P)&&!p(T)?(l(),f("div",x,"加载中，请稍候...")):v("",!0),!p(P)&&p(T)?(l(),f("div",_,[h("div",k,[m(s,{name:"checked",class:"large-icon"}),I,j])])):v("",!0)])),_:1})])),_:1},8,["theme-vars"])}}});export{N as default};
