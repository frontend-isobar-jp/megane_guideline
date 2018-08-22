import { AddClass, RemoveClass } from '../libs/j_utility';

export default () => {

	// ----------------------------------------------------------
	// Show Toggle Pagetop
	// ----------------------------------------------------------

	const TARGET = document.querySelector('.j-pagetop');

	let interval = 100,
		className = 'is-show',
		showFlag = false,
		fixFlag = false;


	const GetScrollTopFunc = () => {
		return window.pageYOffset;
	}


	const ShowToggleFunc = () => {

		if( GetScrollTopFunc() > interval ){

			if( !showFlag ){
				AddClass( TARGET, className );
			}

			showFlag = true;

		}else{

			if( showFlag ){
				RemoveClass( TARGET, className );
			}

			showFlag = false;
		}
	}


	if( TARGET ){

		document.addEventListener('scroll', () => {

			ShowToggleFunc();

		})

		document.addEventListener('load', () => {

			ShowToggleFunc();

		})

	}



}
