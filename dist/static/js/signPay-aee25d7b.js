import{d as a,u as s,bQ as e,a as t,r as c,a1 as r,D as n,av as i,B as o,bz as l,aV as p,b as d,g as f,w as m,e as u,i as g,j as h,f as v}from"./index-5cf049f8.js";import{i as b}from"./core-6390d68b.js";import"./pdfh5-008ca364.js";const y={class:"sign-view"},x={class:"content-box"},_=g("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),j=g("div",{class:"tip"},"确保您的保障按月生效",-1),w=a({__name:"signPay",setup(a){const w=s().query,k=e(),P=t();c(!1),c(!1),c("");const q=()=>{P.replace({path:"/cashier/payCheck",query:w})};return r((()=>{b&&n.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{q()}))})),(a,s)=>{const e=i,t=o,c=l("ProPageWrap"),r=p;return d(),f(r,{"theme-vars":v(k)},{default:m((()=>[u(c,{"main-class":"page-sign-pay"},{default:m((()=>[g("div",y,[g("div",x,[u(e,{name:"wechat-pay",class:"large-icon"}),_,j]),u(t,{size:"large",block:"",class:"btn-go-wx",onClick:q},{default:m((()=>[h(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{w as default};
