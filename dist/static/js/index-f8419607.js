import{g as j,a0 as P,Q as R,C as x,x as N,a9 as Y,k as t,m as s,y as a,z as h,s as i,I as n,F as I,E as S,A as K,a1 as Z,n as y,D as X,r as J,M as $,h as M,j as E,B as U}from"./vendor-e9263418.js";import{b as W,v as G,p as ee}from"./record-2e0ec2a3.js";import{r as te,s as se}from"./record-dffa77ad.js";import{Z as F}from"./play-93cba0e9.js";import{_ as ae}from"./plugin-vue_export-helper-46f75680.js";import{_ as oe}from"./index-e4c11be9.js";import"./index-b8742a0a.js";import"./jsbridge-7ca0f033.js";var ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA8CAMAAADv/jI5AAAAmVBMVEUAAADg4ODf39/f39/e3t7f39/r6+ve3t7f39/g4ODe3t7f39/f39/f39/m5ubf39/f39/g4ODf39/h4eHk5OTp6enf39/f39/i4uLj4+Pi4uLe3t7f39/h4eHf39/g4ODh4eHi4uLo6Oj////e3t7f39/g4ODg4ODf39/f39/e3t7////o6Oj8/Pzf39/j4+Py8vL09PTl5eX3ZdHVAAAAKnRSTlMAH/ZG8sAH++Zy697QmQ/YiYR+QhILxpI0LiPzzRmwTDsrFgWMgWtjYVg8QyoHAAABuklEQVRIx6XV53KrMBCG4TW92KYYXNNz6odbcv8Xd5jjJAsCCZa8/2DmGc0skiDOtqB0doLk4cfvPQ21YqoWLFZG+mTBVJwvtXQWYSAn02jvDsMFf3vtAqN6KLt0dca45jOVljHGFj0p9ifG5/9p0cKBoPNj06YQddgxXVqQFRdf9hekua+fdg5x6QfdQZ7/fLN5Z5CXMzDw0r1ZF+0up+p0VOmxfnlBo9X/Kftod63qjgqt6q6dhW0ovVWMmda9odm2tqFq3yvGTOve0WzTe/qOjDvPXPTKo9LhLuVpJdBjE0VGFMCADRRrIgcmrKewiAATZtrNI8eIT3qKggKYsIHinhLout7oFVrrTl53Rgs9ZayxoXjObG3x92Vb+tJ9xZbW4v3MNhOfI7Y78fllS3PxvcE2FN9XbAtHek+ypVR8P7N9sdCq/78A9FnKIY2tF0+3ZH/D0uYb1rubbmkfTbe0taZbsn25ZSxb2VpSo20koNGWWu3HT3u+JyVvM5JuPOpmxxgufqTevNyCOSv3SNdL6hikk96TqSKc60YULmmwXbb2Feevs2caWWmHCzcJDjgEibsI7ZKU/gGInNZ5xesF9QAAAABJRU5ErkJggg==",ie="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAnCAMAAACylgF9AAABfVBMVEUAAADdvZjfwJ3bt5LixaH54cj25M324svz3sbfwJzcu5TatY3v1rT//9Dw2b7gwZ7q0LPbuZPYto/bvJfWtIvauZPYt4/x3cP35c/mzK32483u17z35c735c7w2r/dvJndvpvbupT55dHgv5z/4sz////35M/kyangwp/hw6Hp0bT35s/oza7u2L3s1LfgwqDoza/XtIzWs4vq0bTkx6fUsojixKLq07f45M/kyKfy3sTmyqzixqL14srw3MHs1bnw2r/myqv35s/ny6r248rcuJHx2bz65tHw2sPt0bb06cj////04MjhxKLlyanu17zy3cPmy6vjx6fcvZjixaTz3sXgwZ7nzK3ev5z14svgwqDw28Hw2sDq0rXp0LLs1Ljr1LfozrHkyKjnza/t1rrZuJLjxqXbupTYto/ewJzv2cDozq/evpvbu5fv2L716Nn2483dvZn37eHq0rbpz7HWtIz8+PPy4tH47+T16t7z5NPy38n79vHv3svt3McQeoySAAAAS3RSTlMA+EoxKQrm2cRiPhsUBfv7+Pj08u/r5OLOxLStf29fVUM5JiQRA/n48u7t6enj4t/d3dnTzr+6ubaqoKCXlIyHe3lkVFJINTIiHBf7MAmGAAAB4klEQVQ4y33QB1PiQBTA8QfSzrOenu3Us17vvfeOOTggHhg0WYo5AjFGRSynn92XJZtdJobfvJls3vwnhIBgYWZqInbt9sSL6e9wruVP8W1U2C44YtNR8PkSL3SKzSxDh/63K35TSyBYStClvCLj8Ci+IDwlIfuk5XRaHv8FzKt0kAR781kFFZUijnJsHVrHCvcOqOh40WUoB0nHgeHeF42BH7T5sJXaSlHGfrJt30jhku6v0OZuitlJMjvebqAPk28VSq2oRpIzKi51Fpv3KnMkNEcq0lRNU50fe64xltBYu9ouDm7vYfN4nWkJTcvbDmFza4OpCI224cGXHiKkTuo4hBzy/0X2yB4OQT8BHpSpehm7/+z7kLKn3g8w+ZcjlvsUYXcHAF7/Ea2ftE5Jx2YSm8+/u/uITfR6KVPK4JQc7Mx3EUAvM47NzCaFBxx+fQKOSM4h5SScnE8YqDdSsGfQ1nd/jZPWJBx2d3MRXJEbq+cbnANPeLCWr+VxavSK6Hn1AgjCoYbdaOQbeRx6pRkmormQbdtZOyuiiah3xDSzplCEroLP/Ihu6iaOTvFE1HO5ivSqjlMdDgMERMzwVwgQGfvXdqkXAi2O8STQxYfNZnN0HqBr9Kg52gOoa/TUn5wBSmotbKr9m/0AAAAASUVORK5CYII=";const ne={class:"comp comp-visit-card"},de=["src"],ue={key:0,class:"card-dl"},re={key:0,class:"card-dt"},le={key:1,class:"card-dd"},ve={key:2,class:"voice-list"},me=["onClick"],fe={class:"duration"},Ae={key:1,class:"card-dl"},ge={key:0,class:"card-dt"},he={key:1,class:"card-dd"},ye={key:2,class:"voice-list"},pe=["onClick"],be={class:"duration"},ke={key:0,class:"visit-address"},_e=["src"],Ie={class:"bg-span"},Te=j({props:{data:{type:Object,default:()=>{}},info:{type:Object,default:()=>({agentCustomerId:"",customerType:"",customerName:""})}},emits:["onDeleteSuccess"],setup(e,{emit:A}){const o=e,p=P(),b=R(),c=x(-1),{agentCustomerId:k,customerType:T,customerName:D}=b.query,_=N(()=>o.data.dataSource!=="push"),r=N(()=>`${o.data.visitAddress?o.data.visitAddress.replace(/#/g,""):""} ${o.data.visitAddressDetail?o.data.visitAddressDetail.replace(/#/g,""):""}`),l=()=>{X.confirm({title:"\u786E\u8BA4\u5220\u9664\u8BE5\u8BB0\u5F55\u5417\uFF1F"}).then(()=>{te({visitId:o.data.visitId}).then(()=>{A("onDeleteSuccess")}).catch(f=>{console.log(f)})})},v=(f,g)=>{c.value===g?(G(),c.value=-1):(ee(f,()=>{c.value=-1}),c.value=g)};Y(()=>{W()});const m=()=>{_.value&&p.push(`/record/${o.data.visitId}?agentCustomerId=${k}&customerType=${T}&customerName=${D}`)};return(f,g)=>{var C,O,V,B,z,H,q,w,L;return t(),s(I,null,[a("div",ne,[h(_)?(t(),s("div",{key:0,class:"visit-card-header",onClick:l},[a("img",{class:"delete-icon",src:h(ce)},null,8,de)])):i("",!0),a("div",{class:"visit-card-container",onClick:m},[a("h3",null,n(e.data.visitType),1),e.data.feedback||e.data.feedbackInputText||((O=(C=e.data)==null?void 0:C.feedbackInputVoice)==null?void 0:O.length)>0?(t(),s("dl",ue,[e.data.feedback?(t(),s("dt",re,n(e.data.feedback),1)):i("",!0),e.data.feedbackInputText?(t(),s("dd",le,n(e.data.feedbackInputText),1)):i("",!0),((B=(V=e.data)==null?void 0:V.feedbackInputVoice)==null?void 0:B.length)>0?(t(),s("dd",ve,[(t(!0),s(I,null,S(e.data.feedbackInputVoice,(d,u)=>(t(),s("div",{key:u,class:"voice-item"},[a("div",{class:"voice",style:K({width:`${d.voiceDuration/60*100}%`}),onClick:Z(Q=>v(d.voiceUrl,u),["stop"])},[y(F,{class:"voice-icon",play:c.value===u},null,8,["play"]),a("div",fe,n(d.voiceDuration)+'"',1)],12,me)]))),128))])):i("",!0)])):i("",!0),e.data.result||e.data.resultInputText||((H=(z=e.data)==null?void 0:z.resultInputVoice)==null?void 0:H.length)>0?(t(),s("dl",Ae,[e.data.result?(t(),s("dt",ge,n(e.data.result),1)):i("",!0),e.data.resultInputText?(t(),s("dd",he,n(e.data.resultInputText),1)):i("",!0),((w=(q=e.data)==null?void 0:q.resultInputVoice)==null?void 0:w.length)>0?(t(),s("dd",ye,[(t(!0),s(I,null,S(e.data.resultInputVoice,(d,u)=>(t(),s("div",{key:u,class:"voice-item"},[a("div",{class:"voice",style:K({width:`${d.voiceDuration/60*100}%`}),onClick:Z(Q=>v(d.voiceUrl,u+10),["stop"])},[y(F,{class:"voice-icon",play:c.value===u+10},null,8,["play"]),a("div",be,n(d.voiceDuration)+'"',1)],12,pe)]))),128))])):i("",!0)])):i("",!0)])]),((L=h(r))==null?void 0:L.trim())?(t(),s("div",ke,[a("img",{src:h(ie),class:"bg-host-class"},null,8,_e),a("span",Ie,n(h(r)),1)])):i("",!0)],64)}}});var De=ae(Te,[["__scopeId","data-v-5120407d"]]);const xe={class:"comp comp-visit-record-item"},Se={class:"visit-time"},je={class:"time-left"},Ce={class:"time-right"},Oe={class:"visit-content"},Ve=j({props:{visitData:{type:Object,default:()=>{}},info:{type:Object,default:()=>({agentCustomerId:"",customerType:"",customerName:""})}},emits:["onDeleteSuccess"],setup(e,{emit:A}){const o=()=>{A("onDeleteSuccess")};return(p,b)=>{const c=J("ZaSvg");return t(),s("div",xe,[a("div",Se,[a("span",je,n(e.visitData.visitTime),1),a("span",Ce,[y(c,{name:"right_arrow",class:"arrow-icon"})])]),a("div",Oe,[y(De,{data:e.visitData,info:e.info,onOnDeleteSuccess:o},null,8,["data","info"])])])}}});const Be={class:"page page-visit-record"},ze={class:"visit-record-container"},He={class:"visit-record-bottom"},qe=U("\u5F55\u5165\u6D3B\u52A8\u8BB0\u5F55"),Re=j({props:{userInfo:{type:Object,default:()=>({agentCustomerId:"",customerType:"",customerName:""})}},setup(e,{expose:A}){const o=x([]),p=P(),b=R(),c=x(!1),{agentCustomerId:k,customerType:T,customerName:D}=b.query,_=()=>{p.push(`/record/add?agentCustomerId=${k}&customerType=${T}&customerName=${D}`)},r=async()=>{var v,m;c.value=!0;const l=await se({pageNum:1,pageSize:9999,queryBean:{agentCustomerId:k}});c.value=!1,o.value=((m=(v=l==null?void 0:l.data)==null?void 0:v.data)==null?void 0:m.list)||[]};return A({getData:r}),$(()=>{r()}),(l,v)=>{const m=J("van-button");return t(),s("div",Be,[a("div",ze,[(t(!0),s(I,null,S(o.value,(f,g)=>(t(),M(Ve,{key:g,info:e.userInfo,"visit-data":f,onOnDeleteSuccess:r},null,8,["info","visit-data"]))),128)),o.value.length===0&&!c.value?(t(),M(oe,{key:0,"empty-class":"empty"})):i("",!0)]),a("div",He,[y(m,{class:"btn-sub",type:"primary",onClick:_},{default:E(()=>[qe]),_:1})])])}}});export{Re as default};
