import{q as a,a as e}from"./product-079656a3.js";import{aD as t,_ as s,d as n,a as l,J as o,r,ab as i,bW as c,E as u,G as d,c as p,g as v,f,w as m,i as h,m as g,t as w,j as y,F as b,n as C,b2 as k,B as E,a7 as _,aP as x,X as I,Y as j}from"./index-5239afda.js";const A=(e,s,n)=>{t((()=>{(async()=>{try{const{code:t,data:n}=await a(e);if("10000"===t){const a={};n.forEach((e=>{a[e.relationCode]||(a[e.relationCode]=[]),a[e.relationCode].push(e)})),null==s||s(a)}}catch(t){null==n||n(!1)}})()}))};const D=a=>{const e=(()=>{const a=new Map;return[{name:"华瑞",ids:[100039,8200000010]},{name:"华润",ids:[9991000001]}].forEach((e=>{e.ids.forEach((t=>{a.set(t,e.name)}))})),a})().get(+a);return e?`本产品由${e}保险销售有限公司销售本页面仅做产品展示，具体承保方案以实际保单约定为准`:""};const N={class:"header"},O=["src"],P={class:"content"},q=(a=>(I("data-v-69c82ca4"),a=a(),j(),a))((()=>h("h4",null,"温馨提示，您已进入投保流程：",-1))),F=C(" 请仔细阅读免责条款、投保须知等信息，请您重点阅读并知晓 "),S=C(" ，为维护您的合法权益，您的操作轨迹将被记录。 "),T={class:"statement"},B={class:"footer"},G=C(" 好的 "),J={key:0},M={class:"review-pdf"};var R=s(n({props:{productDetail:{type:Object,default:()=>{}}},setup(a){const t=a,s=l(),{tenantId:n=""}=s.query,C=o({insureConfig:{insureName:"",tenantName:"",privacyAgreement:{title:""}},statement:""}),I=r(!1),j=r(!1),A=new i({source:"sessionStorage"}),R=c({time:4e3,onFinish:()=>{A.set("PRENOTICE-isShow","1")}}),U=r({title:"",link:""}),W=u((()=>R.current.value.seconds)),X=u((()=>{if(U.value.link){const a=(U.value.link||"").split("?");return"pdf"===(a[0]||"").substr(a[0].lastIndexOf(".")+1)?"pdf":"picture"}return"link"})),Y=()=>{I.value=!1};return d((()=>{(async()=>{const{code:a,data:s}=await e({insureCode:t.productDetail.insurerCode,tenantId:n});"10000"===a&&(C.insureConfig=s,k((()=>{R.start()}))),I.value=!0})(),C.statement=D(n)})),(a,e)=>{var t;const s=E,n=_,l=x;return p(),v(b,null,[f(n,{class:"pre-notice-wrap",show:I.value,closeable:!1,height:"auto",style:{"padding-bottom":"30px"}},{default:m((()=>{var a;return[h("div",N,[h("img",{src:g("/static/assets/header-logo.f6f405b0.png")},null,8,O)]),h("div",P,[q,h("p",null,[F,h("span",{class:"file-name",onClick:e[0]||(e[0]=a=>((a,e)=>{var t;j.value=!j.value,U.value.link=null==(t=C.insureConfig)?void 0:t[e].link,U.value.title=a.target.innerText})(a,"privacyAgreement"))}," 《"+w((null==(a=g(C).insureConfig.privacyAgreement)?void 0:a.title)||"用户隐私协议")+"》 ",1),S])]),h("abbr",T,w(g(C).statement),1),h("div",B,[f(s,{type:"primary",block:"",round:"",onClick:Y},{default:m((()=>[G,g(W)?(p(),v("span",J,w(g(W))+"s",1)):y("",!0)])),_:1})])]})),_:1},8,["show"]),f(n,{show:j.value,"onUpdate:show":e[1]||(e[1]=a=>j.value=a),class:"pre-notice-wrap",title:null==(t=U.value)?void 0:t.title,position:"bottom",style:{overflow:"hidden"}},{default:m((()=>{var a;return[h("div",M,[f(l,{content:null==(a=U.value)?void 0:a.link,type:g(X)},null,8,["content","type"])])]})),_:1},8,["show","title"])],64)}}}),[["__scopeId","data-v-69c82ca4"]]);export{R as P,A as u};
