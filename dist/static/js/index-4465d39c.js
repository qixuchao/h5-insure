import{d as e,i,r as n,z as r,o,l as a,w as l,f as s,u as t,aL as d,_ as c,j as u,aA as m,aM as p,c as f,b as v,q as y,F as h,n as g,a8 as V,az as b,ae as O,aN as T,h as I,ac as S,T as w,aK as x,aO as L,a0 as C,a as k,ap as j,as as F,at as N,au as _}from"./index-e18db70e.js";import{S as B}from"./index-1a4da0a6.js";import{_ as H,a as $}from"./empth-c0adfdba.js";import{c as M}from"./cloneDeep-5d541e55.js";import{d as P}from"./debounce-6981b306.js";import{m as J}from"./merge-e7788e50.js";import{c as E,g as R,r as U,P as q,v as A,a as D,i as K,t as z}from"./index-e15b0217.js";import"./PayInfo-d9c5f190.js";import{h as Y}from"./trial-d080f2d6.js";import{l as G}from"./lodash-5c2f28b0.js";import{B as Q}from"./infoCollection-5ec4d8c9.js";import{L as W}from"./index-7980b223.js";import{S as X}from"./search-051f89cc.js";const Z=e({name:"BeneficiaryItem"});var ee=c(e({...Z,props:{modelValue:{default:()=>({})},schema:{default:()=>[]},config:{default:()=>({})},isView:{type:Boolean,default:!1},isTrial:{type:Boolean,default:!1},title:{default:"受益人"}},emits:["update:modelValue","trailChange"],setup(e,{expose:c,emit:u}){const m=e,p=i(null),f=n({validated:!1,schema:[],config:{},personVO:{}});return r((()=>m.config),(e=>{e&&Object.assign(f.config,e)}),{deep:!0,immediate:!0}),r((()=>m.schema),(e=>{e&&Object.assign(f.schema,M(m.schema))}),{deep:!0,immediate:!0}),r((()=>m.modelValue),((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&(E("受益人数据变动了"),Object.assign(f.personVO,e))}),{deep:!0,immediate:!0}),r((()=>f.personVO),(e=>{e&&u("update:modelValue",e)}),{deep:!0,immediate:!0}),r((()=>{var e;return null==(e=f.personVO)?void 0:e.relationToInsured}),((e,i)=>{if(e===i)return!1;E("受益人与被保人关系变动了");const{certType:n}=f.personVO||{},[r,o]=R(f.schema,{certType:n,relationToHolder:e});return J(f.config,o),!m.isView&&e&&i&&Object.assign(f.personVO,{...U(f.personVO,(e=>!(r&&"certType"===e))),relationToInsured:e}),!1}),{immediate:!0}),c({validate:e=>D(p,m.trialFactorCodes,e),validateTrialFields:()=>A({personVO:f.personVO,trialFactorCodes:m.trialFactorCodes})}),(e,i)=>(o(),a(t(q),{ref_key:"formRef",ref:p,class:"personal-info-card",title:e.title,model:t(f).personVO,schema:t(f).schema,config:t(f).config,"is-view":e.isView,"extra-provision":{objectType:t(d).BENEFICIARY,objectId:t(f).personVO.id}},{cardTitleExtra:l((()=>[s(e.$slots,"default",{},void 0,!0)])),customer:l((()=>[s(e.$slots,"customer",{},void 0,!0)])),_:3},8,["title","model","schema","config","is-view","extra-provision"]))}}),[["__scopeId","data-v-844ffeca"]]);const ie=["onClick"],ne=e({name:"InsuredItem"});var re=c(e({...ne,props:{modelValue:{default:()=>({})},title:{default:""},holderPersonVO:{},schema:{default:()=>[]},config:{default:()=>({})},isView:{type:Boolean,default:!1},isTrial:{type:Boolean,default:!1},trialFactorCodes:{default:()=>[]},multiBeneficiaryMaxNum:{default:null},beneficiaryList:{default:()=>[]},beneficiarySchema:{default:()=>[]},guardian:{default:()=>({})},guardianSchema:{default:()=>[]}},emits:["update:modelValue","update:beneficiaryList","update:guardian"],setup(e,{expose:c,emit:I}){const S=e,w=i(null),x=i(null),L=i(null),C={schema:[],trialFactorCodes:[],config:{},personVO:{}},k=n({validated:!1,schema:[],config:{},personVO:{},beneficiaryTypeSchemaList:[],beneficiarySchemaList:[],beneficiaryList:[],guardianSchema:[],guardian:{}}),j=u((()=>{const{age:e,relationToHolder:i}=k.personVO;return!["4","5"].includes(i)&&+e<18||(k.guardian={},!1)})),F=()=>{k.beneficiaryList.push(M({...C,nanoid:p(),schema:S.beneficiarySchema}))},N=u((()=>!S.multiBeneficiaryMaxNum||k.beneficiaryList.length<S.multiBeneficiaryMaxNum)),_=u((()=>!k.schema.filter((e=>{var i;return!(e.hidden||(null==(i=k.config[e.name])?void 0:i.hidden))})).length)),B=u((()=>k.schema.filter((e=>e.isSelfInsuredNeed)).map((e=>e.name)))),H=u((()=>m(S.beneficiarySchema))),$=u((()=>{var e;return String(null==(e=k.personVO)?void 0:e.insuredBeneficiaryType)===Q.SPECIFY}));return r((()=>S.holderPersonVO),(e=>{var i;E("------投保人信息变动了-----");const{id:n,...r}=e||{};if("1"===String(null==(i=k.personVO)?void 0:i.relationToHolder)){const e=m(B.value)?Object.keys(r).reduce(((e,i)=>([...B.value,"occupationClass"].includes(i)&&!["birthday","age","gender"].includes(i)||(e[i]=r[i]),e)),{}):r;Object.assign(k.personVO,e)}}),{deep:!0,immediate:!0}),r((()=>S.beneficiarySchema),(e=>{k.beneficiarySchemaList=m(e)?e.filter((e=>"insuredBeneficiaryType"!==e.name)):[],k.beneficiaryTypeSchemaList=m(e)?e.filter((e=>"insuredBeneficiaryType"===e.name)):[]}),{deep:!0,immediate:!0}),r((()=>S.guardianSchema),(e=>{k.guardianSchema=e}),{deep:!0,immediate:!0}),r($,((e,i)=>{String(e)!==String(i)&&(E("受益人类型关系变动了"),e?!m(k.beneficiaryList)&&F():k.beneficiaryList=[])}),{immediate:!0}),r((()=>M(k.beneficiaryList).map((e=>({personVO:e.personVO,nanoid:e.nanoid})))),((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&I("update:beneficiaryList",e)}),{deep:!0,immediate:!0}),r((()=>{var e;return null==(e=k.personVO)?void 0:e.relationToHolder}),((e,i)=>{if(!e)return;E("与投保人关系变动了");const{personVO:n,schema:r=[],config:o}=k||{},{id:a,...l}=S.holderPersonVO||{},s="1"===String(n.relationToHolder),[t,d]=R(r,n);if(J(o,d),r.forEach((e=>{e.relationToHolder=n.relationToHolder,e.hidden=!e.isSelfInsuredNeed&&s})),!S.isView&&i&&String(e)!==String(i)){let e={...n,...l};s||(e={...U(n,(e=>!(t&&"certType"===e))),relationToHolder:n.relationToHolder}),Object.assign(k.personVO,e)}}),{deep:!0}),r((()=>{var e;return null==(e=k.personVO)?void 0:e.relationToMainInsured}),((e,i)=>{if(!e)return;E("次被保人与主被保人关系变动了");const{personVO:n,schema:r=[],config:o}=k||{},{certType:a}=n||{},[l,s]=R(r,{certType:a,relationToHolder:e});J(o,s),!S.isView&&i&&String(e)!==String(i)&&Object.assign(k.personVO,{...U(n,(e=>!(l&&"certType"===e))),relationToMainInsured:n.relationToMainInsured})})),r((()=>S.config),(e=>{e&&Object.assign(k.config,e)}),{deep:!0,immediate:!0}),r((()=>S.schema),((e,i)=>{e&&JSON.stringify(e)!==JSON.stringify(i)&&Object.assign(k.schema,M(e))}),{deep:!0,immediate:!0}),r((()=>S.modelValue),((e,i)=>{if(JSON.stringify(e)!==JSON.stringify(i)){const{beneficiaryList:i,...n}=e;J(k.personVO,n)}}),{deep:!0,immediate:!0}),r((()=>M(S.beneficiaryList)),G.exports.debounce(((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&(k.beneficiaryList=m(e)?e.map((e=>({...e,nanoid:e.nanoid||p()}))):[])}),500),{deep:!0,immediate:!0}),r((()=>M(S.guardian)),(e=>{k.guardian=e||{}}),{deep:!0,immediate:!0}),r((()=>k.personVO),(e=>{e&&I("update:modelValue",e)}),{deep:!0,immediate:!0}),c({validate:e=>{var i;return Promise.all([D(w,S.trialFactorCodes,e),D(x,[],e),...(null==(i=L.value)?void 0:i.map((i=>i.validate(e))))||[]])},validateTrialFields:()=>A({personVO:k.personVO,trialFactorCodes:S.trialFactorCodes})}),(e,i)=>{const n=O,r=T;return o(),f(h,null,[v(t(q),{ref_key:"insuredFormRef",ref:w,class:"personal-info-card",title:t(_)?"":e.title,model:t(k).personVO,schema:t(k).schema,config:t(k).config,"is-view":e.isView,"extra-provision":{objectType:t(d).INSURED,objectId:t(k).personVO.id}},{cardTitleExtra:l((()=>[s(e.$slots,"default",{},void 0,!0)])),customer:l((()=>[s(e.$slots,"customer",{},void 0,!0)])),_:3},8,["title","model","schema","config","is-view","extra-provision"]),t(j)?(o(),a(t(q),{key:0,ref:"guardianFormRef",class:"personal-info-card",title:"监护人",model:t(k).guardian,schema:t(k).guardianSchema,config:t(k).config,"is-view":e.isView,"extra-provision":{objectType:t(d).INSURED,objectId:t(k).personVO.id}},{cardTitleExtra:l((()=>[s(e.$slots,"default",{},void 0,!0)])),customer:l((()=>[s(e.$slots,"customer",{},void 0,!0)])),_:3},8,["model","schema","config","is-view","extra-provision"])):y("",!0),t(H)?(o(),f(h,{key:1},[v(t(q),{ref_key:"beneficiaryTypeFormRef",ref:x,class:"personal-info-card",title:"受益人",model:t(k).personVO,schema:t(k).beneficiaryTypeSchemaList,"is-view":e.isView},null,8,["model","schema","is-view"]),t($)?(o(),f(h,{key:0},[(o(!0),f(h,null,g(t(k).beneficiaryList,((i,r)=>(o(),a(ee,{ref_for:!0,ref_key:"beneficiaryFormRef",ref:L,key:`${i.nanoid}_${r}`,modelValue:i.personVO,"onUpdate:modelValue":e=>i.personVO=e,title:`受益人${r+1}`,schema:t(k).beneficiarySchemaList,config:i.config,"is-view":e.isView},{customer:l((()=>[s(e.$slots,"benefitCustomer",{index:r},void 0,!0)])),default:l((()=>[r>0&&!e.isView?(o(),f("span",{key:0,class:"delete-button",onClick:e=>(e=>{b.confirm({message:"确定要删除该受益人吗？"}).then((()=>{k.beneficiaryList.splice(e,1)}))})(r)},[v(n,{name:"delete"})],8,ie)):y("",!0)])),_:2},1032,["modelValue","onUpdate:modelValue","title","schema","config","is-view"])))),128)),!e.isView&&t(N)?(o(),f("span",{key:0,class:"add-button",onClick:F},[v(r,{name:"plus"}),V("添加受益人")])):y("",!0)],64)):y("",!0)],64)):y("",!0),s(e.$slots,"riskList",{},void 0,!0)],64)}}}),[["__scopeId","data-v-4cb79b71"]]);const oe=e=>(N("data-v-41761235"),e=e(),_(),e),ae=[oe((()=>k("img",{src:H},null,-1)))],le=["onClick"],se=[oe((()=>k("img",{src:H},null,-1)))],te=["onClick"],de=[oe((()=>k("img",{src:H},null,-1)))],ce=["onClick"],ue={class:"search-bar"},me=["src"],pe={key:1,class:"empth"},fe=[oe((()=>k("p",null,[k("img",{src:$,class:"ig"})],-1))),oe((()=>k("p",{class:"p1"},"暂时还没有客户哦～",-1)))],ve=e({name:"PersonalInfo"});var ye=c(e({...ve,props:{productFactor:{default:()=>({})},modelValue:{default:()=>({})},isTrial:{type:Boolean,default:!1},isView:{type:Boolean,default:!1},isOnlyHolder:{type:Boolean,default:!1},multiInsuredConfig:{}},emits:["update:modelValue","trailChange","trailValidateFailed","closeCustomerPopoup"],setup(e,{expose:c,emit:N}){const _=e,H=I(),$=S(),{isShare:U,saleChannelId:G}=H.query,Q=i(null),Z=i(null),ee=n({count:0,slotProps:{},uniqKey:"",currentIndex:0,currentBenifitIndex:0,currentType:"",keyword:void 0,show:!1,list:[],config:{},trialValidated:!1,holder:{personVO:{},schema:[],trialFactorCodes:[],config:{}},beneficiarySchema:[],initInsuredIList:[],insured:[]}),ie=async e=>{var i,n;ee.keyword;const r={pageNum:1,pageSize:999,queryBean:{keyword:ee.keyword||""}},o=await Y(r),a=[];Object.keys((null==(i=null==o?void 0:o.data)?void 0:i.customerMaps)||{}).forEach((e=>{var i;a.push({label:e,children:null==(i=null==o?void 0:o.data)?void 0:i.customerMaps[e]})})),ee.list=a,ee.count=null==(n=null==o?void 0:o.data)?void 0:n.count},ne=()=>{ie(ee.keyword)},oe=()=>{ie()},ve=u((()=>!_.isTrial||_.isOnlyHolder)),ye=(e,i,n)=>{ee.currentType=e,"benifit"!==e?ee.currentIndex=i:(ee.currentIndex=i,ee.currentBenifitIndex=n),ee.uniqKey=p(),ie(),ee.show=!0},he=()=>{setTimeout((()=>{ee.show=!1}),300)},ge=()=>"holder"===ee.currentType?ee.holder.schema.map((e=>e.name))||[]:"insured"===ee.currentType?ee.insured[ee.currentIndex].schema.map((e=>e.name))||[]:"benifit"===ee.currentType?ee.beneficiarySchema.map((e=>e.name))||[]:void 0,Ve=u((()=>{var e,i;return null==(i=null==(e=null==ee?void 0:ee.holder)?void 0:e.personVO)?void 0:i.name})),be=u((()=>{var e,i;return null==(i=null==(e=null==ee?void 0:ee.holder)?void 0:e.personVO)?void 0:i.gender})),Oe=u((()=>{var e,i;return null==(i=null==(e=null==ee?void 0:ee.holder)?void 0:e.personVO)?void 0:i.birthday})),Te=u((()=>{var e,i;return null==(i=null==(e=null==ee?void 0:ee.holder)?void 0:e.personVO)?void 0:i.certType})),Ie=u((()=>{var e,i;return null==(i=null==(e=null==ee?void 0:ee.holder)?void 0:e.personVO)?void 0:i.certNo})),Se=(e,i)=>{var n,r,o,a,l;console.log("convertCustomerData",e);const s=null==(n=null==e?void 0:e.contactInfo)?void 0:n.find((e=>"01"===e.contactType)),t=null==(r=null==e?void 0:e.contactInfo)?void 0:r.find((e=>"02"===e.contactType)),d=null==e?void 0:e.certInfo.filter((e=>"1"===e.certType)),c={name:null==e?void 0:e.name,gender:null==e?void 0:e.gender,birthday:null==e?void 0:e.birthday,mobile:(null==s?void 0:s.contactNo)||null,email:(null==t?void 0:t.contactNo)||null,certNo:(null==(o=null==d?void 0:d[0])?void 0:o.certNo)||null,certType:(null==(a=null==d?void 0:d[0])?void 0:a.certType)||null};console.log("insureKeys",ge());const u=null==(l=ge())?void 0:l.reduce(((e,i)=>c.hasOwnProperty(i)?{...e,[i]:c[i]}:e),{});return console.log("extractedObject===",u),console.log("state.holder.schema=====",ee.holder.schema),u},we=e=>{var i,n,r,o,a,l,s,t,d,c,u;if(ee.show=!1,"holder"===ee.currentType&&Object.assign((null==(i=null==ee?void 0:ee.holder)?void 0:i.personVO)||{},Se(e)),"insured"===ee.currentType){const i=null==(n=null==ee?void 0:ee.insured[ee.currentIndex])?void 0:n.schema.some((e=>"relationToHolder"===e.name&&e.attributeValueList.some((e=>"1"===e.code)))),{name:a,gender:l,birthday:s,certType:t,certNo:d}=Se(e);if(Ve.value===a&&be.value===l&&Oe.value===s&&Te.value===t&&Ie.value===d)return i?void Object.assign((null==(r=null==ee?void 0:ee.insured[ee.currentIndex])?void 0:r.personVO)||{},{relationToHolder:"1"}):void w("与投保人关系未配置本人");Object.assign((null==(o=null==ee?void 0:ee.insured[ee.currentIndex])?void 0:o.personVO)||{},Se(e))}if("benifit"===ee.currentType){const{name:i,gender:n,birthday:r,certType:o,certNo:m}=Se(e);(null==(a=null==ee?void 0:ee.insured[ee.currentIndex])?void 0:a.personVO.name)===i&&(null==(l=null==ee?void 0:ee.insured[ee.currentIndex])?void 0:l.personVO.gender)===n&&(null==(s=null==ee?void 0:ee.insured[ee.currentIndex])?void 0:s.personVO.birthday)===r&&(null==(t=null==ee?void 0:ee.insured[ee.currentIndex])?void 0:t.personVO.certType)===o&&(null==(d=null==ee?void 0:ee.insured[ee.currentIndex])?void 0:d.personVO.certNo)===m?w("指定受益人不可为被保人本人"):Object.assign((null==(u=null==(c=null==ee?void 0:ee.insured[ee.currentIndex])?void 0:c.beneficiaryList[ee.currentBenifitIndex])?void 0:u.personVO)||{},Se(e))}},xe=()=>{var e;const i=!Z.value||(null==(e=Z.value)?void 0:e.every((e=>e.validateTrialFields())));return(!Q.value||A(ee.holder))&&i},Le=e=>{var i;return Promise.all([...(null==(i=Z.value)?void 0:i.map((i=>i.validate(e))))||[],D(Q,ee.holder.trialFactorCodes,e)])},Ce=e=>{const{productList:i,config:n,schema:r,trialFactorCodes:o,beneficiaryList:a,personVO:l,nanoid:s,...t}=e||{};return t},ke=()=>{const{length:e,[e-1]:i}=ee.initInsuredIList;ee.insured.push(M({...i,nanoid:p()}))},je=u((()=>{const{multiInsuredMaxNum:e,multiInsuredSupportFlag:i}=ee.config;return i&&(!e||ee.insured.length<e)})),Fe=u((()=>m(ee.holder.schema))),Ne=u((()=>ee.insured.some((e=>m(e.schema))))),_e=(e,i)=>m(e)?e.reduce(((e,n)=>(e[n]=i[n],e)),{}):{},Be=(e,i,n={})=>!!m(e)&&JSON.stringify(_e(e,i))!==JSON.stringify(_e(e,n));return r((()=>{var e;return null==(e=ee.holder.personVO)?void 0:e.certType}),P(((e,i)=>{if(`${e}`==`${i}`)return!1;E("投保人信息变动了====");const[n,r]=R(ee.holder.schema,{certType:e});return J(ee.holder.config,r),!1}),300)),r([()=>{var e;return{...null==(e=ee.holder)?void 0:e.personVO}},()=>ee.insured.map((e=>{const{beneficiaryList:i,personVO:n}=e||{};return{...n,beneficiaryList:m(i)?i.map((e=>({...e.personVO}))):[]}}))],P(((e,i)=>{var n,r,o,a;const[l,s]=e,t=((e,i)=>{const n=Be(ee.holder.trialFactorCodes,null==e?void 0:e[0],null==i?void 0:i[0]),r=ee.insured.some(((e,n)=>{var r;const{trialFactorCodes:o,personVO:a}=e;return Be(o,a,null==(r=i[1])?void 0:r[n])}));return n||r})([l,s],i);E(`投被保人信息变动了---${t}`);const{insuredList:d}=_.modelValue,c={holder:l,insuredList:s.map(((e,i)=>({...(null==d?void 0:d[i])||{},...e})))};if(null==(n=ee.config)?void 0:n.isSpouseInsured){const[e,i]=s.map((e=>null==e?void 0:e.gender));if(e&&i&&String(e)===String(i))return w("被保人性别与投保要求不符")}if(JSON.stringify(null==(r=null==s?void 0:s[0])?void 0:r.personVO),Ce(null==(a=null==(o=_.modelValue)?void 0:o.insuredList)?void 0:a[0]),console.log("-------result = ",c),N("update:modelValue",c),!xe())return ee.trialValidated=!1,N("trailValidateFailed",c);Le(!0).then((()=>{ee.trialValidated=!0,t&&!_.isOnlyHolder&&N("trailChange",c)})).catch((()=>{ee.trialValidated=!1,N("trailValidateFailed",c)}))}),500),{deep:!0}),r([()=>_.productFactor,()=>_.isTrial],P(((e,i)=>{if(K(e,i)||!(null==e?void 0:e[0]))return!1;E("投被保人要素变动了");const{insuredFactorCodes:n,holderFactorCodes:r}=x(L)||{},{holder:o,insured:a,beneficiary:l,guardian:s,config:t}=z(e[0],{isTrial:e[1],..._.multiInsuredConfig,insuredFactorCodes:n,holderFactorCodes:r});return Object.assign(ee.holder,o),ee.config=t,m(a)&&(ee.initInsuredIList=a.map((e=>({...e,beneficiaryList:[]})))),ee.beneficiarySchema=M((null==l?void 0:l.schema)||[]),ee.guardianSchema=M((null==s?void 0:s.schema)||[]),!1}),300),{deep:!0,immediate:!0}),r((()=>{var e,i,n,r;return null==(r=null==(n=null==(i=null==(e=null==ee?void 0:ee.insured)?void 0:e[ee.currentIndex])?void 0:i.beneficiaryList)?void 0:n[ee.currentBenifitIndex])?void 0:r.personVO}),((e,i)=>{var n,r,o,a;(null==(a=null==(o=null==(r=null==(n=null==ee?void 0:ee.insured)?void 0:n[ee.currentIndex])?void 0:r.beneficiaryList)?void 0:o[ee.currentBenifitIndex])?void 0:a.personVO)&&(null==e?void 0:e.relationToInsured)!==(null==i?void 0:i.relationToInsured)&&(E("受益人关系变动了+++++"),ee.insured[ee.currentIndex].beneficiaryList[ee.currentBenifitIndex].personVO={relationToInsured:null==e?void 0:e.relationToInsured})}),{deep:!0,immediate:!0}),r([()=>{const{holder:e,insuredList:i=[]}=_.modelValue;console.log("表单数据",M(e));const n=m(i)?i.map((e=>({config:e.config,personVO:Ce(e),beneficiaryList:m(e.beneficiaryList)?e.beneficiaryList.map((({config:e,...i})=>({config:e,personVO:Ce(i)}))):[]}))):[];return[null==e?void 0:e.config,Ce(e),n]},()=>ee.config,()=>ee.initInsuredIList],P((([[e,i,n]])=>{E("投被保人数据变动了"),Object.assign(ee.holder.config,e),console.log("投保人数据===",M(ee.holder.personVO),M(i)),console.log("投保人数据===",M(ee.holder.personVO),M(i)),Object.assign(ee.holder.personVO,i);const{length:r}=n||[],{length:o}=ee.insured,{length:a,0:l={},[a-1]:s}=ee.initInsuredIList,{multiInsuredMaxNum:t=1,multiInsuredMinNum:d=1,multiInsuredSupportFlag:c}=(null==ee?void 0:ee.config)||{},u=_.isView||r>o?Math.min(r,t):o||d;ee.insured=Array.from({length:u}).reduce(((e,i,r)=>{const{personVO:o,config:a={},beneficiaryList:t}=(null==n?void 0:n[r])||{},d=M(0===r?l:s);return e[r]?J(e[r],{...M(d),personVO:o,config:a,beneficiaryList:t}):e[r]={...d,personVO:o,config:a,beneficiaryList:t,nanoid:p()},e}),ee.insured)}),500),{deep:!0,immediate:!0}),r((()=>ee.list),((e,i)=>{e&&(ee.list=e)})),c({validate:Le,validateTrialFields:xe,validateHolder:(...e)=>{var i;return null==(i=Q.value)?void 0:i.validate(...e)},canTrail:()=>ee.trialValidated}),(e,i)=>{const n=O,r=T,c=j,u=B,m=F;return o(),f(h,null,[t(Fe)&&t(ve)?(o(),a(t(q),{key:0,ref_key:"holderFormRef",ref:Q,title:"投保人信息",class:"personal-info-card",model:t(ee).holder.personVO,schema:t(ee).holder.schema,config:t(ee).holder.config,"is-view":e.isView,"extra-provision":{objectType:t(d).HOLDER,objectId:t(ee).holder.personVO.id}},{customer:l((()=>[(o(),f("div",{key:0,class:"choose-customer",onClick:i[0]||(i[0]=e=>ye("holder",1,0))},ae))])),_:1},8,["model","schema","config","is-view","extra-provision"])):y("",!0),t(Ne)&&!e.isOnlyHolder?(o(),f(h,{key:1},[(o(!0),f(h,null,g(t(ee).insured,((i,r)=>{var d;return o(),a(re,C({ref_for:!0,ref_key:"insuredFormRef",ref:Z,key:`${i.nanoid}_${r}`,modelValue:i.personVO,"onUpdate:modelValue":e=>i.personVO=e,"beneficiary-list":i.beneficiaryList,"onUpdate:beneficiaryList":e=>i.beneficiaryList=e,guardian:i.guardian,"onUpdate:guardian":e=>i.guardian=e,title:""+(t(ee).insured.length>1?`被保人${r+1}`:"被保人信息"),"holder-person-v-o":t(ee).holder.personVO},i,{"beneficiary-schema":t(ee).beneficiarySchema,"guardian-schema":t(ee).guardianSchema,"is-view":e.isView,"multi-beneficiary-num":null==(d=t(ee).config)?void 0:d.multiBeneficiaryMaxNum}),{riskList:l((()=>[s(e.$slots,"riskInfo",{insuredIndex:r},void 0,!0)])),customer:l((()=>[1==+i.personVO.relationToHolder||t(U)||e.isView||e.isTrial||t($)?y("",!0):(o(),f("div",{key:0,class:"choose-customer",onClick:e=>ye("insured",r,0)},se,8,le))])),benefitCustomer:l((i=>[t(U)||e.isView||e.isTrial||t($)?y("",!0):(o(),f("div",{key:0,class:"choose-customer",onClick:e=>ye("benifit",r,null==i?void 0:i.index)},de,8,te))])),default:l((()=>[!e.isView&&r+1>t(ee).config.multiInsuredMinNum?(o(),f("span",{key:0,class:"delete-button",onClick:e=>(e=>{b.confirm({message:"确定要删除该被保人吗？"}).then((()=>{ee.insured.splice(e,1)}))})(r)},[v(n,{name:"delete",color:"var(--van-primary-color)"})],8,ce)):y("",!0)])),_:2},1040,["modelValue","onUpdate:modelValue","beneficiary-list","onUpdate:beneficiaryList","guardian","onUpdate:guardian","title","holder-person-v-o","beneficiary-schema","guardian-schema","is-view","multi-beneficiary-num"])})),128)),!e.isView&&t(je)?(o(),a(c,{key:0,class:"add-button-wrap"},{title:l((()=>[k("span",{class:"add-button",onClick:ke},[v(r,{name:"plus"}),V("添加被保人")])])),_:1})):y("",!0)],64)):y("",!0),t(ee).show?(o(),a(m,{key:2,round:!1,show:t(ee).show,closeable:!1,onClose:he,onClosed:e.onClosePopupAfterAni},{default:l((()=>[k("div",ue,[v(u,{modelValue:t(ee).keyword,"onUpdate:modelValue":i[1]||(i[1]=e=>t(ee).keyword=e),placeholder:"客户 姓名/手机号",class:"icon-sercher",onSearch:ne,onCancel:oe},{"left-icon":l((()=>[k("img",{src:t(X),alt:"",class:"search-icon-img",style:{width:"22px",height:"23px"}},null,8,me)])),_:1},8,["modelValue"])]),t(ee).count?(o(),a(W,{key:0,data:t(ee).list,type:e.order,disabled:!1,onOnClose:we},null,8,["data","type"])):(o(),f("div",pe,fe))])),_:1},8,["show","onClosed"])):y("",!0)],64)}}}),[["__scopeId","data-v-41761235"]]);export{ye as P};
