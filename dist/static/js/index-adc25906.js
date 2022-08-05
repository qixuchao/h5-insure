import{g,af as B,r as N,h as o,m as c,y as s,I as k,z as n,d as U,n as i,k as u,ah as m,s as f,a1 as x,a2 as M,B as l,D as R,T as O,C as b,x as Y,X as $,M as w,j as F,E as L,F as V}from"./vendor-d47732e4.js";import{_ as A,P as I,s as j}from"./index-b08543a5.js";import{d as G,g as H}from"./order-66288f54.js";import{O as W,a as C}from"./order-bd6d2330.js";import"./utils-b6782348.js";const T=t=>(x("data-v-53950819"),t=t(),M(),t),q={class:"com-order-item"},z={class:"header"},J={class:"product-name"},X={class:"company-name"},K={class:"status"},Q={class:"info"},Z={class:"info-item"},tt=T(()=>s("div",{class:"label"},"\u6295\u4FDD\u4EBA",-1)),et={class:"desc"},st={class:"info-item"},ot=T(()=>s("div",{class:"label"},"\u521B\u5EFA\u65F6\u95F4",-1)),at={class:"desc"},dt={class:"footer"},nt={class:"fee"},ct=l(" \u4FDD\u8D39\uFF1A"),it={class:"money"},ut={key:0,class:"buttons"},lt=l("\u5220\u9664"),rt=l("\u53BB\u5904\u7406"),_t={key:1,class:"buttons"},ht=l("\u5220\u9664"),vt=l("\u53BB\u652F\u4ED8"),mt={key:2,class:"buttons"},pt=l("\u5220\u9664"),ft=l("\u53BB\u652F\u4ED8"),Ct={key:3,class:"buttons"},kt={key:4,class:"buttons"},yt={key:5,class:"buttons"},Dt=l("\u5220\u9664"),Et={key:6,class:"buttons"},St=l("\u5220\u9664"),bt=g({props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(t,{emit:E}){const d=t,y=B(),r=()=>{R.confirm({title:"\u786E\u8BA4",message:"\u786E\u8BA4\u5220\u9664\u8BA2\u5355\uFF1F"}).then(()=>{G(d.detail.id,d.detail.orderStatus).then(a=>{const{code:_,data:e}=a;_==="10000"&&(O.success("\u5220\u9664\u6210\u529F"),E("afterDelete"))})})},D=()=>{const{goodsCode:a,orderNo:_,id:e,saleUserId:h,templateId:p,tenantId:v}=d.detail;y.push({path:I.payInfo,query:{productCode:a,orderNo:_,orderId:e,saleUserId:h,templateId:p,tenantId:v}})},S=()=>{const{goodsCode:a,orderNo:_,id:e,saleUserId:h,templateId:p,tenantId:v}=d.detail;y.push({path:I[d.detail.pageCode],query:{productCode:a,orderNo:_,orderId:e,saleUserId:h,templateId:p,tenantId:v}})};return(a,_)=>{const e=N("van-button");return o(),c("div",q,[s("div",z,[s("div",J,k(t.detail.goodsName),1),s("div",X,k(t.detail.companyName),1),s("div",K,k(n(W)[t.detail.orderStatus]),1)]),s("div",Q,[s("div",Z,[tt,s("div",et,k(t.detail.policyHolder),1)]),s("div",st,[ot,s("div",at,k(n(U)(t.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1)])]),s("div",dt,[s("div",nt,[ct,s("span",it,"\uFFE5"+k(t.detail.prem),1)]),t.detail.orderStatus===n(C).PENDING?(o(),c("div",ut,[i(e,{class:"button",onClick:m(r,["stop"])},{default:u(()=>[lt]),_:1},8,["onClick"]),i(e,{class:"button primary",onClick:m(S,["stop"])},{default:u(()=>[rt]),_:1},8,["onClick"])])):f("",!0),t.detail.orderStatus===n(C).PAYING?(o(),c("div",_t,[i(e,{class:"button",onClick:m(r,["stop"])},{default:u(()=>[ht]),_:1},8,["onClick"]),i(e,{class:"button primary",onClick:m(D,["stop"])},{default:u(()=>[vt]),_:1},8,["onClick"])])):f("",!0),t.detail.orderStatus===n(C).PAYMENT_FAILED?(o(),c("div",mt,[i(e,{class:"button",onClick:m(r,["stop"])},{default:u(()=>[pt]),_:1},8,["onClick"]),i(e,{class:"button primary",onClick:m(D,["stop"])},{default:u(()=>[ft]),_:1},8,["onClick"])])):f("",!0),t.detail.orderStatus===n(C).PAYMENT_SUCCESS?(o(),c("div",Ct)):f("",!0),t.detail.orderStatus===n(C).UNDERWRITE?(o(),c("div",kt)):f("",!0),t.detail.orderStatus===n(C).INSURER_REJECT?(o(),c("div",yt,[i(e,{class:"button",onClick:m(r,["stop"])},{default:u(()=>[Dt]),_:1},8,["onClick"])])):f("",!0),t.detail.orderStatus===n(C).TIMEOUT?(o(),c("div",Et,[i(e,{class:"button",onClick:m(r,["stop"])},{default:u(()=>[St]),_:1},8,["onClick"])])):f("",!0)])])}}});var Ft=A(bt,[["__scopeId","data-v-53950819"]]);const It={class:"page-order"},gt={class:"body"},Bt=g({setup(t){const E=B(),d=b(0),y=b([]),r=[{title:"\u5168\u90E8",status:""},{title:"\u5F85\u5904\u7406",status:"-1"},{title:"\u5F85\u652F\u4ED8",status:"0"},{title:"\u5DF2\u5B8C\u6210",status:"1"},{title:"\u5DF2\u5931\u6548",status:"2"}],D=Y(()=>r[d.value].status),S=e=>{E.push(`/orderDetail?id=${e.id}`)},a=()=>{H({condition:{orderTopStatus:D.value}}).then(e=>{const{code:h,data:p}=e;h==="10000"&&(y.value=p.datas)})},_=()=>{a()};return $(D,()=>{a()}),w(()=>{a()}),(e,h)=>{const p=N("ProPageWrap");return o(),F(p,null,{default:u(()=>[s("div",It,[i(j,{active:d.value,"onUpdate:active":h[0]||(h[0]=v=>d.value=v),list:r,"small-gap":"",class:"tab"},null,8,["active"]),s("div",gt,[(o(!0),c(V,null,L(y.value,(v,P)=>(o(),F(Ft,{key:P,detail:v,onClick:Nt=>S(v),onAfterDelete:_},null,8,["detail","onClick"]))),128))])])]),_:1})}}});var Mt=A(Bt,[["__scopeId","data-v-139e466c"]]);export{Mt as default};
