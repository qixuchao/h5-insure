import{d as a,i as s,cG as e,h as t,j as c,O as n,aI as r,bl as i,ag as o,l,bb as d,o as p,m,w as u,b as f,a as g,a8 as b,u as h}from"./index-4071f9bf.js";import{i as v}from"./core-4de64fda.js";const y={class:"sign-view"},x={class:"content-box"},_=g("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),w=g("div",{class:"tip"},"确保您的保障按月生效",-1),j=a({__name:"signPay",setup(a){const j=s().query,k=e(),P=t();c(!1),c(!1),c("");const q=()=>{P.replace({path:"/cashier/payCheck",query:j})};return n((()=>{v&&r.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{q()}))})),(a,s)=>{const e=i,t=o,c=l("ProPageWrap"),n=d;return p(),m(n,{"theme-vars":h(k)},{default:u((()=>[f(c,{"main-class":"page-sign-pay"},{default:u((()=>[g("div",y,[g("div",x,[f(e,{name:"wechat-pay",class:"large-icon"}),_,w]),f(t,{size:"large",block:"",class:"btn-go-wx",onClick:q},{default:u((()=>[b(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{j as default};
