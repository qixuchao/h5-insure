import{d as a,i as s,dd as e,h as t,j as c,l as r,aN as n,aa as i,m as o,br as l,o as d,p,w as m,b as u,a as f,v as g,u as h,ar as v}from"./index-c51609f0.js";import{i as y}from"./core-7fad25dc.js";const b={class:"sign-view"},x={class:"content-box"},_=f("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),w=f("div",{class:"tip"},"确保您的保障按月生效",-1),j=a({__name:"signPay",setup(a){const j=s().query,k=e(),P=t();c(!1),c(!1),c("");const q=()=>{P.replace({path:"/cashier/payCheck",query:j})};return r((()=>{y&&n.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{q()}))})),(a,s)=>{const e=i,t=v,c=o("ProPageWrap"),r=l;return d(),p(r,{"theme-vars":h(k)},{default:m((()=>[u(c,{"main-class":"page-sign-pay"},{default:m((()=>[f("div",b,[f("div",x,[u(e,{name:"wechat-pay",class:"large-icon"}),_,w]),u(t,{size:"large",block:"",class:"btn-go-wx",onClick:q},{default:m((()=>[g(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{j as default};
