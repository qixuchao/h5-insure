import{d as t,k as e,r as a,o,c as n,a as i,e as l,b as s,w as d,F as r,f as c,u,p as m,_ as p,n as v,b_ as f,i as I,h,O as y,cZ as b,aR as g,aL as C,co as N,a8 as k,ah as _,s as j,V as x,cW as L,as as A,bL as w,az as O,c_ as D,aG as V,ap as T,aq as P,av as Y,T as S,aV as G,c$ as M}from"./index-dc5ec44c.js";import{C as U}from"./index-65eeeb0b.js";import{_ as E}from"./index-e5e377af.js";import{_ as H}from"./box-title-70dc1627.js";import{d as q}from"./order-31582c51.js";import{i as F,o as R}from"./trial-7511f230.js";import{f as $,g as J}from"./infoCollection-9802e33b.js";import{g as Q,s as W}from"./core-7e803d21.js";import{I as z}from"./infoItem-78cb91d5.js";import{C as Z}from"./index-19e70d44.js";import{t as B}from"./index-7d2ccc5b.js";import"./PayInfo-9d519310.js";import"./keysIn-131bbce9.js";import"./isObjectLike-a9798079.js";import"./_getTag-0507d0b1.js";import"./debounce-6981b306.js";import"./phoneVerify-5b4fc776.js";import"./merge-e7788e50.js";import"./index-0eb0c95b.js";import"./useDicData-bd9cdb9d.js";import"./bankCard-52413981.js";const K={class:"insurance-notification-information"},X={class:"insurance-notification-information-title"},tt={class:"insurance-notification-information-collapse"},et={class:"insurance-notification-information-content"};var at=p(t({__name:"insuranceNotificationInformation",props:{title:{default:""},data:{default:()=>[]}},setup(t){const p=e([]);return a({text:"",occupationClass:""}),(t,e)=>{const a=U,f=Z;return o(),n("div",K,[i("div",X,l(t.title),1),i("div",tt,[s(f,{modelValue:u(p),"onUpdate:modelValue":e[0]||(e[0]=t=>m(p)?p.value=t:null)},{default:d((()=>[(o(!0),n(r,null,c(t.data,((t,e)=>(o(),v(a,{key:e,title:t.title,name:e},{default:d((()=>[i("div",et,l(t.content),1)])),_:2},1032,["title","name"])))),128))])),_:1},8,["modelValue"])])])}}}),[["__scopeId","data-v-84b9fd0c"]]);const ot=t=>(T("data-v-243ea8a6"),t=t(),P(),t),nt={class:"page-order-detail"},it=ot((()=>i("div",{class:"card-item-name"},"订单进度",-1))),lt={class:"card-item-icon"},st={class:"card card-list"},dt=ot((()=>i("p",{class:"card-list-title"},"健利保倍享版",-1))),rt={class:"card card-list"},ct={class:"card-list-head"},ut=ot((()=>i("div",{class:"card-list-title"},"险种信息",-1))),mt={class:"card-list-premium"},pt={class:"card"},vt=ot((()=>i("div",{class:"policy-options"},[k("保单选项 "),i("span",{class:"policy-options-content"},"纸质保单和电子保单")],-1))),ft={class:"card"},It=ot((()=>i("div",{class:"tenantOrderAttachmentList-title"},"投保人资料",-1))),ht={class:"tenantOrderAttachmentList-img"},yt=["src"],bt=ot((()=>i("div",{class:"tenantOrderAttachmentList-title"},"银行卡信息",-1))),gt={class:"tenantOrderAttachmentList-img"},Ct=[ot((()=>i("img",{src:H,alt:""},null,-1)))],Nt=ot((()=>i("div",{class:"tenantOrderAttachmentList-title"},"被保人资料",-1))),kt={class:"tenantOrderAttachmentList-img"},_t=["src"],jt={class:"insurance-notification-information card"},xt={key:0,class:"footer-button"},Lt={key:1,class:"footer-button"},At={key:2,class:"footer-button"};var wt=p(t({__name:"index",setup(t){const p=f(),T=I(),P=h(),H=e(),K=e([]),X=e([]),tt=e({}),et=[{title:"险种名称",dataIndex:"riskName",width:200},{title:"保险金额/份数",dataIndex:"regularPremium",width:180,render:(t,e)=>t.regularPremium/t.copy},{title:"保障期间",dataIndex:"coveragePeriodDesc",width:180},{title:"交费期间",dataIndex:"chargePeriodDesc",width:180},{title:"首期保费",dataIndex:"initialPremium",width:180,render:(t,e)=>t.initialPremium}],ot=a({customerQuestions:[],payInfo:{schema:[],config:[],formData:[]}}),{query:{orderNo:wt,agentCode:Ot,tenantId:Dt,abbreviation:Vt,productCategory:Tt,applicationNo:Pt,orderId:Yt}}=T,St=()=>{O("orderTrajectory",{orderNo:wt,agentCode:Ot,tenantId:Dt,abbreviation:Vt,productCategory:Tt,applicationNo:Pt})},Gt=()=>{Y.confirm({title:"确认",message:"确认删除订单？"}).then((()=>{H.value&&q(H.value.id,H.value.orderStatus).then((t=>{const{code:e,data:a}=t;"10000"===e&&S.success("删除成功")}))}))},Mt=e(!1),Ut=()=>{var t,e,a,o,n;if(H.value){const{id:i,extInfo:{templateId:l,pageCode:s,extraInfo:d},agencyId:r,insurerCode:c,orderStatus:u}=H.value,m={insurerCode:c,productCode:null==(a=null==(e=null==(t=H.value.insuredList)?void 0:t[0])?void 0:e.productList[0])?void 0:a.productCode,tenantId:H.value.tenantId,agencyCode:H.value.agencyId,agentCode:H.value.saleUserId,saleChannelId:null==d?void 0:d.saleChannelId,extraMap:{...null==(n=null==(o=H.value)?void 0:o.extInfo)?void 0:n.extraInfo,orderNo:H.value.orderNo}};Mt.value=!0,R(m).then((t=>{if(console.log("投保链接==",t.data),"10000"===t.code)if([$.LONG,$.NIANJIN].includes(J(`${l}`))){const e=t.data.split("?")[1],a=G.parse(e);P.push({path:M[u],query:{...a,extraInfo:a.extraInfo,orderNo:wt,templateId:l}})}else window.location.href=t.data}))}},Et=()=>{if(H.value){const{extInfo:{templateId:t}}=H.value;[$.LONG,$.NIANJIN].includes(J(`${t}`))?Ut():Q(H.value).then((({code:t,data:e})=>{"10000"===t&&W(e)}))}};return y((()=>{F({productCode:"111",isTenant:!1}).then((({data:t,code:e})=>{var a,o;if("10000"===e){tt.value=(null==(a=t.productPlanInsureVOList)?void 0:a[0])||{};const{payInfo:e}=B(null==(o=tt.value)?void 0:o.productFactor);ot.payInfo={...ot.payInfo,...e}}})),console.log(wt,"orderNo================"),D({orderNo:wt,orderId:Yt,tenantId:Dt}).then((t=>{const{code:e,data:a}=t;"10000"===e&&(ot.customerQuestions=a)})),b({orderNo:wt,orderId:Yt,applicationNo:Pt,agentCode:Ot,tenantId:Dt}).then((t=>{const{code:e,data:a}=t;"10000"===e&&(H.value=a)}))})),(t,e)=>{const a=V,f=E,I=U,h=Z,y=g,b=C,O=N("loading");return o(),v(b,{"theme-vars":u(p)},{default:d((()=>{var t,p,b,g,C,N,D,V,T,P,Y,S,G;return[i("div",nt,[i("div",{class:"card card-head",onClick:St},[it,i("div",lt,[k(l(null==(t=u(H))?void 0:t.orderStepDesc)+" ",1),s(a,{name:"arrow-right"})])]),i("div",st,[dt,s(z,{label:"订单号",content:null==(p=u(H))?void 0:p.orderNo,line:"","is-copy":"","min-width":"other"},null,8,["content"]),s(z,{label:"投保单号",content:null==(b=u(H))?void 0:b.applicationNo,line:"","is-copy":"","min-width":"other"},null,8,["content"]),s(z,{label:"创建时间",content:u(_)(null==(g=u(H))?void 0:g.gmtCreated).format("YYYY-MM-DD HH:mm:ss"),line:"","min-width":"other"},null,8,["content"]),s(z,{label:"投保时间",content:u(_)(null==(C=u(H))?void 0:C.orderDate).format("YYYY-MM-DD HH:mm:ss"),line:"","min-width":"other"},null,8,["content"]),s(z,{label:"投保保费",content:null==(N=u(H))?void 0:N.orderAmount,line:"","min-width":"other"},null,8,["content"]),s(z,{label:"承保保费",content:null==(D=u(H))?void 0:D.realAmount,line:"","min-width":"other"},null,8,["content"])]),i("div",rt,[i("div",ct,[ut,i("div",mt,[k(" 首年保费："),i("span",null,l(null==(V=u(H))?void 0:V.orderAmount),1)])]),(null==(T=u(H))?void 0:T.riskList.length)>0?(o(),v(f,{key:0,columns:et,class:"table","data-source":null==(P=u(H))?void 0:P.riskList},null,8,["data-source"])):j("",!0)]),i("div",pt,[s(h,{modelValue:u(K),"onUpdate:modelValue":e[0]||(e[0]=t=>m(K)?K.value=t:null)},{default:d((()=>[s(I,{title:"投保告知信息",name:"1"},{default:d((()=>[vt])),_:1})])),_:1},8,["modelValue"])]),i("div",ft,[s(h,{modelValue:u(X),"onUpdate:modelValue":e[1]||(e[1]=t=>m(X)?X.value=t:null)},{default:d((()=>[s(I,{title:"影像信息",name:"1"},{default:d((()=>{var t,e,a,l;return[It,i("div",ht,[(o(!0),n(r,null,c(null==(e=null==(t=u(H))?void 0:t.tenantOrderAttachmentList)?void 0:e.filter((t=>"2"==t.objectType)),((t,e)=>(o(),n("div",{key:e},[i("img",{src:t.uri,alt:""},null,8,yt)])))),128))]),bt,i("div",gt,[(o(),n(r,null,c(10,((t,e)=>i("div",{key:e,class:"tenantOrderAttachmentList-img-content"},Ct))),64))]),Nt,i("div",kt,[(o(!0),n(r,null,c(null==(l=null==(a=u(H))?void 0:a.tenantOrderAttachmentList)?void 0:l.filter((t=>"3"==t.objectType)),((t,e)=>(o(),n("div",{key:e},[i("img",{src:t.uri,alt:""},null,8,_t)])))),128))])]})),_:1})])),_:1},8,["modelValue"])]),i("div",jt,[s(at,{title:"投保告知信息",data:[{title:"《万能风险告知问卷》",content:"12345556789"},{title:"《被保人健康告知》",content:"12345556789"}]},null,8,["data"])]),x((o(),n("div",null,[(null==(Y=u(H))?void 0:Y.orderTopStatus)===u(L).PENDING?(o(),n("div",xt,[s(y,{type:"primary",onClick:A(Gt,["stop"])},{default:d((()=>[k("删除")])),_:1},8,["onClick"]),u(w).UNDERWRITING_FAILED!==u(H).orderStatus?(o(),v(y,{key:0,type:"primary",onClick:A(Ut,["stop"])},{default:d((()=>[k("去处理")])),_:1},8,["onClick"])):j("",!0)])):j("",!0),(null==(S=u(H))?void 0:S.orderTopStatus)===u(L).PAYING?(o(),n("div",Lt,[s(y,{type:"primary",onClick:A(Gt,["stop"])},{default:d((()=>[k("删除")])),_:1},8,["onClick"]),s(y,{type:"primary",onClick:A(Et,["stop"])},{default:d((()=>[k("去支付")])),_:1},8,["onClick"])])):j("",!0),(null==(G=u(H))?void 0:G.orderTopStatus)===u(L).TIMEOUT?(o(),n("div",At,[s(y,{type:"primary",onClick:A(Gt,["stop"])},{default:d((()=>[k("删除")])),_:1},8,["onClick"])])):j("",!0)])),[[O,u(Mt)]])])]})),_:1},8,["theme-vars"])}}}),[["__scopeId","data-v-243ea8a6"]]);export{wt as default};
