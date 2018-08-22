/*

MeganeTemplate

Version: 5.0.0
Website: http://megane-template.com/
License: Dentsu Isobar All Rights Reserved.

*/
export default class jModal {

    constructor(selector, option) {

        this.selector = selector;

        this.jModalDetail = "j-modal_detail";
        this.jModalBox = this.selector.split(".")[1] + "_box";
        this.jModalBoxInner = this.selector.split(".")[1] + "_box_inner";
        this.jModalWrap = this.selector.split(".")[1] + "_wrap";
        this.jModalBoxClose = this.selector.split(".")[1] + "_box_close";
        this.jModalBoxBg = this.selector.split(".")[1] + "_bg";
        this.linkInnerHTML = this.selector.split(".")[1] + "_link_innerHTML";

        this.modal = document.querySelectorAll( this.selector );

        //option
        if(option == null) option = {};
        this.width = option.width ? option.width : 960;
        this.modalSpeed = option.modalSpeed ? option.modalSpeed : 200;
        this.bgColor = option.bgColor ? option.bgColor : "#000";
        this.bgOpacity = option.bgOpacity ? option.bgOpacity : 0.8;
        this.innerBgColor = option.innerBgColor ? option.innerBgColor : "#FFF";
        this.innerBgPadding = option.innerBgPadding>=0 ? option.innerBgPadding : 20;
        this.closeBtn = option.closeBtn || option.closeBtn=="" ? option.closeBtn : "×";
        this.closeCancel = option.closeCancel ? option.closeCancel : false;
        this.trigger = option.trigger ? option.trigger : "click";
        this.addClass = option.addClass ? option.addClass : "";
        this.fixed = option.fixed && option.fixed ? option.fixed : false;

        this.OpenEnd = function(){};
        this.CloseEnd = function(){};

        this.jModalMovieHeight = (this.width / 16) * 9; //動画縦幅 16:9
        this.jModalImg = ".gif|.jpg|.jpeg|.png"; //画像を判別
        this.jModalHtml = "//|.html|.php|="; //外部HTML or PHPを判別
        this.jModalMovie = "youtube|youtu"; //動画を判別

        this.target = null;
        this.index = null;

        this.tagHTML = document.getElementsByTagName('html')[0];

        this.Init();
        this.CreateModalArea();

    }


    /**
    **
    ** Init
    **
    **/
    Init() {

        this.modal = document.querySelectorAll( this.selector );

        this.Openfunc = (e) => {

            e.preventDefault();

            this.target = e.currentTarget;
            this.Set();

        }

        if( this.modal[0] ) {

            this.jModalDetailElm = document.getElementsByClassName("j-modal_detail");

            for (var i = 0; i < this.modal.length; i++) {
                this.modal[i].addEventListener( "click", this.Openfunc);
            }

            for (var i = 0; i < this.jModalDetailElm.length; i++) {
                this.jModalDetailElm[i].style.display = "none";
            }

            for (var i = 0; i < this.modal.length; i++) {
                const THIS_DATA = this.modal[i].getAttribute("href");
                if(!THIS_DATA) this.AddClass( this.modal[i], this.linkInnerHTML );
            }

        }
    }


    ReInit() {

        for (var i = 0; i < this.modal.length; i++) {

            this.modal[i].removeEventListener( "click", this.Openfunc);

        }

        this.Init();

    }


