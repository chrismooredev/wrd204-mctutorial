
module.exports = {
	filters: {
		'no-p-wrap': function(text, options) {
			//console.log(JSON.stringify(text.slice(0, 10)), '###', JSON.stringify(text.slice(-10)))
			const wrapped = text.startsWith('<p>') && text.endsWith('</p>\n');
			return wrapped ? text.slice(3, -5)+'\n' : text;
		},
		'abbrs': function(/** @type {string} */ text, options) {
			for(term in options.terms) {
				let nextIndex = undefined;
				while((nextIndex = text.indexOf(term, nextIndex+1)) !== -1) {
					if(!text.slice(nextIndex+term.length).startsWith('</abbr>')) {
						text = `${text.slice(0, nextIndex)}<abbr title=${JSON.stringify(options.terms[term])}>${term}</abbr>${text.slice(nextIndex+term.length)}`;
					}
				}
			}
			return text;
		}
	}
}
