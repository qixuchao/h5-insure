import{q as a,a as e}from"./product-af76c976.js";import{aj as t,_ as s,d as n,b as l,c as r,e as o,j as i,a as u,z as c,r as d,S as p,aU as v,x as f,y as h,g as y,f as w,w as g,i as m,l as k,t as C,F as b,n as _,aO as I,K as P,L as j}from"./index-913a424e.js";const x=(e,s,n)=>{t((()=>{(async()=>{try{const{code:t,data:n}=await a(e);if("10000"===t){const a={};n.forEach((e=>{a[e.relationCode]||(a[e.relationCode]=[]),a[e.relationCode].push(e)})),null==s||s(a)}}catch(t){null==n||n(!1)}})()}))};var O=s(n({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""}},setup(a){const e=a;return(a,t)=>{const s=l("van-image");return e.url?(r(),o(s,{key:0,width:"100%",class:"banner","lazy-load":"",src:e.url},null,8,["src"])):i("",!0)}}}),[["__scopeId","data-v-34cbd784"]]);const S={class:"header"},B=["src"],E={class:"content"},F=(a=>(P("data-v-354b6ac9"),a=a(),j(),a))((()=>m("h4",null,"温馨提示，您已进入投保流程：",-1))),N=_(" 请仔细阅读免责条款、投保须知等信息，请您重点阅读并知晓 "),q=_(" ，为维护您的合法权益，您的操作轨迹将被记录。 "),z={class:"footer"},A=_(" 好的 "),D={key:0},T={class:"review-pdf"};var U=s(n({props:{productDetail:{type:Object,default:()=>{}}},setup(a){const t=a,s=u(),{tenantId:n=""}=s.query,o=c({insureConfig:{insureName:"",tenantName:""}}),_=d(!1),P=d(!1),j=new p({source:"sessionStorage"}),x=v({time:4e3,onFinish:()=>{j.set("PRENOTICE-isShow","1")}}),O=d({title:"",link:""}),U=f((()=>x.current.value.seconds)),K=f((()=>{if(O.value.link){const a=(O.value.link||"").split("?");return"pdf"===(a[0]||"").substr(a[0].lastIndexOf(".")+1)?"pdf":"picture"}return"link"})),L=()=>{_.value=!1};return h((()=>{(async()=>{const{code:a,data:s}=await e({insureCode:t.productDetail.insurerCode,tenantId:n});"10000"===a&&(o.insureConfig=s,I((()=>{x.start()}))),_.value=!0})()})),(a,e)=>{var t;const s=l("VanButton"),n=l("ProPopup"),u=l("ProFilePreview");return r(),y(b,null,[w(n,{class:"pre-notice-wrap",show:_.value,closeable:!1,height:45},{default:g((()=>{var a;return[m("div",S,[m("img",{src:k("/static/assets/header-logo.fadf5dcd.png")},null,8,B)]),m("div",E,[F,m("p",null,[N,m("span",{class:"file-name",onClick:e[0]||(e[0]=a=>((a,e)=>{var t;P.value=!P.value,O.value.link=null==(t=o.insureConfig)?void 0:t[e].link,O.value.title=a.target.innerText})(a,"privacyAgreement"))}," 《"+C((null==(a=k(o).insureConfig.privacyAgreement)?void 0:a.title)||"用户隐私协议")+"》 ",1),q])]),m("div",z,[w(s,{type:"primary",block:"",round:"",onClick:L},{default:g((()=>[A,k(U)?(r(),y("span",D,C(k(U))+"s",1)):i("",!0)])),_:1})])]})),_:1},8,["show"]),w(n,{show:P.value,"onUpdate:show":e[1]||(e[1]=a=>P.value=a),class:"pre-notice-wrap",title:null==(t=O.value)?void 0:t.title,position:"bottom",style:{overflow:"hidden"}},{default:g((()=>{var a;return[m("div",T,[w(u,{content:null==(a=O.value)?void 0:a.link,type:k(K)},null,8,["content","type"])])]})),_:1},8,["show","title"])],64)}}}),[["__scopeId","data-v-354b6ac9"]]);export{O as B,U as P,x as u};
