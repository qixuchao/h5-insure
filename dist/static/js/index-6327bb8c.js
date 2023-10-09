import{d as e,j as i,r as n,z as r,o as a,m as o,w as s,g as t,u as l,bd as d,be as c,_ as u,bf as m,bg as f,bh as p,bi as g,af as y,bj as v,k as h,aJ as V,bk as b,bl as O,c as I,b as T,f as S,F as x,q as L,a8 as C,aI as k,ae as w,bm as j,i as N,ac as F,aF as B,bn as J,bo as _,bp as H,a0 as $,a as E,a9 as M,T as R,bq as P,bc as U,br as q,bs as D}from"./index-c36709f0.js";import{c as A}from"./cloneDeep-623cebcc.js";import"./PolicyInfo-a5c14c1b.js";import{l as Y}from"./lodash-800e8c72.js";import{B as z}from"./infoCollection-ffb79216.js";import{O as G}from"./questionnaire-62331097.js";import{s as K,g as Q,a as W,c as X,b as Z,t as ee,i as ie}from"./util-daa5c3f2.js";const ne=e({name:"BeneficiaryItem"});var re=u(e({...ne,props:{modelValue:{default:()=>({})},schema:{default:()=>[]},config:{default:()=>({})},isView:{type:Boolean,default:!1},isTrial:{type:Boolean,default:!1},title:{default:"受益人"}},emits:["update:modelValue","trailChange"],setup(e,{expose:u,emit:h}){const V=e,b=i(null),O=n({validated:!1,schema:[],config:{},personVO:{}});return r((()=>V.config),(e=>{e&&Object.assign(O.config,e)}),{deep:!0,immediate:!0}),r((()=>V.schema),(e=>{e&&Object.assign(O.schema,A(V.schema))}),{deep:!0,immediate:!0}),r((()=>V.modelValue),((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&(p("受益人数据变动了"),Object.assign(O.personVO,e))}),{deep:!0,immediate:!0}),r((()=>O.personVO),(e=>{e&&h("update:modelValue",e)}),{deep:!0,immediate:!0}),r((()=>{var e;return null==(e=O.personVO)?void 0:e.relationToInsured}),((e,i)=>{if(e===i)return!1;p("受益人与被保人关系变动了");const{certType:n}=O.personVO||{},[r,a]=g(O.schema,{certType:n,relationToHolder:e});return y(O.config,a),!V.isView&&e&&i&&Object.assign(O.personVO,{...v(O.personVO,(e=>!(r&&"certType"===e))),relationToInsured:e}),!1}),{immediate:!0}),u({validate:e=>f(b,V.trialFactorCodes,e),validateTrialFields:()=>m({personVO:O.personVO,trialFactorCodes:V.trialFactorCodes})}),(e,i)=>(a(),o(l(c),{ref_key:"formRef",ref:b,class:"personal-info-card",title:e.title,model:l(O).personVO,schema:l(O).schema,config:l(O).config,"is-view":e.isView,"extra-provision":{objectType:l(d).BENEFICIARY,objectId:l(O).personVO.id}},{cardTitleExtra:s((()=>[t(e.$slots,"default",{},void 0,!0)])),customer:s((()=>[t(e.$slots,"customer",{},void 0,!0)])),_:3},8,["title","model","schema","config","is-view","extra-provision"]))}}),[["__scopeId","data-v-844ffeca"]]);const ae=["onClick"],oe=e({name:"InsuredItem"});var se=u(e({...oe,props:{modelValue:{default:()=>({})},title:{default:""},holderPersonVO:{},schema:{default:()=>[]},config:{default:()=>({})},isView:{type:Boolean,default:!1},isTrial:{type:Boolean,default:!1},trialFactorCodes:{default:()=>[]},multiBeneficiaryMaxNum:{default:null},beneficiaryList:{default:()=>[]},beneficiarySchema:{default:()=>[]},guardian:{default:()=>({})},guardianSchema:{default:()=>[]}},emits:["update:modelValue","update:beneficiaryList","update:guardian"],setup(e,{expose:u,emit:j}){const N=e,F=i(null),B=i(null),J=i(null),_={schema:[],trialFactorCodes:[],config:{occupationCode:{isView:!0}},personVO:{}},H=n({validated:!1,schema:[],config:{},personVO:{},beneficiaryTypeSchemaList:[],beneficiarySchemaList:[],beneficiaryList:[],guardianSchema:[],guardian:{}}),$=h((()=>{const{age:e,relationToHolder:i}=H.personVO;return!["4","5"].includes(i)&&+e<18||(H.guardian={},!1)})),E=()=>{H.beneficiaryList.push(A({..._,nanoid:b(),schema:N.beneficiarySchema}))},M=h((()=>!N.multiBeneficiaryMaxNum||H.beneficiaryList.length<N.multiBeneficiaryMaxNum)),R=h((()=>!H.schema.filter((e=>{var i;return!(e.hidden||(null==(i=H.config[e.name])?void 0:i.hidden))})).length)),P=h((()=>H.schema.filter((e=>e.isSelfInsuredNeed)).map((e=>e.name)))),U=h((()=>V(N.beneficiarySchema))),q=h((()=>{var e;return String(null==(e=H.personVO)?void 0:e.insuredBeneficiaryType)===z.SPECIFY}));return r((()=>N.holderPersonVO),Y.exports.debounce((e=>{var i;p("------投保人信息变动了-----");const{id:n,...r}=e||{};if("1"===String(null==(i=H.personVO)?void 0:i.relationToHolder)){const e=V(P.value)?Object.keys(r).reduce(((e,i)=>([...P.value,"occupationClass"].includes(i)&&!["birthday","age","gender"].includes(i)||(e[i]=r[i]),e)),{}):r,i=(r.certImage||[]).map((e=>({...e,objectId:H.personVO.id,objectType:G.INSURED})));Object.assign(H.personVO,e,{certImage:i})}}),300),{deep:!0,immediate:!0}),r((()=>N.beneficiarySchema),(e=>{H.beneficiarySchemaList=V(e)?e.filter((e=>"insuredBeneficiaryType"!==e.name)):[],H.beneficiaryTypeSchemaList=V(e)?e.filter((e=>"insuredBeneficiaryType"===e.name)):[]}),{deep:!0,immediate:!0}),r((()=>N.guardianSchema),(e=>{H.guardianSchema=e}),{deep:!0,immediate:!0}),r(q,((e,i)=>{String(e)!==String(i)&&(p("受益人类型关系变动了"),e?!V(H.beneficiaryList)&&E():H.beneficiaryList=[])}),{immediate:!0}),r((()=>A(H.beneficiaryList).map((e=>({personVO:e.personVO,nanoid:e.nanoid})))),((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&j("update:beneficiaryList",e)}),{deep:!0,immediate:!0}),r((()=>{var e;return null==(e=H.personVO)?void 0:e.relationToHolder}),((e,i)=>{if(!e)return;p("与投保人关系变动了");const{personVO:n,schema:r=[],config:a}=H||{},{id:o,...s}=N.holderPersonVO||{},t="1"===String(n.relationToHolder),[l,d]=g(r,n);if(y(a,d),r.forEach((e=>{e.relationToHolder=n.relationToHolder,e.hidden=!e.isSelfInsuredNeed&&t})),!N.isView&&i&&String(e)!==String(i)){let e={...n,...s};t||(e={...v(n,(e=>!(l&&"certType"===e))),relationToHolder:n.relationToHolder}),Object.assign(H.personVO,e)}}),{deep:!0}),r((()=>{var e;return null==(e=H.personVO)?void 0:e.relationToMainInsured}),((e,i)=>{if(!e)return;p("次被保人与主被保人关系变动了");const{personVO:n,schema:r=[],config:a}=H||{},{certType:o}=n||{},[s,t]=g(r,{certType:o,relationToHolder:e});y(a,t),!N.isView&&i&&String(e)!==String(i)&&Object.assign(H.personVO,{...v(n,(e=>!(s&&"certType"===e))),relationToMainInsured:n.relationToMainInsured})})),r((()=>N.config),(e=>{e&&Object.assign(H.config,e)}),{deep:!0,immediate:!0}),r((()=>N.schema),((e,i)=>{e&&JSON.stringify(e)!==JSON.stringify(H.schema)&&(console.log(""),H.schema=A(e))}),{deep:!0,immediate:!0}),r((()=>N.modelValue),((e,i)=>{if(JSON.stringify(e)!==JSON.stringify(i)){const{beneficiaryList:i,...n}=e;y(H.personVO,n)}}),{deep:!0,immediate:!0}),r((()=>A(N.beneficiaryList)),Y.exports.debounce(((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&(H.beneficiaryList=V(e)?e.map((e=>({...e,nanoid:e.nanoid||b()}))):[])}),500),{deep:!0,immediate:!0}),r((()=>N.guardian),Y.exports.debounce(((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&(H.guardian=e)}),300),{deep:!0,immediate:!0}),r((()=>H.guardian),(e=>{}),{deep:!0,immediate:!0}),r((()=>H.personVO),(e=>{e&&j("update:modelValue",e)}),{deep:!0,immediate:!0}),u({validate:e=>{var i;return Promise.all([f(F,N.trialFactorCodes,e),f(B,[],e),...(null==(i=J.value)?void 0:i.map((i=>i.validate(e))))||[]])},validateTrialFields:()=>m({personVO:H.personVO,trialFactorCodes:N.trialFactorCodes})}),(e,i)=>{var n,r;const u=w,m=O;return a(),I(x,null,[T(l(c),{ref_key:"insuredFormRef",ref:F,class:"personal-info-card",title:l(R)?"":e.title,model:l(H).personVO,schema:l(H).schema,config:l(H).config,"is-view":e.isView,"extra-provision":{objectType:l(d).INSURED,objectId:l(H).personVO.id}},{cardTitleExtra:s((()=>[t(e.$slots,"default",{},void 0,!0)])),customer:s((()=>[t(e.$slots,"customer",{},void 0,!0)])),_:3},8,["title","model","schema","config","is-view","extra-provision"]),l($)?(a(),o(l(c),{key:0,ref:"guardianFormRef",class:"personal-info-card",title:"监护人",model:l(H).guardian.personVO,schema:l(H).guardianSchema,config:l(H).config,"is-view":e.isView,"extra-provision":{objectType:l(d).GUARDIAN,objectId:null==(r=null==(n=l(H).guardian)?void 0:n.personVO)?void 0:r.id}},{cardTitleExtra:s((()=>[t(e.$slots,"default",{},void 0,!0)])),customer:s((()=>[t(e.$slots,"guardianCustomer",{},void 0,!0)])),_:3},8,["model","schema","config","is-view","extra-provision"])):S("",!0),l(U)?(a(),I(x,{key:1},[T(l(c),{ref_key:"beneficiaryTypeFormRef",ref:B,class:"personal-info-card",title:"受益人",model:l(H).personVO,schema:l(H).beneficiaryTypeSchemaList,"is-view":e.isView},null,8,["model","schema","is-view"]),l(q)?(a(),I(x,{key:0},[(a(!0),I(x,null,L(l(H).beneficiaryList,((i,n)=>(a(),o(re,{ref_for:!0,ref_key:"beneficiaryFormRef",ref:J,key:`${i.nanoid}_${n}`,modelValue:i.personVO,"onUpdate:modelValue":e=>i.personVO=e,title:`受益人${n+1}`,schema:l(H).beneficiarySchemaList,config:i.config,"is-view":e.isView},{customer:s((()=>[t(e.$slots,"benefitCustomer",{index:n},void 0,!0)])),default:s((()=>[n>0&&!e.isView?(a(),I("span",{key:0,class:"delete-button",onClick:e=>(e=>{k.confirm({message:"确定要删除该受益人吗？"}).then((()=>{H.beneficiaryList.splice(e,1)}))})(n)},[T(u,{name:"delete"})],8,ae)):S("",!0)])),_:2},1032,["modelValue","onUpdate:modelValue","title","schema","config","is-view"])))),128)),!e.isView&&l(M)?(a(),I("span",{key:0,class:"add-button",onClick:E},[T(m,{name:"plus"}),C("添加受益人")])):S("",!0)],64)):S("",!0)],64)):S("",!0),t(e.$slots,"riskList",{},void 0,!0)],64)}}}),[["__scopeId","data-v-7a770b66"]]);const te=["onClick"],le=["onClick"],de=["onClick"],ce=["onClick"],ue=e({name:"PersonalInfo"});var me=u(e({...ue,props:{productFactor:{default:()=>({})},modelValue:{default:()=>({})},isTrial:{type:Boolean,default:!1},isView:{type:Boolean,default:!1},isOnlyHolder:{type:Boolean,default:!1},isHolderExempt:{type:Boolean,default:!1},multiInsuredConfig:{}},emits:["update:modelValue","trailChange","trailValidateFailed","closeCustomerPopoup","update-bank"],setup(e,{expose:u,emit:v}){const Y=e,{x:z,y:G}=j(),ne=N(),re=F(),{isShare:ae,saleChannelId:oe}=ne.query,ue=i(null),me=i(null),fe=n({count:0,slotProps:{},uniqKey:"",currentIndex:0,currentBenifitIndex:0,currentType:"",keyword:void 0,show:!1,list:[],config:{},trialValidated:!1,holder:{personVO:{},schema:[],trialFactorCodes:[],config:{occupationCode:{isView:!0}}},beneficiarySchema:[],initInsuredIList:[],insured:[]}),pe=h((()=>!Y.isTrial||Y.isHolderExempt)),ge=e=>{console.log("holderData",e),Object.assign(fe.holder.personVO,e)},ye=h((()=>!(ae||Y.isView||Y.isTrial||re))),ve=(e,i,n,r)=>{fe.currentType=e,"benifit"!==e?fe.currentIndex=i:(fe.currentIndex=i,fe.currentBenifitIndex=n);const{selectedType:a,customerId:o,selected:s,...t}=ne.query;console.log("选择的关系relation:",r),M("customerList",{...t,selectedType:e,relation:r})},he=e=>{var i,n,r,a,o,s,t,l,d,c;const u="holder"===fe.currentType?fe.holder.schema.map((e=>e.name))||[]:"insured"===fe.currentType?fe.insured[fe.currentIndex].schema.map((e=>e.name))||[]:"benifit"===fe.currentType?fe.beneficiarySchema.map((e=>e.name))||[]:"guardian"===fe.currentType&&fe.guardianSchema.map((e=>e.name))||[];u.push("certEndType");const m=ee(e,u);if(console.log(fe.currentType,"的keys:",u,"转换后的客户信息:",m),"holder"===fe.currentType&&(Object.assign((null==(i=null==fe?void 0:fe.holder)?void 0:i.personVO)||{},m),v("update-bank",e.bankCardInfo)),"insured"===fe.currentType){const e=null==(n=null==fe?void 0:fe.insured[fe.currentIndex])?void 0:n.schema.some((e=>"relationToHolder"===e.name&&e.attributeValueList.some((e=>"1"===e.code))));if(ie(null==(r=null==fe?void 0:fe.holder)?void 0:r.personVO,m))return e?void Object.assign((null==(a=null==fe?void 0:fe.insured[fe.currentIndex])?void 0:a.personVO)||{},{relationToHolder:"1"}):void R("与投保人关系未配置本人");Object.assign((null==(o=null==fe?void 0:fe.insured[fe.currentIndex])?void 0:o.personVO)||{},m)}"benifit"===fe.currentType&&(ie(null==(s=null==fe?void 0:fe.insured[fe.currentIndex])?void 0:s.personVO,m)?R("指定受益人不可为被保人本人"):Object.assign((null==(l=null==(t=null==fe?void 0:fe.insured[fe.currentIndex])?void 0:t.beneficiaryList[fe.currentBenifitIndex])?void 0:l.personVO)||{},m)),"guardian"===fe.currentType&&Object.assign((null==(c=null==(d=null==fe?void 0:fe.insured[fe.currentIndex])?void 0:d.guardian)?void 0:c.personVO)||{},m)},Ve=()=>{var e;const i=!me.value||(null==(e=me.value)?void 0:e.every((e=>e.validateTrialFields())));return(!ue.value||m(fe.holder))&&i},be=e=>{var i;return Promise.all([...(null==(i=me.value)?void 0:i.map((i=>i.validate(e))))||[],f(ue,fe.holder.trialFactorCodes,e)])},Oe=e=>{const{productList:i,config:n,schema:r,trialFactorCodes:a,beneficiaryList:o,guardian:s,personVO:t,nanoid:l,...d}=e||{};return d},Ie=()=>{const{length:e,[e-1]:i}=fe.initInsuredIList;fe.insured.push(A({...i,nanoid:b()}))},Te=h((()=>{const{multiInsuredMaxNum:e,multiInsuredSupportFlag:i}=fe.config;return i&&(!e||fe.insured.length<e)})),Se=h((()=>V(fe.holder.schema))),xe=h((()=>fe.insured.some((e=>V(e.schema)))));r((()=>{var e;return null==(e=fe.holder.personVO)?void 0:e.certType}),B(((e,i)=>{if(`${e}`==`${i}`)return!1;p("投保人信息变动了====");const[n,r]=g(fe.holder.schema,{certType:e});return y(fe.holder.config,r),!1}),300));let Le=!0;r([()=>{var e;return{...null==(e=fe.holder)?void 0:e.personVO}},()=>fe.insured.map((e=>{const{beneficiaryList:i,guardian:n,personVO:r}=e||{},a=V(i)?i.map((e=>({...e.personVO}))):[];return{...r,guardian:n.personVO||{},beneficiaryList:a}}))],B(((e,i)=>{var n,r,a,o;if(JSON.stringify(e)===JSON.stringify(i)&&!Le)return Le=!0,!1;Le=!1;const[s,t]=e,{insuredList:l}=Y.modelValue,d={holder:s,insuredList:t.map(((e,i)=>({...(null==l?void 0:l[i])||{},...e})))};if(console.log("result",A(d)),null==(n=fe.config)?void 0:n.isSpouseInsured){const[e,i]=t.map((e=>null==e?void 0:e.gender));if(e&&i&&String(e)===String(i))return R("被保人性别与投保要求不符")}if(JSON.stringify(null==(r=null==t?void 0:t[0])?void 0:r.personVO),Oe(null==(o=null==(a=Y.modelValue)?void 0:a.insuredList)?void 0:o[0]),console.log("-------result = ",d),v("update:modelValue",d),!Ve())return fe.trialValidated=!1,v("trailValidateFailed",d);be(!0).then((()=>{fe.trialValidated=!0,Y.isOnlyHolder||v("trailChange",d)})).catch((()=>{fe.trialValidated=!1,v("trailValidateFailed",d)}))}),500),{deep:!0}),r([()=>Y.productFactor,()=>Y.isTrial],B(((e,i)=>{if(P(e,i)||!(null==e?void 0:e[0]))return!1;p("投被保人要素变动了");const{insuredFactorCodes:n,holderFactorCodes:r}=U(q)||{},{holder:a,insured:o,beneficiary:s,guardian:t,config:l}=D(e[0],{isTrial:e[1],...Y.multiInsuredConfig,insuredFactorCodes:n,holderFactorCodes:r});return Object.assign(fe.holder,a),fe.config=l,V(o)&&(fe.initInsuredIList=o.map((e=>({...e,guardian:{},beneficiaryList:[]})))),fe.beneficiarySchema=A((null==s?void 0:s.schema)||[]),fe.guardianSchema=A((null==t?void 0:t.schema)||[]),!1}),300),{deep:!0,immediate:!0}),r((()=>{var e,i,n,r;return null==(r=null==(n=null==(i=null==(e=null==fe?void 0:fe.insured)?void 0:e[fe.currentIndex])?void 0:i.beneficiaryList)?void 0:n[fe.currentBenifitIndex])?void 0:r.personVO}),((e,i)=>{var n,r,a,o;(null==(o=null==(a=null==(r=null==(n=null==fe?void 0:fe.insured)?void 0:n[fe.currentIndex])?void 0:r.beneficiaryList)?void 0:a[fe.currentBenifitIndex])?void 0:o.personVO)&&(null==e?void 0:e.relationToInsured)!==(null==i?void 0:i.relationToInsured)&&p("受益人关系变动了+++++")}),{deep:!0,immediate:!0}),r((()=>{var e,i,n,r;return null==(r=null==(n=null==(i=null==(e=null==fe?void 0:fe.insured)?void 0:e[fe.currentIndex])?void 0:i.guardian)?void 0:n.personVO)?void 0:r.relationToInsured}),((e,i)=>{e!==i&&i&&(p("监护人关系变动了+++++"),Object.assign(fe.insured[fe.currentIndex],{guardian:{personVO:{relationToInsured:e}}}))}));const Ce=i(!1);return r([()=>{const{holder:e,insuredList:i=[]}=Y.modelValue,n=V(i)?i.map((e=>(console.log("item.guardian",A(e.guardian)),{config:e.config,personVO:Oe(e),guardian:{personVO:e.guardian||{}},beneficiaryList:V(e.beneficiaryList)?e.beneficiaryList.map((({config:e,...i})=>({config:e,personVO:Oe(i)}))):[]}))):[];return[null==e?void 0:e.config,Oe(e),n]},()=>fe.config,()=>fe.initInsuredIList],B((([[e,i,n],r,a],[[o,s,t],l,d])=>{if(JSON.stringify(e)===JSON.stringify(o)&&JSON.stringify(i)===JSON.stringify(s)&&JSON.stringify(n)===JSON.stringify(t)&&JSON.stringify(a)===JSON.stringify(d)&&Ce.value)return;Ce.value=!0,Object.assign(fe.holder.config,e),console.log("投保人数据===",A(fe.holder.personVO),A(i)),console.log("投保人数据===",A(fe.holder.personVO),A(i)),Object.assign(fe.holder.personVO,i);const{length:c}=n||[],{length:u}=fe.insured,{length:m,0:f={},[m-1]:p}=fe.initInsuredIList,{multiInsuredMaxNum:g=1,multiInsuredMinNum:v=1,multiInsuredSupportFlag:h}=(null==fe?void 0:fe.config)||{},V=Y.isView||c>u?Math.min(c,g):u||v,O=A(n);fe.insured=Array.from({length:V}).reduce(((e,i,n)=>{const{personVO:r,config:a={},guardian:o,beneficiaryList:s}=(null==O?void 0:O[n])||{},t=A(0===n?f:p);return e[n]?y(e[n],{...A(t),personVO:r,config:a,guardian:o,beneficiaryList:s}):(console.log("merge",e[n],o),e[n]={...t,personVO:r,config:a,guardian:o,beneficiaryList:s,nanoid:b()}),e}),fe.insured),console.log("insuredList",A(fe.insured))}),500),{deep:!0,immediate:!0}),r((()=>fe.list),((e,i)=>{e&&(fe.list=e)})),u({validate:be,validateTrialFields:Ve,validateHolder:(...e)=>{var i;return null==(i=ue.value)?void 0:i.validate(...e)},canTrail:()=>fe.trialValidated}),J((()=>{K({currentIndex:fe.currentIndex,currentBenifitIndex:fe.currentBenifitIndex,scrollTop:G.value})})),_((()=>{const e=Q(),i=W();fe.currentType=ne.query.selectedType||fe.currentType,e&&(he(e),X()),i&&(fe.currentIndex=i.currentIndex,fe.currentBenifitIndex=i.currentBenifitIndex,document.documentElement.scrollTo(0,i.scrollTop),Z())})),(e,i)=>{var n,r;const u=w,m=O,f=H;return a(),I(x,null,[l(Se)&&l(pe)?(a(),o(l(c),{key:0,ref_key:"holderFormRef",ref:ue,title:"投保人信息",class:"personal-info-card",model:l(fe).holder.personVO,schema:l(fe).holder.schema,config:l(fe).holder.config,"is-view":e.isView,"extra-provision":{objectType:l(d).HOLDER,objectId:null==(r=null==(n=l(fe).holder)?void 0:n.personVO)?void 0:r.id},onOcr:ge},{customer:s((()=>[l(ye)?(a(),I("div",{key:0,class:"choose-customer",onClick:i[0]||(i[0]=e=>ve("holder",1,0))},[T(u,{name:"customer",color:"#333"})])):S("",!0)])),_:1},8,["model","schema","config","is-view","extra-provision"])):S("",!0),l(xe)&&!e.isOnlyHolder?(a(),I(x,{key:1},[(a(!0),I(x,null,L(l(fe).insured,((i,n)=>{var r;return a(),o(se,$({ref_for:!0,ref_key:"insuredFormRef",ref:me,key:`${i.nanoid}_${n}`,modelValue:i.personVO,"onUpdate:modelValue":e=>i.personVO=e,"beneficiary-list":i.beneficiaryList,"onUpdate:beneficiaryList":e=>i.beneficiaryList=e,guardian:i.guardian,"onUpdate:guardian":e=>i.guardian=e,title:""+(l(fe).insured.length>1?`被保人${n+1}`:"被保人信息"),"holder-person-v-o":l(fe).holder.personVO},i,{"beneficiary-schema":l(fe).beneficiarySchema,"guardian-schema":l(fe).guardianSchema,"is-view":e.isView,"multi-beneficiary-num":null==(r=l(fe).config)?void 0:r.multiBeneficiaryMaxNum}),{riskList:s((()=>[t(e.$slots,"riskInfo",{insuredIndex:n},void 0,!0)])),customer:s((()=>[1!=+i.personVO.relationToHolder&&l(ye)?(a(),I("div",{key:0,class:"choose-customer",onClick:e=>ve("insured",n,0,i.personVO.relationToHolder)},[T(u,{name:"customer",color:"#333"})],8,te)):S("",!0)])),guardianCustomer:s((e=>[l(ye)?(a(),I("div",{key:0,class:"choose-customer",onClick:e=>ve("guardian",n,0,i.guardian.personVO.relationToInsured)},[T(u,{name:"customer",color:"#333"})],8,le)):S("",!0)])),benefitCustomer:s((e=>[l(ye)?(a(),I("div",{key:0,class:"choose-customer",onClick:r=>{var a;return ve("benifit",n,null==e?void 0:e.index,null==(a=i.beneficiaryList[null==e?void 0:e.index])?void 0:a.personVO.relationToInsured)}},[T(u,{name:"customer",color:"#333"})],8,de)):S("",!0)])),default:s((()=>[!e.isView&&n+1>l(fe).config.multiInsuredMinNum?(a(),I("span",{key:0,class:"delete-button",onClick:e=>(e=>{k.confirm({message:"确定要删除该被保人吗？"}).then((()=>{fe.insured.splice(e,1)}))})(n)},[T(u,{name:"delete",color:"var(--van-primary-color)"})],8,ce)):S("",!0)])),_:2},1040,["modelValue","onUpdate:modelValue","beneficiary-list","onUpdate:beneficiaryList","guardian","onUpdate:guardian","title","holder-person-v-o","beneficiary-schema","guardian-schema","is-view","multi-beneficiary-num"])})),128)),!e.isView&&l(Te)?(a(),o(f,{key:0,class:"add-button-wrap"},{title:s((()=>[E("span",{class:"add-button",onClick:Ie},[T(m,{name:"plus"}),C("添加被保人")])])),_:1})):S("",!0)],64)):S("",!0)],64)}}}),[["__scopeId","data-v-3347c46e"]]);export{me as P};
