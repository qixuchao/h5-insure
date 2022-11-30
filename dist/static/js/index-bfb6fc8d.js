import{h as ue,R as ie,P as ne,G as y,d as H,z,$ as g,r as x,B as E,k as t,p as h,m as d,n as v,s as c,v as r,A as L,E as le,L as te,M as de,T as me,aa as fe,N as se,F as Ie,H as ve}from"./vendor-4d9de129.js";import{C,V as q,I as pe,J as ce,K as Ve,Y as K}from"./index-b853de44.js";import{R as Ce}from"./infoCollection-6ac2fee7.js";import{r as be}from"./relativeTime-4ed25667.js";import{u as ae}from"./useDicData-51d348cd.js";const ye={key:0,class:"com-personal-wrapper"},xe={class:"date-extra"},Ee=le("\u957F\u671F"),Fe=L("span",{class:"input-extra"},"\u4E07",-1),Be=L("span",{class:"input-extra"},"\u4E07",-1),ke=L("span",{class:"input-extra"},"%",-1),ee=ue({props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]},sendSmsCode:{type:Function,default:(a,P)=>{}}},emits:["update:images"],setup(a,{emit:P}){const b=a;ie();const{venderCode:F=""}=ne().query,I=ae(`${F.toLocaleUpperCase()}_OCCUPATION`),R=ae("NATIONAL_REGION_CODE"),w=y([]),D=y(!1),e=y({formInfo:b.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""});H.extend(be);const U=y(b.formInfo.certEndType===2),W=60,B=y(0),O=y("\u83B7\u53D6\u9A8C\u8BC1\u7801"),Q=y(!1),k=z(()=>{const i={};return b.factorList.forEach(l=>{i[l.code]=l}),i});z(()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(e.value.formInfo.mobile));const oe=()=>{if(B.value>0)return;B.value=W;const i=()=>{O.value=`${B.value}s`,B.value-=1};i();const l=setInterval(()=>{B.value===0?(O.value="\u83B7\u53D6\u9A8C\u8BC1\u7801",B.value=0,clearInterval(l)):i()},1e3)},V=async()=>{B.value>0||b.sendSmsCode(e.value.formInfo.mobile,()=>{Q.value=!0,me({message:"\u77ED\u4FE1\u53D1\u9001\u6210\u529F\uFF0C\u8BF7\u67E5\u6536"}),oe()})},s=i=>{e.value.formInfo.certNo=i.personIdCard,e.value.formInfo.name=i.personName,e.value.formInfo.certEndDate=H(i.validDateEnd,"YYYYMMDD").toDate()},n=i=>k.value&&k.value[i]&&k.value[i].isDisplay===K.YES,m=i=>k.value&&k.value[i]&&k.value[i].isMustInput===K.YES,u=(i,l)=>{var p,f;return((f=(p=k.value)==null?void 0:p[i])==null?void 0:f[l])||""},X=z(()=>[C.CERT,C.HOUSE_HOLD].includes(`${e.value.formInfo.certType}`)?[q.ID_CARD]:`${e.value.formInfo.certType}`===C.BIRTH?[q.BIRTH]:`${e.value.formInfo.certType}`===C.PASSPORT?[q.PASSPORT]:[q.ID_CARD]),_=(i,l)=>m("attachment")?e.value.formInfo.certEndType===2||e.value.formInfo.certEndDate?"":"\u8BF7\u9009\u62E9\u6709\u6548\u671F\u81F3":"",$=(i,l)=>/^\d{1,10}(\.\d{1,2})?$/.test(i)?"":"\u5E74\u6536\u5165\u6700\u591A\u5F55\u516510\u4F4D\u6570\u5B57",M=(i,l)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(i)?"":"\u6536\u76CA\u6BD4\u4F8B\u53EA\u80FD\u586B\u51991-100\u7684\u6B63\u6574\u6570",T=(i,l,p)=>l.length>i?`\u6700\u5927\u4E0D\u80FD\u8D85\u8FC7${i}\u4E2A\u5B57\u7B26`:"",Y=(i,l)=>{var p,f,S,A,Z,G,J;if(!n("nationality"))return"";if(((f=(p=e.value.formInfo)==null?void 0:p.extInfo)==null?void 0:f.nationalityCode)==="CHN"){if(![C.CERT,C.HOUSE_HOLD,C.BIRTH,C.MILITARY_CARD].includes(`${i}`))return"\u56FD\u7C4D\u4E3A\u4E2D\u56FD\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u53EA\u5141\u8BB8\u9009\u62E9\u8EAB\u4EFD\u8BC1\u3001\u6237\u53E3\u672C\u3001\u51FA\u751F\u8BC1\u3001\u519B\u5B98\u8BC1"}else if(["HKG","MAC"].includes((A=(S=e.value.formInfo)==null?void 0:S.extInfo)==null?void 0:A.nationalityCode)){if(![C.HK_MACAO_RESIDENCE_PERMIT,C.HONGKONG_MACAO].includes(`${i}`))return"\u56FD\u7C4D\u4E3A\u4E2D\u56FD\u9999\u6E2F\u3001\u4E2D\u56FD\u6FB3\u95E8\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u53EA\u5141\u8BB8\u9009\u62E9\u6E2F\u6FB3\u901A\u884C\u8BC1\u3001\u6E2F\u6FB3\u5C45\u6C11\u5C45\u4F4F\u8BC1"}else if(((G=(Z=e.value.formInfo)==null?void 0:Z.extInfo)==null?void 0:G.nationalityCode)==="TWN"){if(![C.TAIWAN_RESIDENCE_PERMIT,C.TAIWAN_TRAVEL].includes(`${i}`))return"\u56FD\u7C4D\u4E3A\u4E2D\u56FD\u53F0\u6E7E\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u53EA\u5141\u8BB8\u9009\u62E9\u53F0\u6E7E\u901A\u884C\u8BC1\u3001\u53F0\u6E7E\u5C45\u6C11\u5C45\u4F4F\u8BC1"}else if(![C.PASSPORT,C.FOREIGN_PERMANENT].includes(`${i}`))return"\u56FD\u7C4D\u4E3A\u975E\u4E2D\u56FD\u3001\u6E2F\u6FB3\u53F0\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u53EA\u5141\u8BB8\u9009\u62E9\u62A4\u7167\u3001\u5916\u56FD\u4EBA\u6C38\u4E45\u5C45\u7559\u8EAB\u4EFD\u8BC1";return H().year()-H((J=e.value.formInfo)==null?void 0:J.birthday).year()>2&&i===C.BIRTH?"\u5E74\u9F84\u5927\u4E8E\u7B49\u4E8E2\u5468\u5C81\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u4E0D\u80FD\u9009\u62E9\u51FA\u751F\u8BC1":""},j=i=>Array.isArray(i)&&i.length===2&&i[0]&&i[1]?"":"\u8BF7\u4E0A\u4F20\u8EAB\u4EFD\u8BC1\u6B63\u53CD\u9762\u7167\u7247";return g(()=>U.value,i=>{i?(e.value.formInfo.certEndType=2,e.value.formInfo.certEndDate=""):e.value.formInfo.certEndType=1},{immediate:!0}),g(()=>e.value.formInfo.certType,i=>{[C.CERT,C.HOUSE_HOLD].includes(i)?D.value=!0:D.value=!1},{deep:!0,immediate:!0}),g(()=>e.value.formInfo.certNo,i=>{pe(i)&&(e.value.formInfo.gender=+ce(i),e.value.formInfo.birthday=H(new Date(Ve(i))).format("YYYY-MM-DD"))},{deep:!0,immediate:!0}),g(()=>b.images,i=>{w.value=i},{immediate:!0}),g(()=>b.formInfo,()=>{e.value.formInfo=b.formInfo},{deep:!0,immediate:!0}),g(w,i=>{P("update:images",i)},{deep:!0}),(i,l)=>{const p=x("ProRadioButton"),f=x("ProField"),S=x("ProDatePicker"),A=x("ProPicker"),Z=x("ProIDCardUpload"),G=x("ProImageUpload"),J=x("van-checkbox"),N=x("ProCascader"),re=x("van-button");return Object.keys(E(k)).length?(t(),h("div",ye,[n("insuredBeneficiaryType")?(t(),d(f,{key:0,modelValue:e.value.formInfo.insuredBeneficiaryType,"onUpdate:modelValue":l[1]||(l[1]=o=>e.value.formInfo.insuredBeneficiaryType=o),label:u("insuredBeneficiaryType","title"),name:"insuredBeneficiaryType",placeholder:"\u8BF7\u9009\u62E9"},{input:v(()=>[c(p,{modelValue:e.value.formInfo.insuredBeneficiaryType,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value.formInfo.insuredBeneficiaryType=o),prop:{label:"value",value:"code"},options:u("insuredBeneficiaryType","attributeValueList")||[]},null,8,["modelValue","options"])]),_:1},8,["modelValue","label"])):r("",!0),n("insuredRelation")?(t(),d(f,{key:1,modelValue:e.value.formInfo.insuredRelation,"onUpdate:modelValue":l[3]||(l[3]=o=>e.value.formInfo.insuredRelation=o),label:u("insuredRelation","title"),name:"insuredRelation",placeholder:"\u8BF7\u9009\u62E9"},{input:v(()=>[c(p,{modelValue:e.value.formInfo.insuredRelation,"onUpdate:modelValue":l[2]||(l[2]=o=>e.value.formInfo.insuredRelation=o),prop:{label:"value",value:"code"},options:u("insuredRelation","attributeValueList")||[]},null,8,["modelValue","options"])]),_:1},8,["modelValue","label"])):r("",!0),n("name")?(t(),d(f,{key:2,modelValue:e.value.formInfo.name,"onUpdate:modelValue":l[4]||(l[4]=o=>e.value.formInfo.name=o),label:u("name","title"),name:`${a.prefix}_name`,required:m("name")},null,8,["modelValue","label","name","required"])):r("",!0),n("sex")?(t(),d(f,{key:3,modelValue:e.value.formInfo.gender,"onUpdate:modelValue":l[6]||(l[6]=o=>e.value.formInfo.gender=o),required:m("sex"),label:u("sex","title"),name:`${a.prefix}_gender`,placeholder:"\u8BF7\u9009\u62E9","is-view":D.value},{input:v(()=>[c(p,{modelValue:e.value.formInfo.gender,"onUpdate:modelValue":l[5]||(l[5]=o=>e.value.formInfo.gender=o),disabled:D.value,"is-view":a.isView,prop:{label:"value",value:"code"},options:u("sex","attributeValueList")||[]},null,8,["modelValue","disabled","is-view","options"])]),_:1},8,["modelValue","required","label","name","is-view"])):r("",!0),n("birthDate")?(t(),d(S,{key:4,modelValue:e.value.formInfo.birthday,"onUpdate:modelValue":l[7]||(l[7]=o=>e.value.formInfo.birthday=o),label:u("birthDate","title"),name:`${a.prefix}_birthday`,min:e.value.birth.min,max:e.value.birth.max,type:"date",required:m("birthDate")},null,8,["modelValue","label","name","min","max","required"])):r("",!0),n("certType")?(t(),d(A,{key:5,modelValue:e.value.formInfo.certType,"onUpdate:modelValue":l[8]||(l[8]=o=>e.value.formInfo.certType=o),label:u("certType","title"),name:`${a.prefix}_certType`,"data-source":u("certType","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:m("certType"),rules:[{validator:Y}]},null,8,["modelValue","label","name","data-source","required","rules"])):r("",!0),n("certImage")&&e.value.formInfo.certType+""=="1"?(t(),d(f,{key:6,label:"\u8EAB\u4EFD\u8BC1\u4E0A\u4F20",block:"",required:m("certImage"),rules:[{validator:j}],name:`${a.prefix}_idCard`},{input:v(()=>[c(Z,{modelValue:w.value,"onUpdate:modelValue":l[9]||(l[9]=o=>w.value=o),"is-view":a.isView,onOnOCR:s},null,8,["modelValue","is-view"])]),_:1},8,["required","rules","name"])):r("",!0),n("certImage")&&e.value.formInfo.certType&&e.value.formInfo.certType+""!="1"?(t(),d(f,{key:7,label:u("certImage","title"),block:"",required:m("certImage")},{input:v(()=>[c(G,{modelValue:w.value,"onUpdate:modelValue":l[10]||(l[10]=o=>w.value=o),"max-count":1},null,8,["modelValue"])]),_:1},8,["label","required"])):r("",!0),n("certNo")?(t(),d(f,{key:8,modelValue:e.value.formInfo.certNo,"onUpdate:modelValue":l[11]||(l[11]=o=>e.value.formInfo.certNo=o),label:u("certNo","title"),name:`${a.prefix}_certNo`,required:m("certNo"),placeholder:"\u8BF7\u8F93\u5165",maxlength:18,"validate-type":E(X)},null,8,["modelValue","label","name","required","validate-type"])):r("",!0),n("certExpiry")?(t(),d(S,{key:9,modelValue:e.value.formInfo.certEndDate,"onUpdate:modelValue":l[13]||(l[13]=o=>e.value.formInfo.certEndDate=o),label:u("certExpiry","title"),name:`${a.prefix}_certEndDate`,type:"date",min:e.value.certEndDate.min,max:e.value.certEndDate.max,"is-view":U.value||a.isView,read:"",rules:[{validator:_}]},{extra:v(()=>[L("div",xe,[c(J,{modelValue:U.value,"onUpdate:modelValue":l[12]||(l[12]=o=>U.value=o),"icon-size":16,disabled:a.isView},{default:v(()=>[Ee]),_:1},8,["modelValue","disabled"])])]),_:1},8,["modelValue","label","name","min","max","is-view","rules"])):r("",!0),n("age")?(t(),d(f,{key:10,modelValue:e.value.formInfo.name,"onUpdate:modelValue":l[14]||(l[14]=o=>e.value.formInfo.name=o),label:u("age","title"),name:`${a.prefix}_age`,required:m("age")},null,8,["modelValue","label","name","required"])):r("",!0),n("residence")?(t(),d(N,{key:11,modelValue:e.value.formInfo.extInfo.provinceCode,"onUpdate:modelValue":l[15]||(l[15]=o=>e.value.formInfo.extInfo.provinceCode=o),field1:e.value.formInfo.extInfo.provinceCode,"onUpdate:field1":l[16]||(l[16]=o=>e.value.formInfo.extInfo.provinceCode=o),field2:e.value.formInfo.extInfo.cityCode,"onUpdate:field2":l[17]||(l[17]=o=>e.value.formInfo.extInfo.cityCode=o),field3:e.value.formInfo.extInfo.areaCode,"onUpdate:field3":l[18]||(l[18]=o=>e.value.formInfo.extInfo.areaCode=o),label:u("residence","title"),name:`${a.prefix}_provinceCode`,placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:m("residence"),"data-source":E(R),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","required","data-source"])):r("",!0),n("social")?(t(),d(f,{key:12,modelValue:e.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[20]||(l[20]=o=>e.value.formInfo.extInfo.hasSocialInsurance=o),label:u("social","title"),name:`${a.prefix}_hasSocialInsurance`,placeholder:"\u8BF7\u9009\u62E9",required:m("social")},{input:v(()=>[c(p,{modelValue:e.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[19]||(l[19]=o=>e.value.formInfo.extInfo.hasSocialInsurance=o),"is-view":a.isView,prop:{label:"value",value:"code"},options:u("social","attributeValueList")||[]},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","label","name","required"])):r("",!0),n("height")?(t(),d(f,{key:13,modelValue:e.value.formInfo.name,"onUpdate:modelValue":l[21]||(l[21]=o=>e.value.formInfo.name=o),label:u("height","title"),name:`${a.prefix}_height`,required:m("height")},null,8,["modelValue","label","name","required"])):r("",!0),n("weight")?(t(),d(f,{key:14,modelValue:e.value.formInfo.name,"onUpdate:modelValue":l[22]||(l[22]=o=>e.value.formInfo.name=o),label:u("weight","title"),name:`${a.prefix}_weight`,required:m("weight")},null,8,["modelValue","label","name","required"])):r("",!0),n("BMI")?(t(),d(f,{key:15,modelValue:e.value.formInfo.name,"onUpdate:modelValue":l[23]||(l[23]=o=>e.value.formInfo.name=o),label:u("BMI","title"),name:`${a.prefix}_BMI`,required:m("BMI")},null,8,["modelValue","label","name","required"])):r("",!0),n("insuredRiskManagementLevel")?(t(),d(f,{key:16,modelValue:e.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[25]||(l[25]=o=>e.value.formInfo.extInfo.hasSocialInsurance=o),label:u("insuredRiskManagementLevel","title"),name:`${a.prefix}_hasSocialInsurance`,placeholder:"\u8BF7\u9009\u62E9",required:m("insuredRiskManagementLevel")},{input:v(()=>[c(p,{modelValue:e.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[24]||(l[24]=o=>e.value.formInfo.extInfo.hasSocialInsurance=o),"is-view":a.isView,prop:{label:"value",value:"code"},options:u("insuredRiskManagementLevel","attributeValueList")||[]},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","label","name","required"])):r("",!0),n("purchaseOtherInsurance")?(t(),d(f,{key:17,modelValue:e.value.formInfo.extInfo.purchaseOtherInsurance,"onUpdate:modelValue":l[27]||(l[27]=o=>e.value.formInfo.extInfo.purchaseOtherInsurance=o),label:u("purchaseOtherInsurance","title"),name:`${a.prefix}_purchaseOtherInsurance`,placeholder:"\u8BF7\u9009\u62E9",required:m("purchaseOtherInsurance")},{input:v(()=>[c(p,{modelValue:e.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[26]||(l[26]=o=>e.value.formInfo.extInfo.hasSocialInsurance=o),"is-view":a.isView,prop:{label:"value",value:"code"},options:u("purchaseOtherInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","label","name","required"])):r("",!0),n("injuryInsurance")?(t(),d(f,{key:18,modelValue:e.value.formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":l[29]||(l[29]=o=>e.value.formInfo.extInfo.injuryInsurance=o),label:u("injuryInsurance","title"),name:`${a.prefix}_hasSocialInsurance`,placeholder:"\u8BF7\u9009\u62E9",required:m("injuryInsurance")},{input:v(()=>[c(p,{modelValue:e.value.formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":l[28]||(l[28]=o=>e.value.formInfo.extInfo.injuryInsurance=o),"is-view":a.isView,prop:{label:"value",value:"code"},options:u("injuryInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","label","name","required"])):r("",!0),n("insureArea")?(t(),d(N,{key:19,label:u("insureArea","title"),name:"insureAreaCode",placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:m("insureArea"),"data-source":E(R),mapping:{label:"name",value:"code",children:"children"}},null,8,["label","required","data-source"])):r("",!0),n("occupation")?(t(),d(N,{key:20,modelValue:e.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:modelValue":l[30]||(l[30]=o=>e.value.formInfo.extInfo.occupationCodeList[0]=o),field0:e.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:field0":l[31]||(l[31]=o=>e.value.formInfo.extInfo.occupationCodeList[0]=o),field1:e.value.formInfo.extInfo.occupationCodeList[1],"onUpdate:field1":l[32]||(l[32]=o=>e.value.formInfo.extInfo.occupationCodeList[1]=o),field2:e.value.formInfo.extInfo.occupationCodeList[2],"onUpdate:field2":l[33]||(l[33]=o=>e.value.formInfo.extInfo.occupationCodeList[2]=o),label:u("occupation","title"),name:`${a.prefix}_occupationCodeList`,placeholder:"\u8BF7\u9009\u62E9",required:m("occupation"),"data-source":E(I),mapping:{label:"name",value:"code",children:"children"},"is-link":""},null,8,["modelValue","field0","field1","field2","label","name","required","data-source"])):r("",!0),n("personalAnnualIncome")?(t(),d(f,{key:21,modelValue:e.value.formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":l[34]||(l[34]=o=>e.value.formInfo.extInfo.personalAnnualIncome=o),label:u("personalAnnualIncome","title"),name:`${a.prefix}_personalAnnualIncome`,required:m("personalAnnualIncome"),placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:$}]},{extra:v(()=>[Fe]),_:1},8,["modelValue","label","name","required","rules"])):r("",!0),n("familyAnnualIncome")?(t(),d(f,{key:22,modelValue:e.value.formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":l[35]||(l[35]=o=>e.value.formInfo.extInfo.familyAnnualIncome=o),label:u("familyAnnualIncome","title"),name:`${a.prefix}_familyAnnualIncome`,placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:$}],required:m("familyAnnualIncome")},{extra:v(()=>[Be]),_:1},8,["modelValue","label","name","rules","required"])):r("",!0),n("country")?(t(),d(A,{key:23,modelValue:e.value.formInfo.extInfo.nationalityCode,"onUpdate:modelValue":l[36]||(l[36]=o=>e.value.formInfo.extInfo.nationalityCode=o),label:u("country","title"),name:`${a.prefix}_nationalityCode`,"data-source":u("country","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},placeholder:"\u8BF7\u9009\u62E9",required:m("country"),"is-link":""},null,8,["modelValue","label","name","data-source","required"])):r("",!0),n("hasUsCard")?(t(),d(f,{key:24,modelValue:e.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":l[38]||(l[38]=o=>e.value.formInfo.extInfo.hasUsCard=o),label:u("hasUsCard","title"),name:`${a.prefix}_hasUsCard`,placeholder:"\u8BF7\u9009\u62E9",required:m("hasUsCard")},{input:v(()=>[c(p,{modelValue:e.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":l[37]||(l[37]=o=>e.value.formInfo.extInfo.hasUsCard=o),"is-view":a.isView,prop:{label:"value",value:"code"},options:u("hasUsCard","attributeValueList")||[]},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","label","name","required"])):r("",!0),n("marritalStatus")?(t(),d(A,{key:25,modelValue:e.value.formInfo.extInfo.marriageStatus,"onUpdate:modelValue":l[39]||(l[39]=o=>e.value.formInfo.extInfo.marriageStatus=o),label:u("marritalStatus","title"),name:`${a.prefix}_marriageStatus`,placeholder:"\u8BF7\u9009\u62E9","data-source":u("marritalStatus","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},"is-link":"",required:m("marritalStatus")},null,8,["modelValue","label","name","data-source","required"])):r("",!0),n("degree")?(t(),d(A,{key:26,modelValue:e.value.formInfo.extInfo.educationDegree,"onUpdate:modelValue":l[40]||(l[40]=o=>e.value.formInfo.extInfo.educationDegree=o),label:u("degree","title"),name:`${a.prefix}_educationDegree`,"data-source":u("degree","attributeValueList")||[],mapping:{label:"name",value:"code",children:"child"},placeholder:"\u8BF7\u9009\u62E9",required:m("degree"),"is-link":""},null,8,["modelValue","label","name","data-source","required"])):r("",!0),n("mobile")?(t(),d(f,{key:27,modelValue:e.value.formInfo.mobile,"onUpdate:modelValue":l[41]||(l[41]=o=>e.value.formInfo.mobile=o),label:u("mobile","title"),name:`${a.prefix}_mobile`,placeholder:"\u8BF7\u8F93\u5165",maxlength:11,required:m("mobile"),"validate-type":[E(q).PHONE]},null,8,["modelValue","label","name","required","validate-type"])):r("",!0),n("verificationCode")?(t(),d(f,{key:28,modelValue:e.value.formInfo.verificationCode,"onUpdate:modelValue":l[42]||(l[42]=o=>e.value.formInfo.verificationCode=o),label:u("verificationCode","title"),name:`${a.prefix}_verificationCode`,required:m("verificationCode")},{extra:v(()=>[c(re,{class:de(["sms-code",{"count-down":B.value>0}]),size:"small",type:"primary",onClick:V},{default:v(()=>[le(te(O.value),1)]),_:1},8,["class"])]),_:1},8,["modelValue","label","name","required"])):r("",!0),n("isSmoke")?(t(),d(f,{key:29,modelValue:e.value.formInfo.isSmoke,"onUpdate:modelValue":l[44]||(l[44]=o=>e.value.formInfo.isSmoke=o),required:m("isSmoke"),label:u("isSmoke","title"),name:`${a.prefix}_isSmoke`,placeholder:"\u8BF7\u9009\u62E9","is-view":D.value},{input:v(()=>[c(p,{modelValue:e.value.formInfo.isSmoke,"onUpdate:modelValue":l[43]||(l[43]=o=>e.value.formInfo.isSmoke=o),"is-view":a.isView,prop:{label:"value",value:"code"},options:u("isSmoke","attributeValueList")||[]},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","required","label","name","is-view"])):r("",!0),n("contactNo")?(t(),d(f,{key:30,modelValue:e.value.formInfo.contactNo,"onUpdate:modelValue":l[45]||(l[45]=o=>e.value.formInfo.contactNo=o),label:u("contactNo","title"),name:`${a.prefix}_contactNo`,required:m("contactNo")},null,8,["modelValue","label","name","required"])):r("",!0),n("email")?(t(),d(f,{key:31,modelValue:e.value.formInfo.email,"onUpdate:modelValue":l[46]||(l[46]=o=>e.value.formInfo.email=o),label:u("email","title"),name:`${a.prefix}_email`,placeholder:"\u8BF7\u8F93\u5165",required:m("email"),"validate-type":[E(q).EMAIL]},null,8,["modelValue","label","name","required","validate-type"])):r("",!0),n("homeAddress")?(t(),d(N,{key:32,modelValue:e.value.formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":l[47]||(l[47]=o=>e.value.formInfo.extInfo.familyAreaCode=o),field1:e.value.formInfo.extInfo.familyProvinceCode,"onUpdate:field1":l[48]||(l[48]=o=>e.value.formInfo.extInfo.familyProvinceCode=o),field2:e.value.formInfo.extInfo.familyCityCode,"onUpdate:field2":l[49]||(l[49]=o=>e.value.formInfo.extInfo.familyCityCode=o),field3:e.value.formInfo.extInfo.familyAreaCode,"onUpdate:field3":l[50]||(l[50]=o=>e.value.formInfo.extInfo.familyAreaCode=o),label:u("homeAddress","title"),name:`${a.prefix}_familyProvinceCode`,placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:m("homeAddress"),"data-source":E(R),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","required","data-source"])):r("",!0),n("homeAddressDetail")?(t(),d(f,{key:33,modelValue:e.value.formInfo.extInfo.familyAddress,"onUpdate:modelValue":l[51]||(l[51]=o=>e.value.formInfo.extInfo.familyAddress=o),label:u("homeAddressDetail","title"),name:`${a.prefix}_familyAddress`,placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...o)=>T(100,...o)}],required:m("homeAddressDetail")},null,8,["modelValue","label","name","rules","required"])):r("",!0),n("homePostalCode")?(t(),d(f,{key:34,modelValue:e.value.formInfo.extInfo.familyZipCode,"onUpdate:modelValue":l[52]||(l[52]=o=>e.value.formInfo.extInfo.familyZipCode=o),label:u("homePostalCode","title"),name:`${a.prefix}_familyZipCode`,placeholder:"\u8BF7\u8F93\u5165",required:m("homePostalCode"),"validate-type":[E(q).ZIP_CODE]},null,8,["modelValue","label","name","required","validate-type"])):r("",!0),n("workAddress")?(t(),d(N,{key:35,modelValue:e.value.formInfo.extInfo.workAreaCode,"onUpdate:modelValue":l[53]||(l[53]=o=>e.value.formInfo.extInfo.workAreaCode=o),field1:e.value.formInfo.extInfo.workProvinceCode,"onUpdate:field1":l[54]||(l[54]=o=>e.value.formInfo.extInfo.workProvinceCode=o),field2:e.value.formInfo.extInfo.workCityCode,"onUpdate:field2":l[55]||(l[55]=o=>e.value.formInfo.extInfo.workCityCode=o),field3:e.value.formInfo.extInfo.workAreaCode,"onUpdate:field3":l[56]||(l[56]=o=>e.value.formInfo.extInfo.workAreaCode=o),label:u("workAddress","title"),name:`${a.prefix}_workProvinceCode`,placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:m("workAddress"),"data-source":E(R),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","required","data-source"])):r("",!0),n("workAddressDetail")?(t(),d(f,{key:36,modelValue:e.value.formInfo.extInfo.workAddress,"onUpdate:modelValue":l[57]||(l[57]=o=>e.value.formInfo.extInfo.workAddress=o),label:u("workAddressDetail","title"),name:`${a.prefix}_workAddress`,placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...o)=>T(100,...o)}],required:m("workAddressDetail")},null,8,["modelValue","label","name","rules","required"])):r("",!0),n("workPostalCode")?(t(),d(f,{key:37,modelValue:e.value.formInfo.extInfo.workZipCode,"onUpdate:modelValue":l[58]||(l[58]=o=>e.value.formInfo.extInfo.workZipCode=o),label:u("workPostalCode","title"),required:m("workZipCode"),name:`${a.prefix}_workPostCode`,placeholder:"\u8BF7\u8F93\u5165","validate-type":[E(q).ZIP_CODE]},null,8,["modelValue","label","required","name","validate-type"])):r("",!0),n("companyName")?(t(),d(f,{key:38,modelValue:e.value.formInfo.extInfo.workStation,"onUpdate:modelValue":l[59]||(l[59]=o=>e.value.formInfo.extInfo.workStation=o),label:u("companyName","title"),name:`${a.prefix}_workPostCode`,placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...o)=>T(20,...o)}],required:m("companyName")},null,8,["modelValue","label","name","rules","required"])):r("",!0),n("workContent")?(t(),d(f,{key:39,modelValue:e.value.formInfo.extInfo.workContent,"onUpdate:modelValue":l[60]||(l[60]=o=>e.value.formInfo.extInfo.workContent=o),label:u("workContent","title"),name:`${a.prefix}_workContent`,required:m("workContent"),placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...o)=>T(100,...o)}]},null,8,["modelValue","label","name","required","rules"])):r("",!0),n("chineseTaxResident")?(t(),d(f,{key:40,modelValue:e.value.formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":l[62]||(l[62]=o=>e.value.formInfo.extInfo.chineseTaxResident=o),label:u("chineseTaxResident","title"),name:`${a.prefix}_taxResident`,required:m("chineseTaxResident"),placeholder:"\u8BF7\u8F93\u5165"},{input:v(()=>[c(p,{modelValue:e.value.formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":l[61]||(l[61]=o=>e.value.formInfo.extInfo.chineseTaxResident=o),"is-view":a.isView,prop:{label:"value",value:"code"},options:u("chineseTaxResident","attributeValueList")||[]},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","label","name","required"])):r("",!0),n("taxResident")?(t(),d(A,{key:41,modelValue:e.value.formInfo.taxResident,"onUpdate:modelValue":l[63]||(l[63]=o=>e.value.formInfo.taxResident=o),label:u("taxResident","title"),name:`${a.prefix}_benefitOrder`,"data-source":u("taxResident","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:m("taxResident")},null,8,["modelValue","label","name","data-source","required"])):r("",!0),n("partTimeJob")?(t(),d(f,{key:42,modelValue:e.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":l[65]||(l[65]=o=>e.value.formInfo.extInfo.isPartTime=o),label:u("partTimeJob","title"),name:`${a.prefix}_isPartTime`,required:m("partTimeJob"),placeholder:"\u8BF7\u8F93\u5165"},{input:v(()=>[c(p,{modelValue:e.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":l[64]||(l[64]=o=>e.value.formInfo.extInfo.isPartTime=o),"is-view":a.isView,prop:{label:"value",value:"code"},options:u("partTimeJob","attributeValueList")||[]},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","label","name","required"])):r("",!0),n("gasNumberCollection")?(t(),d(f,{key:43,modelValue:e.value.formInfo.extInfo.gasNumberCollection,"onUpdate:modelValue":l[66]||(l[66]=o=>e.value.formInfo.extInfo.gasNumberCollection=o),label:u("gasNumberCollection","title"),name:`${a.prefix}_gasNumberCollection`,required:m("gasNumberCollection"),placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...o)=>T(100,...o)}]},null,8,["modelValue","label","name","required","rules"])):r("",!0),n("benefitOrder")?(t(),d(A,{key:44,modelValue:e.value.formInfo.benefitOrder,"onUpdate:modelValue":l[67]||(l[67]=o=>e.value.formInfo.benefitOrder=o),label:u("benefitOrder","title"),name:`${a.prefix}_benefitOrder`,"data-source":u("benefitOrder","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:m("benefitOrder")},null,8,["modelValue","label","name","data-source","required"])):r("",!0),n("benefitRate")?(t(),d(f,{key:45,modelValue:e.value.formInfo.benefitRate,"onUpdate:modelValue":l[68]||(l[68]=o=>e.value.formInfo.benefitRate=o),required:m("benefitRate"),name:`${a.prefix}_benefitRate`,rules:[{validator:M}],label:u("benefitRate","title")},{extra:v(()=>[ke]),_:1},8,["modelValue","required","name","rules","label"])):r("",!0)])):r("",!0)}}});const we={class:"page-info-wrapper"},Ae={key:0,class:"beneficiary-part"},ge={class:"part-title"},De={class:"title"},Ue=le("\u5220\u9664"),Pe=ue({props:{factorObject:null,formInfo:{default:()=>({})},isView:{type:Boolean,default:!1},sendSmsCode:{type:Function,default:(a,P)=>{}},titleCollection:{default:()=>({})}},setup(a,{expose:P}){const b=a;fe(),ne();const F=y({}),I=y({tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),R=y(null),w=y([]),D=y([]);y([]),y([]);const e=y([]);se({beneficiaryId:0,nextPage:"",currentAddress:null,isLoading:!0});const U=z(()=>{var s;const V={};return(((s=F.value)==null?void 0:s.INSURER)||[]).forEach(n=>{V[n.code]=n}),V}),W=V=>{var s;return((s=U.value)==null?void 0:s[V].isDisplay)===K.YES},B=V=>{var s;return((s=U.value)==null?void 0:s[V].isMustInput)===K.YES},O=(V,s)=>{var n,m;return((m=(n=U.value)==null?void 0:n[V])==null?void 0:m[s])||""},Q=V=>{I.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=I.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.filter(s=>s.beneficiaryId!==V.beneficiaryId||V.id!==s.id)},k=()=>{Object.assign(I.value.tenantOrderInsuredList[0],I.value.tenantOrderHolder,{id:I.value.tenantOrderInsuredList[0].id,extInfo:{...I.value.tenantOrderHolder.extInfo,insureProvinceCode:I.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,insureCityCode:I.value.tenantOrderInsuredList[0].extInfo.insureCityCode,insureAreaCode:I.value.tenantOrderInsuredList[0].extInfo.insureAreaCode}})};return P({validateForm:()=>new Promise((V,s)=>{var n;(n=R.value)==null||n.validate().then(()=>{V(I.value)},()=>{s()})})}),g(()=>b.factorObject,()=>{const V={BENEFICIARY:b.factorObject[3],INSURER:b.factorObject[2],HOLDER:b.factorObject[1]};F.value=V},{immediate:!0,deep:!0}),g([()=>I.value.tenantOrderInsuredList[0].relationToHolder,()=>I.value.tenantOrderHolder],()=>{`${I.value.tenantOrderInsuredList[0].relationToHolder}`===Ce.SELF&&k()},{deep:!0,immediate:!0}),g(()=>b.formInfo,()=>{b.formInfo&&(I.value=b.formInfo)},{deep:!0,immediate:!0}),(V,s)=>{const n=x("ProCard"),m=x("ProRadioButton"),u=x("ProField"),X=x("ProSvg"),_=x("ProForm");return t(),h("div",we,[c(_,{ref_key:"formRef",ref:R,"show-error":"","show-error-message":!1,"input-align":"left"},{default:v(()=>{var $,M,T,Y,j,i;return[($=F.value.HOLDER)!=null&&$.length?(t(),d(n,{key:0,"show-divider":!1,title:(M=a.titleCollection)==null?void 0:M.HOLDER},{default:v(()=>[c(ee,{images:w.value,"onUpdate:images":s[0]||(s[0]=l=>w.value=l),"form-info":I.value.tenantOrderHolder,"factor-list":F.value.HOLDER,prefix:"holder","is-view":a.isView,"send-sms-code":a.sendSmsCode},null,8,["images","form-info","factor-list","is-view","send-sms-code"])]),_:1},8,["title"])):r("",!0),(T=F.value.INSURER)!=null&&T.length?(t(),d(n,{key:1,"show-divider":!1,title:(Y=a.titleCollection)==null?void 0:Y.INSURER},{default:v(()=>[W("relationToHolder")?(t(),d(u,{key:0,modelValue:I.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":s[2]||(s[2]=l=>I.value.tenantOrderInsuredList[0].relationToHolder=l),class:"relation-holder",name:"insure_relationToHolder",required:B("relationToHolder"),label:O("relationToHolder","title")},{input:v(()=>[c(m,{modelValue:I.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":s[1]||(s[1]=l=>I.value.tenantOrderInsuredList[0].relationToHolder=l),"is-view":a.isView,prop:{label:"value",value:"code"},options:O("relationToHolder","attributeValueList")||[]},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","required","label"])):r("",!0),+I.value.tenantOrderInsuredList[0].relationToHolder!=1?(t(),d(ee,{key:1,images:D.value,"onUpdate:images":s[3]||(s[3]=l=>D.value=l),"form-info":I.value.tenantOrderInsuredList[0],"factor-list":F.value.INSURER||[],prefix:"insure","send-sms-code":a.sendSmsCode,"is-view":a.isView},null,8,["images","form-info","factor-list","send-sms-code","is-view"])):r("",!0)]),_:1},8,["title"])):r("",!0),(j=F.value.BENEFICIARY)!=null&&j.length?(t(),d(n,{key:2,"show-divider":!1,title:(i=a.titleCollection)==null?void 0:i.BENEFICIARY},{default:v(()=>[I.value.tenantOrderInsuredList[0].insuredBeneficiaryType==2?(t(),h("div",Ae,[(t(!0),h(Ie,null,ve(I.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,(l,p)=>(t(),h("div",{key:l.beneficiaryId||l.id,class:"beneficiary-item"},[L("div",ge,[L("span",De,te(`\u53D7\u76CA\u4EBA${p+1}`),1),c(X,{name:"delete",onClick:f=>Q(l)},{default:v(()=>[Ue]),_:2},1032,["onClick"])]),c(ee,{images:e.value,"onUpdate:images":s[4]||(s[4]=f=>e.value=f),"form-info":l,"factor-list":F.value.BENEFICIARY||[],prefix:`beneficiary-${p}`,"is-view":a.isView,"send-sms-code":a.sendSmsCode,"beneficiary-list":I.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","is-view","send-sms-code","beneficiary-list"])]))),128))])):r("",!0)]),_:1},8,["title"])):r("",!0)]}),_:1},512)])}}});export{Pe as _};
