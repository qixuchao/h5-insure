!function(){var e=document.createElement("style");e.innerHTML=".pre-notice-wrap .header[data-v-69c82ca4]{line-height:1;border:none}.pre-notice-wrap .header img[data-v-69c82ca4]{width:100%}.pre-notice-wrap .content[data-v-69c82ca4]{padding:var(--zaui-card-border, .4rem)}.pre-notice-wrap .content p[data-v-69c82ca4]{margin-top:.26667rem;font-size:.37333rem;line-height:.58667rem}.pre-notice-wrap .content span[data-v-69c82ca4]{color:var(--van-primary-color)}.pre-notice-wrap .footer[data-v-69c82ca4]{margin-top:var(--zaui-card-border, .4rem);padding:0 var(--zaui-card-border, .4rem)}.pre-notice-wrap .footer[data-v-69c82ca4] .van-button{background:var(--van-primary-color);border-color:var(--van-primary-color)}.review-pdf,.review-pdf .com-file-preview .pdf-wapper,.review-pdf .com-file-preview .pdf-wapper .viewerContainer{height:100%}.statement{display:block;padding:0 .42667rem;font-size:.37333rem;color:#616161;text-align:left}\n",document.head.appendChild(e),System.register(["./product-legacy-469bd6a2.js","./index-legacy-c4cbaf55.js"],(function(e){"use strict";var t,a,n,r,o,i,c,l,s,d,p,u,v,f,m,w,g,h,y,b,k,C,_,x,E,z,I,j,S;return{setters:[function(e){t=e.q,a=e.a},function(e){n=e.aD,r=e._,o=e.d,i=e.a,c=e.H,l=e.r,s=e.S,d=e.bV,p=e.E,u=e.G,v=e.c,f=e.h,m=e.f,w=e.w,g=e.j,h=e.g,y=e.n,b=e.t,k=e.k,C=e.a7,_=e.F,x=e.b2,E=e.B,z=e.a8,I=e.aP,j=e.X,S=e.Y}],execute:function(){e("u",((e,a,r)=>{n((()=>{(async()=>{try{const{code:n,data:r}=await t(e);if("10000"===n){const e={};r.forEach((t=>{e[t.relationCode]||(e[t.relationCode]=[]),e[t.relationCode].push(t)})),null==a||a(e)}}catch(n){null==r||r(!1)}})()}))}));const A=e=>{const t=(()=>{const e=new Map;return[{name:"华瑞",ids:[100039,8200000010]},{name:"华润",ids:[9991000001]}].forEach((t=>{t.ids.forEach((a=>{e.set(a,t.name)}))})),e})().get(+e);return t?`本产品由${t}保险销售有限公司销售本页面仅做产品展示，具体承保方案以实际保单约定为准`:""};const D={class:"header"},N=["src"],O={class:"content"},P=(e=>(j("data-v-69c82ca4"),e=e(),S(),e))((()=>g("h4",null,"温馨提示，您已进入投保流程：",-1))),T={class:"statement"},q={class:"footer"},F={key:0},H={class:"review-pdf"};e("P",r(o({__name:"index",props:{productDetail:{type:Object,default:()=>{}}},setup(e){const t=e,n=i(),{tenantId:r=""}=n.query,o=c({insureConfig:{insureName:"",tenantName:"",privacyAgreement:{title:""}},statement:""}),j=l(!1),S=l(!1),M=new s({source:"sessionStorage"}),B=d({time:4e3,onFinish:()=>{M.set("PRENOTICE-isShow","1")}}),G=l({title:"",link:""}),L=p((()=>B.current.value.seconds)),R=p((()=>{if(G.value.link){const e=(G.value.link||"").split("?");return"pdf"===(e[0]||"").substr(e[0].lastIndexOf(".")+1)?"pdf":"picture"}return"link"})),U=()=>{j.value=!1};return u((()=>{(async()=>{const{code:e,data:n}=await a({insureCode:t.productDetail.insurerCode,tenantId:r});"10000"===e&&(o.insureConfig=n,x((()=>{B.start()}))),j.value=!0})(),o.statement=A(r)})),(e,t)=>{var a;const n=E,r=z,i=I;return v(),f(_,null,[m(r,{class:"pre-notice-wrap",show:h(j),closeable:!1,height:"auto",style:{"padding-bottom":"30px"}},{default:w((()=>{var e;return[g("div",D,[g("img",{src:h("/static/assets/header-logo.f6f405b0.png")},null,8,N)]),g("div",O,[P,g("p",null,[y(" 请仔细阅读免责条款、投保须知等信息，请您重点阅读并知晓 "),g("span",{class:"file-name",onClick:t[0]||(t[0]=e=>((e,t)=>{var a;S.value=!S.value,G.value.link=null===(a=o.insureConfig)||void 0===a?void 0:a[t].link,G.value.title=e.target.innerText})(e,"privacyAgreement"))}," 《"+b((null===(e=h(o).insureConfig.privacyAgreement)||void 0===e?void 0:e.title)||"用户隐私协议")+"》 ",1),y(" ，为维护您的合法权益，您的操作轨迹将被记录。 ")])]),g("abbr",T,b(h(o).statement),1),g("div",q,[m(n,{type:"primary",block:"",round:"",onClick:U},{default:w((()=>[y(" 好的 "),h(L)?(v(),f("span",F,b(h(L))+"s",1)):k("",!0)])),_:1})])]})),_:1},8,["show"]),m(r,{show:h(S),"onUpdate:show":t[1]||(t[1]=e=>C(S)?S.value=e:null),class:"pre-notice-wrap",title:null===(a=h(G))||void 0===a?void 0:a.title,position:"bottom",style:{overflow:"hidden"}},{default:w((()=>{var e;return[g("div",H,[m(i,{content:null===(e=h(G))||void 0===e?void 0:e.link,type:h(R)},null,8,["content","type"])])]})),_:1},8,["show","title"])],64)}}}),[["__scopeId","data-v-69c82ca4"]]))}}}))}();
