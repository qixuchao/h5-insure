import{d as a,u as e,aS as s,r as l,a1 as r,T as n,B as o,c as t,A as d,f as i,g as u,i as c,w as f,j as p,aY as v,ct as m}from"./index-56515d23.js";import{P as w}from"./pdfh5-008ca364.js";const _={class:"pdf-viewer-wrap"},y=["id"],$={class:"footer-btn"},g=a({__name:"index",setup(a){const g=e(),h=window.location.href,{title:j,url:k}=g.query,x=s(),T=l(null),b=()=>{k&&m(k)};return r((()=>{document.title=j||"",k?(()=>{var a;try{T.value=new w(`#${x}`,{pdfurl:k,renderType:"canvas",lazy:!0}),null==(a=T.value)||a.on("complete",((a,e,s)=>{console.log(`状态：${a}，信息：${e}，耗时：${s}毫秒`),"error"===a&&n("文件损坏，无法打开！")}))}catch(e){console.log("error",e)}})():n("pdf文件为空")})),(a,e)=>{const s=o;return t(),d("div",_,[i("div",{id:u(x)},null,8,y),i("div",$,[c(v,{link:u(h)},{default:f((()=>[c(s,null,{default:f((()=>[p("分享")])),_:1})])),_:1},8,["link"]),c(s,{onClick:b},{default:f((()=>[p("下载")])),_:1})])])}}});export{g as default};
