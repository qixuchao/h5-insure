!function(){var n=document.createElement("style");n.innerHTML=".page-sign-pay{background:#f7f7f7}.page-sign-pay .content-box{text-align:center;padding-top:1.01333rem;padding-bottom:2rem;background-color:#fff}.page-sign-pay .content-box img{width:1.28rem}.page-sign-pay .content-box .content{color:#00c802;margin-top:.74667rem;font-size:.48rem;font-weight:600}.page-sign-pay .content-box .large-icon{font-size:1.28rem;color:#00c802}.page-sign-pay .content-box .tip{color:#888;font-size:.37333rem;margin-top:.4rem}.page-sign-pay .btn-go-wx{width:8.53333rem;margin:.93333rem auto;color:#fff;background-color:#00c802!important}.van-dialog__footer .van-button.van-button.van-dialog__confirm{width:100%}\n",document.head.appendChild(n),System.register(["./index-legacy-9022d786.js","./core-legacy-76b60242.js","./pdfh5-legacy-783b46b8.js","./index-legacy-8806fe1e.js","./useStorage-legacy-49e8cfd9.js"],(function(n){"use strict";var e,t,o,a,c,i,r,s,g,l,p,f,u,d;return{setters:[function(n){e=n.d,t=n.a,o=n.u,a=n.r,c=n.y,i=n.a5,r=n.b,s=n.c,g=n.e,l=n.w,p=n.i,f=n.f,u=n.n},function(n){d=n.i},function(){},function(){},function(){}],execute:function(){const m={class:"sign-view"},y={class:"content-box"},b=p("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),x=p("div",{class:"tip"},"确保您的保障按月生效",-1),h=u(" 前往微信开通 ");n("default",e({setup(n){const e=t().query,u=o();a(!1),a(!1),a("");const v=()=>{u.replace({path:"/cashier/payCheck",query:e})};return c((()=>{d&&i.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{v()}))})),(n,e)=>{const t=r("van-icon"),o=r("VanButton"),a=r("ProPageWrap");return s(),g(a,{"main-class":"page-sign-pay"},{default:l((()=>[p("div",m,[p("div",y,[f(t,{name:"wechat-pay",class:"large-icon"}),b,x]),f(o,{size:"large",block:"",class:"btn-go-wx",onClick:v},{default:l((()=>[h])),_:1})])])),_:1})}}}))}}}))}();
