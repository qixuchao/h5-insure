import{_ as e,d as a,bU as t,b4 as s,af as l,i as r,h as u,bi as n,k as d,aY as o,ce as i,j as c,l as p,o as y,c as f,a as m,u as v,e as b,b as _,w as h,v as I,p as w,q,y as g,f as N,cf as k,cg as C,b3 as R,ch as E,ci as L,cj as S,ck as T}from"./index-77635e62.js";import{c as A}from"./order-fde2b234.js";const D={class:"page-underwrite-result-wrap"},U={class:"result-content"},F=["src"],$={class:"result-status"},j={class:"result-desc"},x={key:0,class:"operate-btn"},W={key:1,class:"operate-btn"},G={class:"dialog-content"},V=a({name:"underwriteResult"});var z=e(a({...V,setup(e){var a,V;const z={[t.SIGN_FAIL]:{resultStatus:"人工核保中",resultDesc:null==(a=s.get(`${l}_underwriteResult`))?void 0:a[t.SIGN_FAIL]},[t.UNDER_WRITE_FAIL]:{resultStatus:"核保未通过",resultDesc:null==(V=s.get(`${l}_underwriteResult`))?void 0:V[t.UNDER_WRITE_FAIL]}},B=r(),Y=u(),{orderNo:H,tenantId:J,underwriteStatus:K,productClass:M}=B.query,O=n.Component,P=d((()=>M===`${o.YES}`)),[Q,X]=i(!1),Z=c(),ee=c(!1),ae=async()=>{if(ee.value=!0,P.value)return Y.push({path:g.orderList,query:{...B.query}}),void(ee.value=!1);const{code:e,data:a}=await k({orderNo:H,tenantId:J});"10000"===e&&a&&(delete B.query.orderNo,Y.push({path:g.orderList,query:{...B.query}})),ee.value=!1},te=()=>{X(!0)},se=()=>{ee.value=!0,C({messageType:T.AGENT,orderNo:H,tenantId:J}).then((({code:e})=>{"10000"===e&&Y.push({path:g.sign,query:B.query})})).finally((()=>{ee.value=!1}))},le=()=>{ee.value=!0,A({orderNo:H,tenantId:J}).then((({code:e,data:a})=>{"10000"===e&&(delete B.query.orderNo,Y.push({path:g.productList,query:B.query}))})).finally((()=>{ee.value=!1}))},re=()=>{var e;e=()=>{X(!1),delete B.query.questionnaireId,Y.push({path:Z.value,query:B.query})},S({orderNo:H,tenantId:J}).then((({code:a})=>{"10000"===a&&(null==e||e())}))},ue=()=>{X(!1),le()},ne=c();return p((()=>{setTimeout((async()=>{ne.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const s=R,l=E,r=L;return y(),f("div",D,[m("div",U,[m("img",{class:"underWrite-img",src:v("/static/png/underwriting-fail-ce89ffcd.png")},null,8,F),m("p",$,b(z[`${v(K)}`].resultStatus),1),m("p",j,b(z[`${v(K)}`].resultDesc),1),v(K)!==v(t).UNDER_WRITE_FAIL||v(P)?(y(),f("div",W,[_(s,{type:"primary",disabled:v(ee),onClick:ae},{default:h((()=>[I("确定")])),_:1},8,["disabled"])])):(y(),f("div",x,[_(s,{type:"primary",plain:"",onClick:te},{default:h((()=>[I("返回修改")])),_:1}),_(s,{type:"primary",disabled:v(ee),onClick:se},{default:h((()=>[I("继续投保")])),_:1},8,["disabled"]),_(s,{class:"no-border",disabled:v(ee),onClick:le},{default:h((()=>[I("放弃投保")])),_:1},8,["disabled"])]))]),v(Q)?(y(),w(v(O),{key:0,show:v(Q),"onUpdate:show":a[1]||(a[1]=e=>q(Q)?Q.value=e:null),"show-cancel-button":"","confirm-button-text":"确定","confirm-button-disabled":!v(Z),"cancel-button-text":"放弃投保","close-on-click-overlay":"",title:"请选择需要修改的页面",onConfirm:re,onCancel:ue},{default:h((()=>[m("div",G,[_(r,{modelValue:v(Z),"onUpdate:modelValue":a[0]||(a[0]=e=>q(Z)?Z.value=e:null)},{default:h((()=>[_(l,{name:v(g).premiumTrial},{default:h((()=>[I("保费试算页")])),_:1},8,["name"]),_(l,{name:v(g).questionNotice},{default:h((()=>[I("健康告知页")])),_:1},8,["name"]),_(l,{name:v(g).infoCollection},{default:h((()=>[I("信息采集页")])),_:1},8,["name"])])),_:1},8,["modelValue"])])])),_:1},8,["show","confirm-button-disabled"])):N("",!0)])}}}),[["__scopeId","data-v-3dc063f3"]]);export{z as default};
