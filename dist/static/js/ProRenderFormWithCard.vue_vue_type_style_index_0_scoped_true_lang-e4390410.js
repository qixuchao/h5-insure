import{b5 as e,y as a,C as t,aR as o,Z as r,$ as n,aS as l,S as i,G as s,d as u,c as d,A as c,E as m,a6 as p,b6 as f,aT as y,z as b,L as v,R as N,a1 as g,e as h,ap as C,w as A,i as E,g as O,V as T,k as I,at as V,au as _,f as S,aa as w,aN as $,aA as R,F as P,b7 as x,ao as M,b8 as k,b9 as D,ab as j,ba as B,j as L}from"./index-dff049ba.js";import{s as H}from"./phoneVerify-b189d1fc.js";import{m as F,o as Z,p as U,g as K,c as z,k as G,i as Y,f as q,q as W,e as X,h as J,b as Q,r as ee,s as ae,j as te,S as oe,t as re,u as ne}from"./_initCloneObject-da8458a4.js";import{i as le,b as ie,a as se}from"./isObjectLike-a9798079.js";function ue(e,a,t){(void 0!==t&&!F(e[a],t)||void 0===t&&!(a in e))&&Z(e,a,t)}var de,ce=function(e,a,t){for(var o=-1,r=Object(e),n=t(e),l=n.length;l--;){var i=n[de?l:++o];if(!1===a(r[i],i,r))break}return e};var me=Function.prototype,pe=Object.prototype,fe=me.toString,ye=pe.hasOwnProperty,be=fe.call(Object);function ve(e,a){if(("constructor"!==a||"function"!=typeof e[a])&&"__proto__"!=a)return e[a]}function Ne(e,a,t,o,r,n,l){var i=ve(e,t),s=ve(a,t),u=l.get(s);if(u)ue(e,t,u);else{var d,c=n?n(i,s,t+"",e,a,l):void 0,m=void 0===c;if(m){var p=Y(s),f=!p&&q(s),y=!p&&!f&&W(s);c=s,p||f||y?Y(i)?c=i:le(d=i)&&U(d)?c=X(i):f?(m=!1,c=J(s,!0)):y?(m=!1,c=Q(s,!0)):c=[]:function(e){if(!le(e)||"[object Object]"!=ie(e))return!1;var a=K(e);if(null===a)return!0;var t=ye.call(a,"constructor")&&a.constructor;return"function"==typeof t&&t instanceof t&&fe.call(t)==be}(s)||ee(s)?(c=i,ee(i)?c=function(e){return z(e,G(e))}(i):se(i)&&!ae(i)||(c=te(s))):m=!1}m&&(l.set(s,c),r(c,s,o,n,l),l.delete(s)),ue(e,t,c)}}function ge(e,a,t,o,r){e!==a&&ce(a,(function(n,l){if(r||(r=new oe),se(n))Ne(e,a,l,t,ge,o,r);else{var i=o?o(ve(e,l),n,l+"",e,a,r):void 0;void 0===i&&(i=n),ue(e,l,i)}}),G)}function he(e){return e}function Ce(e,a,t){switch(t.length){case 0:return e.call(a);case 1:return e.call(a,t[0]);case 2:return e.call(a,t[0],t[1]);case 3:return e.call(a,t[0],t[1],t[2])}return e.apply(a,t)}var Ae=Math.max;var Ee=re?function(e,a){return re(e,"toString",{configurable:!0,enumerable:!1,value:(t=a,function(){return t}),writable:!0});var t}:he,Oe=Ee,Te=Date.now;var Ie,Ve,_e,Se=(Ie=Oe,Ve=0,_e=0,function(){var e=Te(),a=16-(e-_e);if(_e=e,a>0){if(++Ve>=800)return arguments[0]}else Ve=0;return Ie.apply(void 0,arguments)});function we(e,a){return Se(function(e,a,t){return a=Ae(void 0===a?e.length-1:a,0),function(){for(var o=arguments,r=-1,n=Ae(o.length-a,0),l=Array(n);++r<n;)l[r]=o[a+r];r=-1;for(var i=Array(a+1);++r<a;)i[r]=o[r];return i[a]=t(l),Ce(e,this,i)}}(e,a,he),e+"")}var $e,Re=($e=function(e,a,t){ge(e,a,t)},we((function(e,a){var t=-1,o=a.length,r=o>1?a[o-1]:void 0,n=o>2?a[2]:void 0;for(r=$e.length>3&&"function"==typeof r?(o--,r):void 0,n&&function(e,a,t){if(!se(t))return!1;var o=typeof a;return!!("number"==o?U(t)&&ne(a,t.length):"string"==o&&a in t)&&F(t[a],e)}(a[0],a[1],n)&&(r=o<3?void 0:r,o=1),e=Object(e);++t<o;){var l=a[t];l&&$e(e,l,t,r)}return e})));const Pe=async({mobile:e},a)=>{const t=await H(e),{code:o}=t;"10000"===o&&"function"==typeof a&&a()},xe="ProFieldV2",Me="ProDatePickerV2",ke="ProPickerV2",De="ProRadioV2",je="ProCheckboxV2",Be="ProSwitchV2",Le="ProCascaderV2",He="ProBank",Fe="ProAddress",Ze="ProUploadV2",Ue="ProStepperV2",Ke="ProSMSCode",ze="ProOccupation",Ge="ProIDCardUploadV2",Ye="ProBankUpload",qe=18,We=20,Xe=50,Je="name",Qe="external",ea="email",aa="zipCode",ta="tel",oa="mobile",ra="zhCN",na="notZhCN",la="normalChar",ia="alphabetNumber",sa="cert",ua="houseHold",da="birth",ca="passport",ma="otherCert",pa="militaryCard",fa="solider",ya="hongkongMacao",ba="taiwanTravel",va="foreignPermanent",Na="HKMacaoResidencePermit",ga="taiwanResidencePermit",ha="socialCreditCode",Ca="OCC",Aa="businessLicense",Ea="bandCard",Oa={NAME:{maxlength:25,ruleType:Je},MOBILE:{type:"digit",ruleType:oa,maxlength:11},AGE:{type:"digit",maxlength:3},HEIGHT_WEIGHT:{type:"number",precision:1,maxlength:5},INCOME:{type:"number",precision:2,unit:"万元",isPrecisionCompleted:!0},ZIP_CODE:{type:"digit",ruleType:aa,maxlength:6},CONTENT:{maxlength:200},GAS_NUMBER:{maxlength:We},BANK:{type:"digit",maxlength:We},ADDRESS:{dictCode:e.NATIONAL_REGION_CODE,customFieldName:{text:"name",value:"code",children:"children"}},COUNTRY:{dictCode:e.NATIONALITY,customFieldName:{text:"name",value:"code",children:"children"}}},Ta=[{code:"input",name:"单行文本",value:1,componentName:xe},{code:"textarea",name:"多行文本",value:2,type:"textarea",componentName:xe},{code:"number",name:"数字输入框",value:3,componentName:xe},{code:"date",name:"日期",value:4,componentName:Me},{code:"select",name:"下拉框",value:5,componentName:ke},{code:"radio",name:"单选框",value:6,componentName:De},{code:"checkbox",name:"多选框",value:7,componentName:je},{code:"switch",name:"switch开关",value:8,componentName:Be},{code:"cascader",name:"级联选择",value:9,componentName:Le},{code:"bank",name:"银行卡",value:10,componentName:He},{code:"address",name:"地址",value:11,componentName:Fe},{code:"upload",name:"文件上传",value:12,componentName:Ze},{code:"stepper",name:"步进器",value:13,componentName:Ue}],Ia={BANK_CARD_NO:"bankCardNo",ACCOUNT_NAME:"accountName",PAY_BANK:"payBank",BANK_CARD_IMAGE:"bankCardImage",MOBILE:"mobile",VERIFICATION_CODE:"verificationCode"},Va=Object.values(Ia),_a={bankCardNo:{...Oa.BANK,name:Ia.BANK_CARD_NO,componentName:xe},accountName:{...Oa.NAME,name:Ia.ACCOUNT_NAME,componentName:xe},payBank:{name:Ia.PAY_BANK,dictCode:e.BANK,componentName:ke},bankCardImage:{maxCount:2,subLabel:"（需上传正反两面）",name:Ia.BANK_CARD_IMAGE,componentName:Ye},mobile:{...Oa.MOBILE,name:Ia.MOBILE,componentName:xe},verificationCode:{...Oa.ZIP_CODE,sendSMSCode:Pe,name:Ia.VERIFICATION_CODE,relatedName:Ia.MOBILE,componentName:Ke}},Sa={certType:{[t.CERT]:[sa],[t.HOUSE_HOLD]:[ua],[t.MILITARY_CARD]:[pa],[t.PASSPORT]:[ca],[t.HONGKONG_MACAO]:[ya],[t.OTHER]:[ma],[t.SOLIDER]:[fa],[t.BIRTH]:[da],[t.TAIWAN_TRAVEL]:[ba],[t.FOREIGN_PERMANENT]:[va],[t.HK_MACAO_RESIDENCE_PERMIT]:[Na],[t.TAIWAN_RESIDENCE_PERMIT]:[ga],[t.SOCIAL_CREDIT_CODE]:[ha]}},wa={INSURE_AREA:"insureArea",RESIDENCE:"residence",LONG_AREA:"longArea",WORK_ADDRESS:"workAddress"};Object.values(wa);const $a=[{key:wa.INSURE_AREA},{key:wa.RESIDENCE},{key:wa.LONG_AREA},{key:wa.WORK_ADDRESS}].reduce(((e,{key:a})=>(e[a]=Oa.ADDRESS,e)),{}),Ra={name:Oa.NAME,certNo:{relatedName:"certType",maxlength:qe},certType:{relatedName:"certNo"},birthday:{relatedName:"age"},mobile:Oa.MOBILE,age:Oa.AGE,height:{...Oa.HEIGHT_WEIGHT,unit:"cm"},weight:{...Oa.HEIGHT_WEIGHT,unit:"kg"},email:{ruleType:ea},personalAnnualIncome:Oa.INCOME,familyAnnualIncome:Oa.INCOME,workZipCode:Oa.ZIP_CODE,homePostalCode:Oa.ZIP_CODE,workContent:Oa.CONTENT,gasNumberCollection:{...Oa.GAS_NUMBER,ruleType:na},verificationCode:{sendSMSCode:Pe,componentName:Ke,...Oa.ZIP_CODE},...$a,nationalityCode:{...Oa.COUNTRY},certEndDate:{minDate:new Date,maxDate:a().add(100,"year").toDate()},companyName:{maxlength:Xe},occupationCodeList:{componentName:ze,dictCode:(Pa=(window.location.search.match(/&insurerCode=([^&]*)&/)||[])[1]||"",(Pa?`${Pa.toUpperCase()}_`:"")+"OCCUPATION")},certImage:{componentName:Ge},benefitRate:{...Oa.AGE,unit:"%"}};var Pa;const xa=2,Ma={1:"holder",2:"insured",3:"beneficiary",4:"payInfo",5:"signInfo"},ka=Symbol("VAN_PRO_FORM_KEY"),Da=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,ja=e=>{if(!Da.test(e))return!1;if(18!==e.length)return!1;const a=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];let t=0;for(let n=0;n<17;n++)t+=e.substring(n,n+1)*a[n];const o=t%11,r=e.substring(17);return 2===o?"X"===r.toUpperCase():Number(r)===[1,0,10,9,8,7,6,5,4,3,2][o]},Ba={isName:e=>/^[\u4e00-\u9fa5a-z].{0,23}[\u4e00-\u9fa5a-z]/i.test(e),isExternal:e=>/^(https?:|mailto:|tel:)/.test(e),isEmail:e=>/^[A-Za-z0-9]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(e),isZipCode:e=>/^[0-9]{6,6}$/.test(e),isTel:e=>/0\d{2,3}-\d{7,8}/.test(e),isPhone:e=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(e),isZhCN:e=>/^[\u4e00-\u9fa5]+$/.test(e),isNotZhCN:e=>/^[^\u4e00-\u9fa5]+$/.test(e),isCommonChar:e=>/^[\w_]{6,20}$/.test(e),isNormalChar:e=>/^[\u4e00-\u9fa5a-zA-Z0-9]+$/.test(e),isAlphabetNumber:e=>/^[a-z0-9]+$/i.test(e),isAlphabetNumberOrSpecial:e=>/^[a-z0-9`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥¥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]+$/i.test(e),isIdCardNo:e=>ja(e),isHouseHold:e=>ja(e),isBirthType:e=>/^[a-zA-Z]\d{9}$/.test(e),isPassword:e=>/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,20}$/.test(e),isPassportType:e=>e.length>=5&&/^[^\u4e00-\u9fa5]+$/.test(e),isMilitaryCard:e=>/^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/.test(e),isSolider:e=>/^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/.test(e),isHongkongMacaoTravel:e=>/^[C]\d{8}$|^[C][a-hA-Hj-nJ-Np-zP-Z][0-9]{7}$/.test(e),isTaiwanTravel:e=>/^[L]\d{8}$/.test(e),isForeignPermanent:e=>/^[A-Z]{3}[0-9]{12}$/.test(e),isHKMacaoResidencePermit:e=>/^8[12]0000(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX]$/.test(e),isTaiwanResidencePermit:e=>/^830000(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX]$/.test(e),isUSCC:e=>/^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/.test(e),isUSCCPolicy:e=>/^[A-Z0-9]{18}$/.test(e),isOCC:e=>/^[A-Z0-9]{8}-[A-Z0-9]{1}$/.test(e),isBusinessLicense:e=>/(^\d{15}$)|(^[A-Z0-9]{18}$)/.test(e),isBandcard:e=>/^\d{12,20}$/g.test(e),isOtherCert:e=>/^.{1,18}$/.test(e)},La={[Je]:[Ba.isName],[Qe]:[Ba.isExternal],[ea]:[Ba.isEmail],[aa]:[Ba.isZipCode],[ta]:[Ba.isTel],[oa]:[Ba.isPhone],[ra]:[Ba.isZhCN],[na]:[Ba.isNotZhCN],[la]:[Ba.isNormalChar],[ia]:[Ba.isAlphabetNumber],[sa]:[Ba.isIdCardNo],[ua]:[Ba.isHouseHold],[da]:[Ba.isBirthType],[ca]:[Ba.isPassportType],[pa]:[Ba.isMilitaryCard],[fa]:[Ba.isSolider],[ya]:[Ba.isHongkongMacaoTravel],[ba]:[Ba.isTaiwanTravel],[va]:[Ba.isForeignPermanent],[Na]:[Ba.isHKMacaoResidencePermit],[ga]:[Ba.isTaiwanResidencePermit],[ha]:[Ba.isUSCCPolicy],[Ca]:[Ba.isOCC],[Aa]:[Ba.isBusinessLicense],[Ea]:[Ba.isBandcard],[ma]:[Ba.isOtherCert]};function Ha(e){return null==e}const Fa=["v-model","label","name","id","type","size","maxlength","placeholder","border","disabled","readonly","colon","required","center","clearable","clear-icon","clear-trigger","clickable","is-link","autofocus","show-word-limit","error","error-message","error-message-align","formatter","format-trigger","arrow-direction","label-class","label-width","label-align","input-align","autosize","left-icon","right-icon","icon-prefix","rules","autocomplete","enterkeyhint","visible"],Za=["label","input","left-icon","right-icon","button","error-message","extra","value-view"],Ua={autocomplete:"off"},Ka=e=>console.log(`%c🔥 ${e}`,"color:#1989fa;background:#5e4;padding:3px 5px;"),za=e=>{const{trialFactorCodes:a,personVO:t}=e||{};return!o(a)||!a.some((e=>{const a=t[e];return Ha(a)||""===a||Array.isArray(a)&&!a.length}))},Ga=(e,a,t)=>{var r;return t&&!o(a)?Promise.resolve():null==(r=e.value)?void 0:r.validate(t?a:void 0)},Ya=(e,a="children")=>o(e)?e.map((({[`${a}`]:e,...t})=>{const r={};return o(e)&&(r.children=Ya(e)),{...t,...r}})):[],qa=(e,a=0,t="children")=>{const r=(e,n=1)=>o(e)?e.map((({[`${t}`]:e,...l})=>{const i={};return(!a||a&&a>n)&&o(e)&&(i.children=r(e,n+1)),{...l,...i}})):[];return r(e)},Wa=(e,a,t={})=>{const r=Object.keys(e);return o(r)?r.reduce(((t,o)=>{const r=a.includes(o);return t[Number(!r)][o]=e[o],t}),[{...t},{}]):[{...t},{}]},Xa=e=>{if("certType"!==(null==e?void 0:e.name))return!1;const{columns:a,title:r}=e||{};return o(a)&&1===a.length&&a.findIndex((e=>e.code===t.CERT))>-1},Ja=e=>o(e)&&e.some((e=>"birthday"===(e.code||e.name))),Qa=(e,a)=>{let t=[];const n=[];if(o(e)){const a=Ja(e);t=e.map((e=>{const{code:t,name:o,value:i,componentName:s,...u}=Ta.find((a=>`${a.value}`==`${e.displayType}`))||{};e.isCalculationFactor===r.YES&&n.push(e.code);const d={},{componentName:c,...m}=Ra[e.code]||{},p=c||s||"ProFieldV2";2===e.moduleType&&(d.isSelfInsuredNeed=e.isSelfInsuredNeed),"age"===e.code&&(d.visible=!a);const f={...u,...d,customFieldName:{text:"value",value:"code",children:"children"},label:e.title,name:e.code,componentName:p,required:1===e.isMustInput,nanoid:l(),...m},y={...f,attributeValueList:e.attributeValueList,columns:f.dictCode?[]:e.attributeValueList||[]};return Xa(y)&&(y.visible=!1),y}))}return a.push(...n),{schema:t,trialFactorCodes:n}},et=(e,a={isTrial:!1})=>{const t={};if(!e)return t;const n=Object.keys(e)||[];if(!o(n))return t;const l=[],i=a.multiInsuredSupportFlag===r.YES,s={hasTrialFactorCodes:!1,isSpouseInsured:!1,multiInsuredSupportFlag:i,multiInsuredMaxNum:i?a.multiInsuredNum||Number.MAX_SAFE_INTEGER:1,multiInsuredMinNum:1,multiBeneficiaryMaxNum:a.multiBeneficiaryMaxNum||5},u=n.reduce(((t,r)=>(t[Ma[r]]=o(e[r])?e[r].filter((e=>{const{subModuleType:t,code:r,attributeValueList:n}=e;if(t===xa&&"relationToMainInsured"===r){o(n)&&1===n.length&&n.findIndex((e=>"2"===e.code))>-1&&Object.assign(s,{multiInsuredMaxNum:2,multiInsuredMinNum:2,isSpouseInsured:!0})}return!a.isTrial||1===e.isCalculationFactor})):[],t)),{}),d=((e,a)=>{if(!o(e.insured))return[];const t=o(e.holder)?e.holder.map((e=>e.code)):[];return e.insured.reduce(((e,r)=>{const{code:n,subModuleType:l,attributeValueList:i}=r;return l===xa?("relationToMainInsured"===n&&o(i)&&1===i.length&&i.findIndex((e=>"2"===e.code))>-1&&Object.assign(a,{multiInsuredMaxNum:2,multiInsuredMinNum:2,isSpouseInsured:!0}),e[1].push({...r,isSelfInsuredNeed:!t.includes(n)})):e[0].push({...r,isSelfInsuredNeed:!t.includes(n)}),e}),[[],[]]).filter((e=>o(e)))})(u,s),c=Object.keys(u).reduce(((e,t)=>{if("insured"!==t){const r=u[t],n="holder"===t;e[t]=Qa(n&&o(a.holderFactorCodes)?r.filter((e=>a.holderFactorCodes.includes(e.code))):r,l)}else e[t]=o(d)?d.map((e=>Qa(o(a.insuredFactorCodes)?e.filter((e=>a.insuredFactorCodes.includes(e.code))):e,l))):[];return e}),{});return c.config={...s,hasTrialFactorCodes:o(l)},c},at=(e=!1)=>a=>{if("string"==typeof a&&a){const t=["toLowerCase","toUpperCase"][Number(e)];return`${a[0][t]()}${a.substring(1)}`}return""},tt=at(!0),ot=at(),rt=(e,a={})=>Object.keys(e).reduce(((e,t)=>(e[a[t]||t]=t,e)),{}),nt=e=>{const a=new Date,t=new Date(e);let o=a.getFullYear()-t.getFullYear();const r=a.getMonth()-t.getMonth();return(r<0||0===r&&a.getDate()<t.getDate())&&(o-=1),o},lt=(e,a=(e=>!0))=>{if(!e)return{};return Object.keys(e).filter((e=>"function"!=typeof a||a(e))).reduce(((a,t)=>(a[t]={Object:{},Array:[]}[Object.prototype.toString.call(e[t]).slice(8,-1)]||null,a)),{})},it=(e,a)=>{const o=![t.CERT,t.HOUSE_HOLD].includes(String(e)),r=Ja(a)?{age:{visible:!1}}:{};return{...["gender","birthday","age"].reduce(((e,a)=>(e[a]={visible:o},e)),{}),...r}},st=(e,a)=>{const t={},{relationToHolder:o,certType:r}=a||{},n="3"===String(o),l=null==e?void 0:e.find((e=>"certType"===e.name)),i=Xa(l||{});return i&&(t.certNo={label:"身份证号"+(n?"\n(户口簿)":"")}),l&&Re(t,it(r,e)),[i,t]},ut={certNo:{onChangeEffect:(e,a)=>{Object.assign(a.formData,{certNo:null,gender:null,birthday:null,age:null}),n((()=>{Re(a.config,it(a.formData.certType,a.schema))}))}},certType:{extraAttrs:{4:{maxlength:10}},onChangeEffect:(e,a)=>{if([t.CERT,t.HOUSE_HOLD].includes(String(a.formData.certType))){const t=(e=>{const a={gender:null,birthday:null,age:null};if("string"==typeof e&&e&&ja(e)){const t={15:[6,12],18:[6,14]};a.birthday=e.slice(...t[e.length]).replace(/(.{4})(.{2})/,"$1-$2-"),a.gender=[i.FEMALE,i.MALE][Number(e.slice(-2,-1))%2],a.age=a.birthday&&`${nt(a.birthday)}`}return a})(e);Object.assign(a.formData,t)}}},age:{onChangeEffect:(e,a)=>{if(![t.CERT,t.HOUSE_HOLD].includes(String(a.formData.certType))){const t=e?nt(e):null;Object.assign(a.formData,{age:t})}}}};var dt=function(e){return null==e};var ct=function(e){var a=typeof e;return null!=e&&("object"==a||"function"==a)};const mt={class:"value-view-wrap"};var pt=s(u({__name:"ValueView",props:{value:{type:String,default:""},isView:{type:Boolean,default:!1}},setup:e=>(a,t)=>(d(),c("span",mt,m(e.value||"-"),1))}),[["__scopeId","data-v-505dc7b6"]]);const ft={class:"com-van-field-unit"},yt=u({inheritAttrs:!1,__name:"ProFieldV2",props:{ruleType:{type:String,default:""},modelValue:{type:[String,Number,Object,Array,Boolean],default:""},isView:{type:Boolean,default:!1},required:{type:Boolean,default:!1},rules:{type:Array,default:()=>[]},relatedName:{type:String,default:""},precision:{type:Number,default:0},isPrecisionCompleted:{type:Boolean,default:!1},unit:{type:String,default:""}},emits:["update:model-value","blur"],setup(e,{emit:a}){const t=e,r=p(),n=f(),{formState:l,markRequired:i}=y(ka)||{},s=b({modelValue:""}),u=v((()=>{const e=rt(n,r.slots),{extra:a,...o}=e;return t.unit?o:e})),c=v((()=>r.placeholder||`请输入${r.label||""}`)),R=v((()=>`${s.modelValue||""}`)),P=v((()=>{var e,a;if(t.ruleType)return t.ruleType;if(t.relatedName){const o=null==(e=null==l?void 0:l.formData)?void 0:e[t.relatedName];if(o)return null==(a=Sa[t.relatedName])?void 0:a[o]}return""})),x=e=>dt(e)||""===e||Array.isArray(e)&&!e.length||ct(e)&&Object.keys(e).some((e=>x(e))),M=v((()=>o(t.rules)?t.rules:[{required:t.required,validator:e=>{if(t.required&&x(e))return r.placeholder;if(P.value){const[a]=La[P.value]||[];if("function"!=typeof a)return console.warn(`%c 字段 ${r.label} 的规则 ${P} 校验函数不存在，请先确认～`,"color: #3e7;"),"";if(!x(e)&&!a(e))return`请输入正确的${r.label}`}return""}}])),k=v((()=>"number"===r.type&&t.precision)),D=e=>k.value&&e?e.replace(/^(0)\d+$/g,"$1").replace(new RegExp(`^(\\d+\\.\\d{${t.precision}})\\d+$`,"g"),"$1"):e,j=v((()=>{var e;if(t.relatedName){const{extraAttrs:a}=ut[t.relatedName]||{},o=null==(e=null==l?void 0:l.formData)?void 0:e[t.relatedName];if(a&&!dt(o)&&""!==o)return a[o]||{}}return{}})),B=(e,a)=>{if(t.relatedName&&e){const o=(ut[t.relatedName]||{})[`${e}Effect`];"function"==typeof o&&o(a,l)}},L=e=>{B("onChange",e),s.modelValue=e,a("update:model-value",e)},H=e=>{let o=s.modelValue;k.value&&o&&t.isPrecisionCompleted&&(o=Number(o).toFixed(t.precision),L(o)),B("onBlur",o),a("blur",e)};return N((()=>t.modelValue),(e=>{s.modelValue=e}),{immediate:!0,deep:!0}),g((()=>{r.name&&(null==l?void 0:l.nameList)&&l.nameList.push(r.name)})),(a,t)=>{const o=$;return d(),h(o,w({"model-value":O(s).modelValue,class:`com-van-field ${O(i)?"":"field-mark--hidden"} ${!1===O(r).visible?"com-van-field--hidden":""}`,autocomplete:"off",formatter:D},{maxlength:25,...a.$attrs,placeholder:O(c),required:e.required,rules:O(M),...O(j)},{onBlur:H,"onUpdate:modelValue":L}),C({_:2},[e.isView?{name:"input",fn:A((()=>[E(pt,{value:O(R)},null,8,["value"])])),key:"0"}:void 0,T(Object.keys(O(u)),(e=>({name:e,fn:A((t=>{var o;return[I(a.$slots,null==(o=O(u))?void 0:o[e],V(_(t||{})))]}))}))),e.unit?{name:"extra",fn:A((()=>[S("div",ft,m(e.unit),1)])),key:"1"}:void 0]),1040,["model-value","class"])}}}),bt={input:"请输入",select:"请选择"};function vt({placeholderType:e}={placeholderType:"select"}){const a=p(),t=f(),o=b({filedAttrs:{},filedSlots:{},attrs:{},slots:{}});return N((()=>a),(()=>{const[t,r]=(e=>Wa(e,Fa,Ua))(a);o.filedAttrs={...t,placeholder:a.placeholder||`${bt[e]}${a.label||""}`},o.attrs={title:`请选择${t.label}`,...r}}),{deep:!0,immediate:!0}),N([()=>t,()=>a.slots],(e=>{const[r,n]=(e=>Wa(e,Za))(rt(t,a.slots));o.filedSlots=r||{},o.slots=n||{}}),{deep:!0,immediate:!0}),o}const Nt={class:"custom-input-wrap"},gt={key:1,class:"placeholder"},ht=u({inheritAttrs:!1,__name:"CustomInput",props:{fieldValueView:{type:String,default:""},isView:{type:Boolean,default:!1},modelValue:{type:[String,Boolean,Object,Number],default:""}},setup(e){const a=e;return p(),y(ka),R((()=>a.modelValue)),(a,t)=>(d(),c("div",Nt,[e.fieldValueView||e.isView?I(a.$slots,"value-view",{key:0,value:e.fieldValueView},(()=>[E(pt,{value:e.fieldValueView},null,8,["value"])])):(d(),c("span",gt,m(a.$attrs.placeholder),1))]))}});const Ct=u({name:"ProFormItem"}),At=u({...Ct,props:{fieldValueView:{type:String,default:""},name:{type:String,default:""},isView:{type:Boolean,default:!1},modelValue:{type:[String,Boolean,Object,Number],default:""}},setup(e){const a=f(),t=v((()=>Object.keys(a).filter((e=>"value-view"!==e))));return(a,o)=>(d(),h(yt,{class:P({"com-form-item":!0,"com-form-item--view":e.isView}),"is-link":!e.isView},C({input:A((()=>[E(ht,{name:e.name,"model-value":e.modelValue,"is-view":e.isView,"field-value-view":e.fieldValueView,placeholder:a.$attrs.placeholder},{"value-view":A((e=>[I(a.$slots,"value-view",V(_(e||{})))])),_:3},8,["name","model-value","is-view","field-value-view","placeholder"])])),_:2},[T(O(t),(e=>({name:e,fn:A((t=>[I(a.$slots,e,V(_(t||{})))]))})))]),1032,["class","is-link"]))}});const Et={class:"com-image-upload"},Ot={class:"upload-item"};var Tt=s(u({__name:"ProBaseUpload",props:{modelValue:{type:Array,default:()=>[]},maxCount:{type:Number,default:1},uploadType:{type:String,default:x.OTHER},category:{type:Number,default:null},objectType:{type:Number,default:null},isView:{type:Boolean,default:!1}},emits:["update:modelValue","update:ossKeyList","onUploaded"],setup(e,{emit:a}){const t=e,{slots:r}=M(vt()),{objectType:n}=y(ka)||{},l=v((()=>Object.keys(r).filter((e=>"default"!==e)))),i=b({modelValue:[],ossKeyList:[]}),s=e=>{k(e.file,t.uploadType).then((e=>{const{code:o,data:r}=e||{};"10000"===o&&r.url&&(i.modelValue.push({url:r.url,category:t.category,objectType:t.objectType||n}),i.ossKeyList.push(r.ossKey),a("onUploaded",r))}))},u=(e,a)=>{const{index:t}=a;i.modelValue.splice(t,1),i.ossKeyList.splice(t,1)};return N((()=>i.ossKeyList),(e=>{a("update:ossKeyList",e)}),{deep:!0,immediate:!0}),N((()=>t.modelValue),(e=>{console.log("1111111cest"),o(e)?i.modelValue=e:i.modelValue=[]}),{deep:!0,immediate:!0}),(a,t)=>{const o=D;return d(),c("div",Et,[E(o,{"model-value":O(i).modelValue,"after-read":s,"max-count":e.maxCount,"before-delete":u,disabled:e.isView},C({default:A((()=>[I(a.$slots,"default",{},(()=>[S("div",Ot,[E(j,{name:"image-upload",class:"icon"})])]),!0)])),_:2},[T(O(l),(e=>({name:e,fn:A((t=>[I(a.$slots,e,V(_(t||{})),void 0,!0)]))})))]),1032,["model-value","max-count","disabled"])])}}}),[["__scopeId","data-v-bad4730a"]]);const It={class:"sub-label"},Vt={class:"com-image-upload"},_t={class:"upload-item"};var St=s(u({__name:"ProUploadV2",props:{modelValue:{type:Array,default:()=>[]},maxCount:{type:Number,default:1},subLabel:{type:String,default:""},uploadType:{type:String,default:x.OTHER},category:{type:Number,default:B.OTHER},objectType:{type:Number,default:null},isView:{type:Boolean,default:!1}},emits:["update:modelValue","onUploaded"],setup(e,{emit:a}){const t=e,{filedAttrs:o,filedSlots:r,attrs:n,slots:l}=M(vt()),{formState:i,objectType:s,objectId:u}=y(ka)||{},c=v((()=>Object.keys(l).filter((e=>"default"!==e)))),p=b({modelValue:[]}),f=v((()=>(p.modelValue||[]).map((({uri:e})=>({url:e})))));R((()=>p.modelValue));const g=e=>{k(e.file,t.uploadType).then((e=>{const{code:o,data:r}=e||{};"10000"===o&&r.url&&(p.modelValue.push({objectId:u,uri:r.url,category:t.category,objectType:t.objectType||s}),a("onUploaded",r))}))},w=(e,a)=>{const{index:t}=a;p.modelValue.splice(t,1)};return N((()=>p.modelValue),(e=>{a("update:modelValue",e)}),{deep:!0,immediate:!0}),N((()=>t.modelValue),(e=>{Array.isArray(p.modelValue)&&(p.modelValue=e)}),{deep:!0,immediate:!0}),(a,t)=>{const r=D,n=At;return d(),h(n,{class:P({"com-van-upload-wrap":!0,"com-van-upload-wrap-view":e.isView}),"model-value":O(p).modelValue},C({input:A((()=>[S("div",Vt,[E(r,{"model-value":O(f),"after-read":g,"max-count":e.maxCount,"before-delete":w,disabled:e.isView},C({default:A((()=>[I(a.$slots,"default",{},(()=>[S("div",_t,[E(j,{name:"image-upload",class:"icon"})])]),!0)])),_:2},[T(O(c),(e=>({name:e,fn:A((t=>[I(a.$slots,e,V(_(t||{})),void 0,!0)]))})))]),1032,["model-value","max-count","disabled"])])])),_:2},[e.subLabel?{name:"label",fn:A((()=>[L(m(O(o).label),1),S("span",It,m(e.subLabel),1)])),key:"0"}:void 0]),1032,["class","model-value"])}}}),[["__scopeId","data-v-28ffa94a"]]);export{Va as B,_a as P,ka as V,yt as _,Ga as a,pt as b,Ka as c,Ya as d,At as e,ut as f,st as g,qa as h,Ha as i,tt as j,Tt as k,St as l,Re as m,ot as n,lt as r,et as t,vt as u,za as v};
