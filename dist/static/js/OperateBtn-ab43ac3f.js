import{d as e,h as r,i as a,k as t,by as o,o as n,c as d,u as s,F as i,p as l,w as c,v as p,cS as u,f as m,_ as y,y as h,aB as f,aX as C,aI as I,T as k,e0 as N,co as g,cr as B,cq as z,bP as S,ds as F}from"./index-1a2f17f4.js";import{c as T}from"./order-981edcad.js";const q={class:"operate-wrap"},w=e({name:"operateBtn"});var _=y(e({...w,props:{detail:{default:()=>({})}},emits:["handleCancel","refresh-order"],setup(e,{emit:y}){const w=e,_=r(),v=a(),{tenantId:x,nextPageCode:b,isShare:P,operateType:$}=v.query,j=t((()=>"/orderRecordList"===v.path)),D=t((()=>{const{showRepayButton:e}=w.detail;return h.orderList===v.path&&e===f.YES})),E=t((()=>{const{orderTopStatus:e,productClassFlag:r,orderStatus:a}=w.detail;return!("-1"!==e||h.orderList!==v.path||"underWritingFailed"===a&&r===f.YES||["manualUnderWriting","offlinePayment","paymentFailed"].includes(a))})),L=t((()=>{const{showCancelButton:e}=w.detail;return e===f.YES})),W=t((()=>{const{orderStatus:e}=w.detail;return!$&&["offlinePayment","manualUnderWriting","paymentFailed"].includes(e)})),Y=t((()=>{const{showDeleteButton:e}=w.detail;return e===f.YES})),O=()=>{const{orderStatus:e,orderNo:r,insurerCode:a,underwriteFlag:t,templateId:o,iseeBizNo:n}=w.detail;let d=h.sign;("collectInfo"===e||"underWritingFailed"===e&&t===f.NO)&&(d=h.infoCollection),_.push({path:d,query:{...v.query,tenantId:x,orderNo:r,insurerCode:a,templateId:o,iseeBizNo:n}})},U=()=>{const{orderNo:e}=w.detail||{},r=k.loading({message:"加载中...",duration:0});N({tenantId:x,orderNo:e}).then((({code:e,data:r})=>{"10000"===e&&y("refresh-order")})).finally((()=>{r.clear()}))},R=()=>{const{orderId:e,orderNo:r}=w.detail||{};_.push({path:"orderTrajectory",query:{...v.query,orderId:e,orderNo:r}})},G=()=>{const{orderNo:e,orderId:r}=w.detail;P?C.confirm({message:"撤单后将无法恢复，请您确认是否撤销本次投保"}).then((()=>{y("handleCancel")})):T({tenantId:x,orderNo:e,type:1,cancelFlag:1}).then((({code:e,data:r})=>{"10000"===e&&C.confirm({message:"确认取消当前订单？"}).then((()=>{(e=>{var r;const{holderName:a,holderGender:t,orderId:o,orderNo:n,insurerCode:d,iseeBizNo:s,templateId:i}=w.detail||{},l=a,c=`${g[t]}士`,p={...v.query,objectType:e,insurerCode:d,templateId:i,isShare:1,orderNo:n,iseeBizNo:s,orderId:o,nextPageCode:"orderDetail",operateType:"returnOrder"};B({shareType:0,title:`${z.cancel.title}`,desc:z.cancel.desc.replace("{name}",`${l}${c}`),url:`${null==(r=window.location.href.split("?"))?void 0:r[0]}?${S.stringify(p)}`.replace(/\/orderDetail|\/order/,"/baseInsurance/long/phoneVerify"),imageUrl:F})})("holder")}))}))},V=()=>{const{orderNo:e,orderId:r}=w.detail;h.orderList!==v.path&&C.confirm({message:"保单取消后不可恢复，是否确认？",confirmButtonText:"是",cancelButtonText:"否"}).then((()=>{T({tenantId:x,orderNo:e,cancelFlag:2}).then((({code:e,data:r})=>{"10000"===e&&_.back()}))}))},X=()=>{const{orderNo:e,orderId:r,insurerCode:a,iseeBizNo:t}=w.detail;_.push({path:h.updateBankInfo,query:{tenantId:x,orderNo:e,orderId:r,insurerCode:a,nextPageCode:"orderDetail",iseeBizNo:t}})};return(e,r)=>{const a=I,t=o;return n(),d("div",q,[s(j)?(n(),l(t,{key:1,label:"",value:"查看订单状态","is-link":"",onClick:u(R,["stop"])},null,8,["onClick"])):(n(),d(i,{key:0},[s(D)?(n(),l(a,{key:0,type:"primary",size:"small",onClick:u(U,["stop"])},{default:c((()=>[p("去支付")])),_:1},8,["onClick"])):m("",!0),s(E)?(n(),l(a,{key:1,type:"primary",size:"small",onClick:u(O,["stop"])},{default:c((()=>[p("去处理")])),_:1},8,["onClick"])):m("",!0),s(L)?(n(),l(a,{key:2,type:"primary",plain:"",size:"small",onClick:u(G,["stop"])},{default:c((()=>[p("撤单")])),_:1},8,["onClick"])):m("",!0),s(W)?(n(),l(a,{key:3,plain:"",size:"small",onClick:u(X,["stop"])},{default:c((()=>[p("银行卡修改")])),_:1},8,["onClick"])):m("",!0),s(Y)?(n(),l(a,{key:4,plain:"",size:"small",onClick:V},{default:c((()=>[p("取消订单")])),_:1})):m("",!0)],64))])}}}),[["__scopeId","data-v-20f0c529"]]);export{_ as O};
