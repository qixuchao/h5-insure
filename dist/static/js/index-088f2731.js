import{_ as a,d as t,i as e,j as s,O as r,o as c,c as o,a as i,b as n,u as d,w as l,F as p,q as m,m as v,n as y,e as f,an as u,ae as j,dJ as g,dK as b,aC as I,aD as _}from"./index-c2ab9f9d.js";import{o as x}from"./order-00daf0c1.js";import{I as h}from"./infoItem-c4cd9f6b.js";const D={style:{background:"#f4f5f9"}},Y={class:"trajectory-body"},S=(a=>(I("data-v-53cea4e4"),a=a(),_(),a))((()=>i("p",{class:"trajectory-title"},"订单进度",-1))),k={class:"list"},q={class:"trajectory-step"},w={style:{"padding-left":"40px"}},C={class:"trajectory-step-status"},H={class:"trajectory-step-time"};var L=a(t({__name:"index",setup(a){const t=e(),I=s(0),_=s(),{query:{orderId:L,orderNo:M,tenantId:O}}=t;r((()=>{x({orderId:L,tenantId:O}).then((({code:a,data:t})=>{if("10000"===a){const{originList:a,recordResVOList:e}=t;_.value=(a||[]).map(((a,t)=>({...a,...e[t]}))),e.length&&(I.value=e.length-1)}}))}));return(a,t)=>{const e=j,s=g,r=b;return c(),o("div",D,[i("div",Y,[S,n(h,{label:"订单号",content:d(M),line:"","is-copy":"","min-width":"other",style:{"margin-bottom":"40px","margin-top":"30px"}},null,8,["content"]),i("div",k,[n(r,{direction:"vertical",active:d(I),"active-color":"#C41E21"},{default:l((()=>[(c(!0),o(p,null,m(d(_),((a,t)=>(c(),v(s,{key:t},{"inactive-icon":l((()=>[n(e,{name:"inactive",class:"icon"})])),"active-icon":l((()=>[n(e,{name:"active",class:"icon"})])),default:l((()=>{return[i("div",q,[i("div",{class:y(["trajectory-step-name",t<=d(I)?"trajectory-step-name-red":""])},f((e=t+1,String(e).padStart(2,"0"))),3),i("div",w,[i("p",{class:y(["trajectory-step-name",t<=d(I)?"trajectory-step-name-active":"trajectory-step-name-grey"])},f(a.stepDesc),3),i("p",C,f(a.stepStatusDesc),1),i("p",H,f(a.stepTime&&d(u)(a.stepTime).format("YYYY-MM-DD HH:mm:ss")),1)])])];var e})),_:2},1024)))),128))])),_:1},8,["active"])])])])}}}),[["__scopeId","data-v-53cea4e4"]]);export{L as default};
