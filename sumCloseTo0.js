var a = [1, 60, -10, 70, -80, 85];
var min = 1000;
var l,r;
for(var i = 0; i < a.length-1; i++){
    for(var j = i+1; j<a.length; j++){
        var sum = Math.abs(a[i]+a[j]);
        if(min > sum){
        	min = sum;
        	l = a[i];
        	r = a[j];
        }
    }
}
console.log(min,l,r);