import{_ as e,d as t,u as n,a,r,o,b as l,c as u,e as s,w as i,f as d,P as c,g as p,h as m,F as f,i as y,j as v,t as g,k as C,l as S,m as I,n as b,T as _,p as k,R as h,C as T,q,s as w,v as Q,x as V,y as j,B as N,z as P,A,D as O,E as U,G as x,I as D,H as $,J}from"./index-0fe7bae3.js";import{P as z}from"./pdfh5-008ca364.js";import{s as L,g as W}from"./inform-2010c689.js";import{N as B}from"./notice-a5228c22.js";const E={class:"problem"},F={class:"footer-button"};var G=e(t({__name:"question",props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const P=e;n();const A=a(),O=r([]),{questionnaireType:U}=A.query,{orderNo:x="2022021815432987130620",productCode:D="CQ75CQ76",templateId:$=1,agentCode:J="65434444",orderId:z=13005,tenantId:L=9991000007}=A.query,W={1:"投保人",2:"被保人",3:"代理人"},B=r([]),G=e=>e?JSON.parse(e).map((e=>({title:e.value,value:e.uid}))):[],H=()=>{(B.value||[]).filter((e=>{var t;return 0===e.singleAnswer||e.singleAnswer||(null==(t=e.multipleChoose)?void 0:t.length)})).length!==B.value.length?_("请完成所有题目进行下一步"):t("onSubmitCurrentStatus",1,JSON.stringify(B.value))},R=()=>{k({orderNo:x,saleUserId:J,tenantId:L}).then((({code:e,data:t})=>{if("10000"===e){const e=t.tenantOrderNoticeList.findIndex((e=>1===e.isDone&&+e.objectId===P.currentPageInfo[0].questionnaireId));B.value=-1!==e?(e=>JSON.parse(e))(t.tenantOrderNoticeList[e].content):P.currentPageInfo.map((e=>2===e.questionType?{multipleChoose:[],...e}:{singleAnswer:3===e.questionType?0:"",...e}))}}))};return o((()=>{O.value=[],R()})),(e,t)=>{const n=h,a=T,r=q,o=w,_=Q,k=V,P=j,A=N,x=l("ProPageWrap");return u(),s(x,{class:"com-question"},{default:i((()=>[d(c,{title:`${W[p(U)]}健康告知书`},{default:i((()=>[(u(!0),m(f,null,y(B.value,((e,l)=>(u(),m("div",{key:l,class:"question-item"},[v("div",E,g(l+1)+". "+g(e.title),1),1===e.questionType?(u(),s(o,{key:0,modelValue:e.singleAnswer,"onUpdate:modelValue":t=>e.singleAnswer=t},{default:i((()=>[d(r,{inset:""},{default:i((()=>[(u(!0),m(f,null,y(G(e.options),((t,r)=>(u(),s(a,{key:r,title:t.title,clickable:"",onClick:t=>e.singleAnswer=r},{"right-icon":i((()=>[d(n,{name:r},null,8,["name"])])),_:2},1032,["title","onClick"])))),128))])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"])):C("",!0),2===e.questionType?(u(),s(k,{key:1,modelValue:e.multipleChoose,"onUpdate:modelValue":t=>e.multipleChoose=t},{default:i((()=>[d(r,{inset:""},{default:i((()=>[(u(!0),m(f,null,y(G(e.options),((e,n)=>(u(),s(a,{key:e.uid,clickable:"",title:e.title,onClick:e=>(e=>{O.value[e].toggle()})(n)},{"right-icon":i((()=>[d(_,{ref_for:!0,ref:e=>O.value[n]=e,shape:"square",name:n,onClick:t[0]||(t[0]=S((()=>{}),["stop"]))},null,8,["name"])])),_:2},1032,["title","onClick"])))),128))])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"])):C("",!0),3===e.questionType?(u(),s(I,{key:2,modelValue:e.singleAnswer,"onUpdate:modelValue":t=>e.singleAnswer=t,options:[{label:"是",value:"Y"},{label:"否",value:"N"}]},null,8,["modelValue","onUpdate:modelValue"])):C("",!0),4===e.questionType?(u(),s(r,{key:3,inset:""},{default:i((()=>[d(P,{modelValue:e.singleAnswer,"onUpdate:modelValue":t=>e.singleAnswer=t,placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)):C("",!0)])))),128))])),_:1},8,["title"]),v("div",F,[d(A,{type:"primary",block:"",onClick:H},{default:i((()=>[b("提交")])),_:1})])])),_:1})}}}),[["__scopeId","data-v-5d98a972"]]);const H={class:"com-document"},R={class:"title"},Y={class:"content"},K={class:"footer-button"};var M=e(t({__name:"InsuranceNotice",props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;return(e,a)=>{const r=N,o=l("ProPageWrap"),c=P("dompurify-html");return u(),s(o,null,{default:i((()=>{var e,o;return[v("div",H,[v("div",R,g(null==(e=n.currentPageInfo[0])?void 0:e.title),1),A(v("div",Y,null,512),[[c,null==(o=n.currentPageInfo[0])?void 0:o.content]]),v("div",K,[d(r,{type:"primary",onClick:a[0]||(a[0]=e=>t("onSubmitCurrentStatus",1))},{default:i((()=>[b("了解并继续")])),_:1})])])]})),_:1})}}}),[["__scopeId","data-v-6e53a5c6"]]);const X={class:"com-pdf-viewer"},Z=["id","isee_pdf"],ee={key:2,class:"footer-button"},te={key:3,class:"footer-button"};var ne=e(t({__name:"file",props:{materialType:{type:String,default:""},url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e,a=O(),o=r(!1);r(!0);const l=r(null),c=U((()=>["png","jpg","jpeg"].some((e=>n.url.includes(e))))),f=async()=>{o.value=!0,setTimeout((()=>{(()=>{var e;try{l.value=new z(`#${a}`,{pdfurl:n.url,renderType:"canvas",lazy:!0}),null==(e=l.value)||e.on("complete",((e,t,n)=>{console.log(`状态：${e}，信息：${t}，耗时：${n}毫秒`),"error"===e&&_("文件损坏，无法打开！")}))}catch(t){console.log("error",t)}})()}),0)};return x((()=>{f()})),(e,r)=>{const o=D,l=N;return u(),m("div",X,[p(c)?(u(),s(o,{key:0,width:"100%",height:"80vh",fit:"contain",src:n.url},null,8,["src"])):(u(),m("div",{key:1,id:p(a),isee_pdf:e.pdfUrl,class:"pdf-wapper"},null,8,Z)),"question"===n.materialType?(u(),m("div",ee,[d(l,{plain:"",type:"primary",onClick:r[0]||(r[0]=e=>t("onSubmitCurrentStatus",2))},{default:i((()=>[b("部分为是")])),_:1}),d(l,{type:"primary",onClick:r[1]||(r[1]=e=>t("onSubmitCurrentStatus",1))},{default:i((()=>[b("以上皆否")])),_:1})])):(u(),m("div",te,[d(l,{type:"primary",onClick:r[2]||(r[2]=e=>t("onSubmitCurrentStatus",1))},{default:i((()=>[b("了解并继续")])),_:1})]))])}}}),[["__scopeId","data-v-573d8b28"]]);const ae={class:"iframe-wrap"},re=["src"],oe={key:0,class:"footer-button"},le={key:1,class:"footer-button"};var ue=e(t({__name:"link",props:{materialType:{type:String,default:""},url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;return(e,a)=>{const r=N;return u(),m("div",ae,[v("iframe",{src:n.url,frameborder:"0"},null,8,re),"question"===n.materialType?(u(),m("div",oe,[d(r,{plain:"",type:"primary",onClick:a[0]||(a[0]=e=>t("onSubmitCurrentStatus",2))},{default:i((()=>[b("部分为是")])),_:1}),d(r,{type:"primary",onClick:a[1]||(a[1]=e=>t("onSubmitCurrentStatus",1))},{default:i((()=>[b("以上皆否")])),_:1})])):(u(),m("div",le,[d(r,{type:"primary",onClick:a[2]||(a[2]=e=>t("onSubmitCurrentStatus",1))},{default:i((()=>[b("了解并继续")])),_:1})]))])}}}),[["__scopeId","data-v-1fc4d3ec"]]);const se={class:"com-health-notice"},ie=t({__name:"index",setup(e){const t=n(),r=a(),o=$.get("questionData"),{materialType:l="question",questionnaireType:i="1",orderNo:d="2022021815432987130620",productCode:c="CQ75CQ76",templateId:f=1,agentCode:y="65434444",orderId:v=13005,tenantId:g=9991000007}=r.query&&r.query,S=J({pageData:{},currentQuestionInfo:[]}),I=U((()=>"2"===i)),b=U((()=>{var e;return"1"===i&&([1].includes(null==(e=S.currentQuestionInfo[0])?void 0:e.textType)||1===(null==o?void 0:o.materialSource))})),_=U((()=>{var e;return"1"===i&&([2].includes(null==(e=S.currentQuestionInfo[0])?void 0:e.textType)||2===(null==o?void 0:o.materialSource))})),h=U((()=>{var e;return"1"===i&&([3].includes(null==(e=S.currentQuestionInfo[0])?void 0:e.textType)||3===(null==o?void 0:o.materialSource))})),T=(e,n)=>{var a;const{id:r,objectType:l,noticeObject:u,materialSource:s}=o;L({content:n||(null==(a=S.currentQuestionInfo[0])?void 0:a.content),contentType:i||"3",isDone:e,noticeType:B[l]||"99",objectId:r,objectType:l||u,orderId:S.pageData.id,orderNo:d,tenantId:g}).then((({code:e,data:n})=>{"10000"===e&&t.go(-1)}))};return x((()=>{k({orderNo:d,saleUserId:y,tenantId:g}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(S.pageData,t)})),(null==o?void 0:o.materialSource)?(S.currentQuestionInfo=[{...null==o?void 0:o.materialSource,title:null==o?void 0:o.materialName,content:null==o?void 0:o.materialContent}],console.log("===>",S.currentQuestionInfo)):(()=>{const{insurerCode:e,id:t,objectType:n,productCategory:a}=o;W({insurerCode:e,id:t,objectType:n,productCategory:a,orderNo:d,tenantId:g}).then((({code:e,data:t})=>{"10000"===e&&(S.currentQuestionInfo=t)}))})()})),(e,t)=>{var n,a;return u(),m("div",se,[p(I)?(u(),s(G,{key:0,"current-page-info":p(S).currentQuestionInfo,onOnSubmitCurrentStatus:T},null,8,["current-page-info"])):C("",!0),p(_)?(u(),s(M,{key:1,"material-type":p(l),"current-page-info":p(S).currentQuestionInfo,onOnSubmitCurrentStatus:T},null,8,["material-type","current-page-info"])):C("",!0),p(b)?(u(),s(ne,{key:2,"material-type":p(l),url:null==(n=p(S).currentQuestionInfo[0])?void 0:n.content,onOnSubmitCurrentStatus:T},null,8,["material-type","url"])):C("",!0),p(h)?(u(),s(ue,{key:3,"material-type":p(l),url:null==(a=p(S).currentQuestionInfo[0])?void 0:a.content,onOnSubmitCurrentStatus:T},null,8,["material-type","url"])):C("",!0)])}}});export{ie as default};
