'use strict'

export default class Set {
  constructor(){
    this.storage = []
    this.index = 0
  }

  add(element){
    if(!this.contains(element)){
      this.storage[this.index++] = element
    }
  }

  contains(element){
    for(let i = 0; i < this.index; i++){
      if(this.storage[i] === element){
        return true
      }
    }
    return false
  }

  size(){
    return this.index
  }

  isEmpty() {
    return this.index === 0
  }

  remove(element){
    let newArray = []
    let newIndex = 0
    for(let i = 0; i < this.index; i++){
      if(this.storage[i] !== element){
        newArray[newIndex++] = this.storage[i]
      }
    }
    this.storage = newArray
    this.index = newIndex
  }

  union(otherSet){
    let newSet = this.storage
    let newIndex = this.index
    for(let i = 0; i < otherSet.index; i++){
      if(!this.contains(otherSet.storage[i])){
        newSet[newIndex++] = (otherSet.storage[i])
      }
    }
    return newSet
  }

  intersect(otherSet){
    let newSet = []
    let newIndex = 0
    for(let i = 0; i < otherSet.index; i++){
      if(this.contains(otherSet.storage[i])){
        newSet[newIndex++] = otherSet.storage[i]
      }
    }
    return newSet
  }

  difference(otherSet){
    let newSet = []
    let newIndex = 0
    for(let i = 0; i < this.index; i++){
      if(!otherSet.contains(this.storage[i])){
        newSet[newIndex++] = this.storage[i]
      }
    }
    return newSet
  }

  isSubset(otherSet){
    for(let i = 0; i < this.index; i++){
      let subset = false
      for(let j = 0; j < otherSet.index; j++){
        if(this.storage[i] === otherSet.storage[j]){
          subset = true
        }
      }
      if(subset === false){
        return false
      }
    }
    return true
  }

  clone(){
    let newArray = []
    let newIndex = 0
    for(let i = 0; i < this.index; i++){
      newArray[newIndex++] = this.storage[i]
    }
    return newArray
  }

  forEach(element){
    for(let i = 0; i < this.index; i++){
      this.storage[i] = element(this.storage[i])
    }
  }
}
