import{_ as e,d as a,h as t,g as s,ay as r,bK as o,i as n,o as l,c as u,a as d,b as c,e as i,u as p,bn as m,w as f,a8 as y,l as _,m as b,q as v,ae as h,ag as q,bL as w,bM as I,T as N}from"./index-49d4fa1c.js";import{P as k}from"./constants-fe95ef6f.js";import{c as C}from"./order-b727c871.js";import{o as g}from"./verify-5f2d3d2d.js";const L={class:"page-underwrite-result-wrap"},x={class:"result-content"},D={class:"result-icon"},R={class:"result-status"},S={class:"result-desc"},j={key:0,class:"operate-btn"},E={key:1,class:"operate-btn"},T={class:"dialog-content"},U=a({name:"underwriteResult"});var A=e(a({...U,setup(e){const a={[m.SIGN_FAIL]:{resultStatus:"人工核保中",resultDesc:"您提交的投保资料需进一步人工审核，请耐心等待公司审核结果"},[m.UNDER_WRITE_FAIL]:{resultStatus:"核保未通过",resultDesc:"核保结果: BMI>24"}},U=t(),A=s(),{orderNo:F,tenantId:V,underwriteStatus:M}=U.query,W=r.Component,[$,z]=o(!1),B=n(),G=async()=>{const{code:e,data:a}=await g({orderNo:F,tenantId:V});"10000"===e&&a&&(delete U.query.orderNo,A.push({path:k.orderList,query:{...U.query}}))},K=e=>{C({orderNo:F,tenantId:V}).then((({code:a,data:t})=>{"10000"===a&&(N("撤单成功"),null==e||e())}))},P=()=>{z(!0)},H=()=>{A.push({path:k.sign,query:U.query})},J=()=>{K((()=>{delete U.query.orderNo,A.push({path:k.productList,query:U.query})}))},O=()=>{K((()=>{z(!1),A.push({path:B.value,query:U.query})}))},Q=()=>{z(!1),J()};return(e,t)=>{const s=h,r=q,o=w,n=I;return l(),u("div",L,[d("div",x,[d("div",D,[c(s,{name:"wrong","font-size":"32px",color:"var(--van-primary-color)"})]),d("p",R,i(a[`${p(M)}`].resultStatus),1),d("p",S,i(a[`${p(M)}`].resultDesc),1),p(M)===p(m).UNDER_WRITE_FAIL?(l(),u("div",j,[c(r,{type:"primary",plain:"",onClick:P},{default:f((()=>[y("返回修改")])),_:1}),c(r,{type:"primary",onClick:H},{default:f((()=>[y("继续投保")])),_:1}),c(r,{class:"no-border",onClick:J},{default:f((()=>[y("放弃投保")])),_:1})])):(l(),u("div",E,[c(r,{type:"primary",onClick:G},{default:f((()=>[y("确定")])),_:1})]))]),p($)?(l(),_(p(W),{key:0,show:p($),"onUpdate:show":t[1]||(t[1]=e=>b($)?$.value=e:null),"show-cancel-button":"","confirm-button-text":"确定","confirm-button-disabled":!p(B),"cancel-button-text":"放弃投保","close-on-click-overlay":"",title:"请选择需要修改的页面",onConfirm:O,onCancel:Q},{default:f((()=>[d("div",T,[c(n,{modelValue:p(B),"onUpdate:modelValue":t[0]||(t[0]=e=>b(B)?B.value=e:null)},{default:f((()=>[c(o,{name:p(k).premiumTrial},{default:f((()=>[y("保费试算页")])),_:1},8,["name"]),c(o,{name:p(k).questionNotice},{default:f((()=>[y("健康告知页")])),_:1},8,["name"]),c(o,{name:p(k).infoCollection},{default:f((()=>[y("信息采集页")])),_:1},8,["name"])])),_:1},8,["modelValue"])])])),_:1},8,["show","confirm-button-disabled"])):v("",!0)])}}}),[["__scopeId","data-v-5066f540"]]);export{A as default};
