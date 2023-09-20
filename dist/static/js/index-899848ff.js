import{d as e,g as t,o as a,c as l,a as s,e as n,b as o,F as i,n as d,l as c,u as r,an as u,_ as v,aC as m,aD as p,cG as f,h as b,i as g,j as y,z as h,O as _,bb as j,w as N,m as D,dg as k,a9 as x,T as C}from"./index-8067fbb0.js";import{_ as I}from"./index-ecea95c7.js";import{L as w}from"./index-848ae197.js";import{I as O}from"./infoItem-67985f10.js";import{O as S}from"./OperateBtn-bd89c7b7.js";import{q as Y}from"./order-c2d5a784.js";import"./empty-ae586b6c.js";import"./constants-fe95ef6f.js";const L={class:"com-order-item"},q={class:"header"},z={class:"product-name"},H={class:"status"},M={class:"info"},T={class:"info-bottom"},A=(e=>(m("data-v-220f8eb7"),e=e(),p(),e))((()=>s("div",{style:{width:"25%"}},[s("img",{src:"/static/png/tree-0f48942e.png",alt:"",style:{width:"80%"}})],-1))),B={class:"footer"};var F=v(e({__name:"item",props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup:(e,{emit:v})=>(t(),(t,v)=>{var m;return a(),l("div",L,[s("div",q,[s("div",z,n(e.detail.productName),1),s("div",H,n(e.detail.orderStatusDesc),1)]),s("div",M,[o(O,{label:"订单号",content:e.detail.orderNo,line:"","is-copy":""},null,8,["content"]),(a(!0),l(i,null,d(e.detail.applicationNo,(e=>(a(),c(O,{key:e,label:"投保单号",content:e,line:"","is-copy":""},null,8,["content"])))),128)),o(O,{label:"保单号",content:e.detail.policyNo,line:"","is-copy":""},null,8,["content"]),s("div",T,[s("div",null,[o(O,{label:"投保人",content:e.detail.holderName,line:""},null,8,["content"]),o(O,{label:"被保人",content:null==(m=e.detail.insuredName)?void 0:m[0],line:""},null,8,["content"]),o(O,{label:"创建时间",content:r(u)(e.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss"),line:""},null,8,["content"]),o(O,{label:"保费：",content:`￥${e.detail.premium}`,line:""},null,8,["content"])]),A])]),s("div",B,[o(S,{detail:e.detail},null,8,["detail"])])])})}),[["__scopeId","data-v-220f8eb7"]]);const G={class:"page-order"},R=(e=>(m("data-v-0237aa7e"),e=e(),p(),e))((()=>s("div",{class:"footer"},[s("img",{src:"/static/png/logo-b728275d.png",alt:"",style:{width:"100%",height:"128px"}})],-1))),U={key:1,class:"empty-box"};var $=v(e({__name:"index",setup(e){const n=f();t();const u=b(),{type:v,tenantId:m,agentCode:p}=u.query,O=g({"-1":1,0:2,1:3,2:4}[v]||0),S=g(1),L=g(!1),q=g(!1),z=g([]);g(0),g(0),g(0);const H=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"1"},{title:"已失效",status:"2"}],M=y((()=>(z.value=[],H[O.value].status))),T=()=>{C.loading({message:"加载中...",forbidClick:!0}),L.value=!0,Y({condition:{orderTopStatus:M.value,tenantId:m,agentCode:p},pageSize:10,pageNum:S.value}).then((e=>{var t;L.value=!1;const{code:a,data:l}=e;"10000"===a&&l&&(1===S.value?z.value=l.datas||[]:z.value=[...z.value,...(null==(t=l.datas[0])?void 0:t.applicationResList)||[]]),q.value=!l||z.value.length>=(null==l?void 0:l.total)})).then((()=>{C.clear()}))},A=()=>{S.value+=1,T()},B=()=>{S.value=1,T()};return h(M,(()=>{S.value=1,T()})),_((()=>{T()})),(e,t)=>{const u=w,v=I,f=j;return a(),c(f,{"theme-vars":r(n)},{default:N((()=>[s("div",G,[o(k,{active:r(O),"onUpdate:active":t[0]||(t[0]=e=>D(O)?O.value=e:null),list:H,class:"tab","title-active-color":"#c41e21"},null,8,["active"]),r(z).length?(a(),c(u,{key:0,class:"body",loading:r(L),finished:r(q),onLoad:A},{default:N((()=>[(a(!0),l(i,null,d(r(z),((e,t)=>(a(),c(F,{key:t,detail:e,onClick:t=>(e=>{const{orderNo:t}=e;x("orderDetail",{orderNo:t,agentCode:p,tenantId:m})})(e),onAfterDelete:B},null,8,["detail","onClick"])))),128)),R])),_:1},8,["loading","finished"])):(a(),l("div",U,[o(v,{title:"暂无投保单","empty-class":"empty-select"})]))])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-0237aa7e"]]);export{$ as default};
