import{_ as a,d as e,r as l,an as u,c as o,h as i,e as t,w as n,j as s,f as d,k as r,n as m,y as p,m as v,ap as c,b8 as g,G as V,F as y,X as f,Y as D}from"./index-a44d8740.js";import{S as x}from"./index-1350c32c.js";const _={class:"input-group"},k={key:0},b={class:"custom-field"},h={key:1,class:"flex-field"},j={class:"pro-radio-wrap"},C={key:2},O={key:3};var I=a(e({__name:"index",props:{originData:{type:Object,default:()=>{}},modelValue:{type:Object,default:()=>{}}},setup(a){const e=a;console.log("baoebaofei  = ",e.originData);const g=l(e.originData.amountPremiumConfigVO),V=l(e.modelValue),y=l(1),f=(a,e,l={})=>{let u=e;return Array.isArray(e)||(u=[`${u}`]),(a||[]).filter((a=>u.includes(`${a.value}`)||u.includes(a.value)))};return u((()=>g),(a=>{1===a.displayType?y.value=1:3===a.displayType&&2===a.requireCopies?y.value=2:3===a.displayType&&1===a.requireCopies?y.value=3:2===a.displayType&&(y.value=4)}),{deep:!0}),(e,l)=>{var u;const D=x,I=p,S=v,T=c;return o(),i("div",_,[1===y.value?(o(),i("div",k,[1===(null==(u=a.originData.riskCalcMethodInfoVO)?void 0:u.saleMethod)&&2===a.originData.exemptFlag?(o(),t(I,{key:0,modelValue:V.value.amount,"onUpdate:modelValue":l[1]||(l[1]=a=>V.value.amount=a),label:"基本保额",name:"amount",rules:[{required:!0,message:"请填写"},{trigger:"onChange",validator:(...a)=>{}}]},{input:n((()=>[s("div",b,[d(D,{modelValue:V.value.amount,"onUpdate:modelValue":l[0]||(l[0]=a=>V.value.amount=a),"input-width":"64px","default-value":a.originData.minStepValue,min:a.originData.minStepValue,step:a.originData.stepValue,max:a.originData.maxStepValue},null,8,["modelValue","default-value","min","step","max"])])])),_:1},8,["modelValue","rules"])):r("",!0)])):2===y.value?(o(),i("div",h,[m(" 1111111 "),d(T,{modelValue:V.value.amount,"onUpdate:modelValue":l[3]||(l[3]=a=>V.value.amount=a),label:"基本保额",name:"amount"},{input:n((()=>[s("div",j,[d(S,{modelValue:V.value.amount,"onUpdate:modelValue":l[2]||(l[2]=a=>V.value.amount=a),options:f(g.value.displayValues,V.value.amount||[])},null,8,["modelValue","options"])])])),_:1},8,["modelValue"])])):3===y.value?(o(),i("div",C)):4===y.value?(o(),i("div",O)):r("",!0)])}}}),[["__scopeId","data-v-3ac06de4"]]);const S=a=>(f("data-v-265ac437"),a=a(),D(),a),T=S((()=>s("div",null,"因子",-1))),U=S((()=>s("div",null,"产品要素",-1)));var q=a(e({__name:"index",props:{originData:{default:()=>({})},modelValue:{default:()=>({})}},setup(a){const e=a,u=l({});return g("premium"),u.value=g("enumList")||{},V((()=>{console.log("--------origin data = ",e.originData)})),(e,l)=>(o(),i(y,null,[d(I,{"v-model":a.modelValue,"origin-data":a.originData.insureProductRiskVOList[0]},null,8,["v-model","origin-data"]),T,U],64))}}),[["__scopeId","data-v-265ac437"]]);export{q as I};
