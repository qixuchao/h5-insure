import{b5 as e,b6 as a,G as t,d as l,b0 as d,z as o,r as s,b7 as i,L as u,aQ as r,R as n,b8 as m,aR as c,c as p,e as f,w as v,g as V,A as y,U as b,V as g,b9 as h,a9 as w,ao as _,k as D,as as S,at as C,h as k,T as x,ba as N,an as P,aS as j,bb as F,j as $,E as Y,bc as A,bd as M,ac as O,o as R,be as T,i as B,a2 as I,ak as L,y as E,bf as U,bg as q,b1 as H,b2 as K,bh as z,bi as W,az as G,bj as Q,f as J,bk as X,b3 as Z,$ as ee,bl as ae,b4 as te,al as le,am as de,bm as oe,ar as se,B as ie,F as ue,bn as re}from"./index-25e4fe5e.js";import{d as ne}from"./debounce-eed12388.js";import{V as me,u as ce,b as pe,d as fe,_ as ve,e as Ve,f as ye,r as be,h as ge,P as he,j as we,k as _e}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-d2943903.js";/* empty css              */import{S as De}from"./index-55f5d696.js";import{i as Se,b as Ce}from"./isObjectLike-a9798079.js";import{n as ke,j as xe}from"./_initCloneObject-0663309f.js";import{P as Ne}from"./bankCard-b1d42b35.js";var Pe=Object.freeze(Object.defineProperty({__proto__:null,get ProRenderForm(){return je},get ProFieldV2(){return ve},get ProRadioV2(){return Fe},get ProPickerV2(){return $e},get ProSwitchV2(){return Ye},get ProCalendarV2(){return Oe},get ProCascaderV2(){return Re},get ProUploadV2(){return _e},get ProIDCardUploadV2(){return Ke},get ProDatePickerV2(){return ze},get ProSMSCode(){return We},get ProBank(){return Qe},get ProAddress(){return Je},get ProOccupation(){return ta},get ProRenderFormWithCard(){return la}},Symbol.toStringTag,{value:"Module"}));var je=t(l({__name:"ProRenderForm",props:{validateMethod:{default:"show-error"},model:{default:()=>({})},isView:{type:Boolean,default:!1},schema:{default:()=>[]},config:{default:()=>({})},markRequired:{type:Boolean,default:!0},extraProvision:null},emits:["failed"],setup(t,{expose:l,emit:P}){const j=t,F=d(),$=o({config:{},formData:{},schema:[],nameList:[],dictCodeList:[]}),Y=s({});i(me,{formState:$,formRef:Y,markRequired:j.markRequired,...j.extraProvision});const A=u((()=>Object.keys(F).filter((e=>"default"!==e)))),M=u((()=>r(j.schema))),O=u((()=>{const[e,a]={toast:[!1,!1],"show-error":[!1,!0],"show-error-message":[!0,!1]}[j.validateMethod];return{"show-error-message":e,"show-error":a}})),R=({values:e,errors:a})=>{if("toast"===j.validateMethod){const e=a.reduce(((e,a)=>(e[a.name]=a,e)),{}),t=Object.keys(e);if(t.length){const a=$.nameList.reduce(((e,a)=>(t.includes(a)&&e.push(a),e)),[]),{message:l}=e[a[0]]||{};x({message:l})}}console.log("failed errors",a),P("failed",{values:e,errors:a})};return n([()=>j.schema,()=>$.config],(([e,a])=>{M.value&&($.schema=e.map((e=>({...e,componentName:Pe[e.componentName]?m(Pe[e.componentName]):e.componentName,...a[e.name],nanoid:c()}))).filter((e=>!e.hidden)))}),{immediate:!0,deep:!0}),n((()=>j.config),(e=>{$.config=e}),{immediate:!0,deep:!0}),n((()=>$.dictCodeList),ne((t=>{t&&(async t=>{const l=e(),{dictMap:d}=a(l);"string"==typeof t?(await l.getDict([t]),d.value[t]):(await l.getDict(t),t.map((e=>d.value[e])))})(t)}),500),{immediate:!0,deep:!0}),n((()=>j.model),(e=>{e&&($.formData=e)}),{immediate:!0,deep:!0}),n((()=>$.schema),(e=>{$.dictCodeList=[...new Set([...$.dictCodeList,...$.schema.reduce(((e,a)=>(a.dictCode&&e.push(a.dictCode),e)),[])])]}),{immediate:!0,deep:!0}),l({...["submit","getValues","validate","resetValidation","getValidationStatus","scrollToField"].reduce(((e,a)=>(e[a]=(...e)=>{var t;return null==(t=Y.value)?void 0:t[a](...e)},e)),{})}),(e,a)=>{const l=N;return p(),f(l,w({ref_key:"formRef",ref:Y,class:"com-van-form"},{...V(O),...e.$attrs},{onFailed:R}),{default:v((()=>[V(M)?(p(!0),y(b,{key:0},g($.schema,((a,l)=>(p(),f(h(a.componentName),w({key:`${a.nanoid}_${l}`},a,{modelValue:$.formData[a.name],"onUpdate:modelValue":e=>$.formData[a.name]=e,"is-view":t.isView}),_({_:2},[g(V(A),(a=>({name:a,fn:v((t=>[D(e.$slots,a,S(C(t||{})),void 0,!0)]))})))]),1040,["modelValue","onUpdate:modelValue","is-view"])))),128)):k("",!0),D(e.$slots,"default",{},void 0,!0)])),_:3},16)}}}),[["__scopeId","data-v-379b26de"]]);var Fe=t(l({inheritAttrs:!1,__name:"ProRadioV2",props:{type:{type:String,default:"button"},modelValue:{type:[String,Number],default:""},columns:{type:Array,default:()=>[]},isDefaultSelected:{type:Boolean,default:!0},isView:{type:Boolean,default:!1},customFieldName:{type:Object,default:()=>({text:"label",value:"value",children:"children"})}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,{filedAttrs:l,attrs:d}=P(ce()),{formState:s}=j(me)||{},i=o({modelValue:"",columns:[]}),m=u((()=>"button"===t.type)),c=u((()=>(i.columns.find((e=>String(e.value)===String(i.modelValue)))||{}).text||"")),h=e=>{i.modelValue=e,a("update:modelValue",e)};return n((()=>t.modelValue),(e=>{i.modelValue=e}),{immediate:!0}),n((()=>{var e;return null==(e=s.formData)?void 0:e[l.value.name]}),(e=>{i.modelValue=e}),{immediate:!0,deep:!0}),n((()=>t.columns),((e=[])=>{if(r(e)){i.columns=e.map((e=>({...e,text:e[t.customFieldName.text],value:e[t.customFieldName.value]})));const[{disabled:a,value:l}]=i.columns;!t.isDefaultSelected||a||!pe(t.modelValue)&&""!==t.modelValue||h(l)}}),{deep:!0,immediate:!0}),(a,t)=>{const o=A,s=F,u=M;return p(),f(ve,w({class:"com-van-radio-wrap"},V(l),{"model-value":V(i).modelValue}),{input:v((()=>[e.isView?(p(),f(fe,{key:0,value:V(c)},null,8,["value"])):(p(),y(b,{key:1},[V(m)?(p(!0),y(b,{key:0},g(V(i).columns,(e=>(p(),f(o,{key:e.value,label:e.text,disabled:e.disabled,activated:V(i).modelValue==e.value,"icon-name":e.iconName,onClick:a=>(({disabled:e,value:a})=>{d.value.disabled||e||h(a)})(e)},null,8,["label","disabled","activated","icon-name","onClick"])))),128)):(p(),f(u,w({key:1,modelValue:V(i).modelValue,"onUpdate:modelValue":t[0]||(t[0]=e=>V(i).modelValue=e)},V(d)),{default:v((()=>[(p(!0),y(b,null,g(V(i).columns,(e=>(p(),f(s,w({key:e.value,name:e.value},e),{default:v((()=>[$(Y(e.label),1)])),_:2},1040,["name"])))),128))])),_:1},16,["modelValue"]))],64))])),_:1},16,["model-value"])}}}),[["__scopeId","data-v-2f831be5"]]);const $e=l({inheritAttrs:!1,__name:"ProPickerV2",props:{relatedName:{type:String,default:""},columns:{type:Array,default:()=>[]},dictCode:{type:String,default:""},modelValue:{type:[String,Number],default:""},isDefaultSelected:{type:Boolean,default:!0},isView:{type:Boolean,default:!1},customFieldName:{type:Object,default:()=>({text:"label",value:"value",children:"children"})}},emits:["update:show","confirm","cancel","update:modelValue"],setup(t,{emit:l}){const d=t,s=e(),{dictMap:i}=a(s),{filedAttrs:m,filedSlots:c,attrs:f,slots:h}=P(ce()),{formState:k}=j(me)||{},[x,N]=O(!1),F=o({fieldValue:"",columns:[]}),$=e=>{((e,a)=>{if(d.relatedName&&e){const t=(be[d.relatedName]||{})[`${e}Effect`];"function"==typeof t&&t(a,k)}})("onChange",e),F.fieldValue=e,l("update:modelValue",e)},Y=e=>{const{value:a}=e||{};let t="";pe(a)||(t=a),N(!1),$(t),l("confirm",e)},A=()=>{N(!1)},M=u((()=>{let e=[];r(d.columns)&&(e=d.columns);const a=i.value[d.dictCode];return d.dictCode&&r(a)&&(e=a),Ve(r(t=e)?t.map((e=>({...e,text:e[d.customFieldName.text],value:e[d.customFieldName.value]}))):[]);var t})),E=u((()=>d.modelValue?d.columns.findIndex((e=>{var a;return e[null==(a=d.customFieldName)?void 0:a.values]===d.modelValue})):"")),U=u((()=>{if(r(M.value)){const e=M.value.find((e=>String(e.value)===String(F.fieldValue)))||{};return(null==e?void 0:e.text)||F.fieldValue}return F.fieldValue}));return n((()=>d.modelValue),(e=>{F.fieldValue=e}),{deep:!0,immediate:!0}),n((()=>{var e;return null==(e=null==k?void 0:k.formData)?void 0:e[m.value.name]}),(e=>{F.fieldValue=e}),{immediate:!0,deep:!0}),n(M,((e=[])=>{if(r(e)&&1===e.length){const[{disabled:e,value:a}]=M.value;!d.isDefaultSelected||e||!pe(d.modelValue)&&""!==d.modelValue||$(a)}}),{deep:!0,immediate:!0}),R((()=>{d.dictCode&&!k.dictCodeList.includes(d.dictCode)&&k.dictCodeList.push(d.dictCode)})),(e,a)=>{const l=T,d=L;return p(),y(b,null,[B(ye,w({"model-value":V(F).fieldValue,class:""+(!1===V(m).visible?"com-van-field--hidden":"")},V(m),{"field-value-view":V(U),"is-view":t.isView,onClick:a[0]||(a[0]=e=>!t.isView&&(x.value=!0))}),_({_:2},[g(Object.keys(V(c)),(a=>({name:a,fn:v((t=>[D(e.$slots,a,S(C(t||{})))]))})))]),1040,["model-value","class","field-value-view","is-view"]),B(d,{show:V(x),"onUpdate:show":a[1]||(a[1]=e=>I(x)?x.value=e:null),height:40,closeable:!1},{default:v((()=>[B(l,w({columns:V(M),"default-index":V(E)},V(f),{onCancel:A,onConfirm:Y}),_({_:2},[g(Object.keys(e.$slots),(a=>({name:a,fn:v((t=>[D(e.$slots,a,S(C(t||{})))]))})))]),1040,["columns","default-index"])])),_:3},8,["show"])],64)}}});var Ye=t(l({inheritAttrs:!1,__name:"ProSwitchV2",props:{modelValue:{type:[String,Number],default:""},isView:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,{filedAttrs:l,attrs:d}=P(ce()),{formState:s}=j(me)||{},i=o({modelValue:null});n((()=>t.modelValue),(e=>{i.modelValue=e}),{immediate:!0});const r=e=>{a("update:modelValue",e)},m=u((()=>["否","是"][Number(i.modelValue===d["active-value"])]));return n((()=>{var e;return null==(e=s.formData)?void 0:e[l.value.name]}),(e=>{i.modelValue=e}),{immediate:!0,deep:!0}),(a,t)=>{const o=De;return p(),f(ve,w({class:"com-van-switch-wrap"},V(l),{"model-value":V(i).modelValue}),{input:v((()=>[e.isView?(p(),f(fe,{key:0,value:V(m)},null,8,["value"])):(p(),f(o,w({key:1,"model-value":V(i).modelValue},V(d),{onChange:r}),null,16,["model-value"]))])),_:1},16,["model-value"])}}}),[["__scopeId","data-v-2b00e630"]]);var Ae=ke&&ke.isDate,Me=Ae?xe(Ae):function(e){return Se(e)&&"[object Date]"==Ce(e)};const Oe=l({inheritAttrs:!1,__name:"ProCalendarV2",props:{type:{type:String,default:"single"},valueType:{type:String,default:"date"},modelValue:{type:[String,Date],default:""},isView:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,{filedAttrs:l,filedSlots:d,attrs:s,slots:i}=P(ce()),m=o({fieldValue:"",defaultDate:null}),[c,f]=O(!1),h={date:"YYYY-MM-DD",datehour:"YYYY-MM-DD HH",datetime:"YYYY-MM-DD HH:mm"},k=u((()=>h[t.valueType]||"YYYY-MM-DD")),x=u((()=>r(m.fieldValue)?m.fieldValue.join("range"===t.type?"~":","):"string"==typeof m.fieldValue?m.fieldValue:"")),N=e=>{let l;l="single"===t.type?E(e).format(k.value):r(e)?e.map((e=>E(e).format(k.value))):[],m.fieldValue=l,a("update:modelValue",l),f(!1)};return n((()=>t.modelValue),(e=>{"single"===t.type?"string"==typeof e&&e&&(m.defaultDate=E(e).toDate()):m.defaultDate=r(e)?e.map((e=>E(e).toDate())):null,m.fieldValue=(e=>"single"===t.type?Me(e)?E(e).format(k.value):e||"":r(e)?e:[])(e)}),{immediate:!0,deep:!0}),(a,t)=>{const o=U;return p(),y(b,null,[B(ye,w({"model-value":V(m).fieldValue},V(l),{"field-value-view":V(x),onClick:t[0]||(t[0]=a=>!e.isView&&(c.value=!0))}),_({_:2},[g(Object.keys(V(d)),(e=>({name:e,fn:v((t=>[D(a.$slots,e,S(C(t||{})))]))})))]),1040,["model-value","field-value-view"]),B(o,w({show:V(c),"onUpdate:show":t[1]||(t[1]=e=>I(c)?c.value=e:null),type:e.type,"default-date":V(m).defaultDate},V(s),{onConfirm:N}),_({_:2},[g(Object.keys(V(i)),(e=>({name:e,fn:v((t=>[D(a.$slots,e,S(C(t||{})))]))})))]),1040,["show","type","default-date"])],64)}}}),Re=l({inheritAttrs:!1,__name:"ProCascaderV2",props:{showFullValue:{type:Boolean,default:!1},modelValue:{type:[String,Number,Object],default:""},columns:{type:Array,default:()=>[]},dictCode:{type:String,default:""},customFieldName:{type:Object,default:()=>({text:"name",value:"code",children:"children"})},level:{type:Number,default:0},isView:{type:Boolean,default:!1},selfValueViewFn:{type:Function,default:()=>{}}},emits:["update:modelValue","update:fullValue"],setup(t,{emit:l}){const d=t,s=e(),{dictMap:i}=a(s),{filedAttrs:m,filedSlots:c,attrs:f,slots:h}=P(ce()),[k,x]=O(!1),N=o({columns:[],modelValue:"",fieldValue:""}),j=()=>{x(!0)},F=()=>{x(!1)},$=u((()=>{let e=[];r(d.columns)&&(e=d.columns);const a=i.value[d.dictCode];return d.dictCode&&r(a)&&(e=a),ge(e,d.level)})),Y=u((()=>((e,a)=>{const t=[],{value:l,children:o}=d.customFieldName,s=(e,d=0)=>!!r(e)&&e.some(((e,i)=>{const{[o]:u,...n}=e;return t[d]=n,e[l]===a||!!r(u)&&s(u,d+1)}));return r(e)&&!s(e)?[]:t})($.value,N.modelValue))),A=u((()=>{if(!r(Y.value))return"";const{selfValueViewFn:e,showFullValue:a,customFieldName:t}=d,l=Y.value.map((e=>e[t.text])),o="function"==typeof e?e(Y.value):"";return o||(a?l.join("/"):l[l.length-1])})),M=({value:e,selectedOptions:a})=>{N.modelValue=e,l("update:modelValue",e),F()};return n((()=>d.modelValue),(e=>{N.modelValue=e}),{immediate:!0,deep:!0}),n((()=>Y.value),(e=>{l("update:fullValue",e)}),{deep:!0,immediate:!0}),(e,a)=>{const l=q,d=L;return p(),y(b,null,[B(ye,w({"model-value":V(N).modelValue},V(m),{"is-view":t.isView,"field-value-view":V(A),onClick:j}),_({_:2},[g(Object.keys(V(c)),(a=>({name:a,fn:v((t=>[D(e.$slots,a,S(C(t||{})))]))})))]),1040,["model-value","is-view","field-value-view"]),B(d,{show:V(k),"onUpdate:show":a[0]||(a[0]=e=>I(k)?k.value=e:null),height:60,closeable:!1,class:"com-cascader-popup"},{default:v((()=>[B(l,w({options:V($),"field-names":t.customFieldName,"model-value":V(N).modelValue},V(f),{onClose:F,onFinish:M}),_({_:2},[g(Object.keys(V(h)),(a=>({name:a,fn:v((t=>[D(e.$slots,a,S(C(t||{})))]))})))]),1040,["options","field-names","model-value"])])),_:3},8,["show"])],64)}}}),Te={class:"upload-item"},Be=["src"],Ie=["src"],Le={key:1,class:"text"},Ee={key:0,class:"upload-item cover"},Ue=(e=>(le("data-v-0c98d7be"),e=e(),de(),e))((()=>J("div",{class:"bg"},null,-1))),qe=["src"],He={class:"text"};var Ke=t(l({inheritAttrs:!1,__name:"ProIDCardUploadV2",props:{modelValue:{type:Array,default:()=>[]},customFieldName:{type:Object,default:()=>({text:"name",value:"code",children:"children"})},objectType:{type:Number,default:null},isView:{type:Boolean,default:!1}},emits:["update:modelValue","ocr"],setup(e,{emit:a}){const t=e,l=[{uploadType:H.ID_CARD_FRONT,category:K.OBVERSE_CERT,title:"上传人像面",imgSrc:z},{uploadType:H.ID_CARD_BACK,category:K.REVERSE_CERT,title:"上传国徽面",imgSrc:W}],{filedAttrs:d,filedSlots:i,attrs:m,slots:c}=P(ce()),{formState:h,objectType:_}=j(me)||{},D=s(),S=o({currentIndex:null,modelValue:[],ossKeyList:[]}),C=u((()=>S.modelValue.map((e=>[{url:e.url}]))));G((()=>S.modelValue));const x=(e,a)=>{const{uploadType:o,title:s,category:i}=l[a];Z(e.file,o).then((e=>{const{code:l,data:o}=e||{};"10000"===l&&o.url&&(S.modelValue[a]={...S.modelValue[a],url:o.url,category:i,name:s,objectType:t.objectType||_},S.ossKeyList[a]=o.ossKey,h.formData&&d.value.name&&(h.formData[d.value.name]=S.modelValue))}))};return n((()=>S.modelValue),(e=>{a("update:modelValue",e)}),{deep:!0,immediate:!0}),n((()=>t.modelValue),(e=>{Array.isArray(e)&&(S.modelValue=e)}),{deep:!0,immediate:!0}),n((()=>S.ossKeyList),(e=>{r(e)&&2===e.length&&Q({ossKey:e,imageType:ae.ID_CARD}).then((e=>{const{data:t,code:l}=e;if("10000"===l&&t&&t.idCardOcrVO){const{personName:e,personIdCard:l,validDateEnd:d,validDateStart:o,...s}=t.idCardOcrVO||{};a("ocr",{name:e,certNo:l,certEndDate:d,certStartDate:o,...s})}}))}),{deep:!0}),(a,o)=>{const s=te;return p(),f(ye,w({class:"com-van-id-card-upload-wrap","model-value":V(S).modelValue},V(d)),{input:v((()=>[(p(),y(b,null,g(l,((a,l)=>B(s,{key:a.uploadType,"max-count":1,deletable:!1,"preview-full-image":e.isView,disabled:e.isView,"model-value":V(C)[l],"after-read":e=>x(e,l),onClickPreview:e=>(e=>{t.isView||(S.currentIndex=e,ee((()=>{var e;null==(e=D.value)||e.chooseFile()})))})(l)},{"preview-cover":v((()=>[e.isView?k("",!0):(p(),y("div",Ee,[Ue,J("img",{src:V(X),class:"icon"},null,8,qe),J("div",He,Y(a.title),1)]))])),default:v((()=>[J("div",Te,[J("img",{src:a.imgSrc,class:"bg"},null,8,Be),e.isView?k("",!0):(p(),y("img",{key:0,src:V(X),class:"icon"},null,8,Ie)),e.isView?k("",!0):(p(),y("div",Le,Y(a.title),1))])])),_:2},1032,["preview-full-image","disabled","model-value","after-read","onClickPreview"]))),64)),B(s,{ref_key:"tempUploaderRef",ref:D,class:"temp-uploader","max-count":1,"after-read":e=>x(e,V(S).currentIndex)},null,8,["after-read"])])),_:1},16,["model-value"])}}}),[["__scopeId","data-v-0c98d7be"]]);var ze=t(l({inheritAttrs:!1,__name:"ProDatePickerV2",props:{type:{type:String,default:"date"},modelValue:{type:[String,Date],default:""},isView:{type:Boolean,default:!1},columns:{type:Array,default:()=>[]}},emits:["update:modelValue","cancel"],setup(e,{emit:a}){const t=e,{filedAttrs:l,filedSlots:d,attrs:s,slots:i}=P(ce()),{formState:r}=j(me)||{},[m,c]=O(!1),f=u((()=>!["time","month-day"].includes(t.type))),h=u((()=>f.value?new Date:null)),k=o({fieldValue:"",date:h.value}),x={datetime:"YYYY-MM-DD HH:mm",date:"YYYY-MM-DD","year-month":"YYYY-MM","month-day":"MM-DD",datehour:"YYYY-MM-DD HH",time:"mm:ss"},N=u((()=>({minDate:new Date(1900,0,1),maxDate:new Date}))),F=u((()=>x[t.type]||"YYYY-MM-DD HH:mm")),$=e=>{k.fieldValue=Me(e)?E(e).format(F.value):e,a("update:modelValue",k.fieldValue),c(!1)},Y=()=>{c(!1),a("cancel")},A=e=>{Me(e)?(k.date=e,k.fieldValue=E(e).format(F.value)):"string"==typeof e&&(k.fieldValue=e,f.value?k.date=E(e,F.value).isValid()?E(e,F.value).toDate():h.value:k.date=e)};return n((()=>t.modelValue),(e=>{A(e)}),{immediate:!0,deep:!0}),n((()=>{var e;return null==(e=r.formData)?void 0:e[l.value.name]}),(e=>{A(e)}),{immediate:!0,deep:!0}),(a,t)=>{const o=oe,u=L;return p(),y(b,null,[B(ye,w({"model-value":V(k).fieldValue},V(l),{"is-view":e.isView,class:a.$attrs.class,"field-value-view":V(k).fieldValue,onClick:t[0]||(t[0]=a=>!e.isView&&(m.value=!0))}),_({_:2},[g(Object.keys(V(d)),(e=>({name:e,fn:v((t=>[D(a.$slots,e,S(C(t||{})),void 0,!0)]))})))]),1040,["model-value","is-view","class","field-value-view"]),B(u,{show:V(m),"onUpdate:show":t[1]||(t[1]=e=>I(m)?m.value=e:null),height:40,closeable:!1},{default:v((()=>[B(o,w({type:e.type,"model-value":V(k).date},{...V(N),...V(s)},{onConfirm:$,onCancel:Y}),_({_:2},[g(Object.keys(V(i)),(e=>({name:e,fn:v((t=>[D(a.$slots,e,S(C(t||{})),void 0,!0)]))})))]),1040,["type","model-value"])])),_:3},8,["show"])],64)}}}),[["__scopeId","data-v-063d0538"]]);var We=t(l({__name:"ProSMSCode",props:{time:{type:Number,default:60},smsText:{type:String,default:"验证码"},relatedName:{type:String,default:"mobile"},sendSMSCode:{type:Function,default:e=>{"function"==typeof e&&e()}}},setup(e){const a=e,{formState:t,formRef:l}=j(me)||{},d=o({isCountdowning:!1}),{current:s,start:i,reset:r}=se({time:1e3*a.time,onFinish(){d.isCountdowning=!1}}),n=()=>{d.isCountdowning||l.value.validate(a.relatedName).then((()=>{a.sendSMSCode({mobile:t.formData[a.relatedName]},(()=>{d.isCountdowning=!0,x({message:"短信发送成功，请查收"}),r(),i()}))})).catch((()=>{}))},m=u((()=>{const{seconds:e}=s.value||{};return 0===e?a.smsText:d.isCountdowning?`${e}s`:a.smsText}));return(e,a)=>{const t=ie;return e.$attrs["is-view"]?k("",!0):(p(),f(ve,w({key:0,class:"com-pro-sms-code",type:"digit"},e.$attrs),{extra:v((()=>[B(t,{class:"extra-button",size:"small",plain:"",type:"primary",onClick:n},{default:v((()=>[$(Y(V(m)),1)])),_:1})])),_:1},16))}}}),[["__scopeId","data-v-73d26204"]]);var Ge=t(l({__name:"SchemaRenderField",props:{schema:{default:()=>[]},model:{default:()=>({})},config:{default:()=>({})},isView:{type:Boolean}},setup(e){const a=e,t=d(),l=o({config:{},formData:{},schema:[],isView:!1}),s=u((()=>Object.keys(t).filter((e=>"default"!==e))));return n([()=>a.schema,()=>l.config],(([e,a])=>{l.schema=e.map((e=>({...e,componentName:Pe[e.componentName]?m(Pe[e.componentName]):e.componentName,...a[e.name],nanoid:c()}))).filter((e=>!e.hidden))}),{immediate:!0,deep:!0}),n((()=>a.model),(e=>{e&&(l.formData=e)}),{immediate:!0,deep:!0}),n((()=>a.config),(e=>{l.config=e}),{immediate:!0,deep:!0}),(a,t)=>(p(!0),y(b,null,g(V(l).schema,((t,d)=>(p(),f(h(t.componentName),w({key:`${t.nanoid}_${d}`,modelValue:V(l).formData[t.name],"onUpdate:modelValue":e=>V(l).formData[t.name]=e},t,{"is-view":e.isView}),_({_:2},[g(V(s),(e=>({name:e,fn:v((t=>[D(a.$slots,e,S(C(t||{})),void 0,!0)]))})))]),1040,["modelValue","onUpdate:modelValue","is-view"])))),128))}}),[["__scopeId","data-v-367b1ee2"]]);const Qe=l({inheritAttrs:!1,__name:"ProBank",props:{required:{type:Boolean,default:!1},attributeValueList:{type:Array,default:()=>[]},paymentType:{type:Number,default:null},isView:{type:Boolean,default:!1}},setup(e){const a=e,{formState:t,markRequired:l}=j(me)||{};o({address:{detail:""}}),u((()=>String(a.paymentType)===String(Ne.RENEW_TERM))),u((()=>String(a.paymentType)!==String(Ne.FIRST_TERM)));const d=u((()=>r(a.attributeValueList)?a.attributeValueList.map((e=>({...he[e.code],isView:a.isView,required:a.required,label:e.value}))):[]));return(a,l)=>(p(),f(Ge,{schema:V(d),model:V(t).formData,"is-view":e.isView},null,8,["schema","model","is-view"]))}}),Je=l({inheritAttrs:!1,__name:"ProAddress",props:{name:{type:String,default:""},customFieldName:{type:Object,default:()=>({text:"name",value:"code",children:"children"})},valuePrefix:{type:String,default:""},isView:{type:Boolean,default:!1},attributeValueList:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,l=o({address:{detail:""}}),d=u((()=>{if(!t.valuePrefix)return l.address;return Object.keys(l.address).reduce(((e,a)=>(e[(e=>"string"==typeof e&&e?t.valuePrefix?`${t.valuePrefix}${we(e)}`:e:"")(a)]=l.address[a],e)),{})})),s=u((()=>{if(r(t.attributeValueList)){let e=0,a=!1;return t.attributeValueList.forEach((t=>{Number(t.code)>e&&"4"!==String(t.code)&&(e=Number(t.code)),"4"===String(t.code)&&(a=!0)})),{level:e&&e+1,showDetail:a}}return{level:0,showDetail:!0}})),i=u((()=>{const{level:e}=s.value,a=["province","city","area"][0===e?"area":e-1];return l.address[a]})),m=(e=[])=>{let a={};if(r(e)){const{text:l,value:d}=t.customFieldName;a=["province","city","area"].slice(0,Number(s.value.level||3)).reduce(((a,t,o)=>{const s=e[o+1]||{};return a[`${t}Code`]=s[d],a[`${t}Name`]=s[l],a}),{})}l.address={...l.address,...a}};return n((()=>l.address),(()=>{a("update:modelValue",l.address)}),{immediate:!0,deep:!0}),(a,t)=>{const o=ve;return p(),y(b,null,[B(ye,{class:"com-van-field--hidden",name:e.name,"model-value":V(d),rules:a.$attrs.rules,required:a.$attrs.required},null,8,["name","model-value","rules","required"]),B(Re,w({"show-full-value":"","custom-field-name":e.customFieldName},a.$attrs,{"model-value":V(i),"is-view":e.isView,level:V(s).level,"onUpdate:fullValue":m}),null,16,["custom-field-name","model-value","is-view","level"]),V(s).showDetail?(p(),f(o,{key:0,modelValue:V(l).address.detail,"onUpdate:modelValue":t[0]||(t[0]=e=>V(l).address.detail=e),"is-view":e.isView,type:"textarea",label:`${a.$attrs.label}详细地址`,required:a.$attrs.required,maxlength:50},null,8,["modelValue","is-view","label","required"])):k("",!0)],64)}}}),Xe={class:"occupation-view"},Ze={key:0,class:"class-tips"},ea={class:"occupation-view"},aa={key:0,class:"class-tips"};var ta=t(l({inheritAttrs:!1,__name:"ProOccupation",props:{name:{type:String,default:""},customFieldName:{type:Object,default:()=>({text:"value",value:"code",children:"children"})},modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,{formState:l}=j(me)||{},d="name",s=o({modelValue:[],text:"",occupationClass:""}),i=(e=[])=>{var a;let o=[];if(r(e)){o=e.map((e=>e[t.customFieldName.value]));const{[null==(a=null==t?void 0:t.customFieldName)?void 0:a.text]:i,[d]:u}=e[e.length-1];s.text=i,s.occupationClass=u,(null==l?void 0:l.formData)&&(l.formData.occupationClass=u)}s.modelValue=o},m=u((()=>r(s.modelValue)?s.modelValue[s.modelValue.length-1]:null));return n((()=>t.modelValue),(e=>{s.modelValue=e}),{deep:!0,immediate:!0}),n((()=>s.modelValue),(e=>{a("update:modelValue",e)}),{deep:!0,immediate:!0}),(a,t)=>(p(),y(b,null,[B(ye,{modelValue:V(s).modelValue,"onUpdate:modelValue":t[0]||(t[0]=e=>V(s).modelValue=e),class:"com-van-field--hidden",name:e.name,rules:a.$attrs.rules,required:a.$attrs.required},null,8,["modelValue","name","rules","required"]),B(Re,w({"custom-field-name":e.customFieldName},a.$attrs,{"model-value":V(m),"onUpdate:fullValue":i}),{"value-view":v((()=>[J("span",Xe,[$(Y(V(s).text),1),V(s).occupationClass?(p(),y("span",Ze,Y(V(s).occupationClass)+"类",1)):k("",!0)])])),option:v((({option:a={}})=>{var t;return[J("span",ea,[$(Y(null==a?void 0:a[null==(t=e.customFieldName)?void 0:t.text]),1),(null==a?void 0:a[d])?(p(),y("span",aa,Y(null==a?void 0:a[d])+"类",1)):k("",!0)])]})),_:1},16,["custom-field-name","model-value"])],64))}}),[["__scopeId","data-v-3447de66"]]);var la=t(l({inheritAttrs:!1,__name:"ProRenderFormWithCard",props:{title:{type:String,default:""},class:{type:String,default:""}},setup(e,{expose:a}){const t=e,l=s(null),o=d(),i=u((()=>Object.keys(o).filter((e=>"cardTitleExtra"!==e))));return a({...["submit","getValues","validate","resetValidation","getValidationStatus","scrollToField"].reduce(((e,a)=>(e[a]=(...e)=>{var t;return null==(t=l.value)?void 0:t[a](...e)},e)),{})}),(a,d)=>{const o=re;return p(),f(o,{class:ue(`com-pro-form-with-card com-card-body-no-padding ${t.class}`),"show-divider":!1,title:e.title},{extra:v((()=>[D(a.$slots,"cardTitleExtra",{},void 0,!0)])),default:v((()=>[B(je,w({ref_key:"renderFormRef",ref:l},a.$attrs),_({_:2},[g(V(i),(e=>({name:e,fn:v((t=>[D(a.$slots,e,S(C(t||{})),void 0,!0)]))})))]),1040)])),_:3},8,["class","title"])}}}),[["__scopeId","data-v-176712c5"]]);export{la as P,Re as _,ze as a,Fe as b,je as c,We as d,Je as e,$e as f};
