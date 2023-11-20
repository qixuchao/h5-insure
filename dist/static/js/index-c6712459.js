import{d as e,r as i,j as l,k as a,l as t,A as n,o,c as s,b as r,w as u,a as d,u as c,p as m,e as p,f as v,F as y,be as f,bf as b,_ as V,bp as h,bq as g,ai as k,aC as O,g as L,bk as I,bl as C,bm as S,bn as T,aE as x,bs as w,s as F,a8 as _,aD as N,af as A,bt as D,t as j,n as B,i as U,ad as P,aA as K,T as $,bd as J,bi as M,bz as H,bA as R,a0 as E,by as q,au as Y,av as z,aw as G,bg as Q,bh as W,a6 as X}from"./index-0b6bfadc.js";import{S as Z,g as ee}from"./index-71f6d8e9.js";import{a as ie,B as le}from"./infoCollection-8466281b.js";import{S as ae}from"./index-9ab68968.js";import{c as te}from"./cloneDeep-1f872afb.js";import"./PolicyInfo-c6372fb1.js";import{j as ne,f as oe}from"./trial-cef143a6.js";import{S as se,I as re,a as ue,b as de}from"./search-a3f701d3.js";import{f as ce,m as me,g as pe}from"./gender-bdd67324.js";import{P as ve}from"./utils-bc35a5f7.js";import{L as ye}from"./product-7bbf9c44.js";const fe={key:0},be={class:"custom-field"},Ve={key:1,class:"flex-field"},he={class:"pro-radio-wrap"},ge={key:2},ke={class:"pro-radio-wrap"},Oe={class:"custom-field"},Le={key:1},Ie={key:3},Ce={class:"custom-field"},Se={key:1},Te={class:"custom-field"},xe={key:0},we={key:1},Fe={key:4},_e=e({name:"BaoeBaofei"});var Ne=V(e({..._e,props:{originData:{default:()=>({})},modelValue:{default:()=>({})},defalutValue:{default:()=>({})},trialResult:{default:()=>({})}},emits:["update:modelValue","trialChange"],setup(e,{emit:V}){const h=e,g=i({hadSetDefault:!1}),k=l(h.originData),O=l(h.modelValue),L=l(0),I=()=>2===k.value.saleMethod?{label:"保费",key:"initialPremium"}:{label:"保额",key:"initialAmount"},C=()=>{switch(`${k.value.displayUnit}`){case ie.YUAN:return"元";case ie.MONTH_SALARY:return"倍月薪";case ie.MILLION:return"万元";case ie.COPY:return"份"}return""},S=a((()=>2===k.value.saleMethod?{label:"保费",key:"initialPremium"}:{label:"保额",key:"initialAmount"})),T=(...e)=>{if(1===L.value){const e=O.value[S.value.key],i=h.originData.minStepValue,l=h.originData.maxStepValue,a=h.originData.stepValue;if(+e>=+l)O.value[S.value.key]=l;else if(+e<=+i)O.value[S.value.key]=i;else{const l=+e-+i,t=Math.floor(l/+a);l%+a!=0&&(O.value[S.value.key]=+i+t*+a)}}return!0},x=()=>{const{displayType:e,requireCopies:i}=k.value,l=I().key,a=!O.value.riskCode;1===e?L.value=1:3===e&&2===i?(L.value=2,k.value.displayValues.length>=1&&a&&!O.value[l]&&(O.value[l]=k.value.displayValues[0].code||k.value.displayValues[0].value)):3===e&&1===i?(L.value=3,k.value.minCopiesValue===k.value.maxCopiesValue&&a&&!O.value.copy&&(O.value.copy=k.value.minCopiesValue),k.value.displayValues.length>=1&&a&&!O.value[l]&&(O.value[l]=k.value.displayValues[0].code||k.value.displayValues[0].value)):2===e&&(L.value=4,k.value.minCopiesValue===k.value.maxCopiesValue&&a&&!O.value.copy&&(O.value.copy=k.value.minCopiesValue),a&&!O.value.initialAmount&&(O.value.initialAmount=k.value.copiesAmount))},w=a((()=>{if(k.value.displayValues){const e=I().key;return 1!==k.value.displayValues.length||O.value.riskCode||(O.value[e]=k.value.displayValues[0].code),k.value.displayValues.map((e=>({label:e.value,value:e.code})))}return[]})),F=()=>{};return t((()=>{x(),V("update:modelValue",O.value)})),n((()=>k),(e=>{x()}),{deep:!0}),n((()=>h.defalutValue),(e=>{(null==e?void 0:e.riskCode)&&!g.hadSetDefault&&(g.hadSetDefault=!0,O.value={...O.value,initialAmount:e.initialAmount,initialPremium:e.initialPremium,copy:e.copy})}),{deep:!0,immediate:!0}),n((()=>O.value),(e=>{(()=>{if(1===L.value){const e=O.value[S.value.key],i=h.originData.minStepValue,l=h.originData.maxStepValue,a=h.originData.stepValue;if(+e>+l)return!1;if(+e<+i)return!1;if((+e-+i)%+a!=0)return!1}return!0})()&&(V("update:modelValue",e),V("trialChange",e))}),{deep:!0,immediate:!0}),(i,l)=>{const a=Z,t=f,n=b;return o(),s(y,null,[1===L.value?(o(),s("div",fe,[r(t,{label:`基本${c(S).label}`,name:c(S).key,class:"risk-select-field"},{input:u((()=>[d("div",be,[r(a,{modelValue:O.value[c(S).key],"onUpdate:modelValue":l[0]||(l[0]=e=>O.value[c(S).key]=e),"input-width":"80px","default-value":e.originData.minStepValue,min:e.originData.minStepValue,step:e.originData.stepValue,max:e.originData.maxStepValue,theme:"round",onBlur:T},null,8,["modelValue","default-value","min","step","max"])])])),_:1},8,["label","name"])])):2===L.value?(o(),s("div",Ve,[r(t,{modelValue:O.value[c(S).key],"onUpdate:modelValue":l[2]||(l[2]=e=>O.value[c(S).key]=e),label:`基本${c(S).label}`,name:c(S).key,class:"risk-select-field"},{input:u((()=>[d("div",he,[r(n,{modelValue:O.value[c(S).key],"onUpdate:modelValue":l[1]||(l[1]=e=>O.value[c(S).key]=e),options:c(w),onclick:F},null,8,["modelValue","options"])])])),_:1},8,["modelValue","label","name"])])):3===L.value?(o(),s("div",ge,[r(t,{modelValue:O.value[c(S).key],"onUpdate:modelValue":l[4]||(l[4]=e=>O.value[c(S).key]=e),label:`基本${c(S).label}`,name:c(S).key,class:"risk-select-field"},{input:u((()=>[d("div",ke,[r(n,{modelValue:O.value[c(S).key],"onUpdate:modelValue":l[3]||(l[3]=e=>O.value[c(S).key]=e),options:c(w),onclick:F},null,8,["modelValue","options"])])])),_:1},8,["modelValue","label","name"]),d("div",null,[r(t,{modelValue:O.value.copy,"onUpdate:modelValue":l[6]||(l[6]=e=>O.value.copy=e),label:"份数",name:"copy",class:"risk-select-field"},{input:u((()=>[d("div",Oe,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(o(),m(a,{key:0,modelValue:O.value.copy,"onUpdate:modelValue":l[5]||(l[5]=e=>O.value.copy=e),"input-width":"80px","default-value":e.originData.minCopiesValue,min:e.originData.minCopiesValue||1,step:1,max:e.originData.maxCopiesValue,theme:"round"},null,8,["modelValue","default-value","min","max"])):(o(),s("span",Le,p(e.originData.minCopiesValue),1))])])),_:1},8,["modelValue"])])])):4===L.value?(o(),s("div",Ie,[r(t,{modelValue:O.value.copy,"onUpdate:modelValue":l[8]||(l[8]=e=>O.value.copy=e),label:"份数",name:"copy",class:"risk-select-field"},{input:u((()=>[d("div",Ce,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(o(),m(a,{key:0,modelValue:O.value.copy,"onUpdate:modelValue":l[7]||(l[7]=e=>O.value.copy=e),"input-width":"64px","default-value":e.originData.minCopiesValue,min:e.originData.minCopiesValue||1,step:1,max:e.originData.maxCopiesValue,theme:"round"},null,8,["modelValue","default-value","min","max"])):(o(),s("span",Se,p(e.originData.minCopiesValue),1))])])),_:1},8,["modelValue"]),r(t,{label:c(S).label,name:"copyAmount",class:"risk-select-field"},{input:u((()=>[d("div",Te,[e.originData.minCopiesValue!==e.originData.maxCopiesValue?(o(),s("span",xe,p(+e.originData.copiesAmount*+O.value.copy+C()),1)):(o(),s("span",we,p(+e.originData.minCopiesValue*+e.originData.copiesAmount+C()),1))])])),_:1},8,["label"])])):v("",!0),2===k.value.saleMethod&&e.trialResult&&e.trialResult.initialAmount>0?(o(),s("div",Fe,[r(t,{label:"保额",class:"risk-select-field"},{input:u((()=>[d("span",null,p(e.trialResult.initialAmount),1)])),_:1})])):v("",!0)],64)}}}),[["__scopeId","data-v-3a02f6d0"]]);const Ae=e({name:"BeneficiaryItem"});var De=V(e({...Ae,props:{modelValue:{default:()=>({})},schema:{default:()=>[]},config:{default:()=>({})},isView:{type:Boolean,default:!1},isTrial:{type:Boolean,default:!1},title:{default:"受益人"}},emits:["update:modelValue","trailChange"],setup(e,{expose:a,emit:t}){const s=e,r=l(null),d=i({validated:!1,schema:[],config:{},personVO:{}});return n((()=>s.config),(e=>{e&&Object.assign(d.config,e)}),{deep:!0,immediate:!0}),n((()=>s.schema),(e=>{e&&Object.assign(d.schema,te(s.schema))}),{deep:!0,immediate:!0}),n((()=>s.modelValue),((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&(h("受益人数据变动了"),Object.assign(d.personVO,e))}),{deep:!0,immediate:!0}),n((()=>d.personVO),(e=>{e&&t("update:modelValue",e)}),{deep:!0,immediate:!0}),n((()=>{var e;return null==(e=d.personVO)?void 0:e.relationToInsured}),((e,i)=>{if(e===i)return!1;h("受益人与被保人关系变动了");const{certType:l}=d.personVO||{},[a,t]=g(d.schema,{certType:l,relationToHolder:e});return k(d.config,t),!s.isView&&e&&i&&Object.assign(d.personVO,{...O(d.personVO,(e=>!(a&&"certType"===e))),relationToInsured:e}),!1}),{immediate:!0}),a({validate:e=>T(r,s.trialFactorCodes,e),validateTrialFields:()=>S({personVO:d.personVO,trialFactorCodes:s.trialFactorCodes})}),(i,l)=>(o(),m(c(C),{ref_key:"formRef",ref:r,class:"personal-info-card",title:e.title,model:c(d).personVO,schema:c(d).schema,config:c(d).config,"is-view":e.isView,"extra-provision":{objectType:c(I).BENEFICIARY,objectId:c(d).personVO.id}},{cardTitleExtra:u((()=>[L(i.$slots,"default",{},void 0,!0)])),_:3},8,["title","model","schema","config","is-view","extra-provision"]))}}),[["__scopeId","data-v-eb39bf9e"]]);const je=["onClick"],Be=e({name:"InsuredItem"});var Ue=V(e({...Be,props:{modelValue:{default:()=>({})},title:{default:""},holderPersonVO:null,schema:{default:()=>[]},config:{default:()=>({})},isView:{type:Boolean,default:!1},isTrial:{type:Boolean,default:!1},trialFactorCodes:{default:()=>[]},multiBeneficiaryMaxNum:{default:null},beneficiaryList:{default:()=>[]},beneficiarySchema:{default:()=>[]}},emits:["update:modelValue","update:beneficiaryList"],setup(e,{expose:t,emit:d}){const p=e,f=l(null),b=l(null),V=l(null),j={schema:[],trialFactorCodes:[],config:{},personVO:{}},B=i({validated:!1,schema:[],config:{},personVO:{},beneficiaryTypeSchemaList:[],beneficiarySchemaList:[],beneficiaryList:[]}),U=()=>{B.beneficiaryList.push(te({...j,nanoid:w(),schema:p.beneficiarySchema}))},P=a((()=>!p.multiBeneficiaryMaxNum||B.beneficiaryList.length<p.multiBeneficiaryMaxNum)),K=a((()=>!B.schema.filter((e=>{var i;return!(e.hidden||(null==(i=B.config[e.name])?void 0:i.hidden))})).length)),$=a((()=>B.schema.filter((e=>e.isSelfInsuredNeed)).map((e=>e.name)))),J=a((()=>x(p.beneficiarySchema))),M=a((()=>{var e;return String(null==(e=B.personVO)?void 0:e.insuredBeneficiaryType)===le.SPECIFY}));return n((()=>p.holderPersonVO),(e=>{var i;h("------投保人信息变动了-----");const{id:l,...a}=e||{};if("1"===String(null==(i=B.personVO)?void 0:i.relationToHolder)){const e=x($.value)?Object.keys(a).reduce(((e,i)=>([...$.value,"occupationClass"].includes(i)&&!["birthday","age","gender"].includes(i)||(e[i]=a[i]),e)),{}):a;Object.assign(B.personVO,e)}}),{deep:!0,immediate:!0}),n((()=>p.beneficiarySchema),(e=>{B.beneficiarySchemaList=x(e)?e.filter((e=>"insuredBeneficiaryType"!==e.name)):[],B.beneficiaryTypeSchemaList=x(e)?e.filter((e=>"insuredBeneficiaryType"===e.name)):[]}),{deep:!0,immediate:!0}),n(M,((e,i)=>{String(e)!==String(i)&&(h("受益人类型关系变动了"),e?!x(B.beneficiaryList)&&U():B.beneficiaryList=[])}),{immediate:!0}),n((()=>te(B.beneficiaryList).map((e=>({personVO:e.personVO,nanoid:e.nanoid})))),((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&d("update:beneficiaryList",e)}),{deep:!0,immediate:!0}),n((()=>{var e;return null==(e=B.personVO)?void 0:e.relationToHolder}),((e,i)=>{if(!e)return;h("与投保人关系变动了");const{personVO:l,schema:a=[],config:t}=B||{},{id:n,...o}=p.holderPersonVO||{},s="1"===String(l.relationToHolder),[r,u]=g(a,l);if(k(t,u),a.forEach((e=>{e.relationToHolder=l.relationToHolder,e.hidden=!e.isSelfInsuredNeed&&s})),!p.isView&&i&&String(e)!==String(i)){let e={...l,...o};s||(e={...O(l,(e=>!(r&&"certType"===e))),relationToHolder:l.relationToHolder}),Object.assign(B.personVO,e)}}),{deep:!0}),n((()=>{var e;return null==(e=B.personVO)?void 0:e.relationToMainInsured}),((e,i)=>{if(!e)return;h("次被保人与主被保人关系变动了");const{personVO:l,schema:a=[],config:t}=B||{},{certType:n}=l||{},[o,s]=g(a,{certType:n,relationToHolder:e});k(t,s),!p.isView&&i&&String(e)!==String(i)&&Object.assign(B.personVO,{...O(l,(e=>!(o&&"certType"===e))),relationToMainInsured:l.relationToMainInsured})})),n((()=>p.config),(e=>{e&&Object.assign(B.config,e)}),{deep:!0,immediate:!0}),n((()=>p.schema),((e,i)=>{e&&JSON.stringify(e)!==JSON.stringify(i)&&Object.assign(B.schema,te(e))}),{deep:!0,immediate:!0}),n((()=>p.modelValue),((e,i)=>{if(JSON.stringify(e)!==JSON.stringify(i)){const{beneficiaryList:i,...l}=e;k(B.personVO,l)}}),{deep:!0,immediate:!0}),n((()=>te(p.beneficiaryList)),((e,i)=>{JSON.stringify(e)!==JSON.stringify(i)&&(B.beneficiaryList=x(e)?e.map((e=>({...e,nanoid:e.nanoid||w()}))):[])}),{deep:!0,immediate:!0}),n((()=>B.personVO),(e=>{e&&d("update:modelValue",e)}),{deep:!0,immediate:!0}),t({validate:e=>{var i;return Promise.all([T(f,p.trialFactorCodes,e),T(b,[],e),...(null==(i=V.value)?void 0:i.map((i=>i.validate(e))))||[]])},validateTrialFields:()=>S({personVO:B.personVO,trialFactorCodes:p.trialFactorCodes})}),(i,l)=>{const a=A,t=D;return o(),s(y,null,[r(c(C),{ref_key:"insuredFormRef",ref:f,class:"personal-info-card",title:c(K)?"":e.title,model:c(B).personVO,schema:c(B).schema,config:c(B).config,"is-view":e.isView,"extra-provision":{objectType:c(I).INSURED,objectId:c(B).personVO.id}},{cardTitleExtra:u((()=>[L(i.$slots,"default",{},void 0,!0)])),_:3},8,["title","model","schema","config","is-view","extra-provision"]),c(J)?(o(),s(y,{key:0},[r(c(C),{ref_key:"beneficiaryTypeFormRef",ref:b,class:"personal-info-card",title:"受益人",model:c(B).personVO,schema:c(B).beneficiaryTypeSchemaList,"is-view":e.isView},null,8,["model","schema","is-view"]),c(M)?(o(),s(y,{key:0},[(o(!0),s(y,null,F(c(B).beneficiaryList,((l,t)=>(o(),m(De,{ref_for:!0,ref_key:"beneficiaryFormRef",ref:V,key:`${l.nanoid}_${t}`,modelValue:l.personVO,"onUpdate:modelValue":e=>l.personVO=e,title:`受益人${t+1}`,schema:c(B).beneficiarySchemaList,config:l.config,"is-view":e.isView},{default:u((()=>[L(i.$slots,"cardTitleExtraBenifit",{index:t},void 0,!0),t>0&&!e.isView?(o(),s("span",{key:0,class:"delete-button",onClick:e=>(e=>{N.confirm({message:"确定要删除该受益人吗？"}).then((()=>{B.beneficiaryList.splice(e,1)}))})(t)},[r(a,{name:"delete"})],8,je)):v("",!0)])),_:2},1032,["modelValue","onUpdate:modelValue","title","schema","config","is-view"])))),128)),!e.isView&&c(P)?(o(),s("span",{key:0,class:"add-button",onClick:U},[r(t,{name:"plus"}),_("添加受益人")])):v("",!0)],64)):v("",!0)],64)):v("",!0),L(i.$slots,"riskList",{},void 0,!0)],64)}}}),[["__scopeId","data-v-524344c0"]]);const Pe={class:"customer-list-item"},Ke={class:"left"},$e=["src"],Je={class:"left-item"},Me={class:"name"},He={key:0,class:"cert-no"},Re={class:"cert-type-name"},Ee={key:1,class:"cert-no"},qe={class:"cert-type-name"},Ye={key:0,class:"from-wx"},ze=d("img",{class:"img-wx",alt:""},null,-1),Ge=e({__name:"item",props:{data:{type:Object,required:!1,default:()=>Object},disabled:{type:Boolean,required:!1,default:()=>!0}},emits:["on-delete","on-close"],setup(e,{emit:i}){const a=e,t=l(!1),{data:n,disabled:m}=j(a);return(e,l)=>{const a=se;return o(),s("div",Pe,[r(a,{disabled:c(m)},{default:u((()=>{var e,a,r,u,m,y,f,b;return[d("div",{class:B(["list-item",!0===t.value?"item-bg":""]),onClick:l[0]||(l[0]=e=>(e=>{t.value=!0,e.stopPropagation(),console.log("这里关闭弹窗",n.value),i("on-close",n.value)})(e))},[d("div",Ke,[d("div",null,[d("img",{src:c(n).gender?"1"===c(n).gender?c(ce):c(me):c(pe),alt:"",class:"mf"},null,8,$e)]),d("div",null,[d("div",Je,[d("div",Me,p(c(n).name),1),(null==(a=null==(e=c(n))?void 0:e.certInfo[0])?void 0:a.certNo)&&1==+(null==(u=null==(r=c(n))?void 0:r.certInfo[0])?void 0:u.certType)?(o(),s("div",He,[_(p(c(n).certInfo[0].desensitizaCertNo)+" ",1),d("span",Re,p(c(n).certInfo[0].certTypeName),1)])):v("",!0),(null==(y=null==(m=c(n))?void 0:m.certInfo[0])?void 0:y.certNo)&&1!=+(null==(b=null==(f=c(n))?void 0:f.certInfo[0])?void 0:b.certType)?(o(),s("div",Ee,[_(p(c(n).certInfo[0].certNo)+" ",1),d("span",qe,p(c(n).certInfo[0].certTypeName),1)])):v("",!0)]),c(n).relative?(o(),s("div",Ye,[ze,_(" 微信客户 ")])):v("",!0)])])],2)]})),_:1},8,["disabled"])])}}});const Qe={class:"customer-list"},We={key:0,class:"list-pr"},Xe={key:1,class:"list-pr"};var Ze=V(e({__name:"index",props:{data:{type:Array,required:!0,default:()=>[]},type:{type:String,required:!0,default:()=>"firstLetter"},disabled:{type:Boolean,required:!1,default:()=>!0}},emits:["on-delete","on-close"],setup(e,{emit:i}){const a=e,{data:t,type:d,disabled:p}=j(a),v=l([]),f=l([]),b=e=>{i("on-delete",e)},V=e=>{i("on-close",e),console.log("这里关闭弹窗1111222----",e)};return n((()=>a.data),(()=>{t.value=a.data||[],console.log("data",t),v.value=t.value.filter((e=>!!(e.children&&Array.isArray(e.children)&&e.children.length>0))),f.value=v.value.map((e=>e.label))}),{immediate:!0,deep:!0}),(e,i)=>{const l=re,a=ue;return o(),s("div",Qe,["firstLetter"===c(d)?(o(),s("div",We,[r(a,{"highlight-color":"$zaui-brand","index-list":f.value,sticky:!1},{default:u((()=>[(o(!0),s(y,null,F(v.value,(e=>(o(),s(y,{key:e.label},[r(l,{index:`${e.label}`},null,8,["index"]),(o(!0),s(y,null,F(e.children,(e=>(o(),m(Ge,{key:e.agentCustomerId,data:e,disabled:c(p),onOnDelete:b,onOnClose:V},null,8,["data","disabled"])))),128))],64)))),128))])),_:1},8,["index-list"])])):(o(),s("div",Xe,[(o(!0),s(y,null,F(c(t),(e=>(o(),m(Ge,{key:e.agentCustomerId,data:e,disabled:c(p),onOnDelete:b,onOnClose:V},null,8,["data","disabled"])))),128))]))])}}}),[["__scopeId","data-v-7f0e84c3"]]);const ei=e=>(z("data-v-42d53b68"),e=e(),G(),e),ii=["onClick"],li=["onClick"],ai=["onClick"],ti={class:"search-bar"},ni=["src"],oi={key:1,class:"empth"},si=[ei((()=>d("p",null,[d("img",{src:"/static/png/empth-d7935dd7.png",class:"ig"})],-1))),ei((()=>d("p",{class:"p1"},"暂时还没有客户哦～",-1)))],ri=e({name:"PersonalInfo"});var ui=V(e({...ri,props:{productFactor:{default:()=>({})},modelValue:{default:()=>({})},isTrial:{type:Boolean,default:!1},isView:{type:Boolean,default:!1},isOnlyHolder:{type:Boolean,default:!1},multiInsuredConfig:null},emits:["update:modelValue","trailChange","trailValidateFailed","closeCustomerPopoup"],setup(e,{expose:t,emit:p}){const f=e,b=U(),V=P(),{isShare:O,saleChannelId:j}=b.query,B=l(null),z=l(null),G=i({count:0,slotProps:{},uniqKey:"",currentIndex:0,currentBenifitIndex:0,currentType:"",keyword:void 0,show:!1,list:[],config:{},trialValidated:!1,holder:{personVO:{},schema:[],trialFactorCodes:[],config:{}},beneficiarySchema:[],initInsuredIList:[],insured:[]}),Q=async e=>{var i,l;G.keyword;const a={pageNum:1,pageSize:999,queryBean:{keyword:G.keyword||""}},t=await ne(a),n=[];Object.keys((null==(i=null==t?void 0:t.data)?void 0:i.customerMaps)||{}).forEach((e=>{var i;n.push({label:e,children:null==(i=null==t?void 0:t.data)?void 0:i.customerMaps[e]})})),G.list=n,G.count=null==(l=null==t?void 0:t.data)?void 0:l.count},W=()=>{Q(G.keyword)},X=()=>{Q()},Z=a((()=>!f.isTrial||f.isOnlyHolder)),ee=(e,i,l)=>{G.currentType=e,"benifit"!==e?G.currentIndex=i:(G.currentIndex=i,G.currentBenifitIndex=l),G.uniqKey=w(),Q(),G.show=!0},ie=()=>{setTimeout((()=>{G.show=!1}),300)},le=()=>"holder"===G.currentType?G.holder.schema.map((e=>e.name))||[]:"insured"===G.currentType?G.insured[G.currentIndex].schema.map((e=>e.name))||[]:"benifit"===G.currentType?G.beneficiarySchema.map((e=>e.name))||[]:void 0,oe=a((()=>{var e,i;return null==(i=null==(e=null==G?void 0:G.holder)?void 0:e.personVO)?void 0:i.name})),se=a((()=>{var e,i;return null==(i=null==(e=null==G?void 0:G.holder)?void 0:e.personVO)?void 0:i.gender})),re=a((()=>{var e,i;return null==(i=null==(e=null==G?void 0:G.holder)?void 0:e.personVO)?void 0:i.birthday})),ue=a((()=>{var e,i;return null==(i=null==(e=null==G?void 0:G.holder)?void 0:e.personVO)?void 0:i.certType})),ce=a((()=>{var e,i;return null==(i=null==(e=null==G?void 0:G.holder)?void 0:e.personVO)?void 0:i.certNo})),me=(e,i)=>{var l,a,t,n,o;console.log("convertCustomerData",e);const s=null==(l=null==e?void 0:e.contactInfo)?void 0:l.find((e=>"01"===e.contactType)),r=null==(a=null==e?void 0:e.contactInfo)?void 0:a.find((e=>"02"===e.contactType)),u=null==e?void 0:e.certInfo.filter((e=>"1"===e.certType)),d={name:null==e?void 0:e.name,gender:null==e?void 0:e.gender,birthday:null==e?void 0:e.birthday,mobile:(null==s?void 0:s.contactNo)||null,email:(null==r?void 0:r.contactNo)||null,certNo:(null==(t=u[0])?void 0:t.certNo)||null,certType:(null==(n=u[0])?void 0:n.certType)||null};console.log("insureKeys",le());const c=null==(o=le())?void 0:o.reduce(((e,i)=>d.hasOwnProperty(i)?{...e,[i]:d[i]}:e),{});return console.log("extractedObject===",c),console.log("state.holder.schema=====",G.holder.schema),c},pe=e=>{var i,l,a,t,n,o,s,r,u,d,c;if(G.show=!1,"holder"===G.currentType&&Object.assign((null==(i=null==G?void 0:G.holder)?void 0:i.personVO)||{},me(e)),"insured"===G.currentType){const i=null==(l=null==G?void 0:G.insured[G.currentIndex])?void 0:l.schema.some((e=>"relationToHolder"===e.name&&e.attributeValueList.some((e=>"1"===e.code)))),{name:n,gender:o,birthday:s,certType:r,certNo:u}=me(e);if(oe.value===n&&se.value===o&&re.value===s&&ue.value===r&&ce.value===u)return i?void Object.assign((null==(a=null==G?void 0:G.insured[G.currentIndex])?void 0:a.personVO)||{},{relationToHolder:"1"}):void $("与投保人关系未配置本人");Object.assign((null==(t=null==G?void 0:G.insured[G.currentIndex])?void 0:t.personVO)||{},me(e))}if("benifit"===G.currentType){const{name:i,gender:l,birthday:a,certType:t,certNo:m}=me(e);(null==(n=null==G?void 0:G.insured[G.currentIndex])?void 0:n.personVO.name)===i&&(null==(o=null==G?void 0:G.insured[G.currentIndex])?void 0:o.personVO.gender)===l&&(null==(s=null==G?void 0:G.insured[G.currentIndex])?void 0:s.personVO.birthday)===a&&(null==(r=null==G?void 0:G.insured[G.currentIndex])?void 0:r.personVO.certType)===t&&(null==(u=null==G?void 0:G.insured[G.currentIndex])?void 0:u.personVO.certNo)===m?$("指定受益人不可为被保人本人"):Object.assign((null==(c=null==(d=null==G?void 0:G.insured[G.currentIndex])?void 0:d.beneficiaryList[G.currentBenifitIndex])?void 0:c.personVO)||{},me(e))}},ve=()=>{var e;const i=!z.value||(null==(e=z.value)?void 0:e.every((e=>e.validateTrialFields())));return(!B.value||S(G.holder))&&i},ye=e=>{var i;return Promise.all([...(null==(i=z.value)?void 0:i.map((i=>i.validate(e))))||[],T(B,G.holder.trialFactorCodes,e)])},fe=e=>{const{productList:i,config:l,schema:a,trialFactorCodes:t,beneficiaryList:n,personVO:o,nanoid:s,...r}=e||{};return r},be=()=>{const{length:e,[e-1]:i}=G.initInsuredIList;G.insured.push(te({...i,nanoid:w()}))},Ve=a((()=>{const{multiInsuredMaxNum:e,multiInsuredSupportFlag:i}=G.config;return i&&(!e||G.insured.length<e)})),he=a((()=>x(G.holder.schema))),ge=a((()=>G.insured.some((e=>x(e.schema))))),ke=(e,i)=>x(e)?e.reduce(((e,l)=>(e[l]=i[l],e)),{}):{},Oe=(e,i,l={})=>!!x(e)&&JSON.stringify(ke(e,i))!==JSON.stringify(ke(e,l));return n((()=>{var e;return null==(e=G.holder.personVO)?void 0:e.certType}),((e,i)=>{if(`${e}`==`${i}`)return!1;h("投保人信息变动了====");const[l,a]=g(G.holder.schema,{certType:e});return k(G.holder.config,a),!1})),n([()=>{var e;return{...null==(e=G.holder)?void 0:e.personVO}},()=>G.insured.map((e=>{const{beneficiaryList:i,personVO:l}=e||{};return{...l,beneficiaryList:x(i)?i.map((e=>({...e.personVO}))):[]}}))],K(((e,i)=>{var l,a,t;const[n,o]=e,s=((e,i)=>{const l=Oe(G.holder.trialFactorCodes,e[0],i[0]),a=G.insured.some(((e,l)=>{var a;const{trialFactorCodes:t,personVO:n}=e;return Oe(t,n,null==(a=i[1])?void 0:a[l])}));return l||a})([n,o],i);h(`投被保人信息变动了---${s}`);const{insuredList:r}=f.modelValue,u={holder:n,insuredList:o.map(((e,i)=>({...(null==r?void 0:r[i])||{},...e})))};if(G.config.isSpouseInsured){const[e,i]=o.map((e=>null==e?void 0:e.gender));if(e&&i&&String(e)===String(i))return $("被保人性别与投保要求不符")}if(JSON.stringify(null==(l=null==o?void 0:o[0])?void 0:l.personVO),fe(null==(t=null==(a=f.modelValue)?void 0:a.insuredList)?void 0:t[0]),console.log("-------result = ",u),p("update:modelValue",u),!ve())return G.trialValidated=!1,p("trailValidateFailed",u);ye(!0).then((()=>{G.trialValidated=!0,s&&!f.isOnlyHolder&&p("trailChange",u)})).catch((()=>{G.trialValidated=!1,p("trailValidateFailed",u)}))}),500),{deep:!0}),n([()=>f.productFactor,()=>f.isTrial],((e,i)=>{if(J(e,i)||!e[0])return!1;h("投被保人要素变动了");const{insuredFactorCodes:l,holderFactorCodes:a}=M(H)||{},{holder:t,insured:n,beneficiary:o,config:s}=R(e[0],{isTrial:e[1],...f.multiInsuredConfig,insuredFactorCodes:l,holderFactorCodes:a});return Object.assign(G.holder,t),G.config=s,x(n)&&(G.initInsuredIList=n.map((e=>({...e,beneficiaryList:[]})))),G.beneficiarySchema=te((null==o?void 0:o.schema)||[]),!1}),{deep:!0,immediate:!0}),n((()=>{var e,i;return null==(i=null==(e=null==G?void 0:G.insured[G.currentIndex])?void 0:e.beneficiaryList[G.currentBenifitIndex])?void 0:i.personVO}),((e,i)=>{var l,a;(null==(a=null==(l=null==G?void 0:G.insured[G.currentIndex])?void 0:l.beneficiaryList[G.currentBenifitIndex])?void 0:a.personVO)&&(null==e?void 0:e.relationToInsured)!==(null==i?void 0:i.relationToInsured)&&(h("受益人关系变动了+++++"),G.insured[G.currentIndex].beneficiaryList[G.currentBenifitIndex].personVO={relationToInsured:null==e?void 0:e.relationToInsured})}),{deep:!0,immediate:!0}),n([()=>{const{holder:e,insuredList:i}=f.modelValue;console.log("表单数据",te(e));const l=x(i)?i.map((e=>({config:e.config,personVO:fe(e),beneficiaryList:x(e.beneficiaryList)?e.beneficiaryList.map((({config:e,...i})=>({config:e,personVO:fe(i)}))):[]}))):[];return[null==e?void 0:e.config,fe(e),l]},()=>G.config,()=>G.initInsuredIList],(([[e,i,l]])=>{h("投被保人数据变动了"),Object.assign(G.holder.config,e),console.log("投保人数据===",te(G.holder.personVO),te(i)),console.log("投保人数据===",te(G.holder.personVO),te(i)),Object.assign(G.holder.personVO,i);const{length:a}=l||[],{length:t}=G.insured,{length:n,0:o={},[n-1]:s}=G.initInsuredIList,{multiInsuredMaxNum:r,multiInsuredMinNum:u,multiInsuredSupportFlag:d}=G.config,c=f.isView||a>t?Math.min(a,r):t||u;G.insured=Array.from({length:c}).reduce(((e,i,a)=>{const{personVO:t,config:n={},beneficiaryList:r}=(null==l?void 0:l[a])||{},u=te(0===a?o:s);return e[a]?k(e[a],{...te(u),personVO:t,config:n,beneficiaryList:r}):e[a]={...u,personVO:t,config:n,beneficiaryList:r,nanoid:w()},e}),G.insured)}),{deep:!0,immediate:!0}),n((()=>G.list),((e,i)=>{e&&(G.list=e)})),t({validate:ye,validateTrialFields:ve,validateHolder:(...e)=>{var i;return null==(i=B.value)?void 0:i.validate(...e)},canTrail:()=>G.trialValidated}),(i,l)=>{const a=A,t=D,n=q,p=ae,f=Y;return o(),s(y,null,[c(he)&&c(Z)?(o(),m(c(C),{key:0,ref_key:"holderFormRef",ref:B,title:"投保人信息",class:"personal-info-card",model:c(G).holder.personVO,schema:c(G).holder.schema,config:c(G).holder.config,"is-view":e.isView,"extra-provision":{objectType:c(I).HOLDER,objectId:c(G).holder.personVO.id}},{cardTitleExtra:u((()=>[c(O)||e.isView||e.isTrial||!c(V)?v("",!0):(o(),s("div",{key:0,class:"choose-customer",onClick:l[0]||(l[0]=e=>ee("holder",1,0))},[r(a,{name:"customer",color:"#333"}),_(" 选择老用户 ")]))])),_:1},8,["model","schema","config","is-view","extra-provision"])):v("",!0),c(ge)&&!e.isOnlyHolder?(o(),s(y,{key:1},[(o(!0),s(y,null,F(c(G).insured,((l,t)=>(o(),m(Ue,E({ref_for:!0,ref_key:"insuredFormRef",ref:z,key:`${l.nanoid}_${t}`,modelValue:l.personVO,"onUpdate:modelValue":e=>l.personVO=e,"beneficiary-list":l.beneficiaryList,"onUpdate:beneficiaryList":e=>l.beneficiaryList=e,title:""+(c(G).insured.length>1?`被保人${t+1}`:"被保人信息"),"holder-person-v-o":c(G).holder.personVO},l,{"beneficiary-schema":c(G).beneficiarySchema,"is-view":e.isView,"multi-beneficiary-num":c(G).config.multiBeneficiaryMaxNum}),{riskList:u((()=>[L(i.$slots,"riskInfo",{insuredIndex:t},void 0,!0)])),cardTitleExtraBenifit:u((i=>[c(O)||e.isView||e.isTrial||!c(V)?v("",!0):(o(),s("div",{key:0,class:"choose-customer",onClick:e=>ee("benifit",t,null==i?void 0:i.index)},[r(a,{name:"customer",color:"#333"}),_(" 选择老用户 ")],8,li))])),default:u((()=>[1==+l.personVO.relationToHolder||c(O)||e.isView||e.isTrial||!c(V)?v("",!0):(o(),s("div",{key:0,class:"choose-customer",onClick:e=>ee("insured",t,0)},[r(a,{name:"customer",color:"#333"}),_(" 选择老用户 ")],8,ii)),!e.isView&&t+1>c(G).config.multiInsuredMinNum?(o(),s("span",{key:1,class:"delete-button",onClick:e=>(e=>{N.confirm({message:"确定要删除该被保人吗？"}).then((()=>{G.insured.splice(e,1)}))})(t)},[r(a,{name:"delete",color:"var(--van-primary-color)"})],8,ai)):v("",!0)])),_:2},1040,["modelValue","onUpdate:modelValue","beneficiary-list","onUpdate:beneficiaryList","title","holder-person-v-o","beneficiary-schema","is-view","multi-beneficiary-num"])))),128)),!e.isView&&c(Ve)?(o(),m(n,{key:0,class:"add-button-wrap"},{title:u((()=>[d("span",{class:"add-button",onClick:be},[r(t,{name:"plus"}),_("添加被保人")])])),_:1})):v("",!0)],64)):v("",!0),c(G).show?(o(),m(f,{key:2,round:!1,show:c(G).show,closeable:!1,onClose:ie,onClosed:i.onClosePopupAfterAni},{default:u((()=>[d("div",ti,[r(p,{modelValue:c(G).keyword,"onUpdate:modelValue":l[1]||(l[1]=e=>c(G).keyword=e),placeholder:"客户 姓名/手机号",class:"icon-sercher",onSearch:W,onCancel:X},{"left-icon":u((()=>[d("img",{src:c(de),alt:"",class:"search-icon-img",style:{width:"22px",height:"23px"}},null,8,ni)])),_:1},8,["modelValue"])]),c(G).count?(o(),m(Ze,{key:0,data:c(G).list,type:i.order,disabled:!1,onOnClose:pe},null,8,["data","type"])):(o(),s("div",oi,si))])),_:1},8,["show","onClosed"])):v("",!0)],64)}}}),[["__scopeId","data-v-42d53b68"]]);const di={class:"pro-radio-wrap"},ci=e({name:"ProductKeys"});var mi=V(e({...ci,props:{originData:{default:()=>({})},modelValue:{default:()=>({})},riskInfo:{default:()=>({})},defaultValue:{default:()=>({})},useData:{default:()=>({})}},emits:["trialChange","inputChange"],setup(e,{emit:i}){const a=e,p=l(a.originData),V=l(a.modelValue);l(1);const h=e=>{const i=ee(a.originData,e),l=ee(a.originData,e);return i.map((e=>{const i=l?l.find((i=>i.code===e.code)):null;return{label:e.value,value:e.code,disabled:!(!i||null===i.useFlag||void 0===i.useFlag)&&1!==i.useFlag}}))},g=()=>{ve.forEach((e=>{const i=ee(a.originData,e.configKey);"checkbox"===e.type&&i&&i.length>0&&!V.value.riskCode&&(V.value[e.valueKey]=i[0].code)}))};return t((()=>{g()})),n((()=>a.defaultValue),(e=>{(null==e?void 0:e.riskCode)&&(V.value=JSON.parse(JSON.stringify(e)))}),{deep:!0,immediate:!0}),n((()=>p.value),(e=>{g()}),{deep:!0,immediate:!0}),n((()=>JSON.stringify(V.value)),((e,l)=>{const t=e&&JSON.parse(e)||{};console.log("---v new = ",t);const n=l&&JSON.parse(l)||{};let o=null;ve.forEach((e=>{t[e.valueKey]&&n[e.valueKey]&&t[e.valueKey]!==n[e.valueKey]&&(o||(o={key:e.valueKey,oldValue:n[e.valueKey],newValue:t[e.valueKey],riskCode:a.riskInfo.riskCode}))})),e&&i("trialChange",JSON.parse(e),o)}),{deep:!0,immediate:!0}),(i,l)=>{const a=b,t=f;return o(!0),s(y,null,F(c(ve),(i=>(o(),s(y,null,[c(ee)(e.originData,i.configKey)&&(1===e.riskInfo.mainRiskFlag||i.ruleKey&&2===c(ee)(e.originData,i.ruleKey)||!i.ruleKey)?(o(),s("div",{key:e.riskInfo.riskCode+"_"+i.name},["checkbox"===i.type?(o(),m(t,{key:0,modelValue:V.value[i.valueKey],"onUpdate:modelValue":e=>V.value[i.valueKey]=e,label:i.name,name:i.valueKey,class:"risk-select-field"},{input:u((()=>[d("div",di,[r(a,{modelValue:V.value[i.valueKey],"onUpdate:modelValue":[e=>V.value[i.valueKey]=e,e=>((e,i)=>{console.log("-------change",e,i)})(e,i.valueKey)],options:h(i.configKey)},null,8,["modelValue","onUpdate:modelValue","options"])])])),_:2},1032,["modelValue","onUpdate:modelValue","label","name"])):v("",!0)])):v("",!0)],64)))),256)}}}),[["__scopeId","data-v-15c494f0"]]);const pi={class:"com-risk-liabilityinfo"},vi={class:"item-wrap"},yi={key:0},fi=(e=>(z("data-v-68f76c44"),e=e(),G(),e))((()=>d("div",{class:"cell-content"},null,-1))),bi=e({name:"riskLiabilityInfo"});var Vi=V(e({...bi,props:{dataSource:{default:()=>({})},modelValue:{default:()=>({})},dataSourceFolmulate:{default:()=>({})},params:{default:()=>({amountUnit:"",basicsAmount:"",basicsPremium:"",riskId:""})},defaultValue:{default:()=>({})}},emits:["trialChange"],setup(e,{emit:i}){const p=e,V=l({formInfo:p.dataSource,isCheckList:[],checkValueList:[],liabilityList:[],signLiabilityClick:[]}),h=(e,i)=>{console.log("---click ",e,i),V.value.signLiabilityClick.push({item:e,index:i})},g=(e,i)=>{const{riskLiabilityInfoVOList:l,riskLiabilityCollocationVOList:a}=p.dataSource,t=l[e].liabilityId,n=(a||[]).find((e=>e.relatedLiabilityId===t||e.collocationLiabilityId===t))||{};let o=null;n.collocationLiabilityId===t?(o=n.relatedLiabilityId,n.collocationType===ye.YI_LAI&&(o=n.collocationLiabilityId)):o=n.collocationLiabilityId;const s=l.findIndex((e=>e.liabilityId===o));((e,i,l)=>{V.value.isCheckList[e]===`${X.YES}`?l===ye.BANG_DING||l===ye.YI_LAI?V.value.isCheckList[i]="1":V.value.isCheckList[i]="2":l===ye.BANG_DING?V.value.isCheckList[i]="2":l===ye.YI_LAI&&(V.value.isCheckList[i]=e!==i?"3":"2")})(e,s,n.collocationType),i(l[s],s,!0)},k=(e,i,l)=>{const a=V.value.liabilityList.map((e=>e.key)),t=0===(null==e?void 0:e.liabilityAttributeValueList.length)&&0===(null==e?void 0:e.formula.length),n=V.value.isCheckList[i];t&&-1===a.indexOf(i)&&n&&V.value.liabilityList.push({liabilityValue:e,key:i,isSwitchOn:V.value.isCheckList[i]}),"1"===n?h(e,i):V.value.signLiabilityClick.splice(i,1),-1!==a.indexOf(i)&&V.value.liabilityList.forEach((e=>{e.key===i&&(e.isSwitchOn=V.value.isCheckList[i])})),l||g(i,k)},O=(e,i)=>{const l=e.liabilityAttributeValueList.filter((e=>e.displayValue===V.value.checkValueList[i])),a=JSON.parse(JSON.stringify(l))[0]||e.liabilityAttributeValueList[0],t={...e,liabilityValue:a};V.value.liabilityList.length>0&&Object.keys(V.value.checkValueList).indexOf(i)&&(V.value.liabilityList=V.value.liabilityList.filter((e=>e.key!==i))),V.value.checkValueList[i]=a.displayValue,V.value.liabilityList.push({liabilityValue:t,key:i,isSwitchOn:"1"})},L=a((()=>te(p.dataSourceFolmulate))),I=(e,i,l)=>{1===l?V.value.liabilityList.push({liabilityValue:{...e,liabilityValue:null==e?void 0:e.liabilityAttributeValueList[0]},key:i,isSwitchOn:"1"}):V.value.liabilityList.push({liabilityValue:{...e,liabilityValue:null==e?void 0:e.liabilityAttributeValueList[0]},key:i,isSwitchOn:"2"})};n((()=>L.value),((e,i)=>{var l,a;const t=null==(l=p.dataSourceFolmulate)?void 0:l.initialAmount,n=null==(a=p.dataSourceFolmulate)?void 0:a.initialPremium,o={amountUnit:p.params.amountUnit,basicsAmount:t,basicsPremium:n,riskId:p.params.riskId};p.dataSource.riskLiabilityInfoVOList.map((async l=>{if(l.formula.length>0&&(t||n)&&((null==e?void 0:e.initialAmount)!==(null==i?void 0:i.initialAmount)||(null==e?void 0:e.initialPremium)!==(null==i?void 0:i.initialPremium))){const{code:e,data:i}=await oe({...o,riskLiabilities:[l]});if("10000"===e){if(l.liabilityAttributeValueList=i[0].formulaResult,V.value.signLiabilityClick.length>0){const e=V.value.signLiabilityClick.find((e=>e.item.liabilityCode===l.liabilityCode));e&&O(e.item,e.index)}return{...l,liabilityAttributeValueList:i[0]}}return l}}))}),{deep:!0,immediate:!0}),n((()=>V.value.liabilityList),(e=>{const l=V.value.liabilityList.filter((e=>"1"===e.isSwitchOn)).map((e=>({...e.liabilityValue})));i("trialChange",l)}),{deep:!0,immediate:!0}),t((()=>{console.log("----mounted"),p.dataSource.riskLiabilityInfoVOList.map(((e,i)=>{const l=e.liabilityAttributeValueList.length>0&&0===e.formula.length&&e.liabilityAttributeValueList[0].displayValue;return V.value.checkValueList[i]||(V.value.checkValueList[i]=l),1!=+e.showFlag&&V.value.liabilityList.push({liabilityValue:e,key:i,isSwitchOn:"1"}),1==+e.showFlag&&(1===e.attributeFlag&&2===e.insureFlag&&0===e.formula.length&&I(e,i,1),1===e.attributeFlag&&1===e.insureFlag&&0===e.formula.length&&I(e,i,2),2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&2===e.insureFlag&&I(e,i,1),2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&1===e.insureFlag&&I(e,i,2)),null}))}));const C=l([]);return n((()=>p.dataSource.riskLiabilityInfoVOList),(e=>{C.value=(e||[]).map((e=>{const i=(p.dataSource.riskLiabilityCollocationVOList||[]).find((i=>i.collocationLiabilityId===e.liabilityId));return{...e,relation:null==i?void 0:i.collocationType}}))}),{deep:!0,immediate:!0}),n((()=>p.defaultValue),(e=>{(null==e?void 0:e.riskCode)&&e.liabilityList&&(V.value.signLiabilityClick=[],p.dataSource.riskLiabilityInfoVOList.forEach(((i,l)=>{var a;const t=null==e?void 0:e.liabilityList.find((e=>e.liabilityCode===i.liabilityCode));console.log("--target lia = ",t),t&&(V.value.isCheckList[l]="1",V.value.checkValueList[l]=null==(a=null==t?void 0:t.liabilityValue)?void 0:a.displayValue,1==+i.showFlag&&2==+i.optionalFlag?k(i,l):h(i,l))})))}),{deep:!0,immediate:!0}),(e,i)=>{const l=Q,a=f,t=W;return o(),m(t,null,{default:u((()=>[d("div",pi,[d("div",vi,[(o(!0),s(y,null,F(c(C),((e,i)=>(o(),s("div",{key:i},[1!=+e.showFlag||2===e.attributeFlag&&1===(null==e?void 0:e.liabilityAttributeValueList.length)&&2===e.insureFlag?v("",!0):(o(),s("div",yi,[(c(V).isCheckList[i]?"3"!==c(V).isCheckList[i]:e.relation!==c(ye).YI_LAI)?(o(),m(a,{key:0,label:`${e.liabilityName}`,"label-width":"44%",name:"insuredRelation",class:"riskliab-select-field"},{input:u((()=>[1==+e.insureFlag?(o(),m(l,{key:0,modelValue:c(V).isCheckList[i],"onUpdate:modelValue":e=>c(V).isCheckList[i]=e,"active-value":"1","inactive-value":"2",size:"0.68rem",onClick:l=>k(e,i)},null,8,["modelValue","onUpdate:modelValue","onClick"])):v("",!0)])),_:2},1032,["label"])):v("",!0),1==+c(V).isCheckList[i]&&1===e.attributeFlag||1===e.attributeFlag&&2===e.insureFlag?(o(),m(a,{key:1,label:e.liabilityAttributeTypeDesc,"label-width":"44%",name:"insuredRelation",class:"riskliab-select-field-children"},{input:u((()=>[r(b,{modelValue:c(V).checkValueList[i],"onUpdate:modelValue":e=>c(V).checkValueList[i]=e,prop:{label:"displayValue",value:"displayValue"},options:(e.formula.length,e.liabilityAttributeValueList),"is-simply":!0,onClick:l=>O(e,i)},null,8,["modelValue","onUpdate:modelValue","options","onClick"])])),_:2},1032,["label"])):v("",!0)]))])))),128))])]),fi])),_:1})}}}),[["__scopeId","data-v-68f76c44"]]);export{Ne as B,mi as P,Vi as R,ui as a};
