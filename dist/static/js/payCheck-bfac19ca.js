import{d as a,u as e,bI as s,r as t,D as o,Z as r,ah as n,a3 as c,bs as d,b as l,g as i,w as u,e as m,f as p,c as f,h as v,i as h}from"./index-eeb199d1.js";import{u as b,b as w,c as g}from"./core-fca0f200.js";import{u as y}from"./useThread-637a02aa.js";const x={key:0,class:"wait-loading"},I={key:1,class:"result-view"},_={class:"content-box"},k=h("div",{class:"content"},"开通成功，正在为您生成保单...",-1),N=h("div",{class:"tip"},"请勿返回或退出",-1),j=a({__name:"payCheck",setup(a){const j=e().query,C=s(),T=t(!1),$=t(!1),D=t(""),P=t(!0);let q;const B=()=>{w({tenantId:j.tenantId,orderNo:j.orderNo}).then((a=>{const{code:e,data:s}=a;"10000"===e&&(P.value=!1);const t=s.redirectUrl||`/baseInsurance/orderDetail?orderNo=${j.businessTradeNo}&tenantId=${j.tenantId}&productCode=${j.productCode}`;1==+s.status?($.value=!0,q.stop(),window.location.href=t):1==+j.from_wxpay?T.value=!0:g(j)})).catch()};return q=y({start:()=>{console.log("开始轮询"),B()},stop:()=>{console.log("结束轮询"),$.value||o.alert({title:"提示",message:"未查到支付成功状态，请检查是否已支付完成",confirmButtonText:"好的，我知道了"}).then((()=>{window.location.href=D.value}))},time:2e3,number:5}),b(),r((()=>{1==+j.from_wxpay?(T.value=!0,q.run()):B()})),(a,e)=>{const s=n,t=c("ProPageWrap"),o=d;return l(),i(o,{"theme-vars":p(C)},{default:u((()=>[m(t,{"main-class":"page-pay-check"},{default:u((()=>[p(P)&&!p(T)?(l(),f("div",x,"加载中，请稍候...")):v("",!0),!p(P)&&p(T)?(l(),f("div",I,[h("div",_,[m(s,{name:"checked",class:"large-icon"}),k,N])])):v("",!0)])),_:1})])),_:1},8,["theme-vars"])}}});export{j as default};
