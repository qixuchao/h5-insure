!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.input-extra{margin-left:.33333rem}.date-extra{padding-left:var(--zaui-card-border, .4rem);margin-left:var(--zaui-card-border, .4rem);border-left:1px solid #eeeff4}\n',document.head.appendChild(e),System.register(["./vendor-legacy-6b892aaa.js","./index-legacy-7d4bb2cf.js","./useDicData-legacy-4ac202f9.js"],(function(e){"use strict";var l,o,a,n,i,d,u,r,t,f,m,s,v,p,I,c,y,V,b,x,h,k,E;return{setters:[function(e){e.ao,l=e.g,o=e.a5,a=e.Q,n=e.C,i=e.d,d=e.x,u=e.X,r=e.r,t=e.z,f=e.h,m=e.m,s=e.j,v=e.k,p=e.n,I=e.s,c=e.y,y=e.B},function(e){V=e.J,b=e.K,x=e.L,h=e.r,k=e.M},function(e){E=e.u}],execute:function(){e("R",[{label:"本人",value:"1"},{label:"配偶",value:"2"},{label:"子女",value:"3"},{label:"父母",value:"4"}]),e("B",[{label:"法人",value:"1"},{label:"指定",value:"2"}]);const C=[{label:"已婚",value:"1"},{label:"未婚",value:"2"}],S=e("a",[{label:"本人",value:"1"},{label:"配偶",value:"2"},{label:"子女",value:"3"},{label:"父母",value:"4"}]),q=[{label:"仅为中国税收居民",value:"1"},{label:"仅为非中国税收居民",value:"2"},{label:"既是中国税收居民又是其他国家（地区）税收居民",value:"3"}],w=e("b",[{label:"第一顺位",value:"1"},{label:"第二顺位",value:"2"},{label:"第三顺位",value:"3"},{label:"其他",value:"4"}]);var Y={exports:{}};Y.exports=function(e,l,o){e=e||{};var a=l.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(e,l,o,n){return a.fromToBase(e,l,o,n)}o.en.relativeTime=n,a.fromToBase=function(l,a,i,d,u){for(var r,t,f,m=i.$locale().relativeTime||n,s=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],v=s.length,p=0;p<v;p+=1){var I=s[p];I.d&&(r=d?o(l).diff(i,I.d,!0):i.diff(l,I.d,!0));var c=(e.rounding||Math.round)(Math.abs(r));if(f=r>0,c<=I.r||!I.r){c<=1&&p>0&&(I=s[p-1]);var y=m[I.l];u&&(c=u(""+c)),t="string"==typeof y?y.replace("%d",c):y(c,a,I.l,f);break}}if(a)return t;var V=f?m.future:m.past;return"function"==typeof V?V(t):V.replace("%s",t)},a.to=function(e,l){return i(e,l,this,!0)},a.from=function(e,l){return i(e,l,this)};var d=function(e){return e.$u?o.utc():o()};a.toNow=function(e){return this.to(d(this),e)},a.fromNow=function(e){return this.from(d(this),e)}};var D=Y.exports;const U={key:0,class:"com-personal-wrapper"},T={class:"date-extra"},M=y("长期"),g=c("span",{class:"input-extra"},"万",-1),A=c("span",{class:"input-extra"},"万",-1),P=c("span",{class:"input-extra"},"%",-1);e("_",l({props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1}},emits:["update:images"],setup(e,{emit:l}){const y=e;o();const{venderCode:Y=""}=a().query,_=E("CERT_TYPE"),N=E(`${Y.toLocaleUpperCase()}_OCCUPATION`);E("MARRIAGE_STATUS");const R=E("DEGREE"),$=E("NATIONALITY"),O=E("NATIONAL_REGION_CODE"),Z=n([]),L=n(!1),z=n({formInfo:y.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},front:"",back:"",occupationalText:""});i.extend(D);const B=n(2===y.formInfo.certEndType),G=d((()=>{const e={};return y.factorList.forEach((l=>{e[l.code]=l})),e}));d((()=>(z.value.formInfo.extInfo.nationalityCode,[])));const j=(e,l)=>/^[+-]?(\d|[1-9]\d{1,5})(\.\d{1,2})?$/.test(e)?"":"年收入最多录入10位数字",H=(e,l)=>/^\+?[1-9][0-9]*$/.test(e)?"":"收益比例只能填写1-100的正数",F=(e,l,o)=>l.length>e?`最大不能超过${e}个字符`:"",K=(e,l)=>{var o,a;if("4"===(null===(o=z.value.formInfo)||void 0===o?void 0:o.certType)){if(!/^[a-zA-Z]\d{9}$/.test(`${e}`))return"出生证号码错误"}else if("2"===(null===(a=z.value.formInfo)||void 0===a?void 0:a.certType))return`${e}`.length>=5&&/^[^\u4e00-\u9fa5]+$/.test(`${e}`)?"":"证件号码错误";return""},J=(e,l)=>{var o,a,n,d,u,r,t;if("CHN"===(null===(o=z.value.formInfo)||void 0===o||null===(a=o.extInfo)||void 0===a?void 0:a.nationalityCode)){if(!["1","2","3","4"].includes(`${e}`))return"国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证"}else if(["HKG","MAC"].includes(null===(n=z.value.formInfo)||void 0===n||null===(d=n.extInfo)||void 0===d?void 0:d.nationalityCode)){if(!["15","9"].includes(`${e}`))return"国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证"}else if("TWN"===(null===(u=z.value.formInfo)||void 0===u||null===(r=u.extInfo)||void 0===r?void 0:r.nationalityCode)){if(!["10"].includes(`${e}`))return"国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证"}else if(!["2","11"].includes(`${e}`))return"国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证";return+i(null===(t=z.value.formInfo)||void 0===t?void 0:t.birthday).toNow(!0).split(" ")[0]>2&&"4"==`${e}`?"年龄大于等于2周岁时，证件类型不能选择出生证":""};return u((()=>B.value),(e=>{e?(z.value.formInfo.certEndType=2,z.value.formInfo.certEndDate=""):z.value.formInfo.certEndType=1}),{immediate:!0}),u((()=>z.value.formInfo.certType),(e=>{[1,2].includes(+e)?L.value=!0:L.value=!1}),{deep:!0,immediate:!0}),u((()=>z.value.formInfo.certNo),(e=>{V(e)?(z.value.formInfo.gender=b(e),z.value.formInfo.birthday=new Date(x(e)),L.value=!0):L.value=!1}),{deep:!0,immediate:!0}),u((()=>y.images),(e=>{Z.value=e}),{immediate:!0}),u(Z,(e=>{l("update:images",e)}),{deep:!0}),(l,o)=>{var a,n,i,d,u,y,V,b,x,E,Y,D,Q,W,X,ee,le,oe,ae,ne,ie,de,ue,re,te,fe,me,se,ve,pe,Ie,ce,ye,Ve,be,xe,he,ke,Ee,Ce,Se,qe,we,Ye,De,Ue,Te,Me,ge,Ae,Pe,_e,Ne,Re,$e,Oe,Ze,Le,ze,Be,Ge,je,He,Fe;const Ke=r("ProRadioButton"),Je=r("ProField"),Qe=r("ProPicker"),We=r("ProIDCardUpload"),Xe=r("ProImageUpload"),el=r("ProDatePicker"),ll=r("van-checkbox"),ol=r("ProCascader");return Object.keys(t(G)).length?(f(),m("div",U,[null!==(a=t(G).insureRelation)&&void 0!==a&&a.isDisplay?(f(),s(Je,{key:0,modelValue:z.value.formInfo.relationToInsured,"onUpdate:modelValue":o[1]||(o[1]=e=>z.value.formInfo.relationToInsured=e),name:"relationToInsured",required:"YES"===(null===(n=t(G).insureRelation)||void 0===n?void 0:n.isMustInput),label:"是被保人的"},{input:v((()=>[p(Ke,{modelValue:z.value.formInfo.relationToInsured,"onUpdate:modelValue":o[0]||(o[0]=e=>z.value.formInfo.relationToInsured=e),"is-view":e.isView,options:t(S)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required"])):I("",!0),"YES"===(null===(i=t(G).certType)||void 0===i?void 0:i.isDisplay)?(f(),s(Qe,{key:1,modelValue:z.value.formInfo.certType,"onUpdate:modelValue":o[2]||(o[2]=e=>z.value.formInfo.certType=e),label:"证件类型",name:"certType",readonly:"","data-source":t(_),mapping:{label:"name",value:"code",children:"child"},required:"YES"===(null===(d=t(G).certType)||void 0===d?void 0:d.isMustInput),rules:[{validator:J}]},null,8,["modelValue","data-source","required","rules"])):I("",!0),"YES"===(null===(u=t(G).attachment)||void 0===u?void 0:u.isDisplay)&&z.value.formInfo.certType+""=="1"?(f(),s(Je,{key:2,label:"身份证上传",block:"",required:"YES"===(null===(y=t(G).certType)||void 0===y?void 0:y.isMustInput)},{input:v((()=>[p(We,{front:Z.value[0],"onUpdate:front":o[3]||(o[3]=e=>Z.value[0]=e),back:Z.value[1],"onUpdate:back":o[4]||(o[4]=e=>Z.value[1]=e)},null,8,["front","back"])])),_:1},8,["required"])):I("",!0),"YES"===(null===(V=t(G).attachment)||void 0===V?void 0:V.isDisplay)&&z.value.formInfo.certType&&z.value.formInfo.certType+""!="1"?(f(),s(Je,{key:3,label:"证件上传",block:"",required:"YES"===(null===(b=t(G).certType)||void 0===b?void 0:b.isMustInput)},{input:v((()=>[p(Xe,{modelValue:Z.value,"onUpdate:modelValue":o[5]||(o[5]=e=>Z.value=e),"max-count":1},null,8,["modelValue"])])),_:1},8,["required"])):I("",!0),"YES"===(null===(x=t(G).certNo)||void 0===x?void 0:x.isDisplay)?(f(),s(Je,{key:4,modelValue:z.value.formInfo.certNo,"onUpdate:modelValue":o[6]||(o[6]=e=>z.value.formInfo.certNo=e),label:"证件号码",name:"certNo",required:"YES"===(null===(E=t(G).certNo)||void 0===E?void 0:E.isMustInput),placeholder:"请输入",rules:[{validator:K}],"validate-type":"1"===z.value.formInfo.certType?["idCard"]:[]},null,8,["modelValue","required","rules","validate-type"])):I("",!0),"YES"===(null===(Y=t(G).name)||void 0===Y?void 0:Y.isDisplay)?(f(),s(Je,{key:5,modelValue:z.value.formInfo.name,"onUpdate:modelValue":o[7]||(o[7]=e=>z.value.formInfo.name=e),label:"姓名",name:"name",required:"YES"===(null===(D=t(G).name)||void 0===D?void 0:D.isMustInput)},null,8,["modelValue","required"])):I("",!0),"YES"===(null===(Q=t(G).sex)||void 0===Q?void 0:Q.isDisplay)?(f(),s(Je,{key:6,modelValue:z.value.formInfo.gender,"onUpdate:modelValue":o[9]||(o[9]=e=>z.value.formInfo.gender=e),required:"YES"===(null===(W=t(G).sex)||void 0===W?void 0:W.isMustInput),label:"性别",name:"gender",placeholder:"请选择","is-view":L.value},{input:v((()=>[p(Ke,{modelValue:z.value.formInfo.gender,"onUpdate:modelValue":o[8]||(o[8]=e=>z.value.formInfo.gender=e),disabled:L.value,"is-view":e.isView,options:t(h)},null,8,["modelValue","disabled","is-view","options"])])),_:1},8,["modelValue","required","is-view"])):I("",!0),"YES"===(null===(X=t(G).birthday)||void 0===X?void 0:X.isDisplay)?(f(),s(el,{key:7,modelValue:z.value.formInfo.birthday,"onUpdate:modelValue":o[10]||(o[10]=e=>z.value.formInfo.birthday=e),label:"出生日期",name:"birthday",min:z.value.birth.min,max:z.value.birth.max,type:"date",required:"YES"===(null===(ee=t(G).birthday)||void 0===ee?void 0:ee.isMustInput),"is-view":L.value},null,8,["modelValue","min","max","required","is-view"])):I("",!0),"YES"===(null===(le=t(G).certEndDate)||void 0===le?void 0:le.isDisplay)?(f(),s(el,{key:8,modelValue:z.value.formInfo.certEndDate,"onUpdate:modelValue":o[12]||(o[12]=e=>z.value.formInfo.certEndDate=e),label:"有效期至",name:"certEndDate",type:"date",min:z.value.certEndDate.min,max:z.value.certEndDate.max,"is-view":B.value,read:"",required:"YES"===(null===(oe=t(G).certEndDate)||void 0===oe?void 0:oe.isMustInput)},{extra:v((()=>[c("div",T,[p(ll,{modelValue:B.value,"onUpdate:modelValue":o[11]||(o[11]=e=>B.value=e)},{default:v((()=>[M])),_:1},8,["modelValue"])])])),_:1},8,["modelValue","min","max","is-view","required"])):I("",!0),"YES"===(null===(ae=t(G).houseHold)||void 0===ae?void 0:ae.isDisplay)?(f(),s(ol,{key:9,modelValue:z.value.formInfo.extInfo.provinceCode,"onUpdate:modelValue":o[13]||(o[13]=e=>z.value.formInfo.extInfo.provinceCode=e),field1:z.value.formInfo.extInfo.provinceCode,"onUpdate:field1":o[14]||(o[14]=e=>z.value.formInfo.extInfo.provinceCode=e),field2:z.value.formInfo.extInfo.cityCode,"onUpdate:field2":o[15]||(o[15]=e=>z.value.formInfo.extInfo.cityCode=e),field3:z.value.formInfo.extInfo.areaCode,"onUpdate:field3":o[16]||(o[16]=e=>z.value.formInfo.extInfo.areaCode=e),label:"户籍所在地",name:"provinceCode",placeholder:"请选择","is-link":"",required:"YES"===(null===(ne=t(G).houseHold)||void 0===ne?void 0:ne.isMustInput),"data-source":t(O),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","required","data-source"])):I("",!0),"YES"===(null===(ie=t(G).hasSocialInsurance)||void 0===ie?void 0:ie.isDisplay)?(f(),s(Je,{key:10,modelValue:z.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[18]||(o[18]=e=>z.value.formInfo.extInfo.hasSocialInsurance=e),label:"社保",name:"hasSocialInsurance",placeholder:"请选择",required:"YES"===(null===(de=t(G).hasSocialInsurance)||void 0===de?void 0:de.isMustInput)},{input:v((()=>[p(Ke,{modelValue:z.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[17]||(o[17]=e=>z.value.formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,options:t(k)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required"])):I("",!0),"YES"===(null===(ue=t(G).occupation)||void 0===ue?void 0:ue.isDisplay)?(f(),s(ol,{key:11,modelValue:z.value.formInfo.extInfo.occupationCode,"onUpdate:modelValue":o[19]||(o[19]=e=>z.value.formInfo.extInfo.occupationCode=e),label:"职业",name:"occupationCode",placeholder:"请选择",required:"YES"===(null===(re=t(G).occupation)||void 0===re?void 0:re.isMustInput),"data-source":t(N),mapping:{label:"value",value:"code",children:"children"},"is-link":""},null,8,["modelValue","required","data-source"])):I("",!0),"YES"===(null===(te=t(G).annualIncome)||void 0===te?void 0:te.isDisplay)?(f(),s(Je,{key:12,modelValue:z.value.formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":o[20]||(o[20]=e=>z.value.formInfo.extInfo.personalAnnualIncome=e),label:"个人年收入",name:"personalAnnualIncome",required:"YES"===(null===(fe=t(G).annualIncome)||void 0===fe?void 0:fe.isMustInput),placeholder:"请输入",rules:[{validator:j}]},{extra:v((()=>[g])),_:1},8,["modelValue","required","rules"])):I("",!0),"YES"===(null===(me=t(G).familyAnnualIncome)||void 0===me?void 0:me.isDisplay)?(f(),s(Je,{key:13,modelValue:z.value.formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":o[21]||(o[21]=e=>z.value.formInfo.extInfo.familyAnnualIncome=e),label:"家庭年收入",name:"familyAnnualIncome",placeholder:"请输入",rules:[{validator:j}],required:"YES"===(null===(se=t(G).familyAnnualIncome)||void 0===se?void 0:se.isMustInput)},{extra:v((()=>[A])),_:1},8,["modelValue","rules","required"])):I("",!0),"YES"===(null===(ve=t(G).nationality)||void 0===ve?void 0:ve.isDisplay)?(f(),s(Qe,{key:14,modelValue:z.value.formInfo.extInfo.nationalityCode,"onUpdate:modelValue":o[22]||(o[22]=e=>z.value.formInfo.extInfo.nationalityCode=e),label:"国籍",name:"nationalityCode",readonly:"","data-source":t($),mapping:{label:"name",value:"code",children:"child"},placeholder:"请选择",required:"YES"===(null===(pe=t(G).nationality)||void 0===pe?void 0:pe.isMustInput),"is-link":""},null,8,["modelValue","data-source","required"])):I("",!0),"YES"===(null===(Ie=t(G).USAGreenCard)||void 0===Ie?void 0:Ie.isDisplay)?(f(),s(Je,{key:15,modelValue:z.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":o[24]||(o[24]=e=>z.value.formInfo.extInfo.hasUsCard=e),label:"美国绿卡",name:"hasUsCard",placeholder:"请选择",required:"YES"===(null===(ce=t(G).USAGreenCard)||void 0===ce?void 0:ce.isMustInput)},{input:v((()=>[p(Ke,{modelValue:z.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":o[23]||(o[23]=e=>z.value.formInfo.extInfo.hasUsCard=e),"is-view":e.isView,options:t(k)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required"])):I("",!0),"YES"===(null===(ye=t(G).marriage)||void 0===ye?void 0:ye.isDisplay)?(f(),s(Qe,{key:16,modelValue:z.value.formInfo.extInfo.marriageStatus,"onUpdate:modelValue":o[25]||(o[25]=e=>z.value.formInfo.extInfo.marriageStatus=e),label:"婚姻状况",name:"marriageStatus",readonly:"",placeholder:"请选择","data-source":t(C),"is-link":"",required:"YES"===(null===(Ve=t(G).marriage)||void 0===Ve?void 0:Ve.isMustInput)},null,8,["modelValue","data-source","required"])):I("",!0),"YES"===(null===(be=t(G).educationDegree)||void 0===be?void 0:be.isDisplay)?(f(),s(Qe,{key:17,modelValue:z.value.formInfo.extInfo.educationDegree,"onUpdate:modelValue":o[26]||(o[26]=e=>z.value.formInfo.extInfo.educationDegree=e),label:"学历",readonly:"",name:"educationDegree","data-source":t(R),mapping:{label:"name",value:"code",children:"child"},placeholder:"请选择",required:"YES"===(null===(xe=t(G).educationDegree)||void 0===xe?void 0:xe.isMustInput),"is-link":""},null,8,["modelValue","data-source","required"])):I("",!0),"YES"===(null===(he=t(G).mobile)||void 0===he?void 0:he.isDisplay)?(f(),s(Je,{key:18,modelValue:z.value.formInfo.mobile,"onUpdate:modelValue":o[27]||(o[27]=e=>z.value.formInfo.mobile=e),label:"手机号码",name:"mobile",placeholder:"请输入",required:"YES"===(null===(ke=t(G).mobile)||void 0===ke?void 0:ke.isMustInput),"validate-type":["phone"]},null,8,["modelValue","required"])):I("",!0),"YES"===(null===(Ee=t(G).email)||void 0===Ee?void 0:Ee.isDisplay)?(f(),s(Je,{key:19,modelValue:z.value.formInfo.email,"onUpdate:modelValue":o[28]||(o[28]=e=>z.value.formInfo.email=e),label:"电子邮箱",name:"email",placeholder:"请输入",required:"YES"===(null===(Ce=t(G).email)||void 0===Ce?void 0:Ce.isMustInput),"validate-type":["mail"]},null,8,["modelValue","required"])):I("",!0),"YES"===(null===(Se=t(G).familyAddress)||void 0===Se?void 0:Se.isDisplay)?(f(),s(ol,{key:20,modelValue:z.value.formInfo.extInfo.familyProvinceCode,"onUpdate:modelValue":o[29]||(o[29]=e=>z.value.formInfo.extInfo.familyProvinceCode=e),field1:z.value.formInfo.extInfo.familyProvinceCode,"onUpdate:field1":o[30]||(o[30]=e=>z.value.formInfo.extInfo.familyProvinceCode=e),field2:z.value.formInfo.extInfo.familyCityCode,"onUpdate:field2":o[31]||(o[31]=e=>z.value.formInfo.extInfo.familyCityCode=e),field3:z.value.formInfo.extInfo.familyAreaCode,"onUpdate:field3":o[32]||(o[32]=e=>z.value.formInfo.extInfo.familyAreaCode=e),label:"家庭地址",name:"familyProvinceCode",placeholder:"请选择","is-link":"",required:"YES"===(null===(qe=t(G).familyAddress)||void 0===qe?void 0:qe.isMustInput),"data-source":t(O),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","required","data-source"])):I("",!0),"YES"===(null===(we=t(G).familyAddressDetail)||void 0===we?void 0:we.isDisplay)?(f(),s(Je,{key:21,modelValue:z.value.formInfo.extInfo.familyAddress,"onUpdate:modelValue":o[33]||(o[33]=e=>z.value.formInfo.extInfo.familyAddress=e),label:"地址详情",name:"familyAddress",placeholder:"请输入",rules:[{validator:(...e)=>F(100,...e)}],required:"YES"===(null===(Ye=t(G).familyAddressDetail)||void 0===Ye?void 0:Ye.isMustInput)},null,8,["modelValue","rules","required"])):I("",!0),"YES"===(null===(De=t(G).familyPostCode)||void 0===De?void 0:De.isDisplay)?(f(),s(Je,{key:22,modelValue:z.value.formInfo.extInfo.familyZipCode,"onUpdate:modelValue":o[34]||(o[34]=e=>z.value.formInfo.extInfo.familyZipCode=e),label:"家庭邮编",name:"familyZipCode",placeholder:"请输入",required:"YES"===(null===(Ue=t(G).familyPostCode)||void 0===Ue?void 0:Ue.isMustInput),"validate-type":["zipCode"]},null,8,["modelValue","required"])):I("",!0),"YES"===(null===(Te=t(G).workAddress)||void 0===Te?void 0:Te.isDisplay)?(f(),s(ol,{key:23,modelValue:z.value.formInfo.extInfo.workProvinceCode,"onUpdate:modelValue":o[35]||(o[35]=e=>z.value.formInfo.extInfo.workProvinceCode=e),field1:z.value.formInfo.extInfo.workProvinceCode,"onUpdate:field1":o[36]||(o[36]=e=>z.value.formInfo.extInfo.workProvinceCode=e),field2:z.value.formInfo.extInfo.workCityCode,"onUpdate:field2":o[37]||(o[37]=e=>z.value.formInfo.extInfo.workCityCode=e),field3:z.value.formInfo.extInfo.workAreaCode,"onUpdate:field3":o[38]||(o[38]=e=>z.value.formInfo.extInfo.workAreaCode=e),label:"工作地址",name:"workProvinceCode",placeholder:"请选择","is-link":"",required:"YES"===(null===(Me=t(G).workAddress)||void 0===Me?void 0:Me.isMustInput),"data-source":t(O),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","required","data-source"])):I("",!0),"YES"===(null===(ge=t(G).workAddressDetail)||void 0===ge?void 0:ge.isDisplay)?(f(),s(Je,{key:24,modelValue:z.value.formInfo.extInfo.workAddress,"onUpdate:modelValue":o[39]||(o[39]=e=>z.value.formInfo.extInfo.workAddress=e),label:"地址详情",name:"workAddress",placeholder:"请输入",rules:[{validator:(...e)=>F(100,...e)}],required:"YES"===(null===(Ae=t(G).workAddressDetail)||void 0===Ae?void 0:Ae.isMustInput)},null,8,["modelValue","rules","required"])):I("",!0),"YES"===(null===(Pe=t(G).workZipCode)||void 0===Pe?void 0:Pe.isDisplay)?(f(),s(Je,{key:25,modelValue:z.value.formInfo.extInfo.workZipCode,"onUpdate:modelValue":o[40]||(o[40]=e=>z.value.formInfo.extInfo.workZipCode=e),label:"工作邮编",required:"YES"===(null===(_e=t(G).workZipCode)||void 0===_e?void 0:_e.isMustInput),name:"workPostCode",placeholder:"请输入","validate-type":["zipCode"]},null,8,["modelValue","required"])):I("",!0),"YES"===(null===(Ne=t(G).workPlace)||void 0===Ne?void 0:Ne.isDisplay)?(f(),s(Je,{key:26,modelValue:z.value.formInfo.extInfo.workStation,"onUpdate:modelValue":o[41]||(o[41]=e=>z.value.formInfo.extInfo.workStation=e),label:"单位名称",name:"workPostCode",placeholder:"请输入",rules:[{validator:(...e)=>F(20,...e)}],required:"YES"===(null===(Re=t(G).workPlace)||void 0===Re?void 0:Re.isMustInput)},null,8,["modelValue","rules","required"])):I("",!0),"YES"===(null===($e=t(G).workContent)||void 0===$e?void 0:$e.isDisplay)?(f(),s(Je,{key:27,modelValue:z.value.formInfo.extInfo.workContent,"onUpdate:modelValue":o[42]||(o[42]=e=>z.value.formInfo.extInfo.workContent=e),label:"工作内容",name:"workContent",required:"YES"===(null===(Oe=t(G).workContent)||void 0===Oe?void 0:Oe.isMustInput),placeholder:"请输入",rules:[{validator:(...e)=>F(100,...e)}]},null,8,["modelValue","required","rules"])):I("",!0),"YES"===(null===(Ze=t(G).taxCert)||void 0===Ze?void 0:Ze.isDisplay)?(f(),s(Qe,{key:28,modelValue:z.value.formInfo.extInfo.taxResident,"onUpdate:modelValue":o[43]||(o[43]=e=>z.value.formInfo.extInfo.taxResident=e),label:"税收居民身份",name:"taxResident","data-source":t(q),required:"YES"===(null===(Le=t(G).taxCert)||void 0===Le?void 0:Le.isMustInput),placeholder:"请输入"},null,8,["modelValue","data-source","required"])):I("",!0),"YES"===(null===(ze=t(G).partTime)||void 0===ze?void 0:ze.isDisplay)?(f(),s(Je,{key:29,modelValue:z.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":o[45]||(o[45]=e=>z.value.formInfo.extInfo.isPartTime=e),label:"是否兼职",name:"isPartTime",required:"YES"===(null===(Be=t(G).partTime)||void 0===Be?void 0:Be.isMustInput),placeholder:"请输入"},{input:v((()=>[p(Ke,{modelValue:z.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":o[44]||(o[44]=e=>z.value.formInfo.extInfo.isPartTime=e),"is-view":e.isView,options:t(k)},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required"])):I("",!0),null!==(Ge=t(G).beneficiaryType)&&void 0!==Ge&&Ge.isDisplay?(f(),s(Qe,{key:30,modelValue:z.value.formInfo.benefitOrder,"onUpdate:modelValue":o[46]||(o[46]=e=>z.value.formInfo.benefitOrder=e),label:"受益人顺序",name:"benefitOrder","data-source":t(w),required:"YES"===(null===(je=t(G).beneficiaryType)||void 0===je?void 0:je.isMustInput)},null,8,["modelValue","data-source","required"])):I("",!0),null!==(He=t(G).benefitRate)&&void 0!==He&&He.isDisplay?(f(),s(Je,{key:31,modelValue:z.value.formInfo.benefitRate,"onUpdate:modelValue":o[47]||(o[47]=e=>z.value.formInfo.benefitRate=e),required:"YES"===(null===(Fe=t(G).benefitRate)||void 0===Fe?void 0:Fe.isMustInput),name:"benefitRate",rules:[{validator:H}],label:"受益比例"},{extra:v((()=>[P])),_:1},8,["modelValue","required","rules"])):I("",!0)])):I("",!0)}}}))}}}))}();
