var fixWidth = require('./index')
var assert = require('assert')

describe("numberfixwidth test",function() {
  it('args (7,2) should return \'07\'',function() {
    var result = fixWidth(7,2)

    assert.equal(result, '07')
  })

  it('args (2017,2) shoud return \'17\'',function() {
    var result = fixWidth(2017,2)

    assert.equal(result, '17')
  })

  it('should throw an error when arg not a number',function() {
      assert.throws(function() {
        fixWidth(new String('hello'), 2)
      }, /not a number/)
  })
})