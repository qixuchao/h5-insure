import{d as a,i as s,de as e,h as t,j as r,l as n,aN as c,aa as i,m as o,br as l,o as d,p,w as m,b as u,a as f,v as g,u as h,ar as v}from"./index-7bdfed5a.js";import{i as b}from"./core-62917bae.js";const y={class:"sign-view"},x={class:"content-box"},_=f("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),w=f("div",{class:"tip"},"确保您的保障按月生效",-1),j=a({__name:"signPay",setup(a){const j=s().query,k=e(),P=t();r(!1),r(!1),r("");const q=()=>{P.replace({path:"/cashier/payCheck",query:j})};return n((()=>{b&&c.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{q()}))})),(a,s)=>{const e=i,t=v,r=o("ProPageWrap"),n=l;return d(),p(n,{"theme-vars":h(k)},{default:m((()=>[u(r,{"main-class":"page-sign-pay"},{default:m((()=>[f("div",y,[f("div",x,[u(e,{name:"wechat-pay",class:"large-icon"}),_,w]),u(t,{size:"large",block:"",class:"btn-go-wx",onClick:q},{default:m((()=>[g(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{j as default};
