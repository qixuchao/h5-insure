import{h as e,a8 as t,N as n,C as a,a9 as o,r,k as l,l as u,m as i,Q as s,x as d,E as c,y as p,I as m,F as f,p as v,aa as y,z as g,B as C,T as b,ae as S,G as I,ab as k,ac as h,ad as _,v as T,j as w,L as q}from"./vendor-a7f495fb.js";import{_ as j,P as V,a as N,g as Q}from"./index-099ce742.js";/* empty css                   */import{s as x,g as P}from"./inform-7263b1f3.js";import{s as O}from"./useStorage-142ac6a2.js";import{N as U}from"./notice-a4a1c218.js";const A={class:"problem"},D={class:"footer-button"},E=C("提交");var J=j(e({props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(e,{emit:C}){const S=e;t();const I=n(),k=a([]),{questionnaireType:h}=I.query,{orderNo:_="2022021815432987130620",productCode:T="CQ75CQ76",templateId:w=1,agentCode:q="65434444",orderId:j=13005,tenantId:x=9991000007}=I.query,P={1:"投保人",2:"被保人",3:"代理人"},O=a([]),U=e=>e?JSON.parse(e).map((e=>({title:e.value,value:e.uid}))):[],J=()=>{(O.value||[]).filter((e=>{var t;return 0===e.singleAnswer||e.singleAnswer||(null==(t=e.multipleChoose)?void 0:t.length)})).length!==O.value.length?b("请完成所有题目进行下一步"):C("onSubmitCurrentStatus",1,JSON.stringify(O.value))},L=()=>{Q({orderNo:_,saleUserId:q,tenantId:x}).then((({code:e,data:t})=>{if("10000"===e){const e=t.tenantOrderNoticeList.findIndex((e=>1===e.isDone&&+e.objectId===S.currentPageInfo[0].questionnaireId));O.value=-1!==e?(e=>JSON.parse(e))(t.tenantOrderNoticeList[e].content):S.currentPageInfo.map((e=>2===e.questionType?{multipleChoose:[],...e}:{singleAnswer:3===e.questionType?0:"",...e}))}}))};return o((()=>{k.value=[],L()})),(e,t)=>{const n=r("van-radio"),a=r("van-cell"),o=r("van-cell-group"),C=r("van-radio-group"),b=r("van-checkbox"),S=r("van-checkbox-group"),I=r("van-field"),_=r("van-button"),T=r("ProPageWrap");return l(),u(T,{class:"com-question"},{default:i((()=>[s(N,{title:`${P[g(h)]}健康告知书`},{default:i((()=>[(l(!0),d(f,null,c(O.value,((e,r)=>(l(),d("div",{key:r,class:"question-item"},[p("div",A,m(r+1)+". "+m(e.title),1),1===e.questionType?(l(),u(C,{key:0,modelValue:e.singleAnswer,"onUpdate:modelValue":t=>e.singleAnswer=t},{default:i((()=>[s(o,{inset:""},{default:i((()=>[(l(!0),d(f,null,c(U(e.options),((t,o)=>(l(),u(a,{key:o,title:t.title,clickable:"",onClick:t=>e.singleAnswer=o},{"right-icon":i((()=>[s(n,{name:o},null,8,["name"])])),_:2},1032,["title","onClick"])))),128))])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"])):v("",!0),2===e.questionType?(l(),u(S,{key:1,modelValue:e.multipleChoose,"onUpdate:modelValue":t=>e.multipleChoose=t},{default:i((()=>[s(o,{inset:""},{default:i((()=>[(l(!0),d(f,null,c(U(e.options),((e,n)=>(l(),u(a,{key:e.uid,clickable:"",title:e.title,onClick:e=>(e=>{k.value[e].toggle()})(n)},{"right-icon":i((()=>[s(b,{ref_for:!0,ref:e=>k.value[n]=e,shape:"square",name:n,onClick:t[0]||(t[0]=y((()=>{}),["stop"]))},null,8,["name"])])),_:2},1032,["title","onClick"])))),128))])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"])):v("",!0),3===e.questionType?(l(),u(V,{key:2,modelValue:e.singleAnswer,"onUpdate:modelValue":t=>e.singleAnswer=t,options:[{label:"是",value:"Y"},{label:"否",value:"N"}]},null,8,["modelValue","onUpdate:modelValue"])):v("",!0),4===e.questionType?(l(),u(o,{key:3,inset:""},{default:i((()=>[s(I,{modelValue:e.singleAnswer,"onUpdate:modelValue":t=>e.singleAnswer=t,placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)):v("",!0)])))),128))])),_:1},8,["title"]),p("div",D,[s(_,{type:"primary",block:"",onClick:J},{default:i((()=>[E])),_:1})])])),_:1})}}}),[["__scopeId","data-v-43eb6cf6"]]);const L={class:"com-document"},W={class:"title"},B={class:"content"},G={class:"footer-button"},z=C("了解并继续");var F=j(e({props:{currentPageInfo:{default:()=>[]}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;return(e,a)=>{const o=r("van-button"),d=r("ProPageWrap"),c=S("dompurify-html");return l(),u(d,null,{default:i((()=>{var e,r;return[p("div",L,[p("div",W,m(null==(e=n.currentPageInfo[0])?void 0:e.title),1),I(p("div",B,null,512),[[c,null==(r=n.currentPageInfo[0])?void 0:r.content]]),p("div",G,[s(o,{type:"primary",onClick:a[0]||(a[0]=e=>t("onSubmitCurrentStatus",1))},{default:i((()=>[z])),_:1})])])]})),_:1})}}}),[["__scopeId","data-v-6e53a5c6"]]);const Y={class:"com-pdf-viewer"},$=["id","isee_pdf"],H={key:2,class:"footer-button"},K=C("部分为是"),M=C("以上皆否"),R={key:3,class:"footer-button"},X=C("了解并继续");var Z=j(e({props:{materialType:{type:String,default:""},url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;k.exports.GlobalWorkerOptions.workerSrc=h;const o=_(),c=a(!1),p=a(!0),m=T((()=>["png","jpg","jpeg"].some((e=>n.url.includes(e))))),f=async()=>{c.value=!0,setTimeout((()=>{(()=>{const e=document.getElementById(o);if(e.hasChildNodes())return void(p.value=!1);k.exports.getDocument({url:n.url}).promise.then((t=>{const n=t.numPages;for(let a=1;a<=n;a++)t.getPage(a).then((t=>{const n=t.getViewport({scale:1}),a=document.createElement("canvas"),o=a.getContext("2d");a.width=n.width,a.height=n.height,a.style.width="100%",e.append(a);const r={canvasContext:o,viewport:n};t.render(r),p.value=!1}))}))})()}),0)};return w((()=>{f()})),(e,a)=>{const c=r("van-image"),p=r("van-button");return l(),d("div",Y,[g(m)?(l(),u(c,{key:0,width:"100%",height:"80vh",fit:"contain",src:n.url},null,8,["src"])):(l(),d("div",{key:1,id:g(o),isee_pdf:e.pdfUrl,class:"pdf-wapper"},null,8,$)),"question"===n.materialType?(l(),d("div",H,[s(p,{plain:"",type:"primary",onClick:a[0]||(a[0]=e=>t("onSubmitCurrentStatus",2))},{default:i((()=>[K])),_:1}),s(p,{type:"primary",onClick:a[1]||(a[1]=e=>t("onSubmitCurrentStatus",1))},{default:i((()=>[M])),_:1})])):(l(),d("div",R,[s(p,{type:"primary",onClick:a[2]||(a[2]=e=>t("onSubmitCurrentStatus",1))},{default:i((()=>[X])),_:1})]))])}}}),[["__scopeId","data-v-a4e458ca"]]);const ee={class:"iframe-wrap"},te=["src"],ne={key:0,class:"footer-button"},ae=C("部分为是"),oe=C("以上皆否"),re={key:1,class:"footer-button"},le=C("了解并继续");var ue=j(e({props:{materialType:{type:String,default:""},url:{type:String,default:""}},emits:["onSubmitCurrentStatus"],setup(e,{emit:t}){const n=e;return(e,a)=>{const o=r("van-button");return l(),d("div",ee,[p("iframe",{src:n.url,frameborder:"0"},null,8,te),"question"===n.materialType?(l(),d("div",ne,[s(o,{plain:"",type:"primary",onClick:a[0]||(a[0]=e=>t("onSubmitCurrentStatus",2))},{default:i((()=>[ae])),_:1}),s(o,{type:"primary",onClick:a[1]||(a[1]=e=>t("onSubmitCurrentStatus",1))},{default:i((()=>[oe])),_:1})])):(l(),d("div",re,[s(o,{type:"primary",onClick:a[2]||(a[2]=e=>t("onSubmitCurrentStatus",1))},{default:i((()=>[le])),_:1})]))])}}}),[["__scopeId","data-v-1fc4d3ec"]]);const ie={class:"com-health-notice"},se=e({setup(e){const a=t(),o=n(),r=O.get("questionData"),{materialType:i="question",questionnaireType:s="1",orderNo:c="2022021815432987130620",productCode:p="CQ75CQ76",templateId:m=1,agentCode:f="65434444",orderId:y=13005,tenantId:C=9991000007}=o.query&&o.query,b=q({pageData:{},currentQuestionInfo:[]}),S=T((()=>"2"===s)),I=T((()=>{var e;return"1"===s&&([1].includes(null==(e=b.currentQuestionInfo[0])?void 0:e.textType)||1===(null==r?void 0:r.materialSource))})),k=T((()=>{var e;return"1"===s&&([2].includes(null==(e=b.currentQuestionInfo[0])?void 0:e.textType)||2===(null==r?void 0:r.materialSource))})),h=T((()=>{var e;return"1"===s&&([3].includes(null==(e=b.currentQuestionInfo[0])?void 0:e.textType)||3===(null==r?void 0:r.materialSource))})),_=(e,t)=>{var n;const{id:o,objectType:l,noticeObject:u,materialSource:i}=r;x({content:t||(null==(n=b.currentQuestionInfo[0])?void 0:n.content),contentType:s||"3",isDone:e,noticeType:U[l]||"99",objectId:o,objectType:l||u,orderId:b.pageData.id,orderNo:c,tenantId:C}).then((({code:e,data:t})=>{"10000"===e&&a.go(-1)}))};return w((()=>{Q({orderNo:c,saleUserId:f,tenantId:C}).then((({code:e,data:t})=>{"10000"===e&&Object.assign(b.pageData,t)})),(null==r?void 0:r.materialSource)?b.currentQuestionInfo=[{...null==r?void 0:r.materialSource,title:null==r?void 0:r.materialName,content:null==r?void 0:r.materialContent}]:(()=>{const{insurerCode:e,id:t,objectType:n,productCategory:a}=r;P({insurerCode:e,id:t,objectType:n,productCategory:a,orderNo:c,tenantId:C}).then((({code:e,data:t})=>{"10000"===e&&(b.currentQuestionInfo=t)}))})()})),(e,t)=>{var n,a;return l(),d("div",ie,[g(S)?(l(),u(J,{key:0,"current-page-info":g(b).currentQuestionInfo,onOnSubmitCurrentStatus:_},null,8,["current-page-info"])):v("",!0),g(k)?(l(),u(F,{key:1,"material-type":g(i),"current-page-info":g(b).currentQuestionInfo,onOnSubmitCurrentStatus:_},null,8,["material-type","current-page-info"])):v("",!0),g(I)?(l(),u(Z,{key:2,"material-type":g(i),url:null==(n=g(b).currentQuestionInfo[0])?void 0:n.content,onOnSubmitCurrentStatus:_},null,8,["material-type","url"])):v("",!0),g(h)?(l(),u(ue,{key:3,"material-type":g(i),url:null==(a=g(b).currentQuestionInfo[0])?void 0:a.content,onOnSubmitCurrentStatus:_},null,8,["material-type","url"])):v("",!0)])}}});export{se as default};
