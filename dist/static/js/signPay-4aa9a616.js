import{d as a,a as s,u as e,r as t,y as c,a5 as n,b as o,c as i,e as r,w as l,i as p,f as d,n as u}from"./index-fe8152f2.js";import{i as f}from"./core-2ad2f7cb.js";import"./pdfh5-e5c0db2a.js";import"./index-c6b2b786.js";import"./useStorage-2460bb63.js";const b={class:"sign-view"},m={class:"content-box"},g=p("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),h=p("div",{class:"tip"},"确保您的保障按月生效",-1),v=u(" 前往微信开通 "),x=a({setup(a){const u=s().query,x=e();t(!1),t(!1),t("");const y=()=>{x.replace({path:"/cashier/payCheck",query:u})};return c((()=>{f&&n.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{y()}))})),(a,s)=>{const e=o("van-icon"),t=o("VanButton"),c=o("ProPageWrap");return i(),r(c,{"main-class":"page-sign-pay"},{default:l((()=>[p("div",b,[p("div",m,[d(e,{name:"wechat-pay",class:"large-icon"}),g,h]),d(t,{size:"large",block:"",class:"btn-go-wx",onClick:y},{default:l((()=>[v])),_:1})])])),_:1})}}});export{x as default};
