const t=u=>{const r=u.split("_");return r[0]==="day"?`\u6EE1${r[1]}\u5929`:`${r[1]}\u5468\u5C81`},E=u=>{if(!u)return"";const r=u.split(",");return r.length===1?t(r[0]):`${t(r[0])} ~ ${t(r[1])}`},n=u=>{if(!u)return"";if(u==="single")return"\u8DB8\u7F34";const r=u.split("_");return r[0]==="year"?`${r[1]}\u5E74`:r[0]==="month"?`${r[1]}\u6708`:r[0]==="to"?r[1]==="life"?"\u4FDD\u7EC8\u8EAB":`\u81F3${r[1]}\u5C81`:""},s=u=>u?u.split(",").map(r=>n(r)).join("/"):"",a=u=>{if(!u)return"";switch(u){case"-1":return"\u65E0\u9650\u5236";case"1":return"\u7537";case"2":return"\u5973";default:return""}},i=u=>({1:"\u804C\u4E1A\u7B49\u7EA7\u4E00",2:"\u804C\u4E1A\u7B49\u7EA7\u4E8C",3:"\u804C\u4E1A\u7B49\u7EA7\u4E09",4:"\u804C\u4E1A\u7B49\u7EA7\u56DB",5:"\u804C\u4E1A\u7B49\u7EA7\u4E94",6:"\u804C\u4E1A\u7B49\u7EA7\u516D",7:"\u804C\u4E1A\u7B49\u7EA7\u4E03",8:"\u804C\u4E1A\u7B49\u7EA7\u516B",9:"\u804C\u4E1A\u7B49\u7EA7\u4E5D"})[u]||"",o=u=>u?u==="-1"?"\u65E0\u9650\u5236":u.split(",").map(e=>i(e)).join("\u3001"):"",f=u=>{if(!u)return"";switch(u){case"-1":return"\u65E0\u9650\u5236";case"1":return"\u6709";case"2":return"\u65E0";default:return""}};export{s as a,a as b,f as c,o as d,E as f};
