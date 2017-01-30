'use strict'

export default class LinkedList {

  constructor(){
    this.index = 0
    this.head = null
  }

  Node(data) {
    this.data = data
    this.next = null
  }

  getHeadNode(){
    return this.head
  }

  getTailNode(){
    let currentNode = this.head
    while (currentNode.next){
      currentNode = currentNode.next
    }
    return currentNode
  }

  contains(element){
    if(this.head === null){
      return false
    }
    let currentNode = this.head

    while (currentNode){

      if(currentNode.data === element){
        return true
      }

      currentNode = currentNode.next

    }
    return false
  }

  find(element){
    if(this.head === null){
      return -1
    }
    let currentNode = this.head
    while (currentNode){

      if(currentNode.data === element){
        return currentNode
      }

      currentNode = currentNode.next

    }
    return -1
  }

  insert(element) {
    let node = new this.Node(element)
    let currentNode = this.head

    if(!currentNode){
      this.head = node
      this.index++

      return node
    }

    while (currentNode.next){
      currentNode = currentNode.next
    }

    currentNode.next = node
    this.index++
    return node
  }

  insertFirst(element) {
    let node = new this.Node(element)
    node.next = this.head
    this.head = node
    return node
  }

  insertBefore(before, element){
    let node = new this.Node(element)

    if(this.head.data === before){
      this.insertFirst(node.data)
      return node
    }

    let currentNode = this.head
    while (currentNode.next){

      if(currentNode.next.data === before){
        node.next = currentNode.next
        currentNode.next = node
        return node
      }
      currentNode = currentNode.next

    }
  }

  insertAfter(after, element){
    let node = new this.Node(element)
    let currentNode = this.head
    while (currentNode){

      if(currentNode.data === after){
        node.next = currentNode.next
        currentNode.next = node
        return node
      }
      currentNode = currentNode.next

    }
  }

  remove(){
    if(!this.head.next){
      this.head = null
      return
    }
    let currentNode = this.head
    while(currentNode.next.next){
      currentNode = currentNode.next
    }
    currentNode.next = null
  }

  removeFirst(){
    if(this.head){
      this.head = this.head.next
    }
  }

  isEmpty(){
    if(this.head){
      return false
    }
    return true
  }

  size(){
    if(this.head){
      let i = 1
      let currentNode = this.head
      while(currentNode.next){
        currentNode = currentNode.next
        i++
      }
      return i
    }
    return 0
  }

  clear(){
    this.head = null
  }

}
