import{d as a,a as s,u as t,r as e,y as n,a4 as c,b as i,c as o,e as r,w as l,i as p,f as d,n as u}from"./index-a31d9b23.js";import{i as f}from"./core-519deb0a.js";import"./pdfdist-3849db64.js";import"./index-65c726f2.js";import"./useStorage-ffc5911a.js";const m={class:"sign-view"},g={class:"content-box"},b=p("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),v=p("div",{class:"tip"},"确保您的保障按月生效",-1),x=u(" 前往微信开通 "),y=a({setup(a){const u=s().query,y=t();e(!1),e(!1),e("");const h=()=>{y.replace({path:"/cashier/payCheck",query:u})};return n((()=>{f&&c.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{h()}))})),(a,s)=>{const t=i("van-icon"),e=i("VanButton"),n=i("ProPageWrap");return o(),r(n,{"main-class":"page-sign-pay"},{default:l((()=>[p("div",m,[p("div",g,[d(t,{name:"wechat-pay",class:"large-icon"}),b,v]),d(e,{size:"large",block:"",class:"btn-go-wx",onClick:h},{default:l((()=>[x])),_:1})])])),_:1})}}});export{y as default};
