import{_ as e,d as a,a as t,J as s,r as n,ac as l,bW as i,E as r,G as o,c as u,h as c,f as d,w as p,j as v,g as f,n as m,t as g,k as h,a7 as w,F as y,b6 as k,B as b,a8 as C,aQ as _,X as x,Y as I}from"./index-40904ad2.js";import{a as j}from"./product-9fd58081.js";const N={class:"header"},A=["src"],E={class:"content"},O=(e=>(x("data-v-6301a9ac"),e=e(),I(),e))((()=>v("h4",null,"温馨提示，您已进入投保流程：",-1))),D={class:"statement"},F={class:"footer"},P={key:0},S={class:"review-pdf"};var T=e(a({__name:"index",props:{productDetail:{type:Object,default:()=>{}}},setup(e){const a=e,x=t(),{tenantId:I=""}=x.query,T=s({insureConfig:{insureName:"",tenantName:"",privacyAgreement:{title:""}},statement:""}),q=n(!1),B=n(!1),G=new l({source:"sessionStorage"}),J=i({time:4e3,onFinish:()=>{G.set("PRENOTICE-isShow","1")}}),L=n({title:"",link:""}),Q=r((()=>J.current.value.seconds)),R=r((()=>{if(L.value.link){const e=(L.value.link||"").split("?"),a=(e[0]||"").substr(e[0].lastIndexOf(".")+1);return console.log("urlList",a),"pdf"===a?"pdf":"picture"}return"link"})),U=()=>{q.value=!1};return o((()=>{(async()=>{const{code:e,data:t}=await j({insureCode:a.productDetail.insurerCode,tenantId:I});"10000"===e&&(T.insureConfig=t,T.statement=`本产品由${t.tenantName}销售本页面仅做产品展示，具体承保方案以实际保单约定为准`,k((()=>{J.start()}))),q.value=!0})()})),(e,a)=>{var t;const s=b,n=C,l=_;return u(),c(y,null,[d(n,{class:"pre-notice-wrap",show:f(q),closeable:!1,height:"auto",style:{"padding-bottom":"30px"}},{default:p((()=>{var e;return[v("div",N,[v("img",{src:f("/static/png/header-logo-f6f405b0.png")},null,8,A)]),v("div",E,[O,v("p",null,[m(" 请仔细阅读免责条款、投保须知等信息，请您重点阅读并知晓 "),v("span",{class:"file-name",onClick:a[0]||(a[0]=e=>((e,a)=>{var t;B.value=!B.value,L.value.link=null==(t=T.insureConfig)?void 0:t[a].link,L.value.title=e.target.innerText})(e,"privacyAgreement"))}," 《"+g((null==(e=f(T).insureConfig.privacyAgreement)?void 0:e.title)||"用户隐私协议")+"》 ",1),m(" ，为维护您的合法权益，您的操作轨迹将被记录。 ")])]),v("abbr",D,g(f(T).statement),1),v("div",F,[d(s,{type:"primary",block:"",round:"",onClick:U},{default:p((()=>[m(" 好的 "),f(Q)?(u(),c("span",P,g(f(Q))+"s",1)):h("",!0)])),_:1})])]})),_:1},8,["show"]),d(n,{show:f(B),"onUpdate:show":a[1]||(a[1]=e=>w(B)?B.value=e:null),class:"pre-notice-wrap",title:null==(t=f(L))?void 0:t.title,position:"bottom",style:{overflow:"hidden"}},{default:p((()=>{var e;return[v("div",S,[d(l,{content:null==(e=f(L))?void 0:e.link,type:f(R)},null,8,["content","type"])])]})),_:1},8,["show","title"])],64)}}}),[["__scopeId","data-v-6301a9ac"]]);export{T as P};
