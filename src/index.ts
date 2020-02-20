
import './index.scss';
import '@fortawesome/fontawesome-free/css/all.css';
/*
import { MDCTextField } from '@material/textfield';
import { MDCRipple } from '@material/ripple';
import { MDCTabBar } from '@material/tab-bar';
//import MDCAutoInit from '@material/auto-init';

//MDCAutoInit.register('MDCTextField', MDCTextField);

//MDCAutoInit();

// Essentially our 'page has loaded!' event
//document.addEventListener('MDCAutoInit:End', () => {

	// Initialize MDC Web components.
	const greetButtonEl = document.getElementById('container-greet-button');
	MDCRipple.attachTo(greetButtonEl);

	const fnameTextfield = new MDCTextField(document.getElementById('container-fname-text-field'));
	const lnameTextfield = new MDCTextField(document.getElementById('container-lname-text-field'));

	// Custom javascript code.
	const greetMessageEl = document.getElementById('container-greet-message');

	greetButtonEl.addEventListener('click', () => {
		let name;
		if (fnameTextfield.value || lnameTextfield.value) {
			name = fnameTextfield.value + ' ' + lnameTextfield.value;
		} else {
			name = 'Anonymous';
		}
		greetMessageEl.textContent = `Hello, ${name}!`;
	});

	// Instantiate single textfield component rendered in the document
	new MDCTextField(document.getElementById('container-my-text-field'));

	console.log("Hello, World!");
	document.write("Hello, from TypeScript!");

	const tabs = [

	]
	const tabBar = new MDCTabBar(document.getElementById('container-osTabs'))
//})
*/

import '@material/mwc-tab-bar'
import '@material/mwc-tab'
import '@material/mwc-button'
import '@material/mwc-textfield'
//import '@material/mwc-typography'
import { TextField as MDCTextField } from '@material/mwc-textfield';
import { TabBar as MDCTabBar } from '@material/mwc-tab-bar';

const nameFirst = document.getElementById('nameFirst') as MDCTextField;
const nameLast = document.getElementById('nameLast') as MDCTextField;
const btnGreet = document.getElementById('btnGreet');
const txtGreet = document.getElementById('txtGreet');

btnGreet.addEventListener('click', () => {
	let name = [nameFirst.value, nameLast.value].join(' ');
	txtGreet.textContent = `Hello, ${ name.trim().length != 0 ? name : 'Anonymous'}!`
})

const tabsChooseOS = document.getElementById('tabsChooseOS') as MDCTabBar;
tabsChooseOS.addEventListener('MDCTabBar:activated', (ce: CustomEvent) => {
	const index = ce.detail.index;
	
	// Note: 0 = windows, 1 = macos/linux
	let enableWindows = false;
	let enableUnix = false;
	if(index === 0) {
		enableWindows = true;
	} else if(index === 1) {
		enableUnix = true;
	} else {
		throw new Error('Unknown OS tab index: ' + index);
	}
	
	let clsWindows = Array.from(document.getElementsByClassName('windows'));
	let clsUnix = Array.from(document.getElementsByClassName('unix'));

	let logic = enabled =>
		e => {
			if(enabled) e.removeAttribute('hidden');
			else e.setAttribute('hidden', '');
		}

	clsWindows.forEach(logic(enableWindows));
	clsUnix.forEach(logic(enableUnix));
});
