!function(){var e=document.createElement("style");e.innerHTML=".page-salesman-inform .van-cell[data-v-0166f588]{display:flex;align-items:center;padding:.4rem 0}.page-salesman-inform .van-cell[data-v-0166f588] .van-cell__title{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:var(--zaui-aide-text-stress, #0d6efe);line-height:.56rem}.page-salesman-inform .van-cell[data-v-0166f588] .van-cell__value{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#99a9c0;line-height:.56rem}.page-salesman-inform .van-cell .active[data-v-0166f588],.page-salesman-inform[data-v-0166f588] .is-active .van-cell__value span{color:var(--zaui-brand, #0d6efe)}.page-salesman-inform .resign[data-v-0166f588]{font-size:.37333rem;color:var(--zaui-aide-text-stress, #0d6efe)}.page-salesman-inform .date[data-v-0166f588]{margin-top:.32rem;font-size:.37333rem;color:#99a9c0;line-height:.53333rem}.page-salesman-inform .inform-file[data-v-0166f588]{display:flex;position:absolute;bottom:2.33333rem;padding:0 .4rem}.page-salesman-inform .inform-file .tips[data-v-0166f588]{margin-left:.29333rem;font-size:.37333rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.53333rem}.page-salesman-inform .inform-file .tips>span[data-v-0166f588]{color:var(--zaui-aide-text-stress, #0d6efe)}.page-salesman-inform .inform-file .next-btn[data-v-0166f588]{padding:.4rem 0}.page-salesman-inform .inform-file .next-btn .van-button[data-v-0166f588]{border-radius:.10667rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-92a8f610.js","./index-legacy-45ca4920.js","./inform-legacy-b9eaaa5f.js","./useStorage-legacy-2007e389.js","./verify-legacy-67e72a1c.js","./notice-legacy-fe9e1ef6.js"],(function(e){"use strict";var a,t,n,i,o,l,r,s,d,c,u,f,g,v,p,m,y,h,C,b,T,x,_,k,j,S,q,D,I,L,z,P,A,N,E,F;return{setters:[function(e){a=e.g,t=e.a9,n=e.O,i=e.E,o=e.d,l=e.M,r=e.h,s=e.r,d=e.j,c=e.k,u=e.m,f=e.p,g=e.n,v=e.G,p=e.L,m=e.A,y=e.F,h=e.z,C=e.J,b=e.C,T=e.T},function(e){x=e._,_=e.a,k=e.B,j=e.g,S=e.A,q=e.q,D=e.n,I=e.b},function(e){L=e.l,z=e.g},function(e){P=e.s},function(e){A=e.s},function(e){N=e.d,E=e.A,F=e.e}],execute:function(){const M={class:"date"},R={class:"inform-file"},w={class:"tips"},B=b(" 您的签名将被用于"),G=b("文件 "),Y={class:"footer-button"},O=b("下一步"),U=a({setup(e){const a=t(),b=n(),{productCode:x="MMBBSF",agentCode:U="65434444",tenantId:V="9991000007",agencyCode:$="3311222",insurerCode:H="zhongan",productCategory:J=1,templateId:W=1,orderNo:K="2022080217103534947"}=b.query,Q=i(null),X=i(!1),Z=o().format("YYYY-MM-DD"),ee=i(""),ae=i(),te=()=>{var e;null===(e=Q.value)||void 0===e||e.clear()},ne=l({noticeType:"",materialSource:"",noticeList:[],pageData:{}});r((()=>{j({orderNo:K,saleUserId:U,tenantId:V}).then((({code:e,data:a})=>{"10000"===e&&(Object.assign(ne.pageData,a),a.tenantOrderAttachmentList.forEach((e=>{e.category===S.ELECTRIC_SIGN&&e.objectType===q.AGENT&&Q.value.setDataURL(e.fileBase64)})))})),L({insurerCode:H,orderNo:K,productCategory:J,tenantId:V,noticeType:E,objectType:F}).then((({code:e,data:a})=>{"10000"===e&&(ne.noticeList=[...ne.noticeList,...a])}))}));const ie=()=>{var e,t;if(!(ne.noticeList&&ne.noticeList.every((e=>1===e.isDone))))return void T("请完成所有告知进行下一步");if(null!==(e=Q.value)&&void 0!==e&&e.isEmpty())return void T("请完成代理人签字进行下一步");if(!X.value)return void T("请勾选同意签名");const n=null===(t=Q.value)||void 0===t?void 0:t.save();A("AGENT",n,ne.pageData.id,V).then((e=>{e&&D({...ne.pageData,extInfo:{...ne.pageData.extInfo,templateId:W,pageCode:"salesNotice"},venderCode:H}).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&a.push({path:I[t.pageAction.data.nextPageCode],query:{...b.query}})}))}))};return(e,t)=>{const n=s("van-cell"),i=s("ProSign"),o=s("van-checkbox"),l=s("van-button"),r=s("ProPageWrap");return d(),c(r,{class:"page-salesman-inform"},{default:u((()=>[f(_,{title:"营销员告知书"},{default:u((()=>[(d(!0),g(y,null,v(m(ne).noticeList,(e=>(d(),c(n,{key:e.id,class:p({"is-active":2===e.isDone}),title:`《${e.title}》`,"is-link":"",value:""+(1===e.isDone?"已完成":"去完成"),onClick:t=>{return n=e,P.set("questionData",n),void a.push({path:"/healthNotice",query:{questionnaireType:n.questionnaireType,...b.query}});var n}},null,8,["class","title","value","onClick"])))),128))])),_:1}),f(_,{title:"营销员签字","show-divider":!1,"show-line":!1},{extra:u((()=>[h("div",{class:"resign",onClick:te},"重签")])),default:u((()=>[f(i,{ref_key:"agentSignRef",ref:Q,selector:"sign2"},null,512),h("div",M,"签名日期： "+C(m(Z)),1)])),_:1}),h("div",R,[f(o,{modelValue:X.value,"onUpdate:modelValue":t[0]||(t[0]=e=>X.value=e),shape:"square"},null,8,["modelValue"]),h("p",w,[B,(d(!0),g(y,null,v(m(ne).noticeList,((e,a)=>(d(),c(k,{key:a,class:"file",title:`《${e.title}》`,content:ae.value,type:ee.value,onClick:a=>(e=>{const{id:a,objectType:t}=e,n={1:"pdf",2:"richText",3:"link"};z({insurerCode:H,id:a,objectType:t,productCategory:J,orderNo:K,tenantId:V}).then((({code:e,data:a})=>{"10000"===e&&((null==a?void 0:a[0].questionType)===N?(ee.value="question",ae.value=a):(1===(null==a?void 0:a[0].textType)&&null!=a&&a[0].content.includes("png")?ee.value="picture":ee.value=n[null==a?void 0:a[0].textType],ae.value=null==a?void 0:a[0].content))}))})(e)},null,8,["title","content","type","onClick"])))),128)),G])]),h("div",Y,[f(l,{type:"primary",block:"",onClick:ie},{default:u((()=>[O])),_:1})])])),_:1})}}});e("default",x(U,[["__scopeId","data-v-0166f588"]]))}}}))}();
