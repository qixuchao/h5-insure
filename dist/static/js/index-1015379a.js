import{_ as e,d as a,u as t,b as s,c as d,g as o,i as r,t as l,l as n,a0 as i,f as c,w as u,k as p,j as v,n as C,a5 as g,T as m,E as I,L as f,M as y,bh as b,r as h,y as k,a8 as N,z as S,e as Y,W as D,h as _,F as U,a4 as T}from"./index-b655107d.js";import{d as P,g as L}from"./order-e2acdcba.js";import{O as j,b as W}from"./order-2e727e85.js";import"./pdfdist-666d4573.js";const B=e=>(f("data-v-b27e4180"),e=e(),y(),e),E={class:"com-order-item"},G={class:"header"},M={class:"product-name"},O={class:"company-name"},q={class:"status"},x={class:"info"},A={class:"info-item"},H=B((()=>r("div",{class:"label"},"投保人",-1))),z={class:"desc"},F={class:"info-item"},X=B((()=>r("div",{class:"label"},"创建时间",-1))),Z={class:"desc"},w={class:"footer"},J={class:"fee"},K=C(" 保费："),Q={class:"money"},R={key:0,class:"buttons"},V=C("删除"),$=C("去处理"),ee={key:1,class:"buttons"},ae=C("去支付"),te={key:2,class:"buttons"},se=C("删除");var de=e(a({props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(e,{emit:a}){const C=e,f=t(),y=()=>{g.confirm({title:"",message:"确认要删除该订单么？",confirmButtonText:"删除"}).then((()=>{P(C.detail.id,C.detail.orderStatus).then((e=>{const{code:t,data:s}=e;"10000"===t&&(m.success("删除成功"),a("afterDelete"))}))}))},h=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n,saleChannelId:i,orderTopStatus:c}=C.detail;if((W.PENDING===c||W.PAYING===c)&&[b.ZXYS,b.BWYL,b.BWYLUP].includes(e)){const t={[b.ZXYS]:"/internet/productDetail/package",[b.BWYL]:"/internet/productDetail",[b.BWYLUP]:"/internet/guaranteeUpgrade"};return f.push({path:t[e],query:{productCode:e,saleChannelId:i,agentCode:s,tenantId:o,agencyCode:n,orderNo:a}}),!0}return!1},k=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n}=C.detail;h()||f.push({path:I.payInfo,query:{productCode:e,orderNo:a,orderId:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyCode:n}})},N=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n,saleChannelId:i,orderStatus:c}=C.detail;h()||f.push({path:I[C.detail.pageCode],query:{productCode:e,orderNo:a,orderId:t,agentCode:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyCode:n,isFromOrderList:"1"}})};return(a,t)=>{const C=s("van-button");return d(),o("div",E,[r("div",G,[r("div",M,l(e.detail.goodsName),1),r("div",O,l(e.detail.abbreviation),1),r("div",q,l(n(j)[e.detail.orderStatus]),1)]),r("div",x,[r("div",A,[H,r("div",z,l(e.detail.policyHolder),1)]),r("div",F,[X,r("div",Z,l(n(i)(e.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1)])]),r("div",w,[r("div",J,[K,r("span",Q,"￥"+l(e.detail.prem),1)]),e.detail.orderTopStatus===n(W).PENDING?(d(),o("div",R,[c(C,{class:"button",onClick:p(y,["stop"])},{default:u((()=>[V])),_:1},8,["onClick"]),c(C,{class:"button primary",onClick:p(N,["stop"])},{default:u((()=>[$])),_:1},8,["onClick"])])):v("",!0),e.detail.orderTopStatus===n(W).PAYING?(d(),o("div",ee,[c(C,{class:"button primary",onClick:p(k,["stop"])},{default:u((()=>[ae])),_:1},8,["onClick"])])):v("",!0),e.detail.orderTopStatus===n(W).TIMEOUT?(d(),o("div",te,[c(C,{class:"button",onClick:p(y,["stop"])},{default:u((()=>[se])),_:1},8,["onClick"])])):v("",!0)])])}}}),[["__scopeId","data-v-b27e4180"]]);const oe={class:"page-order"};var re=e(a({setup(e){t();const a=h(0),l=h(1),n=h(!1),i=h(!1),p=h([]),v=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"1"},{title:"已失效",status:"2"}],C=k((()=>v[a.value].status)),g=()=>{n.value=!0,L({condition:{orderTopStatus:C.value},pageSize:10,pageNum:l.value}).then((e=>{n.value=!1;const{code:a,data:t}=e;"10000"===a&&(1===l.value?p.value=t.datas:p.value=[...p.value,...t.datas]),i.value=p.value.length>=t.total}))},m=()=>{l.value+=1,g()},I=()=>{l.value=1,g()};return N(C,(()=>{l.value=1,g()})),S((()=>{g()})),(e,t)=>{const l=s("van-list"),C=s("ProPageWrap");return d(),Y(C,{"main-class":"page-order-list"},{default:u((()=>[r("div",oe,[c(D,{active:a.value,"onUpdate:active":t[0]||(t[0]=e=>a.value=e),list:v,"small-gap":"",class:"tab"},null,8,["active"]),c(l,{class:"body",loading:n.value,finished:i.value,onLoad:m},{default:u((()=>[(d(!0),o(U,null,_(p.value,((e,a)=>(d(),Y(de,{key:a,detail:e,onClick:a=>(e=>{const{orderNo:a,saleUserId:t,tenantId:s,abbreviation:d,productCategory:o}=e;T("orderDetail",{orderNo:a,agentCode:t,tenantId:s,abbreviation:d,productCategory:o})})(e),onAfterDelete:I},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])])])),_:1})}}}),[["__scopeId","data-v-5f493360"]]);export{re as default};
