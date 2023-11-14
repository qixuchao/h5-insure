import{a2 as e,d as a,dv as t,j as l,k as s,bt as o,dW as r,o as n,c as i,a as c,e as u,u as d,a8 as m,b as p,w as v,F as y,q as w,_ as h,ar as b,f as k,af as f,ce as g,cf as C,by as S,m as _,p as N,n as T,au as D,av as V,aw as j,i as x,r as O,O as P,ag as A,eg as I,dA as L,L as M,bT as U}from"./index-29312576.js";import{_ as R}from"./index-a2f996f6.js";import{S as $}from"./index-de25e814.js";import{d as q,e as F}from"./trial-539554b9.js";import{C as J}from"./index-fb0e5aeb.js";import{g as B}from"./utils-6db2721f.js";import{w as E,c as W}from"./watermark-2ca9c38c.js";import"./empty-ae586b6c.js";import"./infoCollection-d9103528.js";const Y={class:"com-type-filter"},z={class:"wrapper"},G=["onClick"],H=a({name:"TypeFilter"});var K=h(a({...H,props:{type:{type:Number,default:1},modelValue:{type:Number,default:0},items:{type:Array,default:()=>[]}},emits:["change","update:modelValue"],setup(e,{emit:a}){const h=e,b=[{label:"全部",value:""},{label:"长期",value:1},{label:"短期",value:3}],k=t(h,"modelValue",a),f=l(!1),g=s((()=>{switch(+h.type){case 1:return[{label:"全部",value:""},...F];case 2:return[{label:"全部",value:""},...q];default:return b}})),C=s((()=>{const e=g.value.find((e=>+e.value==+k.value));return console.log("types",g.value,"当前type：",e),e?e.label:"全部"}));return(e,t)=>{const l=o,s=r;return n(),i(y,null,[c("div",Y,[c("div",{onClick:t[0]||(t[0]=e=>f.value=!0)},[c("span",null,u(d(C)),1),m(),p(l,{name:"arrow-down"})])]),p(s,{show:f.value,style:{"background-color":"transparent"},onClick:t[1]||(t[1]=e=>f.value=!1)},{default:v((()=>[c("div",z,[(n(!0),i(y,null,w(d(g).filter((e=>+e.value!=+d(k))),(e=>(n(),i("div",{key:e.label,class:"block",onClick:t=>{return l=e,k.value=l.value,void a("change",l);var l}},u(e.label),9,G)))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-129d7a22"]]);const Q={class:"com-card-data"},X={class:"title"},Z={class:"item-list"},ee={class:"label"},ae={class:"files"},te=["onClick"],le=a({name:"Row"}),se=a({...le,props:{list:{type:Array,default:()=>[]}},emits:["preview"],setup(e,{emit:a}){const t=b(F),l=b(q),s=["产品说明书","产品条款","费率表","风险告知书","其他","投保规则","责任条款"],r=[{key:"riskCategory",label:"险种类别",value:"寿险",format:e=>l[e]},{key:"riskType",label:"主附险",value:"主险",format:e=>t[e]},{key:"insurancePeriodValues",label:"保障期间",value:"180天"},{key:"paymentPeriodValues",label:"交费期间",value:"终生"}],d=e=>r.filter((a=>e[a.key])).map((a=>{const t=e[a.key];return{...a,value:a.format?a.format(t):t}}));return(a,t)=>{const l=o,r=f;return n(),i("div",Q,[(n(!0),i(y,null,w(e.list,(e=>(n(),i("div",{key:e.riskId,class:"card"},[c("div",X,[m(u(e.riskName),1),p(l,{name:"arrow",color:"#c2c2c2"})]),c("div",Z,[(n(!0),i(y,null,w(d(e),(({label:e,value:a})=>(n(),i(y,null,[a?(n(),i("div",{key:e,class:"item"},[c("span",ee,u(e)+":",1),m(),c("span",null,u(a),1)])):k("",!0)],64)))),256))]),c("div",ae,[(n(!0),i(y,null,w(null==e?void 0:e.attachmentDetailVOS,(e=>(n(),i("div",{key:e.riskId,class:"file",onClick:t=>a.$emit("preview",e)},[p(r,{name:s.includes(e.categoryName)?e.categoryName:"自定义"},null,8,["name"]),c("div",null,u(e.categoryName),1)],8,te)))),128))])])))),128))])}}});const oe={class:"com-row-tabs"},re={class:"row-data"},ne={class:"file-name"},ie=(e=>(V("data-v-a74781f4"),e=e(),j(),e))((()=>c("span",{class:"dot"},null,-1))),ce=["onClick"],ue=a({name:"Tabs"});var de=h(a({...ue,props:{tabs:{type:Array,default:()=>[]},list:{type:Array,default:()=>[]},active:{type:String,default:""}},emits:["@update:active","preview"],setup(e,{emit:a}){const s=t(e,"active",a),o=l(!1);return(t,l)=>{const r=g,m=C,h=f,b=S,V=J,j=D;return n(),i(y,null,[c("div",oe,[e.tabs.length?(n(),_(m,{key:0,active:d(s),"onUpdate:active":l[0]||(l[0]=e=>N(s)?s.value=e:null),class:T(["tabs",e.tabs.length>3?"w80":""])},{default:v((()=>[(n(!0),i(y,null,w(e.tabs,(e=>(n(),_(r,{key:e,name:e,title:e},null,8,["name","title"])))),128))])),_:1},8,["active","class"])):k("",!0),e.tabs.length>3?(n(),i("div",{key:1,class:"more-arrow",onClick:l[1]||(l[1]=e=>o.value=!0)},[p(h,{name:"down-fill",color:"red"})])):k("",!0)]),c("div",re,[p(V,null,{default:v((()=>[(n(!0),i(y,null,w(e.list,(e=>(n(),_(b,{key:e.id,"is-link":"",onClick:a=>t.$emit("preview",e)},{title:v((()=>[c("div",ne,[ie,c("span",null,u(e.displayName),1)])])),_:2},1032,["onClick"])))),128))])),_:1})]),p(j,{show:o.value,title:"已选类别",onClose:l[2]||(l[2]=e=>o.value=!1)},{default:v((()=>[(n(!0),i(y,null,w(e.tabs,((e,t)=>(n(),i("div",{key:t,class:T(["tab-item",e==d(s)?"active":""]),onClick:t=>(e=>{s.value=e,o.value=!1,a("@update:active",e)})(e)},[c("div",null,u(e),1)],10,ce)))),128))])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-a74781f4"]]);const me={class:"page page-product-lib"},pe={key:1,class:"tac",style:{"margin-top":"50px"}},ve={class:"review-pdf"},ye=a({name:"ProductLib"});var we=h(a({...ye,setup(a){const t=x(),{preview:o=!1,insurerCode:r="lianlife"}=t.query,u=O({rowDataMap:{},cardDatas:[],tabs:[],currentTab:""}),m=s((()=>(console.log("rowDatas",u.rowDataMap,u.tabs,u.currentTab),u.rowDataMap[u.currentTab]))),y=/Mobi|Android|iPhone/i.test(navigator.userAgent),w=l({id:"",insurerCode:"lianlife",showStyle:1,materialCategoryShowStyle:1,riskName:"",showStyleDetails:[],isShowStopSellingLabel:"Y",showCategoryIds:[],showCategoryName:[],showStyleDetailName:[]}),h=l(!0),b=(a=(()=>{}))=>{((a={})=>e({url:"/api/app/insure/product/category/queryProductBoxConfig",method:"POST",data:a}))({insurerCode:r}).then((e=>{var t;console.log("获取配置成功",e),w.value=e.data,w.value.riskName="",u.currentTab=null==(t=u.tabs)?void 0:t[0],a&&(null==a||a())}))},f=()=>{h.value=!0,((a={})=>e({url:"/api/app/insure/product/category/riskAttachmentList",method:"POST",data:a}))({insurerCode:r,materialCategoryShowStyle:w.value.materialCategoryShowStyle,showStyle:w.value.showStyle,riskName:w.value.riskName,riskType:w.value.riskType,categoryId:w.value.showCategoryIds,showStyleDetails:w.value.showStyleDetails}).then((e=>{var a;const{attachmentListResMap:t,attachmentDetailVOS:l}=e.data||{attachmentListResMap:{},attachmentDetailVOS:[]};u.rowDataMap={...t};const s=Object.keys(t);u.tabs=null==(a=w.value.showCategoryName)?void 0:a.filter((e=>s.includes(e))),u.cardDatas=l,console.log("state.rowDatas",m)})).finally((()=>{h.value=!1}))},g=()=>{w.value.id?f():b((()=>{f()}))},C=l({attachmentName:"",attachmentContent:"",attachmentSource:1,show:!1}),N=O({name:"测试水印",agentCode:"1234"}),T=e=>{console.log("文件预览",N),C.value={...e,show:!0},E({watermark_txt:`${N.name}\r\n${N.agentCode}`,watermark_color:"#333",watermark_angle:30,watermark_width:100,watermark_height:60})},V=e=>{console.log("关闭文件预览"),W(),C.value={attachmentName:"",attachmentContent:"",attachmentSource:1,show:!1}};return P((()=>{o?window.addEventListener("message",(e=>{var a;console.log("子应用收到的数据",e.data);"object"==typeof JSON.parse(e.data)&&(w.value={...w.value,...JSON.parse(e.data)},u.currentTab=null==(a=u.tabs)?void 0:a[0],f()),console.log("合并后的config:",w.value)}),!1):b();const e=A.get(I);e&&(N.name=e.name,N.agentCode=e.agentCode),setTimeout((()=>{g()}),1e3)})),(e,a)=>{const t=$,l=S,s=L,o=M,r=R,b=U,f=D;return n(),i("div",me,[p(s,null,{default:v((()=>[p(l,{class:"top-bar"},{default:v((()=>[c("div",null,[p(K,{modelValue:d(w).riskType,"onUpdate:modelValue":[a[0]||(a[0]=e=>d(w).riskType=e),a[1]||(a[1]=e=>d(w).riskType=e)],type:d(w).materialCategoryShowStyle,onChange:g},null,8,["modelValue","type"])]),p(t,{modelValue:d(w).riskName,"onUpdate:modelValue":a[2]||(a[2]=e=>d(w).riskName=e),"left-icon":"none",placeholder:"请搜索险种名称",shape:"round","clear-trigger":"always","show-action":"",clearable:d(y),onSearch:g},{action:v((()=>[c("div",{onClick:g},"搜索")])),_:1},8,["modelValue","clearable"])])),_:1})])),_:1}),c("div",null,[d(h)||1!=+d(w).showStyle?k("",!0):(n(),_(de,{key:0,active:d(u).currentTab,tabs:d(u).tabs,list:d(m),"onUpdate:active":a[3]||(a[3]=e=>d(u).currentTab=e),onPreview:T},null,8,["active","tabs","list"])),d(h)?(n(),i("div",pe,[p(o,{type:"spinner"})])):k("",!0),d(h)||2!=+d(w).showStyle?k("",!0):(n(),_(se,{key:2,list:d(u).cardDatas,onPreview:T},null,8,["list"])),d(h)||d(u).cardDatas.length?k("",!0):(n(),_(r,{key:3,title:"没有找到产品资料",style:{"margin-top":"40px"}}))]),p(f,{show:d(C).show,"onUpdate:show":a[4]||(a[4]=e=>d(C).show=e),class:"pre-file-wrap",title:d(C).attachmentName,position:"bottom","close-on-click-overlay":!1,style:{overflow:"hidden"},"header-style":{paddingRight:"40px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",paddingTop:"4px"},onClose:V},{default:v((()=>[c("div",ve,[p(b,{"is-iframe":!1,content:d(C).attachmentContent,type:d(B)(d(C).attachmentSource,d(C).attachmentContent)},null,8,["content","type"])])])),_:1},8,["show","title"])])}}}),[["__scopeId","data-v-c43b2a96"]]);export{we as default};
