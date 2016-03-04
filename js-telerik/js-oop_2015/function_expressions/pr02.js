function solve(){
return function findPrimes(arg1, arg2) {
	var from = +arg1,
	to = +arg2,
	divisor,
	maxDivisor,
	isPrime,
	primes = [], n;
		
if(typeof(from) === 'undefined' || typeof(to) === 'undefined'){
	throw new Error();
} else if(isNaN(from) || isNaN(to)){
	throw new Error();
	
}
	
for(n = from; n<=to; n+=1){
	maxDivisor = Math.sqrt(n);
	isPrime = true;
	for(divisor = 2; divisor <= maxDivisor; divisor+=1){
		if(!(n % divisor)){
			isPrime = false;
			break;
		}//if

	}//for
	if(isPrime && n>1){
		primes.push(n);
	}//if

}//for
		return primes;

}//return
}//solve