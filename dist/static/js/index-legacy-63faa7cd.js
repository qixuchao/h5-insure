!function(){var e=document.createElement("style");e.innerHTML=".com-order-item[data-v-b27e4180]{margin-bottom:.4rem;background:#fff;border-radius:.26667rem;width:100%;padding:.4rem .4rem .4rem .26667rem}.com-order-item .header[data-v-b27e4180]{display:flex;align-items:center}.com-order-item .header .product-name[data-v-b27e4180]{flex:1;width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:.4rem;font-weight:500;color:#393d46}.com-order-item .header .company-name[data-v-b27e4180]{flex:0 0 1.6rem;height:.53333rem;line-height:.53333rem;text-align:center;padding:0 .13333rem;background:rgba(13,110,254,.1);border-radius:.10667rem;font-size:.29333rem;color:var(--van-primary-color, var(--zaui-brand));overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.com-order-item .header .status[data-v-b27e4180]{margin-left:.4rem;font-size:.34667rem;color:#99a9c0}.com-order-item .holder[data-v-b27e4180]{font-size:.32rem;color:#99a9c0;line-height:.44rem;margin-top:.21333rem;padding-bottom:.4rem;border-bottom:1px dashed #eeeef4}.com-order-item .info[data-v-b27e4180]{font-size:.32rem;color:#99a9c0;line-height:.44rem;padding:.4rem 0;border-bottom:1px dashed #eeeff4}.com-order-item .info .info-item[data-v-b27e4180]{display:flex;margin-top:.16rem}.com-order-item .info .info-item[data-v-b27e4180]:first-child{margin-top:0}.com-order-item .info .info-item .label[data-v-b27e4180]{flex:0 0 1.33333rem}.com-order-item .info .info-item .desc[data-v-b27e4180]{flex:1;margin-left:.4rem}.com-order-item .footer[data-v-b27e4180]{display:flex;align-items:center;justify-content:space-between;margin-top:.26667rem}.com-order-item .footer .fee[data-v-b27e4180]{font-size:.34667rem;color:#333}.com-order-item .footer .fee .money[data-v-b27e4180]{color:var(--zaui-price, #ff5840)}.com-order-item .footer .buttons[data-v-b27e4180]{display:flex}.com-order-item .footer .buttons .button[data-v-b27e4180]{height:.8rem;line-height:.8rem;border-radius:.4rem;border:1px solid var(--van-primary-color, var(--zaui-brand));padding:0 .44rem;min-width:1.70667rem;font-size:.37333rem;color:var(--van-primary-color, var(--zaui-brand));margin-right:.21333rem}.com-order-item .footer .buttons .button.primary[data-v-b27e4180]{background:var(--van-primary-color, var(--zaui-brand));color:#fff}.com-order-item .footer .buttons .button[data-v-b27e4180]:last-child{margin-right:0}.page-order-list{height:0}.page-order[data-v-5f493360]{height:100%;display:flex;flex-direction:column}.page-order .body[data-v-5f493360]{flex:1;height:0;overflow-y:auto;background:var(--zaui-global-bg, #f2f5fc);padding:.4rem}\n",document.head.appendChild(e),System.register(["./index-legacy-46ac1a5e.js","./order-legacy-573ca6e3.js","./order-legacy-f649fb48.js","./pdfdist-legacy-27f39a85.js"],(function(e){"use strict";var t,a,r,o,d,i,n,l,s,c,m,u,f,p,v,g,b,h,y,C,I,k,x,N,w,z,S,Y,D,_,T,U,L,P;return{setters:[function(e){t=e._,a=e.d,r=e.u,o=e.b,d=e.c,i=e.g,n=e.i,l=e.t,s=e.l,c=e.a0,m=e.f,u=e.w,f=e.k,p=e.j,v=e.n,g=e.a5,b=e.T,h=e.E,y=e.L,C=e.M,I=e.bh,k=e.r,x=e.y,N=e.a8,w=e.z,z=e.e,S=e.W,Y=e.h,D=e.F,_=e.a4},function(e){T=e.d,U=e.g},function(e){L=e.O,P=e.b},function(){}],execute:function(){const j=e=>(y("data-v-b27e4180"),e=e(),C(),e),W={class:"com-order-item"},B={class:"header"},E={class:"product-name"},M={class:"company-name"},G={class:"status"},H={class:"info"},O={class:"info-item"},q=j((()=>n("div",{class:"label"},"投保人",-1))),A={class:"desc"},F={class:"info-item"},X=j((()=>n("div",{class:"label"},"创建时间",-1))),Z={class:"desc"},J={class:"footer"},K={class:"fee"},Q=v(" 保费："),R={class:"money"},V={key:0,class:"buttons"},$=v("删除"),ee=v("去处理"),te={key:1,class:"buttons"},ae=v("去支付"),re={key:2,class:"buttons"},oe=v("删除");var de=t(a({props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(e,{emit:t}){const a=e,v=r(),y=()=>{g.confirm({title:"",message:"确认要删除该订单么？",confirmButtonText:"删除"}).then((()=>{T(a.detail.id,a.detail.orderStatus).then((e=>{const{code:a,data:r}=e;"10000"===a&&(b.success("删除成功"),t("afterDelete"))}))}))},C=()=>{const{goodsCode:e,orderNo:t,id:r,saleUserId:o,templateId:d,tenantId:i,insurerCode:n,productCategory:l,agencyId:s,saleChannelId:c,orderTopStatus:m}=a.detail;if((P.PENDING===m||P.PAYING===m)&&[I.ZXYS,I.BWYL,I.BWYLUP].includes(e)){const a={[I.ZXYS]:"/internet/productDetail/package",[I.BWYL]:"/internet/productDetail",[I.BWYLUP]:"/internet/guaranteeUpgrade"};return v.push({path:a[e],query:{productCode:e,saleChannelId:c,agentCode:o,tenantId:i,agencyCode:s,orderNo:t}}),!0}return!1},k=()=>{const{goodsCode:e,orderNo:t,id:r,saleUserId:o,templateId:d,tenantId:i,insurerCode:n,productCategory:l,agencyId:s}=a.detail;C()||v.push({path:h.payInfo,query:{productCode:e,orderNo:t,orderId:r,saleUserId:o,templateId:d,tenantId:i,insurerCode:n,productCategory:l,agencyCode:s}})},x=()=>{const{goodsCode:e,orderNo:t,id:r,saleUserId:o,templateId:d,tenantId:i,insurerCode:n,productCategory:l,agencyId:s,saleChannelId:c,orderStatus:m}=a.detail;C()||v.push({path:h[a.detail.pageCode],query:{productCode:e,orderNo:t,orderId:r,agentCode:o,templateId:d,tenantId:i,insurerCode:n,productCategory:l,agencyCode:s,isFromOrderList:"1"}})};return(t,a)=>{const r=o("van-button");return d(),i("div",W,[n("div",B,[n("div",E,l(e.detail.goodsName),1),n("div",M,l(e.detail.abbreviation),1),n("div",G,l(s(L)[e.detail.orderStatus]),1)]),n("div",H,[n("div",O,[q,n("div",A,l(e.detail.policyHolder),1)]),n("div",F,[X,n("div",Z,l(s(c)(e.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1)])]),n("div",J,[n("div",K,[Q,n("span",R,"￥"+l(e.detail.prem),1)]),e.detail.orderTopStatus===s(P).PENDING?(d(),i("div",V,[m(r,{class:"button",onClick:f(y,["stop"])},{default:u((()=>[$])),_:1},8,["onClick"]),m(r,{class:"button primary",onClick:f(x,["stop"])},{default:u((()=>[ee])),_:1},8,["onClick"])])):p("",!0),e.detail.orderTopStatus===s(P).PAYING?(d(),i("div",te,[m(r,{class:"button primary",onClick:f(k,["stop"])},{default:u((()=>[ae])),_:1},8,["onClick"])])):p("",!0),e.detail.orderTopStatus===s(P).TIMEOUT?(d(),i("div",re,[m(r,{class:"button",onClick:f(y,["stop"])},{default:u((()=>[oe])),_:1},8,["onClick"])])):p("",!0)])])}}}),[["__scopeId","data-v-b27e4180"]]);const ie={class:"page-order"},ne=a({setup(e){r();const t=k(0),a=k(1),l=k(!1),s=k(!1),c=k([]),f=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"1"},{title:"已失效",status:"2"}],p=x((()=>f[t.value].status)),v=()=>{l.value=!0,U({condition:{orderTopStatus:p.value},pageSize:10,pageNum:a.value}).then((e=>{l.value=!1;const{code:t,data:r}=e;"10000"===t&&(1===a.value?c.value=r.datas:c.value=[...c.value,...r.datas]),s.value=c.value.length>=r.total}))},g=()=>{a.value+=1,v()},b=()=>{a.value=1,v()};return N(p,(()=>{a.value=1,v()})),w((()=>{v()})),(e,a)=>{const r=o("van-list"),p=o("ProPageWrap");return d(),z(p,{"main-class":"page-order-list"},{default:u((()=>[n("div",ie,[m(S,{active:t.value,"onUpdate:active":a[0]||(a[0]=e=>t.value=e),list:f,"small-gap":"",class:"tab"},null,8,["active"]),m(r,{class:"body",loading:l.value,finished:s.value,onLoad:g},{default:u((()=>[(d(!0),i(D,null,Y(c.value,((e,t)=>(d(),z(de,{key:t,detail:e,onClick:t=>(e=>{const{orderNo:t,saleUserId:a,tenantId:r,abbreviation:o,productCategory:d}=e;_("orderDetail",{orderNo:t,agentCode:a,tenantId:r,abbreviation:o,productCategory:d})})(e),onAfterDelete:b},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])])])),_:1})}}});e("default",t(ne,[["__scopeId","data-v-5f493360"]]))}}}))}();
