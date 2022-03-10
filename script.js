let timer = setInterval(function() {
	if(document.documentElement.clientWidth/1920 > document.documentElement.clientHeight/937){
		document.body.style.zoom = document.documentElement.clientHeight/937;
	}else{
		document.body.style.zoom = document.documentElement.clientWidth/1920;
	}
}, 20);