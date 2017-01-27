'use strict'

export default class PriorityQueue {
  constructor() {
    this.storage = []
    this.count = 0
  }

  enqueue(name, priority) {
    this.storage[this.count++] = {name, priority}
    return this.storage
  }

  front() {
    if(this.count !== 0) {
      let highest = this.storage[0].priority, name

      for(let i = 0; i < this.count; i++) {
        if(this.storage[i].priority < highest) {
          highest = this.storage[i].priority
          name = this.storage[i]
        }
      }
      return name
    } else {
      return null
    }
  }

  back() {
    if(this.count !== 0) {
      let lowest = this.storage[0].priority, name

      for(let i = 0; i < this.count; i++) {
        if(this.storage[i].priority < lowest) {
          lowest = this.storage[i].priority
          name = this.storage[i]
        }
      }
      return name
    } else {
      return null
    }
  }
 
  dequeue() {
    return this.count > 0 ? this.storage.splice(0,1)[0] : null
  }

  isEmpty() {
    return this.count === 0
  }

  length() {
    return this.count
  }
}