(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-order"],{"03a2":function(t,e,a){"use strict";a.r(e);var i=a("5517"),d=a("7ee3");for(var n in d)"default"!==n&&function(t){a.d(e,t,function(){return d[t]})}(n);a("eb54");var o=a("2877"),r=Object(o["a"])(d["default"],i["a"],i["b"],!1,null,"5eaddd7d",null);e["default"]=r.exports},5517:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"navbar"},t._l(t.navList,function(e,i){return a("v-uni-view",{key:i,staticClass:"nav-item",class:{current:t.tabCurrentIndex===i},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(i)}}},[t._v(t._s(e.text))])}),1),a("v-uni-swiper",{staticClass:"swiper-box",attrs:{current:t.tabCurrentIndex,duration:"300"},on:{change:function(e){e=t.$handleEvent(e),t.changeTab(e)}}},t._l(t.navList,function(e,i){return a("v-uni-swiper-item",{key:i,staticClass:"tab-content"},[a("v-uni-scroll-view",{staticClass:"list-scroll-content",attrs:{"scroll-y":""},on:{scrolltolower:function(e){e=t.$handleEvent(e),t.loadData(e)}}},[!0===e.loaded&&0===e.orderList.length?a("empty"):t._e(),t._l(e.orderList,function(e,i){return a("v-uni-view",{key:i,staticClass:"order-item"},[a("v-uni-view",{staticClass:"i-top b-b"},[a("v-uni-text",{staticClass:"time"},[t._v(t._s(e.time))]),a("v-uni-text",{staticClass:"state",style:{color:e.stateTipColor}},[t._v(t._s(e.stateTip))]),9===e.state?a("v-uni-text",{staticClass:"del-btn yticon icon-iconfontshanchu1",on:{click:function(e){e=t.$handleEvent(e),t.deleteOrder(i)}}}):t._e()],1),e.goodsList.length>1?a("v-uni-scroll-view",{staticClass:"goods-box",attrs:{"scroll-x":""}},t._l(e.goodsList,function(t,e){return a("v-uni-view",{key:e,staticClass:"goods-item"},[a("v-uni-image",{staticClass:"goods-img",attrs:{src:t.image,mode:"aspectFill"}})],1)}),1):t._e(),t._l(e.goodsList,function(i,d){return 1===e.goodsList.length?a("v-uni-view",{key:d,staticClass:"goods-box-single"},[a("v-uni-image",{staticClass:"goods-img",attrs:{src:i.image,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"right"},[a("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(i.title))]),a("v-uni-text",{staticClass:"attr-box"},[t._v(t._s(i.attr)+"  x "+t._s(i.number))]),a("v-uni-text",{staticClass:"price"},[t._v(t._s(i.price))])],1)],1):t._e()}),a("v-uni-view",{staticClass:"price-box"},[t._v("共"),a("v-uni-text",{staticClass:"num"},[t._v("7")]),t._v("件商品 实付款"),a("v-uni-text",{staticClass:"price"},[t._v("143.7")])],1),9!=e.state?a("v-uni-view",{staticClass:"action-box b-t"},[a("v-uni-button",{staticClass:"action-btn",on:{click:function(a){a=t.$handleEvent(a),t.cancelOrder(e)}}},[t._v("取消订单")]),a("v-uni-button",{staticClass:"action-btn recom"},[t._v("立即支付")])],1):t._e()],2)}),a("uni-load-more",{attrs:{status:e.loadingType}})],2)],1)}),1)],1)},d=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return d})},"55f8":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.content[data-v-5eaddd7d],uni-page-body[data-v-5eaddd7d]{background:#f8f8f8;height:100%}.swiper-box[data-v-5eaddd7d]{height:calc(100% - 40px)}.list-scroll-content[data-v-5eaddd7d]{height:100%}.navbar[data-v-5eaddd7d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:40px;padding:0 5px;background:#fff;-webkit-box-shadow:0 1px 5px rgba(0,0,0,.06);box-shadow:0 1px 5px rgba(0,0,0,.06);position:relative;z-index:10}.navbar .nav-item[data-v-5eaddd7d]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;font-size:15px;color:#303133;position:relative}.navbar .nav-item.current[data-v-5eaddd7d]{color:#fa436a}.navbar .nav-item.current[data-v-5eaddd7d]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:44px;height:0;border-bottom:2px solid #fa436a}.uni-swiper-item[data-v-5eaddd7d]{height:auto}.order-item[data-v-5eaddd7d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-left:%?30?%;background:#fff;margin-top:%?16?%\n  /* 多条商品 */\n  /* 单条商品 */}.order-item .i-top[data-v-5eaddd7d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?80?%;padding-right:%?30?%;font-size:%?28?%;color:#303133;position:relative}.order-item .i-top .time[data-v-5eaddd7d]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.order-item .i-top .state[data-v-5eaddd7d]{color:#fa436a}.order-item .i-top .del-btn[data-v-5eaddd7d]{padding:%?10?% 0 %?10?% %?36?%;font-size:%?32?%;color:#909399;position:relative}.order-item .i-top .del-btn[data-v-5eaddd7d]:after{content:"";width:0;height:%?30?%;border-left:1px solid #dcdfe6;position:absolute;left:%?20?%;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.order-item .goods-box[data-v-5eaddd7d]{height:%?160?%;padding:%?20?% 0;white-space:nowrap}.order-item .goods-box .goods-item[data-v-5eaddd7d]{width:%?120?%;height:%?120?%;display:inline-block;margin-right:%?24?%}.order-item .goods-box .goods-img[data-v-5eaddd7d]{display:block;width:100%;height:100%}.order-item .goods-box-single[data-v-5eaddd7d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?20?% 0}.order-item .goods-box-single .goods-img[data-v-5eaddd7d]{display:block;width:%?120?%;height:%?120?%}.order-item .goods-box-single .right[data-v-5eaddd7d]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 %?30?% 0 %?24?%;overflow:hidden}.order-item .goods-box-single .right .title[data-v-5eaddd7d]{font-size:%?30?%;color:#303133;line-height:1}.order-item .goods-box-single .right .attr-box[data-v-5eaddd7d]{font-size:%?26?%;color:#909399;padding:%?10?% %?12?%}.order-item .goods-box-single .right .price[data-v-5eaddd7d]{font-size:%?30?%;color:#303133}.order-item .goods-box-single .right .price[data-v-5eaddd7d]:before{content:"\\FFE5";font-size:%?24?%;margin:0 %?2?% 0 %?8?%}.order-item .price-box[data-v-5eaddd7d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline;padding:%?20?% %?30?%;font-size:%?26?%;color:#909399}.order-item .price-box .num[data-v-5eaddd7d]{margin:0 %?8?%;color:#303133}.order-item .price-box .price[data-v-5eaddd7d]{font-size:%?32?%;color:#303133}.order-item .price-box .price[data-v-5eaddd7d]:before{content:"\\FFE5";font-size:%?24?%;margin:0 %?2?% 0 %?8?%}.order-item .action-box[data-v-5eaddd7d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?100?%;position:relative;padding-right:%?30?%}.order-item .action-btn[data-v-5eaddd7d]{width:%?160?%;height:%?60?%;margin:0;margin-left:%?24?%;padding:0;text-align:center;line-height:%?60?%;font-size:%?26?%;color:#303133;background:#fff;border-radius:100px}.order-item .action-btn[data-v-5eaddd7d]:after{border-radius:100px}.order-item .action-btn.recom[data-v-5eaddd7d]{background:#fff9f9;color:#fa436a}.order-item .action-btn.recom[data-v-5eaddd7d]:after{border-color:#f7bcc8}\n/* load-more */.uni-load-more[data-v-5eaddd7d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-load-more__text[data-v-5eaddd7d]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-5eaddd7d]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>uni-view[data-v-5eaddd7d]{position:absolute}.uni-load-more__img>uni-view uni-view[data-v-5eaddd7d]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-5eaddd7d 1.56s ease infinite;animation:load-data-v-5eaddd7d 1.56s ease infinite}.uni-load-more__img>uni-view uni-view[data-v-5eaddd7d]:first-child{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-5eaddd7d]:nth-child(2){-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>uni-view uni-view[data-v-5eaddd7d]:nth-child(3){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-5eaddd7d]:nth-child(4){top:11px;left:0}.load1[data-v-5eaddd7d],.load2[data-v-5eaddd7d],.load3[data-v-5eaddd7d]{height:24px;width:24px}.load2[data-v-5eaddd7d]{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-5eaddd7d]{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-5eaddd7d]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-5eaddd7d]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-5eaddd7d]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-5eaddd7d]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-5eaddd7d]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-5eaddd7d]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-5eaddd7d]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-5eaddd7d]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-5eaddd7d]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-5eaddd7d]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-5eaddd7d]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-5eaddd7d]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-5eaddd7d{0%{opacity:1}to{opacity:.2}}body.?%PAGE?%[data-v-5eaddd7d]{background:#f8f8f8}',""])},"7ee3":function(t,e,a){"use strict";a.r(e);var i=a("9eeb"),d=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=d.a},"9eeb":function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("20d6"),a("ac6a");var d=i(a("5176")),n=i(a("2da8")),o=i(a("6a10")),r=i(a("e36d")),s={components:{uniLoadMore:n.default,empty:o.default},data:function(){return{tabCurrentIndex:0,navList:[{state:0,text:"全部",loadingType:"more",orderList:[]},{state:1,text:"待付款",loadingType:"more",orderList:[]},{state:2,text:"待收货",loadingType:"more",orderList:[]},{state:3,text:"待评价",loadingType:"more",orderList:[]},{state:4,text:"售后",loadingType:"more",orderList:[]}]}},onLoad:function(t){this.tabCurrentIndex=+t.state,this.loadData()},methods:{loadData:function(t){var e=this,a=this.tabCurrentIndex,i=this.navList[a],n=i.state;"tabChange"===t&&!0===i.loaded||"loading"!==i.loadingType&&(i.loadingType="loading",setTimeout(function(){var t=r.default.orderList.filter(function(t){return t=(0,d.default)(t,e.orderStateExp(t.state)),0===n?t:t.state===n});t.forEach(function(t){i.orderList.push(t)}),e.$set(i,"loaded",!0),i.loadingType="more"},600))},changeTab:function(t){this.tabCurrentIndex=t.target.current,this.loadData("tabChange")},tabClick:function(t){this.tabCurrentIndex=t},deleteOrder:function(t){var e=this;uni.showLoading({title:"请稍后"}),setTimeout(function(){e.navList[e.tabCurrentIndex].orderList.splice(t,1),uni.hideLoading()},600)},cancelOrder:function(t){var e=this;uni.showLoading({title:"请稍后"}),setTimeout(function(){var a=e.orderStateExp(9),i=a.stateTip,n=a.stateTipColor;t=(0,d.default)(t,{state:9,stateTip:i,stateTipColor:n});var o=e.navList[1].orderList,r=o.findIndex(function(e){return e.id===t.id});-1!==r&&o.splice(r,1),uni.hideLoading()},600)},orderStateExp:function(t){var e="",a="#fa436a";switch(+t){case 1:e="待付款";break;case 2:e="待发货";break;case 9:e="订单已关闭",a="#909399";break}return{stateTip:e,stateTipColor:a}}}};e.default=s},e42c:function(t,e,a){var i=a("55f8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var d=a("4f06").default;d("861b93f8",i,!0,{sourceMap:!1,shadowMode:!1})},eb54:function(t,e,a){"use strict";var i=a("e42c"),d=a.n(i);d.a}}]);