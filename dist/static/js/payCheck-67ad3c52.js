var t=Object.defineProperty,e=(e,s,a)=>(((e,s,a)=>{s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a})(e,"symbol"!=typeof s?s+"":s,a),a);import{d as s,a,r as i,a6 as r,y as o,b as n,c as m,e as c,w as u,g as l,h,k as d,j as p,f as b}from"./index-3898adba.js";import{u as f,b as v,c as y}from"./core-eb5ed187.js";import"./pdfh5-008ca364.js";import"./useStorage-e5ca6bac.js";const w=()=>{};class T{constructor(t){e(this,"params"),e(this,"time",1e3),e(this,"total",0),e(this,"timer"),this.params=this.init(t)}init(t){const e={start:t.start||w,stop:t.stop||w,number:t.number?Math.abs(t.number):0,time:t.time?Math.abs(t.time):300};return this.time=t.time,e}run(){this.timer=setTimeout(this.runTime.bind(this),this.time)}stop(){clearTimeout(this.timer),this.params.stop()}runTime(){try{this.params.start()}finally{if(this.params.number>0){if(this.total>=this.params.number)return this.params.stop(),void clearTimeout(this.timer);this.total||(this.total=1),this.total+=1}clearTimeout(this.timer)}this.timer=setTimeout(this.runTime.bind(this),this.time)}}const g={key:0,class:"wait-loading"},j={key:1,class:"result-view"},k={class:"content-box"},x=p("div",{class:"content"},"开通成功，正在为您生成保单...",-1),I=p("div",{class:"tip"},"请勿返回或退出",-1),_=s({__name:"payCheck",setup(t){const e=a().query,s=i(!1),w=i(!1),_=i(""),N=i(!0);let C;const P=()=>{v({tenantId:e.tenantId,orderNo:e.orderNo}).then((t=>{const{code:a,data:i}=t;"10000"===a&&(N.value=!1);const r=i.redirectUrl||`/baseInsurance/orderDetail?orderNo=${e.businessTradeNo}&tenantId=${e.tenantId}&productCode=${e.productCode}`;1==+i.status?(w.value=!0,C.stop(),window.location.href=r):1==+e.from_wxpay?s.value=!0:y(e)})).catch()};return C=new T({start:()=>{P()},stop:()=>{w.value||r.alert({title:"提示",message:"未查到支付成功状态，请检查是否已支付完成",confirmButtonText:"好的，我知道了"}).then((()=>{window.location.href=_.value}))},time:2e3,number:5}),f(),o((()=>{1==+e.from_wxpay?(s.value=!0,C.run()):P()})),(t,e)=>{const a=n("van-icon"),i=n("ProPageWrap");return m(),c(i,{"main-class":"page-pay-check"},{default:u((()=>[l(N)&&!l(s)?(m(),h("div",g,"加载中，请稍候...")):d("",!0),!l(N)&&l(s)?(m(),h("div",j,[p("div",k,[b(a,{name:"checked",class:"large-icon"}),x,I])])):d("",!0)])),_:1})}}});export{_ as default};
