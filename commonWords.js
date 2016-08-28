
var a = {'hello':1, 'my':1,'rhythm':1,'sweet':1};
var b = {'the':1, 'hello':1,'my':1};
for(var key in a){
	if(key in b){
       console.log(key);
	}
}




