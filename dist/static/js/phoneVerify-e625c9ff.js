import{G as a,d as e,r as s,u as r,a1 as t,b as l,c as o,e as d,w as n,f as u,E as i,g as c,ag as p,a2 as v,bG as I,F as f,i as m,j as C,m as h,T as N,bH as b,p as _,B as T,al as E,am as S}from"./index-25e4fe5e.js";import{s as y,c as j}from"./phoneVerify-dc885d67.js";import{c as O}from"./format-12461bbc.js";import{u as g}from"./useOrder-53b5ea8d.js";import"./pdfh5-008ca364.js";const P={class:"page-phone-verify"},A=(a=>(E("data-v-7df44efc"),a=a(),S(),a))((()=>u("div",{class:"title"},"通过投保人手机号验证后，可进行投保信息填写",-1))),D={class:"phone"},F={class:"input-wrapper"};var G=a(e({__name:"phoneVerify",setup(a){const e=g(),E=s(""),S=s(""),G=s(0);let U;const q=r(),{agentCode:w,tenantId:R,templateId:V,productCode:W,insurerCode:k,orderNo:x}=q.query,B=()=>{y(E.value).then((({code:a})=>{"10000"===a&&(G.value=60,U=setInterval((()=>{G.value-=1,G.value<=0&&clearInterval(U)}),1e3))}))},H=()=>{j(E.value,S.value).then((({code:a,data:s})=>{"10000"===a&&s?(N.success("验证成功"),e.value.orderStatus===b.PROCESSING?_("infoCollection",{...q.query,isShare:1}):[b.WAIT_IDENTIFICATION,b.IDENTIFICATION_COMPLETE,b.IN_IDENTIFICATION,b.UNDER_WRITING_SUCCESS].includes(e.value.orderStatus)&&_("infoPreview",{...q.query,isShare:1})):N.fail("验证失败")}))};return t((()=>{h({orderNo:x,saleUserId:w,tenantId:R}).then((({code:a,data:s})=>{var r;"10000"===a&&(Object.assign(e.value,s),E.value=null==(r=null==s?void 0:s.holder)?void 0:r.mobile)}))})),(a,e)=>{const s=T,r=l("ProPageWrap");return o(),d(r,null,{default:n((()=>[u("div",P,[A,u("div",D,i(c(O)(c(E)||"")),1),u("div",F,[p(u("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>v(S)?S.value=a:null),placeholder:"请输入验证码",class:"input"},null,512),[[I,c(S)]]),u("div",{class:f(["btn",{second:c(G)}]),onClick:B},i(c(G)?`${c(G)}s`:"发送验证码"),3)]),m(s,{type:"primary",class:"submit-btn",onClick:H},{default:n((()=>[C("下一步")])),_:1})])])),_:1})}}}),[["__scopeId","data-v-7df44efc"]]);export{G as default};
