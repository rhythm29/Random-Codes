function kDisBtwArr(a, k){
	var flag = true;
	for(var i = 0; i< a.length; i++){
		for(var j = i+1; j<a.length; j++){
			if(a[i] == a[j]){
				if(Math.abs(i-j) > k){
				    flag = false;
				    break;
				}
			}
		}
	}
	if(flag == true){
		console.log('yes');
    }
	else{
		console.log('no');
	}
}
console.log(kDisBtwArr([1,2,1,3,4,3,5],3));


// var a = [1,2,1,3,4,5];
// var k = 3;
// var dict = {};
// var flag = false;
// for(var i = 0; i< a.length; i++){
//      dict[a[i]]=i;
// }
// for(var i = 0; i< a.length; i++){
// 	if(a[i] in dict){
// 		if(Math.abs(i - a[i]) < k){
// 			flag = true;
// 		}
		
// 	}
// }
// if(flag == true){
// 	console.log('yes');
// }
// else{
// 	console.log('no');
// }

