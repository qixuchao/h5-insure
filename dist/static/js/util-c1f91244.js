import{ag as e}from"./index-8ccea0ec.js";const a=a=>{e.set("thirdCustomerParams",a)},t=()=>e.get("thirdCustomerParams"),r=a=>{e.set("selectedCustomerData",a)},o=()=>e.get("selectedCustomerData"),n=()=>{e.remove("thirdCustomerParams"),e.remove("selectedCustomerData")},s=(e,a)=>({...e,addressInfo:e.addressInfo[a.addressIndex]||{},certInfo:e.certInfo[a.certIndex]||{},contactInfo:e.contactInfo[a.contactIndex]||{},bankCardInfo:e.bankCardInfo[a.bankIndex]||{}}),d=(e,a)=>{console.log("transformCustomerToPerson",e);const t=(null==e?void 0:e.contactInfo).contactNo||"",r=(null==e?void 0:e.certInfo)||{},o=e.addressInfo||{},n=e.bankCardInfo||{},s={...e,name:null==e?void 0:e.name,gender:null==e?void 0:e.gender,birthday:null==e?void 0:e.birthday,mobile:t,email:e.email||"",...r,certEndType:"9999-12-31"===(null==r?void 0:r.certEndDate)?1:null,longArea:{...o},workAddress:{...o},educationDegree:+e.educationDegree,initialBankCard:n},d=a.reduce(((e,a)=>(Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]),e)),{});return console.log("extractedObject===",d),d},c=(e,a)=>e.name===a.name&&e.gender===a.gender&&e.birthday===a.birthday&&e.certType===a.certType&&e.certNo===a.certNo,l=a=>{e.set("PERSONAL_PAGE_KEY",a)},i=()=>e.get("PERSONAL_PAGE_KEY"),m=()=>{e.remove("PERSONAL_PAGE_KEY")};export{i as a,n as b,m as c,a as d,t as e,s as f,o as g,r as h,c as i,l as s,d as t};
