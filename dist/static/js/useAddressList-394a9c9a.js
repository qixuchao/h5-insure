import{c as o}from"./product-c7f5c4f8.js";import{o as a}from"./index-f73a594c.js";const c=(c,t,n)=>{a((()=>{(async()=>{try{const{code:a,data:n}=await o(c);if("10000"===a){const o={};n.forEach((a=>{o[a.relationCode]||(o[a.relationCode]=[]),o[a.relationCode].push(a)})),null==t||t(o)}}catch(a){console.log(a),null==n||n(!1)}})()}))};export{c as u};
