'use strict'

class Node {
  constructor(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null
    this.count = 0
  }

  insert(data) {
   const insertTree = (data, tree) => {
    if(data < tree.data) {
      if(!tree.left) {
        tree.left = new Node(data)
      } else {
        insertTree(data, tree.left)
      }

    } else {
      if(!tree.right) {
        tree.right = new Node(data)
      } else {
        insertTree(data, tree.right)
      }
    }
   }

   if(!this.root) {
    this.root = new Node(data)
   } else {
    insertTree(data, this.root)
    this.count++
   }
  }

  search(data) {
    let current = this.root
    if(current) {
      while(current.data != data) {
        if(data < current.data) {
          current = current.left
        } else {
          current = current.right
        }
        if(current == null) {
          return null
        }
      }
    }
    return current
  }

  remove(node, data) {
    let removeNode
    if(!node) {
      return null
    }

    if(data === node.data) {
      if(!node.left && !node.right) {
        return null
      }

      if(!node.left) {
        return node.right
      } 

      if(!node.right) {
        return node.left

      } else if(data < node.data) {
        node.left = removeNode(node.left, data)
        return node

      } else {
        node.right = removeNode(node.right, data)
        return node
      }
    }
  }
}