import{_ as e,d as a,u as t,a as s,r as o,ac as n,J as i,G as l,C as r,v as d,b as c,c as u,e as p,w as v,f,g as y,h as g,L as m,m as C,F as h,P as T,i as k,t as j,a9 as D,n as I,p as b,aj as q,ak as L,H as N,T as x,M as _,N as A,O as E,ae as M,B as P}from"./index-8dcf7554.js";import{l as B,g as G}from"./inform-58a66a0b.js";import{s as S}from"./verify-359c85ed.js";import{d as Y,A as w,e as O}from"./notice-a4a1c218.js";import"./pdfh5-008ca364.js";const R={class:"date"},U={class:"inform-file"},V={class:"tips"},F=I(" 您的签名将被用于"),$=I("文件 "),z={class:"footer-button"},H=I("下一步");var J=e(a({setup(e){const a=t(),I=s(),{productCode:J="MMBBSF",agentCode:W="65434444",tenantId:K="9991000007",agencyCode:Q="3311222",insurerCode:X="zhongan",productCategory:Z=1,templateId:ee=1,orderNo:ae="2022080217103534947"}=I.query,te=o(null),se=o(!1),oe=n().format("YYYY-MM-DD"),ne=o(""),ie=o(),le=()=>{var e;null==(e=te.value)||e.clear()},re=i({noticeType:"",materialSource:"",noticeList:[],pageData:{}});l((()=>{b({orderNo:ae,saleUserId:W,tenantId:K}).then((({code:e,data:a})=>{"10000"===e&&(Object.assign(re.pageData,a),a.tenantOrderAttachmentList.forEach((e=>{e.category===q.ELECTRIC_SIGN&&e.objectType===L.AGENT&&te.value.setDataURL(e.fileBase64)})))})),B({insurerCode:X,orderNo:ae,productCategory:Z,tenantId:K,noticeType:w,objectType:O}).then((({code:e,data:a})=>{"10000"===e&&(re.noticeList=[...re.noticeList,...a])}))}));const de=()=>{var e,t;if(!(re.noticeList&&re.noticeList.every((e=>1===e.isDone))))return void x("请完成所有告知进行下一步");if(null==(e=te.value)?void 0:e.isEmpty())return void x("请完成代理人签字进行下一步");if(!se.value)return void x("请勾选同意签名");const s=null==(t=te.value)?void 0:t.save();S("AGENT",s,re.pageData.id,K).then((e=>{e&&_({...re.pageData,extInfo:{...re.pageData.extInfo,templateId:ee,pageCode:"salesNotice",buttonCode:A.salesNotice},venderCode:X}).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&a.push({path:E[t.pageAction.data.nextPageCode],query:{...I.query}})}))}))};return(e,t)=>{const s=r,o=M,n=d,i=P,l=c("ProPageWrap");return u(),p(l,{class:"page-salesman-inform"},{default:v((()=>[f(T,{title:"营销员告知书"},{default:v((()=>[(u(!0),y(h,null,g(C(re).noticeList,(e=>(u(),p(s,{key:e.id,class:m({"is-active":2===e.isDone}),title:`《${e.title}》`,"is-link":"",value:""+(1===e.isDone?"已完成":"去完成"),onClick:t=>{return s=e,N.set("questionData",s),void a.push({path:"/healthNotice",query:{questionnaireType:s.questionnaireType,...I.query}});var s}},null,8,["class","title","value","onClick"])))),128))])),_:1}),f(T,{title:"营销员签字","show-divider":!1,"show-line":!1},{extra:v((()=>[k("div",{class:"resign",onClick:le},"重签")])),default:v((()=>[f(o,{ref_key:"agentSignRef",ref:te,selector:"sign2"},null,512),k("div",R,"签名日期： "+j(C(oe)),1)])),_:1}),k("div",U,[f(n,{modelValue:se.value,"onUpdate:modelValue":t[0]||(t[0]=e=>se.value=e),shape:"square"},null,8,["modelValue"]),k("p",V,[F,(u(!0),y(h,null,g(C(re).noticeList,((e,a)=>(u(),p(D,{key:a,class:"file",title:`《${e.title}》`,content:ie.value,type:ne.value,onClick:a=>(e=>{const{id:a,objectType:t}=e,s={1:"pdf",2:"richText",3:"link"};G({insurerCode:X,id:a,objectType:t,productCategory:Z,orderNo:ae,tenantId:K}).then((({code:e,data:a})=>{"10000"===e&&((null==a?void 0:a[0].questionType)===Y?(ne.value="question",ie.value=a):(1===(null==a?void 0:a[0].textType)&&(null==a?void 0:a[0].content.includes("png"))?ne.value="picture":ne.value=s[null==a?void 0:a[0].textType],ie.value=null==a?void 0:a[0].content))}))})(e)},null,8,["title","content","type","onClick"])))),128)),$])]),k("div",z,[f(i,{type:"primary",block:"",onClick:de},{default:v((()=>[H])),_:1})])])),_:1})}}}),[["__scopeId","data-v-6f1bc28e"]]);export{J as default};
