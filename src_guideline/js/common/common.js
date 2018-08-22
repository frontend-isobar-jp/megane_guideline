import jAccordion from '../libs/j_accordion_es';
import GetIncludes from '../libs/j_getIncludes_es';

import showPagetop from './_show_pagetop';

const Init =  () => {



    // ACCORDION
    // ----------------------------------------------------------

    const J_ACCORDION = new jAccordion(
        ".j-accordion",
        {
            toggleSpeed: 100
        }
    );

    const AFTER_HEADER = ()=> {

    }

    const AFTER_FOOTER = ()=> {

        // Show Pagetop
        // ----------------------------------------------------------
        showPagetop();

    }

    new GetIncludes('#header','/guideline/assets/include/header.html', AFTER_HEADER);
    new GetIncludes('#footer','/guideline/assets/include/footer.html', AFTER_FOOTER);

}

export default Init;
