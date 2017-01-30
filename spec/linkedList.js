import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'

chai.use(chaiChange)

describe('LinkedList', () => {
  'use strict'

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  context('insert()', () => {
    it('Adds A to the list and passes if the set contains A', () => {
      const myList = new LinkedList()
      myList.insert('A')
      expect(myList.contains('A')).to.equal(true)
    })

    it('Adds A,B,C to the list and passes if the set contains C', () => {
      const myList = new LinkedList()
      myList.insert('A')
      myList.insert('B')
      myList.insert('C')
      expect(myList.contains('C')).to.equal(true)
    })

    it('Adds A,B,C to the list and passes if the set does not contain D', () => {
      const myList = new LinkedList()
      myList.insert('A')
      myList.insert('B')
      myList.insert('C')
      expect(myList.contains('D')).to.equal(false)
    })
  })

  context('getHeadNode()', () => {
    it('Adds A to the list and passes if getHeadNode() returns a node with data of A', () => {
      const myList = new LinkedList()
      myList.insert('A')
      expect(myList.getHeadNode().data).to.equal('A')
    })
    it('Adds A,B,C to the list and passes if getHeadNode() returns a node with data of A', () => {
      const myList = new LinkedList()
      myList.insert('A')
      myList.insert('B')
      myList.insert('C')
      expect(myList.getHeadNode().data).to.equal('A')
    })
  })

  context('getTailNode()', () => {
    it('Adds A,B,C to the list and passes if getTailNode() returns a node with data of A', () => {
      const myList = new LinkedList()
      myList.insert('A')
      expect(myList.getTailNode().data).to.equal('A')
    })
    it('Adds A,B,C to the list and passes if getTailNode() returns a node with data of C', () => {
      const myList = new LinkedList()
      myList.insert('A')
      myList.insert('B')
      myList.insert('C')
      expect(myList.getTailNode().data).to.equal('C')
    })
  })

  context('contains()', () => {
    it("Adds A to the list and passes if contains('A') returns true", () => {
      const myList = new LinkedList()
      myList.insert('A')
      expect(myList.contains('A')).to.equal(true)
    })

    it("Adds A,B,C to the list and passes if contains('C') returns true", () => {
      const myList = new LinkedList()
      myList.insert('A')
      myList.insert('B')
      myList.insert('C')
      expect(myList.contains('C')).to.equal(true)
    })

    it("Adds nothing to the list and passes if contains('C') returns false", () => {
      const myList = new LinkedList()
      expect(myList.contains('C')).to.equal(false)
    })
  })

  context('find()', () => {
    it("Adds A to the list and passes if find('A') returns a node with data of 'A'", () => {
      const myList = new LinkedList()
      myList.insert('A')
      expect(myList.find('A').data).to.equal('A')
    })

    it("Adds A,B,C to the list and passes if find('C') returns a node with data of 'C'", () => {
      const myList = new LinkedList()
      myList.insert('A')
      myList.insert('B')
      myList.insert('C')
      expect(myList.find('C').data).to.equal('C')
    })

    it("Adds A,B,C to the list and passes if find('D') returns -1", () => {
      const myList = new LinkedList()
      myList.insert('A')
      myList.insert('B')
      myList.insert('C')
      expect(myList.find('D')).to.equal(-1)
    })

    it("Adds nothing to the list and passes if find('A') returns -1", () => {
      const myList = new LinkedList()
      expect(myList.find('A')).to.equal(-1)
    })
  })

  context('insertFirst()', () => {
    it('insertFirst A to the list and passes if the list contains a node with data A', () => {
      const myList = new LinkedList()
      myList.insertFirst('A')
      expect(myList.contains('A')).to.equal(true)
    })

    it('insertFirst A,B,C and passes if getHeadNode contains data C', () => {
      const myList = new LinkedList()
      myList.insertFirst('A')
      myList.insertFirst('B')
      myList.insertFirst('C')
      expect(myList.getHeadNode().data).to.equal('C')
    })

    it('insertFirst A,B,C and passes if getTailNode contains data A', () => {
      const myList = new LinkedList()
      myList.insertFirst('A')
      myList.insertFirst('B')
      myList.insertFirst('C')
      expect(myList.getTailNode().data).to.equal('A')
    })
  })

  context('insertBefore()', () => {
    it('list A,B,C insertBefore A,D passes if getHeadNode.data returns D', () => {
      const myList = new LinkedList()
      myList.insert('A')
      myList.insert('B')
      myList.insert('C')
      myList.insertBefore('A','D')
      expect(myList.getHeadNode().data).to.equal('D')
    })

    it('List A,B,C insertBefore X,D passes if contains D returns false', () => {
      const myList = new LinkedList()
      myList.insert('A')
      myList.insert('B')
      myList.insert('C')
      myList.insertBefore('X','D')
      expect(myList.contains('D')).to.equal(false)
    })

    it('List A,B,C insertBefore C,D passes if find(B).next.data returns D', () => {
      const myList = new LinkedList()
      myList.insert('A')
      myList.insert('B')
      myList.insert('C')
      myList.insertBefore('C','D')
      expect(myList.find('B').next.data).to.equal('D')
    })
  })

  context('insertAfter()', () => {
    it('list A,B,C insertAfter A,D passes if find(A).next.data returns D', () => {
      const myList = new LinkedList()
      myList.insert('A')
      myList.insert('B')
      myList.insert('C')
      myList.insertAfter('A','D')
      expect(myList.find('A').next.data).to.equal('D')
    })

    it('List A,B,C insertAfter X,D passes if contains D returns false', () => {
      const myList = new LinkedList()
      myList.insert('A')
      myList.insert('B')
      myList.insert('C')
      myList.insertAfter('X','D')
      expect(myList.contains('D')).to.equal(false)
    })
  })

  context('remove()', () => {
    it('list A,B,C remove passes if contains(C) returns false', () => {
      const myList = new LinkedList()
      myList.insert('A')
      myList.insert('B')
      myList.insert('C')
      myList.remove()
      expect(myList.contains('C')).to.equal(false)
    })

    it('list A,B remove passes if contains(B) returns false', () => {
      const myList = new LinkedList()
      myList.insert('A')
      myList.insert('B')
      myList.remove()
      expect(myList.contains('B')).to.equal(false)
    })

    it('list A remove passes if contains(A) returns false', () => {
      const myList = new LinkedList()
      myList.insert('A')
      myList.remove()
      expect(myList.contains('A')).to.equal(false)
    })
  })

  context('removeFirst()', () => {
    it('list A,B,C removeFirst passes if contains(A) returns false', () => {
      const myList = new LinkedList()
      myList.insert('A')
      myList.insert('B')
      myList.insert('C')
      myList.removeFirst()
      expect(myList.contains('A')).to.equal(false)
    })
  })

  context('isEmpty()', () => {
    it('list A,B,C passes if isEmpty returns false', () => {
      const myList = new LinkedList()
      myList.insert('A')
      myList.insert('B')
      myList.insert('C')
      expect(myList.isEmpty()).to.equal(false)
    })

    it('leaves list empty passes if isEmpty returns true', () => {
      const myList = new LinkedList()
      expect(myList.isEmpty()).to.equal(true)
    })
  })

  context('size()', () => {
    it('list A,B,C passes if size returns 3', () => {
      const myList = new LinkedList()
      myList.insert('A')
      myList.insert('B')
      myList.insert('C')
      expect(myList.size()).to.equal(3)
    })

    it('leaves list empty passes if size returns 0', () => {
      const myList = new LinkedList()
      expect(myList.size()).to.equal(0)
    })
  })

  context('clear()', () => {
    it('list A,B,C clear() passes if size returns 0', () => {
      const myList = new LinkedList()
      myList.insert('A')
      myList.insert('B')
      myList.insert('C')
      myList.clear()
      expect(myList.size()).to.equal(0)
    })
  })

})
