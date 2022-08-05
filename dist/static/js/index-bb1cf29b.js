import{o as q,H,I as h,J as X,K as w,_ as Q,t as z}from"./index-b08543a5.js";import{u as E}from"./useDicData-2b871bcf.js";import{g as S,C as x,x as Y,r as I,h as a,m as R,z as u,j as n,k as V,n as v,s as t,a5 as J,d as L,X as P,y as D,E as K,I as N,F as W,B as _}from"./vendor-d47732e4.js";const ce=[{label:"\u672C\u4EBA",value:"1"},{label:"\u914D\u5076",value:"2"},{label:"\u5B50\u5973",value:"3"},{label:"\u7236\u6BCD",value:"4"}],Ee=[{label:"\u6CD5\u4EBA",value:"1"},{label:"\u6307\u5B9A",value:"2"}],ee=[{label:"\u672C\u4EBA",value:"1"},{label:"\u914D\u5076",value:"2"},{label:"\u5B50\u5973",value:"3"},{label:"\u7236\u6BCD",value:"4"},{label:"\u7956\u7236\u6BCD",value:"5"},{label:"\u517B\u7236\u6BCD",value:"6"},{label:"\u96C7\u4F63",value:"7"},{label:"\u5B59\u5B50\u5973",value:"8"},{label:"\u76D1\u62A4\u4EBA",value:"9"},{label:"\u5176\u4ED6",value:"10"}],oe=[{label:"\u4EC5\u4E3A\u4E2D\u56FD\u7A0E\u6536\u5C45\u6C11",value:"1"},{label:"\u4EC5\u4E3A\u975E\u4E2D\u56FD\u7A0E\u6536\u5C45\u6C11",value:"2"},{label:"\u65E2\u662F\u4E2D\u56FD\u7A0E\u6536\u5C45\u6C11\u53C8\u662F\u5176\u4ED6\u56FD\u5BB6\uFF08\u5730\u533A\uFF09\u7A0E\u6536\u5C45\u6C11",value:"3"}],le=[{label:"\u7B2C\u4E00\u987A\u4F4D",value:"1"},{label:"\u7B2C\u4E8C\u987A\u4F4D",value:"2"},{label:"\u7B2C\u4E09\u987A\u4F4D",value:"3"},{label:"\u5176\u4ED6",value:"4"}],ue={class:"com-beneficiary-wrapper"},ye=S({props:{formInfo:{default:()=>({})},factorList:null},emits:["update:images"],setup(A,{emit:T}){const b=A,r=x({formInfo:b.formInfo}),F=E("CERT_TYPE");E("HENGQIN_OCCUPATION"),E("MARRIAGE_STATUS"),E("DEGREE");const U=E("NATIONALITY");E("NATIONAL_REGION_CODE");const p=Y(()=>{const y={};return b.factorList.forEach(d=>{(y[d.code]=y[d.code]||[]).push(d)}),y});return(y,d)=>{const k=I("ProRadioButton"),c=I("ProField"),i=I("ProPicker"),C=I("ProDatePicker");return a(),R("div",ue,[u(p).relationToInsured?(a(),n(c,{key:0,modelValue:r.value.formInfo.relationToInsured,"onUpdate:modelValue":d[1]||(d[1]=e=>r.value.formInfo.relationToInsured=e),name:"relationToInsured",required:"",label:"\u662F\u88AB\u4FDD\u4EBA\u7684"},{input:V(()=>[v(k,{modelValue:r.value.formInfo.relationToInsured,"onUpdate:modelValue":d[0]||(d[0]=e=>r.value.formInfo.relationToInsured=e),options:u(ee)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):t("",!0),u(p).certType?(a(),n(i,{key:1,modelValue:r.value.formInfo.certType,"onUpdate:modelValue":d[2]||(d[2]=e=>r.value.formInfo.certType=e),label:"\u8BC1\u4EF6\u7C7B\u578B",name:"certType",readonly:"","data-source":u(F),mapping:{label:"name",value:"code",children:"child"},required:""},null,8,["modelValue","data-source"])):t("",!0),u(p).certNo?(a(),n(c,{key:2,modelValue:r.value.formInfo.certNo,"onUpdate:modelValue":d[3]||(d[3]=e=>r.value.formInfo.certNo=e),name:"certNo",required:"",label:"\u8BC1\u4EF6\u53F7\u7801"},null,8,["modelValue"])):t("",!0),u(p).name?(a(),n(c,{key:3,modelValue:r.value.formInfo.name,"onUpdate:modelValue":d[4]||(d[4]=e=>r.value.formInfo.name=e),required:"",name:"name",label:"\u59D3\u540D"},null,8,["modelValue"])):t("",!0),u(p).gender?(a(),n(c,{key:4,modelValue:r.value.formInfo.gender,"onUpdate:modelValue":d[6]||(d[6]=e=>r.value.formInfo.gender=e),required:"",name:"gender",label:"\u6027\u522B"},{input:V(()=>[v(k,{modelValue:r.value.formInfo.gender,"onUpdate:modelValue":d[5]||(d[5]=e=>r.value.formInfo.gender=e),options:u(q)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):t("",!0),u(p).birthday?(a(),n(C,{key:5,modelValue:r.value.formInfo.birthday,"onUpdate:modelValue":d[7]||(d[7]=e=>r.value.formInfo.birthday=e),label:"\u51FA\u751F\u65E5\u671F",name:"birthday",required:""},null,8,["modelValue"])):t("",!0),u(p).certEndDate?(a(),n(C,{key:6,modelValue:r.value.formInfo.certEndDate,"onUpdate:modelValue":d[8]||(d[8]=e=>r.value.formInfo.certEndDate=e),label:"\u6709\u6548\u671F\u81F3",name:"certEndDate",required:""},null,8,["modelValue"])):t("",!0),u(p).country?(a(),n(i,{key:7,modelValue:r.value.formInfo.extInfo.nationalityCode,"onUpdate:modelValue":d[9]||(d[9]=e=>r.value.formInfo.extInfo.nationalityCode=e),label:"\u56FD\u7C4D",name:"nationalityCode","data-source":u(U),mapping:{label:"name",value:"code",children:"child"},required:""},null,8,["modelValue","data-source"])):t("",!0),u(p).beneficiaryType?(a(),n(i,{key:8,modelValue:r.value.formInfo.benefitOrder,"onUpdate:modelValue":d[10]||(d[10]=e=>r.value.formInfo.benefitOrder=e),label:"\u53D7\u76CA\u4EBA\u987A\u5E8F",name:"benefitOrder","data-source":u(le),required:""},null,8,["modelValue","data-source"])):t("",!0),v(c,{modelValue:r.value.formInfo.benefitRate,"onUpdate:modelValue":d[11]||(d[11]=e=>r.value.formInfo.benefitRate=e),name:"benefitRate",label:"\u53D7\u76CA\u6BD4\u4F8B"},null,8,["modelValue"])])}}}),ae={class:"com-personal-wrapper"},Ce=S({props:{formInfo:{default:()=>({})},factorList:{default:()=>[]},images:{default:()=>[]}},emits:["update:images"],setup(A,{emit:T}){const b=A,[r,F]=J(),U=E("CERT_TYPE"),p=E("HENGQIN_OCCUPATION"),y=E("MARRIAGE_STATUS"),d=E("DEGREE"),k=E("NATIONALITY"),c=E("NATIONAL_REGION_CODE"),i=x([]),C=x(!1),e=x({formInfo:b.formInfo,birth:{min:L(new Date("1900-01-01")).format("YYYY-MM-DD"),max:L(new Date).format("YYYY-MM-DD")},front:"",back:"",occupationalText:""}),m=Y(()=>{const s={};return b.factorList.forEach(o=>{(s[o.code]=s[o.code]||[]).push(o)}),s}),G=s=>{e.value.occupationalText=s},M=()=>{F(!1)};return P(()=>e.value.formInfo.certNo,s=>{H(s)?(e.value.formInfo.gender=h(s),e.value.formInfo.birthday=new Date(X(s)),C.value=!0):C.value=!1},{deep:!0,immediate:!0}),P(()=>b.images,s=>{i.value=s},{immediate:!0}),P(i,s=>{T("update:images",s)},{deep:!0}),(s,o)=>{const B=I("ProPicker"),Z=I("ProIDCardUpload"),f=I("ProField"),$=I("ProImageUpload"),g=I("ProRadioButton"),O=I("ProDatePicker"),j=I("Occupational");return a(),R("div",ae,[u(m).certType?(a(),n(B,{key:0,modelValue:e.value.formInfo.certType,"onUpdate:modelValue":o[0]||(o[0]=l=>e.value.formInfo.certType=l),label:"\u8BC1\u4EF6\u7C7B\u578B",name:"certType",readonly:"","data-source":u(U),mapping:{label:"name",value:"code",children:"child"},required:""},null,8,["modelValue","data-source"])):t("",!0),e.value.formInfo.certType+""=="1"?(a(),n(f,{key:1,label:"\u8EAB\u4EFD\u8BC1\u4E0A\u4F20",block:"",required:""},{input:V(()=>[v(Z,{front:i.value[0],"onUpdate:front":o[1]||(o[1]=l=>i.value[0]=l),back:i.value[1],"onUpdate:back":o[2]||(o[2]=l=>i.value[1]=l)},null,8,["front","back"])]),_:1})):t("",!0),e.value.formInfo.certType&&e.value.formInfo.certType+""!="1"?(a(),n(f,{key:2,label:"\u8BC1\u4EF6\u4E0A\u4F20",block:"",required:""},{input:V(()=>[v($,{modelValue:i.value,"onUpdate:modelValue":o[3]||(o[3]=l=>i.value=l),"max-count":1},null,8,["modelValue"])]),_:1})):t("",!0),u(m).certNo?(a(),n(f,{key:3,modelValue:e.value.formInfo.certNo,"onUpdate:modelValue":o[4]||(o[4]=l=>e.value.formInfo.certNo=l),label:"\u8BC1\u4EF6\u53F7\u7801",name:"certNo",required:"",placeholder:"\u8BF7\u8F93\u5165","validate-type":e.value.formInfo.certType==="1"?["idCard"]:[]},null,8,["modelValue","validate-type"])):t("",!0),u(m).name?(a(),n(f,{key:4,modelValue:e.value.formInfo.name,"onUpdate:modelValue":o[5]||(o[5]=l=>e.value.formInfo.name=l),label:"\u59D3\u540D",name:"name",required:""},null,8,["modelValue"])):t("",!0),u(m).sex?(a(),n(f,{key:5,modelValue:e.value.formInfo.gender,"onUpdate:modelValue":o[7]||(o[7]=l=>e.value.formInfo.gender=l),required:"",label:"\u6027\u522B",name:"gender",placeholder:"\u8BF7\u9009\u62E9","is-view":C.value},{input:V(()=>[v(g,{modelValue:e.value.formInfo.gender,"onUpdate:modelValue":o[6]||(o[6]=l=>e.value.formInfo.gender=l),options:u(q)},null,8,["modelValue","options"])]),_:1},8,["modelValue","is-view"])):t("",!0),u(m).birthday?(a(),n(O,{key:6,modelValue:e.value.formInfo.birthday,"onUpdate:modelValue":o[8]||(o[8]=l=>e.value.formInfo.birthday=l),label:"\u51FA\u751F\u65E5\u671F",name:"birthday",min:e.value.birth.min,max:e.value.birth.max,type:"date",required:"","is-view":C.value},null,8,["modelValue","min","max","is-view"])):t("",!0),u(m).certEndDate?(a(),n(O,{key:7,modelValue:e.value.formInfo.certEndDate,"onUpdate:modelValue":o[9]||(o[9]=l=>e.value.formInfo.certEndDate=l),label:"\u6709\u6548\u671F\u81F3",name:"certEndDate",type:"date",required:""},null,8,["modelValue"])):t("",!0),v(B,{modelValue:e.value.formInfo.extInfo.provinceCode,"onUpdate:modelValue":o[10]||(o[10]=l=>e.value.formInfo.extInfo.provinceCode=l),label:"\u6237\u7C4D\u6240\u5728\u5730",name:"provinceCode",placeholder:"\u8BF7\u9009\u62E9","is-link":"","data-source":u(c),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","data-source"]),u(m).hasSocialInsurance?(a(),n(f,{key:8,modelValue:e.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[12]||(o[12]=l=>e.value.formInfo.extInfo.hasSocialInsurance=l),label:"\u793E\u4FDD",name:"hasSocialInsurance",placeholder:"\u8BF7\u9009\u62E9"},{input:V(()=>[v(g,{modelValue:e.value.formInfo.extInfo.hasSocialInsurance,"onUpdate:modelValue":o[11]||(o[11]=l=>e.value.formInfo.extInfo.hasSocialInsurance=l),options:u(w)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):t("",!0),u(m).occupation?(a(),n(f,{key:9,modelValue:e.value.formInfo.extInfo.occupationCode,"onUpdate:modelValue":o[13]||(o[13]=l=>e.value.formInfo.extInfo.occupationCode=l),label:"\u804C\u4E1A",name:"occupationCode",placeholder:"\u8BF7\u9009\u62E9","data-source":u(p),mapping:{label:"name",value:"code",children:"child"},"is-link":""},null,8,["modelValue","data-source"])):t("",!0),u(m).annualIncome?(a(),n(f,{key:10,modelValue:e.value.formInfo.extInfo.personalAnnualIncome,"onUpdate:modelValue":o[14]||(o[14]=l=>e.value.formInfo.extInfo.personalAnnualIncome=l),label:"\u4E2A\u4EBA\u5E74\u6536\u5165",name:"personalAnnualIncome",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])):t("",!0),u(m).familyAnnualIncome?(a(),n(f,{key:11,modelValue:e.value.formInfo.extInfo.familyAnnualIncome,"onUpdate:modelValue":o[15]||(o[15]=l=>e.value.formInfo.extInfo.familyAnnualIncome=l),label:"\u5BB6\u5EAD\u5E74\u6536\u5165",name:"familyAnnualIncome",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])):t("",!0),u(m).nation?(a(),n(B,{key:12,modelValue:e.value.formInfo.extInfo.nationalityCode,"onUpdate:modelValue":o[16]||(o[16]=l=>e.value.formInfo.extInfo.nationalityCode=l),label:"\u56FD\u7C4D",name:"nationalityCode",readonly:"","data-source":u(k),mapping:{label:"name",value:"code",children:"child"},placeholder:"\u8BF7\u9009\u62E9","is-link":""},null,8,["modelValue","data-source"])):t("",!0),u(m).marriage?(a(),n(f,{key:13,modelValue:e.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":o[18]||(o[18]=l=>e.value.formInfo.extInfo.hasUsCard=l),label:"\u7F8E\u56FD\u7EFF\u5361",name:"hasUsCard",placeholder:"\u8BF7\u9009\u62E9"},{input:V(()=>[v(g,{modelValue:e.value.formInfo.extInfo.hasUsCard,"onUpdate:modelValue":o[17]||(o[17]=l=>e.value.formInfo.extInfo.hasUsCard=l),options:u(w)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):t("",!0),u(m).marriage?(a(),n(B,{key:14,modelValue:e.value.formInfo.extInfo.marriageStatus,"onUpdate:modelValue":o[19]||(o[19]=l=>e.value.formInfo.extInfo.marriageStatus=l),label:"\u5A5A\u59FB\u72B6\u51B5",name:"marriageStatus",readonly:"",placeholder:"\u8BF7\u9009\u62E9","data-source":u(y),mapping:{label:"name",value:"code",children:"child"},"is-link":""},null,8,["modelValue","data-source"])):t("",!0),u(m).educationDegree?(a(),n(B,{key:15,modelValue:e.value.formInfo.extInfo.educationDegree,"onUpdate:modelValue":o[20]||(o[20]=l=>e.value.formInfo.extInfo.educationDegree=l),label:"\u5B66\u5386",readonly:"",name:"educationDegree","data-source":u(d),mapping:{label:"name",value:"code",children:"child"},placeholder:"\u8BF7\u9009\u62E9","is-link":""},null,8,["modelValue","data-source"])):t("",!0),u(m).mobile?(a(),n(f,{key:16,modelValue:e.value.formInfo.mobile,"onUpdate:modelValue":o[21]||(o[21]=l=>e.value.formInfo.mobile=l),label:"\u624B\u673A\u53F7\u7801",name:"mobile",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])):t("",!0),u(m).email?(a(),n(f,{key:17,modelValue:e.value.formInfo.email,"onUpdate:modelValue":o[22]||(o[22]=l=>e.value.formInfo.email=l),label:"\u7535\u5B50\u90AE\u7BB1",name:"email",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])):t("",!0),u(m).familyAddress?(a(),n(B,{key:18,modelValue:e.value.formInfo.familyProvinceCode,"onUpdate:modelValue":o[23]||(o[23]=l=>e.value.formInfo.familyProvinceCode=l),label:"\u5BB6\u5EAD\u5730\u5740","data-source":u(c),mapping:{label:"name",value:"code",children:"child"},name:"familyProvinceCode",placeholder:"\u8BF7\u9009\u62E9"},null,8,["modelValue","data-source"])):t("",!0),u(m).familyAddressDetail?(a(),n(f,{key:19,modelValue:e.value.formInfo.extInfo.familyAddress,"onUpdate:modelValue":o[24]||(o[24]=l=>e.value.formInfo.extInfo.familyAddress=l),label:"\u5730\u5740\u8BE6\u60C5",name:"familyAddress",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])):t("",!0),u(m).familyPostCode?(a(),n(f,{key:20,modelValue:e.value.formInfo.extInfo.familyZipCode,"onUpdate:modelValue":o[25]||(o[25]=l=>e.value.formInfo.extInfo.familyZipCode=l),label:"\u5BB6\u5EAD\u90AE\u7F16",name:"familyZipCode",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])):t("",!0),u(m).workAddress?(a(),n(f,{key:21,modelValue:e.value.formInfo.extInfo.workProvinceCode,"onUpdate:modelValue":o[26]||(o[26]=l=>e.value.formInfo.extInfo.workProvinceCode=l),label:"\u5DE5\u4F5C\u5730\u5740",name:"workProvinceCode","data-source":u(c),mapping:{label:"name",value:"code",children:"child"},placeholder:"\u8BF7\u9009\u62E9"},null,8,["modelValue","data-source"])):t("",!0),u(m).workAddressDetail?(a(),n(f,{key:22,modelValue:e.value.formInfo.extInfo.workAddress,"onUpdate:modelValue":o[27]||(o[27]=l=>e.value.formInfo.extInfo.workAddress=l),label:"\u5730\u5740\u8BE6\u60C5",name:"workAddress",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])):t("",!0),u(m).workZipCode?(a(),n(f,{key:23,modelValue:e.value.formInfo.extInfo.workZipCode,"onUpdate:modelValue":o[28]||(o[28]=l=>e.value.formInfo.extInfo.workZipCode=l),label:"\u5DE5\u4F5C\u90AE\u7F16",name:"workPostCode",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])):t("",!0),u(m).workPlace?(a(),n(f,{key:24,modelValue:e.value.formInfo.extInfo.workStation,"onUpdate:modelValue":o[29]||(o[29]=l=>e.value.formInfo.extInfo.workStation=l),label:"\u5355\u4F4D\u540D\u79F0",name:"workPostCode",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])):t("",!0),u(m).workContent?(a(),n(f,{key:25,modelValue:e.value.formInfo.extInfo.workContent,"onUpdate:modelValue":o[30]||(o[30]=l=>e.value.formInfo.extInfo.workContent=l),label:"\u5DE5\u4F5C\u5185\u5BB9",name:"workContent",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])):t("",!0),u(m).taxCert?(a(),n(B,{key:26,modelValue:e.value.formInfo.extInfo.taxResident,"onUpdate:modelValue":o[31]||(o[31]=l=>e.value.formInfo.extInfo.taxResident=l),label:"\u7A0E\u6536\u5C45\u6C11\u8EAB\u4EFD",name:"taxResident","data-source":u(oe),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","data-source"])):t("",!0),u(m).partTime?(a(),n(f,{key:27,modelValue:e.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":o[33]||(o[33]=l=>e.value.formInfo.extInfo.isPartTime=l),label:"\u662F\u5426\u517C\u804C",name:"isPartTime",placeholder:"\u8BF7\u8F93\u5165"},{input:V(()=>[v(g,{modelValue:e.value.formInfo.extInfo.isPartTime,"onUpdate:modelValue":o[32]||(o[32]=l=>e.value.formInfo.extInfo.isPartTime=l),options:u(w)},null,8,["modelValue","options"])]),_:1},8,["modelValue"])):t("",!0),u(r)?(a(),n(j,{key:28,modelValue:e.value.formInfo.occupationalClass,"onUpdate:modelValue":o[34]||(o[34]=l=>e.value.formInfo.occupationalClass=l),show:u(r),"insured-code":s.insuredCode,onFinish:G,onClose:M},null,8,["modelValue","show","insured-code"])):t("",!0)])}}});const ne={class:"com-select-container"},te={class:"radio-item-wrapper"},re={class:"name"},de={class:"hone"},me={class:"address"},ie={class:"footer-button"},fe=_("\u53D6\u6D88"),se=_("\u786E\u8BA4"),pe=S({props:{dataSource:{type:Array,default:()=>[]},show:{type:Boolean,default:!1},modelValue:{type:[String,Number],default:null}},emits:["update","submit"],setup(A,{emit:T}){const b=A,r=x(null),F=x(b.show),U=()=>{T("submit",r.value),F.value=!1};return P(()=>b.modelValue,p=>{r.value=p}),(p,y)=>{const d=I("van-radio"),k=I("van-radio-group"),c=I("VanButton");return a(),n(z,{show:F.value,"onUpdate:show":y[1]||(y[1]=i=>F.value=i),class:"com-select",title:"\u9009\u62E9\u4FDD\u5355\u901A\u8BAF\u4FE1\u606F"},{default:V(()=>[D("div",ne,[v(k,{modelValue:r.value,"onUpdate:modelValue":y[0]||(y[0]=i=>r.value=i)},{default:V(()=>[(a(!0),R(W,null,K(A.dataSource,(i,C)=>(a(),n(d,{key:C,name:C+1,class:"radio-item"},{default:V(()=>[D("div",te,[D("p",null,[D("span",re,N(i.contactName),1),D("span",de,N(i.contactPhoneNo),1)]),D("p",me,N(i.contactAddress),1)])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]),D("div",ie,[v(c,{plain:"",type:"primary"},{default:V(()=>[fe]),_:1}),v(c,{type:"primary",onClick:U},{default:V(()=>[se]),_:1})])]),_:1},8,["show"])}}});var be=Q(pe,[["__scopeId","data-v-80c2572e"]]);export{be as A,Ee as B,ce as R,Ce as _,ye as a};
