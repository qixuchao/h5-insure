import{d as a,a as s,u as e,r as t,G as c,aj as n,b4 as r,B as i,c as o,e as l,w as p,j as d,f,n as u,b}from"./index-71bbbe3f.js";import{i as m}from"./core-ad11f9b0.js";import"./pdfh5-008ca364.js";const g={class:"sign-view"},h={class:"content-box"},y=d("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),j=d("div",{class:"tip"},"确保您的保障按月生效",-1),v=a({__name:"signPay",setup(a){const v=s().query,x=e();t(!1),t(!1),t("");const w=()=>{x.replace({path:"/cashier/payCheck",query:v})};return c((()=>{m&&n.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{w()}))})),(a,s)=>{const e=r,t=i,c=b("ProPageWrap");return o(),l(c,{"main-class":"page-sign-pay"},{default:p((()=>[d("div",g,[d("div",h,[f(e,{name:"wechat-pay",class:"large-icon"}),y,j]),f(t,{size:"large",block:"",class:"btn-go-wx",onClick:w},{default:p((()=>[u(" 前往微信开通 ")])),_:1})])])),_:1})}}});export{v as default};
