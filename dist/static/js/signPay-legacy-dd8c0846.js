!function(){function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var e=document.createElement("style");e.innerHTML=".page-sign-pay{background:#f7f7f7}.page-sign-pay .content-box{text-align:center;padding-top:1.01333rem;padding-bottom:2rem;background-color:#fff}.page-sign-pay .content-box img{width:1.28rem}.page-sign-pay .content-box .content{color:#00c802;margin-top:.74667rem;font-size:.48rem;font-weight:600}.page-sign-pay .content-box .large-icon{font-size:1.28rem;color:#00c802}.page-sign-pay .content-box .tip{color:#888;font-size:.37333rem;margin-top:.4rem}.page-sign-pay .btn-go-wx{width:8.53333rem;margin:.93333rem auto;color:#fff;background-color:#00c802!important}.van-dialog__footer .van-button.van-button.van-dialog__confirm{width:100%}\n",document.head.appendChild(e),System.register(["./vendor-legacy-138e8bc1.js","./index-legacy-32aa29e8.js"],(function(e){"use strict";var n,i,a,o,s,r,c,m,l,u,d,p,g,h,b,f;return{setters:[function(t){n=t.m,i=t.u,a=t.r,o=t.o,s=t.D,r=t.s,c=t.t,m=t.v,l=t.x,u=t.y,d=t.G,p=t.z,g=t.J},function(t){h=t.an,b=t.ao,f=t.ap}],execute:function(){const v=()=>{};class y{constructor(e){t(this,"params",void 0),t(this,"time",1e3),t(this,"total",0),t(this,"timer",void 0),this.params=this.init(e)}init(t){const e={start:t.start||v,stop:t.stop||v,number:t.number?Math.abs(t.number):0,time:t.time?Math.abs(t.time):300};return this.time=t.time,e}run(){this.timer=setTimeout(this.runTime.bind(this),this.time)}stop(){clearTimeout(this.timer),this.params.stop()}runTime(){try{this.params.start()}finally{if(this.params.number>0){if(this.total>=this.params.number)return this.params.stop(),void clearTimeout(this.timer);this.total||(this.total=1),this.total+=1}clearTimeout(this.timer)}this.timer=setTimeout(this.runTime.bind(this),this.time)}}const x={key:0,class:"result-view"},w={class:"content-box"},T=d("div",{class:"content"},"开通成功，正在为您生成保单...",-1),k=d("div",{class:"tip"},"请勿返回或退出",-1),_={key:1,class:"sign-view"},z={class:"content-box"},I=d("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),N=d("div",{class:"tip"},"确保您的保障按月生效",-1),j=g(" 前往微信开通 ");e("default",n({setup(t){const e=i().query,n=a(!1),g=async()=>{b(e)};let v;var M;return M={start:()=>{f({tenantId:e.tenantId,orderNo:e.orderNo}).then((t=>{const{code:n,data:i}=t;"10000"===n&&1==+i.status&&(v.stop(),window.location.href=`/baseInsurance/orderDetail?orderNo=${e.businessTradeNo}&tenantId=${e.tenantId}`)})).catch()},stop:()=>{},time:2e3,number:20},v=new y(M),o((async()=>{1==+e.from_wxpay?(n.value=!0,v.run()):h&&s.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{b(e)}))})),(t,e)=>{const i=r("van-icon"),a=r("VanButton"),o=r("ProPageWrap");return c(),m(o,{"main-class":"page-sign-pay"},{default:l((()=>[n.value?(c(),u("div",x,[d("div",w,[p(i,{name:"checked",class:"large-icon"}),T,k])])):(c(),u("div",_,[d("div",z,[p(i,{name:"wechat-pay",class:"large-icon"}),I,N]),p(a,{size:"large",block:"",class:"btn-go-wx",onClick:g},{default:l((()=>[j])),_:1})]))])),_:1})}}}))}}}))}();
