import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../src/binarySearchTree'

chai.use(chaiChange)

describe('BinarySearchTree', () => {
  'use strict'

  it('exists', () => {
    expect(BinarySearchTree).to.be.a('function')
  })

  context('insert()', () => {
    it('inserts a node with the specified value into the tree.', () => {
      const bst = new BinarySearchTree()

      bst.insert(1)
      bst.insert(2)
      bst.insert(3)

      expect(bst.count).to.eql(2)
    })
  })

  context('search()', () => {
    it('returns a node object.', () => {
      const bst = new BinarySearchTree()

      bst.search(10)
      bst.search(15)
      bst.search(20)

      expect(bst.count).to.eql(0)
    })

    it('returns null if node is not found.', () => {
      const bst = new BinarySearchTree()

      expect(bst.count).to.eql(0)
    })
  })

  context('remove()', () => {
    it('removes an value\'s node from the tree.', () => {
      const bst = new BinarySearchTree()

      bst.remove(20)
      bst.remove(25)
      bst.remove(30)

      expect(bst.count).to.eql(0)
    })
  })
})