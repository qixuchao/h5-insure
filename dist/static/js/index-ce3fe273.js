import{d as e,j as a,k as l,o as t,m as s,w as d,b as c,c as n,F as o,q as u,u as r,a as i,e as v,f as m,p as f,du as p,g as b,bT as I,bU as g,_ as h,i as k,h as x,O as y,a8 as C,T as _,s as N,ae as w,ag as j,aC as U,aD as D}from"./index-75b55068.js";import{a as V}from"./third-14a38207.js";import{e as S,f as q,h as $}from"./util-e81ec6e8.js";import{C as T}from"./index-65091b21.js";import{C as A}from"./index-3153273e.js";const B={class:"label"},F={class:"content"},O=e({name:"BasicInfo"}),E=e({...O,props:{data:{type:Object,default:()=>({})}},setup(e){const p=e,b=a(["1"]),I={1:"工薪",2:"个体",3:"私营",4:"房屋租赁",5:"金融投资",6:"存款利息",7:"其他"},g=l((()=>{var e,a;return[{label:"出生日期",value:p.data.birthday},{label:"电子邮箱",value:p.data.email},{label:"国籍",value:p.data.nationalityName},{label:"年收入",value:p.data.personalAnnualIncome,unit:"万元"},{label:"社保",value:p.data.hasSocialInsuranceName},{label:"是否吸烟",value:p.data.smokeFlagName},{label:"收入来源",value:I[p.data.incomeSource]},{label:"身高",value:p.data.height,unit:"厘米"},{label:"体重",value:p.data.weight,unit:"千克"},{label:"婚姻状况",value:p.data.marriageName},{label:"教育程度",value:p.data.educationDegreeName},{label:"职业",value:null==(a=null==(e=p.data)?void 0:e.occunationNameList)?void 0:a.join("/")}]}));return(e,a)=>{const l=T,p=A;return t(),s(p,{modelValue:r(b),"onUpdate:modelValue":a[0]||(a[0]=e=>f(b)?b.value=e:null)},{default:d((()=>[c(l,{title:"基础信息",name:"1"},{default:d((()=>[(t(!0),n(o,null,u(r(g),((e,a)=>(t(),n("div",{key:a,class:"collapse-list"},[e.value?(t(),n(o,{key:0},[i("div",B,v(e.label),1),i("div",F,v(e.value)+" "+v(e.unit),1)],64)):m("",!0)])))),128))])),_:1})])),_:1},8,["modelValue"])}}});const L={class:"com-card-select"},z={class:"collapse-content"},G={class:"card-header"},H={class:"card-header-title"},J={class:"card-header-content"},K=e({name:"CardSelect"}),M=e({...K,props:{title:{type:String,default:""},selected:{type:Number,default:0},data:{type:Array,default:()=>[]}},emits:["update:selected"],setup(e,{emit:a}){const l=p(e,"selected",a),s=e=>{a("update:selected",e)};return(a,m)=>{const p=I,h=g;return t(),n("div",L,[i("div",z,[i("div",G,[i("div",H,v(e.title),1),i("div",J,v(e.data.length)+"张",1)]),c(h,{modelValue:r(l),"onUpdate:modelValue":m[0]||(m[0]=e=>f(l)?l.value=e:null),onChange:s},{default:d((()=>[(t(!0),n(o,null,u(e.data,((e,l)=>(t(),n("div",{key:l,class:"communicate-list pt20"},[c(p,{name:l},{default:d((()=>[b(a.$slots,"default",{scope:e})])),_:2},1032,["name"])])))),128))])),_:3},8,["modelValue"])])])}}});const P={class:"customer-detail"},Q={class:"customer-img"},R=["src"],W={class:"customer-img-content"},X={class:"customer-img-title"},Y={class:"collapse-content"},Z={class:"cert-row"},ee={class:"label"},ae={class:"value"},le={class:"cert-row"},te=(e=>(U("data-v-601fb96e"),e=e(),D(),e))((()=>i("div",{class:"label"},"证件有效期",-1))),se={class:"value"},de={class:"cert-row"},ce={class:"value"},ne={class:"cert-row"},oe={class:"value"},ue={class:"cert-row"},re={class:"value"},ie={class:"cert-row"},ve={class:"value"},me={class:"cert-row"},fe={class:"value"},pe={class:"footer"},be=e({name:"CustomerDetail"});var Ie=h(e({...be,setup(e){const l=k(),u=x();l.query;const m=a({addressIndex:0,certIndex:0,bankIndex:0,contactIndex:0}),f=a({addressInfo:[],certInfo:[],bankCardInfo:[],contactInfo:[],gender:1,name:""}),p=e=>{console.log("暂存的客户信息：",f.value);const a=q(f.value,m.value);$(a),u.replace({path:N.infoCollection,query:{...l.query,selected:"true"}})},b=(e="",a="")=>`${e?`${e}~`:""}${(null==a?void 0:a.includes("9999"))?"长期":a}`;return y((()=>{(()=>{_.loading({message:"加载中...",forbidClick:!0});const e=S(),a=(e=[])=>(e&&e.length&&(e[0].isDefault="1"),e||[]);V(e).then((e=>{const{code:l,data:t}=e;if("10000"===l&&t){const{bankCardInfo:e=[],addressInfo:l=[],contactInfo:s=[],certInfo:d=[],...c}=t;f.value=t,f.value.addressInfo=a(l),f.value.bankCardInfo=a(e),f.value.contactInfo=a(s),f.value.certInfo=a(d)}})).then((()=>{_.clear()}))})()})),(e,a)=>{var l;const u=w,I=j;return t(),n(o,null,[i("div",P,[i("div",Q,[i("img",{src:(null==(l=f.value)?void 0:l.avatar)||r("/static/png/customer-avatar-dd9b8cdb.png"),alt:"",class:"customer-header-img"},null,8,R),i("div",W,[i("div",X,[C(v(f.value.name||"")+"   ",1),2==+f.value.gender?(t(),s(u,{key:0,name:"male"})):(t(),s(u,{key:1,name:"female"}))])])]),i("div",Y,[c(E,{data:f.value},null,8,["data"])]),c(M,{title:"证件信息",data:f.value.certInfo,selected:m.value.certIndex,"onUpdate:selected":a[0]||(a[0]=e=>m.value.certIndex=e)},{default:d((({scope:e})=>[i("div",Z,[i("div",ee,v(e.certTypeName),1),i("div",ae,v(e.certNo),1)]),i("div",le,[te,i("div",se,v(b(e.certStartDate,e.certEndDate)),1)])])),_:1},8,["data","selected"]),c(M,{title:"常用通讯信息",data:f.value.contactInfo,selected:m.value.contactIndex,"onUpdate:selected":a[1]||(a[1]=e=>m.value.contactIndex=e)},{default:d((({scope:e})=>[i("div",de,[i("div",ce,v(e.contactNo),1)])])),_:1},8,["data","selected"]),c(M,{title:"常用通讯地址",data:f.value.addressInfo,selected:m.value.addressIndex,"onUpdate:selected":a[2]||(a[2]=e=>m.value.addressIndex=e)},{default:d((({scope:e})=>[i("div",ne,[i("div",oe,v(e.detail),1)]),i("div",ue,[i("div",re,v(e.postCode),1)])])),_:1},8,["data","selected"]),c(M,{title:"银行卡信息",data:f.value.bankCardInfo,selected:m.value.bankIndex,"onUpdate:selected":a[3]||(a[3]=e=>m.value.bankIndex=e)},{default:d((({scope:e})=>[i("div",ie,[i("div",ve,v(e.bankBranch),1)]),i("div",me,[i("div",fe,v(e.bankCardNo),1)])])),_:1},8,["data","selected"])]),i("div",pe,[c(I,{color:"#c41e21",round:"",style:{"margin-left":"20px",flex:"1"},onClick:p},{default:d((()=>[C("去投保")])),_:1})])],64)}}}),[["__scopeId","data-v-601fb96e"]]);export{Ie as default};
