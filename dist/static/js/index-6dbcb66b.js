import{q as a,a as e}from"./product-82a8adbd.js";import{aj as t,_ as s,d as n,a as l,z as o,r,S as i,aU as u,x as c,y as d,b as p,c as v,g as f,f as h,w,i as y,l as g,t as m,j as C,F as k,n as b,aO as P,K as _,L as j}from"./index-90cfe194.js";const x=(e,s,n)=>{t((()=>{(async()=>{try{const{code:t,data:n}=await a(e);if("10000"===t){const a={};n.forEach((e=>{a[e.relationCode]||(a[e.relationCode]=[]),a[e.relationCode].push(e)})),null==s||s(a)}}catch(t){null==n||n(!1)}})()}))};const I={class:"header"},O=["src"],E={class:"content"},F=(a=>(_("data-v-354b6ac9"),a=a(),j(),a))((()=>y("h4",null,"温馨提示，您已进入投保流程：",-1))),N=b(" 请仔细阅读免责条款、投保须知等信息，请您重点阅读并知晓 "),S=b(" ，为维护您的合法权益，您的操作轨迹将被记录。 "),q={class:"footer"},A=b(" 好的 "),D={key:0},T={class:"review-pdf"};var U=s(n({props:{productDetail:{type:Object,default:()=>{}}},setup(a){const t=a,s=l(),{tenantId:n=""}=s.query,b=o({insureConfig:{insureName:"",tenantName:""}}),_=r(!1),j=r(!1),x=new i({source:"sessionStorage"}),U=u({time:4e3,onFinish:()=>{x.set("PRENOTICE-isShow","1")}}),z=r({title:"",link:""}),B=c((()=>U.current.value.seconds)),K=c((()=>{if(z.value.link){const a=(z.value.link||"").split("?");return"pdf"===(a[0]||"").substr(a[0].lastIndexOf(".")+1)?"pdf":"picture"}return"link"})),L=()=>{_.value=!1};return d((()=>{(async()=>{const{code:a,data:s}=await e({insureCode:t.productDetail.insurerCode,tenantId:n});"10000"===a&&(b.insureConfig=s,P((()=>{U.start()}))),_.value=!0})()})),(a,e)=>{var t;const s=p("VanButton"),n=p("ProPopup"),l=p("ProFilePreview");return v(),f(k,null,[h(n,{class:"pre-notice-wrap",show:_.value,closeable:!1,height:45},{default:w((()=>{var a;return[y("div",I,[y("img",{src:g("/static/assets/header-logo.fadf5dcd.png")},null,8,O)]),y("div",E,[F,y("p",null,[N,y("span",{class:"file-name",onClick:e[0]||(e[0]=a=>((a,e)=>{var t;j.value=!j.value,z.value.link=null==(t=b.insureConfig)?void 0:t[e].link,z.value.title=a.target.innerText})(a,"privacyAgreement"))}," 《"+m((null==(a=g(b).insureConfig.privacyAgreement)?void 0:a.title)||"用户隐私协议")+"》 ",1),S])]),y("div",q,[h(s,{type:"primary",block:"",round:"",onClick:L},{default:w((()=>[A,g(B)?(v(),f("span",D,m(g(B))+"s",1)):C("",!0)])),_:1})])]})),_:1},8,["show"]),h(n,{show:j.value,"onUpdate:show":e[1]||(e[1]=a=>j.value=a),class:"pre-notice-wrap",title:null==(t=z.value)?void 0:t.title,position:"bottom",style:{overflow:"hidden"}},{default:w((()=>{var a;return[y("div",T,[h(l,{content:null==(a=z.value)?void 0:a.link,type:g(K)},null,8,["content","type"])])]})),_:1},8,["show","title"])],64)}}}),[["__scopeId","data-v-354b6ac9"]]);export{U as P,x as u};
