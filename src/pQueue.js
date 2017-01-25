'use strict'

export default class pQueue {
  constructor() {
    this.storage = []
    this.front = 0
  }

  enqueue(name, priority) {
    this.storage[this.front++] = {name, priority}
    return this.storage
  }

  isEmpty() {
    return this.front === 0
  }

  length() {
    return this.front
  }
}