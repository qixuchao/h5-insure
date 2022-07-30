import{g as U,v as A,L as X,r as _,h as m,m as k,y as t,n as u,z as e,I as $,F as x,E as R,V as ge,C as V,M as ee,J as F,s as O,k as g,a6 as D,A as Ce,a1 as Z,a2 as G,B as E,X as j,j as M,ag as ye,a5 as K,ae as Ie,Q as ke,x as Le,W as Te}from"./vendor-afffae61.js";import{_ as q,u as be,v as Pe,w as Se,g as Ne}from"./index-07b971fd.js";import{q as De}from"./index-f8850897.js";import{u as $e,P as we}from"./index-0eae9689.js";import{a as Be,P as Ve}from"./da-818f91b0.js";import{q as xe}from"./proposalList-1e1b6595.js";import"./trial-5428c288.js";import"./useStorage-3680fb6c.js";const Ee={class:"com-product-item"},Fe={class:"content-wrap"},Oe={class:"product-image"},Me={class:"insure-name"},Ae={class:"product-info"},Ue={class:"title"},Re={class:"description"},qe={class:"tags"},ze=U({props:{productInfo:{default:()=>({})}},setup(l){const r=l,{productInfo:i}=A(r),h=X({checked:!1});return A(h),(v,y)=>{const L=_("van-image");return m(),k("div",Ee,[t("div",Fe,[t("div",Oe,[u(L,{src:e(i).fileUrl},null,8,["src"]),t("p",Me,$(e(i).insurerName),1)]),t("div",Ae,[t("p",Ue,$(e(i).title),1),t("p",Re,$(e(i).text),1),t("p",qe,[(m(!0),k(x,null,R(e(i).tags,(p,d)=>(m(),k("span",{key:d,class:"tag"},$(p),1))),128))])]),ge(v.$slots,"checkedProduct",{},void 0,!0)])])}}});var We=q(ze,[["__scopeId","data-v-ecb0026c"]]);const H=l=>(Z("data-v-06a1a284"),l=l(),G(),l),je={class:"com-tab-filter"},Xe={class:"article-mid"},Ze={class:"article-tag"},Ge=["onClick"],He={class:"trianele-out"},Je=H(()=>t("span",null,null,-1)),Qe=H(()=>t("div",{class:"text"},"\u7B5B\u9009",-1)),Ye={class:"popup-inner"},Ke=H(()=>t("div",{class:"popup-title"},"\u4FDD\u9669\u516C\u53F8",-1)),et={class:"footer-button"},tt=E("\u91CD\u7F6E"),st=E("\u786E\u5B9A"),ot=U({props:{tagList:{type:Array,default:()=>[]},filter:{type:Boolean,default:!1},popupStyle:{type:Object,default:()=>{}}},emits:["onSelectInsure"],setup(l,{emit:r}){const{isPopShow:i,openPop:h,closePop:v}=be(!1),y=X({insureList:[],checkedInsure:[]}),{insureList:L,checkedInsure:p}=A(y),d=V(""),n=(b,f)=>{d.value=f,r("onSelectInsure",{selectInsureCode:p.value,selectCategory:d.value})},I=()=>{p.value=[]},T=()=>{r("onSelectInsure",{selectInsureCode:p.value,selectCategory:d.value}),v()};return ee(()=>{De().then(b=>{const{code:f,data:P}=b;f==="10000"&&(L.value=P==null?void 0:P.map(S=>({label:S.abbreviation,value:S.insurerCode})))})}),(b,f)=>{const P=_("van-button"),S=_("van-popup");return m(),k("div",je,[t("div",Xe,[t("div",Ze,[(m(!0),k(x,null,R(e(Pe),(o,C)=>(m(),k("div",{key:C,class:F(["tag-item",{checked:d.value==C}]),onClick:w=>n(o==null?void 0:o.value,C)},[t("div",{class:F(["tag-out",{checked:d.value==C}])},[t("div",{class:F(["tag-item-text",{checked:d.value==C}])},$(o.label),3)],2),t("div",He,[t("div",{class:F({triangle:d.value==C})},null,2)])],10,Ge))),128))]),l.filter?(m(),k("div",{key:0,class:"filter",onClick:f[0]||(f[0]=(...o)=>e(h)&&e(h)(...o))},[Je,Qe,u(Se,{name:"filter"})])):O("",!0),u(S,{show:e(i),position:"right","close-on-click-overlay":"",style:Ce(l.popupStyle||{width:"322px",height:"100%",padding:"0 15px"}),onClickOverlay:e(v)},{default:g(()=>[t("div",Ye,[Ke,u(Ne,{modelValue:e(p),"onUpdate:modelValue":f[1]||(f[1]=o=>D(p)?p.value=o:null),options:e(L)},null,8,["modelValue","options"])]),t("div",et,[u(P,{plain:"",type:"primary",onClick:I},{default:g(()=>[tt]),_:1}),u(P,{type:"primary",onClick:T},{default:g(()=>[st]),_:1})])]),_:1},8,["show","style","onClickOverlay"])])])}}});var lt=q(ot,[["__scopeId","data-v-06a1a284"]]);const at={data:[{tenantId:9991000007,userId:null,userName:null,channelId:null,userType:null,systemChannel:null,id:1013001,code:"code1013001",labelCategoryName:"\u91CD\u75BE",authStatus:"1",authStatusName:null,sort:1,infoLabelDTOList:null,gmtCreated:"2022-06-29T23:49:26.000+08:00",gmtModified:"2022-06-30T17:34:38.000+08:00",modifier:"\u5434\u8D85"},{tenantId:9991000007,userId:null,userName:null,channelId:null,userType:null,systemChannel:null,id:1013004,code:"code1013004",labelCategoryName:"\u610F\u5916",authStatus:"1",authStatusName:null,sort:1,infoLabelDTOList:null,gmtCreated:"2022-06-29T23:49:50.000+08:00",gmtModified:"2022-06-29T23:49:50.000+08:00",modifier:"52041001002174"},{tenantId:9991000007,userId:null,userName:null,channelId:null,userType:null,systemChannel:null,id:1013007,code:"code1013007",labelCategoryName:"\u533B\u7597",authStatus:"1",authStatusName:null,sort:1,infoLabelDTOList:null,gmtCreated:"2022-06-29T23:53:28.000+08:00",gmtModified:"2022-06-29T23:53:28.000+08:00",modifier:"52041001002174"},{tenantId:9991000007,userId:null,userName:null,channelId:null,userType:null,systemChannel:null,id:1013010,code:"code1013010",labelCategoryName:"edward08",authStatus:"1",authStatusName:null,sort:1,infoLabelDTOList:null,gmtCreated:"2022-06-29T23:55:28.000+08:00",gmtModified:"2022-06-30T17:05:19.000+08:00",modifier:"\u5434\u8D85"},{tenantId:9991000007,userId:null,userName:null,channelId:null,userType:null,systemChannel:null,id:1018001,code:"code1018001",labelCategoryName:"\u5065\u5EB7",authStatus:"1",authStatusName:null,sort:1,infoLabelDTOList:null,gmtCreated:"2022-07-08T17:14:44.000+08:00",gmtModified:"2022-07-08T17:16:59.000+08:00",modifier:"\u5510\u6B22\u4E13\u7528\u8D26\u53F7"},{tenantId:9991000007,userId:null,userName:null,channelId:null,userType:null,systemChannel:null,id:1019001,code:"code1019001",labelCategoryName:"\u6807\u7B7E\u5206\u7C7B22",authStatus:"1",authStatusName:null,sort:1,infoLabelDTOList:null,gmtCreated:"2022-07-13T17:49:54.000+08:00",gmtModified:"2022-07-13T17:50:01.000+08:00",modifier:"\u5C0F\u90ED"},{tenantId:9991000007,userId:null,userName:null,channelId:null,userType:null,systemChannel:null,id:1012001,code:"code1012001",labelCategoryName:"\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D",authStatus:"1",authStatusName:null,sort:3,infoLabelDTOList:null,gmtCreated:"2022-06-29T20:55:07.000+08:00",gmtModified:"2022-07-02T20:05:45.000+08:00",modifier:"\u5C0F\u90ED"},{tenantId:9991000007,userId:null,userName:null,channelId:null,userType:null,systemChannel:null,id:1005001,code:"code1005001",labelCategoryName:"rrr",authStatus:"1",authStatusName:null,sort:4,infoLabelDTOList:null,gmtCreated:"2022-06-23T17:06:25.000+08:00",gmtModified:"2022-06-24T09:40:48.000+08:00",modifier:"52041001002366"},{tenantId:9991000007,userId:null,userName:null,channelId:null,userType:null,systemChannel:null,id:1009001,code:"code1009001",labelCategoryName:"\u6807\u7B7E\u5206\u7C7B01",authStatus:"1",authStatusName:null,sort:10,infoLabelDTOList:null,gmtCreated:"2022-06-28T10:10:59.000+08:00",gmtModified:"2022-06-28T10:12:35.000+08:00",modifier:"107"},{tenantId:9991000007,userId:null,userName:null,channelId:null,userType:null,systemChannel:null,id:1017002,code:"code1017002",labelCategoryName:"\u6D4B\u8BD52222",authStatus:"1",authStatusName:null,sort:22,infoLabelDTOList:null,gmtCreated:"2022-07-02T19:59:03.000+08:00",gmtModified:"2022-07-08T14:48:33.000+08:00",modifier:"\u6C88\u666F\u6587"},{tenantId:9991000007,userId:null,userName:null,channelId:null,userType:null,systemChannel:null,id:1017004,code:"code1017004",labelCategoryName:"\u6D4B\u8BD522",authStatus:"1",authStatusName:null,sort:22,infoLabelDTOList:null,gmtCreated:"2022-07-02T20:00:27.000+08:00",gmtModified:"2022-07-08T14:48:26.000+08:00",modifier:"\u6C88\u666F\u6587"},{tenantId:9991000007,userId:null,userName:null,channelId:null,userType:null,systemChannel:null,id:1017003,code:"code1017003",labelCategoryName:"\u6D4B\u8BD53333",authStatus:"1",authStatusName:null,sort:33,infoLabelDTOList:null,gmtCreated:"2022-07-02T19:59:14.000+08:00",gmtModified:"2022-07-08T14:48:30.000+08:00",modifier:"\u6C88\u666F\u6587"}]};const ut=l=>(Z("data-v-1c708713"),l=l(),G(),l),nt={class:"com-trial-product-wrapper"},rt={class:"container"},dt=ut(()=>t("span",{class:"title"}," \u5DF2\u9009\u4EA7\u54C1 ",-1)),ct={class:"popup-body"},it={class:"cell-title"},pt={class:"title"},mt=U({props:{isShow:{type:Boolean,default:!1},proposalList:{default:()=>[]},modalValue:{default:()=>[]}},emits:["close","update:modalValue","checked"],setup(l,{emit:r}){const i=l,h=V([]),v=V([]),y=V({isShow:i.isShow}),L=()=>{r("close")},p=()=>{v.value=[],r("checked",[])},d=n=>{var I,T,b;(b=(T=(I=h==null?void 0:h.value)==null?void 0:I[n])==null?void 0:T.toggle)==null||b.call(T),r("checked",v.value)};return j(()=>i.isShow,n=>{y.value.isShow=n}),j(()=>i.modalValue,(n=[])=>{v.value=n},{deep:!0,immediate:!0}),(n,I)=>{const T=_("van-checkbox"),b=_("VanCell"),f=_("van-cell-group"),P=_("van-checkbox-group"),S=_("VanPopup");return m(),k("div",nt,[u(S,{show:y.value.isShow,"onUpdate:show":I[1]||(I[1]=o=>y.value.isShow=o),position:"bottom",onClose:L},{default:g(()=>[t("div",rt,[t("div",{class:"popup-header"},[t("span",{class:"clear-all",onClick:p}," \u6E05\u7A7A\u9009\u9879 "),dt,t("span",{onClick:L},"X")]),t("div",ct,[u(P,{modelValue:v.value,"onUpdate:modelValue":I[0]||(I[0]=o=>v.value=o)},{default:g(()=>[u(f,{inset:""},{default:g(()=>[(m(!0),k(x,null,R(l.proposalList,o=>(m(),M(b,{key:o.proposalInsuredList[0].proposalInsuredProductList[0].productId,title:o.proposalInsuredList[0].proposalInsuredProductList[0].productName,onClick:C=>d(o.proposalInsuredList[0].proposalInsuredProductList[0].productId)},{"right-icon":g(()=>[u(T,{ref_for:!0,ref:C=>h.value[o.proposalInsuredList[0].proposalInsuredProductList[0].productId]=C,shape:"square",name:o.proposalInsuredList[0].proposalInsuredProductList[0].productId,onClick:ye(C=>d(o.proposalInsuredList[0].proposalInsuredProductList[0].productId),["stop"])},null,8,["name","onClick"])]),title:g(()=>[t("div",it,[t("div",pt,$(o.proposalInsuredList[0].proposalInsuredProductList[0].productName),1)])]),_:2},1032,["title","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])])])]),_:1},8,["show"])])}}});var _t=q(mt,[["__scopeId","data-v-1c708713"]]);const ht=l=>(Z("data-v-1709d574"),l=l(),G(),l),vt={class:"search-wrap"},ft={class:"page-proposal-list"},gt={class:"check-button"},Ct={key:0,class:"van-sticky"},yt={class:"add-plan"},It=E(" \u5DF2\u9009"),kt={class:"has-select-product"},Lt=E("\u6B3E\u4EA7\u54C1 "),Tt=ht(()=>t("span",{class:"icon"},null,-1)),bt=E("\u6DFB\u52A0\u8BA1\u5212\u4E66"),Pt=U({props:{isCreateProposal:{type:Boolean,default:!0}},setup(l){const r=X({searchValue:"",tagLists:[],isOpen:!0,loading:!1,finished:!1,refreshing:!1,productList:[],selectProduct:[],insurerCodeList:[],showCategory:"",productTotal:0,checked:"",productId:void 0,proposalList:[],showFooter:!0}),{searchValue:i,tagLists:h,isOpen:v,loading:y,finished:L,refreshing:p,productList:d,selectProduct:n,insurerCodeList:I,showCategory:T,productTotal:b,showFooter:f}=A(r),[P,S]=K(),[o,C]=K(),w=$e(),z=Ie(),te=ke(),{isCreateProposal:B}=te.query,se=V(B?"repeatAdd":"add"),J=()=>{xe({title:i.value,insurerCodeList:I.value,showCategory:T.value,excludeProductIdList:w.$state.excludeProduct||[],pageNum:1,pageSize:999}).then(c=>{const{code:s,data:N,total:W}=c;s==="10000"&&(console.log(N),d.value=N==null?void 0:N.datas,b.value=W)})},oe=()=>{},le=c=>{const{selectInsureCode:s,selectCategory:N}=c;I.value=s,T.value=N,J()},Q=()=>{p.value&&(d.value=[],p.value=!1),J(),y.value=!1,b.value===d.value.length&&(L.value=!0)},ae=()=>{z.push({path:"historyProposalList"})},ue=Le(()=>{var N;const{birthday:c,gender:s}=((N=w.$state.proposalInfo.proposalInsuredList)==null?void 0:N[0])||{};return{birthday:c,gender:s}}),ne=c=>{f.value=!1,r.productId=c.productId,S(!0)},re=c=>{r.selectProduct=c},de=()=>{const c=r.proposalList.filter(s=>r.selectProduct.includes(s.proposalInsuredList[0].proposalInsuredProductList[0].productId));w.setTrialData(c),z.push({path:"/proposal/createProposal"})},ce=()=>{S(!1)},ie=c=>{if(B){r.proposalList.push(c),f.value=!0,S(!1);return}w.setTrialData([c]),S(!1),z.push({path:"/proposal/createProposal"})},pe=()=>{L.value=!0,y.value=!0,Q()};return j(()=>n,c=>{console.log("newVal",c)},{deep:!0,immediate:!0}),ee(()=>{h.value=[{labelCategoryName:"\u5168\u90E8",id:""},...at.data]}),(c,s)=>{const N=_("van-search"),W=_("van-checkbox"),me=_("van-checkbox-group"),_e=_("van-list"),he=_("van-pull-refresh"),ve=_("van-button"),fe=_("ZaPageWrap");return m(),k(x,null,[u(fe,{class:"page-proposal"},{default:g(()=>[t("div",vt,[u(N,{modelValue:e(i),"onUpdate:modelValue":s[0]||(s[0]=a=>D(i)?i.value=a:null),placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD",shape:"round",class:"search",onClickInput:oe},null,8,["modelValue"]),u(lt,{tagList:e(h),"onUpdate:tagList":s[1]||(s[1]=a=>D(h)?h.value=a:null),filter:e(v),"onUpdate:filter":s[2]||(s[2]=a=>D(v)?v.value=a:null),"filter-class":"filter-area",onOnSelectInsure:le},null,8,["tagList","filter"])]),t("div",ft,[u(he,{modelValue:e(p),"onUpdate:modelValue":s[5]||(s[5]=a=>D(p)?p.value=a:null),onRefresh:pe},{default:g(()=>[u(_e,{loading:e(y),"onUpdate:loading":s[4]||(s[4]=a=>D(y)?y.value=a:null),finished:e(L),"finished-text":"\u5DF2\u7ECF\u5230\u5E95\u4E86\u54E6",onLoad:Q},{default:g(()=>[(m(!0),k(x,null,R(e(d),a=>(m(),M(We,{key:a.id,"product-info":a==null?void 0:a.showConfig,onClick:Y=>ne(a)},Te({_:2},[e(B)?{name:"checkedProduct",fn:g(()=>[t("div",gt,[u(me,{modelValue:e(n),"onUpdate:modelValue":s[3]||(s[3]=Y=>D(n)?n.value=Y:null)},{default:g(()=>[u(W,{name:a.productId,shape:"square"},null,8,["name"])]),_:2},1032,["modelValue"])])])}:void 0]),1032,["product-info","onClick"]))),128))]),_:1},8,["loading","finished"])]),_:1},8,["modelValue"])]),e(B)&&e(f)?(m(),k("div",Ct,[t("div",yt,[t("p",{class:"has-select",onClick:s[6]||(s[6]=a=>e(C)(!0))},[It,t("span",kt,$(e(n).length),1),Lt,Tt]),u(ve,{type:"primary",disabled:!e(n).length,onClick:de},{default:g(()=>[bt]),_:1},8,["disabled"])])])):O("",!0),u(_t,{modelValue:e(n),"onUpdate:modelValue":s[7]||(s[7]=a=>D(n)?n.value=a:null),"proposal-list":e(r).proposalList,"is-show":e(o),onClose:s[8]||(s[8]=a=>e(C)(!1)),onChecked:re},null,8,["modelValue","proposal-list","is-show"]),e(P)?(m(),M(we,{key:1,"is-show":e(P),type:se.value,insured:e(ue),"product-id":e(r).productId,onClose:ce,onFinished:ie},null,8,["is-show","type","insured","product-id"])):O("",!0)]),_:1}),e(B)?O("",!0):(m(),M(Ve,{key:0,"button-image":e(Be),onClick:ae},null,8,["button-image"]))],64)}}});var Et=q(Pt,[["__scopeId","data-v-1709d574"]]);export{Et as default};
