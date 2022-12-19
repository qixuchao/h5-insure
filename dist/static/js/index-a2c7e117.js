import{_ as e,d as a,u as t,b as s,c as d,g as o,i as r,t as l,l as n,$ as i,f as c,w as u,k as p,j as v,n as C,a4 as g,T as m,D as I,K as f,L as y,bf as b,a as h,r as k,x as N,a7 as D,y as S,e as Y,V as _,h as U,F as T,a3 as P}from"./index-ede405b0.js";import{d as L,g as j}from"./order-727da2f8.js";import{O as B,b as W}from"./order-e3db679c.js";import"./pdfdist-66c75904.js";const q=e=>(f("data-v-b27e4180"),e=e(),y(),e),x={class:"com-order-item"},G={class:"header"},O={class:"product-name"},A={class:"company-name"},E={class:"status"},H={class:"info"},M={class:"info-item"},F=q((()=>r("div",{class:"label"},"投保人",-1))),X={class:"desc"},Z={class:"info-item"},w=q((()=>r("div",{class:"label"},"创建时间",-1))),z={class:"desc"},K={class:"footer"},V={class:"fee"},$=C(" 保费："),J={class:"money"},Q={key:0,class:"buttons"},R=C("删除"),ee=C("去处理"),ae={key:1,class:"buttons"},te=C("去支付"),se={key:2,class:"buttons"},de=C("删除");var oe=e(a({props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(e,{emit:a}){const C=e,f=t(),y=()=>{g.confirm({title:"",message:"确认要删除该订单么？",confirmButtonText:"删除"}).then((()=>{L(C.detail.id,C.detail.orderStatus).then((e=>{const{code:t,data:s}=e;"10000"===t&&(m.success("删除成功"),a("afterDelete"))}))}))},h=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n,saleChannelId:i,orderTopStatus:c}=C.detail;if((W.PENDING===c||W.PAYING===c)&&[b.ZXYS,b.BWYL,b.BWYLUP].includes(e)){const t={[b.ZXYS]:"/internet/productDetail/package",[b.BWYL]:"/internet/productDetail",[b.BWYLUP]:"/internet/guaranteeUpgrade"};return f.push({path:t[e],query:{productCode:e,saleChannelId:i,agentCode:s,tenantId:o,agencyCode:n,orderNo:a}}),!0}return!1},k=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n}=C.detail;h()||f.push({path:I.payInfo,query:{productCode:e,orderNo:a,orderId:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyCode:n}})},N=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n,saleChannelId:i,orderStatus:c}=C.detail;h()||f.push({path:I[C.detail.pageCode],query:{productCode:e,orderNo:a,orderId:t,agentCode:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyCode:n,isFromOrderList:"1"}})};return(a,t)=>{const C=s("van-button");return d(),o("div",x,[r("div",G,[r("div",O,l(e.detail.goodsName),1),r("div",A,l(e.detail.abbreviation),1),r("div",E,l(n(B)[e.detail.orderStatus]),1)]),r("div",H,[r("div",M,[F,r("div",X,l(e.detail.policyHolder),1)]),r("div",Z,[w,r("div",z,l(n(i)(e.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1)])]),r("div",K,[r("div",V,[$,r("span",J,"￥"+l(e.detail.prem),1)]),e.detail.orderTopStatus===n(W).PENDING?(d(),o("div",Q,[c(C,{class:"button",onClick:p(y,["stop"])},{default:u((()=>[R])),_:1},8,["onClick"]),c(C,{class:"button primary",onClick:p(N,["stop"])},{default:u((()=>[ee])),_:1},8,["onClick"])])):v("",!0),e.detail.orderTopStatus===n(W).PAYING?(d(),o("div",ae,[c(C,{class:"button primary",onClick:p(k,["stop"])},{default:u((()=>[te])),_:1},8,["onClick"])])):v("",!0),e.detail.orderTopStatus===n(W).TIMEOUT?(d(),o("div",se,[c(C,{class:"button",onClick:p(y,["stop"])},{default:u((()=>[de])),_:1},8,["onClick"])])):v("",!0)])])}}}),[["__scopeId","data-v-b27e4180"]]);const re={class:"page-order"};var le=e(a({setup(e){t();const a=h().query,l=k({"-1":1,0:2,1:3,2:4}[a.type]||0),n=k(1),i=k(!1),p=k(!1),v=k([]),C=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"1"},{title:"已失效",status:"2"}],g=N((()=>C[l.value].status)),I=()=>{m.loading({message:"加载中...",forbidClick:!0}),i.value=!0,j({condition:{orderTopStatus:g.value},pageSize:10,pageNum:n.value}).then((e=>{i.value=!1;const{code:a,data:t}=e;"10000"===a&&t&&(1===n.value?v.value=t.datas||[]:v.value=[...v.value,...t.datas||[]]),p.value=!t||v.value.length>=(null==t?void 0:t.total)})).then((()=>{m.clear()}))},f=()=>{n.value+=1,I()},y=()=>{n.value=1,I()};return D(g,(()=>{n.value=1,I()})),S((()=>{I()})),(e,a)=>{const t=s("van-list"),n=s("ProPageWrap");return d(),Y(n,{"main-class":"page-order-list"},{default:u((()=>[r("div",re,[c(_,{active:l.value,"onUpdate:active":a[0]||(a[0]=e=>l.value=e),list:C,"small-gap":"",class:"tab"},null,8,["active"]),c(t,{class:"body",loading:i.value,finished:p.value,onLoad:f},{default:u((()=>[(d(!0),o(T,null,U(v.value,((e,a)=>(d(),Y(oe,{key:a,detail:e,onClick:a=>(e=>{const{orderNo:a,saleUserId:t,tenantId:s,abbreviation:d,productCategory:o}=e;P("orderDetail",{orderNo:a,agentCode:t,tenantId:s,abbreviation:d,productCategory:o})})(e),onAfterDelete:y},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])])])),_:1})}}}),[["__scopeId","data-v-8c0563c0"]]);export{le as default};
