!function(){var e=document.createElement("style");e.innerHTML=".com-order-item[data-v-4c034895]{margin-bottom:.4rem;background:#fff;border-radius:.26667rem;width:100%;padding:.4rem .4rem .4rem .26667rem}.com-order-item .header[data-v-4c034895]{display:flex;align-items:center}.com-order-item .header .product-name[data-v-4c034895]{flex:1;width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:.4rem;font-weight:500;color:#393d46}.com-order-item .header .company-name[data-v-4c034895]{flex:0 0 1.6rem;height:.53333rem;line-height:.53333rem;text-align:center;padding:0 .13333rem;background:rgba(13,110,254,.1);border-radius:.10667rem;font-size:.29333rem;color:var(--zaui-brand, #0d6efe);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.com-order-item .header .status[data-v-4c034895]{margin-left:.4rem;font-size:.34667rem;color:#99a9c0}.com-order-item .holder[data-v-4c034895]{font-size:.32rem;color:#99a9c0;line-height:.44rem;margin-top:.21333rem;padding-bottom:.4rem;border-bottom:1px dashed #eeeef4}.com-order-item .info[data-v-4c034895]{font-size:.32rem;color:#99a9c0;line-height:.44rem;padding:.4rem 0;border-bottom:1px dashed #eeeff4}.com-order-item .info .info-item[data-v-4c034895]{display:flex;margin-top:.16rem}.com-order-item .info .info-item[data-v-4c034895]:first-child{margin-top:0}.com-order-item .info .info-item .label[data-v-4c034895]{flex:0 0 1.33333rem}.com-order-item .info .info-item .desc[data-v-4c034895]{flex:1;margin-left:.4rem}.com-order-item .footer[data-v-4c034895]{display:flex;align-items:center;justify-content:space-between;margin-top:.26667rem}.com-order-item .footer .fee[data-v-4c034895]{font-size:.34667rem;color:#333}.com-order-item .footer .fee .money[data-v-4c034895]{color:var(--zaui-price, #ff5840)}.com-order-item .footer .buttons[data-v-4c034895]{display:flex}.com-order-item .footer .buttons .button[data-v-4c034895]{height:.8rem;line-height:.8rem;border-radius:.4rem;border:1px solid #0d6efe;padding:0 .44rem;min-width:1.70667rem;font-size:.37333rem;color:var(--zaui-brand, #0d6efe);margin-right:.21333rem}.com-order-item .footer .buttons .button.primary[data-v-4c034895]{background:var(--zaui-brand, #0d6efe);color:#fff}.com-order-item .footer .buttons .button[data-v-4c034895]:last-child{margin-right:0}.page-order-list{height:0}.page-order[data-v-52022118]{height:100%;display:flex;flex-direction:column}.page-order .body[data-v-52022118]{flex:1;height:0;overflow-y:auto;background:var(--zaui-global-bg, #f2f5fc);padding:.4rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-2ed1ad67.js","./index-legacy-cbd85720.js","./order-legacy-a437a757.js","./order-legacy-c2bcb521.js"],(function(e){"use strict";var t,a,o,r,d,i,s,l,n,c,m,u,f,v,p,g,b,h,y,C,k,I,x,_,S,w,z,N,E,D,T,P,U;return{setters:[function(e){t=e.g,a=e.a9,o=e.r,r=e.j,d=e.n,i=e.z,s=e.J,l=e.A,n=e.d,c=e.p,m=e.m,u=e.ab,f=e.t,v=e.a4,p=e.a5,g=e.C,b=e.D,h=e.T,y=e.E,C=e.y,k=e._,I=e.h,x=e.k,_=e.G,S=e.F},function(e){w=e._,z=e.c,N=e.k,E=e.q},function(e){D=e.d,T=e.g},function(e){P=e.O,U=e.a}],execute:function(){const Y=e=>(v("data-v-4c034895"),e=e(),p(),e),j={class:"com-order-item"},A={class:"header"},M={class:"product-name"},L={class:"company-name"},O={class:"status"},H={class:"info"},q={class:"info-item"},F=Y((()=>i("div",{class:"label"},"投保人",-1))),G={class:"desc"},R={class:"info-item"},J=Y((()=>i("div",{class:"label"},"创建时间",-1))),B={class:"desc"},W={class:"footer"},K={class:"fee"},Q=g(" 保费："),V={class:"money"},X={key:0,class:"buttons"},Z=g("删除"),$=g("去处理"),ee={key:1,class:"buttons"},te=g("删除"),ae=g("去支付"),oe={key:2,class:"buttons"},re=g("删除"),de=g("去支付"),ie={key:3,class:"buttons"},se={key:4,class:"buttons"},le={key:5,class:"buttons"},ne=g("删除"),ce={key:6,class:"buttons"},me=g("删除");var ue=w(t({props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(e,{emit:t}){const v=e,p=a(),g=()=>{b.confirm({title:"",message:"确认要删除该订单么？",confirmButtonText:"删除"}).then((()=>{D(v.detail.id,v.detail.orderStatus).then((e=>{const{code:a,data:o}=e;"10000"===a&&(h.success("删除成功"),t("afterDelete"))}))}))},y=()=>{const{goodsCode:e,orderNo:t,id:a,saleUserId:o,templateId:r,tenantId:d,insurerCode:i,productCategory:s,agencyId:l}=v.detail;p.push({path:z.payInfo,query:{productCode:e,orderNo:t,orderId:a,saleUserId:o,templateId:r,tenantId:d,insurerCode:i,productCategory:s,agencyCode:l}})},C=()=>{const{goodsCode:e,orderNo:t,id:a,saleUserId:o,templateId:r,tenantId:d,insurerCode:i,productCategory:s,agencyId:l}=v.detail;p.push({path:z[v.detail.pageCode],query:{productCode:e,orderNo:t,orderId:a,agentCode:o,templateId:r,tenantId:d,insurerCode:i,productCategory:s,agencyCode:l,isFromOrderList:"1"}})};return(t,a)=>{const v=o("van-button");return r(),d("div",j,[i("div",A,[i("div",M,s(e.detail.goodsName),1),i("div",L,s(e.detail.abbreviation),1),i("div",O,s(l(P)[e.detail.orderStatus]),1)]),i("div",H,[i("div",q,[F,i("div",G,s(e.detail.policyHolder),1)]),i("div",R,[J,i("div",B,s(l(n)(e.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1)])]),i("div",W,[i("div",K,[Q,i("span",V,"￥"+s(e.detail.prem),1)]),e.detail.orderStatus===l(U).PENDING?(r(),d("div",X,[c(v,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[Z])),_:1},8,["onClick"]),c(v,{class:"button primary",onClick:u(C,["stop"])},{default:m((()=>[$])),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===l(U).PAYING?(r(),d("div",ee,[c(v,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[te])),_:1},8,["onClick"]),c(v,{class:"button primary",onClick:u(y,["stop"])},{default:m((()=>[ae])),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===l(U).PAYMENT_FAILED?(r(),d("div",oe,[c(v,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[re])),_:1},8,["onClick"]),c(v,{class:"button primary",onClick:u(y,["stop"])},{default:m((()=>[de])),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===l(U).PAYMENT_SUCCESS?(r(),d("div",ie)):f("",!0),e.detail.orderStatus===l(U).ACCEPT_POLICY?(r(),d("div",se)):f("",!0),e.detail.orderStatus===l(U).INSURER_REJECT?(r(),d("div",le,[c(v,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[ne])),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===l(U).TIMEOUT?(r(),d("div",ce,[c(v,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[me])),_:1},8,["onClick"])])):f("",!0)])])}}}),[["__scopeId","data-v-4c034895"]]);const fe={class:"page-order"},ve=t({setup(e){a();const t=y(0),s=y(1),l=y(!1),n=y(!1),u=y([]),f=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"1"},{title:"已失效",status:"2"}],v=C((()=>f[t.value].status)),p=()=>{l.value=!0,T({condition:{orderTopStatus:v.value},pageSize:10,pageNum:s.value}).then((e=>{l.value=!1;const{code:t,data:a}=e;"10000"===t&&(1===s.value?u.value=a.datas:u.value=[...u.value,...a.datas]),n.value=u.value.length>=a.total}))},g=()=>{s.value+=1,p()},b=()=>{s.value=1,p()};return k(v,(()=>{s.value=1,p()})),I((()=>{p()})),(e,a)=>{const s=o("van-list"),v=o("ProPageWrap");return r(),x(v,{"main-class":"page-order-list"},{default:m((()=>[i("div",fe,[c(N,{active:t.value,"onUpdate:active":a[0]||(a[0]=e=>t.value=e),list:f,"small-gap":"",class:"tab"},null,8,["active"]),c(s,{class:"body",loading:l.value,finished:n.value,onLoad:g},{default:m((()=>[(r(!0),d(S,null,_(u.value,((e,t)=>(r(),x(ue,{key:t,detail:e,onClick:t=>(e=>{const{orderNo:t,saleUserId:a,tenantId:o,abbreviation:r,productCategory:d}=e;E("orderDetail",{orderNo:t,agentCode:a,tenantId:o,abbreviation:r,productCategory:d})})(e),onAfterDelete:b},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])])])),_:1})}}});e("default",w(ve,[["__scopeId","data-v-52022118"]]))}}}))}();
