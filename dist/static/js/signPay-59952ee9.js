var t=Object.defineProperty,s=(s,e,a)=>(((s,e,a)=>{e in s?t(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a})(s,"symbol"!=typeof e?e+"":e,a),a);import{m as e,u as a,r as i,o as r,D as n,s as o,t as c,v as m,x as l,C as u,E as d,U as h,H as p}from"./vendor-fd650291.js";import{an as b,ao as v,ap as f}from"./index-823b7915.js";const y=()=>{};class T{constructor(t){s(this,"params"),s(this,"time",1e3),s(this,"total",0),s(this,"timer"),this.params=this.init(t)}init(t){const s={start:t.start||y,stop:t.stop||y,number:t.number?Math.abs(t.number):0,time:t.time?Math.abs(t.time):300};return this.time=t.time,s}run(){this.timer=setTimeout(this.runTime.bind(this),this.time)}stop(){clearTimeout(this.timer),this.params.stop()}runTime(){try{this.params.start()}finally{if(this.params.number>0){if(this.total>=this.params.number)return this.params.stop(),void clearTimeout(this.timer);this.total||(this.total=1),this.total+=1}clearTimeout(this.timer)}this.timer=setTimeout(this.runTime.bind(this),this.time)}}const g={key:0,class:"result-view"},w={class:"content-box"},x=d("div",{class:"content"},"开通成功，正在为您生成保单...",-1),k=d("div",{class:"tip"},"请勿返回或退出",-1),I={key:1,class:"sign-view"},C={class:"content-box"},N=d("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),j=d("div",{class:"tip"},"确保您的保障按月生效",-1),P=p(" 前往微信开通 "),$=e({setup(t){const s=a().query,e=i(!1),p=async()=>{v(s)};let y;var $;return $={start:()=>{f({tenantId:s.tenantId,orderNo:s.orderNo}).then((t=>{const{code:e,data:a}=t;"10000"===e&&1==+a.status&&(y.stop(),window.location.href=a.redirectUrl||`/baseInsurance/orderDetail?orderNo=${s.businessTradeNo}&tenantId=${s.tenantId}&productCode=${s.productCode}`)})).catch()},stop:()=>{},time:2e3,number:20},y=new T($),r((async()=>{1==+s.from_wxpay?(e.value=!0,y.run()):b&&n.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{v(s)}))})),(t,s)=>{const a=o("van-icon"),i=o("VanButton"),r=o("ProPageWrap");return c(),m(r,{"main-class":"page-sign-pay"},{default:l((()=>[e.value?(c(),u("div",g,[d("div",w,[h(a,{name:"checked",class:"large-icon"}),x,k])])):(c(),u("div",I,[d("div",C,[h(a,{name:"wechat-pay",class:"large-icon"}),N,j]),h(i,{size:"large",block:"",class:"btn-go-wx",onClick:p},{default:l((()=>[P])),_:1})]))])),_:1})}}});export{$ as default};
