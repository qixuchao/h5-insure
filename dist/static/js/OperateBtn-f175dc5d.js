import{d as e,h as a,i as o,k as r,ag as t,o as s,c as n,u as d,m as i,w as l,a8 as c,cD as p,f as u,_ as m,bV as h,aI as y,co as f,cp as I,cq as C}from"./index-e476314a.js";import{P as g,M as N}from"./constants-4b08cf92.js";import{c as k}from"./order-cdb06d16.js";const S={class:"operate-wrap"},$=e({name:"operateBtn"});var v=m(e({...$,props:{detail:{default:()=>({})}},emits:["handleCancel"],setup(e,{emit:m}){const $=e,v=a(),x=o(),{tenantId:T,nextPageCode:_,isShare:q}=x.query,D=r((()=>{const{orderTopStatus:e}=$.detail;return"-1"===e&&g.orderList===x.path})),P=r((()=>{const{policyNo:e,applicationNo:a,orderStatus:o}=$.detail;return!e&&a&&"cancel"!==o})),b=r((()=>{const{orderStatus:e}=$.detail;return"offlinePayment"===e})),w=()=>{const{orderStatus:e,orderNo:a,insurerCode:o}=$.detail;let r=g.sign;"collectInfo"===e&&(r=g.infoCollection),h({messageType:N.AGENT,orderNo:a,tenantId:T}).then((({code:e})=>{"10000"===e&&v.push({path:r,query:{...x.query,tenantId:T,orderNo:a,insurerCode:o}})}))},z=()=>{const{orderNo:e,orderId:a}=$.detail;q?y.confirm({message:"撤单后将无法恢复，请您确认是否撤销本次投保"}).then((()=>{m("handleCancel")})):k({tenantId:T,orderNo:e,type:1}).then((({code:e,data:a})=>{"10000"===e&&y.confirm({message:"确认取消当前订单？"}).then((()=>{(e=>{const{holderName:a,holderGender:o,orderId:r,orderNo:t}=$.detail||{},s=a,n=`${f[o]}士`;I({shareType:0,title:`${C.cancel.title}`,desc:C.cancel.desc.replace("{name}",`${s}${n},`),url:`${window.location.href}&objectType=${e}&isShare=1&orderNo=${t}&orderId=${r}&nextPageCode=orderDetail`.replace(/\/orderDetail|\/order/,"/baseInsurance/long/phoneVerify"),imageUrl:"https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/lian_logo.png?OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Expires=1697288114&Signature=S87PMeDRxltLovmmHVTeiHoew1c%3D"})})("holder")}))}))},j=()=>{const{orderNo:e,orderId:a}=$.detail;v.push({path:g.updateBankInfo,query:{tenantId:T,orderNo:e,orderId:a,nextPageCode:"orderDetail"}})};return(e,a)=>{const o=t;return s(),n("div",S,[d(D)?(s(),i(o,{key:0,type:"primary",size:"small",onClick:p(w,["stop"])},{default:l((()=>[c("去处理")])),_:1},8,["onClick"])):u("",!0),d(P)?(s(),i(o,{key:1,type:"primary",plain:"",size:"small",onClick:p(z,["stop"])},{default:l((()=>[c("撤单")])),_:1},8,["onClick"])):u("",!0),d(b)?(s(),i(o,{key:2,size:"small",onClick:p(j,["stop"])},{default:l((()=>[c("银行卡修改")])),_:1},8,["onClick"])):u("",!0)])}}}),[["__scopeId","data-v-46987e50"]]);export{v as O};
