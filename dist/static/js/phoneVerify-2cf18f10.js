import{G as a,d as e,r as s,u as r,a1 as t,b as l,c as o,e as n,w as d,f as c,E as u,g as i,ag as p,a2 as v,bD as I,F as f,i as m,j as b,m as C,T as N,bE as h,p as _,B as E,al as T,am as S}from"./index-cb62df70.js";import{s as y,c as O}from"./phoneVerify-24b43e7b.js";import{c as j}from"./format-12461bbc.js";import{u as g}from"./useOrder-c2f448f1.js";import"./pdfh5-008ca364.js";const D={class:"page-phone-verify"},P=(a=>(T("data-v-5c8c646c"),a=a(),S(),a))((()=>c("div",{class:"title"},"通过投保人手机号验证后，可进行投保信息填写",-1))),A={class:"phone"},F={class:"input-wrapper"};var U=a(e({__name:"phoneVerify",setup(a){const e=g(),T=s(""),S=s(""),U=s(0);let q;const w=r(),{agentCode:G,tenantId:R,templateId:V,productCode:W,insurerCode:k,orderNo:x}=w.query,B=()=>{y(T.value).then((({code:a})=>{"10000"===a&&(U.value=60,q=setInterval((()=>{U.value-=1,U.value<=0&&clearInterval(q)}),1e3))}))},H=()=>{O(T.value,S.value).then((({code:a,data:s})=>{"10000"===a&&s?(N.success("验证成功"),e.value.orderStatus===h.PROCESSING?_("infoCollection",{...w.query,isShare:1}):[h.WAIT_IDENTIFICATION,h.IDENTIFICATION_COMPLETE,h.IN_IDENTIFICATION,h.UNDER_WRITING_SUCCESS].includes(e.value.orderStatus)&&_("infoPreview",{...w.query,isShare:1})):N.fail("验证失败")}))};return t((()=>{C({orderNo:x,saleUserId:G,tenantId:R}).then((({code:a,data:s})=>{var r;"10000"===a&&(Object.assign(e.value,s),T.value=null==(r=null==s?void 0:s.tenantOrderHolder)?void 0:r.mobile)}))})),(a,e)=>{const s=E,r=l("ProPageWrap");return o(),n(r,null,{default:d((()=>[c("div",D,[P,c("div",A,u(i(j)(i(T)||"")),1),c("div",F,[p(c("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>v(S)?S.value=a:null),placeholder:"请输入验证码",class:"input"},null,512),[[I,i(S)]]),c("div",{class:f(["btn",{second:i(U)}]),onClick:B},u(i(U)?`${i(U)}s`:"发送验证码"),3)]),m(s,{type:"primary",class:"submit-btn",onClick:H},{default:d((()=>[b("下一步")])),_:1})])])),_:1})}}}),[["__scopeId","data-v-5c8c646c"]]);export{U as default};
