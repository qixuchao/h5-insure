!function(){var e=document.createElement("style");e.innerHTML=".com-order-item[data-v-1b3aa45c]{margin-bottom:.4rem;background:#fff;border-radius:.26667rem;width:100%;padding:.4rem .4rem .4rem .26667rem}.com-order-item .header[data-v-1b3aa45c]{display:flex;align-items:center}.com-order-item .header .product-name[data-v-1b3aa45c]{flex:1;width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:.4rem;font-weight:500;color:#393d46}.com-order-item .header .company-name[data-v-1b3aa45c]{flex:0 0 1.6rem;height:.53333rem;line-height:.53333rem;text-align:center;padding:0 .13333rem;background:rgba(13,110,254,.1);border-radius:.10667rem;font-size:.29333rem;color:var(--zaui-brand, #0d6efe);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.com-order-item .header .status[data-v-1b3aa45c]{margin-left:.4rem;font-size:.34667rem;color:#99a9c0}.com-order-item .holder[data-v-1b3aa45c]{font-size:.32rem;color:#99a9c0;line-height:.44rem;margin-top:.21333rem;padding-bottom:.4rem;border-bottom:1px dashed #eeeef4}.com-order-item .info[data-v-1b3aa45c]{font-size:.32rem;color:#99a9c0;line-height:.44rem;padding:.4rem 0;border-bottom:1px dashed #eeeff4}.com-order-item .info .info-item[data-v-1b3aa45c]{display:flex;margin-top:.16rem}.com-order-item .info .info-item[data-v-1b3aa45c]:first-child{margin-top:0}.com-order-item .info .info-item .label[data-v-1b3aa45c]{flex:0 0 1.33333rem}.com-order-item .info .info-item .desc[data-v-1b3aa45c]{flex:1;margin-left:.4rem}.com-order-item .footer[data-v-1b3aa45c]{display:flex;align-items:center;justify-content:space-between;margin-top:.26667rem}.com-order-item .footer .fee[data-v-1b3aa45c]{font-size:.34667rem;color:#333}.com-order-item .footer .fee .money[data-v-1b3aa45c]{color:var(--zaui-price, #ff5840)}.com-order-item .footer .buttons[data-v-1b3aa45c]{display:flex}.com-order-item .footer .buttons .button[data-v-1b3aa45c]{height:.8rem;line-height:.8rem;border-radius:.4rem;border:1px solid var(--zaui-brand, #0d6efe);padding:0 .44rem;min-width:1.70667rem;font-size:.37333rem;color:var(--zaui-brand, #0d6efe);margin-right:.21333rem}.com-order-item .footer .buttons .button.primary[data-v-1b3aa45c]{background:var(--zaui-brand, #0d6efe);color:#fff}.com-order-item .footer .buttons .button[data-v-1b3aa45c]:last-child{margin-right:0}.page-order-list{height:0}.page-order[data-v-52022118]{height:100%;display:flex;flex-direction:column}.page-order .body[data-v-52022118]{flex:1;height:0;overflow-y:auto;background:var(--zaui-global-bg, #f2f5fc);padding:.4rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-acf899d3.js","./index-legacy-f09dac09.js","./order-legacy-078f207e.js","./order-legacy-470125e3.js","./utils-legacy-20e4723c.js"],(function(e){"use strict";var a,t,o,r,d,i,n,s,l,c,m,u,f,p,v,g,b,h,y,C,I,k,x,N,z,w,S,D,_,Y,T,j,U,P,E;return{setters:[function(e){a=e.g,t=e.a9,o=e.r,r=e.j,d=e.n,i=e.z,n=e.J,s=e.A,l=e.d,c=e.p,m=e.m,u=e.ab,f=e.t,p=e.a4,v=e.a5,g=e.C,b=e.D,h=e.T,y=e.E,C=e.y,I=e._,k=e.h,x=e.k,N=e.G,z=e.F},function(e){w=e._,S=e.b,D=e.ab,_=e.k,Y=e.q},function(e){T=e.d,j=e.g},function(e){U=e.O,P=e.b,E=e.a},function(){}],execute:function(){const G=e=>(p("data-v-1b3aa45c"),e=e(),v(),e),L={class:"com-order-item"},q={class:"header"},A={class:"product-name"},H={class:"company-name"},M={class:"status"},O={class:"info"},B={class:"info-item"},W=G((()=>i("div",{class:"label"},"投保人",-1))),F={class:"desc"},X={class:"info-item"},Z=G((()=>i("div",{class:"label"},"创建时间",-1))),J={class:"desc"},K={class:"footer"},Q={class:"fee"},R=g(" 保费："),V={class:"money"},$={key:0,class:"buttons"},ee=g("删除"),ae=g("去处理"),te={key:1,class:"buttons"},oe=g("去支付"),re={key:2,class:"buttons"},de=g("删除");var ie=w(a({props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(e,{emit:a}){const p=e,v=t(),g=()=>{b.confirm({title:"",message:"确认要删除该订单么？",confirmButtonText:"删除"}).then((()=>{T(p.detail.id,p.detail.orderStatus).then((e=>{const{code:t,data:o}=e;"10000"===t&&(h.success("删除成功"),a("afterDelete"))}))}))},y=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:o,templateId:r,tenantId:d,insurerCode:i,productCategory:n,agencyId:s,saleChannelId:l,orderStatus:c}=p.detail;if(!(E.PENDING!==c&&E.PAYING!==c||e!==D.ZXYS&&e!==D.BWYL)){const t={[D.ZXYS]:"/internet/productDetail/package",[D.BWYL]:"/internet/productDetail"};return v.push({path:t[e],query:{productCode:e,saleChannelId:l,agentCode:o,tenantId:d,agencyCode:s,orderNo:a}}),!0}return!1},C=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:o,templateId:r,tenantId:d,insurerCode:i,productCategory:n,agencyId:s}=p.detail;y()||v.push({path:S.payInfo,query:{productCode:e,orderNo:a,orderId:t,saleUserId:o,templateId:r,tenantId:d,insurerCode:i,productCategory:n,agencyCode:s}})},I=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:o,templateId:r,tenantId:d,insurerCode:i,productCategory:n,agencyId:s,saleChannelId:l,orderStatus:c}=p.detail;y()||v.push({path:S[p.detail.pageCode],query:{productCode:e,orderNo:a,orderId:t,agentCode:o,templateId:r,tenantId:d,insurerCode:i,productCategory:n,agencyCode:s,isFromOrderList:"1"}})};return(a,t)=>{const p=o("van-button");return r(),d("div",L,[i("div",q,[i("div",A,n(e.detail.goodsName),1),i("div",H,n(e.detail.abbreviation),1),i("div",M,n(s(U)[e.detail.orderStatus]),1)]),i("div",O,[i("div",B,[W,i("div",F,n(e.detail.policyHolder),1)]),i("div",X,[Z,i("div",J,n(s(l)(e.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1)])]),i("div",K,[i("div",Q,[R,i("span",V,"￥"+n(e.detail.prem),1)]),e.detail.orderTopStatus===s(P).PENDING?(r(),d("div",$,[c(p,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[ee])),_:1},8,["onClick"]),c(p,{class:"button primary",onClick:u(I,["stop"])},{default:m((()=>[ae])),_:1},8,["onClick"])])):f("",!0),e.detail.orderTopStatus===s(P).PAYING?(r(),d("div",te,[c(p,{class:"button primary",onClick:u(C,["stop"])},{default:m((()=>[oe])),_:1},8,["onClick"])])):f("",!0),e.detail.orderTopStatus===s(P).TIMEOUT?(r(),d("div",re,[c(p,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[de])),_:1},8,["onClick"])])):f("",!0)])])}}}),[["__scopeId","data-v-1b3aa45c"]]);const ne={class:"page-order"},se=a({setup(e){t();const a=y(0),n=y(1),s=y(!1),l=y(!1),u=y([]),f=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"1"},{title:"已失效",status:"2"}],p=C((()=>f[a.value].status)),v=()=>{s.value=!0,j({condition:{orderTopStatus:p.value},pageSize:10,pageNum:n.value}).then((e=>{s.value=!1;const{code:a,data:t}=e;"10000"===a&&(1===n.value?u.value=t.datas:u.value=[...u.value,...t.datas]),l.value=u.value.length>=t.total}))},g=()=>{n.value+=1,v()},b=()=>{n.value=1,v()};return I(p,(()=>{n.value=1,v()})),k((()=>{v()})),(e,t)=>{const n=o("van-list"),p=o("ProPageWrap");return r(),x(p,{"main-class":"page-order-list"},{default:m((()=>[i("div",ne,[c(_,{active:a.value,"onUpdate:active":t[0]||(t[0]=e=>a.value=e),list:f,"small-gap":"",class:"tab"},null,8,["active"]),c(n,{class:"body",loading:s.value,finished:l.value,onLoad:g},{default:m((()=>[(r(!0),d(z,null,N(u.value,((e,a)=>(r(),x(ie,{key:a,detail:e,onClick:a=>(e=>{const{orderNo:a,saleUserId:t,tenantId:o,abbreviation:r,productCategory:d}=e;Y("orderDetail",{orderNo:a,agentCode:t,tenantId:o,abbreviation:r,productCategory:d})})(e),onAfterDelete:b},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])])])),_:1})}}});e("default",w(se,[["__scopeId","data-v-52022118"]]))}}}))}();
