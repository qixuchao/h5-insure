import{_ as e,d as a,bE as t,ak as s,ah as r,i as o,h as l,aD as u,k as n,a6 as d,b$ as c,j as i,l as p,o as m,c as y,a as v,b as f,e as _,u as h,w as b,a8 as w,p as I,q,aa as N,f as k,c0 as g,c1 as C,af as E,aj as R,c2 as L,c3 as D,c4 as S,c5 as T}from"./index-c752b76c.js";import{c as A}from"./order-9f6e25eb.js";const $={class:"page-underwrite-result-wrap"},x={class:"result-content"},F={class:"result-icon"},U={class:"result-status"},j={class:"result-desc"},z={key:0,class:"operate-btn"},G={key:1,class:"operate-btn"},V={class:"dialog-content"},W=a({name:"underwriteResult"});var B=e(a({...W,setup(e){var a,W;const B={[t.SIGN_FAIL]:{resultStatus:"人工核保中",resultDesc:null==(a=s.get(`${r}_underwriteResult`))?void 0:a[t.SIGN_FAIL]},[t.UNDER_WRITE_FAIL]:{resultStatus:"核保未通过",resultDesc:null==(W=s.get(`${r}_underwriteResult`))?void 0:W[t.UNDER_WRITE_FAIL]}},Y=o(),H=l(),{orderNo:J,tenantId:K,underwriteStatus:M,productClass:O}=Y.query,P=u.Component,Q=n((()=>O===`${d.YES}`)),[X,Z]=c(!1),ee=i(),ae=i(!1),te=async()=>{if(ae.value=!0,Q.value)return H.push({path:N.orderList,query:{...Y.query}}),void(ae.value=!1);const{code:e,data:a}=await g({orderNo:J,tenantId:K});"10000"===e&&a&&(delete Y.query.orderNo,H.push({path:N.orderList,query:{...Y.query}})),ae.value=!1},se=()=>{Z(!0)},re=()=>{C({messageType:T.AGENT,orderNo:J,tenantId:K}).then((({code:e})=>{"10000"===e&&H.push({path:N.sign,query:Y.query})}))},oe=()=>{A({orderNo:J,tenantId:K}).then((({code:e,data:a})=>{"10000"===e&&(delete Y.query.orderNo,H.push({path:N.productList,query:Y.query}))}))},le=()=>{var e;e=()=>{Z(!1),H.push({path:ee.value,query:Y.query})},S({orderNo:J,tenantId:K}).then((({code:a})=>{"10000"===a&&(null==e||e())}))},ue=()=>{Z(!1),oe()},ne=i();return p((()=>{setTimeout((async()=>{ne.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const s=E,r=R,o=L,l=D;return m(),y("div",$,[v("div",x,[v("div",F,[f(s,{name:"wrong","font-size":"32px",color:"var(--van-primary-color)"})]),v("p",U,_(B[`${h(M)}`].resultStatus),1),v("p",j,_(B[`${h(M)}`].resultDesc),1),h(M)!==h(t).UNDER_WRITE_FAIL||h(Q)?(m(),y("div",G,[f(r,{type:"primary",disabled:h(ae),onClick:te},{default:b((()=>[w("确定")])),_:1},8,["disabled"])])):(m(),y("div",z,[f(r,{type:"primary",plain:"",onClick:se},{default:b((()=>[w("返回修改")])),_:1}),f(r,{type:"primary",onClick:re},{default:b((()=>[w("继续投保")])),_:1}),f(r,{class:"no-border",onClick:oe},{default:b((()=>[w("放弃投保")])),_:1})]))]),h(X)?(m(),I(h(P),{key:0,show:h(X),"onUpdate:show":a[1]||(a[1]=e=>q(X)?X.value=e:null),"show-cancel-button":"","confirm-button-text":"确定","confirm-button-disabled":!h(ee),"cancel-button-text":"放弃投保","close-on-click-overlay":"",title:"请选择需要修改的页面",onConfirm:le,onCancel:ue},{default:b((()=>[v("div",V,[f(l,{modelValue:h(ee),"onUpdate:modelValue":a[0]||(a[0]=e=>q(ee)?ee.value=e:null)},{default:b((()=>[f(o,{name:h(N).premiumTrial},{default:b((()=>[w("保费试算页")])),_:1},8,["name"]),f(o,{name:h(N).questionNotice},{default:b((()=>[w("健康告知页")])),_:1},8,["name"]),f(o,{name:h(N).infoCollection},{default:b((()=>[w("信息采集页")])),_:1},8,["name"])])),_:1},8,["modelValue"])])])),_:1},8,["show","confirm-button-disabled"])):k("",!0)])}}}),[["__scopeId","data-v-fbd70228"]]);export{B as default};
