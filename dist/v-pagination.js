!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vPagination",[],e):"object"==typeof exports?exports.vPagination=e():t.vPagination=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,a){"use strict";var i=a(9),n=i.a.languages;e.a={name:"v-pagination",props:["setting"],data:function(){var t=this.setting,e=t.totalRow,a=void 0===e?0:e,i=t.pageSizeMenu,r=void 0===i?[10,20,50,100]:i,o=t.language,s=void 0===o?"cn":o;return{pageNumber:1,pageSize:10,totalRow:a,totalPage:0,currentPage:1,lengthList:r,pageNumberSize:5,language:s,i18n:n[s]}},computed:{pageNumbers:function(){var t=void 0,e=void 0,a=[],i=this.currentPage,n=Math.floor(this.pageNumberSize/2);this.totalPage<this.pageNumberSize?(t=1,e=this.totalPage):i<=n?(t=1,e=this.pageNumberSize):i>=this.totalPage-n?(t=this.totalPage-this.pageBarSize+1,e=this.totalPage):(t=i-n,e=t+this.pageNumberSize-1);for(var r=t;r<=e;r++)a.push(r);return a}},watch:{currentPage:function(t){this.$emit("page-change",{pageNumber:this.currentPage,pageSize:Number(this.pageSize)})},"setting.totalRow":function(t){this.totalRow=t,this.lengthList.includes(this.pageSize)||(this.pageSize=this.lengthList[0]),this.totalPage=Math.ceil(this.totalRow/this.pageSize)}},methods:{switchPage:function(t){if("string"==typeof t)switch(t){case"first":1!==this.currentPage&&(this.currentPage=1);break;case"previous":1!==this.currentPage&&this.currentPage--;break;case"next":this.currentPage!==this.totalPage&&this.currentPage++;break;case"last":this.currentPage!==this.totalPage&&(this.currentPage=this.totalPage)}else"number"==typeof t&&(this.currentPage=t)},switchLength:function(){this.$emit("page-change",{pageNumber:1,pageSize:Number(this.pageSize)})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(2),n={install:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.component(i.a.name,i.a)}};e.default=n},function(t,e,a){"use strict";function i(t){a(3)}var n=a(0),r=a(10),o=a(8),s=i,d=o(n.a,r.a,!1,s,"data-v-78dd9681",null);e.a=d.exports},function(t,e,a){var i=a(4);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(6)("5f9e0386",i,!0,{})},function(t,e,a){e=t.exports=a(5)(!1),e.push([t.i,"div.vPagination[data-v-78dd9681]{margin:0;display:block}div.vPagination.vPaginationRight[data-v-78dd9681]{text-align:right}div.vPagination>ul[data-v-78dd9681]{display:inline-block;margin-bottom:0;margin-left:0;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.05);-moz-box-shadow:0 1px 2px rgba(0,0,0,.05);box-shadow:0 1px 2px rgba(0,0,0,.05);padding:0}div.vPagination>ul>li[data-v-78dd9681]{text-align:center;display:inline;box-sizing:border-box}div.vPagination>ul>li>a[data-v-78dd9681]{margin:0;border:1px solid #ddd;border-radius:0;padding:6px 12px;line-height:20px;box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none;background-color:#fff;float:left;text-decoration:none;border-left-width:0;box-sizing:content-box;color:#000;-webkit-transition:all .5s cubic-bezier(.175,.885,.32,1);transition:all .5s cubic-bezier(.175,.885,.32,1)}div.vPagination>ul>li>a[data-v-78dd9681]:hover{box-shadow:0 0 12px rgba(0,0,0,.2);-moz-box-shadow:0 0 12px rgba(0,0,0,.2);-webkit-box-shadow:0 0 12px rgba(0,0,0,.2)}div.vPagination>ul>li.disabled>a[data-v-78dd9681]{color:#999;cursor:default}div.vPagination>ul>li.disabled>a[data-v-78dd9681]:hover{color:#999;background-color:#fff;box-shadow:none}div.vPagination>ul>li.active>a[data-v-78dd9681],div.vPagination>ul>li.active>span[data-v-78dd9681]{cursor:default;color:#999;background-color:#eee}div.vPagination>ul>li.active>a[data-v-78dd9681]:hover,div.vPagination>ul>li.active>span[data-v-78dd9681]:hover{box-shadow:none}div.vPagination>ul>li:first-child>a[data-v-78dd9681],div.vPagination>ul>li:first-child>span[data-v-78dd9681]{border-left-width:1px;-webkit-border-bottom-left-radius:2px;border-bottom-left-radius:2px;-webkit-border-top-left-radius:2px;border-top-left-radius:2px;-moz-border-radius-bottomleft:2px;-moz-border-radius-topleft:2px}div.vPagination>ul>li:last-child>a[data-v-78dd9681],div.vPagination>ul>li:last-child>span[data-v-78dd9681]{-webkit-border-bottom-right-radius:2px;border-bottom-right-radius:2px;-webkit-border-top-right-radius:2px;border-top-right-radius:2px;-moz-border-radius-bottomright:2px;-moz-border-radius-topright:2px}div.vPagination>ul>li.vPaginationList a[data-v-78dd9681]{line-height:20px;height:20px}div.vPagination>ul>li.vPaginationList select[data-v-78dd9681]{margin:-2px 0 0 5px;width:auto!important;vertical-align:middle;height:22px;line-height:22px;font-size:12px;padding:0;display:inline-block;border:1px solid #ccc}div.vPagination>ul>li.vPaginationList select[data-v-78dd9681]:hover{box-shadow:0 0 8px rgba(0,0,0,.2);-moz-box-shadow:0 0 8px rgba(0,0,0,.2);-webkit-box-shadow:0 0 8px rgba(0,0,0,.2)}",""])},function(t,e){function a(t,e){var a=t[1]||"",n=t[3];if(!n)return a;if(e&&"function"==typeof btoa){var r=i(n);return[a].concat(n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"})).concat([r]).join("\n")}return[a].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=a(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},n=0;n<this.length;n++){var r=this[n][0];"number"==typeof r&&(i[r]=!0)}for(n=0;n<t.length;n++){var o=t[n];"number"==typeof o[0]&&i[o[0]]||(a&&!o[2]?o[2]=a:a&&(o[2]="("+o[2]+") and ("+a+")"),e.push(o))}},e}},function(t,e,a){function i(t){for(var e=0;e<t.length;e++){var a=t[e],i=u[a.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](a.parts[n]);for(;n<a.parts.length;n++)i.parts.push(r(a.parts[n]));i.parts.length>a.parts.length&&(i.parts.length=a.parts.length)}else{for(var o=[],n=0;n<a.parts.length;n++)o.push(r(a.parts[n]));u[a.id]={id:a.id,refs:1,parts:o}}}}function n(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function r(t){var e,a,i=document.querySelector("style["+b+'~="'+t.id+'"]');if(i){if(f)return v;i.parentNode.removeChild(i)}if(m){var r=g++;i=p||(p=n()),e=o.bind(null,i,r,!1),a=o.bind(null,i,r,!0)}else i=n(),e=s.bind(null,i),a=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else a()}}function o(t,e,a,i){var n=a?"":i.css;if(t.styleSheet)t.styleSheet.cssText=x(e,n);else{var r=document.createTextNode(n),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function s(t,e){var a=e.css,i=e.media,n=e.sourceMap;if(i&&t.setAttribute("media",i),h.ssrId&&t.setAttribute(b,e.id),n&&(a+="\n/*# sourceURL="+n.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=a(7),u={},c=d&&(document.head||document.getElementsByTagName("head")[0]),p=null,g=0,f=!1,v=function(){},h=null,b="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,a,n){f=a,h=n||{};var r=l(t,e);return i(r),function(e){for(var a=[],n=0;n<r.length;n++){var o=r[n],s=u[o.id];s.refs--,a.push(s)}e?(r=l(t,e),i(r)):r=[];for(var n=0;n<a.length;n++){var s=a[n];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete u[s.id]}}}};var x=function(){var t=[];return function(e,a){return t[e]=a,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var a=[],i={},n=0;n<e.length;n++){var r=e[n],o=r[0],s=r[1],d=r[2],l=r[3],u={id:t+":"+n,css:s,media:d,sourceMap:l};i[o]?i[o].parts.push(u):a.push(i[o]={id:o,parts:[u]})}return a}},function(t,e){t.exports=function(t,e,a,i,n,r){var o,s=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(o=t,s=t.default);var l="function"==typeof s?s.options:s;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),a&&(l.functional=!0),n&&(l._scopeId=n);var u;if(r?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=u):i&&(u=i),u){var c=l.functional,p=c?l.render:l.beforeCreate;c?(l._injectStyles=u,l.render=function(t,e){return u.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,u):[u]}return{esModule:o,exports:s,options:l}}},function(t,e,a){"use strict";var i={cn:{pageLength:"每页记录数 ",pageInfo:"当前显示第 #pageNumber# / #totalPage# 页（共#totalRow#条记录）",first:"首页",previous:"«",next:"»",last:"尾页"},en:{pageLength:"Page length ",pageInfo:"Current #pageNumber# / #totalPage# （total #totalRow# records）",first:"First",previous:"«",next:"»",last:"Last"},jp:{pageLength:"ページごとの記録数",pageInfo:"現在の第 #pageNumber# / #totalPage# ページ（全部で #totalRow# 条の記録）",first:"トップページ",previous:"«",next:"»",last:"尾のページ"}};e.a={languages:i}},function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vPagination vPaginationRight"},[a("ul",[a("li",{staticClass:"disabled vPaginationList"},[a("a",[t._v(t._s(t.i18n.pageLength)+"\n                "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.pageSize,expression:"pageSize"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.pageSize=e.target.multiple?a:a[0]},t.switchLength]}},t._l(t.lengthList,function(e){return a("option",[t._v(t._s(e))])}))])]),t._v(" "),a("li",{staticClass:"disabled bPageInfo"},[a("a",[t._v(t._s(t.i18n.pageInfo.replace("#pageNumber#",t.currentPage).replace("#totalPage#",t.totalPage).replace("#totalRow#",t.totalRow)))])]),t._v(" "),a("li",{class:{disabled:1===t.currentPage,bPageControlButton:!0}},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){t.switchPage("first")}}},[t._v(t._s(t.i18n.first))])]),t._v(" "),a("li",{class:{disabled:1===t.currentPage,bPageControlButton:!0}},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){t.switchPage("previous")}}},[t._v(t._s(t.i18n.previous))])]),t._v(" "),t._l(t.pageNumbers,function(e,i){return a("li",{class:{active:e===t.currentPage}},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(a){t.switchPage(e)}}},[t._v(t._s(e))])])}),t._v(" "),a("li",{class:{bPageControlButton:!0,disabled:t.currentPage===t.totalPage}},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){t.switchPage("next")}}},[t._v(t._s(t.i18n.next))])]),t._v(" "),a("li",{class:{bPageControlButton:!0,disabled:t.currentPage===t.totalPage}},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){t.switchPage("last")}}},[t._v(t._s(t.i18n.last))])])],2)])},n=[],r={render:i,staticRenderFns:n};e.a=r}])});
//# sourceMappingURL=v-pagination.js.map