function sub(str1, str2){
	for(var i = 0; i < str1.length; i++){
		var temp = i;
		var isThere = false;
		for(var j = 0; j < str2.length; j++){
			if(str1[i] == str2[j]){
				i++;
				if(j == str2.length -1){
					isThere = true;
				}
			}
			else{
				i = temp + 1;
			}
		}
	}
	if(isThere == true){
		console.log('yes');
	}
	else{
		console.log('no');
	}
}

console.log(sub('abbab', 'bba'));