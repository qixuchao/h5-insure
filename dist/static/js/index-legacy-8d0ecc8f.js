!function(){var e=document.createElement("style");e.innerHTML=".input-extra{margin-left:.33333rem}.date-extra{padding-left:var(--zaui-card-border, .4rem);margin-left:var(--zaui-card-border, .4rem);border-left:1px solid #eeeff4}\n",document.head.appendChild(e),System.register(["./vendor-legacy-dce51240.js","./index-legacy-d33b4435.js","./useDicData-legacy-9dcb2279.js"],(function(e){"use strict";var l,a,o,n,r,d,i,u,t,f,m,s,v,p,I,c,y,x,V,b,h,C,E,k,w,q;return{setters:[function(e){e.ao,l=e.g,a=e.a5,o=e.Q,n=e.E,r=e.d,d=e.y,i=e.X,u=e.r,t=e.A,f=e.j,m=e.n,s=e.k,v=e.m,p=e.p,I=e.t,c=e.z,y=e.C},function(e){x=e.E,V=e.V,b=e.L,h=e.M,C=e.Q,E=e.Y,k=e.r,w=e.R},function(e){q=e.u}],execute:function(){e("R",[{label:"本人",value:"1"},{label:"配偶",value:"2"},{label:"子女",value:"3"},{label:"父母",value:"4"}]);const S=e("a",{LEGAL:"1",SPECIFY:"2"}),T=(e("B",[{label:"法定",value:S.LEGAL},{label:"指定",value:S.SPECIFY}]),[{label:"已婚",value:"1"},{label:"未婚",value:"2"}]),_="2",A=[{label:"本人",value:"1"},{label:"配偶",value:_},{label:"子女",value:"3"},{label:"父母",value:"4"}],U=[{label:"仅为中国税收居民",value:"1"},{label:"仅为非中国税收居民",value:"2"},{label:"既是中国税收居民又是其他国家（地区）税收居民",value:"3"}],M=[{label:"第一顺位",value:"1"},{label:"第二顺位",value:"2"},{label:"第三顺位",value:"3"},{label:"其他",value:"4"}];var g={exports:{}};g.exports=function(e,l,a){e=e||{};var o=l.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function r(e,l,a,n){return o.fromToBase(e,l,a,n)}a.en.relativeTime=n,o.fromToBase=function(l,o,r,d,i){for(var u,t,f,m=r.$locale().relativeTime||n,s=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],v=s.length,p=0;p<v;p+=1){var I=s[p];I.d&&(u=d?a(l).diff(r,I.d,!0):r.diff(l,I.d,!0));var c=(e.rounding||Math.round)(Math.abs(u));if(f=u>0,c<=I.r||!I.r){c<=1&&p>0&&(I=s[p-1]);var y=m[I.l];i&&(c=i(""+c)),t="string"==typeof y?y.replace("%d",c):y(c,o,I.l,f);break}}if(o)return t;var x=f?m.future:m.past;return"function"==typeof x?x(t):x.replace("%s",t)},o.to=function(e,l){return r(e,l,this,!0)},o.from=function(e,l){return r(e,l,this)};var d=function(e){return e.$u?a.utc():a()};o.toNow=function(e){return this.to(d(this),e)},o.fromNow=function(e){return this.from(d(this),e)}};var D=g.exports;const $={key:0,class:"com-personal-wrapper"},P={class:"date-extra"},Y=y("长期"),R=c("span",{class:"input-extra"},"万",-1),N=c("span",{class:"input-extra"},"万",-1),O=c("span",{class:"input-extra"},"%",-1);e("_",l({props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]}},emits:["update:images"],setup(e,{emit:l}){const y=e;a();const{venderCode:S=""}=o().query,g=q("CERT_TYPE"),L=q(`${S.toLocaleUpperCase()}_OCCUPATION`);q("MARRIAGE_STATUS");const H=q("DEGREE"),G=q("NATIONALITY"),B=q("NATIONAL_REGION_CODE"),Z=n([]),j=n(!1),F=n({formInfo:y.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""});r.extend(D);const z=n(2===y.formInfo.certEndType),K=d((()=>{const e={};return y.factorList.forEach((l=>{e[l.code]=l})),e})),W=e=>K.value&&K.value[e]&&K.value[e].isDisplay===E.YES,Q=d((()=>[x.CERT,x.HOUSE_HOLD].includes(F.value.formInfo.certType)?[V.ID_CARD]:F.value.formInfo.certType===x.BIRTH?[V.BIRTH]:F.value.formInfo.certType===x.PASSPORT?[V.PASSPORT]:[])),X=(e,l)=>/^\d{1,10}(\.\d{1,2})?$/.test(e)?"":"年收入最多录入10位数字",J=(e,l)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(e)?"":"收益比例只能填写1-100的正整数",ee=(e,l,a)=>l.length>e?`最大不能超过${e}个字符`:"",le=(e,l)=>{var a,o,n,d,i,u,t;if("CHN"===(null===(a=F.value.formInfo)||void 0===a||null===(o=a.extInfo)||void 0===o?void 0:o.nationalityCode)){if(![x.CERT,x.HOUSE_HOLD,x.BIRTH,x.MILITARY_CARD].includes(`${e}`))return"国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证"}else if(["HKG","MAC"].includes(null===(n=F.value.formInfo)||void 0===n||null===(d=n.extInfo)||void 0===d?void 0:d.nationalityCode)){if(![x.HK_MACAO_RESIDENCE_PERMIT,x.HONGKONG_MACAO].includes(`${e}`))return"国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证"}else if("TWN"===(null===(i=F.value.formInfo)||void 0===i||null===(u=i.extInfo)||void 0===u?void 0:u.nationalityCode)){if(![x.TAIWAN_RESIDENCE_PERMIT,x.TAIWAN_TRAVEL].includes(`${e}`))return"国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证"}else if(![x.PASSPORT,x.FOREIGN_PERMANENT].includes(`${e}`))return"国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证";return+r(null===(t=F.value.formInfo)||void 0===t?void 0:t.birthday).toNow(!0).split(" ")[0]>2&&e===x.BIRTH?"年龄大于等于2周岁时，证件类型不能选择出生证":""},ae=e=>Array.isArray(e)&&2===e.length&&e[0]&&e[1]?"":"请上传身份证正反面照片",oe=e=>y.beneficiaryList.filter((e=>e.relationToInsured===_)).length>=2?"已存在配偶关系的受益人":"";return i((()=>z.value),(e=>{e?(F.value.formInfo.certEndType=2,F.value.formInfo.certEndDate=""):F.value.formInfo.certEndType=1}),{immediate:!0}),i((()=>F.value.formInfo.certType),(e=>{[x.CERT,x.HOUSE_HOLD].includes(e)?j.value=!1:j.value=!0}),{deep:!0,immediate:!0}),i((()=>F.value.formInfo.certNo),(e=>{b(e)?(F.value.formInfo.gender=h(e),F.value.formInfo.birthday=new Date(C(e)),j.value=!0):j.value=!1}),{deep:!0,immediate:!0}),i((()=>y.images),(e=>{Z.value=e}),{immediate:!0}),i(Z,(e=>{l("update:images",e)}),{deep:!0}),(l,a)=>{var o,n,r,d,i,y,x,b,h,C,E,q,S,_,D,ne,re,de,ie,ue,te,fe,me,se,ve,pe,Ie,ce,ye,xe,Ve,be,he,Ce,Ee,ke;const we=u("ProRadioButton"),qe=u("ProField"),Se=u("ProPicker"),Te=u("ProIDCardUpload"),_e=u("ProImageUpload"),Ae=u("ProDatePicker"),Ue=u("van-checkbox"),Me=u("ProCascader");return Object.keys(t(K)).length?(f(),m("div",$,[W("insureRelation")?(f(),s(qe,{key:0,modelValue:F.value.formInfo.relationToInsured,"onUpdate:modelValue":a[1]||(a[1]=e=>F.value.formInfo.relationToInsured=e),name:`${e.prefix}_relationToInsured`,required:"YES"===(null===(o=t(K).insureRelation)||void 0===o?void 0:o.isMustInput),label:"是被保人的",rules:[{validator:oe}]},{input:v((()=>[p(we,{modelValue:F.value.formInfo.relationToInsured,"onUpdate:modelValue":a[0]||(a[0]=e=>F.value.formInfo.relationToInsured=e),"is-view":e.isView,options:t(A).slice(1,4)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required","rules"])):I("",!0),W("certType")?(f(),s(Se,{key:1,modelValue:F.value.formInfo.certType,"onUpdate:modelValue":a[2]||(a[2]=e=>F.value.formInfo.certType=e),label:"证件类型",name:`${e.prefix}_certType`,"data-source":t(g),mapping:{label:"name",value:"code",children:"child"},required:"YES"===(null===(n=t(K).certType)||void 0===n?void 0:n.isMustInput),rules:[{validator:le}]},null,8,["modelValue","name","data-source","required","rules"])):I("",!0),"YES"===(null===(r=t(K).attachment)||void 0===r?void 0:r.isDisplay)&&F.value.formInfo.certType+""=="1"?(f(),s(qe,{key:2,label:"身份证上传",block:"",required:"YES"===(null===(d=t(K).certType)||void 0===d?void 0:d.isMustInput),rules:[{validator:ae}],name:`${e.prefix}_idCard`},{input:v((()=>[p(Te,{modelValue:Z.value,"onUpdate:modelValue":a[3]||(a[3]=e=>Z.value=e),"is-view":e.isView},null,8,["modelValue","is-view"])])),_:1},8,["required","rules","name"])):I("",!0),"YES"===(null===(i=t(K).attachment)||void 0===i?void 0:i.isDisplay)&&F.value.formInfo.certType&&F.value.formInfo.certType+""!="1"?(f(),s(qe,{key:3,label:"证件上传",block:"",required:"YES"===(null===(y=t(K).certType)||void 0===y?void 0:y.isMustInput)},{input:v((()=>[p(_e,{modelValue:Z.value,"onUpdate:modelValue":a[4]||(a[4]=e=>Z.value=e),"max-count":1},null,8,["modelValue"])])),_:1},8,["required"])):I("",!0),W("certNo")?(f(),s(qe,{key:4,modelValue:F.value.formInfo.certNo,"onUpdate:modelValue":a[5]||(a[5]=e=>F.value.formInfo.certNo=e),label:"证件号码",name:`${e.prefix}_certNo`,required:"YES"===(null===(x=t(K).certNo)||void 0===x?void 0:x.isMustInput),placeholder:"请输入","validate-type":t(Q)},null,8,["modelValue","name","required","validate-type"])):I("",!0),W("name")?(f(),s(qe,{key:5,modelValue:F.value.formInfo.name,"onUpdate:modelValue":a[6]||(a[6]=e=>F.value.formInfo.name=e),label:"姓名",name:`${e.prefix}_name`,required:"YES"===(null===(b=t(K).name)||void 0===b?void 0:b.isMustInput)},null,8,["modelValue","name","required"])):I("",!0),W("sex")?(f(),s(qe,{key:6,modelValue:F.value.formInfo.gender,"onUpdate:modelValue":a[8]||(a[8]=e=>F.value.formInfo.gender=e),required:"YES"===(null===(h=t(K).sex)||void 0===h?void 0:h.isMustInput),label:"性别",name:`${e.prefix}_gender`,placeholder:"请选择","is-view":j.value},{input:v((()=>[p(we,{modelValue:F.value.formInfo.gender,"onUpdate:modelValue":a[7]||(a[7]=e=>F.value.formInfo.gender=e),disabled:j.value,"is-view":e.isView,options:t(k)},null,8,["modelValue","disabled","is-view","options"])])),_:1},8,["modelValue","required","name","is-view"])):I("",!0),W("birthday")?(f(),s(Ae,{key:7,modelValue:F.value.formInfo.birthday,"onUpdate:modelValue":a[9]||(a[9]=e=>F.value.formInfo.birthday=e),label:"出生日期",name:`${e.prefix}_birthday`,min:F.value.birth.min,max:F.value.birth.max,type:"date",required:"YES"===(null===(C=t(K).birthday)||void 0===C?void 0:C.isMustInput),"is-view":j.value},null,8,["modelValue","name","min","max","required","is-view"])):I("",!0),W("certEndDate")?(f(),s(Ae,{key:8,modelValue:F.value.formInfo.certEndDate,"onUpdate:modelValue":a[11]||(a[11]=e=>F.value.formInfo.certEndDate=e),label:"有效期至",name:`${e.prefix}_certEndDate`,type:"date",min:F.value.certEndDate.min,max:F.value.certEndDate.max,"is-view":z.value||e.isView,read:"",required:"YES"===(null===(E=t(K).certEndDate)||void 0===E?void 0:E.isMustInput)},{extra:v((()=>[c("div",P,[p(Ue,{modelValue:z.value,"onUpdate:modelValue":a[10]||(a[10]=e=>z.value=e),disabled:e.isView},{default:v((()=>[Y])),_:1},8,["modelValue","disabled"])])])),_:1},8,["modelValue","name","min","max","is-view","required"])):I("",!0),W("houseHold")?(f(),s(Me,{key:9,modelValue:F.value.formInfo.extInfo.provinceCode,"onUpdate:modelValue":a[12]||(a[12]=e=>F.value.formInfo.extInfo.provinceCode=e),field1:F.value.formInfo.extInfo.provinceCode,"onUpdate:field1":a[13]||(a[13]=e=>F.value.formInfo.extInfo.provinceCode=e),field2:F.value.formInfo.extInfo.cityCode,"onUpdate:field2":a[14]||(a[14]=e=>F.value.formInfo.extInfo.cityCode=e),field3:F.value.formInfo.extInfo.areaCode,"onUpdate:field3":a[15]||(a[15]=e=>F.value.formInfo.extInfo.areaCode=e),label:"户籍所在地",name:`${e.prefix}_provinceCode`,placeholder:"请选择","is-link":"",required:"YES"===(null===(q=t(K).houseHold)||void 0===q?void 0:q.isMustInput),"data-source":t(B),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):I("",!0),W("hasSocialInsurance")?(f(),s(qe,{key:10,modelValue:F.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[17]||(a[17]=e=>F.value.formInfo.extInfo.hasSocialInsurance=e),label:"社保",name:`${e.prefix}_hasSocialInsurance`,placeholder:"请选择",required:"YES"===(null===(S=t(K).hasSocialInsurance)||void 0===S?void 0:S.isMustInput)},{input:v((()=>[p(we,{modelValue:F.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[16]||(a[16]=e=>F.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,options:t(w)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required"])):I("",!0),W("occupation")?(f(),s(Me,{key:11,modelValue:F.value.formInfo.extInfo.occupationCode,"onUpdate:modelValue":a[18]||(a[18]=e=>F.value.formInfo.extInfo.occupationCode=e),label:"职业",name:`${e.prefix}_occupationCode`,placeholder:"请选择",required:"YES"===(null===(_=t(K).occupation)||void 0===_?void 0:_.isMustInput),"data-source":t(L),mapping:{label:"value",value:"code",children:"children"},"is-link":""},null,8,["modelValue","name","required","data-source"])):I("",!0),W("annualIncome")?(f(),s(qe,{key:12,modelValue:F.value.formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":a[19]||(a[19]=e=>F.value.formInfo.extInfo.personalAnnualIncome=e),label:"个人年收入",name:`${e.prefix}_personalAnnualIncome`,required:"YES"===(null===(D=t(K).annualIncome)||void 0===D?void 0:D.isMustInput),placeholder:"请输入",rules:[{validator:X}]},{extra:v((()=>[R])),_:1},8,["modelValue","name","required","rules"])):I("",!0),W("familyAnnualIncome")?(f(),s(qe,{key:13,modelValue:F.value.formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":a[20]||(a[20]=e=>F.value.formInfo.extInfo.familyAnnualIncome=e),label:"家庭年收入",name:`${e.prefix}_familyAnnualIncome`,placeholder:"请输入",rules:[{validator:X}],required:"YES"===(null===(ne=t(K).familyAnnualIncome)||void 0===ne?void 0:ne.isMustInput)},{extra:v((()=>[N])),_:1},8,["modelValue","name","rules","required"])):I("",!0),W("nationality")?(f(),s(Se,{key:14,modelValue:F.value.formInfo.extInfo.nationalityCode,"onUpdate:modelValue":a[21]||(a[21]=e=>F.value.formInfo.extInfo.nationalityCode=e),label:"国籍",name:`${e.prefix}_nationalityCode`,"data-source":t(G),mapping:{label:"name",value:"code",children:"child"},placeholder:"请选择",required:"YES"===(null===(re=t(K).nationality)||void 0===re?void 0:re.isMustInput),"is-link":""},null,8,["modelValue","name","data-source","required"])):I("",!0),W("USAGreenCard")?(f(),s(qe,{key:15,modelValue:F.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":a[23]||(a[23]=e=>F.value.formInfo.extInfo.hasUsCard=e),label:"美国绿卡",name:`${e.prefix}_hasUsCard`,placeholder:"请选择",required:"YES"===(null===(de=t(K).USAGreenCard)||void 0===de?void 0:de.isMustInput)},{input:v((()=>[p(we,{modelValue:F.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":a[22]||(a[22]=e=>F.value.formInfo.extInfo.hasUsCard=e),"is-view":e.isView,options:t(w)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required"])):I("",!0),W("marriage")?(f(),s(Se,{key:16,modelValue:F.value.formInfo.extInfo.marriageStatus,"onUpdate:modelValue":a[24]||(a[24]=e=>F.value.formInfo.extInfo.marriageStatus=e),label:"婚姻状况",name:`${e.prefix}_marriageStatus`,placeholder:"请选择","data-source":t(T),"is-link":"",required:"YES"===(null===(ie=t(K).marriage)||void 0===ie?void 0:ie.isMustInput)},null,8,["modelValue","name","data-source","required"])):I("",!0),W("educationDegree")?(f(),s(Se,{key:17,modelValue:F.value.formInfo.extInfo.educationDegree,"onUpdate:modelValue":a[25]||(a[25]=e=>F.value.formInfo.extInfo.educationDegree=e),label:"学历",name:`${e.prefix}_educationDegree`,"data-source":t(H),mapping:{label:"name",value:"code",children:"child"},placeholder:"请选择",required:"YES"===(null===(ue=t(K).educationDegree)||void 0===ue?void 0:ue.isMustInput),"is-link":""},null,8,["modelValue","name","data-source","required"])):I("",!0),W("mobile")?(f(),s(qe,{key:18,modelValue:F.value.formInfo.mobile,"onUpdate:modelValue":a[26]||(a[26]=e=>F.value.formInfo.mobile=e),label:"手机号码",name:`${e.prefix}_mobile`,placeholder:"请输入",required:"YES"===(null===(te=t(K).mobile)||void 0===te?void 0:te.isMustInput),"validate-type":[t(V).PHONE]},null,8,["modelValue","name","required","validate-type"])):I("",!0),W("email")?(f(),s(qe,{key:19,modelValue:F.value.formInfo.email,"onUpdate:modelValue":a[27]||(a[27]=e=>F.value.formInfo.email=e),label:"电子邮箱",name:`${e.prefix}_email`,placeholder:"请输入",required:"YES"===(null===(fe=t(K).email)||void 0===fe?void 0:fe.isMustInput),"validate-type":[t(V).EMAIL]},null,8,["modelValue","name","required","validate-type"])):I("",!0),W("familyAddress")?(f(),s(Me,{key:20,modelValue:F.value.formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":a[28]||(a[28]=e=>F.value.formInfo.extInfo.familyAreaCode=e),field1:F.value.formInfo.extInfo.familyProvinceCode,"onUpdate:field1":a[29]||(a[29]=e=>F.value.formInfo.extInfo.familyProvinceCode=e),field2:F.value.formInfo.extInfo.familyCityCode,"onUpdate:field2":a[30]||(a[30]=e=>F.value.formInfo.extInfo.familyCityCode=e),field3:F.value.formInfo.extInfo.familyAreaCode,"onUpdate:field3":a[31]||(a[31]=e=>F.value.formInfo.extInfo.familyAreaCode=e),label:"家庭地址",name:`${e.prefix}_familyProvinceCode`,placeholder:"请选择","is-link":"",required:"YES"===(null===(me=t(K).familyAddress)||void 0===me?void 0:me.isMustInput),"data-source":t(B),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):I("",!0),W("familyAddressDetail")?(f(),s(qe,{key:21,modelValue:F.value.formInfo.extInfo.familyAddress,"onUpdate:modelValue":a[32]||(a[32]=e=>F.value.formInfo.extInfo.familyAddress=e),label:"地址详情",name:`${e.prefix}_familyAddress`,placeholder:"请输入",rules:[{validator:(...e)=>ee(100,...e)}],required:"YES"===(null===(se=t(K).familyAddressDetail)||void 0===se?void 0:se.isMustInput)},null,8,["modelValue","name","rules","required"])):I("",!0),W("familyPostCode")?(f(),s(qe,{key:22,modelValue:F.value.formInfo.extInfo.familyZipCode,"onUpdate:modelValue":a[33]||(a[33]=e=>F.value.formInfo.extInfo.familyZipCode=e),label:"家庭邮编",name:`${e.prefix}_familyZipCode`,placeholder:"请输入",required:"YES"===(null===(ve=t(K).familyPostCode)||void 0===ve?void 0:ve.isMustInput),"validate-type":[t(V).ZIP_CODE]},null,8,["modelValue","name","required","validate-type"])):I("",!0),W("workAddress")?(f(),s(Me,{key:23,modelValue:F.value.formInfo.extInfo.workAreaCode,"onUpdate:modelValue":a[34]||(a[34]=e=>F.value.formInfo.extInfo.workAreaCode=e),field1:F.value.formInfo.extInfo.workProvinceCode,"onUpdate:field1":a[35]||(a[35]=e=>F.value.formInfo.extInfo.workProvinceCode=e),field2:F.value.formInfo.extInfo.workCityCode,"onUpdate:field2":a[36]||(a[36]=e=>F.value.formInfo.extInfo.workCityCode=e),field3:F.value.formInfo.extInfo.workAreaCode,"onUpdate:field3":a[37]||(a[37]=e=>F.value.formInfo.extInfo.workAreaCode=e),label:"工作地址",name:`${e.prefix}_workProvinceCode`,placeholder:"请选择","is-link":"",required:"YES"===(null===(pe=t(K).workAddress)||void 0===pe?void 0:pe.isMustInput),"data-source":t(B),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):I("",!0),W("workAddressDetail")?(f(),s(qe,{key:24,modelValue:F.value.formInfo.extInfo.workAddress,"onUpdate:modelValue":a[38]||(a[38]=e=>F.value.formInfo.extInfo.workAddress=e),label:"地址详情",name:`${e.prefix}_workAddress`,placeholder:"请输入",rules:[{validator:(...e)=>ee(100,...e)}],required:"YES"===(null===(Ie=t(K).workAddressDetail)||void 0===Ie?void 0:Ie.isMustInput)},null,8,["modelValue","name","rules","required"])):I("",!0),W("workZipCode")?(f(),s(qe,{key:25,modelValue:F.value.formInfo.extInfo.workZipCode,"onUpdate:modelValue":a[39]||(a[39]=e=>F.value.formInfo.extInfo.workZipCode=e),label:"工作邮编",required:"YES"===(null===(ce=t(K).workZipCode)||void 0===ce?void 0:ce.isMustInput),name:`${e.prefix}_workPostCode`,placeholder:"请输入","validate-type":[t(V).ZIP_CODE]},null,8,["modelValue","required","name","validate-type"])):I("",!0),W("workPlace")?(f(),s(qe,{key:26,modelValue:F.value.formInfo.extInfo.workStation,"onUpdate:modelValue":a[40]||(a[40]=e=>F.value.formInfo.extInfo.workStation=e),label:"单位名称",name:`${e.prefix}_workPostCode`,placeholder:"请输入",rules:[{validator:(...e)=>ee(20,...e)}],required:"YES"===(null===(ye=t(K).workPlace)||void 0===ye?void 0:ye.isMustInput)},null,8,["modelValue","name","rules","required"])):I("",!0),W("workContent")?(f(),s(qe,{key:27,modelValue:F.value.formInfo.extInfo.workContent,"onUpdate:modelValue":a[41]||(a[41]=e=>F.value.formInfo.extInfo.workContent=e),label:"工作内容",name:`${e.prefix}_workContent`,required:"YES"===(null===(xe=t(K).workContent)||void 0===xe?void 0:xe.isMustInput),placeholder:"请输入",rules:[{validator:(...e)=>ee(100,...e)}]},null,8,["modelValue","name","required","rules"])):I("",!0),W("taxCert")?(f(),s(Se,{key:28,modelValue:F.value.formInfo.extInfo.taxResident,"onUpdate:modelValue":a[42]||(a[42]=e=>F.value.formInfo.extInfo.taxResident=e),label:"税收居民身份",name:`${e.prefix}_taxResident`,"data-source":t(U),required:"YES"===(null===(Ve=t(K).taxCert)||void 0===Ve?void 0:Ve.isMustInput),placeholder:"请输入"},null,8,["modelValue","name","data-source","required"])):I("",!0),W("partTime")?(f(),s(qe,{key:29,modelValue:F.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":a[44]||(a[44]=e=>F.value.formInfo.extInfo.isPartTime=e),label:"是否兼职",name:`${e.prefix}_isPartTime`,required:"YES"===(null===(be=t(K).partTime)||void 0===be?void 0:be.isMustInput),placeholder:"请输入"},{input:v((()=>[p(we,{modelValue:F.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":a[43]||(a[43]=e=>F.value.formInfo.extInfo.isPartTime=e),"is-view":e.isView,options:t(w)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","name","required"])):I("",!0),null!==(he=t(K).beneficiaryType)&&void 0!==he&&he.isDisplay?(f(),s(Se,{key:30,modelValue:F.value.formInfo.benefitOrder,"onUpdate:modelValue":a[45]||(a[45]=e=>F.value.formInfo.benefitOrder=e),label:"受益人顺序",name:`${e.prefix}_benefitOrder`,"data-source":t(M),required:"YES"===(null===(Ce=t(K).beneficiaryType)||void 0===Ce?void 0:Ce.isMustInput)},null,8,["modelValue","name","data-source","required"])):I("",!0),null!==(Ee=t(K).benefitRate)&&void 0!==Ee&&Ee.isDisplay?(f(),s(qe,{key:31,modelValue:F.value.formInfo.benefitRate,"onUpdate:modelValue":a[46]||(a[46]=e=>F.value.formInfo.benefitRate=e),required:"YES"===(null===(ke=t(K).benefitRate)||void 0===ke?void 0:ke.isMustInput),name:`${e.prefix}_benefitRate`,rules:[{validator:J}],label:"受益比例"},{extra:v((()=>[O])),_:1},8,["modelValue","required","name","rules"])):I("",!0)])):I("",!0)}}}))}}}))}();
