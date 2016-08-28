function createNode(val){
	var node = {
		data: val,
		leftchild: null,
		rightchild:null
	}
	return node;
}

function addNode(root, val){
	if(!root){
		return createNode(val);
	}
	var currentNode = root;
	var node1 = createNode(val);
	while(currentNode){

	if(currentNode.val < node1.val){
		if(!createNode.rightchild){
			currentNode.rightchild = node1;
			break;
		}
		else{
            currentNode = currentNode.rightchild;
		}
	}
	else{
         if(!currentNode.left){
            currentNode.left = node1;
            break;
         }
         else{
            currentNode = currentNode.left;
         }
    }
}
    return root;
}
var root = createNode(50);
console.log(JSON.stringify(addNode(root,60),null,4));

