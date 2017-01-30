import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe('Set', () => {
  'use strict'

  it('exists', () => {
    expect(Set).to.be.a('function')
  })

  context('add()', () => {
    it('Adds A to the set and passes if contains A returns true', () => {
      const mySet = new Set()
      mySet.add('A')
      expect(mySet.contains('A')).to.equal(true)
    })
  })

  context('contains()', () => {
    it('Adds A, passes if contains A returns true', () => {
      const mySet = new Set()
      mySet.add('A')
      expect(mySet.contains('A')).to.equal(true)
    })
    it('Adds A, passes if contains B returns false', () => {
      const mySet = new Set()
      mySet.add('A')
      expect(mySet.contains('B')).to.equal(false)
    })
  })

  context('isEmpty()', () => {
    it('Adds A and passes if isempty returns false.', () => {
      const mySet = new Set()
      mySet.add('A')
      expect(mySet.isEmpty()).to.equal(false)
    })
    it('Leaves set empty and passes if isEmpty returns true.', () => {
      const mySet = new Set()
      expect(mySet.isEmpty()).to.equal(true)
    })
  })

  context('remove()', () => {
    it('Adds, then removes A, passes if the set is empty', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.remove('A')
      expect(mySet.isEmpty()).to.equal(true)
    })
    it('Adds, then removes A, passes if the set contains A returns false', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.remove('A')
      expect(mySet.contains('A')).to.equal(false)
    })
    it('Set A,B,C, remove A, passes if set size is 2', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      mySet.remove('A')
      expect(mySet.size()).to.equal(2)
    })
    it('Set A,B,C, remove A, passes if set storage is deep equal to B,C', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      mySet.remove('A')
      expect(mySet.storage).to.deep.equal(['B','C'])
    })
  })

  context('size()', () => {
    it('Set A,B,C size passes if it returns 3', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      expect(mySet.size()).to.equal(3)
    })
    it('Add nothing, size passes if it returns 0.', () => {
      const mySet = new Set()
      expect(mySet.size()).to.equal(0)
    })
  })

  context('union()', () => {
    it("Set 'A','B','C' union 'D','E','F' passes if returned set has size of 6", () => {
      const mySet = new Set()
      const otherSet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      otherSet.add('D')
      otherSet.add('E')
      otherSet.add('F')
      expect(mySet.union(otherSet).size()).to.equal(6)
    })
    it("Set 'A','B','C' union 'C','D','E','F' passes if returned set is 'A','B','C','D','E','F'", () => {
      const mySet = new Set()
      const otherSet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      otherSet.add('C')
      otherSet.add('D')
      otherSet.add('E')
      otherSet.add('F')
      expect(mySet.union(otherSet).storage).to.deep.equal(['A','B','C','D','E','F'])
    })
  })

  context('intersect()', () => {
    it('Set A,B,C intersect set B,C,D passes if returned set\'s size is 2', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      const otherSet = new Set()
      otherSet.add('B')
      otherSet.add('C')
      otherSet.add('D')
      expect(mySet.intersect(otherSet).size()).to.equal(2)
    })
    it('Set A,B,C, intersect set B,C,D passes if returned set contains B and C', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      const otherSet = new Set()
      otherSet.add('B')
      otherSet.add('C')
      otherSet.add('D')
      expect(mySet.intersect(otherSet).storage).to.deep.equal(['B','C'])
    })
  })

  context('difference()', () => {
    it("Set A,B,C, difference set B,C,D passes if returned set's size is 1", () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      const otherSet = new Set()
      otherSet.add('B')
      otherSet.add('C')
      otherSet.add('D')
      expect(mySet.difference(otherSet).size()).to.equal(1)
    })
    it('Set A,B,C, difference set B,C,D passes if returned set contains A', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      const otherSet = new Set()
      otherSet.add('B')
      otherSet.add('C')
      otherSet.add('D')
      expect(mySet.difference(otherSet).contains('A')).to.equal(true)
    })
    it('Set A,B,C, difference set B,C,D passes if returned set does not contain B', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      const otherSet = new Set()
      otherSet.add('B')
      otherSet.add('C')
      otherSet.add('D')
      expect(mySet.difference(otherSet).contains('B')).to.equal(false)
    })
  })

  context('isSubset()', () => {
    it('Set B,C, isSubset of A, B, C, D passes if true', () => {
      const mySet = new Set()
      mySet.add('B')
      mySet.add('C')
      const otherSet = new Set()
      otherSet.add('A')
      otherSet.add('B')
      otherSet.add('C')
      otherSet.add('D')
      expect(mySet.isSubset(otherSet)).to.equal(true)
    })
    it('Set B,C, is subset of C D E, passes if false', () => {
      const mySet = new Set()
      mySet.add('B')
      mySet.add('C')
      const otherSet = new Set()
      otherSet.add('C')
      otherSet.add('D')
      otherSet.add('E')
      expect(mySet.isSubset(otherSet)).to.equal(false)
    })
  })

  context('clone()', () => {
    it('Clones the array and passes if the new array has the same content the origional', () => {
      const mySet = new Set()
      mySet.add('B')
      mySet.add('C')
      expect(mySet.clone()).to.deep.equal(mySet.storage)
    })
    it('Clones the array and passes if the returned array is not the same array', () => {
      const mySet = new Set()
      mySet.add('B')
      mySet.add('C')
      expect(mySet.clone()).to.not.equal(mySet.storage)
    })
  })

  context('forEach()', () => {
    it('Set 1,2,3 forEach element++ passes if it returns 2,3,4', () => {
      const mySet = new Set()
      mySet.add(1)
      mySet.add(2)
      mySet.add(3)
      mySet.forEach((element) => ++element)
      expect(mySet.storage).to.deep.equal([2,3,4])
    })
    it('Set A,B,C forEach element.toLowerCase() passes if it returns a,b,c', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      mySet.forEach((element) => element.toLowerCase())
      expect(mySet.storage).to.deep.equal(['a','b','c'])
    })
  })
})
