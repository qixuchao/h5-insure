import{ap as oe,h as ae,R as le,P as re,G as K,d as w,z as _,$ as L,r as D,B as f,k as t,p as ne,m as i,n as E,s as c,v as d,A as W,E as te}from"./vendor-d6b13173.js";import{C as I,V as k,G as de,H as ie,I as fe,Y as ee,J as me,K as z}from"./index-32e043dc.js";import{u as q}from"./useDicData-2b4887a5.js";import{c as se,M as Ie,T as ve,d as pe,e as Ce}from"./infoCollection-b0426750.js";var ue={exports:{}};(function(l,X){(function(F,P){l.exports=P()})(oe,function(){return function(F,P,b){F=F||{};var B=P.prototype,M={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Y(s,v,e,V){return B.fromToBase(s,v,e,V)}b.en.relativeTime=M,B.fromToBase=function(s,v,e,V,C){for(var R,n,r,g=e.$locale().relativeTime||M,$=F.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],H=$.length,T=0;T<H;T+=1){var p=$[T];p.d&&(R=V?b(s).diff(e,p.d,!0):e.diff(s,p.d,!0));var A=(F.rounding||Math.round)(Math.abs(R));if(r=R>0,A<=p.r||!p.r){A<=1&&T>0&&(p=$[T-1]);var N=g[p.l];C&&(A=C(""+A)),n=typeof N=="string"?N.replace("%d",A):N(A,v,p.l,r);break}}if(v)return n;var S=r?g.future:g.past;return typeof S=="function"?S(n):S.replace("%s",n)},B.to=function(s,v){return Y(s,v,this,!0)},B.from=function(s,v){return Y(s,v,this)};var U=function(s){return s.$u?b.utc():b()};B.toNow=function(s){return this.to(U(this),s)},B.fromNow=function(s){return this.from(U(this),s)}}})})(ue);var Ee=ue.exports;const Fe={key:0,class:"com-personal-wrapper"},xe={class:"date-extra"},ye=te("\u957F\u671F"),Be=W("span",{class:"input-extra"},"\u4E07",-1),Ve=W("span",{class:"input-extra"},"\u4E07",-1),Ae=W("span",{class:"input-extra"},"%",-1),be=ae({props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]}},emits:["update:images"],setup(l,{emit:X}){const F=l;le();const{venderCode:P=""}=re().query,b=q("CERT_TYPE"),B=q(`${P.toLocaleUpperCase()}_OCCUPATION`);q("MARRIAGE_STATUS");const M=q("DEGREE"),Y=q("NATIONALITY"),U=q("NATIONAL_REGION_CODE"),s=K([]),v=K(!1),e=K({formInfo:F.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""});w.extend(Ee);const V=K(F.formInfo.certEndType===2),C=_(()=>{const a={};return F.factorList.forEach(u=>{a[u.code]=u}),a}),R=a=>{e.value.formInfo.certNo=a.personIdCard,e.value.formInfo.name=a.personName,e.value.formInfo.certEndDate=w(a.validDateEnd,"YYYYMMDD").toDate()},n=a=>C.value&&C.value[a]&&C.value[a].isDisplay===ee.YES,r=a=>C.value&&C.value[a]&&C.value[a].isMustInput===ee.YES,g=_(()=>[I.CERT,I.HOUSE_HOLD].includes(`${e.value.formInfo.certType}`)?[k.ID_CARD]:`${e.value.formInfo.certType}`===I.BIRTH?[k.BIRTH]:`${e.value.formInfo.certType}`===I.PASSPORT?[k.PASSPORT]:[]),$=(a,u)=>r("attachment")?e.value.formInfo.certEndType===2||e.value.formInfo.certEndDate?"":"\u8BF7\u9009\u62E9\u6709\u6548\u671F\u81F3":"",H=(a,u)=>/^\d{1,10}(\.\d{1,2})?$/.test(a)?"":"\u5E74\u6536\u5165\u6700\u591A\u5F55\u516510\u4F4D\u6570\u5B57",T=(a,u)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(a)?"":"\u6536\u76CA\u6BD4\u4F8B\u53EA\u80FD\u586B\u51991-100\u7684\u6B63\u6574\u6570",p=(a,u,x)=>u.length>a?`\u6700\u5927\u4E0D\u80FD\u8D85\u8FC7${a}\u4E2A\u5B57\u7B26`:"",A=(a,u)=>{var x,m,y,G,Z,O,h;if(((m=(x=e.value.formInfo)==null?void 0:x.extInfo)==null?void 0:m.nationalityCode)==="CHN"){if(![I.CERT,I.HOUSE_HOLD,I.BIRTH,I.MILITARY_CARD].includes(`${a}`))return"\u56FD\u7C4D\u4E3A\u4E2D\u56FD\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u53EA\u5141\u8BB8\u9009\u62E9\u8EAB\u4EFD\u8BC1\u3001\u6237\u53E3\u672C\u3001\u51FA\u751F\u8BC1\u3001\u519B\u5B98\u8BC1"}else if(["HKG","MAC"].includes((G=(y=e.value.formInfo)==null?void 0:y.extInfo)==null?void 0:G.nationalityCode)){if(![I.HK_MACAO_RESIDENCE_PERMIT,I.HONGKONG_MACAO].includes(`${a}`))return"\u56FD\u7C4D\u4E3A\u4E2D\u56FD\u9999\u6E2F\u3001\u4E2D\u56FD\u6FB3\u95E8\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u53EA\u5141\u8BB8\u9009\u62E9\u6E2F\u6FB3\u901A\u884C\u8BC1\u3001\u6E2F\u6FB3\u5C45\u6C11\u5C45\u4F4F\u8BC1"}else if(((O=(Z=e.value.formInfo)==null?void 0:Z.extInfo)==null?void 0:O.nationalityCode)==="TWN"){if(![I.TAIWAN_RESIDENCE_PERMIT,I.TAIWAN_TRAVEL].includes(`${a}`))return"\u56FD\u7C4D\u4E3A\u4E2D\u56FD\u53F0\u6E7E\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u53EA\u5141\u8BB8\u9009\u62E9\u53F0\u6E7E\u901A\u884C\u8BC1\u3001\u53F0\u6E7E\u5C45\u6C11\u5C45\u4F4F\u8BC1"}else if(![I.PASSPORT,I.FOREIGN_PERMANENT].includes(`${a}`))return"\u56FD\u7C4D\u4E3A\u975E\u4E2D\u56FD\u3001\u6E2F\u6FB3\u53F0\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u53EA\u5141\u8BB8\u9009\u62E9\u62A4\u7167\u3001\u5916\u56FD\u4EBA\u6C38\u4E45\u5C45\u7559\u8EAB\u4EFD\u8BC1";return w().year()-w((h=e.value.formInfo)==null?void 0:h.birthday).year()>2&&a===I.BIRTH?"\u5E74\u9F84\u5927\u4E8E\u7B49\u4E8E2\u5468\u5C81\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u4E0D\u80FD\u9009\u62E9\u51FA\u751F\u8BC1":""},N=a=>Array.isArray(a)&&a.length===2&&a[0]&&a[1]?"":"\u8BF7\u4E0A\u4F20\u8EAB\u4EFD\u8BC1\u6B63\u53CD\u9762\u7167\u7247",S=a=>F.beneficiaryList.filter(u=>u.relationToInsured===Ce.SPOUSE).length>=2?"\u5DF2\u5B58\u5728\u914D\u5076\u5173\u7CFB\u7684\u53D7\u76CA\u4EBA":"";return L(()=>V.value,a=>{a?(e.value.formInfo.certEndType=2,e.value.formInfo.certEndDate=""):e.value.formInfo.certEndType=1},{immediate:!0}),L(()=>e.value.formInfo.certType,a=>{[I.CERT,I.HOUSE_HOLD].includes(a)?v.value=!0:v.value=!1},{deep:!0,immediate:!0}),L(()=>e.value.formInfo.certNo,a=>{de(a)&&(e.value.formInfo.gender=+ie(a),e.value.formInfo.birthday=w(new Date(fe(a))).format("YYYY-MM-DD"))},{deep:!0,immediate:!0}),L(()=>F.images,a=>{s.value=a},{immediate:!0}),L(s,a=>{X("update:images",a)},{deep:!0}),(a,u)=>{var J,Q;const x=D("ProRadioButton"),m=D("ProField"),y=D("ProPicker"),G=D("ProIDCardUpload"),Z=D("ProImageUpload"),O=D("ProDatePicker"),h=D("van-checkbox"),j=D("ProCascader");return Object.keys(f(C)).length?(t(),ne("div",Fe,[n("insureRelation")?(t(),i(m,{key:0,modelValue:e.value.formInfo.relationToInsured,"onUpdate:modelValue":u[1]||(u[1]=o=>e.value.formInfo.relationToInsured=o),name:`${l.prefix}_relationToInsured`,required:r("insureRelation"),label:"\u662F\u88AB\u4FDD\u4EBA\u7684",rules:[{validator:S}]},{input:E(()=>[c(x,{modelValue:e.value.formInfo.relationToInsured,"onUpdate:modelValue":u[0]||(u[0]=o=>e.value.formInfo.relationToInsured=o),"is-view":l.isView,options:f(se).slice(1,4)},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","name","required","rules"])):d("",!0),n("certType")?(t(),i(y,{key:1,modelValue:e.value.formInfo.certType,"onUpdate:modelValue":u[2]||(u[2]=o=>e.value.formInfo.certType=o),label:"\u8BC1\u4EF6\u7C7B\u578B",name:`${l.prefix}_certType`,"data-source":f(b),mapping:{label:"name",value:"code",children:"child"},required:r("certType"),rules:[{validator:A}]},null,8,["modelValue","name","data-source","required","rules"])):d("",!0),n("attachment")&&e.value.formInfo.certType+""=="1"?(t(),i(m,{key:2,label:"\u8EAB\u4EFD\u8BC1\u4E0A\u4F20",block:"",required:r("attachment"),rules:[{validator:N}],name:`${l.prefix}_idCard`},{input:E(()=>[c(G,{modelValue:s.value,"onUpdate:modelValue":u[3]||(u[3]=o=>s.value=o),"is-view":l.isView,onOnOCR:R},null,8,["modelValue","is-view"])]),_:1},8,["required","rules","name"])):d("",!0),n("attachment")&&e.value.formInfo.certType&&e.value.formInfo.certType+""!="1"?(t(),i(m,{key:3,label:"\u8BC1\u4EF6\u4E0A\u4F20",block:"",required:r("attachment")},{input:E(()=>[c(Z,{modelValue:s.value,"onUpdate:modelValue":u[4]||(u[4]=o=>s.value=o),"max-count":1},null,8,["modelValue"])]),_:1},8,["required"])):d("",!0),n("certNo")?(t(),i(m,{key:4,modelValue:e.value.formInfo.certNo,"onUpdate:modelValue":u[5]||(u[5]=o=>e.value.formInfo.certNo=o),label:"\u8BC1\u4EF6\u53F7\u7801",name:`${l.prefix}_certNo`,required:r("certNo"),placeholder:"\u8BF7\u8F93\u5165","validate-type":f(g)},null,8,["modelValue","name","required","validate-type"])):d("",!0),n("name")?(t(),i(m,{key:5,modelValue:e.value.formInfo.name,"onUpdate:modelValue":u[6]||(u[6]=o=>e.value.formInfo.name=o),label:"\u59D3\u540D",name:`${l.prefix}_name`,required:r("name")},null,8,["modelValue","name","required"])):d("",!0),n("sex")?(t(),i(m,{key:6,modelValue:e.value.formInfo.gender,"onUpdate:modelValue":u[8]||(u[8]=o=>e.value.formInfo.gender=o),required:r("sex"),label:"\u6027\u522B",name:`${l.prefix}_gender`,placeholder:"\u8BF7\u9009\u62E9","is-view":v.value},{input:E(()=>[c(x,{modelValue:e.value.formInfo.gender,"onUpdate:modelValue":u[7]||(u[7]=o=>e.value.formInfo.gender=o),disabled:v.value,"is-view":l.isView,options:f(me)},null,8,["modelValue","disabled","is-view","options"])]),_:1},8,["modelValue","required","name","is-view"])):d("",!0),n("birthday")?(t(),i(O,{key:7,modelValue:e.value.formInfo.birthday,"onUpdate:modelValue":u[9]||(u[9]=o=>e.value.formInfo.birthday=o),label:"\u51FA\u751F\u65E5\u671F",name:`${l.prefix}_birthday`,min:e.value.birth.min,max:e.value.birth.max,formatter:o=>f(w)(o).format("YYYY-MM-DD"),type:"date",required:r("birthday")},null,8,["modelValue","name","min","max","formatter","required"])):d("",!0),n("certEndDate")?(t(),i(O,{key:8,modelValue:e.value.formInfo.certEndDate,"onUpdate:modelValue":u[11]||(u[11]=o=>e.value.formInfo.certEndDate=o),label:"\u6709\u6548\u671F\u81F3",name:`${l.prefix}_certEndDate`,type:"date",min:e.value.certEndDate.min,max:e.value.certEndDate.max,"is-view":V.value||l.isView,read:"",rules:[{validator:$}]},{extra:E(()=>[W("div",xe,[c(h,{modelValue:V.value,"onUpdate:modelValue":u[10]||(u[10]=o=>V.value=o),"icon-size":16,disabled:l.isView},{default:E(()=>[ye]),_:1},8,["modelValue","disabled"])])]),_:1},8,["modelValue","name","min","max","is-view","rules"])):d("",!0),n("houseHold")?(t(),i(j,{key:9,modelValue:e.value.formInfo.extInfo.provinceCode,"onUpdate:modelValue":u[12]||(u[12]=o=>e.value.formInfo.extInfo.provinceCode=o),field1:e.value.formInfo.extInfo.provinceCode,"onUpdate:field1":u[13]||(u[13]=o=>e.value.formInfo.extInfo.provinceCode=o),field2:e.value.formInfo.extInfo.cityCode,"onUpdate:field2":u[14]||(u[14]=o=>e.value.formInfo.extInfo.cityCode=o),field3:e.value.formInfo.extInfo.areaCode,"onUpdate:field3":u[15]||(u[15]=o=>e.value.formInfo.extInfo.areaCode=o),label:"\u6237\u7C4D\u6240\u5728\u5730",name:`${l.prefix}_provinceCode`,placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:r("houseHold"),"data-source":f(U),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):d("",!0),n("hasSocialInsurance")?(t(),i(m,{key:10,modelValue:e.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":u[17]||(u[17]=o=>e.value.formInfo.extInfo.hasSocialInsurance=o),label:"\u793E\u4FDD",name:`${l.prefix}_hasSocialInsurance`,placeholder:"\u8BF7\u9009\u62E9",required:r("hasSocialInsurance")},{input:E(()=>[c(x,{modelValue:e.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":u[16]||(u[16]=o=>e.value.formInfo.extInfo.hasSocialInsurance=o),"is-view":l.isView,options:f(z)},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","name","required"])):d("",!0),n("occupation")?(t(),i(j,{key:11,modelValue:e.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:modelValue":u[18]||(u[18]=o=>e.value.formInfo.extInfo.occupationCodeList[0]=o),field0:e.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:field0":u[19]||(u[19]=o=>e.value.formInfo.extInfo.occupationCodeList[0]=o),field1:e.value.formInfo.extInfo.occupationCodeList[1],"onUpdate:field1":u[20]||(u[20]=o=>e.value.formInfo.extInfo.occupationCodeList[1]=o),field2:e.value.formInfo.extInfo.occupationCodeList[2],"onUpdate:field2":u[21]||(u[21]=o=>e.value.formInfo.extInfo.occupationCodeList[2]=o),label:"\u804C\u4E1A",name:`${l.prefix}_occupationCodeList`,placeholder:"\u8BF7\u9009\u62E9",required:r("occupation"),"data-source":f(B),mapping:{label:"value",value:"code",children:"children"},"is-link":""},null,8,["modelValue","field0","field1","field2","name","required","data-source"])):d("",!0),n("annualIncome")?(t(),i(m,{key:12,modelValue:e.value.formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":u[22]||(u[22]=o=>e.value.formInfo.extInfo.personalAnnualIncome=o),label:"\u4E2A\u4EBA\u5E74\u6536\u5165",name:`${l.prefix}_personalAnnualIncome`,required:r("annualIncome"),placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:H}]},{extra:E(()=>[Be]),_:1},8,["modelValue","name","required","rules"])):d("",!0),n("familyAnnualIncome")?(t(),i(m,{key:13,modelValue:e.value.formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":u[23]||(u[23]=o=>e.value.formInfo.extInfo.familyAnnualIncome=o),label:"\u5BB6\u5EAD\u5E74\u6536\u5165",name:`${l.prefix}_familyAnnualIncome`,placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:H}],required:r("familyAnnualIncome")},{extra:E(()=>[Ve]),_:1},8,["modelValue","name","rules","required"])):d("",!0),n("nationality")?(t(),i(y,{key:14,modelValue:e.value.formInfo.extInfo.nationalityCode,"onUpdate:modelValue":u[24]||(u[24]=o=>e.value.formInfo.extInfo.nationalityCode=o),label:"\u56FD\u7C4D",name:`${l.prefix}_nationalityCode`,"data-source":f(Y),mapping:{label:"name",value:"code",children:"child"},placeholder:"\u8BF7\u9009\u62E9",required:r("nationality"),"is-link":""},null,8,["modelValue","name","data-source","required"])):d("",!0),n("USAGreenCard")?(t(),i(m,{key:15,modelValue:e.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":u[26]||(u[26]=o=>e.value.formInfo.extInfo.hasUsCard=o),label:"\u7F8E\u56FD\u7EFF\u5361",name:`${l.prefix}_hasUsCard`,placeholder:"\u8BF7\u9009\u62E9",required:r("USAGreenCard")},{input:E(()=>[c(x,{modelValue:e.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":u[25]||(u[25]=o=>e.value.formInfo.extInfo.hasUsCard=o),"is-view":l.isView,options:f(z)},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","name","required"])):d("",!0),n("marriage")?(t(),i(y,{key:16,modelValue:e.value.formInfo.extInfo.marriageStatus,"onUpdate:modelValue":u[27]||(u[27]=o=>e.value.formInfo.extInfo.marriageStatus=o),label:"\u5A5A\u59FB\u72B6\u51B5",name:`${l.prefix}_marriageStatus`,placeholder:"\u8BF7\u9009\u62E9","data-source":f(Ie),"is-link":"",required:r("marriage")},null,8,["modelValue","name","data-source","required"])):d("",!0),n("educationDegree")?(t(),i(y,{key:17,modelValue:e.value.formInfo.extInfo.educationDegree,"onUpdate:modelValue":u[28]||(u[28]=o=>e.value.formInfo.extInfo.educationDegree=o),label:"\u5B66\u5386",name:`${l.prefix}_educationDegree`,"data-source":f(M),mapping:{label:"name",value:"code",children:"child"},placeholder:"\u8BF7\u9009\u62E9",required:r("educationDegree"),"is-link":""},null,8,["modelValue","name","data-source","required"])):d("",!0),n("mobile")?(t(),i(m,{key:18,modelValue:e.value.formInfo.mobile,"onUpdate:modelValue":u[29]||(u[29]=o=>e.value.formInfo.mobile=o),label:"\u624B\u673A\u53F7\u7801",name:`${l.prefix}_mobile`,placeholder:"\u8BF7\u8F93\u5165",required:r("mobile"),"validate-type":[f(k).PHONE]},null,8,["modelValue","name","required","validate-type"])):d("",!0),n("email")?(t(),i(m,{key:19,modelValue:e.value.formInfo.email,"onUpdate:modelValue":u[30]||(u[30]=o=>e.value.formInfo.email=o),label:"\u7535\u5B50\u90AE\u7BB1",name:`${l.prefix}_email`,placeholder:"\u8BF7\u8F93\u5165",required:r("email"),"validate-type":[f(k).EMAIL]},null,8,["modelValue","name","required","validate-type"])):d("",!0),n("familyAddress")?(t(),i(j,{key:20,modelValue:e.value.formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":u[31]||(u[31]=o=>e.value.formInfo.extInfo.familyAreaCode=o),field1:e.value.formInfo.extInfo.familyProvinceCode,"onUpdate:field1":u[32]||(u[32]=o=>e.value.formInfo.extInfo.familyProvinceCode=o),field2:e.value.formInfo.extInfo.familyCityCode,"onUpdate:field2":u[33]||(u[33]=o=>e.value.formInfo.extInfo.familyCityCode=o),field3:e.value.formInfo.extInfo.familyAreaCode,"onUpdate:field3":u[34]||(u[34]=o=>e.value.formInfo.extInfo.familyAreaCode=o),label:"\u5BB6\u5EAD\u5730\u5740",name:`${l.prefix}_familyProvinceCode`,placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:r("familyAddress"),"data-source":f(U),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):d("",!0),n("familyAddressDetail")?(t(),i(m,{key:21,modelValue:e.value.formInfo.extInfo.familyAddress,"onUpdate:modelValue":u[35]||(u[35]=o=>e.value.formInfo.extInfo.familyAddress=o),label:"\u5730\u5740\u8BE6\u60C5",name:`${l.prefix}_familyAddress`,placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...o)=>p(100,...o)}],required:r("familyAddressDetail")},null,8,["modelValue","name","rules","required"])):d("",!0),n("familyPostCode")?(t(),i(m,{key:22,modelValue:e.value.formInfo.extInfo.familyZipCode,"onUpdate:modelValue":u[36]||(u[36]=o=>e.value.formInfo.extInfo.familyZipCode=o),label:"\u5BB6\u5EAD\u90AE\u7F16",name:`${l.prefix}_familyZipCode`,placeholder:"\u8BF7\u8F93\u5165",required:r("familyPostCode"),"validate-type":[f(k).ZIP_CODE]},null,8,["modelValue","name","required","validate-type"])):d("",!0),n("workAddress")?(t(),i(j,{key:23,modelValue:e.value.formInfo.extInfo.workAreaCode,"onUpdate:modelValue":u[37]||(u[37]=o=>e.value.formInfo.extInfo.workAreaCode=o),field1:e.value.formInfo.extInfo.workProvinceCode,"onUpdate:field1":u[38]||(u[38]=o=>e.value.formInfo.extInfo.workProvinceCode=o),field2:e.value.formInfo.extInfo.workCityCode,"onUpdate:field2":u[39]||(u[39]=o=>e.value.formInfo.extInfo.workCityCode=o),field3:e.value.formInfo.extInfo.workAreaCode,"onUpdate:field3":u[40]||(u[40]=o=>e.value.formInfo.extInfo.workAreaCode=o),label:"\u5DE5\u4F5C\u5730\u5740",name:`${l.prefix}_workProvinceCode`,placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:r("workAddress"),"data-source":f(U),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):d("",!0),n("workAddressDetail")?(t(),i(m,{key:24,modelValue:e.value.formInfo.extInfo.workAddress,"onUpdate:modelValue":u[41]||(u[41]=o=>e.value.formInfo.extInfo.workAddress=o),label:"\u5730\u5740\u8BE6\u60C5",name:`${l.prefix}_workAddress`,placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...o)=>p(100,...o)}],required:r("workAddressDetail")},null,8,["modelValue","name","rules","required"])):d("",!0),n("workZipCode")?(t(),i(m,{key:25,modelValue:e.value.formInfo.extInfo.workZipCode,"onUpdate:modelValue":u[42]||(u[42]=o=>e.value.formInfo.extInfo.workZipCode=o),label:"\u5DE5\u4F5C\u90AE\u7F16",required:r("workZipCode"),name:`${l.prefix}_workPostCode`,placeholder:"\u8BF7\u8F93\u5165","validate-type":[f(k).ZIP_CODE]},null,8,["modelValue","required","name","validate-type"])):d("",!0),n("workPlace")?(t(),i(m,{key:26,modelValue:e.value.formInfo.extInfo.workStation,"onUpdate:modelValue":u[43]||(u[43]=o=>e.value.formInfo.extInfo.workStation=o),label:"\u5355\u4F4D\u540D\u79F0",name:`${l.prefix}_workPostCode`,placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...o)=>p(20,...o)}],required:r("workPlace")},null,8,["modelValue","name","rules","required"])):d("",!0),n("workContent")?(t(),i(m,{key:27,modelValue:e.value.formInfo.extInfo.workContent,"onUpdate:modelValue":u[44]||(u[44]=o=>e.value.formInfo.extInfo.workContent=o),label:"\u5DE5\u4F5C\u5185\u5BB9",name:`${l.prefix}_workContent`,required:r("workContent"),placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...o)=>p(100,...o)}]},null,8,["modelValue","name","required","rules"])):d("",!0),n("taxCert")?(t(),i(y,{key:28,modelValue:e.value.formInfo.extInfo.taxResident,"onUpdate:modelValue":u[45]||(u[45]=o=>e.value.formInfo.extInfo.taxResident=o),label:"\u7A0E\u6536\u5C45\u6C11\u8EAB\u4EFD",name:`${l.prefix}_taxResident`,"data-source":f(ve),required:r("taxCert"),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","name","data-source","required"])):d("",!0),n("partTime")?(t(),i(m,{key:29,modelValue:e.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":u[47]||(u[47]=o=>e.value.formInfo.extInfo.isPartTime=o),label:"\u662F\u5426\u517C\u804C",name:`${l.prefix}_isPartTime`,required:r("partTime"),placeholder:"\u8BF7\u8F93\u5165"},{input:E(()=>[c(x,{modelValue:e.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":u[46]||(u[46]=o=>e.value.formInfo.extInfo.isPartTime=o),"is-view":l.isView,options:f(z)},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","name","required"])):d("",!0),((J=f(C).beneficiaryType)==null?void 0:J.isDisplay)?(t(),i(y,{key:30,modelValue:e.value.formInfo.benefitOrder,"onUpdate:modelValue":u[48]||(u[48]=o=>e.value.formInfo.benefitOrder=o),label:"\u53D7\u76CA\u4EBA\u987A\u5E8F",name:`${l.prefix}_benefitOrder`,"data-source":f(pe),required:r("beneficiaryType")},null,8,["modelValue","name","data-source","required"])):d("",!0),((Q=f(C).benefitRate)==null?void 0:Q.isDisplay)?(t(),i(m,{key:31,modelValue:e.value.formInfo.benefitRate,"onUpdate:modelValue":u[49]||(u[49]=o=>e.value.formInfo.benefitRate=o),required:r("benefitRate"),name:`${l.prefix}_benefitRate`,rules:[{validator:T}],label:"\u53D7\u76CA\u6BD4\u4F8B"},{extra:E(()=>[Ae]),_:1},8,["modelValue","required","name","rules"])):d("",!0)])):d("",!0)}}});export{be as _};
