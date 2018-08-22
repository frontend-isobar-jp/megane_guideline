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


    let root = location.pathname.split("/guideline")[0];

    console.log(root);

    new GetIncludes('#header', "/" + root + 'guideline/assets/include/header.html', AFTER_HEADER);
    new GetIncludes('#footer', "/" + root + 'guideline/assets/include/footer.html', AFTER_FOOTER);

}

export default Init;
