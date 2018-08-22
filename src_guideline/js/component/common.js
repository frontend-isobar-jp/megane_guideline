import { AddClass, RemoveClass } from '../libs/j_utility';

import jSmoothScroll from '../libs/j_smoothScroll_es';
import jScrollNav from '../libs/j_scrollNav_es';
import jModal from '../libs/j_modal_es';

import CreateNav from './_create_nav';
import SetPaddingBtm from './_set_padding_bottom';

////

const Init = () => {


    // Set Padding Btm
    // ----------------------------------------------------------

    SetPaddingBtm();


    // Create SCROLL NAV
    // ----------------------------------------------------------

    CreateNav();



    // SCROLL NAV
    // ----------------------------------------------------------

    const J_SCROLL_NAV_INIT = () => {

        new jScrollNav(
            ".j-scrollnav",
            {
                boxElm: ".j-scrollnav_section",
                posFix: "30%",
                edgeJudge: false
            }
        );

    }

    setTimeout( () => {

        J_SCROLL_NAV_INIT();

    },1000)



    // MODAL
    // ----------------------------------------------------------

    const J_MODAL_INIT = () => {

        let className = 'is-not_select';

        const BODY = document.getElementsByTagName('body')[0];

        const J_MODAL = new jModal(
            ".j-modal_code",
            {
                width: 960,
                modalSpeed: 800,
                bgOpacity: 0.4,
                innerBgColor: "#FFF",
                innerBgPadding: 20
            }
        );

        J_MODAL.OpenEnd = function(){
            hljs.initHighlightingOnLoad();
            AddClass( BODY, className );
        };

        J_MODAL.CloseEnd = function(){
            RemoveClass( BODY, className );
        };

    }

    if( document.querySelectorAll('.j-modal_code')[0] ){

        J_MODAL_INIT();

    }



    // SMOOTH SCROLL
    // ----------------------------------------------------------


    const J_SMOOTHSCROLL = () => {

        new jSmoothScroll(
            "a",
            {
                speed: 200,
    		    // easing: "easeOutQuint",
    		    // posFix: 30,
    		    blank: true
            }
        );

    }

    setTimeout( () => {

        J_SMOOTHSCROLL();

    },1000)


    ///

}

export default Init;
