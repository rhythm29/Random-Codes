// function plus(arr){
// 	var sum = 0;
// 	for(var i = 0; i < arr.length; i++){
// 		sum += arr[i];
// 	}
// 	return sum;
// }

function plusRec(arr, x, sum){
	if(x < 0){
		return sum;
	}
	
	sum += arr[x];
	x--;
	return plusRec(arr, x, sum);
}
var a = [1,2,3,4,5];
console.log(plusRec(a, a.length - 1, 0));


// function minus(a, b){
// 	return a - b;
// }

// function mul(a, b){
// 	return a * b;
// }

// function div(a, b){
// 	return a / b;
// }

// function mod(a, b){
// 	return a % b;
// }

// //console.log(plus([1,2,3,4,5]));
// var a = [1,2,3,4,5];
// console.log(plusRec(a, a.length - 1, 0));

function plus(...rest){
	if(rest.length === 1){
		return rest[0]
	}
	return rest.shift() + plus(...rest)
	}

console.log(plus(1,2,3,4));






// call functions for adding, sub
// make plus for n values
// get args as a array and iterate and return final answer
// do it recursively


