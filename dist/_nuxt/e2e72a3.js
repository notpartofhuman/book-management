(window.webpackJsonp=window.webpackJsonp||[]).push([[13,11,293],{328:function(t,e,o){var content=o(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("28bf43d1",content,!0,{sourceMap:!1})},329:function(t,e,o){"use strict";var n=o(12),r=o(5),l=o(3),c=o(111),f=o(17),d=o(13),v=o(202),m=o(47),h=o(84),x=o(201),k=o(4),C=o(85).f,_=o(36).f,w=o(16).f,S=o(334),y=o(335).trim,I="Number",N=r.Number,E=N.prototype,T=r.TypeError,A=l("".slice),M=l("".charCodeAt),R=function(t){var e=x(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,o,n,r,l,c,f,code,d=x(t,"number");if(h(d))throw T("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=y(d),43===(e=M(d,0))||45===e){if(88===(o=M(d,2))||120===o)return NaN}else if(48===e){switch(M(d,1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+d}for(c=(l=A(d,2)).length,f=0;f<c;f++)if((code=M(l,f))<48||code>r)return NaN;return parseInt(l,n)}return+d};if(c(I,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var z,O=function(t){var e=arguments.length<1?0:N(R(t)),o=this;return m(E,o)&&k((function(){S(o)}))?v(Object(e),o,O):e},D=n?C(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;D.length>F;F++)d(N,z=D[F])&&!d(O,z)&&w(O,z,_(N,z));O.prototype=E,E.constructor=O,f(r,I,O,{constructor:!0})}},331:function(t,e,o){"use strict";o(328)},332:function(t,e,o){var n=o(68)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.text-multiline-ellipsis[data-v-66fd9e1d]{\n  text-overflow:ellipsis;\n  overflow:hidden;\n  display:-webkit-box!important;\n  -webkit-line-clamp:2;\n  -webkit-box-orient:vertical;\n  white-space:normal\n}\n.gradient[data-v-66fd9e1d]{\n  background:linear-gradient(to bottom right,rgba(255,69,0,0),rgba(255,69,0,.2))\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},333:function(t,e,o){"use strict";o.r(e);o(25),o(67),o(329),o(139),o(140),o(14),o(83);var n=o(138),r={props:{book:Object,index:Number},data:function(){return{backendStorageHosts:n.b}},methods:{setRupiah:function(t){if(null!=t){for(var e="",o=t.toString().split("").reverse().join(""),i=0;i<o.length;i++)i%3==0&&(e+=o.substr(i,3)+".");return e.split("",e.length-1).reverse().join("")}},goDetailBook:function(t){this.$router.push({name:"book-slug",params:{slug:t}})}}},l=(o(331),o(9)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"rounded-lg overflow-hidden mb-3 shadow-md gradient",class:t.index%5==0?"mr-1.5":"ml-1.5",on:{click:function(e){return t.goDetailBook(t.book.slug)}}},[e("div",{staticClass:"relative px-4 w-full"},[e("div",{staticClass:"flex justify-center items-center"},[e("img",{staticStyle:{"max-height":"100%"},attrs:{src:t.backendStorageHosts.bookManagement.books+t.book.cover}})])]),t._v(" "),e("div",{staticClass:"px-1 py-1 mb-4"},[e("p",{staticClass:"mb-2 mt-1 truncate",staticStyle:{"font-size":"13px","line-height":"1.4",height:"20px","text-align":"center",color:"#27211e"}},[t._v("\n      "+t._s(t.book.title)+"\n    ")]),t._v(" "),e("div",{staticClass:"font-bold",staticStyle:{"font-size":"15px","text-align":"center",color:"#ff4500"}},[e("span",{staticStyle:{"font-size":"13px"}},[t._v("IDR")]),t._v("\n      "+t._s(t.setRupiah(t.book.price).replace("..00",""))+"\n    ")])])])}),[],!1,null,"66fd9e1d",null);e.default=component.exports},334:function(t,e,o){var n=o(3);t.exports=n(1..valueOf)},335:function(t,e,o){var n=o(3),r=o(26),l=o(15),c=o(336),f=n("".replace),d="["+c+"]",v=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),h=function(t){return function(e){var o=l(r(e));return 1&t&&(o=f(o,v,"")),2&t&&(o=f(o,m,"")),o}};t.exports={start:h(1),end:h(2),trim:h(3)}},336:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},345:function(t,e,o){"use strict";o.r(e);var n=o(9),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},411:function(t,e,o){"use strict";o.r(e);o(32),o(25),o(67);var n=o(138),r={data:function(){return{categories:[],backendStorageHosts:n.b,top4s:[]}},components:{BookCardHelper:o(333).default},methods:{getCategories:function(){var t=this;this.$bookManagementApi.get("v1/categories/random/4").then((function(e){t.categories=e.data.data,console.log(t.categories)}))},getTop4:function(){var t=this;this.$bookManagementApi.get("v1/books/top/5").then((function(e){t.top4s=e.data.data}))},toTitleCase:function(t){if(null!=t)return t.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}))},goCategoriesDetail:function(t){this.$router.push({name:"category-slug",params:{slug:t}})}},created:function(){this.getCategories(),this.getTop4()}},l=o(9),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"background-color":"#f6faf8"}},[e("div",{staticClass:"pt-6 mb-4"},[e("div",{staticClass:"flex mb-1"},[e("div",{staticClass:"font-semibold pl-4",staticStyle:{"font-size":"16px"}},[t._v("Categories")]),t._v(" "),e("div",{staticClass:"ml-auto mt-auto",staticStyle:{"font-size":"14px"}},[e("nuxt-link",{attrs:{to:"/DesktopCategories"}},[e("div",{staticClass:"flex items-center font-semibold text-blue-lochmara"},[t._v("\n            See all\n            "),e("SolidChevronRightIcon",{staticClass:"w-6 ml-0.5"})],1)])],1)]),t._v(" "),e("div",{staticClass:"flex overflow-x-auto"},t._l(t.categories,(function(o,n){return e("div",{key:n,staticClass:"ml-3 basis-1/2 relative overflow-hidden rounded-lg",class:n==t.categories.length-1?"mr-3":"",staticStyle:{"min-width":"20%"},on:{click:function(e){return t.goCategoriesDetail(o.slug)}}},[e("img",{staticClass:"w-full",attrs:{src:t.backendStorageHosts.bookManagement.categories+o.image}}),t._v(" "),e("div",{staticClass:"absolute top-0 left-0",staticStyle:{background:"linear-gradient(",height:"100%",width:"100%"}},[e("div",{staticClass:"absolute bottom-0 left-0 whitespace-normal pl-3 pb-2 fontsemibold"},[t._v("\n            "+t._s(t.toTitleCase(o.name))+"\n          ")])])])})),0)]),t._v(" "),e("div",[e("div",{staticClass:"flex mb-1"},[e("div",{staticClass:"font-semibold pl-4",staticStyle:{"font-size":"16px"}},[t._v("Top 5")]),t._v(" "),e("div",{staticClass:"ml-auto mt-auto",staticStyle:{"font-size":"14px"}},[e("nuxt-link",{attrs:{to:"/DesktopBooks"}},[e("div",{staticClass:"flex items-center font-semibold text-blue-lochmara"},[t._v("\n            See all books\n            "),e("SolidChevronRightIcon",{staticClass:"w-6 ml-0.5"})],1)])],1)]),t._v(" "),e("div",{staticClass:"grid grid-cols-5 px-3"},t._l(t.top4s,(function(t,o){return e("div",{key:o},[e("book-card-helper",{attrs:{book:t,index:o}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SolidChevronRightIcon:o(345).default})}}]);