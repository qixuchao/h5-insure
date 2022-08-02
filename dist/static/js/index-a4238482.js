import{g as q,t as H,h as a,m as c,y as l,I,z as n,V as L,s as i,Q as W,af as j,C as z,M as J,r as Y,j as $,k as s,n as t,d as Q,E as K,F as X,ah as _,a1 as Z,a2 as ee,B as p,D as te,T as oe}from"./vendor-07b5d0eb.js";import{_ as w,P as V}from"./index-708d934e.js";import{b as ue,O as se,a as h,d as ae}from"./order-2d68e209.js";import"./utils-b6782348.js";const ne={class:"com-field-info"},re={class:"label"},de={class:"content"},le=q({props:{label:{type:String,default:""},content:{type:String,default:""}},setup(v){const F=H();return(b,e)=>(a(),c("div",ne,[l("div",re,I(v.label),1),n(F).label?L(b.$slots,"label",{key:0},void 0,!0):i("",!0),l("div",de,I(v.content),1),n(F).content?L(b.$slots,"content",{key:1},void 0,!0):i("",!0)]))}});var u=w(le,[["__scopeId","data-v-4e47c671"]]);const ce=v=>(Z("data-v-4dabdf79"),v=v(),ee(),v),ie={class:"page-order-detail"},_e={class:"card"},pe={class:"header"},ve={class:"product-name"},De={class:"company-name"},fe={class:"status"},he={class:"card"},me=ce(()=>l("div",{class:"detail"},"\u4FDD\u969C\u4FE1\u606F",-1)),ye={key:0,class:"footer-button"},Ce=p("\u5220\u9664"),Ee=p("\u53BB\u5904\u7406"),Fe={key:1,class:"footer-button"},be=p("\u5220\u9664"),ke=p("\u53BB\u652F\u4ED8"),Ie={key:2,class:"footer-button"},Ae=p("\u5220\u9664"),Se=p("\u53BB\u652F\u4ED8"),Be={key:3,class:"footer-button"},Ne={key:4,class:"footer-button"},Pe={key:5,class:"footer-button"},ge=p("\u5220\u9664"),Oe={key:6,class:"footer-button"},Te=p("\u5220\u9664"),xe=q({setup(v){const F=W(),b=j(),e=z(),k=()=>{te.confirm({title:"\u786E\u8BA4",message:"\u786E\u8BA4\u5220\u9664\u8BA2\u5355\uFF1F"}).then(()=>{ae(e.value.id).then(r=>{const{code:d,data:o}=r;d==="10000"&&oe.success("\u5220\u9664\u6210\u529F")})})},G=()=>{var r,d;if(e.value){const{orderNo:o,id:D,saleUserId:m,tenantId:y,extInfo:{templateId:C,pageCode:E}}=e.value,A=(d=(r=e.value.tenantOrderInsuredList[0])==null?void 0:r.tenantOrderProductList[0])==null?void 0:d.productCode;b.push({path:V[E],query:{productCode:A,orderNo:o,orderId:D,saleUserId:m,templateId:C,tenantId:y}})}},B=()=>{var r,d;if(e.value){const{orderNo:o,id:D,saleUserId:m,tenantId:y,extInfo:{templateId:C}}=e.value,E=(d=(r=e.value.tenantOrderInsuredList[0])==null?void 0:r.tenantOrderProductList[0])==null?void 0:d.productCode;b.push({path:V.payInfo,query:{productCode:E,orderNo:o,orderId:D,saleUserId:m,templateId:C,tenantId:y}})}};return J(()=>{console.log(F);const{query:{id:r}}=F;ue(r).then(d=>{const{code:o,data:D}=d;o==="10000"&&(e.value=D)})}),(r,d)=>{const o=Y("van-button"),D=Y("ProPageWrap");return a(),$(D,null,{default:s(()=>{var m,y,C,E,A,N,P,g,O,T,x,R;return[l("div",ie,[l("div",_e,[t(u,null,{label:s(()=>{var f,S,M,U;return[l("div",pe,[l("div",ve,I((M=(S=(f=e.value)==null?void 0:f.tenantOrderInsuredList[0])==null?void 0:S.tenantOrderProductList[0])==null?void 0:M.productName),1),l("div",De,I((U=e.value)==null?void 0:U.venderName),1)])]}),content:s(()=>{var f;return[l("div",fe,I(e.value?n(se)[(f=e.value)==null?void 0:f.orderStatus]:""),1)]}),_:1}),t(u,{label:"\u8BA2\u5355\u53F7",content:(m=e.value)==null?void 0:m.orderNo},null,8,["content"]),t(u,{label:"\u6295\u4FDD\u65F6\u95F4",content:n(Q)((y=e.value)==null?void 0:y.orderDate).format("YYYY-MM-DD HH:mm:ss")},null,8,["content"]),t(u,{label:"\u6295\u4FDD\u4EBA",content:(E=(C=e.value)==null?void 0:C.tenantOrderHolder)==null?void 0:E.name},null,8,["content"]),(a(!0),c(X,null,K(((A=e.value)==null?void 0:A.tenantOrderInsuredList)||[],(f,S)=>(a(),$(u,{key:S,label:"\u88AB\u4FDD\u4EBA",content:f.name},null,8,["content"]))),128))]),l("div",he,[t(u,null,{label:s(()=>[me]),_:1}),t(u,{label:"\u9669\u79CD\u540D\u79F0",content:"\u6A2A\u7434\u4E00\u53F7\u7EC8\u8EAB\u91CD\u5927\u75BE\u75C5\u4FDD\u9669"}),t(u,{label:"\u4FDD\u969C\u671F\u95F4",content:"\u7EC8\u8EAB"}),t(u,{label:"\u4EA4\u8D39\u671F\u95F4",content:"20\u5E74"}),t(u,{label:"\u4EA4\u8D39\u65B9\u5F0F",content:"\u5E74\u4EA4"}),t(u,{label:"\u9644\u52A0\u8C41\u514D\u4FDD\u9669\u8D39\u91CD\u5927\u75BE\u75C5\u4FDD\u9669",content:"\u6295\u4FDD"}),t(u,{label:"\u4FDD\u969C\u91D1\u989D",content:"\xA5100,000.00"}),t(u,{label:"\u9996\u671F\u4FDD\u8D39",content:"\xA510,000.00"})]),((N=e.value)==null?void 0:N.orderStatus)===n(h).PENDING?(a(),c("div",ye,[t(o,{type:"primary",onClick:_(k,["stop"])},{default:s(()=>[Ce]),_:1},8,["onClick"]),t(o,{type:"primary",onClick:_(G,["stop"])},{default:s(()=>[Ee]),_:1},8,["onClick"])])):i("",!0),((P=e.value)==null?void 0:P.orderStatus)===n(h).PAYING?(a(),c("div",Fe,[t(o,{type:"primary",onClick:_(k,["stop"])},{default:s(()=>[be]),_:1},8,["onClick"]),t(o,{type:"primary",onClick:_(B,["stop"])},{default:s(()=>[ke]),_:1},8,["onClick"])])):i("",!0),((g=e.value)==null?void 0:g.orderStatus)===n(h).PAYMENT_FAILED?(a(),c("div",Ie,[t(o,{type:"primary",onClick:_(k,["stop"])},{default:s(()=>[Ae]),_:1},8,["onClick"]),t(o,{type:"primary",onClick:_(B,["stop"])},{default:s(()=>[Se]),_:1},8,["onClick"])])):i("",!0),((O=e.value)==null?void 0:O.orderStatus)===n(h).PAYMENT_SUCCESS?(a(),c("div",Be)):i("",!0),((T=e.value)==null?void 0:T.orderStatus)===n(h).UNDERWRITE?(a(),c("div",Ne)):i("",!0),((x=e.value)==null?void 0:x.orderStatus)===n(h).INSURER_REJECT?(a(),c("div",Pe,[t(o,{type:"primary",onClick:_(k,["stop"])},{default:s(()=>[ge]),_:1},8,["onClick"])])):i("",!0),((R=e.value)==null?void 0:R.orderStatus)===n(h).TIMEOUT?(a(),c("div",Oe,[t(o,{type:"primary",onClick:_(k,["stop"])},{default:s(()=>[Te]),_:1},8,["onClick"])])):i("",!0)])]}),_:1})}}});var Ye=w(xe,[["__scopeId","data-v-4dabdf79"]]);export{Ye as default};
