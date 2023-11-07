import{_ as e,d as a,bz as t,aj as s,ag as r,i as o,h as n,aK as u,k as l,a6 as d,bX as c,j as i,o as p,c as m,a as y,b as f,e as _,u as b,w as v,a8 as h,m as I,p as q,f as N,bY as w,bZ as k,ae as C,ai as R,b_ as g,b$ as E,c0 as L}from"./index-92d58610.js";import{P as S,M as A}from"./constants-4b08cf92.js";import{c as D}from"./order-b666cfd4.js";const T={class:"page-underwrite-result-wrap"},$={class:"result-content"},j={class:"result-icon"},x={class:"result-status"},F={class:"result-desc"},U={key:0,class:"operate-btn"},G={key:1,class:"operate-btn"},V={class:"dialog-content"},W=a({name:"underwriteResult"});var z=e(a({...W,setup(e){var a,W;const z={[t.SIGN_FAIL]:{resultStatus:"人工核保中",resultDesc:null==(a=s.get(`${r}_underwriteResult`))?void 0:a[t.SIGN_FAIL]},[t.UNDER_WRITE_FAIL]:{resultStatus:"核保未通过",resultDesc:null==(W=s.get(`${r}_underwriteResult`))?void 0:W[t.UNDER_WRITE_FAIL]}},Y=o(),K=n(),{orderNo:M,tenantId:P,underwriteStatus:X,productClass:Z}=Y.query,B=u.Component,H=l((()=>Z===`${d.YES}`)),[J,O]=c(!1),Q=i(),ee=async()=>{if(H.value)return void K.push({path:S.orderList,query:{...Y.query}});const{code:e,data:a}=await w({orderNo:M,tenantId:P});"10000"===e&&a&&(delete Y.query.orderNo,K.push({path:S.orderList,query:{...Y.query}}))},ae=()=>{O(!0)},te=()=>{k({messageType:A.AGENT,orderNo:M,tenantId:P}).then((({code:e})=>{"10000"===e&&K.push({path:S.sign,query:Y.query})}))},se=()=>{D({orderNo:M,tenantId:P}).then((({code:e,data:a})=>{"10000"===e&&(delete Y.query.orderNo,K.push({path:S.productList,query:Y.query}))}))},re=()=>{var e;e=()=>{O(!1),K.push({path:Q.value,query:Y.query})},L({orderNo:M,tenantId:P}).then((({code:a})=>{"10000"===a&&(null==e||e())}))},oe=()=>{O(!1),se()};return(e,a)=>{const s=C,r=R,o=g,n=E;return p(),m("div",T,[y("div",$,[y("div",j,[f(s,{name:"wrong","font-size":"32px",color:"var(--van-primary-color)"})]),y("p",x,_(z[`${b(X)}`].resultStatus),1),y("p",F,_(z[`${b(X)}`].resultDesc),1),b(X)!==b(t).UNDER_WRITE_FAIL||b(H)?(p(),m("div",G,[f(r,{type:"primary",onClick:ee},{default:v((()=>[h("确定")])),_:1})])):(p(),m("div",U,[f(r,{type:"primary",plain:"",onClick:ae},{default:v((()=>[h("返回修改")])),_:1}),f(r,{type:"primary",onClick:te},{default:v((()=>[h("继续投保")])),_:1}),f(r,{class:"no-border",onClick:se},{default:v((()=>[h("放弃投保")])),_:1})]))]),b(J)?(p(),I(b(B),{key:0,show:b(J),"onUpdate:show":a[1]||(a[1]=e=>q(J)?J.value=e:null),"show-cancel-button":"","confirm-button-text":"确定","confirm-button-disabled":!b(Q),"cancel-button-text":"放弃投保","close-on-click-overlay":"",title:"请选择需要修改的页面",onConfirm:re,onCancel:oe},{default:v((()=>[y("div",V,[f(n,{modelValue:b(Q),"onUpdate:modelValue":a[0]||(a[0]=e=>q(Q)?Q.value=e:null)},{default:v((()=>[f(o,{name:b(S).premiumTrial},{default:v((()=>[h("保费试算页")])),_:1},8,["name"]),f(o,{name:b(S).questionNotice},{default:v((()=>[h("健康告知页")])),_:1},8,["name"]),f(o,{name:b(S).infoCollection},{default:v((()=>[h("信息采集页")])),_:1},8,["name"])])),_:1},8,["modelValue"])])])),_:1},8,["show","confirm-button-disabled"])):N("",!0)])}}}),[["__scopeId","data-v-af3121b8"]]);export{z as default};
