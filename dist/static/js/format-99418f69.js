const o=t=>t?String(t).replace(/\B(?=(\d{3})+$)/g,","):"",a=t=>{const r=t,[n,u]=r.split("_"),e={year:"\u5E74",month:"\u6708",day:"\u5929",to:"\u5C81"};return r==="to_life"?"\u4FDD\u7EC8\u751F":`${u}${e[n]}`},s=t=>{const r=t,[n,u]=r.split("_"),e={year:"\u5E74\u4EA4",month:"\u6708\u4EA4",day:"\u5929",to:"\u5C81"};return r==="single"?"\u8DB8\u7F34":e[n]==="to"?`\u4EA4\u81F3${u}\u5C81`:`${u}${e[n]}`},c=(t="")=>t.replace(/(\d{3})\d*(\d{4})/,"$1***$2");export{a,s as b,c,o as t};
