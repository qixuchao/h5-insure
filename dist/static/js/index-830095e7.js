import{d as e,a,B as t,b as s,c as d,i as o,$ as r,f as l,cx as n,y as i,j as c,cQ as u,e as p,w as v,a7 as f,b4 as m,g as C,h as I,ar as g,aS as y,aT as b,D as N,T as h,p as k,cR as D,bJ as _,u as S,r as U,G as Y,N as T,R as L,bs as x,V as B,cw as G,a4 as P,U as j}from"./index-4c38afe3.js";import{L as E}from"./index-3f5f2eca.js";import{d as W,g as A}from"./order-888862cf.js";const R=e=>(y("data-v-09bf188a"),e=e(),b(),e),q={class:"com-order-item"},H={class:"header"},M={class:"product-name"},w={class:"status"},O={class:"info"},X={class:"info-item"},Z=R((()=>o("div",{class:"label"},"投保人",-1))),z={class:"desc"},F={class:"info-item"},J=R((()=>o("div",{class:"label"},"创建时间",-1))),Q={class:"desc"},V={class:"footer"},$={class:"fee"},K={class:"money"},ee={key:0,class:"buttons"},ae={key:1,class:"buttons"},te={key:2,class:"buttons"};var se=g(e({__name:"item",props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(e,{emit:g}){const y=e,b=a(),_=()=>{N.confirm({title:"",message:"确认要删除该订单么？",confirmButtonText:"删除"}).then((()=>{W(y.detail.id,y.detail.orderStatus).then((e=>{const{code:a,data:t}=e;"10000"===a&&(h.success("删除成功"),g("afterDelete"))}))}))},S=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n,saleChannelId:i,orderTopStatus:c}=y.detail;if((u.PENDING===c||u.PAYING===c)&&[D.ZXYS,D.BWYL,D.BWYLUP].includes(e)){const t={[D.ZXYS]:"/internet/productDetail/package",[D.BWYL]:"/internet/productDetail",[D.BWYLUP]:"/internet/guaranteeUpgrade"};return b.push({path:t[e],query:{productCode:e,saleChannelId:i,agentCode:s,tenantId:o,agencyCode:n,orderNo:a}}),!0}return!1},U=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n}=y.detail;S()||b.push({path:"orderDetail",query:{productCode:e,orderNo:a,orderId:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyCode:n}})};return(a,g)=>{const b=t;return s(),d("div",q,[o("div",H,[o("div",M,r(e.detail.goodsName),1),o("div",w,r(l(n)[e.detail.orderStatus]),1)]),o("div",O,[o("div",X,[Z,o("div",z,r(e.detail.policyHolder),1)]),o("div",F,[J,o("div",Q,r(l(i)(e.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1)])]),o("div",V,[o("div",$,[c(" 保费："),o("span",K,"￥"+r(e.detail.prem),1)]),e.detail.orderTopStatus===l(u).PENDING?(s(),d("div",ee,[p(b,{class:"button",onClick:f(_,["stop"])},{default:v((()=>[c("删除")])),_:1},8,["onClick"]),l(m).UNDERWRITING_FAILED!==e.detail.orderStatus?(s(),C(b,{key:0,class:"button primary",onClick:g[0]||(g[0]=f((e=>(()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n,saleChannelId:i,orderStatus:c,abbreviation:u}=y.detail;S()||k("orderDetail",{orderNo:a,agentCode:s,tenantId:o,abbreviation:u,productCategory:l})})()),["stop"]))},{default:v((()=>[c("去处理")])),_:1})):I("",!0)])):I("",!0),e.detail.orderTopStatus===l(u).PAYING?(s(),d("div",ae,[p(b,{class:"button primary",onClick:f(U,["stop"])},{default:v((()=>[c("去支付")])),_:1},8,["onClick"])])):I("",!0),e.detail.orderTopStatus===l(u).TIMEOUT?(s(),d("div",te,[p(b,{class:"button",onClick:f(_,["stop"])},{default:v((()=>[c("删除")])),_:1},8,["onClick"])])):I("",!0)])])}}}),[["__scopeId","data-v-09bf188a"]]);const de={class:"page-order"};var oe=g(e({__name:"index",setup(e){const t=_();a();const r=S().query,n=U({"-1":1,0:2,1:3,2:4}[r.type]||0),i=U(1),c=U(!1),u=U(!1),f=U([]),m=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"1"},{title:"已失效",status:"2"}],I=Y((()=>(f.value=[],m[n.value].status))),g=()=>{h.loading({message:"加载中...",forbidClick:!0}),c.value=!0,A({condition:{orderTopStatus:I.value},pageSize:10,pageNum:i.value}).then((e=>{c.value=!1;const{code:a,data:t}=e;"10000"===a&&t&&(1===i.value?f.value=t.datas||[]:f.value=[...f.value,...t.datas||[]]),u.value=!t||f.value.length>=(null==t?void 0:t.total)})).then((()=>{h.clear()}))},y=()=>{i.value+=1,g()},b=()=>{i.value=1,g()};return T(I,(()=>{i.value=1,g()})),L((()=>{g()})),(e,a)=>{const r=E,i=x;return s(),C(i,{"theme-vars":l(t)},{default:v((()=>[o("div",de,[p(G,{active:l(n),"onUpdate:active":a[0]||(a[0]=e=>B(n)?n.value=e:null),list:m,class:"tab"},null,8,["active"]),p(r,{class:"body",loading:l(c),finished:l(u),onLoad:y},{default:v((()=>[(s(!0),d(j,null,P(l(f),((e,a)=>(s(),C(se,{key:a,detail:e,onClick:a=>(e=>{const{orderNo:a,saleUserId:t,tenantId:s,abbreviation:d,productCategory:o}=e;k("orderDetail",{orderNo:a,agentCode:t,tenantId:s,abbreviation:d,productCategory:o})})(e),onAfterDelete:b},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-42effda0"]]);export{oe as default};
