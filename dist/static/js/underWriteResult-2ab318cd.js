import{_ as e,d as a,bB as t,aJ as s,af as l,i as r,h as u,aX as n,k as d,aB as o,bY as i,j as c,l as p,o as y,c as m,a as f,u as v,e as b,b as _,w as I,v as h,p as w,q,y as N,f as g,bZ as k,b_ as C,aI as R,b$ as E,c0 as L,c1 as S,c2 as T}from"./index-fbb8a705.js";import{c as A}from"./order-3d51aa14.js";const D={class:"page-underwrite-result-wrap"},$={class:"result-content"},F=["src"],U={class:"result-status"},x={class:"result-desc"},B={key:0,class:"operate-btn"},W={key:1,class:"operate-btn"},j={class:"dialog-content"},G=a({name:"underwriteResult"});var V=e(a({...G,setup(e){var a,G;const V={[t.SIGN_FAIL]:{resultStatus:"人工核保中",resultDesc:null==(a=s.get(`${l}_underwriteResult`))?void 0:a[t.SIGN_FAIL]},[t.UNDER_WRITE_FAIL]:{resultStatus:"核保未通过",resultDesc:null==(G=s.get(`${l}_underwriteResult`))?void 0:G[t.UNDER_WRITE_FAIL]}},z=r(),Y=u(),{orderNo:J,tenantId:X,underwriteStatus:Z,productClass:H}=z.query,K=n.Component,M=d((()=>H===`${o.YES}`)),[O,P]=i(!1),Q=c(),ee=c(!1),ae=async()=>{if(ee.value=!0,M.value)return Y.push({path:N.orderList,query:{...z.query}}),void(ee.value=!1);const{code:e,data:a}=await k({orderNo:J,tenantId:X});"10000"===e&&a&&(delete z.query.orderNo,Y.push({path:N.orderList,query:{...z.query}})),ee.value=!1},te=()=>{P(!0)},se=()=>{ee.value=!0,C({messageType:T.AGENT,orderNo:J,tenantId:X}).then((({code:e})=>{"10000"===e&&Y.push({path:N.sign,query:z.query})})).finally((()=>{ee.value=!1}))},le=()=>{ee.value=!0,A({orderNo:J,tenantId:X}).then((({code:e,data:a})=>{"10000"===e&&(delete z.query.orderNo,Y.push({path:N.productList,query:z.query}))})).finally((()=>{ee.value=!1}))},re=()=>{var e;e=()=>{P(!1),delete z.query.questionnaireId,Y.push({path:Q.value,query:z.query})},S({orderNo:J,tenantId:X}).then((({code:a})=>{"10000"===a&&(null==e||e())}))},ue=()=>{P(!1),le()},ne=c();return p((()=>{setTimeout((async()=>{ne.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const s=R,l=E,r=L;return y(),m("div",D,[f("div",$,[f("img",{class:"underWrite-img",src:v("/static/png/underwriting-fail-ce89ffcd.png")},null,8,F),f("p",U,b(V[`${v(Z)}`].resultStatus),1),f("p",x,b(V[`${v(Z)}`].resultDesc),1),v(Z)!==v(t).UNDER_WRITE_FAIL||v(M)?(y(),m("div",W,[_(s,{type:"primary",disabled:v(ee),onClick:ae},{default:I((()=>[h("确定")])),_:1},8,["disabled"])])):(y(),m("div",B,[_(s,{type:"primary",plain:"",onClick:te},{default:I((()=>[h("返回修改")])),_:1}),_(s,{type:"primary",disabled:v(ee),onClick:se},{default:I((()=>[h("继续投保")])),_:1},8,["disabled"]),_(s,{class:"no-border",disabled:v(ee),onClick:le},{default:I((()=>[h("放弃投保")])),_:1},8,["disabled"])]))]),v(O)?(y(),w(v(K),{key:0,show:v(O),"onUpdate:show":a[1]||(a[1]=e=>q(O)?O.value=e:null),"show-cancel-button":"","confirm-button-text":"确定","confirm-button-disabled":!v(Q),"cancel-button-text":"放弃投保","close-on-click-overlay":"",title:"请选择需要修改的页面",onConfirm:re,onCancel:ue},{default:I((()=>[f("div",j,[_(r,{modelValue:v(Q),"onUpdate:modelValue":a[0]||(a[0]=e=>q(Q)?Q.value=e:null)},{default:I((()=>[_(l,{name:v(N).premiumTrial},{default:I((()=>[h("保费试算页")])),_:1},8,["name"]),_(l,{name:v(N).questionNotice},{default:I((()=>[h("健康告知页")])),_:1},8,["name"]),_(l,{name:v(N).infoCollection},{default:I((()=>[h("信息采集页")])),_:1},8,["name"])])),_:1},8,["modelValue"])])])),_:1},8,["show","confirm-button-disabled"])):g("",!0)])}}}),[["__scopeId","data-v-3dc063f3"]]);export{V as default};
