import{ad as e}from"./index-7bdfed5a.js";const a=a=>{e.set("thirdCustomerParams",a)},t=()=>e.get("thirdCustomerParams"),r=a=>{e.set("selectedCustomerData",a)},o=()=>e.get("selectedCustomerData"),n=()=>{e.remove("thirdCustomerParams"),e.remove("selectedCustomerData")},d=(e,a)=>({...e,addressInfo:e.addressInfo[a.addressIndex]||{},certInfo:e.certInfo[a.certIndex]||{},contactInfo:e.contactInfo[a.contactIndex]||{},bankCardInfo:e.bankCardInfo[a.bankIndex]||{}}),s=(e,a)=>{console.log("transformCustomerToPerson",e);const t=(null==e?void 0:e.contactInfo).contactNo||"",r=(null==e?void 0:e.certInfo)||{},o=e.addressInfo||{},n=e.bankCardInfo||{},d={...e,name:null==e?void 0:e.name,gender:null==e?void 0:e.gender,birthday:null==e?void 0:e.birthday,mobile:t,email:e.email||"",...r,certEndType:"9999-12-31"===(null==r?void 0:r.certEndDate)?1:null,longArea:{...o},workAddress:{...o},educationDegree:+e.educationDegree,initialBankCard:n},s=a.reduce(((e,a)=>(Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]),e)),{});return console.log("extractedObject===",s),s},c=(e,a)=>e.name===a.name&&e.gender===a.gender&&e.birthday===a.birthday&&e.certType===a.certType&&e.certNo===a.certNo,l=a=>{e.set("PERSONAL_PAGE_KEY",a)},i=()=>e.get("PERSONAL_PAGE_KEY"),m=()=>{e.remove("PERSONAL_PAGE_KEY")};export{l as a,i as b,n as c,m as d,a as e,t as f,o as g,d as h,c as i,r as s,s as t};
