import{d as a,a as s,u as e,r as t,y as c,a4 as n,b as i,c as o,e as r,w as l,i as p,f as d,n as f}from"./index-ede405b0.js";import{i as u}from"./core-d078ab35.js";import"./pdfdist-66c75904.js";import"./index-c1807f2c.js";import"./useStorage-ffa94fcc.js";const m={class:"sign-view"},g={class:"content-box"},b=p("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),v=p("div",{class:"tip"},"确保您的保障按月生效",-1),x=f(" 前往微信开通 "),y=a({setup(a){const f=s().query,y=e();t(!1),t(!1),t("");const h=()=>{y.replace({path:"/cashier/payCheck",query:f})};return c((()=>{u&&n.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{h()}))})),(a,s)=>{const e=i("van-icon"),t=i("VanButton"),c=i("ProPageWrap");return o(),r(c,{"main-class":"page-sign-pay"},{default:l((()=>[p("div",m,[p("div",g,[d(e,{name:"wechat-pay",class:"large-icon"}),b,v]),d(t,{size:"large",block:"",class:"btn-go-wx",onClick:h},{default:l((()=>[x])),_:1})])])),_:1})}}});export{y as default};
