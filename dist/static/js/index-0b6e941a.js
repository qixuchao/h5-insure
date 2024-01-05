import{d as a,af as e,ag as t,j as i,i as l,h as s,r,E as n,bn as o,l as u,o as d,c,n as p,b as m,w as f,v as h,u as v,f as k,p as D,a as y,e as P,g as S,dt as g,du as C,F as w,aa as I,aB as R}from"./index-7bdfed5a.js";import{c as L}from"./cloneDeep-7f591603.js";import{_ as b}from"./TrialButton-1ccfcbb0.js";import{u as _}from"./useOrder-77efe614.js";import"./index-67103431.js";import"./format-31cde443.js";const x={class:"trial-wrap"},F={class:"pop-header"},T={class:"header-title"},q=a({name:"TrialPop"}),B=a({...q,props:{dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:"",planList:[]})},shareInfo:{default:()=>({})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null},currentOrderDetail:{default:null},updateRiskCode:{default:""},insurerList:{default:()=>[]}},setup(a,{expose:q}){const B=a,j=e((()=>t((()=>import("./index-d2333eb1.js")),["static/js/index-d2333eb1.js","static/css/index-ff050d4c.css","static/js/index-7bdfed5a.js","static/css/index-267a9c4a.css","static/js/cloneDeep-7f591603.js","static/js/InsureInfos-6cf85e71.js","static/css/InsureInfos-39846553.css","static/js/index-0f27d987.js","static/css/index-ea4f829a.css","static/js/infoCollection-aa621fc4.js","static/js/index-f99be0a8.js","static/css/index-8312aa7b.css","static/js/PolicyInfo-891103f4.js","static/css/PolicyInfo-596a5bd3.css","static/js/questionnaire-42dcb602.js","static/js/util-b6bfa996.js","static/js/trial-a3ff1874.js","static/js/product-7bbf9c44.js","static/js/trial-86c4f979.js","static/js/constants-6ad2f07c.js","static/js/useOrder-77efe614.js","static/js/utils-59e2b0bb.js","static/js/createProposal-93515c2c.js","static/js/nextStep-56b990b4.js","static/js/core-62917bae.js","static/js/format-31cde443.js"]))),M=i(null),O=l();s(),O.query;const A=r({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskVOList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{initialPremium:0,initialAmount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1}),V=i(),E=_();i();const $=i();i(),n((()=>B.defaultData),((a,e)=>{var t;o(a,e)||(A.defaultData=L(B.defaultData)||{},A.defaultData.insuredList=((null==(t=A.defaultData)?void 0:t.insuredList)||[]).map((a=>{var e,t;return{...a,productList:null==(t=null==(e=B.insurerList)?void 0:e[0])?void 0:t.productList.filter((a=>{var e;return a.productCode===(null==(e=B.productInfo)?void 0:e.productCode)}))}})))}),{deep:!0,immediate:!0});const H=()=>{console.log("---close"),A.show=!1,A.loading=!1};i({});const N=()=>{A.isAniShow=!1},U=()=>{A.trialMsg="试算中...",A.trialResultPremium=0,A.loading=!0},z=a=>{A.trialMsg="",A.trialResultPremium=a.initialPremium,A.trialResult=a,A.loading=!1};u((()=>{A.loading=!0})),n((()=>B.currentOrderDetail),(a=>{V.value=a||E.value}),{deep:!0,immediate:!0});const G=i();n((()=>B.tenantProductDetail),(()=>{var a,e,t;const i=((null==(a=null==B?void 0:B.tenantProductDetail)?void 0:a.PREMIUM)||[]).find((a=>{var e;return!a.planCode||a.planCode===(null==(e=null==B?void 0:B.dataSource)?void 0:e.planCode)}))||{};G.value=null==(t=null==(e=(i.data||[]).sort(((a,e)=>+e.paymentFrequency-+a.paymentFrequency)))?void 0:e[0])?void 0:t.paymentFrequency}),{deep:!0,immediate:!0}),n((()=>A.show),(a=>{a&&(A.select={},A.list=[],A.userData={},A.riskIsInsure={},A.submitData={},A.riskVOList=[{}],A.mainRiskVO={},A.ifPersonalInfoSuccess=!1,A.trialMsg="",A.trialResultPremium=0)}));const J=()=>{A.show=!0,A.isAniShow=!0,A.isSkipFirstTrial=!0,A.hadSkipFirstTrial=!1};return q({open:J,close:H,getTrialSuccessFlag:()=>A.trialResultPremium>0}),n((()=>B.shareInfo),(()=>{$.value=B.shareInfo}),{deep:!0,immediate:!0}),(a,e)=>{const t=I,i=R;return d(),c(w,null,[a.hidePopupButton?k("",!0):(d(),c("div",{key:0,class:p(`trial-button ${a.$attrs.class}`)},[m(b,{"is-share":$.value.isShare,premium:v(A).trialResultPremium,"share-info":$.value,"loading-text":"","plan-code":B.dataSource.planCode,"payment-frequency":G.value,"tenant-product-detail":a.tenantProductDetail,onHandleClick:J},{default:f((()=>[h("立即投保")])),_:1},8,["is-share","premium","share-info","plan-code","payment-frequency","tenant-product-detail"])],2)),v(A).isAniShow||v(A).show?(d(),D(i,{key:1,class:p(`com-trial-wrap ${a.$attrs.class}`),show:v(A).show,closeable:!1,onClose:H,onClosed:N},{default:f((()=>[y("div",x,[m(v(j),{ref_key:"insureInfosRef",ref:M,"product-collection":a.dataSource,"product-factor":[],"default-data":v(A).defaultData,"product-risk-code-map":a.productRiskCodeMap,"hide-benefit":"","update-risk-code":a.updateRiskCode,onTrialStart:U,onTrialEnd:z},{trialHead:f((()=>[y("div",F,[y("span",T,P(a.title),1),m(t,{name:"cross",onClick:e[0]||(e[0]=a=>v(A).show=!1)})])])),trialBtn:f((e=>[S(a.$slots,"trialBtn",g(C(e)),(()=>{var t,i,l,s,r,n;return[m(b,{"is-share":$.value.isShare,premium:null==(t=e.riskPremium)?void 0:t.initialPremium,"share-info":$.value,"loading-text":v(A).trialMsg,"plan-code":B.dataSource.planCode,"payment-frequency":(null==(n=null==(r=null==(s=null==(l=null==(i=e.trialData)?void 0:i.insuredList)?void 0:l[0].productList)?void 0:s[0].riskList)?void 0:r[0])?void 0:n.paymentFrequency)+"","tenant-product-detail":a.tenantProductDetail,"handle-share":t=>a.onShare(t,e.trialData),onHandleClick:a=>(e.trialData,void M.value.onNext())},{default:f((()=>[h("立即投保")])),_:2},1032,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail","handle-share","onHandleClick"])]}))])),_:3},8,["product-collection","default-data","product-risk-code-map","update-risk-code"])])])),_:3},8,["class","show"])):k("",!0)],64)}}});export{B as default};
