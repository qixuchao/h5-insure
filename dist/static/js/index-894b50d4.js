import{aR as e,aS as a,G as t,d as l,ao as o,A as d,r as s,aL as i,L as r,al as u,V as n,aT as m,am as c,b as f,g as p,w as v,f as V,c as y,$ as b,a7 as g,aU as h,a9 as _,aq as w,k as D,ar as S,as as C,h as k,T as j,aV as N,aw as x,ap as A,aW as P,j as O,E as $,aX as F,aY as Y,aZ as B,o as R,a_ as M,e as L,a0 as T,a$ as I,z as E,b0 as U,b1 as q,av as K,ac as H,b2 as z,b3 as W,au as G,b4 as X,i as Z,b5 as J,ax as Q,W as ee,b6 as ae,ay as te,aD as le,aE as oe,a4 as de,b7 as se,b8 as ie,B as re,F as ue,a5 as ne}from"./index-79b27ada.js";import{M as me,e as ce,U as fe,a as pe,d as ve,S as Ve,f as ye,r as be,s as ge}from"./keysIn-b1e7a5ec.js";import{S as he,i as _e,b as we}from"./isObjectLike-a9798079.js";import{g as De,a as Se}from"./_getTag-6b6e476d.js";import{d as Ce}from"./debounce-6981b306.js";import{V as ke,u as je,i as Ne,a as xe,_ as Ae,d as Pe,b as Oe,e as $e,f as Fe,P as Ye,g as Be,h as Re,j as Me}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-505a2492.js";/* empty css              */import{S as Le}from"./index-13d17b43.js";import{u as Te}from"./useDicData-fc9968ac.js";var Ie=Object.freeze(Object.defineProperty({__proto__:null,get ProRenderForm(){return aa},get ProFieldV2(){return Ae},get ProRadioV2(){return ta},get ProPickerV2(){return la},get ProSwitchV2(){return oa},get ProCalendarV2(){return ia},get ProCascaderV2(){return ra},get ProBaseUpload(){return Re},get ProUploadV2(){return Me},get ProIDCardUploadV2(){return ya},get ProBankUpload(){return ha},get ProDatePickerV2(){return _a},get ProSMSCode(){return wa},get ProBank(){return Sa},get ProAddress(){return Ca},get ProOccupation(){return Aa},get ProRenderFormWithCard(){return Pa}},Symbol.toStringTag,{value:"Module"}));function Ee(e){var a=-1,t=null==e?0:e.length;for(this.__data__=new me;++a<t;)this.add(e[a])}function Ue(e,a){for(var t=-1,l=null==e?0:e.length;++t<l;)if(a(e[t],t,e))return!0;return!1}Ee.prototype.add=Ee.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Ee.prototype.has=function(e){return this.__data__.has(e)};function qe(e,a,t,l,o,d){var s=1&t,i=e.length,r=a.length;if(i!=r&&!(s&&r>i))return!1;var u=d.get(e),n=d.get(a);if(u&&n)return u==a&&n==e;var m=-1,c=!0,f=2&t?new Ee:void 0;for(d.set(e,a),d.set(a,e);++m<i;){var p=e[m],v=a[m];if(l)var V=s?l(v,p,m,a,e,d):l(p,v,m,e,a,d);if(void 0!==V){if(V)continue;c=!1;break}if(f){if(!Ue(a,(function(e,a){if(s=a,!f.has(s)&&(p===e||o(p,e,t,l,d)))return f.push(a);var s}))){c=!1;break}}else if(p!==v&&!o(p,v,t,l,d)){c=!1;break}}return d.delete(e),d.delete(a),c}function Ke(e){var a=-1,t=Array(e.size);return e.forEach((function(e,l){t[++a]=[l,e]})),t}function He(e){var a=-1,t=Array(e.size);return e.forEach((function(e){t[++a]=e})),t}var ze=he?he.prototype:void 0,We=ze?ze.valueOf:void 0;var Ge=Object.prototype.hasOwnProperty;var Xe="[object Object]",Ze=Object.prototype.hasOwnProperty;function Je(e,a,t,l,o,d){var s=pe(e),i=pe(a),r=s?"[object Array]":Se(e),u=i?"[object Array]":Se(a),n=(r="[object Arguments]"==r?Xe:r)==Xe,m=(u="[object Arguments]"==u?Xe:u)==Xe,c=r==u;if(c&&ve(e)){if(!ve(a))return!1;s=!0,n=!1}if(c&&!n)return d||(d=new Ve),s||ye(e)?qe(e,a,t,l,o,d):function(e,a,t,l,o,d,s){switch(t){case"[object DataView]":if(e.byteLength!=a.byteLength||e.byteOffset!=a.byteOffset)return!1;e=e.buffer,a=a.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=a.byteLength||!d(new fe(e),new fe(a)));case"[object Boolean]":case"[object Date]":case"[object Number]":return ce(+e,+a);case"[object Error]":return e.name==a.name&&e.message==a.message;case"[object RegExp]":case"[object String]":return e==a+"";case"[object Map]":var i=Ke;case"[object Set]":var r=1&l;if(i||(i=He),e.size!=a.size&&!r)return!1;var u=s.get(e);if(u)return u==a;l|=2,s.set(e,a);var n=qe(i(e),i(a),l,o,d,s);return s.delete(e),n;case"[object Symbol]":if(We)return We.call(e)==We.call(a)}return!1}(e,a,r,t,l,o,d);if(!(1&t)){var f=n&&Ze.call(e,"__wrapped__"),p=m&&Ze.call(a,"__wrapped__");if(f||p){var v=f?e.value():e,V=p?a.value():a;return d||(d=new Ve),o(v,V,t,l,d)}}return!!c&&(d||(d=new Ve),function(e,a,t,l,o,d){var s=1&t,i=De(e),r=i.length;if(r!=De(a).length&&!s)return!1;for(var u=r;u--;){var n=i[u];if(!(s?n in a:Ge.call(a,n)))return!1}var m=d.get(e),c=d.get(a);if(m&&c)return m==a&&c==e;var f=!0;d.set(e,a),d.set(a,e);for(var p=s;++u<r;){var v=e[n=i[u]],V=a[n];if(l)var y=s?l(V,v,n,a,e,d):l(v,V,n,e,a,d);if(!(void 0===y?v===V||o(v,V,t,l,d):y)){f=!1;break}p||(p="constructor"==n)}if(f&&!p){var b=e.constructor,g=a.constructor;b==g||!("constructor"in e)||!("constructor"in a)||"function"==typeof b&&b instanceof b&&"function"==typeof g&&g instanceof g||(f=!1)}return d.delete(e),d.delete(a),f}(e,a,t,l,o,d))}function Qe(e,a,t,l,o){return e===a||(null==e||null==a||!_e(e)&&!_e(a)?e!=e&&a!=a:Je(e,a,t,l,Qe,o))}function ea(e,a){return Qe(e,a)}var aa=t(l({__name:"ProRenderForm",props:{validateMethod:{default:"show-error"},model:{default:()=>({})},isView:{type:Boolean,default:!1},schema:{default:()=>[]},config:{default:()=>({})},markRequired:{type:Boolean,default:!0},extraProvision:null},emits:["failed"],setup(t,{expose:l,emit:x}){const A=t,P=o(),O=d({config:{},formData:{},schema:[],nameList:[],dictCodeList:[]}),$=s({});i(ke,{formState:O,formRef:$,markRequired:A.markRequired&&!A.isView,...A.extraProvision});const F=r((()=>Object.keys(P).filter((e=>"default"!==e)))),Y=r((()=>u(A.schema))),B=r((()=>{const[e,a]={toast:[!1,!1],"show-error":[!1,!0],"show-error-message":[!0,!1]}[A.validateMethod];return{"show-error-message":e,"show-error":a}})),R=({values:e,errors:a})=>{if("toast"===A.validateMethod){const e=a.reduce(((e,a)=>(e[a.name]=a,e)),{}),t=Object.keys(e);if(t.length){const a=O.nameList.reduce(((e,a)=>(t.includes(a)&&e.push(a),e)),[]),{message:l}=e[a[0]]||{};j({message:l})}}console.log("failed errors",a),x("failed",{values:e,errors:a})};return n([()=>A.schema,()=>O.config],(([e,a])=>{Y.value&&(O.schema=e.map((e=>({...e,componentName:Ie[e.componentName]?m(Ie[e.componentName]):e.componentName,...a[e.name],nanoid:c()}))).filter((e=>!e.hidden)))}),{immediate:!0,deep:!0}),n((()=>A.config),(e=>{O.config=e}),{immediate:!0,deep:!0}),n((()=>O.dictCodeList),Ce((t=>{t&&(async t=>{const l=e(),{dictMap:o}=a(l);"string"==typeof t?(await l.getDict([t]),o.value[t]):(await l.getDict(t),t.map((e=>o.value[e])))})(t)}),500),{immediate:!0,deep:!0}),n((()=>A.model),((e,a)=>{ea(e,a)||(O.formData=e)}),{immediate:!0,deep:!0}),n((()=>O.schema),(e=>{O.dictCodeList=[...new Set([...O.dictCodeList,...O.schema.reduce(((e,a)=>(a.dictCode&&e.push(a.dictCode),e)),[])])]}),{immediate:!0,deep:!0}),l({...["submit","getValues","validate","resetValidation","getValidationStatus","scrollToField"].reduce(((e,a)=>(e[a]=(...e)=>{var t;return null==(t=$.value)?void 0:t[a](...e)},e)),{})}),(e,a)=>{const l=N;return f(),p(l,_({ref_key:"formRef",ref:$,class:"com-van-form"},{...V(B),...e.$attrs},{onFailed:R}),{default:v((()=>[V(Y)?(f(!0),y(b,{key:0},g(O.schema,((a,l)=>(f(),p(h(a.componentName),_({key:`${a.nanoid}_${l}`},a,{modelValue:O.formData[a.name],"onUpdate:modelValue":e=>O.formData[a.name]=e,"is-view":a.isView||t.isView}),w({_:2},[g(V(F),(a=>({name:a,fn:v((t=>[D(e.$slots,a,S(C(t||{})),void 0,!0)]))})))]),1040,["modelValue","onUpdate:modelValue","is-view"])))),128)):k("",!0),D(e.$slots,"default",{},void 0,!0)])),_:3},16)}}}),[["__scopeId","data-v-504f6dfa"]]);var ta=t(l({inheritAttrs:!1,__name:"ProRadioV2",props:{type:{type:String,default:"button"},modelValue:{type:[String,Number],default:""},columns:{type:Array,default:()=>[]},isDefaultSelected:{type:Boolean,default:!0},isView:{type:Boolean,default:!1},customFieldName:{type:Object,default:()=>({text:"label",value:"value",children:"children"})},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,{filedAttrs:l,attrs:o}=x(je()),{formState:s}=A(ke)||{},i=d({modelValue:"",columns:[]}),m=r((()=>"button"===t.type)),c=r((()=>(i.columns.find((e=>String(e.value)===String(i.modelValue)))||{}).text||"")),h=e=>{i.modelValue=e,a("update:modelValue",e)};return n((()=>t.modelValue),(e=>{i.modelValue=e}),{immediate:!0}),n((()=>{var e;return null==(e=s.formData)?void 0:e[l.value.name]}),(e=>{void 0===e&&void 0!==i.modelValue||(i.modelValue=e)}),{immediate:!0,deep:!0}),n((()=>t.columns),((e=[])=>{if(u(e)){i.columns=e.map((e=>({...e,text:e[t.customFieldName.text],value:e[t.customFieldName.value]})));const[{disabled:a,value:l}]=i.columns;!t.isDefaultSelected||a||!Ne(t.modelValue)&&""!==t.modelValue||h(l)}}),{deep:!0,immediate:!0}),(a,d)=>{const s=F,r=P,u=Y;return f(),p(Ae,_({class:"com-van-radio-wrap"},V(l),{"model-value":V(i).modelValue,disabled:e.disabled}),{input:v((()=>[e.isView?(f(),p(xe,{key:0,value:V(c)},null,8,["value"])):(f(),y(b,{key:1},[V(m)?(f(!0),y(b,{key:0},g(V(i).columns,(a=>(f(),p(s,{key:a.value,label:a.text,disabled:a.disabled||e.disabled,activated:V(i).modelValue==a.value,"icon-name":a.iconName,onClick:e=>(({disabled:e,value:a})=>{o.value.disabled||e||t.disabled||h(a)})(a)},null,8,["label","disabled","activated","icon-name","onClick"])))),128)):(f(),p(u,_({key:1,modelValue:V(i).modelValue,"onUpdate:modelValue":d[0]||(d[0]=e=>V(i).modelValue=e)},V(o),{disabled:e.disabled}),{default:v((()=>[(f(!0),y(b,null,g(V(i).columns,(a=>(f(),p(r,_({key:a.value,name:a.value},a,{disabled:e.disabled}),{default:v((()=>[O($(a.label),1)])),_:2},1040,["name","disabled"])))),128))])),_:1},16,["modelValue","disabled"]))],64))])),_:1},16,["model-value","disabled"])}}}),[["__scopeId","data-v-8192f7e2"]]);const la=l({inheritAttrs:!1,__name:"ProPickerV2",props:{relatedName:{type:String,default:""},columns:{type:Array,default:()=>[]},dictCode:{type:String,default:""},modelValue:{type:[String,Number],default:""},isDefaultSelected:{type:Boolean,default:!0},isView:{type:Boolean,default:!1},customFieldName:{type:Object,default:()=>({text:"label",value:"value",children:"children"})}},emits:["update:show","confirm","cancel","update:modelValue"],setup(t,{emit:l}){const o=t,s=e(),{dictMap:i}=a(s),{filedAttrs:m,filedSlots:c,attrs:p,slots:h}=x(je()),{formState:k}=A(ke)||{},[j,N]=B(!1),P=d({fieldValue:"",columns:[]}),O=e=>{((e,a)=>{if(o.relatedName&&e){const t=($e[o.relatedName]||{})[`${e}Effect`];"function"==typeof t&&t(a,k)}})("onChange",e),P.fieldValue=e,l("update:modelValue",e)},$=e=>{const{value:a}=e||{};let t="";Ne(a)||(t=a),N(!1),O(t),l("confirm",e)},F=()=>{N(!1)},Y=r((()=>{let e=[];u(o.columns)&&(e=o.columns);const a=i.value[o.dictCode];return o.dictCode&&u(a)&&(e=a),Pe(u(t=e)?t.map((e=>({...e,text:e[o.customFieldName.text],value:e[o.customFieldName.value]}))):[]);var t})),E=r((()=>P.fieldValue?o.columns.findIndex((e=>{var a;return String(e[null==(a=o.customFieldName)?void 0:a.value])===String(P.fieldValue)})):"")),U=r((()=>{if(u(Y.value)){const e=Y.value.find((e=>String(e.value)===String(P.fieldValue)))||{};return(null==e?void 0:e.text)||P.fieldValue}return P.fieldValue}));return n((()=>o.modelValue),(e=>{P.fieldValue=e}),{deep:!0,immediate:!0}),n(Y,((e=[])=>{if(u(e)&&1===e.length){const[{disabled:e,value:a}]=Y.value;!o.isDefaultSelected||e||!Ne(o.modelValue)&&""!==o.modelValue||O(a)}}),{deep:!0,immediate:!0}),R((()=>{o.dictCode&&!k.dictCodeList.includes(o.dictCode)&&k.dictCodeList.push(o.dictCode)})),(e,a)=>{const l=M,o=I;return f(),y(b,null,[L(Oe,_({"model-value":V(P).fieldValue,class:""+(!1===V(m).visible?"com-van-field--hidden":"")},V(m),{"field-value-view":V(U),"is-view":t.isView,onClick:a[0]||(a[0]=e=>!t.isView&&(j.value=!0))}),w({_:2},[g(Object.keys(V(c)),(a=>({name:a,fn:v((t=>[D(e.$slots,a,S(C(t||{})))]))})))]),1040,["model-value","class","field-value-view","is-view"]),L(o,{show:V(j),"onUpdate:show":a[1]||(a[1]=e=>T(j)?j.value=e:null),height:40,closeable:!1},{default:v((()=>[L(l,_({columns:V(Y),"default-index":V(E)},V(p),{onCancel:F,onConfirm:$}),w({_:2},[g(Object.keys(e.$slots),(a=>({name:a,fn:v((t=>[D(e.$slots,a,S(C(t||{})))]))})))]),1040,["columns","default-index"])])),_:3},8,["show"])],64)}}});var oa=t(l({inheritAttrs:!1,__name:"ProSwitchV2",props:{modelValue:{type:[String,Number],default:""},isView:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,{filedAttrs:l,attrs:o}=x(je()),{formState:s}=A(ke)||{},i=d({modelValue:null});n((()=>t.modelValue),(e=>{i.modelValue=e}),{immediate:!0});const u=e=>{a("update:modelValue",e)},m=r((()=>["否","是"][Number(i.modelValue===o["active-value"])]));return n((()=>{var e;return null==(e=s.formData)?void 0:e[l.value.name]}),(e=>{i.modelValue=e}),{immediate:!0,deep:!0}),(a,t)=>{const d=Le;return f(),p(Ae,_({class:"com-van-switch-wrap"},V(l),{"model-value":V(i).modelValue}),{input:v((()=>[e.isView?(f(),p(xe,{key:0,value:V(m)},null,8,["value"])):(f(),p(d,_({key:1,"model-value":V(i).modelValue},V(o),{onChange:u}),null,16,["model-value"]))])),_:1},16,["model-value"])}}}),[["__scopeId","data-v-2b00e630"]]);var da=be&&be.isDate,sa=da?ge(da):function(e){return _e(e)&&"[object Date]"==we(e)};const ia=l({inheritAttrs:!1,__name:"ProCalendarV2",props:{type:{type:String,default:"single"},valueType:{type:String,default:"date"},modelValue:{type:[String,Date],default:""},isView:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,{filedAttrs:l,filedSlots:o,attrs:s,slots:i}=x(je()),m=d({fieldValue:"",defaultDate:null}),[c,p]=B(!1),h={date:"YYYY-MM-DD",datehour:"YYYY-MM-DD HH",datetime:"YYYY-MM-DD HH:mm"},k=r((()=>h[t.valueType]||"YYYY-MM-DD")),j=r((()=>u(m.fieldValue)?m.fieldValue.join("range"===t.type?"~":","):"string"==typeof m.fieldValue?m.fieldValue:"")),N=e=>{let l;l="single"===t.type?E(e).format(k.value):u(e)?e.map((e=>E(e).format(k.value))):[],m.fieldValue=l,a("update:modelValue",l),p(!1)};return n((()=>t.modelValue),(e=>{"single"===t.type?"string"==typeof e&&e&&(m.defaultDate=E(e).toDate()):m.defaultDate=u(e)?e.map((e=>E(e).toDate())):null,m.fieldValue=(e=>"single"===t.type?sa(e)?E(e).format(k.value):e||"":u(e)?e:[])(e)}),{immediate:!0,deep:!0}),(a,t)=>{const d=U;return f(),y(b,null,[L(Oe,_({"model-value":V(m).fieldValue},V(l),{"field-value-view":V(j),onClick:t[0]||(t[0]=a=>!e.isView&&(c.value=!0))}),w({_:2},[g(Object.keys(V(o)),(e=>({name:e,fn:v((t=>[D(a.$slots,e,S(C(t||{})))]))})))]),1040,["model-value","field-value-view"]),L(d,_({show:V(c),"onUpdate:show":t[1]||(t[1]=e=>T(c)?c.value=e:null),type:e.type,"default-date":V(m).defaultDate},V(s),{onConfirm:N}),w({_:2},[g(Object.keys(V(i)),(e=>({name:e,fn:v((t=>[D(a.$slots,e,S(C(t||{})))]))})))]),1040,["show","type","default-date"])],64)}}}),ra=l({inheritAttrs:!1,__name:"ProCascaderV2",props:{showFullValue:{type:Boolean,default:!1},modelValue:{type:[String,Number,Object],default:""},columns:{type:Array,default:()=>[]},dictCode:{type:String,default:""},customFieldName:{type:Object,default:()=>({text:"name",value:"code",children:"children"})},level:{type:Number,default:0},isView:{type:Boolean,default:!1},selfValueViewFn:{type:Function,default:()=>{}}},emits:["update:modelValue","update:fullValue"],setup(t,{emit:l}){const o=t,s=e(),{dictMap:i}=a(s),{filedAttrs:m,filedSlots:c,attrs:p,slots:h}=x(je()),[k,j]=B(!1),N=d({columns:[],modelValue:"",fieldValue:""}),A=()=>{o.isView||j(!0)},P=()=>{j(!1)},O=r((()=>{let e=[];u(o.columns)&&(e=o.columns);const a=i.value[o.dictCode];return o.dictCode&&u(a)&&(e=a),Fe(e,o.level)})),$=r((()=>((e,a)=>{const t=[],{value:l,children:d}=o.customFieldName,s=(e,o=0)=>!!u(e)&&e.some(((e,i)=>{const{[d]:r,...n}=e;return t[o]=n,e[l]===a||!!u(r)&&s(r,o+1)}));return u(e)&&!s(e)?[]:t})(O.value,N.modelValue))),F=r((()=>{if(!u($.value))return"";const{selfValueViewFn:e,showFullValue:a,customFieldName:t}=o,l=$.value.map((e=>e[t.text])),d="function"==typeof e?e($.value):"";return d||(a?l.join("/"):l[l.length-1])})),Y=({value:e,selectedOptions:a})=>{N.modelValue=e,l("update:modelValue",e),P()};return n((()=>o.modelValue),(e=>{N.modelValue=e}),{immediate:!0,deep:!0}),n((()=>$.value),(e=>{l("update:fullValue",e)}),{deep:!0,immediate:!0}),(e,a)=>{const l=q,o=I;return f(),y(b,null,[L(Oe,_({"model-value":V(N).modelValue},V(m),{"is-view":t.isView,"field-value-view":V(F),onClick:A}),w({_:2},[g(Object.keys(V(c)),(a=>({name:a,fn:v((t=>[D(e.$slots,a,S(C(t||{})))]))})))]),1040,["model-value","is-view","field-value-view"]),L(o,{show:V(k),"onUpdate:show":a[0]||(a[0]=e=>T(k)?k.value=e:null),height:60,closeable:!1,class:"com-cascader-popup"},{default:v((()=>[L(l,_({options:V(O),"field-names":t.customFieldName,"model-value":V(N).modelValue},V(p),{onClose:P,onFinish:Y}),w({_:2},[g(Object.keys(V(h)),(a=>({name:a,fn:v((t=>[D(e.$slots,a,S(C(t||{})))]))})))]),1040,["options","field-names","model-value"])])),_:3},8,["show"])],64)}}}),ua=["onClick"],na=["src"],ma=["src"],ca={key:1,class:"text"},fa={key:0,class:"upload-item cover"},pa=(e=>(le("data-v-4a225136"),e=e(),oe(),e))((()=>Z("div",{class:"bg"},null,-1))),va=["src"],Va={class:"text"};var ya=t(l({inheritAttrs:!1,__name:"ProIDCardUploadV2",props:{modelValue:{type:Array,default:()=>[]},objectType:{type:Number,default:null},isView:{type:Boolean,default:!1}},emits:["update:modelValue","ocr"],setup(e,{emit:a}){const t=e,l=[{uploadType:K.ID_CARD_FRONT,category:H.OBVERSE_CERT,title:"上传人像面",imgSrc:z},{uploadType:K.ID_CARD_BACK,category:H.REVERSE_CERT,title:"上传国徽面",imgSrc:W}],{filedAttrs:o}=x(je()),{formState:i,objectType:m,objectId:c}=A(ke)||{},h=s(),w=d({currentIndex:null,modelValue:[],ossKeyList:[]}),D=r((()=>w.modelValue.map((e=>[{url:e.uri}]))));G((()=>w.modelValue));const S=(e,a)=>{const{uploadType:d,title:s,category:r}=l[a];Q(e.file,d).then((e=>{const{code:l,data:d}=e||{};"10000"===l&&d.url&&(w.modelValue[a]={...w.modelValue[a],objectId:c,uri:d.url,category:r,name:s,objectType:t.objectType||m},w.ossKeyList[a]=d.ossKey,i.formData&&o.value.name&&(i.formData[o.value.name]=w.modelValue))}))},C=e=>{t.isView||(w.currentIndex=e,ee((()=>{var e;null==(e=h.value)||e.chooseFile()})))};return n((()=>w.modelValue),(e=>{a("update:modelValue",e)}),{deep:!0,immediate:!0}),n((()=>t.modelValue),(e=>{Array.isArray(e)&&(w.modelValue=e)}),{deep:!0,immediate:!0}),n((()=>w.ossKeyList),(e=>{u(e)&&2===e.length&&X({ossKey:e,imageType:ae.ID_CARD}).then((e=>{const{data:t,code:l}=e;if("10000"===l&&t&&t.idCardOcrVO){const{personName:e,personIdCard:l,validDateEnd:o,validDateStart:d,...s}=t.idCardOcrVO||{};a("ocr",{name:e,certNo:l,certEndDate:o,certStartDate:d,...s})}}))}),{deep:!0}),(a,t)=>{const d=te;return f(),p(Oe,_({class:"com-van-id-card-upload-wrap","model-value":V(w).modelValue},V(o)),{input:v((()=>[(f(),y(b,null,g(l,((a,t)=>L(d,{key:a.uploadType,"max-count":1,deletable:!1,"preview-full-image":e.isView,disabled:e.isView,"model-value":V(D)[t],"after-read":e=>S(e,t),onClickPreview:e=>C(t)},{"preview-cover":v((()=>[e.isView?k("",!0):(f(),y("div",fa,[pa,Z("img",{src:V(J),class:"icon"},null,8,va),Z("div",Va,$(a.title),1)]))])),default:v((()=>[Z("div",{class:"upload-item",onClick:()=>C(t)},[Z("img",{src:a.imgSrc,class:"bg"},null,8,na),e.isView?k("",!0):(f(),y("img",{key:0,src:V(J),class:"icon"},null,8,ma)),e.isView?k("",!0):(f(),y("div",ca,$(a.title),1))],8,ua)])),_:2},1032,["preview-full-image","disabled","model-value","after-read","onClickPreview"]))),64)),L(d,{ref_key:"tempUploaderRef",ref:h,class:"temp-uploader","max-count":1,"after-read":e=>S(e,V(w).currentIndex)},null,8,["after-read"])])),_:1},16,["model-value"])}}}),[["__scopeId","data-v-4a225136"]]);const ba={class:"sub-label"},ga={class:"upload-item"};var ha=t(l({inheritAttrs:!1,__name:"ProBankUpload",props:{modelValue:{type:Array,default:()=>[]},subLabel:{type:String,default:""},objectType:{type:Number,default:null},isView:{type:Boolean,default:!1}},emits:["update:modelValue","ocr"],setup(e,{emit:a}){const t=e,l=[{category:H.OBVERSE_BANK_CARD,title:"银行卡正面照"},{category:H.REVERSE_BANK_CARD,title:"银行卡反面照"}],o=Te("BANK"),{filedAttrs:s}=x(je()),{objectType:i,objectId:m}=A(ke)||{},c=d({currentIndex:null,modelValue:[],ossKeyList:[]});G((()=>c.modelValue));const h=r((()=>c.modelValue.map((e=>e?[{url:e.uri}]:[]))));return n((()=>c.modelValue),(e=>{a("update:modelValue",e)}),{deep:!0,immediate:!0}),n((()=>t.modelValue),(e=>{c.modelValue=e||[]}),{deep:!0,immediate:!0}),n((()=>c.ossKeyList),(e=>{u(e)&&2===e.length&&X({ossKey:e,imageType:ae.BANK_CARD}).then((e=>{var t;const{data:l,code:d}=e;if("10000"===d&&l&&l.bankCardOcrVO){const{cardNo:e,bankName:d}=l.bankCardOcrVO,{code:s}=(null==(t=o.value)?void 0:t.find((e=>e.name===d)))||{};a("ocr",{bankName:d,payBank:s,bankCardNo:e})}}))}),{deep:!0}),(a,o)=>{const d=de,r=te;return f(),p(Oe,_({class:"com-van-bank-upload-wrap","model-value":V(c).modelValue},V(s)),w({input:v((()=>[(f(),y(b,null,g(l,((o,s)=>Z("div",{key:o.title,class:"com-image-upload"},[L(r,{"max-count":1,"preview-full-image":e.isView,disabled:e.isView,deletable:!e.isView,"model-value":V(h)[s],"before-delete":()=>(e=>{c.modelValue[e]=null})(s),"after-read":e=>((e,a)=>{const{title:o,category:d}=l[a];Q(e.file,K.BANK_CARD).then((e=>{const{code:l,data:s}=e||{};"10000"===l&&s.url&&(c.modelValue[a]={...c.modelValue[a],objectId:m,uri:s.url,category:d,name:o,objectType:t.objectType||i},c.ossKeyList[a]=s.ossKey)}))})(e,s)},{default:v((()=>[D(a.$slots,"default",{},(()=>[Z("div",ga,[L(d,{name:"image-upload",class:"icon"})])]),!0)])),_:2},1032,["preview-full-image","disabled","deletable","model-value","before-delete","after-read"])]))),64))])),_:2},[e.subLabel?{name:"label",fn:v((()=>[O($(V(s).label),1),Z("span",ba,$(e.subLabel),1)])),key:"0"}:void 0]),1040,["model-value"])}}}),[["__scopeId","data-v-40d84558"]]);var _a=t(l({inheritAttrs:!1,__name:"ProDatePickerV2",props:{relatedName:{type:String,default:""},type:{type:String,default:"date"},modelValue:{type:[String,Date],default:""},isView:{type:Boolean,default:!1},columns:{type:Array,default:()=>[]}},emits:["update:modelValue","cancel"],setup(e,{emit:a}){const t=e,{filedAttrs:l,filedSlots:o,attrs:s,slots:i}=x(je()),{formState:u}=A(ke)||{},[m,c]=B(!1),p=r((()=>!["time","month-day"].includes(t.type))),h=r((()=>p.value?new Date:null)),k=d({fieldValue:"",date:h.value}),j={datetime:"YYYY-MM-DD HH:mm",date:"YYYY-MM-DD","year-month":"YYYY-MM","month-day":"MM-DD",datehour:"YYYY-MM-DD HH",time:"mm:ss"},N=r((()=>({minDate:new Date(1900,0,1),maxDate:new Date}))),P=r((()=>j[t.type]||"YYYY-MM-DD HH:mm")),O=e=>{const l=sa(e)?E(e).format(P.value):e;((e,a)=>{if(t.relatedName&&e){const l=($e[t.relatedName]||{})[`${e}Effect`];"function"==typeof l&&l(a,u)}})("onChange",l),k.fieldValue=l,a("update:modelValue",k.fieldValue),c(!1)},$=()=>{c(!1),a("cancel")},F=e=>{sa(e)?(k.date=e,k.fieldValue=E(e).format(P.value)):"string"==typeof e&&(k.fieldValue=e,p.value?k.date=E(e,P.value).isValid()?E(e,P.value).toDate():h.value:k.date=e)};return n((()=>t.modelValue),(e=>{F(e)}),{immediate:!0,deep:!0}),n((()=>{var e;return null==(e=u.formData)?void 0:e[l.value.name]}),(e=>{F(e)}),{immediate:!0,deep:!0}),(a,t)=>{const d=se,r=I;return f(),y(b,null,[L(Oe,_({"model-value":V(k).fieldValue},V(l),{"is-view":e.isView,class:`${!1===V(l).visible?"com-van-field--hidden":""} ${a.$attrs.class}`,"field-value-view":V(k).fieldValue,onClick:t[0]||(t[0]=a=>!e.isView&&(m.value=!0))}),w({_:2},[g(Object.keys(V(o)),(e=>({name:e,fn:v((t=>[D(a.$slots,e,S(C(t||{})),void 0,!0)]))})))]),1040,["model-value","is-view","class","field-value-view"]),L(r,{show:V(m),"onUpdate:show":t[1]||(t[1]=e=>T(m)?m.value=e:null),height:40,closeable:!1},{default:v((()=>[L(d,_({type:e.type,"model-value":V(k).date},{...V(N),...V(s)},{onConfirm:O,onCancel:$}),w({_:2},[g(Object.keys(V(i)),(e=>({name:e,fn:v((t=>[D(a.$slots,e,S(C(t||{})),void 0,!0)]))})))]),1040,["type","model-value"])])),_:3},8,["show"])],64)}}}),[["__scopeId","data-v-0fa4d998"]]);var wa=t(l({__name:"ProSMSCode",props:{time:{type:Number,default:60},smsText:{type:String,default:"验证码"},relatedName:{type:String,default:"mobile"},sendSMSCode:{type:Function,default:e=>{"function"==typeof e&&e()}}},setup(e){const a=e,{formState:t,formRef:l}=A(ke)||{},o=d({isCountdowning:!1}),{current:s,start:i,reset:u}=ie({time:1e3*a.time,onFinish(){o.isCountdowning=!1}}),n=()=>{o.isCountdowning||l.value.validate(a.relatedName).then((()=>{a.sendSMSCode({mobile:t.formData[a.relatedName]},(()=>{o.isCountdowning=!0,j({message:"短信发送成功，请查收"}),u(),i()}))})).catch((()=>{}))},m=r((()=>{const{seconds:e}=s.value||{};return 0===e?a.smsText:o.isCountdowning?`${e}s`:a.smsText}));return(e,a)=>{const t=re;return e.$attrs["is-view"]?k("",!0):(f(),p(Ae,_({key:0,class:"com-pro-sms-code",type:"digit"},e.$attrs),{extra:v((()=>[L(t,{class:"extra-button",size:"small",plain:"",type:"primary",onClick:n},{default:v((()=>[O($(V(m)),1)])),_:1})])),_:1},16))}}}),[["__scopeId","data-v-a3279dde"]]);var Da=t(l({__name:"SchemaRenderField",props:{schema:{default:()=>[]},model:{default:()=>({})},config:{default:()=>({})},isView:{type:Boolean}},setup(e){const a=e,t=o(),l=d({config:{},formData:{},schema:[],isView:!1}),s=r((()=>Object.keys(t).filter((e=>"default"!==e))));return n([()=>a.schema,()=>l.config],(([e,a])=>{l.schema=e.map((e=>({...e,componentName:Ie[e.componentName]?m(Ie[e.componentName]):e.componentName,...a[e.name],nanoid:c()}))).filter((e=>!e.hidden))}),{immediate:!0,deep:!0}),n((()=>a.model),(e=>{e&&(l.formData=e)}),{immediate:!0,deep:!0}),n((()=>a.config),(e=>{l.config=e}),{immediate:!0,deep:!0}),(a,t)=>(f(!0),y(b,null,g(V(l).schema,((t,o)=>(f(),p(h(t.componentName),_({key:`${t.nanoid}_${o}`,modelValue:V(l).formData[t.name],"onUpdate:modelValue":e=>V(l).formData[t.name]=e},t,{"is-view":e.isView}),w({_:2},[g(V(s),(e=>({name:e,fn:v((t=>[D(a.$slots,e,S(C(t||{})),void 0,!0)]))})))]),1040,["modelValue","onUpdate:modelValue","is-view"])))),128))}}),[["__scopeId","data-v-367b1ee2"]]);const Sa=l({inheritAttrs:!1,__name:"ProBank",props:{required:{type:Boolean,default:!1},attributeValueList:{type:Array,default:()=>[]},isView:{type:Boolean,default:!1}},setup(e){const a=e,{formState:t,markRequired:l}=A(ke)||{},o=r((()=>u(a.attributeValueList)?a.attributeValueList.map((e=>({...Ye[e.code],isView:a.isView,required:a.required,label:e.value}))):[]));return(a,l)=>(f(),p(Da,{schema:V(o),model:V(t).formData,"is-view":e.isView},null,8,["schema","model","is-view"]))}}),Ca=l({inheritAttrs:!1,__name:"ProAddress",props:{modelValue:{type:Object,default:()=>({})},name:{type:String,default:""},customFieldName:{type:Object,default:()=>({text:"name",value:"code",children:"children"})},valuePrefix:{type:String,default:""},isView:{type:Boolean,default:!1},attributeValueList:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,l=d({address:{detail:""}}),o=r((()=>{if(!t.valuePrefix)return l.address;return Object.keys(l.address).reduce(((e,a)=>(e[(e=>"string"==typeof e&&e?t.valuePrefix?`${t.valuePrefix}${Be(e)}`:e:"")(a)]=l.address[a],e)),{})})),s=r((()=>{if(u(t.attributeValueList)){let e=0,a=!1;return t.attributeValueList.forEach((t=>{Number(t.code)>e&&"4"!==String(t.code)&&(e=Number(t.code)),"4"===String(t.code)&&(a=!0)})),{level:e&&e+1,showDetail:a}}return{level:0,showDetail:!0}})),i=r((()=>{var e;const{level:a}=s.value,t=["province","city","area"][0===a?"area":a-2];return null==(e=l.address)?void 0:e[t]})),m=(e=[])=>{let a={};if(u(e)){const{text:l,value:o}=t.customFieldName;a=["province","city","area"].slice(0,Number(s.value.level||3)).reduce(((a,t,d)=>{const s=e[d+1]||{};return a[t]=s[o],a[`${t}Name`]=s[l],a}),{})}l.address={...l.address,...a}};return n((()=>l.address),(()=>{a("update:modelValue",l.address)}),{deep:!0}),n((()=>t.modelValue),(e=>{l.address=e||{}}),{immediate:!0,deep:!0}),(a,t)=>{const d=Ae;return f(),y(b,null,[L(Oe,{class:"com-van-field--hidden",name:e.name,"model-value":V(o),rules:a.$attrs.rules,required:a.$attrs.required},null,8,["name","model-value","rules","required"]),L(ra,_({"show-full-value":"","custom-field-name":e.customFieldName},a.$attrs,{"model-value":V(i),"is-view":e.isView,level:V(s).level,"onUpdate:fullValue":m}),null,16,["custom-field-name","model-value","is-view","level"]),V(s).showDetail?(f(),p(d,{key:0,modelValue:V(l).address.detail,"onUpdate:modelValue":t[0]||(t[0]=e=>V(l).address.detail=e),"is-view":e.isView,type:"textarea",label:`${a.$attrs.label}详细地址`,required:a.$attrs.required,maxlength:50},null,8,["modelValue","is-view","label","required"])):k("",!0)],64)}}}),ka={class:"occupation-view"},ja={key:0,class:"class-tips"},Na={class:"occupation-view"},xa={key:0,class:"class-tips"};var Aa=t(l({inheritAttrs:!1,__name:"ProOccupation",props:{name:{type:String,default:""},customFieldName:{type:Object,default:()=>({text:"value",value:"code",children:"children"})},modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,{formState:l}=A(ke)||{},o="name",s=d({modelValue:[],text:"",occupationClass:""}),i=(e=[])=>{var a;let d=[];if(u(e)){d=e.map((e=>e[t.customFieldName.value]));const{[null==(a=null==t?void 0:t.customFieldName)?void 0:a.text]:i,[o]:r}=e[e.length-1];s.text=i,s.occupationClass=r,(null==l?void 0:l.formData)&&(l.formData.occupationClass=r)}s.modelValue=d},m=r((()=>u(s.modelValue)?s.modelValue[s.modelValue.length-1]:null));return n((()=>t.modelValue),(e=>{s.modelValue=e}),{deep:!0,immediate:!0}),n((()=>s.modelValue),(e=>{a("update:modelValue",e)}),{deep:!0,immediate:!0}),(a,t)=>(f(),y(b,null,[L(Oe,{modelValue:V(s).modelValue,"onUpdate:modelValue":t[0]||(t[0]=e=>V(s).modelValue=e),class:"com-van-field--hidden",name:e.name,rules:a.$attrs.rules,required:a.$attrs.required},null,8,["modelValue","name","rules","required"]),L(ra,_({"custom-field-name":e.customFieldName},a.$attrs,{"model-value":V(m),"onUpdate:fullValue":i}),{"value-view":v((()=>[Z("span",ka,[O($(V(s).text),1),V(s).occupationClass?(f(),y("span",ja,$(V(s).occupationClass)+"类",1)):k("",!0)])])),option:v((({option:a={}})=>{var t;return[Z("span",Na,[O($(null==a?void 0:a[null==(t=e.customFieldName)?void 0:t.text]),1),(null==a?void 0:a[o])?(f(),y("span",xa,$(null==a?void 0:a[o])+"类",1)):k("",!0)])]})),_:1},16,["custom-field-name","model-value"])],64))}}),[["__scopeId","data-v-3447de66"]]);var Pa=t(l({inheritAttrs:!1,__name:"ProRenderFormWithCard",props:{title:{type:String,default:""},class:{type:String,default:""}},setup(e,{expose:a}){const t=e,l=s(null),d=o(),i=r((()=>Object.keys(d).filter((e=>"cardTitleExtra"!==e))));return a({...["submit","getValues","validate","resetValidation","getValidationStatus","scrollToField"].reduce(((e,a)=>(e[a]=(...e)=>{var t;return null==(t=l.value)?void 0:t[a](...e)},e)),{})}),(a,o)=>{const d=ne;return f(),p(d,{class:ue(`com-pro-form-with-card com-card-body-no-padding ${t.class}`),"show-divider":!1,title:e.title},{extra:v((()=>[D(a.$slots,"cardTitleExtra",{},void 0,!0)])),default:v((()=>[L(aa,_({ref_key:"renderFormRef",ref:l},a.$attrs),w({_:2},[g(V(i),(e=>({name:e,fn:v((t=>[D(a.$slots,e,S(C(t||{})),void 0,!0)]))})))]),1040)])),_:3},8,["class","title"])}}}),[["__scopeId","data-v-dc30f30c"]]);export{Pa as P,la as _,_a as a,ta as b,aa as c,wa as d,Ca as e,ea as i};
