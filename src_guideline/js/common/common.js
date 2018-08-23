import jAccordion from '../libs/j_accordion_es';
import GetIncludes from '../libs/j_getIncludes_es';

import showPagetop from './_show_pagetop';

const Init =  () => {

    let root = location.pathname.split("/guideline")[0];

    // ACCORDION
    // ----------------------------------------------------------

    const J_ACCORDION = new jAccordion(
        ".j-accordion",
        {
            toggleSpeed: 100
        }
    );

    const AFTER_HEADER = ()=> {

        //a,imgのパス調整
        let header = document.getElementById('header'),
            headerImg = header.getElementsByTagName('img'),
            headerA = header.getElementsByTagName('a');

        for (var i = 0; i < headerA.length; i++) {
            let href = headerA[i].href;
            if( href.indexOf("megane-template.com") === -1 ) {
                headerA[i].href = root + href.split(location.origin)[1];
            }
        }
        for (var i = 0; i < headerImg.length; i++) {
            let src = headerImg[i].src;
            headerImg[i].src = root + src.split(location.origin)[1];
        }

    }

    const AFTER_FOOTER = ()=> {

        // Show Pagetop
        // ----------------------------------------------------------
        showPagetop();

    }

    new GetIncludes('#header', root + '/guideline/assets/include/header.html', AFTER_HEADER);
    new GetIncludes('#footer', root + '/guideline/assets/include/footer.html', AFTER_FOOTER);

}

export default Init;
