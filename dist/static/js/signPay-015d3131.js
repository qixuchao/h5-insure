import{d as a,i as s,de as e,h as t,j as r,l as n,aN as c,aa as i,m as o,br as l,o as p,p as d,w as m,b as u,a as b,v as g,u as h,ar as v}from"./index-53124bb3.js";import{i as f}from"./core-b409a452.js";const y={class:"sign-view"},x={class:"content-box"},_=b("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),w=b("div",{class:"tip"},"确保您的保障按月生效",-1),j=a({__name:"signPay",setup(a){const j=s().query,k=e(),P=t();r(!1),r(!1),r("");const q=()=>{P.replace({path:"/cashier/payCheck",query:j})};return n((()=>{f&&c.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{q()}))})),(a,s)=>{const e=i,t=v,r=o("ProPageWrap"),n=l;return p(),d(n,{"theme-vars":h(k)},{default:m((()=>[u(r,{"main-class":"page-sign-pay"},{default:m((()=>[b("div",y,[b("div",x,[u(e,{name:"wechat-pay",class:"large-icon"}),_,w]),u(t,{size:"large",block:"",class:"btn-go-wx",onClick:q},{default:m((()=>[g(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{j as default};
