function BinarySearchtree() {

    var Node=function (key) {
        this.key=key;
        this.left=null;
        this.right=null;
    }
    var root=null;
    //向树中插入一个结点
    this.insert=function (key) {
        var newNode=new Node(key);
        if(root===null){
            root=newNode;
        }else {
            insertNode(root,newNode);
        }
    }
    var insertNode=function (node,newNode) {
        if(newNode.key<node.key){
            if(node.left===null){
                node.left=newNode;
            }else {
                insertNode(node.left,newNode);
            }
        }else {
            if(node.right===null){
                node.right=newNode;
            }else {
                insertNode(node.right,newNode);
            }
        }
    }
    //中序遍历
    this.inOrderTreverse=function (callback) {
        inOrderTreverseNode(root,callback);
    }
    var inOrderTreverseNode=function (node,callback) {
        if(node!==null){
            inOrderTreverseNode(node.left,callback);
            callback(node.key);
            inOrderTreverseNode(node.right,callback);
        }
    }
    this.preOrderTreverse=function (callback) {

        preOrderTreverseNode(root,callback);

    }
    var  preOrderTreverseNode=function (node,callback) {
        if(node!==null){
            callback(node.key);
            preOrderTreverseNode(node.left,callback);
            preOrderTreverseNode(node.right,callback);
        }
    }
    this.postOrderTreverse=function (callback) {
        postOrderTreverseNode(root,callback);
    }
    var postOrderTreverseNode=function(node,callback){
        if(node!==null){
            postOrderTreverseNode(node.left,callback);
            postOrderTreverseNode(node.right,callback);
            callback(node.key);
        }
    }
    //搜索树中的值
    this.min=function () {
        return minNode(root);
    }
    var minNode=function (node) {
        if(node){
            while (node&&node.left!=null){
                node=node.left
            }
            return node.key;
        }
        return null;

    }
    this.max=function () {
        return maxNode(root);
    }
    var maxNode=function (node) {
        if(node){
            while (node&&node.right!==null) {
               node=node.right;
            }
            return node.key;
        }
        return null;
    }
    this.search=function (key) {
        return searchNode(root,key);
    }
    var searchNode=function (node,key) {
        if(node===null){
            return false;
        }
        if(key<node.key){
            return searchNode(node.left,key);
        }else if(key>node.key){
            return searchNode(node.right,key);
        }else {
            return true;
        }
    }
    this.remove=function (key) {
        root=removeNode(root,key);
    }
    var removeNode=function (node,key) {
        var removeNode=function (node,key) {
            if(node===null){
                return null;
            }
            if(key<node.key){
                node.left=removeNode(node.left,key);
                return node;
            }else if (key>node.key){
                node.right=removeNode(node.right,key);
                return node;
            } else {
                if(node.left===null&&node.right===null){
                    node=null;
                    return node;
                }if(node.left===null){
                    node=node.right;
                    return node;
                }else if(node.right===null){
                    node=node.left;
                    return node;
                }
                var aux=findMinNode(node.right);
                node.key=aux.key;
                node.right=removeNode(node.right,aux.key);
                return node;
            }
        }
    }
    var findMinNode=function (node) {
        while (node&&node.left!==null){
            node=node.left;
        }
        return node;
    }
    this.getHeight=function () {
        return getHeightHelp(root);
    }
    var  getHeightHelp=function (node) {
        if(node===null){
            return 0;
        }
        var leftCount=getHeightHelp(node.left)+1;
        var rightCount=getHeightHelp(node.right)+1;
        return Math.max(leftCount,rightCount)
    }
}
var tree=new BinarySearchtree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
function printNode(value) {
    console.log(value);
}
//tree.inOrderTreverse(printNode);
//tree.preOrderTreverse(printNode);
//tree.postOrderTreverse(printNode);
/*
console.log(tree.max());
console.log(tree.min());*/
//console.log(tree.search(25),tree.search(0));
console.log(tree.getHeight());
