function evalPrefix(input){
	var stack = [];
	var result;
	//var input = ['+', 5, 3 ];
	//var input = ['+', 5, '*', 2, 3];
    var c = input.reverse();
    //console.log(c);
     for(var i = 0; i< c.length; i++){
     	if(Array.isArray(c[i])){
     		stack.push(evalPrefix(c[i]));
        }
     	if(c[i] == Number(c[i]) ){
     		//console.log(c[i]);
     		stack.push(c[i]);
     	}
     	else if(c[i] == '+'){
     		var x = stack.pop();
     		var y = stack.pop();
            result = x + y;
            stack.push(result);
     	}
     	else if(c[i] == '-'){
     		var x = stack.pop();
     		var y = stack.pop();
            result = x - y;
            stack.push(result);
     	}
     	else if(c[i] == '*'){
     		var x = stack.pop();
     		var y = stack.pop();
            result = x * y;
            stack.push(result);
     	}
     	else if(c[i] == '/'){
     		var x = stack.pop();
     		var y = stack.pop();
            result = x / y;
            stack.push(result);
     	}
     }
     return stack.pop();
 }
 //console.log(stack);
input = ['+', 5, ['*', 2, 3]]
console.log("result is", evalPrefix(input));

