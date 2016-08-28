var a = [1,2,9,5];
var b = [];
for(var i = 0; i<a.length; i++){
	if(i == 0){
		b.push(-1);
	}
	var found = false;
	for(var j = i-1; j>=0; j--){
		if(a[i] < a[j]){
			found = true;
            b.push(a[j]);
            break;
		}
    }
	if(!found){
    b.push(-1);
    }
}
console.log(b)


