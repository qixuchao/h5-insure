import{d as a,i as s,cP as e,h as t,j as c,O as n,aI as r,bl as i,ag as o,l,bb as p,o as m,m as u,w as d,b as f,a as g,a8 as h,u as b}from"./index-fe52439c.js";import{i as v}from"./core-10271f94.js";const y={class:"sign-view"},x={class:"content-box"},_=g("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),w=g("div",{class:"tip"},"确保您的保障按月生效",-1),P=a({__name:"signPay",setup(a){const P=s().query,j=e(),k=t();c(!1),c(!1),c("");const q=()=>{k.replace({path:"/cashier/payCheck",query:P})};return n((()=>{v&&r.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{q()}))})),(a,s)=>{const e=i,t=o,c=l("ProPageWrap"),n=p;return m(),u(n,{"theme-vars":b(j)},{default:d((()=>[f(c,{"main-class":"page-sign-pay"},{default:d((()=>[g("div",y,[g("div",x,[f(e,{name:"wechat-pay",class:"large-icon"}),_,w]),f(t,{size:"large",block:"",class:"btn-go-wx",onClick:q},{default:d((()=>[h(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{P as default};
