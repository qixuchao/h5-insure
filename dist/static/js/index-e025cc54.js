import{d as e,h as a,o as t,c as l,a as s,e as n,b as o,w as d,F as i,s as r,p as c,u,_ as v,bo as p,bp as m,dh as f,i as g,j as b,k as h,E as y,l as _,q as k,dL as I,f as N,a_ as j,T as C,z as S}from"./index-83a8b446.js";import{L as w}from"./index-07c6095e.js";import{I as q}from"./infoItem-17e24e07.js";import{O as D}from"./OperateBtn-2312b10a.js";import{t as x}from"./format-31cde443.js";import{q as L}from"./order-ca254a7f.js";const T={class:"com-order-item"},O={class:"header"},U={class:"product-name"},V={class:"status"},z={class:"info"},E={class:"content-list"},A={class:"info-bottom"},B=(e=>(p("data-v-3da5ee97"),e=e(),m(),e))((()=>s("div",{style:{width:"25%"}},[s("img",{src:"/h5insure/static/png/tree-0f48942e.png",alt:"",style:{width:"80%"}})],-1))),F={class:"footer"};var R=v(e({__name:"item",props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup:(e,{emit:v})=>(a(),(a,v)=>{var p;return t(),l("div",T,[s("div",O,[s("div",U,n(e.detail.productName),1),s("div",V,n(e.detail.orderStatusDesc),1)]),s("div",z,[o(q,{label:"订单号",content:e.detail.orderNo,line:"","is-copy":""},null,8,["content"]),o(q,{label:"投/保单号",line:""},{content:d((()=>[s("div",E,[(t(!0),l(i,null,r(e.detail.policyNo||e.detail.applicationNo||[""],(e=>(t(),c(q,{key:e,"is-copy":"",content:e},null,8,["content"])))),128))])])),_:1}),s("div",A,[s("div",null,[o(q,{label:"投保人",content:e.detail.holderName,line:""},null,8,["content"]),o(q,{label:"被保险人",content:null==(p=e.detail.insuredName)?void 0:p[0],line:""},null,8,["content"]),o(q,{label:"创建时间",content:e.detail.orderStartDate,line:""},null,8,["content"]),o(q,{label:"保费",content:u(x)(e.detail.premium),line:""},null,8,["content"])]),B])]),s("div",F,[o(D,{detail:e.detail},null,8,["detail"])])])})}),[["__scopeId","data-v-3da5ee97"]]);const G={id:"page-order",class:"page-order"};var H=v(e({__name:"index",setup(e){f(),a();const n=g(),{type:v,tenantId:p,agentCode:m}=n.query,q=b({"-1":1,0:2,1:3,2:4}[v]||0),D=b(1),x=b(!1),T=b(!1),O=b(!1),U=b([]),V=b(""),z=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"3"},{title:"已失效",status:"2"}],E=h((()=>(U.value=[],z[q.value].status))),A=()=>{C.loading({message:"加载中...",forbidClick:!0}),x.value=!0,L({condition:{orderTopStatus:E.value,tenantId:p,agentCode:m,keyword:V.value},pageSize:10,pageNum:D.value}).then((e=>{const{code:a,data:t}=e;"10000"===a&&t&&(x.value=!1,T.value=!1,1===D.value?U.value=t.datas||[]:U.value=U.value.concat(t.datas||[]),t.datas.length<10&&(O.value=!0))})).then((()=>{C.clear()}))},B=()=>{D.value+=1,A()},F=()=>{D.value=1,A()};y(E,(()=>{D.value=1,A()}));const H=b(),J=b({}),K=b(!1);return y((()=>J.value.scrollTop),(e=>{K.value=!(e<=0)})),_((()=>{var e,a;null==(a=null==(e=document.querySelector("#page-order").querySelector(".list-wrap"))?void 0:e.addEventListener)||a.call(e,"scroll",(()=>{J.value=H.value.scrollTop})),A()})),(e,a)=>{const n=S,v=w;return t(),l("div",G,[o(n,{modelValue:u(V),"onUpdate:modelValue":a[0]||(a[0]=e=>k(V)?V.value=e:null),placeholder:"请输入订单号/投保单号/投保人姓名",onCancel:F,onSearch:F},null,8,["modelValue"]),o(I,{active:u(q),"onUpdate:active":a[1]||(a[1]=e=>k(q)?q.value=e:null),list:z,class:"tab","title-active-color":"#c41e21"},null,8,["active"]),s("div",{ref_key:"refreshRef",ref:H,class:"list-wrap"},[u(U).length?(t(),c(v,{key:0,loading:u(x),"onUpdate:loading":a[2]||(a[2]=e=>k(x)?x.value=e:null),class:"body",finished:u(O),onLoad:B},{default:d((()=>[(t(!0),l(i,null,r(u(U),((e,a)=>(t(),c(R,{key:a,detail:e,onClick:a=>(e=>{const{orderNo:a,insurerCode:t,templateId:l}=e;j("orderDetail",{orderNo:a,agentCode:m,tenantId:p,templateId:l})})(e),onAfterDelete:F},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])):N("",!0)],512)])}}}),[["__scopeId","data-v-0faefb44"]]);export{H as default};
