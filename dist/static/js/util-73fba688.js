import{ag as e}from"./index-7888b407.js";const t=t=>{e.set("thirdCustomerParams",t)},a=()=>e.get("thirdCustomerParams"),r=t=>{e.set("selectedCustomerData",t)},o=()=>e.get("selectedCustomerData"),n=()=>{e.remove("thirdCustomerParams"),e.remove("selectedCustomerData")},s=(e,t)=>({...e,addressInfo:e.addressInfo[t.addressIndex]||{},certInfo:e.certInfo[t.certIndex]||{},contactInfo:e.contactInfo[t.contactIndex]||{},bankCardInfo:e.bankCardInfo[t.bankIndex]||{}}),d=(e,t)=>{console.log("transformCustomerToPerson",e);const a=(null==e?void 0:e.contactInfo).contactNo||"",r=(null==e?void 0:e.certInfo)||{},o=e.addressInfo||{},n=e.bankCardInfo||{},s={...e,name:null==e?void 0:e.name,gender:null==e?void 0:e.gender,birthday:null==e?void 0:e.birthday,mobile:a,email:e.email||"",...r,certEndType:"9999-12-31"===(null==r?void 0:r.certEndDate)?1:null,longArea:{...o},workAddress:{...o},educationDegree:+e.educationDegree,initialBankCard:n},d=t.reduce(((e,t)=>(Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]),e)),{});return console.log("extractedObject===",d),d},c=(e,t)=>e.name===t.name&&e.gender===t.gender&&e.birthday===t.birthday&&e.certType===t.certType&&e.certNo===t.certNo,l=t=>{e.set("PERSONAL_PAGE_KEY",t)},i=()=>e.get("PERSONAL_PAGE_KEY"),m=()=>{e.remove("PERSONAL_PAGE_KEY")};export{i as a,n as b,m as c,t as d,a as e,s as f,o as g,r as h,c as i,l as s,d as t};
