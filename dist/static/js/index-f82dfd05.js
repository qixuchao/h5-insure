import{d as e,j as i,r as n,z as r,o as a,m as o,w as s,g as t,u as l,bd as d,be as c,_ as u,bf as m,bg as f,bh as p,bi as g,af as y,bj as v,k as h,aJ as V,bk as O,bl as b,c as I,b as T,f as S,F as L,q as x,a8 as k,aI as C,ae as w,i as N,ac as j,aF as F,bm as B,bn as J,a0 as _,a as H,a9 as $,T as E,bo as M,bc as R,bp as P,bq as U}from"./index-ea01be6f.js";import{c as q}from"./cloneDeep-e11529f8.js";import"./PolicyInfo-57a9e494.js";import{l as D}from"./lodash-b9d1dbcb.js";import{B as A}from"./infoCollection-7742f67e.js";import{O as Y}from"./questionnaire-62331097.js";import{g as z,c as G,t as K,i as Q}from"./util-3852c503.js";const W=e({name:"BeneficiaryItem"});var X=u(e({...W,props:{modelValue:{default:()=>({})},schema:{default:()=>[]},config:{default:()=>({})},isView:{type:Boolean,default:!1},isTrial:{type:Boolean,default:!1},title:{default:"受益人"}},emits:["update:modelValue","trailChange"],setup(e,{expose:u,emit:h}){const V=e,O=i(null),b=n({validated:!1,schema:[],config:{},personVO:{}});return r((()=>V.config),(e=>{e&&Object.assign(b.config,e)}),{deep:!0,immediate:!0}),r((()=>V.schema),(e=>{e&&Object.assign(b.schema,q(V.schema))}),{deep:!0,immediate:!0}),r((()=>V.modelValue),((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&(p("受益人数据变动了"),Object.assign(b.personVO,e))}),{deep:!0,immediate:!0}),r((()=>b.personVO),(e=>{e&&h("update:modelValue",e)}),{deep:!0,immediate:!0}),r((()=>{var e;return null==(e=b.personVO)?void 0:e.relationToInsured}),((e,i)=>{if(e===i)return!1;p("受益人与被保人关系变动了");const{certType:n}=b.personVO||{},[r,a]=g(b.schema,{certType:n,relationToHolder:e});return y(b.config,a),!V.isView&&e&&i&&Object.assign(b.personVO,{...v(b.personVO,(e=>!(r&&"certType"===e))),relationToInsured:e}),!1}),{immediate:!0}),u({validate:e=>f(O,V.trialFactorCodes,e),validateTrialFields:()=>m({personVO:b.personVO,trialFactorCodes:V.trialFactorCodes})}),(i,n)=>(a(),o(l(c),{ref_key:"formRef",ref:O,class:"personal-info-card",title:e.title,model:l(b).personVO,schema:l(b).schema,config:l(b).config,"is-view":e.isView,"extra-provision":{objectType:l(d).BENEFICIARY,objectId:l(b).personVO.id}},{cardTitleExtra:s((()=>[t(i.$slots,"default",{},void 0,!0)])),customer:s((()=>[t(i.$slots,"customer",{},void 0,!0)])),_:3},8,["title","model","schema","config","is-view","extra-provision"]))}}),[["__scopeId","data-v-844ffeca"]]);const Z=["onClick"],ee=e({name:"InsuredItem"});var ie=u(e({...ee,props:{modelValue:{default:()=>({})},title:{default:""},holderPersonVO:null,schema:{default:()=>[]},config:{default:()=>({})},isView:{type:Boolean,default:!1},isTrial:{type:Boolean,default:!1},trialFactorCodes:{default:()=>[]},multiBeneficiaryMaxNum:{default:null},beneficiaryList:{default:()=>[]},beneficiarySchema:{default:()=>[]},guardian:{default:()=>({})},guardianSchema:{default:()=>[]}},emits:["update:modelValue","update:beneficiaryList","update:guardian"],setup(e,{expose:u,emit:N}){const j=e,F=i(null),B=i(null),J=i(null),_={schema:[],trialFactorCodes:[],config:{occupationCode:{isView:!0}},personVO:{}},H=n({validated:!1,schema:[],config:{},personVO:{},beneficiaryTypeSchemaList:[],beneficiarySchemaList:[],beneficiaryList:[],guardianSchema:[],guardian:{}}),$=h((()=>{const{age:e,relationToHolder:i}=H.personVO;return!["4","5"].includes(i)&&+e<18||(H.guardian={},!1)})),E=()=>{H.beneficiaryList.push(q({..._,nanoid:O(),schema:j.beneficiarySchema}))},M=h((()=>!j.multiBeneficiaryMaxNum||H.beneficiaryList.length<j.multiBeneficiaryMaxNum)),R=h((()=>!H.schema.filter((e=>{var i;return!(e.hidden||(null==(i=H.config[e.name])?void 0:i.hidden))})).length)),P=h((()=>H.schema.filter((e=>e.isSelfInsuredNeed)).map((e=>e.name)))),U=h((()=>V(j.beneficiarySchema))),z=h((()=>{var e;return String(null==(e=H.personVO)?void 0:e.insuredBeneficiaryType)===A.SPECIFY}));return r((()=>j.holderPersonVO),D.exports.debounce((e=>{var i;p("------投保人信息变动了-----");const{id:n,...r}=e||{};if("1"===String(null==(i=H.personVO)?void 0:i.relationToHolder)){const e=V(P.value)?Object.keys(r).reduce(((e,i)=>([...P.value,"occupationClass"].includes(i)&&!["birthday","age","gender"].includes(i)||(e[i]=r[i]),e)),{}):r,i=r.certImage.map((e=>({...e,objectId:H.personVO.id,objectType:Y.INSURED})));Object.assign(H.personVO,e,{certImage:i})}}),300),{deep:!0,immediate:!0}),r((()=>j.beneficiarySchema),(e=>{H.beneficiarySchemaList=V(e)?e.filter((e=>"insuredBeneficiaryType"!==e.name)):[],H.beneficiaryTypeSchemaList=V(e)?e.filter((e=>"insuredBeneficiaryType"===e.name)):[]}),{deep:!0,immediate:!0}),r((()=>j.guardianSchema),(e=>{H.guardianSchema=e}),{deep:!0,immediate:!0}),r(z,((e,i)=>{String(e)!==String(i)&&(p("受益人类型关系变动了"),e?!V(H.beneficiaryList)&&E():H.beneficiaryList=[])}),{immediate:!0}),r((()=>q(H.beneficiaryList).map((e=>({personVO:e.personVO,nanoid:e.nanoid})))),((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&N("update:beneficiaryList",e)}),{deep:!0,immediate:!0}),r((()=>{var e;return null==(e=H.personVO)?void 0:e.relationToHolder}),((e,i)=>{if(!e)return;p("与投保人关系变动了");const{personVO:n,schema:r=[],config:a}=H||{},{id:o,...s}=j.holderPersonVO||{},t="1"===String(n.relationToHolder),[l,d]=g(r,n);if(y(a,d),r.forEach((e=>{e.relationToHolder=n.relationToHolder,e.hidden=!e.isSelfInsuredNeed&&t})),!j.isView&&i&&String(e)!==String(i)){let e={...n,...s};t||(e={...v(n,(e=>!(l&&"certType"===e))),relationToHolder:n.relationToHolder}),Object.assign(H.personVO,e)}}),{deep:!0}),r((()=>{var e;return null==(e=H.personVO)?void 0:e.relationToMainInsured}),((e,i)=>{if(!e)return;p("次被保人与主被保人关系变动了");const{personVO:n,schema:r=[],config:a}=H||{},{certType:o}=n||{},[s,t]=g(r,{certType:o,relationToHolder:e});y(a,t),!j.isView&&i&&String(e)!==String(i)&&Object.assign(H.personVO,{...v(n,(e=>!(s&&"certType"===e))),relationToMainInsured:n.relationToMainInsured})})),r((()=>j.config),(e=>{e&&Object.assign(H.config,e)}),{deep:!0,immediate:!0}),r((()=>j.schema),((e,i)=>{e&&JSON.stringify(e)!==JSON.stringify(H.schema)&&(console.log(""),H.schema=q(e))}),{deep:!0,immediate:!0}),r((()=>j.modelValue),((e,i)=>{if(JSON.stringify(e)!==JSON.stringify(i)){const{beneficiaryList:i,...n}=e;y(H.personVO,n)}}),{deep:!0,immediate:!0}),r((()=>q(j.beneficiaryList)),D.exports.debounce(((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&(H.beneficiaryList=V(e)?e.map((e=>({...e,nanoid:e.nanoid||O()}))):[])}),500),{deep:!0,immediate:!0}),r((()=>j.guardian),D.exports.debounce(((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&(H.guardian=e)}),300),{deep:!0,immediate:!0}),r((()=>H.guardian),(e=>{}),{deep:!0,immediate:!0}),r((()=>H.personVO),(e=>{e&&N("update:modelValue",e)}),{deep:!0,immediate:!0}),u({validate:e=>{var i;return Promise.all([f(F,j.trialFactorCodes,e),f(B,[],e),...(null==(i=J.value)?void 0:i.map((i=>i.validate(e))))||[]])},validateTrialFields:()=>m({personVO:H.personVO,trialFactorCodes:j.trialFactorCodes})}),(i,n)=>{var r,u;const m=w,f=b;return a(),I(L,null,[T(l(c),{ref_key:"insuredFormRef",ref:F,class:"personal-info-card",title:l(R)?"":e.title,model:l(H).personVO,schema:l(H).schema,config:l(H).config,"is-view":e.isView,"extra-provision":{objectType:l(d).INSURED,objectId:l(H).personVO.id}},{cardTitleExtra:s((()=>[t(i.$slots,"default",{},void 0,!0)])),customer:s((()=>[t(i.$slots,"customer",{},void 0,!0)])),_:3},8,["title","model","schema","config","is-view","extra-provision"]),l($)?(a(),o(l(c),{key:0,ref:"guardianFormRef",class:"personal-info-card",title:"监护人",model:l(H).guardian.personVO,schema:l(H).guardianSchema,config:l(H).config,"is-view":e.isView,"extra-provision":{objectType:l(d).GUARDIAN,objectId:null==(u=null==(r=l(H).guardian)?void 0:r.personVO)?void 0:u.id}},{cardTitleExtra:s((()=>[t(i.$slots,"default",{},void 0,!0)])),customer:s((()=>[t(i.$slots,"customer",{},void 0,!0)])),_:3},8,["model","schema","config","is-view","extra-provision"])):S("",!0),l(U)?(a(),I(L,{key:1},[T(l(c),{ref_key:"beneficiaryTypeFormRef",ref:B,class:"personal-info-card",title:"受益人",model:l(H).personVO,schema:l(H).beneficiaryTypeSchemaList,"is-view":e.isView},null,8,["model","schema","is-view"]),l(z)?(a(),I(L,{key:0},[(a(!0),I(L,null,x(l(H).beneficiaryList,((n,r)=>(a(),o(X,{ref_for:!0,ref_key:"beneficiaryFormRef",ref:J,key:`${n.nanoid}_${r}`,modelValue:n.personVO,"onUpdate:modelValue":e=>n.personVO=e,title:`受益人${r+1}`,schema:l(H).beneficiarySchemaList,config:n.config,"is-view":e.isView},{customer:s((()=>[t(i.$slots,"benefitCustomer",{index:r},void 0,!0)])),default:s((()=>[r>0&&!e.isView?(a(),I("span",{key:0,class:"delete-button",onClick:e=>(e=>{C.confirm({message:"确定要删除该受益人吗？"}).then((()=>{H.beneficiaryList.splice(e,1)}))})(r)},[T(m,{name:"delete"})],8,Z)):S("",!0)])),_:2},1032,["modelValue","onUpdate:modelValue","title","schema","config","is-view"])))),128)),!e.isView&&l(M)?(a(),I("span",{key:0,class:"add-button",onClick:E},[T(f,{name:"plus"}),k("添加受益人")])):S("",!0)],64)):S("",!0)],64)):S("",!0),t(i.$slots,"riskList",{},void 0,!0)],64)}}}),[["__scopeId","data-v-0d9226e0"]]);const ne=["onClick"],re=["onClick"],ae=["onClick"],oe=e({name:"PersonalInfo"});var se=u(e({...oe,props:{productFactor:{default:()=>({})},modelValue:{default:()=>({})},isTrial:{type:Boolean,default:!1},isView:{type:Boolean,default:!1},isOnlyHolder:{type:Boolean,default:!1},isHolderExempt:{type:Boolean,default:!1},multiInsuredConfig:null},emits:["update:modelValue","trailChange","trailValidateFailed","closeCustomerPopoup","update-bank"],setup(e,{expose:u,emit:v}){const D=e,A=N();j(),A.query;const Y=i(null),W=i(null),X=n({count:0,slotProps:{},uniqKey:"",currentIndex:0,currentBenifitIndex:0,currentType:"",keyword:void 0,show:!1,list:[],config:{},trialValidated:!1,holder:{personVO:{},schema:[],trialFactorCodes:[],config:{occupationCode:{isView:!0}}},beneficiarySchema:[],initInsuredIList:[],insured:[]}),Z=h((()=>!D.isTrial||D.isHolderExempt)),ee=e=>{console.log("holderData",e),Object.assign(X.holder.personVO,e)},oe=h((()=>!0)),se=(e,i,n,r)=>{X.currentType=e,"benifit"!==e?X.currentIndex=i:(X.currentIndex=i,X.currentBenifitIndex=n);const{selectedType:a,customerId:o,selected:s,...t}=A.query;$("customerList",{...t,selectedType:e,relation:r})},te=e=>{var i,n,r,a,o,s,t,l;const d="holder"===X.currentType?X.holder.schema.map((e=>e.name))||[]:"insured"===X.currentType?X.insured[X.currentIndex].schema.map((e=>e.name))||[]:"benifit"===X.currentType&&X.beneficiarySchema.map((e=>e.name))||[],c=K(e,d);if("holder"===X.currentType&&(Object.assign((null==(i=null==X?void 0:X.holder)?void 0:i.personVO)||{},c),console.log(d,"转换后的客户信息:",c),v("update-bank",e.bankCardInfo)),"insured"===X.currentType){const e=null==(n=null==X?void 0:X.insured[X.currentIndex])?void 0:n.schema.some((e=>"relationToHolder"===e.name&&e.attributeValueList.some((e=>"1"===e.code))));if(Q(null==(r=null==X?void 0:X.holder)?void 0:r.personVO,c))return e?void Object.assign((null==(a=null==X?void 0:X.insured[X.currentIndex])?void 0:a.personVO)||{},{relationToHolder:"1"}):void E("与投保人关系未配置本人");Object.assign((null==(o=null==X?void 0:X.insured[X.currentIndex])?void 0:o.personVO)||{},c)}"benifit"===X.currentType&&(Q(null==(s=null==X?void 0:X.insured[X.currentIndex])?void 0:s.personVO,c)?E("指定受益人不可为被保人本人"):Object.assign((null==(l=null==(t=null==X?void 0:X.insured[X.currentIndex])?void 0:t.beneficiaryList[X.currentBenifitIndex])?void 0:l.personVO)||{},c))},le=()=>{var e;const i=!W.value||(null==(e=W.value)?void 0:e.every((e=>e.validateTrialFields())));return(!Y.value||m(X.holder))&&i},de=e=>{var i;return Promise.all([...(null==(i=W.value)?void 0:i.map((i=>i.validate(e))))||[],f(Y,X.holder.trialFactorCodes,e)])},ce=e=>{const{productList:i,config:n,schema:r,trialFactorCodes:a,beneficiaryList:o,guardian:s,personVO:t,nanoid:l,...d}=e||{};return d},ue=()=>{const{length:e,[e-1]:i}=X.initInsuredIList;X.insured.push(q({...i,nanoid:O()}))},me=h((()=>{const{multiInsuredMaxNum:e,multiInsuredSupportFlag:i}=X.config;return i&&(!e||X.insured.length<e)})),fe=h((()=>V(X.holder.schema))),pe=h((()=>X.insured.some((e=>V(e.schema)))));r((()=>{var e;return null==(e=X.holder.personVO)?void 0:e.certType}),F(((e,i)=>{if(`${e}`==`${i}`)return!1;p("投保人信息变动了====");const[n,r]=g(X.holder.schema,{certType:e});return y(X.holder.config,r),!1}),300));let ge=!0;r([()=>{var e;return{...null==(e=X.holder)?void 0:e.personVO}},()=>X.insured.map((e=>{const{beneficiaryList:i,guardian:n,personVO:r}=e||{},a=V(i)?i.map((e=>({...e.personVO}))):[];return{...r,guardian:n.personVO||{},beneficiaryList:a}}))],F(((e,i)=>{var n,r,a,o;if(JSON.stringify(e)===JSON.stringify(i)&&!ge)return!1;ge=!1;const[s,t]=e,{insuredList:l}=D.modelValue,d={holder:s,insuredList:t.map(((e,i)=>({...(null==l?void 0:l[i])||{},...e})))};if(null==(n=X.config)?void 0:n.isSpouseInsured){const[e,i]=t.map((e=>null==e?void 0:e.gender));if(e&&i&&String(e)===String(i))return E("被保人性别与投保要求不符")}if(JSON.stringify(null==(r=null==t?void 0:t[0])?void 0:r.personVO),ce(null==(o=null==(a=D.modelValue)?void 0:a.insuredList)?void 0:o[0]),console.log("-------result = ",d),v("update:modelValue",d),!le())return X.trialValidated=!1,v("trailValidateFailed",d);de(!0).then((()=>{X.trialValidated=!0,D.isOnlyHolder||v("trailChange",d)})).catch((()=>{X.trialValidated=!1,v("trailValidateFailed",d)}))}),500),{deep:!0}),r([()=>D.productFactor,()=>D.isTrial],F(((e,i)=>{if(M(e,i)||!(null==e?void 0:e[0]))return!1;p("投被保人要素变动了");const{insuredFactorCodes:n,holderFactorCodes:r}=R(P)||{},{holder:a,insured:o,beneficiary:s,guardian:t,config:l}=U(e[0],{isTrial:e[1],...D.multiInsuredConfig,insuredFactorCodes:n,holderFactorCodes:r});return Object.assign(X.holder,a),X.config=l,V(o)&&(X.initInsuredIList=o.map((e=>({...e,guardian:{},beneficiaryList:[]})))),X.beneficiarySchema=q((null==s?void 0:s.schema)||[]),X.guardianSchema=q((null==t?void 0:t.schema)||[]),!1}),300),{deep:!0,immediate:!0}),r((()=>{var e,i,n,r;return null==(r=null==(n=null==(i=null==(e=null==X?void 0:X.insured)?void 0:e[X.currentIndex])?void 0:i.beneficiaryList)?void 0:n[X.currentBenifitIndex])?void 0:r.personVO}),((e,i)=>{var n,r,a,o;(null==(o=null==(a=null==(r=null==(n=null==X?void 0:X.insured)?void 0:n[X.currentIndex])?void 0:r.beneficiaryList)?void 0:a[X.currentBenifitIndex])?void 0:o.personVO)&&(null==e?void 0:e.relationToInsured)!==(null==i?void 0:i.relationToInsured)&&(p("受益人关系变动了+++++"),X.insured[X.currentIndex].beneficiaryList[X.currentBenifitIndex].personVO={relationToInsured:null==e?void 0:e.relationToInsured})}),{deep:!0,immediate:!0}),r((()=>{var e,i,n,r;return null==(r=null==(n=null==(i=null==(e=null==X?void 0:X.insured)?void 0:e[X.currentIndex])?void 0:i.guardian)?void 0:n.personVO)?void 0:r.relationToInsured}),((e,i)=>{e!==i&&(p("监护人关系变动了+++++"),X.insured[X.currentIndex].guardian.personVO={relationToInsured:null==e?void 0:e.relationToInsured})}),{deep:!0,immediate:!0});const ye=i(!1);return r([()=>{const{holder:e,insuredList:i=[]}=D.modelValue,n=V(i)?i.map((e=>({config:e.config,personVO:ce(e),guardian:{personVO:e.guardian||{}},beneficiaryList:V(e.beneficiaryList)?e.beneficiaryList.map((({config:e,...i})=>({config:e,personVO:ce(i)}))):[]}))):[];return[null==e?void 0:e.config,ce(e),n]},()=>X.config,()=>X.initInsuredIList],F((([[e,i,n],r,a],[[o,s,t],l,d])=>{if(JSON.stringify(e)===JSON.stringify(o)&&JSON.stringify(i)===JSON.stringify(s)&&JSON.stringify(n)===JSON.stringify(t)&&JSON.stringify(a)===JSON.stringify(d)&&ye.value)return;ye.value=!0,Object.assign(X.holder.config,e),console.log("投保人数据===",q(X.holder.personVO),q(i)),console.log("投保人数据===",q(X.holder.personVO),q(i)),Object.assign(X.holder.personVO,i);const{length:c}=n||[],{length:u}=X.insured,{length:m,0:f={},[m-1]:p}=X.initInsuredIList,{multiInsuredMaxNum:g=1,multiInsuredMinNum:v=1,multiInsuredSupportFlag:h}=(null==X?void 0:X.config)||{},V=D.isView||c>u?Math.min(c,g):u||v;X.insured=Array.from({length:V}).reduce(((e,i,r)=>{const{personVO:a,config:o={},guardian:s,beneficiaryList:t}=(null==n?void 0:n[r])||{},l=q(0===r?f:p);return e[r]?y(e[r],{...q(l),personVO:a,config:o,guardian:s,beneficiaryList:t}):e[r]={...l,personVO:a,config:o,guardian:s,beneficiaryList:t,nanoid:O()},e}),X.insured)}),500),{deep:!0,immediate:!0}),r((()=>X.list),((e,i)=>{e&&(X.list=e)})),u({validate:de,validateTrialFields:le,validateHolder:(...e)=>{var i;return null==(i=Y.value)?void 0:i.validate(...e)},canTrail:()=>X.trialValidated}),B((()=>{const e=z();e&&(te(e),G())})),(i,n)=>{var r,u;const m=w,f=b,p=J;return a(),I(L,null,[l(fe)&&l(Z)?(a(),o(l(c),{key:0,ref_key:"holderFormRef",ref:Y,title:"投保人信息",class:"personal-info-card",model:l(X).holder.personVO,schema:l(X).holder.schema,config:l(X).holder.config,"is-view":e.isView,"extra-provision":{objectType:l(d).HOLDER,objectId:null==(u=null==(r=l(X).holder)?void 0:r.personVO)?void 0:u.id},onOcr:ee},{customer:s((()=>[l(oe)?(a(),I("div",{key:0,class:"choose-customer",onClick:n[0]||(n[0]=e=>se("holder",1,0))},[T(m,{name:"customer",color:"#333"})])):S("",!0)])),_:1},8,["model","schema","config","is-view","extra-provision"])):S("",!0),l(pe)&&!e.isOnlyHolder?(a(),I(L,{key:1},[(a(!0),I(L,null,x(l(X).insured,((n,r)=>{var d;return a(),o(ie,_({ref_for:!0,ref_key:"insuredFormRef",ref:W,key:`${n.nanoid}_${r}`,modelValue:n.personVO,"onUpdate:modelValue":e=>n.personVO=e,"beneficiary-list":n.beneficiaryList,"onUpdate:beneficiaryList":e=>n.beneficiaryList=e,guardian:n.guardian,"onUpdate:guardian":e=>n.guardian=e,title:""+(l(X).insured.length>1?`被保人${r+1}`:"被保人信息"),"holder-person-v-o":l(X).holder.personVO},n,{"beneficiary-schema":l(X).beneficiarySchema,"guardian-schema":l(X).guardianSchema,"is-view":e.isView,"multi-beneficiary-num":null==(d=l(X).config)?void 0:d.multiBeneficiaryMaxNum}),{riskList:s((()=>[t(i.$slots,"riskInfo",{insuredIndex:r},void 0,!0)])),customer:s((()=>[1!=+n.personVO.relationToHolder&&l(oe)?(a(),I("div",{key:0,class:"choose-customer",onClick:e=>se("insured",r,0,n.personVO.relationToHolder)},[T(m,{name:"customer",color:"#333"})],8,ne)):S("",!0)])),benefitCustomer:s((e=>[l(oe)?(a(),I("div",{key:0,class:"choose-customer",onClick:i=>se("benifit",r,null==e?void 0:e.index,n.personVO.relationToHolder)},[T(m,{name:"customer",color:"#333"})],8,re)):S("",!0)])),default:s((()=>[!e.isView&&r+1>l(X).config.multiInsuredMinNum?(a(),I("span",{key:0,class:"delete-button",onClick:e=>(e=>{C.confirm({message:"确定要删除该被保人吗？"}).then((()=>{X.insured.splice(e,1)}))})(r)},[T(m,{name:"delete",color:"var(--van-primary-color)"})],8,ae)):S("",!0)])),_:2},1040,["modelValue","onUpdate:modelValue","beneficiary-list","onUpdate:beneficiaryList","guardian","onUpdate:guardian","title","holder-person-v-o","beneficiary-schema","guardian-schema","is-view","multi-beneficiary-num"])})),128)),!e.isView&&l(me)?(a(),o(p,{key:0,class:"add-button-wrap"},{title:s((()=>[H("span",{class:"add-button",onClick:ue},[T(f,{name:"plus"}),k("添加被保人")])])),_:1})):S("",!0)],64)):S("",!0)],64)}}}),[["__scopeId","data-v-5ce4ea00"]]);export{se as P};
