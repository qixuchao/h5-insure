import{_ as e,d as a,bU as t,as as s,ap as r,i as o,h as u,aN as l,k as n,ah as d,cc as i,j as c,l as p,o as y,c as m,a as v,b as f,e as _,u as h,w as I,v as w,p as b,q,y as N,f as g,cd as k,ce as C,ao as R,ar as E,cf as L,cg as S,ch as T,ci as A}from"./index-6dfb9eb8.js";import{c as D}from"./order-aab5172c.js";const U={class:"page-underwrite-result-wrap"},x={class:"result-content"},F={class:"result-icon"},$={class:"result-status"},j={class:"result-desc"},z={key:0,class:"operate-btn"},G={key:1,class:"operate-btn"},V={class:"dialog-content"},W=a({name:"underwriteResult"});var B=e(a({...W,setup(e){var a,W;const B={[t.SIGN_FAIL]:{resultStatus:"人工核保中",resultDesc:null==(a=s.get(`${r}_underwriteResult`))?void 0:a[t.SIGN_FAIL]},[t.UNDER_WRITE_FAIL]:{resultStatus:"核保未通过",resultDesc:null==(W=s.get(`${r}_underwriteResult`))?void 0:W[t.UNDER_WRITE_FAIL]}},Y=o(),H=u(),{orderNo:J,tenantId:K,underwriteStatus:M,productClass:O}=Y.query,P=l.Component,Q=n((()=>O===`${d.YES}`)),[X,Z]=i(!1),ee=c(),ae=c(!1),te=async()=>{if(ae.value=!0,Q.value)return H.push({path:N.orderList,query:{...Y.query}}),void(ae.value=!1);const{code:e,data:a}=await k({orderNo:J,tenantId:K});"10000"===e&&a&&(delete Y.query.orderNo,H.push({path:N.orderList,query:{...Y.query}})),ae.value=!1},se=()=>{Z(!0)},re=()=>{C({messageType:A.AGENT,orderNo:J,tenantId:K}).then((({code:e})=>{"10000"===e&&H.push({path:N.sign,query:Y.query})}))},oe=()=>{D({orderNo:J,tenantId:K}).then((({code:e,data:a})=>{"10000"===e&&(delete Y.query.orderNo,H.push({path:N.productList,query:Y.query}))}))},ue=()=>{var e;e=()=>{Z(!1),delete Y.query.questionnaireId,H.push({path:ee.value,query:Y.query})},T({orderNo:J,tenantId:K}).then((({code:a})=>{"10000"===a&&(null==e||e())}))},le=()=>{Z(!1),oe()},ne=c();return p((()=>{setTimeout((async()=>{ne.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const s=R,r=E,o=L,u=S;return y(),m("div",U,[v("div",x,[v("div",F,[f(s,{name:"wrong","font-size":"32px",color:"var(--van-primary-color)"})]),v("p",$,_(B[`${h(M)}`].resultStatus),1),v("p",j,_(B[`${h(M)}`].resultDesc),1),h(M)!==h(t).UNDER_WRITE_FAIL||h(Q)?(y(),m("div",G,[f(r,{type:"primary",disabled:h(ae),onClick:te},{default:I((()=>[w("确定")])),_:1},8,["disabled"])])):(y(),m("div",z,[f(r,{type:"primary",plain:"",onClick:se},{default:I((()=>[w("返回修改")])),_:1}),f(r,{type:"primary",onClick:re},{default:I((()=>[w("继续投保")])),_:1}),f(r,{class:"no-border",onClick:oe},{default:I((()=>[w("放弃投保")])),_:1})]))]),h(X)?(y(),b(h(P),{key:0,show:h(X),"onUpdate:show":a[1]||(a[1]=e=>q(X)?X.value=e:null),"show-cancel-button":"","confirm-button-text":"确定","confirm-button-disabled":!h(ee),"cancel-button-text":"放弃投保","close-on-click-overlay":"",title:"请选择需要修改的页面",onConfirm:ue,onCancel:le},{default:I((()=>[v("div",V,[f(u,{modelValue:h(ee),"onUpdate:modelValue":a[0]||(a[0]=e=>q(ee)?ee.value=e:null)},{default:I((()=>[f(o,{name:h(N).premiumTrial},{default:I((()=>[w("保费试算页")])),_:1},8,["name"]),f(o,{name:h(N).questionNotice},{default:I((()=>[w("健康告知页")])),_:1},8,["name"]),f(o,{name:h(N).infoCollection},{default:I((()=>[w("信息采集页")])),_:1},8,["name"])])),_:1},8,["modelValue"])])])),_:1},8,["show","confirm-button-disabled"])):g("",!0)])}}}),[["__scopeId","data-v-21c65282"]]);export{B as default};
