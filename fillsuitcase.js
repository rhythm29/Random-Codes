// function fillContainer(capacity, items){
// 	if(capacity <= 0 || items == []){
// 		return 0;
// 	}
// 	else if(items[0] > capacity){
// 		//var first = items[0];
// 		return fillContainer(capacity, items.slice(1));
// 		//return result;
// 	}
// }
// console.log(fillContainer(4, [1, 2]));


// def subset(capacity, items):
   

//     if capacity <= 0 or items == []:
//             return 0
//     elif items[0] > capacity:
//             return subset(capacity, items[1:])


// function addRec(arr){
// 	if(arr.length == 0){
// 		return 0
// 	}
// 	else{
// 		var first = arr[0];
// 		return addRec(arr.slice(1)) + first;
// 	}
// }

// console.log(addRec([1,2,3,4]));



function addRec(arr, x, sum){
	if(x < 0){
		return sum;
	}
	else{
		sum += arr[x];
		x--;
		return addRec(arr, x , sum);
	}
}
var arr = [1,2,3,4];
console.log(addRec(arr, arr.length -1, 0));



