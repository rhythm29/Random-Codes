// input:
// [-3, 5, 76, 53, -354, -584, 9, 113, 49]

// output:
// n1 = 5
// n2 = 9
// min_diff = 4


var arr = [-3, 5, 76, 53, -354, -584, 9, 113, 49,23];
var diff = 1000, n1,n2;

arr = arr.sort(function(a, b){return a-b});

for(var i = 0; i< arr.length-1; i++){
	if (Math.abs(arr[i+1]-arr[i]) < diff){
        diff = Math.abs(arr[i+1]-arr[i])
		n1 = arr[i];
		n2 = arr[i+1];
	}
}

for(var i = 0; i<arr.length-1; i++){
	if(arr[i+1]-arr[i] == diff){
		console.log('n1 = ' + arr[i]);
		console.log('n2 = ' + arr[i+1]);
		console.log('diff = ' + diff);
	}
}