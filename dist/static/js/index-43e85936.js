import{_ as t,d as a,h as e,i as s,O as r,o as c,c as o,a as i,b as n,u as d,w as l,F as p,n as m,l as v,p as y,e as u,an as f,ae as j,dC as g,dD as b,at as I,au as _}from"./index-404eec03.js";import{o as h}from"./order-c4914e7d.js";import{I as x}from"./infoItem-b906b254.js";const D={style:{background:"#f4f5f9"}},Y={class:"trajectory-body"},S=(t=>(I("data-v-53cea4e4"),t=t(),_(),t))((()=>i("p",{class:"trajectory-title"},"订单进度",-1))),k={class:"list"},w={class:"trajectory-step"},C={style:{"padding-left":"40px"}},H={class:"trajectory-step-status"},L={class:"trajectory-step-time"};var M=t(a({__name:"index",setup(t){const a=e(),I=s(0),_=s(),{query:{orderId:M,orderNo:O,tenantId:T}}=a;r((()=>{h({orderId:M,tenantId:T}).then((({code:t,data:a})=>{if("10000"===t){const{originList:t,recordResVOList:e}=a;_.value=(t||[]).map(((t,a)=>({...t,...e[a]}))),e.length&&(I.value=e.length-1)}}))}));return(t,a)=>{const e=j,s=g,r=b;return c(),o("div",D,[i("div",Y,[S,n(x,{label:"订单号",content:d(O),line:"","is-copy":"","min-width":"other",style:{"margin-bottom":"40px","margin-top":"30px"}},null,8,["content"]),i("div",k,[n(r,{direction:"vertical",active:d(I),"active-color":"#C41E21"},{default:l((()=>[(c(!0),o(p,null,m(d(_),((t,a)=>(c(),v(s,{key:a},{"inactive-icon":l((()=>[n(e,{name:"inactive",class:"icon"})])),"active-icon":l((()=>[n(e,{name:"active",class:"icon"})])),default:l((()=>{return[i("div",w,[i("div",{class:y(["trajectory-step-name",a<=d(I)?"trajectory-step-name-red":""])},u((e=a+1,String(e).padStart(2,"0"))),3),i("div",C,[i("p",{class:y(["trajectory-step-name",a<=d(I)?"trajectory-step-name-active":"trajectory-step-name-grey"])},u(t.stepDesc),3),i("p",H,u(t.stepStatusDesc),1),i("p",L,u(t.stepTime&&d(f)(t.stepTime).format("YYYY-MM-DD HH:mm:ss")),1)])])];var e})),_:2},1024)))),128))])),_:1},8,["active"])])])])}}}),[["__scopeId","data-v-53cea4e4"]]);export{M as default};
