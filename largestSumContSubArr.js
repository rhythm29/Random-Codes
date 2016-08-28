var a = [-1,-2,-6,-3,-1,-4];
var min = Number.NEGATIVE_INFINITY;
var sum = 0;
for(var i= 0; i< a.length; i++){
    for(var j = i; j<a.length; j++){
          sum += a[j];
         if(sum > min){
         	min = sum;
         }
	}
	sum = 0;
}
console.log(min);
