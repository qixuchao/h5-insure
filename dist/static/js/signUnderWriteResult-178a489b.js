import{_ as e,d as a,bU as t,b4 as s,af as r,i as o,h as n,bi as u,k as l,aX as d,cc as c,j as i,l as p,o as m,c as y,a as f,b as v,e as _,u as h,w,v as I,p as b,q,y as N,f as g,cd as k,ce as C,b2 as R,b3 as E,cf as L,cg as S,ch as T,ci as A}from"./index-2ac8b6d6.js";import{c as D}from"./order-5e63def9.js";const U={class:"page-underwrite-result-wrap"},x={class:"result-content"},F={class:"result-icon"},$={class:"result-status"},j={class:"result-desc"},z={key:0,class:"operate-btn"},G={key:1,class:"operate-btn"},V={class:"dialog-content"},W=a({name:"underwriteResult"});var B=e(a({...W,setup(e){var a,W;const B={[t.SIGN_FAIL]:{resultStatus:"人工核保中",resultDesc:null==(a=s.get(`${r}_underwriteResult`))?void 0:a[t.SIGN_FAIL]},[t.UNDER_WRITE_FAIL]:{resultStatus:"核保未通过",resultDesc:null==(W=s.get(`${r}_underwriteResult`))?void 0:W[t.UNDER_WRITE_FAIL]}},X=o(),Y=n(),{orderNo:H,tenantId:J,underwriteStatus:K,productClass:M}=X.query,O=u.Component,P=l((()=>M===`${d.YES}`)),[Q,Z]=c(!1),ee=i(),ae=async()=>{if(P.value)return void Y.push({path:N.orderList,query:{...X.query}});const{code:e,data:a}=await k({orderNo:H,tenantId:J});"10000"===e&&a&&(delete X.query.orderNo,Y.push({path:N.orderList,query:{...X.query}}))},te=()=>{Z(!0)},se=()=>{C({messageType:A.AGENT,orderNo:H,tenantId:J}).then((({code:e})=>{"10000"===e&&Y.push({path:N.sign,query:X.query})}))},re=()=>{D({orderNo:H,tenantId:J}).then((({code:e,data:a})=>{"10000"===e&&(delete X.query.orderNo,Y.push({path:N.productList,query:X.query}))}))},oe=()=>{var e;e=()=>{Z(!1),Y.push({path:ee.value,query:X.query})},T({orderNo:H,tenantId:J}).then((({code:a})=>{"10000"===a&&(null==e||e())}))},ne=()=>{Z(!1),re()},ue=i();return p((()=>{setTimeout((async()=>{ue.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const s=R,r=E,o=L,n=S;return m(),y("div",U,[f("div",x,[f("div",F,[v(s,{name:"wrong","font-size":"32px",color:"var(--van-primary-color)"})]),f("p",$,_(B[`${h(K)}`].resultStatus),1),f("p",j,_(B[`${h(K)}`].resultDesc),1),h(K)!==h(t).UNDER_WRITE_FAIL||h(P)?(m(),y("div",G,[v(r,{type:"primary",onClick:ae},{default:w((()=>[I("确定")])),_:1})])):(m(),y("div",z,[v(r,{type:"primary",plain:"",onClick:te},{default:w((()=>[I("返回修改")])),_:1}),v(r,{type:"primary",onClick:se},{default:w((()=>[I("继续投保")])),_:1}),v(r,{class:"no-border",onClick:re},{default:w((()=>[I("放弃投保")])),_:1})]))]),h(Q)?(m(),b(h(O),{key:0,show:h(Q),"onUpdate:show":a[1]||(a[1]=e=>q(Q)?Q.value=e:null),"show-cancel-button":"","confirm-button-text":"确定","confirm-button-disabled":!h(ee),"cancel-button-text":"放弃投保","close-on-click-overlay":"",title:"请选择需要修改的页面",onConfirm:oe,onCancel:ne},{default:w((()=>[f("div",V,[v(n,{modelValue:h(ee),"onUpdate:modelValue":a[0]||(a[0]=e=>q(ee)?ee.value=e:null)},{default:w((()=>[v(o,{name:h(N).premiumTrial},{default:w((()=>[I("保费试算页")])),_:1},8,["name"]),v(o,{name:h(N).questionNotice},{default:w((()=>[I("健康告知页")])),_:1},8,["name"]),v(o,{name:h(N).infoCollection},{default:w((()=>[I("信息采集页")])),_:1},8,["name"])])),_:1},8,["modelValue"])])])),_:1},8,["show","confirm-button-disabled"])):g("",!0)])}}}),[["__scopeId","data-v-15c4af0a"]]);export{B as default};
