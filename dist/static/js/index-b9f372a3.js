import{E as e,d as a,a as t,c as s,y as d,f as o,z as r,g as l,cm as n,v as i,j as c,cC as u,i as p,w as v,bs as m,h as g,D as C,T as f,H as I,B as y,ag as b,ah as h,cD as N,u as k,r as D,K as _,Q as S,a0 as Y,b as U,e as T,a1 as P,ae as j,U as B,R as L}from"./index-f446481e.js";import{L as x}from"./index-8ad72aa1.js";import{d as W,g as E}from"./order-7f1d788f.js";import{p as G}from"./pageJump-484970f7.js";import"./pdfh5-008ca364.js";const H=e=>(b("data-v-5807636a"),e=e(),h(),e),q={class:"com-order-item"},A={class:"header"},M={class:"product-name"},z={class:"status"},O={class:"info"},X={class:"info-item"},Z=H((()=>o("div",{class:"label"},"投保人",-1))),w={class:"desc"},J={class:"info-item"},K=H((()=>o("div",{class:"label"},"创建时间",-1))),Q={class:"desc"},R={class:"footer"},F={class:"fee"},V={class:"money"},$={key:0,class:"buttons"},ee={key:1,class:"buttons"},ae={key:2,class:"buttons"};var te=e(a({__name:"item",props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(e,{emit:a}){const b=e,h=t(),k=()=>{C.confirm({title:"",message:"确认要删除该订单么？",confirmButtonText:"删除"}).then((()=>{W(b.detail.id,b.detail.orderStatus).then((e=>{const{code:t,data:s}=e;"10000"===t&&(f.success("删除成功"),a("afterDelete"))}))}))},D=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n,saleChannelId:i,orderTopStatus:c}=b.detail;if((u.PENDING===c||u.PAYING===c)&&[N.ZXYS,N.BWYL,N.BWYLUP].includes(e)){const t={[N.ZXYS]:"/internet/productDetail/package",[N.BWYL]:"/internet/productDetail",[N.BWYLUP]:"/internet/guaranteeUpgrade"};return h.push({path:t[e],query:{productCode:e,saleChannelId:i,agentCode:s,tenantId:o,agencyCode:n,orderNo:a}}),!0}return!1},_=()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n}=b.detail;D()||h.push({path:I.payInfo,query:{productCode:e,orderNo:a,orderId:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyCode:n}})};return(a,t)=>{const C=y;return s(),d("div",q,[o("div",A,[o("div",M,r(e.detail.goodsName),1),o("div",z,r(l(n)[e.detail.orderStatus]),1)]),o("div",O,[o("div",X,[Z,o("div",w,r(e.detail.policyHolder),1)]),o("div",J,[K,o("div",Q,r(l(i)(e.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1)])]),o("div",R,[o("div",F,[c(" 保费："),o("span",V,"￥"+r(e.detail.prem),1)]),e.detail.orderTopStatus===l(u).PENDING?(s(),d("div",$,[p(C,{class:"button",onClick:m(k,["stop"])},{default:v((()=>[c("删除")])),_:1},8,["onClick"]),p(C,{class:"button primary",onClick:t[0]||(t[0]=m((e=>(()=>{const{goodsCode:e,orderNo:a,id:t,saleUserId:s,templateId:d,tenantId:o,insurerCode:r,productCategory:l,agencyId:n,saleChannelId:i,orderStatus:c,abbreviation:u}=b.detail;D()||G("orderDetail",{orderNo:a,agentCode:s,tenantId:o,abbreviation:u,productCategory:l})})()),["stop"]))},{default:v((()=>[c("去处理")])),_:1})])):g("",!0),e.detail.orderTopStatus===l(u).PAYING?(s(),d("div",ee,[p(C,{class:"button primary",onClick:m(_,["stop"])},{default:v((()=>[c("去支付")])),_:1},8,["onClick"])])):g("",!0),e.detail.orderTopStatus===l(u).TIMEOUT?(s(),d("div",ae,[p(C,{class:"button",onClick:m(k,["stop"])},{default:v((()=>[c("删除")])),_:1},8,["onClick"])])):g("",!0)])])}}}),[["__scopeId","data-v-5807636a"]]);const se={class:"page-order"};var de=e(a({__name:"index",setup(e){t();const a=k().query,r=D({"-1":1,0:2,1:3,2:4}[a.type]||0),n=D(1),i=D(!1),c=D(!1),u=D([]),m=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"1"},{title:"已失效",status:"2"}],g=_((()=>(u.value=[],m[r.value].status))),C=()=>{f.loading({message:"加载中...",forbidClick:!0}),i.value=!0,E({condition:{orderTopStatus:g.value},pageSize:10,pageNum:n.value}).then((e=>{i.value=!1;const{code:a,data:t}=e;"10000"===a&&t&&(1===n.value?u.value=t.datas||[]:u.value=[...u.value,...t.datas||[]]),c.value=!t||u.value.length>=(null==t?void 0:t.total)})).then((()=>{f.clear()}))},I=()=>{n.value+=1,C()},y=()=>{n.value=1,C()};return S(g,(()=>{n.value=1,C()})),Y((()=>{C()})),(e,a)=>{const t=x,n=U("ProPageWrap");return s(),T(n,{"main-class":"page-order-list"},{default:v((()=>[o("div",se,[p(j,{active:l(r),"onUpdate:active":a[0]||(a[0]=e=>P(r)?r.value=e:null),list:m,class:"tab"},null,8,["active"]),p(t,{class:"body",loading:l(i),finished:l(c),onLoad:I},{default:v((()=>[(s(!0),d(L,null,B(l(u),((e,a)=>(s(),T(te,{key:a,detail:e,onClick:a=>(e=>{const{orderNo:a,saleUserId:t,tenantId:s,abbreviation:d,productCategory:o}=e;G("orderDetail",{orderNo:a,agentCode:t,tenantId:s,abbreviation:d,productCategory:o})})(e),onAfterDelete:y},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])])])),_:1})}}}),[["__scopeId","data-v-4930c4a4"]]);export{de as default};
