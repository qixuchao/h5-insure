!function(){var e=document.createElement("style");e.innerHTML=".com-order-item[data-v-a3f24c10]{margin-bottom:.4rem;background:#fff;border-radius:.26667rem;width:100%;padding:.4rem .4rem .4rem .26667rem}.com-order-item .header[data-v-a3f24c10]{display:flex;align-items:center}.com-order-item .header .product-name[data-v-a3f24c10]{flex:1;width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:.4rem;font-weight:500;color:#393d46}.com-order-item .header .company-name[data-v-a3f24c10]{flex:0 0 1.6rem;height:.53333rem;line-height:.53333rem;text-align:center;padding:0 .13333rem;background:rgba(13,110,254,.1);border-radius:.10667rem;font-size:.29333rem;color:#0d6efe;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.com-order-item .header .status[data-v-a3f24c10]{margin-left:.4rem;font-size:.34667rem;color:#99a9c0}.com-order-item .holder[data-v-a3f24c10]{font-size:.32rem;color:#99a9c0;line-height:.44rem;margin-top:.21333rem;padding-bottom:.4rem;border-bottom:1px dashed #eeeef4}.com-order-item .info[data-v-a3f24c10]{font-size:.32rem;color:#99a9c0;line-height:.44rem;padding:.4rem 0;border-bottom:1px dashed #eeeff4}.com-order-item .info .info-item[data-v-a3f24c10]{display:flex;margin-top:.16rem}.com-order-item .info .info-item[data-v-a3f24c10]:first-child{margin-top:0}.com-order-item .info .info-item .label[data-v-a3f24c10]{flex:0 0 1.33333rem}.com-order-item .info .info-item .desc[data-v-a3f24c10]{flex:1;margin-left:.4rem}.com-order-item .footer[data-v-a3f24c10]{display:flex;align-items:center;justify-content:space-between;margin-top:.26667rem}.com-order-item .footer .fee[data-v-a3f24c10]{font-size:.34667rem;color:#333}.com-order-item .footer .fee .money[data-v-a3f24c10]{color:#ff5840}.com-order-item .footer .buttons[data-v-a3f24c10]{display:flex}.com-order-item .footer .buttons .button[data-v-a3f24c10]{height:.8rem;line-height:.8rem;border-radius:.4rem;border:1px solid #0d6efe;padding:0 .44rem;min-width:1.70667rem;font-size:.37333rem;color:#0d6efe;margin-right:.21333rem}.com-order-item .footer .buttons .button.primary[data-v-a3f24c10]{background:#0d6efe;color:#fff}.com-order-item .footer .buttons .button[data-v-a3f24c10]:last-child{margin-right:0}.page-order-list{height:0}.page-order[data-v-6cd78898]{height:100%;display:flex;flex-direction:column}.page-order .body[data-v-6cd78898]{flex:1;height:0;overflow-y:auto;background:#f2f5fc;padding:.4rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-0e389512.js","./index-legacy-912a332f.js","./order-legacy-ccdeefb8.js","./order-legacy-8b9c48f0.js","./utils-legacy-20e4723c.js"],(function(e){"use strict";var t,a,o,d,r,i,s,l,n,c,m,u,f,p,v,g,h,b,y,C,k,I,x,_,S,w,E,N,D,z,T,j;return{setters:[function(e){t=e.g,a=e.O,o=e.r,d=e.j,r=e.n,i=e.z,s=e.J,l=e.A,n=e.d,c=e.p,m=e.m,u=e.am,f=e.t,p=e.a5,v=e.a6,g=e.C,h=e.D,b=e.T,y=e.E,C=e.y,k=e.$,I=e.h,x=e.k,_=e.G,S=e.F},function(e){w=e._,E=e.P,N=e.y},function(e){D=e.d,z=e.g},function(e){T=e.O,j=e.a},function(){}],execute:function(){const U=e=>(p("data-v-a3f24c10"),e=e(),v(),e),P={class:"com-order-item"},Y={class:"header"},A={class:"product-name"},M={class:"company-name"},R={class:"status"},H={class:"info"},O={class:"info-item"},G=U((()=>i("div",{class:"label"},"投保人",-1))),L={class:"desc"},q={class:"info-item"},F=U((()=>i("div",{class:"label"},"创建时间",-1))),J={class:"desc"},W={class:"footer"},$={class:"fee"},B=g(" 保费："),K={class:"money"},Q={key:0,class:"buttons"},V=g("删除"),X=g("去处理"),Z={key:1,class:"buttons"},ee=g("删除"),te=g("去支付"),ae={key:2,class:"buttons"},oe=g("删除"),de=g("去支付"),re={key:3,class:"buttons"},ie={key:4,class:"buttons"},se={key:5,class:"buttons"},le=g("删除"),ne={key:6,class:"buttons"},ce=g("删除");var me=w(t({props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(e,{emit:t}){const p=e,v=a(),g=()=>{h.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{D(p.detail.id,p.detail.orderStatus).then((e=>{const{code:a,data:o}=e;"10000"===a&&(b.success("删除成功"),t("afterDelete"))}))}))},y=()=>{const{goodsCode:e,orderNo:t,id:a,saleUserId:o,templateId:d,tenantId:r,insurerCode:i,productCategory:s,agencyId:l}=p.detail;v.push({path:E.payInfo,query:{productCode:e,orderNo:t,orderId:a,saleUserId:o,templateId:d,tenantId:r,insurerCode:i,productCategory:s,agencyCode:l}})},C=()=>{const{goodsCode:e,orderNo:t,id:a,saleUserId:o,templateId:d,tenantId:r,insurerCode:i,productCategory:s,agencyId:l}=p.detail;v.push({path:E[p.detail.pageCode],query:{productCode:e,orderNo:t,orderId:a,agentCode:o,templateId:d,tenantId:r,insurerCode:i,productCategory:s,agencyCode:l}})};return(t,a)=>{const p=o("van-button");return d(),r("div",P,[i("div",Y,[i("div",A,s(e.detail.goodsName),1),i("div",M,s(e.detail.abbreviation),1),i("div",R,s(l(T)[e.detail.orderStatus]),1)]),i("div",H,[i("div",O,[G,i("div",L,s(e.detail.policyHolder),1)]),i("div",q,[F,i("div",J,s(l(n)(e.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1)])]),i("div",W,[i("div",$,[B,i("span",K,"￥"+s(e.detail.prem),1)]),e.detail.orderStatus===l(j).PENDING?(d(),r("div",Q,[c(p,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[V])),_:1},8,["onClick"]),c(p,{class:"button primary",onClick:u(C,["stop"])},{default:m((()=>[X])),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===l(j).PAYING?(d(),r("div",Z,[c(p,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[ee])),_:1},8,["onClick"]),c(p,{class:"button primary",onClick:u(y,["stop"])},{default:m((()=>[te])),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===l(j).PAYMENT_FAILED?(d(),r("div",ae,[c(p,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[oe])),_:1},8,["onClick"]),c(p,{class:"button primary",onClick:u(y,["stop"])},{default:m((()=>[de])),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===l(j).PAYMENT_SUCCESS?(d(),r("div",re)):f("",!0),e.detail.orderStatus===l(j).UNDERWRITE?(d(),r("div",ie)):f("",!0),e.detail.orderStatus===l(j).INSURER_REJECT?(d(),r("div",se,[c(p,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[le])),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===l(j).TIMEOUT?(d(),r("div",ne,[c(p,{class:"button",onClick:u(g,["stop"])},{default:m((()=>[ce])),_:1},8,["onClick"])])):f("",!0)])])}}}),[["__scopeId","data-v-a3f24c10"]]);const ue={class:"page-order"},fe=t({setup(e){const t=a(),s=y(0),l=y(1),n=y(!1),u=y(!1),f=y([]),p=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"1"},{title:"已失效",status:"2"}],v=C((()=>p[s.value].status)),g=()=>{n.value=!0,z({condition:{orderTopStatus:v.value},pageSize:10,pageNum:l.value}).then((e=>{n.value=!1;const{code:t,data:a}=e;"10000"===t&&(1===l.value?f.value=a.datas:f.value=[...f.value,...a.datas]),u.value=f.value.length>=a.total}))},h=()=>{l.value+=1,g()},b=()=>{l.value=1,g()};return k(v,(()=>{l.value=1,g()})),I((()=>{g()})),(e,a)=>{const l=o("van-list"),v=o("ProPageWrap");return d(),x(v,{"main-class":"page-order-list"},{default:m((()=>[i("div",ue,[c(N,{active:s.value,"onUpdate:active":a[0]||(a[0]=e=>s.value=e),list:p,"small-gap":"",class:"tab"},null,8,["active"]),c(l,{class:"body",loading:n.value,finished:u.value,onLoad:h},{default:m((()=>[(d(!0),r(S,null,_(f.value,((e,a)=>(d(),x(me,{key:a,detail:e,onClick:a=>(e=>{t.push(`/orderDetail?id=${e.id}`)})(e),onAfterDelete:b},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])])])),_:1})}}});e("default",w(fe,[["__scopeId","data-v-6cd78898"]]))}}}))}();
