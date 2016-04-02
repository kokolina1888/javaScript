function solve(args){
	var start = +args[0],
		end = +args[1],
		num = start,
		cl = 'num', len, data, ch, i, flag, j;
console.log('<ul>');
while(num <= end){
data = num.toString();
len = data.length;
if(len > 3){
	for(i = 1; i<len-2; i+=1){
		ch = data[i-1]+data[i];
		

		for(j=i+1; j<len-1; j+=1){
			if(ch[0]===data[j] && ch[1]===data[j+1]){
				
				cl = 'rakiya';
			}
		}
		


	}
}
//<a href="view.php?id=11211">View</a>


if(cl==='rakiya'){
console.log("<li><span class='"+cl+"'>"+ num +'</span><a href="view.php?id='+num+'>View</a></li>');
}
else {
console.log("<li><span class='"+cl+"'>"+ num +'</span></li>');

}


num+=1;
cl = 'num';
}
console.log('</ul>');


}
test = ['30000', '30030'];
solve(test);