import{d as a,i as s,de as e,h as t,j as r,l as c,aN as n,aa as i,m as o,br as l,o as p,p as d,w as m,b as u,a as b,v as f,u as g,ar as h}from"./index-176c9bb7.js";import{i as v}from"./core-b6f0e91e.js";const y={class:"sign-view"},x={class:"content-box"},_=b("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),w=b("div",{class:"tip"},"确保您的保障按月生效",-1),j=a({__name:"signPay",setup(a){const j=s().query,k=e(),P=t();r(!1),r(!1),r("");const q=()=>{P.replace({path:"/cashier/payCheck",query:j})};return c((()=>{v&&n.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{q()}))})),(a,s)=>{const e=i,t=h,r=o("ProPageWrap"),c=l;return p(),d(c,{"theme-vars":g(k)},{default:m((()=>[u(r,{"main-class":"page-sign-pay"},{default:m((()=>[b("div",y,[b("div",x,[u(e,{name:"wechat-pay",class:"large-icon"}),_,w]),u(t,{size:"large",block:"",class:"btn-go-wx",onClick:q},{default:m((()=>[f(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{j as default};
