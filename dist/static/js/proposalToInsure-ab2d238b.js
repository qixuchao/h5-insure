import{d as e,aV as a,aW as s,i as t,h as o,j as r,l as i,o as d,c as n,b as l,w as u,u as c,y as p,aX as f}from"./index-ac3e839b.js";import{q as m,s as I}from"./trial-d5e23067.js";import{u as v}from"./useOrder-aa558f9f.js";import{q as j}from"./createProposal-c39df60e.js";import"./utils-dcba434e.js";import"./trial-1a573e4a.js";import"./PolicyInfo-f09aea65.js";import"./cloneDeep-b387639e.js";const w=e({name:"proposalToInsure"}),y=e({...w,setup(e){const w=a((()=>s((()=>import("./index-927fc6d7.js")),["static/js/index-927fc6d7.js","static/css/index-3515e551.css","static/js/index-ac3e839b.js","static/css/index-0e0d41bb.css","static/js/product-54ab95fa.js","static/js/useThread-637a02aa.js"]))),y=t(),L=o(),b=v(),h=r(),{proposalId:q,productCode:_,tenantId:g,proposalInsuredId:x}=y.query,C=r(),O=async()=>{q&&j({id:q,tenantId:g}).then((({code:e,data:a})=>{if("10000"===e){const{holder:e,insuredList:s}=a,t=(_||"").split(",");Object.assign(b.value,{renewFlag:"",holder:e,tenantId:g,proposalId:q,insuredList:(s||[]).filter((e=>e.id===+x)).map((e=>({...e,relationToHolder:null,productList:e.productList.filter((e=>t.includes(e.productCode)))})))}),(async()=>{b.value.extInfo&&(b.value.extInfo.iseeBizNo=C.value);const{code:e,data:a}=await I(b.value);"10000"===e&&(h.value=a)})()}}))},P=()=>{h.value&&L.push({path:p.questionNotice,query:{...y.query,orderNo:h.value}})};return i((()=>{q||(async()=>{var e;const{code:a,data:s}=await m({calcProductFactorList:[{productCode:_}]});"10000"===a&&Object.assign(b.value,s,{insuredList:[{...null==(e=s.insuredList)?void 0:e[0]}]})})(),O(),setTimeout((async()=>{C.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(e,a)=>{const s=f;return d(),n("div",null,[l(s,null,{default:u((()=>[l(c(w),{"product-detail":{insurerCode:"lianlife"},onClose:P})])),_:1})])}}});export{y as default};
