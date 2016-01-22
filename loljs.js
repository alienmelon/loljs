function loljs(lol){
	//NOTE:
	//to initialize loljs copy and paste:
	//<script src="loljs.js"></script>
	//under the <title> of your lolpage
	//make sure the folder 'loljs' is in the same directory as your lolpage
	//
	//let the log know that this internet is lol activated
	console.log("╭╭━━━╮╮┈┈┈┈┈┈┈┈┈");
	console.log("┈┃╭━━╯┈┈┈┈▕╲▂▂╱▏");
	console.log("┈┃┃╱▔▔▔▔▔▔▔▏╱▋▋╮");
	console.log("┈┃╰▏┃╱╭╮┃╱╱▏╱╱▆┃");
	console.log("┈╰━▏┗━╰╯┗━╱╱╱╰┻┫")
	console.log("┈┈┈▏┏┳━━━━▏┏┳━━╯");
	console.log("┈┈┈▏┃┃┈┈┈┈▏┃┃┈┈┈");
	//the lols (they are array sorted by lol intensity)
	//level 1: moderate loling
	var arr_lol = ["SND_loljs_mild_01", "SND_loljs_mild_02", "SND_loljs_mild_03", "SND_loljs_mild_04", "SND_loljs_mild_05", "SND_loljs_mild_06", "SND_loljs_mild_07", "SND_loljs_mild_08", "SND_loljs_mild_09", "SND_loljs_mild_10", "SND_loljs_mild_11", "SND_loljs_mild_12", "SND_loljs_mild_13", "SND_loljs_mild_14", "SND_loljs_mild_15", "SND_loljs_mild_16", "SND_loljs_mild_17", "SND_loljs_mild_18"];
	//level 2: normal loling
	var arr_lolol = ["SND_loljs_funny_01", "SND_loljs_funny_02", "SND_loljs_funny_03", "SND_loljs_funny_04", "SND_loljs_funny_05", "SND_loljs_funny_06", "SND_loljs_funny_07", "SND_loljs_funny_08", "SND_loljs_funny_09", "SND_loljs_funny_10", "SND_loljs_funny_11", "SND_loljs_funny_12", "SND_loljs_funny_13", "SND_loljs_funny_14", "SND_loljs_funny_15"];
	//level 3: erratic loling
	var arr_lololololololol = ["SND_loljs_erratic_01", "SND_loljs_erratic_02", "SND_loljs_erratic_03", "SND_loljs_erratic_04", "SND_loljs_erratic_05", "SND_loljs_erratic_06", "SND_loljs_erratic_07", "SND_loljs_erratic_08", "SND_loljs_erratic_09", "SND_loljs_erratic_10", "SND_loljs_erratic_11", "SND_loljs_erratic_12", "SND_loljs_erratic_13", "SND_loljs_erratic_14", "SND_loljs_erratic_15"];
	//controlling the lol (although lols should not be contained, but control is necessary)
	var bool_maylol = true;
	//do the lol
	function _dolol(){
		//the array fate has chosen goes here
		var thechosenarr = [];
		//fate uses this number to decide
		var num_lolintensity = Math.floor(Math.random() * 3) + 1;
		//fate decides...
		if(num_lolintensity == 1){
			thechosenarr = arr_lol;
		}
		if(num_lolintensity == 2){
			thechosenarr = arr_lolol;
		}
		if(num_lolintensity == 3){
			thechosenarr = arr_lololololololol;
		}
		//LOL!
		var lol_audio = document.createElement('audio');
		lol_audio.setAttribute('src', "loljs_audio/"+thechosenarr[Math.ceil(Math.random()*thechosenarr.length)-1]+".mp3");
		lol_audio.play();
		//the lol control (only one lol at a time, else madness)
		bool_maylol = false;
		lol_audio.onended = function(){
			bool_maylol = true; //yes, lol again
		};
		//
	}
	//lol at scrolling
	window.onscroll = function() {
		//also... let fate decide when to lol (if lols are left to their own devices chaos ensues)
		if(bool_maylol && Math.random()*100 > 95){
			_dolol();
		}
	};
	//lol at page
	document.body.innerHTML = document.body.innerHTML.replace(/the/g, " lol! the");
	document.body.innerHTML = document.body.innerHTML.replace(/The/g, " Lolol! The");
	document.body.innerHTML = document.body.innerHTML.replace(/\./g, " lol!"); //this is not a good idea
	//page is ticklish
	document.body.onmousedown=function(){
		_dolol();
	};
}

window.onload = function () {
	loljs("lol!");//the value passed does nothing
}
