(window.webpackJsonp=window.webpackJsonp||[]).push([[476,8,292,359],{328:function(t,e,o){var content=o(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("28bf43d1",content,!0,{sourceMap:!1})},331:function(t,e,o){"use strict";o(328)},332:function(t,e,o){var n=o(68)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.text-multiline-ellipsis[data-v-66fd9e1d]{\n  text-overflow:ellipsis;\n  overflow:hidden;\n  display:-webkit-box!important;\n  -webkit-line-clamp:2;\n  -webkit-box-orient:vertical;\n  white-space:normal\n}\n.gradient[data-v-66fd9e1d]{\n  background:linear-gradient(to bottom right,rgba(255,69,0,0),rgba(255,69,0,.2))\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},333:function(t,e,o){"use strict";o.r(e);o(25),o(67),o(329),o(139),o(140),o(14),o(83);var n=o(138),l={props:{book:Object,index:Number},data:function(){return{backendStorageHosts:n.b}},methods:{setRupiah:function(t){if(null!=t){for(var e="",o=t.toString().split("").reverse().join(""),i=0;i<o.length;i++)i%3==0&&(e+=o.substr(i,3)+".");return e.split("",e.length-1).reverse().join("")}},goDetailBook:function(t){this.$router.push({name:"book-slug",params:{slug:t}})}}},r=(o(331),o(9)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"rounded-lg overflow-hidden mb-3 shadow-md gradient",class:t.index%5==0?"mr-1.5":"ml-1.5",on:{click:function(e){return t.goDetailBook(t.book.slug)}}},[e("div",{staticClass:"relative px-4 w-full"},[e("div",{staticClass:"flex justify-center items-center"},[e("img",{staticStyle:{"max-height":"100%"},attrs:{src:t.backendStorageHosts.bookManagement.books+t.book.cover}})])]),t._v(" "),e("div",{staticClass:"px-1 py-1 mb-4"},[e("p",{staticClass:"mb-2 mt-1 truncate",staticStyle:{"font-size":"13px","line-height":"1.4",height:"20px","text-align":"center",color:"#27211e"}},[t._v("\n      "+t._s(t.book.title)+"\n    ")]),t._v(" "),e("div",{staticClass:"font-bold",staticStyle:{"font-size":"15px","text-align":"center",color:"#ff4500"}},[e("span",{staticStyle:{"font-size":"13px"}},[t._v("IDR")]),t._v("\n      "+t._s(t.setRupiah(t.book.price).replace("..00",""))+"\n    ")])])])}),[],!1,null,"66fd9e1d",null);e.default=component.exports},339:function(t,e,o){"use strict";o.r(e);var n=o(9),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},340:function(t,e,o){"use strict";o.r(e);var n=o(9),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"}})])}),[],!1,null,null,null);e.default=component.exports},344:function(t,e,o){var content=o(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("4e04f4cf",content,!0,{sourceMap:!1})},349:function(t,e,o){"use strict";o(344)},350:function(t,e,o){var n=o(68)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.gridset[data-v-f570b1fe]{\n  grid-column-start:1;\n  grid-column-end:4;\n  grid-row-start:2;\n  grid-row-end:2\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},352:function(t,e,o){"use strict";o.r(e);o(27),o(37),o(25),o(67),o(32),o(139),o(140),o(14),o(83);var n=o(138),l=o(330),r=o.n(l),c=o(333),d={components:{InfiniteLoading:r.a,BookCardHelper:c.default},data:function(){return{bookSlug:this.$route.params.slug,backendStorageHosts:n.b,book:null,categories:[],page:1}},created:function(){this.getBookDetail(),this.getCategories(),this.getTop4s()},methods:{getCategories:function(){var t=this;this.$bookManagementApi.get("v1/categories/random/4").then((function(e){t.categories=e.data.data,console.log(t.categories)}))},goCategoriesDetail:function(t){this.$router.push({name:"category-slug",params:{slug:t}})},getBookDetail:function(){var t=this;this.$bookManagementApi.get("v1/books/slug/"+this.bookSlug).then((function(e){t.book=e.data.data}))},toTitleCase:function(t){if(null!=t)return t.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}))},setRupiah:function(t){if(null!=t){for(var e="",o=t.toString().split("").reverse().join(""),i=0;i<o.length;i++)i%3==0&&(e+=o.substr(i,3)+".");return e.split("",e.length-1).reverse().join("")}},getTop4s:function(){var t=this;this.$bookManagementApi.get("v1/books/top/5").then((function(e){t.top4s=e.data.data}))}}},f=(o(349),o(9)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex lg:overflow-hidden xs:flex-col lg:flex-row",staticStyle:{"background-color":"#f6faf8"}},[null!=t.book?e("div",{staticClass:"grid grid-cols-3 mb-10 lg:overflow-hidden xs:flex-col lg:flex-row"},[e("div",{staticClass:"relative"},[e("div",{staticClass:"h-full w-full object-cover"},[e("img",{staticClass:"h-full",attrs:{src:t.backendStorageHosts.bookManagement.books+t.book.cover}})])]),t._v(" "),e("div",{staticClass:"mx-5 mt-5 col-span-2"},[e("div",{staticClass:"py-3 px-3.5 rounded-lg shadow-lg",staticStyle:{"background-color":"#f6faf8"}},[e("div",{staticClass:"font-bold",staticStyle:{"font-size":"24px",color:"#27211e"}},[t._v("\n          "+t._s(t.toTitleCase(t.book.title))+"\n        ")]),t._v(" "),e("div",{staticClass:"mb-8",staticStyle:{"font-size":"15px",color:"#94898d"}},[t._v("\n          by "+t._s(t.book.author)+"\n        ")]),t._v(" "),e("div",{staticClass:"mb-1 font-bold",staticStyle:{color:"#27211e"}},[t._v("\n          Product Detail\n        ")]),t._v(" "),e("div",{staticClass:"mb-6",staticStyle:{"font-size":"14px",color:"#27211e"}},[e("div",{staticClass:"flex mb-1"},[e("div",{staticClass:"w-1/6"},[t._v("Publisher")]),t._v(" "),e("div",{staticClass:"w-5/6 pl-1"},[t._v(": "+t._s(t.toTitleCase(t.book.publisher)))])]),t._v(" "),e("div",{staticClass:"flex mb-1",staticStyle:{"font-size":"14px"}},[e("div",{staticClass:"w-1/6"},[t._v("Stock")]),t._v(" "),e("div",{staticClass:"w-5/6 pl-1"},[t._v(": "+t._s(t.book.stock))])]),t._v(" "),e("div",{staticClass:"flex mb-1",staticStyle:{"font-size":"14px"}},[e("div",{staticClass:"w-1/6"},[t._v("Status")]),t._v(" "),e("div",{staticClass:"w-5/6 pl-1"},[t._v(": "+t._s(t.toTitleCase(t.book.status)))])]),t._v(" "),e("div",{staticClass:"flex mb-1",staticStyle:{"font-size":"14px"}},[e("div",{staticClass:"w-1/6"},[t._v("Weight")]),t._v(" "),e("div",{staticClass:"w-5/6 pl-1"},[t._v(": "+t._s(t.book.weight)+" kg")])])]),t._v(" "),e("div",{staticClass:"text-justify",staticStyle:{"font-size":"14px",color:"#27211e"}},[t._v("\n              "+t._s(t.book.description)+"\n        ")])]),t._v(" "),e("div",{staticClass:"w-full p-3 mt-10 shadow-md",staticStyle:{"background-color":"orangered","border-radius":"8px"}},[e("div",{staticClass:"flex items-center justify-center py-2 rounded-lg",staticStyle:{color:"#edeae2"}},[e("SolidShoppingCartIcon",{staticClass:"w-6 mr-3"}),t._v(" Rp.\n          "+t._s(t.setRupiah(t.book.price).replace("..00",""))+"\n        ")],1)]),t._v(" "),e("div",{staticClass:"mt-8 font-semibold",staticStyle:{"font-size":"18px",color:"#27211e"}},[t._v("\n        Recommendation\n        "),e("hr"),t._v(" "),e("div",{staticClass:"grid grid-cols-5 px-3 pt-5"},t._l(t.top4s,(function(t,o){return e("div",{key:o},[e("book-card-helper",{attrs:{book:t,index:o}})],1)})),0)])]),t._v(" "),e("div",{staticClass:"mt-12 px-12 pt-6 font-semibold gridset",staticStyle:{"font-size":"18px",color:"#27211e"}},[t._v("\n      Category Suggestions\n      "),e("hr"),t._v(" "),e("div",{staticClass:"grid grid-cols-4 pt-5"},t._l(t.categories,(function(o,n){return e("div",{key:n,staticClass:"relative mx-2",class:n%4==0?"mr-1.5":"ml-1.5",on:{click:function(e){return t.goCategoriesDetail(o.slug)}}},[e("img",{staticClass:"w-full rounded-md",attrs:{src:t.backendStorageHosts.bookManagement.categories+o.image}}),t._v(" "),e("div",{staticClass:"absolute top-0 left-3",staticStyle:{color:"#f6faf8"}},[e("div",{staticClass:"mt-3 mb-3 flex flex-col text-sm"},[e("h1",{staticClass:"text-lg font-bold"},[t._v("\n                "+t._s(t.toTitleCase(o.name))+"\n              ")])])])])})),0)])]):t._e()])}),[],!1,null,"f570b1fe",null);e.default=component.exports;installComponents(component,{SolidShoppingCartIcon:o(345).default})},378:function(t,e,o){var content=o(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("28446e33",content,!0,{sourceMap:!1})},384:function(t,e,o){"use strict";o.r(e);o(25),o(67),o(27),o(37),o(139),o(140),o(14),o(83);var n=o(138),l=o(330),r={components:{InfiniteLoading:o.n(l).a},data:function(){return{bookSlug:this.$route.params.slug,backendStorageHosts:n.b,book:null}},created:function(){this.getBookDetail()},methods:{getBookDetail:function(){var t=this;this.$bookManagementApi.get("v1/books/slug/"+this.bookSlug).then((function(e){t.book=e.data.data}))},toTitleCase:function(t){if(null!=t)return t.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}))},setRupiah:function(t){if(null!=t){for(var e="",o=t.toString().split("").reverse().join(""),i=0;i<o.length;i++)i%3==0&&(e+=o.substr(i,3)+".");return e.split("",e.length-1).reverse().join("")}}}},c=o(9),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"bg-white fixed top-0 left-0 w-full flex items-center py-3 px-3",staticStyle:{"z-index":"1000"}},[e("div",{staticClass:"flex items-center font-bold",on:{click:function(e){return t.$router.go(-1)}}},[e("SolidChevronLeftIcon",{staticClass:"w-8 mr-1.5 text-blue-lochmara"}),t._v(" Book\n      Detail\n    ")],1)]),t._v(" "),null!=t.book?e("div",{staticStyle:{"padding-bottom":"77px"}},[e("div",{staticClass:"bg-dark"},[e("div",{staticStyle:{position:"relative",width:"100%","padding-top":"100%"}},[e("div",{staticClass:"flex justify-center items-center",staticStyle:{position:"absolute",top:"0",left:"0",bottom:"0",right:"0"}},[e("img",{staticStyle:{"max-height":"100%","max-width":"100%"},attrs:{src:t.backendStorageHosts.bookManagement.books+t.book.cover}})])])]),t._v(" "),e("div",{staticClass:"bg-white py-3 px-3.5"},[e("div",{staticClass:"font-bold",staticStyle:{"font-size":"17px"}},[t._v("\n        "+t._s(t.toTitleCase(t.book.title))+"\n      ")]),t._v(" "),e("div",{staticClass:"text-grey-600 mb-4",staticStyle:{"font-size":"15px"}},[t._v("\n        by "+t._s(t.book.author)+"\n      ")]),t._v(" "),e("div",{staticClass:"font-bold",staticStyle:{"font-size":"20px"}},[t._v("\n        Rp. "+t._s(t.setRupiah(t.book.price).replace("..00",""))+"\n      ")])]),t._v(" "),e("div",{staticClass:"mt-3 bg-white py-3 px-3.5"},[e("div",{staticClass:"mb-3 font-bold"},[t._v("Product Detail")]),t._v(" "),e("div",{staticClass:"mb-3",staticStyle:{"font-size":"14px"}},[e("div",{staticClass:"flex mb-1"},[e("div",{staticClass:"text-grey-600 w-1/5"},[t._v("Publisher")]),t._v(" "),e("div",{staticClass:"w-4/5 pl-4"},[t._v(t._s(t.book.publisher))])]),t._v(" "),e("div",{staticClass:"flex mb-1",staticStyle:{"font-size":"14px"}},[e("div",{staticClass:"text-grey-600 w-1/5"},[t._v("Stock")]),t._v(" "),e("div",{staticClass:"w-4/5 pl-4"},[t._v(t._s(t.book.stock))])]),t._v(" "),e("div",{staticClass:"flex mb-1",staticStyle:{"font-size":"14px"}},[e("div",{staticClass:"text-grey-600 w-1/5"},[t._v("Weight")]),t._v(" "),e("div",{staticClass:"w-4/5 pl-4"},[t._v(t._s(t.book.weight)+" kg")])])]),t._v(" "),e("div",{staticClass:"text-justify",staticStyle:{"font-size":"14px"}},[t._v("\n        "+t._s(t.book.description)+"\n      ")])]),t._v(" "),e("div",{staticClass:"w-full p-3 fixed bottom-0 left-0",staticStyle:{"background-color":"#ff4500"}},[e("div",{staticClass:"bg-blue-lochmara flex items-center justify-center py-2 pr-7 text-white fontbold rounded-lg"},[e("SolidShoppingCartIcon",{staticClass:"w-6 mr-3"}),t._v(" Cart\n      ")],1)])]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SolidChevronLeftIcon:o(339).default,SolidShoppingCartIcon:o(345).default})},397:function(t,e,o){"use strict";o(378)},398:function(t,e,o){var n=o(68)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\na[data-v-6a353776]:hover{\n  color:#ff4500\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},408:function(t,e,o){"use strict";o.r(e);var n=o(10),l=(o(48),o(32),o(27),o(37),o(138)),r={mounted:function(){window.onscroll=null},head:function(){return{title:this.seo.name,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"og:title",name:"og:title",content:this.seo.name},{hid:"og:description",name:"og:description",content:this.seo.description},{hid:"og:image",name:"og:image",content:this.seo.image},{hid:"og:url",property:"og:url",content:this.seo.url}]}},data:function(){return{seo:{name:"Autumn Athenaeum",description:"",image:"",url:"http://50.50.50.207:3000/favicon.png"},hostname:l.c,backendStorageHosts:l.b,bookSlug:this.$route.params.slug}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$bookManagementApi.get("v1/books/slug"+t.bookSlug).then((function(e){t.seo.name=e.data.data.title,t.seo.description=e.data.data.description,t.seo.image=t.backendStorageHosts.bookManagement.books+e.data.data.cover,t.seo.url=t.$route.path}));case 2:case"end":return e.stop()}}),e)})))()}},c=(o(397),o(9)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("client-only",[t.$device.isDesktop?e("div",{staticStyle:{"padding-top":"55px"}},[e("div",{staticClass:"fixed top-0 left-0 w-full flex items-center py-3 px-3 shadow-md",staticStyle:{"z-index":"1000","background-color":"#f6faf8",color:"#27211e"}},[e("NuxtLink",{attrs:{to:"/"}},[e("SolidHomeIcon",{staticClass:"w-8 mb-2 inline-flex items-center"})],1),t._v(" "),e("p",{staticClass:"font-semibold text-xl inline-flex"},[t._v("  Book Details")]),t._v(" "),e("div",{staticClass:"ml-auto pr-1 inline-flex items-center"},[e("NuxtLink",{staticClass:"mx-5",attrs:{to:"/DesktopAbout"}},[t._v(" About Us ")]),t._v(" "),e("NuxtLink",{staticClass:"mx-5",attrs:{to:"/DesktopCategories"}},[t._v("\n            Categories\n          ")]),t._v(" "),e("NuxtLink",{staticClass:"mx-5",staticStyle:{color:"#ff4500"},attrs:{to:"/DesktopBooks"}},[t._v("\n            Books\n            "),e("hr")]),t._v(" "),e("SolidUserCircleIcon",{staticClass:"w-10 ml-5"})],1)],1),t._v(" "),e("DesktopBookDetailBookComp")],1):t.$device.isMobileOrTablet?e("div",[e("div",{staticClass:"bg-white fixed top-0 left-0 w-full flex items-center py-3 px-3",staticStyle:{"z-index":"1000"}},[e("div",{staticClass:"flex items-center font-bold",on:{click:function(e){return t.$router.go(-1)}}},[e("SolidChevronLeftIcon",{staticClass:"w-8 mr-1.5 text-blue-lochmara"}),t._v(" Book\n          Detail\n        ")],1)]),t._v(" "),e("MobileBookDetailBookComp")],1):t._e()])],1)}),[],!1,null,"6a353776",null);e.default=component.exports;installComponents(component,{SolidHomeIcon:o(340).default,SolidUserCircleIcon:o(204).default,DesktopBookDetailBookComp:o(352).default,SolidChevronLeftIcon:o(339).default,MobileBookDetailBookComp:o(384).default})}}]);