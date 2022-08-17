!function(){var e=document.createElement("style");e.innerHTML=".page-salesman-inform .van-cell[data-v-ca08dbe2]{display:flex;align-items:center;padding:.4rem 0}.page-salesman-inform .van-cell[data-v-ca08dbe2] .van-cell__title{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:var(--zaui-aide-text-stress, #0d6efe);line-height:.56rem}.page-salesman-inform .van-cell[data-v-ca08dbe2] .van-cell__value{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#99a9c0;line-height:.56rem}.page-salesman-inform .van-cell .active[data-v-ca08dbe2],.page-salesman-inform[data-v-ca08dbe2] .is-active .van-cell__value span{color:#0d6efe}.page-salesman-inform .resign[data-v-ca08dbe2]{font-size:.37333rem;color:var(--zaui-aide-text-stress, #0d6efe)}.page-salesman-inform .inform-file[data-v-ca08dbe2]{display:flex;position:absolute;bottom:2.33333rem;padding:0 .4rem}.page-salesman-inform .inform-file .tips[data-v-ca08dbe2]{margin-left:.29333rem;font-size:.37333rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.53333rem}.page-salesman-inform .inform-file .tips>span[data-v-ca08dbe2]{color:var(--zaui-aide-text-stress, #0d6efe)}.page-salesman-inform .inform-file .next-btn[data-v-ca08dbe2]{padding:.4rem 0}.page-salesman-inform .inform-file .next-btn .van-button[data-v-ca08dbe2]{border-radius:.10667rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-fc9bbab5.js","./index-legacy-86ce05c9.js","./inform-legacy-659485f8.js","./index-legacy-cfc490fa.js","./useStorage-legacy-bd02eb62.js","./verify-legacy-d2cb9d50.js"],(function(e){"use strict";var a,t,n,i,o,l,r,s,c,d,u,f,g,m,v,p,y,b,h,C,x,_,P,S,j,T,k,D,I;return{setters:[function(e){a=e.g,t=e.aj,n=e.Q,i=e.E,o=e.M,l=e.h,r=e.r,s=e.j,c=e.k,d=e.m,u=e.p,f=e.n,g=e.G,m=e.A,v=e.F,p=e.z,y=e.C,b=e.T,h=e.L},function(e){C=e._,x=e.l,_=e.H,P=e.G,S=e.P},function(e){j=e.l},function(e){T=e.a,k=e.n},function(e){D=e.s},function(e){I=e.s}],execute:function(){const L={class:"inform-file"},q={class:"tips"},z=y(" 您的签名将被用于"),F=y("文件 "),E={class:"footer-button"},N=y("下一步"),A=a({setup(e){const a=t(),y=n(),{productCode:C="MMBBSF",agentCode:A="65434444",tenantId:w="9991000007",agencyCode:R="3311222",insurerCode:G="zhongan",productCategory:M=1,templateId:B=1,orderNo:U="2022080217103534947"}=y.query,V=i(null),H=i(!1),O=()=>{var e;null===(e=V.value)||void 0===e||e.clear()},$=o({noticeType:"",materialSource:"",noticeList:[],pageData:{}});l((()=>{T({orderNo:U,saleUserId:A,tenantId:w}).then((({code:e,data:a})=>{"10000"===e&&(Object.assign($.pageData,a),a.tenantOrderAttachmentList.forEach((e=>{e.category===_.ELECTRIC_SIGN&&e.objectType===P.AGENT&&V.value.setDataURL(e.fileBase64)})))})),j({insurerCode:G,orderNo:U,productCategory:M,tenantId:w,noticeType:9,objectType:3}).then((({code:e,data:a})=>{"10000"===e&&($.noticeList=a)}))}));const Q=()=>{var e,t;if(!($.noticeList&&$.noticeList.every((e=>1===e.isDone))))return void b("请完成所有告知进行下一步");if(null!==(e=V.value)&&void 0!==e&&e.isEmpty())return void b("请完成代理人签字进行下一步");if(!H.value)return void b("请勾选同意签名");const n=null===(t=V.value)||void 0===t?void 0:t.save();I("AGENT",n,$.pageData.id,w).then((e=>{e&&k({...$.pageData,extInfo:{...$.pageData.extInfo,templateId:B,pageCode:"salesNotice"},venderCode:G}).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&a.push({path:S[t.pageAction.data.nextPageCode],query:{...y.query}})}))}))};return(e,t)=>{const n=r("van-cell"),i=r("ProSign"),o=r("van-checkbox"),l=r("ProPDFviewer"),b=r("van-button"),C=r("ProPageWrap");return s(),c(C,{class:"page-salesman-inform"},{default:d((()=>[u(x,{title:"营销员告知书"},{default:d((()=>[(s(!0),f(v,null,g(m($).noticeList,(e=>(s(),c(n,{key:e.id,class:h({"is-active":2===e.isDone}),title:`《${e.title}》`,"is-link":"",value:""+(1===e.isDone?"已完成":"去完成"),onClick:t=>{return n=e,D.set("questionData",n),void a.push({path:"/healthNotice",query:{questionnaireType:n.questionnaireType,...y.query}});var n}},null,8,["class","title","value","onClick"])))),128))])),_:1}),u(x,{title:"营销员签字","show-divider":!1,"show-line":!1},{extra:d((()=>[p("div",{class:"resign",onClick:O},"重签")])),default:d((()=>[u(i,{ref_key:"agentSignRef",ref:V,selector:"sign2"},null,512)])),_:1}),p("div",L,[u(o,{modelValue:H.value,"onUpdate:modelValue":t[0]||(t[0]=e=>H.value=e),shape:"square"},null,8,["modelValue"]),p("p",q,[z,(s(!0),f(v,null,g(m($).noticeList,((e,a)=>(s(),c(l,{key:a,class:"file",title:`《${e.title}》`},null,8,["title"])))),128)),F])]),p("div",E,[u(b,{type:"primary",block:"",onClick:Q},{default:d((()=>[N])),_:1})])])),_:1})}}});e("default",C(A,[["__scopeId","data-v-ca08dbe2"]]))}}}))}();
