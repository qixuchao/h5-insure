import{d as e,S as a,a as o,r as l,ac as n,E as r,ag as d,aH as i,am as u,aI as t,aJ as f,aK as m,m as s,c as I,g as p,e as c,w as v,f as x,j as y,aL as V,i as C,aM as b,n as k,a8 as h,l as q,ao as U,an as _,aN as w,aq as A,aO as T,v as E,aE as D}from"./index-9effc651.js";import{r as $}from"./relativeTime-fde2a46e.js";import{u as R}from"./useDicData-8bc6a182.js";import{c as g,M as P,T as S,d as O,e as N}from"./infoCollection-d7c085e7.js";const L={key:0,class:"com-personal-wrapper"},H={class:"date-extra"},M=k("长期"),Y=C("span",{class:"input-extra"},"万",-1),G=C("span",{class:"input-extra"},"万",-1),Z=C("span",{class:"input-extra"},"%",-1),j=e({props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]}},emits:["update:images"],setup(e,{emit:k}){const j=e;a();const{venderCode:B=""}=o().query,K=R("CERT_TYPE"),W=R(`${B.toLocaleUpperCase()}_OCCUPATION`);R("MARRIAGE_STATUS");const z=R("DEGREE"),F=R("NATIONALITY"),J=R("NATIONAL_REGION_CODE"),Q=l([]),X=l(!1),ee=l({formInfo:j.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""});n.extend($);const ae=l(2===j.formInfo.certEndType),oe=r((()=>{const e={};return j.factorList.forEach((a=>{e[a.code]=a})),e})),le=e=>{ee.value.formInfo.certNo=e.personIdCard,ee.value.formInfo.name=e.personName,ee.value.formInfo.certEndDate=n(e.validDateEnd,"YYYYMMDD").toDate()},ne=e=>oe.value&&oe.value[e]&&oe.value[e].isDisplay===h.YES,re=e=>oe.value&&oe.value[e]&&oe.value[e].isMustInput===h.YES,de=r((()=>[d.CERT,d.HOUSE_HOLD].includes(`${ee.value.formInfo.certType}`)?[i.ID_CARD]:`${ee.value.formInfo.certType}`===d.BIRTH?[i.BIRTH]:`${ee.value.formInfo.certType}`===d.PASSPORT?[i.PASSPORT]:[])),ie=(e,a)=>re("attachment")?2===ee.value.formInfo.certEndType||ee.value.formInfo.certEndDate?"":"请选择有效期至":"",ue=(e,a)=>/^\d{1,10}(\.\d{1,2})?$/.test(e)?"":"年收入最多录入10位数字",te=(e,a)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(e)?"":"收益比例只能填写1-100的正整数",fe=(e,a,o)=>a.length>e?`最大不能超过${e}个字符`:"",me=(e,a)=>{var o,l,r,i,u,t,f;if(!ne("nationality"))return"";if("CHN"===(null==(l=null==(o=ee.value.formInfo)?void 0:o.extInfo)?void 0:l.nationalityCode)){if(![d.CERT,d.HOUSE_HOLD,d.BIRTH,d.MILITARY_CARD].includes(`${e}`))return"国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证"}else if(["HKG","MAC"].includes(null==(i=null==(r=ee.value.formInfo)?void 0:r.extInfo)?void 0:i.nationalityCode)){if(![d.HK_MACAO_RESIDENCE_PERMIT,d.HONGKONG_MACAO].includes(`${e}`))return"国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证"}else if("TWN"===(null==(t=null==(u=ee.value.formInfo)?void 0:u.extInfo)?void 0:t.nationalityCode)){if(![d.TAIWAN_RESIDENCE_PERMIT,d.TAIWAN_TRAVEL].includes(`${e}`))return"国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证"}else if(![d.PASSPORT,d.FOREIGN_PERMANENT].includes(`${e}`))return"国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证";return n().year()-n(null==(f=ee.value.formInfo)?void 0:f.birthday).year()>2&&e===d.BIRTH?"年龄大于等于2周岁时，证件类型不能选择出生证":""},se=e=>Array.isArray(e)&&2===e.length&&e[0]&&e[1]?"":"请上传身份证正反面照片",Ie=e=>j.beneficiaryList.filter((e=>e.relationToInsured===N.SPOUSE)).length>=2?"已存在配偶关系的受益人":"";return u((()=>ae.value),(e=>{e?(ee.value.formInfo.certEndType=2,ee.value.formInfo.certEndDate=""):ee.value.formInfo.certEndType=1}),{immediate:!0}),u((()=>ee.value.formInfo.certType),(e=>{[d.CERT,d.HOUSE_HOLD].includes(e)?X.value=!0:X.value=!1}),{deep:!0,immediate:!0}),u((()=>ee.value.formInfo.certNo),(e=>{t(e)&&(ee.value.formInfo.gender=+f(e),ee.value.formInfo.birthday=n(new Date(m(e))).format("YYYY-MM-DD"))}),{deep:!0,immediate:!0}),u((()=>j.images),(e=>{Q.value=e}),{immediate:!0}),u((()=>j.formInfo),(()=>{ee.value.formInfo=j.formInfo}),{deep:!0,immediate:!0}),u(Q,(e=>{k("update:images",e)}),{deep:!0}),(a,o)=>{var l,n;const r=q,d=U,u=_,t=w,f=A,m=T,k=E,h=D;return Object.keys(s(oe)).length?(I(),p("div",L,[ne("insureRelation")?(I(),c(d,{key:0,modelValue:ee.value.formInfo.relationToInsured,"onUpdate:modelValue":o[1]||(o[1]=e=>ee.value.formInfo.relationToInsured=e),name:`${e.prefix}_relationToInsured`,required:re("insureRelation"),label:"是被保人的",rules:[{validator:Ie}]},{input:v((()=>[x(r,{modelValue:ee.value.formInfo.relationToInsured,"onUpdate:modelValue":o[0]||(o[0]=e=>ee.value.formInfo.relationToInsured=e),"is-view":e.isView,options:s(g).slice(1,4)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required","rules"])):y("",!0),ne("certType")?(I(),c(u,{key:1,modelValue:ee.value.formInfo.certType,"onUpdate:modelValue":o[2]||(o[2]=e=>ee.value.formInfo.certType=e),label:"证件类型",name:`${e.prefix}_certType`,"data-source":s(K),mapping:{label:"name",value:"code",children:"child"},required:re("certType"),rules:[{validator:me}]},null,8,["modelValue","name","data-source","required","rules"])):y("",!0),ne("attachment")&&ee.value.formInfo.certType+""=="1"?(I(),c(d,{key:2,label:"身份证上传",block:"",required:re("attachment"),rules:[{validator:se}],name:`${e.prefix}_idCard`},{input:v((()=>[x(t,{modelValue:Q.value,"onUpdate:modelValue":o[3]||(o[3]=e=>Q.value=e),"is-view":e.isView,onOnOCR:le},null,8,["modelValue","is-view"])])),_:1},8,["required","rules","name"])):y("",!0),ne("attachment")&&ee.value.formInfo.certType&&ee.value.formInfo.certType+""!="1"?(I(),c(d,{key:3,label:"证件上传",block:"",required:re("attachment")},{input:v((()=>[x(f,{modelValue:Q.value,"onUpdate:modelValue":o[4]||(o[4]=e=>Q.value=e),"max-count":1},null,8,["modelValue"])])),_:1},8,["required"])):y("",!0),ne("certNo")?(I(),c(d,{key:4,modelValue:ee.value.formInfo.certNo,"onUpdate:modelValue":o[5]||(o[5]=e=>ee.value.formInfo.certNo=e),label:"证件号码",name:`${e.prefix}_certNo`,required:re("certNo"),placeholder:"请输入",maxlength:18,"validate-type":s(de)},null,8,["modelValue","name","required","validate-type"])):y("",!0),ne("name")?(I(),c(d,{key:5,modelValue:ee.value.formInfo.name,"onUpdate:modelValue":o[6]||(o[6]=e=>ee.value.formInfo.name=e),label:"姓名",name:`${e.prefix}_name`,required:re("name")},null,8,["modelValue","name","required"])):y("",!0),ne("sex")?(I(),c(d,{key:6,modelValue:ee.value.formInfo.gender,"onUpdate:modelValue":o[8]||(o[8]=e=>ee.value.formInfo.gender=e),required:re("sex"),label:"性别",name:`${e.prefix}_gender`,placeholder:"请选择","is-view":X.value},{input:v((()=>[x(r,{modelValue:ee.value.formInfo.gender,"onUpdate:modelValue":o[7]||(o[7]=e=>ee.value.formInfo.gender=e),disabled:X.value,"is-view":e.isView,options:s(V)},null,8,["modelValue","disabled","is-view","options"])])),_:1},8,["modelValue","required","name","is-view"])):y("",!0),ne("birthday")?(I(),c(m,{key:7,modelValue:ee.value.formInfo.birthday,"onUpdate:modelValue":o[9]||(o[9]=e=>ee.value.formInfo.birthday=e),label:"出生日期",name:`${e.prefix}_birthday`,min:ee.value.birth.min,max:ee.value.birth.max,type:"date",required:re("birthday")},null,8,["modelValue","name","min","max","required"])):y("",!0),ne("certEndDate")?(I(),c(m,{key:8,modelValue:ee.value.formInfo.certEndDate,"onUpdate:modelValue":o[11]||(o[11]=e=>ee.value.formInfo.certEndDate=e),label:"有效期至",name:`${e.prefix}_certEndDate`,type:"date",min:ee.value.certEndDate.min,max:ee.value.certEndDate.max,"is-view":ae.value||e.isView,read:"",rules:[{validator:ie}]},{extra:v((()=>[C("div",H,[x(k,{modelValue:ae.value,"onUpdate:modelValue":o[10]||(o[10]=e=>ae.value=e),"icon-size":16,disabled:e.isView},{default:v((()=>[M])),_:1},8,["modelValue","disabled"])])])),_:1},8,["modelValue","name","min","max","is-view","rules"])):y("",!0),ne("houseHold")?(I(),c(h,{key:9,modelValue:ee.value.formInfo.extInfo.provinceCode,"onUpdate:modelValue":o[12]||(o[12]=e=>ee.value.formInfo.extInfo.provinceCode=e),field1:ee.value.formInfo.extInfo.provinceCode,"onUpdate:field1":o[13]||(o[13]=e=>ee.value.formInfo.extInfo.provinceCode=e),field2:ee.value.formInfo.extInfo.cityCode,"onUpdate:field2":o[14]||(o[14]=e=>ee.value.formInfo.extInfo.cityCode=e),field3:ee.value.formInfo.extInfo.areaCode,"onUpdate:field3":o[15]||(o[15]=e=>ee.value.formInfo.extInfo.areaCode=e),label:"户籍所在地",name:`${e.prefix}_provinceCode`,placeholder:"请选择","is-link":"",required:re("houseHold"),"data-source":s(J),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):y("",!0),ne("hasSocialInsurance")?(I(),c(d,{key:10,modelValue:ee.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[17]||(o[17]=e=>ee.value.formInfo.extInfo.hasSocialInsurance=e),label:"社保",name:`${e.prefix}_hasSocialInsurance`,placeholder:"请选择",required:re("hasSocialInsurance")},{input:v((()=>[x(r,{modelValue:ee.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[16]||(o[16]=e=>ee.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,options:s(b)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required"])):y("",!0),ne("occupation")?(I(),c(h,{key:11,modelValue:ee.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:modelValue":o[18]||(o[18]=e=>ee.value.formInfo.extInfo.occupationCodeList[0]=e),field0:ee.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:field0":o[19]||(o[19]=e=>ee.value.formInfo.extInfo.occupationCodeList[0]=e),field1:ee.value.formInfo.extInfo.occupationCodeList[1],"onUpdate:field1":o[20]||(o[20]=e=>ee.value.formInfo.extInfo.occupationCodeList[1]=e),field2:ee.value.formInfo.extInfo.occupationCodeList[2],"onUpdate:field2":o[21]||(o[21]=e=>ee.value.formInfo.extInfo.occupationCodeList[2]=e),label:"职业",name:`${e.prefix}_occupationCodeList`,placeholder:"请选择",required:re("occupation"),"data-source":s(W),mapping:{label:"value",value:"code",children:"children"},"is-link":""},null,8,["modelValue","field0","field1","field2","name","required","data-source"])):y("",!0),ne("annualIncome")?(I(),c(d,{key:12,modelValue:ee.value.formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":o[22]||(o[22]=e=>ee.value.formInfo.extInfo.personalAnnualIncome=e),label:"个人年收入",name:`${e.prefix}_personalAnnualIncome`,required:re("annualIncome"),placeholder:"请输入",rules:[{validator:ue}]},{extra:v((()=>[Y])),_:1},8,["modelValue","name","required","rules"])):y("",!0),ne("familyAnnualIncome")?(I(),c(d,{key:13,modelValue:ee.value.formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":o[23]||(o[23]=e=>ee.value.formInfo.extInfo.familyAnnualIncome=e),label:"家庭年收入",name:`${e.prefix}_familyAnnualIncome`,placeholder:"请输入",rules:[{validator:ue}],required:re("familyAnnualIncome")},{extra:v((()=>[G])),_:1},8,["modelValue","name","rules","required"])):y("",!0),ne("nationality")?(I(),c(u,{key:14,modelValue:ee.value.formInfo.extInfo.nationalityCode,"onUpdate:modelValue":o[24]||(o[24]=e=>ee.value.formInfo.extInfo.nationalityCode=e),label:"国籍",name:`${e.prefix}_nationalityCode`,"data-source":s(F),mapping:{label:"name",value:"code",children:"child"},placeholder:"请选择",required:re("nationality"),"is-link":""},null,8,["modelValue","name","data-source","required"])):y("",!0),ne("USAGreenCard")?(I(),c(d,{key:15,modelValue:ee.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":o[26]||(o[26]=e=>ee.value.formInfo.extInfo.hasUsCard=e),label:"美国绿卡",name:`${e.prefix}_hasUsCard`,placeholder:"请选择",required:re("USAGreenCard")},{input:v((()=>[x(r,{modelValue:ee.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":o[25]||(o[25]=e=>ee.value.formInfo.extInfo.hasUsCard=e),"is-view":e.isView,options:s(b)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required"])):y("",!0),ne("marriage")?(I(),c(u,{key:16,modelValue:ee.value.formInfo.extInfo.marriageStatus,"onUpdate:modelValue":o[27]||(o[27]=e=>ee.value.formInfo.extInfo.marriageStatus=e),label:"婚姻状况",name:`${e.prefix}_marriageStatus`,placeholder:"请选择","data-source":s(P),"is-link":"",required:re("marriage")},null,8,["modelValue","name","data-source","required"])):y("",!0),ne("educationDegree")?(I(),c(u,{key:17,modelValue:ee.value.formInfo.extInfo.educationDegree,"onUpdate:modelValue":o[28]||(o[28]=e=>ee.value.formInfo.extInfo.educationDegree=e),label:"学历",name:`${e.prefix}_educationDegree`,"data-source":s(z),mapping:{label:"name",value:"code",children:"child"},placeholder:"请选择",required:re("educationDegree"),"is-link":""},null,8,["modelValue","name","data-source","required"])):y("",!0),ne("mobile")?(I(),c(d,{key:18,modelValue:ee.value.formInfo.mobile,"onUpdate:modelValue":o[29]||(o[29]=e=>ee.value.formInfo.mobile=e),label:"手机号码",name:`${e.prefix}_mobile`,placeholder:"请输入",maxlength:11,required:re("mobile"),"validate-type":[s(i).PHONE]},null,8,["modelValue","name","required","validate-type"])):y("",!0),ne("email")?(I(),c(d,{key:19,modelValue:ee.value.formInfo.email,"onUpdate:modelValue":o[30]||(o[30]=e=>ee.value.formInfo.email=e),label:"电子邮箱",name:`${e.prefix}_email`,placeholder:"请输入",required:re("email"),"validate-type":[s(i).EMAIL]},null,8,["modelValue","name","required","validate-type"])):y("",!0),ne("familyAddress")?(I(),c(h,{key:20,modelValue:ee.value.formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":o[31]||(o[31]=e=>ee.value.formInfo.extInfo.familyAreaCode=e),field1:ee.value.formInfo.extInfo.familyProvinceCode,"onUpdate:field1":o[32]||(o[32]=e=>ee.value.formInfo.extInfo.familyProvinceCode=e),field2:ee.value.formInfo.extInfo.familyCityCode,"onUpdate:field2":o[33]||(o[33]=e=>ee.value.formInfo.extInfo.familyCityCode=e),field3:ee.value.formInfo.extInfo.familyAreaCode,"onUpdate:field3":o[34]||(o[34]=e=>ee.value.formInfo.extInfo.familyAreaCode=e),label:"家庭地址",name:`${e.prefix}_familyProvinceCode`,placeholder:"请选择","is-link":"",required:re("familyAddress"),"data-source":s(J),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):y("",!0),ne("familyAddressDetail")?(I(),c(d,{key:21,modelValue:ee.value.formInfo.extInfo.familyAddress,"onUpdate:modelValue":o[35]||(o[35]=e=>ee.value.formInfo.extInfo.familyAddress=e),label:"地址详情",name:`${e.prefix}_familyAddress`,placeholder:"请输入",rules:[{validator:(...e)=>fe(100,...e)}],required:re("familyAddressDetail")},null,8,["modelValue","name","rules","required"])):y("",!0),ne("familyPostCode")?(I(),c(d,{key:22,modelValue:ee.value.formInfo.extInfo.familyZipCode,"onUpdate:modelValue":o[36]||(o[36]=e=>ee.value.formInfo.extInfo.familyZipCode=e),label:"家庭邮编",name:`${e.prefix}_familyZipCode`,placeholder:"请输入",required:re("familyPostCode"),"validate-type":[s(i).ZIP_CODE]},null,8,["modelValue","name","required","validate-type"])):y("",!0),ne("workAddress")?(I(),c(h,{key:23,modelValue:ee.value.formInfo.extInfo.workAreaCode,"onUpdate:modelValue":o[37]||(o[37]=e=>ee.value.formInfo.extInfo.workAreaCode=e),field1:ee.value.formInfo.extInfo.workProvinceCode,"onUpdate:field1":o[38]||(o[38]=e=>ee.value.formInfo.extInfo.workProvinceCode=e),field2:ee.value.formInfo.extInfo.workCityCode,"onUpdate:field2":o[39]||(o[39]=e=>ee.value.formInfo.extInfo.workCityCode=e),field3:ee.value.formInfo.extInfo.workAreaCode,"onUpdate:field3":o[40]||(o[40]=e=>ee.value.formInfo.extInfo.workAreaCode=e),label:"工作地址",name:`${e.prefix}_workProvinceCode`,placeholder:"请选择","is-link":"",required:re("workAddress"),"data-source":s(J),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):y("",!0),ne("workAddressDetail")?(I(),c(d,{key:24,modelValue:ee.value.formInfo.extInfo.workAddress,"onUpdate:modelValue":o[41]||(o[41]=e=>ee.value.formInfo.extInfo.workAddress=e),label:"地址详情",name:`${e.prefix}_workAddress`,placeholder:"请输入",rules:[{validator:(...e)=>fe(100,...e)}],required:re("workAddressDetail")},null,8,["modelValue","name","rules","required"])):y("",!0),ne("workZipCode")?(I(),c(d,{key:25,modelValue:ee.value.formInfo.extInfo.workZipCode,"onUpdate:modelValue":o[42]||(o[42]=e=>ee.value.formInfo.extInfo.workZipCode=e),label:"工作邮编",required:re("workZipCode"),name:`${e.prefix}_workPostCode`,placeholder:"请输入","validate-type":[s(i).ZIP_CODE]},null,8,["modelValue","required","name","validate-type"])):y("",!0),ne("workPlace")?(I(),c(d,{key:26,modelValue:ee.value.formInfo.extInfo.workStation,"onUpdate:modelValue":o[43]||(o[43]=e=>ee.value.formInfo.extInfo.workStation=e),label:"单位名称",name:`${e.prefix}_workPostCode`,placeholder:"请输入",rules:[{validator:(...e)=>fe(20,...e)}],required:re("workPlace")},null,8,["modelValue","name","rules","required"])):y("",!0),ne("workContent")?(I(),c(d,{key:27,modelValue:ee.value.formInfo.extInfo.workContent,"onUpdate:modelValue":o[44]||(o[44]=e=>ee.value.formInfo.extInfo.workContent=e),label:"工作内容",name:`${e.prefix}_workContent`,required:re("workContent"),placeholder:"请输入",rules:[{validator:(...e)=>fe(100,...e)}]},null,8,["modelValue","name","required","rules"])):y("",!0),ne("taxCert")?(I(),c(u,{key:28,modelValue:ee.value.formInfo.extInfo.taxResident,"onUpdate:modelValue":o[45]||(o[45]=e=>ee.value.formInfo.extInfo.taxResident=e),label:"税收居民身份",name:`${e.prefix}_taxResident`,"data-source":s(S),required:re("taxCert"),placeholder:"请输入"},null,8,["modelValue","name","data-source","required"])):y("",!0),ne("partTime")?(I(),c(d,{key:29,modelValue:ee.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":o[47]||(o[47]=e=>ee.value.formInfo.extInfo.isPartTime=e),label:"是否兼职",name:`${e.prefix}_isPartTime`,required:re("partTime"),placeholder:"请输入"},{input:v((()=>[x(r,{modelValue:ee.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":o[46]||(o[46]=e=>ee.value.formInfo.extInfo.isPartTime=e),"is-view":e.isView,options:s(b)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required"])):y("",!0),(null==(l=s(oe).beneficiaryType)?void 0:l.isDisplay)?(I(),c(u,{key:30,modelValue:ee.value.formInfo.benefitOrder,"onUpdate:modelValue":o[48]||(o[48]=e=>ee.value.formInfo.benefitOrder=e),label:"受益人顺序",name:`${e.prefix}_benefitOrder`,"data-source":s(O),required:re("beneficiaryType")},null,8,["modelValue","name","data-source","required"])):y("",!0),(null==(n=s(oe).benefitRate)?void 0:n.isDisplay)?(I(),c(d,{key:31,modelValue:ee.value.formInfo.benefitRate,"onUpdate:modelValue":o[49]||(o[49]=e=>ee.value.formInfo.benefitRate=e),required:re("benefitRate"),name:`${e.prefix}_benefitRate`,rules:[{validator:te}],label:"受益比例"},{extra:v((()=>[Z])),_:1},8,["modelValue","required","name","rules"])):y("",!0)])):y("",!0)}}});export{j as _};
