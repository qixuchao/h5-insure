!function(){var e=document.createElement("style");e.innerHTML=".flex-form .flex-field[data-v-3ac06de4]{display:flex;flex-direction:column}.gap[data-v-3ac06de4]{display:inline-block;width:1.33333rem;height:.42667rem;text-align:center;line-height:.42667rem;background-color:#e9e7e7;border:1px solid rgb(205,205,205)}.com-risk-card-wrapper.part-card[data-v-265ac437]{background-color:#fff;border-bottom:.26667rem solid var(--zaui-global-bg, #f2f5fc)}.com-risk-card-wrapper .delete-risk[data-v-265ac437]{display:flex;align-items:center;justify-content:center;margin-top:.06667rem}.com-risk-card-wrapper .delete-risk .svg-icon[data-v-265ac437]{font-size:.42667rem}.com-risk-card-wrapper .custom-field[data-v-265ac437]{display:flex;flex-direction:column}.com-risk-card-wrapper .custom-field .field-tip[data-v-265ac437]{font-size:.32rem;font-weight:400;color:#99a9c0;line-height:1;margin:0 0 .10667rem}\n",document.head.appendChild(e),System.register(["./index-legacy-db3cc191.js","./index-legacy-ad5bed43.js"],(function(e){"use strict";var a,l,i,t,o,n,r,d,u,s,c,m,p,v,g,f,y,V,x,b,k;return{setters:[function(e){a=e._,l=e.d,i=e.r,t=e.an,o=e.c,n=e.h,r=e.e,d=e.w,u=e.j,s=e.f,c=e.k,m=e.n,p=e.y,v=e.m,g=e.ap,f=e.b8,y=e.G,V=e.F,x=e.X,b=e.Y},function(e){k=e.S}],execute:function(){const h={class:"input-group"},D={key:0},_={class:"custom-field"},w={key:1,class:"flex-field"},j={class:"pro-radio-wrap"},C={key:2},O={key:3};var S=a(l({__name:"index",props:{originData:{type:Object,default:()=>{}},modelValue:{type:Object,default:()=>{}}},setup(e){const a=e;console.log("baoebaofei  = ",a.originData);const l=i(a.originData.amountPremiumConfigVO),f=i(a.modelValue),y=i(1),V=(e,a,l={})=>{let i=a;return Array.isArray(a)||(i=[`${i}`]),(e||[]).filter((e=>i.includes(`${e.value}`)||i.includes(e.value)))};return t((()=>l),(e=>{1===e.displayType?y.value=1:3===e.displayType&&2===e.requireCopies?y.value=2:3===e.displayType&&1===e.requireCopies?y.value=3:2===e.displayType&&(y.value=4)}),{deep:!0}),(a,i)=>{var t;const x=k,b=p,S=v,T=g;return o(),n("div",h,[1===y.value?(o(),n("div",D,[1===(null===(t=e.originData.riskCalcMethodInfoVO)||void 0===t?void 0:t.saleMethod)&&2===e.originData.exemptFlag?(o(),r(b,{key:0,modelValue:f.value.amount,"onUpdate:modelValue":i[1]||(i[1]=e=>f.value.amount=e),label:"基本保额",name:"amount",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...e)=>{}}]},{input:d((()=>[u("div",_,[s(x,{modelValue:f.value.amount,"onUpdate:modelValue":i[0]||(i[0]=e=>f.value.amount=e),"input-width":"64px","default-value":e.originData.minStepValue,min:e.originData.minStepValue,step:e.originData.stepValue,max:e.originData.maxStepValue},null,8,["modelValue","default-value","min","step","max"])])])),_:1},8,["modelValue","rules"])):c("",!0)])):2===y.value?(o(),n("div",w,[m(" 1111111 "),s(T,{modelValue:f.value.amount,"onUpdate:modelValue":i[3]||(i[3]=e=>f.value.amount=e),label:"基本保额",name:"amount"},{input:d((()=>[u("div",j,[s(S,{modelValue:f.value.amount,"onUpdate:modelValue":i[2]||(i[2]=e=>f.value.amount=e),options:V(l.value.displayValues,f.value.amount||[])},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])])):3===y.value?(o(),n("div",C)):4===y.value?(o(),n("div",O)):c("",!0)])}}}),[["__scopeId","data-v-3ac06de4"]]);const T=e=>(x("data-v-265ac437"),e=e(),b(),e),I=T((()=>u("div",null,"因子",-1))),U=T((()=>u("div",null,"产品要素",-1)));e("I",a(l({__name:"index",props:{originData:{default:()=>({})},modelValue:{default:()=>({})}},setup(e){const a=e,l=i({});return f("premium"),l.value=f("enumList")||{},y((()=>{console.log("--------origin data = ",a.originData)})),(a,l)=>(o(),n(V,null,[s(S,{"v-model":e.modelValue,"origin-data":e.originData.insureProductRiskVOList[0]},null,8,["v-model","origin-data"]),I,U],64))}}),[["__scopeId","data-v-265ac437"]]))}}}))}();
