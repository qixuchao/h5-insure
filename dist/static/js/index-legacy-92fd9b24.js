!function(){var e=document.createElement("style");e.innerHTML=".input-extra{margin-left:.33333rem;margin-top:.18667rem}.date-extra{padding-left:var(--zaui-card-border, .4rem);margin-left:var(--zaui-card-border, .4rem);border-left:1px solid #EEEFF4;margin-top:.21333rem;display:flex}.page-info-wrapper .van-cell .van-field__value{align-items:flex-start}.page-info-wrapper .com-card .com-card-wrap .body{padding:0}.page-info-wrapper .beneficiary-part .part-title{display:flex;align-items:center;justify-content:space-between;padding:0 var(--zaui-card-border, .4rem);background-color:var(--zaui-global-bg, #f2f5fc);height:1.2rem}.page-info-wrapper .beneficiary-part .part-title .title{font-size:.4rem;font-weight:600;color:#393d46}.page-info-wrapper .left{flex:0 0 50%}.page-info-wrapper .left .trial-result{font-size:.45333rem;color:#393d46}.page-info-wrapper .left .trial-result .result-num{margin-left:.17333rem;color:var(--zaui-price, #ff5840);font-weight:700;margin-left:.21333rem}.page-info-wrapper .left .result-desc{font-size:.32rem;color:#666}.page-info-wrapper .operate-btn{width:50%}.page-info-wrapper .radio-item-wrapper{padding:0}.page-info-wrapper .radio-item-wrapper p{font-size:.4rem;color:#393d46;margin:.06667rem 0;word-break:break-all}.page-info-wrapper .radio-item-wrapper .name{font-weight:600;margin-right:.4rem}.page-info-wrapper .radio-item-wrapper .phone{font-weight:400}\n",document.head.appendChild(e),System.register(["./vendor-legacy-c308286a.js","./index-legacy-3a4a46f5.js","./infoCollection-legacy-4d78a1f8.js","./relativeTime-legacy-2afc3e6e.js","./useDicData-legacy-52a7a6a0.js"],(function(e){"use strict";var a,l,o,i,r,n,t,d,u,s,m,f,c,p,v,I,V,w,b,x,y,h,C,g,k,U,R,_,q,O,T,L,E;return{setters:[function(e){a=e.i,l=e.R,o=e.P,i=e.r,r=e.d,n=e.A,t=e.$,d=e.l,u=e.C,s=e.m,m=e.s,f=e.n,c=e.p,p=e.t,v=e.x,I=e.Z,V=e.B,w=e._,b=e.G,x=e.L,y=e.M,h=e.T,C=e.aa,g=e.N},function(e){k=e.C,U=e.V,R=e.I,_=e.J,q=e.K,O=e.Y},function(e){T=e.R},function(e){L=e.r},function(e){E=e.u}],execute:function(){const A={key:0,class:"com-personal-wrapper"},S={class:"date-extra"},D=b("长期"),$=V("span",{class:"input-extra"},"万",-1),N=V("span",{class:"input-extra"},"万",-1),P=V("span",{class:"input-extra"},"%",-1),H=a({props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]},sendSmsCode:{type:Function,default:(e,a)=>{}}},emits:["update:images"],setup(e,{emit:a}){const C=e;l();const{venderCode:g=""}=o().query,T=E(`${g.toLocaleUpperCase()}_OCCUPATION`),H=E("NATIONAL_REGION_CODE"),j=i([]),B=i(!1),M=i({formInfo:C.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""});r.extend(L);const Y=i(2===C.formInfo.certEndType),F=i(0),z=i("获取验证码"),Z=i(!1),G=n((()=>{const e={};return C.factorList.forEach((a=>{e[a.code]=a})),e}));n((()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(M.value.formInfo.mobile)));const J=async()=>{F.value>0||C.sendSmsCode(M.value.formInfo.mobile,(()=>{Z.value=!0,h({message:"短信发送成功，请查收"}),(()=>{if(F.value>0)return;F.value=60;const e=()=>{z.value=`${F.value}s`,F.value-=1};e();const a=setInterval((()=>{0===F.value?(z.value="获取验证码",F.value=0,clearInterval(a)):e()}),1e3)})()}))},K=e=>{M.value.formInfo.certNo=e.personIdCard,M.value.formInfo.name=e.personName,M.value.formInfo.certEndDate=r(e.validDateEnd,"YYYYMMDD").toDate()},W=e=>G.value&&G.value[e]&&G.value[e]?.isDisplay===O.YES,Q=e=>G.value&&G.value[e]&&G.value[e].isMustInput===O.YES,X=(e,a)=>G.value?.[e]?.[a]||"",ee=n((()=>[k.CERT,k.HOUSE_HOLD].includes(`${M.value.formInfo.certType}`)?[U.ID_CARD]:`${M.value.formInfo.certType}`===k.BIRTH?[U.BIRTH]:`${M.value.formInfo.certType}`===k.PASSPORT?[U.PASSPORT]:[U.ID_CARD])),ae=(e,a)=>Q("attachment")?2===M.value.formInfo.certEndType||M.value.formInfo.certEndDate?"":"请选择有效期至":"",le=(e,a)=>/^\d{1,10}(\.\d{1,2})?$/.test(e)?"":"年收入最多录入10位数字",oe=(e,a)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(e)?"":"收益比例只能填写1-100的正整数",ie=(e,a,l)=>a.length>e?`最大不能超过${e}个字符`:"",re=(e,a)=>{if(!W("nationality"))return"";if("CHN"===M.value.formInfo?.extInfo?.nationalityCode){if(![k.CERT,k.HOUSE_HOLD,k.BIRTH,k.MILITARY_CARD].includes(`${e}`))return"国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证"}else if(["HKG","MAC"].includes(M.value.formInfo?.extInfo?.nationalityCode)){if(![k.HK_MACAO_RESIDENCE_PERMIT,k.HONGKONG_MACAO].includes(`${e}`))return"国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证"}else if("TWN"===M.value.formInfo?.extInfo?.nationalityCode){if(![k.TAIWAN_RESIDENCE_PERMIT,k.TAIWAN_TRAVEL].includes(`${e}`))return"国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证"}else if(![k.PASSPORT,k.FOREIGN_PERMANENT].includes(`${e}`))return"国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证";return r().year()-r(M.value.formInfo?.birthday).year()>2&&e===k.BIRTH?"年龄大于等于2周岁时，证件类型不能选择出生证":""},ne=e=>Array.isArray(e)&&2===e.length&&e[0]&&e[1]?"":"请上传身份证正反面照片";return t((()=>Y.value),(e=>{e?(M.value.formInfo.certEndType=2,M.value.formInfo.certEndDate=""):M.value.formInfo.certEndType=1}),{immediate:!0}),t((()=>M.value.formInfo.certType),(e=>{[k.CERT,k.HOUSE_HOLD].includes(e)?B.value=!0:B.value=!1}),{deep:!0,immediate:!0}),t((()=>M.value.formInfo.certNo),(e=>{R(e)&&(M.value.formInfo.gender=+_(e),M.value.formInfo.birthday=r(new Date(q(e))).format("YYYY-MM-DD"))}),{deep:!0,immediate:!0}),t((()=>C.images),(e=>{j.value=e}),{immediate:!0}),t((()=>C.formInfo),(()=>{M.value.formInfo=C.formInfo}),{deep:!0,immediate:!0}),t(j,(e=>{a("update:images",e)}),{deep:!0}),(a,l)=>{const o=d("ProRadioButton"),i=d("ProField"),r=d("ProDatePicker"),n=d("ProPicker"),t=d("ProIDCardUpload"),h=d("ProImageUpload"),C=d("van-checkbox"),g=d("ProCascader"),k=d("van-button");return Object.keys(u(G)).length?(s(),m("div",A,[W("insuredBeneficiaryType")?(s(),f(i,{key:0,modelValue:M.value.formInfo.insuredBeneficiaryType,"onUpdate:modelValue":l[1]||(l[1]=e=>M.value.formInfo.insuredBeneficiaryType=e),label:X("insuredBeneficiaryType","title"),name:"insuredBeneficiaryType",placeholder:"请选择"},{input:c((()=>[p(o,{modelValue:M.value.formInfo.insuredBeneficiaryType,"onUpdate:modelValue":l[0]||(l[0]=e=>M.value.formInfo.insuredBeneficiaryType=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:X("insuredBeneficiaryType","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):v("",!0),W("insuredRelation")?(s(),f(i,{key:1,modelValue:M.value.formInfo.insuredRelation,"onUpdate:modelValue":l[3]||(l[3]=e=>M.value.formInfo.insuredRelation=e),label:X("insuredRelation","title"),name:"insuredRelation",placeholder:"请选择"},{input:c((()=>[p(o,{modelValue:M.value.formInfo.insuredRelation,"onUpdate:modelValue":l[2]||(l[2]=e=>M.value.formInfo.insuredRelation=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:X("insuredRelation","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):v("",!0),W("name")?(s(),f(i,{key:2,modelValue:M.value.formInfo.name,"onUpdate:modelValue":l[4]||(l[4]=e=>M.value.formInfo.name=e),label:X("name","title"),name:`${e.prefix}_name`,"is-view":e.isView,required:Q("name")},{"right-icon":c((()=>[I(a.$slots,"name")])),_:3},8,["modelValue","label","name","is-view","required"])):v("",!0),W("sex")?(s(),f(i,{key:3,modelValue:M.value.formInfo.gender,"onUpdate:modelValue":l[6]||(l[6]=e=>M.value.formInfo.gender=e),required:Q("sex"),label:X("sex","title"),name:`${e.prefix}_gender`,placeholder:"请选择","is-view":B.value},{input:c((()=>[p(o,{modelValue:M.value.formInfo.gender,"onUpdate:modelValue":l[5]||(l[5]=e=>M.value.formInfo.gender=e),disabled:B.value,"is-view":e.isView,prop:{label:"value",value:"code"},options:X("sex","attributeValueList")||[]},null,8,["modelValue","disabled","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):v("",!0),W("birthDate")?(s(),f(r,{key:4,modelValue:M.value.formInfo.birthday,"onUpdate:modelValue":l[7]||(l[7]=e=>M.value.formInfo.birthday=e),label:X("birthDate","title"),name:`${e.prefix}_birthday`,min:M.value.birth.min,max:M.value.birth.max,type:"date","is-view":e.isView,required:Q("birthDate")},null,8,["modelValue","label","name","min","max","is-view","required"])):v("",!0),W("certType")?(s(),f(n,{key:5,modelValue:M.value.formInfo.certType,"onUpdate:modelValue":l[8]||(l[8]=e=>M.value.formInfo.certType=e),label:X("certType","title"),name:`${e.prefix}_certType`,"data-source":X("certType","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:Q("certType"),rules:[{validator:re}],"is-view":e.isView},null,8,["modelValue","label","name","data-source","required","rules","is-view"])):v("",!0),W("certImage")&&M.value.formInfo.certType+""=="1"?(s(),f(i,{key:6,label:"身份证上传",block:"",required:Q("certImage"),rules:[{validator:ne}],name:`${e.prefix}_idCard`},{input:c((()=>[p(t,{modelValue:j.value,"onUpdate:modelValue":l[9]||(l[9]=e=>j.value=e),"is-view":e.isView,onOnOCR:K},null,8,["modelValue","is-view"])])),_:1},8,["required","rules","name"])):v("",!0),W("certImage")&&M.value.formInfo.certType&&M.value.formInfo.certType+""!="1"?(s(),f(i,{key:7,label:X("certImage","title"),block:"",required:Q("certImage")},{input:c((()=>[p(h,{modelValue:j.value,"onUpdate:modelValue":l[10]||(l[10]=e=>j.value=e),"is-view":e.isView,"max-count":1},null,8,["modelValue","is-view"])])),_:1},8,["label","required"])):v("",!0),W("certNo")?(s(),f(i,{key:8,modelValue:M.value.formInfo.certNo,"onUpdate:modelValue":l[11]||(l[11]=e=>M.value.formInfo.certNo=e),label:X("certNo","title"),name:`${e.prefix}_certNo`,required:Q("certNo"),placeholder:"请输入",maxlength:18,"is-view":e.isView,"validate-type":u(ee)},null,8,["modelValue","label","name","required","is-view","validate-type"])):v("",!0),W("certExpiry")?(s(),f(r,{key:9,modelValue:M.value.formInfo.certEndDate,"onUpdate:modelValue":l[13]||(l[13]=e=>M.value.formInfo.certEndDate=e),label:X("certExpiry","title"),name:`${e.prefix}_certEndDate`,type:"date",min:M.value.certEndDate.min,max:M.value.certEndDate.max,"is-view":Y.value||e.isView,read:"",rules:[{validator:ae}]},{extra:c((()=>[V("div",S,[p(C,{modelValue:Y.value,"onUpdate:modelValue":l[12]||(l[12]=e=>Y.value=e),"icon-size":16,disabled:e.isView},{default:c((()=>[D])),_:1},8,["modelValue","disabled"])])])),_:1},8,["modelValue","label","name","min","max","is-view","rules"])):v("",!0),W("age")?(s(),f(i,{key:10,modelValue:M.value.formInfo.name,"onUpdate:modelValue":l[14]||(l[14]=e=>M.value.formInfo.name=e),label:X("age","title"),name:`${e.prefix}_age`,"is-view":e.isView,required:Q("age")},null,8,["modelValue","label","name","is-view","required"])):v("",!0),W("residence")?(s(),f(g,{key:11,modelValue:M.value.formInfo.extInfo.provinceCode,"onUpdate:modelValue":l[15]||(l[15]=e=>M.value.formInfo.extInfo.provinceCode=e),field1:M.value.formInfo.extInfo.provinceCode,"onUpdate:field1":l[16]||(l[16]=e=>M.value.formInfo.extInfo.provinceCode=e),field2:M.value.formInfo.extInfo.cityCode,"onUpdate:field2":l[17]||(l[17]=e=>M.value.formInfo.extInfo.cityCode=e),field3:M.value.formInfo.extInfo.areaCode,"onUpdate:field3":l[18]||(l[18]=e=>M.value.formInfo.extInfo.areaCode=e),label:X("residence","title"),name:`${e.prefix}_provinceCode`,placeholder:"请选择","is-link":"","is-view":e.isView,required:Q("residence"),"data-source":u(H),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):v("",!0),W("social")?(s(),f(i,{key:12,modelValue:M.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[20]||(l[20]=e=>M.value.formInfo.extInfo.hasSocialInsurance=e),label:X("social","title"),name:`${e.prefix}_hasSocialInsurance`,placeholder:"请选择",required:Q("social")},{input:c((()=>[p(o,{modelValue:M.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[19]||(l[19]=e=>M.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:X("social","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):v("",!0),W("height")?(s(),f(i,{key:13,modelValue:M.value.formInfo.name,"onUpdate:modelValue":l[21]||(l[21]=e=>M.value.formInfo.name=e),label:X("height","title"),"is-view":e.isView,name:`${e.prefix}_height`,required:Q("height")},null,8,["modelValue","label","is-view","name","required"])):v("",!0),W("weight")?(s(),f(i,{key:14,modelValue:M.value.formInfo.name,"onUpdate:modelValue":l[22]||(l[22]=e=>M.value.formInfo.name=e),label:X("weight","title"),name:`${e.prefix}_weight`,"is-view":e.isView,required:Q("weight")},null,8,["modelValue","label","name","is-view","required"])):v("",!0),W("BMI")?(s(),f(i,{key:15,modelValue:M.value.formInfo.name,"onUpdate:modelValue":l[23]||(l[23]=e=>M.value.formInfo.name=e),label:X("BMI","title"),name:`${e.prefix}_BMI`,"is-view":e.isView,required:Q("BMI")},null,8,["modelValue","label","name","is-view","required"])):v("",!0),W("insuredRiskManagementLevel")?(s(),f(i,{key:16,modelValue:M.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[25]||(l[25]=e=>M.value.formInfo.extInfo.hasSocialInsurance=e),label:X("insuredRiskManagementLevel","title"),name:`${e.prefix}_hasSocialInsurance`,placeholder:"请选择",required:Q("insuredRiskManagementLevel")},{input:c((()=>[p(o,{modelValue:M.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[24]||(l[24]=e=>M.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:X("insuredRiskManagementLevel","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):v("",!0),W("purchaseOtherInsurance")?(s(),f(i,{key:17,modelValue:M.value.formInfo.extInfo.purchaseOtherInsurance,"onUpdate:modelValue":l[27]||(l[27]=e=>M.value.formInfo.extInfo.purchaseOtherInsurance=e),label:X("purchaseOtherInsurance","title"),name:`${e.prefix}_purchaseOtherInsurance`,placeholder:"请选择",required:Q("purchaseOtherInsurance")},{input:c((()=>[p(o,{modelValue:M.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[26]||(l[26]=e=>M.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:X("purchaseOtherInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):v("",!0),W("injuryInsurance")?(s(),f(i,{key:18,modelValue:M.value.formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":l[29]||(l[29]=e=>M.value.formInfo.extInfo.injuryInsurance=e),label:X("injuryInsurance","title"),name:`${e.prefix}_hasSocialInsurance`,placeholder:"请选择",required:Q("injuryInsurance")},{input:c((()=>[p(o,{modelValue:M.value.formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":l[28]||(l[28]=e=>M.value.formInfo.extInfo.injuryInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:X("injuryInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):v("",!0),W("insureArea")?(s(),f(g,{key:19,label:X("insureArea","title"),name:"insureAreaCode",placeholder:"请选择","is-link":"","is-view":e.isView,required:Q("insureArea"),"data-source":u(H),mapping:{label:"name",value:"code",children:"children"}},null,8,["label","is-view","required","data-source"])):v("",!0),W("occupation")?(s(),f(g,{key:20,modelValue:M.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:modelValue":l[30]||(l[30]=e=>M.value.formInfo.extInfo.occupationCodeList[0]=e),field0:M.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:field0":l[31]||(l[31]=e=>M.value.formInfo.extInfo.occupationCodeList[0]=e),field1:M.value.formInfo.extInfo.occupationCodeList[1],"onUpdate:field1":l[32]||(l[32]=e=>M.value.formInfo.extInfo.occupationCodeList[1]=e),field2:M.value.formInfo.extInfo.occupationCodeList[2],"onUpdate:field2":l[33]||(l[33]=e=>M.value.formInfo.extInfo.occupationCodeList[2]=e),label:X("occupation","title"),name:`${e.prefix}_occupationCodeList`,placeholder:"请选择","is-view":e.isView,required:Q("occupation"),"data-source":u(T),mapping:{label:"name",value:"code",children:"children"},"is-link":""},null,8,["modelValue","field0","field1","field2","label","name","is-view","required","data-source"])):v("",!0),W("personalAnnualIncome")?(s(),f(i,{key:21,modelValue:M.value.formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":l[34]||(l[34]=e=>M.value.formInfo.extInfo.personalAnnualIncome=e),label:X("personalAnnualIncome","title"),name:`${e.prefix}_personalAnnualIncome`,required:Q("personalAnnualIncome"),placeholder:"请输入","is-view":e.isView,rules:[{validator:le}]},{extra:c((()=>[$])),_:1},8,["modelValue","label","name","required","is-view","rules"])):v("",!0),W("familyAnnualIncome")?(s(),f(i,{key:22,modelValue:M.value.formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":l[35]||(l[35]=e=>M.value.formInfo.extInfo.familyAnnualIncome=e),label:X("familyAnnualIncome","title"),name:`${e.prefix}_familyAnnualIncome`,placeholder:"请输入","is-view":e.isView,rules:[{validator:le}],required:Q("familyAnnualIncome")},{extra:c((()=>[N])),_:1},8,["modelValue","label","name","is-view","rules","required"])):v("",!0),W("country")?(s(),f(n,{key:23,modelValue:M.value.formInfo.extInfo.nationalityCode,"onUpdate:modelValue":l[36]||(l[36]=e=>M.value.formInfo.extInfo.nationalityCode=e),label:X("country","title"),name:`${e.prefix}_nationalityCode`,"data-source":X("country","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},placeholder:"请选择",required:Q("country"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):v("",!0),W("hasUsCard")?(s(),f(i,{key:24,modelValue:M.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":l[38]||(l[38]=e=>M.value.formInfo.extInfo.hasUsCard=e),label:X("hasUsCard","title"),name:`${e.prefix}_hasUsCard`,placeholder:"请选择",required:Q("hasUsCard")},{input:c((()=>[p(o,{modelValue:M.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":l[37]||(l[37]=e=>M.value.formInfo.extInfo.hasUsCard=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:X("hasUsCard","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):v("",!0),W("marritalStatus")?(s(),f(n,{key:25,modelValue:M.value.formInfo.extInfo.marriageStatus,"onUpdate:modelValue":l[39]||(l[39]=e=>M.value.formInfo.extInfo.marriageStatus=e),label:X("marritalStatus","title"),name:`${e.prefix}_marriageStatus`,placeholder:"请选择","data-source":X("marritalStatus","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},"is-link":"","is-view":e.isView,required:Q("marritalStatus")},null,8,["modelValue","label","name","data-source","is-view","required"])):v("",!0),W("degree")?(s(),f(n,{key:26,modelValue:M.value.formInfo.extInfo.educationDegree,"onUpdate:modelValue":l[40]||(l[40]=e=>M.value.formInfo.extInfo.educationDegree=e),label:X("degree","title"),name:`${e.prefix}_educationDegree`,"data-source":X("degree","attributeValueList")||[],mapping:{label:"name",value:"code",children:"child"},placeholder:"请选择",required:Q("degree"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):v("",!0),W("mobile")?(s(),f(i,{key:27,modelValue:M.value.formInfo.mobile,"onUpdate:modelValue":l[41]||(l[41]=e=>M.value.formInfo.mobile=e),label:X("mobile","title"),name:`${e.prefix}_mobile`,placeholder:"请输入",maxlength:11,"is-view":e.isView,required:Q("mobile"),"validate-type":[u(U).PHONE]},null,8,["modelValue","label","name","is-view","required","validate-type"])):v("",!0),W("verificationCode")?(s(),f(i,{key:28,modelValue:M.value.formInfo.verificationCode,"onUpdate:modelValue":l[42]||(l[42]=e=>M.value.formInfo.verificationCode=e),label:X("verificationCode","title"),name:`${e.prefix}_verificationCode`,"is-view":e.isView,required:Q("verificationCode")},w({_:2},[e.isView?void 0:{name:"extra",fn:c((()=>[p(k,{class:y(["sms-code",{"count-down":F.value>0}]),size:"small",type:"primary",onClick:J},{default:c((()=>[b(x(z.value),1)])),_:1},8,["class"])]))}]),1032,["modelValue","label","name","is-view","required"])):v("",!0),W("isSmoke")?(s(),f(i,{key:29,modelValue:M.value.formInfo.isSmoke,"onUpdate:modelValue":l[44]||(l[44]=e=>M.value.formInfo.isSmoke=e),required:Q("isSmoke"),label:X("isSmoke","title"),name:`${e.prefix}_isSmoke`,placeholder:"请选择","is-view":B.value},{input:c((()=>[p(o,{modelValue:M.value.formInfo.isSmoke,"onUpdate:modelValue":l[43]||(l[43]=e=>M.value.formInfo.isSmoke=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:X("isSmoke","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):v("",!0),W("contactNo")?(s(),f(i,{key:30,modelValue:M.value.formInfo.contactNo,"onUpdate:modelValue":l[45]||(l[45]=e=>M.value.formInfo.contactNo=e),label:X("contactNo","title"),name:`${e.prefix}_contactNo`,"is-view":e.isView,required:Q("contactNo")},null,8,["modelValue","label","name","is-view","required"])):v("",!0),W("email")?(s(),f(i,{key:31,modelValue:M.value.formInfo.email,"onUpdate:modelValue":l[46]||(l[46]=e=>M.value.formInfo.email=e),label:X("email","title"),name:`${e.prefix}_email`,placeholder:"请输入","is-view":e.isView,required:Q("email"),"validate-type":[u(U).EMAIL]},null,8,["modelValue","label","name","is-view","required","validate-type"])):v("",!0),W("homeAddress")?(s(),f(g,{key:32,modelValue:M.value.formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":l[47]||(l[47]=e=>M.value.formInfo.extInfo.familyAreaCode=e),field1:M.value.formInfo.extInfo.familyProvinceCode,"onUpdate:field1":l[48]||(l[48]=e=>M.value.formInfo.extInfo.familyProvinceCode=e),field2:M.value.formInfo.extInfo.familyCityCode,"onUpdate:field2":l[49]||(l[49]=e=>M.value.formInfo.extInfo.familyCityCode=e),field3:M.value.formInfo.extInfo.familyAreaCode,"onUpdate:field3":l[50]||(l[50]=e=>M.value.formInfo.extInfo.familyAreaCode=e),label:X("homeAddress","title"),name:`${e.prefix}_familyProvinceCode`,placeholder:"请选择","is-link":"","is-view":e.isView,required:Q("homeAddress"),"data-source":u(H),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):v("",!0),W("homeAddressDetail")?(s(),f(i,{key:33,modelValue:M.value.formInfo.extInfo.familyAddress,"onUpdate:modelValue":l[51]||(l[51]=e=>M.value.formInfo.extInfo.familyAddress=e),label:X("homeAddressDetail","title"),name:`${e.prefix}_familyAddress`,placeholder:"请输入","is-view":e.isView,rules:[{validator:(...e)=>ie(100,...e)}],required:Q("homeAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):v("",!0),W("homePostalCode")?(s(),f(i,{key:34,modelValue:M.value.formInfo.extInfo.familyZipCode,"onUpdate:modelValue":l[52]||(l[52]=e=>M.value.formInfo.extInfo.familyZipCode=e),label:X("homePostalCode","title"),name:`${e.prefix}_familyZipCode`,placeholder:"请输入","is-view":e.isView,required:Q("homePostalCode"),"validate-type":[u(U).ZIP_CODE]},null,8,["modelValue","label","name","is-view","required","validate-type"])):v("",!0),W("workAddress")?(s(),f(g,{key:35,modelValue:M.value.formInfo.extInfo.workAreaCode,"onUpdate:modelValue":l[53]||(l[53]=e=>M.value.formInfo.extInfo.workAreaCode=e),field1:M.value.formInfo.extInfo.workProvinceCode,"onUpdate:field1":l[54]||(l[54]=e=>M.value.formInfo.extInfo.workProvinceCode=e),field2:M.value.formInfo.extInfo.workCityCode,"onUpdate:field2":l[55]||(l[55]=e=>M.value.formInfo.extInfo.workCityCode=e),field3:M.value.formInfo.extInfo.workAreaCode,"onUpdate:field3":l[56]||(l[56]=e=>M.value.formInfo.extInfo.workAreaCode=e),label:X("workAddress","title"),name:`${e.prefix}_workProvinceCode`,placeholder:"请选择","is-link":"","is-view":e.isView,required:Q("workAddress"),"data-source":u(H),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):v("",!0),W("workAddressDetail")?(s(),f(i,{key:36,modelValue:M.value.formInfo.extInfo.workAddress,"onUpdate:modelValue":l[57]||(l[57]=e=>M.value.formInfo.extInfo.workAddress=e),label:X("workAddressDetail","title"),name:`${e.prefix}_workAddress`,placeholder:"请输入","is-view":e.isView,rules:[{validator:(...e)=>ie(100,...e)}],required:Q("workAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):v("",!0),W("workPostalCode")?(s(),f(i,{key:37,modelValue:M.value.formInfo.extInfo.workZipCode,"onUpdate:modelValue":l[58]||(l[58]=e=>M.value.formInfo.extInfo.workZipCode=e),label:X("workPostalCode","title"),required:Q("workZipCode"),name:`${e.prefix}_workPostCode`,placeholder:"请输入","is-view":e.isView,"validate-type":[u(U).ZIP_CODE]},null,8,["modelValue","label","required","name","is-view","validate-type"])):v("",!0),W("companyName")?(s(),f(i,{key:38,modelValue:M.value.formInfo.extInfo.workStation,"onUpdate:modelValue":l[59]||(l[59]=e=>M.value.formInfo.extInfo.workStation=e),label:X("companyName","title"),name:`${e.prefix}_workPostCode`,placeholder:"请输入","is-view":e.isView,rules:[{validator:(...e)=>ie(20,...e)}],required:Q("companyName")},null,8,["modelValue","label","name","is-view","rules","required"])):v("",!0),W("workContent")?(s(),f(i,{key:39,modelValue:M.value.formInfo.extInfo.workContent,"onUpdate:modelValue":l[60]||(l[60]=e=>M.value.formInfo.extInfo.workContent=e),label:X("workContent","title"),name:`${e.prefix}_workContent`,required:Q("workContent"),placeholder:"请输入","is-view":e.isView,rules:[{validator:(...e)=>ie(100,...e)}]},null,8,["modelValue","label","name","required","is-view","rules"])):v("",!0),W("chineseTaxResident")?(s(),f(i,{key:40,modelValue:M.value.formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":l[62]||(l[62]=e=>M.value.formInfo.extInfo.chineseTaxResident=e),label:X("chineseTaxResident","title"),name:`${e.prefix}_taxResident`,required:Q("chineseTaxResident"),placeholder:"请输入"},{input:c((()=>[p(o,{modelValue:M.value.formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":l[61]||(l[61]=e=>M.value.formInfo.extInfo.chineseTaxResident=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:X("chineseTaxResident","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):v("",!0),W("taxResident")?(s(),f(n,{key:41,modelValue:M.value.formInfo.taxResident,"onUpdate:modelValue":l[63]||(l[63]=e=>M.value.formInfo.taxResident=e),"is-view":e.isView,label:X("taxResident","title"),name:`${e.prefix}_benefitOrder`,"data-source":X("taxResident","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:Q("taxResident")},null,8,["modelValue","is-view","label","name","data-source","required"])):v("",!0),W("partTimeJob")?(s(),f(i,{key:42,modelValue:M.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":l[65]||(l[65]=e=>M.value.formInfo.extInfo.isPartTime=e),label:X("partTimeJob","title"),name:`${e.prefix}_isPartTime`,required:Q("partTimeJob"),placeholder:"请输入"},{input:c((()=>[p(o,{modelValue:M.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":l[64]||(l[64]=e=>M.value.formInfo.extInfo.isPartTime=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:X("partTimeJob","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):v("",!0),W("benefitOrder")?(s(),f(n,{key:43,modelValue:M.value.formInfo.benefitOrder,"onUpdate:modelValue":l[66]||(l[66]=e=>M.value.formInfo.benefitOrder=e),label:X("benefitOrder","title"),name:`${e.prefix}_benefitOrder`,"is-view":e.isView,"data-source":X("benefitOrder","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:Q("benefitOrder")},null,8,["modelValue","label","name","is-view","data-source","required"])):v("",!0),W("benefitRate")?(s(),f(i,{key:44,modelValue:M.value.formInfo.benefitRate,"onUpdate:modelValue":l[67]||(l[67]=e=>M.value.formInfo.benefitRate=e),required:Q("benefitRate"),name:`${e.prefix}_benefitRate`,"is-view":e.isView,rules:[{validator:oe}],label:X("benefitRate","title")},{extra:c((()=>[P])),_:1},8,["modelValue","required","name","is-view","rules","label"])):v("",!0),I(a.$slots,"default")])):v("",!0)}}});const j={class:"page-info-wrapper"};e("_",a({props:{factorObject:null,formInfo:{default:()=>({})},isView:{type:Boolean,default:!1},sendSmsCode:{type:Function,default:(e,a)=>{}},titleCollection:{default:()=>({})},inputAlign:{default:"left"}},setup(e,{expose:a}){const l=e;C(),o();const r=i({}),u=i({extInfo:{},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL"}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),V=i(null),w=i([]),b=i([]);i([]),i([]),i([]),g({beneficiaryId:0,nextPage:"",currentAddress:null,isLoading:!0});const x=n((()=>{const e={INSURER:{},HOLDER:{}};return(r.value?.INSURER||[]).forEach((a=>{e.INSURER[a.code]=a})),(r.value?.HOLDER||[]).forEach((a=>{e.HOLDER[a.code]=a})),e})),y=(e,a)=>x.value?.[a]?.[e]?.isDisplay===O.YES,h=(e,a)=>x.value?.[a]?.[e].isMustInput===O.YES,k=(e,a,l)=>x.value?.[l]?.[e]?.[a]||"";return a({validateForm:()=>new Promise(((e,a)=>{V.value?.validate().then((()=>{e(u.value)}),(()=>{a()}))}))}),t((()=>l.factorObject),(()=>{const e={BENEFICIARY:l.factorObject[3],INSURER:l.factorObject[2],HOLDER:l.factorObject[1]};r.value=e}),{immediate:!0,deep:!0}),t([()=>u.value.tenantOrderInsuredList[0].relationToHolder,()=>u.value.tenantOrderHolder],(()=>{`${u.value.tenantOrderInsuredList[0].relationToHolder}`===T.SELF&&Object.assign(u.value.tenantOrderInsuredList[0],u.value.tenantOrderHolder,{id:u.value.tenantOrderInsuredList[0].id,extInfo:{...u.value.tenantOrderHolder.extInfo,insureProvinceCode:u.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,insureCityCode:u.value.tenantOrderInsuredList[0].extInfo.insureCityCode,insureAreaCode:u.value.tenantOrderInsuredList[0].extInfo.insureAreaCode}})}),{deep:!0,immediate:!0}),t((()=>l.formInfo),(()=>{Object.keys(l.formInfo).length&&(u.value=l.formInfo)}),{deep:!0,immediate:!0}),(a,l)=>{const o=d("ProField"),i=d("ProCard"),n=d("ProRadioButton");d("ProSvg");const t=d("ProForm");return s(),m("div",j,[p(t,{ref_key:"formRef",ref:V,"show-error":"","show-error-message":!1,"input-align":e.inputAlign},{default:c((()=>[r.value.HOLDER?.length?(s(),f(i,{key:0,"show-divider":!1,title:e.titleCollection?.HOLDER},{default:c((()=>[p(H,{images:w.value,"onUpdate:images":l[1]||(l[1]=e=>w.value=e),"form-info":u.value.tenantOrderHolder,"factor-list":r.value.HOLDER,prefix:"holder","is-view":e.isView,"send-sms-code":e.sendSmsCode},{name:c((()=>[I(a.$slots,"holderName")])),default:c((()=>[y("gasNumberCollection","HOLDER")&&u.value.tenantOrderSubjectList?.[0]?.extInfo?(s(),f(o,{key:0,modelValue:u.value.tenantOrderSubjectList[0].extInfo.subjectRelatedUserId,"onUpdate:modelValue":l[0]||(l[0]=e=>u.value.tenantOrderSubjectList[0].extInfo.subjectRelatedUserId=e),label:k("gasNumberCollection","title","HOLDER"),name:"subjectRelatedUserId",required:h("gasNumberCollection","HOLDER"),placeholder:"请输入","is-view":e.isView,maxlength:100},null,8,["modelValue","label","required","is-view"])):v("",!0)])),_:3},8,["images","form-info","factor-list","is-view","send-sms-code"])])),_:3},8,["title"])):v("",!0),r.value.INSURER?.length?(s(),f(i,{key:1,"show-divider":!1,title:e.titleCollection?.INSURER},{default:c((()=>[y("relationToHolder","INSURER")?(s(),f(o,{key:0,modelValue:u.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":l[3]||(l[3]=e=>u.value.tenantOrderInsuredList[0].relationToHolder=e),class:"relation-holder",name:"insure_relationToHolder",required:h("relationToHolder","INSURER"),label:k("relationToHolder","title","INSURER")},{input:c((()=>[p(n,{modelValue:u.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":l[2]||(l[2]=e=>u.value.tenantOrderInsuredList[0].relationToHolder=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:k("relationToHolder","attributeValueList","INSURER")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required","label"])):v("",!0),1!=+u.value.tenantOrderInsuredList[0].relationToHolder?(s(),f(H,{key:1,images:b.value,"onUpdate:images":l[4]||(l[4]=e=>b.value=e),"form-info":u.value.tenantOrderInsuredList[0],"factor-list":r.value.INSURER||[],prefix:"insure","send-sms-code":e.sendSmsCode,"is-view":e.isView},{name:c((()=>[I(a.$slots,"insurerName")])),_:3},8,["images","form-info","factor-list","send-sms-code","is-view"])):v("",!0)])),_:3},8,["title"])):v("",!0),v("",!0)])),_:3},8,["input-align"])])}}}))}}}))}();
