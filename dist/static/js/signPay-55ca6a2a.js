import{d as a,u as s,a as e,r as t,a1 as c,D as n,ax as i,B as r,b as o,c as l,e as p,w as d,f as u,i as f,j as m}from"./index-2d469993.js";import{i as g}from"./core-34f70c48.js";import"./pdfh5-008ca364.js";const h={class:"sign-view"},x={class:"content-box"},y=u("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),v=u("div",{class:"tip"},"确保您的保障按月生效",-1),b=a({__name:"signPay",setup(a){const b=s().query,j=e();t(!1),t(!1),t("");const w=()=>{j.replace({path:"/cashier/payCheck",query:b})};return c((()=>{g&&n.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{w()}))})),(a,s)=>{const e=i,t=r,c=o("ProPageWrap");return l(),p(c,{"main-class":"page-sign-pay"},{default:d((()=>[u("div",h,[u("div",x,[f(e,{name:"wechat-pay",class:"large-icon"}),y,v]),f(t,{size:"large",block:"",class:"btn-go-wx",onClick:w},{default:d((()=>[m(" 前往微信开通 ")])),_:1})])])),_:1})}}});export{b as default};
