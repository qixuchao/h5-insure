import{d as e,h as a,o as t,c as l,a as s,e as o,b as n,w as d,F as i,s as r,p as c,u,_ as v,aD as p,aE as m,dd as f,i as g,j as h,k as y,E as b,l as _,q as k,dT as w,f as C,ah as N,T as j,ci as I}from"./index-67e7dac2.js";import{L as S}from"./index-86d27ce6.js";import{I as D}from"./infoItem-665db622.js";import{O as q}from"./OperateBtn-0935c651.js";import{t as T}from"./format-31cde443.js";import{q as x}from"./order-03538866.js";const E={class:"com-order-item"},L={class:"header"},O={class:"product-name"},U={class:"status"},V={class:"info"},z={class:"content-list"},A={class:"info-bottom"},B=(e=>(p("data-v-51f0c34e"),e=e(),m(),e))((()=>s("div",{style:{width:"25%"}},[s("img",{src:"/static/png/tree-0f48942e.png",alt:"",style:{width:"80%"}})],-1))),F={class:"footer"};var R=v(e({__name:"item",props:{detail:{type:Object,default:()=>{}}},emits:["afterDelete"],setup:(e,{emit:v})=>(a(),(a,v)=>{var p;return t(),l("div",E,[s("div",L,[s("div",O,o(e.detail.productName),1),s("div",U,o(e.detail.orderStatusDesc),1)]),s("div",V,[n(D,{label:"订单号",content:e.detail.orderNo,line:"","is-copy":""},null,8,["content"]),n(D,{label:"投/保单号",line:""},{content:d((()=>[s("div",z,[(t(!0),l(i,null,r(e.detail.policyNo||e.detail.applicationNo||[""],(e=>(t(),c(D,{key:e,"is-copy":"",content:e},null,8,["content"])))),128))])])),_:1}),s("div",A,[s("div",null,[n(D,{label:"投保人",content:e.detail.holderName,line:""},null,8,["content"]),n(D,{label:"被保人",content:null==(p=e.detail.insuredName)?void 0:p[0],line:""},null,8,["content"]),n(D,{label:"创建时间",content:e.detail.orderStartDate,line:""},null,8,["content"]),n(D,{label:"保费",content:u(T)(e.detail.premium),line:""},null,8,["content"])]),B])]),s("div",F,[n(q,{detail:e.detail},null,8,["detail"])])])})}),[["__scopeId","data-v-51f0c34e"]]);const G={id:"page-order",class:"page-order"};var H=v(e({__name:"index",setup(e){f(),a();const o=g(),{type:v,tenantId:p,agentCode:m}=o.query,D=h({"-1":1,0:2,1:3,2:4}[v]||0),q=h(1),T=h(!1),E=h(!1),L=h(!1),O=h([]),U=h(""),V=[{title:"全部",status:""},{title:"待处理",status:"-1"},{title:"待支付",status:"0"},{title:"已完成",status:"3"},{title:"已失效",status:"2"}],z=y((()=>(O.value=[],V[D.value].status))),A=()=>{j.loading({message:"加载中...",forbidClick:!0}),T.value=!0,x({condition:{orderTopStatus:z.value,tenantId:p,agentCode:m,keyword:U.value},pageSize:10,pageNum:q.value}).then((e=>{const{code:a,data:t}=e;"10000"===a&&t&&(T.value=!1,E.value=!1,1===q.value?O.value=t.datas||[]:O.value=O.value.concat(t.datas||[]),t.datas.length<10&&(L.value=!0))})).then((()=>{j.clear()}))},B=()=>{q.value+=1,A()},F=()=>{q.value=1,A()};b(z,(()=>{q.value=1,A()}));const H=h(),J=h({}),K=h(!1);return b((()=>J.value.scrollTop),(e=>{K.value=!(e<=0)})),_((()=>{var e,a;null==(a=null==(e=document.querySelector("#page-order").querySelector(".list-wrap"))?void 0:e.addEventListener)||a.call(e,"scroll",(()=>{J.value=H.value.scrollTop})),A()})),(e,a)=>{const o=I,v=S;return t(),l("div",G,[n(o,{modelValue:u(U),"onUpdate:modelValue":a[0]||(a[0]=e=>k(U)?U.value=e:null),placeholder:"请输入订单号/投保单号/投保人姓名",shape:"round",class:"search","clear-trigger":"always","show-action":!!u(U),clearable:"",onCancel:F,onSearch:F},null,8,["modelValue","show-action"]),n(w,{active:u(D),"onUpdate:active":a[1]||(a[1]=e=>k(D)?D.value=e:null),list:V,class:"tab","title-active-color":"#c41e21"},null,8,["active"]),s("div",{ref_key:"refreshRef",ref:H,class:"list-wrap"},[u(O).length?(t(),c(v,{key:0,loading:u(T),"onUpdate:loading":a[2]||(a[2]=e=>k(T)?T.value=e:null),class:"body",finished:u(L),onLoad:B},{default:d((()=>[(t(!0),l(i,null,r(u(O),((e,a)=>(t(),c(R,{key:a,detail:e,onClick:a=>(e=>{const{orderNo:a,insurerCode:t}=e;N("orderDetail",{orderNo:a,agentCode:m,tenantId:p,insurerCode:t})})(e),onAfterDelete:F},null,8,["detail","onClick"])))),128))])),_:1},8,["loading","finished"])):C("",!0)],512)])}}}),[["__scopeId","data-v-3b413f31"]]);export{H as default};
