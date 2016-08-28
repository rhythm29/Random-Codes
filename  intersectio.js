// Given two unsorted arrays that represent two sets (elements in every array are distinct), find union and intersection of two arrays.

// For example, if the input arrays are:
// arr1[] = {7, 1, 5, 2, 3, 6}
// arr2[] = {3, 8, 6, 20, 7}







// var a = [2,3,3,4,5];
// var b = [1,2 ,3, 4];
// var c = [];
// var i = 0, j = 0;
// while(i != a.length && j != b.length){
// 		if(a[i] == b[j]){
// 			c.push(a[i]);
// 		}
//         if(a[i] < b[j]){
// 		i++;
// 		}
// 		else{
// 			j++;
// 		}
	
// }
// console.log(c);





// var a = [2,3,3,4,5];
// var b = [1,2 ,3, 4];

var a = {2:1, 3:2 , 4:1, 5:1};
var b = {1:1 , 2:1  ,3:1, 4:1}
for (var key in a){
	if (key in b){
		console.log(key);
	}

}


























