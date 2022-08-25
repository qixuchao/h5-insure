import{aq as Re,g as Ne,Q as Ye,O as ge,E as Z,d as W,y as qe,_ as Y,r as V,A as l,j as i,n as $e,k as f,m as p,p as c,t as d,z as j,C as Oe}from"./vendor-25e691d5.js";import{J as I,a0 as b,a1 as Le,a2 as He,a3 as Ge,Y as he,t as Ze,a4 as z}from"./index-8557fe2d.js";import{u as U}from"./useDicData-d931c3ad.js";const ru=[{label:"\u672C\u4EBA",value:"1"},{label:"\u914D\u5076",value:"2"},{label:"\u5B50\u5973",value:"3"},{label:"\u7236\u6BCD",value:"4"}],Me={LEGAL:"1",SPECIFY:"2"},tu=[{label:"\u6CD5\u5B9A",value:Me.LEGAL},{label:"\u6307\u5B9A",value:Me.SPECIFY}],je=[{label:"\u5DF2\u5A5A",value:"1"},{label:"\u672A\u5A5A",value:"2"}],g={SELF:"1",SPOUSE:"2",CHILD:"3",PARENT:"4"},Ke=[{label:"\u672C\u4EBA",value:g.SELF},{label:"\u914D\u5076",value:g.SPOUSE},{label:"\u5B50\u5973",value:g.CHILD},{label:"\u7236\u6BCD",value:g.PARENT}],We=[{label:"\u4EC5\u4E3A\u4E2D\u56FD\u7A0E\u6536\u5C45\u6C11",value:"1"},{label:"\u4EC5\u4E3A\u975E\u4E2D\u56FD\u7A0E\u6536\u5C45\u6C11",value:"2"},{label:"\u65E2\u662F\u4E2D\u56FD\u7A0E\u6536\u5C45\u6C11\u53C8\u662F\u5176\u4ED6\u56FD\u5BB6\uFF08\u5730\u533A\uFF09\u7A0E\u6536\u5C45\u6C11",value:"3"}],ze=[{label:"\u7B2C\u4E00\u987A\u4F4D",value:"1"},{label:"\u7B2C\u4E8C\u987A\u4F4D",value:"2"},{label:"\u7B2C\u4E09\u987A\u4F4D",value:"3"},{label:"\u5176\u4ED6",value:"4"}];var Pe={exports:{}};(function(r,X){(function(C,w){r.exports=w()})(Re,function(){return function(C,w,T){C=C||{};var y=w.prototype,$={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function O(s,E,e,D){return y.fromToBase(s,E,e,D)}T.en.relativeTime=$,y.fromToBase=function(s,E,e,D,n){for(var q,t,M,P=e.$locale().relativeTime||$,k=C.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],K=k.length,F=0;F<K;F+=1){var B=k[F];B.d&&(q=D?T(s).diff(e,B.d,!0):e.diff(s,B.d,!0));var x=(C.rounding||Math.round)(Math.abs(q));if(M=q>0,x<=B.r||!B.r){x<=1&&F>0&&(B=k[F-1]);var R=P[B.l];n&&(x=n(""+x)),t=typeof R=="string"?R.replace("%d",x):R(x,E,B.l,M);break}}if(E)return t;var a=M?P.future:P.past;return typeof a=="function"?a(t):a.replace("%s",t)},y.to=function(s,E){return O(s,E,this,!0)},y.from=function(s,E){return O(s,E,this)};var S=function(s){return s.$u?T.utc():T()};y.toNow=function(s){return this.to(S(this),s)},y.fromNow=function(s){return this.from(S(this),s)}}})})(Pe);var Xe=Pe.exports;const Je={key:0,class:"com-personal-wrapper"},Qe={class:"date-extra"},_e=Oe("\u957F\u671F"),eu=j("span",{class:"input-extra"},"\u4E07",-1),uu=j("span",{class:"input-extra"},"\u4E07",-1),ou=j("span",{class:"input-extra"},"%",-1),iu=Ne({props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]}},emits:["update:images"],setup(r,{emit:X}){const C=r;Ye();const{venderCode:w=""}=ge().query,T=U("CERT_TYPE"),y=U(`${w.toLocaleUpperCase()}_OCCUPATION`);U("MARRIAGE_STATUS");const $=U("DEGREE"),O=U("NATIONALITY"),S=U("NATIONAL_REGION_CODE"),s=Z([]),E=Z(!1),e=Z({formInfo:C.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""});W.extend(Xe);const D=Z(C.formInfo.certEndType===2),n=qe(()=>{const a={};return C.factorList.forEach(u=>{a[u.code]=u}),a}),q=a=>{e.value.formInfo.certNo=a.personIdCard,e.value.formInfo.name=a.personName,e.value.formInfo.certEndDate=W(a.validDateEnd,"YYYYMMDD").toDate()},t=a=>n.value&&n.value[a]&&n.value[a].isDisplay===he.YES,M=qe(()=>[I.CERT,I.HOUSE_HOLD].includes(e.value.formInfo.certType)?[b.ID_CARD]:e.value.formInfo.certType===I.BIRTH?[b.BIRTH]:e.value.formInfo.certType===I.PASSPORT?[b.PASSPORT]:[]),P=(a,u)=>{var v;return((v=n.value.certEndDate)==null?void 0:v.isMustInput)==="YES"?e.value.formInfo.certEndType===2||e.value.formInfo.certEndDate?"":"\u8BF7\u9009\u62E9\u6709\u6548\u671F\u81F3":""},k=(a,u)=>/^\d{1,10}(\.\d{1,2})?$/.test(a)?"":"\u5E74\u6536\u5165\u6700\u591A\u5F55\u516510\u4F4D\u6570\u5B57",K=(a,u)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(a)?"":"\u6536\u76CA\u6BD4\u4F8B\u53EA\u80FD\u586B\u51991-100\u7684\u6B63\u6574\u6570",F=(a,u,v)=>u.length>a?`\u6700\u5927\u4E0D\u80FD\u8D85\u8FC7${a}\u4E2A\u5B57\u7B26`:"",B=(a,u)=>{var v,m,A,L,H,N,G;if(((m=(v=e.value.formInfo)==null?void 0:v.extInfo)==null?void 0:m.nationalityCode)==="CHN"){if(![I.CERT,I.HOUSE_HOLD,I.BIRTH,I.MILITARY_CARD].includes(`${a}`))return"\u56FD\u7C4D\u4E3A\u4E2D\u56FD\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u53EA\u5141\u8BB8\u9009\u62E9\u8EAB\u4EFD\u8BC1\u3001\u6237\u53E3\u672C\u3001\u51FA\u751F\u8BC1\u3001\u519B\u5B98\u8BC1"}else if(["HKG","MAC"].includes((L=(A=e.value.formInfo)==null?void 0:A.extInfo)==null?void 0:L.nationalityCode)){if(![I.HK_MACAO_RESIDENCE_PERMIT,I.HONGKONG_MACAO].includes(`${a}`))return"\u56FD\u7C4D\u4E3A\u4E2D\u56FD\u9999\u6E2F\u3001\u4E2D\u56FD\u6FB3\u95E8\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u53EA\u5141\u8BB8\u9009\u62E9\u6E2F\u6FB3\u901A\u884C\u8BC1\u3001\u6E2F\u6FB3\u5C45\u6C11\u5C45\u4F4F\u8BC1"}else if(((N=(H=e.value.formInfo)==null?void 0:H.extInfo)==null?void 0:N.nationalityCode)==="TWN"){if(![I.TAIWAN_RESIDENCE_PERMIT,I.TAIWAN_TRAVEL].includes(`${a}`))return"\u56FD\u7C4D\u4E3A\u4E2D\u56FD\u53F0\u6E7E\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u53EA\u5141\u8BB8\u9009\u62E9\u53F0\u6E7E\u901A\u884C\u8BC1\u3001\u53F0\u6E7E\u5C45\u6C11\u5C45\u4F4F\u8BC1"}else if(![I.PASSPORT,I.FOREIGN_PERMANENT].includes(`${a}`))return"\u56FD\u7C4D\u4E3A\u975E\u4E2D\u56FD\u3001\u6E2F\u6FB3\u53F0\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u53EA\u5141\u8BB8\u9009\u62E9\u62A4\u7167\u3001\u5916\u56FD\u4EBA\u6C38\u4E45\u5C45\u7559\u8EAB\u4EFD\u8BC1";return+W((G=e.value.formInfo)==null?void 0:G.birthday).toNow(!0).split(" ")[0]>2&&a===I.BIRTH?"\u5E74\u9F84\u5927\u4E8E\u7B49\u4E8E2\u5468\u5C81\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u4E0D\u80FD\u9009\u62E9\u51FA\u751F\u8BC1":""},x=a=>Array.isArray(a)&&a.length===2&&a[0]&&a[1]?"":"\u8BF7\u4E0A\u4F20\u8EAB\u4EFD\u8BC1\u6B63\u53CD\u9762\u7167\u7247",R=a=>C.beneficiaryList.filter(u=>u.relationToInsured===g.SPOUSE).length>=2?"\u5DF2\u5B58\u5728\u914D\u5076\u5173\u7CFB\u7684\u53D7\u76CA\u4EBA":"";return Y(()=>D.value,a=>{a?(e.value.formInfo.certEndType=2,e.value.formInfo.certEndDate=""):e.value.formInfo.certEndType=1},{immediate:!0}),Y(()=>e.value.formInfo.certType,a=>{[I.CERT,I.HOUSE_HOLD].includes(a)?E.value=!0:E.value=!1},{deep:!0,immediate:!0}),Y(()=>e.value.formInfo.certNo,a=>{Le(a)&&(e.value.formInfo.gender=He(a),e.value.formInfo.birthday=new Date(Ge(a)))},{deep:!0,immediate:!0}),Y(()=>C.images,a=>{s.value=a},{immediate:!0}),Y(s,a=>{X("update:images",a)},{deep:!0}),(a,u)=>{var J,Q,_,ee,ue,oe,le,ae,ne,re,te,ie,de,fe,me,se,Ie,Ee,ve,pe,Ce,Fe,Be,Ae,ye,De,xe,Ve,ce,be,Te,Se,ke,Ue,we;const v=V("ProRadioButton"),m=V("ProField"),A=V("ProPicker"),L=V("ProIDCardUpload"),H=V("ProImageUpload"),N=V("ProDatePicker"),G=V("van-checkbox"),h=V("ProCascader");return Object.keys(l(n)).length?(i(),$e("div",Je,[t("insureRelation")?(i(),f(m,{key:0,modelValue:e.value.formInfo.relationToInsured,"onUpdate:modelValue":u[1]||(u[1]=o=>e.value.formInfo.relationToInsured=o),name:`${r.prefix}_relationToInsured`,required:((J=l(n).insureRelation)==null?void 0:J.isMustInput)==="YES",label:"\u662F\u88AB\u4FDD\u4EBA\u7684",rules:[{validator:R}]},{input:p(()=>[c(v,{modelValue:e.value.formInfo.relationToInsured,"onUpdate:modelValue":u[0]||(u[0]=o=>e.value.formInfo.relationToInsured=o),"is-view":r.isView,options:l(Ke).slice(1,4)},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","name","required","rules"])):d("",!0),t("certType")?(i(),f(A,{key:1,modelValue:e.value.formInfo.certType,"onUpdate:modelValue":u[2]||(u[2]=o=>e.value.formInfo.certType=o),label:"\u8BC1\u4EF6\u7C7B\u578B",name:`${r.prefix}_certType`,"data-source":l(T),mapping:{label:"name",value:"code",children:"child"},required:((Q=l(n).certType)==null?void 0:Q.isMustInput)==="YES",rules:[{validator:B}]},null,8,["modelValue","name","data-source","required","rules"])):d("",!0),((_=l(n).attachment)==null?void 0:_.isDisplay)==="YES"&&e.value.formInfo.certType+""=="1"?(i(),f(m,{key:2,label:"\u8EAB\u4EFD\u8BC1\u4E0A\u4F20",block:"",required:((ee=l(n).certType)==null?void 0:ee.isMustInput)==="YES",rules:[{validator:x}],name:`${r.prefix}_idCard`},{input:p(()=>[c(L,{modelValue:s.value,"onUpdate:modelValue":u[3]||(u[3]=o=>s.value=o),"is-view":r.isView,onOnOCR:q},null,8,["modelValue","is-view"])]),_:1},8,["required","rules","name"])):d("",!0),((ue=l(n).attachment)==null?void 0:ue.isDisplay)==="YES"&&e.value.formInfo.certType&&e.value.formInfo.certType+""!="1"?(i(),f(m,{key:3,label:"\u8BC1\u4EF6\u4E0A\u4F20",block:"",required:((oe=l(n).certType)==null?void 0:oe.isMustInput)==="YES"},{input:p(()=>[c(H,{modelValue:s.value,"onUpdate:modelValue":u[4]||(u[4]=o=>s.value=o),"max-count":1},null,8,["modelValue"])]),_:1},8,["required"])):d("",!0),t("certNo")?(i(),f(m,{key:4,modelValue:e.value.formInfo.certNo,"onUpdate:modelValue":u[5]||(u[5]=o=>e.value.formInfo.certNo=o),label:"\u8BC1\u4EF6\u53F7\u7801",name:`${r.prefix}_certNo`,required:((le=l(n).certNo)==null?void 0:le.isMustInput)==="YES",placeholder:"\u8BF7\u8F93\u5165","validate-type":l(M)},null,8,["modelValue","name","required","validate-type"])):d("",!0),t("name")?(i(),f(m,{key:5,modelValue:e.value.formInfo.name,"onUpdate:modelValue":u[6]||(u[6]=o=>e.value.formInfo.name=o),label:"\u59D3\u540D",name:`${r.prefix}_name`,required:((ae=l(n).name)==null?void 0:ae.isMustInput)==="YES"},null,8,["modelValue","name","required"])):d("",!0),t("sex")?(i(),f(m,{key:6,modelValue:e.value.formInfo.gender,"onUpdate:modelValue":u[8]||(u[8]=o=>e.value.formInfo.gender=o),required:((ne=l(n).sex)==null?void 0:ne.isMustInput)==="YES",label:"\u6027\u522B",name:`${r.prefix}_gender`,placeholder:"\u8BF7\u9009\u62E9","is-view":E.value},{input:p(()=>[c(v,{modelValue:e.value.formInfo.gender,"onUpdate:modelValue":u[7]||(u[7]=o=>e.value.formInfo.gender=o),disabled:E.value,"is-view":r.isView,options:l(Ze)},null,8,["modelValue","disabled","is-view","options"])]),_:1},8,["modelValue","required","name","is-view"])):d("",!0),t("birthday")?(i(),f(N,{key:7,modelValue:e.value.formInfo.birthday,"onUpdate:modelValue":u[9]||(u[9]=o=>e.value.formInfo.birthday=o),label:"\u51FA\u751F\u65E5\u671F",name:`${r.prefix}_birthday`,min:e.value.birth.min,max:e.value.birth.max,type:"date",required:((re=l(n).birthday)==null?void 0:re.isMustInput)==="YES","is-view":E.value},null,8,["modelValue","name","min","max","required","is-view"])):d("",!0),t("certEndDate")?(i(),f(N,{key:8,modelValue:e.value.formInfo.certEndDate,"onUpdate:modelValue":u[11]||(u[11]=o=>e.value.formInfo.certEndDate=o),label:"\u6709\u6548\u671F\u81F3",name:`${r.prefix}_certEndDate`,type:"date",min:e.value.certEndDate.min,max:e.value.certEndDate.max,"is-view":D.value||r.isView,read:"",rules:[{validator:P}]},{extra:p(()=>[j("div",Qe,[c(G,{modelValue:D.value,"onUpdate:modelValue":u[10]||(u[10]=o=>D.value=o),"icon-size":16,disabled:r.isView},{default:p(()=>[_e]),_:1},8,["modelValue","disabled"])])]),_:1},8,["modelValue","name","min","max","is-view","rules"])):d("",!0),t("houseHold")?(i(),f(h,{key:9,modelValue:e.value.formInfo.extInfo.provinceCode,"onUpdate:modelValue":u[12]||(u[12]=o=>e.value.formInfo.extInfo.provinceCode=o),field1:e.value.formInfo.extInfo.provinceCode,"onUpdate:field1":u[13]||(u[13]=o=>e.value.formInfo.extInfo.provinceCode=o),field2:e.value.formInfo.extInfo.cityCode,"onUpdate:field2":u[14]||(u[14]=o=>e.value.formInfo.extInfo.cityCode=o),field3:e.value.formInfo.extInfo.areaCode,"onUpdate:field3":u[15]||(u[15]=o=>e.value.formInfo.extInfo.areaCode=o),label:"\u6237\u7C4D\u6240\u5728\u5730",name:`${r.prefix}_provinceCode`,placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:((te=l(n).houseHold)==null?void 0:te.isMustInput)==="YES","data-source":l(S),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):d("",!0),t("hasSocialInsurance")?(i(),f(m,{key:10,modelValue:e.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":u[17]||(u[17]=o=>e.value.formInfo.extInfo.hasSocialInsurance=o),label:"\u793E\u4FDD",name:`${r.prefix}_hasSocialInsurance`,placeholder:"\u8BF7\u9009\u62E9",required:((ie=l(n).hasSocialInsurance)==null?void 0:ie.isMustInput)==="YES"},{input:p(()=>[c(v,{modelValue:e.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":u[16]||(u[16]=o=>e.value.formInfo.extInfo.hasSocialInsurance=o),"is-view":r.isView,options:l(z)},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","name","required"])):d("",!0),t("occupation")?(i(),f(h,{key:11,modelValue:e.value.formInfo.extInfo.occupationCode,"onUpdate:modelValue":u[18]||(u[18]=o=>e.value.formInfo.extInfo.occupationCode=o),label:"\u804C\u4E1A",name:`${r.prefix}_occupationCode`,placeholder:"\u8BF7\u9009\u62E9",required:((de=l(n).occupation)==null?void 0:de.isMustInput)==="YES","data-source":l(y),mapping:{label:"value",value:"code",children:"children"},"is-link":""},null,8,["modelValue","name","required","data-source"])):d("",!0),t("annualIncome")?(i(),f(m,{key:12,modelValue:e.value.formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":u[19]||(u[19]=o=>e.value.formInfo.extInfo.personalAnnualIncome=o),label:"\u4E2A\u4EBA\u5E74\u6536\u5165",name:`${r.prefix}_personalAnnualIncome`,required:((fe=l(n).annualIncome)==null?void 0:fe.isMustInput)==="YES",placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:k}]},{extra:p(()=>[eu]),_:1},8,["modelValue","name","required","rules"])):d("",!0),t("familyAnnualIncome")?(i(),f(m,{key:13,modelValue:e.value.formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":u[20]||(u[20]=o=>e.value.formInfo.extInfo.familyAnnualIncome=o),label:"\u5BB6\u5EAD\u5E74\u6536\u5165",name:`${r.prefix}_familyAnnualIncome`,placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:k}],required:((me=l(n).familyAnnualIncome)==null?void 0:me.isMustInput)==="YES"},{extra:p(()=>[uu]),_:1},8,["modelValue","name","rules","required"])):d("",!0),t("nationality")?(i(),f(A,{key:14,modelValue:e.value.formInfo.extInfo.nationalityCode,"onUpdate:modelValue":u[21]||(u[21]=o=>e.value.formInfo.extInfo.nationalityCode=o),label:"\u56FD\u7C4D",name:`${r.prefix}_nationalityCode`,"data-source":l(O),mapping:{label:"name",value:"code",children:"child"},placeholder:"\u8BF7\u9009\u62E9",required:((se=l(n).nationality)==null?void 0:se.isMustInput)==="YES","is-link":""},null,8,["modelValue","name","data-source","required"])):d("",!0),t("USAGreenCard")?(i(),f(m,{key:15,modelValue:e.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":u[23]||(u[23]=o=>e.value.formInfo.extInfo.hasUsCard=o),label:"\u7F8E\u56FD\u7EFF\u5361",name:`${r.prefix}_hasUsCard`,placeholder:"\u8BF7\u9009\u62E9",required:((Ie=l(n).USAGreenCard)==null?void 0:Ie.isMustInput)==="YES"},{input:p(()=>[c(v,{modelValue:e.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":u[22]||(u[22]=o=>e.value.formInfo.extInfo.hasUsCard=o),"is-view":r.isView,options:l(z)},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","name","required"])):d("",!0),t("marriage")?(i(),f(A,{key:16,modelValue:e.value.formInfo.extInfo.marriageStatus,"onUpdate:modelValue":u[24]||(u[24]=o=>e.value.formInfo.extInfo.marriageStatus=o),label:"\u5A5A\u59FB\u72B6\u51B5",name:`${r.prefix}_marriageStatus`,placeholder:"\u8BF7\u9009\u62E9","data-source":l(je),"is-link":"",required:((Ee=l(n).marriage)==null?void 0:Ee.isMustInput)==="YES"},null,8,["modelValue","name","data-source","required"])):d("",!0),t("educationDegree")?(i(),f(A,{key:17,modelValue:e.value.formInfo.extInfo.educationDegree,"onUpdate:modelValue":u[25]||(u[25]=o=>e.value.formInfo.extInfo.educationDegree=o),label:"\u5B66\u5386",name:`${r.prefix}_educationDegree`,"data-source":l($),mapping:{label:"name",value:"code",children:"child"},placeholder:"\u8BF7\u9009\u62E9",required:((ve=l(n).educationDegree)==null?void 0:ve.isMustInput)==="YES","is-link":""},null,8,["modelValue","name","data-source","required"])):d("",!0),t("mobile")?(i(),f(m,{key:18,modelValue:e.value.formInfo.mobile,"onUpdate:modelValue":u[26]||(u[26]=o=>e.value.formInfo.mobile=o),label:"\u624B\u673A\u53F7\u7801",name:`${r.prefix}_mobile`,placeholder:"\u8BF7\u8F93\u5165",required:((pe=l(n).mobile)==null?void 0:pe.isMustInput)==="YES","validate-type":[l(b).PHONE]},null,8,["modelValue","name","required","validate-type"])):d("",!0),t("email")?(i(),f(m,{key:19,modelValue:e.value.formInfo.email,"onUpdate:modelValue":u[27]||(u[27]=o=>e.value.formInfo.email=o),label:"\u7535\u5B50\u90AE\u7BB1",name:`${r.prefix}_email`,placeholder:"\u8BF7\u8F93\u5165",required:((Ce=l(n).email)==null?void 0:Ce.isMustInput)==="YES","validate-type":[l(b).EMAIL]},null,8,["modelValue","name","required","validate-type"])):d("",!0),t("familyAddress")?(i(),f(h,{key:20,modelValue:e.value.formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":u[28]||(u[28]=o=>e.value.formInfo.extInfo.familyAreaCode=o),field1:e.value.formInfo.extInfo.familyProvinceCode,"onUpdate:field1":u[29]||(u[29]=o=>e.value.formInfo.extInfo.familyProvinceCode=o),field2:e.value.formInfo.extInfo.familyCityCode,"onUpdate:field2":u[30]||(u[30]=o=>e.value.formInfo.extInfo.familyCityCode=o),field3:e.value.formInfo.extInfo.familyAreaCode,"onUpdate:field3":u[31]||(u[31]=o=>e.value.formInfo.extInfo.familyAreaCode=o),label:"\u5BB6\u5EAD\u5730\u5740",name:`${r.prefix}_familyProvinceCode`,placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:((Fe=l(n).familyAddress)==null?void 0:Fe.isMustInput)==="YES","data-source":l(S),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):d("",!0),t("familyAddressDetail")?(i(),f(m,{key:21,modelValue:e.value.formInfo.extInfo.familyAddress,"onUpdate:modelValue":u[32]||(u[32]=o=>e.value.formInfo.extInfo.familyAddress=o),label:"\u5730\u5740\u8BE6\u60C5",name:`${r.prefix}_familyAddress`,placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...o)=>F(100,...o)}],required:((Be=l(n).familyAddressDetail)==null?void 0:Be.isMustInput)==="YES"},null,8,["modelValue","name","rules","required"])):d("",!0),t("familyPostCode")?(i(),f(m,{key:22,modelValue:e.value.formInfo.extInfo.familyZipCode,"onUpdate:modelValue":u[33]||(u[33]=o=>e.value.formInfo.extInfo.familyZipCode=o),label:"\u5BB6\u5EAD\u90AE\u7F16",name:`${r.prefix}_familyZipCode`,placeholder:"\u8BF7\u8F93\u5165",required:((Ae=l(n).familyPostCode)==null?void 0:Ae.isMustInput)==="YES","validate-type":[l(b).ZIP_CODE]},null,8,["modelValue","name","required","validate-type"])):d("",!0),t("workAddress")?(i(),f(h,{key:23,modelValue:e.value.formInfo.extInfo.workAreaCode,"onUpdate:modelValue":u[34]||(u[34]=o=>e.value.formInfo.extInfo.workAreaCode=o),field1:e.value.formInfo.extInfo.workProvinceCode,"onUpdate:field1":u[35]||(u[35]=o=>e.value.formInfo.extInfo.workProvinceCode=o),field2:e.value.formInfo.extInfo.workCityCode,"onUpdate:field2":u[36]||(u[36]=o=>e.value.formInfo.extInfo.workCityCode=o),field3:e.value.formInfo.extInfo.workAreaCode,"onUpdate:field3":u[37]||(u[37]=o=>e.value.formInfo.extInfo.workAreaCode=o),label:"\u5DE5\u4F5C\u5730\u5740",name:`${r.prefix}_workProvinceCode`,placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:((ye=l(n).workAddress)==null?void 0:ye.isMustInput)==="YES","data-source":l(S),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):d("",!0),t("workAddressDetail")?(i(),f(m,{key:24,modelValue:e.value.formInfo.extInfo.workAddress,"onUpdate:modelValue":u[38]||(u[38]=o=>e.value.formInfo.extInfo.workAddress=o),label:"\u5730\u5740\u8BE6\u60C5",name:`${r.prefix}_workAddress`,placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...o)=>F(100,...o)}],required:((De=l(n).workAddressDetail)==null?void 0:De.isMustInput)==="YES"},null,8,["modelValue","name","rules","required"])):d("",!0),t("workZipCode")?(i(),f(m,{key:25,modelValue:e.value.formInfo.extInfo.workZipCode,"onUpdate:modelValue":u[39]||(u[39]=o=>e.value.formInfo.extInfo.workZipCode=o),label:"\u5DE5\u4F5C\u90AE\u7F16",required:((xe=l(n).workZipCode)==null?void 0:xe.isMustInput)==="YES",name:`${r.prefix}_workPostCode`,placeholder:"\u8BF7\u8F93\u5165","validate-type":[l(b).ZIP_CODE]},null,8,["modelValue","required","name","validate-type"])):d("",!0),t("workPlace")?(i(),f(m,{key:26,modelValue:e.value.formInfo.extInfo.workStation,"onUpdate:modelValue":u[40]||(u[40]=o=>e.value.formInfo.extInfo.workStation=o),label:"\u5355\u4F4D\u540D\u79F0",name:`${r.prefix}_workPostCode`,placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...o)=>F(20,...o)}],required:((Ve=l(n).workPlace)==null?void 0:Ve.isMustInput)==="YES"},null,8,["modelValue","name","rules","required"])):d("",!0),t("workContent")?(i(),f(m,{key:27,modelValue:e.value.formInfo.extInfo.workContent,"onUpdate:modelValue":u[41]||(u[41]=o=>e.value.formInfo.extInfo.workContent=o),label:"\u5DE5\u4F5C\u5185\u5BB9",name:`${r.prefix}_workContent`,required:((ce=l(n).workContent)==null?void 0:ce.isMustInput)==="YES",placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...o)=>F(100,...o)}]},null,8,["modelValue","name","required","rules"])):d("",!0),t("taxCert")?(i(),f(A,{key:28,modelValue:e.value.formInfo.extInfo.taxResident,"onUpdate:modelValue":u[42]||(u[42]=o=>e.value.formInfo.extInfo.taxResident=o),label:"\u7A0E\u6536\u5C45\u6C11\u8EAB\u4EFD",name:`${r.prefix}_taxResident`,"data-source":l(We),required:((be=l(n).taxCert)==null?void 0:be.isMustInput)==="YES",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","name","data-source","required"])):d("",!0),t("partTime")?(i(),f(m,{key:29,modelValue:e.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":u[44]||(u[44]=o=>e.value.formInfo.extInfo.isPartTime=o),label:"\u662F\u5426\u517C\u804C",name:`${r.prefix}_isPartTime`,required:((Te=l(n).partTime)==null?void 0:Te.isMustInput)==="YES",placeholder:"\u8BF7\u8F93\u5165"},{input:p(()=>[c(v,{modelValue:e.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":u[43]||(u[43]=o=>e.value.formInfo.extInfo.isPartTime=o),"is-view":r.isView,options:l(z)},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","name","required"])):d("",!0),((Se=l(n).beneficiaryType)==null?void 0:Se.isDisplay)?(i(),f(A,{key:30,modelValue:e.value.formInfo.benefitOrder,"onUpdate:modelValue":u[45]||(u[45]=o=>e.value.formInfo.benefitOrder=o),label:"\u53D7\u76CA\u4EBA\u987A\u5E8F",name:`${r.prefix}_benefitOrder`,"data-source":l(ze),required:((ke=l(n).beneficiaryType)==null?void 0:ke.isMustInput)==="YES"},null,8,["modelValue","name","data-source","required"])):d("",!0),((Ue=l(n).benefitRate)==null?void 0:Ue.isDisplay)?(i(),f(m,{key:31,modelValue:e.value.formInfo.benefitRate,"onUpdate:modelValue":u[46]||(u[46]=o=>e.value.formInfo.benefitRate=o),required:((we=l(n).benefitRate)==null?void 0:we.isMustInput)==="YES",name:`${r.prefix}_benefitRate`,rules:[{validator:K}],label:"\u53D7\u76CA\u6BD4\u4F8B"},{extra:p(()=>[ou]),_:1},8,["modelValue","required","name","rules"])):d("",!0)])):d("",!0)}}});export{tu as B,ru as R,iu as _,Me as a};
