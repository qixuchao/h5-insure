import{d as a,i as e,dc as s,j as t,aN as o,l as r,aa as n,m as c,br as d,o as l,p as i,w as u,b as m,u as p,c as f,f as v,a as h}from"./index-54fc417c.js";import{u as w,c as g,d as y}from"./core-fc6da285.js";import{u as b}from"./useThread-637a02aa.js";const x={key:0,class:"wait-loading"},_={key:1,class:"result-view"},k={class:"content-box"},I=h("div",{class:"content"},"开通成功，正在为您生成保单...",-1),N=h("div",{class:"tip"},"请勿返回或退出",-1),j=a({__name:"payCheck",setup(a){const j=e().query,C=s(),T=t(!1),$=t(!1),P=t(""),q=t(!0);let B;const D=()=>{g({tenantId:j.tenantId,orderNo:j.orderNo}).then((a=>{const{code:e,data:s}=a;"10000"===e&&(q.value=!1);const t=s.redirectUrl||`/baseInsurance/orderDetail?orderNo=${j.businessTradeNo}&tenantId=${j.tenantId}&productCode=${j.productCode}`;1==+s.status?($.value=!0,B.stop(),window.location.href=t):1==+j.from_wxpay?T.value=!0:y(j)})).catch()};return B=b({start:()=>{console.log("开始轮询"),D()},stop:()=>{console.log("结束轮询"),$.value||o.alert({title:"提示",message:"未查到支付成功状态，请检查是否已支付完成",confirmButtonText:"好的，我知道了"}).then((()=>{window.location.href=P.value}))},time:2e3,number:5}),w(),r((()=>{1==+j.from_wxpay?(T.value=!0,B.run()):D()})),(a,e)=>{const s=n,t=c("ProPageWrap"),o=d;return l(),i(o,{"theme-vars":p(C)},{default:u((()=>[m(t,{"main-class":"page-pay-check"},{default:u((()=>[p(q)&&!p(T)?(l(),f("div",x,"加载中，请稍候...")):v("",!0),!p(q)&&p(T)?(l(),f("div",_,[h("div",k,[m(s,{name:"checked",class:"large-icon"}),I,N])])):v("",!0)])),_:1})])),_:1},8,["theme-vars"])}}});export{j as default};
