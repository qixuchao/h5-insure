!function(){var e=document.createElement("style");e.innerHTML=".pre-notice-wrap .header[data-v-354b6ac9]{line-height:1;border:none}.pre-notice-wrap .header img[data-v-354b6ac9]{width:100%}.pre-notice-wrap .content[data-v-354b6ac9]{padding:var(--zaui-card-border, .4rem)}.pre-notice-wrap .content p[data-v-354b6ac9]{margin-top:.26667rem;font-size:.37333rem;line-height:.58667rem}.pre-notice-wrap .content span[data-v-354b6ac9]{color:var(--van-primary-color)}.pre-notice-wrap .footer[data-v-354b6ac9]{margin-top:var(--zaui-card-border, .4rem);padding:0 var(--zaui-card-border, .4rem)}.pre-notice-wrap .footer[data-v-354b6ac9] .van-button{background:var(--van-primary-color);border-color:var(--van-primary-color)}.review-pdf,.review-pdf .com-file-preview .pdf-wapper,.review-pdf .com-file-preview .pdf-wapper .viewerContainer{height:100%}\n",document.head.appendChild(e),System.register(["./product-legacy-7964bd5b.js","./index-legacy-026479b6.js"],(function(e){"use strict";var a,t,r,n,o,i,c,l,s,d,p,u,v,f,w,h,m,b,g,y,C,k,P,_,j,x;return{setters:[function(e){a=e.q,t=e.a},function(e){r=e.aj,n=e._,o=e.d,i=e.a,c=e.z,l=e.r,s=e.S,d=e.aU,p=e.x,u=e.y,v=e.b,f=e.c,w=e.g,h=e.f,m=e.w,b=e.i,g=e.l,y=e.t,C=e.j,k=e.F,P=e.n,_=e.aO,j=e.K,x=e.L}],execute:function(){e("u",((e,t,n)=>{r((()=>{(async()=>{try{const{code:r,data:n}=await a(e);if("10000"===r){const e={};n.forEach((a=>{e[a.relationCode]||(e[a.relationCode]=[]),e[a.relationCode].push(a)})),t?.(e)}}catch(r){n?.(!1)}})()}))}));const z={class:"header"},I=["src"],E={class:"content"},O=(e=>(j("data-v-354b6ac9"),e=e(),x(),e))((()=>b("h4",null,"温馨提示，您已进入投保流程：",-1))),S=P(" 请仔细阅读免责条款、投保须知等信息，请您重点阅读并知晓 "),F=P(" ，为维护您的合法权益，您的操作轨迹将被记录。 "),N={class:"footer"},T=P(" 好的 "),q={key:0},A={class:"review-pdf"};e("P",n(o({props:{productDetail:{type:Object,default:()=>{}}},setup(e){const a=e,r=i(),{tenantId:n=""}=r.query,o=c({insureConfig:{insureName:"",tenantName:""}}),P=l(!1),j=l(!1),x=new s({source:"sessionStorage"}),D=d({time:4e3,onFinish:()=>{x.set("PRENOTICE-isShow","1")}}),L=l({title:"",link:""}),U=p((()=>D.current.value.seconds)),B=p((()=>{if(L.value.link){const e=(L.value.link||"").split("?");return"pdf"===(e[0]||"").substr(e[0].lastIndexOf(".")+1)?"pdf":"picture"}return"link"})),H=()=>{P.value=!1};return u((()=>{(async()=>{const{code:e,data:r}=await t({insureCode:a.productDetail.insurerCode,tenantId:n});"10000"===e&&(o.insureConfig=r,_((()=>{D.start()}))),P.value=!0})()})),(e,a)=>{const t=v("VanButton"),r=v("ProPopup"),n=v("ProFilePreview");return f(),w(k,null,[h(r,{class:"pre-notice-wrap",show:P.value,closeable:!1,height:45},{default:m((()=>[b("div",z,[b("img",{src:g("/static/assets/header-logo.fadf5dcd.png")},null,8,I)]),b("div",E,[O,b("p",null,[S,b("span",{class:"file-name",onClick:a[0]||(a[0]=e=>((e,a)=>{j.value=!j.value,L.value.link=o.insureConfig?.[a].link,L.value.title=e.target.innerText})(e,"privacyAgreement"))}," 《"+y(g(o).insureConfig.privacyAgreement?.title||"用户隐私协议")+"》 ",1),F])]),b("div",N,[h(t,{type:"primary",block:"",round:"",onClick:H},{default:m((()=>[T,g(U)?(f(),w("span",q,y(g(U))+"s",1)):C("",!0)])),_:1})])])),_:1},8,["show"]),h(r,{show:j.value,"onUpdate:show":a[1]||(a[1]=e=>j.value=e),class:"pre-notice-wrap",title:L.value?.title,position:"bottom",style:{overflow:"hidden"}},{default:m((()=>[b("div",A,[h(n,{content:L.value?.link,type:g(B)},null,8,["content","type"])])])),_:1},8,["show","title"])],64)}}}),[["__scopeId","data-v-354b6ac9"]]))}}}))}();
