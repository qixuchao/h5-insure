var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var G=(s,o,t)=>o in s?Z(s,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[o]=t,U=(s,o)=>{for(var t in o||(o={}))oe.call(o,t)&&G(s,t,o[t]);if(j)for(var t of j(o))ae.call(o,t)&&G(s,t,o[t]);return s},$=(s,o)=>ee(s,te(o));import{g as T,E as m,M as H,_ as ne,r as _,j as y,k as N,m as S,p as h,A as n,z as a,J as se,L as q,T as O,n as J,t as ue,a4 as le,a5 as re,O as ce,a9 as ie,h as de,G as me,F as pe,C as ve}from"./vendor-06835924.js";import{R as fe}from"./infoCollection-b0426750.js";import{s as _e,c as he}from"./phoneVerify-213543ed.js";import{v as z,a as Ce,b as be}from"./validator-ebd71d12.js";import{F as P,g as ge}from"./utils-d9276c1a.js";import{G as Fe,_ as Be}from"./index-a916e15f.js";import{g as ye,m as Ie,i as De}from"./trial-b893dfb5.js";import{p as ke}from"./product-056fff50.js";import{t as Ee}from"./theme-eeb93d73.js";import{c as Ve}from"./close-df102554.js";import{_ as xe}from"./index-8934e5d6.js";import"./trial-e45e2b4e.js";const we=T({props:{isCheck:{type:Boolean,default:!1},userInfo:{type:Object,default:()=>{}}},emits:["on-verify"],setup(s,{emit:o}){var L;const t=s,u=m({}),r=m(!1),E=30,i=m(0),C=m("\u83B7\u53D6\u9A8C\u8BC1\u7801"),l=H({mobile:(L=t.userInfo)==null?void 0:L.mobile,smsCode:""}),b=e=>z(e)?!0:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7",I=()=>{if(i.value>0)return;i.value=E;const e=()=>{C.value=`${i.value}s`,i.value-=1};e();const c=setInterval(()=>{i.value===0?(C.value="\u83B7\u53D6\u9A8C\u8BC1\u7801",i.value=0,clearInterval(c)):e()},1e3)},g=async()=>{i.value>0||u==null||u.value.validate("mobile").then(async()=>{const e=await _e(l.mobile),{code:c,data:V}=e;c==="10000"&&(r.value=!0,O({message:"\u77ED\u4FE1\u53D1\u9001\u6210\u529F\uFF0C\u8BF7\u67E5\u6536"}),I())})},D=async()=>{const e=await he(l.mobile,l.smsCode),{data:c}=e;c&&o("on-verify",l)},v=async()=>{u==null||u.value.validate().then(async()=>{D()})};return ne(()=>l,()=>{z(l.mobile)&&Ce(l.smsCode)&&r.value&&D()},{deep:!0,immediate:!0}),(e,c)=>{const V=_("van-field"),A=_("van-cell-group"),M=_("VanForm");return y(),N(M,{ref_key:"formRef",ref:u,"label-width":"80"},{default:S(()=>[h(A,null,{default:S(()=>[h(V,{modelValue:n(l).mobile,"onUpdate:modelValue":c[0]||(c[0]=x=>n(l).mobile=x),name:"mobile",label:"\u624B\u673A\u53F7",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",maxlength:n(P).MOBILE,rules:[{validator:b}]},null,8,["modelValue","maxlength","rules"]),h(V,{modelValue:n(l).smsCode,"onUpdate:modelValue":c[1]||(c[1]=x=>n(l).smsCode=x),type:"digit",name:"smsCode",label:"\u9A8C\u8BC1\u7801",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",maxlength:n(P).SMS_CODE},{button:S(()=>[a("div",{class:q(["sms-code",{"count-down":i.value>0}]),onClick:g},se(C.value),3)]),_:1},8,["modelValue","maxlength"])]),_:1}),a("div",{class:q([{"check-submit":t.isCheck},{submit:!t.isCheck}]),onClick:v},null,2)]),_:1},512)}}}),Ne=T({props:{isCheck:{type:Boolean,default:!1},userInfo:{type:Object,default:()=>{}}},emits:["on-submit"],setup(s,{emit:o}){const t=s,u=m({}),r=H({name:t.userInfo.name,certNo:t.userInfo.certNo}),E=l=>Fe(r.certNo)?!0:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u8BC1\u4EF6\u53F7",i=l=>be(l)?!0:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u59D3\u540D",C=()=>{u==null||u.value.validate().then(async l=>{o("on-submit",r)})};return(l,b)=>{const I=_("van-field"),g=_("van-cell-group"),D=_("VanForm");return y(),N(D,{ref_key:"formRef",ref:u,"label-width":"80"},{default:S(()=>[h(g,null,{default:S(()=>[h(I,{modelValue:n(r).name,"onUpdate:modelValue":b[0]||(b[0]=v=>n(r).name=v),name:"name",label:"\u59D3\u540D",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",maxlength:n(P).NAME,rules:[{validator:i}]},null,8,["modelValue","maxlength","rules"]),h(I,{modelValue:n(r).certNo,"onUpdate:modelValue":b[1]||(b[1]=v=>n(r).certNo=v),name:"certNo",label:"\u8EAB\u4EFD\u8BC1",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",maxlength:n(P).ID_CARD,rules:[{validator:E}]},null,8,["modelValue","maxlength","rules"])]),_:1}),a("div",{class:q([{"check-submit":t.isCheck},{submit:!t.isCheck}]),onClick:C},null,2)]),_:1},512)}}});var Se="/static/assets/title-step1.97cb9efa.png",Ae="/static/assets/title-step2.258af5e9.png";const K=s=>(le("data-v-a6bc1804"),s=s(),re(),s),Oe={key:0,class:"pro-modal"},Le=K(()=>a("div",{class:"pro-overlay"},null,-1)),Pe={class:"pro-modal-wrapper"},Te=K(()=>a("div",{class:"pro-modal-content"},[a("p",null,"\u606D\u559C\u60A8"),a("p",null,"\u9886\u53D6\u6210\u529F")],-1)),Me=["src"],Ue=T({props:{bg:{type:String,default:""},btn:{type:String,default:""},isShow:{type:Boolean,default:()=>{}}},emits:["on-confirm","on-close"],setup(s,{emit:o}){const t=s,u=()=>{o("on-close")};return(r,E)=>t.isShow?(y(),J("div",Oe,[Le,a("div",Pe,[a("div",{class:"pro-modal-body"},[Te,a("div",{class:"pro-modal-btn",onClick:u},"\u6211\u77E5\u9053\u4E86")]),a("div",{class:"pro-modal-close",onClick:u},[a("img",{src:n(Ve)},null,8,Me)])])])):ue("",!0)}});var $e=Be(Ue,[["__scopeId","data-v-a6bc1804"]]);const qe={class:"page-activity-invite"},He=["src"],Re={class:"container"},je={class:"main-form"},Ge={class:"title"},ze=["src"],Je={class:"agree"},Ke={class:"check-wrap"},We=ve(" \u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F "),ct=T({setup(s){const o=ce(),t=ie(),{productCode:u="7X9",tenantId:r="",phoneNo:E,saleChannelId:i,agentCode:C="",paymentMethod:l,from:b}=o.query,I=m(!0),g=b==="check",D=m(!1),v=m(!1),L=m(0),e=H({title:Se,attachmentList:[{attachmentName:"",attachmentUri:""}],userInfo:{mobile:E,certNo:"",name:""},agree:!1}),c=m(),V=m(),A=m(!1),M=async p=>{var k,B;e.userInfo.mobile=p.mobile;const d=await ye({holderPhone:e.userInfo.mobile,productCode:u,tenantId:r}),{code:F,data:f}=d;F==="10000"&&(e.userInfo.name=(k=f.tenantOrderHolder)==null?void 0:k.name,e.userInfo.certNo=(B=f.tenantOrderHolder)==null?void 0:B.certNo),e.title=Ae,I.value=!1},x=async p=>{if(e.userInfo.certNo=p==null?void 0:p.certNo,e.userInfo.name=p==null?void 0:p.name,g&&!D.value){v.value=!0;return}if(!e.agree){O("\u8BF7\u52FE\u9009\u534F\u8BAE");return}try{O({message:"\u9886\u53D6\u4E2D...",forbidClick:!0,loadingType:"spinner"});const d=ge({tenantId:r,detail:c.value,insureDetail:V.value,saleChannelId:i,saleUserId:C,holder:e.userInfo,insured:$(U({},e.userInfo),{relationToHolder:fe.SELF}),paymentMethod:l,renewalDK:"",successJumpUrl:"",premium:0,orderStatus:"",orderTopStatus:"",tenantOrderRiskList:[]}),F=await Ie(d),{code:f}=F;if(f==="10000"){if(g){O.clear(),A.value=!0;return}t.push({path:"/chuangxin/baigebao/productDetail",query:$(U({},o.query),{tenantId:r,phoneNo:e.userInfo.mobile,certNo:e.userInfo.certNo,name:e.userInfo.name,productCode:"BWYL2021",agentCode:C})})}}catch(d){console.log(d),O.clear()}},W=()=>{D.value=!0,x()},X=()=>{A.value=!1},Y=async()=>{const p=ke({productCode:u,withInsureInfo:!0,tenantId:r}),d=De({productCode:u});Promise.all([p,d]).then(([F,f])=>{var k,B;F.code==="10000"&&(c.value=F.data,e.attachmentList=((B=(k=c.value)==null?void 0:k.tenantProductInsureVO)==null?void 0:B.attachmentVOList)||[]),f.code==="10000"&&(V.value=f.data)})};return de(()=>{Y()}),(p,d)=>{const F=_("van-checkbox"),f=_("ProPDFviewer"),k=_("van-config-provider");return y(),N(k,{"theme-vars":n(Ee)},{default:S(()=>{var B,R;return[a("div",qe,[a("img",{src:(R=(B=c.value)==null?void 0:B.tenantProductInsureVO)==null?void 0:R.banner[0],class:"banner"},null,8,He),a("div",Re,[a("div",je,[a("div",Ge,[a("img",{src:n(e).title},null,8,ze)]),I.value?(y(),N(we,{key:0,"is-check":g,"user-info":n(e).userInfo,onOnVerify:M},null,8,["user-info"])):(y(),N(Ne,{key:1,"is-check":g,"user-info":n(e).userInfo,onOnSubmit:x},null,8,["user-info"])),a("div",Je,[a("div",Ke,[h(F,{modelValue:n(e).agree,"onUpdate:modelValue":d[0]||(d[0]=w=>n(e).agree=w),name:"agree",shape:"square"},null,8,["modelValue"])]),a("div",null,[We,(y(!0),J(pe,null,me(n(e).attachmentList||[],(w,Q)=>(y(),N(f,{key:Q,class:"file-name",title:`\u300A${w.attachmentName}\u300B`,content:w.attachmentUri,type:"pdf"},null,8,["title","content"]))),128))])])])])]),h($e,{"is-show":A.value,onOnClose:X},null,8,["is-show"]),h(xe,{show:v.value,"onUpdate:show":d[1]||(d[1]=w=>v.value=w),"content-list":n(e).attachmentList,"active-index":L.value,text:"\u6211\u5DF2\u9010\u9875\u9605\u8BFB\u5E76\u786E\u8BA4\u544A\u77E5\u5185\u5BB9",onSubmit:W},null,8,["show","content-list","active-index"])]}),_:1},8,["theme-vars"])}}});export{ct as default};
