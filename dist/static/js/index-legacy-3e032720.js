!function(){var e=document.createElement("style");e.innerHTML=".com-order-item[data-v-8833e45c]{margin-bottom:.4rem;background:#fff;border-radius:.26667rem;width:100%;padding:.4rem .4rem .4rem .26667rem}.com-order-item .header[data-v-8833e45c]{display:flex;align-items:center}.com-order-item .header .product-name[data-v-8833e45c]{flex:1;width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:.4rem;font-weight:500;color:#393d46}.com-order-item .header .company-name[data-v-8833e45c]{flex:0 0 2.13333rem;height:.53333rem;line-height:.53333rem;text-align:center;padding:0 .13333rem;background:rgba(13,110,254,.1);border-radius:.10667rem;font-size:.29333rem;color:var(--van-primary-color, var(--zaui-brand))}.com-order-item .header .status[data-v-8833e45c]{margin-left:.4rem;font-size:.34667rem;color:#99a9c0}.com-order-item .holder[data-v-8833e45c]{font-size:.32rem;color:#99a9c0;line-height:.44rem;margin-top:.21333rem;padding-bottom:.4rem;border-bottom:1px dashed #eeeef4}.com-order-item .info[data-v-8833e45c]{font-size:.32rem;color:#99a9c0;line-height:.44rem;padding:.4rem 0;border-bottom:1px dashed #eeeff4}.com-order-item .info .info-item[data-v-8833e45c]{display:flex;margin-top:.16rem}.com-order-item .info .info-item[data-v-8833e45c]:first-child{margin-top:0}.com-order-item .info .info-item .label[data-v-8833e45c]{flex:0 0 1.33333rem}.com-order-item .info .info-item .desc[data-v-8833e45c]{flex:1;margin-left:.4rem}.com-order-item .footer[data-v-8833e45c]{display:flex;align-items:center;justify-content:space-between;margin-top:.26667rem}.com-order-item .footer .fee[data-v-8833e45c]{font-size:.34667rem;color:#333}.com-order-item .footer .fee .money[data-v-8833e45c]{color:var(--zaui-price, #ff5840)}.com-order-item .footer .buttons[data-v-8833e45c]{display:flex}.com-order-item .footer .buttons .button[data-v-8833e45c]{height:.8rem;line-height:.8rem;border-radius:.4rem;border:1px solid var(--van-primary-color, var(--zaui-brand));padding:0 .44rem;min-width:1.70667rem;font-size:.37333rem;color:var(--van-primary-color, var(--zaui-brand));margin-right:.21333rem}.com-order-item .footer .buttons .button.primary[data-v-8833e45c]{background:var(--van-primary-color, var(--zaui-brand));color:#fff}.com-order-item .footer .buttons .button[data-v-8833e45c]:last-child{margin-right:0}.page-order-list{height:0}.page-order[data-v-7c7bbc82]{height:100%;display:flex;flex-direction:column}.page-order .body[data-v-7c7bbc82]{flex:1;height:0;overflow-y:auto;background:var(--zaui-global-bg, #f2f5fc);padding:.4rem}\n",document.head.appendChild(e),System.register(["./index-legacy-56d6d425.js","./order-legacy-88ea142c.js","./order-legacy-33867685.js","./pdfh5-legacy-783b46b8.js"],(function(e){"use strict";var t,a,r,o,d,i,n,l,s,c,m,u,p,f,v,g,b,h,y,C,I,k,x,N,z,S,D,Y,w,_,T,U,L,P,j;return{setters:[function(e){t=e._,a=e.d,r=e.u,o=e.b,d=e.c,i=e.g,n=e.i,l=e.t,s=e.l,c=e.$,m=e.f,u=e.w,p=e.k,f=e.j,v=e.n,g=e.a5,b=e.T,h=e.D,y=e.K,C=e.L,I=e.bq,k=e.a,x=e.r,N=e.x,z=e.a8,S=e.y,D=e.e,Y=e.V,w=e.h,_=e.F,T=e.a4},function(e){U=e.d,L=e.g},function(e){P=e.O,j=e.b},function(){}],execute:function(){const q=e=>(y("data-v-8833e45c"),e=e(),C(),e),B={class:"com-order-item"},W={class:"header"},E={class:"product-name"},G={class:"company-name"},H={class:"status"},M={class:"info"},O={class:"info-item"},A=q((()=>n("div",{class:"label"},"投保人",-1))),F={class:"desc"},X={class:"info-item"},Z=q((()=>n("div",{class:"label"},"创建时间",-1))),K={class:"desc"},V={class:"footer"},$={class:"fee"},J=v(" 保费："),Q={class:"money"},R={key:0,class:"buttons"},ee=v("删除"),te=v("去处理"),ae={key:1,class:"buttons"},re=v("去支付"),oe={key:2,class:"buttons"},de=v("删除");var ie=t(a({props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(e,{emit:t}){const a=e,v=r(),y=()=>{g.confirm({title:"",message:"确认要删除该订单么？",confirmButtonText:"删除"}).then((()=>{U(a.detail.id,a.detail.orderStatus).then((e=>{const{code:a,data:r}=e;"10000"===a&&(b.success("删除成功"),t("afterDelete"))}))}))},C=()=>{const{goodsCode:e,orderNo:t,id:r,saleUserId:o,templateId:d,tenantId:i,insurerCode:n,productCategory:l,agencyId:s,saleChannelId:c,orderTopStatus:m}=a.detail;if((j.PENDING===m||j.PAYING===m)&&[I.ZXYS,I.BWYL,I.BWYLUP].includes(e)){const a={[I.ZXYS]:"/internet/productDetail/package",[I.BWYL]:"/internet/productDetail",[I.BWYLUP]:"/internet/guaranteeUpgrade"};return v.push({path:a[e],query:{productCode:e,saleChannelId:c,agentCode:o,tenantId:i,agencyCode:s,orderNo:t}}),!0}return!1},k=()=>{const{goodsCode:e,orderNo:t,id:r,saleUserId:o,templateId:d,tenantId:i,insurerCode:n,productCategory:l,agencyId:s}=a.detail;C()||v.push({path:h.payInfo,query:{productCode:e,orderNo:t,orderId:r,saleUserId:o,templateId:d,tenantId:i,insurerCode:n,productCategory:l,agencyCode:s}})},x=()=>{const{goodsCode:e,orderNo:t,id:r,saleUserId:o,templateId:d,tenantId:i,insurerCode:n,productCategory:l,agencyId:s,saleChannelId:c,orderStatus:m}=a.detail;C()||v.push({path:h[a.detail.pageCode],query:{productCode:e,orderNo:t,orderId:r,agentCode:o,templateId:d,tenantId:i,insurerCode:n,productCategory:l,agencyCode:s,isFromOrderList:"1"}})};return(t,a)=>{const r=o("van-button");return d(),i("div",B,[n("div",W,[n("div",E,l(e.detail.goodsName),1),n("div",G,l("众安保险科技有限".substring(0,6)),1),n("div",H,l(s(P)[e.detail.orderStatus]),1)]),n("div",M,[n("div",O,[A,n("div",F,l(e.detail.policyHolder),1)]),n("div",X,[Z,n("div",K,l(s(c)(e.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1)])]),n("div",V,[n("div",$,[J,n("span",Q,"￥"+l(e.detail.prem),1)]),e.detail.orderTopStatus===s(j).PENDING?(d(),i("div",R,[m(r,{class:"button",onClick:p(y,["stop"])},{default:u((()=>[ee])),_:1},8,["onClick"]),m(r,{class:"button primary",onClick:p(x,["stop"])},{default:u((()=>[te])),_:1},8,["onClick"])])):f("",!0),e.detail.orderTopStatus===s(j).PAYING?(d(),i("div",ae,[m(r,{class:"button primary",onClick:p(k,["stop"])},{default:u((()=>[re])),_:1},8,["onClick"])])):f("",!0),e.detail.orderTopStatus===s(j).TIMEOUT?(d(),i("div",oe,[m(r,{class:"button",onClick:p(y,["stop"])},{default:u((()=>[de])),_:1},8,["onClick"])])):f("",!0)])])}}}),[["__scopeId","data-v-8833e45c"]]);const ne={class:"page-order"},le=a({setup(e){r();const t=k().query,a=x({"-1":1,0:2,1:3,2:4}[t.type]||0),l=x(1),s=x(!1),c=x(!1),p=x([]),f=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"1"},{title:"已失效",status:"2"}],v=N((()=>(p.value=[],f[a.value].status))),g=()=>{b.loading({message:"加载中...",forbidClick:!0}),s.value=!0,L({condition:{orderTopStatus:v.value},pageSize:10,pageNum:l.value}).then((e=>{s.value=!1;const{code:t,data:a}=e;"10000"===t&&a&&(1===l.value?p.value=a.datas||[]:p.value=[...p.value,...a.datas||[]]),c.value=!a||p.value.length>=a?.total})).then((()=>{b.clear()}))},h=()=>{l.value+=1,g()},y=()=>{l.value=1,g()};return z(v,(()=>{l.value=1,g()})),S((()=>{g()})),(e,t)=>{const r=o("van-list"),l=o("ProPageWrap");return d(),D(l,{"main-class":"page-order-list"},{default:u((()=>[n("div",ne,[m(Y,{active:a.value,"onUpdate:active":t[0]||(t[0]=e=>a.value=e),list:f,"small-gap":"",class:"tab"},null,8,["active"]),m(r,{class:"body",loading:s.value,finished:c.value,onLoad:h},{default:u((()=>[(d(!0),i(_,null,w(p.value,((e,t)=>(d(),D(ie,{key:t,detail:e,onClick:t=>(e=>{const{orderNo:t,saleUserId:a,tenantId:r,abbreviation:o,productCategory:d}=e;T("orderDetail",{orderNo:t,agentCode:a,tenantId:r,abbreviation:o,productCategory:d})})(e),onAfterDelete:y},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])])])),_:1})}}});e("default",t(le,[["__scopeId","data-v-7c7bbc82"]]))}}}))}();
