
//three or more times.
//two or all of those words
//no words from the first text are repeated – print "No words". 
//no sentences were extracted print "No sentences".
function solve(args){
	var text1 = args[0],
	text2 = args[1], counter = 1, 
	words = [],
	flag = 0,
	sentences = 0,
	text3,
	len1, len2, len3,
	wLen, checker, 
	helper = 0, end, num = 0,
	strLen, pattern, currentS, currentW;

	text1 = text1.split(' ');
	
	len1 = text1.length;

//console.log(text1);
for(var g = 0; g < len1; g+=1){
	strLen = text1[g].length;
	for(var e = 0; e < strLen; e+=1){

		if(text1[g].charCodeAt(e) < 65 ||  (text1[g].charCodeAt(e) > 90 && text1[g].charCodeAt(e) < 97) || text1[g].charCodeAt(e) > 123){
			text1[g] = text1[g].replace(text1[g][e], '');
		}
	}

}
for(var i = 0; i < len1; i+=1){

	for(var j = 0; j < len1; j+=1){

		if(j!=i){
			if(text1[i].toUpperCase() === text1[j].toUpperCase()){
				counter+=1;	
				text1[j] = '';	

			}
		}
	}
	if(counter >= 3){
		words.push(text1[i]);
	}
	counter = 1;
}
words = words.filter(Boolean);

wLen = words.length;
if( wLen > 0){

	pattern = /[.?!]/;
	text3 = text2.split(pattern);

	len2 = text3.length;
	for(var d = 0; d <len2; d+=1){
		currentS = text3[d].toUpperCase();
		len3 = text3[d].length;
		helper+=len3+num;
		end = text2[helper];
		num = 1;
		
		for(var f = 0; f < wLen; f+=1){
			currentW = words[f].toUpperCase();

			if(currentS.indexOf(currentW) > -1){
				flag+=1;
			}

		}

		if(flag > 1){
			sentences+=1;
			console.log(text3[d]+end);
		}
		flag = 0;

	}
	if(sentences === 0){
		console.log('No sentences');
	}
	


}
else {
	console.log("No words");
}
}
test = ['Bogi prasna kat jivotno izpita po JS. Zareji che malko govorq po shlokavica, ti pak trebva da pretyrsi taq text po nekva raota deto beshe v uslovieto i sega se chudish kaf e adjeba taq test i koi idiot e pisal taq shlokavica. Da znaite taq shlokavica po KPK ne se priema.',
'Da si znaesh vhe ot taq shlokavica trebva da zemesh tova izrehenie no ima i tretata duma po! Mai mai tova e nai typiq text. Trqbva da machnete i tva izrechenie zashtoto sydyrja po i shlokavica.'];
solve(test);