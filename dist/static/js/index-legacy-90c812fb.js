!function(){var e=document.createElement("style");e.innerHTML=".com-order-item[data-v-b4cf8bbc]{margin-bottom:.4rem;background:#fff;border-radius:.26667rem;width:100%;padding:.4rem .4rem .4rem .26667rem}.com-order-item .header[data-v-b4cf8bbc]{display:flex;align-items:center}.com-order-item .header .product-name[data-v-b4cf8bbc]{flex:1;width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:.4rem;font-weight:500;color:#393d46}.com-order-item .header .company-name[data-v-b4cf8bbc]{flex:0 0 1.6rem;height:.53333rem;line-height:.53333rem;text-align:center;padding:0 .13333rem;background:rgba(13,110,254,.1);border-radius:.10667rem;font-size:.29333rem;color:var(--zaui-brand, #0d6efe);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.com-order-item .header .status[data-v-b4cf8bbc]{margin-left:.4rem;font-size:.34667rem;color:#99a9c0}.com-order-item .holder[data-v-b4cf8bbc]{font-size:.32rem;color:#99a9c0;line-height:.44rem;margin-top:.21333rem;padding-bottom:.4rem;border-bottom:1px dashed #eeeef4}.com-order-item .info[data-v-b4cf8bbc]{font-size:.32rem;color:#99a9c0;line-height:.44rem;padding:.4rem 0;border-bottom:1px dashed #eeeff4}.com-order-item .info .info-item[data-v-b4cf8bbc]{display:flex;margin-top:.16rem}.com-order-item .info .info-item[data-v-b4cf8bbc]:first-child{margin-top:0}.com-order-item .info .info-item .label[data-v-b4cf8bbc]{flex:0 0 1.33333rem}.com-order-item .info .info-item .desc[data-v-b4cf8bbc]{flex:1;margin-left:.4rem}.com-order-item .footer[data-v-b4cf8bbc]{display:flex;align-items:center;justify-content:space-between;margin-top:.26667rem}.com-order-item .footer .fee[data-v-b4cf8bbc]{font-size:.34667rem;color:#333}.com-order-item .footer .fee .money[data-v-b4cf8bbc]{color:var(--zaui-price, #ff5840)}.com-order-item .footer .buttons[data-v-b4cf8bbc]{display:flex}.com-order-item .footer .buttons .button[data-v-b4cf8bbc]{height:.8rem;line-height:.8rem;border-radius:.4rem;border:1px solid #0d6efe;padding:0 .44rem;min-width:1.70667rem;font-size:.37333rem;color:var(--zaui-brand, #0d6efe);margin-right:.21333rem}.com-order-item .footer .buttons .button.primary[data-v-b4cf8bbc]{background:var(--zaui-brand, #0d6efe);color:#fff}.com-order-item .footer .buttons .button[data-v-b4cf8bbc]:last-child{margin-right:0}.page-order-list{height:0}.page-order[data-v-52022118]{height:100%;display:flex;flex-direction:column}.page-order .body[data-v-52022118]{flex:1;height:0;overflow-y:auto;background:var(--zaui-global-bg, #f2f5fc);padding:.4rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-2ed1ad67.js","./index-legacy-3c14629b.js","./order-legacy-adcf39e7.js","./order-legacy-c2bcb521.js"],(function(e){"use strict";var t,a,o,r,d,i,s,c,l,n,m,u,b,f,v,p,g,h,y,C,k,I,x,_,S,w,z,N,E,D,T,P,U;return{setters:[function(e){t=e.g,a=e.a9,o=e.r,r=e.j,d=e.n,i=e.z,s=e.J,c=e.A,l=e.d,n=e.p,m=e.m,u=e.ab,b=e.t,f=e.a4,v=e.a5,p=e.C,g=e.D,h=e.T,y=e.E,C=e.y,k=e._,I=e.h,x=e.k,_=e.G,S=e.F},function(e){w=e._,z=e.c,N=e.k,E=e.q},function(e){D=e.d,T=e.g},function(e){P=e.O,U=e.a}],execute:function(){const Y=e=>(f("data-v-b4cf8bbc"),e=e(),v(),e),j={class:"com-order-item"},A={class:"header"},M={class:"product-name"},L={class:"company-name"},O={class:"status"},H={class:"info"},q={class:"info-item"},F=Y((()=>i("div",{class:"label"},"投保人",-1))),G={class:"desc"},R={class:"info-item"},J=Y((()=>i("div",{class:"label"},"创建时间",-1))),B={class:"desc"},W={class:"footer"},K={class:"fee"},Q=p(" 保费："),V={class:"money"},X={key:0,class:"buttons"},Z=p("删除"),$=p("去处理"),ee={key:1,class:"buttons"},te=p("删除"),ae=p("去支付"),oe={key:2,class:"buttons"},re=p("删除"),de=p("去支付"),ie={key:3,class:"buttons"},se={key:4,class:"buttons"},ce={key:5,class:"buttons"},le=p("删除"),ne={key:6,class:"buttons"},me=p("删除");var ue=w(t({props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(e,{emit:t}){const f=e,v=a(),p=()=>{g.confirm({title:"",message:"确认要删除该订单么？",confirmButtonText:"删除"}).then((()=>{D(f.detail.id,f.detail.orderStatus).then((e=>{const{code:a,data:o}=e;"10000"===a&&(h.success("删除成功"),t("afterDelete"))}))}))},y=()=>{const{goodsCode:e,orderNo:t,id:a,saleUserId:o,templateId:r,tenantId:d,insurerCode:i,productCategory:s,agencyId:c}=f.detail;v.push({path:z.payInfo,query:{productCode:e,orderNo:t,orderId:a,saleUserId:o,templateId:r,tenantId:d,insurerCode:i,productCategory:s,agencyCode:c}})},C=()=>{const{goodsCode:e,orderNo:t,id:a,saleUserId:o,templateId:r,tenantId:d,insurerCode:i,productCategory:s,agencyId:c}=f.detail;v.push({path:z[f.detail.pageCode],query:{productCode:e,orderNo:t,orderId:a,agentCode:o,templateId:r,tenantId:d,insurerCode:i,productCategory:s,agencyCode:c,isFromOrderList:"1"}})};return(t,a)=>{const f=o("van-button");return r(),d("div",j,[i("div",A,[i("div",M,s(e.detail.goodsName),1),i("div",L,s(e.detail.abbreviation),1),i("div",O,s(c(P)[e.detail.orderStatus]),1)]),i("div",H,[i("div",q,[F,i("div",G,s(e.detail.policyHolder),1)]),i("div",R,[J,i("div",B,s(c(l)(e.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1)])]),i("div",W,[i("div",K,[Q,i("span",V,"￥"+s(e.detail.prem),1)]),e.detail.orderStatus===c(U).PENDING?(r(),d("div",X,[n(f,{class:"button",onClick:u(p,["stop"])},{default:m((()=>[Z])),_:1},8,["onClick"]),n(f,{class:"button primary",onClick:u(C,["stop"])},{default:m((()=>[$])),_:1},8,["onClick"])])):b("",!0),e.detail.orderStatus===c(U).PAYING?(r(),d("div",ee,[n(f,{class:"button",onClick:u(p,["stop"])},{default:m((()=>[te])),_:1},8,["onClick"]),n(f,{class:"button primary",onClick:u(y,["stop"])},{default:m((()=>[ae])),_:1},8,["onClick"])])):b("",!0),e.detail.orderStatus===c(U).PAYMENT_FAILED?(r(),d("div",oe,[n(f,{class:"button",onClick:u(p,["stop"])},{default:m((()=>[re])),_:1},8,["onClick"]),n(f,{class:"button primary",onClick:u(y,["stop"])},{default:m((()=>[de])),_:1},8,["onClick"])])):b("",!0),e.detail.orderStatus===c(U).PAYMENT_SUCCESS?(r(),d("div",ie)):b("",!0),e.detail.orderStatus===c(U).ACCEPT_POLICY?(r(),d("div",se)):b("",!0),e.detail.orderStatus===c(U).INSURER_REJECT?(r(),d("div",ce,[n(f,{class:"button",onClick:u(p,["stop"])},{default:m((()=>[le])),_:1},8,["onClick"])])):b("",!0),e.detail.orderStatus===c(U).TIMEOUT?(r(),d("div",ne,[n(f,{class:"button",onClick:u(p,["stop"])},{default:m((()=>[me])),_:1},8,["onClick"])])):b("",!0)])])}}}),[["__scopeId","data-v-b4cf8bbc"]]);const be={class:"page-order"},fe=t({setup(e){a();const t=y(0),s=y(1),c=y(!1),l=y(!1),u=y([]),b=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"1"},{title:"已失效",status:"2"}],f=C((()=>b[t.value].status)),v=()=>{c.value=!0,T({condition:{orderTopStatus:f.value},pageSize:10,pageNum:s.value}).then((e=>{c.value=!1;const{code:t,data:a}=e;"10000"===t&&(1===s.value?u.value=a.datas:u.value=[...u.value,...a.datas]),l.value=u.value.length>=a.total}))},p=()=>{s.value+=1,v()},g=()=>{s.value=1,v()};return k(f,(()=>{s.value=1,v()})),I((()=>{v()})),(e,a)=>{const s=o("van-list"),f=o("ProPageWrap");return r(),x(f,{"main-class":"page-order-list"},{default:m((()=>[i("div",be,[n(N,{active:t.value,"onUpdate:active":a[0]||(a[0]=e=>t.value=e),list:b,"small-gap":"",class:"tab"},null,8,["active"]),n(s,{class:"body",loading:c.value,finished:l.value,onLoad:p},{default:m((()=>[(r(!0),d(S,null,_(u.value,((e,t)=>(r(),x(ue,{key:t,detail:e,onClick:t=>(e=>{const{orderNo:t,saleUserId:a,tenantId:o,abbreviation:r,productCategory:d}=e;E("orderDetail",{orderNo:t,agentCode:a,tenantId:o,abbreviation:r,productCategory:d})})(e),onAfterDelete:g},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])])])),_:1})}}});e("default",w(fe,[["__scopeId","data-v-52022118"]]))}}}))}();
