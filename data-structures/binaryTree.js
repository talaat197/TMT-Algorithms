class Node{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree
{
    constructor()
    {
        this.root = null;
    }

    insert(data)
    {
        var newNode = new Node(data);

        if(this.root == null){
            this.root = newNode;
        }
        else{
            this.insertNode(this.root , newNode)
        }
    }

    insertNode(node , newNode)
    {
        if(node.data < newNode.data) // go right
        {
            if(node.right === null)
            {
                node.right = newNode;
            }
            else{
                this.insertNode(node.right , newNode);
            }
        }
        else // new node data is less or equal to the current node
        {
            if(node.left === null)
            {
                node.left = newNode;
            }
            else{
                this.insertNode(node.left , newNode)
            }
        }
    }

    remove(data)
    {
        this.root = this.removeNode(this.root , data);
    }

    removeNode(node , data)
    {
        if(node === null) // not found
            return null;
        
        if(node.data > data) // go left
        {
            node.left = this.removeNode(node.left , data);
            return node;
        }

        if(node.data < data) // go right
        {
            node.right = this.removeNode(node.right , data)
            return node;
        }
        else // found
        {
            if(node.right === null && node.left === null) // no children
            {
                node = null;
                return node;
            }

            if(node.left === null) // right children
            {
                node = node.right;
                return node;
            }

            if(node.right === null) // left children
            {
                node = node.left;
                return node;
            }
            // both children
            var minNode = this.findMinNode(node.right);
            node.data = minNode.data;
            
            node.right =  this.removeNode(node.right , minNode.data);

            return node;
        }

    }

    findMinNode(node)
    {
        if(node.left !== null)
        {
            return this.findMinNode(node.left);
        }

        return node;
    }

    inorder(node) // (Left, Root, Right)
    {
        if(node !== null)
        {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder(node) // (Root, Left, Right)
    {
        if(node !== null)
        {
            console.log(node.data) // root
            this.inorder(node.left) // left
            this.inorder(node.right) // right
        }
    }

    postorder(node)
    {
        if(node !== null)
        {
            this.inorder(node.left)
            this.inorder(node.right)
            console.log(node.data)
        }
    }

    search(node , data)
    {
        if(node === null) return null;

        if(data < node.data)
        {
            return this.search(node.left , data)
        }
        else if(data > node.data)
        {
            return this.search(node.right , data);
        }

        return node;
    }

    getRootNode()
    {
        return this.root;
    }
}

var BST = new BinaryTree();
// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
                         
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17
 
var root = BST.getRootNode();   
// prints 5 7 9 10 13 15 17 22 25 27
// BST.inorder(root , 'in order');

// BST.remove(15);

// BST.preorder(root);

// BST.remove(25);
BST.remove(15);

BST.postorder(root , 'post order');

var found = BST.search(root , 22);
found = found ? found.data : null;

console.log(found , 'found ?')
