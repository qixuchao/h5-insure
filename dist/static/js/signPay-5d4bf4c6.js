import{d as a,u as s,a as e,r as t,a1 as c,D as n,aw as i,B as r,b as o,c as l,e as p,w as f,f as d,i as u,j as m}from"./index-20016307.js";import{i as g}from"./core-f217ffa3.js";import"./pdfh5-008ca364.js";const h={class:"sign-view"},y={class:"content-box"},v=d("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),w=d("div",{class:"tip"},"确保您的保障按月生效",-1),x=a({__name:"signPay",setup(a){const x=s().query,b=e();t(!1),t(!1),t("");const j=()=>{b.replace({path:"/cashier/payCheck",query:x})};return c((()=>{g&&n.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{j()}))})),(a,s)=>{const e=i,t=r,c=o("ProPageWrap");return l(),p(c,{"main-class":"page-sign-pay"},{default:f((()=>[d("div",h,[d("div",y,[u(e,{name:"wechat-pay",class:"large-icon"}),v,w]),u(t,{size:"large",block:"",class:"btn-go-wx",onClick:j},{default:f((()=>[m(" 前往微信开通 ")])),_:1})])])),_:1})}}});export{x as default};
