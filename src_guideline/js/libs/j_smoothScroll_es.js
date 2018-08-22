/*

MeganeTemplate

Version: 5.0.0
Website: http://megane-template.com/
License: Dentsu Isobar All Rights Reserved.

*/
export default class jSmoothScroll {

    constructor(selector, option) {

        this.selector = selector;
        this.btn = document.querySelectorAll(this.selector);

        //option
        if(option == null) option = {};
        this.speed = option.speed ? option.speed : 800;
        this.easing = option.easing ? option.easing : "linear";
        this.posFix = option.posFix ? option.posFix : 0;
        this.ignore = option.ignore ? option.ignore : "";
        this.blank = option.blank ? option.blank : false;
        this.customAnchor = option.customAnchor ? option.customAnchor : "#/";

        this.moveFlag = false;

        this.ScrollEnd = function(){};

        if( this.btn[0] ) {
            this.oldBrowser = this.GetAndroidVersion() < 4.4 || !this.btn[0].classList;
            this.Init();
        }

        if ( this.blank ) {
            window.addEventListener("load",() => {
                setTimeout( () => {
                    this.AnchorLink();
                }, 200 );
            })
        }

    }


    /**
    **
    ** Init
    **
    **/
    Init() {

        for (var i = 0; i < this.btn.length; i++) {

            this.btn[i].addEventListener( "click", (e) => {

                let ignore = false;
                const IGUNORE_TXT = this.ignore.split(",");

                for (var j = 0; j < IGUNORE_TXT.length; j++) { //not処理

                    const IGUNORE = IGUNORE_TXT[j].split(".")[1] ? IGUNORE_TXT[j].split(".")[1] : IGUNORE_TXT[j].split("#")[1];

                    if (e.currentTarget.classList) {
                        if( e.currentTarget.classList.contains(IGUNORE) ) ignore = true;
                    } else {
                        if( new RegExp('(^| )' + IGUNORE + '( |$)', 'gi').test( e.currentTarget.className ) ) ignore = true;
                    }
                    if( e.currentTarget.id == IGUNORE ) ignore = true;

                }

                if( !this.moveFlag ) { //ダブルクリック防止

                    const GET_HASH = e.currentTarget.getAttribute("href");

                    if( GET_HASH && GET_HASH.split("#")[0] == "" && !ignore ) {

                        e.preventDefault();
                        this.moveFlag = true;

                        const HASH = GET_HASH.split("#")[1];
                        const TARGET = document.getElementById(HASH);
                        const OFFSET_TOP = this.GetOffset(TARGET).top;

                        this.SmoothScroll( OFFSET_TOP );

                    }

                }

            } );

        }

    }

    /**
    **
    ** SmoothScroll
    **
    **/
    SmoothScroll( p ) {

        const POSITION = p - this.posFix;

        const SCROLL_VAL = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        const DIFF = POSITION - SCROLL_VAL;
        let num = SCROLL_VAL;

        const START_TIME = new Date().getTime();　//描画開始時刻を取得
        let render;
        let numPrev = SCROLL_VAL;

        let Loop;

        const LoopAnim = () => {

            if( !this.oldBrowser ) render = requestAnimationFrame( Loop );

            const CURRENT_TIME = new Date().getTime();　//経過時刻を取得
            const STATUS = (CURRENT_TIME - START_TIME) // 描画開始時刻から経過時刻を引く

            const MOVE_Y = Math.round( Easing[this.easing](STATUS, SCROLL_VAL, Math.abs(DIFF), this.speed) );

            if( DIFF > 0 ) {
                num += MOVE_Y - numPrev;
            } else {
                num +=  - ( MOVE_Y - numPrev );
            }

            window.scroll( 0, num );

            numPrev = MOVE_Y;

            if( STATUS >= this.speed ) {

                this.moveFlag = false;
                this.ScrollEnd();

                if( this.oldBrowser ) {
                    clearInterval( Loop );
                } else {
                    cancelAnimationFrame( render );
                }

                window.scroll( 0, POSITION );

            }
        }

        if( this.oldBrowser ) {
            Loop = setInterval( LoopAnim, 33); 　// Android4.4未満は setInterval で処理
        } else {
            Loop = LoopAnim;
            Loop();
        }

    }


