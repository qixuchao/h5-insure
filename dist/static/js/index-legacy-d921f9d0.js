!function(){var e=document.createElement("style");e.innerHTML=".input-extra{margin-left:.33333rem;margin-top:.18667rem}.date-extra{padding-left:var(--zaui-card-border, .4rem);margin-left:var(--zaui-card-border, .4rem);border-left:1px solid #EEEFF4;margin-top:.21333rem;display:flex}\n",document.head.appendChild(e),System.register(["./vendor-legacy-92a8f610.js","./index-legacy-8f1d7f91.js","./useDicData-legacy-d216e398.js","./infoCollection-legacy-463c6cf6.js"],(function(e){"use strict";var a,o,l,r,n,d,i,t,u,f,m,s,c,p,I,v,y,x,V,C,h,b,k,U,w,_,T,q,A,E,D;return{setters:[function(e){e.ao,a=e.g,o=e.Q,l=e.O,r=e.E,n=e.d,d=e.y,i=e._,t=e.r,u=e.A,f=e.j,m=e.n,s=e.k,c=e.m,p=e.p,I=e.t,v=e.z,y=e.C},function(e){x=e.C,V=e.V,C=e.G,h=e.H,b=e.I,k=e.Y,U=e.J,w=e.K},function(e){_=e.u},function(e){T=e.c,q=e.M,A=e.T,E=e.d,D=e.e}],execute:function(){var g={exports:{}};g.exports=function(e,a,o){e=e||{};var l=a.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function n(e,a,o,r){return l.fromToBase(e,a,o,r)}o.en.relativeTime=r,l.fromToBase=function(a,l,n,d,i){for(var t,u,f,m=n.$locale().relativeTime||r,s=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],c=s.length,p=0;p<c;p+=1){var I=s[p];I.d&&(t=d?o(a).diff(n,I.d,!0):n.diff(a,I.d,!0));var v=(e.rounding||Math.round)(Math.abs(t));if(f=t>0,v<=I.r||!I.r){v<=1&&p>0&&(I=s[p-1]);var y=m[I.l];i&&(v=i(""+v)),u="string"==typeof y?y.replace("%d",v):y(v,l,I.l,f);break}}if(l)return u;var x=f?m.future:m.past;return"function"==typeof x?x(u):x.replace("%s",u)},l.to=function(e,a){return n(e,a,this,!0)},l.from=function(e,a){return n(e,a,this)};var d=function(e){return e.$u?o.utc():o()};l.toNow=function(e){return this.to(d(this),e)},l.fromNow=function(e){return this.from(d(this),e)}};var $=g.exports;const P={key:0,class:"com-personal-wrapper"},R={class:"date-extra"},S=y("长期"),O=v("span",{class:"input-extra"},"万",-1),N=v("span",{class:"input-extra"},"万",-1),M=v("span",{class:"input-extra"},"%",-1);e("_",a({props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]}},emits:["update:images"],setup(e,{emit:a}){const y=e;o();const{venderCode:g=""}=l().query,L=_("CERT_TYPE"),H=_(`${g.toLocaleUpperCase()}_OCCUPATION`);_("MARRIAGE_STATUS");const Y=_("DEGREE"),G=_("NATIONALITY"),Z=_("NATIONAL_REGION_CODE"),B=r([]),j=r(!1),z=r({formInfo:y.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""});n.extend($);const F=r(2===y.formInfo.certEndType),K=d((()=>{const e={};return y.factorList.forEach((a=>{e[a.code]=a})),e})),W=e=>{z.value.formInfo.certNo=e.personIdCard,z.value.formInfo.name=e.personName,z.value.formInfo.certEndDate=n(e.validDateEnd,"YYYYMMDD").toDate()},J=e=>K.value&&K.value[e]&&K.value[e].isDisplay===k.YES,Q=e=>K.value&&K.value[e]&&K.value[e].isMustInput===k.YES,X=d((()=>[x.CERT,x.HOUSE_HOLD].includes(`${z.value.formInfo.certType}`)?[V.ID_CARD]:`${z.value.formInfo.certType}`===x.BIRTH?[V.BIRTH]:`${z.value.formInfo.certType}`===x.PASSPORT?[V.PASSPORT]:[])),ee=(e,a)=>Q("attachment")?2===z.value.formInfo.certEndType||z.value.formInfo.certEndDate?"":"请选择有效期至":"",ae=(e,a)=>/^\d{1,10}(\.\d{1,2})?$/.test(e)?"":"年收入最多录入10位数字",oe=(e,a)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(e)?"":"收益比例只能填写1-100的正整数",le=(e,a,o)=>a.length>e?`最大不能超过${e}个字符`:"",re=(e,a)=>{var o,l,r,d,i,t,u;if("CHN"===(null===(o=z.value.formInfo)||void 0===o||null===(l=o.extInfo)||void 0===l?void 0:l.nationalityCode)){if(![x.CERT,x.HOUSE_HOLD,x.BIRTH,x.MILITARY_CARD].includes(`${e}`))return"国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证"}else if(["HKG","MAC"].includes(null===(r=z.value.formInfo)||void 0===r||null===(d=r.extInfo)||void 0===d?void 0:d.nationalityCode)){if(![x.HK_MACAO_RESIDENCE_PERMIT,x.HONGKONG_MACAO].includes(`${e}`))return"国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证"}else if("TWN"===(null===(i=z.value.formInfo)||void 0===i||null===(t=i.extInfo)||void 0===t?void 0:t.nationalityCode)){if(![x.TAIWAN_RESIDENCE_PERMIT,x.TAIWAN_TRAVEL].includes(`${e}`))return"国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证"}else if(![x.PASSPORT,x.FOREIGN_PERMANENT].includes(`${e}`))return"国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证";return n().year()-n(null===(u=z.value.formInfo)||void 0===u?void 0:u.birthday).year()>2&&e===x.BIRTH?"年龄大于等于2周岁时，证件类型不能选择出生证":""},ne=e=>Array.isArray(e)&&2===e.length&&e[0]&&e[1]?"":"请上传身份证正反面照片",de=e=>y.beneficiaryList.filter((e=>e.relationToInsured===D.SPOUSE)).length>=2?"已存在配偶关系的受益人":"";return i((()=>F.value),(e=>{e?(z.value.formInfo.certEndType=2,z.value.formInfo.certEndDate=""):z.value.formInfo.certEndType=1}),{immediate:!0}),i((()=>z.value.formInfo.certType),(e=>{[x.CERT,x.HOUSE_HOLD].includes(e)?j.value=!0:j.value=!1}),{deep:!0,immediate:!0}),i((()=>z.value.formInfo.certNo),(e=>{C(e)&&(z.value.formInfo.gender=h(e),z.value.formInfo.birthday=new Date(b(e)))}),{deep:!0,immediate:!0}),i((()=>y.images),(e=>{B.value=e}),{immediate:!0}),i(B,(e=>{a("update:images",e)}),{deep:!0}),(a,o)=>{var l,r;const d=t("ProRadioButton"),i=t("ProField"),y=t("ProPicker"),x=t("ProIDCardUpload"),C=t("ProImageUpload"),h=t("ProDatePicker"),b=t("van-checkbox"),k=t("ProCascader");return Object.keys(u(K)).length?(f(),m("div",P,[J("insureRelation")?(f(),s(i,{key:0,modelValue:z.value.formInfo.relationToInsured,"onUpdate:modelValue":o[1]||(o[1]=e=>z.value.formInfo.relationToInsured=e),name:`${e.prefix}_relationToInsured`,required:Q("insureRelation"),label:"是被保人的",rules:[{validator:de}]},{input:c((()=>[p(d,{modelValue:z.value.formInfo.relationToInsured,"onUpdate:modelValue":o[0]||(o[0]=e=>z.value.formInfo.relationToInsured=e),"is-view":e.isView,options:u(T).slice(1,4)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required","rules"])):I("",!0),J("certType")?(f(),s(y,{key:1,modelValue:z.value.formInfo.certType,"onUpdate:modelValue":o[2]||(o[2]=e=>z.value.formInfo.certType=e),label:"证件类型",name:`${e.prefix}_certType`,"data-source":u(L),mapping:{label:"name",value:"code",children:"child"},required:Q("certType"),rules:[{validator:re}]},null,8,["modelValue","name","data-source","required","rules"])):I("",!0),J("attachment")&&z.value.formInfo.certType+""=="1"?(f(),s(i,{key:2,label:"身份证上传",block:"",required:Q("attachment"),rules:[{validator:ne}],name:`${e.prefix}_idCard`},{input:c((()=>[p(x,{modelValue:B.value,"onUpdate:modelValue":o[3]||(o[3]=e=>B.value=e),"is-view":e.isView,onOnOCR:W},null,8,["modelValue","is-view"])])),_:1},8,["required","rules","name"])):I("",!0),J("attachment")&&z.value.formInfo.certType&&z.value.formInfo.certType+""!="1"?(f(),s(i,{key:3,label:"证件上传",block:"",required:Q("attachment")},{input:c((()=>[p(C,{modelValue:B.value,"onUpdate:modelValue":o[4]||(o[4]=e=>B.value=e),"max-count":1},null,8,["modelValue"])])),_:1},8,["required"])):I("",!0),J("certNo")?(f(),s(i,{key:4,modelValue:z.value.formInfo.certNo,"onUpdate:modelValue":o[5]||(o[5]=e=>z.value.formInfo.certNo=e),label:"证件号码",name:`${e.prefix}_certNo`,required:Q("certNo"),placeholder:"请输入","validate-type":u(X)},null,8,["modelValue","name","required","validate-type"])):I("",!0),J("name")?(f(),s(i,{key:5,modelValue:z.value.formInfo.name,"onUpdate:modelValue":o[6]||(o[6]=e=>z.value.formInfo.name=e),label:"姓名",name:`${e.prefix}_name`,required:Q("name")},null,8,["modelValue","name","required"])):I("",!0),J("sex")?(f(),s(i,{key:6,modelValue:z.value.formInfo.gender,"onUpdate:modelValue":o[8]||(o[8]=e=>z.value.formInfo.gender=e),required:Q("sex"),label:"性别",name:`${e.prefix}_gender`,placeholder:"请选择","is-view":j.value},{input:c((()=>[p(d,{modelValue:z.value.formInfo.gender,"onUpdate:modelValue":o[7]||(o[7]=e=>z.value.formInfo.gender=e),disabled:j.value,"is-view":e.isView,options:u(U)},null,8,["modelValue","disabled","is-view","options"])])),_:1},8,["modelValue","required","name","is-view"])):I("",!0),J("birthday")?(f(),s(h,{key:7,modelValue:z.value.formInfo.birthday,"onUpdate:modelValue":o[9]||(o[9]=e=>z.value.formInfo.birthday=e),label:"出生日期",name:`${e.prefix}_birthday`,min:z.value.birth.min,max:z.value.birth.max,formatter:e=>u(n)(e).format("YYYY-MM-DD"),type:"date",required:Q("birthday")},null,8,["modelValue","name","min","max","formatter","required"])):I("",!0),J("certEndDate")?(f(),s(h,{key:8,modelValue:z.value.formInfo.certEndDate,"onUpdate:modelValue":o[11]||(o[11]=e=>z.value.formInfo.certEndDate=e),label:"有效期至",name:`${e.prefix}_certEndDate`,type:"date",min:z.value.certEndDate.min,max:z.value.certEndDate.max,"is-view":F.value||e.isView,read:"",rules:[{validator:ee}]},{extra:c((()=>[v("div",R,[p(b,{modelValue:F.value,"onUpdate:modelValue":o[10]||(o[10]=e=>F.value=e),"icon-size":16,disabled:e.isView},{default:c((()=>[S])),_:1},8,["modelValue","disabled"])])])),_:1},8,["modelValue","name","min","max","is-view","rules"])):I("",!0),J("houseHold")?(f(),s(k,{key:9,modelValue:z.value.formInfo.extInfo.provinceCode,"onUpdate:modelValue":o[12]||(o[12]=e=>z.value.formInfo.extInfo.provinceCode=e),field1:z.value.formInfo.extInfo.provinceCode,"onUpdate:field1":o[13]||(o[13]=e=>z.value.formInfo.extInfo.provinceCode=e),field2:z.value.formInfo.extInfo.cityCode,"onUpdate:field2":o[14]||(o[14]=e=>z.value.formInfo.extInfo.cityCode=e),field3:z.value.formInfo.extInfo.areaCode,"onUpdate:field3":o[15]||(o[15]=e=>z.value.formInfo.extInfo.areaCode=e),label:"户籍所在地",name:`${e.prefix}_provinceCode`,placeholder:"请选择","is-link":"",required:Q("houseHold"),"data-source":u(Z),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):I("",!0),J("hasSocialInsurance")?(f(),s(i,{key:10,modelValue:z.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[17]||(o[17]=e=>z.value.formInfo.extInfo.hasSocialInsurance=e),label:"社保",name:`${e.prefix}_hasSocialInsurance`,placeholder:"请选择",required:Q("hasSocialInsurance")},{input:c((()=>[p(d,{modelValue:z.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[16]||(o[16]=e=>z.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,options:u(w)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required"])):I("",!0),J("occupation")?(f(),s(k,{key:11,modelValue:z.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:modelValue":o[18]||(o[18]=e=>z.value.formInfo.extInfo.occupationCodeList[0]=e),field0:z.value.formInfo.extInfo.occupationCodeList[0],"onUpdate:field0":o[19]||(o[19]=e=>z.value.formInfo.extInfo.occupationCodeList[0]=e),field1:z.value.formInfo.extInfo.occupationCodeList[1],"onUpdate:field1":o[20]||(o[20]=e=>z.value.formInfo.extInfo.occupationCodeList[1]=e),field2:z.value.formInfo.extInfo.occupationCodeList[2],"onUpdate:field2":o[21]||(o[21]=e=>z.value.formInfo.extInfo.occupationCodeList[2]=e),label:"职业",name:`${e.prefix}_occupationCodeList`,placeholder:"请选择",required:Q("occupation"),"data-source":u(H),mapping:{label:"value",value:"code",children:"children"},"is-link":""},null,8,["modelValue","field0","field1","field2","name","required","data-source"])):I("",!0),J("annualIncome")?(f(),s(i,{key:12,modelValue:z.value.formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":o[22]||(o[22]=e=>z.value.formInfo.extInfo.personalAnnualIncome=e),label:"个人年收入",name:`${e.prefix}_personalAnnualIncome`,required:Q("annualIncome"),placeholder:"请输入",rules:[{validator:ae}]},{extra:c((()=>[O])),_:1},8,["modelValue","name","required","rules"])):I("",!0),J("familyAnnualIncome")?(f(),s(i,{key:13,modelValue:z.value.formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":o[23]||(o[23]=e=>z.value.formInfo.extInfo.familyAnnualIncome=e),label:"家庭年收入",name:`${e.prefix}_familyAnnualIncome`,placeholder:"请输入",rules:[{validator:ae}],required:Q("familyAnnualIncome")},{extra:c((()=>[N])),_:1},8,["modelValue","name","rules","required"])):I("",!0),J("nationality")?(f(),s(y,{key:14,modelValue:z.value.formInfo.extInfo.nationalityCode,"onUpdate:modelValue":o[24]||(o[24]=e=>z.value.formInfo.extInfo.nationalityCode=e),label:"国籍",name:`${e.prefix}_nationalityCode`,"data-source":u(G),mapping:{label:"name",value:"code",children:"child"},placeholder:"请选择",required:Q("nationality"),"is-link":""},null,8,["modelValue","name","data-source","required"])):I("",!0),J("USAGreenCard")?(f(),s(i,{key:15,modelValue:z.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":o[26]||(o[26]=e=>z.value.formInfo.extInfo.hasUsCard=e),label:"美国绿卡",name:`${e.prefix}_hasUsCard`,placeholder:"请选择",required:Q("USAGreenCard")},{input:c((()=>[p(d,{modelValue:z.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":o[25]||(o[25]=e=>z.value.formInfo.extInfo.hasUsCard=e),"is-view":e.isView,options:u(w)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required"])):I("",!0),J("marriage")?(f(),s(y,{key:16,modelValue:z.value.formInfo.extInfo.marriageStatus,"onUpdate:modelValue":o[27]||(o[27]=e=>z.value.formInfo.extInfo.marriageStatus=e),label:"婚姻状况",name:`${e.prefix}_marriageStatus`,placeholder:"请选择","data-source":u(q),"is-link":"",required:Q("marriage")},null,8,["modelValue","name","data-source","required"])):I("",!0),J("educationDegree")?(f(),s(y,{key:17,modelValue:z.value.formInfo.extInfo.educationDegree,"onUpdate:modelValue":o[28]||(o[28]=e=>z.value.formInfo.extInfo.educationDegree=e),label:"学历",name:`${e.prefix}_educationDegree`,"data-source":u(Y),mapping:{label:"name",value:"code",children:"child"},placeholder:"请选择",required:Q("educationDegree"),"is-link":""},null,8,["modelValue","name","data-source","required"])):I("",!0),J("mobile")?(f(),s(i,{key:18,modelValue:z.value.formInfo.mobile,"onUpdate:modelValue":o[29]||(o[29]=e=>z.value.formInfo.mobile=e),label:"手机号码",name:`${e.prefix}_mobile`,placeholder:"请输入",required:Q("mobile"),"validate-type":[u(V).PHONE]},null,8,["modelValue","name","required","validate-type"])):I("",!0),J("email")?(f(),s(i,{key:19,modelValue:z.value.formInfo.email,"onUpdate:modelValue":o[30]||(o[30]=e=>z.value.formInfo.email=e),label:"电子邮箱",name:`${e.prefix}_email`,placeholder:"请输入",required:Q("email"),"validate-type":[u(V).EMAIL]},null,8,["modelValue","name","required","validate-type"])):I("",!0),J("familyAddress")?(f(),s(k,{key:20,modelValue:z.value.formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":o[31]||(o[31]=e=>z.value.formInfo.extInfo.familyAreaCode=e),field1:z.value.formInfo.extInfo.familyProvinceCode,"onUpdate:field1":o[32]||(o[32]=e=>z.value.formInfo.extInfo.familyProvinceCode=e),field2:z.value.formInfo.extInfo.familyCityCode,"onUpdate:field2":o[33]||(o[33]=e=>z.value.formInfo.extInfo.familyCityCode=e),field3:z.value.formInfo.extInfo.familyAreaCode,"onUpdate:field3":o[34]||(o[34]=e=>z.value.formInfo.extInfo.familyAreaCode=e),label:"家庭地址",name:`${e.prefix}_familyProvinceCode`,placeholder:"请选择","is-link":"",required:Q("familyAddress"),"data-source":u(Z),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):I("",!0),J("familyAddressDetail")?(f(),s(i,{key:21,modelValue:z.value.formInfo.extInfo.familyAddress,"onUpdate:modelValue":o[35]||(o[35]=e=>z.value.formInfo.extInfo.familyAddress=e),label:"地址详情",name:`${e.prefix}_familyAddress`,placeholder:"请输入",rules:[{validator:(...e)=>le(100,...e)}],required:Q("familyAddressDetail")},null,8,["modelValue","name","rules","required"])):I("",!0),J("familyPostCode")?(f(),s(i,{key:22,modelValue:z.value.formInfo.extInfo.familyZipCode,"onUpdate:modelValue":o[36]||(o[36]=e=>z.value.formInfo.extInfo.familyZipCode=e),label:"家庭邮编",name:`${e.prefix}_familyZipCode`,placeholder:"请输入",required:Q("familyPostCode"),"validate-type":[u(V).ZIP_CODE]},null,8,["modelValue","name","required","validate-type"])):I("",!0),J("workAddress")?(f(),s(k,{key:23,modelValue:z.value.formInfo.extInfo.workAreaCode,"onUpdate:modelValue":o[37]||(o[37]=e=>z.value.formInfo.extInfo.workAreaCode=e),field1:z.value.formInfo.extInfo.workProvinceCode,"onUpdate:field1":o[38]||(o[38]=e=>z.value.formInfo.extInfo.workProvinceCode=e),field2:z.value.formInfo.extInfo.workCityCode,"onUpdate:field2":o[39]||(o[39]=e=>z.value.formInfo.extInfo.workCityCode=e),field3:z.value.formInfo.extInfo.workAreaCode,"onUpdate:field3":o[40]||(o[40]=e=>z.value.formInfo.extInfo.workAreaCode=e),label:"工作地址",name:`${e.prefix}_workProvinceCode`,placeholder:"请选择","is-link":"",required:Q("workAddress"),"data-source":u(Z),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):I("",!0),J("workAddressDetail")?(f(),s(i,{key:24,modelValue:z.value.formInfo.extInfo.workAddress,"onUpdate:modelValue":o[41]||(o[41]=e=>z.value.formInfo.extInfo.workAddress=e),label:"地址详情",name:`${e.prefix}_workAddress`,placeholder:"请输入",rules:[{validator:(...e)=>le(100,...e)}],required:Q("workAddressDetail")},null,8,["modelValue","name","rules","required"])):I("",!0),J("workZipCode")?(f(),s(i,{key:25,modelValue:z.value.formInfo.extInfo.workZipCode,"onUpdate:modelValue":o[42]||(o[42]=e=>z.value.formInfo.extInfo.workZipCode=e),label:"工作邮编",required:Q("workZipCode"),name:`${e.prefix}_workPostCode`,placeholder:"请输入","validate-type":[u(V).ZIP_CODE]},null,8,["modelValue","required","name","validate-type"])):I("",!0),J("workPlace")?(f(),s(i,{key:26,modelValue:z.value.formInfo.extInfo.workStation,"onUpdate:modelValue":o[43]||(o[43]=e=>z.value.formInfo.extInfo.workStation=e),label:"单位名称",name:`${e.prefix}_workPostCode`,placeholder:"请输入",rules:[{validator:(...e)=>le(20,...e)}],required:Q("workPlace")},null,8,["modelValue","name","rules","required"])):I("",!0),J("workContent")?(f(),s(i,{key:27,modelValue:z.value.formInfo.extInfo.workContent,"onUpdate:modelValue":o[44]||(o[44]=e=>z.value.formInfo.extInfo.workContent=e),label:"工作内容",name:`${e.prefix}_workContent`,required:Q("workContent"),placeholder:"请输入",rules:[{validator:(...e)=>le(100,...e)}]},null,8,["modelValue","name","required","rules"])):I("",!0),J("taxCert")?(f(),s(y,{key:28,modelValue:z.value.formInfo.extInfo.taxResident,"onUpdate:modelValue":o[45]||(o[45]=e=>z.value.formInfo.extInfo.taxResident=e),label:"税收居民身份",name:`${e.prefix}_taxResident`,"data-source":u(A),required:Q("taxCert"),placeholder:"请输入"},null,8,["modelValue","name","data-source","required"])):I("",!0),J("partTime")?(f(),s(i,{key:29,modelValue:z.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":o[47]||(o[47]=e=>z.value.formInfo.extInfo.isPartTime=e),label:"是否兼职",name:`${e.prefix}_isPartTime`,required:Q("partTime"),placeholder:"请输入"},{input:c((()=>[p(d,{modelValue:z.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":o[46]||(o[46]=e=>z.value.formInfo.extInfo.isPartTime=e),"is-view":e.isView,options:u(w)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required"])):I("",!0),null!==(l=u(K).beneficiaryType)&&void 0!==l&&l.isDisplay?(f(),s(y,{key:30,modelValue:z.value.formInfo.benefitOrder,"onUpdate:modelValue":o[48]||(o[48]=e=>z.value.formInfo.benefitOrder=e),label:"受益人顺序",name:`${e.prefix}_benefitOrder`,"data-source":u(E),required:Q("beneficiaryType")},null,8,["modelValue","name","data-source","required"])):I("",!0),null!==(r=u(K).benefitRate)&&void 0!==r&&r.isDisplay?(f(),s(i,{key:31,modelValue:z.value.formInfo.benefitRate,"onUpdate:modelValue":o[49]||(o[49]=e=>z.value.formInfo.benefitRate=e),required:Q("benefitRate"),name:`${e.prefix}_benefitRate`,rules:[{validator:oe}],label:"受益比例"},{extra:c((()=>[M])),_:1},8,["modelValue","required","name","rules"])):I("",!0)])):I("",!0)}}}))}}}))}();
