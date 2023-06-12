import{ak as e,z as a,C as t,al as l,Y as o,W as r,am as s,S as n,G as i,d,b as u,c,E as m,an as p,ao as f,ap as y,A as N,L as b,V as C,Z as g,g as h,aq as v,w as A,e as E,f as T,a7 as I,k as O,ar as V,as as _,i as S,a9 as $,at as w,au as R,F as P,av as x,aw as M,ax as k,ay as D,a4 as B,ac as L,j}from"./index-2aa81fa9.js";import{a as H}from"./isObjectLike-a9798079.js";import{s as F}from"./phoneVerify-a52a73bf.js";import{m as Z}from"./merge-84cb998c.js";const U=async({mobile:e},a)=>{const t=await F(e),{code:l}=t;"10000"===l&&"function"==typeof a&&a()},K="ProFieldV2",z="ProDatePickerV2",G="ProPickerV2",Y="ProRadioV2",q="ProCheckboxV2",W="ProSwitchV2",X="ProCascaderV2",J="ProBank",Q="ProAddress",ee="ProUploadV2",ae="ProStepperV2",te="ProSMSCode",le="ProOccupation",oe="ProIDCardUploadV2",re="ProBankUpload",se=18,ne=20,ie=50,de="name",ue="external",ce="email",me="zipCode",pe="tel",fe="mobile",ye="zhCN",Ne="notZhCN",be="normalChar",Ce="alphabetNumber",ge="cert",he="houseHold",ve="birth",Ae="passport",Ee="otherCert",Te="militaryCard",Ie="solider",Oe="hongkongMacao",Ve="taiwanTravel",_e="foreignPermanent",Se="HKMacaoResidencePermit",$e="taiwanResidencePermit",we="socialCreditCode",Re="OCC",Pe="businessLicense",xe="bandCard",Me={NAME:{maxlength:25,ruleType:de},MOBILE:{type:"digit",ruleType:fe,maxlength:11},AGE:{type:"digit",maxlength:3},HEIGHT_WEIGHT:{type:"number",precision:1,maxlength:5},INCOME:{type:"number",precision:2,unit:"万元",isPrecisionCompleted:!0},ZIP_CODE:{type:"digit",ruleType:me,maxlength:6},CONTENT:{maxlength:200},GAS_NUMBER:{maxlength:ne},BANK:{type:"digit",maxlength:ne},ADDRESS:{dictCode:e.NATIONAL_REGION_CODE,customFieldName:{text:"name",value:"code",children:"children"}},COUNTRY:{dictCode:e.NATIONALITY,customFieldName:{text:"name",value:"code",children:"children"}}},ke=[{code:"input",name:"单行文本",value:1,componentName:K},{code:"textarea",name:"多行文本",value:2,type:"textarea",componentName:K},{code:"number",name:"数字输入框",value:3,componentName:K},{code:"date",name:"日期",value:4,componentName:z},{code:"select",name:"下拉框",value:5,componentName:G},{code:"radio",name:"单选框",value:6,componentName:Y},{code:"checkbox",name:"多选框",value:7,componentName:q},{code:"switch",name:"switch开关",value:8,componentName:W},{code:"cascader",name:"级联选择",value:9,componentName:X},{code:"bank",name:"银行卡",value:10,componentName:J},{code:"address",name:"地址",value:11,componentName:Q},{code:"upload",name:"文件上传",value:12,componentName:ee},{code:"stepper",name:"步进器",value:13,componentName:ae}],De={BANK_CARD_NO:"bankCardNo",ACCOUNT_NAME:"accountName",PAY_BANK:"payBank",BANK_CARD_IMAGE:"bankCardImage",MOBILE:"mobile",VERIFICATION_CODE:"verificationCode"},Be=Object.values(De),Le={bankCardNo:{...Me.BANK,name:De.BANK_CARD_NO,componentName:K},accountName:{...Me.NAME,name:De.ACCOUNT_NAME,componentName:K},payBank:{name:De.PAY_BANK,dictCode:e.BANK,componentName:G},bankCardImage:{maxCount:2,subLabel:"（需上传正反两面）",name:De.BANK_CARD_IMAGE,componentName:re},mobile:{...Me.MOBILE,name:De.MOBILE,componentName:K},verificationCode:{...Me.ZIP_CODE,sendSMSCode:U,name:De.VERIFICATION_CODE,relatedName:De.MOBILE,componentName:te}},je={certType:{[t.CERT]:[ge],[t.HOUSE_HOLD]:[he],[t.MILITARY_CARD]:[Te],[t.PASSPORT]:[Ae],[t.HONGKONG_MACAO]:[Oe],[t.OTHER]:[Ee],[t.SOLIDER]:[Ie],[t.BIRTH]:[ve],[t.TAIWAN_TRAVEL]:[Ve],[t.FOREIGN_PERMANENT]:[_e],[t.HK_MACAO_RESIDENCE_PERMIT]:[Se],[t.TAIWAN_RESIDENCE_PERMIT]:[$e],[t.SOCIAL_CREDIT_CODE]:[we]}},He={INSURE_AREA:"insureArea",RESIDENCE:"residence",LONG_AREA:"longArea",WORK_ADDRESS:"workAddress"};Object.values(He);const Fe=[{key:He.INSURE_AREA},{key:He.RESIDENCE},{key:He.LONG_AREA},{key:He.WORK_ADDRESS}].reduce(((e,{key:a})=>(e[a]=Me.ADDRESS,e)),{}),Ze={name:Me.NAME,certNo:{relatedName:"certType",maxlength:se},certType:{relatedName:"certNo"},birthday:{relatedName:"age"},mobile:Me.MOBILE,age:Me.AGE,height:{...Me.HEIGHT_WEIGHT,unit:"cm"},weight:{...Me.HEIGHT_WEIGHT,unit:"kg"},email:{ruleType:ce},personalAnnualIncome:Me.INCOME,familyAnnualIncome:Me.INCOME,workZipCode:Me.ZIP_CODE,homePostalCode:Me.ZIP_CODE,workContent:Me.CONTENT,gasNumberCollection:{...Me.GAS_NUMBER,ruleType:Ne},verificationCode:{sendSMSCode:U,componentName:te,...Me.ZIP_CODE},...Fe,nationalityCode:{...Me.COUNTRY},certEndDate:{minDate:new Date,maxDate:a().add(100,"year").toDate()},companyName:{maxlength:ie},occupationCodeList:{componentName:le,dictCode:(Ue=(window.location.search.match(/&insurerCode=([^&]*)&/)||[])[1]||"",(Ue?`${Ue.toUpperCase()}_`:"")+"OCCUPATION")},certImage:{componentName:oe},benefitRate:{...Me.AGE,unit:"%"}};var Ue;const Ke=2,ze={1:"holder",2:"insured",3:"beneficiary",4:"payInfo",5:"signInfo"},Ge=Symbol("VAN_PRO_FORM_KEY"),Ye=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,qe=e=>{if(!Ye.test(e))return!1;if(18!==e.length)return!1;const a=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];let t=0;for(let r=0;r<17;r++)t+=e.substring(r,r+1)*a[r];const l=t%11,o=e.substring(17);return 2===l?"X"===o.toUpperCase():Number(o)===[1,0,10,9,8,7,6,5,4,3,2][l]},We={isName:e=>/^[\u4e00-\u9fa5a-z].{0,23}[\u4e00-\u9fa5a-z]/i.test(e),isExternal:e=>/^(https?:|mailto:|tel:)/.test(e),isEmail:e=>/^[A-Za-z0-9]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(e),isZipCode:e=>/^[0-9]{6,6}$/.test(e),isTel:e=>/0\d{2,3}-\d{7,8}/.test(e),isPhone:e=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(e),isZhCN:e=>/^[\u4e00-\u9fa5]+$/.test(e),isNotZhCN:e=>/^[^\u4e00-\u9fa5]+$/.test(e),isCommonChar:e=>/^[\w_]{6,20}$/.test(e),isNormalChar:e=>/^[\u4e00-\u9fa5a-zA-Z0-9]+$/.test(e),isAlphabetNumber:e=>/^[a-z0-9]+$/i.test(e),isAlphabetNumberOrSpecial:e=>/^[a-z0-9`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥¥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]+$/i.test(e),isIdCardNo:e=>qe(e),isHouseHold:e=>qe(e),isBirthType:e=>/^[a-zA-Z]\d{9}$/.test(e),isPassword:e=>/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,20}$/.test(e),isPassportType:e=>e.length>=5&&/^[^\u4e00-\u9fa5]+$/.test(e),isMilitaryCard:e=>/^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/.test(e),isSolider:e=>/^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/.test(e),isHongkongMacaoTravel:e=>/^[C]\d{8}$|^[C][a-hA-Hj-nJ-Np-zP-Z][0-9]{7}$/.test(e),isTaiwanTravel:e=>/^[L]\d{8}$/.test(e),isForeignPermanent:e=>/^[A-Z]{3}[0-9]{12}$/.test(e),isHKMacaoResidencePermit:e=>/^8[12]0000(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX]$/.test(e),isTaiwanResidencePermit:e=>/^830000(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX]$/.test(e),isUSCC:e=>/^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/.test(e),isUSCCPolicy:e=>/^[A-Z0-9]{18}$/.test(e),isOCC:e=>/^[A-Z0-9]{8}-[A-Z0-9]{1}$/.test(e),isBusinessLicense:e=>/(^\d{15}$)|(^[A-Z0-9]{18}$)/.test(e),isBandcard:e=>/^\d{12,20}$/g.test(e),isOtherCert:e=>/^.{1,18}$/.test(e)},Xe={[de]:[We.isName],[ue]:[We.isExternal],[ce]:[We.isEmail],[me]:[We.isZipCode],[pe]:[We.isTel],[fe]:[We.isPhone],[ye]:[We.isZhCN],[Ne]:[We.isNotZhCN],[be]:[We.isNormalChar],[Ce]:[We.isAlphabetNumber],[ge]:[We.isIdCardNo],[he]:[We.isHouseHold],[ve]:[We.isBirthType],[Ae]:[We.isPassportType],[Te]:[We.isMilitaryCard],[Ie]:[We.isSolider],[Oe]:[We.isHongkongMacaoTravel],[Ve]:[We.isTaiwanTravel],[_e]:[We.isForeignPermanent],[Se]:[We.isHKMacaoResidencePermit],[$e]:[We.isTaiwanResidencePermit],[we]:[We.isUSCCPolicy],[Re]:[We.isOCC],[Pe]:[We.isBusinessLicense],[xe]:[We.isBandcard],[Ee]:[We.isOtherCert]};function Je(e){return null==e}const Qe=["v-model","label","name","id","type","size","maxlength","placeholder","border","disabled","readonly","colon","required","center","clearable","clear-icon","clear-trigger","clickable","is-link","autofocus","show-word-limit","error","error-message","error-message-align","formatter","format-trigger","arrow-direction","label-class","label-width","label-align","input-align","autosize","left-icon","right-icon","icon-prefix","rules","autocomplete","enterkeyhint","visible"],ea=["label","input","left-icon","right-icon","button","error-message","extra","value-view"],aa={autocomplete:"off"},ta=e=>console.log(`%c🔥 ${e}`,"color:#1989fa;background:#5e4;padding:3px 5px;"),la=e=>{const{trialFactorCodes:a,personVO:t}=e||{};return!l(a)||!a.some((e=>{const a=t[e];return Je(a)||""===a||Array.isArray(a)&&!a.length}))},oa=(e,a,t)=>{var o;return t&&!l(a)?Promise.resolve():null==(o=e.value)?void 0:o.validate(t?a:void 0)},ra=(e,a="children")=>l(e)?e.map((({[`${a}`]:e,...t})=>{const o={};return l(e)&&(o.children=ra(e)),{...t,...o}})):[],sa=(e,a=0,t="children")=>{const o=(e,r=1)=>l(e)?e.map((({[`${t}`]:e,...s})=>{const n={};return(!a||a&&a>r)&&l(e)&&(n.children=o(e,r+1)),{...s,...n}})):[];return o(e)},na=(e,a,t={})=>{const o=Object.keys(e);return l(o)?o.reduce(((t,l)=>{const o=a.includes(l);return t[Number(!o)][l]=e[l],t}),[{...t},{}]):[{...t},{}]},ia=e=>{if("certType"!==(null==e?void 0:e.name))return!1;const{columns:a,title:o}=e||{};return l(a)&&1===a.length&&a.findIndex((e=>e.code===t.CERT))>-1},da=e=>l(e)&&e.some((e=>"birthday"===(e.code||e.name))),ua=(e,a)=>{let t=[];const r=[];if(l(e)){const a=da(e);t=e.map((e=>{const{code:t,name:l,value:n,componentName:i,...d}=ke.find((a=>`${a.value}`==`${e.displayType}`))||{};e.isCalculationFactor===o.YES&&r.push(e.code);const u={},{componentName:c,...m}=Ze[e.code]||{},p=c||i||"ProFieldV2";2===e.moduleType&&(u.isSelfInsuredNeed=e.isSelfInsuredNeed),"age"===e.code&&(u.visible=!a);const f={...d,...u,customFieldName:{text:"value",value:"code",children:"children"},label:e.title,name:e.code,componentName:p,required:1===e.isMustInput,nanoid:s(),...m},y={...f,attributeValueList:e.attributeValueList,columns:f.dictCode?[]:e.attributeValueList||[]};return ia(y)&&(y.visible=!1),y}))}return a.push(...r),{schema:t,trialFactorCodes:r}},ca=(e,a={isTrial:!1})=>{const t={};if(!e)return t;const r=Object.keys(e)||[];if(!l(r))return t;const s=[],n=a.multiInsuredSupportFlag===o.YES,i={hasTrialFactorCodes:!1,isSpouseInsured:!1,multiInsuredSupportFlag:n,multiInsuredMaxNum:n?a.multiInsuredNum||Number.MAX_SAFE_INTEGER:1,multiInsuredMinNum:1,multiBeneficiaryMaxNum:a.multiBeneficiaryMaxNum||5},d=r.reduce(((t,o)=>(t[ze[o]]=l(e[o])?e[o].filter((e=>{const{subModuleType:t,code:o,attributeValueList:r}=e;if(t===Ke&&"relationToMainInsured"===o){l(r)&&1===r.length&&r.findIndex((e=>"2"===e.code))>-1&&Object.assign(i,{multiInsuredMaxNum:2,multiInsuredMinNum:2,isSpouseInsured:!0})}return!a.isTrial||1===e.isCalculationFactor})):[],t)),{}),u=((e,a)=>{if(!l(e.insured))return[];const t=l(e.holder)?e.holder.map((e=>e.code)):[];return e.insured.reduce(((e,o)=>{const{code:r,subModuleType:s,attributeValueList:n}=o;return s===Ke?("relationToMainInsured"===r&&l(n)&&1===n.length&&n.findIndex((e=>"2"===e.code))>-1&&Object.assign(a,{multiInsuredMaxNum:2,multiInsuredMinNum:2,isSpouseInsured:!0}),e[1].push({...o,isSelfInsuredNeed:!t.includes(r)})):e[0].push({...o,isSelfInsuredNeed:!t.includes(r)}),e}),[[],[]]).filter((e=>l(e)))})(d,i),c=Object.keys(d).reduce(((e,t)=>{if("insured"!==t){const o=d[t],r="holder"===t;e[t]=ua(r&&l(a.holderFactorCodes)?o.filter((e=>a.holderFactorCodes.includes(e.code))):o,s)}else e[t]=l(u)?u.map((e=>ua(l(a.insuredFactorCodes)?e.filter((e=>a.insuredFactorCodes.includes(e.code))):e,s))):[];return e}),{});return c.config={...i,hasTrialFactorCodes:l(s)},c},ma=(e=!1)=>a=>{if("string"==typeof a&&a){const t=["toLowerCase","toUpperCase"][Number(e)];return`${a[0][t]()}${a.substring(1)}`}return""},pa=ma(!0),fa=ma(),ya=(e,a={})=>Object.keys(e).reduce(((e,t)=>(e[a[t]||t]=t,e)),{}),Na=e=>{const a=new Date,t=new Date(e);let l=a.getFullYear()-t.getFullYear();const o=a.getMonth()-t.getMonth();return(o<0||0===o&&a.getDate()<t.getDate())&&(l-=1),l},ba=(e,a=(e=>!0))=>{if(!e)return{};return Object.keys(e).filter((e=>"function"!=typeof a||a(e))).reduce(((a,t)=>(a[t]={Object:{},Array:[]}[Object.prototype.toString.call(e[t]).slice(8,-1)]||null,a)),{})},Ca=(e,a)=>{const l=![t.CERT,t.HOUSE_HOLD].includes(String(e)),o=da(a)?{age:{visible:!1}}:{};return{...["gender","birthday","age"].reduce(((e,a)=>(e[a]={visible:l},e)),{}),...o}},ga=(e,a)=>{const t={},{relationToHolder:l,certType:o}=a||{},r="3"===String(l),s=null==e?void 0:e.find((e=>"certType"===e.name)),n=ia(s||{});return n&&(t.certNo={label:"身份证号"+(r?"\n(户口簿)":"")}),s&&Z(t,Ca(o,e)),[n,t]},ha={certNo:{onChangeEffect:(e,a)=>{Object.assign(a.formData,{certNo:null,gender:null,birthday:null,age:null}),r((()=>{Z(a.config,Ca(a.formData.certType,a.schema))}))}},certType:{extraAttrs:{4:{maxlength:10}},onChangeEffect:(e,a)=>{if([t.CERT,t.HOUSE_HOLD].includes(String(a.formData.certType))){const t=(e=>{const a={gender:null,birthday:null,age:null};if("string"==typeof e&&e&&qe(e)){const t={15:[6,12],18:[6,14]};a.birthday=e.slice(...t[e.length]).replace(/(.{4})(.{2})/,"$1-$2-"),a.gender=[n.FEMALE,n.MALE][Number(e.slice(-2,-1))%2],a.age=a.birthday&&`${Na(a.birthday)}`}return a})(e);Object.assign(a.formData,t)}}},age:{onChangeEffect:(e,a)=>{if(![t.CERT,t.HOUSE_HOLD].includes(String(a.formData.certType))){const t=e?Na(e):null;Object.assign(a.formData,{age:t})}}}};const va={class:"value-view-wrap"};var Aa=i(d({__name:"ValueView",props:{value:{type:String,default:""},isView:{type:Boolean,default:!1}},setup:e=>(a,t)=>(u(),c("span",va,m(e.value||"-"),1))}),[["__scopeId","data-v-505dc7b6"]]);const Ea={class:"com-van-field-unit"},Ta=d({inheritAttrs:!1,__name:"ProFieldV2",props:{ruleType:{type:String,default:""},modelValue:{type:[String,Number,Object,Array,Boolean],default:""},isView:{type:Boolean,default:!1},required:{type:Boolean,default:!1},rules:{type:Array,default:()=>[]},relatedName:{type:String,default:""},precision:{type:Number,default:0},isPrecisionCompleted:{type:Boolean,default:!1},unit:{type:String,default:""}},emits:["update:model-value","blur"],setup(e,{emit:a}){const t=e,o=p(),r=f(),{formState:s,markRequired:n}=y(Ge)||{},i=N({modelValue:""}),d=b((()=>{const e=ya(r,o.slots),{extra:a,...l}=e;return t.unit?l:e})),c=b((()=>o.placeholder||`请输入${o.label||""}`)),R=b((()=>`${i.modelValue||""}`)),P=b((()=>{var e,a;if(t.ruleType)return t.ruleType;if(t.relatedName){const l=null==(e=null==s?void 0:s.formData)?void 0:e[t.relatedName];if(l)return null==(a=je[t.relatedName])?void 0:a[l]}return""})),x=e=>Je(e)||""===e||Array.isArray(e)&&!e.length||H(e)&&Object.keys(e).some((e=>x(e))),M=b((()=>l(t.rules)?t.rules:[{required:t.required,validator:e=>{if(t.required&&x(e))return o.placeholder;if(P.value){const[a]=Xe[P.value]||[];if("function"!=typeof a)return console.warn(`%c 字段 ${o.label} 的规则 ${P} 校验函数不存在，请先确认～`,"color: #3e7;"),"";if(!x(e)&&!a(e))return`请输入正确的${o.label}`}return""}}])),k=b((()=>"number"===o.type&&t.precision)),D=e=>k.value&&e?e.replace(/^(0)\d+$/g,"$1").replace(new RegExp(`^(\\d+\\.\\d{${t.precision}})\\d+$`,"g"),"$1"):e,B=b((()=>{var e;if(t.relatedName){const{extraAttrs:a}=ha[t.relatedName]||{},l=null==(e=null==s?void 0:s.formData)?void 0:e[t.relatedName];if(a&&!Je(l)&&""!==l)return a[l]||{}}return{}})),L=(e,a)=>{if(t.relatedName&&e){const l=(ha[t.relatedName]||{})[`${e}Effect`];"function"==typeof l&&l(a,s)}},j=e=>{L("onChange",e),i.modelValue=e,a("update:model-value",e)},F=e=>{let l=i.modelValue;k.value&&l&&t.isPrecisionCompleted&&(l=Number(l).toFixed(t.precision),j(l)),L("onBlur",l),a("blur",e)};return C((()=>t.modelValue),(e=>{i.modelValue=e}),{immediate:!0,deep:!0}),g((()=>{o.name&&(null==s?void 0:s.nameList)&&s.nameList.push(o.name)})),(a,t)=>{const l=w;return u(),h(l,$({"model-value":T(i).modelValue,class:`com-van-field ${T(n)?"":"field-mark--hidden"} ${!1===T(o).visible?"com-van-field--hidden":""}`,autocomplete:"off",formatter:D},{maxlength:25,...a.$attrs,placeholder:T(c),required:e.required,rules:T(M),...T(B)},{onBlur:F,"onUpdate:modelValue":j}),v({_:2},[e.isView?{name:"input",fn:A((()=>[E(Aa,{value:T(R)},null,8,["value"])])),key:"0"}:void 0,I(Object.keys(T(d)),(e=>({name:e,fn:A((t=>{var l;return[O(a.$slots,null==(l=T(d))?void 0:l[e],V(_(t||{})))]}))}))),e.unit?{name:"extra",fn:A((()=>[S("div",Ea,m(e.unit),1)])),key:"1"}:void 0]),1040,["model-value","class"])}}}),Ia={input:"请输入",select:"请选择"};function Oa({placeholderType:e}={placeholderType:"select"}){const a=p(),t=f(),l=N({filedAttrs:{},filedSlots:{},attrs:{},slots:{}});return C((()=>a),(()=>{const[t,o]=(e=>na(e,Qe,aa))(a);l.filedAttrs={...t,placeholder:a.placeholder||`${Ia[e]}${a.label||""}`},l.attrs={title:`请选择${t.label}`,...o}}),{deep:!0,immediate:!0}),C([()=>t,()=>a.slots],(e=>{const[o,r]=(e=>na(e,ea))(ya(t,a.slots));l.filedSlots=o||{},l.slots=r||{}}),{deep:!0,immediate:!0}),l}const Va={class:"custom-input-wrap"},_a={key:1,class:"placeholder"},Sa=d({inheritAttrs:!1,__name:"CustomInput",props:{fieldValueView:{type:String,default:""},isView:{type:Boolean,default:!1},modelValue:{type:[String,Boolean,Object,Number],default:""}},setup(e){const a=e;return p(),y(Ge),R((()=>a.modelValue)),(a,t)=>(u(),c("div",Va,[e.fieldValueView||e.isView?O(a.$slots,"value-view",{key:0,value:e.fieldValueView},(()=>[E(Aa,{value:e.fieldValueView},null,8,["value"])])):(u(),c("span",_a,m(a.$attrs.placeholder),1))]))}});const $a=d({name:"ProFormItem"}),wa=d({...$a,props:{fieldValueView:{type:String,default:""},name:{type:String,default:""},isView:{type:Boolean,default:!1},modelValue:{type:[String,Boolean,Object,Number],default:""}},setup(e){const a=f(),t=b((()=>Object.keys(a).filter((e=>"value-view"!==e))));return(a,l)=>(u(),h(Ta,{class:P({"com-form-item":!0,"com-form-item--view":e.isView}),"is-link":!e.isView},v({input:A((()=>[E(Sa,{name:e.name,"model-value":e.modelValue,"is-view":e.isView,"field-value-view":e.fieldValueView,placeholder:a.$attrs.placeholder},{"value-view":A((e=>[O(a.$slots,"value-view",V(_(e||{})))])),_:3},8,["name","model-value","is-view","field-value-view","placeholder"])])),_:2},[I(T(t),(e=>({name:e,fn:A((t=>[O(a.$slots,e,V(_(t||{})))]))})))]),1032,["class","is-link"]))}});const Ra={class:"com-image-upload"},Pa={class:"upload-item"};var xa=i(d({__name:"ProBaseUpload",props:{modelValue:{type:Array,default:()=>[]},maxCount:{type:Number,default:1},uploadType:{type:String,default:x.OTHER},category:{type:Number,default:null},objectType:{type:Number,default:null},isView:{type:Boolean,default:!1}},emits:["update:modelValue","update:ossKeyList","onUploaded"],setup(e,{emit:a}){const t=e,{slots:o}=M(Oa()),{objectType:r}=y(Ge)||{},s=b((()=>Object.keys(o).filter((e=>"default"!==e)))),n=N({modelValue:[],ossKeyList:[]}),i=e=>{k(e.file,t.uploadType).then((e=>{const{code:l,data:o}=e||{};"10000"===l&&o.url&&(n.modelValue.push({url:o.url,category:t.category,objectType:t.objectType||r}),n.ossKeyList.push(o.ossKey),a("onUploaded",o))}))},d=(e,a)=>{const{index:t}=a;n.modelValue.splice(t,1),n.ossKeyList.splice(t,1)};return C((()=>n.ossKeyList),(e=>{a("update:ossKeyList",e)}),{deep:!0,immediate:!0}),C((()=>t.modelValue),(e=>{console.log("1111111cest"),l(e)?n.modelValue=e:n.modelValue=[]}),{deep:!0,immediate:!0}),(a,t)=>{const l=D;return u(),c("div",Ra,[E(l,{"model-value":T(n).modelValue,"after-read":i,"max-count":e.maxCount,"before-delete":d,disabled:e.isView},v({default:A((()=>[O(a.$slots,"default",{},(()=>[S("div",Pa,[E(B,{name:"image-upload",class:"icon"})])]),!0)])),_:2},[I(T(s),(e=>({name:e,fn:A((t=>[O(a.$slots,e,V(_(t||{})),void 0,!0)]))})))]),1032,["model-value","max-count","disabled"])])}}}),[["__scopeId","data-v-bad4730a"]]);const Ma={class:"sub-label"},ka={class:"com-image-upload"},Da={class:"upload-item"};var Ba=i(d({__name:"ProUploadV2",props:{modelValue:{type:Array,default:()=>[]},maxCount:{type:Number,default:1},subLabel:{type:String,default:""},uploadType:{type:String,default:x.OTHER},category:{type:Number,default:L.OTHER},objectType:{type:Number,default:null},isView:{type:Boolean,default:!1}},emits:["update:modelValue","onUploaded"],setup(e,{emit:a}){const t=e,{filedAttrs:l,filedSlots:o,attrs:r,slots:s}=M(Oa()),{formState:n,objectType:i,objectId:d}=y(Ge)||{},c=b((()=>Object.keys(s).filter((e=>"default"!==e)))),p=N({modelValue:[]}),f=b((()=>(p.modelValue||[]).map((({uri:e})=>({url:e})))));R((()=>p.modelValue));const g=e=>{k(e.file,t.uploadType).then((e=>{const{code:l,data:o}=e||{};"10000"===l&&o.url&&(p.modelValue.push({objectId:d,uri:o.url,category:t.category,objectType:t.objectType||i}),a("onUploaded",o))}))},$=(e,a)=>{const{index:t}=a;p.modelValue.splice(t,1)};return C((()=>p.modelValue),(e=>{a("update:modelValue",e)}),{deep:!0,immediate:!0}),C((()=>t.modelValue),(e=>{Array.isArray(p.modelValue)&&(p.modelValue=e)}),{deep:!0,immediate:!0}),(a,t)=>{const o=D,r=wa;return u(),h(r,{class:P({"com-van-upload-wrap":!0,"com-van-upload-wrap-view":e.isView}),"model-value":T(p).modelValue},v({input:A((()=>[S("div",ka,[E(o,{"model-value":T(f),"after-read":g,"max-count":e.maxCount,"before-delete":$,disabled:e.isView},v({default:A((()=>[O(a.$slots,"default",{},(()=>[S("div",Da,[E(B,{name:"image-upload",class:"icon"})])]),!0)])),_:2},[I(T(c),(e=>({name:e,fn:A((t=>[O(a.$slots,e,V(_(t||{})),void 0,!0)]))})))]),1032,["model-value","max-count","disabled"])])])),_:2},[e.subLabel?{name:"label",fn:A((()=>[j(m(T(l).label),1),S("span",Ma,m(e.subLabel),1)])),key:"0"}:void 0]),1032,["class","model-value"])}}}),[["__scopeId","data-v-64d27f69"]]);export{Be as B,Le as P,Ge as V,Ta as _,Aa as a,wa as b,ta as c,ra as d,ha as e,sa as f,pa as g,xa as h,Je as i,Ba as j,ga as k,fa as l,oa as m,ba as r,ca as t,Oa as u,la as v};
