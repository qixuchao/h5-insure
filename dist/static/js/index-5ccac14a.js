import{_ as e,d as a,u as t,a as o,r as s,$ as n,z as i,y as l,b as r,c,e as d,w as u,f as p,g as v,h as y,B as f,l as g,F as m,m as C,i as h,t as T,ag as b,n as k,p as D,a6 as j,a7 as I,T as q,C as N,N as x,D as L}from"./index-210893c4.js";import{l as _,g as A}from"./inform-e51bb0e6.js";import{s as E}from"./useStorage-9c7aea02.js";import{s as S}from"./verify-ecbc73e9.js";import{d as P,A as B,e as M}from"./notice-a4a1c218.js";import"./pdfh5-e5c0db2a.js";const Y={class:"date"},w={class:"inform-file"},G={class:"tips"},R=k(" 您的签名将被用于"),U=k("文件 "),V={class:"footer-button"},$=k("下一步");var z=e(a({setup(e){const a=t(),k=o(),{productCode:z="MMBBSF",agentCode:F="65434444",tenantId:O="9991000007",agencyCode:W="3311222",insurerCode:H="zhongan",productCategory:J=1,templateId:K=1,orderNo:Q="2022080217103534947"}=k.query,X=s(null),Z=s(!1),ee=n().format("YYYY-MM-DD"),ae=s(""),te=s(),oe=()=>{var e;null==(e=X.value)||e.clear()},se=i({noticeType:"",materialSource:"",noticeList:[],pageData:{}});l((()=>{D({orderNo:Q,saleUserId:F,tenantId:O}).then((({code:e,data:a})=>{"10000"===e&&(Object.assign(se.pageData,a),a.tenantOrderAttachmentList.forEach((e=>{e.category===j.ELECTRIC_SIGN&&e.objectType===I.AGENT&&X.value.setDataURL(e.fileBase64)})))})),_({insurerCode:H,orderNo:Q,productCategory:J,tenantId:O,noticeType:B,objectType:M}).then((({code:e,data:a})=>{"10000"===e&&(se.noticeList=[...se.noticeList,...a])}))}));const ne=()=>{var e,t;if(!(se.noticeList&&se.noticeList.every((e=>1===e.isDone))))return void q("请完成所有告知进行下一步");if(null==(e=X.value)?void 0:e.isEmpty())return void q("请完成代理人签字进行下一步");if(!Z.value)return void q("请勾选同意签名");const o=null==(t=X.value)?void 0:t.save();S("AGENT",o,se.pageData.id,O).then((e=>{e&&N({...se.pageData,extInfo:{...se.pageData.extInfo,templateId:K,pageCode:"salesNotice",buttonCode:x.salesNotice},venderCode:H}).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&a.push({path:L[t.pageAction.data.nextPageCode],query:{...k.query}})}))}))};return(e,t)=>{const o=r("van-cell"),s=r("ProSign"),n=r("van-checkbox"),i=r("van-button"),l=r("ProPageWrap");return c(),d(l,{class:"page-salesman-inform"},{default:u((()=>[p(C,{title:"营销员告知书"},{default:u((()=>[(c(!0),v(m,null,y(g(se).noticeList,(e=>(c(),d(o,{key:e.id,class:f({"is-active":2===e.isDone}),title:`《${e.title}》`,"is-link":"",value:""+(1===e.isDone?"已完成":"去完成"),onClick:t=>{return o=e,E.set("questionData",o),void a.push({path:"/healthNotice",query:{questionnaireType:o.questionnaireType,...k.query}});var o}},null,8,["class","title","value","onClick"])))),128))])),_:1}),p(C,{title:"营销员签字","show-divider":!1,"show-line":!1},{extra:u((()=>[h("div",{class:"resign",onClick:oe},"重签")])),default:u((()=>[p(s,{ref_key:"agentSignRef",ref:X,selector:"sign2"},null,512),h("div",Y,"签名日期： "+T(g(ee)),1)])),_:1}),h("div",w,[p(n,{modelValue:Z.value,"onUpdate:modelValue":t[0]||(t[0]=e=>Z.value=e),shape:"square"},null,8,["modelValue"]),h("p",G,[R,(c(!0),v(m,null,y(g(se).noticeList,((e,a)=>(c(),d(b,{key:a,class:"file",title:`《${e.title}》`,content:te.value,type:ae.value,onClick:a=>(e=>{const{id:a,objectType:t}=e,o={1:"pdf",2:"richText",3:"link"};A({insurerCode:H,id:a,objectType:t,productCategory:J,orderNo:Q,tenantId:O}).then((({code:e,data:a})=>{"10000"===e&&((null==a?void 0:a[0].questionType)===P?(ae.value="question",te.value=a):(1===(null==a?void 0:a[0].textType)&&(null==a?void 0:a[0].content.includes("png"))?ae.value="picture":ae.value=o[null==a?void 0:a[0].textType],te.value=null==a?void 0:a[0].content))}))})(e)},null,8,["title","content","type","onClick"])))),128)),U])]),h("div",V,[p(i,{type:"primary",block:"",onClick:ne},{default:u((()=>[$])),_:1})])])),_:1})}}}),[["__scopeId","data-v-1d1c7e90"]]);export{z as default};
