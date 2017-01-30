import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hash'

chai.use(chaiChange)

describe('HashTable', () => {
  'use strict'

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  context('put()', () => {
    it('adds a key-value pair to the hash table.', () => {
      const ht = new HashTable()

      ht.put('name', "Zanibar")

      expect(ht.storage[0]).to.eql({'name': 'Zanibar'})
    })
  })

  context('get()', () => {
    it('returns the data associated with key.', () => {
      const ht = new HashTable()
      ht.put('name', "Zanibar")

      expect(ht.get("name")).to.eql("Zanibar")
    })
  })
})