import{d as e,r as i,i as l,j as a,O as t,z as n,o,c as s,b as r,w as u,a as d,u as c,l as m,e as p,q as v,F as y,_ as f,aH as V,aI as b,f as g,aL as h,aA as k,aM as O,n as L,a8 as I,az as C,ae as S,aN as x,t as T,p as w,h as _,ac as F,aK as N,aO as D,ap as A,a0 as j,T as B,as as U,at as P,au as K,aJ as J,a6 as $}from"./index-a3c15377.js";import{S as M,g as H}from"./get-4ac0f9ad.js";import{a as R,B as E}from"./infoCollection-de566c01.js";import{S as q}from"./index-6d959cd9.js";import{_ as Y,a as z}from"./empth-c0adfdba.js";import{c as G}from"./cloneDeep-5d541e55.js";import{d as W}from"./debounce-6981b306.js";import{m as Q}from"./merge-e7788e50.js";import{P as X,i as Z}from"./index-7a6b9f7e.js";import{c as ee,g as ie,r as le,v as ae,a as te,t as ne}from"./ProRenderFormWithCard.vue_vue_type_style_index_0_scoped_true_lang-42bf787b.js";/* empty css              */import"./useDicData-0f8b6ef2.js";import"./bankCard-7e0b096a.js";import{h as oe,f as se}from"./trial-0f8ffd87.js";import{a as re,f as ue,m as de,g as ce,I as me,b as pe,S as ve}from"./search-6fc8dcc1.js";import{P as ye}from"./config-98e8d477.js";import{L as fe}from"./product-585b0e6f.js";import{S as Ve}from"./index-e90e719d.js";const be={key:0},ge={class:"custom-field"},he={key:1,class:"flex-field"},ke={class:"pro-radio-wrap"},Oe={key:2},Le={class:"pro-radio-wrap"},Ie={class:"custom-field"},Ce={key:1},Se={key:3},xe={class:"custom-field"},Te={key:1},we={class:"custom-field"},_e={key:0},Fe={key:1},Ne={key:4},De=e({name:"BaoeBaofei"});var Ae=f(e({...De,props:{originData:{default:()=>({})},modelValue:{default:()=>({})},defalutValue:{default:()=>({})},trialResult:{default:()=>({})}},emits:["update:modelValue","trialChange"],setup(e,{emit:f}){const g=e,h=i({hadSetDefault:!1}),k=l(g.originData),O=l(g.modelValue),L=l(0),I=()=>2===k.value.saleMethod?{label:"保费",key:"initialPremium"}:{label:"保额",key:"initialAmount"},C=()=>{switch(`${k.value.displayUnit}`){case R.YUAN:return"元";case R.MONTH_SALARY:return"倍月薪";case R.MILLION:return"万元";case R.COPY:return"份"}return""},S=a((()=>2===k.value.saleMethod?{label:"保费",key:"initialPremium"}:{label:"保额",key:"initialAmount"})),x=(...e)=>{if(1===L.value){const e=O.value[S.value.key],i=g.originData.minStepValue,l=g.originData.maxStepValue,a=g.originData.stepValue;if(+e>=+l)O.value[S.value.key]=l;else if(+e<=+i)O.value[S.value.key]=i;else{const l=+e-+i,t=Math.floor(l/+a);l%+a!=0&&(O.value[S.value.key]=+i+t*+a)}}return!0},T=()=>{const{displayType:e,requireCopies:i}=k.value,l=I().key,a=!O.value.riskCode;1===e?L.value=1:3===e&&2===i?(L.value=2,k.value.displayValues.length>=1&&a&&!O.value[l]&&(O.value[l]=k.value.displayValues[0].code||k.value.displayValues[0].value)):3===e&&1===i?(L.value=3,k.value.minCopiesValue===k.value.maxCopiesValue&&a&&!O.value.copy&&(O.value.copy=k.value.minCopiesValue),k.value.displayValues.length>=1&&a&&!O.value[l]&&(O.value[l]=k.value.displayValues[0].code||k.value.displayValues[0].value)):2===e&&(L.value=4,k.value.minCopiesValue===k.value.maxCopiesValue&&a&&!O.value.copy&&(O.value.copy=k.value.minCopiesValue),a&&!O.value.initialAmount&&(O.value.initialAmount=k.value.copiesAmount))},w=a((()=>{if(k.value.displayValues){const e=I().key;return 1!==k.value.displayValues.length||O.value.riskCode||(O.value[e]=k.value.displayValues[0].code),k.value.displayValues.map((e=>({label:e.value,value:e.code})))}return[]})),_=()=>{};return t((()=>{T(),f("update:modelValue",O.value)})),n((()=>k),(e=>{T()}),{deep:!0}),n((()=>g.defalutValue),(e=>{(null==e?void 0:e.riskCode)&&!h.hadSetDefault&&(h.hadSetDefault=!0,O.value={...O.value,initialAmount:e.initialAmount,initialPremium:e.initialPremium,copy:e.copy})}),{deep:!0,immediate:!0}),n((()=>O.value),(e=>{(()=>{if(1===L.value){const e=O.value[S.value.key],i=g.originData.minStepValue,l=g.originData.maxStepValue,a=g.originData.stepValue;if(+e>+l)return!1;if(+e<+i)return!1;if((+e-+i)%+a!=0)return!1}return!0})()&&(f("update:modelValue",e),f("trialChange",e))}),{deep:!0,immediate:!0}),(i,l)=>{const a=M,t=V,n=b;return o(),s(y,null,[1===L.value?(o(),s("div",be,[r(t,{label:`基本${c(S).label}`,name:c(S).key,class:"risk-select-field"},{input:u((()=>[d("div",ge,[r(a,{modelValue:O.value[c(S).key],"onUpdate:modelValue":l[0]||(l[0]=e=>O.value[c(S).key]=e),"input-width":"80px","default-value":e.originData.minStepValue,min:e.originData.minStepValue,step:e.originData.stepValue,max:e.originData.maxStepValue,theme:"round",onBlur:x},null,8,["modelValue","default-value","min","step","max"])])])),_:1},8,["label","name"])])):2===L.value?(o(),s("div",he,[r(t,{modelValue:O.value[c(S).key],"onUpdate:modelValue":l[2]||(l[2]=e=>O.value[c(S).key]=e),label:`基本${c(S).label}`,name:c(S).key,class:"risk-select-field"},{input:u((()=>[d("div",ke,[r(n,{modelValue:O.value[c(S).key],"onUpdate:modelValue":l[1]||(l[1]=e=>O.value[c(S).key]=e),options:c(w),onclick:_},null,8,["modelValue","options"])])])),_:1},8,["modelValue","label","name"])])):3===L.value?(o(),s("div",Oe,[r(t,{modelValue:O.value[c(S).key],"onUpdate:modelValue":l[4]||(l[4]=e=>O.value[c(S).key]=e),label:`基本${c(S).label}`,name:c(S).key,class:"risk-select-field"},{input:u((()=>[d("div",Le,[r(n,{modelValue:O.value[c(S).key],"onUpdate:modelValue":l[3]||(l[3]=e=>O.value[c(S).key]=e),options:c(w),onclick:_},null,8,["modelValue","options"])])])),_:1},8,["modelValue","label","name"]),d("div",null,[r(t,{modelValue:O.value.copy,"onUpdate:modelValue":l[6]||(l[6]=e=>O.value.copy=e),label:"份数",name:"copy",class:"risk-select-field"},{input:u((()=>[d("div",Ie,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(o(),m(a,{key:0,modelValue:O.value.copy,"onUpdate:modelValue":l[5]||(l[5]=e=>O.value.copy=e),"input-width":"80px","default-value":e.originData.minCopiesValue,min:e.originData.minCopiesValue||1,step:1,max:e.originData.maxCopiesValue,theme:"round"},null,8,["modelValue","default-value","min","max"])):(o(),s("span",Ce,p(e.originData.minCopiesValue),1))])])),_:1},8,["modelValue"])])])):4===L.value?(o(),s("div",Se,[r(t,{modelValue:O.value.copy,"onUpdate:modelValue":l[8]||(l[8]=e=>O.value.copy=e),label:"份数",name:"copy",class:"risk-select-field"},{input:u((()=>[d("div",xe,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(o(),m(a,{key:0,modelValue:O.value.copy,"onUpdate:modelValue":l[7]||(l[7]=e=>O.value.copy=e),"input-width":"64px","default-value":e.originData.minCopiesValue,min:e.originData.minCopiesValue||1,step:1,max:e.originData.maxCopiesValue,theme:"round"},null,8,["modelValue","default-value","min","max"])):(o(),s("span",Te,p(e.originData.minCopiesValue),1))])])),_:1},8,["modelValue"]),r(t,{label:c(S).label,name:"copyAmount",class:"risk-select-field"},{input:u((()=>[d("div",we,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(o(),s("span",_e,p(+e.originData.copiesAmount*+O.value.copy+C()),1)):(o(),s("span",Fe,p(+e.originData.minCopiesValue*+e.originData.copiesAmount+C()),1))])])),_:1},8,["label"])])):v("",!0),2===k.value.saleMethod&&e.trialResult&&e.trialResult.initialAmount>0?(o(),s("div",Ne,[r(t,{label:"保额",class:"risk-select-field"},{input:u((()=>[d("span",null,p(e.trialResult.initialAmount),1)])),_:1})])):v("",!0)],64)}}}),[["__scopeId","data-v-3a02f6d0"]]);const je=e({name:"BeneficiaryItem"});var Be=f(e({...je,props:{modelValue:{default:()=>({})},schema:{default:()=>[]},config:{default:()=>({})},isView:{type:Boolean,default:!1},isTrial:{type:Boolean,default:!1},title:{default:"受益人"}},emits:["update:modelValue","trailChange"],setup(e,{expose:a,emit:t}){const s=e,r=l(null),d=i({validated:!1,schema:[],config:{},personVO:{}});return n((()=>s.config),(e=>{e&&Object.assign(d.config,e)}),{deep:!0,immediate:!0}),n((()=>s.schema),(e=>{e&&Object.assign(d.schema,G(s.schema))}),{deep:!0,immediate:!0}),n((()=>s.modelValue),((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&(ee("受益人数据变动了"),Object.assign(d.personVO,e))}),{deep:!0,immediate:!0}),n((()=>d.personVO),(e=>{e&&t("update:modelValue",e)}),{deep:!0,immediate:!0}),n((()=>{var e;return null==(e=d.personVO)?void 0:e.relationToInsured}),((e,i)=>{if(e===i)return!1;ee("受益人与被保人关系变动了");const{certType:l}=d.personVO||{},[a,t]=ie(d.schema,{certType:l,relationToHolder:e});return Q(d.config,t),!s.isView&&e&&i&&Object.assign(d.personVO,{...le(d.personVO,(e=>!(a&&"certType"===e))),relationToInsured:e}),!1}),{immediate:!0}),a({validate:e=>te(r,s.trialFactorCodes,e),validateTrialFields:()=>ae({personVO:d.personVO,trialFactorCodes:s.trialFactorCodes})}),(i,l)=>(o(),m(c(X),{ref_key:"formRef",ref:r,class:"personal-info-card",title:e.title,model:c(d).personVO,schema:c(d).schema,config:c(d).config,"is-view":e.isView,"extra-provision":{objectType:c(h).BENEFICIARY,objectId:c(d).personVO.id}},{cardTitleExtra:u((()=>[g(i.$slots,"default",{},void 0,!0)])),_:3},8,["title","model","schema","config","is-view","extra-provision"]))}}),[["__scopeId","data-v-eb39bf9e"]]);const Ue=["onClick"],Pe=e({name:"InsuredItem"});var Ke=f(e({...Pe,props:{modelValue:{default:()=>({})},title:{default:""},holderPersonVO:null,schema:{default:()=>[]},config:{default:()=>({})},isView:{type:Boolean,default:!1},isTrial:{type:Boolean,default:!1},trialFactorCodes:{default:()=>[]},multiBeneficiaryMaxNum:{default:null},beneficiaryList:{default:()=>[]},beneficiarySchema:{default:()=>[]}},emits:["update:modelValue","update:beneficiaryList"],setup(e,{expose:t,emit:d}){const p=e,f=l(null),V=l(null),b=l(null),T={schema:[],trialFactorCodes:[],config:{},personVO:{}},w=i({validated:!1,schema:[],config:{},personVO:{},beneficiaryTypeSchemaList:[],beneficiarySchemaList:[],beneficiaryList:[]}),_=()=>{w.beneficiaryList.push(G({...T,nanoid:O(),schema:p.beneficiarySchema}))},F=a((()=>!p.multiBeneficiaryMaxNum||w.beneficiaryList.length<p.multiBeneficiaryMaxNum)),N=a((()=>!w.schema.filter((e=>{var i;return!(e.hidden||(null==(i=w.config[e.name])?void 0:i.hidden))})).length)),D=a((()=>w.schema.filter((e=>e.isSelfInsuredNeed)).map((e=>e.name)))),A=a((()=>k(p.beneficiarySchema))),j=a((()=>{var e;return String(null==(e=w.personVO)?void 0:e.insuredBeneficiaryType)===E.SPECIFY}));return n((()=>p.holderPersonVO),(e=>{var i;ee("------投保人信息变动了-----");const{id:l,...a}=e||{};if("1"===String(null==(i=w.personVO)?void 0:i.relationToHolder)){const e=k(D.value)?Object.keys(a).reduce(((e,i)=>([...D.value,"occupationClass"].includes(i)&&!["birthday","age","gender"].includes(i)||(e[i]=a[i]),e)),{}):a;Object.assign(w.personVO,e)}}),{deep:!0,immediate:!0}),n((()=>p.beneficiarySchema),(e=>{w.beneficiarySchemaList=k(e)?e.filter((e=>"insuredBeneficiaryType"!==e.name)):[],w.beneficiaryTypeSchemaList=k(e)?e.filter((e=>"insuredBeneficiaryType"===e.name)):[]}),{deep:!0,immediate:!0}),n(j,((e,i)=>{String(e)!==String(i)&&(ee("受益人类型关系变动了"),e?!k(w.beneficiaryList)&&_():w.beneficiaryList=[])}),{immediate:!0}),n((()=>G(w.beneficiaryList).map((e=>({personVO:e.personVO,nanoid:e.nanoid})))),((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&d("update:beneficiaryList",e)}),{deep:!0,immediate:!0}),n((()=>{var e;return null==(e=w.personVO)?void 0:e.relationToHolder}),((e,i)=>{if(!e)return;ee("与投保人关系变动了");const{personVO:l,schema:a=[],config:t}=w||{},{id:n,...o}=p.holderPersonVO||{},s="1"===String(l.relationToHolder),[r,u]=ie(a,l);if(Q(t,u),a.forEach((e=>{e.relationToHolder=l.relationToHolder,e.hidden=!e.isSelfInsuredNeed&&s})),!p.isView&&i&&String(e)!==String(i)){let e={...l,...o};s||(e={...le(l,(e=>!(r&&"certType"===e))),relationToHolder:l.relationToHolder}),Object.assign(w.personVO,e)}}),{deep:!0}),n((()=>{var e;return null==(e=w.personVO)?void 0:e.relationToMainInsured}),((e,i)=>{if(!e)return;ee("次被保人与主被保人关系变动了");const{personVO:l,schema:a=[],config:t}=w||{},{certType:n}=l||{},[o,s]=ie(a,{certType:n,relationToHolder:e});Q(t,s),!p.isView&&i&&String(e)!==String(i)&&Object.assign(w.personVO,{...le(l,(e=>!(o&&"certType"===e))),relationToMainInsured:l.relationToMainInsured})})),n((()=>p.config),(e=>{e&&Object.assign(w.config,e)}),{deep:!0,immediate:!0}),n((()=>p.schema),((e,i)=>{e&&JSON.stringify(e)!==JSON.stringify(i)&&Object.assign(w.schema,G(e))}),{deep:!0,immediate:!0}),n((()=>p.modelValue),((e,i)=>{if(JSON.stringify(e)!==JSON.stringify(i)){const{beneficiaryList:i,...l}=e;Q(w.personVO,l)}}),{deep:!0,immediate:!0}),n((()=>G(p.beneficiaryList)),((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&(w.beneficiaryList=k(e)?e.map((e=>({...e,nanoid:e.nanoid||O()}))):[])}),{deep:!0,immediate:!0}),n((()=>w.personVO),(e=>{e&&d("update:modelValue",e)}),{deep:!0,immediate:!0}),t({validate:e=>{var i;return Promise.all([te(f,p.trialFactorCodes,e),te(V,[],e),...(null==(i=b.value)?void 0:i.map((i=>i.validate(e))))||[]])},validateTrialFields:()=>ae({personVO:w.personVO,trialFactorCodes:p.trialFactorCodes})}),(i,l)=>{const a=S,t=x;return o(),s(y,null,[r(c(X),{ref_key:"insuredFormRef",ref:f,class:"personal-info-card",title:c(N)?"":e.title,model:c(w).personVO,schema:c(w).schema,config:c(w).config,"is-view":e.isView,"extra-provision":{objectType:c(h).INSURED,objectId:c(w).personVO.id}},{cardTitleExtra:u((()=>[g(i.$slots,"default",{},void 0,!0)])),_:3},8,["title","model","schema","config","is-view","extra-provision"]),c(A)?(o(),s(y,{key:0},[r(c(X),{ref_key:"beneficiaryTypeFormRef",ref:V,class:"personal-info-card",title:"受益人",model:c(w).personVO,schema:c(w).beneficiaryTypeSchemaList,"is-view":e.isView},null,8,["model","schema","is-view"]),c(j)?(o(),s(y,{key:0},[(o(!0),s(y,null,L(c(w).beneficiaryList,((l,t)=>(o(),m(Be,{ref_for:!0,ref_key:"beneficiaryFormRef",ref:b,key:`${l.nanoid}_${t}`,modelValue:l.personVO,"onUpdate:modelValue":e=>l.personVO=e,title:`受益人${t+1}`,schema:c(w).beneficiarySchemaList,config:l.config,"is-view":e.isView},{default:u((()=>[g(i.$slots,"cardTitleExtraBenifit",{index:t},void 0,!0),t>0&&!e.isView?(o(),s("span",{key:0,class:"delete-button",onClick:e=>(e=>{C.confirm({message:"确定要删除该受益人吗？"}).then((()=>{w.beneficiaryList.splice(e,1)}))})(t)},[r(a,{name:"delete"})],8,Ue)):v("",!0)])),_:2},1032,["modelValue","onUpdate:modelValue","title","schema","config","is-view"])))),128)),!e.isView&&c(F)?(o(),s("span",{key:0,class:"add-button",onClick:_},[r(t,{name:"plus"}),I("添加受益人")])):v("",!0)],64)):v("",!0)],64)):v("",!0),g(i.$slots,"riskList",{},void 0,!0)],64)}}}),[["__scopeId","data-v-524344c0"]]);const Je={class:"customer-list-item"},$e={class:"left"},Me=["src"],He={class:"left-item"},Re={class:"name"},Ee={key:0,class:"cert-no"},qe={class:"cert-type-name"},Ye={key:1,class:"cert-no"},ze={class:"cert-type-name"},Ge={key:0,class:"from-wx"},We=d("img",{class:"img-wx",alt:""},null,-1),Qe=e({__name:"item",props:{data:{type:Object,required:!1,default:()=>Object},disabled:{type:Boolean,required:!1,default:()=>!0}},emits:["on-delete","on-close"],setup(e,{emit:i}){const a=e,t=l(!1),{data:n,disabled:m}=T(a);return(e,l)=>{const a=re;return o(),s("div",Je,[r(a,{disabled:c(m)},{default:u((()=>{var e,a,r,u,m,y,f,V;return[d("div",{class:w(["list-item",!0===t.value?"item-bg":""]),onClick:l[0]||(l[0]=e=>(e=>{t.value=!0,e.stopPropagation(),console.log("这里关闭弹窗",n.value),i("on-close",n.value)})(e))},[d("div",$e,[d("div",null,[d("img",{src:c(n).gender?"1"===c(n).gender?c(ue):c(de):c(ce),alt:"",class:"mf"},null,8,Me)]),d("div",null,[d("div",He,[d("div",Re,p(c(n).name),1),(null==(a=null==(e=c(n))?void 0:e.certInfo[0])?void 0:a.certNo)&&1==+(null==(u=null==(r=c(n))?void 0:r.certInfo[0])?void 0:u.certType)?(o(),s("div",Ee,[I(p(c(n).certInfo[0].desensitizaCertNo)+" ",1),d("span",qe,p(c(n).certInfo[0].certTypeName),1)])):v("",!0),(null==(y=null==(m=c(n))?void 0:m.certInfo[0])?void 0:y.certNo)&&1!=+(null==(V=null==(f=c(n))?void 0:f.certInfo[0])?void 0:V.certType)?(o(),s("div",Ye,[I(p(c(n).certInfo[0].certNo)+" ",1),d("span",ze,p(c(n).certInfo[0].certTypeName),1)])):v("",!0)]),c(n).relative?(o(),s("div",Ge,[We,I(" 微信客户 ")])):v("",!0)])])],2)]})),_:1},8,["disabled"])])}}});const Xe={class:"customer-list"},Ze={key:0,class:"list-pr"},ei={key:1,class:"list-pr"};var ii=f(e({__name:"index",props:{data:{type:Array,required:!0,default:()=>[]},type:{type:String,required:!0,default:()=>"firstLetter"},disabled:{type:Boolean,required:!1,default:()=>!0}},emits:["on-delete","on-close"],setup(e,{emit:i}){const a=e,{data:t,type:d,disabled:p}=T(a),v=l([]),f=l([]),V=e=>{i("on-delete",e)},b=e=>{i("on-close",e),console.log("这里关闭弹窗1111222----",e)};return n((()=>a.data),(()=>{t.value=a.data||[],console.log("data",t),v.value=t.value.filter((e=>!!(e.children&&Array.isArray(e.children)&&e.children.length>0))),f.value=v.value.map((e=>e.label))}),{immediate:!0,deep:!0}),(e,i)=>{const l=me,a=pe;return o(),s("div",Xe,["firstLetter"===c(d)?(o(),s("div",Ze,[r(a,{"highlight-color":"$zaui-brand","index-list":f.value,sticky:!1},{default:u((()=>[(o(!0),s(y,null,L(v.value,(e=>(o(),s(y,{key:e.label},[r(l,{index:`${e.label}`},null,8,["index"]),(o(!0),s(y,null,L(e.children,(e=>(o(),m(Qe,{key:e.agentCustomerId,data:e,disabled:c(p),onOnDelete:V,onOnClose:b},null,8,["data","disabled"])))),128))],64)))),128))])),_:1},8,["index-list"])])):(o(),s("div",ei,[(o(!0),s(y,null,L(c(t),(e=>(o(),m(Qe,{key:e.agentCustomerId,data:e,disabled:c(p),onOnDelete:V,onOnClose:b},null,8,["data","disabled"])))),128))]))])}}}),[["__scopeId","data-v-7f0e84c3"]]);const li=e=>(P("data-v-7af40b90"),e=e(),K(),e),ai=li((()=>d("img",{src:Y},null,-1))),ti=["onClick"],ni=li((()=>d("img",{src:Y},null,-1))),oi=["onClick"],si=li((()=>d("img",{src:Y},null,-1))),ri=["onClick"],ui={class:"search-bar"},di=["src"],ci={key:1,class:"empth"},mi=[li((()=>d("p",null,[d("img",{src:z,class:"ig"})],-1))),li((()=>d("p",{class:"p1"},"暂时还没有客户哦～",-1)))],pi=e({name:"PersonalInfo"});var vi=f(e({...pi,props:{productFactor:{default:()=>({})},modelValue:{default:()=>({})},isTrial:{type:Boolean,default:!1},isView:{type:Boolean,default:!1},isOnlyHolder:{type:Boolean,default:!1},multiInsuredConfig:null},emits:["update:modelValue","trailChange","trailValidateFailed","closeCustomerPopoup"],setup(e,{expose:t,emit:p}){const f=e,V=_(),b=F(),{isShare:T,saleChannelId:w}=V.query,P=l(null),K=l(null),J=i({count:0,slotProps:{},uniqKey:"",currentIndex:0,currentBenifitIndex:0,currentType:"",keyword:void 0,show:!1,list:[],config:{},trialValidated:!1,holder:{personVO:{},schema:[],trialFactorCodes:[],config:{}},beneficiarySchema:[],initInsuredIList:[],insured:[]}),$=async e=>{var i,l;J.keyword;const a={pageNum:1,pageSize:999,queryBean:{keyword:J.keyword||""}},t=await oe(a),n=[];Object.keys((null==(i=null==t?void 0:t.data)?void 0:i.customerMaps)||{}).forEach((e=>{var i;n.push({label:e,children:null==(i=null==t?void 0:t.data)?void 0:i.customerMaps[e]})})),J.list=n,J.count=null==(l=null==t?void 0:t.data)?void 0:l.count},M=()=>{$(J.keyword)},H=()=>{$()},R=a((()=>!f.isTrial||f.isOnlyHolder)),E=(e,i,l)=>{J.currentType=e,"benifit"!==e?J.currentIndex=i:(J.currentIndex=i,J.currentBenifitIndex=l),J.uniqKey=O(),$(),J.show=!0},Y=()=>{setTimeout((()=>{J.show=!1}),300)},z=()=>"holder"===J.currentType?J.holder.schema.map((e=>e.name))||[]:"insured"===J.currentType?J.insured[J.currentIndex].schema.map((e=>e.name))||[]:"benifit"===J.currentType?J.beneficiarySchema.map((e=>e.name))||[]:void 0,le=a((()=>{var e,i;return null==(i=null==(e=null==J?void 0:J.holder)?void 0:e.personVO)?void 0:i.name})),se=a((()=>{var e,i;return null==(i=null==(e=null==J?void 0:J.holder)?void 0:e.personVO)?void 0:i.gender})),re=a((()=>{var e,i;return null==(i=null==(e=null==J?void 0:J.holder)?void 0:e.personVO)?void 0:i.birthday})),ue=a((()=>{var e,i;return null==(i=null==(e=null==J?void 0:J.holder)?void 0:e.personVO)?void 0:i.certType})),de=a((()=>{var e,i;return null==(i=null==(e=null==J?void 0:J.holder)?void 0:e.personVO)?void 0:i.certNo})),ce=(e,i)=>{var l,a,t,n,o;console.log("convertCustomerData",e);const s=null==(l=null==e?void 0:e.contactInfo)?void 0:l.find((e=>"01"===e.contactType)),r=null==(a=null==e?void 0:e.contactInfo)?void 0:a.find((e=>"02"===e.contactType)),u=null==e?void 0:e.certInfo.filter((e=>"1"===e.certType)),d={name:null==e?void 0:e.name,gender:null==e?void 0:e.gender,birthday:null==e?void 0:e.birthday,mobile:(null==s?void 0:s.contactNo)||null,email:(null==r?void 0:r.contactNo)||null,certNo:(null==(t=u[0])?void 0:t.certNo)||null,certType:(null==(n=u[0])?void 0:n.certType)||null};console.log("insureKeys",z());const c=null==(o=z())?void 0:o.reduce(((e,i)=>d.hasOwnProperty(i)?{...e,[i]:d[i]}:e),{});return console.log("extractedObject===",c),console.log("state.holder.schema=====",J.holder.schema),c},me=e=>{var i,l,a,t,n,o,s,r,u,d,c;if(J.show=!1,"holder"===J.currentType&&Object.assign((null==(i=null==J?void 0:J.holder)?void 0:i.personVO)||{},ce(e)),"insured"===J.currentType){const i=null==(l=null==J?void 0:J.insured[J.currentIndex])?void 0:l.schema.some((e=>"relationToHolder"===e.name&&e.attributeValueList.some((e=>"1"===e.code)))),{name:n,gender:o,birthday:s,certType:r,certNo:u}=ce(e);if(le.value===n&&se.value===o&&re.value===s&&ue.value===r&&de.value===u)return i?void Object.assign((null==(a=null==J?void 0:J.insured[J.currentIndex])?void 0:a.personVO)||{},{relationToHolder:"1"}):void B("与投保人关系未配置本人");Object.assign((null==(t=null==J?void 0:J.insured[J.currentIndex])?void 0:t.personVO)||{},ce(e))}if("benifit"===J.currentType){const{name:i,gender:l,birthday:a,certType:t,certNo:m}=ce(e);(null==(n=null==J?void 0:J.insured[J.currentIndex])?void 0:n.personVO.name)===i&&(null==(o=null==J?void 0:J.insured[J.currentIndex])?void 0:o.personVO.gender)===l&&(null==(s=null==J?void 0:J.insured[J.currentIndex])?void 0:s.personVO.birthday)===a&&(null==(r=null==J?void 0:J.insured[J.currentIndex])?void 0:r.personVO.certType)===t&&(null==(u=null==J?void 0:J.insured[J.currentIndex])?void 0:u.personVO.certNo)===m?B("指定受益人不可为被保人本人"):Object.assign((null==(c=null==(d=null==J?void 0:J.insured[J.currentIndex])?void 0:d.beneficiaryList[J.currentBenifitIndex])?void 0:c.personVO)||{},ce(e))}},pe=()=>{var e;const i=!K.value||(null==(e=K.value)?void 0:e.every((e=>e.validateTrialFields())));return(!P.value||ae(J.holder))&&i},ye=e=>{var i;return Promise.all([...(null==(i=K.value)?void 0:i.map((i=>i.validate(e))))||[],te(P,J.holder.trialFactorCodes,e)])},fe=e=>{const{productList:i,config:l,schema:a,trialFactorCodes:t,beneficiaryList:n,personVO:o,nanoid:s,...r}=e||{};return r},Ve=()=>{const{length:e,[e-1]:i}=J.initInsuredIList;J.insured.push(G({...i,nanoid:O()}))},be=a((()=>{const{multiInsuredMaxNum:e,multiInsuredSupportFlag:i}=J.config;return i&&(!e||J.insured.length<e)})),ge=a((()=>k(J.holder.schema))),he=a((()=>J.insured.some((e=>k(e.schema))))),ke=(e,i)=>k(e)?e.reduce(((e,l)=>(e[l]=i[l],e)),{}):{},Oe=(e,i,l={})=>!!k(e)&&JSON.stringify(ke(e,i))!==JSON.stringify(ke(e,l));return n((()=>{var e;return null==(e=J.holder.personVO)?void 0:e.certType}),((e,i)=>{if(`${e}`==`${i}`)return!1;ee("投保人信息变动了====");const[l,a]=ie(J.holder.schema,{certType:e});return Q(J.holder.config,a),!1})),n([()=>{var e;return{...null==(e=J.holder)?void 0:e.personVO}},()=>J.insured.map((e=>{const{beneficiaryList:i,personVO:l}=e||{};return{...l,beneficiaryList:k(i)?i.map((e=>({...e.personVO}))):[]}}))],W(((e,i)=>{var l,a,t;const[n,o]=e,s=((e,i)=>{const l=Oe(J.holder.trialFactorCodes,e[0],i[0]),a=J.insured.some(((e,l)=>{var a;const{trialFactorCodes:t,personVO:n}=e;return Oe(t,n,null==(a=i[1])?void 0:a[l])}));return l||a})([n,o],i);ee(`投被保人信息变动了---${s}`);const{insuredList:r}=f.modelValue,u={holder:n,insuredList:o.map(((e,i)=>({...(null==r?void 0:r[i])||{},...e})))};if(J.config.isSpouseInsured){const[e,i]=o.map((e=>null==e?void 0:e.gender));if(e&&i&&String(e)===String(i))return B("被保人性别与投保要求不符")}if(JSON.stringify(null==(l=null==o?void 0:o[0])?void 0:l.personVO),fe(null==(t=null==(a=f.modelValue)?void 0:a.insuredList)?void 0:t[0]),console.log("-------result = ",u),p("update:modelValue",u),!pe())return J.trialValidated=!1,p("trailValidateFailed",u);ye(!0).then((()=>{J.trialValidated=!0,s&&!f.isOnlyHolder&&p("trailChange",u)})).catch((()=>{J.trialValidated=!1,p("trailValidateFailed",u)}))}),500),{deep:!0}),n([()=>f.productFactor,()=>f.isTrial],((e,i)=>{if(Z(e,i)||!e[0])return!1;ee("投被保人要素变动了");const{insuredFactorCodes:l,holderFactorCodes:a}=N(D)||{},{holder:t,insured:n,beneficiary:o,config:s}=ne(e[0],{isTrial:e[1],...f.multiInsuredConfig,insuredFactorCodes:l,holderFactorCodes:a});return Object.assign(J.holder,t),J.config=s,k(n)&&(J.initInsuredIList=n.map((e=>({...e,beneficiaryList:[]})))),J.beneficiarySchema=G((null==o?void 0:o.schema)||[]),!1}),{deep:!0,immediate:!0}),n((()=>{var e,i;return null==(i=null==(e=null==J?void 0:J.insured[J.currentIndex])?void 0:e.beneficiaryList[J.currentBenifitIndex])?void 0:i.personVO}),((e,i)=>{var l,a;(null==(a=null==(l=null==J?void 0:J.insured[J.currentIndex])?void 0:l.beneficiaryList[J.currentBenifitIndex])?void 0:a.personVO)&&(null==e?void 0:e.relationToInsured)!==(null==i?void 0:i.relationToInsured)&&(ee("受益人关系变动了+++++"),J.insured[J.currentIndex].beneficiaryList[J.currentBenifitIndex].personVO={relationToInsured:null==e?void 0:e.relationToInsured})}),{deep:!0,immediate:!0}),n([()=>{const{holder:e,insuredList:i}=f.modelValue;console.log("表单数据",G(e));const l=k(i)?i.map((e=>({config:e.config,personVO:fe(e),beneficiaryList:k(e.beneficiaryList)?e.beneficiaryList.map((({config:e,...i})=>({config:e,personVO:fe(i)}))):[]}))):[];return[null==e?void 0:e.config,fe(e),l]},()=>J.config,()=>J.initInsuredIList],(([[e,i,l]])=>{ee("投被保人数据变动了"),Object.assign(J.holder.config,e),console.log("投保人数据===",G(J.holder.personVO),G(i)),console.log("投保人数据===",G(J.holder.personVO),G(i)),Object.assign(J.holder.personVO,i);const{length:a}=l||[],{length:t}=J.insured,{length:n,0:o={},[n-1]:s}=J.initInsuredIList,{multiInsuredMaxNum:r,multiInsuredMinNum:u,multiInsuredSupportFlag:d}=J.config,c=f.isView||a>t?Math.min(a,r):t||u;J.insured=Array.from({length:c}).reduce(((e,i,a)=>{const{personVO:t,config:n={},beneficiaryList:r}=(null==l?void 0:l[a])||{},u=G(0===a?o:s);return e[a]?Q(e[a],{...G(u),personVO:t,config:n,beneficiaryList:r}):e[a]={...u,personVO:t,config:n,beneficiaryList:r,nanoid:O()},e}),J.insured)}),{deep:!0,immediate:!0}),n((()=>J.list),((e,i)=>{e&&(J.list=e)})),t({validate:ye,validateTrialFields:pe,validateHolder:(...e)=>{var i;return null==(i=P.value)?void 0:i.validate(...e)},canTrail:()=>J.trialValidated}),(i,l)=>{const a=S,t=x,n=A,p=q,f=U;return o(),s(y,null,[c(ge)&&c(R)?(o(),m(c(X),{key:0,ref_key:"holderFormRef",ref:P,title:"投保人信息",class:"personal-info-card",model:c(J).holder.personVO,schema:c(J).holder.schema,config:c(J).holder.config,"is-view":e.isView,"extra-provision":{objectType:c(h).HOLDER,objectId:c(J).holder.personVO.id}},{cardTitleExtra:u((()=>[c(T)||e.isView||e.isTrial||!c(b)?v("",!0):(o(),s("div",{key:0,class:"choose-customer",onClick:l[0]||(l[0]=e=>E("holder",1,0))},[ai,I(" 选择老用户 ")]))])),_:1},8,["model","schema","config","is-view","extra-provision"])):v("",!0),c(he)&&!e.isOnlyHolder?(o(),s(y,{key:1},[(o(!0),s(y,null,L(c(J).insured,((l,t)=>(o(),m(Ke,j({ref_for:!0,ref_key:"insuredFormRef",ref:K,key:`${l.nanoid}_${t}`,modelValue:l.personVO,"onUpdate:modelValue":e=>l.personVO=e,"beneficiary-list":l.beneficiaryList,"onUpdate:beneficiaryList":e=>l.beneficiaryList=e,title:""+(c(J).insured.length>1?`被保人${t+1}`:"被保人信息"),"holder-person-v-o":c(J).holder.personVO},l,{"beneficiary-schema":c(J).beneficiarySchema,"is-view":e.isView,"multi-beneficiary-num":c(J).config.multiBeneficiaryMaxNum}),{riskList:u((()=>[g(i.$slots,"riskInfo",{insuredIndex:t},void 0,!0)])),cardTitleExtraBenifit:u((i=>[c(T)||e.isView||e.isTrial||!c(b)?v("",!0):(o(),s("div",{key:0,class:"choose-customer",onClick:e=>E("benifit",t,null==i?void 0:i.index)},[si,I(" 选择老用户 ")],8,oi))])),default:u((()=>[1==+l.personVO.relationToHolder||c(T)||e.isView||e.isTrial||!c(b)?v("",!0):(o(),s("div",{key:0,class:"choose-customer",onClick:e=>E("insured",t,0)},[ni,I(" 选择老用户 ")],8,ti)),!e.isView&&t+1>c(J).config.multiInsuredMinNum?(o(),s("span",{key:1,class:"delete-button",onClick:e=>(e=>{C.confirm({message:"确定要删除该被保人吗？"}).then((()=>{J.insured.splice(e,1)}))})(t)},[r(a,{name:"delete",color:"var(--van-primary-color)"})],8,ri)):v("",!0)])),_:2},1040,["modelValue","onUpdate:modelValue","beneficiary-list","onUpdate:beneficiaryList","title","holder-person-v-o","beneficiary-schema","is-view","multi-beneficiary-num"])))),128)),!e.isView&&c(be)?(o(),m(n,{key:0,class:"add-button-wrap"},{title:u((()=>[d("span",{class:"add-button",onClick:Ve},[r(t,{name:"plus"}),I("添加被保人")])])),_:1})):v("",!0)],64)):v("",!0),c(J).show?(o(),m(f,{key:2,round:!1,show:c(J).show,closeable:!1,onClose:Y,onClosed:i.onClosePopupAfterAni},{default:u((()=>[d("div",ui,[r(p,{modelValue:c(J).keyword,"onUpdate:modelValue":l[1]||(l[1]=e=>c(J).keyword=e),placeholder:"客户 姓名/手机号",class:"icon-sercher",onSearch:M,onCancel:H},{"left-icon":u((()=>[d("img",{src:c(ve),alt:"",class:"search-icon-img",style:{width:"22px",height:"23px"}},null,8,di)])),_:1},8,["modelValue"])]),c(J).count?(o(),m(ii,{key:0,data:c(J).list,type:i.order,disabled:!1,onOnClose:me},null,8,["data","type"])):(o(),s("div",ci,mi))])),_:1},8,["show","onClosed"])):v("",!0)],64)}}}),[["__scopeId","data-v-7af40b90"]]);const yi={class:"pro-radio-wrap"},fi=e({name:"ProductKeys"});var Vi=f(e({...fi,props:{originData:{default:()=>({})},modelValue:{default:()=>({})},riskInfo:{default:()=>({})},defaultValue:{default:()=>({})},useData:{default:()=>({})}},emits:["trialChange","inputChange"],setup(e,{emit:i}){const a=e,p=l(a.originData),f=l(a.modelValue);l(1);const g=e=>{const i=H(a.originData,e),l=H(a.originData,e);return i.map((e=>{const i=l?l.find((i=>i.code===e.code)):null;return{label:e.value,value:e.code,disabled:!(!i||null===i.useFlag||void 0===i.useFlag)&&1!==i.useFlag}}))},h=()=>{ye.forEach((e=>{const i=H(a.originData,e.configKey);"checkbox"===e.type&&i&&i.length>0&&!f.value.riskCode&&(f.value[e.valueKey]=i[0].code)}))};return t((()=>{h()})),n((()=>a.defaultValue),(e=>{(null==e?void 0:e.riskCode)&&(f.value=JSON.parse(JSON.stringify(e)))}),{deep:!0,immediate:!0}),n((()=>p.value),(e=>{h()}),{deep:!0,immediate:!0}),n((()=>JSON.stringify(f.value)),((e,l)=>{const t=e&&JSON.parse(e)||{};console.log("---v new = ",t);const n=l&&JSON.parse(l)||{};let o=null;ye.forEach((e=>{t[e.valueKey]&&n[e.valueKey]&&t[e.valueKey]!==n[e.valueKey]&&(o||(o={key:e.valueKey,oldValue:n[e.valueKey],newValue:t[e.valueKey],riskCode:a.riskInfo.riskCode}))})),e&&i("trialChange",JSON.parse(e),o)}),{deep:!0,immediate:!0}),(i,l)=>{const a=b,t=V;return o(!0),s(y,null,L(c(ye),(i=>(o(),s(y,null,[c(H)(e.originData,i.configKey)&&(1===e.riskInfo.mainRiskFlag||i.ruleKey&&2===c(H)(e.originData,i.ruleKey)||!i.ruleKey)?(o(),s("div",{key:e.riskInfo.riskCode+"_"+i.name},["checkbox"===i.type?(o(),m(t,{key:0,modelValue:f.value[i.valueKey],"onUpdate:modelValue":e=>f.value[i.valueKey]=e,label:i.name,name:i.valueKey,class:"risk-select-field"},{input:u((()=>[d("div",yi,[r(a,{modelValue:f.value[i.valueKey],"onUpdate:modelValue":[e=>f.value[i.valueKey]=e,e=>((e,i)=>{console.log("-------change",e,i)})(e,i.valueKey)],options:g(i.configKey)},null,8,["modelValue","onUpdate:modelValue","options"])])])),_:2},1032,["modelValue","onUpdate:modelValue","label","name"])):v("",!0)])):v("",!0)],64)))),256)}}}),[["__scopeId","data-v-15c494f0"]]);const bi={class:"com-risk-liabilityinfo"},gi={class:"item-wrap"},hi={key:0},ki=(e=>(P("data-v-68f76c44"),e=e(),K(),e))((()=>d("div",{class:"cell-content"},null,-1))),Oi=e({name:"riskLiabilityInfo"});var Li=f(e({...Oi,props:{dataSource:{default:()=>({})},modelValue:{default:()=>({})},dataSourceFolmulate:{default:()=>({})},params:{default:()=>({amountUnit:"",basicsAmount:"",basicsPremium:"",riskId:""})},defaultValue:{default:()=>({})}},emits:["trialChange"],setup(e,{emit:i}){const p=e,f=l({formInfo:p.dataSource,isCheckList:[],checkValueList:[],liabilityList:[],signLiabilityClick:[]}),g=(e,i)=>{console.log("---click ",e,i),f.value.signLiabilityClick.push({item:e,index:i})},h=(e,i)=>{const{riskLiabilityInfoVOList:l,riskLiabilityCollocationVOList:a}=p.dataSource,t=l[e].liabilityId,n=(a||[]).find((e=>e.relatedLiabilityId===t||e.collocationLiabilityId===t))||{};let o=null;n.collocationLiabilityId===t?(o=n.relatedLiabilityId,n.collocationType===fe.YI_LAI&&(o=n.collocationLiabilityId)):o=n.collocationLiabilityId;const s=l.findIndex((e=>e.liabilityId===o));((e,i,l)=>{f.value.isCheckList[e]===`${$.YES}`?l===fe.BANG_DING||l===fe.YI_LAI?f.value.isCheckList[i]="1":f.value.isCheckList[i]="2":l===fe.BANG_DING?f.value.isCheckList[i]="2":l===fe.YI_LAI&&(f.value.isCheckList[i]=e!==i?"3":"2")})(e,s,n.collocationType),i(l[s],s,!0)},k=(e,i,l)=>{const a=f.value.liabilityList.map((e=>e.key)),t=0===(null==e?void 0:e.liabilityAttributeValueList.length)&&0===(null==e?void 0:e.formula.length),n=f.value.isCheckList[i];t&&-1===a.indexOf(i)&&n&&f.value.liabilityList.push({liabilityValue:e,key:i,isSwitchOn:f.value.isCheckList[i]}),"1"===n?g(e,i):f.value.signLiabilityClick.splice(i,1),-1!==a.indexOf(i)&&f.value.liabilityList.forEach((e=>{e.key===i&&(e.isSwitchOn=f.value.isCheckList[i])})),l||h(i,k)},O=(e,i)=>{const l=e.liabilityAttributeValueList.filter((e=>e.displayValue===f.value.checkValueList[i])),a=JSON.parse(JSON.stringify(l))[0]||e.liabilityAttributeValueList[0],t={...e,liabilityValue:a};f.value.liabilityList.length>0&&Object.keys(f.value.checkValueList).indexOf(i)&&(f.value.liabilityList=f.value.liabilityList.filter((e=>e.key!==i))),f.value.checkValueList[i]=a.displayValue,f.value.liabilityList.push({liabilityValue:t,key:i,isSwitchOn:"1"})},I=a((()=>G(p.dataSourceFolmulate))),C=(e,i,l)=>{1===l?f.value.liabilityList.push({liabilityValue:{...e,liabilityValue:null==e?void 0:e.liabilityAttributeValueList[0]},key:i,isSwitchOn:"1"}):f.value.liabilityList.push({liabilityValue:{...e,liabilityValue:null==e?void 0:e.liabilityAttributeValueList[0]},key:i,isSwitchOn:"2"})};n((()=>I.value),((e,i)=>{var l,a;const t=null==(l=p.dataSourceFolmulate)?void 0:l.initialAmount,n=null==(a=p.dataSourceFolmulate)?void 0:a.initialPremium,o={amountUnit:p.params.amountUnit,basicsAmount:t,basicsPremium:n,riskId:p.params.riskId};p.dataSource.riskLiabilityInfoVOList.map((async l=>{if(l.formula.length>0&&(t||n)&&((null==e?void 0:e.initialAmount)!==(null==i?void 0:i.initialAmount)||(null==e?void 0:e.initialPremium)!==(null==i?void 0:i.initialPremium))){const{code:e,data:i}=await se({...o,riskLiabilities:[l]});if("10000"===e){if(l.liabilityAttributeValueList=i[0].formulaResult,f.value.signLiabilityClick.length>0){const e=f.value.signLiabilityClick.find((e=>e.item.liabilityCode===l.liabilityCode));e&&O(e.item,e.index)}return{...l,liabilityAttributeValueList:i[0]}}return l}}))}),{deep:!0,immediate:!0}),n((()=>f.value.liabilityList),(e=>{const l=f.value.liabilityList.filter((e=>"1"===e.isSwitchOn)).map((e=>({...e.liabilityValue})));i("trialChange",l)}),{deep:!0,immediate:!0}),t((()=>{console.log("----mounted"),p.dataSource.riskLiabilityInfoVOList.map(((e,i)=>{const l=e.liabilityAttributeValueList.length>0&&0===e.formula.length&&e.liabilityAttributeValueList[0].displayValue;return f.value.checkValueList[i]||(f.value.checkValueList[i]=l),1!=+e.showFlag&&f.value.liabilityList.push({liabilityValue:e,key:i,isSwitchOn:"1"}),1==+e.showFlag&&(1===e.attributeFlag&&2===e.insureFlag&&0===e.formula.length&&C(e,i,1),1===e.attributeFlag&&1===e.insureFlag&&0===e.formula.length&&C(e,i,2),2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&2===e.insureFlag&&C(e,i,1),2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&1===e.insureFlag&&C(e,i,2)),null}))}));const S=l([]);return n((()=>p.dataSource.riskLiabilityInfoVOList),(e=>{S.value=(e||[]).map((e=>{const i=(p.dataSource.riskLiabilityCollocationVOList||[]).find((i=>i.collocationLiabilityId===e.liabilityId));return{...e,relation:null==i?void 0:i.collocationType}}))}),{deep:!0,immediate:!0}),n((()=>p.defaultValue),(e=>{(null==e?void 0:e.riskCode)&&e.liabilityList&&(f.value.signLiabilityClick=[],p.dataSource.riskLiabilityInfoVOList.forEach(((i,l)=>{var a;const t=null==e?void 0:e.liabilityList.find((e=>e.liabilityCode===i.liabilityCode));console.log("--target lia = ",t),t&&(f.value.isCheckList[l]="1",f.value.checkValueList[l]=null==(a=null==t?void 0:t.liabilityValue)?void 0:a.displayValue,1==+i.showFlag&&2==+i.optionalFlag?k(i,l):g(i,l))})))}),{deep:!0,immediate:!0}),(e,i)=>{const l=Ve,a=V,t=J;return o(),m(t,null,{default:u((()=>[d("div",bi,[d("div",gi,[(o(!0),s(y,null,L(c(S),((e,i)=>(o(),s("div",{key:i},[1!=+e.showFlag||2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&2===e.insureFlag?v("",!0):(o(),s("div",hi,[(c(f).isCheckList[i]?"3"!==c(f).isCheckList[i]:e.relation!==c(fe).YI_LAI)?(o(),m(a,{key:0,label:`${e.liabilityName}`,"label-width":"44%",name:"insuredRelation",class:"riskliab-select-field"},{input:u((()=>[1==+e.insureFlag?(o(),m(l,{key:0,modelValue:c(f).isCheckList[i],"onUpdate:modelValue":e=>c(f).isCheckList[i]=e,"active-value":"1","inactive-value":"2",size:"0.68rem",onClick:l=>k(e,i)},null,8,["modelValue","onUpdate:modelValue","onClick"])):v("",!0)])),_:2},1032,["label"])):v("",!0),1==+c(f).isCheckList[i]&&1===e.attributeFlag||1===e.attributeFlag&&2===e.insureFlag?(o(),m(a,{key:1,label:e.liabilityAttributeTypeDesc,"label-width":"44%",name:"insuredRelation",class:"riskliab-select-field-children"},{input:u((()=>[r(b,{modelValue:c(f).checkValueList[i],"onUpdate:modelValue":e=>c(f).checkValueList[i]=e,prop:{label:"displayValue",value:"displayValue"},options:(e.formula.length,e.liabilityAttributeValueList),"is-simply":!0,onClick:l=>O(e,i)},null,8,["modelValue","onUpdate:modelValue","options","onClick"])])),_:2},1032,["label"])):v("",!0)]))])))),128))])]),ki])),_:1})}}}),[["__scopeId","data-v-68f76c44"]]);export{Ae as B,vi as P,Li as R,Vi as a};
