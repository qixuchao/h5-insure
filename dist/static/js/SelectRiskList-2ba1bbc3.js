import{d as e,i as a,b2 as l,j as o,k as s,l as t,o as i,p as d,w as c,a as u,e as r,b as n,u as p,q as v,c as C,F as k,s as R,v as m,_ as f,T as y,z as h,b3 as b,b4 as I,A as L,au as T,b0 as _,b1 as w}from"./index-69aebc6c.js";import{d as S,e as g}from"./trial-a82aa561.js";import{R as V}from"./trial-16eeb70c.js";const K={class:"popup-container"},N={class:"popup-header"},j={class:"title"},q=(e=>(_("data-v-6241eb10"),e=e(),w(),e))((()=>u("p",{class:"tip"},"已为您挑选出以下险种",-1))),A={class:"search"},P={key:0,class:"risk-list"},E=e({name:"riskSelect"});var M=f(e({...E,props:{type:{default:2},show:{type:Boolean,default:!1},title:{},insuredList:{default:()=>[]},mainRiskCode:{default:""},selectList:{default:()=>[]},currentProductCode:{default:""},productClass:{default:""}},emits:["cancel","confirm"],setup(e,{emit:f}){const _=e,w=a(),{insurerCode:E}=w.query,M=l(),U=o([]),x=o([]),D=o([]),F=o(),$=s((()=>_.show)),z=()=>{f("cancel")},B=()=>{var e;if(!(null==(e=U.value)?void 0:e.length))return void y(`暂未添加任何${_.type===V.MAIN_RISK?"主":"附加"}险`);let a=[];a=_.type===V.RIDER_RISK?U.value:x.value.filter((e=>U.value.includes(e.productCode))).map((e=>({productCode:e.productCode,mergeRiskReqList:(e.mainRiskCollocationList||[]).map((e=>({riskCode:e.collocationRiskCode,riskType:e.mainRiskCode?2:1,mainRiskCode:e.mainRiskCode})))}))),f("confirm",a)},G=async()=>{var e;const a={insuredList:_.insuredList,mainRiskCode:_.mainRiskCode,insurerCode:E,productCategory:"",keyword:F.value,selectProductCodes:[],selectRiskCodes:[],filterFlag:(null==(e=_.selectList)?void 0:e.length)?1:2,productClass:_.productClass,branchType:M["branch-type"]};if(a.selectProductCodes=_.selectList.map((e=>(e.productCode===_.currentProductCode&&a.selectRiskCodes.push(...e.mergeRiskReqList.map((e=>e.riskCode))),e.productCode))),_.type===V.MAIN_RISK){const{code:e,data:l}=await S(a);"10000"===e&&(x.value=l)}else{const{code:e,data:l}=await g(a);"10000"===e&&(x.value=l.riskInfoList,D.value=l.collocationInfoResList)}};return t((()=>{G()})),(e,a)=>{const l=h,o=b,s=I,t=L,f=T;return i(),d(f,{show:p($),"onUpdate:show":a[2]||(a[2]=e=>v($)?$.value=e:null),class:"popup-risk-select",closeable:!1},{default:c((()=>{var f;return[u("div",K,[u("div",N,[u("span",{class:"clear-all",onClick:z}," 取消 "),u("span",j,r(e.title),1),u("span",{class:"close",onClick:B},"确认")]),q,u("div",A,[n(l,{modelValue:p(F),"onUpdate:modelValue":a[0]||(a[0]=e=>v(F)?F.value=e:null),placeholder:"请输入产品名称进行搜索",onSearch:G},null,8,["modelValue"])]),(null==(f=p(x))?void 0:f.length)?(i(),C("div",P,[n(s,{modelValue:p(U),"onUpdate:modelValue":a[1]||(a[1]=e=>v(U)?U.value=e:null)},{default:c((()=>[(i(!0),C(k,null,R(p(x),(e=>(i(),d(o,{key:e.riskCode||e.productCode,name:e.riskCode||e.productCode,onClick:()=>{return a=e.riskCode,_.type===V.RIDER_RISK&&(D.value||[]).forEach((e=>{U.value.includes(a)?a===e.relatedRiskCode?(2===e.collocationType&&U.value.push(e.collocationRiskCode),3===e.collocationType&&(U.value.push(a),U.value=U.value.filter((a=>a!==e.collocationRiskCode)))):a===e.collocationRiskCode&&(2===e.collocationType&&U.value.push(e.relatedRiskCode),3===e.collocationType&&(U.value=U.value.filter((a=>a!==e.relatedRiskCode)))):a===e.relatedRiskCode?(2===e.collocationType&&(U.value=U.value.filter((a=>a!==e.collocationRiskCode))),3===e.collocationType&&(U.value.push(a),U.value=U.value.filter((a=>a!==e.collocationRiskCode)))):a===e.collocationRiskCode&&(2===e.collocationType&&(U.value=U.value.filter((a=>a!==e.relatedRiskCode))),3===e.collocationType&&(U.value=U.value.filter((a=>a!==e.relatedRiskCode))))})),void(U.value=[...new Set(U.value)]);var a}},{default:c((()=>[m(r(e.riskName||e.productName),1)])),_:2},1032,["name","onClick"])))),128))])),_:1},8,["modelValue"])])):(i(),d(t,{key:1,title:`暂无关联${e.type===p(V).MAIN_RISK?"主":"附加"}险、请选择其他险种`},null,8,["title"]))])]})),_:1},8,["show"])}}}),[["__scopeId","data-v-6241eb10"]]);export{M as default};
