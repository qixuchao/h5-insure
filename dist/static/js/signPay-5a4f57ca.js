import{d as a,i as s,df as e,h as t,j as c,l as n,bi as i,aa as r,m as o,bC as l,o as p,p as d,w as m,b as u,a as b,v as f,u as g,b3 as h}from"./index-2ac8b6d6.js";import{i as v}from"./core-e0720063.js";const y={class:"sign-view"},x={class:"content-box"},_=b("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),w=b("div",{class:"tip"},"确保您的保障按月生效",-1),j=a({__name:"signPay",setup(a){const j=s().query,k=e(),C=t();c(!1),c(!1),c("");const P=()=>{C.replace({path:"/cashier/payCheck",query:j})};return n((()=>{v&&i.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{P()}))})),(a,s)=>{const e=r,t=h,c=o("ProPageWrap"),n=l;return p(),d(n,{"theme-vars":g(k)},{default:m((()=>[u(c,{"main-class":"page-sign-pay"},{default:m((()=>[b("div",y,[b("div",x,[u(e,{name:"wechat-pay",class:"large-icon"}),_,w]),u(t,{size:"large",block:"",class:"btn-go-wx",onClick:P},{default:m((()=>[f(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{j as default};
