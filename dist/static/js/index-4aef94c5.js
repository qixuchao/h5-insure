import{_ as e}from"./index-f4da48a4.js";import{d as a,cq as s,i as t,t as l,k as r,ap as d,o,c as i,b as n,w as c,a as u,u as p,e as m,a8 as y,f as v,a9 as f,j as h,z as b,F as g,q as k,m as j,_ as w,r as x,aG as q,O as C,T as O}from"./index-4f878428.js";import{S as N}from"./index-645beb27.js";import{g as T}from"./third-f776c1fd.js";import{S as _,f as S,m as I,g as L,I as D,a as z,b as A}from"./search-3027e706.js";import{d as B}from"./util-15e4deda.js";import{O as V}from"./questionnaire-42dcb602.js";import"./empty-ae586b6c.js";const M={class:"customer-list-item"},U={class:"left"},$=["src"],E={class:"left-item"},F={class:"name"},G={key:0,class:"cert-no"},K={class:"cert-type-name"},P=a({name:"item"}),H=a({...P,props:{data:{type:Object,required:!1,default:()=>Object},disabled:{type:Boolean,required:!1,default:()=>!0}},setup(e){const a=e;s();const h=t(),{data:b,disabled:g}=l(a),k=r((()=>d().diff(b.value.birthday,"y")));b.value.id,b.value.customerType;const j=e=>{B({...b.value,certNo:b.value.originCertNo}),f("customerDetail",{...h.query,customerId:b.value.id})};return(e,a)=>{const s=_;return o(),i("div",M,[n(s,null,{default:c((()=>{var e,a;return[u("div",{class:"list-item",onClick:j},[u("div",U,[u("div",null,[u("img",{src:p(b).gender?1==+p(b).gender?p(S):p(I):p(L),alt:"",class:"mf"},null,8,$)]),u("div",null,[u("div",E,[u("div",F,m(p(b).customerName)+" | "+m(p(k))+"岁",1),(null==(e=p(b))?void 0:e.certNo)&&1==+(null==(a=p(b))?void 0:a.certType)?(o(),i("div",G,[y(m(p(b).certNo)+" ",1),u("span",K,m(p(b).certTypeName),1)])):v("",!0)])])])])]})),_:1})])}}});const J={class:"customer-list"},Q={key:0,class:"list-pr"},R={key:1,class:"list-pr"},W=a({name:"list"});var X=w(a({...W,props:{data:{type:Array,required:!0,default:()=>[]},type:{type:String,required:!0,default:()=>"firstLetter"},disabled:{type:Boolean,required:!1,default:()=>!0}},emits:["on-delete","on-close"],setup(e,{emit:a}){const s=e,{data:t,type:r,disabled:d}=l(s),u=h([]),m=h([]),y=e=>{a("on-delete",e)},v=e=>{a("on-close",e),console.log("这里关闭弹窗1111222----",e)};return b((()=>s.data),(()=>{t.value=s.data||[],console.log("data",t),u.value=t.value.filter((e=>!!(e.children&&Array.isArray(e.children)&&e.children.length>0))),m.value=u.value.map((e=>e.label))}),{immediate:!0,deep:!0}),(e,a)=>{const s=D,l=z;return o(),i("div",J,["firstLetter"===p(r)?(o(),i("div",Q,[n(l,{"highlight-color":"$zaui-brand","index-list":m.value,sticky:!1},{default:c((()=>[(o(!0),i(g,null,k(u.value,(e=>(o(),i(g,{key:e.label},[n(s,{index:`${e.label}`},null,8,["index"]),(o(!0),i(g,null,k(e.children,(e=>(o(),j(H,{key:e.agentCustomerId,data:e,disabled:p(d),onOnDelete:y,onOnClose:v},null,8,["data","disabled"])))),128))],64)))),128))])),_:1},8,["index-list"])])):(o(),i("div",R,[(o(!0),i(g,null,k(p(t),(e=>(o(),j(H,{key:e.agentCustomerId,data:e,disabled:p(d),onOnDelete:y,onOnClose:v},null,8,["data","disabled"])))),128))]))])}}}),[["__scopeId","data-v-39001efa"]]);const Y={class:"page page-customer-list"},Z={class:"search-bar"},ee=["src"],ae={key:0,style:{"padding-top":"50px"}},se=a({name:"CustomerList"}),te=a({...se,props:{isShow:{type:Boolean,default:!0}},emits:["closeCustomerPopoup"],setup(a,{emit:s}){const l=t(),{selectedType:r,relation:d}=l.query,m=x({keyword:void 0,show:!1,list:[]}),y=h(!1),f=async e=>{if(y.value)return;y.value=!0,O.loading("加载中...");const a={pageNum:1,pageSize:999,accessKey:"ToDo",keyword:m.keyword||"",relation:d,customerType:V[r.toLocaleUpperCase()]||3,...e};T(a).then((e=>{var a;const s=[];Object.keys((null==(a=e.data)?void 0:a.customersMap)||{}).forEach((a=>{s.push({label:a,children:e.data.customersMap[a]})})),m.list=s})).finally((()=>{y.value=!1,O.clear()}))};q((()=>{f({keyword:""})})),C((()=>{}));const b=()=>{f({keyword:m.keyword})};return(a,s)=>{var t;const l=N,r=e;return o(),i("div",Y,[u("div",Z,[n(l,{modelValue:p(m).keyword,"onUpdate:modelValue":s[0]||(s[0]=e=>p(m).keyword=e),shape:"round",placeholder:"客户 姓名/手机号",class:"icon-sercher",onSearch:b},{"left-icon":c((()=>[u("img",{src:p(A),alt:"",class:"search-icon-img",style:{width:"22px",height:"23px"}},null,8,ee)])),_:1},8,["modelValue"])]),n(X,{data:p(m).list,type:"firstLetter",disabled:!1},null,8,["data"]),(null==(t=p(m).list)?void 0:t.length)?v("",!0):(o(),i("div",ae,[n(r,{title:y.value?"加载中...":"暂无客户"},null,8,["title"])]))])}}});export{te as default};
