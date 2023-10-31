import{_ as e,d as a,bz as t,aj as s,ag as r,i as o,h as n,aJ as u,k as l,a6 as d,bX as i,j as c,o as p,c as m,a as f,b as y,e as _,u as b,w as v,a8 as h,m as I,p as q,f as N,bY as w,ae as k,ai as C,bZ as R,b_ as g,b$ as E}from"./index-01270b83.js";import{P as L,M as S}from"./constants-4b08cf92.js";import{c as j}from"./order-962ffae8.js";import{o as A}from"./verify-7e03b77b.js";const D={class:"page-underwrite-result-wrap"},T={class:"result-content"},$={class:"result-icon"},x={class:"result-status"},F={class:"result-desc"},U={key:0,class:"operate-btn"},G={key:1,class:"operate-btn"},V={class:"dialog-content"},W=a({name:"underwriteResult"});var z=e(a({...W,setup(e){var a,W;const z={[t.SIGN_FAIL]:{resultStatus:"人工核保中",resultDesc:null==(a=s.get(`${r}_underwriteResult`))?void 0:a[t.SIGN_FAIL]},[t.UNDER_WRITE_FAIL]:{resultStatus:"核保未通过",resultDesc:null==(W=s.get(`${r}_underwriteResult`))?void 0:W[t.UNDER_WRITE_FAIL]}},Y=o(),J=n(),{orderNo:M,tenantId:P,underwriteStatus:X,productClass:Z}=Y.query,B=u.Component,H=l((()=>Z===`${d.YES}`)),[K,O]=i(!1),Q=c(),ee=async()=>{if(H.value)return void J.push({path:L.orderList,query:{...Y.query}});const{code:e,data:a}=await A({orderNo:M,tenantId:P});"10000"===e&&a&&(delete Y.query.orderNo,J.push({path:L.orderList,query:{...Y.query}}))},ae=()=>{O(!0)},te=()=>{w({messageType:S.AGENT,orderNo:M,tenantId:P}).then((({code:e})=>{"10000"===e&&J.push({path:L.sign,query:Y.query})}))},se=()=>{j({orderNo:M,tenantId:P}).then((({code:e,data:a})=>{"10000"===e&&(delete Y.query.orderNo,J.push({path:L.productList,query:Y.query}))}))},re=()=>{var e;e=()=>{O(!1),J.push({path:Q.value,query:Y.query})},E({orderNo:M,tenantId:P}).then((({code:a})=>{"10000"===a&&(null==e||e())}))},oe=()=>{O(!1),se()};return(e,a)=>{const s=k,r=C,o=R,n=g;return p(),m("div",D,[f("div",T,[f("div",$,[y(s,{name:"wrong","font-size":"32px",color:"var(--van-primary-color)"})]),f("p",x,_(z[`${b(X)}`].resultStatus),1),f("p",F,_(z[`${b(X)}`].resultDesc),1),b(X)!==b(t).UNDER_WRITE_FAIL||b(H)?(p(),m("div",G,[y(r,{type:"primary",onClick:ee},{default:v((()=>[h("确定")])),_:1})])):(p(),m("div",U,[y(r,{type:"primary",plain:"",onClick:ae},{default:v((()=>[h("返回修改")])),_:1}),y(r,{type:"primary",onClick:te},{default:v((()=>[h("继续投保")])),_:1}),y(r,{class:"no-border",onClick:se},{default:v((()=>[h("放弃投保")])),_:1})]))]),b(K)?(p(),I(b(B),{key:0,show:b(K),"onUpdate:show":a[1]||(a[1]=e=>q(K)?K.value=e:null),"show-cancel-button":"","confirm-button-text":"确定","confirm-button-disabled":!b(Q),"cancel-button-text":"放弃投保","close-on-click-overlay":"",title:"请选择需要修改的页面",onConfirm:re,onCancel:oe},{default:v((()=>[f("div",V,[y(n,{modelValue:b(Q),"onUpdate:modelValue":a[0]||(a[0]=e=>q(Q)?Q.value=e:null)},{default:v((()=>[y(o,{name:b(L).premiumTrial},{default:v((()=>[h("保费试算页")])),_:1},8,["name"]),y(o,{name:b(L).questionNotice},{default:v((()=>[h("健康告知页")])),_:1},8,["name"]),y(o,{name:b(L).infoCollection},{default:v((()=>[h("信息采集页")])),_:1},8,["name"])])),_:1},8,["modelValue"])])])),_:1},8,["show","confirm-button-disabled"])):N("",!0)])}}}),[["__scopeId","data-v-af3121b8"]]);export{z as default};
