const node = (value = null, leftChild = null, rightChild = null) =>{
    return {
        value, 
        leftChild, 
        rightChild
    }
}

class BinaryTree{
    constructor(array){
        const sortedArray = [...new set(array)].sort((a, b) => a -b);
        this.root = this.buildTree(sortedArray);
    }

    buildTree(sortedArray){
        if(sortedArray.length === 0) return null;
        const midpoint = Math.floor(sortedArray.length)/2;
        const newNode = node(sortedArray[midpoint]);
        newNode.leftChild = this.buildTree(sortedArray.slice(0, midpoint));
        newNode.rightChild = this.buildTree(sortedArray.slice(midpoint + 1));
        return newNode;
    }


    insert(value, currentNode = this.root){
        if (currentNode === null) return node(value);
        if (currentNode.value === value) return;

        if(currentNode.value < value ){
            currentNode.rightChild = this.insert(value, currentNode.rightChild);
            }
            else{
                currentNode.leftChild = this.insert(value, currentNode.leftChild);
            }
            return currentNode;
    }

    remove(value, currentNode = this.root){
        if(currentNode === null) return currentNode;
        if(currentNode.value === value){
           // put #emoveNodeHelper
            currentNode = this.Node(currentNode);
        }
        else if(currentNode.value > value){
            currentNode.leftChild = this.remove(value, currentNode.leftChild);
        }
        else {
            currentNode.rightChild = this.insert(value, currentNode.rightChild);
        }
        return currentNode;
    }

    find(value, Node = this.root){
         if(node === null || node.value === value)  return node;

         if(node.value < value){
            return this.find(value, node.rightChild);
         }
         else{
            return this.find(value, node.leftChild);
         }

    }


}