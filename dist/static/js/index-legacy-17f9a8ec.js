!function(){var e=document.createElement("style");e.innerHTML=".banner[data-v-0852e55a]{width:100%;min-height:2.66667rem;display:block;background-color:#fff}.banner[data-v-0852e55a] .van-icon-photo:before{font-size:2.13333rem}.pre-notice-wrap .pre-body[data-v-79a863b0]{padding:.66667rem .42667rem 0;height:100%}.pre-notice-wrap .pre-body .header[data-v-79a863b0]{line-height:1;border:none}.pre-notice-wrap .pre-body .header img[data-v-79a863b0]{height:.58667rem}.pre-notice-wrap .pre-body .header .company-name[data-v-79a863b0]{margin-top:.26667rem;font-size:.32rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:500;color:#333;line-height:.44rem}.pre-notice-wrap .pre-body .content[data-v-79a863b0]{margin-top:.42667rem;padding:.42667rem;background:#fcf4f0;border-radius:.26667rem;font-size:.37333rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333;line-height:.56rem;border:1px solid #fff1de;border-top-color:#fee6dd}.pre-notice-wrap .pre-body .content span[data-v-79a863b0]{color:#006afc}.pre-notice-wrap .pre-body .footer[data-v-79a863b0]{margin-top:.66667rem}.com-attachment-list[data-v-4c895668]{width:100%;text-align:left;padding:0 .13333rem .33333rem}.com-attachment-list.has-bg[data-v-4c895668]{background:#fff8f3;padding:.21333rem .52rem .33333rem}.com-attachment-list span[data-v-4c895668]{font-size:.32rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#666;line-height:.48rem}.com-attachment-list .attachment-item[data-v-4c895668]{color:#006afc}.file-preview-popup-wrap .custom-provider{height:100%}.file-preview-popup-wrap .custom-provider .attachment-list{margin:.13333rem .42667rem .77333rem}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item{border-bottom:1px solid #eeeeee;line-height:.6rem;padding:.42667rem 0px;display:flex;justify-content:space-between;align-items:center}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-name{font-size:.42667rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-icon{min-width:1.14667rem;text-align:right}.file-preview-popup-wrap .custom-provider .attachment-list .attachment-list-item .attachment-list-item-icon .svg-icon{display:inline-block;width:.42667rem;height:.42667rem;font-size:.42667rem}.file-preview-popup-wrap .tab{height:1.41333rem;width:100%}.file-preview-popup-wrap .tab .van-tab{padding:0 var(--zaui-card-border, .4rem)}.file-preview-popup-wrap .tab .van-tabs__line{background:var(--van-primary-color)}.file-preview-popup-wrap .list{height:calc(100% - 2.82667rem);overflow-y:scroll}.file-preview-popup-wrap .footer{display:flex;align-items:center;justify-content:center;padding:0 var(--zaui-card-border, .4rem);position:absolute;width:100%;bottom:0;background-color:#fff;z-index:1;padding:.26667rem}.file-preview-popup-wrap .footer .pro-shadow-button{width:100%}.file-preview-popup-wrap .footer .van-button{font-size:.45333rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff;line-height:.64rem}\n",document.head.appendChild(e),System.register(["./index-legacy-aa063c2c.js","./vendor-legacy-7fe5c3e9.js","./product-legacy-32cea1a4.js","./index-legacy-b37c97bf.js","./theme-legacy-41f77bf2.js","./utils-legacy-920ab534.js"],(function(e){"use strict";var t,a,i,n,o,r,l,s,c,p,d,u,m,v,f,h,g,w,b,y,C,k,x,P,S,F;return{setters:[function(e){t=e._},function(e){a=e.i,i=e.l,n=e.m,o=e.n,r=e.P,l=e.r,s=e.N,c=e.k,p=e.s,d=e.t,u=e.p,m=e.B,v=e.C,f=e.L,h=e.F,g=e.G,w=e.H,b=e.M,y=e.A,C=e.$,k=e.x},function(e){x=e.q},function(e){P=e.P},function(e){S=e.u},function(e){F=e.o}],execute:function(){const _=a({props:{isCheck:{type:Boolean,default:!1},url:{type:String,default:""}},setup(e){const t=e;return(e,a)=>{const r=i("van-image");return n(),o(r,{width:"100%",class:"banner","lazy-load":"",src:t.url},null,8,["src"])}}});e("B",t(_,[["__scopeId","data-v-0852e55a"]]));const R={class:"pre-body"},N={class:"header"},T=["src"],z={class:"company-name"},j={class:"content"},B=g(" 为了更好地保护您的个人信息，请在使用前点击阅读、充分理解"),I=g("相关内容，我们对您使用过程中可能出现的个人信息收集、使用、共享和保护等情况进行了详细说明。 您已进入投保流程，请仔细阅读"),D=g("、投保须知、保险条款等信息，为维护您的合法权益，您的操作轨迹将被记录。 "),L={class:"footer"};e("P",t(a({props:{productDetail:{type:Object,default:()=>{}}},setup(e){const t=e,a=r(),{tenantId:o=""}=a.query,g=l(!1),w=l(!1),b=s({insureConfig:{insureName:"",tenantName:""}}),y=l({title:"",link:""}),C=(e,t)=>{w.value=!w.value,y.value.link=b.insureConfig?.[t].link,y.value.title=e.target.innerText};return c((()=>{(async()=>{const{code:e,data:a}=await x({insureCode:t.productDetail.insurerCode,tenantId:o});"10000"===e&&(b.insureConfig=a),g.value=!0})()})),(e,t)=>{const a=i("ProPopup"),o=i("ProFilePreview");return n(),p(h,null,[d(a,{class:"pre-notice-wrap","close-on-click-overlay":!1,show:g.value,closeable:!1,height:"395px"},{default:u((()=>[m("div",R,[m("div",N,[m("img",{src:v("/static/assets/logo.65e1895e.png")},null,8,T),m("div",z," 由"+f(v(b).insureConfig.tenantName)+"提供保险经纪服务，"+f(v(b).insureConfig.insureName)+"承保 ",1)]),m("div",j,[B,m("span",{onClick:t[0]||(t[0]=e=>C(e,"privacyAgreement"))},"《用户隐私协议》"),I,m("span",{onClick:t[1]||(t[1]=e=>C(e,"notification"))},"《客户告知书》"),D]),m("div",L,[d(P,{shadow:!1,text:"我知道了",onClick:t[2]||(t[2]=e=>g.value=!1)})])])])),_:1},8,["show"]),d(a,{show:w.value,"onUpdate:show":t[3]||(t[3]=e=>w.value=e),class:"pre-notice-wrap",title:y.value?.title,position:"bottom",style:{height:"600px"}},{default:u((()=>[d(o,{content:y.value?.link,type:"link"},null,8,["content"])])),_:1},8,["show","title"])],64)}}}),[["__scopeId","data-v-79a863b0"]]));const O=["onClick"],U=a({props:{preText:{type:String,default:""},hasBgColor:{type:Boolean,default:!0},attachementList:{type:Object,default:()=>{}}},emits:["preview-file"],setup:(e,{emit:t})=>(a,i)=>(n(),p("div",{class:b({"com-attachment-list":!0,"has-bg":e.hasBgColor})},[m("span",null,f(e.preText),1),(n(!0),p(h,null,w(e.attachementList||[],((e,a)=>(n(),p("span",{key:a,class:"attachment-item",onClick:e=>(e=>{t("preview-file",e)})(a)}," 《"+f(e.attachmentName)+"》 ",9,O)))),128))],2))});e("A",t(U,[["__scopeId","data-v-4c895668"]]));const $={key:0,class:"item"},A={key:1,class:"attachment-list"},H=["onClick"],M={class:"attachment-list-item-name"},q={class:"attachment-list-item-icon"},E={class:"footer"};e("_",a({props:{show:{type:Boolean,default:!1},contentList:{type:Array,default:()=>[]},activeIndex:{type:Number,default:0},text:{type:String,default:""},beforeReadOverText:{type:String,default:"同意，下一条"},forceReadCound:{type:Number,default:0},isOnlyView:{type:Boolean,default:!1}},emits:["update:show","submit","onCloseFilePreview"],setup(e,{emit:t}){const a=e,r=S(),s=l(a.show),c=l(a.contentList.map(((e,t)=>({...e,disabled:!0,readDisabled:!0})))),g=l(a.activeIndex),b=l(0),x=l(null),_=y((()=>c.value?.[g.value]?.attachmentList)),R=y((()=>c.value[g.value]?.readDisabled)),N=y((()=>!(g.value>=a.forceReadCound-1)&&(!(b.value>=a.forceReadCound)&&(b.value<a.forceReadCound&&g.value!==a.forceReadCound-1)))),T=()=>{g.value+=1},z=()=>{a.isOnlyView?t("update:show",!1):(t("update:show",!1),t("submit"))};C((()=>a),(()=>{s.value=a.show,g.value=a.activeIndex}),{deep:!0,immediate:!0});const j=e=>{e&&Math.floor(e.target.scrollHeight-e.target.scrollTop)===e.target.clientHeight&&c.value[g.value].readDisabled&&(c.value[g.value].disabled=!1,c.value[g.value].readDisabled=!1,c.value[g.value+1].disabled=!1,b.value+=1)};return C((()=>g.value),(()=>{a.show&&(b.value>=a.forceReadCound&&c.value.forEach((e=>{e.disabled=!1,e.readDisabled=!1})),x.value&&(x.value.scrollTop=0))}),{immediate:!0}),(l,b)=>{const y=i("ProTab"),C=i("ProFilePreview"),S=i("ProSvg"),B=i("van-config-provider"),I=i("ProPopup");return n(),o(I,{show:s.value,"onUpdate:show":b[1]||(b[1]=e=>s.value=e),class:"file-preview-popup-wrap",closeable:!1,onClose:b[2]||(b[2]=e=>t("onCloseFilePreview"))},{default:u((()=>[d(B,{"theme-vars":v(r),class:"custom-provider"},{default:u((()=>[s.value?(n(),o(y,{key:0,active:g.value,"onUpdate:active":b[0]||(b[0]=e=>g.value=e),list:c.value.map(((e,t)=>({title:e.attachmentName,disabled:t!=g.value&&(e.disabled||!1),slotName:`guarantee-${t}`}))),class:"tab"},null,8,["active","list"])):k("",!0),m("div",{ref_key:"previewRef",ref:x,class:"list",onScroll:j},[1===v(_).length?(n(),p("div",$,[(n(),o(C,{key:v(_)[0].attachmentName,content:v(_)[0].attachmentUri,type:v(_)[0].attachmentType,"forbid-click":!0},null,8,["content","type"]))])):(n(),p("div",A,[(n(!0),p(h,null,w(v(_),((e,t)=>(n(),p("div",{key:t,class:"attachment-list-item",onClick:t=>(e=>{const t={fileType:e.attachmentType,fileUri:e.attachmentUri};F(t)})(e)},[m("div",M,f(e.attachmentName),1),m("div",q,[d(S,{name:"arrow-right"})])],8,H)))),128))]))],544),m("div",E,[v(N)?(n(),o(P,{key:0,shadow:!1,"theme-vars":v(r),disabled:v(R),class:"right",text:`${e.beforeReadOverText}(${g.value+1}/${e.forceReadCound})`,onClick:T},null,8,["theme-vars","disabled","text"])):(n(),o(P,{key:1,disabled:v(R),shadow:!1,"theme-vars":v(r),text:a.text,onClick:z},null,8,["disabled","theme-vars","text"]))])])),_:1},8,["theme-vars"])])),_:1},8,["show"])}}}))}}}))}();
