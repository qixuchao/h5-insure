!function(){var n=document.createElement("style");n.innerHTML=".page-sign-pay{background:#f7f7f7}.page-sign-pay .content-box{text-align:center;padding-top:1.01333rem;padding-bottom:2rem;background-color:#fff}.page-sign-pay .content-box img{width:1.28rem}.page-sign-pay .content-box .content{color:#00c802;margin-top:.74667rem;font-size:.48rem;font-weight:600}.page-sign-pay .content-box .large-icon{font-size:1.28rem;color:#00c802}.page-sign-pay .content-box .tip{color:#888;font-size:.37333rem;margin-top:.4rem}.page-sign-pay .btn-go-wx{width:8.53333rem;margin:.93333rem auto;color:#fff;background-color:#00c802!important}.van-dialog__footer .van-button.van-button.van-dialog__confirm{width:100%}\n",document.head.appendChild(n),System.register(["./index-legacy-dee7ea74.js","./core-legacy-2711290b.js","./pdfh5-legacy-9f98dc45.js","./useStorage-legacy-0c9544b4.js"],(function(n){"use strict";var e,t,a,o,c,i,r,s,g,l,p,u,d,f;return{setters:[function(n){e=n.d,t=n.a,a=n.u,o=n.r,c=n.y,i=n.a6,r=n.b,s=n.c,g=n.e,l=n.w,p=n.j,u=n.f,d=n.n},function(n){f=n.i},function(){},function(){}],execute:function(){const m={class:"sign-view"},y={class:"content-box"},b=p("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),h=p("div",{class:"tip"},"确保您的保障按月生效",-1);n("default",e({__name:"signPay",setup(n){const e=t().query,v=a();o(!1),o(!1),o("");const x=()=>{v.replace({path:"/cashier/payCheck",query:e})};return c((()=>{f&&i.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{x()}))})),(n,e)=>{const t=r("van-icon"),a=r("VanButton"),o=r("ProPageWrap");return s(),g(o,{"main-class":"page-sign-pay"},{default:l((()=>[p("div",m,[p("div",y,[u(t,{name:"wechat-pay",class:"large-icon"}),b,h]),u(a,{size:"large",block:"",class:"btn-go-wx",onClick:x},{default:l((()=>[d(" 前往微信开通 ")])),_:1})])])),_:1})}}}))}}}))}();
