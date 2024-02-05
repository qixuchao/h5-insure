import{d as e,j as a,k as l,o as t,p as s,w as d,b as c,c as n,F as o,s as r,u,a as i,e as v,q as m,dy as f,g as p,cf as b,cg as I,_ as g,i as h,h as x,l as y,v as k,T as C,aG as _,aH as N,b0 as j,b1 as w}from"./index-fef381c5.js";import{g as U}from"./third-ac38747f.js";import{f as V,h as q,s as D}from"./util-2f6baaf9.js";import{C as S}from"./index-ffaf7686.js";import{C as $}from"./index-2307d65a.js";import{f as A,m as B,g as F}from"./gender-bdd67324.js";const T={class:"label"},E={class:"content"},G=e({name:"BasicInfo"}),H=e({...G,props:{data:{type:Object,default:()=>({})}},setup(e){const f=e,p=a(["1"]),b={1:"工薪",2:"个体",3:"私营",4:"房屋租赁",5:"金融投资",6:"存款利息",7:"其他"},I=l((()=>{var e,a;return[{label:"出生日期",value:f.data.birthday},{label:"电子邮箱",value:f.data.email},{label:"国籍",value:f.data.nationalityName},{label:"年收入",value:f.data.personalAnnualIncome,unit:"万元"},{label:"社保",value:f.data.hasSocialInsuranceName},{label:"是否吸烟",value:f.data.smokeFlagName},{label:"收入来源",value:b[f.data.incomeSource]},{label:"身高",value:f.data.height,unit:"厘米"},{label:"体重",value:f.data.weight,unit:"千克"},{label:"婚姻状况",value:f.data.marriageName},{label:"教育程度",value:f.data.educationDegreeName},{label:"职业",value:null==(a=null==(e=f.data)?void 0:e.occunationNameList)?void 0:a.join("/")}]}));return(e,a)=>{const l=S,f=$;return t(),s(f,{modelValue:u(p),"onUpdate:modelValue":a[0]||(a[0]=e=>m(p)?p.value=e:null)},{default:d((()=>[c(l,{title:"基础信息",name:"1"},{default:d((()=>[(t(!0),n(o,null,r(u(I),((e,a)=>(t(),n("div",{key:a,class:"collapse-list"},[i("div",T,v(e.label),1),i("div",E,v(e.value)+" "+v(e.unit),1)])))),128))])),_:1})])),_:1},8,["modelValue"])}}});const L={class:"com-card-select"},O={class:"collapse-content"},z={class:"card-header"},J={class:"card-header-title"},K={class:"card-header-content"},M=e({name:"CardSelect"}),P=e({...M,props:{title:{type:String,default:""},selected:{type:Number,default:0},data:{type:Array,default:()=>[]}},emits:["update:selected"],setup(e,{emit:a}){const l=a,s=f(e,"selected",l),g=e=>{l("update:selected",e)};return(a,l)=>{const f=b,h=I;return t(),n("div",L,[i("div",O,[i("div",z,[i("div",J,v(e.title),1),i("div",K,v(e.data.length)+"张",1)]),c(h,{modelValue:u(s),"onUpdate:modelValue":l[0]||(l[0]=e=>m(s)?s.value=e:null),onChange:g},{default:d((()=>[(t(!0),n(o,null,r(e.data,((e,l)=>(t(),n("div",{key:l,class:"communicate-list pt20"},[c(f,{name:l},{default:d((()=>[p(a.$slots,"default",{scope:e})])),_:2},1032,["name"])])))),128))])),_:3},8,["modelValue"])])])}}});const Q={class:"customer-detail"},R={class:"customer-img"},W=["src"],X={class:"customer-img-content"},Y={class:"customer-img-title"},Z={class:"collapse-content"},ee={class:"cert-row"},ae={class:"label"},le={class:"value"},te={class:"cert-row"},se=(e=>(j("data-v-0945be5e"),e=e(),w(),e))((()=>i("div",{class:"label"},"证件有效期",-1))),de={class:"value"},ce={class:"cert-row"},ne={class:"value"},oe={class:"cert-row"},re={class:"value"},ue={class:"cert-row"},ie={class:"value"},ve={class:"cert-row"},me={class:"value"},fe={class:"cert-row"},pe={class:"value"},be={class:"footer"},Ie=e({name:"CustomerDetail"});var ge=g(e({...Ie,setup(e){const r=h(),m=x(),{customerId:f,path:p}=r.query,b=a({addressIndex:0,certIndex:0,bankIndex:0,contactIndex:0}),I=a({addressInfo:[],certInfo:[],bankCardInfo:[],contactInfo:[],gender:1,name:""});l((()=>{var e;return(null==(e=I.value)?void 0:e.avatar)||I.value.gender?1==+I.value.gender?A:B:F}));const g=e=>{console.log("暂存的客户信息：",I.value);const a=q(I.value,b.value);D(a),delete r.query.path,m.replace({path:p,query:{...r.query,selected:"true"}})},j=(e="",a="")=>`${e?`${e}~`:""}${(null==a?void 0:a.includes("9999"))?"长期":a}`;return y((()=>{(()=>{C.loading({message:"加载中...",forbidClick:!0});const e=V(),a=(e=[])=>(e&&e.length&&(e[0].isDefault="1"),e||[]);U(e).then((e=>{const{code:l,data:t}=e;if("10000"===l&&t){const{bankCardInfo:e=[],addressInfo:l=[],contactInfo:s=[],certInfo:d=[],...c}=t;I.value=t,I.value.addressInfo=a(l),I.value.bankCardInfo=a(e),I.value.contactInfo=a(s),I.value.certInfo=a(d)}})).then((()=>{C.clear()}))})()})),(e,a)=>{const l=_,r=N;return t(),n(o,null,[i("div",Q,[i("div",R,[i("img",{src:I.value.gender?1==+I.value.gender?u(A):u(B):u(F),alt:"",class:"customer-header-img"},null,8,W),i("div",X,[i("div",Y,[k(v(I.value.name||"")+"   ",1),2==+I.value.gender?(t(),s(l,{key:0,name:"male"})):(t(),s(l,{key:1,name:"female"}))])])]),i("div",Z,[c(H,{data:I.value},null,8,["data"])]),c(P,{title:"证件信息",data:I.value.certInfo,selected:b.value.certIndex,"onUpdate:selected":a[0]||(a[0]=e=>b.value.certIndex=e)},{default:d((({scope:e})=>[i("div",ee,[i("div",ae,v(e.certTypeName),1),i("div",le,v(e.certNo),1)]),i("div",te,[se,i("div",de,v(j(e.certStartDate,e.certEndDate)),1)])])),_:1},8,["data","selected"]),c(P,{title:"常用通讯信息",data:I.value.contactInfo,selected:b.value.contactIndex,"onUpdate:selected":a[1]||(a[1]=e=>b.value.contactIndex=e)},{default:d((({scope:e})=>[i("div",ce,[i("div",ne,v(e.contactNo),1)])])),_:1},8,["data","selected"]),c(P,{title:"常用通讯地址",data:I.value.addressInfo,selected:b.value.addressIndex,"onUpdate:selected":a[2]||(a[2]=e=>b.value.addressIndex=e)},{default:d((({scope:e})=>[i("div",oe,[i("div",re,v(e.detail),1)]),i("div",ue,[i("div",ie,v(e.postCode),1)])])),_:1},8,["data","selected"]),c(P,{title:"银行卡信息",data:I.value.bankCardInfo,selected:b.value.bankIndex,"onUpdate:selected":a[3]||(a[3]=e=>b.value.bankIndex=e)},{default:d((({scope:e})=>[i("div",ve,[i("div",me,v(e.bankBranch),1)]),i("div",fe,[i("div",pe,v(e.bankCardNo),1)])])),_:1},8,["data","selected"])]),i("div",be,[c(r,{color:"#c41e21",round:"",style:{"margin-left":"20px",flex:"1"},onClick:g},{default:d((()=>[k("去投保")])),_:1})])],64)}}}),[["__scopeId","data-v-0945be5e"]]);export{ge as default};
