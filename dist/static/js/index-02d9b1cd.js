import{d as e,S as a,a as o,r as l,E as i,ad as n,ah as r,aI as t,an as d,aJ as u,aK as s,aL as f,g as m,c,h as I,e as p,w as v,f as V,k as b,bk as w,a7 as x,j as y,n as C,bt as h,L as k,t as L,T as R,a9 as O,m as U,ap as T,ao as _,aO as g,aq as E,aP as q,v as S,aF as A,B as D,u as N,J as $,P as H,V as P,au as j}from"./index-ac0d8bf0.js";import{R as B}from"./infoCollection-c6200630.js";import{r as M}from"./relativeTime-fde2a46e.js";import{v as Y}from"./validator-5a13dc82.js";import{u as F}from"./useDicData-a27badfb.js";const z={key:0,class:"com-personal-wrapper"},Z={class:"date-extra"},G=y("span",{class:"input-extra"},"万",-1),J=y("span",{class:"input-extra"},"万",-1),K={class:"button-extra"},W=y("span",{class:"input-extra"},"%",-1),X=e({__name:"PersonalInfo",props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]},sendSmsCode:{type:Function,default:(e,a)=>{}},needDesensitize:{type:Boolean,default:!1}},emits:["update:images"],setup(e,{emit:N}){const $=e;a();const{insurerCode:H=""}=o().query,P=F(`${H.toLocaleUpperCase()}_OCCUPATION`),j=F("NATIONAL_REGION_CODE"),X=l([]),Q=l(!1),ee=l(),ae=l(),oe=l({formInfo:$.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""}),le=l(!1),ie=i((()=>le.value?(oe.value.formInfo.mobile||"").replace(/^(.{3})(?:\d+)(.{4})$/,"$1****$2"):$.formInfo.mobile)),ne=l(!1),re=i((()=>ne.value?(oe.value.formInfo.certNo||"").replace(/^(.{6})(?:\d+)(.{2})$/,"$1**********$2"):$.formInfo.certNo));n.extend(M);const te=l(2===$.formInfo.certEndType),de=l(18),ue=l(0),se=l("验证码"),fe=l(!1),me=i((()=>{const e={};return $.factorList.forEach((a=>{e[a.code]=a})),e})),ce=(e,a)=>{oe.value.formInfo[a]=e};i((()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(oe.value.formInfo.mobile)));const Ie=e=>{"mobile"===e&&(le.value=!1),"certNo"===e&&(ne.value=!1)},pe=async()=>{ue.value>0||$.sendSmsCode({mobile:oe.value.formInfo.mobile,type:$.prefix},(()=>{fe.value=!0,R({message:"短信发送成功，请查收"}),(()=>{if(ue.value>0)return;ue.value=60;const e=()=>{se.value=`${ue.value}s`,ue.value-=1};e();const a=setInterval((()=>{0===ue.value?(se.value="验证码",ue.value=0,clearInterval(a)):e()}),1e3)})()}))},ve=e=>{oe.value.formInfo.certNo=e.personIdCard,oe.value.formInfo.name=e.personName,oe.value.formInfo.certEndDate=n(e.validDateEnd,"YYYYMMDD").toDate()},Ve=e=>{var a;return me.value&&me.value[e]&&(null==(a=me.value[e])?void 0:a.isDisplay)===O.YES},be=e=>me.value&&me.value[e]&&me.value[e].isMustInput===O.YES,we=(e,a)=>{var o,l;return(null==(l=null==(o=me.value)?void 0:o[e])?void 0:l[a])||""},xe=i((()=>{var e;if(!Ve("certType"))return oe.value.formInfo.certType=+r.CERT,!1;const a=we("certType","attributeValueList")||[];return 1!==a.length||(null==(e=a[0])?void 0:e.code)!==r.CERT||(oe.value.formInfo.certType=+r.CERT,!1)})),ye=i((()=>{var e,a,o;return(null==(e=we("certType","attributeValueList"))?void 0:e.length)>1?"证件号码":"insure"===$.prefix&&(null==(a=oe.value.formInfo)?void 0:a.relationToHolder)===B.CHILD?"身份证号(户口簿)":(null==(o=we("certType","attributeValueList"))?void 0:o[0].code)===r.CERT?"身份证号":we("certType","title")})),Ce=(e,a)=>Y(e)?"":"请输入正确的姓名",he=i((()=>(de.value=18,[r.CERT,r.HOUSE_HOLD].includes(`${oe.value.formInfo.certType}`)?(Q.value=!0,[t.ID_CARD]):`${oe.value.formInfo.certType}`===r.BIRTH?(Q.value=!1,de.value=10,[t.BIRTH]):`${oe.value.formInfo.certType}`===r.PASSPORT?(Q.value=!1,[t.PASSPORT]):`${oe.value.formInfo.certType}`===r.SOCIAL_CREDIT_CODE?(Q.value=!1,[t.SOCIAL_CREDIT_CODE]):`${oe.value.formInfo.certType}`===r.OTHER?(Q.value=!1,[t.OTHER]):(Q.value=!0,[t.ID_CARD])))),ke=(e,a)=>be("attachment")?2===oe.value.formInfo.certEndType||oe.value.formInfo.certEndDate?"":"请选择有效期至":"",Le=(e,a)=>/^\d{1,10}(\.\d{1,2})?$/.test(e)?"":"年收入最多录入10位数字",Re=(e,a)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(e)?"":"收益比例只能填写1-100的正整数",Oe=(e,a)=>(console.log("value",e),e.length>=5&&e.length<=99?"":"最多99个字符最少5个字符"),Ue=(e,a,o)=>a.length>e?`最大不能超过${e}个字符`:"",Te=(e,a)=>{var o,l,i,t,d,u,s;if(!Ve("nationality"))return"";if("CHN"===(null==(l=null==(o=oe.value.formInfo)?void 0:o.extInfo)?void 0:l.nationalityCode)){if(![r.CERT,r.HOUSE_HOLD,r.BIRTH,r.MILITARY_CARD].includes(`${e}`))return"国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证"}else if(["HKG","MAC"].includes(null==(t=null==(i=oe.value.formInfo)?void 0:i.extInfo)?void 0:t.nationalityCode)){if(![r.HK_MACAO_RESIDENCE_PERMIT,r.HONGKONG_MACAO].includes(`${e}`))return"国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证"}else if("TWN"===(null==(u=null==(d=oe.value.formInfo)?void 0:d.extInfo)?void 0:u.nationalityCode)){if(![r.TAIWAN_RESIDENCE_PERMIT,r.TAIWAN_TRAVEL].includes(`${e}`))return"国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证"}else if(![r.PASSPORT,r.FOREIGN_PERMANENT].includes(`${e}`))return"国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证";return n().year()-n(null==(s=oe.value.formInfo)?void 0:s.birthday).year()>2&&e===r.BIRTH?"年龄大于等于2周岁时，证件类型不能选择出生证":""},_e=e=>Array.isArray(e)&&2===e.length&&e[0]&&e[1]?"":"请上传身份证正反面照片";return d((()=>te.value),(e=>{e?(oe.value.formInfo.certEndType=2,oe.value.formInfo.certEndDate=""):oe.value.formInfo.certEndType=1}),{immediate:!0}),d((()=>oe.value.formInfo.mobile),(()=>{var e;oe.value.formInfo.mobile=null==(e=oe.value.formInfo.mobile)?void 0:e.replace(/[\u4e00-\u9fa5/\s+/]|[^0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),d([()=>oe.value.formInfo.certNo,()=>oe.value.formInfo.mobile],(()=>{var e,a;oe.value.formInfo.certNo=null==(e=oe.value.formInfo.certNo)?void 0:e.replace(/[\u4e00-\u9fa5/\s+/]/g,""),oe.value.formInfo.mobile=null==(a=oe.value.formInfo.mobile)?void 0:a.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),d((()=>$.needDesensitize),((e=!1)=>{le.value=e,ne.value=e}),{immediate:!0}),d((()=>oe.value.formInfo.certType),(e=>{[r.CERT,r.HOUSE_HOLD].includes(e)?Q.value=!0:Q.value=!1}),{deep:!0,immediate:!0}),d([()=>oe.value.formInfo.certNo,()=>oe.value.formInfo.certType],(([e])=>{[r.CERT,r.HOUSE_HOLD].includes(`${oe.value.formInfo.certType}`)&&(u(e)?(oe.value.formInfo.gender=+s(e),oe.value.formInfo.birthday=n(new Date(f(e))).format("YYYY-MM-DD")):(oe.value.formInfo.gender=null,oe.value.formInfo.birthday=""))}),{deep:!0,immediate:!0}),d((()=>$.images),(e=>{X.value=e}),{immediate:!0}),d((()=>$.formInfo),(()=>{oe.value.formInfo=$.formInfo}),{deep:!0,immediate:!0}),d(X,(e=>{N("update:images",e)}),{deep:!0}),(a,o)=>{const l=U,i=T,n=_,r=g,d=E,u=q,s=S,f=A,R=D;return Object.keys(m(me)).length?(c(),I("div",z,[Ve("insuredBeneficiaryType")?(c(),p(i,{key:0,modelValue:m(oe).formInfo.insuredBeneficiaryType,"onUpdate:modelValue":o[1]||(o[1]=e=>m(oe).formInfo.insuredBeneficiaryType=e),label:we("insuredBeneficiaryType","title"),name:"insuredBeneficiaryType"},{input:v((()=>[V(l,{modelValue:m(oe).formInfo.insuredBeneficiaryType,"onUpdate:modelValue":o[0]||(o[0]=e=>m(oe).formInfo.insuredBeneficiaryType=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("insuredBeneficiaryType","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):b("",!0),Ve("insuredRelation")?(c(),p(i,{key:1,modelValue:m(oe).formInfo.insuredRelation,"onUpdate:modelValue":o[3]||(o[3]=e=>m(oe).formInfo.insuredRelation=e),label:we("insuredRelation","title"),name:"insuredRelation"},{input:v((()=>[V(l,{modelValue:m(oe).formInfo.insuredRelation,"onUpdate:modelValue":o[2]||(o[2]=e=>m(oe).formInfo.insuredRelation=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("insuredRelation","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):b("",!0),Ve("name")?(c(),p(i,{key:2,modelValue:m(oe).formInfo.name,"onUpdate:modelValue":o[4]||(o[4]=e=>m(oe).formInfo.name=e),label:we("name","title"),name:`${e.prefix}_name`,"is-view":e.isView,required:be("name"),rules:[{validator:Ce}]},{"right-icon":v((()=>[w(a.$slots,"name")])),_:3},8,["modelValue","label","name","is-view","required","rules"])):b("",!0),Ve("sex")?(c(),p(i,{key:3,modelValue:m(oe).formInfo.gender,"onUpdate:modelValue":o[6]||(o[6]=e=>m(oe).formInfo.gender=e),required:be("sex"),label:we("sex","title"),name:`${e.prefix}_gender`,"is-view":m(Q)},{input:v((()=>[V(l,{modelValue:m(oe).formInfo.gender,"onUpdate:modelValue":o[5]||(o[5]=e=>m(oe).formInfo.gender=e),disabled:m(Q),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("sex","attributeValueList")||[]},null,8,["modelValue","disabled","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):b("",!0),m(xe)?(c(),p(n,{key:4,modelValue:m(oe).formInfo.certType,"onUpdate:modelValue":o[7]||(o[7]=e=>m(oe).formInfo.certType=e),label:we("certType","title"),name:`${e.prefix}_certType`,"data-source":we("certType","attributeValueList"),mapping:{label:"value",value:"code",children:"child"},required:be("certType"),rules:[{validator:Te}],"is-view":e.isView},null,8,["modelValue","label","name","data-source","required","rules","is-view"])):b("",!0),Ve("certImage")&&m(oe).formInfo.certType+""=="1"?(c(),p(i,{key:5,label:"身份证上传",block:"",required:be("certImage"),rules:[{validator:_e}],name:`${e.prefix}_idCard`},{input:v((()=>[V(r,{modelValue:m(X),"onUpdate:modelValue":o[8]||(o[8]=e=>x(X)?X.value=e:null),"is-view":e.isView,onOnOCR:ve},null,8,["modelValue","is-view"])])),_:1},8,["required","rules","name"])):b("",!0),Ve("certImage")&&m(oe).formInfo.certType&&m(oe).formInfo.certType+""!="1"?(c(),p(i,{key:6,label:we("certImage","title"),block:"",required:be("certImage")},{input:v((()=>[V(d,{modelValue:m(X),"onUpdate:modelValue":o[9]||(o[9]=e=>x(X)?X.value=e:null),"is-view":e.isView,"max-count":1},null,8,["modelValue","is-view"])])),_:1},8,["label","required"])):b("",!0),Ve("certNo")?(c(),p(i,{key:7,ref_key:"certNoRef",ref:ee,modelValue:m(re),"onUpdate:modelValue":[o[10]||(o[10]=e=>x(re)?re.value=e:null),o[12]||(o[12]=e=>ce(e,"certNo"))],label:m(ye),name:`${e.prefix}_certNo`,required:be("certNo"),maxlength:m(de),"is-view":e.isView,"validate-type":m(ne)?void 0:m(he),onFocus:o[11]||(o[11]=e=>Ie("certNo"))},null,8,["modelValue","label","name","required","maxlength","is-view","validate-type"])):b("",!0),Ve("birthDate")?(c(),p(u,{key:8,modelValue:m(oe).formInfo.birthday,"onUpdate:modelValue":o[13]||(o[13]=e=>m(oe).formInfo.birthday=e),label:we("birthDate","title"),name:`${e.prefix}_birthday`,min:m(oe).birth.min,max:m(oe).birth.max,type:"date","is-view":m(Q)||e.isView,required:be("birthDate")},null,8,["modelValue","label","name","min","max","is-view","required"])):b("",!0),Ve("certExpiry")?(c(),p(u,{key:9,modelValue:m(oe).formInfo.certEndDate,"onUpdate:modelValue":o[15]||(o[15]=e=>m(oe).formInfo.certEndDate=e),label:we("certExpiry","title"),name:`${e.prefix}_certEndDate`,type:"date",min:m(oe).certEndDate.min,max:m(oe).certEndDate.max,"is-view":m(te)||e.isView,read:"",rules:[{validator:ke}]},{extra:v((()=>[y("div",Z,[V(s,{modelValue:m(te),"onUpdate:modelValue":o[14]||(o[14]=e=>x(te)?te.value=e:null),"icon-size":16,disabled:e.isView},{default:v((()=>[C("长期")])),_:1},8,["modelValue","disabled"])])])),_:1},8,["modelValue","label","name","min","max","is-view","rules"])):b("",!0),Ve("age")?(c(),p(i,{key:10,modelValue:m(oe).formInfo.name,"onUpdate:modelValue":o[16]||(o[16]=e=>m(oe).formInfo.name=e),label:we("age","title"),name:`${e.prefix}_age`,"is-view":e.isView,required:be("age")},null,8,["modelValue","label","name","is-view","required"])):b("",!0),Ve("residence")?(c(),p(f,{key:11,modelValue:m(oe).formInfo.extInfo.provinceCode,"onUpdate:modelValue":o[17]||(o[17]=e=>m(oe).formInfo.extInfo.provinceCode=e),field1:m(oe).formInfo.extInfo.provinceCode,"onUpdate:field1":o[18]||(o[18]=e=>m(oe).formInfo.extInfo.provinceCode=e),field2:m(oe).formInfo.extInfo.cityCode,"onUpdate:field2":o[19]||(o[19]=e=>m(oe).formInfo.extInfo.cityCode=e),field3:m(oe).formInfo.extInfo.areaCode,"onUpdate:field3":o[20]||(o[20]=e=>m(oe).formInfo.extInfo.areaCode=e),label:we("residence","title"),name:`${e.prefix}_provinceCode`,"is-link":"","is-view":e.isView,required:be("residence"),"data-source":m(j),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):b("",!0),Ve("social")&&"insure"!==e.prefix?(c(),p(i,{key:12,modelValue:m(oe).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[22]||(o[22]=e=>m(oe).formInfo.extInfo.hasSocialInsurance=e),label:we("social","title"),name:`${e.prefix}_hasSocialInsurance`,required:be("social")},{input:v((()=>[V(l,{modelValue:m(oe).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[21]||(o[21]=e=>m(oe).formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("social","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):b("",!0),Ve("height")?(c(),p(i,{key:13,modelValue:m(oe).formInfo.name,"onUpdate:modelValue":o[23]||(o[23]=e=>m(oe).formInfo.name=e),label:we("height","title"),"is-view":e.isView,name:`${e.prefix}_height`,required:be("height")},null,8,["modelValue","label","is-view","name","required"])):b("",!0),Ve("weight")?(c(),p(i,{key:14,modelValue:m(oe).formInfo.name,"onUpdate:modelValue":o[24]||(o[24]=e=>m(oe).formInfo.name=e),label:we("weight","title"),name:`${e.prefix}_weight`,"is-view":e.isView,required:be("weight")},null,8,["modelValue","label","name","is-view","required"])):b("",!0),Ve("BMI")?(c(),p(i,{key:15,modelValue:m(oe).formInfo.name,"onUpdate:modelValue":o[25]||(o[25]=e=>m(oe).formInfo.name=e),label:we("BMI","title"),name:`${e.prefix}_BMI`,"is-view":e.isView,required:be("BMI")},null,8,["modelValue","label","name","is-view","required"])):b("",!0),Ve("insuredRiskManagementLevel")?(c(),p(i,{key:16,modelValue:m(oe).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[27]||(o[27]=e=>m(oe).formInfo.extInfo.hasSocialInsurance=e),label:we("insuredRiskManagementLevel","title"),name:`${e.prefix}_hasSocialInsurance`,required:be("insuredRiskManagementLevel")},{input:v((()=>[V(l,{modelValue:m(oe).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[26]||(o[26]=e=>m(oe).formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("insuredRiskManagementLevel","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):b("",!0),Ve("purchaseOtherInsurance")?(c(),p(i,{key:17,modelValue:m(oe).formInfo.extInfo.purchaseOtherInsurance,"onUpdate:modelValue":o[29]||(o[29]=e=>m(oe).formInfo.extInfo.purchaseOtherInsurance=e),label:we("purchaseOtherInsurance","title"),name:`${e.prefix}_purchaseOtherInsurance`,required:be("purchaseOtherInsurance")},{input:v((()=>[V(l,{modelValue:m(oe).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[28]||(o[28]=e=>m(oe).formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("purchaseOtherInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):b("",!0),Ve("injuryInsurance")?(c(),p(i,{key:18,modelValue:m(oe).formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":o[31]||(o[31]=e=>m(oe).formInfo.extInfo.injuryInsurance=e),label:we("injuryInsurance","title"),name:`${e.prefix}_hasSocialInsurance`,required:be("injuryInsurance")},{input:v((()=>[V(l,{modelValue:m(oe).formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":o[30]||(o[30]=e=>m(oe).formInfo.extInfo.injuryInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("injuryInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):b("",!0),Ve("insureArea")?(c(),p(f,{key:19,label:we("insureArea","title"),name:"insureAreaCode","is-link":"","is-view":e.isView,required:be("insureArea"),"data-source":m(j),mapping:{label:"name",value:"code",children:"children"}},null,8,["label","is-view","required","data-source"])):b("",!0),Ve("occupation")&&"insure"!==e.prefix?(c(),p(f,{key:20,modelValue:m(oe).formInfo.extInfo.occupationCodeList[0],"onUpdate:modelValue":o[32]||(o[32]=e=>m(oe).formInfo.extInfo.occupationCodeList[0]=e),field0:m(oe).formInfo.extInfo.occupationCodeList[0],"onUpdate:field0":o[33]||(o[33]=e=>m(oe).formInfo.extInfo.occupationCodeList[0]=e),field1:m(oe).formInfo.extInfo.occupationCodeList[1],"onUpdate:field1":o[34]||(o[34]=e=>m(oe).formInfo.extInfo.occupationCodeList[1]=e),field2:m(oe).formInfo.extInfo.occupationCodeList[2],"onUpdate:field2":o[35]||(o[35]=e=>m(oe).formInfo.extInfo.occupationCodeList[2]=e),label:we("occupation","title"),name:`${e.prefix}_occupationCodeList`,"is-view":e.isView,required:be("occupation"),"data-source":m(P),mapping:{label:"value",value:"code",children:"children"},"is-link":""},null,8,["modelValue","field0","field1","field2","label","name","is-view","required","data-source"])):b("",!0),Ve("personalAnnualIncome")?(c(),p(i,{key:21,modelValue:m(oe).formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":o[36]||(o[36]=e=>m(oe).formInfo.extInfo.personalAnnualIncome=e),label:we("personalAnnualIncome","title"),name:`${e.prefix}_personalAnnualIncome`,required:be("personalAnnualIncome"),"is-view":e.isView,rules:[{validator:Le}]},{extra:v((()=>[G])),_:1},8,["modelValue","label","name","required","is-view","rules"])):b("",!0),Ve("familyAnnualIncome")?(c(),p(i,{key:22,modelValue:m(oe).formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":o[37]||(o[37]=e=>m(oe).formInfo.extInfo.familyAnnualIncome=e),label:we("familyAnnualIncome","title"),name:`${e.prefix}_familyAnnualIncome`,"is-view":e.isView,rules:[{validator:Le}],required:be("familyAnnualIncome")},{extra:v((()=>[J])),_:1},8,["modelValue","label","name","is-view","rules","required"])):b("",!0),Ve("country")?(c(),p(n,{key:23,modelValue:m(oe).formInfo.extInfo.nationalityCode,"onUpdate:modelValue":o[38]||(o[38]=e=>m(oe).formInfo.extInfo.nationalityCode=e),label:we("country","title"),name:`${e.prefix}_nationalityCode`,"data-source":we("country","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:be("country"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):b("",!0),Ve("hasUsCard")?(c(),p(i,{key:24,modelValue:m(oe).formInfo.extInfo.hasUsCard,"onUpdate:modelValue":o[40]||(o[40]=e=>m(oe).formInfo.extInfo.hasUsCard=e),label:we("hasUsCard","title"),name:`${e.prefix}_hasUsCard`,required:be("hasUsCard")},{input:v((()=>[V(l,{modelValue:m(oe).formInfo.extInfo.hasUsCard,"onUpdate:modelValue":o[39]||(o[39]=e=>m(oe).formInfo.extInfo.hasUsCard=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("hasUsCard","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):b("",!0),Ve("marritalStatus")?(c(),p(n,{key:25,modelValue:m(oe).formInfo.extInfo.marriageStatus,"onUpdate:modelValue":o[41]||(o[41]=e=>m(oe).formInfo.extInfo.marriageStatus=e),label:we("marritalStatus","title"),name:`${e.prefix}_marriageStatus`,"data-source":we("marritalStatus","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},"is-link":"","is-view":e.isView,required:be("marritalStatus")},null,8,["modelValue","label","name","data-source","is-view","required"])):b("",!0),Ve("degree")?(c(),p(n,{key:26,modelValue:m(oe).formInfo.extInfo.educationDegree,"onUpdate:modelValue":o[42]||(o[42]=e=>m(oe).formInfo.extInfo.educationDegree=e),label:we("degree","title"),name:`${e.prefix}_educationDegree`,"data-source":we("degree","attributeValueList")||[],mapping:{label:"name",value:"code",children:"child"},required:be("degree"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):b("",!0),Ve("mobile")?(c(),p(i,{key:27,ref_key:"phoneRef",ref:ae,modelValue:m(ie),"onUpdate:modelValue":[o[43]||(o[43]=e=>x(ie)?ie.value=e:null),o[45]||(o[45]=e=>ce(e,"mobile"))],label:we("mobile","title"),name:`${e.prefix}_mobile`,maxlength:11,"is-view":e.isView,required:be("mobile"),"validate-type":m(le)?void 0:[m(t).PHONE],onFocus:o[44]||(o[44]=e=>Ie("mobile"))},null,8,["modelValue","label","name","is-view","required","validate-type"])):b("",!0),Ve("verificationCode")?(c(),p(i,{key:28,modelValue:m(oe).formInfo.verificationCode,"onUpdate:modelValue":o[46]||(o[46]=e=>m(oe).formInfo.verificationCode=e),label:we("verificationCode","title"),name:`${e.prefix}_verificationCode`,type:"digit",maxlength:6,"is-view":e.isView,required:be("verificationCode")},h({_:2},[e.isView?void 0:{name:"extra",fn:v((()=>[y("div",K,[V(R,{class:k(["sms-code",{"count-down":m(ue)>0}]),size:"small",plain:"",type:"primary",onClick:pe},{default:v((()=>[C(L(m(se)),1)])),_:1},8,["class"])])])),key:"0"}]),1032,["modelValue","label","name","is-view","required"])):b("",!0),Ve("isSmoke")?(c(),p(i,{key:29,modelValue:m(oe).formInfo.isSmoke,"onUpdate:modelValue":o[48]||(o[48]=e=>m(oe).formInfo.isSmoke=e),required:be("isSmoke"),label:we("isSmoke","title"),name:`${e.prefix}_isSmoke`,"is-view":m(Q)},{input:v((()=>[V(l,{modelValue:m(oe).formInfo.isSmoke,"onUpdate:modelValue":o[47]||(o[47]=e=>m(oe).formInfo.isSmoke=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("isSmoke","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):b("",!0),Ve("contactNo")?(c(),p(i,{key:30,modelValue:m(oe).formInfo.contactNo,"onUpdate:modelValue":o[49]||(o[49]=e=>m(oe).formInfo.contactNo=e),label:we("contactNo","title"),name:`${e.prefix}_contactNo`,"is-view":e.isView,required:be("contactNo")},null,8,["modelValue","label","name","is-view","required"])):b("",!0),Ve("email")?(c(),p(i,{key:31,modelValue:m(oe).formInfo.email,"onUpdate:modelValue":o[50]||(o[50]=e=>m(oe).formInfo.email=e),label:we("email","title"),name:`${e.prefix}_email`,"is-view":e.isView,required:be("email"),"validate-type":[m(t).EMAIL]},null,8,["modelValue","label","name","is-view","required","validate-type"])):b("",!0),Ve("homeAddress")?(c(),p(f,{key:32,modelValue:m(oe).formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":o[51]||(o[51]=e=>m(oe).formInfo.extInfo.familyAreaCode=e),field1:m(oe).formInfo.extInfo.familyProvinceCode,"onUpdate:field1":o[52]||(o[52]=e=>m(oe).formInfo.extInfo.familyProvinceCode=e),field2:m(oe).formInfo.extInfo.familyCityCode,"onUpdate:field2":o[53]||(o[53]=e=>m(oe).formInfo.extInfo.familyCityCode=e),field3:m(oe).formInfo.extInfo.familyAreaCode,"onUpdate:field3":o[54]||(o[54]=e=>m(oe).formInfo.extInfo.familyAreaCode=e),label:we("homeAddress","title"),name:`${e.prefix}_familyProvinceCode`,"is-link":"","is-view":e.isView,required:be("homeAddress"),"data-source":m(j),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):b("",!0),Ve("homeAddressDetail")?(c(),p(i,{key:33,modelValue:m(oe).formInfo.extInfo.familyAddress,"onUpdate:modelValue":o[55]||(o[55]=e=>m(oe).formInfo.extInfo.familyAddress=e),label:we("homeAddressDetail","title"),name:`${e.prefix}_familyAddress`,"is-view":e.isView,maxlength:99,rules:[{validator:Oe}],required:be("homeAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):b("",!0),Ve("homePostalCode")?(c(),p(i,{key:34,modelValue:m(oe).formInfo.extInfo.familyZipCode,"onUpdate:modelValue":o[56]||(o[56]=e=>m(oe).formInfo.extInfo.familyZipCode=e),label:we("homePostalCode","title"),name:`${e.prefix}_familyZipCode`,"is-view":e.isView,required:be("homePostalCode"),"validate-type":[m(t).ZIP_CODE]},null,8,["modelValue","label","name","is-view","required","validate-type"])):b("",!0),Ve("workAddress")?(c(),p(f,{key:35,modelValue:m(oe).formInfo.extInfo.workAreaCode,"onUpdate:modelValue":o[57]||(o[57]=e=>m(oe).formInfo.extInfo.workAreaCode=e),field1:m(oe).formInfo.extInfo.workProvinceCode,"onUpdate:field1":o[58]||(o[58]=e=>m(oe).formInfo.extInfo.workProvinceCode=e),field2:m(oe).formInfo.extInfo.workCityCode,"onUpdate:field2":o[59]||(o[59]=e=>m(oe).formInfo.extInfo.workCityCode=e),field3:m(oe).formInfo.extInfo.workAreaCode,"onUpdate:field3":o[60]||(o[60]=e=>m(oe).formInfo.extInfo.workAreaCode=e),label:we("workAddress","title"),name:`${e.prefix}_workProvinceCode`,"is-link":"","is-view":e.isView,required:be("workAddress"),"data-source":m(j),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):b("",!0),Ve("workAddressDetail")?(c(),p(i,{key:36,modelValue:m(oe).formInfo.extInfo.workAddress,"onUpdate:modelValue":o[61]||(o[61]=e=>m(oe).formInfo.extInfo.workAddress=e),label:we("workAddressDetail","title"),name:`${e.prefix}_workAddress`,"is-view":e.isView,rules:[{validator:Oe}],required:be("workAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):b("",!0),Ve("workPostalCode")?(c(),p(i,{key:37,modelValue:m(oe).formInfo.extInfo.workZipCode,"onUpdate:modelValue":o[62]||(o[62]=e=>m(oe).formInfo.extInfo.workZipCode=e),label:we("workPostalCode","title"),required:be("workZipCode"),name:`${e.prefix}_workPostCode`,"is-view":e.isView,"validate-type":[m(t).ZIP_CODE]},null,8,["modelValue","label","required","name","is-view","validate-type"])):b("",!0),Ve("companyName")?(c(),p(i,{key:38,modelValue:m(oe).formInfo.extInfo.workStation,"onUpdate:modelValue":o[63]||(o[63]=e=>m(oe).formInfo.extInfo.workStation=e),label:we("companyName","title"),name:`${e.prefix}_workPostCode`,"is-view":e.isView,rules:[{validator:(...e)=>Ue(20,...e)}],required:be("companyName")},null,8,["modelValue","label","name","is-view","rules","required"])):b("",!0),Ve("workContent")?(c(),p(i,{key:39,modelValue:m(oe).formInfo.extInfo.workContent,"onUpdate:modelValue":o[64]||(o[64]=e=>m(oe).formInfo.extInfo.workContent=e),label:we("workContent","title"),name:`${e.prefix}_workContent`,required:be("workContent"),"is-view":e.isView,rules:[{validator:(...e)=>Ue(100,...e)}]},null,8,["modelValue","label","name","required","is-view","rules"])):b("",!0),Ve("chineseTaxResident")?(c(),p(i,{key:40,modelValue:m(oe).formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":o[66]||(o[66]=e=>m(oe).formInfo.extInfo.chineseTaxResident=e),label:we("chineseTaxResident","title"),name:`${e.prefix}_taxResident`,required:be("chineseTaxResident")},{input:v((()=>[V(l,{modelValue:m(oe).formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":o[65]||(o[65]=e=>m(oe).formInfo.extInfo.chineseTaxResident=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("chineseTaxResident","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):b("",!0),Ve("taxResident")?(c(),p(n,{key:41,modelValue:m(oe).formInfo.taxResident,"onUpdate:modelValue":o[67]||(o[67]=e=>m(oe).formInfo.taxResident=e),"is-view":e.isView,label:we("taxResident","title"),name:`${e.prefix}_benefitOrder`,"data-source":we("taxResident","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:be("taxResident")},null,8,["modelValue","is-view","label","name","data-source","required"])):b("",!0),Ve("partTimeJob")?(c(),p(i,{key:42,modelValue:m(oe).formInfo.extInfo.isPartTime,"onUpdate:modelValue":o[69]||(o[69]=e=>m(oe).formInfo.extInfo.isPartTime=e),label:we("partTimeJob","title"),name:`${e.prefix}_isPartTime`,required:be("partTimeJob")},{input:v((()=>[V(l,{modelValue:m(oe).formInfo.extInfo.isPartTime,"onUpdate:modelValue":o[68]||(o[68]=e=>m(oe).formInfo.extInfo.isPartTime=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("partTimeJob","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):b("",!0),Ve("benefitOrder")?(c(),p(n,{key:43,modelValue:m(oe).formInfo.benefitOrder,"onUpdate:modelValue":o[70]||(o[70]=e=>m(oe).formInfo.benefitOrder=e),label:we("benefitOrder","title"),name:`${e.prefix}_benefitOrder`,"is-view":e.isView,"data-source":we("benefitOrder","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:be("benefitOrder")},null,8,["modelValue","label","name","is-view","data-source","required"])):b("",!0),Ve("benefitRate")?(c(),p(i,{key:44,modelValue:m(oe).formInfo.benefitRate,"onUpdate:modelValue":o[71]||(o[71]=e=>m(oe).formInfo.benefitRate=e),required:be("benefitRate"),name:`${e.prefix}_benefitRate`,"is-view":e.isView,rules:[{validator:Re}],label:we("benefitRate","title")},{extra:v((()=>[W])),_:1},8,["modelValue","required","name","is-view","rules","label"])):b("",!0),w(a.$slots,"default")])):b("",!0)}}});const Q={class:"page-info-wrapper"},ee=e({__name:"index",props:{factorObject:null,formInfo:{default:()=>({})},isView:{type:Boolean,default:!1},sendSmsCode:{type:Function,default:(e,a)=>{}},titleCollection:{default:()=>({})},inputAlign:{default:"left"},needDesensitize:{type:Boolean,default:!1}},setup(e,{expose:a}){const n=e,{insurerCode:r=""}=o().query;N(),o();const t=F(`${r.toLocaleUpperCase()}_OCCUPATION`),u=l({}),s=l({extInfo:{},tenantOrderHolder:{extInfo:{occupationCodeList:[]}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",subjectNo:""}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),f=l(null),y=l([]),C=l([]);l([]),l([]);l([]);$({beneficiaryId:0,nextPage:"",currentAddress:null,isLoading:!0});const h=i((()=>{var e,a;const o={INSURER:{},HOLDER:{}};return((null==(e=u.value)?void 0:e.INSURER)||[]).forEach((e=>{o.INSURER[e.code]=e})),((null==(a=u.value)?void 0:a.HOLDER)||[]).forEach((e=>{o.HOLDER[e.code]=e})),o})),k=(e,a)=>{var o,l,i;return(null==(i=null==(l=null==(o=h.value)?void 0:o[a])?void 0:l[e])?void 0:i.isDisplay)===O.YES},L=(e,a)=>{var o,l;return(null==(l=null==(o=h.value)?void 0:o[a])?void 0:l[e].isMustInput)===O.YES},R=(e,a,o)=>{var l,i,n;return(null==(n=null==(i=null==(l=h.value)?void 0:l[o])?void 0:i[e])?void 0:n[a])||""},_=(e,a)=>{const o=e;return Object.keys(o).forEach((e=>{a.includes(e)||(o[e]="")})),o};return a({validateForm:e=>new Promise(((a,o)=>{var l;null==(l=f.value)||l.validate(e).then((()=>{a(s.value)}),(()=>{o()}))}))}),d((()=>n.factorObject),(()=>{const e={BENEFICIARY:n.factorObject[3],INSURER:n.factorObject[2],HOLDER:n.factorObject[1]};u.value=e}),{immediate:!0,deep:!0}),d([()=>s.value.tenantOrderInsuredList[0].relationToHolder,()=>s.value.tenantOrderHolder],(([e],[a])=>{var o,l,i,r;`${s.value.tenantOrderInsuredList[0].relationToHolder}`===B.SELF?(Object.assign(s.value.tenantOrderInsuredList[0],{..._(null==(l=null==(o=s.value)?void 0:o.tenantOrderInsuredList)?void 0:l[0],["extInfo","relationToHolder","tenantOrderBeneficiaryList","tenantOrderProductList"]),extInfo:{occupationCodeList:[]}}),Object.assign(s.value.tenantOrderInsuredList[0],s.value.tenantOrderHolder,{id:s.value.tenantOrderInsuredList[0].id,extInfo:{...s.value.tenantOrderHolder.extInfo,insureProvinceCode:s.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,insureCityCode:s.value.tenantOrderInsuredList[0].extInfo.insureCityCode,insureAreaCode:s.value.tenantOrderInsuredList[0].extInfo.insureAreaCode}})):e===a||n.isView||Object.assign(s.value.tenantOrderInsuredList[0],{..._(null==(r=null==(i=s.value)?void 0:i.tenantOrderInsuredList)?void 0:r[0],["extInfo","relationToHolder","tenantOrderBeneficiaryList","tenantOrderProductList"]),extInfo:{occupationCodeList:[]}})}),{deep:!0}),d((()=>n.formInfo),(()=>{Object.keys(n.formInfo).length&&(s.value=n.formInfo)}),{deep:!0,immediate:!0}),(a,o)=>{const l=T,i=H,n=U,r=A,d=j;return c(),I("div",Q,[V(d,{ref_key:"formRef",ref:f,"show-error":"","show-error-message":!1,"input-align":e.inputAlign},{default:v((()=>{var d,f,I,h;return[(null==(d=m(u).HOLDER)?void 0:d.length)?(c(),p(i,{key:0,"show-line":!1,"show-divider":!1,title:null==(f=e.titleCollection)?void 0:f.HOLDER},{default:v((()=>[V(X,{images:m(y),"onUpdate:images":o[1]||(o[1]=e=>x(y)?y.value=e:null),"form-info":m(s).tenantOrderHolder,"factor-list":m(u).HOLDER,prefix:"holder","is-view":e.isView,"need-desensitize":e.needDesensitize,"send-sms-code":e.sendSmsCode},{name:v((()=>[w(a.$slots,"holderName")])),default:v((()=>{var a,i;return[k("gasNumberCollection","HOLDER")&&(null==(i=null==(a=m(s).tenantOrderSubjectList)?void 0:a[0])?void 0:i.extInfo)?(c(),p(l,{key:0,modelValue:m(s).tenantOrderSubjectList[0].subjectNo,"onUpdate:modelValue":o[0]||(o[0]=e=>m(s).tenantOrderSubjectList[0].subjectNo=e),label:R("gasNumberCollection","title","HOLDER"),name:"subjectNo",required:L("gasNumberCollection","HOLDER"),"is-view":e.isView,maxlength:100},null,8,["modelValue","label","required","is-view"])):b("",!0)]})),_:3},8,["images","form-info","factor-list","is-view","need-desensitize","send-sms-code"])])),_:3},8,["title"])):b("",!0),(null==(I=m(u).INSURER)?void 0:I.length)?(c(),p(i,{key:1,"show-line":!1,"show-divider":!1,title:null==(h=e.titleCollection)?void 0:h.INSURER},{default:v((()=>[k("relationToHolder","INSURER")?(c(),p(l,{key:0,modelValue:m(s).tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":o[3]||(o[3]=e=>m(s).tenantOrderInsuredList[0].relationToHolder=e),class:"relation-holder",name:"insure_relationToHolder",required:L("relationToHolder","INSURER"),label:R("relationToHolder","title","INSURER")},{input:v((()=>[V(n,{modelValue:m(s).tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":o[2]||(o[2]=e=>m(s).tenantOrderInsuredList[0].relationToHolder=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:R("relationToHolder","attributeValueList","INSURER")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required","label"])):b("",!0),e.isView||1!=+m(s).tenantOrderInsuredList[0].relationToHolder?(c(),p(X,{key:1,images:m(C),"onUpdate:images":o[4]||(o[4]=e=>x(C)?C.value=e:null),"form-info":m(s).tenantOrderInsuredList[0],"factor-list":m(u).INSURER||[],prefix:"insure","need-desensitize":e.needDesensitize,"send-sms-code":e.sendSmsCode,"is-view":e.isView},{name:v((()=>[w(a.$slots,"insurerName")])),_:3},8,["images","form-info","factor-list","need-desensitize","send-sms-code","is-view"])):b("",!0),k("social","INSURER")?(c(),p(l,{key:2,modelValue:m(s).tenantOrderInsuredList[0].extInfo.hasSocialInsurance,"onUpdate:modelValue":o[6]||(o[6]=e=>m(s).tenantOrderInsuredList[0].extInfo.hasSocialInsurance=e),label:R("social","title","INSURER"),name:"insure_hasSocialInsurance",required:L("social","INSURER")},{input:v((()=>[V(n,{modelValue:m(s).tenantOrderInsuredList[0].extInfo.hasSocialInsurance,"onUpdate:modelValue":o[5]||(o[5]=e=>m(s).tenantOrderInsuredList[0].extInfo.hasSocialInsurance=e),disabled:e.isView,prop:{label:"value",value:"code"},options:R("social","attributeValueList","INSURER")||[]},null,8,["modelValue","disabled","options"])])),_:1},8,["modelValue","label","required"])):b("",!0),k("occupation","INSURER")?(c(),p(r,{key:3,modelValue:m(s).tenantOrderInsuredList[0].extInfo.occupationCodeList[0],"onUpdate:modelValue":o[7]||(o[7]=e=>m(s).tenantOrderInsuredList[0].extInfo.occupationCodeList[0]=e),field0:m(s).tenantOrderInsuredList[0].extInfo.occupationCodeList[0],"onUpdate:field0":o[8]||(o[8]=e=>m(s).tenantOrderInsuredList[0].extInfo.occupationCodeList[0]=e),field1:m(s).tenantOrderInsuredList[0].extInfo.occupationCodeList[1],"onUpdate:field1":o[9]||(o[9]=e=>m(s).tenantOrderInsuredList[0].extInfo.occupationCodeList[1]=e),field2:m(s).tenantOrderInsuredList[0].extInfo.occupationCodeList[2],"onUpdate:field2":o[10]||(o[10]=e=>m(s).tenantOrderInsuredList[0].extInfo.occupationCodeList[2]=e),label:R("occupation","title","INSURER"),name:"insure_occupationCodeList","is-view":e.isView,required:L("occupation","INSURER"),"data-source":m(t),mapping:{label:"value",value:"code",children:"children"},"is-link":""},null,8,["modelValue","field0","field1","field2","label","is-view","required","data-source"])):b("",!0)])),_:3},8,["title"])):b("",!0),b("",!0)]})),_:3},8,["input-align"])])}}});export{ee as _};
