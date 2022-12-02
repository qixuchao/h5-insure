!function(){var e=document.createElement("style");e.innerHTML=".page-salesman-inform .van-cell[data-v-1d1c7e90]{display:flex;align-items:center;padding:.4rem 0}.page-salesman-inform .van-cell[data-v-1d1c7e90] .van-cell__title{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:var(--zaui-aide-text-stress, #0d6efe);line-height:.56rem}.page-salesman-inform .van-cell[data-v-1d1c7e90] .van-cell__value{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#99a9c0;line-height:.56rem}.page-salesman-inform .van-cell .active[data-v-1d1c7e90],.page-salesman-inform[data-v-1d1c7e90] .is-active .van-cell__value span{color:var(--van-primary-color, var(--zaui-brand))}.page-salesman-inform .resign[data-v-1d1c7e90]{font-size:.37333rem;color:var(--zaui-aide-text-stress, #0d6efe)}.page-salesman-inform .date[data-v-1d1c7e90]{margin-top:.32rem;font-size:.37333rem;color:#99a9c0;line-height:.53333rem}.page-salesman-inform .inform-file[data-v-1d1c7e90]{display:flex;position:absolute;bottom:2.33333rem;padding:0 .4rem}.page-salesman-inform .inform-file .tips[data-v-1d1c7e90]{margin-left:.29333rem;font-size:.37333rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.53333rem}.page-salesman-inform .inform-file .tips>span[data-v-1d1c7e90]{color:var(--zaui-aide-text-stress, #0d6efe)}.page-salesman-inform .inform-file .next-btn[data-v-1d1c7e90]{padding:.4rem 0}.page-salesman-inform .inform-file .next-btn .van-button[data-v-1d1c7e90]{border-radius:.10667rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-c308286a.js","./index-legacy-557f644f.js","./inform-legacy-3d9ad3c5.js","./useStorage-legacy-57dd50d2.js","./verify-legacy-25906909.js","./notice-legacy-6932be1e.js"],(function(e){"use strict";var a,t,n,i,o,l,r,s,c,d,u,g,f,p,m,v,y,h,C,b,T,x,_,k,S,j,D,I,L,N,P,q,z,A,E,F,M;return{setters:[function(e){a=e.i,t=e.aa,n=e.P,i=e.r,o=e.d,l=e.N,r=e.k,s=e.l,c=e.m,d=e.n,u=e.p,g=e.t,f=e.s,p=e.H,m=e.M,v=e.C,y=e.F,h=e.B,C=e.L,b=e.G,T=e.T},function(e){x=e._,_=e.a,k=e.E,S=e.g,j=e.A,D=e.t,I=e.n,L=e.N,N=e.b},function(e){P=e.l,q=e.g},function(e){z=e.s},function(e){A=e.s},function(e){E=e.d,F=e.A,M=e.e}],execute:function(){const R={class:"date"},w={class:"inform-file"},B={class:"tips"},G=b(" 您的签名将被用于"),Y=b("文件 "),U={class:"footer-button"},V=b("下一步"),H=a({setup(e){const a=t(),b=n(),{productCode:x="MMBBSF",agentCode:H="65434444",tenantId:O="9991000007",agencyCode:$="3311222",insurerCode:W="zhongan",productCategory:J=1,templateId:K=1,orderNo:Q="2022080217103534947"}=b.query,X=i(null),Z=i(!1),ee=o().format("YYYY-MM-DD"),ae=i(""),te=i(),ne=()=>{X.value?.clear()},ie=l({noticeType:"",materialSource:"",noticeList:[],pageData:{}});r((()=>{S({orderNo:Q,saleUserId:H,tenantId:O}).then((({code:e,data:a})=>{"10000"===e&&(Object.assign(ie.pageData,a),a.tenantOrderAttachmentList.forEach((e=>{e.category===j.ELECTRIC_SIGN&&e.objectType===D.AGENT&&X.value.setDataURL(e.fileBase64)})))})),P({insurerCode:W,orderNo:Q,productCategory:J,tenantId:O,noticeType:F,objectType:M}).then((({code:e,data:a})=>{"10000"===e&&(ie.noticeList=[...ie.noticeList,...a])}))}));const oe=()=>{if(!(ie.noticeList&&ie.noticeList.every((e=>1===e.isDone))))return void T("请完成所有告知进行下一步");if(X.value?.isEmpty())return void T("请完成代理人签字进行下一步");if(!Z.value)return void T("请勾选同意签名");const e=X.value?.save();A("AGENT",e,ie.pageData.id,O).then((e=>{e&&I({...ie.pageData,extInfo:{...ie.pageData.extInfo,templateId:K,pageCode:"salesNotice",buttonCode:L.salesNotice},venderCode:W}).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&a.push({path:N[t.pageAction.data.nextPageCode],query:{...b.query}})}))}))};return(e,t)=>{const n=s("van-cell"),i=s("ProSign"),o=s("van-checkbox"),l=s("van-button"),r=s("ProPageWrap");return c(),d(r,{class:"page-salesman-inform"},{default:u((()=>[g(_,{title:"营销员告知书"},{default:u((()=>[(c(!0),f(y,null,p(v(ie).noticeList,(e=>(c(),d(n,{key:e.id,class:m({"is-active":2===e.isDone}),title:`《${e.title}》`,"is-link":"",value:""+(1===e.isDone?"已完成":"去完成"),onClick:t=>{return n=e,z.set("questionData",n),void a.push({path:"/healthNotice",query:{questionnaireType:n.questionnaireType,...b.query}});var n}},null,8,["class","title","value","onClick"])))),128))])),_:1}),g(_,{title:"营销员签字","show-divider":!1,"show-line":!1},{extra:u((()=>[h("div",{class:"resign",onClick:ne},"重签")])),default:u((()=>[g(i,{ref_key:"agentSignRef",ref:X,selector:"sign2"},null,512),h("div",R,"签名日期： "+C(v(ee)),1)])),_:1}),h("div",w,[g(o,{modelValue:Z.value,"onUpdate:modelValue":t[0]||(t[0]=e=>Z.value=e),shape:"square"},null,8,["modelValue"]),h("p",B,[G,(c(!0),f(y,null,p(v(ie).noticeList,((e,a)=>(c(),d(k,{key:a,class:"file",title:`《${e.title}》`,content:te.value,type:ae.value,onClick:a=>(e=>{const{id:a,objectType:t}=e,n={1:"pdf",2:"richText",3:"link"};q({insurerCode:W,id:a,objectType:t,productCategory:J,orderNo:Q,tenantId:O}).then((({code:e,data:a})=>{"10000"===e&&(a?.[0].questionType===E?(ae.value="question",te.value=a):(1===a?.[0].textType&&a?.[0].content.includes("png")?ae.value="picture":ae.value=n[a?.[0].textType],te.value=a?.[0].content))}))})(e)},null,8,["title","content","type","onClick"])))),128)),Y])]),h("div",U,[g(l,{type:"primary",block:"",onClick:oe},{default:u((()=>[V])),_:1})])])),_:1})}}});e("default",x(H,[["__scopeId","data-v-1d1c7e90"]]))}}}))}();
