import{d as a,h as s,cA as e,g as t,i as c,O as n,az as r,bg as i,an as o,k as l,b6 as p,o as u,l as d,w as g,b as m,a as f,a8 as b,u as h}from"./index-a6b4898c.js";import{i as v}from"./core-bff09cea.js";const y={class:"sign-view"},x={class:"content-box"},_=f("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),k=f("div",{class:"tip"},"确保您的保障按月生效",-1),w=a({__name:"signPay",setup(a){const w=s().query,P=e(),j=t();c(!1),c(!1),c("");const q=()=>{j.replace({path:"/cashier/payCheck",query:w})};return n((()=>{v&&r.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{q()}))})),(a,s)=>{const e=i,t=o,c=l("ProPageWrap"),n=p;return u(),d(n,{"theme-vars":h(P)},{default:g((()=>[m(c,{"main-class":"page-sign-pay"},{default:g((()=>[f("div",y,[f("div",x,[m(e,{name:"wechat-pay",class:"large-icon"}),_,k]),m(t,{size:"large",block:"",class:"btn-go-wx",onClick:q},{default:g((()=>[b(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{w as default};
