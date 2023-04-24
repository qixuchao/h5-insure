import{aX as e,y as a,C as t,ay as r,Z as n,$ as o,az as i,S as l,G as s,d as u,c as d,A as c,E as m,a5 as p,aY as f,aU as v,z as N,L as y,R as b,a1 as h,e as C,ao as g,w as E,i as A,g as O,V as I,k as V,f as T,a9 as _,aT as S,aH as $,F as R,aZ as P,an as w,j as x,a_ as D,a$ as M,aa as k}from"./index-d6f83575.js";import{s as B}from"./phoneVerify-100719cd.js";import{s as L,u as H,a as j,g as Z,c as F,k as z,d as U,m as G,v as K,l as q,p as W,h as Y,w as X,x as J,q as Q,S as ee,y as ae,z as te}from"./_initCloneObject-0663309f.js";import{i as re,b as ne,a as oe}from"./isObjectLike-a9798079.js";const ie=async({mobile:e},a)=>{const t=await B(e),{code:r}=t;"10000"===r&&"function"==typeof a&&a()},le="ProFieldV2",se="ProDatePickerV2",ue="ProPickerV2",de="ProRadioV2",ce="ProCheckboxV2",me="ProSwitchV2",pe="ProCascaderV2",fe="ProBank",ve="ProAddress",Ne="ProUploadV2",ye="ProStepperV2",be="ProSMSCode",he="ProOccupation",Ce="ProIDCardUploadV2",ge=18,Ee=20,Ae=50,Oe="name",Ie="external",Ve="email",Te="zipCode",_e="tel",Se="mobile",$e="zhCN",Re="notZhCN",Pe="normalChar",we="alphabetNumber",xe="cert",De="houseHold",Me="birth",ke="passport",Be="otherCert",Le="militaryCard",He="solider",je="hongkongMacao",Ze="taiwanTravel",Fe="foreignPermanent",ze="HKMacaoResidencePermit",Ue="taiwanResidencePermit",Ge="socialCreditCode",Ke="OCC",qe="businessLicense",We="bandCard",Ye={NAME:{maxlength:25,ruleType:Oe},MOBILE:{type:"digit",ruleType:Se,maxlength:11},AGE:{type:"digit",maxlength:3},HEIGHT_WEIGHT:{type:"number",precision:1,maxlength:5},INCOME:{type:"number",precision:2,unit:"万元",isPrecisionCompleted:!0},ZIP_CODE:{type:"digit",ruleType:Te,maxlength:6},CONTENT:{maxlength:200},GAS_NUMBER:{maxlength:Ee},BANK:{type:"digit",maxlength:Ee},ADDRESS:{dictCode:e.NATIONAL_REGION_CODE,customFieldName:{text:"name",value:"code",children:"children"}},COUNTRY:{dictCode:e.NATIONALITY,customFieldName:{text:"name",value:"code",children:"children"}}},Xe=[{code:"input",name:"单行文本",value:1,componentName:le},{code:"textarea",name:"多行文本",value:2,type:"textarea",componentName:le},{code:"number",name:"数字输入框",value:3,componentName:le},{code:"date",name:"日期",value:4,componentName:se},{code:"select",name:"下拉框",value:5,componentName:ue},{code:"radio",name:"单选框",value:6,componentName:de},{code:"checkbox",name:"多选框",value:7,componentName:ce},{code:"switch",name:"switch开关",value:8,componentName:me},{code:"cascader",name:"级联选择",value:9,componentName:pe},{code:"bank",name:"银行卡",value:10,componentName:fe},{code:"address",name:"地址",value:11,componentName:ve},{code:"upload",name:"文件上传",value:12,componentName:Ne},{code:"stepper",name:"步进器",value:13,componentName:ye}],Je={BANK_CARD_NO:"bankCardNo",CARD_HOLDER:"cardHolder",DEPOSIT_BANK:"depositBank",BANK_CARD_IMAGE:"bankCardImage",RESERVE_MOBILE:"reserveMobile",VERIFICATION_CODE:"verificationCode"},Qe=Object.values(Je),ea={bankCardNo:{...Ye.BANK,name:Je.BANK_CARD_NO,componentName:le},cardHolder:{...Ye.NAME,name:Je.CARD_HOLDER,componentName:le},depositBank:{name:Je.DEPOSIT_BANK,dictCode:e.BANK,componentName:ue},bankCardImage:{maxCount:2,subLabel:"（需上传正反两面）",name:Je.BANK_CARD_IMAGE,componentName:Ne},reserveMobile:{...Ye.MOBILE,name:Je.RESERVE_MOBILE,componentName:le},verificationCode:{...Ye.ZIP_CODE,sendSMSCode:ie,name:Je.VERIFICATION_CODE,relatedName:Je.RESERVE_MOBILE,componentName:be}},aa={certType:{[t.CERT]:[xe],[t.HOUSE_HOLD]:[De],[t.MILITARY_CARD]:[Le],[t.PASSPORT]:[ke],[t.HONGKONG_MACAO]:[je],[t.OTHER]:[Be],[t.SOLIDER]:[He],[t.BIRTH]:[Me],[t.TAIWAN_TRAVEL]:[Ze],[t.FOREIGN_PERMANENT]:[Fe],[t.HK_MACAO_RESIDENCE_PERMIT]:[ze],[t.TAIWAN_RESIDENCE_PERMIT]:[Ue],[t.SOCIAL_CREDIT_CODE]:[Ge]}},ta={INSURE_AREA:"insureArea",RESIDENCE:"residence",LONG_AREA:"longArea",WORK_ADDRESS:"workAddress"};Object.values(ta);const ra=[{key:ta.INSURE_AREA,valuePrefix:"insure"},{key:ta.RESIDENCE,valuePrefix:""},{key:ta.LONG_AREA,valuePrefix:""},{key:ta.WORK_ADDRESS,valuePrefix:"work"}].reduce(((e,{key:a,valuePrefix:t})=>(e[a]={valuePrefix:t,...Ye.ADDRESS},e)),{}),na={name:Ye.NAME,certNo:{relatedName:"certType",maxlength:ge},certType:{relatedName:"certNo"},mobile:Ye.MOBILE,age:Ye.AGE,height:{...Ye.HEIGHT_WEIGHT,unit:"cm"},weight:{...Ye.HEIGHT_WEIGHT,unit:"kg"},email:{ruleType:Ve},personalAnnualIncome:Ye.INCOME,familyAnnualIncome:Ye.INCOME,workZipCode:Ye.ZIP_CODE,homePostalCode:Ye.ZIP_CODE,workContent:Ye.CONTENT,gasNumberCollection:{...Ye.GAS_NUMBER,ruleType:Re},verificationCode:{sendSMSCode:ie,componentName:be,...Ye.ZIP_CODE},...ra,nationalityCode:{...Ye.COUNTRY},certEndDate:{minDate:new Date,maxDate:a().add(100,"year").toDate()},companyName:{maxlength:Ae},occupationCodeList:{componentName:he,dictCode:(oa=(window.location.search.match(/&insurerCode=([^&]*)&/)||[])[1]||"",(oa?`${oa.toUpperCase()}_`:"")+"OCCUPATION")},certImage:{componentName:Ce}};var oa;const ia=2,la={1:"holder",2:"insured",3:"beneficiary",4:"payInfo",5:"signInfo"},sa=Symbol("VAN_PRO_FORM_KEY"),ua=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,da=e=>{if(!ua.test(e))return!1;if(18!==e.length)return!1;const a=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];let t=0;for(let o=0;o<17;o++)t+=e.substring(o,o+1)*a[o];const r=t%11,n=e.substring(17);return 2===r?"X"===n.toUpperCase():Number(n)===[1,0,10,9,8,7,6,5,4,3,2][r]},ca={isName:e=>/^[\u4e00-\u9fa5a-z].{0,23}[\u4e00-\u9fa5a-z]/i.test(e),isExternal:e=>/^(https?:|mailto:|tel:)/.test(e),isEmail:e=>/^[A-Za-z0-9]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(e),isZipCode:e=>/^[0-9]{6,6}$/.test(e),isTel:e=>/0\d{2,3}-\d{7,8}/.test(e),isPhone:e=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(e),isZhCN:e=>/^[\u4e00-\u9fa5]+$/.test(e),isNotZhCN:e=>/^[^\u4e00-\u9fa5]+$/.test(e),isCommonChar:e=>/^[\w_]{6,20}$/.test(e),isNormalChar:e=>/^[\u4e00-\u9fa5a-zA-Z0-9]+$/.test(e),isAlphabetNumber:e=>/^[a-z0-9]+$/i.test(e),isAlphabetNumberOrSpecial:e=>/^[a-z0-9`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥¥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]+$/i.test(e),isIdCardNo:e=>da(e),isHouseHold:e=>da(e),isBirthType:e=>/^[a-zA-Z]\d{9}$/.test(e),isPassword:e=>/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,20}$/.test(e),isPassportType:e=>e.length>=5&&/^[^\u4e00-\u9fa5]+$/.test(e),isMilitaryCard:e=>/^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/.test(e),isSolider:e=>/^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/.test(e),isHongkongMacaoTravel:e=>/^[C]\d{8}$|^[C][a-hA-Hj-nJ-Np-zP-Z][0-9]{7}$/.test(e),isTaiwanTravel:e=>/^[L]\d{8}$/.test(e),isForeignPermanent:e=>/^[A-Z]{3}[0-9]{12}$/.test(e),isHKMacaoResidencePermit:e=>/^8[12]0000(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX]$/.test(e),isTaiwanResidencePermit:e=>/^830000(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX]$/.test(e),isUSCC:e=>/^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/.test(e),isUSCCPolicy:e=>/^[A-Z0-9]{18}$/.test(e),isOCC:e=>/^[A-Z0-9]{8}-[A-Z0-9]{1}$/.test(e),isBusinessLicense:e=>/(^\d{15}$)|(^[A-Z0-9]{18}$)/.test(e),isBandcard:e=>/^\d{12,20}$/g.test(e),isOtherCert:e=>/^.{1,18}$/.test(e)},ma={[Oe]:[ca.isName],[Ie]:[ca.isExternal],[Ve]:[ca.isEmail],[Te]:[ca.isZipCode],[_e]:[ca.isTel],[Se]:[ca.isPhone],[$e]:[ca.isZhCN],[Re]:[ca.isNotZhCN],[Pe]:[ca.isNormalChar],[we]:[ca.isAlphabetNumber],[xe]:[ca.isIdCardNo],[De]:[ca.isHouseHold],[Me]:[ca.isBirthType],[ke]:[ca.isPassportType],[Le]:[ca.isMilitaryCard],[He]:[ca.isSolider],[je]:[ca.isHongkongMacaoTravel],[Ze]:[ca.isTaiwanTravel],[Fe]:[ca.isForeignPermanent],[ze]:[ca.isHKMacaoResidencePermit],[Ue]:[ca.isTaiwanResidencePermit],[Ge]:[ca.isUSCCPolicy],[Ke]:[ca.isOCC],[qe]:[ca.isBusinessLicense],[We]:[ca.isBandcard],[Be]:[ca.isOtherCert]};function pa(e,a,t){(void 0!==t&&!L(e[a],t)||void 0===t&&!(a in e))&&H(e,a,t)}var fa,va=function(e,a,t){for(var r=-1,n=Object(e),o=t(e),i=o.length;i--;){var l=o[fa?i:++r];if(!1===a(n[l],l,n))break}return e};var Na=Function.prototype,ya=Object.prototype,ba=Na.toString,ha=ya.hasOwnProperty,Ca=ba.call(Object);function ga(e,a){if(("constructor"!==a||"function"!=typeof e[a])&&"__proto__"!=a)return e[a]}function Ea(e,a,t,r,n,o,i){var l=ga(e,t),s=ga(a,t),u=i.get(s);if(u)pa(e,t,u);else{var d,c=o?o(l,s,t+"",e,a,i):void 0,m=void 0===c;if(m){var p=U(s),f=!p&&G(s),v=!p&&!f&&K(s);c=s,p||f||v?U(l)?c=l:re(d=l)&&j(d)?c=q(l):f?(m=!1,c=W(s,!0)):v?(m=!1,c=Y(s,!0)):c=[]:function(e){if(!re(e)||"[object Object]"!=ne(e))return!1;var a=Z(e);if(null===a)return!0;var t=ha.call(a,"constructor")&&a.constructor;return"function"==typeof t&&t instanceof t&&ba.call(t)==Ca}(s)||X(s)?(c=l,X(l)?c=function(e){return F(e,z(e))}(l):oe(l)&&!J(l)||(c=Q(s))):m=!1}m&&(i.set(s,c),n(c,s,r,o,i),i.delete(s)),pa(e,t,c)}}function Aa(e,a,t,r,n){e!==a&&va(a,(function(o,i){if(n||(n=new ee),oe(o))Ea(e,a,i,t,Aa,r,n);else{var l=r?r(ga(e,i),o,i+"",e,a,n):void 0;void 0===l&&(l=o),pa(e,i,l)}}),z)}function Oa(e){return e}function Ia(e,a,t){switch(t.length){case 0:return e.call(a);case 1:return e.call(a,t[0]);case 2:return e.call(a,t[0],t[1]);case 3:return e.call(a,t[0],t[1],t[2])}return e.apply(a,t)}var Va=Math.max;var Ta=ae?function(e,a){return ae(e,"toString",{configurable:!0,enumerable:!1,value:(t=a,function(){return t}),writable:!0});var t}:Oa,_a=Ta,Sa=Date.now;var $a,Ra,Pa,wa=($a=_a,Ra=0,Pa=0,function(){var e=Sa(),a=16-(e-Pa);if(Pa=e,a>0){if(++Ra>=800)return arguments[0]}else Ra=0;return $a.apply(void 0,arguments)});function xa(e,a){return wa(function(e,a,t){return a=Va(void 0===a?e.length-1:a,0),function(){for(var r=arguments,n=-1,o=Va(r.length-a,0),i=Array(o);++n<o;)i[n]=r[a+n];n=-1;for(var l=Array(a+1);++n<a;)l[n]=r[n];return l[a]=t(i),Ia(e,this,l)}}(e,a,Oa),e+"")}var Da,Ma=(Da=function(e,a,t){Aa(e,a,t)},xa((function(e,a){var t=-1,r=a.length,n=r>1?a[r-1]:void 0,o=r>2?a[2]:void 0;for(n=Da.length>3&&"function"==typeof n?(r--,n):void 0,o&&function(e,a,t){if(!oe(t))return!1;var r=typeof a;return!!("number"==r?j(t)&&te(a,t.length):"string"==r&&a in t)&&L(t[a],e)}(a[0],a[1],o)&&(n=r<3?void 0:n,r=1),e=Object(e);++t<r;){var i=a[t];i&&Da(e,i,t,n)}return e})));function ka(e){return null==e}const Ba=["v-model","label","name","id","type","size","maxlength","placeholder","border","disabled","readonly","colon","required","center","clearable","clear-icon","clear-trigger","clickable","is-link","autofocus","show-word-limit","error","error-message","error-message-align","formatter","format-trigger","arrow-direction","label-class","label-width","label-align","input-align","autosize","left-icon","right-icon","icon-prefix","rules","autocomplete","enterkeyhint","visible"],La=["label","input","left-icon","right-icon","button","error-message","extra"],Ha={autocomplete:"off"},ja=e=>console.log(`%c🔥 ${e}`,"color:#1989fa;background:#5e4;padding:3px 5px;"),Za=e=>{const{trialFactorCodes:a,personVO:t}=e||{};return!r(a)||!a.some((e=>{const a=t[e];return ka(a)||""===a||Array.isArray(a)&&!a.length}))},Fa=(e,a,t)=>{var n;return t&&!r(a)?Promise.resolve():null==(n=e.value)?void 0:n.validate(t?a:void 0)},za=(e,a="children")=>r(e)?e.map((({[`${a}`]:e,...t})=>{const n={};return r(e)&&(n.children=za(e)),{...t,...n}})):[],Ua=(e,a=0,t="children")=>{const n=(e,o=1)=>r(e)?e.map((({[`${t}`]:e,...i})=>{const l={};return(!a||a&&a>o)&&r(e)&&(l.children=n(e,o+1)),{...i,...l}})):[];return n(e)},Ga=(e,a,t={})=>{const n=Object.keys(e);return r(n)?n.reduce(((t,r)=>{const n=a.includes(r);return t[Number(!n)][r]=e[r],t}),[{...t},{}]):[{...t},{}]},Ka=e=>{if("certType"!==(null==e?void 0:e.name))return!1;const{columns:a,title:n}=e||{};return r(a)&&1===a.length&&a.find((e=>e.code===t.CERT))},qa=(e,a)=>{let t=[];const o=[];return r(e)&&(t=e.map((e=>{const{code:a,name:t,value:r,componentName:l,...s}=Xe.find((a=>`${a.value}`==`${e.displayType}`))||{};e.isCalculationFactor===n.YES&&o.push(e.code);const u={},{componentName:d,...c}=na[e.code]||{},m=d||l||"ProFieldV2";2===e.moduleType&&(u.isSelfInsuredNeed=e.isSelfInsuredNeed);const p={...s,...u,customFieldName:{text:"value",value:"code",children:"children"},label:e.title,name:e.code,componentName:m,required:1===e.isMustInput,nanoid:i(),...c},f={...p,attributeValueList:e.attributeValueList,columns:p.dictCode?[]:e.attributeValueList||[]};return Ka(f)&&(f.visible=!1),f}))),a.push(...o),{schema:t,trialFactorCodes:o}},Wa=(e,a={isTrial:!1})=>{const t={};if(!e)return t;const o=Object.keys(e)||[];if(!r(o))return t;const i=[],l={hasTrialFactorCodes:!1,isSpouseInsured:!1,multiInsuredSupportFlag:a.multiInsuredSupportFlag===n.YES,multiInsuredMaxNum:a.multiInsuredNum,multiInsuredMinNum:1,multiBeneficiaryMaxNum:a.multiBeneficiaryMaxNum||5},s=o.reduce(((t,n)=>(t[la[n]]=r(e[n])?e[n].filter((e=>{const{subModuleType:t,code:n,attributeValueList:o}=e;if(t===ia&&"relationToMainInsured"===n){r(o)&&1===o.length&&o.findIndex((e=>"2"===e.code))>-1&&Object.assign(l,{multiInsuredMaxNum:2,multiInsuredMinNum:2,isSpouseInsured:!0})}return!a.isTrial||1===e.isCalculationFactor})):[],t)),{}),u=((e,a)=>{if(!r(e.insured))return[];const t=r(e.holder)?e.holder.map((e=>e.code)):[];return e.insured.reduce(((e,n)=>{const{code:o,subModuleType:i,attributeValueList:l}=n;return i===ia?("relationToMainInsured"===o&&r(l)&&1===l.length&&l.findIndex((e=>"2"===e.code))>-1&&Object.assign(a,{multiInsuredMaxNum:2,multiInsuredMinNum:2,isSpouseInsured:!0}),e[1].push({...n,isSelfInsuredNeed:!t.includes(o)})):e[0].push({...n,isSelfInsuredNeed:!t.includes(o)}),e}),[[],[]]).filter((e=>r(e)))})(s,l),d=Object.keys(s).reduce(((e,a)=>(e[a]="insured"!==a?qa(s[a],i):r(u)?u.map((e=>qa(e,i))):[],e)),{});return d.config={...l,hasTrialFactorCodes:r(i)},d},Ya=e=>"string"==typeof e&&e?`${e[0].toUpperCase()}${e.substring(1)}`:"",Xa=(e,a={})=>Object.keys(e).reduce(((e,t)=>(e[a[t]||t]=t,e)),{}),Ja={certNo:{onChangeEffect:(e,a)=>{Object.assign(a.formData,{certNo:"",gender:"",birthday:""}),o((()=>{const e=![t.CERT,t.HOUSE_HOLD].includes(a.formData.certType);Ma(a.config,{gender:{visible:e},birthday:{visible:e}})}))}},certType:{extraAttrs:{4:{maxlength:10}},onChangeEffect:(e,a)=>{if([t.CERT,t.HOUSE_HOLD].includes(a.formData.certType)){const t=(e=>{const a={gender:"",birthday:""};if("string"==typeof e&&e&&da(e)){const t={15:[6,12],18:[6,14]};a.birthday=e.slice(...t[e.length]).replace(/(.{4})(.{2})/,"$1-$2-"),a.gender=[l.FEMALE,l.MALE][Number(e.slice(-2,-1))%2]}return a})(e);Object.assign(a.formData,t)}}}};var Qa=function(e){return null==e};var et=function(e){var a=typeof e;return null!=e&&("object"==a||"function"==a)};const at={class:"value-view-wrap"};var tt=s(u({__name:"ValueView",props:{value:{type:String,default:""},isView:{type:Boolean,default:!1}},setup:e=>(a,t)=>(d(),c("span",at,m(e.value||"-"),1))}),[["__scopeId","data-v-505dc7b6"]]);const rt={class:"com-van-field-unit"},nt=u({inheritAttrs:!1,__name:"ProFieldV2",props:{ruleType:{type:String,default:""},modelValue:{type:[String,Number,Object,Array,Boolean],default:""},isView:{type:Boolean,default:!1},required:{type:Boolean,default:!1},rules:{type:Array,default:()=>[]},relatedName:{type:String,default:""},precision:{type:Number,default:0},isPrecisionCompleted:{type:Boolean,default:!1},unit:{type:String,default:""}},emits:["update:model-value","blur"],setup(e,{emit:a}){const t=e,n=p(),o=f(),{formState:i,markRequired:l}=v(sa)||{},s=N({modelValue:""}),u=y((()=>{const e=Xa(o,n.slots),{extra:a,...r}=e;return t.unit?r:e})),c=y((()=>n.placeholder||`请输入${n.label||""}`)),$=y((()=>`${s.modelValue||""}`)),R=y((()=>{var e,a;if(t.ruleType)return t.ruleType;if(t.relatedName){const r=null==(e=null==i?void 0:i.formData)?void 0:e[t.relatedName];if(r)return null==(a=aa[t.relatedName])?void 0:a[r]}return""})),P=e=>Qa(e)||""===e||Array.isArray(e)&&!e.length||et(e)&&Object.keys(e).some((e=>P(e))),w=y((()=>r(t.rules)?t.rules:[{required:t.required,validator:e=>{if(t.required&&P(e))return n.placeholder;if(R.value){const[a]=ma[R.value]||[];if("function"!=typeof a)return console.warn(`%c 字段 ${n.label} 的规则 ${R} 校验函数不存在，请先确认～`,"color: #3e7;"),"";if(!a(e))return`请输入正确的${n.label}`}return""}}])),x=y((()=>"number"===n.type&&t.precision)),D=e=>x.value&&e?e.replace(/^(0)\d+$/g,"$1").replace(new RegExp(`^(\\d+\\.\\d{${t.precision}})\\d+$`,"g"),"$1"):e,M=y((()=>{var e;if(t.relatedName){const{extraAttrs:a}=Ja[t.relatedName]||{},r=null==(e=null==i?void 0:i.formData)?void 0:e[t.relatedName];if(a&&!Qa(r)&&""!==r)return a[r]||{}}return{}})),k=(e,a)=>{if(t.relatedName&&e){const r=(Ja[t.relatedName]||{})[`${e}Effect`];"function"==typeof r&&r(a,i)}},B=e=>{k("onChange",e),s.modelValue=e,a("update:model-value",e)},L=e=>{let r=s.modelValue;x.value&&r&&t.isPrecisionCompleted&&(r=Number(r).toFixed(t.precision),B(r)),k("onBlur",r),a("blur",e)};return b((()=>t.modelValue),(e=>{s.modelValue=e}),{immediate:!0,deep:!0}),b((()=>{var e;return null==(e=null==i?void 0:i.formData)?void 0:e[n.name]}),(e=>{s.modelValue=e}),{immediate:!0,deep:!0}),h((()=>{n.name&&(null==i?void 0:i.nameList)&&i.nameList.push(n.name)})),(a,t)=>{const r=S;return d(),C(r,_({"model-value":O(s).modelValue,class:`com-van-field ${O(l)?"":"field-mark--hidden"} ${!1===O(n).visible?"com-van-field--hidden":""}`,autocomplete:"off",formatter:D},{maxlength:25,...a.$attrs,placeholder:O(c),required:e.required,rules:O(w),...O(M)},{onBlur:L,"onUpdate:modelValue":B}),g({_:2},[e.isView?{name:"input",fn:E((()=>[A(tt,{value:O($)},null,8,["value"])])),key:"0"}:void 0,I(Object.keys(O(u)),(e=>({name:e,fn:E((()=>[V(a.$slots,O(u)[e])]))}))),e.unit?{name:"extra",fn:E((()=>[T("div",rt,m(e.unit),1)])),key:"1"}:void 0]),1040,["model-value","class"])}}}),ot={input:"请输入",select:"请选择"};function it({placeholderType:e}={placeholderType:"select"}){const a=p(),t=f(),r=N({filedAttrs:{},filedSlots:{},attrs:{},slots:{}});return b((()=>a),(()=>{const[t,n]=(e=>Ga(e,Ba,Ha))(a);r.filedAttrs={...t,placeholder:a.placeholder||`${ot[e]}${a.label||""}`},r.attrs={title:`请选择${t.label}`,...n}}),{deep:!0,immediate:!0}),b([()=>t,()=>a.slots],(e=>{const[n,o]=(e=>Ga(e,La))(Xa(t,a.slots));r.filedSlots=n||{},r.slots=o||{}}),{deep:!0,immediate:!0}),r}const lt={class:"custom-input-wrap"},st={key:1,class:"placeholder"},ut=u({inheritAttrs:!1,__name:"CustomInput",props:{fieldValueView:{type:String,default:""},isView:{type:Boolean,default:!1},modelValue:{type:[String,Boolean,Object,Number],default:""}},setup(e){const a=e;return p(),v(sa),$((()=>a.modelValue)),(a,t)=>(d(),c("div",lt,[e.fieldValueView||e.isView?(d(),C(tt,{key:0,value:e.fieldValueView},null,8,["value"])):(d(),c("span",st,m(a.$attrs.placeholder),1))]))}});const dt=u({name:"ProFormItem"}),ct=u({...dt,props:{fieldValueView:{type:String,default:""},name:{type:String,default:""},isView:{type:Boolean,default:!1},modelValue:{type:[String,Boolean,Object,Number],default:""}},setup:e=>(a,t)=>(d(),C(nt,{class:R({"com-form-item":!0,"com-form-item--view":e.isView}),"is-link":!e.isView},g({input:E((()=>[A(ut,{name:e.name,"model-value":e.modelValue,"is-view":e.isView,"field-value-view":e.fieldValueView,placeholder:a.$attrs.placeholder},null,8,["name","model-value","is-view","field-value-view","placeholder"])])),_:2},[I(Object.keys(a.$slots),(e=>({name:e,fn:E((()=>[V(a.$slots,e)]))})))]),1032,["class","is-link"]))});const mt={class:"sub-label"},pt={class:"com-image-upload"},ft={class:"upload-item"};var vt=s(u({__name:"ProUploadV2",props:{modelValue:{type:Array,default:()=>[]},maxCount:{type:Number,default:1},subLabel:{type:String,default:""},uploadType:{type:String,default:P.OTHER},isView:{type:Boolean,default:!1}},emits:["update:modelValue","onUploaded"],setup(e,{emit:a}){const t=e,{filedAttrs:r,filedSlots:n,attrs:o,slots:i}=w(it());v(sa);const l=y((()=>Object.keys(i).filter((e=>"default"!==e)))),s=N({modelValue:[]}),u=y((()=>s.modelValue.map((e=>({url:e})))));$((()=>s.modelValue));const c=e=>{D(e.file,t.uploadType).then((e=>{const{code:t,data:r}=e||{};"10000"===t&&r.url&&(s.modelValue.push(r.url),a("onUploaded",r))}))},p=(e,a)=>{const{index:t}=a;s.modelValue.splice(t,1)};return b((()=>s.modelValue),(e=>{a("update:modelValue",e)}),{deep:!0,immediate:!0}),b((()=>t.modelValue),(e=>{Array.isArray(s.modelValue)&&(s.modelValue=e)}),{deep:!0,immediate:!0}),(a,t)=>{const n=M,o=ct;return d(),C(o,{class:R({"com-van-upload-wrap":!0,"com-van-upload-wrap-view":e.isView}),"model-value":O(s).modelValue},g({input:E((()=>[T("div",pt,[A(n,{"model-value":O(u),"after-read":c,"max-count":e.maxCount,"before-delete":p,disabled:e.isView},g({default:E((()=>[V(a.$slots,"default",{},(()=>[T("div",ft,[A(k,{name:"image-upload",class:"icon"})])]),!0)])),_:2},[I(O(l),(e=>({name:e,fn:E((()=>[V(a.$slots,e,{},void 0,!0)]))})))]),1032,["model-value","max-count","disabled"])])])),_:2},[e.subLabel?{name:"label",fn:E((()=>[x(m(O(r).label),1),T("span",mt,m(e.subLabel),1)])),key:"0"}:void 0]),1032,["class","model-value"])}}}),[["__scopeId","data-v-4a3c70f8"]]);export{Qe as B,ea as P,sa as V,nt as _,Fa as a,ka as b,ja as c,tt as d,za as e,ct as f,Ua as g,Ya as h,Ka as i,vt as j,Ja as r,Wa as t,it as u,Za as v};
