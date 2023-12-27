import{d as a,af as e,ag as t,j as i,i as l,h as s,r,E as n,bn as o,l as u,o as d,c,n as p,b as m,w as f,v as h,u as v,f as k,p as D,a as y,e as P,g as S,dt as g,du as C,F as w,aa as I,aB as R}from"./index-8d3a2422.js";import{c as L}from"./cloneDeep-8133e36a.js";import{_}from"./TrialButton-201a08f7.js";import{u as x}from"./useOrder-fec75421.js";import"./index-78455baf.js";import"./format-31cde443.js";const F={class:"trial-wrap"},T={class:"pop-header"},q={class:"header-title"},B=a({name:"TrialPop"}),b=a({...B,props:{dataSource:{default:()=>[]},productInfo:{default:()=>({productCode:"",productName:"",insurerCode:"",tenantId:"",planList:[]})},shareInfo:{default:()=>({})},tenantProductDetail:{default:()=>({})},hideBenefit:{type:Boolean,default:!1},hidePopupButton:{type:Boolean,default:!1},title:{default:"算一算保费"},defaultData:{default:null},currentOrderDetail:{default:null},updateRiskCode:{default:""},insurerList:{default:()=>[]}},setup(a,{expose:B}){const b=a,j=e((()=>t((()=>import("./index-ad0f4261.js")),["static/js/index-ad0f4261.js","static/css/index-ff050d4c.css","static/js/index-8d3a2422.js","static/css/index-0a143403.css","static/js/cloneDeep-8133e36a.js","static/js/InsureInfos-50d9cfdd.js","static/css/InsureInfos-39846553.css","static/js/index-7ef3f0be.js","static/css/index-ea4f829a.css","static/js/infoCollection-e49ec9e2.js","static/js/index-ec870dc1.js","static/css/index-ebd0c676.css","static/js/PolicyInfo-532de21e.js","static/css/PolicyInfo-596a5bd3.css","static/js/questionnaire-42dcb602.js","static/js/util-daf382b3.js","static/js/trial-de26f19c.js","static/js/product-7bbf9c44.js","static/js/trial-c200444c.js","static/js/constants-6ad2f07c.js","static/js/useOrder-fec75421.js","static/js/utils-7be52990.js","static/js/createProposal-e062bebc.js","static/js/nextStep-95a5873d.js","static/js/core-1984b779.js","static/js/format-31cde443.js"]))),M=i(null),O=l();s(),O.query;const A=r({loading:!1,show:!1,select:{},list:[],userData:{},riskIsInsure:{},submitData:{},riskVOList:[{}],mainRiskVO:{},ifPersonalInfoSuccess:!1,trialMsg:"",trialResultPremium:0,trialResult:{initialPremium:0,initialAmount:0},isAniShow:!1,defaultValue:null,isAutoChange:!1,planIndex:0,isSkipFirstTrial:!1,hadSkipFirstTrial:!1}),V=i(),E=x();i();const $=i();i(),n((()=>b.defaultData),((a,e)=>{var t;o(a,e)||(A.defaultData=L(b.defaultData)||{},A.defaultData.insuredList=((null==(t=A.defaultData)?void 0:t.insuredList)||[]).map((a=>{var e,t;return{...a,productList:null==(t=null==(e=b.insurerList)?void 0:e[0])?void 0:t.productList.filter((a=>{var e;return a.productCode===(null==(e=b.productInfo)?void 0:e.productCode)}))}})))}),{deep:!0,immediate:!0});const H=()=>{console.log("---close"),A.show=!1,A.loading=!1};i({});const N=()=>{A.isAniShow=!1},U=()=>{A.trialMsg="试算中...",A.trialResultPremium=0,A.loading=!0},z=a=>{A.trialMsg="",A.trialResultPremium=a.initialPremium,A.trialResult=a,A.loading=!1};u((()=>{A.loading=!0})),n((()=>b.currentOrderDetail),(a=>{V.value=a||E.value}),{deep:!0,immediate:!0});const G=i();n((()=>b.tenantProductDetail),(()=>{var a,e,t;const i=((null==(a=null==b?void 0:b.tenantProductDetail)?void 0:a.PREMIUM)||[]).find((a=>{var e;return!a.planCode||a.planCode===(null==(e=null==b?void 0:b.dataSource)?void 0:e.planCode)}))||{};G.value=null==(t=null==(e=(i.data||[]).sort(((a,e)=>+e.paymentFrequency-+a.paymentFrequency)))?void 0:e[0])?void 0:t.paymentFrequency}),{deep:!0,immediate:!0}),n((()=>A.show),(a=>{a&&(A.select={},A.list=[],A.userData={},A.riskIsInsure={},A.submitData={},A.riskVOList=[{}],A.mainRiskVO={},A.ifPersonalInfoSuccess=!1,A.trialMsg="",A.trialResultPremium=0)}));const J=()=>{A.show=!0,A.isAniShow=!0,A.isSkipFirstTrial=!0,A.hadSkipFirstTrial=!1};return B({open:J,close:H,getTrialSuccessFlag:()=>A.trialResultPremium>0}),n((()=>b.shareInfo),(()=>{$.value=b.shareInfo}),{deep:!0,immediate:!0}),(a,e)=>{const t=I,i=R;return d(),c(w,null,[a.hidePopupButton?k("",!0):(d(),c("div",{key:0,class:p(`trial-button ${a.$attrs.class}`)},[m(_,{"is-share":$.value.isShare,premium:v(A).trialResultPremium,"share-info":$.value,"loading-text":"","plan-code":b.dataSource.planCode,"payment-frequency":G.value,"tenant-product-detail":a.tenantProductDetail,onHandleClick:J},{default:f((()=>[h("立即投保")])),_:1},8,["is-share","premium","share-info","plan-code","payment-frequency","tenant-product-detail"])],2)),v(A).isAniShow||v(A).show?(d(),D(i,{key:1,class:p(`com-trial-wrap ${a.$attrs.class}`),show:v(A).show,closeable:!1,onClose:H,onClosed:N},{default:f((()=>[y("div",F,[m(v(j),{ref_key:"insureInfosRef",ref:M,"product-collection":a.dataSource,"product-factor":[],"default-data":v(A).defaultData,"product-risk-code-map":a.productRiskCodeMap,"hide-benefit":"","update-risk-code":a.updateRiskCode,onTrialStart:U,onTrialEnd:z},{trialHead:f((()=>[y("div",T,[y("span",q,P(a.title),1),m(t,{name:"cross",onClick:e[0]||(e[0]=a=>v(A).show=!1)})])])),trialBtn:f((e=>[S(a.$slots,"trialBtn",g(C(e)),(()=>{var t,i,l,s,r,n;return[m(_,{"is-share":$.value.isShare,premium:null==(t=e.riskPremium)?void 0:t.initialPremium,"share-info":$.value,"loading-text":v(A).trialMsg,"plan-code":b.dataSource.planCode,"payment-frequency":(null==(n=null==(r=null==(s=null==(l=null==(i=e.trialData)?void 0:i.insuredList)?void 0:l[0].productList)?void 0:s[0].riskList)?void 0:r[0])?void 0:n.paymentFrequency)+"","tenant-product-detail":a.tenantProductDetail,"handle-share":t=>a.onShare(t,e.trialData),onHandleClick:a=>(e.trialData,void M.value.onNext())},{default:f((()=>[h("立即投保")])),_:2},1032,["is-share","premium","share-info","loading-text","plan-code","payment-frequency","tenant-product-detail","handle-share","onHandleClick"])]}))])),_:3},8,["product-collection","default-data","product-risk-code-map","update-risk-code"])])])),_:3},8,["class","show"])):k("",!0)],64)}}});export{b as default};
