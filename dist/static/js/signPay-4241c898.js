import{d as a,u as s,bI as e,a as t,r as c,Z as n,D as r,ah as i,B as o,a3 as l,bq as p,b as d,g as u,w as m,e as f,i as g,j as h,f as b}from"./index-82e1b056.js";import{i as v}from"./core-c72d10f7.js";const y={class:"sign-view"},x={class:"content-box"},_=g("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),w=g("div",{class:"tip"},"确保您的保障按月生效",-1),j=a({__name:"signPay",setup(a){const j=s().query,k=e(),q=t();c(!1),c(!1),c("");const P=()=>{q.replace({path:"/cashier/payCheck",query:j})};return n((()=>{v&&r.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{P()}))})),(a,s)=>{const e=i,t=o,c=l("ProPageWrap"),n=p;return d(),u(n,{"theme-vars":b(k)},{default:m((()=>[f(c,{"main-class":"page-sign-pay"},{default:m((()=>[g("div",y,[g("div",x,[f(e,{name:"wechat-pay",class:"large-icon"}),_,w]),f(t,{size:"large",block:"",class:"btn-go-wx",onClick:P},{default:m((()=>[h(" 前往微信开通 ")])),_:1})])])),_:1})])),_:1},8,["theme-vars"])}}});export{j as default};
