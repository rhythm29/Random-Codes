var a = [2,3,4,6,8];
var b = [];
for(var i = 0; i<a.length;i++){
	if(i == 0){
		b.push(a[i]*a[i+1]);
	}
	else if(i >0 && i < a.length-1){
	   var mul = a[i-1]*a[i+1];
	   b.push(mul);
    }
	else{
		b.push(a[a.length-1]*a[a.length-2]);
	}
}
console.log(b);