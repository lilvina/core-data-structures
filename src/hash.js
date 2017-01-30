'use strict'
class Node {
  constructor(key, value) {
    this[key] = value || null
  }
}

export default class HashTable {
  constructor() {
    this.count = 0
    this.storage = []
  }

  put(key, value) {
    const newNode = new Node(key, value)

    this.storage[this.count++] = newNode
  }

  get(key) {
    for (let i = 0; i < this.count; i++) {
      console.log('Kay', i, this.storage[i][key])
      if(this.storage[i][key]) {
       console.log(this.storage[i][key])
        return this.storage[i][key]
      }
    }

    return null
  }
}