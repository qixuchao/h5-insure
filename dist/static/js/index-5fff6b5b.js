import{d as e,G as a,a as o,r as l,$ as n,x as r,a2 as d,ap as i,a7 as u,aq as t,ar as f,as as m,b as s,l as I,c as p,g as c,e as v,w as x,f as y,j as V,at as C,i as b,au as k,n as h,Y as U}from"./index-ede405b0.js";import{r as q}from"./relativeTime-12fe38c5.js";import{u as _}from"./useDicData-7ab2952f.js";import{c as w,M as A,T,d as D,e as E}from"./infoCollection-97fe2557.js";const $={key:0,class:"com-personal-wrapper"},P={class:"date-extra"},R=h("长期"),g=b("span",{class:"input-extra"},"万",-1),S=b("span",{class:"input-extra"},"万",-1),O=b("span",{class:"input-extra"},"%",-1),N=e({props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]}},emits:["update:images"],setup(e,{emit:h}){const N=e;a();const{venderCode:L=""}=o().query,H=_("CERT_TYPE"),M=_(`${L.toLocaleUpperCase()}_OCCUPATION`);_("MARRIAGE_STATUS");const Y=_("DEGREE"),G=_("NATIONALITY"),Z=_("NATIONAL_REGION_CODE"),j=l([]),B=l(!1),K=l({formInfo:N.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""});n.extend(q);const W=l(2===N.formInfo.certEndType),F=r((()=>{const e={};return N.factorList.forEach((a=>{e[a.code]=a})),e})),z=e=>{K.value.formInfo.certNo=e.personIdCard,K.value.formInfo.name=e.personName,K.value.formInfo.certEndDate=n(e.validDateEnd,"YYYYMMDD").toDate()},J=e=>F.value&&F.value[e]&&F.value[e].isDisplay===U.YES,Q=e=>F.value&&F.value[e]&&F.value[e].isMustInput===U.YES,X=r((()=>[d.CERT,d.HOUSE_HOLD].includes(`${K.value.formInfo.certType}`)?[i.ID_CARD]:`${K.value.formInfo.certType}`===d.BIRTH?[i.BIRTH]:`${K.value.formInfo.certType}`===d.PASSPORT?[i.PASSPORT]:[])),ee=(e,a)=>Q("attachment")?2===K.value.formInfo.certEndType||K.value.formInfo.certEndDate?"":"请选择有效期至":"",ae=(e,a)=>/^\d{1,10}(\.\d{1,2})?$/.test(e)?"":"年收入最多录入10位数字",oe=(e,a)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(e)?"":"收益比例只能填写1-100的正整数",le=(e,a,o)=>a.length>e?`最大不能超过${e}个字符`:"",ne=(e,a)=>{var o,l,r,i,u,t,f;if(!J("nationality"))return"";if("CHN"===(null==(l=null==(o=K.value.formInfo)?void 0:o.extInfo)?void 0:l.nationalityCode)){if(![d.CERT,d.HOUSE_HOLD,d.BIRTH,d.MILITARY_CARD].includes(`${e}`))return"国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证"}else if(["HKG","MAC"].includes(null==(i=null==(r=K.value.formInfo)?void 0:r.extInfo)?void 0:i.nationalityCode)){if(![d.HK_MACAO_RESIDENCE_PERMIT,d.HONGKONG_MACAO].includes(`${e}`))return"国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证"}else if("TWN"===(null==(t=null==(u=K.value.formInfo)?void 0:u.extInfo)?void 0:t.nationalityCode)){if(![d.TAIWAN_RESIDENCE_PERMIT,d.TAIWAN_TRAVEL].includes(`${e}`))return"国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证"}else if(![d.PASSPORT,d.FOREIGN_PERMANENT].includes(`${e}`))return"国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证";return n().year()-n(null==(f=K.value.formInfo)?void 0:f.birthday).year()>2&&e===d.BIRTH?"年龄大于等于2周岁时，证件类型不能选择出生证":""},re=e=>Array.isArray(e)&&2===e.length&&e[0]&&e[1]?"":"请上传身份证正反面照片",de=e=>N.beneficiaryList.filter((e=>e.relationToInsured===E.SPOUSE)).length>=2?"已存在配偶关系的受益人":"";return u((()=>W.value),(e=>{e?(K.value.formInfo.certEndType=2,K.value.formInfo.certEndDate=""):K.value.formInfo.certEndType=1}),{immediate:!0}),u((()=>K.value.formInfo.certType),(e=>{[d.CERT,d.HOUSE_HOLD].includes(e)?B.value=!0:B.value=!1}),{deep:!0,immediate:!0}),u((()=>K.value.formInfo.certNo),(e=>{t(e)&&(K.value.formInfo.gender=+f(e),K.value.formInfo.birthday=n(new Date(m(e))).format("YYYY-MM-DD"))}),{deep:!0,immediate:!0}),u((()=>N.images),(e=>{j.value=e}),{immediate:!0}),u((()=>N.formInfo),(()=>{K.value.formInfo=N.formInfo}),{deep:!0,immediate:!0}),u(j,(e=>{h("update:images",e)}),{deep:!0}),(a,o)=>{var l,n;const r=s("ProRadioButton"),d=s("ProField"),u=s("ProPicker"),t=s("ProIDCardUpload"),f=s("ProImageUpload"),m=s("ProDatePicker"),h=s("van-checkbox"),U=s("ProCascader");return Object.keys(I(F)).length?(p(),c("div",$,[J("insureRelation")?(p(),v(d,{key:0,modelValue:K.value.formInfo.relationToInsured,"onUpdate:modelValue":o[1]||(o[1]=e=>K.value.formInfo.relationToInsured=e),name:`${e.prefix}_relationToInsured`,required:Q("insureRelation"),label:"是被保人的",rules:[{validator:de}]},{input:x((()=>[y(r,{modelValue:K.value.formInfo.relationToInsured,"onUpdate:modelValue":o[0]||(o[0]=e=>K.value.formInfo.relationToInsured=e),"is-view":e.isView,options:I(w).slice(1,4)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required","rules"])):V("",!0),J("certType")?(p(),v(u,{key:1,modelValue:K.value.formInfo.certType,"onUpdate:modelValue":o[2]||(o[2]=e=>K.value.formInfo.certType=e),label:"证件类型",name:`${e.prefix}_certType`,"data-source":I(H),mapping:{label:"name",value:"code",children:"child"},required:Q("certType"),rules:[{validator:ne}]},null,8,["modelValue","name","data-source","required","rules"])):V("",!0),J("attachment")&&K.value.formInfo.certType+""=="1"?(p(),v(d,{key:2,label:"身份证上传",block:"",required:Q("attachment"),rules:[{validator:re}],name:`${e.prefix}_idCard`},{input:x((()=>[y(t,{modelValue:j.value,"onUpdate:modelValue":o[3]||(o[3]=e=>j.value=e),"is-view":e.isView,onOnOCR:z},null,8,["modelValue","is-view"])])),_:1},8,["required","rules","name"])):V("",!0),J("attachment")&&K.value.formInfo.certType&&K.value.formInfo.certType+""!="1"?(p(),v(d,{key:3,label:"证件上传",block:"",required:Q("attachment")},{input:x((()=>[y(f,{modelValue:j.value,"onUpdate:modelValue":o[4]||(o[4]=e=>j.value=e),"max-count":1},null,8,["modelValue"])])),_:1},8,["required"])):V("",!0),J("certNo")?(p(),v(d,{key:4,modelValue:K.value.formInfo.certNo,"onUpdate:modelValue":o[5]||(o[5]=e=>K.value.formInfo.certNo=e),label:"证件号码",name:`${e.prefix}_certNo`,required:Q("certNo"),placeholder:"请输入",maxlength:18,"validate-type":I(X)},null,8,["modelValue","name","required","validate-type"])):V("",!0),J("name")?(p(),v(d,{key:5,modelValue:K.value.formInfo.name,"onUpdate:modelValue":o[6]||(o[6]=e=>K.value.formInfo.name=e),label:"姓名",name:`${e.prefix}_name`,required:Q("name")},null,8,["modelValue","name","required"])):V("",!0),J("sex")?(p(),v(d,{key:6,modelValue:K.value.formInfo.gender,"onUpdate:modelValue":o[8]||(o[8]=e=>K.value.formInfo.gender=e),required:Q("sex"),label:"性别",name:`${e.prefix}_gender`,placeholder:"请选择","is-view":B.value},{input:x((()=>[y(r,{modelValue:K.value.formInfo.gender,"onUpdate:modelValue":o[7]||(o[7]=e=>K.value.formInfo.gender=e),disabled:B.value,"is-view":e.isView,options:I(C)},null,8,["modelValue","disabled","is-view","options"])])),_:1},8,["modelValue","required","name","is-view"])):V("",!0),J("birthday")?(p(),v(m,{key:7,modelValue:K.value.formInfo.birthday,"onUpdate:modelValue":o[9]||(o[9]=e=>K.value.formInfo.birthday=e),label:"出生日期",name:`${e.prefix}_birthday`,min:K.value.birth.min,max:K.value.birth.max,type:"date",required:Q("birthday")},null,8,["modelValue","name","min","max","required"])):V("",!0),J("certEndDate")?(p(),v(m,{key:8,modelValue:K.value.formInfo.certEndDate,"onUpdate:modelValue":o[11]||(o[11]=e=>K.value.formInfo.certEndDate=e),label:"有效期至",name:`${e.prefix}_certEndDate`,type:"date",min:K.value.certEndDate.min,max:K.value.certEndDate.max,"is-view":W.value||e.isView,read:"",rules:[{validator:ee}]},{extra:x((()=>[b("div",P,[y(h,{modelValue:W.value,"onUpdate:modelValue":o[10]||(o[10]=e=>W.value=e),"icon-size":16,disabled:e.isView},{default:x((()=>[R])),_:1},8,["modelValue","disabled"])])])),_:1},8,["modelValue","name","min","max","is-view","rules"])):V("",!0),J("houseHold")?(p(),v(U,{key:9,modelValue:K.value.formInfo.extInfo.provinceCode,"onUpdate:modelValue":o[12]||(o[12]=e=>K.value.formInfo.extInfo.provinceCode=e),field1:K.value.formInfo.extInfo.provinceCode,"onUpdate:field1":o[13]||(o[13]=e=>K.value.formInfo.extInfo.provinceCode=e),field2:K.value.formInfo.extInfo.cityCode,"onUpdate:field2":o[14]||(o[14]=e=>K.value.formInfo.extInfo.cityCode=e),field3:K.value.formInfo.extInfo.areaCode,"onUpdate:field3":o[15]||(o[15]=e=>K.value.formInfo.extInfo.areaCode=e),label:"户籍所在地",name:`${e.prefix}_provinceCode`,placeholder:"请选择","is-link":"",required:Q("houseHold"),"data-source":I(Z),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):V("",!0),J("hasSocialInsurance")?(p(),v(d,{key:10,modelValue:K.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[17]||(o[17]=e=>K.value.formInfo.extInfo.hasSocialInsurance=e),label:"社保",name:`${e.prefix}_hasSocialInsurance`,placeholder:"请选择",required:Q("hasSocialInsurance")},{input:x((()=>[y(r,{modelValue:K.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[16]||(o[16]=e=>K.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,options:I(k)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required"])):V("",!0),J("occupation")?(p(),v(U,{key:11,modelValue:K.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:modelValue":o[18]||(o[18]=e=>K.value.formInfo.extInfo.occupationCodeList[0]=e),field0:K.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:field0":o[19]||(o[19]=e=>K.value.formInfo.extInfo.occupationCodeList[0]=e),field1:K.value.formInfo.extInfo.occupationCodeList[1],"onUpdate:field1":o[20]||(o[20]=e=>K.value.formInfo.extInfo.occupationCodeList[1]=e),field2:K.value.formInfo.extInfo.occupationCodeList[2],"onUpdate:field2":o[21]||(o[21]=e=>K.value.formInfo.extInfo.occupationCodeList[2]=e),label:"职业",name:`${e.prefix}_occupationCodeList`,placeholder:"请选择",required:Q("occupation"),"data-source":I(M),mapping:{label:"value",value:"code",children:"children"},"is-link":""},null,8,["modelValue","field0","field1","field2","name","required","data-source"])):V("",!0),J("annualIncome")?(p(),v(d,{key:12,modelValue:K.value.formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":o[22]||(o[22]=e=>K.value.formInfo.extInfo.personalAnnualIncome=e),label:"个人年收入",name:`${e.prefix}_personalAnnualIncome`,required:Q("annualIncome"),placeholder:"请输入",rules:[{validator:ae}]},{extra:x((()=>[g])),_:1},8,["modelValue","name","required","rules"])):V("",!0),J("familyAnnualIncome")?(p(),v(d,{key:13,modelValue:K.value.formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":o[23]||(o[23]=e=>K.value.formInfo.extInfo.familyAnnualIncome=e),label:"家庭年收入",name:`${e.prefix}_familyAnnualIncome`,placeholder:"请输入",rules:[{validator:ae}],required:Q("familyAnnualIncome")},{extra:x((()=>[S])),_:1},8,["modelValue","name","rules","required"])):V("",!0),J("nationality")?(p(),v(u,{key:14,modelValue:K.value.formInfo.extInfo.nationalityCode,"onUpdate:modelValue":o[24]||(o[24]=e=>K.value.formInfo.extInfo.nationalityCode=e),label:"国籍",name:`${e.prefix}_nationalityCode`,"data-source":I(G),mapping:{label:"name",value:"code",children:"child"},placeholder:"请选择",required:Q("nationality"),"is-link":""},null,8,["modelValue","name","data-source","required"])):V("",!0),J("USAGreenCard")?(p(),v(d,{key:15,modelValue:K.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":o[26]||(o[26]=e=>K.value.formInfo.extInfo.hasUsCard=e),label:"美国绿卡",name:`${e.prefix}_hasUsCard`,placeholder:"请选择",required:Q("USAGreenCard")},{input:x((()=>[y(r,{modelValue:K.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":o[25]||(o[25]=e=>K.value.formInfo.extInfo.hasUsCard=e),"is-view":e.isView,options:I(k)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required"])):V("",!0),J("marriage")?(p(),v(u,{key:16,modelValue:K.value.formInfo.extInfo.marriageStatus,"onUpdate:modelValue":o[27]||(o[27]=e=>K.value.formInfo.extInfo.marriageStatus=e),label:"婚姻状况",name:`${e.prefix}_marriageStatus`,placeholder:"请选择","data-source":I(A),"is-link":"",required:Q("marriage")},null,8,["modelValue","name","data-source","required"])):V("",!0),J("educationDegree")?(p(),v(u,{key:17,modelValue:K.value.formInfo.extInfo.educationDegree,"onUpdate:modelValue":o[28]||(o[28]=e=>K.value.formInfo.extInfo.educationDegree=e),label:"学历",name:`${e.prefix}_educationDegree`,"data-source":I(Y),mapping:{label:"name",value:"code",children:"child"},placeholder:"请选择",required:Q("educationDegree"),"is-link":""},null,8,["modelValue","name","data-source","required"])):V("",!0),J("mobile")?(p(),v(d,{key:18,modelValue:K.value.formInfo.mobile,"onUpdate:modelValue":o[29]||(o[29]=e=>K.value.formInfo.mobile=e),label:"手机号码",name:`${e.prefix}_mobile`,placeholder:"请输入",maxlength:11,required:Q("mobile"),"validate-type":[I(i).PHONE]},null,8,["modelValue","name","required","validate-type"])):V("",!0),J("email")?(p(),v(d,{key:19,modelValue:K.value.formInfo.email,"onUpdate:modelValue":o[30]||(o[30]=e=>K.value.formInfo.email=e),label:"电子邮箱",name:`${e.prefix}_email`,placeholder:"请输入",required:Q("email"),"validate-type":[I(i).EMAIL]},null,8,["modelValue","name","required","validate-type"])):V("",!0),J("familyAddress")?(p(),v(U,{key:20,modelValue:K.value.formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":o[31]||(o[31]=e=>K.value.formInfo.extInfo.familyAreaCode=e),field1:K.value.formInfo.extInfo.familyProvinceCode,"onUpdate:field1":o[32]||(o[32]=e=>K.value.formInfo.extInfo.familyProvinceCode=e),field2:K.value.formInfo.extInfo.familyCityCode,"onUpdate:field2":o[33]||(o[33]=e=>K.value.formInfo.extInfo.familyCityCode=e),field3:K.value.formInfo.extInfo.familyAreaCode,"onUpdate:field3":o[34]||(o[34]=e=>K.value.formInfo.extInfo.familyAreaCode=e),label:"家庭地址",name:`${e.prefix}_familyProvinceCode`,placeholder:"请选择","is-link":"",required:Q("familyAddress"),"data-source":I(Z),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):V("",!0),J("familyAddressDetail")?(p(),v(d,{key:21,modelValue:K.value.formInfo.extInfo.familyAddress,"onUpdate:modelValue":o[35]||(o[35]=e=>K.value.formInfo.extInfo.familyAddress=e),label:"地址详情",name:`${e.prefix}_familyAddress`,placeholder:"请输入",rules:[{validator:(...e)=>le(100,...e)}],required:Q("familyAddressDetail")},null,8,["modelValue","name","rules","required"])):V("",!0),J("familyPostCode")?(p(),v(d,{key:22,modelValue:K.value.formInfo.extInfo.familyZipCode,"onUpdate:modelValue":o[36]||(o[36]=e=>K.value.formInfo.extInfo.familyZipCode=e),label:"家庭邮编",name:`${e.prefix}_familyZipCode`,placeholder:"请输入",required:Q("familyPostCode"),"validate-type":[I(i).ZIP_CODE]},null,8,["modelValue","name","required","validate-type"])):V("",!0),J("workAddress")?(p(),v(U,{key:23,modelValue:K.value.formInfo.extInfo.workAreaCode,"onUpdate:modelValue":o[37]||(o[37]=e=>K.value.formInfo.extInfo.workAreaCode=e),field1:K.value.formInfo.extInfo.workProvinceCode,"onUpdate:field1":o[38]||(o[38]=e=>K.value.formInfo.extInfo.workProvinceCode=e),field2:K.value.formInfo.extInfo.workCityCode,"onUpdate:field2":o[39]||(o[39]=e=>K.value.formInfo.extInfo.workCityCode=e),field3:K.value.formInfo.extInfo.workAreaCode,"onUpdate:field3":o[40]||(o[40]=e=>K.value.formInfo.extInfo.workAreaCode=e),label:"工作地址",name:`${e.prefix}_workProvinceCode`,placeholder:"请选择","is-link":"",required:Q("workAddress"),"data-source":I(Z),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):V("",!0),J("workAddressDetail")?(p(),v(d,{key:24,modelValue:K.value.formInfo.extInfo.workAddress,"onUpdate:modelValue":o[41]||(o[41]=e=>K.value.formInfo.extInfo.workAddress=e),label:"地址详情",name:`${e.prefix}_workAddress`,placeholder:"请输入",rules:[{validator:(...e)=>le(100,...e)}],required:Q("workAddressDetail")},null,8,["modelValue","name","rules","required"])):V("",!0),J("workZipCode")?(p(),v(d,{key:25,modelValue:K.value.formInfo.extInfo.workZipCode,"onUpdate:modelValue":o[42]||(o[42]=e=>K.value.formInfo.extInfo.workZipCode=e),label:"工作邮编",required:Q("workZipCode"),name:`${e.prefix}_workPostCode`,placeholder:"请输入","validate-type":[I(i).ZIP_CODE]},null,8,["modelValue","required","name","validate-type"])):V("",!0),J("workPlace")?(p(),v(d,{key:26,modelValue:K.value.formInfo.extInfo.workStation,"onUpdate:modelValue":o[43]||(o[43]=e=>K.value.formInfo.extInfo.workStation=e),label:"单位名称",name:`${e.prefix}_workPostCode`,placeholder:"请输入",rules:[{validator:(...e)=>le(20,...e)}],required:Q("workPlace")},null,8,["modelValue","name","rules","required"])):V("",!0),J("workContent")?(p(),v(d,{key:27,modelValue:K.value.formInfo.extInfo.workContent,"onUpdate:modelValue":o[44]||(o[44]=e=>K.value.formInfo.extInfo.workContent=e),label:"工作内容",name:`${e.prefix}_workContent`,required:Q("workContent"),placeholder:"请输入",rules:[{validator:(...e)=>le(100,...e)}]},null,8,["modelValue","name","required","rules"])):V("",!0),J("taxCert")?(p(),v(u,{key:28,modelValue:K.value.formInfo.extInfo.taxResident,"onUpdate:modelValue":o[45]||(o[45]=e=>K.value.formInfo.extInfo.taxResident=e),label:"税收居民身份",name:`${e.prefix}_taxResident`,"data-source":I(T),required:Q("taxCert"),placeholder:"请输入"},null,8,["modelValue","name","data-source","required"])):V("",!0),J("partTime")?(p(),v(d,{key:29,modelValue:K.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":o[47]||(o[47]=e=>K.value.formInfo.extInfo.isPartTime=e),label:"是否兼职",name:`${e.prefix}_isPartTime`,required:Q("partTime"),placeholder:"请输入"},{input:x((()=>[y(r,{modelValue:K.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":o[46]||(o[46]=e=>K.value.formInfo.extInfo.isPartTime=e),"is-view":e.isView,options:I(k)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required"])):V("",!0),(null==(l=I(F).beneficiaryType)?void 0:l.isDisplay)?(p(),v(u,{key:30,modelValue:K.value.formInfo.benefitOrder,"onUpdate:modelValue":o[48]||(o[48]=e=>K.value.formInfo.benefitOrder=e),label:"受益人顺序",name:`${e.prefix}_benefitOrder`,"data-source":I(D),required:Q("beneficiaryType")},null,8,["modelValue","name","data-source","required"])):V("",!0),(null==(n=I(F).benefitRate)?void 0:n.isDisplay)?(p(),v(d,{key:31,modelValue:K.value.formInfo.benefitRate,"onUpdate:modelValue":o[49]||(o[49]=e=>K.value.formInfo.benefitRate=e),required:Q("benefitRate"),name:`${e.prefix}_benefitRate`,rules:[{validator:oe}],label:"受益比例"},{extra:x((()=>[O])),_:1},8,["modelValue","required","name","rules"])):V("",!0)])):V("",!0)}}});export{N as _};
