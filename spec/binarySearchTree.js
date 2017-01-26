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