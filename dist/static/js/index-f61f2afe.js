import{d as e,j as i,r as n,B as r,aF as o,o as a,m as s,w as l,g as t,u as d,bc as u,bd as c,_ as m,be as p,bf as f,bg as g,bh as v,T as y,bi as V,am as h,bj as O,af as b,bk as T,a6 as I,k as S,aI as L,bl as x,b9 as C,bm as w,c as k,b as j,f as F,F as N,q as H,a8 as $,aH as B,bn as E,ae as _,bo as J,i as P,ac as M,bp as A,bq as R,br as U,a0 as q,a as D,a9 as Y,bs as G,bb as K,bt as z,bu as Q}from"./index-2ab1afb0.js";import{c as W}from"./cloneDeep-db6f430b.js";import"./PolicyInfo-f2e8a15e.js";import{l as X}from"./lodash-4a8416ad.js";import{B as Z}from"./infoCollection-82c1c199.js";import{O as ee}from"./questionnaire-42dcb602.js";import{s as ie,g as ne,a as re,c as oe,b as ae,t as se,i as le}from"./util-1a478116.js";const te=e({name:"BeneficiaryItem"});var de=m(e({...te,props:{modelValue:{default:()=>({})},schema:{default:()=>[]},config:{default:()=>({})},isView:{type:Boolean,default:!1},isTrial:{type:Boolean,default:!1},title:{default:"受益人"},holderPersonVO:{default:()=>({})}},emits:["update:modelValue","trailChange"],setup(e,{expose:m,emit:S}){const L=e,x=i(null),C=n({validated:!1,schema:[],config:{},personVO:{}});r((()=>L.config),(e=>{e&&Object.assign(C.config,e)}),{deep:!0,immediate:!0}),r((()=>L.schema),(e=>{e&&(g(L.schema,L.modelValue,(()=>{C.personVO.certType="1"})),Object.assign(C.schema,W(L.schema)))}),{deep:!0,immediate:!0}),r((()=>W(L.modelValue)),((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&(v("受益人数据变动了"),Object.assign(C.personVO,e),g(L.schema,L.modelValue,(()=>{Object.assign(C.personVO,{certType:"1"})})))}),{deep:!0,immediate:!0}),r((()=>C.personVO),(e=>{e&&(`${C.personVO.isHolder}`!=`${I.YES}`&&(Object.keys(C.personVO).filter((e=>{var i,n;return!(!["gender","birthday","certType","certNo","name"].includes(e)||!C.personVO[e]||`${null==(i=C.personVO)?void 0:i[e]}`!=`${null==(n=null==L?void 0:L.holderPersonVO)?void 0:n[e]}`)}))||[]).length>=2&&y("录入的受益人同投保人基本信息，请勾选“同投保人"),S("update:modelValue",e))}),{deep:!0,immediate:!0});return r((()=>L.holderPersonVO),o((e=>{(e=>{var i,n;const r={};(null==(i=C.personVO)?void 0:i.age)&&(null==(n=C.personVO)?void 0:n.age)<18&&(C.schema.find((e=>"mobile"===e.name))&&(r.mobile=(null==e?void 0:e.mobile)||""),C.schema.find((e=>"annuallyComeList"===e.name))&&(r.annuallyComeList=["7"],r.annuallyComeDesc="无")),Object.assign(C.personVO,r)})(e)}),300),{deep:!0,immediate:!0}),r((()=>{var e;return null==(e=C.personVO)?void 0:e.relationToInsured}),((e,i)=>{if(e===i)return!1;v("受益人与被保人关系变动了");const{certType:n}=C.personVO||{},[r,o]=V(C.schema,{certType:n,relationToHolder:e}),a={gender:{...o.gender,isView:L.isView}};if(!L.isView&&e!==i){let i=null;"2"==`${e}`&&(a.gender.isView=!0,i=h.FEMALE),"3"==`${e}`&&(a.gender.isView=!0,i=h.MALE),Object.assign(C.personVO,{...O(C.personVO,(e=>!(r&&"certType"===e))),gender:i,relationToInsured:e})}return b(C.config,o,a),!1}),{immediate:!0}),r((()=>{var e;return null==(e=C.personVO)?void 0:e.nationalityCode}),((e,i)=>{e!==i&&b(C.config,T(C.personVO))}),{immediate:!0}),m({validate:e=>f(x,L.trialFactorCodes,e),validateTrialFields:()=>p({personVO:C.personVO,trialFactorCodes:L.trialFactorCodes})}),(e,i)=>(a(),s(d(c),{ref_key:"formRef",ref:x,class:"personal-info-card",title:e.title,model:d(C).personVO,schema:d(C).schema,config:d(C).config,"is-view":e.isView,"extra-provision":{objectType:d(u).BENEFICIARY,objectId:d(C).personVO.id}},{cardTitleExtra:l((()=>[t(e.$slots,"default",{},void 0,!0)])),"header-item":l((()=>[t(e.$slots,"header-item",{},void 0,!0)])),customer:l((()=>[t(e.$slots,"customer",{},void 0,!0)])),_:3},8,["title","model","schema","config","is-view","extra-provision"]))}}),[["__scopeId","data-v-7bfc34ca"]]);const ue=["onClick"],ce=e({name:"InsuredItem"});var me=m(e({...ce,props:{modelValue:{default:()=>({})},title:{default:""},holderPersonVO:{default:()=>({})},schema:{default:()=>[]},config:{default:()=>({})},isView:{type:Boolean,default:!1},isTrial:{type:Boolean,default:!1},trialFactorCodes:{default:()=>[]},multiBeneficiaryMaxNum:{default:null},beneficiaryList:{default:()=>[]},beneficiarySchema:{default:()=>[]},guardian:{default:()=>({})},guardianSchema:{default:()=>[]}},emits:["update:modelValue","update:beneficiaryList","update:guardian"],setup(e,{expose:o,emit:m}){const J=e,P=i(null),M=i(null),A=i(null),R=i(null),U={schema:[],trialFactorCodes:[],config:{occupationCode:{isView:!0}},personVO:{}},q=n({validated:!1,schema:[],config:{},personVO:{},beneficiaryTypeSchemaList:[],beneficiarySchemaList:[],beneficiaryList:[],guardianSchema:[],guardian:{}}),D=i(!1),Y=S((()=>{const{age:e,relationToHolder:i}=q.personVO;return!["1","4","5"].includes(`${i}`)&&null!==e&&+e<18||(q.guardian={},!1)})),G=()=>{const e={};return q.beneficiarySchemaList.reduce(((e,i)=>{var n,r;return(null==(n=J.holderPersonVO)?void 0:n[i.name])&&(e[i.name]=null==(r=J.holderPersonVO)?void 0:r[i.name]),e}),e),e},K=(e={})=>{const i=e;return q.beneficiarySchemaList.reduce(((e,i)=>{var n;return(null==(n=J.holderPersonVO)?void 0:n[i.name])&&(e[i.name]=null),e}),i),i},z=()=>{q.beneficiaryList.push(W({...U,nanoid:x(),schema:J.beneficiarySchema}))},Q=S((()=>!J.multiBeneficiaryMaxNum||q.beneficiaryList.length<J.multiBeneficiaryMaxNum)),ie=S((()=>!q.schema.filter((e=>{var i;return!(e.hidden||(null==(i=q.config[e.name])?void 0:i.hidden))})).length)),ne=S((()=>q.schema.filter((e=>e.isSelfInsuredNeed)).map((e=>e.name)))),re=S((()=>L(J.beneficiarySchema))),oe=S((()=>{var e;return String(null==(e=q.personVO)?void 0:e.insuredBeneficiaryType)===Z.SPECIFY})),ae=i(!0);return r((()=>J.holderPersonVO),X.exports.debounce((e=>{var i;v("------投保人信息变动了-----");const{id:n,...r}=e||{};if("1"===String(null==(i=q.personVO)?void 0:i.relationToHolder)){D.value=!0;const e=L(ne.value)?Object.keys(r).reduce(((e,i)=>([...ne.value,"occupationClass"].includes(i)&&!["birthday","age","gender"].includes(i)||(e[i]=r[i]),e)),{}):r,i=(r.certImage||[]).map((e=>({...e,objectId:q.personVO.id,objectType:ee.INSURED})));Object.assign(q.personVO,e,{certImage:i})}else((e,i)=>{if(!ae.value)return;const n={};(null==i?void 0:i.age)&&(+i.age||0)<18&&(q.schema.find((e=>"mobile"===e.name))&&(n.mobile=(null==e?void 0:e.mobile)||""),q.schema.find((e=>"personalAnnualIncome"===e.name))&&(q.personVO.personalAnnualIncome="0"),q.schema.find((e=>"annuallyComeList"===e.name))&&(n.annuallyComeList=["7"],n.annuallyComeDesc="无")),ae.value=!1,Object.assign(q.personVO,n)})(e,q.personVO)}),300),{deep:!0,immediate:!0}),r([()=>{var e;return null==(e=J.holderPersonVO)?void 0:e.familyAnnualIncome},()=>{var e;return null==(e=q.personVO)?void 0:e.familyAnnualIncome}],X.exports.debounce((([e,i],[n,r])=>{(e!==n&&(+e).toFixed().length>5||i!==r&&(+i).toFixed().length>5)&&y("请核实年收入是否准确")}),300)),r((()=>J.beneficiarySchema),(e=>{q.beneficiarySchemaList=L(e)?e.filter((e=>"insuredBeneficiaryType"!==e.name)):[],q.beneficiaryTypeSchemaList=L(e)?e.filter((e=>"insuredBeneficiaryType"===e.name)):[]}),{deep:!0,immediate:!0}),r((()=>J.guardianSchema),(e=>{q.guardianSchema=e}),{deep:!0,immediate:!0}),r(oe,((e,i)=>{String(e)!==String(i)&&(v("受益人类型关系变动了"),e?(q.beneficiaryList=L(J.beneficiaryList)?J.beneficiaryList.map((e=>({...e,nanoid:e.nanoid||x()}))):[],!L(q.beneficiaryList)&&z()):q.beneficiaryList=[])}),{immediate:!0}),r((()=>W(q.beneficiaryList).map((e=>({personVO:e.personVO,nanoid:e.nanoid})))),((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&m("update:beneficiaryList",e)}),{deep:!0,immediate:!0}),r((()=>{var e;return null==(e=q.personVO)?void 0:e.relationToHolder}),((e,i)=>{if(!e)return;v("与投保人关系变动了");const{personVO:n,schema:r=[],config:o}=q||{},{id:a,...s}=J.holderPersonVO||{},l="1"===String(n.relationToHolder);if(r.forEach((e=>{e.relationToHolder=n.relationToHolder,e.hidden=!e.isSelfInsuredNeed&&l})),!J.isView&&i&&String(e)!==String(i)){let e={...n,...s};const[i,a]=V(r,n);l||(e={...O(n,(e=>!(i&&"certType"===e))),relationToHolder:n.relationToHolder});const t={gender:{...o.gender,isView:J.isView}};"2"==`${n.relationToHolder}`&&(t.gender.isView=!0,e.gender=h.FEMALE),"3"==`${n.relationToHolder}`&&(t.gender.isView=!0,e.gender=h.MALE),b(o,t),Object.assign(q.personVO,e)}const[t,d]=V(r,n);b(o,d)}),{deep:!0}),r((()=>{var e;return null==(e=q.personVO)?void 0:e.nationalityCode}),((e,i)=>{e!==i&&b(q.config,T(q.personVO))}),{immediate:!0}),r((()=>{var e;return null==(e=q.guardian.personVO)?void 0:e.nationalityCode}),((e,i)=>{var n;e!==i&&b(q.guardian.config,T(null==(n=q.guardian)?void 0:n.personVO))}),{immediate:!0}),r((()=>{var e;return null==(e=q.guardian.personVO)?void 0:e.relationToInsured}),((e,i)=>{if(e===i)return;v("监护人与被保人关系变动了");const{certType:n}=q.guardian.personVO||{},[r,o]=V(q.guardianSchema,{certType:n,relationToInsured:e}),a={gender:{...o.gender,isView:J.isView}};if(!J.isView&&e!==i){let i=null;"2"==`${e}`&&(a.gender.isView=!0,i=h.FEMALE),"3"==`${e}`&&(a.gender.isView=!0,i=h.MALE),Object.assign(q.personVO,{...O(q.personVO,(e=>!(r&&"certType"===e))),gender:i,relationToInsured:e})}b(q.config,o,a)}),{immediate:!0}),r((()=>{var e;return null==(e=q.personVO)?void 0:e.relationToMainInsured}),((e,i)=>{if(!e)return;v("次被保人与主被保人关系变动了");const{personVO:n,schema:r=[],config:o}=q||{},{certType:a}=n||{},[s,l]=V(r,{certType:a,relationToHolder:e});b(o,l),!J.isView&&i&&String(e)!==String(i)&&Object.assign(q.personVO,{...O(n,(e=>!(s&&"certType"===e))),relationToMainInsured:n.relationToMainInsured})})),r((()=>J.config),(e=>{e&&Object.assign(q.config,e)}),{deep:!0,immediate:!0}),r((()=>J.schema),((e,i)=>{var n;if(e&&JSON.stringify(e)!==JSON.stringify(q.schema)){const i="1"===String(null==(n=J.modelValue)?void 0:n.relationToHolder);q.schema=W(e).map((e=>{var n;return g(J.schema,J.modelValue,(()=>{q.personVO.certType="1"})),e.relationToHolder=null==(n=J.modelValue)?void 0:n.relationToHolder,e.hidden=!e.isSelfInsuredNeed&&i,e}))}}),{deep:!0,immediate:!0}),r((()=>W(J.modelValue)),((e,i)=>{if(JSON.stringify(e)!==JSON.stringify(i)){const{beneficiaryList:n,...r}=e;e.age!==(null==i?void 0:i.age)&&e.age&&(ae.value=!0),b(q.personVO,r),g(J.schema,J.modelValue,(()=>{q.personVO.certType="1"}))}}),{deep:!0,immediate:!0}),r((()=>W(J.beneficiaryList)),X.exports.debounce(((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&(q.beneficiaryList=L(e)?e.map((e=>({...e,nanoid:e.nanoid||x()}))):[])}),500),{deep:!0,immediate:!0}),r((()=>J.guardian),X.exports.debounce(((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&(q.guardian=e)}),300),{deep:!0,immediate:!0}),r((()=>q.personVO),(e=>{e&&m("update:modelValue",e)}),{deep:!0,immediate:!0}),o({validate:e=>new Promise(((i,n)=>{var r;Promise.all([f(P,J.trialFactorCodes,e),f(R,[],e),f(M,[],e),...(null==(r=A.value)?void 0:r.map((i=>i.validate(e))))||[]]).then((()=>{i()}),((e,i)=>{console.log("formRef",e),n(e,i)}))})),validateTrialFields:()=>p({personVO:q.personVO,trialFactorCodes:J.trialFactorCodes})}),(e,i)=>{var n,r;const o=C,m=E,p=_,f=w;return a(),k(N,null,[j(d(c),{ref_key:"insuredFormRef",ref:P,class:"personal-info-card",title:d(ie)?"":e.title,model:d(q).personVO,schema:d(q).schema,config:d(q).config,"is-view":e.isView,"extra-provision":{objectType:d(u).INSURED,objectId:d(q).personVO.id}},{cardTitleExtra:l((()=>[t(e.$slots,"default",{},void 0,!0)])),customer:l((()=>[t(e.$slots,"customer",{},void 0,!0)])),_:3},8,["title","model","schema","config","is-view","extra-provision"]),d(Y)?(a(),s(d(c),{key:0,ref_key:"guardianFormRef",ref:R,class:"personal-info-card",title:"监护人",model:d(q).guardian.personVO,schema:d(q).guardianSchema,config:d(q).config,"is-view":e.isView,"extra-provision":{objectType:d(u).GUARDIAN,objectId:null==(r=null==(n=d(q).guardian)?void 0:n.personVO)?void 0:r.id}},{cardTitleExtra:l((()=>[t(e.$slots,"default",{},void 0,!0)])),customer:l((()=>[t(e.$slots,"guardianCustomer",{},void 0,!0)])),_:3},8,["model","schema","config","is-view","extra-provision"])):F("",!0),d(re)?(a(),k(N,{key:1},[j(d(c),{ref_key:"beneficiaryTypeFormRef",ref:M,class:"personal-info-card",title:"受益人",model:d(q).personVO,schema:d(q).beneficiaryTypeSchemaList,"is-view":e.isView},null,8,["model","schema","is-view"]),d(oe)?(a(),k(N,{key:0},[(a(!0),k(N,null,H(d(q).beneficiaryList,((i,n)=>{var r;return a(),s(de,{ref_for:!0,ref_key:"beneficiaryFormRef",ref:A,key:`${i.nanoid}_${n}`,modelValue:i.personVO,"onUpdate:modelValue":e=>i.personVO=e,title:`受益人${n+1}`,schema:d(q).beneficiarySchemaList,config:i.config,"holder-person-v-o":e.holderPersonVO,"is-view":e.isView||(null==(r=i.personVO)?void 0:r.isHolder)===d(I).YES},{customer:l((()=>[t(e.$slots,"benefitCustomer",{index:n},void 0,!0)])),"header-item":l((()=>[j(m,{label:"是否同投保人","input-align":"right"},{input:l((()=>[j(o,{modelValue:i.personVO.isHolder,"onUpdate:modelValue":e=>i.personVO.isHolder=e,"active-value":1,"inactive-value":2,disabled:d(D),onClick:()=>(e=>{var i,n,r;`${null==(r=null==(n=null==(i=q.beneficiaryList)?void 0:i[e])?void 0:n.personVO)?void 0:r.isHolder}`==`${I.YES}`?J.holderPersonVO&&(q.beneficiaryList=q.beneficiaryList.map(((i,n)=>e===n?{...i,personVO:{...i.personVO,...G()},config:{...i.config,benefitRate:{isView:!1},benefitOrder:{isView:!1},relationToInsured:{isView:!1},beneficiaryType:{isView:!1}}}:i))):q.beneficiaryList=q.beneficiaryList.map(((i,n)=>{var r,o;return e===n?{...i,personVO:{...K(null==(o=null==(r=q.beneficiaryList)?void 0:r[e])?void 0:o.personVO)}}:i}))})(n)},{default:l((()=>[$("同投保人")])),_:2},1032,["modelValue","onUpdate:modelValue","disabled","onClick"])])),_:2},1024)])),default:l((()=>[n>0&&!e.isView?(a(),k("span",{key:0,class:"delete-button",onClick:e=>(e=>{B.confirm({message:"确定要删除该受益人吗？"}).then((()=>{q.beneficiaryList.splice(e,1)}))})(n)},[j(p,{name:"delete"})],8,ue)):F("",!0)])),_:2},1032,["modelValue","onUpdate:modelValue","title","schema","config","holder-person-v-o","is-view"])})),128)),!e.isView&&d(Q)?(a(),k("span",{key:0,class:"add-button",onClick:z},[j(f,{name:"plus"}),$("添加受益人")])):F("",!0)],64)):F("",!0)],64)):F("",!0),t(e.$slots,"riskList",{},void 0,!0)],64)}}}),[["__scopeId","data-v-5968e254"]]);const pe=["onClick"],fe=["onClick"],ge=["onClick"],ve=["onClick"],ye=e({name:"PersonalInfo"});var Ve=m(e({...ye,props:{productFactor:{default:()=>({})},modelValue:{default:()=>({})},isTrial:{type:Boolean,default:!1},isView:{type:Boolean,default:!1},isOnlyHolder:{type:Boolean,default:!1},isHolderExempt:{type:Boolean,default:!1},multiInsuredConfig:{}},emits:["update:modelValue","trailChange","trailValidateFailed","closeCustomerPopoup","update-bank"],setup(e,{expose:m,emit:g}){const h=e,{x:O,y:I}=J(),C=P(),E=M(),{isShare:X,saleChannelId:Z}=C.query,ee=i(null),te=i(null),de=n({count:0,slotProps:{},uniqKey:"",currentIndex:0,currentBenifitIndex:0,currentType:"",keyword:void 0,show:!1,list:[],config:{},trialValidated:!1,holder:{personVO:{},schema:[],trialFactorCodes:[],config:{occupationCode:{isView:!0}}},beneficiarySchema:[],initInsuredIList:[],insured:[]}),ue=S((()=>!h.isTrial||h.isHolderExempt)),ce=e=>{Object.assign(de.holder.personVO,e)},ye=S((()=>!(X||h.isView||h.isTrial||E))),Ve=(e,i,n,r)=>{de.currentType=e,"benifit"!==e?de.currentIndex=i:(de.currentIndex=i,de.currentBenifitIndex=n);const{selectedType:o,customerId:a,selected:s,...l}=C.query;console.log("选择的关系relation:",r),Y("customerList",{...l,selectedType:e,relation:r})},he=e=>{var i,n,r,o,a,s,l,t,d,u;const c="holder"===de.currentType?de.holder.schema.map((e=>e.name))||[]:"insured"===de.currentType?de.insured[de.currentIndex].schema.map((e=>e.name))||[]:"benifit"===de.currentType?de.beneficiarySchema.map((e=>e.name))||[]:"guardian"===de.currentType&&de.guardianSchema.map((e=>e.name))||[];c.push("certEndType","age","gender");const m=se(e,c);if(console.log(de.currentType,"的keys:",c,"转换后的客户信息:",m),"holder"===de.currentType)console.log("当前是投保人选信息state?.holder:",null==de?void 0:de.holder),Object.assign(null==(i=null==de?void 0:de.holder)?void 0:i.personVO,m),g("update-bank",e.bankCardInfo);else if("insured"===de.currentType){const e=null==(n=null==de?void 0:de.insured[de.currentIndex])?void 0:n.schema.some((e=>"relationToHolder"===e.name&&e.attributeValueList.some((e=>"1"===e.code))));if(le(null==(r=null==de?void 0:de.holder)?void 0:r.personVO,m))return e?void Object.assign((null==(o=null==de?void 0:de.insured[de.currentIndex])?void 0:o.personVO)||{},{relationToHolder:"1"}):void y("与投保人关系未配置本人");Object.assign((null==(a=null==de?void 0:de.insured[de.currentIndex])?void 0:a.personVO)||{},m)}else"benifit"===de.currentType?le(null==(s=null==de?void 0:de.insured[de.currentIndex])?void 0:s.personVO,m)?y("指定受益人不可为被保人本人"):Object.assign((null==(t=null==(l=null==de?void 0:de.insured[de.currentIndex])?void 0:l.beneficiaryList[de.currentBenifitIndex])?void 0:t.personVO)||{},m):"guardian"===de.currentType&&Object.assign((null==(u=null==(d=null==de?void 0:de.insured[de.currentIndex])?void 0:d.guardian)?void 0:u.personVO)||{},m)},Oe=()=>{var e;const i=!te.value||(null==(e=te.value)?void 0:e.every((e=>e.validateTrialFields())));return(!ee.value||p(de.holder))&&i},be=e=>new Promise(((i,n)=>{var r;Promise.all([...(null==(r=te.value)?void 0:r.map((i=>i.validate(e))))||[],f(ee,de.holder.trialFactorCodes,e)]).then((()=>{i()}),((e,i)=>{console.log("person111",i,e),n(i)}))})),Te=e=>{const{productList:i,config:n,schema:r,trialFactorCodes:o,beneficiaryList:a,guardian:s,personVO:l,nanoid:t,...d}=W(e)||{};return d},Ie=()=>{const{length:e,[e-1]:i}=de.initInsuredIList;de.insured.push(W({...i,nanoid:x()}))},Se=S((()=>{const{multiInsuredMaxNum:e,multiInsuredSupportFlag:i}=de.config;return i&&(!e||de.insured.length<e)})),Le=S((()=>L(de.holder.schema))),xe=S((()=>de.insured.some((e=>L(e.schema))))),Ce=(e,i)=>L(e)?e.reduce(((e,n)=>(e[n]=i[n],e)),{}):{},we=(e,i,n={})=>!!L(e)&&JSON.stringify(Ce(e,i))!==JSON.stringify(Ce(e,n));r((()=>{var e;return null==(e=de.holder.personVO)?void 0:e.certType}),o(((e,i)=>{if(`${e}`==`${i}`)return!1;v("投保人信息变动了====");const[n,r]=V(de.holder.schema,{certType:e});return b(de.holder.config,r),!1}),0)),r((()=>{var e;return null==(e=de.holder.personVO)?void 0:e.nationalityCode}),((e,i)=>{e!==i&&b(de.holder.config,T(de.holder.personVO))}),{immediate:!0});let ke=!1;r([()=>{var e;return{...null==(e=de.holder)?void 0:e.personVO}},()=>de.insured.map((e=>{const{beneficiaryList:i,guardian:n,personVO:r}=e||{},o=L(i)?i.map((e=>({...e.personVO}))):[];return{...r,guardian:n.personVO||{},beneficiaryList:o}}))],o(((e,i)=>{var n,r,o,a;if(JSON.stringify(e)===JSON.stringify(i)&&ke)return ke=!0,!1;ke=!1;const[s,l]=e,t=((e,i)=>{const n=we(de.holder.trialFactorCodes,null==e?void 0:e[0],null==i?void 0:i[0]),r=de.insured.some(((e,n)=>{var r;const{trialFactorCodes:o,personVO:a}=e;return we(o,a,null==(r=i[1])?void 0:r[n])}));return n||r})([s,l],i),{insuredList:d}=h.modelValue,u={holder:s,insuredList:l.map(((e,i)=>({...(null==d?void 0:d[i])||{},...e})))};if(null==(n=de.config)?void 0:n.isSpouseInsured){const[e,i]=l.map((e=>null==e?void 0:e.gender));if(e&&i&&String(e)===String(i))return y("被保人性别与投保要求不符")}if(JSON.stringify(null==(r=null==l?void 0:l[0])?void 0:r.personVO),Te(null==(a=null==(o=h.modelValue)?void 0:o.insuredList)?void 0:a[0]),console.log("-------result = ",u),g("update:modelValue",u),!Oe())return de.trialValidated=!1,g("trailValidateFailed",u);be(!0).then((()=>{console.log("trialEnd"),de.trialValidated=!0,!h.isOnlyHolder&&t&&g("trailChange",u)})).catch((()=>{de.trialValidated=!1,g("trailValidateFailed",u)}))}),0),{deep:!0}),r([()=>h.productFactor,()=>h.isTrial],o(((e,i)=>{if(G(e,i)||!(null==e?void 0:e[0]))return!1;v("投被保人要素变动了");const{insuredFactorCodes:n,holderFactorCodes:r}=K(z)||{},{holder:o,insured:a,beneficiary:s,guardian:l,config:t}=Q(e[0],{isTrial:e[1],...h.multiInsuredConfig,insuredFactorCodes:n,holderFactorCodes:r});return Object.assign(de.holder,o),de.config=t,L(a)&&(de.initInsuredIList=a.map((e=>({...e,guardian:{},beneficiaryList:[]})))),de.beneficiarySchema=W((null==s?void 0:s.schema)||[]),de.guardianSchema=W((null==l?void 0:l.schema)||[]),!1}),300),{deep:!0,immediate:!0}),r((()=>{var e,i,n,r;return null==(r=null==(n=null==(i=null==(e=null==de?void 0:de.insured)?void 0:e[de.currentIndex])?void 0:i.beneficiaryList)?void 0:n[de.currentBenifitIndex])?void 0:r.personVO}),((e,i)=>{var n,r,o,a;(null==(a=null==(o=null==(r=null==(n=null==de?void 0:de.insured)?void 0:n[de.currentIndex])?void 0:r.beneficiaryList)?void 0:o[de.currentBenifitIndex])?void 0:a.personVO)&&(null==e?void 0:e.relationToInsured)!==(null==i?void 0:i.relationToInsured)&&v("受益人关系变动了+++++")}),{deep:!0,immediate:!0}),r((()=>{var e,i,n,r;return null==(r=null==(n=null==(i=null==(e=null==de?void 0:de.insured)?void 0:e[de.currentIndex])?void 0:i.guardian)?void 0:n.personVO)?void 0:r.relationToInsured}),((e,i)=>{e!==i&&i&&(v("监护人关系变动了+++++"),Object.assign(de.insured[de.currentIndex],{guardian:{personVO:{relationToInsured:e}}}))}));const je=i(!1);return r([()=>{const{holder:e,insuredList:i=[]}=h.modelValue,n=L(i)?i.map((e=>({config:e.config,personVO:Te(e),guardian:{personVO:e.guardian||{}},beneficiaryList:L(e.beneficiaryList)?e.beneficiaryList.map((({config:e,...i})=>({config:e,personVO:Te(i)}))):[]}))):[];return[null==e?void 0:e.config,Te(e),n]},()=>de.config,()=>de.initInsuredIList],o((([[e,i,n],r,o],[[a,s,l],t,d])=>{if(JSON.stringify(e)===JSON.stringify(a)&&JSON.stringify(i)===JSON.stringify(s)&&JSON.stringify(n)===JSON.stringify(l)&&JSON.stringify(o)===JSON.stringify(d)&&je.value)return;je.value=!0,Object.assign(de.holder.config,e),console.log("投保人数据===",W(de.holder.personVO),W(i)),console.log("投保人数据===",W(de.holder.personVO),W(i)),Object.assign(de.holder.personVO,i);const{length:u}=n||[],{length:c}=de.insured,{length:m,0:p={},[m-1]:f}=de.initInsuredIList,{multiInsuredMaxNum:g=1,multiInsuredMinNum:v=1,multiInsuredSupportFlag:y}=(null==de?void 0:de.config)||{},V=h.isView||u>c?Math.min(u,g):c||v,O=W(n);de.insured=Array.from({length:V}).reduce(((e,i,n)=>{const{personVO:r,config:o={},guardian:a,beneficiaryList:s}=(null==O?void 0:O[n])||{},l=W(0===n?p:f);return e[n]?(e[n].schema=l.schema,b(e[n],{...W(l),personVO:r,config:o,guardian:a,beneficiaryList:s})):e[n]={...W(l),personVO:r,config:o,guardian:a,beneficiaryList:s,nanoid:x()},e}),de.insured)}),0),{deep:!0,immediate:!0}),r((()=>de.list),((e,i)=>{e&&(de.list=e)})),m({validate:be,validateTrialFields:Oe,validateHolder:(...e)=>{var i;return null==(i=ee.value)?void 0:i.validate(...e)},canTrail:()=>de.trialValidated}),A((()=>{ie({currentIndex:de.currentIndex,currentBenifitIndex:de.currentBenifitIndex,scrollTop:I.value})})),R((()=>{const e=ne(),i=re();de.currentType=C.query.selectedType||de.currentType,console.log("onActivated:",i),i&&(de.currentIndex=i.currentIndex,de.currentBenifitIndex=i.currentBenifitIndex,document.documentElement.scrollTo(0,i.scrollTop),document.body.scrollTop=i.scrollTop,oe()),e&&(he(e),ae())})),(e,i)=>{var n,r;const o=_,m=w,p=U;return a(),k(N,null,[d(Le)&&d(ue)?(a(),s(d(c),{key:0,ref_key:"holderFormRef",ref:ee,title:"投保人信息",class:"personal-info-card",model:d(de).holder.personVO,schema:d(de).holder.schema,config:d(de).holder.config,"is-view":e.isView,"extra-provision":{objectType:d(u).HOLDER,objectId:null==(r=null==(n=d(de).holder)?void 0:n.personVO)?void 0:r.id},onOcr:ce},{customer:l((()=>[d(ye)?(a(),k("div",{key:0,class:"choose-customer",onClick:i[0]||(i[0]=e=>Ve("holder",1,0))},[j(o,{name:"customer",color:"#333"})])):F("",!0)])),_:1},8,["model","schema","config","is-view","extra-provision"])):F("",!0),d(xe)&&!e.isOnlyHolder?(a(),k(N,{key:1},[(a(!0),k(N,null,H(d(de).insured,((i,n)=>{var r;return a(),s(me,q({ref_for:!0,ref_key:"insuredFormRef",ref:te,key:`${i.nanoid}_${n}`,modelValue:i.personVO,"onUpdate:modelValue":e=>i.personVO=e,"beneficiary-list":i.beneficiaryList,"onUpdate:beneficiaryList":e=>i.beneficiaryList=e,guardian:i.guardian,"onUpdate:guardian":e=>i.guardian=e,title:""+(d(de).insured.length>1?`被保人${n+1}`:"被保人信息"),"holder-person-v-o":d(de).holder.personVO},i,{"beneficiary-schema":d(de).beneficiarySchema,"guardian-schema":d(de).guardianSchema,"is-view":e.isView,"multi-beneficiary-num":null==(r=d(de).config)?void 0:r.multiBeneficiaryMaxNum}),{riskList:l((()=>[t(e.$slots,"riskInfo",{insuredIndex:n},void 0,!0)])),customer:l((()=>[1!=+i.personVO.relationToHolder&&d(ye)?(a(),k("div",{key:0,class:"choose-customer",onClick:e=>Ve("insured",n,0,i.personVO.relationToHolder)},[j(o,{name:"customer",color:"#333"})],8,pe)):F("",!0)])),guardianCustomer:l((e=>[d(ye)?(a(),k("div",{key:0,class:"choose-customer",onClick:e=>Ve("guardian",n,0,i.guardian.personVO.relationToInsured)},[j(o,{name:"customer",color:"#333"})],8,fe)):F("",!0)])),benefitCustomer:l((e=>[d(ye)?(a(),k("div",{key:0,class:"choose-customer",onClick:r=>{var o;return Ve("benifit",n,null==e?void 0:e.index,null==(o=i.beneficiaryList[null==e?void 0:e.index])?void 0:o.personVO.relationToInsured)}},[j(o,{name:"customer",color:"#333"})],8,ge)):F("",!0)])),default:l((()=>[!e.isView&&n+1>d(de).config.multiInsuredMinNum?(a(),k("span",{key:0,class:"delete-button",onClick:e=>(e=>{B.confirm({message:"确定要删除该被保人吗？"}).then((()=>{de.insured.splice(e,1)}))})(n)},[j(o,{name:"delete",color:"var(--van-primary-color)"})],8,ve)):F("",!0)])),_:2},1040,["modelValue","onUpdate:modelValue","beneficiary-list","onUpdate:beneficiaryList","guardian","onUpdate:guardian","title","holder-person-v-o","beneficiary-schema","guardian-schema","is-view","multi-beneficiary-num"])})),128)),!e.isView&&d(Se)?(a(),s(p,{key:0,class:"add-button-wrap"},{title:l((()=>[D("span",{class:"add-button",onClick:Ie},[j(m,{name:"plus"}),$("添加被保人")])])),_:1})):F("",!0)],64)):F("",!0)],64)}}}),[["__scopeId","data-v-0522e974"]]);export{Ve as P};
