!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.pdf-preview[data-v-339dbab6]{display:flex;flex-wrap:wrap}.pdf-preview .item[data-v-339dbab6]{margin-right:.4rem;margin-bottom:.4rem}.table[data-v-339dbab6]{margin:.4rem 0}\n',document.head.appendChild(e),System.register(["./vendor-legacy-388e7174.js","./index-legacy-c83b3595.js","./da-legacy-642c8c38.js","./index-legacy-f6c87a18.js","./index-legacy-a1d66b6e.js","./index-legacy-8707f6ce.js","./index-legacy-daa8e631.js","./index-legacy-05a2ba00.js","./index-legacy-ece7435b.js","./index-legacy-fcabd39e.js","./index-legacy-8999f8da.js","./utils-legacy-ebafda1e.js"],(function(e){"use strict";var l,a,t,u,d,o,n,i,s,r,c,m,p,v,y,f,k,b,h,g,A,V,C,w,S,_,D,x,E,K,R,M,j,U,N,Y,W,q,B,P,I;return{setters:[function(e){l=e.g,a=e.r,t=e.h,u=e.o,d=e.E,o=e.B,n=e.t,i=e.X,s=e.F,r=e.j,c=e.k,m=e.R,p=e.z,v=e.d,y=e.A,f=e.i,k=e.J,b=e.m,h=e.U,g=e.G,A=e.H,V=e.P,C=e.Q,w=e.Y,S=e.Z,_=e.L},function(e){D=e.P},function(e){x=e.P,E=e.a,K=e.b},function(e){R=e.P},function(e){M=e._,j=e.f,U=e.U,N=e.e},function(e){Y=e.P},function(e){W=e._},function(e){q=e.P},function(e){B=e.P},function(e){P=e.P,I=e.a},function(){},function(){}],execute:function(){const F=["src"],L=l({props:{list:{type:Array,default:()=>[]},active:{type:Number,default:0}},emits:["closed"],setup(e,{emit:l}){const m=e,p=a(m.active),v=t((()=>m.list.map(((e,l)=>({title:e.title,slotName:`pdf${l}`,url:e.url}))))),y=()=>{l("closed")};return(l,a)=>(u(),d(W,{class:"com-preview-pdf",show:!0,title:"pdf预览",onClosed:y},{default:o((()=>[n(q,{list:c(v),sticky:"","offset-top":"10%",class:"tabs",active:p.value},i({_:2},[s(e.list,((e,l)=>({name:`pdf${l}`,fn:o((()=>[r("iframe",{class:"iframe",src:e.url},null,8,F)]))})))]),1032,["list","active"])])),_:1}))}});var Q=M(L,[["__scopeId","data-v-6289593a"]]);const Z={key:0,class:"displayValue"},J={key:1,class:"placeholder"},G=l({props:{type:{type:String,default:"datetime"},modelValue:{type:[Date,String],default:""},isLink:{type:Boolean,default:!0},placeholder:{type:String,default:"请选择"},title:{type:String,default:""},label:{type:String,default:""},isView:{type:Boolean,default:!1},required:{type:Boolean,default:!1},min:{type:String,default:new Date("1900-01-01")},max:{type:String,default:new Date}},emits:["update:modelValue"],setup(e,{emit:l}){const d=e,[i,s]=m(!1),r=a(),A={datetime:"YYYY-MM-DD HH:mm",date:"YYYY-MM-DD","year-month":"YYYY-MM","month-day":"MM-DD",datehour:"YYYY-MM-DD HH",time:"mm:ss"},V=()=>{s(!0)},C=e=>{r.value=e,s(!1)},w=()=>{s(!1)};p((()=>d.modelValue),(e=>{"string"==typeof e&&"time"!==d.type?v(e,A[d.type]).isValid()?r.value=v(e,A[d.type]).toDate():r.value="":r.value=e}),{immediate:!0}),p(r,(e=>{l("update:modelValue",e)}));const S=t((()=>"time"===d.type?r.value:r.value?v(r.value,A[d.type]).format(A[d.type]):""));return(l,a)=>{const t=y("van-datetime-picker");return u(),f(g,null,[n(P,b(l.$attrs,{"is-link":e.isLink,label:e.label,"model-value":e.modelValue,"is-view":e.isView,required:e.required,onClick:V}),{input:o((()=>[c(S)?(u(),f("span",Z,k(c(S)),1)):(u(),f("span",J,k(e.placeholder),1))])),_:1},16,["is-link","label","model-value","is-view","required"]),n(W,{show:c(i),"onUpdate:show":a[0]||(a[0]=e=>h(i)?i.value=e:null),height:40,closeable:!1},{default:o((()=>[n(t,{type:e.type,"model-value":r.value,title:e.title||e.label,min:e.min,max:e.max,onConfirm:C,onCancel:w},null,8,["type","model-value","title","min","max"])])),_:1},8,["show"])],64)}}});var X=M(G,[["__scopeId","data-v-51b8e287"]]);const O={class:"com-select-container"},T=l({props:{dataSource:{type:Array,default:()=>[]},labelKey:{type:String,default:"label"},valueKey:{type:String,default:"value"},show:{type:Boolean,default:!1}},emits:["update:show","submit"],setup(e,{emit:l}){const t=e,i=a(0),c=a(t.show),m=()=>{l("submit",i.value),c.value=!1};return p((()=>t.show),(e=>{c.value=e})),p(c,(e=>{l("update:show",e)})),(l,a)=>{const t=y("van-radio"),p=y("van-radio-group");return u(),d(W,{show:c.value,"onUpdate:show":a[1]||(a[1]=e=>c.value=e),class:"com-select",title:"请选择","show-footer":"",onSubmit:m},{default:o((()=>[r("div",O,[n(p,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=e=>i.value=e)},{default:o((()=>[(u(!0),f(g,null,s(e.dataSource,(l=>(u(),d(t,{key:l[e.valueKey],name:l[e.valueKey],class:"radio-item"},{default:o((()=>[A(k(l[e.labelKey]),1)])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])])),_:1},8,["show"])}}});var z=M(T,[["__scopeId","data-v-2bf35271"]]),H="data:image/png;base64,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";const $=e=>(V("data-v-e8c186fe"),e=e(),C(),e),ee={class:"com-id-card-upload"},le={class:"upload-item"},ae=["src"],te=["src"],ue=$((()=>r("div",{class:"text"},"上传人像面",-1))),de=$((()=>r("div",{class:"bg"},null,-1))),oe=["src"],ne=$((()=>r("div",{class:"text"},"上传人像面",-1))),ie={class:"upload-item"},se=["src"],re=["src"],ce=$((()=>r("div",{class:"text"},"上传国徽面",-1))),me=$((()=>r("div",{class:"bg"},null,-1))),pe=["src"],ve=$((()=>r("div",{class:"text"},"上传人像面",-1)));var ye=M(l({props:{front:{type:String,default:""},back:{type:String,default:""}},emits:["update:front","update:back"],setup(e,{emit:l}){const t=e;let d="front";const i=a(),s=a([]),m=a([]),v=a([]),k=()=>{d="front",v.value=[],setTimeout((()=>{var e;null===(e=i.value)||void 0===e||e.chooseFile()}))},b=()=>{d="back",v.value=[],setTimeout((()=>{var e;null===(e=i.value)||void 0===e||e.chooseFile()}))},h=e=>{j(e.file,U.ID_CARD_FRONT).then((e=>{"10000"===e.code&&l("update:front",e.data.url)}))},g=e=>{j(e.file,U.ID_CARD_BACK).then((e=>{"10000"===e.code&&l("update:back",e.data.url)}))},A=e=>{j(e.file,"front"===d?U.ID_CARD_FRONT:U.ID_CARD_BACK).then((e=>{"10000"===e.code&&l("front"===d?"update:front":"update:back",e.data.url)}))};return p((()=>t.front),(e=>{e&&(s.value=[{url:e}])}),{immediate:!0}),p((()=>t.back),(e=>{e&&(m.value=[{url:e}])}),{immediate:!0}),p(v,(e=>{e&&e[0]&&("front"===d?s.value=e:m.value=e)})),(e,l)=>{const a=y("van-uploader");return u(),f("div",ee,[n(a,{"model-value":s.value,"max-count":1,deletable:!1,"preview-full-image":!1,"after-read":h},{"preview-cover":o((()=>[r("div",{class:"upload-item cover",onClick:k},[de,r("img",{src:c(H),class:"icon"},null,8,oe),ne])])),default:o((()=>[r("div",le,[r("img",{src:c("/static/assets/idcard-front.16abd98b.png"),class:"bg"},null,8,ae),r("img",{src:c(H),class:"icon"},null,8,te),ue])])),_:1},8,["model-value"]),n(a,{"model-value":m.value,"max-count":1,deletable:!1,"preview-full-image":!1,"after-read":g},{"preview-cover":o((()=>[r("div",{class:"upload-item cover",onClick:b},[me,r("img",{src:c(H),class:"icon"},null,8,pe),ve])])),default:o((()=>[r("div",ie,[r("img",{src:c("/static/assets/idcard-back.77172207.png"),class:"bg"},null,8,se),r("img",{src:c(H),class:"icon"},null,8,re),ce])])),_:1},8,["model-value"]),n(a,{ref_key:"instance",ref:i,class:"temp-uploader","max-count":1,"after-read":A},null,512)])}}}),[["__scopeId","data-v-e8c186fe"]]);const fe=e=>(V("data-v-339dbab6"),e=e(),C(),e),ke=A("试算"),be=fe((()=>r("p",null,"卡片内容，可以被折叠",-1))),he=fe((()=>r("p",null,"卡片内容，可以被折叠",-1))),ge=fe((()=>r("p",null,"卡片内容，可以被折叠",-1))),Ae=fe((()=>r("p",null,"卡片内容，可以被折叠",-1))),Ve=fe((()=>r("p",null,"卡片内容，查看更多",-1))),Ce=A(" 自定义按钮 "),we=A(" 自定义 "),Se={class:"pdf-preview"},_e=A("弹出选择"),De=A("保存"),xe=A("清除"),Ee=A("回显"),Ke=fe((()=>r("p",null," 注意：因行内样式无法正确转换未rem，columns中的width，目前仅支持80-200，如需其他的宽度，请在组件内对应添加&.table-cell-width-的样式 ",-1))),Re=l({setup(e){const[l,t]=m(!1),d=a({gender:"1",like:[],birth:"",city:"",date:"",dateTime:"2020-02-02 02:02",time:"",yearMonth:"",monthDay:"",datehour:""}),i=a(),p=[{label:"男",value:"1"},{label:"女",value:"2"}],v=a(null),b=a(null);_({btns:[1,2]});const V=a([]),C=a(""),M=a(""),j=[{title:"pdfedgherth01",url:"https://dlsvr04.asus.com.cn/pub/ASUS/mb/Socket2066/WS_C422_PRO_SE/T16048_WS_C422_PRO_SE_V4_WEB.pdf"},{title:"pdf二哥哥让他个人提供2",url:"https://dlsvr04.asus.com.cn/pub/ASUS/mb/Socket2066/WS_C422_PRO_SE/C16048_WS_C422_PRO_SE_V4_WEB.pdf"},{title:"pd认同感和认同感让他f3",url:"https://dlsvr04.asus.com.cn/pub/ASUS/mb/Socket2066/WS_C422_PRO_SE/E16048_WS_C422_PRO_SE_UM_V4_WEB.pdf"},{title:"pd任何个人挺好认同和f4",url:"https://dlsvr04.asus.com.cn/pub/ASUS/mb/Socket2066/WS_C422_PRO/SE/Manual/J14043_WS_C422_PRO_SE_UM_V2_WEB.pdf"},{title:"pdf让他忽然他还让他还让他合同任何人5",url:"https://dlsvr04.asus.com.cn/pub/ASUS/mb/Socket2066/WS_C422_SAGE_10G/Manual/T16047_WS_C422_SAGE_10G_V3_WEB.pdf"}],U=[{label:"北京",value:"1"},{label:"上海",value:"2"},{label:"广州",value:"3"},{label:"深圳",value:"4"},{label:"武汉",value:"5"},{label:"天津",value:"6"},{label:"杭州",value:"7"}],W=a(!1),q=()=>{i.value.validate()},P=()=>{var e;null===(e=v.value)||void 0===e||e.clear()},F=()=>{var e;const l=null===(e=v.value)||void 0===e?void 0:e.save();localStorage.setItem("test_sign",l)},L=()=>{const e=localStorage.getItem("test_sign");var l;e&&(null===(l=v.value)||void 0===l||l.setDataURL(e,{ratio:1}))},Z=()=>{},J=e=>{((e,l)=>{const a=document.createElement("div"),t=w(Q,{list:e,active:l,onClosed:()=>{document.body.removeChild(a)}});S(t,a),document.body.appendChild(a)})(j,e)},G=[{title:"险种名称",dataIndex:"key1",width:180},{title:"保额",dataIndex:"key2"},{title:"保障期间",dataIndex:"key3",width:110},{title:"缴费期间",dataIndex:"key4",width:110},{title:"保费",dataIndex:"key5",width:120},{title:"columnA",dataIndex:"key6",width:120},{title:"columnB",dataIndex:"key7",width:120}],O=[{key1:"众安家庭共享保额意外险",key2:"50万",key3:"1年期",key4:"一次交清",key5:"988.00",key6:"columnA",key7:"columnB"},{key1:"众安家庭共享保额意外险",key2:"50万",key3:"1年期",key4:"一次交清",key5:"988.00",key6:"columnA",key7:"columnB"},{key1:"众安家庭共享保额意外险",key2:"50万",key3:"1年期",key4:"一次交清",key5:"988.00",key6:"columnA",key7:"columnB"},{key1:"众安家庭共享保额意外险",key2:"50万",key3:"1年期",key4:"一次交清",key5:"988.00",key6:"columnA",key7:"columnB"},{key1:"众安家庭共享保额意外险",key2:"50万",key3:"1年期",key4:"一次交清",key5:"988.00",key6:"columnA",key7:"columnB"},{key1:"众安家庭共享保额意外险",key2:"50万",key3:"1年期",key4:"一次交清",key5:"988.00",key6:"columnA",key7:"columnB"},{key1:"众安家庭共享保额意外险",key2:"50万",key3:"1年期",key4:"一次交清",key5:"988.00",key6:"columnA",key7:"columnB"}];return(e,a)=>{const m=y("ProField"),w=y("VanButton"),S=y("ProForm"),_=y("van-button"),Q=y("ProSign"),T=y("ProCell"),H=y("ProPageWrap"),$=y("van-datetime-picker"),ee=y("van-popup");return u(),f(g,null,[n(H,null,{default:o((()=>[n(S,{ref_key:"formRef",ref:i},{default:o((()=>[n(m,{modelValue:d.value.birth,"onUpdate:modelValue":a[0]||(a[0]=e=>d.value.birth=e),rules:[{required:!0,message:"请选择"}],name:"birth",label:"出生日期","is-link":"",placeholder:"请选择",onClick:a[1]||(a[1]=e=>c(t)(!0))},null,8,["modelValue"]),n(I,{modelValue:d.value.city,"onUpdate:modelValue":a[2]||(a[2]=e=>d.value.city=e),label:"城市",name:"city","data-source":U,"is-link":"",placeholder:"请选择城市",rules:[{required:!0,message:"请选择城市"}]},null,8,["modelValue"]),n(I,{modelValue:d.value.city,"onUpdate:modelValue":a[3]||(a[3]=e=>d.value.city=e),label:"城市 isView",name:"city","data-source":U,"is-link":"",placeholder:"请选择城市",rules:[{required:!0,message:"请选择城市"}],"is-view":""},null,8,["modelValue"]),n(X,{modelValue:d.value.dateTime,"onUpdate:modelValue":a[4]||(a[4]=e=>d.value.dateTime=e),label:"datetime",type:"datetime",name:"datetime",rules:[{required:!0,message:"请选择"}]},null,8,["modelValue"]),n(X,{modelValue:d.value.date,"onUpdate:modelValue":a[5]||(a[5]=e=>d.value.date=e),label:"date",type:"date",name:"date",rules:[{required:!0,message:"请选择"}]},null,8,["modelValue"]),n(X,{modelValue:d.value.time,"onUpdate:modelValue":a[6]||(a[6]=e=>d.value.time=e),label:"time",type:"time",name:"date"},null,8,["modelValue"]),n(X,{modelValue:d.value.yearMonth,"onUpdate:modelValue":a[7]||(a[7]=e=>d.value.yearMonth=e),label:"year-month",type:"year-month",name:"date"},null,8,["modelValue"]),n(X,{modelValue:d.value.monthDay,"onUpdate:modelValue":a[8]||(a[8]=e=>d.value.monthDay=e),label:"month-day",type:"month-day",name:"date"},null,8,["modelValue"]),n(X,{modelValue:d.value.datehour,"onUpdate:modelValue":a[9]||(a[9]=e=>d.value.datehour=e),label:"datehour",type:"datehour",name:"date"},null,8,["modelValue"]),n(m,{modelValue:d.value.gender,"onUpdate:modelValue":a[11]||(a[11]=e=>d.value.gender=e),name:"gender",label:"性别",rules:[{required:!0,message:"请选择"}]},{input:o((()=>[n(D,{modelValue:d.value.gender,"onUpdate:modelValue":a[10]||(a[10]=e=>d.value.gender=e),options:p},null,8,["modelValue"])])),_:1},8,["modelValue"]),n(m,{modelValue:d.value.like,"onUpdate:modelValue":a[13]||(a[13]=e=>d.value.like=e),name:"like",label:"爱好",rules:[{required:!0,message:"请选择"}]},{input:o((()=>[n(x,{modelValue:d.value.like,"onUpdate:modelValue":a[12]||(a[12]=e=>d.value.like=e),options:p},null,8,["modelValue"])])),_:1},8,["modelValue"]),n(w,{type:"primary",onClick:q},{default:o((()=>[ke])),_:1})])),_:1},512),n(Y,{title:"图片上传"},{default:o((()=>[n(N,{modelValue:V.value,"onUpdate:modelValue":a[14]||(a[14]=e=>V.value=e),"max-count":9},null,8,["modelValue"])])),_:1}),n(Y,{title:"身份证上传"},{default:o((()=>[n(ye,{front:C.value,"onUpdate:front":a[15]||(a[15]=e=>C.value=e),back:M.value,"onUpdate:back":a[16]||(a[16]=e=>M.value=e)},null,8,["front","back"])])),_:1}),n(Y,{title:"折叠卡片","show-fold":!0},{default:o((()=>[be,he,ge,Ae])),_:1}),n(Y,{title:"link卡片",link:"查看更多",onLinkClick:Z},{default:o((()=>[Ve])),_:1}),n(Y,{title:"自定义"},{extra:o((()=>[Ce])),default:o((()=>[we])),_:1}),n(Y,{title:"PDF预览"},{default:o((()=>[r("div",Se,[(u(),f(g,null,s(j,((e,l)=>n(_,{key:l,type:"primary",class:"item",onClick:e=>J(l)},{default:o((()=>[A(k(e.title),1)])),_:2},1032,["onClick"]))),64))])])),_:1}),n(Y,{title:"ProSelect"},{default:o((()=>[n(_,{type:"primary",onClick:a[17]||(a[17]=e=>W.value=!0)},{default:o((()=>[_e])),_:1}),n(z,{show:W.value,"onUpdate:show":a[18]||(a[18]=e=>W.value=e),"data-source":U},null,8,["show"])])),_:1}),n(Y,{title:"电子签名1"},{default:o((()=>[n(Q,{ref_key:"signRef1",ref:v,selector:"sign1"},null,512),n(w,{onClick:F},{default:o((()=>[De])),_:1}),n(w,{onClick:P},{default:o((()=>[xe])),_:1}),n(w,{onClick:L},{default:o((()=>[Ee])),_:1})])),_:1}),n(Y,{title:"电子签名2"},{default:o((()=>[n(Q,{ref_key:"signRef2",ref:b,selector:"sign2"},null,512)])),_:1}),n(Y,{title:"单元格"},{default:o((()=>[n(T,{title:"12313131,，测侧沃尔沃认为问题问题提问试-——",content:"123132侧呃呃呃312312"})])),_:1}),n(R,{min:0,max:100,"step-value":10}),n(E,{"button-image":c(K)},null,8,["button-image"]),n(Y,{title:"ProTable"},{default:o((()=>[n(B,{columns:G,class:"table","data-source":O}),Ke])),_:1})])),_:1}),n(ee,{show:c(l),"onUpdate:show":a[21]||(a[21]=e=>h(l)?l.value=e:null),position:"bottom"},{default:o((()=>[n($,{type:"time",onConfirm:a[19]||(a[19]=e=>{d.value.birth=e,c(t)(!1)}),onCancel:a[20]||(a[20]=e=>c(t)(!1))})])),_:1},8,["show"])],64)}}});e("default",M(Re,[["__scopeId","data-v-339dbab6"]]))}}}))}();
