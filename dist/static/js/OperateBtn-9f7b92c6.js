import{d as e,h as r,i as a,k as o,aj as t,by as d,o as n,c as s,u as l,F as i,m as c,w as p,a8 as u,cZ as m,f as y,_ as h,aa as C,a6 as f,aD as I,cx as k,cy as g,cz as N,ec as $}from"./index-1f881fdc.js";import{c as S}from"./order-83a2cb90.js";const F={class:"operate-wrap"},q=e({name:"operateBtn"});var x=h(e({...q,props:{detail:{default:()=>({})}},emits:["handleCancel"],setup(e,{emit:h}){const q=e,x=r(),_=a(),{tenantId:b,nextPageCode:j,isShare:w}=_.query,P=o((()=>"/orderRecordList"===_.path)),v=o((()=>{const{orderTopStatus:e,productClassFlag:r,orderStatus:a}=q.detail;return!("-1"!==e||C.orderList!==_.path||"underWritingFailed"===a&&r===f.YES||["manualUnderWriting","offlinePayment","paymentFailed"].includes(a))})),z=o((()=>{const{policyNo:e,applicationNo:r,orderStatus:a}=q.detail;return!e&&r&&"cancel"!==a})),D=o((()=>{const{orderStatus:e}=q.detail;return["offlinePayment","manualUnderWriting","paymentFailed"].includes(e)})),T=()=>{const{orderStatus:e,orderNo:r,insurerCode:a,underwriteFlag:o,templateId:t}=q.detail;let d=C.sign;("collectInfo"===e||"underWritingFailed"===e&&o===f.NO)&&(d=C.infoCollection),x.push({path:d,query:{..._.query,tenantId:b,orderNo:r,insurerCode:a,templateId:t}})},W=()=>{const{orderId:e,orderNo:r}=q.detail||{};x.push({path:"orderTrajectory",query:{..._.query,orderId:e,orderNo:r}})},U=()=>{const{orderNo:e,orderId:r}=q.detail;w?I.confirm({message:"撤单后将无法恢复，请您确认是否撤销本次投保"}).then((()=>{h("handleCancel")})):S({tenantId:b,orderNo:e,type:1}).then((({code:e,data:r})=>{"10000"===e&&I.confirm({message:"确认取消当前订单？"}).then((()=>{(e=>{const{holderName:r,holderGender:a,orderId:o,orderNo:t,insurerCode:d}=q.detail||{},n=r,s=`${k[a]}士`;g({shareType:0,title:`${N.cancel.title}`,desc:N.cancel.desc.replace("{name}",`${n}${s},`),url:`${window.location.href}&objectType=${e}&insurerCode=${d}&isShare=1&orderNo=${t}&orderId=${o}&nextPageCode=orderDetail`.replace(/\/orderDetail|\/order/,"/baseInsurance/long/phoneVerify"),imageUrl:$})})("holder")}))}))},B=()=>{const{orderNo:e,orderId:r,insurerCode:a}=q.detail;x.push({path:C.updateBankInfo,query:{tenantId:b,orderNo:e,orderId:r,insurerCode:a,nextPageCode:"orderDetail"}})};return(e,r)=>{const a=t,o=d;return n(),s("div",F,[l(P)?(n(),c(o,{key:1,label:"",value:"查看订单状态","is-link":"",onClick:m(W,["stop"])},null,8,["onClick"])):(n(),s(i,{key:0},[l(v)?(n(),c(a,{key:0,type:"primary",size:"small",onClick:m(T,["stop"])},{default:p((()=>[u("去处理")])),_:1},8,["onClick"])):y("",!0),l(z)?(n(),c(a,{key:1,type:"primary",plain:"",size:"small",onClick:m(U,["stop"])},{default:p((()=>[u("撤单")])),_:1},8,["onClick"])):y("",!0),l(D)?(n(),c(a,{key:2,plain:"",size:"small",onClick:m(B,["stop"])},{default:p((()=>[u("银行卡修改")])),_:1},8,["onClick"])):y("",!0)],64))])}}}),[["__scopeId","data-v-44686e4a"]]);export{x as O};
