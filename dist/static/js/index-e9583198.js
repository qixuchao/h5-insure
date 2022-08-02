import{g as I,K as A,A as N,o as s,i as u,j as a,J as k,k as d,d as P,t as n,B as c,W as v,O as f,H as i,D as U,T as R,r as F,h as x,z as M,p as O,E as S,F as Y,G as $}from"./vendor-efd23fdb.js";import{P as G}from"./index-9267aa9d.js";import{d as H,g as L}from"./order-b95d2f63.js";import{O as V,a as C}from"./order-bd6d2330.js";import{_ as B,P as g}from"./index-4efca34e.js";import"./utils-b6782348.js";const W={class:"com-order-item"},j={class:"header"},w={class:"product-name"},q={class:"company-name"},J={class:"status"},z={class:"holder"},K={class:"footer"},Q={class:"fee"},X=i(" \u4FDD\u8D39\uFF1A"),Z={class:"money"},tt={key:0,class:"buttons"},et=i("\u5220\u9664"),st=i("\u53BB\u5904\u7406"),ot={key:1,class:"buttons"},at=i("\u5220\u9664"),dt=i("\u53BB\u652F\u4ED8"),ut={key:2,class:"buttons"},nt=i("\u5220\u9664"),ct=i("\u53BB\u652F\u4ED8"),it={key:3,class:"buttons"},lt={key:4,class:"buttons"},rt={key:5,class:"buttons"},_t=i("\u5220\u9664"),ht={key:6,class:"buttons"},mt=i("\u5220\u9664"),vt=I({props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(e,{emit:E}){const l=e,D=A(),r=()=>{U.confirm({title:"\u786E\u8BA4",message:"\u786E\u8BA4\u5220\u9664\u8BA2\u5355\uFF1F"}).then(()=>{H(l.detail.id).then(o=>{const{code:_,data:t}=o;_==="10000"&&(R.success("\u5220\u9664\u6210\u529F"),E("afterDelete"))})})},y=()=>{const{goodsCode:o,orderNo:_,id:t,saleUserId:h,templateId:p,tenantId:m}=l.detail;D.push({path:g.payInfo,query:{productCode:o,orderNo:_,orderId:t,saleUserId:h,templateId:p,tenantId:m}})},b=()=>{const{goodsCode:o,orderNo:_,id:t,saleUserId:h,templateId:p,tenantId:m}=l.detail;D.push({path:g[l.detail.pageCode],query:{productCode:o,orderNo:_,orderId:t,saleUserId:h,templateId:p,tenantId:m}})};return(o,_)=>{const t=N("van-button");return s(),u("div",W,[a("div",j,[a("div",w,k(e.detail.goodsName),1),a("div",q,k(e.detail.companyName),1),a("div",J,k(d(V)[e.detail.orderStatus]),1)]),a("div",z," \u6295\u4FDD\u4EBA\uFF1A "+k(e.detail.policyHolder)+" "+k(d(P)(e.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1),a("div",K,[a("div",Q,[X,a("span",Z,"\uFFE5"+k(e.detail.prem),1)]),e.detail.orderStatus===d(C).PENDING?(s(),u("div",tt,[n(t,{class:"button",onClick:v(r,["stop"])},{default:c(()=>[et]),_:1},8,["onClick"]),n(t,{class:"button primary",onClick:v(b,["stop"])},{default:c(()=>[st]),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===d(C).PAYING?(s(),u("div",ot,[n(t,{class:"button",onClick:v(r,["stop"])},{default:c(()=>[at]),_:1},8,["onClick"]),n(t,{class:"button primary",onClick:v(y,["stop"])},{default:c(()=>[dt]),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===d(C).PAYMENT_FAILED?(s(),u("div",ut,[n(t,{class:"button",onClick:v(r,["stop"])},{default:c(()=>[nt]),_:1},8,["onClick"]),n(t,{class:"button primary",onClick:v(y,["stop"])},{default:c(()=>[ct]),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===d(C).PAYMENT_SUCCESS?(s(),u("div",it)):f("",!0),e.detail.orderStatus===d(C).UNDERWRITE?(s(),u("div",lt)):f("",!0),e.detail.orderStatus===d(C).INSURER_REJECT?(s(),u("div",rt,[n(t,{class:"button",onClick:v(r,["stop"])},{default:c(()=>[_t]),_:1},8,["onClick"])])):f("",!0),e.detail.orderStatus===d(C).TIMEOUT?(s(),u("div",ht,[n(t,{class:"button",onClick:v(r,["stop"])},{default:c(()=>[mt]),_:1},8,["onClick"])])):f("",!0)])])}}});var pt=B(vt,[["__scopeId","data-v-cf309272"]]);const ft={class:"page-order"},Ct={class:"body"},kt=I({setup(e){const E=A(),l=F(0),D=F([]),r=[{title:"\u5168\u90E8",status:""},{title:"\u5F85\u5904\u7406",status:"-1"},{title:"\u5F85\u652F\u4ED8",status:"0"},{title:"\u5DF2\u5B8C\u6210",status:"1"},{title:"\u5DF2\u5931\u6548",status:"2"}],y=x(()=>r[l.value].status),b=t=>{E.push(`/orderDetail?id=${t.id}`)},o=()=>{L({condition:{orderTopStatus:y.value}}).then(t=>{const{code:h,data:p}=t;h==="10000"&&(D.value=p.datas)})},_=()=>{o()};return M(y,()=>{o()}),O(()=>{o()}),(t,h)=>{const p=N("ProPageWrap");return s(),S(p,null,{default:c(()=>[a("div",ft,[n(G,{active:l.value,"onUpdate:active":h[0]||(h[0]=m=>l.value=m),list:r,"small-gap":"",class:"tab"},null,8,["active"]),a("div",Ct,[(s(!0),u($,null,Y(D.value,(m,T)=>(s(),S(pt,{key:T,detail:m,onClick:Dt=>b(m),onAfterDelete:_},null,8,["detail","onClick"]))),128))])])]),_:1})}}});var It=B(kt,[["__scopeId","data-v-139e466c"]]);export{It as default};
