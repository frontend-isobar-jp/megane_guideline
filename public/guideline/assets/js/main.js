!function(){function e(t,n,i){function o(r,l){if(!n[r]){if(!t[r]){var a="function"==typeof require&&require;if(!l&&a)return a(r,!0);if(s)return s(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[r]={exports:{}};t[r][0].call(u.exports,function(e){var n=t[r][1][e];return o(n||e)},u,u.exports,e,t,n,i)}return n[r].exports}for(var s="function"==typeof require&&require,r=0;r<i.length;r++)o(i[r]);return o}return e}()({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("../libs/j_utility");n["default"]=function(){var e=document.querySelector(".j-pagetop"),t=100,n="is-show",o=!1,s=function(){return window.pageYOffset},r=function(){s()>t?(o||(0,i.AddClass)(e,n),o=!0):(o&&(0,i.RemoveClass)(e,n),o=!1)};e&&(document.addEventListener("scroll",function(){r()}),document.addEventListener("load",function(){r()}))}},{"../libs/j_utility":5}],2:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("../libs/j_accordion_es"),s=i(o),r=e("../libs/j_getIncludes_es"),l=i(r),a=e("./_show_pagetop"),c=i(a),u=function(){var e=(new s["default"](".j-accordion",{toggleSpeed:100}),function(){}),t=function(){(0,c["default"])()},n=location.pathname.split("guideline")[0];new l["default"]("#header",n+"guideline/assets/include/header.html",e),new l["default"]("#footer",n+"guideline/assets/include/footer.html",t)};n["default"]=u},{"../libs/j_accordion_es":3,"../libs/j_getIncludes_es":4,"./_show_pagetop":1}],3:[function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=function(){function e(t,n){i(this,e),this.selector=t,this.accordion=document.querySelectorAll(this.selector),null==n&&(n={}),this.toggleSpeed=n.toggleSpeed?n.toggleSpeed:1,this.btnElm=n.btnElm?n.btnElm:".j-accordion_btn",this.detailElm=n.detailElm?n.detailElm:".j-accordion_detail",this.OpenEnd=function(){},this.CloseEnd=function(){},this.clickFlag=!1,this.accordion[0]&&this.Init()}return o(e,[{key:"Init",value:function(){var e=this,t="overflow: hidden;";t+="transition: height "+this.toggleSpeed/1e3+"s ;",t+="-webkit-transition: height "+this.toggleSpeed/1e3+"s ;";for(var n=0;n<this.accordion.length;n++)for(var i=this.accordion[n].querySelectorAll(this.detailElm),o=this.accordion[n].querySelectorAll(this.btnElm),s=0;s<o.length;s++)i[s]&&(i[s].style.cssText=t,this.HasClass(i[s],"active")||(i[s].style.height="0px",i[s].style.display="none")),o[s].addEventListener("click",function(t){t.preventDefault(),e.Toggle(t)})}},{key:"Toggle",value:function(e){if(!this.accordion[0])return console.error(this.selector+": Not Found"),!1;var t=e.currentTarget?e.currentTarget:document.querySelectorAll(e)[0];this.HasClass(t,"active")?this.clickFlag||this.Close(e):this.clickFlag||this.Open(e)}},{key:"Open",value:function(e){var t=this;if(!this.accordion[0])return console.error(this.selector+": Not Found"),!1;this.clickFlag=!0;var n=e.currentTarget?e.currentTarget:document.querySelectorAll(e)[0],i=this.GetParent(n,this.selector),o=Array.prototype.indexOf.call(i.querySelectorAll(this.btnElm),n),s=i.querySelectorAll(this.detailElm)[o],r=function l(){t.clickFlag=!1,t.OpenEnd(o),s.style.height=null,s.removeEventListener("transitionend",l)};this.AddClass(n,"active"),this.AddClass(s,"active"),s.style.display="block",setTimeout(function(){s.style.height=s.scrollHeight+"px"},100),this.accordion[0].classList?s.addEventListener("transitionend",r,!1):this.clickFlag=!1}},{key:"Close",value:function(e){var t=this;if(!this.accordion[0])return console.error(this.selector+": Not Found"),!1;this.clickFlag=!0;var n=e.currentTarget?e.currentTarget:document.querySelectorAll(e)[0],i=this.GetParent(n,this.selector),o=Array.prototype.indexOf.call(i.querySelectorAll(this.btnElm),n),s=i.querySelectorAll(this.detailElm)[o],r=function l(){t.clickFlag=!1,t.CloseEnd(o),n.style.pointerEvents="inherit",s.style.display="none",s.removeEventListener("transitionend",l)};this.RemoveClass(n,"active"),this.RemoveClass(s,"active"),s.style.height=s.scrollHeight+"px",setTimeout(function(){s.style.height="0px"},100),this.accordion[0].classList?s.addEventListener("transitionend",r,!1):(s.style.display="none",this.clickFlag=!1)}},{key:"CloseIgnoreThis",value:function(e){function t(e){r[e].classList.remove("active"),setTimeout(function(){r[e].style.height="0px"},100)}if(!this.accordion[0])return console.error(this.selector+": Not Found"),!1;for(var n=e,i=this.GetParent(n,this.selector),o=Array.prototype.indexOf.call(i.querySelectorAll(this.btnElm),n),s=i.querySelectorAll(this.btnElm),r=i.querySelectorAll(this.detailElm),l=0;l<s.length;l++)l!=o&&(s[l].classList.remove("active"),t(l))}},{key:"GetParent",value:function(e,t){var n=e,i=0,o=void 0;for(o=t.split(".")[1]?t.split(".")[1]:t.split("#")[1]?t.split("#")[1]:t;i<100&&(n=n.parentNode,n.tagName.toLowerCase()!=o);){if(n.className){if(n.className.match(o))break}else if(n.id&&n.id.match(o))break;i++}return n}},{key:"AddClass",value:function(e,t){e.classList?e.classList.add(t):e.className+=" "+t}},{key:"RemoveClass",value:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}},{key:"HasClass",value:function(e,t){var n=!1;return e.classList?e.classList.contains(t)&&(n=!0):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)&&(n=!0),n}}]),e}();n["default"]=s},{}],4:[function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=function(){function e(t,n,o){i(this,e),this.id=document.getElementById(t.split("#")[1]),this.path=n,this.func=null!=o?o:function(){},this.getHtml(this.id,this.path,this.func)}return o(e,[{key:"getHtml",value:function(e,t,n){var i=this,o=new XMLHttpRequest;o.open("GET",t,!0),o.onload=function(t){4===o.readyState&&(200===o.status?i.id&&(e.innerHTML=o.responseText,n()):alert("通信エラーが発生しました。\n恐れ入りますが、時間をおいてもう一度送信してください。"))},o.onerror=function(e){alert("通信エラーが発生しました。\n恐れ入りますが、時間をおいてもう一度送信してください。")},o.send(null)}}]),e}();n["default"]=s},{}],5:[function(t,n,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},s=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},r=function(t,n){var i=!1;return t.classList?t.classList.contains(n)&&(i=!0):new RegExp("(^| )"+n+"( |$)","gi").test(e.target.className)&&(i=!0),i},l=function(e,t){var n="";for(var i in t)n+=""+i+":"+t[i]+"; ";e.style.cssText=n},a=function(e,t){var n,i=e,o=0;for(n=t.split(".")[1]?t.split(".")[1]:t.split("#")[1]?t.split("#")[1]:t;o<100&&(i=i.parentNode,i.tagName.toLowerCase()!=n);){if(i.className){if(i.className.match(n))break}else if(i.id&&i.id.match(n))break;o++}return i},c=function(e,t){var n=Array.prototype.filter.call(e.parentNode.children,function(n,i){for(var o=e.parentNode.querySelectorAll(t),s=null,i=0;i<o.length;i++)n===o[i]&&(s=o[i]);return n!==e&&n===s});return 0!=n.length?n:null},u=function(e){var t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset-document.documentElement.clientTop,left:t.left+window.pageXOffset-document.documentElement.clientLeft}},d=function(e){var t=window.getComputedStyle(e),n=e.offsetHeight,i=parseFloat(t.borderTopWidth),o=parseFloat(t.borderBottomWidth),s=parseFloat(t.paddingTop),r=parseFloat(t.paddingBottom),l={height:n,bordertop:i,borderBottom:o,paddingTop:s,paddingBottom:r,outerHeight:n+i+o+s+r};return l},f=function(e){var t=window.getComputedStyle(e),n=e.offsetWidth,i=parseFloat(t.borderLeftWidth),o=parseFloat(t.borderRightWidth),s=parseFloat(t.paddingLeft),r=parseFloat(t.paddingRight),l={width:n,borderLeft:i,borderRight:o,paddingLeft:s,paddingRight:r,outerWidth:n+i+o+s+r};return l},h=function(e,t){var n=!1,i=t.split(".")[1]?t.split(".")[1]:t.split("#")[1];return e.classList?e.classList.contains(i)&&(n=!0):new RegExp("(^| )"+i+"( |$)","gi").test(e.className)&&(n=!0),e.id==i&&(n=!0),n};i.AddClass=o,i.RemoveClass=s,i.HasClass=r,i.SetCss=l,i.GetParents=a,i.GetSiblings=c,i.Not=h,i.GetOffset=u,i.GetHeightData=d,i.GetWidthData=f},{}],6:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var o=e("./common/common"),s=i(o),r=function(){(0,s["default"])()};r()},{"./common/common":2}]},{},[6]);