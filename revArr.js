function revArr(arr){
	var b = [];
	for(var i = arr.length-1; i>=0; i--){
		b.push(arr[i]);
	}
	return b;
}
console.log(revArr([1,2,3,4]));


var str = 'abcd';
str = str.split('').reverse().join('');
console.log(str);