import{_ as a,d as t,i as e,j as s,l as r,o as c,c as o,a as i,b as n,u as d,w as l,F as p,s as m,p as v,n as y,e as u,ay as j,an as f,eg as g,eh as I,aD as _,aE as b}from"./index-67e7dac2.js";import{o as h}from"./order-03538866.js";import{I as x}from"./infoItem-665db622.js";const D={style:{background:"#f4f5f9"}},Y={class:"trajectory-body"},S=(a=>(_("data-v-6957980a"),a=a(),b(),a))((()=>i("p",{class:"trajectory-title"},"订单进度",-1))),k={class:"list"},w={class:"trajectory-step"},E={style:{"padding-left":"40px"}},H={class:"trajectory-step-status"},L={class:"trajectory-step-time"};var M=a(t({__name:"index",setup(a){const t=e(),_=s(0),b=s(),{query:{orderId:M,orderNo:T,tenantId:q}}=t;r((()=>{h({orderId:M,tenantId:q}).then((({code:a,data:t})=>{if("10000"===a){const{originList:a,recordResVOList:e}=t;b.value=e,e.length&&(_.value=e.length-1)}}))}));return(a,t)=>{const e=f,s=g,r=I;return c(),o("div",D,[i("div",Y,[S,n(x,{label:"订单号",content:d(T),line:"","is-copy":"","min-width":"other",style:{"margin-bottom":"40px","margin-top":"30px"}},null,8,["content"]),i("div",k,[n(r,{direction:"vertical",active:d(_),"active-color":"#C41E21"},{default:l((()=>[(c(!0),o(p,null,m(d(b),((a,t)=>(c(),v(s,{key:t},{"inactive-icon":l((()=>[n(e,{name:"inactive",class:"icon"})])),"active-icon":l((()=>[n(e,{name:"active",class:"icon"})])),default:l((()=>{return[i("div",w,[i("div",{class:y(["trajectory-step-name",t<=d(_)?"trajectory-step-name-red":""])},u((e=t+1,String(e).padStart(2,"0"))),3),i("div",E,[i("p",{class:y(["trajectory-step-name",t<=d(_)?"trajectory-step-name-active":"trajectory-step-name-grey"])},u(a.stepDesc),3),i("p",H,u(a.stepStatusDesc),1),i("p",L,u(a.stepTime&&d(j)(a.stepTime).format("YYYY-MM-DD HH:mm:ss")),1)])])];var e})),_:2},1024)))),128))])),_:1},8,["active"])])])])}}}),[["__scopeId","data-v-6957980a"]]);export{M as default};
