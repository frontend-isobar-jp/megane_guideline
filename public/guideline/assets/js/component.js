!function(){function t(e,o,i){function l(s,a){if(!o[s]){if(!e[s]){var r="function"==typeof require&&require;if(!a&&r)return r(s,!0);if(n)return n(s,!0);var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}var c=o[s]={exports:{}};e[s][0].call(c.exports,function(t){var o=e[s][1][t];return l(o||t)},c,c.exports,t,e,o,i)}return o[s].exports}for(var n="function"==typeof require&&require,s=0;s<i.length;s++)l(i[s]);return l}return t}()({1:[function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var l=t("./component/common"),n=i(l),s=function(){(0,n["default"])()};s()},{"./component/common":4}],2:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=t("../libs/j_utility");o["default"]=function(){var t=document.querySelector(".fw"),e=document.querySelectorAll(".j-create_nav"),o="m-gl_nav";if(t){t.insertAdjacentHTML("beforeend",'<ul class="'+o+' j-scrollnav"></ul>');for(var l=document.querySelector("."+o),n=0;n<e.length;n++){var s=e[n].outerText,a=(0,i.GetParents)(e[n],".f-section").getAttribute("id");l.insertAdjacentHTML("beforeend",'<li><a href="#'+a+'">'+s+"</a></li>")}}}},{"../libs/j_utility":8}],3:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]=function(){setTimeout(function(){var t=document.getElementsByTagName("body"),e=document.querySelector(".m-gl_nav");t[0].style.paddingBottom=e.offsetHeight+"px"},1e3)}},{}],4:[function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var l=t("../libs/j_utility"),n=t("../libs/j_smoothScroll_es"),s=i(n),a=t("../libs/j_scrollNav_es"),r=i(a),d=t("../libs/j_modal_es"),c=i(d),h=t("./_create_nav"),u=i(h),m=t("./_set_padding_bottom"),f=i(m),g=function(){(0,f["default"])(),(0,u["default"])();var t=function(){new r["default"](".j-scrollnav",{boxElm:".j-scrollnav_section",posFix:"30%",edgeJudge:!1})};setTimeout(function(){t()},1e3);var e=function(){var t="is-not_select",e=document.getElementsByTagName("body")[0],o=new c["default"](".j-modal_code",{width:960,modalSpeed:800,bgOpacity:.4,innerBgColor:"#FFF",innerBgPadding:20});o.OpenEnd=function(){hljs.initHighlightingOnLoad(),(0,l.AddClass)(e,t)},o.CloseEnd=function(){(0,l.RemoveClass)(e,t)}};document.querySelectorAll(".j-modal_code")[0]&&e();var o=function(){new s["default"]("a",{speed:200,blank:!0})};setTimeout(function(){o()},1e3)};o["default"]=g},{"../libs/j_modal_es":5,"../libs/j_scrollNav_es":6,"../libs/j_smoothScroll_es":7,"../libs/j_utility":8,"./_create_nav":2,"./_set_padding_bottom":3}],5:[function(t,e,o){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(o,"__esModule",{value:!0});var l=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),n=function(){function t(e,o){i(this,t),this.selector=e,this.jModalDetail="j-modal_detail",this.jModalBox=this.selector.split(".")[1]+"_box",this.jModalBoxInner=this.selector.split(".")[1]+"_box_inner",this.jModalWrap=this.selector.split(".")[1]+"_wrap",this.jModalBoxClose=this.selector.split(".")[1]+"_box_close",this.jModalBoxBg=this.selector.split(".")[1]+"_bg",this.linkInnerHTML=this.selector.split(".")[1]+"_link_innerHTML",this.modal=document.querySelectorAll(this.selector),null==o&&(o={}),this.width=o.width?o.width:960,this.modalSpeed=o.modalSpeed?o.modalSpeed:200,this.bgColor=o.bgColor?o.bgColor:"#000",this.bgOpacity=o.bgOpacity?o.bgOpacity:.8,this.innerBgColor=o.innerBgColor?o.innerBgColor:"#FFF",this.innerBgPadding=o.innerBgPadding>=0?o.innerBgPadding:20,this.closeBtn=o.closeBtn||""==o.closeBtn?o.closeBtn:"×",this.closeCancel=!!o.closeCancel&&o.closeCancel,this.trigger=o.trigger?o.trigger:"click",this.addClass=o.addClass?o.addClass:"",this.fixed=!(!o.fixed||!o.fixed)&&o.fixed,this.OpenEnd=function(){},this.CloseEnd=function(){},this.jModalMovieHeight=this.width/16*9,this.jModalImg=".gif|.jpg|.jpeg|.png",this.jModalHtml="//|.html|.php|=",this.jModalMovie="youtube|youtu",this.target=null,this.index=null,this.tagHTML=document.getElementsByTagName("html")[0],this.Init(),this.CreateModalArea()}return l(t,[{key:"Init",value:function(){var t=this;if(this.modal=document.querySelectorAll(this.selector),this.Openfunc=function(e){e.preventDefault(),t.target=e.currentTarget,t.Set()},this.modal[0]){this.jModalDetailElm=document.getElementsByClassName("j-modal_detail");for(var e=0;e<this.modal.length;e++)this.modal[e].addEventListener("click",this.Openfunc);for(var e=0;e<this.jModalDetailElm.length;e++)this.jModalDetailElm[e].style.display="none";for(var e=0;e<this.modal.length;e++){var o=this.modal[e].getAttribute("href");o||this.AddClass(this.modal[e],this.linkInnerHTML)}}}},{key:"ReInit",value:function(){for(var t=0;t<this.modal.length;t++)this.modal[t].removeEventListener("click",this.Openfunc);this.Init()}},{key:"CreateModalArea",value:function(){var t=this,e='<div id="'+this.jModalBox+'" class="'+this.addClass+'">';e+='<div id="'+this.jModalBoxInner+'">',e+='<div id="'+this.jModalWrap+'"></div>',e+='<p id="'+this.jModalBoxClose+'">'+this.closeBtn+"</p>",e+="</div>",e+="</div>",e+='<div id="'+this.jModalBoxBg+'"></div>',this.jModalBoxCSS="position: "+(this.fixed?"fixed":"absolute")+"; ",this.jModalBoxCSS+="top: "+(this.fixed?"50%":"0")+"; ",this.jModalBoxCSS+="left: 50%; ",this.jModalBoxCSS+="z-index: 10001; ",this.jModalBoxCSS+="width: 100%; ",this.jModalBoxCSS+="cursor: pointer; ",this.jModalBoxCSS+="transform: "+(this.fixed?"translate(-50%,-50%)":"translate(-50%,0)")+"; ",this.jModalBoxCSS+="-ms-transform: "+(this.fixed?"translate(-50%,-50%)":"translate(-50%,0)")+"; ",this.jModalBoxCSS+="-webkit-transform: "+(this.fixed?"translate(-50%,-50%)":"translate(-50%,0)")+"; ",this.jModalBoxCSS+="opacity: 0; ",this.jModalBoxCSS+="pointer-events: none; ",this.jModalBoxBgCSS="position: fixed; ",this.jModalBoxBgCSS+="left: 0; ",this.jModalBoxBgCSS+="top: 0; ",this.jModalBoxBgCSS+="width: 100%; ",this.jModalBoxBgCSS+="height: 200%; ",this.jModalBoxBgCSS+="background:"+this.bgColor+"; ",this.jModalBoxBgCSS+="transition: all "+this.modalSpeed/1e3+"s ease; ",this.jModalBoxBgCSS+="-webkit-transition: all "+this.modalSpeed/1e3+"s ease; ",this.jModalBoxBgCSS+="z-index: 10000; ",this.jModalBoxBgCSS+="cursor: pointer; ",this.jModalBoxBgCSS+="opacity: 0; ",this.jModalBoxBgCSS+="pointer-events: none; ";var o="position: absolute; ";o+="right: 0; ",o+="top: -50px; ",o+="z-index: 10000; ",o+="cursor: pointer; ",o+="color: #FFF; ",o+="font-size: 40px; ",o+="line-height: 1; ",o+="margin: 0; ",this.jModalBoxInnerCSS="background: "+this.innerBgColor+"; ",this.jModalBoxInnerCSS+="padding: "+this.innerBgPadding+"px; ",this.jModalBoxInnerCSS+="position: relative; ",this.jModalBoxInnerCSS+="cursor: default; ",this.jModalBoxImgCSS="padding: 0; ",this.jModalBoxImgCSS+="background: none; ",this.jModalImgCSS="height: auto; ",this.jModalImgCSS+="max-width: 100%; ",this.jModalImgCSS+="display: block; ",this.jModalImgCSS+="margin: 0 auto; ",this.jModalBoxMovieCSS="padding: 0; ",this.jModalBoxMovieCSS+="background: none; ",this.jModalBoxMovieCSS+="height: 0; ",this.jModalBoxMovieCSS+="position: relative; ",this.jModalBoxMovieCSS+="padding-bottom: 56.25%; ",this.jModalBoxMovieIframeCSS="display: block; ",this.jModalBoxMovieIframeCSS+="height: 100%; ",this.jModalBoxMovieIframeCSS+="position: absolute; ",this.jModalBoxMovieIframeCSS+="left: 0; ",this.jModalBoxMovieIframeCSS+="top: 0; ",this.jModalBoxMovieIframeCSS+="width: 100%; ",this.modal&&(document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend",e),this.jModalBoxElm=document.getElementById(this.jModalBox),this.jModalBoxInnerElm=document.getElementById(this.jModalBoxInner),this.jModalBoxCloseElm=document.getElementById(this.jModalBoxClose),this.jModalBoxBgElm=document.getElementById(this.jModalBoxBg),this.linkInnerHTMLElm=document.getElementsByClassName(this.linkInnerHTML),this.jModalBoxElm.style.cssText=this.jModalBoxCSS,this.jModalBoxInnerElm.style.cssText=this.jModalBoxInnerCSS,this.jModalBoxBgElm.style.cssText=this.jModalBoxBgCSS,this.jModalBoxCloseElm.style.cssText=o,this.modal[0].classList||(this.jModalBoxElm.style.display="none",this.jModalBoxBgElm.style.display="none"));var i=function(e){e.preventDefault(),t.Close()};this.jModalBoxCloseElm=document.getElementById(this.jModalBoxClose),this.jModalBoxBgElm=document.getElementById(this.jModalBoxBg),this.jModalBoxCloseElm.addEventListener("click",i),this.jModalBoxBgElm.addEventListener("click",i)}},{key:"Open",value:function(t){return this.modal[0]?(this.target=document.querySelectorAll(t)[0],void this.Set()):(console.error("OpenModal('"+t+"') ERROR  '"+t+"' is not found."),!1)}},{key:"Set",value:function(){var t=this.target.getAttribute("href"),e=new String(t);this.index=Array.prototype.indexOf.call(this.modal,this.target),this.scrollVal=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop,t?e.match(this.jModalImg)?this.IfImage(t):e.match(this.jModalMovie)?this.IfYoutube(t):e.match(this.jModalHtml)&&this.IfOuterHTML(t):this.IfInnerHTML()}},{key:"IfImage",value:function(t){var e=this,o='<img src="'+t+'" class="j-modal_img">',i=new Image;i.src=t,this.AddClass(this.jModalBoxInnerElm,"j-modal_img"),this.jModalBoxInnerElm.style.cssText=this.jModalBoxImgCSS,this.jModalWrapElm=this.jModalBoxInnerElm.querySelectorAll("#"+this.jModalWrap)[0],this.jModalWrapElm.innerHTML=o,document.getElementsByClassName("j-modal_img")[0].style.cssText=this.jModalImgCSS,i.onload=function(){e.Ready()}}},{key:"IfYoutube",value:function(t){var e=t.split("/")[3],o='<iframe src="https://www.youtube.com/embed/'+e+'?autoplay=1&rel=0&playsinline=1" allowfullscreen="true" frameborder="0"></iframe>';this.AddClass(this.jModalBoxInnerElm,"j-modal_movie"),this.jModalBoxInnerElm.style.cssText=this.jModalBoxImgCSS,this.jModalWrapElm=this.jModalBoxInnerElm.querySelectorAll("#"+this.jModalWrap)[0],this.jModalWrapElm.style.cssText=this.jModalBoxMovieCSS,this.jModalWrapElm.innerHTML=o,this.jModalWrapElm.getElementsByTagName("iframe")[0].style.cssText=this.jModalBoxMovieIframeCSS,this.Ready()}},{key:"IfOuterHTML",value:function(t){var e=this,o=this.target.getAttribute("data-ModalType");if(o){if("iframe"==o){var i=.8*window.innerHeight,l=this.target.getAttribute("data-modalHeight");l&&(i=l);var n='<iframe src="'+t+'" width="100%" height="'+i+'" frameborder="0"></iframe>';this.jModalBoxInnerElm.style.cssText=this.jModalBoxImgCSS,this.jModalWrapElm=this.jModalBoxInnerElm.querySelectorAll("#"+this.jModalWrap)[0],this.jModalWrapElm.innerHTML=n,this.Ready()}}else{console.error("The request for '"+t+"' timed out.");var s=new XMLHttpRequest;s.open("GET",t,!0),s.timeout=3e3,s.onload=function(t){4===s.readyState&&(200===s.status?(e.jModalBoxInnerElm.style.cssText=e.jModalBoxInnerCSS,e.jModalWrapElm=e.jModalBoxInnerElm.querySelectorAll("#"+e.jModalWrap)[0],e.jModalWrapElm.innerHTML=s.responseText,e.Ready()):console.error("This request got an error."))},s.ontimeout=function(e){console.error("The request for "+t+" timed out.")},s.onerror=function(t){console.error("This request got an error.")},s.send(null)}}},{key:"IfInnerHTML",value:function(){var t=Array.prototype.indexOf.call(this.linkInnerHTMLElm,this.target),e=this.jModalDetailElm[t].innerHTML;this.jModalBoxInnerElm.style.cssText=this.jModalBoxInnerCSS,this.jModalWrapElm=this.jModalBoxInnerElm.querySelectorAll("#"+this.jModalWrap)[0],this.jModalWrapElm.innerHTML=e,this.Ready()}},{key:"Ready",value:function(){var t=this,e=this.target.getAttribute("data-modalWidth"),o=this.target.getAttribute("data-modalHeight");e=e?e:this.width+"px",o=o?o:"initial",this.jModalBoxElm.style.maxWidth=e,this.jModalBoxElm.style.height=o,this.jModalBoxElm.style.transition="initial",this.jModalBoxElm.style.setProperty("-webkit-transition","initial"),setTimeout(function(){t.Show()},10)}},{key:"Show",value:function(){var t=this,e=window.innerHeight,o=this.jModalBoxElm.scrollHeight,i=(e-o)/2;this.fixed?(this.tagHTML.style.position="fixed",this.tagHTML.style.width="100%",this.tagHTML.style.top=-this.scrollVal+"px"):this.jModalBoxElm.style.top=e>o?this.scrollVal+i+"px":this.scrollVal+40+"px",setTimeout(function(){if(t.modal[0].classList){t.jModalBoxElm.style.opacity=1,t.jModalBoxElm.style.pointerEvents="inherit",t.jModalBoxElm.style.transition="all "+t.modalSpeed/1e3+"s ease",t.jModalBoxElm.style.setProperty("-webkit-transition","all "+t.modalSpeed/1e3+"s ease"),t.jModalBoxBgElm.style.opacity=t.bgOpacity,t.jModalBoxBgElm.style.pointerEvents="inherit";var e=function o(){t.OpenEnd(t.index),t.jModalBoxElm.removeEventListener("transitionend",o,!1)};t.jModalBoxElm.addEventListener("transitionend",e,!1)}else t.jModalBoxElm.style.opacity=1,t.jModalBoxBgElm.style.opacity=1,t.jModalBoxElm.style.display="block",t.jModalBoxBgElm.style.display="block"},100)}},{key:"Close",value:function(){var t=this;this.jModalBoxElm.style.opacity=0,this.jModalBoxElm.style.pointerEvents="none",this.jModalBoxBgElm.style.opacity=0,this.jModalBoxBgElm.style.pointerEvents="none";var e=function o(){t.jModalBoxInnerElm.setAttribute("class",!1),t.jModalWrapElm.setAttribute("style",!1),t.jModalWrapElm.innerHTML="",t.CloseEnd(),t.jModalBoxElm.removeEventListener("transitionend",o,!1)};this.jModalBoxElm.addEventListener("transitionend",e,!1),this.modal[0].classList||(this.jModalBoxElm.style.display="none",this.jModalBoxBgElm.style.display="none"),this.fixed&&(this.tagHTML.removeAttribute("style"),window.scroll(0,this.scrollVal))}},{key:"AddClass",value:function(t,e){t.classList?t.classList.add(e):t.className+=" "+e}}]),t}();o["default"]=n},{}],6:[function(t,e,o){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(o,"__esModule",{value:!0});var l=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),n=function(){function t(e,o){i(this,t),this.selector=e,this.scrollNav=document.querySelectorAll(this.selector)[0],null==o&&(o={}),this.box=o.boxElm?o.boxElm:".f-section",this.btn=o.activeElm?o.activeElm:"li",this.posFix=o.posFix?o.posFix:0,this.edgeJudge=o.edgeJudge,null==this.edgeJudge&&(this.edgeJudge=!0),this.boxElm=document.querySelectorAll(this.box),this.scrollNav&&(this.btnElm=this.scrollNav.querySelectorAll(this.btn),this.Init())}return l(t,[{key:"Init",value:function(){for(var t=this,e=0;e<this.boxElm.length;e++){var o=this.boxElm[e].id;this.btnElm[e].querySelectorAll("a")[0].setAttribute("href","#"+o)}this.Ready(),window.addEventListener("resize",function(){t.Ready()}),window.addEventListener("scroll",function(){t.Ready()})}},{key:"Ready",value:function(){this.Reset(),this.GetTarget()}},{key:"Reset",value:function(){for(var t=0;t<this.btnElm.length;t++)this.RemoveClass(this.btnElm[t],"active");for(var t=0;t<this.boxElm.length;t++)this.RemoveClass(this.boxElm[t],"active")}},{key:"GetTarget",value:function(){var t=window.innerHeight,e=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop,o=void 0;if(o=this.edgeJudge?document.documentElement.scrollHeight==t+e||0==e:this.edgeJudge){var i=0==e?this.boxElm[0].id:this.boxElm[this.boxElm.length-1].id;this.Position(i)}else for(var l=0;l<this.boxElm.length;l++){var n=this.boxElm[l].scrollHeight,s=this.GetOffset(this.boxElm[l]).top,a=void 0;a=String(this.posFix).indexOf("%")>-1?e+t*(this.posFix.split("%")[0]/100):e+this.posFix,a>=s&&a<s+n&&this.Position(this.boxElm[l].id)}}},{key:"Position",value:function(t){for(var e=0;e<this.btnElm.length;e++){var o=this.btnElm[e].querySelectorAll("a")[0].getAttribute("href").split("#")[1];t===o&&(this.AddClass(this.btnElm[e],"active"),this.AddClass(document.getElementById(o),"active"))}}},{key:"GetOffset",value:function(t){var e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset-document.documentElement.clientTop,left:e.left+window.pageXOffset-document.documentElement.clientLeft}}},{key:"AddClass",value:function(t,e){t.classList?t.classList.add(e):t.className+=" "+e}},{key:"RemoveClass",value:function(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}}]),t}();o["default"]=n},{}],7:[function(t,e,o){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(o,"__esModule",{value:!0});var l=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),n=function(){function t(e,o){var l=this;i(this,t),this.selector=e,this.btn=document.querySelectorAll(this.selector),null==o&&(o={}),this.speed=o.speed?o.speed:800,this.easing=o.easing?o.easing:"linear",this.posFix=o.posFix?o.posFix:0,this.ignore=o.ignore?o.ignore:"",this.blank=!!o.blank&&o.blank,this.customAnchor=o.customAnchor?o.customAnchor:"#/",this.moveFlag=!1,this.ScrollEnd=function(){},this.btn[0]&&(this.oldBrowser=this.GetAndroidVersion()<4.4||!this.btn[0].classList,this.Init()),this.blank&&window.addEventListener("load",function(){setTimeout(function(){l.AnchorLink()},200)})}return l(t,[{key:"Init",value:function(){for(var t=this,e=0;e<this.btn.length;e++)this.btn[e].addEventListener("click",function(e){for(var o=!1,i=t.ignore.split(","),l=0;l<i.length;l++){var n=i[l].split(".")[1]?i[l].split(".")[1]:i[l].split("#")[1];e.currentTarget.classList?e.currentTarget.classList.contains(n)&&(o=!0):new RegExp("(^| )"+n+"( |$)","gi").test(e.currentTarget.className)&&(o=!0),e.currentTarget.id==n&&(o=!0)}if(!t.moveFlag){var s=e.currentTarget.getAttribute("href");if(s&&""==s.split("#")[0]&&!o){e.preventDefault(),t.moveFlag=!0;var a=s.split("#")[1],r=document.getElementById(a),d=t.GetOffset(r).top;t.SmoothScroll(d)}}})}},{key:"SmoothScroll",value:function(t){var e=this,o=t-this.posFix,i=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop,l=o-i,n=i,a=(new Date).getTime(),r=void 0,d=i,c=void 0,h=function(){e.oldBrowser||(r=requestAnimationFrame(c));var t=(new Date).getTime(),h=t-a,u=Math.round(s[e.easing](h,i,Math.abs(l),e.speed));n+=l>0?u-d:-(u-d),window.scroll(0,n),d=u,h>=e.speed&&(e.moveFlag=!1,e.ScrollEnd(),e.oldBrowser?clearInterval(c):cancelAnimationFrame(r),window.scroll(0,o))};this.oldBrowser?c=setInterval(h,33):(c=h)()}},{key:"GetOffset",value:function(t){var e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset-document.documentElement.clientTop,left:e.left+window.pageXOffset-document.documentElement.clientLeft}}},{key:"AnchorLink",value:function(){for(var t=0;t<this.btn.length;t++){for(var e=!1,o=this.ignore.split(","),i=this.btn[t].getAttribute("href"),l=0;l<o.length;l++){var n=o[l].split(".")[1]?o[l].split(".")[1]:o[l].split("#")[1];this.btn[t].classList?this.btn[t].classList.contains(n)&&(e=!0):new RegExp("(^| )"+n+"( |$)","gi").test(this.btn[t].className)&&(e=!0),this.btn[t].id.match(n)&&(e=!0)}if(i&&!e){var s=i.split("#");s.length>1&&""!=s[0]&&this.btn[t].setAttribute("href",i.replace(/#/g,this.customAnchor))}}if(location.href.split(this.customAnchor)[1]){var a=document.getElementById(location.href.split(this.customAnchor)[1]),r=this.GetOffset(a).top;this.SmoothScroll(r)}}},{key:"GetAndroidVersion",value:function(){var t=navigator.userAgent;if(t.toLowerCase().indexOf("android")>0&&t.toLowerCase().indexOf("mobile")>0)return parseFloat(t.slice(t.indexOf("Android")+8))}}]),t}();o["default"]=n;var s={linear:function(t,e,o,i){return t/=i,o*t+e},easeInCubic:function(t,e,o,i){return t/=i,o*t*t*t+e},easeOutCubic:function(t,e,o,i){return t/=i,t-=1,o*(t*t*t+1)+e},easeInOutCubic:function(t,e,o,i){return t/=i/2,t<1?o/2*t*t*t+e:(t-=2,o/2*(t*t*t+2)+e)},easeInQuart:function(t,e,o,i){return t/=i,o*t*t*t*t+e},easeOutQuart:function(t,e,o,i){return t/=i,t-=1,-o*(t*t*t*t-1)+e},easeInOutQuart:function(t,e,o,i){return t/=i/2,t<1?o/2*t*t*t*t+e:(t-=2,-o/2*(t*t*t*t-2)+e)},easeInQuint:function(t,e,o,i){return t/=i,o*t*t*t*t*t+e},easeOutQuint:function(t,e,o,i){return t/=i,t-=1,o*(t*t*t*t*t+1)+e},easeInOutQuint:function(t,e,o,i){return t/=i/2,t<1?o/2*t*t*t*t*t+e:(t-=2,o/2*(t*t*t*t*t+2)+e)}}},{}],8:[function(t,o,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var l=function(t,e){t.classList?t.classList.add(e):t.className+=" "+e},n=function(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")},s=function(t,o){var i=!1;return t.classList?t.classList.contains(o)&&(i=!0):new RegExp("(^| )"+o+"( |$)","gi").test(e.target.className)&&(i=!0),i},a=function(t,e){var o="";for(var i in e)o+=""+i+":"+e[i]+"; ";t.style.cssText=o},r=function(t,e){var o,i=t,l=0;for(o=e.split(".")[1]?e.split(".")[1]:e.split("#")[1]?e.split("#")[1]:e;l<100&&(i=i.parentNode,i.tagName.toLowerCase()!=o);){if(i.className){if(i.className.match(o))break}else if(i.id&&i.id.match(o))break;l++}return i},d=function(t,e){var o=Array.prototype.filter.call(t.parentNode.children,function(o,i){for(var l=t.parentNode.querySelectorAll(e),n=null,i=0;i<l.length;i++)o===l[i]&&(n=l[i]);return o!==t&&o===n});return 0!=o.length?o:null},c=function(t){var e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset-document.documentElement.clientTop,left:e.left+window.pageXOffset-document.documentElement.clientLeft}},h=function(t){var e=window.getComputedStyle(t),o=t.offsetHeight,i=parseFloat(e.borderTopWidth),l=parseFloat(e.borderBottomWidth),n=parseFloat(e.paddingTop),s=parseFloat(e.paddingBottom),a={height:o,bordertop:i,borderBottom:l,paddingTop:n,paddingBottom:s,outerHeight:o+i+l+n+s};return a},u=function(t){var e=window.getComputedStyle(t),o=t.offsetWidth,i=parseFloat(e.borderLeftWidth),l=parseFloat(e.borderRightWidth),n=parseFloat(e.paddingLeft),s=parseFloat(e.paddingRight),a={width:o,borderLeft:i,borderRight:l,paddingLeft:n,paddingRight:s,outerWidth:o+i+l+n+s};return a},m=function(t,e){var o=!1,i=e.split(".")[1]?e.split(".")[1]:e.split("#")[1];return t.classList?t.classList.contains(i)&&(o=!0):new RegExp("(^| )"+i+"( |$)","gi").test(t.className)&&(o=!0),t.id==i&&(o=!0),o};i.AddClass=l,i.RemoveClass=n,i.HasClass=s,i.SetCss=a,i.GetParents=r,i.GetSiblings=d,i.Not=m,i.GetOffset=c,i.GetHeightData=h,i.GetWidthData=u},{}]},{},[1]);