import{d as e,a4 as a,a5 as t,i as o,j as n,r as l,aE as i,O as s,bV as r,o as u,c as d,b as c,u as f,m as p,w as v,f as m,p as I,a8 as h,aJ as y,aH as C,aK as O,a9 as g,bW as j,T as L,bu as b,aa as w,ab as x}from"./index-c83748d0.js";import{_ as P,a as _}from"./PolicyInfo-b1bf3ef4.js";import{s as N,g as E,m as D}from"./trial-2ff5963e.js";import{_ as V}from"./TrialButton-af3f2393.js";import{n as T}from"./nextStep-2ea63ac5.js";import{u as k}from"./useAttachment-c516fceb.js";import"./infoCollection-c294a8c5.js";import"./trial-be0fc808.js";import{u as F}from"./useOrder-285e61c7.js";import{a as U,B as q}from"./constants-4b08cf92.js";import{t as A}from"./utils-3526ae3f.js";import{T as R}from"./index-94b4aafc.js";import{p as S}from"./utils-429a38cc.js";import"./index-1f5ae3c3.js";import"./format-31cde443.js";import"./core-21030814.js";import"./utils-e8ab2390.js";import"./createProposal-3bf6e363.js";import"./cloneDeep-0cef9be8.js";import"./InsureInfos-02cd4ad4.js";import"./index-de590a0b.js";import"./index-f13f328f.js";import"./index-9afe5f05.js";import"./lodash-9b625f04.js";import"./questionnaire-42dcb602.js";import"./util-de0af04e.js";import"./product-7bbf9c44.js";import"./constants-7df59309.js";import"./config-98e8d477.js";const M={class:"long-info-collection"},B=e({name:"InfoCollection"}),J=e({...B,setup(e){const B=a((()=>t((()=>import("./index-48880737.js")),["static/js/index-48880737.js","static/css/index-fa4edf2a.css","static/js/index-c83748d0.js","static/css/index-1abd5786.css","static/js/theme-94cf7d00.js","static/js/index-1f5ae3c3.js","static/css/index-bbfdd7ec.css","static/js/utils-e8ab2390.js","static/js/infoCollection-c294a8c5.js","static/js/trial-be0fc808.js"]))),J=a((()=>t((()=>import("./index-d7c6a1f1.js")),["static/js/index-d7c6a1f1.js","static/css/index-bf024e9b.css","static/js/index-c83748d0.js","static/css/index-1abd5786.css"]))),H=o(),$=F(),{productCode:G="",tenantId:K,agentCode:W="",agencyCode:z,saleChannelId:Q,isShare:X,orderNo:Y,extraInfo:Z,insurerCode:ee,preview:ae}=H.query;let te={},oe=null;const ne=n(2);try{te=JSON.parse(decodeURIComponent(Z))}catch(Ae){}const le=l({isView:!1,personalInfo:{},payInfo:{schema:[],config:[],formData:[]},policyInfo:{schema:[],config:[],formData:{}},defaultValue:null,isAutoChange:!1,defaultPlanCode:"",userData:{}}),ie=`${window.origin}/baseInsurance/long/phoneVerify${window.location.search}`,se=n({imgUrl:"",desc:"",title:"",link:ie}),re=n();n();const ue=n(),de=n({}),ce=n({}),fe=n([]),pe=n(),ve=n({}),me=n(!1),Ie=n(!1),he=n(0),ye=n(!0),{fileList:Ce,mustReadFileCount:Oe,popupFileList:ge}=k(ve,pe),je=n(!1),Le=n(!1),be=()=>{Ie.value=!1,ye.value=!0,fe.value.length<1||(me.value=!0)},we=()=>{me.value=!1,Ie.value=!1,ye.value=!0};n({}),n(!1),n([{}]);const xe=n(""),Pe=n(0),_e=n(!1);n(),n(),n();const Ne=n(0);n({});const Ee=n(),De=()=>{xe.value="试算中...",Pe.value=0,_e.value=!0},Ve=(e,a)=>{xe.value="",Ne.value=e.premium,Pe.value=e,Ee.value=a,_e.value=!1},Te=async()=>{var e,a;if(ae)return void y(U.INFO_COLLECTION,H.query);if(!Pe.value)return;const t=[];ue.value&&t.push(null==(e=ue.value)?void 0:e.validate(!1)),re.value&&t.push(null==(a=re.value)?void 0:a.validate(!1)),Promise.all(t).then((e=>{Object.assign($.value,{extInfo:{...$.value.extInfo,buttonCode:q.INFO_COLLECTION,pageCode:U.INFO_COLLECTION}});const a=ue.value.dealMixData(),t=A({...a,productCode:G,productName:ce.value.productName},Pe.value,$.value);H.query.productClass=ne.value;const o=(()=>{var e,a;const{holder:t,insuredList:o}=le.userData,n=[],l=(e,a)=>{e.ocrData&&Object.keys(e.ocrData).find((a=>(e[a]||e.ocrData[a])&&e.ocrData[a]!==e[a]))&&n.push(`${a}信息影像识别与录入信息不一致，请确认`)};return l(t,"投保人"),l(null==o?void 0:o[0],"被保人"),((null==(e=null==o?void 0:o[0])?void 0:e.beneficiaryList)||[]).forEach(((e,a)=>{l(e,`收益人${a}`)})),l(null==o?void 0:o[0].guardian,"监护人"),l(null==o?void 0:o[0].guardian,"监护人"),((null==(a=$.value)?void 0:a.tenantOrderPayInfoList)||[]).forEach((e=>{l(null==o?void 0:o[0].guardian,"银行卡")})),n})();(null==o?void 0:o.length)?C.confirm({message:null==o?void 0:o[0]}).then((()=>{clearInterval(oe),T(t,((e,a)=>{a===O.JUMP_PAGE&&g(e.nextPageCode,H.query)}),H)})):(clearInterval(oe),T(t,((e,a)=>{a===O.JUMP_PAGE&&g(e.nextPageCode,H.query)}),H))}),(e=>{j(".long-info-collection",".van-field--error")})).catch((e=>{console.log("e",e)}))},ke=e=>{const a=$.value.tenantOrderPayInfoList[0];$.value.tenantOrderPayInfoList.splice(0,1,{...a,...e})},Fe=e=>{Object.assign(le.userData,e)},Ue=n({}),qe=n();return i((()=>{(async()=>{let e={};Y&&await E({orderNo:Y,tenantId:K}).then((({code:a,data:t})=>{var o;if("10000"===a){if(Pe.value=t.orderAmount,(null==(o=t.insuredList)?void 0:o.length)>0){const{planCode:e}=t.insuredList[0];le.defaultPlanCode=e}Object.assign($.value,t,{tenantOrderPayInfoList:t.tenantOrderPayInfoList||[],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0,withProductInfo:!0,withPayInfo:!0},productCode:G}),le.defaultValue=$.value,e=S(t.insuredList[0].productList),ne.value=t.insuredList[0].productList.length>1?1:2,Le.value=!0}})),await D(e).then((({data:e,code:a})=>{if("10000"===a){const{productDetailResList:a,productFactor:t}=e;qe.value=t;const o={};a.forEach((e=>{o[e.productCode]=e})),Ue.value=o;const{payInfo:n,other:l}=b(qe.value);le.payInfo={...le.payInfo,...n},le.policyInfo={...le.policyInfo,...l}}}))})()})),s((()=>{oe=setInterval((()=>{(()=>{Object.assign($.value,{extInfo:{...$.value.extInfo,buttonCode:q.INFO_COLLECTION,pageCode:U.INFO_COLLECTION}});const e=ue.value.dealMixData(),a=A(e,Pe.value,$.value);a.orderStatus="collectInfo",N(a)})()}),3e4)})),r((()=>{clearInterval(oe)})),(e,a)=>{var t,o,n,l,i,s;const r=w,y=x;return u(),d("div",M,[c(r),f(Le)||f(ae)?(u(),p(R,{key:0,ref_key:"personalInfoRef",ref:ue,"product-info":{productCode:f(G),productName:f(ce).productName,insurerCode:f(ee),tenantId:f(K),planList:[]},"tenant-product-detail":f(de),"hide-benefit":"","product-collection":f(Ue),"default-data":f($),"product-factor":f(qe),onTrialStart:De,onTrialEnd:Ve,"onUpdate:userData":Fe,onUpdateBank:ke},{middleInfo:v((()=>[f(le).payInfo.schema.length?(u(),p(f(P),{key:0,ref_key:"payInfoRef",ref:re,modelValue:f($).tenantOrderPayInfoList,"onUpdate:modelValue":a[0]||(a[0]=e=>f($).tenantOrderPayInfoList=e),schema:f(le).payInfo.schema,"is-view":f(le).isView,"user-data":f(le).userData},null,8,["modelValue","schema","is-view","user-data"])):m("",!0),f(le).policyInfo.schema.length?(u(),p(f(_),{key:1,modelValue:f($),"onUpdate:modelValue":a[1]||(a[1]=e=>I($)?$.value=e:null),schema:f(le).policyInfo.schema,"is-view":f(le).isView},null,8,["modelValue","schema","is-view"])):m("",!0)])),_:1},8,["product-info","tenant-product-detail","product-collection","default-data","product-factor"])):m("",!0),c(y,null,{default:v((()=>{var e;return[(null==(e=f(Ce))?void 0:e.length)?(u(),p(f(J),{key:0,modelValue:f(je),"onUpdate:modelValue":a[2]||(a[2]=e=>I(je)?je.value=e:null),"has-bg-color":!1,"attachment-list":f(Ce),"is-show-radio":"","pre-text":"投保人阅读并接受",onPreviewFile:a[3]||(a[3]=e=>(e=>{he.value=e,Ie.value=!0})(e))},null,8,["modelValue","attachment-list"])):m("",!0)]})),_:1}),f(Ie)?(u(),p(f(B),{key:1,show:f(Ie),"onUpdate:show":a[4]||(a[4]=e=>I(Ie)?Ie.value=e:null),"content-list":f(ye)?f(Ce):f(ge),"is-only-view":f(ye),"active-index":f(he),text:f(ye)?"关闭":"我已逐页阅读并确认告知内容","force-read-count":f(ye)?0:f(Oe),onSubmit:be,onOnCloseFilePreviewByMask:we},null,8,["show","content-list","is-only-view","active-index","text","force-read-count"])):m("",!0),c(V,{"is-share":f(se).isShare&&!f(X),premium:null==(t=f(Pe))?void 0:t.initialPremium,"share-info":f(se),"loading-text":f(xe),"payment-frequency":(null==(s=null==(i=null==(l=null==(n=null==(o=f(Ee))?void 0:o.insuredList)?void 0:n[0].productList)?void 0:l[0].riskList)?void 0:i[0])?void 0:s.paymentFrequency)+"","tenant-product-detail":f(de),"handle-share":e=>(e=>{ue.value.validateHolder(["mobile"]).then((()=>{Object.assign($.value,{extInfo:{...$.value.extInfo,buttonCode:q.INFO_COLLECTION,pageCode:U.INFO_COLLECTION}});const a=ue.value.getUserData(),t=A({...Ee.value,holder:null==a?void 0:a.holder},Pe.value||{},$.value);T(t,((a,t)=>{t===O.JUMP_PAGE&&(null==e||e())}),H)})).catch((()=>{L("请录入投保人手机号后进行分享")}))})(e),disabled:!f(Pe),onHandleClick:Te},{default:v((()=>[h("下一步 ")])),_:1},8,["is-share","premium","share-info","loading-text","payment-frequency","tenant-product-detail","handle-share","disabled"])])}}});export{J as default};
