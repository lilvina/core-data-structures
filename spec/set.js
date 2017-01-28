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
    it('adds A to the set and checks if the set contains A', () => {
      const mySet = new Set()
      mySet.add('A')
      expect(mySet.contains('A')).to.equal(true)
    })
  })


  context('contains()', () => {
    it('Adds A, and returns true if contains A', () => {
      const mySet = new Set()
      mySet.add('A')
      expect(mySet.contains('A')).to.equal(true)
    })
    it('Adds A, checks to see the set does not contain B', () => {
      const mySet = new Set()
      mySet.add('A')
      expect(mySet.contains('B')).to.equal(false)
    })
  })

  context('isEmpty()', () => {
    it('Adds A and checks that is empty returns false.', () => {
      const mySet = new Set()
      mySet.add('A')
      expect(mySet.isEmpty()).to.equal(false)
    })
    it('Leaves set empty and checks that isEmpty returns true.', () => {
      const mySet = new Set()
      expect(mySet.isEmpty()).to.equal(true)
    })
  })

  context('remove()', () => {
    it('Adds, then removes A, returns true if the set is empty', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.remove('A')
      expect(mySet.isEmpty()).to.equal(true)
    })
    it('Adds, then removes A, returns true if contains A returns false', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.remove('A')
      expect(mySet.contains('A')).to.equal(false)
    })
    it('Adds A,B,C, then removes A, returns true if size is 2', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      mySet.remove('A')
      expect(mySet.size()).to.equal(2)
    })
    it('Adds A,B,C, then removes A, returns true if the set deep equals B,C', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      mySet.remove('A')
      expect(mySet.storage).to.deep.equal(['B','C'])
    })
  })

  context('size()', () => {
    it('Adds A,B,C and returns true if size is 3', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      expect(mySet.size()).to.equal(3)
    })
    it('Add nothing, returns true if size is 0.', () => {
      const mySet = new Set()
      expect(mySet.size()).to.equal(0)
    })
  })

  context('union()', () => {
    it('Adds \'A\',\'B\',\'C\' then returns true if union [\'D\',\'E\',\'F\'] returns a set with size of 6', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      expect(mySet.union(['D','E','F']).length).to.equal(6)
    })
    it('Adds \'A\',\'B\',\'C\' then returns true if union [\'C\',\'D\',\'E\',\'F\'] returns the set [\'A\',\'B\',\'C\',\'D\',\'E\',\'F\']', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      expect(mySet.union(['C','D','E','F'])).to.deep.equal(['A','B','C','D','E','F'])
    })
  })

  context('intersect()', () => {
    it('Adds A,B,C, then intersect [B,C,D] and returns true if returned set\'s size is 2', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      expect(mySet.intersect(['B','C','D']).length).to.equal(2)
    })
    it('Adds A,B,C, then intersect [B,C,D] and returns true if returned set contains B and C', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      expect(mySet.intersect(['B','C','D'])).to.deep.equal(['B','C'])
    })
  })

  context('difference()', () => {
    it('Adds A,B,C, then difference [B,C,D] and returns true if returned set\'s size is 1', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      expect(mySet.difference(['B','C','D']).length).to.equal(1)
    })
    it('Adds A,B,C, then difference [B,C,D] and returns true if returned set contains A', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      mySet.difference(['B','C','D'])
      expect(mySet.contains('A')).to.equal(true)
    })
  })

  context('isSubset()', () => {
    it('Adds B,C, then returns true if its a subset of A, B, C, D', () => {
      const mySet = new Set()
      mySet.add('B')
      mySet.add('C')
      expect(mySet.isSubset(['A','B','C','D'])).to.equal(true)
    })
    it('Adds B,C, then returns false if its not a subset of C D E', () => {
      const mySet = new Set()
      mySet.add('B')
      mySet.add('C')
      expect(mySet.isSubset(['C','D','E'])).to.equal(false)

    })
  })

  context('clone()', () => {
    it('Clones the array and checks if the new array has the same content the origional', () => {
      const mySet = new Set()
      mySet.add('B')
      mySet.add('C')
      expect(mySet.clone()).to.deep.equal(mySet.storage)
    })
    it('Clones the array and checks that the returned array is not the same array', () => {
      const mySet = new Set()
      mySet.add('B')
      mySet.add('C')
      expect(mySet.clone()).to.not.equal(mySet.storage)
    })
  })

})
