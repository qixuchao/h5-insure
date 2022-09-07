!function(){var e=document.createElement("style");e.innerHTML=".page-salesman-inform .van-cell[data-v-2b1e054a]{display:flex;align-items:center;padding:.4rem 0}.page-salesman-inform .van-cell[data-v-2b1e054a] .van-cell__title{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:var(--zaui-aide-text-stress, #0d6efe);line-height:.56rem}.page-salesman-inform .van-cell[data-v-2b1e054a] .van-cell__value{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#99a9c0;line-height:.56rem}.page-salesman-inform .van-cell .active[data-v-2b1e054a],.page-salesman-inform[data-v-2b1e054a] .is-active .van-cell__value span{color:#0d6efe}.page-salesman-inform .resign[data-v-2b1e054a]{font-size:.37333rem;color:var(--zaui-aide-text-stress, #0d6efe)}.page-salesman-inform .date[data-v-2b1e054a]{margin-top:.32rem;font-size:.37333rem;color:#99a9c0;line-height:.53333rem}.page-salesman-inform .inform-file[data-v-2b1e054a]{display:flex;position:absolute;bottom:2.33333rem;padding:0 .4rem}.page-salesman-inform .inform-file .tips[data-v-2b1e054a]{margin-left:.29333rem;font-size:.37333rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.53333rem}.page-salesman-inform .inform-file .tips>span[data-v-2b1e054a]{color:var(--zaui-aide-text-stress, #0d6efe)}.page-salesman-inform .inform-file .next-btn[data-v-2b1e054a]{padding:.4rem 0}.page-salesman-inform .inform-file .next-btn .van-button[data-v-2b1e054a]{border-radius:.10667rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-1e86c4b9.js","./index-legacy-76bf2e6e.js","./inform-legacy-3a702019.js","./useStorage-legacy-b917c7d6.js","./verify-legacy-519c76b7.js"],(function(e){"use strict";var a,t,n,i,o,l,r,s,d,c,u,g,f,v,p,m,y,h,b,C,T,x,_,k,S,j,D,I,L,P,q,z,N;return{setters:[function(e){a=e.g,t=e.a9,n=e.O,i=e.E,o=e.d,l=e.M,r=e.h,s=e.r,d=e.j,c=e.k,u=e.m,g=e.p,f=e.n,v=e.G,p=e.A,m=e.F,y=e.z,h=e.J,b=e.C,C=e.T,T=e.L},function(e){x=e._,_=e.l,k=e.r,S=e.T,j=e.U,D=e.n,I=e.P,L=e.a0},function(e){P=e.l,q=e.g},function(e){z=e.s},function(e){N=e.s}],execute:function(){const E={class:"date"},F={class:"inform-file"},A={class:"tips"},M=b(" 您的签名将被用于"),R=b("文件 "),w={class:"footer-button"},G=b("下一步"),U=a({setup(e){const a=t(),b=n(),{productCode:x="MMBBSF",agentCode:U="65434444",tenantId:Y="9991000007",agencyCode:B="3311222",insurerCode:O="zhongan",productCategory:V=1,templateId:$=1,orderNo:H="2022080217103534947"}=b.query,J=i(null),W=i(!1),K=o().format("YYYY-MM-DD"),Q=i(""),X=i(),Z=()=>{var e;null===(e=J.value)||void 0===e||e.clear()},ee=l({noticeType:"",materialSource:"",noticeList:[],pageData:{}});r((()=>{k({orderNo:H,saleUserId:U,tenantId:Y}).then((({code:e,data:a})=>{"10000"===e&&(Object.assign(ee.pageData,a),a.tenantOrderAttachmentList.forEach((e=>{e.category===S.ELECTRIC_SIGN&&e.objectType===j.AGENT&&J.value.setDataURL(e.fileBase64)})))})),P({insurerCode:O,orderNo:H,productCategory:V,tenantId:Y,noticeType:9,objectType:3}).then((({code:e,data:a})=>{"10000"===e&&(ee.noticeList=[...ee.noticeList,...a])}))}));const ae=()=>{var e,t;if(!(ee.noticeList&&ee.noticeList.every((e=>1===e.isDone))))return void C("请完成所有告知进行下一步");if(null!==(e=J.value)&&void 0!==e&&e.isEmpty())return void C("请完成代理人签字进行下一步");if(!W.value)return void C("请勾选同意签名");const n=null===(t=J.value)||void 0===t?void 0:t.save();N("AGENT",n,ee.pageData.id,Y).then((e=>{e&&D({...ee.pageData,extInfo:{...ee.pageData.extInfo,templateId:$,pageCode:"salesNotice"},venderCode:O}).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&a.push({path:I[t.pageAction.data.nextPageCode],query:{...b.query}})}))}))};return(e,t)=>{const n=s("van-cell"),i=s("ProSign"),o=s("van-checkbox"),l=s("van-button"),r=s("ProPageWrap");return d(),c(r,{class:"page-salesman-inform"},{default:u((()=>[g(_,{title:"营销员告知书"},{default:u((()=>[(d(!0),f(m,null,v(p(ee).noticeList,(e=>(d(),c(n,{key:e.id,class:T({"is-active":2===e.isDone}),title:`《${e.title}》`,"is-link":"",value:""+(1===e.isDone?"已完成":"去完成"),onClick:t=>{return n=e,z.set("questionData",n),void a.push({path:"/healthNotice",query:{questionnaireType:n.questionnaireType,...b.query}});var n}},null,8,["class","title","value","onClick"])))),128))])),_:1}),g(_,{title:"营销员签字","show-divider":!1,"show-line":!1},{extra:u((()=>[y("div",{class:"resign",onClick:Z},"重签")])),default:u((()=>[g(i,{ref_key:"agentSignRef",ref:J,selector:"sign2"},null,512),y("div",E,"签名日期： "+h(p(K)),1)])),_:1}),y("div",F,[g(o,{modelValue:W.value,"onUpdate:modelValue":t[0]||(t[0]=e=>W.value=e),shape:"square"},null,8,["modelValue"]),y("p",A,[M,(d(!0),f(m,null,v(p(ee).noticeList,((e,a)=>(d(),c(L,{key:a,class:"file",title:`《${e.title}》`,content:X.value,type:Q.value,onClick:a=>(e=>{const{id:a,objectType:t}=e,n={1:"pdf",2:"richText",3:"link"};q({insurerCode:O,id:a,objectType:t,productCategory:V,orderNo:H,tenantId:Y}).then((({code:e,data:a})=>{"10000"===e&&(2===(null==a?void 0:a[0].questionType)?(Q.value="question",X.value=a):(1===(null==a?void 0:a[0].textType)&&null!=a&&a[0].content.includes("png")?Q.value="picture":Q.value=n[null==a?void 0:a[0].textType],X.value=null==a?void 0:a[0].content))}))})(e)},null,8,["title","content","type","onClick"])))),128)),R])]),y("div",w,[g(l,{type:"primary",block:"",onClick:ae},{default:u((()=>[G])),_:1})])])),_:1})}}});e("default",x(U,[["__scopeId","data-v-2b1e054a"]]))}}}))}();
