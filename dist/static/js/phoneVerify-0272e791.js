import{G as a,d as e,r as s,u as t,a1 as r,b as l,c as o,e as n,w as d,f as u,E as c,g as i,ag as p,a2 as v,bD as I,F as m,i as f,j as b,m as C,T as N,bE as h,p as T,B as _,al as y,am as E}from"./index-e25bdee1.js";import{s as O,c as j}from"./phoneVerify-12a3271a.js";import{c as g}from"./format-12461bbc.js";import{u as P}from"./useOrder-879c2823.js";import"./pdfh5-008ca364.js";const A={class:"page-phone-verify"},D=(a=>(y("data-v-a498a32c"),a=a(),E(),a))((()=>u("div",{class:"title"},"通过投保人手机号验证后，可进行投保信息填写",-1))),F={class:"phone"},S={class:"input-wrapper"};var q=a(e({__name:"phoneVerify",setup(a){const e=P(),y=s(""),E=s(""),q=s(0);let w;const V=t(),{agentCode:k,tenantId:x,templateId:G,productCode:U,insurerCode:W,orderNo:B}=V.query,H=()=>{O(y.value).then((({code:a})=>{"10000"===a&&(q.value=60,w=setInterval((()=>{q.value-=1,q.value<=0&&clearInterval(w)}),1e3))}))},L=()=>{j(y.value,E.value).then((({code:a,data:s})=>{"10000"===a&&s?(N.success("验证成功"),e.value.orderStatus===h.PROCESSING?T("infoCollection",V.query):[h.WAIT_IDENTIFICATION,h.IDENTIFICATION_COMPLETE,h.IN_IDENTIFICATION].includes(e.value.orderStatus)&&T("infoPreview",V.query)):N.fail("验证失败")}))};return r((()=>{C({orderNo:B,saleUserId:k,tenantId:x}).then((({code:a,data:s})=>{var t;"10000"===a&&(Object.assign(e.value,s),y.value=null==(t=null==s?void 0:s.tenantOrderHolder)?void 0:t.mobile)}))})),(a,e)=>{const s=_,t=l("ProPageWrap");return o(),n(t,null,{default:d((()=>[u("div",A,[D,u("div",F,c(i(g)(i(y)||"")),1),u("div",S,[p(u("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>v(E)?E.value=a:null),placeholder:"请输入验证码",class:"input"},null,512),[[I,i(E)]]),u("div",{class:m(["btn",{second:i(q)}]),onClick:H},c(i(q)?`${i(q)}s`:"发送验证码"),3)]),f(s,{type:"primary",class:"submit-btn",onClick:L},{default:d((()=>[b("下一步")])),_:1})])])),_:1})}}}),[["__scopeId","data-v-a498a32c"]]);export{q as default};
