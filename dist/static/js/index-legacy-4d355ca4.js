!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.com-order-item[data-v-31abdaa0]{margin-bottom:.4rem;background:#fff;border-radius:.26667rem;width:100%;padding:.4rem .4rem .4rem .26667rem}.com-order-item .header[data-v-31abdaa0]{display:flex;align-items:center}.com-order-item .header .product-name[data-v-31abdaa0]{flex:1;width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:.4rem;font-weight:500;color:#393d46}.com-order-item .header .company-name[data-v-31abdaa0]{flex:0 0 1.6rem;height:.53333rem;line-height:.53333rem;text-align:center;padding:0 .13333rem;background:rgba(13,110,254,.1);border-radius:.10667rem;font-size:.29333rem;color:#0d6efe;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.com-order-item .header .status[data-v-31abdaa0]{margin-left:.4rem;font-size:.34667rem;color:#99a9c0}.com-order-item .holder[data-v-31abdaa0]{font-size:.32rem;color:#99a9c0;line-height:.44rem;margin-top:.21333rem;padding-bottom:.4rem;border-bottom:1px dashed #eeeef4}.com-order-item .info[data-v-31abdaa0]{font-size:.32rem;color:#99a9c0;line-height:.44rem;padding:.4rem 0;border-bottom:1px dashed #eeeff4}.com-order-item .info .info-item[data-v-31abdaa0]{display:flex;margin-top:.16rem}.com-order-item .info .info-item[data-v-31abdaa0]:first-child{margin-top:0}.com-order-item .info .info-item .label[data-v-31abdaa0]{flex:0 0 1.33333rem}.com-order-item .info .info-item .desc[data-v-31abdaa0]{flex:1;margin-left:.4rem}.com-order-item .footer[data-v-31abdaa0]{display:flex;align-items:center;justify-content:space-between;margin-top:.26667rem}.com-order-item .footer .fee[data-v-31abdaa0]{font-size:.34667rem;color:#333}.com-order-item .footer .fee .money[data-v-31abdaa0]{color:#ff5840}.com-order-item .footer .buttons[data-v-31abdaa0]{display:flex}.com-order-item .footer .buttons .button[data-v-31abdaa0]{height:.8rem;line-height:.8rem;border-radius:.4rem;border:1px solid #0d6efe;padding:0 .44rem;min-width:1.70667rem;font-size:.37333rem;color:#0d6efe;margin-right:.21333rem}.com-order-item .footer .buttons .button.primary[data-v-31abdaa0]{background:#0d6efe;color:#fff}.com-order-item .footer .buttons .button[data-v-31abdaa0]:last-child{margin-right:0}@charset "UTF-8";.page-order[data-v-139e466c]{height:100%;display:flex;flex-direction:column}.page-order .body[data-v-139e466c]{flex:1;height:0;overflow-y:auto;background:#f2f5fc;padding:.4rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-bdaab2e2.js","./index-legacy-93706d9f.js","./order-legacy-766b2534.js","./order-legacy-c647c956.js","./utils-legacy-20e4723c.js"],(function(e){"use strict";var t,a,o,d,r,i,s,l,n,c,m,u,f,p,b,v,g,h,y,k,C,I,x,_,S,w,E,N,D,T,U,j;return{setters:[function(e){t=e.g,a=e.aj,o=e.r,d=e.h,r=e.m,i=e.y,s=e.I,l=e.z,n=e.d,c=e.n,m=e.k,u=e.al,f=e.s,p=e.a1,b=e.a2,v=e.B,g=e.D,h=e.T,y=e.C,k=e.x,C=e.X,I=e.M,x=e.j,_=e.E,S=e.F},function(e){w=e._,E=e.P,N=e.v},function(e){D=e.d,T=e.g},function(e){U=e.O,j=e.a},function(){}],execute:function(){const z=e=>(p("data-v-31abdaa0"),e=e(),b(),e),M={class:"com-order-item"},P={class:"header"},Y={class:"product-name"},A={class:"company-name"},R={class:"status"},F={class:"info"},H={class:"info-item"},O=z((()=>i("div",{class:"label"},"投保人",-1))),q={class:"desc"},G={class:"info-item"},L=z((()=>i("div",{class:"label"},"创建时间",-1))),W={class:"desc"},B={class:"footer"},J={class:"fee"},X=v(" 保费："),$={class:"money"},K={key:0,class:"buttons"},Q=v("删除"),V=v("去处理"),Z={key:1,class:"buttons"},ee=v("删除"),te=v("去支付"),ae={key:2,class:"buttons"},oe=v("删除"),de=v("去支付"),re={key:3,class:"buttons"},ie={key:4,class:"buttons"},se={key:5,class:"buttons"},le=v("删除"),ne={key:6,class:"buttons"},ce=v("删除");var me=w(t({props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(e,{emit:t}){const p=e,b=a(),v=()=>{g.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{D(p.detail.id,p.detail.orderStatus).then((e=>{const{code:a,data:o}=e;"10000"===a&&(h.success("删除成功"),t("afterDelete"))}))}))},y=()=>{const{goodsCode:e,orderNo:t,id:a,saleUserId:o,templateId:d,tenantId:r}=p.detail;b.push({path:E.payInfo,query:{productCode:e,orderNo:t,orderId:a,saleUserId:o,templateId:d,tenantId:r}})},k=()=>{const{goodsCode:e,orderNo:t,id:a,saleUserId:o,templateId:d,tenantId:r}=p.detail;b.push({path:E[p.detail.pageCode],query:{productCode:e,orderNo:t,orderId:a,agentCode:o,templateId:d,tenantId:r}})};return(t,a)=>{const p=o("van-button");return d(),r("div",M,[i("div",P,[i("div",Y,s(e.detail.goodsName),1),i("div",A,s(e.detail.companyName),1),i("div",R,s(l(U)[e.detail.orderStatus]),1)]),i("div",F,[i("div",H,[O,i("div",q,s(e.detail.policyHolder),1)]),i("div",G,[L,i("div",W,s(l(n)(e.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1)])]),i("div",B,[i("div",J,[X,i("span",$,"￥"+s(e.detail.prem),1)]),e.detail.orderStatus===l(j).PENDING?(d(),r("div",K,[c(p,{class:"button",onClick:u(v,["stop"])},{default:m((()=>[Q])),_:1},8,["onClick"]),c(p,{class:"button primary",onClick:u(k,["stop"])},{default:m((()=>[V])),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===l(j).PAYING?(d(),r("div",Z,[c(p,{class:"button",onClick:u(v,["stop"])},{default:m((()=>[ee])),_:1},8,["onClick"]),c(p,{class:"button primary",onClick:u(y,["stop"])},{default:m((()=>[te])),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===l(j).PAYMENT_FAILED?(d(),r("div",ae,[c(p,{class:"button",onClick:u(v,["stop"])},{default:m((()=>[oe])),_:1},8,["onClick"]),c(p,{class:"button primary",onClick:u(y,["stop"])},{default:m((()=>[de])),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===l(j).PAYMENT_SUCCESS?(d(),r("div",re)):f("",!0),e.detail.orderStatus===l(j).UNDERWRITE?(d(),r("div",ie)):f("",!0),e.detail.orderStatus===l(j).INSURER_REJECT?(d(),r("div",se,[c(p,{class:"button",onClick:u(v,["stop"])},{default:m((()=>[le])),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===l(j).TIMEOUT?(d(),r("div",ne,[c(p,{class:"button",onClick:u(v,["stop"])},{default:m((()=>[ce])),_:1},8,["onClick"])])):f("",!0)])])}}}),[["__scopeId","data-v-31abdaa0"]]);const ue={class:"page-order"},fe={class:"body"},pe=t({setup(e){const t=a(),s=y(0),l=y([]),n=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"1"},{title:"已失效",status:"2"}],u=k((()=>n[s.value].status)),f=()=>{T({condition:{orderTopStatus:u.value}}).then((e=>{const{code:t,data:a}=e;"10000"===t&&(l.value=a.datas)}))},p=()=>{f()};return C(u,(()=>{f()})),I((()=>{f()})),(e,a)=>{const u=o("ProPageWrap");return d(),x(u,null,{default:m((()=>[i("div",ue,[c(N,{active:s.value,"onUpdate:active":a[0]||(a[0]=e=>s.value=e),list:n,"small-gap":"",class:"tab"},null,8,["active"]),i("div",fe,[(d(!0),r(S,null,_(l.value,((e,a)=>(d(),x(me,{key:a,detail:e,onClick:a=>(e=>{t.push(`/orderDetail?id=${e.id}`)})(e),onAfterDelete:p},null,8,["detail","onClick"])))),128))])])])),_:1})}}});e("default",w(pe,[["__scopeId","data-v-139e466c"]]))}}}))}();
