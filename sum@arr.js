
function add2arr(a, b){
	var i = 0;
	var j = 0;
    var arr = [];
	while(i != a.length && j != b.length){
        var sum = a[i]+b[j];
        if(sum < 9){
            arr.push(sum);
        }
        else{
        	var str = sum.toString();
	        for(var k = 0; k< str.length; k++){
	            arr.push(str[k]);
	            arr = arr.map(Number);
            }
        }
        i++;
        j++;
	}
	while(i < a.length){
		arr.push(a[i]);
		i++
	}
	while(j < b.length){
		arr.push(b[j]);
		j++;
	}
    return arr;
}
var a = [1,2,13];
var b = [3,9,5,6,2,67];
console.log(add2arr(a,b));