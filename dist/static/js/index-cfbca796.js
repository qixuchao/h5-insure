import{d as e,j as i,r as n,z as r,aH as a,o,m as s,w as l,g as t,u as d,be as u,bf as c,_ as m,bg as p,bh as f,bi as g,bj as v,T as y,bk as V,ao as O,bl as h,ah as b,bm as T,a6 as I,k as S,aK as L,bn as C,bb as w,bo as x,c as k,b as j,f as F,F as N,q as H,a8 as $,aJ as E,bp as _,ae as J,bq as B,i as P,ac as M,br as A,bs as R,bt as U,a0 as D,a as q,a9 as Y,bu as K,bd as z,bv as G,bw as Q}from"./index-4f878428.js";import{c as W}from"./cloneDeep-31dd2306.js";import"./PolicyInfo-ef327f17.js";import{l as X}from"./lodash-6e3a0c04.js";import{B as Z}from"./infoCollection-27c16b65.js";import{O as ee}from"./questionnaire-42dcb602.js";import{s as ie,g as ne,a as re,c as ae,b as oe,t as se,i as le}from"./util-15e4deda.js";const te=e({name:"BeneficiaryItem"});var de=m(e({...te,props:{modelValue:{default:()=>({})},schema:{default:()=>[]},config:{default:()=>({})},isView:{type:Boolean,default:!1},isTrial:{type:Boolean,default:!1},title:{default:"受益人"},holderPersonVO:{default:()=>({})}},emits:["update:modelValue","trailChange"],setup(e,{expose:m,emit:S}){const L=e,C=i(null),w=n({validated:!1,schema:[],config:{},personVO:{}});r((()=>L.config),(e=>{e&&Object.assign(w.config,e)}),{deep:!0,immediate:!0}),r((()=>L.schema),(e=>{e&&(g(L.schema,L.modelValue,(()=>{w.personVO.certType="1"})),Object.assign(w.schema,W(L.schema)))}),{deep:!0,immediate:!0}),r((()=>W(L.modelValue)),((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&(v("受益人数据变动了"),Object.assign(w.personVO,e),g(L.schema,L.modelValue,(()=>{Object.assign(w.personVO,{certType:"1"})})))}),{deep:!0,immediate:!0}),r((()=>w.personVO),(e=>{e&&(`${w.personVO.isHolder}`!=`${I.YES}`&&(Object.keys(w.personVO).filter((e=>{var i,n;return!(!["gender","birthday","certType","certNo","name"].includes(e)||!w.personVO[e]||`${null==(i=w.personVO)?void 0:i[e]}`!=`${null==(n=null==L?void 0:L.holderPersonVO)?void 0:n[e]}`)}))||[]).length>=2&&y("录入的受益人同投保人基本信息，请勾选“同投保人"),S("update:modelValue",e))}),{deep:!0,immediate:!0});return r((()=>L.holderPersonVO),a((e=>{(e=>{var i,n;const r={};(null==(i=w.personVO)?void 0:i.age)&&(null==(n=w.personVO)?void 0:n.age)<18&&(w.schema.find((e=>"mobile"===e.name))&&(r.mobile=(null==e?void 0:e.mobile)||""),w.schema.find((e=>"annuallyComeList"===e.name))&&(r.annuallyComeList=["7"],r.annuallyComeDesc="无")),Object.assign(w.personVO,r)})(e)}),300),{deep:!0,immediate:!0}),r((()=>{var e;return null==(e=w.personVO)?void 0:e.relationToInsured}),((e,i)=>{if(e===i)return!1;v("受益人与被保人关系变动了");const{certType:n}=w.personVO||{},[r,a]=V(w.schema,{certType:n,relationToHolder:e}),o={gender:{...a.gender,isView:L.isView}};if(!L.isView&&e!==i&&i){let i=null;"3"==`${e}`&&(o.gender.isView=!0,i=O.FEMALE),"2"==`${e}`&&(o.gender.isView=!0,i=O.MALE),Object.assign(w.personVO,{...h(w.personVO,(e=>!(r&&"certType"===e))),gender:i,relationToInsured:e})}return b(w.config,a,o),!1}),{immediate:!0}),r((()=>{var e;return null==(e=w.personVO)?void 0:e.nationalityCode}),((e,i)=>{e!==i&&b(w.config,T(w.personVO))}),{immediate:!0}),m({validate:e=>f(C,L.trialFactorCodes,e),validateTrialFields:()=>p({personVO:w.personVO,trialFactorCodes:L.trialFactorCodes})}),(i,n)=>(o(),s(d(c),{ref_key:"formRef",ref:C,class:"personal-info-card",title:e.title,model:d(w).personVO,schema:d(w).schema,config:d(w).config,"is-view":e.isView,"extra-provision":{objectType:d(u).BENEFICIARY,objectId:d(w).personVO.id}},{cardTitleExtra:l((()=>[t(i.$slots,"default",{},void 0,!0)])),"header-item":l((()=>[t(i.$slots,"header-item",{},void 0,!0)])),customer:l((()=>[t(i.$slots,"customer",{},void 0,!0)])),_:3},8,["title","model","schema","config","is-view","extra-provision"]))}}),[["__scopeId","data-v-43de123e"]]);const ue=["onClick"],ce=e({name:"InsuredItem"});var me=m(e({...ce,props:{modelValue:{default:()=>({})},title:{default:""},holderPersonVO:{default:()=>({})},schema:{default:()=>[]},config:{default:()=>({})},isView:{type:Boolean,default:!1},isTrial:{type:Boolean,default:!1},trialFactorCodes:{default:()=>[]},multiBeneficiaryMaxNum:{default:null},beneficiaryList:{default:()=>[]},beneficiarySchema:{default:()=>[]},guardian:{default:()=>({})},guardianSchema:{default:()=>[]}},emits:["update:modelValue","update:beneficiaryList","update:guardian"],setup(e,{expose:a,emit:m}){const B=e,P=i(null),M=i(null),A=i(null),R=i(null),U={schema:[],trialFactorCodes:[],config:{occupationCode:{isView:!0}},personVO:{}},D=n({validated:!1,schema:[],config:{},personVO:{},beneficiaryTypeSchemaList:[],beneficiarySchemaList:[],beneficiaryList:[],guardianSchema:[],guardian:{personVO:{},config:{}}}),q=i(!1),Y=S((()=>{const{age:e,relationToHolder:i}=D.personVO;return!["1","4","5"].includes(`${i}`)&&null!==e&&+e<18||(D.guardian={personVO:{},config:{}},!1)})),K=()=>{const e={};return D.beneficiarySchemaList.reduce(((e,i)=>{var n,r;return(null==(n=B.holderPersonVO)?void 0:n[i.name])&&(e[i.name]=null==(r=B.holderPersonVO)?void 0:r[i.name]),e}),e),e},z=(e={})=>{const i=e;return D.beneficiarySchemaList.reduce(((e,i)=>{var n;return(null==(n=B.holderPersonVO)?void 0:n[i.name])&&(e[i.name]=null),e}),i),i},G=()=>{D.beneficiaryList.push(W({...U,nanoid:C(),schema:B.beneficiarySchema}))},Q=S((()=>!B.multiBeneficiaryMaxNum||D.beneficiaryList.length<B.multiBeneficiaryMaxNum)),ie=S((()=>!D.schema.filter((e=>{var i;return!(e.hidden||(null==(i=D.config[e.name])?void 0:i.hidden))})).length)),ne=S((()=>D.schema.filter((e=>e.isSelfInsuredNeed)).map((e=>e.name)))),re=S((()=>L(B.beneficiarySchema))),ae=S((()=>{var e;return String(null==(e=D.personVO)?void 0:e.insuredBeneficiaryType)===Z.SPECIFY})),oe=i(!0);return r((()=>B.holderPersonVO),X.exports.debounce((e=>{var i;v("------投保人信息变动了-----");const{id:n,...r}=e||{};if("1"===String(null==(i=D.personVO)?void 0:i.relationToHolder)){q.value=!0;const e=L(ne.value)?Object.keys(r).reduce(((e,i)=>([...ne.value,"occupationClass"].includes(i)&&!["birthday","age","gender"].includes(i)||(e[i]=r[i]),e)),{}):r,i=(r.certImage||[]).map((e=>({...e,objectId:D.personVO.id,objectType:ee.INSURED})));Object.assign(D.personVO,e,{certImage:i})}else((e,i)=>{if(!oe.value)return;const n={};(null==i?void 0:i.age)&&(+i.age||0)<18&&(D.schema.find((e=>"mobile"===e.name))&&(n.mobile=(null==e?void 0:e.mobile)||""),D.schema.find((e=>"personalAnnualIncome"===e.name))&&(D.personVO.personalAnnualIncome="0"),D.schema.find((e=>"annuallyComeList"===e.name))&&(n.annuallyComeList=["7"],n.annuallyComeDesc="无")),oe.value=!1,Object.assign(D.personVO,n)})(e,D.personVO),q.value=!1}),300),{deep:!0,immediate:!0}),r([()=>{var e;return null==(e=B.holderPersonVO)?void 0:e.familyAnnualIncome},()=>{var e;return null==(e=D.personVO)?void 0:e.familyAnnualIncome}],X.exports.debounce((([e,i],[n,r])=>{(e!==n&&(+e).toFixed().length>5||i!==r&&(+i).toFixed().length>5)&&y("请核实年收入是否准确")}),300)),r((()=>B.beneficiarySchema),(e=>{D.beneficiarySchemaList=L(e)?e.filter((e=>"insuredBeneficiaryType"!==e.name)):[],D.beneficiaryTypeSchemaList=L(e)?e.filter((e=>"insuredBeneficiaryType"===e.name)):[]}),{deep:!0,immediate:!0}),r((()=>B.guardianSchema),(e=>{D.guardianSchema=e}),{deep:!0,immediate:!0}),r(ae,((e,i)=>{String(e)!==String(i)&&(v("受益人类型关系变动了"),e?(D.beneficiaryList=L(B.beneficiaryList)?B.beneficiaryList.map((e=>({...e,nanoid:e.nanoid||C()}))):[],!L(D.beneficiaryList)&&G()):D.beneficiaryList=[])}),{immediate:!0}),r((()=>W(D.beneficiaryList).map((e=>({personVO:null==e?void 0:e.personVO,nanoid:e.nanoid})))),((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&m("update:beneficiaryList",e)}),{deep:!0,immediate:!0}),r((()=>{var e;return null==(e=D.personVO)?void 0:e.relationToHolder}),((e,i)=>{if(!e)return;v("与投保人关系变动了");const{personVO:n,schema:r=[],config:a}=D||{},{id:o,...s}=B.holderPersonVO||{},l="1"===String(n.relationToHolder);if(r.forEach((e=>{e.relationToHolder=n.relationToHolder,e.hidden=!e.isSelfInsuredNeed&&l})),!B.isView&&i&&String(e)!==String(i)){let e={...n,...s};const[i,o]=V(r,n);l||(e={...h(n,(e=>!(i&&"certType"===e))),relationToHolder:n.relationToHolder});const t={gender:{...a.gender,isView:B.isView}};"2"==`${n.relationToHolder}`&&(t.gender.isView=!0,e.gender=O.FEMALE),"3"==`${n.relationToHolder}`&&(t.gender.isView=!0,e.gender=O.MALE),b(a,t),Object.assign(D.personVO,e)}const[t,d]=V(r,n);b(a,d)}),{deep:!0}),r((()=>{var e;return null==(e=D.personVO)?void 0:e.nationalityCode}),((e,i)=>{e!==i&&b(D.config,T(D.personVO))}),{immediate:!0}),r((()=>{var e;return null==(e=D.guardian.personVO)?void 0:e.nationalityCode}),((e,i)=>{var n;e!==i&&b(D.guardian.config,T(null==(n=D.guardian)?void 0:n.personVO))}),{immediate:!0}),r((()=>{var e,i;return null==(i=null==(e=D.guardian)?void 0:e.personVO)?void 0:i.relationToInsured}),((e,i)=>{if(e===i)return;v("监护人与被保人关系变动了");const{certType:n}=D.guardian.personVO||{},[r,a]=V(D.guardianSchema,{certType:n,relationToInsured:e}),o={gender:{...a.gender,isView:B.isView}};if(!B.isView&&e!==i){let n=null;"2"==`${e}`&&(o.gender.isView=!0,n=O.FEMALE),"3"==`${e}`&&(o.gender.isView=!0,n=O.MALE),i&&Object.assign(D.guardian.personVO,{...h(D.guardian.personVO,(e=>!(r&&"certType"===e))),gender:n,relationToInsured:e})}b(D.guardian.config,a,o)}),{immediate:!0}),r((()=>{var e;return null==(e=D.personVO)?void 0:e.relationToMainInsured}),((e,i)=>{if(!e)return;v("次被保人与主被保人关系变动了");const{personVO:n,schema:r=[],config:a}=D||{},{certType:o}=n||{},[s,l]=V(r,{certType:o,relationToHolder:e});b(a,l),!B.isView&&i&&String(e)!==String(i)&&Object.assign(D.personVO,{...h(n,(e=>!(s&&"certType"===e))),relationToMainInsured:n.relationToMainInsured})})),r((()=>B.config),(e=>{e&&Object.assign(D.config,e)}),{deep:!0,immediate:!0}),r((()=>B.schema),((e,i)=>{var n;if(e&&JSON.stringify(e)!==JSON.stringify(D.schema)){const i="1"===String(null==(n=B.modelValue)?void 0:n.relationToHolder);D.schema=W(e).map((e=>{var n;return g(B.schema,B.modelValue,(()=>{D.personVO.certType="1"})),e.relationToHolder=null==(n=B.modelValue)?void 0:n.relationToHolder,e.hidden=!e.isSelfInsuredNeed&&i,e}))}}),{deep:!0,immediate:!0}),r((()=>W(B.modelValue)),((e,i)=>{if(JSON.stringify(e)!==JSON.stringify(i)){const{beneficiaryList:n,...r}=e;e.age!==(null==i?void 0:i.age)&&e.age&&(oe.value=!0),b(D.personVO,r),g(B.schema,B.modelValue,(()=>{D.personVO.certType="1"}))}}),{deep:!0,immediate:!0}),r((()=>W(B.beneficiaryList)),X.exports.debounce(((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&(D.beneficiaryList=L(e)?e.map((e=>({...e,nanoid:e.nanoid||C()}))):[])}),500),{deep:!0,immediate:!0}),r((()=>{var e;return null==(e=B.guardian)?void 0:e.personVO}),((e,i)=>{console.log("value",e),JSON.stringify(e)!==JSON.stringify(i)&&Object.assign(D.guardian.personVO,e)}),{deep:!0,immediate:!0}),r((()=>D.personVO),(e=>{e&&m("update:modelValue",e)}),{deep:!0,immediate:!0}),a({validate:e=>{var i;return Promise.all([f(P,B.trialFactorCodes,e),f(R,[],e),f(M,[],e),...(null==(i=A.value)?void 0:i.map((i=>i.validate(e))))||[]])},validateTrialFields:()=>p({personVO:D.personVO,trialFactorCodes:B.trialFactorCodes})}),(i,n)=>{var r,a;const m=w,p=_,f=J,g=x;return o(),k(N,null,[j(d(c),{ref_key:"insuredFormRef",ref:P,class:"personal-info-card",title:d(ie)?"":e.title,model:d(D).personVO,schema:d(D).schema,config:d(D).config,"is-view":e.isView,"extra-provision":{objectType:d(u).INSURED,objectId:d(D).personVO.id}},{cardTitleExtra:l((()=>[t(i.$slots,"default",{},void 0,!0)])),customer:l((()=>[t(i.$slots,"customer",{},void 0,!0)])),_:3},8,["title","model","schema","config","is-view","extra-provision"]),d(Y)?(o(),s(d(c),{key:0,ref_key:"guardianFormRef",ref:R,class:"personal-info-card",title:"监护人",model:d(D).guardian.personVO,schema:d(D).guardianSchema,config:d(D).config,"is-view":e.isView,"extra-provision":{objectType:d(u).GUARDIAN,objectId:null==(a=null==(r=d(D).guardian)?void 0:r.personVO)?void 0:a.id}},{cardTitleExtra:l((()=>[t(i.$slots,"default",{},void 0,!0)])),customer:l((()=>[t(i.$slots,"guardianCustomer",{},void 0,!0)])),_:3},8,["model","schema","config","is-view","extra-provision"])):F("",!0),d(re)?(o(),k(N,{key:1},[j(d(c),{ref_key:"beneficiaryTypeFormRef",ref:M,class:"personal-info-card",title:"受益人",model:d(D).personVO,schema:d(D).beneficiaryTypeSchemaList,"is-view":e.isView},null,8,["model","schema","is-view"]),d(ae)?(o(),k(N,{key:0},[(o(!0),k(N,null,H(d(D).beneficiaryList,((n,r)=>{var a;return o(),s(de,{ref_for:!0,ref_key:"beneficiaryFormRef",ref:A,key:`${n.nanoid}_${r}`,modelValue:n.personVO,"onUpdate:modelValue":e=>n.personVO=e,title:`受益人${r+1}`,schema:d(D).beneficiarySchemaList,config:n.config,"holder-person-v-o":e.holderPersonVO,"is-view":e.isView||(null==(a=n.personVO)?void 0:a.isHolder)===d(I).YES},{customer:l((()=>[t(i.$slots,"benefitCustomer",{index:r},void 0,!0)])),"header-item":l((()=>[j(p,{label:"是否同投保人","input-align":"right"},{input:l((()=>[j(m,{modelValue:n.personVO.isHolder,"onUpdate:modelValue":e=>n.personVO.isHolder=e,"active-value":1,"inactive-value":2,disabled:d(q),onClick:()=>(e=>{var i,n,r;`${null==(r=null==(n=null==(i=D.beneficiaryList)?void 0:i[e])?void 0:n.personVO)?void 0:r.isHolder}`==`${I.YES}`?B.holderPersonVO&&(D.beneficiaryList=D.beneficiaryList.map(((i,n)=>e===n?{...i,personVO:{...null==i?void 0:i.personVO,...K()},config:{...i.config,benefitRate:{isView:!1},benefitOrder:{isView:!1},relationToInsured:{isView:!1},beneficiaryType:{isView:!1}}}:i))):D.beneficiaryList=D.beneficiaryList.map(((i,n)=>{var r,a;return e===n?{...i,personVO:{...z(null==(a=null==(r=D.beneficiaryList)?void 0:r[e])?void 0:a.personVO)}}:i}))})(r)},{default:l((()=>[$("同投保人")])),_:2},1032,["modelValue","onUpdate:modelValue","disabled","onClick"])])),_:2},1024)])),default:l((()=>[r>0&&!e.isView?(o(),k("span",{key:0,class:"delete-button",onClick:e=>(e=>{E.confirm({message:"确定要删除该受益人吗？"}).then((()=>{D.beneficiaryList.splice(e,1)}))})(r)},[j(f,{name:"delete"})],8,ue)):F("",!0)])),_:2},1032,["modelValue","onUpdate:modelValue","title","schema","config","holder-person-v-o","is-view"])})),128)),!e.isView&&d(Q)?(o(),k("span",{key:0,class:"add-button",onClick:G},[j(g,{name:"plus"}),$("添加受益人")])):F("",!0)],64)):F("",!0)],64)):F("",!0),t(i.$slots,"riskList",{},void 0,!0)],64)}}}),[["__scopeId","data-v-f8d7003c"]]);const pe=["onClick"],fe=["onClick"],ge=["onClick"],ve=["onClick"],ye=e({name:"PersonalInfo"});var Ve=m(e({...ye,props:{productFactor:{default:()=>({})},modelValue:{default:()=>({})},isTrial:{type:Boolean,default:!1},isView:{type:Boolean,default:!1},isOnlyHolder:{type:Boolean,default:!1},isHolderExempt:{type:Boolean,default:!1},multiInsuredConfig:null},emits:["update:modelValue","trailChange","trailValidateFailed","closeCustomerPopoup","update-bank"],setup(e,{expose:m,emit:g}){const O=e,{x:h,y:I}=B(),w=P(),_=M(),{isShare:X,saleChannelId:Z}=w.query,ee=i(null),te=i(null),de=n({count:0,slotProps:{},uniqKey:"",currentIndex:0,currentBenifitIndex:0,currentType:"",keyword:void 0,show:!1,list:[],config:{},trialValidated:!1,holder:{personVO:{},schema:[],trialFactorCodes:[],config:{occupationCode:{isView:!0}}},beneficiarySchema:[],initInsuredIList:[],insured:[]}),ue=S((()=>!O.isTrial||O.isHolderExempt)),ce=e=>{Object.assign(de.holder.personVO,e)},ye=S((()=>!(X||O.isView||O.isTrial||_))),Ve=(e,i,n,r)=>{de.currentType=e,"benifit"!==e?de.currentIndex=i:(de.currentIndex=i,de.currentBenifitIndex=n);const{selectedType:a,customerId:o,selected:s,...l}=w.query;console.log("选择的关系relation:",r),Y("customerList",{...l,selectedType:e,relation:r})},Oe=e=>{var i,n,r,a,o,s,l,t,d,u;const c="holder"===de.currentType?de.holder.schema.map((e=>e.name))||[]:"insured"===de.currentType?de.insured[de.currentIndex].schema.map((e=>e.name))||[]:"benifit"===de.currentType?de.beneficiarySchema.map((e=>e.name))||[]:"guardian"===de.currentType&&de.guardianSchema.map((e=>e.name))||[];c.push("certEndType","age","gender");const m=se(e,c);if(console.log(de.currentType,"的keys:",c,"转换后的客户信息:",m),"holder"===de.currentType)console.log("当前是投保人选信息state?.holder:",null==de?void 0:de.holder),Object.assign(null==(i=null==de?void 0:de.holder)?void 0:i.personVO,m),g("update-bank",e.bankCardInfo);else if("insured"===de.currentType){const e=null==(n=null==de?void 0:de.insured[de.currentIndex])?void 0:n.schema.some((e=>"relationToHolder"===e.name&&e.attributeValueList.some((e=>"1"===e.code))));if(le(null==(r=null==de?void 0:de.holder)?void 0:r.personVO,m))return e?void Object.assign((null==(a=null==de?void 0:de.insured[de.currentIndex])?void 0:a.personVO)||{},{relationToHolder:"1"}):void y("与投保人关系未配置本人");Object.assign((null==(o=null==de?void 0:de.insured[de.currentIndex])?void 0:o.personVO)||{},m)}else"benifit"===de.currentType?le(null==(s=null==de?void 0:de.insured[de.currentIndex])?void 0:s.personVO,m)?y("指定受益人不可为被保人本人"):Object.assign((null==(t=null==(l=null==de?void 0:de.insured[de.currentIndex])?void 0:l.beneficiaryList[de.currentBenifitIndex])?void 0:t.personVO)||{},m):"guardian"===de.currentType&&(console.log("selectedCustomer",m),Object.assign((null==(u=null==(d=null==de?void 0:de.insured[de.currentIndex])?void 0:d.guardian)?void 0:u.personVO)||{},m))},he=()=>{var e;const i=!te.value||(null==(e=te.value)?void 0:e.every((e=>e.validateTrialFields())));return(!ee.value||p(de.holder))&&i},be=e=>{var i;return Promise.all([...(null==(i=te.value)?void 0:i.map((i=>i.validate(e))))||[],f(ee,de.holder.trialFactorCodes,e)])},Te=e=>{const{productList:i,config:n,schema:r,trialFactorCodes:a,beneficiaryList:o,guardian:s,personVO:l,nanoid:t,...d}=W(e)||{};return d},Ie=()=>{const{length:e,[e-1]:i}=de.initInsuredIList;de.insured.push(W({...i,nanoid:C()}))},Se=S((()=>{const{multiInsuredMaxNum:e,multiInsuredSupportFlag:i}=de.config;return i&&(!e||de.insured.length<e)})),Le=S((()=>L(de.holder.schema))),Ce=S((()=>de.insured.some((e=>L(e.schema))))),we=(e,i)=>L(e)?e.reduce(((e,n)=>(e[n]=i[n],e)),{}):{},xe=(e,i,n={})=>!!L(e)&&JSON.stringify(we(e,i))!==JSON.stringify(we(e,n));r((()=>{var e;return null==(e=de.holder.personVO)?void 0:e.certType}),a(((e,i)=>{if(`${e}`==`${i}`)return!1;v("投保人信息变动了====");const[n,r]=V(de.holder.schema,{certType:e});return b(de.holder.config,r),!1}),0)),r((()=>{var e;return null==(e=de.holder.personVO)?void 0:e.nationalityCode}),((e,i)=>{e!==i&&b(de.holder.config,T(de.holder.personVO))}),{immediate:!0});let ke=!1;r([()=>{var e;return{...null==(e=de.holder)?void 0:e.personVO}},()=>de.insured.map((e=>{const{beneficiaryList:i,guardian:n,personVO:r}=e||{},a=L(i)?i.map((e=>({...null==e?void 0:e.personVO}))):[];return{...r,guardian:(null==n?void 0:n.personVO)||{},beneficiaryList:a}}))],a(((e,i)=>{var n,r,a,o;if(JSON.stringify(e)===JSON.stringify(i)&&ke)return ke=!0,!1;ke=!1;const[s,l]=e,t=((e,i)=>{const n=xe(de.holder.trialFactorCodes,null==e?void 0:e[0],null==i?void 0:i[0]),r=de.insured.some(((e,n)=>{var r;const{trialFactorCodes:a,personVO:o}=e;return xe(a,o,null==(r=i[1])?void 0:r[n])}));return n||r})([s,l],i),{insuredList:d}=O.modelValue,u={holder:s,insuredList:l.map(((e,i)=>({...(null==d?void 0:d[i])||{},...e})))};if(null==(n=de.config)?void 0:n.isSpouseInsured){const[e,i]=l.map((e=>null==e?void 0:e.gender));if(e&&i&&String(e)===String(i))return y("被保人性别与投保要求不符")}if(JSON.stringify(null==(r=null==l?void 0:l[0])?void 0:r.personVO),Te(null==(o=null==(a=O.modelValue)?void 0:a.insuredList)?void 0:o[0]),console.log("-------result = ",u),g("update:modelValue",u),!he())return de.trialValidated=!1,g("trailValidateFailed",u);be(!0).then((()=>{console.log("trialEnd"),de.trialValidated=!0,!O.isOnlyHolder&&t&&g("trailChange",u)})).catch((()=>{de.trialValidated=!1,g("trailValidateFailed",u)}))}),0),{deep:!0}),r([()=>O.productFactor,()=>O.isTrial],a(((e,i)=>{if(K(e,i)||!(null==e?void 0:e[0]))return!1;v("投被保人要素变动了");const{insuredFactorCodes:n,holderFactorCodes:r}=z(G)||{},{holder:a,insured:o,beneficiary:s,guardian:l,config:t}=Q(e[0],{isTrial:e[1],...O.multiInsuredConfig,insuredFactorCodes:n,holderFactorCodes:r});return Object.assign(de.holder,a),de.config=t,L(o)&&(de.initInsuredIList=o.map((e=>({...e,guardian:{},beneficiaryList:[]})))),de.beneficiarySchema=W((null==s?void 0:s.schema)||[]),de.guardianSchema=W((null==l?void 0:l.schema)||[]),!1}),300),{deep:!0,immediate:!0}),r((()=>{var e,i,n,r;return null==(r=null==(n=null==(i=null==(e=null==de?void 0:de.insured)?void 0:e[de.currentIndex])?void 0:i.guardian)?void 0:n.personVO)?void 0:r.relationToInsured}),((e,i)=>{e!==i&&i&&(v("监护人关系变动了+++++"),Object.assign(de.insured[de.currentIndex],{guardian:{personVO:{relationToInsured:e}}}))}));const je=i(!1);return r([()=>{const{holder:e,insuredList:i=[]}=O.modelValue,n=L(i)?i.map((e=>({config:e.config,personVO:Te(e),guardian:{personVO:e.guardian||{}},beneficiaryList:L(e.beneficiaryList)?e.beneficiaryList.map((({config:e,...i})=>({config:e,personVO:Te(i)}))):[]}))):[];return[null==e?void 0:e.config,Te(e),n]},()=>de.config,()=>de.initInsuredIList],a((([[e,i,n],r,a],[[o,s,l],t,d])=>{if(console.log("initInsuredTempData",W(a),W(d)),JSON.stringify(e)===JSON.stringify(o)&&JSON.stringify(i)===JSON.stringify(s)&&JSON.stringify(n)===JSON.stringify(l)&&JSON.stringify(a)===JSON.stringify(d)&&je.value)return;je.value=!0,Object.assign(de.holder.config,e),console.log("投保人数据===",W(de.holder.personVO),W(i)),console.log("投保人数据===",W(de.holder.personVO),W(i)),Object.assign(de.holder.personVO,i);const{length:u}=n||[],{length:c}=de.insured,{length:m,0:p={},[m-1]:f}=de.initInsuredIList,{multiInsuredMaxNum:g=1,multiInsuredMinNum:v=1,multiInsuredSupportFlag:y}=(null==de?void 0:de.config)||{},V=O.isView||u>c?Math.min(u,g):c||v,h=W(n);console.log("initInsuredTempData",V),de.insured=Array.from({length:V}).reduce(((e,i,n)=>{const{personVO:r,config:a={},guardian:o,beneficiaryList:s}=(null==h?void 0:h[n])||{},l=W(0===n?p:f);return console.log("initInsuredTempData",l),e[n]?(e[n].schema=l.schema,b(e[n],{...W(l),personVO:r,config:a,guardian:o,beneficiaryList:s})):e[n]={...W(l),personVO:r,config:a,guardian:o,beneficiaryList:s,nanoid:C()},e}),de.insured)}),0),{deep:!0,immediate:!0}),r((()=>de.list),((e,i)=>{e&&(de.list=e)})),m({validate:be,validateTrialFields:he,validateHolder:(...e)=>{var i;return null==(i=ee.value)?void 0:i.validate(...e)},canTrail:()=>de.trialValidated}),A((()=>{ie({currentIndex:de.currentIndex,currentBenifitIndex:de.currentBenifitIndex,scrollTop:I.value})})),R((()=>{const e=ne(),i=re();de.currentType=w.query.selectedType||de.currentType,console.log("onActivated:",i),i&&(de.currentIndex=i.currentIndex,de.currentBenifitIndex=i.currentBenifitIndex,document.documentElement.scrollTo(0,i.scrollTop),document.body.scrollTop=i.scrollTop,ae()),e&&(Oe(e),oe())})),(i,n)=>{var r,a;const m=J,p=x,f=U;return o(),k(N,null,[d(Le)&&d(ue)?(o(),s(d(c),{key:0,ref_key:"holderFormRef",ref:ee,title:"投保人信息",class:"personal-info-card",model:d(de).holder.personVO,schema:d(de).holder.schema,config:d(de).holder.config,"is-view":e.isView,"extra-provision":{objectType:d(u).HOLDER,objectId:null==(a=null==(r=d(de).holder)?void 0:r.personVO)?void 0:a.id},onOcr:ce},{customer:l((()=>[d(ye)?(o(),k("div",{key:0,class:"choose-customer",onClick:n[0]||(n[0]=e=>Ve("holder",1,0))},[j(m,{name:"customer",color:"#333"})])):F("",!0)])),_:1},8,["model","schema","config","is-view","extra-provision"])):F("",!0),d(Ce)&&!e.isOnlyHolder?(o(),k(N,{key:1},[(o(!0),k(N,null,H(d(de).insured,((n,r)=>{var a;return o(),s(me,D({ref_for:!0,ref_key:"insuredFormRef",ref:te,key:`${n.nanoid}_${r}`,modelValue:n.personVO,"onUpdate:modelValue":e=>n.personVO=e,"beneficiary-list":n.beneficiaryList,"onUpdate:beneficiaryList":e=>n.beneficiaryList=e,guardian:n.guardian,"onUpdate:guardian":e=>n.guardian=e,title:""+(d(de).insured.length>1?`被保人${r+1}`:"被保人信息"),"holder-person-v-o":d(de).holder.personVO},n,{"beneficiary-schema":d(de).beneficiarySchema,"guardian-schema":d(de).guardianSchema,"is-view":e.isView,"multi-beneficiary-num":null==(a=d(de).config)?void 0:a.multiBeneficiaryMaxNum}),{riskList:l((()=>[t(i.$slots,"riskInfo",{insuredIndex:r},void 0,!0)])),customer:l((()=>[1!=+n.personVO.relationToHolder&&d(ye)?(o(),k("div",{key:0,class:"choose-customer",onClick:e=>Ve("insured",r,0,n.personVO.relationToHolder)},[j(m,{name:"customer",color:"#333"})],8,pe)):F("",!0)])),guardianCustomer:l((e=>[d(ye)?(o(),k("div",{key:0,class:"choose-customer",onClick:e=>Ve("guardian",r,0,n.guardian.personVO.relationToInsured)},[j(m,{name:"customer",color:"#333"})],8,fe)):F("",!0)])),benefitCustomer:l((e=>[d(ye)?(o(),k("div",{key:0,class:"choose-customer",onClick:i=>{var a;return Ve("benifit",r,null==e?void 0:e.index,null==(a=n.beneficiaryList[null==e?void 0:e.index])?void 0:a.personVO.relationToInsured)}},[j(m,{name:"customer",color:"#333"})],8,ge)):F("",!0)])),default:l((()=>[!e.isView&&r+1>d(de).config.multiInsuredMinNum?(o(),k("span",{key:0,class:"delete-button",onClick:e=>(e=>{E.confirm({message:"确定要删除该被保人吗？"}).then((()=>{de.insured.splice(e,1)}))})(r)},[j(m,{name:"delete",color:"var(--van-primary-color)"})],8,ve)):F("",!0)])),_:2},1040,["modelValue","onUpdate:modelValue","beneficiary-list","onUpdate:beneficiaryList","guardian","onUpdate:guardian","title","holder-person-v-o","beneficiary-schema","guardian-schema","is-view","multi-beneficiary-num"])})),128)),!e.isView&&d(Se)?(o(),s(f,{key:0,class:"add-button-wrap"},{title:l((()=>[q("span",{class:"add-button",onClick:Ie},[j(p,{name:"plus"}),$("添加被保人")])])),_:1})):F("",!0)],64)):F("",!0)],64)}}}),[["__scopeId","data-v-00171b62"]]);export{Ve as P};
