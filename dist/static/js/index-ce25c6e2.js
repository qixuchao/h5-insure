import{d as e,h as a,o as t,c as l,a as s,e as n,b as o,w as d,F as i,s as r,p as c,u,_ as v,b0 as p,b1 as m,dd as f,i as g,j as y,k as b,E as h,l as _,q as k,dI as C,f as N,aB as j,T as I,z as S}from"./index-69aebc6c.js";import{L as w}from"./index-045fac73.js";import{I as q}from"./infoItem-1a200f0e.js";import{O as D}from"./OperateBtn-9446215a.js";import{t as x}from"./format-31cde443.js";import{q as T}from"./order-cf001106.js";const L={class:"com-order-item"},O={class:"header"},U={class:"product-name"},V={class:"status"},z={class:"info"},B={class:"content-list"},E={class:"info-bottom"},A=(e=>(p("data-v-51f0c34e"),e=e(),m(),e))((()=>s("div",{style:{width:"25%"}},[s("img",{src:"/h5insure/static/png/tree-0f48942e.png",alt:"",style:{width:"80%"}})],-1))),F={class:"footer"};var R=v(e({__name:"item",props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup:(e,{emit:v})=>(a(),(a,v)=>{var p;return t(),l("div",L,[s("div",O,[s("div",U,n(e.detail.productName),1),s("div",V,n(e.detail.orderStatusDesc),1)]),s("div",z,[o(q,{label:"订单号",content:e.detail.orderNo,line:"","is-copy":""},null,8,["content"]),o(q,{label:"投/保单号",line:""},{content:d((()=>[s("div",B,[(t(!0),l(i,null,r(e.detail.policyNo||e.detail.applicationNo||[""],(e=>(t(),c(q,{key:e,"is-copy":"",content:e},null,8,["content"])))),128))])])),_:1}),s("div",E,[s("div",null,[o(q,{label:"投保人",content:e.detail.holderName,line:""},null,8,["content"]),o(q,{label:"被保人",content:null==(p=e.detail.insuredName)?void 0:p[0],line:""},null,8,["content"]),o(q,{label:"创建时间",content:e.detail.orderStartDate,line:""},null,8,["content"]),o(q,{label:"保费",content:u(x)(e.detail.premium),line:""},null,8,["content"])]),A])]),s("div",F,[o(D,{detail:e.detail},null,8,["detail"])])])})}),[["__scopeId","data-v-51f0c34e"]]);const G={id:"page-order",class:"page-order"};var H=v(e({__name:"index",setup(e){f(),a();const n=g(),{type:v,tenantId:p,agentCode:m}=n.query,q=y({"-1":1,0:2,1:3,2:4}[v]||0),D=y(1),x=y(!1),L=y(!1),O=y(!1),U=y([]),V=y(""),z=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"3"},{title:"已失效",status:"2"}],B=b((()=>(U.value=[],z[q.value].status))),E=()=>{I.loading({message:"加载中...",forbidClick:!0}),x.value=!0,T({condition:{orderTopStatus:B.value,tenantId:p,agentCode:m,keyword:V.value},pageSize:10,pageNum:D.value}).then((e=>{const{code:a,data:t}=e;"10000"===a&&t&&(x.value=!1,L.value=!1,1===D.value?U.value=t.datas||[]:U.value=U.value.concat(t.datas||[]),t.datas.length<10&&(O.value=!0))})).then((()=>{I.clear()}))},A=()=>{D.value+=1,E()},F=()=>{D.value=1,E()};h(B,(()=>{D.value=1,E()}));const H=y(),J=y({}),K=y(!1);return h((()=>J.value.scrollTop),(e=>{K.value=!(e<=0)})),_((()=>{var e,a;null==(a=null==(e=document.querySelector("#page-order").querySelector(".list-wrap"))?void 0:e.addEventListener)||a.call(e,"scroll",(()=>{J.value=H.value.scrollTop})),E()})),(e,a)=>{const n=S,v=w;return t(),l("div",G,[o(n,{modelValue:u(V),"onUpdate:modelValue":a[0]||(a[0]=e=>k(V)?V.value=e:null),placeholder:"请输入订单号/投保单号/投保人姓名",onCancel:F,onSearch:F},null,8,["modelValue"]),o(C,{active:u(q),"onUpdate:active":a[1]||(a[1]=e=>k(q)?q.value=e:null),list:z,class:"tab","title-active-color":"#c41e21"},null,8,["active"]),s("div",{ref_key:"refreshRef",ref:H,class:"list-wrap"},[u(U).length?(t(),c(v,{key:0,loading:u(x),"onUpdate:loading":a[2]||(a[2]=e=>k(x)?x.value=e:null),class:"body",finished:u(O),onLoad:A},{default:d((()=>[(t(!0),l(i,null,r(u(U),((e,a)=>(t(),c(R,{key:a,detail:e,onClick:a=>(e=>{const{orderNo:a,insurerCode:t}=e;j("orderDetail",{orderNo:a,agentCode:m,tenantId:p,insurerCode:t})})(e),onAfterDelete:F},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])):N("",!0)],512)])}}}),[["__scopeId","data-v-81f340e6"]]);export{H as default};
