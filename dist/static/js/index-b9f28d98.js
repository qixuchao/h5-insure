var F=Object.defineProperty,V=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var x=(t,e,a)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,f=(t,e)=>{for(var a in e||(e={}))L.call(e,a)&&x(t,a,e[a]);if(k)for(var a of k(e))R.call(e,a)&&x(t,a,e[a]);return t},v=(t,e)=>V(t,j(e));import{g as U,af as w,Q as M,C as D,L as O,M as $,r as i,h,j as S,k as c,n as l,m as z,E as G,z as Q,F as W,y as u,a1 as J,a2 as H,B,T as K,J as X}from"./vendor-07b5d0eb.js";import{_ as Y,j as A,P as Z}from"./index-16791f5f.js";import{l as ee}from"./inform-1703d5bb.js";import{a as te,n as ae}from"./index-051a6629.js";import{s as oe}from"./useStorage-e7cc6b5d.js";import{s as se}from"./verify-2cdf6348.js";const ne=t=>(J("data-v-54c31391"),t=t(),H(),t),ue={class:"footer-btn"},re={class:"inform-file"},ie=ne(()=>u("p",{class:"tips"},[B("\u60A8\u7684\u7B7E\u540D\u5C06\u88AB\u7528\u4E8E"),u("span",null,"\u300A\u8425\u9500\u5458\u544A\u77E5\u4E66\u300B"),B("\u6587\u4EF6")],-1)),ce={class:"footer-button"},le=B("\u4E0B\u4E00\u6B65"),pe=U({setup(t){const e=w(),a=M(),{orderNo:E="2022021815432987130620",productCode:I="andainsurer",templateId:de=1,tenantId:C=9991000007}=a.query,p=D(null),y=D(!1),N=()=>{var o;(o=p.value)==null||o.clear()},r=O({noticeType:"",materialSource:"",noticeList:[],pageData:{}}),P=()=>{te({orderNo:"2022021815432987130620",saleUserId:"D1234567-1",tenantId:"9991000007"}).then(({code:o,data:s})=>{o==="10000"&&Object.assign(r.pageData,s)})};$(()=>{P(),ee({insurerCode:I,orderNo:E,productCategory:1,tenantId:C,noticeType:9,objectType:3}).then(({code:o,data:s})=>{o==="10000"&&(r.noticeList=s)})});const T=o=>{oe.set("questionData",o),e.push({path:"/healthNotice",query:{questionnaireType:o.questionnaireType}})},b=()=>{var s,d;if((s=p.value)==null?void 0:s.isEmpty()){K("\u8BF7\u5B8C\u6210\u4EE3\u7406\u4EBA\u7B7E\u5B57\u8FDB\u884C\u4E0B\u4E00\u6B65");return}const o=(d=p.value)==null?void 0:d.save();se("AGENT",o,E,C).then(m=>{m&&ae(v(f({},r.pageData),{extInfo:v(f({},r.pageData.extInfo),{templateId:"1",pageCode:"salesNotice"})})).then((g,_)=>{g==="10000"&&_.pageAction.pageAction==="jumpToPage"&&e.push({path:Z[_.pageAction.data.nextPageCode],query:f({},a.query)})})})};return(o,s)=>{const d=i("van-cell"),m=i("ProSign"),g=i("van-checkbox"),_=i("van-button"),q=i("ProPageWrap");return h(),S(q,{class:"page-salesman-inform"},{default:c(()=>[l(A,{title:"\u8425\u9500\u5458\u544A\u77E5\u4E66"},{default:c(()=>[(h(!0),z(W,null,G(Q(r).noticeList,n=>(h(),S(d,{key:n.id,class:X({"is-active":n.isDone===2}),title:`\u300A${n.questionnaireName}\u300B`,"is-link":"",value:`${n.isDone===1?"\u5DF2\u5B8C\u6210":"\u53BB\u5B8C\u6210"}`,onClick:_e=>T(n)},null,8,["class","title","value","onClick"]))),128))]),_:1}),l(A,{title:"\u8425\u9500\u5458\u7B7E\u5B57","show-divider":!1,"show-line":!1},{extra:c(()=>[u("div",{class:"resign",onClick:N},"\u91CD\u7B7E")]),default:c(()=>[l(m,{ref_key:"agentSignRef",ref:p,selector:"sign2"},null,512)]),_:1}),u("footer",ue,[u("div",re,[l(g,{modelValue:y.value,"onUpdate:modelValue":s[0]||(s[0]=n=>y.value=n),shape:"square"},null,8,["modelValue"]),ie]),u("div",ce,[l(_,{type:"primary",block:"",onClick:b},{default:c(()=>[le]),_:1})])])]),_:1})}}});var Ce=Y(pe,[["__scopeId","data-v-54c31391"]]);export{Ce as default};
