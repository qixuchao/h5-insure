import{E as e,d as a,a as t,c as s,y as d,f as o,z as r,g as l,v as n,j as i,i as c,w as u,bs as p,h as v,D as m,T as g,H as C,B as f,ag as I,ah as y,cC as b,u as h,r as N,K as k,Q as _,a0 as D,b as S,e as Y,a1 as U,ae as T,U as j,R as P}from"./index-7f4b59c5.js";import{L as B}from"./index-de62d6d2.js";import{d as L,g as x}from"./order-97ca3737.js";import{a as W,b as E}from"./order-099a036c.js";import{p as G}from"./pageJump-f8cfbb27.js";import"./pdfh5-008ca364.js";const H=e=>(I("data-v-5807636a"),e=e(),y(),e),q={class:"com-order-item"},A={class:"header"},M={class:"product-name"},z={class:"status"},O={class:"info"},X={class:"info-item"},Z=H((()=>o("div",{class:"label"},"投保人",-1))),w={class:"desc"},J={class:"info-item"},K=H((()=>o("div",{class:"label"},"创建时间",-1))),Q={class:"desc"},R={class:"footer"},F={class:"fee"},V={class:"money"},$={key:0,class:"buttons"},ee={key:1,class:"buttons"},ae={key:2,class:"buttons"};var te=e(a({__name:"item",props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(e,{emit:a}){const I=e,y=t(),h=()=>{m.confirm({title:"",message:"确认要删除该订单么？",confirmButtonText:"删除"}).then((()=>{L(I.detail.id,I.detail.orderStatus).then((e=>{const{code:t,data:s}=e;"10000"===t&&(g.success("删除成功"),a("afterDelete"))}))}))},N=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n,saleChannelId:i,orderTopStatus:c}=I.detail;if((E.PENDING===c||E.PAYING===c)&&[b.ZXYS,b.BWYL,b.BWYLUP].includes(e)){const t={[b.ZXYS]:"/internet/productDetail/package",[b.BWYL]:"/internet/productDetail",[b.BWYLUP]:"/internet/guaranteeUpgrade"};return y.push({path:t[e],query:{productCode:e,saleChannelId:i,agentCode:s,tenantId:o,agencyCode:n,orderNo:a}}),!0}return!1},k=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n}=I.detail;N()||y.push({path:C.payInfo,query:{productCode:e,orderNo:a,orderId:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyCode:n}})};return(a,t)=>{const m=f;return s(),d("div",q,[o("div",A,[o("div",M,r(e.detail.goodsName),1),o("div",z,r(l(W)[e.detail.orderStatus]),1)]),o("div",O,[o("div",X,[Z,o("div",w,r(e.detail.policyHolder),1)]),o("div",J,[K,o("div",Q,r(l(n)(e.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1)])]),o("div",R,[o("div",F,[i(" 保费："),o("span",V,"￥"+r(e.detail.prem),1)]),e.detail.orderTopStatus===l(E).PENDING?(s(),d("div",$,[c(m,{class:"button",onClick:p(h,["stop"])},{default:u((()=>[i("删除")])),_:1},8,["onClick"]),c(m,{class:"button primary",onClick:t[0]||(t[0]=p((e=>(()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n,saleChannelId:i,orderStatus:c,abbreviation:u}=I.detail;N()||G("orderDetail",{orderNo:a,agentCode:s,tenantId:o,abbreviation:u,productCategory:l})})()),["stop"]))},{default:u((()=>[i("去处理")])),_:1})])):v("",!0),e.detail.orderTopStatus===l(E).PAYING?(s(),d("div",ee,[c(m,{class:"button primary",onClick:p(k,["stop"])},{default:u((()=>[i("去支付")])),_:1},8,["onClick"])])):v("",!0),e.detail.orderTopStatus===l(E).TIMEOUT?(s(),d("div",ae,[c(m,{class:"button",onClick:p(h,["stop"])},{default:u((()=>[i("删除")])),_:1},8,["onClick"])])):v("",!0)])])}}}),[["__scopeId","data-v-5807636a"]]);const se={class:"page-order"};var de=e(a({__name:"index",setup(e){t();const a=h().query,r=N({"-1":1,0:2,1:3,2:4}[a.type]||0),n=N(1),i=N(!1),p=N(!1),v=N([]),m=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"1"},{title:"已失效",status:"2"}],C=k((()=>(v.value=[],m[r.value].status))),f=()=>{g.loading({message:"加载中...",forbidClick:!0}),i.value=!0,x({condition:{orderTopStatus:C.value},pageSize:10,pageNum:n.value}).then((e=>{i.value=!1;const{code:a,data:t}=e;"10000"===a&&t&&(1===n.value?v.value=t.datas||[]:v.value=[...v.value,...t.datas||[]]),p.value=!t||v.value.length>=(null==t?void 0:t.total)})).then((()=>{g.clear()}))},I=()=>{n.value+=1,f()},y=()=>{n.value=1,f()};return _(C,(()=>{n.value=1,f()})),D((()=>{f()})),(e,a)=>{const t=B,n=S("ProPageWrap");return s(),Y(n,{"main-class":"page-order-list"},{default:u((()=>[o("div",se,[c(T,{active:l(r),"onUpdate:active":a[0]||(a[0]=e=>U(r)?r.value=e:null),list:m,class:"tab"},null,8,["active"]),c(t,{class:"body",loading:l(i),finished:l(p),onLoad:I},{default:u((()=>[(s(!0),d(P,null,j(l(v),((e,a)=>(s(),Y(te,{key:a,detail:e,onClick:a=>(e=>{const{orderNo:a,saleUserId:t,tenantId:s,abbreviation:d,productCategory:o}=e;G("orderDetail",{orderNo:a,agentCode:t,tenantId:s,abbreviation:d,productCategory:o})})(e),onAfterDelete:y},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])])])),_:1})}}}),[["__scopeId","data-v-4930c4a4"]]);export{de as default};
