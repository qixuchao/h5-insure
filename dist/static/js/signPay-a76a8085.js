var t=Object.defineProperty,s=(s,a,e)=>(((s,a,e)=>{a in s?t(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e})(s,"symbol"!=typeof a?a+"":a,e),e);import{i as a,P as e,r as i,k as r,D as n,l as o,m,n as c,p as l,s as u,B as h,t as d,G as p}from"./vendor-a007eb5d.js";import{i as b,a as v,b as f}from"./core-06aa03f8.js";import"./index-92c65efa.js";import"./index-12c50db1.js";const y=()=>{};class T{constructor(t){s(this,"params"),s(this,"time",1e3),s(this,"total",0),s(this,"timer"),this.params=this.init(t)}init(t){const s={start:t.start||y,stop:t.stop||y,number:t.number?Math.abs(t.number):0,time:t.time?Math.abs(t.time):300};return this.time=t.time,s}run(){this.timer=setTimeout(this.runTime.bind(this),this.time)}stop(){clearTimeout(this.timer),this.params.stop()}runTime(){try{this.params.start()}finally{if(this.params.number>0){if(this.total>=this.params.number)return this.params.stop(),void clearTimeout(this.timer);this.total||(this.total=1),this.total+=1}clearTimeout(this.timer)}this.timer=setTimeout(this.runTime.bind(this),this.time)}}const g={key:0,class:"result-view"},w={class:"content-box"},x=h("div",{class:"content"},"开通成功，正在为您生成保单...",-1),k=h("div",{class:"tip"},"请勿返回或退出",-1),j={key:1,class:"sign-view"},I={class:"content-box"},N=h("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),P=h("div",{class:"tip"},"确保您的保障按月生效",-1),B=p(" 前往微信开通 "),_=a({setup(t){const s=e().query,a=i(!1),p=async()=>{v(s)};let y;var _;return _={start:()=>{f({tenantId:s.tenantId,orderNo:s.orderNo}).then((t=>{const{code:a,data:e}=t;"10000"===a&&1==+e.status&&(y.stop(),window.location.href=`/baseInsurance/orderDetail?orderNo=${s.businessTradeNo}&tenantId=${s.tenantId}`)})).catch()},stop:()=>{},time:2e3,number:20},y=new T(_),r((async()=>{1==+s.from_wxpay?(a.value=!0,y.run()):b&&n.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{v(s)}))})),(t,s)=>{const e=o("van-icon"),i=o("VanButton"),r=o("ProPageWrap");return m(),c(r,{"main-class":"page-sign-pay"},{default:l((()=>[a.value?(m(),u("div",g,[h("div",w,[d(e,{name:"checked",class:"large-icon"}),x,k])])):(m(),u("div",j,[h("div",I,[d(e,{name:"wechat-pay",class:"large-icon"}),N,P]),d(i,{size:"large",block:"",class:"btn-go-wx",onClick:p},{default:l((()=>[B])),_:1})]))])),_:1})}}});export{_ as default};
