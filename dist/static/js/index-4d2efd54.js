import{d as e,j as a,k as l,E as n,ah as t,dA as s,o as i,c as o,a as u,b as d,w as r,e as v,u as p,F as c,s as m,n as f,f as C,p as y,aL as k,q as g,aR as h,_ as S,aS as _}from"./index-43e4e33e.js";import{C as j}from"./index-fb44b03a.js";import{o as w}from"./utils-eca0f656.js";import{C as b}from"./index-963efae8.js";import"./infoCollection-0e9ef64c.js";import"./trial-4641d264.js";const x={class:"guarantee-list"},A={key:0,class:"plan-list"},L=["onClick"],U={class:"guarantee-detail"},V={class:"content"},$={key:1,class:"feerate-view"},E=e({name:"guarantee"});var q=S(e({...E,props:{dataSource:{default:()=>({})},showServiceConfig:{type:Boolean,default:!1},isShowClose:{type:Boolean,default:!1},count:{default:5},planList:{default:()=>[]}},emits:["updateActivePlan"],setup(e,{emit:S}){var E,q;const F=e;a("");const R=a((null==(q=null==(E=F.planList)?void 0:E[0])?void 0:q.planCode)||void 0),B=a(),I=a([]);a([]);const N=a(),P=l((()=>!!F.planList.length)),T=a(null),G=a([]),O=l((()=>{var e,a;return(null==(e=G.value)?void 0:e.length)===(null==(a=I.value)?void 0:a.length)})),Y=()=>{var e,a;null==(a=null==(e=T.value)?void 0:e.toggleAll)||a.call(e,!O.value)};n([()=>F.dataSource,()=>R.value],(()=>{var e,a;I.value=((null==(a=((null==(e=F.dataSource)?void 0:e.GUARANTEE)||[]).find((e=>e.planCode===R.value)))?void 0:a.data)||[]).filter((e=>e.isShowOn===`${t.YES}`))}),{immediate:!0,deep:!0});const z=l((()=>{var e;return(null==(e=F.dataSource)?void 0:e.rateUri)||""})),D=l((()=>!!(N.value&&N.value.paymentFrequencyValue&&N.value.premiumUnit&&z))),H=()=>{w({fileType:"pdf",fileUri:z.value})};return(e,a)=>{var l,n;const t=_,w=j,E=b,q=s("dompurify-html");return i(),o(c,null,[u("div",x,[d(t,{title:"保障详情","show-line":!1,"show-divider":!1},{extra:r((()=>[u("span",{onClick:Y},v(p(O)?"收起全部":"展开全部"),1)])),_:1}),p(P)?(i(),o("div",A,[(i(!0),o(c,null,m(e.planList,((e,a)=>(i(),o("div",{key:`${e.planCode}_${a}`,class:f("plan-list-item "+(e.planCode===p(R)?"plan-list-item-active":"")),onClick:a=>{return l=e.planCode,R.value=l,B.value=F.planList.findIndex((e=>e.planCode===l)),void S("updateActivePlan",l);var l}},[u("span",null,v(e.planName),1)],10,L)))),128))])):C("",!0),u("div",U,[d(E,{ref_key:"collapseRef",ref:T,modelValue:p(G),"onUpdate:modelValue":a[0]||(a[0]=e=>g(G)?G.value=e:null),border:!1},{default:r((()=>[(i(!0),o(c,null,m(p(I),((e,a)=>(i(),y(w,{key:a,title:e.title,value:e.desc,name:a,border:!1,class:"guarantee-item"},{default:r((()=>[k(u("div",V,null,512),[[q,e.tips]])])),_:2},1032,["title","value","name"])))),128))])),_:1},8,["modelValue"])]),p(D)?(i(),o("div",$,[u("span",null,v(`${(null==(l=p(N))?void 0:l.paymentFrequencyValue)||""}${(null==(n=p(N))?void 0:n.premiumUnit)||""}`),1),p(z)?(i(),o("span",{key:0,onClick:H},"查看保费")):C("",!0)])):C("",!0)]),d(h)],64)}}}),[["__scopeId","data-v-eba9291c"]]);export{q as default};
