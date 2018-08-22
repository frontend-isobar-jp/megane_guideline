/*

MeganeTemplate

Version: 5.0.0
Website: http://megane-template.com/
License: Dentsu Isobar All Rights Reserved.

*/
export default class jScrollNav {

    constructor(selector, option) {

        this.selector = selector;
        this.scrollNav = document.querySelectorAll( this.selector )[0];

        //option
        if(option == null) option = {};

        this.box = option.boxElm ? option.boxElm : '.f-section';
        this.btn = option.activeElm ? option.activeElm : 'li';
        this.posFix = option.posFix ? option.posFix : 0;
        this.edgeJudge = option.edgeJudge;
        if(this.edgeJudge == null) this.edgeJudge = true;

        this.boxElm = document.querySelectorAll( this.box );

        if( this.scrollNav ) {
            this.btnElm = this.scrollNav.querySelectorAll( this.btn );
            this.Init();
        }

    }


    /**
    **
    ** Init
    **
    **/
    Init() {

        const INTERVAL = 10;
        let timer;

        for (var i = 0; i < this.boxElm.length; i++) {

            const TARGET_ID = this.boxElm[i].id;
            this.btnElm[i].querySelectorAll('a')[0].setAttribute( 'href', '#' + TARGET_ID );

        }

        const Restart = () => {

            clearTimeout(timer);
            timer = setTimeout(this.Ready, INTERVAL);

        }

        this.Ready();

        window.addEventListener( 'resize', () => { this.Ready() } );
        window.addEventListener( 'scroll', () => { this.Ready() } );

    };


    /**
    **
    ** Ready
    **
    **/
    Ready() {

        this.Reset();
        this.GetTarget();

    }
    Reset() {

        for (var i = 0; i < this.btnElm.length; i++) this.RemoveClass(this.btnElm[i],'active');
        for (var i = 0; i < this.boxElm.length; i++) this.RemoveClass(this.boxElm[i],'active');

    }

    GetTarget() {

        const WIN_HEIGHT = window.innerHeight;
        const WIN_SCROLL = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        let hasJudge;

        if( this.edgeJudge ){
            hasJudge = document.documentElement.scrollHeight == WIN_HEIGHT + WIN_SCROLL || WIN_SCROLL == 0;
        } else {
            hasJudge = this.edgeJudge;
        }

        if( hasJudge ){

            const TARGET_ID = WIN_SCROLL == 0 ? this.boxElm[0].id : this.boxElm[ this.boxElm.length - 1 ].id;
            this.Position( TARGET_ID );

        } else {

            for (var i = 0; i < this.boxElm.length; i++) {

                const BOX_HEIGHT =  this.boxElm[i].scrollHeight;
                const BOX_TOP = this.GetOffset( this.boxElm[i] ).top;

                let checkPos;

                if( String(this.posFix).indexOf('%') > -1 ){

                    // 単位が%の場合
                    checkPos = WIN_SCROLL + WIN_HEIGHT * ( this.posFix.split('%')[0] / 100 );

                } else {

                    checkPos = WIN_SCROLL + this.posFix;

                }

                if( checkPos >= BOX_TOP && checkPos < BOX_TOP + BOX_HEIGHT ){

                    this.Position( this.boxElm[i].id );

                }

            }

        }

    };


    /**
    **
    ** Position
    **
    **/
    Position(id) {

        for (var i = 0; i < this.btnElm.length; i++) {

            const THIS_HREF = this.btnElm[i].querySelectorAll('a')[0].getAttribute( 'href' ).split('#')[1];

            if( id === THIS_HREF ) {

                this.AddClass(this.btnElm[i],'active');
                this.AddClass(document.getElementById(THIS_HREF),'active');

            }

        }

    };



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

    AddClass( element, _className ) {

        if (element.classList) {
            element.classList.add(_className);
        } else {
            element.className += ' ' + _className;
        }

    }
    RemoveClass( element, _className ) {

        if (element.classList) {
            element.classList.remove(_className);
        } else {
            element.className = element.className.replace(new RegExp('(^|\\b)' + _className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }

    }

}
