var a = [1 , 2  ,4 , 5,7,8,9];
var b = [3,11,2,4];
var d = {};

// for( var i = 0 ; i < a.length ; i++){
// 	var isThere = false;
// 	for(var j = 0; j <b.length ; j++){
// 		if(a[i] == b[j]){
// 			isThere = true ;
// 			break;
// 		}
//     }
// 	if(isThere == false){
// 	    console.log(a[i]);
//     }

// }



for( key in a){
	if(a[key] in d){
		d[a[key]] +=1;
	}
	else{
		d[a[key]] = 1;
	}
}
	for(var j = 0; j < b.length; j++){
		if(b[j] in d){
			console.log(b[j]);
		}
	}



