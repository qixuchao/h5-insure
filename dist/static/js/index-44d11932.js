import{d as e,a,B as t,b as s,c as d,i as o,$ as r,f as l,cE as n,y as i,j as c,cX as u,e as p,w as v,a7 as m,b4 as C,g as I,h as g,ar as f,aS as b,aT as y,D as N,T as h,p as D,cY as k,b$ as _,u as S,r as Y,G as U,N as T,R as L,bK as B,V as E,cD as G,a4 as P,U as j}from"./index-6bbc1d25.js";import{L as x}from"./index-ac59be89.js";import{d as W,g as A}from"./order-277da165.js";const q=e=>(b("data-v-09bf188a"),e=e(),y(),e),H={class:"com-order-item"},M={class:"header"},R={class:"product-name"},X={class:"status"},O={class:"info"},Z={class:"info-item"},$=q((()=>o("div",{class:"label"},"投保人",-1))),w={class:"desc"},z={class:"info-item"},F=q((()=>o("div",{class:"label"},"创建时间",-1))),K={class:"desc"},V={class:"footer"},J={class:"fee"},Q={class:"money"},ee={key:0,class:"buttons"},ae={key:1,class:"buttons"},te={key:2,class:"buttons"};var se=f(e({__name:"item",props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(e,{emit:f}){const b=e,y=a(),_=()=>{N.confirm({title:"",message:"确认要删除该订单么？",confirmButtonText:"删除"}).then((()=>{W(b.detail.id,b.detail.orderStatus).then((e=>{const{code:a,data:t}=e;"10000"===a&&(h.success("删除成功"),f("afterDelete"))}))}))},S=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n,saleChannelId:i,orderTopStatus:c}=b.detail;if((u.PENDING===c||u.PAYING===c)&&[k.ZXYS,k.BWYL,k.BWYLUP].includes(e)){const t={[k.ZXYS]:"/internet/productDetail/package",[k.BWYL]:"/internet/productDetail",[k.BWYLUP]:"/internet/guaranteeUpgrade"};return y.push({path:t[e],query:{productCode:e,saleChannelId:i,agentCode:s,tenantId:o,agencyCode:n,orderNo:a}}),!0}return!1},Y=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n}=b.detail;S()||y.push({path:"orderDetail",query:{productCode:e,orderNo:a,orderId:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyCode:n}})};return(a,f)=>{const y=t;return s(),d("div",H,[o("div",M,[o("div",R,r(e.detail.goodsName),1),o("div",X,r(l(n)[e.detail.orderStatus]),1)]),o("div",O,[o("div",Z,[$,o("div",w,r(e.detail.policyHolder),1)]),o("div",z,[F,o("div",K,r(l(i)(e.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1)])]),o("div",V,[o("div",J,[c(" 保费："),o("span",Q,"￥"+r(e.detail.prem),1)]),e.detail.orderTopStatus===l(u).PENDING?(s(),d("div",ee,[p(y,{class:"button",onClick:m(_,["stop"])},{default:v((()=>[c("删除")])),_:1},8,["onClick"]),l(C).UNDERWRITING_FAILED!==e.detail.orderStatus?(s(),I(y,{key:0,class:"button primary",onClick:f[0]||(f[0]=m((e=>(()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n,saleChannelId:i,orderStatus:c,abbreviation:u}=b.detail;S()||D("orderDetail",{orderNo:a,agentCode:s,tenantId:o,abbreviation:u,productCategory:l})})()),["stop"]))},{default:v((()=>[c("去处理")])),_:1})):g("",!0)])):g("",!0),e.detail.orderTopStatus===l(u).PAYING?(s(),d("div",ae,[p(y,{class:"button primary",onClick:m(Y,["stop"])},{default:v((()=>[c("去支付")])),_:1},8,["onClick"])])):g("",!0),e.detail.orderTopStatus===l(u).TIMEOUT?(s(),d("div",te,[p(y,{class:"button",onClick:m(_,["stop"])},{default:v((()=>[c("删除")])),_:1},8,["onClick"])])):g("",!0)])])}}}),[["__scopeId","data-v-09bf188a"]]);const de={class:"page-order"};var oe=f(e({__name:"index",setup(e){const t=_();a();const r=S().query,n=Y({"-1":1,0:2,1:3,2:4}[r.type]||0),i=Y(1),c=Y(!1),u=Y(!1),m=Y([]),C=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"1"},{title:"已失效",status:"2"}],g=U((()=>(m.value=[],C[n.value].status))),f=()=>{h.loading({message:"加载中...",forbidClick:!0}),c.value=!0,A({condition:{orderTopStatus:g.value},pageSize:10,pageNum:i.value}).then((e=>{c.value=!1;const{code:a,data:t}=e;"10000"===a&&t&&(1===i.value?m.value=t.datas||[]:m.value=[...m.value,...t.datas||[]]),u.value=!t||m.value.length>=(null==t?void 0:t.total)})).then((()=>{h.clear()}))},b=()=>{i.value+=1,f()},y=()=>{i.value=1,f()};return T(g,(()=>{i.value=1,f()})),L((()=>{f()})),(e,a)=>{const r=x,i=B;return s(),I(i,{"theme-vars":l(t)},{default:v((()=>[o("div",de,[p(G,{active:l(n),"onUpdate:active":a[0]||(a[0]=e=>E(n)?n.value=e:null),list:C,class:"tab"},null,8,["active"]),p(r,{class:"body",loading:l(c),finished:l(u),onLoad:b},{default:v((()=>[(s(!0),d(j,null,P(l(m),((e,a)=>(s(),I(se,{key:a,detail:e,onClick:a=>(e=>{const{orderNo:a,saleUserId:t,tenantId:s,abbreviation:d,productCategory:o}=e;D("orderDetail",{orderNo:a,agentCode:t,tenantId:s,abbreviation:d,productCategory:o})})(e),onAfterDelete:y},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-42effda0"]]);export{oe as default};
