import{d as a,a as s,u as e,r as t,y as n,a4 as c,b as i,c as o,e as r,w as l,i as p,f as d,n as u}from"./index-73a7e8d2.js";import{i as m}from"./core-a5758882.js";import"./pdfdist-5d72820d.js";import"./index-1e43e8a7.js";import"./useStorage-bcf7c308.js";const f={class:"sign-view"},g={class:"content-box"},v=p("div",{class:"content"},"您已选择按月支付，请开通自动续费",-1),x=p("div",{class:"tip"},"确保您的保障按月生效",-1),y=u(" 前往微信开通 "),b=a({setup(a){const u=s().query,b=e();t(!1),t(!1),t("");const h=()=>{b.replace({path:"/cashier/payCheck",query:u})};return n((()=>{m&&c.alert({title:"去微信开通按月缴费",confirmButtonText:"好的，我知道了"}).then((()=>{h()}))})),(a,s)=>{const e=i("van-icon"),t=i("VanButton"),n=i("ProPageWrap");return o(),r(n,{"main-class":"page-sign-pay"},{default:l((()=>[p("div",f,[p("div",g,[d(e,{name:"wechat-pay",class:"large-icon"}),v,x]),d(t,{size:"large",block:"",class:"btn-go-wx",onClick:h},{default:l((()=>[y])),_:1})])])),_:1})}}});export{b as default};
