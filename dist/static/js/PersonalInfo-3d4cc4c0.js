import{d as e,ac as a,u as o,r as l,L as i,z as n,C as r,cl as t,R as d,cm as u,y as m,x as f,f as s,b as c,c as I,g as p,w as v,e as V,h as y,k as b,a2 as w,i as x,j as h,ao as C,F as k,E as _,T,Z as q,aP as U,aQ as g,cn as A,co as $,cp as R,cq as E,bM as D,cj as L,B as S}from"./index-160c1272.js";import{c as O}from"./pdfh5-e588f83d.js";import{u as N}from"./useDicData-02532dc9.js";import{R as P}from"./infoCollection-d69547b2.js";var M={exports:{}},B=M.exports=function(e,a,o){e=e||{};var l=a.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function n(e,a,o,i){return l.fromToBase(e,a,o,i)}o.en.relativeTime=i,l.fromToBase=function(a,l,n,r,t){for(var d,u,m,f=n.$locale().relativeTime||i,s=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],c=s.length,I=0;I<c;I+=1){var p=s[I];p.d&&(d=r?o(a).diff(n,p.d,!0):n.diff(a,p.d,!0));var v=(e.rounding||Math.round)(Math.abs(d));if(m=d>0,v<=p.r||!p.r){v<=1&&I>0&&(p=s[I-1]);var V=f[p.l];t&&(v=t(""+v)),u="string"==typeof V?V.replace("%d",v):V(v,l,p.l,m);break}}if(l)return u;var y=m?f.future:f.past;return"function"==typeof y?y(u):y.replace("%s",u)},l.to=function(e,a){return n(e,a,this,!0)},l.from=function(e,a){return n(e,a,this)};var r=function(e){return e.$u?o.utc():o()};l.toNow=function(e){return this.to(r(this),e)},l.fromNow=function(e){return this.from(r(this),e)}};const H={key:0,class:"com-personal-wrapper"},j={class:"date-extra"},Y=x("span",{class:"input-extra"},"万",-1),Z=x("span",{class:"input-extra"},"万",-1),F={class:"button-extra"},z=x("span",{class:"input-extra"},"%",-1),G=e({__name:"PersonalInfo",props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]},sendSmsCode:{type:Function,default:(e,a)=>{}},needDesensitize:{type:Boolean,default:!1}},emits:["update:images"],setup(e,{emit:O}){const M=e;a();const{insurerCode:G=""}=o().query,J=N(`${G.toLocaleUpperCase()}_OCCUPATION`),K=N("NATIONAL_REGION_CODE"),W=l([]),Q=l(!1),X=l(),ee=l(),ae=l({formInfo:M.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""}),oe=l(!1),le=i((()=>oe.value?(ae.value.formInfo.mobile||"").replace(/^(.{3})(?:\d+)(.{4})$/,"$1****$2"):M.formInfo.mobile)),ie=l(!1),ne=i((()=>ie.value?(ae.value.formInfo.certNo||"").replace(/^(.{6})(?:\d+)(.{2})$/,"$1**********$2"):M.formInfo.certNo));n.extend(B);const re=l(2===M.formInfo.certEndType),te=l(18),de=l(0),ue=l("验证码"),me=l(!1),fe=i((()=>{const e={};return M.factorList.forEach((a=>{e[a.code]=a})),e})),se=(e,a)=>{ae.value.formInfo[a]=e};i((()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(ae.value.formInfo.mobile)));const ce=e=>{"mobile"===e&&(oe.value=!1),"certNo"===e&&(ie.value=!1)},Ie=async()=>{de.value>0||M.sendSmsCode({mobile:ae.value.formInfo.mobile,type:M.prefix},(()=>{me.value=!0,T({message:"短信发送成功，请查收"}),(()=>{if(de.value>0)return;de.value=60;const e=()=>{ue.value=`${de.value}s`,de.value-=1};e();const a=setInterval((()=>{0===de.value?(ue.value="验证码",de.value=0,clearInterval(a)):e()}),1e3)})()}))},pe=e=>{ae.value.formInfo.certNo=e.personIdCard,ae.value.formInfo.name=e.personName,ae.value.formInfo.certEndDate=n(e.validDateEnd,"YYYYMMDD").toDate()},ve=e=>{var a;return fe.value&&fe.value[e]&&(null==(a=fe.value[e])?void 0:a.isDisplay)===q.YES},Ve=e=>fe.value&&fe.value[e]&&fe.value[e].isMustInput===q.YES,ye=(e,a)=>{var o,l;return(null==(l=null==(o=fe.value)?void 0:o[e])?void 0:l[a])||""},be=i((()=>{var e;if(!ve("certType"))return ae.value.formInfo.certType=+r.CERT,!1;const a=ye("certType","attributeValueList")||[];return 1!==a.length||(null==(e=a[0])?void 0:e.code)!==r.CERT||(ae.value.formInfo.certType=+r.CERT,!1)})),we=i((()=>{var e,a,o;return(null==(e=ye("certType","attributeValueList"))?void 0:e.length)>1?"证件号码":"insure"===M.prefix&&(null==(a=ae.value.formInfo)?void 0:a.relationToHolder)===P.CHILD?"身份证号(户口簿)":(null==(o=ye("certType","attributeValueList"))?void 0:o[0].code)===r.CERT?"身份证号":ye("certType","title")})),xe=(e,a)=>/^[\u4E00-\u9FA5．·]{2,50}$/.test(e)?"":"请输入正确的姓名",he=i((()=>(te.value=18,[r.CERT,r.HOUSE_HOLD].includes(`${ae.value.formInfo.certType}`)?(Q.value=!0,[t.ID_CARD]):`${ae.value.formInfo.certType}`===r.BIRTH?(Q.value=!1,te.value=10,[t.BIRTH]):`${ae.value.formInfo.certType}`===r.PASSPORT?(Q.value=!1,[t.PASSPORT]):`${ae.value.formInfo.certType}`===r.SOCIAL_CREDIT_CODE?(Q.value=!1,[t.SOCIAL_CREDIT_CODE]):`${ae.value.formInfo.certType}`===r.OTHER?(Q.value=!1,[t.OTHER]):(Q.value=!0,[t.ID_CARD])))),Ce=(e,a)=>Ve("attachment")?2===ae.value.formInfo.certEndType||ae.value.formInfo.certEndDate?"":"请选择有效期至":"",ke=(e,a)=>/^\d{1,10}(\.\d{1,2})?$/.test(e)?"":"年收入最多录入10位数字",_e=(e,a)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(e)?"":"收益比例只能填写1-100的正整数",Te=(e,a)=>(console.log("value",e),e.length>=5&&e.length<=99?"":"最多99个字符最少5个字符"),qe=(e,a,o)=>a.length>e?`最大不能超过${e}个字符`:"",Ue=(e,a)=>{var o,l,i,t,d,u,m;if(!ve("nationality"))return"";if("CHN"===(null==(l=null==(o=ae.value.formInfo)?void 0:o.extInfo)?void 0:l.nationalityCode)){if(![r.CERT,r.HOUSE_HOLD,r.BIRTH,r.MILITARY_CARD].includes(`${e}`))return"国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证"}else if(["HKG","MAC"].includes(null==(t=null==(i=ae.value.formInfo)?void 0:i.extInfo)?void 0:t.nationalityCode)){if(![r.HK_MACAO_RESIDENCE_PERMIT,r.HONGKONG_MACAO].includes(`${e}`))return"国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证"}else if("TWN"===(null==(u=null==(d=ae.value.formInfo)?void 0:d.extInfo)?void 0:u.nationalityCode)){if(![r.TAIWAN_RESIDENCE_PERMIT,r.TAIWAN_TRAVEL].includes(`${e}`))return"国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证"}else if(![r.PASSPORT,r.FOREIGN_PERMANENT].includes(`${e}`))return"国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证";return n().year()-n(null==(m=ae.value.formInfo)?void 0:m.birthday).year()>2&&e===r.BIRTH?"年龄大于等于2周岁时，证件类型不能选择出生证":""},ge=e=>Array.isArray(e)&&2===e.length&&e[0]&&e[1]?"":"请上传身份证正反面照片";return d((()=>re.value),(e=>{e?(ae.value.formInfo.certEndType=2,ae.value.formInfo.certEndDate=""):ae.value.formInfo.certEndType=1}),{immediate:!0}),d((()=>ae.value.formInfo.mobile),(()=>{var e;ae.value.formInfo.mobile=null==(e=ae.value.formInfo.mobile)?void 0:e.replace(/[\u4e00-\u9fa5/\s+/]|[^0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),d([()=>ae.value.formInfo.certNo,()=>ae.value.formInfo.mobile],(()=>{var e,a;ae.value.formInfo.certNo=null==(e=ae.value.formInfo.certNo)?void 0:e.replace(/[\u4e00-\u9fa5/\s+/]/g,""),ae.value.formInfo.mobile=null==(a=ae.value.formInfo.mobile)?void 0:a.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),d((()=>M.needDesensitize),((e=!1)=>{oe.value=e,ie.value=e}),{immediate:!0}),d((()=>ae.value.formInfo.certType),(e=>{[r.CERT,r.HOUSE_HOLD].includes(e)?Q.value=!0:Q.value=!1}),{deep:!0,immediate:!0}),d([()=>ae.value.formInfo.certNo,()=>ae.value.formInfo.certType],(([e])=>{[r.CERT,r.HOUSE_HOLD].includes(`${ae.value.formInfo.certType}`)&&(u(e)?(ae.value.formInfo.gender=+m(e),ae.value.formInfo.birthday=n(new Date(f(e))).format("YYYY-MM-DD")):(ae.value.formInfo.gender=null,ae.value.formInfo.birthday=""))}),{deep:!0,immediate:!0}),d((()=>M.images),(e=>{W.value=e}),{immediate:!0}),d((()=>M.formInfo),(()=>{ae.value.formInfo=M.formInfo}),{deep:!0,immediate:!0}),d(W,(e=>{O("update:images",e)}),{deep:!0}),(e,a)=>{const o=U,l=g,i=A,n=$,r=R,d=E,u=D,m=L,f=S;return Object.keys(s(fe)).length?(c(),I("div",H,[ve("insuredBeneficiaryType")?(c(),p(l,{key:0,modelValue:s(ae).formInfo.insuredBeneficiaryType,"onUpdate:modelValue":a[1]||(a[1]=e=>s(ae).formInfo.insuredBeneficiaryType=e),label:ye("insuredBeneficiaryType","title"),name:"insuredBeneficiaryType"},{input:v((()=>[V(o,{modelValue:s(ae).formInfo.insuredBeneficiaryType,"onUpdate:modelValue":a[0]||(a[0]=e=>s(ae).formInfo.insuredBeneficiaryType=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("insuredBeneficiaryType","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):y("",!0),ve("insuredRelation")?(c(),p(l,{key:1,modelValue:s(ae).formInfo.insuredRelation,"onUpdate:modelValue":a[3]||(a[3]=e=>s(ae).formInfo.insuredRelation=e),label:ye("insuredRelation","title"),name:"insuredRelation"},{input:v((()=>[V(o,{modelValue:s(ae).formInfo.insuredRelation,"onUpdate:modelValue":a[2]||(a[2]=e=>s(ae).formInfo.insuredRelation=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("insuredRelation","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):y("",!0),ve("name")?(c(),p(l,{key:2,modelValue:s(ae).formInfo.name,"onUpdate:modelValue":a[4]||(a[4]=e=>s(ae).formInfo.name=e),label:ye("name","title"),name:`${e.prefix}_name`,"is-view":e.isView,required:Ve("name"),rules:[{validator:xe}]},{"right-icon":v((()=>[b(e.$slots,"name")])),_:3},8,["modelValue","label","name","is-view","required","rules"])):y("",!0),ve("sex")?(c(),p(l,{key:3,modelValue:s(ae).formInfo.gender,"onUpdate:modelValue":a[6]||(a[6]=e=>s(ae).formInfo.gender=e),required:Ve("sex"),label:ye("sex","title"),name:`${e.prefix}_gender`,"is-view":s(Q)},{input:v((()=>[V(o,{modelValue:s(ae).formInfo.gender,"onUpdate:modelValue":a[5]||(a[5]=e=>s(ae).formInfo.gender=e),disabled:s(Q),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("sex","attributeValueList")||[]},null,8,["modelValue","disabled","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):y("",!0),s(be)?(c(),p(i,{key:4,modelValue:s(ae).formInfo.certType,"onUpdate:modelValue":a[7]||(a[7]=e=>s(ae).formInfo.certType=e),label:ye("certType","title"),name:`${e.prefix}_certType`,"data-source":ye("certType","attributeValueList"),mapping:{label:"value",value:"code",children:"child"},required:Ve("certType"),rules:[{validator:Ue}],"is-view":e.isView},null,8,["modelValue","label","name","data-source","required","rules","is-view"])):y("",!0),ve("certImage")&&s(ae).formInfo.certType+""=="1"?(c(),p(l,{key:5,label:"身份证上传",block:"",required:Ve("certImage"),rules:[{validator:ge}],name:`${e.prefix}_idCard`},{input:v((()=>[V(n,{modelValue:s(W),"onUpdate:modelValue":a[8]||(a[8]=e=>w(W)?W.value=e:null),"is-view":e.isView,onOnOCR:pe},null,8,["modelValue","is-view"])])),_:1},8,["required","rules","name"])):y("",!0),ve("certImage")&&s(ae).formInfo.certType&&s(ae).formInfo.certType+""!="1"?(c(),p(l,{key:6,label:ye("certImage","title"),block:"",required:Ve("certImage")},{input:v((()=>[V(r,{modelValue:s(W),"onUpdate:modelValue":a[9]||(a[9]=e=>w(W)?W.value=e:null),"is-view":e.isView,"max-count":1},null,8,["modelValue","is-view"])])),_:1},8,["label","required"])):y("",!0),ve("certNo")?(c(),p(l,{key:7,ref_key:"certNoRef",ref:X,modelValue:s(ne),"onUpdate:modelValue":[a[10]||(a[10]=e=>w(ne)?ne.value=e:null),a[12]||(a[12]=e=>se(e,"certNo"))],label:s(we),name:`${e.prefix}_certNo`,required:Ve("certNo"),maxlength:s(te),"is-view":e.isView,"validate-type":s(ie)?void 0:s(he),onFocus:a[11]||(a[11]=e=>ce("certNo"))},null,8,["modelValue","label","name","required","maxlength","is-view","validate-type"])):y("",!0),ve("birthDate")?(c(),p(d,{key:8,modelValue:s(ae).formInfo.birthday,"onUpdate:modelValue":a[13]||(a[13]=e=>s(ae).formInfo.birthday=e),label:ye("birthDate","title"),name:`${e.prefix}_birthday`,min:s(ae).birth.min,max:s(ae).birth.max,type:"date","is-view":s(Q)||e.isView,required:Ve("birthDate")},null,8,["modelValue","label","name","min","max","is-view","required"])):y("",!0),ve("certExpiry")?(c(),p(d,{key:9,modelValue:s(ae).formInfo.certEndDate,"onUpdate:modelValue":a[15]||(a[15]=e=>s(ae).formInfo.certEndDate=e),label:ye("certExpiry","title"),name:`${e.prefix}_certEndDate`,type:"date",min:s(ae).certEndDate.min,max:s(ae).certEndDate.max,"is-view":s(re)||e.isView,read:"",rules:[{validator:Ce}]},{extra:v((()=>[x("div",j,[V(u,{modelValue:s(re),"onUpdate:modelValue":a[14]||(a[14]=e=>w(re)?re.value=e:null),"icon-size":16,disabled:e.isView},{default:v((()=>[h("长期")])),_:1},8,["modelValue","disabled"])])])),_:1},8,["modelValue","label","name","min","max","is-view","rules"])):y("",!0),ve("age")?(c(),p(l,{key:10,modelValue:s(ae).formInfo.name,"onUpdate:modelValue":a[16]||(a[16]=e=>s(ae).formInfo.name=e),label:ye("age","title"),name:`${e.prefix}_age`,"is-view":e.isView,required:Ve("age")},null,8,["modelValue","label","name","is-view","required"])):y("",!0),ve("residence")?(c(),p(m,{key:11,modelValue:s(ae).formInfo.extInfo.provinceCode,"onUpdate:modelValue":a[17]||(a[17]=e=>s(ae).formInfo.extInfo.provinceCode=e),field1:s(ae).formInfo.extInfo.provinceCode,"onUpdate:field1":a[18]||(a[18]=e=>s(ae).formInfo.extInfo.provinceCode=e),field2:s(ae).formInfo.extInfo.cityCode,"onUpdate:field2":a[19]||(a[19]=e=>s(ae).formInfo.extInfo.cityCode=e),field3:s(ae).formInfo.extInfo.areaCode,"onUpdate:field3":a[20]||(a[20]=e=>s(ae).formInfo.extInfo.areaCode=e),label:ye("residence","title"),name:`${e.prefix}_provinceCode`,"is-link":"","is-view":e.isView,required:Ve("residence"),"data-source":s(K),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):y("",!0),ve("social")&&"insure"!==e.prefix?(c(),p(l,{key:12,modelValue:s(ae).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[22]||(a[22]=e=>s(ae).formInfo.extInfo.hasSocialInsurance=e),label:ye("social","title"),name:`${e.prefix}_hasSocialInsurance`,required:Ve("social")},{input:v((()=>[V(o,{modelValue:s(ae).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[21]||(a[21]=e=>s(ae).formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("social","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):y("",!0),ve("height")?(c(),p(l,{key:13,modelValue:s(ae).formInfo.name,"onUpdate:modelValue":a[23]||(a[23]=e=>s(ae).formInfo.name=e),label:ye("height","title"),"is-view":e.isView,name:`${e.prefix}_height`,required:Ve("height")},null,8,["modelValue","label","is-view","name","required"])):y("",!0),ve("weight")?(c(),p(l,{key:14,modelValue:s(ae).formInfo.name,"onUpdate:modelValue":a[24]||(a[24]=e=>s(ae).formInfo.name=e),label:ye("weight","title"),name:`${e.prefix}_weight`,"is-view":e.isView,required:Ve("weight")},null,8,["modelValue","label","name","is-view","required"])):y("",!0),ve("BMI")?(c(),p(l,{key:15,modelValue:s(ae).formInfo.name,"onUpdate:modelValue":a[25]||(a[25]=e=>s(ae).formInfo.name=e),label:ye("BMI","title"),name:`${e.prefix}_BMI`,"is-view":e.isView,required:Ve("BMI")},null,8,["modelValue","label","name","is-view","required"])):y("",!0),ve("insuredRiskManagementLevel")?(c(),p(l,{key:16,modelValue:s(ae).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[27]||(a[27]=e=>s(ae).formInfo.extInfo.hasSocialInsurance=e),label:ye("insuredRiskManagementLevel","title"),name:`${e.prefix}_hasSocialInsurance`,required:Ve("insuredRiskManagementLevel")},{input:v((()=>[V(o,{modelValue:s(ae).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[26]||(a[26]=e=>s(ae).formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("insuredRiskManagementLevel","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):y("",!0),ve("purchaseOtherInsurance")?(c(),p(l,{key:17,modelValue:s(ae).formInfo.extInfo.purchaseOtherInsurance,"onUpdate:modelValue":a[29]||(a[29]=e=>s(ae).formInfo.extInfo.purchaseOtherInsurance=e),label:ye("purchaseOtherInsurance","title"),name:`${e.prefix}_purchaseOtherInsurance`,required:Ve("purchaseOtherInsurance")},{input:v((()=>[V(o,{modelValue:s(ae).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[28]||(a[28]=e=>s(ae).formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("purchaseOtherInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):y("",!0),ve("injuryInsurance")?(c(),p(l,{key:18,modelValue:s(ae).formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":a[31]||(a[31]=e=>s(ae).formInfo.extInfo.injuryInsurance=e),label:ye("injuryInsurance","title"),name:`${e.prefix}_hasSocialInsurance`,required:Ve("injuryInsurance")},{input:v((()=>[V(o,{modelValue:s(ae).formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":a[30]||(a[30]=e=>s(ae).formInfo.extInfo.injuryInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("injuryInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):y("",!0),ve("insureArea")?(c(),p(m,{key:19,label:ye("insureArea","title"),name:"insureAreaCode","is-link":"","is-view":e.isView,required:Ve("insureArea"),"data-source":s(K),mapping:{label:"name",value:"code",children:"children"}},null,8,["label","is-view","required","data-source"])):y("",!0),ve("occupation")&&"insure"!==e.prefix?(c(),p(m,{key:20,modelValue:s(ae).formInfo.extInfo.occupationCodeList[0],"onUpdate:modelValue":a[32]||(a[32]=e=>s(ae).formInfo.extInfo.occupationCodeList[0]=e),field0:s(ae).formInfo.extInfo.occupationCodeList[0],"onUpdate:field0":a[33]||(a[33]=e=>s(ae).formInfo.extInfo.occupationCodeList[0]=e),field1:s(ae).formInfo.extInfo.occupationCodeList[1],"onUpdate:field1":a[34]||(a[34]=e=>s(ae).formInfo.extInfo.occupationCodeList[1]=e),field2:s(ae).formInfo.extInfo.occupationCodeList[2],"onUpdate:field2":a[35]||(a[35]=e=>s(ae).formInfo.extInfo.occupationCodeList[2]=e),label:ye("occupation","title"),name:`${e.prefix}_occupationCodeList`,"is-view":e.isView,required:Ve("occupation"),"data-source":s(J),mapping:{label:"value",value:"code",children:"children"},"is-link":""},null,8,["modelValue","field0","field1","field2","label","name","is-view","required","data-source"])):y("",!0),ve("personalAnnualIncome")?(c(),p(l,{key:21,modelValue:s(ae).formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":a[36]||(a[36]=e=>s(ae).formInfo.extInfo.personalAnnualIncome=e),label:ye("personalAnnualIncome","title"),name:`${e.prefix}_personalAnnualIncome`,required:Ve("personalAnnualIncome"),"is-view":e.isView,rules:[{validator:ke}]},{extra:v((()=>[Y])),_:1},8,["modelValue","label","name","required","is-view","rules"])):y("",!0),ve("familyAnnualIncome")?(c(),p(l,{key:22,modelValue:s(ae).formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":a[37]||(a[37]=e=>s(ae).formInfo.extInfo.familyAnnualIncome=e),label:ye("familyAnnualIncome","title"),name:`${e.prefix}_familyAnnualIncome`,"is-view":e.isView,rules:[{validator:ke}],required:Ve("familyAnnualIncome")},{extra:v((()=>[Z])),_:1},8,["modelValue","label","name","is-view","rules","required"])):y("",!0),ve("country")?(c(),p(i,{key:23,modelValue:s(ae).formInfo.extInfo.nationalityCode,"onUpdate:modelValue":a[38]||(a[38]=e=>s(ae).formInfo.extInfo.nationalityCode=e),label:ye("country","title"),name:`${e.prefix}_nationalityCode`,"data-source":ye("country","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:Ve("country"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):y("",!0),ve("hasUsCard")?(c(),p(l,{key:24,modelValue:s(ae).formInfo.extInfo.hasUsCard,"onUpdate:modelValue":a[40]||(a[40]=e=>s(ae).formInfo.extInfo.hasUsCard=e),label:ye("hasUsCard","title"),name:`${e.prefix}_hasUsCard`,required:Ve("hasUsCard")},{input:v((()=>[V(o,{modelValue:s(ae).formInfo.extInfo.hasUsCard,"onUpdate:modelValue":a[39]||(a[39]=e=>s(ae).formInfo.extInfo.hasUsCard=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("hasUsCard","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):y("",!0),ve("marritalStatus")?(c(),p(i,{key:25,modelValue:s(ae).formInfo.extInfo.marriageStatus,"onUpdate:modelValue":a[41]||(a[41]=e=>s(ae).formInfo.extInfo.marriageStatus=e),label:ye("marritalStatus","title"),name:`${e.prefix}_marriageStatus`,"data-source":ye("marritalStatus","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},"is-link":"","is-view":e.isView,required:Ve("marritalStatus")},null,8,["modelValue","label","name","data-source","is-view","required"])):y("",!0),ve("degree")?(c(),p(i,{key:26,modelValue:s(ae).formInfo.extInfo.educationDegree,"onUpdate:modelValue":a[42]||(a[42]=e=>s(ae).formInfo.extInfo.educationDegree=e),label:ye("degree","title"),name:`${e.prefix}_educationDegree`,"data-source":ye("degree","attributeValueList")||[],mapping:{label:"name",value:"code",children:"child"},required:Ve("degree"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):y("",!0),ve("mobile")?(c(),p(l,{key:27,ref_key:"phoneRef",ref:ee,modelValue:s(le),"onUpdate:modelValue":[a[43]||(a[43]=e=>w(le)?le.value=e:null),a[45]||(a[45]=e=>se(e,"mobile"))],label:ye("mobile","title"),name:`${e.prefix}_mobile`,maxlength:11,"is-view":e.isView,required:Ve("mobile"),"validate-type":s(oe)?void 0:[s(t).PHONE],onFocus:a[44]||(a[44]=e=>ce("mobile"))},null,8,["modelValue","label","name","is-view","required","validate-type"])):y("",!0),ve("verificationCode")?(c(),p(l,{key:28,modelValue:s(ae).formInfo.verificationCode,"onUpdate:modelValue":a[46]||(a[46]=e=>s(ae).formInfo.verificationCode=e),label:ye("verificationCode","title"),name:`${e.prefix}_verificationCode`,type:"digit",maxlength:6,"is-view":e.isView,required:Ve("verificationCode")},C({_:2},[e.isView?void 0:{name:"extra",fn:v((()=>[x("div",F,[V(f,{class:k(["sms-code",{"count-down":s(de)>0}]),size:"small",plain:"",type:"primary",onClick:Ie},{default:v((()=>[h(_(s(ue)),1)])),_:1},8,["class"])])])),key:"0"}]),1032,["modelValue","label","name","is-view","required"])):y("",!0),ve("isSmoke")?(c(),p(l,{key:29,modelValue:s(ae).formInfo.isSmoke,"onUpdate:modelValue":a[48]||(a[48]=e=>s(ae).formInfo.isSmoke=e),required:Ve("isSmoke"),label:ye("isSmoke","title"),name:`${e.prefix}_isSmoke`,"is-view":s(Q)},{input:v((()=>[V(o,{modelValue:s(ae).formInfo.isSmoke,"onUpdate:modelValue":a[47]||(a[47]=e=>s(ae).formInfo.isSmoke=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("isSmoke","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):y("",!0),ve("contactNo")?(c(),p(l,{key:30,modelValue:s(ae).formInfo.contactNo,"onUpdate:modelValue":a[49]||(a[49]=e=>s(ae).formInfo.contactNo=e),label:ye("contactNo","title"),name:`${e.prefix}_contactNo`,"is-view":e.isView,required:Ve("contactNo")},null,8,["modelValue","label","name","is-view","required"])):y("",!0),ve("email")?(c(),p(l,{key:31,modelValue:s(ae).formInfo.email,"onUpdate:modelValue":a[50]||(a[50]=e=>s(ae).formInfo.email=e),label:ye("email","title"),name:`${e.prefix}_email`,"is-view":e.isView,required:Ve("email"),"validate-type":[s(t).EMAIL]},null,8,["modelValue","label","name","is-view","required","validate-type"])):y("",!0),ve("homeAddress")?(c(),p(m,{key:32,modelValue:s(ae).formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":a[51]||(a[51]=e=>s(ae).formInfo.extInfo.familyAreaCode=e),field1:s(ae).formInfo.extInfo.familyProvinceCode,"onUpdate:field1":a[52]||(a[52]=e=>s(ae).formInfo.extInfo.familyProvinceCode=e),field2:s(ae).formInfo.extInfo.familyCityCode,"onUpdate:field2":a[53]||(a[53]=e=>s(ae).formInfo.extInfo.familyCityCode=e),field3:s(ae).formInfo.extInfo.familyAreaCode,"onUpdate:field3":a[54]||(a[54]=e=>s(ae).formInfo.extInfo.familyAreaCode=e),label:ye("homeAddress","title"),name:`${e.prefix}_familyProvinceCode`,"is-link":"","is-view":e.isView,required:Ve("homeAddress"),"data-source":s(K),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):y("",!0),ve("homeAddressDetail")?(c(),p(l,{key:33,modelValue:s(ae).formInfo.extInfo.familyAddress,"onUpdate:modelValue":a[55]||(a[55]=e=>s(ae).formInfo.extInfo.familyAddress=e),label:ye("homeAddressDetail","title"),name:`${e.prefix}_familyAddress`,"is-view":e.isView,maxlength:99,rules:[{validator:Te}],required:Ve("homeAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):y("",!0),ve("homePostalCode")?(c(),p(l,{key:34,modelValue:s(ae).formInfo.extInfo.familyZipCode,"onUpdate:modelValue":a[56]||(a[56]=e=>s(ae).formInfo.extInfo.familyZipCode=e),label:ye("homePostalCode","title"),name:`${e.prefix}_familyZipCode`,"is-view":e.isView,required:Ve("homePostalCode"),"validate-type":[s(t).ZIP_CODE]},null,8,["modelValue","label","name","is-view","required","validate-type"])):y("",!0),ve("workAddress")?(c(),p(m,{key:35,modelValue:s(ae).formInfo.extInfo.workAreaCode,"onUpdate:modelValue":a[57]||(a[57]=e=>s(ae).formInfo.extInfo.workAreaCode=e),field1:s(ae).formInfo.extInfo.workProvinceCode,"onUpdate:field1":a[58]||(a[58]=e=>s(ae).formInfo.extInfo.workProvinceCode=e),field2:s(ae).formInfo.extInfo.workCityCode,"onUpdate:field2":a[59]||(a[59]=e=>s(ae).formInfo.extInfo.workCityCode=e),field3:s(ae).formInfo.extInfo.workAreaCode,"onUpdate:field3":a[60]||(a[60]=e=>s(ae).formInfo.extInfo.workAreaCode=e),label:ye("workAddress","title"),name:`${e.prefix}_workProvinceCode`,"is-link":"","is-view":e.isView,required:Ve("workAddress"),"data-source":s(K),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):y("",!0),ve("workAddressDetail")?(c(),p(l,{key:36,modelValue:s(ae).formInfo.extInfo.workAddress,"onUpdate:modelValue":a[61]||(a[61]=e=>s(ae).formInfo.extInfo.workAddress=e),label:ye("workAddressDetail","title"),name:`${e.prefix}_workAddress`,"is-view":e.isView,rules:[{validator:Te}],required:Ve("workAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):y("",!0),ve("workPostalCode")?(c(),p(l,{key:37,modelValue:s(ae).formInfo.extInfo.workZipCode,"onUpdate:modelValue":a[62]||(a[62]=e=>s(ae).formInfo.extInfo.workZipCode=e),label:ye("workPostalCode","title"),required:Ve("workZipCode"),name:`${e.prefix}_workPostCode`,"is-view":e.isView,"validate-type":[s(t).ZIP_CODE]},null,8,["modelValue","label","required","name","is-view","validate-type"])):y("",!0),ve("companyName")?(c(),p(l,{key:38,modelValue:s(ae).formInfo.extInfo.workStation,"onUpdate:modelValue":a[63]||(a[63]=e=>s(ae).formInfo.extInfo.workStation=e),label:ye("companyName","title"),name:`${e.prefix}_workPostCode`,"is-view":e.isView,rules:[{validator:(...e)=>qe(20,...e)}],required:Ve("companyName")},null,8,["modelValue","label","name","is-view","rules","required"])):y("",!0),ve("workContent")?(c(),p(l,{key:39,modelValue:s(ae).formInfo.extInfo.workContent,"onUpdate:modelValue":a[64]||(a[64]=e=>s(ae).formInfo.extInfo.workContent=e),label:ye("workContent","title"),name:`${e.prefix}_workContent`,required:Ve("workContent"),"is-view":e.isView,rules:[{validator:(...e)=>qe(100,...e)}]},null,8,["modelValue","label","name","required","is-view","rules"])):y("",!0),ve("chineseTaxResident")?(c(),p(l,{key:40,modelValue:s(ae).formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":a[66]||(a[66]=e=>s(ae).formInfo.extInfo.chineseTaxResident=e),label:ye("chineseTaxResident","title"),name:`${e.prefix}_taxResident`,required:Ve("chineseTaxResident")},{input:v((()=>[V(o,{modelValue:s(ae).formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":a[65]||(a[65]=e=>s(ae).formInfo.extInfo.chineseTaxResident=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("chineseTaxResident","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):y("",!0),ve("taxResident")?(c(),p(i,{key:41,modelValue:s(ae).formInfo.taxResident,"onUpdate:modelValue":a[67]||(a[67]=e=>s(ae).formInfo.taxResident=e),"is-view":e.isView,label:ye("taxResident","title"),name:`${e.prefix}_benefitOrder`,"data-source":ye("taxResident","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:Ve("taxResident")},null,8,["modelValue","is-view","label","name","data-source","required"])):y("",!0),ve("partTimeJob")?(c(),p(l,{key:42,modelValue:s(ae).formInfo.extInfo.isPartTime,"onUpdate:modelValue":a[69]||(a[69]=e=>s(ae).formInfo.extInfo.isPartTime=e),label:ye("partTimeJob","title"),name:`${e.prefix}_isPartTime`,required:Ve("partTimeJob")},{input:v((()=>[V(o,{modelValue:s(ae).formInfo.extInfo.isPartTime,"onUpdate:modelValue":a[68]||(a[68]=e=>s(ae).formInfo.extInfo.isPartTime=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:ye("partTimeJob","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):y("",!0),ve("benefitOrder")?(c(),p(i,{key:43,modelValue:s(ae).formInfo.benefitOrder,"onUpdate:modelValue":a[70]||(a[70]=e=>s(ae).formInfo.benefitOrder=e),label:ye("benefitOrder","title"),name:`${e.prefix}_benefitOrder`,"is-view":e.isView,"data-source":ye("benefitOrder","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:Ve("benefitOrder")},null,8,["modelValue","label","name","is-view","data-source","required"])):y("",!0),ve("benefitRate")?(c(),p(l,{key:44,modelValue:s(ae).formInfo.benefitRate,"onUpdate:modelValue":a[71]||(a[71]=e=>s(ae).formInfo.benefitRate=e),required:Ve("benefitRate"),name:`${e.prefix}_benefitRate`,"is-view":e.isView,rules:[{validator:_e}],label:ye("benefitRate","title")},{extra:v((()=>[z])),_:1},8,["modelValue","required","name","is-view","rules","label"])):y("",!0),b(e.$slots,"default")])):y("",!0)}}});export{G as _};
