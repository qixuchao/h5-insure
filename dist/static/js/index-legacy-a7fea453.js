!function(){var e=document.createElement("style");e.innerHTML='.page-cashier-pay{padding:.53333rem .4rem;text-align:center;background-color:#f4f4f4}.page-cashier-pay .pay-amount{font-size:.61333rem;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#333;margin-bottom:.53333rem}.page-cashier-pay .pay-amount .amount{font-size:1.04rem;line-height:1.5}.page-cashier-pay .order-info{color:#8e8e8e;line-height:.53333rem;font-size:.37333rem}.page-cashier-pay .order-name{font-size:.42667rem}.pay-wrapper{margin:.93333rem auto 2.88rem;background:#ffffff;border-radius:.32rem}.pay-wrapper .pay-item{width:9.14667rem;height:1.70667rem;position:relative;display:flex;align-items:center;justify-content:space-between;padding:.4rem;font-size:.45333rem}.pay-wrapper .pay-item:after{content:"";position:absolute;height:1px;background-color:#e7e7e7;transform:scaleY(.7);width:7.92rem;bottom:0;right:0px}.pay-wrapper .pay-item:last-child:after{display:none}.pay-wrapper .pay-item img{width:.58667rem;margin-right:.4rem;vertical-align:sub}.pay-wrapper .pay-item .van-icon-success:before{width:.4rem;height:.34667rem}.custom-dialog .van-dialog__content--isolated{min-height:2.13333rem}.custom-dialog .van-dialog--round-button .van-dialog__footer{padding:.16rem .53333rem}.custom-dialog .van-dialog__footer .van-button{height:.85333rem}.custom-dialog .van-dialog__footer .van-button.van-dialog__confirm{color:var(--147cd89f)}\n',document.head.appendChild(e),System.register(["./index-legacy-db3cc191.js","./core-legacy-975bd7e3.js","./theme-legacy-14f266cb.js","./pdfh5-legacy-9f98dc45.js"],(function(e){"use strict";var a,o,r,n,t,i,l,d,c,s,m,u,p,g,f,v,y,h,b,w,_,x,k,C,j,N,P,z,S,T,W,B,V;return{setters:[function(e){a=e.d,o=e.a,r=e.r,n=e.cC,t=e.G,i=e.B,l=e.bT,d=e.c,c=e.e,s=e.w,m=e.f,u=e.j,p=e.n,g=e.t,f=e.g,v=e.h,y=e.k,h=e.s,b=e.a7,w=e.i,_=e.F,x=e.bX,k=e.aj,C=e.T,j=e.V,N=e.b,P=e.R},function(e){z=e.g,S=e.P,T=e.u,W=e.a,B=e.l},function(e){V=e.u},function(){}],execute:function(){const A={class:"pay-amount"},F={class:"amount"},I={class:"order-info"},U={class:"order-name"},X={class:"order-no"},Y={key:0},q={class:"pay-wrapper"},E=["src"];e("default",a({__name:"index",setup(e){var a;x((e=>({"147cd89f":f(G).primaryColor})));const G=V(),H=o().query,J=z(H.payWay||S.WXPAY);console.log(H.payWay,"-----",J);const L=r(),M=r(!1),O=r(null===(a=J[0])||void 0===a?void 0:a.name);r("h5");const R=()=>{W({...L.value,payWay:O.value,code:H.code,extraInfo:JSON.stringify({wxCode:H.code})}).then((e=>{k.confirm({message:"请确认是否已完成支付",showCancelButton:!0,confirmButtonText:"支付成功",cancelButtonText:"遇到问题",theme:"round-button",className:"custom-dialog",teleport:".page-cashier-pay"}).then((()=>{L.value&&(window.location.href=L.value.redirectUrl),console.log("订单信息",L.value)})).catch((()=>{L.value&&(window.location.href=L.value.redirectUrl)}))}))},{copy:D,copied:K,isSupported:Q}=n({source:""}),Z=()=>{var e;D(null===(e=L.value)||void 0===e?void 0:e.orderNo),C("复制成功")};return T(),t((()=>{M.value=!0,B({orderNo:H.orderNo||"P2211220947519991000001750022183",tenantId:H.tenantId||"9991000001"}).then((e=>{console.log("获取订单信息",e),"10000"===e.code&&(L.value=e.data)})).finally((()=>{M.value=!1}))})),(e,a)=>{const o=j,r=i,n=N("ProPageWrap"),t=l;return d(),c(t,{"theme-vars":f(G)},{default:s((()=>[m(n,{title:"收银台","main-class":"page-cashier-pay"},{default:s((()=>{var e,n,t;return[u("div",A,[p(" ￥"),u("span",F,g(null===(e=f(L))||void 0===e?void 0:e.orderAmt),1)]),u("div",I,[u("div",U,g(null===(n=f(L))||void 0===n?void 0:n.orderName),1),u("div",X,[p(" 订单号： "+g((null===(t=f(L))||void 0===t?void 0:t.orderNo)+" ")+" ",1),f(Q)?(d(),v("span",Y,[m(o,{name:"copy",onClick:Z})])):y("",!0)])]),u("div",q,[m(f(h),{modelValue:f(O),"onUpdate:modelValue":a[0]||(a[0]=e=>b(O)?O.value=e:null)},{default:s((()=>[(d(!0),v(_,null,w(f(J),(e=>(d(),v("div",{key:e.name,class:"pay-item"},[u("span",null,[u("img",{src:e.img},null,8,E),p(g(e.title),1)]),m(f(P),{name:e.name},null,8,["name"])])))),128))])),_:1},8,["modelValue"])]),m(r,{type:"primary",disabled:!f(O),round:"",size:"large",block:"",onClick:R},{default:s((()=>{var e;return[p("确认付款 ￥"+g(null===(e=f(L))||void 0===e?void 0:e.orderAmt),1)]})),_:1},8,["disabled"])]})),_:1})])),_:1},8,["theme-vars"])}}}))}}}))}();
