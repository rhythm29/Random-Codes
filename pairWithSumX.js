function pairWithSumX(arr,x){
	var dict = {};
	for(var i = 0; i< arr.length; i++){
		dict[arr[i]] = true;
	}
	console.log(dict);
	for(var i = 0; i< arr.length; i++){
		var b = x - arr[i];
		if(b in dict){
			console.log(b,arr[i]);
		}
	}
}

console.log(pairWithSumX([1,7,11,15],8));