const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null
    this.minimum = null
    this.maximum = null
  }
  root() {
    return this.rootNode
  }

  add(data) {
    if (!this.minimum) this.minimum = data
    if (!this.maximum) this.maximum = data
    if (data < this.minimum) this.minimum = data
    if (data > this.maximum) this.maximum = data
    let newNode = new Node(data)
    if (!this.rootNode) {
      this.rootNode = newNode
    } else {
      addNode(newNode, this.rootNode)
    }

    function addNode(node, currentNode) {
      if (!currentNode) return node
      if (node.data === currentNode.data) return currentNode
      if (node.data < currentNode.data) {
        currentNode.left = addNode(node, currentNode.left)
        return currentNode
      } else {
        currentNode.right = addNode(node, currentNode.right)
        return currentNode
      }
    }
  }

  has(data) {
    return this.find(data) ? true : false
  }

  find(data) {
    let currentNode = this.rootNode
    if (currentNode.data === data) return currentNode
    const foundNode = findNode(data, currentNode)

    function findNode(value, node) {
      if (!node) return null
      if (node.data === value) return node
      return value < node.data ? findNode(value, node.left) : findNode(value, node.right)
    }
    return foundNode
  }

  remove(data) {
    this.rootNode = removeData(this.rootNode, data)

    function removeData(data, node) {
      // if (data === node.data) {
      //   if (!node.left && !node.right) {
      //     return null
      //   }
      //   if(node.left && !node.right) {
      //     node = node.left
      //     return node
      //   }
      //   if(!node.left && node.right) {
      //     node = node.right
      //     return node
      //   }
      //   if (node.left && node.right) {
      //     let rightMinimum = node.right
      //     while (rightMinimum.left) {
      //       rightMinimum = rightMinimum.left
      //     }
      //     node.data = rightMinimum.data
      //     node.right = removeData(node.right, rightMinimum.data)
      //     return node
      //   }
      // } else {
      //   if (data > node.data) {
      //     node = removeData(data, node.right)
      //     return node
      //   }
      //   if (data < node.data) {
      //     node = removeData(data, node.left)
      //     return node
      //   }
      // }
      // return node
    }
  }

  min() {
    return this.minimum
  }

  max() {
    return this.maximum
  }
}
// const tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// tree.add(54);
// tree.add(2);
// tree.add(6);
// tree.add(8);
// tree.add(31);
// tree.add(1);
// tree.has(54)//, true);
// tree.has(8) //,// true);
// tree.has(7) //,// false);
// tree.has(4) //,// false);
// console.log(tree.find(8).data) //, 8);
// console.log(tree.find(2).data) //, 2);
// console.log(tree.find(32).data) //, 32);
// console.log(tree.find(14).data) //, 14);
// console.log(tree.rootNode)
// console.log(tree.rootNode.right)
// console.log(tree.rootNode.right.right.right)

module.exports = {
  BinarySearchTree
};