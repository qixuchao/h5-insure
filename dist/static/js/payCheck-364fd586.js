import{d as a,u as e,bH as s,r as t,D as o,Z as r,ah as n,a3 as c,bq as d,b as l,g as i,w as u,e as m,f as p,c as v,h as f,i as h}from"./index-909b9511.js";import{u as b,b as w,c as g}from"./core-60f4cd6a.js";import{u as y}from"./useThread-c502137a.js";const x={key:0,class:"wait-loading"},_={key:1,class:"result-view"},k={class:"content-box"},I=h("div",{class:"content"},"开通成功，正在为您生成保单...",-1),N=h("div",{class:"tip"},"请勿返回或退出",-1),j=a({__name:"payCheck",setup(a){const j=e().query,C=s(),T=t(!1),$=t(!1),q=t(""),D=t(!0);let P;const B=()=>{w({tenantId:j.tenantId,orderNo:j.orderNo}).then((a=>{const{code:e,data:s}=a;"10000"===e&&(D.value=!1);const t=s.redirectUrl||`/baseInsurance/orderDetail?orderNo=${j.businessTradeNo}&tenantId=${j.tenantId}&productCode=${j.productCode}`;1==+s.status?($.value=!0,P.stop(),window.location.href=t):1==+j.from_wxpay?T.value=!0:g(j)})).catch()};return P=y({start:()=>{console.log("开始轮询"),B()},stop:()=>{console.log("结束轮询"),$.value||o.alert({title:"提示",message:"未查到支付成功状态，请检查是否已支付完成",confirmButtonText:"好的，我知道了"}).then((()=>{window.location.href=q.value}))},time:2e3,number:5}),b(),r((()=>{1==+j.from_wxpay?(T.value=!0,P.run()):B()})),(a,e)=>{const s=n,t=c("ProPageWrap"),o=d;return l(),i(o,{"theme-vars":p(C)},{default:u((()=>[m(t,{"main-class":"page-pay-check"},{default:u((()=>[p(D)&&!p(T)?(l(),v("div",x,"加载中，请稍候...")):f("",!0),!p(D)&&p(T)?(l(),v("div",_,[h("div",k,[m(s,{name:"checked",class:"large-icon"}),I,N])])):f("",!0)])),_:1})])),_:1},8,["theme-vars"])}}});export{j as default};
