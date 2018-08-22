export default () => {

    setTimeout( ()=> {

        const TARGET = document.getElementsByTagName('body');
        const NAV = document.querySelector('.m-gl_nav');

        TARGET[0].style.paddingBottom = NAV.offsetHeight + 'px';

    } ,1000 )



}
