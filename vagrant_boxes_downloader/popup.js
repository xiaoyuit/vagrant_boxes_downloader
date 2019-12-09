(function(){


	function initFuc(){

		chrome.tabs.create({url: "https://app.vagrantup.com/boxes/search"});

	}

	function onloadFuc(){

		document.getElementById('open').addEventListener('click', initFuc, false);

	}

	window.onload = onloadFuc;

})();