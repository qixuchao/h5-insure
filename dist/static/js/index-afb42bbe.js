import{_ as e,d as t,z as a,a7 as s,b as l,c,g as o,f as n,w as r,i,t as A,l as d,F as m,h as u,B as g,bj as p,s as N,U as C,n as R,a2 as Q}from"./index-ede405b0.js";import"./pdfdist-66c75904.js";const U={class:"customer-body"},h={class:"header"},B={class:"conatiner"},y=["onClick"],F={class:"name"},w=R("确 定");var S=e(t({props:{userInfo:{type:Object,default:()=>({})},relationCode:{type:String,default:"1"},title:{type:String,default:"选择投保人"},data:{type:Array,default:()=>[]}},emits:["change"],setup(e,{emit:t}){const R=e,S=a({loading:!1,select:{},list:[]});s((()=>R.data),(e=>{S.list=R.data}),{deep:!0,immediate:!0}),s([()=>R.userInfo,()=>S.loading],(()=>{S.select={...R.userInfo}}),{deep:!0,immediate:!0});const b=()=>{S.loading=!1,t("change",S.select)},f=()=>{S.select={},S.loading=!1},v=()=>{S.loading=!1,S.loading=!0};return(t,a)=>{const s=l("ProSvg"),R=l("van-icon"),I=l("VanButton"),E=l("ProPopup");return c(),o(m,null,[n(s,{name:"customer",onClick:v}),n(E,{class:"customer-list",style:{height:"416px"},show:d(S).loading,closeable:!1,onClose:f},{default:r((()=>[i("div",U,[i("div",h,[i("span",null,A(e.title),1),n(R,{name:d("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAAXNSR0IArs4c6QAAAuRJREFUeF7t3DtOI0EQBuDfEtImXAdyNoIEAffYkIALrFZaMu4BiAQiyOE6myARoJI8kteyx/3469FWTTxT3fVNdY/dY/cCeVAFFtRoGQwJSi6CBE1QsgA5XFZogpIFyOGyQhOULEAOlxWaoGQBcris0CCglwB+ATgEcA/gFsAXuW/W4Q4AXAOQ3P4BuAPwUNuJlgqVBgVx9XheduSztgNBzv+xxDtb689VLWoL6CuAkw0Qo6Juw5QU3wD8rLnpLaDvAI62NDIa6hympPgB4Fgb9AbA75lGRkHdhSkpSq5/tEFl8n4CsD7fjDSnlmBKYZzXPmxbhrzAlXZIHmDRHlSqfW8FHRVVFVNQekBHQ1XHZICOgmqCyQKNjmqGyQSNimqKyQaNhmqOqQEaBdUFUwvUG9UNUxPUC9UVUxvUGtUd0wLUCjUEphWoNmoYTEtQLdRQmNagbNRwmB6gLNSQmF6gvahhMT1BW1FDY3qD1qLK+fKePPSrl94FZkmy9yipupdlI6czjYV4ORgBtLRS525cCMwIQ34VqaRSN6GGwYwG2lKpoTAjgk6ojwDm5ks5T+bVi2ivqaPMoetDP0F7H/XL62vn0RzyM/C1mFOoUKhRhnwrZjjUCKAlmPnBvnBOLcGchnR+9dyBWoM5/YKv5ZrCe8s5zWvI98D0XMtRm4niAcoAYcRQwbUGZUIwY9FwLUE1ADRiduFagWomrhm7GtcC1CJhizaKcLVBLRO1bGsrriaoR4Iebf6HqwXqmZhn293/AtlU+q4JVSwDqqxSsSs0AuZ0k136wgR1SUBhvaDoab7tJBZoREyXSmWARsY0R+0FHQHTFLUHdCRMM9RW0BExTVBbQHMDAvICc26RQQbNTVzIoLnNEBk0N8Iig0q41a3a5Gfaf2t3j+n6fqdzsdtWbTrp7EnUlo9Ne5K6ThoJSnZN0AQlC5DDZYUmKFmAHC4rNEHJAuRwWaEJShYgh8sKJYN+A6+yQmSPqqjtAAAAAElFTkSuQmCC"),onClick:a[0]||(a[0]=e=>d(S).loading=!1)},null,8,["name"])]),i("div",B,[(c(!0),o(m,null,u(d(S).list,((e,t)=>{var a,s;return c(),o("div",{key:`${e.customerId}_${t}`,class:g({item:!0,active:d(S).select.certNo===(null==(a=e.cert[0])?void 0:a.certNo)}),onClick:t=>(e=>{S.select.name=e.cert[0].certName,S.select.certNo=e.cert[0].certNo,S.select.certType=e.cert[0].certType||Q.CERT,S.select.mobile=e.contact[0].contactNo})(e)},[i("span",F,A(e.cert[0].certName),1),i("span",null,A(d(p)(e.cert[0].certNo)),1),N(n(R,{class:"check-icon",name:"success"},null,512),[[C,d(S).select.certNo===(null==(s=e.cert[0])?void 0:s.certNo)]])],10,y)})),128))]),n(I,{type:"primary",round:"",block:"",class:"linear-btn",onClick:b},{default:r((()=>[w])),_:1})])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-7eae0dbc"]]);export{S as default};
