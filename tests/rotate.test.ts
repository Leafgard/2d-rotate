/* eslint-env jest */

import { rotate2d, RotationDirection } from '../src'

describe('2-dimensional matrix rotation', () => {
  test('clockwise', () => {
    const initial = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    const rotated = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ]
    expect(rotate2d(initial)).toEqual(rotated)
  })

  test('counter-clockwise', () => {
    const initial = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    const rotated = [
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7]
    ]
    expect(rotate2d(initial, RotationDirection.COUNTER_CLOCKWISE)).toEqual(rotated)
  })
})
