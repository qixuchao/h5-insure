!function(){var e=document.createElement("style");e.innerHTML='@charset "UTF-8";.page-salesman-inform .van-cell[data-v-54c31391]{display:flex;align-items:center;padding:.4rem 0}.page-salesman-inform .van-cell[data-v-54c31391] .van-cell__title{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:var(--zaui-aide-text-stress, #0d6efe);line-height:.56rem}.page-salesman-inform .van-cell[data-v-54c31391] .van-cell__value{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#99a9c0;line-height:.56rem}.page-salesman-inform .van-cell .active[data-v-54c31391],.page-salesman-inform[data-v-54c31391] .is-active .van-cell__value span{color:#0d6efe}.page-salesman-inform .resign[data-v-54c31391]{font-size:.37333rem;color:var(--zaui-aide-text-stress, #0d6efe)}.page-salesman-inform .footer-btn[data-v-54c31391]{width:calc(100% - .8rem);position:fixed;bottom:0;left:0;margin:0 .4rem}.page-salesman-inform .footer-btn .inform-file[data-v-54c31391]{display:flex}.page-salesman-inform .footer-btn .inform-file .tips[data-v-54c31391]{margin-left:.29333rem;font-size:.37333rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.53333rem}.page-salesman-inform .footer-btn .inform-file .tips>span[data-v-54c31391]{color:var(--zaui-aide-text-stress, #0d6efe)}.page-salesman-inform .footer-btn .next-btn[data-v-54c31391]{padding:.4rem 0}.page-salesman-inform .footer-btn .next-btn .van-button[data-v-54c31391]{border-radius:.10667rem}\n',document.head.appendChild(e),System.register(["./vendor-legacy-17b21673.js","./index-legacy-94ed15a9.js","./inform-legacy-bf2867c9.js","./index-legacy-94d14fb7.js","./useStorage-legacy-131b69ad.js","./verify-legacy-5c9fc10a.js"],(function(e){"use strict";var a,n,t,i,o,l,r,s,c,d,f,u,g,m,v,p,y,h,b,C,x,_,P,j,S,k,T,q,I;return{setters:[function(e){a=e.g,n=e.af,t=e.Q,i=e.C,o=e.L,l=e.M,r=e.r,s=e.h,c=e.j,d=e.k,f=e.n,u=e.m,g=e.E,m=e.z,v=e.F,p=e.y,y=e.a1,h=e.a2,b=e.B,C=e.T,x=e.J},function(e){_=e._,P=e.j,j=e.P},function(e){S=e.l},function(e){k=e.a,T=e.n},function(e){q=e.s},function(e){I=e.s}],execute:function(){const z={class:"footer-btn"},D={class:"inform-file"},F=(e=>(y("data-v-54c31391"),e=e(),h(),e))((()=>p("p",{class:"tips"},[b("您的签名将被用于"),p("span",null,"《营销员告知书》"),b("文件")],-1))),N={class:"footer-button"},w=b("下一步");e("default",_(a({setup(e){const a=n(),y=t(),{orderNo:h="2022021815432987130620",productCode:b="andainsurer",templateId:_=1,tenantId:L=9991000007}=y.query,A=i(null),E=i(!1),R=()=>{var e;null===(e=A.value)||void 0===e||e.clear()},U=o({noticeType:"",materialSource:"",noticeList:[],pageData:{}});l((()=>{k({orderNo:"2022021815432987130620",saleUserId:"D1234567-1",tenantId:"9991000007"}).then((({code:e,data:a})=>{"10000"===e&&Object.assign(U.pageData,a)})),S({insurerCode:b,orderNo:h,productCategory:1,tenantId:L,noticeType:9,objectType:3}).then((({code:e,data:a})=>{"10000"===e&&(U.noticeList=a)}))}));const V=()=>{var e,n;if(null!==(e=A.value)&&void 0!==e&&e.isEmpty())return void C("请完成代理人签字进行下一步");const t=null===(n=A.value)||void 0===n?void 0:n.save();I("AGENT",t,h,L).then((e=>{e&&T({...U.pageData,extInfo:{...U.pageData.extInfo,templateId:"1",pageCode:"salesNotice"}}).then(((e,n)=>{"10000"===e&&"jumpToPage"===n.pageAction.pageAction&&a.push({path:j[n.pageAction.data.nextPageCode],query:{...y.query}})}))}))};return(e,n)=>{const t=r("van-cell"),i=r("ProSign"),o=r("van-checkbox"),l=r("van-button"),y=r("ProPageWrap");return s(),c(y,{class:"page-salesman-inform"},{default:d((()=>[f(P,{title:"营销员告知书"},{default:d((()=>[(s(!0),u(v,null,g(m(U).noticeList,(e=>(s(),c(t,{key:e.id,class:x({"is-active":2===e.isDone}),title:`《${e.questionnaireName}》`,"is-link":"",value:""+(1===e.isDone?"已完成":"去完成"),onClick:n=>{return t=e,q.set("questionData",t),void a.push({path:"/healthNotice",query:{questionnaireType:t.questionnaireType}});var t}},null,8,["class","title","value","onClick"])))),128))])),_:1}),f(P,{title:"营销员签字","show-divider":!1,"show-line":!1},{extra:d((()=>[p("div",{class:"resign",onClick:R},"重签")])),default:d((()=>[f(i,{ref_key:"agentSignRef",ref:A,selector:"sign2"},null,512)])),_:1}),p("footer",z,[p("div",D,[f(o,{modelValue:E.value,"onUpdate:modelValue":n[0]||(n[0]=e=>E.value=e),shape:"square"},null,8,["modelValue"]),F]),p("div",N,[f(l,{type:"primary",block:"",onClick:V},{default:d((()=>[w])),_:1})])])])),_:1})}}}),[["__scopeId","data-v-54c31391"]]))}}}))}();
