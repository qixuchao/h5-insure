import{d as a,i as s,cR as e,h as t,j as c,O as n,aH as r,bm as i,ag as o,l,ba as m,o as p,m as d,w as u,b as f,a as g,a8 as h,u as v}from"./index-fc8d0526.js";import{i as b}from"./core-ff6c4638.js";const y={class:"sign-view"},x={class:"content-box"},_=g("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),w=g("div",{class:"tip"},"确保您的保障按月生效",-1),j=a({__name:"signPay",setup(a){const j=s().query,k=e(),P=t();c(!1),c(!1),c("");const q=()=>{P.replace({path:"/cashier/payCheck",query:j})};return n((()=>{b&&r.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{q()}))})),(a,s)=>{const e=i,t=o,c=l("ProPageWrap"),n=m;return p(),d(n,{"theme-vars":v(k)},{default:u((()=>[f(c,{"main-class":"page-sign-pay"},{default:u((()=>[g("div",y,[g("div",x,[f(e,{name:"wechat-pay",class:"large-icon"}),_,w]),f(t,{size:"large",block:"",class:"btn-go-wx",onClick:q},{default:u((()=>[h(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{j as default};
