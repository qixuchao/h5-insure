import{d as a,r as e,R as s,b as l,c as u,i as t,k as n,f as i,h as o,e as r,w as d,j as p,E as c,bD as v,a2 as m,U as f,bE as b,B as g,av as y,bF as h,s as w,bG as C}from"./index-ef733660.js";const k={class:"sign-wrap"},S=["src"],_={class:"popup-body"},T={class:"sign-container-wrap"},V={class:"operate-bar"},I={class:"btns"},R=a({name:"sign"}),O=a({...R,props:{option:{default:{}},modelValue:{default:""}},emits:["update:modelValue","submitSign"],setup(a,{expose:w,emit:C}){const R=a,O=e(!1),j=e(),E=e(""),x=e(!0),z=()=>{var a;O.value=!0,null==(a=j.value)||a.clear(),setTimeout((()=>{var a;null==(a=j.value)||a.setDataURL(E.value),R.modelValue?x.value=!1:x.value=!0}))},F=()=>{b({images:[E.value],className:"customer-sign-preview"})},N=()=>{O.value=!1},P=()=>{var a,e;null==(e=null==(a=j.value)?void 0:a.clear)||e.call(a),E.value="",x.value=!0,C("update:modelValue","")},U=()=>{var a;E.value=null==(a=j.value)?void 0:a.save(),C("update:modelValue",E.value),C("submitSign",E.value),O.value=!1};return s((()=>R.modelValue),(()=>{E.value=R.modelValue}),{immediate:!0}),w({rewrite:P,openSign:z}),(a,e)=>{const s=g,b=y,w=h;return l(),u(f,null,[t("div",k,[n(a.$slots,"signImg",{data:i(E)},(()=>[i(E)?(l(),u("img",{key:0,class:"preview-sign",src:i(E),alt:"",onClick:F},null,8,S)):o("",!0),r(s,{type:"primary",round:"",size:"small",onClick:z},{default:d((()=>[p(c(i(E)?"重新签名":"点击签字"),1)])),_:1})]))]),r(w,{show:i(O),"onUpdate:show":e[1]||(e[1]=a=>m(O)?O.value=a:null),position:"bottom",style:{height:"100%",overflow:"hidden"}},{default:d((()=>[t("div",_,[t("div",T,[r(v,{ref_key:"signRef",ref:j,placeholder:"请在此处签名",onStroke:e[0]||(e[0]=a=>x.value=!1)},null,512),t("div",V,[t("span",null,[r(b,{name:"info",color:"#ffaf22"}),p(" 请投保人正楷签署您的签名:")]),t("div",I,[r(s,{type:"default",class:"btn",onClick:N},{default:d((()=>[p("返回")])),_:1}),r(s,{type:"default",class:"btn",onClick:P},{default:d((()=>[p("重写")])),_:1}),r(s,{type:"primary",class:"btn",disabled:i(x),onClick:U},{default:d((()=>[p("确定签字")])),_:1},8,["disabled"])])])])])])),_:1},8,["show"])],64)}}}),j=a=>w({url:"/api/app/insure/insurance/customerFace",method:"POST",data:a}),E=a=>w({url:"/api/app/insure/insurance/saveCustomerFaceResult",method:"POST",data:a}),x=(a,e,s,l,u)=>{const t={bizObjectType:a,bizObjectId:u,docCategory:"ELECTRIC_SIGN",docType:"png",fileBase64:e,docName:`${C[a]}电子签名`,orderId:s,tenantId:l};return w({url:"/api/app/insure/insurance/saveCustomerSignResult",method:"POST",data:t})};export{O as _,j as a,E as f,x as s};
