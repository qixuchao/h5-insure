import{d as a,ae as e,af as t,j as i,i as l,h as s,r,E as n,bn as o,l as u,o as d,c,n as p,b as m,w as f,v as h,u as v,f as k,p as D,a as y,e as P,g as C,ds as S,dt as g,F as w,aa as I,aC as R}from"./index-fb028d1a.js";import{c as L}from"./cloneDeep-f5caf098.js";import{_ as b}from"./TrialButton-b34034f0.js";import{u as _}from"./useOrder-c221b577.js";import"./index-deebd030.js";import"./format-31cde443.js";const x={class:"trial-wrap"},F={class:"pop-header"},T={class:"header-title"},q=a({name:"TrialPop"}),j=a({...q,props:{dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:"",planList:[]})},shareInfo:{default:()=>({})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null},currentOrderDetail:{default:null},updateRiskCode:{default:""},insurerList:{default:()=>[]}},setup(a,{expose:q}){const j=a,B=e((()=>t((()=>import("./index-328a5441.js")),["static/js/index-328a5441.js","static/css/index-ff050d4c.css","static/js/index-fb028d1a.js","static/css/index-d294c49a.css","static/js/cloneDeep-f5caf098.js","static/js/InsureInfos-416cd397.js","static/css/InsureInfos-39846553.css","static/js/index-de590a0b.js","static/js/index-4f3390d3.js","static/css/index-ea4f829a.css","static/js/infoCollection-b086ffa0.js","static/js/index-db5daa2b.js","static/css/index-63f2b990.css","static/js/PolicyInfo-3ad2f943.js","static/css/PolicyInfo-596a5bd3.css","static/js/questionnaire-42dcb602.js","static/js/util-bd164dbb.js","static/js/trial-629a6ac9.js","static/js/product-7bbf9c44.js","static/js/trial-175fa670.js","static/js/utils-7a6a5e36.js","static/js/createProposal-52f3575a.js","static/js/useOrder-c221b577.js","static/js/constants-7afb7c3d.js","static/js/nextStep-4238a2d6.js","static/js/core-77f373a5.js","static/js/format-31cde443.js"]))),M=i(null),O=l();s(),O.query;const A=r({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskVOList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{initialPremium:0,initialAmount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1}),V=i(),E=_();i();const $=i();i(),n((()=>j.defaultData),((a,e)=>{var t;o(a,e)||(A.defaultData=L(j.defaultData)||{},A.defaultData.insuredList=((null==(t=A.defaultData)?void 0:t.insuredList)||[]).map((a=>{var e,t;return{...a,productList:null==(t=null==(e=j.insurerList)?void 0:e[0])?void 0:t.productList.filter((a=>{var e;return a.productCode===(null==(e=j.productInfo)?void 0:e.productCode)}))}})))}),{deep:!0,immediate:!0});const H=()=>{console.log("---close"),A.show=!1,A.loading=!1};i({});const N=()=>{A.isAniShow=!1},U=()=>{A.trialMsg="试算中...",A.trialResultPremium=0,A.loading=!0},z=a=>{A.trialMsg="",A.trialResultPremium=a.initialPremium,A.trialResult=a,A.loading=!1};u((()=>{A.loading=!0})),n((()=>j.currentOrderDetail),(a=>{V.value=a||E.value}),{deep:!0,immediate:!0});const G=i();n((()=>j.tenantProductDetail),(()=>{var a,e,t;const i=((null==(a=null==j?void 0:j.tenantProductDetail)?void 0:a.PREMIUM)||[]).find((a=>{var e;return!a.planCode||a.planCode===(null==(e=null==j?void 0:j.dataSource)?void 0:e.planCode)}))||{};G.value=null==(t=null==(e=(i.data||[]).sort(((a,e)=>+e.paymentFrequency-+a.paymentFrequency)))?void 0:e[0])?void 0:t.paymentFrequency}),{deep:!0,immediate:!0}),n((()=>A.show),(a=>{a&&(A.select={},A.list=[],A.userData={},A.riskIsInsure={},A.submitData={},A.riskVOList=[{}],A.mainRiskVO={},A.ifPersonalInfoSuccess=!1,A.trialMsg="",A.trialResultPremium=0)}));const J=()=>{A.show=!0,A.isAniShow=!0,A.isSkipFirstTrial=!0,A.hadSkipFirstTrial=!1};return q({open:J,close:H,getTrialSuccessFlag:()=>A.trialResultPremium>0}),n((()=>j.shareInfo),(()=>{$.value=j.shareInfo}),{deep:!0,immediate:!0}),(a,e)=>{const t=I,i=R;return d(),c(w,null,[a.hidePopupButton?k("",!0):(d(),c("div",{key:0,class:p(`trial-button ${a.$attrs.class}`)},[m(b,{"is-share":$.value.isShare,premium:v(A).trialResultPremium,"share-info":$.value,"loading-text":"","plan-code":j.dataSource.planCode,"payment-frequency":G.value,"tenant-product-detail":a.tenantProductDetail,onHandleClick:J},{default:f((()=>[h("立即投保")])),_:1},8,["is-share","premium","share-info","plan-code","payment-frequency","tenant-product-detail"])],2)),v(A).isAniShow||v(A).show?(d(),D(i,{key:1,class:p(`com-trial-wrap ${a.$attrs.class}`),show:v(A).show,closeable:!1,onClose:H,onClosed:N},{default:f((()=>[y("div",x,[m(v(B),{ref_key:"insureInfosRef",ref:M,"product-collection":a.dataSource,"product-factor":[],"default-data":v(A).defaultData,"product-risk-code-map":a.productRiskCodeMap,"hide-benefit":"","update-risk-code":a.updateRiskCode,onTrialStart:U,onTrialEnd:z},{trialHead:f((()=>[y("div",F,[y("span",T,P(a.title),1),m(t,{name:"cross",onClick:e[0]||(e[0]=a=>v(A).show=!1)})])])),trialBtn:f((e=>[C(a.$slots,"trialBtn",S(g(e)),(()=>{var t,i,l,s,r,n;return[m(b,{"is-share":$.value.isShare,premium:null==(t=e.riskPremium)?void 0:t.initialPremium,"share-info":$.value,"loading-text":v(A).trialMsg,"plan-code":j.dataSource.planCode,"payment-frequency":(null==(n=null==(r=null==(s=null==(l=null==(i=e.trialData)?void 0:i.insuredList)?void 0:l[0].productList)?void 0:s[0].riskList)?void 0:r[0])?void 0:n.paymentFrequency)+"","tenant-product-detail":a.tenantProductDetail,"handle-share":t=>a.onShare(t,e.trialData),onHandleClick:a=>(e.trialData,void M.value.onNext())},{default:f((()=>[h("立即投保")])),_:2},1032,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail","handle-share","onHandleClick"])]}))])),_:3},8,["product-collection","default-data","product-risk-code-map","update-risk-code"])])])),_:3},8,["class","show"])):k("",!0)],64)}}});export{j as default};
