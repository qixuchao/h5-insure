import{_ as a,d as t,i as e,j as s,l as r,o as c,c as o,a as i,b as n,u as d,w as l,F as p,s as m,p as v,n as y,e as u,aN as f,aG as j,ef as b,eg as g,b0 as I,b1 as _}from"./index-b2da35c9.js";import{o as x}from"./order-86bafcd4.js";import{I as h}from"./infoItem-282ab2be.js";const D={style:{background:"#f4f5f9"}},Y={class:"trajectory-body"},S=(a=>(I("data-v-6957980a"),a=a(),_(),a))((()=>i("p",{class:"trajectory-title"},"订单进度",-1))),k={class:"list"},w={class:"trajectory-step"},H={style:{"padding-left":"40px"}},L={class:"trajectory-step-status"},M={class:"trajectory-step-time"};var N=a(t({__name:"index",setup(a){const t=e(),I=s(0),_=s(),{query:{orderId:N,orderNo:T,tenantId:q}}=t;r((()=>{x({orderId:N,tenantId:q}).then((({code:a,data:t})=>{if("10000"===a){const{originList:a,recordResVOList:e}=t;_.value=e,e.length&&(I.value=e.length-1)}}))}));return(a,t)=>{const e=j,s=b,r=g;return c(),o("div",D,[i("div",Y,[S,n(h,{label:"订单号",content:d(T),line:"","is-copy":"","min-width":"other",style:{"margin-bottom":"40px","margin-top":"30px"}},null,8,["content"]),i("div",k,[n(r,{direction:"vertical",active:d(I),"active-color":"#C41E21"},{default:l((()=>[(c(!0),o(p,null,m(d(_),((a,t)=>(c(),v(s,{key:t},{"inactive-icon":l((()=>[n(e,{name:"inactive",class:"icon"})])),"active-icon":l((()=>[n(e,{name:"active",class:"icon"})])),default:l((()=>{return[i("div",w,[i("div",{class:y(["trajectory-step-name",t<=d(I)?"trajectory-step-name-red":""])},u((e=t+1,String(e).padStart(2,"0"))),3),i("div",H,[i("p",{class:y(["trajectory-step-name",t<=d(I)?"trajectory-step-name-active":"trajectory-step-name-grey"])},u(a.stepDesc),3),i("p",L,u(a.stepStatusDesc),1),i("p",M,u(a.stepTime&&d(f)(a.stepTime).format("YYYY-MM-DD HH:mm:ss")),1)])])];var e})),_:2},1024)))),128))])),_:1},8,["active"])])])])}}}),[["__scopeId","data-v-6957980a"]]);export{N as default};
