import{ao as Me,g as Re,a5 as ge,Q as Ne,E as G,d as Ue,y as we,X as R,r as D,A as o,j as t,n as Ye,k as f,m as p,p as V,t as i,z as h,C as $e}from"./vendor-c15a8cf7.js";import{E as I,V as c,K as Oe,L as Le,M as He,Y as Ge,r as he,Q as j}from"./index-850c076d.js";import{u as w}from"./useDicData-0ac01560.js";const nu=[{label:"\u672C\u4EBA",value:"1"},{label:"\u914D\u5076",value:"2"},{label:"\u5B50\u5973",value:"3"},{label:"\u7236\u6BCD",value:"4"}],qe={LEGAL:"1",SPECIFY:"2"},ru=[{label:"\u6CD5\u5B9A",value:qe.LEGAL},{label:"\u6307\u5B9A",value:qe.SPECIFY}],Ze=[{label:"\u5DF2\u5A5A",value:"1"},{label:"\u672A\u5A5A",value:"2"}],g={SELF:"1",SPOUSE:"2",CHILD:"3",PARENT:"4"},je=[{label:"\u672C\u4EBA",value:g.SELF},{label:"\u914D\u5076",value:g.SPOUSE},{label:"\u5B50\u5973",value:g.CHILD},{label:"\u7236\u6BCD",value:g.PARENT}],Ke=[{label:"\u4EC5\u4E3A\u4E2D\u56FD\u7A0E\u6536\u5C45\u6C11",value:"1"},{label:"\u4EC5\u4E3A\u975E\u4E2D\u56FD\u7A0E\u6536\u5C45\u6C11",value:"2"},{label:"\u65E2\u662F\u4E2D\u56FD\u7A0E\u6536\u5C45\u6C11\u53C8\u662F\u5176\u4ED6\u56FD\u5BB6\uFF08\u5730\u533A\uFF09\u7A0E\u6536\u5C45\u6C11",value:"3"}],We=[{label:"\u7B2C\u4E00\u987A\u4F4D",value:"1"},{label:"\u7B2C\u4E8C\u987A\u4F4D",value:"2"},{label:"\u7B2C\u4E09\u987A\u4F4D",value:"3"},{label:"\u5176\u4ED6",value:"4"}];var Pe={exports:{}};(function(r,K){(function(C,q){r.exports=q()})(Me,function(){return function(C,q,T){C=C||{};var B=q.prototype,N={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Y(s,E,e,y){return B.fromToBase(s,E,e,y)}T.en.relativeTime=N,B.fromToBase=function(s,E,e,y,n){for(var d,k,U,P=e.$locale().relativeTime||N,x=C.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],Z=x.length,b=0;b<Z;b+=1){var F=x[b];F.d&&(d=y?T(s).diff(e,F.d,!0):e.diff(s,F.d,!0));var a=(C.rounding||Math.round)(Math.abs(d));if(U=d>0,a<=F.r||!F.r){a<=1&&b>0&&(F=x[b-1]);var u=P[F.l];n&&(a=n(""+a)),k=typeof u=="string"?u.replace("%d",a):u(a,E,F.l,U);break}}if(E)return k;var v=U?P.future:P.past;return typeof v=="function"?v(k):v.replace("%s",k)},B.to=function(s,E){return Y(s,E,this,!0)},B.from=function(s,E){return Y(s,E,this)};var S=function(s){return s.$u?T.utc():T()};B.toNow=function(s){return this.to(S(this),s)},B.fromNow=function(s){return this.from(S(this),s)}}})})(Pe);var Xe=Pe.exports;const Qe={key:0,class:"com-personal-wrapper"},ze={class:"date-extra"},Je=$e("\u957F\u671F"),_e=h("span",{class:"input-extra"},"\u4E07",-1),eu=h("span",{class:"input-extra"},"\u4E07",-1),uu=h("span",{class:"input-extra"},"%",-1),tu=Re({props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]}},emits:["update:images"],setup(r,{emit:K}){const C=r;ge();const{venderCode:q=""}=Ne().query,T=w("CERT_TYPE"),B=w(`${q.toLocaleUpperCase()}_OCCUPATION`);w("MARRIAGE_STATUS");const N=w("DEGREE"),Y=w("NATIONALITY"),S=w("NATIONAL_REGION_CODE"),s=G([]),E=G(!1),e=G({formInfo:C.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""});Ue.extend(Xe);const y=G(C.formInfo.certEndType===2),n=we(()=>{const a={};return C.factorList.forEach(u=>{a[u.code]=u}),a}),d=a=>n.value&&n.value[a]&&n.value[a].isDisplay===Ge.YES,k=we(()=>[I.CERT,I.HOUSE_HOLD].includes(e.value.formInfo.certType)?[c.ID_CARD]:e.value.formInfo.certType===I.BIRTH?[c.BIRTH]:e.value.formInfo.certType===I.PASSPORT?[c.PASSPORT]:[]),U=(a,u)=>/^\d{1,10}(\.\d{1,2})?$/.test(a)?"":"\u5E74\u6536\u5165\u6700\u591A\u5F55\u516510\u4F4D\u6570\u5B57",P=(a,u)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(a)?"":"\u6536\u76CA\u6BD4\u4F8B\u53EA\u80FD\u586B\u51991-100\u7684\u6B63\u6574\u6570",x=(a,u,v)=>u.length>a?`\u6700\u5927\u4E0D\u80FD\u8D85\u8FC7${a}\u4E2A\u5B57\u7B26`:"",Z=(a,u)=>{var v,m,A,$,O,M,L;if(((m=(v=e.value.formInfo)==null?void 0:v.extInfo)==null?void 0:m.nationalityCode)==="CHN"){if(![I.CERT,I.HOUSE_HOLD,I.BIRTH,I.MILITARY_CARD].includes(a))return"\u56FD\u7C4D\u4E3A\u4E2D\u56FD\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u53EA\u5141\u8BB8\u9009\u62E9\u8EAB\u4EFD\u8BC1\u3001\u6237\u53E3\u672C\u3001\u51FA\u751F\u8BC1\u3001\u519B\u5B98\u8BC1"}else if(["HKG","MAC"].includes(($=(A=e.value.formInfo)==null?void 0:A.extInfo)==null?void 0:$.nationalityCode)){if(![I.HK_MACAO_RESIDENCE_PERMIT,I.HONGKONG_MACAO].includes(a))return"\u56FD\u7C4D\u4E3A\u4E2D\u56FD\u9999\u6E2F\u3001\u4E2D\u56FD\u6FB3\u95E8\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u53EA\u5141\u8BB8\u9009\u62E9\u6E2F\u6FB3\u901A\u884C\u8BC1\u3001\u6E2F\u6FB3\u5C45\u6C11\u5C45\u4F4F\u8BC1"}else if(((M=(O=e.value.formInfo)==null?void 0:O.extInfo)==null?void 0:M.nationalityCode)==="TWN"){if(![I.TAIWAN_RESIDENCE_PERMIT,I.TAIWAN_TRAVEL].includes(a))return"\u56FD\u7C4D\u4E3A\u4E2D\u56FD\u53F0\u6E7E\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u53EA\u5141\u8BB8\u9009\u62E9\u53F0\u6E7E\u901A\u884C\u8BC1\u3001\u53F0\u6E7E\u5C45\u6C11\u5C45\u4F4F\u8BC1"}else if(![I.PASSPORT,I.FOREIGN_PERMANENT].includes(`${a}`))return"\u56FD\u7C4D\u4E3A\u975E\u4E2D\u56FD\u3001\u6E2F\u6FB3\u53F0\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u53EA\u5141\u8BB8\u9009\u62E9\u62A4\u7167\u3001\u5916\u56FD\u4EBA\u6C38\u4E45\u5C45\u7559\u8EAB\u4EFD\u8BC1";return+Ue((L=e.value.formInfo)==null?void 0:L.birthday).toNow(!0).split(" ")[0]>2&&a===I.BIRTH?"\u5E74\u9F84\u5927\u4E8E\u7B49\u4E8E2\u5468\u5C81\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u4E0D\u80FD\u9009\u62E9\u51FA\u751F\u8BC1":""},b=a=>Array.isArray(a)&&a.length===2&&a[0]&&a[1]?"":"\u8BF7\u4E0A\u4F20\u8EAB\u4EFD\u8BC1\u6B63\u53CD\u9762\u7167\u7247",F=a=>C.beneficiaryList.filter(u=>u.relationToInsured===g.SPOUSE).length>=2?"\u5DF2\u5B58\u5728\u914D\u5076\u5173\u7CFB\u7684\u53D7\u76CA\u4EBA":"";return R(()=>y.value,a=>{a?(e.value.formInfo.certEndType=2,e.value.formInfo.certEndDate=""):e.value.formInfo.certEndType=1},{immediate:!0}),R(()=>e.value.formInfo.certType,a=>{[I.CERT,I.HOUSE_HOLD].includes(a)?E.value=!1:E.value=!0},{deep:!0,immediate:!0}),R(()=>e.value.formInfo.certNo,a=>{Oe(a)?(e.value.formInfo.gender=Le(a),e.value.formInfo.birthday=new Date(He(a)),E.value=!0):E.value=!1},{deep:!0,immediate:!0}),R(()=>C.images,a=>{s.value=a},{immediate:!0}),R(s,a=>{K("update:images",a)},{deep:!0}),(a,u)=>{var W,X,Q,z,J,_,ee,ue,le,oe,ae,ne,re,te,ie,de,fe,me,se,Ie,Ee,ve,pe,Ce,Fe,Ae,Be,ye,xe,De,Ve,be,ce,Te,Se,ke;const v=D("ProRadioButton"),m=D("ProField"),A=D("ProPicker"),$=D("ProIDCardUpload"),O=D("ProImageUpload"),M=D("ProDatePicker"),L=D("van-checkbox"),H=D("ProCascader");return Object.keys(o(n)).length?(t(),Ye("div",Qe,[d("insureRelation")?(t(),f(m,{key:0,modelValue:e.value.formInfo.relationToInsured,"onUpdate:modelValue":u[1]||(u[1]=l=>e.value.formInfo.relationToInsured=l),name:`${r.prefix}_relationToInsured`,required:((W=o(n).insureRelation)==null?void 0:W.isMustInput)==="YES",label:"\u662F\u88AB\u4FDD\u4EBA\u7684",rules:[{validator:F}]},{input:p(()=>[V(v,{modelValue:e.value.formInfo.relationToInsured,"onUpdate:modelValue":u[0]||(u[0]=l=>e.value.formInfo.relationToInsured=l),"is-view":r.isView,options:o(je).slice(1,4)},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","name","required","rules"])):i("",!0),d("certType")?(t(),f(A,{key:1,modelValue:e.value.formInfo.certType,"onUpdate:modelValue":u[2]||(u[2]=l=>e.value.formInfo.certType=l),label:"\u8BC1\u4EF6\u7C7B\u578B",name:`${r.prefix}_certType`,"data-source":o(T),mapping:{label:"name",value:"code",children:"child"},required:((X=o(n).certType)==null?void 0:X.isMustInput)==="YES",rules:[{validator:Z}]},null,8,["modelValue","name","data-source","required","rules"])):i("",!0),((Q=o(n).attachment)==null?void 0:Q.isDisplay)==="YES"&&e.value.formInfo.certType+""=="1"?(t(),f(m,{key:2,label:"\u8EAB\u4EFD\u8BC1\u4E0A\u4F20",block:"",required:((z=o(n).certType)==null?void 0:z.isMustInput)==="YES",rules:[{validator:b}],name:`${r.prefix}_idCard`},{input:p(()=>[V($,{modelValue:s.value,"onUpdate:modelValue":u[3]||(u[3]=l=>s.value=l),"is-view":r.isView},null,8,["modelValue","is-view"])]),_:1},8,["required","rules","name"])):i("",!0),((J=o(n).attachment)==null?void 0:J.isDisplay)==="YES"&&e.value.formInfo.certType&&e.value.formInfo.certType+""!="1"?(t(),f(m,{key:3,label:"\u8BC1\u4EF6\u4E0A\u4F20",block:"",required:((_=o(n).certType)==null?void 0:_.isMustInput)==="YES"},{input:p(()=>[V(O,{modelValue:s.value,"onUpdate:modelValue":u[4]||(u[4]=l=>s.value=l),"max-count":1},null,8,["modelValue"])]),_:1},8,["required"])):i("",!0),d("certNo")?(t(),f(m,{key:4,modelValue:e.value.formInfo.certNo,"onUpdate:modelValue":u[5]||(u[5]=l=>e.value.formInfo.certNo=l),label:"\u8BC1\u4EF6\u53F7\u7801",name:`${r.prefix}_certNo`,required:((ee=o(n).certNo)==null?void 0:ee.isMustInput)==="YES",placeholder:"\u8BF7\u8F93\u5165","validate-type":o(k)},null,8,["modelValue","name","required","validate-type"])):i("",!0),d("name")?(t(),f(m,{key:5,modelValue:e.value.formInfo.name,"onUpdate:modelValue":u[6]||(u[6]=l=>e.value.formInfo.name=l),label:"\u59D3\u540D",name:`${r.prefix}_name`,required:((ue=o(n).name)==null?void 0:ue.isMustInput)==="YES"},null,8,["modelValue","name","required"])):i("",!0),d("sex")?(t(),f(m,{key:6,modelValue:e.value.formInfo.gender,"onUpdate:modelValue":u[8]||(u[8]=l=>e.value.formInfo.gender=l),required:((le=o(n).sex)==null?void 0:le.isMustInput)==="YES",label:"\u6027\u522B",name:`${r.prefix}_gender`,placeholder:"\u8BF7\u9009\u62E9","is-view":E.value},{input:p(()=>[V(v,{modelValue:e.value.formInfo.gender,"onUpdate:modelValue":u[7]||(u[7]=l=>e.value.formInfo.gender=l),disabled:E.value,"is-view":r.isView,options:o(he)},null,8,["modelValue","disabled","is-view","options"])]),_:1},8,["modelValue","required","name","is-view"])):i("",!0),d("birthday")?(t(),f(M,{key:7,modelValue:e.value.formInfo.birthday,"onUpdate:modelValue":u[9]||(u[9]=l=>e.value.formInfo.birthday=l),label:"\u51FA\u751F\u65E5\u671F",name:`${r.prefix}_birthday`,min:e.value.birth.min,max:e.value.birth.max,type:"date",required:((oe=o(n).birthday)==null?void 0:oe.isMustInput)==="YES","is-view":E.value},null,8,["modelValue","name","min","max","required","is-view"])):i("",!0),d("certEndDate")?(t(),f(M,{key:8,modelValue:e.value.formInfo.certEndDate,"onUpdate:modelValue":u[11]||(u[11]=l=>e.value.formInfo.certEndDate=l),label:"\u6709\u6548\u671F\u81F3",name:`${r.prefix}_certEndDate`,type:"date",min:e.value.certEndDate.min,max:e.value.certEndDate.max,"is-view":y.value||r.isView,read:"",required:((ae=o(n).certEndDate)==null?void 0:ae.isMustInput)==="YES"},{extra:p(()=>[h("div",ze,[V(L,{modelValue:y.value,"onUpdate:modelValue":u[10]||(u[10]=l=>y.value=l),disabled:r.isView},{default:p(()=>[Je]),_:1},8,["modelValue","disabled"])])]),_:1},8,["modelValue","name","min","max","is-view","required"])):i("",!0),d("houseHold")?(t(),f(H,{key:9,modelValue:e.value.formInfo.extInfo.provinceCode,"onUpdate:modelValue":u[12]||(u[12]=l=>e.value.formInfo.extInfo.provinceCode=l),field1:e.value.formInfo.extInfo.provinceCode,"onUpdate:field1":u[13]||(u[13]=l=>e.value.formInfo.extInfo.provinceCode=l),field2:e.value.formInfo.extInfo.cityCode,"onUpdate:field2":u[14]||(u[14]=l=>e.value.formInfo.extInfo.cityCode=l),field3:e.value.formInfo.extInfo.areaCode,"onUpdate:field3":u[15]||(u[15]=l=>e.value.formInfo.extInfo.areaCode=l),label:"\u6237\u7C4D\u6240\u5728\u5730",name:`${r.prefix}_provinceCode`,placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:((ne=o(n).houseHold)==null?void 0:ne.isMustInput)==="YES","data-source":o(S),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):i("",!0),d("hasSocialInsurance")?(t(),f(m,{key:10,modelValue:e.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":u[17]||(u[17]=l=>e.value.formInfo.extInfo.hasSocialInsurance=l),label:"\u793E\u4FDD",name:`${r.prefix}_hasSocialInsurance`,placeholder:"\u8BF7\u9009\u62E9",required:((re=o(n).hasSocialInsurance)==null?void 0:re.isMustInput)==="YES"},{input:p(()=>[V(v,{modelValue:e.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":u[16]||(u[16]=l=>e.value.formInfo.extInfo.hasSocialInsurance=l),"is-view":r.isView,options:o(j)},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","name","required"])):i("",!0),d("occupation")?(t(),f(H,{key:11,modelValue:e.value.formInfo.extInfo.occupationCode,"onUpdate:modelValue":u[18]||(u[18]=l=>e.value.formInfo.extInfo.occupationCode=l),label:"\u804C\u4E1A",name:`${r.prefix}_occupationCode`,placeholder:"\u8BF7\u9009\u62E9",required:((te=o(n).occupation)==null?void 0:te.isMustInput)==="YES","data-source":o(B),mapping:{label:"value",value:"code",children:"children"},"is-link":""},null,8,["modelValue","name","required","data-source"])):i("",!0),d("annualIncome")?(t(),f(m,{key:12,modelValue:e.value.formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":u[19]||(u[19]=l=>e.value.formInfo.extInfo.personalAnnualIncome=l),label:"\u4E2A\u4EBA\u5E74\u6536\u5165",name:`${r.prefix}_personalAnnualIncome`,required:((ie=o(n).annualIncome)==null?void 0:ie.isMustInput)==="YES",placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:U}]},{extra:p(()=>[_e]),_:1},8,["modelValue","name","required","rules"])):i("",!0),d("familyAnnualIncome")?(t(),f(m,{key:13,modelValue:e.value.formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":u[20]||(u[20]=l=>e.value.formInfo.extInfo.familyAnnualIncome=l),label:"\u5BB6\u5EAD\u5E74\u6536\u5165",name:`${r.prefix}_familyAnnualIncome`,placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:U}],required:((de=o(n).familyAnnualIncome)==null?void 0:de.isMustInput)==="YES"},{extra:p(()=>[eu]),_:1},8,["modelValue","name","rules","required"])):i("",!0),d("nationality")?(t(),f(A,{key:14,modelValue:e.value.formInfo.extInfo.nationalityCode,"onUpdate:modelValue":u[21]||(u[21]=l=>e.value.formInfo.extInfo.nationalityCode=l),label:"\u56FD\u7C4D",name:`${r.prefix}_nationalityCode`,"data-source":o(Y),mapping:{label:"name",value:"code",children:"child"},placeholder:"\u8BF7\u9009\u62E9",required:((fe=o(n).nationality)==null?void 0:fe.isMustInput)==="YES","is-link":""},null,8,["modelValue","name","data-source","required"])):i("",!0),d("USAGreenCard")?(t(),f(m,{key:15,modelValue:e.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":u[23]||(u[23]=l=>e.value.formInfo.extInfo.hasUsCard=l),label:"\u7F8E\u56FD\u7EFF\u5361",name:`${r.prefix}_hasUsCard`,placeholder:"\u8BF7\u9009\u62E9",required:((me=o(n).USAGreenCard)==null?void 0:me.isMustInput)==="YES"},{input:p(()=>[V(v,{modelValue:e.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":u[22]||(u[22]=l=>e.value.formInfo.extInfo.hasUsCard=l),"is-view":r.isView,options:o(j)},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","name","required"])):i("",!0),d("marriage")?(t(),f(A,{key:16,modelValue:e.value.formInfo.extInfo.marriageStatus,"onUpdate:modelValue":u[24]||(u[24]=l=>e.value.formInfo.extInfo.marriageStatus=l),label:"\u5A5A\u59FB\u72B6\u51B5",name:`${r.prefix}_marriageStatus`,placeholder:"\u8BF7\u9009\u62E9","data-source":o(Ze),"is-link":"",required:((se=o(n).marriage)==null?void 0:se.isMustInput)==="YES"},null,8,["modelValue","name","data-source","required"])):i("",!0),d("educationDegree")?(t(),f(A,{key:17,modelValue:e.value.formInfo.extInfo.educationDegree,"onUpdate:modelValue":u[25]||(u[25]=l=>e.value.formInfo.extInfo.educationDegree=l),label:"\u5B66\u5386",name:`${r.prefix}_educationDegree`,"data-source":o(N),mapping:{label:"name",value:"code",children:"child"},placeholder:"\u8BF7\u9009\u62E9",required:((Ie=o(n).educationDegree)==null?void 0:Ie.isMustInput)==="YES","is-link":""},null,8,["modelValue","name","data-source","required"])):i("",!0),d("mobile")?(t(),f(m,{key:18,modelValue:e.value.formInfo.mobile,"onUpdate:modelValue":u[26]||(u[26]=l=>e.value.formInfo.mobile=l),label:"\u624B\u673A\u53F7\u7801",name:`${r.prefix}_mobile`,placeholder:"\u8BF7\u8F93\u5165",required:((Ee=o(n).mobile)==null?void 0:Ee.isMustInput)==="YES","validate-type":[o(c).PHONE]},null,8,["modelValue","name","required","validate-type"])):i("",!0),d("email")?(t(),f(m,{key:19,modelValue:e.value.formInfo.email,"onUpdate:modelValue":u[27]||(u[27]=l=>e.value.formInfo.email=l),label:"\u7535\u5B50\u90AE\u7BB1",name:`${r.prefix}_email`,placeholder:"\u8BF7\u8F93\u5165",required:((ve=o(n).email)==null?void 0:ve.isMustInput)==="YES","validate-type":[o(c).EMAIL]},null,8,["modelValue","name","required","validate-type"])):i("",!0),d("familyAddress")?(t(),f(H,{key:20,modelValue:e.value.formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":u[28]||(u[28]=l=>e.value.formInfo.extInfo.familyAreaCode=l),field1:e.value.formInfo.extInfo.familyProvinceCode,"onUpdate:field1":u[29]||(u[29]=l=>e.value.formInfo.extInfo.familyProvinceCode=l),field2:e.value.formInfo.extInfo.familyCityCode,"onUpdate:field2":u[30]||(u[30]=l=>e.value.formInfo.extInfo.familyCityCode=l),field3:e.value.formInfo.extInfo.familyAreaCode,"onUpdate:field3":u[31]||(u[31]=l=>e.value.formInfo.extInfo.familyAreaCode=l),label:"\u5BB6\u5EAD\u5730\u5740",name:`${r.prefix}_familyProvinceCode`,placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:((pe=o(n).familyAddress)==null?void 0:pe.isMustInput)==="YES","data-source":o(S),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):i("",!0),d("familyAddressDetail")?(t(),f(m,{key:21,modelValue:e.value.formInfo.extInfo.familyAddress,"onUpdate:modelValue":u[32]||(u[32]=l=>e.value.formInfo.extInfo.familyAddress=l),label:"\u5730\u5740\u8BE6\u60C5",name:`${r.prefix}_familyAddress`,placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...l)=>x(100,...l)}],required:((Ce=o(n).familyAddressDetail)==null?void 0:Ce.isMustInput)==="YES"},null,8,["modelValue","name","rules","required"])):i("",!0),d("familyPostCode")?(t(),f(m,{key:22,modelValue:e.value.formInfo.extInfo.familyZipCode,"onUpdate:modelValue":u[33]||(u[33]=l=>e.value.formInfo.extInfo.familyZipCode=l),label:"\u5BB6\u5EAD\u90AE\u7F16",name:`${r.prefix}_familyZipCode`,placeholder:"\u8BF7\u8F93\u5165",required:((Fe=o(n).familyPostCode)==null?void 0:Fe.isMustInput)==="YES","validate-type":[o(c).ZIP_CODE]},null,8,["modelValue","name","required","validate-type"])):i("",!0),d("workAddress")?(t(),f(H,{key:23,modelValue:e.value.formInfo.extInfo.workAreaCode,"onUpdate:modelValue":u[34]||(u[34]=l=>e.value.formInfo.extInfo.workAreaCode=l),field1:e.value.formInfo.extInfo.workProvinceCode,"onUpdate:field1":u[35]||(u[35]=l=>e.value.formInfo.extInfo.workProvinceCode=l),field2:e.value.formInfo.extInfo.workCityCode,"onUpdate:field2":u[36]||(u[36]=l=>e.value.formInfo.extInfo.workCityCode=l),field3:e.value.formInfo.extInfo.workAreaCode,"onUpdate:field3":u[37]||(u[37]=l=>e.value.formInfo.extInfo.workAreaCode=l),label:"\u5DE5\u4F5C\u5730\u5740",name:`${r.prefix}_workProvinceCode`,placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:((Ae=o(n).workAddress)==null?void 0:Ae.isMustInput)==="YES","data-source":o(S),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","name","required","data-source"])):i("",!0),d("workAddressDetail")?(t(),f(m,{key:24,modelValue:e.value.formInfo.extInfo.workAddress,"onUpdate:modelValue":u[38]||(u[38]=l=>e.value.formInfo.extInfo.workAddress=l),label:"\u5730\u5740\u8BE6\u60C5",name:`${r.prefix}_workAddress`,placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...l)=>x(100,...l)}],required:((Be=o(n).workAddressDetail)==null?void 0:Be.isMustInput)==="YES"},null,8,["modelValue","name","rules","required"])):i("",!0),d("workZipCode")?(t(),f(m,{key:25,modelValue:e.value.formInfo.extInfo.workZipCode,"onUpdate:modelValue":u[39]||(u[39]=l=>e.value.formInfo.extInfo.workZipCode=l),label:"\u5DE5\u4F5C\u90AE\u7F16",required:((ye=o(n).workZipCode)==null?void 0:ye.isMustInput)==="YES",name:`${r.prefix}_workPostCode`,placeholder:"\u8BF7\u8F93\u5165","validate-type":[o(c).ZIP_CODE]},null,8,["modelValue","required","name","validate-type"])):i("",!0),d("workPlace")?(t(),f(m,{key:26,modelValue:e.value.formInfo.extInfo.workStation,"onUpdate:modelValue":u[40]||(u[40]=l=>e.value.formInfo.extInfo.workStation=l),label:"\u5355\u4F4D\u540D\u79F0",name:`${r.prefix}_workPostCode`,placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...l)=>x(20,...l)}],required:((xe=o(n).workPlace)==null?void 0:xe.isMustInput)==="YES"},null,8,["modelValue","name","rules","required"])):i("",!0),d("workContent")?(t(),f(m,{key:27,modelValue:e.value.formInfo.extInfo.workContent,"onUpdate:modelValue":u[41]||(u[41]=l=>e.value.formInfo.extInfo.workContent=l),label:"\u5DE5\u4F5C\u5185\u5BB9",name:`${r.prefix}_workContent`,required:((De=o(n).workContent)==null?void 0:De.isMustInput)==="YES",placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...l)=>x(100,...l)}]},null,8,["modelValue","name","required","rules"])):i("",!0),d("taxCert")?(t(),f(A,{key:28,modelValue:e.value.formInfo.extInfo.taxResident,"onUpdate:modelValue":u[42]||(u[42]=l=>e.value.formInfo.extInfo.taxResident=l),label:"\u7A0E\u6536\u5C45\u6C11\u8EAB\u4EFD",name:`${r.prefix}_taxResident`,"data-source":o(Ke),required:((Ve=o(n).taxCert)==null?void 0:Ve.isMustInput)==="YES",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","name","data-source","required"])):i("",!0),d("partTime")?(t(),f(m,{key:29,modelValue:e.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":u[44]||(u[44]=l=>e.value.formInfo.extInfo.isPartTime=l),label:"\u662F\u5426\u517C\u804C",name:`${r.prefix}_isPartTime`,required:((be=o(n).partTime)==null?void 0:be.isMustInput)==="YES",placeholder:"\u8BF7\u8F93\u5165"},{input:p(()=>[V(v,{modelValue:e.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":u[43]||(u[43]=l=>e.value.formInfo.extInfo.isPartTime=l),"is-view":r.isView,options:o(j)},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","name","required"])):i("",!0),((ce=o(n).beneficiaryType)==null?void 0:ce.isDisplay)?(t(),f(A,{key:30,modelValue:e.value.formInfo.benefitOrder,"onUpdate:modelValue":u[45]||(u[45]=l=>e.value.formInfo.benefitOrder=l),label:"\u53D7\u76CA\u4EBA\u987A\u5E8F",name:`${r.prefix}_benefitOrder`,"data-source":o(We),required:((Te=o(n).beneficiaryType)==null?void 0:Te.isMustInput)==="YES"},null,8,["modelValue","name","data-source","required"])):i("",!0),((Se=o(n).benefitRate)==null?void 0:Se.isDisplay)?(t(),f(m,{key:31,modelValue:e.value.formInfo.benefitRate,"onUpdate:modelValue":u[46]||(u[46]=l=>e.value.formInfo.benefitRate=l),required:((ke=o(n).benefitRate)==null?void 0:ke.isMustInput)==="YES",name:`${r.prefix}_benefitRate`,rules:[{validator:P}],label:"\u53D7\u76CA\u6BD4\u4F8B"},{extra:p(()=>[uu]),_:1},8,["modelValue","required","name","rules"])):i("",!0)])):i("",!0)}}});export{ru as B,nu as R,tu as _,qe as a,je as b,We as c};
