!function(){function t(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var e=document.createElement("style");e.innerHTML=".page-pay-check{background:#f7f7f7}.page-pay-check .wait-loading{padding:.53333rem;text-align:center}.page-pay-check .content-box{text-align:center;padding-top:1.01333rem;padding-bottom:2rem;background-color:#fff}.page-pay-check .content-box img{width:1.28rem}.page-pay-check .content-box .content{color:#00c802;margin-top:.74667rem;font-size:.48rem;font-weight:600}.page-pay-check .content-box .large-icon{font-size:1.28rem;color:#00c802}.page-pay-check .content-box .tip{color:#888;font-size:.37333rem;margin-top:.4rem}.page-pay-check .btn-go-wx{width:8.53333rem;margin:.93333rem auto;color:#fff;background-color:#00c802!important}.van-dialog__footer .van-button.van-button.van-dialog__confirm{width:100%}\n",document.head.appendChild(e),System.register(["./index-legacy-1c541a55.js","./core-legacy-c284c686.js","./pdfdist-legacy-31dd6e9b.js","./index-legacy-3fda8a40.js","./useStorage-legacy-d7b4762b.js"],(function(e){"use strict";var a,n,i,o,r,c,s,u,m,l,d,p,h,g,f,b;return{setters:[function(t){a=t.d,n=t.a,i=t.r,o=t.a4,r=t.y,c=t.b,s=t.c,u=t.e,m=t.w,l=t.g,d=t.j,p=t.i,h=t.f},function(t){g=t.u,f=t.b,b=t.c},function(){},function(){},function(){}],execute:function(){const v=()=>{};class y{constructor(e){t(this,"params",void 0),t(this,"time",1e3),t(this,"total",0),t(this,"timer",void 0),this.params=this.init(e)}init(t){const e={start:t.start||v,stop:t.stop||v,number:t.number?Math.abs(t.number):0,time:t.time?Math.abs(t.time):300};return this.time=t.time,e}run(){this.timer=setTimeout(this.runTime.bind(this),this.time)}stop(){clearTimeout(this.timer),this.params.stop()}runTime(){try{this.params.start()}finally{if(this.params.number>0){if(this.total>=this.params.number)return this.params.stop(),void clearTimeout(this.timer);this.total||(this.total=1),this.total+=1}clearTimeout(this.timer)}this.timer=setTimeout(this.runTime.bind(this),this.time)}}const w={key:0,class:"wait-loading"},k={key:1,class:"result-view"},x={class:"content-box"},T=p("div",{class:"content"},"开通成功，正在为您生成保单...",-1),j=p("div",{class:"tip"},"请勿返回或退出",-1);e("default",a({setup(t){const e=n().query,a=i(!1),v=i(!1),_=i(""),I=i(!0);let N;const z=()=>{f({tenantId:e.tenantId,orderNo:e.orderNo}).then((t=>{const{code:n,data:i}=t;"10000"===n&&(I.value=!1);const o=i.redirectUrl||`/baseInsurance/orderDetail?orderNo=${e.businessTradeNo}&tenantId=${e.tenantId}&productCode=${e.productCode}`;1==+i.status?(v.value=!0,N.stop(),window.location.href=o):1==+e.from_wxpay?a.value=!0:b(e)})).catch()};return N=new y({start:()=>{z()},stop:()=>{v.value||o.alert({title:"提示",message:"未查到支付成功状态，请检查是否已支付完成",confirmButtonText:"好的，我知道了"}).then((()=>{window.location.href=_.value}))},time:2e3,number:5}),g(),r((()=>{1==+e.from_wxpay?(a.value=!0,N.run()):z()})),(t,e)=>{const n=c("van-icon"),i=c("ProPageWrap");return s(),u(i,{"main-class":"page-pay-check"},{default:m((()=>[I.value&&!a.value?(s(),l("div",w,"加载中，请稍候...")):d("",!0),!I.value&&a.value?(s(),l("div",k,[p("div",x,[h(n,{name:"checked",class:"large-icon"}),T,j])])):d("",!0)])),_:1})}}}))}}}))}();
