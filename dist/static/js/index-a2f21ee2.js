import{_ as e}from"./index-d0359ef1.js";import{d as a,dk as s,h as l,t,j as r,an as d,o,c as i,b as n,w as c,a as u,u as m,e as p,a8 as y,q as v,a9 as f,i as h,z as b,F as g,n as k,l as w,_ as j,r as x,av as O,O as q,T as C}from"./index-404eec03.js";import{S as N}from"./index-8f86058d.js";import{g as T}from"./third-aabebbc7.js";import{S as _,f as S,m as I,g as D,I as L,a as z,b as A}from"./search-69b49f55.js";import{s as B}from"./util-f7c56da2.js";import"./empty-ae586b6c.js";const V={class:"customer-list-item"},M={class:"left"},$=["src"],E={class:"left-item"},F={class:"name"},K={key:0,class:"cert-no"},P={class:"cert-type-name"},U=a({name:"item"}),G=a({...U,props:{data:{type:Object,required:!1,default:()=>Object},disabled:{type:Boolean,required:!1,default:()=>!0}},setup(e){const a=e;s();const h=l(),{data:b,disabled:g}=t(a),k=r((()=>d().diff(b.value.birthday,"y"))),w={id:b.value.id,customerType:b.value.customerType,customerName:"公孙林",certNo:"432523198301260085",certType:"1",birthday:"1983-01-26",gender:2},j=e=>{B(w||b.value),f("customerDetail",{...h.query,customerId:b.value.id})};return(e,a)=>{const s=_;return o(),i("div",V,[n(s,null,{default:c((()=>{var e,a;return[u("div",{class:"list-item",onClick:j},[u("div",M,[u("div",null,[u("img",{src:m(b).gender?"1"===m(b).gender?m(S):m(I):m(D),alt:"",class:"mf"},null,8,$)]),u("div",null,[u("div",E,[u("div",F,p(m(b).customerName)+" | "+p(m(k))+"岁",1),(null==(e=m(b))?void 0:e.certNo)&&1==+(null==(a=m(b))?void 0:a.certType)?(o(),i("div",K,[y(p(m(b).certNo)+" ",1),u("span",P,p(m(b).certTypeName),1)])):v("",!0)])])])])]})),_:1})])}}});const H={class:"customer-list"},J={key:0,class:"list-pr"},Q={key:1,class:"list-pr"},R=a({name:"list"});var W=j(a({...R,props:{data:{type:Array,required:!0,default:()=>[]},type:{type:String,required:!0,default:()=>"firstLetter"},disabled:{type:Boolean,required:!1,default:()=>!0}},emits:["on-delete","on-close"],setup(e,{emit:a}){const s=e,{data:l,type:r,disabled:d}=t(s),u=h([]),p=h([]),y=e=>{a("on-delete",e)},v=e=>{a("on-close",e),console.log("这里关闭弹窗1111222----",e)};return b((()=>s.data),(()=>{l.value=s.data||[],console.log("data",l),u.value=l.value.filter((e=>!!(e.children&&Array.isArray(e.children)&&e.children.length>0))),p.value=u.value.map((e=>e.label))}),{immediate:!0,deep:!0}),(e,a)=>{const s=L,t=z;return o(),i("div",H,["firstLetter"===m(r)?(o(),i("div",J,[n(t,{"highlight-color":"$zaui-brand","index-list":p.value,sticky:!1},{default:c((()=>[(o(!0),i(g,null,k(u.value,(e=>(o(),i(g,{key:e.label},[n(s,{index:`${e.label}`},null,8,["index"]),(o(!0),i(g,null,k(e.children,(e=>(o(),w(G,{key:e.agentCustomerId,data:e,disabled:m(d),onOnDelete:y,onOnClose:v},null,8,["data","disabled"])))),128))],64)))),128))])),_:1},8,["index-list"])])):(o(),i("div",Q,[(o(!0),i(g,null,k(m(l),(e=>(o(),w(G,{key:e.agentCustomerId,data:e,disabled:m(d),onOnDelete:y,onOnClose:v},null,8,["data","disabled"])))),128))]))])}}}),[["__scopeId","data-v-39001efa"]]);const X={class:"search-bar"},Y=["src"],Z={key:0,style:{"padding-top":"50px"}},ee=a({name:"CustomerList"}),ae=a({...ee,props:{isShow:{type:Boolean,default:!0}},emits:["closeCustomerPopoup"],setup(a,{emit:s}){const l=x({keyword:void 0,show:!1,list:[]}),t=h(!1),r=async e=>{if(t.value)return;t.value=!0,C.loading("加载中...");const a={pageNum:1,pageSize:999,accessKey:"ToDo",keyword:l.keyword||"",...e};T(a).then((e=>{var a;const s=[];Object.keys((null==(a=e.data)?void 0:a.customersMap)||{}).forEach((a=>{s.push({label:a,children:e.data.customersMap[a]})})),l.list=s})).finally((()=>{t.value=!1,C.clear()}))};O((()=>{console.log("111122"),r({keyword:""})})),q((()=>{console.log("3333")}));const d=()=>{r({keyword:l.keyword})};return(a,s)=>{var r;const p=N,y=e;return o(),i("div",null,[u("div",X,[n(p,{modelValue:m(l).keyword,"onUpdate:modelValue":s[0]||(s[0]=e=>m(l).keyword=e),shape:"round",placeholder:"客户 姓名/手机号",class:"icon-sercher",onSearch:d},{"left-icon":c((()=>[u("img",{src:m(A),alt:"",class:"search-icon-img",style:{width:"22px",height:"23px"}},null,8,Y)])),_:1},8,["modelValue"])]),n(W,{data:m(l).list,type:"firstLetter",disabled:!1},null,8,["data"]),(null==(r=m(l).list)?void 0:r.length)?v("",!0):(o(),i("div",Z,[n(y,{title:t.value?"加载中...":"暂无客户"},null,8,["title"])]))])}}});export{ae as default};
