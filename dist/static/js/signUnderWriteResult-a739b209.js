import{_ as e,d as a,bT as t,b4 as s,af as r,i as n,h as u,bi as o,k as l,aY as d,cd as i,j as c,l as p,o as m,c as y,a as _,u as f,e as h,b as v,w,v as I,p as b,q as g,y as q,f as N,ce as k,cf as C,b3 as R,cg as E,ch as L,ci as T,cj as S}from"./index-169b3a9c.js";import{c as A}from"./order-8134775a.js";const D={class:"page-underwrite-result-wrap"},F={class:"result-content"},U=["src"],$={class:"result-status"},j={class:"result-desc"},x={key:0,class:"operate-btn"},W={key:1,class:"operate-btn"},G={class:"dialog-content"},V=a({name:"underwriteResult"});var z=e(a({...V,setup(e){var a,V;const z={[t.SIGN_FAIL]:{resultStatus:"人工核保中",resultDesc:null==(a=s.get(`${r}_underwriteResult`))?void 0:a[t.SIGN_FAIL]},[t.UNDER_WRITE_FAIL]:{resultStatus:"核保未通过",resultDesc:null==(V=s.get(`${r}_underwriteResult`))?void 0:V[t.UNDER_WRITE_FAIL]}},B=n(),Y=u(),{orderNo:H,tenantId:J,underwriteStatus:K,productClass:M}=B.query,O=o.Component,P=l((()=>M===`${d.YES}`)),[Q,X]=i(!1),Z=c(),ee=async()=>{if(P.value)return void Y.push({path:q.orderList,query:{...B.query}});const{code:e,data:a}=await k({orderNo:H,tenantId:J});"10000"===e&&a&&(delete B.query.orderNo,Y.push({path:q.orderList,query:{...B.query}}))},ae=()=>{X(!0)},te=()=>{C({messageType:S.AGENT,orderNo:H,tenantId:J}).then((({code:e})=>{"10000"===e&&Y.push({path:q.sign,query:B.query})}))},se=()=>{A({orderNo:H,tenantId:J}).then((({code:e,data:a})=>{"10000"===e&&(delete B.query.orderNo,Y.push({path:q.productList,query:B.query}))}))},re=()=>{var e;e=()=>{X(!1),Y.push({path:Z.value,query:B.query})},T({orderNo:H,tenantId:J}).then((({code:a})=>{"10000"===a&&(null==e||e())}))},ne=()=>{X(!1),se()},ue=c();return p((()=>{setTimeout((async()=>{ue.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const s=R,r=E,n=L;return m(),y("div",D,[_("div",F,[_("img",{class:"underWrite-img",src:f("/static/png/underwriting-sign-3be7d12d.png")},null,8,U),_("p",$,h(z[`${f(K)}`].resultStatus),1),_("p",j,h(z[`${f(K)}`].resultDesc),1),f(K)!==f(t).UNDER_WRITE_FAIL||f(P)?(m(),y("div",W,[v(s,{type:"primary",onClick:ee},{default:w((()=>[I("确定")])),_:1})])):(m(),y("div",x,[v(s,{type:"primary",plain:"",onClick:ae},{default:w((()=>[I("返回修改")])),_:1}),v(s,{type:"primary",onClick:te},{default:w((()=>[I("继续投保")])),_:1}),v(s,{class:"no-border",onClick:se},{default:w((()=>[I("放弃投保")])),_:1})]))]),f(Q)?(m(),b(f(O),{key:0,show:f(Q),"onUpdate:show":a[1]||(a[1]=e=>g(Q)?Q.value=e:null),"show-cancel-button":"","confirm-button-text":"确定","confirm-button-disabled":!f(Z),"cancel-button-text":"放弃投保","close-on-click-overlay":"",title:"请选择需要修改的页面",onConfirm:re,onCancel:ne},{default:w((()=>[_("div",G,[v(n,{modelValue:f(Z),"onUpdate:modelValue":a[0]||(a[0]=e=>g(Z)?Z.value=e:null)},{default:w((()=>[v(r,{name:f(q).premiumTrial},{default:w((()=>[I("保费试算页")])),_:1},8,["name"]),v(r,{name:f(q).questionNotice},{default:w((()=>[I("健康告知页")])),_:1},8,["name"]),v(r,{name:f(q).infoCollection},{default:w((()=>[I("信息采集页")])),_:1},8,["name"])])),_:1},8,["modelValue"])])])),_:1},8,["show","confirm-button-disabled"])):N("",!0)])}}}),[["__scopeId","data-v-3cd00690"]]);export{z as default};
