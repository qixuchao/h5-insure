import{d as e,cC as a,i as s,t,k as l,ay as r,o as d,c as o,b as i,w as n,a as c,u,e as p,v as m,f as y,ah as v,j as f,E as h,F as g,s as b,p as k,_ as w,r as j,aH as C,l as x,T as q,ci as O,A as N}from"./index-67e7dac2.js";import{g as T}from"./third-143b3cee.js";import{S as _,I,a as L,b as S}from"./search-dc1fc3d1.js";import{f as A,m as D,g as B}from"./gender-bdd67324.js";import{d as V}from"./util-9c1fed23.js";import{O as z}from"./questionnaire-42dcb602.js";const E={class:"customer-list-item"},M={class:"left"},U=["src"],$={class:"left-item"},F={class:"name"},H={key:0,class:"cert-no"},K={class:"cert-type-name"},P=e({name:"item"}),G=e({...P,props:{data:{type:Object,required:!1,default:()=>Object},disabled:{type:Boolean,required:!1,default:()=>!0}},setup(e){const f=e;a();const h=s(),{data:g,disabled:b}=t(f),k=l((()=>r().diff(g.value.birthday,"y")));g.value.id,g.value.customerType;const w=e=>{V({...g.value,certNo:g.value.originCertNo}),v("customerDetail",{...h.query,customerId:g.value.id})};return(e,a)=>{const s=_;return d(),o("div",E,[i(s,null,{default:n((()=>{var e,a;return[c("div",{class:"list-item",onClick:w},[c("div",M,[c("div",null,[c("img",{src:u(g).gender?1==+u(g).gender?u(A):u(D):u(B),alt:"",class:"mf"},null,8,U)]),c("div",null,[c("div",$,[c("div",F,p(u(g).customerName)+" | "+p(u(k))+"岁",1),(null==(e=u(g))?void 0:e.certNo)&&1==+(null==(a=u(g))?void 0:a.certType)?(d(),o("div",H,[m(p(u(g).certNo)+" ",1),c("span",K,p(u(g).certTypeName),1)])):y("",!0)])])])])]})),_:1})])}}});const J={class:"customer-list"},Q={key:0,class:"list-pr"},R={key:1,class:"list-pr"},W=e({name:"list"});var X=w(e({...W,props:{data:{type:Array,required:!0,default:()=>[]},type:{type:String,required:!0,default:()=>"firstLetter"},disabled:{type:Boolean,required:!1,default:()=>!0}},emits:["on-delete","on-close"],setup(e,{emit:a}){const s=e,{data:l,type:r,disabled:c}=t(s),p=f([]),m=f([]),y=e=>{a("on-delete",e)},v=e=>{a("on-close",e),console.log("这里关闭弹窗1111222----",e)};return h((()=>s.data),(()=>{l.value=s.data||[],console.log("data",l),p.value=l.value.filter((e=>!!(e.children&&Array.isArray(e.children)&&e.children.length>0))),m.value=p.value.map((e=>e.label))}),{immediate:!0,deep:!0}),(e,a)=>{const s=I,t=L;return d(),o("div",J,["firstLetter"===u(r)?(d(),o("div",Q,[i(t,{"highlight-color":"$zaui-brand","index-list":m.value,sticky:!1},{default:n((()=>[(d(!0),o(g,null,b(p.value,(e=>(d(),o(g,{key:e.label},[i(s,{index:`${e.label}`},null,8,["index"]),(d(!0),o(g,null,b(e.children,(e=>(d(),k(G,{key:e.agentCustomerId,data:e,disabled:u(c),onOnDelete:y,onOnClose:v},null,8,["data","disabled"])))),128))],64)))),128))])),_:1},8,["index-list"])])):(d(),o("div",R,[(d(!0),o(g,null,b(u(l),(e=>(d(),k(G,{key:e.agentCustomerId,data:e,disabled:u(c),onOnDelete:y,onOnClose:v},null,8,["data","disabled"])))),128))]))])}}}),[["__scopeId","data-v-39001efa"]]);const Y={class:"page page-customer-list"},Z={class:"search-bar"},ee=["src"],ae={key:0,style:{"padding-top":"50px"}},se=e({name:"CustomerList"}),te=e({...se,props:{isShow:{type:Boolean,default:!0}},emits:["closeCustomerPopoup"],setup(e,{emit:a}){const t=s(),{selectedType:l,relation:r}=t.query,p=j({keyword:void 0,show:!1,list:[]}),m=f(!1),v=async e=>{if(m.value)return;m.value=!0,q.loading("加载中...");const a={pageNum:1,pageSize:999,accessKey:"ToDo",keyword:p.keyword||"",relation:r,customerType:z[l.toLocaleUpperCase()]||3,...e};T(a).then((e=>{var a;const s=[];Object.keys((null==(a=e.data)?void 0:a.customersMap)||{}).forEach((a=>{s.push({label:a,children:e.data.customersMap[a]})})),p.list=s})).finally((()=>{m.value=!1,q.clear()}))};C((()=>{v({keyword:""})})),x((()=>{}));const h=()=>{v({keyword:p.keyword})};return(e,a)=>{var s;const t=O,l=N;return d(),o("div",Y,[c("div",Z,[i(t,{modelValue:u(p).keyword,"onUpdate:modelValue":a[0]||(a[0]=e=>u(p).keyword=e),shape:"round",placeholder:"客户 姓名/手机号",class:"icon-sercher",onSearch:h},{"left-icon":n((()=>[c("img",{src:u(S),alt:"",class:"search-icon-img",style:{width:"22px",height:"23px"}},null,8,ee)])),_:1},8,["modelValue"])]),i(X,{data:u(p).list,type:"firstLetter",disabled:!1},null,8,["data"]),(null==(s=u(p).list)?void 0:s.length)?y("",!0):(d(),o("div",ae,[i(l,{title:m.value?"加载中...":"暂无客户"},null,8,["title"])]))])}}});export{te as default};
