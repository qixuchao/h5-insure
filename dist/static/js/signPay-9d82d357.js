import{d as a,i as s,d2 as e,h as t,j as n,O as c,aK as i,bp as r,ai as o,l,be as d,o as p,m,w as u,b as f,a as g,a8 as h,u as b}from"./index-0fa7bd0a.js";import{i as v}from"./core-268d208e.js";const y={class:"sign-view"},x={class:"content-box"},_=g("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),w=g("div",{class:"tip"},"确保您的保障按月生效",-1),j=a({__name:"signPay",setup(a){const j=s().query,k=e(),P=t();n(!1),n(!1),n("");const q=()=>{P.replace({path:"/cashier/payCheck",query:j})};return c((()=>{v&&i.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{q()}))})),(a,s)=>{const e=r,t=o,n=l("ProPageWrap"),c=d;return p(),m(c,{"theme-vars":b(k)},{default:u((()=>[f(n,{"main-class":"page-sign-pay"},{default:u((()=>[g("div",y,[g("div",x,[f(e,{name:"wechat-pay",class:"large-icon"}),_,w]),f(t,{size:"large",block:"",class:"btn-go-wx",onClick:q},{default:u((()=>[h(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{j as default};
