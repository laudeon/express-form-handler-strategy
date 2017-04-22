/**
 * @licence MIT
 * @author Louis Audeon <louis.audeon@mail.be>
 */
'use strict'

const chai = require('chai')
const expect = chai.expect
const Strategy = require('./../lib/strategy')

describe('Strategy object', function () {
  it('A new instance should have a `null` name', function () {
    let strategy = new Strategy()

    expect(strategy).to.has.ownProperty('name')
  })

  it('Abstract class: all methods should throw an error', function () {
    let strategy = new Strategy()

    expect(strategy.bind).to.throw(Error, 'Strategy#bind must be overridden by subclass')
    expect(strategy.findOne).to.throw(Error, 'Strategy#findOne must be overridden by subclass')
    expect(strategy.validate).to.throw(Error, 'Strategy#validate must be overridden by subclass')
  })
})
