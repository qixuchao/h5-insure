import{ed as e,ay as a,b5 as A,ee as r,az as t,b1 as l,ef as n,eg as s,d as o,i,j as m,dz as u,r as d,k as B,z as g,aL as c,u as w,o as p,c as v,a as D,n as E,a6 as C,b as X,w as f,F as J,q as L,a8 as F,e as M,m as R,f as U,T as h,b_ as q,dE as b,bb as I,dB as Y,b$ as y}from"./index-6027c89f.js";import{a as N}from"./validator-6eb2e74e.js";var x=Object.prototype.hasOwnProperty;const Q={key:0,class:"auto-renew-com"},T=D("div",{class:"title"},"开通次年自主重新投保",-1),K={class:"btns"},S=["src"],V=D("div",{class:"tip"},[D("div",{class:"tip-title"},"开通后可享受"),D("div",{class:"tip-row"},"保单到期自动重新投保，享受保障不间断"),D("div",{class:"tip-row"},"自动重新投保开启后，中途可随时取消")],-1),O={class:"row"},j={class:"left"},W=["src"],k=D("header",null,"在微信支付时，请开启自动绑卡续保按钮",-1),G=["src"],z={class:"label"},H=D("header",null,[F("请填写 "),D("label",null,"投保人"),F(" 的银行卡借记卡")],-1),Z=o({name:"Banner"}),P=o({...Z,props:{productFactor:{default:()=>({})},extInfo:{default:{}}},setup(o,{expose:Z}){const P=o,_=i(),$=m([]),ee=m(),{insurerCode:ae=""}=_.query,Ae=u(`${null==ae?void 0:ae.toUpperCase()}_BANK`),re={3:{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABMCAYAAADp0nC5AAAAAXNSR0IArs4c6QAAC0JJREFUeF7tnAlsHNUZx//f7DEz6wQSoAUU7iO0hFYUSqCEVpjsrEMpl1rSFpACKlerckOKCoVAWiGgmNgFkTQpRxGHQkshQBR7N7gcSROI2kJLoRyBAK0owjjE9r554935qrc+sJ1d78zs7Hod8yRLtuZ912/G7/zeI9RBmdoxdTc35xzJwAEM7A+i/eBiXxBPA9Aw8JMAQABvA1E3M7qJuRtEXQDeIKLX3TxejyL6ek9Tz0d1EFbBBRoPR/Rn9EO0HOaB6GiAjwZwQLh+cCdAzxJhbR7IyKR8I1z93rXVBjCDzIw5B3BPBXAKgJneXQyl5vtMaEOeHrBT9vMgcChaPSipKmD1r5/LOecAuADAwR78qUWVtxl8H7mR+0WTeL/aBqsCuNAEuHwdmOYDiFc7iID6XQCrtLy7qHde38sBdZQVCxWwvkY/SIvw9QCdCSBS1np9VFDNxWMRlxf1NDn/DNulcAC/gKmmrS8G46cTCOxolgzQQxE3ekWYo5CKAZvt8dMBagVhr7Df/vjo404mXGonnQfDsB8c8GrsZMaNFWA+IwxH6lDH04hqF4lG8UElvgUC3NAeO9wl7VEAB1VivP5luZOhfc+27D8H9dU3YCNjLCDmpQCMoEYnmFwfES7OJuWyIH77Amxm4gvBdEsQQxNehnCXiMjL0Iicn1i8AVYzsbX6bWBc6Uf5jleXHhbr7LOxCGoM7al4Amym9WYAl3vSuINXIsbvspY83+t0uyxgM61fBeC2HZyb3/DuFJa82IvQmICNTPwsYnpgvFbdvARQ+zr0CYDfCttejJORLWe/JOApbfHD8hq9CMAsp2SSPH+TGC1ZKe/1AnaQSXHA62EaPfpLRJg1SeCVDpPwHDE3Z9c5T/rp3MYEbKT1uwm4aBLD7QNoJWn55uzcvr9WwmG7L9hMm8cA7vpJ2e6q7SeXlyOitYq54j9ewCba9VOgwc0m5VPF6o8ErMa7aWMDiGd7Ub4D1XkbwBLhynvRhF4vcU15Jj7LzdMSBpIgvCs+kYdgPpzRsiMAD0yD7/NiYAep8zwRN2dfcFZ5bV93WoNd+iL6jQB+PGpp9nJhySWlAS+CZs7R1ebggTsIvFJh5AB6lDjfnE31bfIcaweiiT79Qia6CeBdtpfjTgPOgV0WPh3+bOgLTqTjpzLocc8GJ17FrQCWI6q1+l2C1DO6FWGo5uDQMmEvFJYcMSkbAmym9Q4Ax088bmU93gxCi4jIe9CInrK1h1Xo3wLDrwGo3fCyhYDXspYc8RIKgPWMPlNj/LusholVYR2YbxfrnSe8tq9D4aktsKx+HQiX+d60dbVjRJPYOGIcbKb1qwHcOrH4FfVWta9/JMrfnk32veQ7nkXQjDnGAgLfDGB33/IAmLHMTsmhOUThCzbT+gsA5gRROEpmC4ivYsYsAv2shtNs1bEsh6u1Bs11MNPmcYDbAuCICjl8LCz5haEveCA55H8AtAoVK/FLhCV/o36Jp+NfjoAeAnB4CHpLqXgHjBaRkPfgOHQHsWO2mXuD+FYQ/yCIfDEZlzFTpuSb6hk1pPUmF1gThnImrLCT8vwhXSsRN6fpN4MKa8lll0Y9+8C8HoRm0eU8jvnIe5YbXlGtt/TGFxJoIQCVWBhaYdAC27J/XwAc8jaQHXFj+47OK1DDHI1xP4A9K4gir9pXuNQ8vBMJos/MxL8PJjWc2juIfDkZBpballQTkcLU+EGAVSZOKIWYFmdT9vWjlU3NTN01x84KAKf5MUTANmas4Ai12nPtLX5kR9dNrI0dwa7WGlJ/M4YrtElY9lGDgF8EuPBHOIU7he3sU2rNNJExLmDmO8r+WxLeBaNVmHJF0PZ1MJ6GTMPu7OZ+xYRzQ+pryqF6X1hynwHAumqMw85vuFhY8s5SXhSSA/NQHWCRHps3gNEstjqPBW5fBw2rPmC6fgkBv2Bgp3JUQnyeFZZUieOqidBVNvjQsCIkI5tFl5w5JqBNiCW2Gue6zKcTeGdmeoVIu09YYkMYPiTa9JNZg9qsDfvj8eSeiEoTjbAVYOl7tuLFBPN8kXJU9k9NSzwTPzTKdAcDqZoaHmWMODIjm8r+VwFW65+hDlP6bdFLwrJrtq6881OY7sT1RSD8BEB0POEq21o0umdvY++HCrBKbptRDYeY6Xg7ZT9bDd1DOlcikthFv5CZbwJo16ra8qFcNMgEjoUgI63/g4DDfMj6qfqUsOTJfgT81DXajbkgXlJF//24M7yuIyypD3ZyzwH4ZlBNZeQ4D57lWM5rYeo3MsYBxHy73zF1mD6U0fWhsGRhUkWJdn0FE35ULeMEvidrOeHo78AUM2dcC7Caehe+kLoshGdEUs4dBHwRE+6uoqNSi0b3Uw1+YBsMMtLGAqLCMuIegfXUTvAOYckr+gFnYkcxayqDp2qFmG7OpuyfBzFgZsxvgLkl3NlmEE+8yzDROXbSVmsvIKyGbsb0bVUZCw/6RNQlIvY+frZszA5zL+T4ljDXSbwjqqymm8fBcp58qx9w/4L7kwC+U5nact0dLhMpqRa0xy5qGTEbv4qYrqnO+LycA5U9J+BfWUsOpZwVABvtxtlErLIoq1m2iKg8aKwMcbM9fgaosIy4bzUdqabu0c1h/yK4OjEU09WuRnXPXTCfKVLOw6MDTKRjX2PSloDxrWoGXwvdxO5Rw/MtPtu2zxgrq38kiz7RyG3sTTqvqGCntE35Yk7r+yWhMEwMY8uqFgxL22B6UaRsdXvAUPks8aQtdiRrmvdMl+Ch5MG8kYiyDBw7EdvZkqET/1AknUeKAu5vi/XVRDgxOLtJLMn4QMTk/qP7mBEbkeZa81i47rpJjClw6Mx0rp2yt0ucLJIfrP8BwHcDW5qUgrRJJO3ZxU4ebQe4oaNhDzeXU4sz6r6cz4sXApo2R8wVKml9u1I0VyHRbpzHxMu96J70ddTGbEpeWopD8WQQtbiS0VcTMG/SAxwbwN9FnzwG34baditaSmbbTOvANJnT1SJQvdy1U2/vuteN4Eh5ghwzK3XMdKaB/DKVijm13qIbZ3/y5OL0bJNUazhjlrL5Yom0fhIDfwIQK6dssjwn0AVZy/bUR5UFrKAlMvHTmGnl55ABJr7eTjqLvX5MngAXILfrpzBB5TnU6zVdXmMOWo/BuFqkpNoL9Fw8Ay5AXqufCBeP1DgNyXMwVayYY6LzBncp/NjxBVgpjrfFvxTR6IlxuB7RT1wh1uVODXRWryXbgij1DVgZmZ7GzjZ0de3VSUGMThwZ3gA3Mj/osQQVZyDABUD9Bxcf83rEaeJALXiqsuabxXR5Lb6Ovkp8Dw5YLW+2GfuTxpsrcaD+ZGkTafkLKz1lPxhXRYCVEjOti6pvNdXkLRTuHL5RrJN3+T5XN4Z/FQEeSGFSJ9UnbiHqYnabbdNpqTSTvhiEigAPHAcIdGFbHbyR95h5mUnOXaMPcIfpW0WAzZpslIYZbqHzepoYy7Lr5Zowm4JSXgYHXBhFxD/ykZOrMl1eBmE6GF8FsFuo6Eor6wFjDYNWxbTY6u5kd2eN7BbMBAac8LgLzYxXNWBhNiVXDw+s0H7DnQ2mo8E8G0TqQEwYeRnqKpiNIN7IrrbR3mr/pdhNJLWCHBiwmY5fA5DKdixR1P1ifIOIyqWe7ntUh2I+jX2FmQ4GaAZczADRngAnCDB54JgDA71E6r4y7gXTNjC/B8I70PjdqGZs7m7s/rhW8LzYCQ44o68F44QiRtTlmUtjeXnDtnlQl7hN6hIMcAcMM6erG0RGJEETI61F+fKeE5xXJzXVYcEHAjxwQfPfhul5ixhXZlNy1edgRxIIBHggp1itLqlDfi2iS7aMZ0dSzy/1/xTE5nq6vGg2AAAAAElFTkSuQmCC"},2:{icon:"data:image/png;base64,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"},1:{icon:"data:image/png;base64,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"}},te=[{name:"默认未开启",icon:"/static/png/wxcut1-3783ec44.png"},{name:"开启自动续费",icon:"/static/png/wxcut2-d18164c9.png"}],le=d({isAutoRenewal:!1,formData:{isAutoRenewal:0,paymentMethod:"",bankCardNo:"",payBank:"",bankBranch:""},formItems:[]}),ne=B((()=>Ae.value.map((e=>({label:e.name,value:e.code})))));g((()=>P.productFactor),(e=>{le.isAutoRenewal=!1,c(e[6])&&(le.isAutoRenewal=!0,(e=>{const a={autoRenewalPaymentMethod:e=>{$.value=e.attributeValueList.map(((e,a)=>(0===a&&(le.formData.paymentMethod=e.code),{...e,...re[e.code]})))},bankCard:e=>{le.formItems=e.attributeValueList.map((e=>({label:e.value,name:e.code,required:!0})))}};le.formItems=[],e.forEach((e=>{var A;null==(A=null==a?void 0:a[e.code])||A.call(a,e)}))})(e[6]))}),{deep:!0,immediate:!0}),g((()=>P.extInfo),(o=>{(function(o){if(null==o)return!0;if(e(o)&&(a(o)||"string"==typeof o||"function"==typeof o.splice||A(o)||r(o)||t(o)))return!o.length;var i=l(o);if("[object Map]"==i||"[object Set]"==i)return!o.size;if(n(o))return!s(o).length;for(var m in o)if(x.call(o,m))return!1;return!0})(o.autoRenewalInfo)||(le.formData={...o.autoRenewalInfo},o.autoRenewalInfo.paymentMethod&&(le.formData.paymentMethod=le.formData.paymentMethod.toString()))}),{deep:!0,immediate:!0});return Z({validate:()=>new Promise(((e,a)=>{const{isAutoRenewal:A,paymentMethod:r}=le.formData;!le.isAutoRenewal||[C.NO,0,null].includes(le.formData.isAutoRenewal)||["2","3"].includes(le.formData.paymentMethod)?!le.isAutoRenewal||[0,null].includes(A)?e({}):A===C.NO?e({isAutoRenewal:C.NO}):e({isAutoRenewal:A,paymentMethod:r}):ee.value[2].validate().then((()=>{!le.formData.bankCardNo||N(le.formData.bankCardNo)?e(le.formData):h("请输入正确的银行卡号")}))}))}),(e,a)=>{const A=q,r=b,t=I,l=Y,n=y;return w(le).isAutoRenewal?(p(),v("div",Q,[T,D("div",K,[D("img",{src:w("data:image/png;base64,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")},null,8,S),D("div",{class:E({btn:!0,"is-active":w(le).formData.isAutoRenewal===w(C).YES}),onClick:a[0]||(a[0]=e=>w(le).formData.isAutoRenewal=w(C).YES)}," 免费开通 ",2),D("div",{class:E({btn:!0,"is-active":w(le).formData.isAutoRenewal===w(C).NO}),onClick:a[1]||(a[1]=e=>w(le).formData.isAutoRenewal=w(C).NO)}," 暂不开通 ",2)]),V,D("div",{class:E({"radio-group":!0,"is-pay":w(le).formData.isAutoRenewal===w(C).YES})},[X(n,{modelValue:w(le).formData.paymentMethod,"onUpdate:modelValue":a[2]||(a[2]=e=>w(le).formData.paymentMethod=e)},{default:f((()=>[(p(!0),v(J,null,L(w($),((e,a)=>(p(),v("div",{key:a,class:"radio-group-item"},[D("div",O,[D("div",j,[D("img",{src:e.icon},null,8,W),F(" "+M(e.value),1)]),X(A,{name:e.code,onClick:a=>w(le).formData.paymentMethod=e.code},null,8,["name","onClick"])]),D("div",{class:E({prefix:!0,card:!0,show:w(le).formData.paymentMethod===e.code&&"3"===e.code})},[k,D("section",null,[(p(),v(J,null,L(te,((e,a)=>D("div",{key:a,class:"node-item"},[D("img",{src:e.icon},null,8,G),D("div",z,M(e.name),1)]))),64))])],2),D("div",{class:E({prefix:!0,form:!0,show:w(le).formData.paymentMethod===e.code&&"1"===e.code})},[H,X(l,{ref_for:!0,ref_key:"formBackRef",ref:ee,"show-error":"","show-error-message":!1},{default:f((()=>[(p(!0),v(J,null,L(w(le).formItems,(e=>(p(),v(J,{key:e.name},["payBank"===e.name?(p(),R(r,{key:0,modelValue:w(le).formData[e.name],"onUpdate:modelValue":a=>w(le).formData[e.name]=a,name:e.name,label:e.label,required:e.required,"data-source":w(ne)},null,8,["modelValue","onUpdate:modelValue","name","label","required","data-source"])):(p(),R(t,{key:1,modelValue:w(le).formData[e.name],"onUpdate:modelValue":a=>w(le).formData[e.name]=a,name:e.name,label:e.label,maxlength:18,type:"number",required:e.required},null,8,["modelValue","onUpdate:modelValue","name","label","required"]))],64)))),128))])),_:1},512)],2)])))),128))])),_:1},8,["modelValue"])],2)])):U("",!0)}}});export{P as default};
