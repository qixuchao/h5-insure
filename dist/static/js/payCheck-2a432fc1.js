var t=Object.defineProperty,e=(e,s,a)=>(((e,s,a)=>{s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a})(e,"symbol"!=typeof s?s+"":s,a),a);import{d as s,a,r as i,a5 as r,z as o,b as n,c,e as m,w as u,g as l,j as d,i as h,f as p}from"./index-822014a5.js";import{u as b,c as v,d as f}from"./core-73b12cc5.js";import"./pdfdist-c7cc8cdf.js";import"./index-e5f4cc40.js";const w=()=>{};class y{constructor(t){e(this,"params"),e(this,"time",1e3),e(this,"total",0),e(this,"timer"),this.params=this.init(t)}init(t){const e={start:t.start||w,stop:t.stop||w,number:t.number?Math.abs(t.number):0,time:t.time?Math.abs(t.time):300};return this.time=t.time,e}run(){this.timer=setTimeout(this.runTime.bind(this),this.time)}stop(){clearTimeout(this.timer),this.params.stop()}runTime(){try{this.params.start()}finally{if(this.params.number>0){if(this.total>=this.params.number)return this.params.stop(),void clearTimeout(this.timer);this.total||(this.total=1),this.total+=1}clearTimeout(this.timer)}this.timer=setTimeout(this.runTime.bind(this),this.time)}}const T={key:0,class:"wait-loading"},g={key:1,class:"result-view"},x={class:"content-box"},j=h("div",{class:"content"},"开通成功，正在为您生成保单...",-1),I=h("div",{class:"tip"},"请勿返回或退出",-1),k=s({setup(t){const e=a().query,s=i(!1),w=i(!1),k=i(""),N=i(!0);let P;const $=()=>{v({tenantId:e.tenantId,orderNo:e.orderNo}).then((t=>{const{code:a,data:i}=t;"10000"===a&&(N.value=!1);const r=i.redirectUrl||`/baseInsurance/orderDetail?orderNo=${e.businessTradeNo}&tenantId=${e.tenantId}&productCode=${e.productCode}`;1==+i.status?(w.value=!0,P.stop(),window.location.href=r):1==+e.from_wxpay?s.value=!0:f(e)})).catch()};return P=new y({start:()=>{$()},stop:()=>{w.value||r.alert({title:"提示",message:"未查到支付成功状态，请检查是否已支付完成",confirmButtonText:"好的，我知道了"}).then((()=>{window.location.href=k.value}))},time:2e3,number:5}),b(),o((()=>{1==+e.from_wxpay?(s.value=!0,P.run()):$()})),(t,e)=>{const a=n("van-icon"),i=n("ProPageWrap");return c(),m(i,{"main-class":"page-pay-check"},{default:u((()=>[N.value&&!s.value?(c(),l("div",T,"加载中，请稍候...")):d("",!0),!N.value&&s.value?(c(),l("div",g,[h("div",x,[p(a,{name:"checked",class:"large-icon"}),j,I])])):d("",!0)])),_:1})}}});export{k as default};
