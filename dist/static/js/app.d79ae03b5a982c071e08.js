webpackJsonp([1],{"0F8J":function(t,e){},"1/oy":function(t,e){},"97vR":function(t,e){},"9M+g":function(t,e){},"A/fZ":function(t,e){},BclC:function(t,e){},F94O:function(t,e){},G94Q:function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("e6fC"),r=(a("qb6w"),a("9M+g"),"/Simple-router"),i="https://cdn.shopify.com/s/files/1/0936/9026/products/csm_no-image-available_EN_3dd8d65e1e_634x.png?v=1539797591",o={name:"NavLink",props:["href"],data:function(){return{baseURL:r}},methods:{go:function(t){t.preventDefault(),history.pushState(null,this.$slots.default[0].text,this.baseURL+this.href),this.$parent.$emit("page-update"),this.$emit("page-update")}}},c={render:function(){var t=this.$createElement;return(this._self._c||t)("a",{attrs:{href:this.baseURL+this.href},on:{click:this.go}},[this._t("default")],2)},staticRenderFns:[]};var u=a("VU/8")(o,c,!1,function(t){a("oS+t")},"data-v-622ffae4",null).exports,l={name:"NavBar",props:["active"],components:{NavLink:u},computed:{activeLowerCase:function(){return this.active.toLowerCase()}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav navbar-nav mr-auto mt-2 mt-lg-0",class:this.activeLowerCase},[e("nav-link",{staticClass:"home nav-item",attrs:{href:"/"}},[this._v(" Home ")]),this._v(" "),e("nav-link",{staticClass:"about nav-item",attrs:{href:"/about"}},[this._v(" About")]),this._v(" "),e("nav-link",{staticClass:"posts nav-item",attrs:{href:"/posts"}},[this._v(" Posts ")])],1)},staticRenderFns:[]};var p=a("VU/8")(l,d,!1,function(t){a("G94Q")},"data-v-e8d4fcd4",null).exports,v={"/":"Home","/about":"About","/posts":"Posts","/post":"SinglePost"},f=a("mtWM"),h=a.n(f),m={name:"Posts",components:{"v-link":u},data:function(){return{posts:[],currentPage:1,perPage:12,totalRows:100,noImgURL:i}},created:function(){var t=this;h.a.get("https://newsapi.org/v2/everything?sources=abc-news&language=en&sortBy=publishedAt&apiKey=e217204f2c0d42cca5708d70b60f1fd4").then(function(e){t.totalRows=e.data.totalResults}).catch(function(){t.emit("on-error")}),this.getPosts()},methods:{getPosts:function(){var t=this;h.a.get("https://newsapi.org/v2/everything?sources=abc-news&language=en&sortBy=publishedAt&apiKey=e217204f2c0d42cca5708d70b60f1fd4&pageSize="+this.perPage+"&page="+this.currentPage).then(function(e){t.posts=e.data.articles}).catch(function(){t.emit("on-error")})}},filters:{formatDate:function(t){return new Date(Date.parse(t)).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"})}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-2"},[a("div",{staticClass:"row"},[a("b-pagination",{staticClass:"col-12",attrs:{align:"center",size:"md","total-rows":t.totalRows,"per-page":t.perPage},on:{input:t.getPosts},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),a("div",{staticClass:"row"},t._l(t.posts,function(e){return a("div",{key:e.url,staticClass:"col-12 col-md-3 mb-3"},[a("div",{staticClass:"card h-100"},[a("v-link",{attrs:{href:"/post/"+e.title}},[a("img",{staticClass:"card-img-top",attrs:{src:e.urlToImage?e.urlToImage:t.noImgURL}})]),t._v(" "),a("div",{staticClass:"card-body"},[a("v-link",{attrs:{href:"/post/"+e.title}},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.title))])]),t._v(" "),a("p",{staticClass:"card-text"},[t._v("\n            "+t._s(e.description)+"\n          ")])],1),t._v(" "),a("div",{staticClass:"card-footer"},[t._v("\n          "+t._s(t._f("formatDate")(e.publishedAt))+"\n        ")])],1)])}),0),t._v(" "),a("div",{staticClass:"row"},[a("b-pagination",{staticClass:"col-12",attrs:{align:"center",size:"md","total-rows":t.totalRows,"per-page":t.perPage},on:{input:t.getPosts},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),t._v(" "),a("br"),t._v(" "),t._m(0)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"attribution col-12 text-center"},[this._v("API for news powered by "),e("a",{attrs:{href:"https://newsapi.org"}},[this._v("newsapi.org")])])}]};var _=a("VU/8")(m,g,!1,function(t){a("F94O")},"data-v-2bc7312d",null).exports,b={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Error 404")])},staticRenderFns:[]};var C=a("VU/8")({name:"NotFound"},b,!1,function(t){a("vaeL")},"data-v-4d38936c",null).exports,w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Home page")])},staticRenderFns:[]};var P=a("VU/8")({name:"Home"},w,!1,function(t){a("0F8J")},"data-v-698fa248",null).exports,R={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("About page")])},staticRenderFns:[]};var y=a("VU/8")({name:"About"},R,!1,function(t){a("97vR")},"data-v-835ba138",null).exports,x=(a("Z3ds"),a("fmpa"),{name:"SinglePost",data:function(){return{post:null,isVideo:!1}},beforeCreate:function(){var t=this;h.a.get(window.location.pathname.replace(r,"").toLowerCase().replace(/\/post\/(.+)/,"https://newsapi.org/v2/everything?q=$1&sources=abc-news&language=en&apiKey=e217204f2c0d42cca5708d70b60f1fd4")).then(function(e){t.post=e.data.articles[0],-1!==e.data.articles[0].title.indexOf("WATCH")&&(t.isVideo=!0)}).catch(function(){t.onError()})},methods:{onError:function(){this.$emit("on-error")}}}),E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6"},[a("div",[a("img",{staticClass:"img-fluid",attrs:{src:t.post.urlToImage}}),t._v(" "),a("h2",[t.isVideo?[t._m(0),t._v(" "),a("b-tooltip",{attrs:{target:"explanationVideo"}},[t._v("\n              API can't return a video so if you want to watch the video which was\n              attached to the article you have to follow the source.\n            ")])]:t._e(),t._v("\n          "+t._s(t.post.title)+"\n        ")],2),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"ml-3"},[t._v("\n          "+t._s(t.post.content)+"\n          "),t._m(1),t._v(" "),a("b-tooltip",{attrs:{target:"explanationChar"}},[t._v("\n            This site uses free developer plan for News API.\n            Article content can be shown only up to 250 characters and\n            remain ones will be shown as [+243 chars] for example. Please understand.\n          ")]),t._v(" "),a("br"),a("div",{staticClass:"mt-2"},[t._v("Source: "),a("a",{attrs:{href:t.post.url}},[t._v(t._s(t.post.source.name))])]),t._v(" "),t._m(2)],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"explanation"},[e("i",{staticClass:"far fa-question-circle",attrs:{id:"explanationVideo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"explanation"},[e("i",{staticClass:"far fa-question-circle",attrs:{id:"explanationChar"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button",onclick:"history.back()"}},[this._v("\n              Back\n            ")])])}]};var k={name:"App",components:{NavBar:p,Posts:_,NotFound:C,Home:P,About:y,SinglePost:a("VU/8")(x,E,!1,function(t){a("BclC")},"data-v-34ce1349",null).exports},props:["current-page"],data:function(){return{dataCurrentPage:this.currentPage}},mounted:function(){var t=this;window.addEventListener("popstate",function(){t.updatePage()})},methods:{updatePage:function(){var t=window.location.pathname.replace(r,"");-1!==t.search(/post\/.+/)?this.dataCurrentPage="SinglePost":this.dataCurrentPage=v[t]},onError:function(){this.dataCurrentPage="NotFound"}}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar bg-light"},[a("h2",{staticClass:"navbar-brand",staticStyle:{display:"inline"}},[t._v("My blog")]),t._v(" "),a("nav-bar",{attrs:{active:t.dataCurrentPage},on:{"page-update":function(e){t.updatePage()}}})],1),t._v(" "),a("div",{staticClass:"container bg-white mt-3 p-2"},[a(t.dataCurrentPage,{tag:"component",on:{"page-update":t.updatePage,"on-error":function(e){t.onError()}}})],1)])},staticRenderFns:[]};var A={name:"Router",components:{App:a("VU/8")(k,$,!1,function(t){a("A/fZ")},null,null).exports},data:function(){return{currentRoute:window.location.pathname.replace(r,"").toLocaleLowerCase(),links:v}},computed:{viewComponent:function(){return-1!==this.currentRoute.search(/post\/.+/)?"SinglePost":v[this.currentRoute]||"NotFound"}}},F={render:function(){var t=this.$createElement;return(this._self._c||t)("App",{attrs:{"current-page":this.viewComponent}})},staticRenderFns:[]};var L=a("VU/8")(A,F,!1,function(t){a("gdTk")},"data-v-3aff9aca",null).exports;n.a.use(s.a),n.a.config.productionTip=!1,new n.a({el:"#app",components:{Router:L},template:"<Router/>"})},Z3ds:function(t,e){},fmpa:function(t,e){},gdTk:function(t,e){},"oS+t":function(t,e){},qb6w:function(t,e){},vaeL:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d79ae03b5a982c071e08.js.map