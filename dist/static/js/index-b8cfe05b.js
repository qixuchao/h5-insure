import{E as a,d as e,a as t,c as s,y as o,f as d,z as r,g as l,v as n,j as i,i as c,w as u,bs as p,h as v,D as m,T as g,H as C,B as f,ag as I,ah as b,cA as y,u as h,r as N,K as k,Q as _,a0 as D,b as S,e as Y,a1 as U,ae as T,U as j,R as P}from"./index-000b7445.js";import{L as B}from"./index-cb429400.js";import{d as L,g as x}from"./order-da30ab85.js";import{a as W,b as A}from"./order-b20fb2b3.js";import{p as E}from"./pageJump-a98634cf.js";import"./pdfh5-008ca364.js";const G=a=>(I("data-v-5807636a"),a=a(),b(),a),H={class:"com-order-item"},q={class:"header"},M={class:"product-name"},z={class:"status"},O={class:"info"},X={class:"info-item"},Z=G((()=>d("div",{class:"label"},"投保人",-1))),w={class:"desc"},J={class:"info-item"},K=G((()=>d("div",{class:"label"},"创建时间",-1))),Q={class:"desc"},R={class:"footer"},F={class:"fee"},V={class:"money"},$={key:0,class:"buttons"},aa={key:1,class:"buttons"},ea={key:2,class:"buttons"};var ta=a(e({__name:"item",props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup(a,{emit:e}){const I=a,b=t(),h=()=>{m.confirm({title:"",message:"确认要删除该订单么？",confirmButtonText:"删除"}).then((()=>{L(I.detail.id,I.detail.orderStatus).then((a=>{const{code:t,data:s}=a;"10000"===t&&(g.success("删除成功"),e("afterDelete"))}))}))},N=()=>{const{goodsCode:a,orderNo:e,id:t,saleUserId:s,templateId:o,tenantId:d,insurerCode:r,productCategory:l,agencyId:n,saleChannelId:i,orderTopStatus:c}=I.detail;if((A.PENDING===c||A.PAYING===c)&&[y.ZXYS,y.BWYL,y.BWYLUP].includes(a)){const t={[y.ZXYS]:"/internet/productDetail/package",[y.BWYL]:"/internet/productDetail",[y.BWYLUP]:"/internet/guaranteeUpgrade"};return b.push({path:t[a],query:{productCode:a,saleChannelId:i,agentCode:s,tenantId:d,agencyCode:n,orderNo:e}}),!0}return!1},k=()=>{const{goodsCode:a,orderNo:e,id:t,saleUserId:s,templateId:o,tenantId:d,insurerCode:r,productCategory:l,agencyId:n}=I.detail;N()||b.push({path:C.payInfo,query:{productCode:a,orderNo:e,orderId:t,saleUserId:s,templateId:o,tenantId:d,insurerCode:r,productCategory:l,agencyCode:n}})};return(e,t)=>{const m=f;return s(),o("div",H,[d("div",q,[d("div",M,r(a.detail.goodsName),1),d("div",z,r(l(W)[a.detail.orderStatus]),1)]),d("div",O,[d("div",X,[Z,d("div",w,r(a.detail.policyHolder),1)]),d("div",J,[K,d("div",Q,r(l(n)(a.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss")),1)])]),d("div",R,[d("div",F,[i(" 保费："),d("span",V,"￥"+r(a.detail.prem),1)]),a.detail.orderTopStatus===l(A).PENDING?(s(),o("div",$,[c(m,{class:"button",onClick:p(h,["stop"])},{default:u((()=>[i("删除")])),_:1},8,["onClick"]),c(m,{class:"button primary",onClick:t[0]||(t[0]=p((a=>(()=>{const{goodsCode:a,orderNo:e,id:t,saleUserId:s,templateId:o,tenantId:d,insurerCode:r,productCategory:l,agencyId:n,saleChannelId:i,orderStatus:c,abbreviation:u}=I.detail;N()||E("orderDetail",{orderNo:e,agentCode:s,tenantId:d,abbreviation:u,productCategory:l})})()),["stop"]))},{default:u((()=>[i("去处理")])),_:1})])):v("",!0),a.detail.orderTopStatus===l(A).PAYING?(s(),o("div",aa,[c(m,{class:"button primary",onClick:p(k,["stop"])},{default:u((()=>[i("去支付")])),_:1},8,["onClick"])])):v("",!0),a.detail.orderTopStatus===l(A).TIMEOUT?(s(),o("div",ea,[c(m,{class:"button",onClick:p(h,["stop"])},{default:u((()=>[i("删除")])),_:1},8,["onClick"])])):v("",!0)])])}}}),[["__scopeId","data-v-5807636a"]]);const sa={class:"page-order"};var oa=a(e({__name:"index",setup(a){t();const e=h().query,r=N({"-1":1,0:2,1:3,2:4}[e.type]||0),n=N(1),i=N(!1),p=N(!1),v=N([]),m=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"1"},{title:"已失效",status:"2"}],C=k((()=>(v.value=[],m[r.value].status))),f=()=>{g.loading({message:"加载中...",forbidClick:!0}),i.value=!0,x({condition:{orderTopStatus:C.value},pageSize:10,pageNum:n.value}).then((a=>{i.value=!1;const{code:e,data:t}=a;"10000"===e&&t&&(1===n.value?v.value=t.datas||[]:v.value=[...v.value,...t.datas||[]]),p.value=!t||v.value.length>=(null==t?void 0:t.total)})).then((()=>{g.clear()}))},I=()=>{n.value+=1,f()},b=()=>{n.value=1,f()};return _(C,(()=>{n.value=1,f()})),D((()=>{f()})),(a,e)=>{const t=B,n=S("ProPageWrap");return s(),Y(n,{"main-class":"page-order-list"},{default:u((()=>[d("div",sa,[c(T,{active:l(r),"onUpdate:active":e[0]||(e[0]=a=>U(r)?r.value=a:null),list:m,class:"tab"},null,8,["active"]),c(t,{class:"body",loading:l(i),finished:l(p),onLoad:I},{default:u((()=>[(s(!0),o(P,null,j(l(v),((a,e)=>(s(),Y(ta,{key:e,detail:a,onClick:e=>(a=>{const{orderNo:e,saleUserId:t,tenantId:s,abbreviation:o,productCategory:d}=a;E("orderDetail",{orderNo:e,agentCode:t,tenantId:s,abbreviation:o,productCategory:d})})(a),onAfterDelete:b},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])])])),_:1})}}}),[["__scopeId","data-v-4930c4a4"]]);export{oa as default};
