(window.webpackJsonp=window.webpackJsonp||[]).push([[24,10],{441:function(t,e,n){var content=n(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(113).default)("663448a7",content,!0,{sourceMap:!1})},453:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(37),n(337),{props:["categories","isLoading"],data:function(){return{}},created:function(){},methods:{onDelete:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,n.$axios.$delete("/api/admin/categories/".concat(t.id));case 3:o=r.sent,n.$toast.success(o.message),n.categories.splice(e,1),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),n.$toast.error(r.t0.response.data.message);case 11:return r.prev=11,r.finish(11);case 13:case"end":return r.stop()}}),r,null,[[0,8,11,13]])})))()}}}),c=n(16),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-body py-0"},[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-head-custom table-vertical-center",attrs:{id:"kt_advance_table_widget_2"}},[t._m(0),t._v(" "),n("tbody",[t.isLoading?n("tr",[t._m(1)]):t._l(t.categories,(function(e,r){return n("tr",{key:e.id,staticClass:"cursor-pointer"},[n("td",{staticClass:"pl-0"},[n("a",{staticClass:"text-dark-75 text-hover-primary font-size-lg",attrs:{href:"#"}},[t._v(t._s(e.id))])]),t._v(" "),n("td",{staticClass:"pl-0"},[n("a",{staticClass:"text-dark-75 font-weight-bolder text-hover-primary font-size-lg",attrs:{href:"#"}},[t._v(t._s(e.name))])]),t._v(" "),n("td",[n("span",{staticClass:"text-dark-75 font-weight-bolder d-block font-size-lg"},[t._v(t._s(e.slug))])]),t._v(" "),n("td",[1==e.actived?n("span",{staticClass:"label label-lg label-light-success label-inline"},[t._v("Actived")]):n("span",{staticClass:"label label-lg label-light-danger label-inline"},[t._v("Not Active")])]),t._v(" "),n("td",{staticClass:"pr-0 text-center d-flex align-items-center justify-content-center"},[n("NuxtLink",{staticClass:"btn btn-icon btn-light btn-hover-primary btn-sm",attrs:{to:"/campaigns/categories/"+e.id}},[n("span",{staticClass:"svg-icon svg-icon-md svg-icon-primary"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1"}},[n("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("rect",{attrs:{x:"0",y:"0",width:"24",height:"24"}}),t._v(" "),n("path",{attrs:{d:"M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z",fill:"#000000"}}),t._v(" "),n("path",{attrs:{d:"M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z",fill:"#000000",opacity:"0.3"}})])])])]),t._v(" "),n("div",{staticClass:"ml-2",on:{click:function(n){return t.onDelete(e,r)}}},[n("img",{attrs:{src:"/assets/icons/delete.png",alt:""}})])],1)])}))],2)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",{staticClass:"text-uppercase"},[n("th",{staticClass:"pl-0",staticStyle:{"min-width":"100px"}},[t._v("ID")]),t._v(" "),n("th",{staticClass:"pl-0",staticStyle:{"min-width":"100px"}},[t._v("Name")]),t._v(" "),n("th",{staticStyle:{"min-width":"120px"}},[t._v("Slug")]),t._v(" "),n("th",{staticStyle:{"min-width":"120px"}},[t._v("Active")]),t._v(" "),n("th",{staticClass:"pr-0 text-center",staticStyle:{"min-width":"160px"}},[t._v("Action")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{attrs:{colspan:"7"}},[e("div",{staticClass:"d-flex align-items-center justify-content-center p-5"},[e("div",{staticClass:"spinner spinner-primary spinner-lg mr-15"})])])}],!1,null,"302db4db",null);e.default=component.exports},491:function(t,e,n){"use strict";n(441)},492:function(t,e,n){var r=n(112)(!1);r.push([t.i,"#kt_subheader[data-v-6d869302]{margin-top:-40px}",""]),t.exports=r},514:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(37),n(416)),c=n(414),l=n(415),d={layout:"app",components:{Vuetable:o.a,VuetablePagination:c.a,VuetablePaginationInfo:l.a},data:function(){return{isLoading:!1,categories:[],inputs:{q:null},paginater:{current_page:1,per_page:10,total:0,data:[]},pagination:{wrapperClass:"pagination",activeClass:"active",disabledClass:"disabled",pageClass:"btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1",linkClass:"btn btn-icon btn-sm btn-light-primary mr-2 my-1",paginationClass:"pagination",paginationInfoClass:"float-left",dropdownClass:"form-control",icons:{first:"ki ki-bold-double-arrow-back icon-xs",prev:"ki ki-bold-arrow-back icon-xs",next:"ki ki-bold-arrow-next icon-xs",last:"ki ki-bold-double-arrow-next icon-xs"}}}},head:function(){return{title:"Categories | Campaign Management"}},created:function(){this.searchCategories()},methods:{searchCategories:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isLoading){e.next=2;break}return e.abrupt("return");case 2:return t.isLoading=!0,e.prev=3,e.next=6,t.$axios.$get("/api/admin/categories",{params:{per:t.paginater.per_page,page:t.paginater.current_page,q:t.inputs.q}});case 6:n=e.sent,t.categories=n.data,t.paginater=n,e.next=13;break;case 11:e.prev=11,e.t0=e.catch(3);case 13:return e.prev=13,t.isLoading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[3,11,13,16]])})))()},onPaginationData:function(t){this.$refs.pagination.setPaginationData(t),this.$refs.paginationInfo.setPaginationData(t)},onChangePage:function(t){"next"==t?this.paginater.current_page++:"prev"==t?this.paginater.current_page--:this.paginater.current_page=t,this.searchCategories()},onAddCategory:function(){this.$router.push({path:"/campaigns/categories/0"})}}},v=(n(491),n(16)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"card card-custom card-border gutter-b"},[n("div",{staticClass:"card-header border-0 py-5"},[t._m(0),t._v(" "),n("div",[n("button",{staticClass:"btn btn-primary",on:{click:t.onAddCategory}},[t._v("Add Category")])])]),t._v(" "),n("CommonCampaignCategories",{attrs:{categories:t.categories,isLoading:t.isLoading}})],1),t._v(" "),n("div",{staticClass:"card card-custom"},[n("div",{staticClass:"card-body py-7"},[n("div",{staticClass:"d-flex justify-content-between align-items-center flex-wrap"},[n("vuetable-pagination",{ref:"pagination",attrs:{css:t.pagination},on:{"vuetable-pagination:change-page":t.onChangePage}}),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("vuetable-pagination-info",{ref:"paginationInfo"})],1)],1)])]),t._v(" "),n("div",{staticClass:"d-none"},[n("vuetable",{ref:"vuetable",attrs:{"api-mode":!1,data:t.paginater,fields:[],"per-page":parseInt(t.paginater.per_page),"pagination-path":""},on:{"vuetable:pagination-data":t.onPaginationData}})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"card-title align-items-start flex-column"},[n("span",{staticClass:"card-label font-weight-bolder text-dark"},[t._v("Categories")])])}],!1,null,"6d869302",null);e.default=component.exports;installComponents(component,{CommonCampaignCategories:n(453).default})}}]);