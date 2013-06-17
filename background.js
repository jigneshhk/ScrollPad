var defaults = {"background_colour" : "black" , "border_colour" : "rgba(82, 168, 236, 0.6)" , "inner_colour" : "white"};

setDefaults = function (force) {

	for ( var key in defaults) {
	
		if(force || !localStorage.getItem(key)) {
			localStorage.setItem(key, defaults[key]);
		}
	}
}

resetDefaults = function () {
	
	setDefaults(true);
}	

setDefaults(false);

chrome.runtime.onMessage.addListener ( 

	function (request, sender, sendResponse) {
		
		console.log( sender.tab ? "from a content script : " + sender.tab.url : "from the extension");
		
		if(request.method == "getColour")
			sendResponse({ value : localStorage.getItem(request.key)});
	});