import { GetParents } from '../libs/j_utility';

export default () => {

    //
    // ----------------------------------------------------------

    const PARENTS = document.querySelector('.fw');
    const TITLE = document.querySelectorAll('.j-create_nav');
    const NAV_CLASSNAME = 'm-gl_nav';

    // console.log( TITLE );

    if( PARENTS ){

        PARENTS.insertAdjacentHTML('beforeend','<ul class="' + NAV_CLASSNAME + ' j-scrollnav"></ul>');

        const NAV = document.querySelector('.' + NAV_CLASSNAME);

        for (let i = 0; i < TITLE.length; i++) {

            let text = TITLE[i].outerText;
            let id = GetParents( TITLE[i], '.f-section' ).getAttribute('id');

            NAV.insertAdjacentHTML('beforeend','<li><a href="#' + id + '">' + text + '</a></li>');

        }
    }



}
