import{_ as t,d as e,i as a,j as s,l as r,o as c,c as n,a as o,b as i,u as d,w as p,F as l,s as m,p as v,n as f,e as y,b9 as u,b2 as j,ej as b,ek as g,bo as I,bp as x}from"./index-57c18dfc.js";import{o as _}from"./order-c1ce37bd.js";import{I as h}from"./infoItem-041ce0c3.js";const D={style:{background:"#f4f5f9"}},Y={class:"trajectory-body"},k=(t=>(I("data-v-12048afa"),t=t(),x(),t))((()=>o("p",{class:"trajectory-title"},"订单进度",-1))),S={class:"list"},w={class:"trajectory-step"},H={style:{"padding-left":"40px"}},L={class:"trajectory-step-status"},M={class:"trajectory-step-time"};var T=t(e({__name:"index",setup(t){const e=a(),I=s(0),x=s(),{query:{orderId:T,orderNo:q,tenantId:C}}=e;r((()=>{_({orderId:T,tenantId:C}).then((({code:t,data:e})=>{if("10000"===t){const{originList:t,recordResVOList:a}=e;x.value=t.map((t=>{const e=a.find((e=>t.step===e.step));return e?{...t,...e}:t})),a.length&&(I.value=t.findIndex((t=>t.step===a[a.length-1].step)))}}))}));return(t,e)=>{const a=j,s=b,r=g;return c(),n("div",D,[o("div",Y,[k,i(h,{label:"订单号",content:d(q),line:"","is-copy":"","min-width":"other",style:{"margin-bottom":"40px","margin-top":"30px"}},null,8,["content"]),o("div",S,[i(r,{direction:"vertical",active:d(I),"active-color":"#C41E21"},{default:p((()=>[(c(!0),n(l,null,m(d(x),((t,e)=>(c(),v(s,{key:e},{"inactive-icon":p((()=>[i(a,{name:"inactive",class:"icon"})])),"active-icon":p((()=>[i(a,{name:"active",class:"icon"})])),default:p((()=>{return[o("div",w,[o("div",{class:f(["trajectory-step-name",e<=d(I)?"trajectory-step-name-red":""])},y((a=e+1,String(a).padStart(2,"0"))),3),o("div",H,[o("p",{class:f(["trajectory-step-name",e<=d(I)?"trajectory-step-name-active":"trajectory-step-name-grey"])},y(t.stepDesc),3),o("p",L,y(t.stepStatusDesc),1),o("p",M,y(t.stepTime&&d(u)(t.stepTime).format("YYYY-MM-DD HH:mm:ss")),1)])])];var a})),_:2},1024)))),128))])),_:1},8,["active"])])])])}}}),[["__scopeId","data-v-12048afa"]]);export{T as default};
