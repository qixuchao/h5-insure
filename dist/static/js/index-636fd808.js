import{d as e,h as t,o as a,c as l,a as s,e as n,b as o,F as i,q as d,m as r,u as c,_ as u,aC as v,aD as p,cS as m,i as f,j as b,k as g,z as y,O as h,p as _,dt as j,w as C,f as N,a9 as k,T as I}from"./index-c83748d0.js";import{L as S}from"./index-37907de5.js";import{I as D}from"./infoItem-c9ca8028.js";import{O as q}from"./OperateBtn-e9980a52.js";import{t as w}from"./format-31cde443.js";import{q as x}from"./order-67bcbbb8.js";import"./constants-4b08cf92.js";const O={class:"com-order-item"},T={class:"header"},L={class:"product-name"},z={class:"status"},U={class:"info"},A={class:"info-bottom"},B=(e=>(v("data-v-40dd5e97"),e=e(),p(),e))((()=>s("div",{style:{width:"25%"}},[s("img",{src:"/static/png/tree-0f48942e.png",alt:"",style:{width:"80%"}})],-1))),E={class:"footer"};var F=u(e({__name:"item",props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup:(e,{emit:u})=>(t(),(t,u)=>{var v;return a(),l("div",O,[s("div",T,[s("div",L,n(e.detail.productName),1),s("div",z,n(e.detail.orderStatusDesc),1)]),s("div",U,[o(D,{label:"订单号",content:e.detail.orderNo,line:"","is-copy":""},null,8,["content"]),(a(!0),l(i,null,d(e.detail.applicationNo||[""],(e=>(a(),r(D,{key:e,label:"投保单号",content:e,line:"","is-copy":""},null,8,["content"])))),128)),o(D,{label:"保单号",content:e.detail.policyNo,line:"","is-copy":""},null,8,["content"]),s("div",A,[s("div",null,[o(D,{label:"投保人",content:e.detail.holderName,line:""},null,8,["content"]),o(D,{label:"被保人",content:null==(v=e.detail.insuredName)?void 0:v[0],line:""},null,8,["content"]),o(D,{label:"创建时间",content:e.detail.orderStartDate,line:""},null,8,["content"]),o(D,{label:"保费",content:c(w)(e.detail.premium),line:""},null,8,["content"])]),B])]),s("div",E,[o(q,{detail:e.detail},null,8,["detail"])])])})}),[["__scopeId","data-v-40dd5e97"]]);const R={id:"page-order",class:"page-order"};var G=u(e({__name:"index",setup(e){m(),t();const n=f(),{type:u,tenantId:v,agentCode:p}=n.query,D=b({"-1":1,0:2,1:3,2:4}[u]||0),q=b(1),w=b(!1),O=b(!1),T=b(!1),L=b([]);b(0),b(0),b(0);const z=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"3"},{title:"已失效",status:"2"}],U=g((()=>(L.value=[],z[D.value].status))),A=()=>{I.loading({message:"加载中...",forbidClick:!0}),w.value=!0,x({condition:{orderTopStatus:U.value,tenantId:v,agentCode:p},pageSize:10,pageNum:q.value}).then((e=>{const{code:t,data:a}=e;"10000"===t&&a&&(w.value=!1,O.value=!1,1===q.value?L.value=a.datas||[]:L.value=L.value.concat(a.datas||[]),a.datas.length<10&&(T.value=!0))})).then((()=>{I.clear()}))},B=()=>{q.value+=1,A()},E=()=>{q.value=1,A()};y(U,(()=>{q.value=1,A()}));const G=b(),H=b({}),J=b(!1);return y((()=>H.value.scrollTop),(e=>{J.value=!(e<=0)})),h((()=>{var e,t;null==(t=null==(e=document.querySelector("#page-order").querySelector(".list-wrap"))?void 0:e.addEventListener)||t.call(e,"scroll",(()=>{H.value=G.value.scrollTop})),A()})),(e,t)=>{const n=S;return a(),l("div",R,[o(j,{active:c(D),"onUpdate:active":t[0]||(t[0]=e=>_(D)?D.value=e:null),list:z,class:"tab","title-active-color":"#c41e21"},null,8,["active"]),s("div",{ref_key:"refreshRef",ref:G,class:"list-wrap"},[c(L).length?(a(),r(n,{key:0,loading:c(w),"onUpdate:loading":t[1]||(t[1]=e=>_(w)?w.value=e:null),class:"body",finished:c(T),onLoad:B},{default:C((()=>[(a(!0),l(i,null,d(c(L),((e,t)=>(a(),r(F,{key:t,detail:e,onClick:t=>(e=>{const{orderNo:t,insurerCode:a}=e;k("orderDetail",{orderNo:t,agentCode:p,tenantId:v,insurerCode:a})})(e),onAfterDelete:E},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])):N("",!0)],512)])}}}),[["__scopeId","data-v-7bc9f116"]]);export{G as default};
