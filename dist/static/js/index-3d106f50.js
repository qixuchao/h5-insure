import{ao as ou,g as lu,a5 as au,Q as ru,C as R,d as We,x as _e,X as U,r as B,z as l,h as t,m as nu,j as d,k as I,n as V,s as i,y as L,B as tu}from"./vendor-bf3e5d1d.js";import{J as iu,K as du,L as su,r as fu,M as $}from"./index-cf51991b.js";import{u as S}from"./useDicData-af5669f6.js";const cu=[{label:"\u672C\u4EBA",value:"1"},{label:"\u914D\u5076",value:"2"},{label:"\u5B50\u5973",value:"3"},{label:"\u7236\u6BCD",value:"4"}],eu={LEGAL:"1",SPECIFY:"2"},Su=[{label:"\u6CD5\u5B9A",value:eu.LEGAL},{label:"\u6307\u5B9A",value:eu.SPECIFY}],mu=[{label:"\u5DF2\u5A5A",value:"1"},{label:"\u672A\u5A5A",value:"2"}],pu=[{label:"\u672C\u4EBA",value:"1"},{label:"\u914D\u5076",value:"2"},{label:"\u5B50\u5973",value:"3"},{label:"\u7236\u6BCD",value:"4"}],Iu=[{label:"\u4EC5\u4E3A\u4E2D\u56FD\u7A0E\u6536\u5C45\u6C11",value:"1"},{label:"\u4EC5\u4E3A\u975E\u4E2D\u56FD\u7A0E\u6536\u5C45\u6C11",value:"2"},{label:"\u65E2\u662F\u4E2D\u56FD\u7A0E\u6536\u5C45\u6C11\u53C8\u662F\u5176\u4ED6\u56FD\u5BB6\uFF08\u5730\u533A\uFF09\u7A0E\u6536\u5C45\u6C11",value:"3"}],vu=[{label:"\u7B2C\u4E00\u987A\u4F4D",value:"1"},{label:"\u7B2C\u4E8C\u987A\u4F4D",value:"2"},{label:"\u7B2C\u4E09\u987A\u4F4D",value:"3"},{label:"\u5176\u4ED6",value:"4"}];var uu={exports:{}};(function(E,O){(function(v,k){E.exports=k()})(ou,function(){return function(v,k,A){v=v||{};var C=k.prototype,w={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function g(s,m,e,y){return C.fromToBase(s,m,e,y)}A.en.relativeTime=w,C.fromToBase=function(s,m,e,y,a){for(var b,c,F,Y=e.$locale().relativeTime||w,q=v.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],r=q.length,u=0;u<r;u+=1){var f=q[u];f.d&&(b=y?A(s).diff(e,f.d,!0):e.diff(s,f.d,!0));var n=(v.rounding||Math.round)(Math.abs(b));if(F=b>0,n<=f.r||!f.r){n<=1&&u>0&&(f=q[u-1]);var p=Y[f.l];a&&(n=a(""+n)),c=typeof p=="string"?p.replace("%d",n):p(n,m,f.l,F);break}}if(m)return c;var D=F?Y.future:Y.past;return typeof D=="function"?D(c):D.replace("%s",c)},C.to=function(s,m){return g(s,m,this,!0)},C.from=function(s,m){return g(s,m,this)};var x=function(s){return s.$u?A.utc():A()};C.toNow=function(s){return this.to(x(this),s)},C.fromNow=function(s){return this.from(x(this),s)}}})})(uu);var Eu=uu.exports;const Cu={key:0,class:"com-personal-wrapper"},yu={class:"date-extra"},Fu=tu("\u957F\u671F"),Du=L("span",{class:"input-extra"},"\u4E07",-1),Bu=L("span",{class:"input-extra"},"\u4E07",-1),Vu=L("span",{class:"input-extra"},"%",-1),ku=lu({props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1}},emits:["update:images"],setup(E,{emit:O}){const v=E;au();const{venderCode:k=""}=ru().query,A=S("CERT_TYPE"),C=S(`${k.toLocaleUpperCase()}_OCCUPATION`);S("MARRIAGE_STATUS");const w=S("DEGREE"),g=S("NATIONALITY"),x=S("NATIONAL_REGION_CODE"),s=R([]),m=R(!1),e=R({formInfo:v.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},front:"",back:"",occupationalText:""});We.extend(Eu);const y=R(v.formInfo.certEndType===2),a=_e(()=>{const r={};return v.factorList.forEach(u=>{r[u.code]=u}),r});_e(()=>e.value.formInfo.extInfo.nationalityCode==="CHN"?[]:[]);const b=(r,u)=>/^[+-]?(\d|[1-9]\d{1,9})(\.\d{1,2})?$/.test(r)?"":"\u5E74\u6536\u5165\u6700\u591A\u5F55\u516510\u4F4D\u6570\u5B57",c=(r,u)=>(console.log("\u{1F680} ~ validatePositiveInteger ~ value",r),/^[1-9]$|^[1-9][0-9]$|^100$/.test(r)?"":"\u6536\u76CA\u6BD4\u4F8B\u53EA\u80FD\u586B\u51991-100\u7684\u6B63\u6574\u6570"),F=(r,u,f)=>u.length>r?`\u6700\u5927\u4E0D\u80FD\u8D85\u8FC7${r}\u4E2A\u5B57\u7B26`:"",Y=(r,u)=>{var f,n;if(((f=e.value.formInfo)==null?void 0:f.certType)==="4"){if(!/^[a-zA-Z]\d{9}$/.test(`${r}`))return"\u51FA\u751F\u8BC1\u53F7\u7801\u9519\u8BEF"}else if(((n=e.value.formInfo)==null?void 0:n.certType)==="2")return`${r}`.length>=5&&/^[^\u4e00-\u9fa5]+$/.test(`${r}`)?"":"\u8BC1\u4EF6\u53F7\u7801\u9519\u8BEF";return""},q=(r,u)=>{var f,n,p,D,M,T,P;if(((n=(f=e.value.formInfo)==null?void 0:f.extInfo)==null?void 0:n.nationalityCode)==="CHN"){if(!["1","2","3","4"].includes(`${r}`))return"\u56FD\u7C4D\u4E3A\u4E2D\u56FD\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u53EA\u5141\u8BB8\u9009\u62E9\u8EAB\u4EFD\u8BC1\u3001\u6237\u53E3\u672C\u3001\u51FA\u751F\u8BC1\u3001\u519B\u5B98\u8BC1"}else if(["HKG","MAC"].includes((D=(p=e.value.formInfo)==null?void 0:p.extInfo)==null?void 0:D.nationalityCode)){if(!["15","9"].includes(`${r}`))return"\u56FD\u7C4D\u4E3A\u4E2D\u56FD\u9999\u6E2F\u3001\u4E2D\u56FD\u6FB3\u95E8\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u53EA\u5141\u8BB8\u9009\u62E9\u6E2F\u6FB3\u901A\u884C\u8BC1\u3001\u6E2F\u6FB3\u5C45\u6C11\u5C45\u4F4F\u8BC1"}else if(((T=(M=e.value.formInfo)==null?void 0:M.extInfo)==null?void 0:T.nationalityCode)==="TWN"){if(!["10"].includes(`${r}`))return"\u56FD\u7C4D\u4E3A\u4E2D\u56FD\u53F0\u6E7E\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u53EA\u5141\u8BB8\u9009\u62E9\u53F0\u6E7E\u901A\u884C\u8BC1\u3001\u53F0\u6E7E\u5C45\u6C11\u5C45\u4F4F\u8BC1"}else if(!["2","11"].includes(`${r}`))return"\u56FD\u7C4D\u4E3A\u975E\u4E2D\u56FD\u3001\u6E2F\u6FB3\u53F0\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u53EA\u5141\u8BB8\u9009\u62E9\u62A4\u7167\u3001\u5916\u56FD\u4EBA\u6C38\u4E45\u5C45\u7559\u8EAB\u4EFD\u8BC1";return+We((P=e.value.formInfo)==null?void 0:P.birthday).toNow(!0).split(" ")[0]>2&&`${r}`=="4"?"\u5E74\u9F84\u5927\u4E8E\u7B49\u4E8E2\u5468\u5C81\u65F6\uFF0C\u8BC1\u4EF6\u7C7B\u578B\u4E0D\u80FD\u9009\u62E9\u51FA\u751F\u8BC1":""};return U(()=>y.value,r=>{r?(e.value.formInfo.certEndType=2,e.value.formInfo.certEndDate=""):e.value.formInfo.certEndType=1},{immediate:!0}),U(()=>e.value.formInfo.certType,r=>{[1,2].includes(+r)?m.value=!0:m.value=!1},{deep:!0,immediate:!0}),U(()=>e.value.formInfo.certNo,r=>{iu(r)?(e.value.formInfo.gender=du(r),e.value.formInfo.birthday=new Date(su(r)),m.value=!0):m.value=!1},{deep:!0,immediate:!0}),U(()=>v.images,r=>{s.value=r},{immediate:!0}),U(s,r=>{O("update:images",r)},{deep:!0}),(r,u)=>{var G,Z,h,H,j,z,X,K,J,Q,W,_,ee,ue,oe,le,ae,re,ne,te,ie,de,se,fe,me,pe,Ie,ve,Ee,Ce,ye,Fe,De,Be,Ve,Ae,xe,be,ce,Se,ke,Ye,qe,Te,Ue,we,ge,Me,Pe,Ne,Re,Le,$e,Oe,Ge,Ze,he,He,je,ze,Xe,Ke,Je,Qe;const f=B("ProRadioButton"),n=B("ProField"),p=B("ProPicker"),D=B("ProIDCardUpload"),M=B("ProImageUpload"),T=B("ProDatePicker"),P=B("van-checkbox"),N=B("ProCascader");return Object.keys(l(a)).length?(t(),nu("div",Cu,[((G=l(a).insureRelation)==null?void 0:G.isDisplay)?(t(),d(n,{key:0,modelValue:e.value.formInfo.relationToInsured,"onUpdate:modelValue":u[1]||(u[1]=o=>e.value.formInfo.relationToInsured=o),name:"relationToInsured",required:((Z=l(a).insureRelation)==null?void 0:Z.isMustInput)==="YES",label:"\u662F\u88AB\u4FDD\u4EBA\u7684"},{input:I(()=>[V(f,{modelValue:e.value.formInfo.relationToInsured,"onUpdate:modelValue":u[0]||(u[0]=o=>e.value.formInfo.relationToInsured=o),"is-view":E.isView,options:l(pu).slice(1,4)},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","required"])):i("",!0),((h=l(a).certType)==null?void 0:h.isDisplay)==="YES"?(t(),d(p,{key:1,modelValue:e.value.formInfo.certType,"onUpdate:modelValue":u[2]||(u[2]=o=>e.value.formInfo.certType=o),label:"\u8BC1\u4EF6\u7C7B\u578B",name:"certType",readonly:"","data-source":l(A),mapping:{label:"name",value:"code",children:"child"},required:((H=l(a).certType)==null?void 0:H.isMustInput)==="YES",rules:[{validator:q}]},null,8,["modelValue","data-source","required","rules"])):i("",!0),((j=l(a).attachment)==null?void 0:j.isDisplay)==="YES"&&e.value.formInfo.certType+""=="1"?(t(),d(n,{key:2,label:"\u8EAB\u4EFD\u8BC1\u4E0A\u4F20",block:"",required:((z=l(a).certType)==null?void 0:z.isMustInput)==="YES"},{input:I(()=>[V(D,{front:s.value[0],"onUpdate:front":u[3]||(u[3]=o=>s.value[0]=o),back:s.value[1],"onUpdate:back":u[4]||(u[4]=o=>s.value[1]=o)},null,8,["front","back"])]),_:1},8,["required"])):i("",!0),((X=l(a).attachment)==null?void 0:X.isDisplay)==="YES"&&e.value.formInfo.certType&&e.value.formInfo.certType+""!="1"?(t(),d(n,{key:3,label:"\u8BC1\u4EF6\u4E0A\u4F20",block:"",required:((K=l(a).certType)==null?void 0:K.isMustInput)==="YES"},{input:I(()=>[V(M,{modelValue:s.value,"onUpdate:modelValue":u[5]||(u[5]=o=>s.value=o),"max-count":1},null,8,["modelValue"])]),_:1},8,["required"])):i("",!0),((J=l(a).certNo)==null?void 0:J.isDisplay)==="YES"?(t(),d(n,{key:4,modelValue:e.value.formInfo.certNo,"onUpdate:modelValue":u[6]||(u[6]=o=>e.value.formInfo.certNo=o),label:"\u8BC1\u4EF6\u53F7\u7801",name:"certNo",required:((Q=l(a).certNo)==null?void 0:Q.isMustInput)==="YES",placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:Y}],"validate-type":e.value.formInfo.certType==="1"?["idCard"]:[]},null,8,["modelValue","required","rules","validate-type"])):i("",!0),((W=l(a).name)==null?void 0:W.isDisplay)==="YES"?(t(),d(n,{key:5,modelValue:e.value.formInfo.name,"onUpdate:modelValue":u[7]||(u[7]=o=>e.value.formInfo.name=o),label:"\u59D3\u540D",name:"name",required:((_=l(a).name)==null?void 0:_.isMustInput)==="YES"},null,8,["modelValue","required"])):i("",!0),((ee=l(a).sex)==null?void 0:ee.isDisplay)==="YES"?(t(),d(n,{key:6,modelValue:e.value.formInfo.gender,"onUpdate:modelValue":u[9]||(u[9]=o=>e.value.formInfo.gender=o),required:((ue=l(a).sex)==null?void 0:ue.isMustInput)==="YES",label:"\u6027\u522B",name:"gender",placeholder:"\u8BF7\u9009\u62E9","is-view":m.value},{input:I(()=>[V(f,{modelValue:e.value.formInfo.gender,"onUpdate:modelValue":u[8]||(u[8]=o=>e.value.formInfo.gender=o),disabled:m.value,"is-view":E.isView,options:l(fu)},null,8,["modelValue","disabled","is-view","options"])]),_:1},8,["modelValue","required","is-view"])):i("",!0),((oe=l(a).birthday)==null?void 0:oe.isDisplay)==="YES"?(t(),d(T,{key:7,modelValue:e.value.formInfo.birthday,"onUpdate:modelValue":u[10]||(u[10]=o=>e.value.formInfo.birthday=o),label:"\u51FA\u751F\u65E5\u671F",name:"birthday",min:e.value.birth.min,max:e.value.birth.max,type:"date",required:((le=l(a).birthday)==null?void 0:le.isMustInput)==="YES","is-view":m.value},null,8,["modelValue","min","max","required","is-view"])):i("",!0),((ae=l(a).certEndDate)==null?void 0:ae.isDisplay)==="YES"?(t(),d(T,{key:8,modelValue:e.value.formInfo.certEndDate,"onUpdate:modelValue":u[12]||(u[12]=o=>e.value.formInfo.certEndDate=o),label:"\u6709\u6548\u671F\u81F3",name:"certEndDate",type:"date",min:e.value.certEndDate.min,max:e.value.certEndDate.max,"is-view":y.value,read:"",required:((re=l(a).certEndDate)==null?void 0:re.isMustInput)==="YES"},{extra:I(()=>[L("div",yu,[V(P,{modelValue:y.value,"onUpdate:modelValue":u[11]||(u[11]=o=>y.value=o)},{default:I(()=>[Fu]),_:1},8,["modelValue"])])]),_:1},8,["modelValue","min","max","is-view","required"])):i("",!0),((ne=l(a).houseHold)==null?void 0:ne.isDisplay)==="YES"?(t(),d(N,{key:9,modelValue:e.value.formInfo.extInfo.provinceCode,"onUpdate:modelValue":u[13]||(u[13]=o=>e.value.formInfo.extInfo.provinceCode=o),field1:e.value.formInfo.extInfo.provinceCode,"onUpdate:field1":u[14]||(u[14]=o=>e.value.formInfo.extInfo.provinceCode=o),field2:e.value.formInfo.extInfo.cityCode,"onUpdate:field2":u[15]||(u[15]=o=>e.value.formInfo.extInfo.cityCode=o),field3:e.value.formInfo.extInfo.areaCode,"onUpdate:field3":u[16]||(u[16]=o=>e.value.formInfo.extInfo.areaCode=o),label:"\u6237\u7C4D\u6240\u5728\u5730",name:"provinceCode",placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:((te=l(a).houseHold)==null?void 0:te.isMustInput)==="YES","data-source":l(x),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","required","data-source"])):i("",!0),((ie=l(a).hasSocialInsurance)==null?void 0:ie.isDisplay)==="YES"?(t(),d(n,{key:10,modelValue:e.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":u[18]||(u[18]=o=>e.value.formInfo.extInfo.hasSocialInsurance=o),label:"\u793E\u4FDD",name:"hasSocialInsurance",placeholder:"\u8BF7\u9009\u62E9",required:((de=l(a).hasSocialInsurance)==null?void 0:de.isMustInput)==="YES"},{input:I(()=>[V(f,{modelValue:e.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":u[17]||(u[17]=o=>e.value.formInfo.extInfo.hasSocialInsurance=o),"is-view":E.isView,options:l($)},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","required"])):i("",!0),((se=l(a).occupation)==null?void 0:se.isDisplay)==="YES"?(t(),d(N,{key:11,modelValue:e.value.formInfo.extInfo.occupationCode,"onUpdate:modelValue":u[19]||(u[19]=o=>e.value.formInfo.extInfo.occupationCode=o),label:"\u804C\u4E1A",name:"occupationCode",placeholder:"\u8BF7\u9009\u62E9",required:((fe=l(a).occupation)==null?void 0:fe.isMustInput)==="YES","data-source":l(C),mapping:{label:"value",value:"code",children:"children"},"is-link":""},null,8,["modelValue","required","data-source"])):i("",!0),((me=l(a).annualIncome)==null?void 0:me.isDisplay)==="YES"?(t(),d(n,{key:12,modelValue:e.value.formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":u[20]||(u[20]=o=>e.value.formInfo.extInfo.personalAnnualIncome=o),label:"\u4E2A\u4EBA\u5E74\u6536\u5165",name:"personalAnnualIncome",required:((pe=l(a).annualIncome)==null?void 0:pe.isMustInput)==="YES",placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:b}]},{extra:I(()=>[Du]),_:1},8,["modelValue","required","rules"])):i("",!0),((Ie=l(a).familyAnnualIncome)==null?void 0:Ie.isDisplay)==="YES"?(t(),d(n,{key:13,modelValue:e.value.formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":u[21]||(u[21]=o=>e.value.formInfo.extInfo.familyAnnualIncome=o),label:"\u5BB6\u5EAD\u5E74\u6536\u5165",name:"familyAnnualIncome",placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:b}],required:((ve=l(a).familyAnnualIncome)==null?void 0:ve.isMustInput)==="YES"},{extra:I(()=>[Bu]),_:1},8,["modelValue","rules","required"])):i("",!0),((Ee=l(a).nationality)==null?void 0:Ee.isDisplay)==="YES"?(t(),d(p,{key:14,modelValue:e.value.formInfo.extInfo.nationalityCode,"onUpdate:modelValue":u[22]||(u[22]=o=>e.value.formInfo.extInfo.nationalityCode=o),label:"\u56FD\u7C4D",name:"nationalityCode",readonly:"","data-source":l(g),mapping:{label:"name",value:"code",children:"child"},placeholder:"\u8BF7\u9009\u62E9",required:((Ce=l(a).nationality)==null?void 0:Ce.isMustInput)==="YES","is-link":""},null,8,["modelValue","data-source","required"])):i("",!0),((ye=l(a).USAGreenCard)==null?void 0:ye.isDisplay)==="YES"?(t(),d(n,{key:15,modelValue:e.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":u[24]||(u[24]=o=>e.value.formInfo.extInfo.hasUsCard=o),label:"\u7F8E\u56FD\u7EFF\u5361",name:"hasUsCard",placeholder:"\u8BF7\u9009\u62E9",required:((Fe=l(a).USAGreenCard)==null?void 0:Fe.isMustInput)==="YES"},{input:I(()=>[V(f,{modelValue:e.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":u[23]||(u[23]=o=>e.value.formInfo.extInfo.hasUsCard=o),"is-view":E.isView,options:l($)},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","required"])):i("",!0),((De=l(a).marriage)==null?void 0:De.isDisplay)==="YES"?(t(),d(p,{key:16,modelValue:e.value.formInfo.extInfo.marriageStatus,"onUpdate:modelValue":u[25]||(u[25]=o=>e.value.formInfo.extInfo.marriageStatus=o),label:"\u5A5A\u59FB\u72B6\u51B5",name:"marriageStatus",readonly:"",placeholder:"\u8BF7\u9009\u62E9","data-source":l(mu),"is-link":"",required:((Be=l(a).marriage)==null?void 0:Be.isMustInput)==="YES"},null,8,["modelValue","data-source","required"])):i("",!0),((Ve=l(a).educationDegree)==null?void 0:Ve.isDisplay)==="YES"?(t(),d(p,{key:17,modelValue:e.value.formInfo.extInfo.educationDegree,"onUpdate:modelValue":u[26]||(u[26]=o=>e.value.formInfo.extInfo.educationDegree=o),label:"\u5B66\u5386",readonly:"",name:"educationDegree","data-source":l(w),mapping:{label:"name",value:"code",children:"child"},placeholder:"\u8BF7\u9009\u62E9",required:((Ae=l(a).educationDegree)==null?void 0:Ae.isMustInput)==="YES","is-link":""},null,8,["modelValue","data-source","required"])):i("",!0),((xe=l(a).mobile)==null?void 0:xe.isDisplay)==="YES"?(t(),d(n,{key:18,modelValue:e.value.formInfo.mobile,"onUpdate:modelValue":u[27]||(u[27]=o=>e.value.formInfo.mobile=o),label:"\u624B\u673A\u53F7\u7801",name:"mobile",placeholder:"\u8BF7\u8F93\u5165",required:((be=l(a).mobile)==null?void 0:be.isMustInput)==="YES","validate-type":["phone"]},null,8,["modelValue","required"])):i("",!0),((ce=l(a).email)==null?void 0:ce.isDisplay)==="YES"?(t(),d(n,{key:19,modelValue:e.value.formInfo.email,"onUpdate:modelValue":u[28]||(u[28]=o=>e.value.formInfo.email=o),label:"\u7535\u5B50\u90AE\u7BB1",name:"email",placeholder:"\u8BF7\u8F93\u5165",required:((Se=l(a).email)==null?void 0:Se.isMustInput)==="YES","validate-type":["mail"]},null,8,["modelValue","required"])):i("",!0),((ke=l(a).familyAddress)==null?void 0:ke.isDisplay)==="YES"?(t(),d(N,{key:20,modelValue:e.value.formInfo.extInfo.familyProvinceCode,"onUpdate:modelValue":u[29]||(u[29]=o=>e.value.formInfo.extInfo.familyProvinceCode=o),field1:e.value.formInfo.extInfo.familyProvinceCode,"onUpdate:field1":u[30]||(u[30]=o=>e.value.formInfo.extInfo.familyProvinceCode=o),field2:e.value.formInfo.extInfo.familyCityCode,"onUpdate:field2":u[31]||(u[31]=o=>e.value.formInfo.extInfo.familyCityCode=o),field3:e.value.formInfo.extInfo.familyAreaCode,"onUpdate:field3":u[32]||(u[32]=o=>e.value.formInfo.extInfo.familyAreaCode=o),label:"\u5BB6\u5EAD\u5730\u5740",name:"familyProvinceCode",placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:((Ye=l(a).familyAddress)==null?void 0:Ye.isMustInput)==="YES","data-source":l(x),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","required","data-source"])):i("",!0),((qe=l(a).familyAddressDetail)==null?void 0:qe.isDisplay)==="YES"?(t(),d(n,{key:21,modelValue:e.value.formInfo.extInfo.familyAddress,"onUpdate:modelValue":u[33]||(u[33]=o=>e.value.formInfo.extInfo.familyAddress=o),label:"\u5730\u5740\u8BE6\u60C5",name:"familyAddress",placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...o)=>F(100,...o)}],required:((Te=l(a).familyAddressDetail)==null?void 0:Te.isMustInput)==="YES"},null,8,["modelValue","rules","required"])):i("",!0),((Ue=l(a).familyPostCode)==null?void 0:Ue.isDisplay)==="YES"?(t(),d(n,{key:22,modelValue:e.value.formInfo.extInfo.familyZipCode,"onUpdate:modelValue":u[34]||(u[34]=o=>e.value.formInfo.extInfo.familyZipCode=o),label:"\u5BB6\u5EAD\u90AE\u7F16",name:"familyZipCode",placeholder:"\u8BF7\u8F93\u5165",required:((we=l(a).familyPostCode)==null?void 0:we.isMustInput)==="YES","validate-type":["zipCode"]},null,8,["modelValue","required"])):i("",!0),((ge=l(a).workAddress)==null?void 0:ge.isDisplay)==="YES"?(t(),d(N,{key:23,modelValue:e.value.formInfo.extInfo.workProvinceCode,"onUpdate:modelValue":u[35]||(u[35]=o=>e.value.formInfo.extInfo.workProvinceCode=o),field1:e.value.formInfo.extInfo.workProvinceCode,"onUpdate:field1":u[36]||(u[36]=o=>e.value.formInfo.extInfo.workProvinceCode=o),field2:e.value.formInfo.extInfo.workCityCode,"onUpdate:field2":u[37]||(u[37]=o=>e.value.formInfo.extInfo.workCityCode=o),field3:e.value.formInfo.extInfo.workAreaCode,"onUpdate:field3":u[38]||(u[38]=o=>e.value.formInfo.extInfo.workAreaCode=o),label:"\u5DE5\u4F5C\u5730\u5740",name:"workProvinceCode",placeholder:"\u8BF7\u9009\u62E9","is-link":"",required:((Me=l(a).workAddress)==null?void 0:Me.isMustInput)==="YES","data-source":l(x),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","required","data-source"])):i("",!0),((Pe=l(a).workAddressDetail)==null?void 0:Pe.isDisplay)==="YES"?(t(),d(n,{key:24,modelValue:e.value.formInfo.extInfo.workAddress,"onUpdate:modelValue":u[39]||(u[39]=o=>e.value.formInfo.extInfo.workAddress=o),label:"\u5730\u5740\u8BE6\u60C5",name:"workAddress",placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...o)=>F(100,...o)}],required:((Ne=l(a).workAddressDetail)==null?void 0:Ne.isMustInput)==="YES"},null,8,["modelValue","rules","required"])):i("",!0),((Re=l(a).workZipCode)==null?void 0:Re.isDisplay)==="YES"?(t(),d(n,{key:25,modelValue:e.value.formInfo.extInfo.workZipCode,"onUpdate:modelValue":u[40]||(u[40]=o=>e.value.formInfo.extInfo.workZipCode=o),label:"\u5DE5\u4F5C\u90AE\u7F16",required:((Le=l(a).workZipCode)==null?void 0:Le.isMustInput)==="YES",name:"workPostCode",placeholder:"\u8BF7\u8F93\u5165","validate-type":["zipCode"]},null,8,["modelValue","required"])):i("",!0),(($e=l(a).workPlace)==null?void 0:$e.isDisplay)==="YES"?(t(),d(n,{key:26,modelValue:e.value.formInfo.extInfo.workStation,"onUpdate:modelValue":u[41]||(u[41]=o=>e.value.formInfo.extInfo.workStation=o),label:"\u5355\u4F4D\u540D\u79F0",name:"workPostCode",placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...o)=>F(20,...o)}],required:((Oe=l(a).workPlace)==null?void 0:Oe.isMustInput)==="YES"},null,8,["modelValue","rules","required"])):i("",!0),((Ge=l(a).workContent)==null?void 0:Ge.isDisplay)==="YES"?(t(),d(n,{key:27,modelValue:e.value.formInfo.extInfo.workContent,"onUpdate:modelValue":u[42]||(u[42]=o=>e.value.formInfo.extInfo.workContent=o),label:"\u5DE5\u4F5C\u5185\u5BB9",name:"workContent",required:((Ze=l(a).workContent)==null?void 0:Ze.isMustInput)==="YES",placeholder:"\u8BF7\u8F93\u5165",rules:[{validator:(...o)=>F(100,...o)}]},null,8,["modelValue","required","rules"])):i("",!0),((he=l(a).taxCert)==null?void 0:he.isDisplay)==="YES"?(t(),d(p,{key:28,modelValue:e.value.formInfo.extInfo.taxResident,"onUpdate:modelValue":u[43]||(u[43]=o=>e.value.formInfo.extInfo.taxResident=o),label:"\u7A0E\u6536\u5C45\u6C11\u8EAB\u4EFD",name:"taxResident","data-source":l(Iu),required:((He=l(a).taxCert)==null?void 0:He.isMustInput)==="YES",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","data-source","required"])):i("",!0),((je=l(a).partTime)==null?void 0:je.isDisplay)==="YES"?(t(),d(n,{key:29,modelValue:e.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":u[45]||(u[45]=o=>e.value.formInfo.extInfo.isPartTime=o),label:"\u662F\u5426\u517C\u804C",name:"isPartTime",required:((ze=l(a).partTime)==null?void 0:ze.isMustInput)==="YES",placeholder:"\u8BF7\u8F93\u5165"},{input:I(()=>[V(f,{modelValue:e.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":u[44]||(u[44]=o=>e.value.formInfo.extInfo.isPartTime=o),"is-view":E.isView,options:l($)},null,8,["modelValue","is-view","options"])]),_:1},8,["modelValue","required"])):i("",!0),((Xe=l(a).beneficiaryType)==null?void 0:Xe.isDisplay)?(t(),d(p,{key:30,modelValue:e.value.formInfo.benefitOrder,"onUpdate:modelValue":u[46]||(u[46]=o=>e.value.formInfo.benefitOrder=o),label:"\u53D7\u76CA\u4EBA\u987A\u5E8F",name:"benefitOrder","data-source":l(vu),required:((Ke=l(a).beneficiaryType)==null?void 0:Ke.isMustInput)==="YES"},null,8,["modelValue","data-source","required"])):i("",!0),((Je=l(a).benefitRate)==null?void 0:Je.isDisplay)?(t(),d(n,{key:31,modelValue:e.value.formInfo.benefitRate,"onUpdate:modelValue":u[47]||(u[47]=o=>e.value.formInfo.benefitRate=o),required:((Qe=l(a).benefitRate)==null?void 0:Qe.isMustInput)==="YES",name:"benefitRate",rules:[{validator:c}],label:"\u53D7\u76CA\u6BD4\u4F8B"},{extra:I(()=>[Vu]),_:1},8,["modelValue","required","rules"])):i("",!0)])):i("",!0)}}});export{Su as B,cu as R,ku as _,eu as a,pu as b,vu as c};
