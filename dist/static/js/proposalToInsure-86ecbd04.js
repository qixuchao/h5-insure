import{d as a,ay as e,az as s,i as t,h as o,j as r,l as i,o as d,c as n,b as l,w as u,u as c,y as p,aA as f}from"./index-6f140aae.js";import{q as m,s as I}from"./trial-3b0f4203.js";import{u as v}from"./useOrder-716db41f.js";import{q as j}from"./createProposal-e5bc9555.js";import"./utils-78ba64d2.js";import"./trial-51ef4e1a.js";import"./PolicyInfo-a18ba950.js";const y=a({name:"proposalToInsure"}),b=a({...y,setup(a){const y=e((()=>s((()=>import("./index-701b7405.js")),["static/js/index-701b7405.js","static/css/index-3515e551.css","static/js/index-6f140aae.js","static/css/index-3d6d86a8.css","static/js/product-a56a629d.js","static/js/useThread-637a02aa.js"]))),b=t(),w=o(),L=v(),h=r(),{proposalId:q,productCode:_,tenantId:g,proposalInsuredId:x}=b.query,C=r(),z=async()=>{q&&j({id:q,tenantId:g}).then((({code:a,data:e})=>{if("10000"===a){const{holder:a,insuredList:s}=e,t=(_||"").split(",");Object.assign(L.value,{renewFlag:"",holder:a,tenantId:g,proposalId:q,insuredList:(s||[]).filter((a=>a.id===+x)).map((a=>({...a,relationToHolder:null,productList:a.productList.filter((a=>t.includes(a.productCode)))})))}),(async()=>{L.value.extInfo&&(L.value.extInfo.iseeBizNo=C.value);const{code:a,data:e}=await I(L.value);"10000"===a&&(h.value=e)})()}}))},O=()=>{h.value&&w.push({path:p.questionNotice,query:{...b.query,orderNo:h.value}})};return i((()=>{q||(async()=>{var a;const{code:e,data:s}=await m({calcProductFactorList:[{productCode:_}]});"10000"===e&&Object.assign(L.value,s,{insuredList:[{...null==(a=s.insuredList)?void 0:a[0]}]})})(),z(),setTimeout((async()=>{C.value=window.getIseeBiz&&await window.getIseeBiz()}),1500)})),(a,e)=>{const s=f;return d(),n("div",null,[l(s,null,{default:u((()=>[l(c(y),{"product-detail":{insurerCode:"lianlife"},onClose:O})])),_:1})])}}});export{b as default};
