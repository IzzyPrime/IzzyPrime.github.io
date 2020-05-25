if(document.domain != 'localhost'){
	if(document.getElementById("post")){
		for (var key in document.getElementById("article-container").getElementsByTagName('img')){
  			if (isNaN(key)){
    			break;
  			}
    		document.getElementById("article-container").getElementsByTagName('img')[key].src = document.getElementById("article-container").getElementsByTagName('img')[key].src.replace(/https?:\/\//, '').replace(document.domain, jsdelivr_url.slice(0, jsdelivr_url.length - 1))
		}
    }
}