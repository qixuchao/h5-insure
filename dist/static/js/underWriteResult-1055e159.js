import{_ as a,d as e,h as s,g as t,az as o,bU as n,i as l,o as r,c as u,a as c,b as d,w as i,a8 as p,u as m,l as f,m as v,q as y,ae as b,an as h,ap as _,ar as q,at as w,au as C}from"./index-22927d88.js";import{a as g}from"./constants-5480429b.js";const k=a=>(w("data-v-0e2615e8"),a=a(),C(),a),x={class:"page-underwrite-result-wrap"},U={class:"result-content"},V={class:"result-icon"},j=k((()=>c("p",{class:"result-status"},"核保未通过",-1))),z=k((()=>c("p",{class:"result-desc"},"核保结果： BMI>24",-1))),I={class:"operate-btn"},N={class:"dialog-content"},B=e({name:"underwriteResult"});var L=a(e({...B,setup(a){const e=s(),w=t(),C=o.Component,[k,B]=n(!1),L=l(),M=()=>{B(!0)},R=()=>{w.push({path:g.sign,query:e.query})},T=()=>{delete e.query.orderNo,w.push({path:g.productList,query:e.query})},A=()=>{B(!1),w.push({path:L.value,query:e.query})},D=()=>{B(!1),T()};return(a,e)=>{const s=b,t=h,o=_,n=q;return r(),u("div",x,[c("div",U,[c("div",V,[d(s,{name:"wrong","font-size":"32px",color:"var(--van-primary-color)"})]),j,z,c("div",I,[d(t,{type:"primary",plain:"",onClick:M},{default:i((()=>[p("返回修改")])),_:1}),d(t,{type:"primary",onClick:R},{default:i((()=>[p("继续投保")])),_:1}),d(t,{class:"no-border",onClick:T},{default:i((()=>[p("放弃投保")])),_:1})])]),m(k)?(r(),f(m(C),{key:0,show:m(k),"onUpdate:show":e[1]||(e[1]=a=>v(k)?k.value=a:null),"show-cancel-button":"","confirm-button-text":"确定","confirm-button-disabled":!m(L),"cancel-button-text":"放弃投保","close-on-click-overlay":"",title:"请选择需要修改的页面",onConfirm:A,onCancel:D},{default:i((()=>[c("div",N,[d(n,{modelValue:m(L),"onUpdate:modelValue":e[0]||(e[0]=a=>v(L)?L.value=a:null)},{default:i((()=>[d(o,{name:m(g).premiumTrial},{default:i((()=>[p("保费试算页")])),_:1},8,["name"]),d(o,{name:m(g).questionNotice},{default:i((()=>[p("健康告知页")])),_:1},8,["name"]),d(o,{name:m(g).infoCollection},{default:i((()=>[p("信息采集页")])),_:1},8,["name"])])),_:1},8,["modelValue"])])])),_:1},8,["show","confirm-button-disabled"])):y("",!0)])}}}),[["__scopeId","data-v-0e2615e8"]]);export{L as default};
