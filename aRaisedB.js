function power(a,b){
	if (b == 0) {
		return 1;
	}
	temp = power(a, parseInt(b/2));
	if(b/2 == 0){
		return temp*temp;
	}
	else{
		return a*temp*temp;
	}
}

console.log(power(2,3));


