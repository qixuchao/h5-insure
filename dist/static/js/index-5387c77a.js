<<<<<<<< HEAD:dist/static/js/index-5387c77a.js
import{_ as e,d as t,c as l,h as a,j as n,t as s,S as i,r as u,E as o,U as d,f as c,L as r,g as v,V as p,W as m,X as y,Y as f,F as g,i as I,e as h,n as k,k as V,u as P,a as L,G as _,Z as O,$ as b,a0 as w,a1 as C,b as x,z as T,w as q,a2 as A,P as S,a3 as $,A as N,a4 as D,a5 as j,a6 as U,a7 as B,a8 as z,a9 as E,aa as F,B as Q}from"./index-0fe7bae3.js";import W from"./index-ef30e787.js";import{p as Y}from"./product-ad6617aa.js";import{f as G,a as M,b as X,c as Z,d as H}from"./utils-b77f2acb.js";import"./pdfh5-008ca364.js";const J={class:"com-field-info"},K={class:"title"},R={class:"desc"};var ee=e(t({__name:"fieldInfo",props:{title:{type:String,default:""},desc:{type:String,default:""}},setup:e=>(t,i)=>(l(),a("div",J,[n("div",K,s(e.title),1),n("div",R,s(e.desc),1)]))}),[["__scopeId","data-v-999da452"]]);const te={class:"com-question-item"},le={class:"question"},ae=(e=>(y("data-v-5230fe82"),e=e(),f(),e))((()=>n("div",{class:"icon"},s("?"),-1))),ne={class:"title"};var se=e(t({__name:"item",props:{question:{type:String,default:""},answer:{type:String,default:""}},setup(e){const[t,y]=i(!1),f=u(),g=()=>{y()},I=o((()=>t.value?d(f.value):0));return(i,u)=>(l(),a("div",te,[n("div",le,[ae,n("div",ne,s(e.question),1),c(p,{name:"down",class:r(["arrow-icon",{show:v(t)}]),onClick:g},null,8,["class"])]),n("div",{ref_key:"answerDom",ref:f,class:"answer",style:m({height:`${v(I)}px`})},s(e.answer),5)]))}}),[["__scopeId","data-v-5230fe82"]]);const ie={class:"com-question"};var ue=e(t({__name:"index",props:{list:{type:Array,default:()=>[]}},setup(e){const t=e,[n,u]=i(!1),d=()=>{u()},m=o((()=>t.list.length<=4||n.value?t.list:t.list.slice(0,4)));return(t,i)=>(l(),a("div",ie,[(l(!0),a(g,null,I(v(m),((e,t)=>(l(),h(se,{key:t,question:e.title,answer:e.desc},null,8,["question","answer"])))),128)),e.list.length>4?(l(),a("div",{key:0,class:"show-more",onClick:d},[k(s(v(n)?"收起":"展开")+" ",1),c(p,{name:"down",class:r(["icon",{showMore:v(n)}])},null,8,["class"])])):V("",!0)]))}}),[["__scopeId","data-v-3355884a"]]);const oe={class:"page-product-detail"},de=["src"],ce={class:"custom-indicator"},re={key:1,class:"title"},ve={class:"text"},pe={key:0,class:"desc"},me={key:2,class:"plan"},ye={key:0,class:"basic"},fe={key:1,class:"field"},ge={key:2,class:"field"},Ie={class:"tab-1"},he=["src"],ke=(e=>(y("data-v-bd169fe2"),e=e(),f(),e))((()=>n("div",{class:"sub-title"},"*产品资料文件详情可手动放大，以便您更清晰查阅内容。",-1))),Ve={class:"tab-1-content"},Pe={key:0,class:"dun-hao"},Le={class:"footer-button"},_e={class:"guarantee-list"},Oe={class:"title"},be={class:"content"};var we=e(t({__name:"index",setup(e){const t=P(),i=L(),{productCode:d="CQ75CQ76",tenantId:p}=i.query,m=u([]),y=u(0),f=u(y.value),J=u(!1),K=u(),R=u({}),te=u(1),le=e=>R.value&&R.value[e]&&R.value[e].isDisplay===E.YES,ae=()=>{J.value=!0},ne=()=>{var e,l,a;t.push({path:"/trial",query:{...i.query,productCode:null==(e=K.value)?void 0:e.baseProductCode,insurerCode:null==(l=K.value)?void 0:l.insurerCode,templateId:te.value,productCategory:null==(a=K.value)?void 0:a.categoryNo}})},se=o((()=>{var e,t,l,a,n,s,i;return(null==(l=null==(t=null==(e=K.value)?void 0:e.tenantProductInsureVO)?void 0:t.guaranteeList)?void 0:l.length)?null==(n=null==(a=K.value)?void 0:a.tenantProductInsureVO)?void 0:n.guaranteeList:[{guaranteeType:"单计划",titleAndDescVOS:null==(i=null==(s=K.value)?void 0:s.tenantProductInsureVO)?void 0:i.titleAndDescVOS}]}));return _((()=>{Y({productCode:d,withInsureInfo:!0,tenantId:p}).then((e=>{const{code:t,data:l}=e;if("10000"===t){K.value=l;const{insurerCode:e,categoryNo:t}=l;O({productCategory:t,venderCode:e}).then((e=>{var t;"10000"===e.code&&(te.value=null==(t=e.data)?void 0:t.id,b({pageCode:"productInfo",templateId:te.value}).then((e=>{if("10000"===e.code){const t={};e.data.productInsureFactorList.forEach((e=>{t[e.code]=e})),R.value=t;const l=[];le("productCharacteristic")&&l.push({title:"产品特色",slotName:"tab1"}),le("productCharacteristic")&&l.push({title:"理赔流程",slotName:"tab2"}),le("commonQuestion")&&l.push({title:"常见问题",slotName:"tab3"}),m.value=l}})))}))}})),setTimeout((()=>{window.getIseeBiz&&window.getIseeBiz()}),1500)})),(e,t)=>{const i=w,u=C,o=x("ProTabButton"),d=F,p=Q,P=x("ProPageWrap"),L=T("dompurify-html");return l(),a(g,null,[c(P,null,{default:q((()=>{var e,t;return[n("div",oe,[le("picture")?(l(),h(u,{key:0,class:"swipe"},{indicator:q((({active:e,total:t})=>[n("div",ce,s(e+1)+"/"+s(t),1)])),default:q((()=>{var e,t;return[(l(!0),a(g,null,I((null==(t=null==(e=v(K))?void 0:e.tenantProductInsureVO)?void 0:t.banner)||[],((e,t)=>(l(),h(i,{key:t},{default:q((()=>[n("img",{src:e,class:"swipe-img"},null,8,de)])),_:2},1024)))),128))]})),_:1})):V("",!0),le("title")?(l(),a("div",re,[n("div",ve,s(null==(e=v(K))?void 0:e.productFullName),1),le("introduction")?(l(),a("div",pe,s(null==(t=v(K))?void 0:t.showConfigVO.desc),1)):V("",!0)])):V("",!0),c(A),v(se).length>1?(l(),a("div",me,[(l(!0),a(g,null,I(v(se),((e,t)=>(l(),h(o,{key:t,title:e.guaranteeType,active:v(y)===t,class:r(["plan-item",`length-${v(se).length}`]),onClick:e=>(e=>{y.value=e,f.value=e})(t)},null,8,["title","active","class","onClick"])))),128))])):V("",!0),le("guaranteeDetail")?(l(),h(S,{key:3,title:"保障详情",link:"查看详情",onLinkClick:ae},{default:q((()=>{var e,t,n,s,i,u,o,d,c,r,p,m,f,k,P,L,_,O,b,w,C,x,T,q,A,S,j,U,B,z,E,F,Q,W,Y,J,R,te,ae,ne,ie,ue,oe;return[v(K)&&(null==(e=v(K))?void 0:e.tenantProductInsureVO)?(l(),a("div",ye,[(l(!0),a(g,null,I(null==(n=null==(t=v(se))?void 0:t[v(y)])?void 0:n.titleAndDescVOS,((e,t)=>(l(),h($,{key:t,title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128))])):V("",!0),v(se).length>1?(l(),a("div",fe,[le("guaranteeAge")?(l(),h(ee,{key:0,title:"投保年龄",desc:v(G)(null==(i=null==(s=v(se))?void 0:s[v(y)])?void 0:i.holderAgeLimit)},null,8,["desc"])):V("",!0),le("guaranteeTime")?(l(),h(ee,{key:1,title:"保障期间",desc:v(M)(null==(o=null==(u=v(se))?void 0:u[v(y)])?void 0:o.insurancePeriodValues)},null,8,["desc"])):V("",!0),le("paymentTime")?(l(),h(ee,{key:2,title:"交费期间",desc:v(M)(null==(c=null==(d=v(se))?void 0:d[v(y)])?void 0:c.paymentPeriodValues)},null,8,["desc"])):V("",!0),le("sexLimit")?N((l(),h(ee,{key:3,title:"性别限制",desc:`仅限${v(X)(null==(p=null==(r=v(se))?void 0:r[v(y)])?void 0:p.sexLimit)}性投保`},null,8,["desc"])),[[D,"-1"!==(null==(f=null==(m=v(se))?void 0:m[v(y)])?void 0:f.sexLimit)]]):V("",!0),le("socialInsuranceLimit")?N((l(),h(ee,{key:4,title:"社保限制",desc:`仅限${v(Z)(null==(P=null==(k=v(se))?void 0:k[v(y)])?void 0:P.socialInsuranceLimit)}社保人群有投保`},null,8,["desc"])),[[D,"-1"!==(null==(_=null==(L=v(se))?void 0:L[v(y)])?void 0:_.socialInsuranceLimit)]]):V("",!0),le("occupationType")?N((l(),h(ee,{key:5,title:"职业类别",desc:v(H)(null==(b=null==(O=v(se))?void 0:O[v(y)])?void 0:b.occupationLimit)},null,8,["desc"])),[[D,"-1"!==(null==(C=null==(w=v(se))?void 0:w[v(y)])?void 0:C.occupationLimit)]]):V("",!0)])):(l(),a("div",ge,[le("guaranteeAge")?(l(),h(ee,{key:0,title:"投保年龄",desc:v(G)(null==(T=null==(x=v(K))?void 0:x.tenantProductInsureVO)?void 0:T.holderAgeLimit)},null,8,["desc"])):V("",!0),le("guaranteeTime")?(l(),h(ee,{key:1,title:"保障期间",desc:v(M)(null==(A=null==(q=v(K))?void 0:q.tenantProductInsureVO)?void 0:A.insurancePeriodValues)},null,8,["desc"])):V("",!0),le("paymentTime")?(l(),h(ee,{key:2,title:"交费期间",desc:v(M)(null==(j=null==(S=v(K))?void 0:S.tenantProductInsureVO)?void 0:j.paymentPeriodValues)},null,8,["desc"])):V("",!0),le("sexLimit")?N((l(),h(ee,{key:3,title:"性别限制",desc:(null==(B=null==(U=v(K))?void 0:U.tenantProductInsureVO)?void 0:B.sexLimit)&&`仅限${v(X)(null==(E=null==(z=v(K))?void 0:z.tenantProductInsureVO)?void 0:E.sexLimit)}性投保`},null,8,["desc"])),[[D,"-1"!==(null==(Q=null==(F=v(K))?void 0:F.tenantProductInsureVO)?void 0:Q.sexLimit)]]):V("",!0),le("socialInsuranceLimit")?N((l(),h(ee,{key:4,title:"社保限制",desc:(null==(Y=null==(W=v(K))?void 0:W.tenantProductInsureVO)?void 0:Y.socialInsuranceLimit)&&`仅限${v(Z)(null==(R=null==(J=v(K))?void 0:J.tenantProductInsureVO)?void 0:R.socialInsuranceLimit)}社保人群投保`},null,8,["desc"])),[[D,"-1"!==(null==(ae=null==(te=v(K))?void 0:te.tenantProductInsureVO)?void 0:ae.socialInsuranceLimit)]]):V("",!0),le("occupationType")?N((l(),h(ee,{key:5,title:"职业类别",desc:v(H)(null==(ie=null==(ne=v(K))?void 0:ne.tenantProductInsureVO)?void 0:ie.occupationLimit)},null,8,["desc"])),[[D,"-1"!==(null==(oe=null==(ue=v(K))?void 0:ue.tenantProductInsureVO)?void 0:oe.occupationLimit)]]):V("",!0)]))]})),_:1})):V("",!0),c(j,{class:"tabs",list:v(m),sticky:"",scrollspy:""},{tab1:q((()=>{var e,t;return[n("div",Ie,[(l(!0),a(g,null,I((null==(t=null==(e=v(K))?void 0:e.tenantProductInsureVO)?void 0:t.spec)||[],((e,t)=>(l(),a("img",{key:t,src:e,class:"detail-img"},null,8,he)))),128)),c(S,{title:"产品资料"},{subTitle:q((()=>[ke])),default:q((()=>{var e,t;return[n("div",Ve,[k(" 请查看 "),(l(!0),a(g,null,I((null==(t=null==(e=v(K))?void 0:e.tenantProductInsureVO)?void 0:t.attachmentVOList)||[],((e,t)=>(l(),h(d,{key:t,class:"file-name",title:`《${e.attachmentName}》`,content:e.attachmentUri,type:v(U)(e.attachmentUri,e.attachmentType)},{default:q((()=>{var e,n;return[t!==((null==(n=null==(e=v(K))?void 0:e.tenantProductInsureVO)?void 0:n.attachmentVOList)||[]).length-1?(l(),a("span",Pe,"、")):V("",!0)]})),_:2},1032,["title","content","type"])))),128))])]})),_:1})])]})),tab2:q((()=>[c(S,{title:"理赔流程"},{default:q((()=>{var e,t;return[c(W,{list:null==(t=null==(e=v(K))?void 0:e.tenantProductInsureVO)?void 0:t.settlementProcessList},null,8,["list"])]})),_:1})])),tab3:q((()=>[c(S,{title:"常见问题"},{default:q((()=>{var e,t;return[c(ue,{list:null==(t=null==(e=v(K))?void 0:e.tenantProductInsureVO)?void 0:t.questionList},null,8,["list"])]})),_:1})])),_:1},8,["list"]),n("div",Le,[c(p,{type:"primary",onClick:ne},{default:q((()=>[k("算保费")])),_:1})])])]})),_:1}),(l(),h(z,{key:v(y),show:v(J),"onUpdate:show":t[1]||(t[1]=e=>B(J)?J.value=e:null),title:"保障详情",class:"guarantee-popup"},{default:q((()=>[v(se).length>1?(l(),h(j,{key:0,active:v(f),"onUpdate:active":t[0]||(t[0]=e=>B(f)?f.value=e:null),list:v(se).map(((e,t)=>({title:e.guaranteeType,slotName:`guarantee-${t}`}))),class:"tab"},null,8,["active","list"])):V("",!0),n("div",_e,[(l(!0),a(g,null,I(v(se)[v(f)].titleAndDescVOS,((e,t)=>(l(),a("div",{key:t,class:"guarantee-item"},[n("div",Oe,s(e.title),1),N(n("div",be,null,512),[[L,e.content]])])))),128))])])),_:1},8,["show"]))],64)}}}),[["__scopeId","data-v-bd169fe2"]]);export{we as default};
========
import{_ as e,d as t,c as l,h as a,j as n,t as s,S as i,r as u,E as d,U as o,f as c,L as r,g as v,V as p,W as m,X as y,Y as f,F as g,i as I,e as h,n as k,k as V,u as P,a as L,G as _,Z as O,$ as b,a0 as w,a1 as C,b as x,z as T,w as q,a2 as A,P as S,a3 as $,A as N,a4 as D,a5 as j,a6 as U,a7 as B,a8 as z,a9 as E,aa as F,B as Q}from"./index-9021af4d.js";import W from"./index-05dfd21c.js";import{p as Y}from"./product-203cfddd.js";import{f as G,a as M,b as X,c as Z,d as H}from"./utils-b77f2acb.js";import"./pdfh5-008ca364.js";const J={class:"com-field-info"},K={class:"title"},R={class:"desc"};var ee=e(t({__name:"fieldInfo",props:{title:{type:String,default:""},desc:{type:String,default:""}},setup:e=>(t,i)=>(l(),a("div",J,[n("div",K,s(e.title),1),n("div",R,s(e.desc),1)]))}),[["__scopeId","data-v-999da452"]]);const te={class:"com-question-item"},le={class:"question"},ae=(e=>(y("data-v-5230fe82"),e=e(),f(),e))((()=>n("div",{class:"icon"},s("?"),-1))),ne={class:"title"};var se=e(t({__name:"item",props:{question:{type:String,default:""},answer:{type:String,default:""}},setup(e){const[t,y]=i(!1),f=u(),g=()=>{y()},I=d((()=>t.value?o(f.value):0));return(i,u)=>(l(),a("div",te,[n("div",le,[ae,n("div",ne,s(e.question),1),c(p,{name:"down",class:r(["arrow-icon",{show:v(t)}]),onClick:g},null,8,["class"])]),n("div",{ref_key:"answerDom",ref:f,class:"answer",style:m({height:`${v(I)}px`})},s(e.answer),5)]))}}),[["__scopeId","data-v-5230fe82"]]);const ie={class:"com-question"};var ue=e(t({__name:"index",props:{list:{type:Array,default:()=>[]}},setup(e){const t=e,[n,u]=i(!1),o=()=>{u()},m=d((()=>t.list.length<=4||n.value?t.list:t.list.slice(0,4)));return(t,i)=>(l(),a("div",ie,[(l(!0),a(g,null,I(v(m),((e,t)=>(l(),h(se,{key:t,question:e.title,answer:e.desc},null,8,["question","answer"])))),128)),e.list.length>4?(l(),a("div",{key:0,class:"show-more",onClick:o},[k(s(v(n)?"收起":"展开")+" ",1),c(p,{name:"down",class:r(["icon",{showMore:v(n)}])},null,8,["class"])])):V("",!0)]))}}),[["__scopeId","data-v-3355884a"]]);const de={class:"page-product-detail"},oe=["src"],ce={class:"custom-indicator"},re={key:1,class:"title"},ve={class:"text"},pe={key:0,class:"desc"},me={key:2,class:"plan"},ye={key:0,class:"basic"},fe={key:1,class:"field"},ge={key:2,class:"field"},Ie={class:"tab-1"},he=["src"],ke=(e=>(y("data-v-bd169fe2"),e=e(),f(),e))((()=>n("div",{class:"sub-title"},"*产品资料文件详情可手动放大，以便您更清晰查阅内容。",-1))),Ve={class:"tab-1-content"},Pe={key:0,class:"dun-hao"},Le={class:"footer-button"},_e={class:"guarantee-list"},Oe={class:"title"},be={class:"content"};var we=e(t({__name:"index",setup(e){const t=P(),i=L(),{productCode:o="CQ75CQ76",tenantId:p}=i.query,m=u([]),y=u(0),f=u(y.value),J=u(!1),K=u(),R=u({}),te=u(1),le=e=>R.value&&R.value[e]&&R.value[e].isDisplay===E.YES,ae=()=>{J.value=!0},ne=()=>{var e,l,a;t.push({path:"/trial",query:{...i.query,productCode:null==(e=K.value)?void 0:e.baseProductCode,insurerCode:null==(l=K.value)?void 0:l.insurerCode,templateId:te.value,productCategory:null==(a=K.value)?void 0:a.categoryNo}})},se=d((()=>{var e,t,l,a,n,s,i;return(null==(l=null==(t=null==(e=K.value)?void 0:e.tenantProductInsureVO)?void 0:t.guaranteeList)?void 0:l.length)?null==(n=null==(a=K.value)?void 0:a.tenantProductInsureVO)?void 0:n.guaranteeList:[{guaranteeType:"单计划",titleAndDescVOS:null==(i=null==(s=K.value)?void 0:s.tenantProductInsureVO)?void 0:i.titleAndDescVOS}]}));return _((()=>{Y({productCode:o,withInsureInfo:!0,tenantId:p}).then((e=>{const{code:t,data:l}=e;if("10000"===t){K.value=l;const{insurerCode:e,categoryNo:t}=l;O({productCategory:t,venderCode:e}).then((e=>{var t;"10000"===e.code&&(te.value=null==(t=e.data)?void 0:t.id,b({pageCode:"productInfo",templateId:te.value}).then((e=>{if("10000"===e.code){const t={};e.data.productInsureFactorList.forEach((e=>{t[e.code]=e})),R.value=t;const l=[];le("productCharacteristic")&&l.push({title:"产品特色",slotName:"tab1"}),le("productCharacteristic")&&l.push({title:"理赔流程",slotName:"tab2"}),le("commonQuestion")&&l.push({title:"常见问题",slotName:"tab3"}),m.value=l}})))}))}})),setTimeout((()=>{window.getIseeBiz&&window.getIseeBiz()}),1500)})),(e,t)=>{const i=w,u=C,d=x("ProTabButton"),o=F,p=Q,P=x("ProPageWrap"),L=T("dompurify-html");return l(),a(g,null,[c(P,null,{default:q((()=>{var e,t;return[n("div",de,[le("picture")?(l(),h(u,{key:0,class:"swipe"},{indicator:q((({active:e,total:t})=>[n("div",ce,s(e+1)+"/"+s(t),1)])),default:q((()=>{var e,t;return[(l(!0),a(g,null,I((null==(t=null==(e=v(K))?void 0:e.tenantProductInsureVO)?void 0:t.banner)||[],((e,t)=>(l(),h(i,{key:t},{default:q((()=>[n("img",{src:e,class:"swipe-img"},null,8,oe)])),_:2},1024)))),128))]})),_:1})):V("",!0),le("title")?(l(),a("div",re,[n("div",ve,s(null==(e=v(K))?void 0:e.productFullName),1),le("introduction")?(l(),a("div",pe,s(null==(t=v(K))?void 0:t.showConfigVO.desc),1)):V("",!0)])):V("",!0),c(A),v(se).length>1?(l(),a("div",me,[(l(!0),a(g,null,I(v(se),((e,t)=>(l(),h(d,{key:t,title:e.guaranteeType,active:v(y)===t,class:r(["plan-item",`length-${v(se).length}`]),onClick:e=>(e=>{y.value=e,f.value=e})(t)},null,8,["title","active","class","onClick"])))),128))])):V("",!0),le("guaranteeDetail")?(l(),h(S,{key:3,title:"保障详情",link:"查看详情",onLinkClick:ae},{default:q((()=>{var e,t,n,s,i,u,d,o,c,r,p,m,f,k,P,L,_,O,b,w,C,x,T,q,A,S,j,U,B,z,E,F,Q,W,Y,J,R,te,ae,ne,ie,ue,de;return[v(K)&&(null==(e=v(K))?void 0:e.tenantProductInsureVO)?(l(),a("div",ye,[(l(!0),a(g,null,I(null==(n=null==(t=v(se))?void 0:t[v(y)])?void 0:n.titleAndDescVOS,((e,t)=>(l(),h($,{key:t,title:e.title,content:e.desc,border:!1},null,8,["title","content"])))),128))])):V("",!0),v(se).length>1?(l(),a("div",fe,[le("guaranteeAge")?(l(),h(ee,{key:0,title:"投保年龄",desc:v(G)(null==(i=null==(s=v(se))?void 0:s[v(y)])?void 0:i.holderAgeLimit)},null,8,["desc"])):V("",!0),le("guaranteeTime")?(l(),h(ee,{key:1,title:"保障期间",desc:v(M)(null==(d=null==(u=v(se))?void 0:u[v(y)])?void 0:d.insurancePeriodValues)},null,8,["desc"])):V("",!0),le("paymentTime")?(l(),h(ee,{key:2,title:"交费期间",desc:v(M)(null==(c=null==(o=v(se))?void 0:o[v(y)])?void 0:c.paymentPeriodValues)},null,8,["desc"])):V("",!0),le("sexLimit")?N((l(),h(ee,{key:3,title:"性别限制",desc:`仅限${v(X)(null==(p=null==(r=v(se))?void 0:r[v(y)])?void 0:p.sexLimit)}性投保`},null,8,["desc"])),[[D,"-1"!==(null==(f=null==(m=v(se))?void 0:m[v(y)])?void 0:f.sexLimit)]]):V("",!0),le("socialInsuranceLimit")?N((l(),h(ee,{key:4,title:"社保限制",desc:`仅限${v(Z)(null==(P=null==(k=v(se))?void 0:k[v(y)])?void 0:P.socialInsuranceLimit)}社保人群有投保`},null,8,["desc"])),[[D,"-1"!==(null==(_=null==(L=v(se))?void 0:L[v(y)])?void 0:_.socialInsuranceLimit)]]):V("",!0),le("occupationType")?N((l(),h(ee,{key:5,title:"职业类别",desc:v(H)(null==(b=null==(O=v(se))?void 0:O[v(y)])?void 0:b.occupationLimit)},null,8,["desc"])),[[D,"-1"!==(null==(C=null==(w=v(se))?void 0:w[v(y)])?void 0:C.occupationLimit)]]):V("",!0)])):(l(),a("div",ge,[le("guaranteeAge")?(l(),h(ee,{key:0,title:"投保年龄",desc:v(G)(null==(T=null==(x=v(K))?void 0:x.tenantProductInsureVO)?void 0:T.holderAgeLimit)},null,8,["desc"])):V("",!0),le("guaranteeTime")?(l(),h(ee,{key:1,title:"保障期间",desc:v(M)(null==(A=null==(q=v(K))?void 0:q.tenantProductInsureVO)?void 0:A.insurancePeriodValues)},null,8,["desc"])):V("",!0),le("paymentTime")?(l(),h(ee,{key:2,title:"交费期间",desc:v(M)(null==(j=null==(S=v(K))?void 0:S.tenantProductInsureVO)?void 0:j.paymentPeriodValues)},null,8,["desc"])):V("",!0),le("sexLimit")?N((l(),h(ee,{key:3,title:"性别限制",desc:(null==(B=null==(U=v(K))?void 0:U.tenantProductInsureVO)?void 0:B.sexLimit)&&`仅限${v(X)(null==(E=null==(z=v(K))?void 0:z.tenantProductInsureVO)?void 0:E.sexLimit)}性投保`},null,8,["desc"])),[[D,"-1"!==(null==(Q=null==(F=v(K))?void 0:F.tenantProductInsureVO)?void 0:Q.sexLimit)]]):V("",!0),le("socialInsuranceLimit")?N((l(),h(ee,{key:4,title:"社保限制",desc:(null==(Y=null==(W=v(K))?void 0:W.tenantProductInsureVO)?void 0:Y.socialInsuranceLimit)&&`仅限${v(Z)(null==(R=null==(J=v(K))?void 0:J.tenantProductInsureVO)?void 0:R.socialInsuranceLimit)}社保人群投保`},null,8,["desc"])),[[D,"-1"!==(null==(ae=null==(te=v(K))?void 0:te.tenantProductInsureVO)?void 0:ae.socialInsuranceLimit)]]):V("",!0),le("occupationType")?N((l(),h(ee,{key:5,title:"职业类别",desc:v(H)(null==(ie=null==(ne=v(K))?void 0:ne.tenantProductInsureVO)?void 0:ie.occupationLimit)},null,8,["desc"])),[[D,"-1"!==(null==(de=null==(ue=v(K))?void 0:ue.tenantProductInsureVO)?void 0:de.occupationLimit)]]):V("",!0)]))]})),_:1})):V("",!0),c(j,{class:"tabs",list:v(m),sticky:"",scrollspy:""},{tab1:q((()=>{var e,t;return[n("div",Ie,[(l(!0),a(g,null,I((null==(t=null==(e=v(K))?void 0:e.tenantProductInsureVO)?void 0:t.spec)||[],((e,t)=>(l(),a("img",{key:t,src:e,class:"detail-img"},null,8,he)))),128)),c(S,{title:"产品资料"},{subTitle:q((()=>[ke])),default:q((()=>{var e,t;return[n("div",Ve,[k(" 请查看 "),(l(!0),a(g,null,I((null==(t=null==(e=v(K))?void 0:e.tenantProductInsureVO)?void 0:t.attachmentVOList)||[],((e,t)=>(l(),h(o,{key:t,class:"file-name",title:`《${e.attachmentName}》`,content:e.attachmentUri,type:v(U)(e.attachmentUri,e.attachmentType)},{default:q((()=>{var e,n;return[t!==((null==(n=null==(e=v(K))?void 0:e.tenantProductInsureVO)?void 0:n.attachmentVOList)||[]).length-1?(l(),a("span",Pe,"、")):V("",!0)]})),_:2},1032,["title","content","type"])))),128))])]})),_:1})])]})),tab2:q((()=>[c(S,{title:"理赔流程"},{default:q((()=>{var e,t;return[c(W,{list:null==(t=null==(e=v(K))?void 0:e.tenantProductInsureVO)?void 0:t.settlementProcessList},null,8,["list"])]})),_:1})])),tab3:q((()=>[c(S,{title:"常见问题"},{default:q((()=>{var e,t;return[c(ue,{list:null==(t=null==(e=v(K))?void 0:e.tenantProductInsureVO)?void 0:t.questionList},null,8,["list"])]})),_:1})])),_:1},8,["list"]),n("div",Le,[c(p,{type:"primary",onClick:ne},{default:q((()=>[k("算保费")])),_:1})])])]})),_:1}),(l(),h(z,{key:v(y),show:v(J),"onUpdate:show":t[1]||(t[1]=e=>B(J)?J.value=e:null),title:"保障详情",class:"guarantee-popup"},{default:q((()=>[v(se).length>1?(l(),h(j,{key:0,active:v(f),"onUpdate:active":t[0]||(t[0]=e=>B(f)?f.value=e:null),list:v(se).map(((e,t)=>({title:e.guaranteeType,slotName:`guarantee-${t}`}))),class:"tab"},null,8,["active","list"])):V("",!0),n("div",_e,[(l(!0),a(g,null,I(v(se)[v(f)].titleAndDescVOS,((e,t)=>(l(),a("div",{key:t,class:"guarantee-item"},[n("div",Oe,s(e.title),1),N(n("div",be,null,512),[[L,e.content]])])))),128))])])),_:1},8,["show"]))],64)}}}),[["__scopeId","data-v-bd169fe2"]]);export{we as default};
>>>>>>>> 6da178c539a513aca8b0c7a2f0178a042da657ad:dist/static/js/index-90cf1cf2.js
