const u=t=>typeof t=="object"?Object.keys(t).map(n=>`${encodeURIComponent(n)}=${encodeURIComponent(t[n])}`).join("&"):"",s=t=>{const n=t,[e,o]=n.split("_"),r={year:"\u5E74",month:"\u6708",day:"\u5929",to:"\u5C81"};return n==="to_life"?"\u4FDD\u7EC8\u751F":`${o}${r[e]}`},c=t=>{const n=t,[e,o]=n.split("_"),r={year:"\u5E74\u4EA4",month:"\u6708\u4EA4",day:"\u5929",to:"\u5C81"};return n==="single"?"\u8DB8\u7F34":r[e]==="to"?`\u4EA4\u81F3${o}\u5C81`:`${o}${r[e]}`},a=(t="")=>t.replace(/(\d{3})\d*(\d{4})/,"$1***$2");export{c as a,a as b,s as c,u as f};
