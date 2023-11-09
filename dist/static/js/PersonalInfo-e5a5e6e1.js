import{bO as e,d as a,bX as o,i as l,dz as i,j as n,k as r,ap as t,al as d,dC as u,z as m,dD as f,an as s,am as c,u as p,o as I,c as v,m as V,w as b,b as y,f as w,g as x,p as h,a as C,a8 as k,bP as _,n as T,e as q,T as U,a6 as g,bc as A,bb as $,dE as R,dF as E,dG as D,dH as L,aB as O,dA as S,ai as N}from"./index-6027c89f.js";import{v as P}from"./validator-6eb2e74e.js";import{R as M}from"./infoCollection-c7c3a2b1.js";var H={exports:{}},B=H.exports=function(e,a,o){e=e||{};var l=a.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function n(e,a,o,i){return l.fromToBase(e,a,o,i)}o.en.relativeTime=i,l.fromToBase=function(a,l,n,r,t){for(var d,u,m,f=n.$locale().relativeTime||i,s=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],c=s.length,p=0;p<c;p+=1){var I=s[p];I.d&&(d=r?o(a).diff(n,I.d,!0):n.diff(a,I.d,!0));var v=(e.rounding||Math.round)(Math.abs(d));if(m=d>0,v<=I.r||!I.r){v<=1&&p>0&&(I=s[p-1]);var V=f[I.l];t&&(v=t(""+v)),u="string"==typeof V?V.replace("%d",v):V(v,l,I.l,m);break}}if(l)return u;var b=m?f.future:f.past;return"function"==typeof b?b(u):b.replace("%s",u)},l.to=function(e,a){return n(e,a,this,!0)},l.from=function(e,a){return n(e,a,this)};var r=function(e){return e.$u?o.utc():o()};l.toNow=function(e){return this.to(r(this),e)},l.fromNow=function(e){return this.from(r(this),e)}};const j={key:0,class:"com-personal-wrapper"},Y={class:"date-extra"},Z=C("span",{class:"input-extra"},"万",-1),F=C("span",{class:"input-extra"},"万",-1),z={class:"button-extra"},G=C("span",{class:"input-extra"},"%",-1),J=a({__name:"PersonalInfo",props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]},sendSmsCode:{type:Function,default:(e,a)=>{}},needDesensitize:{type:Boolean,default:!1}},emits:["update:images"],setup(e,{emit:a}){const H=e;o();const{insurerCode:J=""}=l().query,K=i(`${J.toLocaleUpperCase()}_OCCUPATION`),W=i(`${J.toLocaleUpperCase()}_NATIONAL_REGION_CODE`),X=n([]),Q=n(!1),ee=n(),ae=n(),oe=n({formInfo:H.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""}),le=n(!1),ie=r((()=>le.value?(oe.value.formInfo.mobile||"").replace(/^(.{3})(?:\d+)(.{4})$/,"$1****$2"):H.formInfo.mobile)),ne=n(!1),re=r((()=>ne.value?(oe.value.formInfo.certNo||"").replace(/^(.{6})(?:\d+)(.{2})$/,"$1**********$2"):H.formInfo.certNo));t.extend(B);const te=n(2===H.formInfo.certEndType),de=n(18),ue=n(0),me=n("验证码"),fe=n(!1),se=r((()=>{const e={};return H.factorList.forEach((a=>{e[a.code]=a})),e})),ce=(e,a)=>{oe.value.formInfo[a]=e};r((()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(oe.value.formInfo.mobile)));const pe=e=>{"mobile"===e&&(le.value=!1),"certNo"===e&&(ne.value=!1)},Ie=async()=>{ue.value>0||H.sendSmsCode({mobile:oe.value.formInfo.mobile,type:H.prefix},(()=>{fe.value=!0,U({message:"短信发送成功，请查收"}),(()=>{if(ue.value>0)return;ue.value=60;const e=()=>{me.value=`${ue.value}s`,ue.value-=1};e();const a=setInterval((()=>{0===ue.value?(me.value="验证码",ue.value=0,clearInterval(a)):e()}),1e3)})()}))},ve=e=>{oe.value.formInfo.certNo=e.personIdCard,oe.value.formInfo.name=e.personName,oe.value.formInfo.certEndDate=t(e.validDateEnd,"YYYYMMDD").toDate()},Ve=e=>{var a;return se.value&&se.value[e]&&(null==(a=se.value[e])?void 0:a.isDisplay)===g.YES},be=e=>se.value&&se.value[e]&&se.value[e].isMustInput===g.YES,ye=(e,a)=>{var o,l;return(null==(l=null==(o=se.value)?void 0:o[e])?void 0:l[a])||""},we=r((()=>{var e;if(!Ve("certType"))return oe.value.formInfo.certType=+d.CERT,!1;const a=ye("certType","attributeValueList")||[];return 1!==a.length||(null==(e=a[0])?void 0:e.code)!==d.CERT||(oe.value.formInfo.certType=+d.CERT,!1)})),xe=r((()=>{var e,a,o;return(null==(e=ye("certType","attributeValueList"))?void 0:e.length)>1?"证件号码":"insure"===H.prefix&&(null==(a=oe.value.formInfo)?void 0:a.relationToHolder)===M.CHILD?"身份证号(户口簿)":(null==(o=ye("certType","attributeValueList"))?void 0:o[0].code)===d.CERT?"身份证号":ye("certType","title")})),he=(e,a)=>P(e)?"":"请输入正确的姓名",Ce=r((()=>(de.value=18,[d.CERT,d.HOUSE_HOLD].includes(`${oe.value.formInfo.certType}`)?(Q.value=!0,[u.ID_CARD]):`${oe.value.formInfo.certType}`===d.BIRTH?(Q.value=!1,de.value=10,[u.BIRTH]):`${oe.value.formInfo.certType}`===d.PASSPORT?(Q.value=!1,[u.PASSPORT]):`${oe.value.formInfo.certType}`===d.SOCIAL_CREDIT_CODE?(Q.value=!1,[u.SOCIAL_CREDIT_CODE]):`${oe.value.formInfo.certType}`===d.OTHER?(Q.value=!1,[u.OTHER]):(Q.value=!0,[u.ID_CARD])))),ke=(e,a)=>be("attachment")?2===oe.value.formInfo.certEndType||oe.value.formInfo.certEndDate?"":"请选择有效期至":"",_e=(e,a)=>/^\d{1,10}(\.\d{1,2})?$/.test(e)?"":"年收入最多录入10位数字",Te=(e,a)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(e)?"":"收益比例只能填写1-100的正整数",qe=(e,a)=>e.length>=5&&e.length<=99?"":"最多99个字符最少5个字符",Ue=(e,a,o)=>a.length>e?`最大不能超过${e}个字符`:"",ge=(e,a)=>{var o,l,i,n,r,u,m;if(!Ve("nationality"))return"";if("CHN"===(null==(l=null==(o=oe.value.formInfo)?void 0:o.extInfo)?void 0:l.nationalityCode)){if(![d.CERT,d.HOUSE_HOLD,d.BIRTH,d.MILITARY_CARD].includes(`${e}`))return"国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证"}else if(["HKG","MAC"].includes(null==(n=null==(i=oe.value.formInfo)?void 0:i.extInfo)?void 0:n.nationalityCode)){if(![d.HK_MACAO_RESIDENCE_PERMIT,d.HONGKONG_MACAO].includes(`${e}`))return"国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证"}else if("TWN"===(null==(u=null==(r=oe.value.formInfo)?void 0:r.extInfo)?void 0:u.nationalityCode)){if(![d.TAIWAN_RESIDENCE_PERMIT,d.TAIWAN_TRAVEL].includes(`${e}`))return"国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证"}else if(![d.PASSPORT,d.FOREIGN_PERMANENT].includes(`${e}`))return"国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证";return t().year()-t(null==(m=oe.value.formInfo)?void 0:m.birthday).year()>2&&e===d.BIRTH?"年龄大于等于2周岁时，证件类型不能选择出生证":""},Ae=e=>Array.isArray(e)&&2===e.length&&e[0]&&e[1]?"":"请上传身份证正反面照片";return m((()=>te.value),(e=>{e?(oe.value.formInfo.certEndType=2,oe.value.formInfo.certEndDate=""):oe.value.formInfo.certEndType=1}),{immediate:!0}),m((()=>oe.value.formInfo.mobile),(()=>{var e;oe.value.formInfo.mobile=null==(e=oe.value.formInfo.mobile)?void 0:e.replace(/[\u4e00-\u9fa5/\s+/]|[^0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),m([()=>oe.value.formInfo.certNo,()=>oe.value.formInfo.mobile],(()=>{var e,a;oe.value.formInfo.certNo=null==(e=oe.value.formInfo.certNo)?void 0:e.replace(/[\u4e00-\u9fa5/\s+/]/g,""),oe.value.formInfo.mobile=null==(a=oe.value.formInfo.mobile)?void 0:a.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),m((()=>H.needDesensitize),((e=!1)=>{le.value=e,ne.value=e}),{immediate:!0}),m((()=>oe.value.formInfo.certType),(e=>{[d.CERT,d.HOUSE_HOLD].includes(e)?Q.value=!0:Q.value=!1}),{deep:!0,immediate:!0}),m([()=>oe.value.formInfo.certNo,()=>oe.value.formInfo.certType],(([e])=>{[d.CERT,d.HOUSE_HOLD].includes(`${oe.value.formInfo.certType}`)&&(f(e)?(oe.value.formInfo.gender=+s(e),oe.value.formInfo.birthday=t(new Date(c(e))).format("YYYY-MM-DD")):(oe.value.formInfo.gender=null,oe.value.formInfo.birthday=""))}),{deep:!0,immediate:!0}),m((()=>H.images),(e=>{X.value=e}),{immediate:!0}),m((()=>H.formInfo),(()=>{oe.value.formInfo=H.formInfo}),{deep:!0,immediate:!0}),m(X,(e=>{a("update:images",e)}),{deep:!0}),(a,o)=>{const l=A,i=$,n=R,r=E,t=D,d=L,m=O,f=S,s=N;return Object.keys(p(se)).length?(I(),v("div",j,[Ve("insuredBeneficiaryType")?(I(),V(i,{key:0,modelValue:p(oe).formInfo.insuredBeneficiaryType,"onUpdate:modelValue":o[1]||(o[1]=e=>p(oe).formInfo.insuredBeneficiaryType=e),label:ye("insuredBeneficiaryType","title"),name:"insuredBeneficiaryType"},{input:b((()=>[y(l,{modelValue:p(oe).formInfo.insuredBeneficiaryType,"onUpdate:modelValue":o[0]||(o[0]=e=>p(oe).formInfo.insuredBeneficiaryType=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("insuredBeneficiaryType","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):w("",!0),Ve("insuredRelation")?(I(),V(i,{key:1,modelValue:p(oe).formInfo.insuredRelation,"onUpdate:modelValue":o[3]||(o[3]=e=>p(oe).formInfo.insuredRelation=e),label:ye("insuredRelation","title"),name:"insuredRelation"},{input:b((()=>[y(l,{modelValue:p(oe).formInfo.insuredRelation,"onUpdate:modelValue":o[2]||(o[2]=e=>p(oe).formInfo.insuredRelation=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("insuredRelation","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):w("",!0),Ve("name")?(I(),V(i,{key:2,modelValue:p(oe).formInfo.name,"onUpdate:modelValue":o[4]||(o[4]=e=>p(oe).formInfo.name=e),label:ye("name","title"),name:`${e.prefix}_name`,"is-view":e.isView,required:be("name"),rules:[{validator:he}]},{"right-icon":b((()=>[x(a.$slots,"name")])),_:3},8,["modelValue","label","name","is-view","required","rules"])):w("",!0),Ve("sex")?(I(),V(i,{key:3,modelValue:p(oe).formInfo.gender,"onUpdate:modelValue":o[6]||(o[6]=e=>p(oe).formInfo.gender=e),required:be("sex"),label:ye("sex","title"),name:`${e.prefix}_gender`,"is-view":p(Q)},{input:b((()=>[y(l,{modelValue:p(oe).formInfo.gender,"onUpdate:modelValue":o[5]||(o[5]=e=>p(oe).formInfo.gender=e),disabled:p(Q),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("sex","attributeValueList")||[]},null,8,["modelValue","disabled","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):w("",!0),p(we)?(I(),V(n,{key:4,modelValue:p(oe).formInfo.certType,"onUpdate:modelValue":o[7]||(o[7]=e=>p(oe).formInfo.certType=e),label:ye("certType","title"),name:`${e.prefix}_certType`,"data-source":ye("certType","attributeValueList"),mapping:{label:"value",value:"code",children:"child"},required:be("certType"),rules:[{validator:ge}],"is-view":e.isView},null,8,["modelValue","label","name","data-source","required","rules","is-view"])):w("",!0),Ve("certImage")&&p(oe).formInfo.certType+""=="1"?(I(),V(i,{key:5,label:"身份证上传",block:"",required:be("certImage"),rules:[{validator:Ae}],name:`${e.prefix}_idCard`},{input:b((()=>[y(r,{modelValue:p(X),"onUpdate:modelValue":o[8]||(o[8]=e=>h(X)?X.value=e:null),"is-view":e.isView,onOnOCR:ve},null,8,["modelValue","is-view"])])),_:1},8,["required","rules","name"])):w("",!0),Ve("certImage")&&p(oe).formInfo.certType&&p(oe).formInfo.certType+""!="1"?(I(),V(i,{key:6,label:ye("certImage","title"),block:"",required:be("certImage")},{input:b((()=>[y(t,{modelValue:p(X),"onUpdate:modelValue":o[9]||(o[9]=e=>h(X)?X.value=e:null),"is-view":e.isView,"max-count":1},null,8,["modelValue","is-view"])])),_:1},8,["label","required"])):w("",!0),Ve("certNo")?(I(),V(i,{key:7,ref_key:"certNoRef",ref:ee,modelValue:p(re),"onUpdate:modelValue":[o[10]||(o[10]=e=>h(re)?re.value=e:null),o[12]||(o[12]=e=>ce(e,"certNo"))],label:p(xe),name:`${e.prefix}_certNo`,required:be("certNo"),maxlength:p(de),"is-view":e.isView,"validate-type":p(ne)?void 0:p(Ce),onFocus:o[11]||(o[11]=e=>pe("certNo"))},null,8,["modelValue","label","name","required","maxlength","is-view","validate-type"])):w("",!0),Ve("birthDate")?(I(),V(d,{key:8,modelValue:p(oe).formInfo.birthday,"onUpdate:modelValue":o[13]||(o[13]=e=>p(oe).formInfo.birthday=e),label:ye("birthDate","title"),name:`${e.prefix}_birthday`,min:p(oe).birth.min,max:p(oe).birth.max,type:"date","is-view":p(Q)||e.isView,required:be("birthDate")},null,8,["modelValue","label","name","min","max","is-view","required"])):w("",!0),Ve("certExpiry")?(I(),V(d,{key:9,modelValue:p(oe).formInfo.certEndDate,"onUpdate:modelValue":o[15]||(o[15]=e=>p(oe).formInfo.certEndDate=e),label:ye("certExpiry","title"),name:`${e.prefix}_certEndDate`,type:"date",min:p(oe).certEndDate.min,max:p(oe).certEndDate.max,"is-view":p(te)||e.isView,read:"",rules:[{validator:ke}]},{extra:b((()=>[C("div",Y,[y(m,{modelValue:p(te),"onUpdate:modelValue":o[14]||(o[14]=e=>h(te)?te.value=e:null),"icon-size":16,disabled:e.isView},{default:b((()=>[k("长期")])),_:1},8,["modelValue","disabled"])])])),_:1},8,["modelValue","label","name","min","max","is-view","rules"])):w("",!0),Ve("age")?(I(),V(i,{key:10,modelValue:p(oe).formInfo.name,"onUpdate:modelValue":o[16]||(o[16]=e=>p(oe).formInfo.name=e),label:ye("age","title"),name:`${e.prefix}_age`,"is-view":e.isView,required:be("age")},null,8,["modelValue","label","name","is-view","required"])):w("",!0),Ve("residence")?(I(),V(f,{key:11,modelValue:p(oe).formInfo.extInfo.provinceCode,"onUpdate:modelValue":o[17]||(o[17]=e=>p(oe).formInfo.extInfo.provinceCode=e),field1:p(oe).formInfo.extInfo.provinceCode,"onUpdate:field1":o[18]||(o[18]=e=>p(oe).formInfo.extInfo.provinceCode=e),field2:p(oe).formInfo.extInfo.cityCode,"onUpdate:field2":o[19]||(o[19]=e=>p(oe).formInfo.extInfo.cityCode=e),field3:p(oe).formInfo.extInfo.areaCode,"onUpdate:field3":o[20]||(o[20]=e=>p(oe).formInfo.extInfo.areaCode=e),label:ye("residence","title"),name:`${e.prefix}_provinceCode`,"is-link":"","is-view":e.isView,required:be("residence"),"data-source":p(W),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):w("",!0),Ve("social")&&"insure"!==e.prefix?(I(),V(i,{key:12,modelValue:p(oe).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[22]||(o[22]=e=>p(oe).formInfo.extInfo.hasSocialInsurance=e),label:ye("social","title"),name:`${e.prefix}_hasSocialInsurance`,required:be("social")},{input:b((()=>[y(l,{modelValue:p(oe).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[21]||(o[21]=e=>p(oe).formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("social","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):w("",!0),Ve("height")?(I(),V(i,{key:13,modelValue:p(oe).formInfo.name,"onUpdate:modelValue":o[23]||(o[23]=e=>p(oe).formInfo.name=e),label:ye("height","title"),"is-view":e.isView,name:`${e.prefix}_height`,required:be("height")},null,8,["modelValue","label","is-view","name","required"])):w("",!0),Ve("weight")?(I(),V(i,{key:14,modelValue:p(oe).formInfo.name,"onUpdate:modelValue":o[24]||(o[24]=e=>p(oe).formInfo.name=e),label:ye("weight","title"),name:`${e.prefix}_weight`,"is-view":e.isView,required:be("weight")},null,8,["modelValue","label","name","is-view","required"])):w("",!0),Ve("BMI")?(I(),V(i,{key:15,modelValue:p(oe).formInfo.name,"onUpdate:modelValue":o[25]||(o[25]=e=>p(oe).formInfo.name=e),label:ye("BMI","title"),name:`${e.prefix}_BMI`,"is-view":e.isView,required:be("BMI")},null,8,["modelValue","label","name","is-view","required"])):w("",!0),Ve("insuredRiskManagementLevel")?(I(),V(i,{key:16,modelValue:p(oe).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[27]||(o[27]=e=>p(oe).formInfo.extInfo.hasSocialInsurance=e),label:ye("insuredRiskManagementLevel","title"),name:`${e.prefix}_hasSocialInsurance`,required:be("insuredRiskManagementLevel")},{input:b((()=>[y(l,{modelValue:p(oe).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[26]||(o[26]=e=>p(oe).formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("insuredRiskManagementLevel","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):w("",!0),Ve("purchaseOtherInsurance")?(I(),V(i,{key:17,modelValue:p(oe).formInfo.extInfo.purchaseOtherInsurance,"onUpdate:modelValue":o[29]||(o[29]=e=>p(oe).formInfo.extInfo.purchaseOtherInsurance=e),label:ye("purchaseOtherInsurance","title"),name:`${e.prefix}_purchaseOtherInsurance`,required:be("purchaseOtherInsurance")},{input:b((()=>[y(l,{modelValue:p(oe).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[28]||(o[28]=e=>p(oe).formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("purchaseOtherInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):w("",!0),Ve("injuryInsurance")?(I(),V(i,{key:18,modelValue:p(oe).formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":o[31]||(o[31]=e=>p(oe).formInfo.extInfo.injuryInsurance=e),label:ye("injuryInsurance","title"),name:`${e.prefix}_hasSocialInsurance`,required:be("injuryInsurance")},{input:b((()=>[y(l,{modelValue:p(oe).formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":o[30]||(o[30]=e=>p(oe).formInfo.extInfo.injuryInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("injuryInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):w("",!0),Ve("insureArea")?(I(),V(f,{key:19,label:ye("insureArea","title"),name:"insureAreaCode","is-link":"","is-view":e.isView,required:be("insureArea"),"data-source":p(W),mapping:{label:"name",value:"code",children:"children"}},null,8,["label","is-view","required","data-source"])):w("",!0),Ve("occupation")&&"insure"!==e.prefix?(I(),V(f,{key:20,modelValue:p(oe).formInfo.extInfo.occupationCodeList[0],"onUpdate:modelValue":o[32]||(o[32]=e=>p(oe).formInfo.extInfo.occupationCodeList[0]=e),field0:p(oe).formInfo.extInfo.occupationCodeList[0],"onUpdate:field0":o[33]||(o[33]=e=>p(oe).formInfo.extInfo.occupationCodeList[0]=e),field1:p(oe).formInfo.extInfo.occupationCodeList[1],"onUpdate:field1":o[34]||(o[34]=e=>p(oe).formInfo.extInfo.occupationCodeList[1]=e),field2:p(oe).formInfo.extInfo.occupationCodeList[2],"onUpdate:field2":o[35]||(o[35]=e=>p(oe).formInfo.extInfo.occupationCodeList[2]=e),label:ye("occupation","title"),name:`${e.prefix}_occupationCodeList`,"is-view":e.isView,required:be("occupation"),"data-source":p(K),mapping:{label:"value",value:"code",children:"children"},"is-link":""},null,8,["modelValue","field0","field1","field2","label","name","is-view","required","data-source"])):w("",!0),Ve("personalAnnualIncome")?(I(),V(i,{key:21,modelValue:p(oe).formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":o[36]||(o[36]=e=>p(oe).formInfo.extInfo.personalAnnualIncome=e),label:ye("personalAnnualIncome","title"),name:`${e.prefix}_personalAnnualIncome`,required:be("personalAnnualIncome"),"is-view":e.isView,rules:[{validator:_e}]},{extra:b((()=>[Z])),_:1},8,["modelValue","label","name","required","is-view","rules"])):w("",!0),Ve("familyAnnualIncome")?(I(),V(i,{key:22,modelValue:p(oe).formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":o[37]||(o[37]=e=>p(oe).formInfo.extInfo.familyAnnualIncome=e),label:ye("familyAnnualIncome","title"),name:`${e.prefix}_familyAnnualIncome`,"is-view":e.isView,rules:[{validator:_e}],required:be("familyAnnualIncome")},{extra:b((()=>[F])),_:1},8,["modelValue","label","name","is-view","rules","required"])):w("",!0),Ve("country")?(I(),V(n,{key:23,modelValue:p(oe).formInfo.extInfo.nationalityCode,"onUpdate:modelValue":o[38]||(o[38]=e=>p(oe).formInfo.extInfo.nationalityCode=e),label:ye("country","title"),name:`${e.prefix}_nationalityCode`,"data-source":ye("country","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:be("country"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):w("",!0),Ve("hasUsCard")?(I(),V(i,{key:24,modelValue:p(oe).formInfo.extInfo.hasUsCard,"onUpdate:modelValue":o[40]||(o[40]=e=>p(oe).formInfo.extInfo.hasUsCard=e),label:ye("hasUsCard","title"),name:`${e.prefix}_hasUsCard`,required:be("hasUsCard")},{input:b((()=>[y(l,{modelValue:p(oe).formInfo.extInfo.hasUsCard,"onUpdate:modelValue":o[39]||(o[39]=e=>p(oe).formInfo.extInfo.hasUsCard=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("hasUsCard","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):w("",!0),Ve("marritalStatus")?(I(),V(n,{key:25,modelValue:p(oe).formInfo.extInfo.marriageStatus,"onUpdate:modelValue":o[41]||(o[41]=e=>p(oe).formInfo.extInfo.marriageStatus=e),label:ye("marritalStatus","title"),name:`${e.prefix}_marriageStatus`,"data-source":ye("marritalStatus","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},"is-link":"","is-view":e.isView,required:be("marritalStatus")},null,8,["modelValue","label","name","data-source","is-view","required"])):w("",!0),Ve("degree")?(I(),V(n,{key:26,modelValue:p(oe).formInfo.extInfo.educationDegree,"onUpdate:modelValue":o[42]||(o[42]=e=>p(oe).formInfo.extInfo.educationDegree=e),label:ye("degree","title"),name:`${e.prefix}_educationDegree`,"data-source":ye("degree","attributeValueList")||[],mapping:{label:"name",value:"code",children:"child"},required:be("degree"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):w("",!0),Ve("mobile")?(I(),V(i,{key:27,ref_key:"phoneRef",ref:ae,modelValue:p(ie),"onUpdate:modelValue":[o[43]||(o[43]=e=>h(ie)?ie.value=e:null),o[45]||(o[45]=e=>ce(e,"mobile"))],label:ye("mobile","title"),name:`${e.prefix}_mobile`,maxlength:11,"is-view":e.isView,required:be("mobile"),"validate-type":p(le)?void 0:[p(u).PHONE],onFocus:o[44]||(o[44]=e=>pe("mobile"))},null,8,["modelValue","label","name","is-view","required","validate-type"])):w("",!0),Ve("verificationCode")?(I(),V(i,{key:28,modelValue:p(oe).formInfo.verificationCode,"onUpdate:modelValue":o[46]||(o[46]=e=>p(oe).formInfo.verificationCode=e),label:ye("verificationCode","title"),name:`${e.prefix}_verificationCode`,type:"digit",maxlength:6,"is-view":e.isView,required:be("verificationCode")},_({_:2},[e.isView?void 0:{name:"extra",fn:b((()=>[C("div",z,[y(s,{class:T(["sms-code",{"count-down":p(ue)>0}]),size:"small",plain:"",type:"primary",onClick:Ie},{default:b((()=>[k(q(p(me)),1)])),_:1},8,["class"])])])),key:"0"}]),1032,["modelValue","label","name","is-view","required"])):w("",!0),Ve("isSmoke")?(I(),V(i,{key:29,modelValue:p(oe).formInfo.isSmoke,"onUpdate:modelValue":o[48]||(o[48]=e=>p(oe).formInfo.isSmoke=e),required:be("isSmoke"),label:ye("isSmoke","title"),name:`${e.prefix}_isSmoke`,"is-view":p(Q)},{input:b((()=>[y(l,{modelValue:p(oe).formInfo.isSmoke,"onUpdate:modelValue":o[47]||(o[47]=e=>p(oe).formInfo.isSmoke=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("isSmoke","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):w("",!0),Ve("contactNo")?(I(),V(i,{key:30,modelValue:p(oe).formInfo.contactNo,"onUpdate:modelValue":o[49]||(o[49]=e=>p(oe).formInfo.contactNo=e),label:ye("contactNo","title"),name:`${e.prefix}_contactNo`,"is-view":e.isView,required:be("contactNo")},null,8,["modelValue","label","name","is-view","required"])):w("",!0),Ve("email")?(I(),V(i,{key:31,modelValue:p(oe).formInfo.email,"onUpdate:modelValue":o[50]||(o[50]=e=>p(oe).formInfo.email=e),label:ye("email","title"),name:`${e.prefix}_email`,"is-view":e.isView,required:be("email"),"validate-type":[p(u).EMAIL]},null,8,["modelValue","label","name","is-view","required","validate-type"])):w("",!0),Ve("homeAddress")?(I(),V(f,{key:32,modelValue:p(oe).formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":o[51]||(o[51]=e=>p(oe).formInfo.extInfo.familyAreaCode=e),field1:p(oe).formInfo.extInfo.familyProvinceCode,"onUpdate:field1":o[52]||(o[52]=e=>p(oe).formInfo.extInfo.familyProvinceCode=e),field2:p(oe).formInfo.extInfo.familyCityCode,"onUpdate:field2":o[53]||(o[53]=e=>p(oe).formInfo.extInfo.familyCityCode=e),field3:p(oe).formInfo.extInfo.familyAreaCode,"onUpdate:field3":o[54]||(o[54]=e=>p(oe).formInfo.extInfo.familyAreaCode=e),label:ye("homeAddress","title"),name:`${e.prefix}_familyProvinceCode`,"is-link":"","is-view":e.isView,required:be("homeAddress"),"data-source":p(W),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):w("",!0),Ve("homeAddressDetail")?(I(),V(i,{key:33,modelValue:p(oe).formInfo.extInfo.familyAddress,"onUpdate:modelValue":o[55]||(o[55]=e=>p(oe).formInfo.extInfo.familyAddress=e),label:ye("homeAddressDetail","title"),name:`${e.prefix}_familyAddress`,"is-view":e.isView,maxlength:99,rules:[{validator:qe}],required:be("homeAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):w("",!0),Ve("homePostalCode")?(I(),V(i,{key:34,modelValue:p(oe).formInfo.extInfo.familyZipCode,"onUpdate:modelValue":o[56]||(o[56]=e=>p(oe).formInfo.extInfo.familyZipCode=e),label:ye("homePostalCode","title"),name:`${e.prefix}_familyZipCode`,"is-view":e.isView,required:be("homePostalCode"),"validate-type":[p(u).ZIP_CODE]},null,8,["modelValue","label","name","is-view","required","validate-type"])):w("",!0),Ve("workAddress")?(I(),V(f,{key:35,modelValue:p(oe).formInfo.extInfo.workAreaCode,"onUpdate:modelValue":o[57]||(o[57]=e=>p(oe).formInfo.extInfo.workAreaCode=e),field1:p(oe).formInfo.extInfo.workProvinceCode,"onUpdate:field1":o[58]||(o[58]=e=>p(oe).formInfo.extInfo.workProvinceCode=e),field2:p(oe).formInfo.extInfo.workCityCode,"onUpdate:field2":o[59]||(o[59]=e=>p(oe).formInfo.extInfo.workCityCode=e),field3:p(oe).formInfo.extInfo.workAreaCode,"onUpdate:field3":o[60]||(o[60]=e=>p(oe).formInfo.extInfo.workAreaCode=e),label:ye("workAddress","title"),name:`${e.prefix}_workProvinceCode`,"is-link":"","is-view":e.isView,required:be("workAddress"),"data-source":p(W),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):w("",!0),Ve("workAddressDetail")?(I(),V(i,{key:36,modelValue:p(oe).formInfo.extInfo.workAddress,"onUpdate:modelValue":o[61]||(o[61]=e=>p(oe).formInfo.extInfo.workAddress=e),label:ye("workAddressDetail","title"),name:`${e.prefix}_workAddress`,"is-view":e.isView,rules:[{validator:qe}],required:be("workAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):w("",!0),Ve("workPostalCode")?(I(),V(i,{key:37,modelValue:p(oe).formInfo.extInfo.workZipCode,"onUpdate:modelValue":o[62]||(o[62]=e=>p(oe).formInfo.extInfo.workZipCode=e),label:ye("workPostalCode","title"),required:be("workZipCode"),name:`${e.prefix}_workPostCode`,"is-view":e.isView,"validate-type":[p(u).ZIP_CODE]},null,8,["modelValue","label","required","name","is-view","validate-type"])):w("",!0),Ve("companyName")?(I(),V(i,{key:38,modelValue:p(oe).formInfo.extInfo.workStation,"onUpdate:modelValue":o[63]||(o[63]=e=>p(oe).formInfo.extInfo.workStation=e),label:ye("companyName","title"),name:`${e.prefix}_workPostCode`,"is-view":e.isView,rules:[{validator:(...e)=>Ue(20,...e)}],required:be("companyName")},null,8,["modelValue","label","name","is-view","rules","required"])):w("",!0),Ve("workContent")?(I(),V(i,{key:39,modelValue:p(oe).formInfo.extInfo.workContent,"onUpdate:modelValue":o[64]||(o[64]=e=>p(oe).formInfo.extInfo.workContent=e),label:ye("workContent","title"),name:`${e.prefix}_workContent`,required:be("workContent"),"is-view":e.isView,rules:[{validator:(...e)=>Ue(100,...e)}]},null,8,["modelValue","label","name","required","is-view","rules"])):w("",!0),Ve("chineseTaxResident")?(I(),V(i,{key:40,modelValue:p(oe).formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":o[66]||(o[66]=e=>p(oe).formInfo.extInfo.chineseTaxResident=e),label:ye("chineseTaxResident","title"),name:`${e.prefix}_taxResident`,required:be("chineseTaxResident")},{input:b((()=>[y(l,{modelValue:p(oe).formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":o[65]||(o[65]=e=>p(oe).formInfo.extInfo.chineseTaxResident=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("chineseTaxResident","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):w("",!0),Ve("taxResident")?(I(),V(n,{key:41,modelValue:p(oe).formInfo.taxResident,"onUpdate:modelValue":o[67]||(o[67]=e=>p(oe).formInfo.taxResident=e),"is-view":e.isView,label:ye("taxResident","title"),name:`${e.prefix}_benefitOrder`,"data-source":ye("taxResident","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:be("taxResident")},null,8,["modelValue","is-view","label","name","data-source","required"])):w("",!0),Ve("partTimeJob")?(I(),V(i,{key:42,modelValue:p(oe).formInfo.extInfo.isPartTime,"onUpdate:modelValue":o[69]||(o[69]=e=>p(oe).formInfo.extInfo.isPartTime=e),label:ye("partTimeJob","title"),name:`${e.prefix}_isPartTime`,required:be("partTimeJob")},{input:b((()=>[y(l,{modelValue:p(oe).formInfo.extInfo.isPartTime,"onUpdate:modelValue":o[68]||(o[68]=e=>p(oe).formInfo.extInfo.isPartTime=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("partTimeJob","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):w("",!0),Ve("benefitOrder")?(I(),V(n,{key:43,modelValue:p(oe).formInfo.benefitOrder,"onUpdate:modelValue":o[70]||(o[70]=e=>p(oe).formInfo.benefitOrder=e),label:ye("benefitOrder","title"),name:`${e.prefix}_benefitOrder`,"is-view":e.isView,"data-source":ye("benefitOrder","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:be("benefitOrder")},null,8,["modelValue","label","name","is-view","data-source","required"])):w("",!0),Ve("benefitRate")?(I(),V(i,{key:44,modelValue:p(oe).formInfo.benefitRate,"onUpdate:modelValue":o[71]||(o[71]=e=>p(oe).formInfo.benefitRate=e),required:be("benefitRate"),name:`${e.prefix}_benefitRate`,"is-view":e.isView,rules:[{validator:Te}],label:ye("benefitRate","title")},{extra:b((()=>[G])),_:1},8,["modelValue","required","name","is-view","rules","label"])):w("",!0),x(a.$slots,"default")])):w("",!0)}}});export{J as _};
