(window.webpackJsonp=window.webpackJsonp||[]).push([[479,16,293],{333:function(t,e,o){var content=o(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("6334aaf6",content,!0,{sourceMap:!1})},342:function(t,e,o){"use strict";o(333)},343:function(t,e,o){var n=o(53)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.gradientbookcard[data-v-c06b3b76]{\n  background:linear-gradient(to bottom right,rgba(255,69,0,0),rgba(255,69,0,.2))\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},344:function(t,e,o){"use strict";o.r(e);o(25),o(69),o(332),o(139),o(140),o(14),o(83);var n=o(138),l={props:{book:Object,index:Number},data:function(){return{backendStorageHosts:n.b}},methods:{setRupiah:function(t){if(null!=t){for(var e="",o=t.toString().split("").reverse().join(""),i=0;i<o.length;i++)i%3==0&&(e+=o.substr(i,3)+".");return e.split("",e.length-1).reverse().join("")}},goDetailBook:function(t){this.$router.push({name:"book-slug",params:{slug:t}})}}},r=(o(342),o(9)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"rounded-lg overflow-hidden mb-3 shadow-md gradientbookcard",class:t.index%2==0?"mr-1.5":"ml-1.5",on:{click:function(e){return t.goDetailBook(t.book.slug)}}},[e("div",{staticClass:"relative px-4 w-full"},[e("div",{staticClass:"flex justify-center items-center"},[e("img",{staticStyle:{"max-height":"100%"},attrs:{src:t.backendStorageHosts.bookManagement.books+t.book.cover}})])]),t._v(" "),e("div",{staticClass:"px-1 py-1 mb-4"},[e("p",{staticClass:"mb-2 mt-1 truncate",staticStyle:{"font-size":"13px","line-height":"1.4",height:"20px","text-align":"center",color:"#27211e"}},[t._v("\n      "+t._s(t.book.title)+"\n    ")]),t._v(" "),e("div",{staticClass:"font-bold",staticStyle:{"font-size":"15px","text-align":"center",color:"#ff4500"}},[e("span",{staticStyle:{"font-size":"13px"}},[t._v("IDR")]),t._v("\n      "+t._s(t.setRupiah(t.book.price).replace("..00",""))+"\n    ")])])])}),[],!1,null,"c06b3b76",null);e.default=component.exports},345:function(t,e,o){"use strict";o.r(e);var n=o(9),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},357:function(t,e,o){t.exports=o.p+"img/bgbook.721cd88.png"},362:function(t,e,o){var content=o(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("f902024a",content,!0,{sourceMap:!1})},376:function(t,e,o){"use strict";o(362)},377:function(t,e,o){var n=o(53),l=o(203),r=o(357),c=n((function(i){return i[1]})),d=l(r);c.push([t.i,"/*purgecss start ignore*/\n.backpicbookmobile[data-v-15a1e3d7]{\n  background-image:url("+d+");\n  background-repeat:no-repeat;\n  background-size:cover;\n  background-position:50%\n}\n\n/*purgecss end ignore*/",""]),c.locals={},t.exports=c},399:function(t,e,o){"use strict";o.r(e);var n=o(346),l=o(138),r=o(339),c=o.n(r),d=o(344),f={components:{InfiniteLoading:c.a,BookCardHelper:d.default},data:function(){return{books:[],backendStorageHosts:l.b,page:1}},methods:{getCategories:function(t){var e=this;this.$bookManagementApi.get("v1/books",{params:{page:this.page}}).then((function(o){var l;o.data.data.length>0?((l=e.books).push.apply(l,Object(n.a)(o.data.data)),e.page+=1,t.loaded()):t.complete()}))}}},v=(o(376),o(9)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"background-color":"#f6faf8"}},[e("div",{staticClass:"pt-12 backpicbookmobile"},[e("p",{staticClass:"font-bold text-2xl mt-1 text-center",staticStyle:{color:"#27211e"}},[t._v("\n      All Books\n    ")]),t._v(" "),e("center",{staticStyle:{color:"#6a645d"}},[e("SolidHomeIcon",{staticClass:"h-5 inline-flex"}),t._v("  > Books\n    ")],1),t._v(" "),e("div",{staticClass:"pt-12 pb-2"})],1),t._v(" "),e("div",{staticClass:"grid grid-cols-2 px-3 pt-3"},t._l(t.books,(function(t,o){return e("div",{key:o,staticClass:"relative overflow-hidden rounded-lg"},[e("book-card-helper",{attrs:{book:t,index:o}})],1)})),0),t._v(" "),e("infinite-loading",{on:{distance:function(t){},infinite:t.getCategories}},[e("div",{attrs:{spinner:"waveDots"}})])],1)}),[],!1,null,"15a1e3d7",null);e.default=component.exports;installComponents(component,{SolidHomeIcon:o(341).default})},438:function(t,e,o){"use strict";o.r(e);var n=o(9),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("div",[e("client-only",[e("div",{staticStyle:{background:"#f6faf8"}},[t.$device.isMobileOrTablet?e("div",{staticStyle:{"padding-top":"55px"}},[e("div",{staticClass:"shadow-lg fixed top-0 left-0 w-full flex items-center py-3 px-3 z-50",staticStyle:{"background-color":"#f6faf8"}},[e("div",{staticClass:"flex items-center font-bold",on:{click:function(e){return t.$router.go(-1)}}},[e("SolidChevronLeftIcon",{staticClass:"w-8 mr-1.5 text-blue-lochmara"}),t._v(" All\n            Books\n          ")],1)]),t._v(" "),e("MobileBooksComp")],1):t._e()])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SolidChevronLeftIcon:o(345).default,MobileBooksComp:o(399).default})}}]);