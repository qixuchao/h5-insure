import{_ as a,d as t,i as e,j as s,O as r,o,c,a as i,b as n,u as d,w as l,F as p,q as m,m as v,n as y,e as u,ap as f,ae as j,dT as g,dU as I,aE as _,aF as b}from"./index-01270b83.js";import{o as x}from"./order-962ffae8.js";import{I as h}from"./infoItem-40a87ee4.js";const D={style:{background:"#f4f5f9"}},Y={class:"trajectory-body"},S=(a=>(_("data-v-6957980a"),a=a(),b(),a))((()=>i("p",{class:"trajectory-title"},"订单进度",-1))),T={class:"list"},k={class:"trajectory-step"},q={style:{"padding-left":"40px"}},w={class:"trajectory-step-status"},E={class:"trajectory-step-time"};var F=a(t({__name:"index",setup(a){const t=e(),_=s(0),b=s(),{query:{orderId:F,orderNo:H,tenantId:L}}=t;r((()=>{x({orderId:F,tenantId:L}).then((({code:a,data:t})=>{if("10000"===a){const{originList:a,recordResVOList:e}=t;b.value=e,e.length&&(_.value=e.length-1)}}))}));return(a,t)=>{const e=j,s=g,r=I;return o(),c("div",D,[i("div",Y,[S,n(h,{label:"订单号",content:d(H),line:"","is-copy":"","min-width":"other",style:{"margin-bottom":"40px","margin-top":"30px"}},null,8,["content"]),i("div",T,[n(r,{direction:"vertical",active:d(_),"active-color":"#C41E21"},{default:l((()=>[(o(!0),c(p,null,m(d(b),((a,t)=>(o(),v(s,{key:t},{"inactive-icon":l((()=>[n(e,{name:"inactive",class:"icon"})])),"active-icon":l((()=>[n(e,{name:"active",class:"icon"})])),default:l((()=>{return[i("div",k,[i("div",{class:y(["trajectory-step-name",t<=d(_)?"trajectory-step-name-red":""])},u((e=t+1,String(e).padStart(2,"0"))),3),i("div",q,[i("p",{class:y(["trajectory-step-name",t<=d(_)?"trajectory-step-name-active":"trajectory-step-name-grey"])},u(a.stepDesc),3),i("p",w,u(a.stepStatusDesc),1),i("p",E,u(a.stepTime&&d(f)(a.stepTime).format("YYYY-MM-DD HH:mm:ss")),1)])])];var e})),_:2},1024)))),128))])),_:1},8,["active"])])])])}}}),[["__scopeId","data-v-6957980a"]]);export{F as default};
