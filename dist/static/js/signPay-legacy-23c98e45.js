!function(){var e=document.createElement("style");e.innerHTML=".page-sign-pay{background:#f7f7f7}.page-sign-pay .content-box{text-align:center;padding-top:1.01333rem;padding-bottom:2rem;background-color:#fff}.page-sign-pay .content-box img{width:1.28rem}.page-sign-pay .content-box .content{color:#00c802;margin-top:.74667rem;font-size:.48rem;font-weight:600}.page-sign-pay .content-box .large-icon{font-size:1.28rem;color:#00c802}.page-sign-pay .content-box .tip{color:#888;font-size:.37333rem;margin-top:.4rem}.page-sign-pay .btn-go-wx{width:8.53333rem;margin:.93333rem auto;color:#fff;background-color:#00c802!important}.van-dialog__footer .van-button.van-button.van-dialog__confirm{width:100%}\n",document.head.appendChild(e),System.register(["./index-legacy-f1256a32.js","./core-legacy-da0cefe5.js","./pdfh5-legacy-9f98dc45.js"],(function(e){"use strict";var n,t,a,o,c,i,r,s,g,l,p,f,d,u,m,y;return{setters:[function(e){n=e.d,t=e.a,a=e.u,o=e.r,c=e.G,i=e.aj,r=e.b4,s=e.B,g=e.c,l=e.e,p=e.w,f=e.j,d=e.f,u=e.n,m=e.b},function(e){y=e.i},function(){}],execute:function(){const b={class:"sign-view"},h={class:"content-box"},x=f("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),v=f("div",{class:"tip"},"确保您的保障按月生效",-1);e("default",n({__name:"signPay",setup(e){const n=t().query,w=a();o(!1),o(!1),o("");const _=()=>{w.replace({path:"/cashier/payCheck",query:n})};return c((()=>{y&&i.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{_()}))})),(e,n)=>{const t=r,a=s,o=m("ProPageWrap");return g(),l(o,{"main-class":"page-sign-pay"},{default:p((()=>[f("div",b,[f("div",h,[d(t,{name:"wechat-pay",class:"large-icon"}),x,v]),d(a,{size:"large",block:"",class:"btn-go-wx",onClick:_},{default:p((()=>[u(" 前往微信开通 ")])),_:1})])])),_:1})}}}))}}}))}();
