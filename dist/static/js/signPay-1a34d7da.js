import{d as a,u as s,c3 as e,a as t,r as c,R as n,D as r,ai as i,B as o,Z as l,bM as d,b as p,g as u,w as m,e as g,i as f,j as h,f as v}from"./index-ade84c05.js";import{i as y}from"./core-7dc31717.js";const b={class:"sign-view"},x={class:"content-box"},_=f("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),w=f("div",{class:"tip"},"确保您的保障按月生效",-1),j=a({__name:"signPay",setup(a){const j=s().query,k=e(),P=t();c(!1),c(!1),c("");const q=()=>{P.replace({path:"/cashier/payCheck",query:j})};return n((()=>{y&&r.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{q()}))})),(a,s)=>{const e=i,t=o,c=l("ProPageWrap"),n=d;return p(),u(n,{"theme-vars":v(k)},{default:m((()=>[g(c,{"main-class":"page-sign-pay"},{default:m((()=>[f("div",b,[f("div",x,[g(e,{name:"wechat-pay",class:"large-icon"}),_,w]),g(t,{size:"large",block:"",class:"btn-go-wx",onClick:q},{default:m((()=>[h(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{j as default};
