import{g as E,af as k,r as A,h as u,m as l,y as a,I as v,z as s,d as N,n as o,k as n,ah as c,s as F,B as i,C as y,x,X as Y,M as G,j as B,E as W,F as w}from"./vendor-94f9fb13.js";import{_ as P,P as j,r as S}from"./index-a2fdfbb9.js";import{c as g}from"./utils-b6782348.js";import{g as $}from"./order-f08cd3db.js";const V=[{value:"-1",label:"\u5F85\u5904\u7406"},{value:"0",label:"\u5F85\u652F\u4ED8"},{value:"1",label:"\u5DF2\u652F\u4ED8"},{value:"2",label:"\u5DF2\u5931\u6548"}];g(V);var r=(e=>(e.PENDING="pending",e.PAYING="paying",e.PAYMENT_SUCCESS="paymentSuccess",e.PAYMENT_FAILED="paymentFailed",e.UNDERWRITE="underwrite",e.APPLY_REFUND="applyRefund",e.REFUNDING="refunding",e.REFUND_SUCCESS="refundSuccess",e.REFUND_FAIL="refundFail",e.DELETED="deleted",e.CANCEL="cancel",e.REFUND_FAIL_PROCESSING="refundAuditProcessing",e.REFUND_AUDIT_SUCCESS="refundAuditSuccess",e.REFUND_AUDIT_FAIL="refundAuditFail",e.INSURER_REJECT="insurerReject",e.TIMEOUT="timeout",e.PROCESSING="processing",e.FAILED="failed",e.SUCCESS="success",e.CANCELED="canceled",e.WAIT_IDENTIFICATION="waitIdentification",e.IDENTIFICATION_COMPLETE="identificationComplete",e.AUDIT_PROCESSING="auditProcessing",e.AUDIT_FAILED="auditFailed",e.AUDIT_SUCCESS="auditSuccess",e.UNDERWRITING_FAILED="underWritingFailed",e))(r||{});const H=[{value:"pending",label:"\u5F85\u5904\u7406"},{value:"paying",label:"\u5F85\u652F\u4ED8"},{value:"paymentSuccess",label:"\u652F\u4ED8\u6210\u529F"},{value:"paymentFailed",label:"\u652F\u4ED8\u5931\u8D25"},{value:"underwrite",label:"\u5DF2\u627F\u4FDD"},{value:"applyRefund",label:"\u7533\u8BF7\u9000\u6B3E"},{value:"refunding",label:"\u9000\u6B3E\u4E2D"},{value:"refundSuccess",label:"\u5DF2\u9000\u6B3E"},{value:"refundFail",label:"\u9000\u6B3E\u5931\u8D25"},{value:"deleted",label:"\u8BA2\u5355\u5220\u9664"},{value:"cancel",label:"\u8BA2\u5355\u53D6\u6D88"},{value:"refundAuditProcessing",label:"\u9000\u6B3E\u5BA1\u6838\u4E2D"},{value:"refundAuditSuccess",label:"\u9000\u6B3E\u5BA1\u6838\u6210\u529F"},{value:"refundAuditFail",label:"\u9000\u6B3E\u5BA1\u6838\u5931\u8D25"},{value:"insurerReject",label:"\u4FDD\u53F8\u62D2\u4FDD"},{value:"timeout",label:"\u8D85\u65F6\u5931\u6548"},{value:"processing",label:"\u5904\u7406\u4E2D"},{value:"failed",label:"\u4EA4\u6613\u5931\u8D25"},{value:"success",label:"\u4EA4\u6613\u6210\u529F"},{value:"canceled",label:"\u5DF2\u64A4\u9500"},{value:"waitIdentification",label:"\u5F85\u8BA4\u8BC1"},{value:"identificationComplete",label:"\u8BA4\u8BC1\u5B8C\u6210"},{value:"auditProcessing",label:"\u5BA1\u6838\u4E2D"},{value:"auditFailed",label:"\u5BA1\u6838\u4E0D\u901A\u8FC7"},{value:"auditSuccess",label:"\u5BA1\u6838\u901A\u8FC7"},{value:"underWritingFailed",label:"\u6838\u4FDD\u4E0D\u901A\u8FC7"}],J=g(H);const q={class:"com-order-item"},z={class:"header"},X={class:"product-name"},K={class:"company-name"},Q={class:"status"},Z={class:"holder"},M={class:"footer"},O={class:"fee"},T=i(" \u4FDD\u8D39\uFF1A"),R={class:"money"},U={key:0,class:"buttons"},ee=i("\u5220\u9664"),te=i("\u53BB\u5904\u7406"),ue={key:1,class:"buttons"},ae=i("\u5220\u9664"),se=i("\u53BB\u652F\u4ED8"),le={key:2,class:"buttons"},oe=i("\u5220\u9664"),ne=i("\u53BB\u652F\u4ED8"),ie={key:3,class:"buttons"},de={key:4,class:"buttons"},ce={key:5,class:"buttons"},re=i("\u5220\u9664"),Fe={key:6,class:"buttons"},ve=i("\u5220\u9664"),Ce=E({props:{detail:{type:Object,default:()=>{}}},setup(e){const I=e,C=k(),d=()=>{},_=()=>{C.push({path:j.payInfo,query:{id:I.detail.id}})},b=()=>{};return(h,m)=>{const t=A("van-button");return u(),l("div",q,[a("div",z,[a("div",X,v(e.detail.goodsName),1),a("div",K,v(e.detail.companyName),1),a("div",Q,v(s(J)[e.detail.orderStatus]),1)]),a("div",Z," \u6295\u4FDD\u4EBA\uFF1A "+v(e.detail.policyHolder)+" "+v(s(N)(e.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1),a("div",M,[a("div",O,[T,a("span",R,"\uFFE5"+v(e.detail.prem),1)]),e.detail.orderStatus===s(r).PENDING?(u(),l("div",U,[o(t,{class:"button",onClick:c(d,["stop"])},{default:n(()=>[ee]),_:1},8,["onClick"]),o(t,{class:"button primary",onClick:c(b,["stop"])},{default:n(()=>[te]),_:1},8,["onClick"])])):F("",!0),e.detail.orderStatus===s(r).PAYING?(u(),l("div",ue,[o(t,{class:"button",onClick:c(d,["stop"])},{default:n(()=>[ae]),_:1},8,["onClick"]),o(t,{class:"button primary",onClick:c(_,["stop"])},{default:n(()=>[se]),_:1},8,["onClick"])])):F("",!0),e.detail.orderStatus===s(r).PAYMENT_FAILED?(u(),l("div",le,[o(t,{class:"button",onClick:c(d,["stop"])},{default:n(()=>[oe]),_:1},8,["onClick"]),o(t,{class:"button primary",onClick:c(_,["stop"])},{default:n(()=>[ne]),_:1},8,["onClick"])])):F("",!0),e.detail.orderStatus===s(r).PAYMENT_SUCCESS?(u(),l("div",ie)):F("",!0),e.detail.orderStatus===s(r).UNDERWRITE?(u(),l("div",de)):F("",!0),e.detail.orderStatus===s(r).INSURER_REJECT?(u(),l("div",ce,[o(t,{class:"button",onClick:c(d,["stop"])},{default:n(()=>[re]),_:1},8,["onClick"])])):F("",!0),e.detail.orderStatus===s(r).TIMEOUT?(u(),l("div",Fe,[o(t,{class:"button",onClick:c(d,["stop"])},{default:n(()=>[ve]),_:1},8,["onClick"])])):F("",!0)])])}}});var _e=P(Ce,[["__scopeId","data-v-7db5b0d3"]]);const be={class:"page-order"},De={class:"body"},fe=E({setup(e){const I=k(),C=y(0),d=y([]),_=[{title:"\u5168\u90E8",status:""},{title:"\u5F85\u5904\u7406",status:"-1"},{title:"\u5F85\u652F\u4ED8",status:"0"},{title:"\u5DF2\u5B8C\u6210",status:"1"},{title:"\u5DF2\u5931\u6548",status:"2"}],b=x(()=>_[C.value].status),h=t=>{I.push(`/order/detail?id=${t.id}`)},m=()=>{$({condition:{orderTopStatus:b.value}}).then(t=>{const{code:D,data:p}=t;D==="10000"&&(d.value=p.datas)})};return Y(b,()=>{m()}),G(()=>{m()}),(t,D)=>{const p=A("ProPageWrap");return u(),B(p,null,{default:n(()=>[a("div",be,[o(S,{active:C.value,"onUpdate:active":D[0]||(D[0]=f=>C.value=f),list:_,"small-gap":"",class:"tab"},null,8,["active"]),a("div",De,[(u(!0),l(w,null,W(d.value,(f,L)=>(u(),B(_e,{key:L,detail:f,onClick:Ie=>h(f)},null,8,["detail","onClick"]))),128))])])]),_:1})}}});var Be=P(fe,[["__scopeId","data-v-44a159a9"]]);export{Be as default};
