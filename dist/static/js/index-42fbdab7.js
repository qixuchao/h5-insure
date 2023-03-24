import{cb as e,cc as t,cd as a,a9 as l,D as r,b6 as s,ah as o,bD as i,_ as n,d,bj as u,J as m,r as c,ba as f,E as p,an as v,ce as y,c as h,e as b,w as g,g as V,h as _,F as N,i as C,cf as S,b1 as $,bt as w,bk as D,k as A,T as O,aW as k,cg as P,b8 as M,G as E,j as T,t as x,y as j,bp as F,R,n as I,aG as Y,s as H,ax as B,f as L,S as Z,ch as z,a7 as U,a8 as q,ad as W,ci as G,cj as X,b9 as K,bW as J,B as Q,L as ee,P as te}from"./index-589cf96a.js";import{R as ae,M as le,C as re,G as se,V as oe,a as ie,l as ne,I as de}from"./ProAddress.vue_vue_type_style_index_0_scoped_true_lang-df209eb6.js";import{e as ue,b as me,i as ce,g as fe,c as pe,k as ve,a as ye,d as he,f as be,h as ge,j as Ve,l as _e,m as Ne,n as Ce,o as Se,S as $e,p as we,q as De,r as Ae,s as Oe}from"./keysIn-b3061da8.js";import{i as ke,b as Pe,a as Me}from"./isObjectLike-d00d103b.js";var Ee=Object.freeze(Object.defineProperty({__proto__:null,get ProRenderForm(){return ht},get ProFieldV2(){return gt},get ProRadioV2(){return St},get ProPickerV2(){return kt},get ProCalendarV2(){return Et},get ProCascaderV2(){return Tt},get ProDatePickerV2(){return xt},get ProSMSCode(){return jt},get ProAddress(){return Ft},get ProRenderFormWithCard(){return Rt}},Symbol.toStringTag,{value:"Module"}));const Te=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;function xe(e){if(!Te.test(e))return!1;if(18!==e.length)return!0;const t=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];let a=0;for(let s=0;s<17;s++)a+=Number(e.substring(s,s+1))*t[s];const l=a%11,r=e.substring(17);return 2===l?"X"===r||"x"===r:r===String([1,0,10,9,8,7,6,5,4,3,2][l])}const je={isName:e=>/^[\u4e00-\u9fa5a-z].{0,23}[\u4e00-\u9fa5a-z]/i.test(e),isExternal:e=>/^(https?:|mailto:|tel:)/.test(e),isEmail:e=>/^[A-Za-z0-9]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(e),isZipCode:e=>/^[0-9]{6,6}$/.test(e),isTel:e=>/0\d{2,3}-\d{7,8}/.test(e),isPhone:e=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(e),isZhCN:e=>/^[\u4e00-\u9fa5]+$/.test(e),isNotZhCN:e=>/^[^\u4e00-\u9fa5]+$/.test(e),isCommonChar:e=>/^[\w_]{6,20}$/.test(e),isNormalChar:e=>/^[\u4e00-\u9fa5a-zA-Z0-9]+$/.test(e),isAlphabetNumber:e=>/^[a-z0-9]+$/i.test(e),isAlphabetNumberOrSpecial:e=>/^[a-z0-9`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥¥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]+$/i.test(e),isIdCardNo:e=>xe(e),isHouseHold:e=>xe(e),isBirthType:e=>/^[a-zA-Z]\d{9}$/.test(e),isPassword:e=>/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,20}$/.test(e),isPassportType:e=>e.length>=5&&/^[^\u4e00-\u9fa5]+$/.test(e),isMilitaryCard:e=>/^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/.test(e),isSolider:e=>/^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/.test(e),isHongkongMacaoTravel:e=>/^[C]\d{8}$|^[C][a-hA-Hj-nJ-Np-zP-Z][0-9]{7}$/.test(e),isTaiwanTravel:e=>/^[L]\d{8}$/.test(e),isForeignPermanent:e=>/^[A-Z]{3}[0-9]{12}$/.test(e),isHKMacaoResidencePermit:e=>/^8[12]0000(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX]$/.test(e),isTaiwanResidencePermit:e=>/^830000(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX]$/.test(e),isUSCC:e=>/^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/.test(e),isUSCCPolicy:e=>/^[A-Z0-9]{18}$/.test(e),isOCC:e=>/^[A-Z0-9]{8}-[A-Z0-9]{1}$/.test(e),isBusinessLicense:e=>/(^\d{15}$)|(^[A-Z0-9]{18}$)/.test(e),isBandcard:e=>/^\d{12,20}$/g.test(e),isOtherCert:e=>/^.{1,18}$/.test(e)},Fe={[ae.NAME]:[je.isName],[ae.EXTERNAL]:[je.isExternal],[ae.EMAIL]:[je.isEmail],[ae.ZIP_CODE]:[je.isZipCode],[ae.TEL]:[je.isTel],[ae.MOBILE]:[je.isPhone],[ae.ZH_CN]:[je.isZhCN],[ae.NOT_ZH_CN]:[je.isNotZhCN],[ae.NORMAL_CHAR]:[je.isNormalChar],[ae.ALPHABET_NUMBER]:[je.isAlphabetNumber],[ae.CERT]:[je.isIdCardNo],[ae.HOUSE_HOLD]:[je.isHouseHold],[ae.BIRTH]:[je.isBirthType],[ae.PASSPORT]:[je.isPassportType],[ae.MILITARY_CARD]:[je.isMilitaryCard],[ae.SOLIDER]:[je.isSolider],[ae.HONGKONG_MACAO]:[je.isHongkongMacaoTravel],[ae.TAIWAN_TRAVEL]:[je.isTaiwanTravel],[ae.FOREIGN_PERMANENT]:[je.isForeignPermanent],[ae.HK_MACAO_RESIDENCE_PERMIT]:[je.isHKMacaoResidencePermit],[ae.TAIWAN_RESIDENCE_PERMIT]:[je.isTaiwanResidencePermit],[ae.SOCIAL_CREDIT_CODE]:[je.isUSCCPolicy],[ae.OCC]:[je.isOCC],[ae.BUSINESS_LICENSE]:[je.isBusinessLicense],[ae.BAND_CARD]:[je.isBandcard],[ae.OTHER_CERT]:[je.isOtherCert]};function Re(e,t,a){(void 0!==a&&!ue(e[t],a)||void 0===a&&!(t in e))&&me(e,t,a)}var Ie,Ye=function(e,t,a){for(var l=-1,r=Object(e),s=a(e),o=s.length;o--;){var i=s[Ie?o:++l];if(!1===t(r[i],i,r))break}return e};var He=Function.prototype,Be=Object.prototype,Le=He.toString,Ze=Be.hasOwnProperty,ze=Le.call(Object);function Ue(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}function qe(e,t,a,l,r,s,o){var i=Ue(e,a),n=Ue(t,a),d=o.get(n);if(d)Re(e,a,d);else{var u,m=s?s(i,n,a+"",e,t,o):void 0,c=void 0===m;if(c){var f=ye(n),p=!f&&he(n),v=!f&&!p&&be(n);m=n,f||p||v?ye(i)?m=i:ke(u=i)&&ce(u)?m=ge(i):p?(c=!1,m=Ve(n,!0)):v?(c=!1,m=_e(n,!0)):m=[]:function(e){if(!ke(e)||"[object Object]"!=Pe(e))return!1;var t=fe(e);if(null===t)return!0;var a=Ze.call(t,"constructor")&&t.constructor;return"function"==typeof a&&a instanceof a&&Le.call(a)==ze}(n)||Ne(n)?(m=i,Ne(i)?m=function(e){return pe(e,ve(e))}(i):Me(i)&&!Ce(i)||(m=Se(n))):c=!1}c&&(o.set(n,m),r(m,n,l,s,o),o.delete(n)),Re(e,a,m)}}function We(e,t,a,l,r){e!==t&&Ye(t,(function(s,o){if(r||(r=new $e),Me(s))qe(e,t,o,a,We,l,r);else{var i=l?l(Ue(e,o),s,o+"",e,t,r):void 0;void 0===i&&(i=s),Re(e,o,i)}}),ve)}function Ge(e){return e}function Xe(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}var Ke=Math.max;var Je=we?function(e,t){return we(e,"toString",{configurable:!0,enumerable:!1,value:(a=t,function(){return a}),writable:!0});var a}:Ge,Qe=Je,et=Date.now;var tt,at,lt,rt=(tt=Qe,at=0,lt=0,function(){var e=et(),t=16-(e-lt);if(lt=e,t>0){if(++at>=800)return arguments[0]}else at=0;return tt.apply(void 0,arguments)});function st(e,t){return rt(function(e,t,a){return t=Ke(void 0===t?e.length-1:t,0),function(){for(var l=arguments,r=-1,s=Ke(l.length-t,0),o=Array(s);++r<s;)o[r]=l[t+r];r=-1;for(var i=Array(t+1);++r<t;)i[r]=l[r];return i[t]=a(o),Xe(e,this,i)}}(e,t,Ge),e+"")}var ot,it=(ot=function(e,t,a){We(e,t,a)},st((function(e,t){var a=-1,l=t.length,r=l>1?t[l-1]:void 0,s=l>2?t[2]:void 0;for(r=ot.length>3&&"function"==typeof r?(l--,r):void 0,s&&function(e,t,a){if(!Me(a))return!1;var l=typeof t;return!!("number"==l?ce(a)&&De(t,a.length):"string"==l&&t in a)&&ue(a[t],e)}(t[0],t[1],s)&&(r=l<3?void 0:r,l=1),e=Object(e);++a<l;){var o=t[a];o&&ot(e,o,a,r)}return e})));const nt=e=>(e?`${e.toUpperCase()}_`:"")+"OCCUPATION",dt=["v-model","label","name","id","type","size","maxlength","placeholder","border","disabled","readonly","colon","required","center","clearable","clear-icon","clear-trigger","clickable","is-link","autofocus","show-word-limit","error","error-message","error-message-align","formatter","format-trigger","arrow-direction","label-class","label-width","label-align","input-align","autosize","left-icon","right-icon","icon-prefix","rules","autocomplete","enterkeyhint","visible"],ut=["label","input","left-icon","right-icon","button","error-message","extra"],mt={autocomplete:"off"},ct=(e,t="children")=>a(e)?e.map((({[`${t}`]:e,...l})=>{const r={};return a(e)&&(r.children=ct(e)),{...l,...r}})):[],ft=(e,t,l={})=>{const r=Object.keys(e);return a(r)?r.reduce(((a,l)=>{const r=t.includes(l);return a[Number(!r)][l]=e[l],a}),[{...l},{}]):[{...l},{}]},pt=(e,t=!1)=>{if(!e)return[];const s=Object.keys(e)||[];if(!a(s))return[];const{holder:o,insured:i,beneficiary:n,payInfo:d}=s.reduce(((l,r)=>(l[le[r]]=a(e[r])?e[r].filter((e=>!t||1===e.isCalculationFactor)):[],l)),{}),u=a(o)?o.map((e=>e.code)):[],m=a(i)?i.map((e=>({...e,isSelfInsuredNeed:!u.includes(e.code)}))):[];return console.log("origin factors",o,i,n),[o,m,n,d].map((e=>(e=>{let t=[];const s=[];return a(e)&&(t=e.map((e=>{const{code:t,name:a,value:o,componentName:i,...n}=re.find((t=>`${t.value}`==`${e.displayType}`))||{};e.isCalculationFactor===l.YES&&s.push(e.code);const d={},{componentName:u,...m}=se[e.code]||{},c=u||i||"ProFieldV2";2===e.moduleType&&(d.isSelfInsuredNeed=e.isSelfInsuredNeed);const f={...n,...d,customFieldName:{text:"value",value:"code",children:"children"},label:e.title,name:e.code,componentName:c,required:1===e.isMustInput,nanoid:r(),...m};return{...f,attributeValueList:e.attributeValueList,columns:f.dictCode?[]:e.attributeValueList||[]}}))),{schema:t,trialFactorCodes:s}})(e)))},vt=(e,t={})=>Object.keys(e).reduce(((e,a)=>(e[t[a]||a]=a,e)),{}),yt={certNo:{onChangeEffect:(e,t)=>{Object.assign(t.formData,{certNo:"",gender:"",birthday:""}),s((()=>{const e=![o.CERT,o.HOUSE_HOLD].includes(t.formData.certType);it(t.config,{gender:{visible:e},birthday:{visible:e}})}))}},certType:{extraAttrs:{4:{maxlength:10}},onChangeEffect:(e,t)=>{if([o.CERT,o.HOUSE_HOLD].includes(t.formData.certType)){const a=(e=>{const t={gender:"",birthday:""};if("string"==typeof e&&e&&xe(e)){const a={15:[6,12],18:[6,14]};t.birthday=e.slice(...a[e.length]).replace(/(.{4})(.{2})/,"$1-$2-"),t.gender=[i.FEMALE,i.MALE][Number(e.slice(-2,-1))%2]}return t})(e);Object.assign(t.formData,a)}}}};var ht=n(d({__name:"ProRenderForm",props:{validateMethod:{default:"show-error"},model:{default:()=>({})},isView:{type:Boolean,default:!1},schema:{default:()=>[]},config:{default:()=>({})},markRequired:{type:Boolean,default:!1}},emits:["failed"],setup(l,{expose:r,emit:s}){const o=l,i=u(),n=m({config:{},formData:{},schema:[],nameList:[],isView:o.isView}),d=c({});f(oe,{formState:n,formRef:d,markRequired:o.markRequired});const P=p((()=>Object.keys(i).filter((e=>"default"!==e)))),M=p((()=>a(o.schema))),E=p((()=>{const[e,t]={toast:[!1,!1],"show-error":[!1,!0],"show-error-message":[!0,!1]}[o.validateMethod];return{"show-error-message":e,"show-error":t}})),T=({values:e,errors:t})=>{if("toast"===o.validateMethod){const e=t.reduce(((e,t)=>(e[t.name]=t,e)),{}),a=Object.keys(e);if(a.length){const t=n.nameList.reduce(((e,t)=>(a.includes(t)&&e.push(t),e)),[]),{message:l}=e[t[0]]||{};O({message:l})}}console.log("failed errors",t),s("failed",{values:e,errors:t})};v([()=>o.schema,()=>n.config],(([e,t])=>{M.value&&(n.schema=e.map((e=>({...e,modelValue:o.model[e.name],componentName:Ee[e.componentName]?y(Ee[e.componentName]):e.componentName,...t[e.name]}))).filter((e=>!e.hidden)))}),{immediate:!0,deep:!0}),v((()=>o.config),(e=>{n.config=e}),{immediate:!0,deep:!0});const x=p((()=>[...new Set(n.schema.reduce(((e,t)=>(t.dictCode&&e.push(t.dictCode),e)),[]))]));return v(x,(a=>{a&&(async a=>{const l=e(),{dictMap:r}=t(l);"string"==typeof a?(await l.getDict([a]),r.value[a]):(await l.getDict(a),a.map((e=>r.value[e])))})(a)}),{immediate:!0,deep:!0}),v((()=>o.model),(e=>{e&&(n.formData=e)}),{immediate:!0,deep:!0}),r({...["submit","getValues","validate","resetValidation","getValidationStatus","scrollToField"].reduce(((e,t)=>(e[t]=(...e)=>{var a;return null==(a=d.value)?void 0:a[t](...e)},e)),{})}),(e,t)=>{const a=k;return h(),b(a,$({ref_key:"formRef",ref:d,class:"com-van-form"},{...V(E),...e.$attrs},{onFailed:T}),{default:g((()=>[V(M)?(h(!0),_(N,{key:0},C(n.schema,((t,a)=>(h(),b(S(t.componentName),$({key:`${t.nanoid}_${a}`},t),w({_:2},[C(V(P),(t=>({name:t,fn:g((()=>[D(e.$slots,t,{},void 0,!0)]))})))]),1040)))),128)):A("",!0),D(e.$slots,"default",{},void 0,!0)])),_:3},16)}}}),[["__scopeId","data-v-148feac6"]]);const bt={class:"com-van-field-unit"},gt=d({inheritAttrs:!1,__name:"ProFieldV2",props:{ruleType:{type:String,default:""},modelValue:{type:[String,Number,Object,Array,Boolean],default:""},isView:{type:Boolean,default:!1},required:{type:Boolean,default:!1},rules:{type:Array,default:()=>[]},relatedName:{type:String,default:""},precision:{type:Number,default:0},isPrecisionCompleted:{type:Boolean,default:!1},unit:{type:String,default:""}},emits:["update:model-value","blur"],setup(e,{emit:t}){const l=e,r=P(),s=u(),{formState:o,markRequired:i}=M(oe)||{},n=m({modelValue:""}),d=p((()=>{const e=vt(s,r.slots),{extra:t,...a}=e;return l.unit?a:e})),c=p((()=>r.placeholder||`请输入${r.label||""}`)),f=p((()=>{var e,t;if(l.ruleType)return l.ruleType;if(l.relatedName){const a=null==(e=null==o?void 0:o.formData)?void 0:e[l.relatedName];if(a)return null==(t=ie[l.relatedName])?void 0:t[a]}return""})),y=p((()=>a(l.rules)?l.rules:[{required:l.required,validator:e=>{if(ne.exports.isNil(e)||""===e)return l.required?r.placeholder:"";if(f.value){const[t]=Fe[f.value]||[];if("function"!=typeof t)return console.warn(`%c 字段 ${r.label} 的规则 ${f} 校验函数不存在，请先确认～`,"color: #3e7;"),"";if(!t(e))return`请输入正确的${r.label}`}return""}}])),_=p((()=>"number"===r.type&&l.precision)),N=e=>_.value&&e?e.replace(/^(0)\d+$/g,"$1").replace(new RegExp(`^(\\d+\\.\\d{${l.precision}})\\d+$`,"g"),"$1"):e,S=p((()=>{var e;if(l.relatedName){const{extraAttrs:t}=yt[l.relatedName]||{},a=null==(e=null==o?void 0:o.formData)?void 0:e[l.relatedName];if(t&&!ne.exports.isNil(a)&&""!==a)return t[a]||{}}return{}})),A=(e,t)=>{if(l.relatedName&&e){const a=(yt[l.relatedName]||{})[`${e}Effect`];"function"==typeof a&&a(t,o)}},O=e=>{A("onChange",e),o.formData&&r.name&&(o.formData[r.name]=e),n.modelValue=e,t("update:model-value",e)},k=e=>{let a=n.modelValue;_.value&&a&&l.isPrecisionCompleted&&(a=Number(a).toFixed(l.precision),O(a)),A("onBlur",a),t("blur",e)};return v((()=>l.modelValue),(e=>{n.modelValue=e}),{immediate:!0,deep:!0}),v((()=>{var e;return null==(e=null==o?void 0:o.formData)?void 0:e[r.name]}),(e=>{n.modelValue=e}),{immediate:!0,deep:!0}),E((()=>{r.name&&o.nameList&&o.nameList.push(r.name)})),(t,a)=>{const l=j;return h(),b(l,$({"model-value":V(n).modelValue,class:`com-van-field ${V(i)?"":"field-mark_hidden"} ${!1===V(r).visible?"com-van-field--hidden":""}`,autocomplete:"off",formatter:N},{...t.$attrs,placeholder:V(c),required:e.required,rules:V(y),...V(S)},{onBlur:k,"onUpdate:modelValue":O}),w({_:2},[C(Object.keys(V(d)),(e=>({name:e,fn:g((()=>[D(t.$slots,V(d)[e])]))}))),e.unit?{name:"extra",fn:g((()=>[T("div",bt,x(e.unit),1)])),key:"0"}:void 0]),1040,["model-value","class"])}}});function Vt(e){return null==e}const _t={input:"请输入",select:"请选择"};function Nt({placeholderType:e}={placeholderType:"select"}){const t=P(),a=u(),l=m({filedAttrs:{},filedSlots:{},attrs:{},slots:{}});return v((()=>t),(()=>{const[a,r]=(e=>ft(e,dt,mt))(t);l.filedAttrs={...a,placeholder:t.placeholder||`${_t[e]}${t.label||""}`},l.attrs={title:a.label,...r}}),{deep:!0,immediate:!0}),v([()=>a,()=>t.slots],(e=>{const[r,s]=(e=>ft(e,ut))(vt(a,t.slots));l.filedSlots=r||{},l.slots=s||{}}),{deep:!0,immediate:!0}),l}const Ct={key:0};var St=n(d({inheritAttrs:!1,__name:"ProRadioV2",props:{type:{type:String,default:"button"},modelValue:{type:[String,Number],default:""},columns:{type:Array,default:()=>[]},isDefaultSelected:{type:Boolean,default:!0},isView:{type:Boolean,default:!1},customFieldName:{type:Object,default:()=>({text:"label",value:"value",children:"children"})}},emits:["update:modelValue"],setup(e,{emit:t}){const l=e,{filedAttrs:r,attrs:s}=F(Nt()),{formState:o}=M(oe)||{},i=m({modelValue:"",columns:[]}),n=p((()=>"button"===l.type)),d=p((()=>(i.columns.find((e=>e.value===i.modelValue))||{}).label||"")),u=e=>{(null==o?void 0:o.formData)&&r.value.name&&(o.formData[r.value.name]=e),i.modelValue=e,t("update:modelValue",e)};return v((()=>l.modelValue),(e=>{i.modelValue=e}),{immediate:!0}),v((()=>{var e;return null==(e=o.formData)?void 0:e[r.value.name]}),(e=>{i.modelValue=e}),{immediate:!0,deep:!0}),v((()=>l.columns),((e=[])=>{if(a(e)){i.columns=e.map((e=>({...e,text:e[l.customFieldName.text],value:e[l.customFieldName.value]})));const[{disabled:t,value:a}]=i.columns;!l.isDefaultSelected||t||!Vt(l.modelValue)&&""!==l.modelValue||u(a)}}),{deep:!0,immediate:!0}),(t,a)=>{const l=Y,o=R,m=H;return h(),b(gt,$({class:"com-van-radio-wrap"},V(r),{"model-value":V(i).modelValue}),{input:g((()=>[e.isView?(h(),_("div",Ct,x(V(d)),1)):(h(),_(N,{key:1},[V(n)?(h(!0),_(N,{key:0},C(V(i).columns,(e=>(h(),b(l,{key:e.value,label:e.text,disabled:e.disabled,activated:V(i).modelValue==e.value,"icon-name":e.iconName,onClick:t=>(({disabled:e,value:t})=>{s.value.disabled||e||u(t)})(e)},null,8,["label","disabled","activated","icon-name","onClick"])))),128)):(h(),b(m,$({key:1,modelValue:V(i).modelValue,"onUpdate:modelValue":a[0]||(a[0]=e=>V(i).modelValue=e)},V(s)),{default:g((()=>[(h(!0),_(N,null,C(V(i).columns,(e=>(h(),b(o,$({key:e.value,name:e.value},e),{default:g((()=>[I(x(e.label),1)])),_:2},1040,["name"])))),128))])),_:1},16,["modelValue"]))],64))])),_:1},16,["model-value"])}}}),[["__scopeId","data-v-54be3898"]]);const $t={style:{width:"100%"},class:"input"},wt={key:0,class:"displayValue"},Dt={key:1,class:"placeholder"},At=d({inheritAttrs:!1,__name:"CustomInput",props:{fieldValueView:{type:String,default:""},modelValue:{type:[String,Boolean,Object,Number],default:""}},setup(e){const t=e,a=P(),{formState:l}=M(oe)||{};return B((()=>((null==l?void 0:l.formData)&&a.name&&(l.formData[a.name]=t.modelValue),t.modelValue))),(t,a)=>(h(),_("div",$t,[e.fieldValueView?(h(),_("span",wt,x(e.fieldValueView),1)):(h(),_("span",Dt,x(t.$attrs.placeholder),1))]))}}),Ot=d({__name:"ProFormItem",props:{fieldValueView:{type:String,default:""},name:{type:String,default:""},isView:{type:Boolean,default:!1},modelValue:{type:[String,Boolean,Object,Number],default:""}},setup:e=>(t,a)=>(h(),b(gt,{class:"com-form-item","is-link":!e.isView},w({input:g((()=>[L(At,{name:e.name,"model-value":e.modelValue,"field-value-view":e.fieldValueView,placeholder:t.$attrs.placeholder},null,8,["name","model-value","field-value-view","placeholder"])])),_:2},[C(Object.keys(t.$slots),(e=>({name:e,fn:g((()=>[D(t.$slots,e)]))})))]),1032,["is-link"]))}),kt=d({inheritAttrs:!1,__name:"ProPickerV2",props:{relatedName:{type:String,default:""},columns:{type:Array,default:()=>[]},dictCode:{type:String,default:""},modelValue:{type:[String,Number],default:""},isDefaultSelected:{type:Boolean,default:!0},isView:{type:Boolean,default:!1},customFieldName:{type:Object,default:()=>({text:"label",value:"value",children:"children"})}},emits:["update:show","confirm","cancel","update:modelValue"],setup(l,{emit:r}){const s=l,o=e(),{dictMap:i}=t(o),{filedAttrs:n,filedSlots:d,attrs:u,slots:c}=F(Nt()),{formState:f}=M(oe)||{},[y,b]=Z(!1),S=m({fieldValue:"",columns:[]}),A=e=>{((e,t)=>{if(s.relatedName&&e){const a=(yt[s.relatedName]||{})[`${e}Effect`];"function"==typeof a&&a(t,f)}})("onChange",e),S.fieldValue=e,r("update:modelValue",e)},O=e=>{const{value:t}=e||{};let a="";Vt(t)||(a=t),b(!1),A(a),r("confirm",e)},k=()=>{b(!1)},P=p((()=>{let e=[];a(s.columns)&&(e=s.columns);const t=i.value[s.dictCode];return s.dictCode&&a(t)&&(e=t),ct(a(l=e)?l.map((e=>({...e,text:e[s.customFieldName.text],value:e[s.customFieldName.value]}))):[]);var l})),E=p((()=>s.modelValue?s.columns.findIndex((e=>{var t;return e[null==(t=s.customFieldName)?void 0:t.values]===s.modelValue})):"")),T=p((()=>{if(a(P.value)){const e=P.value.find((e=>String(e.value)===String(S.fieldValue)))||{};return(null==e?void 0:e.text)||S.fieldValue}return S.fieldValue}));return v((()=>s.modelValue),(e=>{S.fieldValue=e}),{deep:!0,immediate:!0}),v((()=>{var e;return null==(e=null==f?void 0:f.formData)?void 0:e[n.value.name]}),(e=>{S.fieldValue=e}),{immediate:!0,deep:!0}),v(P,((e=[])=>{if(a(e)&&1===e.length){const[{disabled:e,value:t}]=P.value;!s.isDefaultSelected||e||!Vt(s.modelValue)&&""!==s.modelValue||A(t)}}),{deep:!0,immediate:!0}),(e,t)=>{const a=z,r=q;return h(),_(N,null,[L(Ot,$({"model-value":V(S).fieldValue,class:""+(!1===V(n).visible?"com-van-field--hidden":"")},V(n),{"field-value-view":V(T),onClick:t[0]||(t[0]=e=>!l.isView&&(y.value=!0))}),w({_:2},[C(Object.keys(V(d)),(t=>({name:t,fn:g((()=>[D(e.$slots,t)]))})))]),1040,["model-value","class","field-value-view"]),L(r,{show:V(y),"onUpdate:show":t[1]||(t[1]=e=>U(y)?y.value=e:null),height:40,closeable:!1},{default:g((()=>[L(a,$({columns:V(P),"default-index":V(E),title:V(n).label},V(u),{onCancel:k,onConfirm:O}),w({_:2},[C(Object.keys(e.$slots),(t=>({name:t,fn:g((()=>[D(e.$slots,t)]))})))]),1040,["columns","default-index","title"])])),_:3},8,["show"])],64)}}});var Pt=Ae&&Ae.isDate,Mt=Pt?Oe(Pt):function(e){return ke(e)&&"[object Date]"==Pe(e)};const Et=d({inheritAttrs:!1,__name:"ProCalendarV2",props:{type:{type:String,default:"single"},valueType:{type:String,default:"date"},modelValue:{type:[String,Date],default:""},isView:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const l=e,{filedAttrs:r,filedSlots:s,attrs:o,slots:i}=F(Nt()),n=m({fieldValue:"",defaultDate:null}),[d,u]=Z(!1),c={date:"YYYY-MM-DD",datehour:"YYYY-MM-DD HH",datetime:"YYYY-MM-DD HH:mm"},f=p((()=>c[l.valueType]||"YYYY-MM-DD")),y=p((()=>a(n.fieldValue)?n.fieldValue.join("range"===l.type?"~":","):"string"==typeof n.fieldValue?n.fieldValue:"")),b=e=>{let r;r="single"===l.type?W(e).format(f.value):a(e)?e.map((e=>W(e).format(f.value))):[],n.fieldValue=r,t("update:modelValue",r),u(!1)};return v((()=>l.modelValue),(e=>{"single"===l.type?"string"==typeof e&&e&&(n.defaultDate=W(e).toDate()):n.defaultDate=a(e)?e.map((e=>W(e).toDate())):null,n.fieldValue=(e=>"single"===l.type?Mt(e)?W(e).format(f.value):e||"":a(e)?e:[])(e)}),{immediate:!0,deep:!0}),(t,a)=>{const l=G;return h(),_(N,null,[L(Ot,$({"model-value":V(n).fieldValue},V(r),{"field-value-view":V(y),onClick:a[0]||(a[0]=t=>!e.isView&&(d.value=!0))}),w({_:2},[C(Object.keys(V(s)),(e=>({name:e,fn:g((()=>[D(t.$slots,e)]))})))]),1040,["model-value","field-value-view"]),L(l,$({show:V(d),"onUpdate:show":a[1]||(a[1]=e=>U(d)?d.value=e:null),type:e.type,"default-date":V(n).defaultDate},V(o),{onConfirm:b}),w({_:2},[C(Object.keys(V(i)),(e=>({name:e,fn:g((()=>[D(t.$slots,e)]))})))]),1040,["show","type","default-date"])],64)}}}),Tt=d({inheritAttrs:!1,__name:"ProCascaderV2",props:{showFullValue:{type:Boolean,default:!1},modelValue:{type:[String,Number,Object],default:""},columns:{type:Array,default:()=>[]},dictCode:{type:String,default:""},customFieldName:{type:Object,default:()=>({text:"name",value:"code",children:"children"})},level:{type:Number,default:0}},emits:["update:modelValue","update:fullValue"],setup(l,{emit:r}){const s=l,o=e(),{dictMap:i}=t(o),{filedAttrs:n,filedSlots:d,attrs:u,slots:c}=F(Nt()),[f,y]=Z(!1),b=m({columns:[],modelValue:"",fieldValue:""}),S=()=>{y(!0)},A=()=>{y(!1)},O=p((()=>{let e=[];a(s.columns)&&(e=s.columns);const t=i.value[s.dictCode];return s.dictCode&&a(t)&&(e=t),((e,t=0,l="children")=>{const r=(e,s=1)=>a(e)?e.map((({[`${l}`]:e,...o})=>{const i={};return(!t||t&&t>s)&&a(e)&&(i.children=r(e,s+1)),{...o,...i}})):[];return r(e)})(e,s.level)})),k=p((()=>((e,t)=>{const l=[],{value:r,children:o}=s.customFieldName,i=(e,s=0)=>!!a(e)&&e.some(((e,n)=>{const{[o]:d,...u}=e;return l[s]=u,e[r]===t||!!a(d)&&i(d,s+1)}));return a(e)&&!i(e)?[]:l})(O.value,b.modelValue))),P=p((()=>{if(a(k.value)){const e=k.value.map((e=>e[s.customFieldName.text]));return s.showFullValue?e.join("/"):e[e.length-1]}return""})),M=({value:e,selectedOptions:t})=>{b.modelValue=e,b.fieldValue=e,r("update:modelValue",e),A()};return v((()=>s.modelValue),(e=>{b.modelValue=e}),{immediate:!0,deep:!0}),v((()=>k.value),(e=>{r("update:fullValue",e)}),{deep:!0,immediate:!0}),(e,t)=>{const a=X,r=q;return h(),_(N,null,[L(Ot,$({"model-value":V(b).fieldValue},V(n),{"field-value-view":V(P),onClick:S}),w({_:2},[C(Object.keys(V(d)),(t=>({name:t,fn:g((()=>[D(e.$slots,t)]))})))]),1040,["model-value","field-value-view"]),L(r,{show:V(f),"onUpdate:show":t[0]||(t[0]=e=>U(f)?f.value=e:null),height:60,closeable:!1,class:"com-cascader-popup"},{default:g((()=>[L(a,$({options:V(O),"field-names":l.customFieldName,"model-value":V(b).modelValue},V(u),{onClose:A,onFinish:M}),null,16,["options","field-names","model-value"])])),_:1},8,["show"])],64)}}});var xt=n(d({inheritAttrs:!1,__name:"ProDatePickerV2",props:{type:{type:String,default:"date"},modelValue:{type:[String,Date],default:""},isView:{type:Boolean,default:!1},columns:{type:Array,default:()=>[]}},emits:["update:modelValue","cancel"],setup(e,{emit:t}){const a=e,{filedAttrs:l,filedSlots:r,attrs:s,slots:o}=F(Nt()),{formState:i}=M(oe)||{},[n,d]=Z(!1),u=p((()=>!["time","month-day"].includes(a.type))),c=m({fieldValue:"",date:u.value?new Date:null}),f={datetime:"YYYY-MM-DD HH:mm",date:"YYYY-MM-DD","year-month":"YYYY-MM","month-day":"MM-DD",datehour:"YYYY-MM-DD HH",time:"mm:ss"},y=p((()=>({minDate:new Date(1900,0,1),maxDate:new Date}))),b=p((()=>f[a.type]||"YYYY-MM-DD HH:mm")),S=e=>{c.fieldValue=Mt(e)?W(e).format(b.value):e,t("update:modelValue",c.fieldValue),d(!1)},A=()=>{d(!1),t("cancel")},O=e=>{Mt(e)?(c.date=e,c.fieldValue=W(e).format(b.value)):"string"==typeof e&&(c.fieldValue=e,u.value?c.date=W(e,b.value).isValid()?W(e,b.value).toDate():null:c.date=e)};return v((()=>a.modelValue),(e=>{O(e)}),{immediate:!0,deep:!0}),v((()=>{var e;return null==(e=i.formData)?void 0:e[l.value.name]}),(e=>{O(e)}),{immediate:!0,deep:!0}),(t,a)=>{const i=K,d=q;return h(),_(N,null,[L(Ot,$({"model-value":V(c).fieldValue},V(l),{"field-value-view":V(c).fieldValue,onClick:a[0]||(a[0]=t=>!e.isView&&(n.value=!0))}),w({_:2},[C(Object.keys(V(r)),(e=>({name:e,fn:g((()=>[D(t.$slots,e,{},void 0,!0)]))})))]),1040,["model-value","field-value-view"]),L(d,{show:V(n),"onUpdate:show":a[1]||(a[1]=e=>U(n)?n.value=e:null),height:40,closeable:!1},{default:g((()=>[L(i,$({type:e.type,"model-value":V(c).date,title:V(l).label},{...V(y),...V(s)},{onConfirm:S,onCancel:A}),w({_:2},[C(Object.keys(V(o)),(e=>({name:e,fn:g((()=>[D(t.$slots,e,{},void 0,!0)]))})))]),1040,["type","model-value","title"])])),_:3},8,["show"])],64)}}}),[["__scopeId","data-v-eecd8ea6"]]);var jt=n(d({__name:"ProSMSCode",props:{time:{type:Number,default:60},smsText:{type:String,default:"验证码"},relatedName:{type:String,default:"mobile"},sendSMSCode:{type:Function,default:e=>{"function"==typeof e&&e()}}},setup(e){const t=e,{formState:a,formRef:l}=M(oe)||{},r=m({iscountdowning:!1}),{current:s,start:o,reset:i}=J({time:1e3*t.time,onFinish(){r.iscountdowning=!1}}),n=()=>{r.iscountdowning||l.value.validate(t.relatedName).then((()=>{t.sendSMSCode({mobile:a.formData[t.relatedName]},(()=>{r.iscountdowning=!0,O({message:"短信发送成功，请查收"}),i(),o()}))})).catch((()=>{}))},d=p((()=>{const{seconds:e}=s.value||{};return 0===e?t.smsText:r.iscountdowning?`${e}s`:t.smsText}));return(e,t)=>{const a=Q;return e.$attrs.isView?A("",!0):(h(),b(gt,$({key:0,class:"com-pro-sms-code",type:"digit",maxlength:V(de).SMS_CODE},e.$attrs),{extra:g((()=>[L(a,{class:"extra-button",size:"small",plain:"",type:"primary",onClick:n},{default:g((()=>[I(x(V(d)),1)])),_:1})])),_:1},16,["maxlength"]))}}}),[["__scopeId","data-v-b4ef4f7e"]]);var Ft=n(d({inheritAttrs:!1,__name:"ProAddress",props:{name:{type:String,default:""},customFieldName:{type:Object,default:()=>({text:"name",value:"code",children:"children"})},valuePrefix:{type:String,default:""},attributeValueList:{type:Array,default:()=>[]}},setup(e){const t=e,l=m({address:{detail:""}}),r=p((()=>{if(!t.valuePrefix)return l.address;return Object.keys(l.address).reduce(((e,a)=>(e[(e=>{return"string"==typeof e&&e?t.valuePrefix?`${t.valuePrefix}${a=e,"string"==typeof a&&a?`${a[0].toUpperCase()}${a.substring(1)}`:""}`:e:"";var a})(a)]=l.address[a],e)),{})})),s=p((()=>{if(a(t.attributeValueList)){let e=0,a=!1;return t.attributeValueList.forEach((t=>{Number(t.code)>e&&"4"!==String(t.code)&&(e=Number(t.code)),"4"===String(t.code)&&(a=!0)})),{level:e&&e+1,showDetail:a}}return{level:0,showDetail:!0}})),o=(e=[])=>{let r={};if(a(e)){const{text:a,value:l}=t.customFieldName;r=["province","city","area"].slice(0,Number(s.value.level||3)).reduce(((t,r,s)=>{const o=e[s+1]||{};return t[`${r}Code`]=o[l],t[`${r}Name`]=o[a],t}),{})}l.address={...l.address,...r}};return(t,a)=>{const i=gt;return h(),_(N,null,[L(Ot,{class:"com-van-field-hidden",name:e.name,"model-value":V(r)},null,8,["name","model-value"]),L(Tt,$({"show-full-value":"","custom-field-name":e.customFieldName},t.$attrs,{name:`${e.name}-origin`,level:V(s).level,"onUpdate:fullValue":o}),null,16,["custom-field-name","name","level"]),V(s).showDetail?(h(),b(i,{key:0,modelValue:V(l).address.detail,"onUpdate:modelValue":a[0]||(a[0]=e=>V(l).address.detail=e),label:`${t.$attrs.label}详细地址`,required:t.$attrs.required,maxlength:50},null,8,["modelValue","label","required"])):A("",!0)],64)}}}),[["__scopeId","data-v-1121248b"]]);const Rt=d({inheritAttrs:!1,__name:"ProRenderFormWithCard",props:{title:{type:String,default:""},class:{type:String,default:""}},setup(e,{expose:t}){const a=e,l=c(null);return t({...["submit","getValues","validate","resetValidation","getValidationStatus","scrollToField"].reduce(((e,t)=>(e[t]=(...e)=>{var a;return null==(a=l.value)?void 0:a[t](...e)},e)),{})}),(t,r)=>{var s;const o=te;return(null==(s=t.$attrs.schema)?void 0:s.length)?(h(),b(o,{key:0,class:ee(`com-pro-form-with-card com-card-body-no-padding ${a.class}`),"show-line":!1,"show-divider":!1,title:e.title},{default:g((()=>[L(ht,$({ref_key:"renderFormRef",ref:l},t.$attrs),w({_:2},[C(Object.keys(t.$slots),(e=>({name:e,fn:g((()=>[D(t.$slots,e)]))})))]),1040)])),_:3},8,["class","title"])):A("",!0)}}});export{jt as P,Rt as _,gt as a,St as b,nt as c,Tt as d,Ft as e,kt as f,ht as g,xt as h,pt as t};
