import{h as e,a8 as a,N as t,r as o,d as s,L as n,j as i,k as l,l as r,m as d,n as u,Q as c,y as p,E as v,J as y,A as f,F as g,z as m,I as C,C as h,T}from"./vendor-8ce3e007.js";import{_ as b,a as k,E as j,g as I,A as D,t as N,n as q,N as L,b as x}from"./index-0779499b.js";import{l as A,g as _}from"./inform-148bbab5.js";import{s as E}from"./useStorage-560b5a8d.js";import{s as S}from"./verify-2d63959a.js";import{d as P,A as M,e as Y}from"./notice-a4a1c218.js";const B={class:"date"},G={class:"inform-file"},R={class:"tips"},U=h(" 您的签名将被用于"),V=h("文件 "),w={class:"footer-button"},z=h("下一步");var F=b(e({setup(e){const h=a(),b=t(),{productCode:F="MMBBSF",agentCode:O="65434444",tenantId:$="9991000007",agencyCode:J="3311222",insurerCode:Q="zhongan",productCategory:W=1,templateId:H=1,orderNo:K="2022080217103534947"}=b.query,X=o(null),Z=o(!1),ee=s().format("YYYY-MM-DD"),ae=o(""),te=o(),oe=()=>{var e;null==(e=X.value)||e.clear()},se=n({noticeType:"",materialSource:"",noticeList:[],pageData:{}});i((()=>{I({orderNo:K,saleUserId:O,tenantId:$}).then((({code:e,data:a})=>{"10000"===e&&(Object.assign(se.pageData,a),a.tenantOrderAttachmentList.forEach((e=>{e.category===D.ELECTRIC_SIGN&&e.objectType===N.AGENT&&X.value.setDataURL(e.fileBase64)})))})),A({insurerCode:Q,orderNo:K,productCategory:W,tenantId:$,noticeType:M,objectType:Y}).then((({code:e,data:a})=>{"10000"===e&&(se.noticeList=[...se.noticeList,...a])}))}));const ne=()=>{var e,a;if(!(se.noticeList&&se.noticeList.every((e=>1===e.isDone))))return void T("请完成所有告知进行下一步");if(null==(e=X.value)?void 0:e.isEmpty())return void T("请完成代理人签字进行下一步");if(!Z.value)return void T("请勾选同意签名");const t=null==(a=X.value)?void 0:a.save();S("AGENT",t,se.pageData.id,$).then((e=>{e&&q({...se.pageData,extInfo:{...se.pageData.extInfo,templateId:H,pageCode:"salesNotice",buttonCode:L.salesNotice},venderCode:Q}).then((({code:e,data:a})=>{"10000"===e&&"jumpToPage"===a.pageAction.pageAction&&h.push({path:x[a.pageAction.data.nextPageCode],query:{...b.query}})}))}))};return(e,a)=>{const t=l("van-cell"),o=l("ProSign"),s=l("van-checkbox"),n=l("van-button"),i=l("ProPageWrap");return r(),d(i,{class:"page-salesman-inform"},{default:u((()=>[c(k,{title:"营销员告知书"},{default:u((()=>[(r(!0),p(g,null,v(f(se).noticeList,(e=>(r(),d(t,{key:e.id,class:y({"is-active":2===e.isDone}),title:`《${e.title}》`,"is-link":"",value:""+(1===e.isDone?"已完成":"去完成"),onClick:a=>{return t=e,E.set("questionData",t),void h.push({path:"/healthNotice",query:{questionnaireType:t.questionnaireType,...b.query}});var t}},null,8,["class","title","value","onClick"])))),128))])),_:1}),c(k,{title:"营销员签字","show-divider":!1,"show-line":!1},{extra:u((()=>[m("div",{class:"resign",onClick:oe},"重签")])),default:u((()=>[c(o,{ref_key:"agentSignRef",ref:X,selector:"sign2"},null,512),m("div",B,"签名日期： "+C(f(ee)),1)])),_:1}),m("div",G,[c(s,{modelValue:Z.value,"onUpdate:modelValue":a[0]||(a[0]=e=>Z.value=e),shape:"square"},null,8,["modelValue"]),m("p",R,[U,(r(!0),p(g,null,v(f(se).noticeList,((e,a)=>(r(),d(j,{key:a,class:"file",title:`《${e.title}》`,content:te.value,type:ae.value,onClick:a=>(e=>{const{id:a,objectType:t}=e,o={1:"pdf",2:"richText",3:"link"};_({insurerCode:Q,id:a,objectType:t,productCategory:W,orderNo:K,tenantId:$}).then((({code:e,data:a})=>{"10000"===e&&((null==a?void 0:a[0].questionType)===P?(ae.value="question",te.value=a):(1===(null==a?void 0:a[0].textType)&&(null==a?void 0:a[0].content.includes("png"))?ae.value="picture":ae.value=o[null==a?void 0:a[0].textType],te.value=null==a?void 0:a[0].content))}))})(e)},null,8,["title","content","type","onClick"])))),128)),V])]),m("div",w,[c(n,{type:"primary",block:"",onClick:ne},{default:u((()=>[z])),_:1})])])),_:1})}}}),[["__scopeId","data-v-1d1c7e90"]]);export{F as default};
