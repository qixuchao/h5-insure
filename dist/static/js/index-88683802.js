import{a6 as e,d as a,a as t,b as s,c as d,i as o,Q as r,f as l,cr as n,y as i,j as c,cK as u,e as p,w as v,bA as m,h as f,D as C,T as g,p as I,B as y,aj as b,ak as h,cL as N,bQ as k,u as D,r as _,G as S,L as Y,X as U,aU as T,g as L,Z as j,ah as B,N as P,M as x}from"./index-779cecf9.js";import{L as G}from"./index-3a318d89.js";import{d as A,g as M}from"./order-495b7228.js";import"./pdfh5-008ca364.js";const W=e=>(b("data-v-7faf90ea"),e=e(),h(),e),q={class:"com-order-item"},E={class:"header"},H={class:"product-name"},X={class:"status"},Z={class:"info"},O={class:"info-item"},Q=W((()=>o("div",{class:"label"},"投保人",-1))),w={class:"desc"},z={class:"info-item"},K=W((()=>o("div",{class:"label"},"创建时间",-1))),F={class:"desc"},J={class:"footer"},R={class:"fee"},V={class:"money"},$={key:0,class:"buttons"},ee={key:1,class:"buttons"},ae={key:2,class:"buttons"};var te=e(a({__name:"item",props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(e,{emit:a}){const b=e,h=t(),k=()=>{C.confirm({title:"",message:"确认要删除该订单么？",confirmButtonText:"删除"}).then((()=>{A(b.detail.id,b.detail.orderStatus).then((e=>{const{code:t,data:s}=e;"10000"===t&&(g.success("删除成功"),a("afterDelete"))}))}))},D=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n,saleChannelId:i,orderTopStatus:c}=b.detail;if((u.PENDING===c||u.PAYING===c)&&[N.ZXYS,N.BWYL,N.BWYLUP].includes(e)){const t={[N.ZXYS]:"/internet/productDetail/package",[N.BWYL]:"/internet/productDetail",[N.BWYLUP]:"/internet/guaranteeUpgrade"};return h.push({path:t[e],query:{productCode:e,saleChannelId:i,agentCode:s,tenantId:o,agencyCode:n,orderNo:a}}),!0}return!1},_=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n}=b.detail;D()||h.push({path:"orderDetail",query:{productCode:e,orderNo:a,orderId:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyCode:n}})};return(a,t)=>{const C=y;return s(),d("div",q,[o("div",E,[o("div",H,r(e.detail.goodsName),1),o("div",X,r(l(n)[e.detail.orderStatus]),1)]),o("div",Z,[o("div",O,[Q,o("div",w,r(e.detail.policyHolder),1)]),o("div",z,[K,o("div",F,r(l(i)(e.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1)])]),o("div",J,[o("div",R,[c(" 保费："),o("span",V,"￥"+r(e.detail.prem),1)]),e.detail.orderTopStatus===l(u).PENDING?(s(),d("div",$,[p(C,{class:"button",onClick:m(k,["stop"])},{default:v((()=>[c("删除")])),_:1},8,["onClick"]),p(C,{class:"button primary",onClick:t[0]||(t[0]=m((e=>(()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n,saleChannelId:i,orderStatus:c,abbreviation:u}=b.detail;D()||I("orderDetail",{orderNo:a,agentCode:s,tenantId:o,abbreviation:u,productCategory:l})})()),["stop"]))},{default:v((()=>[c("去处理")])),_:1})])):f("",!0),e.detail.orderTopStatus===l(u).PAYING?(s(),d("div",ee,[p(C,{class:"button primary",onClick:m(_,["stop"])},{default:v((()=>[c("去支付")])),_:1},8,["onClick"])])):f("",!0),e.detail.orderTopStatus===l(u).TIMEOUT?(s(),d("div",ae,[p(C,{class:"button",onClick:m(k,["stop"])},{default:v((()=>[c("删除")])),_:1},8,["onClick"])])):f("",!0)])])}}}),[["__scopeId","data-v-7faf90ea"]]);const se={class:"page-order"};var de=e(a({__name:"index",setup(e){const a=k();t();const r=D().query,n=_({"-1":1,0:2,1:3,2:4}[r.type]||0),i=_(1),c=_(!1),u=_(!1),m=_([]),f=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"1"},{title:"已失效",status:"2"}],C=S((()=>(m.value=[],f[n.value].status))),y=()=>{g.loading({message:"加载中...",forbidClick:!0}),c.value=!0,M({condition:{orderTopStatus:C.value},pageSize:10,pageNum:i.value}).then((e=>{c.value=!1;const{code:a,data:t}=e;"10000"===a&&t&&(1===i.value?m.value=t.datas||[]:m.value=[...m.value,...t.datas||[]]),u.value=!t||m.value.length>=(null==t?void 0:t.total)})).then((()=>{g.clear()}))},b=()=>{i.value+=1,y()},h=()=>{i.value=1,y()};return Y(C,(()=>{i.value=1,y()})),U((()=>{y()})),(e,t)=>{const r=G,i=T;return s(),L(i,{"theme-vars":l(a)},{default:v((()=>[o("div",se,[p(B,{active:l(n),"onUpdate:active":t[0]||(t[0]=e=>j(n)?n.value=e:null),list:f,class:"tab"},null,8,["active"]),p(r,{class:"body",loading:l(c),finished:l(u),onLoad:b},{default:v((()=>[(s(!0),d(x,null,P(l(m),((e,a)=>(s(),L(te,{key:a,detail:e,onClick:a=>(e=>{const{orderNo:a,saleUserId:t,tenantId:s,abbreviation:d,productCategory:o}=e;I("orderDetail",{orderNo:a,agentCode:t,tenantId:s,abbreviation:d,productCategory:o})})(e),onAfterDelete:h},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-42effda0"]]);export{de as default};
