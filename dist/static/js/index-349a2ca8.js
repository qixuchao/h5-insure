import{d as e,a5 as n,u as t,r as a,ar as i,a3 as s,G as o,R as r,cr as l,b as u,c as d,e as c,w as p,f,i as g,h as v,b4 as m,j as h,$ as C,V as k,U as w,ag as y,O as b,cs as N,ct as R,T as P,B as x,aJ as j,_}from"./index-a248c81d.js";import{b as G}from"./product-270220f2.js";import{u as S}from"./useThread-637a02aa.js";const T={key:0,class:"header"},I=["src"],O={key:1,class:"statement up"},A={key:3,class:"statement"},D={class:"footer"},J={key:0},U={class:"review-pdf"},E=e({name:"preNotice"});var L=y(e({...E,props:{productDetail:{default:()=>({})}},setup(e){const y=e,E=n(),L=t(),{tenantId:V="",productCode:q,preview:B}=L.query,F=a(),$=i({insureConfig:{logoLocation:void 0,logoUrl:"",readingReminder:"",acceptReminder:"",readingSeconds:0,buttonTitle:"我知道了"}}),z=a(!1),H=a(!1),K=new s({source:"sessionStorage"});let M;const Q=a({title:"",link:""}),W=a(),X=o((()=>{if(Q.value.link){const e=(Q.value.link||"").split("?"),n=e[0].lastIndexOf("."),t=(e[0]||"").substring(n+1);if("pdf"===t)return"pdf";if([".jpg",".JPG",".jpeg",".JPEG",".png",".PNG",".gif",".tif"].includes(t))return"picture"}return"link"})),Y=e=>{H.value=!H.value,Q.value.link=e.href,Q.value.title=e.innerText},Z=()=>{z.value=!1};return r((()=>{!B&&(async()=>{const{code:e,data:n}=await G({insureCode:y.productDetail.insurerCode,productCode:q,tenantId:V});"10000"===e&&($.insureConfig=n,W.value=$.insureConfig.readingSeconds||0,M=S({start:()=>{console.log("开始轮询"),W.value-=1},stop:()=>{console.log("结束轮询"),W.value=0,K.set("PRENOTICE-isShow","1")},time:1e3,number:$.insureConfig.readingSeconds||0}),b((()=>{M.run()}))),z.value=!0,N(F,"click",(e=>{const n=e||window.event;n.preventDefault?n.preventDefault():n.returnValue=!1;const{target:t}=n;let a=t;("SPAN"===t.tagName&&"A"===(null==t?void 0:t.parentNode.tagName)||"A"===t.tagName)&&("SPAN"===t.tagName&&"A"===(null==t?void 0:t.parentNode.tagName)&&(a=null==t?void 0:t.parentNode),console.dir(a),(e=>{if(!e)return!1;const[n]=(e||"").split("?"),t=n.lastIndexOf(".");if(-1===t)return!1;const a=n.substring(t);return[".jpg",".JPG",".jpeg",".JPEG",".png",".PNG",".gif",".tif",".pdf",".PDF"].includes(a)})(a.href)?Y(a):"_blank"===a.target?0===a.href.indexOf("http://")||0===a.href.indexOf("https://")?E?R(a.innerText,a.href):window.open(a.href):P("配置网页链接需要带协议http://或https://"):Y(a))}))})()})),(e,n)=>{var t;const a=x,i=j,s=_,o=l("dompurify-html");return u(),d(w,null,[c(i,{class:"pre-notice-wrap",show:f(z),"close-on-click-overlay":!1,closeable:!1,height:"auto",style:{"padding-bottom":"30px"}},{default:p((()=>[f($).insureConfig.logoUrl?(u(),d("div",T,[g("img",{src:f($).insureConfig.logoUrl},null,8,I)])):v("",!0),1===f($).insureConfig.logoLocation&&f($).insureConfig.acceptReminder?m((u(),d("div",O,null,512)),[[o,f($).insureConfig.acceptReminder]]):v("",!0),f($).insureConfig.readingReminder?(u(),d("div",{key:2,ref_key:"noticeRef",ref:F,class:"content"},[m(g("div",null,null,512),[[o,f($).insureConfig.readingReminder]])],512)):v("",!0),2===f($).insureConfig.logoLocation&&f($).insureConfig.acceptReminder?m((u(),d("div",A,null,512)),[[o,f($).insureConfig.acceptReminder]]):v("",!0),g("div",D,[c(a,{type:"primary",disabled:0!==f(W),block:"",round:"",onClick:Z},{default:p((()=>[h(C(f($).insureConfig.buttonTitle)+" ",1),f(W)?(u(),d("span",J,C(f(W))+"s",1)):v("",!0)])),_:1},8,["disabled"])])])),_:1},8,["show"]),c(i,{show:f(H),"onUpdate:show":n[0]||(n[0]=e=>k(H)?H.value=e:null),class:"pre-notice-wrap",title:null==(t=f(Q))?void 0:t.title,position:"bottom","close-on-click-overlay":!1,style:{overflow:"hidden"}},{default:p((()=>{var e;return[g("div",U,[c(s,{"is-iframe":!1,content:null==(e=f(Q))?void 0:e.link,type:f(X)},null,8,["content","type"])])]})),_:1},8,["show","title"])],64)}}}),[["__scopeId","data-v-b4929282"]]);export{L as default};
