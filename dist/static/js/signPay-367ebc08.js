import{d as a,u as s,a as e,r as t,a1 as c,D as n,ax as i,B as r,b as o,c as l,e as p,w as d,f as u,i as f,j as m}from"./index-1813fb4b.js";import{i as g}from"./core-cc4e3c3c.js";import"./pdfh5-008ca364.js";const b={class:"sign-view"},h={class:"content-box"},x=u("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),y=u("div",{class:"tip"},"确保您的保障按月生效",-1),v=a({__name:"signPay",setup(a){const v=s().query,j=e();t(!1),t(!1),t("");const w=()=>{j.replace({path:"/cashier/payCheck",query:v})};return c((()=>{g&&n.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{w()}))})),(a,s)=>{const e=i,t=r,c=o("ProPageWrap");return l(),p(c,{"main-class":"page-sign-pay"},{default:d((()=>[u("div",b,[u("div",h,[f(e,{name:"wechat-pay",class:"large-icon"}),x,y]),f(t,{size:"large",block:"",class:"btn-go-wx",onClick:w},{default:d((()=>[m(" 前往微信开通 ")])),_:1})])])),_:1})}}});export{v as default};
