import{E as a}from"./index-48c47aad.js";const e={SELF:"1",MATE:"2",CHILD:"3",PARENT:"4"},l={LEGAL:"1",SPECIFY:"2"},s={HAS:"1",NO:"2"},E="1",t="2",u="3",o="4",r="201",N="202",n={[t]:"free",[E]:"short",[u]:"netsale",[o]:"short",[r]:"long/productDetail",[N]:"long/productDetail"},A={FREE:"free",SHORT:"short",NETSALE:"netsale",UPGRADE:"short",LONG:"long",NIANJIN:"long"},R=a=>{switch(`${a}`){case t:return"free";case u:return"netsale";case E:case o:return"short";default:return"long"}};a([{label:"free",value:"free"},{label:"common",value:"common"},{label:"package",value:"package"}]);const b={INSURE:"1",UN_INSURE:"2"},c=[{label:"投保",value:b.INSURE},{label:"不投保",value:b.UN_INSURE}];a(c);const v={SINGLE:1,YEAR:2,MONTH:5};a([{label:"一次交清",value:v.YEAR},{label:"按月交费（12期）",value:v.MONTH}]);const I={WORD:"1",IMAGE:"2"};a([{value:I.WORD,label:"文字"},{value:I.IMAGE,label:"图片"}]);a([{label:"趸交",value:"1"},{label:"年交",value:"2"},{label:"半年交",value:"3"},{label:"季交",value:"4"},{label:"月交",value:"5"}]);const T={CURRENT_DAY:"1",NEXT_DAY:"2",CUSTOM_DAY:"3"},D={CURRENT_DAY:"1",NEXT_DAY:"2"},O="ORDER_DETAIL_KEY",S={YUAN:"1",COPY:"2",MONTH_SALARY:"3",MILLION:"4"};a([{value:"1",label:"年"},{value:"2",label:"半年"},{value:"3",label:"季度"},{value:"4",label:"月度"}]);export{l as B,I as C,c as I,O,v as P,e as R,s as S,n as T,S as a,b,T as c,D as d,A as e,R as g};
