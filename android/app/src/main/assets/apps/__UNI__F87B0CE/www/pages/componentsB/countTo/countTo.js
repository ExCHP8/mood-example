!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1021)}({0:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a,u,s,l){var c,d="function"==typeof t?t.options:t;if(s){d.components||(d.components={});var f=Object.prototype.hasOwnProperty;for(var p in s)f.call(s,p)&&!f.call(d.components,p)&&(d.components[p]=s[p])}if(l&&((l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(d.mixins||(d.mixins=[])).push(l)),e&&(d.render=e,d.staticRenderFns=r,d._compiled=!0),n&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=c):o&&(c=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(d.functional){d._injectStyles=c;var h=d.render;d.render=function(t,e){return c.call(e),h(t,e)}}else{var m=d.beforeCreate;d.beforeCreate=m?[].concat(m,c):[c]}return{exports:t,options:d}}r.d(e,"a",(function(){return n}))},1:function(t,e){t.exports={"u-line-1":{lines:1,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-2":{lines:2,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-3":{lines:3,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-4":{lines:4,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-5":{lines:5,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-border":{borderWidth:"0.5",borderColor:"#dadbde",borderStyle:"solid"},"u-border-top":{borderTopWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid"},"u-border-left":{borderLeftWidth:"0.5",borderColor:"#dadbde",borderLeftStyle:"solid"},"u-border-right":{borderRightWidth:"0.5",borderColor:"#dadbde",borderRightStyle:"solid"},"u-border-bottom":{borderBottomWidth:"0.5",borderColor:"#dadbde",borderBottomStyle:"solid"},"u-border-top-bottom":{borderTopWidth:"0.5",borderBottomWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid",borderBottomStyle:"solid"},"u-reset-button":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0},"u-hover-class":{opacity:.7},"u-primary-light":{color:"#ecf5ff"},"u-warning-light":{color:"#fdf6ec"},"u-success-light":{color:"#f5fff0"},"u-error-light":{color:"#fef0f0"},"u-info-light":{color:"#f4f4f5"},"u-primary-light-bg":{backgroundColor:"#ecf5ff"},"u-warning-light-bg":{backgroundColor:"#fdf6ec"},"u-success-light-bg":{backgroundColor:"#f5fff0"},"u-error-light-bg":{backgroundColor:"#fef0f0"},"u-info-light-bg":{backgroundColor:"#f4f4f5"},"u-primary-dark":{color:"#398ade"},"u-warning-dark":{color:"#f1a532"},"u-success-dark":{color:"#53c21d"},"u-error-dark":{color:"#e45656"},"u-info-dark":{color:"#767a82"},"u-primary-dark-bg":{backgroundColor:"#398ade"},"u-warning-dark-bg":{backgroundColor:"#f1a532"},"u-success-dark-bg":{backgroundColor:"#53c21d"},"u-error-dark-bg":{backgroundColor:"#e45656"},"u-info-dark-bg":{backgroundColor:"#767a82"},"u-primary-disabled":{color:"#9acafc"},"u-warning-disabled":{color:"#f9d39b"},"u-success-disabled":{color:"#a9e08f"},"u-error-disabled":{color:"#f7b2b2"},"u-info-disabled":{color:"#c4c6c9"},"u-primary":{color:"#3c9cff"},"u-warning":{color:"#f9ae3d"},"u-success":{color:"#5ac725"},"u-error":{color:"#f56c6c"},"u-info":{color:"#909399"},"u-primary-bg":{backgroundColor:"#3c9cff"},"u-warning-bg":{backgroundColor:"#f9ae3d"},"u-success-bg":{backgroundColor:"#5ac725"},"u-error-bg":{backgroundColor:"#f56c6c"},"u-info-bg":{backgroundColor:"#909399"},"u-main-color":{color:"#303133"},"u-content-color":{color:"#606266"},"u-tips-color":{color:"#909193"},"u-light-color":{color:"#c0c4cc"},"u-block":{paddingTop:"14",paddingRight:"14",paddingBottom:"14",paddingLeft:"14"},"u-block__section":{marginBottom:"10"},"u-block__title":{marginTop:"10",fontSize:"15",color:"#606266",marginBottom:"10"},"u-cell-icon":{width:"36rpx",height:"36rpx",marginRight:"8rpx"},"u-page":{paddingTop:"15",paddingRight:"15",paddingBottom:"40",paddingLeft:"15"},"u-demo-block":{flex:1,marginBottom:"23"},"u-demo-block__content":{flexDirection:"column"},"u-demo-block__title":{fontSize:"14",color:"#8f9ca2",marginBottom:"8",flexDirection:"row"},"@VERSION":2}},10:function(t,e){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){throw r}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}},1021:function(t,e,r){"use strict";r.r(e);r(8),r(10);var n=r(324);n.default.mpType="page",n.default.route="pages/componentsB/countTo/countTo",n.default.el="#root",new Vue(n.default)},1022:function(t,e,r){"use strict";r.r(e);var n=r(777),o=r(504);for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);var a=r(0);var u=Object(a.a)(o.default,n.b,n.c,!1,null,"e03db072","7ac889da",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(894).default,this.options.style):Object.assign(this.options.style,r(894).default)}).call(u),e.default=u.exports},1023:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{startVal:{type:[String,Number],default:uni.$u.props.countTo.startVal},endVal:{type:[String,Number],default:uni.$u.props.countTo.endVal},duration:{type:[String,Number],default:uni.$u.props.countTo.duration},autoplay:{type:Boolean,default:uni.$u.props.countTo.autoplay},decimals:{type:[String,Number],default:uni.$u.props.countTo.decimals},useEasing:{type:Boolean,default:uni.$u.props.countTo.useEasing},decimal:{type:[String,Number],default:uni.$u.props.countTo.decimal},color:{type:String,default:uni.$u.props.countTo.color},fontSize:{type:[String,Number],default:uni.$u.props.countTo.fontSize},bold:{type:Boolean,default:uni.$u.props.countTo.bold},separator:{type:String,default:uni.$u.props.countTo.separator}}};e.default=n},124:function(t,e,r){"use strict";r.r(e);var n=r(125),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a},125:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,o=(n=r(257))&&n.__esModule?n:{default:n};var i={name:"u-grid",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{index:0,width:0}},watch:{parentData:function(){this.children.length&&this.children.map((function(t){"function"==typeof t.updateParentData&&t.updateParentData()}))}},created:function(){this.children=[]},computed:{parentData:function(){return[this.hoverClass,this.col,this.size,this.border]},gridStyle:function(){var t={};switch(this.align){case"left":t.justifyContent="flex-start";break;case"center":t.justifyContent="center";break;case"right":t.justifyContent="flex-end";break;default:t.justifyContent="flex-start"}return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},methods:{childClick:function(t){this.$emit("click",t)}}};e.default=i},126:function(t,e){t.exports={"u-grid":{justifyContent:"center",flexDirection:"row",flexWrap:"wrap",alignItems:"center"},"@VERSION":2}},127:function(t,e,r){"use strict";r.r(e);var n=r(128),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a},128:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(r(68)),o=i(r(259));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e,r,n,o,i,a){try{var u=t[i](a),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(n,o)}var u={name:"u-grid-item",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{parentData:{col:3,border:!0},width:0,classes:[]}},mounted:function(){this.init()},computed:{itemStyle:function(){var t={background:this.bgColor,width:this.width};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},methods:{init:function(){var t=this;uni.$on("$uGridItem",(function(){t.gridItemClasses()})),this.updateParentData(),this.$nextTick((function(){this.getItemWidth()})),uni.$emit("$uGridItem"),this.gridItemClasses()},updateParentData:function(){this.getParentData("u-grid")},clickHandler:function(){var t,e=this,r=this.name,n=null===(t=this.parent)||void 0===t?void 0:t.children;n&&null===this.name&&(r=n.findIndex((function(t){return t===e}))),this.parent&&this.parent.childClick(r),this.$emit("click",r)},getItemWidth:function(){var t,e=this;return(t=n.default.mark((function t(){var r,o;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=0,!e.parent){t.next=6;break}return t.next=4,e.getParentWidth();case 4:o=t.sent,r=o/Number(e.parentData.col)+"px";case 6:e.width=r;case 7:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function u(t){a(i,n,o,u,s,"next",t)}function s(t){a(i,n,o,u,s,"throw",t)}u(void 0)}))})()},getParentWidth:function(){var e=this,r=t("dom");return new Promise((function(t){r.getComponentRect(e.parent.$refs["u-grid"],(function(e){t(e.size.width)}))}))},gridItemClasses:function(){var t=this;if(this.parentData.border){var e=[];this.parent.children.map((function(r,n){if(t===r){var o=t.parent.children.length;(n+1)%t.parentData.col!=0&&n+1!==o&&e.push("u-border-right"),n<o-(o%t.parentData.col==0?t.parentData.col:o%t.parentData.col)&&e.push("u-border-bottom")}})),this.classes=e}}},beforeDestroy:function(){uni.$off("$uGridItem")}};e.default=u}).call(this,r(33).default)},129:function(t,e){t.exports={"u-grid-item":{alignItems:"center",justifyContent:"center",position:"relative",flexDirection:"column"},"u-grid-item--hover-class":{opacity:.5},"u-border-right":{borderRightWidth:"0.5",borderColor:"#dadbde"},"u-border-bottom":{borderBottomWidth:"0.5",borderColor:"#dadbde"},"@VERSION":2}},151:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){}));var n=function(){var t=this.$createElement;return(this._self._c||t)("view",{ref:"u-grid",staticClass:["u-grid"],style:[this.gridStyle]},[this._t("default")],2)},o=[]},152:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){}));var n=function(){var t=this.$createElement;return(this._self._c||t)("view",{staticClass:["u-grid-item"],class:this.classes,style:[this.itemStyle],attrs:{hoverStayTime:200},on:{click:this.clickHandler}},[this._t("default")],2)},o=[]},243:function(t,e,r){"use strict";r.r(e);var n=r(126),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a},244:function(t,e,r){"use strict";r.r(e);var n=r(129),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a},256:function(t,e,r){"use strict";r.r(e);var n=r(151),o=r(124);for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);var a=r(0);var u=Object(a.a)(o.default,n.b,n.c,!1,null,"b8c43cdc","1ca08cba",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(243).default,this.options.style):Object.assign(this.options.style,r(243).default)}).call(u),e.default=u.exports},257:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{col:{type:[String,Number],default:uni.$u.props.grid.col},border:{type:Boolean,default:uni.$u.props.grid.border},align:{type:String,default:uni.$u.props.grid.align}}};e.default=n},258:function(t,e,r){"use strict";r.r(e);var n=r(152),o=r(127);for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);var a=r(0);var u=Object(a.a)(o.default,n.b,n.c,!1,null,"b1f995c2","7d9ee886",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(244).default,this.options.style):Object.assign(this.options.style,r(244).default)}).call(u),e.default=u.exports},259:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{name:{type:[String,Number,null],default:uni.$u.props.gridItem.name},bgColor:{type:String,default:uni.$u.props.gridItem.bgColor}}};e.default=n},324:function(t,e,r){"use strict";var n=r(727),o=r(507),i=r(0);var a=Object(i.a)(o.default,n.b,n.c,!1,null,null,"7fa8aeeb",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(895).default,this.options.style):Object.assign(this.options.style,r(895).default)}).call(a),e.default=a.exports},33:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return weex.requireModule(t)}},504:function(t,e,r){"use strict";r.r(e);var n=r(505),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a},505:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,o=(n=r(1023))&&n.__esModule?n:{default:n};var i={name:"u-count-to",data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:Number(this.duration),startTime:null,timestamp:null,remaining:null,rAF:null,lastTime:0}},mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start()},methods:{easingFn:function(t,e,r,n){return r*(1-Math.pow(2,-10*t/n))*1024/1023+e},requestAnimationFrame:function(t){var e=(new Date).getTime(),r=Math.max(0,16-(e-this.lastTime)),n=setTimeout((function(){t(e+r)}),r);return this.lastTime=e+r,n},cancelAnimationFrame:function(t){clearTimeout(t)},start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=this.requestAnimationFrame(this.count)},reStart:function(){this.paused?(this.resume(),this.paused=!1):(this.stop(),this.paused=!0)},stop:function(){this.cancelAnimationFrame(this.rAF)},resume:function(){this.remaining&&(this.startTime=0,this.localDuration=this.remaining,this.localStartVal=this.printVal,this.requestAnimationFrame(this.count))},reset:function(){this.startTime=null,this.cancelAnimationFrame(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal)||0,e<this.localDuration?this.rAF=this.requestAnimationFrame(this.count):this.$emit("end")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=(t=Number(t)).toFixed(Number(this.decimals));var e=(t+="").split("."),r=e[0],n=e.length>1?this.decimal+e[1]:"",o=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;o.test(r);)r=r.replace(o,"$1"+this.separator+"$2");return r+n},destroyed:function(){this.cancelAnimationFrame(this.rAF)}}};e.default=i},506:function(t,e){t.exports={"u-count-num":{textAlign:"center"},"@VERSION":2}},507:function(t,e,r){"use strict";var n=r(508),o=r.n(n);e.default=o.a},508:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{value:3e3,startVal1:300,startVal2:100,endVal:10.55,decimals:2,startVal3:2e3,endVal2:1542,endVal3:3e3,autoplay:!1,color:"#FF0000",fontSize:40}},onLoad:function(){},methods:{start:function(){this.$refs.uCountTo.start()},paused:function(){this.$refs.uCountTo.stop()},resume:function(){this.$refs.uCountTo.resume()},end:function(){t("log","end"," at pages/componentsB/countTo/countTo.nvue:142")}}};e.default=r}).call(this,r(51).default)},509:function(t,e){t.exports={"u-demo-block__content":{flexDirection:"row",flexWrap:"wrap",alignItems:"center"},"u-grid-slot":{borderRadius:"100",borderColor:"#dbfbdb",borderWidth:"2",flexDirection:"row"},"u-grid-slot__circle":{width:"50",height:"50",backgroundColor:"#dbfbdb",borderRadius:"100",justifyContent:"center",alignItems:"center",marginTop:"2",marginRight:"2",marginBottom:"2",marginLeft:"2"},"u-grid-slot__circle__text":{color:"#19be6b",fontSize:"13"},"@VERSION":2}},51:function(t,e,r){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"==typeof __channelId__&&__channelId__}function i(t,e){switch(n(e)){case"Function":return"function() { [native code] }";default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];console[t].apply(console,r)},e.default=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var a=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[a].apply(console,e);var u=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,i)+"---END:JSON---"}catch(r){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var r=n(t).toUpperCase();t="NUMBER"===r||"BOOLEAN"===r?"---BEGIN:"+r+"---"+t+"---END:"+r+"---":String(t)}return t})),s="";if(u.length>1){var l=u.pop();s=u.join("---COMMA---"),0===l.indexOf(" at ")?s+=l:s+="---COMMA---"+l}else s=u[0];console[a](s)}},68:function(t,e,r){t.exports=r(84)},727:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var n={uCountTo:r(1022).default,uGrid:r(256).default,uGridItem:r(258).default},o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[r("view",{staticClass:["u-page"]},[r("view",{staticClass:["u-demo-block"]},[r("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u57fa\u7840\u529f\u80fd")]),r("view",{staticClass:["u-demo-block__content"]},[r("view",{staticClass:["u-page__tag-item"]},[r("u-count-to",{attrs:{endVal:t.value},on:{end:t.end}})],1)])]),r("view",{staticClass:["u-demo-block"]},[r("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5012\u8ba1\u6570")]),r("view",{staticClass:["u-demo-block__content"]},[r("view",{staticClass:["u-page__tag-item"]},[r("u-count-to",{attrs:{startVal:t.startVal1}})],1)])]),r("view",{staticClass:["u-demo-block"]},[r("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u663e\u793a\u5c0f\u6570\u4f4d")]),r("view",{staticClass:["u-demo-block__content"]},[r("view",{staticClass:["u-page__tag-item"]},[r("u-count-to",{attrs:{startVal:t.startVal2,endVal:t.endVal,decimals:t.decimals}})],1)])]),r("view",{staticClass:["u-demo-block"]},[r("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5343\u5206\u4f4d\u5206\u9694\u7b26")]),r("view",{staticClass:["u-demo-block__content"]},[r("view",{staticClass:["u-page__tag-item"]},[r("u-count-to",{attrs:{startVal:t.startVal3,endVal:t.endVal2,separator:",",decimals:t.decimals}})],1)])]),r("view",{staticClass:["u-demo-block"]},[r("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u81ea\u5b9a\u4e49\u63a7\u5236")]),r("view",{staticClass:["u-demo-block__content"]},[r("view",{staticClass:["u-page__tag-item"]},[r("u-count-to",{ref:"uCountTo",attrs:{endVal:t.endVal3,autoplay:t.autoplay}})],1)]),r("view",{staticClass:["u-demo-block__content"]},[r("view",{staticStyle:{flex:"1"}},[r("u-grid",{attrs:{border:!0,align:"center",customStyle:"margin-top: 20px;margin-bottom: 20"}},[r("u-grid-item",{on:{click:t.start}},[r("view",{staticClass:["u-grid-slot"]},[r("view",{staticClass:["u-grid-slot__circle"]},[r("u-text",{staticClass:["u-grid-slot__circle__text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5f00\u59cb")])])])]),r("u-grid-item",{on:{click:t.paused}},[r("view",{staticClass:["u-grid-slot"]},[r("view",{staticClass:["u-grid-slot__circle"]},[r("u-text",{staticClass:["u-grid-slot__circle__text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u6682\u505c")])])])]),r("u-grid-item",{on:{click:t.resume}},[r("view",{staticClass:["u-grid-slot"]},[r("view",{staticClass:["u-grid-slot__circle"]},[r("u-text",{staticClass:["u-grid-slot__circle__text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u7ee7\u7eed")])])])])],1)],1)])]),r("view",{staticClass:["u-demo-block"]},[r("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u81ea\u5b9a\u4e49")]),r("view",{staticClass:["u-demo-block__content"]},[r("view",{staticClass:["u-page__tag-item"]},[r("u-count-to",{attrs:{endVal:t.value,color:"#909399",fontSize:t.fontSize,bold:!0}})],1)])])])])},i=[]},777:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){}));var n=function(){var t=this.$createElement;return(this._self._c||t)("u-text",{staticClass:["u-count-num"],style:{fontSize:this.$u.addUnit(this.fontSize),fontWeight:this.bold?"bold":"normal",color:this.color},appendAsTree:!0,attrs:{append:"tree"}},[this._v(this._s(this.displayValue))])},o=[]},8:function(t,e,r){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(r(9).default,Vue.prototype.__$appStyle__)},84:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new V(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=b(a,r);if(u){if(u===c)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===c)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var c={};function d(){}function f(){}function p(){}var h={};h[o]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(C([])));g&&g!==e&&r.call(g,o)&&(h=g);var y=p.prototype=d.prototype=Object.create(h);function v(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,u){var s=l(t[o],t,i);if("throw"!==s.type){var c=s.arg,d=c.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(d).then((function(t){c.value=t,a(c)}),(function(t){return n("throw",t,a,u)}))}u(s.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return c;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,c;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,c):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,c)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function V(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function C(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=y.constructor=p,p.constructor=f,f.displayName=u(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,a,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},v(_.prototype),_.prototype[i]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},v(y),u(y,a,"Generator"),y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,V.prototype={constructor:V,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,c):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),c},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),c}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),c}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},894:function(t,e,r){"use strict";r.r(e);var n=r(506),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a},895:function(t,e,r){"use strict";r.r(e);var n=r(509),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a},9:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a}});