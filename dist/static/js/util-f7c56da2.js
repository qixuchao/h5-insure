import{bs as e}from"./index-404eec03.js";const t=t=>{e.set("thirdCustomerParams",t)},l=()=>e.get("thirdCustomerParams"),n=t=>{e.set("selectedCustomerData",t)},o=()=>e.get("selectedCustomerData"),r=(e,t)=>{var l,n;console.log("convertCustomerData",e);const o=null==(l=null==e?void 0:e.contactInfo)?void 0:l.find((e=>"01"===e.contactType)),r=null==(n=null==e?void 0:e.contactInfo)?void 0:n.find((e=>"02"===e.contactType)),a=(null==e?void 0:e.certInfo[0])||{},c={name:null==e?void 0:e.name,gender:null==e?void 0:e.gender,birthday:null==e?void 0:e.birthday,mobile:(null==o?void 0:o.contactNo)||null,email:(null==r?void 0:r.contactNo)||null,certNo:(null==a?void 0:a.certNo)||null,certType:(null==a?void 0:a.certType)||null,certStartDate:(null==a?void 0:a.certStart)||null,certEndDate:(null==a?void 0:a.certValidity)||null,certEndType:"9999-12-31"===(null==a?void 0:a.certValidity)?1:null},d=t.reduce(((e,t)=>(Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]),e)),{});return console.log("extractedObject===",d),d},a=(e,t)=>e.name===t.name&&e.gender===t.gender&&e.birthday===t.birthday&&e.certType===t.certType&&e.certNo===t.certNo;export{l as a,n as b,r as c,o as g,a as i,t as s};
