<<<<<<<< HEAD:dist/static/js/index-09ec92dd.js
import{d as e,S as o,a,r as l,ad as n,E as r,ah as d,aI as i,an as t,aJ as f,aK as m,aL as u,g as s,c as I,h as p,e as c,w as x,f as y,k as V,a7 as v,aM as C,j as b,n as h,aN as k,a9 as _,m as q,ap as U,ao as w,aO as A,aq as T,aP as E,v as D,aF as $}from"./index-0fe7bae3.js";import{r as R}from"./relativeTime-fde2a46e.js";import{u as g}from"./useDicData-2af43a59.js";import{c as P,M as S,T as O,d as N,e as L}from"./infoCollection-c0331be0.js";const H={key:0,class:"com-personal-wrapper"},M={class:"date-extra"},Y=b("span",{class:"input-extra"},"万",-1),G=b("span",{class:"input-extra"},"万",-1),Z=b("span",{class:"input-extra"},"%",-1),j=e({__name:"index",props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]}},emits:["update:images"],setup(e,{emit:j}){const B=e;o();const{venderCode:K=""}=a().query,W=g("CERT_TYPE"),F=g(`${K.toLocaleUpperCase()}_OCCUPATION`);g("MARRIAGE_STATUS");const z=g("DEGREE"),J=g("NATIONALITY"),Q=g("NATIONAL_REGION_CODE"),X=l([]),ee=l(!1),oe=l({formInfo:B.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""});n.extend(R);const ae=l(2===B.formInfo.certEndType),le=r((()=>{const e={};return B.factorList.forEach((o=>{e[o.code]=o})),e})),ne=e=>{oe.value.formInfo.certNo=e.personIdCard,oe.value.formInfo.name=e.personName,oe.value.formInfo.certEndDate=n(e.validDateEnd,"YYYYMMDD").toDate()},re=e=>le.value&&le.value[e]&&le.value[e].isDisplay===_.YES,de=e=>le.value&&le.value[e]&&le.value[e].isMustInput===_.YES,ie=r((()=>[d.CERT,d.HOUSE_HOLD].includes(`${oe.value.formInfo.certType}`)?[i.ID_CARD]:`${oe.value.formInfo.certType}`===d.BIRTH?[i.BIRTH]:`${oe.value.formInfo.certType}`===d.PASSPORT?[i.PASSPORT]:[])),te=(e,o)=>de("attachment")?2===oe.value.formInfo.certEndType||oe.value.formInfo.certEndDate?"":"请选择有效期至":"",fe=(e,o)=>/^\d{1,10}(\.\d{1,2})?$/.test(e)?"":"年收入最多录入10位数字",me=(e,o)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(e)?"":"收益比例只能填写1-100的正整数",ue=(e,o,a)=>o.length>e?`最大不能超过${e}个字符`:"",se=(e,o)=>{var a,l,r,i,t,f,m;if(!re("nationality"))return"";if("CHN"===(null==(l=null==(a=oe.value.formInfo)?void 0:a.extInfo)?void 0:l.nationalityCode)){if(![d.CERT,d.HOUSE_HOLD,d.BIRTH,d.MILITARY_CARD].includes(`${e}`))return"国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证"}else if(["HKG","MAC"].includes(null==(i=null==(r=oe.value.formInfo)?void 0:r.extInfo)?void 0:i.nationalityCode)){if(![d.HK_MACAO_RESIDENCE_PERMIT,d.HONGKONG_MACAO].includes(`${e}`))return"国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证"}else if("TWN"===(null==(f=null==(t=oe.value.formInfo)?void 0:t.extInfo)?void 0:f.nationalityCode)){if(![d.TAIWAN_RESIDENCE_PERMIT,d.TAIWAN_TRAVEL].includes(`${e}`))return"国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证"}else if(![d.PASSPORT,d.FOREIGN_PERMANENT].includes(`${e}`))return"国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证";return n().year()-n(null==(m=oe.value.formInfo)?void 0:m.birthday).year()>2&&e===d.BIRTH?"年龄大于等于2周岁时，证件类型不能选择出生证":""},Ie=e=>Array.isArray(e)&&2===e.length&&e[0]&&e[1]?"":"请上传身份证正反面照片",pe=e=>B.beneficiaryList.filter((e=>e.relationToInsured===L.SPOUSE)).length>=2?"已存在配偶关系的受益人":"";return t((()=>ae.value),(e=>{e?(oe.value.formInfo.certEndType=2,oe.value.formInfo.certEndDate=""):oe.value.formInfo.certEndType=1}),{immediate:!0}),t((()=>oe.value.formInfo.certType),(e=>{[d.CERT,d.HOUSE_HOLD].includes(e)?ee.value=!0:ee.value=!1}),{deep:!0,immediate:!0}),t((()=>oe.value.formInfo.certNo),(e=>{f(e)&&(oe.value.formInfo.gender=+m(e),oe.value.formInfo.birthday=n(new Date(u(e))).format("YYYY-MM-DD"))}),{deep:!0,immediate:!0}),t((()=>B.images),(e=>{X.value=e}),{immediate:!0}),t((()=>B.formInfo),(()=>{oe.value.formInfo=B.formInfo}),{deep:!0,immediate:!0}),t(X,(e=>{j("update:images",e)}),{deep:!0}),(o,a)=>{var l,n;const r=q,d=U,t=w,f=A,m=T,u=E,_=D,R=$;return Object.keys(s(le)).length?(I(),p("div",H,[re("insureRelation")?(I(),c(d,{key:0,modelValue:s(oe).formInfo.relationToInsured,"onUpdate:modelValue":a[1]||(a[1]=e=>s(oe).formInfo.relationToInsured=e),name:`${e.prefix}_relationToInsured`,required:de("insureRelation"),label:"是被保人的",rules:[{validator:pe}]},{input:x((()=>[y(r,{modelValue:s(oe).formInfo.relationToInsured,"onUpdate:modelValue":a[0]||(a[0]=e=>s(oe).formInfo.relationToInsured=e),"is-view":e.isView,options:s(P).slice(1,4)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required","rules"])):V("",!0),re("certType")?(I(),c(t,{key:1,modelValue:s(oe).formInfo.certType,"onUpdate:modelValue":a[2]||(a[2]=e=>s(oe).formInfo.certType=e),label:"证件类型",name:`${e.prefix}_certType`,"data-source":s(W),mapping:{label:"name",value:"code",children:"child"},required:de("certType"),rules:[{validator:se}]},null,8,["modelValue","name","data-source","required","rules"])):V("",!0),re("attachment")&&s(oe).formInfo.certType+""=="1"?(I(),c(d,{key:2,label:"身份证上传",block:"",required:de("attachment"),rules:[{validator:Ie}],name:`${e.prefix}_idCard`},{input:x((()=>[y(f,{modelValue:s(X),"onUpdate:modelValue":a[3]||(a[3]=e=>v(X)?X.value=e:null),"is-view":e.isView,onOnOCR:ne},null,8,["modelValue","is-view"])])),_:1},8,["required","rules","name"])):V("",!0),re("attachment")&&s(oe).formInfo.certType&&s(oe).formInfo.certType+""!="1"?(I(),c(d,{key:3,label:"证件上传",block:"",required:de("attachment")},{input:x((()=>[y(m,{modelValue:s(X),"onUpdate:modelValue":a[4]||(a[4]=e=>v(X)?X.value=e:null),"max-count":1},null,8,["modelValue"])])),_:1},8,["required"])):V("",!0),re("certNo")?(I(),c(d,{key:4,modelValue:s(oe).formInfo.certNo,"onUpdate:modelValue":a[5]||(a[5]=e=>s(oe).formInfo.certNo=e),label:"证件号码",name:`${e.prefix}_certNo`,required:de("certNo"),placeholder:"请输入",maxlength:18,"validate-type":s(ie)},null,8,["modelValue","name","required","validate-type"])):V("",!0),re("name")?(I(),c(d,{key:5,modelValue:s(oe).formInfo.name,"onUpdate:modelValue":a[6]||(a[6]=e=>s(oe).formInfo.name=e),label:"姓名",name:`${e.prefix}_name`,required:de("name")},null,8,["modelValue","name","required"])):V("",!0),re("sex")?(I(),c(d,{key:6,modelValue:s(oe).formInfo.gender,"onUpdate:modelValue":a[8]||(a[8]=e=>s(oe).formInfo.gender=e),required:de("sex"),label:"性别",name:`${e.prefix}_gender`,placeholder:"请选择","is-view":s(ee)},{input:x((()=>[y(r,{modelValue:s(oe).formInfo.gender,"onUpdate:modelValue":a[7]||(a[7]=e=>s(oe).formInfo.gender=e),disabled:s(ee),"is-view":e.isView,options:s(C)},null,8,["modelValue","disabled","is-view","options"])])),_:1},8,["modelValue","required","name","is-view"])):V("",!0),re("birthday")?(I(),c(u,{key:7,modelValue:s(oe).formInfo.birthday,"onUpdate:modelValue":a[9]||(a[9]=e=>s(oe).formInfo.birthday=e),label:"出生日期",name:`${e.prefix}_birthday`,min:s(oe).birth.min,max:s(oe).birth.max,type:"date",required:de("birthday")},null,8,["modelValue","name","min","max","required"])):V("",!0),re("certEndDate")?(I(),c(u,{key:8,modelValue:s(oe).formInfo.certEndDate,"onUpdate:modelValue":a[11]||(a[11]=e=>s(oe).formInfo.certEndDate=e),label:"有效期至",name:`${e.prefix}_certEndDate`,type:"date",min:s(oe).certEndDate.min,max:s(oe).certEndDate.max,"is-view":s(ae)||e.isView,read:"",rules:[{validator:te}]},{extra:x((()=>[b("div",M,[y(_,{modelValue:s(ae),"onUpdate:modelValue":a[10]||(a[10]=e=>v(ae)?ae.value=e:null),"icon-size":16,disabled:e.isView},{default:x((()=>[h("长期")])),_:1},8,["modelValue","disabled"])])])),_:1},8,["modelValue","name","min","max","is-view","rules"])):V("",!0),re("houseHold")?(I(),c(R,{key:9,modelValue:s(oe).formInfo.extInfo.provinceCode,"onUpdate:modelValue":a[12]||(a[12]=e=>s(oe).formInfo.extInfo.provinceCode=e),field1:s(oe).formInfo.extInfo.provinceCode,"onUpdate:field1":a[13]||(a[13]=e=>s(oe).formInfo.extInfo.provinceCode=e),field2:s(oe).formInfo.extInfo.cityCode,"onUpdate:field2":a[14]||(a[14]=e=>s(oe).formInfo.extInfo.cityCode=e),field3:s(oe).formInfo.extInfo.areaCode,"onUpdate:field3":a[15]||(a[15]=e=>s(oe).formInfo.extInfo.areaCode=e),label:"户籍所在地",name:`${e.prefix}_provinceCode`,placeholder:"请选择","is-link":"",required:de("houseHold"),"data-source":s(Q),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):V("",!0),re("hasSocialInsurance")?(I(),c(d,{key:10,modelValue:s(oe).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[17]||(a[17]=e=>s(oe).formInfo.extInfo.hasSocialInsurance=e),label:"社保",name:`${e.prefix}_hasSocialInsurance`,placeholder:"请选择",required:de("hasSocialInsurance")},{input:x((()=>[y(r,{modelValue:s(oe).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[16]||(a[16]=e=>s(oe).formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,options:s(k)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required"])):V("",!0),re("occupation")?(I(),c(R,{key:11,modelValue:s(oe).formInfo.extInfo.occupationCodeList[0],"onUpdate:modelValue":a[18]||(a[18]=e=>s(oe).formInfo.extInfo.occupationCodeList[0]=e),field0:s(oe).formInfo.extInfo.occupationCodeList[0],"onUpdate:field0":a[19]||(a[19]=e=>s(oe).formInfo.extInfo.occupationCodeList[0]=e),field1:s(oe).formInfo.extInfo.occupationCodeList[1],"onUpdate:field1":a[20]||(a[20]=e=>s(oe).formInfo.extInfo.occupationCodeList[1]=e),field2:s(oe).formInfo.extInfo.occupationCodeList[2],"onUpdate:field2":a[21]||(a[21]=e=>s(oe).formInfo.extInfo.occupationCodeList[2]=e),label:"职业",name:`${e.prefix}_occupationCodeList`,placeholder:"请选择",required:de("occupation"),"data-source":s(F),mapping:{label:"value",value:"code",children:"children"},"is-link":""},null,8,["modelValue","field0","field1","field2","name","required","data-source"])):V("",!0),re("annualIncome")?(I(),c(d,{key:12,modelValue:s(oe).formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":a[22]||(a[22]=e=>s(oe).formInfo.extInfo.personalAnnualIncome=e),label:"个人年收入",name:`${e.prefix}_personalAnnualIncome`,required:de("annualIncome"),placeholder:"请输入",rules:[{validator:fe}]},{extra:x((()=>[Y])),_:1},8,["modelValue","name","required","rules"])):V("",!0),re("familyAnnualIncome")?(I(),c(d,{key:13,modelValue:s(oe).formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":a[23]||(a[23]=e=>s(oe).formInfo.extInfo.familyAnnualIncome=e),label:"家庭年收入",name:`${e.prefix}_familyAnnualIncome`,placeholder:"请输入",rules:[{validator:fe}],required:de("familyAnnualIncome")},{extra:x((()=>[G])),_:1},8,["modelValue","name","rules","required"])):V("",!0),re("nationality")?(I(),c(t,{key:14,modelValue:s(oe).formInfo.extInfo.nationalityCode,"onUpdate:modelValue":a[24]||(a[24]=e=>s(oe).formInfo.extInfo.nationalityCode=e),label:"国籍",name:`${e.prefix}_nationalityCode`,"data-source":s(J),mapping:{label:"name",value:"code",children:"child"},placeholder:"请选择",required:de("nationality"),"is-link":""},null,8,["modelValue","name","data-source","required"])):V("",!0),re("USAGreenCard")?(I(),c(d,{key:15,modelValue:s(oe).formInfo.extInfo.hasUsCard,"onUpdate:modelValue":a[26]||(a[26]=e=>s(oe).formInfo.extInfo.hasUsCard=e),label:"美国绿卡",name:`${e.prefix}_hasUsCard`,placeholder:"请选择",required:de("USAGreenCard")},{input:x((()=>[y(r,{modelValue:s(oe).formInfo.extInfo.hasUsCard,"onUpdate:modelValue":a[25]||(a[25]=e=>s(oe).formInfo.extInfo.hasUsCard=e),"is-view":e.isView,options:s(k)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required"])):V("",!0),re("marriage")?(I(),c(t,{key:16,modelValue:s(oe).formInfo.extInfo.marriageStatus,"onUpdate:modelValue":a[27]||(a[27]=e=>s(oe).formInfo.extInfo.marriageStatus=e),label:"婚姻状况",name:`${e.prefix}_marriageStatus`,placeholder:"请选择","data-source":s(S),"is-link":"",required:de("marriage")},null,8,["modelValue","name","data-source","required"])):V("",!0),re("educationDegree")?(I(),c(t,{key:17,modelValue:s(oe).formInfo.extInfo.educationDegree,"onUpdate:modelValue":a[28]||(a[28]=e=>s(oe).formInfo.extInfo.educationDegree=e),label:"学历",name:`${e.prefix}_educationDegree`,"data-source":s(z),mapping:{label:"name",value:"code",children:"child"},placeholder:"请选择",required:de("educationDegree"),"is-link":""},null,8,["modelValue","name","data-source","required"])):V("",!0),re("mobile")?(I(),c(d,{key:18,modelValue:s(oe).formInfo.mobile,"onUpdate:modelValue":a[29]||(a[29]=e=>s(oe).formInfo.mobile=e),label:"手机号码",name:`${e.prefix}_mobile`,placeholder:"请输入",maxlength:11,required:de("mobile"),"validate-type":[s(i).PHONE]},null,8,["modelValue","name","required","validate-type"])):V("",!0),re("email")?(I(),c(d,{key:19,modelValue:s(oe).formInfo.email,"onUpdate:modelValue":a[30]||(a[30]=e=>s(oe).formInfo.email=e),label:"电子邮箱",name:`${e.prefix}_email`,placeholder:"请输入",required:de("email"),"validate-type":[s(i).EMAIL]},null,8,["modelValue","name","required","validate-type"])):V("",!0),re("familyAddress")?(I(),c(R,{key:20,modelValue:s(oe).formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":a[31]||(a[31]=e=>s(oe).formInfo.extInfo.familyAreaCode=e),field1:s(oe).formInfo.extInfo.familyProvinceCode,"onUpdate:field1":a[32]||(a[32]=e=>s(oe).formInfo.extInfo.familyProvinceCode=e),field2:s(oe).formInfo.extInfo.familyCityCode,"onUpdate:field2":a[33]||(a[33]=e=>s(oe).formInfo.extInfo.familyCityCode=e),field3:s(oe).formInfo.extInfo.familyAreaCode,"onUpdate:field3":a[34]||(a[34]=e=>s(oe).formInfo.extInfo.familyAreaCode=e),label:"家庭地址",name:`${e.prefix}_familyProvinceCode`,placeholder:"请选择","is-link":"",required:de("familyAddress"),"data-source":s(Q),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):V("",!0),re("familyAddressDetail")?(I(),c(d,{key:21,modelValue:s(oe).formInfo.extInfo.familyAddress,"onUpdate:modelValue":a[35]||(a[35]=e=>s(oe).formInfo.extInfo.familyAddress=e),label:"地址详情",name:`${e.prefix}_familyAddress`,placeholder:"请输入",rules:[{validator:(...e)=>ue(100,...e)}],required:de("familyAddressDetail")},null,8,["modelValue","name","rules","required"])):V("",!0),re("familyPostCode")?(I(),c(d,{key:22,modelValue:s(oe).formInfo.extInfo.familyZipCode,"onUpdate:modelValue":a[36]||(a[36]=e=>s(oe).formInfo.extInfo.familyZipCode=e),label:"家庭邮编",name:`${e.prefix}_familyZipCode`,placeholder:"请输入",required:de("familyPostCode"),"validate-type":[s(i).ZIP_CODE]},null,8,["modelValue","name","required","validate-type"])):V("",!0),re("workAddress")?(I(),c(R,{key:23,modelValue:s(oe).formInfo.extInfo.workAreaCode,"onUpdate:modelValue":a[37]||(a[37]=e=>s(oe).formInfo.extInfo.workAreaCode=e),field1:s(oe).formInfo.extInfo.workProvinceCode,"onUpdate:field1":a[38]||(a[38]=e=>s(oe).formInfo.extInfo.workProvinceCode=e),field2:s(oe).formInfo.extInfo.workCityCode,"onUpdate:field2":a[39]||(a[39]=e=>s(oe).formInfo.extInfo.workCityCode=e),field3:s(oe).formInfo.extInfo.workAreaCode,"onUpdate:field3":a[40]||(a[40]=e=>s(oe).formInfo.extInfo.workAreaCode=e),label:"工作地址",name:`${e.prefix}_workProvinceCode`,placeholder:"请选择","is-link":"",required:de("workAddress"),"data-source":s(Q),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):V("",!0),re("workAddressDetail")?(I(),c(d,{key:24,modelValue:s(oe).formInfo.extInfo.workAddress,"onUpdate:modelValue":a[41]||(a[41]=e=>s(oe).formInfo.extInfo.workAddress=e),label:"地址详情",name:`${e.prefix}_workAddress`,placeholder:"请输入",rules:[{validator:(...e)=>ue(100,...e)}],required:de("workAddressDetail")},null,8,["modelValue","name","rules","required"])):V("",!0),re("workZipCode")?(I(),c(d,{key:25,modelValue:s(oe).formInfo.extInfo.workZipCode,"onUpdate:modelValue":a[42]||(a[42]=e=>s(oe).formInfo.extInfo.workZipCode=e),label:"工作邮编",required:de("workZipCode"),name:`${e.prefix}_workPostCode`,placeholder:"请输入","validate-type":[s(i).ZIP_CODE]},null,8,["modelValue","required","name","validate-type"])):V("",!0),re("workPlace")?(I(),c(d,{key:26,modelValue:s(oe).formInfo.extInfo.workStation,"onUpdate:modelValue":a[43]||(a[43]=e=>s(oe).formInfo.extInfo.workStation=e),label:"单位名称",name:`${e.prefix}_workPostCode`,placeholder:"请输入",rules:[{validator:(...e)=>ue(20,...e)}],required:de("workPlace")},null,8,["modelValue","name","rules","required"])):V("",!0),re("workContent")?(I(),c(d,{key:27,modelValue:s(oe).formInfo.extInfo.workContent,"onUpdate:modelValue":a[44]||(a[44]=e=>s(oe).formInfo.extInfo.workContent=e),label:"工作内容",name:`${e.prefix}_workContent`,required:de("workContent"),placeholder:"请输入",rules:[{validator:(...e)=>ue(100,...e)}]},null,8,["modelValue","name","required","rules"])):V("",!0),re("taxCert")?(I(),c(t,{key:28,modelValue:s(oe).formInfo.extInfo.taxResident,"onUpdate:modelValue":a[45]||(a[45]=e=>s(oe).formInfo.extInfo.taxResident=e),label:"税收居民身份",name:`${e.prefix}_taxResident`,"data-source":s(O),required:de("taxCert"),placeholder:"请输入"},null,8,["modelValue","name","data-source","required"])):V("",!0),re("partTime")?(I(),c(d,{key:29,modelValue:s(oe).formInfo.extInfo.isPartTime,"onUpdate:modelValue":a[47]||(a[47]=e=>s(oe).formInfo.extInfo.isPartTime=e),label:"是否兼职",name:`${e.prefix}_isPartTime`,required:de("partTime"),placeholder:"请输入"},{input:x((()=>[y(r,{modelValue:s(oe).formInfo.extInfo.isPartTime,"onUpdate:modelValue":a[46]||(a[46]=e=>s(oe).formInfo.extInfo.isPartTime=e),"is-view":e.isView,options:s(k)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required"])):V("",!0),(null==(l=s(le).beneficiaryType)?void 0:l.isDisplay)?(I(),c(t,{key:30,modelValue:s(oe).formInfo.benefitOrder,"onUpdate:modelValue":a[48]||(a[48]=e=>s(oe).formInfo.benefitOrder=e),label:"受益人顺序",name:`${e.prefix}_benefitOrder`,"data-source":s(N),required:de("beneficiaryType")},null,8,["modelValue","name","data-source","required"])):V("",!0),(null==(n=s(le).benefitRate)?void 0:n.isDisplay)?(I(),c(d,{key:31,modelValue:s(oe).formInfo.benefitRate,"onUpdate:modelValue":a[49]||(a[49]=e=>s(oe).formInfo.benefitRate=e),required:de("benefitRate"),name:`${e.prefix}_benefitRate`,rules:[{validator:me}],label:"受益比例"},{extra:x((()=>[Z])),_:1},8,["modelValue","required","name","rules"])):V("",!0)])):V("",!0)}}});export{j as _};
========
import{d as e,S as o,a,r as l,ad as n,E as r,ah as d,aI as i,an as t,aJ as f,aK as m,aL as u,g as s,c as I,h as p,e as c,w as x,f as y,k as V,a7 as v,aM as C,j as h,n as k,aN as b,a9 as _,m as q,ap as U,ao as w,aO as A,aq as T,aP as E,v as D,aF as $}from"./index-9021af4d.js";import{r as R}from"./relativeTime-fde2a46e.js";import{u as g}from"./useDicData-85ca24f8.js";import{c as P,M as S,T as O,d as N,e as L}from"./infoCollection-a1012a9c.js";const H={key:0,class:"com-personal-wrapper"},M={class:"date-extra"},Y=h("span",{class:"input-extra"},"万",-1),G=h("span",{class:"input-extra"},"万",-1),Z=h("span",{class:"input-extra"},"%",-1),j=e({__name:"index",props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]}},emits:["update:images"],setup(e,{emit:j}){const B=e;o();const{venderCode:K=""}=a().query,W=g("CERT_TYPE"),F=g(`${K.toLocaleUpperCase()}_OCCUPATION`);g("MARRIAGE_STATUS");const z=g("DEGREE"),J=g("NATIONALITY"),Q=g("NATIONAL_REGION_CODE"),X=l([]),ee=l(!1),oe=l({formInfo:B.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""});n.extend(R);const ae=l(2===B.formInfo.certEndType),le=r((()=>{const e={};return B.factorList.forEach((o=>{e[o.code]=o})),e})),ne=e=>{oe.value.formInfo.certNo=e.personIdCard,oe.value.formInfo.name=e.personName,oe.value.formInfo.certEndDate=n(e.validDateEnd,"YYYYMMDD").toDate()},re=e=>le.value&&le.value[e]&&le.value[e].isDisplay===_.YES,de=e=>le.value&&le.value[e]&&le.value[e].isMustInput===_.YES,ie=r((()=>[d.CERT,d.HOUSE_HOLD].includes(`${oe.value.formInfo.certType}`)?[i.ID_CARD]:`${oe.value.formInfo.certType}`===d.BIRTH?[i.BIRTH]:`${oe.value.formInfo.certType}`===d.PASSPORT?[i.PASSPORT]:[])),te=(e,o)=>de("attachment")?2===oe.value.formInfo.certEndType||oe.value.formInfo.certEndDate?"":"请选择有效期至":"",fe=(e,o)=>/^\d{1,10}(\.\d{1,2})?$/.test(e)?"":"年收入最多录入10位数字",me=(e,o)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(e)?"":"收益比例只能填写1-100的正整数",ue=(e,o,a)=>o.length>e?`最大不能超过${e}个字符`:"",se=(e,o)=>{var a,l,r,i,t,f,m;if(!re("nationality"))return"";if("CHN"===(null==(l=null==(a=oe.value.formInfo)?void 0:a.extInfo)?void 0:l.nationalityCode)){if(![d.CERT,d.HOUSE_HOLD,d.BIRTH,d.MILITARY_CARD].includes(`${e}`))return"国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证"}else if(["HKG","MAC"].includes(null==(i=null==(r=oe.value.formInfo)?void 0:r.extInfo)?void 0:i.nationalityCode)){if(![d.HK_MACAO_RESIDENCE_PERMIT,d.HONGKONG_MACAO].includes(`${e}`))return"国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证"}else if("TWN"===(null==(f=null==(t=oe.value.formInfo)?void 0:t.extInfo)?void 0:f.nationalityCode)){if(![d.TAIWAN_RESIDENCE_PERMIT,d.TAIWAN_TRAVEL].includes(`${e}`))return"国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证"}else if(![d.PASSPORT,d.FOREIGN_PERMANENT].includes(`${e}`))return"国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证";return n().year()-n(null==(m=oe.value.formInfo)?void 0:m.birthday).year()>2&&e===d.BIRTH?"年龄大于等于2周岁时，证件类型不能选择出生证":""},Ie=e=>Array.isArray(e)&&2===e.length&&e[0]&&e[1]?"":"请上传身份证正反面照片",pe=e=>B.beneficiaryList.filter((e=>e.relationToInsured===L.SPOUSE)).length>=2?"已存在配偶关系的受益人":"";return t((()=>ae.value),(e=>{e?(oe.value.formInfo.certEndType=2,oe.value.formInfo.certEndDate=""):oe.value.formInfo.certEndType=1}),{immediate:!0}),t((()=>oe.value.formInfo.certType),(e=>{[d.CERT,d.HOUSE_HOLD].includes(e)?ee.value=!0:ee.value=!1}),{deep:!0,immediate:!0}),t((()=>oe.value.formInfo.certNo),(e=>{f(e)&&(oe.value.formInfo.gender=+m(e),oe.value.formInfo.birthday=n(new Date(u(e))).format("YYYY-MM-DD"))}),{deep:!0,immediate:!0}),t((()=>B.images),(e=>{X.value=e}),{immediate:!0}),t((()=>B.formInfo),(()=>{oe.value.formInfo=B.formInfo}),{deep:!0,immediate:!0}),t(X,(e=>{j("update:images",e)}),{deep:!0}),(o,a)=>{var l,n;const r=q,d=U,t=w,f=A,m=T,u=E,_=D,R=$;return Object.keys(s(le)).length?(I(),p("div",H,[re("insureRelation")?(I(),c(d,{key:0,modelValue:s(oe).formInfo.relationToInsured,"onUpdate:modelValue":a[1]||(a[1]=e=>s(oe).formInfo.relationToInsured=e),name:`${e.prefix}_relationToInsured`,required:de("insureRelation"),label:"是被保人的",rules:[{validator:pe}]},{input:x((()=>[y(r,{modelValue:s(oe).formInfo.relationToInsured,"onUpdate:modelValue":a[0]||(a[0]=e=>s(oe).formInfo.relationToInsured=e),"is-view":e.isView,options:s(P).slice(1,4)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required","rules"])):V("",!0),re("certType")?(I(),c(t,{key:1,modelValue:s(oe).formInfo.certType,"onUpdate:modelValue":a[2]||(a[2]=e=>s(oe).formInfo.certType=e),label:"证件类型",name:`${e.prefix}_certType`,"data-source":s(W),mapping:{label:"name",value:"code",children:"child"},required:de("certType"),rules:[{validator:se}]},null,8,["modelValue","name","data-source","required","rules"])):V("",!0),re("attachment")&&s(oe).formInfo.certType+""=="1"?(I(),c(d,{key:2,label:"身份证上传",block:"",required:de("attachment"),rules:[{validator:Ie}],name:`${e.prefix}_idCard`},{input:x((()=>[y(f,{modelValue:s(X),"onUpdate:modelValue":a[3]||(a[3]=e=>v(X)?X.value=e:null),"is-view":e.isView,onOnOCR:ne},null,8,["modelValue","is-view"])])),_:1},8,["required","rules","name"])):V("",!0),re("attachment")&&s(oe).formInfo.certType&&s(oe).formInfo.certType+""!="1"?(I(),c(d,{key:3,label:"证件上传",block:"",required:de("attachment")},{input:x((()=>[y(m,{modelValue:s(X),"onUpdate:modelValue":a[4]||(a[4]=e=>v(X)?X.value=e:null),"max-count":1},null,8,["modelValue"])])),_:1},8,["required"])):V("",!0),re("certNo")?(I(),c(d,{key:4,modelValue:s(oe).formInfo.certNo,"onUpdate:modelValue":a[5]||(a[5]=e=>s(oe).formInfo.certNo=e),label:"证件号码",name:`${e.prefix}_certNo`,required:de("certNo"),placeholder:"请输入",maxlength:18,"validate-type":s(ie)},null,8,["modelValue","name","required","validate-type"])):V("",!0),re("name")?(I(),c(d,{key:5,modelValue:s(oe).formInfo.name,"onUpdate:modelValue":a[6]||(a[6]=e=>s(oe).formInfo.name=e),label:"姓名",name:`${e.prefix}_name`,required:de("name")},null,8,["modelValue","name","required"])):V("",!0),re("sex")?(I(),c(d,{key:6,modelValue:s(oe).formInfo.gender,"onUpdate:modelValue":a[8]||(a[8]=e=>s(oe).formInfo.gender=e),required:de("sex"),label:"性别",name:`${e.prefix}_gender`,placeholder:"请选择","is-view":s(ee)},{input:x((()=>[y(r,{modelValue:s(oe).formInfo.gender,"onUpdate:modelValue":a[7]||(a[7]=e=>s(oe).formInfo.gender=e),disabled:s(ee),"is-view":e.isView,options:s(C)},null,8,["modelValue","disabled","is-view","options"])])),_:1},8,["modelValue","required","name","is-view"])):V("",!0),re("birthday")?(I(),c(u,{key:7,modelValue:s(oe).formInfo.birthday,"onUpdate:modelValue":a[9]||(a[9]=e=>s(oe).formInfo.birthday=e),label:"出生日期",name:`${e.prefix}_birthday`,min:s(oe).birth.min,max:s(oe).birth.max,type:"date",required:de("birthday")},null,8,["modelValue","name","min","max","required"])):V("",!0),re("certEndDate")?(I(),c(u,{key:8,modelValue:s(oe).formInfo.certEndDate,"onUpdate:modelValue":a[11]||(a[11]=e=>s(oe).formInfo.certEndDate=e),label:"有效期至",name:`${e.prefix}_certEndDate`,type:"date",min:s(oe).certEndDate.min,max:s(oe).certEndDate.max,"is-view":s(ae)||e.isView,read:"",rules:[{validator:te}]},{extra:x((()=>[h("div",M,[y(_,{modelValue:s(ae),"onUpdate:modelValue":a[10]||(a[10]=e=>v(ae)?ae.value=e:null),"icon-size":16,disabled:e.isView},{default:x((()=>[k("长期")])),_:1},8,["modelValue","disabled"])])])),_:1},8,["modelValue","name","min","max","is-view","rules"])):V("",!0),re("houseHold")?(I(),c(R,{key:9,modelValue:s(oe).formInfo.extInfo.provinceCode,"onUpdate:modelValue":a[12]||(a[12]=e=>s(oe).formInfo.extInfo.provinceCode=e),field1:s(oe).formInfo.extInfo.provinceCode,"onUpdate:field1":a[13]||(a[13]=e=>s(oe).formInfo.extInfo.provinceCode=e),field2:s(oe).formInfo.extInfo.cityCode,"onUpdate:field2":a[14]||(a[14]=e=>s(oe).formInfo.extInfo.cityCode=e),field3:s(oe).formInfo.extInfo.areaCode,"onUpdate:field3":a[15]||(a[15]=e=>s(oe).formInfo.extInfo.areaCode=e),label:"户籍所在地",name:`${e.prefix}_provinceCode`,placeholder:"请选择","is-link":"",required:de("houseHold"),"data-source":s(Q),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):V("",!0),re("hasSocialInsurance")?(I(),c(d,{key:10,modelValue:s(oe).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[17]||(a[17]=e=>s(oe).formInfo.extInfo.hasSocialInsurance=e),label:"社保",name:`${e.prefix}_hasSocialInsurance`,placeholder:"请选择",required:de("hasSocialInsurance")},{input:x((()=>[y(r,{modelValue:s(oe).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[16]||(a[16]=e=>s(oe).formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,options:s(b)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required"])):V("",!0),re("occupation")?(I(),c(R,{key:11,modelValue:s(oe).formInfo.extInfo.occupationCodeList[0],"onUpdate:modelValue":a[18]||(a[18]=e=>s(oe).formInfo.extInfo.occupationCodeList[0]=e),field0:s(oe).formInfo.extInfo.occupationCodeList[0],"onUpdate:field0":a[19]||(a[19]=e=>s(oe).formInfo.extInfo.occupationCodeList[0]=e),field1:s(oe).formInfo.extInfo.occupationCodeList[1],"onUpdate:field1":a[20]||(a[20]=e=>s(oe).formInfo.extInfo.occupationCodeList[1]=e),field2:s(oe).formInfo.extInfo.occupationCodeList[2],"onUpdate:field2":a[21]||(a[21]=e=>s(oe).formInfo.extInfo.occupationCodeList[2]=e),label:"职业",name:`${e.prefix}_occupationCodeList`,placeholder:"请选择",required:de("occupation"),"data-source":s(F),mapping:{label:"value",value:"code",children:"children"},"is-link":""},null,8,["modelValue","field0","field1","field2","name","required","data-source"])):V("",!0),re("annualIncome")?(I(),c(d,{key:12,modelValue:s(oe).formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":a[22]||(a[22]=e=>s(oe).formInfo.extInfo.personalAnnualIncome=e),label:"个人年收入",name:`${e.prefix}_personalAnnualIncome`,required:de("annualIncome"),placeholder:"请输入",rules:[{validator:fe}]},{extra:x((()=>[Y])),_:1},8,["modelValue","name","required","rules"])):V("",!0),re("familyAnnualIncome")?(I(),c(d,{key:13,modelValue:s(oe).formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":a[23]||(a[23]=e=>s(oe).formInfo.extInfo.familyAnnualIncome=e),label:"家庭年收入",name:`${e.prefix}_familyAnnualIncome`,placeholder:"请输入",rules:[{validator:fe}],required:de("familyAnnualIncome")},{extra:x((()=>[G])),_:1},8,["modelValue","name","rules","required"])):V("",!0),re("nationality")?(I(),c(t,{key:14,modelValue:s(oe).formInfo.extInfo.nationalityCode,"onUpdate:modelValue":a[24]||(a[24]=e=>s(oe).formInfo.extInfo.nationalityCode=e),label:"国籍",name:`${e.prefix}_nationalityCode`,"data-source":s(J),mapping:{label:"name",value:"code",children:"child"},placeholder:"请选择",required:de("nationality"),"is-link":""},null,8,["modelValue","name","data-source","required"])):V("",!0),re("USAGreenCard")?(I(),c(d,{key:15,modelValue:s(oe).formInfo.extInfo.hasUsCard,"onUpdate:modelValue":a[26]||(a[26]=e=>s(oe).formInfo.extInfo.hasUsCard=e),label:"美国绿卡",name:`${e.prefix}_hasUsCard`,placeholder:"请选择",required:de("USAGreenCard")},{input:x((()=>[y(r,{modelValue:s(oe).formInfo.extInfo.hasUsCard,"onUpdate:modelValue":a[25]||(a[25]=e=>s(oe).formInfo.extInfo.hasUsCard=e),"is-view":e.isView,options:s(b)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required"])):V("",!0),re("marriage")?(I(),c(t,{key:16,modelValue:s(oe).formInfo.extInfo.marriageStatus,"onUpdate:modelValue":a[27]||(a[27]=e=>s(oe).formInfo.extInfo.marriageStatus=e),label:"婚姻状况",name:`${e.prefix}_marriageStatus`,placeholder:"请选择","data-source":s(S),"is-link":"",required:de("marriage")},null,8,["modelValue","name","data-source","required"])):V("",!0),re("educationDegree")?(I(),c(t,{key:17,modelValue:s(oe).formInfo.extInfo.educationDegree,"onUpdate:modelValue":a[28]||(a[28]=e=>s(oe).formInfo.extInfo.educationDegree=e),label:"学历",name:`${e.prefix}_educationDegree`,"data-source":s(z),mapping:{label:"name",value:"code",children:"child"},placeholder:"请选择",required:de("educationDegree"),"is-link":""},null,8,["modelValue","name","data-source","required"])):V("",!0),re("mobile")?(I(),c(d,{key:18,modelValue:s(oe).formInfo.mobile,"onUpdate:modelValue":a[29]||(a[29]=e=>s(oe).formInfo.mobile=e),label:"手机号码",name:`${e.prefix}_mobile`,placeholder:"请输入",maxlength:11,required:de("mobile"),"validate-type":[s(i).PHONE]},null,8,["modelValue","name","required","validate-type"])):V("",!0),re("email")?(I(),c(d,{key:19,modelValue:s(oe).formInfo.email,"onUpdate:modelValue":a[30]||(a[30]=e=>s(oe).formInfo.email=e),label:"电子邮箱",name:`${e.prefix}_email`,placeholder:"请输入",required:de("email"),"validate-type":[s(i).EMAIL]},null,8,["modelValue","name","required","validate-type"])):V("",!0),re("familyAddress")?(I(),c(R,{key:20,modelValue:s(oe).formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":a[31]||(a[31]=e=>s(oe).formInfo.extInfo.familyAreaCode=e),field1:s(oe).formInfo.extInfo.familyProvinceCode,"onUpdate:field1":a[32]||(a[32]=e=>s(oe).formInfo.extInfo.familyProvinceCode=e),field2:s(oe).formInfo.extInfo.familyCityCode,"onUpdate:field2":a[33]||(a[33]=e=>s(oe).formInfo.extInfo.familyCityCode=e),field3:s(oe).formInfo.extInfo.familyAreaCode,"onUpdate:field3":a[34]||(a[34]=e=>s(oe).formInfo.extInfo.familyAreaCode=e),label:"家庭地址",name:`${e.prefix}_familyProvinceCode`,placeholder:"请选择","is-link":"",required:de("familyAddress"),"data-source":s(Q),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):V("",!0),re("familyAddressDetail")?(I(),c(d,{key:21,modelValue:s(oe).formInfo.extInfo.familyAddress,"onUpdate:modelValue":a[35]||(a[35]=e=>s(oe).formInfo.extInfo.familyAddress=e),label:"地址详情",name:`${e.prefix}_familyAddress`,placeholder:"请输入",rules:[{validator:(...e)=>ue(100,...e)}],required:de("familyAddressDetail")},null,8,["modelValue","name","rules","required"])):V("",!0),re("familyPostCode")?(I(),c(d,{key:22,modelValue:s(oe).formInfo.extInfo.familyZipCode,"onUpdate:modelValue":a[36]||(a[36]=e=>s(oe).formInfo.extInfo.familyZipCode=e),label:"家庭邮编",name:`${e.prefix}_familyZipCode`,placeholder:"请输入",required:de("familyPostCode"),"validate-type":[s(i).ZIP_CODE]},null,8,["modelValue","name","required","validate-type"])):V("",!0),re("workAddress")?(I(),c(R,{key:23,modelValue:s(oe).formInfo.extInfo.workAreaCode,"onUpdate:modelValue":a[37]||(a[37]=e=>s(oe).formInfo.extInfo.workAreaCode=e),field1:s(oe).formInfo.extInfo.workProvinceCode,"onUpdate:field1":a[38]||(a[38]=e=>s(oe).formInfo.extInfo.workProvinceCode=e),field2:s(oe).formInfo.extInfo.workCityCode,"onUpdate:field2":a[39]||(a[39]=e=>s(oe).formInfo.extInfo.workCityCode=e),field3:s(oe).formInfo.extInfo.workAreaCode,"onUpdate:field3":a[40]||(a[40]=e=>s(oe).formInfo.extInfo.workAreaCode=e),label:"工作地址",name:`${e.prefix}_workProvinceCode`,placeholder:"请选择","is-link":"",required:de("workAddress"),"data-source":s(Q),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):V("",!0),re("workAddressDetail")?(I(),c(d,{key:24,modelValue:s(oe).formInfo.extInfo.workAddress,"onUpdate:modelValue":a[41]||(a[41]=e=>s(oe).formInfo.extInfo.workAddress=e),label:"地址详情",name:`${e.prefix}_workAddress`,placeholder:"请输入",rules:[{validator:(...e)=>ue(100,...e)}],required:de("workAddressDetail")},null,8,["modelValue","name","rules","required"])):V("",!0),re("workZipCode")?(I(),c(d,{key:25,modelValue:s(oe).formInfo.extInfo.workZipCode,"onUpdate:modelValue":a[42]||(a[42]=e=>s(oe).formInfo.extInfo.workZipCode=e),label:"工作邮编",required:de("workZipCode"),name:`${e.prefix}_workPostCode`,placeholder:"请输入","validate-type":[s(i).ZIP_CODE]},null,8,["modelValue","required","name","validate-type"])):V("",!0),re("workPlace")?(I(),c(d,{key:26,modelValue:s(oe).formInfo.extInfo.workStation,"onUpdate:modelValue":a[43]||(a[43]=e=>s(oe).formInfo.extInfo.workStation=e),label:"单位名称",name:`${e.prefix}_workPostCode`,placeholder:"请输入",rules:[{validator:(...e)=>ue(20,...e)}],required:de("workPlace")},null,8,["modelValue","name","rules","required"])):V("",!0),re("workContent")?(I(),c(d,{key:27,modelValue:s(oe).formInfo.extInfo.workContent,"onUpdate:modelValue":a[44]||(a[44]=e=>s(oe).formInfo.extInfo.workContent=e),label:"工作内容",name:`${e.prefix}_workContent`,required:de("workContent"),placeholder:"请输入",rules:[{validator:(...e)=>ue(100,...e)}]},null,8,["modelValue","name","required","rules"])):V("",!0),re("taxCert")?(I(),c(t,{key:28,modelValue:s(oe).formInfo.extInfo.taxResident,"onUpdate:modelValue":a[45]||(a[45]=e=>s(oe).formInfo.extInfo.taxResident=e),label:"税收居民身份",name:`${e.prefix}_taxResident`,"data-source":s(O),required:de("taxCert"),placeholder:"请输入"},null,8,["modelValue","name","data-source","required"])):V("",!0),re("partTime")?(I(),c(d,{key:29,modelValue:s(oe).formInfo.extInfo.isPartTime,"onUpdate:modelValue":a[47]||(a[47]=e=>s(oe).formInfo.extInfo.isPartTime=e),label:"是否兼职",name:`${e.prefix}_isPartTime`,required:de("partTime"),placeholder:"请输入"},{input:x((()=>[y(r,{modelValue:s(oe).formInfo.extInfo.isPartTime,"onUpdate:modelValue":a[46]||(a[46]=e=>s(oe).formInfo.extInfo.isPartTime=e),"is-view":e.isView,options:s(b)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required"])):V("",!0),(null==(l=s(le).beneficiaryType)?void 0:l.isDisplay)?(I(),c(t,{key:30,modelValue:s(oe).formInfo.benefitOrder,"onUpdate:modelValue":a[48]||(a[48]=e=>s(oe).formInfo.benefitOrder=e),label:"受益人顺序",name:`${e.prefix}_benefitOrder`,"data-source":s(N),required:de("beneficiaryType")},null,8,["modelValue","name","data-source","required"])):V("",!0),(null==(n=s(le).benefitRate)?void 0:n.isDisplay)?(I(),c(d,{key:31,modelValue:s(oe).formInfo.benefitRate,"onUpdate:modelValue":a[49]||(a[49]=e=>s(oe).formInfo.benefitRate=e),required:de("benefitRate"),name:`${e.prefix}_benefitRate`,rules:[{validator:me}],label:"受益比例"},{extra:x((()=>[Z])),_:1},8,["modelValue","required","name","rules"])):V("",!0)])):V("",!0)}}});export{j as _};
>>>>>>>> 6da178c539a513aca8b0c7a2f0178a042da657ad:dist/static/js/index-dd970e08.js
