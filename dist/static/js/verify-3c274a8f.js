import{d as a,r as e,R as s,c as l,A as u,f as t,k as n,g as i,h as o,i as r,w as d,j as c,E as p,bB as v,a2 as m,U as f,bC as b,B as g,at as y,bD as h,q as C,bE as w}from"./index-b419c4de.js";const k={class:"sign-wrap"},S=["src"],_={class:"popup-body"},T={class:"sign-container-wrap"},V={class:"operate-bar"},I={class:"btns"},R=a({name:"sign"}),O=a({...R,props:{option:{default:{}},modelValue:{default:""}},emits:["update:modelValue","submitSign"],setup(a,{expose:C,emit:w}){const R=a,O=e(!1),j=e(),E=e(""),x=e(!0),z=()=>{var a;O.value=!0,null==(a=j.value)||a.clear(),setTimeout((()=>{var a;null==(a=j.value)||a.setDataURL(E.value),R.modelValue?x.value=!1:x.value=!0}))},B=()=>{b({images:[E.value],className:"customer-sign-preview"})},N=()=>{O.value=!1},P=()=>{var a,e;null==(e=null==(a=j.value)?void 0:a.clear)||e.call(a),E.value="",x.value=!0,w("update:modelValue","")},U=()=>{var a;E.value=null==(a=j.value)?void 0:a.save(),w("update:modelValue",E.value),w("submitSign",E.value),O.value=!1};return s((()=>R.modelValue),(()=>{E.value=R.modelValue}),{immediate:!0}),C({rewrite:P,openSign:z}),(a,e)=>{const s=g,b=y,C=h;return l(),u(f,null,[t("div",k,[n(a.$slots,"signImg",{data:i(E)},(()=>[i(E)?(l(),u("img",{key:0,class:"preview-sign",src:i(E),alt:"",onClick:B},null,8,S)):o("",!0),r(s,{type:"primary",round:"",size:"small",onClick:z},{default:d((()=>[c(p(i(E)?"重新签名":"点击签字"),1)])),_:1})]))]),r(C,{show:i(O),"onUpdate:show":e[1]||(e[1]=a=>m(O)?O.value=a:null),position:"bottom",style:{height:"100%",overflow:"hidden"}},{default:d((()=>[t("div",_,[t("div",T,[r(v,{ref_key:"signRef",ref:j,placeholder:"请在此处签名",onStroke:e[0]||(e[0]=a=>x.value=!1)},null,512),t("div",V,[t("span",null,[r(b,{name:"info",color:"#ffaf22"}),c(" 请投保人正楷签署您的签名:")]),t("div",I,[r(s,{type:"default",class:"btn",onClick:N},{default:d((()=>[c("返回")])),_:1}),r(s,{type:"default",class:"btn",onClick:P},{default:d((()=>[c("重写")])),_:1}),r(s,{type:"primary",class:"btn",disabled:i(x),onClick:U},{default:d((()=>[c("确定签字")])),_:1},8,["disabled"])])])])])])),_:1},8,["show"])],64)}}}),j=a=>C({url:"/api/app/insure/insurance/customerFace",method:"POST",data:a}),E=a=>C({url:"/api/app/insure/insurance/saveCustomerFaceResult",method:"POST",data:a}),x=(a,e,s,l,u)=>{const t={bizObjectType:a,bizObjectId:u,docCategory:"ELECTRIC_SIGN",docType:"png",fileBase64:e,docName:`${w[a]}电子签名`,orderId:s,tenantId:l};return C({url:"/api/app/insure/insurance/saveCustomerSignResult",method:"POST",data:t})};export{O as _,j as a,E as f,x as s};
