import{i as e}from"./echarts-3d5e6073.js";import{d as t,aB as a,z as o,y as i,aM as s,a8 as r,c as n,g as d,i as l}from"./index-fe8152f2.js";const p={id:"com-chart",style:{width:"100%"}},u=[l("div",{id:"funnel",style:{height:"350px"}},null,-1)],m=t({props:{min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:100},current:{type:Number,required:!1,default:0},data:{type:Array,required:!1,default:()=>[]}},setup(t){const l=t,{min:m,max:c,current:y,data:f}=a(l),x=o({sliderVal:1,option:{color:["#0d6efe","#2ABE21","#FF5840","#0DCCFE","#8D40FF","#8D40FF","#C500CF","#FF9A26"],tooltip:{trigger:"axis",color:"#393D46",backgroundColor:"rgba(255,255,255,0.9)",position:["25%","7%"],textStyle:{fontSize:12}},legend:{data:[]},grid:{left:"3%",right:"4%",bottom:"3%",top:"35%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{},series:[]}});let h;const g=e=>{let t=0;x.option.xAxis.data.forEach(((a,o)=>{a===e&&(t=o)})),h.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t})};return i((()=>{setTimeout((()=>{(()=>{const t=document.getElementById("com-chart"),a=document.getElementById("funnel");a.style.width=`${null==t?void 0:t.offsetWidth}px`,h=e(a);let o=[];o=f.value.map((e=>e.name)),f.value.map((e=>{x.option.series.push({smooth:!0,showSymbol:!1,name:e.name,type:"line",data:e.itemList})}));const i=[];for(let e=m.value;e<=c.value;e++)i.push(e);x.option.legend.data=o,x.option.xAxis.data=i,x.option&&h.setOption(x.option),setTimeout((()=>{g(l.current)}))})()}),0)})),s((()=>{h.dispose()})),r(y,(e=>{g(e)})),(e,t)=>(n(),d("div",p,u))}});export{m as _};
