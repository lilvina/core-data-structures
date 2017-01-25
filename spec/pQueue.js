import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/pQueue'

chai.use(chaiChange)

describe('PriorityQueue', () => {
  'use strict'

  it('exists', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element with priority to the back of the queue.', () => {
      const queue = new PriorityQueue()

      queue.enqueue('dude', 90)
      queue.enqueue('cool', 20)
      queue.enqueue('turd', 50)

      expect(queue.enqueue('foo',70)).to.eql([
        {name: 'dude', priority: 90}, 
        {name: 'cool',  priority: 20}, 
        {name: 'turd', priority: 50}, 
        {name: 'foo', priority: 70}
      ])
    })
  })

  context('isEmpty()', () => {
    it('returns true if the queue is empty.', () => {
      const queue = new PriorityQueue()

      expect(queue.isEmpty()).to.be.true
    })

    it('returns false if queue is empty.', () => {
      const queue = new PriorityQueue()

      queue.enqueue('dude', 90)

      expect(() => queue.isEmpty().to.eql(false))
    })
  })

  context('length()', () => {
    it('returns the number of elements in the queue.', () => {
      const queue = new PriorityQueue()

      queue.enqueue('dude', 90)
      queue.enqueue('cool', 20)
      queue.enqueue('turd', 50)

      expect(queue.length()).to.eql(3)
    })
  })
})