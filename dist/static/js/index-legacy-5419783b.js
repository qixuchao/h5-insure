!function(){var e=document.createElement("style");e.innerHTML=".com-order-item[data-v-ce57d4c6]{margin-bottom:.4rem;background:#fff;border-radius:.26667rem;width:100%;padding:.4rem .4rem .4rem .26667rem}.com-order-item .header[data-v-ce57d4c6]{display:flex;align-items:center}.com-order-item .header .product-name[data-v-ce57d4c6]{flex:1;width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:.4rem;font-weight:500;color:#393d46}.com-order-item .header .company-name[data-v-ce57d4c6]{flex:0 0 1.6rem;height:.53333rem;line-height:.53333rem;text-align:center;padding:0 .13333rem;background:rgba(13,110,254,.1);border-radius:.10667rem;font-size:.29333rem;color:#0d6efe;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.com-order-item .header .status[data-v-ce57d4c6]{margin-left:.4rem;font-size:.34667rem;color:#99a9c0}.com-order-item .holder[data-v-ce57d4c6]{font-size:.32rem;color:#99a9c0;line-height:.44rem;margin-top:.21333rem;padding-bottom:.4rem;border-bottom:1px dashed #eeeef4}.com-order-item .info[data-v-ce57d4c6]{font-size:.32rem;color:#99a9c0;line-height:.44rem;padding:.4rem 0;border-bottom:1px dashed #eeeff4}.com-order-item .info .info-item[data-v-ce57d4c6]{display:flex;margin-top:.16rem}.com-order-item .info .info-item[data-v-ce57d4c6]:first-child{margin-top:0}.com-order-item .info .info-item .label[data-v-ce57d4c6]{flex:0 0 1.33333rem}.com-order-item .info .info-item .desc[data-v-ce57d4c6]{flex:1;margin-left:.4rem}.com-order-item .footer[data-v-ce57d4c6]{display:flex;align-items:center;justify-content:space-between;margin-top:.26667rem}.com-order-item .footer .fee[data-v-ce57d4c6]{font-size:.34667rem;color:#333}.com-order-item .footer .fee .money[data-v-ce57d4c6]{color:#ff5840}.com-order-item .footer .buttons[data-v-ce57d4c6]{display:flex}.com-order-item .footer .buttons .button[data-v-ce57d4c6]{height:.8rem;line-height:.8rem;border-radius:.4rem;border:1px solid #0d6efe;padding:0 .44rem;min-width:1.70667rem;font-size:.37333rem;color:#0d6efe;margin-right:.21333rem}.com-order-item .footer .buttons .button.primary[data-v-ce57d4c6]{background:#0d6efe;color:#fff}.com-order-item .footer .buttons .button[data-v-ce57d4c6]:last-child{margin-right:0}.page-order-list{height:0}.page-order[data-v-b070bedc]{height:100%;display:flex;flex-direction:column}.page-order .body[data-v-b070bedc]{flex:1;height:0;overflow-y:auto;background:#f2f5fc;padding:.4rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-1e86c4b9.js","./index-legacy-76bf2e6e.js","./order-legacy-1d0daf4b.js","./order-legacy-58b53d63.js","./utils-legacy-20e4723c.js"],(function(e){"use strict";var t,a,o,d,r,i,s,c,l,n,m,u,f,p,v,g,b,h,y,C,k,I,x,_,S,w,N,E,D,T,z,P,j;return{setters:[function(e){t=e.g,a=e.a9,o=e.r,d=e.j,r=e.n,i=e.z,s=e.J,c=e.A,l=e.d,n=e.p,m=e.m,u=e.ab,f=e.t,p=e.a4,v=e.a5,g=e.C,b=e.D,h=e.T,y=e.E,C=e.y,k=e._,I=e.h,x=e.k,_=e.G,S=e.F},function(e){w=e._,N=e.P,E=e.y,D=e.H},function(e){T=e.d,z=e.g},function(e){P=e.O,j=e.a},function(){}],execute:function(){const U=e=>(p("data-v-ce57d4c6"),e=e(),v(),e),Y={class:"com-order-item"},A={class:"header"},M={class:"product-name"},H={class:"company-name"},L={class:"status"},O={class:"info"},F={class:"info-item"},G=U((()=>i("div",{class:"label"},"投保人",-1))),R={class:"desc"},q={class:"info-item"},J=U((()=>i("div",{class:"label"},"创建时间",-1))),B={class:"desc"},W={class:"footer"},K={class:"fee"},Q=g(" 保费："),V={class:"money"},X={key:0,class:"buttons"},Z=g("删除"),$=g("去处理"),ee={key:1,class:"buttons"},te=g("删除"),ae=g("去支付"),oe={key:2,class:"buttons"},de=g("删除"),re=g("去支付"),ie={key:3,class:"buttons"},se={key:4,class:"buttons"},ce={key:5,class:"buttons"},le=g("删除"),ne={key:6,class:"buttons"},me=g("删除");var ue=w(t({props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(e,{emit:t}){const p=e,v=a(),g=()=>{b.confirm({title:"",message:"确认要删除该订单么？",confirmButtonText:"删除"}).then((()=>{T(p.detail.id,p.detail.orderStatus).then((e=>{const{code:a,data:o}=e;"10000"===a&&(h.success("删除成功"),t("afterDelete"))}))}))},y=()=>{const{goodsCode:e,orderNo:t,id:a,saleUserId:o,templateId:d,tenantId:r,insurerCode:i,productCategory:s,agencyId:c}=p.detail;v.push({path:N.payInfo,query:{productCode:e,orderNo:t,orderId:a,saleUserId:o,templateId:d,tenantId:r,insurerCode:i,productCategory:s,agencyCode:c}})},C=()=>{const{goodsCode:e,orderNo:t,id:a,saleUserId:o,templateId:d,tenantId:r,insurerCode:i,productCategory:s,agencyId:c}=p.detail;v.push({path:N[p.detail.pageCode],query:{productCode:e,orderNo:t,orderId:a,agentCode:o,templateId:d,tenantId:r,insurerCode:i,productCategory:s,agencyCode:c,isFromOrderList:"1"}})};return(t,a)=>{const p=o("van-button");return d(),r("div",Y,[i("div",A,[i("div",M,s(e.detail.goodsName),1),i("div",H,s(e.detail.abbreviation),1),i("div",L,s(c(P)[e.detail.orderStatus]),1)]),i("div",O,[i("div",F,[G,i("div",R,s(e.detail.policyHolder),1)]),i("div",q,[J,i("div",B,s(c(l)(e.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1)])]),i("div",W,[i("div",K,[Q,i("span",V,"￥"+s(e.detail.prem),1)]),e.detail.orderStatus===c(j).PENDING?(d(),r("div",X,[n(p,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[Z])),_:1},8,["onClick"]),n(p,{class:"button primary",onClick:u(C,["stop"])},{default:m((()=>[$])),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===c(j).PAYING?(d(),r("div",ee,[n(p,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[te])),_:1},8,["onClick"]),n(p,{class:"button primary",onClick:u(y,["stop"])},{default:m((()=>[ae])),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===c(j).PAYMENT_FAILED?(d(),r("div",oe,[n(p,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[de])),_:1},8,["onClick"]),n(p,{class:"button primary",onClick:u(y,["stop"])},{default:m((()=>[re])),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===c(j).PAYMENT_SUCCESS?(d(),r("div",ie)):f("",!0),e.detail.orderStatus===c(j).ACCEPT_POLICY?(d(),r("div",se)):f("",!0),e.detail.orderStatus===c(j).INSURER_REJECT?(d(),r("div",ce,[n(p,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[le])),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===c(j).TIMEOUT?(d(),r("div",ne,[n(p,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[me])),_:1},8,["onClick"])])):f("",!0)])])}}}),[["__scopeId","data-v-ce57d4c6"]]);const fe={class:"page-order"},pe=t({setup(e){a();const t=y(0),s=y(1),c=y(!1),l=y(!1),u=y([]),f=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"1"},{title:"已失效",status:"2"}],p=C((()=>f[t.value].status)),v=()=>{c.value=!0,z({condition:{orderTopStatus:p.value},pageSize:10,pageNum:s.value}).then((e=>{c.value=!1;const{code:t,data:a}=e;"10000"===t&&(1===s.value?u.value=a.datas:u.value=[...u.value,...a.datas]),l.value=u.value.length>=a.total}))},g=()=>{s.value+=1,v()},b=()=>{s.value=1,v()};return k(p,(()=>{s.value=1,v()})),I((()=>{v()})),(e,a)=>{const s=o("van-list"),p=o("ProPageWrap");return d(),x(p,{"main-class":"page-order-list"},{default:m((()=>[i("div",fe,[n(E,{active:t.value,"onUpdate:active":a[0]||(a[0]=e=>t.value=e),list:f,"small-gap":"",class:"tab"},null,8,["active"]),n(s,{class:"body",loading:c.value,finished:l.value,onLoad:g},{default:m((()=>[(d(!0),r(S,null,_(u.value,((e,t)=>(d(),x(ue,{key:t,detail:e,onClick:t=>(e=>{const{orderNo:t,saleUserId:a,tenantId:o,abbreviation:d,productCategory:r}=e;D("orderDetail",{orderNo:t,agentCode:a,tenantId:o,abbreviation:d,productCategory:r})})(e),onAfterDelete:b},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])])])),_:1})}}});e("default",w(pe,[["__scopeId","data-v-b070bedc"]]))}}}))}();
