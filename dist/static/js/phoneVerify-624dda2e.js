import{G as a,d as e,r as s,u as r,a1 as t,b as l,c as o,e as d,w as n,f as u,E as c,g as i,ag as p,a2 as v,bG as I,F as m,i as f,j as C,m as b,T as N,bH as h,p as _,B as T,al as E,am as S}from"./index-55b89ead.js";import{s as y,c as O}from"./phoneVerify-014b793d.js";import{c as j}from"./format-12461bbc.js";import{u as g}from"./useOrder-6df4737d.js";import"./pdfh5-008ca364.js";const P={class:"page-phone-verify"},A=(a=>(E("data-v-5c8c646c"),a=a(),S(),a))((()=>u("div",{class:"title"},"通过投保人手机号验证后，可进行投保信息填写",-1))),D={class:"phone"},F={class:"input-wrapper"};var G=a(e({__name:"phoneVerify",setup(a){const e=g(),E=s(""),S=s(""),G=s(0);let U;const q=r(),{agentCode:w,tenantId:R,templateId:V,productCode:W,insurerCode:k,orderNo:x}=q.query,H=()=>{y(E.value).then((({code:a})=>{"10000"===a&&(G.value=60,U=setInterval((()=>{G.value-=1,G.value<=0&&clearInterval(U)}),1e3))}))},B=()=>{O(E.value,S.value).then((({code:a,data:s})=>{"10000"===a&&s?(N.success("验证成功"),e.value.orderStatus===h.PROCESSING?_("infoCollection",{...q.query,isShare:1}):[h.WAIT_IDENTIFICATION,h.IDENTIFICATION_COMPLETE,h.IN_IDENTIFICATION,h.UNDER_WRITING_SUCCESS].includes(e.value.orderStatus)&&_("infoPreview",{...q.query,isShare:1})):N.fail("验证失败")}))};return t((()=>{b({orderNo:x,saleUserId:w,tenantId:R}).then((({code:a,data:s})=>{var r;"10000"===a&&(Object.assign(e.value,s),E.value=null==(r=null==s?void 0:s.tenantOrderHolder)?void 0:r.mobile)}))})),(a,e)=>{const s=T,r=l("ProPageWrap");return o(),d(r,null,{default:n((()=>[u("div",P,[A,u("div",D,c(i(j)(i(E)||"")),1),u("div",F,[p(u("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>v(S)?S.value=a:null),placeholder:"请输入验证码",class:"input"},null,512),[[I,i(S)]]),u("div",{class:m(["btn",{second:i(G)}]),onClick:H},c(i(G)?`${i(G)}s`:"发送验证码"),3)]),f(s,{type:"primary",class:"submit-btn",onClick:B},{default:n((()=>[C("下一步")])),_:1})])])),_:1})}}}),[["__scopeId","data-v-5c8c646c"]]);export{G as default};
