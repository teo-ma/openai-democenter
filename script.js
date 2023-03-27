// 在此处添加JavaScript代码  
// This script sets the href of all links to a domain that is different from the current domain
var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
	if (links[i].hostname != window.location.hostname) {
		links[i].target = '_blank';
		links[i].rel = 'noopener noreferrer';
		links[i].href = 'https://example.com/';
	}
}
