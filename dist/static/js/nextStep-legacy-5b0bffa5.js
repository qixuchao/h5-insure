!function(){var e=document.createElement("style");e.innerHTML=".input-extra{margin-left:.33333rem;margin-top:.18667rem}.date-extra{padding-left:var(--zaui-card-border, .4rem);margin-left:var(--zaui-card-border, .4rem);border-left:1px solid #EEEFF4;margin-top:.21333rem;display:flex}.sms-code{border:none;background:transparent}.van-cell:after{width:unset}.page-info-wrapper .van-cell .van-field__value{align-items:flex-start}.page-info-wrapper .com-card .com-card-wrap .body{padding:0}.page-info-wrapper .beneficiary-part .part-title{display:flex;align-items:center;justify-content:space-between;padding:0 var(--zaui-card-border, .4rem);background-color:var(--zaui-global-bg, #f2f5fc);height:1.2rem}.page-info-wrapper .beneficiary-part .part-title .title{font-size:.4rem;font-weight:600;color:#393d46}.page-info-wrapper .left{flex:0 0 50%}.page-info-wrapper .left .trial-result{font-size:.45333rem;color:#393d46}.page-info-wrapper .left .trial-result .result-num{margin-left:.17333rem;color:var(--zaui-price, #ff5840);font-weight:700;margin-left:.21333rem}.page-info-wrapper .left .result-desc{font-size:.32rem;color:#666}.page-info-wrapper .operate-btn{width:50%}.page-info-wrapper .radio-item-wrapper{padding:0}.page-info-wrapper .radio-item-wrapper p{font-size:.4rem;color:#393d46;margin:.06667rem 0;word-break:break-all}.page-info-wrapper .radio-item-wrapper .name{font-weight:600;margin-right:.4rem}.page-info-wrapper .radio-item-wrapper .phone{font-weight:400}\n",document.head.appendChild(e),System.register(["./vendor-legacy-80ec6972.js","./index-legacy-8f7fcb27.js","./infoCollection-legacy-04120a88.js","./relativeTime-legacy-89da35f6.js","./validator-legacy-5e43cc69.js","./useDicData-legacy-57eebe78.js","./core-legacy-ffe6b6b1.js"],(function(e){"use strict";var a,l,o,i,n,r,t,u,d,s,f,m,c,v,p,I,V,w,b,x,y,h,g,C,k,U,R,T,_,L,O,q,E,A,$,N,D,S,P,H;return{setters:[function(e){a=e.h,l=e.P,o=e.N,i=e.r,n=e.x,r=e.d,t=e.Z,u=e.k,d=e.A,s=e.l,f=e.y,m=e.m,c=e.n,v=e.Q,p=e.s,I=e.X,V=e.R,w=e.z,b=e.Y,x=e.C,y=e.I,h=e.J,g=e.T,C=e.a8,k=e.L,U=e.D},function(e){R=e.C,T=e.V,_=e.I,L=e.J,O=e.K,q=e.Y,E=e.n,A=e.a9,$=e.aa},function(e){N=e.R},function(e){D=e.r},function(e){S=e.v},function(e){P=e.u},function(e){H=e.s}],execute:function(){const j={key:0,class:"com-personal-wrapper"},B={class:"date-extra"},z=x("长期"),M=w("span",{class:"input-extra"},"万",-1),F=w("span",{class:"input-extra"},"万",-1),Y=w("span",{class:"input-extra"},"%",-1),Z=a({props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]},sendSmsCode:{type:Function,default:(e,a)=>{}},needDesensitize:{type:Boolean,default:!1}},emits:["update:images"],setup(e,{emit:a}){const C=e;l();const{venderCode:k=""}=o().query,U=P(`${k.toLocaleUpperCase()}_OCCUPATION`),E=P("NATIONAL_REGION_CODE"),A=i([]),$=i(!1),H=i({formInfo:C.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""}),Z=i(!1),J=n((()=>Z.value?(H.value.formInfo.mobile||"").replace(/^(.{3})(?:\d+)(.{4})$/,"$1****$2"):C.formInfo.mobile)),G=i(!1),K=n((()=>G.value?(H.value.formInfo.certNo||"").replace(/^(.{6})(?:\d+)(.{2})$/,"$1**********$2"):C.formInfo.certNo));r.extend(D);const W=i(2===C.formInfo.certEndType),X=i(0),Q=i("验证码"),ee=i(!1),ae=n((()=>{const e={};return C.factorList.forEach((a=>{e[a.code]=a})),e})),le=(e,a)=>{H.value.formInfo[a]=e};n((()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(H.value.formInfo.mobile)));const oe=e=>{"mobile"===e&&(Z.value=!1),"certNo"===e&&(G.value=!1)},ie=async()=>{X.value>0||C.sendSmsCode(H.value.formInfo.mobile,(()=>{ee.value=!0,g({message:"短信发送成功，请查收"}),(()=>{if(X.value>0)return;X.value=60;const e=()=>{Q.value=`${X.value}s`,X.value-=1};e();const a=setInterval((()=>{0===X.value?(Q.value="验证码",X.value=0,clearInterval(a)):e()}),1e3)})()}))},ne=e=>{H.value.formInfo.certNo=e.personIdCard,H.value.formInfo.name=e.personName,H.value.formInfo.certEndDate=r(e.validDateEnd,"YYYYMMDD").toDate()},re=e=>ae.value&&ae.value[e]&&ae.value[e]?.isDisplay===q.YES,te=e=>ae.value&&ae.value[e]&&ae.value[e].isMustInput===q.YES,ue=(e,a)=>ae.value?.[e]?.[a]||"",de=n((()=>{if(!re("certType"))return!1;const e=ue("certType","attributeValueList")||[];return 1!==e.length||e[0]?.code!==R.CERT})),se=n((()=>ue("certType","attributeValueList")?.length>1?"证件号码":"insure"===C.prefix&&H.value.formInfo?.relationToHolder===N.CHILD?"身份证号(户口簿)":ue("certType","attributeValueList")?.[0].code===R.CERT?"身份证号":ue("certType","title"))),fe=(e,a)=>S(e)?"":"请输入正确的姓名",me=n((()=>[R.CERT,R.HOUSE_HOLD].includes(`${H.value.formInfo.certType}`)?[T.ID_CARD]:`${H.value.formInfo.certType}`===R.BIRTH?[T.BIRTH]:`${H.value.formInfo.certType}`===R.PASSPORT?[T.PASSPORT]:[T.ID_CARD])),ce=(e,a)=>te("attachment")?2===H.value.formInfo.certEndType||H.value.formInfo.certEndDate?"":"请选择有效期至":"",ve=(e,a)=>/^\d{1,10}(\.\d{1,2})?$/.test(e)?"":"年收入最多录入10位数字",pe=(e,a)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(e)?"":"收益比例只能填写1-100的正整数",Ie=(e,a,l)=>a.length>e?`最大不能超过${e}个字符`:"",Ve=(e,a)=>{if(!re("nationality"))return"";if("CHN"===H.value.formInfo?.extInfo?.nationalityCode){if(![R.CERT,R.HOUSE_HOLD,R.BIRTH,R.MILITARY_CARD].includes(`${e}`))return"国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证"}else if(["HKG","MAC"].includes(H.value.formInfo?.extInfo?.nationalityCode)){if(![R.HK_MACAO_RESIDENCE_PERMIT,R.HONGKONG_MACAO].includes(`${e}`))return"国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证"}else if("TWN"===H.value.formInfo?.extInfo?.nationalityCode){if(![R.TAIWAN_RESIDENCE_PERMIT,R.TAIWAN_TRAVEL].includes(`${e}`))return"国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证"}else if(![R.PASSPORT,R.FOREIGN_PERMANENT].includes(`${e}`))return"国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证";return r().year()-r(H.value.formInfo?.birthday).year()>2&&e===R.BIRTH?"年龄大于等于2周岁时，证件类型不能选择出生证":""},we=e=>Array.isArray(e)&&2===e.length&&e[0]&&e[1]?"":"请上传身份证正反面照片";return t((()=>W.value),(e=>{e?(H.value.formInfo.certEndType=2,H.value.formInfo.certEndDate=""):H.value.formInfo.certEndType=1}),{immediate:!0}),t((()=>H.value.formInfo.mobile),(()=>{H.value.formInfo.mobile=H.value.formInfo.mobile?.replace(/[\u4e00-\u9fa5/\s+/]|[^0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),t([()=>H.value.formInfo.certNo,()=>H.value.formInfo.certNo],(()=>{H.value.formInfo.certNo=H.value.formInfo.certNo?.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,""),H.value.formInfo.certNo=H.value.formInfo.certNo?.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),t((()=>C.needDesensitize),((e=!1)=>{Z.value=e,G.value=e}),{immediate:!0}),t((()=>H.value.formInfo.certType),(e=>{[R.CERT,R.HOUSE_HOLD].includes(e)?$.value=!0:$.value=!1}),{deep:!0,immediate:!0}),t((()=>H.value.formInfo.certNo),(e=>{_(e)?(H.value.formInfo.gender=+L(e),H.value.formInfo.birthday=r(new Date(O(e))).format("YYYY-MM-DD")):(H.value.formInfo.gender=null,H.value.formInfo.birthday="")}),{deep:!0,immediate:!0}),t((()=>C.images),(e=>{A.value=e}),{immediate:!0}),t((()=>C.formInfo),(()=>{H.value.formInfo=C.formInfo}),{deep:!0,immediate:!0}),t(A,(e=>{a("update:images",e)}),{deep:!0}),(a,l)=>{const o=u("ProRadioButton"),i=u("ProField"),n=u("ProPicker"),r=u("ProIDCardUpload"),t=u("ProImageUpload"),g=u("ProDatePicker"),C=u("van-checkbox"),k=u("ProCascader"),R=u("van-button");return Object.keys(d(ae)).length?(s(),f("div",j,[re("insuredBeneficiaryType")?(s(),m(i,{key:0,modelValue:H.value.formInfo.insuredBeneficiaryType,"onUpdate:modelValue":l[1]||(l[1]=e=>H.value.formInfo.insuredBeneficiaryType=e),label:ue("insuredBeneficiaryType","title"),name:"insuredBeneficiaryType"},{input:c((()=>[v(o,{modelValue:H.value.formInfo.insuredBeneficiaryType,"onUpdate:modelValue":l[0]||(l[0]=e=>H.value.formInfo.insuredBeneficiaryType=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ue("insuredBeneficiaryType","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):p("",!0),re("insuredRelation")?(s(),m(i,{key:1,modelValue:H.value.formInfo.insuredRelation,"onUpdate:modelValue":l[3]||(l[3]=e=>H.value.formInfo.insuredRelation=e),label:ue("insuredRelation","title"),name:"insuredRelation"},{input:c((()=>[v(o,{modelValue:H.value.formInfo.insuredRelation,"onUpdate:modelValue":l[2]||(l[2]=e=>H.value.formInfo.insuredRelation=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ue("insuredRelation","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):p("",!0),re("name")?(s(),m(i,{key:2,modelValue:H.value.formInfo.name,"onUpdate:modelValue":l[4]||(l[4]=e=>H.value.formInfo.name=e),label:ue("name","title"),name:`${e.prefix}_name`,"is-view":e.isView,required:te("name"),rules:[{validator:fe}]},{"right-icon":c((()=>[I(a.$slots,"name")])),_:3},8,["modelValue","label","name","is-view","required","rules"])):p("",!0),re("sex")?(s(),m(i,{key:3,modelValue:H.value.formInfo.gender,"onUpdate:modelValue":l[6]||(l[6]=e=>H.value.formInfo.gender=e),required:te("sex"),label:ue("sex","title"),name:`${e.prefix}_gender`,"is-view":$.value},{input:c((()=>[v(o,{modelValue:H.value.formInfo.gender,"onUpdate:modelValue":l[5]||(l[5]=e=>H.value.formInfo.gender=e),disabled:$.value,"is-view":e.isView,prop:{label:"value",value:"code"},options:ue("sex","attributeValueList")||[]},null,8,["modelValue","disabled","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):p("",!0),d(de)?(s(),m(n,{key:4,modelValue:H.value.formInfo.certType,"onUpdate:modelValue":l[7]||(l[7]=e=>H.value.formInfo.certType=e),label:ue("certType","title"),name:`${e.prefix}_certType`,"data-source":ue("certType","attributeValueList"),mapping:{label:"value",value:"code",children:"child"},required:te("certType"),rules:[{validator:Ve}],"is-view":e.isView},null,8,["modelValue","label","name","data-source","required","rules","is-view"])):p("",!0),re("certImage")&&H.value.formInfo.certType+""=="1"?(s(),m(i,{key:5,label:"身份证上传",block:"",required:te("certImage"),rules:[{validator:we}],name:`${e.prefix}_idCard`},{input:c((()=>[v(r,{modelValue:A.value,"onUpdate:modelValue":l[8]||(l[8]=e=>A.value=e),"is-view":e.isView,onOnOCR:ne},null,8,["modelValue","is-view"])])),_:1},8,["required","rules","name"])):p("",!0),re("certImage")&&H.value.formInfo.certType&&H.value.formInfo.certType+""!="1"?(s(),m(i,{key:6,label:ue("certImage","title"),block:"",required:te("certImage")},{input:c((()=>[v(t,{modelValue:A.value,"onUpdate:modelValue":l[9]||(l[9]=e=>A.value=e),"is-view":e.isView,"max-count":1},null,8,["modelValue","is-view"])])),_:1},8,["label","required"])):p("",!0),re("certNo")?(s(),m(i,{key:7,modelValue:d(K),"onUpdate:modelValue":[l[10]||(l[10]=e=>V(K)?K.value=e:null),l[12]||(l[12]=e=>le(e,"certNo"))],label:d(se),name:`${e.prefix}_certNo`,required:te("certNo"),maxlength:18,"is-view":e.isView,"validate-type":G.value?void 0:d(me),onFocus:l[11]||(l[11]=e=>oe("certNo"))},null,8,["modelValue","label","name","required","is-view","validate-type"])):p("",!0),re("birthDate")?(s(),m(g,{key:8,modelValue:H.value.formInfo.birthday,"onUpdate:modelValue":l[13]||(l[13]=e=>H.value.formInfo.birthday=e),label:ue("birthDate","title"),name:`${e.prefix}_birthday`,min:H.value.birth.min,max:H.value.birth.max,type:"date","is-view":e.isView,required:te("birthDate")},null,8,["modelValue","label","name","min","max","is-view","required"])):p("",!0),re("certExpiry")?(s(),m(g,{key:9,modelValue:H.value.formInfo.certEndDate,"onUpdate:modelValue":l[15]||(l[15]=e=>H.value.formInfo.certEndDate=e),label:ue("certExpiry","title"),name:`${e.prefix}_certEndDate`,type:"date",min:H.value.certEndDate.min,max:H.value.certEndDate.max,"is-view":W.value||e.isView,read:"",rules:[{validator:ce}]},{extra:c((()=>[w("div",B,[v(C,{modelValue:W.value,"onUpdate:modelValue":l[14]||(l[14]=e=>W.value=e),"icon-size":16,disabled:e.isView},{default:c((()=>[z])),_:1},8,["modelValue","disabled"])])])),_:1},8,["modelValue","label","name","min","max","is-view","rules"])):p("",!0),re("age")?(s(),m(i,{key:10,modelValue:H.value.formInfo.name,"onUpdate:modelValue":l[16]||(l[16]=e=>H.value.formInfo.name=e),label:ue("age","title"),name:`${e.prefix}_age`,"is-view":e.isView,required:te("age")},null,8,["modelValue","label","name","is-view","required"])):p("",!0),re("residence")?(s(),m(k,{key:11,modelValue:H.value.formInfo.extInfo.provinceCode,"onUpdate:modelValue":l[17]||(l[17]=e=>H.value.formInfo.extInfo.provinceCode=e),field1:H.value.formInfo.extInfo.provinceCode,"onUpdate:field1":l[18]||(l[18]=e=>H.value.formInfo.extInfo.provinceCode=e),field2:H.value.formInfo.extInfo.cityCode,"onUpdate:field2":l[19]||(l[19]=e=>H.value.formInfo.extInfo.cityCode=e),field3:H.value.formInfo.extInfo.areaCode,"onUpdate:field3":l[20]||(l[20]=e=>H.value.formInfo.extInfo.areaCode=e),label:ue("residence","title"),name:`${e.prefix}_provinceCode`,"is-link":"","is-view":e.isView,required:te("residence"),"data-source":d(E),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):p("",!0),re("social")?(s(),m(i,{key:12,modelValue:H.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[22]||(l[22]=e=>H.value.formInfo.extInfo.hasSocialInsurance=e),label:ue("social","title"),name:`${e.prefix}_hasSocialInsurance`,required:te("social")},{input:c((()=>[v(o,{modelValue:H.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[21]||(l[21]=e=>H.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ue("social","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):p("",!0),re("height")?(s(),m(i,{key:13,modelValue:H.value.formInfo.name,"onUpdate:modelValue":l[23]||(l[23]=e=>H.value.formInfo.name=e),label:ue("height","title"),"is-view":e.isView,name:`${e.prefix}_height`,required:te("height")},null,8,["modelValue","label","is-view","name","required"])):p("",!0),re("weight")?(s(),m(i,{key:14,modelValue:H.value.formInfo.name,"onUpdate:modelValue":l[24]||(l[24]=e=>H.value.formInfo.name=e),label:ue("weight","title"),name:`${e.prefix}_weight`,"is-view":e.isView,required:te("weight")},null,8,["modelValue","label","name","is-view","required"])):p("",!0),re("BMI")?(s(),m(i,{key:15,modelValue:H.value.formInfo.name,"onUpdate:modelValue":l[25]||(l[25]=e=>H.value.formInfo.name=e),label:ue("BMI","title"),name:`${e.prefix}_BMI`,"is-view":e.isView,required:te("BMI")},null,8,["modelValue","label","name","is-view","required"])):p("",!0),re("insuredRiskManagementLevel")?(s(),m(i,{key:16,modelValue:H.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[27]||(l[27]=e=>H.value.formInfo.extInfo.hasSocialInsurance=e),label:ue("insuredRiskManagementLevel","title"),name:`${e.prefix}_hasSocialInsurance`,required:te("insuredRiskManagementLevel")},{input:c((()=>[v(o,{modelValue:H.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[26]||(l[26]=e=>H.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ue("insuredRiskManagementLevel","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):p("",!0),re("purchaseOtherInsurance")?(s(),m(i,{key:17,modelValue:H.value.formInfo.extInfo.purchaseOtherInsurance,"onUpdate:modelValue":l[29]||(l[29]=e=>H.value.formInfo.extInfo.purchaseOtherInsurance=e),label:ue("purchaseOtherInsurance","title"),name:`${e.prefix}_purchaseOtherInsurance`,required:te("purchaseOtherInsurance")},{input:c((()=>[v(o,{modelValue:H.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[28]||(l[28]=e=>H.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ue("purchaseOtherInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):p("",!0),re("injuryInsurance")?(s(),m(i,{key:18,modelValue:H.value.formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":l[31]||(l[31]=e=>H.value.formInfo.extInfo.injuryInsurance=e),label:ue("injuryInsurance","title"),name:`${e.prefix}_hasSocialInsurance`,required:te("injuryInsurance")},{input:c((()=>[v(o,{modelValue:H.value.formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":l[30]||(l[30]=e=>H.value.formInfo.extInfo.injuryInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ue("injuryInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):p("",!0),re("insureArea")?(s(),m(k,{key:19,label:ue("insureArea","title"),name:"insureAreaCode","is-link":"","is-view":e.isView,required:te("insureArea"),"data-source":d(E),mapping:{label:"name",value:"code",children:"children"}},null,8,["label","is-view","required","data-source"])):p("",!0),re("occupation")?(s(),m(k,{key:20,modelValue:H.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:modelValue":l[32]||(l[32]=e=>H.value.formInfo.extInfo.occupationCodeList[0]=e),field0:H.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:field0":l[33]||(l[33]=e=>H.value.formInfo.extInfo.occupationCodeList[0]=e),field1:H.value.formInfo.extInfo.occupationCodeList[1],"onUpdate:field1":l[34]||(l[34]=e=>H.value.formInfo.extInfo.occupationCodeList[1]=e),field2:H.value.formInfo.extInfo.occupationCodeList[2],"onUpdate:field2":l[35]||(l[35]=e=>H.value.formInfo.extInfo.occupationCodeList[2]=e),label:ue("occupation","title"),name:`${e.prefix}_occupationCodeList`,"is-view":e.isView,required:te("occupation"),"data-source":d(U),mapping:{label:"name",value:"code",children:"children"},"is-link":""},null,8,["modelValue","field0","field1","field2","label","name","is-view","required","data-source"])):p("",!0),re("personalAnnualIncome")?(s(),m(i,{key:21,modelValue:H.value.formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":l[36]||(l[36]=e=>H.value.formInfo.extInfo.personalAnnualIncome=e),label:ue("personalAnnualIncome","title"),name:`${e.prefix}_personalAnnualIncome`,required:te("personalAnnualIncome"),"is-view":e.isView,rules:[{validator:ve}]},{extra:c((()=>[M])),_:1},8,["modelValue","label","name","required","is-view","rules"])):p("",!0),re("familyAnnualIncome")?(s(),m(i,{key:22,modelValue:H.value.formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":l[37]||(l[37]=e=>H.value.formInfo.extInfo.familyAnnualIncome=e),label:ue("familyAnnualIncome","title"),name:`${e.prefix}_familyAnnualIncome`,"is-view":e.isView,rules:[{validator:ve}],required:te("familyAnnualIncome")},{extra:c((()=>[F])),_:1},8,["modelValue","label","name","is-view","rules","required"])):p("",!0),re("country")?(s(),m(n,{key:23,modelValue:H.value.formInfo.extInfo.nationalityCode,"onUpdate:modelValue":l[38]||(l[38]=e=>H.value.formInfo.extInfo.nationalityCode=e),label:ue("country","title"),name:`${e.prefix}_nationalityCode`,"data-source":ue("country","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:te("country"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):p("",!0),re("hasUsCard")?(s(),m(i,{key:24,modelValue:H.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":l[40]||(l[40]=e=>H.value.formInfo.extInfo.hasUsCard=e),label:ue("hasUsCard","title"),name:`${e.prefix}_hasUsCard`,required:te("hasUsCard")},{input:c((()=>[v(o,{modelValue:H.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":l[39]||(l[39]=e=>H.value.formInfo.extInfo.hasUsCard=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ue("hasUsCard","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):p("",!0),re("marritalStatus")?(s(),m(n,{key:25,modelValue:H.value.formInfo.extInfo.marriageStatus,"onUpdate:modelValue":l[41]||(l[41]=e=>H.value.formInfo.extInfo.marriageStatus=e),label:ue("marritalStatus","title"),name:`${e.prefix}_marriageStatus`,"data-source":ue("marritalStatus","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},"is-link":"","is-view":e.isView,required:te("marritalStatus")},null,8,["modelValue","label","name","data-source","is-view","required"])):p("",!0),re("degree")?(s(),m(n,{key:26,modelValue:H.value.formInfo.extInfo.educationDegree,"onUpdate:modelValue":l[42]||(l[42]=e=>H.value.formInfo.extInfo.educationDegree=e),label:ue("degree","title"),name:`${e.prefix}_educationDegree`,"data-source":ue("degree","attributeValueList")||[],mapping:{label:"name",value:"code",children:"child"},required:te("degree"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):p("",!0),re("mobile")?(s(),m(i,{key:27,modelValue:d(J),"onUpdate:modelValue":[l[43]||(l[43]=e=>V(J)?J.value=e:null),l[45]||(l[45]=e=>le(e,"mobile"))],label:ue("mobile","title"),name:`${e.prefix}_mobile`,maxlength:11,"is-view":e.isView,required:te("mobile"),"validate-type":Z.value?void 0:[d(T).PHONE],onFocus:l[44]||(l[44]=e=>oe("mobile"))},null,8,["modelValue","label","name","is-view","required","validate-type"])):p("",!0),re("verificationCode")?(s(),m(i,{key:28,modelValue:H.value.formInfo.verificationCode,"onUpdate:modelValue":l[46]||(l[46]=e=>H.value.formInfo.verificationCode=e),label:ue("verificationCode","title"),name:`${e.prefix}_verificationCode`,type:"digit",maxlength:6,"is-view":e.isView,required:te("verificationCode")},b({_:2},[e.isView?void 0:{name:"extra",fn:c((()=>[v(R,{class:h(["sms-code",{"count-down":X.value>0}]),size:"small",plain:"",type:"primary",onClick:ie},{default:c((()=>[x(y(Q.value),1)])),_:1},8,["class"])]))}]),1032,["modelValue","label","name","is-view","required"])):p("",!0),re("isSmoke")?(s(),m(i,{key:29,modelValue:H.value.formInfo.isSmoke,"onUpdate:modelValue":l[48]||(l[48]=e=>H.value.formInfo.isSmoke=e),required:te("isSmoke"),label:ue("isSmoke","title"),name:`${e.prefix}_isSmoke`,"is-view":$.value},{input:c((()=>[v(o,{modelValue:H.value.formInfo.isSmoke,"onUpdate:modelValue":l[47]||(l[47]=e=>H.value.formInfo.isSmoke=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ue("isSmoke","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):p("",!0),re("contactNo")?(s(),m(i,{key:30,modelValue:H.value.formInfo.contactNo,"onUpdate:modelValue":l[49]||(l[49]=e=>H.value.formInfo.contactNo=e),label:ue("contactNo","title"),name:`${e.prefix}_contactNo`,"is-view":e.isView,required:te("contactNo")},null,8,["modelValue","label","name","is-view","required"])):p("",!0),re("email")?(s(),m(i,{key:31,modelValue:H.value.formInfo.email,"onUpdate:modelValue":l[50]||(l[50]=e=>H.value.formInfo.email=e),label:ue("email","title"),name:`${e.prefix}_email`,"is-view":e.isView,required:te("email"),"validate-type":[d(T).EMAIL]},null,8,["modelValue","label","name","is-view","required","validate-type"])):p("",!0),re("homeAddress")?(s(),m(k,{key:32,modelValue:H.value.formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":l[51]||(l[51]=e=>H.value.formInfo.extInfo.familyAreaCode=e),field1:H.value.formInfo.extInfo.familyProvinceCode,"onUpdate:field1":l[52]||(l[52]=e=>H.value.formInfo.extInfo.familyProvinceCode=e),field2:H.value.formInfo.extInfo.familyCityCode,"onUpdate:field2":l[53]||(l[53]=e=>H.value.formInfo.extInfo.familyCityCode=e),field3:H.value.formInfo.extInfo.familyAreaCode,"onUpdate:field3":l[54]||(l[54]=e=>H.value.formInfo.extInfo.familyAreaCode=e),label:ue("homeAddress","title"),name:`${e.prefix}_familyProvinceCode`,"is-link":"","is-view":e.isView,required:te("homeAddress"),"data-source":d(E),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):p("",!0),re("homeAddressDetail")?(s(),m(i,{key:33,modelValue:H.value.formInfo.extInfo.familyAddress,"onUpdate:modelValue":l[55]||(l[55]=e=>H.value.formInfo.extInfo.familyAddress=e),label:ue("homeAddressDetail","title"),name:`${e.prefix}_familyAddress`,"is-view":e.isView,rules:[{validator:(...e)=>Ie(100,...e)}],required:te("homeAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):p("",!0),re("homePostalCode")?(s(),m(i,{key:34,modelValue:H.value.formInfo.extInfo.familyZipCode,"onUpdate:modelValue":l[56]||(l[56]=e=>H.value.formInfo.extInfo.familyZipCode=e),label:ue("homePostalCode","title"),name:`${e.prefix}_familyZipCode`,"is-view":e.isView,required:te("homePostalCode"),"validate-type":[d(T).ZIP_CODE]},null,8,["modelValue","label","name","is-view","required","validate-type"])):p("",!0),re("workAddress")?(s(),m(k,{key:35,modelValue:H.value.formInfo.extInfo.workAreaCode,"onUpdate:modelValue":l[57]||(l[57]=e=>H.value.formInfo.extInfo.workAreaCode=e),field1:H.value.formInfo.extInfo.workProvinceCode,"onUpdate:field1":l[58]||(l[58]=e=>H.value.formInfo.extInfo.workProvinceCode=e),field2:H.value.formInfo.extInfo.workCityCode,"onUpdate:field2":l[59]||(l[59]=e=>H.value.formInfo.extInfo.workCityCode=e),field3:H.value.formInfo.extInfo.workAreaCode,"onUpdate:field3":l[60]||(l[60]=e=>H.value.formInfo.extInfo.workAreaCode=e),label:ue("workAddress","title"),name:`${e.prefix}_workProvinceCode`,"is-link":"","is-view":e.isView,required:te("workAddress"),"data-source":d(E),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):p("",!0),re("workAddressDetail")?(s(),m(i,{key:36,modelValue:H.value.formInfo.extInfo.workAddress,"onUpdate:modelValue":l[61]||(l[61]=e=>H.value.formInfo.extInfo.workAddress=e),label:ue("workAddressDetail","title"),name:`${e.prefix}_workAddress`,"is-view":e.isView,rules:[{validator:(...e)=>Ie(100,...e)}],required:te("workAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):p("",!0),re("workPostalCode")?(s(),m(i,{key:37,modelValue:H.value.formInfo.extInfo.workZipCode,"onUpdate:modelValue":l[62]||(l[62]=e=>H.value.formInfo.extInfo.workZipCode=e),label:ue("workPostalCode","title"),required:te("workZipCode"),name:`${e.prefix}_workPostCode`,"is-view":e.isView,"validate-type":[d(T).ZIP_CODE]},null,8,["modelValue","label","required","name","is-view","validate-type"])):p("",!0),re("companyName")?(s(),m(i,{key:38,modelValue:H.value.formInfo.extInfo.workStation,"onUpdate:modelValue":l[63]||(l[63]=e=>H.value.formInfo.extInfo.workStation=e),label:ue("companyName","title"),name:`${e.prefix}_workPostCode`,"is-view":e.isView,rules:[{validator:(...e)=>Ie(20,...e)}],required:te("companyName")},null,8,["modelValue","label","name","is-view","rules","required"])):p("",!0),re("workContent")?(s(),m(i,{key:39,modelValue:H.value.formInfo.extInfo.workContent,"onUpdate:modelValue":l[64]||(l[64]=e=>H.value.formInfo.extInfo.workContent=e),label:ue("workContent","title"),name:`${e.prefix}_workContent`,required:te("workContent"),"is-view":e.isView,rules:[{validator:(...e)=>Ie(100,...e)}]},null,8,["modelValue","label","name","required","is-view","rules"])):p("",!0),re("chineseTaxResident")?(s(),m(i,{key:40,modelValue:H.value.formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":l[66]||(l[66]=e=>H.value.formInfo.extInfo.chineseTaxResident=e),label:ue("chineseTaxResident","title"),name:`${e.prefix}_taxResident`,required:te("chineseTaxResident")},{input:c((()=>[v(o,{modelValue:H.value.formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":l[65]||(l[65]=e=>H.value.formInfo.extInfo.chineseTaxResident=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ue("chineseTaxResident","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):p("",!0),re("taxResident")?(s(),m(n,{key:41,modelValue:H.value.formInfo.taxResident,"onUpdate:modelValue":l[67]||(l[67]=e=>H.value.formInfo.taxResident=e),"is-view":e.isView,label:ue("taxResident","title"),name:`${e.prefix}_benefitOrder`,"data-source":ue("taxResident","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:te("taxResident")},null,8,["modelValue","is-view","label","name","data-source","required"])):p("",!0),re("partTimeJob")?(s(),m(i,{key:42,modelValue:H.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":l[69]||(l[69]=e=>H.value.formInfo.extInfo.isPartTime=e),label:ue("partTimeJob","title"),name:`${e.prefix}_isPartTime`,required:te("partTimeJob")},{input:c((()=>[v(o,{modelValue:H.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":l[68]||(l[68]=e=>H.value.formInfo.extInfo.isPartTime=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ue("partTimeJob","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):p("",!0),re("benefitOrder")?(s(),m(n,{key:43,modelValue:H.value.formInfo.benefitOrder,"onUpdate:modelValue":l[70]||(l[70]=e=>H.value.formInfo.benefitOrder=e),label:ue("benefitOrder","title"),name:`${e.prefix}_benefitOrder`,"is-view":e.isView,"data-source":ue("benefitOrder","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:te("benefitOrder")},null,8,["modelValue","label","name","is-view","data-source","required"])):p("",!0),re("benefitRate")?(s(),m(i,{key:44,modelValue:H.value.formInfo.benefitRate,"onUpdate:modelValue":l[71]||(l[71]=e=>H.value.formInfo.benefitRate=e),required:te("benefitRate"),name:`${e.prefix}_benefitRate`,"is-view":e.isView,rules:[{validator:pe}],label:ue("benefitRate","title")},{extra:c((()=>[Y])),_:1},8,["modelValue","required","name","is-view","rules","label"])):p("",!0),I(a.$slots,"default")])):p("",!0)}}});const J={class:"page-info-wrapper"};e("_",a({props:{factorObject:null,formInfo:{default:()=>({})},isView:{type:Boolean,default:!1},sendSmsCode:{type:Function,default:(e,a)=>{}},titleCollection:{default:()=>({})},inputAlign:{default:"left"},needDesensitize:{type:Boolean,default:!1}},setup(e,{expose:a}){const l=e;C(),o();const r=i({}),d=i({extInfo:{},tenantOrderHolder:{extInfo:{}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL"}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),V=i(null),w=i([]),b=i([]);i([]),i([]),i([]),k({beneficiaryId:0,nextPage:"",currentAddress:null,isLoading:!0});const x=n((()=>{const e={INSURER:{},HOLDER:{}};return(r.value?.INSURER||[]).forEach((a=>{e.INSURER[a.code]=a})),(r.value?.HOLDER||[]).forEach((a=>{e.HOLDER[a.code]=a})),e})),y=(e,a)=>x.value?.[a]?.[e]?.isDisplay===q.YES,h=(e,a)=>x.value?.[a]?.[e].isMustInput===q.YES,g=(e,a,l)=>x.value?.[l]?.[e]?.[a]||"",U=(e,a)=>{const l=e;return Object.keys(l).forEach((e=>{a.includes(e)||(l[e]="")})),l};return a({validateForm:()=>new Promise(((e,a)=>{V.value?.validate().then((()=>{e(d.value)}),(()=>{a()}))}))}),t((()=>l.factorObject),(()=>{const e={BENEFICIARY:l.factorObject[3],INSURER:l.factorObject[2],HOLDER:l.factorObject[1]};r.value=e}),{immediate:!0,deep:!0}),t([()=>d.value.tenantOrderInsuredList[0].relationToHolder,()=>d.value.tenantOrderHolder],(([e],[a])=>{`${d.value.tenantOrderInsuredList[0].relationToHolder}`===N.SELF?Object.assign(d.value.tenantOrderInsuredList[0],d.value.tenantOrderHolder,{id:d.value.tenantOrderInsuredList[0].id,extInfo:{...d.value.tenantOrderHolder.extInfo,insureProvinceCode:d.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,insureCityCode:d.value.tenantOrderInsuredList[0].extInfo.insureCityCode,insureAreaCode:d.value.tenantOrderInsuredList[0].extInfo.insureAreaCode}}):e===a||l.isView||Object.assign(d.value.tenantOrderInsuredList[0],{...U(d.value?.tenantOrderInsuredList?.[0],["extInfo","relationToHolder","tenantOrderBeneficiaryList"]),extInfo:{}})}),{deep:!0}),t((()=>l.formInfo),(()=>{Object.keys(l.formInfo).length&&(d.value=l.formInfo)}),{deep:!0,immediate:!0}),(a,l)=>{const o=u("ProField"),i=u("ProCard"),n=u("ProRadioButton");u("ProSvg");const t=u("ProForm");return s(),f("div",J,[v(t,{ref_key:"formRef",ref:V,"show-error":"","show-error-message":!1,"input-align":e.inputAlign},{default:c((()=>[r.value.HOLDER?.length?(s(),m(i,{key:0,"show-line":!1,"show-divider":!1,title:e.titleCollection?.HOLDER},{default:c((()=>[v(Z,{images:w.value,"onUpdate:images":l[1]||(l[1]=e=>w.value=e),"form-info":d.value.tenantOrderHolder,"factor-list":r.value.HOLDER,prefix:"holder","is-view":e.isView,"need-desensitize":e.needDesensitize,"send-sms-code":e.sendSmsCode},{name:c((()=>[I(a.$slots,"holderName")])),default:c((()=>[y("gasNumberCollection","HOLDER")&&d.value.tenantOrderSubjectList?.[0]?.extInfo?(s(),m(o,{key:0,modelValue:d.value.tenantOrderSubjectList[0].extInfo.subjectRelatedUserId,"onUpdate:modelValue":l[0]||(l[0]=e=>d.value.tenantOrderSubjectList[0].extInfo.subjectRelatedUserId=e),label:g("gasNumberCollection","title","HOLDER"),name:"subjectRelatedUserId",required:h("gasNumberCollection","HOLDER"),"is-view":e.isView,maxlength:100},null,8,["modelValue","label","required","is-view"])):p("",!0)])),_:3},8,["images","form-info","factor-list","is-view","need-desensitize","send-sms-code"])])),_:3},8,["title"])):p("",!0),r.value.INSURER?.length?(s(),m(i,{key:1,"show-line":!1,"show-divider":!1,title:e.titleCollection?.INSURER},{default:c((()=>[y("relationToHolder","INSURER")?(s(),m(o,{key:0,modelValue:d.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":l[3]||(l[3]=e=>d.value.tenantOrderInsuredList[0].relationToHolder=e),class:"relation-holder",name:"insure_relationToHolder",required:h("relationToHolder","INSURER"),label:g("relationToHolder","title","INSURER")},{input:c((()=>[v(n,{modelValue:d.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":l[2]||(l[2]=e=>d.value.tenantOrderInsuredList[0].relationToHolder=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:g("relationToHolder","attributeValueList","INSURER")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required","label"])):p("",!0),e.isView||1!=+d.value.tenantOrderInsuredList[0].relationToHolder?(s(),m(Z,{key:1,images:b.value,"onUpdate:images":l[4]||(l[4]=e=>b.value=e),"form-info":d.value.tenantOrderInsuredList[0],"factor-list":r.value.INSURER||[],prefix:"insure","need-desensitize":e.needDesensitize,"send-sms-code":e.sendSmsCode,"is-view":e.isView},{name:c((()=>[I(a.$slots,"insurerName")])),_:3},8,["images","form-info","factor-list","need-desensitize","send-sms-code","is-view"])):p("",!0)])),_:3},8,["title"])):p("",!0),p("",!0)])),_:3},8,["input-align"])])}}})),e("n",(async(e,a)=>{const l=e;if(l.orderNo){const{extInfo:e,orderNo:a,tenantOrderInsuredList:o,tenantId:i}=l||{},{iseeBizNo:n}=e||{},{productCode:r}=o?.[0]?.tenantOrderProductList?.[0]||{},t=`${window.location.origin}/baseInsurance/orderDetail?orderNo=${a}&tenantId=${i}&iseeBizNo=${n}&productCode=${r}`;l.extInfo.redirectUrl=t}const{code:o,data:i}=await E(l);if("10000"===o){const{pageAction:l,message:o,data:n}=i.pageAction||{};a?.(n,l),l===A.ALERT&&g(o),l===A.JUMP_URL&&H(n?.paymentUrl),l===A.JUMP_ALERT&&U.confirm({title:"提示",message:"该被保人已存在一笔待支付的订单",confirmButtonText:"去支付"}).then((()=>{n.orderNo&&$.push(`/baseInsurance/orderDetail?orderNo=${n.orderNo}&tenantId=${e.tenantId}&iseeBizNo=${e.extInfo.iseeBizNo}&productCode=${e.productCode}`)}))}}))}}}))}();
