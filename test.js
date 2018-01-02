var fixWidth = require('./index')
var assert = require('assert')

describe("fixwidth test",function() {
  it('args (7,2) should return \'07\'',function() {
    var result = fixWidth(7,2)

    assert.equal(result, '07')
  })

  it('args (2017,2) shoud return \'17\'',function() {
    var result = fixWidth(2017,2)

    assert.equal(result, '17')
  })
})
