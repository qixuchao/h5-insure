import{d as e,u as a,z as t,r as s,ar as n,as as l,L as r,a1 as i,c as o,A as u,i as c,w as d,f as p,g as v,j as f,E as m,h as g,a3 as h,U as w,G as b,$ as y,B as k,al as C,_,am as x,an as I}from"./index-9880ea8b.js";import{b as N}from"./product-dd824f9c.js";const A={class:"header"},j=["src"],E={class:"content"},D=(e=>(x("data-v-6209abe6"),e=e(),I(),e))((()=>p("h4",null,"温馨提示，您已进入投保流程：",-1))),L={class:"statement"},O={class:"footer"},P={key:0},S={class:"review-pdf"},T=e({name:"preNotice"});var U=b(e({...T,props:{productDetail:{default:()=>({})}},setup(e){const b=e,x=a(),{tenantId:I="",preview:T}=x.query,U=t({insureConfig:{insureName:"",tenantName:"",privacyAgreement:{title:""}},statement:""}),$=s(!1),q=s(!1),z=new n({source:"sessionStorage"}),B=l({time:4e3,onFinish:()=>{z.set("PRENOTICE-isShow","1")}}),F=s({title:"",link:""}),G=r((()=>B.current.value.seconds)),R=r((()=>{if(F.value.link){const e=(F.value.link||"").split("?"),a=(e[0]||"").substr(e[0].lastIndexOf(".")+1);return console.log("urlList",a),"pdf"===a?"pdf":"picture"}return"link"})),H=()=>{$.value=!1};return i((()=>{!T&&(async()=>{const{code:e,data:a}=await N({insureCode:b.productDetail.insurerCode,tenantId:I});"10000"===e&&(U.insureConfig=a,U.statement=`本产品由${a.tenantName}销售本页面仅做产品展示，具体承保方案以实际保单约定为准`,y((()=>{B.start()}))),$.value=!0})()})),(e,a)=>{var t;const s=k,n=C,l=_;return o(),u(w,null,[c(n,{class:"pre-notice-wrap",show:v($),closeable:!1,height:"auto",style:{"padding-bottom":"30px"}},{default:d((()=>{var e;return[p("div",A,[p("img",{src:v("/static/png/header-logo-f6f405b0.png")},null,8,j)]),p("div",E,[D,p("p",null,[f(" 请仔细阅读免责条款、投保须知等信息，请您重点阅读并知晓 "),p("span",{class:"file-name",onClick:a[0]||(a[0]=e=>((e,a)=>{var t;q.value=!q.value,F.value.link=null==(t=U.insureConfig)?void 0:t[a].link,F.value.title=e.target.innerText})(e,"privacyAgreement"))}," 《"+m((null==(e=v(U).insureConfig.privacyAgreement)?void 0:e.title)||"用户隐私协议")+"》 ",1),f(" ，为维护您的合法权益，您的操作轨迹将被记录。 ")])]),p("abbr",L,m(v(U).statement),1),p("div",O,[c(s,{type:"primary",block:"",round:"",onClick:H},{default:d((()=>[f(" 好的 "),v(G)?(o(),u("span",P,m(v(G))+"s",1)):g("",!0)])),_:1})])]})),_:1},8,["show"]),c(n,{show:v(q),"onUpdate:show":a[1]||(a[1]=e=>h(q)?q.value=e:null),class:"pre-notice-wrap",title:null==(t=v(F))?void 0:t.title,position:"bottom",style:{overflow:"hidden"}},{default:d((()=>{var e;return[p("div",S,[c(l,{content:null==(e=v(F))?void 0:e.link,type:v(R)},null,8,["content","type"])])]})),_:1},8,["show","title"])],64)}}}),[["__scopeId","data-v-6209abe6"]]);export{U as P};
