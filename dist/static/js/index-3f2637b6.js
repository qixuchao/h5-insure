import{k as e,aa as a,p as t,s,B as d,C as o,M as r,E as l,d as n,S as i,v as c,ac as u,y as p,G as v,D as C,T as m,a5 as g,a6 as I,r as f,b,$ as y,o as k,t as h,I as N,H as S}from"./vendor-9bab628e.js";import{_ as D,b as Y,ak as _,k as U,s as T}from"./index-8e7f5f4c.js";import{d as P,g as B}from"./order-d616d8be.js";import{O as L,b as j}from"./order-cebcc6b9.js";const G=e=>(g("data-v-b27e4180"),e=e(),I(),e),W={class:"com-order-item"},E={class:"header"},H={class:"product-name"},M={class:"company-name"},O={class:"status"},q={class:"info"},x={class:"info-item"},A=G((()=>o("div",{class:"label"},"投保人",-1))),X={class:"desc"},Z={class:"info-item"},z=G((()=>o("div",{class:"label"},"创建时间",-1))),F={class:"desc"},$={class:"footer"},w={class:"fee"},J=v(" 保费："),K={class:"money"},Q={key:0,class:"buttons"},R=v("删除"),V=v("去处理"),ee={key:1,class:"buttons"},ae=v("去支付"),te={key:2,class:"buttons"},se=v("删除");var de=D(e({props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(e,{emit:v}){const g=e,I=a(),f=()=>{C.confirm({title:"",message:"确认要删除该订单么？",confirmButtonText:"删除"}).then((()=>{P(g.detail.id,g.detail.orderStatus).then((e=>{const{code:a,data:t}=e;"10000"===a&&(m.success("删除成功"),v("afterDelete"))}))}))},b=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n,saleChannelId:i,orderTopStatus:c}=g.detail;if((j.PENDING===c||j.PAYING===c)&&[_.ZXYS,_.BWYL,_.BWYLUP].includes(e)){const t={[_.ZXYS]:"/internet/productDetail/package",[_.BWYL]:"/internet/productDetail",[_.BWYLUP]:"/internet/guaranteeUpgrade"};return I.push({path:t[e],query:{productCode:e,saleChannelId:i,agentCode:s,tenantId:o,agencyCode:n,orderNo:a}}),!0}return!1},y=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n}=g.detail;b()||I.push({path:Y.payInfo,query:{productCode:e,orderNo:a,orderId:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyCode:n}})},k=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n,saleChannelId:i,orderStatus:c}=g.detail;b()||I.push({path:Y[g.detail.pageCode],query:{productCode:e,orderNo:a,orderId:t,agentCode:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyCode:n,isFromOrderList:"1"}})};return(a,v)=>{const C=t("van-button");return s(),d("div",W,[o("div",E,[o("div",H,r(e.detail.goodsName),1),o("div",M,r(e.detail.abbreviation),1),o("div",O,r(l(L)[e.detail.orderStatus]),1)]),o("div",q,[o("div",x,[A,o("div",X,r(e.detail.policyHolder),1)]),o("div",Z,[z,o("div",F,r(l(n)(e.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1)])]),o("div",$,[o("div",w,[J,o("span",K,"￥"+r(e.detail.prem),1)]),e.detail.orderTopStatus===l(j).PENDING?(s(),d("div",Q,[i(C,{class:"button",onClick:u(f,["stop"])},{default:c((()=>[R])),_:1},8,["onClick"]),i(C,{class:"button primary",onClick:u(k,["stop"])},{default:c((()=>[V])),_:1},8,["onClick"])])):p("",!0),e.detail.orderTopStatus===l(j).PAYING?(s(),d("div",ee,[i(C,{class:"button primary",onClick:u(y,["stop"])},{default:c((()=>[ae])),_:1},8,["onClick"])])):p("",!0),e.detail.orderTopStatus===l(j).TIMEOUT?(s(),d("div",te,[i(C,{class:"button",onClick:u(f,["stop"])},{default:c((()=>[se])),_:1},8,["onClick"])])):p("",!0)])])}}}),[["__scopeId","data-v-b27e4180"]]);const oe={class:"page-order"};var re=D(e({setup(e){a();const r=f(0),l=f(1),n=f(!1),u=f(!1),p=f([]),v=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"1"},{title:"已失效",status:"2"}],C=b((()=>v[r.value].status)),m=()=>{n.value=!0,B({condition:{orderTopStatus:C.value},pageSize:10,pageNum:l.value}).then((e=>{n.value=!1;const{code:a,data:t}=e;"10000"===a&&(1===l.value?p.value=t.datas:p.value=[...p.value,...t.datas]),u.value=p.value.length>=t.total}))},g=()=>{l.value+=1,m()},I=()=>{l.value=1,m()};return y(C,(()=>{l.value=1,m()})),k((()=>{m()})),(e,a)=>{const l=t("van-list"),C=t("ProPageWrap");return s(),h(C,{"main-class":"page-order-list"},{default:c((()=>[o("div",oe,[i(U,{active:r.value,"onUpdate:active":a[0]||(a[0]=e=>r.value=e),list:v,"small-gap":"",class:"tab"},null,8,["active"]),i(l,{class:"body",loading:n.value,finished:u.value,onLoad:g},{default:c((()=>[(s(!0),d(S,null,N(p.value,((e,a)=>(s(),h(de,{key:a,detail:e,onClick:a=>(e=>{const{orderNo:a,saleUserId:t,tenantId:s,abbreviation:d,productCategory:o}=e;T("orderDetail",{orderNo:a,agentCode:t,tenantId:s,abbreviation:d,productCategory:o})})(e),onAfterDelete:I},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])])])),_:1})}}}),[["__scopeId","data-v-5f493360"]]);export{re as default};
