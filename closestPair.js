function closestPair(a, b, z){
	var min = 1000;
	var x, y;
	for(var i = 0; i<a.length; i++){
		for(var j =0; j<b.length; j++){
            if(Math.abs(a[i] + b[j] - z) < min){
                 min = Math.abs(a[i] + b[j] - z);
                 x = a[i];
                 y = b[j];
            }     
		}
	}
	return [x, y];
}
var a = [1, 4, 5, 7];
var b = [10, 20, 30, 40];
var z = 50;
console.log(closestPair(a,b,z));


