import{ref as e,onMounted as t}from"vue";import{_ as a,u as o,g as r,T as u,aF as s,p as n}from"./index-deb4ddfb.js";import{s as l,c as d}from"./phoneVerify-8d7afc24.js";import{c as i}from"./format-b5e9d8b9.js";import{u as c}from"./useOrder-d6d1fc9b.js";import"./pdfh5-e588f83d.js";import"./merge-e7788e50.js";import"./keysIn-131bbce9.js";import"./isObjectLike-a9798079.js";const p={class:"page-phone-verify"},V=(e=>(Vue.pushScopeId("data-v-6781f4aa"),e=e(),Vue.popScopeId(),e))((()=>Vue.createElementVNode("div",{class:"title"},"通过投保人手机号验证后，可进行投保信息填写",-1))),m={class:"phone"},v={class:"input-wrapper"};var f=a(Vue.defineComponent({__name:"phoneVerify",setup(a){const f=c(),I=e(""),C=e(""),N=e(0);let h;const b=o(),{agentCode:E,tenantId:S,templateId:T,productCode:_,insurerCode:y,orderNo:j,orderCode:g}=b.query,O=()=>{l(I.value).then((({code:e})=>{"10000"===e&&(N.value=60,h=setInterval((()=>{N.value-=1,N.value<=0&&clearInterval(h)}),1e3))}))},D=()=>{d(I.value,C.value).then((({code:e,data:t})=>{"10000"===e&&t?(u.success("验证成功"),f.value.orderStatus===s.PROCESSING?n("infoCollection",{...b.query,isShare:1}):[s.WAIT_IDENTIFICATION,s.IDENTIFICATION_COMPLETE,s.IN_IDENTIFICATION,s.UNDER_WRITING_SUCCESS].includes(f.value.orderStatus)&&n("infoPreview",{...b.query,isShare:1})):u.fail("验证失败")}))};return t((()=>{r({orderNo:g||j,saleUserId:E,tenantId:S}).then((({code:e,data:t})=>{var a;"10000"===e&&(Object.assign(f.value,t),I.value=null==(a=null==t?void 0:t.holder)?void 0:a.mobile)}))})),(e,t)=>{const a=Vue.resolveComponent("van-button"),o=Vue.resolveComponent("ProPageWrap");return Vue.openBlock(),Vue.createBlock(o,null,{default:Vue.withCtx((()=>[Vue.createElementVNode("div",p,[V,Vue.createElementVNode("div",m,Vue.toDisplayString(Vue.unref(i)(Vue.unref(I)||"")),1),Vue.createElementVNode("div",v,[Vue.withDirectives(Vue.createElementVNode("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>Vue.isRef(C)?C.value=e:null),placeholder:"请输入验证码",class:"input"},null,512),[[Vue.vModelText,Vue.unref(C)]]),Vue.createElementVNode("div",{class:Vue.normalizeClass(["btn",{second:Vue.unref(N)}]),onClick:O},Vue.toDisplayString(Vue.unref(N)?`${Vue.unref(N)}s`:"发送验证码"),3)]),Vue.createVNode(a,{type:"primary",class:"submit-btn",onClick:D},{default:Vue.withCtx((()=>[Vue.createTextVNode("下一步")])),_:1})])])),_:1})}}}),[["__scopeId","data-v-6781f4aa"]]);export{f as default};
