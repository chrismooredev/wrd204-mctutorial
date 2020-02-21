
import './index.scss';
import '@fortawesome/fontawesome-free/css/all.css';
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
	
	const tabIndicies = ['windows', 'unix'];
	if(index >= tabIndicies.length) {
		throw new Error('Unknown OS tab index: ' + index);
	}
	const target = tabIndicies[index];

	// Put the targeted tab at the end of the array, to enable sections with multiple tab dignifiers
	// (ex: div.windows and div.macos.linux) so the latter will be active if macos or linux is selected
	tabIndicies.push(tabIndicies.splice(index, 1)[0]);

	// Since the targed tab is at the end, it should not be hidden by previous passes
	tabIndicies.forEach(clsNme =>
		Array.from(document.getElementsByClassName(clsNme))
			.forEach(ele => {
				if(clsNme === target) ele.removeAttribute('hidden');
				else ele.setAttribute('hidden', '');
			})
	)
});
