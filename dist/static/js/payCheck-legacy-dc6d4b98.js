!function(){function t(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var e=document.createElement("style");e.innerHTML=".page-pay-check{background:#f7f7f7}.page-pay-check .wait-loading{padding:.53333rem;text-align:center}.page-pay-check .content-box{text-align:center;padding-top:1.01333rem;padding-bottom:2rem;background-color:#fff}.page-pay-check .content-box img{width:1.28rem}.page-pay-check .content-box .content{color:#00c802;margin-top:.74667rem;font-size:.48rem;font-weight:600}.page-pay-check .content-box .large-icon{font-size:1.28rem;color:#00c802}.page-pay-check .content-box .tip{color:#888;font-size:.37333rem;margin-top:.4rem}.page-pay-check .btn-go-wx{width:8.53333rem;margin:.93333rem auto;color:#fff;background-color:#00c802!important}.van-dialog__footer .van-button.van-button.van-dialog__confirm{width:100%}\n",document.head.appendChild(e),System.register(["./index-legacy-888dc198.js","./core-legacy-651274d4.js","./pdfh5-legacy-9f98dc45.js","./index-legacy-6edb65d2.js","./useStorage-legacy-6d392665.js"],(function(e){"use strict";var n,i,r,a,o,c,s,u,m,l,d,p,h,f,g,b,y;return{setters:[function(t){n=t.d,i=t.a,r=t.r,a=t.a6,o=t.y,c=t.b,s=t.c,u=t.e,m=t.w,l=t.g,d=t.h,p=t.k,h=t.j,f=t.f},function(t){g=t.u,b=t.b,y=t.c},function(){},function(){},function(){}],execute:function(){const v=()=>{};class w{constructor(e){t(this,"params",void 0),t(this,"time",1e3),t(this,"total",0),t(this,"timer",void 0),this.params=this.init(e)}init(t){const e={start:t.start||v,stop:t.stop||v,number:t.number?Math.abs(t.number):0,time:t.time?Math.abs(t.time):300};return this.time=t.time,e}run(){this.timer=setTimeout(this.runTime.bind(this),this.time)}stop(){clearTimeout(this.timer),this.params.stop()}runTime(){try{this.params.start()}finally{if(this.params.number>0){if(this.total>=this.params.number)return this.params.stop(),void clearTimeout(this.timer);this.total||(this.total=1),this.total+=1}clearTimeout(this.timer)}this.timer=setTimeout(this.runTime.bind(this),this.time)}}const k={key:0,class:"wait-loading"},x={key:1,class:"result-view"},T={class:"content-box"},j=h("div",{class:"content"},"开通成功，正在为您生成保单...",-1),_=h("div",{class:"tip"},"请勿返回或退出",-1);e("default",n({__name:"payCheck",setup(t){const e=i().query,n=r(!1),v=r(!1),I=r(""),N=r(!0);let P;const S=()=>{b({tenantId:e.tenantId,orderNo:e.orderNo}).then((t=>{const{code:i,data:r}=t;"10000"===i&&(N.value=!1);const a=r.redirectUrl||`/baseInsurance/orderDetail?orderNo=${e.businessTradeNo}&tenantId=${e.tenantId}&productCode=${e.productCode}`;1==+r.status?(v.value=!0,P.stop(),window.location.href=a):1==+e.from_wxpay?n.value=!0:y(e)})).catch()};return P=new w({start:()=>{S()},stop:()=>{v.value||a.alert({title:"提示",message:"未查到支付成功状态，请检查是否已支付完成",confirmButtonText:"好的，我知道了"}).then((()=>{window.location.href=I.value}))},time:2e3,number:5}),g(),o((()=>{1==+e.from_wxpay?(n.value=!0,P.run()):S()})),(t,e)=>{const i=c("van-icon"),r=c("ProPageWrap");return s(),u(r,{"main-class":"page-pay-check"},{default:m((()=>[l(N)&&!l(n)?(s(),d("div",k,"加载中，请稍候...")):p("",!0),!l(N)&&l(n)?(s(),d("div",x,[h("div",T,[f(i,{name:"checked",class:"large-icon"}),j,_])])):p("",!0)])),_:1})}}}))}}}))}();
