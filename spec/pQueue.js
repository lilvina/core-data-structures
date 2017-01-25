import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import pQueue from '../src/pQueue'

chai.use(chaiChange)

describe('pQueue', () => {
  'use strict'

  it('exists', () => {
    expect(pQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element with priority to the back of the queue.', () => {
      const aQueue = new pQueue()

      aQueue.enqueue('dude', 90)
      aQueue.enqueue('cool', 20)
      aQueue.enqueue('turd', 50)
      expect(aQueue.enqueue('foo',70)).to.eql([{name: 'dude', priority: 90}, {name: 'cool',  priority: 20}, {name: 'turd', priority: 50}, {name: 'foo', priority: 70}])
    })
  })

  // context('front()', () => {
  //   it('returns the front element (highest priority) in the queue.', () => {
  //     const aQueue = new pQueue()

  //     aQueue.enqueue('baz', 300)
  //     aQueue.enqueue('bar', 200)

  //     expect(() => aQueue.front().to.eql([{name: 'baz', priority: 300}]))
  //   })

  //   it('returns null if the queue is empty.', () => {
  //     const aQueue = new pQueue()

  //     expect(() => aQueue.front().to.eql(null))
  //   })
  // })

  // context('back()', () => {
  //   it('returns the back element (lowest priority) in the queue.', () {
  //     const aQueue = new pQueue()

  //     aQueue.enqueue('bar', 200)
  //     aQueue.enqueue('foo', 100)

  //     expect(() => aQueue.back().to.eql([{name: 'foo', priority: 100}]))
  //   })

  //   it('returns null if the queue is empty.', () => {
  //     const aQueue = new pQueue()

  //     expect(() => pQueue.back().to.eql(null))
  //   })
  // })

  context('isEmpty()', () => {
    it('returns true if the queue is empty.', () => {
      const aQueue = new pQueue()

      expect(() => aQueue.isEmpty().to.eql(true))
    })

    it('returns false if queue is false.', () => {
      const aQueue = new pQueue()
      aQueue.enqueue('dude', 90)

      expect(() => aQueue.isEmpty().to.eql(false))
    })
  })

  context('length()', () => {
    it('returns the number of elements in the queue.', () => {
      const aQueue = new pQueue()
      aQueue.enqueue('dude', 90)
      aQueue.enqueue('cool', 20)
      aQueue.enqueue('turd', 50)

      expect(aQueue.length()).to.eql(3)
    })
  })
})