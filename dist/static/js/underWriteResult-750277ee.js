import{_ as e,d as a,bT as t,as as s,ap as r,i as o,h as l,aN as u,k as n,ah as d,ca as c,j as i,l as p,o as m,c as y,a as v,b as f,e as _,u as b,w as h,v as w,p as I,q,y as N,f as g,cb as k,cc as C,ao as R,ar as E,cd as L,ce as T,cf as S,cg as A}from"./index-99acad35.js";import{c as D}from"./order-33eb4b4b.js";const x={class:"page-underwrite-result-wrap"},F={class:"result-content"},U={class:"result-icon"},$={class:"result-status"},j={class:"result-desc"},z={key:0,class:"operate-btn"},G={key:1,class:"operate-btn"},V={class:"dialog-content"},W=a({name:"underwriteResult"});var B=e(a({...W,setup(e){var a,W;const B={[t.SIGN_FAIL]:{resultStatus:"人工核保中",resultDesc:null==(a=s.get(`${r}_underwriteResult`))?void 0:a[t.SIGN_FAIL]},[t.UNDER_WRITE_FAIL]:{resultStatus:"核保未通过",resultDesc:null==(W=s.get(`${r}_underwriteResult`))?void 0:W[t.UNDER_WRITE_FAIL]}},Y=o(),H=l(),{orderNo:J,tenantId:K,underwriteStatus:M,productClass:O}=Y.query,P=u.Component,Q=n((()=>O===`${d.YES}`)),[X,Z]=c(!1),ee=i(),ae=i(!1),te=async()=>{if(ae.value=!0,Q.value)return H.push({path:N.orderList,query:{...Y.query}}),void(ae.value=!1);const{code:e,data:a}=await k({orderNo:J,tenantId:K});"10000"===e&&a&&(delete Y.query.orderNo,H.push({path:N.orderList,query:{...Y.query}})),ae.value=!1},se=()=>{Z(!0)},re=()=>{C({messageType:A.AGENT,orderNo:J,tenantId:K}).then((({code:e})=>{"10000"===e&&H.push({path:N.sign,query:Y.query})}))},oe=()=>{D({orderNo:J,tenantId:K}).then((({code:e,data:a})=>{"10000"===e&&(delete Y.query.orderNo,H.push({path:N.productList,query:Y.query}))}))},le=()=>{var e;e=()=>{Z(!1),H.push({path:ee.value,query:Y.query})},S({orderNo:J,tenantId:K}).then((({code:a})=>{"10000"===a&&(null==e||e())}))},ue=()=>{Z(!1),oe()},ne=i();return p((()=>{setTimeout((async()=>{ne.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const s=R,r=E,o=L,l=T;return m(),y("div",x,[v("div",F,[v("div",U,[f(s,{name:"wrong","font-size":"32px",color:"var(--van-primary-color)"})]),v("p",$,_(B[`${b(M)}`].resultStatus),1),v("p",j,_(B[`${b(M)}`].resultDesc),1),b(M)!==b(t).UNDER_WRITE_FAIL||b(Q)?(m(),y("div",G,[f(r,{type:"primary",disabled:b(ae),onClick:te},{default:h((()=>[w("确定")])),_:1},8,["disabled"])])):(m(),y("div",z,[f(r,{type:"primary",plain:"",onClick:se},{default:h((()=>[w("返回修改")])),_:1}),f(r,{type:"primary",onClick:re},{default:h((()=>[w("继续投保")])),_:1}),f(r,{class:"no-border",onClick:oe},{default:h((()=>[w("放弃投保")])),_:1})]))]),b(X)?(m(),I(b(P),{key:0,show:b(X),"onUpdate:show":a[1]||(a[1]=e=>q(X)?X.value=e:null),"show-cancel-button":"","confirm-button-text":"确定","confirm-button-disabled":!b(ee),"cancel-button-text":"放弃投保","close-on-click-overlay":"",title:"请选择需要修改的页面",onConfirm:le,onCancel:ue},{default:h((()=>[v("div",V,[f(l,{modelValue:b(ee),"onUpdate:modelValue":a[0]||(a[0]=e=>q(ee)?ee.value=e:null)},{default:h((()=>[f(o,{name:b(N).premiumTrial},{default:h((()=>[w("保费试算页")])),_:1},8,["name"]),f(o,{name:b(N).questionNotice},{default:h((()=>[w("健康告知页")])),_:1},8,["name"]),f(o,{name:b(N).infoCollection},{default:h((()=>[w("信息采集页")])),_:1},8,["name"])])),_:1},8,["modelValue"])])])),_:1},8,["show","confirm-button-disabled"])):g("",!0)])}}}),[["__scopeId","data-v-fbd70228"]]);export{B as default};
