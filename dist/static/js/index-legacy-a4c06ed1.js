!function(){var e=document.createElement("style");e.innerHTML=".com-select .com-select-container[data-v-9c6de82e]{padding:.4rem}.com-select .com-select-container .radio-item[data-v-9c6de82e]{margin:.26667rem 0}.com-select .com-select-container .radio-item .radio-item-wrapper[data-v-9c6de82e]{padding:0 .42667rem}.com-select .com-select-container .radio-item .radio-item-wrapper p[data-v-9c6de82e]{font-size:.4rem;font-family:PingFangSC-Semibold,PingFang SC,serif;color:#393d46;margin:.06667rem 0}.com-select .com-select-container .radio-item .radio-item-wrapper .name[data-v-9c6de82e]{font-weight:600;margin-right:.4rem}.com-select .com-select-container .radio-item .radio-item-wrapper .phone[data-v-9c6de82e]{font-weight:400}.page-info-wrapper{padding-bottom:2rem}.page-info-wrapper .com-card .com-card-wrap .body{padding:0}.page-info-wrapper .beneficiary-part .part-title{display:flex;align-items:center;justify-content:space-between;padding:0 var(--zaui-card-border, .4rem);background-color:#f2f5fc;height:1.2rem}.page-info-wrapper .beneficiary-part .part-title .title{font-size:.4rem;font-weight:600;color:#393d46}.page-info-wrapper .left{flex:0 0 50%}.page-info-wrapper .left .trial-result{font-size:.45333rem;color:#393d46}.page-info-wrapper .left .trial-result .result-num{margin-left:.17333rem;color:#ff5840;font-weight:700;margin-left:.21333rem}.page-info-wrapper .left .result-desc{font-size:.32rem;color:#666}.page-info-wrapper .operate-btn{width:50%}.page-info-wrapper .radio-item-wrapper{padding:0}.page-info-wrapper .radio-item-wrapper p{font-size:.4rem;color:#393d46;margin:.06667rem 0;word-break:break-all}.page-info-wrapper .radio-item-wrapper .name{font-weight:600;margin-right:.4rem}.page-info-wrapper .radio-item-wrapper .phone{font-weight:400}\n",document.head.appendChild(e),System.register(["./vendor-legacy-5d3b395b.js","./index-legacy-92e6914a.js","./useDicData-legacy-e739213c.js","./index-legacy-42821b5a.js"],(function(e){"use strict";var t,a,r,n,d,i,o,l,s,u,c,f,p,m,v,I,y,O,g,L,b,h,w,E,C,x,T,R,V,A,_,H,N,B,k,P;return{setters:[function(e){t=e.g,a=e.E,r=e._,n=e.r,d=e.j,i=e.k,o=e.m,l=e.z,s=e.p,u=e.n,c=e.G,f=e.J,p=e.F,m=e.C,v=e.ak,I=e.O,y=e.Q,O=e.M,g=e.y,L=e.o,b=e.A,h=e.t,w=e.T},function(e){E=e._,C=e.z,x=e.w,T=e.L,R=e.M,V=e.n,A=e.P,_=e.r},function(e){H=e.u},function(e){N=e._,B=e.R,k=e.B,P=e.a}],execute:function(){const j={class:"com-select-container"},S={class:"radio-item-wrapper"},U={class:"name"},D={class:"hone"},F={class:"address"},z={class:"footer-button"},q=m("取消"),M=m("确认"),Y=t({props:{dataSource:{type:Array,default:()=>[]},show:{type:Boolean,default:!1},modelValue:{type:[String,Number],default:null}},emits:["update","update:modelValue","submit","close"],setup(e,{emit:t}){const m=e,v=a(m.modelValue),I=a(m.show),y=()=>{t("submit",v.value),I.value=!1},O=()=>{t("close")};return r((()=>m.modelValue),(e=>{v.value=e})),r((()=>v.value),(e=>{t("update:modelValue",e)})),(t,a)=>{const r=n("van-radio"),m=n("van-radio-group"),g=n("VanButton");return d(),i(C,{show:I.value,"onUpdate:show":a[1]||(a[1]=e=>I.value=e),class:"com-select",title:"选择保单通讯信息",onClose:O},{default:o((()=>[l("div",j,[s(m,{modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=e=>v.value=e)},{default:o((()=>[(d(!0),u(p,null,c(e.dataSource,((e,t)=>(d(),i(r,{key:t,name:t+1,class:"radio-item"},{default:o((()=>[l("div",S,[l("p",null,[l("span",U,f(e.contactName),1),l("span",D,f(e.contactPhoneNo),1)]),l("p",F,f(e.contactAddress),1)])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])]),l("div",z,[s(g,{plain:"",type:"primary"},{default:o((()=>[q])),_:1}),s(g,{type:"primary",onClick:y},{default:o((()=>[M])),_:1})])])),_:1},8,["show"])}}});var G=E(Y,[["__scopeId","data-v-9c6de82e"]]);const $={key:0,class:"beneficiary-part"},J={class:"part-title"},Q={class:"title"},W=m("删除"),K=m("+添加受益人"),X=m("选择保单通讯信息"),Z={class:"radio-item-wrapper"},ee={class:"name"},te={class:"hone"},ae={class:"address"},re={class:"footer-button"},ne={class:"left"},de={class:"trial-result"},ie=m(" 首期"),oe={class:"result-num"},le=l("div",{class:"result-desc"},"实际保费以后续为准",-1),se={class:"operate-btn"},ue=m("下一步");e("default",t({setup(e){const t=v(),m=I(),{templateId:E=1,orderNo:C="2022072710380711215",tenantId:j="9991000007"}=m.query,[S,U]=y(),D="/infoPreview"===m.path?"infoPreview":"infoCollection",F=H("NATIONAL_REGION_CODE"),z=a({}),q=a({extInfo:{pageCode:D},tenantOrderHolder:{extInfo:{},holderType:1},tenantOrderInsuredList:[{relationToHolder:"0",extInfo:{},insuredBeneficiaryType:"1",tenantOrderBeneficiaryList:[{beneficiaryId:0,extInfo:{}}]}],operateOption:{withBeneficiaryInfo:!0,withHolderInfo:!0,withInsuredInfo:!0,withAttachmentInfo:!0}}),M=a(null),Y=a([]),ce=a([]),fe=a([]),pe=a([]),me=a([]),ve=O({beneficiaryId:0,addressList:[],nextPage:"",currentAddress:null,isLoading:!0}),Ie=g((()=>{var e,t;return ve.currentAddress?ve.addressList[ve.currentAddress-1]||{}:(null===(e=q.value.extInfo)||void 0===e||null===(t=e.contactInfo)||void 0===t?void 0:t[0])||{}})),ye=()=>{var e;const a={...q.value};a.extInfo={...a.extInfo,contactInfo:[Ie.value]},a.tenantOrderAttachmentList=[{category:T.OBVERSE_CERT,objectType:R.HOLDER,objectId:q.value.tenantOrderHolder.id,name:"投保人证件正面",uri:Y.value[0],id:fe.value[0]},{category:T.REVERSE_CERT,objectType:R.HOLDER,objectId:q.value.tenantOrderHolder.id,name:"投保人证件背面",uri:Y.value[1],id:fe.value[1]},{category:T.OBVERSE_CERT,objectType:R.INSURED,objectId:q.value.tenantOrderInsuredList[0].id,name:"被保人证件正面",uri:ce.value[0]||Y.value[0],id:pe.value[1]},{category:T.REVERSE_CERT,objectType:R.INSURED,objectId:q.value.tenantOrderInsuredList[0].id,name:"被保人证件背面",uri:ce.value[1]||Y.value[1],id:pe.value[1]}],null===(e=M.value)||void 0===e||e.validate().then((e=>{if(a.tenantOrderInsuredList[0].insuredBeneficiaryType===P.SPECIFY){const e={};if(a.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.forEach((t=>{e[t.benefitOrder]?e[t.benefitOrder].sum+=Number(t.benefitRate):e[t.benefitOrder]={sum:Number(t.benefitRate)}})),Object.values(e).some((e=>100!==e.sum)))return void w.fail("同一顺位的受益人比例之和必须为100")}V(a).then((({code:e,data:a})=>{"10000"===e&&"jumpToPage"===a.pageAction.pageAction&&t.push({path:A[a.pageAction.data.nextPageCode],query:m.query})}))}))},Oe=e=>{},ge=()=>{ve.beneficiaryId+=1,q.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.push({id:ve.beneficiaryId,extInfo:{}})};return L((()=>{_({orderNo:C,tenantId:j}).then((({code:e,data:t})=>{if("10000"===e){const e=t;e.extInfo={...e.extInfo,pageCode:D,templateId:E},e.tenantOrderHolder=e.tenantOrderHolder||{holderType:1},e.tenantOrderHolder.extInfo=e.tenantOrderHolder.extInfo||{},e.tenantOrderInsuredList[0].extInfo=e.tenantOrderInsuredList[0].extInfo||{},e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=e.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.map((e=>{const t=e;return t.extInfo=t.extInfo||{},t})),e.tenantOrderAttachmentList.forEach((e=>{e.category===T.OBVERSE_CERT?e.objectType===R.HOLDER?(Y.value[0]=e.uri,fe.value[0]=e.id):e.objectType===R.INSURED&&(ce.value[0]=e.uri,pe.value[0]=e.id):e.category===T.REVERSE_CERT&&(e.objectType===R.HOLDER?(Y.value[1]=e.uri,fe.value[1]=e.id):e.objectType===R.INSURED&&(ce.value[1]=e.uri,fe.value[1]=e.id))})),Object.assign(q.value,e)}})).finally((()=>{ve.isLoading=!1})),x({pageCode:"infoCollection",templateId:E}).then((({code:e,data:t})=>{if("10000"===e){const e={BENEFICIARY:[],INSURER:[],HOLDER:[]};t.productInsureFactorList.forEach((t=>{(e[t.moduleType]=e[t.moduleType]||[]).push(t)})),z.value=e}}))})),r((()=>q.value),(e=>{if(e){var t,a,r,n,d,i,o,l,s,u;const c=[{contactAddress:null===(t=e.tenantOrderHolder)||void 0===t||null===(a=t.extInfo)||void 0===a?void 0:a.familyAddress,contactName:e.tenantOrderHolder.name,contactPhoneNo:e.tenantOrderHolder.mobile},{contactAddress:null===(r=e.tenantOrderHolder)||void 0===r||null===(n=r.extInfo)||void 0===n?void 0:n.workAddress,contactName:e.tenantOrderHolder.name,contactPhoneNo:e.tenantOrderHolder.mobile},{contactAddress:null===(d=e.tenantOrderInsuredList[0])||void 0===d||null===(i=d.extInfo)||void 0===i?void 0:i.familyAddress,contactName:null===(o=e.tenantOrderInsuredList[0])||void 0===o?void 0:o.name,contactPhoneNo:null===(l=e.tenantOrderInsuredList[0])||void 0===l?void 0:l.mobile},{contactAddress:null===(s=e.tenantOrderInsuredList[0])||void 0===s||null===(u=s.extInfo)||void 0===u?void 0:u.workAddress,contactName:e.tenantOrderInsuredList[0].name,contactPhoneNo:e.tenantOrderInsuredList[0].mobile}];ve.addressList=c.filter((e=>e.contactAddress&&e.contactName&&e.contactPhoneNo))}}),{deep:!0,immediate:!0}),r((()=>q.value.tenantOrderInsuredList[0].relationToHolder),(e=>{1==+e&&Object.assign(q.value.tenantOrderInsuredList[0],q.value.tenantOrderHolder,{id:q.value.tenantOrderInsuredList[0].id})}),{deep:!0,immediate:!0}),(e,t)=>{const a=n("ProCard"),r=n("ProRadioButton"),m=n("ProField"),v=n("ProCascader"),I=n("ProSvg"),y=n("VanButton"),O=n("ProCheckButton"),g=n("van-cell"),L=n("ProForm"),w=n("ProPageWrap");return d(),i(w,{class:"page-info-wrapper"},{default:o((()=>{var e,n,w,E,C;return[b(ve).isLoading?h("",!0):(d(),i(L,{key:0,ref_key:"formRef",ref:M},{default:o((()=>[s(a,{title:"投保人"},{default:o((()=>[s(N,{images:Y.value,"onUpdate:images":t[0]||(t[0]=e=>Y.value=e),"form-info":q.value.tenantOrderHolder,"factor-list":z.value.HOLDER,prefix:"holder"},null,8,["images","form-info","factor-list"])])),_:1}),s(a,{title:"被保人"},{default:o((()=>[s(m,{modelValue:q.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[2]||(t[2]=e=>q.value.tenantOrderInsuredList[0].relationToHolder=e),label:"为谁保单",name:"relationToHolder",placeholder:"请选择"},{input:o((()=>[s(r,{modelValue:q.value.tenantOrderInsuredList[0].relationToHolder,"onUpdate:modelValue":t[1]||(t[1]=e=>q.value.tenantOrderInsuredList[0].relationToHolder=e),options:b(B)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),1!=+q.value.tenantOrderInsuredList[0].relationToHolder?(d(),i(N,{key:0,images:ce.value,"onUpdate:images":t[3]||(t[3]=e=>ce.value=e),"form-info":q.value.tenantOrderInsuredList[0],"factor-list":z.value.INSURER||[],prefix:"insure"},null,8,["images","form-info","factor-list"])):h("",!0),s(v,{modelValue:q.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:modelValue":t[4]||(t[4]=e=>q.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),field1:q.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode,"onUpdate:field1":t[5]||(t[5]=e=>q.value.tenantOrderInsuredList[0].extInfo.insureProvinceCode=e),field2:q.value.tenantOrderInsuredList[0].extInfo.insureCityCode,"onUpdate:field2":t[6]||(t[6]=e=>q.value.tenantOrderInsuredList[0].extInfo.insureCityCode=e),field3:q.value.tenantOrderInsuredList[0].extInfo.insureAreaCode,"onUpdate:field3":t[7]||(t[7]=e=>q.value.tenantOrderInsuredList[0].extInfo.insureAreaCode=e),label:"投保地区",name:"insureAreaCode",placeholder:"请选择","is-link":"",required:"","data-source":b(F),mapping:{label:"name",value:"code",children:"children"}},null,8,["modelValue","field1","field2","field3","data-source"])])),_:1}),s(a,{title:"受益人"},{default:o((()=>[s(m,{modelValue:q.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[9]||(t[9]=e=>q.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),label:"受益人类型",name:"insuredBeneficiaryType",placeholder:"请选择"},{input:o((()=>[s(r,{modelValue:q.value.tenantOrderInsuredList[0].insuredBeneficiaryType,"onUpdate:modelValue":t[8]||(t[8]=e=>q.value.tenantOrderInsuredList[0].insuredBeneficiaryType=e),options:b(k)},null,8,["modelValue","options"])])),_:1},8,["modelValue"]),2==q.value.tenantOrderInsuredList[0].insuredBeneficiaryType?(d(),u("div",$,[(d(!0),u(p,null,c(q.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList,((e,a)=>(d(),u("div",{key:e.beneficiaryId||e.id,class:"beneficiary-item"},[l("div",J,[l("span",Q,f(`受益人${a+1}`),1),s(I,{name:"delete",onClick:t=>{return a=e,void(q.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList=q.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList.filter((e=>e.beneficiaryId!==a.beneficiaryId||a.id!==e.id)));var a}},{default:o((()=>[W])),_:2},1032,["onClick"])]),s(N,{images:me.value,"onUpdate:images":t[10]||(t[10]=e=>me.value=e),"form-info":e,"factor-list":z.value.BENEFICIARY||[],prefix:`beneficiary-${a}`,"beneficiary-list":q.value.tenantOrderInsuredList[0].tenantOrderBeneficiaryList},null,8,["images","form-info","factor-list","prefix","beneficiary-list"])])))),128)),s(y,{onClick:ge},{default:o((()=>[K])),_:1})])):h("",!0)])),_:1}),s(a,{title:"保单通讯信息"},{default:o((()=>{var e;return[null!==(e=Object.keys(b(Ie)))&&void 0!==e&&e.length?(d(),i(g,{key:1,title:"单元格","is-link":"",onClick:t[12]||(t[12]=e=>b(U)(!0))},{title:o((()=>[l("div",Z,[l("p",null,[l("span",ee,f(b(Ie).contactName),1),l("span",te,f(b(Ie).contactPhoneNo),1)]),l("p",ae,f(b(Ie).contactAddress),1)])])),_:1})):(d(),i(O,{key:0,activated:"",onClick:t[11]||(t[11]=e=>b(U)(!0))},{default:o((()=>[X])),_:1}))]})),_:1})])),_:1},512)),l("div",re,[l("div",ne,[l("div",de,[ie,l("span",oe,"￥"+f(null===(e=q.value.tenantOrderInsuredList)||void 0===e||null===(n=e[0])||void 0===n||null===(w=n.tenantOrderProductList)||void 0===w||null===(E=w[0].premium)||void 0===E||null===(C=E.toLocaleString)||void 0===C?void 0:C.call(E)),1)]),le]),l("div",se,[s(y,{block:"",type:"primary",onClick:ye},{default:o((()=>[ue])),_:1})])]),b(S)?(d(),i(G,{key:1,modelValue:b(ve).currentAddress,"onUpdate:modelValue":t[13]||(t[13]=e=>b(ve).currentAddress=e),show:b(S),"data-source":b(ve).addressList,onSubmit:Oe,onClose:t[14]||(t[14]=e=>b(U)(!1))},null,8,["modelValue","show","data-source"])):h("",!0)]})),_:1})}}}))}}}))}();
