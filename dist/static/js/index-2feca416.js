import{_ as t,d as a,i as e,j as s,l as r,o,c,a as i,b as n,u as d,w as l,F as p,s as m,p as v,n as y,e as u,ay as f,ao as j,eh as g,ei as I,aC as _,aD as b}from"./index-53e50d90.js";import{o as h}from"./order-587410c2.js";import{I as x}from"./infoItem-f64db917.js";const D={style:{background:"#f4f5f9"}},Y={class:"trajectory-body"},S=(t=>(_("data-v-6957980a"),t=t(),b(),t))((()=>i("p",{class:"trajectory-title"},"订单进度",-1))),k={class:"list"},w={class:"trajectory-step"},C={style:{"padding-left":"40px"}},H={class:"trajectory-step-status"},L={class:"trajectory-step-time"};var M=t(a({__name:"index",setup(t){const a=e(),_=s(0),b=s(),{query:{orderId:M,orderNo:T,tenantId:q}}=a;r((()=>{h({orderId:M,tenantId:q}).then((({code:t,data:a})=>{if("10000"===t){const{originList:t,recordResVOList:e}=a;b.value=e,e.length&&(_.value=e.length-1)}}))}));return(t,a)=>{const e=j,s=g,r=I;return o(),c("div",D,[i("div",Y,[S,n(x,{label:"订单号",content:d(T),line:"","is-copy":"","min-width":"other",style:{"margin-bottom":"40px","margin-top":"30px"}},null,8,["content"]),i("div",k,[n(r,{direction:"vertical",active:d(_),"active-color":"#C41E21"},{default:l((()=>[(o(!0),c(p,null,m(d(b),((t,a)=>(o(),v(s,{key:a},{"inactive-icon":l((()=>[n(e,{name:"inactive",class:"icon"})])),"active-icon":l((()=>[n(e,{name:"active",class:"icon"})])),default:l((()=>{return[i("div",w,[i("div",{class:y(["trajectory-step-name",a<=d(_)?"trajectory-step-name-red":""])},u((e=a+1,String(e).padStart(2,"0"))),3),i("div",C,[i("p",{class:y(["trajectory-step-name",a<=d(_)?"trajectory-step-name-active":"trajectory-step-name-grey"])},u(t.stepDesc),3),i("p",H,u(t.stepStatusDesc),1),i("p",L,u(t.stepTime&&d(f)(t.stepTime).format("YYYY-MM-DD HH:mm:ss")),1)])])];var e})),_:2},1024)))),128))])),_:1},8,["active"])])])])}}}),[["__scopeId","data-v-6957980a"]]);export{M as default};
