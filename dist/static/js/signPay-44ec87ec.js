import{d as a,h as s,cw as e,g as t,i as c,O as n,az as r,bg as i,an as o,k as l,b6 as d,o as p,l as u,w as g,b as m,a as h,a8 as b,u as f}from"./index-22927d88.js";import{i as v}from"./core-8d245bcc.js";const y={class:"sign-view"},w={class:"content-box"},x=h("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),_=h("div",{class:"tip"},"确保您的保障按月生效",-1),k=a({__name:"signPay",setup(a){const k=s().query,P=e(),j=t();c(!1),c(!1),c("");const q=()=>{j.replace({path:"/cashier/payCheck",query:k})};return n((()=>{v&&r.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{q()}))})),(a,s)=>{const e=i,t=o,c=l("ProPageWrap"),n=d;return p(),u(n,{"theme-vars":f(P)},{default:g((()=>[m(c,{"main-class":"page-sign-pay"},{default:g((()=>[h("div",y,[h("div",w,[m(e,{name:"wechat-pay",class:"large-icon"}),x,_]),m(t,{size:"large",block:"",class:"btn-go-wx",onClick:q},{default:g((()=>[b(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{k as default};
