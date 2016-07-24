import expect from 'expect'
import 'lib/util'


describe('util', () => {
  it('filter map', () => {
    var arr = [1,2,3,4,5]
    var result = arr.filterMap(
      t => t % 2,
      t => t * 2
    )
    expect(result).toEqual([2, 2, 6, 4, 10])
  })
})
