import{d as e,r as a,j as l,E as o,o as i,p as s,u as m,bv as d,ab as t}from"./index-90172834.js";const n=e({name:"policyInfo"}),u=e({...n,props:{schema:{default:()=>[]},config:{default:()=>[]},modelValue:{default:()=>{}},isView:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{expose:t,emit:n}){const u=e,c=a({schema:{},modelValue:{},config:{}}),f=l();return o([()=>u.schema,()=>u.config],(()=>{c.schema=u.schema,c.config=u.config}),{deep:!0,immediate:!0}),o((()=>u.modelValue),((e,a)=>{e!==a&&Object.assign(c.modelValue,e)}),{deep:!0,immediate:!0}),o((()=>c.modelValue),(e=>{n("update:modelValue",e)}),{deep:!0,immediate:!0}),t({validate:()=>{var e;return null==(e=f.value)?void 0:e.validate()}}),(e,a)=>(i(),s(m(d),{ref_key:"agentInfoFormRef",ref:f,class:"agent",schema:m(c).schema,model:m(c).modelValue,config:m(c).config,title:"代理人信息","is-view":e.isView},null,8,["schema","model","config","is-view"]))}}),c=e=>t({url:"/api/app/policy/agent/query",method:"POST",data:e});export{u as _,c as q};
