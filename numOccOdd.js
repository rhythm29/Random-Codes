function numoccOdd(arr){
	var dict = {};
	for(var i = 0; i< arr.length; i++){
		if(arr[i] in dict){
			dict[arr[i]] +=1;
		}
		else{
			dict[arr[i]] = 1;
		}
	}
	for(key in dict){
		if(dict[key] % 2 != 0){
            return key;
		}
	}
}
console.log(numoccOdd([1, 2, 3, 2, 3, 1, 3]));
