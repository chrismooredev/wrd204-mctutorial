
import './index.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import { MDCTextField } from '@material/textfield';
import { MDCRipple } from '@material/ripple';
import { MDCTabBar } from '@material/tab-bar';
//import MDCAutoInit from '@material/auto-init';

//MDCAutoInit.register('MDCTextField', MDCTextField);

//MDCAutoInit();

// Essentially our 'page has loaded!' event
//document.addEventListener('MDCAutoInit:End', () => {

	/** Initialize MDC Web components. */
	const greetButtonEl = document.getElementById('container-greet-button');
	MDCRipple.attachTo(greetButtonEl);

	const fnameTextfield = new MDCTextField(document.getElementById('container-fname-text-field'));
	const lnameTextfield = new MDCTextField(document.getElementById('container-lname-text-field'));

	/** Custom javascript code. */
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


