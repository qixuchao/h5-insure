import{d as a,u as s,bJ as e,a as t,r as n,R as r,D as c,af as i,B as o,Z as l,bs as p,b as f,g as u,w as d,e as m,i as g,j as b,f as h}from"./index-0273ea18.js";import{i as v}from"./core-fba5f13a.js";const y={class:"sign-view"},x={class:"content-box"},_=g("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),w=g("div",{class:"tip"},"确保您的保障按月生效",-1),j=a({__name:"signPay",setup(a){const j=s().query,k=e(),P=t();n(!1),n(!1),n("");const q=()=>{P.replace({path:"/cashier/payCheck",query:j})};return r((()=>{v&&c.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{q()}))})),(a,s)=>{const e=i,t=o,n=l("ProPageWrap"),r=p;return f(),u(r,{"theme-vars":h(k)},{default:d((()=>[m(n,{"main-class":"page-sign-pay"},{default:d((()=>[g("div",y,[g("div",x,[m(e,{name:"wechat-pay",class:"large-icon"}),_,w]),m(t,{size:"large",block:"",class:"btn-go-wx",onClick:q},{default:d((()=>[b(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{j as default};
