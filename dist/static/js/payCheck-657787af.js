var t=Object.defineProperty,e=(e,a,s)=>(((e,a,s)=>{a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s})(e,"symbol"!=typeof a?a+"":a,s),s);import{d as a,a as s,r as i,a5 as r,y as o,b as n,c as m,e as c,w as u,g as l,j as h,i as d,f as p}from"./index-a8f994b3.js";import{u as b,b as v,c as f}from"./core-7738aa76.js";import"./pdfh5-e5c0db2a.js";import"./index-c6b2b786.js";import"./useStorage-aa426b6c.js";const y=()=>{};class w{constructor(t){e(this,"params"),e(this,"time",1e3),e(this,"total",0),e(this,"timer"),this.params=this.init(t)}init(t){const e={start:t.start||y,stop:t.stop||y,number:t.number?Math.abs(t.number):0,time:t.time?Math.abs(t.time):300};return this.time=t.time,e}run(){this.timer=setTimeout(this.runTime.bind(this),this.time)}stop(){clearTimeout(this.timer),this.params.stop()}runTime(){try{this.params.start()}finally{if(this.params.number>0){if(this.total>=this.params.number)return this.params.stop(),void clearTimeout(this.timer);this.total||(this.total=1),this.total+=1}clearTimeout(this.timer)}this.timer=setTimeout(this.runTime.bind(this),this.time)}}const T={key:0,class:"wait-loading"},g={key:1,class:"result-view"},j={class:"content-box"},x=d("div",{class:"content"},"开通成功，正在为您生成保单...",-1),I=d("div",{class:"tip"},"请勿返回或退出",-1),k=a({setup(t){const e=s().query,a=i(!1),y=i(!1),k=i(""),N=i(!0);let P;const $=()=>{v({tenantId:e.tenantId,orderNo:e.orderNo}).then((t=>{const{code:s,data:i}=t;"10000"===s&&(N.value=!1);const r=i.redirectUrl||`/baseInsurance/orderDetail?orderNo=${e.businessTradeNo}&tenantId=${e.tenantId}&productCode=${e.productCode}`;1==+i.status?(y.value=!0,P.stop(),window.location.href=r):1==+e.from_wxpay?a.value=!0:f(e)})).catch()};return P=new w({start:()=>{$()},stop:()=>{y.value||r.alert({title:"提示",message:"未查到支付成功状态，请检查是否已支付完成",confirmButtonText:"好的，我知道了"}).then((()=>{window.location.href=k.value}))},time:2e3,number:5}),b(),o((()=>{1==+e.from_wxpay?(a.value=!0,P.run()):$()})),(t,e)=>{const s=n("van-icon"),i=n("ProPageWrap");return m(),c(i,{"main-class":"page-pay-check"},{default:u((()=>[N.value&&!a.value?(m(),l("div",T,"加载中，请稍候...")):h("",!0),!N.value&&a.value?(m(),l("div",g,[d("div",j,[p(s,{name:"checked",class:"large-icon"}),x,I])])):h("",!0)])),_:1})}}});export{k as default};
