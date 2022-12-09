import{h as e,P as a,N as l,r as o,x as i,d as n,Z as r,k as t,A as u,l as d,y as s,m,n as f,Q as v,s as c,X as I,R as p,z as V,Y as b,C as w,I as x,J as y,T as h,a8 as C,L as k,D as U}from"./vendor-0381d15c.js";import{C as R,V as g,I as _,J as O,K as T,Y as L,n as q,a9 as E,aa as A}from"./index-17bebcd7.js";import{R as $}from"./infoCollection-8a3b9599.js";import{r as D}from"./relativeTime-71db0de4.js";import{v as N}from"./validator-5a13dc82.js";import{u as S}from"./useDicData-33bc983e.js";import{s as P}from"./core-9e3a3157.js";const H={key:0,class:"com-personal-wrapper"},j={class:"date-extra"},B=w("长期"),M=V("span",{class:"input-extra"},"万",-1),Y=V("span",{class:"input-extra"},"万",-1),F={class:"button-extra"},z=V("span",{class:"input-extra"},"%",-1),Z=e({props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]},sendSmsCode:{type:Function,default:(e,a)=>{}},needDesensitize:{type:Boolean,default:!1}},emits:["update:images"],setup(e,{emit:C}){const k=e;a();const{venderCode:U=""}=l().query,q=S(`${U.toLocaleUpperCase()}_OCCUPATION`),E=S("NATIONAL_REGION_CODE"),A=o([]),P=o(!1),Z=o(),J=o(),G=o({formInfo:k.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""}),K=o(!1),W=i((()=>K.value?(G.value.formInfo.mobile||"").replace(/^(.{3})(?:\d+)(.{4})$/,"$1****$2"):k.formInfo.mobile)),X=o(!1),Q=i((()=>X.value?(G.value.formInfo.certNo||"").replace(/^(.{6})(?:\d+)(.{2})$/,"$1**********$2"):k.formInfo.certNo));n.extend(D);const ee=o(2===k.formInfo.certEndType),ae=o(0),le=o("验证码"),oe=o(!1),ie=i((()=>{const e={};return k.factorList.forEach((a=>{e[a.code]=a})),e})),ne=(e,a)=>{G.value.formInfo[a]=e};i((()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(G.value.formInfo.mobile)));const re=e=>{"mobile"===e&&(K.value=!1),"certNo"===e&&(X.value=!1)},te=async()=>{ae.value>0||k.sendSmsCode({mobile:G.value.formInfo.mobile,type:k.prefix},(()=>{oe.value=!0,h({message:"短信发送成功，请查收"}),(()=>{if(ae.value>0)return;ae.value=60;const e=()=>{le.value=`${ae.value}s`,ae.value-=1};e();const a=setInterval((()=>{0===ae.value?(le.value="验证码",ae.value=0,clearInterval(a)):e()}),1e3)})()}))},ue=e=>{G.value.formInfo.certNo=e.personIdCard,G.value.formInfo.name=e.personName,G.value.formInfo.certEndDate=n(e.validDateEnd,"YYYYMMDD").toDate()},de=e=>{var a;return ie.value&&ie.value[e]&&(null==(a=ie.value[e])?void 0:a.isDisplay)===L.YES},se=e=>ie.value&&ie.value[e]&&ie.value[e].isMustInput===L.YES,me=(e,a)=>{var l,o;return(null==(o=null==(l=ie.value)?void 0:l[e])?void 0:o[a])||""},fe=i((()=>{var e;if(!de("certType"))return!1;const a=me("certType","attributeValueList")||[];return 1!==a.length||(null==(e=a[0])?void 0:e.code)!==R.CERT})),ve=i((()=>{var e,a,l;return(null==(e=me("certType","attributeValueList"))?void 0:e.length)>1?"证件号码":"insure"===k.prefix&&(null==(a=G.value.formInfo)?void 0:a.relationToHolder)===$.CHILD?"身份证号(户口簿)":(null==(l=me("certType","attributeValueList"))?void 0:l[0].code)===R.CERT?"身份证号":me("certType","title")})),ce=(e,a)=>N(e)?"":"请输入正确的姓名",Ie=i((()=>[R.CERT,R.HOUSE_HOLD].includes(`${G.value.formInfo.certType}`)?[g.ID_CARD]:`${G.value.formInfo.certType}`===R.BIRTH?[g.BIRTH]:`${G.value.formInfo.certType}`===R.PASSPORT?[g.PASSPORT]:[g.ID_CARD])),pe=(e,a)=>se("attachment")?2===G.value.formInfo.certEndType||G.value.formInfo.certEndDate?"":"请选择有效期至":"",Ve=(e,a)=>/^\d{1,10}(\.\d{1,2})?$/.test(e)?"":"年收入最多录入10位数字",be=(e,a)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(e)?"":"收益比例只能填写1-100的正整数",we=(e,a,l)=>a.length>e?`最大不能超过${e}个字符`:"",xe=(e,a)=>{var l,o,i,r,t,u,d;if(!de("nationality"))return"";if("CHN"===(null==(o=null==(l=G.value.formInfo)?void 0:l.extInfo)?void 0:o.nationalityCode)){if(![R.CERT,R.HOUSE_HOLD,R.BIRTH,R.MILITARY_CARD].includes(`${e}`))return"国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证"}else if(["HKG","MAC"].includes(null==(r=null==(i=G.value.formInfo)?void 0:i.extInfo)?void 0:r.nationalityCode)){if(![R.HK_MACAO_RESIDENCE_PERMIT,R.HONGKONG_MACAO].includes(`${e}`))return"国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证"}else if("TWN"===(null==(u=null==(t=G.value.formInfo)?void 0:t.extInfo)?void 0:u.nationalityCode)){if(![R.TAIWAN_RESIDENCE_PERMIT,R.TAIWAN_TRAVEL].includes(`${e}`))return"国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证"}else if(![R.PASSPORT,R.FOREIGN_PERMANENT].includes(`${e}`))return"国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证";return n().year()-n(null==(d=G.value.formInfo)?void 0:d.birthday).year()>2&&e===R.BIRTH?"年龄大于等于2周岁时，证件类型不能选择出生证":""},ye=e=>Array.isArray(e)&&2===e.length&&e[0]&&e[1]?"":"请上传身份证正反面照片";return r((()=>ee.value),(e=>{e?(G.value.formInfo.certEndType=2,G.value.formInfo.certEndDate=""):G.value.formInfo.certEndType=1}),{immediate:!0}),r((()=>G.value.formInfo.mobile),(()=>{var e;G.value.formInfo.mobile=null==(e=G.value.formInfo.mobile)?void 0:e.replace(/[\u4e00-\u9fa5/\s+/]|[^0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),r([()=>G.value.formInfo.certNo,()=>G.value.formInfo.certNo],(()=>{var e,a;G.value.formInfo.certNo=null==(e=G.value.formInfo.certNo)?void 0:e.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,""),G.value.formInfo.certNo=null==(a=G.value.formInfo.certNo)?void 0:a.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),r((()=>k.needDesensitize),((e=!1)=>{K.value=e,X.value=e}),{immediate:!0}),r((()=>G.value.formInfo.certType),(e=>{[R.CERT,R.HOUSE_HOLD].includes(e)?P.value=!0:P.value=!1}),{deep:!0,immediate:!0}),r((()=>G.value.formInfo.certNo),(e=>{_(e)?(G.value.formInfo.gender=+O(e),G.value.formInfo.birthday=n(new Date(T(e))).format("YYYY-MM-DD")):(G.value.formInfo.gender=null,G.value.formInfo.birthday="")}),{deep:!0,immediate:!0}),r((()=>k.images),(e=>{A.value=e}),{immediate:!0}),r((()=>k.formInfo),(()=>{G.value.formInfo=k.formInfo}),{deep:!0,immediate:!0}),r(A,(e=>{C("update:images",e)}),{deep:!0}),(a,l)=>{const o=t("ProRadioButton"),i=t("ProField"),n=t("ProPicker"),r=t("ProIDCardUpload"),h=t("ProImageUpload"),C=t("ProDatePicker"),k=t("van-checkbox"),U=t("ProCascader"),R=t("van-button");return Object.keys(u(ie)).length?(d(),s("div",H,[de("insuredBeneficiaryType")?(d(),m(i,{key:0,modelValue:G.value.formInfo.insuredBeneficiaryType,"onUpdate:modelValue":l[1]||(l[1]=e=>G.value.formInfo.insuredBeneficiaryType=e),label:me("insuredBeneficiaryType","title"),name:"insuredBeneficiaryType"},{input:f((()=>[v(o,{modelValue:G.value.formInfo.insuredBeneficiaryType,"onUpdate:modelValue":l[0]||(l[0]=e=>G.value.formInfo.insuredBeneficiaryType=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:me("insuredBeneficiaryType","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):c("",!0),de("insuredRelation")?(d(),m(i,{key:1,modelValue:G.value.formInfo.insuredRelation,"onUpdate:modelValue":l[3]||(l[3]=e=>G.value.formInfo.insuredRelation=e),label:me("insuredRelation","title"),name:"insuredRelation"},{input:f((()=>[v(o,{modelValue:G.value.formInfo.insuredRelation,"onUpdate:modelValue":l[2]||(l[2]=e=>G.value.formInfo.insuredRelation=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:me("insuredRelation","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):c("",!0),de("name")?(d(),m(i,{key:2,modelValue:G.value.formInfo.name,"onUpdate:modelValue":l[4]||(l[4]=e=>G.value.formInfo.name=e),label:me("name","title"),name:`${e.prefix}_name`,"is-view":e.isView,required:se("name"),rules:[{validator:ce}]},{"right-icon":f((()=>[I(a.$slots,"name")])),_:3},8,["modelValue","label","name","is-view","required","rules"])):c("",!0),de("sex")?(d(),m(i,{key:3,modelValue:G.value.formInfo.gender,"onUpdate:modelValue":l[6]||(l[6]=e=>G.value.formInfo.gender=e),required:se("sex"),label:me("sex","title"),name:`${e.prefix}_gender`,"is-view":P.value},{input:f((()=>[v(o,{modelValue:G.value.formInfo.gender,"onUpdate:modelValue":l[5]||(l[5]=e=>G.value.formInfo.gender=e),disabled:P.value,"is-view":e.isView,prop:{label:"value",value:"code"},options:me("sex","attributeValueList")||[]},null,8,["modelValue","disabled","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):c("",!0),u(fe)?(d(),m(n,{key:4,modelValue:G.value.formInfo.certType,"onUpdate:modelValue":l[7]||(l[7]=e=>G.value.formInfo.certType=e),label:me("certType","title"),name:`${e.prefix}_certType`,"data-source":me("certType","attributeValueList"),mapping:{label:"value",value:"code",children:"child"},required:se("certType"),rules:[{validator:xe}],"is-view":e.isView},null,8,["modelValue","label","name","data-source","required","rules","is-view"])):c("",!0),de("certImage")&&G.value.formInfo.certType+""=="1"?(d(),m(i,{key:5,label:"身份证上传",block:"",required:se("certImage"),rules:[{validator:ye}],name:`${e.prefix}_idCard`},{input:f((()=>[v(r,{modelValue:A.value,"onUpdate:modelValue":l[8]||(l[8]=e=>A.value=e),"is-view":e.isView,onOnOCR:ue},null,8,["modelValue","is-view"])])),_:1},8,["required","rules","name"])):c("",!0),de("certImage")&&G.value.formInfo.certType&&G.value.formInfo.certType+""!="1"?(d(),m(i,{key:6,label:me("certImage","title"),block:"",required:se("certImage")},{input:f((()=>[v(h,{modelValue:A.value,"onUpdate:modelValue":l[9]||(l[9]=e=>A.value=e),"is-view":e.isView,"max-count":1},null,8,["modelValue","is-view"])])),_:1},8,["label","required"])):c("",!0),de("certNo")?(d(),m(i,{key:7,ref_key:"certNoRef",ref:Z,modelValue:u(Q),"onUpdate:modelValue":[l[10]||(l[10]=e=>p(Q)?Q.value=e:null),l[12]||(l[12]=e=>ne(e,"certNo"))],label:u(ve),name:`${e.prefix}_certNo`,required:se("certNo"),maxlength:18,"is-view":e.isView,"validate-type":X.value?void 0:u(Ie),onFocus:l[11]||(l[11]=e=>re("certNo"))},null,8,["modelValue","label","name","required","is-view","validate-type"])):c("",!0),de("birthDate")?(d(),m(C,{key:8,modelValue:G.value.formInfo.birthday,"onUpdate:modelValue":l[13]||(l[13]=e=>G.value.formInfo.birthday=e),label:me("birthDate","title"),name:`${e.prefix}_birthday`,min:G.value.birth.min,max:G.value.birth.max,type:"date","is-view":e.isView,required:se("birthDate")},null,8,["modelValue","label","name","min","max","is-view","required"])):c("",!0),de("certExpiry")?(d(),m(C,{key:9,modelValue:G.value.formInfo.certEndDate,"onUpdate:modelValue":l[15]||(l[15]=e=>G.value.formInfo.certEndDate=e),label:me("certExpiry","title"),name:`${e.prefix}_certEndDate`,type:"date",min:G.value.certEndDate.min,max:G.value.certEndDate.max,"is-view":ee.value||e.isView,read:"",rules:[{validator:pe}]},{extra:f((()=>[V("div",j,[v(k,{modelValue:ee.value,"onUpdate:modelValue":l[14]||(l[14]=e=>ee.value=e),"icon-size":16,disabled:e.isView},{default:f((()=>[B])),_:1},8,["modelValue","disabled"])])])),_:1},8,["modelValue","label","name","min","max","is-view","rules"])):c("",!0),de("age")?(d(),m(i,{key:10,modelValue:G.value.formInfo.name,"onUpdate:modelValue":l[16]||(l[16]=e=>G.value.formInfo.name=e),label:me("age","title"),name:`${e.prefix}_age`,"is-view":e.isView,required:se("age")},null,8,["modelValue","label","name","is-view","required"])):c("",!0),de("residence")?(d(),m(U,{key:11,modelValue:G.value.formInfo.extInfo.provinceCode,"onUpdate:modelValue":l[17]||(l[17]=e=>G.value.formInfo.extInfo.provinceCode=e),field1:G.value.formInfo.extInfo.provinceCode,"onUpdate:field1":l[18]||(l[18]=e=>G.value.formInfo.extInfo.provinceCode=e),field2:G.value.formInfo.extInfo.cityCode,"onUpdate:field2":l[19]||(l[19]=e=>G.value.formInfo.extInfo.cityCode=e),field3:G.value.formInfo.extInfo.areaCode,"onUpdate:field3":l[20]||(l[20]=e=>G.value.formInfo.extInfo.areaCode=e),label:me("residence","title"),name:`${e.prefix}_provinceCode`,"is-link":"","is-view":e.isView,required:se("residence"),"data-source":u(E),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):c("",!0),de("social")?(d(),m(i,{key:12,modelValue:G.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[22]||(l[22]=e=>G.value.formInfo.extInfo.hasSocialInsurance=e),label:me("social","title"),name:`${e.prefix}_hasSocialInsurance`,required:se("social")},{input:f((()=>[v(o,{modelValue:G.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[21]||(l[21]=e=>G.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:me("social","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):c("",!0),de("height")?(d(),m(i,{key:13,modelValue:G.value.formInfo.name,"onUpdate:modelValue":l[23]||(l[23]=e=>G.value.formInfo.name=e),label:me("height","title"),"is-view":e.isView,name:`${e.prefix}_height`,required:se("height")},null,8,["modelValue","label","is-view","name","required"])):c("",!0),de("weight")?(d(),m(i,{key:14,modelValue:G.value.formInfo.name,"onUpdate:modelValue":l[24]||(l[24]=e=>G.value.formInfo.name=e),label:me("weight","title"),name:`${e.prefix}_weight`,"is-view":e.isView,required:se("weight")},null,8,["modelValue","label","name","is-view","required"])):c("",!0),de("BMI")?(d(),m(i,{key:15,modelValue:G.value.formInfo.name,"onUpdate:modelValue":l[25]||(l[25]=e=>G.value.formInfo.name=e),label:me("BMI","title"),name:`${e.prefix}_BMI`,"is-view":e.isView,required:se("BMI")},null,8,["modelValue","label","name","is-view","required"])):c("",!0),de("insuredRiskManagementLevel")?(d(),m(i,{key:16,modelValue:G.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[27]||(l[27]=e=>G.value.formInfo.extInfo.hasSocialInsurance=e),label:me("insuredRiskManagementLevel","title"),name:`${e.prefix}_hasSocialInsurance`,required:se("insuredRiskManagementLevel")},{input:f((()=>[v(o,{modelValue:G.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[26]||(l[26]=e=>G.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:me("insuredRiskManagementLevel","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):c("",!0),de("purchaseOtherInsurance")?(d(),m(i,{key:17,modelValue:G.value.formInfo.extInfo.purchaseOtherInsurance,"onUpdate:modelValue":l[29]||(l[29]=e=>G.value.formInfo.extInfo.purchaseOtherInsurance=e),label:me("purchaseOtherInsurance","title"),name:`${e.prefix}_purchaseOtherInsurance`,required:se("purchaseOtherInsurance")},{input:f((()=>[v(o,{modelValue:G.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[28]||(l[28]=e=>G.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:me("purchaseOtherInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):c("",!0),de("injuryInsurance")?(d(),m(i,{key:18,modelValue:G.value.formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":l[31]||(l[31]=e=>G.value.formInfo.extInfo.injuryInsurance=e),label:me("injuryInsurance","title"),name:`${e.prefix}_hasSocialInsurance`,required:se("injuryInsurance")},{input:f((()=>[v(o,{modelValue:G.value.formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":l[30]||(l[30]=e=>G.value.formInfo.extInfo.injuryInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:me("injuryInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):c("",!0),de("insureArea")?(d(),m(U,{key:19,label:me("insureArea","title"),name:"insureAreaCode","is-link":"","is-view":e.isView,required:se("insureArea"),"data-source":u(E),mapping:{label:"name",value:"code",children:"children"}},null,8,["label","is-view","required","data-source"])):c("",!0),de("occupation")?(d(),m(U,{key:20,modelValue:G.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:modelValue":l[32]||(l[32]=e=>G.value.formInfo.extInfo.occupationCodeList[0]=e),field0:G.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:field0":l[33]||(l[33]=e=>G.value.formInfo.extInfo.occupationCodeList[0]=e),field1:G.value.formInfo.extInfo.occupationCodeList[1],"onUpdate:field1":l[34]||(l[34]=e=>G.value.formInfo.extInfo.occupationCodeList[1]=e),field2:G.value.formInfo.extInfo.occupationCodeList[2],"onUpdate:field2":l[35]||(l[35]=e=>G.value.formInfo.extInfo.occupationCodeList[2]=e),label:me("occupation","title"),name:`${e.prefix}_occupationCodeList`,"is-view":e.isView,required:se("occupation"),"data-source":u(q),mapping:{label:"name",value:"code",children:"children"},"is-link":""},null,8,["modelValue","field0","field1","field2","label","name","is-view","required","data-source"])):c("",!0),de("personalAnnualIncome")?(d(),m(i,{key:21,modelValue:G.value.formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":l[36]||(l[36]=e=>G.value.formInfo.extInfo.personalAnnualIncome=e),label:me("personalAnnualIncome","title"),name:`${e.prefix}_personalAnnualIncome`,required:se("personalAnnualIncome"),"is-view":e.isView,rules:[{validator:Ve}]},{extra:f((()=>[M])),_:1},8,["modelValue","label","name","required","is-view","rules"])):c("",!0),de("familyAnnualIncome")?(d(),m(i,{key:22,modelValue:G.value.formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":l[37]||(l[37]=e=>G.value.formInfo.extInfo.familyAnnualIncome=e),label:me("familyAnnualIncome","title"),name:`${e.prefix}_familyAnnualIncome`,"is-view":e.isView,rules:[{validator:Ve}],required:se("familyAnnualIncome")},{extra:f((()=>[Y])),_:1},8,["modelValue","label","name","is-view","rules","required"])):c("",!0),de("country")?(d(),m(n,{key:23,modelValue:G.value.formInfo.extInfo.nationalityCode,"onUpdate:modelValue":l[38]||(l[38]=e=>G.value.formInfo.extInfo.nationalityCode=e),label:me("country","title"),name:`${e.prefix}_nationalityCode`,"data-source":me("country","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:se("country"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):c("",!0),de("hasUsCard")?(d(),m(i,{key:24,modelValue:G.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":l[40]||(l[40]=e=>G.value.formInfo.extInfo.hasUsCard=e),label:me("hasUsCard","title"),name:`${e.prefix}_hasUsCard`,required:se("hasUsCard")},{input:f((()=>[v(o,{modelValue:G.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":l[39]||(l[39]=e=>G.value.formInfo.extInfo.hasUsCard=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:me("hasUsCard","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):c("",!0),de("marritalStatus")?(d(),m(n,{key:25,modelValue:G.value.formInfo.extInfo.marriageStatus,"onUpdate:modelValue":l[41]||(l[41]=e=>G.value.formInfo.extInfo.marriageStatus=e),label:me("marritalStatus","title"),name:`${e.prefix}_marriageStatus`,"data-source":me("marritalStatus","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},"is-link":"","is-view":e.isView,required:se("marritalStatus")},null,8,["modelValue","label","name","data-source","is-view","required"])):c("",!0),de("degree")?(d(),m(n,{key:26,modelValue:G.value.formInfo.extInfo.educationDegree,"onUpdate:modelValue":l[42]||(l[42]=e=>G.value.formInfo.extInfo.educationDegree=e),label:me("degree","title"),name:`${e.prefix}_educationDegree`,"data-source":me("degree","attributeValueList")||[],mapping:{label:"name",value:"code",children:"child"},required:se("degree"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):c("",!0),de("mobile")?(d(),m(i,{key:27,ref_key:"phoneRef",ref:J,modelValue:u(W),"onUpdate:modelValue":[l[43]||(l[43]=e=>p(W)?W.value=e:null),l[45]||(l[45]=e=>ne(e,"mobile"))],label:me("mobile","title"),name:`${e.prefix}_mobile`,maxlength:11,"is-view":e.isView,required:se("mobile"),"validate-type":K.value?void 0:[u(g).PHONE],onFocus:l[44]||(l[44]=e=>re("mobile"))},null,8,["modelValue","label","name","is-view","required","validate-type"])):c("",!0),de("verificationCode")?(d(),m(i,{key:28,modelValue:G.value.formInfo.verificationCode,"onUpdate:modelValue":l[46]||(l[46]=e=>G.value.formInfo.verificationCode=e),label:me("verificationCode","title"),name:`${e.prefix}_verificationCode`,type:"digit",maxlength:6,"is-view":e.isView,required:se("verificationCode")},b({_:2},[e.isView?void 0:{name:"extra",fn:f((()=>[V("div",F,[v(R,{class:y(["sms-code",{"count-down":ae.value>0}]),size:"small",plain:"",type:"primary",onClick:te},{default:f((()=>[w(x(le.value),1)])),_:1},8,["class"])])]))}]),1032,["modelValue","label","name","is-view","required"])):c("",!0),de("isSmoke")?(d(),m(i,{key:29,modelValue:G.value.formInfo.isSmoke,"onUpdate:modelValue":l[48]||(l[48]=e=>G.value.formInfo.isSmoke=e),required:se("isSmoke"),label:me("isSmoke","title"),name:`${e.prefix}_isSmoke`,"is-view":P.value},{input:f((()=>[v(o,{modelValue:G.value.formInfo.isSmoke,"onUpdate:modelValue":l[47]||(l[47]=e=>G.value.formInfo.isSmoke=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:me("isSmoke","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):c("",!0),de("contactNo")?(d(),m(i,{key:30,modelValue:G.value.formInfo.contactNo,"onUpdate:modelValue":l[49]||(l[49]=e=>G.value.formInfo.contactNo=e),label:me("contactNo","title"),name:`${e.prefix}_contactNo`,"is-view":e.isView,required:se("contactNo")},null,8,["modelValue","label","name","is-view","required"])):c("",!0),de("email")?(d(),m(i,{key:31,modelValue:G.value.formInfo.email,"onUpdate:modelValue":l[50]||(l[50]=e=>G.value.formInfo.email=e),label:me("email","title"),name:`${e.prefix}_email`,"is-view":e.isView,required:se("email"),"validate-type":[u(g).EMAIL]},null,8,["modelValue","label","name","is-view","required","validate-type"])):c("",!0),de("homeAddress")?(d(),m(U,{key:32,modelValue:G.value.formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":l[51]||(l[51]=e=>G.value.formInfo.extInfo.familyAreaCode=e),field1:G.value.formInfo.extInfo.familyProvinceCode,"onUpdate:field1":l[52]||(l[52]=e=>G.value.formInfo.extInfo.familyProvinceCode=e),field2:G.value.formInfo.extInfo.familyCityCode,"onUpdate:field2":l[53]||(l[53]=e=>G.value.formInfo.extInfo.familyCityCode=e),field3:G.value.formInfo.extInfo.familyAreaCode,"onUpdate:field3":l[54]||(l[54]=e=>G.value.formInfo.extInfo.familyAreaCode=e),label:me("homeAddress","title"),name:`${e.prefix}_familyProvinceCode`,"is-link":"","is-view":e.isView,required:se("homeAddress"),"data-source":u(E),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):c("",!0),de("homeAddressDetail")?(d(),m(i,{key:33,modelValue:G.value.formInfo.extInfo.familyAddress,"onUpdate:modelValue":l[55]||(l[55]=e=>G.value.formInfo.extInfo.familyAddress=e),label:me("homeAddressDetail","title"),name:`${e.prefix}_familyAddress`,"is-view":e.isView,rules:[{validator:(...e)=>we(100,...e)}],required:se("homeAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):c("",!0),de("homePostalCode")?(d(),m(i,{key:34,modelValue:G.value.formInfo.extInfo.familyZipCode,"onUpdate:modelValue":l[56]||(l[56]=e=>G.value.formInfo.extInfo.familyZipCode=e),label:me("homePostalCode","title"),name:`${e.prefix}_familyZipCode`,"is-view":e.isView,required:se("homePostalCode"),"validate-type":[u(g).ZIP_CODE]},null,8,["modelValue","label","name","is-view","required","validate-type"])):c("",!0),de("workAddress")?(d(),m(U,{key:35,modelValue:G.value.formInfo.extInfo.workAreaCode,"onUpdate:modelValue":l[57]||(l[57]=e=>G.value.formInfo.extInfo.workAreaCode=e),field1:G.value.formInfo.extInfo.workProvinceCode,"onUpdate:field1":l[58]||(l[58]=e=>G.value.formInfo.extInfo.workProvinceCode=e),field2:G.value.formInfo.extInfo.workCityCode,"onUpdate:field2":l[59]||(l[59]=e=>G.value.formInfo.extInfo.workCityCode=e),field3:G.value.formInfo.extInfo.workAreaCode,"onUpdate:field3":l[60]||(l[60]=e=>G.value.formInfo.extInfo.workAreaCode=e),label:me("workAddress","title"),name:`${e.prefix}_workProvinceCode`,"is-link":"","is-view":e.isView,required:se("workAddress"),"data-source":u(E),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):c("",!0),de("workAddressDetail")?(d(),m(i,{key:36,modelValue:G.value.formInfo.extInfo.workAddress,"onUpdate:modelValue":l[61]||(l[61]=e=>G.value.formInfo.extInfo.workAddress=e),label:me("workAddressDetail","title"),name:`${e.prefix}_workAddress`,"is-view":e.isView,rules:[{validator:(...e)=>we(100,...e)}],required:se("workAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):c("",!0),de("workPostalCode")?(d(),m(i,{key:37,modelValue:G.value.formInfo.extInfo.workZipCode,"onUpdate:modelValue":l[62]||(l[62]=e=>G.value.formInfo.extInfo.workZipCode=e),label:me("workPostalCode","title"),required:se("workZipCode"),name:`${e.prefix}_workPostCode`,"is-view":e.isView,"validate-type":[u(g).ZIP_CODE]},null,8,["modelValue","label","required","name","is-view","validate-type"])):c("",!0),de("companyName")?(d(),m(i,{key:38,modelValue:G.value.formInfo.extInfo.workStation,"onUpdate:modelValue":l[63]||(l[63]=e=>G.value.formInfo.extInfo.workStation=e),label:me("companyName","title"),name:`${e.prefix}_workPostCode`,"is-view":e.isView,rules:[{validator:(...e)=>we(20,...e)}],required:se("companyName")},null,8,["modelValue","label","name","is-view","rules","required"])):c("",!0),de("workContent")?(d(),m(i,{key:39,modelValue:G.value.formInfo.extInfo.workContent,"onUpdate:modelValue":l[64]||(l[64]=e=>G.value.formInfo.extInfo.workContent=e),label:me("workContent","title"),name:`${e.prefix}_workContent`,required:se("workContent"),"is-view":e.isView,rules:[{validator:(...e)=>we(100,...e)}]},null,8,["modelValue","label","name","required","is-view","rules"])):c("",!0),de("chineseTaxResident")?(d(),m(i,{key:40,modelValue:G.value.formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":l[66]||(l[66]=e=>G.value.formInfo.extInfo.chineseTaxResident=e),label:me("chineseTaxResident","title"),name:`${e.prefix}_taxResident`,required:se("chineseTaxResident")},{input:f((()=>[v(o,{modelValue:G.value.formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":l[65]||(l[65]=e=>G.value.formInfo.extInfo.chineseTaxResident=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:me("chineseTaxResident","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):c("",!0),de("taxResident")?(d(),m(n,{key:41,modelValue:G.value.formInfo.taxResident,"onUpdate:modelValue":l[67]||(l[67]=e=>G.value.formInfo.taxResident=e),"is-view":e.isView,label:me("taxResident","title"),name:`${e.prefix}_benefitOrder`,"data-source":me("taxResident","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:se("taxResident")},null,8,["modelValue","is-view","label","name","data-source","required"])):c("",!0),de("partTimeJob")?(d(),m(i,{key:42,modelValue:G.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":l[69]||(l[69]=e=>G.value.formInfo.extInfo.isPartTime=e),label:me("partTimeJob","title"),name:`${e.prefix}_isPartTime`,required:se("partTimeJob")},{input:f((()=>[v(o,{modelValue:G.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":l[68]||(l[68]=e=>G.value.formInfo.extInfo.isPartTime=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:me("partTimeJob","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):c("",!0),de("benefitOrder")?(d(),m(n,{key:43,modelValue:G.value.formInfo.benefitOrder,"onUpdate:modelValue":l[70]||(l[70]=e=>G.value.formInfo.benefitOrder=e),label:me("benefitOrder","title"),name:`${e.prefix}_benefitOrder`,"is-view":e.isView,"data-source":me("benefitOrder","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:se("benefitOrder")},null,8,["modelValue","label","name","is-view","data-source","required"])):c("",!0),de("benefitRate")?(d(),m(i,{key:44,modelValue:G.value.formInfo.benefitRate,"onUpdate:modelValue":l[71]||(l[71]=e=>G.value.formInfo.benefitRate=e),required:se("benefitRate"),name:`${e.prefix}_benefitRate`,"is-view":e.isView,rules:[{validator:be}],label:me("benefitRate","title")},{extra:f((()=>[z])),_:1},8,["modelValue","required","name","is-view","rules","label"])):c("",!0),I(a.$slots,"default")])):c("",!0)}}});const J={class:"page-info-wrapper"},G=e({props:{factorObject:null,formInfo:{default:()=>({})},isView:{type:Boolean,default:!1},sendSmsCode:{type:Function,default:(e,a)=>{}},titleCollection:{default:()=>({})},inputAlign:{default:"left"},needDesensitize:{type:Boolean,default:!1}},setup(e,{expose:a}){const n=e;C(),l();const u=o({}),p=o({extInfo:{},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL"}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),V=o(null),b=o([]),w=o([]);o([]),o([]),o([]),k({beneficiaryId:0,nextPage:"",currentAddress:null,isLoading:!0});const x=i((()=>{var e,a;const l={INSURER:{},HOLDER:{}};return((null==(e=u.value)?void 0:e.INSURER)||[]).forEach((e=>{l.INSURER[e.code]=e})),((null==(a=u.value)?void 0:a.HOLDER)||[]).forEach((e=>{l.HOLDER[e.code]=e})),l})),y=(e,a)=>{var l,o,i;return(null==(i=null==(o=null==(l=x.value)?void 0:l[a])?void 0:o[e])?void 0:i.isDisplay)===L.YES},h=(e,a)=>{var l,o;return(null==(o=null==(l=x.value)?void 0:l[a])?void 0:o[e].isMustInput)===L.YES},U=(e,a,l)=>{var o,i,n;return(null==(n=null==(i=null==(o=x.value)?void 0:o[l])?void 0:i[e])?void 0:n[a])||""},R=(e,a)=>{const l=e;return Object.keys(l).forEach((e=>{a.includes(e)||(l[e]="")})),l};return a({validateForm:e=>new Promise(((a,l)=>{var o;null==(o=V.value)||o.validate(e).then((()=>{a(p.value)}),(()=>{l()}))}))}),r((()=>n.factorObject),(()=>{const e={BENEFICIARY:n.factorObject[3],INSURER:n.factorObject[2],HOLDER:n.factorObject[1]};u.value=e}),{immediate:!0,deep:!0}),r([()=>p.value.tenantOrderInsuredList[0].relationToHolder,()=>p.value.tenantOrderHolder],(([e],[a])=>{var l,o,i,r;`${p.value.tenantOrderInsuredList[0].relationToHolder}`===$.SELF?(Object.assign(p.value.tenantOrderInsuredList[0],{...R(null==(o=null==(l=p.value)?void 0:l.tenantOrderInsuredList)?void 0:o[0],["extInfo","relationToHolder","tenantOrderBeneficiaryList"]),extInfo:{}}),Object.assign(p.value.tenantOrderInsuredList[0],p.value.tenantOrderHolder,{id:p.value.tenantOrderInsuredList[0].id,extInfo:{...p.value.tenantOrderHolder.extInfo,insureProvinceCode:p.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,insureCityCode:p.value.tenantOrderInsuredList[0].extInfo.insureCityCode,insureAreaCode:p.value.tenantOrderInsuredList[0].extInfo.insureAreaCode}})):e===a||n.isView||Object.assign(p.value.tenantOrderInsuredList[0],{...R(null==(r=null==(i=p.value)?void 0:i.tenantOrderInsuredList)?void 0:r[0],["extInfo","relationToHolder","tenantOrderBeneficiaryList"]),extInfo:{}})}),{deep:!0}),r((()=>n.formInfo),(()=>{Object.keys(n.formInfo).length&&(p.value=n.formInfo)}),{deep:!0,immediate:!0}),(a,l)=>{const o=t("ProField"),i=t("ProCard"),n=t("ProRadioButton");t("ProSvg");const r=t("ProForm");return d(),s("div",J,[v(r,{ref_key:"formRef",ref:V,"show-error":"","show-error-message":!1,"input-align":e.inputAlign},{default:f((()=>{var r,t,s,V;return[(null==(r=u.value.HOLDER)?void 0:r.length)?(d(),m(i,{key:0,"show-line":!1,"show-divider":!1,title:null==(t=e.titleCollection)?void 0:t.HOLDER},{default:f((()=>[v(Z,{images:b.value,"onUpdate:images":l[1]||(l[1]=e=>b.value=e),"form-info":p.value.tenantOrderHolder,"factor-list":u.value.HOLDER,prefix:"holder","is-view":e.isView,"need-desensitize":e.needDesensitize,"send-sms-code":e.sendSmsCode},{name:f((()=>[I(a.$slots,"holderName")])),default:f((()=>{var a,i;return[y("gasNumberCollection","HOLDER")&&(null==(i=null==(a=p.value.tenantOrderSubjectList)?void 0:a[0])?void 0:i.extInfo)?(d(),m(o,{key:0,modelValue:p.value.tenantOrderSubjectList[0].extInfo.subjectRelatedUserId,"onUpdate:modelValue":l[0]||(l[0]=e=>p.value.tenantOrderSubjectList[0].extInfo.subjectRelatedUserId=e),label:U("gasNumberCollection","title","HOLDER"),name:"subjectRelatedUserId",required:h("gasNumberCollection","HOLDER"),"is-view":e.isView,maxlength:100},null,8,["modelValue","label","required","is-view"])):c("",!0)]})),_:3},8,["images","form-info","factor-list","is-view","need-desensitize","send-sms-code"])])),_:3},8,["title"])):c("",!0),(null==(s=u.value.INSURER)?void 0:s.length)?(d(),m(i,{key:1,"show-line":!1,"show-divider":!1,title:null==(V=e.titleCollection)?void 0:V.INSURER},{default:f((()=>[y("relationToHolder","INSURER")?(d(),m(o,{key:0,modelValue:p.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":l[3]||(l[3]=e=>p.value.tenantOrderInsuredList[0].relationToHolder=e),class:"relation-holder",name:"insure_relationToHolder",required:h("relationToHolder","INSURER"),label:U("relationToHolder","title","INSURER")},{input:f((()=>[v(n,{modelValue:p.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":l[2]||(l[2]=e=>p.value.tenantOrderInsuredList[0].relationToHolder=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:U("relationToHolder","attributeValueList","INSURER")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required","label"])):c("",!0),e.isView||1!=+p.value.tenantOrderInsuredList[0].relationToHolder?(d(),m(Z,{key:1,images:w.value,"onUpdate:images":l[4]||(l[4]=e=>w.value=e),"form-info":p.value.tenantOrderInsuredList[0],"factor-list":u.value.INSURER||[],prefix:"insure","need-desensitize":e.needDesensitize,"send-sms-code":e.sendSmsCode,"is-view":e.isView},{name:f((()=>[I(a.$slots,"insurerName")])),_:3},8,["images","form-info","factor-list","need-desensitize","send-sms-code","is-view"])):c("",!0)])),_:3},8,["title"])):c("",!0),c("",!0)]})),_:3},8,["input-align"])])}}}),K=async(e,a)=>{var l,o;const i=e,{extInfo:n,orderNo:r,tenantOrderInsuredList:t,tenantId:u}=i||{},{iseeBizNo:d}=n||{};if(r){const{productCode:e}=(null==(o=null==(l=null==t?void 0:t[0])?void 0:l.tenantOrderProductList)?void 0:o[0])||{},a=`${window.location.origin}/baseInsurance/orderDetail?orderNo=${r}&tenantId=${u}&ISEE_BIZ=${d}&productCode=${e}`;i.extInfo.redirectUrl=a}const{code:s,data:m}=await q(i);if("10000"===s){const{pageAction:l,message:o,data:i}=m.pageAction||{};null==a||a(i,l),l===E.ALERT&&h(o),l===E.JUMP_URL&&P(null==i?void 0:i.paymentUrl),l===E.JUMP_ALERT&&("3"===n.templateId?U.alert({title:"提示",message:"该被保人已存在一笔待支付的订单",confirmButtonText:"取消"}).then((()=>{})):U.confirm({title:"提示",className:"xinao-custom-dialog",teleport:"#xinaoDialog",message:"该被保人已存在一笔待支付的订单",confirmButtonText:"去支付"}).then((()=>{i.orderNo&&A.push(`/baseInsurance/orderDetail?orderNo=${i.orderNo}&tenantId=${e.tenantId}&ISEE_BIZ=${e.extInfo.iseeBizNo}&productCode=${e.productCode}`)})))}};export{G as _,K as n};
