import{_ as a,d as t,i as e,j as s,O as r,o as c,c as o,a as i,b as n,u as d,w as l,F as p,q as m,m as v,n as y,e as u,an as j,ae as f,dS as b,dT as g,aC as I,aD as _}from"./index-c83748d0.js";import{o as x}from"./order-67bcbbb8.js";import{I as h}from"./infoItem-c9ca8028.js";const D={style:{background:"#f4f5f9"}},S={class:"trajectory-body"},Y=(a=>(I("data-v-6957980a"),a=a(),_(),a))((()=>i("p",{class:"trajectory-title"},"订单进度",-1))),T={class:"list"},k={class:"trajectory-step"},q={style:{"padding-left":"40px"}},w={class:"trajectory-step-status"},C={class:"trajectory-step-time"};var H=a(t({__name:"index",setup(a){const t=e(),I=s(0),_=s(),{query:{orderId:H,orderNo:L,tenantId:M}}=t;r((()=>{x({orderId:H,tenantId:M}).then((({code:a,data:t})=>{if("10000"===a){const{originList:a,recordResVOList:e}=t;_.value=e,e.length&&(I.value=e.length-1)}}))}));return(a,t)=>{const e=f,s=b,r=g;return c(),o("div",D,[i("div",S,[Y,n(h,{label:"订单号",content:d(L),line:"","is-copy":"","min-width":"other",style:{"margin-bottom":"40px","margin-top":"30px"}},null,8,["content"]),i("div",T,[n(r,{direction:"vertical",active:d(I),"active-color":"#C41E21"},{default:l((()=>[(c(!0),o(p,null,m(d(_),((a,t)=>(c(),v(s,{key:t},{"inactive-icon":l((()=>[n(e,{name:"inactive",class:"icon"})])),"active-icon":l((()=>[n(e,{name:"active",class:"icon"})])),default:l((()=>{return[i("div",k,[i("div",{class:y(["trajectory-step-name",t<=d(I)?"trajectory-step-name-red":""])},u((e=t+1,String(e).padStart(2,"0"))),3),i("div",q,[i("p",{class:y(["trajectory-step-name",t<=d(I)?"trajectory-step-name-active":"trajectory-step-name-grey"])},u(a.stepDesc),3),i("p",w,u(a.stepStatusDesc),1),i("p",C,u(a.stepTime&&d(j)(a.stepTime).format("YYYY-MM-DD HH:mm:ss")),1)])])];var e})),_:2},1024)))),128))])),_:1},8,["active"])])])])}}}),[["__scopeId","data-v-6957980a"]]);export{H as default};
