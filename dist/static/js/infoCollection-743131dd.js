import{J as a}from"./index-9877cd6a.js";const e={SELF:"1",MATE:"2",CHILD:"3",PARENT:"4"},l={LEGAL:"1",SPECIFY:"2"},s={HAS:"1",NO:"2"},E="1",A="2",R="3",N="4",t="201",o="202",r={[A]:"free",[E]:"short",[R]:"netsale",[N]:"short",[t]:"long/productDetail",[o]:"long/productDetail"},n={FREE:"free",SHORT:"short",NETSALE:"netsale",UPGRADE:"short",LONG:"long",NIANJIN:"long"},u=a=>{switch(`${a}`){case A:return"free";case R:return"netsale";case E:case N:return"short";default:return"long"}};a([{label:"free",value:"free"},{label:"common",value:"common"},{label:"package",value:"package"}]);const c={INSURE:"1",UN_INSURE:"2"},T=[{label:"投保",value:c.INSURE},{label:"不投保",value:c.UN_INSURE}];a(T);const I={SINGLE:1,YEAR:2,MONTH:5};a([{label:"一次交清",value:I.YEAR},{label:"按月交费（12期）",value:I.MONTH}]);const Y={WORD:"1",IMAGE:"2"};a([{value:Y.WORD,label:"文字"},{value:Y.IMAGE,label:"图片"}]);const O={SINGLE:"1",YEAR:"2",HALF_YEAR:"3",QUARTER:"4",MONTH:"5"};a([{label:"趸交",value:O.SINGLE},{label:"年交",value:O.YEAR},{label:"半年交",value:O.HALF_YEAR},{label:"季交",value:O.QUARTER},{label:"月交",value:O.MONTH}]);const S={CURRENT_DAY:"1",NEXT_DAY:"2",CUSTOM_DAY:"3"},b={CURRENT_DAY:"1",NEXT_DAY:"2"},L="ORDER_DETAIL_KEY",v={STEP:"1",FIXED:"3",COPY:"2"},D={YUAN:"1",COPY:"2",MONTH_SALARY:"3",MILLION:"4"};export{l as B,Y as C,T as I,L as O,I as P,e as R,s as S,r as T,v as a,D as b,c,O as d,S as e,b as f,n as g,u as h};
