
import './index.scss';
import '@fortawesome/fontawesome-free/css/all.css';

import '@material/mwc-button'
import '@material/mwc-icon' // https://github.com/material-components/material-components-web-components/tree/master/packages/icon
import '@material/mwc-tab-bar'
import '@material/mwc-tab'
import '@material/mwc-textfield'

import hljs from 'highlight.js';
import 'highlight.js/styles/zenburn.css';
hljs.initHighlightingOnLoad();

import { TabBar as MDCTabBar } from '@material/mwc-tab-bar';

// Note: The values of the enum (as in, not the keys, are classes used to display each type of OS instructions)
enum OSType {
	Windows = 'windows',
	macOS = 'macos',
	Linux = 'linux',
}
const DEFAULT_OS = OSType.Windows;

// Declare property we are about to define
declare let shown_os: string;
(() => {
	// Get last OS or select default
	let os: OSType = DEFAULT_OS;
	Object.defineProperty(window, 'shown_os', {
		get: () => os,
		set: (v: string) => {
			const OSs: string[] = Object.values(OSType);

			if(!OSs.includes(v)) {
				console.error(new Error(`Unknown OS '${v}'! Setting to default.`));
				v = DEFAULT_OS;
			}
			os = v as OSType; // We've validated above it is part of OSType

			OSs.sort((a, b) => a == os ? 1 : -1); // put desired type at the bottom (so it will be active in the case of two elements sharing an OS)
			OSs.forEach(clsNme =>
				Array.from(document.getElementsByClassName(clsNme))
					.forEach(ele => {
						if(clsNme === os) ele.removeAttribute('hidden');
						else ele.setAttribute('hidden', '');
					})
			)

			if(history && history.replaceState) {
				const loc = new URL(document.location.href);
				loc.searchParams.set('os', os);
				history.replaceState(null, `How to Install a Minecraft Server (${os})`, loc.href)
			}
		}
	});
	const from_url = new URLSearchParams(document.location.search).get('os');
	if(from_url && from_url != os) {
		shown_os = from_url;
	}
})();

const tabsChooseOS = document.getElementById('tabsChooseOS') as MDCTabBar;
tabsChooseOS.addEventListener('MDCTabBar:activated', (ce: CustomEvent) => {
	switch(ce.detail.index) {
		case 0:
			shown_os = OSType.Windows;
			break;
		case 1:
			shown_os = OSType.macOS;
			break;
		case 2:
			shown_os = OSType.Linux;
			break;
		default:
			throw new Error(`Setting to unknown OS index: '${ce.detail.index}'!`);
	}
});
