import{g as t}from"./utils-f99858fa.js";import{r as a,R as e,Z as l}from"./index-b419c4de.js";var n=(n,i)=>{const m=a([]),u=a(0),r=a([]);return e([()=>{var t;return null==(t=n.value)?void 0:t.planCode},()=>i.value],(([a,e])=>{let n=null;if(null==e?void 0:e.length){const t=(e||[]).find((t=>t.planCode===a||!t.planCode));t&&(n=null==t?void 0:t.productMaterialMap)}n?(m.value=Object.keys(n).map((a=>({attachmentName:a,attachmentList:n[a].map((a=>({...a,materialSource:t(`${null==a?void 0:a.materialSource}`,null==a?void 0:a.materialContent)})))}))),r.value=m.value.map((t=>({attachmentName:t.attachmentName,attachmentList:t.attachmentList.filter((t=>t.popUpFlag===l.YES))}))).filter((t=>t.attachmentList.length)),u.value=r.value.map((t=>({attachmentName:t.attachmentName,attachmentList:t.attachmentList.filter((t=>t.mustReadFlag===l.YES))}))).filter((t=>t.attachmentList.length)).length||0):m.value=[]}),{deep:!0,immediate:!0}),{fileList:m,popupFileList:r,mustReadFileCount:u}};export{n as u};
