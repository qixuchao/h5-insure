import{d as e,h as a,o as t,c as l,a as s,e as n,b as o,w as d,F as i,s as r,p as u,u as c,_ as v,bo as p,bp as m,dg as f,i as g,j as b,k as y,E as h,l as _,q as k,dK as I,f as N,a_ as j,T as C,z as S}from"./index-4d5fa34d.js";import{L as w}from"./index-863d639c.js";import{I as q}from"./infoItem-b712ef85.js";import{O as D}from"./OperateBtn-64e18696.js";import{t as x}from"./format-31cde443.js";import{q as T}from"./order-9edf4708.js";const L={class:"com-order-item"},O={class:"header"},U={class:"product-name"},V={class:"status"},z={class:"info"},E={class:"content-list"},A={class:"info-bottom"},B=(e=>(p("data-v-3da5ee97"),e=e(),m(),e))((()=>s("div",{style:{width:"25%"}},[s("img",{src:"/h5insure/static/png/tree-0f48942e.png",alt:"",style:{width:"80%"}})],-1))),F={class:"footer"};var K=v(e({__name:"item",props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup:(e,{emit:v})=>(a(),(a,v)=>{var p;return t(),l("div",L,[s("div",O,[s("div",U,n(e.detail.productName),1),s("div",V,n(e.detail.orderStatusDesc),1)]),s("div",z,[o(q,{label:"订单号",content:e.detail.orderNo,line:"","is-copy":""},null,8,["content"]),o(q,{label:"投/保单号",line:""},{content:d((()=>[s("div",E,[(t(!0),l(i,null,r(e.detail.policyNo||e.detail.applicationNo||[""],(e=>(t(),u(q,{key:e,"is-copy":"",content:e},null,8,["content"])))),128))])])),_:1}),s("div",A,[s("div",null,[o(q,{label:"投保人",content:e.detail.holderName,line:""},null,8,["content"]),o(q,{label:"被保险人",content:null==(p=e.detail.insuredName)?void 0:p[0],line:""},null,8,["content"]),o(q,{label:"创建时间",content:e.detail.orderStartDate,line:""},null,8,["content"]),o(q,{label:"保费",content:c(x)(e.detail.premium),line:""},null,8,["content"])]),B])]),s("div",F,[o(D,{detail:e.detail},null,8,["detail"])])])})}),[["__scopeId","data-v-3da5ee97"]]);const R={id:"page-order",class:"page-order"};var G=v(e({__name:"index",setup(e){f(),a();const n=g(),{type:v,tenantId:p,agentCode:m}=n.query,q=b({"-1":1,0:2,1:3,2:4}[v]||0),D=b(1),x=b(!1),L=b(!1),O=b(!1),U=b([]),V=b(""),z=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"3"},{title:"已失效",status:"2"}],E=y((()=>(U.value=[],z[q.value].status))),A=()=>{C.loading({message:"加载中...",forbidClick:!0}),x.value=!0,T({condition:{orderTopStatus:E.value,tenantId:p,agentCode:m,keyword:V.value},pageSize:10,pageNum:D.value}).then((e=>{const{code:a,data:t}=e;"10000"===a&&t&&(x.value=!1,L.value=!1,1===D.value?U.value=t.datas||[]:U.value=U.value.concat(t.datas||[]),t.datas.length<10&&(O.value=!0))})).then((()=>{C.clear()}))},B=()=>{D.value+=1,A()},F=()=>{D.value=1,A()};h(E,(()=>{D.value=1,A()}));const G=b(),H=b({}),J=b(!1);return h((()=>H.value.scrollTop),(e=>{J.value=!(e<=0)})),_((()=>{var e,a;null==(a=null==(e=document.querySelector("#page-order").querySelector(".list-wrap"))?void 0:e.addEventListener)||a.call(e,"scroll",(()=>{H.value=G.value.scrollTop})),A()})),(e,a)=>{const n=S,v=w;return t(),l("div",R,[o(n,{modelValue:c(V),"onUpdate:modelValue":a[0]||(a[0]=e=>k(V)?V.value=e:null),placeholder:"请输入订单号/投保单号/投保人姓名",onCancel:F,onSearch:F},null,8,["modelValue"]),o(I,{active:c(q),"onUpdate:active":a[1]||(a[1]=e=>k(q)?q.value=e:null),list:z,class:"tab","title-active-color":"#c41e21"},null,8,["active"]),s("div",{ref_key:"refreshRef",ref:G,class:"list-wrap"},[c(U).length?(t(),u(v,{key:0,loading:c(x),"onUpdate:loading":a[2]||(a[2]=e=>k(x)?x.value=e:null),class:"body",finished:c(O),onLoad:B},{default:d((()=>[(t(!0),l(i,null,r(c(U),((e,a)=>(t(),u(K,{key:a,detail:e,onClick:a=>(e=>{const{orderNo:a,insurerCode:t,templateId:l}=e;j("orderDetail",{orderNo:a,agentCode:m,tenantId:p,templateId:l})})(e),onAfterDelete:F},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])):N("",!0)],512)])}}}),[["__scopeId","data-v-0faefb44"]]);export{G as default};
