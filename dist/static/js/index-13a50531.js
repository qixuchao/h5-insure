import{v as r,d as e,j as t,b as i,F as n,H as a}from"./index-af98f288.js";const[o,l]=r("space"),s={align:String,direction:{type:String,default:"horizontal"},size:{type:[Number,String,Array],default:8},wrap:Boolean,fill:Boolean};function p(r=[]){const e=[];return r.forEach((r=>{Array.isArray(r)?e.push(...r):r.type===n?e.push(...p(r.children)):e.push(r)})),e.filter((r=>{var e;return!(r&&("undefined"!=typeof Comment&&r.type===Comment||r.type===n&&0===(null==(e=r.children)?void 0:e.length)||r.type===Text&&""===r.children.trim()))}))}const c=a(e({name:o,props:s,setup(r,{slots:e}){const n=t((()=>{var e;return null!=(e=r.align)?e:"horizontal"===r.direction?"center":""})),a=r=>"number"==typeof r?r+"px":r,s=e=>{const t={},i=`${a(Array.isArray(r.size)?r.size[0]:r.size)}`,n=`${a(Array.isArray(r.size)?r.size[1]:r.size)}`;return e?r.wrap?{marginBottom:n}:{}:("horizontal"===r.direction&&(t.marginRight=i),("vertical"===r.direction||r.wrap)&&(t.marginBottom=n),t)};return()=>{var t;const a=p(null==(t=e.default)?void 0:t.call(e));return i("div",{class:[l({[r.direction]:r.direction,[`align-${n.value}`]:n.value,wrap:r.wrap,fill:r.fill})]},[a.map(((r,e)=>i("div",{key:`item-${e}`,class:`${o}-item`,style:s(e===a.length-1)},[r])))])}}}));export{c as S};
