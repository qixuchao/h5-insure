import{d as a,i as s,d2 as e,h as t,j as n,O as c,aK as i,bp as r,ai as o,l,be as p,o as d,m,w as u,b as g,a as h,a8 as b,u as f}from"./index-a381ae29.js";import{i as v}from"./core-a8ed9eb9.js";const y={class:"sign-view"},x={class:"content-box"},_=h("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),w=h("div",{class:"tip"},"确保您的保障按月生效",-1),j=a({__name:"signPay",setup(a){const j=s().query,k=e(),P=t();n(!1),n(!1),n("");const q=()=>{P.replace({path:"/cashier/payCheck",query:j})};return c((()=>{v&&i.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{q()}))})),(a,s)=>{const e=r,t=o,n=l("ProPageWrap"),c=p;return d(),m(c,{"theme-vars":f(k)},{default:u((()=>[g(n,{"main-class":"page-sign-pay"},{default:u((()=>[h("div",y,[h("div",x,[g(e,{name:"wechat-pay",class:"large-icon"}),_,w]),g(t,{size:"large",block:"",class:"btn-go-wx",onClick:q},{default:u((()=>[b(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{j as default};
