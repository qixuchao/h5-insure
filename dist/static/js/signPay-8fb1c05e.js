import{d as a,i as s,dg as e,h as t,j as n,l as c,bi as i,aa as r,m as o,bC as l,o as p,p as d,w as m,b as u,a as f,v as g,u as b,b3 as h}from"./index-fb7979ef.js";import{i as v}from"./core-3d578396.js";const y={class:"sign-view"},x={class:"content-box"},_=f("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),w=f("div",{class:"tip"},"确保您的保障按月生效",-1),j=a({__name:"signPay",setup(a){const j=s().query,k=e(),C=t();n(!1),n(!1),n("");const P=()=>{C.replace({path:"/cashier/payCheck",query:j})};return c((()=>{v&&i.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{P()}))})),(a,s)=>{const e=r,t=h,n=o("ProPageWrap"),c=l;return p(),d(c,{"theme-vars":b(k)},{default:m((()=>[u(n,{"main-class":"page-sign-pay"},{default:m((()=>[f("div",y,[f("div",x,[u(e,{name:"wechat-pay",class:"large-icon"}),_,w]),u(t,{size:"large",block:"",class:"btn-go-wx",onClick:P},{default:m((()=>[g(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{j as default};
