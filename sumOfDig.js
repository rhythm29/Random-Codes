function sumOfDig(num){
	var sum = 0;
	while(num > 0){
		var rem = num % 10;
		sum += rem;
		num = parseInt(num/10); 
	}
	return sum;
}


function sum(num){
    if(num < 10){
    	return num;
    }
    while(num >= 10){
    	num = sumOfDig(num);
    }
    return num;
}

console.log(sum(12345));