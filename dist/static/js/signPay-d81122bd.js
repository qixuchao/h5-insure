import{d as a,i as s,cP as e,h as t,j as c,O as n,aI as r,bl as i,ag as o,l,bb as p,o as d,m,w as u,b as g,a as f,a8 as h,u as b}from"./index-256fc805.js";import{i as v}from"./core-9e7a327d.js";const y={class:"sign-view"},x={class:"content-box"},_=f("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),w=f("div",{class:"tip"},"确保您的保障按月生效",-1),P=a({__name:"signPay",setup(a){const P=s().query,j=e(),k=t();c(!1),c(!1),c("");const q=()=>{k.replace({path:"/cashier/payCheck",query:P})};return n((()=>{v&&r.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{q()}))})),(a,s)=>{const e=i,t=o,c=l("ProPageWrap"),n=p;return d(),m(n,{"theme-vars":b(j)},{default:u((()=>[g(c,{"main-class":"page-sign-pay"},{default:u((()=>[f("div",y,[f("div",x,[g(e,{name:"wechat-pay",class:"large-icon"}),_,w]),g(t,{size:"large",block:"",class:"btn-go-wx",onClick:q},{default:u((()=>[h(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{P as default};
