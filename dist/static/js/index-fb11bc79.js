import{d as e,G as a,a as l,r as o,x as i,$ as n,a2 as r,ap as t,a7 as u,aq as d,ar as s,as as f,b as m,l as v,c,g as I,e as p,w as V,f as b,j as w,a8 as x,ay as y,i as C,aJ as h,n as R,t as k,B as U,T as O,Y as T,u as _,z as L}from"./index-6a34609b.js";import{R as g}from"./infoCollection-a2cc3706.js";import{r as q}from"./relativeTime-db269b7c.js";import{v as E}from"./validator-5a13dc82.js";import{u as S}from"./useDicData-c8a3ea4e.js";import"./pdfdist-5d72820d.js";const A={key:0,class:"com-personal-wrapper"},D={class:"date-extra"},$=R("长期"),N=C("span",{class:"input-extra"},"万",-1),H=C("span",{class:"input-extra"},"万",-1),P={class:"button-extra"},j=C("span",{class:"input-extra"},"%",-1),B=e({props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]},sendSmsCode:{type:Function,default:(e,a)=>{}},needDesensitize:{type:Boolean,default:!1}},emits:["update:images"],setup(e,{emit:_}){const L=e;a();const{venderCode:B=""}=l().query,M=S(`${B.toLocaleUpperCase()}_OCCUPATION`),Y=S("NATIONAL_REGION_CODE"),F=o([]),z=o(!1),Z=o(),G=o(),J=o({formInfo:L.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""}),K=o(!1),W=i((()=>K.value?(J.value.formInfo.mobile||"").replace(/^(.{3})(?:\d+)(.{4})$/,"$1****$2"):L.formInfo.mobile)),X=o(!1),Q=i((()=>X.value?(J.value.formInfo.certNo||"").replace(/^(.{6})(?:\d+)(.{2})$/,"$1**********$2"):L.formInfo.certNo));n.extend(q);const ee=o(2===L.formInfo.certEndType),ae=o(0),le=o("验证码"),oe=o(!1),ie=i((()=>{const e={};return L.factorList.forEach((a=>{e[a.code]=a})),e})),ne=(e,a)=>{J.value.formInfo[a]=e};i((()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(J.value.formInfo.mobile)));const re=e=>{"mobile"===e&&(K.value=!1),"certNo"===e&&(X.value=!1)},te=async()=>{ae.value>0||L.sendSmsCode({mobile:J.value.formInfo.mobile,type:L.prefix},(()=>{oe.value=!0,O({message:"短信发送成功，请查收"}),(()=>{if(ae.value>0)return;ae.value=60;const e=()=>{le.value=`${ae.value}s`,ae.value-=1};e();const a=setInterval((()=>{0===ae.value?(le.value="验证码",ae.value=0,clearInterval(a)):e()}),1e3)})()}))},ue=e=>{J.value.formInfo.certNo=e.personIdCard,J.value.formInfo.name=e.personName,J.value.formInfo.certEndDate=n(e.validDateEnd,"YYYYMMDD").toDate()},de=e=>{var a;return ie.value&&ie.value[e]&&(null==(a=ie.value[e])?void 0:a.isDisplay)===T.YES},se=e=>ie.value&&ie.value[e]&&ie.value[e].isMustInput===T.YES,fe=(e,a)=>{var l,o;return(null==(o=null==(l=ie.value)?void 0:l[e])?void 0:o[a])||""},me=i((()=>{var e;if(!de("certType"))return J.value.formInfo.certType=+r.CERT,!1;const a=fe("certType","attributeValueList")||[];return 1!==a.length||(null==(e=a[0])?void 0:e.code)!==r.CERT||(J.value.formInfo.certType=+r.CERT,!1)})),ve=i((()=>{var e,a,l;return(null==(e=fe("certType","attributeValueList"))?void 0:e.length)>1?"证件号码":"insure"===L.prefix&&(null==(a=J.value.formInfo)?void 0:a.relationToHolder)===g.CHILD?"身份证号(户口簿)":(null==(l=fe("certType","attributeValueList"))?void 0:l[0].code)===r.CERT?"身份证号":fe("certType","title")})),ce=(e,a)=>E(e)?"":"请输入正确的姓名",Ie=i((()=>[r.CERT,r.HOUSE_HOLD].includes(`${J.value.formInfo.certType}`)?[t.ID_CARD]:`${J.value.formInfo.certType}`===r.BIRTH?[t.BIRTH]:`${J.value.formInfo.certType}`===r.PASSPORT?[t.PASSPORT]:`${J.value.formInfo.certType}`===r.SOCIAL_CREDIT_CODE?[t.SOCIAL_CREDIT_CODE]:`${J.value.formInfo.certType}`===r.OTHER?[t.OTHER]:[t.ID_CARD])),pe=(e,a)=>se("attachment")?2===J.value.formInfo.certEndType||J.value.formInfo.certEndDate?"":"请选择有效期至":"",Ve=(e,a)=>/^\d{1,10}(\.\d{1,2})?$/.test(e)?"":"年收入最多录入10位数字",be=(e,a)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(e)?"":"收益比例只能填写1-100的正整数",we=(e,a,l)=>a.length>e?`最大不能超过${e}个字符`:"",xe=(e,a)=>{var l,o,i,t,u,d,s;if(!de("nationality"))return"";if("CHN"===(null==(o=null==(l=J.value.formInfo)?void 0:l.extInfo)?void 0:o.nationalityCode)){if(![r.CERT,r.HOUSE_HOLD,r.BIRTH,r.MILITARY_CARD].includes(`${e}`))return"国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证"}else if(["HKG","MAC"].includes(null==(t=null==(i=J.value.formInfo)?void 0:i.extInfo)?void 0:t.nationalityCode)){if(![r.HK_MACAO_RESIDENCE_PERMIT,r.HONGKONG_MACAO].includes(`${e}`))return"国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证"}else if("TWN"===(null==(d=null==(u=J.value.formInfo)?void 0:u.extInfo)?void 0:d.nationalityCode)){if(![r.TAIWAN_RESIDENCE_PERMIT,r.TAIWAN_TRAVEL].includes(`${e}`))return"国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证"}else if(![r.PASSPORT,r.FOREIGN_PERMANENT].includes(`${e}`))return"国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证";return n().year()-n(null==(s=J.value.formInfo)?void 0:s.birthday).year()>2&&e===r.BIRTH?"年龄大于等于2周岁时，证件类型不能选择出生证":""},ye=e=>Array.isArray(e)&&2===e.length&&e[0]&&e[1]?"":"请上传身份证正反面照片";return u((()=>ee.value),(e=>{e?(J.value.formInfo.certEndType=2,J.value.formInfo.certEndDate=""):J.value.formInfo.certEndType=1}),{immediate:!0}),u((()=>J.value.formInfo.mobile),(()=>{var e;J.value.formInfo.mobile=null==(e=J.value.formInfo.mobile)?void 0:e.replace(/[\u4e00-\u9fa5/\s+/]|[^0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),u([()=>J.value.formInfo.certNo,()=>J.value.formInfo.mobile],(()=>{var e,a;J.value.formInfo.certNo=null==(e=J.value.formInfo.certNo)?void 0:e.replace(/[\u4e00-\u9fa5/\s+/]/g,""),J.value.formInfo.mobile=null==(a=J.value.formInfo.mobile)?void 0:a.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),u((()=>L.needDesensitize),((e=!1)=>{K.value=e,X.value=e}),{immediate:!0}),u((()=>J.value.formInfo.certType),(e=>{[r.CERT,r.HOUSE_HOLD].includes(e)?z.value=!0:z.value=!1}),{deep:!0,immediate:!0}),u([()=>J.value.formInfo.certNo,()=>J.value.formInfo.certType],(([e])=>{[r.CERT,r.BIRTH].includes(`${J.value.formInfo.certType}`)&&(d(e)?(J.value.formInfo.gender=+s(e),J.value.formInfo.birthday=n(new Date(f(e))).format("YYYY-MM-DD")):(J.value.formInfo.gender=null,J.value.formInfo.birthday=""))}),{deep:!0,immediate:!0}),u((()=>L.images),(e=>{F.value=e}),{immediate:!0}),u((()=>L.formInfo),(()=>{J.value.formInfo=L.formInfo}),{deep:!0,immediate:!0}),u(F,(e=>{_("update:images",e)}),{deep:!0}),(a,l)=>{const o=m("ProRadioButton"),i=m("ProField"),n=m("ProPicker"),r=m("ProIDCardUpload"),u=m("ProImageUpload"),d=m("ProDatePicker"),s=m("van-checkbox"),f=m("ProCascader"),O=m("van-button");return Object.keys(v(ie)).length?(c(),I("div",A,[de("insuredBeneficiaryType")?(c(),p(i,{key:0,modelValue:J.value.formInfo.insuredBeneficiaryType,"onUpdate:modelValue":l[1]||(l[1]=e=>J.value.formInfo.insuredBeneficiaryType=e),label:fe("insuredBeneficiaryType","title"),name:"insuredBeneficiaryType"},{input:V((()=>[b(o,{modelValue:J.value.formInfo.insuredBeneficiaryType,"onUpdate:modelValue":l[0]||(l[0]=e=>J.value.formInfo.insuredBeneficiaryType=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("insuredBeneficiaryType","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):w("",!0),de("insuredRelation")?(c(),p(i,{key:1,modelValue:J.value.formInfo.insuredRelation,"onUpdate:modelValue":l[3]||(l[3]=e=>J.value.formInfo.insuredRelation=e),label:fe("insuredRelation","title"),name:"insuredRelation"},{input:V((()=>[b(o,{modelValue:J.value.formInfo.insuredRelation,"onUpdate:modelValue":l[2]||(l[2]=e=>J.value.formInfo.insuredRelation=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("insuredRelation","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):w("",!0),de("name")?(c(),p(i,{key:2,modelValue:J.value.formInfo.name,"onUpdate:modelValue":l[4]||(l[4]=e=>J.value.formInfo.name=e),label:fe("name","title"),name:`${e.prefix}_name`,"is-view":e.isView,required:se("name"),rules:[{validator:ce}]},{"right-icon":V((()=>[x(a.$slots,"name")])),_:3},8,["modelValue","label","name","is-view","required","rules"])):w("",!0),de("sex")?(c(),p(i,{key:3,modelValue:J.value.formInfo.gender,"onUpdate:modelValue":l[6]||(l[6]=e=>J.value.formInfo.gender=e),required:se("sex"),label:fe("sex","title"),name:`${e.prefix}_gender`,"is-view":z.value},{input:V((()=>[b(o,{modelValue:J.value.formInfo.gender,"onUpdate:modelValue":l[5]||(l[5]=e=>J.value.formInfo.gender=e),disabled:z.value,"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("sex","attributeValueList")||[]},null,8,["modelValue","disabled","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):w("",!0),v(me)?(c(),p(n,{key:4,modelValue:J.value.formInfo.certType,"onUpdate:modelValue":l[7]||(l[7]=e=>J.value.formInfo.certType=e),label:fe("certType","title"),name:`${e.prefix}_certType`,"data-source":fe("certType","attributeValueList"),mapping:{label:"value",value:"code",children:"child"},required:se("certType"),rules:[{validator:xe}],"is-view":e.isView},null,8,["modelValue","label","name","data-source","required","rules","is-view"])):w("",!0),de("certImage")&&J.value.formInfo.certType+""=="1"?(c(),p(i,{key:5,label:"身份证上传",block:"",required:se("certImage"),rules:[{validator:ye}],name:`${e.prefix}_idCard`},{input:V((()=>[b(r,{modelValue:F.value,"onUpdate:modelValue":l[8]||(l[8]=e=>F.value=e),"is-view":e.isView,onOnOCR:ue},null,8,["modelValue","is-view"])])),_:1},8,["required","rules","name"])):w("",!0),de("certImage")&&J.value.formInfo.certType&&J.value.formInfo.certType+""!="1"?(c(),p(i,{key:6,label:fe("certImage","title"),block:"",required:se("certImage")},{input:V((()=>[b(u,{modelValue:F.value,"onUpdate:modelValue":l[9]||(l[9]=e=>F.value=e),"is-view":e.isView,"max-count":1},null,8,["modelValue","is-view"])])),_:1},8,["label","required"])):w("",!0),de("certNo")?(c(),p(i,{key:7,ref_key:"certNoRef",ref:Z,modelValue:v(Q),"onUpdate:modelValue":[l[10]||(l[10]=e=>y(Q)?Q.value=e:null),l[12]||(l[12]=e=>ne(e,"certNo"))],label:v(ve),name:`${e.prefix}_certNo`,required:se("certNo"),maxlength:18,"is-view":e.isView,"validate-type":X.value?void 0:v(Ie),onFocus:l[11]||(l[11]=e=>re("certNo"))},null,8,["modelValue","label","name","required","is-view","validate-type"])):w("",!0),de("birthDate")?(c(),p(d,{key:8,modelValue:J.value.formInfo.birthday,"onUpdate:modelValue":l[13]||(l[13]=e=>J.value.formInfo.birthday=e),label:fe("birthDate","title"),name:`${e.prefix}_birthday`,min:J.value.birth.min,max:J.value.birth.max,type:"date","is-view":z.value||e.isView,required:se("birthDate")},null,8,["modelValue","label","name","min","max","is-view","required"])):w("",!0),de("certExpiry")?(c(),p(d,{key:9,modelValue:J.value.formInfo.certEndDate,"onUpdate:modelValue":l[15]||(l[15]=e=>J.value.formInfo.certEndDate=e),label:fe("certExpiry","title"),name:`${e.prefix}_certEndDate`,type:"date",min:J.value.certEndDate.min,max:J.value.certEndDate.max,"is-view":ee.value||e.isView,read:"",rules:[{validator:pe}]},{extra:V((()=>[C("div",D,[b(s,{modelValue:ee.value,"onUpdate:modelValue":l[14]||(l[14]=e=>ee.value=e),"icon-size":16,disabled:e.isView},{default:V((()=>[$])),_:1},8,["modelValue","disabled"])])])),_:1},8,["modelValue","label","name","min","max","is-view","rules"])):w("",!0),de("age")?(c(),p(i,{key:10,modelValue:J.value.formInfo.name,"onUpdate:modelValue":l[16]||(l[16]=e=>J.value.formInfo.name=e),label:fe("age","title"),name:`${e.prefix}_age`,"is-view":e.isView,required:se("age")},null,8,["modelValue","label","name","is-view","required"])):w("",!0),de("residence")?(c(),p(f,{key:11,modelValue:J.value.formInfo.extInfo.provinceCode,"onUpdate:modelValue":l[17]||(l[17]=e=>J.value.formInfo.extInfo.provinceCode=e),field1:J.value.formInfo.extInfo.provinceCode,"onUpdate:field1":l[18]||(l[18]=e=>J.value.formInfo.extInfo.provinceCode=e),field2:J.value.formInfo.extInfo.cityCode,"onUpdate:field2":l[19]||(l[19]=e=>J.value.formInfo.extInfo.cityCode=e),field3:J.value.formInfo.extInfo.areaCode,"onUpdate:field3":l[20]||(l[20]=e=>J.value.formInfo.extInfo.areaCode=e),label:fe("residence","title"),name:`${e.prefix}_provinceCode`,"is-link":"","is-view":e.isView,required:se("residence"),"data-source":v(Y),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):w("",!0),de("social")&&"insure"===e.prefix?(c(),p(i,{key:12,modelValue:J.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[22]||(l[22]=e=>J.value.formInfo.extInfo.hasSocialInsurance=e),label:fe("social","title"),name:`${e.prefix}_hasSocialInsurance`,required:se("social")},{input:V((()=>[b(o,{modelValue:J.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[21]||(l[21]=e=>J.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("social","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):w("",!0),de("height")?(c(),p(i,{key:13,modelValue:J.value.formInfo.name,"onUpdate:modelValue":l[23]||(l[23]=e=>J.value.formInfo.name=e),label:fe("height","title"),"is-view":e.isView,name:`${e.prefix}_height`,required:se("height")},null,8,["modelValue","label","is-view","name","required"])):w("",!0),de("weight")?(c(),p(i,{key:14,modelValue:J.value.formInfo.name,"onUpdate:modelValue":l[24]||(l[24]=e=>J.value.formInfo.name=e),label:fe("weight","title"),name:`${e.prefix}_weight`,"is-view":e.isView,required:se("weight")},null,8,["modelValue","label","name","is-view","required"])):w("",!0),de("BMI")?(c(),p(i,{key:15,modelValue:J.value.formInfo.name,"onUpdate:modelValue":l[25]||(l[25]=e=>J.value.formInfo.name=e),label:fe("BMI","title"),name:`${e.prefix}_BMI`,"is-view":e.isView,required:se("BMI")},null,8,["modelValue","label","name","is-view","required"])):w("",!0),de("insuredRiskManagementLevel")?(c(),p(i,{key:16,modelValue:J.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[27]||(l[27]=e=>J.value.formInfo.extInfo.hasSocialInsurance=e),label:fe("insuredRiskManagementLevel","title"),name:`${e.prefix}_hasSocialInsurance`,required:se("insuredRiskManagementLevel")},{input:V((()=>[b(o,{modelValue:J.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[26]||(l[26]=e=>J.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("insuredRiskManagementLevel","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):w("",!0),de("purchaseOtherInsurance")?(c(),p(i,{key:17,modelValue:J.value.formInfo.extInfo.purchaseOtherInsurance,"onUpdate:modelValue":l[29]||(l[29]=e=>J.value.formInfo.extInfo.purchaseOtherInsurance=e),label:fe("purchaseOtherInsurance","title"),name:`${e.prefix}_purchaseOtherInsurance`,required:se("purchaseOtherInsurance")},{input:V((()=>[b(o,{modelValue:J.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[28]||(l[28]=e=>J.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("purchaseOtherInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):w("",!0),de("injuryInsurance")?(c(),p(i,{key:18,modelValue:J.value.formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":l[31]||(l[31]=e=>J.value.formInfo.extInfo.injuryInsurance=e),label:fe("injuryInsurance","title"),name:`${e.prefix}_hasSocialInsurance`,required:se("injuryInsurance")},{input:V((()=>[b(o,{modelValue:J.value.formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":l[30]||(l[30]=e=>J.value.formInfo.extInfo.injuryInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("injuryInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):w("",!0),de("insureArea")?(c(),p(f,{key:19,label:fe("insureArea","title"),name:"insureAreaCode","is-link":"","is-view":e.isView,required:se("insureArea"),"data-source":v(Y),mapping:{label:"name",value:"code",children:"children"}},null,8,["label","is-view","required","data-source"])):w("",!0),de("occupation")?(c(),p(f,{key:20,modelValue:J.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:modelValue":l[32]||(l[32]=e=>J.value.formInfo.extInfo.occupationCodeList[0]=e),field0:J.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:field0":l[33]||(l[33]=e=>J.value.formInfo.extInfo.occupationCodeList[0]=e),field1:J.value.formInfo.extInfo.occupationCodeList[1],"onUpdate:field1":l[34]||(l[34]=e=>J.value.formInfo.extInfo.occupationCodeList[1]=e),field2:J.value.formInfo.extInfo.occupationCodeList[2],"onUpdate:field2":l[35]||(l[35]=e=>J.value.formInfo.extInfo.occupationCodeList[2]=e),label:fe("occupation","title"),name:`${e.prefix}_occupationCodeList`,"is-view":e.isView,required:se("occupation"),"data-source":v(M),mapping:{label:"name",value:"code",children:"children"},"is-link":""},null,8,["modelValue","field0","field1","field2","label","name","is-view","required","data-source"])):w("",!0),de("personalAnnualIncome")?(c(),p(i,{key:21,modelValue:J.value.formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":l[36]||(l[36]=e=>J.value.formInfo.extInfo.personalAnnualIncome=e),label:fe("personalAnnualIncome","title"),name:`${e.prefix}_personalAnnualIncome`,required:se("personalAnnualIncome"),"is-view":e.isView,rules:[{validator:Ve}]},{extra:V((()=>[N])),_:1},8,["modelValue","label","name","required","is-view","rules"])):w("",!0),de("familyAnnualIncome")?(c(),p(i,{key:22,modelValue:J.value.formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":l[37]||(l[37]=e=>J.value.formInfo.extInfo.familyAnnualIncome=e),label:fe("familyAnnualIncome","title"),name:`${e.prefix}_familyAnnualIncome`,"is-view":e.isView,rules:[{validator:Ve}],required:se("familyAnnualIncome")},{extra:V((()=>[H])),_:1},8,["modelValue","label","name","is-view","rules","required"])):w("",!0),de("country")?(c(),p(n,{key:23,modelValue:J.value.formInfo.extInfo.nationalityCode,"onUpdate:modelValue":l[38]||(l[38]=e=>J.value.formInfo.extInfo.nationalityCode=e),label:fe("country","title"),name:`${e.prefix}_nationalityCode`,"data-source":fe("country","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:se("country"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):w("",!0),de("hasUsCard")?(c(),p(i,{key:24,modelValue:J.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":l[40]||(l[40]=e=>J.value.formInfo.extInfo.hasUsCard=e),label:fe("hasUsCard","title"),name:`${e.prefix}_hasUsCard`,required:se("hasUsCard")},{input:V((()=>[b(o,{modelValue:J.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":l[39]||(l[39]=e=>J.value.formInfo.extInfo.hasUsCard=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("hasUsCard","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):w("",!0),de("marritalStatus")?(c(),p(n,{key:25,modelValue:J.value.formInfo.extInfo.marriageStatus,"onUpdate:modelValue":l[41]||(l[41]=e=>J.value.formInfo.extInfo.marriageStatus=e),label:fe("marritalStatus","title"),name:`${e.prefix}_marriageStatus`,"data-source":fe("marritalStatus","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},"is-link":"","is-view":e.isView,required:se("marritalStatus")},null,8,["modelValue","label","name","data-source","is-view","required"])):w("",!0),de("degree")?(c(),p(n,{key:26,modelValue:J.value.formInfo.extInfo.educationDegree,"onUpdate:modelValue":l[42]||(l[42]=e=>J.value.formInfo.extInfo.educationDegree=e),label:fe("degree","title"),name:`${e.prefix}_educationDegree`,"data-source":fe("degree","attributeValueList")||[],mapping:{label:"name",value:"code",children:"child"},required:se("degree"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):w("",!0),de("mobile")?(c(),p(i,{key:27,ref_key:"phoneRef",ref:G,modelValue:v(W),"onUpdate:modelValue":[l[43]||(l[43]=e=>y(W)?W.value=e:null),l[45]||(l[45]=e=>ne(e,"mobile"))],label:fe("mobile","title"),name:`${e.prefix}_mobile`,maxlength:11,"is-view":e.isView,required:se("mobile"),"validate-type":K.value?void 0:[v(t).PHONE],onFocus:l[44]||(l[44]=e=>re("mobile"))},null,8,["modelValue","label","name","is-view","required","validate-type"])):w("",!0),de("verificationCode")?(c(),p(i,{key:28,modelValue:J.value.formInfo.verificationCode,"onUpdate:modelValue":l[46]||(l[46]=e=>J.value.formInfo.verificationCode=e),label:fe("verificationCode","title"),name:`${e.prefix}_verificationCode`,type:"digit",maxlength:6,"is-view":e.isView,required:se("verificationCode")},h({_:2},[e.isView?void 0:{name:"extra",fn:V((()=>[C("div",P,[b(O,{class:U(["sms-code",{"count-down":ae.value>0}]),size:"small",plain:"",type:"primary",onClick:te},{default:V((()=>[R(k(le.value),1)])),_:1},8,["class"])])]))}]),1032,["modelValue","label","name","is-view","required"])):w("",!0),de("isSmoke")?(c(),p(i,{key:29,modelValue:J.value.formInfo.isSmoke,"onUpdate:modelValue":l[48]||(l[48]=e=>J.value.formInfo.isSmoke=e),required:se("isSmoke"),label:fe("isSmoke","title"),name:`${e.prefix}_isSmoke`,"is-view":z.value},{input:V((()=>[b(o,{modelValue:J.value.formInfo.isSmoke,"onUpdate:modelValue":l[47]||(l[47]=e=>J.value.formInfo.isSmoke=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("isSmoke","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):w("",!0),de("contactNo")?(c(),p(i,{key:30,modelValue:J.value.formInfo.contactNo,"onUpdate:modelValue":l[49]||(l[49]=e=>J.value.formInfo.contactNo=e),label:fe("contactNo","title"),name:`${e.prefix}_contactNo`,"is-view":e.isView,required:se("contactNo")},null,8,["modelValue","label","name","is-view","required"])):w("",!0),de("email")?(c(),p(i,{key:31,modelValue:J.value.formInfo.email,"onUpdate:modelValue":l[50]||(l[50]=e=>J.value.formInfo.email=e),label:fe("email","title"),name:`${e.prefix}_email`,"is-view":e.isView,required:se("email"),"validate-type":[v(t).EMAIL]},null,8,["modelValue","label","name","is-view","required","validate-type"])):w("",!0),de("homeAddress")?(c(),p(f,{key:32,modelValue:J.value.formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":l[51]||(l[51]=e=>J.value.formInfo.extInfo.familyAreaCode=e),field1:J.value.formInfo.extInfo.familyProvinceCode,"onUpdate:field1":l[52]||(l[52]=e=>J.value.formInfo.extInfo.familyProvinceCode=e),field2:J.value.formInfo.extInfo.familyCityCode,"onUpdate:field2":l[53]||(l[53]=e=>J.value.formInfo.extInfo.familyCityCode=e),field3:J.value.formInfo.extInfo.familyAreaCode,"onUpdate:field3":l[54]||(l[54]=e=>J.value.formInfo.extInfo.familyAreaCode=e),label:fe("homeAddress","title"),name:`${e.prefix}_familyProvinceCode`,"is-link":"","is-view":e.isView,required:se("homeAddress"),"data-source":v(Y),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):w("",!0),de("homeAddressDetail")?(c(),p(i,{key:33,modelValue:J.value.formInfo.extInfo.familyAddress,"onUpdate:modelValue":l[55]||(l[55]=e=>J.value.formInfo.extInfo.familyAddress=e),label:fe("homeAddressDetail","title"),name:`${e.prefix}_familyAddress`,"is-view":e.isView,rules:[{validator:(...e)=>we(100,...e)}],required:se("homeAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):w("",!0),de("homePostalCode")?(c(),p(i,{key:34,modelValue:J.value.formInfo.extInfo.familyZipCode,"onUpdate:modelValue":l[56]||(l[56]=e=>J.value.formInfo.extInfo.familyZipCode=e),label:fe("homePostalCode","title"),name:`${e.prefix}_familyZipCode`,"is-view":e.isView,required:se("homePostalCode"),"validate-type":[v(t).ZIP_CODE]},null,8,["modelValue","label","name","is-view","required","validate-type"])):w("",!0),de("workAddress")?(c(),p(f,{key:35,modelValue:J.value.formInfo.extInfo.workAreaCode,"onUpdate:modelValue":l[57]||(l[57]=e=>J.value.formInfo.extInfo.workAreaCode=e),field1:J.value.formInfo.extInfo.workProvinceCode,"onUpdate:field1":l[58]||(l[58]=e=>J.value.formInfo.extInfo.workProvinceCode=e),field2:J.value.formInfo.extInfo.workCityCode,"onUpdate:field2":l[59]||(l[59]=e=>J.value.formInfo.extInfo.workCityCode=e),field3:J.value.formInfo.extInfo.workAreaCode,"onUpdate:field3":l[60]||(l[60]=e=>J.value.formInfo.extInfo.workAreaCode=e),label:fe("workAddress","title"),name:`${e.prefix}_workProvinceCode`,"is-link":"","is-view":e.isView,required:se("workAddress"),"data-source":v(Y),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):w("",!0),de("workAddressDetail")?(c(),p(i,{key:36,modelValue:J.value.formInfo.extInfo.workAddress,"onUpdate:modelValue":l[61]||(l[61]=e=>J.value.formInfo.extInfo.workAddress=e),label:fe("workAddressDetail","title"),name:`${e.prefix}_workAddress`,"is-view":e.isView,rules:[{validator:(...e)=>we(100,...e)}],required:se("workAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):w("",!0),de("workPostalCode")?(c(),p(i,{key:37,modelValue:J.value.formInfo.extInfo.workZipCode,"onUpdate:modelValue":l[62]||(l[62]=e=>J.value.formInfo.extInfo.workZipCode=e),label:fe("workPostalCode","title"),required:se("workZipCode"),name:`${e.prefix}_workPostCode`,"is-view":e.isView,"validate-type":[v(t).ZIP_CODE]},null,8,["modelValue","label","required","name","is-view","validate-type"])):w("",!0),de("companyName")?(c(),p(i,{key:38,modelValue:J.value.formInfo.extInfo.workStation,"onUpdate:modelValue":l[63]||(l[63]=e=>J.value.formInfo.extInfo.workStation=e),label:fe("companyName","title"),name:`${e.prefix}_workPostCode`,"is-view":e.isView,rules:[{validator:(...e)=>we(20,...e)}],required:se("companyName")},null,8,["modelValue","label","name","is-view","rules","required"])):w("",!0),de("workContent")?(c(),p(i,{key:39,modelValue:J.value.formInfo.extInfo.workContent,"onUpdate:modelValue":l[64]||(l[64]=e=>J.value.formInfo.extInfo.workContent=e),label:fe("workContent","title"),name:`${e.prefix}_workContent`,required:se("workContent"),"is-view":e.isView,rules:[{validator:(...e)=>we(100,...e)}]},null,8,["modelValue","label","name","required","is-view","rules"])):w("",!0),de("chineseTaxResident")?(c(),p(i,{key:40,modelValue:J.value.formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":l[66]||(l[66]=e=>J.value.formInfo.extInfo.chineseTaxResident=e),label:fe("chineseTaxResident","title"),name:`${e.prefix}_taxResident`,required:se("chineseTaxResident")},{input:V((()=>[b(o,{modelValue:J.value.formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":l[65]||(l[65]=e=>J.value.formInfo.extInfo.chineseTaxResident=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("chineseTaxResident","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):w("",!0),de("taxResident")?(c(),p(n,{key:41,modelValue:J.value.formInfo.taxResident,"onUpdate:modelValue":l[67]||(l[67]=e=>J.value.formInfo.taxResident=e),"is-view":e.isView,label:fe("taxResident","title"),name:`${e.prefix}_benefitOrder`,"data-source":fe("taxResident","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:se("taxResident")},null,8,["modelValue","is-view","label","name","data-source","required"])):w("",!0),de("partTimeJob")?(c(),p(i,{key:42,modelValue:J.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":l[69]||(l[69]=e=>J.value.formInfo.extInfo.isPartTime=e),label:fe("partTimeJob","title"),name:`${e.prefix}_isPartTime`,required:se("partTimeJob")},{input:V((()=>[b(o,{modelValue:J.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":l[68]||(l[68]=e=>J.value.formInfo.extInfo.isPartTime=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("partTimeJob","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):w("",!0),de("benefitOrder")?(c(),p(n,{key:43,modelValue:J.value.formInfo.benefitOrder,"onUpdate:modelValue":l[70]||(l[70]=e=>J.value.formInfo.benefitOrder=e),label:fe("benefitOrder","title"),name:`${e.prefix}_benefitOrder`,"is-view":e.isView,"data-source":fe("benefitOrder","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:se("benefitOrder")},null,8,["modelValue","label","name","is-view","data-source","required"])):w("",!0),de("benefitRate")?(c(),p(i,{key:44,modelValue:J.value.formInfo.benefitRate,"onUpdate:modelValue":l[71]||(l[71]=e=>J.value.formInfo.benefitRate=e),required:se("benefitRate"),name:`${e.prefix}_benefitRate`,"is-view":e.isView,rules:[{validator:be}],label:fe("benefitRate","title")},{extra:V((()=>[j])),_:1},8,["modelValue","required","name","is-view","rules","label"])):w("",!0),x(a.$slots,"default")])):w("",!0)}}});const M={class:"page-info-wrapper"},Y=e({props:{factorObject:null,formInfo:{default:()=>({})},isView:{type:Boolean,default:!1},sendSmsCode:{type:Function,default:(e,a)=>{}},titleCollection:{default:()=>({})},inputAlign:{default:"left"},needDesensitize:{type:Boolean,default:!1}},setup(e,{expose:a}){const n=e;_(),l();const r=o({}),t=o({extInfo:{},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL"}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),d=o(null),s=o([]),f=o([]);o([]),o([]),o([]),L({beneficiaryId:0,nextPage:"",currentAddress:null,isLoading:!0});const v=i((()=>{var e,a;const l={INSURER:{},HOLDER:{}};return((null==(e=r.value)?void 0:e.INSURER)||[]).forEach((e=>{l.INSURER[e.code]=e})),((null==(a=r.value)?void 0:a.HOLDER)||[]).forEach((e=>{l.HOLDER[e.code]=e})),l})),y=(e,a)=>{var l,o,i;return(null==(i=null==(o=null==(l=v.value)?void 0:l[a])?void 0:o[e])?void 0:i.isDisplay)===T.YES},C=(e,a)=>{var l,o;return(null==(o=null==(l=v.value)?void 0:l[a])?void 0:o[e].isMustInput)===T.YES},h=(e,a,l)=>{var o,i,n;return(null==(n=null==(i=null==(o=v.value)?void 0:o[l])?void 0:i[e])?void 0:n[a])||""},R=(e,a)=>{const l=e;return Object.keys(l).forEach((e=>{a.includes(e)||(l[e]="")})),l};return a({validateForm:e=>new Promise(((a,l)=>{var o;null==(o=d.value)||o.validate(e).then((()=>{a(t.value)}),(()=>{l()}))}))}),u((()=>n.factorObject),(()=>{const e={BENEFICIARY:n.factorObject[3],INSURER:n.factorObject[2],HOLDER:n.factorObject[1]};r.value=e}),{immediate:!0,deep:!0}),u([()=>t.value.tenantOrderInsuredList[0].relationToHolder,()=>t.value.tenantOrderHolder],(([e],[a])=>{var l,o,i,r;`${t.value.tenantOrderInsuredList[0].relationToHolder}`===g.SELF?(Object.assign(t.value.tenantOrderInsuredList[0],{...R(null==(o=null==(l=t.value)?void 0:l.tenantOrderInsuredList)?void 0:o[0],["extInfo","relationToHolder","tenantOrderBeneficiaryList","tenantOrderProductList"]),extInfo:{}}),Object.assign(t.value.tenantOrderInsuredList[0],t.value.tenantOrderHolder,{id:t.value.tenantOrderInsuredList[0].id,extInfo:{...t.value.tenantOrderHolder.extInfo,insureProvinceCode:t.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,insureCityCode:t.value.tenantOrderInsuredList[0].extInfo.insureCityCode,insureAreaCode:t.value.tenantOrderInsuredList[0].extInfo.insureAreaCode}})):e===a||n.isView||Object.assign(t.value.tenantOrderInsuredList[0],{...R(null==(r=null==(i=t.value)?void 0:i.tenantOrderInsuredList)?void 0:r[0],["extInfo","relationToHolder","tenantOrderBeneficiaryList","tenantOrderProductList"]),extInfo:{}})}),{deep:!0}),u((()=>n.formInfo),(()=>{Object.keys(n.formInfo).length&&(t.value=n.formInfo)}),{deep:!0,immediate:!0}),(a,l)=>{const o=m("ProField"),i=m("ProCard"),n=m("ProRadioButton");m("ProSvg");const u=m("ProForm");return c(),I("div",M,[b(u,{ref_key:"formRef",ref:d,"show-error":"","show-error-message":!1,"input-align":e.inputAlign},{default:V((()=>{var u,d,m,v;return[(null==(u=r.value.HOLDER)?void 0:u.length)?(c(),p(i,{key:0,"show-line":!1,"show-divider":!1,title:null==(d=e.titleCollection)?void 0:d.HOLDER},{default:V((()=>[b(B,{images:s.value,"onUpdate:images":l[1]||(l[1]=e=>s.value=e),"form-info":t.value.tenantOrderHolder,"factor-list":r.value.HOLDER,prefix:"holder","is-view":e.isView,"need-desensitize":e.needDesensitize,"send-sms-code":e.sendSmsCode},{name:V((()=>[x(a.$slots,"holderName")])),default:V((()=>{var a,i;return[y("gasNumberCollection","HOLDER")&&(null==(i=null==(a=t.value.tenantOrderSubjectList)?void 0:a[0])?void 0:i.extInfo)?(c(),p(o,{key:0,modelValue:t.value.tenantOrderSubjectList[0].extInfo.subjectRelatedUserId,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value.tenantOrderSubjectList[0].extInfo.subjectRelatedUserId=e),label:h("gasNumberCollection","title","HOLDER"),name:"subjectRelatedUserId",required:C("gasNumberCollection","HOLDER"),"is-view":e.isView,maxlength:100},null,8,["modelValue","label","required","is-view"])):w("",!0)]})),_:3},8,["images","form-info","factor-list","is-view","need-desensitize","send-sms-code"])])),_:3},8,["title"])):w("",!0),(null==(m=r.value.INSURER)?void 0:m.length)?(c(),p(i,{key:1,"show-line":!1,"show-divider":!1,title:null==(v=e.titleCollection)?void 0:v.INSURER},{default:V((()=>[y("relationToHolder","INSURER")?(c(),p(o,{key:0,modelValue:t.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":l[3]||(l[3]=e=>t.value.tenantOrderInsuredList[0].relationToHolder=e),class:"relation-holder",name:"insure_relationToHolder",required:C("relationToHolder","INSURER"),label:h("relationToHolder","title","INSURER")},{input:V((()=>[b(n,{modelValue:t.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":l[2]||(l[2]=e=>t.value.tenantOrderInsuredList[0].relationToHolder=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:h("relationToHolder","attributeValueList","INSURER")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required","label"])):w("",!0),y("social","INSURER")?(c(),p(o,{key:1,modelValue:t.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance,"onUpdate:modelValue":l[5]||(l[5]=e=>t.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance=e),label:h("social","title","INSURER"),name:"insure_hasSocialInsurance",required:C("social","INSURER")},{input:V((()=>[b(n,{modelValue:t.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance,"onUpdate:modelValue":l[4]||(l[4]=e=>t.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:h("social","attributeValueList","INSURER")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","required"])):w("",!0),e.isView||1!=+t.value.tenantOrderInsuredList[0].relationToHolder?(c(),p(B,{key:2,images:f.value,"onUpdate:images":l[6]||(l[6]=e=>f.value=e),"form-info":t.value.tenantOrderInsuredList[0],"factor-list":r.value.INSURER||[],prefix:"insure","need-desensitize":e.needDesensitize,"send-sms-code":e.sendSmsCode,"is-view":e.isView},{name:V((()=>[x(a.$slots,"insurerName")])),_:3},8,["images","form-info","factor-list","need-desensitize","send-sms-code","is-view"])):w("",!0)])),_:3},8,["title"])):w("",!0),w("",!0)]})),_:3},8,["input-align"])])}}});export{Y as default};
