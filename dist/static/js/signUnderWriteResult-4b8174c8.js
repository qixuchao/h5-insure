import{_ as e,d as a,bU as t,as as s,ap as r,i as o,h as n,aN as u,k as l,ah as d,cb as c,j as i,l as p,o as m,c as y,a as f,b as v,e as _,u as h,w,v as I,p as q,q as N,y as b,f as g,cc as k,cd as C,ao as R,ar as E,ce as L,cf as S,cg as T,ch as A}from"./index-e2b7843f.js";import{c as D}from"./order-0a8d3add.js";const U={class:"page-underwrite-result-wrap"},x={class:"result-content"},F={class:"result-icon"},$={class:"result-status"},j={class:"result-desc"},z={key:0,class:"operate-btn"},G={key:1,class:"operate-btn"},V={class:"dialog-content"},W=a({name:"underwriteResult"});var B=e(a({...W,setup(e){var a,W;const B={[t.SIGN_FAIL]:{resultStatus:"人工核保中",resultDesc:null==(a=s.get(`${r}_underwriteResult`))?void 0:a[t.SIGN_FAIL]},[t.UNDER_WRITE_FAIL]:{resultStatus:"核保未通过",resultDesc:null==(W=s.get(`${r}_underwriteResult`))?void 0:W[t.UNDER_WRITE_FAIL]}},Y=o(),H=n(),{orderNo:J,tenantId:K,underwriteStatus:M,productClass:O}=Y.query,P=u.Component,Q=l((()=>O===`${d.YES}`)),[X,Z]=c(!1),ee=i(),ae=async()=>{if(Q.value)return void H.push({path:b.orderList,query:{...Y.query}});const{code:e,data:a}=await k({orderNo:J,tenantId:K});"10000"===e&&a&&(delete Y.query.orderNo,H.push({path:b.orderList,query:{...Y.query}}))},te=()=>{Z(!0)},se=()=>{C({messageType:A.AGENT,orderNo:J,tenantId:K}).then((({code:e})=>{"10000"===e&&H.push({path:b.sign,query:Y.query})}))},re=()=>{D({orderNo:J,tenantId:K}).then((({code:e,data:a})=>{"10000"===e&&(delete Y.query.orderNo,H.push({path:b.productList,query:Y.query}))}))},oe=()=>{var e;e=()=>{Z(!1),H.push({path:ee.value,query:Y.query})},T({orderNo:J,tenantId:K}).then((({code:a})=>{"10000"===a&&(null==e||e())}))},ne=()=>{Z(!1),re()},ue=i();return p((()=>{setTimeout((async()=>{ue.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const s=R,r=E,o=L,n=S;return m(),y("div",U,[f("div",x,[f("div",F,[v(s,{name:"wrong","font-size":"32px",color:"var(--van-primary-color)"})]),f("p",$,_(B[`${h(M)}`].resultStatus),1),f("p",j,_(B[`${h(M)}`].resultDesc),1),h(M)!==h(t).UNDER_WRITE_FAIL||h(Q)?(m(),y("div",G,[v(r,{type:"primary",onClick:ae},{default:w((()=>[I("确定")])),_:1})])):(m(),y("div",z,[v(r,{type:"primary",plain:"",onClick:te},{default:w((()=>[I("返回修改")])),_:1}),v(r,{type:"primary",onClick:se},{default:w((()=>[I("继续投保")])),_:1}),v(r,{class:"no-border",onClick:re},{default:w((()=>[I("放弃投保")])),_:1})]))]),h(X)?(m(),q(h(P),{key:0,show:h(X),"onUpdate:show":a[1]||(a[1]=e=>N(X)?X.value=e:null),"show-cancel-button":"","confirm-button-text":"确定","confirm-button-disabled":!h(ee),"cancel-button-text":"放弃投保","close-on-click-overlay":"",title:"请选择需要修改的页面",onConfirm:oe,onCancel:ne},{default:w((()=>[f("div",V,[v(n,{modelValue:h(ee),"onUpdate:modelValue":a[0]||(a[0]=e=>N(ee)?ee.value=e:null)},{default:w((()=>[v(o,{name:h(b).premiumTrial},{default:w((()=>[I("保费试算页")])),_:1},8,["name"]),v(o,{name:h(b).questionNotice},{default:w((()=>[I("健康告知页")])),_:1},8,["name"]),v(o,{name:h(b).infoCollection},{default:w((()=>[I("信息采集页")])),_:1},8,["name"])])),_:1},8,["modelValue"])])])),_:1},8,["show","confirm-button-disabled"])):g("",!0)])}}}),[["__scopeId","data-v-15c4af0a"]]);export{B as default};
