// Here You can type your custom JavaScript...
$(document).ready(function() {
	// var word;
	var str;
	var wordlist;
	var clicks = 0;
	alert("once words appear press one to let the script know");
	$(document).keypress(function(evt) {
		if (evt.keyCode == 49) {
			str = $("#nhwRightgwt-uid-10").text();
			wordlist = str.split(" ");
			console.log(wordlist);
		}
		if (evt.keyCode == 32) {
			console.log(wordlist[clicks]);
		    $('.txtInput').val(wordlist[clicks]);
		    clicks++;
		}
	});
});