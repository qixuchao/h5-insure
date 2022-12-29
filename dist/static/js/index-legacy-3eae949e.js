!function(){var e=document.createElement("style");e.innerHTML=".page-salesman-inform .van-cell[data-v-1d1c7e90]{display:flex;align-items:center;padding:.4rem 0}.page-salesman-inform .van-cell[data-v-1d1c7e90] .van-cell__title{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:var(--zaui-aide-text-stress, #0d6efe);line-height:.56rem}.page-salesman-inform .van-cell[data-v-1d1c7e90] .van-cell__value{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#99a9c0;line-height:.56rem}.page-salesman-inform .van-cell .active[data-v-1d1c7e90],.page-salesman-inform[data-v-1d1c7e90] .is-active .van-cell__value span{color:var(--van-primary-color, var(--zaui-brand))}.page-salesman-inform .resign[data-v-1d1c7e90]{font-size:.37333rem;color:var(--zaui-aide-text-stress, #0d6efe)}.page-salesman-inform .date[data-v-1d1c7e90]{margin-top:.32rem;font-size:.37333rem;color:#99a9c0;line-height:.53333rem}.page-salesman-inform .inform-file[data-v-1d1c7e90]{display:flex;position:absolute;bottom:2.33333rem;padding:0 .4rem}.page-salesman-inform .inform-file .tips[data-v-1d1c7e90]{margin-left:.29333rem;font-size:.37333rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.53333rem}.page-salesman-inform .inform-file .tips>span[data-v-1d1c7e90]{color:var(--zaui-aide-text-stress, #0d6efe)}.page-salesman-inform .inform-file .next-btn[data-v-1d1c7e90]{padding:.4rem 0}.page-salesman-inform .inform-file .next-btn .van-button[data-v-1d1c7e90]{border-radius:.10667rem}\n",document.head.appendChild(e),System.register(["./index-legacy-707ef4fc.js","./inform-legacy-6a15da7b.js","./useStorage-legacy-8976d5f3.js","./verify-legacy-b4aa252c.js","./notice-legacy-6932be1e.js","./pdfh5-legacy-783b46b8.js"],(function(e){"use strict";var a,t,n,i,o,l,r,s,c,d,u,f,g,p,m,v,y,h,C,b,T,x,_,k,D,S,j,I,q,z,L,N,P,F,A,E,w;return{setters:[function(e){a=e._,t=e.d,n=e.u,i=e.a,o=e.r,l=e.$,r=e.z,s=e.y,c=e.b,d=e.c,u=e.e,f=e.w,g=e.f,p=e.g,m=e.h,v=e.B,y=e.l,h=e.F,C=e.m,b=e.i,T=e.t,x=e.ak,_=e.n,k=e.p,D=e.a5,S=e.a6,j=e.T,I=e.C,q=e.N,z=e.D},function(e){L=e.l,N=e.g},function(e){P=e.s},function(e){F=e.s},function(e){A=e.d,E=e.A,w=e.e},function(){}],execute:function(){const R={class:"date"},M={class:"inform-file"},B={class:"tips"},Y=_(" 您的签名将被用于"),G=_("文件 "),U={class:"footer-button"},V=_("下一步"),$=t({setup(e){const a=n(),t=i(),{productCode:_="MMBBSF",agentCode:$="65434444",tenantId:O="9991000007",agencyCode:H="3311222",insurerCode:W="zhongan",productCategory:J=1,templateId:K=1,orderNo:Q="2022080217103534947"}=t.query,X=o(null),Z=o(!1),ee=l().format("YYYY-MM-DD"),ae=o(""),te=o(),ne=()=>{X.value?.clear()},ie=r({noticeType:"",materialSource:"",noticeList:[],pageData:{}});s((()=>{k({orderNo:Q,saleUserId:$,tenantId:O}).then((({code:e,data:a})=>{"10000"===e&&(Object.assign(ie.pageData,a),a.tenantOrderAttachmentList.forEach((e=>{e.category===D.ELECTRIC_SIGN&&e.objectType===S.AGENT&&X.value.setDataURL(e.fileBase64)})))})),L({insurerCode:W,orderNo:Q,productCategory:J,tenantId:O,noticeType:E,objectType:w}).then((({code:e,data:a})=>{"10000"===e&&(ie.noticeList=[...ie.noticeList,...a])}))}));const oe=()=>{if(!(ie.noticeList&&ie.noticeList.every((e=>1===e.isDone))))return void j("请完成所有告知进行下一步");if(X.value?.isEmpty())return void j("请完成代理人签字进行下一步");if(!Z.value)return void j("请勾选同意签名");const e=X.value?.save();F("AGENT",e,ie.pageData.id,O).then((e=>{e&&I({...ie.pageData,extInfo:{...ie.pageData.extInfo,templateId:K,pageCode:"salesNotice",buttonCode:q.salesNotice},venderCode:W}).then((({code:e,data:n})=>{"10000"===e&&"jumpToPage"===n.pageAction.pageAction&&a.push({path:z[n.pageAction.data.nextPageCode],query:{...t.query}})}))}))};return(e,n)=>{const i=c("van-cell"),o=c("ProSign"),l=c("van-checkbox"),r=c("van-button"),s=c("ProPageWrap");return d(),u(s,{class:"page-salesman-inform"},{default:f((()=>[g(C,{title:"营销员告知书"},{default:f((()=>[(d(!0),p(h,null,m(y(ie).noticeList,(e=>(d(),u(i,{key:e.id,class:v({"is-active":2===e.isDone}),title:`《${e.title}》`,"is-link":"",value:""+(1===e.isDone?"已完成":"去完成"),onClick:n=>{return i=e,P.set("questionData",i),void a.push({path:"/healthNotice",query:{questionnaireType:i.questionnaireType,...t.query}});var i}},null,8,["class","title","value","onClick"])))),128))])),_:1}),g(C,{title:"营销员签字","show-divider":!1,"show-line":!1},{extra:f((()=>[b("div",{class:"resign",onClick:ne},"重签")])),default:f((()=>[g(o,{ref_key:"agentSignRef",ref:X,selector:"sign2"},null,512),b("div",R,"签名日期： "+T(y(ee)),1)])),_:1}),b("div",M,[g(l,{modelValue:Z.value,"onUpdate:modelValue":n[0]||(n[0]=e=>Z.value=e),shape:"square"},null,8,["modelValue"]),b("p",B,[Y,(d(!0),p(h,null,m(y(ie).noticeList,((e,a)=>(d(),u(x,{key:a,class:"file",title:`《${e.title}》`,content:te.value,type:ae.value,onClick:a=>(e=>{const{id:a,objectType:t}=e,n={1:"pdf",2:"richText",3:"link"};N({insurerCode:W,id:a,objectType:t,productCategory:J,orderNo:Q,tenantId:O}).then((({code:e,data:a})=>{"10000"===e&&(a?.[0].questionType===A?(ae.value="question",te.value=a):(1===a?.[0].textType&&a?.[0].content.includes("png")?ae.value="picture":ae.value=n[a?.[0].textType],te.value=a?.[0].content))}))})(e)},null,8,["title","content","type","onClick"])))),128)),G])]),b("div",U,[g(r,{type:"primary",block:"",onClick:oe},{default:f((()=>[V])),_:1})])])),_:1})}}});e("default",a($,[["__scopeId","data-v-1d1c7e90"]]))}}}))}();
