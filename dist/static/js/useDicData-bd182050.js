import{g as i}from"./index-f8850897.js";import{C as o}from"./vendor-afffae61.js";const s={},A=["CERT_TYPE","GENDER","MARRIAGE_STATUS","DEGREE","NATIONALITY","NATIONAL_REGION_CODE","HAS_SOCIAL_INSURANCE","WORK_STATUS","RISK_PAYMENT_PERIOD","RISK_INSURANCE_PERIOD"],D=async E=>{const I=o(s[E]||[]);if(I.value.length===0){A.push(E);const{code:e,data:a}=await i({dictCodeList:[...new Set(A)]});e==="10000"&&a.forEach(t=>{t.dictCode===E&&(I.value=t.dictItemList),s[t.dictCode]=t.dictItemList})}return I};export{D as u};
