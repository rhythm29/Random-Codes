function eleAppOnce(arr){
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
		if(dict[key] ==1){
			console.log(key);
		}
	}
}
console.log(eleAppOnce([7, 3, 5, 4, 5, 3, 4]));