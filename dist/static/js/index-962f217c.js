import{h as x,aa as U,r as A,k as d,p as r,A as s,L as E,B as c,d as O,s as u,n as i,ac as f,v as g,a5 as R,a6 as Y,E as _,D as j,T as w,G as I,z as G,$ as H,j as V,m as T,H as $,F as q}from"./vendor-03839741.js";import{_ as L,b as P,j as z,p as J}from"./index-b837f5c5.js";import{d as W,g as K}from"./order-f4f5c3f8.js";import{O as Q,a as y}from"./order-b675ac95.js";const M=t=>(R("data-v-4c034895"),t=t(),Y(),t),X={class:"com-order-item"},Z={class:"header"},tt={class:"product-name"},et={class:"company-name"},st={class:"status"},at={class:"info"},ot={class:"info-item"},dt=M(()=>s("div",{class:"label"},"\u6295\u4FDD\u4EBA",-1)),nt={class:"desc"},ut={class:"info-item"},it=M(()=>s("div",{class:"label"},"\u521B\u5EFA\u65F6\u95F4",-1)),lt={class:"desc"},ct={class:"footer"},rt={class:"fee"},_t=_(" \u4FDD\u8D39\uFF1A"),vt={class:"money"},ht={key:0,class:"buttons"},pt=_("\u5220\u9664"),mt=_("\u53BB\u5904\u7406"),ft={key:1,class:"buttons"},Ct=_("\u5220\u9664"),gt=_("\u53BB\u652F\u4ED8"),yt={key:2,class:"buttons"},kt=_("\u5220\u9664"),bt=_("\u53BB\u652F\u4ED8"),Et={key:3,class:"buttons"},Dt={key:4,class:"buttons"},St={key:5,class:"buttons"},Ft=_("\u5220\u9664"),It={key:6,class:"buttons"},Nt=_("\u5220\u9664"),Bt=x({props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(t,{emit:D}){const a=t,k=U(),v=()=>{j.confirm({title:"",message:"\u786E\u8BA4\u8981\u5220\u9664\u8BE5\u8BA2\u5355\u4E48\uFF1F",confirmButtonText:"\u5220\u9664"}).then(()=>{W(a.detail.id,a.detail.orderStatus).then(l=>{const{code:p,data:e}=l;p==="10000"&&(w.success("\u5220\u9664\u6210\u529F"),D("afterDelete"))})})},h=()=>{const{goodsCode:l,orderNo:p,id:e,saleUserId:S,templateId:F,tenantId:m,insurerCode:n,productCategory:o,agencyId:C}=a.detail;k.push({path:P.payInfo,query:{productCode:l,orderNo:p,orderId:e,saleUserId:S,templateId:F,tenantId:m,insurerCode:n,productCategory:o,agencyCode:C}})},N=()=>{const{goodsCode:l,orderNo:p,id:e,saleUserId:S,templateId:F,tenantId:m,insurerCode:n,productCategory:o,agencyId:C}=a.detail;k.push({path:P[a.detail.pageCode],query:{productCode:l,orderNo:p,orderId:e,agentCode:S,templateId:F,tenantId:m,insurerCode:n,productCategory:o,agencyCode:C,isFromOrderList:"1"}})};return(l,p)=>{const e=A("van-button");return d(),r("div",X,[s("div",Z,[s("div",tt,E(t.detail.goodsName),1),s("div",et,E(t.detail.abbreviation),1),s("div",st,E(c(Q)[t.detail.orderStatus]),1)]),s("div",at,[s("div",ot,[dt,s("div",nt,E(t.detail.policyHolder),1)]),s("div",ut,[it,s("div",lt,E(c(O)(t.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1)])]),s("div",ct,[s("div",rt,[_t,s("span",vt,"\uFFE5"+E(t.detail.prem),1)]),t.detail.orderStatus===c(y).PENDING?(d(),r("div",ht,[u(e,{class:"button",onClick:f(v,["stop"])},{default:i(()=>[pt]),_:1},8,["onClick"]),u(e,{class:"button primary",onClick:f(N,["stop"])},{default:i(()=>[mt]),_:1},8,["onClick"])])):g("",!0),t.detail.orderStatus===c(y).PAYING?(d(),r("div",ft,[u(e,{class:"button",onClick:f(v,["stop"])},{default:i(()=>[Ct]),_:1},8,["onClick"]),u(e,{class:"button primary",onClick:f(h,["stop"])},{default:i(()=>[gt]),_:1},8,["onClick"])])):g("",!0),t.detail.orderStatus===c(y).PAYMENT_FAILED?(d(),r("div",yt,[u(e,{class:"button",onClick:f(v,["stop"])},{default:i(()=>[kt]),_:1},8,["onClick"]),u(e,{class:"button primary",onClick:f(h,["stop"])},{default:i(()=>[bt]),_:1},8,["onClick"])])):g("",!0),t.detail.orderStatus===c(y).PAYMENT_SUCCESS?(d(),r("div",Et)):g("",!0),t.detail.orderStatus===c(y).ACCEPT_POLICY?(d(),r("div",Dt)):g("",!0),t.detail.orderStatus===c(y).INSURER_REJECT?(d(),r("div",St,[u(e,{class:"button",onClick:f(v,["stop"])},{default:i(()=>[Ft]),_:1},8,["onClick"])])):g("",!0),t.detail.orderStatus===c(y).TIMEOUT?(d(),r("div",It,[u(e,{class:"button",onClick:f(v,["stop"])},{default:i(()=>[Nt]),_:1},8,["onClick"])])):g("",!0)])])}}});var At=L(Bt,[["__scopeId","data-v-4c034895"]]);const Tt={class:"page-order"},Pt=x({setup(t){U();const D=I(0),a=I(1),k=I(!1),v=I(!1),h=I([]),N=[{title:"\u5168\u90E8",status:""},{title:"\u5F85\u5904\u7406",status:"-1"},{title:"\u5F85\u652F\u4ED8",status:"0"},{title:"\u5DF2\u5B8C\u6210",status:"1"},{title:"\u5DF2\u5931\u6548",status:"2"}],l=G(()=>N[D.value].status),p=m=>{const{orderNo:n,saleUserId:o,tenantId:C,abbreviation:b,productCategory:B}=m;J("orderDetail",{orderNo:n,agentCode:o,tenantId:C,abbreviation:b,productCategory:B})},e=()=>{k.value=!0,K({condition:{orderTopStatus:l.value},pageSize:10,pageNum:a.value}).then(m=>{k.value=!1;const{code:n,data:o}=m;n==="10000"&&(a.value===1?h.value=o.datas:h.value=[...h.value,...o.datas]),v.value=h.value.length>=o.total})},S=()=>{a.value+=1,e(),console.log("\u{1F680} ~ handleLoad ~ pageNum.value",a.value)},F=()=>{a.value=1,e()};return H(l,()=>{a.value=1,e()}),V(()=>{e()}),(m,n)=>{const o=A("van-list"),C=A("ProPageWrap");return d(),T(C,{"main-class":"page-order-list"},{default:i(()=>[s("div",Tt,[u(z,{active:D.value,"onUpdate:active":n[0]||(n[0]=b=>D.value=b),list:N,"small-gap":"",class:"tab"},null,8,["active"]),u(o,{class:"body",loading:k.value,finished:v.value,onLoad:S},{default:i(()=>[(d(!0),r(q,null,$(h.value,(b,B)=>(d(),T(At,{key:B,detail:b,onClick:xt=>p(b),onAfterDelete:F},null,8,["detail","onClick"]))),128))]),_:1},8,["loading","finished"])])]),_:1})}}});var Rt=L(Pt,[["__scopeId","data-v-52022118"]]);export{Rt as default};
