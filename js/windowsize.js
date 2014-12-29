$(document).ready(function(){
	//Make the top bar stay the screen width always
	var navbarWidth = document.getElementById('header');
	navbarWidth.style.width = window.screen.availWidth + 'px';
	console.log(window.screen.availWidth)
	
	var p1Height = document.getElementById('firstpage');
	var x = screen.availHeight - 75 +'px';
	p1Height.style.height = x;

	var p2Height = document.getElementById('page2');
	var y = screen.availHeight - 150 + 'px';
	p2Height.style.height = y; 


	var mainHeadMargin = document.getElementById('mainHead');
	var z = screen.availHeight/2.5 + 'px';
	mainHeadMargin.style.marginTop = z; 

	

	console.log(screen.height); 
	console.log(x);
});