    CreateModalArea() {

        let modalAppendHTML  = '<div id="'+ this.jModalBox +'" class="'+ this.addClass +'">';
            modalAppendHTML += '<div id="'+ this.jModalBoxInner +'">';
            modalAppendHTML += '<div id="'+ this.jModalWrap +'"></div>';
            modalAppendHTML += '<p id="'+ this.jModalBoxClose +'">'+ this.closeBtn +'</p>';
            modalAppendHTML += '</div>';
            modalAppendHTML += '</div>';
            modalAppendHTML += '<div id="'+ this.jModalBoxBg +'"></div>';

        this.jModalBoxCSS =  "position: " + ( this.fixed ? "fixed" : "absolute" ) + "; ";
        this.jModalBoxCSS += "top: " + ( this.fixed ? "50%" : "0" ) + "; ";
        this.jModalBoxCSS += "left: 50%; ";
        this.jModalBoxCSS += "z-index: 10001; ";
        this.jModalBoxCSS += "width: 100%; ";
        this.jModalBoxCSS += "cursor: pointer; ";
        this.jModalBoxCSS += "transform: " + ( this.fixed ? "translate(-50%,-50%)" : "translate(-50%,0)" ) + "; ";
        this.jModalBoxCSS += "-ms-transform: " + ( this.fixed ? "translate(-50%,-50%)" : "translate(-50%,0)" ) + "; ";
        this.jModalBoxCSS += "-webkit-transform: " + ( this.fixed ? "translate(-50%,-50%)" : "translate(-50%,0)" ) + "; ";
        this.jModalBoxCSS += "opacity: 0; ";
        this.jModalBoxCSS += "pointer-events: none; "

        this.jModalBoxBgCSS = "position: fixed; ";
        this.jModalBoxBgCSS += "left: 0; ";
        this.jModalBoxBgCSS += "top: 0; " ;
        this.jModalBoxBgCSS += "width: 100%; ";
        this.jModalBoxBgCSS += "height: 200%; ";
        this.jModalBoxBgCSS += "background:" + this.bgColor + "; ";
        this.jModalBoxBgCSS += "transition: all "+ this.modalSpeed/1000 +"s ease; ";
        this.jModalBoxBgCSS += "-webkit-transition: all "+ this.modalSpeed/1000 +"s ease; ";
        this.jModalBoxBgCSS += "z-index: 10000; ";
        this.jModalBoxBgCSS += "cursor: pointer; ";
        this.jModalBoxBgCSS += "opacity: 0; ";
        this.jModalBoxBgCSS += "pointer-events: none; ";

        let jModalBoxCloseCSS =  "position: absolute; ";
            jModalBoxCloseCSS += "right: 0; ";
            jModalBoxCloseCSS += "top: -50px; ";
            jModalBoxCloseCSS += "z-index: 10000; ";
            jModalBoxCloseCSS += "cursor: pointer; ";
            jModalBoxCloseCSS += "color: #FFF; ";
            jModalBoxCloseCSS += "font-size: 40px; ";
            jModalBoxCloseCSS += "line-height: 1; ";
            jModalBoxCloseCSS += "margin: 0; ";

        this.jModalBoxInnerCSS =  "background: " + this.innerBgColor + "; ";
        this.jModalBoxInnerCSS += "padding: " + this.innerBgPadding + "px; ";
        this.jModalBoxInnerCSS += "position: relative; ";
        this.jModalBoxInnerCSS += "cursor: default; ";

        this.jModalBoxImgCSS = "padding: 0; "
        this.jModalBoxImgCSS += "background: none; "

        this.jModalImgCSS =  "height: auto; ";
        this.jModalImgCSS += "max-width: 100%; ";
        this.jModalImgCSS += "display: block; ";
        this.jModalImgCSS += "margin: 0 auto; "

        this.jModalBoxMovieCSS =  "padding: 0; ";
        this.jModalBoxMovieCSS += "background: none; ";
        this.jModalBoxMovieCSS += "height: 0; ";
        this.jModalBoxMovieCSS += "position: relative; ";
        this.jModalBoxMovieCSS += "padding-bottom: 56.25%; "

        this.jModalBoxMovieIframeCSS =  "display: block; ";
        this.jModalBoxMovieIframeCSS += "height: 100%; ";
        this.jModalBoxMovieIframeCSS += "position: absolute; ";
        this.jModalBoxMovieIframeCSS += "left: 0; ";
        this.jModalBoxMovieIframeCSS += "top: 0; ";
        this.jModalBoxMovieIframeCSS += "width: 100%; "

        if( this.modal ) {

            document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend",modalAppendHTML);

            this.jModalBoxElm = document.getElementById(this.jModalBox);
            this.jModalBoxInnerElm = document.getElementById(this.jModalBoxInner);
            this.jModalBoxCloseElm = document.getElementById(this.jModalBoxClose);
            this.jModalBoxBgElm = document.getElementById(this.jModalBoxBg);
            this.linkInnerHTMLElm = document.getElementsByClassName(this.linkInnerHTML);

            this.jModalBoxElm.style.cssText = this.jModalBoxCSS;
            this.jModalBoxInnerElm.style.cssText = this.jModalBoxInnerCSS;
            this.jModalBoxBgElm.style.cssText = this.jModalBoxBgCSS;
            this.jModalBoxCloseElm.style.cssText = jModalBoxCloseCSS;

            if( !this.modal[0].classList ) { //IE9
                this.jModalBoxElm.style.display = "none";
                this.jModalBoxBgElm.style.display = "none";
            }

        }


        const CloseFunc = (e) => {
            e.preventDefault();
            this.Close();
        }

        this.jModalBoxCloseElm = document.getElementById(this.jModalBoxClose);
        this.jModalBoxBgElm = document.getElementById(this.jModalBoxBg);

        this.jModalBoxCloseElm.addEventListener("click", CloseFunc);
        this.jModalBoxBgElm.addEventListener("click", CloseFunc);

    }
    //CreateModalArea

