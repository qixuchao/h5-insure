import{d as e,aF as n,i as t,j as s,r as a,cG as i,k as o,l as r,c9 as l,o as d,c,b as u,w as p,u as f,a as g,f as m,aV as w,p as v,v as b,e as k,q as h,F as y,_ as C,M as N,dx as S,T as P,aI as J,av as I,bR as R}from"./index-dca1ad48.js";import{d as x}from"./product-548b17e9.js";import{u as T}from"./useThread-637a02aa.js";let _=!1;function j(e){const{fn:n,cbName:t="cbname",params:s={}}=e;return new Promise(((e,a)=>{new Promise(((e,n)=>{if(_)e("success");else{const t=setTimeout((()=>{window.AppJSInterface||window.webkit&&window.webkit.messageHandlers?(clearTimeout(t),e("success"),_=!0):(clearTimeout(t),n(new Error("JsBridge初始化失败：找不到window.AppJSInterface或者window.webkit.messageHandlers")))}),100)}})).then((()=>{window[t]=n=>{if(console.log("data>>>>>>>",n),n)if("string"==typeof n)try{e(JSON.parse(n))}catch(t){e(n)}else e(n);else e(n)},s.cbname=t,((e,n)=>{window.AppJSInterface?window.AppJSInterface[e](JSON.stringify(n)):window.webkit.messageHandlers&&window.webkit.messageHandlers[e].postMessage(JSON.stringify(n))})(n,s)})).catch((e=>{a(e)}))}))}const A={key:0,class:"header"},O=["src"],G={key:1,class:"statement up"},D={key:3,class:"statement"},E={class:"footer"},H={key:0},U={class:"review-pdf"},V=e({name:"preNotice"});var F=C(e({...V,props:{productDetail:{default:()=>({})}},emits:["close"],setup(e,{emit:C}){const _=e,V=n(),F=t(),{tenantId:L="",productCode:q,preview:M}=F.query,W=s(),B=a({insureConfig:{logoLocation:void 0,logoUrl:"",readingReminder:"",acceptReminder:"",readingSeconds:0,buttonTitle:"我知道了"}}),z=s(!1),K=s(!1),Q=s(!1),X=new i({source:"sessionStorage"});let Y;const Z=s({title:"",link:""}),$=s(),ee=o((()=>{if(Z.value.link){const e=(Z.value.link||"").split("?"),n=e[0].lastIndexOf("."),t=(e[0]||"").substring(n+1);if("pdf"===t)return"pdf";if([".jpg",".JPG",".jpeg",".JPEG",".png",".PNG",".gif",".tif"].includes(t))return"picture"}return"link"})),ne=e=>{Q.value=!0,K.value=!K.value,Z.value.link=e.href,Z.value.title=e.innerText},te=()=>{z.value=!1,C("close")},se=async()=>{const{code:e,data:n}=await x({insureCode:_.productDetail.insurerCode,productCode:q,tenantId:L});"10000"===e&&(z.value=!0,B.insureConfig=n,$.value=B.insureConfig.readingSeconds||0,Y=T({start:()=>{console.log("开始轮询"),$.value-=1},stop:()=>{console.log("结束轮询"),$.value=0,X.set("PRENOTICE-isShow","1")},time:1e3,number:B.insureConfig.readingSeconds||0}),N((()=>{Y.run()}))),S(W,"click",(e=>{const n=e||window.event;n.preventDefault?n.preventDefault():n.returnValue=!1;const{target:t}=n;let s=t;var a,i;("SPAN"===t.tagName&&"A"===(null==t?void 0:t.parentNode.tagName)||"A"===t.tagName)&&("SPAN"===t.tagName&&"A"===(null==t?void 0:t.parentNode.tagName)&&(s=null==t?void 0:t.parentNode),console.dir(s),(e=>{if(!e)return!1;const[n]=(e||"").split("?"),t=n.lastIndexOf(".");if(-1===t)return!1;const s=n.substring(t);return[".jpg",".JPG",".jpeg",".JPEG",".png",".PNG",".gif",".tif",".pdf",".PDF"].includes(s)})(s.href)?ne(s):"_blank"===s.target?0===s.href.indexOf("http://")||0===s.href.indexOf("https://")?V?(a=s.innerText,i=s.href,j({fn:"openWebView",cbName:"js_openWebView",params:{title:a,link:i,showProgress:!0}})):window.open(s.href):P("配置网页链接需要带协议http://或https://"):ne(s))}))};return r((()=>{!M&&se()})),(e,n)=>{var t;const s=J,a=I,i=R,o=l("dompurify-html");return d(),c(y,null,[u(a,{class:"pre-notice-wrap",show:f(z),"close-on-click-overlay":!1,closeable:!1,height:"auto",style:{"padding-bottom":"30px"}},{default:p((()=>[f(B).insureConfig.logoUrl?(d(),c("div",A,[g("img",{src:f(B).insureConfig.logoUrl},null,8,O)])):m("",!0),1===f(B).insureConfig.logoLocation&&f(B).insureConfig.acceptReminder?w((d(),c("div",G,null,512)),[[o,f(B).insureConfig.acceptReminder]]):m("",!0),f(B).insureConfig.readingReminder?(d(),c("div",{key:2,ref_key:"noticeRef",ref:W,class:"content"},[w(g("div",null,null,512),[[o,f(B).insureConfig.readingReminder]])],512)):m("",!0),2===f(B).insureConfig.logoLocation&&f(B).insureConfig.acceptReminder?w((d(),c("div",D,null,512)),[[o,f(B).insureConfig.acceptReminder]]):m("",!0),g("div",E,[f(Q)?(d(),v(s,{key:1,type:"primary",disabled:0!==f($),block:"",round:"",onClick:te},{default:p((()=>[b(k(f(B).insureConfig.buttonTitle)+" ",1),f($)?(d(),c("span",H,k(f($))+"s",1)):m("",!0)])),_:1},8,["disabled"])):(d(),v(s,{key:0,type:"primary",disabled:!f(Q),block:"",round:""},{default:p((()=>[b(" 请先阅读《隐私政策》文件 ")])),_:1},8,["disabled"]))])])),_:1},8,["show"]),u(a,{show:f(K),"onUpdate:show":n[0]||(n[0]=e=>h(K)?K.value=e:null),class:"pre-notice-wrap",title:null==(t=f(Z))?void 0:t.title,position:"bottom","close-on-click-overlay":!1,style:{overflow:"hidden"}},{default:p((()=>{var e;return[g("div",U,[u(i,{"is-iframe":!1,content:null==(e=f(Z))?void 0:e.link,type:f(ee)},null,8,["content","type"])])]})),_:1},8,["show","title"])],64)}}}),[["__scopeId","data-v-d60f152e"]]);export{F as default};
