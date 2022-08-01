import{g as V,t as H,h as u,m as c,y as l,I as y,z as a,V as Y,s as r,Q as W,af as j,C as q,M as z,r as $,j as L,k as s,n as t,d as J,E as Q,F as K,ah as d,a1 as X,a2 as Z,B as _}from"./vendor-94f9fb13.js";import{_ as w,P as tt}from"./index-e5acd5ea.js";import{b as et,O as ot,a as v}from"./order-26dc03b5.js";import"./utils-b6782348.js";const st={class:"com-field-info"},ut={class:"label"},at={class:"content"},nt=V({props:{label:{type:String,default:""},content:{type:String,default:""}},setup(i){const D=H();return(f,e)=>(u(),c("div",st,[l("div",ut,y(i.label),1),a(D).label?Y(f.$slots,"label",{key:0},void 0,!0):r("",!0),l("div",at,y(i.content),1),a(D).content?Y(f.$slots,"content",{key:1},void 0,!0):r("",!0)]))}});var o=w(nt,[["__scopeId","data-v-4e47c671"]]);const lt=i=>(X("data-v-d3c68bce"),i=i(),Z(),i),ct={class:"page-order-detail"},rt={class:"card"},dt={class:"header"},_t={class:"product-name"},it={class:"company-name"},pt={class:"status"},vt={class:"card"},Dt=lt(()=>l("div",{class:"detail"},"\u4FDD\u969C\u4FE1\u606F",-1)),ht={key:0,class:"footer-button"},yt=_("\u5220\u9664"),ft=_("\u53BB\u5904\u7406"),mt={key:1,class:"footer-button"},Et=_("\u5220\u9664"),Ct=_("\u53BB\u652F\u4ED8"),Ft={key:2,class:"footer-button"},bt=_("\u5220\u9664"),kt=_("\u53BB\u652F\u4ED8"),St={key:3,class:"footer-button"},At={key:4,class:"footer-button"},Bt={key:5,class:"footer-button"},It=_("\u5220\u9664"),Nt={key:6,class:"footer-button"},Pt=_("\u5220\u9664"),gt=V({setup(i){const D=W(),f=j(),e=q(),h=()=>{},G=()=>{},C=()=>{f.push({path:tt.payInfo,query:{id:1}})};return z(()=>{console.log(D);const{query:{id:F}}=D;et(F).then(b=>{const{code:n,data:E}=b;n==="10000"&&(e.value=E)})}),(F,b)=>{const n=$("van-button"),E=$("ProPageWrap");return u(),L(E,null,{default:s(()=>{var k,S,A,B,I,N,P,g,R,T,M,x;return[l("div",ct,[l("div",rt,[t(o,null,{label:s(()=>{var p,m,O,U;return[l("div",dt,[l("div",_t,y((O=(m=(p=e.value)==null?void 0:p.tenantOrderInsuredList[0])==null?void 0:m.tenantOrderProductList[0])==null?void 0:O.productName),1),l("div",it,y((U=e.value)==null?void 0:U.venderName),1)])]}),content:s(()=>{var p;return[l("div",pt,y(e.value?a(ot)[(p=e.value)==null?void 0:p.orderStatus]:""),1)]}),_:1}),t(o,{label:"\u8BA2\u5355\u53F7",content:(k=e.value)==null?void 0:k.orderNo},null,8,["content"]),t(o,{label:"\u6295\u4FDD\u65F6\u95F4",content:a(J)((S=e.value)==null?void 0:S.orderDate).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),t(o,{label:"\u6295\u4FDD\u4EBA",content:(B=(A=e.value)==null?void 0:A.tenantOrderHolder)==null?void 0:B.name},null,8,["content"]),(u(!0),c(K,null,Q(((I=e.value)==null?void 0:I.tenantOrderInsuredList)||[],(p,m)=>(u(),L(o,{key:m,label:"\u88AB\u4FDD\u4EBA",content:p.name},null,8,["content"]))),128))]),l("div",vt,[t(o,null,{label:s(()=>[Dt]),_:1}),t(o,{label:"\u9669\u79CD\u540D\u79F0",content:"\u6A2A\u7434\u4E00\u53F7\u7EC8\u8EAB\u91CD\u5927\u75BE\u75C5\u4FDD\u9669"}),t(o,{label:"\u4FDD\u969C\u671F\u95F4",content:"\u7EC8\u8EAB"}),t(o,{label:"\u4EA4\u8D39\u671F\u95F4",content:"20\u5E74"}),t(o,{label:"\u4EA4\u8D39\u65B9\u5F0F",content:"\u5E74\u4EA4"}),t(o,{label:"\u9644\u52A0\u8C41\u514D\u4FDD\u9669\u8D39\u91CD\u5927\u75BE\u75C5\u4FDD\u9669",content:"\u6295\u4FDD"}),t(o,{label:"\u4FDD\u969C\u91D1\u989D",content:"\xA5100,000.00"}),t(o,{label:"\u9996\u671F\u4FDD\u8D39",content:"\xA510,000.00"})]),((N=e.value)==null?void 0:N.orderStatus)===a(v).PENDING?(u(),c("div",ht,[t(n,{type:"primary",onClick:d(h,["stop"])},{default:s(()=>[yt]),_:1},8,["onClick"]),t(n,{type:"primary",onClick:d(G,["stop"])},{default:s(()=>[ft]),_:1},8,["onClick"])])):r("",!0),((P=e.value)==null?void 0:P.orderStatus)===a(v).PAYING?(u(),c("div",mt,[t(n,{type:"primary",onClick:d(h,["stop"])},{default:s(()=>[Et]),_:1},8,["onClick"]),t(n,{type:"primary",onClick:d(C,["stop"])},{default:s(()=>[Ct]),_:1},8,["onClick"])])):r("",!0),((g=e.value)==null?void 0:g.orderStatus)===a(v).PAYMENT_FAILED?(u(),c("div",Ft,[t(n,{type:"primary",onClick:d(h,["stop"])},{default:s(()=>[bt]),_:1},8,["onClick"]),t(n,{type:"primary",onClick:d(C,["stop"])},{default:s(()=>[kt]),_:1},8,["onClick"])])):r("",!0),((R=e.value)==null?void 0:R.orderStatus)===a(v).PAYMENT_SUCCESS?(u(),c("div",St)):r("",!0),((T=e.value)==null?void 0:T.orderStatus)===a(v).UNDERWRITE?(u(),c("div",At)):r("",!0),((M=e.value)==null?void 0:M.orderStatus)===a(v).INSURER_REJECT?(u(),c("div",Bt,[t(n,{type:"primary",onClick:d(h,["stop"])},{default:s(()=>[It]),_:1},8,["onClick"])])):r("",!0),((x=e.value)==null?void 0:x.orderStatus)===a(v).TIMEOUT?(u(),c("div",Nt,[t(n,{type:"primary",onClick:d(h,["stop"])},{default:s(()=>[Pt]),_:1},8,["onClick"])])):r("",!0)])]}),_:1})}}});var Ot=w(gt,[["__scopeId","data-v-d3c68bce"]]);export{Ot as default};
