import{_ as e,d as a,h as t,o as l,c as s,a as o,e as n,b as d,w as i,F as r,s as c,p as u,u as v,av as p,aw as m,d7 as f,i as g,j as b,k as h,A as y,l as _,q as w,dT as j,f as k,a9 as C,T as N}from"./index-0b6bfadc.js";import{L as S}from"./index-220c0301.js";import{S as I}from"./index-9ab68968.js";import{I as q}from"./infoItem-00f73565.js";import{O as x}from"./OperateBtn-92177226.js";import{t as D}from"./format-31cde443.js";import{q as T}from"./order-db910943.js";const L={class:"com-order-item"},O={class:"header"},U={class:"product-name"},V={class:"status"},A={class:"info"},z={class:"content-list"},B={class:"info-bottom"},E=(e=>(p("data-v-51f0c34e"),e=e(),m(),e))((()=>o("div",{style:{width:"25%"}},[o("img",{src:"/static/png/tree-0f48942e.png",alt:"",style:{width:"80%"}})],-1))),F={class:"footer"};var R=e(a({__name:"item",props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup:(e,{emit:a})=>(t(),(a,t)=>{var p;return l(),s("div",L,[o("div",O,[o("div",U,n(e.detail.productName),1),o("div",V,n(e.detail.orderStatusDesc),1)]),o("div",A,[d(q,{label:"订单号",content:e.detail.orderNo,line:"","is-copy":""},null,8,["content"]),d(q,{label:"投/保单号",line:""},{content:i((()=>[o("div",z,[(l(!0),s(r,null,c(e.detail.policyNo||e.detail.applicationNo||[""],(e=>(l(),u(q,{key:e,"is-copy":"",content:e},null,8,["content"])))),128))])])),_:1}),o("div",B,[o("div",null,[d(q,{label:"投保人",content:e.detail.holderName,line:""},null,8,["content"]),d(q,{label:"被保人",content:null==(p=e.detail.insuredName)?void 0:p[0],line:""},null,8,["content"]),d(q,{label:"创建时间",content:e.detail.orderStartDate,line:""},null,8,["content"]),d(q,{label:"保费",content:v(D)(e.detail.premium),line:""},null,8,["content"])]),E])]),o("div",F,[d(x,{detail:e.detail},null,8,["detail"])])])})}),[["__scopeId","data-v-51f0c34e"]]);const G={id:"page-order",class:"page-order"};var H=e(a({__name:"index",setup(e){f(),t();const a=g(),{type:n,tenantId:p,agentCode:m}=a.query,q=b({"-1":1,0:2,1:3,2:4}[n]||0),x=b(1),D=b(!1),L=b(!1),O=b(!1),U=b([]),V=b(""),A=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"3"},{title:"已失效",status:"2"}],z=h((()=>(U.value=[],A[q.value].status))),B=()=>{N.loading({message:"加载中...",forbidClick:!0}),D.value=!0,T({condition:{orderTopStatus:z.value,tenantId:p,agentCode:m,keyword:V.value},pageSize:10,pageNum:x.value}).then((e=>{const{code:a,data:t}=e;"10000"===a&&t&&(D.value=!1,L.value=!1,1===x.value?U.value=t.datas||[]:U.value=U.value.concat(t.datas||[]),t.datas.length<10&&(O.value=!0))})).then((()=>{N.clear()}))},E=()=>{x.value+=1,B()},F=()=>{x.value=1,B()};y(z,(()=>{x.value=1,B()}));const H=b(),J=b({}),K=b(!1);return y((()=>J.value.scrollTop),(e=>{K.value=!(e<=0)})),_((()=>{var e,a;null==(a=null==(e=document.querySelector("#page-order").querySelector(".list-wrap"))?void 0:e.addEventListener)||a.call(e,"scroll",(()=>{J.value=H.value.scrollTop})),B()})),(e,a)=>{const t=I,n=S;return l(),s("div",G,[d(t,{modelValue:v(V),"onUpdate:modelValue":a[0]||(a[0]=e=>w(V)?V.value=e:null),placeholder:"请输入订单号/投保单号/投保人姓名",shape:"round",class:"search","clear-trigger":"always","show-action":!!v(V),clearable:"",onCancel:F,onSearch:F},null,8,["modelValue","show-action"]),d(j,{active:v(q),"onUpdate:active":a[1]||(a[1]=e=>w(q)?q.value=e:null),list:A,class:"tab","title-active-color":"#c41e21"},null,8,["active"]),o("div",{ref_key:"refreshRef",ref:H,class:"list-wrap"},[v(U).length?(l(),u(n,{key:0,loading:v(D),"onUpdate:loading":a[2]||(a[2]=e=>w(D)?D.value=e:null),class:"body",finished:v(O),onLoad:E},{default:i((()=>[(l(!0),s(r,null,c(v(U),((e,a)=>(l(),u(R,{key:a,detail:e,onClick:a=>(e=>{const{orderNo:a,insurerCode:t}=e;C("orderDetail",{orderNo:a,agentCode:m,tenantId:p,insurerCode:t})})(e),onAfterDelete:F},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])):k("",!0)],512)])}}}),[["__scopeId","data-v-3b413f31"]]);export{H as default};
