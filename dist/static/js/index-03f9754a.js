import{ab as a,d as e,dx as t,j as r,k as l,aa as s,dZ as o,o as n,c as i,a as c,e as m,v as d,b as u,w,F as p,s as k,u as y,_ as v,ae as h,f as _,ao as g,bK as b,p as f,q as C,n as S,bN as x,bO as N,aB as T,aC as D,aD as I,aI as $,i as V,r as O,l as j,ad as A,ej as M,dC as P,L,cj as z,c7 as E,A as q}from"./index-e2b7843f.js";import{d as U,e as F}from"./trial-a008bd06.js";import{C as R}from"./index-3ee07ad5.js";import{g as B}from"./utils-c28ee0d7.js";import"./infoCollection-92aa9ddb.js";const H={class:"com-type-filter"},J={class:"wrapper"},W=["onClick"],K=e({name:"TypeFilter"});var Y=v(e({...K,props:{type:{type:Number,default:1},modelValue:{type:Number,default:0},items:{type:Array,default:()=>[]}},emits:["change","update:modelValue"],setup(a,{emit:e}){const v=a,h=[{label:"全部",value:""},{label:"长期",value:1},{label:"短期",value:3}],_=t(v,"modelValue",e),g=r(!1),b=l((()=>{switch(+v.type){case 1:return[{label:"全部",value:""},...F];case 2:return[{label:"全部",value:""},...U];default:return h}})),f=l((()=>{const a=b.value.find((a=>+a.value==+_.value));return console.log("types",b.value,"当前type：",a),a?a.label:"全部"}));return(a,t)=>{const r=s,l=o;return n(),i(p,null,[c("div",H,[c("div",{onClick:t[0]||(t[0]=a=>g.value=!0)},[c("span",null,m(f.value),1),d(),u(r,{name:"arrow-down"})])]),u(l,{show:g.value,style:{"background-color":"transparent"},onClick:t[1]||(t[1]=a=>g.value=!1)},{default:w((()=>[c("div",J,[(n(!0),i(p,null,k(b.value.filter((a=>+a.value!=+y(_))),(a=>(n(),i("div",{key:a.label,class:"block",onClick:t=>{return r=a,_.value=r.value,void e("change",r);var r}},m(a.label),9,W)))),128))])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-129d7a22"]]);const Z={class:"com-card-data"},G={class:"title"},Q={class:"item-list"},X={class:"label"},aa={class:"files"},ea=["onClick"],ta=e({name:"Row"}),ra=e({...ta,props:{list:{type:Array,default:()=>[]}},emits:["preview"],setup(a,{emit:e}){const t=h(F),r=h(U),l=["产品说明书","产品条款","费率表","风险告知书","其他","投保规则","责任条款"],o=[{key:"riskCategory",label:"险种类别",value:"寿险",format:a=>r[a]},{key:"riskType",label:"主附险",value:"主险",format:a=>t[a]},{key:"insurancePeriodValues",label:"保障期间",value:"180天"},{key:"paymentPeriodValues",label:"交费期间",value:"终生"}],w=a=>o.filter((e=>a[e.key])).map((e=>{const t=a[e.key];return{...e,value:e.format?e.format(t):t}}));return(e,t)=>{const r=s,o=g;return n(),i("div",Z,[(n(!0),i(p,null,k(a.list,(a=>(n(),i("div",{key:a.riskId,class:"card"},[c("div",G,[d(m(a.riskName),1),u(r,{name:"arrow",color:"#c2c2c2"})]),c("div",Q,[(n(!0),i(p,null,k(w(a),(({label:a,value:e})=>(n(),i(p,null,[e?(n(),i("div",{key:a,class:"item"},[c("span",X,m(a)+":",1),d(),c("span",null,m(e),1)])):_("",!0)],64)))),256))]),c("div",aa,[(n(!0),i(p,null,k(null==a?void 0:a.attachmentDetailVOS,(a=>(n(),i("div",{key:a.riskId,class:"file",onClick:t=>e.$emit("preview",a)},[u(o,{name:l.includes(a.categoryName)?a.categoryName:"自定义"},null,8,["name"]),c("div",null,m(a.categoryName),1)],8,ea)))),128))])])))),128))])}}});const la={class:"com-row-tabs"},sa={class:"row-data"},oa={class:"file-name"},na=(a=>(D("data-v-a74781f4"),a=a(),I(),a))((()=>c("span",{class:"dot"},null,-1))),ia=["onClick"],ca=e({name:"Tabs"});var ma=v(e({...ca,props:{tabs:{type:Array,default:()=>[]},list:{type:Array,default:()=>[]},active:{type:String,default:""}},emits:["@update:active","preview"],setup(a,{emit:e}){const l=t(a,"active",e),s=r(!1);return(t,r)=>{const o=x,d=N,v=g,h=b,D=R,I=T;return n(),i(p,null,[c("div",la,[a.tabs.length?(n(),f(d,{key:0,active:y(l),"onUpdate:active":r[0]||(r[0]=a=>C(l)?l.value=a:null),class:S(["tabs",a.tabs.length>3?"w80":""])},{default:w((()=>[(n(!0),i(p,null,k(a.tabs,(a=>(n(),f(o,{key:a,name:a,title:a},null,8,["name","title"])))),128))])),_:1},8,["active","class"])):_("",!0),a.tabs.length>3?(n(),i("div",{key:1,class:"more-arrow",onClick:r[1]||(r[1]=a=>s.value=!0)},[u(v,{name:"down-fill",color:"red"})])):_("",!0)]),c("div",sa,[u(D,null,{default:w((()=>[(n(!0),i(p,null,k(a.list,(a=>(n(),f(h,{key:a.id,"is-link":"",onClick:e=>t.$emit("preview",a)},{title:w((()=>[c("div",oa,[na,c("span",null,m(a.displayName),1)])])),_:2},1032,["onClick"])))),128))])),_:1})]),u(I,{show:s.value,title:"已选类别",onClose:r[2]||(r[2]=a=>s.value=!1)},{default:w((()=>[(n(!0),i(p,null,k(a.tabs,((a,t)=>(n(),i("div",{key:t,class:S(["tab-item",a==y(l)?"active":""]),onClick:t=>(a=>{l.value=a,s.value=!1,e("@update:active",a)})(a)},[c("div",null,m(a),1)],10,ia)))),128))])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-a74781f4"]]);function da(a){function e(){const e={watermark_txt:"text",watermark_x:20,watermark_y:20,watermark_rows:20,watermark_cols:20,watermark_x_space:100,watermark_y_space:50,watermark_color:"#f5ecec",watermark_alpha:.4,watermark_fontsize:"13px",watermark_font:"微软雅黑",watermark_width:210,watermark_height:80,watermark_angle:15};Object.assign(e,a);const t=document.createDocumentFragment(),r=Math.max(document.body.scrollWidth,document.body.clientWidth),l=r-.015*r,s=Math.max(document.body.scrollHeight,document.body.clientHeight)-30;let o,n;(0===e.watermark_cols||parseInt(e.watermark_x+e.watermark_width*e.watermark_cols+e.watermark_x_space*(e.watermark_cols-1))>l)&&(e.watermark_cols=parseInt((l-e.watermark_x+e.watermark_x_space)/(e.watermark_width+e.watermark_x_space)),e.watermark_x_space=parseInt((l-e.watermark_x-e.watermark_width*e.watermark_cols)/(e.watermark_cols-1))),(0===e.watermark_rows||parseInt(e.watermark_y+e.watermark_height*e.watermark_rows+e.watermark_y_space*(e.watermark_rows-1))>s)&&(e.watermark_rows=parseInt((e.watermark_y_space+s-e.watermark_y)/(e.watermark_height+e.watermark_y_space)),e.watermark_y_space=parseInt((s-e.watermark_y-e.watermark_height*e.watermark_rows)/(e.watermark_rows-1)));for(let a=0;a<e.watermark_rows;a+=1){n=e.watermark_y+(e.watermark_y_space+e.watermark_height)*a;for(let r=0;r<e.watermark_cols;r+=1){o=e.watermark_x+(e.watermark_width+e.watermark_x_space)*r;const l=document.createElement("div");l.id=`maskDiv${a}${r}`,l.className="maskDiv",l.appendChild(document.createTextNode(e.watermark_txt)),l.style.webkitTransform=`rotate(-${e.watermark_angle}deg)`,l.style.MozTransform=`rotate(-${e.watermark_angle}deg)`,l.style.msTransform=`rotate(-${e.watermark_angle}deg)`,l.style.OTransform=`rotate(-${e.watermark_angle}deg)`,l.style.transform=`rotate(-${e.watermark_angle}deg)`,l.style.visibility="",l.style.position="absolute",l.style.left=`${o}px`,l.style.top=`${n}px`,l.style.overflow="hidden",l.style.zIndex="9999",l.style.pointerEvents="none",l.style.opacity=e.watermark_alpha,l.style.fontSize=e.watermark_fontsize,l.style.fontFamily=e.watermark_font,l.style.color=e.watermark_color,l.style.textAlign="center",l.style.width=`${e.watermark_width}px`,l.style.height=`${e.watermark_height}px`,l.style.display="block",t.appendChild(l)}}document.body.appendChild(t)}const t=$((function(){document.querySelectorAll(".maskDiv").forEach((a=>{a.parentNode.removeChild(a)})),e()}),500);window.addEventListener("resize",t),e()}const ua={class:"page page-product-lib"},wa={key:1,class:"tac",style:{"margin-top":"50px"}},pa={class:"review-pdf"},ka=e({name:"ProductLib"});var ya=v(e({...ka,setup(e){const t=V(),{preview:s=!1,insurerCode:o="lianlife"}=t.query,m=O({rowDataMap:{},cardDatas:[],tabs:[],currentTab:""}),d=l((()=>(console.log("rowDatas",m.rowDataMap,m.tabs,m.currentTab),m.rowDataMap[m.currentTab]))),p=/Mobi|Android|iPhone/i.test(navigator.userAgent),k=r({id:"",insurerCode:"lianlife",showStyle:1,materialCategoryShowStyle:1,riskName:"",showStyleDetails:[],isShowStopSellingLabel:"Y",showCategoryIds:[],showCategoryName:[],showStyleDetailName:[]}),v=r(!0),h=(e=(()=>{}))=>{((e={})=>a({url:"/api/app/insure/product/category/queryProductBoxConfig",method:"POST",data:e}))({insurerCode:o}).then((a=>{var t;console.log("获取配置成功",a),k.value=a.data,k.value.riskName="",m.currentTab=null==(t=m.tabs)?void 0:t[0],e&&(null==e||e())}))},g=()=>{v.value=!0,((e={})=>a({url:"/api/app/insure/product/category/riskAttachmentList",method:"POST",data:e}))({insurerCode:o,materialCategoryShowStyle:k.value.materialCategoryShowStyle,showStyle:k.value.showStyle,riskName:k.value.riskName,riskType:k.value.riskType,categoryId:k.value.showCategoryIds,showStyleDetails:k.value.showStyleDetails}).then((a=>{var e;const{attachmentListResMap:t,attachmentDetailVOS:r}=a.data||{attachmentListResMap:{},attachmentDetailVOS:[]};m.rowDataMap={...t};const l=Object.keys(t);m.tabs=null==(e=k.value.showCategoryName)?void 0:e.filter((a=>l.includes(a))),m.cardDatas=r,console.log("state.rowDatas",d)})).finally((()=>{v.value=!1}))},C=()=>{k.value.id?g():h((()=>{g()}))},S=r({attachmentName:"",attachmentContent:"",attachmentSource:1,show:!1}),x=O({name:"测试水印",agentCode:"1234"}),N=a=>{console.log("文件预览",x),S.value={...a,show:!0},da({watermark_txt:`${x.name}\r\n${x.agentCode}`,watermark_color:"#333",watermark_angle:30,watermark_width:100,watermark_height:60})},D=a=>{console.log("关闭文件预览"),document.querySelectorAll(".maskDiv").forEach((a=>{a.parentNode.removeChild(a)})),S.value={attachmentName:"",attachmentContent:"",attachmentSource:1,show:!1}};return j((()=>{s?window.addEventListener("message",(a=>{var e;console.log("子应用收到的数据",a.data);"object"==typeof JSON.parse(a.data)&&(k.value={...k.value,...JSON.parse(a.data)},m.currentTab=null==(e=m.tabs)?void 0:e[0],g()),console.log("合并后的config:",k.value)}),!1):h();const a=A.get(M);a&&(x.name=a.name,x.agentCode=a.agentCode),setTimeout((()=>{C()}),1e3)})),(a,e)=>{const t=z,r=b,l=P,s=L,o=q,h=E,g=T;return n(),i("div",ua,[u(l,null,{default:w((()=>[u(r,{class:"top-bar"},{default:w((()=>[c("div",null,[u(Y,{modelValue:y(k).riskType,"onUpdate:modelValue":[e[0]||(e[0]=a=>y(k).riskType=a),e[1]||(e[1]=a=>y(k).riskType=a)],type:y(k).materialCategoryShowStyle,onChange:C},null,8,["modelValue","type"])]),u(t,{modelValue:y(k).riskName,"onUpdate:modelValue":e[2]||(e[2]=a=>y(k).riskName=a),"left-icon":"none",placeholder:"请搜索险种名称",shape:"round","clear-trigger":"always","show-action":"",clearable:y(p),onSearch:C},{action:w((()=>[c("div",{onClick:C},"搜索")])),_:1},8,["modelValue","clearable"])])),_:1})])),_:1}),c("div",null,[y(v)||1!=+y(k).showStyle?_("",!0):(n(),f(ma,{key:0,active:y(m).currentTab,tabs:y(m).tabs,list:y(d),"onUpdate:active":e[3]||(e[3]=a=>y(m).currentTab=a),onPreview:N},null,8,["active","tabs","list"])),y(v)?(n(),i("div",wa,[u(s,{type:"spinner"})])):_("",!0),y(v)||2!=+y(k).showStyle?_("",!0):(n(),f(ra,{key:2,list:y(m).cardDatas,onPreview:N},null,8,["list"])),y(v)||y(m).cardDatas.length?_("",!0):(n(),f(o,{key:3,title:"没有找到产品资料",style:{"margin-top":"40px"}}))]),u(g,{show:y(S).show,"onUpdate:show":e[4]||(e[4]=a=>y(S).show=a),class:"pre-file-wrap",title:y(S).attachmentName,position:"bottom","close-on-click-overlay":!1,style:{overflow:"hidden"},"header-style":{paddingRight:"40px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",paddingTop:"4px"},onClose:D},{default:w((()=>[c("div",pa,[u(h,{"is-iframe":!1,content:y(S).attachmentContent,type:y(B)(y(S).attachmentSource,y(S).attachmentContent)},null,8,["content","type"])])])),_:1},8,["show","title"])])}}}),[["__scopeId","data-v-c43b2a96"]]);export{ya as default};
