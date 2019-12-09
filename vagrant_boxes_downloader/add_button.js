(function(){

	/**
	 * [createDownloadBtn 生成下载按钮]
	 * @param  {[type]} href    [description]
	 * @param  {[type]} element [description]
	 * @return {[type]}         [description]
	 */
	function createDownloadBtn(href,element){
		var a = document.createElement('a');
		a.href = href;
		a.innerHTML = '下载';
		a.style.display = 'block';
		a.style.float = "right";
		element.appendChild(a);
	}


	/**
	 * [onloadFuc 页面初始化方法]
	 * @return {[type]} [description]
	 */
	function onloadFuc(){
		var headerItems = document.querySelectorAll('div.page-header'); //获取这个页面的所有A标签
		var hrefs = [];
		for( var i=0; i<headerItems.length; i++ ){
			var url = headerItems[i].getElementsByTagName('a')[0].href;
			if(url != undefined && url.indexOf("versions") >= 0){
				var bodyItems = headerItems[i].nextElementSibling.nextElementSibling.nextElementSibling.querySelector('.list-group');
				if( bodyItems != undefined ){
					var items = bodyItems.querySelectorAll('.list-group-item');
					if(items != undefined){
						for( var j=0; j<items.length; j++ ){
							var title = items[j].getElementsByTagName('h4')[0].innerText;
							var href = url + '/providers/' +title.split(" ")[0]+'.box';
							createDownloadBtn(href,items[j].getElementsByTagName('h4')[0]);
						}
					}
				}

			}
		}
	}

	window.onload = onloadFuc;

})();