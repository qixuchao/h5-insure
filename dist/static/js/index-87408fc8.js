import{cd as e,ce as t,cf as a,ah as l,a9 as r,D as o,b6 as s,bD as i,_ as n,d as u,bj as d,J as m,r as c,ba as f,E as p,an as v,cg as y,c as h,e as b,w as g,g as V,h as _,F as N,i as C,ch as $,b1 as S,bt as w,bk as D,k as A,T as O,aW as k,ci as P,b8 as T,G as E,j as M,t as x,y as j,bp as F,R,n as Y,aG as I,s as H,ax as B,f as L,S as Z,cj as z,a7 as U,a8 as q,ad as W,ck as G,cl as X,b9 as K,bW as J,B as Q,L as ee,P as te}from"./index-53cf4f16.js";import{d as ae}from"./debounce-2dbbea42.js";import{R as le,M as re,C as oe,G as se,V as ie,a as ne,l as ue}from"./ProOccupation.vue_vue_type_style_index_0_scoped_true_lang-a6223413.js";import{e as de,b as me,i as ce,g as fe,c as pe,k as ve,a as ye,d as he,f as be,h as ge,j as Ve,l as _e,m as Ne,n as Ce,o as $e,S as Se,p as we,q as De,r as Ae,s as Oe}from"./keysIn-b3061da8.js";import{i as ke,b as Pe,a as Te}from"./isObjectLike-d00d103b.js";var Ee=Object.freeze(Object.defineProperty({__proto__:null,get ProRenderForm(){return ht},get ProFieldV2(){return gt},get ProRadioV2(){return $t},get ProPickerV2(){return kt},get ProCalendarV2(){return Et},get ProCascaderV2(){return Mt},get ProDatePickerV2(){return xt},get ProSMSCode(){return jt},get ProAddress(){return Ft},get ProOccupation(){return Rt},get ProRenderFormWithCard(){return Yt}},Symbol.toStringTag,{value:"Module"}));const Me=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,xe=e=>{if(!Me.test(e))return!1;const t=18===e.length?e:function(e){if(15===e.length){const t=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],a=["1","0","X","9","8","7","6","5","4","3","2"];let l,r=0;for(e=`${e.substr(0,6)}19${e.substr(6,e.length-6)}`,l=0;l<17;l++)r+=e.substr(l,1)*t[l];return e+a[r%11]}return e}(e);if(18!==t.length)return!1;const a=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];let l=0;for(let s=0;s<17;s++)l+=t.substring(s,s+1)*a[s];const r=l%11,o=t.substring(17);return 2===r?"X"===o.toUpperCase():Number(o)===[1,0,10,9,8,7,6,5,4,3,2][r]},je={isName:e=>/^[\u4e00-\u9fa5a-z].{0,23}[\u4e00-\u9fa5a-z]/i.test(e),isExternal:e=>/^(https?:|mailto:|tel:)/.test(e),isEmail:e=>/^[A-Za-z0-9]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(e),isZipCode:e=>/^[0-9]{6,6}$/.test(e),isTel:e=>/0\d{2,3}-\d{7,8}/.test(e),isPhone:e=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(e),isZhCN:e=>/^[\u4e00-\u9fa5]+$/.test(e),isNotZhCN:e=>/^[^\u4e00-\u9fa5]+$/.test(e),isCommonChar:e=>/^[\w_]{6,20}$/.test(e),isNormalChar:e=>/^[\u4e00-\u9fa5a-zA-Z0-9]+$/.test(e),isAlphabetNumber:e=>/^[a-z0-9]+$/i.test(e),isAlphabetNumberOrSpecial:e=>/^[a-z0-9`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥¥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]+$/i.test(e),isIdCardNo:e=>xe(e),isHouseHold:e=>xe(e),isBirthType:e=>/^[a-zA-Z]\d{9}$/.test(e),isPassword:e=>/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,20}$/.test(e),isPassportType:e=>e.length>=5&&/^[^\u4e00-\u9fa5]+$/.test(e),isMilitaryCard:e=>/^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/.test(e),isSolider:e=>/^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/.test(e),isHongkongMacaoTravel:e=>/^[C]\d{8}$|^[C][a-hA-Hj-nJ-Np-zP-Z][0-9]{7}$/.test(e),isTaiwanTravel:e=>/^[L]\d{8}$/.test(e),isForeignPermanent:e=>/^[A-Z]{3}[0-9]{12}$/.test(e),isHKMacaoResidencePermit:e=>/^8[12]0000(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX]$/.test(e),isTaiwanResidencePermit:e=>/^830000(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX]$/.test(e),isUSCC:e=>/^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/.test(e),isUSCCPolicy:e=>/^[A-Z0-9]{18}$/.test(e),isOCC:e=>/^[A-Z0-9]{8}-[A-Z0-9]{1}$/.test(e),isBusinessLicense:e=>/(^\d{15}$)|(^[A-Z0-9]{18}$)/.test(e),isBandcard:e=>/^\d{12,20}$/g.test(e),isOtherCert:e=>/^.{1,18}$/.test(e)},Fe={[le.NAME]:[je.isName],[le.EXTERNAL]:[je.isExternal],[le.EMAIL]:[je.isEmail],[le.ZIP_CODE]:[je.isZipCode],[le.TEL]:[je.isTel],[le.MOBILE]:[je.isPhone],[le.ZH_CN]:[je.isZhCN],[le.NOT_ZH_CN]:[je.isNotZhCN],[le.NORMAL_CHAR]:[je.isNormalChar],[le.ALPHABET_NUMBER]:[je.isAlphabetNumber],[le.CERT]:[je.isIdCardNo],[le.HOUSE_HOLD]:[je.isHouseHold],[le.BIRTH]:[je.isBirthType],[le.PASSPORT]:[je.isPassportType],[le.MILITARY_CARD]:[je.isMilitaryCard],[le.SOLIDER]:[je.isSolider],[le.HONGKONG_MACAO]:[je.isHongkongMacaoTravel],[le.TAIWAN_TRAVEL]:[je.isTaiwanTravel],[le.FOREIGN_PERMANENT]:[je.isForeignPermanent],[le.HK_MACAO_RESIDENCE_PERMIT]:[je.isHKMacaoResidencePermit],[le.TAIWAN_RESIDENCE_PERMIT]:[je.isTaiwanResidencePermit],[le.SOCIAL_CREDIT_CODE]:[je.isUSCCPolicy],[le.OCC]:[je.isOCC],[le.BUSINESS_LICENSE]:[je.isBusinessLicense],[le.BAND_CARD]:[je.isBandcard],[le.OTHER_CERT]:[je.isOtherCert]};function Re(e,t,a){(void 0!==a&&!de(e[t],a)||void 0===a&&!(t in e))&&me(e,t,a)}var Ye,Ie=function(e,t,a){for(var l=-1,r=Object(e),o=a(e),s=o.length;s--;){var i=o[Ye?s:++l];if(!1===t(r[i],i,r))break}return e};var He=Function.prototype,Be=Object.prototype,Le=He.toString,Ze=Be.hasOwnProperty,ze=Le.call(Object);function Ue(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}function qe(e,t,a,l,r,o,s){var i=Ue(e,a),n=Ue(t,a),u=s.get(n);if(u)Re(e,a,u);else{var d,m=o?o(i,n,a+"",e,t,s):void 0,c=void 0===m;if(c){var f=ye(n),p=!f&&he(n),v=!f&&!p&&be(n);m=n,f||p||v?ye(i)?m=i:ke(d=i)&&ce(d)?m=ge(i):p?(c=!1,m=Ve(n,!0)):v?(c=!1,m=_e(n,!0)):m=[]:function(e){if(!ke(e)||"[object Object]"!=Pe(e))return!1;var t=fe(e);if(null===t)return!0;var a=Ze.call(t,"constructor")&&t.constructor;return"function"==typeof a&&a instanceof a&&Le.call(a)==ze}(n)||Ne(n)?(m=i,Ne(i)?m=function(e){return pe(e,ve(e))}(i):Te(i)&&!Ce(i)||(m=$e(n))):c=!1}c&&(s.set(n,m),r(m,n,l,o,s),s.delete(n)),Re(e,a,m)}}function We(e,t,a,l,r){e!==t&&Ie(t,(function(o,s){if(r||(r=new Se),Te(o))qe(e,t,s,a,We,l,r);else{var i=l?l(Ue(e,s),o,s+"",e,t,r):void 0;void 0===i&&(i=o),Re(e,s,i)}}),ve)}function Ge(e){return e}function Xe(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}var Ke=Math.max;var Je=we?function(e,t){return we(e,"toString",{configurable:!0,enumerable:!1,value:(a=t,function(){return a}),writable:!0});var a}:Ge,Qe=Je,et=Date.now;var tt,at,lt,rt=(tt=Qe,at=0,lt=0,function(){var e=et(),t=16-(e-lt);if(lt=e,t>0){if(++at>=800)return arguments[0]}else at=0;return tt.apply(void 0,arguments)});function ot(e,t){return rt(function(e,t,a){return t=Ke(void 0===t?e.length-1:t,0),function(){for(var l=arguments,r=-1,o=Ke(l.length-t,0),s=Array(o);++r<o;)s[r]=l[t+r];r=-1;for(var i=Array(t+1);++r<t;)i[r]=l[r];return i[t]=a(s),Xe(e,this,i)}}(e,t,Ge),e+"")}var st,it=(st=function(e,t,a){We(e,t,a)},ot((function(e,t){var a=-1,l=t.length,r=l>1?t[l-1]:void 0,o=l>2?t[2]:void 0;for(r=st.length>3&&"function"==typeof r?(l--,r):void 0,o&&function(e,t,a){if(!Te(a))return!1;var l=typeof t;return!!("number"==l?ce(a)&&De(t,a.length):"string"==l&&t in a)&&de(a[t],e)}(t[0],t[1],o)&&(r=l<3?void 0:r,l=1),e=Object(e);++a<l;){var s=t[a];s&&st(e,s,a,r)}return e})));const nt=["v-model","label","name","id","type","size","maxlength","placeholder","border","disabled","readonly","colon","required","center","clearable","clear-icon","clear-trigger","clickable","is-link","autofocus","show-word-limit","error","error-message","error-message-align","formatter","format-trigger","arrow-direction","label-class","label-width","label-align","input-align","autosize","left-icon","right-icon","icon-prefix","rules","autocomplete","enterkeyhint","visible"],ut=["label","input","left-icon","right-icon","button","error-message","extra"],dt={autocomplete:"off"},mt=(e,t="children")=>a(e)?e.map((({[`${t}`]:e,...l})=>{const r={};return a(e)&&(r.children=mt(e)),{...l,...r}})):[],ct=(e,t,l={})=>{const r=Object.keys(e);return a(r)?r.reduce(((a,l)=>{const r=t.includes(l);return a[Number(!r)][l]=e[l],a}),[{...l},{}]):[{...l},{}]},ft=e=>{if("certType"!==(null==e?void 0:e.name))return!1;const{columns:t,title:r}=e||{};return a(t)&&1===t.length&&t.find((e=>e.code===l.CERT))},pt=(e,t=!1)=>{if(!e)return[];const l=Object.keys(e)||[];if(!a(l))return[];const{holder:s,insured:i,beneficiary:n,payInfo:u}=l.reduce(((l,r)=>(l[re[r]]=a(e[r])?e[r].filter((e=>!t||1===e.isCalculationFactor)):[],l)),{}),d=a(s)?s.map((e=>e.code)):[],m=a(i)?i.map((e=>({...e,isSelfInsuredNeed:!d.includes(e.code)}))):[];return console.log("origin factors",s,i,n),[s,m,n,u].map((e=>(e=>{let t=[];const l=[];return a(e)&&(t=e.map((e=>{const{code:t,name:a,value:s,componentName:i,...n}=oe.find((t=>`${t.value}`==`${e.displayType}`))||{};e.isCalculationFactor===r.YES&&l.push(e.code);const u={},{componentName:d,...m}=se[e.code]||{},c=d||i||"ProFieldV2";2===e.moduleType&&(u.isSelfInsuredNeed=e.isSelfInsuredNeed);const f={...n,...u,customFieldName:{text:"value",value:"code",children:"children"},label:e.title,name:e.code,componentName:c,required:1===e.isMustInput,nanoid:o(),...m},p={...f,attributeValueList:e.attributeValueList,columns:f.dictCode?[]:e.attributeValueList||[]};return ft(p)&&(p.visible=!1),p}))),{schema:t,trialFactorCodes:l}})(e)))},vt=(e,t={})=>Object.keys(e).reduce(((e,a)=>(e[t[a]||a]=a,e)),{}),yt={certNo:{onChangeEffect:(e,t)=>{Object.assign(t.formData,{certNo:"",gender:"",birthday:""}),s((()=>{const e=![l.CERT,l.HOUSE_HOLD].includes(t.formData.certType);it(t.config,{gender:{visible:e},birthday:{visible:e}})}))}},certType:{extraAttrs:{4:{maxlength:10}},onChangeEffect:(e,t)=>{if([l.CERT,l.HOUSE_HOLD].includes(t.formData.certType)){const a=(e=>{const t={gender:"",birthday:""};if("string"==typeof e&&e&&xe(e)){const a={15:[6,12],18:[6,14]};t.birthday=e.slice(...a[e.length]).replace(/(.{4})(.{2})/,"$1-$2-"),t.gender=[i.FEMALE,i.MALE][Number(e.slice(-2,-1))%2]}return t})(e);Object.assign(t.formData,a)}}}};var ht=n(u({__name:"ProRenderForm",props:{validateMethod:{default:"show-error"},model:{default:()=>({})},isView:{type:Boolean,default:!1},schema:{default:()=>[]},config:{default:()=>({})},markRequired:{type:Boolean,default:!0}},emits:["failed"],setup(l,{expose:r,emit:o}){const s=l,i=d(),n=m({config:{},formData:{},schema:[],nameList:[],isView:s.isView}),u=c({});f(ie,{formState:n,formRef:u,markRequired:s.markRequired});const P=p((()=>Object.keys(i).filter((e=>"default"!==e)))),T=p((()=>a(s.schema))),E=p((()=>{const[e,t]={toast:[!1,!1],"show-error":[!1,!0],"show-error-message":[!0,!1]}[s.validateMethod];return{"show-error-message":e,"show-error":t}})),M=({values:e,errors:t})=>{if("toast"===s.validateMethod){const e=t.reduce(((e,t)=>(e[t.name]=t,e)),{}),a=Object.keys(e);if(a.length){const t=n.nameList.reduce(((e,t)=>(a.includes(t)&&e.push(t),e)),[]),{message:l}=e[t[0]]||{};O({message:l})}}console.log("failed errors",t),o("failed",{values:e,errors:t})};v([()=>s.schema,()=>n.config],(([e,t])=>{T.value&&(n.schema=e.map((e=>({...e,modelValue:s.model[e.name],componentName:Ee[e.componentName]?y(Ee[e.componentName]):e.componentName,...t[e.name]}))).filter((e=>!e.hidden)))}),{immediate:!0,deep:!0}),v((()=>s.config),(e=>{n.config=e}),{immediate:!0,deep:!0});const x=p((()=>[...new Set(n.schema.reduce(((e,t)=>(t.dictCode&&e.push(t.dictCode),e)),[]))]));return v(x,ae((a=>{a&&(async a=>{const l=e(),{dictMap:r}=t(l);"string"==typeof a?(await l.getDict([a]),r.value[a]):(await l.getDict(a),a.map((e=>r.value[e])))})(a)}),500),{immediate:!0,deep:!0}),v((()=>s.model),(e=>{e&&(n.formData=e)}),{immediate:!0,deep:!0}),r({...["submit","getValues","validate","resetValidation","getValidationStatus","scrollToField"].reduce(((e,t)=>(e[t]=(...e)=>{var a;return null==(a=u.value)?void 0:a[t](...e)},e)),{})}),(e,t)=>{const a=k;return h(),b(a,S({ref_key:"formRef",ref:u,class:"com-van-form"},{...V(E),...e.$attrs},{onFailed:M}),{default:g((()=>[V(T)?(h(!0),_(N,{key:0},C(n.schema,((t,a)=>(h(),b($(t.componentName),S({key:`${t.nanoid}_${a}`},t),w({_:2},[C(V(P),(t=>({name:t,fn:g((()=>[D(e.$slots,t,{},void 0,!0)]))})))]),1040)))),128)):A("",!0),D(e.$slots,"default",{},void 0,!0)])),_:3},16)}}}),[["__scopeId","data-v-6b52ea49"]]);const bt={class:"com-van-field-unit"},gt=u({inheritAttrs:!1,__name:"ProFieldV2",props:{ruleType:{type:String,default:""},modelValue:{type:[String,Number,Object,Array,Boolean],default:""},isView:{type:Boolean,default:!1},required:{type:Boolean,default:!1},rules:{type:Array,default:()=>[]},relatedName:{type:String,default:""},precision:{type:Number,default:0},isPrecisionCompleted:{type:Boolean,default:!1},unit:{type:String,default:""}},emits:["update:model-value","blur"],setup(e,{emit:t}){const l=e,r=P(),o=d(),{formState:s,markRequired:i}=T(ie)||{},n=m({modelValue:""}),u=p((()=>{const e=vt(o,r.slots),{extra:t,...a}=e;return l.unit?a:e})),c=p((()=>r.placeholder||`请输入${r.label||""}`)),f=p((()=>{var e,t;if(l.ruleType)return l.ruleType;if(l.relatedName){const a=null==(e=null==s?void 0:s.formData)?void 0:e[l.relatedName];if(a)return null==(t=ne[l.relatedName])?void 0:t[a]}return""})),y=p((()=>a(l.rules)?l.rules:[{required:l.required,validator:e=>{if(ue.exports.isNil(e)||""===e)return l.required?r.placeholder:"";if(f.value){const[t]=Fe[f.value]||[];if("function"!=typeof t)return console.warn(`%c 字段 ${r.label} 的规则 ${f} 校验函数不存在，请先确认～`,"color: #3e7;"),"";if(!t(e))return`请输入正确的${r.label}`}return""}}])),_=p((()=>"number"===r.type&&l.precision)),N=e=>_.value&&e?e.replace(/^(0)\d+$/g,"$1").replace(new RegExp(`^(\\d+\\.\\d{${l.precision}})\\d+$`,"g"),"$1"):e,$=p((()=>{var e;if(l.relatedName){const{extraAttrs:t}=yt[l.relatedName]||{},a=null==(e=null==s?void 0:s.formData)?void 0:e[l.relatedName];if(t&&!ue.exports.isNil(a)&&""!==a)return t[a]||{}}return{}})),A=(e,t)=>{if(l.relatedName&&e){const a=(yt[l.relatedName]||{})[`${e}Effect`];"function"==typeof a&&a(t,s)}},O=e=>{A("onChange",e),s.formData&&r.name&&(s.formData[r.name]=e),n.modelValue=e,t("update:model-value",e)},k=e=>{let a=n.modelValue;_.value&&a&&l.isPrecisionCompleted&&(a=Number(a).toFixed(l.precision),O(a)),A("onBlur",a),t("blur",e)};return v((()=>l.modelValue),(e=>{n.modelValue=e}),{immediate:!0,deep:!0}),v((()=>{var e;return null==(e=null==s?void 0:s.formData)?void 0:e[r.name]}),(e=>{n.modelValue=e}),{immediate:!0,deep:!0}),E((()=>{r.name&&s.nameList&&s.nameList.push(r.name)})),(t,a)=>{const l=j;return h(),b(l,S({"model-value":V(n).modelValue,class:`com-van-field ${V(i)?"":"field-mark_hidden"} ${!1===V(r).visible?"com-van-field--hidden":""}`,autocomplete:"off",formatter:N},{maxlength:25,...t.$attrs,placeholder:V(c),required:e.required,rules:V(y),...V($)},{onBlur:k,"onUpdate:modelValue":O}),w({_:2},[C(Object.keys(V(u)),(e=>({name:e,fn:g((()=>[D(t.$slots,V(u)[e])]))}))),e.unit?{name:"extra",fn:g((()=>[M("div",bt,x(e.unit),1)])),key:"0"}:void 0]),1040,["model-value","class"])}}});function Vt(e){return null==e}const _t={input:"请输入",select:"请选择"};function Nt({placeholderType:e}={placeholderType:"select"}){const t=P(),a=d(),l=m({filedAttrs:{},filedSlots:{},attrs:{},slots:{}});return v((()=>t),(()=>{const[a,r]=(e=>ct(e,nt,dt))(t);l.filedAttrs={...a,placeholder:t.placeholder||`${_t[e]}${t.label||""}`},l.attrs={title:`请选择${a.label}`,...r}}),{deep:!0,immediate:!0}),v([()=>a,()=>t.slots],(e=>{const[r,o]=(e=>ct(e,ut))(vt(a,t.slots));l.filedSlots=r||{},l.slots=o||{}}),{deep:!0,immediate:!0}),l}const Ct={key:0};var $t=n(u({inheritAttrs:!1,__name:"ProRadioV2",props:{type:{type:String,default:"button"},modelValue:{type:[String,Number],default:""},columns:{type:Array,default:()=>[]},isDefaultSelected:{type:Boolean,default:!0},isView:{type:Boolean,default:!1},customFieldName:{type:Object,default:()=>({text:"label",value:"value",children:"children"})}},emits:["update:modelValue"],setup(e,{emit:t}){const l=e,{filedAttrs:r,attrs:o}=F(Nt()),{formState:s}=T(ie)||{},i=m({modelValue:"",columns:[]}),n=p((()=>"button"===l.type)),u=p((()=>(i.columns.find((e=>e.value===i.modelValue))||{}).label||"")),d=e=>{(null==s?void 0:s.formData)&&r.value.name&&(s.formData[r.value.name]=e),i.modelValue=e,t("update:modelValue",e)};return v((()=>l.modelValue),(e=>{i.modelValue=e}),{immediate:!0}),v((()=>{var e;return null==(e=s.formData)?void 0:e[r.value.name]}),(e=>{i.modelValue=e}),{immediate:!0,deep:!0}),v((()=>l.columns),((e=[])=>{if(a(e)){i.columns=e.map((e=>({...e,text:e[l.customFieldName.text],value:e[l.customFieldName.value]})));const[{disabled:t,value:a}]=i.columns;!l.isDefaultSelected||t||!Vt(l.modelValue)&&""!==l.modelValue||d(a)}}),{deep:!0,immediate:!0}),(t,a)=>{const l=I,s=R,m=H;return h(),b(gt,S({class:"com-van-radio-wrap"},V(r),{"model-value":V(i).modelValue}),{input:g((()=>[e.isView?(h(),_("div",Ct,x(V(u)),1)):(h(),_(N,{key:1},[V(n)?(h(!0),_(N,{key:0},C(V(i).columns,(e=>(h(),b(l,{key:e.value,label:e.text,disabled:e.disabled,activated:V(i).modelValue==e.value,"icon-name":e.iconName,onClick:t=>(({disabled:e,value:t})=>{o.value.disabled||e||d(t)})(e)},null,8,["label","disabled","activated","icon-name","onClick"])))),128)):(h(),b(m,S({key:1,modelValue:V(i).modelValue,"onUpdate:modelValue":a[0]||(a[0]=e=>V(i).modelValue=e)},V(o)),{default:g((()=>[(h(!0),_(N,null,C(V(i).columns,(e=>(h(),b(s,S({key:e.value,name:e.value},e),{default:g((()=>[Y(x(e.label),1)])),_:2},1040,["name"])))),128))])),_:1},16,["modelValue"]))],64))])),_:1},16,["model-value"])}}}),[["__scopeId","data-v-367dd85a"]]);const St={style:{width:"100%"},class:"input"},wt={key:0,class:"displayValue"},Dt={key:1,class:"placeholder"},At=u({inheritAttrs:!1,__name:"CustomInput",props:{fieldValueView:{type:String,default:""},modelValue:{type:[String,Boolean,Object,Number],default:""}},setup(e){const t=e,a=P(),{formState:l}=T(ie)||{};return B((()=>((null==l?void 0:l.formData)&&a.name&&(l.formData[a.name]=t.modelValue),t.modelValue))),(t,a)=>(h(),_("div",St,[e.fieldValueView?(h(),_("span",wt,x(e.fieldValueView),1)):(h(),_("span",Dt,x(t.$attrs.placeholder),1))]))}}),Ot=u({__name:"ProFormItem",props:{fieldValueView:{type:String,default:""},name:{type:String,default:""},isView:{type:Boolean,default:!1},modelValue:{type:[String,Boolean,Object,Number],default:""}},setup:e=>(t,a)=>(h(),b(gt,{class:"com-form-item","is-link":!e.isView},w({input:g((()=>[L(At,{name:e.name,"model-value":e.modelValue,"field-value-view":e.fieldValueView,placeholder:t.$attrs.placeholder},null,8,["name","model-value","field-value-view","placeholder"])])),_:2},[C(Object.keys(t.$slots),(e=>({name:e,fn:g((()=>[D(t.$slots,e)]))})))]),1032,["is-link"]))}),kt=u({inheritAttrs:!1,__name:"ProPickerV2",props:{relatedName:{type:String,default:""},columns:{type:Array,default:()=>[]},dictCode:{type:String,default:""},modelValue:{type:[String,Number],default:""},isDefaultSelected:{type:Boolean,default:!0},isView:{type:Boolean,default:!1},customFieldName:{type:Object,default:()=>({text:"label",value:"value",children:"children"})}},emits:["update:show","confirm","cancel","update:modelValue"],setup(l,{emit:r}){const o=l,s=e(),{dictMap:i}=t(s),{filedAttrs:n,filedSlots:u,attrs:d,slots:c}=F(Nt()),{formState:f}=T(ie)||{},[y,b]=Z(!1),$=m({fieldValue:"",columns:[]}),A=e=>{((e,t)=>{if(o.relatedName&&e){const a=(yt[o.relatedName]||{})[`${e}Effect`];"function"==typeof a&&a(t,f)}})("onChange",e),$.fieldValue=e,r("update:modelValue",e)},O=e=>{const{value:t}=e||{};let a="";Vt(t)||(a=t),b(!1),A(a),r("confirm",e)},k=()=>{b(!1)},P=p((()=>{let e=[];a(o.columns)&&(e=o.columns);const t=i.value[o.dictCode];return o.dictCode&&a(t)&&(e=t),mt(a(l=e)?l.map((e=>({...e,text:e[o.customFieldName.text],value:e[o.customFieldName.value]}))):[]);var l})),E=p((()=>o.modelValue?o.columns.findIndex((e=>{var t;return e[null==(t=o.customFieldName)?void 0:t.values]===o.modelValue})):"")),M=p((()=>{if(a(P.value)){const e=P.value.find((e=>String(e.value)===String($.fieldValue)))||{};return(null==e?void 0:e.text)||$.fieldValue}return $.fieldValue}));return v((()=>o.modelValue),(e=>{$.fieldValue=e}),{deep:!0,immediate:!0}),v((()=>{var e;return null==(e=null==f?void 0:f.formData)?void 0:e[n.value.name]}),(e=>{$.fieldValue=e}),{immediate:!0,deep:!0}),v(P,((e=[])=>{if(a(e)&&1===e.length){const[{disabled:e,value:t}]=P.value;!o.isDefaultSelected||e||!Vt(o.modelValue)&&""!==o.modelValue||A(t)}}),{deep:!0,immediate:!0}),(e,t)=>{const a=z,r=q;return h(),_(N,null,[L(Ot,S({"model-value":V($).fieldValue,class:""+(!1===V(n).visible?"com-van-field--hidden":"")},V(n),{"field-value-view":V(M),onClick:t[0]||(t[0]=e=>!l.isView&&(y.value=!0))}),w({_:2},[C(Object.keys(V(u)),(t=>({name:t,fn:g((()=>[D(e.$slots,t)]))})))]),1040,["model-value","class","field-value-view"]),L(r,{show:V(y),"onUpdate:show":t[1]||(t[1]=e=>U(y)?y.value=e:null),height:40,closeable:!1},{default:g((()=>[L(a,S({columns:V(P),"default-index":V(E)},V(d),{onCancel:k,onConfirm:O}),w({_:2},[C(Object.keys(e.$slots),(t=>({name:t,fn:g((()=>[D(e.$slots,t)]))})))]),1040,["columns","default-index"])])),_:3},8,["show"])],64)}}});var Pt=Ae&&Ae.isDate,Tt=Pt?Oe(Pt):function(e){return ke(e)&&"[object Date]"==Pe(e)};const Et=u({inheritAttrs:!1,__name:"ProCalendarV2",props:{type:{type:String,default:"single"},valueType:{type:String,default:"date"},modelValue:{type:[String,Date],default:""},isView:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const l=e,{filedAttrs:r,filedSlots:o,attrs:s,slots:i}=F(Nt()),n=m({fieldValue:"",defaultDate:null}),[u,d]=Z(!1),c={date:"YYYY-MM-DD",datehour:"YYYY-MM-DD HH",datetime:"YYYY-MM-DD HH:mm"},f=p((()=>c[l.valueType]||"YYYY-MM-DD")),y=p((()=>a(n.fieldValue)?n.fieldValue.join("range"===l.type?"~":","):"string"==typeof n.fieldValue?n.fieldValue:"")),b=e=>{let r;r="single"===l.type?W(e).format(f.value):a(e)?e.map((e=>W(e).format(f.value))):[],n.fieldValue=r,t("update:modelValue",r),d(!1)};return v((()=>l.modelValue),(e=>{"single"===l.type?"string"==typeof e&&e&&(n.defaultDate=W(e).toDate()):n.defaultDate=a(e)?e.map((e=>W(e).toDate())):null,n.fieldValue=(e=>"single"===l.type?Tt(e)?W(e).format(f.value):e||"":a(e)?e:[])(e)}),{immediate:!0,deep:!0}),(t,a)=>{const l=G;return h(),_(N,null,[L(Ot,S({"model-value":V(n).fieldValue},V(r),{"field-value-view":V(y),onClick:a[0]||(a[0]=t=>!e.isView&&(u.value=!0))}),w({_:2},[C(Object.keys(V(o)),(e=>({name:e,fn:g((()=>[D(t.$slots,e)]))})))]),1040,["model-value","field-value-view"]),L(l,S({show:V(u),"onUpdate:show":a[1]||(a[1]=e=>U(u)?u.value=e:null),type:e.type,"default-date":V(n).defaultDate},V(s),{onConfirm:b}),w({_:2},[C(Object.keys(V(i)),(e=>({name:e,fn:g((()=>[D(t.$slots,e)]))})))]),1040,["show","type","default-date"])],64)}}}),Mt=u({inheritAttrs:!1,__name:"ProCascaderV2",props:{showFullValue:{type:Boolean,default:!1},modelValue:{type:[String,Number,Object],default:""},columns:{type:Array,default:()=>[]},dictCode:{type:String,default:""},customFieldName:{type:Object,default:()=>({text:"name",value:"code",children:"children"})},level:{type:Number,default:0}},emits:["update:modelValue","update:fullValue"],setup(l,{emit:r}){const o=l,s=e(),{dictMap:i}=t(s),{filedAttrs:n,filedSlots:u,attrs:d,slots:c}=F(Nt()),[f,y]=Z(!1),b=m({columns:[],modelValue:"",fieldValue:""}),$=()=>{y(!0)},A=()=>{y(!1)},O=p((()=>{let e=[];a(o.columns)&&(e=o.columns);const t=i.value[o.dictCode];return o.dictCode&&a(t)&&(e=t),((e,t=0,l="children")=>{const r=(e,o=1)=>a(e)?e.map((({[`${l}`]:e,...s})=>{const i={};return(!t||t&&t>o)&&a(e)&&(i.children=r(e,o+1)),{...s,...i}})):[];return r(e)})(e,o.level)})),k=p((()=>((e,t)=>{const l=[],{value:r,children:s}=o.customFieldName,i=(e,o=0)=>!!a(e)&&e.some(((e,n)=>{const{[s]:u,...d}=e;return l[o]=d,e[r]===t||!!a(u)&&i(u,o+1)}));return a(e)&&!i(e)?[]:l})(O.value,b.modelValue))),P=p((()=>{if(a(k.value)){const e=k.value.map((e=>e[o.customFieldName.text]));return o.showFullValue?e.join("/"):e[e.length-1]}return""})),T=({value:e,selectedOptions:t})=>{b.modelValue=e,b.fieldValue=e,r("update:modelValue",e),A()};return v((()=>o.modelValue),(e=>{b.modelValue=e}),{immediate:!0,deep:!0}),v((()=>k.value),(e=>{r("update:fullValue",e)}),{deep:!0,immediate:!0}),(e,t)=>{const a=X,r=q;return h(),_(N,null,[L(Ot,S({"model-value":V(b).fieldValue},V(n),{"field-value-view":V(P),onClick:$}),w({_:2},[C(Object.keys(V(u)),(t=>({name:t,fn:g((()=>[D(e.$slots,t)]))})))]),1040,["model-value","field-value-view"]),L(r,{show:V(f),"onUpdate:show":t[0]||(t[0]=e=>U(f)?f.value=e:null),height:60,closeable:!1,class:"com-cascader-popup"},{default:g((()=>[L(a,S({options:V(O),"field-names":l.customFieldName,"model-value":V(b).modelValue},V(d),{onClose:A,onFinish:T}),null,16,["options","field-names","model-value"])])),_:1},8,["show"])],64)}}});var xt=n(u({inheritAttrs:!1,__name:"ProDatePickerV2",props:{type:{type:String,default:"date"},modelValue:{type:[String,Date],default:""},isView:{type:Boolean,default:!1},columns:{type:Array,default:()=>[]}},emits:["update:modelValue","cancel"],setup(e,{emit:t}){const a=e,{filedAttrs:l,filedSlots:r,attrs:o,slots:s}=F(Nt()),{formState:i}=T(ie)||{},[n,u]=Z(!1),d=p((()=>!["time","month-day"].includes(a.type))),c=p((()=>d.value?new Date:null)),f=m({fieldValue:"",date:c.value}),y={datetime:"YYYY-MM-DD HH:mm",date:"YYYY-MM-DD","year-month":"YYYY-MM","month-day":"MM-DD",datehour:"YYYY-MM-DD HH",time:"mm:ss"},b=p((()=>({minDate:new Date(1900,0,1),maxDate:new Date}))),$=p((()=>y[a.type]||"YYYY-MM-DD HH:mm")),A=e=>{f.fieldValue=Tt(e)?W(e).format($.value):e,t("update:modelValue",f.fieldValue),u(!1)},O=()=>{u(!1),t("cancel")},k=e=>{Tt(e)?(f.date=e,f.fieldValue=W(e).format($.value)):"string"==typeof e&&(f.fieldValue=e,d.value?f.date=W(e,$.value).isValid()?W(e,$.value).toDate():c.value:f.date=e)};return v((()=>a.modelValue),(e=>{k(e)}),{immediate:!0,deep:!0}),v((()=>{var e;return null==(e=i.formData)?void 0:e[l.value.name]}),(e=>{k(e)}),{immediate:!0,deep:!0}),(t,a)=>{const i=K,u=q;return h(),_(N,null,[L(Ot,S({"model-value":V(f).fieldValue},V(l),{"field-value-view":V(f).fieldValue,onClick:a[0]||(a[0]=t=>!e.isView&&(n.value=!0))}),w({_:2},[C(Object.keys(V(r)),(e=>({name:e,fn:g((()=>[D(t.$slots,e,{},void 0,!0)]))})))]),1040,["model-value","field-value-view"]),L(u,{show:V(n),"onUpdate:show":a[1]||(a[1]=e=>U(n)?n.value=e:null),height:40,closeable:!1},{default:g((()=>[L(i,S({type:e.type,"model-value":V(f).date},{...V(b),...V(o)},{onConfirm:A,onCancel:O}),w({_:2},[C(Object.keys(V(s)),(e=>({name:e,fn:g((()=>[D(t.$slots,e,{},void 0,!0)]))})))]),1040,["type","model-value"])])),_:3},8,["show"])],64)}}}),[["__scopeId","data-v-b13f3d52"]]);var jt=n(u({__name:"ProSMSCode",props:{time:{type:Number,default:60},smsText:{type:String,default:"验证码"},relatedName:{type:String,default:"mobile"},sendSMSCode:{type:Function,default:e=>{"function"==typeof e&&e()}}},setup(e){const t=e,{formState:a,formRef:l}=T(ie)||{},r=m({isCountdowning:!1}),{current:o,start:s,reset:i}=J({time:1e3*t.time,onFinish(){r.isCountdowning=!1}}),n=()=>{r.isCountdowning||l.value.validate(t.relatedName).then((()=>{t.sendSMSCode({mobile:a.formData[t.relatedName]},(()=>{r.isCountdowning=!0,O({message:"短信发送成功，请查收"}),i(),s()}))})).catch((()=>{}))},u=p((()=>{const{seconds:e}=o.value||{};return 0===e?t.smsText:r.isCountdowning?`${e}s`:t.smsText}));return(e,t)=>{const a=Q;return e.$attrs.isView?A("",!0):(h(),b(gt,S({key:0,class:"com-pro-sms-code",type:"digit"},e.$attrs),{extra:g((()=>[L(a,{class:"extra-button",size:"small",plain:"",type:"primary",onClick:n},{default:g((()=>[Y(x(V(u)),1)])),_:1})])),_:1},16))}}}),[["__scopeId","data-v-13c46899"]]);var Ft=n(u({inheritAttrs:!1,__name:"ProAddress",props:{name:{type:String,default:""},customFieldName:{type:Object,default:()=>({text:"name",value:"code",children:"children"})},valuePrefix:{type:String,default:""},attributeValueList:{type:Array,default:()=>[]}},setup(e){const t=e,l=m({address:{detail:""}}),r=p((()=>{if(!t.valuePrefix)return l.address;return Object.keys(l.address).reduce(((e,a)=>(e[(e=>{return"string"==typeof e&&e?t.valuePrefix?`${t.valuePrefix}${a=e,"string"==typeof a&&a?`${a[0].toUpperCase()}${a.substring(1)}`:""}`:e:"";var a})(a)]=l.address[a],e)),{})})),o=p((()=>{if(a(t.attributeValueList)){let e=0,a=!1;return t.attributeValueList.forEach((t=>{Number(t.code)>e&&"4"!==String(t.code)&&(e=Number(t.code)),"4"===String(t.code)&&(a=!0)})),{level:e&&e+1,showDetail:a}}return{level:0,showDetail:!0}})),s=(e=[])=>{let r={};if(a(e)){const{text:a,value:l}=t.customFieldName;r=["province","city","area"].slice(0,Number(o.value.level||3)).reduce(((t,r,o)=>{const s=e[o+1]||{};return t[`${r}Code`]=s[l],t[`${r}Name`]=s[a],t}),{})}l.address={...l.address,...r}};return(t,a)=>{const i=gt;return h(),_(N,null,[L(Ot,{class:"com-van-field-hidden",name:e.name,"model-value":V(r)},null,8,["name","model-value"]),L(Mt,S({"show-full-value":"","custom-field-name":e.customFieldName},t.$attrs,{name:`${e.name}-origin`,level:V(o).level,"onUpdate:fullValue":s}),null,16,["custom-field-name","name","level"]),V(o).showDetail?(h(),b(i,{key:0,modelValue:V(l).address.detail,"onUpdate:modelValue":a[0]||(a[0]=e=>V(l).address.detail=e),label:`${t.$attrs.label}详细地址`,required:t.$attrs.required,maxlength:50},null,8,["modelValue","label","required"])):A("",!0)],64)}}}),[["__scopeId","data-v-1121248b"]]);var Rt=n(u({inheritAttrs:!1,__name:"ProOccupation",props:{name:{type:String,default:""},customFieldName:{type:Object,default:()=>({text:"name",value:"code",children:"children"})}},setup(e){const t=e,l=m({modelValue:[]}),r=(e=[])=>{let r=[];a(e)&&(r=e.map((e=>e[t.customFieldName.value]))),l.modelValue=r};return(t,a)=>(h(),_(N,null,[L(Ot,{class:"com-van-field-hidden",name:e.name,"model-value":V(l).modelValue},null,8,["name","model-value"]),L(Mt,S({"show-full-value":"","custom-field-name":e.customFieldName},t.$attrs,{name:`${e.name}-origin`,"onUpdate:fullValue":r}),null,16,["custom-field-name","name"])],64))}}),[["__scopeId","data-v-136c1a38"]]);const Yt=u({inheritAttrs:!1,__name:"ProRenderFormWithCard",props:{title:{type:String,default:""},class:{type:String,default:""}},setup(e,{expose:t}){const a=e,l=c(null);return t({...["submit","getValues","validate","resetValidation","getValidationStatus","scrollToField"].reduce(((e,t)=>(e[t]=(...e)=>{var a;return null==(a=l.value)?void 0:a[t](...e)},e)),{})}),(t,r)=>{var o;const s=te;return(null==(o=t.$attrs.schema)?void 0:o.length)?(h(),b(s,{key:0,class:ee(`com-pro-form-with-card com-card-body-no-padding ${a.class}`),"show-line":!1,"show-divider":!1,title:e.title},{default:g((()=>[L(ht,S({ref_key:"renderFormRef",ref:l},t.$attrs),w({_:2},[C(Object.keys(t.$slots),(e=>({name:e,fn:g((()=>[D(t.$slots,e)]))})))]),1040)])),_:3},8,["class","title"])):A("",!0)}}});export{jt as P,Yt as _,gt as a,$t as b,Mt as c,Ft as d,kt as e,ht as f,xt as g,ft as i,pt as t};
