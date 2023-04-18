import{d as e,N as o,u as a,r as l,I as i,s as n,C as r,cd as t,v as d,ca as u,q as s,p as f,i as m,b as c,c as I,Y as p,w as v,e as V,Z as b,h as w,ad as y,f as x,g as h,aw as C,y as k,x as R,T as L,af as O,aX as U,aY as T,ci as _,cj as g,ck as E,cl as q,by as S,bC as A,B as N,a as $,t as D,a7 as H,Q as P,cc as j}from"./index-3300826d.js";import{R as M}from"./infoCollection-aa0e608b.js";import{c as B}from"./pdfh5-008ca364.js";import{v as Y}from"./validator-5a13dc82.js";import{u as F}from"./useDicData-bdf2d123.js";var z={exports:{}},Z=z.exports=function(e,o,a){e=e||{};var l=o.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function n(e,o,a,i){return l.fromToBase(e,o,a,i)}a.en.relativeTime=i,l.fromToBase=function(o,l,n,r,t){for(var d,u,s,f=n.$locale().relativeTime||i,m=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],c=m.length,I=0;I<c;I+=1){var p=m[I];p.d&&(d=r?a(o).diff(n,p.d,!0):n.diff(o,p.d,!0));var v=(e.rounding||Math.round)(Math.abs(d));if(s=d>0,v<=p.r||!p.r){v<=1&&I>0&&(p=m[I-1]);var V=f[p.l];t&&(v=t(""+v)),u="string"==typeof V?V.replace("%d",v):V(v,l,p.l,s);break}}if(l)return u;var b=s?f.future:f.past;return"function"==typeof b?b(u):b.replace("%s",u)},l.to=function(e,o){return n(e,o,this,!0)},l.from=function(e,o){return n(e,o,this)};var r=function(e){return e.$u?a.utc():a()};l.toNow=function(e){return this.to(r(this),e)},l.fromNow=function(e){return this.from(r(this),e)}};const G={key:0,class:"com-personal-wrapper"},J={class:"date-extra"},K=x("span",{class:"input-extra"},"万",-1),W=x("span",{class:"input-extra"},"万",-1),X={class:"button-extra"},Q=x("span",{class:"input-extra"},"%",-1),ee=e({__name:"PersonalInfo",props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]},isView:{type:Boolean,default:!1},prefix:{default:""},beneficiaryList:{default:()=>[]},sendSmsCode:{type:Function,default:(e,o)=>{}},needDesensitize:{type:Boolean,default:!1}},emits:["update:images"],setup(e,{emit:$}){const D=e;o();const{insurerCode:H=""}=a().query,P=F(`${H.toLocaleUpperCase()}_OCCUPATION`),j=F("NATIONAL_REGION_CODE"),B=l([]),z=l(!1),ee=l(),oe=l(),ae=l({formInfo:D.formInfo,birth:{min:new Date("1900-01-01"),max:new Date},certEndDate:{min:new Date("1900-01-01"),max:new Date("2099-12-31")},occupationalText:""}),le=l(!1),ie=i((()=>le.value?(ae.value.formInfo.mobile||"").replace(/^(.{3})(?:\d+)(.{4})$/,"$1****$2"):D.formInfo.mobile)),ne=l(!1),re=i((()=>ne.value?(ae.value.formInfo.certNo||"").replace(/^(.{6})(?:\d+)(.{2})$/,"$1**********$2"):D.formInfo.certNo));n.extend(Z);const te=l(2===D.formInfo.certEndType),de=l(18),ue=l(0),se=l("验证码"),fe=l(!1),me=i((()=>{const e={};return D.factorList.forEach((o=>{e[o.code]=o})),e})),ce=(e,o)=>{ae.value.formInfo[o]=e};i((()=>/^1(3|4|5|6|7|8|9)\d{9}$/.test(ae.value.formInfo.mobile)));const Ie=e=>{"mobile"===e&&(le.value=!1),"certNo"===e&&(ne.value=!1)},pe=async()=>{ue.value>0||D.sendSmsCode({mobile:ae.value.formInfo.mobile,type:D.prefix},(()=>{fe.value=!0,L({message:"短信发送成功，请查收"}),(()=>{if(ue.value>0)return;ue.value=60;const e=()=>{se.value=`${ue.value}s`,ue.value-=1};e();const o=setInterval((()=>{0===ue.value?(se.value="验证码",ue.value=0,clearInterval(o)):e()}),1e3)})()}))},ve=e=>{ae.value.formInfo.certNo=e.personIdCard,ae.value.formInfo.name=e.personName,ae.value.formInfo.certEndDate=n(e.validDateEnd,"YYYYMMDD").toDate()},Ve=e=>{var o;return me.value&&me.value[e]&&(null==(o=me.value[e])?void 0:o.isDisplay)===O.YES},be=e=>me.value&&me.value[e]&&me.value[e].isMustInput===O.YES,we=(e,o)=>{var a,l;return(null==(l=null==(a=me.value)?void 0:a[e])?void 0:l[o])||""},ye=i((()=>{var e;if(!Ve("certType"))return ae.value.formInfo.certType=+r.CERT,!1;const o=we("certType","attributeValueList")||[];return 1!==o.length||(null==(e=o[0])?void 0:e.code)!==r.CERT||(ae.value.formInfo.certType=+r.CERT,!1)})),xe=i((()=>{var e,o,a;return(null==(e=we("certType","attributeValueList"))?void 0:e.length)>1?"证件号码":"insure"===D.prefix&&(null==(o=ae.value.formInfo)?void 0:o.relationToHolder)===M.CHILD?"身份证号(户口簿)":(null==(a=we("certType","attributeValueList"))?void 0:a[0].code)===r.CERT?"身份证号":we("certType","title")})),he=(e,o)=>Y(e)?"":"请输入正确的姓名",Ce=i((()=>(de.value=18,[r.CERT,r.HOUSE_HOLD].includes(`${ae.value.formInfo.certType}`)?(z.value=!0,[t.ID_CARD]):`${ae.value.formInfo.certType}`===r.BIRTH?(z.value=!1,de.value=10,[t.BIRTH]):`${ae.value.formInfo.certType}`===r.PASSPORT?(z.value=!1,[t.PASSPORT]):`${ae.value.formInfo.certType}`===r.SOCIAL_CREDIT_CODE?(z.value=!1,[t.SOCIAL_CREDIT_CODE]):`${ae.value.formInfo.certType}`===r.OTHER?(z.value=!1,[t.OTHER]):(z.value=!0,[t.ID_CARD])))),ke=(e,o)=>be("attachment")?2===ae.value.formInfo.certEndType||ae.value.formInfo.certEndDate?"":"请选择有效期至":"",Re=(e,o)=>/^\d{1,10}(\.\d{1,2})?$/.test(e)?"":"年收入最多录入10位数字",Le=(e,o)=>/^[1-9]$|^[1-9][0-9]$|^100$/.test(e)?"":"收益比例只能填写1-100的正整数",Oe=(e,o)=>(console.log("value",e),e.length>=5&&e.length<=99?"":"最多99个字符最少5个字符"),Ue=(e,o,a)=>o.length>e?`最大不能超过${e}个字符`:"",Te=(e,o)=>{var a,l,i,t,d,u,s;if(!Ve("nationality"))return"";if("CHN"===(null==(l=null==(a=ae.value.formInfo)?void 0:a.extInfo)?void 0:l.nationalityCode)){if(![r.CERT,r.HOUSE_HOLD,r.BIRTH,r.MILITARY_CARD].includes(`${e}`))return"国籍为中国时，证件类型只允许选择身份证、户口本、出生证、军官证"}else if(["HKG","MAC"].includes(null==(t=null==(i=ae.value.formInfo)?void 0:i.extInfo)?void 0:t.nationalityCode)){if(![r.HK_MACAO_RESIDENCE_PERMIT,r.HONGKONG_MACAO].includes(`${e}`))return"国籍为中国香港、中国澳门时，证件类型只允许选择港澳通行证、港澳居民居住证"}else if("TWN"===(null==(u=null==(d=ae.value.formInfo)?void 0:d.extInfo)?void 0:u.nationalityCode)){if(![r.TAIWAN_RESIDENCE_PERMIT,r.TAIWAN_TRAVEL].includes(`${e}`))return"国籍为中国台湾时，证件类型只允许选择台湾通行证、台湾居民居住证"}else if(![r.PASSPORT,r.FOREIGN_PERMANENT].includes(`${e}`))return"国籍为非中国、港澳台时，证件类型只允许选择护照、外国人永久居留身份证";return n().year()-n(null==(s=ae.value.formInfo)?void 0:s.birthday).year()>2&&e===r.BIRTH?"年龄大于等于2周岁时，证件类型不能选择出生证":""},_e=e=>Array.isArray(e)&&2===e.length&&e[0]&&e[1]?"":"请上传身份证正反面照片";return d((()=>te.value),(e=>{e?(ae.value.formInfo.certEndType=2,ae.value.formInfo.certEndDate=""):ae.value.formInfo.certEndType=1}),{immediate:!0}),d((()=>ae.value.formInfo.mobile),(()=>{var e;ae.value.formInfo.mobile=null==(e=ae.value.formInfo.mobile)?void 0:e.replace(/[\u4e00-\u9fa5/\s+/]|[^0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),d([()=>ae.value.formInfo.certNo,()=>ae.value.formInfo.mobile],(()=>{var e,o;ae.value.formInfo.certNo=null==(e=ae.value.formInfo.certNo)?void 0:e.replace(/[\u4e00-\u9fa5/\s+/]/g,""),ae.value.formInfo.mobile=null==(o=ae.value.formInfo.mobile)?void 0:o.replace(/[\u4e00-\u9fa5/\s+/]|[^Xx0-9\u4E00-\u9FA5]/g,"")}),{deep:!0,immediate:!0}),d((()=>D.needDesensitize),((e=!1)=>{le.value=e,ne.value=e}),{immediate:!0}),d((()=>ae.value.formInfo.certType),(e=>{[r.CERT,r.HOUSE_HOLD].includes(e)?z.value=!0:z.value=!1}),{deep:!0,immediate:!0}),d([()=>ae.value.formInfo.certNo,()=>ae.value.formInfo.certType],(([e])=>{[r.CERT,r.HOUSE_HOLD].includes(`${ae.value.formInfo.certType}`)&&(u(e)?(ae.value.formInfo.gender=+s(e),ae.value.formInfo.birthday=n(new Date(f(e))).format("YYYY-MM-DD")):(ae.value.formInfo.gender=null,ae.value.formInfo.birthday=""))}),{deep:!0,immediate:!0}),d((()=>D.images),(e=>{B.value=e}),{immediate:!0}),d((()=>D.formInfo),(()=>{ae.value.formInfo=D.formInfo}),{deep:!0,immediate:!0}),d(B,(e=>{$("update:images",e)}),{deep:!0}),(o,a)=>{const l=U,i=T,n=_,r=g,d=E,u=q,s=S,f=A,L=N;return Object.keys(m(me)).length?(c(),I("div",G,[Ve("insuredBeneficiaryType")?(c(),p(i,{key:0,modelValue:m(ae).formInfo.insuredBeneficiaryType,"onUpdate:modelValue":a[1]||(a[1]=e=>m(ae).formInfo.insuredBeneficiaryType=e),label:we("insuredBeneficiaryType","title"),name:"insuredBeneficiaryType"},{input:v((()=>[V(l,{modelValue:m(ae).formInfo.insuredBeneficiaryType,"onUpdate:modelValue":a[0]||(a[0]=e=>m(ae).formInfo.insuredBeneficiaryType=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("insuredBeneficiaryType","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):b("",!0),Ve("insuredRelation")?(c(),p(i,{key:1,modelValue:m(ae).formInfo.insuredRelation,"onUpdate:modelValue":a[3]||(a[3]=e=>m(ae).formInfo.insuredRelation=e),label:we("insuredRelation","title"),name:"insuredRelation"},{input:v((()=>[V(l,{modelValue:m(ae).formInfo.insuredRelation,"onUpdate:modelValue":a[2]||(a[2]=e=>m(ae).formInfo.insuredRelation=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("insuredRelation","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label"])):b("",!0),Ve("name")?(c(),p(i,{key:2,modelValue:m(ae).formInfo.name,"onUpdate:modelValue":a[4]||(a[4]=e=>m(ae).formInfo.name=e),label:we("name","title"),name:`${e.prefix}_name`,"is-view":e.isView,required:be("name"),rules:[{validator:he}]},{"right-icon":v((()=>[w(o.$slots,"name")])),_:3},8,["modelValue","label","name","is-view","required","rules"])):b("",!0),Ve("sex")?(c(),p(i,{key:3,modelValue:m(ae).formInfo.gender,"onUpdate:modelValue":a[6]||(a[6]=e=>m(ae).formInfo.gender=e),required:be("sex"),label:we("sex","title"),name:`${e.prefix}_gender`,"is-view":m(z)},{input:v((()=>[V(l,{modelValue:m(ae).formInfo.gender,"onUpdate:modelValue":a[5]||(a[5]=e=>m(ae).formInfo.gender=e),disabled:m(z),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("sex","attributeValueList")||[]},null,8,["modelValue","disabled","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):b("",!0),m(ye)?(c(),p(n,{key:4,modelValue:m(ae).formInfo.certType,"onUpdate:modelValue":a[7]||(a[7]=e=>m(ae).formInfo.certType=e),label:we("certType","title"),name:`${e.prefix}_certType`,"data-source":we("certType","attributeValueList"),mapping:{label:"value",value:"code",children:"child"},required:be("certType"),rules:[{validator:Te}],"is-view":e.isView},null,8,["modelValue","label","name","data-source","required","rules","is-view"])):b("",!0),Ve("certImage")&&m(ae).formInfo.certType+""=="1"?(c(),p(i,{key:5,label:"身份证上传",block:"",required:be("certImage"),rules:[{validator:_e}],name:`${e.prefix}_idCard`},{input:v((()=>[V(r,{modelValue:m(B),"onUpdate:modelValue":a[8]||(a[8]=e=>y(B)?B.value=e:null),"is-view":e.isView,onOnOCR:ve},null,8,["modelValue","is-view"])])),_:1},8,["required","rules","name"])):b("",!0),Ve("certImage")&&m(ae).formInfo.certType&&m(ae).formInfo.certType+""!="1"?(c(),p(i,{key:6,label:we("certImage","title"),block:"",required:be("certImage")},{input:v((()=>[V(d,{modelValue:m(B),"onUpdate:modelValue":a[9]||(a[9]=e=>y(B)?B.value=e:null),"is-view":e.isView,"max-count":1},null,8,["modelValue","is-view"])])),_:1},8,["label","required"])):b("",!0),Ve("certNo")?(c(),p(i,{key:7,ref_key:"certNoRef",ref:ee,modelValue:m(re),"onUpdate:modelValue":[a[10]||(a[10]=e=>y(re)?re.value=e:null),a[12]||(a[12]=e=>ce(e,"certNo"))],label:m(xe),name:`${e.prefix}_certNo`,required:be("certNo"),maxlength:m(de),"is-view":e.isView,"validate-type":m(ne)?void 0:m(Ce),onFocus:a[11]||(a[11]=e=>Ie("certNo"))},null,8,["modelValue","label","name","required","maxlength","is-view","validate-type"])):b("",!0),Ve("birthDate")?(c(),p(u,{key:8,modelValue:m(ae).formInfo.birthday,"onUpdate:modelValue":a[13]||(a[13]=e=>m(ae).formInfo.birthday=e),label:we("birthDate","title"),name:`${e.prefix}_birthday`,min:m(ae).birth.min,max:m(ae).birth.max,type:"date","is-view":m(z)||e.isView,required:be("birthDate")},null,8,["modelValue","label","name","min","max","is-view","required"])):b("",!0),Ve("certExpiry")?(c(),p(u,{key:9,modelValue:m(ae).formInfo.certEndDate,"onUpdate:modelValue":a[15]||(a[15]=e=>m(ae).formInfo.certEndDate=e),label:we("certExpiry","title"),name:`${e.prefix}_certEndDate`,type:"date",min:m(ae).certEndDate.min,max:m(ae).certEndDate.max,"is-view":m(te)||e.isView,read:"",rules:[{validator:ke}]},{extra:v((()=>[x("div",J,[V(s,{modelValue:m(te),"onUpdate:modelValue":a[14]||(a[14]=e=>y(te)?te.value=e:null),"icon-size":16,disabled:e.isView},{default:v((()=>[h("长期")])),_:1},8,["modelValue","disabled"])])])),_:1},8,["modelValue","label","name","min","max","is-view","rules"])):b("",!0),Ve("age")?(c(),p(i,{key:10,modelValue:m(ae).formInfo.name,"onUpdate:modelValue":a[16]||(a[16]=e=>m(ae).formInfo.name=e),label:we("age","title"),name:`${e.prefix}_age`,"is-view":e.isView,required:be("age")},null,8,["modelValue","label","name","is-view","required"])):b("",!0),Ve("residence")?(c(),p(f,{key:11,modelValue:m(ae).formInfo.extInfo.provinceCode,"onUpdate:modelValue":a[17]||(a[17]=e=>m(ae).formInfo.extInfo.provinceCode=e),field1:m(ae).formInfo.extInfo.provinceCode,"onUpdate:field1":a[18]||(a[18]=e=>m(ae).formInfo.extInfo.provinceCode=e),field2:m(ae).formInfo.extInfo.cityCode,"onUpdate:field2":a[19]||(a[19]=e=>m(ae).formInfo.extInfo.cityCode=e),field3:m(ae).formInfo.extInfo.areaCode,"onUpdate:field3":a[20]||(a[20]=e=>m(ae).formInfo.extInfo.areaCode=e),label:we("residence","title"),name:`${e.prefix}_provinceCode`,"is-link":"","is-view":e.isView,required:be("residence"),"data-source":m(j),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):b("",!0),Ve("social")&&"insure"!==e.prefix?(c(),p(i,{key:12,modelValue:m(ae).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[22]||(a[22]=e=>m(ae).formInfo.extInfo.hasSocialInsurance=e),label:we("social","title"),name:`${e.prefix}_hasSocialInsurance`,required:be("social")},{input:v((()=>[V(l,{modelValue:m(ae).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[21]||(a[21]=e=>m(ae).formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("social","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):b("",!0),Ve("height")?(c(),p(i,{key:13,modelValue:m(ae).formInfo.name,"onUpdate:modelValue":a[23]||(a[23]=e=>m(ae).formInfo.name=e),label:we("height","title"),"is-view":e.isView,name:`${e.prefix}_height`,required:be("height")},null,8,["modelValue","label","is-view","name","required"])):b("",!0),Ve("weight")?(c(),p(i,{key:14,modelValue:m(ae).formInfo.name,"onUpdate:modelValue":a[24]||(a[24]=e=>m(ae).formInfo.name=e),label:we("weight","title"),name:`${e.prefix}_weight`,"is-view":e.isView,required:be("weight")},null,8,["modelValue","label","name","is-view","required"])):b("",!0),Ve("BMI")?(c(),p(i,{key:15,modelValue:m(ae).formInfo.name,"onUpdate:modelValue":a[25]||(a[25]=e=>m(ae).formInfo.name=e),label:we("BMI","title"),name:`${e.prefix}_BMI`,"is-view":e.isView,required:be("BMI")},null,8,["modelValue","label","name","is-view","required"])):b("",!0),Ve("insuredRiskManagementLevel")?(c(),p(i,{key:16,modelValue:m(ae).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[27]||(a[27]=e=>m(ae).formInfo.extInfo.hasSocialInsurance=e),label:we("insuredRiskManagementLevel","title"),name:`${e.prefix}_hasSocialInsurance`,required:be("insuredRiskManagementLevel")},{input:v((()=>[V(l,{modelValue:m(ae).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[26]||(a[26]=e=>m(ae).formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("insuredRiskManagementLevel","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):b("",!0),Ve("purchaseOtherInsurance")?(c(),p(i,{key:17,modelValue:m(ae).formInfo.extInfo.purchaseOtherInsurance,"onUpdate:modelValue":a[29]||(a[29]=e=>m(ae).formInfo.extInfo.purchaseOtherInsurance=e),label:we("purchaseOtherInsurance","title"),name:`${e.prefix}_purchaseOtherInsurance`,required:be("purchaseOtherInsurance")},{input:v((()=>[V(l,{modelValue:m(ae).formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":a[28]||(a[28]=e=>m(ae).formInfo.extInfo.hasSocialInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("purchaseOtherInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):b("",!0),Ve("injuryInsurance")?(c(),p(i,{key:18,modelValue:m(ae).formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":a[31]||(a[31]=e=>m(ae).formInfo.extInfo.injuryInsurance=e),label:we("injuryInsurance","title"),name:`${e.prefix}_hasSocialInsurance`,required:be("injuryInsurance")},{input:v((()=>[V(l,{modelValue:m(ae).formInfo.extInfo.injuryInsurance,"onUpdate:modelValue":a[30]||(a[30]=e=>m(ae).formInfo.extInfo.injuryInsurance=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("injuryInsurance","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):b("",!0),Ve("insureArea")?(c(),p(f,{key:19,label:we("insureArea","title"),name:"insureAreaCode","is-link":"","is-view":e.isView,required:be("insureArea"),"data-source":m(j),mapping:{label:"name",value:"code",children:"children"}},null,8,["label","is-view","required","data-source"])):b("",!0),Ve("occupation")&&"insure"!==e.prefix?(c(),p(f,{key:20,modelValue:m(ae).formInfo.extInfo.occupationCodeList[0],"onUpdate:modelValue":a[32]||(a[32]=e=>m(ae).formInfo.extInfo.occupationCodeList[0]=e),field0:m(ae).formInfo.extInfo.occupationCodeList[0],"onUpdate:field0":a[33]||(a[33]=e=>m(ae).formInfo.extInfo.occupationCodeList[0]=e),field1:m(ae).formInfo.extInfo.occupationCodeList[1],"onUpdate:field1":a[34]||(a[34]=e=>m(ae).formInfo.extInfo.occupationCodeList[1]=e),field2:m(ae).formInfo.extInfo.occupationCodeList[2],"onUpdate:field2":a[35]||(a[35]=e=>m(ae).formInfo.extInfo.occupationCodeList[2]=e),label:we("occupation","title"),name:`${e.prefix}_occupationCodeList`,"is-view":e.isView,required:be("occupation"),"data-source":m(P),mapping:{label:"value",value:"code",children:"children"},"is-link":""},null,8,["modelValue","field0","field1","field2","label","name","is-view","required","data-source"])):b("",!0),Ve("personalAnnualIncome")?(c(),p(i,{key:21,modelValue:m(ae).formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":a[36]||(a[36]=e=>m(ae).formInfo.extInfo.personalAnnualIncome=e),label:we("personalAnnualIncome","title"),name:`${e.prefix}_personalAnnualIncome`,required:be("personalAnnualIncome"),"is-view":e.isView,rules:[{validator:Re}]},{extra:v((()=>[K])),_:1},8,["modelValue","label","name","required","is-view","rules"])):b("",!0),Ve("familyAnnualIncome")?(c(),p(i,{key:22,modelValue:m(ae).formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":a[37]||(a[37]=e=>m(ae).formInfo.extInfo.familyAnnualIncome=e),label:we("familyAnnualIncome","title"),name:`${e.prefix}_familyAnnualIncome`,"is-view":e.isView,rules:[{validator:Re}],required:be("familyAnnualIncome")},{extra:v((()=>[W])),_:1},8,["modelValue","label","name","is-view","rules","required"])):b("",!0),Ve("country")?(c(),p(n,{key:23,modelValue:m(ae).formInfo.extInfo.nationalityCode,"onUpdate:modelValue":a[38]||(a[38]=e=>m(ae).formInfo.extInfo.nationalityCode=e),label:we("country","title"),name:`${e.prefix}_nationalityCode`,"data-source":we("country","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:be("country"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):b("",!0),Ve("hasUsCard")?(c(),p(i,{key:24,modelValue:m(ae).formInfo.extInfo.hasUsCard,"onUpdate:modelValue":a[40]||(a[40]=e=>m(ae).formInfo.extInfo.hasUsCard=e),label:we("hasUsCard","title"),name:`${e.prefix}_hasUsCard`,required:be("hasUsCard")},{input:v((()=>[V(l,{modelValue:m(ae).formInfo.extInfo.hasUsCard,"onUpdate:modelValue":a[39]||(a[39]=e=>m(ae).formInfo.extInfo.hasUsCard=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("hasUsCard","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):b("",!0),Ve("marritalStatus")?(c(),p(n,{key:25,modelValue:m(ae).formInfo.extInfo.marriageStatus,"onUpdate:modelValue":a[41]||(a[41]=e=>m(ae).formInfo.extInfo.marriageStatus=e),label:we("marritalStatus","title"),name:`${e.prefix}_marriageStatus`,"data-source":we("marritalStatus","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},"is-link":"","is-view":e.isView,required:be("marritalStatus")},null,8,["modelValue","label","name","data-source","is-view","required"])):b("",!0),Ve("degree")?(c(),p(n,{key:26,modelValue:m(ae).formInfo.extInfo.educationDegree,"onUpdate:modelValue":a[42]||(a[42]=e=>m(ae).formInfo.extInfo.educationDegree=e),label:we("degree","title"),name:`${e.prefix}_educationDegree`,"data-source":we("degree","attributeValueList")||[],mapping:{label:"name",value:"code",children:"child"},required:be("degree"),"is-link":"","is-view":e.isView},null,8,["modelValue","label","name","data-source","required","is-view"])):b("",!0),Ve("mobile")?(c(),p(i,{key:27,ref_key:"phoneRef",ref:oe,modelValue:m(ie),"onUpdate:modelValue":[a[43]||(a[43]=e=>y(ie)?ie.value=e:null),a[45]||(a[45]=e=>ce(e,"mobile"))],label:we("mobile","title"),name:`${e.prefix}_mobile`,maxlength:11,"is-view":e.isView,required:be("mobile"),"validate-type":m(le)?void 0:[m(t).PHONE],onFocus:a[44]||(a[44]=e=>Ie("mobile"))},null,8,["modelValue","label","name","is-view","required","validate-type"])):b("",!0),Ve("verificationCode")?(c(),p(i,{key:28,modelValue:m(ae).formInfo.verificationCode,"onUpdate:modelValue":a[46]||(a[46]=e=>m(ae).formInfo.verificationCode=e),label:we("verificationCode","title"),name:`${e.prefix}_verificationCode`,type:"digit",maxlength:6,"is-view":e.isView,required:be("verificationCode")},C({_:2},[e.isView?void 0:{name:"extra",fn:v((()=>[x("div",X,[V(L,{class:k(["sms-code",{"count-down":m(ue)>0}]),size:"small",plain:"",type:"primary",onClick:pe},{default:v((()=>[h(R(m(se)),1)])),_:1},8,["class"])])])),key:"0"}]),1032,["modelValue","label","name","is-view","required"])):b("",!0),Ve("isSmoke")?(c(),p(i,{key:29,modelValue:m(ae).formInfo.isSmoke,"onUpdate:modelValue":a[48]||(a[48]=e=>m(ae).formInfo.isSmoke=e),required:be("isSmoke"),label:we("isSmoke","title"),name:`${e.prefix}_isSmoke`,"is-view":m(z)},{input:v((()=>[V(l,{modelValue:m(ae).formInfo.isSmoke,"onUpdate:modelValue":a[47]||(a[47]=e=>m(ae).formInfo.isSmoke=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("isSmoke","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required","label","name","is-view"])):b("",!0),Ve("contactNo")?(c(),p(i,{key:30,modelValue:m(ae).formInfo.contactNo,"onUpdate:modelValue":a[49]||(a[49]=e=>m(ae).formInfo.contactNo=e),label:we("contactNo","title"),name:`${e.prefix}_contactNo`,"is-view":e.isView,required:be("contactNo")},null,8,["modelValue","label","name","is-view","required"])):b("",!0),Ve("email")?(c(),p(i,{key:31,modelValue:m(ae).formInfo.email,"onUpdate:modelValue":a[50]||(a[50]=e=>m(ae).formInfo.email=e),label:we("email","title"),name:`${e.prefix}_email`,"is-view":e.isView,required:be("email"),"validate-type":[m(t).EMAIL]},null,8,["modelValue","label","name","is-view","required","validate-type"])):b("",!0),Ve("homeAddress")?(c(),p(f,{key:32,modelValue:m(ae).formInfo.extInfo.familyAreaCode,"onUpdate:modelValue":a[51]||(a[51]=e=>m(ae).formInfo.extInfo.familyAreaCode=e),field1:m(ae).formInfo.extInfo.familyProvinceCode,"onUpdate:field1":a[52]||(a[52]=e=>m(ae).formInfo.extInfo.familyProvinceCode=e),field2:m(ae).formInfo.extInfo.familyCityCode,"onUpdate:field2":a[53]||(a[53]=e=>m(ae).formInfo.extInfo.familyCityCode=e),field3:m(ae).formInfo.extInfo.familyAreaCode,"onUpdate:field3":a[54]||(a[54]=e=>m(ae).formInfo.extInfo.familyAreaCode=e),label:we("homeAddress","title"),name:`${e.prefix}_familyProvinceCode`,"is-link":"","is-view":e.isView,required:be("homeAddress"),"data-source":m(j),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):b("",!0),Ve("homeAddressDetail")?(c(),p(i,{key:33,modelValue:m(ae).formInfo.extInfo.familyAddress,"onUpdate:modelValue":a[55]||(a[55]=e=>m(ae).formInfo.extInfo.familyAddress=e),label:we("homeAddressDetail","title"),name:`${e.prefix}_familyAddress`,"is-view":e.isView,maxlength:99,rules:[{validator:Oe}],required:be("homeAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):b("",!0),Ve("homePostalCode")?(c(),p(i,{key:34,modelValue:m(ae).formInfo.extInfo.familyZipCode,"onUpdate:modelValue":a[56]||(a[56]=e=>m(ae).formInfo.extInfo.familyZipCode=e),label:we("homePostalCode","title"),name:`${e.prefix}_familyZipCode`,"is-view":e.isView,required:be("homePostalCode"),"validate-type":[m(t).ZIP_CODE]},null,8,["modelValue","label","name","is-view","required","validate-type"])):b("",!0),Ve("workAddress")?(c(),p(f,{key:35,modelValue:m(ae).formInfo.extInfo.workAreaCode,"onUpdate:modelValue":a[57]||(a[57]=e=>m(ae).formInfo.extInfo.workAreaCode=e),field1:m(ae).formInfo.extInfo.workProvinceCode,"onUpdate:field1":a[58]||(a[58]=e=>m(ae).formInfo.extInfo.workProvinceCode=e),field2:m(ae).formInfo.extInfo.workCityCode,"onUpdate:field2":a[59]||(a[59]=e=>m(ae).formInfo.extInfo.workCityCode=e),field3:m(ae).formInfo.extInfo.workAreaCode,"onUpdate:field3":a[60]||(a[60]=e=>m(ae).formInfo.extInfo.workAreaCode=e),label:we("workAddress","title"),name:`${e.prefix}_workProvinceCode`,"is-link":"","is-view":e.isView,required:be("workAddress"),"data-source":m(j),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","label","name","is-view","required","data-source"])):b("",!0),Ve("workAddressDetail")?(c(),p(i,{key:36,modelValue:m(ae).formInfo.extInfo.workAddress,"onUpdate:modelValue":a[61]||(a[61]=e=>m(ae).formInfo.extInfo.workAddress=e),label:we("workAddressDetail","title"),name:`${e.prefix}_workAddress`,"is-view":e.isView,rules:[{validator:Oe}],required:be("workAddressDetail")},null,8,["modelValue","label","name","is-view","rules","required"])):b("",!0),Ve("workPostalCode")?(c(),p(i,{key:37,modelValue:m(ae).formInfo.extInfo.workZipCode,"onUpdate:modelValue":a[62]||(a[62]=e=>m(ae).formInfo.extInfo.workZipCode=e),label:we("workPostalCode","title"),required:be("workZipCode"),name:`${e.prefix}_workPostCode`,"is-view":e.isView,"validate-type":[m(t).ZIP_CODE]},null,8,["modelValue","label","required","name","is-view","validate-type"])):b("",!0),Ve("companyName")?(c(),p(i,{key:38,modelValue:m(ae).formInfo.extInfo.workStation,"onUpdate:modelValue":a[63]||(a[63]=e=>m(ae).formInfo.extInfo.workStation=e),label:we("companyName","title"),name:`${e.prefix}_workPostCode`,"is-view":e.isView,rules:[{validator:(...e)=>Ue(20,...e)}],required:be("companyName")},null,8,["modelValue","label","name","is-view","rules","required"])):b("",!0),Ve("workContent")?(c(),p(i,{key:39,modelValue:m(ae).formInfo.extInfo.workContent,"onUpdate:modelValue":a[64]||(a[64]=e=>m(ae).formInfo.extInfo.workContent=e),label:we("workContent","title"),name:`${e.prefix}_workContent`,required:be("workContent"),"is-view":e.isView,rules:[{validator:(...e)=>Ue(100,...e)}]},null,8,["modelValue","label","name","required","is-view","rules"])):b("",!0),Ve("chineseTaxResident")?(c(),p(i,{key:40,modelValue:m(ae).formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":a[66]||(a[66]=e=>m(ae).formInfo.extInfo.chineseTaxResident=e),label:we("chineseTaxResident","title"),name:`${e.prefix}_taxResident`,required:be("chineseTaxResident")},{input:v((()=>[V(l,{modelValue:m(ae).formInfo.extInfo.chineseTaxResident,"onUpdate:modelValue":a[65]||(a[65]=e=>m(ae).formInfo.extInfo.chineseTaxResident=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("chineseTaxResident","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):b("",!0),Ve("taxResident")?(c(),p(n,{key:41,modelValue:m(ae).formInfo.taxResident,"onUpdate:modelValue":a[67]||(a[67]=e=>m(ae).formInfo.taxResident=e),"is-view":e.isView,label:we("taxResident","title"),name:`${e.prefix}_benefitOrder`,"data-source":we("taxResident","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:be("taxResident")},null,8,["modelValue","is-view","label","name","data-source","required"])):b("",!0),Ve("partTimeJob")?(c(),p(i,{key:42,modelValue:m(ae).formInfo.extInfo.isPartTime,"onUpdate:modelValue":a[69]||(a[69]=e=>m(ae).formInfo.extInfo.isPartTime=e),label:we("partTimeJob","title"),name:`${e.prefix}_isPartTime`,required:be("partTimeJob")},{input:v((()=>[V(l,{modelValue:m(ae).formInfo.extInfo.isPartTime,"onUpdate:modelValue":a[68]||(a[68]=e=>m(ae).formInfo.extInfo.isPartTime=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:we("partTimeJob","attributeValueList")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","label","name","required"])):b("",!0),Ve("benefitOrder")?(c(),p(n,{key:43,modelValue:m(ae).formInfo.benefitOrder,"onUpdate:modelValue":a[70]||(a[70]=e=>m(ae).formInfo.benefitOrder=e),label:we("benefitOrder","title"),name:`${e.prefix}_benefitOrder`,"is-view":e.isView,"data-source":we("benefitOrder","attributeValueList")||[],mapping:{label:"value",value:"code",children:"child"},required:be("benefitOrder")},null,8,["modelValue","label","name","is-view","data-source","required"])):b("",!0),Ve("benefitRate")?(c(),p(i,{key:44,modelValue:m(ae).formInfo.benefitRate,"onUpdate:modelValue":a[71]||(a[71]=e=>m(ae).formInfo.benefitRate=e),required:be("benefitRate"),name:`${e.prefix}_benefitRate`,"is-view":e.isView,rules:[{validator:Le}],label:we("benefitRate","title")},{extra:v((()=>[Q])),_:1},8,["modelValue","required","name","is-view","rules","label"])):b("",!0),w(o.$slots,"default")])):b("",!0)}}});const oe={class:"page-info-wrapper"},ae=e({name:"insureForm"}),le=e({...ae,props:{factorObject:null,formInfo:{default:()=>({})},isView:{type:Boolean,default:!1},sendSmsCode:{type:Function,default:(e,o)=>{}},titleCollection:{default:()=>({})},inputAlign:{default:"left"},needDesensitize:{type:Boolean,default:!1}},setup(e,{expose:o}){const n=e,{insurerCode:r=""}=a().query;$(),a();const t=F(`${r.toLocaleUpperCase()}_OCCUPATION`),u=l({}),s=l({extInfo:{},tenantOrderHolder:{extInfo:{occupationCodeList:[]}},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{occupationCodeList:[]},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{occupationCodeList:[]}}]}],tenantOrderSubjectList:[{extInfo:{subjectRelatedFirm:"",subjectRelatedUserId:""},subjectName:"",subjectObjectType:"HOLDER",subjectType:"GENERAL",subjectNo:""}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0}}),f=l(null),x=l([]),h=l([]);l([]),l([]);l([]);D({beneficiaryId:0,nextPage:"",currentAddress:null,isLoading:!0});const C=i((()=>{var e,o;const a={INSURER:{},HOLDER:{}};return((null==(e=u.value)?void 0:e.INSURER)||[]).forEach((e=>{a.INSURER[e.code]=e})),((null==(o=u.value)?void 0:o.HOLDER)||[]).forEach((e=>{a.HOLDER[e.code]=e})),a})),k=(e,o)=>{var a,l,i;return(null==(i=null==(l=null==(a=C.value)?void 0:a[o])?void 0:l[e])?void 0:i.isDisplay)===O.YES},R=(e,o)=>{var a,l;return(null==(l=null==(a=C.value)?void 0:a[o])?void 0:l[e].isMustInput)===O.YES},L=(e,o,a)=>{var l,i,n;return(null==(n=null==(i=null==(l=C.value)?void 0:l[a])?void 0:i[e])?void 0:n[o])||""},_=(e,o)=>{const a=e;return Object.keys(a).forEach((e=>{o.includes(e)||(a[e]="")})),a};return o({validateForm:e=>new Promise(((o,a)=>{var l;null==(l=f.value)||l.validate(e).then((()=>{o(s.value)}),(()=>{a()}))}))}),d((()=>n.factorObject),(()=>{const e={BENEFICIARY:n.factorObject[3],INSURER:n.factorObject[2],HOLDER:n.factorObject[1]};u.value=e}),{immediate:!0,deep:!0}),d([()=>s.value.tenantOrderInsuredList[0].relationToHolder,()=>s.value.tenantOrderHolder],(([e],[o])=>{var a,l,i,r;`${s.value.tenantOrderInsuredList[0].relationToHolder}`===M.SELF?(Object.assign(s.value.tenantOrderInsuredList[0],{..._(null==(l=null==(a=s.value)?void 0:a.tenantOrderInsuredList)?void 0:l[0],["extInfo","relationToHolder","tenantOrderBeneficiaryList","tenantOrderProductList"]),extInfo:{occupationCodeList:[]}}),Object.assign(s.value.tenantOrderInsuredList[0],s.value.tenantOrderHolder,{id:s.value.tenantOrderInsuredList[0].id,extInfo:{...s.value.tenantOrderHolder.extInfo,insureProvinceCode:s.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,insureCityCode:s.value.tenantOrderInsuredList[0].extInfo.insureCityCode,insureAreaCode:s.value.tenantOrderInsuredList[0].extInfo.insureAreaCode}})):e===o||n.isView||Object.assign(s.value.tenantOrderInsuredList[0],{..._(null==(r=null==(i=s.value)?void 0:i.tenantOrderInsuredList)?void 0:r[0],["extInfo","relationToHolder","tenantOrderBeneficiaryList","tenantOrderProductList"]),extInfo:{occupationCodeList:[]}})}),{deep:!0}),d((()=>n.formInfo),(()=>{Object.keys(n.formInfo).length&&(s.value=n.formInfo)}),{deep:!0,immediate:!0}),(o,a)=>{const l=T,i=H,n=U,r=A,d=j;return c(),I("div",oe,[V(d,{ref_key:"formRef",ref:f,"show-error":"","show-error-message":!1,"input-align":e.inputAlign},{default:v((()=>{var d,f,I,C;return[(null==(d=m(u).HOLDER)?void 0:d.length)?(c(),p(i,{key:0,"show-line":!1,"show-divider":!1,title:null==(f=e.titleCollection)?void 0:f.HOLDER},{default:v((()=>[V(ee,{images:m(x),"onUpdate:images":a[1]||(a[1]=e=>y(x)?x.value=e:null),"form-info":m(s).tenantOrderHolder,"factor-list":m(u).HOLDER,prefix:"holder","is-view":e.isView,"need-desensitize":e.needDesensitize,"send-sms-code":e.sendSmsCode},{name:v((()=>[w(o.$slots,"holderName")])),default:v((()=>{var o,i;return[k("gasNumberCollection","HOLDER")&&(null==(i=null==(o=m(s).tenantOrderSubjectList)?void 0:o[0])?void 0:i.extInfo)?(c(),p(l,{key:0,modelValue:m(s).tenantOrderSubjectList[0].subjectNo,"onUpdate:modelValue":a[0]||(a[0]=e=>m(s).tenantOrderSubjectList[0].subjectNo=e),label:L("gasNumberCollection","title","HOLDER"),name:"subjectNo",required:R("gasNumberCollection","HOLDER"),"is-view":e.isView,maxlength:100},null,8,["modelValue","label","required","is-view"])):b("",!0)]})),_:3},8,["images","form-info","factor-list","is-view","need-desensitize","send-sms-code"])])),_:3},8,["title"])):b("",!0),(null==(I=m(u).INSURER)?void 0:I.length)?(c(),p(i,{key:1,"show-line":!1,"show-divider":!1,title:null==(C=e.titleCollection)?void 0:C.INSURER},{default:v((()=>[k("relationToHolder","INSURER")?(c(),p(l,{key:0,modelValue:m(s).tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":a[3]||(a[3]=e=>m(s).tenantOrderInsuredList[0].relationToHolder=e),class:"relation-holder",name:"insure_relationToHolder",required:R("relationToHolder","INSURER"),label:L("relationToHolder","title","INSURER")},{input:v((()=>[V(n,{modelValue:m(s).tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":a[2]||(a[2]=e=>m(s).tenantOrderInsuredList[0].relationToHolder=e),"is-view":e.isView,prop:{label:"value",value:"code"},options:L("relationToHolder","attributeValueList","INSURER")||[]},null,8,["modelValue","is-view","options"])])),_:1},8,["modelValue","required","label"])):b("",!0),e.isView||1!=+m(s).tenantOrderInsuredList[0].relationToHolder?(c(),p(ee,{key:1,images:m(h),"onUpdate:images":a[4]||(a[4]=e=>y(h)?h.value=e:null),"form-info":m(s).tenantOrderInsuredList[0],"factor-list":m(u).INSURER||[],prefix:"insure","need-desensitize":e.needDesensitize,"send-sms-code":e.sendSmsCode,"is-view":e.isView},{name:v((()=>[w(o.$slots,"insurerName")])),_:3},8,["images","form-info","factor-list","need-desensitize","send-sms-code","is-view"])):b("",!0),k("social","INSURER")?(c(),p(l,{key:2,modelValue:m(s).tenantOrderInsuredList[0].extInfo.hasSocialInsurance,"onUpdate:modelValue":a[6]||(a[6]=e=>m(s).tenantOrderInsuredList[0].extInfo.hasSocialInsurance=e),label:L("social","title","INSURER"),name:"insure_hasSocialInsurance",required:R("social","INSURER")},{input:v((()=>[V(n,{modelValue:m(s).tenantOrderInsuredList[0].extInfo.hasSocialInsurance,"onUpdate:modelValue":a[5]||(a[5]=e=>m(s).tenantOrderInsuredList[0].extInfo.hasSocialInsurance=e),disabled:e.isView,prop:{label:"value",value:"code"},options:L("social","attributeValueList","INSURER")||[]},null,8,["modelValue","disabled","options"])])),_:1},8,["modelValue","label","required"])):b("",!0),k("occupation","INSURER")?(c(),p(r,{key:3,modelValue:m(s).tenantOrderInsuredList[0].extInfo.occupationCodeList[0],"onUpdate:modelValue":a[7]||(a[7]=e=>m(s).tenantOrderInsuredList[0].extInfo.occupationCodeList[0]=e),field0:m(s).tenantOrderInsuredList[0].extInfo.occupationCodeList[0],"onUpdate:field0":a[8]||(a[8]=e=>m(s).tenantOrderInsuredList[0].extInfo.occupationCodeList[0]=e),field1:m(s).tenantOrderInsuredList[0].extInfo.occupationCodeList[1],"onUpdate:field1":a[9]||(a[9]=e=>m(s).tenantOrderInsuredList[0].extInfo.occupationCodeList[1]=e),field2:m(s).tenantOrderInsuredList[0].extInfo.occupationCodeList[2],"onUpdate:field2":a[10]||(a[10]=e=>m(s).tenantOrderInsuredList[0].extInfo.occupationCodeList[2]=e),label:L("occupation","title","INSURER"),name:"insure_occupationCodeList","is-view":e.isView,required:R("occupation","INSURER"),"data-source":m(t),mapping:{label:"value",value:"code",children:"children"},"is-link":""},null,8,["modelValue","field0","field1","field2","label","is-view","required","data-source"])):b("",!0)])),_:3},8,["title"])):b("",!0),b("",!0)]})),_:3},8,["input-align"])])}}});export{le as _};
