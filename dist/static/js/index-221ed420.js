import{_ as t,d as e,i as a,r as n,o,c as l,a as i,e as d,b as s,w as r,F as c,n as u,l as m,u as v,m as p,co as f,h as I,g as h,O as y,dA as g,an as C,b7 as b,cW as N,a8 as k,al as _,q as x,V as A,dx as L,aw as w,c1 as j,a9 as O,bP as D,bk as T,ae as V,at as P,au as Y,aA as S,T as M,bD as U,dB as G}from"./index-27d17939.js";import{C as E}from"./index-0ff64826.js";import{_ as H}from"./index-43cc80e3.js";import{_ as q}from"./box-title-70dc1627.js";import{d as F}from"./order-c849ebfd.js";import{i as J,o as Q}from"./trial-33862f0a.js";import{f as R,g as W}from"./infoCollection-548eee14.js";import{g as $,s as B}from"./core-ee2c989a.js";import{I as z}from"./infoItem-30e24cbb.js";import{C as K}from"./index-b0d92e60.js";import"./bankCard-9edf596d.js";const X={class:"insurance-notification-information"},Z={class:"insurance-notification-information-title"},tt={class:"insurance-notification-information-collapse"},et={class:"insurance-notification-information-content"};var at=t(e({__name:"insuranceNotificationInformation",props:{title:{default:""},data:{default:()=>[]}},setup(t){const e=a([]);return n({text:"",occupationClass:""}),(a,n)=>{const f=E,I=K;return o(),l("div",X,[i("div",Z,d(t.title),1),i("div",tt,[s(I,{modelValue:v(e),"onUpdate:modelValue":n[0]||(n[0]=t=>p(e)?e.value=t:null)},{default:r((()=>[(o(!0),l(c,null,u(t.data,((t,e)=>(o(),m(f,{key:e,title:t.title,name:e},{default:r((()=>[i("div",et,d(t.content),1)])),_:2},1032,["title","name"])))),128))])),_:1},8,["modelValue"])])])}}}),[["__scopeId","data-v-84b9fd0c"]]);const nt=t=>(P("data-v-5673d048"),t=t(),Y(),t),ot={class:"page-order-detail"},lt=nt((()=>i("div",{class:"card-item-name"},"订单进度",-1))),it={class:"card-item-icon"},dt={class:"card card-list"},st=nt((()=>i("p",{class:"card-list-title"},"健利保倍享版",-1))),rt={class:"card card-list"},ct={class:"card-list-head"},ut=nt((()=>i("div",{class:"card-list-title"},"险种信息",-1))),mt={class:"card-list-premium"},vt={class:"card"},pt=nt((()=>i("div",{class:"policy-options"},[k("保单选项 "),i("span",{class:"policy-options-content"},"纸质保单和电子保单")],-1))),ft={class:"card"},It=nt((()=>i("div",{class:"tenantOrderAttachmentList-title"},"投保人资料",-1))),ht={class:"tenantOrderAttachmentList-img"},yt=["src"],gt=nt((()=>i("div",{class:"tenantOrderAttachmentList-title"},"银行卡信息",-1))),Ct={class:"tenantOrderAttachmentList-img"},bt=[nt((()=>i("img",{src:q,alt:""},null,-1)))],Nt=nt((()=>i("div",{class:"tenantOrderAttachmentList-title"},"被保人资料",-1))),kt={class:"tenantOrderAttachmentList-img"},_t=["src"],xt={class:"insurance-notification-information card"},At={key:0,class:"footer-button"},Lt={key:1,class:"footer-button"},wt={key:2,class:"footer-button"};var jt=t(e({__name:"index",setup(t){const e=f(),P=I(),Y=h(),q=a(),X=a([]),Z=a([]),tt=a({}),et=[{title:"险种名称",dataIndex:"riskName",width:200},{title:"保险金额/份数",dataIndex:"regularPremium",width:180,render:(t,e)=>t.regularPremium/t.copy},{title:"保障期间",dataIndex:"coveragePeriodDesc",width:180},{title:"交费期间",dataIndex:"chargePeriodDesc",width:180},{title:"首期保费",dataIndex:"initialPremium",width:180,render:(t,e)=>t.initialPremium}],nt=n({customerQuestions:[],payInfo:{schema:[],config:[],formData:[]}}),{query:{orderNo:jt,agentCode:Ot,tenantId:Dt,abbreviation:Tt,productCategory:Vt,applicationNo:Pt,orderId:Yt}}=P,St=()=>{O("orderTrajectory",{orderNo:jt,agentCode:Ot,tenantId:Dt,abbreviation:Tt,productCategory:Vt,applicationNo:Pt})},Mt=()=>{S.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{q.value&&F(q.value.id,q.value.orderStatus).then((t=>{const{code:e,data:a}=t;"10000"===e&&M.success("删除成功")}))}))},Ut=a(!1),Gt=()=>{var t,e,a,n,o;if(q.value){const{id:l,extInfo:{templateId:i,pageCode:d,extraInfo:s},agencyId:r,insurerCode:c,orderStatus:u}=q.value,m={insurerCode:c,productCode:null==(a=null==(e=null==(t=q.value.insuredList)?void 0:t[0])?void 0:e.productList[0])?void 0:a.productCode,tenantId:q.value.tenantId,agencyCode:q.value.agencyId,agentCode:q.value.saleUserId,saleChannelId:null==s?void 0:s.saleChannelId,extraMap:{...null==(o=null==(n=q.value)?void 0:n.extInfo)?void 0:o.extraInfo,orderNo:q.value.orderNo}};Ut.value=!0,Q(m).then((t=>{if(console.log("投保链接==",t.data),"10000"===t.code)if([R.LONG,R.NIANJIN].includes(W(`${i}`))){const e=t.data.split("?")[1],a=U.parse(e);Y.push({path:G[u],query:{...a,extraInfo:a.extraInfo,orderNo:jt,templateId:i}})}else window.location.href=t.data}))}},Et=()=>{if(q.value){const{extInfo:{templateId:t}}=q.value;[R.LONG,R.NIANJIN].includes(W(`${t}`))?Gt():$(q.value).then((({code:t,data:e})=>{"10000"===t&&B(e)}))}};return y((()=>{J({productCode:"111",isTenant:!1}).then((({data:t,code:e})=>{var a,n;if("10000"===e){tt.value=(null==(a=t.productPlanInsureVOList)?void 0:a[0])||{};const{payInfo:e}=T(null==(n=tt.value)?void 0:n.productFactor);nt.payInfo={...nt.payInfo,...e}}})),console.log(jt,"orderNo================"),D({orderNo:jt,orderId:Yt,tenantId:Dt}).then((t=>{const{code:e,data:a}=t;"10000"===e&&(nt.customerQuestions=a)})),g({orderNo:jt,orderId:Yt,applicationNo:Pt,agentCode:Ot,tenantId:Dt}).then((t=>{const{code:e,data:a}=t;"10000"===e&&(q.value=a)}))})),(t,a)=>{const n=V,f=H,I=E,h=K,y=C,g=b,O=N("loading");return o(),m(g,{"theme-vars":v(e)},{default:r((()=>{var t,e,g,C,b,N,D,T,V,P,Y,S,M;return[i("div",ot,[i("div",{class:"card card-head",onClick:St},[lt,i("div",it,[k(d(null==(t=v(q))?void 0:t.orderStepDesc)+" ",1),s(n,{name:"arrow-right"})])]),i("div",dt,[st,s(z,{label:"订单号",content:null==(e=v(q))?void 0:e.orderNo,line:"","is-copy":"","min-width":"other"},null,8,["content"]),s(z,{label:"投保单号",content:null==(g=v(q))?void 0:g.applicationNo,line:"","is-copy":"","min-width":"other"},null,8,["content"]),s(z,{label:"创建时间",content:v(_)(null==(C=v(q))?void 0:C.gmtCreated).format("YYYY-MM-DD HH:mm:ss"),line:"","min-width":"other"},null,8,["content"]),s(z,{label:"投保时间",content:v(_)(null==(b=v(q))?void 0:b.orderDate).format("YYYY-MM-DD HH:mm:ss"),line:"","min-width":"other"},null,8,["content"]),s(z,{label:"投保保费",content:null==(N=v(q))?void 0:N.orderAmount,line:"","min-width":"other"},null,8,["content"]),s(z,{label:"承保保费",content:null==(D=v(q))?void 0:D.realAmount,line:"","min-width":"other"},null,8,["content"])]),i("div",rt,[i("div",ct,[ut,i("div",mt,[k(" 首年保费："),i("span",null,d(null==(T=v(q))?void 0:T.orderAmount),1)])]),(null==(V=v(q))?void 0:V.riskList.length)>0?(o(),m(f,{key:0,columns:et,class:"table","data-source":null==(P=v(q))?void 0:P.riskList},null,8,["data-source"])):x("",!0)]),i("div",vt,[s(h,{modelValue:v(X),"onUpdate:modelValue":a[0]||(a[0]=t=>p(X)?X.value=t:null)},{default:r((()=>[s(I,{title:"投保告知信息",name:"1"},{default:r((()=>[pt])),_:1})])),_:1},8,["modelValue"])]),i("div",ft,[s(h,{modelValue:v(Z),"onUpdate:modelValue":a[1]||(a[1]=t=>p(Z)?Z.value=t:null)},{default:r((()=>[s(I,{title:"影像信息",name:"1"},{default:r((()=>{var t,e,a,n;return[It,i("div",ht,[(o(!0),l(c,null,u(null==(e=null==(t=v(q))?void 0:t.tenantOrderAttachmentList)?void 0:e.filter((t=>"2"==t.objectType)),((t,e)=>(o(),l("div",{key:e},[i("img",{src:t.uri,alt:""},null,8,yt)])))),128))]),gt,i("div",Ct,[(o(),l(c,null,u(10,((t,e)=>i("div",{key:e,class:"tenantOrderAttachmentList-img-content"},bt))),64))]),Nt,i("div",kt,[(o(!0),l(c,null,u(null==(n=null==(a=v(q))?void 0:a.tenantOrderAttachmentList)?void 0:n.filter((t=>"3"==t.objectType)),((t,e)=>(o(),l("div",{key:e},[i("img",{src:t.uri,alt:""},null,8,_t)])))),128))])]})),_:1})])),_:1},8,["modelValue"])]),i("div",xt,[s(at,{title:"投保告知信息",data:[{title:"《万能风险告知问卷》",content:"12345556789"},{title:"《被保人健康告知》",content:"12345556789"}]},null,8,["data"])]),A((o(),l("div",null,[(null==(Y=v(q))?void 0:Y.orderTopStatus)===v(L).PENDING?(o(),l("div",At,[s(y,{type:"primary",onClick:w(Mt,["stop"])},{default:r((()=>[k("删除")])),_:1},8,["onClick"]),v(j).UNDERWRITING_FAILED!==v(q).orderStatus?(o(),m(y,{key:0,type:"primary",onClick:w(Gt,["stop"])},{default:r((()=>[k("去处理")])),_:1},8,["onClick"])):x("",!0)])):x("",!0),(null==(S=v(q))?void 0:S.orderTopStatus)===v(L).PAYING?(o(),l("div",Lt,[s(y,{type:"primary",onClick:w(Mt,["stop"])},{default:r((()=>[k("删除")])),_:1},8,["onClick"]),s(y,{type:"primary",onClick:w(Et,["stop"])},{default:r((()=>[k("去支付")])),_:1},8,["onClick"])])):x("",!0),(null==(M=v(q))?void 0:M.orderTopStatus)===v(L).TIMEOUT?(o(),l("div",wt,[s(y,{type:"primary",onClick:w(Mt,["stop"])},{default:r((()=>[k("删除")])),_:1},8,["onClick"])])):x("",!0)])),[[O,v(Ut)]])])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-5673d048"]]);export{jt as default};
