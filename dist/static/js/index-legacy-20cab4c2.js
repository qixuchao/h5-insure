!function(){var e=document.createElement("style");e.innerHTML=".com-order-item[data-v-4c034895]{margin-bottom:.4rem;background:#fff;border-radius:.26667rem;width:100%;padding:.4rem .4rem .4rem .26667rem}.com-order-item .header[data-v-4c034895]{display:flex;align-items:center}.com-order-item .header .product-name[data-v-4c034895]{flex:1;width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:.4rem;font-weight:500;color:#393d46}.com-order-item .header .company-name[data-v-4c034895]{flex:0 0 1.6rem;height:.53333rem;line-height:.53333rem;text-align:center;padding:0 .13333rem;background:rgba(13,110,254,.1);border-radius:.10667rem;font-size:.29333rem;color:var(--zaui-brand, #0d6efe);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.com-order-item .header .status[data-v-4c034895]{margin-left:.4rem;font-size:.34667rem;color:#99a9c0}.com-order-item .holder[data-v-4c034895]{font-size:.32rem;color:#99a9c0;line-height:.44rem;margin-top:.21333rem;padding-bottom:.4rem;border-bottom:1px dashed #eeeef4}.com-order-item .info[data-v-4c034895]{font-size:.32rem;color:#99a9c0;line-height:.44rem;padding:.4rem 0;border-bottom:1px dashed #eeeff4}.com-order-item .info .info-item[data-v-4c034895]{display:flex;margin-top:.16rem}.com-order-item .info .info-item[data-v-4c034895]:first-child{margin-top:0}.com-order-item .info .info-item .label[data-v-4c034895]{flex:0 0 1.33333rem}.com-order-item .info .info-item .desc[data-v-4c034895]{flex:1;margin-left:.4rem}.com-order-item .footer[data-v-4c034895]{display:flex;align-items:center;justify-content:space-between;margin-top:.26667rem}.com-order-item .footer .fee[data-v-4c034895]{font-size:.34667rem;color:#333}.com-order-item .footer .fee .money[data-v-4c034895]{color:var(--zaui-price, #ff5840)}.com-order-item .footer .buttons[data-v-4c034895]{display:flex}.com-order-item .footer .buttons .button[data-v-4c034895]{height:.8rem;line-height:.8rem;border-radius:.4rem;border:1px solid #0d6efe;padding:0 .44rem;min-width:1.70667rem;font-size:.37333rem;color:var(--zaui-brand, #0d6efe);margin-right:.21333rem}.com-order-item .footer .buttons .button.primary[data-v-4c034895]{background:var(--zaui-brand, #0d6efe);color:#fff}.com-order-item .footer .buttons .button[data-v-4c034895]:last-child{margin-right:0}.page-order-list{height:0}.page-order[data-v-52022118]{height:100%;display:flex;flex-direction:column}.page-order .body[data-v-52022118]{flex:1;height:0;overflow-y:auto;background:var(--zaui-global-bg, #f2f5fc);padding:.4rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-76daf859.js","./index-legacy-473e5c5c.js","./order-legacy-3426fdf8.js","./order-legacy-c2bcb521.js"],(function(e){"use strict";var t,a,o,r,d,i,s,l,n,c,m,u,f,v,p,g,b,h,y,C,k,I,x,_,S,w,z,N,E,D,T,j,P;return{setters:[function(e){t=e.h,a=e.aa,o=e.r,r=e.k,d=e.p,i=e.A,s=e.L,l=e.B,n=e.d,c=e.s,m=e.n,u=e.ac,f=e.v,v=e.a5,p=e.a6,g=e.E,b=e.D,h=e.T,y=e.G,C=e.z,k=e.$,I=e.j,x=e.m,_=e.H,S=e.F},function(e){w=e._,z=e.b,N=e.j,E=e.p},function(e){D=e.d,T=e.g},function(e){j=e.O,P=e.a}],execute:function(){const U=e=>(v("data-v-4c034895"),e=e(),p(),e),Y={class:"com-order-item"},A={class:"header"},L={class:"product-name"},M={class:"company-name"},H={class:"status"},O={class:"info"},F={class:"info-item"},G=U((()=>i("div",{class:"label"},"投保人",-1))),R={class:"desc"},q={class:"info-item"},B=U((()=>i("div",{class:"label"},"创建时间",-1))),J={class:"desc"},W={class:"footer"},$={class:"fee"},K=g(" 保费："),Q={class:"money"},V={key:0,class:"buttons"},X=g("删除"),Z=g("去处理"),ee={key:1,class:"buttons"},te=g("删除"),ae=g("去支付"),oe={key:2,class:"buttons"},re=g("删除"),de=g("去支付"),ie={key:3,class:"buttons"},se={key:4,class:"buttons"},le={key:5,class:"buttons"},ne=g("删除"),ce={key:6,class:"buttons"},me=g("删除");var ue=w(t({props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(e,{emit:t}){const v=e,p=a(),g=()=>{b.confirm({title:"",message:"确认要删除该订单么？",confirmButtonText:"删除"}).then((()=>{D(v.detail.id,v.detail.orderStatus).then((e=>{const{code:a,data:o}=e;"10000"===a&&(h.success("删除成功"),t("afterDelete"))}))}))},y=()=>{const{goodsCode:e,orderNo:t,id:a,saleUserId:o,templateId:r,tenantId:d,insurerCode:i,productCategory:s,agencyId:l}=v.detail;p.push({path:z.payInfo,query:{productCode:e,orderNo:t,orderId:a,saleUserId:o,templateId:r,tenantId:d,insurerCode:i,productCategory:s,agencyCode:l}})},C=()=>{const{goodsCode:e,orderNo:t,id:a,saleUserId:o,templateId:r,tenantId:d,insurerCode:i,productCategory:s,agencyId:l}=v.detail;p.push({path:z[v.detail.pageCode],query:{productCode:e,orderNo:t,orderId:a,agentCode:o,templateId:r,tenantId:d,insurerCode:i,productCategory:s,agencyCode:l,isFromOrderList:"1"}})};return(t,a)=>{const v=o("van-button");return r(),d("div",Y,[i("div",A,[i("div",L,s(e.detail.goodsName),1),i("div",M,s(e.detail.abbreviation),1),i("div",H,s(l(j)[e.detail.orderStatus]),1)]),i("div",O,[i("div",F,[G,i("div",R,s(e.detail.policyHolder),1)]),i("div",q,[B,i("div",J,s(l(n)(e.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1)])]),i("div",W,[i("div",$,[K,i("span",Q,"￥"+s(e.detail.prem),1)]),e.detail.orderStatus===l(P).PENDING?(r(),d("div",V,[c(v,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[X])),_:1},8,["onClick"]),c(v,{class:"button primary",onClick:u(C,["stop"])},{default:m((()=>[Z])),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===l(P).PAYING?(r(),d("div",ee,[c(v,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[te])),_:1},8,["onClick"]),c(v,{class:"button primary",onClick:u(y,["stop"])},{default:m((()=>[ae])),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===l(P).PAYMENT_FAILED?(r(),d("div",oe,[c(v,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[re])),_:1},8,["onClick"]),c(v,{class:"button primary",onClick:u(y,["stop"])},{default:m((()=>[de])),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===l(P).PAYMENT_SUCCESS?(r(),d("div",ie)):f("",!0),e.detail.orderStatus===l(P).ACCEPT_POLICY?(r(),d("div",se)):f("",!0),e.detail.orderStatus===l(P).INSURER_REJECT?(r(),d("div",le,[c(v,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[ne])),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===l(P).TIMEOUT?(r(),d("div",ce,[c(v,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[me])),_:1},8,["onClick"])])):f("",!0)])])}}}),[["__scopeId","data-v-4c034895"]]);const fe={class:"page-order"},ve=t({setup(e){a();const t=y(0),s=y(1),l=y(!1),n=y(!1),u=y([]),f=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"1"},{title:"已失效",status:"2"}],v=C((()=>f[t.value].status)),p=()=>{l.value=!0,T({condition:{orderTopStatus:v.value},pageSize:10,pageNum:s.value}).then((e=>{l.value=!1;const{code:t,data:a}=e;"10000"===t&&(1===s.value?u.value=a.datas:u.value=[...u.value,...a.datas]),n.value=u.value.length>=a.total}))},g=()=>{s.value+=1,p()},b=()=>{s.value=1,p()};return k(v,(()=>{s.value=1,p()})),I((()=>{p()})),(e,a)=>{const s=o("van-list"),v=o("ProPageWrap");return r(),x(v,{"main-class":"page-order-list"},{default:m((()=>[i("div",fe,[c(N,{active:t.value,"onUpdate:active":a[0]||(a[0]=e=>t.value=e),list:f,"small-gap":"",class:"tab"},null,8,["active"]),c(s,{class:"body",loading:l.value,finished:n.value,onLoad:g},{default:m((()=>[(r(!0),d(S,null,_(u.value,((e,t)=>(r(),x(ue,{key:t,detail:e,onClick:t=>(e=>{const{orderNo:t,saleUserId:a,tenantId:o,abbreviation:r,productCategory:d}=e;E("orderDetail",{orderNo:t,agentCode:a,tenantId:o,abbreviation:r,productCategory:d})})(e),onAfterDelete:b},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])])])),_:1})}}});e("default",w(ve,[["__scopeId","data-v-52022118"]]))}}}))}();
