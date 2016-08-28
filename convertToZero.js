var a = [ 2 , 3 ,4, 5, 6, 7 , 8 ,9 , 10];
//input = [0,0];
var result = 0;
for( var i = 0 ; i< a.length ; i++){
	if ( a[i] % 2 == 0){
		a[i] = a[i] % 2
        result += 1;
	}
	if ( a[i] % 2 != 0 ){
	   a[i] = a[i] - 1 ;
	   if ( a[i] % 2 == 0){
	   	  a[i] = a[i] % 2;
	   	  result +=1;
	   }
	   

	}
}
console.log(a);
console.log(result);










