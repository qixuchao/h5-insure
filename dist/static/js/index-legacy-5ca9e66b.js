!function(){var e=document.createElement("style");e.innerHTML=".van-field--error .van-field__control--error .placeholder{color:var(--van-danger-color, var(--zaui-danger))}.van-cell{align-items:center}.van-cell .van-field__label{margin:unset;padding-right:.53333rem}.input-extra{margin-left:.33333rem;margin-top:.18667rem}.date-extra{padding-left:var(--zaui-card-border, .4rem);margin-left:var(--zaui-card-border, .4rem);border-left:1px solid #EEEFF4;margin-top:.21333rem;display:flex}.button-extra{padding-top:.05333rem}.sms-code{border:none;background:transparent}.van-cell:after{width:unset}.relation-holder{align-items:flex-start}.relation-holder .van-field__label{margin:.21333rem 0 .10667rem}.page-info-wrapper .van-cell .van-field__value{align-items:flex-start}.page-info-wrapper .com-card .com-card-wrap .body{padding:0}.page-info-wrapper .beneficiary-part .part-title{display:flex;align-items:center;justify-content:space-between;padding:0 var(--zaui-card-border, .4rem);background-color:var(--zaui-global-bg, #f2f5fc);height:1.2rem}.page-info-wrapper .beneficiary-part .part-title .title{font-size:.4rem;font-weight:600;color:#393d46}.page-info-wrapper .radio-item-wrapper{padding:0}.page-info-wrapper .radio-item-wrapper p{font-size:.4rem;color:#393d46;margin:.06667rem 0;word-break:break-all}.page-info-wrapper .radio-item-wrapper .name{font-weight:600;margin-right:.4rem}.page-info-wrapper .radio-item-wrapper .phone{font-weight:400}\n",document.head.appendChild(e),System.register(["./index-legacy-e396aba1.js","./infoCollection-legacy-924f7c3a.js","./relativeTime-legacy-c36db279.js","./validator-legacy-5e43cc69.js","./useDicData-legacy-e996c958.js","./pdfdist-legacy-d54716ed.js"],(function(e){"use strict";var a,l,o,i,n,r,t,u,d,s,f,m,v,c,p,I,V,b,w,y,x,h,C,g,k,R,U,T,O,_,L,E,q,S,A;return{setters:[function(e){a=e.d,l=e.G,o=e.a,i=e.r,n=e.x,r=e.$,t=e.a2,u=e.ap,d=e.a7,s=e.aq,f=e.ar,m=e.as,v=e.b,c=e.l,p=e.c,I=e.g,V=e.e,b=e.w,w=e.f,y=e.j,x=e.a8,h=e.ay,C=e.i,g=e.aJ,k=e.n,R=e.t,U=e.B,T=e.T,O=e.Y,_=e.u,L=e.z},function(e){E=e.R},function(e){q=e.r},function(e){S=e.v},function(e){A=e.u},function(){}],execute:function(){const D={key:0,class:"com-personal-wrapper"},$={class:"date-extra"},N=k("长期"),H=C("span",{class:"input-extra"},"万",-1),P=C("span",{class:"input-extra"},"万",-1),j={class:"button-extra"},B=C("span",{class:"input-extra"},"%",-1),M=a({props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]},sendSmsCode:{type:Function,default:(e,a)=>{}},needDesensitize:{type:Boolean,default:!1}},emits:["update:images"],setup(e,{emit:a}){const _=e;l();const{insurerCode:L=""}=o().query,M=A(`${L.toLocaleUpperCase()}_OCCUPATION`),z=A("NATIONAL_REGION_CODE"),F=i([]),Y=i(!1),Z=i(),G=i(),J=i({formInfo:_.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""}),K=i(!1),W=n((()=>K.value?(J.value.formInfo.mobile||"").replace(/^(.{3})(?:\d+)(.{4})$/,"$1****$2"):_.formInfo.mobile)),X=i(!1),Q=n((()=>X.value?(J.value.formInfo.certNo||"").replace(/^(.{6})(?:\d+)(.{2})$/,"$1**********$2"):_.formInfo.certNo));r.extend(q);const ee=i(2===_.formInfo.certEndType),ae=i(0),le=i("验证码"),oe=i(!1),ie=n((()=>{const e={};return _.factorList.forEach((a=>{e[a.code]=a})),e})),ne=(e,a)=>{J.value.formInfo[a]=e};n((()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(J.value.formInfo.mobile)));const re=e=>{"mobile"===e&&(K.value=!1),"certNo"===e&&(X.value=!1)},te=async()=>{ae.value>0||_.sendSmsCode({mobile:J.value.formInfo.mobile,type:_.prefix},(()=>{oe.value=!0,T({message:"短信发送成功，请查收"}),(()=>{if(ae.value>0)return;ae.value=60;const e=()=>{le.value=`${ae.value}s`,ae.value-=1};e();const a=setInterval((()=>{0===ae.value?(le.value="验证码",ae.value=0,clearInterval(a)):e()}),1e3)})()}))},ue=e=>{J.value.formInfo.certNo=e.personIdCard,J.value.formInfo.name=e.personName,J.value.formInfo.certEndDate=r(e.validDateEnd,"YYYYMMDD").toDate()},de=e=>ie.value&&ie.value[e]&&ie.value[e]?.isDisplay===O.YES,se=e=>ie.value&&ie.value[e]&&ie.value[e].isMustInput===O.YES,fe=(e,a)=>ie.value?.[e]?.[a]||"",me=n((()=>{if(!de("certType"))return J.value.formInfo.certType=+t.CERT,!1;const e=fe("certType","attributeValueList")||[];return 1!==e.length||e[0]?.code!==t.CERT||(J.value.formInfo.certType=+t.CERT,!1)})),ve=n((()=>fe("certType","attributeValueList")?.length>1?"证件号码":"insure"===_.prefix&&J.value.formInfo?.relationToHolder===E.CHILD?"身份证号(户口簿)":fe("certType","attributeValueList")?.[0].code===t.CERT?"身份证号":fe("certType","title"))),ce=(e,a)=>S(e)?"":"请输入正确的姓名",pe=n((()=>[t.CERT,t.HOUSE_HOLD].includes(`${J.value.formInfo.certType}`)?(Y.value=!0,[u.ID_CARD]):`${J.value.formInfo.certType}`===t.BIRTH?(Y.value=!0,[u.BIRTH]):`${J.value.formInfo.certType}`===t.PASSPORT?(Y.value=!1,[u.PASSPORT]):`${J.value.formInfo.certType}`===t.SOCIAL_CREDIT_CODE?(Y.value=!1,[u.SOCIAL_CREDIT_CODE]):`${J.value.formInfo.certType}`===t.OTHER?(Y.value=!1,[u.OTHER]):(Y.value=!0,[u.ID_CARD]))),Ie=(e,a)=>se("attachment")?2===J.value.formInfo.certEndType||J.value.formInfo.certEndDate?"":"请选择有效期至":"",Ve=(e,a)=>/^\d{1,10}(\.\d{1,2})?$/.test(e)?"":"年收入最多录入10位数字",be=(e,a)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(e)?"":"收益比例只能填写1-100的正整数",we=(e,a)=>e.length>=5&&e.length<=99?"":"最多99个字符最少5个字符",ye=(e,a,l)=>a.length>e?`最大不能超过${e}个字符`:"",xe=(e,a)=>{if(!de("nationality"))return"";if("CHN"===J.value.formInfo?.extInfo?.nationalityCode){if(![t.CERT,t.HOUSE_HOLD,t.BIRTH,t.MILITARY_CARD].includes(`${e}`))return"国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证"}else if(["HKG","MAC"].includes(J.value.formInfo?.extInfo?.nationalityCode)){if(![t.HK_MACAO_RESIDENCE_PERMIT,t.HONGKONG_MACAO].includes(`${e}`))return"国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证"}else if("TWN"===J.value.formInfo?.extInfo?.nationalityCode){if(![t.TAIWAN_RESIDENCE_PERMIT,t.TAIWAN_TRAVEL].includes(`${e}`))return"国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证"}else if(![t.PASSPORT,t.FOREIGN_PERMANENT].includes(`${e}`))return"国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证";return r().year()-r(J.value.formInfo?.birthday).year()>2&&e===t.BIRTH?"年龄大于等于2周岁时，证件类型不能选择出生证":""},he=e=>Array.isArray(e)&&2===e.length&&e[0]&&e[1]?"":"请上传身份证正反面照片";return d((()=>ee.value),(e=>{e?(J.value.formInfo.certEndType=2,J.value.formInfo.certEndDate=""):J.value.formInfo.certEndType=1}),{immediate:!0}),d((()=>J.value.formInfo.mobile),(()=>{J.value.formInfo.mobile=J.value.formInfo.mobile?.replace(/[\u4e00-\u9fa5/\s+/]|[^0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),d([()=>J.value.formInfo.certNo,()=>J.value.formInfo.mobile],(()=>{J.value.formInfo.certNo=J.value.formInfo.certNo?.replace(/[\u4e00-\u9fa5/\s+/]/g,""),J.value.formInfo.mobile=J.value.formInfo.mobile?.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),d((()=>_.needDesensitize),((e=!1)=>{K.value=e,X.value=e}),{immediate:!0}),d((()=>J.value.formInfo.certType),(e=>{[t.CERT,t.HOUSE_HOLD].includes(e)?Y.value=!0:Y.value=!1}),{deep:!0,immediate:!0}),d([()=>J.value.formInfo.certNo,()=>J.value.formInfo.certType],(([e])=>{[t.CERT,t.BIRTH].includes(`${J.value.formInfo.certType}`)&&(s(e)?(J.value.formInfo.gender=+f(e),J.value.formInfo.birthday=r(new Date(m(e))).format("YYYY-MM-DD")):(J.value.formInfo.gender=null,J.value.formInfo.birthday=""))}),{deep:!0,immediate:!0}),d((()=>_.images),(e=>{F.value=e}),{immediate:!0}),d((()=>_.formInfo),(()=>{J.value.formInfo=_.formInfo}),{deep:!0,immediate:!0}),d(F,(e=>{a("update:images",e)}),{deep:!0}),(a,l)=>{const o=v("ProRadioButton"),i=v("ProField"),n=v("ProPicker"),r=v("ProIDCardUpload"),t=v("ProImageUpload"),d=v("ProDatePicker"),s=v("van-checkbox"),f=v("ProCascader"),m=v("van-button");return Object.keys(c(ie)).length?(p(),I("div",D,[de("insuredBeneficiaryType")?(p(),V(i,{key:0,modelValue:J.value.formInfo.insuredBeneficiaryType,"onUpdate:modelValue":l[1]||(l[1]=e=>J.value.formInfo.insuredBeneficiaryType=e),label:fe("insuredBeneficiaryType","title"),name:"insuredBeneficiaryType"},{input:b((()=>[w(o,{modelValue:J.value.formInfo.insuredBeneficiaryType,"onUpdate:modelValue":l[0]||(l[0]=e=>J.value.formInfo.insuredBeneficiaryType=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("insuredBeneficiaryType","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):y("",!0),de("insuredRelation")?(p(),V(i,{key:1,modelValue:J.value.formInfo.insuredRelation,"onUpdate:modelValue":l[3]||(l[3]=e=>J.value.formInfo.insuredRelation=e),label:fe("insuredRelation","title"),name:"insuredRelation"},{input:b((()=>[w(o,{modelValue:J.value.formInfo.insuredRelation,"onUpdate:modelValue":l[2]||(l[2]=e=>J.value.formInfo.insuredRelation=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("insuredRelation","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):y("",!0),de("name")?(p(),V(i,{key:2,modelValue:J.value.formInfo.name,"onUpdate:modelValue":l[4]||(l[4]=e=>J.value.formInfo.name=e),label:fe("name","title"),name:`${e.prefix}_name`,"is-view":e.isView,required:se("name"),rules:[{validator:ce}]},{"right-icon":b((()=>[x(a.$slots,"name")])),_:3},8,["modelValue","label","name","is-view","required","rules"])):y("",!0),de("sex")?(p(),V(i,{key:3,modelValue:J.value.formInfo.gender,"onUpdate:modelValue":l[6]||(l[6]=e=>J.value.formInfo.gender=e),required:se("sex"),label:fe("sex","title"),name:`${e.prefix}_gender`,"is-view":Y.value},{input:b((()=>[w(o,{modelValue:J.value.formInfo.gender,"onUpdate:modelValue":l[5]||(l[5]=e=>J.value.formInfo.gender=e),disabled:Y.value,"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("sex","attributeValueList")||[]},null,8,["modelValue","disabled","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):y("",!0),c(me)?(p(),V(n,{key:4,modelValue:J.value.formInfo.certType,"onUpdate:modelValue":l[7]||(l[7]=e=>J.value.formInfo.certType=e),label:fe("certType","title"),name:`${e.prefix}_certType`,"data-source":fe("certType","attributeValueList"),mapping:{label:"value",value:"code",children:"child"},required:se("certType"),rules:[{validator:xe}],"is-view":e.isView},null,8,["modelValue","label","name","data-source","required","rules","is-view"])):y("",!0),de("certImage")&&J.value.formInfo.certType+""=="1"?(p(),V(i,{key:5,label:"身份证上传",block:"",required:se("certImage"),rules:[{validator:he}],name:`${e.prefix}_idCard`},{input:b((()=>[w(r,{modelValue:F.value,"onUpdate:modelValue":l[8]||(l[8]=e=>F.value=e),"is-view":e.isView,onOnOCR:ue},null,8,["modelValue","is-view"])])),_:1},8,["required","rules","name"])):y("",!0),de("certImage")&&J.value.formInfo.certType&&J.value.formInfo.certType+""!="1"?(p(),V(i,{key:6,label:fe("certImage","title"),block:"",required:se("certImage")},{input:b((()=>[w(t,{modelValue:F.value,"onUpdate:modelValue":l[9]||(l[9]=e=>F.value=e),"is-view":e.isView,"max-count":1},null,8,["modelValue","is-view"])])),_:1},8,["label","required"])):y("",!0),de("certNo")?(p(),V(i,{key:7,ref_key:"certNoRef",ref:Z,modelValue:c(Q),"onUpdate:modelValue":[l[10]||(l[10]=e=>h(Q)?Q.value=e:null),l[12]||(l[12]=e=>ne(e,"certNo"))],label:c(ve),name:`${e.prefix}_certNo`,required:se("certNo"),maxlength:18,"is-view":e.isView,"validate-type":X.value?void 0:c(pe),onFocus:l[11]||(l[11]=e=>re("certNo"))},null,8,["modelValue","label","name","required","is-view","validate-type"])):y("",!0),de("birthDate")?(p(),V(d,{key:8,modelValue:J.value.formInfo.birthday,"onUpdate:modelValue":l[13]||(l[13]=e=>J.value.formInfo.birthday=e),label:fe("birthDate","title"),name:`${e.prefix}_birthday`,min:J.value.birth.min,max:J.value.birth.max,type:"date","is-view":Y.value||e.isView,required:se("birthDate")},null,8,["modelValue","label","name","min","max","is-view","required"])):y("",!0),de("certExpiry")?(p(),V(d,{key:9,modelValue:J.value.formInfo.certEndDate,"onUpdate:modelValue":l[15]||(l[15]=e=>J.value.formInfo.certEndDate=e),label:fe("certExpiry","title"),name:`${e.prefix}_certEndDate`,type:"date",min:J.value.certEndDate.min,max:J.value.certEndDate.max,"is-view":ee.value||e.isView,read:"",rules:[{validator:Ie}]},{extra:b((()=>[C("div",$,[w(s,{modelValue:ee.value,"onUpdate:modelValue":l[14]||(l[14]=e=>ee.value=e),"icon-size":16,disabled:e.isView},{default:b((()=>[N])),_:1},8,["modelValue","disabled"])])])),_:1},8,["modelValue","label","name","min","max","is-view","rules"])):y("",!0),de("age")?(p(),V(i,{key:10,modelValue:J.value.formInfo.name,"onUpdate:modelValue":l[16]||(l[16]=e=>J.value.formInfo.name=e),label:fe("age","title"),name:`${e.prefix}_age`,"is-view":e.isView,required:se("age")},null,8,["modelValue","label","name","is-view","required"])):y("",!0),de("residence")?(p(),V(f,{key:11,modelValue:J.value.formInfo.extInfo.provinceCode,"onUpdate:modelValue":l[17]||(l[17]=e=>J.value.formInfo.extInfo.provinceCode=e),field1:J.value.formInfo.extInfo.provinceCode,"onUpdate:field1":l[18]||(l[18]=e=>J.value.formInfo.extInfo.provinceCode=e),field2:J.value.formInfo.extInfo.cityCode,"onUpdate:field2":l[19]||(l[19]=e=>J.value.formInfo.extInfo.cityCode=e),field3:J.value.formInfo.extInfo.areaCode,"onUpdate:field3":l[20]||(l[20]=e=>J.value.formInfo.extInfo.areaCode=e),label:fe("residence","title"),name:`${e.prefix}_provinceCode`,"is-link":"","is-view":e.isView,required:se("residence"),"data-source":c(z),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):y("",!0),de("social")&&"insure"!==e.prefix?(p(),V(i,{key:12,modelValue:J.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[22]||(l[22]=e=>J.value.formInfo.extInfo.hasSocialInsurance=e),label:fe("social","title"),name:`${e.prefix}_hasSocialInsurance`,required:se("social")},{input:b((()=>[w(o,{modelValue:J.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[21]||(l[21]=e=>J.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("social","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):y("",!0),de("height")?(p(),V(i,{key:13,modelValue:J.value.formInfo.name,"onUpdate:modelValue":l[23]||(l[23]=e=>J.value.formInfo.name=e),label:fe("height","title"),"is-view":e.isView,name:`${e.prefix}_height`,required:se("height")},null,8,["modelValue","label","is-view","name","required"])):y("",!0),de("weight")?(p(),V(i,{key:14,modelValue:J.value.formInfo.name,"onUpdate:modelValue":l[24]||(l[24]=e=>J.value.formInfo.name=e),label:fe("weight","title"),name:`${e.prefix}_weight`,"is-view":e.isView,required:se("weight")},null,8,["modelValue","label","name","is-view","required"])):y("",!0),de("BMI")?(p(),V(i,{key:15,modelValue:J.value.formInfo.name,"onUpdate:modelValue":l[25]||(l[25]=e=>J.value.formInfo.name=e),label:fe("BMI","title"),name:`${e.prefix}_BMI`,"is-view":e.isView,required:se("BMI")},null,8,["modelValue","label","name","is-view","required"])):y("",!0),de("insuredRiskManagementLevel")?(p(),V(i,{key:16,modelValue:J.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[27]||(l[27]=e=>J.value.formInfo.extInfo.hasSocialInsurance=e),label:fe("insuredRiskManagementLevel","title"),name:`${e.prefix}_hasSocialInsurance`,required:se("insuredRiskManagementLevel")},{input:b((()=>[w(o,{modelValue:J.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[26]||(l[26]=e=>J.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("insuredRiskManagementLevel","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):y("",!0),de("purchaseOtherInsurance")?(p(),V(i,{key:17,modelValue:J.value.formInfo.extInfo.purchaseOtherInsurance,"onUpdate:modelValue":l[29]||(l[29]=e=>J.value.formInfo.extInfo.purchaseOtherInsurance=e),label:fe("purchaseOtherInsurance","title"),name:`${e.prefix}_purchaseOtherInsurance`,required:se("purchaseOtherInsurance")},{input:b((()=>[w(o,{modelValue:J.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":l[28]||(l[28]=e=>J.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("purchaseOtherInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):y("",!0),de("injuryInsurance")?(p(),V(i,{key:18,modelValue:J.value.formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":l[31]||(l[31]=e=>J.value.formInfo.extInfo.injuryInsurance=e),label:fe("injuryInsurance","title"),name:`${e.prefix}_hasSocialInsurance`,required:se("injuryInsurance")},{input:b((()=>[w(o,{modelValue:J.value.formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":l[30]||(l[30]=e=>J.value.formInfo.extInfo.injuryInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("injuryInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):y("",!0),de("insureArea")?(p(),V(f,{key:19,label:fe("insureArea","title"),name:"insureAreaCode","is-link":"","is-view":e.isView,required:se("insureArea"),"data-source":c(z),mapping:{label:"name",value:"code",children:"children"}},null,8,["label","is-view","required","data-source"])):y("",!0),de("occupation")?(p(),V(f,{key:20,modelValue:J.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:modelValue":l[32]||(l[32]=e=>J.value.formInfo.extInfo.occupationCodeList[0]=e),field0:J.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:field0":l[33]||(l[33]=e=>J.value.formInfo.extInfo.occupationCodeList[0]=e),field1:J.value.formInfo.extInfo.occupationCodeList[1],"onUpdate:field1":l[34]||(l[34]=e=>J.value.formInfo.extInfo.occupationCodeList[1]=e),field2:J.value.formInfo.extInfo.occupationCodeList[2],"onUpdate:field2":l[35]||(l[35]=e=>J.value.formInfo.extInfo.occupationCodeList[2]=e),label:fe("occupation","title"),name:`${e.prefix}_occupationCodeList`,"is-view":e.isView,required:se("occupation"),"data-source":c(M),mapping:{label:"value",value:"code",children:"children"},"is-link":""},null,8,["modelValue","field0","field1","field2","label","name","is-view","required","data-source"])):y("",!0),de("personalAnnualIncome")?(p(),V(i,{key:21,modelValue:J.value.formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":l[36]||(l[36]=e=>J.value.formInfo.extInfo.personalAnnualIncome=e),label:fe("personalAnnualIncome","title"),name:`${e.prefix}_personalAnnualIncome`,required:se("personalAnnualIncome"),"is-view":e.isView,rules:[{validator:Ve}]},{extra:b((()=>[H])),_:1},8,["modelValue","label","name","required","is-view","rules"])):y("",!0),de("familyAnnualIncome")?(p(),V(i,{key:22,modelValue:J.value.formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":l[37]||(l[37]=e=>J.value.formInfo.extInfo.familyAnnualIncome=e),label:fe("familyAnnualIncome","title"),name:`${e.prefix}_familyAnnualIncome`,"is-view":e.isView,rules:[{validator:Ve}],required:se("familyAnnualIncome")},{extra:b((()=>[P])),_:1},8,["modelValue","label","name","is-view","rules","required"])):y("",!0),de("country")?(p(),V(n,{key:23,modelValue:J.value.formInfo.extInfo.nationalityCode,"onUpdate:modelValue":l[38]||(l[38]=e=>J.value.formInfo.extInfo.nationalityCode=e),label:fe("country","title"),name:`${e.prefix}_nationalityCode`,"data-source":fe("country","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:se("country"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):y("",!0),de("hasUsCard")?(p(),V(i,{key:24,modelValue:J.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":l[40]||(l[40]=e=>J.value.formInfo.extInfo.hasUsCard=e),label:fe("hasUsCard","title"),name:`${e.prefix}_hasUsCard`,required:se("hasUsCard")},{input:b((()=>[w(o,{modelValue:J.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":l[39]||(l[39]=e=>J.value.formInfo.extInfo.hasUsCard=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("hasUsCard","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):y("",!0),de("marritalStatus")?(p(),V(n,{key:25,modelValue:J.value.formInfo.extInfo.marriageStatus,"onUpdate:modelValue":l[41]||(l[41]=e=>J.value.formInfo.extInfo.marriageStatus=e),label:fe("marritalStatus","title"),name:`${e.prefix}_marriageStatus`,"data-source":fe("marritalStatus","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},"is-link":"","is-view":e.isView,required:se("marritalStatus")},null,8,["modelValue","label","name","data-source","is-view","required"])):y("",!0),de("degree")?(p(),V(n,{key:26,modelValue:J.value.formInfo.extInfo.educationDegree,"onUpdate:modelValue":l[42]||(l[42]=e=>J.value.formInfo.extInfo.educationDegree=e),label:fe("degree","title"),name:`${e.prefix}_educationDegree`,"data-source":fe("degree","attributeValueList")||[],mapping:{label:"name",value:"code",children:"child"},required:se("degree"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):y("",!0),de("mobile")?(p(),V(i,{key:27,ref_key:"phoneRef",ref:G,modelValue:c(W),"onUpdate:modelValue":[l[43]||(l[43]=e=>h(W)?W.value=e:null),l[45]||(l[45]=e=>ne(e,"mobile"))],label:fe("mobile","title"),name:`${e.prefix}_mobile`,maxlength:11,"is-view":e.isView,required:se("mobile"),"validate-type":K.value?void 0:[c(u).PHONE],onFocus:l[44]||(l[44]=e=>re("mobile"))},null,8,["modelValue","label","name","is-view","required","validate-type"])):y("",!0),de("verificationCode")?(p(),V(i,{key:28,modelValue:J.value.formInfo.verificationCode,"onUpdate:modelValue":l[46]||(l[46]=e=>J.value.formInfo.verificationCode=e),label:fe("verificationCode","title"),name:`${e.prefix}_verificationCode`,type:"digit",maxlength:6,"is-view":e.isView,required:se("verificationCode")},g({_:2},[e.isView?void 0:{name:"extra",fn:b((()=>[C("div",j,[w(m,{class:U(["sms-code",{"count-down":ae.value>0}]),size:"small",plain:"",type:"primary",onClick:te},{default:b((()=>[k(R(le.value),1)])),_:1},8,["class"])])]))}]),1032,["modelValue","label","name","is-view","required"])):y("",!0),de("isSmoke")?(p(),V(i,{key:29,modelValue:J.value.formInfo.isSmoke,"onUpdate:modelValue":l[48]||(l[48]=e=>J.value.formInfo.isSmoke=e),required:se("isSmoke"),label:fe("isSmoke","title"),name:`${e.prefix}_isSmoke`,"is-view":Y.value},{input:b((()=>[w(o,{modelValue:J.value.formInfo.isSmoke,"onUpdate:modelValue":l[47]||(l[47]=e=>J.value.formInfo.isSmoke=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("isSmoke","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):y("",!0),de("contactNo")?(p(),V(i,{key:30,modelValue:J.value.formInfo.contactNo,"onUpdate:modelValue":l[49]||(l[49]=e=>J.value.formInfo.contactNo=e),label:fe("contactNo","title"),name:`${e.prefix}_contactNo`,"is-view":e.isView,required:se("contactNo")},null,8,["modelValue","label","name","is-view","required"])):y("",!0),de("email")?(p(),V(i,{key:31,modelValue:J.value.formInfo.email,"onUpdate:modelValue":l[50]||(l[50]=e=>J.value.formInfo.email=e),label:fe("email","title"),name:`${e.prefix}_email`,"is-view":e.isView,required:se("email"),"validate-type":[c(u).EMAIL]},null,8,["modelValue","label","name","is-view","required","validate-type"])):y("",!0),de("homeAddress")?(p(),V(f,{key:32,modelValue:J.value.formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":l[51]||(l[51]=e=>J.value.formInfo.extInfo.familyAreaCode=e),field1:J.value.formInfo.extInfo.familyProvinceCode,"onUpdate:field1":l[52]||(l[52]=e=>J.value.formInfo.extInfo.familyProvinceCode=e),field2:J.value.formInfo.extInfo.familyCityCode,"onUpdate:field2":l[53]||(l[53]=e=>J.value.formInfo.extInfo.familyCityCode=e),field3:J.value.formInfo.extInfo.familyAreaCode,"onUpdate:field3":l[54]||(l[54]=e=>J.value.formInfo.extInfo.familyAreaCode=e),label:fe("homeAddress","title"),name:`${e.prefix}_familyProvinceCode`,"is-link":"","is-view":e.isView,required:se("homeAddress"),"data-source":c(z),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):y("",!0),de("homeAddressDetail")?(p(),V(i,{key:33,modelValue:J.value.formInfo.extInfo.familyAddress,"onUpdate:modelValue":l[55]||(l[55]=e=>J.value.formInfo.extInfo.familyAddress=e),label:fe("homeAddressDetail","title"),name:`${e.prefix}_familyAddress`,"is-view":e.isView,maxlength:99,rules:[{validator:we}],required:se("homeAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):y("",!0),de("homePostalCode")?(p(),V(i,{key:34,modelValue:J.value.formInfo.extInfo.familyZipCode,"onUpdate:modelValue":l[56]||(l[56]=e=>J.value.formInfo.extInfo.familyZipCode=e),label:fe("homePostalCode","title"),name:`${e.prefix}_familyZipCode`,"is-view":e.isView,required:se("homePostalCode"),"validate-type":[c(u).ZIP_CODE]},null,8,["modelValue","label","name","is-view","required","validate-type"])):y("",!0),de("workAddress")?(p(),V(f,{key:35,modelValue:J.value.formInfo.extInfo.workAreaCode,"onUpdate:modelValue":l[57]||(l[57]=e=>J.value.formInfo.extInfo.workAreaCode=e),field1:J.value.formInfo.extInfo.workProvinceCode,"onUpdate:field1":l[58]||(l[58]=e=>J.value.formInfo.extInfo.workProvinceCode=e),field2:J.value.formInfo.extInfo.workCityCode,"onUpdate:field2":l[59]||(l[59]=e=>J.value.formInfo.extInfo.workCityCode=e),field3:J.value.formInfo.extInfo.workAreaCode,"onUpdate:field3":l[60]||(l[60]=e=>J.value.formInfo.extInfo.workAreaCode=e),label:fe("workAddress","title"),name:`${e.prefix}_workProvinceCode`,"is-link":"","is-view":e.isView,required:se("workAddress"),"data-source":c(z),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):y("",!0),de("workAddressDetail")?(p(),V(i,{key:36,modelValue:J.value.formInfo.extInfo.workAddress,"onUpdate:modelValue":l[61]||(l[61]=e=>J.value.formInfo.extInfo.workAddress=e),label:fe("workAddressDetail","title"),name:`${e.prefix}_workAddress`,"is-view":e.isView,rules:[{validator:we}],required:se("workAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):y("",!0),de("workPostalCode")?(p(),V(i,{key:37,modelValue:J.value.formInfo.extInfo.workZipCode,"onUpdate:modelValue":l[62]||(l[62]=e=>J.value.formInfo.extInfo.workZipCode=e),label:fe("workPostalCode","title"),required:se("workZipCode"),name:`${e.prefix}_workPostCode`,"is-view":e.isView,"validate-type":[c(u).ZIP_CODE]},null,8,["modelValue","label","required","name","is-view","validate-type"])):y("",!0),de("companyName")?(p(),V(i,{key:38,modelValue:J.value.formInfo.extInfo.workStation,"onUpdate:modelValue":l[63]||(l[63]=e=>J.value.formInfo.extInfo.workStation=e),label:fe("companyName","title"),name:`${e.prefix}_workPostCode`,"is-view":e.isView,rules:[{validator:(...e)=>ye(20,...e)}],required:se("companyName")},null,8,["modelValue","label","name","is-view","rules","required"])):y("",!0),de("workContent")?(p(),V(i,{key:39,modelValue:J.value.formInfo.extInfo.workContent,"onUpdate:modelValue":l[64]||(l[64]=e=>J.value.formInfo.extInfo.workContent=e),label:fe("workContent","title"),name:`${e.prefix}_workContent`,required:se("workContent"),"is-view":e.isView,rules:[{validator:(...e)=>ye(100,...e)}]},null,8,["modelValue","label","name","required","is-view","rules"])):y("",!0),de("chineseTaxResident")?(p(),V(i,{key:40,modelValue:J.value.formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":l[66]||(l[66]=e=>J.value.formInfo.extInfo.chineseTaxResident=e),label:fe("chineseTaxResident","title"),name:`${e.prefix}_taxResident`,required:se("chineseTaxResident")},{input:b((()=>[w(o,{modelValue:J.value.formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":l[65]||(l[65]=e=>J.value.formInfo.extInfo.chineseTaxResident=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("chineseTaxResident","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):y("",!0),de("taxResident")?(p(),V(n,{key:41,modelValue:J.value.formInfo.taxResident,"onUpdate:modelValue":l[67]||(l[67]=e=>J.value.formInfo.taxResident=e),"is-view":e.isView,label:fe("taxResident","title"),name:`${e.prefix}_benefitOrder`,"data-source":fe("taxResident","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:se("taxResident")},null,8,["modelValue","is-view","label","name","data-source","required"])):y("",!0),de("partTimeJob")?(p(),V(i,{key:42,modelValue:J.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":l[69]||(l[69]=e=>J.value.formInfo.extInfo.isPartTime=e),label:fe("partTimeJob","title"),name:`${e.prefix}_isPartTime`,required:se("partTimeJob")},{input:b((()=>[w(o,{modelValue:J.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":l[68]||(l[68]=e=>J.value.formInfo.extInfo.isPartTime=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:fe("partTimeJob","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):y("",!0),de("benefitOrder")?(p(),V(n,{key:43,modelValue:J.value.formInfo.benefitOrder,"onUpdate:modelValue":l[70]||(l[70]=e=>J.value.formInfo.benefitOrder=e),label:fe("benefitOrder","title"),name:`${e.prefix}_benefitOrder`,"is-view":e.isView,"data-source":fe("benefitOrder","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:se("benefitOrder")},null,8,["modelValue","label","name","is-view","data-source","required"])):y("",!0),de("benefitRate")?(p(),V(i,{key:44,modelValue:J.value.formInfo.benefitRate,"onUpdate:modelValue":l[71]||(l[71]=e=>J.value.formInfo.benefitRate=e),required:se("benefitRate"),name:`${e.prefix}_benefitRate`,"is-view":e.isView,rules:[{validator:be}],label:fe("benefitRate","title")},{extra:b((()=>[B])),_:1},8,["modelValue","required","name","is-view","rules","label"])):y("",!0),x(a.$slots,"default")])):y("",!0)}}});const z={class:"page-info-wrapper"};e("default",a({props:{factorObject:null,formInfo:{default:()=>({})},isView:{type:Boolean,default:!1},sendSmsCode:{type:Function,default:(e,a)=>{}},titleCollection:{default:()=>({})},inputAlign:{default:"left"},needDesensitize:{type:Boolean,default:!1}},setup(e,{expose:a}){const l=e;_(),o();const r=i({}),t=i({extInfo:{},tenantOrderHolder:{extInfo:{occupationCodeList:[]}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",subjectNo:""}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),u=i(null),s=i([]),f=i([]);i([]),i([]),i([]),L({beneficiaryId:0,nextPage:"",currentAddress:null,isLoading:!0});const m=n((()=>{const e={INSURER:{},HOLDER:{}};return(r.value?.INSURER||[]).forEach((a=>{e.INSURER[a.code]=a})),(r.value?.HOLDER||[]).forEach((a=>{e.HOLDER[a.code]=a})),e})),c=(e,a)=>m.value?.[a]?.[e]?.isDisplay===O.YES,h=(e,a)=>m.value?.[a]?.[e].isMustInput===O.YES,C=(e,a,l)=>m.value?.[l]?.[e]?.[a]||"",g=(e,a)=>{const l=e;return Object.keys(l).forEach((e=>{a.includes(e)||(l[e]="")})),l};return a({validateForm:e=>new Promise(((a,l)=>{u.value?.validate(e).then((()=>{a(t.value)}),(()=>{l()}))}))}),d((()=>l.factorObject),(()=>{const e={BENEFICIARY:l.factorObject[3],INSURER:l.factorObject[2],HOLDER:l.factorObject[1]};r.value=e}),{immediate:!0,deep:!0}),d([()=>t.value.tenantOrderInsuredList[0].relationToHolder,()=>t.value.tenantOrderHolder],(([e],[a])=>{`${t.value.tenantOrderInsuredList[0].relationToHolder}`===E.SELF?(Object.assign(t.value.tenantOrderInsuredList[0],{...g(t.value?.tenantOrderInsuredList?.[0],["extInfo","relationToHolder","tenantOrderBeneficiaryList","tenantOrderProductList"]),extInfo:{occupationCodeList:[]}}),Object.assign(t.value.tenantOrderInsuredList[0],t.value.tenantOrderHolder,{id:t.value.tenantOrderInsuredList[0].id,extInfo:{...t.value.tenantOrderHolder.extInfo,insureProvinceCode:t.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,insureCityCode:t.value.tenantOrderInsuredList[0].extInfo.insureCityCode,insureAreaCode:t.value.tenantOrderInsuredList[0].extInfo.insureAreaCode}})):e===a||l.isView||Object.assign(t.value.tenantOrderInsuredList[0],{...g(t.value?.tenantOrderInsuredList?.[0],["extInfo","relationToHolder","tenantOrderBeneficiaryList","tenantOrderProductList"]),extInfo:{occupationCodeList:[]}})}),{deep:!0}),d((()=>l.formInfo),(()=>{Object.keys(l.formInfo).length&&(t.value=l.formInfo)}),{deep:!0,immediate:!0}),(a,l)=>{const o=v("ProField"),i=v("ProCard"),n=v("ProRadioButton");v("ProSvg");const d=v("ProForm");return p(),I("div",z,[w(d,{ref_key:"formRef",ref:u,"show-error":"","show-error-message":!1,"input-align":e.inputAlign},{default:b((()=>[r.value.HOLDER?.length?(p(),V(i,{key:0,"show-line":!1,"show-divider":!1,title:e.titleCollection?.HOLDER},{default:b((()=>[w(M,{images:s.value,"onUpdate:images":l[1]||(l[1]=e=>s.value=e),"form-info":t.value.tenantOrderHolder,"factor-list":r.value.HOLDER,prefix:"holder","is-view":e.isView,"need-desensitize":e.needDesensitize,"send-sms-code":e.sendSmsCode},{name:b((()=>[x(a.$slots,"holderName")])),default:b((()=>[c("gasNumberCollection","HOLDER")&&t.value.tenantOrderSubjectList?.[0]?.extInfo?(p(),V(o,{key:0,modelValue:t.value.tenantOrderSubjectList[0].subjectNo,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value.tenantOrderSubjectList[0].subjectNo=e),label:C("gasNumberCollection","title","HOLDER"),name:"subjectNo",required:h("gasNumberCollection","HOLDER"),"is-view":e.isView,maxlength:100},null,8,["modelValue","label","required","is-view"])):y("",!0)])),_:3},8,["images","form-info","factor-list","is-view","need-desensitize","send-sms-code"])])),_:3},8,["title"])):y("",!0),r.value.INSURER?.length?(p(),V(i,{key:1,"show-line":!1,"show-divider":!1,title:e.titleCollection?.INSURER},{default:b((()=>[c("relationToHolder","INSURER")?(p(),V(o,{key:0,modelValue:t.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":l[3]||(l[3]=e=>t.value.tenantOrderInsuredList[0].relationToHolder=e),class:"relation-holder",name:"insure_relationToHolder",required:h("relationToHolder","INSURER"),label:C("relationToHolder","title","INSURER")},{input:b((()=>[w(n,{modelValue:t.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":l[2]||(l[2]=e=>t.value.tenantOrderInsuredList[0].relationToHolder=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:C("relationToHolder","attributeValueList","INSURER")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required","label"])):y("",!0),e.isView||1!=+t.value.tenantOrderInsuredList[0].relationToHolder?(p(),V(M,{key:1,images:f.value,"onUpdate:images":l[4]||(l[4]=e=>f.value=e),"form-info":t.value.tenantOrderInsuredList[0],"factor-list":r.value.INSURER||[],prefix:"insure","need-desensitize":e.needDesensitize,"send-sms-code":e.sendSmsCode,"is-view":e.isView},{name:b((()=>[x(a.$slots,"insurerName")])),_:3},8,["images","form-info","factor-list","need-desensitize","send-sms-code","is-view"])):y("",!0),c("social","INSURER")?(p(),V(o,{key:2,modelValue:t.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance,"onUpdate:modelValue":l[6]||(l[6]=e=>t.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance=e),label:C("social","title","INSURER"),name:"insure_hasSocialInsurance",required:h("social","INSURER")},{input:b((()=>[w(n,{modelValue:t.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance,"onUpdate:modelValue":l[5]||(l[5]=e=>t.value.tenantOrderInsuredList[0].extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:C("social","attributeValueList","INSURER")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","required"])):y("",!0)])),_:3},8,["title"])):y("",!0),y("",!0)])),_:3},8,["input-align"])])}}}))}}}))}();
