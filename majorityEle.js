function majoEle(arr){
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
    	if(dict[key] > parseInt(arr.length/2)){
    		console.log(key);
    	}
    	else{
    		console.log('no');
    	}
    }
}

console.log(majoEle([3 ,3 ,4, 2, 4, 4 ,2, 4, 4]));