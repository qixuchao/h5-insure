import{_ as e,d as a,u as t,a as o,r as s,a0 as n,A as i,z as l,b as r,c as d,e as u,w as c,f as p,g as v,h as f,C as y,l as g,F as m,m as C,i as h,t as T,al as b,n as k,p as D,a6 as j,a7 as I,T as q,D as N,N as x,E as L}from"./index-2f033305.js";import{l as _,g as A}from"./inform-db8dfd4e.js";import{s as E}from"./useStorage-5987f054.js";import{s as S}from"./verify-48b4d8f0.js";import{d as P,A as M,e as Y}from"./notice-a4a1c218.js";import"./pdfdist-2833f734.js";const w={class:"date"},B={class:"inform-file"},G={class:"tips"},R=k(" 您的签名将被用于"),U=k("文件 "),V={class:"footer-button"},z=k("下一步");var F=e(a({setup(e){const a=t(),k=o(),{productCode:F="MMBBSF",agentCode:O="65434444",tenantId:$="9991000007",agencyCode:W="3311222",insurerCode:H="zhongan",productCategory:J=1,templateId:K=1,orderNo:Q="2022080217103534947"}=k.query,X=s(null),Z=s(!1),ee=n().format("YYYY-MM-DD"),ae=s(""),te=s(),oe=()=>{var e;null==(e=X.value)||e.clear()},se=i({noticeType:"",materialSource:"",noticeList:[],pageData:{}});l((()=>{D({orderNo:Q,saleUserId:O,tenantId:$}).then((({code:e,data:a})=>{"10000"===e&&(Object.assign(se.pageData,a),a.tenantOrderAttachmentList.forEach((e=>{e.category===j.ELECTRIC_SIGN&&e.objectType===I.AGENT&&X.value.setDataURL(e.fileBase64)})))})),_({insurerCode:H,orderNo:Q,productCategory:J,tenantId:$,noticeType:M,objectType:Y}).then((({code:e,data:a})=>{"10000"===e&&(se.noticeList=[...se.noticeList,...a])}))}));const ne=()=>{var e,t;if(!(se.noticeList&&se.noticeList.every((e=>1===e.isDone))))return void q("请完成所有告知进行下一步");if(null==(e=X.value)?void 0:e.isEmpty())return void q("请完成代理人签字进行下一步");if(!Z.value)return void q("请勾选同意签名");const o=null==(t=X.value)?void 0:t.save();S("AGENT",o,se.pageData.id,$).then((e=>{e&&N({...se.pageData,extInfo:{...se.pageData.extInfo,templateId:K,pageCode:"salesNotice",buttonCode:x.salesNotice},venderCode:H}).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&a.push({path:L[t.pageAction.data.nextPageCode],query:{...k.query}})}))}))};return(e,t)=>{const o=r("van-cell"),s=r("ProSign"),n=r("van-checkbox"),i=r("van-button"),l=r("ProPageWrap");return d(),u(l,{class:"page-salesman-inform"},{default:c((()=>[p(C,{title:"营销员告知书"},{default:c((()=>[(d(!0),v(m,null,f(g(se).noticeList,(e=>(d(),u(o,{key:e.id,class:y({"is-active":2===e.isDone}),title:`《${e.title}》`,"is-link":"",value:""+(1===e.isDone?"已完成":"去完成"),onClick:t=>{return o=e,E.set("questionData",o),void a.push({path:"/healthNotice",query:{questionnaireType:o.questionnaireType,...k.query}});var o}},null,8,["class","title","value","onClick"])))),128))])),_:1}),p(C,{title:"营销员签字","show-divider":!1,"show-line":!1},{extra:c((()=>[h("div",{class:"resign",onClick:oe},"重签")])),default:c((()=>[p(s,{ref_key:"agentSignRef",ref:X,selector:"sign2"},null,512),h("div",w,"签名日期： "+T(g(ee)),1)])),_:1}),h("div",B,[p(n,{modelValue:Z.value,"onUpdate:modelValue":t[0]||(t[0]=e=>Z.value=e),shape:"square"},null,8,["modelValue"]),h("p",G,[R,(d(!0),v(m,null,f(g(se).noticeList,((e,a)=>(d(),u(b,{key:a,class:"file",title:`《${e.title}》`,content:te.value,type:ae.value,onClick:a=>(e=>{const{id:a,objectType:t}=e,o={1:"pdf",2:"richText",3:"link"};A({insurerCode:H,id:a,objectType:t,productCategory:J,orderNo:Q,tenantId:$}).then((({code:e,data:a})=>{"10000"===e&&((null==a?void 0:a[0].questionType)===P?(ae.value="question",te.value=a):(1===(null==a?void 0:a[0].textType)&&(null==a?void 0:a[0].content.includes("png"))?ae.value="picture":ae.value=o[null==a?void 0:a[0].textType],te.value=null==a?void 0:a[0].content))}))})(e)},null,8,["title","content","type","onClick"])))),128)),U])]),h("div",V,[p(i,{type:"primary",block:"",onClick:ne},{default:c((()=>[z])),_:1})])])),_:1})}}}),[["__scopeId","data-v-1d1c7e90"]]);export{F as default};
