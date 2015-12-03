// ==UserScript==
// @name        HideSpecial
// @namespace   ttrss
// @include     ###
// @version     1
// @grant       none
// ==/UserScript==

function magic(){
	oLabels = document.querySelectorAll('div.dijitTreeIsRoot span.dijitTreeLabel');
	for(i=0; i < oLabels.length; i++){
		if(oLabels[i].textContent == 'Special'){
			oLabels[i].parentNode.parentNode.parentNode.remove();
		}
	}	
}

window.setTimeout(magic, 5000);
