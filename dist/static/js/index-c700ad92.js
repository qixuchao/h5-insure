import{aZ as e,a_ as a,E as t,d as l,aV as d,x as o,r as s,a$ as i,K as u,Q as r,b0 as n,c as m,e as c,w as f,g as p,y as v,R as V,U as y,b1 as h,aw as g,aj as b,k as w,h as _,at as D,T as S,b2 as C,ai as k,aQ as N,b3 as x,j as F,z as P,b4 as $,b5 as j,a6 as A,o as Y,b6 as M,i as O,a1 as R,af as I,v as T,b7 as B,b8 as L,aW as q,b9 as E,ba as U,aD as H,bb as K,f as W,bc as z,aX as Q,Z,bd as X,aY as G,ag as J,ah as ee,be as ae,am as te,B as le,A as de,bf as oe}from"./index-b6496322.js";import{d as se}from"./debounce-eed12388.js";import{V as ie,u as ue,b as re,d as ne,_ as me,e as ce,f as fe,r as pe,g as ve,P as Ve,h as ye,j as he}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-cb2db08d.js";/* empty css              */import{S as ge}from"./index-61b495ea.js";import{i as be,b as we}from"./isObjectLike-a9798079.js";import{n as _e,j as De}from"./_initCloneObject-0663309f.js";import{b as Se,a as Ce}from"./bankCard-313c0cbb.js";var ke=Object.freeze(Object.defineProperty({__proto__:null,get ProRenderForm(){return Ne},get ProFieldV2(){return me},get ProRadioV2(){return xe},get ProPickerV2(){return Fe},get ProSwitchV2(){return Pe},get ProCalendarV2(){return Ae},get ProCascaderV2(){return Ye},get ProUploadV2(){return he},get ProIDCardUploadV2(){return Ee},get ProDatePickerV2(){return Ue},get ProSMSCode(){return He},get ProBank(){return We},get ProAddress(){return ze},get ProOccupation(){return Qe},get ProRenderFormWithCard(){return Ze}},Symbol.toStringTag,{value:"Module"}));var Ne=t(l({__name:"ProRenderForm",props:{validateMethod:{default:"show-error"},model:{default:()=>({})},isView:{type:Boolean,default:!1},schema:{default:()=>[]},config:{default:()=>({})},markRequired:{type:Boolean,default:!0}},emits:["failed"],setup(t,{expose:l,emit:k}){const N=t,x=d(),F=o({config:{},formData:{},schema:[],nameList:[],dictCodeList:[]}),P=s({});i(ie,{formState:F,formRef:P,markRequired:N.markRequired});const $=u((()=>Object.keys(x).filter((e=>"default"!==e)))),j=u((()=>D(N.schema))),A=u((()=>{const[e,a]={toast:[!1,!1],"show-error":[!1,!0],"show-error-message":[!0,!1]}[N.validateMethod];return{"show-error-message":e,"show-error":a}})),Y=({values:e,errors:a})=>{if("toast"===N.validateMethod){const e=a.reduce(((e,a)=>(e[a.name]=a,e)),{}),t=Object.keys(e);if(t.length){const a=F.nameList.reduce(((e,a)=>(t.includes(a)&&e.push(a),e)),[]),{message:l}=e[a[0]]||{};S({message:l})}}console.log("failed errors",a),k("failed",{values:e,errors:a})};return r([()=>N.schema,()=>F.config],(([e,a])=>{j.value&&(F.schema=e.map((e=>({...e,componentName:ke[e.componentName]?n(ke[e.componentName]):e.componentName,...a[e.name]}))).filter((e=>!e.hidden)))}),{immediate:!0,deep:!0}),r((()=>N.config),(e=>{F.config=e}),{immediate:!0,deep:!0}),r((()=>F.dictCodeList),se((t=>{t&&(async t=>{const l=e(),{dictMap:d}=a(l);"string"==typeof t?(await l.getDict([t]),d.value[t]):(await l.getDict(t),t.map((e=>d.value[e])))})(t)}),500),{immediate:!0,deep:!0}),r((()=>N.model),(e=>{e&&(F.formData=e)}),{immediate:!0,deep:!0}),r((()=>F.schema),(e=>{F.dictCodeList=[...new Set([...F.dictCodeList,...F.schema.reduce(((e,a)=>(a.dictCode&&e.push(a.dictCode),e)),[])])]}),{immediate:!0,deep:!0}),l({...["submit","getValues","validate","resetValidation","getValidationStatus","scrollToField"].reduce(((e,a)=>(e[a]=(...e)=>{var t;return null==(t=P.value)?void 0:t[a](...e)},e)),{})}),(e,a)=>{const l=C;return m(),c(l,g({ref_key:"formRef",ref:P,class:"com-van-form"},{...p(A),...e.$attrs},{onFailed:Y}),{default:f((()=>[p(j)?(m(!0),v(V,{key:0},y(F.schema,((a,l)=>(m(),c(h(a.componentName),g({key:`${a.nanoid}_${l}`,"is-view":t.isView},a,{"model-value":F.formData[a.name]}),b({_:2},[y(p($),(a=>({name:a,fn:f((()=>[w(e.$slots,a,{},void 0,!0)]))})))]),1040,["is-view","model-value"])))),128)):_("",!0),w(e.$slots,"default",{},void 0,!0)])),_:3},16)}}}),[["__scopeId","data-v-66f77e13"]]);var xe=t(l({inheritAttrs:!1,__name:"ProRadioV2",props:{type:{type:String,default:"button"},modelValue:{type:[String,Number],default:""},columns:{type:Array,default:()=>[]},isDefaultSelected:{type:Boolean,default:!0},isView:{type:Boolean,default:!1},customFieldName:{type:Object,default:()=>({text:"label",value:"value",children:"children"})}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,{filedAttrs:l,attrs:d}=k(ue()),{formState:s}=N(ie)||{},i=o({modelValue:"",columns:[]}),n=u((()=>"button"===t.type)),h=u((()=>(i.columns.find((e=>String(e.value)===String(i.modelValue)))||{}).text||"")),b=e=>{(null==s?void 0:s.formData)&&l.value.name&&(s.formData[l.value.name]=e),i.modelValue=e,a("update:modelValue",e)};return r((()=>t.modelValue),(e=>{i.modelValue=e}),{immediate:!0}),r((()=>{var e;return null==(e=s.formData)?void 0:e[l.value.name]}),(e=>{i.modelValue=e}),{immediate:!0,deep:!0}),r((()=>t.columns),((e=[])=>{if(D(e)){i.columns=e.map((e=>({...e,text:e[t.customFieldName.text],value:e[t.customFieldName.value]})));const[{disabled:a,value:l}]=i.columns;!t.isDefaultSelected||a||!re(t.modelValue)&&""!==t.modelValue||b(l)}}),{deep:!0,immediate:!0}),(a,t)=>{const o=$,s=x,u=j;return m(),c(me,g({class:"com-van-radio-wrap"},p(l),{"model-value":p(i).modelValue}),{input:f((()=>[e.isView?(m(),c(ne,{key:0,value:p(h)},null,8,["value"])):(m(),v(V,{key:1},[p(n)?(m(!0),v(V,{key:0},y(p(i).columns,(e=>(m(),c(o,{key:e.value,label:e.text,disabled:e.disabled,activated:p(i).modelValue==e.value,"icon-name":e.iconName,onClick:a=>(({disabled:e,value:a})=>{d.value.disabled||e||b(a)})(e)},null,8,["label","disabled","activated","icon-name","onClick"])))),128)):(m(),c(u,g({key:1,modelValue:p(i).modelValue,"onUpdate:modelValue":t[0]||(t[0]=e=>p(i).modelValue=e)},p(d)),{default:f((()=>[(m(!0),v(V,null,y(p(i).columns,(e=>(m(),c(s,g({key:e.value,name:e.value},e),{default:f((()=>[F(P(e.label),1)])),_:2},1040,["name"])))),128))])),_:1},16,["modelValue"]))],64))])),_:1},16,["model-value"])}}}),[["__scopeId","data-v-5179ce02"]]);const Fe=l({inheritAttrs:!1,__name:"ProPickerV2",props:{relatedName:{type:String,default:""},columns:{type:Array,default:()=>[]},dictCode:{type:String,default:""},modelValue:{type:[String,Number],default:""},isDefaultSelected:{type:Boolean,default:!0},isView:{type:Boolean,default:!1},customFieldName:{type:Object,default:()=>({text:"label",value:"value",children:"children"})}},emits:["update:show","confirm","cancel","update:modelValue"],setup(t,{emit:l}){const d=t,s=e(),{dictMap:i}=a(s),{filedAttrs:n,filedSlots:c,attrs:h,slots:_}=k(ue()),{formState:S}=N(ie)||{},[C,x]=A(!1),F=o({fieldValue:"",columns:[]}),P=e=>{((e,a)=>{if(d.relatedName&&e){const t=(pe[d.relatedName]||{})[`${e}Effect`];"function"==typeof t&&t(a,S)}})("onChange",e),F.fieldValue=e,l("update:modelValue",e)},$=e=>{const{value:a}=e||{};let t="";re(a)||(t=a),x(!1),P(t),l("confirm",e)},j=()=>{x(!1)},T=u((()=>{let e=[];D(d.columns)&&(e=d.columns);const a=i.value[d.dictCode];return d.dictCode&&D(a)&&(e=a),fe(D(t=e)?t.map((e=>({...e,text:e[d.customFieldName.text],value:e[d.customFieldName.value]}))):[]);var t})),B=u((()=>d.modelValue?d.columns.findIndex((e=>{var a;return e[null==(a=d.customFieldName)?void 0:a.values]===d.modelValue})):"")),L=u((()=>{if(D(T.value)){const e=T.value.find((e=>String(e.value)===String(F.fieldValue)))||{};return(null==e?void 0:e.text)||F.fieldValue}return F.fieldValue}));return r((()=>d.modelValue),(e=>{F.fieldValue=e}),{deep:!0,immediate:!0}),r((()=>{var e;return null==(e=null==S?void 0:S.formData)?void 0:e[n.value.name]}),(e=>{F.fieldValue=e}),{immediate:!0,deep:!0}),r(T,((e=[])=>{if(D(e)&&1===e.length){const[{disabled:e,value:a}]=T.value;!d.isDefaultSelected||e||!re(d.modelValue)&&""!==d.modelValue||P(a)}}),{deep:!0,immediate:!0}),Y((()=>{d.dictCode&&!S.dictCodeList.includes(d.dictCode)&&S.dictCodeList.push(d.dictCode)})),(e,a)=>{const l=M,d=I;return m(),v(V,null,[O(ce,g({"model-value":p(F).fieldValue,class:""+(!1===p(n).visible?"com-van-field--hidden":"")},p(n),{"field-value-view":p(L),"is-view":t.isView,onClick:a[0]||(a[0]=e=>!t.isView&&(C.value=!0))}),b({_:2},[y(Object.keys(p(c)),(a=>({name:a,fn:f((()=>[w(e.$slots,a)]))})))]),1040,["model-value","class","field-value-view","is-view"]),O(d,{show:p(C),"onUpdate:show":a[1]||(a[1]=e=>R(C)?C.value=e:null),height:40,closeable:!1},{default:f((()=>[O(l,g({columns:p(T),"default-index":p(B)},p(h),{onCancel:j,onConfirm:$}),b({_:2},[y(Object.keys(e.$slots),(a=>({name:a,fn:f((()=>[w(e.$slots,a)]))})))]),1040,["columns","default-index"])])),_:3},8,["show"])],64)}}});var Pe=t(l({inheritAttrs:!1,__name:"ProSwitchV2",props:{modelValue:{type:[String,Number],default:""},isView:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,{filedAttrs:l,attrs:d}=k(ue()),{formState:s}=N(ie)||{},i=o({modelValue:null});r((()=>t.modelValue),(e=>{i.modelValue=e}),{immediate:!0});const n=e=>{(null==s?void 0:s.formData)&&l.value.name&&(s.formData[l.value.name]=e),a("update:modelValue",e)},v=u((()=>["否","是"][Number(i.modelValue===d["active-value"])]));return r((()=>{var e;return null==(e=s.formData)?void 0:e[l.value.name]}),(e=>{i.modelValue=e}),{immediate:!0,deep:!0}),(a,t)=>{const o=ge;return m(),c(me,g({class:"com-van-switch-wrap"},p(l),{"model-value":p(i).modelValue}),{input:f((()=>[e.isView?(m(),c(ne,{key:0,value:p(v)},null,8,["value"])):(m(),c(o,g({key:1,"model-value":p(i).modelValue},p(d),{onChange:n}),null,16,["model-value"]))])),_:1},16,["model-value"])}}}),[["__scopeId","data-v-56d112ee"]]);var $e=_e&&_e.isDate,je=$e?De($e):function(e){return be(e)&&"[object Date]"==we(e)};const Ae=l({inheritAttrs:!1,__name:"ProCalendarV2",props:{type:{type:String,default:"single"},valueType:{type:String,default:"date"},modelValue:{type:[String,Date],default:""},isView:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,{filedAttrs:l,filedSlots:d,attrs:s,slots:i}=k(ue()),n=o({fieldValue:"",defaultDate:null}),[c,h]=A(!1),_={date:"YYYY-MM-DD",datehour:"YYYY-MM-DD HH",datetime:"YYYY-MM-DD HH:mm"},S=u((()=>_[t.valueType]||"YYYY-MM-DD")),C=u((()=>D(n.fieldValue)?n.fieldValue.join("range"===t.type?"~":","):"string"==typeof n.fieldValue?n.fieldValue:"")),N=e=>{let l;l="single"===t.type?T(e).format(S.value):D(e)?e.map((e=>T(e).format(S.value))):[],n.fieldValue=l,a("update:modelValue",l),h(!1)};return r((()=>t.modelValue),(e=>{"single"===t.type?"string"==typeof e&&e&&(n.defaultDate=T(e).toDate()):n.defaultDate=D(e)?e.map((e=>T(e).toDate())):null,n.fieldValue=(e=>"single"===t.type?je(e)?T(e).format(S.value):e||"":D(e)?e:[])(e)}),{immediate:!0,deep:!0}),(a,t)=>{const o=B;return m(),v(V,null,[O(ce,g({"model-value":p(n).fieldValue},p(l),{"field-value-view":p(C),onClick:t[0]||(t[0]=a=>!e.isView&&(c.value=!0))}),b({_:2},[y(Object.keys(p(d)),(e=>({name:e,fn:f((()=>[w(a.$slots,e)]))})))]),1040,["model-value","field-value-view"]),O(o,g({show:p(c),"onUpdate:show":t[1]||(t[1]=e=>R(c)?c.value=e:null),type:e.type,"default-date":p(n).defaultDate},p(s),{onConfirm:N}),b({_:2},[y(Object.keys(p(i)),(e=>({name:e,fn:f((()=>[w(a.$slots,e)]))})))]),1040,["show","type","default-date"])],64)}}}),Ye=l({inheritAttrs:!1,__name:"ProCascaderV2",props:{showFullValue:{type:Boolean,default:!1},modelValue:{type:[String,Number,Object],default:""},columns:{type:Array,default:()=>[]},dictCode:{type:String,default:""},customFieldName:{type:Object,default:()=>({text:"name",value:"code",children:"children"})},level:{type:Number,default:0},isView:{type:Boolean,default:!1},selfValueViewFn:{type:Function,default:()=>{}}},emits:["update:modelValue","update:fullValue"],setup(t,{emit:l}){const d=t,s=e(),{dictMap:i}=a(s),{filedAttrs:n,filedSlots:c,attrs:h,slots:_}=k(ue()),[S,C]=A(!1),N=o({columns:[],modelValue:"",fieldValue:""}),x=()=>{C(!0)},F=()=>{C(!1)},P=u((()=>{let e=[];D(d.columns)&&(e=d.columns);const a=i.value[d.dictCode];return d.dictCode&&D(a)&&(e=a),ve(e,d.level)})),$=u((()=>((e,a)=>{const t=[],{value:l,children:o}=d.customFieldName,s=(e,d=0)=>!!D(e)&&e.some(((e,i)=>{const{[o]:u,...r}=e;return t[d]=r,e[l]===a||!!D(u)&&s(u,d+1)}));return D(e)&&!s(e)?[]:t})(P.value,N.modelValue))),j=u((()=>{if(!D($.value))return"";const{selfValueViewFn:e,showFullValue:a,customFieldName:t}=d,l=$.value.map((e=>e[t.text])),o="function"==typeof e?e($.value):"";return o||(a?l.join("/"):l[l.length-1])})),Y=({value:e,selectedOptions:a})=>{N.modelValue=e,N.fieldValue=e,l("update:modelValue",e),F()};return r((()=>d.modelValue),(e=>{N.modelValue=e}),{immediate:!0,deep:!0}),r((()=>$.value),(e=>{l("update:fullValue",e)}),{deep:!0,immediate:!0}),(e,a)=>{const l=L,d=I;return m(),v(V,null,[O(ce,g({"model-value":p(N).fieldValue},p(n),{"is-view":t.isView,"field-value-view":p(j),onClick:x}),b({_:2},[y(Object.keys(p(c)),(a=>({name:a,fn:f((()=>[w(e.$slots,a)]))})))]),1040,["model-value","is-view","field-value-view"]),O(d,{show:p(S),"onUpdate:show":a[0]||(a[0]=e=>R(S)?S.value=e:null),height:60,closeable:!1,class:"com-cascader-popup"},{default:f((()=>[O(l,g({options:p(P),"field-names":t.customFieldName,"model-value":p(N).modelValue},p(h),{onClose:F,onFinish:Y}),null,16,["options","field-names","model-value"])])),_:1},8,["show"])],64)}}}),Me={class:"upload-item"},Oe=["src"],Re=["src"],Ie={key:1,class:"text"},Te={key:0,class:"upload-item cover"},Be=(e=>(J("data-v-2cbfe870"),e=e(),ee(),e))((()=>W("div",{class:"bg"},null,-1))),Le=["src"],qe={class:"text"};var Ee=t(l({inheritAttrs:!1,__name:"ProIDCardUploadV2",props:{modelValue:{type:Array,default:()=>[]},customFieldName:{type:Object,default:()=>({text:"name",value:"code",children:"children"})},isView:{type:Boolean,default:!1}},emits:["update:modelValue","ocr"],setup(e,{emit:a}){const t=e,l=[{uploadType:q.ID_CARD_FRONT,title:"上传人像面",imgSrc:E},{uploadType:q.ID_CARD_BACK,title:"上传国徽面",imgSrc:U}],{filedAttrs:d,filedSlots:i,attrs:n,slots:h}=k(ue()),{formState:b}=N(ie)||{},w=s(),S=o({currentIndex:null,modelValue:[],ossKeyList:[]}),C=u((()=>S.modelValue.map((e=>[{url:e}]))));H((()=>S.modelValue));const x=(e,a)=>{Q(e.file,l[a].uploadType).then((e=>{const{code:t,data:l}=e||{};"10000"===t&&l.url&&(S.modelValue[a]=l.url,S.ossKeyList[a]=l.ossKey,b.formData&&d.value.name&&(b.formData[d.value.name]=S.modelValue))}))};return r((()=>S.modelValue),(e=>{a("update:modelValue",e)}),{deep:!0,immediate:!0}),r((()=>t.modelValue),(e=>{Array.isArray(e)&&(S.modelValue=e)}),{deep:!0,immediate:!0}),r((()=>S.ossKeyList),(e=>{D(e)&&2===e.length&&K({ossKey:e,imageType:X.ID_CARD}).then((e=>{const{data:t,code:l}=e;if("10000"===l&&t&&t.idCardOcrVO){const{personName:e,personIdCard:l,validDateEnd:d,validDateStart:o,...s}=t.idCardOcrVO||{};a("ocr",{name:e,certNo:l,certEndDate:d,certStartDate:o,...s})}}))}),{deep:!0}),(a,o)=>{const s=G;return m(),c(ce,g({class:"com-van-id-card-upload-wrap","model-value":p(S).modelValue},p(d)),{input:f((()=>[(m(),v(V,null,y(l,((a,l)=>O(s,{key:a.uploadType,"max-count":1,deletable:!1,"preview-full-image":e.isView,disabled:e.isView,"model-value":p(C)[l],"after-read":e=>x(e,l),onClickPreview:e=>(e=>{t.isView||(S.currentIndex=e,Z((()=>{var e;null==(e=w.value)||e.chooseFile()})))})(l)},{"preview-cover":f((()=>[e.isView?_("",!0):(m(),v("div",Te,[Be,W("img",{src:p(z),class:"icon"},null,8,Le),W("div",qe,P(a.title),1)]))])),default:f((()=>[W("div",Me,[W("img",{src:a.imgSrc,class:"bg"},null,8,Oe),e.isView?_("",!0):(m(),v("img",{key:0,src:p(z),class:"icon"},null,8,Re)),e.isView?_("",!0):(m(),v("div",Ie,P(a.title),1))])])),_:2},1032,["preview-full-image","disabled","model-value","after-read","onClickPreview"]))),64)),O(s,{ref_key:"tempUploaderRef",ref:w,class:"temp-uploader","max-count":1,"after-read":e=>x(e,p(S).currentIndex)},null,8,["after-read"])])),_:1},16,["model-value"])}}}),[["__scopeId","data-v-2cbfe870"]]);var Ue=t(l({inheritAttrs:!1,__name:"ProDatePickerV2",props:{type:{type:String,default:"date"},modelValue:{type:[String,Date],default:""},isView:{type:Boolean,default:!1},columns:{type:Array,default:()=>[]}},emits:["update:modelValue","cancel"],setup(e,{emit:a}){const t=e,{filedAttrs:l,filedSlots:d,attrs:s,slots:i}=k(ue()),{formState:n}=N(ie)||{},[c,h]=A(!1),_=u((()=>!["time","month-day"].includes(t.type))),D=u((()=>_.value?new Date:null)),S=o({fieldValue:"",date:D.value}),C={datetime:"YYYY-MM-DD HH:mm",date:"YYYY-MM-DD","year-month":"YYYY-MM","month-day":"MM-DD",datehour:"YYYY-MM-DD HH",time:"mm:ss"},x=u((()=>({minDate:new Date(1900,0,1),maxDate:new Date}))),F=u((()=>C[t.type]||"YYYY-MM-DD HH:mm")),P=e=>{S.fieldValue=je(e)?T(e).format(F.value):e,a("update:modelValue",S.fieldValue),h(!1)},$=()=>{h(!1),a("cancel")},j=e=>{je(e)?(S.date=e,S.fieldValue=T(e).format(F.value)):"string"==typeof e&&(S.fieldValue=e,_.value?S.date=T(e,F.value).isValid()?T(e,F.value).toDate():D.value:S.date=e)};return r((()=>t.modelValue),(e=>{j(e)}),{immediate:!0,deep:!0}),r((()=>{var e;return null==(e=n.formData)?void 0:e[l.value.name]}),(e=>{j(e)}),{immediate:!0,deep:!0}),(a,t)=>{const o=ae,u=I;return m(),v(V,null,[O(ce,g({"model-value":p(S).fieldValue},p(l),{"is-view":e.isView,"field-value-view":p(S).fieldValue,onClick:t[0]||(t[0]=a=>!e.isView&&(c.value=!0))}),b({_:2},[y(Object.keys(p(d)),(e=>({name:e,fn:f((()=>[w(a.$slots,e,{},void 0,!0)]))})))]),1040,["model-value","is-view","field-value-view"]),O(u,{show:p(c),"onUpdate:show":t[1]||(t[1]=e=>R(c)?c.value=e:null),height:40,closeable:!1},{default:f((()=>[O(o,g({type:e.type,"model-value":p(S).date},{...p(x),...p(s)},{onConfirm:P,onCancel:$}),b({_:2},[y(Object.keys(p(i)),(e=>({name:e,fn:f((()=>[w(a.$slots,e,{},void 0,!0)]))})))]),1040,["type","model-value"])])),_:3},8,["show"])],64)}}}),[["__scopeId","data-v-09ee6bbe"]]);var He=t(l({__name:"ProSMSCode",props:{time:{type:Number,default:60},smsText:{type:String,default:"验证码"},relatedName:{type:String,default:"mobile"},sendSMSCode:{type:Function,default:e=>{"function"==typeof e&&e()}}},setup(e){const a=e,{formState:t,formRef:l}=N(ie)||{},d=o({isCountdowning:!1}),{current:s,start:i,reset:r}=te({time:1e3*a.time,onFinish(){d.isCountdowning=!1}}),n=()=>{d.isCountdowning||l.value.validate(a.relatedName).then((()=>{a.sendSMSCode({mobile:t.formData[a.relatedName]},(()=>{d.isCountdowning=!0,S({message:"短信发送成功，请查收"}),r(),i()}))})).catch((()=>{}))},v=u((()=>{const{seconds:e}=s.value||{};return 0===e?a.smsText:d.isCountdowning?`${e}s`:a.smsText}));return(e,a)=>{const t=le;return e.$attrs["is-view"]?_("",!0):(m(),c(me,g({key:0,class:"com-pro-sms-code",type:"digit"},e.$attrs),{extra:f((()=>[O(t,{class:"extra-button",size:"small",plain:"",type:"primary",onClick:n},{default:f((()=>[F(P(p(v)),1)])),_:1})])),_:1},16))}}}),[["__scopeId","data-v-73d26204"]]);var Ke=t(l({__name:"SchemaRenderField",props:{schema:{default:()=>[]},model:{default:()=>({})},config:{default:()=>({})},isView:{type:Boolean}},setup(e){const a=e,t=d(),l=o({config:{},formData:{},schema:[],isView:!1}),s=u((()=>Object.keys(t).filter((e=>"default"!==e))));return r([()=>a.schema,()=>l.config,()=>a.model],(([e,t])=>{l.schema=e.map((e=>({...e,modelValue:a.model[e.name],componentName:ke[e.componentName]?n(ke[e.componentName]):e.componentName,...t[e.name]}))).filter((e=>!e.hidden))}),{immediate:!0,deep:!0}),r((()=>a.config),(e=>{l.config=e}),{immediate:!0,deep:!0}),(a,t)=>(m(!0),v(V,null,y(p(l).schema,((t,l)=>(m(),c(h(t.componentName),g({key:`${t.nanoid}_${l}`},t,{"is-view":e.isView}),b({_:2},[y(p(s),(e=>({name:e,fn:f((()=>[w(a.$slots,e,{},void 0,!0)]))})))]),1040,["is-view"])))),128))}}),[["__scopeId","data-v-b1a902fa"]]);const We=l({inheritAttrs:!1,__name:"ProBank",props:{required:{type:Boolean,default:!1},attributeValueList:{type:Array,default:()=>[]},paymentType:{type:Number,default:null},isView:{type:Boolean,default:!1}},setup(e){const a=e,{formState:t,markRequired:l}=N(ie)||{};o({address:{detail:""}});const d=u((()=>String(a.paymentType)===String(Se.RENEW_TERM))),s=u((()=>String(a.paymentType)!==String(Se.FIRST_TERM))),i=u((()=>D(a.attributeValueList)?a.attributeValueList.map((e=>{var l;const o=Ve[d.value&&"sameFirstIssue"===e.code?"renewalSameFirstIssue":e.code];let i={};return"sameFirstIssue"!==e.code&&(i={hidden:!!s.value&&[Ce.FIRST_SAME,Ce.RENEW_SAME].includes(Number(null==(l=t.formData)?void 0:l.sameFirstIssue))}),{...o,isView:a.isView,required:a.required,...i,label:e.value}})):[]));return(a,l)=>(m(),c(Ke,{schema:p(i),model:p(t).formData,"is-view":e.isView},null,8,["schema","model","is-view"]))}}),ze=l({inheritAttrs:!1,__name:"ProAddress",props:{name:{type:String,default:""},customFieldName:{type:Object,default:()=>({text:"name",value:"code",children:"children"})},valuePrefix:{type:String,default:""},isView:{type:Boolean,default:!1},attributeValueList:{type:Array,default:()=>[]}},setup(e){const a=e,t=o({address:{detail:""}}),l=u((()=>{if(!a.valuePrefix)return t.address;return Object.keys(t.address).reduce(((e,l)=>(e[(e=>"string"==typeof e&&e?a.valuePrefix?`${a.valuePrefix}${ye(e)}`:e:"")(l)]=t.address[l],e)),{})})),d=u((()=>{if(D(a.attributeValueList)){let e=0,t=!1;return a.attributeValueList.forEach((a=>{Number(a.code)>e&&"4"!==String(a.code)&&(e=Number(a.code)),"4"===String(a.code)&&(t=!0)})),{level:e&&e+1,showDetail:t}}return{level:0,showDetail:!0}})),s=(e=[])=>{let l={};if(D(e)){const{text:t,value:o}=a.customFieldName;l=["province","city","area"].slice(0,Number(d.value.level||3)).reduce(((a,l,d)=>{const s=e[d+1]||{};return a[`${l}Code`]=s[o],a[`${l}Name`]=s[t],a}),{})}t.address={...t.address,...l}};return(a,o)=>{const i=me;return m(),v(V,null,[O(ce,{class:"com-van-field--hidden",name:e.name,"model-value":p(l),rules:a.$attrs.rules,required:a.$attrs.required},null,8,["name","model-value","rules","required"]),O(Ye,g({"show-full-value":"","custom-field-name":e.customFieldName},a.$attrs,{"is-view":e.isView,level:p(d).level,"onUpdate:fullValue":s}),null,16,["custom-field-name","is-view","level"]),p(d).showDetail?(m(),c(i,{key:0,modelValue:p(t).address.detail,"onUpdate:modelValue":o[0]||(o[0]=e=>p(t).address.detail=e),"is-view":e.isView,type:"textarea",label:`${a.$attrs.label}详细地址`,required:a.$attrs.required,maxlength:50},null,8,["modelValue","is-view","label","required"])):_("",!0)],64)}}}),Qe=l({inheritAttrs:!1,__name:"ProOccupation",props:{name:{type:String,default:""},customFieldName:{type:Object,default:()=>({text:"value",value:"code",children:"children"})},modelValue:{type:Array,default:()=>[]}},setup(e){const a=e,t=o({modelValue:[]}),l=(e=[])=>{let l=[];D(e)&&(l=e.map((e=>e[a.customFieldName.value]))),t.modelValue=l},d=u((()=>D(t.modelValue)?t.modelValue[t.modelValue.length-1]:null)),s=e=>{var t;if(!D(e))return"";const l=e[e.length-1];return`${l[null==(t=null==a?void 0:a.customFieldName)?void 0:t.text]} ${l.name}类`};return r((()=>a.modelValue),(e=>{console.log(11114444,e,a.name),t.modelValue=e}),{deep:!0,immediate:!0}),(a,o)=>(m(),v(V,null,[O(ce,{modelValue:p(t).modelValue,"onUpdate:modelValue":o[0]||(o[0]=e=>p(t).modelValue=e),class:"com-van-field--hidden",name:e.name,rules:a.$attrs.rules,required:a.$attrs.required},null,8,["modelValue","name","rules","required"]),O(Ye,g({"custom-field-name":e.customFieldName},a.$attrs,{"model-value":p(d),"self-value-view-fn":s,"onUpdate:fullValue":l}),null,16,["custom-field-name","model-value"])],64))}});var Ze=t(l({inheritAttrs:!1,__name:"ProRenderFormWithCard",props:{title:{type:String,default:""},class:{type:String,default:""}},setup(e,{expose:a}){const t=e,l=s(null),o=d(),i=u((()=>Object.keys(o).filter((e=>"cardTitleExtra"!==e))));return a({...["submit","getValues","validate","resetValidation","getValidationStatus","scrollToField"].reduce(((e,a)=>(e[a]=(...e)=>{var t;return null==(t=l.value)?void 0:t[a](...e)},e)),{})}),(a,d)=>{const o=oe;return m(),c(o,{class:de(`com-pro-form-with-card com-card-body-no-padding ${t.class}`),"show-divider":!1,title:e.title},{extra:f((()=>[w(a.$slots,"cardTitleExtra",{},void 0,!0)])),default:f((()=>[O(Ne,g({ref_key:"renderFormRef",ref:l},a.$attrs),b({_:2},[y(Object.keys(p(i)),(e=>({name:e,fn:f((()=>[w(a.$slots,e,{},void 0,!0)]))})))]),1040)])),_:3},8,["class","title"])}}}),[["__scopeId","data-v-66ec1c2a"]]);export{Ze as P,Ye as _,Ue as a,xe as b,Ne as c,He as d,ze as e,Fe as f};
