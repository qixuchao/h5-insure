import{ref as e,computed as o,watch as a}from"vue";import{x as l,u as n,h as r,C as u,aQ as i,aR as t,f as d,e as f,T as m,Y as v}from"./index-d66a20d8.js";/* empty css              */import{c as s}from"./pdfh5-e588f83d.js";import{u as c}from"./useDicData-b539129e.js";import{R as p}from"./infoCollection-e6a8a0ee.js";var I={exports:{}},V=I.exports=function(e,o,a){e=e||{};var l=o.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function r(e,o,a,n){return l.fromToBase(e,o,a,n)}a.en.relativeTime=n,l.fromToBase=function(o,l,r,u,i){for(var t,d,f,m=r.$locale().relativeTime||n,v=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],s=v.length,c=0;c<s;c+=1){var p=v[c];p.d&&(t=u?a(o).diff(r,p.d,!0):r.diff(o,p.d,!0));var I=(e.rounding||Math.round)(Math.abs(t));if(f=t>0,I<=p.r||!p.r){I<=1&&c>0&&(p=v[c-1]);var V=m[p.l];i&&(I=i(""+I)),d="string"==typeof V?V.replace("%d",I):V(I,l,p.l,f);break}}if(l)return d;var w=f?m.future:m.past;return"function"==typeof w?w(d):w.replace("%s",d)},l.to=function(e,o){return r(e,o,this,!0)},l.from=function(e,o){return r(e,o,this)};var u=function(e){return e.$u?a.utc():a()};l.toNow=function(e){return this.to(u(this),e)},l.fromNow=function(e){return this.from(u(this),e)}};const w={key:0,class:"com-personal-wrapper"},x={class:"date-extra"},k=vue.createElementVNode("span",{class:"input-extra"},"万",-1),C=vue.createElementVNode("span",{class:"input-extra"},"万",-1),b={class:"button-extra"},y=vue.createElementVNode("span",{class:"input-extra"},"%",-1),h=vue.defineComponent({__name:"PersonalInfo",props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]},sendSmsCode:{type:Function,default:(e,o)=>{}},needDesensitize:{type:Boolean,default:!1}},emits:["update:images"],setup(s,{emit:I}){const h=s;l();const{insurerCode:B=""}=n().query,N=c(`${B.toLocaleUpperCase()}_OCCUPATION`),T=c("NATIONAL_REGION_CODE"),_=e([]),q=e(!1),U=e(),g=e(),R=e({formInfo:h.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""}),A=e(!1),$=o((()=>A.value?(R.value.formInfo.mobile||"").replace(/^(.{3})(?:\d+)(.{4})$/,"$1****$2"):h.formInfo.mobile)),E=e(!1),D=o((()=>E.value?(R.value.formInfo.certNo||"").replace(/^(.{6})(?:\d+)(.{2})$/,"$1**********$2"):h.formInfo.certNo));r.extend(V);const S=e(2===h.formInfo.certEndType),L=e(18),O=e(0),P=e("验证码"),M=e(!1),H=o((()=>{const e={};return h.factorList.forEach((o=>{e[o.code]=o})),e})),j=(e,o)=>{R.value.formInfo[o]=e};o((()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(R.value.formInfo.mobile)));const Y=e=>{"mobile"===e&&(A.value=!1),"certNo"===e&&(E.value=!1)},F=async()=>{O.value>0||h.sendSmsCode({mobile:R.value.formInfo.mobile,type:h.prefix},(()=>{M.value=!0,m({message:"短信发送成功，请查收"}),(()=>{if(O.value>0)return;O.value=60;const e=()=>{P.value=`${O.value}s`,O.value-=1};e();const o=setInterval((()=>{0===O.value?(P.value="验证码",O.value=0,clearInterval(o)):e()}),1e3)})()}))},Z=e=>{R.value.formInfo.certNo=e.personIdCard,R.value.formInfo.name=e.personName,R.value.formInfo.certEndDate=r(e.validDateEnd,"YYYYMMDD").toDate()},z=e=>{var o;return H.value&&H.value[e]&&(null==(o=H.value[e])?void 0:o.isDisplay)===v.YES},G=e=>H.value&&H.value[e]&&H.value[e].isMustInput===v.YES,J=(e,o)=>{var a,l;return(null==(l=null==(a=H.value)?void 0:a[e])?void 0:l[o])||""},K=o((()=>{var e;if(!z("certType"))return R.value.formInfo.certType=+u.CERT,!1;const o=J("certType","attributeValueList")||[];return 1!==o.length||(null==(e=o[0])?void 0:e.code)!==u.CERT||(R.value.formInfo.certType=+u.CERT,!1)})),W=o((()=>{var e,o,a;return(null==(e=J("certType","attributeValueList"))?void 0:e.length)>1?"证件号码":"insure"===h.prefix&&(null==(o=R.value.formInfo)?void 0:o.relationToHolder)===p.CHILD?"身份证号(户口簿)":(null==(a=J("certType","attributeValueList"))?void 0:a[0].code)===u.CERT?"身份证号":J("certType","title")})),Q=(e,o)=>/^[\u4E00-\u9FA5．·]{2,50}$/.test(e)?"":"请输入正确的姓名",X=o((()=>(L.value=18,[u.CERT,u.HOUSE_HOLD].includes(`${R.value.formInfo.certType}`)?(q.value=!0,[i.ID_CARD]):`${R.value.formInfo.certType}`===u.BIRTH?(q.value=!1,L.value=10,[i.BIRTH]):`${R.value.formInfo.certType}`===u.PASSPORT?(q.value=!1,[i.PASSPORT]):`${R.value.formInfo.certType}`===u.SOCIAL_CREDIT_CODE?(q.value=!1,[i.SOCIAL_CREDIT_CODE]):`${R.value.formInfo.certType}`===u.OTHER?(q.value=!1,[i.OTHER]):(q.value=!0,[i.ID_CARD])))),ee=(e,o)=>G("attachment")?2===R.value.formInfo.certEndType||R.value.formInfo.certEndDate?"":"请选择有效期至":"",oe=(e,o)=>/^\d{1,10}(\.\d{1,2})?$/.test(e)?"":"年收入最多录入10位数字",ae=(e,o)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(e)?"":"收益比例只能填写1-100的正整数",le=(e,o)=>(console.log("value",e),e.length>=5&&e.length<=99?"":"最多99个字符最少5个字符"),ne=(e,o,a)=>o.length>e?`最大不能超过${e}个字符`:"",re=(e,o)=>{var a,l,n,i,t,d,f;if(!z("nationality"))return"";if("CHN"===(null==(l=null==(a=R.value.formInfo)?void 0:a.extInfo)?void 0:l.nationalityCode)){if(![u.CERT,u.HOUSE_HOLD,u.BIRTH,u.MILITARY_CARD].includes(`${e}`))return"国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证"}else if(["HKG","MAC"].includes(null==(i=null==(n=R.value.formInfo)?void 0:n.extInfo)?void 0:i.nationalityCode)){if(![u.HK_MACAO_RESIDENCE_PERMIT,u.HONGKONG_MACAO].includes(`${e}`))return"国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证"}else if("TWN"===(null==(d=null==(t=R.value.formInfo)?void 0:t.extInfo)?void 0:d.nationalityCode)){if(![u.TAIWAN_RESIDENCE_PERMIT,u.TAIWAN_TRAVEL].includes(`${e}`))return"国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证"}else if(![u.PASSPORT,u.FOREIGN_PERMANENT].includes(`${e}`))return"国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证";return r().year()-r(null==(f=R.value.formInfo)?void 0:f.birthday).year()>2&&e===u.BIRTH?"年龄大于等于2周岁时，证件类型不能选择出生证":""},ue=e=>Array.isArray(e)&&2===e.length&&e[0]&&e[1]?"":"请上传身份证正反面照片";return a((()=>S.value),(e=>{e?(R.value.formInfo.certEndType=2,R.value.formInfo.certEndDate=""):R.value.formInfo.certEndType=1}),{immediate:!0}),a((()=>R.value.formInfo.mobile),(()=>{var e;R.value.formInfo.mobile=null==(e=R.value.formInfo.mobile)?void 0:e.replace(/[\u4e00-\u9fa5/\s+/]|[^0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),a([()=>R.value.formInfo.certNo,()=>R.value.formInfo.mobile],(()=>{var e,o;R.value.formInfo.certNo=null==(e=R.value.formInfo.certNo)?void 0:e.replace(/[\u4e00-\u9fa5/\s+/]/g,""),R.value.formInfo.mobile=null==(o=R.value.formInfo.mobile)?void 0:o.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),a((()=>h.needDesensitize),((e=!1)=>{A.value=e,E.value=e}),{immediate:!0}),a((()=>R.value.formInfo.certType),(e=>{[u.CERT,u.HOUSE_HOLD].includes(e)?q.value=!0:q.value=!1}),{deep:!0,immediate:!0}),a([()=>R.value.formInfo.certNo,()=>R.value.formInfo.certType],(([e])=>{[u.CERT,u.HOUSE_HOLD].includes(`${R.value.formInfo.certType}`)&&(t(e)?(R.value.formInfo.gender=+d(e),R.value.formInfo.birthday=r(new Date(f(e))).format("YYYY-MM-DD")):(R.value.formInfo.gender=null,R.value.formInfo.birthday=""))}),{deep:!0,immediate:!0}),a((()=>h.images),(e=>{_.value=e}),{immediate:!0}),a((()=>h.formInfo),(()=>{R.value.formInfo=h.formInfo}),{deep:!0,immediate:!0}),a(_,(e=>{I("update:images",e)}),{deep:!0}),(e,o)=>{const a=vue.resolveComponent("ProRadioButton"),l=vue.resolveComponent("ProField"),n=vue.resolveComponent("ProPicker"),r=vue.resolveComponent("ProIDCardUpload"),u=vue.resolveComponent("ProImageUpload"),t=vue.resolveComponent("ProDatePicker"),d=vue.resolveComponent("van-checkbox"),f=vue.resolveComponent("ProCascader"),m=vue.resolveComponent("van-button");return Object.keys(vue.unref(H)).length?(vue.openBlock(),vue.createElementBlock("div",w,[z("insuredBeneficiaryType")?(vue.openBlock(),vue.createBlock(l,{key:0,modelValue:vue.unref(R).formInfo.insuredBeneficiaryType,"onUpdate:modelValue":o[1]||(o[1]=e=>vue.unref(R).formInfo.insuredBeneficiaryType=e),label:J("insuredBeneficiaryType","title"),name:"insuredBeneficiaryType"},{input:vue.withCtx((()=>[vue.createVNode(a,{modelValue:vue.unref(R).formInfo.insuredBeneficiaryType,"onUpdate:modelValue":o[0]||(o[0]=e=>vue.unref(R).formInfo.insuredBeneficiaryType=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:J("insuredBeneficiaryType","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):vue.createCommentVNode("",!0),z("insuredRelation")?(vue.openBlock(),vue.createBlock(l,{key:1,modelValue:vue.unref(R).formInfo.insuredRelation,"onUpdate:modelValue":o[3]||(o[3]=e=>vue.unref(R).formInfo.insuredRelation=e),label:J("insuredRelation","title"),name:"insuredRelation"},{input:vue.withCtx((()=>[vue.createVNode(a,{modelValue:vue.unref(R).formInfo.insuredRelation,"onUpdate:modelValue":o[2]||(o[2]=e=>vue.unref(R).formInfo.insuredRelation=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:J("insuredRelation","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):vue.createCommentVNode("",!0),z("name")?(vue.openBlock(),vue.createBlock(l,{key:2,modelValue:vue.unref(R).formInfo.name,"onUpdate:modelValue":o[4]||(o[4]=e=>vue.unref(R).formInfo.name=e),label:J("name","title"),name:`${e.prefix}_name`,"is-view":e.isView,required:G("name"),rules:[{validator:Q}]},{"right-icon":vue.withCtx((()=>[vue.renderSlot(e.$slots,"name")])),_:3},8,["modelValue","label","name","is-view","required","rules"])):vue.createCommentVNode("",!0),z("sex")?(vue.openBlock(),vue.createBlock(l,{key:3,modelValue:vue.unref(R).formInfo.gender,"onUpdate:modelValue":o[6]||(o[6]=e=>vue.unref(R).formInfo.gender=e),required:G("sex"),label:J("sex","title"),name:`${e.prefix}_gender`,"is-view":vue.unref(q)},{input:vue.withCtx((()=>[vue.createVNode(a,{modelValue:vue.unref(R).formInfo.gender,"onUpdate:modelValue":o[5]||(o[5]=e=>vue.unref(R).formInfo.gender=e),disabled:vue.unref(q),"is-view":e.isView,prop:{label:"value",value:"code"},options:J("sex","attributeValueList")||[]},null,8,["modelValue","disabled","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):vue.createCommentVNode("",!0),vue.unref(K)?(vue.openBlock(),vue.createBlock(n,{key:4,modelValue:vue.unref(R).formInfo.certType,"onUpdate:modelValue":o[7]||(o[7]=e=>vue.unref(R).formInfo.certType=e),label:J("certType","title"),name:`${e.prefix}_certType`,"data-source":J("certType","attributeValueList"),mapping:{label:"value",value:"code",children:"child"},required:G("certType"),rules:[{validator:re}],"is-view":e.isView},null,8,["modelValue","label","name","data-source","required","rules","is-view"])):vue.createCommentVNode("",!0),z("certImage")&&vue.unref(R).formInfo.certType+""=="1"?(vue.openBlock(),vue.createBlock(l,{key:5,label:"身份证上传",block:"",required:G("certImage"),rules:[{validator:ue}],name:`${e.prefix}_idCard`},{input:vue.withCtx((()=>[vue.createVNode(r,{modelValue:vue.unref(_),"onUpdate:modelValue":o[8]||(o[8]=e=>vue.isRef(_)?_.value=e:null),"is-view":e.isView,onOnOCR:Z},null,8,["modelValue","is-view"])])),_:1},8,["required","rules","name"])):vue.createCommentVNode("",!0),z("certImage")&&vue.unref(R).formInfo.certType&&vue.unref(R).formInfo.certType+""!="1"?(vue.openBlock(),vue.createBlock(l,{key:6,label:J("certImage","title"),block:"",required:G("certImage")},{input:vue.withCtx((()=>[vue.createVNode(u,{modelValue:vue.unref(_),"onUpdate:modelValue":o[9]||(o[9]=e=>vue.isRef(_)?_.value=e:null),"is-view":e.isView,"max-count":1},null,8,["modelValue","is-view"])])),_:1},8,["label","required"])):vue.createCommentVNode("",!0),z("certNo")?(vue.openBlock(),vue.createBlock(l,{key:7,ref_key:"certNoRef",ref:U,modelValue:vue.unref(D),"onUpdate:modelValue":[o[10]||(o[10]=e=>vue.isRef(D)?D.value=e:null),o[12]||(o[12]=e=>j(e,"certNo"))],label:vue.unref(W),name:`${e.prefix}_certNo`,required:G("certNo"),maxlength:vue.unref(L),"is-view":e.isView,"validate-type":vue.unref(E)?void 0:vue.unref(X),onFocus:o[11]||(o[11]=e=>Y("certNo"))},null,8,["modelValue","label","name","required","maxlength","is-view","validate-type"])):vue.createCommentVNode("",!0),z("birthDate")?(vue.openBlock(),vue.createBlock(t,{key:8,modelValue:vue.unref(R).formInfo.birthday,"onUpdate:modelValue":o[13]||(o[13]=e=>vue.unref(R).formInfo.birthday=e),label:J("birthDate","title"),name:`${e.prefix}_birthday`,min:vue.unref(R).birth.min,max:vue.unref(R).birth.max,type:"date","is-view":vue.unref(q)||e.isView,required:G("birthDate")},null,8,["modelValue","label","name","min","max","is-view","required"])):vue.createCommentVNode("",!0),z("certExpiry")?(vue.openBlock(),vue.createBlock(t,{key:9,modelValue:vue.unref(R).formInfo.certEndDate,"onUpdate:modelValue":o[15]||(o[15]=e=>vue.unref(R).formInfo.certEndDate=e),label:J("certExpiry","title"),name:`${e.prefix}_certEndDate`,type:"date",min:vue.unref(R).certEndDate.min,max:vue.unref(R).certEndDate.max,"is-view":vue.unref(S)||e.isView,read:"",rules:[{validator:ee}]},{extra:vue.withCtx((()=>[vue.createElementVNode("div",x,[vue.createVNode(d,{modelValue:vue.unref(S),"onUpdate:modelValue":o[14]||(o[14]=e=>vue.isRef(S)?S.value=e:null),"icon-size":16,disabled:e.isView},{default:vue.withCtx((()=>[vue.createTextVNode("长期")])),_:1},8,["modelValue","disabled"])])])),_:1},8,["modelValue","label","name","min","max","is-view","rules"])):vue.createCommentVNode("",!0),z("age")?(vue.openBlock(),vue.createBlock(l,{key:10,modelValue:vue.unref(R).formInfo.name,"onUpdate:modelValue":o[16]||(o[16]=e=>vue.unref(R).formInfo.name=e),label:J("age","title"),name:`${e.prefix}_age`,"is-view":e.isView,required:G("age")},null,8,["modelValue","label","name","is-view","required"])):vue.createCommentVNode("",!0),z("residence")?(vue.openBlock(),vue.createBlock(f,{key:11,modelValue:vue.unref(R).formInfo.extInfo.provinceCode,"onUpdate:modelValue":o[17]||(o[17]=e=>vue.unref(R).formInfo.extInfo.provinceCode=e),field1:vue.unref(R).formInfo.extInfo.provinceCode,"onUpdate:field1":o[18]||(o[18]=e=>vue.unref(R).formInfo.extInfo.provinceCode=e),field2:vue.unref(R).formInfo.extInfo.cityCode,"onUpdate:field2":o[19]||(o[19]=e=>vue.unref(R).formInfo.extInfo.cityCode=e),field3:vue.unref(R).formInfo.extInfo.areaCode,"onUpdate:field3":o[20]||(o[20]=e=>vue.unref(R).formInfo.extInfo.areaCode=e),label:J("residence","title"),name:`${e.prefix}_provinceCode`,"is-link":"","is-view":e.isView,required:G("residence"),"data-source":vue.unref(T),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):vue.createCommentVNode("",!0),z("social")&&"insure"!==e.prefix?(vue.openBlock(),vue.createBlock(l,{key:12,modelValue:vue.unref(R).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[22]||(o[22]=e=>vue.unref(R).formInfo.extInfo.hasSocialInsurance=e),label:J("social","title"),name:`${e.prefix}_hasSocialInsurance`,required:G("social")},{input:vue.withCtx((()=>[vue.createVNode(a,{modelValue:vue.unref(R).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[21]||(o[21]=e=>vue.unref(R).formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:J("social","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):vue.createCommentVNode("",!0),z("height")?(vue.openBlock(),vue.createBlock(l,{key:13,modelValue:vue.unref(R).formInfo.name,"onUpdate:modelValue":o[23]||(o[23]=e=>vue.unref(R).formInfo.name=e),label:J("height","title"),"is-view":e.isView,name:`${e.prefix}_height`,required:G("height")},null,8,["modelValue","label","is-view","name","required"])):vue.createCommentVNode("",!0),z("weight")?(vue.openBlock(),vue.createBlock(l,{key:14,modelValue:vue.unref(R).formInfo.name,"onUpdate:modelValue":o[24]||(o[24]=e=>vue.unref(R).formInfo.name=e),label:J("weight","title"),name:`${e.prefix}_weight`,"is-view":e.isView,required:G("weight")},null,8,["modelValue","label","name","is-view","required"])):vue.createCommentVNode("",!0),z("BMI")?(vue.openBlock(),vue.createBlock(l,{key:15,modelValue:vue.unref(R).formInfo.name,"onUpdate:modelValue":o[25]||(o[25]=e=>vue.unref(R).formInfo.name=e),label:J("BMI","title"),name:`${e.prefix}_BMI`,"is-view":e.isView,required:G("BMI")},null,8,["modelValue","label","name","is-view","required"])):vue.createCommentVNode("",!0),z("insuredRiskManagementLevel")?(vue.openBlock(),vue.createBlock(l,{key:16,modelValue:vue.unref(R).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[27]||(o[27]=e=>vue.unref(R).formInfo.extInfo.hasSocialInsurance=e),label:J("insuredRiskManagementLevel","title"),name:`${e.prefix}_hasSocialInsurance`,required:G("insuredRiskManagementLevel")},{input:vue.withCtx((()=>[vue.createVNode(a,{modelValue:vue.unref(R).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[26]||(o[26]=e=>vue.unref(R).formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:J("insuredRiskManagementLevel","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):vue.createCommentVNode("",!0),z("purchaseOtherInsurance")?(vue.openBlock(),vue.createBlock(l,{key:17,modelValue:vue.unref(R).formInfo.extInfo.purchaseOtherInsurance,"onUpdate:modelValue":o[29]||(o[29]=e=>vue.unref(R).formInfo.extInfo.purchaseOtherInsurance=e),label:J("purchaseOtherInsurance","title"),name:`${e.prefix}_purchaseOtherInsurance`,required:G("purchaseOtherInsurance")},{input:vue.withCtx((()=>[vue.createVNode(a,{modelValue:vue.unref(R).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[28]||(o[28]=e=>vue.unref(R).formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:J("purchaseOtherInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):vue.createCommentVNode("",!0),z("injuryInsurance")?(vue.openBlock(),vue.createBlock(l,{key:18,modelValue:vue.unref(R).formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":o[31]||(o[31]=e=>vue.unref(R).formInfo.extInfo.injuryInsurance=e),label:J("injuryInsurance","title"),name:`${e.prefix}_hasSocialInsurance`,required:G("injuryInsurance")},{input:vue.withCtx((()=>[vue.createVNode(a,{modelValue:vue.unref(R).formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":o[30]||(o[30]=e=>vue.unref(R).formInfo.extInfo.injuryInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:J("injuryInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):vue.createCommentVNode("",!0),z("insureArea")?(vue.openBlock(),vue.createBlock(f,{key:19,label:J("insureArea","title"),name:"insureAreaCode","is-link":"","is-view":e.isView,required:G("insureArea"),"data-source":vue.unref(T),mapping:{label:"name",value:"code",children:"children"}},null,8,["label","is-view","required","data-source"])):vue.createCommentVNode("",!0),z("occupation")&&"insure"!==e.prefix?(vue.openBlock(),vue.createBlock(f,{key:20,modelValue:vue.unref(R).formInfo.extInfo.occupationCodeList[0],"onUpdate:modelValue":o[32]||(o[32]=e=>vue.unref(R).formInfo.extInfo.occupationCodeList[0]=e),field0:vue.unref(R).formInfo.extInfo.occupationCodeList[0],"onUpdate:field0":o[33]||(o[33]=e=>vue.unref(R).formInfo.extInfo.occupationCodeList[0]=e),field1:vue.unref(R).formInfo.extInfo.occupationCodeList[1],"onUpdate:field1":o[34]||(o[34]=e=>vue.unref(R).formInfo.extInfo.occupationCodeList[1]=e),field2:vue.unref(R).formInfo.extInfo.occupationCodeList[2],"onUpdate:field2":o[35]||(o[35]=e=>vue.unref(R).formInfo.extInfo.occupationCodeList[2]=e),label:J("occupation","title"),name:`${e.prefix}_occupationCodeList`,"is-view":e.isView,required:G("occupation"),"data-source":vue.unref(N),mapping:{label:"value",value:"code",children:"children"},"is-link":""},null,8,["modelValue","field0","field1","field2","label","name","is-view","required","data-source"])):vue.createCommentVNode("",!0),z("personalAnnualIncome")?(vue.openBlock(),vue.createBlock(l,{key:21,modelValue:vue.unref(R).formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":o[36]||(o[36]=e=>vue.unref(R).formInfo.extInfo.personalAnnualIncome=e),label:J("personalAnnualIncome","title"),name:`${e.prefix}_personalAnnualIncome`,required:G("personalAnnualIncome"),"is-view":e.isView,rules:[{validator:oe}]},{extra:vue.withCtx((()=>[k])),_:1},8,["modelValue","label","name","required","is-view","rules"])):vue.createCommentVNode("",!0),z("familyAnnualIncome")?(vue.openBlock(),vue.createBlock(l,{key:22,modelValue:vue.unref(R).formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":o[37]||(o[37]=e=>vue.unref(R).formInfo.extInfo.familyAnnualIncome=e),label:J("familyAnnualIncome","title"),name:`${e.prefix}_familyAnnualIncome`,"is-view":e.isView,rules:[{validator:oe}],required:G("familyAnnualIncome")},{extra:vue.withCtx((()=>[C])),_:1},8,["modelValue","label","name","is-view","rules","required"])):vue.createCommentVNode("",!0),z("country")?(vue.openBlock(),vue.createBlock(n,{key:23,modelValue:vue.unref(R).formInfo.extInfo.nationalityCode,"onUpdate:modelValue":o[38]||(o[38]=e=>vue.unref(R).formInfo.extInfo.nationalityCode=e),label:J("country","title"),name:`${e.prefix}_nationalityCode`,"data-source":J("country","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:G("country"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):vue.createCommentVNode("",!0),z("hasUsCard")?(vue.openBlock(),vue.createBlock(l,{key:24,modelValue:vue.unref(R).formInfo.extInfo.hasUsCard,"onUpdate:modelValue":o[40]||(o[40]=e=>vue.unref(R).formInfo.extInfo.hasUsCard=e),label:J("hasUsCard","title"),name:`${e.prefix}_hasUsCard`,required:G("hasUsCard")},{input:vue.withCtx((()=>[vue.createVNode(a,{modelValue:vue.unref(R).formInfo.extInfo.hasUsCard,"onUpdate:modelValue":o[39]||(o[39]=e=>vue.unref(R).formInfo.extInfo.hasUsCard=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:J("hasUsCard","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):vue.createCommentVNode("",!0),z("marritalStatus")?(vue.openBlock(),vue.createBlock(n,{key:25,modelValue:vue.unref(R).formInfo.extInfo.marriageStatus,"onUpdate:modelValue":o[41]||(o[41]=e=>vue.unref(R).formInfo.extInfo.marriageStatus=e),label:J("marritalStatus","title"),name:`${e.prefix}_marriageStatus`,"data-source":J("marritalStatus","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},"is-link":"","is-view":e.isView,required:G("marritalStatus")},null,8,["modelValue","label","name","data-source","is-view","required"])):vue.createCommentVNode("",!0),z("degree")?(vue.openBlock(),vue.createBlock(n,{key:26,modelValue:vue.unref(R).formInfo.extInfo.educationDegree,"onUpdate:modelValue":o[42]||(o[42]=e=>vue.unref(R).formInfo.extInfo.educationDegree=e),label:J("degree","title"),name:`${e.prefix}_educationDegree`,"data-source":J("degree","attributeValueList")||[],mapping:{label:"name",value:"code",children:"child"},required:G("degree"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):vue.createCommentVNode("",!0),z("mobile")?(vue.openBlock(),vue.createBlock(l,{key:27,ref_key:"phoneRef",ref:g,modelValue:vue.unref($),"onUpdate:modelValue":[o[43]||(o[43]=e=>vue.isRef($)?$.value=e:null),o[45]||(o[45]=e=>j(e,"mobile"))],label:J("mobile","title"),name:`${e.prefix}_mobile`,maxlength:11,"is-view":e.isView,required:G("mobile"),"validate-type":vue.unref(A)?void 0:[vue.unref(i).PHONE],onFocus:o[44]||(o[44]=e=>Y("mobile"))},null,8,["modelValue","label","name","is-view","required","validate-type"])):vue.createCommentVNode("",!0),z("verificationCode")?(vue.openBlock(),vue.createBlock(l,{key:28,modelValue:vue.unref(R).formInfo.verificationCode,"onUpdate:modelValue":o[46]||(o[46]=e=>vue.unref(R).formInfo.verificationCode=e),label:J("verificationCode","title"),name:`${e.prefix}_verificationCode`,type:"digit",maxlength:6,"is-view":e.isView,required:G("verificationCode")},vue.createSlots({_:2},[e.isView?void 0:{name:"extra",fn:vue.withCtx((()=>[vue.createElementVNode("div",b,[vue.createVNode(m,{class:vue.normalizeClass(["sms-code",{"count-down":vue.unref(O)>0}]),size:"small",plain:"",type:"primary",onClick:F},{default:vue.withCtx((()=>[vue.createTextVNode(vue.toDisplayString(vue.unref(P)),1)])),_:1},8,["class"])])])),key:"0"}]),1032,["modelValue","label","name","is-view","required"])):vue.createCommentVNode("",!0),z("isSmoke")?(vue.openBlock(),vue.createBlock(l,{key:29,modelValue:vue.unref(R).formInfo.isSmoke,"onUpdate:modelValue":o[48]||(o[48]=e=>vue.unref(R).formInfo.isSmoke=e),required:G("isSmoke"),label:J("isSmoke","title"),name:`${e.prefix}_isSmoke`,"is-view":vue.unref(q)},{input:vue.withCtx((()=>[vue.createVNode(a,{modelValue:vue.unref(R).formInfo.isSmoke,"onUpdate:modelValue":o[47]||(o[47]=e=>vue.unref(R).formInfo.isSmoke=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:J("isSmoke","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):vue.createCommentVNode("",!0),z("contactNo")?(vue.openBlock(),vue.createBlock(l,{key:30,modelValue:vue.unref(R).formInfo.contactNo,"onUpdate:modelValue":o[49]||(o[49]=e=>vue.unref(R).formInfo.contactNo=e),label:J("contactNo","title"),name:`${e.prefix}_contactNo`,"is-view":e.isView,required:G("contactNo")},null,8,["modelValue","label","name","is-view","required"])):vue.createCommentVNode("",!0),z("email")?(vue.openBlock(),vue.createBlock(l,{key:31,modelValue:vue.unref(R).formInfo.email,"onUpdate:modelValue":o[50]||(o[50]=e=>vue.unref(R).formInfo.email=e),label:J("email","title"),name:`${e.prefix}_email`,"is-view":e.isView,required:G("email"),"validate-type":[vue.unref(i).EMAIL]},null,8,["modelValue","label","name","is-view","required","validate-type"])):vue.createCommentVNode("",!0),z("homeAddress")?(vue.openBlock(),vue.createBlock(f,{key:32,modelValue:vue.unref(R).formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":o[51]||(o[51]=e=>vue.unref(R).formInfo.extInfo.familyAreaCode=e),field1:vue.unref(R).formInfo.extInfo.familyProvinceCode,"onUpdate:field1":o[52]||(o[52]=e=>vue.unref(R).formInfo.extInfo.familyProvinceCode=e),field2:vue.unref(R).formInfo.extInfo.familyCityCode,"onUpdate:field2":o[53]||(o[53]=e=>vue.unref(R).formInfo.extInfo.familyCityCode=e),field3:vue.unref(R).formInfo.extInfo.familyAreaCode,"onUpdate:field3":o[54]||(o[54]=e=>vue.unref(R).formInfo.extInfo.familyAreaCode=e),label:J("homeAddress","title"),name:`${e.prefix}_familyProvinceCode`,"is-link":"","is-view":e.isView,required:G("homeAddress"),"data-source":vue.unref(T),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):vue.createCommentVNode("",!0),z("homeAddressDetail")?(vue.openBlock(),vue.createBlock(l,{key:33,modelValue:vue.unref(R).formInfo.extInfo.familyAddress,"onUpdate:modelValue":o[55]||(o[55]=e=>vue.unref(R).formInfo.extInfo.familyAddress=e),label:J("homeAddressDetail","title"),name:`${e.prefix}_familyAddress`,"is-view":e.isView,maxlength:99,rules:[{validator:le}],required:G("homeAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):vue.createCommentVNode("",!0),z("homePostalCode")?(vue.openBlock(),vue.createBlock(l,{key:34,modelValue:vue.unref(R).formInfo.extInfo.familyZipCode,"onUpdate:modelValue":o[56]||(o[56]=e=>vue.unref(R).formInfo.extInfo.familyZipCode=e),label:J("homePostalCode","title"),name:`${e.prefix}_familyZipCode`,"is-view":e.isView,required:G("homePostalCode"),"validate-type":[vue.unref(i).ZIP_CODE]},null,8,["modelValue","label","name","is-view","required","validate-type"])):vue.createCommentVNode("",!0),z("workAddress")?(vue.openBlock(),vue.createBlock(f,{key:35,modelValue:vue.unref(R).formInfo.extInfo.workAreaCode,"onUpdate:modelValue":o[57]||(o[57]=e=>vue.unref(R).formInfo.extInfo.workAreaCode=e),field1:vue.unref(R).formInfo.extInfo.workProvinceCode,"onUpdate:field1":o[58]||(o[58]=e=>vue.unref(R).formInfo.extInfo.workProvinceCode=e),field2:vue.unref(R).formInfo.extInfo.workCityCode,"onUpdate:field2":o[59]||(o[59]=e=>vue.unref(R).formInfo.extInfo.workCityCode=e),field3:vue.unref(R).formInfo.extInfo.workAreaCode,"onUpdate:field3":o[60]||(o[60]=e=>vue.unref(R).formInfo.extInfo.workAreaCode=e),label:J("workAddress","title"),name:`${e.prefix}_workProvinceCode`,"is-link":"","is-view":e.isView,required:G("workAddress"),"data-source":vue.unref(T),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):vue.createCommentVNode("",!0),z("workAddressDetail")?(vue.openBlock(),vue.createBlock(l,{key:36,modelValue:vue.unref(R).formInfo.extInfo.workAddress,"onUpdate:modelValue":o[61]||(o[61]=e=>vue.unref(R).formInfo.extInfo.workAddress=e),label:J("workAddressDetail","title"),name:`${e.prefix}_workAddress`,"is-view":e.isView,rules:[{validator:le}],required:G("workAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):vue.createCommentVNode("",!0),z("workPostalCode")?(vue.openBlock(),vue.createBlock(l,{key:37,modelValue:vue.unref(R).formInfo.extInfo.workZipCode,"onUpdate:modelValue":o[62]||(o[62]=e=>vue.unref(R).formInfo.extInfo.workZipCode=e),label:J("workPostalCode","title"),required:G("workZipCode"),name:`${e.prefix}_workPostCode`,"is-view":e.isView,"validate-type":[vue.unref(i).ZIP_CODE]},null,8,["modelValue","label","required","name","is-view","validate-type"])):vue.createCommentVNode("",!0),z("companyName")?(vue.openBlock(),vue.createBlock(l,{key:38,modelValue:vue.unref(R).formInfo.extInfo.workStation,"onUpdate:modelValue":o[63]||(o[63]=e=>vue.unref(R).formInfo.extInfo.workStation=e),label:J("companyName","title"),name:`${e.prefix}_workPostCode`,"is-view":e.isView,rules:[{validator:(...e)=>ne(20,...e)}],required:G("companyName")},null,8,["modelValue","label","name","is-view","rules","required"])):vue.createCommentVNode("",!0),z("workContent")?(vue.openBlock(),vue.createBlock(l,{key:39,modelValue:vue.unref(R).formInfo.extInfo.workContent,"onUpdate:modelValue":o[64]||(o[64]=e=>vue.unref(R).formInfo.extInfo.workContent=e),label:J("workContent","title"),name:`${e.prefix}_workContent`,required:G("workContent"),"is-view":e.isView,rules:[{validator:(...e)=>ne(100,...e)}]},null,8,["modelValue","label","name","required","is-view","rules"])):vue.createCommentVNode("",!0),z("chineseTaxResident")?(vue.openBlock(),vue.createBlock(l,{key:40,modelValue:vue.unref(R).formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":o[66]||(o[66]=e=>vue.unref(R).formInfo.extInfo.chineseTaxResident=e),label:J("chineseTaxResident","title"),name:`${e.prefix}_taxResident`,required:G("chineseTaxResident")},{input:vue.withCtx((()=>[vue.createVNode(a,{modelValue:vue.unref(R).formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":o[65]||(o[65]=e=>vue.unref(R).formInfo.extInfo.chineseTaxResident=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:J("chineseTaxResident","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):vue.createCommentVNode("",!0),z("taxResident")?(vue.openBlock(),vue.createBlock(n,{key:41,modelValue:vue.unref(R).formInfo.taxResident,"onUpdate:modelValue":o[67]||(o[67]=e=>vue.unref(R).formInfo.taxResident=e),"is-view":e.isView,label:J("taxResident","title"),name:`${e.prefix}_benefitOrder`,"data-source":J("taxResident","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:G("taxResident")},null,8,["modelValue","is-view","label","name","data-source","required"])):vue.createCommentVNode("",!0),z("partTimeJob")?(vue.openBlock(),vue.createBlock(l,{key:42,modelValue:vue.unref(R).formInfo.extInfo.isPartTime,"onUpdate:modelValue":o[69]||(o[69]=e=>vue.unref(R).formInfo.extInfo.isPartTime=e),label:J("partTimeJob","title"),name:`${e.prefix}_isPartTime`,required:G("partTimeJob")},{input:vue.withCtx((()=>[vue.createVNode(a,{modelValue:vue.unref(R).formInfo.extInfo.isPartTime,"onUpdate:modelValue":o[68]||(o[68]=e=>vue.unref(R).formInfo.extInfo.isPartTime=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:J("partTimeJob","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):vue.createCommentVNode("",!0),z("benefitOrder")?(vue.openBlock(),vue.createBlock(n,{key:43,modelValue:vue.unref(R).formInfo.benefitOrder,"onUpdate:modelValue":o[70]||(o[70]=e=>vue.unref(R).formInfo.benefitOrder=e),label:J("benefitOrder","title"),name:`${e.prefix}_benefitOrder`,"is-view":e.isView,"data-source":J("benefitOrder","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:G("benefitOrder")},null,8,["modelValue","label","name","is-view","data-source","required"])):vue.createCommentVNode("",!0),z("benefitRate")?(vue.openBlock(),vue.createBlock(l,{key:44,modelValue:vue.unref(R).formInfo.benefitRate,"onUpdate:modelValue":o[71]||(o[71]=e=>vue.unref(R).formInfo.benefitRate=e),required:G("benefitRate"),name:`${e.prefix}_benefitRate`,"is-view":e.isView,rules:[{validator:ae}],label:J("benefitRate","title")},{extra:vue.withCtx((()=>[y])),_:1},8,["modelValue","required","name","is-view","rules","label"])):vue.createCommentVNode("",!0),vue.renderSlot(e.$slots,"default")])):vue.createCommentVNode("",!0)}}});export{h as _};
