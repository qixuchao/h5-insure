import{d as e,h as a,i as r,k as t,aj as o,o as n,c as d,u as s,m as i,w as l,a8 as c,cY as p,f as u,_ as m,aa as y,a6 as h,aN as C,cv as f,cw as I,cx as g,e7 as N}from"./index-bc4609b3.js";import{c as k}from"./order-c4184ca6.js";const $={class:"operate-wrap"},S=e({name:"operateBtn"});var w=m(e({...S,props:{detail:{default:()=>({})}},emits:["handleCancel"],setup(e,{emit:m}){const S=e,w=a(),x=r(),{tenantId:F,nextPageCode:_,isShare:b}=x.query,P=t((()=>{const{orderTopStatus:e,productClassFlag:a,orderStatus:r}=S.detail;return!("-1"!==e||y.orderList!==x.path||"underWritingFailed"===r&&a===h.YES||["manualUnderWriting","offlinePayment","paymentFailed"].includes(r))})),j=t((()=>{const{policyNo:e,applicationNo:a,orderStatus:r}=S.detail;return!e&&a&&"cancel"!==r})),q=t((()=>{const{orderStatus:e}=S.detail;return["offlinePayment","manualUnderWriting","paymentFailed"].includes(e)})),v=()=>{const{orderStatus:e,orderNo:a,insurerCode:r,underwriteFlag:t,templateId:o}=S.detail;let n=y.sign;("collectInfo"===e||"underWritingFailed"===e&&t===h.NO)&&(n=y.infoCollection),w.push({path:n,query:{...x.query,tenantId:F,orderNo:a,insurerCode:r,templateId:o}})},W=()=>{const{orderNo:e,orderId:a}=S.detail;b?C.confirm({message:"撤单后将无法恢复，请您确认是否撤销本次投保"}).then((()=>{m("handleCancel")})):k({tenantId:F,orderNo:e,type:1}).then((({code:e,data:a})=>{"10000"===e&&C.confirm({message:"确认取消当前订单？"}).then((()=>{(e=>{const{holderName:a,holderGender:r,orderId:t,orderNo:o,insurerCode:n}=S.detail||{},d=a,s=`${f[r]}士`;I({shareType:0,title:`${g.cancel.title}`,desc:g.cancel.desc.replace("{name}",`${d}${s},`),url:`${window.location.href}&objectType=${e}&insurerCode=${n}&isShare=1&orderNo=${o}&orderId=${t}&nextPageCode=orderDetail`.replace(/\/orderDetail|\/order/,"/baseInsurance/long/phoneVerify"),imageUrl:N})})("holder")}))}))},z=()=>{const{orderNo:e,orderId:a,insurerCode:r}=S.detail;w.push({path:y.updateBankInfo,query:{tenantId:F,orderNo:e,orderId:a,insurerCode:r,nextPageCode:"orderDetail"}})};return(e,a)=>{const r=o;return n(),d("div",$,[s(P)?(n(),i(r,{key:0,type:"primary",size:"small",onClick:p(v,["stop"])},{default:l((()=>[c("去处理")])),_:1},8,["onClick"])):u("",!0),s(j)?(n(),i(r,{key:1,type:"primary",plain:"",size:"small",onClick:p(W,["stop"])},{default:l((()=>[c("撤单")])),_:1},8,["onClick"])):u("",!0),s(q)?(n(),i(r,{key:2,plain:"",size:"small",onClick:p(z,["stop"])},{default:l((()=>[c("银行卡修改")])),_:1},8,["onClick"])):u("",!0)])}}}),[["__scopeId","data-v-0d089db2"]]);export{w as O};
