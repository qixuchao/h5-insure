import{ag as e}from"./index-33bf4ed5.js";const t=t=>{e.set("thirdCustomerParams",t)},a=()=>e.get("thirdCustomerParams"),r=t=>{e.set("selectedCustomerData",t)},o=()=>e.get("selectedCustomerData"),n=()=>{e.remove("thirdCustomerParams"),e.remove("selectedCustomerData")},d=(e,t)=>({...e,addressInfo:e.addressInfo[t.addressIndex]||{},certInfo:e.certInfo[t.certIndex]||{},contactInfo:e.contactInfo[t.contactIndex]||{},bankCardInfo:e.bankCardInfo[t.bankIndex]||{}}),s=(e,t)=>{console.log("transformCustomerToPerson",e);const a=(null==e?void 0:e.contactInfo).contactNo||"",r=(null==e?void 0:e.certInfo)||{},o=e.addressInfo||{},n=e.bankCardInfo||{},d={...e,name:null==e?void 0:e.name,gender:null==e?void 0:e.gender,birthday:null==e?void 0:e.birthday,mobile:a,email:e.email||"",...r,certEndType:"9999-12-31"===(null==r?void 0:r.certEndDate)?1:null,longArea:{...o},workAddress:{...o},educationDegree:+e.educationDegree,initialBankCard:n},s=t.reduce(((e,t)=>(Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]),e)),{});return console.log("extractedObject===",s),s},c=(e,t)=>e.name===t.name&&e.gender===t.gender&&e.birthday===t.birthday&&e.certType===t.certType&&e.certNo===t.certNo,l=t=>{e.set("PERSONAL_PAGE_KEY",t)},i=()=>e.get("PERSONAL_PAGE_KEY"),m=()=>{e.remove("PERSONAL_PAGE_KEY")};export{i as a,n as b,m as c,t as d,a as e,d as f,o as g,r as h,c as i,l as s,s as t};
