/*function anagram(a,b){
	if(a.length == b.length){
		for(var key in a){
			if(key in b){
				if(a[key] == b[key]){
				return true;
			    }
			}
			else{
				return false;
			}
		}


	}
	
}*/
//var a = {d:1 , o:1 , g:1};
//var b = {g:1 , o:1 , d:2};

/*function anagram(a,b){
	var count = 0;
	if(a.length == b.length){
		for(var counta = 0; counta <a.length ; counta++){
			for(var countb=0 ; countb< b.length ; countb++){
		
			    if(a.charAt(counta) == b.charAt(countb)){
				count +=1;
				
			    }
			}	
		}
	}
	if(count == a.length){
		return true;
	}
	else{
		return false;
	}
}
var a = 'dog';
var b = 'gnd';
console.log(anagram(a,b));*/





// function anagram(a,b){
// 	var array = a.split('');
//     var array1 = b.split('');
    
//     var d= array.sort();
//     var e = array1.sort();
    
// if(array.length == array1.length){
// 	if(JSON.stringify(d) === JSON.stringify(e)){
		
// 		return true;

// 	}
// 	else{
// 		return false;
// 	}	
// }
// else{
// 	return false;
// }

// }
// var string = "ogd";
// var string1 = 'gno';

// console.log(anagram(string,string1));


function anagram(a,b){
	var c = a.split('').sort();
	var d = b.split('').sort();
	//console.log(c,d);
	if(a.length == b.length){
		if(JSON.stringify(c) == JSON.stringify(d)){
			return true;
		}
		else{
			return false;
		}
	// else{
	// 	return false;
	// }
	}

}
var a  = 'fads';
var b = 'afsd';
console.log(anagram(a,b));















