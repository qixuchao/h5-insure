import{d as e,r as i,i as l,j as a,O as t,z as n,o,c as s,b as r,w as u,a as d,u as c,l as m,e as p,q as v,F as y,b4 as f,b5 as b,_ as V,bd as h,be as g,am as k,bf as O,f as L,b9 as I,ba as C,bb as S,bc as T,aB as x,bg as w,n as F,a8 as _,aA as N,ae as D,bh as A,t as j,p as B,h as U,ac as P,ax as K,T as $,bi as J,b8 as M,bj as H,bk as R,a0 as E,aq as q,as as Y,at as z,au as G,b6 as Q,b7 as W,a6 as X}from"./index-f532db20.js";import{S as Z,g as ee}from"./get-3c32b476.js";import{a as ie,B as le}from"./infoCollection-07eb5a4d.js";import{S as ae}from"./index-97b93ce9.js";import{_ as te,a as ne}from"./empth-c0adfdba.js";import{c as oe}from"./cloneDeep-7be160ee.js";import"./PolicyInfo-b798c202.js";import{h as se,f as re}from"./trial-90f2cd38.js";import{f as ue,m as de,g as ce,a as me,I as pe,b as ve,S as ye}from"./search-71699e0a.js";import{P as fe}from"./config-98e8d477.js";import{L as be}from"./product-585b0e6f.js";const Ve={key:0},he={class:"custom-field"},ge={key:1,class:"flex-field"},ke={class:"pro-radio-wrap"},Oe={key:2},Le={class:"pro-radio-wrap"},Ie={class:"custom-field"},Ce={key:1},Se={key:3},Te={class:"custom-field"},xe={key:1},we={class:"custom-field"},Fe={key:0},_e={key:1},Ne={key:4},De=e({name:"BaoeBaofei"});var Ae=V(e({...De,props:{originData:{default:()=>({})},modelValue:{default:()=>({})},defalutValue:{default:()=>({})},trialResult:{default:()=>({})}},emits:["update:modelValue","trialChange"],setup(e,{emit:V}){const h=e,g=i({hadSetDefault:!1}),k=l(h.originData),O=l(h.modelValue),L=l(0),I=()=>2===k.value.saleMethod?{label:"保费",key:"initialPremium"}:{label:"保额",key:"initialAmount"},C=()=>{switch(`${k.value.displayUnit}`){case ie.YUAN:return"元";case ie.MONTH_SALARY:return"倍月薪";case ie.MILLION:return"万元";case ie.COPY:return"份"}return""},S=a((()=>2===k.value.saleMethod?{label:"保费",key:"initialPremium"}:{label:"保额",key:"initialAmount"})),T=(...e)=>{if(1===L.value){const e=O.value[S.value.key],i=h.originData.minStepValue,l=h.originData.maxStepValue,a=h.originData.stepValue;if(+e>=+l)O.value[S.value.key]=l;else if(+e<=+i)O.value[S.value.key]=i;else{const l=+e-+i,t=Math.floor(l/+a);l%+a!=0&&(O.value[S.value.key]=+i+t*+a)}}return!0},x=()=>{const{displayType:e,requireCopies:i}=k.value,l=I().key,a=!O.value.riskCode;1===e?L.value=1:3===e&&2===i?(L.value=2,k.value.displayValues.length>=1&&a&&!O.value[l]&&(O.value[l]=k.value.displayValues[0].code||k.value.displayValues[0].value)):3===e&&1===i?(L.value=3,k.value.minCopiesValue===k.value.maxCopiesValue&&a&&!O.value.copy&&(O.value.copy=k.value.minCopiesValue),k.value.displayValues.length>=1&&a&&!O.value[l]&&(O.value[l]=k.value.displayValues[0].code||k.value.displayValues[0].value)):2===e&&(L.value=4,k.value.minCopiesValue===k.value.maxCopiesValue&&a&&!O.value.copy&&(O.value.copy=k.value.minCopiesValue),a&&!O.value.initialAmount&&(O.value.initialAmount=k.value.copiesAmount))},w=a((()=>{if(k.value.displayValues){const e=I().key;return 1!==k.value.displayValues.length||O.value.riskCode||(O.value[e]=k.value.displayValues[0].code),k.value.displayValues.map((e=>({label:e.value,value:e.code})))}return[]})),F=()=>{};return t((()=>{x(),V("update:modelValue",O.value)})),n((()=>k),(e=>{x()}),{deep:!0}),n((()=>h.defalutValue),(e=>{(null==e?void 0:e.riskCode)&&!g.hadSetDefault&&(g.hadSetDefault=!0,O.value={...O.value,initialAmount:e.initialAmount,initialPremium:e.initialPremium,copy:e.copy})}),{deep:!0,immediate:!0}),n((()=>O.value),(e=>{(()=>{if(1===L.value){const e=O.value[S.value.key],i=h.originData.minStepValue,l=h.originData.maxStepValue,a=h.originData.stepValue;if(+e>+l)return!1;if(+e<+i)return!1;if((+e-+i)%+a!=0)return!1}return!0})()&&(V("update:modelValue",e),V("trialChange",e))}),{deep:!0,immediate:!0}),(e,i)=>{const l=Z,a=f,t=b;return o(),s(y,null,[1===L.value?(o(),s("div",Ve,[r(a,{label:`基本${c(S).label}`,name:c(S).key,class:"risk-select-field"},{input:u((()=>[d("div",he,[r(l,{modelValue:O.value[c(S).key],"onUpdate:modelValue":i[0]||(i[0]=e=>O.value[c(S).key]=e),"input-width":"80px","default-value":e.originData.minStepValue,min:e.originData.minStepValue,step:e.originData.stepValue,max:e.originData.maxStepValue,theme:"round",onBlur:T},null,8,["modelValue","default-value","min","step","max"])])])),_:1},8,["label","name"])])):2===L.value?(o(),s("div",ge,[r(a,{modelValue:O.value[c(S).key],"onUpdate:modelValue":i[2]||(i[2]=e=>O.value[c(S).key]=e),label:`基本${c(S).label}`,name:c(S).key,class:"risk-select-field"},{input:u((()=>[d("div",ke,[r(t,{modelValue:O.value[c(S).key],"onUpdate:modelValue":i[1]||(i[1]=e=>O.value[c(S).key]=e),options:c(w),onclick:F},null,8,["modelValue","options"])])])),_:1},8,["modelValue","label","name"])])):3===L.value?(o(),s("div",Oe,[r(a,{modelValue:O.value[c(S).key],"onUpdate:modelValue":i[4]||(i[4]=e=>O.value[c(S).key]=e),label:`基本${c(S).label}`,name:c(S).key,class:"risk-select-field"},{input:u((()=>[d("div",Le,[r(t,{modelValue:O.value[c(S).key],"onUpdate:modelValue":i[3]||(i[3]=e=>O.value[c(S).key]=e),options:c(w),onclick:F},null,8,["modelValue","options"])])])),_:1},8,["modelValue","label","name"]),d("div",null,[r(a,{modelValue:O.value.copy,"onUpdate:modelValue":i[6]||(i[6]=e=>O.value.copy=e),label:"份数",name:"copy",class:"risk-select-field"},{input:u((()=>[d("div",Ie,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(o(),m(l,{key:0,modelValue:O.value.copy,"onUpdate:modelValue":i[5]||(i[5]=e=>O.value.copy=e),"input-width":"80px","default-value":e.originData.minCopiesValue,min:e.originData.minCopiesValue||1,step:1,max:e.originData.maxCopiesValue,theme:"round"},null,8,["modelValue","default-value","min","max"])):(o(),s("span",Ce,p(e.originData.minCopiesValue),1))])])),_:1},8,["modelValue"])])])):4===L.value?(o(),s("div",Se,[r(a,{modelValue:O.value.copy,"onUpdate:modelValue":i[8]||(i[8]=e=>O.value.copy=e),label:"份数",name:"copy",class:"risk-select-field"},{input:u((()=>[d("div",Te,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(o(),m(l,{key:0,modelValue:O.value.copy,"onUpdate:modelValue":i[7]||(i[7]=e=>O.value.copy=e),"input-width":"64px","default-value":e.originData.minCopiesValue,min:e.originData.minCopiesValue||1,step:1,max:e.originData.maxCopiesValue,theme:"round"},null,8,["modelValue","default-value","min","max"])):(o(),s("span",xe,p(e.originData.minCopiesValue),1))])])),_:1},8,["modelValue"]),r(a,{label:c(S).label,name:"copyAmount",class:"risk-select-field"},{input:u((()=>[d("div",we,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(o(),s("span",Fe,p(+e.originData.copiesAmount*+O.value.copy+C()),1)):(o(),s("span",_e,p(+e.originData.minCopiesValue*+e.originData.copiesAmount+C()),1))])])),_:1},8,["label"])])):v("",!0),2===k.value.saleMethod&&e.trialResult&&e.trialResult.initialAmount>0?(o(),s("div",Ne,[r(a,{label:"保额",class:"risk-select-field"},{input:u((()=>[d("span",null,p(e.trialResult.initialAmount),1)])),_:1})])):v("",!0)],64)}}}),[["__scopeId","data-v-3a02f6d0"]]);const je=e({name:"BeneficiaryItem"});var Be=V(e({...je,props:{modelValue:{default:()=>({})},schema:{default:()=>[]},config:{default:()=>({})},isView:{type:Boolean,default:!1},isTrial:{type:Boolean,default:!1},title:{default:"受益人"}},emits:["update:modelValue","trailChange"],setup(e,{expose:a,emit:t}){const s=e,r=l(null),d=i({validated:!1,schema:[],config:{},personVO:{}});return n((()=>s.config),(e=>{e&&Object.assign(d.config,e)}),{deep:!0,immediate:!0}),n((()=>s.schema),(e=>{e&&Object.assign(d.schema,oe(s.schema))}),{deep:!0,immediate:!0}),n((()=>s.modelValue),((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&(h("受益人数据变动了"),Object.assign(d.personVO,e))}),{deep:!0,immediate:!0}),n((()=>d.personVO),(e=>{e&&t("update:modelValue",e)}),{deep:!0,immediate:!0}),n((()=>{var e;return null==(e=d.personVO)?void 0:e.relationToInsured}),((e,i)=>{if(e===i)return!1;h("受益人与被保人关系变动了");const{certType:l}=d.personVO||{},[a,t]=g(d.schema,{certType:l,relationToHolder:e});return k(d.config,t),!s.isView&&e&&i&&Object.assign(d.personVO,{...O(d.personVO,(e=>!(a&&"certType"===e))),relationToInsured:e}),!1}),{immediate:!0}),a({validate:e=>T(r,s.trialFactorCodes,e),validateTrialFields:()=>S({personVO:d.personVO,trialFactorCodes:s.trialFactorCodes})}),(e,i)=>(o(),m(c(C),{ref_key:"formRef",ref:r,class:"personal-info-card",title:e.title,model:c(d).personVO,schema:c(d).schema,config:c(d).config,"is-view":e.isView,"extra-provision":{objectType:c(I).BENEFICIARY,objectId:c(d).personVO.id}},{cardTitleExtra:u((()=>[L(e.$slots,"default",{},void 0,!0)])),_:3},8,["title","model","schema","config","is-view","extra-provision"]))}}),[["__scopeId","data-v-eb39bf9e"]]);const Ue=["onClick"],Pe=e({name:"InsuredItem"});var Ke=V(e({...Pe,props:{modelValue:{default:()=>({})},title:{default:""},holderPersonVO:{},schema:{default:()=>[]},config:{default:()=>({})},isView:{type:Boolean,default:!1},isTrial:{type:Boolean,default:!1},trialFactorCodes:{default:()=>[]},multiBeneficiaryMaxNum:{default:null},beneficiaryList:{default:()=>[]},beneficiarySchema:{default:()=>[]}},emits:["update:modelValue","update:beneficiaryList"],setup(e,{expose:t,emit:d}){const p=e,f=l(null),b=l(null),V=l(null),j={schema:[],trialFactorCodes:[],config:{},personVO:{}},B=i({validated:!1,schema:[],config:{},personVO:{},beneficiaryTypeSchemaList:[],beneficiarySchemaList:[],beneficiaryList:[]}),U=()=>{B.beneficiaryList.push(oe({...j,nanoid:w(),schema:p.beneficiarySchema}))},P=a((()=>!p.multiBeneficiaryMaxNum||B.beneficiaryList.length<p.multiBeneficiaryMaxNum)),K=a((()=>!B.schema.filter((e=>{var i;return!(e.hidden||(null==(i=B.config[e.name])?void 0:i.hidden))})).length)),$=a((()=>B.schema.filter((e=>e.isSelfInsuredNeed)).map((e=>e.name)))),J=a((()=>x(p.beneficiarySchema))),M=a((()=>{var e;return String(null==(e=B.personVO)?void 0:e.insuredBeneficiaryType)===le.SPECIFY}));return n((()=>p.holderPersonVO),(e=>{var i;h("------投保人信息变动了-----");const{id:l,...a}=e||{};if("1"===String(null==(i=B.personVO)?void 0:i.relationToHolder)){const e=x($.value)?Object.keys(a).reduce(((e,i)=>([...$.value,"occupationClass"].includes(i)&&!["birthday","age","gender"].includes(i)||(e[i]=a[i]),e)),{}):a;Object.assign(B.personVO,e)}}),{deep:!0,immediate:!0}),n((()=>p.beneficiarySchema),(e=>{B.beneficiarySchemaList=x(e)?e.filter((e=>"insuredBeneficiaryType"!==e.name)):[],B.beneficiaryTypeSchemaList=x(e)?e.filter((e=>"insuredBeneficiaryType"===e.name)):[]}),{deep:!0,immediate:!0}),n(M,((e,i)=>{String(e)!==String(i)&&(h("受益人类型关系变动了"),e?!x(B.beneficiaryList)&&U():B.beneficiaryList=[])}),{immediate:!0}),n((()=>oe(B.beneficiaryList).map((e=>({personVO:e.personVO,nanoid:e.nanoid})))),((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&d("update:beneficiaryList",e)}),{deep:!0,immediate:!0}),n((()=>{var e;return null==(e=B.personVO)?void 0:e.relationToHolder}),((e,i)=>{if(!e)return;h("与投保人关系变动了");const{personVO:l,schema:a=[],config:t}=B||{},{id:n,...o}=p.holderPersonVO||{},s="1"===String(l.relationToHolder),[r,u]=g(a,l);if(k(t,u),a.forEach((e=>{e.relationToHolder=l.relationToHolder,e.hidden=!e.isSelfInsuredNeed&&s})),!p.isView&&i&&String(e)!==String(i)){let e={...l,...o};s||(e={...O(l,(e=>!(r&&"certType"===e))),relationToHolder:l.relationToHolder}),Object.assign(B.personVO,e)}}),{deep:!0}),n((()=>{var e;return null==(e=B.personVO)?void 0:e.relationToMainInsured}),((e,i)=>{if(!e)return;h("次被保人与主被保人关系变动了");const{personVO:l,schema:a=[],config:t}=B||{},{certType:n}=l||{},[o,s]=g(a,{certType:n,relationToHolder:e});k(t,s),!p.isView&&i&&String(e)!==String(i)&&Object.assign(B.personVO,{...O(l,(e=>!(o&&"certType"===e))),relationToMainInsured:l.relationToMainInsured})})),n((()=>p.config),(e=>{e&&Object.assign(B.config,e)}),{deep:!0,immediate:!0}),n((()=>p.schema),((e,i)=>{e&&JSON.stringify(e)!==JSON.stringify(i)&&Object.assign(B.schema,oe(e))}),{deep:!0,immediate:!0}),n((()=>p.modelValue),((e,i)=>{if(JSON.stringify(e)!==JSON.stringify(i)){const{beneficiaryList:i,...l}=e;k(B.personVO,l)}}),{deep:!0,immediate:!0}),n((()=>oe(p.beneficiaryList)),((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&(B.beneficiaryList=x(e)?e.map((e=>({...e,nanoid:e.nanoid||w()}))):[])}),{deep:!0,immediate:!0}),n((()=>B.personVO),(e=>{e&&d("update:modelValue",e)}),{deep:!0,immediate:!0}),t({validate:e=>{var i;return Promise.all([T(f,p.trialFactorCodes,e),T(b,[],e),...(null==(i=V.value)?void 0:i.map((i=>i.validate(e))))||[]])},validateTrialFields:()=>S({personVO:B.personVO,trialFactorCodes:p.trialFactorCodes})}),(e,i)=>{const l=D,a=A;return o(),s(y,null,[r(c(C),{ref_key:"insuredFormRef",ref:f,class:"personal-info-card",title:c(K)?"":e.title,model:c(B).personVO,schema:c(B).schema,config:c(B).config,"is-view":e.isView,"extra-provision":{objectType:c(I).INSURED,objectId:c(B).personVO.id}},{cardTitleExtra:u((()=>[L(e.$slots,"default",{},void 0,!0)])),_:3},8,["title","model","schema","config","is-view","extra-provision"]),c(J)?(o(),s(y,{key:0},[r(c(C),{ref_key:"beneficiaryTypeFormRef",ref:b,class:"personal-info-card",title:"受益人",model:c(B).personVO,schema:c(B).beneficiaryTypeSchemaList,"is-view":e.isView},null,8,["model","schema","is-view"]),c(M)?(o(),s(y,{key:0},[(o(!0),s(y,null,F(c(B).beneficiaryList,((i,a)=>(o(),m(Be,{ref_for:!0,ref_key:"beneficiaryFormRef",ref:V,key:`${i.nanoid}_${a}`,modelValue:i.personVO,"onUpdate:modelValue":e=>i.personVO=e,title:`受益人${a+1}`,schema:c(B).beneficiarySchemaList,config:i.config,"is-view":e.isView},{default:u((()=>[L(e.$slots,"cardTitleExtraBenifit",{index:a},void 0,!0),a>0&&!e.isView?(o(),s("span",{key:0,class:"delete-button",onClick:e=>(e=>{N.confirm({message:"确定要删除该受益人吗？"}).then((()=>{B.beneficiaryList.splice(e,1)}))})(a)},[r(l,{name:"delete"})],8,Ue)):v("",!0)])),_:2},1032,["modelValue","onUpdate:modelValue","title","schema","config","is-view"])))),128)),!e.isView&&c(P)?(o(),s("span",{key:0,class:"add-button",onClick:U},[r(a,{name:"plus"}),_("添加受益人")])):v("",!0)],64)):v("",!0)],64)):v("",!0),L(e.$slots,"riskList",{},void 0,!0)],64)}}}),[["__scopeId","data-v-524344c0"]]);const $e={class:"customer-list-item"},Je={class:"left"},Me=["src"],He={class:"left-item"},Re={class:"name"},Ee={key:0,class:"cert-no"},qe={class:"cert-type-name"},Ye={key:1,class:"cert-no"},ze={class:"cert-type-name"},Ge={key:0,class:"from-wx"},Qe=d("img",{class:"img-wx",alt:""},null,-1),We=e({__name:"item",props:{data:{type:Object,required:!1,default:()=>Object},disabled:{type:Boolean,required:!1,default:()=>!0}},emits:["on-delete","on-close"],setup(e,{emit:i}){const a=e,t=l(!1),{data:n,disabled:m}=j(a);return(e,l)=>{const a=me;return o(),s("div",$e,[r(a,{disabled:c(m)},{default:u((()=>{var e,a,r,u,m,y,f,b;return[d("div",{class:B(["list-item",!0===t.value?"item-bg":""]),onClick:l[0]||(l[0]=e=>(e=>{t.value=!0,e.stopPropagation(),console.log("这里关闭弹窗",n.value),i("on-close",n.value)})(e))},[d("div",Je,[d("div",null,[d("img",{src:c(n).gender?"1"===c(n).gender?c(ue):c(de):c(ce),alt:"",class:"mf"},null,8,Me)]),d("div",null,[d("div",He,[d("div",Re,p(c(n).name),1),(null==(a=null==(e=c(n))?void 0:e.certInfo[0])?void 0:a.certNo)&&1==+(null==(u=null==(r=c(n))?void 0:r.certInfo[0])?void 0:u.certType)?(o(),s("div",Ee,[_(p(c(n).certInfo[0].desensitizaCertNo)+" ",1),d("span",qe,p(c(n).certInfo[0].certTypeName),1)])):v("",!0),(null==(y=null==(m=c(n))?void 0:m.certInfo[0])?void 0:y.certNo)&&1!=+(null==(b=null==(f=c(n))?void 0:f.certInfo[0])?void 0:b.certType)?(o(),s("div",Ye,[_(p(c(n).certInfo[0].certNo)+" ",1),d("span",ze,p(c(n).certInfo[0].certTypeName),1)])):v("",!0)]),c(n).relative?(o(),s("div",Ge,[Qe,_(" 微信客户 ")])):v("",!0)])])],2)]})),_:1},8,["disabled"])])}}});const Xe={class:"customer-list"},Ze={key:0,class:"list-pr"},ei={key:1,class:"list-pr"};var ii=V(e({__name:"index",props:{data:{type:Array,required:!0,default:()=>[]},type:{type:String,required:!0,default:()=>"firstLetter"},disabled:{type:Boolean,required:!1,default:()=>!0}},emits:["on-delete","on-close"],setup(e,{emit:i}){const a=e,{data:t,type:d,disabled:p}=j(a),v=l([]),f=l([]),b=e=>{i("on-delete",e)},V=e=>{i("on-close",e),console.log("这里关闭弹窗1111222----",e)};return n((()=>a.data),(()=>{t.value=a.data||[],console.log("data",t),v.value=t.value.filter((e=>!!(e.children&&Array.isArray(e.children)&&e.children.length>0))),f.value=v.value.map((e=>e.label))}),{immediate:!0,deep:!0}),(e,i)=>{const l=pe,a=ve;return o(),s("div",Xe,["firstLetter"===c(d)?(o(),s("div",Ze,[r(a,{"highlight-color":"$zaui-brand","index-list":f.value,sticky:!1},{default:u((()=>[(o(!0),s(y,null,F(v.value,(e=>(o(),s(y,{key:e.label},[r(l,{index:`${e.label}`},null,8,["index"]),(o(!0),s(y,null,F(e.children,(e=>(o(),m(We,{key:e.agentCustomerId,data:e,disabled:c(p),onOnDelete:b,onOnClose:V},null,8,["data","disabled"])))),128))],64)))),128))])),_:1},8,["index-list"])])):(o(),s("div",ei,[(o(!0),s(y,null,F(c(t),(e=>(o(),m(We,{key:e.agentCustomerId,data:e,disabled:c(p),onOnDelete:b,onOnClose:V},null,8,["data","disabled"])))),128))]))])}}}),[["__scopeId","data-v-7f0e84c3"]]);const li=e=>(z("data-v-7af40b90"),e=e(),G(),e),ai=li((()=>d("img",{src:te},null,-1))),ti=["onClick"],ni=li((()=>d("img",{src:te},null,-1))),oi=["onClick"],si=li((()=>d("img",{src:te},null,-1))),ri=["onClick"],ui={class:"search-bar"},di=["src"],ci={key:1,class:"empth"},mi=[li((()=>d("p",null,[d("img",{src:ne,class:"ig"})],-1))),li((()=>d("p",{class:"p1"},"暂时还没有客户哦～",-1)))],pi=e({name:"PersonalInfo"});var vi=V(e({...pi,props:{productFactor:{default:()=>({})},modelValue:{default:()=>({})},isTrial:{type:Boolean,default:!1},isView:{type:Boolean,default:!1},isOnlyHolder:{type:Boolean,default:!1},multiInsuredConfig:{}},emits:["update:modelValue","trailChange","trailValidateFailed","closeCustomerPopoup"],setup(e,{expose:t,emit:p}){const f=e,b=U(),V=P(),{isShare:O,saleChannelId:j}=b.query,B=l(null),z=l(null),G=i({count:0,slotProps:{},uniqKey:"",currentIndex:0,currentBenifitIndex:0,currentType:"",keyword:void 0,show:!1,list:[],config:{},trialValidated:!1,holder:{personVO:{},schema:[],trialFactorCodes:[],config:{}},beneficiarySchema:[],initInsuredIList:[],insured:[]}),Q=async e=>{var i,l;G.keyword;const a={pageNum:1,pageSize:999,queryBean:{keyword:G.keyword||""}},t=await se(a),n=[];Object.keys((null==(i=null==t?void 0:t.data)?void 0:i.customerMaps)||{}).forEach((e=>{var i;n.push({label:e,children:null==(i=null==t?void 0:t.data)?void 0:i.customerMaps[e]})})),G.list=n,G.count=null==(l=null==t?void 0:t.data)?void 0:l.count},W=()=>{Q(G.keyword)},X=()=>{Q()},Z=a((()=>!f.isTrial||f.isOnlyHolder)),ee=(e,i,l)=>{G.currentType=e,"benifit"!==e?G.currentIndex=i:(G.currentIndex=i,G.currentBenifitIndex=l),G.uniqKey=w(),Q(),G.show=!0},ie=()=>{setTimeout((()=>{G.show=!1}),300)},le=()=>"holder"===G.currentType?G.holder.schema.map((e=>e.name))||[]:"insured"===G.currentType?G.insured[G.currentIndex].schema.map((e=>e.name))||[]:"benifit"===G.currentType?G.beneficiarySchema.map((e=>e.name))||[]:void 0,te=a((()=>{var e,i;return null==(i=null==(e=null==G?void 0:G.holder)?void 0:e.personVO)?void 0:i.name})),ne=a((()=>{var e,i;return null==(i=null==(e=null==G?void 0:G.holder)?void 0:e.personVO)?void 0:i.gender})),re=a((()=>{var e,i;return null==(i=null==(e=null==G?void 0:G.holder)?void 0:e.personVO)?void 0:i.birthday})),ue=a((()=>{var e,i;return null==(i=null==(e=null==G?void 0:G.holder)?void 0:e.personVO)?void 0:i.certType})),de=a((()=>{var e,i;return null==(i=null==(e=null==G?void 0:G.holder)?void 0:e.personVO)?void 0:i.certNo})),ce=(e,i)=>{var l,a,t,n,o;console.log("convertCustomerData",e);const s=null==(l=null==e?void 0:e.contactInfo)?void 0:l.find((e=>"01"===e.contactType)),r=null==(a=null==e?void 0:e.contactInfo)?void 0:a.find((e=>"02"===e.contactType)),u=null==e?void 0:e.certInfo.filter((e=>"1"===e.certType)),d={name:null==e?void 0:e.name,gender:null==e?void 0:e.gender,birthday:null==e?void 0:e.birthday,mobile:(null==s?void 0:s.contactNo)||null,email:(null==r?void 0:r.contactNo)||null,certNo:(null==(t=u[0])?void 0:t.certNo)||null,certType:(null==(n=u[0])?void 0:n.certType)||null};console.log("insureKeys",le());const c=null==(o=le())?void 0:o.reduce(((e,i)=>d.hasOwnProperty(i)?{...e,[i]:d[i]}:e),{});return console.log("extractedObject===",c),console.log("state.holder.schema=====",G.holder.schema),c},me=e=>{var i,l,a,t,n,o,s,r,u,d,c;if(G.show=!1,"holder"===G.currentType&&Object.assign((null==(i=null==G?void 0:G.holder)?void 0:i.personVO)||{},ce(e)),"insured"===G.currentType){const i=null==(l=null==G?void 0:G.insured[G.currentIndex])?void 0:l.schema.some((e=>"relationToHolder"===e.name&&e.attributeValueList.some((e=>"1"===e.code)))),{name:n,gender:o,birthday:s,certType:r,certNo:u}=ce(e);if(te.value===n&&ne.value===o&&re.value===s&&ue.value===r&&de.value===u)return i?void Object.assign((null==(a=null==G?void 0:G.insured[G.currentIndex])?void 0:a.personVO)||{},{relationToHolder:"1"}):void $("与投保人关系未配置本人");Object.assign((null==(t=null==G?void 0:G.insured[G.currentIndex])?void 0:t.personVO)||{},ce(e))}if("benifit"===G.currentType){const{name:i,gender:l,birthday:a,certType:t,certNo:m}=ce(e);(null==(n=null==G?void 0:G.insured[G.currentIndex])?void 0:n.personVO.name)===i&&(null==(o=null==G?void 0:G.insured[G.currentIndex])?void 0:o.personVO.gender)===l&&(null==(s=null==G?void 0:G.insured[G.currentIndex])?void 0:s.personVO.birthday)===a&&(null==(r=null==G?void 0:G.insured[G.currentIndex])?void 0:r.personVO.certType)===t&&(null==(u=null==G?void 0:G.insured[G.currentIndex])?void 0:u.personVO.certNo)===m?$("指定受益人不可为被保人本人"):Object.assign((null==(c=null==(d=null==G?void 0:G.insured[G.currentIndex])?void 0:d.beneficiaryList[G.currentBenifitIndex])?void 0:c.personVO)||{},ce(e))}},pe=()=>{var e;const i=!z.value||(null==(e=z.value)?void 0:e.every((e=>e.validateTrialFields())));return(!B.value||S(G.holder))&&i},ve=e=>{var i;return Promise.all([...(null==(i=z.value)?void 0:i.map((i=>i.validate(e))))||[],T(B,G.holder.trialFactorCodes,e)])},fe=e=>{const{productList:i,config:l,schema:a,trialFactorCodes:t,beneficiaryList:n,personVO:o,nanoid:s,...r}=e||{};return r},be=()=>{const{length:e,[e-1]:i}=G.initInsuredIList;G.insured.push(oe({...i,nanoid:w()}))},Ve=a((()=>{const{multiInsuredMaxNum:e,multiInsuredSupportFlag:i}=G.config;return i&&(!e||G.insured.length<e)})),he=a((()=>x(G.holder.schema))),ge=a((()=>G.insured.some((e=>x(e.schema))))),ke=(e,i)=>x(e)?e.reduce(((e,l)=>(e[l]=i[l],e)),{}):{},Oe=(e,i,l={})=>!!x(e)&&JSON.stringify(ke(e,i))!==JSON.stringify(ke(e,l));return n((()=>{var e;return null==(e=G.holder.personVO)?void 0:e.certType}),((e,i)=>{if(`${e}`==`${i}`)return!1;h("投保人信息变动了====");const[l,a]=g(G.holder.schema,{certType:e});return k(G.holder.config,a),!1})),n([()=>{var e;return{...null==(e=G.holder)?void 0:e.personVO}},()=>G.insured.map((e=>{const{beneficiaryList:i,personVO:l}=e||{};return{...l,beneficiaryList:x(i)?i.map((e=>({...e.personVO}))):[]}}))],K(((e,i)=>{var l,a,t;const[n,o]=e,s=((e,i)=>{const l=Oe(G.holder.trialFactorCodes,e[0],i[0]),a=G.insured.some(((e,l)=>{var a;const{trialFactorCodes:t,personVO:n}=e;return Oe(t,n,null==(a=i[1])?void 0:a[l])}));return l||a})([n,o],i);h(`投被保人信息变动了---${s}`);const{insuredList:r}=f.modelValue,u={holder:n,insuredList:o.map(((e,i)=>({...(null==r?void 0:r[i])||{},...e})))};if(G.config.isSpouseInsured){const[e,i]=o.map((e=>null==e?void 0:e.gender));if(e&&i&&String(e)===String(i))return $("被保人性别与投保要求不符")}if(JSON.stringify(null==(l=null==o?void 0:o[0])?void 0:l.personVO),fe(null==(t=null==(a=f.modelValue)?void 0:a.insuredList)?void 0:t[0]),console.log("-------result = ",u),p("update:modelValue",u),!pe())return G.trialValidated=!1,p("trailValidateFailed",u);ve(!0).then((()=>{G.trialValidated=!0,s&&!f.isOnlyHolder&&p("trailChange",u)})).catch((()=>{G.trialValidated=!1,p("trailValidateFailed",u)}))}),500),{deep:!0}),n([()=>f.productFactor,()=>f.isTrial],((e,i)=>{if(J(e,i)||!e[0])return!1;h("投被保人要素变动了");const{insuredFactorCodes:l,holderFactorCodes:a}=M(H)||{},{holder:t,insured:n,beneficiary:o,config:s}=R(e[0],{isTrial:e[1],...f.multiInsuredConfig,insuredFactorCodes:l,holderFactorCodes:a});return Object.assign(G.holder,t),G.config=s,x(n)&&(G.initInsuredIList=n.map((e=>({...e,beneficiaryList:[]})))),G.beneficiarySchema=oe((null==o?void 0:o.schema)||[]),!1}),{deep:!0,immediate:!0}),n((()=>{var e,i;return null==(i=null==(e=null==G?void 0:G.insured[G.currentIndex])?void 0:e.beneficiaryList[G.currentBenifitIndex])?void 0:i.personVO}),((e,i)=>{var l,a;(null==(a=null==(l=null==G?void 0:G.insured[G.currentIndex])?void 0:l.beneficiaryList[G.currentBenifitIndex])?void 0:a.personVO)&&(null==e?void 0:e.relationToInsured)!==(null==i?void 0:i.relationToInsured)&&(h("受益人关系变动了+++++"),G.insured[G.currentIndex].beneficiaryList[G.currentBenifitIndex].personVO={relationToInsured:null==e?void 0:e.relationToInsured})}),{deep:!0,immediate:!0}),n([()=>{const{holder:e,insuredList:i}=f.modelValue;console.log("表单数据",oe(e));const l=x(i)?i.map((e=>({config:e.config,personVO:fe(e),beneficiaryList:x(e.beneficiaryList)?e.beneficiaryList.map((({config:e,...i})=>({config:e,personVO:fe(i)}))):[]}))):[];return[null==e?void 0:e.config,fe(e),l]},()=>G.config,()=>G.initInsuredIList],(([[e,i,l]])=>{h("投被保人数据变动了"),Object.assign(G.holder.config,e),console.log("投保人数据===",oe(G.holder.personVO),oe(i)),console.log("投保人数据===",oe(G.holder.personVO),oe(i)),Object.assign(G.holder.personVO,i);const{length:a}=l||[],{length:t}=G.insured,{length:n,0:o={},[n-1]:s}=G.initInsuredIList,{multiInsuredMaxNum:r,multiInsuredMinNum:u,multiInsuredSupportFlag:d}=G.config,c=f.isView||a>t?Math.min(a,r):t||u;G.insured=Array.from({length:c}).reduce(((e,i,a)=>{const{personVO:t,config:n={},beneficiaryList:r}=(null==l?void 0:l[a])||{},u=oe(0===a?o:s);return e[a]?k(e[a],{...oe(u),personVO:t,config:n,beneficiaryList:r}):e[a]={...u,personVO:t,config:n,beneficiaryList:r,nanoid:w()},e}),G.insured)}),{deep:!0,immediate:!0}),n((()=>G.list),((e,i)=>{e&&(G.list=e)})),t({validate:ve,validateTrialFields:pe,validateHolder:(...e)=>{var i;return null==(i=B.value)?void 0:i.validate(...e)},canTrail:()=>G.trialValidated}),(e,i)=>{const l=D,a=A,t=q,n=ae,p=Y;return o(),s(y,null,[c(he)&&c(Z)?(o(),m(c(C),{key:0,ref_key:"holderFormRef",ref:B,title:"投保人信息",class:"personal-info-card",model:c(G).holder.personVO,schema:c(G).holder.schema,config:c(G).holder.config,"is-view":e.isView,"extra-provision":{objectType:c(I).HOLDER,objectId:c(G).holder.personVO.id}},{cardTitleExtra:u((()=>[c(O)||e.isView||e.isTrial||!c(V)?v("",!0):(o(),s("div",{key:0,class:"choose-customer",onClick:i[0]||(i[0]=e=>ee("holder",1,0))},[ai,_(" 选择老用户 ")]))])),_:1},8,["model","schema","config","is-view","extra-provision"])):v("",!0),c(ge)&&!e.isOnlyHolder?(o(),s(y,{key:1},[(o(!0),s(y,null,F(c(G).insured,((i,a)=>(o(),m(Ke,E({ref_for:!0,ref_key:"insuredFormRef",ref:z,key:`${i.nanoid}_${a}`,modelValue:i.personVO,"onUpdate:modelValue":e=>i.personVO=e,"beneficiary-list":i.beneficiaryList,"onUpdate:beneficiaryList":e=>i.beneficiaryList=e,title:""+(c(G).insured.length>1?`被保人${a+1}`:"被保人信息"),"holder-person-v-o":c(G).holder.personVO},i,{"beneficiary-schema":c(G).beneficiarySchema,"is-view":e.isView,"multi-beneficiary-num":c(G).config.multiBeneficiaryMaxNum}),{riskList:u((()=>[L(e.$slots,"riskInfo",{insuredIndex:a},void 0,!0)])),cardTitleExtraBenifit:u((i=>[c(O)||e.isView||e.isTrial||!c(V)?v("",!0):(o(),s("div",{key:0,class:"choose-customer",onClick:e=>ee("benifit",a,null==i?void 0:i.index)},[si,_(" 选择老用户 ")],8,oi))])),default:u((()=>[1==+i.personVO.relationToHolder||c(O)||e.isView||e.isTrial||!c(V)?v("",!0):(o(),s("div",{key:0,class:"choose-customer",onClick:e=>ee("insured",a,0)},[ni,_(" 选择老用户 ")],8,ti)),!e.isView&&a+1>c(G).config.multiInsuredMinNum?(o(),s("span",{key:1,class:"delete-button",onClick:e=>(e=>{N.confirm({message:"确定要删除该被保人吗？"}).then((()=>{G.insured.splice(e,1)}))})(a)},[r(l,{name:"delete",color:"var(--van-primary-color)"})],8,ri)):v("",!0)])),_:2},1040,["modelValue","onUpdate:modelValue","beneficiary-list","onUpdate:beneficiaryList","title","holder-person-v-o","beneficiary-schema","is-view","multi-beneficiary-num"])))),128)),!e.isView&&c(Ve)?(o(),m(t,{key:0,class:"add-button-wrap"},{title:u((()=>[d("span",{class:"add-button",onClick:be},[r(a,{name:"plus"}),_("添加被保人")])])),_:1})):v("",!0)],64)):v("",!0),c(G).show?(o(),m(p,{key:2,round:!1,show:c(G).show,closeable:!1,onClose:ie,onClosed:e.onClosePopupAfterAni},{default:u((()=>[d("div",ui,[r(n,{modelValue:c(G).keyword,"onUpdate:modelValue":i[1]||(i[1]=e=>c(G).keyword=e),placeholder:"客户 姓名/手机号",class:"icon-sercher",onSearch:W,onCancel:X},{"left-icon":u((()=>[d("img",{src:c(ye),alt:"",class:"search-icon-img",style:{width:"22px",height:"23px"}},null,8,di)])),_:1},8,["modelValue"])]),c(G).count?(o(),m(ii,{key:0,data:c(G).list,type:e.order,disabled:!1,onOnClose:me},null,8,["data","type"])):(o(),s("div",ci,mi))])),_:1},8,["show","onClosed"])):v("",!0)],64)}}}),[["__scopeId","data-v-7af40b90"]]);const yi={class:"pro-radio-wrap"},fi=e({name:"ProductKeys"});var bi=V(e({...fi,props:{originData:{default:()=>({})},modelValue:{default:()=>({})},riskInfo:{default:()=>({})},defaultValue:{default:()=>({})},useData:{default:()=>({})}},emits:["trialChange","inputChange"],setup(e,{emit:i}){const a=e,p=l(a.originData),V=l(a.modelValue);l(1);const h=e=>{const i=ee(a.originData,e),l=ee(a.originData,e);return i.map((e=>{const i=l?l.find((i=>i.code===e.code)):null;return{label:e.value,value:e.code,disabled:!(!i||null===i.useFlag||void 0===i.useFlag)&&1!==i.useFlag}}))},g=()=>{fe.forEach((e=>{const i=ee(a.originData,e.configKey);"checkbox"===e.type&&i&&i.length>0&&!V.value.riskCode&&(V.value[e.valueKey]=i[0].code)}))};return t((()=>{g()})),n((()=>a.defaultValue),(e=>{(null==e?void 0:e.riskCode)&&(V.value=JSON.parse(JSON.stringify(e)))}),{deep:!0,immediate:!0}),n((()=>p.value),(e=>{g()}),{deep:!0,immediate:!0}),n((()=>JSON.stringify(V.value)),((e,l)=>{const t=e&&JSON.parse(e)||{};console.log("---v new = ",t);const n=l&&JSON.parse(l)||{};let o=null;fe.forEach((e=>{t[e.valueKey]&&n[e.valueKey]&&t[e.valueKey]!==n[e.valueKey]&&(o||(o={key:e.valueKey,oldValue:n[e.valueKey],newValue:t[e.valueKey],riskCode:a.riskInfo.riskCode}))})),e&&i("trialChange",JSON.parse(e),o)}),{deep:!0,immediate:!0}),(e,i)=>{const l=b,a=f;return o(!0),s(y,null,F(c(fe),(i=>(o(),s(y,null,[c(ee)(e.originData,i.configKey)&&(1===e.riskInfo.mainRiskFlag||i.ruleKey&&2===c(ee)(e.originData,i.ruleKey)||!i.ruleKey)?(o(),s("div",{key:e.riskInfo.riskCode+"_"+i.name},["checkbox"===i.type?(o(),m(a,{key:0,modelValue:V.value[i.valueKey],"onUpdate:modelValue":e=>V.value[i.valueKey]=e,label:i.name,name:i.valueKey,class:"risk-select-field"},{input:u((()=>[d("div",yi,[r(l,{modelValue:V.value[i.valueKey],"onUpdate:modelValue":[e=>V.value[i.valueKey]=e,e=>((e,i)=>{console.log("-------change",e,i)})(e,i.valueKey)],options:h(i.configKey)},null,8,["modelValue","onUpdate:modelValue","options"])])])),_:2},1032,["modelValue","onUpdate:modelValue","label","name"])):v("",!0)])):v("",!0)],64)))),256)}}}),[["__scopeId","data-v-15c494f0"]]);const Vi={class:"com-risk-liabilityinfo"},hi={class:"item-wrap"},gi={key:0},ki=(e=>(z("data-v-68f76c44"),e=e(),G(),e))((()=>d("div",{class:"cell-content"},null,-1))),Oi=e({name:"riskLiabilityInfo"});var Li=V(e({...Oi,props:{dataSource:{default:()=>({})},modelValue:{default:()=>({})},dataSourceFolmulate:{default:()=>({})},params:{default:()=>({amountUnit:"",basicsAmount:"",basicsPremium:"",riskId:""})},defaultValue:{default:()=>({})}},emits:["trialChange"],setup(e,{emit:i}){const p=e,V=l({formInfo:p.dataSource,isCheckList:[],checkValueList:[],liabilityList:[],signLiabilityClick:[]}),h=(e,i)=>{console.log("---click ",e,i),V.value.signLiabilityClick.push({item:e,index:i})},g=(e,i)=>{const{riskLiabilityInfoVOList:l,riskLiabilityCollocationVOList:a}=p.dataSource,t=l[e].liabilityId,n=(a||[]).find((e=>e.relatedLiabilityId===t||e.collocationLiabilityId===t))||{};let o=null;n.collocationLiabilityId===t?(o=n.relatedLiabilityId,n.collocationType===be.YI_LAI&&(o=n.collocationLiabilityId)):o=n.collocationLiabilityId;const s=l.findIndex((e=>e.liabilityId===o));((e,i,l)=>{V.value.isCheckList[e]===`${X.YES}`?l===be.BANG_DING||l===be.YI_LAI?V.value.isCheckList[i]="1":V.value.isCheckList[i]="2":l===be.BANG_DING?V.value.isCheckList[i]="2":l===be.YI_LAI&&(V.value.isCheckList[i]=e!==i?"3":"2")})(e,s,n.collocationType),i(l[s],s,!0)},k=(e,i,l)=>{const a=V.value.liabilityList.map((e=>e.key)),t=0===(null==e?void 0:e.liabilityAttributeValueList.length)&&0===(null==e?void 0:e.formula.length),n=V.value.isCheckList[i];t&&-1===a.indexOf(i)&&n&&V.value.liabilityList.push({liabilityValue:e,key:i,isSwitchOn:V.value.isCheckList[i]}),"1"===n?h(e,i):V.value.signLiabilityClick.splice(i,1),-1!==a.indexOf(i)&&V.value.liabilityList.forEach((e=>{e.key===i&&(e.isSwitchOn=V.value.isCheckList[i])})),l||g(i,k)},O=(e,i)=>{const l=e.liabilityAttributeValueList.filter((e=>e.displayValue===V.value.checkValueList[i])),a=JSON.parse(JSON.stringify(l))[0]||e.liabilityAttributeValueList[0],t={...e,liabilityValue:a};V.value.liabilityList.length>0&&Object.keys(V.value.checkValueList).indexOf(i)&&(V.value.liabilityList=V.value.liabilityList.filter((e=>e.key!==i))),V.value.checkValueList[i]=a.displayValue,V.value.liabilityList.push({liabilityValue:t,key:i,isSwitchOn:"1"})},L=a((()=>oe(p.dataSourceFolmulate))),I=(e,i,l)=>{1===l?V.value.liabilityList.push({liabilityValue:{...e,liabilityValue:null==e?void 0:e.liabilityAttributeValueList[0]},key:i,isSwitchOn:"1"}):V.value.liabilityList.push({liabilityValue:{...e,liabilityValue:null==e?void 0:e.liabilityAttributeValueList[0]},key:i,isSwitchOn:"2"})};n((()=>L.value),((e,i)=>{var l,a;const t=null==(l=p.dataSourceFolmulate)?void 0:l.initialAmount,n=null==(a=p.dataSourceFolmulate)?void 0:a.initialPremium,o={amountUnit:p.params.amountUnit,basicsAmount:t,basicsPremium:n,riskId:p.params.riskId};p.dataSource.riskLiabilityInfoVOList.map((async l=>{if(l.formula.length>0&&(t||n)&&((null==e?void 0:e.initialAmount)!==(null==i?void 0:i.initialAmount)||(null==e?void 0:e.initialPremium)!==(null==i?void 0:i.initialPremium))){const{code:e,data:i}=await re({...o,riskLiabilities:[l]});if("10000"===e){if(l.liabilityAttributeValueList=i[0].formulaResult,V.value.signLiabilityClick.length>0){const e=V.value.signLiabilityClick.find((e=>e.item.liabilityCode===l.liabilityCode));e&&O(e.item,e.index)}return{...l,liabilityAttributeValueList:i[0]}}return l}}))}),{deep:!0,immediate:!0}),n((()=>V.value.liabilityList),(e=>{const l=V.value.liabilityList.filter((e=>"1"===e.isSwitchOn)).map((e=>({...e.liabilityValue})));i("trialChange",l)}),{deep:!0,immediate:!0}),t((()=>{console.log("----mounted"),p.dataSource.riskLiabilityInfoVOList.map(((e,i)=>{const l=e.liabilityAttributeValueList.length>0&&0===e.formula.length&&e.liabilityAttributeValueList[0].displayValue;return V.value.checkValueList[i]||(V.value.checkValueList[i]=l),1!=+e.showFlag&&V.value.liabilityList.push({liabilityValue:e,key:i,isSwitchOn:"1"}),1==+e.showFlag&&(1===e.attributeFlag&&2===e.insureFlag&&0===e.formula.length&&I(e,i,1),1===e.attributeFlag&&1===e.insureFlag&&0===e.formula.length&&I(e,i,2),2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&2===e.insureFlag&&I(e,i,1),2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&1===e.insureFlag&&I(e,i,2)),null}))}));const C=l([]);return n((()=>p.dataSource.riskLiabilityInfoVOList),(e=>{C.value=(e||[]).map((e=>{const i=(p.dataSource.riskLiabilityCollocationVOList||[]).find((i=>i.collocationLiabilityId===e.liabilityId));return{...e,relation:null==i?void 0:i.collocationType}}))}),{deep:!0,immediate:!0}),n((()=>p.defaultValue),(e=>{(null==e?void 0:e.riskCode)&&e.liabilityList&&(V.value.signLiabilityClick=[],p.dataSource.riskLiabilityInfoVOList.forEach(((i,l)=>{var a;const t=null==e?void 0:e.liabilityList.find((e=>e.liabilityCode===i.liabilityCode));console.log("--target lia = ",t),t&&(V.value.isCheckList[l]="1",V.value.checkValueList[l]=null==(a=null==t?void 0:t.liabilityValue)?void 0:a.displayValue,1==+i.showFlag&&2==+i.optionalFlag?k(i,l):h(i,l))})))}),{deep:!0,immediate:!0}),(e,i)=>{const l=Q,a=f,t=W;return o(),m(t,null,{default:u((()=>[d("div",Vi,[d("div",hi,[(o(!0),s(y,null,F(c(C),((e,i)=>(o(),s("div",{key:i},[1!=+e.showFlag||2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&2===e.insureFlag?v("",!0):(o(),s("div",gi,[(c(V).isCheckList[i]?"3"!==c(V).isCheckList[i]:e.relation!==c(be).YI_LAI)?(o(),m(a,{key:0,label:`${e.liabilityName}`,"label-width":"44%",name:"insuredRelation",class:"riskliab-select-field"},{input:u((()=>[1==+e.insureFlag?(o(),m(l,{key:0,modelValue:c(V).isCheckList[i],"onUpdate:modelValue":e=>c(V).isCheckList[i]=e,"active-value":"1","inactive-value":"2",size:"0.68rem",onClick:l=>k(e,i)},null,8,["modelValue","onUpdate:modelValue","onClick"])):v("",!0)])),_:2},1032,["label"])):v("",!0),1==+c(V).isCheckList[i]&&1===e.attributeFlag||1===e.attributeFlag&&2===e.insureFlag?(o(),m(a,{key:1,label:e.liabilityAttributeTypeDesc,"label-width":"44%",name:"insuredRelation",class:"riskliab-select-field-children"},{input:u((()=>[r(b,{modelValue:c(V).checkValueList[i],"onUpdate:modelValue":e=>c(V).checkValueList[i]=e,prop:{label:"displayValue",value:"displayValue"},options:(e.formula.length,e.liabilityAttributeValueList),"is-simply":!0,onClick:l=>O(e,i)},null,8,["modelValue","onUpdate:modelValue","options","onClick"])])),_:2},1032,["label"])):v("",!0)]))])))),128))])]),ki])),_:1})}}}),[["__scopeId","data-v-68f76c44"]]);export{Ae as B,bi as P,Li as R,vi as a};
