import{_ as e,d as t,z as a,a7 as s,b as A,c as n,g as o,f as l,w as c,i,t as r,l as m,F as d,h as u,B as g,bi as B,s as N,U,n as h}from"./index-6a34609b.js";import"./pdfdist-5d72820d.js";const w={class:"customer-body"},p={class:"header"},F={class:"conatiner"},Q=["onClick"],R={class:"name"},S=h("确 定");var C=e(t({props:{userInfo:{type:Object,default:()=>({})},relationCode:{type:String,default:"1"},title:{type:String,default:"选择投保人"},data:{type:Array,default:()=>[]}},emits:["change"],setup(e,{emit:t}){const h=e,C=a({loading:!1,select:{},list:[]});s((()=>h.data),(e=>{C.list=h.data}),{deep:!0,immediate:!0}),s([()=>h.userInfo,()=>C.loading],(()=>{C.select={...h.userInfo}}),{deep:!0,immediate:!0});const v=()=>{C.loading=!1,t("change",C.select)},y=()=>{C.select={},C.loading=!1},q=()=>{C.loading=!1,C.loading=!0};return(t,a)=>{const s=A("ProSvg"),h=A("van-icon"),b=A("VanButton"),D=A("ProPopup");return n(),o(d,null,[l(s,{name:"customer",onClick:q}),l(D,{class:"customer-list",style:{height:"416px"},show:m(C).loading,closeable:!1,onClose:y},{default:c((()=>[i("div",w,[i("div",p,[i("span",null,r(e.title),1),l(h,{name:m("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAAXNSR0IArs4c6QAAAuRJREFUeF7t3DtOI0EQBuDfEtImXAdyNoIEAffYkIALrFZaMu4BiAQiyOE6myARoJI8kteyx/3469FWTTxT3fVNdY/dY/cCeVAFFtRoGQwJSi6CBE1QsgA5XFZogpIFyOGyQhOULEAOlxWaoGQBcris0CCglwB+ATgEcA/gFsAXuW/W4Q4AXAOQ3P4BuAPwUNuJlgqVBgVx9XheduSztgNBzv+xxDtb689VLWoL6CuAkw0Qo6Juw5QU3wD8rLnpLaDvAI62NDIa6hympPgB4Fgb9AbA75lGRkHdhSkpSq5/tEFl8n4CsD7fjDSnlmBKYZzXPmxbhrzAlXZIHmDRHlSqfW8FHRVVFVNQekBHQ1XHZICOgmqCyQKNjmqGyQSNimqKyQaNhmqOqQEaBdUFUwvUG9UNUxPUC9UVUxvUGtUd0wLUCjUEphWoNmoYTEtQLdRQmNagbNRwmB6gLNSQmF6gvahhMT1BW1FDY3qD1qLK+fKePPSrl94FZkmy9yipupdlI6czjYV4ORgBtLRS525cCMwIQ34VqaRSN6GGwYwG2lKpoTAjgk6ojwDm5ks5T+bVi2ivqaPMoetDP0F7H/XL62vn0RzyM/C1mFOoUKhRhnwrZjjUCKAlmPnBvnBOLcGchnR+9dyBWoM5/YKv5ZrCe8s5zWvI98D0XMtRm4niAcoAYcRQwbUGZUIwY9FwLUE1ADRiduFagWomrhm7GtcC1CJhizaKcLVBLRO1bGsrriaoR4Iebf6HqwXqmZhn293/AtlU+q4JVSwDqqxSsSs0AuZ0k136wgR1SUBhvaDoab7tJBZoREyXSmWARsY0R+0FHQHTFLUHdCRMM9RW0BExTVBbQHMDAvICc26RQQbNTVzIoLnNEBk0N8Iig0q41a3a5Gfaf2t3j+n6fqdzsdtWbTrp7EnUlo9Ne5K6ThoJSnZN0AQlC5DDZYUmKFmAHC4rNEHJAuRwWaEJShYgh8sKJYN+A6+yQmSPqqjtAAAAAElFTkSuQmCC"),onClick:a[0]||(a[0]=e=>m(C).loading=!1)},null,8,["name"])]),i("div",F,[(n(!0),o(d,null,u(m(C).list,((e,t)=>{var a,s;return n(),o("div",{key:`${e.customerId}_${t}`,class:g({item:!0,active:m(C).select.certNo===(null==(a=e.cert[0])?void 0:a.certNo)}),onClick:t=>(e=>{C.select.name=e.cert[0].certName,C.select.certNo=e.cert[0].certNo,C.select.mobile=e.contact[0].contactNo})(e)},[i("span",R,r(e.cert[0].certName),1),i("span",null,r(m(B)(e.cert[0].certNo)),1),N(l(h,{class:"check-icon",name:m("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAn9JREFUSEvtlktIVFEcxn/XXpM6Mz5zVBzR8oFUVARRUljhItKNhZC0qVYhZjMMFIG0aFUUtijKB0GEBL02WmZqRjlbFyWSYQ+EynKyh5baNHPi3hsNtzuj89Bp44G7Oec732/u//y/c0cSQgj+w5AWwNGqevRK/eMLXD0AAx2wu47ogD8OwcVyGHmuFnSJIQrgwR5o2Avfx3ynuL5insFPmuB6NXjcPmjhDqhunSew1wO3HNB9Xtur+SVQ0wZL4+YBPPkVmvdBf7sWmrcVau7Bsnhlfm6ba/SV2kTvB7TQlcVwpB0Mxr/zkvj8VigtvqYMjKnhx/jFY2jYAxMurUfuZqi9DwaTZl4SdQWCD4NgssChFpAPP9ThvAIth8HzU7szZxPUdsBys85REsetgrFhdUGKUcKtPDGLZsfLTXTnGHSe02uzN8LRTohN8OsjiSGnoH4nuKd8goLt6tub0wPDp8ahuQqetek11g1g64LYxID71ebquw2NlSC8PqExDQ5eg6JS/WbXG7WJ3vXr17LWga0b4pJmrJivq+XM3bBpxXLpd52A8pMQs1hdG+qFyxUwPqo3zlwL9m6IT5n1mLRxummDrn9CL1vkbYP9jSpUvol+TeuNM1aD/WHQydCCvV5oqkQpfSgjvUiFmtKC3qW/QNyTUF8KL53BmVgKwd4DZktw+j8q/zfXxCc4U4yS75nGinxwyNCMkKBKcgP+53K9htNb4NuIf9PUVeB4BAmZIUNnBsurw31wtgSmx7XmKbkqNDErLOjsYFkx8AAulPm+qck5KjTJGjY0OLCsetoKd0+p+ay6BMnZEUGDB0eM0RvM7fc4hB+4AA6hWJFJfwMaXAhFHVsobQAAAABJRU5ErkJggg==")},null,8,["name"]),[[U,m(C).select.certNo===(null==(s=e.cert[0])?void 0:s.certNo)]])],10,Q)})),128))]),l(b,{type:"primary",round:"",block:"",class:"linear-btn",onClick:v},{default:c((()=>[S])),_:1})])])),_:1},8,["show"])],64)}}}),[["__scopeId","data-v-3de8b298"]]);export{C as default};
