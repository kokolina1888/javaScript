//    You are given a text. Write a function that changes the text in all regions:
//    <upcase>text</upcase> to uppercase.
//    <lowcase>text</lowcase> to lowercase
//    <mixcase>text</mixcase> to mix casing(random)
//Example: We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.
//The expected result:
//We are LiVinG in a YELLOW SUBMARINE. 
//We dOn'T have anything else.
//Note: Regions can be nested.

//<upcase>7; 17
//<mixcase>
//<lowcase>

var newText;
newText =  'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anYTHing</lowcase> else.';

function changeCase(text) {
var arr = text.split('<'),
len, len1, res, 
lenElement, lenRes, i, j, arrRes;
len = arr.length;
for (i = 0; i < len; i++) {	
	if (arr[i][0] === 'u') {			
		res = arr[i].substring(7);
		res = res.toUpperCase();
		arr[i] = res;
	} else if(arr[i][0] === 'm') {			
		res = arr[i].substring(8);
		arrRes = res.split('');
		lenElement = arrRes.length;
		for(j=0; j<lenElement; j+=2){
			arrRes[j] = arrRes[j].toUpperCase();
		}
		arr[i] = arrRes.join("");

	} else if(arr[i][0] === 'l') {
		res = arr[i].substring(8);
		res = res.toLowerCase();
		arr[i] = res;
	} else if(arr[i][0] === '/') {
		if(arr[i][1] === 'u') {
			res = arr[i].substring(8);
			arr[i] = res;
		}
		else if(arr[i][1] === 'm') {
			res = arr[i].substring(9);
			arr[i] = res;
		}
		else if(arr[i][1] === 'l') {
			res = arr[i].substring(9);
			arr[i] = res;
		}
	}
}
text = arr.join("");
console.log(text);
}
changeCase(newText);