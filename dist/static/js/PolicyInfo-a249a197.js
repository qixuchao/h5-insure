import{ao as e,d as a,r as l,j as o,z as s,o as E,m as i,u as m,be as u}from"./index-af60c142.js";const R=[{value:5,label:"支付宝",iconName:"ali"},{value:6,label:"微信",iconName:"wechat"}];e([{value:1,label:"实时转账"},{value:2,label:"批量扣款"}]);var c=(e=>(e[e.DEBIT=1]="DEBIT",e[e.CREDIT=2]="CREDIT",e[e.PRE_PAY=3]="PRE_PAY",e[e.PRE_CREDIT=4]="PRE_CREDIT",e[e.OTHER=5]="OTHER",e))(c||{});e([{value:1,label:"借记卡"},{value:2,label:"贷记卡"},{value:3,label:"预付费卡"},{value:4,label:"准贷记卡"},{value:5,label:"其他"}]);var d=(e=>(e[e.FIRST_TERM=1]="FIRST_TERM",e[e.RENEW_TERM=2]="RENEW_TERM",e[e.REPRISE=3]="REPRISE",e[e.OTHER=4]="OTHER",e))(d||{});const t=[{value:1,label:"首期支付"},{value:2,label:"续期支付"},{value:3,label:"年金领取"},{value:4,label:"其他"}];e(t);var n=(e=>(e[e.FIRST_SAME=1]="FIRST_SAME",e[e.RENEW_SAME=2]="RENEW_SAME",e[e.OTHER=3]="OTHER",e))(n||{});e(t);e([{value:1,label:"自动垫付"},{value:2,label:"中止合同"}]);const v=a({name:"policyInfo"}),T=a({...v,props:{schema:{default:()=>[]},config:{default:()=>[]},modelValue:{default:()=>[]},isView:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{expose:a,emit:R}){const c=e,d=l({schema:{},modelValue:{},config:{}}),t=o();return s([()=>c.schema,()=>c.config],(()=>{d.schema=c.schema,d.config=c.config}),{deep:!0,immediate:!0}),s((()=>c.modelValue),((e,a)=>{e!==a&&Object.assign(d.modelValue,e)}),{deep:!0,immediate:!0}),s((()=>d.modelValue),(e=>{R("update:modelValue",e)}),{deep:!0,immediate:!0}),a({}),(a,l)=>(E(),i(m(u),{ref_key:"policyInfoFormRef",ref:t,schema:m(d).schema,model:m(d).modelValue,config:m(d).config,title:"保单信息","is-view":e.isView},null,8,["schema","model","config","is-view"]))}});export{R as A,c as B,d as P,T as _,n as a};
