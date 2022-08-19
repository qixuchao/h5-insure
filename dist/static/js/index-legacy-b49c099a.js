!function(){var e=document.createElement("style");e.innerHTML=".page-salesman-inform .van-cell[data-v-aa0b7408]{display:flex;align-items:center;padding:.4rem 0}.page-salesman-inform .van-cell[data-v-aa0b7408] .van-cell__title{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:var(--zaui-aide-text-stress, #0d6efe);line-height:.56rem}.page-salesman-inform .van-cell[data-v-aa0b7408] .van-cell__value{font-size:.4rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#99a9c0;line-height:.56rem}.page-salesman-inform .van-cell .active[data-v-aa0b7408],.page-salesman-inform[data-v-aa0b7408] .is-active .van-cell__value span{color:#0d6efe}.page-salesman-inform .resign[data-v-aa0b7408]{font-size:.37333rem;color:var(--zaui-aide-text-stress, #0d6efe)}.page-salesman-inform .date[data-v-aa0b7408]{margin-top:.32rem;font-size:.37333rem;color:#99a9c0;line-height:.53333rem}.page-salesman-inform .inform-file[data-v-aa0b7408]{display:flex;position:absolute;bottom:2.33333rem;padding:0 .4rem}.page-salesman-inform .inform-file .tips[data-v-aa0b7408]{margin-left:.29333rem;font-size:.37333rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#393d46;line-height:.53333rem}.page-salesman-inform .inform-file .tips>span[data-v-aa0b7408]{color:var(--zaui-aide-text-stress, #0d6efe)}.page-salesman-inform .inform-file .next-btn[data-v-aa0b7408]{padding:.4rem 0}.page-salesman-inform .inform-file .next-btn .van-button[data-v-aa0b7408]{border-radius:.10667rem}\n",document.head.appendChild(e),System.register(["./vendor-legacy-5d3b395b.js","./index-legacy-753fdf1e.js","./index-legacy-7e5d610c.js","./inform-legacy-9432670e.js","./useStorage-legacy-944cf405.js","./verify-legacy-dd51e30e.js"],(function(e){"use strict";var a,t,n,i,o,l,r,s,d,c,u,f,g,m,v,p,y,h,b,C,x,_,P,S,k,D,T,j,I,L,z,q;return{setters:[function(e){a=e.g,t=e.ak,n=e.O,i=e.E,o=e.d,l=e.M,r=e.h,s=e.r,d=e.j,c=e.k,u=e.m,f=e.p,g=e.n,m=e.G,v=e.A,p=e.F,y=e.z,h=e.J,b=e.C,C=e.T,x=e.L},function(e){_=e._,P=e.l,S=e.r,k=e.V,D=e.W,T=e.n,j=e.P},function(e){I=e.P},function(e){L=e.l},function(e){z=e.s},function(e){q=e.s}],execute:function(){const E={class:"date"},F={class:"inform-file"},N={class:"tips"},A=b(" 您的签名将被用于"),M=b("文件 "),R={class:"footer-button"},w=b("下一步"),G=a({setup(e){const a=t(),b=n(),{productCode:_="MMBBSF",agentCode:G="65434444",tenantId:V="9991000007",agencyCode:Y="3311222",insurerCode:B="zhongan",productCategory:O=1,templateId:U=1,orderNo:W="2022080217103534947"}=b.query,$=i(null),H=i(!1),J=o().format("YYYY-MM-DD"),K=()=>{var e;null===(e=$.value)||void 0===e||e.clear()},Q=l({noticeType:"",materialSource:"",noticeList:[],pageData:{}});r((()=>{S({orderNo:W,saleUserId:G,tenantId:V}).then((({code:e,data:a})=>{"10000"===e&&(Object.assign(Q.pageData,a),a.tenantOrderAttachmentList.forEach((e=>{e.category===k.ELECTRIC_SIGN&&e.objectType===D.AGENT&&$.value.setDataURL(e.fileBase64)})))})),L({insurerCode:B,orderNo:W,productCategory:O,tenantId:V,noticeType:9,objectType:3}).then((({code:e,data:a})=>{"10000"===e&&(Q.noticeList=a)}))}));const X=()=>{var e,t;if(!(Q.noticeList&&Q.noticeList.every((e=>1===e.isDone))))return void C("请完成所有告知进行下一步");if(null!==(e=$.value)&&void 0!==e&&e.isEmpty())return void C("请完成代理人签字进行下一步");if(!H.value)return void C("请勾选同意签名");const n=null===(t=$.value)||void 0===t?void 0:t.save();q("AGENT",n,Q.pageData.id,V).then((e=>{e&&T({...Q.pageData,extInfo:{...Q.pageData.extInfo,templateId:U,pageCode:"salesNotice"},venderCode:B}).then((({code:e,data:t})=>{"10000"===e&&"jumpToPage"===t.pageAction.pageAction&&a.push({path:j[t.pageAction.data.nextPageCode],query:{...b.query}})}))}))};return(e,t)=>{const n=s("van-cell"),i=s("ProSign"),o=s("van-checkbox"),l=s("van-button"),r=s("ProPageWrap");return d(),c(r,{class:"page-salesman-inform"},{default:u((()=>[f(P,{title:"营销员告知书"},{default:u((()=>[(d(!0),g(p,null,m(v(Q).noticeList,(e=>(d(),c(n,{key:e.id,class:x({"is-active":2===e.isDone}),title:`《${e.title}》`,"is-link":"",value:""+(1===e.isDone?"已完成":"去完成"),onClick:t=>{return n=e,z.set("questionData",n),void a.push({path:"/healthNotice",query:{questionnaireType:n.questionnaireType,...b.query}});var n}},null,8,["class","title","value","onClick"])))),128))])),_:1}),f(P,{title:"营销员签字","show-divider":!1,"show-line":!1},{extra:u((()=>[y("div",{class:"resign",onClick:K},"重签")])),default:u((()=>[f(i,{ref_key:"agentSignRef",ref:$,selector:"sign2"},null,512),y("div",E,"签名日期： "+h(v(J)),1)])),_:1}),y("div",F,[f(o,{modelValue:H.value,"onUpdate:modelValue":t[0]||(t[0]=e=>H.value=e),shape:"square"},null,8,["modelValue"]),y("p",N,[A,(d(!0),g(p,null,m(v(Q).noticeList,((e,a)=>(d(),c(I,{key:a,class:"file",title:`《${e.title}》`},null,8,["title"])))),128)),M])]),y("div",R,[f(l,{type:"primary",block:"",onClick:X},{default:u((()=>[w])),_:1})])])),_:1})}}});e("default",_(G,[["__scopeId","data-v-aa0b7408"]]))}}}))}();
