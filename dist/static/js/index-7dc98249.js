import{d as e,cD as a,i as s,t,k as l,ay as r,o as d,c as o,b as i,w as n,a as u,u as c,e as p,v as m,f as y,aj as v,j as f,E as b,F as g,s as h,p as k,_ as j,r as w,aG as C,l as q,T as x,z as O,A as N}from"./index-176c9bb7.js";import{a as T}from"./third-627f977b.js";import{S as D,I,a as L}from"./index-c6d45a02.js";import{f as S,m as _,g as A}from"./gender-bdd67324.js";import{e as z}from"./util-1fafdc4a.js";import{O as B}from"./questionnaire-42dcb602.js";const V={class:"customer-list-item"},E={class:"left"},M=["src"],U={class:"left-item"},$={class:"name"},F={key:0,class:"cert-no"},G={class:"cert-type-name"},K=e({name:"item"}),P=e({...K,props:{data:{type:Object,required:!1,default:()=>Object},disabled:{type:Boolean,required:!1,default:()=>!0}},setup(e){const f=e;a();const b=s(),{data:g,disabled:h}=t(f),k=l((()=>r().diff(g.value.birthday,"y")));g.value.id,g.value.customerType;const j=e=>{z({...g.value,certNo:g.value.originCertNo}),v("customerDetail",{...b.query,customerId:g.value.id})};return(e,a)=>{const s=D;return d(),o("div",V,[i(s,null,{default:n((()=>{var e,a;return[u("div",{class:"list-item",onClick:j},[u("div",E,[u("div",null,[u("img",{src:c(g).gender?1==+c(g).gender?c(S):c(_):c(A),alt:"",class:"mf"},null,8,M)]),u("div",null,[u("div",U,[u("div",$,p(c(g).customerName)+" | "+p(c(k))+"岁",1),(null==(e=c(g))?void 0:e.certNo)&&1==+(null==(a=c(g))?void 0:a.certType)?(d(),o("div",F,[m(p(c(g).certNo)+" ",1),u("span",G,p(c(g).certTypeName),1)])):y("",!0)])])])])]})),_:1})])}}});const H={class:"customer-list"},J={key:0,class:"list-pr"},Q={key:1,class:"list-pr"},R=e({name:"list"});var W=j(e({...R,props:{data:{type:Array,required:!0,default:()=>[]},type:{type:String,required:!0,default:()=>"firstLetter"},disabled:{type:Boolean,required:!1,default:()=>!0}},emits:["on-delete","on-close"],setup(e,{emit:a}){const s=e,{data:l,type:r,disabled:u}=t(s),p=f([]),m=f([]),y=e=>{a("on-delete",e)},v=e=>{a("on-close",e),console.log("这里关闭弹窗1111222----",e)};return b((()=>s.data),(()=>{l.value=s.data||[],console.log("data",l),p.value=l.value.filter((e=>!!(e.children&&Array.isArray(e.children)&&e.children.length>0))),m.value=p.value.map((e=>e.label))}),{immediate:!0,deep:!0}),(e,a)=>{const s=I,t=L;return d(),o("div",H,["firstLetter"===c(r)?(d(),o("div",J,[i(t,{"highlight-color":"$zaui-brand","index-list":m.value,sticky:!1},{default:n((()=>[(d(!0),o(g,null,h(p.value,(e=>(d(),o(g,{key:e.label},[i(s,{index:`${e.label}`},null,8,["index"]),(d(!0),o(g,null,h(e.children,(e=>(d(),k(P,{key:e.agentCustomerId,data:e,disabled:c(u),onOnDelete:y,onOnClose:v},null,8,["data","disabled"])))),128))],64)))),128))])),_:1},8,["index-list"])])):(d(),o("div",Q,[(d(!0),o(g,null,h(c(l),(e=>(d(),k(P,{key:e.agentCustomerId,data:e,disabled:c(u),onOnDelete:y,onOnClose:v},null,8,["data","disabled"])))),128))]))])}}}),[["__scopeId","data-v-39001efa"]]);const X={class:"page page-customer-list"},Y={class:"search-bar"},Z={key:0,style:{"padding-top":"50px"}},ee=e({name:"CustomerList"}),ae=e({...ee,props:{isShow:{type:Boolean,default:!0}},emits:["closeCustomerPopoup"],setup(e,{emit:a}){const t=s(),{selectedType:l,relation:r}=t.query,n=w({keyword:void 0,show:!1,list:[]}),p=f(!1),m=async e=>{if(p.value)return;p.value=!0,x.loading("加载中...");const a={pageNum:1,pageSize:999,accessKey:"ToDo",keyword:n.keyword||"",relation:r,customerType:B[l.toLocaleUpperCase()]||3,...e};T(a).then((e=>{var a;const s=[];Object.keys((null==(a=e.data)?void 0:a.customersMap)||{}).forEach((a=>{s.push({label:a,children:e.data.customersMap[a]})})),n.list=s})).finally((()=>{p.value=!1,x.clear()}))};C((()=>{m({keyword:""})})),q((()=>{}));const v=()=>{m({keyword:n.keyword})};return(e,a)=>{var s;const t=O,l=N;return d(),o("div",X,[u("div",Y,[i(t,{modelValue:c(n).keyword,"onUpdate:modelValue":a[0]||(a[0]=e=>c(n).keyword=e),placeholder:"客户 姓名/手机号",onSearch:v},null,8,["modelValue"])]),i(W,{data:c(n).list,type:"firstLetter",disabled:!1},null,8,["data"]),(null==(s=c(n).list)?void 0:s.length)?y("",!0):(d(),o("div",Z,[i(l,{title:p.value?"加载中...":"暂无客户"},null,8,["title"])]))])}}});export{ae as default};
