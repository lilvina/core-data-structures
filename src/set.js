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
    let newSet = new Set()
    newSet.storage = this.storage
    newSet.index = this.index
    for(let i = 0; i < otherSet.index; i++){
      if(!this.contains(otherSet.storage[i])){
        newSet.add(otherSet.storage[i])
      }
    }
    return newSet
  }

  intersect(otherSet){
    let newSet = new Set()
    for(let i = 0; i < otherSet.index; i++){
      if(this.contains(otherSet.storage[i])){
        newSet.add(otherSet.storage[i])
      }
    }
    return newSet
  }

  difference(otherSet){
    let newSet = new Set()
    for(let i = 0; i < this.index; i++){
      if(!otherSet.contains(this.storage[i])){
        newSet.add(this.storage[i])
      }
    }
    return newSet
  }

  isSubset(otherSet){
    for(let i = 0; i < this.index; i++){
      if(!otherSet.contains(this.storage[i])){
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

  forEach(callback){
    for(let i = 0; i < this.index; i++){
      this.storage[i] = callback(this.storage[i])
    }
  }
}
