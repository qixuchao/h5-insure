import{G as a,d as e,r as s,u as r,a1 as t,b as l,c as o,e as d,w as n,f as u,E as i,g as c,ah as p,a3 as v,bG as I,F as f,i as m,j as b,m as C,T as h,bH as N,p as _,B as T,am as E,an as S}from"./index-87ddb369.js";import{s as y,c as j}from"./phoneVerify-4e722b17.js";import{c as O}from"./format-b5e9d8b9.js";import{u as g}from"./useOrder-166b912b.js";import"./pdfh5-008ca364.js";const P={class:"page-phone-verify"},A=(a=>(E("data-v-6781f4aa"),a=a(),S(),a))((()=>u("div",{class:"title"},"通过投保人手机号验证后，可进行投保信息填写",-1))),D={class:"phone"},F={class:"input-wrapper"};var G=a(e({__name:"phoneVerify",setup(a){const e=g(),E=s(""),S=s(""),G=s(0);let U;const q=r(),{agentCode:w,tenantId:R,templateId:V,productCode:W,insurerCode:k,orderNo:x,orderCode:B}=q.query,H=()=>{y(E.value).then((({code:a})=>{"10000"===a&&(G.value=60,U=setInterval((()=>{G.value-=1,G.value<=0&&clearInterval(U)}),1e3))}))},L=()=>{j(E.value,S.value).then((({code:a,data:s})=>{"10000"===a&&s?(h.success("验证成功"),e.value.orderStatus===N.PROCESSING?_("infoCollection",{...q.query,isShare:1}):[N.WAIT_IDENTIFICATION,N.IDENTIFICATION_COMPLETE,N.IN_IDENTIFICATION,N.UNDER_WRITING_SUCCESS].includes(e.value.orderStatus)&&_("infoPreview",{...q.query,isShare:1})):h.fail("验证失败")}))};return t((()=>{C({orderNo:B||x,saleUserId:w,tenantId:R}).then((({code:a,data:s})=>{var r;"10000"===a&&(Object.assign(e.value,s),E.value=null==(r=null==s?void 0:s.holder)?void 0:r.mobile)}))})),(a,e)=>{const s=T,r=l("ProPageWrap");return o(),d(r,null,{default:n((()=>[u("div",P,[A,u("div",D,i(c(O)(c(E)||"")),1),u("div",F,[p(u("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>v(S)?S.value=a:null),placeholder:"请输入验证码",class:"input"},null,512),[[I,c(S)]]),u("div",{class:f(["btn",{second:c(G)}]),onClick:H},i(c(G)?`${c(G)}s`:"发送验证码"),3)]),m(s,{type:"primary",class:"submit-btn",onClick:L},{default:n((()=>[b("下一步")])),_:1})])])),_:1})}}}),[["__scopeId","data-v-6781f4aa"]]);export{G as default};
