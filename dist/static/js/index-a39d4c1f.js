import{_ as a,d as e,i as t,j as s,O as r,o as c,c as o,a as i,b as n,u as d,w as l,F as p,q as m,m as v,n as y,e as u,an as f,ae as j,dL as g,dM as b,aC as I,aD as _}from"./index-bee60323.js";import{o as x}from"./order-4915fe5e.js";import{I as h}from"./infoItem-4576bb67.js";const D={style:{background:"#f4f5f9"}},Y={class:"trajectory-body"},L=(a=>(I("data-v-53cea4e4"),a=a(),_(),a))((()=>i("p",{class:"trajectory-title"},"订单进度",-1))),M={class:"list"},S={class:"trajectory-step"},k={style:{"padding-left":"40px"}},q={class:"trajectory-step-status"},w={class:"trajectory-step-time"};var C=a(e({__name:"index",setup(a){const e=t(),I=s(0),_=s(),{query:{orderId:C,orderNo:H,tenantId:O}}=e;r((()=>{x({orderId:C,tenantId:O}).then((({code:a,data:e})=>{if("10000"===a){const{originList:a,recordResVOList:t}=e;_.value=(a||[]).map(((a,e)=>({...a,...t[e]}))),t.length&&(I.value=t.length-1)}}))}));return(a,e)=>{const t=j,s=g,r=b;return c(),o("div",D,[i("div",Y,[L,n(h,{label:"订单号",content:d(H),line:"","is-copy":"","min-width":"other",style:{"margin-bottom":"40px","margin-top":"30px"}},null,8,["content"]),i("div",M,[n(r,{direction:"vertical",active:d(I),"active-color":"#C41E21"},{default:l((()=>[(c(!0),o(p,null,m(d(_),((a,e)=>(c(),v(s,{key:e},{"inactive-icon":l((()=>[n(t,{name:"inactive",class:"icon"})])),"active-icon":l((()=>[n(t,{name:"active",class:"icon"})])),default:l((()=>{return[i("div",S,[i("div",{class:y(["trajectory-step-name",e<=d(I)?"trajectory-step-name-red":""])},u((t=e+1,String(t).padStart(2,"0"))),3),i("div",k,[i("p",{class:y(["trajectory-step-name",e<=d(I)?"trajectory-step-name-active":"trajectory-step-name-grey"])},u(a.stepDesc),3),i("p",q,u(a.stepStatusDesc),1),i("p",w,u(a.stepTime&&d(f)(a.stepTime).format("YYYY-MM-DD HH:mm:ss")),1)])])];var t})),_:2},1024)))),128))])),_:1},8,["active"])])])])}}}),[["__scopeId","data-v-53cea4e4"]]);export{C as default};