    Open( elm ) {

        if( this.modal[0] ) {

             this.target = document.querySelectorAll( elm )[0];
             this.Set();

        } else {

            console.error( "OpenModal('" + elm + "') ERROR  '" + elm + "' is not found." );
            return false;

        }

    }

    Set() {

        const THIS_DATA = this.target.getAttribute("href");
        const THIS_DATA_STRING = new String( THIS_DATA );
        this.index = Array.prototype.indexOf.call(this.modal, this.target);

        this.scrollVal = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        if( THIS_DATA ) {

            if( THIS_DATA_STRING.match( this.jModalImg ) ) {//hrefが画像の場合

                this.IfImage( THIS_DATA );

            } else if( THIS_DATA_STRING.match( this.jModalMovie ) ) {//hrefがyoutubeの場合

                this.IfYoutube( THIS_DATA );

            } else if( THIS_DATA_STRING.match( this.jModalHtml)  ) {//hrefが外部HTMLの場合

                this.IfOuterHTML( THIS_DATA );

            }

        } else {

            this.IfInnerHTML();

        }

    }
    //Set

    IfImage(thisData) {


        let modalAppendHTML  = '<img src="'+ thisData +'" class="j-modal_img">';

        const IMG = new Image();
        IMG.src = thisData;

        this.AddClass( this.jModalBoxInnerElm, "j-modal_img" );
        this.jModalBoxInnerElm.style.cssText = this.jModalBoxImgCSS;

        this.jModalWrapElm = this.jModalBoxInnerElm.querySelectorAll("#" + this.jModalWrap)[0];
        this.jModalWrapElm.innerHTML = modalAppendHTML;

        document.getElementsByClassName("j-modal_img")[0].style.cssText = this.jModalImgCSS;

        IMG.onload = () => {
            this.Ready();
        };

    }
    //IfImage
    IfYoutube(thisData) {

        const THIS_ID = thisData.split("/")[3];
        let modalAppendHTML  = '<iframe src="https://www.youtube.com/embed/'+ THIS_ID +'?autoplay=1&rel=0&playsinline=1" allowfullscreen="true" frameborder="0"></iframe>';

        this.AddClass( this.jModalBoxInnerElm, "j-modal_movie" );
        this.jModalBoxInnerElm.style.cssText = this.jModalBoxImgCSS;

        this.jModalWrapElm = this.jModalBoxInnerElm.querySelectorAll("#" + this.jModalWrap)[0];
        this.jModalWrapElm.style.cssText = this.jModalBoxMovieCSS;
        this.jModalWrapElm.innerHTML = modalAppendHTML;

        this.jModalWrapElm.getElementsByTagName("iframe")[0].style.cssText = this.jModalBoxMovieIframeCSS;

        this.Ready();

    }
    //IfYoutube
    IfOuterHTML(thisData) {

        const TYPE = this.target.getAttribute("data-ModalType");

        if(!TYPE) {

            console.error("The request for '" + thisData + "' timed out.");

            const REQUEST = new XMLHttpRequest();
            REQUEST.open("GET", thisData, true);
            REQUEST.timeout = 3000;

            REQUEST.onload = (event) => {

                if (REQUEST.readyState === 4) {
                    if (REQUEST.status === 200) {

                        this.jModalBoxInnerElm.style.cssText = this.jModalBoxInnerCSS;

                        this.jModalWrapElm = this.jModalBoxInnerElm.querySelectorAll("#" + this.jModalWrap)[0];
                        this.jModalWrapElm.innerHTML = REQUEST.responseText;

                        this.Ready();

                    } else {
                        console.error("This request got an error.");
                    }
                }

            };
            REQUEST.ontimeout = (event) => {
                console.error("The request for " + thisData + " timed out.");
            };
            REQUEST.onerror = (event) => {
                console.error("This request got an error.");
            };
            REQUEST.send(null);

        } else if (TYPE == "iframe") {

            let height = window.innerHeight * 0.8;
            let modalHeight = this.target.getAttribute("data-modalHeight")
            if( modalHeight ) height = modalHeight;

            let modalAppendHTML  = '<iframe src="'+ thisData +'" width="100%" height="'+ height +'" frameborder="0"></iframe>';

            this.jModalBoxInnerElm.style.cssText = this.jModalBoxImgCSS;

            this.jModalWrapElm = this.jModalBoxInnerElm.querySelectorAll("#" + this.jModalWrap)[0];
            this.jModalWrapElm.innerHTML = modalAppendHTML;

            this.Ready();

        }

    }
    //IfOuterHTML
    IfInnerHTML() {

        const INDEX = Array.prototype.indexOf.call(this.linkInnerHTMLElm, this.target);
        const THIS_HTML = this.jModalDetailElm[ INDEX ].innerHTML;

        this.jModalBoxInnerElm.style.cssText = this.jModalBoxInnerCSS;

        this.jModalWrapElm = this.jModalBoxInnerElm.querySelectorAll("#" + this.jModalWrap)[0];
        this.jModalWrapElm.innerHTML = THIS_HTML;

        this.Ready();

    }
    //IfInnerHTML

