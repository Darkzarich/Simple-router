webpackJsonp([1],{"0F8J":function(t,e){},"1/oy":function(t,e){},"97vR":function(t,e){},"9M+g":function(t,e){},"A/fZ":function(t,e){},Earv:function(t,e){},G94Q:function(t,e){},GfHa:function(t,e){},H0IJ:function(t,e){},Id91:function(t,e){},KICJ:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s=n("e6fC"),r=(n("qb6w"),n("9M+g"),"/Simple-router"),o={name:"NavLink",props:["href"],data:function(){return{baseURL:r}},methods:{go:function(t){t.preventDefault(),history.pushState(null,this.$slots.default[0].text,this.baseURL+this.href),this.$parent.$emit("page-update"),this.$emit("page-update")}}},i={render:function(){var t=this.$createElement;return(this._self._c||t)("a",{attrs:{href:this.baseURL+this.href},on:{click:this.go}},[this._t("default")],2)},staticRenderFns:[]};var c=n("VU/8")(o,i,!1,function(t){n("oS+t")},"data-v-622ffae4",null).exports,u={name:"NavBar",props:["active"],components:{NavLink:c},computed:{activeLowerCase:function(){return this.active.toLowerCase()}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav navbar-nav mr-auto mt-2 mt-lg-0",class:this.activeLowerCase},[e("nav-link",{staticClass:"home nav-item",attrs:{href:"/"}},[this._v(" Home ")]),this._v(" "),e("nav-link",{staticClass:"about nav-item",attrs:{href:"/about"}},[this._v(" About")]),this._v(" "),e("nav-link",{staticClass:"posts nav-item",attrs:{href:"/posts"}},[this._v(" Posts ")])],1)},staticRenderFns:[]};var p=n("VU/8")(u,l,!1,function(t){n("G94Q")},"data-v-e8d4fcd4",null).exports,v={"/":"Home","/about":"About","/posts":"Posts","/post":"SinglePost"},d=n("mtWM"),f=n.n(d),h={name:"Posts",components:{"v-link":c},data:function(){return{posts:[],currentPage:1,perPage:12,totalRows:100}},created:function(){var t=this;f.a.get("https://newsapi.org/v2/everything?sources=abc-news&language=en&sortBy=publishedAt&apiKey=e217204f2c0d42cca5708d70b60f1fd4").then(function(e){t.totalRows=e.data.totalResults}).catch(function(){t.emit("on-error")}),this.getPosts()},methods:{getPosts:function(){var t=this;f.a.get("https://newsapi.org/v2/everything?sources=abc-news&language=en&sortBy=publishedAt&apiKey=e217204f2c0d42cca5708d70b60f1fd4&pageSize="+this.perPage+"&page="+this.currentPage).then(function(e){t.posts=e.data.articles}).catch(function(){t.emit("on-error")})}},filters:{formatDate:function(t){return new Date(Date.parse(t)).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"})}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},t._l(t.posts,function(e){return n("div",{key:e.url,staticClass:"col-12 col-md-3"},[n("div",[n("v-link",{attrs:{href:"/post/"+e.title}},[n("img",{staticClass:"img-fluid",attrs:{src:e.urlToImage}}),t._v(" "),n("h5",[t._v(t._s(e.title))])]),t._v(" "),n("q",[t._v(t._s(e.description))]),t._v(" "),n("hr"),t._v("\n        "+t._s(t._f("formatDate")(e.publishedAt))+"\n        "),n("hr")],1)])}),0),t._v(" "),n("div",{staticClass:"row"},[n("b-pagination",{staticClass:"col-12",attrs:{align:"center",size:"md","total-rows":t.totalRows,"per-page":t.perPage},on:{input:t.getPosts},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),t._v(" "),n("br"),t._v(" "),t._m(0)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"attribution col-12 text-center"},[this._v("API for news powered by "),e("a",{attrs:{href:"https://newsapi.org"}},[this._v("newsapi.org")])])}]};var g=n("VU/8")(h,m,!1,function(t){n("KICJ")},"data-v-a376396c",null).exports,_={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Error 404")])},staticRenderFns:[]};var b=n("VU/8")({name:"NotFound"},_,!1,function(t){n("vaeL")},"data-v-4d38936c",null).exports,w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Home page")])},staticRenderFns:[]};var C=n("VU/8")({name:"Home"},w,!1,function(t){n("0F8J")},"data-v-698fa248",null).exports,P={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("About page")])},staticRenderFns:[]};var R=n("VU/8")({name:"About"},P,!1,function(t){n("97vR")},"data-v-835ba138",null).exports,y=(n("Z3ds"),n("fmpa"),{name:"SinglePost",data:function(){return{post:null}},beforeCreate:function(){var t=this;f.a.get(window.location.pathname.replace(r,"").toLowerCase().replace(/\/post\/(.+)/,"https://newsapi.org/v2/everything?q=$1&sources=abc-news&language=en&sortBy=publishedAt&apiKey=e217204f2c0d42cca5708d70b60f1fd4")).then(function(e){t.post=e.data.articles[0]}).catch(function(){t.onError()})},methods:{onError:function(){this.$emit("on-error")}}}),E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6"},[n("div",[n("img",{staticClass:"img-fluid",attrs:{src:t.post.urlToImage}}),t._v(" "),n("h2",[t._v(t._s(t.post.title))]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"ml-3"},[t._v("\n          "+t._s(t.post.content)+"\n          "),t._m(0),t._v(" "),n("b-tooltip",{attrs:{target:"explanation"}},[t._v("\n            This site uses free developer plan for News API.\n            Article content can be shown only up to 250 characters and\n            remain ones will be shown as [+243 chars] for example. Please understand.\n          ")]),t._v(" "),n("br"),n("div",{staticClass:"mt-2"},[t._v("Source: "),n("a",{attrs:{href:t.post.url}},[t._v(t._s(t.post.source.name))])])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"explanation"},[e("i",{staticClass:"far fa-question-circle",attrs:{id:"explanation"}})])}]};var x={name:"App",components:{NavBar:p,Posts:g,NotFound:b,Home:C,About:R,SinglePost:n("VU/8")(y,E,!1,function(t){n("H0IJ")},"data-v-585fae1c",null).exports},props:["current-page"],data:function(){return{dataCurrentPage:this.currentPage}},mounted:function(){var t=this;window.addEventListener("popstate",function(){t.updatePage()})},methods:{updatePage:function(){var t=window.location.pathname.replace(r,"");-1!==t.search(/post\/.+/)?this.dataCurrentPage="SinglePost":this.dataCurrentPage=v[t]},onError:function(){this.dataCurrentPage="NotFound"}}},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar bg-light"},[n("h2",{staticClass:"navbar-brand",staticStyle:{display:"inline"}},[t._v("My blog")]),t._v(" "),n("nav-bar",{attrs:{active:t.dataCurrentPage},on:{"page-update":function(e){t.updatePage()}}})],1),t._v(" "),n("div",{staticClass:"container bg-white mt-3 p-2"},[n(t.dataCurrentPage,{tag:"component",on:{"page-update":t.updatePage,"on-error":function(e){t.onError()}}})],1)])},staticRenderFns:[]};var $={name:"Router",components:{App:n("VU/8")(x,A,!1,function(t){n("A/fZ")},null,null).exports},data:function(){return{currentRoute:window.location.pathname.replace(r,"").toLocaleLowerCase(),links:v}},computed:{viewComponent:function(){return-1!==this.currentRoute.indexOf("/post")?"SinglePost":v[this.currentRoute]||"NotFound"}}},F={render:function(){var t=this.$createElement;return(this._self._c||t)("App",{attrs:{"current-page":this.viewComponent}})},staticRenderFns:[]};var L=n("VU/8")($,F,!1,function(t){n("Earv")},"data-v-2da4513a",null).exports;a.a.use(s.a),a.a.config.productionTip=!1,new a.a({el:"#app",components:{Router:L},template:"<Router/>"})},Z3ds:function(t,e){},fmpa:function(t,e){},"oS+t":function(t,e){},qb6w:function(t,e){},vaeL:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.20a47af8ed807056d1fb.js.map