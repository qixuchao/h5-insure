import{i as e,R as l,P as a,r as o,d as i,A as n,$ as r,l as t,C as u,m as d,s,n as m,p as f,t as v,x as c,Z as I,B as p,_ as V,G as w,L as b,M as x,T as y,aa as h,N as C}from"./vendor-87894311.js";import{C as k,V as U,I as R,J as _,K as q,Y as O}from"./index-881f6d78.js";import{R as g}from"./infoCollection-2a6bd55e.js";import{r as T}from"./relativeTime-89dc646e.js";import{u as L}from"./useDicData-333b2a5a.js";const A={key:0,class:"com-personal-wrapper"},E={class:"date-extra"},S=w("长期"),D=p("span",{class:"input-extra"},"万",-1),$=p("span",{class:"input-extra"},"万",-1),N=p("span",{class:"input-extra"},"%",-1),P=e({props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]},sendSmsCode:{type:Function,default:(e,l)=>{}}},emits:["update:images"],setup(e,{emit:h}){const C=e;l();const{venderCode:g=""}=a().query,P=L(`${g.toLocaleUpperCase()}_OCCUPATION`),H=L("NATIONAL_REGION_CODE"),j=o([]),B=o(!1),M=o({formInfo:C.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""});i.extend(T);const Y=o(2===C.formInfo.certEndType),F=o(0),Z=o("获取验证码"),G=o(!1),J=n((()=>{const e={};return C.factorList.forEach((l=>{e[l.code]=l})),e}));n((()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(M.value.formInfo.mobile)));const K=async()=>{F.value>0||C.sendSmsCode(M.value.formInfo.mobile,(()=>{G.value=!0,y({message:"短信发送成功，请查收"}),(()=>{if(F.value>0)return;F.value=60;const e=()=>{Z.value=`${F.value}s`,F.value-=1};e();const l=setInterval((()=>{0===F.value?(Z.value="获取验证码",F.value=0,clearInterval(l)):e()}),1e3)})()}))},W=e=>{M.value.formInfo.certNo=e.personIdCard,M.value.formInfo.name=e.personName,M.value.formInfo.certEndDate=i(e.validDateEnd,"YYYYMMDD").toDate()},z=e=>{var l;return J.value&&J.value[e]&&(null==(l=J.value[e])?void 0:l.isDisplay)===O.YES},Q=e=>J.value&&J.value[e]&&J.value[e].isMustInput===O.YES,X=(e,l)=>{var a,o;return(null==(o=null==(a=J.value)?void 0:a[e])?void 0:o[l])||""},ee=n((()=>[k.CERT,k.HOUSE_HOLD].includes(`${M.value.formInfo.certType}`)?[U.ID_CARD]:`${M.value.formInfo.certType}`===k.BIRTH?[U.BIRTH]:`${M.value.formInfo.certType}`===k.PASSPORT?[U.PASSPORT]:[U.ID_CARD])),le=(e,l)=>Q("attachment")?2===M.value.formInfo.certEndType||M.value.formInfo.certEndDate?"":"请选择有效期至":"",ae=(e,l)=>/^\d{1,10}(\.\d{1,2})?$/.test(e)?"":"年收入最多录入10位数字",oe=(e,l)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(e)?"":"收益比例只能填写1-100的正整数",ie=(e,l,a)=>l.length>e?`最大不能超过${e}个字符`:"",ne=(e,l)=>{var a,o,n,r,t,u,d;if(!z("nationality"))return"";if("CHN"===(null==(o=null==(a=M.value.formInfo)?void 0:a.extInfo)?void 0:o.nationalityCode)){if(![k.CERT,k.HOUSE_HOLD,k.BIRTH,k.MILITARY_CARD].includes(`${e}`))return"国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证"}else if(["HKG","MAC"].includes(null==(r=null==(n=M.value.formInfo)?void 0:n.extInfo)?void 0:r.nationalityCode)){if(![k.HK_MACAO_RESIDENCE_PERMIT,k.HONGKONG_MACAO].includes(`${e}`))return"国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证"}else if("TWN"===(null==(u=null==(t=M.value.formInfo)?void 0:t.extInfo)?void 0:u.nationalityCode)){if(![k.TAIWAN_RESIDENCE_PERMIT,k.TAIWAN_TRAVEL].includes(`${e}`))return"国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证"}else if(![k.PASSPORT,k.FOREIGN_PERMANENT].includes(`${e}`))return"国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证";return i().year()-i(null==(d=M.value.formInfo)?void 0:d.birthday).year()>2&&e===k.BIRTH?"年龄大于等于2周岁时，证件类型不能选择出生证":""},re=e=>Array.isArray(e)&&2===e.length&&e[0]&&e[1]?"":"请上传身份证正反面照片";return r((()=>Y.value),(e=>{e?(M.value.formInfo.certEndType=2,M.value.formInfo.certEndDate=""):M.value.formInfo.certEndType=1}),{immediate:!0}),r((()=>M.value.formInfo.certType),(e=>{[k.CERT,k.HOUSE_HOLD].includes(e)?B.value=!0:B.value=!1}),{deep:!0,immediate:!0}),r((()=>M.value.formInfo.certNo),(e=>{R(e)&&(M.value.formInfo.gender=+_(e),M.value.formInfo.birthday=i(new Date(q(e))).format("YYYY-MM-DD"))}),{deep:!0,immediate:!0}),r((()=>C.images),(e=>{j.value=e}),{immediate:!0}),r((()=>C.formInfo),(()=>{M.value.formInfo=C.formInfo}),{deep:!0,immediate:!0}),r(j,(e=>{h("update:images",e)}),{deep:!0}),(l,a)=>{const o=t("ProRadioButton"),i=t("ProField"),n=t("ProDatePicker"),r=t("ProPicker"),y=t("ProIDCardUpload"),h=t("ProImageUpload"),C=t("van-checkbox"),k=t("ProCascader"),R=t("van-button");return Object.keys(u(J)).length?(d(),s("div",A,[z("insuredBeneficiaryType")?(d(),m(i,{key:0,modelValue:M.value.formInfo.insuredBeneficiaryType,"onUpdate:modelValue":a[1]||(a[1]=e=>M.value.formInfo.insuredBeneficiaryType=e),label:X("insuredBeneficiaryType","title"),name:"insuredBeneficiaryType",placeholder:"请选择"},{input:f((()=>[v(o,{modelValue:M.value.formInfo.insuredBeneficiaryType,"onUpdate:modelValue":a[0]||(a[0]=e=>M.value.formInfo.insuredBeneficiaryType=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:X("insuredBeneficiaryType","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):c("",!0),z("insuredRelation")?(d(),m(i,{key:1,modelValue:M.value.formInfo.insuredRelation,"onUpdate:modelValue":a[3]||(a[3]=e=>M.value.formInfo.insuredRelation=e),label:X("insuredRelation","title"),name:"insuredRelation",placeholder:"请选择"},{input:f((()=>[v(o,{modelValue:M.value.formInfo.insuredRelation,"onUpdate:modelValue":a[2]||(a[2]=e=>M.value.formInfo.insuredRelation=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:X("insuredRelation","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):c("",!0),z("name")?(d(),m(i,{key:2,modelValue:M.value.formInfo.name,"onUpdate:modelValue":a[4]||(a[4]=e=>M.value.formInfo.name=e),label:X("name","title"),name:`${e.prefix}_name`,"is-view":e.isView,required:Q("name")},{"right-icon":f((()=>[I(l.$slots,"name")])),_:3},8,["modelValue","label","name","is-view","required"])):c("",!0),z("sex")?(d(),m(i,{key:3,modelValue:M.value.formInfo.gender,"onUpdate:modelValue":a[6]||(a[6]=e=>M.value.formInfo.gender=e),required:Q("sex"),label:X("sex","title"),name:`${e.prefix}_gender`,placeholder:"请选择","is-view":B.value},{input:f((()=>[v(o,{modelValue:M.value.formInfo.gender,"onUpdate:modelValue":a[5]||(a[5]=e=>M.value.formInfo.gender=e),disabled:B.value,"is-view":e.isView,prop:{label:"value",value:"code"},options:X("sex","attributeValueList")||[]},null,8,["modelValue","disabled","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):c("",!0),z("birthDate")?(d(),m(n,{key:4,modelValue:M.value.formInfo.birthday,"onUpdate:modelValue":a[7]||(a[7]=e=>M.value.formInfo.birthday=e),label:X("birthDate","title"),name:`${e.prefix}_birthday`,min:M.value.birth.min,max:M.value.birth.max,type:"date","is-view":e.isView,required:Q("birthDate")},null,8,["modelValue","label","name","min","max","is-view","required"])):c("",!0),z("certType")?(d(),m(r,{key:5,modelValue:M.value.formInfo.certType,"onUpdate:modelValue":a[8]||(a[8]=e=>M.value.formInfo.certType=e),label:X("certType","title"),name:`${e.prefix}_certType`,"data-source":X("certType","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:Q("certType"),rules:[{validator:ne}],"is-view":e.isView},null,8,["modelValue","label","name","data-source","required","rules","is-view"])):c("",!0),z("certImage")&&M.value.formInfo.certType+""=="1"?(d(),m(i,{key:6,label:"身份证上传",block:"",required:Q("certImage"),rules:[{validator:re}],name:`${e.prefix}_idCard`},{input:f((()=>[v(y,{modelValue:j.value,"onUpdate:modelValue":a[9]||(a[9]=e=>j.value=e),"is-view":e.isView,onOnOCR:W},null,8,["modelValue","is-view"])])),_:1},8,["required","rules","name"])):c("",!0),z("certImage")&&M.value.formInfo.certType&&M.value.formInfo.certType+""!="1"?(d(),m(i,{key:7,label:X("certImage","title"),block:"",required:Q("certImage")},{input:f((()=>[v(h,{modelValue:j.value,"onUpdate:modelValue":a[10]||(a[10]=e=>j.value=e),"is-view":e.isView,"max-count":1},null,8,["modelValue","is-view"])])),_:1},8,["label","required"])):c("",!0),z("certNo")?(d(),m(i,{key:8,modelValue:M.value.formInfo.certNo,"onUpdate:modelValue":a[11]||(a[11]=e=>M.value.formInfo.certNo=e),label:X("certNo","title"),name:`${e.prefix}_certNo`,required:Q("certNo"),placeholder:"请输入",maxlength:18,"is-view":e.isView,"validate-type":u(ee)},null,8,["modelValue","label","name","required","is-view","validate-type"])):c("",!0),z("certExpiry")?(d(),m(n,{key:9,modelValue:M.value.formInfo.certEndDate,"onUpdate:modelValue":a[13]||(a[13]=e=>M.value.formInfo.certEndDate=e),label:X("certExpiry","title"),name:`${e.prefix}_certEndDate`,type:"date",min:M.value.certEndDate.min,max:M.value.certEndDate.max,"is-view":Y.value||e.isView,read:"",rules:[{validator:le}]},{extra:f((()=>[p("div",E,[v(C,{modelValue:Y.value,"onUpdate:modelValue":a[12]||(a[12]=e=>Y.value=e),"icon-size":16,disabled:e.isView},{default:f((()=>[S])),_:1},8,["modelValue","disabled"])])])),_:1},8,["modelValue","label","name","min","max","is-view","rules"])):c("",!0),z("age")?(d(),m(i,{key:10,modelValue:M.value.formInfo.name,"onUpdate:modelValue":a[14]||(a[14]=e=>M.value.formInfo.name=e),label:X("age","title"),name:`${e.prefix}_age`,"is-view":e.isView,required:Q("age")},null,8,["modelValue","label","name","is-view","required"])):c("",!0),z("residence")?(d(),m(k,{key:11,modelValue:M.value.formInfo.extInfo.provinceCode,"onUpdate:modelValue":a[15]||(a[15]=e=>M.value.formInfo.extInfo.provinceCode=e),field1:M.value.formInfo.extInfo.provinceCode,"onUpdate:field1":a[16]||(a[16]=e=>M.value.formInfo.extInfo.provinceCode=e),field2:M.value.formInfo.extInfo.cityCode,"onUpdate:field2":a[17]||(a[17]=e=>M.value.formInfo.extInfo.cityCode=e),field3:M.value.formInfo.extInfo.areaCode,"onUpdate:field3":a[18]||(a[18]=e=>M.value.formInfo.extInfo.areaCode=e),label:X("residence","title"),name:`${e.prefix}_provinceCode`,placeholder:"请选择","is-link":"","is-view":e.isView,required:Q("residence"),"data-source":u(H),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):c("",!0),z("social")?(d(),m(i,{key:12,modelValue:M.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[20]||(a[20]=e=>M.value.formInfo.extInfo.hasSocialInsurance=e),label:X("social","title"),name:`${e.prefix}_hasSocialInsurance`,placeholder:"请选择",required:Q("social")},{input:f((()=>[v(o,{modelValue:M.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[19]||(a[19]=e=>M.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:X("social","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):c("",!0),z("height")?(d(),m(i,{key:13,modelValue:M.value.formInfo.name,"onUpdate:modelValue":a[21]||(a[21]=e=>M.value.formInfo.name=e),label:X("height","title"),"is-view":e.isView,name:`${e.prefix}_height`,required:Q("height")},null,8,["modelValue","label","is-view","name","required"])):c("",!0),z("weight")?(d(),m(i,{key:14,modelValue:M.value.formInfo.name,"onUpdate:modelValue":a[22]||(a[22]=e=>M.value.formInfo.name=e),label:X("weight","title"),name:`${e.prefix}_weight`,"is-view":e.isView,required:Q("weight")},null,8,["modelValue","label","name","is-view","required"])):c("",!0),z("BMI")?(d(),m(i,{key:15,modelValue:M.value.formInfo.name,"onUpdate:modelValue":a[23]||(a[23]=e=>M.value.formInfo.name=e),label:X("BMI","title"),name:`${e.prefix}_BMI`,"is-view":e.isView,required:Q("BMI")},null,8,["modelValue","label","name","is-view","required"])):c("",!0),z("insuredRiskManagementLevel")?(d(),m(i,{key:16,modelValue:M.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[25]||(a[25]=e=>M.value.formInfo.extInfo.hasSocialInsurance=e),label:X("insuredRiskManagementLevel","title"),name:`${e.prefix}_hasSocialInsurance`,placeholder:"请选择",required:Q("insuredRiskManagementLevel")},{input:f((()=>[v(o,{modelValue:M.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[24]||(a[24]=e=>M.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:X("insuredRiskManagementLevel","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):c("",!0),z("purchaseOtherInsurance")?(d(),m(i,{key:17,modelValue:M.value.formInfo.extInfo.purchaseOtherInsurance,"onUpdate:modelValue":a[27]||(a[27]=e=>M.value.formInfo.extInfo.purchaseOtherInsurance=e),label:X("purchaseOtherInsurance","title"),name:`${e.prefix}_purchaseOtherInsurance`,placeholder:"请选择",required:Q("purchaseOtherInsurance")},{input:f((()=>[v(o,{modelValue:M.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[26]||(a[26]=e=>M.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:X("purchaseOtherInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):c("",!0),z("injuryInsurance")?(d(),m(i,{key:18,modelValue:M.value.formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":a[29]||(a[29]=e=>M.value.formInfo.extInfo.injuryInsurance=e),label:X("injuryInsurance","title"),name:`${e.prefix}_hasSocialInsurance`,placeholder:"请选择",required:Q("injuryInsurance")},{input:f((()=>[v(o,{modelValue:M.value.formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":a[28]||(a[28]=e=>M.value.formInfo.extInfo.injuryInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:X("injuryInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):c("",!0),z("insureArea")?(d(),m(k,{key:19,label:X("insureArea","title"),name:"insureAreaCode",placeholder:"请选择","is-link":"","is-view":e.isView,required:Q("insureArea"),"data-source":u(H),mapping:{label:"name",value:"code",children:"children"}},null,8,["label","is-view","required","data-source"])):c("",!0),z("occupation")?(d(),m(k,{key:20,modelValue:M.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:modelValue":a[30]||(a[30]=e=>M.value.formInfo.extInfo.occupationCodeList[0]=e),field0:M.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:field0":a[31]||(a[31]=e=>M.value.formInfo.extInfo.occupationCodeList[0]=e),field1:M.value.formInfo.extInfo.occupationCodeList[1],"onUpdate:field1":a[32]||(a[32]=e=>M.value.formInfo.extInfo.occupationCodeList[1]=e),field2:M.value.formInfo.extInfo.occupationCodeList[2],"onUpdate:field2":a[33]||(a[33]=e=>M.value.formInfo.extInfo.occupationCodeList[2]=e),label:X("occupation","title"),name:`${e.prefix}_occupationCodeList`,placeholder:"请选择","is-view":e.isView,required:Q("occupation"),"data-source":u(P),mapping:{label:"name",value:"code",children:"children"},"is-link":""},null,8,["modelValue","field0","field1","field2","label","name","is-view","required","data-source"])):c("",!0),z("personalAnnualIncome")?(d(),m(i,{key:21,modelValue:M.value.formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":a[34]||(a[34]=e=>M.value.formInfo.extInfo.personalAnnualIncome=e),label:X("personalAnnualIncome","title"),name:`${e.prefix}_personalAnnualIncome`,required:Q("personalAnnualIncome"),placeholder:"请输入","is-view":e.isView,rules:[{validator:ae}]},{extra:f((()=>[D])),_:1},8,["modelValue","label","name","required","is-view","rules"])):c("",!0),z("familyAnnualIncome")?(d(),m(i,{key:22,modelValue:M.value.formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":a[35]||(a[35]=e=>M.value.formInfo.extInfo.familyAnnualIncome=e),label:X("familyAnnualIncome","title"),name:`${e.prefix}_familyAnnualIncome`,placeholder:"请输入","is-view":e.isView,rules:[{validator:ae}],required:Q("familyAnnualIncome")},{extra:f((()=>[$])),_:1},8,["modelValue","label","name","is-view","rules","required"])):c("",!0),z("country")?(d(),m(r,{key:23,modelValue:M.value.formInfo.extInfo.nationalityCode,"onUpdate:modelValue":a[36]||(a[36]=e=>M.value.formInfo.extInfo.nationalityCode=e),label:X("country","title"),name:`${e.prefix}_nationalityCode`,"data-source":X("country","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},placeholder:"请选择",required:Q("country"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):c("",!0),z("hasUsCard")?(d(),m(i,{key:24,modelValue:M.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":a[38]||(a[38]=e=>M.value.formInfo.extInfo.hasUsCard=e),label:X("hasUsCard","title"),name:`${e.prefix}_hasUsCard`,placeholder:"请选择",required:Q("hasUsCard")},{input:f((()=>[v(o,{modelValue:M.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":a[37]||(a[37]=e=>M.value.formInfo.extInfo.hasUsCard=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:X("hasUsCard","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):c("",!0),z("marritalStatus")?(d(),m(r,{key:25,modelValue:M.value.formInfo.extInfo.marriageStatus,"onUpdate:modelValue":a[39]||(a[39]=e=>M.value.formInfo.extInfo.marriageStatus=e),label:X("marritalStatus","title"),name:`${e.prefix}_marriageStatus`,placeholder:"请选择","data-source":X("marritalStatus","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},"is-link":"","is-view":e.isView,required:Q("marritalStatus")},null,8,["modelValue","label","name","data-source","is-view","required"])):c("",!0),z("degree")?(d(),m(r,{key:26,modelValue:M.value.formInfo.extInfo.educationDegree,"onUpdate:modelValue":a[40]||(a[40]=e=>M.value.formInfo.extInfo.educationDegree=e),label:X("degree","title"),name:`${e.prefix}_educationDegree`,"data-source":X("degree","attributeValueList")||[],mapping:{label:"name",value:"code",children:"child"},placeholder:"请选择",required:Q("degree"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):c("",!0),z("mobile")?(d(),m(i,{key:27,modelValue:M.value.formInfo.mobile,"onUpdate:modelValue":a[41]||(a[41]=e=>M.value.formInfo.mobile=e),label:X("mobile","title"),name:`${e.prefix}_mobile`,placeholder:"请输入",maxlength:11,"is-view":e.isView,required:Q("mobile"),"validate-type":[u(U).PHONE]},null,8,["modelValue","label","name","is-view","required","validate-type"])):c("",!0),z("verificationCode")?(d(),m(i,{key:28,modelValue:M.value.formInfo.verificationCode,"onUpdate:modelValue":a[42]||(a[42]=e=>M.value.formInfo.verificationCode=e),label:X("verificationCode","title"),name:`${e.prefix}_verificationCode`,"is-view":e.isView,required:Q("verificationCode")},V({_:2},[e.isView?void 0:{name:"extra",fn:f((()=>[v(R,{class:x(["sms-code",{"count-down":F.value>0}]),size:"small",type:"primary",onClick:K},{default:f((()=>[w(b(Z.value),1)])),_:1},8,["class"])]))}]),1032,["modelValue","label","name","is-view","required"])):c("",!0),z("isSmoke")?(d(),m(i,{key:29,modelValue:M.value.formInfo.isSmoke,"onUpdate:modelValue":a[44]||(a[44]=e=>M.value.formInfo.isSmoke=e),required:Q("isSmoke"),label:X("isSmoke","title"),name:`${e.prefix}_isSmoke`,placeholder:"请选择","is-view":B.value},{input:f((()=>[v(o,{modelValue:M.value.formInfo.isSmoke,"onUpdate:modelValue":a[43]||(a[43]=e=>M.value.formInfo.isSmoke=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:X("isSmoke","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):c("",!0),z("contactNo")?(d(),m(i,{key:30,modelValue:M.value.formInfo.contactNo,"onUpdate:modelValue":a[45]||(a[45]=e=>M.value.formInfo.contactNo=e),label:X("contactNo","title"),name:`${e.prefix}_contactNo`,"is-view":e.isView,required:Q("contactNo")},null,8,["modelValue","label","name","is-view","required"])):c("",!0),z("email")?(d(),m(i,{key:31,modelValue:M.value.formInfo.email,"onUpdate:modelValue":a[46]||(a[46]=e=>M.value.formInfo.email=e),label:X("email","title"),name:`${e.prefix}_email`,placeholder:"请输入","is-view":e.isView,required:Q("email"),"validate-type":[u(U).EMAIL]},null,8,["modelValue","label","name","is-view","required","validate-type"])):c("",!0),z("homeAddress")?(d(),m(k,{key:32,modelValue:M.value.formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":a[47]||(a[47]=e=>M.value.formInfo.extInfo.familyAreaCode=e),field1:M.value.formInfo.extInfo.familyProvinceCode,"onUpdate:field1":a[48]||(a[48]=e=>M.value.formInfo.extInfo.familyProvinceCode=e),field2:M.value.formInfo.extInfo.familyCityCode,"onUpdate:field2":a[49]||(a[49]=e=>M.value.formInfo.extInfo.familyCityCode=e),field3:M.value.formInfo.extInfo.familyAreaCode,"onUpdate:field3":a[50]||(a[50]=e=>M.value.formInfo.extInfo.familyAreaCode=e),label:X("homeAddress","title"),name:`${e.prefix}_familyProvinceCode`,placeholder:"请选择","is-link":"","is-view":e.isView,required:Q("homeAddress"),"data-source":u(H),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):c("",!0),z("homeAddressDetail")?(d(),m(i,{key:33,modelValue:M.value.formInfo.extInfo.familyAddress,"onUpdate:modelValue":a[51]||(a[51]=e=>M.value.formInfo.extInfo.familyAddress=e),label:X("homeAddressDetail","title"),name:`${e.prefix}_familyAddress`,placeholder:"请输入","is-view":e.isView,rules:[{validator:(...e)=>ie(100,...e)}],required:Q("homeAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):c("",!0),z("homePostalCode")?(d(),m(i,{key:34,modelValue:M.value.formInfo.extInfo.familyZipCode,"onUpdate:modelValue":a[52]||(a[52]=e=>M.value.formInfo.extInfo.familyZipCode=e),label:X("homePostalCode","title"),name:`${e.prefix}_familyZipCode`,placeholder:"请输入","is-view":e.isView,required:Q("homePostalCode"),"validate-type":[u(U).ZIP_CODE]},null,8,["modelValue","label","name","is-view","required","validate-type"])):c("",!0),z("workAddress")?(d(),m(k,{key:35,modelValue:M.value.formInfo.extInfo.workAreaCode,"onUpdate:modelValue":a[53]||(a[53]=e=>M.value.formInfo.extInfo.workAreaCode=e),field1:M.value.formInfo.extInfo.workProvinceCode,"onUpdate:field1":a[54]||(a[54]=e=>M.value.formInfo.extInfo.workProvinceCode=e),field2:M.value.formInfo.extInfo.workCityCode,"onUpdate:field2":a[55]||(a[55]=e=>M.value.formInfo.extInfo.workCityCode=e),field3:M.value.formInfo.extInfo.workAreaCode,"onUpdate:field3":a[56]||(a[56]=e=>M.value.formInfo.extInfo.workAreaCode=e),label:X("workAddress","title"),name:`${e.prefix}_workProvinceCode`,placeholder:"请选择","is-link":"","is-view":e.isView,required:Q("workAddress"),"data-source":u(H),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):c("",!0),z("workAddressDetail")?(d(),m(i,{key:36,modelValue:M.value.formInfo.extInfo.workAddress,"onUpdate:modelValue":a[57]||(a[57]=e=>M.value.formInfo.extInfo.workAddress=e),label:X("workAddressDetail","title"),name:`${e.prefix}_workAddress`,placeholder:"请输入","is-view":e.isView,rules:[{validator:(...e)=>ie(100,...e)}],required:Q("workAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):c("",!0),z("workPostalCode")?(d(),m(i,{key:37,modelValue:M.value.formInfo.extInfo.workZipCode,"onUpdate:modelValue":a[58]||(a[58]=e=>M.value.formInfo.extInfo.workZipCode=e),label:X("workPostalCode","title"),required:Q("workZipCode"),name:`${e.prefix}_workPostCode`,placeholder:"请输入","is-view":e.isView,"validate-type":[u(U).ZIP_CODE]},null,8,["modelValue","label","required","name","is-view","validate-type"])):c("",!0),z("companyName")?(d(),m(i,{key:38,modelValue:M.value.formInfo.extInfo.workStation,"onUpdate:modelValue":a[59]||(a[59]=e=>M.value.formInfo.extInfo.workStation=e),label:X("companyName","title"),name:`${e.prefix}_workPostCode`,placeholder:"请输入","is-view":e.isView,rules:[{validator:(...e)=>ie(20,...e)}],required:Q("companyName")},null,8,["modelValue","label","name","is-view","rules","required"])):c("",!0),z("workContent")?(d(),m(i,{key:39,modelValue:M.value.formInfo.extInfo.workContent,"onUpdate:modelValue":a[60]||(a[60]=e=>M.value.formInfo.extInfo.workContent=e),label:X("workContent","title"),name:`${e.prefix}_workContent`,required:Q("workContent"),placeholder:"请输入","is-view":e.isView,rules:[{validator:(...e)=>ie(100,...e)}]},null,8,["modelValue","label","name","required","is-view","rules"])):c("",!0),z("chineseTaxResident")?(d(),m(i,{key:40,modelValue:M.value.formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":a[62]||(a[62]=e=>M.value.formInfo.extInfo.chineseTaxResident=e),label:X("chineseTaxResident","title"),name:`${e.prefix}_taxResident`,required:Q("chineseTaxResident"),placeholder:"请输入"},{input:f((()=>[v(o,{modelValue:M.value.formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":a[61]||(a[61]=e=>M.value.formInfo.extInfo.chineseTaxResident=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:X("chineseTaxResident","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):c("",!0),z("taxResident")?(d(),m(r,{key:41,modelValue:M.value.formInfo.taxResident,"onUpdate:modelValue":a[63]||(a[63]=e=>M.value.formInfo.taxResident=e),"is-view":e.isView,label:X("taxResident","title"),name:`${e.prefix}_benefitOrder`,"data-source":X("taxResident","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:Q("taxResident")},null,8,["modelValue","is-view","label","name","data-source","required"])):c("",!0),z("partTimeJob")?(d(),m(i,{key:42,modelValue:M.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":a[65]||(a[65]=e=>M.value.formInfo.extInfo.isPartTime=e),label:X("partTimeJob","title"),name:`${e.prefix}_isPartTime`,required:Q("partTimeJob"),placeholder:"请输入"},{input:f((()=>[v(o,{modelValue:M.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":a[64]||(a[64]=e=>M.value.formInfo.extInfo.isPartTime=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:X("partTimeJob","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):c("",!0),z("benefitOrder")?(d(),m(r,{key:43,modelValue:M.value.formInfo.benefitOrder,"onUpdate:modelValue":a[66]||(a[66]=e=>M.value.formInfo.benefitOrder=e),label:X("benefitOrder","title"),name:`${e.prefix}_benefitOrder`,"is-view":e.isView,"data-source":X("benefitOrder","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:Q("benefitOrder")},null,8,["modelValue","label","name","is-view","data-source","required"])):c("",!0),z("benefitRate")?(d(),m(i,{key:44,modelValue:M.value.formInfo.benefitRate,"onUpdate:modelValue":a[67]||(a[67]=e=>M.value.formInfo.benefitRate=e),required:Q("benefitRate"),name:`${e.prefix}_benefitRate`,"is-view":e.isView,rules:[{validator:oe}],label:X("benefitRate","title")},{extra:f((()=>[N])),_:1},8,["modelValue","required","name","is-view","rules","label"])):c("",!0),I(l.$slots,"default")])):c("",!0)}}});const H={class:"page-info-wrapper"},j=e({props:{factorObject:null,formInfo:{default:()=>({})},isView:{type:Boolean,default:!1},sendSmsCode:{type:Function,default:(e,l)=>{}},titleCollection:{default:()=>({})},inputAlign:{default:"left"}},setup(e,{expose:l}){const i=e;h(),a();const u=o({}),p=o({extInfo:{},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL"}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),V=o(null),w=o([]),b=o([]);o([]),o([]),o([]),C({beneficiaryId:0,nextPage:"",currentAddress:null,isLoading:!0});const x=n((()=>{var e,l;const a={INSURER:{},HOLDER:{}};return((null==(e=u.value)?void 0:e.INSURER)||[]).forEach((e=>{a.INSURER[e.code]=e})),((null==(l=u.value)?void 0:l.HOLDER)||[]).forEach((e=>{a.HOLDER[e.code]=e})),a})),y=(e,l)=>{var a,o,i;return(null==(i=null==(o=null==(a=x.value)?void 0:a[l])?void 0:o[e])?void 0:i.isDisplay)===O.YES},k=(e,l)=>{var a,o;return(null==(o=null==(a=x.value)?void 0:a[l])?void 0:o[e].isMustInput)===O.YES},U=(e,l,a)=>{var o,i,n;return(null==(n=null==(i=null==(o=x.value)?void 0:o[a])?void 0:i[e])?void 0:n[l])||""};return l({validateForm:()=>new Promise(((e,l)=>{var a;null==(a=V.value)||a.validate().then((()=>{e(p.value)}),(()=>{l()}))}))}),r((()=>i.factorObject),(()=>{const e={BENEFICIARY:i.factorObject[3],INSURER:i.factorObject[2],HOLDER:i.factorObject[1]};u.value=e}),{immediate:!0,deep:!0}),r([()=>p.value.tenantOrderInsuredList[0].relationToHolder,()=>p.value.tenantOrderHolder],(()=>{`${p.value.tenantOrderInsuredList[0].relationToHolder}`===g.SELF&&Object.assign(p.value.tenantOrderInsuredList[0],p.value.tenantOrderHolder,{id:p.value.tenantOrderInsuredList[0].id,extInfo:{...p.value.tenantOrderHolder.extInfo,insureProvinceCode:p.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,insureCityCode:p.value.tenantOrderInsuredList[0].extInfo.insureCityCode,insureAreaCode:p.value.tenantOrderInsuredList[0].extInfo.insureAreaCode}})}),{deep:!0,immediate:!0}),r((()=>i.formInfo),(()=>{Object.keys(i.formInfo).length&&(p.value=i.formInfo)}),{deep:!0,immediate:!0}),(l,a)=>{const o=t("ProField"),i=t("ProCard"),n=t("ProRadioButton");t("ProSvg");const r=t("ProForm");return d(),s("div",H,[v(r,{ref_key:"formRef",ref:V,"show-error":"","show-error-message":!1,"input-align":e.inputAlign},{default:f((()=>{var r,t,s,V;return[(null==(r=u.value.HOLDER)?void 0:r.length)?(d(),m(i,{key:0,"show-divider":!1,title:null==(t=e.titleCollection)?void 0:t.HOLDER},{default:f((()=>[v(P,{images:w.value,"onUpdate:images":a[1]||(a[1]=e=>w.value=e),"form-info":p.value.tenantOrderHolder,"factor-list":u.value.HOLDER,prefix:"holder","is-view":e.isView,"send-sms-code":e.sendSmsCode},{name:f((()=>[I(l.$slots,"holderName")])),default:f((()=>{var l,i;return[y("gasNumberCollection","HOLDER")&&(null==(i=null==(l=p.value.tenantOrderSubjectList)?void 0:l[0])?void 0:i.extInfo)?(d(),m(o,{key:0,modelValue:p.value.tenantOrderSubjectList[0].extInfo.subjectRelatedUserId,"onUpdate:modelValue":a[0]||(a[0]=e=>p.value.tenantOrderSubjectList[0].extInfo.subjectRelatedUserId=e),label:U("gasNumberCollection","title","HOLDER"),name:"subjectRelatedUserId",required:k("gasNumberCollection","HOLDER"),placeholder:"请输入","is-view":e.isView,maxlength:100},null,8,["modelValue","label","required","is-view"])):c("",!0)]})),_:3},8,["images","form-info","factor-list","is-view","send-sms-code"])])),_:3},8,["title"])):c("",!0),(null==(s=u.value.INSURER)?void 0:s.length)?(d(),m(i,{key:1,"show-divider":!1,title:null==(V=e.titleCollection)?void 0:V.INSURER},{default:f((()=>[y("relationToHolder","INSURER")?(d(),m(o,{key:0,modelValue:p.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":a[3]||(a[3]=e=>p.value.tenantOrderInsuredList[0].relationToHolder=e),class:"relation-holder",name:"insure_relationToHolder",required:k("relationToHolder","INSURER"),label:U("relationToHolder","title","INSURER")},{input:f((()=>[v(n,{modelValue:p.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":a[2]||(a[2]=e=>p.value.tenantOrderInsuredList[0].relationToHolder=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:U("relationToHolder","attributeValueList","INSURER")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required","label"])):c("",!0),1!=+p.value.tenantOrderInsuredList[0].relationToHolder?(d(),m(P,{key:1,images:b.value,"onUpdate:images":a[4]||(a[4]=e=>b.value=e),"form-info":p.value.tenantOrderInsuredList[0],"factor-list":u.value.INSURER||[],prefix:"insure","send-sms-code":e.sendSmsCode,"is-view":e.isView},{name:f((()=>[I(l.$slots,"insurerName")])),_:3},8,["images","form-info","factor-list","send-sms-code","is-view"])):c("",!0)])),_:3},8,["title"])):c("",!0),c("",!0)]})),_:3},8,["input-align"])])}}});export{j as _};
