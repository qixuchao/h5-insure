import{d as a,j as e,k as l,o as t,m as s,w as d,b as c,c as n,F as o,q as u,u as r,a as i,e as v,f as m,p as f,ds as p,g as b,bR as I,bS as g,_ as h,i as k,h as x,O as y,a8 as C,T as _,s as N,ae as w,ag as j,aC as D,aD as S}from"./index-ea01be6f.js";import{a as U}from"./third-7507a351.js";import{a as V,f as q,b as $}from"./util-3852c503.js";import{C as A}from"./index-57a83b2a.js";import{C as B}from"./index-067f3605.js";const F={class:"label"},O={class:"content"},T=a({name:"BasicInfo"}),z=a({...T,props:{data:{type:Object,default:()=>({})}},setup(a){const p=a,b=e(["1"]),I={1:"工薪",2:"个体",3:"私营",4:"房屋租赁",5:"金融投资",6:"存款利息",7:"其他"},g=l((()=>{var a,e;return[{label:"出生日期",value:p.data.birthday},{label:"电子邮箱",value:p.data.email},{label:"国籍",value:p.data.nationalityName},{label:"年收入",value:p.data.personalAnnualIncome,unit:"万元"},{label:"社保",value:p.data.hasSocialInsuranceName},{label:"是否吸烟",value:p.data.smokeFlagName},{label:"收入来源",value:I[p.data.incomeSource]},{label:"身高",value:p.data.height,unit:"厘米"},{label:"体重",value:p.data.weight,unit:"千克"},{label:"婚姻状况",value:p.data.marriageName},{label:"教育程度",value:p.data.educationDegreeName},{label:"职业",value:null==(e=null==(a=p.data)?void 0:a.occunationNamelist)?void 0:e.join("/")}]}));return(a,e)=>{const l=A,p=B;return t(),s(p,{modelValue:r(b),"onUpdate:modelValue":e[0]||(e[0]=a=>f(b)?b.value=a:null)},{default:d((()=>[c(l,{title:"基础信息",name:"1"},{default:d((()=>[(t(!0),n(o,null,u(r(g),((a,e)=>(t(),n("div",{key:e,class:"collapse-list"},[a.value?(t(),n(o,{key:0},[i("div",F,v(a.label),1),i("div",O,v(a.value)+" "+v(a.unit),1)],64)):m("",!0)])))),128))])),_:1})])),_:1},8,["modelValue"])}}});const E={class:"com-card-select"},R={class:"collapse-content"},G={class:"card-header"},H={class:"card-header-title"},J={class:"card-header-content"},K=a({name:"CardSelect"}),L=a({...K,props:{title:{type:String,default:""},selected:{type:Number,default:0},data:{type:Array,default:()=>[]}},emits:["update:selected"],setup(a,{emit:e}){const l=p(a,"selected",e),s=a=>{e("update:selected",a)};return(e,m)=>{const p=I,h=g;return t(),n("div",E,[i("div",R,[i("div",G,[i("div",H,v(a.title),1),i("div",J,v(a.data.length)+"张",1)]),c(h,{modelValue:r(l),"onUpdate:modelValue":m[0]||(m[0]=a=>f(l)?l.value=a:null),onChange:s},{default:d((()=>[(t(!0),n(o,null,u(a.data,((a,l)=>(t(),n("div",{key:l,class:"communicate-list pt20"},[c(p,{name:l},{default:d((()=>[b(e.$slots,"default",{scope:a})])),_:2},1032,["name"])])))),128))])),_:3},8,["modelValue"])])])}}});const M={class:"customer-detail"},P={class:"customer-img"},Q=["src"],W={class:"customer-img-content"},X={class:"customer-img-title"},Y={class:"collapse-content"},Z={class:"cert-row"},aa={class:"label"},ea={class:"value"},la={class:"cert-row"},ta=(a=>(D("data-v-345453d6"),a=a(),S(),a))((()=>i("div",{class:"label"},"证件有效期",-1))),sa={class:"value"},da={class:"cert-row"},ca={class:"value"},na={class:"cert-row"},oa={class:"value"},ua={class:"cert-row"},ra={class:"value"},ia={class:"cert-row"},va={class:"value"},ma={class:"cert-row"},fa={class:"value"},pa={class:"footer"},ba=a({name:"CustomerDetail"});var Ia=h(a({...ba,setup(a){const l=k(),u=x();l.query;const m=e({addressIndex:0,certIndex:0,bankIndex:0,contactIndex:0}),f=e({addressInfo:[],certInfo:[],bankCardInfo:[],contactInfo:[],gender:1,name:""}),p=a=>{console.log("暂存的客户信息：",f.value);const e=q(f.value,m.value);$(e),u.replace({path:N.infoCollection,query:{...l.query,selected:"true"}})},b=(a="",e="")=>`${a?`${a}~`:""}${(null==e?void 0:e.includes("9999"))?"长期":e}`;return y((()=>{(()=>{_.loading({message:"加载中...",forbidClick:!0});const a=V(),e=(a=[])=>(a&&a.length&&(a[0].isDefault="1"),a||[]);U(a).then((a=>{const{code:l,data:t}=a;if("10000"===l&&t){const{bankCardInfo:a=[],addressInfo:l=[],contactInfo:s=[],certInfo:d=[],...c}=t;f.value=t,f.value.addressInfo=e(l),f.value.bankCardInfo=e(a),f.value.contactInfo=e(s),f.value.certInfo=e(d)}})).then((()=>{_.clear()}))})()})),(a,e)=>{var l;const u=w,I=j;return t(),n(o,null,[i("div",M,[i("div",P,[i("img",{src:(null==(l=f.value)?void 0:l.avatar)||r("/static/png/customer-avatar-dd9b8cdb.png"),alt:"",class:"customer-header-img"},null,8,Q),i("div",W,[i("div",X,[C(v(f.value.name||"匿名客户")+"   ",1),1==+f.value.gender?(t(),s(u,{key:0,name:"male"})):(t(),s(u,{key:1,name:"female"}))])])]),i("div",Y,[c(z,{data:f.value},null,8,["data"])]),c(L,{title:"证件信息",data:f.value.certInfo,selected:m.value.certIndex,"onUpdate:selected":e[0]||(e[0]=a=>m.value.certIndex=a)},{default:d((({scope:a})=>[i("div",Z,[i("div",aa,v(a.certTypeName),1),i("div",ea,v(a.desensitizaCertNo),1)]),i("div",la,[ta,i("div",sa,v(b(a.certStartDate,a.certEndDate)),1)])])),_:1},8,["data","selected"]),c(L,{title:"常用通讯信息",data:f.value.contactInfo,selected:m.value.contactIndex,"onUpdate:selected":e[1]||(e[1]=a=>m.value.contactIndex=a)},{default:d((({scope:a})=>[i("div",da,[i("div",ca,v(a.contactNo),1)])])),_:1},8,["data","selected"]),c(L,{title:"常用通讯地址",data:f.value.addressInfo,selected:m.value.addressIndex,"onUpdate:selected":e[2]||(e[2]=a=>m.value.addressIndex=a)},{default:d((({scope:a})=>[i("div",na,[i("div",oa,v(a.detail),1)]),i("div",ua,[i("div",ra,v(a.postCode),1)])])),_:1},8,["data","selected"]),c(L,{title:"银行卡信息",data:f.value.bankCardInfo,selected:m.value.bankIndex,"onUpdate:selected":e[3]||(e[3]=a=>m.value.bankIndex=a)},{default:d((({scope:a})=>[i("div",ia,[i("div",va,v(a.bankBranch),1)]),i("div",ma,[i("div",fa,v(a.bankCardNo),1)])])),_:1},8,["data","selected"])]),i("div",pa,[c(I,{color:"#c41e21",round:"",style:{"margin-left":"20px",flex:"1"},onClick:p},{default:d((()=>[C("去投保")])),_:1})])],64)}}}),[["__scopeId","data-v-345453d6"]]);export{Ia as default};
