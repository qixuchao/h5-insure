import{d as a,i as s,d7 as e,h as t,j as n,l as c,aD as r,bt as i,aj as o,m as l,bh as d,o as p,p as m,w as u,b as h,a as f,a8 as g,u as b}from"./index-06dd3669.js";import{i as v}from"./core-87f1e03b.js";const y={class:"sign-view"},x={class:"content-box"},_=f("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),j=f("div",{class:"tip"},"确保您的保障按月生效",-1),w=a({__name:"signPay",setup(a){const w=s().query,k=e(),P=t();n(!1),n(!1),n("");const q=()=>{P.replace({path:"/cashier/payCheck",query:w})};return c((()=>{v&&r.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{q()}))})),(a,s)=>{const e=i,t=o,n=l("ProPageWrap"),c=d;return p(),m(c,{"theme-vars":b(k)},{default:u((()=>[h(n,{"main-class":"page-sign-pay"},{default:u((()=>[f("div",y,[f("div",x,[h(e,{name:"wechat-pay",class:"large-icon"}),_,j]),h(t,{size:"large",block:"",class:"btn-go-wx",onClick:q},{default:u((()=>[g(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{w as default};
