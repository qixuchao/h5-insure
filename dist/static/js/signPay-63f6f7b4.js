import{d as a,i as s,dd as e,h as t,j as r,l as c,aN as n,aa as i,ar as o,m as l,br as p,o as d,p as m,w as u,b,a as g,v as h,u as v}from"./index-acb153ab.js";import{i as f}from"./core-5e85000b.js";const y={class:"sign-view"},x={class:"content-box"},_=g("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),w=g("div",{class:"tip"},"确保您的保障按月生效",-1),j=a({__name:"signPay",setup(a){const j=s().query,k=e(),P=t();r(!1),r(!1),r("");const q=()=>{P.replace({path:"/cashier/payCheck",query:j})};return c((()=>{f&&n.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{q()}))})),(a,s)=>{const e=i,t=o,r=l("ProPageWrap"),c=p;return d(),m(c,{"theme-vars":v(k)},{default:u((()=>[b(r,{"main-class":"page-sign-pay"},{default:u((()=>[g("div",y,[g("div",x,[b(e,{name:"wechat-pay",class:"large-icon"}),_,w]),b(t,{size:"large",block:"",class:"btn-go-wx",onClick:q},{default:u((()=>[h(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{j as default};
