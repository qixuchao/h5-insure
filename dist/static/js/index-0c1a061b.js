import{_ as e}from"./empty-ae586b6c.js";import{_ as t}from"./index-deb4ddfb.js";const s={class:"empty-img"},l=["src"],m={class:"empty-title"},a={class:"empty-btn"};var i=t(Vue.defineComponent({__name:"index",props:{emptyImg:{type:String,default:""},title:{type:String,default:"暂无内容哦~"},desc:{type:String,default:""},emptyClass:{type:String,default:""}},emits:["currentIndex"],setup(t,{emit:i}){const n=!!Vue.useSlots().emptyBtn;return(i,r)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:Vue.normalizeClass(["com-za-empty",[t.emptyClass||""]])},[Vue.createElementVNode("div",s,[Vue.createElementVNode("img",{src:t.emptyImg||Vue.unref(e),alt:""},null,8,l)]),Vue.createElementVNode("p",m,Vue.toDisplayString(t.title),1),Vue.withDirectives(Vue.createElementVNode("p",{class:"empty-desc"},Vue.toDisplayString(t.desc),513),[[Vue.vShow,t.desc]]),Vue.withDirectives(Vue.createElementVNode("div",a,[Vue.renderSlot(i.$slots,"emptyBtn",{},void 0,!0)],512),[[Vue.vShow,n]])],2))}}),[["__scopeId","data-v-4b537dc2"]]);export{i as P};
