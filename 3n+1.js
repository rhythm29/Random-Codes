function threeNPlusOne(n){
	while(n>1){
	    if(n % 2 == 0){
		    n = n/2;
		    //return n;
	    }
	    else{
		    n = (3 * n) + 1;
		    //return n;
	    }
	
    }
   return n;
}
console.log(threeNPlusOne(1000));