'use strict'

export default class pQueue {
  constructor() {
    this.storage = []
    this.top = 0
  }

  enqueue(name, priority) {
    this.storage[this.top++] = {name, priority}
    return this.storage
  }

  isEmpty() {
    return this.top === 0
  }

  length() {
    return this.top
  }
}