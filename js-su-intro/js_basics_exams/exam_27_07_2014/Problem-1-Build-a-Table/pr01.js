function solve(args){
	var start = +args[0],
	end = +args[1],
	num = start, 
	mult = num*num,
	table, tr, td, dFrag, i, thead = [], len, j, th;
		//The third column should hold "yes" if num 
		//is Fibonacci number or "no" otherwise. 
		//The table should have header cells titled "Num", "Square" and "Fib". 
		//See the below examples.
		thead = ["Num", "Square", "Fib"];
		len = thead.length;
		
		tr = document.createElement('tr');
		for(j=0; j<len; j+=1){
			th = document.createElement('th');
			th.innerHTML = thead[j];
			tr.appendChild(th);
		}

		dFrag = document.createDocumentFragment();
		dFrag.appendChild(tr);

		table = document.createElement('table');
		body = document.getElementsByTagName('body')[0];
		for(i = start; i<= end; i+=1){
			tr = document.createElement('tr');

			//1st column
			td = document.createElement('td');
			td.innerHTML = i;
			tr.appendChild(td);
		 	//2nd column
		 	td = document.createElement('td');
		 	td.innerHTML = i*i;
		 	tr.appendChild(td);
		 	//3rd column
		 	td = document.createElement('td');
		 	var prev = 0;
		 	var curr = 1;
		 	while(prev<=i){
		 		if(prev == i){
		 			td.innerHTML = 'yes';
		 		}
		 		else{
		 			td.innerHTML = 'no';
		 		}
		 		curr = prev + curr;
		 		prev = curr - prev;
		 	}
		 	tr.appendChild(td);
		 	dFrag.appendChild(tr);
		 }
		 table.appendChild(dFrag);
		 body.appendChild(table);
		}
		test = [55, 56]
		solve(test);