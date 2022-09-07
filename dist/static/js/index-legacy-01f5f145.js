!function(){var e=document.createElement("style");e.innerHTML=".page-activity-invite{background:linear-gradient(180deg,#fea64a 0%,#fc7429 88%,#fc6d24 100%)}.page-activity-invite .logo{width:50%;margin:.4rem}.page-activity-invite .container{position:absolute;width:100%;bottom:.8rem;padding:.26667rem}.page-activity-invite .container .title{margin:auto;margin-top:-1.6rem;width:calc(100% - .8rem)}.page-activity-invite .container .title img{width:100%}.page-activity-invite .container .main-form{background:url(/static/assets/bg.c7f48ab0.png) no-repeat;background-size:100% 100%;position:relative;padding:1.33333rem 0 .6rem}.page-activity-invite .container .main-form .sms-code{width:2rem;text-align:center;font-size:.4rem;font-weight:500;color:#ff6d23;padding:0}.page-activity-invite .container .main-form .submit{height:1.33333rem;margin-top:.53333rem;margin-bottom:.46667rem;background:url(/static/assets/button.4c281a6e.png) no-repeat;background-size:contain;background-position:center;border:none}.page-activity-invite .container .main-form .agree{padding:0 .33333rem;font-size:.37333rem;font-weight:400;color:#666;display:flex;align-items:flex-start}.page-activity-invite .container .main-form .van-cell .van-field__value{align-items:flex-start}.page-activity-invite .container .main-form .van-checkbox{width:1.33333rem}.page-activity-invite .container .main-form .pdf-viewer .title{color:#ff6d23}.page-activity-invite .container .main-form .van-checkbox__icon--checked .van-icon{background-color:#ff6d23;border-color:#ff6d23}\n",document.head.appendChild(e),System.register(["./vendor-legacy-b51aec28.js","./trial-legacy-9fc97ef7.js","./product-legacy-7e8ae96e.js","./infoCollection-legacy-f3c4910f.js","./index-legacy-96c45d53.js","./phoneVerify-legacy-a8f4f5a7.js"],(function(e){"use strict";var t,a,n,o,i,l,r,c,s,u,d,m,f,v,p,g,y,b,h,I,k,V,C,N,w,L,_,O,x,j;return{setters:[function(e){t=e.g,a=e.E,n=e.M,o=e._,i=e.r,l=e.j,r=e.k,c=e.m,s=e.p,u=e.A,d=e.z,m=e.J,f=e.L,v=e.n,p=e.G,g=e.F,y=e.C,b=e.T,h=e.O,I=e.a9,k=e.h},function(e){V=e.g,C=e.m,N=e.i},function(e){w=e.p},function(e){L=e.a},function(e){_=e.a3,O=e.Q},function(e){x=e.s,j=e.c}],execute:function(){const U={class:"agree"},E=y(" 我已阅读并同意 "),P=t({props:{title:{type:String,default:""},desc:{type:String,default:""},attachmentList:{type:Array,default:()=>[]}},emits:["on-verify"],setup(e,{emit:t}){const y=a({}),h=a(0),I=a("获取验证码"),k=/\d{9}/,V=/^\d{6}$/,C=n({mobile:"",smsCode:"",agree:""}),N=async()=>{h.value>0||null==y||y.value.validate("mobile").then((async()=>{await x(C.mobile),(()=>{if(h.value>0)return;h.value=30;const e=()=>{I.value=`${h.value}s`,h.value-=1};e();const t=setInterval((()=>{0===h.value?(I.value="获取验证码",h.value=0,clearInterval(t)):e()}),1e3)})()}))},w=async()=>{const e=await j(C.mobile,C.smsCode),{data:a}=e;a&&t("on-verify",C)},L=async()=>{null==y||y.value.validate().then((async()=>{C.agree||b("请勾选协议"),w()}))};return o((()=>C),(()=>{k.test(C.mobile)&&V.test(C.smsCode)&&w()}),{deep:!0,immediate:!0}),(t,a)=>{const n=i("van-field"),o=i("van-cell-group"),b=i("van-checkbox"),w=i("ProPDFviewer"),_=i("VanForm");return l(),r(_,{ref_key:"formRef",ref:y},{default:c((()=>[s(o,null,{default:c((()=>[s(n,{modelValue:u(C).mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>u(C).mobile=e),name:"mobile",label:"手机号",clearable:"",placeholder:"请输入手机号",rules:[{pattern:k,message:"请输入正确的手机号"}]},null,8,["modelValue","rules"]),s(n,{modelValue:u(C).smsCode,"onUpdate:modelValue":a[1]||(a[1]=e=>u(C).smsCode=e),name:"smsCode",label:"验证码",clearable:"",placeholder:"请输入验证码",rules:[{pattern:V,message:"请输入正确的验证码"}]},{button:c((()=>[d("div",{class:f(["sms-code",{"count-down":h.value>0}]),onClick:N},m(I.value),3)])),_:1},8,["modelValue","rules"])])),_:1}),d("div",{class:"submit",onClick:L}),d("div",U,[s(b,{modelValue:u(C).agree,"onUpdate:modelValue":a[2]||(a[2]=e=>u(C).agree=e),name:"agree",shape:"square"},null,8,["modelValue"]),d("div",null,[E,(l(!0),v(g,null,p(e.attachmentList||[],((e,t)=>(l(),r(w,{key:t,class:"file-name",title:`《${e.attachmentName}》`,content:e.attachmentUri,type:"pdf"},null,8,["title","content"])))),128))])])])),_:1},512)}}}),T={class:"agree"},z=y(" 我已阅读并同意 "),F=t({props:{userInfo:{type:Object,default:()=>{}},attachmentList:{type:Array,default:()=>[]}},emits:["on-submit"],setup(e,{emit:t}){const o=e,m=a({}),f=/\W/,y=n({name:o.userInfo.name,certNo:o.userInfo.certNo,agree:""}),h=e=>!!_(y.certNo)||"请填写正确的证件号",I=()=>{null==m||m.value.validate().then((async e=>{y.agree?t("on-submit",y):b("请勾选协议")}))};return(t,a)=>{const n=i("van-field"),o=i("van-cell-group"),b=i("van-checkbox"),k=i("ProPDFviewer"),V=i("VanForm");return l(),r(V,{ref_key:"formRef",ref:m},{default:c((()=>[s(o,null,{default:c((()=>[s(n,{modelValue:u(y).name,"onUpdate:modelValue":a[0]||(a[0]=e=>u(y).name=e),name:"name",label:"姓名",clearable:"",placeholder:"请输入姓名",rules:[{pattern:f,message:"请输入正确的姓名"}]},null,8,["modelValue","rules"]),s(n,{modelValue:u(y).certNo,"onUpdate:modelValue":a[1]||(a[1]=e=>u(y).certNo=e),name:"certNo",label:"身份证",clearable:"",placeholder:"请输入身份证号",rules:[{validator:h}]},null,8,["modelValue","rules"])])),_:1}),d("div",{class:"submit",onClick:I}),d("div",T,[s(b,{modelValue:u(y).agree,"onUpdate:modelValue":a[2]||(a[2]=e=>u(y).agree=e),name:"agree",shape:"square"},null,8,["modelValue"]),d("div",null,[z,(l(!0),v(g,null,p(e.attachmentList||[],((e,t)=>(l(),r(k,{key:t,class:"file-name",title:`《${e.attachmentName}》`,content:e.attachmentUri,type:"pdf"},null,8,["title","content"])))),128))])])])),_:1},512)}}});const H={class:"page-activity-invite"},R=["src"],S={class:"container"},q={class:"main-form"},A={class:"title"},D=["src"];e("default",t({setup(e){const t=h(),o=I(),{productCode:i="7X9",tenantId:c,source:s=1}=t.query,m=a(!0),f=n({title:"/static/assets/title-step1.97cb9efa.png",attachmentList:[{}],userInfo:{mobile:"",certNo:"",name:""}}),p=async e=>{f.userInfo.mobile=e.mobile;const t=await V({holderPhone:f.userInfo.mobile,productCode:i,tenantId:c}),{code:a,data:n}=t;var o,l;"10000"===a&&(f.userInfo.name=null===(o=n.tenantOrderHolder)||void 0===o?void 0:o.name,f.userInfo.certNo=null===(l=n.tenantOrderHolder)||void 0===l?void 0:l.certNo);f.title="/static/assets/title-step2.258af5e9.png",m.value=!1},g=async e=>{f.userInfo.certNo=e.certNo,f.userInfo.name=e.name;const t=await C({tenantId:c,venderCode:"zhongan",tenantOrderHolder:{certNo:f.userInfo.certNo,certType:O.CERT,mobile:f.userInfo.mobile,name:f.userInfo.name},tenantOrderInsuredList:[{certNo:f.userInfo.certNo,certType:O.CERT,name:f.userInfo.name,relationToHolder:L.SELF,tenantOrderProductList:[{productCode:i}]}]}),{code:a}=t;"10000"===a&&o.push({path:"/activity/productDetail",query:{tenantId:c,productCode:"BWYL2021",name:f.userInfo.name,certNo:f.userInfo.certNo,mobile:f.userInfo.mobile}})};return k((()=>{(async()=>{const e=w({productCode:i,withInsureInfo:!0}),t=N({productCode:i});Promise.all([e,t]).then((([e,t])=>{if(e.code,"10000"===t.code){let e=[];t.data.productRiskVoList.forEach((t=>{t.riskDetailVOList.forEach((t=>{e=e.concat(t.riskAttachmentVOList)}))})),f.attachmentList=e}}))})()})),(e,t)=>(l(),v("div",H,[d("img",{class:"logo",src:u("/static/assets/logo.020372b9.png")},null,8,R),d("div",S,[d("div",q,[d("div",A,[d("img",{src:u(f).title},null,8,D)]),m.value?(l(),r(P,{key:0,"attachment-list":u(f).attachmentList,onOnVerify:p},null,8,["attachment-list"])):(l(),r(F,{key:1,"user-info":u(f).userInfo,"attachment-list":u(f).attachmentList,onOnSubmit:g},null,8,["user-info","attachment-list"]))])])]))}}))}}}))}();