    /**
    **
    ** Ready
    **
    **/
    Ready() {

        let width = this.target.getAttribute("data-modalWidth");
        let height = this.target.getAttribute("data-modalHeight");

        width = width ? width : this.width + "px";
        height = height ? height : "initial";

        this.jModalBoxElm.style.maxWidth = width;
        this.jModalBoxElm.style.height = height;
        this.jModalBoxElm.style.transition = "initial";
        this.jModalBoxElm.style.setProperty("-webkit-transition", "initial");

        setTimeout( () => {
            this.Show();
        }, 10 );

    }
    //Ready


    /**
    **
    ** Show
    **
    **/
    Show() {

        const WIN_HEIGHT = window.innerHeight;
        const THIS_HEIGHT = this.jModalBoxElm.scrollHeight;
        const FIX = (WIN_HEIGHT - THIS_HEIGHT) / 2;

        if( !this.fixed ) { //absolute の場合 : モーダル表示位置計算

            this.jModalBoxElm.style.top = WIN_HEIGHT > THIS_HEIGHT ? (this.scrollVal + FIX) + "px" : (this.scrollVal + 40) + "px";

        } else { //fixed の場合

            this.tagHTML.style.position = "fixed";
            this.tagHTML.style.width = "100%";
            this.tagHTML.style.top = -this.scrollVal + "px";

        }

        setTimeout( () => {

            if( !this.modal[0].classList ) { //IE9

                this.jModalBoxElm.style.opacity = 1;
                this.jModalBoxBgElm.style.opacity = 1;
                this.jModalBoxElm.style.display = "block";
                this.jModalBoxBgElm.style.display = "block";

            } else {

                this.jModalBoxElm.style.opacity = 1;
                this.jModalBoxElm.style.pointerEvents = "inherit";
                this.jModalBoxElm.style.transition = "all " + this.modalSpeed / 1000 + "s ease";
                this.jModalBoxElm.style.setProperty("-webkit-transition", "all " + this.modalSpeed / 1000 + "s ease");

                this.jModalBoxBgElm.style.opacity = this.bgOpacity;
                this.jModalBoxBgElm.style.pointerEvents = "inherit";

                const EndFunc = () => {
                    this.OpenEnd( this.index );
                    this.jModalBoxElm.removeEventListener("transitionend", EndFunc, false);
                };

                this.jModalBoxElm.addEventListener("transitionend", EndFunc, false);

            }

        },100);

    }


    /**
    **
    ** Close
    **
    **/
    Close() {

        this.jModalBoxElm.style.opacity = 0;
        this.jModalBoxElm.style.pointerEvents = "none";

        this.jModalBoxBgElm.style.opacity = 0;
        this.jModalBoxBgElm.style.pointerEvents = "none";

        const EndFunc = () => {

            this.jModalBoxInnerElm.setAttribute("class", false);
            this.jModalWrapElm.setAttribute("style", false)
            this.jModalWrapElm.innerHTML = "";

            this.CloseEnd();

            this.jModalBoxElm.removeEventListener("transitionend", EndFunc, false);

        };

        this.jModalBoxElm.addEventListener("transitionend", EndFunc, false);

        //

        if( !this.modal[0].classList ) { //IE9
            this.jModalBoxElm.style.display = "none";
            this.jModalBoxBgElm.style.display = "none";
        }

        if( this.fixed ) { //fixed の場合

            this.tagHTML.removeAttribute("style");

            window.scroll( 0, this.scrollVal );

        }
    }

    AddClass( element, _className ){

        if (element.classList) {
            element.classList.add(_className);
        } else {
            element.className += ' ' + _className;
        }

    }

}
