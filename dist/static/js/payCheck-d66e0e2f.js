var t=Object.defineProperty,e=(e,s,a)=>(((e,s,a)=>{s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a})(e,"symbol"!=typeof s?s+"":s,a),a);import{d as s,u as a,r as i,D as r,a1 as o,av as n,b as m,c,e as l,w as u,g as h,A as d,h as p,f as b,i as f}from"./index-abbaf02a.js";import{u as v,b as y,c as w}from"./core-e513fea6.js";import"./pdfh5-008ca364.js";const T=()=>{};class g{constructor(t){e(this,"params"),e(this,"time",1e3),e(this,"total",0),e(this,"timer"),this.params=this.init(t)}init(t){const e={start:t.start||T,stop:t.stop||T,number:t.number?Math.abs(t.number):0,time:t.time?Math.abs(t.time):300};return this.time=t.time,e}run(){this.timer=setTimeout(this.runTime.bind(this),this.time)}stop(){clearTimeout(this.timer),this.params.stop()}runTime(){try{this.params.start()}finally{if(this.params.number>0){if(this.total>=this.params.number)return this.params.stop(),void clearTimeout(this.timer);this.total||(this.total=1),this.total+=1}clearTimeout(this.timer)}this.timer=setTimeout(this.runTime.bind(this),this.time)}}const x={key:0,class:"wait-loading"},k={key:1,class:"result-view"},I={class:"content-box"},_=b("div",{class:"content"},"开通成功，正在为您生成保单...",-1),j=b("div",{class:"tip"},"请勿返回或退出",-1),N=s({__name:"payCheck",setup(t){const e=a().query,s=i(!1),T=i(!1),N=i(""),C=i(!0);let P;const $=()=>{y({tenantId:e.tenantId,orderNo:e.orderNo}).then((t=>{const{code:a,data:i}=t;"10000"===a&&(C.value=!1);const r=i.redirectUrl||`/baseInsurance/orderDetail?orderNo=${e.businessTradeNo}&tenantId=${e.tenantId}&productCode=${e.productCode}`;1==+i.status?(T.value=!0,P.stop(),window.location.href=r):1==+e.from_wxpay?s.value=!0:w(e)})).catch()};return P=new g({start:()=>{console.log("开始轮询"),$()},stop:()=>{console.log("结束轮询"),T.value||r.alert({title:"提示",message:"未查到支付成功状态，请检查是否已支付完成",confirmButtonText:"好的，我知道了"}).then((()=>{window.location.href=N.value}))},time:2e3,number:5}),v(),o((()=>{1==+e.from_wxpay?(s.value=!0,P.run()):$()})),(t,e)=>{const a=n,i=m("ProPageWrap");return c(),l(i,{"main-class":"page-pay-check"},{default:u((()=>[h(C)&&!h(s)?(c(),d("div",x,"加载中，请稍候...")):p("",!0),!h(C)&&h(s)?(c(),d("div",k,[b("div",I,[f(a,{name:"checked",class:"large-icon"}),_,j])])):p("",!0)])),_:1})}}});export{N as default};
