import{ab as e,d as a,dx as t,j as r,k as l,aa as s,d_ as o,o as n,c as i,a as c,e as m,v as d,b as u,w,F as p,s as k,u as y,_ as v,ae as h,f as _,ao as g,bK as f,p as b,q as C,n as S,bN as x,bO as N,aB as T,aC as D,aD as I,aI as $,i as V,r as O,l as A,ad as j,ej as M,dC as P,L,ci as z,c6 as E,A as q}from"./index-43e4e33e.js";import{d as U,e as F}from"./trial-4641d264.js";import{C as R}from"./index-509caa40.js";import{g as B}from"./utils-eca0f656.js";import"./infoCollection-0e9ef64c.js";const H={class:"com-type-filter"},J={class:"wrapper"},W=["onClick"],K=a({name:"TypeFilter"});var Y=v(a({...K,props:{type:{type:Number,default:1},modelValue:{type:Number,default:0},items:{type:Array,default:()=>[]}},emits:["change","update:modelValue"],setup(e,{emit:a}){const v=e,h=[{label:"全部",value:""},{label:"长期",value:1},{label:"短期",value:3}],_=t(v,"modelValue",a),g=r(!1),f=l((()=>{switch(+v.type){case 1:return[{label:"全部",value:""},...F];case 2:return[{label:"全部",value:""},...U];default:return h}})),b=l((()=>{const e=f.value.find((e=>+e.value==+_.value));return console.log("types",f.value,"当前type：",e),e?e.label:"全部"}));return(e,t)=>{const r=s,l=o;return n(),i(p,null,[c("div",H,[c("div",{onClick:t[0]||(t[0]=e=>g.value=!0)},[c("span",null,m(b.value),1),d(),u(r,{name:"arrow-down"})])]),u(l,{show:g.value,style:{"background-color":"transparent"},onClick:t[1]||(t[1]=e=>g.value=!1)},{default:w((()=>[c("div",J,[(n(!0),i(p,null,k(f.value.filter((e=>+e.value!=+y(_))),(e=>(n(),i("div",{key:e.label,class:"block",onClick:t=>{return r=e,_.value=r.value,void a("change",r);var r}},m(e.label),9,W)))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-129d7a22"]]);const G={class:"com-card-data"},Q={class:"title"},X={class:"item-list"},Z={class:"label"},ee={class:"files"},ae=["onClick"],te=a({name:"Row"}),re=a({...te,props:{list:{type:Array,default:()=>[]}},emits:["preview"],setup(e,{emit:a}){const t=h(F),r=h(U),l=["产品说明书","产品条款","费率表","风险告知书","其他","投保规则","责任条款"],o=[{key:"riskCategory",label:"险种类别",value:"寿险",format:e=>r[e]},{key:"riskType",label:"主附险",value:"主险",format:e=>t[e]},{key:"insurancePeriodValues",label:"保障期间",value:"180天"},{key:"paymentPeriodValues",label:"交费期间",value:"终生"}],w=e=>o.filter((a=>e[a.key])).map((a=>{const t=e[a.key];return{...a,value:a.format?a.format(t):t}}));return(a,t)=>{const r=s,o=g;return n(),i("div",G,[(n(!0),i(p,null,k(e.list,(e=>(n(),i("div",{key:e.riskId,class:"card"},[c("div",Q,[d(m(e.riskName),1),u(r,{name:"arrow",color:"#c2c2c2"})]),c("div",X,[(n(!0),i(p,null,k(w(e),(({label:e,value:a})=>(n(),i(p,null,[a?(n(),i("div",{key:e,class:"item"},[c("span",Z,m(e)+":",1),d(),c("span",null,m(a),1)])):_("",!0)],64)))),256))]),c("div",ee,[(n(!0),i(p,null,k(null==e?void 0:e.attachmentDetailVOS,(e=>(n(),i("div",{key:e.riskId,class:"file",onClick:t=>a.$emit("preview",e)},[u(o,{name:l.includes(e.categoryName)?e.categoryName:"自定义"},null,8,["name"]),c("div",null,m(e.categoryName),1)],8,ae)))),128))])])))),128))])}}});const le={class:"com-row-tabs"},se={class:"row-data"},oe={class:"file-name"},ne=(e=>(D("data-v-a74781f4"),e=e(),I(),e))((()=>c("span",{class:"dot"},null,-1))),ie=["onClick"],ce=a({name:"Tabs"});var me=v(a({...ce,props:{tabs:{type:Array,default:()=>[]},list:{type:Array,default:()=>[]},active:{type:String,default:""}},emits:["@update:active","preview"],setup(e,{emit:a}){const l=t(e,"active",a),s=r(!1);return(t,r)=>{const o=x,d=N,v=g,h=f,D=R,I=T;return n(),i(p,null,[c("div",le,[e.tabs.length?(n(),b(d,{key:0,active:y(l),"onUpdate:active":r[0]||(r[0]=e=>C(l)?l.value=e:null),class:S(["tabs",e.tabs.length>3?"w80":""])},{default:w((()=>[(n(!0),i(p,null,k(e.tabs,(e=>(n(),b(o,{key:e,name:e,title:e},null,8,["name","title"])))),128))])),_:1},8,["active","class"])):_("",!0),e.tabs.length>3?(n(),i("div",{key:1,class:"more-arrow",onClick:r[1]||(r[1]=e=>s.value=!0)},[u(v,{name:"down-fill",color:"red"})])):_("",!0)]),c("div",se,[u(D,null,{default:w((()=>[(n(!0),i(p,null,k(e.list,(e=>(n(),b(h,{key:e.id,"is-link":"",onClick:a=>t.$emit("preview",e)},{title:w((()=>[c("div",oe,[ne,c("span",null,m(e.displayName),1)])])),_:2},1032,["onClick"])))),128))])),_:1})]),u(I,{show:s.value,title:"已选类别",onClose:r[2]||(r[2]=e=>s.value=!1)},{default:w((()=>[(n(!0),i(p,null,k(e.tabs,((e,t)=>(n(),i("div",{key:t,class:S(["tab-item",e==y(l)?"active":""]),onClick:t=>(e=>{l.value=e,s.value=!1,a("@update:active",e)})(e)},[c("div",null,m(e),1)],10,ie)))),128))])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-a74781f4"]]);function de(e){function a(){const a={watermark_txt:"text",watermark_x:20,watermark_y:20,watermark_rows:20,watermark_cols:20,watermark_x_space:100,watermark_y_space:50,watermark_color:"#f5ecec",watermark_alpha:.4,watermark_fontsize:"13px",watermark_font:"微软雅黑",watermark_width:210,watermark_height:80,watermark_angle:15};Object.assign(a,e);const t=document.createDocumentFragment(),r=Math.max(document.body.scrollWidth,document.body.clientWidth),l=r-.015*r,s=Math.max(document.body.scrollHeight,document.body.clientHeight)-30;let o,n;(0===a.watermark_cols||parseInt(a.watermark_x+a.watermark_width*a.watermark_cols+a.watermark_x_space*(a.watermark_cols-1))>l)&&(a.watermark_cols=parseInt((l-a.watermark_x+a.watermark_x_space)/(a.watermark_width+a.watermark_x_space)),a.watermark_x_space=parseInt((l-a.watermark_x-a.watermark_width*a.watermark_cols)/(a.watermark_cols-1))),(0===a.watermark_rows||parseInt(a.watermark_y+a.watermark_height*a.watermark_rows+a.watermark_y_space*(a.watermark_rows-1))>s)&&(a.watermark_rows=parseInt((a.watermark_y_space+s-a.watermark_y)/(a.watermark_height+a.watermark_y_space)),a.watermark_y_space=parseInt((s-a.watermark_y-a.watermark_height*a.watermark_rows)/(a.watermark_rows-1)));for(let e=0;e<a.watermark_rows;e+=1){n=a.watermark_y+(a.watermark_y_space+a.watermark_height)*e;for(let r=0;r<a.watermark_cols;r+=1){o=a.watermark_x+(a.watermark_width+a.watermark_x_space)*r;const l=document.createElement("div");l.id=`maskDiv${e}${r}`,l.className="maskDiv",l.appendChild(document.createTextNode(a.watermark_txt)),l.style.webkitTransform=`rotate(-${a.watermark_angle}deg)`,l.style.MozTransform=`rotate(-${a.watermark_angle}deg)`,l.style.msTransform=`rotate(-${a.watermark_angle}deg)`,l.style.OTransform=`rotate(-${a.watermark_angle}deg)`,l.style.transform=`rotate(-${a.watermark_angle}deg)`,l.style.visibility="",l.style.position="absolute",l.style.left=`${o}px`,l.style.top=`${n}px`,l.style.overflow="hidden",l.style.zIndex="9999",l.style.pointerEvents="none",l.style.opacity=a.watermark_alpha,l.style.fontSize=a.watermark_fontsize,l.style.fontFamily=a.watermark_font,l.style.color=a.watermark_color,l.style.textAlign="center",l.style.width=`${a.watermark_width}px`,l.style.height=`${a.watermark_height}px`,l.style.display="block",t.appendChild(l)}}document.body.appendChild(t)}const t=$((function(){document.querySelectorAll(".maskDiv").forEach((e=>{e.parentNode.removeChild(e)})),a()}),500);window.addEventListener("resize",t),a()}const ue={class:"page page-product-lib"},we={key:1,class:"tac",style:{"margin-top":"50px"}},pe={class:"review-pdf"},ke=a({name:"ProductLib"});var ye=v(a({...ke,setup(a){const t=V(),{preview:s=!1,insurerCode:o="lianlife"}=t.query,m=O({rowDataMap:{},cardDatas:[],tabs:[],currentTab:""}),d=l((()=>(console.log("rowDatas",m.rowDataMap,m.tabs,m.currentTab),m.rowDataMap[m.currentTab]))),p=/Mobi|Android|iPhone/i.test(navigator.userAgent),k=r({id:"",insurerCode:"lianlife",showStyle:1,materialCategoryShowStyle:1,riskName:"",showStyleDetails:[],isShowStopSellingLabel:"Y",showCategoryIds:[],showCategoryName:[],showStyleDetailName:[]}),v=r(!0),h=(a=(()=>{}))=>{((a={})=>e({url:"/api/app/insure/product/category/queryProductBoxConfig",method:"POST",data:a}))({insurerCode:o}).then((e=>{var t;console.log("获取配置成功",e),k.value=e.data,k.value.riskName="",m.currentTab=null==(t=m.tabs)?void 0:t[0],a&&(null==a||a())}))},g=()=>{v.value=!0,((a={})=>e({url:"/api/app/insure/product/category/riskAttachmentList",method:"POST",data:a}))({insurerCode:o,materialCategoryShowStyle:k.value.materialCategoryShowStyle,showStyle:k.value.showStyle,riskName:k.value.riskName,riskType:k.value.riskType,categoryId:k.value.showCategoryIds,showStyleDetails:k.value.showStyleDetails}).then((e=>{var a;const{attachmentListResMap:t,attachmentDetailVOS:r}=e.data||{attachmentListResMap:{},attachmentDetailVOS:[]};m.rowDataMap={...t};const l=Object.keys(t);m.tabs=null==(a=k.value.showCategoryName)?void 0:a.filter((e=>l.includes(e))),m.cardDatas=r,console.log("state.rowDatas",d)})).finally((()=>{v.value=!1}))},C=()=>{k.value.id?g():h((()=>{g()}))},S=r({attachmentName:"",attachmentContent:"",attachmentSource:1,show:!1}),x=O({name:"测试水印",agentCode:"1234"}),N=e=>{console.log("文件预览",x),S.value={...e,show:!0},de({watermark_txt:`${x.name}\r\n${x.agentCode}`,watermark_color:"#333",watermark_angle:30,watermark_width:100,watermark_height:60})},D=e=>{console.log("关闭文件预览"),document.querySelectorAll(".maskDiv").forEach((e=>{e.parentNode.removeChild(e)})),S.value={attachmentName:"",attachmentContent:"",attachmentSource:1,show:!1}};return A((()=>{s?window.addEventListener("message",(e=>{var a;console.log("子应用收到的数据",e.data);"object"==typeof JSON.parse(e.data)&&(k.value={...k.value,...JSON.parse(e.data)},m.currentTab=null==(a=m.tabs)?void 0:a[0],g()),console.log("合并后的config:",k.value)}),!1):h();const e=j.get(M);e&&(x.name=e.name,x.agentCode=e.agentCode),setTimeout((()=>{C()}),1e3)})),(e,a)=>{const t=z,r=f,l=P,s=L,o=q,h=E,g=T;return n(),i("div",ue,[u(l,null,{default:w((()=>[u(r,{class:"top-bar"},{default:w((()=>[c("div",null,[u(Y,{modelValue:y(k).riskType,"onUpdate:modelValue":[a[0]||(a[0]=e=>y(k).riskType=e),a[1]||(a[1]=e=>y(k).riskType=e)],type:y(k).materialCategoryShowStyle,onChange:C},null,8,["modelValue","type"])]),u(t,{modelValue:y(k).riskName,"onUpdate:modelValue":a[2]||(a[2]=e=>y(k).riskName=e),"left-icon":"none",placeholder:"请搜索险种名称",shape:"round","clear-trigger":"always","show-action":"",clearable:y(p),onSearch:C},{action:w((()=>[c("div",{onClick:C},"搜索")])),_:1},8,["modelValue","clearable"])])),_:1})])),_:1}),c("div",null,[y(v)||1!=+y(k).showStyle?_("",!0):(n(),b(me,{key:0,active:y(m).currentTab,tabs:y(m).tabs,list:y(d),"onUpdate:active":a[3]||(a[3]=e=>y(m).currentTab=e),onPreview:N},null,8,["active","tabs","list"])),y(v)?(n(),i("div",we,[u(s,{type:"spinner"})])):_("",!0),y(v)||2!=+y(k).showStyle?_("",!0):(n(),b(re,{key:2,list:y(m).cardDatas,onPreview:N},null,8,["list"])),y(v)||y(m).cardDatas.length?_("",!0):(n(),b(o,{key:3,title:"没有找到产品资料",style:{"margin-top":"40px"}}))]),u(g,{show:y(S).show,"onUpdate:show":a[4]||(a[4]=e=>y(S).show=e),class:"pre-file-wrap",title:y(S).attachmentName,position:"bottom","close-on-click-overlay":!1,style:{overflow:"hidden"},"header-style":{paddingRight:"40px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",paddingTop:"4px"},onClose:D},{default:w((()=>[c("div",pe,[u(h,{"is-iframe":!1,content:y(S).attachmentContent,type:y(B)(y(S).attachmentSource,y(S).attachmentContent)},null,8,["content","type"])])])),_:1},8,["show","title"])])}}}),[["__scopeId","data-v-c43b2a96"]]);export{ye as default};
