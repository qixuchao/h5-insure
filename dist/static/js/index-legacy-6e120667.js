!function(){var e=document.createElement("style");e.innerHTML=".page-salesman-inform .van-cell[data-v-7211b3c3]{display:flex;align-items:center;padding:.4rem 0}.page-salesman-inform .van-cell[data-v-7211b3c3] .van-cell__title{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:var(--zaui-aide-text-stress, #0d6efe);line-height:.56rem}.page-salesman-inform .van-cell[data-v-7211b3c3] .van-cell__value{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#99a9c0;line-height:.56rem}.page-salesman-inform .van-cell .active[data-v-7211b3c3],.page-salesman-inform[data-v-7211b3c3] .is-active .van-cell__value span{color:var(--zaui-brand, #0d6efe)}.page-salesman-inform .resign[data-v-7211b3c3]{font-size:.37333rem;color:var(--zaui-aide-text-stress, #0d6efe)}.page-salesman-inform .date[data-v-7211b3c3]{margin-top:.32rem;font-size:.37333rem;color:#99a9c0;line-height:.53333rem}.page-salesman-inform .inform-file[data-v-7211b3c3]{display:flex;position:absolute;bottom:2.33333rem;padding:0 .4rem}.page-salesman-inform .inform-file .tips[data-v-7211b3c3]{margin-left:.29333rem;font-size:.37333rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.53333rem}.page-salesman-inform .inform-file .tips>span[data-v-7211b3c3]{color:var(--zaui-aide-text-stress, #0d6efe)}.page-salesman-inform .inform-file .next-btn[data-v-7211b3c3]{padding:.4rem 0}.page-salesman-inform .inform-file .next-btn .van-button[data-v-7211b3c3]{border-radius:.10667rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-2638a9d6.js","./index-legacy-d4a8bc3b.js","./inform-legacy-3eed6710.js","./useStorage-legacy-a8cee401.js","./verify-legacy-eb2a097d.js","./notice-legacy-6932be1e.js"],(function(e){"use strict";var a,t,n,i,o,l,r,s,c,d,u,g,f,p,m,v,y,b,h,C,T,x,_,k,j,D,S,I,L,q,z,N,P,A,E,F,M;return{setters:[function(e){a=e.g,t=e.a9,n=e.O,i=e.E,o=e.d,l=e.M,r=e.h,s=e.r,c=e.j,d=e.k,u=e.m,g=e.p,f=e.n,p=e.G,m=e.L,v=e.A,y=e.F,b=e.z,h=e.J,C=e.C,T=e.T},function(e){x=e._,_=e.a,k=e.D,j=e.g,D=e.A,S=e.s,I=e.n,L=e.N,q=e.b},function(e){z=e.l,N=e.g},function(e){P=e.s},function(e){A=e.s},function(e){E=e.d,F=e.A,M=e.e}],execute:function(){const R={class:"date"},w={class:"inform-file"},G={class:"tips"},Y=C(" 您的签名将被用于"),B=C("文件 "),O={class:"footer-button"},U=C("下一步"),V=a({setup(e){const a=t(),C=n(),{productCode:x="MMBBSF",agentCode:V="65434444",tenantId:$="9991000007",agencyCode:H="3311222",insurerCode:J="zhongan",productCategory:W=1,templateId:K=1,orderNo:Q="2022080217103534947"}=C.query,X=i(null),Z=i(!1),ee=o().format("YYYY-MM-DD"),ae=i(""),te=i(),ne=()=>{X.value?.clear()},ie=l({noticeType:"",materialSource:"",noticeList:[],pageData:{}});r((()=>{j({orderNo:Q,saleUserId:V,tenantId:$}).then((({code:e,data:a})=>{"10000"===e&&(Object.assign(ie.pageData,a),a.tenantOrderAttachmentList.forEach((e=>{e.category===D.ELECTRIC_SIGN&&e.objectType===S.AGENT&&X.value.setDataURL(e.fileBase64)})))})),z({insurerCode:J,orderNo:Q,productCategory:W,tenantId:$,noticeType:F,objectType:M}).then((({code:e,data:a})=>{"10000"===e&&(ie.noticeList=[...ie.noticeList,...a])}))}));const oe=()=>{if(!(ie.noticeList&&ie.noticeList.every((e=>1===e.isDone))))return void T("请完成所有告知进行下一步");if(X.value?.isEmpty())return void T("请完成代理人签字进行下一步");if(!Z.value)return void T("请勾选同意签名");const e=X.value?.save();A("AGENT",e,ie.pageData.id,$).then((e=>{e&&I({...ie.pageData,extInfo:{...ie.pageData.extInfo,templateId:K,pageCode:"salesNotice",buttonCode:L.salesNotice},venderCode:J}).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&a.push({path:q[t.pageAction.data.nextPageCode],query:{...C.query}})}))}))};return(e,t)=>{const n=s("van-cell"),i=s("ProSign"),o=s("van-checkbox"),l=s("van-button"),r=s("ProPageWrap");return c(),d(r,{class:"page-salesman-inform"},{default:u((()=>[g(_,{title:"营销员告知书"},{default:u((()=>[(c(!0),f(y,null,p(v(ie).noticeList,(e=>(c(),d(n,{key:e.id,class:m({"is-active":2===e.isDone}),title:`《${e.title}》`,"is-link":"",value:""+(1===e.isDone?"已完成":"去完成"),onClick:t=>{return n=e,P.set("questionData",n),void a.push({path:"/healthNotice",query:{questionnaireType:n.questionnaireType,...C.query}});var n}},null,8,["class","title","value","onClick"])))),128))])),_:1}),g(_,{title:"营销员签字","show-divider":!1,"show-line":!1},{extra:u((()=>[b("div",{class:"resign",onClick:ne},"重签")])),default:u((()=>[g(i,{ref_key:"agentSignRef",ref:X,selector:"sign2"},null,512),b("div",R,"签名日期： "+h(v(ee)),1)])),_:1}),b("div",w,[g(o,{modelValue:Z.value,"onUpdate:modelValue":t[0]||(t[0]=e=>Z.value=e),shape:"square"},null,8,["modelValue"]),b("p",G,[Y,(c(!0),f(y,null,p(v(ie).noticeList,((e,a)=>(c(),d(k,{key:a,class:"file",title:`《${e.title}》`,content:te.value,type:ae.value,onClick:a=>(e=>{const{id:a,objectType:t}=e,n={1:"pdf",2:"richText",3:"link"};N({insurerCode:J,id:a,objectType:t,productCategory:W,orderNo:Q,tenantId:$}).then((({code:e,data:a})=>{"10000"===e&&(a?.[0].questionType===E?(ae.value="question",te.value=a):(1===a?.[0].textType&&a?.[0].content.includes("png")?ae.value="picture":ae.value=n[a?.[0].textType],te.value=a?.[0].content))}))})(e)},null,8,["title","content","type","onClick"])))),128)),B])]),b("div",O,[g(l,{type:"primary",block:"",onClick:oe},{default:u((()=>[U])),_:1})])])),_:1})}}});e("default",x(V,[["__scopeId","data-v-7211b3c3"]]))}}}))}();
