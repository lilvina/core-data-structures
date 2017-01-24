'use strict'

export default class Queue {
  constructor() {
    this.storage = []
    this.top = 0
  }

  enqueue(element) {
    return this.storage[this.top++] = element
  }

  length() {
    return this.top
  }

  dequeue() {
    if(this.storage.length === 0) {
      return null
    } else {
      this.top--
      return this.storage.pop(this.storage.length-1)
    }
  }

  front() {
    if(this.storage.length === 0) {
      return null
    } else {
      return this.storage[this.storage.length-1]
    }
  }

  back() {
    if(this.storage.length === 0) {
      return null
    } else {
      return this.storage[0]
    }
  }

  isEmpty(){
    return this.top === 0
  }

}
