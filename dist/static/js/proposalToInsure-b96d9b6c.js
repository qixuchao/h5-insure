import{d as a,aV as e,aW as s,i as t,h as o,j as r,l as i,o as d,c as n,b as l,w as u,u as c,y as p,aX as f}from"./index-8ec8a0d1.js";import{q as m,s as I}from"./trial-2fd7d078.js";import{u as v}from"./useOrder-7782478e.js";import{q as j}from"./createProposal-f678c09f.js";import"./utils-4606ad70.js";import"./trial-9975a486.js";import"./PolicyInfo-24664aac.js";import"./cloneDeep-63ca7d4a.js";const w=a({name:"proposalToInsure"}),y=a({...w,setup(a){const w=e((()=>s((()=>import("./index-3aa405dc.js")),["static/js/index-3aa405dc.js","static/css/index-755aef09.css","static/js/index-8ec8a0d1.js","static/css/index-c03012e3.css","static/js/product-45516752.js","static/js/useThread-637a02aa.js"]))),y=t(),L=o(),h=v(),q=r(),{proposalId:_,productCode:g,tenantId:x,proposalInsuredId:C}=y.query,O=r(),P=async()=>{_&&j({id:_,tenantId:x}).then((({code:a,data:e})=>{if("10000"===a){const{holder:a,insuredList:s}=e,t=(g||"").split(",");Object.assign(h.value,{renewFlag:"",holder:a,tenantId:x,proposalId:_,insuredList:(s||[]).filter((a=>a.id===+C)).map((a=>({...a,relationToHolder:null,productList:a.productList.filter((a=>t.includes(a.productCode)))})))}),(async()=>{h.value.extInfo&&(h.value.extInfo.iseeBizNo=O.value);const{code:a,data:e}=await I(h.value);"10000"===a&&(q.value=e)})()}}))},T=()=>{q.value&&L.push({path:p.questionNotice,query:{...y.query,orderNo:q.value}})};return i((()=>{_||(async()=>{var a;const{code:e,data:s}=await m({calcProductFactorList:[{productCode:g}]});"10000"===e&&Object.assign(h.value,s,{insuredList:[{...null==(a=s.insuredList)?void 0:a[0]}]})})(),P(),setTimeout((async()=>{O.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(a,e)=>{const s=f;return d(),n("div",null,[l(s,null,{default:u((()=>[l(c(w),{"product-detail":{insurerCode:"lianlife"},onClose:T})])),_:1})])}}});export{y as default};
