var t=Object.defineProperty,e=(e,s,a)=>(((e,s,a)=>{s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a})(e,"symbol"!=typeof s?s+"":s,a),a);import{h as s,N as a,r as i,D as r,j as o,k as n,l as m,m as c,n as l,y as u,s as d,z as h,Q as p}from"./vendor-d6fdc679.js";import{u as v,b,c as f}from"./core-c6aac715.js";import"./index-51d99e89.js";import"./index-d68257af.js";const y=()=>{};class w{constructor(t){e(this,"params"),e(this,"time",1e3),e(this,"total",0),e(this,"timer"),this.params=this.init(t)}init(t){const e={start:t.start||y,stop:t.stop||y,number:t.number?Math.abs(t.number):0,time:t.time?Math.abs(t.time):300};return this.time=t.time,e}run(){this.timer=setTimeout(this.runTime.bind(this),this.time)}stop(){clearTimeout(this.timer),this.params.stop()}runTime(){try{this.params.start()}finally{if(this.params.number>0){if(this.total>=this.params.number)return this.params.stop(),void clearTimeout(this.timer);this.total||(this.total=1),this.total+=1}clearTimeout(this.timer)}this.timer=setTimeout(this.runTime.bind(this),this.time)}}const T={key:0,class:"wait-loading"},x={key:1,class:"result-view"},g={class:"content-box"},j=h("div",{class:"content"},"开通成功，正在为您生成保单...",-1),k=h("div",{class:"tip"},"请勿返回或退出",-1),I=s({setup(t){const e=a().query,s=i(!1),y=i(!1),I=i(""),N=i(!0);let P;const $=()=>{b({tenantId:e.tenantId,orderNo:e.orderNo}).then((t=>{const{code:a,data:i}=t;"10000"===a&&(N.value=!1);const r=i.redirectUrl||`/baseInsurance/orderDetail?orderNo=${e.businessTradeNo}&tenantId=${e.tenantId}&productCode=${e.productCode}`;1==+i.status?(y.value=!0,P.stop(),window.location.href=r):1==+e.from_wxpay?s.value=!0:f(e)})).catch()};return P=new w({start:()=>{$()},stop:()=>{y.value||r.alert({title:"提示",message:"未查到支付成功状态，请检查是否已支付完成",confirmButtonText:"好的，我知道了"}).then((()=>{window.location.href=I.value}))},time:2e3,number:5}),v(),o((()=>{1==+e.from_wxpay?(s.value=!0,P.run()):$()})),(t,e)=>{const a=n("van-icon"),i=n("ProPageWrap");return m(),c(i,{"main-class":"page-pay-check"},{default:l((()=>[N.value&&!s.value?(m(),u("div",T,"加载中，请稍候...")):d("",!0),!N.value&&s.value?(m(),u("div",x,[h("div",g,[p(a,{name:"checked",class:"large-icon"}),j,k])])):d("",!0)])),_:1})}}});export{I as default};
