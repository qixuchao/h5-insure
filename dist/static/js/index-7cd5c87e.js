import{d as t,h as e,o as a,c as l,a as s,e as n,b as i,F as o,q as d,m as c,u as r,an as u,_ as v,aC as p,aD as m,cI as f,i as b,j as g,k as y,z as h,O as _,bb as j,w as N,p as k,di as D,a9 as I,T as x}from"./index-c2ab9f9d.js";import{_ as C}from"./index-d6d43018.js";import{L as w}from"./index-8f5b2d6d.js";import{I as O}from"./infoItem-c4cd9f6b.js";import{O as S}from"./OperateBtn-5580a442.js";import{q as Y}from"./order-00daf0c1.js";import"./empty-ae586b6c.js";import"./constants-b6eb977d.js";const q={class:"com-order-item"},L={class:"header"},z={class:"product-name"},H={class:"status"},M={class:"info"},T={class:"info-bottom"},A=(t=>(p("data-v-404178c4"),t=t(),m(),t))((()=>s("div",{style:{width:"25%"}},[s("img",{src:"/static/png/tree-0f48942e.png",alt:"",style:{width:"80%"}})],-1))),B={class:"footer"};var F=v(t({__name:"item",props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup:(t,{emit:v})=>(e(),(e,v)=>{var p;return a(),l("div",q,[s("div",L,[s("div",z,n(t.detail.productName),1),s("div",H,n(t.detail.orderStatusDesc),1)]),s("div",M,[i(O,{label:"订单号",content:t.detail.orderNo,line:"","is-copy":""},null,8,["content"]),(a(!0),l(o,null,d(t.detail.applicationNo||[""],(t=>(a(),c(O,{key:t,label:"投保单号",content:t,line:"","is-copy":""},null,8,["content"])))),128)),i(O,{label:"保单号",content:t.detail.policyNo,line:"","is-copy":""},null,8,["content"]),s("div",T,[s("div",null,[i(O,{label:"投保人",content:t.detail.holderName,line:""},null,8,["content"]),i(O,{label:"被保人",content:null==(p=t.detail.insuredName)?void 0:p[0],line:""},null,8,["content"]),i(O,{label:"创建时间",content:r(u)(t.detail.orderStartDate).format("YYYY-MM-DD HH:mm:ss"),line:""},null,8,["content"]),i(O,{label:"保费：",content:`${t.detail.premium}`,line:""},null,8,["content"])]),A])]),s("div",B,[i(S,{detail:t.detail},null,8,["detail"])])])})}),[["__scopeId","data-v-404178c4"]]);const R={class:"page-order"},U=(t=>(p("data-v-6b5236f6"),t=t(),m(),t))((()=>s("div",{class:"footer"},[s("img",{src:"/static/png/logo-b728275d.png",alt:"",style:{width:"100%",height:"128px"}})],-1))),$={key:1,class:"empty-box"};var E=v(t({__name:"index",setup(t){const n=f();e();const u=b(),{type:v,tenantId:p,agentCode:m}=u.query,O=g({"-1":1,0:2,1:3,2:4}[v]||0),S=g(1),q=g(!1),L=g(!1),z=g([]);g(0),g(0),g(0);const H=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"1"},{title:"已失效",status:"2"}],M=y((()=>(z.value=[],H[O.value].status))),T=()=>{x.loading({message:"加载中...",forbidClick:!0}),q.value=!0,Y({condition:{orderTopStatus:M.value,tenantId:p,agentCode:m},pageSize:10,pageNum:S.value}).then((t=>{var e;q.value=!1;const{code:a,data:l}=t;"10000"===a&&l&&(1===S.value?z.value=l.datas||[]:z.value=[...z.value,...(null==(e=l.datas[0])?void 0:e.applicationResList)||[]]),L.value=!l||z.value.length>=(null==l?void 0:l.total)})).then((()=>{x.clear()}))},A=()=>{S.value+=1,T()},B=()=>{S.value=1,T()};return h(M,(()=>{S.value=1,T()})),_((()=>{T()})),(t,e)=>{const u=w,v=C,f=j;return a(),c(f,{"theme-vars":r(n)},{default:N((()=>[s("div",R,[i(D,{active:r(O),"onUpdate:active":e[0]||(e[0]=t=>k(O)?O.value=t:null),list:H,class:"tab","title-active-color":"#c41e21"},null,8,["active"]),r(z).length?(a(),c(u,{key:0,class:"body",loading:r(q),finished:r(L),onLoad:A},{default:N((()=>[(a(!0),l(o,null,d(r(z),((t,e)=>(a(),c(F,{key:e,detail:t,onClick:e=>(t=>{const{orderNo:e}=t;I("orderDetail",{orderNo:e,agentCode:m,tenantId:p})})(t),onAfterDelete:B},null,8,["detail","onClick"])))),128)),U])),_:1},8,["loading","finished"])):(a(),l("div",$,[i(v,{title:"暂无投保单","empty-class":"empty-select"})]))])])),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-6b5236f6"]]);export{E as default};
