
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
// Ensure is synced with .pug and .scss
enum OSType {
	Windows = 'windows',
	macOS = 'apple',
	Linux = 'ubuntu',
}
const DEFAULT_OS = OSType.Windows;

function attachTabBarChooser<T>(tabBarID: string, choices: T[], cb: (v: T, i: number) => void) {
	const tabs = document.getElementById(tabBarID) as MDCTabBar;
	tabs.addEventListener('MDCTabBar:activated', (e: Event) => {
		const ind: number = (e as CustomEvent).detail.index;
		if(ind in choices) {
			cb(choices[ind], ind);
		} else {
			throw new Error(`Unmapped tab index: '${ind}' (max tab index = ${choices.length-1})!`);
		}
	});
}
function update_url_param(name: string, value?: string): void {
	if(history && history.replaceState) {
		const loc = new URL(document.location.href);
		if(value)
			loc.searchParams.set(name, value);
		else
			loc.searchParams.delete(name);
		history.replaceState(null, `How to Install a Minecraft Server`, loc.href);
	}
}

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

			update_url_param('os', os);
		}
	});
	const from_url = new URLSearchParams(document.location.search).get('os');
	if(from_url && from_url != os) { // if it is set to non-default
		shown_os = from_url;
	}
})();

attachTabBarChooser('tabsChooseOS', [
	OSType.Windows,
	OSType.macOS,
	OSType.Linux,
], choice => { shown_os = choice; });