    /**
    **
    ** GetOffset
    **
    **/
    GetOffset(el) {

        const BOX = el.getBoundingClientRect();

        return {
            top: BOX.top + window.pageYOffset - document.documentElement.clientTop,
            left: BOX.left + window.pageXOffset - document.documentElement.clientLeft
        }

    }

    /**
    **
    ** AnchorLink
    **
    **/
    AnchorLink() {

        for (var i = 0; i < this.btn.length; i++) {

            let ignore = false;
            const IGUNORE_TXT = this.ignore.split(",");
            const GET_HASH = this.btn[i].getAttribute("href");

            for (var j = 0; j < IGUNORE_TXT.length; j++) { //not処理

                const IGUNORE = IGUNORE_TXT[j].split(".")[1] ? IGUNORE_TXT[j].split(".")[1] : IGUNORE_TXT[j].split("#")[1];

                if (this.btn[i].classList) {
                    if( this.btn[i].classList.contains(IGUNORE) ) ignore = true;
                } else {
                    if( new RegExp('(^| )' + IGUNORE + '( |$)', 'gi').test( this.btn[i].className ) ) ignore = true;
                }
                if( this.btn[i].id.match( IGUNORE ) ) ignore = true;

            }

            if( GET_HASH && !ignore ) {

                const HREF_SPLIT = GET_HASH.split("#");

                if( (HREF_SPLIT.length > 1) && (HREF_SPLIT[0] != "") ) {

                    this.btn[i].setAttribute("href", GET_HASH.replace( /#/g , this.customAnchor ));

                }

            }

        }

        if( location.href.split(this.customAnchor)[1] ){

            const TARGET = document.getElementById(location.href.split(this.customAnchor)[1]);
            const OFFSET_TOP = this.GetOffset(TARGET).top;
            this.SmoothScroll(OFFSET_TOP);

        }

    }

    GetAndroidVersion() {

        const ua = navigator.userAgent;

        if( (ua.toLowerCase().indexOf('android') > 0) && (ua.toLowerCase().indexOf('mobile') > 0) ) {
            return parseFloat(ua.slice(ua.indexOf("Android")+8));
        }

    }

}



/**
**
** Easing
**
** t : 時間(進行度)
** b : 開始の値(開始時の座標やスケールなど)
** c : 開始と終了の値の差分
** d : Tween(トゥイーン)の合計時間
**
**/
var Easing = {

    "linear" : function(t, b, c, d) {
        t /= d;
        return c*t + b;
    },

    //Cubic
    "easeInCubic": function(t, b, c, d) {
        t /= d;
        return c*t*t*t + b;
    },
    "easeOutCubic": function(t, b, c, d) {
        t /= d;
        t = t - 1;
        return c*(t*t*t + 1) + b;
    },
    "easeInOutCubic": function(t, b, c, d) {
        t /= d/2.0;
        if (t < 1) {
            return c/2.0*t*t*t + b;
        } else {
            t = t - 2;
            return c/2.0 * (t*t*t + 2) + b;
        }
    },

    //Quartic
    "easeInQuart": function(t, b, c, d) {
        t /= d;
        return c*t*t*t*t + b;
    },
    "easeOutQuart": function(t, b, c, d) {
        t /= d;
        t = t - 1;
        return -c*(t*t*t*t - 1) + b;
    },
    "easeInOutQuart": function(t, b, c, d) {
        t /= d/2.0;
        if (t < 1) {
            return c/2.0*t*t*t*t + b;
        } else {
            t = t - 2;
            return -c/2.0 * (t*t*t*t - 2) + b;
        }
    },

    //Quintic
    "easeInQuint": function(t, b, c, d) {
        t /= d;
        return c*t*t*t*t*t + b;
    },
    "easeOutQuint": function(t, b, c, d) {
        t /= d;
        t = t - 1;
        return c*(t*t*t*t*t + 1) + b;
    },
    "easeInOutQuint": function(t, b, c, d) {
        t /= d/2.0;
        if (t < 1) {
            return c/2.0*t*t*t*t*t + b;
        } else {
            t = t - 2;
            return c/2.0 * (t*t*t*t*t + 2) + b;
        }
    }

}
