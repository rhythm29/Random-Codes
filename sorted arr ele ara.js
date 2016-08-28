// Given a sorted array of positive integers, 
//rearrange the array alternately i.e first element should be maximum value, 
//second minimum value, third second max, fourth second min and so on.

// Examples:

// Input  : arr[] = {1, 2, 3, 4, 5, 6, 7} 
// Output : arr[] = {7, 1, 6, 2, 5, 3, 4}

var a = [1,2,3,4,5,6,7];
var first = 0;
var last = a.length-1;
var c = [];
while(first <= last){
	if(first == last){
		c.push(a[first]);
	}
	else{
	c.push(a[last] , a[first]);
	
    }
    first+=1;
	last-=1;
}
console.log(c);