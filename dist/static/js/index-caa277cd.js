import{d as e,u as a,ap as t,r as s,aq as n,ar as l,G as i,X as r,b as o,c as u,e as c,w as d,i as p,f as v,j as f,Q as m,h as g,Z as h,M as w,a6 as b,V as k,B as y,ai as C,_,aj as x,ak as I}from"./index-779cecf9.js";import{b as N}from"./product-c1d4d1df.js";const j={class:"header"},A=["src"],q={class:"content"},D=(e=>(x("data-v-6209abe6"),e=e(),I(),e))((()=>p("h4",null,"温馨提示，您已进入投保流程：",-1))),E={class:"statement"},O={class:"footer"},P={key:0},S={class:"review-pdf"},T=e({name:"preNotice"});var B=b(e({...T,props:{productDetail:{default:()=>({})}},setup(e){const b=e,x=a(),{tenantId:I="",preview:T}=x.query,B=t({insureConfig:{insureName:"",tenantName:"",privacyAgreement:{title:""}},statement:""}),F=s(!1),G=s(!1),L=new n({source:"sessionStorage"}),M=l({time:4e3,onFinish:()=>{L.set("PRENOTICE-isShow","1")}}),Q=s({title:"",link:""}),R=i((()=>M.current.value.seconds)),U=i((()=>{if(Q.value.link){const e=(Q.value.link||"").split("?"),a=(e[0]||"").substr(e[0].lastIndexOf(".")+1);return console.log("urlList",a),"pdf"===a?"pdf":"picture"}return"link"})),V=()=>{F.value=!1};return r((()=>{!T&&(async()=>{const{code:e,data:a}=await N({insureCode:b.productDetail.insurerCode,tenantId:I});"10000"===e&&(B.insureConfig=a,B.statement=`本产品由${a.tenantName}销售本页面仅做产品展示，具体承保方案以实际保单约定为准`,k((()=>{M.start()}))),F.value=!0})()})),(e,a)=>{var t;const s=y,n=C,l=_;return o(),u(w,null,[c(n,{class:"pre-notice-wrap",show:v(F),closeable:!1,height:"auto",style:{"padding-bottom":"30px"}},{default:d((()=>{var e;return[p("div",j,[p("img",{src:v("/static/png/header-logo-f6f405b0.png")},null,8,A)]),p("div",q,[D,p("p",null,[f(" 请仔细阅读免责条款、投保须知等信息，请您重点阅读并知晓 "),p("span",{class:"file-name",onClick:a[0]||(a[0]=e=>((e,a)=>{var t;G.value=!G.value,Q.value.link=null==(t=B.insureConfig)?void 0:t[a].link,Q.value.title=e.target.innerText})(e,"privacyAgreement"))}," 《"+m((null==(e=v(B).insureConfig.privacyAgreement)?void 0:e.title)||"用户隐私协议")+"》 ",1),f(" ，为维护您的合法权益，您的操作轨迹将被记录。 ")])]),p("abbr",E,m(v(B).statement),1),p("div",O,[c(s,{type:"primary",block:"",round:"",onClick:V},{default:d((()=>[f(" 好的 "),v(R)?(o(),u("span",P,m(v(R))+"s",1)):g("",!0)])),_:1})])]})),_:1},8,["show"]),c(n,{show:v(G),"onUpdate:show":a[1]||(a[1]=e=>h(G)?G.value=e:null),class:"pre-notice-wrap",title:null==(t=v(Q))?void 0:t.title,position:"bottom",style:{overflow:"hidden"}},{default:d((()=>{var e;return[p("div",S,[c(l,{content:null==(e=v(Q))?void 0:e.link,type:v(U)},null,8,["content","type"])])]})),_:1},8,["show","title"])],64)}}}),[["__scopeId","data-v-6209abe6"]]);export{B as P};
