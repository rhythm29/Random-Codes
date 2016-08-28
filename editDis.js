// function matcher(str1, str2){
// 	if(str1[0] == str2[0]){
// 		return true;
//     }
//     else{
//     	return false;
//     }
// }
// console.log(matcher('dog', 'tam'));



// function matcher(str1, str2){
// 	if(str1.length == 0){
// 		return 0;
// 	}
// 	else if(str1[0] != str2[0]){
// 		return 1 + matcher(str1.slice(1), str2.slice(1));
// 	}
// 	else{
// 		return matcher(str1.slice(1), str2.slice(1));
// 	}

	
// }
// console.log(matcher('dog', 'dom'));



function revStr(str){
	if(str == ''){
		return '';
	}
	else{
		var firstChar = str[0];
		var result = revStr(str.slice(1)) + firstChar;
		return result;
    }
}
console.log(revStr('god'));