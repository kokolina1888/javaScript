//    Write a function for extracting all email 
//addresses from given text.
//    All sub-strings that match the format @… 
//should be recognized as emails.
//    Return the emails as array of strings.

var text;

text = 'foo@demo.net bar.ba@test.co.uk bar.ba@test.co.uk  www.demo.com	http://foo.co.uk/ http://regexr.com/foo.html?q=bar bar.ba@test.co.uk ';

function findEmails(text){
	var resArr = [],
		newArr = [],
		len, flag,
		check;

	resArr = text.split(' ');
	len = resArr.length;
	check = 0;
	for(i=0; i<len; i++){
		flag = resArr[i].search('@'); 
		console.log(flag);
		if(flag >=0){
			newArr[check] = resArr[i];
			check++;
		}
	}
	console.log(newArr);
}

findEmails(text);