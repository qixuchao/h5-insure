import{_ as e}from"./index-bd39e722.js";import{d as a,cq as s,i as t,t as l,k as r,ap as o,o as d,c as i,b as n,w as c,a as u,u as p,e as m,a8 as y,f as v,a9 as f,j as b,z as h,F as g,q as k,m as j,_ as w,r as x,aG as q,O as C,T as O}from"./index-249cbd63.js";import{S as N}from"./index-5a3a7ca4.js";import{g as T}from"./third-fb2f81b7.js";import{S as _,f as S,m as I,g as L,I as D,a as z,b as A}from"./search-37ba83b6.js";import{d as B}from"./util-a5f2a746.js";import{O as V}from"./questionnaire-42dcb602.js";import"./empty-ae586b6c.js";const M={class:"customer-list-item"},U={class:"left"},$=["src"],E={class:"left-item"},F={class:"name"},G={key:0,class:"cert-no"},K={class:"cert-type-name"},P=a({name:"item"}),H=a({...P,props:{data:{type:Object,required:!1,default:()=>Object},disabled:{type:Boolean,required:!1,default:()=>!0}},setup(e){const a=e;s();const b=t(),{data:h,disabled:g}=l(a),k=r((()=>o().diff(h.value.birthday,"y")));h.value.id,h.value.customerType;const j=e=>{B({...h.value,certNo:h.value.originCertNo}),f("customerDetail",{...b.query,customerId:h.value.id})};return(e,a)=>{const s=_;return d(),i("div",M,[n(s,null,{default:c((()=>{var e,a;return[u("div",{class:"list-item",onClick:j},[u("div",U,[u("div",null,[u("img",{src:p(h).gender?1==+p(h).gender?p(S):p(I):p(L),alt:"",class:"mf"},null,8,$)]),u("div",null,[u("div",E,[u("div",F,m(p(h).customerName)+" | "+m(p(k))+"岁",1),(null==(e=p(h))?void 0:e.certNo)&&1==+(null==(a=p(h))?void 0:a.certType)?(d(),i("div",G,[y(m(p(h).certNo)+" ",1),u("span",K,m(p(h).certTypeName),1)])):v("",!0)])])])])]})),_:1})])}}});const J={class:"customer-list"},Q={key:0,class:"list-pr"},R={key:1,class:"list-pr"},W=a({name:"list"});var X=w(a({...W,props:{data:{type:Array,required:!0,default:()=>[]},type:{type:String,required:!0,default:()=>"firstLetter"},disabled:{type:Boolean,required:!1,default:()=>!0}},emits:["on-delete","on-close"],setup(e,{emit:a}){const s=e,{data:t,type:r,disabled:o}=l(s),u=b([]),m=b([]),y=e=>{a("on-delete",e)},v=e=>{a("on-close",e),console.log("这里关闭弹窗1111222----",e)};return h((()=>s.data),(()=>{t.value=s.data||[],console.log("data",t),u.value=t.value.filter((e=>!!(e.children&&Array.isArray(e.children)&&e.children.length>0))),m.value=u.value.map((e=>e.label))}),{immediate:!0,deep:!0}),(e,a)=>{const s=D,l=z;return d(),i("div",J,["firstLetter"===p(r)?(d(),i("div",Q,[n(l,{"highlight-color":"$zaui-brand","index-list":m.value,sticky:!1},{default:c((()=>[(d(!0),i(g,null,k(u.value,(e=>(d(),i(g,{key:e.label},[n(s,{index:`${e.label}`},null,8,["index"]),(d(!0),i(g,null,k(e.children,(e=>(d(),j(H,{key:e.agentCustomerId,data:e,disabled:p(o),onOnDelete:y,onOnClose:v},null,8,["data","disabled"])))),128))],64)))),128))])),_:1},8,["index-list"])])):(d(),i("div",R,[(d(!0),i(g,null,k(p(t),(e=>(d(),j(H,{key:e.agentCustomerId,data:e,disabled:p(o),onOnDelete:y,onOnClose:v},null,8,["data","disabled"])))),128))]))])}}}),[["__scopeId","data-v-39001efa"]]);const Y={class:"page page-customer-list"},Z={class:"search-bar"},ee=["src"],ae={key:0,style:{"padding-top":"50px"}},se=a({name:"CustomerList"}),te=a({...se,props:{isShow:{type:Boolean,default:!0}},emits:["closeCustomerPopoup"],setup(a,{emit:s}){const l=t(),{selectedType:r,relation:o}=l.query,m=x({keyword:void 0,show:!1,list:[]}),y=b(!1),f=async e=>{if(y.value)return;y.value=!0,O.loading("加载中...");const a={pageNum:1,pageSize:999,accessKey:"ToDo",keyword:m.keyword||"",relation:o,customerType:V[r.toLocaleUpperCase()]||3,...e};T(a).then((e=>{var a;const s=[];Object.keys((null==(a=e.data)?void 0:a.customersMap)||{}).forEach((a=>{s.push({label:a,children:e.data.customersMap[a]})})),m.list=s})).finally((()=>{y.value=!1,O.clear()}))};q((()=>{f({keyword:""})})),C((()=>{}));const h=()=>{f({keyword:m.keyword})};return(a,s)=>{var t;const l=N,r=e;return d(),i("div",Y,[u("div",Z,[n(l,{modelValue:p(m).keyword,"onUpdate:modelValue":s[0]||(s[0]=e=>p(m).keyword=e),shape:"round",placeholder:"客户 姓名/手机号",class:"icon-sercher",onSearch:h},{"left-icon":c((()=>[u("img",{src:p(A),alt:"",class:"search-icon-img",style:{width:"22px",height:"23px"}},null,8,ee)])),_:1},8,["modelValue"])]),n(X,{data:p(m).list,type:"firstLetter",disabled:!1},null,8,["data"]),(null==(t=p(m).list)?void 0:t.length)?v("",!0):(d(),i("div",ae,[n(r,{title:y.value?"加载中...":"暂无客户"},null,8,["title"])]))])}}});export{te as default};
