import{d as a,h as e,cG as s,i as t,aI as o,O as r,bl as n,k as c,bb as d,o as l,l as i,w as u,b as m,u as p,c as v,q as f,a as h}from"./index-8067fbb0.js";import{u as b,b as w,c as g}from"./core-59a96e5d.js";import{u as y}from"./useThread-637a02aa.js";const k={key:0,class:"wait-loading"},x={key:1,class:"result-view"},I={class:"content-box"},_=h("div",{class:"content"},"开通成功，正在为您生成保单...",-1),N=h("div",{class:"tip"},"请勿返回或退出",-1),j=a({__name:"payCheck",setup(a){const j=e().query,C=s(),T=t(!1),$=t(!1),q=t(""),P=t(!0);let B;const D=()=>{w({tenantId:j.tenantId,orderNo:j.orderNo}).then((a=>{const{code:e,data:s}=a;"10000"===e&&(P.value=!1);const t=s.redirectUrl||`/baseInsurance/orderDetail?orderNo=${j.businessTradeNo}&tenantId=${j.tenantId}&productCode=${j.productCode}`;1==+s.status?($.value=!0,B.stop(),window.location.href=t):1==+j.from_wxpay?T.value=!0:g(j)})).catch()};return B=y({start:()=>{console.log("开始轮询"),D()},stop:()=>{console.log("结束轮询"),$.value||o.alert({title:"提示",message:"未查到支付成功状态，请检查是否已支付完成",confirmButtonText:"好的，我知道了"}).then((()=>{window.location.href=q.value}))},time:2e3,number:5}),b(),r((()=>{1==+j.from_wxpay?(T.value=!0,B.run()):D()})),(a,e)=>{const s=n,t=c("ProPageWrap"),o=d;return l(),i(o,{"theme-vars":p(C)},{default:u((()=>[m(t,{"main-class":"page-pay-check"},{default:u((()=>[p(P)&&!p(T)?(l(),v("div",k,"加载中，请稍候...")):f("",!0),!p(P)&&p(T)?(l(),v("div",x,[h("div",I,[m(s,{name:"checked",class:"large-icon"}),_,N])])):f("",!0)])),_:1})])),_:1},8,["theme-vars"])}}});export{j as default};
